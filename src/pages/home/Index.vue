<template>
  <div class="container">
    <header-navbar />
    <div class="content-wrapper">
      <div class="left-side">
        <div class="user-wrapper">
          <div class="avatar">
            <img src="@/assets/styles/images/0.jpg" alt="">
          </div>
          <p class="nickname"> 我就是狗剩啊 </p>
          <div class="btn-wrapper">
            <div class="setting" @click="">
              <span>修改基本信息</span>
            </div>
            <div class="quit" @click="quit">
              <span>退出</span>
            </div>
          </div>
        </div>
      </div>
      <div class="right-side border">
        <el-tabs v-model="activeName" @tab-click="">
          <el-tab-pane label="我的发布" name="first">
            <div class="nothing" v-if="noArticle">
              <img src="@/assets/styles/images/nocomment.png" alt="">
              <p>暂时没有发布任何内容噢～</p>
            </div>
            <div class="post-list" v-if="!noArticle">
              <div class="post-item border-bottom" v-for="item in postList" :key="item.id">
                <div class="post-img">
                  <img src="@/assets/styles/images/post-img4.jpg" alt="">
                </div>
                <div class="post-details" @click="">
                  <div class="post-title">
                    <span>{{ item.title }}</span>
                  </div>
                  <div class="post-desc">
                    <span>{{ item.desc }}</span>
                  </div>
                </div>
                <div class="act-btn">
                  <div class="edit_btn">
                    <el-button size="mini" round @click="">修改</el-button>
                  </div>
                  <div class="del_btn">
                    <el-button type="danger" size="mini" round @click="">删除
                    </el-button>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="我的评论" name="second">
            <div class="nothing" v-if="noComment">
              <img src="@/assets/styles/images/nocomment.png" alt="">
              <p>暂时没有发布任何评论噢～</p>
            </div>
          </el-tab-pane>
          <el-tab-pane label="我的收藏" name="third">
            <div class="nothing" v-if="noSave">
              <img src="@/assets/styles/images/nocomment.png" alt="">
              <p>暂时没有收藏任何内容噢～</p>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <my-footer/>
  </div>
</template>

<script>
  import HeaderNavbar from '../../components/HeaderNavbar'
  import Footer from '../../components/Footer'
  export default {
    name: "HomeIndex",
    data(){
      return{
        activeName: 'first',
        noArticle: true,
        noComment: true,
        noSave: true,
        postList:[]
      }
    },
    methods: {
      quit () {
        this.$confirm('此操作将退出当前账号, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          localStorage.removeItem('token')
          localStorage.removeItem('isLogin')
          this.$message({
            type: 'success',
            message: '退出登录!'
          });
          this.$router.push('/login')
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });

      }
    },
    components:{
      HeaderNavbar,
      MyFooter: Footer
    }
  }
</script>


<style lang="stylus" scoped>
  .content-wrapper
    display: flex;
    padding: 2% 14%;
    .left-side
      flex: 2;
      .user-wrapper
        background: #fff;
        box-shadow: 0 0 10px 5px #eaeaea;
        .avatar
          width: 30%;
          padding: 10% 35%;
          img
            width: 100%;
            border-radius: 50%;
        .nickname
          text-align: center;
          margin: 10px 0;
          padding: 0;
        .btn-wrapper
          padding: 2px 25% 25px;
          .setting, .change-pass, .quit
            width: 100%;
            text-align: center;
            color: #fff;
            padding: 10px 0;
            margin: 15px 0;
            font-size: 14px;
          .setting
            background: #009688;
            &:hover
              cursor: pointer;
              background: #25a79b
          .change-pass
            background: #d86969;
            &:hover
              cursor: pointer;
              background: #d68888
          .quit
            background: #d86969;
            &:hover
              cursor: pointer;
              background #dc8369
    .right-side >>> ul li
      &:hover
        background-color: #eaeaea !important;
        color: #d86969 !important;
    .right-side >>> .el-tabs.el-tabs--top
      padding: 5px 15px;
    .right-side >>> .el-tabs__item
      font-size: 12px;
      color: #555;
      &:hover
        color: #d86969;

    .right-side >>> .is-active
      color:  #d86969;
    .right-side >>> .el-tabs__active-bar
      background-color:  #d86969;
    .right-side
      flex: 5;
      margin-left: 10px;
      box-shadow: 0 0 10px 5px #f1f1f1;
      .nothing
        width: 50%;
        padding: 30px 25%;
        img
          width: 100%;
        p
          margin: 8px;
          text-align: center;
          color: #999;
          font-size: 12px;
      .post-list
        border: 1px solid #f9f9f9;
        box-shadow: 0 0 10px 5px #f5f5f5;
        .post-item
          display: flex;
          width: 100%;
          background: #fff;
          padding: 10px 0;
          .post-img
            width: 12%;
            padding: 5px 10px 0;
            img
              width: 100%;
          .post-details
            width: 65%;
            margin-left: 10px;
            .post-title
              font-size: 16px;
              font-weight: 600;
              color: #333;
              padding: 15px 0;
              &:hover
                color:  #d86969;
                cursor: pointer;
            .post-desc
              font-size: 12px;
              color: #afafaf;
              font-weight: 400;
              width: 370px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
          .act-btn
            width: 25%;
            display: flex;
            line-height: 70px;
            .edit_btn
              margin-right: 10px

</style>
