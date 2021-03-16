import { ref, defineComponent, getCurrentInstance } from 'vue';

// 组件
import HelloWorld from '@/components/HelloWorld.vue';

export default defineComponent({
  name: 'Home',
  setup() {
    // 取出全局挂载对象
    const { proxy }: any = getCurrentInstance();

    // 页面基础渲染测试
    const date = ref('');
    const show = ref(false);

    const formatDate = (date: Date) => {
      console.log(date);
      return `${date.getMonth() + 1}/${date.getDate()}`;
    };
    const onConfirm = (value: Date) => {
      console.log(value);
      show.value = false;
      date.value = formatDate(value);
    };

    const valuerate = ref(3);

    // env测试
    const testEnv = import.meta.env.VITE_TEST;
    // console.log(testEnv)

    // 测试发送请求
    // proxy.$api.test().then((result: any)=>{
    //   console.log(result)
    // });
    return {
      date,
      show,
      onConfirm,
      valuerate,
    };
  },
  components: {
    HelloWorld,
  },
});
