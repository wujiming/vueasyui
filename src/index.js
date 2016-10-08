var layout = require('./layout')


function plugin(Vue, options) {
    if (plugin.installed) {
        console.warn('already installed.')
        return
    }

    Vue.directive('e-layout', layout)

}

plugin.version = '0.1'

module.exports = plugin

if (typeof window !== 'undefined' && window.Vue) {
    console.log('auto install vueasyui.')
    window.Vue.use(plugin)
}