<template>
	<div class="layout-search-dialog">
		<el-dialog v-model="isShowSearch" width="300px" destroy-on-close :modal="false" fullscreen :show-close="false">
			<el-autocomplete
				v-model="menuQuery"
				:fetch-suggestions="menuSearch"
				:placeholder="$t('message.user.searchPlaceholder')"
				prefix-icon="el-icon-search"
				ref="layoutMenuAutocompleteRef"
				@select="onHandleSelect"
				@blur="onSearchBlur"
			>
				<template #default="{ item }">
					<div><i :class="item.meta.icon" class="mr10"></i>{{ $t(item.meta.title) }}</div>
				</template>
			</el-autocomplete>
		</el-dialog>
	</div>
</template>

<script lang="ts">
import { reactive, ref, toRefs, nextTick, defineComponent } from 'vue'
import { useStore } from '/@/store/index'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'LayoutBreadcrumbSearch',
  setup() {
    const layoutMenuAutocompleteRef = ref()
    const store = useStore()
    const router = useRouter()
    const state: any = reactive({
      isShowSearch: false,
      menuQuery: '',
      tagsViewList: []
    })
    // 搜索弹窗打开
    const openSearch = () => {
      state.menuQuery = ''
      state.isShowSearch = true
      initTageView()
      nextTick(() => {
        layoutMenuAutocompleteRef.value.focus()
      })
    }
    // 搜索弹窗关闭
    const closeSearch = () => {
      state.isShowSearch = false
    }
    // 菜单数据过滤
    const menuSearch = (queryString: any, cb:any) => {
      const results = queryString ? state.tagsViewList.filters(createFilter(queryString)) : state.tagsViewList
      cb(results)
    }
    // 菜单搜索过滤
    const createFilter = (queryString: any) => {
      return (restaurant: any) => {
        return (
          restaurant.path.toLowerCase().indexOf(queryString.toLowerCase()) > -1 ||
                restaurant.meta.title.toLowerCase().indexOf(queryString.toLowerCase()) > -1
        )
      }
    }
    // 初始化菜单数据
    const initTageView = () => {
      if (state.tagsViewList.length > 0) return false
      store.state.tagsViewRoutes.tagsViewRoutes.map((v: any) => {
        if (!v.meta.isHide) state.tagsViewList.push({ ...v })
      })
    }
    // 当前选中菜单
    const onHandleSelect = (item: any) => {
      const { path, redirect } = item
      if (item.meta.isLink && !item.meta.isIframe) window.open(item.meta.link)
      else if (redirect) router.push(redirect)
      else router.push(path)
      closeSearch()
    }
    // input 失去焦点时
    const onSearchBlur = () => {
      closeSearch()
    }
    return {
      layoutMenuAutocompleteRef,
      menuSearch,
      onSearchBlur,
      onHandleSelect,
      openSearch,
      closeSearch,
      ...toRefs(state)
    }
  }
})
</script>

<style scoped lang="scss">
.layout-search-dialog {
	::v-deep(.el-dialog) {
		box-shadow: unset !important;
		border-radius: 0 !important;
		background: rgba(0, 0, 0, 0.5);
	}
	::v-deep(.el-autocomplete) {
		width: 560px;
		position: absolute;
		top: 100px;
		left: 50%;
		transform: translateX(-50%);
	}
}
</style>
