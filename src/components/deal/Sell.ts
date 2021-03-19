import {
  ref,
  reactive, // reactive 创建响应式对象
  toRefs, // 响应式对象 转变为ref
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'Sell',
  setup(props: any, context: any) {
    // 市场限价的切换
    let refChangeMarketChoice = reactive({
      refPriceActive: 0,
    });
    const handleChangeMarketChoice = (index:number)=>{
      refChangeMarketChoice.refPriceActive = index;
    }


    // 金额和价格的输入框
    let refPriceInput = reactive({
      refPriceValut: '',
      refAmountValut: '549.97',
    });


    // 滑价切换

    let refSlideThePrice = reactive({
      refSlideThePriceActive: 0,
    });

    const handleChangeSlideThePrice = (index:number)=>{
      refSlideThePrice.refSlideThePriceActive = index;
    }



    return { 
      ...toRefs(refChangeMarketChoice),
      handleChangeMarketChoice,
      ...toRefs(refPriceInput),
      ...toRefs(refSlideThePrice),
      handleChangeSlideThePrice,
    };
  },
});
