import {
  ref,
  reactive, // reactive 创建响应式对象
  toRefs, // 响应式对象 转变为ref
  defineComponent,
  getCurrentInstance,
} from 'vue';

// 组件
import WalletMore from '@/components/wallet/WalletMore.vue';
import Buy from '@/components/deal/Buy.vue';
import Sell from '@/components/deal/Sell.vue';

export default defineComponent({
  name: 'Deal',
  components: {
    WalletMore,
    Buy,
    Sell,
  },
  setup() {
    // 买入卖出的切换
    let refChangeBuySell = reactive({
      refChangeBuySellActive: 0,
    });
    return {
      ...toRefs(refChangeBuySell),
    };
  },
});
