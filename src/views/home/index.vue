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
              <el-col
                :span="16"
                style="height: 200px;line-height: 100px"
              >
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
                :span="8"
                style="height: 200px; display: flex; align-items: center; justify-content: center;"
              >
                <el-avatar
                  :size="80"
                  :src="avatar+'?imageView2/1/w/80/h/80'"
                />
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card
            class="col-card-shadow col-card-image1"
            shadow="never"
          >{{ texts[0] }}
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card
            class="col-card-shadow col-card-image2"
            shadow="never"
          >{{ texts[1] }}
          </el-card>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-carousel
            type="card"
            :interval="5000"
            class="card-margin-top"
          >
            <el-carousel-item
              v-for="item in bgcImages"
              :key="item"
            >
              <img
                :src="item"
                alt=""
                style="width: 100%;height: 100%;object-fit: cover;"
              >
            </el-carousel-item>
          </el-carousel>
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
      deadline: Date.now() + (new Date().setHours(23, 59, 59) - Date.now()),
      bgcImages: [],
      texts: []
    }
  },
  mounted() {
    if (this.name === 'Leeron') {
      this.bgcImages = [
        require('@/assets/bg/n1.gif'),
        require('@/assets/bg/n2.gif'),
        require('@/assets/bg/n3.gif')
      ]
      this.texts = [
        'No pains, no gains',
        'If I could, I surely would.'
      ]
    } else {
      this.bgcImages = [
        require('@/assets/bg/a1.jpg'),
        require('@/assets/bg/a2.jpg'),
        require('@/assets/bg/a3.jpg')
      ]
      this.texts = [
        'There is more to come',
        'Hope you know a lot and still love life.'
      ]
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

.col-card-image1 {
  background: url("~@/assets/images/dh.jpeg") no-repeat center center;
}

.col-card-image2 {
  background: url("~@/assets/images/hs.jpeg") no-repeat center center;
}

.col-card-image1,
.col-card-image2 {
  background-size: 100% 100%;
  height: 232px;
  line-height: 200px;
  text-align: center;
  color: #fff;
  font-size: 32px;
  font-family: Lobster;
  text-shadow: 0.2em 0.5em 0.1em #088395,
  -0.3em 0.1em 0.1em #05BFDB,
  0.4em -0.3em 0.1em #00FFCA
}

.col-title {
  color: #fff;
  text-align: left;
  font-family: Lobster;

  .span-title {
    font-size: 64px;
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
    font-size: 16px;
    opacity: .8;
    text-shadow: 0 0 0.2em #8F7;
  }
}
</style>

<style>
.el-statistic .con {
  justify-content: left;
  display: block;
  text-align: left;
}

.el-statistic .con span {
  font-size: 16px !important;
  opacity: .8;
  color: #fff;
  text-shadow: 0 0 0.2em #8F7;
}

.el-statistic .con .number {
  font-size: 54px !important;
  color: #fff;
  text-shadow: 0 0 0.2em #8F7;
  font-family: Lobster;
  padding: 0 8px;
}

.card-margin-top {
  margin-top: 24px;
}

.el-carousel__container {
  height: calc(100vh - 445px);
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
