<template>
  <div class=box1>
    <div class="title">
      <p>男女比例</p>
      <img src="../../images/dataScreen-title.png" alt="" srcset="">
    </div>
    <div class="sex">
      <div class="man">
        <img src="../../images/man.png" alt="" srcset="">
      </div>
      <div class="woman">
        <img src="../../images/woman.png" alt="" srcset="">
      </div>
      <div class="rate">
        <p>男士58%</p>
        <p>女士42%</p>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>

</script>

<style lang='scss' scoped>
  .box1 {
    width: 100%;
    height: 100%;
    background: url(../../images/dataScreen-main-cb.png) no-repeat;
    background-size: 100% 100%;
    margin: 20px 0;
    .title {
      margin-left: 20px;
      p {
        color: #fff;
        font-size: 20px;
      }
    }
    .sex {
      display: flex;
      justify-content: center;
      .man {
        margin: 20px;
        width: 111px;
        height: 115px;
        background: url('../../images/man-bg.png') no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .woman {
        margin: 20px;
        width: 111px;
        height: 115px;
        background: url('../../images/woman-bg.png') no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>