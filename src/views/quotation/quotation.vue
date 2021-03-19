<template>
  <div class="clear min-h-100 bg-14172E pb-48 pos-r">
    <div class="clear h-35 bor bor-b bor-col-111428"> </div>
    <div class="clear pos-a r-16 t-10">
      <wallet-more :pupupUp="35"></wallet-more>
    </div>
    <div class="clear floor1">
      <div class="clear line-1">现货</div>
      <div class="twig">
        <div class="item1">
          <img src="@/assets/quotation/trading-icon.png" alt="" />
        </div>
        <div class="item2"> MOAC - CNY </div>
        <div class="item3">
          <span class="text1">5.27</span>
          <img src="@/assets/quotation/down-icon.png" alt="" />
        </div>
        <div class="item4"> -5.12% </div>
      </div>
      <div class="twig">
        <div class="item1">
          <img src="@/assets/quotation/trading-icon.png" alt="" />
        </div>
        <div class="item2"> USDT - MOAC </div>
        <div class="item3">
          <span class="text1">1.33</span>
          <img src="@/assets/quotation/top-icon.png" alt="" />
        </div>
        <div class="item4"> +5.12% </div>
      </div>
      <div class="twig">
        <div class="item1">
          <img src="@/assets/quotation/trading-icon.png" alt="" />
        </div>
        <div class="item2"> MDY - MOAC </div>
        <div class="item3">
          <span class="text1">0.000033</span>
          <img src="@/assets/quotation/top-icon.png" alt="" />
        </div>
        <div class="item4"> +8.12% </div>
      </div>
      <div class="clear between-line"></div>
    </div>
    <div class="floor2">
      <div class="clear line1">
        <span class="text1">保证金</span>
        <span class="text2">5x</span>
      </div>
      <div class="clear line2"> 暂无交易对 </div>
    </div>
    <div class="floor3">
      <div class="clear line1">
        <span class="text1">永续合约</span>
        <span class="text2">10x</span>
      </div>
      <div class="clear line2"> 暂无交易对 </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./quotation.scss"></style>
<script lang="ts" src="./quotation.ts"></script>
