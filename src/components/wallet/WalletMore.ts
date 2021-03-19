import {
  ref,
  reactive, // reactive 创建响应式对象
  toRefs, // 响应式对象 转变为ref
  onBeforeMount, // 在组件挂载之前执行的函数
  onMounted,
  onBeforeUpdate, // 在组件修改之前执行的函数
  onUpdated,
  onBeforeUnmount, // 在组件卸载之前执行的函数
  onUnmounted,
  inject,
  defineComponent,
} from 'vue';
import delay from 'delay';

// 组件
import WalletDrawer from '@/components/wallet/WalletDrawer.vue';
import AboutUs from '@/components/introduction/AboutUs.vue';
import Community from '@/components/introduction/Community.vue';
import Help from '@/components/introduction/Help.vue';
import Terms from '@/components/introduction/Terms.vue';

export default defineComponent({
  name: 'WalletMore',
  components: {
    WalletDrawer,
    AboutUs,
    Community,
    Help,
    Terms,
  },
  props: {
    pupupUp: {
      // 顶层弹出距离
      type: Number,
      default: 0,
    },
  },
  setup(props: any, context: any) {
    // 一些常用方法的注释

    // // 数据对象的定义
    // let data = reactive({
    //   // 定义响应式数据
    //   count: 0,
    // });

    // context 方法
    // // Attribute (非响应式对象)
    // console.log(context.attrs)
    // // 插槽 (非响应式对象)
    // console.log(context.slots)
    // // 触发事件 (方法)
    // console.log(context.emit)

    // beforeCreate  -> setup()
    // created       -> setup()
    // beforeMount   -> onBeforeMount
    // mounted       -> onMounted
    // beforeUpdate  -> onBeforeUpdate
    // updated       -> onUpdated
    // beforeDestroy -> onBeforeUnmount
    // destroyed     -> onUnmounted
    // activated     -> onActivated
    // deactivated   -> onDeactivated
    // errorCaptured -> onErrorCaptured

    // onMounted(() => {
    //   console.log('mounted!');
    // });
    // onUpdated(() => {
    //   console.log('updated!');
    // });
    // onUnmounted(() => {
    //   console.log('unmounted!');
    // });

    // 依赖注入
    // const theme = inject('Theme', 'light'  默认值 );
    // console.log(theme, '依赖注入');

    // return {
    //   ...toRefs(data),
    // };

    // 抽屉部分数据
    const drawerData = reactive({
      showDrawer: false,
    });

    // 抽屉部分启动赋值高度，使用scss变量
    document
      .getElementsByTagName('body')[0]
      .style.setProperty('--walletDrarweWarpvanPopupTop', `${props.pupupUp}px`);

    // 打开关闭抽泣方法
    const handleOpenWalletDrawer = () => {
      drawerData.showDrawer = true;
    };

    // 打开钱包弹出层里面的关于静态页面组件，子组件传值
    let refIntroductionPageData = reactive({
      showAboutUs: false,
      showTerms: false,
      showHelp: false,
      showCommunity: false,
    });
    const openIntroductionPage = (pageTitle: string) => {
      // aboutUs terms help community
      switch (pageTitle) {
        case 'aboutUs':
          refIntroductionPageData.showAboutUs = true;
          break;
        case 'terms':
          refIntroductionPageData.showTerms = true;
          break;
        case 'help':
          refIntroductionPageData.showHelp = true;
          break;
        case 'community':
          refIntroductionPageData.showCommunity = true;
          break;
        default:
          break;
      }
    };

    return {
      ...toRefs(drawerData),
      handleOpenWalletDrawer,
      ...toRefs(refIntroductionPageData),
      openIntroductionPage,
    };
  },
  methods: {
    // 可以按照之前的写法来，但是不建议
    test() {
      console.log(123);
    },
    async test2() {
      console.log(123123);
    },
  },
});
