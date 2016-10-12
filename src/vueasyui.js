var bindEvents = function (binding, vnode, el, events) {
    var ns = binding.arg ? binding.arg + '.' : ''
    var vm = vnode.context
    var options = binding.value || {}

    $.each(events, function (i, e) {
        options[e] = function () {
            vm.$emit(ns + e, {el: el, args: arguments})
        }
    })
    return options;
}

exports.bindEvents = bindEvents