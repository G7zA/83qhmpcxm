<template>
  <div class="left-dh">
    <div style="padding:15px 10px">
      <img src="../../assets/img/logo_admin.png" alt />
    </div>
    <!-- el-menu 给一个rouer属性index=true 启用路由
    :router="true" -->
    <el-menu
    router
     style="width:201px;" background-color="#353b4b" text-color="#adafb5" active-text-color="#ffd04b">
      <!-- 首页 -->
      <el-menu-item index="/home">
        <!-- 图标 -->
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <!-- 内容管理  -->
      <el-submenu index="1">
        <!-- el-submenu 插槽 title  一级显示内容为内容管理 -->
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>内容管理</span>
        </template>
        <!-- 二级内容 -->
        <el-menu-item index="/home/publish">发布文章</el-menu-item>
        <el-menu-item index="/home/articles">内容评论</el-menu-item>
        <el-menu-item index="/home/comment">评论列表</el-menu-item>
        <el-menu-item index="/home/material">素材管理</el-menu-item>
      </el-submenu>

      <!-- 粉丝管理 -->
      <el-submenu index="2">
        <!-- el-submenu 插槽 title  一级显示内容为粉丝管理 -->
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>粉丝管理</span>
        </template>
        <!-- 二级内容 -->
        <el-menu-item index="/home/gradata">图文数据</el-menu-item>
        <el-menu-item index="/homefanpro">粉丝概括</el-menu-item>
        <el-menu-item index="/home/pic">粉丝画像</el-menu-item>
        <el-menu-item index="/home/list">粉丝列表</el-menu-item>
      </el-submenu>

      <!-- 账户信息 -->
      <el-menu-item index="/home/account">
        <i class="el-icon-s-custom"></i>
        <span slot="title">账户信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
// 左侧导航组件
export default {

}
</script>
<style lang="less" scoped>
.left-dh {
  // background-color: #323745;
  width: 200px;
  height: 100vh;
}
</style>
