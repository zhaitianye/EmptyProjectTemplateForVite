<template>
  <div class="clear pt-20 pl-20 pr-15">
    <div class="clear flex h-20 flex-align-center line-1">
      <span class="text-1">钱包</span>
      <div class="clear flex-1 h-1 bg-272C4E"> </div>
    </div>
    <div class="clear line-2 mt-15 h-25 flex flex-align-center flex-ju-between">
      <img class="simplen-icon-img" src="@/assets/components/button/simplen-icon1.png" alt="" />
      <div class="clear flex-1 pl-10 pr-10 flex flex-align-center">
        <span class="general-text-1">{{ walletAddressFormat }}</span>
      </div>
      <img
        class="copy-img"
        @click="handleCopyAddress"
        src="@/assets/components/button/copy1.png"
        alt=""
      />
    </div>
    <div class="clear line-3 mt-10 h-25 flex flex-align-center flex-ju-start">
      <img class="simplen-icon-img" src="@/assets/components/button/simplen-icon1.png" alt="" />
      <div class="clear flex-1 pl-10 pr-10 flex flex-align-center">
        <span class="general-text-1">断开钱包</span>
      </div>
    </div>
    <div class="clear flex mt-15 h-20 flex-align-center line-4">
      <span class="text-1">通知</span>
      <div class="clear flex-1 h-1 bg-272C4E"> </div>
    </div>
    <div class="clear line-5 mt-15 h-25 flex flex-align-center flex-ju-between">
      <img class="simplen-icon-img" src="@/assets/components/button/simplen-icon1.png" alt="" />
      <div class="clear flex-1 pl-10 pr-10 flex flex-align-center">
        <span class="general-text-1">成交通知</span>
      </div>
      <van-switch v-model="deal" size="22px" @update:model-value="handleOnInformChange" />
    </div>
    <div class="clear line-6 mt-10 h-25 flex flex-align-center flex-ju-between">
      <img class="simplen-icon-img" src="@/assets/components/button/simplen-icon1.png" alt="" />
      <div class="clear flex-1 pl-10 pr-10 flex flex-align-center">
        <span class="general-text-1">超涨超跌（10%）</span>
      </div>
      <van-switch v-model="rise" size="22px" @update:model-value="handleOnInformChange" />
    </div>
    <div class="clear flex mt-15 h-20 flex-align-center line-7">
      <span class="text-1">关于</span>
      <div class="clear flex-1 h-1 bg-272C4E"> </div>
    </div>
    <div class="clear line-8 mt-10 h-25 flex flex-align-center flex-ju-start">
      <img class="simplen-icon-img" src="@/assets/components/button/simplen-icon1.png" alt="" />
      <div
        class="clear flex-1 pl-10 pr-10 flex flex-align-center h-25"
        @click="handleOpenIntroduction('aboutUs')"
      >
        <span class="general-text-1">关于我们</span>
      </div>
    </div>
    <div class="clear line-9 mt-10 h-25 flex flex-align-center flex-ju-start">
      <img class="simplen-icon-img" src="@/assets/components/button/simplen-icon1.png" alt="" />
      <div
        class="clear flex-1 pl-10 pr-10 flex flex-align-center h-25"
        @click="handleOpenIntroduction('terms')"
      >
        <span class="general-text-1">服务条款</span>
      </div>
    </div>
    <div class="clear line-10 mt-10 h-25 flex flex-align-center flex-ju-start">
      <img class="simplen-icon-img" src="@/assets/components/button/simplen-icon1.png" alt="" />
      <div
        class="clear flex-1 pl-10 pr-10 flex flex-align-center h-25"
        @click="handleOpenIntroduction('help')"
      >
        <span class="general-text-1">帮助中心</span>
      </div>
    </div>
    <div class="clear line-11 mt-10 h-25 flex flex-align-center flex-ju-start">
      <img class="simplen-icon-img" src="@/assets/components/button/simplen-icon1.png" alt="" />
      <div
        class="clear flex-1 pl-10 pr-10 flex flex-align-center h-25"
        @click="handleOpenIntroduction('community')"
      >
        <span class="general-text-1">社区</span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss" src="./WalletDrawer.scss"></style>
<script lang="ts" src="./WalletDrawer.ts"></script>
