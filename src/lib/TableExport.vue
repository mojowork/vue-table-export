<template>
  <div>
      <a class="export-btn" @click="handleTableExport"><slot>导出</slot></a>
  </div>
</template>
<script>
import tableExport from './tableExport'
export default {
    name: 'vue-table-export',
    props: {
        el: {
            type: String,
            default: 'table'
        },
        fileName: {
            type: String,
            default: 'default-name'
        },
        type: {
            type: String,
            default: 'xls'
        },
    },
    data() {
        return {}
    },
    methods: {
        handleTableExport() {
            tableExport(this.el, this.fileName, this.type)
        }
    }
}
</script>