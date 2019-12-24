<template>
  <div class="container">
    <header-navbar />

    <div class="top-banner">
      <h1>你的烦恼,我们来解决</h1>
      <p>出色的完成效率 · 放心的用户体验 · 优质的售后服务</p>
      <div class="sub-btn">
        <el-button type="plain" round @click="goAdd">发布需求</el-button>
      </div>
    </div>

    <!-- category -->
    <div class="category-container">
      <div class="cate-title" @click="doTest">
        <h2>服务方案</h2>
      </div>
      <div class="cate-wrapper">
        <div class="cate-item" v-for="item of category" :key="item.id" @click="goAdd">
          <div class="item-title border-bottom" :style="{background:item.background}">
            <span>{{ item.title }}</span>
          </div>
          <div class="item-desc">
            <p class="desc">{{ item.desc }}</p>
            <p class="details" v-if="item.details" v-for="(itm,index) of item.details" :key="index">· {{ itm.name }}</p>
          </div>
        </div>
      </div>
    </div>

    <my-footer/>
  </div>
</template>

<script>
  import HeaderNavbar from '@/components/HeaderNavbar'
  import Footer from '../../components/Footer'
  import {login, getToken} from '@/api/login'
  import axios from 'axios'

  export default {
    name: "Index",
    data() {
      return {
        category: [
          {
            id: '1',
            title: '需求梳理',
            desc: '产品需求规划，是软件项目成功的关键，帮助您把产品想法更好地落地。',
            background: '#4bdaac',
            details: [
              {
                name: '严选资深产品专家 更懂用户的需求！'
              },
              {
                name: '严选资深产品专家 更懂用户的需求！'
              },
              {
                name: '严选资深产品专家 更懂用户的需求！'
              }
            ]
          },
          {
            id: '2',
            title: '整包项目',
            desc: '一站式软件开发服务，舒适的过程体验和交付质量。',
            background: '#409eef',
            details: [
              {
                name: '严选资深产品专家 更懂用户的需求！'
              },
              {
                name: '严选资深产品专家 更懂用户的需求！'
              },
              {
                name: '严选资深产品专家 更懂用户的需求！'
              }
            ]
          },
          {
            id: '3',
            title: '线上培训',
            desc: '在线培训，打破地域限制，一对一培训，效率更高。',
            background: 'pink',
            details: [
              {
                name: '严选资深产品专家 更懂用户的需求！'
              },
              {
                name: '严选资深产品专家 更懂用户的需求！'
              },
              {
                name: '严选资深产品专家 更懂用户的需求！'
              }
            ]
          }
        ]
      }
    },
    methods: {
      goAdd() {
        this.$router.push('/add')
      },
      doTest() {
        getToken().then(
          res => {
            console.log(res);
          }
        )
      },
    },
    components: {
      HeaderNavbar,
      MyFooter: Footer
    }
  };
</script>

<style lang="stylus" scoped>
  .container {
    position: relative;
  }

  .top-banner >>> .el-button.is-round {
    border-radius: 20px;
    padding: 12px 23px;
    width: 20%;
    font-size: 16px;
    background-color: #409EFF;
    border-color: #409eef;
    color: #fff;
  }

  .top-banner {
    background: url("../../assets/styles/images/top-banner.jpg");
    height 0;
    overflow: hidden;
    padding-bottom: 25%;
    display: inline-block;
    width: 100%;
    text-align: center;
    color: #fff;
    padding-top: 80px;
  }

  .top-banner h1 {
    font-size: 48px;
    letter-spacing: 8px;
    font-weight: 400;
    color: #ffffffe6;
  }

  .top-banner p {
    letter-spacing: 2px;
    color: #cecece;
    font-weight: 300;
    font-size: 20px;

  }

  .sub-btn {
    margin-top: 50px;
  }

  //  服务方案
  .category-container {
    margin-bottom: 3%;
  }

  .cate-title {
    display: inline-block;
    width: 100%;
    text-align: center;

  }

  .cate-title h2 {
    font-size: 30px;
    margin: 50px 0;
    color: rgba(0, 0, 0, 0.7);
    letter-spacing 2px;
    position: relative;
    padding: 0 0 20px;
  }

  .cate-title h2:after {
    content: '';
    width: 48px;
    height: 3px;
    background-color: #44A0FF;
    position: absolute;
    bottom: 0;
    left: 48%;
  }

  .cate-wrapper {
    padding: 10px 15px;
    display: flex;
  }

  .cate-item {
    flex: 1;
    margin: 0 60px 40px;
    text-align: center;
    border: 1px solid #f5f5f5;
    border-radius: 6px;
  }

  .cate-item:hover {
    box-shadow 0 0 5px 5px #e0e0e0;
  }

  .item-title {
    padding: 30px 0;
    color: #fff;
    font-size 18px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  .desc:hover {
    color: #000;
  }

  .item-desc {
    color: #666;
    font-weight: 200;
    font-size: 16px;
    line-height: 16px;
    padding: 0px 15px 20px;
    letter-spacing: 1px;
  }

  .desc {
    font-weight: 400;
    text-align: left;
    font-size: 14px;
    padding: 20px 10px;
    color: #444;
  }

  .details {
    font-size: 14px;
    font-weight: 400;
    color: #696969;
    line-height: 30px;
  }
</style>
