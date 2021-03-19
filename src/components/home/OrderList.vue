<template>
  <div class="clear">
    <div class="title">
      <div class="clear item">
        <div class="line1">
          类型
        </div>
        <div class="line2">
        </div>
      </div>
      <div class="clear item">
        <div class="line1">
          金额
        </div>
        <div class="line2">
          已全部成交
        </div>
      </div>
      <div class="clear item">
        <div class="line1 pl-20">
          价格
        </div>
        <div class="line2 pl-20">
          停损价
        </div>
      </div>
      <div class="clear item">
        <div class="line1 pl-30">
          状态
        </div>
        <div class="line2 pl-30">
          有效至
        </div>
      </div>
    </div>
    <div class="clear body">
      <div class="clear none-item">
        <div class="clear flex flex-ju-center">
          <img class='none-img mt-20' src="@/assets/home/none-list.png" alt="">
        </div>
        
        <div class="clear none-text flex flex-ju-center">
          您没有USDT-MOAC订单
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./OrderList.scss"></style>
<script lang="ts" src="./OrderList.ts"></script>