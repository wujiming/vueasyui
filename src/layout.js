var bindEvents = require('./vueasyui').bindEvents
var events = 'onCollapse,onExpand,onExpand,onRemove'.split(',')
module.exports = {
    inserted: function (el, binding, vnode, oldVnode) {
        var options = bindEvents(binding, vnode, el, arguments, events);
        $(el).layout(options)
    }
}