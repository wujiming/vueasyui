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

		Vue.directive('e-layout', __webpack_require__(1))
		Vue.directive('e-datagrid', __webpack_require__(2))
		Vue.directive('e-accordion', __webpack_require__(3))
	}
	
	plugin.version = '0.1'
	
	module.exports = plugin
	
	if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(plugin)
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

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

		/***/
	},
	/* 2 */
	/***/ function (module, exports) {

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
			update: function () {
			},
			componentUpdated: function () {
			},
			unbind: function () {
			}
		}

		/***/
	},
	/* 3 */
	/***/ function (module, exports) {

		module.exports = {
			bind: function () {
			},
			inserted: function (el, binding, vnode, oldVnode) {
				var options = $.extend(binding.value, binding.modifiers)
				$(el).accordion(options)
	    },
	    update: function () {
	    },
	    componentUpdated: function () {
	    },
	    unbind: function () {
	    }
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-easyui.js.map