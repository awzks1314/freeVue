<template>
    <div>
      <transition name="el-zoom-in-center">
      <div
        aria-hidden="true"
        class="el-dropdown__popper el-popper is-light is-pure custom-contextmenu"
        role="tooltip"
        data-popper-placement="bottom"
        :style="`top: ${dropdowns.y + 5}px;left: ${dropdowns.x}px;`"
        :key="Math.random()"
        v-show="isShow"
      >
        <ul class="el-dropdown-menu">
          <template v-for="(v, k) in dropdownList">
            <li class="el-dropdown-menu__item" aria-disabled="false" tabindex="-1" :key="k" v-if="!v.affix" @click="onCurrentContextmenuClick(v.id)">
              <i :class="v.icon"></i>
              <span>{{ $t(v.txt) }}</span>
            </li>
          </template>
        </ul>
        <div class="el-popper__arrow" style="left: 10px"></div>
      </div>
    </transition>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs, onMounted, onUnmounted } from 'vue'
export default defineComponent({
  name: 'LayoutTagsViewContextmenu',
  props: {
    dropdown: {
      type: Object,
      default: {}
    }
  },
  setup(props, { emit }) {
    const state = reactive({
      isShow: false,
      dropdownList: [
        { id: 0, txt: 'message.tagsView.refresh', affix: false, icon: 'el-icon-refresh-right' },
        { id: 1, txt: 'message.tagsView.close', affix: false, icon: 'el-icon-close' },
        { id: 2, txt: 'message.tagsView.closeOther', affix: false, icon: 'el-icon-circle-close' },
        { id: 3, txt: 'message.tagsView.closeAll', affix: false, icon: 'el-icon-folder-delete' },
        {
          id: 4,
          txt: 'message.tagsView.fullscreen',
          affix: false,
          icon: 'iconfont icon-fullscreen'
        }
      ],
      path: {}
    })
    // 父级传递过来的x，y
    const dropdowns = computed(() => {
      return props.dropdown
    })
    // 当前菜单点击
    const onCurrentContextmenuClick = (id: number) => {
      emit('currentContextmenuClick', { id, path: state.path })
    }
    // 打开右键菜单： 判断是否固定，固定则不显示关闭
    const openContextmenu = (item: any) => {
      state.path = item.path
      item.meta.isAffix ? (state.dropdownList[1].affix = true) : (state.dropdownList[1].affix = false)
      closeContextmenu()
      setTimeout(() => {
        state.isShow = true
      }, 10)
    }
    // 关闭右键菜单
    const closeContextmenu = () => {
      state.isShow = false
    }
    // 监听页面监听进行右键菜单的关闭
    onMounted(() => {
      document.body.addEventListener('click', closeContextmenu)
    })
    // 页面卸载时，移除右键菜单监听事件
    onUnmounted(() => {
      document.body.removeEventListener('click', closeContextmenu)
    })
    return {
      dropdowns,
      openContextmenu,
      closeContextmenu,
      onCurrentContextmenuClick,
      ...toRefs(state)
    }
  }
})

</script>

<style scoped lang="scss">
.custom-contextmenu {
	transform-origin: center top;
	z-index: 2190;
	position: fixed;
	.el-dropdown-menu__item {
		font-size: 12px !important;
		i {
			font-size: 12px !important;
		}
	}
}
</style>
