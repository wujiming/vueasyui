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
        var options = binding.value;

        $.each(events, function (i, e) {
            var f = options[e]

            if (f) {
                if ($.isFunction(f)) {
                    //do nothing
                } else if ($.type(f) === 'string') {
                    console.log(context[f])
                    options[e] = context[f]
                } else {
                    console.warn(f + ' is invalidate')
                }
            }
        })
        $(el).datagrid(options)
    },
    update: function () {
    },
    componentUpdated: function () {
    },
    unbind: function () {
    }
}