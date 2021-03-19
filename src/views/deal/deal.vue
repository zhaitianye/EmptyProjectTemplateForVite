<template>
  <div class="clear min-h-100 bg-14172E pb-48 pos-r">
    <div class="clear h-35 bor bor-b bor-col-111428"> </div>
    <div class="clear pos-a r-16 t-10">
      <wallet-more :pupupUp="35"></wallet-more>
    </div>
    <div class="clear floor-1"> 现货账户余额 </div>
    <div class="clear floor-2">
      <div class="clear twig-1">ETH</div>
      <div class="clear twig-2">
        <div class="clear bar-1">0.0000</div>
        <div class="clear bar-2">
          <img src="@/assets/deal/direction-icon1.png" alt="" class="item-img">
        </div>
        <div class="clear bar-3">100.0000</div>
      </div>
    </div>
    <div class="clear floor-3">
      <div class="clear twig-1">USDC</div>
      <div class="clear twig-2">
        <div class="clear bar-3">0.0000</div>
      </div>
    </div>
    <div class="clear floor-4">
      <div class="clear twig-1">DAI</div>
      <div class="clear twig-2">
        <div class="clear bar-1">0.0000</div>
        <div class="clear bar-2">
          <img src="@/assets/deal/direction-icon2.png" alt="" class="item-img">
        </div>
        <div class="clear bar-3">-58681.5715</div>
      </div>
    </div>
    <div class="clear floor-5">
      <van-button class="btn-save">存款</van-button>
      <van-button plain class="btn-load">取款</van-button>
    </div>
    <div class="floor-6">
      <van-tabs v-model:active="refChangeBuySellActive" animated swipeable>
        <van-tab title="买入" title-class="ctrl-1">
          <buy></buy>
        </van-tab>
        <van-tab title="卖出" title-class="ctrl-2">
          <sell></sell>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<style scoped lang="scss" src="./deal.scss"></style>
<script lang="ts" src="./deal.ts"></script>
