import vueTableExport from './TableExport.vue'
const tableExport = {
    install (Vue, options) {
        Vue.component(vueTableExport.name, vueTableExport)  
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(tableExport);
}
export default tableExport