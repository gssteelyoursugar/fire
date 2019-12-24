<template>
  <div class="container">
    <header-navbar :isLogin="isLogin"/>
    <div class="post-form-wrapper">
      <div class="form-container">
        <div class="tips-item">
          <p>1、请提供详细的项目资料，以便于我们为您推荐合适的开发者</p>
          <p>2、整包项目收费标准：报价含14%的平台服务费，如需开票另收税费6%</p>
          <p>3、项目发布之后，客栈工作人员将在半个工作日内联系您</p>
        </div>
        <div class="form-item">
          <el-form :model="postForm" :rules="rules" ref="postForm">
            <el-form-item label="一、项目名称" prop="title">
              <el-input v-model="postForm.title" placeholder="请输入项目名称" class="pj-name"></el-input>
            </el-form-item>
            <el-form-item label="二、项目类型（可多选）" prop="postDesc">
              <el-select v-model="postForm.desc" clearable multiple placeholder="请选择发布类型">
                <el-option label="PC网站" value="PC网站"></el-option>
                <el-option label="微信小程序" value="微信小程序"></el-option>
                <el-option label="Html5开发" value="Html5开发"></el-option>
                <el-option label="其他" value="其他"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="三、项目预算" prop="price">
              <el-tooltip class="item" effect="dark" content="非必填项，可以线下与我们洽谈"
                          placement="top-end">
                <el-input v-model="postForm.price" placeholder="请输入你的资金预算">
                  <template slot="prepend">¥</template>
                </el-input>
              </el-tooltip>
            </el-form-item>
            <el-form-item label="四、联系方式（QQ、微信）" prop="contact">
              <el-tooltip class="item" effect="dark" content="该联系方式用于我们线下联系你，以便于对项目需求进一步了解，不会用于其他用途"
                          placement="top-end">
                <el-input v-model="postForm.contact" placeholder="请输入你的联系方式"></el-input>
              </el-tooltip>
            </el-form-item>
            <el-form-item label="五、项目需求描述" prop="detail">
              <el-tooltip class="item" effect="light" placement="right">
                <div slot="content" class="tooltip-slot">
                  <p>为了让我们更好地理解您的需求/提高开发者的开发效率</p>
                  <p class="tooltip-border">/减少过程纠纷，希望您在发布项目时参考以下规范发布：</p>
                  <p>1.项目背景介绍</p>
                  <p>2.可参考的以上线项目</p>
                  <p>3.需求范围描述</p>
                  <p>4.需求文档/重难点需求说明</p>
                  <p>5.对开发者的要求</p>
                  <p>6.交付要求</p>
                </div>
                <el-input type="textarea" v-model="postForm.content" placeholder="请填写你的项目需求"></el-input>
              </el-tooltip>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('postForm')">立即发布</el-button>
              <el-button @click="resetForm('postForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderNavbar from '../components/HeaderNavbar'
  import {add} from '@/api/add'
  import {mapMutations} from 'vuex'

  export default {
    name: "Add",
    data() {
      return {
        isLogin: this.$store.state.isLogin,
        // 表单
        postForm: {
          title: '',
          desc: [],
          price: '',
          contact: '',
          content: '',
          uid: '3'
        },
        // loading 效果
        fullscreenLoading: false,
        // 检验机制
        rules: {
          title: [
            {required: true, message: '请输入项目名称', trigger: 'blur'},
            // {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          postForm: [
            {required: true, message: '请选择发布类型', trigger: 'change'}
          ],
          contact: [
            {required: true, message: '请输入联系方式', trigger: 'change'}
          ]
        }
      }
    },
    computed: {
    },
    methods: {
      ...mapMutations(['orderList']),
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let result = {
              'title': this.postForm.title,
              'desc': this.postForm.desc.join(','),
              'price': this.postForm.price,
              'contact': this.postForm.contact,
              'content': this.postForm.content,
              'uid': '4'
            }
            add(result).then(res => {
              console.log(res);
              if (res.data.code === '20003') {
                this.fullscreenLoading = true;
                setTimeout(() => {
                  this.fullscreenLoading = false;
                }, 500);
                this.$notify({
                  type:'success',
                  message: '发布成功'
                })
                this.$router.push('/home')
              }
            }).catch(err => {
              console.log(err);
            })
            console.log(this.postForm);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    components: {
      HeaderNavbar
    }
  }
</script>

<style lang="stylus" scoped>
  .post-form-wrapper >>> .el-form-item__label {
    float: unset;
  }

  .post-form-wrapper >>> .el-tooltip, .post-form-wrapper >>> .el-select, .post-form-wrapper >>> .pj-name {
    width: 75%;
  }

  .post-form-wrapper {
    padding: 2% 8%;
    background-color: #f9f9f9;
  }

  .form-container {
    padding: 15px 40px;
    background-color #fff;

  }

  .tips-item {
    background-color #ebf5fe;
    border: 1px solid #badefb;
    color: #73afe0;
    padding: 10px 20px;
    font-size 12px;
  }

  .form-item {
    margin-top: 30px;
  }

  .tooltip-border {
    margin: 0;
    padding-bottom: 10px;
    border-bottom: 1px solid #888;

  }
</style>
