<template>
  <div class="footer">
    <div class="fri-links">
      <span>关于我们</span>
      <span>联系我们</span>
      <span>免责声明</span>
    </div>
    <div class="copyright">
      <span>Copyright &copy2019 Chmee.cn All Rights Reserved.  </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style lang="stylus" scoped>
  .footer
    padding: 1% 14% 2%;
    background: #f3f3f3;
    text-align: center;
    font-size: 12px;
    color: #555;
    .fri-links
      margin: 15px 0;
      span
        padding: 0 10px;
    .fri-links span:hover
      color: #000;
      cursor: pointer;
</style>
