
function plugin(Vue, options) {
    if (plugin.installed) {
        return
    }

    Vue.directive('e-accordion', require('./accordion'))
    Vue.directive('e-datagrid', require('./datagrid'))
    Vue.directive('e-layout', require('./layout'))
    Vue.directive('e-tabs', require('./tabs'))
   
}

plugin.version = '0.1'

module.exports = plugin

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin)
}