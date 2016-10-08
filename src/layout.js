module.exports = {
    bind: function () {
    },
    inserted: function (el, binding, vnode, oldVnode) {
        var modifiers = binding.modifiers
        var fit = !!modifiers.fit
        $(el).layout({
            fit: fit
        })
    },
    update: function () {
    },
    componentUpdated: function () {
    },
    unbind: function () {
    }
}