<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

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
        tooltip: {
          trigger: 'item'
          // formatter: '{b}<br/>{c}'
        },
        legend: {
          orient: 'horizontal',
          bottom: 10,
          data: ['新增用户', '激活数量', '日浏览量']
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['50%', '44%'],
            avoidLabelOverlap: false,
            stillShowZeroSum: true,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontWeight: 'bold',
                color: '#222',
                fontSize: 22,
                align: 'center',
                formatter: '{c}\n日交易(万元)'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 335, name: '新增用户' },
              { value: 310, name: '激活数量' },
              { value: 1548, name: '日浏览量' }
            ]
          }
        ]
      })
    }
  }
}
</script>
