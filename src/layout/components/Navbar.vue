<template>
  <div class="navbar">
    <!--    <hamburger-->
    <!--      :is-active="sidebar.opened"-->
    <!--      class="hamburger-container"-->
    <!--      @toggleClick="toggleSideBar"-->
    <!--    />-->

    <!--    <breadcrumb class="breadcrumb-container"/>-->

    <i
      class="hamburger-container"
      :class="{ 'el-icon-lock': lockOpen, 'el-icon-unlock': !lockOpen}"
      @click="lockClick"
    />

    <div class="right-menu">
      <el-dropdown
        class="avatar-container"
        trigger="click"
      >
        <div class="avatar-wrapper">
          <!--          <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">-->
          <img
            src="~@/assets/images/login-bg.png"
            class="user-avatar"
          >
          <i class="el-icon-caret-bottom"/>
        </div>
        <el-dropdown-menu
          slot="dropdown"
          class="user-dropdown"
        >
          <router-link to="/">
            <el-dropdown-item>
              <i class="el-icon-s-home"/>
              首页
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item
            divided
            @click.native="logout"
          >
            <i class="el-icon-switch-button"/>
            退出
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import Breadcrumb from '@/components/Breadcrumb'
// import Hamburger from '@/components/Hamburger'

export default {
  components: {
    // Breadcrumb,
    // Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  data() {
    return {
      lockOpen: false
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    lockClick() {
      this.lockOpen = !this.lockOpen
      if (this.lockOpen === true) {
        this.$store.dispatch('app/toggleSideBar', true)
      }
      this.$store.dispatch('app/lockSideBar', this.lockOpen)
    }
  }
}
</script>

<style
  lang="scss"
  scoped
>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 2px 8px #CBEDD5;
  margin-top: 16px;
  margin-right: 8px;
  border-radius: 10px;

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color: transparent;
    margin-left: 20px;
    font-size: 24px;
    color: #439A97;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 50px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 35px;
          height: 25px;
          margin-top: 10px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -15px;
          top: 20px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
