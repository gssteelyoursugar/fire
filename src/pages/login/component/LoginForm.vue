<template>
  <div class="login-wrapper">
    <el-tabs stretch type="border-card" v-model="activeName">
      <el-tab-pane label="登录" name="first">
        <div class="login-item">
          <el-form status-icon ref="loginForm" :model="loginForm" :rules="rules">
            <el-form-item prop="phone">
              <el-input placeholder="手机号码" v-model="loginForm.phone"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input placeholder="密码" type="password" v-model="loginForm.password"
                        @keyup.enter.native="login('loginForm')"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="doLogin('loginForm')">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="注册" name="second">
        <div class="login-item">
          <el-form status-icon :rules="rules" ref="logupForm" :model="logupForm">
            <el-form-item prop="username">
              <el-input placeholder="昵称" v-model="logupForm.username"></el-input>
            </el-form-item>
            <el-form-item prop="phone">
              <el-input placeholder="手机号码" v-model="logupForm.phone"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input placeholder="密码" type="password" v-model="logupForm.password"></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
              <el-input placeholder="再次确认密码" type="password" v-model="logupForm.checkPass"
                        @keyup.enter.native="logUp('logupForm')"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="success" v-loading.fullscreen.lock="fullscreenLoading"
                         @click="doLogUp('logupForm')">注册
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import {login, logup} from "@/api/login";
  import {checkPhone, logInAnimation, logUpAnimation} from "@/api/validator";
  import {mapMutations} from 'vuex'

  export default {
    name: "LoginForm",
    data() {
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.logupForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        activeName: 'first',
        fullscreenLoading: false,
        loginForm: {
          phone: '18577995017',
          password: '1209'
        },
        logupForm: {
          username: 'gsheng',
          phone: '18577995017',
          password: '123123',
          checkPass: '123123'
        },
        rules: {
          phone: [
            {validator: checkPhone, trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'}
          ],
          username: [
            {required: true, message: '请输入昵称', trigger: 'blur'},
            {min: 1, max: 7, message: '长度在 1 到 7 个字符', trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      ...mapMutations(['saveLoginStatus']),
      doLogin(formName) {
        this.$refs[formName].validate((valid) => {
          let _this = this
          if (valid) {
            login(_this.loginForm).then(res => {
              console.log(res);
              if (res.data.code === '20000') {
                _this.saveLoginStatus({'token': res.data.data.token.token})
                //  loading 效果并跳转至Index
                logInAnimation(_this)
              }
              if (res.data.code === '40004') {
                _this.$message.error('用户不存在')
              }
              if (res.data.code === '30001') {
                _this.$message.warning('密码错误!')
              }
            }).catch(err => {
              console.log(err);
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      doLogUp(formName) {
        this.$refs[formName].validate((valid) => {
          let _this = this
          if (valid) {
            logup(this.logupForm)
              .then(
                res => {
                  if (res.data.code === '20000') {
                    logUpAnimation(_this)
                  }
                  if (res.data.code === '10001') {
                    _this.$message.error('该手机已经有人使用了')
                  }

                  if (res.data.code === '10002') {
                    _this.$message.error('该用户名被人抢先一步用啦')
                  }
                })
              .catch(err => {
                console.log(err)
              })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .login-wrapper >>> .el-tabs__item.is-active
    color: #da552f;

  .login-wrapper >>> .el-tabs__active-bar
    background: #da552f;

  .login-wrapper >>> .el-tabs__item:hover
    color: #da552f !important;

  .login-wrapper >>> .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active
    border-right #f9f9f9;

  .login-wrapper >>> .el-tabs__content
    padding: 15% 10%;

  .login-wrapper >>> .el-form-item__content .el-button--success
    width: 100%;

  .login-wrapper >>> .el-form-item__content .el-button--primary
    width: 100%;
    background: $themeColor;
    border: $themeColor;

  .login-wrapper
    padding: 5% 35%;
</style>
