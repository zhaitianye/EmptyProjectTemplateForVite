import {
  ref,
  reactive, // reactive 创建响应式对象
  toRefs, // 响应式对象 转变为ref
  defineComponent,
  getCurrentInstance,
} from 'vue';

import BigNumber from 'bignumber.js';
import moment from 'moment';

export default defineComponent({
  name: 'History',
  components: {},
  setup() {
    // 模拟买历史数据
    let refHistoryData = reactive({
      refHistoryDataList: [
        {
          number: 26.06,
          price: 555.06,
          time: '2021-03-18 16:00:00',
          type: 'buy',
        },
        {
          number: 181.2,
          price: 553.87,
          time: '2021-03-18 15:00:00',
          type: 'sell',
        },
        {
          number: 400.0,
          price: 553.86,
          time: '2021-03-18 14:00:00',
          type: 'buy',
        },
        {
          number: 90.6,
          price: 553.84,
          time: '2021-03-18 13:00:00',
          type: 'sell',
        },
        {
          number: 363.4954,
          price: 553.37,
          time: '2021-03-18 13:00:00',
          type: 'buy',
        },
        {
          number: 364.005,
          price: 553.17,
          time: '2021-03-18 13:00:00',
          type: 'sell',
        },
        {
          number: 30.0,
          price: 552.1,
          time: '2021-03-18 13:00:00',
          type: 'buy',
        },
        {
          number: 364.052,
          price: 552.09,
          time: '2021-03-18 13:00:00',
          type: 'sell',
        },
        {
          number: 40.0,
          price: 551.06,
          time: '2021-03-18 13:00:00',
          type: 'buy',
        },
        {
          number: 37.3019,
          price: 551.03,
          time: '2021-03-18 13:00:00',
          type: 'sell',
        },
        {
          number: 90.6,
          price: 553.84,
          time: '2021-03-18 13:00:00',
          type: 'sell',
        },
        {
          number: 363.4954,
          price: 553.37,
          time: '2021-03-18 13:00:00',
          type: 'buy',
        },
        {
          number: 364.005,
          price: 553.17,
          time: '2021-03-18 13:00:00',
          type: 'sell',
        },
        {
          number: 30.0,
          price: 552.1,
          time: '2021-03-18 13:00:00',
          type: 'buy',
        },
        {
          number: 364.052,
          price: 552.09,
          time: '2021-03-18 13:00:00',
          type: 'sell',
        },
        {
          number: 40.0,
          price: 551.06,
          time: '2021-03-18 13:00:00',
          type: 'buy',
        },
        {
          number: 37.3019,
          price: 551.03,
          time: '2021-03-18 13:00:00',
          type: 'sell',
        },
        {
          number: 90.6,
          price: 553.84,
          time: '2021-03-18 13:00:00',
          type: 'sell',
        },
        {
          number: 363.4954,
          price: 553.37,
          time: '2021-03-18 13:00:00',
          type: 'buy',
        },
        {
          number: 364.005,
          price: 553.17,
          time: '2021-03-18 13:00:00',
          type: 'sell',
        },
        {
          number: 30.0,
          price: 552.1,
          time: '2021-03-18 13:00:00',
          type: 'buy',
        },
        {
          number: 364.052,
          price: 552.09,
          time: '2021-03-18 13:00:00',
          type: 'sell',
        },
        {
          number: 40.0,
          price: 551.06,
          time: '2021-03-18 13:00:00',
          type: 'buy',
        },
        {
          number: 37.3019,
          price: 551.03,
          time: '2021-03-18 13:00:00',
          type: 'sell',
        },
        {
          number: 364.052,
          price: 552.09,
          time: '2021-03-18 13:00:00',
          type: 'sell',
        },
        {
          number: 40.0,
          price: 551.06,
          time: '2021-03-18 13:00:00',
          type: 'buy',
        },
        {
          number: 37.3019,
          price: 551.03,
          time: '2021-03-18 13:00:00',
          type: 'sell',
        },
        {
          number: 90.6,
          price: 553.84,
          time: '2021-03-18 13:00:00',
          type: 'sell',
        },
        {
          number: 363.4954,
          price: 553.37,
          time: '2021-03-18 13:00:00',
          type: 'buy',
        },
        {
          number: 364.005,
          price: 553.17,
          time: '2021-03-18 13:00:00',
          type: 'sell',
        },
        {
          number: 30.0,
          price: 552.1,
          time: '2021-03-18 13:00:00',
          type: 'buy',
        },
        {
          number: 364.052,
          price: 552.09,
          time: '2021-03-18 13:00:00',
          type: 'sell',
        },
        {
          number: 40.0,
          price: 551.06,
          time: '2021-03-18 13:00:00',
          type: 'buy',
        },
        {
          number: 37.3019,
          price: 551.03,
          time: '2021-03-18 13:00:00',
          type: 'sell',
        },
      ],
    });

    // 格式化指定位数的小数
    const formatDecimal = (num: number, decimal: number) => {
      return new BigNumber(num).toFixed(decimal);
    };

    // 格式化日志
    const formatDateToHour = (date:string) => {
      return moment(date).format('HH:mm:ss');
    };
    

    return {
      ...toRefs(refHistoryData),
      formatDecimal,
      formatDateToHour,
    };
  },
});
