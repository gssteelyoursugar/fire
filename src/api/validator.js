// var checkPhone = (rule, value, callback) => {
//   if (!value) {
//     return callback(new Error('手机号码不能为空'));
//   }
//   setTimeout(() => {
//     if (typeof Number.isInteger(value) != Number) {
//       if (value.length != 11) {
//         callback(new Error('手机格式错误'));
//       } else {
//         callback();
//       }
//     }
//   }, 1000);
// };
export function checkPhone(rule, value, callback) {
  if (!value) {
    return callback(new Error('手机号码不能为空'));
  }
  setTimeout(() => {
    if (typeof Number.isInteger(value) != Number) {
      if (value.length != 11) {
        callback(new Error('手机格式错误'));
      } else {
        callback();
      }
    }
  }, 1000);
};


//
export function logInAnimation(_this) {
  //  loading效果
  _this.fullscreenLoading = true;
  setTimeout(() => {
    _this.fullscreenLoading = false;
    _this.$router.push('/index')
    _this.$message.success('登录成功!')
  }, 1000);

}

export function logUpAnimation(_this) {
  //  loading效果
  _this.fullscreenLoading = true;
  setTimeout(() => {
    _this.fullscreenLoading = false;
  }, 1000);
  //让选项卡 回到登录
  _this.activeName = "first";
  _this.$notify({
    message: '注册成功',
    type: 'success'
  });
}

