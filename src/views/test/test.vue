<template>
  <div class="dashboard-editor-container">
    <div class="top-box">
      <dateTypeOption v-model="yearsType" style="margin-bottom: 20px;" title="月交易量（万元）" :options="years" @input="input" />
      <el-row :gutter="32">
        <el-col :span="16" :xs="24" :sm="24" :md="14" :lg="16" style="padding: 0">
          <div class="chart-container">
            <line-chart />
          </div>
        </el-col>
        <el-col :span="8" :xs="24" :sm="24" :md="10" :lg="8">
          <div class="details-box">
            <div class="head-box">
              <div class="balance">999,999.00(元)</div>
              <div class="date">2020.05(本月)</div>
            </div>
            <ul class="content-box">
              <li class="item-box">
                <div class="item-title">
                  <div class="item-icon" />
                  <div class="item">新增用户</div>
                </div>
                <div>
                  <div class="item">999</div>
                </div>
              </li>
              <li class="item-box">
                <div class="item-title">
                  <div class="item-icon" />
                  <div class="item">激活数量</div>
                </div>
                <div>
                  <div class="item">999</div>
                </div>
              </li>
              <li class="item-box">
                <div class="item-title">
                  <div class="item-icon" />
                  <div class="item">月浏览量</div>
                </div>
                <div>
                  <div class="item">999</div>
                </div>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :md="10" :lg="8" style="border-radius: 5px">
        <div class="chart-wrapper chart-container">
          <dateTypeOption v-model="daysType" style="margin-bottom: 20px" title="日交易量" :options="days" @input="input" />
          <pie-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="14" :lg="16" style="border-radius: 5px">
        <div class="chart-wrapper">
          <dateTypeOption v-model="monthsType" style="margin-bottom: 20px" title="交易类型（次）" :options="months" @input="input" />
          <bar-chart />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import LineChart from '../../components/Charts/LineMarker'
import PieChart from '../../components/Charts/PieChart'
import BarChart from '../../components/Charts/BarChart'
import dateTypeOption from './components/dateTypeOption'

export default {
  name: 'Test',
  components: {
    LineChart,
    PieChart,
    BarChart,
    dateTypeOption
  },
  data() {
    return {
      years: ['2016', '2017', '2018', '2019', '2020'],
      months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      yearsType: '2020',
      monthsType: '',
      daysType: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }]
    }
  },
  computed: {
    days() {
      var y = Number(this.yearsType) || 2020
      var m = Number(this.monthsType.substring(0, this.monthsType.length - 1)) || 1
      console.log(y, m)
      var dates = []
      if (m === 4 || m === 6 || m === 9 || m === 11) {
        for (var i = 1; i <= 30; i++) dates.push(i + '号')
      } else if (m === 2) {
        if (y % 4 === 0 || y % 400 === 0 && y % 100 !== 0) {
          for (var j = 1; j <= 29; j++) dates.push(j + '号')
        } else {
          for (var k = 1; k <= 28; k++) dates.push(k + '号')
        }
      } else {
        for (var l = 1; l <= 31; l++) dates.push(l + '号')
      }
      return dates
    }
  },
  watch: {
    // dateType:function (newVal) {
    //   console.log(newVal)
    // }
  },
  methods: {
    input(e) {
      // console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
  .dashboard-editor-container {
    padding: 20px;
    background-color: rgb(240, 242, 245);
    position: relative;
    height: 100%;

    .top-box {
      width: 100%;
      background-color: #ffffff;
      border-radius: 6px;
      padding: 20px;
      margin-bottom: 20px;
    }

    .chart-wrapper {
      background: #fff;
      padding: 20px;
      border-radius: 6px;
    }
  }

  .chart-container{
    position: relative;
    width: 100%;
  }

  /*.details-box{*/
  /*  min-width: 500px;*/
  /*}*/

  .head-box{
    width: 100%;
    border-radius: 6px;
    background-color: #1D82F6;
    padding: 15px 20px;
    box-sizing: border-box;

    .balance{
      color: #ffffff;
      font-size: 34px;
      font-weight: 500;
      margin-bottom: 15px;
    }

    .date{
      color: #ffffff;
      font-size: 26px;
    }
  }

  .content-box{
    width: 100%;
    background-color: #fff;
    padding-inline-start: 0;
    margin: 0;
  }

  .item-box{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #DCDFE6;
    box-sizing: border-box;
    margin-top: 16px;

    .item-title{
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .item{
      color: #333;
      display: inline-block;
    }

    .item-icon{
      width: 6px;
      height: 30px;
      background-color: #1D82F6;
      display: inline-block;
      margin-right: 10px;
    }
  }

  @media (max-width:1024px) {
    .chart-wrapper {
      padding: 8px;
    }
  }
</style>
