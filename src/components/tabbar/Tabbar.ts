import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Tabbar',
  components: {},
  setup() {
    const active = ref('home');
    const onChange = (index: string) => {
      // console.log(index);
    };

    return { active, onChange };
  },
});
