<template>
  <div class="collapse border-bottom">
    <div class="logo">解忧客栈</div>
    <!-- 视窗宽度小于768px显示，-->
    <div class="collapse-groups hidden-md-and-up" @click="open">
      <i class="iconfont" v-if="!isOpen">&#xe7c5;</i>
      <i class="iconfont" v-if="isOpen">&#xe632;</i>
    </div>
    <transition name="el-fade-in-linear">
      <div class="show-group border-bottom" v-if="isOpen">
        <router-link :to="item.path" tag="p" v-for="item of navbars" active-class="active" :key="item.id">
          {{ item.name }}
        </router-link>

        <div class="seperator border"></div>
        <div class="action-item" v-if="!isLogin">
          <span @click="goLogin">登录</span>/<span @click="goLogin">注册</span>
        </div>
        <div class="action-item" v-if="isLogin">
          <span>退出登录</span>
        </div>
      </div>
    </transition>
    <!--当视窗宽度大于等于768px显示-->
    <div class="group hidden-sm-and-up">
      <div class="item-group">
        <router-link :to="item.path" tag="span"
                     v-for="(item,index) of navbars"
                     :key="item.id"
                     active-class="active" exact>
          {{ item.name }}
        </router-link>
      </div>
      <!--  若用户没有登录，则显示登录/注册-->
      <div class="login-group" v-if="!isLogin">
        <span @click="goLogin">登录</span>/<span @click="goLogin">注册</span>
      </div>
      <!--  若用户登录了，则显示用户头像-->
      <div class="avatar-item" v-if="isLogin" @click="goHomePage">
        <img src="@styles/images/0.jpg" alt="">
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: "HeaderNavbar",
    data() {
      return {
        isOpen:false,
        isLogin: localStorage.getItem('isLogin'),
        navbars: [
          {
            id: '1',
            name: '首页',
            path: '/index'
          },
          {
            id: '2',
            name: '发布需求',
            path: '/add'
          },
          {
            id: '3',
            name: '关于我们',
            path: '/about'
          }
        ]
      }
    },
    methods: {
      open() {
        this.isOpen = !this.isOpen
      },
      goLogin () {
        this.$router.push('/login')
      },
      goHomePage () {
        this.$router.push('/home')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @media only screen and (min-width: 1px) and (max-width: 320px) {
    .hidden-sm-and-up {
      display: none !important;
    }
  }

  /*  小屏使用*/
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    /*  在此视窗宽度范围内不展示 sm */
    .hidden-sm-and-up {
      display: none !important;
    }

    /*  在此视窗宽度范围内展示 md */
    .hidden-md-and-up {
      display: block !important;
    }

  }

  /*  宽屏使用*/
  @media only screen and (min-width: 768px) {
    .hidden-sm-and-up {
      display: block !important;
    }

    .hidden-md-and-up {
      display: none !important;
    }

  }

  .show-group p:hover,
  .show-group .action-item:hover,
  .item-group span:hover,
  .login-group span:hover,
  .avatar-item img:hover,
  .collapse-groups i:hover {
    cursor: pointer;
  }

  //  导航栏
  .collapse {
    display: flex;
    background: #fff;
    padding: 5px 8%;
    line-height: 40px;
    position: relative;
  }

  .logo {
    flex: 1;
    line-height: 54px;
    color: #da552f;
  }

  //  折叠后点击图标显示的内容
  .show-group {
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    background: #fff
    box-shadow: 0 0 10px 5px #f5f5f5;
    letter-spacing: 1px;
    z-index: 3;
  }

  .show-group p {
    margin: 0;
    padding: 5px 0;
    font-size: 14px;
    text-align: center;
    color: #333;
  }

  .show-group p:hover {
    background: #f5f5f5;
    color: #333
  }

  .show-group .action-item {
    text-align: center;
    font-size: 14px;
    padding: 10px 0;
    color: #666;
  }

  //  未折叠显示的导航条
  .group {
    text-align: right;
    line-height: 52px;
  }

  .item-group, .login-group {
    display: inline-block;
    font-size: 14px;
    color: #999;
  }

  .item-group span:hover, .login-group span:hover {
    color: #000;
  }

  .item-group {
    margin-right: 20px;
  }

  .item-group span {
    margin: 0 10px;
  }

  // 用户未登录是显示为文字
  .login-group span {
    padding: 5px 6px;
  }

  //  用户登录后显示用户头像
  .is-login, .avatar-item {
    display: inline-block;
  }

  .avatar-item {
    width: 6%;
  }

  .avatar-item img {
    width: 100%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    vertical-align: -12px;
  }

  //  折叠后导航条显示为图标
  .collapse-groups {
    font-size: 18px;
    line-height: 52px;
  }
</style>
