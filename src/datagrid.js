var bindEvents = require('./vueasyui').bindEvents
var events = ('onLoadSuccess,onLoadError,onBeforeLoad,onClickRow,onDblClickRow,onClickCell,onDblClickCell,' +
'onSortColumn,onResizeColumn,onSelect,onUnselect,onSelectAll,onUnselectAll,onCheck,onUncheck,onCheckAll,' +
'onUncheckAll,onBeforeEdit,onAfterEdit,onCancelEdit,onHeaderContextMenu,onRowContextMenu').split(',')

module.exports = {
    inserted: function (el, binding, vnode, oldVnode) {
        var options = bindEvents(binding, vnode, el, events)
        var modifiers = binding.modifiers

        var datagrid = $(el).datagrid(options)
        if (modifiers.clientPaging) {
            datagrid.datagrid('clientPaging')
        }
    }
}