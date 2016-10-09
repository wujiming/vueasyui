module.exports = {
    bind: function () {

    },
    inserted: function (el, binding, vnode, oldVnode) {
        var events = ['onLoadSuccess',
            'onLoadError',
            'onBeforeLoad',
            'onClickRow',
            'onDblClickRow',
            'onClickCell',
            'onDblClickCell',
            'onSortColumn',
            'onResizeColumn',
            'onSelect',
            'onUnselect',
            'onSelectAll',
            'onUnselectAll',
            'onCheck',
            'onUncheck',
            'onCheckAll',
            'onUncheckAll',
            'onBeforeEdit',
            'onAfterEdit',
            'onCancelEdit',
            'onHeaderContextMenu',
            'onRowContextMenu'
        ]
        var context = vnode.context;
        var options = $.extend(binding.value, binding.modifiers)
        $.each(events, function (i, e) {
            var f = options[e]

            if (f) {
                if ($.isFunction(f)) {
                    //do nothing
                } else if ($.type(f) === 'string') {
                    options[e] = context[f]
                } else {
                    console.warn(f + ' is invalidate')
                }
            }
        })
        $(el).datagrid(options)
    },
    update: function (el, binding, vnode, oldVnode) {
        var oldValue = binding.oldValue
        var value = binding.value

        console.log(JSON.stringify(oldValue), JSON.stringify(value))
    },
    componentUpdated: function () {
    },
    unbind: function () {
    }
}