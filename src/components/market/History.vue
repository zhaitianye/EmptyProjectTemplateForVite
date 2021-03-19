<template>
  <div class="clear">
    <div class="clear title">
      <div class="item item-1"> 数量 </div>
      <div class="item item-2 flex-1"> 价格（USDT）</div>
      <div class="item item-3"> 时间 </div>
    </div>
    <div class="clear list-box">
      <div class="line" v-for="item in refHistoryDataList">
        <div class="clear item1">
          {{ formatDecimal(item.number, 4) }}
        </div>
        <div :class="`clear item2 ${item.type === 'buy' ? 'item2-buy' : 'item2-sell'}`">
          {{ formatDecimal(item.price, 2) }}
        </div>
        <div class="clear item3">
          {{ formatDateToHour(item.time) }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./History.scss"></style>
<script lang="ts" src="./History.ts"></script>
