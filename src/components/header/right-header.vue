<template>
  <!-- 头部最外层放一个<el-row> -->
  <el-row class="right-header" type="flex" align="middle" justify="space-between">
    <!-- 左侧 -->
    <el-col :span="6">
      <i class="el-icon-s-fold"></i>
      <span class="wz">江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <!-- 右侧 -->
    <el-col :span="4">
      <img class="user-img" :src="userInfo.photo?userInfo.photo:defaultImg" alt />
      <!-- <img class="user-img" src="../../assets/img/avatar.jpg" alt /> -->
      <!-- 下拉菜单 el-dropdown 下拉菜单的自定义事件绑定command -->
      <el-dropdown trigger="click" @command="commonClick">
        <!-- 匿名插槽 -->
        <span class="el-dropdown-link">
          {{userInfo.name}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <!-- 具名插槽 -->
        <el-dropdown-menu slot="dropdown">
            <!-- command属性会在触发点击时，携带给command事件对应的方法 -->
          <el-dropdown-item command="account">个人信息</el-dropdown-item>
          <el-dropdown-item command="git">git地址</el-dropdown-item>
          <el-dropdown-item command="out">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {}, // 个人信息对象
      defaultImg: require('../../assets/img/avatar.jpg') // 转成base64

    }
  },
  methods: {
    // 获取用户个人资料
    getUserInfo () {
      let token = window.localStorage.getItem('user-token') // 从前端缓存中获取token
      this.$axios({
        url: '/user/profile',
        headers: { 'Authorization': `Bearer ${token} ` } // 请求参数
      }).then(result => {
        this.userInfo = result.data.data // 接送数据对象
      })
    },
    // 公共点击事件
    commonClick (key) {
      if (key === 'account') {
        // 跳转到 账户信息
        this.$router.push('/home/account')
      } else if (key === 'git') {
        //   去项目的git地址
        window.location.href = 'https://github.com/G7zA/83qhmpcxm'
      } else if (key === 'out') {
        window.localStorage.clear('user-token') // 清除本项目的所有前端缓存
        this.$router.push('/login') // 跳转到登录页
      }
    }
  },
  created () {
    this.getUserInfo()
  }
}
</script>

<style lang='less' scoped>
.right-header{
    height:50px;
    .el-icon-s-fold {
        font-size:22px;
    }
    .wz {
        vertical-align: top;
        margin-left: 5px;
    }
    .user-img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        vertical-align: middle;
    }
}
</style>
