var bindEvents = require('./vueasyui').bindEvents
var events = 'onLoad,onSelect,onUnselect,onBeforeClose,onClose,onAdd,onUpdate,onContextMenu'.split(',')
module.exports = {
    inserted: function (el, binding, vnode, oldVnode) {
        var options = bindEvents(binding, vnode, el, arguments, events);
        $(el).tabs(options)
    }
}