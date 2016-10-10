var bindEvents = require('./vueasyui').bindEvents
var events = 'onSelect,onUnselect,onBeforeRemove,onRemove'.split(',')
module.exports = {
    inserted: function (el, binding, vnode, oldVnode) {
        var options = bindEvents(binding, vnode, el, arguments, events);
        $(el).accordion(options)
    }
}