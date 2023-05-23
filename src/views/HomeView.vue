<template>
  <div class="home">
    <el-container>

      <el-header class="top-header">
        <el-row class="row-bg" justify="space-evenly">
          <el-col :span="6">
            <div class="grid-content ep-bg-purple" >
              <img src="../assets/logo.png" class="logo001"/>
            </div>
          </el-col>
          <el-col :span="6" ><div class="grid-content ep-bg-purple-light">Customer Site Manager</div></el-col>
          <el-col :span="6"><div class="grid-content ep-bg-purple" />Login OFF</el-col>
        </el-row>
      </el-header>

      <el-container class="component-container">
        <el-aside class="left-aside">Aside</el-aside>
        <el-main class="content-body">Main</el-main>
      </el-container>
      
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {},
});
</script>

<style scoped lang="scss">

.top-header {
  background-color: aquamarine;
  .logo001 {
    width: 40px;
    height: 40px;
    background-color: #ffffff;
  }
}
.component-container {
  .left-aside {
    background-color: black;
    color: white;
  }
  .content-body {
    width: 100%;
    heigth: 100%;

  }
}

</style>