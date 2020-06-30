<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

const animationDuration = 6000

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
        length: {
          type: 'plain'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: 10,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['储蓄卡交易', '信用卡交易', '微信', '支付宝', '储蓄卡云闪付', '信用卡云闪付', '储蓄卡封顶', '信用卡封顶'],
          axisTick: {
            show: false,
            lineStyle: {
              type: 'dashed',
              color: '#999'
            }
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 15,
              color: '#999'
            }
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false,
            lineStyle: {
              type: 'dashed',
              color: '#999'
            }
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 15,
              color: '#999'
            }
          }
        }],
        series: [{
          name: 'pageA',
          type: 'bar',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                { offset: 0, color: '#73b5ff' },
                { offset: 0.5, color: '#3794ff' },
                { offset: 1, color: '#0077ff' }
              ]
            )
          },
          legendHoverLink: false,
          barWidth: '24%',
          data: [79, 52, 200, 334, 390, 330, 220, 240],
          animationDuration
        }]
      })
    }
  }
}
</script>
