
function plugin(Vue, options) {
    if (plugin.installed) {
        return
    }

    Vue.directive('e-layout', require('./layout'))
    Vue.directive('e-datagrid', require('./datagrid'))

}

plugin.version = '0.1'

module.exports = plugin

if (typeof window !== 'undefined' && window.Vue) {
    console.log('auto install vueasyui.')
    window.Vue.use(plugin)
}