<template>
  <el-card
    class="app-container"
    shadow="never"
  >
    <el-row :gutter="8">
      <el-col :span="8">
        <el-card>
          <div class="dashboard-text">{{ name }}</div>
        </el-card>
      </el-col>
      <el-col :span="8">1</el-col>
      <el-col :span="8">2</el-col>
    </el-row>
  </el-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style
  lang="scss"
  scoped
>
.dashboard {
  &-container {
    margin: 30px;
  }

  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
