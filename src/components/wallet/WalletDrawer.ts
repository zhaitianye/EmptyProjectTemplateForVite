import {
  ref,
  reactive, // reactive 创建响应式对象
  toRefs, // 响应式对象 转变为ref
  defineComponent,
} from 'vue';
import copy from 'copy-to-clipboard';
import { Toast } from 'vant';

export default defineComponent({
  name: 'WalletDrawer',
  setup(props:any,context:any) {
    // 模拟钱包地址
    let refWallet = reactive({
      walletAddress: 'B685451D8FAAAAAAAAAAAAAAAAAAA4D8152D88142',
      walletAddressFormat: '',
    });
    refWallet.walletAddressFormat = 'B685451D8F……4D8152D88142';

    // 拷贝钱包地址到粘贴板
    const handleCopyAddress = () => {
      const result = copy(refWallet.walletAddress);
      if (refWallet.walletAddress && result) {
        Toast.success('复制成功');
      } else {
        Toast.fail('复制失败');
      }
    };

    // 通知部分
    let refInform = reactive({
      deal: false,
      rise: false,
    });

    const handleOnInformChange = (newValue: boolean)=>{
      Toast('暂未开放此功能');
      refInform.deal = false;
      refInform.rise = false;
    }

    // 子组件向父组件传值
    const handleOpenIntroduction = (title:string)=>{
      context.emit('update:openIntroductionPage',title);
    }
    

    return {
      ...toRefs(refWallet),
      handleCopyAddress,
      ...toRefs(refInform),
      handleOnInformChange,
      handleOpenIntroduction,
    };
  },
});
