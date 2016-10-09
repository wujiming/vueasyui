module.exports = {
    bind: function () {
    },
    inserted: function (el, binding, vnode, oldVnode) {
        var options = $.extend(binding.value, binding.modifiers)
        $(el).tabs(options)
    },
    update: function () {
    },
    componentUpdated: function () {
    },
    unbind: function () {
    }
}