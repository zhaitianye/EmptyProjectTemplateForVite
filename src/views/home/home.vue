<template>
  <div class="min-h-100 bg-14172E pb-48 pos-r">
    <div class="clear pos-a r-16 t-12">
      <wallet-more :pupupUp='70' ></wallet-more>
    </div>
    <div class="clear floor1" @click = 'aaa'>
      <div class="clear item dis-ib">
        <div class="line1">
          <span class="text1">4234.1</span>
          <span class="text2">MOAC</span>
        </div>
        <div class="clear line2">
          中端市场价
        </div>
      </div>
    </div>
    <div class="clear kline-warp-box">
      <kline></kline>
    </div>
    <van-tabs class="floor3" v-model:active="refActive" animated swipeable  type="card">
      <van-tab title="订单" title-class="ctrl-1">
        <order-list></order-list>
      </van-tab>
      <van-tab title="全部成交" title-class="ctrl-2">
        <deal-list></deal-list>
      </van-tab>
    </van-tabs>
  </div>
</template>
<style scoped lang="scss" src="./home.scss"></style>
<script lang="ts" src="./home.ts"></script>
