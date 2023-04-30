<template>
  <div>
    <el-card
      shadow="never"
      class="app-container"
    >
      <el-row :gutter="8">
        <el-col :span="8">
          <el-card
            class="col-card-shadow col-card-image"
            shadow="never"
          >
            <el-row :gutter="16">
              <el-col :span="18">
                <div class="col-title">
                  <span class="span-content">欢迎登录</span>
                  <span class="span-title">{{ name }}</span>
                </div>
                <div>
                  <el-statistic
                    ref="statistic"
                    format="HH:mm:ss"
                    :value="deadline"
                    time-indices
                  >
                    <template slot="prefix">
                      距离明日
                    </template>
                  </el-statistic>
                </div>
              </el-col>
              <el-col
                :span="6"
                style="text-align: right;margin-top:5%"
              >
                <el-avatar
                  :size="60"
                  :src="avatar+'?imageView2/1/w/80/h/80'"
                />
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card
            class="col-card-shadow"
            shadow="never"
          >123
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card
            class="col-card-shadow"
            shadow="never"
          >223
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters([
      'name',
      'avatar'
    ])
  },
  data() {
    return {
      deadline: Date.now() + (new Date().setHours(23, 59, 59) - Date.now())
    }
  }
}
</script>

<style
  lang="scss"
  scoped
>
.col-card-image {
  background: url("~@/assets/images/bg.jpeg") no-repeat center center;
  background-size: 100% 100%;
}

.col-title {
  color: #fff;
  text-align: left;
  margin-bottom: 16px;
  font-family: Lobster;

  .span-title {
    font-size: 40px;
    padding-left: 8px;
    background: -webkit-linear-gradient(left,
      #ffffff,
      #439A97 25%,
      #94b89e 50%,
      #62B6B7 75%,
      #8F7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    animation: masked-animation 2s infinite linear;
  }

  @keyframes masked-animation {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: -100%, 0;
    }
  }

  .span-content {
    font-size: 12px;
    opacity: .8;
    text-shadow: 0 0 0.2em #8F7;
  }
}
</style>

<style>
.el-statistic .con {
  justify-content: left;
  display: block;
}

.el-statistic .con span {
  font-size: 12px !important;
  opacity: .8;
  color: #fff;
  text-shadow: 0 0 0.2em #8F7;
}

.el-statistic .con .number {
  font-size: 32px !important;
  color: #fff;
  text-shadow: 0 0 0.2em #8F7;
}
</style>
