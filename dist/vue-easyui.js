(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("vue-easyui", [], factory);
	else if(typeof exports === 'object')
		exports["vue-easyui"] = factory();
	else
		root["vue-easyui"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	function plugin(Vue, options) {
	    if (plugin.installed) {
	        return
	    }
	
	    Vue.directive('e-accordion', __webpack_require__(3))
	    Vue.directive('e-datagrid', __webpack_require__(2))
	    Vue.directive('e-layout', __webpack_require__(1))
	    Vue.directive('e-tabs', __webpack_require__(4))
	   
	}
	
	plugin.version = '0.1'
	
	module.exports = plugin
	
	if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(plugin)
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var bindEvents = __webpack_require__(6).bindEvents
	var events = 'onCollapse,onExpand,onExpand,onRemove'.split(',')
	module.exports = {
	    inserted: function (el, binding, vnode, oldVnode) {
	        var options = bindEvents(binding, vnode, el, events);
	        $(el).layout(options)
	    }
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var bindEvents = __webpack_require__(6).bindEvents
	var events = ('onLoadSuccess,onLoadError,onBeforeLoad,onClickRow,onDblClickRow,onClickCell,onDblClickCell,' +
	'onSortColumn,onResizeColumn,onSelect,onUnselect,onSelectAll,onUnselectAll,onCheck,onUncheck,onCheckAll,' +
	'onUncheckAll,onBeforeEdit,onAfterEdit,onCancelEdit,onHeaderContextMenu,onRowContextMenu').split(',')
	
	module.exports = {
	    inserted: function (el, binding, vnode, oldVnode) {
	        var options = bindEvents(binding, vnode, el, events);
	        $(el).datagrid(options)
	    }
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var bindEvents = __webpack_require__(6).bindEvents
	var events = 'onSelect,onUnselect,onBeforeRemove,onRemove'.split(',')
	module.exports = {
	    inserted: function (el, binding, vnode, oldVnode) {
	        var options = bindEvents(binding, vnode, el, events);
	        $(el).accordion(options)
	    }
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var bindEvents = __webpack_require__(6).bindEvents
	var events = 'onLoad,onSelect,onUnselect,onBeforeClose,onClose,onAdd,onUpdate,onContextMenu'.split(',')
	module.exports = {
	    inserted: function (el, binding, vnode, oldVnode) {
	        var options = bindEvents(binding, vnode, el, events);
	        $(el).tabs(options)
	    }
	}

/***/ },
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	var bindEvents = function (binding, vnode, el, events) {
	    var ns = binding.arg ? binding.arg + '.' : ''
	    var vm = vnode.context
	    var options = binding.value
	
	    $.each(events, function (i, e) {
	        options[e] = function () {
	            vm.$emit(ns + e, {el: el, args: arguments})
	        }
	    })
	    return options;
	}
	
	exports.bindEvents = bindEvents

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-easyui.js.map