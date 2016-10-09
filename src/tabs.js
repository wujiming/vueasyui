module.exports = {
    bind: function () {
    },
    inserted: function (el, binding, vnode, oldVnode) {
        var options = $.extend(binding.value, binding.modifiers)
        $(el).tabs(options).tabs('resize')
    },
    update: function () {
    },
    componentUpdated: function () {
    },
    unbind: function () {
    }
}