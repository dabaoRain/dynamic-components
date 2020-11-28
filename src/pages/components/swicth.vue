/*
 * @Author: shaohaibin 
 * @Date: 2019-10-23 14:20:16 
 * @Last Modified by: shaohaibin
 * @Last Modified time: 2020-11-28 13:17:43
 */
<template>
  <div class="check-box">
    <van-switch-cell class="switch" v-model="currentChecked" :title="title" @change="switchMethod" :disabled="isDisabled"/>
    <transition name="slide-fade">
       <slot name="content"></slot>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentChecked: true
    }
  },
  computed: {},
  watch: {
    checked: {
      handler(newValue) {
        this.currentChecked = newValue
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    switchMethod(val) {
      this.$emit('getSwitchValue', val)
    }
  }
}
</script>
<style lang="stylus" scoped>
.switch {
  >>> .van-cell__title {
    border-left 3px solid #1697FF
    padding-left 6px
    // color: #1697FF;
    font-weight:600;
  }
}
.slide-fade-enter-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter, .slide-fade-leave-to, {
  opacity: 0;
}
</style>
