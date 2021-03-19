<template>
  <div class="clear">
    <div class="clear floor1">
      <div
        :class="`twig1 ${refPriceActive === 0 && 'active'}`"
        @click="handleChangeMarketChoice(0)"
      >
        市场
      </div>
      <div
        :class="`twig2 ${refPriceActive === 1 && 'active'}`"
        @click="handleChangeMarketChoice(1)"
      >
        限价
      </div>
    </div>
    <div class="clear floor2">
      <div class="clear center-box">
        <van-field
          type="number"
          class="ipt-1"
          v-model="refPriceValut"
          label="金额"
          placeholder="0.0000"
        >
          <template #button>ETH</template>
        </van-field>
        <van-field
          type="number"
          class="ipt-1 mt-10"
          v-model="refAmountValut"
          label="价格"
          placeholder="0.0000"
        >
          <template #button>USDT</template>
        </van-field>
      </div>
    </div>
    <div class="floor3">
      <div class="twig1">高级</div>
      <div class="twig2">
        <img class="item-img" src="@/assets/deal/direction-icon3.png" alt="" />
      </div>
    </div>
    <div class="floor4">
      <div class="twig1">最高滑价</div>
    </div>
    <div class="clear floor5">
      <div class="clear center-box">
        <div
          :class="`twig twig1 ${refSlideThePriceActive === 0 && 'active'}`"
          @click="handleChangeSlideThePrice(0)"
        >
          0.5%
        </div>
        <div
          :class="`twig twig2 ${refSlideThePriceActive === 1 && 'active'}`"
          @click="handleChangeSlideThePrice(1)"
        >
          1.0%
        </div>
        <div
          :class="`twig twig3 ${refSlideThePriceActive === 2 && 'active'}`"
          @click="handleChangeSlideThePrice(2)"
        >
          定制
        </div>
      </div>
    </div>
    <div class="floor6">
      <div class="clear line">
        <div class="clear twig1">
          最差价格
        </div>
        <div class="clear twig2">
          <span class="item mr-10">588.10</span>
          <span class="item">DAI</span>
        </div>
      </div>
      <div class="clear line">
        <div class="clear twig1">
          价格影响因素
        </div>
        <div class="clear twig2">
          <span class="item">0.02%</span>
        </div>
      </div>
      <div class="clear line">
        <div class="clear twig1">
          <span>费用</span>
          <span class="little-btn">吃单</span>
          <span class="little-btn ml--5">10% OFF</span>
        </div>
        <div class="clear twig2">
          <span class="item">0.2700%</span>
        </div>
      </div>
      <div class="clear line">
        <div class="clear twig1">
          费用金额
        </div>
        <div class="clear twig2">
          <span class="item mr-5">≈</span>
          <span class="item mr-10">157.9966</span>
          <span class="item">DAI</span>
        </div>
      </div>
      <div class="clear line">
        <div class="clear twig1">
          合计
        </div>
        <div class="clear twig2">
          <span class="item mr-5">≈</span>
          <span class="item mr-10">58675.26</span>
          <span class="item">DAI</span>
        </div>
      </div>
    </div>
    <div class="floor7">
      <van-button  class="submit-btn" block>下市场价订单</van-button>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./Sell.scss"></style>
<script lang="ts" src="./Sell.ts"></script>
