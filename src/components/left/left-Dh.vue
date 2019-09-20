<template>
  <div class="left-dh">
    <div style="padding:15px 10px">
      <img src="../../assets/img/logo_admin.png" alt />
    </div>
    <el-menu style="width:201px;" background-color="#353b4b" text-color="#adafb5" active-text-color="#ffd04b">
      <!-- 首页 -->
      <el-menu-item index="4">
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
        <el-menu-item index="1-1">发布文章</el-menu-item>
        <el-menu-item index="1-2">内容评论</el-menu-item>
        <el-menu-item index="1-3">评论列表</el-menu-item>
        <el-menu-item index="1-4">素材管理</el-menu-item>
      </el-submenu>

      <!-- 粉丝管理 -->
      <el-submenu index="2">
        <!-- el-submenu 插槽 title  一级显示内容为粉丝管理 -->
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>粉丝管理</span>
        </template>
        <!-- 二级内容 -->
        <el-menu-item index="2-1">图文数据</el-menu-item>
        <el-menu-item index="2-2">粉丝概括</el-menu-item>
        <el-menu-item index="2-3">粉丝画像</el-menu-item>
        <el-menu-item index="2-4">粉丝列表</el-menu-item>
      </el-submenu>

      <!-- 账户信息 -->
      <el-menu-item index="3">
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
  background-color: #323745;
  width: 200px;
  height: 100vh;
}
</style>
