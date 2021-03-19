import {
  ref,
  reactive, // reactive 创建响应式对象
  toRefs, // 响应式对象 转变为ref
  defineComponent,
  getCurrentInstance,
} from 'vue';

// 组件
import WalletMore from '@/components/wallet/WalletMore.vue';
import DealList from '@/components/home/DealList.vue';
import OrderList from '@/components/home/OrderList.vue';
import Kline from '@/components/home/Kline.vue';


export default defineComponent({
  name: 'Home',
  components: {
    WalletMore,
    DealList,
    OrderList,
    Kline,
  },
  setup() {
    // 取出全局挂载对象
    const { proxy }: any = getCurrentInstance();

    // // 页面基础渲染测试
    // const date = ref('');
    // const show = ref(false);

    // const formatDate = (date: Date) => {
    //   console.log(date);
    //   return `${date.getMonth() + 1}/${date.getDate()}`;
    // };
    // const onConfirm = (value: Date) => {
    //   console.log(value);
    //   show.value = false;
    //   date.value = formatDate(value);
    // };
    // const valuerate = ref(3);

    // // env测试
    // const testEnv = import.meta.env.VITE_TEST;
    // // console.log(testEnv)

    // 测试发送请求
    // proxy.$api.test().then((result: any)=>{
    //   console.log(result)
    // });

    // 返回值测试
    // return {
    //   date,
    //   show,
    //   onConfirm,
    //   valuerate,
    // };

    // 当前成交与订单的切换
    let refChangeOption = reactive({
      refActive: 0,
    });
    return {
      ...toRefs(refChangeOption),
    };
  },
  
});
