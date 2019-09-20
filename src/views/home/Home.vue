<template>
<!-- 先定义一个大容器 -->
 <el-container>
    <!-- 先放置一个左侧 -->
    <el-aside>
      <!-- 左侧导航组件 -->
<left-leftdh></left-leftdh>
    </el-aside>
    <!-- 右侧大容器 -->
    <el-container>
      <!-- 头部 -->
      <el-header>
        <right-header></right-header>
      </el-header>
      <!-- 中部区域 -->
      <el-main>
        <!-- 二级路由容器 -->
         <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import leftDh from '../../components/left/left-dh'
import rightHeader from '../../components/header/right-header'
export default {
  components: {
    'left-leftdh': leftDh,
    'right-header': rightHeader
  }
}
</script>
