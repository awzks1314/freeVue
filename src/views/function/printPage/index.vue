<template>
	<div id="printRref">
		<el-card shadow="hover" header="打印演示">
			<el-alert
				title="感谢优秀的 `print-js`，项目地址：https://github.com/crabbly/Print.js。请在打印弹窗 `更多设置` 中开启 `背景图形。`"
				type="success"
				:closable="false"
				class="mb15"
			></el-alert>
			<el-button @click="onPrintJs" size="small" type="primary" icon="iconfont icon-dayin">点击打印演示</el-button>
		</el-card>
	</div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue'
import printJs from 'print-js'
export default {
  name: 'FunctionPrintPage',
  setup() {
    const state = reactive({})
    //   点击打印
    const onPrintJs = () => {
      printJs({
        printable: 'printRref',
        type: 'html',
        css: ['//at.alicdn.com/t/font_2298093_o73r8wjdhlg.css', 'https://unpkg.com/element-plus/lib/theme-chalk/index.css'],
        scanStyles: false,
        style: `@media print{.mb15{margin-bottom:15px;}.el-button--small i.iconfont{font-size: 12px !important;margin-right: 5px;}}`
      })
    }
    return {
      ...toRefs(state),
      onPrintJs
    }
  }
}
</script>
