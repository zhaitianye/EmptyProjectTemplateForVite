import {
  ref,
  reactive, // reactive 创建响应式对象
  toRefs, // 响应式对象 转变为ref
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'Kline',
  setup(props:any,context:any) {
    
    // k线设置
    let refKlineConfigData = reactive({
      refKline: {
        klineConfig: {
          platform: 'pc',
          backgroundColor: '#fff',
          defaultSize: false,
          size: {
            width: '100%',
            height: 580
          },
          defaultMA: false,
          MA: [
            {
              name: 'MA3',
              color: '#67ff7c'
            },
            {
              name: 'MA10',
              color: '#ff4d71'
            },
            {
              name: 'MA15',
              color: '#f6d026'
            },
            {
              name: 'MA20',
              color: '#ff4d71'
            },
            {
              name: 'MA30',
              color: '#000000'
            }
          ],
          network: {
            hosts: [],
            port: 443
          }
        },
        klineDebounceFunc: null,
        klineDataObj: null,
        cycle: 'hour',
        version: 0,
        profess: {
          fullscreen: false
        }
      }
    });

    const getKline = async ()=>{

    }

    getKline();

    return {
      ...toRefs(refKlineConfigData),
    };
  },
});