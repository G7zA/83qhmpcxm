<template>
  <div class="login">
      <el-card class="login-card">
           <div class="login-logo">
          <img src="../../assets/img/logo_index.png" alt="">
      </div>
      <el-form ref="myForm" :model="loginForm" :rules="loginGz" style="margin-top:20px">
             <!-- 每一个表单域由一个 Form-Item 组件构成 -->
             <!-- form-item  prop属性 绑定 下面表单组件的 字段名 -->
             <el-form-item prop="mobile">
                 <!-- 表单域中可以放置各种类型的表单控件，包括 Input、Select、Checkbox、Radio、Switch、DatePicker、TimePicker -->
                 <!-- 手机号 绑定 v-model -->
                 <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
             </el-form-item>
             <el-form-item  prop="yzm">
                 <!-- 验证码 -->
                 <el-input v-model="loginForm.yzm" placeholder="请输入验证码" style="width:65%"></el-input>
                 <!-- 发送验证码 -->
                 <el-button  style="float:right">发送验证码</el-button>
             </el-form-item>
             <el-form-item prop="agreen">
                 <!-- 同意选项 -->
                 <el-checkbox v-model="loginForm.agreen">我已阅读并同意用户协议和隐私条款</el-checkbox>
             </el-form-item>
              <el-form-item>
                  <!-- 登录按钮 -->
                  <!-- 注册点击事件 -->
                  <el-button type="primary" style="width:100%">登录</el-button>
              </el-form-item>
         </el-form>
      </el-card>
      </div>
</template>

<script>
export default {
  data () {
    let validator = (rule, value, callback) => {
      // rule当前规则
      // value当前表单项目的值
      // callback回调函数
      value ? callback() : callback(new Error('请仔细阅读用户协议和隐私条款'))
      // 判断value值如果勾选了就是ture 如果没有勾选 就给出提示信息
    }
    return {
      loginForm: {
        mobile: '', // 手机号
        yzm: '', // 验证码
        agreen: 'false' // 是否同意协议
      },
      loginGz: {
        // 决定校验规则 一个对象就是一个加盐规则
        // key（字段名）:value（对象数组）的形式
        // required 为true 就表示该字段必填 如果不填 就会提示消息
        mobile: [{ required: true, message: '请输入您的手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号' }],
        yzm: [{ required: true, message: '请输入您收到的验证码' },
          { pattern: /^\d{6}$/, message: '验证码为6位数字' }],
        agreen: [{ validator }] // 自定义形式去校验
      }
    }
  }
}

</script>

<style lang="less" scoped>
// 如果要在组件样式中写less就要给一个lang属性 lang='less'
//如果加了scoped属性 那么该style就只会对当前组件有效
.login{
    background-image: url('../../assets/img/login_bg.jpg');
    height: 100vh;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-card{
        width:440px;
        height:340px;
        .login-logo{
            text-align: center;
            img{
                height: 48px;
            }
        }
    }

}
</style>
