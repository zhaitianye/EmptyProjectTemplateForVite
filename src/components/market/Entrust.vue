<template>
  <div class="clear">
    <div class="clear title">
      <div class="item item-1"> 数量 </div>
      <div class="item item-2 flex-1"> 价格（USDT）</div>
      <div class="item item-3"> 我的数量 </div>
    </div>
    <div class="clear sell-box">
      <div class="line" v-for="item in refSellData">
        <div class="clear item1">
          {{ formatDecimal(item.number, 4) }}
        </div>
        <div class="clear item2">
          {{ formatDecimal(item.price, 2) }}
        </div>
        <div class="clear item3">
          {{ formatDecimal(item.myCount, 4) }}
        </div>
      </div>
    </div>
    <div class="clear spreads-box">
      <div class="item item-1"> 价差 </div>
      <div class="item item-2 flex-1">
        {{ refDifferencePrice }}
      </div>
      <div class="item item-3">
        {{ refDifferencePercent }}
      </div>
    </div>
    <div class="clear buy-box">
      <div class="line" v-for="item in refBuyData">
        <div class="clear item1">
          {{ formatDecimal(item.number, 4) }}
        </div>
        <div class="clear item2">
          {{ formatDecimal(item.price, 2) }}
        </div>
        <div class="clear item3">
          {{ formatDecimal(item.myCount, 4) }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./Entrust.scss"></style>
<script lang="ts" src="./Entrust.ts"></script>
