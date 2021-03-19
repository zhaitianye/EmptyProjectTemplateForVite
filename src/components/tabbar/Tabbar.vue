<template>
  <van-tabbar v-model="active" @change="onChange" :safe-area-inset-bottom="true" route>
    <van-tabbar-item name="quotation" to="/quotation">行情</van-tabbar-item>
    <van-tabbar-item name="home" to="/home">主页</van-tabbar-item>
    <van-tabbar-item name="deal" to="/deal">交易</van-tabbar-item>
    <van-tabbar-item name="market" to="/market">市场</van-tabbar-item>
  </van-tabbar>
</template>
<style scoped lang="scss" src="./Tabbar.scss"></style>
<script lang="ts" src="./Tabbar.ts"></script>
