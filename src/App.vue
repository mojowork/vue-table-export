<template>
  <div id="app">
    <table id="table">
		<tbody>
			<tr>
				<td>文字</td>
				<td>咨询</td>
				<td>测试</td>
			</tr>
			<tr>
				<td>文字</td>
				<td>咨询</td>
				<td>测试</td>
			</tr>
			<tr>
				<td>文字</td>
				<td>咨询</td>
				<td>测试</td>
			</tr>
			<tr>
				<td>文字</td>
				<td>咨询</td>
				<td>测试</td>
			</tr>
			<tr>
				<td>文字</td>
				<td>咨询</td>
				<td>测试</td>
			</tr>
			<tr>
				<td>文字</td>
				<td>咨询</td>
				<td>测试</td>
			</tr>
		</tbody>
	</table>
    <vue-table-export el="table" type="xls"><button style="color:red;">導出表格</button></vue-table-export>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {}
  }
}
</script>
