import {
  ref,
  reactive, // reactive 创建响应式对象
  toRefs, // 响应式对象 转变为ref
  defineComponent,
  getCurrentInstance,
} from 'vue';

// 组件
import WalletMore from '@/components/wallet/WalletMore.vue';

export default defineComponent({
  name: 'Market',
  components: {
    WalletMore,
  },
  setup() {
    return {};
  },
});
