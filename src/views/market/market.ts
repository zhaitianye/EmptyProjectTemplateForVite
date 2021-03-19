import {
  ref,
  reactive, // reactive 创建响应式对象
  toRefs, // 响应式对象 转变为ref
  defineComponent,
  getCurrentInstance,
} from 'vue';

// 组件
import WalletMore from '@/components/wallet/WalletMore.vue';
import Entrust from '@/components/market/Entrust.vue';
import History from '@/components/market/History.vue';

export default defineComponent({
  name: 'Market',
  components: {
    WalletMore,
    Entrust,
    History,
  },
  setup() {
    // 挂单委托与历史成交的切换
    let refChangeOption = reactive({
      refActive: 0,
    });
    return {
      ...toRefs(refChangeOption),
    };
  },
});
