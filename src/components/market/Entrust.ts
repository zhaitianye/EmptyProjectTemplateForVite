import {
  ref,
  reactive, // reactive 创建响应式对象
  toRefs, // 响应式对象 转变为ref
  defineComponent,
  getCurrentInstance,
} from 'vue';

import BigNumber from 'bignumber.js'

export default defineComponent({
  name: 'Entrust',
  components: {},
  setup() {
    // 模拟买卖单数据
    let refEntrustData = reactive({
      refBuyData: [
        {
          number: 26.06,
          price: 555.06,
          myCount: 10.0,
        },
        {
          number: 181.2,
          price: 553.87,
          myCount: 10.0,
        },
        {
          number: 400.0,
          price: 553.86,
          myCount: 10.0,
        },
        {
          number: 90.6,
          price: 553.84,
          myCount: 10.0,
        },
        {
          number: 363.4954,
          price: 553.37,
          myCount: 10.0,
        },
        {
          number: 364.005,
          price: 553.17,
          myCount: 10.0,
        },
        {
          number: 30.0000,
          price: 552.10,
          myCount: 10.0,
        },
        {
          number: 364.0520,
          price: 552.09,
          myCount: 10.0,
        },
        {
          number: 40.0000,
          price: 551.06,
          myCount: 10.0,
        },
        {
          number: 37.3019,
          price: 551.03,
          myCount: 10.0,
        },
      ],
      refSellData: [
        {
          number: 26.06,
          price: 555.06,
          myCount: 10.0,
        },
        {
          number: 181.2,
          price: 553.87,
          myCount: 10.0,
        },
        {
          number: 400.0,
          price: 553.86,
          myCount: 10.0,
        },
        {
          number: 90.6,
          price: 553.84,
          myCount: 10.0,
        },
        {
          number: 363.4954,
          price: 553.37,
          myCount: 10.0,
        },
        {
          number: 364.005,
          price: 553.17,
          myCount: 10.0,
        },
        {
          number: 30.0000,
          price: 552.10,
          myCount: 10.0,
        },
        {
          number: 364.0520,
          price: 552.09,
          myCount: 10.0,
        },
        {
          number: 40.0000,
          price: 551.06,
          myCount: 10.0,
        },
        {
          number: 37.3019,
          price: 551.03,
          myCount: 10.0,
        },
      ],
      refDifferencePrice: 0.6,
      refDifferencePercent: '0.11%',
    });

    // 格式化指定位数的小数
    const formatDecimal = (num:number,decimal: number)=>{
      return new BigNumber(num).toFixed(decimal);
    }



    return {
      ...toRefs(refEntrustData),
      formatDecimal,
    };
  },
});
