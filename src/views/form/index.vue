<template>
  <div class="app-container app-box">
    <div class="text-align">{{ msg }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  data() {
    return {
      msg: ''
    }
  },
  mounted() {
    if (this.name === 'Leeron') {
      this.msg = `The value of life lies not length of days, but in the use of we make of them.`
    } else {
      this.msg = `I never consider ease and joyfulness the purpose of life itself.`
    }
  }
}
</script>

<style
  lang="scss"
  scoped
>
.app-box {
  text-align: center;

  .text-align {
    margin-top: 500px;
    font-size: 48px;
    font-family: Lobster;
    text-shadow: 0.2em 0.5em 0.1em #088395,
    -0.3em 0.1em 0.1em #05BFDB,
    0.4em -0.3em 0.1em #00FFCA
  }
}
</style>

