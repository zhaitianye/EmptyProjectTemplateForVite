<template>
  <div class="">
    <div class="clear button-box dis-ib" @click="handleOpenWalletDrawer">
      <img class="button-img" src="@/assets/components/button/more-icon.png" alt="" />
    </div>
    <div class="clear wallet-drarwe-warp-box">
      <van-popup v-model:show="showDrawer" position="right" id="walletDrawerMainBox">
        <div class="clear">
          <wallet-drawer @update:openIntroductionPage="openIntroductionPage"></wallet-drawer>
        </div>
      </van-popup>
    </div>
    <div class="clear introduction-sheet-box">
      <van-action-sheet v-model:show="showAboutUs" title="关于我们">
        <div class="content min-h-80vh">
          <about-us></about-us>
        </div>
      </van-action-sheet>
      <van-action-sheet v-model:show="showTerms" title="服务条款">
        <div class="content min-h-80vh">
          <terms></terms>
        </div>
      </van-action-sheet>
      <van-action-sheet v-model:show="showHelp" title="帮助中心">
        <div class="content min-h-80vh">
          <help></help>
        </div>
      </van-action-sheet>
      <van-action-sheet v-model:show="showCommunity" title="社区">
        <div class="content min-h-80vh">
          <community></community>
        </div>
      </van-action-sheet>
    </div>
  </div>
</template>
<style scoped lang="scss" src="./WalletMore.scss"></style>
<script lang="ts" src="./WalletMore.ts"></script>
