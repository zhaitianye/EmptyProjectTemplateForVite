<template>
  <div class="clear min-h-100 bg-14172E pb-48 pos-r">
    <div class="clear h-35 bor bor-b bor-col-111428"> </div>
    <div class="clear pos-a r-16 t-10">
      <wallet-more :pupupUp="35"></wallet-more>
    </div>
    <van-tabs class="floor1" v-model:active="refActive" animated swipeable  type="card">
      <van-tab title="挂单委托" title-class="ctrl-1">
        <entrust></entrust>
      </van-tab>
      <van-tab title="历史成交" title-class="ctrl-2">
        <history></history>
      </van-tab>
    </van-tabs>
  </div>
</template>
<style scoped lang="scss" src="./market.scss"></style>
<script lang="ts" src="./market.ts"></script>
