<template>
  <div class="login">
      <el-card class="login-card">
           <div class="login-logo">
          <img src="../../assets/img/logo_index.png" alt="">
      </div>
      <el-form ref="myForm" :model="loginForm" :rules="loginRules" style="margin-top:20px">
             <!-- 每一个表单域由一个 Form-Item 组件构成 -->
             <!-- form-item  prop属性 绑定 下面表单组件的 字段名 -->
             <el-form-item>
                 <!-- 表单域中可以放置各种类型的表单控件，包括 Input、Select、Checkbox、Radio、Switch、DatePicker、TimePicker -->
                 <!-- 手机号 绑定 v-model -->
                 <el-input placeholder="请输入手机号"></el-input>
             </el-form-item>
             <el-form-item>
                 <!-- 验证码 -->
                 <el-input placeholder="请输入验证码" style="width:65%"></el-input>
                 <!-- 发送验证码 -->
                 <el-button  style="float:right">发送验证码</el-button>
             </el-form-item>
             <el-form-item>
                 <!-- 同意选项 -->
                 <el-checkbox>我已阅读并同意用户协议和隐私条款</el-checkbox>
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
