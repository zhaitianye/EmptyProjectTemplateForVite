<template>
  <div>
    <div class="f-14"> 测试页面 </div>

    <van-divider />
    <div class="f-14"> 测试scss </div>
    <div class="aa ccc">
      123123
      <div class="aaa"> 123123 </div>
    </div>
    <van-divider />

    <div class="f-14"> 测试basess </div>
    <div class="f-18 col-red mt-10"> kkk </div>
    <van-divider />

    <div class="f-14"> 测试vant </div>
    <van-button type="primary" block>块级元素</van-button>
    <van-cell title="URL 跳转" is-link url="/" />
    <van-icon name="chat-o" />
    <div class="f-14"> 说明：如果浏览器上有提示警告，则是因为日期控件引起的，不用担心，把下面日期控件注释掉就没有了 </div>
    <van-cell title="选择单个日期" :value="date" @click="show = true" />
    <van-calendar v-model:show="show" @confirm="onConfirm" />
    <van-rate v-model="valuerate" />
    <van-divider />

    <div class="f-14"> 测试组件 </div>
    <hello-world msg="组件传值"></hello-world>
  </div>
</template>

<style scoped lang="scss" src="./home.scss"></style>
<script lang="ts" src="./home.ts"></script>
