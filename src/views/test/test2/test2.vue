
<template>
  <div>
    <div id="id" @click="test444">
      <div>2222222222</div>
      <div>
        <select id="" v-model="value" name="" multiple style="width: 160px">
          <option value="1">A</option>
          <option value="2">B</option>
          <option value="3">C</option>
        </select>
        <span>select:{{ value }}</span>
        <input v-model.lazy="value">
      </div>
      <!--          <dateTypeOption style="margin-bottom: 20px" title="日交易量" :options="days" v-model="daysType" @input="input" v-slot="options">{{options.opt[2]}}</dateTypeOption>-->
      <dateTypeOption v-model="daysType" style="margin-bottom: 20px" title="日交易量" :options="days" @input="input">
        <template #[test1]>111</template>
        <!--            <template v-slot:test2>222</template>-->
        <template #test2="options">{{ options.user[3] }}</template>
      </dateTypeOption>
    </div>
    <el-alert :closable="false" title="test3">
      <router-view :test-props3="testProps4" @test="test" />
    </el-alert>
    <div id="demo">
      <button @click="show = !show">
        Toggle
      </button>
      <!--      <transition name="fade">-->
      <!--        <p v-if="show">hello</p>-->
      <!--      </transition>-->
      <transition name="slide-fade">
        <p v-if="show">hello</p>
      </transition>
      <!--      <transition name="slide-fade" :duration="1000">-->
      <!--        <p v-if="show">hello2</p>-->
      <!--      </transition>-->
      <transition name="slide-fade" :duration="{ enter: 2500, leave: 2800 }">
        <p v-if="show">hello2</p>
      </transition>
      <transition name="slide-fade2" style="position: relative">
        <button :key="docState" style="position:absolute;left:0px;width:100px" @click="toggle">
          {{ buttonMessage }}
        </button>
      </transition>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import dateTypeOption from '../components/dateTypeOption2'

export default {
  name: 'Test2',
  components: {
    dateTypeOption
  },
  props: {
    testProps: {
      type: String,
      default: 'test123'
    },
    testProps2: {
      type: Object,
      default: function() {
        return { message: 'hello' }
      }
    }
  },
  data: function() {
    return {
      counter: this.testProps,
      testProps4: 'success',
      value: [],
      years: ['2016', '2017', '2018', '2019', '2020'],
      months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      yearsType: '',
      monthsType: '',
      daysType: '',
      test1: 'test1',
      show: true,
      isEditing: true,
      docState: 'edited'
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
        for (var n = 1; n <= 31; n++) dates.push(n + '号')
      }
      return dates
    },
    buttonMessage() {
      return this.docState === 'edited' ? 'Save' : 'Cancel'
    }
  },
  methods: {
    test() {
      console.log(1111)
      console.log(this.counter)
      console.log(this.testProps2)
      if (this.testProps4 === 'success') {
        setTimeout(() => {
          this.testProps4 = 'test'
        }, 1500)
      } else {
        setTimeout(() => {
          this.testProps4 = 'success'
        }, 1500)
      }
    },
    test444() {
      $('.id').css({ 'color': '#ff0011', 'background': 'blue' })

      // var sdfsd = document.getElementById('id')
      // sdfsd.style.color='red'
      // $('.id').mouseenter(function () {
      //   console.log(11111111111111)
      // })
    },
    test3() {
      console.log(111)
    },
    input(e) {
      // console.log(e)
    },
    toggle() {
      this.docState = this.docState === 'edited' ? 'editing' : 'edited'
    }
  }
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .slide-fade-enter-active {

    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }

  .slide-fade2-enter-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade2-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade2-enter
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(-106px);
    opacity: 0;
  }
  .slide-fade2-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(106px);
    opacity: 0;
  }
</style>
