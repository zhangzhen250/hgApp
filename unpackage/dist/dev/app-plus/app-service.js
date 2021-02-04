(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!*************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/main.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 38));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 61));\n\nvar _store = _interopRequireDefault(__webpack_require__(/*! ./store */ 64));\n\n\n\n\n\nvar _vmeitimeHttp = _interopRequireDefault(__webpack_require__(/*! @/common/vmeitime-http/ */ 65));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}_vue.default.config.productionTip = false;_vue.default.prototype.$store = _store.default;\n_vue.default.prototype.$api = _vmeitimeHttp.default;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({\n  store: _store.default },\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwicHJvdG90eXBlIiwiJHN0b3JlIiwic3RvcmUiLCIkYXBpIiwiYXBpIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUI7QUFDbkI7O0FBRUE7Ozs7OztBQU1BLG1HLHduQ0FKQUEsYUFBSUMsTUFBSixDQUFXQyxhQUFYLEdBQTJCLEtBQTNCLENBRUFGLGFBQUlHLFNBQUosQ0FBY0MsTUFBZCxHQUF1QkMsY0FBdkI7QUFHQUwsYUFBSUcsU0FBSixDQUFjRyxJQUFkLEdBQXFCQyxxQkFBckI7O0FBRUFDLGFBQUlDLE1BQUosR0FBYSxLQUFiOztBQUVBLElBQU1DLEdBQUcsR0FBRyxJQUFJVixZQUFKO0FBQ1hLLE9BQUssRUFBTEEsY0FEVztBQUVSRyxZQUZRLEVBQVo7O0FBSUFFLEdBQUcsQ0FBQ0MsTUFBSiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO2ltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xyXG5cclxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXHJcblxyXG5WdWUuY29uZmlnLnByb2R1Y3Rpb25UaXAgPSBmYWxzZVxyXG5cclxuVnVlLnByb3RvdHlwZS4kc3RvcmUgPSBzdG9yZVxyXG5cclxuaW1wb3J0IGFwaSBmcm9tICdAL2NvbW1vbi92bWVpdGltZS1odHRwLydcclxuVnVlLnByb3RvdHlwZS4kYXBpID0gYXBpXHJcblxyXG5BcHAubXBUeXBlID0gJ2FwcCdcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG5cdHN0b3JlLFxyXG5cdC4uLkFwcFxyXG59KVxyXG5hcHAuJG1vdW50KCkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/pages.json ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/login/login', function () {return Vue.extend(__webpack_require__(/*! pages/login/login.vue?mpType=page */ 2).default);});
__definePage('pages/main/main', function () {return Vue.extend(__webpack_require__(/*! pages/main/main.vue?mpType=page */ 20).default);});
__definePage('pages/reg/reg', function () {return Vue.extend(__webpack_require__(/*! pages/reg/reg.vue?mpType=page */ 31).default);});
__definePage('pages/pwd/pwd', function () {return Vue.extend(__webpack_require__(/*! pages/pwd/pwd.vue?mpType=page */ 41).default);});
__definePage('pages/user/user', function () {return Vue.extend(__webpack_require__(/*! pages/user/user.vue?mpType=page */ 46).default);});
__definePage('pages/product-code/product-code', function () {return Vue.extend(__webpack_require__(/*! pages/product-code/product-code.vue?mpType=page */ 51).default);});
__definePage('pages/setHttp/setHttp', function () {return Vue.extend(__webpack_require__(/*! pages/setHttp/setHttp.vue?mpType=page */ 56).default);});

/***/ }),
/* 2 */
/*!***************************************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/pages/login/login.vue?mpType=page ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _login_vue_vue_type_template_id_5b26a3ac_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=5b26a3ac&mpType=page */ 3);\n/* harmony import */ var _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _login_vue_vue_type_template_id_5b26a3ac_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _login_vue_vue_type_template_id_5b26a3ac_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _login_vue_vue_type_template_id_5b26a3ac_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/login/login.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ21LO0FBQ25LLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTViMjZhM2FjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9sb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvbG9naW4vbG9naW4udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*********************************************************************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/pages/login/login.vue?vue&type=template&id=5b26a3ac&mpType=page ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_5b26a3ac_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=5b26a3ac&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_5b26a3ac_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_5b26a3ac_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_5b26a3ac_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_5b26a3ac_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/application/HbuilderXAPP/hgApp/pages/login/login.vue?vue&type=template&id=5b26a3ac&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "input-group"), attrs: { _i: 1 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(2, "sc", "input-row border"),
              attrs: { _i: 2 }
            },
            [
              _c("text", {
                staticClass: _vm._$s(3, "sc", "title"),
                attrs: { _i: 3 }
              }),
              _c("m-input", {
                staticClass: _vm._$s(4, "sc", "m-input"),
                attrs: {
                  type: "text",
                  clearable: true,
                  focus: true,
                  placeholder: "请输入账号",
                  _i: 4
                },
                model: {
                  value: _vm._$s(4, "v-model", _vm.account),
                  callback: function($$v) {
                    _vm.account = $$v
                  },
                  expression: "account"
                }
              })
            ],
            1
          ),
          _c(
            "view",
            { staticClass: _vm._$s(5, "sc", "input-row"), attrs: { _i: 5 } },
            [
              _c("text", {
                staticClass: _vm._$s(6, "sc", "title"),
                attrs: { _i: 6 }
              }),
              _c("m-input", {
                attrs: {
                  type: "password",
                  displayable: true,
                  placeholder: "请输入密码",
                  _i: 7
                },
                model: {
                  value: _vm._$s(7, "v-model", _vm.password),
                  callback: function($$v) {
                    _vm.password = $$v
                  },
                  expression: "password"
                }
              })
            ],
            1
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(8, "sc", "btn-row"), attrs: { _i: 8 } },
        [_c("button", { attrs: { _i: 9 }, on: { click: _vm.loginBySms } })]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(10, "sc", "pswd"), attrs: { _i: 10 } },
        [
          _c(
            "view",
            { staticClass: _vm._$s(11, "sc", "pswd-set"), attrs: { _i: 11 } },
            [_c("text", { attrs: { _i: 12 }, on: { click: _vm.onGoSeting } })]
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!***************************************************************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/pages/login/login.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRpQixDQUFnQixza0JBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/application/HbuilderXAPP/hgApp/pages/login/login.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _vuex = __webpack_require__(/*! vuex */ 7);\n\n\nvar _mInput = _interopRequireDefault(__webpack_require__(/*! ../../components/m-input.vue */ 9));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\nvar weixinAuthService;var _default =\n{\n  components: {\n    mInput: _mInput.default },\n\n  data: function data() {\n    return {\n      loginType: 0,\n      loginTypeList: ['免密登录', '密码登录'],\n      mobile: '',\n      code: '',\n      providerList: [],\n      hasProvider: false,\n      account: '',\n      password: '',\n      positionTop: 0,\n      isDevtools: false,\n      codeDuration: 0,\n      ip: \"\",\n      port: \"\" };\n\n  },\n\n  onLoad: function onLoad(msg) {\n    if (msg.message === \"restlogin\") {\n      uni.showToast({\n        icon: \"none\",\n        title: \"请重新登录\" });\n\n    }\n\n    this.onLoading();\n  },\n  mounted: function mounted() {\n    this.onLoading();\n  },\n  methods: _objectSpread(_objectSpread({},\n  (0, _vuex.mapMutations)(['login'])), {}, {\n    onLoading: function onLoading() {var _this = this;\n      this.getUser();\n      uni.getStorage({\n        key: \"port\",\n        success: function success(res) {\n          if (res.data) {\n            _this.port = res.data;\n          }\n        },\n        complete: function complete() {\n          uni.getStorage({\n            key: \"ip\",\n            success: function success(res) {\n\n              if (_this.port) {\n                _this.ip = \"\".concat(res.data, \":\").concat(_this.port);\n              } else {\n                _this.ip = res.data;\n              }\n\n            } });\n\n        } });\n\n    },\n    initPosition: function initPosition() {\n      /**\n                                            * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。\n                                            * 反向使用 top 进行定位，可以避免此问题。\n                                            */\n      this.positionTop = uni.getSystemInfoSync().windowHeight - 100;\n    },\n\n    getUser: function getUser() {var _this2 = this;\n      uni.getStorage({\n        key: \"account\",\n        success: function success(res) {\n          if (res.data) {\n            _this2.account = res.data;\n          }\n        } });\n\n      uni.getStorage({\n        key: \"password\",\n        success: function success(res) {\n          if (res.data) {\n            _this2.password = res.data;\n          }\n        } });\n\n    },\n    saveUser: function saveUser() {\n      uni.setStorage({\n        key: \"account\",\n        data: this.account });\n\n      uni.setStorage({\n        key: \"password\",\n        data: this.password });\n\n    },\n    loginBySms: function loginBySms() {var _this3 = this;\n      if (this.account && this.password) {\n        this.saveUser();\n        this.$api.onlogin(this.ip, this.account, this.password).then(function (res) {\n          if (res.data.success === false || res.data.success === \"false\") {\n            uni.showToast({\n              icon: \"none\",\n              title: res.data.message });\n\n            return;\n          }\n\n          uni.showToast({\n            title: \"登录成功\",\n            success: function success() {\n              _this3.login(res.data.userName);\n              uni.navigateTo({\n                url: \"../main/main\" });\n\n            } });\n\n        }).catch(function (res) {\n          uni.showToast({\n            icon: \"none\",\n            title: \"请配置可用服务器地址\" });\n\n        });\n      }\n    },\n    onGoSeting: function onGoSeting() {\n      uni.navigateTo({\n        url: \"../setHttp/setHttp\" });\n\n    } }),\n\n  onReady: function onReady() {\n    this.initPosition();\n  } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbG9naW4vbG9naW4udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQkE7OztBQUdBLGlHOztBQUVBLHNCO0FBQ0E7QUFDQTtBQUNBLDJCQURBLEVBREE7O0FBSUEsTUFKQSxrQkFJQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxxQ0FGQTtBQUdBLGdCQUhBO0FBSUEsY0FKQTtBQUtBLHNCQUxBO0FBTUEsd0JBTkE7QUFPQSxpQkFQQTtBQVFBLGtCQVJBO0FBU0Esb0JBVEE7QUFVQSx1QkFWQTtBQVdBLHFCQVhBO0FBWUEsWUFaQTtBQWFBLGNBYkE7O0FBZUEsR0FwQkE7O0FBc0JBLFFBdEJBLGtCQXNCQSxHQXRCQSxFQXNCQTtBQUNBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBLHNCQUZBOztBQUlBOztBQUVBO0FBQ0EsR0EvQkE7QUFnQ0EsU0FoQ0EscUJBZ0NBO0FBQ0E7QUFDQSxHQWxDQTtBQW1DQTtBQUNBLG9DQURBO0FBRUEsYUFGQSx1QkFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FOQTtBQU9BO0FBQ0E7QUFDQSxxQkFEQTtBQUVBOztBQUVBO0FBQ0E7QUFDQSxlQUZBLE1BRUE7QUFDQTtBQUNBOztBQUVBLGFBVkE7O0FBWUEsU0FwQkE7O0FBc0JBLEtBMUJBO0FBMkJBLGdCQTNCQSwwQkEyQkE7QUFDQTs7OztBQUlBO0FBQ0EsS0FqQ0E7O0FBbUNBLFdBbkNBLHFCQW1DQTtBQUNBO0FBQ0Esc0JBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBTkE7O0FBUUE7QUFDQSx1QkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FOQTs7QUFRQSxLQXBEQTtBQXFEQSxZQXJEQSxzQkFxREE7QUFDQTtBQUNBLHNCQURBO0FBRUEsMEJBRkE7O0FBSUE7QUFDQSx1QkFEQTtBQUVBLDJCQUZBOztBQUlBLEtBOURBO0FBK0RBLGNBL0RBLHdCQStEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLHFDQUZBOztBQUlBO0FBQ0E7O0FBRUE7QUFDQSx5QkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQURBOztBQUdBLGFBUEE7O0FBU0EsU0FsQkEsRUFrQkEsS0FsQkEsQ0FrQkE7QUFDQTtBQUNBLHdCQURBO0FBRUEsK0JBRkE7O0FBSUEsU0F2QkE7QUF3QkE7QUFDQSxLQTNGQTtBQTRGQSxjQTVGQSx3QkE0RkE7QUFDQTtBQUNBLGlDQURBOztBQUdBLEtBaEdBLEdBbkNBOztBQXFJQSxTQXJJQSxxQkFxSUE7QUFDQTtBQUNBLEdBdklBLEUiLCJmaWxlIjoiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHRcdDwhLS0gPHZpZXcgY2xhc3M9XCJsb2dpbi10aXRsZVwiPlxyXG5cdFx0XHRcdDx0ZXh0PlxyXG5cdFx0XHRcdFx055So5oi355m75b2VXHJcblx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0PC92aWV3PiAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJpbnB1dC1yb3cgYm9yZGVyXCI+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aXRsZVwiPui0puWPt++8mjwvdGV4dD5cclxuXHRcdFx0XHQ8bS1pbnB1dCBjbGFzcz1cIm0taW5wdXRcIiB0eXBlPVwidGV4dFwiIGNsZWFyYWJsZSBmb2N1cyB2LW1vZGVsPVwiYWNjb3VudFwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl6LSm5Y+3XCI+PC9tLWlucHV0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiaW5wdXQtcm93XCI+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aXRsZVwiPuWvhuegge+8mjwvdGV4dD5cclxuXHRcdFx0XHQ8bS1pbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBkaXNwbGF5YWJsZSB2LW1vZGVsPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeWvhueggVwiPjwvbS1pbnB1dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJidG4tcm93XCI+XHJcblx0XHRcdDxidXR0b24gdHlwZT1cInByaW1hcnlcIiBAdGFwPVwibG9naW5CeVNtc1wiPueZu+W9lTwvYnV0dG9uPlxyXG5cdFx0PC92aWV3PlxyXG5cclxuXHRcdDx2aWV3IGNsYXNzPVwicHN3ZFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInBzd2Qtc2V0XCI+XHJcblx0XHRcdFx0PHRleHQgQHRhcD1cIm9uR29TZXRpbmdcIj7mnI3liqHlmajphY3nva48L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQge1xyXG5cdFx0bWFwTXV0YXRpb25zXHJcblx0fSBmcm9tICd2dWV4J1xyXG5cdGltcG9ydCBtSW5wdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tLWlucHV0LnZ1ZSdcclxuXHJcblx0bGV0IHdlaXhpbkF1dGhTZXJ2aWNlXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHRtSW5wdXRcclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGxvZ2luVHlwZTogMCxcclxuXHRcdFx0XHRsb2dpblR5cGVMaXN0OiBbJ+WFjeWvhueZu+W9lScsICflr4bnoIHnmbvlvZUnXSxcclxuXHRcdFx0XHRtb2JpbGU6ICcnLFxyXG5cdFx0XHRcdGNvZGU6ICcnLFxyXG5cdFx0XHRcdHByb3ZpZGVyTGlzdDogW10sXHJcblx0XHRcdFx0aGFzUHJvdmlkZXI6IGZhbHNlLFxyXG5cdFx0XHRcdGFjY291bnQ6ICcnLFxyXG5cdFx0XHRcdHBhc3N3b3JkOiAnJyxcclxuXHRcdFx0XHRwb3NpdGlvblRvcDogMCxcclxuXHRcdFx0XHRpc0RldnRvb2xzOiBmYWxzZSxcclxuXHRcdFx0XHRjb2RlRHVyYXRpb246IDAsXHJcblx0XHRcdFx0aXA6IFwiXCIsXHJcblx0XHRcdFx0cG9ydDogXCJcIixcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRvbkxvYWQobXNnKSB7XHJcblx0XHRcdGlmIChtc2cubWVzc2FnZSA9PT0gXCJyZXN0bG9naW5cIikge1xyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0aWNvbjogXCJub25lXCIsXHJcblx0XHRcdFx0XHR0aXRsZTogXCLor7fph43mlrDnmbvlvZVcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMub25Mb2FkaW5nKCk7XHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0dGhpcy5vbkxvYWRpbmcoKTtcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdC4uLm1hcE11dGF0aW9ucyhbJ2xvZ2luJ10pLFxyXG5cdFx0XHRvbkxvYWRpbmcoKSB7XHJcblx0XHRcdFx0dGhpcy5nZXRVc2VyKCk7XHJcblx0XHRcdFx0dW5pLmdldFN0b3JhZ2Uoe1xyXG5cdFx0XHRcdFx0a2V5OiBcInBvcnRcIixcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5kYXRhKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5wb3J0ID0gcmVzLmRhdGE7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRjb21wbGV0ZTogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR1bmkuZ2V0U3RvcmFnZSh7XHJcblx0XHRcdFx0XHRcdFx0a2V5OiBcImlwXCIsXHJcblx0XHRcdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmICh0aGlzLnBvcnQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5pcCA9IGAke3Jlcy5kYXRhfToke3RoaXMucG9ydH1gXHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmlwID0gcmVzLmRhdGE7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRpbml0UG9zaXRpb24oKSB7XHJcblx0XHRcdFx0LyoqXHJcblx0XHRcdFx0ICog5L2/55SoIGFic29sdXRlIOWumuS9je+8jOW5tuS4lOiuvue9riBib3R0b20g5YC86L+b6KGM5a6a5L2N44CC6L2v6ZSu55uY5by55Ye65pe277yM5bqV6YOo5Lya5Zug5Li656qX5Y+j5Y+Y5YyW6ICM6KKr6aG25LiK5p2l44CCXHJcblx0XHRcdFx0ICog5Y+N5ZCR5L2/55SoIHRvcCDov5vooYzlrprkvY3vvIzlj6/ku6Xpgb/lhY3mraTpl67popjjgIJcclxuXHRcdFx0XHQgKi9cclxuXHRcdFx0XHR0aGlzLnBvc2l0aW9uVG9wID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0IC0gMTAwO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Z2V0VXNlcigpIHtcclxuXHRcdFx0XHR1bmkuZ2V0U3RvcmFnZSh7XHJcblx0XHRcdFx0XHRrZXk6IFwiYWNjb3VudFwiLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmRhdGEpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmFjY291bnQgPSByZXMuZGF0YTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0dW5pLmdldFN0b3JhZ2Uoe1xyXG5cdFx0XHRcdFx0a2V5OiBcInBhc3N3b3JkXCIsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YSkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMucGFzc3dvcmQgPSByZXMuZGF0YTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdHNhdmVVc2VyKCkge1xyXG5cdFx0XHRcdHVuaS5zZXRTdG9yYWdlKHtcclxuXHRcdFx0XHRcdGtleTogXCJhY2NvdW50XCIsXHJcblx0XHRcdFx0XHRkYXRhOiB0aGlzLmFjY291bnQsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHR1bmkuc2V0U3RvcmFnZSh7XHJcblx0XHRcdFx0XHRrZXk6IFwicGFzc3dvcmRcIixcclxuXHRcdFx0XHRcdGRhdGE6IHRoaXMucGFzc3dvcmQsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0bG9naW5CeVNtcygpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5hY2NvdW50ICYmIHRoaXMucGFzc3dvcmQpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2F2ZVVzZXIoKTtcclxuXHRcdFx0XHRcdHRoaXMuJGFwaS5vbmxvZ2luKHRoaXMuaXAsIHRoaXMuYWNjb3VudCwgdGhpcy5wYXNzd29yZCkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmRhdGEuc3VjY2VzcyA9PT0gZmFsc2UgfHwgcmVzLmRhdGEuc3VjY2VzcyA9PT0gXCJmYWxzZVwiKSB7XHJcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIixcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiByZXMuZGF0YS5tZXNzYWdlXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBcIueZu+W9leaIkOWKn1wiLFxyXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMubG9naW4ocmVzLmRhdGEudXNlck5hbWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw6IFwiLi4vbWFpbi9tYWluXCJcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fSkuY2F0Y2gocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0aWNvbjogXCJub25lXCIsXHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6IFwi6K+36YWN572u5Y+v55So5pyN5Yqh5Zmo5Zyw5Z2AXCJcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvbkdvU2V0aW5nKCkge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogXCIuLi9zZXRIdHRwL3NldEh0dHBcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0b25SZWFkeSgpIHtcclxuXHRcdFx0dGhpcy5pbml0UG9zaXRpb24oKTtcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcblx0LmNvbnRlbnQge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHQvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nLXRvcDogMzAlO1xyXG5cdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdH1cclxuXHJcblx0LnBzd2Qge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cclxuXHRcdC5wc3dkLXNldCB7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHR3aWR0aDogODAlO1xyXG5cclxuXHRcdFx0PnRleHQge1xyXG5cdFx0XHRcdHBhZGRpbmc6IDRweCAxMnB4O1xyXG5cdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5sb2dpbi10eXBlLWJ0biB7XHJcblx0XHRsaW5lLWhlaWdodDogMzBweDtcclxuXHRcdG1hcmdpbjogMHB4IDE1cHg7XHJcblx0fVxyXG5cclxuXHQubG9naW4tdHlwZS1idG4uYWN0IHtcclxuXHRcdGNvbG9yOiAjMEZBRUZGO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogc29saWQgMXB4ICMwRkFFRkY7XHJcblx0fVxyXG5cclxuXHQuc2VuZC1jb2RlLWJ0biB7XHJcblx0XHR3aWR0aDogMTIwcHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMEZBRUZGO1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0fVxyXG5cclxuXHQuYWN0aW9uLXJvdyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmFjdGlvbi1yb3cgbmF2aWdhdG9yIHtcclxuXHRcdGNvbG9yOiAjMDA3YWZmO1xyXG5cdFx0cGFkZGluZzogMCAxMHB4O1xyXG5cdH1cclxuXHJcblx0Lm9hdXRoLXJvdyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHJcblx0LmlucHV0LWdyb3VwIHtcclxuXHRcdC5tLWlucHV0IHtcclxuXHRcdFx0Zm9udC1zaXplOiAyNHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LmJ0bi1yb3cge1xyXG5cdFx0d2lkdGg6IDkwJTtcclxuXHJcblx0XHRidXR0b24ge1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdFx0XHRsaW5lLWhlaWdodDogMzZweDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5vYXV0aC1pbWFnZSB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR3aWR0aDogNTBweDtcclxuXHRcdGhlaWdodDogNTBweDtcclxuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5cdFx0bWFyZ2luOiAwIDIwcHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cdH1cclxuXHJcblx0Lm9hdXRoLWltYWdlIGltYWdlIHtcclxuXHRcdHdpZHRoOiAzMHB4O1xyXG5cdFx0aGVpZ2h0OiAzMHB4O1xyXG5cdFx0bWFyZ2luOiAxMHB4O1xyXG5cdH1cclxuXHJcblx0Lm9hdXRoLWltYWdlIGJ1dHRvbiB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRvcGFjaXR5OiAwO1xyXG5cdH1cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: default, Store, createNamespacedHelpers, install, mapActions, mapGetters, mapMutations, mapState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/*!
 * vuex v3.4.0
 * (c) 2020 Evan You
 * @license MIT
 */
function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  return parent.hasChild(key)
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index = {
  Store: Store,
  install: install,
  version: '3.4.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};

/* harmony default export */ __webpack_exports__["default"] = (index);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 8)))

/***/ }),
/* 8 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 9 */
/*!****************************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/components/m-input.vue ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _m_input_vue_vue_type_template_id_4d8391ff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./m-input.vue?vue&type=template&id=4d8391ff& */ 10);\n/* harmony import */ var _m_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./m-input.vue?vue&type=script&lang=js& */ 18);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _m_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _m_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _m_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _m_input_vue_vue_type_template_id_4d8391ff___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _m_input_vue_vue_type_template_id_4d8391ff___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _m_input_vue_vue_type_template_id_4d8391ff___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/m-input.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0g7QUFDcEg7QUFDMkQ7QUFDTDs7O0FBR3REO0FBQ2dLO0FBQ2hLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLDZFQUFNO0FBQ1IsRUFBRSxrRkFBTTtBQUNSLEVBQUUsMkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbS1pbnB1dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGQ4MzkxZmYmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9tLWlucHV0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbS1pbnB1dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9tLWlucHV0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!***********************************************************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/components/m-input.vue?vue&type=template&id=4d8391ff& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_m_input_vue_vue_type_template_id_4d8391ff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./m-input.vue?vue&type=template&id=4d8391ff& */ 11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_m_input_vue_vue_type_template_id_4d8391ff___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_m_input_vue_vue_type_template_id_4d8391ff___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_m_input_vue_vue_type_template_id_4d8391ff___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_m_input_vue_vue_type_template_id_4d8391ff___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 11 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/application/HbuilderXAPP/hgApp/components/m-input.vue?vue&type=template&id=4d8391ff& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = { mIcon: __webpack_require__(/*! @/components/m-icon/m-icon.vue */ 12).default }
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "m-input-view"), attrs: { _i: 0 } },
    [
      _c("input", {
        staticClass: _vm._$s(1, "sc", "m-input-input"),
        attrs: {
          focus: _vm._$s(1, "a-focus", _vm.focus),
          type: _vm._$s(1, "a-type", _vm.inputType),
          value: _vm._$s(1, "a-value", _vm.value),
          placeholder: _vm._$s(1, "a-placeholder", _vm.placeholder),
          password: _vm._$s(
            1,
            "a-password",
            _vm.type === "password" && !_vm.showPassword
          ),
          _i: 1
        },
        on: { input: _vm.onInput, focus: _vm.onFocus, blur: _vm.onBlur }
      }),
      _vm._$s(2, "i", _vm.clearable && !_vm.displayable && _vm.value.length)
        ? _c(
            "view",
            { staticClass: _vm._$s(2, "sc", "m-input-icon"), attrs: { _i: 2 } },
            [
              _c("m-icon", {
                attrs: { color: "#666666", type: "clear", _i: 3 },
                on: { click: _vm.clear }
              })
            ],
            1
          )
        : _vm._e(),
      _vm._$s(4, "i", _vm.displayable)
        ? _c(
            "view",
            { staticClass: _vm._$s(4, "sc", "m-input-icon"), attrs: { _i: 4 } },
            [
              _c("m-icon", {
                style: _vm._$s(5, "s", {
                  color: _vm.showPassword ? "#666666" : "#cccccc"
                }),
                attrs: { type: "eye", _i: 5 },
                on: { click: _vm.display }
              })
            ],
            1
          )
        : _vm._e()
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 12 */
/*!**********************************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/components/m-icon/m-icon.vue ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _m_icon_vue_vue_type_template_id_4f60ca24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./m-icon.vue?vue&type=template&id=4f60ca24& */ 13);\n/* harmony import */ var _m_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./m-icon.vue?vue&type=script&lang=js& */ 15);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _m_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _m_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _m_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _m_icon_vue_vue_type_template_id_4f60ca24___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _m_icon_vue_vue_type_template_id_4f60ca24___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _m_icon_vue_vue_type_template_id_4f60ca24___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/m-icon/m-icon.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUg7QUFDbkg7QUFDMEQ7QUFDTDs7O0FBR3JEO0FBQ21LO0FBQ25LLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLDRFQUFNO0FBQ1IsRUFBRSxpRkFBTTtBQUNSLEVBQUUsMEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscUZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL20taWNvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGY2MGNhMjQmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9tLWljb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9tLWljb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvbS1pY29uL20taWNvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!*****************************************************************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/components/m-icon/m-icon.vue?vue&type=template&id=4f60ca24& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_m_icon_vue_vue_type_template_id_4f60ca24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./m-icon.vue?vue&type=template&id=4f60ca24& */ 14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_m_icon_vue_vue_type_template_id_4f60ca24___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_m_icon_vue_vue_type_template_id_4f60ca24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_m_icon_vue_vue_type_template_id_4f60ca24___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_m_icon_vue_vue_type_template_id_4f60ca24___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 14 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/application/HbuilderXAPP/hgApp/components/m-icon/m-icon.vue?vue&type=template&id=4f60ca24& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", {
    staticClass: _vm._$s(0, "sc", "m-icon"),
    class: _vm._$s(0, "c", ["m-icon-" + _vm.type]),
    attrs: { _i: 0 },
    on: {
      click: function($event) {
        return _vm.onClick()
      }
    }
  })
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 15 */
/*!***********************************************************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/components/m-icon/m-icon.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_m_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./m-icon.vue?vue&type=script&lang=js& */ 16);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_m_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_m_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_m_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_m_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_m_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtpQixDQUFnQiw0akJBQUcsRUFBQyIsImZpbGUiOiIxNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL20taWNvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL20taWNvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/application/HbuilderXAPP/hgApp/components/m-icon/m-icon.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\nvar _default =\n{\n  props: {\n    /**\n            * 图标类型\n            */\n    type: String },\n\n  methods: {\n    onClick: function onClick() {\n      this.$emit('click');\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9tLWljb24vbS1pY29uLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUtBO0FBQ0E7QUFDQTs7O0FBR0EsZ0JBSkEsRUFEQTs7QUFPQTtBQUNBLFdBREEscUJBQ0E7QUFDQTtBQUNBLEtBSEEsRUFQQSxFIiwiZmlsZSI6IjE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwibS1pY29uXCIgOmNsYXNzPVwiWydtLWljb24tJyt0eXBlXVwiIEBjbGljaz1cIm9uQ2xpY2soKVwiPjwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIOWbvuagh+exu+Wei1xyXG5cdFx0XHQgKi9cclxuXHRcdFx0dHlwZTogU3RyaW5nXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRvbkNsaWNrKCkge1xyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2NsaWNrJylcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblx0QGltcG9ydCBcIi4vbS1pY29uLmNzc1wiO1xyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 18 */
/*!*****************************************************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/components/m-input.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_m_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./m-input.vue?vue&type=script&lang=js& */ 19);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_m_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_m_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_m_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_m_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_m_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVoQixDQUFnQiw2akJBQUcsRUFBQyIsImZpbGUiOiIxOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL20taW5wdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tLWlucHV0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/application/HbuilderXAPP/hgApp/components/m-input.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _mIcon = _interopRequireDefault(__webpack_require__(/*! ./m-icon/m-icon.vue */ 12));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { components: { mIcon: _mIcon.default }, props: { /**\n                                                                  * 输入类型\n                                                                  */type: String, /**\n                                                                                   * 值\n                                                                                   */value: String, /**\n                                                                                                     * 占位符\n                                                                                                     */placeholder: String, /**\n                                                                                                                             * 是否显示清除按钮\n                                                                                                                             */clearable: {\n      type: [Boolean, String],\n      default: false },\n\n    /**\n                         * 是否显示密码可见按钮\n                         */\n    displayable: {\n      type: [Boolean, String],\n      default: false },\n\n    /**\n                         * 自动获取焦点\n                         */\n    focus: {\n      type: [Boolean, String],\n      default: false } },\n\n\n  model: {\n    prop: 'value',\n    event: 'input' },\n\n  data: function data() {\n    return {\n      /**\n              * 显示密码明文\n              */\n      showPassword: false,\n      /**\n                            * 是否获取焦点\n                            */\n      isFocus: false };\n\n  },\n  computed: {\n    inputType: function inputType() {\n      var type = this.type;\n      return type === 'password' ? 'text' : type;\n    } },\n\n  methods: {\n    clear: function clear() {\n      this.$emit('input', '');\n    },\n    display: function display() {\n      this.showPassword = !this.showPassword;\n    },\n    onFocus: function onFocus() {\n      this.isFocus = true;\n    },\n    onBlur: function onBlur() {var _this = this;\n      this.$nextTick(function () {\n        _this.isFocus = false;\n      });\n    },\n    onInput: function onInput(e) {\n      this.$emit('input', e.detail.value);\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9tLWlucHV0LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFlQSx3Rjs7Ozs7Ozs7Ozs7Ozs7ZUFFQSxFQUNBLGNBQ0EscUJBREEsRUFEQSxFQUlBLFNBQ0E7O29FQUdBLFlBSkEsRUFLQTs7cUZBR0EsYUFSQSxFQVNBOzt1R0FHQSxtQkFaQSxFQWFBOzsrSEFHQTtBQUNBLDZCQURBO0FBRUEsb0JBRkEsRUFoQkE7O0FBb0JBOzs7QUFHQTtBQUNBLDZCQURBO0FBRUEsb0JBRkEsRUF2QkE7O0FBMkJBOzs7QUFHQTtBQUNBLDZCQURBO0FBRUEsb0JBRkEsRUE5QkEsRUFKQTs7O0FBdUNBO0FBQ0EsaUJBREE7QUFFQSxrQkFGQSxFQXZDQTs7QUEyQ0EsTUEzQ0Esa0JBMkNBO0FBQ0E7QUFDQTs7O0FBR0EseUJBSkE7QUFLQTs7O0FBR0Esb0JBUkE7O0FBVUEsR0F0REE7QUF1REE7QUFDQSxhQURBLHVCQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSkEsRUF2REE7O0FBNkRBO0FBQ0EsU0FEQSxtQkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLFdBSkEscUJBSUE7QUFDQTtBQUNBLEtBTkE7QUFPQSxXQVBBLHFCQU9BO0FBQ0E7QUFDQSxLQVRBO0FBVUEsVUFWQSxvQkFVQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0EsS0FkQTtBQWVBLFdBZkEsbUJBZUEsQ0FmQSxFQWVBO0FBQ0E7QUFDQSxLQWpCQSxFQTdEQSxFIiwiZmlsZSI6IjE5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwibS1pbnB1dC12aWV3XCI+XHJcblx0XHQ8aW5wdXQgOmZvY3VzPVwiZm9jdXNcIiA6dHlwZT1cImlucHV0VHlwZVwiIDp2YWx1ZT1cInZhbHVlXCIgQGlucHV0PVwib25JbnB1dFwiIGNsYXNzPVwibS1pbnB1dC1pbnB1dFwiIDpwbGFjZWhvbGRlcj1cInBsYWNlaG9sZGVyXCJcclxuXHRcdCA6cGFzc3dvcmQ9XCJ0eXBlPT09J3Bhc3N3b3JkJyYmIXNob3dQYXNzd29yZFwiIEBmb2N1cz1cIm9uRm9jdXNcIiBAYmx1cj1cIm9uQmx1clwiIC8+XHJcblx0XHQ8IS0tIOS8mOWFiOaYvuekuuWvhueggeWPr+ingeaMiemSriAtLT5cclxuXHRcdDx2aWV3IHYtaWY9XCJjbGVhcmFibGUmJiFkaXNwbGF5YWJsZSYmdmFsdWUubGVuZ3RoXCIgY2xhc3M9XCJtLWlucHV0LWljb25cIj5cclxuXHRcdFx0PG0taWNvbiBjb2xvcj1cIiM2NjY2NjZcIiB0eXBlPVwiY2xlYXJcIiBAY2xpY2s9XCJjbGVhclwiPjwvbS1pY29uPlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgdi1pZj1cImRpc3BsYXlhYmxlXCIgY2xhc3M9XCJtLWlucHV0LWljb25cIj5cclxuXHRcdFx0PG0taWNvbiA6c3R5bGU9XCJ7Y29sb3I6c2hvd1Bhc3N3b3JkPycjNjY2NjY2JzonI2NjY2NjYyd9XCIgdHlwZT1cImV5ZVwiIEBjbGljaz1cImRpc3BsYXlcIj48L20taWNvbj5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBtSWNvbiBmcm9tICcuL20taWNvbi9tLWljb24udnVlJ1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdG1JY29uXHJcblx0XHR9LFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIOi+k+WFpeexu+Wei1xyXG5cdFx0XHQgKi9cclxuXHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHQvKipcclxuXHRcdFx0ICog5YC8XHJcblx0XHRcdCAqL1xyXG5cdFx0XHR2YWx1ZTogU3RyaW5nLFxyXG5cdFx0XHQvKipcclxuXHRcdFx0ICog5Y2g5L2N56ymXHJcblx0XHRcdCAqL1xyXG5cdFx0XHRwbGFjZWhvbGRlcjogU3RyaW5nLFxyXG5cdFx0XHQvKipcclxuXHRcdFx0ICog5piv5ZCm5pi+56S65riF6Zmk5oyJ6ZKuXHJcblx0XHRcdCAqL1xyXG5cdFx0XHRjbGVhcmFibGU6IHtcclxuXHRcdFx0XHR0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcclxuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvKipcclxuXHRcdFx0ICog5piv5ZCm5pi+56S65a+G56CB5Y+v6KeB5oyJ6ZKuXHJcblx0XHRcdCAqL1xyXG5cdFx0XHRkaXNwbGF5YWJsZToge1xyXG5cdFx0XHRcdHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdC8qKlxyXG5cdFx0XHQgKiDoh6rliqjojrflj5bnhKbngrlcclxuXHRcdFx0ICovXHJcblx0XHRcdGZvY3VzOiB7XHJcblx0XHRcdFx0dHlwZTogW0Jvb2xlYW4sIFN0cmluZ10sXHJcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1vZGVsOiB7XHJcblx0XHRcdHByb3A6ICd2YWx1ZScsXHJcblx0XHRcdGV2ZW50OiAnaW5wdXQnXHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQvKipcclxuXHRcdFx0XHQgKiDmmL7npLrlr4bnoIHmmI7mlodcclxuXHRcdFx0XHQgKi9cclxuXHRcdFx0XHRzaG93UGFzc3dvcmQ6IGZhbHNlLFxyXG5cdFx0XHRcdC8qKlxyXG5cdFx0XHRcdCAqIOaYr+WQpuiOt+WPlueEpueCuVxyXG5cdFx0XHRcdCAqL1xyXG5cdFx0XHRcdGlzRm9jdXM6IGZhbHNlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHRpbnB1dFR5cGUoKSB7XHJcblx0XHRcdFx0Y29uc3QgdHlwZSA9IHRoaXMudHlwZVxyXG5cdFx0XHRcdHJldHVybiB0eXBlID09PSAncGFzc3dvcmQnID8gJ3RleHQnIDogdHlwZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRjbGVhcigpIHtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdpbnB1dCcsICcnKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkaXNwbGF5KCkge1xyXG5cdFx0XHRcdHRoaXMuc2hvd1Bhc3N3b3JkID0gIXRoaXMuc2hvd1Bhc3N3b3JkXHJcblx0XHRcdH0sXHJcblx0XHRcdG9uRm9jdXMoKSB7XHJcblx0XHRcdFx0dGhpcy5pc0ZvY3VzID0gdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvbkJsdXIoKSB7XHJcblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5pc0ZvY3VzID0gZmFsc2VcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvbklucHV0KGUpIHtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdpbnB1dCcsIGUuZGV0YWlsLnZhbHVlKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHQubS1pbnB1dC12aWV3IHtcclxuXHRcdGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHQvKiB3aWR0aDogMTAwJTsgKi9cclxuXHRcdGZsZXg6IDE7XHJcblx0XHRwYWRkaW5nOiAwIDEwcHg7XHJcblx0fVxyXG5cclxuXHQubS1pbnB1dC1pbnB1dCB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDIwcHg7XHJcblx0XHRsaW5lLWhlaWdodDogMjBweDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG5cdH1cclxuXHJcblx0Lm0taW5wdXQtaWNvbiB7XHJcblx0XHQvKiB3aWR0aDogMjBweDsgKi9cclxuXHRcdGZvbnQtc2l6ZTogMjBweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdFx0Y29sb3I6ICM2NjY2NjY7XHJcblx0fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!*************************************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/pages/main/main.vue?mpType=page ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_vue_vue_type_template_id_a557d614_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=a557d614&mpType=page */ 21);\n/* harmony import */ var _main_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js&mpType=page */ 29);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _main_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _main_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _main_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _main_vue_vue_type_template_id_a557d614_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _main_vue_vue_type_template_id_a557d614_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _main_vue_vue_type_template_id_a557d614_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/main/main.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEg7QUFDNUg7QUFDbUU7QUFDTDs7O0FBRzlEO0FBQ21LO0FBQ25LLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSwwRkFBTTtBQUNSLEVBQUUsbUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL21haW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE1NTdkNjE0Jm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9tYWluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9tYWluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL21haW4vbWFpbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!*******************************************************************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/pages/main/main.vue?vue&type=template&id=a557d614&mpType=page ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_a557d614_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./main.vue?vue&type=template&id=a557d614&mpType=page */ 22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_a557d614_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_a557d614_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_a557d614_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_a557d614_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 22 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/application/HbuilderXAPP/hgApp/pages/main/main.vue?vue&type=template&id=a557d614&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  tkiQrcode: __webpack_require__(/*! @/components/tki-qrcode/tki-qrcode.vue */ 23).default
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "uni-list"), attrs: { _i: 1 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(2, "sc", "uni-list-cell"),
              attrs: { _i: 2 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(3, "sc", "uni-list-cell-left"),
                  attrs: { _i: 3 }
                },
                [
                  _c("text", {
                    staticClass: _vm._$s(4, "sc", "text-color"),
                    attrs: { _i: 4 }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(5, "sc", "uni-list-cell-db"),
                  attrs: { _i: 5 }
                },
                [
                  _c(
                    "picker",
                    {
                      attrs: {
                        value: _vm._$s(6, "a-value", _vm.index),
                        range: _vm._$s(6, "a-range", _vm.scPlanArray),
                        _i: 6
                      },
                      on: { change: _vm.bindPickerChange }
                    },
                    [
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(7, "sc", "uni-input"),
                          attrs: { _i: 7 }
                        },
                        [
                          _vm._v(
                            _vm._$s(
                              7,
                              "t0-0",
                              _vm._s(_vm.scPlanArray[_vm.index])
                            )
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ]
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(8, "sc", "uni-list"), attrs: { _i: 8 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(9, "sc", "uni-list-cell"),
              attrs: { _i: 9 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(10, "sc", "uni-list-cell-left"),
                  attrs: { _i: 10 }
                },
                [_c("text")]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(12, "sc", "uni-list-cell-db"),
                  attrs: { _i: 12 }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.scBatchNo,
                        expression: "scBatchNo"
                      }
                    ],
                    attrs: { _i: 13 },
                    domProps: { value: _vm._$s(13, "v-model", _vm.scBatchNo) },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.scBatchNo = $event.target.value
                      }
                    }
                  })
                ]
              )
            ]
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(14, "sc", "uni-list"), attrs: { _i: 14 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(15, "sc", "uni-list-cell"),
              attrs: { _i: 15 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(16, "sc", "uni-list-cell-left"),
                  attrs: { _i: 16 }
                },
                [_c("text")]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(18, "sc", "uni-list-cell-db"),
                  attrs: { _i: 18 }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.cpName,
                        expression: "cpName"
                      }
                    ],
                    attrs: { _i: 19 },
                    domProps: { value: _vm._$s(19, "v-model", _vm.cpName) },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.cpName = $event.target.value
                      }
                    }
                  })
                ]
              )
            ]
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(20, "sc", "uni-list"), attrs: { _i: 20 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(21, "sc", "uni-list-cell"),
              attrs: { _i: 21 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(22, "sc", "uni-list-cell-left"),
                  attrs: { _i: 22 }
                },
                [_c("text")]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(24, "sc", "uni-list-cell-db"),
                  attrs: { _i: 24 }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.startTimeStr,
                        expression: "startTimeStr"
                      }
                    ],
                    attrs: { _i: 25 },
                    domProps: {
                      value: _vm._$s(25, "v-model", _vm.startTimeStr)
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.startTimeStr = $event.target.value
                      }
                    }
                  })
                ]
              )
            ]
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(26, "sc", "uni-list"), attrs: { _i: 26 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(27, "sc", "uni-list-cell"),
              attrs: { _i: 27 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(28, "sc", "uni-list-cell-left"),
                  attrs: { _i: 28 }
                },
                [
                  _c("text", {
                    staticClass: _vm._$s(29, "sc", "text-color"),
                    attrs: { _i: 29 }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(30, "sc", "uni-list-cell-db"),
                  attrs: { _i: 30 },
                  on: { click: _vm.onScBbatch }
                },
                [
                  _c(
                    "picker",
                    {
                      attrs: {
                        disabled: _vm._$s(31, "a-disabled", this.index == 0),
                        value: _vm._$s(31, "a-value", _vm.i),
                        range: _vm._$s(31, "a-range", _vm.scBbatchNameList),
                        _i: 31
                      },
                      on: { change: _vm.bindScBbatchChange }
                    },
                    [
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(32, "sc", "uni-input"),
                          attrs: { _i: 32 }
                        },
                        [
                          _vm._v(
                            _vm._$s(
                              32,
                              "t0-0",
                              _vm._s(_vm.scBbatchNameList[_vm.i])
                            )
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ]
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(33, "sc", "uni-list"), attrs: { _i: 33 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(34, "sc", "uni-list-cell"),
              attrs: { _i: 34 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(35, "sc", "uni-list-cell-left"),
                  attrs: { _i: 35 }
                },
                [_c("text")]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(37, "sc", "uni-list-cell-db"),
                  attrs: { _i: 37 }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.deptName,
                        expression: "deptName"
                      }
                    ],
                    attrs: { _i: 38 },
                    domProps: { value: _vm._$s(38, "v-model", _vm.deptName) },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.deptName = $event.target.value
                      }
                    }
                  })
                ]
              )
            ]
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(39, "sc", "uni-list"), attrs: { _i: 39 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(40, "sc", "uni-list-cell"),
              attrs: { _i: 40 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(41, "sc", "uni-list-cell-left"),
                  attrs: { _i: 41 }
                },
                [_c("text")]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(43, "sc", "uni-list-cell-db"),
                  attrs: { _i: 43 }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.cxNo,
                        expression: "cxNo"
                      }
                    ],
                    attrs: { _i: 44 },
                    domProps: { value: _vm._$s(44, "v-model", _vm.cxNo) },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.cxNo = $event.target.value
                      }
                    }
                  })
                ]
              )
            ]
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(45, "sc", "uni-list"), attrs: { _i: 45 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(46, "sc", "uni-list-cell"),
              attrs: { _i: 46 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(47, "sc", "uni-list-cell-left"),
                  attrs: { _i: 47 }
                },
                [
                  _c("text", {
                    staticClass: _vm._$s(48, "sc", "text-color"),
                    attrs: { _i: 48 }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(
                    49,
                    "sc",
                    "uni-list-cell-db material-name"
                  ),
                  attrs: { _i: 49 },
                  on: { click: _vm.onMaterial }
                },
                [
                  _c(
                    "picker",
                    {
                      attrs: {
                        disabled: _vm._$s(50, "a-disabled", _vm.i == 0),
                        value: _vm._$s(50, "a-value", _vm.k),
                        range: _vm._$s(50, "a-range", _vm.MaterialNameList),
                        _i: 50
                      },
                      on: { change: _vm.bindMaterialChange }
                    },
                    [
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(51, "sc", "uni-input"),
                          attrs: { _i: 51 }
                        },
                        [
                          _c("text", [
                            _vm._v(
                              _vm._$s(
                                52,
                                "t0-0",
                                _vm._s(_vm.MaterialNameList[_vm.k])
                              )
                            )
                          ])
                        ]
                      )
                    ]
                  )
                ]
              )
            ]
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(53, "sc", "uni-list"), attrs: { _i: 53 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(54, "sc", "uni-list-cell"),
              attrs: { _i: 54 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(55, "sc", "uni-list-cell-left"),
                  attrs: { _i: 55 }
                },
                [_c("text")]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(57, "sc", "uni-list-cell-db"),
                  attrs: { _i: 57 }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.amount,
                        expression: "amount"
                      }
                    ],
                    staticClass: _vm._$s(58, "sc", "input-text"),
                    attrs: { _i: 58 },
                    domProps: { value: _vm._$s(58, "v-model", _vm.amount) },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.amount = $event.target.value
                      }
                    }
                  }),
                  _c("text")
                ]
              )
            ]
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(60, "sc", "uni-list"), attrs: { _i: 60 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(61, "sc", "uni-list-cell"),
              attrs: { _i: 61 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(62, "sc", "uni-list-cell-left"),
                  attrs: { _i: 62 }
                },
                [
                  _c("text", {
                    staticClass: _vm._$s(63, "sc", "text-color"),
                    attrs: { _i: 63 }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(64, "sc", "uni-list-cell-db"),
                  attrs: { _i: 64 }
                },
                [
                  _c(
                    "picker",
                    {
                      attrs: {
                        disabled: _vm._$s(65, "a-disabled", _vm.k == 0),
                        value: _vm._$s(65, "a-value", _vm.spc),
                        range: _vm._$s(65, "a-range", _vm.materialSpc),
                        _i: 65
                      },
                      on: {
                        change: _vm.bindMaterialSpcChange,
                        click: _vm.onMaterialSpc
                      }
                    },
                    [
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(66, "sc", "uni-input"),
                          attrs: { _i: 66 }
                        },
                        [
                          _vm._v(
                            _vm._$s(
                              66,
                              "t0-0",
                              _vm._s(_vm.materialSpc[_vm.spc])
                            )
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ]
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(67, "sc", "uni-list"), attrs: { _i: 67 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(68, "sc", "uni-list-cell"),
              attrs: { _i: 68 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(69, "sc", "uni-list-cell-left"),
                  attrs: { _i: 69 }
                },
                [
                  _c("text", {
                    staticClass: _vm._$s(70, "sc", "text-color"),
                    attrs: { _i: 70 }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(71, "sc", "uni-list-cell-db"),
                  attrs: { _i: 71 }
                },
                [
                  _c(
                    "picker",
                    {
                      attrs: {
                        value: _vm._$s(72, "a-value", _vm.k),
                        range: _vm._$s(72, "a-range", _vm.mployNameList),
                        _i: 72
                      },
                      on: { change: _vm.bindMployChange }
                    },
                    [
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(73, "sc", "uni-input"),
                          attrs: { _i: 73 }
                        },
                        [
                          _vm._v(
                            _vm._$s(
                              73,
                              "t0-0",
                              _vm._s(_vm.mployNameList[_vm.j])
                            )
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ]
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(74, "sc", "uni-list"), attrs: { _i: 74 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(75, "sc", "uni-list-cell"),
              attrs: { _i: 75 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(76, "sc", "uni-list-cell-left"),
                  attrs: { _i: 76 }
                },
                [_c("text")]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(78, "sc", "uni-list-cell-db"),
                  attrs: { _i: 78 }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.countNumber,
                        expression: "countNumber"
                      }
                    ],
                    staticClass: _vm._$s(79, "sc", "input-text-2"),
                    attrs: { _i: 79 },
                    domProps: {
                      value: _vm._$s(79, "v-model", _vm.countNumber)
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.countNumber = $event.target.value
                      }
                    }
                  }),
                  _vm._$s(80, "i", _vm.countImg)
                    ? _c("image", {
                        attrs: {
                          src: _vm._$s(80, "a-src", _vm.countImg),
                          _i: 80
                        },
                        on: {
                          click: function($event) {
                            return _vm.onChooseImg("countImg")
                          }
                        }
                      })
                    : _c("view", {
                        staticClass: _vm._$s(81, "sc", "uni-camera"),
                        attrs: { _i: 81 },
                        on: {
                          click: function($event) {
                            return _vm.onChooseImg("countImg")
                          }
                        }
                      })
                ]
              )
            ]
          )
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(82, "sc", "uni-list qrcode-box"),
          attrs: { _i: 82 }
        },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(83, "sc", "uni-list-cell"),
              attrs: { _i: 83 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(84, "sc", "uni-list-cell-left"),
                  attrs: { _i: 84 }
                },
                [_c("text")]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(86, "sc", "uni-list-cell-db"),
                  attrs: { _i: 86 }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.oddNumber,
                        expression: "oddNumber"
                      }
                    ],
                    staticClass: _vm._$s(87, "sc", "input-text-2"),
                    attrs: { _i: 87 },
                    domProps: { value: _vm._$s(87, "v-model", _vm.oddNumber) },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.oddNumber = $event.target.value
                      }
                    }
                  }),
                  _vm._$s(88, "i", _vm.oddImg)
                    ? _c("image", {
                        attrs: {
                          src: _vm._$s(88, "a-src", _vm.oddImg),
                          _i: 88
                        },
                        on: {
                          click: function($event) {
                            return _vm.onChooseImg("oddImg")
                          }
                        }
                      })
                    : _c("view", {
                        staticClass: _vm._$s(89, "sc", "uni-camera"),
                        attrs: { _i: 89 },
                        on: {
                          click: function($event) {
                            return _vm.onChooseImg("oddImg")
                          }
                        }
                      })
                ]
              )
            ]
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(90, "sc", "uni-list"), attrs: { _i: 90 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(91, "sc", "uni-list-cell"),
              attrs: { _i: 91 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(92, "sc", "uni-list-cell-left"),
                  attrs: { _i: 92 }
                },
                [
                  _c("text", {
                    staticClass: _vm._$s(93, "sc", "text-color"),
                    attrs: { _i: 93 }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(94, "sc", "uni-list-cell-db"),
                  attrs: { _i: 94 }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.lrNumber,
                        expression: "lrNumber"
                      }
                    ],
                    staticClass: _vm._$s(95, "sc", "input-text-2"),
                    attrs: { _i: 95 },
                    domProps: { value: _vm._$s(95, "v-model", _vm.lrNumber) },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.lrNumber = $event.target.value
                      }
                    }
                  }),
                  _vm._$s(96, "i", _vm.lrImg)
                    ? _c("image", {
                        attrs: { src: _vm._$s(96, "a-src", _vm.lrImg), _i: 96 },
                        on: {
                          click: function($event) {
                            return _vm.onChooseImg("lrImg")
                          }
                        }
                      })
                    : _c("view", {
                        staticClass: _vm._$s(97, "sc", "uni-camera"),
                        attrs: { _i: 97 },
                        on: {
                          click: function($event) {
                            return _vm.onChooseImg("lrImg")
                          }
                        }
                      })
                ]
              )
            ]
          )
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(98, "sc", "uni-list qrcode-content "),
          attrs: { _i: 98 }
        },
        [
          _c("tki-qrcode", {
            ref: "qrcode",
            attrs: {
              cid: _vm.cid,
              val: _vm.val,
              unit: _vm.units,
              size: _vm.size,
              onval: _vm.onval,
              loadMake: _vm.loadMake,
              showLoading: _vm.showLoading,
              loadingText: _vm.loadingText,
              _i: 99
            },
            on: { result: _vm.qrR }
          })
        ],
        1
      ),
      _c(
        "view",
        { staticClass: _vm._$s(100, "sc", "uni-list"), attrs: { _i: 100 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(101, "sc", "uni-list-cell btn-content"),
              attrs: { _i: 101 }
            },
            [
              _c(
                "view",
                { staticClass: _vm._$s(102, "sc", "btn"), attrs: { _i: 102 } },
                [
                  _c("button", {
                    attrs: { _i: 103 },
                    on: { click: _vm.onComfirmUpData }
                  })
                ]
              )
            ]
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 23 */
/*!******************************************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/components/tki-qrcode/tki-qrcode.vue ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tki_qrcode_vue_vue_type_template_id_143ec824_xlang_wxml_minapp_mpvue___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tki-qrcode.vue?vue&type=template&id=143ec824&xlang=wxml&minapp=mpvue& */ 24);\n/* harmony import */ var _tki_qrcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tki-qrcode.vue?vue&type=script&lang=js& */ 26);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tki_qrcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tki_qrcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _tki_qrcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _tki_qrcode_vue_vue_type_template_id_143ec824_xlang_wxml_minapp_mpvue___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _tki_qrcode_vue_vue_type_template_id_143ec824_xlang_wxml_minapp_mpvue___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _tki_qrcode_vue_vue_type_template_id_143ec824_xlang_wxml_minapp_mpvue___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/tki-qrcode/tki-qrcode.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0k7QUFDL0k7QUFDOEQ7QUFDTDs7O0FBR3pEO0FBQ21LO0FBQ25LLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSw2R0FBTTtBQUNSLEVBQUUsc0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUhBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3RraS1xcmNvZGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0M2VjODI0JnhsYW5nPXd4bWwmbWluYXBwPW1wdnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdGtpLXFyY29kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3RraS1xcmNvZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvdGtpLXFyY29kZS90a2ktcXJjb2RlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!*************************************************************************************************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/components/tki-qrcode/tki-qrcode.vue?vue&type=template&id=143ec824&xlang=wxml&minapp=mpvue& ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tki_qrcode_vue_vue_type_template_id_143ec824_xlang_wxml_minapp_mpvue___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./tki-qrcode.vue?vue&type=template&id=143ec824&xlang=wxml&minapp=mpvue& */ 25);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tki_qrcode_vue_vue_type_template_id_143ec824_xlang_wxml_minapp_mpvue___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tki_qrcode_vue_vue_type_template_id_143ec824_xlang_wxml_minapp_mpvue___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tki_qrcode_vue_vue_type_template_id_143ec824_xlang_wxml_minapp_mpvue___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tki_qrcode_vue_vue_type_template_id_143ec824_xlang_wxml_minapp_mpvue___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 25 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/application/HbuilderXAPP/hgApp/components/tki-qrcode/tki-qrcode.vue?vue&type=template&id=143ec824&xlang=wxml&minapp=mpvue& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "tki-qrcode"), attrs: { _i: 0 } },
    [
      _c("canvas", {
        staticClass: _vm._$s(1, "sc", "tki-qrcode-canvas"),
        style: _vm._$s(1, "s", {
          width: _vm.cpSize + "px",
          height: _vm.cpSize + "px"
        }),
        attrs: { "canvas-id": _vm._$s(1, "a-canvas-id", _vm.cid), _i: 1 }
      }),
      _c("image", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm._$s(2, "v-show", _vm.show),
            expression: "_$s(2,'v-show',show)"
          }
        ],
        style: _vm._$s(2, "s", {
          width: _vm.cpSize + "px",
          height: _vm.cpSize + "px"
        }),
        attrs: { src: _vm._$s(2, "a-src", _vm.result), _i: 2 }
      })
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 26 */
/*!*******************************************************************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/components/tki-qrcode/tki-qrcode.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tki_qrcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./tki-qrcode.vue?vue&type=script&lang=js& */ 27);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tki_qrcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tki_qrcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tki_qrcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tki_qrcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tki_qrcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNpQixDQUFnQixna0JBQUcsRUFBQyIsImZpbGUiOiIyNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RraS1xcmNvZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90a2ktcXJjb2RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/application/HbuilderXAPP/hgApp/components/tki-qrcode/tki-qrcode.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\nvar _qrcode = _interopRequireDefault(__webpack_require__(/*! ./qrcode.js */ 28));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar qrcode;var _default = { name: \"tki-qrcode\", props: { cid: { type: String, default: 'tki-qrcode-canvas' }, size: { type: Number, default: 200 },\n    unit: {\n      type: String,\n      default: 'upx' },\n\n    show: {\n      type: Boolean,\n      default: true },\n\n    val: {\n      type: String,\n      default: '' },\n\n    background: {\n      type: String,\n      default: '#ffffff' },\n\n    foreground: {\n      type: String,\n      default: '#000000' },\n\n    pdground: {\n      type: String,\n      default: '#000000' },\n\n    icon: {\n      type: String,\n      default: '' },\n\n    iconSize: {\n      type: Number,\n      default: 40 },\n\n    lv: {\n      type: Number,\n      default: 3 },\n\n    onval: {\n      type: Boolean,\n      default: false },\n\n    loadMake: {\n      type: Boolean,\n      default: false },\n\n    usingComponents: {\n      type: Boolean,\n      default: true },\n\n    showLoading: {\n      type: Boolean,\n      default: true },\n\n    loadingText: {\n      type: String,\n      default: '二维码生成中' } },\n\n\n  data: function data() {\n    return {\n      result: '' };\n\n  },\n  methods: {\n    _makeCode: function _makeCode() {\n      var that = this;\n      if (!this._empty(this.val)) {\n        qrcode = new _qrcode.default({\n          context: that, // 上下文环境\n          canvasId: that.cid, // canvas-id\n          usingComponents: that.usingComponents, // 是否是自定义组件\n          showLoading: that.showLoading, // 是否显示loading\n          loadingText: that.loadingText, // loading文字\n          text: that.val, // 生成内容\n          size: that.cpSize, // 二维码大小\n          background: that.background, // 背景色\n          foreground: that.foreground, // 前景色\n          pdground: that.pdground, // 定位角点颜色\n          correctLevel: that.lv, // 容错级别\n          image: that.icon, // 二维码图标\n          imageSize: that.iconSize, // 二维码图标大小\n          cbResult: function cbResult(res) {// 生成二维码的回调\n            that._result(res);\n          } });\n\n      } else {\n        uni.showToast({\n          title: '二维码内容不能为空',\n          icon: 'none',\n          duration: 2000 });\n\n      }\n    },\n    _clearCode: function _clearCode() {\n      this._result('');\n      qrcode.clear();\n    },\n    _saveCode: function _saveCode() {\n      var that = this;\n      if (this.result != \"\") {\n        uni.saveImageToPhotosAlbum({\n          filePath: that.result,\n          success: function success() {\n            uni.showToast({\n              title: '二维码保存成功',\n              icon: 'success',\n              duration: 2000 });\n\n          } });\n\n      }\n    },\n    _result: function _result(res) {\n      this.result = res;\n      this.$emit('result', res);\n    },\n    _empty: function _empty(v) {\n      var tp = typeof v,\n      rt = false;\n      if (tp == \"number\" && String(v) == \"\") {\n        rt = true;\n      } else if (tp == \"undefined\") {\n        rt = true;\n      } else if (tp == \"object\") {\n        if (JSON.stringify(v) == \"{}\" || JSON.stringify(v) == \"[]\" || v == null) rt = true;\n      } else if (tp == \"string\") {\n        if (v == \"\" || v == \"undefined\" || v == \"null\" || v == \"{}\" || v == \"[]\") rt = true;\n      } else if (tp == \"function\") {\n        rt = false;\n      }\n      return rt;\n    } },\n\n  watch: {\n    size: function size(n, o) {var _this = this;\n      if (n != o && !this._empty(n)) {\n        this.cSize = n;\n        if (!this._empty(this.val)) {\n          setTimeout(function () {\n            _this._makeCode();\n          }, 100);\n        }\n      }\n    },\n    val: function val(n, o) {var _this2 = this;\n      if (this.onval) {\n        if (n != o && !this._empty(n)) {\n          setTimeout(function () {\n            _this2._makeCode();\n          }, 0);\n        }\n      }\n    } },\n\n  computed: {\n    cpSize: function cpSize() {\n      if (this.unit == \"upx\") {\n        return uni.upx2px(this.size);\n      } else {\n        return this.size;\n      }\n    } },\n\n  mounted: function mounted() {var _this3 = this;\n    if (this.loadMake) {\n      if (!this._empty(this.val)) {\n        setTimeout(function () {\n          _this3._makeCode();\n        }, 0);\n      }\n    }\n  } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy90a2ktcXJjb2RlL3RraS1xcmNvZGUudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFhQSxpRjs7Ozs7Ozs7Ozs7O0FBQ0EsVyxlQUNBLEVBQ0Esa0JBREEsRUFFQSxTQUNBLE9BQ0EsWUFEQSxFQUVBLDRCQUZBLEVBREEsRUFLQSxRQUNBLFlBREEsRUFFQSxZQUZBLEVBTEE7QUFTQTtBQUNBLGtCQURBO0FBRUEsb0JBRkEsRUFUQTs7QUFhQTtBQUNBLG1CQURBO0FBRUEsbUJBRkEsRUFiQTs7QUFpQkE7QUFDQSxrQkFEQTtBQUVBLGlCQUZBLEVBakJBOztBQXFCQTtBQUNBLGtCQURBO0FBRUEsd0JBRkEsRUFyQkE7O0FBeUJBO0FBQ0Esa0JBREE7QUFFQSx3QkFGQSxFQXpCQTs7QUE2QkE7QUFDQSxrQkFEQTtBQUVBLHdCQUZBLEVBN0JBOztBQWlDQTtBQUNBLGtCQURBO0FBRUEsaUJBRkEsRUFqQ0E7O0FBcUNBO0FBQ0Esa0JBREE7QUFFQSxpQkFGQSxFQXJDQTs7QUF5Q0E7QUFDQSxrQkFEQTtBQUVBLGdCQUZBLEVBekNBOztBQTZDQTtBQUNBLG1CQURBO0FBRUEsb0JBRkEsRUE3Q0E7O0FBaURBO0FBQ0EsbUJBREE7QUFFQSxvQkFGQSxFQWpEQTs7QUFxREE7QUFDQSxtQkFEQTtBQUVBLG1CQUZBLEVBckRBOztBQXlEQTtBQUNBLG1CQURBO0FBRUEsbUJBRkEsRUF6REE7O0FBNkRBO0FBQ0Esa0JBREE7QUFFQSx1QkFGQSxFQTdEQSxFQUZBOzs7QUFvRUEsTUFwRUEsa0JBb0VBO0FBQ0E7QUFDQSxnQkFEQTs7QUFHQSxHQXhFQTtBQXlFQTtBQUNBLGFBREEsdUJBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFEQSxFQUNBO0FBQ0EsNEJBRkEsRUFFQTtBQUNBLCtDQUhBLEVBR0E7QUFDQSx1Q0FKQSxFQUlBO0FBQ0EsdUNBTEEsRUFLQTtBQUNBLHdCQU5BLEVBTUE7QUFDQSwyQkFQQSxFQU9BO0FBQ0EscUNBUkEsRUFRQTtBQUNBLHFDQVRBLEVBU0E7QUFDQSxpQ0FWQSxFQVVBO0FBQ0EsK0JBWEEsRUFXQTtBQUNBLDBCQVpBLEVBWUE7QUFDQSxrQ0FiQSxFQWFBO0FBQ0E7QUFDQTtBQUNBLFdBaEJBOztBQWtCQSxPQW5CQSxNQW1CQTtBQUNBO0FBQ0EsNEJBREE7QUFFQSxzQkFGQTtBQUdBLHdCQUhBOztBQUtBO0FBQ0EsS0E3QkE7QUE4QkEsY0E5QkEsd0JBOEJBO0FBQ0E7QUFDQTtBQUNBLEtBakNBO0FBa0NBLGFBbENBLHVCQWtDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQURBO0FBRUE7QUFDQTtBQUNBLDhCQURBO0FBRUEsNkJBRkE7QUFHQSw0QkFIQTs7QUFLQSxXQVJBOztBQVVBO0FBQ0EsS0FoREE7QUFpREEsV0FqREEsbUJBaURBLEdBakRBLEVBaURBO0FBQ0E7QUFDQTtBQUNBLEtBcERBO0FBcURBLFVBckRBLGtCQXFEQSxDQXJEQSxFQXFEQTtBQUNBO0FBQ0EsZ0JBREE7QUFFQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FwRUEsRUF6RUE7O0FBK0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FGQSxFQUVBLEdBRkE7QUFHQTtBQUNBO0FBQ0EsS0FWQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUZBLEVBRUEsQ0FGQTtBQUdBO0FBQ0E7QUFDQSxLQW5CQSxFQS9JQTs7QUFvS0E7QUFDQSxVQURBLG9CQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxLQVBBLEVBcEtBOztBQTZLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxFQUVBLENBRkE7QUFHQTtBQUNBO0FBQ0EsR0FyTEEsRSIsImZpbGUiOiIyNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZSB4bGFuZz1cInd4bWxcIiBtaW5hcHA9XCJtcHZ1ZVwiPlxyXG5cdDx2aWV3IGNsYXNzPVwidGtpLXFyY29kZVwiPlxyXG5cdFx0PCEtLSAjaWZuZGVmIE1QLUFMSVBBWSAtLT5cclxuXHRcdDxjYW52YXMgY2xhc3M9XCJ0a2ktcXJjb2RlLWNhbnZhc1wiIDpjYW52YXMtaWQ9XCJjaWRcIiA6c3R5bGU9XCJ7d2lkdGg6Y3BTaXplKydweCcsaGVpZ2h0OmNwU2l6ZSsncHgnfVwiIC8+XHJcblx0XHQ8IS0tICNlbmRpZiAtLT5cclxuXHRcdDwhLS0gI2lmZGVmIE1QLUFMSVBBWSAtLT5cclxuXHRcdDxjYW52YXMgOmlkPVwiY2lkXCIgOndpZHRoPVwiY3BTaXplXCIgOmhlaWdodD1cImNwU2l6ZVwiIGNsYXNzPVwidGtpLXFyY29kZS1jYW52YXNcIiAvPlxyXG5cdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0XHQ8aW1hZ2Ugdi1zaG93PVwic2hvd1wiIDpzcmM9XCJyZXN1bHRcIiA6c3R5bGU9XCJ7d2lkdGg6Y3BTaXplKydweCcsaGVpZ2h0OmNwU2l6ZSsncHgnfVwiIC8+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IFFSQ29kZSBmcm9tIFwiLi9xcmNvZGUuanNcIlxyXG5sZXQgcXJjb2RlXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiBcInRraS1xcmNvZGVcIixcclxuXHRwcm9wczoge1xyXG5cdFx0Y2lkOiB7XHJcblx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0ZGVmYXVsdDogJ3RraS1xcmNvZGUtY2FudmFzJ1xyXG5cdFx0fSxcclxuXHRcdHNpemU6IHtcclxuXHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRkZWZhdWx0OiAyMDBcclxuXHRcdH0sXHJcblx0XHR1bml0OiB7XHJcblx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0ZGVmYXVsdDogJ3VweCdcclxuXHRcdH0sXHJcblx0XHRzaG93OiB7XHJcblx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdGRlZmF1bHQ6IHRydWVcclxuXHRcdH0sXHJcblx0XHR2YWw6IHtcclxuXHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0fSxcclxuXHRcdGJhY2tncm91bmQ6IHtcclxuXHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRkZWZhdWx0OiAnI2ZmZmZmZidcclxuXHRcdH0sXHJcblx0XHRmb3JlZ3JvdW5kOiB7XHJcblx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0ZGVmYXVsdDogJyMwMDAwMDAnXHJcblx0XHR9LFxyXG5cdFx0cGRncm91bmQ6IHtcclxuXHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRkZWZhdWx0OiAnIzAwMDAwMCdcclxuXHRcdH0sXHJcblx0XHRpY29uOiB7XHJcblx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdH0sXHJcblx0XHRpY29uU2l6ZToge1xyXG5cdFx0XHR0eXBlOiBOdW1iZXIsXHJcblx0XHRcdGRlZmF1bHQ6IDQwXHJcblx0XHR9LFxyXG5cdFx0bHY6IHtcclxuXHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRkZWZhdWx0OiAzXHJcblx0XHR9LFxyXG5cdFx0b252YWw6IHtcclxuXHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdH0sXHJcblx0XHRsb2FkTWFrZToge1xyXG5cdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdFx0fSxcclxuXHRcdHVzaW5nQ29tcG9uZW50czoge1xyXG5cdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRkZWZhdWx0OiB0cnVlXHJcblx0XHR9LFxyXG5cdFx0c2hvd0xvYWRpbmc6IHtcclxuXHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0ZGVmYXVsdDogdHJ1ZVxyXG5cdFx0fSxcclxuXHRcdGxvYWRpbmdUZXh0OiB7XHJcblx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0ZGVmYXVsdDogJ+S6jOe7tOeggeeUn+aIkOS4rSdcclxuXHRcdH0sXHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cmVzdWx0OiAnJyxcclxuXHRcdH1cclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdF9tYWtlQ29kZSgpIHtcclxuXHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdGlmICghdGhpcy5fZW1wdHkodGhpcy52YWwpKSB7XHJcblx0XHRcdFx0cXJjb2RlID0gbmV3IFFSQ29kZSh7XHJcblx0XHRcdFx0XHRjb250ZXh0OiB0aGF0LCAvLyDkuIrkuIvmlofnjq/looNcclxuXHRcdFx0XHRcdGNhbnZhc0lkOnRoYXQuY2lkLCAvLyBjYW52YXMtaWRcclxuXHRcdFx0XHRcdHVzaW5nQ29tcG9uZW50czogdGhhdC51c2luZ0NvbXBvbmVudHMsIC8vIOaYr+WQpuaYr+iHquWumuS5iee7hOS7tlxyXG5cdFx0XHRcdFx0c2hvd0xvYWRpbmc6IHRoYXQuc2hvd0xvYWRpbmcsIC8vIOaYr+WQpuaYvuekumxvYWRpbmdcclxuXHRcdFx0XHRcdGxvYWRpbmdUZXh0OiB0aGF0LmxvYWRpbmdUZXh0LCAvLyBsb2FkaW5n5paH5a2XXHJcblx0XHRcdFx0XHR0ZXh0OiB0aGF0LnZhbCwgLy8g55Sf5oiQ5YaF5a65XHJcblx0XHRcdFx0XHRzaXplOiB0aGF0LmNwU2l6ZSwgLy8g5LqM57u056CB5aSn5bCPXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB0aGF0LmJhY2tncm91bmQsIC8vIOiDjOaZr+iJslxyXG5cdFx0XHRcdFx0Zm9yZWdyb3VuZDogdGhhdC5mb3JlZ3JvdW5kLCAvLyDliY3mma/oibJcclxuXHRcdFx0XHRcdHBkZ3JvdW5kOiB0aGF0LnBkZ3JvdW5kLCAvLyDlrprkvY3op5LngrnpopzoibJcclxuXHRcdFx0XHRcdGNvcnJlY3RMZXZlbDogdGhhdC5sdiwgLy8g5a656ZSZ57qn5YirXHJcblx0XHRcdFx0XHRpbWFnZTogdGhhdC5pY29uLCAvLyDkuoznu7TnoIHlm77moIdcclxuXHRcdFx0XHRcdGltYWdlU2l6ZTogdGhhdC5pY29uU2l6ZSwvLyDkuoznu7TnoIHlm77moIflpKflsI9cclxuXHRcdFx0XHRcdGNiUmVzdWx0OiBmdW5jdGlvbiAocmVzKSB7IC8vIOeUn+aIkOS6jOe7tOeggeeahOWbnuiwg1xyXG5cdFx0XHRcdFx0XHR0aGF0Ll9yZXN1bHQocmVzKVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn5LqM57u056CB5YaF5a655LiN6IO95Li656m6JyxcclxuXHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRfY2xlYXJDb2RlKCkge1xyXG5cdFx0XHR0aGlzLl9yZXN1bHQoJycpXHJcblx0XHRcdHFyY29kZS5jbGVhcigpXHJcblx0XHR9LFxyXG5cdFx0X3NhdmVDb2RlKCkge1xyXG5cdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdGlmICh0aGlzLnJlc3VsdCAhPSBcIlwiKSB7XHJcblx0XHRcdFx0dW5pLnNhdmVJbWFnZVRvUGhvdG9zQWxidW0oe1xyXG5cdFx0XHRcdFx0ZmlsZVBhdGg6IHRoYXQucmVzdWx0LFxyXG5cdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+S6jOe7tOeggeS/neWtmOaIkOWKnycsXHJcblx0XHRcdFx0XHRcdFx0aWNvbjogJ3N1Y2Nlc3MnLFxyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0X3Jlc3VsdChyZXMpIHtcclxuXHRcdFx0dGhpcy5yZXN1bHQgPSByZXM7XHJcblx0XHRcdHRoaXMuJGVtaXQoJ3Jlc3VsdCcsIHJlcylcclxuXHRcdH0sXHJcblx0XHRfZW1wdHkodikge1xyXG5cdFx0XHRsZXQgdHAgPSB0eXBlb2YgdixcclxuXHRcdFx0XHRydCA9IGZhbHNlO1xyXG5cdFx0XHRpZiAodHAgPT0gXCJudW1iZXJcIiAmJiBTdHJpbmcodikgPT0gXCJcIikge1xyXG5cdFx0XHRcdHJ0ID0gdHJ1ZVxyXG5cdFx0XHR9IGVsc2UgaWYgKHRwID09IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdFx0XHRydCA9IHRydWVcclxuXHRcdFx0fSBlbHNlIGlmICh0cCA9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRcdFx0aWYgKEpTT04uc3RyaW5naWZ5KHYpID09IFwie31cIiB8fCBKU09OLnN0cmluZ2lmeSh2KSA9PSBcIltdXCIgfHwgdiA9PSBudWxsKSBydCA9IHRydWVcclxuXHRcdFx0fSBlbHNlIGlmICh0cCA9PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0aWYgKHYgPT0gXCJcIiB8fCB2ID09IFwidW5kZWZpbmVkXCIgfHwgdiA9PSBcIm51bGxcIiB8fCB2ID09IFwie31cIiB8fCB2ID09IFwiW11cIikgcnQgPSB0cnVlXHJcblx0XHRcdH0gZWxzZSBpZiAodHAgPT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRcdFx0cnQgPSBmYWxzZVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBydFxyXG5cdFx0fVxyXG5cdH0sXHJcblx0d2F0Y2g6IHtcclxuXHRcdHNpemU6IGZ1bmN0aW9uIChuLCBvKSB7XHJcblx0XHRcdGlmIChuICE9IG8gJiYgIXRoaXMuX2VtcHR5KG4pKSB7XHJcblx0XHRcdFx0dGhpcy5jU2l6ZSA9IG5cclxuXHRcdFx0XHRpZiAoIXRoaXMuX2VtcHR5KHRoaXMudmFsKSkge1xyXG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuX21ha2VDb2RlKClcclxuXHRcdFx0XHRcdH0sIDEwMCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0dmFsOiBmdW5jdGlvbiAobiwgbykge1xyXG5cdFx0XHRpZiAodGhpcy5vbnZhbCkge1xyXG5cdFx0XHRcdGlmIChuICE9IG8gJiYgIXRoaXMuX2VtcHR5KG4pKSB7XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5fbWFrZUNvZGUoKVxyXG5cdFx0XHRcdFx0fSwgMCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHRjb21wdXRlZDoge1xyXG5cdFx0Y3BTaXplKCkge1xyXG5cdFx0XHRpZih0aGlzLnVuaXQgPT0gXCJ1cHhcIil7XHJcblx0XHRcdFx0cmV0dXJuIHVuaS51cHgycHgodGhpcy5zaXplKVxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zaXplXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmICh0aGlzLmxvYWRNYWtlKSB7XHJcblx0XHRcdGlmICghdGhpcy5fZW1wdHkodGhpcy52YWwpKSB7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLl9tYWtlQ29kZSgpXHJcblx0XHRcdFx0fSwgMCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG59XHJcbjwvc2NyaXB0PlxyXG48c3R5bGU+XHJcbi50a2ktcXJjb2RlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnRraS1xcmNvZGUtY2FudmFzIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAtOTk5OTl1cHg7XHJcbiAgbGVmdDogLTk5OTk5dXB4O1xyXG4gIHotaW5kZXg6IC05OTk5OTtcclxufVxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///27\n");

/***/ }),
/* 28 */
/*!*************************************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/components/tki-qrcode/qrcode.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var QRCode = {};\n(function () {\n  /**\r\n               * 获取单个字符的utf8编码\r\n               * unicode BMP平面约65535个字符\r\n               * @param {num} code\r\n               * return {array}\r\n               */\n  function unicodeFormat8(code) {\n    // 1 byte\n    var c0, c1, c2;\n    if (code < 128) {\n      return [code];\n      // 2 bytes\n    } else if (code < 2048) {\n      c0 = 192 + (code >> 6);\n      c1 = 128 + (code & 63);\n      return [c0, c1];\n      // 3 bytes\n    } else {\n      c0 = 224 + (code >> 12);\n      c1 = 128 + (code >> 6 & 63);\n      c2 = 128 + (code & 63);\n      return [c0, c1, c2];\n    }\n  }\n  /**\r\n     * 获取字符串的utf8编码字节串\r\n     * @param {string} string\r\n     * @return {array}\r\n     */\n  function getUTF8Bytes(string) {\n    var utf8codes = [];\n    for (var i = 0; i < string.length; i++) {\n      var code = string.charCodeAt(i);\n      var utf8 = unicodeFormat8(code);\n      for (var j = 0; j < utf8.length; j++) {\n        utf8codes.push(utf8[j]);\n      }\n    }\n    return utf8codes;\n  }\n  /**\r\n     * 二维码算法实现\r\n     * @param {string} data              要编码的信息字符串\r\n     * @param {num} errorCorrectLevel 纠错等级\r\n     */\n  function QRCodeAlg(data, errorCorrectLevel) {\n    this.typeNumber = -1; //版本\n    this.errorCorrectLevel = errorCorrectLevel;\n    this.modules = null; //二维矩阵，存放最终结果\n    this.moduleCount = 0; //矩阵大小\n    this.dataCache = null; //数据缓存\n    this.rsBlocks = null; //版本数据信息\n    this.totalDataCount = -1; //可使用的数据量\n    this.data = data;\n    this.utf8bytes = getUTF8Bytes(data);\n    this.make();\n  }\n  QRCodeAlg.prototype = {\n    constructor: QRCodeAlg,\n    /**\r\n                             * 获取二维码矩阵大小\r\n                             * @return {num} 矩阵大小\r\n                             */\n    getModuleCount: function getModuleCount() {\n      return this.moduleCount;\n    },\n    /**\r\n        * 编码\r\n        */\n    make: function make() {\n      this.getRightType();\n      this.dataCache = this.createData();\n      this.createQrcode();\n    },\n    /**\r\n        * 设置二位矩阵功能图形\r\n        * @param  {bool} test 表示是否在寻找最好掩膜阶段\r\n        * @param  {num} maskPattern 掩膜的版本\r\n        */\n    makeImpl: function makeImpl(maskPattern) {\n      this.moduleCount = this.typeNumber * 4 + 17;\n      this.modules = new Array(this.moduleCount);\n      for (var row = 0; row < this.moduleCount; row++) {\n        this.modules[row] = new Array(this.moduleCount);\n      }\n      this.setupPositionProbePattern(0, 0);\n      this.setupPositionProbePattern(this.moduleCount - 7, 0);\n      this.setupPositionProbePattern(0, this.moduleCount - 7);\n      this.setupPositionAdjustPattern();\n      this.setupTimingPattern();\n      this.setupTypeInfo(true, maskPattern);\n      if (this.typeNumber >= 7) {\n        this.setupTypeNumber(true);\n      }\n      this.mapData(this.dataCache, maskPattern);\n    },\n    /**\r\n        * 设置二维码的位置探测图形\r\n        * @param  {num} row 探测图形的中心横坐标\r\n        * @param  {num} col 探测图形的中心纵坐标\r\n        */\n    setupPositionProbePattern: function setupPositionProbePattern(row, col) {\n      for (var r = -1; r <= 7; r++) {\n        if (row + r <= -1 || this.moduleCount <= row + r) continue;\n        for (var c = -1; c <= 7; c++) {\n          if (col + c <= -1 || this.moduleCount <= col + c) continue;\n          if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {\n            this.modules[row + r][col + c] = true;\n          } else {\n            this.modules[row + r][col + c] = false;\n          }\n        }\n      }\n    },\n    /**\r\n        * 创建二维码\r\n        * @return {[type]} [description]\r\n        */\n    createQrcode: function createQrcode() {\n      var minLostPoint = 0;\n      var pattern = 0;\n      var bestModules = null;\n      for (var i = 0; i < 8; i++) {\n        this.makeImpl(i);\n        var lostPoint = QRUtil.getLostPoint(this);\n        if (i == 0 || minLostPoint > lostPoint) {\n          minLostPoint = lostPoint;\n          pattern = i;\n          bestModules = this.modules;\n        }\n      }\n      this.modules = bestModules;\n      this.setupTypeInfo(false, pattern);\n      if (this.typeNumber >= 7) {\n        this.setupTypeNumber(false);\n      }\n    },\n    /**\r\n        * 设置定位图形\r\n        * @return {[type]} [description]\r\n        */\n    setupTimingPattern: function setupTimingPattern() {\n      for (var r = 8; r < this.moduleCount - 8; r++) {\n        if (this.modules[r][6] != null) {\n          continue;\n        }\n        this.modules[r][6] = r % 2 == 0;\n        if (this.modules[6][r] != null) {\n          continue;\n        }\n        this.modules[6][r] = r % 2 == 0;\n      }\n    },\n    /**\r\n        * 设置矫正图形\r\n        * @return {[type]} [description]\r\n        */\n    setupPositionAdjustPattern: function setupPositionAdjustPattern() {\n      var pos = QRUtil.getPatternPosition(this.typeNumber);\n      for (var i = 0; i < pos.length; i++) {\n        for (var j = 0; j < pos.length; j++) {\n          var row = pos[i];\n          var col = pos[j];\n          if (this.modules[row][col] != null) {\n            continue;\n          }\n          for (var r = -2; r <= 2; r++) {\n            for (var c = -2; c <= 2; c++) {\n              if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {\n                this.modules[row + r][col + c] = true;\n              } else {\n                this.modules[row + r][col + c] = false;\n              }\n            }\n          }\n        }\n      }\n    },\n    /**\r\n        * 设置版本信息（7以上版本才有）\r\n        * @param  {bool} test 是否处于判断最佳掩膜阶段\r\n        * @return {[type]}      [description]\r\n        */\n    setupTypeNumber: function setupTypeNumber(test) {\n      var bits = QRUtil.getBCHTypeNumber(this.typeNumber);\n      for (var i = 0; i < 18; i++) {\n        var mod = !test && (bits >> i & 1) == 1;\n        this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;\n        this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;\n      }\n    },\n    /**\r\n        * 设置格式信息（纠错等级和掩膜版本）\r\n        * @param  {bool} test\r\n        * @param  {num} maskPattern 掩膜版本\r\n        * @return {}\r\n        */\n    setupTypeInfo: function setupTypeInfo(test, maskPattern) {\n      var data = QRErrorCorrectLevel[this.errorCorrectLevel] << 3 | maskPattern;\n      var bits = QRUtil.getBCHTypeInfo(data);\n      // vertical\n      for (var i = 0; i < 15; i++) {\n        var mod = !test && (bits >> i & 1) == 1;\n        if (i < 6) {\n          this.modules[i][8] = mod;\n        } else if (i < 8) {\n          this.modules[i + 1][8] = mod;\n        } else {\n          this.modules[this.moduleCount - 15 + i][8] = mod;\n        }\n        // horizontal\n        var mod = !test && (bits >> i & 1) == 1;\n        if (i < 8) {\n          this.modules[8][this.moduleCount - i - 1] = mod;\n        } else if (i < 9) {\n          this.modules[8][15 - i - 1 + 1] = mod;\n        } else {\n          this.modules[8][15 - i - 1] = mod;\n        }\n      }\n      // fixed module\n      this.modules[this.moduleCount - 8][8] = !test;\n    },\n    /**\r\n        * 数据编码\r\n        * @return {[type]} [description]\r\n        */\n    createData: function createData() {\n      var buffer = new QRBitBuffer();\n      var lengthBits = this.typeNumber > 9 ? 16 : 8;\n      buffer.put(4, 4); //添加模式\n      buffer.put(this.utf8bytes.length, lengthBits);\n      for (var i = 0, l = this.utf8bytes.length; i < l; i++) {\n        buffer.put(this.utf8bytes[i], 8);\n      }\n      if (buffer.length + 4 <= this.totalDataCount * 8) {\n        buffer.put(0, 4);\n      }\n      // padding\n      while (buffer.length % 8 != 0) {\n        buffer.putBit(false);\n      }\n      // padding\n      while (true) {\n        if (buffer.length >= this.totalDataCount * 8) {\n          break;\n        }\n        buffer.put(QRCodeAlg.PAD0, 8);\n        if (buffer.length >= this.totalDataCount * 8) {\n          break;\n        }\n        buffer.put(QRCodeAlg.PAD1, 8);\n      }\n      return this.createBytes(buffer);\n    },\n    /**\r\n        * 纠错码编码\r\n        * @param  {buffer} buffer 数据编码\r\n        * @return {[type]}\r\n        */\n    createBytes: function createBytes(buffer) {\n      var offset = 0;\n      var maxDcCount = 0;\n      var maxEcCount = 0;\n      var length = this.rsBlock.length / 3;\n      var rsBlocks = new Array();\n      for (var i = 0; i < length; i++) {\n        var count = this.rsBlock[i * 3 + 0];\n        var totalCount = this.rsBlock[i * 3 + 1];\n        var dataCount = this.rsBlock[i * 3 + 2];\n        for (var j = 0; j < count; j++) {\n          rsBlocks.push([dataCount, totalCount]);\n        }\n      }\n      var dcdata = new Array(rsBlocks.length);\n      var ecdata = new Array(rsBlocks.length);\n      for (var r = 0; r < rsBlocks.length; r++) {\n        var dcCount = rsBlocks[r][0];\n        var ecCount = rsBlocks[r][1] - dcCount;\n        maxDcCount = Math.max(maxDcCount, dcCount);\n        maxEcCount = Math.max(maxEcCount, ecCount);\n        dcdata[r] = new Array(dcCount);\n        for (var i = 0; i < dcdata[r].length; i++) {\n          dcdata[r][i] = 0xff & buffer.buffer[i + offset];\n        }\n        offset += dcCount;\n        var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);\n        var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);\n        var modPoly = rawPoly.mod(rsPoly);\n        ecdata[r] = new Array(rsPoly.getLength() - 1);\n        for (var i = 0; i < ecdata[r].length; i++) {\n          var modIndex = i + modPoly.getLength() - ecdata[r].length;\n          ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;\n        }\n      }\n      var data = new Array(this.totalDataCount);\n      var index = 0;\n      for (var i = 0; i < maxDcCount; i++) {\n        for (var r = 0; r < rsBlocks.length; r++) {\n          if (i < dcdata[r].length) {\n            data[index++] = dcdata[r][i];\n          }\n        }\n      }\n      for (var i = 0; i < maxEcCount; i++) {\n        for (var r = 0; r < rsBlocks.length; r++) {\n          if (i < ecdata[r].length) {\n            data[index++] = ecdata[r][i];\n          }\n        }\n      }\n      return data;\n\n    },\n    /**\r\n        * 布置模块，构建最终信息\r\n        * @param  {} data\r\n        * @param  {} maskPattern\r\n        * @return {}\r\n        */\n    mapData: function mapData(data, maskPattern) {\n      var inc = -1;\n      var row = this.moduleCount - 1;\n      var bitIndex = 7;\n      var byteIndex = 0;\n      for (var col = this.moduleCount - 1; col > 0; col -= 2) {\n        if (col == 6) col--;\n        while (true) {\n          for (var c = 0; c < 2; c++) {\n            if (this.modules[row][col - c] == null) {\n              var dark = false;\n              if (byteIndex < data.length) {\n                dark = (data[byteIndex] >>> bitIndex & 1) == 1;\n              }\n              var mask = QRUtil.getMask(maskPattern, row, col - c);\n              if (mask) {\n                dark = !dark;\n              }\n              this.modules[row][col - c] = dark;\n              bitIndex--;\n              if (bitIndex == -1) {\n                byteIndex++;\n                bitIndex = 7;\n              }\n            }\n          }\n          row += inc;\n          if (row < 0 || this.moduleCount <= row) {\n            row -= inc;\n            inc = -inc;\n            break;\n          }\n        }\n      }\n    } };\n\n  /**\r\n          * 填充字段\r\n          */\n  QRCodeAlg.PAD0 = 0xEC;\n  QRCodeAlg.PAD1 = 0x11;\n  //---------------------------------------------------------------------\n  // 纠错等级对应的编码\n  //---------------------------------------------------------------------\n  var QRErrorCorrectLevel = [1, 0, 3, 2];\n  //---------------------------------------------------------------------\n  // 掩膜版本\n  //---------------------------------------------------------------------\n  var QRMaskPattern = {\n    PATTERN000: 0,\n    PATTERN001: 1,\n    PATTERN010: 2,\n    PATTERN011: 3,\n    PATTERN100: 4,\n    PATTERN101: 5,\n    PATTERN110: 6,\n    PATTERN111: 7 };\n\n  //---------------------------------------------------------------------\n  // 工具类\n  //---------------------------------------------------------------------\n  var QRUtil = {\n    /*\r\n                 每个版本矫正图形的位置\r\n                  */\n    PATTERN_POSITION_TABLE: [\n    [],\n    [6, 18],\n    [6, 22],\n    [6, 26],\n    [6, 30],\n    [6, 34],\n    [6, 22, 38],\n    [6, 24, 42],\n    [6, 26, 46],\n    [6, 28, 50],\n    [6, 30, 54],\n    [6, 32, 58],\n    [6, 34, 62],\n    [6, 26, 46, 66],\n    [6, 26, 48, 70],\n    [6, 26, 50, 74],\n    [6, 30, 54, 78],\n    [6, 30, 56, 82],\n    [6, 30, 58, 86],\n    [6, 34, 62, 90],\n    [6, 28, 50, 72, 94],\n    [6, 26, 50, 74, 98],\n    [6, 30, 54, 78, 102],\n    [6, 28, 54, 80, 106],\n    [6, 32, 58, 84, 110],\n    [6, 30, 58, 86, 114],\n    [6, 34, 62, 90, 118],\n    [6, 26, 50, 74, 98, 122],\n    [6, 30, 54, 78, 102, 126],\n    [6, 26, 52, 78, 104, 130],\n    [6, 30, 56, 82, 108, 134],\n    [6, 34, 60, 86, 112, 138],\n    [6, 30, 58, 86, 114, 142],\n    [6, 34, 62, 90, 118, 146],\n    [6, 30, 54, 78, 102, 126, 150],\n    [6, 24, 50, 76, 102, 128, 154],\n    [6, 28, 54, 80, 106, 132, 158],\n    [6, 32, 58, 84, 110, 136, 162],\n    [6, 26, 54, 82, 110, 138, 166],\n    [6, 30, 58, 86, 114, 142, 170]],\n\n    G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,\n    G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,\n    G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,\n    /*\r\n                                                             BCH编码格式信息\r\n                                                              */\n    getBCHTypeInfo: function getBCHTypeInfo(data) {\n      var d = data << 10;\n      while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {\n        d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);\n      }\n      return (data << 10 | d) ^ QRUtil.G15_MASK;\n    },\n    /*\r\n       BCH编码版本信息\r\n        */\n    getBCHTypeNumber: function getBCHTypeNumber(data) {\n      var d = data << 12;\n      while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {\n        d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);\n      }\n      return data << 12 | d;\n    },\n    /*\r\n       获取BCH位信息\r\n        */\n    getBCHDigit: function getBCHDigit(data) {\n      var digit = 0;\n      while (data != 0) {\n        digit++;\n        data >>>= 1;\n      }\n      return digit;\n    },\n    /*\r\n       获取版本对应的矫正图形位置\r\n        */\n    getPatternPosition: function getPatternPosition(typeNumber) {\n      return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];\n    },\n    /*\r\n       掩膜算法\r\n        */\n    getMask: function getMask(maskPattern, i, j) {\n      switch (maskPattern) {\n        case QRMaskPattern.PATTERN000:\n          return (i + j) % 2 == 0;\n        case QRMaskPattern.PATTERN001:\n          return i % 2 == 0;\n        case QRMaskPattern.PATTERN010:\n          return j % 3 == 0;\n        case QRMaskPattern.PATTERN011:\n          return (i + j) % 3 == 0;\n        case QRMaskPattern.PATTERN100:\n          return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;\n        case QRMaskPattern.PATTERN101:\n          return i * j % 2 + i * j % 3 == 0;\n        case QRMaskPattern.PATTERN110:\n          return (i * j % 2 + i * j % 3) % 2 == 0;\n        case QRMaskPattern.PATTERN111:\n          return (i * j % 3 + (i + j) % 2) % 2 == 0;\n        default:\n          throw new Error(\"bad maskPattern:\" + maskPattern);}\n\n    },\n    /*\r\n       获取RS的纠错多项式\r\n        */\n    getErrorCorrectPolynomial: function getErrorCorrectPolynomial(errorCorrectLength) {\n      var a = new QRPolynomial([1], 0);\n      for (var i = 0; i < errorCorrectLength; i++) {\n        a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));\n      }\n      return a;\n    },\n    /*\r\n       获取评价\r\n        */\n    getLostPoint: function getLostPoint(qrCode) {\n      var moduleCount = qrCode.getModuleCount(),\n      lostPoint = 0,\n      darkCount = 0;\n      for (var row = 0; row < moduleCount; row++) {\n        var sameCount = 0;\n        var head = qrCode.modules[row][0];\n        for (var col = 0; col < moduleCount; col++) {\n          var current = qrCode.modules[row][col];\n          //level 3 评价\n          if (col < moduleCount - 6) {\n            if (current && !qrCode.modules[row][col + 1] && qrCode.modules[row][col + 2] && qrCode.modules[row][col + 3] && qrCode.modules[row][col + 4] && !qrCode.modules[row][col + 5] && qrCode.modules[row][col + 6]) {\n              if (col < moduleCount - 10) {\n                if (qrCode.modules[row][col + 7] && qrCode.modules[row][col + 8] && qrCode.modules[row][col + 9] && qrCode.modules[row][col + 10]) {\n                  lostPoint += 40;\n                }\n              } else if (col > 3) {\n                if (qrCode.modules[row][col - 1] && qrCode.modules[row][col - 2] && qrCode.modules[row][col - 3] && qrCode.modules[row][col - 4]) {\n                  lostPoint += 40;\n                }\n              }\n            }\n          }\n          //level 2 评价\n          if (row < moduleCount - 1 && col < moduleCount - 1) {\n            var count = 0;\n            if (current) count++;\n            if (qrCode.modules[row + 1][col]) count++;\n            if (qrCode.modules[row][col + 1]) count++;\n            if (qrCode.modules[row + 1][col + 1]) count++;\n            if (count == 0 || count == 4) {\n              lostPoint += 3;\n            }\n          }\n          //level 1 评价\n          if (head ^ current) {\n            sameCount++;\n          } else {\n            head = current;\n            if (sameCount >= 5) {\n              lostPoint += 3 + sameCount - 5;\n            }\n            sameCount = 1;\n          }\n          //level 4 评价\n          if (current) {\n            darkCount++;\n          }\n        }\n      }\n      for (var col = 0; col < moduleCount; col++) {\n        var sameCount = 0;\n        var head = qrCode.modules[0][col];\n        for (var row = 0; row < moduleCount; row++) {\n          var current = qrCode.modules[row][col];\n          //level 3 评价\n          if (row < moduleCount - 6) {\n            if (current && !qrCode.modules[row + 1][col] && qrCode.modules[row + 2][col] && qrCode.modules[row + 3][col] && qrCode.modules[row + 4][col] && !qrCode.modules[row + 5][col] && qrCode.modules[row + 6][col]) {\n              if (row < moduleCount - 10) {\n                if (qrCode.modules[row + 7][col] && qrCode.modules[row + 8][col] && qrCode.modules[row + 9][col] && qrCode.modules[row + 10][col]) {\n                  lostPoint += 40;\n                }\n              } else if (row > 3) {\n                if (qrCode.modules[row - 1][col] && qrCode.modules[row - 2][col] && qrCode.modules[row - 3][col] && qrCode.modules[row - 4][col]) {\n                  lostPoint += 40;\n                }\n              }\n            }\n          }\n          //level 1 评价\n          if (head ^ current) {\n            sameCount++;\n          } else {\n            head = current;\n            if (sameCount >= 5) {\n              lostPoint += 3 + sameCount - 5;\n            }\n            sameCount = 1;\n          }\n        }\n      }\n      // LEVEL4\n      var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;\n      lostPoint += ratio * 10;\n      return lostPoint;\n    } };\n\n\n  //---------------------------------------------------------------------\n  // QRMath使用的数学工具\n  //---------------------------------------------------------------------\n  var QRMath = {\n    /*\r\n                 将n转化为a^m\r\n                  */\n    glog: function glog(n) {\n      if (n < 1) {\n        throw new Error(\"glog(\" + n + \")\");\n      }\n      return QRMath.LOG_TABLE[n];\n    },\n    /*\r\n       将a^m转化为n\r\n        */\n    gexp: function gexp(n) {\n      while (n < 0) {\n        n += 255;\n      }\n      while (n >= 256) {\n        n -= 255;\n      }\n      return QRMath.EXP_TABLE[n];\n    },\n    EXP_TABLE: new Array(256),\n    LOG_TABLE: new Array(256) };\n\n\n  for (var i = 0; i < 8; i++) {\n    QRMath.EXP_TABLE[i] = 1 << i;\n  }\n  for (var i = 8; i < 256; i++) {\n    QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];\n  }\n  for (var i = 0; i < 255; i++) {\n    QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;\n  }\n  //---------------------------------------------------------------------\n  // QRPolynomial 多项式\n  //---------------------------------------------------------------------\n  /**\r\n   * 多项式类\r\n   * @param {Array} num   系数\r\n   * @param {num} shift a^shift\r\n   */\n  function QRPolynomial(num, shift) {\n    if (num.length == undefined) {\n      throw new Error(num.length + \"/\" + shift);\n    }\n    var offset = 0;\n    while (offset < num.length && num[offset] == 0) {\n      offset++;\n    }\n    this.num = new Array(num.length - offset + shift);\n    for (var i = 0; i < num.length - offset; i++) {\n      this.num[i] = num[i + offset];\n    }\n  }\n  QRPolynomial.prototype = {\n    get: function get(index) {\n      return this.num[index];\n    },\n    getLength: function getLength() {\n      return this.num.length;\n    },\n    /**\r\n        * 多项式乘法\r\n        * @param  {QRPolynomial} e 被乘多项式\r\n        * @return {[type]}   [description]\r\n        */\n    multiply: function multiply(e) {\n      var num = new Array(this.getLength() + e.getLength() - 1);\n      for (var i = 0; i < this.getLength(); i++) {\n        for (var j = 0; j < e.getLength(); j++) {\n          num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));\n        }\n      }\n      return new QRPolynomial(num, 0);\n    },\n    /**\r\n        * 多项式模运算\r\n        * @param  {QRPolynomial} e 模多项式\r\n        * @return {}\r\n        */\n    mod: function mod(e) {\n      var tl = this.getLength(),\n      el = e.getLength();\n      if (tl - el < 0) {\n        return this;\n      }\n      var num = new Array(tl);\n      for (var i = 0; i < tl; i++) {\n        num[i] = this.get(i);\n      }\n      while (num.length >= el) {\n        var ratio = QRMath.glog(num[0]) - QRMath.glog(e.get(0));\n\n        for (var i = 0; i < e.getLength(); i++) {\n          num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);\n        }\n        while (num[0] == 0) {\n          num.shift();\n        }\n      }\n      return new QRPolynomial(num, 0);\n    } };\n\n\n  //---------------------------------------------------------------------\n  // RS_BLOCK_TABLE\n  //---------------------------------------------------------------------\n  /*\r\n  二维码各个版本信息[块数, 每块中的数据块数, 每块中的信息块数]\r\n   */\n  var RS_BLOCK_TABLE = [\n  // L\n  // M\n  // Q\n  // H\n  // 1\n  [1, 26, 19],\n  [1, 26, 16],\n  [1, 26, 13],\n  [1, 26, 9],\n\n  // 2\n  [1, 44, 34],\n  [1, 44, 28],\n  [1, 44, 22],\n  [1, 44, 16],\n\n  // 3\n  [1, 70, 55],\n  [1, 70, 44],\n  [2, 35, 17],\n  [2, 35, 13],\n\n  // 4\n  [1, 100, 80],\n  [2, 50, 32],\n  [2, 50, 24],\n  [4, 25, 9],\n\n  // 5\n  [1, 134, 108],\n  [2, 67, 43],\n  [2, 33, 15, 2, 34, 16],\n  [2, 33, 11, 2, 34, 12],\n\n  // 6\n  [2, 86, 68],\n  [4, 43, 27],\n  [4, 43, 19],\n  [4, 43, 15],\n\n  // 7\n  [2, 98, 78],\n  [4, 49, 31],\n  [2, 32, 14, 4, 33, 15],\n  [4, 39, 13, 1, 40, 14],\n\n  // 8\n  [2, 121, 97],\n  [2, 60, 38, 2, 61, 39],\n  [4, 40, 18, 2, 41, 19],\n  [4, 40, 14, 2, 41, 15],\n\n  // 9\n  [2, 146, 116],\n  [3, 58, 36, 2, 59, 37],\n  [4, 36, 16, 4, 37, 17],\n  [4, 36, 12, 4, 37, 13],\n\n  // 10\n  [2, 86, 68, 2, 87, 69],\n  [4, 69, 43, 1, 70, 44],\n  [6, 43, 19, 2, 44, 20],\n  [6, 43, 15, 2, 44, 16],\n\n  // 11\n  [4, 101, 81],\n  [1, 80, 50, 4, 81, 51],\n  [4, 50, 22, 4, 51, 23],\n  [3, 36, 12, 8, 37, 13],\n\n  // 12\n  [2, 116, 92, 2, 117, 93],\n  [6, 58, 36, 2, 59, 37],\n  [4, 46, 20, 6, 47, 21],\n  [7, 42, 14, 4, 43, 15],\n\n  // 13\n  [4, 133, 107],\n  [8, 59, 37, 1, 60, 38],\n  [8, 44, 20, 4, 45, 21],\n  [12, 33, 11, 4, 34, 12],\n\n  // 14\n  [3, 145, 115, 1, 146, 116],\n  [4, 64, 40, 5, 65, 41],\n  [11, 36, 16, 5, 37, 17],\n  [11, 36, 12, 5, 37, 13],\n\n  // 15\n  [5, 109, 87, 1, 110, 88],\n  [5, 65, 41, 5, 66, 42],\n  [5, 54, 24, 7, 55, 25],\n  [11, 36, 12],\n\n  // 16\n  [5, 122, 98, 1, 123, 99],\n  [7, 73, 45, 3, 74, 46],\n  [15, 43, 19, 2, 44, 20],\n  [3, 45, 15, 13, 46, 16],\n\n  // 17\n  [1, 135, 107, 5, 136, 108],\n  [10, 74, 46, 1, 75, 47],\n  [1, 50, 22, 15, 51, 23],\n  [2, 42, 14, 17, 43, 15],\n\n  // 18\n  [5, 150, 120, 1, 151, 121],\n  [9, 69, 43, 4, 70, 44],\n  [17, 50, 22, 1, 51, 23],\n  [2, 42, 14, 19, 43, 15],\n\n  // 19\n  [3, 141, 113, 4, 142, 114],\n  [3, 70, 44, 11, 71, 45],\n  [17, 47, 21, 4, 48, 22],\n  [9, 39, 13, 16, 40, 14],\n\n  // 20\n  [3, 135, 107, 5, 136, 108],\n  [3, 67, 41, 13, 68, 42],\n  [15, 54, 24, 5, 55, 25],\n  [15, 43, 15, 10, 44, 16],\n\n  // 21\n  [4, 144, 116, 4, 145, 117],\n  [17, 68, 42],\n  [17, 50, 22, 6, 51, 23],\n  [19, 46, 16, 6, 47, 17],\n\n  // 22\n  [2, 139, 111, 7, 140, 112],\n  [17, 74, 46],\n  [7, 54, 24, 16, 55, 25],\n  [34, 37, 13],\n\n  // 23\n  [4, 151, 121, 5, 152, 122],\n  [4, 75, 47, 14, 76, 48],\n  [11, 54, 24, 14, 55, 25],\n  [16, 45, 15, 14, 46, 16],\n\n  // 24\n  [6, 147, 117, 4, 148, 118],\n  [6, 73, 45, 14, 74, 46],\n  [11, 54, 24, 16, 55, 25],\n  [30, 46, 16, 2, 47, 17],\n\n  // 25\n  [8, 132, 106, 4, 133, 107],\n  [8, 75, 47, 13, 76, 48],\n  [7, 54, 24, 22, 55, 25],\n  [22, 45, 15, 13, 46, 16],\n\n  // 26\n  [10, 142, 114, 2, 143, 115],\n  [19, 74, 46, 4, 75, 47],\n  [28, 50, 22, 6, 51, 23],\n  [33, 46, 16, 4, 47, 17],\n\n  // 27\n  [8, 152, 122, 4, 153, 123],\n  [22, 73, 45, 3, 74, 46],\n  [8, 53, 23, 26, 54, 24],\n  [12, 45, 15, 28, 46, 16],\n\n  // 28\n  [3, 147, 117, 10, 148, 118],\n  [3, 73, 45, 23, 74, 46],\n  [4, 54, 24, 31, 55, 25],\n  [11, 45, 15, 31, 46, 16],\n\n  // 29\n  [7, 146, 116, 7, 147, 117],\n  [21, 73, 45, 7, 74, 46],\n  [1, 53, 23, 37, 54, 24],\n  [19, 45, 15, 26, 46, 16],\n\n  // 30\n  [5, 145, 115, 10, 146, 116],\n  [19, 75, 47, 10, 76, 48],\n  [15, 54, 24, 25, 55, 25],\n  [23, 45, 15, 25, 46, 16],\n\n  // 31\n  [13, 145, 115, 3, 146, 116],\n  [2, 74, 46, 29, 75, 47],\n  [42, 54, 24, 1, 55, 25],\n  [23, 45, 15, 28, 46, 16],\n\n  // 32\n  [17, 145, 115],\n  [10, 74, 46, 23, 75, 47],\n  [10, 54, 24, 35, 55, 25],\n  [19, 45, 15, 35, 46, 16],\n\n  // 33\n  [17, 145, 115, 1, 146, 116],\n  [14, 74, 46, 21, 75, 47],\n  [29, 54, 24, 19, 55, 25],\n  [11, 45, 15, 46, 46, 16],\n\n  // 34\n  [13, 145, 115, 6, 146, 116],\n  [14, 74, 46, 23, 75, 47],\n  [44, 54, 24, 7, 55, 25],\n  [59, 46, 16, 1, 47, 17],\n\n  // 35\n  [12, 151, 121, 7, 152, 122],\n  [12, 75, 47, 26, 76, 48],\n  [39, 54, 24, 14, 55, 25],\n  [22, 45, 15, 41, 46, 16],\n\n  // 36\n  [6, 151, 121, 14, 152, 122],\n  [6, 75, 47, 34, 76, 48],\n  [46, 54, 24, 10, 55, 25],\n  [2, 45, 15, 64, 46, 16],\n\n  // 37\n  [17, 152, 122, 4, 153, 123],\n  [29, 74, 46, 14, 75, 47],\n  [49, 54, 24, 10, 55, 25],\n  [24, 45, 15, 46, 46, 16],\n\n  // 38\n  [4, 152, 122, 18, 153, 123],\n  [13, 74, 46, 32, 75, 47],\n  [48, 54, 24, 14, 55, 25],\n  [42, 45, 15, 32, 46, 16],\n\n  // 39\n  [20, 147, 117, 4, 148, 118],\n  [40, 75, 47, 7, 76, 48],\n  [43, 54, 24, 22, 55, 25],\n  [10, 45, 15, 67, 46, 16],\n\n  // 40\n  [19, 148, 118, 6, 149, 119],\n  [18, 75, 47, 31, 76, 48],\n  [34, 54, 24, 34, 55, 25],\n  [20, 45, 15, 61, 46, 16]];\n\n\n  /**\r\n                              * 根据数据获取对应版本\r\n                              * @return {[type]} [description]\r\n                              */\n  QRCodeAlg.prototype.getRightType = function () {\n    for (var typeNumber = 1; typeNumber < 41; typeNumber++) {\n      var rsBlock = RS_BLOCK_TABLE[(typeNumber - 1) * 4 + this.errorCorrectLevel];\n      if (rsBlock == undefined) {\n        throw new Error(\"bad rs block @ typeNumber:\" + typeNumber + \"/errorCorrectLevel:\" + this.errorCorrectLevel);\n      }\n      var length = rsBlock.length / 3;\n      var totalDataCount = 0;\n      for (var i = 0; i < length; i++) {\n        var count = rsBlock[i * 3 + 0];\n        var dataCount = rsBlock[i * 3 + 2];\n        totalDataCount += dataCount * count;\n      }\n      var lengthBytes = typeNumber > 9 ? 2 : 1;\n      if (this.utf8bytes.length + lengthBytes < totalDataCount || typeNumber == 40) {\n        this.typeNumber = typeNumber;\n        this.rsBlock = rsBlock;\n        this.totalDataCount = totalDataCount;\n        break;\n      }\n    }\n  };\n\n  //---------------------------------------------------------------------\n  // QRBitBuffer\n  //---------------------------------------------------------------------\n  function QRBitBuffer() {\n    this.buffer = new Array();\n    this.length = 0;\n  }\n  QRBitBuffer.prototype = {\n    get: function get(index) {\n      var bufIndex = Math.floor(index / 8);\n      return this.buffer[bufIndex] >>> 7 - index % 8 & 1;\n    },\n    put: function put(num, length) {\n      for (var i = 0; i < length; i++) {\n        this.putBit(num >>> length - i - 1 & 1);\n      }\n    },\n    putBit: function putBit(bit) {\n      var bufIndex = Math.floor(this.length / 8);\n      if (this.buffer.length <= bufIndex) {\n        this.buffer.push(0);\n      }\n      if (bit) {\n        this.buffer[bufIndex] |= 0x80 >>> this.length % 8;\n      }\n      this.length++;\n    } };\n\n\n\n\n  // xzedit\n  var qrcodeAlgObjCache = [];\n  /**\r\n                               * 二维码构造函数，主要用于绘制\r\n                               * @param  {参数列表} opt 传递参数\r\n                               * @return {}\r\n                               */\n  QRCode = function QRCode(opt) {\n    //设置默认参数\n    this.options = {\n      text: '',\n      size: 256,\n      correctLevel: 3,\n      background: '#ffffff',\n      foreground: '#000000',\n      pdground: '#000000',\n      image: '',\n      imageSize: 30,\n      canvasId: opt.canvasId,\n      context: opt.context,\n      usingComponents: opt.usingComponents,\n      showLoading: opt.showLoading,\n      loadingText: opt.loadingText };\n\n    if (typeof opt === 'string') {// 只编码ASCII字符串\n      opt = {\n        text: opt };\n\n    }\n    if (opt) {\n      for (var i in opt) {\n        this.options[i] = opt[i];\n      }\n    }\n    //使用QRCodeAlg创建二维码结构\n    var qrCodeAlg = null;\n    for (var i = 0, l = qrcodeAlgObjCache.length; i < l; i++) {\n      if (qrcodeAlgObjCache[i].text == this.options.text && qrcodeAlgObjCache[i].text.correctLevel == this.options.correctLevel) {\n        qrCodeAlg = qrcodeAlgObjCache[i].obj;\n        break;\n      }\n    }\n    if (i == l) {\n      qrCodeAlg = new QRCodeAlg(this.options.text, this.options.correctLevel);\n      qrcodeAlgObjCache.push({\n        text: this.options.text,\n        correctLevel: this.options.correctLevel,\n        obj: qrCodeAlg });\n\n    }\n    /**\r\n       * 计算矩阵点的前景色\r\n       * @param {Obj} config\r\n       * @param {Number} config.row 点x坐标\r\n       * @param {Number} config.col 点y坐标\r\n       * @param {Number} config.count 矩阵大小\r\n       * @param {Number} config.options 组件的options\r\n       * @return {String}\r\n       */\n    var getForeGround = function getForeGround(config) {\n      var options = config.options;\n      if (options.pdground && (\n      config.row > 1 && config.row < 5 && config.col > 1 && config.col < 5 ||\n      config.row > config.count - 6 && config.row < config.count - 2 && config.col > 1 && config.col < 5 ||\n      config.row > 1 && config.row < 5 && config.col > config.count - 6 && config.col < config.count - 2))\n      {\n        return options.pdground;\n      }\n      return options.foreground;\n    };\n    // 创建canvas\n    var createCanvas = function createCanvas(options) {\n      if (options.showLoading) {\n        uni.showLoading({\n          title: options.loadingText,\n          mask: true });\n\n      }\n      var ctx = uni.createCanvasContext(options.canvasId, options.context);\n      var count = qrCodeAlg.getModuleCount();\n      var ratioSize = options.size;\n      var ratioImgSize = options.imageSize;\n      //计算每个点的长宽\n      var tileW = (ratioSize / count).toPrecision(4);\n      var tileH = (ratioSize / count).toPrecision(4);\n      //绘制\n      for (var row = 0; row < count; row++) {\n        for (var col = 0; col < count; col++) {\n          var w = Math.ceil((col + 1) * tileW) - Math.floor(col * tileW);\n          var h = Math.ceil((row + 1) * tileW) - Math.floor(row * tileW);\n          var foreground = getForeGround({\n            row: row,\n            col: col,\n            count: count,\n            options: options });\n\n          ctx.setFillStyle(qrCodeAlg.modules[row][col] ? foreground : options.background);\n          ctx.fillRect(Math.round(col * tileW), Math.round(row * tileH), w, h);\n        }\n      }\n      if (options.image) {\n\n\n\n\n        // 画圆角矩形\n        var drawRoundedRect = function drawRoundedRect(ctxi, x, y, width, height, r, lineWidth, fill, stroke) {\n          ctxi.setLineWidth(lineWidth);\n          ctxi.setFillStyle(options.background);\n          ctxi.setStrokeStyle(options.background);\n          ctxi.beginPath(); // draw top and top right corner \n          ctxi.moveTo(x + r, y);\n          ctxi.arcTo(x + width, y, x + width, y + r, r); // draw right side and bottom right corner \n          ctxi.arcTo(x + width, y + height, x + width - r, y + height, r); // draw bottom and bottom left corner \n          ctxi.arcTo(x, y + height, x, y + height - r, r); // draw left and top left corner \n          ctxi.arcTo(x, y, x + r, y, r);\n          ctxi.closePath();\n          if (fill) {\n            ctxi.fill();\n          }\n          if (stroke) {\n            ctxi.stroke();\n          }\n        };var x = Number(((ratioSize - ratioImgSize) / 2).toFixed(2));var y = Number(((ratioSize - ratioImgSize) / 2).toFixed(2));drawRoundedRect(ctx, x, y, ratioImgSize, ratioImgSize, 2, 6, true, true);ctx.drawImage(options.image, x, y, ratioImgSize, ratioImgSize);\n      }\n      setTimeout(function () {\n        ctx.draw(true, function () {\n          // 保存到临时区域\n          setTimeout(function () {\n            uni.canvasToTempFilePath({\n              width: options.width,\n              height: options.height,\n              destWidth: options.width,\n              destHeight: options.height,\n              canvasId: options.canvasId,\n              quality: Number(1),\n              success: function success(res) {\n                if (options.cbResult) {\n                  options.cbResult(res.tempFilePath);\n                }\n              },\n              fail: function fail(res) {\n                if (options.cbResult) {\n                  options.cbResult(res);\n                }\n              },\n              complete: function complete() {\n                if (options.showLoading) {\n                  uni.hideLoading();\n                }\n              } },\n            options.context);\n          }, options.text.length + 100);\n        });\n      }, options.usingComponents ? 0 : 150);\n    };\n    createCanvas(this.options);\n    // 空判定\n    var empty = function empty(v) {\n      var tp = typeof v,\n      rt = false;\n      if (tp == \"number\" && String(v) == \"\") {\n        rt = true;\n      } else if (tp == \"undefined\") {\n        rt = true;\n      } else if (tp == \"object\") {\n        if (JSON.stringify(v) == \"{}\" || JSON.stringify(v) == \"[]\" || v == null) rt = true;\n      } else if (tp == \"string\") {\n        if (v == \"\" || v == \"undefined\" || v == \"null\" || v == \"{}\" || v == \"[]\") rt = true;\n      } else if (tp == \"function\") {\n        rt = false;\n      }\n      return rt;\n    };\n  };\n  QRCode.prototype.clear = function (fn) {\n    var ctx = uni.createCanvasContext(this.options.canvasId, this.options.context);\n    ctx.clearRect(0, 0, this.options.size, this.options.size);\n    ctx.draw(false, function () {\n      if (fn) {\n        fn();\n      }\n    });\n  };\n})();var _default =\n\nQRCode;exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy90a2ktcXJjb2RlL3FyY29kZS5qcyJdLCJuYW1lcyI6WyJRUkNvZGUiLCJ1bmljb2RlRm9ybWF0OCIsImNvZGUiLCJjMCIsImMxIiwiYzIiLCJnZXRVVEY4Qnl0ZXMiLCJzdHJpbmciLCJ1dGY4Y29kZXMiLCJpIiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsInV0ZjgiLCJqIiwicHVzaCIsIlFSQ29kZUFsZyIsImRhdGEiLCJlcnJvckNvcnJlY3RMZXZlbCIsInR5cGVOdW1iZXIiLCJtb2R1bGVzIiwibW9kdWxlQ291bnQiLCJkYXRhQ2FjaGUiLCJyc0Jsb2NrcyIsInRvdGFsRGF0YUNvdW50IiwidXRmOGJ5dGVzIiwibWFrZSIsInByb3RvdHlwZSIsImNvbnN0cnVjdG9yIiwiZ2V0TW9kdWxlQ291bnQiLCJnZXRSaWdodFR5cGUiLCJjcmVhdGVEYXRhIiwiY3JlYXRlUXJjb2RlIiwibWFrZUltcGwiLCJtYXNrUGF0dGVybiIsIkFycmF5Iiwicm93Iiwic2V0dXBQb3NpdGlvblByb2JlUGF0dGVybiIsInNldHVwUG9zaXRpb25BZGp1c3RQYXR0ZXJuIiwic2V0dXBUaW1pbmdQYXR0ZXJuIiwic2V0dXBUeXBlSW5mbyIsInNldHVwVHlwZU51bWJlciIsIm1hcERhdGEiLCJjb2wiLCJyIiwiYyIsIm1pbkxvc3RQb2ludCIsInBhdHRlcm4iLCJiZXN0TW9kdWxlcyIsImxvc3RQb2ludCIsIlFSVXRpbCIsImdldExvc3RQb2ludCIsInBvcyIsImdldFBhdHRlcm5Qb3NpdGlvbiIsInRlc3QiLCJiaXRzIiwiZ2V0QkNIVHlwZU51bWJlciIsIm1vZCIsIk1hdGgiLCJmbG9vciIsIlFSRXJyb3JDb3JyZWN0TGV2ZWwiLCJnZXRCQ0hUeXBlSW5mbyIsImJ1ZmZlciIsIlFSQml0QnVmZmVyIiwibGVuZ3RoQml0cyIsInB1dCIsImwiLCJwdXRCaXQiLCJQQUQwIiwiUEFEMSIsImNyZWF0ZUJ5dGVzIiwib2Zmc2V0IiwibWF4RGNDb3VudCIsIm1heEVjQ291bnQiLCJyc0Jsb2NrIiwiY291bnQiLCJ0b3RhbENvdW50IiwiZGF0YUNvdW50IiwiZGNkYXRhIiwiZWNkYXRhIiwiZGNDb3VudCIsImVjQ291bnQiLCJtYXgiLCJyc1BvbHkiLCJnZXRFcnJvckNvcnJlY3RQb2x5bm9taWFsIiwicmF3UG9seSIsIlFSUG9seW5vbWlhbCIsImdldExlbmd0aCIsIm1vZFBvbHkiLCJtb2RJbmRleCIsImdldCIsImluZGV4IiwiaW5jIiwiYml0SW5kZXgiLCJieXRlSW5kZXgiLCJkYXJrIiwibWFzayIsImdldE1hc2siLCJRUk1hc2tQYXR0ZXJuIiwiUEFUVEVSTjAwMCIsIlBBVFRFUk4wMDEiLCJQQVRURVJOMDEwIiwiUEFUVEVSTjAxMSIsIlBBVFRFUk4xMDAiLCJQQVRURVJOMTAxIiwiUEFUVEVSTjExMCIsIlBBVFRFUk4xMTEiLCJQQVRURVJOX1BPU0lUSU9OX1RBQkxFIiwiRzE1IiwiRzE4IiwiRzE1X01BU0siLCJkIiwiZ2V0QkNIRGlnaXQiLCJkaWdpdCIsIkVycm9yIiwiZXJyb3JDb3JyZWN0TGVuZ3RoIiwiYSIsIm11bHRpcGx5IiwiUVJNYXRoIiwiZ2V4cCIsInFyQ29kZSIsImRhcmtDb3VudCIsInNhbWVDb3VudCIsImhlYWQiLCJjdXJyZW50IiwicmF0aW8iLCJhYnMiLCJnbG9nIiwibiIsIkxPR19UQUJMRSIsIkVYUF9UQUJMRSIsIm51bSIsInNoaWZ0IiwidW5kZWZpbmVkIiwiZSIsInRsIiwiZWwiLCJSU19CTE9DS19UQUJMRSIsImxlbmd0aEJ5dGVzIiwiYnVmSW5kZXgiLCJiaXQiLCJxcmNvZGVBbGdPYmpDYWNoZSIsIm9wdCIsIm9wdGlvbnMiLCJ0ZXh0Iiwic2l6ZSIsImNvcnJlY3RMZXZlbCIsImJhY2tncm91bmQiLCJmb3JlZ3JvdW5kIiwicGRncm91bmQiLCJpbWFnZSIsImltYWdlU2l6ZSIsImNhbnZhc0lkIiwiY29udGV4dCIsInVzaW5nQ29tcG9uZW50cyIsInNob3dMb2FkaW5nIiwibG9hZGluZ1RleHQiLCJxckNvZGVBbGciLCJvYmoiLCJnZXRGb3JlR3JvdW5kIiwiY29uZmlnIiwiY3JlYXRlQ2FudmFzIiwidW5pIiwidGl0bGUiLCJjdHgiLCJjcmVhdGVDYW52YXNDb250ZXh0IiwicmF0aW9TaXplIiwicmF0aW9JbWdTaXplIiwidGlsZVciLCJ0b1ByZWNpc2lvbiIsInRpbGVIIiwidyIsImNlaWwiLCJoIiwic2V0RmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJyb3VuZCIsImRyYXdSb3VuZGVkUmVjdCIsImN0eGkiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwibGluZVdpZHRoIiwiZmlsbCIsInN0cm9rZSIsInNldExpbmVXaWR0aCIsInNldFN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwiYXJjVG8iLCJjbG9zZVBhdGgiLCJOdW1iZXIiLCJ0b0ZpeGVkIiwiZHJhd0ltYWdlIiwic2V0VGltZW91dCIsImRyYXciLCJjYW52YXNUb1RlbXBGaWxlUGF0aCIsImRlc3RXaWR0aCIsImRlc3RIZWlnaHQiLCJxdWFsaXR5Iiwic3VjY2VzcyIsInJlcyIsImNiUmVzdWx0IiwidGVtcEZpbGVQYXRoIiwiZmFpbCIsImNvbXBsZXRlIiwiaGlkZUxvYWRpbmciLCJlbXB0eSIsInYiLCJ0cCIsInJ0IiwiU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsImNsZWFyIiwiZm4iLCJjbGVhclJlY3QiXSwibWFwcGluZ3MiOiJ1RkFBQSxJQUFJQSxNQUFNLEdBQUcsRUFBYjtBQUNBLENBQUMsWUFBWTtBQUNUOzs7Ozs7QUFNQSxXQUFTQyxjQUFULENBQXdCQyxJQUF4QixFQUE4QjtBQUMxQjtBQUNBLFFBQUlDLEVBQUosRUFBUUMsRUFBUixFQUFZQyxFQUFaO0FBQ0EsUUFBSUgsSUFBSSxHQUFHLEdBQVgsRUFBZ0I7QUFDWixhQUFPLENBQUNBLElBQUQsQ0FBUDtBQUNBO0FBQ0gsS0FIRCxNQUdPLElBQUlBLElBQUksR0FBRyxJQUFYLEVBQWlCO0FBQ3BCQyxRQUFFLEdBQUcsT0FBT0QsSUFBSSxJQUFJLENBQWYsQ0FB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ImxldCBRUkNvZGUgPSB7fTtcclxuKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5Y2V5Liq5a2X56ym55qEdXRmOOe8lueggVxyXG4gICAgICogdW5pY29kZSBCTVDlubPpnaLnuqY2NTUzNeS4quWtl+esplxyXG4gICAgICogQHBhcmFtIHtudW19IGNvZGVcclxuICAgICAqIHJldHVybiB7YXJyYXl9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHVuaWNvZGVGb3JtYXQ4KGNvZGUpIHtcclxuICAgICAgICAvLyAxIGJ5dGVcclxuICAgICAgICB2YXIgYzAsIGMxLCBjMjtcclxuICAgICAgICBpZiAoY29kZSA8IDEyOCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW2NvZGVdO1xyXG4gICAgICAgICAgICAvLyAyIGJ5dGVzXHJcbiAgICAgICAgfSBlbHNlIGlmIChjb2RlIDwgMjA0OCkge1xyXG4gICAgICAgICAgICBjMCA9IDE5MiArIChjb2RlID4+IDYpO1xyXG4gICAgICAgICAgICBjMSA9IDEyOCArIChjb2RlICYgNjMpO1xyXG4gICAgICAgICAgICByZXR1cm4gW2MwLCBjMV07XHJcbiAgICAgICAgICAgIC8vIDMgYnl0ZXNcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjMCA9IDIyNCArIChjb2RlID4+IDEyKTtcclxuICAgICAgICAgICAgYzEgPSAxMjggKyAoY29kZSA+PiA2ICYgNjMpO1xyXG4gICAgICAgICAgICBjMiA9IDEyOCArIChjb2RlICYgNjMpO1xyXG4gICAgICAgICAgICByZXR1cm4gW2MwLCBjMSwgYzJdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5a2X56ym5Liy55qEdXRmOOe8lueggeWtl+iKguS4slxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xyXG4gICAgICogQHJldHVybiB7YXJyYXl9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGdldFVURjhCeXRlcyhzdHJpbmcpIHtcclxuICAgICAgICB2YXIgdXRmOGNvZGVzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcclxuICAgICAgICAgICAgdmFyIHV0ZjggPSB1bmljb2RlRm9ybWF0OChjb2RlKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB1dGY4Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICB1dGY4Y29kZXMucHVzaCh1dGY4W2pdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdXRmOGNvZGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDkuoznu7TnoIHnrpfms5Xlrp7njrBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhICAgICAgICAgICAgICDopoHnvJbnoIHnmoTkv6Hmga/lrZfnrKbkuLJcclxuICAgICAqIEBwYXJhbSB7bnVtfSBlcnJvckNvcnJlY3RMZXZlbCDnuqDplJnnrYnnuqdcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gUVJDb2RlQWxnKGRhdGEsIGVycm9yQ29ycmVjdExldmVsKSB7XHJcbiAgICAgICAgdGhpcy50eXBlTnVtYmVyID0gLTE7IC8v54mI5pysXHJcbiAgICAgICAgdGhpcy5lcnJvckNvcnJlY3RMZXZlbCA9IGVycm9yQ29ycmVjdExldmVsO1xyXG4gICAgICAgIHRoaXMubW9kdWxlcyA9IG51bGw7IC8v5LqM57u055+p6Zi177yM5a2Y5pS+5pyA57uI57uT5p6cXHJcbiAgICAgICAgdGhpcy5tb2R1bGVDb3VudCA9IDA7IC8v55+p6Zi15aSn5bCPXHJcbiAgICAgICAgdGhpcy5kYXRhQ2FjaGUgPSBudWxsOyAvL+aVsOaNrue8k+WtmFxyXG4gICAgICAgIHRoaXMucnNCbG9ja3MgPSBudWxsOyAvL+eJiOacrOaVsOaNruS/oeaBr1xyXG4gICAgICAgIHRoaXMudG90YWxEYXRhQ291bnQgPSAtMTsgLy/lj6/kvb/nlKjnmoTmlbDmja7ph49cclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMudXRmOGJ5dGVzID0gZ2V0VVRGOEJ5dGVzKGRhdGEpO1xyXG4gICAgICAgIHRoaXMubWFrZSgpO1xyXG4gICAgfVxyXG4gICAgUVJDb2RlQWxnLnByb3RvdHlwZSA9IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcjogUVJDb2RlQWxnLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOiOt+WPluS6jOe7tOeggeefqemYteWkp+Wwj1xyXG4gICAgICAgICAqIEByZXR1cm4ge251bX0g55+p6Zi15aSn5bCPXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0TW9kdWxlQ291bnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9kdWxlQ291bnQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnvJbnoIFcclxuICAgICAgICAgKi9cclxuICAgICAgICBtYWtlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UmlnaHRUeXBlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUNhY2hlID0gdGhpcy5jcmVhdGVEYXRhKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUXJjb2RlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDorr7nva7kuozkvY3nn6npmLXlip/og73lm77lvaJcclxuICAgICAgICAgKiBAcGFyYW0gIHtib29sfSB0ZXN0IOihqOekuuaYr+WQpuWcqOWvu+aJvuacgOWlveaOqeiGnOmYtuautVxyXG4gICAgICAgICAqIEBwYXJhbSAge251bX0gbWFza1BhdHRlcm4g5o6p6Iac55qE54mI5pysXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbWFrZUltcGw6IGZ1bmN0aW9uIChtYXNrUGF0dGVybikge1xyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZUNvdW50ID0gdGhpcy50eXBlTnVtYmVyICogNCArIDE3O1xyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZXMgPSBuZXcgQXJyYXkodGhpcy5tb2R1bGVDb3VudCk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IHRoaXMubW9kdWxlQ291bnQ7IHJvdysrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZHVsZXNbcm93XSA9IG5ldyBBcnJheSh0aGlzLm1vZHVsZUNvdW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNldHVwUG9zaXRpb25Qcm9iZVBhdHRlcm4oMCwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dXBQb3NpdGlvblByb2JlUGF0dGVybih0aGlzLm1vZHVsZUNvdW50IC0gNywgMCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dXBQb3NpdGlvblByb2JlUGF0dGVybigwLCB0aGlzLm1vZHVsZUNvdW50IC0gNyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dXBQb3NpdGlvbkFkanVzdFBhdHRlcm4oKTtcclxuICAgICAgICAgICAgdGhpcy5zZXR1cFRpbWluZ1BhdHRlcm4oKTtcclxuICAgICAgICAgICAgdGhpcy5zZXR1cFR5cGVJbmZvKHRydWUsIG1hc2tQYXR0ZXJuKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMudHlwZU51bWJlciA+PSA3KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHVwVHlwZU51bWJlcih0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm1hcERhdGEodGhpcy5kYXRhQ2FjaGUsIG1hc2tQYXR0ZXJuKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOiuvue9ruS6jOe7tOeggeeahOS9jee9ruaOoua1i+WbvuW9olxyXG4gICAgICAgICAqIEBwYXJhbSAge251bX0gcm93IOaOoua1i+WbvuW9oueahOS4reW/g+aoquWdkOagh1xyXG4gICAgICAgICAqIEBwYXJhbSAge251bX0gY29sIOaOoua1i+WbvuW9oueahOS4reW/g+e6teWdkOagh1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNldHVwUG9zaXRpb25Qcm9iZVBhdHRlcm46IGZ1bmN0aW9uIChyb3csIGNvbCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciByID0gLTE7IHIgPD0gNzsgcisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocm93ICsgciA8PSAtMSB8fCB0aGlzLm1vZHVsZUNvdW50IDw9IHJvdyArIHIpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYyA9IC0xOyBjIDw9IDc7IGMrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2wgKyBjIDw9IC0xIHx8IHRoaXMubW9kdWxlQ291bnQgPD0gY29sICsgYykgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCgwIDw9IHIgJiYgciA8PSA2ICYmIChjID09IDAgfHwgYyA9PSA2KSkgfHwgKDAgPD0gYyAmJiBjIDw9IDYgJiYgKHIgPT0gMCB8fCByID09IDYpKSB8fCAoMiA8PSByICYmIHIgPD0gNCAmJiAyIDw9IGMgJiYgYyA8PSA0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZHVsZXNbcm93ICsgcl1bY29sICsgY10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9kdWxlc1tyb3cgKyByXVtjb2wgKyBjXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5Yib5bu65LqM57u056CBXHJcbiAgICAgICAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY3JlYXRlUXJjb2RlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBtaW5Mb3N0UG9pbnQgPSAwO1xyXG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IDA7XHJcbiAgICAgICAgICAgIHZhciBiZXN0TW9kdWxlcyA9IG51bGw7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1ha2VJbXBsKGkpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGxvc3RQb2ludCA9IFFSVXRpbC5nZXRMb3N0UG9pbnQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSAwIHx8IG1pbkxvc3RQb2ludCA+IGxvc3RQb2ludCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbkxvc3RQb2ludCA9IGxvc3RQb2ludDtcclxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuID0gaTtcclxuICAgICAgICAgICAgICAgICAgICBiZXN0TW9kdWxlcyA9IHRoaXMubW9kdWxlcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZXMgPSBiZXN0TW9kdWxlcztcclxuICAgICAgICAgICAgdGhpcy5zZXR1cFR5cGVJbmZvKGZhbHNlLCBwYXR0ZXJuKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMudHlwZU51bWJlciA+PSA3KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHVwVHlwZU51bWJlcihmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOiuvue9ruWumuS9jeWbvuW9olxyXG4gICAgICAgICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNldHVwVGltaW5nUGF0dGVybjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciByID0gODsgciA8IHRoaXMubW9kdWxlQ291bnQgLSA4OyByKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vZHVsZXNbcl1bNl0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2R1bGVzW3JdWzZdID0gKHIgJSAyID09IDApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW9kdWxlc1s2XVtyXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZHVsZXNbNl1bcl0gPSAociAlIDIgPT0gMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOiuvue9ruefq+ato+WbvuW9olxyXG4gICAgICAgICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNldHVwUG9zaXRpb25BZGp1c3RQYXR0ZXJuOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBwb3MgPSBRUlV0aWwuZ2V0UGF0dGVyblBvc2l0aW9uKHRoaXMudHlwZU51bWJlcik7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBvcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByb3cgPSBwb3NbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbCA9IHBvc1tqXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tb2R1bGVzW3Jvd11bY29sXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciByID0gLTI7IHIgPD0gMjsgcisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGMgPSAtMjsgYyA8PSAyOyBjKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyID09IC0yIHx8IHIgPT0gMiB8fCBjID09IC0yIHx8IGMgPT0gMiB8fCAociA9PSAwICYmIGMgPT0gMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZHVsZXNbcm93ICsgcl1bY29sICsgY10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZHVsZXNbcm93ICsgcl1bY29sICsgY10gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6K6+572u54mI5pys5L+h5oGv77yIN+S7peS4iueJiOacrOaJjeacie+8iVxyXG4gICAgICAgICAqIEBwYXJhbSAge2Jvb2x9IHRlc3Qg5piv5ZCm5aSE5LqO5Yik5pat5pyA5L2z5o6p6Iac6Zi25q61XHJcbiAgICAgICAgICogQHJldHVybiB7W3R5cGVdfSAgICAgIFtkZXNjcmlwdGlvbl1cclxuICAgICAgICAgKi9cclxuICAgICAgICBzZXR1cFR5cGVOdW1iZXI6IGZ1bmN0aW9uICh0ZXN0KSB7XHJcbiAgICAgICAgICAgIHZhciBiaXRzID0gUVJVdGlsLmdldEJDSFR5cGVOdW1iZXIodGhpcy50eXBlTnVtYmVyKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxODsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbW9kID0gKCF0ZXN0ICYmICgoYml0cyA+PiBpKSAmIDEpID09IDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2R1bGVzW01hdGguZmxvb3IoaSAvIDMpXVtpICUgMyArIHRoaXMubW9kdWxlQ291bnQgLSA4IC0gM10gPSBtb2Q7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZHVsZXNbaSAlIDMgKyB0aGlzLm1vZHVsZUNvdW50IC0gOCAtIDNdW01hdGguZmxvb3IoaSAvIDMpXSA9IG1vZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6K6+572u5qC85byP5L+h5oGv77yI57qg6ZSZ562J57qn5ZKM5o6p6Iac54mI5pys77yJXHJcbiAgICAgICAgICogQHBhcmFtICB7Ym9vbH0gdGVzdFxyXG4gICAgICAgICAqIEBwYXJhbSAge251bX0gbWFza1BhdHRlcm4g5o6p6Iac54mI5pysXHJcbiAgICAgICAgICogQHJldHVybiB7fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNldHVwVHlwZUluZm86IGZ1bmN0aW9uICh0ZXN0LCBtYXNrUGF0dGVybikge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IChRUkVycm9yQ29ycmVjdExldmVsW3RoaXMuZXJyb3JDb3JyZWN0TGV2ZWxdIDw8IDMpIHwgbWFza1BhdHRlcm47XHJcbiAgICAgICAgICAgIHZhciBiaXRzID0gUVJVdGlsLmdldEJDSFR5cGVJbmZvKGRhdGEpO1xyXG4gICAgICAgICAgICAvLyB2ZXJ0aWNhbFxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE1OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBtb2QgPSAoIXRlc3QgJiYgKChiaXRzID4+IGkpICYgMSkgPT0gMSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA8IDYpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZHVsZXNbaV1bOF0gPSBtb2Q7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPCA4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2R1bGVzW2kgKyAxXVs4XSA9IG1vZDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2R1bGVzW3RoaXMubW9kdWxlQ291bnQgLSAxNSArIGldWzhdID0gbW9kO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gaG9yaXpvbnRhbFxyXG4gICAgICAgICAgICAgICAgdmFyIG1vZCA9ICghdGVzdCAmJiAoKGJpdHMgPj4gaSkgJiAxKSA9PSAxKTtcclxuICAgICAgICAgICAgICAgIGlmIChpIDwgOCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kdWxlc1s4XVt0aGlzLm1vZHVsZUNvdW50IC0gaSAtIDFdID0gbW9kO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpIDwgOSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kdWxlc1s4XVsxNSAtIGkgLSAxICsgMV0gPSBtb2Q7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kdWxlc1s4XVsxNSAtIGkgLSAxXSA9IG1vZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBmaXhlZCBtb2R1bGVcclxuICAgICAgICAgICAgdGhpcy5tb2R1bGVzW3RoaXMubW9kdWxlQ291bnQgLSA4XVs4XSA9ICghdGVzdCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmlbDmja7nvJbnoIFcclxuICAgICAgICAgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjcmVhdGVEYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBidWZmZXIgPSBuZXcgUVJCaXRCdWZmZXIoKTtcclxuICAgICAgICAgICAgdmFyIGxlbmd0aEJpdHMgPSB0aGlzLnR5cGVOdW1iZXIgPiA5ID8gMTYgOiA4O1xyXG4gICAgICAgICAgICBidWZmZXIucHV0KDQsIDQpOyAvL+a3u+WKoOaooeW8j1xyXG4gICAgICAgICAgICBidWZmZXIucHV0KHRoaXMudXRmOGJ5dGVzLmxlbmd0aCwgbGVuZ3RoQml0cyk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy51dGY4Ynl0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBidWZmZXIucHV0KHRoaXMudXRmOGJ5dGVzW2ldLCA4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYnVmZmVyLmxlbmd0aCArIDQgPD0gdGhpcy50b3RhbERhdGFDb3VudCAqIDgpIHtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlci5wdXQoMCwgNCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gcGFkZGluZ1xyXG4gICAgICAgICAgICB3aGlsZSAoYnVmZmVyLmxlbmd0aCAlIDggIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYnVmZmVyLnB1dEJpdChmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gcGFkZGluZ1xyXG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ1ZmZlci5sZW5ndGggPj0gdGhpcy50b3RhbERhdGFDb3VudCAqIDgpIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJ1ZmZlci5wdXQoUVJDb2RlQWxnLlBBRDAsIDgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ1ZmZlci5sZW5ndGggPj0gdGhpcy50b3RhbERhdGFDb3VudCAqIDgpIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJ1ZmZlci5wdXQoUVJDb2RlQWxnLlBBRDEsIDgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUJ5dGVzKGJ1ZmZlcik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnuqDplJnnoIHnvJbnoIFcclxuICAgICAgICAgKiBAcGFyYW0gIHtidWZmZXJ9IGJ1ZmZlciDmlbDmja7nvJbnoIFcclxuICAgICAgICAgKiBAcmV0dXJuIHtbdHlwZV19XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY3JlYXRlQnl0ZXM6IGZ1bmN0aW9uIChidWZmZXIpIHtcclxuICAgICAgICAgICAgdmFyIG9mZnNldCA9IDA7XHJcbiAgICAgICAgICAgIHZhciBtYXhEY0NvdW50ID0gMDtcclxuICAgICAgICAgICAgdmFyIG1heEVjQ291bnQgPSAwO1xyXG4gICAgICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy5yc0Jsb2NrLmxlbmd0aCAvIDM7XHJcbiAgICAgICAgICAgIHZhciByc0Jsb2NrcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY291bnQgPSB0aGlzLnJzQmxvY2tbaSAqIDMgKyAwXTtcclxuICAgICAgICAgICAgICAgIHZhciB0b3RhbENvdW50ID0gdGhpcy5yc0Jsb2NrW2kgKiAzICsgMV07XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YUNvdW50ID0gdGhpcy5yc0Jsb2NrW2kgKiAzICsgMl07XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNvdW50OyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICByc0Jsb2Nrcy5wdXNoKFtkYXRhQ291bnQsIHRvdGFsQ291bnRdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZGNkYXRhID0gbmV3IEFycmF5KHJzQmxvY2tzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHZhciBlY2RhdGEgPSBuZXcgQXJyYXkocnNCbG9ja3MubGVuZ3RoKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCByc0Jsb2Nrcy5sZW5ndGg7IHIrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRjQ291bnQgPSByc0Jsb2Nrc1tyXVswXTtcclxuICAgICAgICAgICAgICAgIHZhciBlY0NvdW50ID0gcnNCbG9ja3Nbcl1bMV0gLSBkY0NvdW50O1xyXG4gICAgICAgICAgICAgICAgbWF4RGNDb3VudCA9IE1hdGgubWF4KG1heERjQ291bnQsIGRjQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgbWF4RWNDb3VudCA9IE1hdGgubWF4KG1heEVjQ291bnQsIGVjQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgZGNkYXRhW3JdID0gbmV3IEFycmF5KGRjQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkY2RhdGFbcl0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBkY2RhdGFbcl1baV0gPSAweGZmICYgYnVmZmVyLmJ1ZmZlcltpICsgb2Zmc2V0XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9mZnNldCArPSBkY0NvdW50O1xyXG4gICAgICAgICAgICAgICAgdmFyIHJzUG9seSA9IFFSVXRpbC5nZXRFcnJvckNvcnJlY3RQb2x5bm9taWFsKGVjQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJhd1BvbHkgPSBuZXcgUVJQb2x5bm9taWFsKGRjZGF0YVtyXSwgcnNQb2x5LmdldExlbmd0aCgpIC0gMSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbW9kUG9seSA9IHJhd1BvbHkubW9kKHJzUG9seSk7XHJcbiAgICAgICAgICAgICAgICBlY2RhdGFbcl0gPSBuZXcgQXJyYXkocnNQb2x5LmdldExlbmd0aCgpIC0gMSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVjZGF0YVtyXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtb2RJbmRleCA9IGkgKyBtb2RQb2x5LmdldExlbmd0aCgpIC0gZWNkYXRhW3JdLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICBlY2RhdGFbcl1baV0gPSAobW9kSW5kZXggPj0gMCkgPyBtb2RQb2x5LmdldChtb2RJbmRleCkgOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gbmV3IEFycmF5KHRoaXMudG90YWxEYXRhQ291bnQpO1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSAwO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heERjQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCByc0Jsb2Nrcy5sZW5ndGg7IHIrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpIDwgZGNkYXRhW3JdLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2luZGV4KytdID0gZGNkYXRhW3JdW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heEVjQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCByc0Jsb2Nrcy5sZW5ndGg7IHIrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpIDwgZWNkYXRhW3JdLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2luZGV4KytdID0gZWNkYXRhW3JdW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDluIPnva7mqKHlnZfvvIzmnoTlu7rmnIDnu4jkv6Hmga9cclxuICAgICAgICAgKiBAcGFyYW0gIHt9IGRhdGFcclxuICAgICAgICAgKiBAcGFyYW0gIHt9IG1hc2tQYXR0ZXJuXHJcbiAgICAgICAgICogQHJldHVybiB7fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG1hcERhdGE6IGZ1bmN0aW9uIChkYXRhLCBtYXNrUGF0dGVybikge1xyXG4gICAgICAgICAgICB2YXIgaW5jID0gLTE7XHJcbiAgICAgICAgICAgIHZhciByb3cgPSB0aGlzLm1vZHVsZUNvdW50IC0gMTtcclxuICAgICAgICAgICAgdmFyIGJpdEluZGV4ID0gNztcclxuICAgICAgICAgICAgdmFyIGJ5dGVJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGNvbCA9IHRoaXMubW9kdWxlQ291bnQgLSAxOyBjb2wgPiAwOyBjb2wgLT0gMikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbCA9PSA2KSBjb2wtLTtcclxuICAgICAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCAyOyBjKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubW9kdWxlc1tyb3ddW2NvbCAtIGNdID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXJrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnl0ZUluZGV4IDwgZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrID0gKCgoZGF0YVtieXRlSW5kZXhdID4+PiBiaXRJbmRleCkgJiAxKSA9PSAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXNrID0gUVJVdGlsLmdldE1hc2sobWFza1BhdHRlcm4sIHJvdywgY29sIC0gYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFzaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcmsgPSAhZGFyaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9kdWxlc1tyb3ddW2NvbCAtIGNdID0gZGFyaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpdEluZGV4LS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYml0SW5kZXggPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBieXRlSW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaXRJbmRleCA9IDc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcm93ICs9IGluYztcclxuICAgICAgICAgICAgICAgICAgICBpZiAocm93IDwgMCB8fCB0aGlzLm1vZHVsZUNvdW50IDw9IHJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3cgLT0gaW5jO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmMgPSAtaW5jO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDloavlhYXlrZfmrrVcclxuICAgICAqL1xyXG4gICAgUVJDb2RlQWxnLlBBRDAgPSAweEVDO1xyXG4gICAgUVJDb2RlQWxnLlBBRDEgPSAweDExO1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIOe6oOmUmeetiee6p+WvueW6lOeahOe8lueggVxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHZhciBRUkVycm9yQ29ycmVjdExldmVsID0gWzEsIDAsIDMsIDJdO1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIOaOqeiGnOeJiOacrFxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHZhciBRUk1hc2tQYXR0ZXJuID0ge1xyXG4gICAgICAgIFBBVFRFUk4wMDA6IDAsXHJcbiAgICAgICAgUEFUVEVSTjAwMTogMSxcclxuICAgICAgICBQQVRURVJOMDEwOiAyLFxyXG4gICAgICAgIFBBVFRFUk4wMTE6IDMsXHJcbiAgICAgICAgUEFUVEVSTjEwMDogNCxcclxuICAgICAgICBQQVRURVJOMTAxOiA1LFxyXG4gICAgICAgIFBBVFRFUk4xMTA6IDYsXHJcbiAgICAgICAgUEFUVEVSTjExMTogN1xyXG4gICAgfTtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyDlt6XlhbfnsbtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB2YXIgUVJVdGlsID0ge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAg5q+P5Liq54mI5pys55+r5q2j5Zu+5b2i55qE5L2N572uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgUEFUVEVSTl9QT1NJVElPTl9UQUJMRTogW1xyXG4gICAgICAgICAgICBbXSxcclxuICAgICAgICAgICAgWzYsIDE4XSxcclxuICAgICAgICAgICAgWzYsIDIyXSxcclxuICAgICAgICAgICAgWzYsIDI2XSxcclxuICAgICAgICAgICAgWzYsIDMwXSxcclxuICAgICAgICAgICAgWzYsIDM0XSxcclxuICAgICAgICAgICAgWzYsIDIyLCAzOF0sXHJcbiAgICAgICAgICAgIFs2LCAyNCwgNDJdLFxyXG4gICAgICAgICAgICBbNiwgMjYsIDQ2XSxcclxuICAgICAgICAgICAgWzYsIDI4LCA1MF0sXHJcbiAgICAgICAgICAgIFs2LCAzMCwgNTRdLFxyXG4gICAgICAgICAgICBbNiwgMzIsIDU4XSxcclxuICAgICAgICAgICAgWzYsIDM0LCA2Ml0sXHJcbiAgICAgICAgICAgIFs2LCAyNiwgNDYsIDY2XSxcclxuICAgICAgICAgICAgWzYsIDI2LCA0OCwgNzBdLFxyXG4gICAgICAgICAgICBbNiwgMjYsIDUwLCA3NF0sXHJcbiAgICAgICAgICAgIFs2LCAzMCwgNTQsIDc4XSxcclxuICAgICAgICAgICAgWzYsIDMwLCA1NiwgODJdLFxyXG4gICAgICAgICAgICBbNiwgMzAsIDU4LCA4Nl0sXHJcbiAgICAgICAgICAgIFs2LCAzNCwgNjIsIDkwXSxcclxuICAgICAgICAgICAgWzYsIDI4LCA1MCwgNzIsIDk0XSxcclxuICAgICAgICAgICAgWzYsIDI2LCA1MCwgNzQsIDk4XSxcclxuICAgICAgICAgICAgWzYsIDMwLCA1NCwgNzgsIDEwMl0sXHJcbiAgICAgICAgICAgIFs2LCAyOCwgNTQsIDgwLCAxMDZdLFxyXG4gICAgICAgICAgICBbNiwgMzIsIDU4LCA4NCwgMTEwXSxcclxuICAgICAgICAgICAgWzYsIDMwLCA1OCwgODYsIDExNF0sXHJcbiAgICAgICAgICAgIFs2LCAzNCwgNjIsIDkwLCAxMThdLFxyXG4gICAgICAgICAgICBbNiwgMjYsIDUwLCA3NCwgOTgsIDEyMl0sXHJcbiAgICAgICAgICAgIFs2LCAzMCwgNTQsIDc4LCAxMDIsIDEyNl0sXHJcbiAgICAgICAgICAgIFs2LCAyNiwgNTIsIDc4LCAxMDQsIDEzMF0sXHJcbiAgICAgICAgICAgIFs2LCAzMCwgNTYsIDgyLCAxMDgsIDEzNF0sXHJcbiAgICAgICAgICAgIFs2LCAzNCwgNjAsIDg2LCAxMTIsIDEzOF0sXHJcbiAgICAgICAgICAgIFs2LCAzMCwgNTgsIDg2LCAxMTQsIDE0Ml0sXHJcbiAgICAgICAgICAgIFs2LCAzNCwgNjIsIDkwLCAxMTgsIDE0Nl0sXHJcbiAgICAgICAgICAgIFs2LCAzMCwgNTQsIDc4LCAxMDIsIDEyNiwgMTUwXSxcclxuICAgICAgICAgICAgWzYsIDI0LCA1MCwgNzYsIDEwMiwgMTI4LCAxNTRdLFxyXG4gICAgICAgICAgICBbNiwgMjgsIDU0LCA4MCwgMTA2LCAxMzIsIDE1OF0sXHJcbiAgICAgICAgICAgIFs2LCAzMiwgNTgsIDg0LCAxMTAsIDEzNiwgMTYyXSxcclxuICAgICAgICAgICAgWzYsIDI2LCA1NCwgODIsIDExMCwgMTM4LCAxNjZdLFxyXG4gICAgICAgICAgICBbNiwgMzAsIDU4LCA4NiwgMTE0LCAxNDIsIDE3MF1cclxuICAgICAgICBdLFxyXG4gICAgICAgIEcxNTogKDEgPDwgMTApIHwgKDEgPDwgOCkgfCAoMSA8PCA1KSB8ICgxIDw8IDQpIHwgKDEgPDwgMikgfCAoMSA8PCAxKSB8ICgxIDw8IDApLFxyXG4gICAgICAgIEcxODogKDEgPDwgMTIpIHwgKDEgPDwgMTEpIHwgKDEgPDwgMTApIHwgKDEgPDwgOSkgfCAoMSA8PCA4KSB8ICgxIDw8IDUpIHwgKDEgPDwgMikgfCAoMSA8PCAwKSxcclxuICAgICAgICBHMTVfTUFTSzogKDEgPDwgMTQpIHwgKDEgPDwgMTIpIHwgKDEgPDwgMTApIHwgKDEgPDwgNCkgfCAoMSA8PCAxKSxcclxuICAgICAgICAvKlxyXG4gICAgICAgIEJDSOe8lueggeagvOW8j+S/oeaBr1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldEJDSFR5cGVJbmZvOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICB2YXIgZCA9IGRhdGEgPDwgMTA7XHJcbiAgICAgICAgICAgIHdoaWxlIChRUlV0aWwuZ2V0QkNIRGlnaXQoZCkgLSBRUlV0aWwuZ2V0QkNIRGlnaXQoUVJVdGlsLkcxNSkgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgZCBePSAoUVJVdGlsLkcxNSA8PCAoUVJVdGlsLmdldEJDSERpZ2l0KGQpIC0gUVJVdGlsLmdldEJDSERpZ2l0KFFSVXRpbC5HMTUpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICgoZGF0YSA8PCAxMCkgfCBkKSBeIFFSVXRpbC5HMTVfTUFTSztcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgQkNI57yW56CB54mI5pys5L+h5oGvXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0QkNIVHlwZU51bWJlcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgdmFyIGQgPSBkYXRhIDw8IDEyO1xyXG4gICAgICAgICAgICB3aGlsZSAoUVJVdGlsLmdldEJDSERpZ2l0KGQpIC0gUVJVdGlsLmdldEJDSERpZ2l0KFFSVXRpbC5HMTgpID49IDApIHtcclxuICAgICAgICAgICAgICAgIGQgXj0gKFFSVXRpbC5HMTggPDwgKFFSVXRpbC5nZXRCQ0hEaWdpdChkKSAtIFFSVXRpbC5nZXRCQ0hEaWdpdChRUlV0aWwuRzE4KSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAoZGF0YSA8PCAxMikgfCBkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLypcclxuICAgICAgICDojrflj5ZCQ0jkvY3kv6Hmga9cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXRCQ0hEaWdpdDogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgdmFyIGRpZ2l0ID0gMDtcclxuICAgICAgICAgICAgd2hpbGUgKGRhdGEgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZGlnaXQrKztcclxuICAgICAgICAgICAgICAgIGRhdGEgPj4+PSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkaWdpdDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qXHJcbiAgICAgICAg6I635Y+W54mI5pys5a+55bqU55qE55+r5q2j5Zu+5b2i5L2N572uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0UGF0dGVyblBvc2l0aW9uOiBmdW5jdGlvbiAodHlwZU51bWJlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gUVJVdGlsLlBBVFRFUk5fUE9TSVRJT05fVEFCTEVbdHlwZU51bWJlciAtIDFdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLypcclxuICAgICAgICDmjqnohpznrpfms5VcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXRNYXNrOiBmdW5jdGlvbiAobWFza1BhdHRlcm4sIGksIGopIHtcclxuICAgICAgICAgICAgc3dpdGNoIChtYXNrUGF0dGVybikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4wMDA6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChpICsgaikgJSAyID09IDA7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjAwMTpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaSAlIDIgPT0gMDtcclxuICAgICAgICAgICAgICAgIGNhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMDEwOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBqICUgMyA9PSAwO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4wMTE6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChpICsgaikgJSAzID09IDA7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjEwMDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKE1hdGguZmxvb3IoaSAvIDIpICsgTWF0aC5mbG9vcihqIC8gMykpICUgMiA9PSAwO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4xMDE6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChpICogaikgJSAyICsgKGkgKiBqKSAlIDMgPT0gMDtcclxuICAgICAgICAgICAgICAgIGNhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMTEwOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoKGkgKiBqKSAlIDIgKyAoaSAqIGopICUgMykgJSAyID09IDA7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjExMTpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKChpICogaikgJSAzICsgKGkgKyBqKSAlIDIpICUgMiA9PSAwO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJiYWQgbWFza1BhdHRlcm46XCIgKyBtYXNrUGF0dGVybik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qXHJcbiAgICAgICAg6I635Y+WUlPnmoTnuqDplJnlpJrpobnlvI9cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXRFcnJvckNvcnJlY3RQb2x5bm9taWFsOiBmdW5jdGlvbiAoZXJyb3JDb3JyZWN0TGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciBhID0gbmV3IFFSUG9seW5vbWlhbChbMV0sIDApO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVycm9yQ29ycmVjdExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhID0gYS5tdWx0aXBseShuZXcgUVJQb2x5bm9taWFsKFsxLCBRUk1hdGguZ2V4cChpKV0sIDApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qXHJcbiAgICAgICAg6I635Y+W6K+E5Lu3XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0TG9zdFBvaW50OiBmdW5jdGlvbiAocXJDb2RlKSB7XHJcbiAgICAgICAgICAgIHZhciBtb2R1bGVDb3VudCA9IHFyQ29kZS5nZXRNb2R1bGVDb3VudCgpLFxyXG4gICAgICAgICAgICAgICAgbG9zdFBvaW50ID0gMCxcclxuICAgICAgICAgICAgICAgIGRhcmtDb3VudCA9IDA7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IG1vZHVsZUNvdW50OyByb3crKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNhbWVDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICB2YXIgaGVhZCA9IHFyQ29kZS5tb2R1bGVzW3Jvd11bMF07XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCBtb2R1bGVDb3VudDsgY29sKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudCA9IHFyQ29kZS5tb2R1bGVzW3Jvd11bY29sXTtcclxuICAgICAgICAgICAgICAgICAgICAvL2xldmVsIDMg6K+E5Lu3XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbCA8IG1vZHVsZUNvdW50IC0gNikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudCAmJiAhcXJDb2RlLm1vZHVsZXNbcm93XVtjb2wgKyAxXSAmJiBxckNvZGUubW9kdWxlc1tyb3ddW2NvbCArIDJdICYmIHFyQ29kZS5tb2R1bGVzW3Jvd11bY29sICsgM10gJiYgcXJDb2RlLm1vZHVsZXNbcm93XVtjb2wgKyA0XSAmJiAhcXJDb2RlLm1vZHVsZXNbcm93XVtjb2wgKyA1XSAmJiBxckNvZGUubW9kdWxlc1tyb3ddW2NvbCArIDZdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sIDwgbW9kdWxlQ291bnQgLSAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxckNvZGUubW9kdWxlc1tyb3ddW2NvbCArIDddICYmIHFyQ29kZS5tb2R1bGVzW3Jvd11bY29sICsgOF0gJiYgcXJDb2RlLm1vZHVsZXNbcm93XVtjb2wgKyA5XSAmJiBxckNvZGUubW9kdWxlc1tyb3ddW2NvbCArIDEwXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb3N0UG9pbnQgKz0gNDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb2wgPiAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHFyQ29kZS5tb2R1bGVzW3Jvd11bY29sIC0gMV0gJiYgcXJDb2RlLm1vZHVsZXNbcm93XVtjb2wgLSAyXSAmJiBxckNvZGUubW9kdWxlc1tyb3ddW2NvbCAtIDNdICYmIHFyQ29kZS5tb2R1bGVzW3Jvd11bY29sIC0gNF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9zdFBvaW50ICs9IDQwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL2xldmVsIDIg6K+E5Lu3XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChyb3cgPCBtb2R1bGVDb3VudCAtIDEpICYmIChjb2wgPCBtb2R1bGVDb3VudCAtIDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50KSBjb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocXJDb2RlLm1vZHVsZXNbcm93ICsgMV1bY29sXSkgY291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHFyQ29kZS5tb2R1bGVzW3Jvd11bY29sICsgMV0pIGNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxckNvZGUubW9kdWxlc1tyb3cgKyAxXVtjb2wgKyAxXSkgY291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09IDAgfHwgY291bnQgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9zdFBvaW50ICs9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9sZXZlbCAxIOivhOS7t1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoZWFkIF4gY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzYW1lQ291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkID0gY3VycmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNhbWVDb3VudCA+PSA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb3N0UG9pbnQgKz0gKDMgKyBzYW1lQ291bnQgLSA1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzYW1lQ291bnQgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL2xldmVsIDQg6K+E5Lu3XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGFya0NvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IG1vZHVsZUNvdW50OyBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNhbWVDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICB2YXIgaGVhZCA9IHFyQ29kZS5tb2R1bGVzWzBdW2NvbF07XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudDsgcm93KyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudCA9IHFyQ29kZS5tb2R1bGVzW3Jvd11bY29sXTtcclxuICAgICAgICAgICAgICAgICAgICAvL2xldmVsIDMg6K+E5Lu3XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvdyA8IG1vZHVsZUNvdW50IC0gNikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudCAmJiAhcXJDb2RlLm1vZHVsZXNbcm93ICsgMV1bY29sXSAmJiBxckNvZGUubW9kdWxlc1tyb3cgKyAyXVtjb2xdICYmIHFyQ29kZS5tb2R1bGVzW3JvdyArIDNdW2NvbF0gJiYgcXJDb2RlLm1vZHVsZXNbcm93ICsgNF1bY29sXSAmJiAhcXJDb2RlLm1vZHVsZXNbcm93ICsgNV1bY29sXSAmJiBxckNvZGUubW9kdWxlc1tyb3cgKyA2XVtjb2xdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93IDwgbW9kdWxlQ291bnQgLSAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxckNvZGUubW9kdWxlc1tyb3cgKyA3XVtjb2xdICYmIHFyQ29kZS5tb2R1bGVzW3JvdyArIDhdW2NvbF0gJiYgcXJDb2RlLm1vZHVsZXNbcm93ICsgOV1bY29sXSAmJiBxckNvZGUubW9kdWxlc1tyb3cgKyAxMF1bY29sXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb3N0UG9pbnQgKz0gNDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyb3cgPiAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHFyQ29kZS5tb2R1bGVzW3JvdyAtIDFdW2NvbF0gJiYgcXJDb2RlLm1vZHVsZXNbcm93IC0gMl1bY29sXSAmJiBxckNvZGUubW9kdWxlc1tyb3cgLSAzXVtjb2xdICYmIHFyQ29kZS5tb2R1bGVzW3JvdyAtIDRdW2NvbF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9zdFBvaW50ICs9IDQwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL2xldmVsIDEg6K+E5Lu3XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhlYWQgXiBjdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhbWVDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWQgPSBjdXJyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2FtZUNvdW50ID49IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvc3RQb2ludCArPSAoMyArIHNhbWVDb3VudCAtIDUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhbWVDb3VudCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIExFVkVMNFxyXG4gICAgICAgICAgICB2YXIgcmF0aW8gPSBNYXRoLmFicygxMDAgKiBkYXJrQ291bnQgLyBtb2R1bGVDb3VudCAvIG1vZHVsZUNvdW50IC0gNTApIC8gNTtcclxuICAgICAgICAgICAgbG9zdFBvaW50ICs9IHJhdGlvICogMTA7XHJcbiAgICAgICAgICAgIHJldHVybiBsb3N0UG9pbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gUVJNYXRo5L2/55So55qE5pWw5a2m5bel5YW3XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdmFyIFFSTWF0aCA9IHtcclxuICAgICAgICAvKlxyXG4gICAgICAgIOWwhm7ovazljJbkuLphXm1cclxuICAgICAgICAgKi9cclxuICAgICAgICBnbG9nOiBmdW5jdGlvbiAobikge1xyXG4gICAgICAgICAgICBpZiAobiA8IDEpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImdsb2coXCIgKyBuICsgXCIpXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBRUk1hdGguTE9HX1RBQkxFW25dO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLypcclxuICAgICAgICDlsIZhXm3ovazljJbkuLpuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V4cDogZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICAgICAgd2hpbGUgKG4gPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBuICs9IDI1NTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3aGlsZSAobiA+PSAyNTYpIHtcclxuICAgICAgICAgICAgICAgIG4gLT0gMjU1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBRUk1hdGguRVhQX1RBQkxFW25dO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgRVhQX1RBQkxFOiBuZXcgQXJyYXkoMjU2KSxcclxuICAgICAgICBMT0dfVEFCTEU6IG5ldyBBcnJheSgyNTYpXHJcblxyXG4gICAgfTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODsgaSsrKSB7XHJcbiAgICAgICAgUVJNYXRoLkVYUF9UQUJMRVtpXSA9IDEgPDwgaTtcclxuICAgIH1cclxuICAgIGZvciAodmFyIGkgPSA4OyBpIDwgMjU2OyBpKyspIHtcclxuICAgICAgICBRUk1hdGguRVhQX1RBQkxFW2ldID0gUVJNYXRoLkVYUF9UQUJMRVtpIC0gNF0gXiBRUk1hdGguRVhQX1RBQkxFW2kgLSA1XSBeIFFSTWF0aC5FWFBfVEFCTEVbaSAtIDZdIF4gUVJNYXRoLkVYUF9UQUJMRVtpIC0gOF07XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI1NTsgaSsrKSB7XHJcbiAgICAgICAgUVJNYXRoLkxPR19UQUJMRVtRUk1hdGguRVhQX1RBQkxFW2ldXSA9IGk7XHJcbiAgICB9XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gUVJQb2x5bm9taWFsIOWkmumhueW8j1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8qKlxyXG4gICAgICog5aSa6aG55byP57G7XHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBudW0gICDns7vmlbBcclxuICAgICAqIEBwYXJhbSB7bnVtfSBzaGlmdCBhXnNoaWZ0XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFFSUG9seW5vbWlhbChudW0sIHNoaWZ0KSB7XHJcbiAgICAgICAgaWYgKG51bS5sZW5ndGggPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihudW0ubGVuZ3RoICsgXCIvXCIgKyBzaGlmdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBvZmZzZXQgPSAwO1xyXG4gICAgICAgIHdoaWxlIChvZmZzZXQgPCBudW0ubGVuZ3RoICYmIG51bVtvZmZzZXRdID09IDApIHtcclxuICAgICAgICAgICAgb2Zmc2V0Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubnVtID0gbmV3IEFycmF5KG51bS5sZW5ndGggLSBvZmZzZXQgKyBzaGlmdCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW0ubGVuZ3RoIC0gb2Zmc2V0OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5udW1baV0gPSBudW1baSArIG9mZnNldF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUVJQb2x5bm9taWFsLnByb3RvdHlwZSA9IHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW1baW5kZXhdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0TGVuZ3RoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bS5sZW5ndGg7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlpJrpobnlvI/kuZjms5VcclxuICAgICAgICAgKiBAcGFyYW0gIHtRUlBvbHlub21pYWx9IGUg6KKr5LmY5aSa6aG55byPXHJcbiAgICAgICAgICogQHJldHVybiB7W3R5cGVdfSAgIFtkZXNjcmlwdGlvbl1cclxuICAgICAgICAgKi9cclxuICAgICAgICBtdWx0aXBseTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIG51bSA9IG5ldyBBcnJheSh0aGlzLmdldExlbmd0aCgpICsgZS5nZXRMZW5ndGgoKSAtIDEpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ2V0TGVuZ3RoKCk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBlLmdldExlbmd0aCgpOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBudW1baSArIGpdIF49IFFSTWF0aC5nZXhwKFFSTWF0aC5nbG9nKHRoaXMuZ2V0KGkpKSArIFFSTWF0aC5nbG9nKGUuZ2V0KGopKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBRUlBvbHlub21pYWwobnVtLCAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWkmumhueW8j+aooei/kOeul1xyXG4gICAgICAgICAqIEBwYXJhbSAge1FSUG9seW5vbWlhbH0gZSDmqKHlpJrpobnlvI9cclxuICAgICAgICAgKiBAcmV0dXJuIHt9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbW9kOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgdGwgPSB0aGlzLmdldExlbmd0aCgpLFxyXG4gICAgICAgICAgICAgICAgZWwgPSBlLmdldExlbmd0aCgpO1xyXG4gICAgICAgICAgICBpZiAodGwgLSBlbCA8IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBudW0gPSBuZXcgQXJyYXkodGwpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIG51bVtpXSA9IHRoaXMuZ2V0KGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdoaWxlIChudW0ubGVuZ3RoID49IGVsKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmF0aW8gPSBRUk1hdGguZ2xvZyhudW1bMF0pIC0gUVJNYXRoLmdsb2coZS5nZXQoMCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZS5nZXRMZW5ndGgoKTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbnVtW2ldIF49IFFSTWF0aC5nZXhwKFFSTWF0aC5nbG9nKGUuZ2V0KGkpKSArIHJhdGlvKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHdoaWxlIChudW1bMF0gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG51bS5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUVJQb2x5bm9taWFsKG51bSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gUlNfQkxPQ0tfVEFCTEVcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvKlxyXG4gICAg5LqM57u056CB5ZCE5Liq54mI5pys5L+h5oGvW+Wdl+aVsCwg5q+P5Z2X5Lit55qE5pWw5o2u5Z2X5pWwLCDmr4/lnZfkuK3nmoTkv6Hmga/lnZfmlbBdXHJcbiAgICAgKi9cclxuICAgIHZhciBSU19CTE9DS19UQUJMRSA9IFtcclxuICAgICAgICAvLyBMXHJcbiAgICAgICAgLy8gTVxyXG4gICAgICAgIC8vIFFcclxuICAgICAgICAvLyBIXHJcbiAgICAgICAgLy8gMVxyXG4gICAgICAgIFsxLCAyNiwgMTldLFxyXG4gICAgICAgIFsxLCAyNiwgMTZdLFxyXG4gICAgICAgIFsxLCAyNiwgMTNdLFxyXG4gICAgICAgIFsxLCAyNiwgOV0sXHJcblxyXG4gICAgICAgIC8vIDJcclxuICAgICAgICBbMSwgNDQsIDM0XSxcclxuICAgICAgICBbMSwgNDQsIDI4XSxcclxuICAgICAgICBbMSwgNDQsIDIyXSxcclxuICAgICAgICBbMSwgNDQsIDE2XSxcclxuXHJcbiAgICAgICAgLy8gM1xyXG4gICAgICAgIFsxLCA3MCwgNTVdLFxyXG4gICAgICAgIFsxLCA3MCwgNDRdLFxyXG4gICAgICAgIFsyLCAzNSwgMTddLFxyXG4gICAgICAgIFsyLCAzNSwgMTNdLFxyXG5cclxuICAgICAgICAvLyA0XHJcbiAgICAgICAgWzEsIDEwMCwgODBdLFxyXG4gICAgICAgIFsyLCA1MCwgMzJdLFxyXG4gICAgICAgIFsyLCA1MCwgMjRdLFxyXG4gICAgICAgIFs0LCAyNSwgOV0sXHJcblxyXG4gICAgICAgIC8vIDVcclxuICAgICAgICBbMSwgMTM0LCAxMDhdLFxyXG4gICAgICAgIFsyLCA2NywgNDNdLFxyXG4gICAgICAgIFsyLCAzMywgMTUsIDIsIDM0LCAxNl0sXHJcbiAgICAgICAgWzIsIDMzLCAxMSwgMiwgMzQsIDEyXSxcclxuXHJcbiAgICAgICAgLy8gNlxyXG4gICAgICAgIFsyLCA4NiwgNjhdLFxyXG4gICAgICAgIFs0LCA0MywgMjddLFxyXG4gICAgICAgIFs0LCA0MywgMTldLFxyXG4gICAgICAgIFs0LCA0MywgMTVdLFxyXG5cclxuICAgICAgICAvLyA3XHJcbiAgICAgICAgWzIsIDk4LCA3OF0sXHJcbiAgICAgICAgWzQsIDQ5LCAzMV0sXHJcbiAgICAgICAgWzIsIDMyLCAxNCwgNCwgMzMsIDE1XSxcclxuICAgICAgICBbNCwgMzksIDEzLCAxLCA0MCwgMTRdLFxyXG5cclxuICAgICAgICAvLyA4XHJcbiAgICAgICAgWzIsIDEyMSwgOTddLFxyXG4gICAgICAgIFsyLCA2MCwgMzgsIDIsIDYxLCAzOV0sXHJcbiAgICAgICAgWzQsIDQwLCAxOCwgMiwgNDEsIDE5XSxcclxuICAgICAgICBbNCwgNDAsIDE0LCAyLCA0MSwgMTVdLFxyXG5cclxuICAgICAgICAvLyA5XHJcbiAgICAgICAgWzIsIDE0NiwgMTE2XSxcclxuICAgICAgICBbMywgNTgsIDM2LCAyLCA1OSwgMzddLFxyXG4gICAgICAgIFs0LCAzNiwgMTYsIDQsIDM3LCAxN10sXHJcbiAgICAgICAgWzQsIDM2LCAxMiwgNCwgMzcsIDEzXSxcclxuXHJcbiAgICAgICAgLy8gMTBcclxuICAgICAgICBbMiwgODYsIDY4LCAyLCA4NywgNjldLFxyXG4gICAgICAgIFs0LCA2OSwgNDMsIDEsIDcwLCA0NF0sXHJcbiAgICAgICAgWzYsIDQzLCAxOSwgMiwgNDQsIDIwXSxcclxuICAgICAgICBbNiwgNDMsIDE1LCAyLCA0NCwgMTZdLFxyXG5cclxuICAgICAgICAvLyAxMVxyXG4gICAgICAgIFs0LCAxMDEsIDgxXSxcclxuICAgICAgICBbMSwgODAsIDUwLCA0LCA4MSwgNTFdLFxyXG4gICAgICAgIFs0LCA1MCwgMjIsIDQsIDUxLCAyM10sXHJcbiAgICAgICAgWzMsIDM2LCAxMiwgOCwgMzcsIDEzXSxcclxuXHJcbiAgICAgICAgLy8gMTJcclxuICAgICAgICBbMiwgMTE2LCA5MiwgMiwgMTE3LCA5M10sXHJcbiAgICAgICAgWzYsIDU4LCAzNiwgMiwgNTksIDM3XSxcclxuICAgICAgICBbNCwgNDYsIDIwLCA2LCA0NywgMjFdLFxyXG4gICAgICAgIFs3LCA0MiwgMTQsIDQsIDQzLCAxNV0sXHJcblxyXG4gICAgICAgIC8vIDEzXHJcbiAgICAgICAgWzQsIDEzMywgMTA3XSxcclxuICAgICAgICBbOCwgNTksIDM3LCAxLCA2MCwgMzhdLFxyXG4gICAgICAgIFs4LCA0NCwgMjAsIDQsIDQ1LCAyMV0sXHJcbiAgICAgICAgWzEyLCAzMywgMTEsIDQsIDM0LCAxMl0sXHJcblxyXG4gICAgICAgIC8vIDE0XHJcbiAgICAgICAgWzMsIDE0NSwgMTE1LCAxLCAxNDYsIDExNl0sXHJcbiAgICAgICAgWzQsIDY0LCA0MCwgNSwgNjUsIDQxXSxcclxuICAgICAgICBbMTEsIDM2LCAxNiwgNSwgMzcsIDE3XSxcclxuICAgICAgICBbMTEsIDM2LCAxMiwgNSwgMzcsIDEzXSxcclxuXHJcbiAgICAgICAgLy8gMTVcclxuICAgICAgICBbNSwgMTA5LCA4NywgMSwgMTEwLCA4OF0sXHJcbiAgICAgICAgWzUsIDY1LCA0MSwgNSwgNjYsIDQyXSxcclxuICAgICAgICBbNSwgNTQsIDI0LCA3LCA1NSwgMjVdLFxyXG4gICAgICAgIFsxMSwgMzYsIDEyXSxcclxuXHJcbiAgICAgICAgLy8gMTZcclxuICAgICAgICBbNSwgMTIyLCA5OCwgMSwgMTIzLCA5OV0sXHJcbiAgICAgICAgWzcsIDczLCA0NSwgMywgNzQsIDQ2XSxcclxuICAgICAgICBbMTUsIDQzLCAxOSwgMiwgNDQsIDIwXSxcclxuICAgICAgICBbMywgNDUsIDE1LCAxMywgNDYsIDE2XSxcclxuXHJcbiAgICAgICAgLy8gMTdcclxuICAgICAgICBbMSwgMTM1LCAxMDcsIDUsIDEzNiwgMTA4XSxcclxuICAgICAgICBbMTAsIDc0LCA0NiwgMSwgNzUsIDQ3XSxcclxuICAgICAgICBbMSwgNTAsIDIyLCAxNSwgNTEsIDIzXSxcclxuICAgICAgICBbMiwgNDIsIDE0LCAxNywgNDMsIDE1XSxcclxuXHJcbiAgICAgICAgLy8gMThcclxuICAgICAgICBbNSwgMTUwLCAxMjAsIDEsIDE1MSwgMTIxXSxcclxuICAgICAgICBbOSwgNjksIDQzLCA0LCA3MCwgNDRdLFxyXG4gICAgICAgIFsxNywgNTAsIDIyLCAxLCA1MSwgMjNdLFxyXG4gICAgICAgIFsyLCA0MiwgMTQsIDE5LCA0MywgMTVdLFxyXG5cclxuICAgICAgICAvLyAxOVxyXG4gICAgICAgIFszLCAxNDEsIDExMywgNCwgMTQyLCAxMTRdLFxyXG4gICAgICAgIFszLCA3MCwgNDQsIDExLCA3MSwgNDVdLFxyXG4gICAgICAgIFsxNywgNDcsIDIxLCA0LCA0OCwgMjJdLFxyXG4gICAgICAgIFs5LCAzOSwgMTMsIDE2LCA0MCwgMTRdLFxyXG5cclxuICAgICAgICAvLyAyMFxyXG4gICAgICAgIFszLCAxMzUsIDEwNywgNSwgMTM2LCAxMDhdLFxyXG4gICAgICAgIFszLCA2NywgNDEsIDEzLCA2OCwgNDJdLFxyXG4gICAgICAgIFsxNSwgNTQsIDI0LCA1LCA1NSwgMjVdLFxyXG4gICAgICAgIFsxNSwgNDMsIDE1LCAxMCwgNDQsIDE2XSxcclxuXHJcbiAgICAgICAgLy8gMjFcclxuICAgICAgICBbNCwgMTQ0LCAxMTYsIDQsIDE0NSwgMTE3XSxcclxuICAgICAgICBbMTcsIDY4LCA0Ml0sXHJcbiAgICAgICAgWzE3LCA1MCwgMjIsIDYsIDUxLCAyM10sXHJcbiAgICAgICAgWzE5LCA0NiwgMTYsIDYsIDQ3LCAxN10sXHJcblxyXG4gICAgICAgIC8vIDIyXHJcbiAgICAgICAgWzIsIDEzOSwgMTExLCA3LCAxNDAsIDExMl0sXHJcbiAgICAgICAgWzE3LCA3NCwgNDZdLFxyXG4gICAgICAgIFs3LCA1NCwgMjQsIDE2LCA1NSwgMjVdLFxyXG4gICAgICAgIFszNCwgMzcsIDEzXSxcclxuXHJcbiAgICAgICAgLy8gMjNcclxuICAgICAgICBbNCwgMTUxLCAxMjEsIDUsIDE1MiwgMTIyXSxcclxuICAgICAgICBbNCwgNzUsIDQ3LCAxNCwgNzYsIDQ4XSxcclxuICAgICAgICBbMTEsIDU0LCAyNCwgMTQsIDU1LCAyNV0sXHJcbiAgICAgICAgWzE2LCA0NSwgMTUsIDE0LCA0NiwgMTZdLFxyXG5cclxuICAgICAgICAvLyAyNFxyXG4gICAgICAgIFs2LCAxNDcsIDExNywgNCwgMTQ4LCAxMThdLFxyXG4gICAgICAgIFs2LCA3MywgNDUsIDE0LCA3NCwgNDZdLFxyXG4gICAgICAgIFsxMSwgNTQsIDI0LCAxNiwgNTUsIDI1XSxcclxuICAgICAgICBbMzAsIDQ2LCAxNiwgMiwgNDcsIDE3XSxcclxuXHJcbiAgICAgICAgLy8gMjVcclxuICAgICAgICBbOCwgMTMyLCAxMDYsIDQsIDEzMywgMTA3XSxcclxuICAgICAgICBbOCwgNzUsIDQ3LCAxMywgNzYsIDQ4XSxcclxuICAgICAgICBbNywgNTQsIDI0LCAyMiwgNTUsIDI1XSxcclxuICAgICAgICBbMjIsIDQ1LCAxNSwgMTMsIDQ2LCAxNl0sXHJcblxyXG4gICAgICAgIC8vIDI2XHJcbiAgICAgICAgWzEwLCAxNDIsIDExNCwgMiwgMTQzLCAxMTVdLFxyXG4gICAgICAgIFsxOSwgNzQsIDQ2LCA0LCA3NSwgNDddLFxyXG4gICAgICAgIFsyOCwgNTAsIDIyLCA2LCA1MSwgMjNdLFxyXG4gICAgICAgIFszMywgNDYsIDE2LCA0LCA0NywgMTddLFxyXG5cclxuICAgICAgICAvLyAyN1xyXG4gICAgICAgIFs4LCAxNTIsIDEyMiwgNCwgMTUzLCAxMjNdLFxyXG4gICAgICAgIFsyMiwgNzMsIDQ1LCAzLCA3NCwgNDZdLFxyXG4gICAgICAgIFs4LCA1MywgMjMsIDI2LCA1NCwgMjRdLFxyXG4gICAgICAgIFsxMiwgNDUsIDE1LCAyOCwgNDYsIDE2XSxcclxuXHJcbiAgICAgICAgLy8gMjhcclxuICAgICAgICBbMywgMTQ3LCAxMTcsIDEwLCAxNDgsIDExOF0sXHJcbiAgICAgICAgWzMsIDczLCA0NSwgMjMsIDc0LCA0Nl0sXHJcbiAgICAgICAgWzQsIDU0LCAyNCwgMzEsIDU1LCAyNV0sXHJcbiAgICAgICAgWzExLCA0NSwgMTUsIDMxLCA0NiwgMTZdLFxyXG5cclxuICAgICAgICAvLyAyOVxyXG4gICAgICAgIFs3LCAxNDYsIDExNiwgNywgMTQ3LCAxMTddLFxyXG4gICAgICAgIFsyMSwgNzMsIDQ1LCA3LCA3NCwgNDZdLFxyXG4gICAgICAgIFsxLCA1MywgMjMsIDM3LCA1NCwgMjRdLFxyXG4gICAgICAgIFsxOSwgNDUsIDE1LCAyNiwgNDYsIDE2XSxcclxuXHJcbiAgICAgICAgLy8gMzBcclxuICAgICAgICBbNSwgMTQ1LCAxMTUsIDEwLCAxNDYsIDExNl0sXHJcbiAgICAgICAgWzE5LCA3NSwgNDcsIDEwLCA3NiwgNDhdLFxyXG4gICAgICAgIFsxNSwgNTQsIDI0LCAyNSwgNTUsIDI1XSxcclxuICAgICAgICBbMjMsIDQ1LCAxNSwgMjUsIDQ2LCAxNl0sXHJcblxyXG4gICAgICAgIC8vIDMxXHJcbiAgICAgICAgWzEzLCAxNDUsIDExNSwgMywgMTQ2LCAxMTZdLFxyXG4gICAgICAgIFsyLCA3NCwgNDYsIDI5LCA3NSwgNDddLFxyXG4gICAgICAgIFs0MiwgNTQsIDI0LCAxLCA1NSwgMjVdLFxyXG4gICAgICAgIFsyMywgNDUsIDE1LCAyOCwgNDYsIDE2XSxcclxuXHJcbiAgICAgICAgLy8gMzJcclxuICAgICAgICBbMTcsIDE0NSwgMTE1XSxcclxuICAgICAgICBbMTAsIDc0LCA0NiwgMjMsIDc1LCA0N10sXHJcbiAgICAgICAgWzEwLCA1NCwgMjQsIDM1LCA1NSwgMjVdLFxyXG4gICAgICAgIFsxOSwgNDUsIDE1LCAzNSwgNDYsIDE2XSxcclxuXHJcbiAgICAgICAgLy8gMzNcclxuICAgICAgICBbMTcsIDE0NSwgMTE1LCAxLCAxNDYsIDExNl0sXHJcbiAgICAgICAgWzE0LCA3NCwgNDYsIDIxLCA3NSwgNDddLFxyXG4gICAgICAgIFsyOSwgNTQsIDI0LCAxOSwgNTUsIDI1XSxcclxuICAgICAgICBbMTEsIDQ1LCAxNSwgNDYsIDQ2LCAxNl0sXHJcblxyXG4gICAgICAgIC8vIDM0XHJcbiAgICAgICAgWzEzLCAxNDUsIDExNSwgNiwgMTQ2LCAxMTZdLFxyXG4gICAgICAgIFsxNCwgNzQsIDQ2LCAyMywgNzUsIDQ3XSxcclxuICAgICAgICBbNDQsIDU0LCAyNCwgNywgNTUsIDI1XSxcclxuICAgICAgICBbNTksIDQ2LCAxNiwgMSwgNDcsIDE3XSxcclxuXHJcbiAgICAgICAgLy8gMzVcclxuICAgICAgICBbMTIsIDE1MSwgMTIxLCA3LCAxNTIsIDEyMl0sXHJcbiAgICAgICAgWzEyLCA3NSwgNDcsIDI2LCA3NiwgNDhdLFxyXG4gICAgICAgIFszOSwgNTQsIDI0LCAxNCwgNTUsIDI1XSxcclxuICAgICAgICBbMjIsIDQ1LCAxNSwgNDEsIDQ2LCAxNl0sXHJcblxyXG4gICAgICAgIC8vIDM2XHJcbiAgICAgICAgWzYsIDE1MSwgMTIxLCAxNCwgMTUyLCAxMjJdLFxyXG4gICAgICAgIFs2LCA3NSwgNDcsIDM0LCA3NiwgNDhdLFxyXG4gICAgICAgIFs0NiwgNTQsIDI0LCAxMCwgNTUsIDI1XSxcclxuICAgICAgICBbMiwgNDUsIDE1LCA2NCwgNDYsIDE2XSxcclxuXHJcbiAgICAgICAgLy8gMzdcclxuICAgICAgICBbMTcsIDE1MiwgMTIyLCA0LCAxNTMsIDEyM10sXHJcbiAgICAgICAgWzI5LCA3NCwgNDYsIDE0LCA3NSwgNDddLFxyXG4gICAgICAgIFs0OSwgNTQsIDI0LCAxMCwgNTUsIDI1XSxcclxuICAgICAgICBbMjQsIDQ1LCAxNSwgNDYsIDQ2LCAxNl0sXHJcblxyXG4gICAgICAgIC8vIDM4XHJcbiAgICAgICAgWzQsIDE1MiwgMTIyLCAxOCwgMTUzLCAxMjNdLFxyXG4gICAgICAgIFsxMywgNzQsIDQ2LCAzMiwgNzUsIDQ3XSxcclxuICAgICAgICBbNDgsIDU0LCAyNCwgMTQsIDU1LCAyNV0sXHJcbiAgICAgICAgWzQyLCA0NSwgMTUsIDMyLCA0NiwgMTZdLFxyXG5cclxuICAgICAgICAvLyAzOVxyXG4gICAgICAgIFsyMCwgMTQ3LCAxMTcsIDQsIDE0OCwgMTE4XSxcclxuICAgICAgICBbNDAsIDc1LCA0NywgNywgNzYsIDQ4XSxcclxuICAgICAgICBbNDMsIDU0LCAyNCwgMjIsIDU1LCAyNV0sXHJcbiAgICAgICAgWzEwLCA0NSwgMTUsIDY3LCA0NiwgMTZdLFxyXG5cclxuICAgICAgICAvLyA0MFxyXG4gICAgICAgIFsxOSwgMTQ4LCAxMTgsIDYsIDE0OSwgMTE5XSxcclxuICAgICAgICBbMTgsIDc1LCA0NywgMzEsIDc2LCA0OF0sXHJcbiAgICAgICAgWzM0LCA1NCwgMjQsIDM0LCA1NSwgMjVdLFxyXG4gICAgICAgIFsyMCwgNDUsIDE1LCA2MSwgNDYsIDE2XVxyXG4gICAgXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOagueaNruaVsOaNruiOt+WPluWvueW6lOeJiOacrFxyXG4gICAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXHJcbiAgICAgKi9cclxuICAgIFFSQ29kZUFsZy5wcm90b3R5cGUuZ2V0UmlnaHRUeXBlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZvciAodmFyIHR5cGVOdW1iZXIgPSAxOyB0eXBlTnVtYmVyIDwgNDE7IHR5cGVOdW1iZXIrKykge1xyXG4gICAgICAgICAgICB2YXIgcnNCbG9jayA9IFJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyIC0gMSkgKiA0ICsgdGhpcy5lcnJvckNvcnJlY3RMZXZlbF07XHJcbiAgICAgICAgICAgIGlmIChyc0Jsb2NrID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYmFkIHJzIGJsb2NrIEAgdHlwZU51bWJlcjpcIiArIHR5cGVOdW1iZXIgKyBcIi9lcnJvckNvcnJlY3RMZXZlbDpcIiArIHRoaXMuZXJyb3JDb3JyZWN0TGV2ZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBsZW5ndGggPSByc0Jsb2NrLmxlbmd0aCAvIDM7XHJcbiAgICAgICAgICAgIHZhciB0b3RhbERhdGFDb3VudCA9IDA7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb3VudCA9IHJzQmxvY2tbaSAqIDMgKyAwXTtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhQ291bnQgPSByc0Jsb2NrW2kgKiAzICsgMl07XHJcbiAgICAgICAgICAgICAgICB0b3RhbERhdGFDb3VudCArPSBkYXRhQ291bnQgKiBjb3VudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgbGVuZ3RoQnl0ZXMgPSB0eXBlTnVtYmVyID4gOSA/IDIgOiAxO1xyXG4gICAgICAgICAgICBpZiAodGhpcy51dGY4Ynl0ZXMubGVuZ3RoICsgbGVuZ3RoQnl0ZXMgPCB0b3RhbERhdGFDb3VudCB8fCB0eXBlTnVtYmVyID09IDQwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGVOdW1iZXIgPSB0eXBlTnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yc0Jsb2NrID0gcnNCbG9jaztcclxuICAgICAgICAgICAgICAgIHRoaXMudG90YWxEYXRhQ291bnQgPSB0b3RhbERhdGFDb3VudDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gUVJCaXRCdWZmZXJcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBmdW5jdGlvbiBRUkJpdEJ1ZmZlcigpIHtcclxuICAgICAgICB0aGlzLmJ1ZmZlciA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMubGVuZ3RoID0gMDtcclxuICAgIH1cclxuICAgIFFSQml0QnVmZmVyLnByb3RvdHlwZSA9IHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgICAgICB2YXIgYnVmSW5kZXggPSBNYXRoLmZsb29yKGluZGV4IC8gOCk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKHRoaXMuYnVmZmVyW2J1ZkluZGV4XSA+Pj4gKDcgLSBpbmRleCAlIDgpKSAmIDEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHV0OiBmdW5jdGlvbiAobnVtLCBsZW5ndGgpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wdXRCaXQoKChudW0gPj4+IChsZW5ndGggLSBpIC0gMSkpICYgMSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwdXRCaXQ6IGZ1bmN0aW9uIChiaXQpIHtcclxuICAgICAgICAgICAgdmFyIGJ1ZkluZGV4ID0gTWF0aC5mbG9vcih0aGlzLmxlbmd0aCAvIDgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5idWZmZXIubGVuZ3RoIDw9IGJ1ZkluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlci5wdXNoKDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChiaXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyW2J1ZkluZGV4XSB8PSAoMHg4MCA+Pj4gKHRoaXMubGVuZ3RoICUgOCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoKys7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG5cclxuICAgIC8vIHh6ZWRpdFxyXG4gICAgbGV0IHFyY29kZUFsZ09iakNhY2hlID0gW107XHJcbiAgICAvKipcclxuICAgICAqIOS6jOe7tOeggeaehOmAoOWHveaVsO+8jOS4u+imgeeUqOS6jue7mOWItlxyXG4gICAgICogQHBhcmFtICB75Y+C5pWw5YiX6KGofSBvcHQg5Lyg6YCS5Y+C5pWwXHJcbiAgICAgKiBAcmV0dXJuIHt9XHJcbiAgICAgKi9cclxuICAgIFFSQ29kZSA9IGZ1bmN0aW9uIChvcHQpIHtcclxuICAgICAgICAvL+iuvue9rum7mOiupOWPguaVsFxyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHNpemU6IDI1NixcclxuICAgICAgICAgICAgY29ycmVjdExldmVsOiAzLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgICAgIGZvcmVncm91bmQ6ICcjMDAwMDAwJyxcclxuICAgICAgICAgICAgcGRncm91bmQ6ICcjMDAwMDAwJyxcclxuICAgICAgICAgICAgaW1hZ2U6ICcnLFxyXG4gICAgICAgICAgICBpbWFnZVNpemU6IDMwLFxyXG4gICAgICAgICAgICBjYW52YXNJZDogb3B0LmNhbnZhc0lkLFxyXG4gICAgICAgICAgICBjb250ZXh0OiBvcHQuY29udGV4dCxcclxuICAgICAgICAgICAgdXNpbmdDb21wb25lbnRzOiBvcHQudXNpbmdDb21wb25lbnRzLFxyXG4gICAgICAgICAgICBzaG93TG9hZGluZzogb3B0LnNob3dMb2FkaW5nLFxyXG4gICAgICAgICAgICBsb2FkaW5nVGV4dDogb3B0LmxvYWRpbmdUZXh0LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHQgPT09ICdzdHJpbmcnKSB7IC8vIOWPque8lueggUFTQ0lJ5a2X56ym5LiyXHJcbiAgICAgICAgICAgIG9wdCA9IHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IG9wdFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3B0KSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gb3B0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNbaV0gPSBvcHRbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/kvb/nlKhRUkNvZGVBbGfliJvlu7rkuoznu7TnoIHnu5PmnoRcclxuICAgICAgICB2YXIgcXJDb2RlQWxnID0gbnVsbDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHFyY29kZUFsZ09iakNhY2hlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAocXJjb2RlQWxnT2JqQ2FjaGVbaV0udGV4dCA9PSB0aGlzLm9wdGlvbnMudGV4dCAmJiBxcmNvZGVBbGdPYmpDYWNoZVtpXS50ZXh0LmNvcnJlY3RMZXZlbCA9PSB0aGlzLm9wdGlvbnMuY29ycmVjdExldmVsKSB7XHJcbiAgICAgICAgICAgICAgICBxckNvZGVBbGcgPSBxcmNvZGVBbGdPYmpDYWNoZVtpXS5vYmo7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaSA9PSBsKSB7XHJcbiAgICAgICAgICAgIHFyQ29kZUFsZyA9IG5ldyBRUkNvZGVBbGcodGhpcy5vcHRpb25zLnRleHQsIHRoaXMub3B0aW9ucy5jb3JyZWN0TGV2ZWwpO1xyXG4gICAgICAgICAgICBxcmNvZGVBbGdPYmpDYWNoZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMub3B0aW9ucy50ZXh0LFxyXG4gICAgICAgICAgICAgICAgY29ycmVjdExldmVsOiB0aGlzLm9wdGlvbnMuY29ycmVjdExldmVsLFxyXG4gICAgICAgICAgICAgICAgb2JqOiBxckNvZGVBbGdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOiuoeeul+efqemYteeCueeahOWJjeaZr+iJslxyXG4gICAgICAgICAqIEBwYXJhbSB7T2JqfSBjb25maWdcclxuICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gY29uZmlnLnJvdyDngrl45Z2Q5qCHXHJcbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbmZpZy5jb2wg54K5eeWdkOagh1xyXG4gICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBjb25maWcuY291bnQg55+p6Zi15aSn5bCPXHJcbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbmZpZy5vcHRpb25zIOe7hOS7tueahG9wdGlvbnNcclxuICAgICAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbGV0IGdldEZvcmVHcm91bmQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XHJcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gY29uZmlnLm9wdGlvbnM7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnBkZ3JvdW5kICYmIChcclxuICAgICAgICAgICAgICAgIChjb25maWcucm93ID4gMSAmJiBjb25maWcucm93IDwgNSAmJiBjb25maWcuY29sID4gMSAmJiBjb25maWcuY29sIDwgNSkgfHxcclxuICAgICAgICAgICAgICAgIChjb25maWcucm93ID4gKGNvbmZpZy5jb3VudCAtIDYpICYmIGNvbmZpZy5yb3cgPCAoY29uZmlnLmNvdW50IC0gMikgJiYgY29uZmlnLmNvbCA+IDEgJiYgY29uZmlnLmNvbCA8IDUpIHx8XHJcbiAgICAgICAgICAgICAgICAoY29uZmlnLnJvdyA+IDEgJiYgY29uZmlnLnJvdyA8IDUgJiYgY29uZmlnLmNvbCA+IChjb25maWcuY291bnQgLSA2KSAmJiBjb25maWcuY29sIDwgKGNvbmZpZy5jb3VudCAtIDIpKVxyXG4gICAgICAgICAgICApKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5wZGdyb3VuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mb3JlZ3JvdW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDliJvlu7pjYW52YXNcclxuICAgICAgICBsZXQgY3JlYXRlQ2FudmFzID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc2hvd0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgICAgIHVuaS5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IG9wdGlvbnMubG9hZGluZ1RleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGN0eCA9IHVuaS5jcmVhdGVDYW52YXNDb250ZXh0KG9wdGlvbnMuY2FudmFzSWQsIG9wdGlvbnMuY29udGV4dCk7XHJcbiAgICAgICAgICAgIHZhciBjb3VudCA9IHFyQ29kZUFsZy5nZXRNb2R1bGVDb3VudCgpO1xyXG4gICAgICAgICAgICB2YXIgcmF0aW9TaXplID0gb3B0aW9ucy5zaXplO1xyXG4gICAgICAgICAgICB2YXIgcmF0aW9JbWdTaXplID0gb3B0aW9ucy5pbWFnZVNpemU7XHJcbiAgICAgICAgICAgIC8v6K6h566X5q+P5Liq54K555qE6ZW/5a69XHJcbiAgICAgICAgICAgIHZhciB0aWxlVyA9IChyYXRpb1NpemUgLyBjb3VudCkudG9QcmVjaXNpb24oNCk7XHJcbiAgICAgICAgICAgIHZhciB0aWxlSCA9IChyYXRpb1NpemUgLyBjb3VudCkudG9QcmVjaXNpb24oNCk7XHJcbiAgICAgICAgICAgIC8v57uY5Yi2XHJcbiAgICAgICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IGNvdW50OyByb3crKykge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgY291bnQ7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHcgPSAoTWF0aC5jZWlsKChjb2wgKyAxKSAqIHRpbGVXKSAtIE1hdGguZmxvb3IoY29sICogdGlsZVcpKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaCA9IChNYXRoLmNlaWwoKHJvdyArIDEpICogdGlsZVcpIC0gTWF0aC5mbG9vcihyb3cgKiB0aWxlVykpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmb3JlZ3JvdW5kID0gZ2V0Rm9yZUdyb3VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogcm93LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2w6IGNvbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IGNvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LnNldEZpbGxTdHlsZShxckNvZGVBbGcubW9kdWxlc1tyb3ddW2NvbF0gPyBmb3JlZ3JvdW5kIDogb3B0aW9ucy5iYWNrZ3JvdW5kKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoTWF0aC5yb3VuZChjb2wgKiB0aWxlVyksIE1hdGgucm91bmQocm93ICogdGlsZUgpLCB3LCBoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5pbWFnZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHggPSBOdW1iZXIoKChyYXRpb1NpemUgLSByYXRpb0ltZ1NpemUpIC8gMikudG9GaXhlZCgyKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgeSA9IE51bWJlcigoKHJhdGlvU2l6ZSAtIHJhdGlvSW1nU2l6ZSkgLyAyKS50b0ZpeGVkKDIpKTtcclxuICAgICAgICAgICAgICAgIGRyYXdSb3VuZGVkUmVjdChjdHgsIHgsIHksIHJhdGlvSW1nU2l6ZSwgcmF0aW9JbWdTaXplLCAyLCA2LCB0cnVlLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShvcHRpb25zLmltYWdlLCB4LCB5LCByYXRpb0ltZ1NpemUsIHJhdGlvSW1nU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAvLyDnlLvlnIbop5Lnn6nlvaJcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRyYXdSb3VuZGVkUmVjdChjdHhpLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCByLCBsaW5lV2lkdGgsIGZpbGwsIHN0cm9rZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eGkuc2V0TGluZVdpZHRoKGxpbmVXaWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4aS5zZXRGaWxsU3R5bGUob3B0aW9ucy5iYWNrZ3JvdW5kKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHhpLnNldFN0cm9rZVN0eWxlKG9wdGlvbnMuYmFja2dyb3VuZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4aS5iZWdpblBhdGgoKTsgLy8gZHJhdyB0b3AgYW5kIHRvcCByaWdodCBjb3JuZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgY3R4aS5tb3ZlVG8oeCArIHIsIHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eGkuYXJjVG8oeCArIHdpZHRoLCB5LCB4ICsgd2lkdGgsIHkgKyByLCByKTsgLy8gZHJhdyByaWdodCBzaWRlIGFuZCBib3R0b20gcmlnaHQgY29ybmVyIFxyXG4gICAgICAgICAgICAgICAgICAgIGN0eGkuYXJjVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0LCB4ICsgd2lkdGggLSByLCB5ICsgaGVpZ2h0LCByKTsgLy8gZHJhdyBib3R0b20gYW5kIGJvdHRvbSBsZWZ0IGNvcm5lciBcclxuICAgICAgICAgICAgICAgICAgICBjdHhpLmFyY1RvKHgsIHkgKyBoZWlnaHQsIHgsIHkgKyBoZWlnaHQgLSByLCByKTsgLy8gZHJhdyBsZWZ0IGFuZCB0b3AgbGVmdCBjb3JuZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgY3R4aS5hcmNUbyh4LCB5LCB4ICsgciwgeSwgcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4aS5jbG9zZVBhdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdHhpLmZpbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cm9rZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdHhpLnN0cm9rZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGN0eC5kcmF3KHRydWUsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDkv53lrZjliLDkuLTml7bljLrln59cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5pLmNhbnZhc1RvVGVtcEZpbGVQYXRoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBvcHRpb25zLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBvcHRpb25zLmhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RXaWR0aDogb3B0aW9ucy53aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RIZWlnaHQ6IG9wdGlvbnMuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FudmFzSWQ6IG9wdGlvbnMuY2FudmFzSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWFsaXR5OiBOdW1iZXIoMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuY2JSZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5jYlJlc3VsdChyZXMudGVtcEZpbGVQYXRoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuY2JSZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5jYlJlc3VsdChyZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuc2hvd0xvYWRpbmcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmkuaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBvcHRpb25zLmNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIG9wdGlvbnMudGV4dC5sZW5ndGggKyAxMDApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMudXNpbmdDb21wb25lbnRzID8gMCA6IDE1MCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNyZWF0ZUNhbnZhcyh0aGlzLm9wdGlvbnMpO1xyXG4gICAgICAgIC8vIOepuuWIpOWumlxyXG4gICAgICAgIGxldCBlbXB0eSA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgIGxldCB0cCA9IHR5cGVvZiB2LFxyXG4gICAgICAgICAgICAgICAgcnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHRwID09IFwibnVtYmVyXCIgJiYgU3RyaW5nKHYpID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHJ0ID0gdHJ1ZVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRwID09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIHJ0ID0gdHJ1ZVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRwID09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeSh2KSA9PSBcInt9XCIgfHwgSlNPTi5zdHJpbmdpZnkodikgPT0gXCJbXVwiIHx8IHYgPT0gbnVsbCkgcnQgPSB0cnVlXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHAgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHYgPT0gXCJcIiB8fCB2ID09IFwidW5kZWZpbmVkXCIgfHwgdiA9PSBcIm51bGxcIiB8fCB2ID09IFwie31cIiB8fCB2ID09IFwiW11cIikgcnQgPSB0cnVlXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHAgPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBydCA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJ0XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFFSQ29kZS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoZm4pIHtcclxuICAgICAgICB2YXIgY3R4ID0gdW5pLmNyZWF0ZUNhbnZhc0NvbnRleHQodGhpcy5vcHRpb25zLmNhbnZhc0lkLCB0aGlzLm9wdGlvbnMuY29udGV4dClcclxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMub3B0aW9ucy5zaXplLCB0aGlzLm9wdGlvbnMuc2l6ZSlcclxuICAgICAgICBjdHguZHJhdyhmYWxzZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZm4pIHtcclxuICAgICAgICAgICAgICAgIGZuKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG59KSgpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBRUkNvZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */
/*!*************************************************************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/pages/main/main.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./main.vue?vue&type=script&lang=js&mpType=page */ 30);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJpQixDQUFnQixxa0JBQUcsRUFBQyIsImZpbGUiOiIyOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21haW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21haW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/application/HbuilderXAPP/hgApp/pages/main/main.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _vuex = __webpack_require__(/*! vuex */ 7);\n\n\n\n\nvar _tkiQrcode = _interopRequireDefault(__webpack_require__(/*! @/components/tki-qrcode/tki-qrcode.vue */ 23));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =\n{\n  data: function data() {\n    return {\n\n      cid: \"20\",\n      size: 160,\n      val: \"\",\n      onval: true,\n      loadMake: false,\n      showLoading: false,\n      loadingText: \"二维码生成中\",\n      units: \"px\",\n\n      array: ['123131', '45323213', '45654321', '96353434'],\n      index: 0,\n      date: \"\",\n      ip: \"\",\n      port: \"\",\n      scPlanArray: [\"请选择生产计划号\"],\n      scPlanData: [],\n      scBatchNo: \"\", //生产批次号,\n      cpName: \"\", //产品名称\n      deptName: \"\", //生产班组\n      cxNo: \"\", //产线\n      startTimeStr: \"\", //生产时间\n      scBbatchNameList: [\"请选择锅次号\"], //锅次号名称列表\n      scBbatchList: [], //锅次号列表\n      i: 0, //锅次号的下标\n      MaterialList: [], //物料详情列表\n      MaterialNameList: [\"请选择物料名称\"], //物料名称列表\n      k: 0, //物料名称列表的下标\n      amount: \"\", //目标重量\n      unit: \"\", //物料规格\n      countNumber: \"\", //点数数量\n      oddNumber: \"\", //零头重量\n      lrNumber: \"\", //零头重量手动录入\n      lrImg: \"\", //零头重量手动录入\n      countImg: \"\", //点数数量拍照\n      oddImg: \"\", //零头重量拍照\n      spc: 0, //物料规格列表的下标\n      materialSpc: [\"请选择物料规格\", \"25\", \"50\"],\n      mployList: [], //点料人员信息列表\n      mployNameList: [\"请选择点料人员\"], //点料人员姓名列表\n      j: 0, //点料人员列表下标\n      tlQrCode: \"\", //二维码返回path路径\n      qrcodeData: \"\", //二维码携带的数据\n      QRCodeStr: \"\" //拼接后的二维码存放的数据\n    };\n  },\n  computed: _objectSpread(_objectSpread({},\n  (0, _vuex.mapState)(['forcedLogin', 'hasLogin', 'userName'])), {}, {\n    startDate: function startDate() {\n      return this.getDate('startTimeStr');\n    },\n    endDate: function endDate() {\n      return this.getDate('end');\n    } }),\n\n\n  components: {},\n\n\n\n  mounted: function mounted() {\n    this.onLoading();\n\n  },\n  watch: {\n    tlQrCode: function tlQrCode(newVal, oldVal) {\n      if (newVal) {\n        this.onSave();\n      }\n    },\n    unit: function unit(newVal, oldVal) {\n      this.countNumber = parseInt(this.amount / this.unit);\n      this.oddNumber = (this.amount % this.unit).toFixed(2);\n    } },\n\n  methods: _objectSpread(_objectSpread({},\n  (0, _vuex.mapMutations)(['login'])), {}, {\n    onComfirmUpData: function onComfirmUpData() {\n      // 先验证数据有没有填写\n      if (this.oddNumber > 0 && !this.oddImg) {\n        uni.showToast({\n          icon: \"none\",\n          title: \"零头重量不为0需要拍照\" });\n\n        return;\n      }\n\n      if (this.countNumber > 0 && !this.countImg) {\n        uni.showToast({\n          icon: \"none\",\n          title: \"点数数量不为0需要拍照\" });\n\n        return;\n      }\n\n      if (this.lrNumber > 0 && !this.lrImg) {\n        uni.showToast({\n          icon: \"none\",\n          title: \"录入重量不为0需要拍照\" });\n\n        return;\n      }\n\n      if (this.index && this.i && this.k && this.j) {\n        this.onReadyQRcode();\n      } else {\n        uni.showToast({\n          icon: \"none\",\n          title: \"请先填写数据\" });\n\n        return;\n      }\n    },\n\n    onScBbatch: function onScBbatch() {\n      if (this.index == 0) {\n        uni.showToast({\n          icon: \"none\",\n          title: \"请先选择生产计划号\" });\n\n      }\n    },\n    onMaterial: function onMaterial() {\n      if (this.i == 0) {\n        uni.showToast({\n          icon: \"none\",\n          title: \"请先选择锅次号\" });\n\n      }\n    },\n    onMaterialSpc: function onMaterialSpc() {\n      if (this.k == 0) {\n        uni.showToast({\n          icon: \"none\",\n          title: \"请先选择物料名称\" });\n\n      }\n    },\n    onReadyQRcode: function onReadyQRcode() {\n      uni.showLoading({\n        mask: true,\n        title: \"保存中\" });\n\n\n      if (this.lrNumber > 0) {\n        this.oddNumber = this.lrNumber;\n      }\n      this.qrcodeData = {\n        \"生产计划号\": this.scPlanData[this.index - 1].scPlanNo,\n        \"生产批次号\": this.scPlanData[this.index - 1].scBatchNo,\n        \"产品名称\": this.scPlanData[this.index - 1].cpName,\n        \"生产日期\": this.startTimeStr,\n        \"锅次号\": this.scBbatchList[this.i - 1].scBatchF,\n        \"产线名称\": this.scPlanData[this.index - 1].cxNo,\n        \"物料名称\": this.MaterialList[this.k - 1].materialName,\n        \"物料编号\": this.MaterialList[this.k - 1].materialId,\n        \"目标重量\": Number(this.unit * this.countNumber) + Number(this.oddNumber),\n        \"物料规格\": this.unit };\n\n      for (var i in this.qrcodeData) {\n        if (this.qrcodeData[i]) {\n          this.QRCodeStr += \"\".concat(i, \":\").concat(this.qrcodeData[i], \";\");\n        }\n      };\n      this.val = this.QRCodeStr;\n\n    },\n    qrR: function qrR(res) {var _this = this;\n      uni.getImageInfo({\n        src: res,\n        success: function success(img) {\n          _this.onUploadFile(img.path, \"tlQrCode\");\n        } });\n\n    },\n    onSave: function onSave() {var _this2 = this;\n\n      if (this.lrNumber > 0) {\n        this.oddNumber = this.lrNumber;\n        this.oddImg = this.lrImg;\n      }\n      var data = {\n        scPlanQR: {\n          scPlanNo: this.scPlanData[this.index - 1].scPlanNo,\n          scBatchF: this.scBbatchList[this.i - 1].scBatchF,\n          materialId: this.MaterialList[this.k - 1].materialId,\n          unit: this.unit + \"kg*1\",\n          employId: this.mployList[this.j - 1].empNo,\n          countNumber: this.countNumber,\n          allNumber: Number(this.unit * this.countNumber) + Number(this.oddNumber),\n          countImg: this.countImg,\n          oddNumber: this.oddNumber,\n          oddImg: this.oddImg,\n          qrImg: this.tlQrCode,\n          qrText: this.QRCodeStr } };\n\n\n\n\n      this.$api.getSave(this.ip, data).then(function (res) {\n        if (res.statusCode == 200) {\n          uni.showToast({\n            title: \"保存成功\",\n            success: function success() {\n              _this2.onGoProductCode(true);\n            } });\n\n        }\n      });\n    },\n    onLoading: function onLoading() {var _this3 = this;\n\n      uni.getStorage({\n        key: \"port\",\n        success: function success(res) {\n          if (res.data) {\n            _this3.port = res.data;\n          }\n        },\n        complete: function complete() {\n          uni.getStorage({\n            key: \"ip\",\n            success: function success(res) {\n\n              if (_this3.port) {\n                _this3.ip = \"\".concat(res.data, \":\").concat(_this3.port);\n              } else {\n                _this3.ip = res.data;\n              }\n              _this3.onQueryPlanNum();\n              _this3.onGetEmployList();\n\n            } });\n\n        } });\n\n    },\n    onGetScBbatchList: function onGetScBbatchList() {var _this4 = this;\n      this.$api.getScBbatchList(this.ip, this.scPlanArray[this.index]).then(function (res) {\n        if (res.statusCode == 200) {\n          _this4.scBbatchList = res.data;\n          if (res.data.length > 0) {\n            _this4.scBbatchNameList = [\"请选择锅次号\"];\n            res.data.forEach(function (item) {\n              _this4.scBbatchNameList.push(item.scBatchF);\n            });\n          }\n        }\n      });\n    },\n    onGetEmployList: function onGetEmployList() {var _this5 = this;\n      this.$api.getEmployList(this.ip).then(function (res) {\n        if (res.statusCode == 200) {\n          if (res.data.length > 0) {\n            _this5.mployList = res.data;\n            _this5.mployList.forEach(function (item) {\n              _this5.mployNameList.push(item.name);\n            });\n          }\n\n\n        }\n      });\n    },\n    onGetMaterialList: function onGetMaterialList() {var _this6 = this;\n      this.$api.getMaterialList(this.ip, this.scBbatchList[this.i - 1].scBatchF).then(function (res) {\n        if (res.statusCode == 200) {\n          if (res.data.length > 0) {\n            _this6.MaterialList = res.data;\n            _this6.MaterialNameList = [\"请选择物料名称\"];\n            res.data.forEach(function (item) {\n              _this6.MaterialNameList.push(item.materialName);\n            });\n          }\n        }\n      });\n    },\n\n    onQueryPlanNum: function onQueryPlanNum() {var _this7 = this;\n      this.$api.queryPlanNum(this.ip).then(function (res) {\n        if (res.statusCode == 200) {\n          _this7.scPlanData = res.data;\n          if (res.data.length > 0) {\n            _this7.scPlanArray = [\"请选择生产计划号\"];\n            res.data.forEach(function (item) {\n              _this7.scPlanArray.push(item.scPlanNo);\n            });\n          }\n\n        } else {\n          uni.showToast({\n            title: res.errMsg });\n\n        }\n      });\n    },\n    bindMaterialSpcChange: function bindMaterialSpcChange(e) {\n      this.spc = e.target.value;\n      if (this.spc) {\n        this.unit = this.materialSpc[this.spc];\n      } else {\n        this.oddNumber = 0;\n        this.countNumber = 0;\n      }\n    },\n    bindPickerChange: function bindPickerChange(e) {\n\n      if (this.index == e.target.value) return;\n\n      this.index = e.target.value;\n      if (this.index > 0) {\n        this.scBatchNo = this.scPlanData[this.index - 1].scBatchNo;\n        this.cpName = this.scPlanData[this.index - 1].cpName;\n        this.deptName = this.scPlanData[this.index - 1].deptName;\n        this.cxNo = this.scPlanData[this.index - 1].cxNo;\n        this.startTimeStr = this.scPlanData[this.index - 1].startTimeStr;\n        this.amount = this.scPlanData[this.index - 1].amount;\n        this.unit = this.scPlanData[this.index - 1].unit;\n        this.countNumber = this.scPlanData[this.index - 1].countNumber;\n        this.oddNumber = this.scPlanData[this.index - 1].oddNumber;\n        this.i = 0;\n        this.k = 0;\n        this.onGetScBbatchList();\n      } else {\n        this.index = 0;\n        this.i = 0;\n        this.k = 0;\n        this.scBatchNo = \"\";\n        this.cpName = \"\";\n        this.startTimeStr = \"\";\n        this.deptName = \"\";\n        this.cxNo = \"\";\n        this.amount = \"\";\n      }\n    },\n    bindMaterialChange: function bindMaterialChange(e) {\n\n      this.k = e.target.value;\n      if (this.k) {\n        this.amount = this.MaterialList[this.k - 1].amount;\n      } else {\n        this.amount = \"\";\n      }\n\n    },\n    bindScBbatchChange: function bindScBbatchChange(e) {\n      this.i = e.target.value;\n      if (this.i) {\n        this.k = 0;\n        this.onGetMaterialList();\n      }\n    },\n    bindMployChange: function bindMployChange(e) {\n      this.j = e.target.value;\n    },\n\n    bindDateChange: function bindDateChange(e) {\n      this.startTimeStr = e.target.value;\n    },\n    getDate: function getDate(type) {\n      var date = new Date();\n      var year = date.getFullYear();\n      var month = date.getMonth() + 1;\n      var day = date.getDate();\n\n      if (type === 'start') {\n        year = year - 60;\n      } else if (type === 'end') {\n        year = year + 2;\n      }\n      month = month > 9 ? month : '0' + month;;\n      day = day > 9 ? day : '0' + day;\n      return \"\".concat(year, \"-\").concat(month, \"-\").concat(day);\n    },\n    onChooseImg: function onChooseImg(textName) {var _this8 = this;\n      uni.chooseImage({\n        count: 1, //默认9\n        sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有\n        sourceType: ['camera'], //从相册选择\n        success: function success(res) {\n          uni.getImageInfo({\n            src: res.tempFilePaths[0],\n            success: function success(img) {\n\n              _this8.onUploadFile(img.path, textName);\n            } });\n\n\n\n        } });\n\n    },\n    onUploadFile: function onUploadFile(file, textName) {var _this9 = this;\n      this.$api.uploadFile(this.ip, file).then(function (res) {\n\n        if (res.statusCode == 200) {\n          _this9[textName] = res.data.path;\n        }\n      });\n    },\n    onGoProductCode: function onGoProductCode(dataSatus) {\n      if (dataSatus) {\n        // this.index = 0;\n        this.i = 0;\n        this.k = 0;\n        this.j = 0;\n        this.spc = 0;\n        this.tlQrCode = \"\";\n        // this.scBatchNo=\"\";\n        // this.cpName=\"\";\n        // this.startTimeStr = \"\";\n        // this.deptName=\"\";\n        // this.cxNo=\"\";\n        this.amount = \"\";\n        this.unit = \"\";\n        this.countNumber = \"\";\n        this.oddNumber = \"\";\n        this.countImg = \"\";\n        this.oddImg = \"\";\n      }\n      uni.navigateTo({\n        url: \"../product-code/product-code?codeData=\" + encodeURIComponent(this.QRCodeStr) });\n\n    } }) };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbWFpbi9tYWluLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUxBOzs7OztBQUtBLCtHO0FBQ0E7QUFDQSxNQURBLGtCQUNBO0FBQ0E7O0FBRUEsZUFGQTtBQUdBLGVBSEE7QUFJQSxhQUpBO0FBS0EsaUJBTEE7QUFNQSxxQkFOQTtBQU9BLHdCQVBBO0FBUUEsMkJBUkE7QUFTQSxpQkFUQTs7QUFXQSwyREFYQTtBQVlBLGNBWkE7QUFhQSxjQWJBO0FBY0EsWUFkQTtBQWVBLGNBZkE7QUFnQkEsK0JBaEJBO0FBaUJBLG9CQWpCQTtBQWtCQSxtQkFsQkEsRUFrQkE7QUFDQSxnQkFuQkEsRUFtQkE7QUFDQSxrQkFwQkEsRUFvQkE7QUFDQSxjQXJCQSxFQXFCQTtBQUNBLHNCQXRCQSxFQXNCQTtBQUNBLGtDQXZCQSxFQXVCQTtBQUNBLHNCQXhCQSxFQXdCQTtBQUNBLFVBekJBLEVBeUJBO0FBQ0Esc0JBMUJBLEVBMEJBO0FBQ0EsbUNBM0JBLEVBMkJBO0FBQ0EsVUE1QkEsRUE0QkE7QUFDQSxnQkE3QkEsRUE2QkE7QUFDQSxjQTlCQSxFQThCQTtBQUNBLHFCQS9CQSxFQStCQTtBQUNBLG1CQWhDQSxFQWdDQTtBQUNBLGtCQWpDQSxFQWlDQTtBQUNBLGVBbENBLEVBa0NBO0FBQ0Esa0JBbkNBLEVBbUNBO0FBQ0EsZ0JBcENBLEVBb0NBO0FBQ0EsWUFyQ0EsRUFxQ0E7QUFDQSwwQ0F0Q0E7QUF1Q0EsbUJBdkNBLEVBdUNBO0FBQ0EsZ0NBeENBLEVBd0NBO0FBQ0EsVUF6Q0EsRUF5Q0E7QUFDQSxrQkEx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Ozs7QUFTQSxTQWRBOztBQWdCQSxLQTVUQTtBQTZUQSxnQkE3VEEsd0JBNlRBLElBN1RBLEVBNlRBLFFBN1RBLEVBNlRBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FMQTtBQU1BLEtBcFVBO0FBcVVBLG1CQXJVQSwyQkFxVUEsU0FyVUEsRUFxVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEZBREE7O0FBR0EsS0E1VkEsR0E5RUEsRSIsImZpbGUiOiIzMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3RcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdC1jZWxsXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdC1jZWxsLWxlZnRcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dC1jb2xvclwiPueUn+S6p+iuoeWIkuWPtzo8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3QtY2VsbC1kYlwiPlxyXG5cdFx0XHRcdFx0PHBpY2tlciBAY2hhbmdlPVwiYmluZFBpY2tlckNoYW5nZVwiIDp2YWx1ZT1cImluZGV4XCIgOnJhbmdlPVwic2NQbGFuQXJyYXlcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktaW5wdXRcIj57e3NjUGxhbkFycmF5W2luZGV4XX19PC92aWV3PlxyXG5cdFx0XHRcdFx0PC9waWNrZXI+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cInVuaS1saXN0XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3QtY2VsbFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3QtY2VsbC1sZWZ0XCI+XHJcblx0XHRcdFx0XHQ8dGV4dD7nlJ/kuqfmibnmrKHlj7c6PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1saXN0LWNlbGwtZGJcIj5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGRpc2FibGVkPVwidHJ1ZVwiIHYtbW9kZWw9XCJzY0JhdGNoTm9cIiAvPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1saXN0LWNlbGxcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1saXN0LWNlbGwtbGVmdFwiPlxyXG5cdFx0XHRcdFx0PHRleHQ+5Lqn5ZOB5ZCN56ewOjwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdC1jZWxsLWRiXCI+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBkaXNhYmxlZD1cInRydWVcIiB2LW1vZGVsPVwiY3BOYW1lXCIgLz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3RcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdC1jZWxsXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdC1jZWxsLWxlZnRcIj5cclxuXHRcdFx0XHRcdDx0ZXh0PueUn+S6p+aXpeacnzo8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3QtY2VsbC1kYlwiPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgZGlzYWJsZWQ9XCJ0cnVlXCIgdi1tb2RlbD1cInN0YXJ0VGltZVN0clwiIC8+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cInVuaS1saXN0XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3QtY2VsbFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3QtY2VsbC1sZWZ0XCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHQtY29sb3JcIj7plIXmrKHlj7c6PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1saXN0LWNlbGwtZGJcIiBAdGFwPVwib25TY0JiYXRjaFwiPlxyXG5cdFx0XHRcdFx0PHBpY2tlciBAY2hhbmdlPVwiYmluZFNjQmJhdGNoQ2hhbmdlXCIgOmRpc2FibGVkPVwidGhpcy5pbmRleD09IDBcIiA6dmFsdWU9XCJpXCIgOnJhbmdlPVwic2NCYmF0Y2hOYW1lTGlzdFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1pbnB1dFwiPnt7c2NCYmF0Y2hOYW1lTGlzdFtpXX19PC92aWV3PlxyXG5cdFx0XHRcdFx0PC9waWNrZXI+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cInVuaS1saXN0XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3QtY2VsbFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3QtY2VsbC1sZWZ0XCI+XHJcblx0XHRcdFx0XHQ8dGV4dD7nlJ/kuqfkuqfnur86PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1saXN0LWNlbGwtZGJcIj5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGRpc2FibGVkPVwidHJ1ZVwiIHYtbW9kZWw9XCJkZXB0TmFtZVwiIC8+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cInVuaS1saXN0XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3QtY2VsbFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3QtY2VsbC1sZWZ0XCI+XHJcblx0XHRcdFx0XHQ8dGV4dD7kuqfnur/lkI3np7A6PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1saXN0LWNlbGwtZGJcIj5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGRpc2FibGVkPVwidHJ1ZVwiIHYtbW9kZWw9XCJjeE5vXCIgLz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3RcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdC1jZWxsXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdC1jZWxsLWxlZnRcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dC1jb2xvclwiPueJqeaWmeWQjeensDo8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3QtY2VsbC1kYiBtYXRlcmlhbC1uYW1lXCIgQHRhcD1cIm9uTWF0ZXJpYWxcIj5cclxuXHRcdFx0XHRcdDxwaWNrZXIgQGNoYW5nZT1cImJpbmRNYXRlcmlhbENoYW5nZVwiIDpkaXNhYmxlZD1cImk9PTBcIiA6dmFsdWU9XCJrXCIgOnJhbmdlPVwiTWF0ZXJpYWxOYW1lTGlzdFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1pbnB1dFwiPjx0ZXh0Pnt7TWF0ZXJpYWxOYW1lTGlzdFtrXX19PC90ZXh0Pjwvdmlldz5cclxuXHRcdFx0XHRcdDwvcGlja2VyPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cclxuXHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3RcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdC1jZWxsXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdC1jZWxsLWxlZnRcIj5cclxuXHRcdFx0XHRcdDx0ZXh0Puebruagh+mHjemHjzo8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3QtY2VsbC1kYlwiPlxyXG5cdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwiaW5wdXQtdGV4dFwiIHR5cGU9XCJudW1iZXJcIiBkaXNhYmxlZD1cInRydWVcIiB2LW1vZGVsPVwiYW1vdW50XCIgLz48dGV4dD5LRzwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3RcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdC1jZWxsXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdC1jZWxsLWxlZnRcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dC1jb2xvclwiPueJqeaWmeinhOagvDo8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3QtY2VsbC1kYlwiPlxyXG5cdFx0XHRcdFx0PHBpY2tlciBAdGFwPVwib25NYXRlcmlhbFNwY1wiIEBjaGFuZ2U9XCJiaW5kTWF0ZXJpYWxTcGNDaGFuZ2VcIiA6ZGlzYWJsZWQ9XCJrPT0wXCIgOnZhbHVlPVwic3BjXCIgOnJhbmdlPVwibWF0ZXJpYWxTcGNcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktaW5wdXRcIj57e21hdGVyaWFsU3BjW3NwY119fTwvdmlldz5cclxuXHRcdFx0XHRcdDwvcGlja2VyPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cclxuXHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3RcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdC1jZWxsXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdC1jZWxsLWxlZnRcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dC1jb2xvclwiPueCueaWmeS6uuWRmDo8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3QtY2VsbC1kYlwiPlxyXG5cdFx0XHRcdFx0PHBpY2tlciBAY2hhbmdlPVwiYmluZE1wbG95Q2hhbmdlXCIgOnZhbHVlPVwia1wiIDpyYW5nZT1cIm1wbG95TmFtZUxpc3RcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktaW5wdXRcIj57e21wbG95TmFtZUxpc3Rbal19fTwvdmlldz5cclxuXHRcdFx0XHRcdDwvcGlja2VyPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cclxuXHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3RcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdC1jZWxsXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdC1jZWxsLWxlZnRcIj5cclxuXHRcdFx0XHRcdDx0ZXh0PueCueaVsOaVsOmHjzo8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3QtY2VsbC1kYlwiPlxyXG5cdFx0XHRcdFx0PGlucHV0IGRpc2FibGVkPVwidHJ1ZVwiIGNsYXNzPVwiaW5wdXQtdGV4dC0yXCIgdHlwZT1cIm51bWJlclwiIHYtbW9kZWw9XCJjb3VudE51bWJlclwiIC8+XHJcblx0XHRcdFx0XHQ8aW1hZ2Ugdi1pZj1cImNvdW50SW1nXCIgQHRhcD1cIm9uQ2hvb3NlSW1nKCdjb3VudEltZycpXCIgOnNyYz1cImNvdW50SW1nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8dmlldyB2LWVsc2UgQHRhcD1cIm9uQ2hvb3NlSW1nKCdjb3VudEltZycpXCIgY2xhc3M9XCJ1bmktY2FtZXJhXCI+5ouN54WnPC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdCBxcmNvZGUtYm94XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3QtY2VsbFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3QtY2VsbC1sZWZ0XCI+XHJcblx0XHRcdFx0XHQ8dGV4dD7pm7blpLTph43ph486PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1saXN0LWNlbGwtZGJcIj5cclxuXHRcdFx0XHRcdDxpbnB1dCBjbGFzcz1cImlucHV0LXRleHQtMlwiIGRpc2FibGVkPVwidHJ1ZVwiIHR5cGU9XCJudW1iZXJcIiB2LW1vZGVsPVwib2RkTnVtYmVyXCIgLz5cclxuXHRcdFx0XHRcdDxpbWFnZSB2LWlmPVwib2RkSW1nXCIgQHRhcD1cIm9uQ2hvb3NlSW1nKCdvZGRJbWcnKVwiIDpzcmM9XCJvZGRJbWdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDx2aWV3IHYtZWxzZSBAdGFwPVwib25DaG9vc2VJbWcoJ29kZEltZycpXCIgY2xhc3M9XCJ1bmktY2FtZXJhXCI+5ouN54WnPC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0XHJcblx0XHQ8dmlldyBjbGFzcz1cInVuaS1saXN0XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3QtY2VsbFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3QtY2VsbC1sZWZ0XCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHQtY29sb3JcIj7pm7blpLTlvZXlhaU6PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1saXN0LWNlbGwtZGJcIj5cclxuXHRcdFx0XHRcdDxpbnB1dCBjbGFzcz1cImlucHV0LXRleHQtMlwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl6Zu25aS06YeN6YePXCIgdHlwZT1cIm51bWJlclwiIHYtbW9kZWw9XCJsck51bWJlclwiIC8+XHJcblx0XHRcdFx0XHQ8aW1hZ2Ugdi1pZj1cImxySW1nXCIgQHRhcD1cIm9uQ2hvb3NlSW1nKCdsckltZycpXCIgOnNyYz1cImxySW1nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8dmlldyB2LWVsc2UgQHRhcD1cIm9uQ2hvb3NlSW1nKCdsckltZycpXCIgY2xhc3M9XCJ1bmktY2FtZXJhXCI+5ouN54WnPC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0XHJcblx0XHQ8dmlldyBjbGFzcz1cInVuaS1saXN0IHFyY29kZS1jb250ZW50IFwiPlxyXG5cdFx0XHQ8dGtpLXFyY29kZSByZWY9XCJxcmNvZGVcIiA6Y2lkPVwiY2lkXCIgOnZhbD1cInZhbFwiIDp1bml0PVwidW5pdHNcIiA6c2l6ZT1cInNpemVcIiA6b252YWw9XCJvbnZhbFwiIDpsb2FkTWFrZT1cImxvYWRNYWtlXCJcclxuXHRcdFx0IDpzaG93TG9hZGluZz1cInNob3dMb2FkaW5nXCIgOmxvYWRpbmdUZXh0PVwibG9hZGluZ1RleHRcIiBAcmVzdWx0PVwicXJSXCIgLz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3RcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdC1jZWxsIGJ0bi1jb250ZW50XCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJidG5cIj5cclxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImRlZmF1bHRcIiBAdGFwPVwib25Db21maXJtVXBEYXRhXCI+5L+d5a2Y5bm255Sf5oiQ5oqV5paZ56CBPC9idXR0b24+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHtcclxuXHRcdG1hcFN0YXRlLFxyXG5cdFx0bWFwTXV0YXRpb25zXHJcblx0fSBmcm9tICd2dWV4J1xyXG5cclxuXHRpbXBvcnQgdGtpUXJjb2RlIGZyb20gXCJAL2NvbXBvbmVudHMvdGtpLXFyY29kZS90a2ktcXJjb2RlLnZ1ZVwiXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHJcblx0XHRcdFx0Y2lkOiBcIjIwXCIsXHJcblx0XHRcdFx0c2l6ZTogMTYwLFxyXG5cdFx0XHRcdHZhbDogXCJcIixcclxuXHRcdFx0XHRvbnZhbDogdHJ1ZSxcclxuXHRcdFx0XHRsb2FkTWFrZTogZmFsc2UsXHJcblx0XHRcdFx0c2hvd0xvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdGxvYWRpbmdUZXh0OiBcIuS6jOe7tOeggeeUn+aIkOS4rVwiLFxyXG5cdFx0XHRcdHVuaXRzOiBcInB4XCIsXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0YXJyYXk6IFsnMTIzMTMxJywgJzQ1MzIzMjEzJywgJzQ1NjU0MzIxJywgJzk2MzUzNDM0J10sXHJcblx0XHRcdFx0aW5kZXg6IDAsXHJcblx0XHRcdFx0ZGF0ZTogXCJcIixcclxuXHRcdFx0XHRpcDogXCJcIixcclxuXHRcdFx0XHRwb3J0OlwiXCIsXHJcblx0XHRcdFx0c2NQbGFuQXJyYXk6IFtcIuivt+mAieaLqeeUn+S6p+iuoeWIkuWPt1wiXSxcclxuXHRcdFx0XHRzY1BsYW5EYXRhOiBbXSxcclxuXHRcdFx0XHRzY0JhdGNoTm86IFwiXCIsIC8v55Sf5Lqn5om55qyh5Y+3LFxyXG5cdFx0XHRcdGNwTmFtZTogXCJcIiwgLy/kuqflk4HlkI3np7BcclxuXHRcdFx0XHRkZXB0TmFtZTogXCJcIiwgLy/nlJ/kuqfnj63nu4RcclxuXHRcdFx0XHRjeE5vOiBcIlwiLCAvL+S6p+e6v1xyXG5cdFx0XHRcdHN0YXJ0VGltZVN0cjogXCJcIiwgLy/nlJ/kuqfml7bpl7RcclxuXHRcdFx0XHRzY0JiYXRjaE5hbWVMaXN0OiBbXCLor7fpgInmi6nplIXmrKHlj7dcIl0sIC8v6ZSF5qyh5Y+35ZCN56ew5YiX6KGoXHJcblx0XHRcdFx0c2NCYmF0Y2hMaXN0OiBbXSwgLy/plIXmrKHlj7fliJfooahcclxuXHRcdFx0XHRpOiAwLCAvL+mUheasoeWPt+eahOS4i+agh1xyXG5cdFx0XHRcdE1hdGVyaWFsTGlzdDogW10sIC8v54mp5paZ6K+m5oOF5YiX6KGoXHJcblx0XHRcdFx0TWF0ZXJpYWxOYW1lTGlzdDogW1wi6K+36YCJ5oup54mp5paZ5ZCN56ewXCJdLCAvL+eJqeaWmeWQjeensOWIl+ihqFxyXG5cdFx0XHRcdGs6IDAsIC8v54mp5paZ5ZCN56ew5YiX6KGo55qE5LiL5qCHXHJcblx0XHRcdFx0YW1vdW50OiBcIlwiLCAvL+ebruagh+mHjemHj1xyXG5cdFx0XHRcdHVuaXQ6IFwiXCIsIC8v54mp5paZ6KeE5qC8XHJcblx0XHRcdFx0Y291bnROdW1iZXI6IFwiXCIsIC8v54K55pWw5pWw6YePXHJcblx0XHRcdFx0b2RkTnVtYmVyOiBcIlwiLCAvL+mbtuWktOmHjemHj1xyXG5cdFx0XHRcdGxyTnVtYmVyOiBcIlwiLCAvL+mbtuWktOmHjemHj+aJi+WKqOW9leWFpVxyXG5cdFx0XHRcdGxySW1nOiBcIlwiLCAvL+mbtuWktOmHjemHj+aJi+WKqOW9leWFpVxyXG5cdFx0XHRcdGNvdW50SW1nOiBcIlwiLCAvL+eCueaVsOaVsOmHj+aLjeeFp1xyXG5cdFx0XHRcdG9kZEltZzogXCJcIiwgLy/pm7blpLTph43ph4/mi43nhadcclxuXHRcdFx0XHRzcGM6MCwvL+eJqeaWmeinhOagvOWIl+ihqOeahOS4i+agh1xyXG5cdFx0XHRcdG1hdGVyaWFsU3BjOltcIuivt+mAieaLqeeJqeaWmeinhOagvFwiLFwiMjVcIixcIjUwXCJdLFxyXG5cdFx0XHRcdG1wbG95TGlzdDogW10sIC8v54K55paZ5Lq65ZGY5L+h5oGv5YiX6KGoXHJcblx0XHRcdFx0bXBsb3lOYW1lTGlzdDogW1wi6K+36YCJ5oup54K55paZ5Lq65ZGYXCJdLCAvL+eCueaWmeS6uuWRmOWnk+WQjeWIl+ihqFxyXG5cdFx0XHRcdGo6IDAsIC8v54K55paZ5Lq65ZGY5YiX6KGo5LiL5qCHXHJcblx0XHRcdFx0dGxRckNvZGU6IFwiXCIsIC8v5LqM57u056CB6L+U5ZuecGF0aOi3r+W+hFxyXG5cdFx0XHRcdHFyY29kZURhdGE6IFwiXCIsIC8v5LqM57u056CB5pC65bim55qE5pWw5o2uXHJcblx0XHRcdFx0UVJDb2RlU3RyOiBcIlwiIC8v5ou85o6l5ZCO55qE5LqM57u056CB5a2Y5pS+55qE5pWw5o2uXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHQuLi5tYXBTdGF0ZShbJ2ZvcmNlZExvZ2luJywgJ2hhc0xvZ2luJywgJ3VzZXJOYW1lJ10pLFxyXG5cdFx0XHRzdGFydERhdGUoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0RGF0ZSgnc3RhcnRUaW1lU3RyJyk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGVuZERhdGUoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0RGF0ZSgnZW5kJyk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgIFxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdHRoaXMub25Mb2FkaW5nKCk7XHJcblxyXG5cdFx0fSxcclxuXHRcdHdhdGNoOiB7XHJcblx0XHRcdHRsUXJDb2RlKG5ld1ZhbCwgb2xkVmFsKSB7XHJcblx0XHRcdFx0aWYgKG5ld1ZhbCkge1xyXG5cdFx0XHRcdFx0dGhpcy5vblNhdmUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHVuaXQobmV3VmFsLG9sZFZhbCl7XHJcblx0XHRcdFx0dGhpcy5jb3VudE51bWJlcj1wYXJzZUludCh0aGlzLmFtb3VudC90aGlzLnVuaXQpO1xyXG5cdFx0XHRcdHRoaXMub2RkTnVtYmVyPSh0aGlzLmFtb3VudCV0aGlzLnVuaXQpLnRvRml4ZWQoMik7XHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHQuLi5tYXBNdXRhdGlvbnMoWydsb2dpbiddKSxcclxuXHRcdFx0b25Db21maXJtVXBEYXRhKCkge1xyXG5cdFx0XHRcdC8vIOWFiOmqjOivgeaVsOaNruacieayoeacieWhq+WGmVxyXG5cdFx0XHRcdGlmKHRoaXMub2RkTnVtYmVyPjAgJiYgIXRoaXMub2RkSW1nICApe1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdGljb246XCJub25lXCIsXHJcblx0XHRcdFx0XHRcdHRpdGxlOiBcIumbtuWktOmHjemHj+S4jeS4ujDpnIDopoHmi43nhadcIlxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmKHRoaXMuY291bnROdW1iZXI+MCAmJiAhdGhpcy5jb3VudEltZyAgKXtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRpY29uOlwibm9uZVwiLFxyXG5cdFx0XHRcdFx0XHR0aXRsZTogXCLngrnmlbDmlbDph4/kuI3kuLow6ZyA6KaB5ouN54WnXCJcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZih0aGlzLmxyTnVtYmVyPjAgJiYgIXRoaXMubHJJbWcgICl7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0aWNvbjpcIm5vbmVcIixcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwi5b2V5YWl6YeN6YeP5LiN5Li6MOmcgOimgeaLjeeFp1wiXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHRoaXMuaW5kZXggJiYgdGhpcy5pICYmIHRoaXMuayAmJiB0aGlzLmopIHtcclxuXHRcdFx0XHRcdHRoaXMub25SZWFkeVFSY29kZSgpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0aWNvbjpcIm5vbmVcIixcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwi6K+35YWI5aGr5YaZ5pWw5o2uXCJcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdG9uU2NCYmF0Y2goKXtcclxuXHRcdFx0XHRpZih0aGlzLmluZGV4ID09IDApe1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdGljb246XCJub25lXCIsXHJcblx0XHRcdFx0XHRcdHRpdGxlOlwi6K+35YWI6YCJ5oup55Sf5Lqn6K6h5YiS5Y+3XCJcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvbk1hdGVyaWFsKCl7XHJcblx0XHRcdFx0aWYodGhpcy5pID09IDApe1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdGljb246XCJub25lXCIsXHJcblx0XHRcdFx0XHRcdHRpdGxlOlwi6K+35YWI6YCJ5oup6ZSF5qyh5Y+3XCJcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvbk1hdGVyaWFsU3BjKCl7XHJcblx0XHRcdFx0aWYodGhpcy5rPT0wKXtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRpY29uOlwibm9uZVwiLFxyXG5cdFx0XHRcdFx0XHR0aXRsZTpcIuivt+WFiOmAieaLqeeJqeaWmeWQjeensFwiXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0b25SZWFkeVFSY29kZSgpIHtcclxuICAgICAgICAgICAgICAgIHVuaS5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICAgICAgICBcdG1hc2s6dHJ1ZSxcclxuXHRcdFx0XHRcdHRpdGxlOlwi5L+d5a2Y5LitXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmKHRoaXMubHJOdW1iZXI+MCl7XHJcblx0XHRcdFx0XHR0aGlzLm9kZE51bWJlcj10aGlzLmxyTnVtYmVyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnFyY29kZURhdGEgPSB7XHJcblx0XHRcdFx0XHRcIueUn+S6p+iuoeWIkuWPt1wiOiB0aGlzLnNjUGxhbkRhdGFbdGhpcy5pbmRleC0xXS5zY1BsYW5ObyxcclxuXHRcdFx0XHRcdFwi55Sf5Lqn5om55qyh5Y+3XCI6IHRoaXMuc2NQbGFuRGF0YVt0aGlzLmluZGV4LTFdLnNjQmF0Y2hObyxcclxuXHRcdFx0XHRcdFwi5Lqn5ZOB5ZCN56ewXCI6IHRoaXMuc2NQbGFuRGF0YVt0aGlzLmluZGV4LTFdLmNwTmFtZSxcclxuXHRcdFx0XHRcdFwi55Sf5Lqn5pel5pyfXCI6IHRoaXMuc3RhcnRUaW1lU3RyLFxyXG5cdFx0XHRcdFx0XCLplIXmrKHlj7dcIjogdGhpcy5zY0JiYXRjaExpc3RbdGhpcy5pLTFdLnNjQmF0Y2hGLFxyXG5cdFx0XHRcdFx0XCLkuqfnur/lkI3np7BcIjogdGhpcy5zY1BsYW5EYXRhW3RoaXMuaW5kZXgtMV0uY3hObyxcclxuXHRcdFx0XHRcdFwi54mp5paZ5ZCN56ewXCI6IHRoaXMuTWF0ZXJpYWxMaXN0W3RoaXMuay0xXS5tYXRlcmlhbE5hbWUsXHJcblx0XHRcdFx0XHRcIueJqeaWmee8luWPt1wiOiB0aGlzLk1hdGVyaWFsTGlzdFt0aGlzLmstMV0ubWF0ZXJpYWxJZCxcclxuXHRcdFx0XHRcdFwi55uu5qCH6YeN6YePXCI6IE51bWJlcih0aGlzLnVuaXQqdGhpcy5jb3VudE51bWJlcikrIE51bWJlcih0aGlzLm9kZE51bWJlciksXHJcblx0XHRcdFx0XHRcIueJqeaWmeinhOagvFwiOiB0aGlzLnVuaXQsXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRmb3IgKGxldCBpIGluIHRoaXMucXJjb2RlRGF0YSkge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMucXJjb2RlRGF0YVtpXSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLlFSQ29kZVN0ciArPSBgJHtpfToke3RoaXMucXJjb2RlRGF0YVtpXX07YFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0dGhpcy52YWwgPSB0aGlzLlFSQ29kZVN0cjtcclxuXHJcblx0XHRcdH0sXHJcblx0XHRcdHFyUihyZXMpIHtcclxuXHRcdFx0XHR1bmkuZ2V0SW1hZ2VJbmZvKHtcclxuXHRcdFx0XHRcdHNyYzogcmVzLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogKGltZykgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLm9uVXBsb2FkRmlsZShpbWcucGF0aCwgXCJ0bFFyQ29kZVwiKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvblNhdmUoKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYodGhpcy5sck51bWJlcj4wKXtcclxuXHRcdFx0XHRcdHRoaXMub2RkTnVtYmVyPXRoaXMubHJOdW1iZXI7XHJcblx0XHRcdFx0XHR0aGlzLm9kZEltZz10aGlzLmxySW1nO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgZGF0YSA9IHtcclxuXHRcdFx0XHRcdHNjUGxhblFSOiB7XHJcblx0XHRcdFx0XHRcdHNjUGxhbk5vOiB0aGlzLnNjUGxhbkRhdGFbdGhpcy5pbmRleC0xXS5zY1BsYW5ObyxcclxuXHRcdFx0XHRcdFx0c2NCYXRjaEY6IHRoaXMuc2NCYmF0Y2hMaXN0W3RoaXMuaS0xXS5zY0JhdGNoRixcclxuXHRcdFx0XHRcdFx0bWF0ZXJpYWxJZDogdGhpcy5NYXRlcmlhbExpc3RbdGhpcy5rLTFdLm1hdGVyaWFsSWQsXHJcblx0XHRcdFx0XHRcdHVuaXQ6IHRoaXMudW5pdCArIFwia2cqMVwiLFxyXG5cdFx0XHRcdFx0XHRlbXBsb3lJZDogdGhpcy5tcGxveUxpc3RbdGhpcy5qLTFdLmVtcE5vLFxyXG5cdFx0XHRcdFx0XHRjb3VudE51bWJlcjogdGhpcy5jb3VudE51bWJlcixcclxuXHRcdFx0XHRcdFx0YWxsTnVtYmVyOk51bWJlcih0aGlzLnVuaXQqdGhpcy5jb3VudE51bWJlcikrIE51bWJlcih0aGlzLm9kZE51bWJlciksXHJcblx0XHRcdFx0XHRcdGNvdW50SW1nOiB0aGlzLmNvdW50SW1nLFxyXG5cdFx0XHRcdFx0XHRvZGROdW1iZXI6dGhpcy5vZGROdW1iZXIsXHJcblx0XHRcdFx0XHRcdG9kZEltZzogdGhpcy5vZGRJbWcsXHJcblx0XHRcdFx0XHRcdHFySW1nOiB0aGlzLnRsUXJDb2RlLFxyXG5cdFx0XHRcdFx0XHRxclRleHQ6dGhpcy5RUkNvZGVTdHIsXHJcblx0XHRcdFx0XHRcdFxyXG5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy4kYXBpLmdldFNhdmUodGhpcy5pcCwgZGF0YSkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5zdGF0dXNDb2RlID09IDIwMCkge1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogXCLkv53lrZjmiJDlip9cIixcclxuXHRcdFx0XHRcdFx0XHRzdWNjZXNzOiAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm9uR29Qcm9kdWN0Q29kZSh0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0b25Mb2FkaW5nKCkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHVuaS5nZXRTdG9yYWdlKHtcclxuXHRcdFx0XHRcdGtleTpcInBvcnRcIixcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYocmVzLmRhdGEpe1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMucG9ydCA9IHJlcy5kYXRhO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Y29tcGxldGU6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0dW5pLmdldFN0b3JhZ2Uoe1xyXG5cdFx0XHRcdFx0XHRcdGtleTogXCJpcFwiLFxyXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0aWYodGhpcy5wb3J0KXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5pcCA9IGAke3Jlcy5kYXRhfToke3RoaXMucG9ydH1gXHJcblx0XHRcdFx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5pcCA9IHJlcy5kYXRhO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5vblF1ZXJ5UGxhbk51bSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5vbkdldEVtcGxveUxpc3QoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvbkdldFNjQmJhdGNoTGlzdCgpIHtcclxuXHRcdFx0XHR0aGlzLiRhcGkuZ2V0U2NCYmF0Y2hMaXN0KHRoaXMuaXAsIHRoaXMuc2NQbGFuQXJyYXlbdGhpcy5pbmRleF0pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuc3RhdHVzQ29kZSA9PSAyMDApIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zY0JiYXRjaExpc3QgPSByZXMuZGF0YTtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNjQmJhdGNoTmFtZUxpc3QgPSBbXCLor7fpgInmi6nplIXmrKHlj7dcIl07XHJcblx0XHRcdFx0XHRcdFx0cmVzLmRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2NCYmF0Y2hOYW1lTGlzdC5wdXNoKGl0ZW0uc2NCYXRjaEYpXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdG9uR2V0RW1wbG95TGlzdCgpIHtcclxuXHRcdFx0XHR0aGlzLiRhcGkuZ2V0RW1wbG95TGlzdCh0aGlzLmlwKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLnN0YXR1c0NvZGUgPT0gMjAwKSB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5tcGxveUxpc3QgPSByZXMuZGF0YTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLm1wbG95TGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5tcGxveU5hbWVMaXN0LnB1c2goaXRlbS5uYW1lKTtcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvbkdldE1hdGVyaWFsTGlzdCgpIHtcclxuXHRcdFx0XHR0aGlzLiRhcGkuZ2V0TWF0ZXJpYWxMaXN0KHRoaXMuaXAsIHRoaXMuc2NCYmF0Y2hMaXN0W3RoaXMuaS0xXS5zY0JhdGNoRikudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5zdGF0dXNDb2RlID09IDIwMCkge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmRhdGEubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuTWF0ZXJpYWxMaXN0ID0gcmVzLmRhdGE7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5NYXRlcmlhbE5hbWVMaXN0PVtcIuivt+mAieaLqeeJqeaWmeWQjeensFwiXTtcclxuXHRcdFx0XHRcdFx0XHRyZXMuZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5NYXRlcmlhbE5hbWVMaXN0LnB1c2goaXRlbS5tYXRlcmlhbE5hbWUpXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRvblF1ZXJ5UGxhbk51bSgpIHtcclxuXHRcdFx0XHR0aGlzLiRhcGkucXVlcnlQbGFuTnVtKHRoaXMuaXApLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuc3RhdHVzQ29kZSA9PSAyMDApIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zY1BsYW5EYXRhID0gcmVzLmRhdGE7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zY1BsYW5BcnJheSA9IFtcIuivt+mAieaLqeeUn+S6p+iuoeWIkuWPt1wiXTtcclxuXHRcdFx0XHRcdFx0XHRyZXMuZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zY1BsYW5BcnJheS5wdXNoKGl0ZW0uc2NQbGFuTm8pO1xyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogcmVzLmVyck1zZ1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGJpbmRNYXRlcmlhbFNwY0NoYW5nZShlKXtcclxuXHRcdFx0XHR0aGlzLnNwYyA9IGUudGFyZ2V0LnZhbHVlO1xyXG5cdFx0XHRcdGlmKHRoaXMuc3BjKXtcclxuXHRcdFx0XHRcdHRoaXMudW5pdD10aGlzLm1hdGVyaWFsU3BjW3RoaXMuc3BjXTtcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHRoaXMub2RkTnVtYmVyID0gMDtcclxuXHRcdFx0XHRcdHRoaXMuY291bnROdW1iZXIgPTA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRiaW5kUGlja2VyQ2hhbmdlKGUpIHtcclxuXHRcdFxyXG5cdFx0ICAgICAgICBpZih0aGlzLmluZGV4ID09IGUudGFyZ2V0LnZhbHVlKSByZXR1cm47XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhpcy5pbmRleCA9IGUudGFyZ2V0LnZhbHVlO1xyXG5cdFx0XHRcdGlmKHRoaXMuaW5kZXg+MCl7XHJcblx0XHRcdFx0XHR0aGlzLnNjQmF0Y2hObyA9IHRoaXMuc2NQbGFuRGF0YVt0aGlzLmluZGV4LTFdLnNjQmF0Y2hObztcclxuXHRcdFx0XHRcdHRoaXMuY3BOYW1lID0gdGhpcy5zY1BsYW5EYXRhW3RoaXMuaW5kZXgtMV0uY3BOYW1lO1xyXG5cdFx0XHRcdFx0dGhpcy5kZXB0TmFtZSA9IHRoaXMuc2NQbGFuRGF0YVt0aGlzLmluZGV4LTFdLmRlcHROYW1lO1xyXG5cdFx0XHRcdFx0dGhpcy5jeE5vID0gdGhpcy5zY1BsYW5EYXRhW3RoaXMuaW5kZXgtMV0uY3hObztcclxuXHRcdFx0XHRcdHRoaXMuc3RhcnRUaW1lU3RyID0gdGhpcy5zY1BsYW5EYXRhW3RoaXMuaW5kZXgtMV0uc3RhcnRUaW1lU3RyO1xyXG5cdFx0XHRcdFx0dGhpcy5hbW91bnQgPSB0aGlzLnNjUGxhbkRhdGFbdGhpcy5pbmRleC0xXS5hbW91bnQ7XHJcblx0XHRcdFx0XHR0aGlzLnVuaXQgPSB0aGlzLnNjUGxhbkRhdGFbdGhpcy5pbmRleC0xXS51bml0O1xyXG5cdFx0XHRcdFx0dGhpcy5jb3VudE51bWJlciA9IHRoaXMuc2NQbGFuRGF0YVt0aGlzLmluZGV4LTFdLmNvdW50TnVtYmVyO1xyXG5cdFx0XHRcdFx0dGhpcy5vZGROdW1iZXIgPSB0aGlzLnNjUGxhbkRhdGFbdGhpcy5pbmRleC0xXS5vZGROdW1iZXI7XHJcblx0XHRcdFx0XHR0aGlzLmk9MDtcclxuXHRcdFx0XHRcdHRoaXMuaz0wO1xyXG5cdFx0XHRcdFx0dGhpcy5vbkdldFNjQmJhdGNoTGlzdCgpO1xyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0dGhpcy5pbmRleCA9IDA7XHJcblx0XHRcdFx0XHR0aGlzLmkgPTA7XHJcblx0XHRcdFx0XHR0aGlzLmsgPSAwO1xyXG5cdFx0XHRcdFx0dGhpcy5zY0JhdGNoTm89XCJcIjtcclxuXHRcdFx0XHRcdHRoaXMuY3BOYW1lPVwiXCI7XHJcblx0XHRcdFx0XHR0aGlzLnN0YXJ0VGltZVN0ciA9IFwiXCI7XHJcblx0XHRcdFx0XHR0aGlzLmRlcHROYW1lPVwiXCI7XHJcblx0XHRcdFx0XHR0aGlzLmN4Tm89XCJcIjtcclxuXHRcdFx0XHRcdHRoaXMuYW1vdW50PVwiXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRiaW5kTWF0ZXJpYWxDaGFuZ2UoZSkge1xyXG5cdFx0XHRcclxuXHRcdFx0XHR0aGlzLmsgPSBlLnRhcmdldC52YWx1ZTtcclxuXHRcdFx0XHRpZih0aGlzLmspe1xyXG5cdFx0XHRcdFx0dGhpcy5hbW91bnQgPSB0aGlzLk1hdGVyaWFsTGlzdFt0aGlzLmstMV0uYW1vdW50O1xyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0dGhpcy5hbW91bnQgPVwiXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRiaW5kU2NCYmF0Y2hDaGFuZ2UoZSkge1xyXG5cdFx0XHRcdHRoaXMuaSA9IGUudGFyZ2V0LnZhbHVlO1xyXG5cdFx0XHRcdGlmKHRoaXMuaSl7XHJcblx0XHRcdFx0XHR0aGlzLmsgPSAwO1xyXG5cdFx0XHRcdFx0dGhpcy5vbkdldE1hdGVyaWFsTGlzdCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0YmluZE1wbG95Q2hhbmdlKGUpIHtcclxuXHRcdFx0XHR0aGlzLmogPSBlLnRhcmdldC52YWx1ZTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGJpbmREYXRlQ2hhbmdlKGUpIHtcclxuXHRcdFx0XHR0aGlzLnN0YXJ0VGltZVN0ciA9IGUudGFyZ2V0LnZhbHVlXHJcblx0XHRcdH0sXHJcblx0XHRcdGdldERhdGUodHlwZSkge1xyXG5cdFx0XHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHRcdGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cdFx0XHRcdGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcblx0XHRcdFx0bGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG5cclxuXHRcdFx0XHRpZiAodHlwZSA9PT0gJ3N0YXJ0Jykge1xyXG5cdFx0XHRcdFx0eWVhciA9IHllYXIgLSA2MDtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHR5cGUgPT09ICdlbmQnKSB7XHJcblx0XHRcdFx0XHR5ZWFyID0geWVhciArIDI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdG1vbnRoID0gbW9udGggPiA5ID8gbW9udGggOiAnMCcgKyBtb250aDs7XHJcblx0XHRcdFx0ZGF5ID0gZGF5ID4gOSA/IGRheSA6ICcwJyArIGRheTtcclxuXHRcdFx0XHRyZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcclxuXHRcdFx0fSxcclxuXHRcdFx0b25DaG9vc2VJbWcodGV4dE5hbWUpIHtcclxuXHRcdFx0XHR1bmkuY2hvb3NlSW1hZ2Uoe1xyXG5cdFx0XHRcdFx0Y291bnQ6IDEsIC8v6buY6K6kOVxyXG5cdFx0XHRcdFx0c2l6ZVR5cGU6IFsnY29tcHJlc3NlZCddLCAvL+WPr+S7peaMh+WumuaYr+WOn+Wbvui/mOaYr+WOi+e8qeWbvu+8jOm7mOiupOS6jOiAhemDveaciVxyXG5cdFx0XHRcdFx0c291cmNlVHlwZTogWydjYW1lcmEnXSwgLy/ku47nm7jlhozpgInmi6lcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0dW5pLmdldEltYWdlSW5mbyh7XHJcblx0XHRcdFx0XHRcdFx0c3JjOiByZXMudGVtcEZpbGVQYXRoc1swXSxcclxuXHRcdFx0XHRcdFx0XHRzdWNjZXNzOiAoaW1nKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm9uVXBsb2FkRmlsZShpbWcucGF0aCwgdGV4dE5hbWUpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSlcclxuXHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdG9uVXBsb2FkRmlsZShmaWxlLCB0ZXh0TmFtZSkge1xyXG5cdFx0XHRcdHRoaXMuJGFwaS51cGxvYWRGaWxlKHRoaXMuaXAsIGZpbGUpLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYgKHJlcy5zdGF0dXNDb2RlID09IDIwMCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzW3RleHROYW1lXSA9IHJlcy5kYXRhLnBhdGg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0b25Hb1Byb2R1Y3RDb2RlKGRhdGFTYXR1cykge1xyXG5cdFx0XHRcdGlmIChkYXRhU2F0dXMpIHtcclxuXHRcdFx0XHRcdC8vIHRoaXMuaW5kZXggPSAwO1xyXG5cdFx0XHRcdFx0dGhpcy5pID0wO1xyXG5cdFx0XHRcdFx0dGhpcy5rID0gMDtcclxuXHRcdFx0XHRcdHRoaXMuaiA9MDtcclxuXHRcdFx0XHRcdHRoaXMuc3BjPTA7XHJcblx0XHRcdFx0XHR0aGlzLnRsUXJDb2RlID0gXCJcIjtcclxuXHRcdFx0XHRcdC8vIHRoaXMuc2NCYXRjaE5vPVwiXCI7XHJcblx0XHRcdFx0XHQvLyB0aGlzLmNwTmFtZT1cIlwiO1xyXG5cdFx0XHRcdFx0Ly8gdGhpcy5zdGFydFRpbWVTdHIgPSBcIlwiO1xyXG5cdFx0XHRcdFx0Ly8gdGhpcy5kZXB0TmFtZT1cIlwiO1xyXG5cdFx0XHRcdFx0Ly8gdGhpcy5jeE5vPVwiXCI7XHJcblx0XHRcdFx0XHR0aGlzLmFtb3VudD1cIlwiO1xyXG5cdFx0XHRcdFx0dGhpcy51bml0PVwiXCI7XHJcblx0XHRcdFx0XHR0aGlzLmNvdW50TnVtYmVyPVwiXCI7XHJcblx0XHRcdFx0XHR0aGlzLm9kZE51bWJlcj1cIlwiO1xyXG5cdFx0XHRcdFx0dGhpcy5jb3VudEltZz1cIlwiO1xyXG5cdFx0XHRcdFx0dGhpcy5vZGRJbWc9XCJcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiBcIi4uL3Byb2R1Y3QtY29kZS9wcm9kdWN0LWNvZGU/Y29kZURhdGE9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5RUkNvZGVTdHIpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdH1cclxuXHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5cdC5oZWxsbyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0fVxyXG5cclxuXHQudGl0bGUge1xyXG5cdFx0Y29sb3I6ICM4ZjhmOTQ7XHJcblx0XHRtYXJnaW4tdG9wOiAyNXB4O1xyXG5cdH1cclxuXHJcblx0LnVsIHtcclxuXHRcdGZvbnQtc2l6ZTogMTVweDtcclxuXHRcdGNvbG9yOiAjOGY4Zjk0O1xyXG5cdFx0bWFyZ2luLXRvcDogMjVweDtcclxuXHR9XHJcblxyXG5cdC51bD52aWV3IHtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG5cdH1cclxuXHJcbiAgICAgLnRleHQtY29sb3J7XHJcblx0XHQgY29sb3I6ICMwMDdBRkY7XHJcblx0IH1cclxuXHQuY29udGVudCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcblx0XHQucXJjb2RlLWNvbnRlbnQge1xyXG5cdFx0XHRoZWlnaHQ6IDA7XHJcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHR9XHJcblxyXG5cdFx0LnVuaS1saXN0IHtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0d2lkdGg6IDk2JTtcclxuXHRcdFx0bWFyZ2luLXRvcDogNHB4O1xyXG5cclxuXHRcdFx0LnVuaS1saXN0LWNlbGwge1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdFx0XHRcdHBhZGRpbmc6IDRweCA2cHg7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblxyXG5cdFx0XHRcdC51bmktbGlzdC1jZWxsLWxlZnQge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdHdpZHRoOiA4NnB4O1xyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHRcdFx0XHRcdHRleHR7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTVweDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC51bmktbGlzdC1jZWxsLWRiIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRmbGV4OiAxO1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDVweDtcclxuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuXHRcdFx0XHRcdHBpY2tlciB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiA4MCU7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LnVuaS1pbnB1dCB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDRweCA0cHg7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogMThweDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpbnB1dCB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiA4MCU7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LmlucHV0LXRleHQge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogNjAlO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5pbnB1dC10ZXh0LTIge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogNzAlO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHRleHQge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogNXB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC51bmktY2FtZXJhIHtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogI2ZmZmZmZjtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogNnB4O1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogNXB4O1xyXG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aW1hZ2Uge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDQwcHg7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogNDBweDtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDVweDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQubWF0ZXJpYWwtbmFtZSB7XHJcblx0XHRcdFx0XHRwaWNrZXIge1xyXG5cdFx0XHRcdFx0XHR2aWV3IHtcclxuXHRcdFx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0XHRcdFx0XHRcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cdFx0XHRcdFx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5idG4tY29udGVudCB7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuXHRcdFx0XHQuYnRuIHtcclxuXHRcdFx0XHRcdG1hcmdpbjogMCA1JTtcclxuXHRcdFx0XHRcdGJ1dHRvbiB7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMxOEI1NjY7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjZmZmZmZmO1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpbnB1dCB7XHJcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdFx0cGFkZGluZzogNHB4IDRweDtcclxuXHR9XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///30\n");

/***/ }),
/* 31 */
/*!***********************************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/pages/reg/reg.vue?mpType=page ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reg_vue_vue_type_template_id_2a876600_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reg.vue?vue&type=template&id=2a876600&mpType=page */ 32);\n/* harmony import */ var _reg_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reg.vue?vue&type=script&lang=js&mpType=page */ 34);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _reg_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _reg_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _reg_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _reg_vue_vue_type_template_id_2a876600_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _reg_vue_vue_type_template_id_2a876600_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _reg_vue_vue_type_template_id_2a876600_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/reg/reg.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkg7QUFDM0g7QUFDa0U7QUFDTDs7O0FBRzdEO0FBQ21LO0FBQ25LLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSx5RkFBTTtBQUNSLEVBQUUsa0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3JlZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmE4NzY2MDAmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3JlZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vcmVnLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL3JlZy9yZWcudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/*!*****************************************************************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/pages/reg/reg.vue?vue&type=template&id=2a876600&mpType=page ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_reg_vue_vue_type_template_id_2a876600_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./reg.vue?vue&type=template&id=2a876600&mpType=page */ 33);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_reg_vue_vue_type_template_id_2a876600_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_reg_vue_vue_type_template_id_2a876600_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_reg_vue_vue_type_template_id_2a876600_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_reg_vue_vue_type_template_id_2a876600_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 33 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/application/HbuilderXAPP/hgApp/pages/reg/reg.vue?vue&type=template&id=2a876600&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "input-group"), attrs: { _i: 1 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(2, "sc", "input-row border"),
              attrs: { _i: 2 }
            },
            [
              _c("text", {
                staticClass: _vm._$s(3, "sc", "title"),
                attrs: { _i: 3 }
              }),
              _c("m-input", {
                attrs: {
                  type: "text",
                  focus: true,
                  clearable: true,
                  placeholder: "请输入账号",
                  _i: 4
                },
                model: {
                  value: _vm._$s(4, "v-model", _vm.username),
                  callback: function($$v) {
                    _vm.username = $$v
                  },
                  expression: "username"
                }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(5, "sc", "input-row border"),
              attrs: { _i: 5 }
            },
            [
              _c("text", {
                staticClass: _vm._$s(6, "sc", "title"),
                attrs: { _i: 6 }
              }),
              _c("m-input", {
                attrs: {
                  type: "password",
                  displayable: true,
                  placeholder: "请输入密码",
                  _i: 7
                },
                model: {
                  value: _vm._$s(7, "v-model", _vm.password),
                  callback: function($$v) {
                    _vm.password = $$v
                  },
                  expression: "password"
                }
              })
            ],
            1
          ),
          _c(
            "view",
            { staticClass: _vm._$s(8, "sc", "input-row"), attrs: { _i: 8 } },
            [
              _c("text", {
                staticClass: _vm._$s(9, "sc", "title"),
                attrs: { _i: 9 }
              }),
              _c("m-input", {
                attrs: {
                  type: "password",
                  displayable: true,
                  placeholder: "请确认密码",
                  _i: 10
                },
                model: {
                  value: _vm._$s(10, "v-model", _vm.confirmPassword),
                  callback: function($$v) {
                    _vm.confirmPassword = $$v
                  },
                  expression: "confirmPassword"
                }
              })
            ],
            1
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(11, "sc", "btn-row"), attrs: { _i: 11 } },
        [
          _c("button", {
            staticClass: _vm._$s(12, "sc", "primary"),
            attrs: { _i: 12 },
            on: { click: _vm.register }
          })
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 34 */
/*!***********************************************************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/pages/reg/reg.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_reg_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./reg.vue?vue&type=script&lang=js&mpType=page */ 35);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_reg_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_reg_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_reg_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_reg_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_reg_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBpQixDQUFnQixva0JBQUcsRUFBQyIsImZpbGUiOiIzNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVnLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///34\n");

/***/ }),
/* 35 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/application/HbuilderXAPP/hgApp/pages/reg/reg.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uniCloud, __f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _mInput = _interopRequireDefault(__webpack_require__(/*! ../../components/m-input.vue */ 9));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { components: { mInput: _mInput.default }, data: function data() {return { username: '', password: '', confirmPassword: '' };}, methods: { register: function register() {/**\n                                                                                                                                                                                          * 客户端对账号信息进行一些必要的校验。\n                                                                                                                                                                                          * 实际开发中，根据业务需要进行处理，这里仅做示例。\n                                                                                                                                                                                          */if (this.username.length < 3) {uni.showToast({ icon: 'none', title: '账号最短为 3 个字符' });return;}\n      if (this.password.length < 6) {\n        uni.showToast({\n          icon: 'none',\n          title: '密码最短为 6 个字符' });\n\n        return;\n      }\n      if (this.password !== this.confirmPassword) {\n        uni.showToast({\n          icon: 'none',\n          title: '两次密码输入不一致' });\n\n        return;\n      }\n\n      var data = {\n        username: this.username,\n        password: this.password };\n\n      uniCloud.callFunction({\n        name: 'user-center',\n        data: {\n          action: 'register',\n          params: data },\n\n        success: function success(e) {\n          __f__(\"log\", \"注册成功\", e, \" at pages/reg/reg.vue:76\");\n\n          if (e.result.code === 0) {\n            uni.showToast({\n              title: '注册成功' });\n\n            uni.setStorageSync('uniIdToken', e.result.token);\n            uni.setStorageSync('username', e.result.username);\n            uni.reLaunch({\n              url: '../main/main' });\n\n          } else {\n            uni.showModal({\n              content: JSON.stringify(e.result),\n              showCancel: false });\n\n          }\n        },\n        fail: function fail(e) {\n          uni.showModal({\n            content: JSON.stringify(e),\n            showCancel: false });\n\n        } });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 36)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 40)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvcmVnL3JlZy52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkEsaUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFFQSxFQUNBLGNBQ0EsdUJBREEsRUFEQSxFQUlBLElBSkEsa0JBSUEsQ0FDQSxTQUNBLFlBREEsRUFFQSxZQUZBLEVBR0EsbUJBSEEsR0FLQSxDQVZBLEVBV0EsV0FDQSxRQURBLHNCQUNBLENBQ0E7Ozs0TEFJQSwrQkFDQSxnQkFDQSxZQURBLEVBRUEsb0JBRkEsSUFJQSxPQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQURBO0FBRUEsOEJBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLDRCQUZBOztBQUlBO0FBQ0E7O0FBRUE7QUFDQSwrQkFEQTtBQUVBLCtCQUZBOztBQUlBO0FBQ0EsMkJBREE7QUFFQTtBQUNBLDRCQURBO0FBRUEsc0JBRkEsRUFGQTs7QUFNQSxlQU5BLG1CQU1BLENBTkEsRUFNQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxpQ0FEQTs7QUFHQSxXQVRBLE1BU0E7QUFDQTtBQUNBLCtDQURBO0FBRUEsK0JBRkE7O0FBSUE7QUFDQSxTQXhCQTtBQXlCQSxZQXpCQSxnQkF5QkEsQ0F6QkEsRUF5QkE7QUFDQTtBQUNBLHNDQURBO0FBRUEsNkJBRkE7O0FBSUEsU0E5QkE7O0FBZ0NBLEtBaEVBLEVBWEEsRSIsImZpbGUiOiIzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJpbnB1dC1yb3cgYm9yZGVyXCI+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aXRsZVwiPui0puWPt++8mjwvdGV4dD5cclxuXHRcdFx0XHQ8bS1pbnB1dCB0eXBlPVwidGV4dFwiIGZvY3VzIGNsZWFyYWJsZSB2LW1vZGVsPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpei0puWPt1wiPjwvbS1pbnB1dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImlucHV0LXJvdyBib3JkZXJcIj5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpdGxlXCI+5a+G56CB77yaPC90ZXh0PlxyXG5cdFx0XHRcdDxtLWlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGRpc3BsYXlhYmxlIHYtbW9kZWw9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl5a+G56CBXCI+PC9tLWlucHV0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiaW5wdXQtcm93XCI+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aXRsZVwiPuehruiupOWvhuegge+8mjwvdGV4dD5cclxuXHRcdFx0XHQ8bS1pbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBkaXNwbGF5YWJsZSB2LW1vZGVsPVwiY29uZmlybVBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCLor7fnoa7orqTlr4bnoIFcIj48L20taW5wdXQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwiYnRuLXJvd1wiPlxyXG5cdFx0XHQ8YnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgY2xhc3M9XCJwcmltYXJ5XCIgQHRhcD1cInJlZ2lzdGVyXCI+5rOo5YaMPC9idXR0b24+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgbUlucHV0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbS1pbnB1dC52dWUnO1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdG1JbnB1dFxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dXNlcm5hbWU6ICcnLFxyXG5cdFx0XHRcdHBhc3N3b3JkOiAnJyxcclxuXHRcdFx0XHRjb25maXJtUGFzc3dvcmQ6ICcnXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdHJlZ2lzdGVyKCkge1xyXG5cdFx0XHRcdC8qKlxyXG5cdFx0XHRcdCAqIOWuouaIt+err+Wvuei0puWPt+S/oeaBr+i/m+ihjOS4gOS6m+W/heimgeeahOagoemqjOOAglxyXG5cdFx0XHRcdCAqIOWunumZheW8gOWPkeS4re+8jOagueaNruS4muWKoemcgOimgei/m+ihjOWkhOeQhu+8jOi/memHjOS7heWBmuekuuS+i+OAglxyXG5cdFx0XHRcdCAqL1xyXG5cdFx0XHRcdGlmICh0aGlzLnVzZXJuYW1lLmxlbmd0aCA8IDMpIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn6LSm5Y+35pyA55+t5Li6IDMg5Liq5a2X56ymJ1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh0aGlzLnBhc3N3b3JkLmxlbmd0aCA8IDYpIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5a+G56CB5pyA55+t5Li6IDYg5Liq5a2X56ymJ1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh0aGlzLnBhc3N3b3JkICE9PSB0aGlzLmNvbmZpcm1QYXNzd29yZCkge1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfkuKTmrKHlr4bnoIHovpPlhaXkuI3kuIDoh7QnXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGNvbnN0IGRhdGEgPSB7XHJcblx0XHRcdFx0XHR1c2VybmFtZTogdGhpcy51c2VybmFtZSxcclxuXHRcdFx0XHRcdHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHVuaUNsb3VkLmNhbGxGdW5jdGlvbih7XHJcblx0XHRcdFx0XHRuYW1lOiAndXNlci1jZW50ZXInLFxyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRhY3Rpb246ICdyZWdpc3RlcicsXHJcblx0XHRcdFx0XHRcdHBhcmFtczogZGF0YVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3MoZSkge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIuazqOWGjOaIkOWKn1wiLCBlKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChlLnJlc3VsdC5jb2RlID09PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+azqOWGjOaIkOWKnydcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ3VuaUlkVG9rZW4nLCBlLnJlc3VsdC50b2tlbilcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ3VzZXJuYW1lJywgZS5yZXN1bHQudXNlcm5hbWUpXHJcblx0XHRcdFx0XHRcdFx0dW5pLnJlTGF1bmNoKHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybDogJy4uL21haW4vbWFpbicsXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiBKU09OLnN0cmluZ2lmeShlLnJlc3VsdCksXHJcblx0XHRcdFx0XHRcdFx0XHRzaG93Q2FuY2VsOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRmYWlsKGUpIHtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0Y29udGVudDogSlNPTi5zdHJpbmdpZnkoZSksXHJcblx0XHRcdFx0XHRcdFx0c2hvd0NhbmNlbDogZmFsc2VcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///35\n");

/***/ }),
/* 36 */
/*!************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, wx) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _wrapNativeSuper(Class) {var _cache = typeof Map === "function" ? new Map() : undefined;_wrapNativeSuper = function _wrapNativeSuper(Class) {if (Class === null || !_isNativeFunction(Class)) return Class;if (typeof Class !== "function") {throw new TypeError("Super expression must either be null or a function");}if (typeof _cache !== "undefined") {if (_cache.has(Class)) return _cache.get(Class);_cache.set(Class, Wrapper);}function Wrapper() {return _construct(Class, arguments, _getPrototypeOf(this).constructor);}Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });return _setPrototypeOf(Wrapper, Class);};return _wrapNativeSuper(Class);}function _construct(Parent, args, Class) {if (_isNativeReflectConstruct()) {_construct = Reflect.construct;} else {_construct = function _construct(Parent, args, Class) {var a = [null];a.push.apply(a, args);var Constructor = Function.bind.apply(Parent, a);var instance = new Constructor();if (Class) _setPrototypeOf(instance, Class.prototype);return instance;};}return _construct.apply(null, arguments);}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _isNativeFunction(fn) {return Function.toString.call(fn).indexOf("[native code]") !== -1;}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};function t(e) {return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;}function n(e, t, n) {return e(n = { path: t, exports: {}, require: function require(e, t) {return function () {throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");}(null == t && n.path);} }, n.exports), n.exports;}var r = n(function (e, t) {var n;e.exports = (n = n || function (e, t) {var n = Object.create || function () {function e() {}return function (t) {var n;return e.prototype = t, n = new e(), e.prototype = null, n;};}(),r = {},o = r.lib = {},s = o.Base = { extend: function extend(e) {var t = n(this);return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {t.$super.init.apply(this, arguments);}), t.init.prototype = t, t.$super = this, t;}, create: function create() {var e = this.extend();return e.init.apply(e, arguments), e;}, init: function init() {}, mixIn: function mixIn(e) {for (var t in e) {e.hasOwnProperty(t) && (this[t] = e[t]);}e.hasOwnProperty("toString") && (this.toString = e.toString);}, clone: function clone() {return this.init.prototype.extend(this);} },i = o.WordArray = s.extend({ init: function init(e, t) {e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length;}, toString: function toString(e) {return (e || c).stringify(this);}, concat: function concat(e) {var t = this.words,n = e.words,r = this.sigBytes,o = e.sigBytes;if (this.clamp(), r % 4) for (var s = 0; s < o; s++) {var i = n[s >>> 2] >>> 24 - s % 4 * 8 & 255;t[r + s >>> 2] |= i << 24 - (r + s) % 4 * 8;} else for (s = 0; s < o; s += 4) {t[r + s >>> 2] = n[s >>> 2];}return this.sigBytes += o, this;}, clamp: function clamp() {var t = this.words,n = this.sigBytes;t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);}, clone: function clone() {var e = s.clone.call(this);return e.words = this.words.slice(0), e;}, random: function random(t) {for (var n, r = [], o = function o(t) {t = t;var n = 987654321,r = 4294967295;return function () {var o = ((n = 36969 * (65535 & n) + (n >> 16) & r) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & r) & r;return o /= 4294967296, (o += .5) * (e.random() > .5 ? 1 : -1);};}, s = 0; s < t; s += 4) {var a = o(4294967296 * (n || e.random()));n = 987654071 * a(), r.push(4294967296 * a() | 0);}return new i.init(r, t);} }),a = r.enc = {},c = a.Hex = { stringify: function stringify(e) {for (var t = e.words, n = e.sigBytes, r = [], o = 0; o < n; o++) {var s = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;r.push((s >>> 4).toString(16)), r.push((15 & s).toString(16));}return r.join("");}, parse: function parse(e) {for (var t = e.length, n = [], r = 0; r < t; r += 2) {n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;}return new i.init(n, t / 2);} },u = a.Latin1 = { stringify: function stringify(e) {for (var t = e.words, n = e.sigBytes, r = [], o = 0; o < n; o++) {var s = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;r.push(String.fromCharCode(s));}return r.join("");}, parse: function parse(e) {for (var t = e.length, n = [], r = 0; r < t; r++) {n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;}return new i.init(n, t);} },l = a.Utf8 = { stringify: function stringify(e) {try {return decodeURIComponent(escape(u.stringify(e)));} catch (e) {throw new Error("Malformed UTF-8 data");}}, parse: function parse(e) {return u.parse(unescape(encodeURIComponent(e)));} },h = o.BufferedBlockAlgorithm = s.extend({ reset: function reset() {this._data = new i.init(), this._nDataBytes = 0;}, _append: function _append(e) {"string" == typeof e && (e = l.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;}, _process: function _process(t) {var n = this._data,r = n.words,o = n.sigBytes,s = this.blockSize,a = o / (4 * s),c = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * s,u = e.min(4 * c, o);if (c) {for (var l = 0; l < c; l += s) {this._doProcessBlock(r, l);}var h = r.splice(0, c);n.sigBytes -= u;}return new i.init(h, u);}, clone: function clone() {var e = s.clone.call(this);return e._data = this._data.clone(), e;}, _minBufferSize: 0 }),f = (o.Hasher = h.extend({ cfg: s.extend(), init: function init(e) {this.cfg = this.cfg.extend(e), this.reset();}, reset: function reset() {h.reset.call(this), this._doReset();}, update: function update(e) {return this._append(e), this._process(), this;}, finalize: function finalize(e) {return e && this._append(e), this._doFinalize();}, blockSize: 16, _createHelper: function _createHelper(e) {return function (t, n) {return new e.init(n).finalize(t);};}, _createHmacHelper: function _createHmacHelper(e) {return function (t, n) {return new f.HMAC.init(e, n).finalize(t);};} }), r.algo = {});return r;}(Math), n);}),o = (n(function (e, t) {var n;e.exports = (n = r, function (e) {var t = n,r = t.lib,o = r.WordArray,s = r.Hasher,i = t.algo,a = [];!function () {for (var t = 0; t < 64; t++) {a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;}}();var c = i.MD5 = s.extend({ _doReset: function _doReset() {this._hash = new o.init([1732584193, 4023233417, 2562383102, 271733878]);}, _doProcessBlock: function _doProcessBlock(e, t) {for (var n = 0; n < 16; n++) {var r = t + n,o = e[r];e[r] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);}var s = this._hash.words,i = e[t + 0],c = e[t + 1],p = e[t + 2],d = e[t + 3],y = e[t + 4],g = e[t + 5],v = e[t + 6],_ = e[t + 7],m = e[t + 8],b = e[t + 9],w = e[t + 10],T = e[t + 11],S = e[t + 12],E = e[t + 13],k = e[t + 14],O = e[t + 15],A = s[0],P = s[1],I = s[2],N = s[3];A = u(A, P, I, N, i, 7, a[0]), N = u(N, A, P, I, c, 12, a[1]), I = u(I, N, A, P, p, 17, a[2]), P = u(P, I, N, A, d, 22, a[3]), A = u(A, P, I, N, y, 7, a[4]), N = u(N, A, P, I, g, 12, a[5]), I = u(I, N, A, P, v, 17, a[6]), P = u(P, I, N, A, _, 22, a[7]), A = u(A, P, I, N, m, 7, a[8]), N = u(N, A, P, I, b, 12, a[9]), I = u(I, N, A, P, w, 17, a[10]), P = u(P, I, N, A, T, 22, a[11]), A = u(A, P, I, N, S, 7, a[12]), N = u(N, A, P, I, E, 12, a[13]), I = u(I, N, A, P, k, 17, a[14]), A = l(A, P = u(P, I, N, A, O, 22, a[15]), I, N, c, 5, a[16]), N = l(N, A, P, I, v, 9, a[17]), I = l(I, N, A, P, T, 14, a[18]), P = l(P, I, N, A, i, 20, a[19]), A = l(A, P, I, N, g, 5, a[20]), N = l(N, A, P, I, w, 9, a[21]), I = l(I, N, A, P, O, 14, a[22]), P = l(P, I, N, A, y, 20, a[23]), A = l(A, P, I, N, b, 5, a[24]), N = l(N, A, P, I, k, 9, a[25]), I = l(I, N, A, P, d, 14, a[26]), P = l(P, I, N, A, m, 20, a[27]), A = l(A, P, I, N, E, 5, a[28]), N = l(N, A, P, I, p, 9, a[29]), I = l(I, N, A, P, _, 14, a[30]), A = h(A, P = l(P, I, N, A, S, 20, a[31]), I, N, g, 4, a[32]), N = h(N, A, P, I, m, 11, a[33]), I = h(I, N, A, P, T, 16, a[34]), P = h(P, I, N, A, k, 23, a[35]), A = h(A, P, I, N, c, 4, a[36]), N = h(N, A, P, I, y, 11, a[37]), I = h(I, N, A, P, _, 16, a[38]), P = h(P, I, N, A, w, 23, a[39]), A = h(A, P, I, N, E, 4, a[40]), N = h(N, A, P, I, i, 11, a[41]), I = h(I, N, A, P, d, 16, a[42]), P = h(P, I, N, A, v, 23, a[43]), A = h(A, P, I, N, b, 4, a[44]), N = h(N, A, P, I, S, 11, a[45]), I = h(I, N, A, P, O, 16, a[46]), A = f(A, P = h(P, I, N, A, p, 23, a[47]), I, N, i, 6, a[48]), N = f(N, A, P, I, _, 10, a[49]), I = f(I, N, A, P, k, 15, a[50]), P = f(P, I, N, A, g, 21, a[51]), A = f(A, P, I, N, S, 6, a[52]), N = f(N, A, P, I, d, 10, a[53]), I = f(I, N, A, P, w, 15, a[54]), P = f(P, I, N, A, c, 21, a[55]), A = f(A, P, I, N, m, 6, a[56]), N = f(N, A, P, I, O, 10, a[57]), I = f(I, N, A, P, v, 15, a[58]), P = f(P, I, N, A, E, 21, a[59]), A = f(A, P, I, N, y, 6, a[60]), N = f(N, A, P, I, T, 10, a[61]), I = f(I, N, A, P, p, 15, a[62]), P = f(P, I, N, A, b, 21, a[63]), s[0] = s[0] + A | 0, s[1] = s[1] + P | 0, s[2] = s[2] + I | 0, s[3] = s[3] + N | 0;}, _doFinalize: function _doFinalize() {var t = this._data,n = t.words,r = 8 * this._nDataBytes,o = 8 * t.sigBytes;n[o >>> 5] |= 128 << 24 - o % 32;var s = e.floor(r / 4294967296),i = r;n[15 + (o + 64 >>> 9 << 4)] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), n[14 + (o + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), t.sigBytes = 4 * (n.length + 1), this._process();for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {var l = c[u];c[u] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8);}return a;}, clone: function clone() {var e = s.clone.call(this);return e._hash = this._hash.clone(), e;} });function u(e, t, n, r, o, s, i) {var a = e + (t & n | ~t & r) + o + i;return (a << s | a >>> 32 - s) + t;}function l(e, t, n, r, o, s, i) {var a = e + (t & r | n & ~r) + o + i;return (a << s | a >>> 32 - s) + t;}function h(e, t, n, r, o, s, i) {var a = e + (t ^ n ^ r) + o + i;return (a << s | a >>> 32 - s) + t;}function f(e, t, n, r, o, s, i) {var a = e + (n ^ (t | ~r)) + o + i;return (a << s | a >>> 32 - s) + t;}t.MD5 = s._createHelper(c), t.HmacMD5 = s._createHmacHelper(c);}(Math), n.MD5);}), n(function (e, t) {var n, o, s;e.exports = (o = (n = r).lib.Base, s = n.enc.Utf8, void (n.algo.HMAC = o.extend({ init: function init(e, t) {e = this._hasher = new e.init(), "string" == typeof t && (t = s.parse(t));var n = e.blockSize,r = 4 * n;t.sigBytes > r && (t = e.finalize(t)), t.clamp();for (var o = this._oKey = t.clone(), i = this._iKey = t.clone(), a = o.words, c = i.words, u = 0; u < n; u++) {a[u] ^= 1549556828, c[u] ^= 909522486;}o.sigBytes = i.sigBytes = r, this.reset();}, reset: function reset() {var e = this._hasher;e.reset(), e.update(this._iKey);}, update: function update(e) {return this._hasher.update(e), this;}, finalize: function finalize(e) {var t = this._hasher,n = t.finalize(e);return t.reset(), t.finalize(this._oKey.clone().concat(n));} })));}), n(function (e, t) {e.exports = r.HmacMD5;}));function s(e) {return function (t) {if (!((t = t || {}).success || t.fail || t.complete)) return e.call(this, t);e.call(this, t).then(function (e) {t.success && t.success(e), t.complete && t.complete(e);}).catch(function (e) {t.fail && t.fail(e), t.complete && t.complete(e);});};}var i = /*#__PURE__*/function (_Error) {_inherits(i, _Error);var _super = _createSuper(i);function i(e) {var _this;_classCallCheck(this, i);_this = _super.call(this, e.message), _this.errMsg = e.message || "", Object.defineProperties(_assertThisInitialized(_this), { code: { get: function get() {return e.code;} }, requestId: { get: function get() {return e.requestId;} }, message: { get: function get() {return this.errMsg;}, set: function set(e) {this.errMsg = e;} } });return _this;}return i;}( /*#__PURE__*/_wrapNativeSuper(Error));var a;try {a = __webpack_require__(/*! uni-stat-config */ 39).default || __webpack_require__(/*! uni-stat-config */ 39);} catch (e) {a = { appid: "" };}var c, u;function l() {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;var t = "";for (; t.length < e;) {t += Math.random().toString(32).substring(2);}return t.substring(0, e);}function h() {if ("n" === f()) {try {c = plus.runtime.getDCloudId();} catch (e) {c = "";}return c;}return c || (c = l(32), uni.setStorage({ key: "__DC_CLOUD_UUID", data: c })), c;}function f() {var _appPlus$h5$mpWeixi;return (_appPlus$h5$mpWeixi = { "app-plus": "n", h5: "h5", "mp-weixin": "wx" }, _defineProperty(_appPlus$h5$mpWeixi, ["y", "a", "p", "mp-ali"].reverse().join(""), "ali"), _defineProperty(_appPlus$h5$mpWeixi, "mp-baidu", "bd"), _defineProperty(_appPlus$h5$mpWeixi, "mp-toutiao", "tt"), _defineProperty(_appPlus$h5$mpWeixi, "mp-qq", "qq"), _defineProperty(_appPlus$h5$mpWeixi, "quickapp-native", "qn"), _appPlus$h5$mpWeixi)["app-plus"];}var p = { sign: function sign(e, t) {var n = "";return Object.keys(e).sort().forEach(function (t) {e[t] && (n = n + "&" + t + "=" + e[t]);}), n = n.slice(1), o(n, t).toString();}, wrappedRequest: function wrappedRequest(e, t) {return new Promise(function (n, r) {t(Object.assign(e, { complete: function complete(e) {e || (e = {}),  false && false;var t = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];if (!e.statusCode || e.statusCode >= 400) return r(new i({ code: "SYS_ERR", message: e.errMsg || "request:fail", requestId: t }));var o = e.data;if (o.error) return r(new i({ code: o.error.code, message: o.error.message, requestId: t }));o.result = o.data, o.requestId = t, delete o.data, n(o);} }));});} };var d = { request: function request(e) {return uni.request(e);}, uploadFile: function uploadFile(e) {return uni.uploadFile(e);}, setStorageSync: function setStorageSync(e, t) {return uni.setStorageSync(e, t);}, getStorageSync: function getStorageSync(e) {return uni.getStorageSync(e);}, removeStorageSync: function removeStorageSync(e) {return uni.removeStorageSync(e);}, clearStorageSync: function clearStorageSync() {return uni.clearStorageSync();} };var y = /*#__PURE__*/function () {function y(e) {_classCallCheck(this, y);["spaceId", "clientSecret"].forEach(function (t) {if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error("缺少参数" + t);}), this.config = Object.assign({}, { endpoint: "https://api.bspapp.com" }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = d;}_createClass(y, [{ key: "setAccessToken", value: function setAccessToken(e) {this.accessToken = e;} }, { key: "requestWrapped", value: function requestWrapped(e) {return p.wrappedRequest(e, this.adapter.request);} }, { key: "requestAuth", value: function requestAuth(e) {return this.requestWrapped(e);} }, { key: "request", value: function request(e, t) {var _this2 = this;return this.hasAccessToken ? t ? this.requestWrapped(e) : this.requestWrapped(e).catch(function (t) {return new Promise(function (e, n) {!t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? n(t) : e();}).then(function () {return _this2.getAccessToken();}).then(function () {var t = _this2.rebuildRequest(e);return _this2.request(t, !0);});}) : this.getAccessToken().then(function () {var t = _this2.rebuildRequest(e);return _this2.request(t, !0);});} }, { key: "rebuildRequest", value: function rebuildRequest(e) {var t = Object.assign({}, e);return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, t.header["x-serverless-sign"] = p.sign(t.data, this.config.clientSecret), t;} }, { key: "setupRequest", value: function setupRequest(e, t) {var n = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),r = { "Content-Type": "application/json" };return "auth" !== t && (n.token = this.accessToken, r["x-basement-token"] = this.accessToken), r["x-serverless-sign"] = p.sign(n, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n, dataType: "json", header: r };} }, { key: "getAccessToken", value: function getAccessToken() {var _this3 = this;return this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then(function (e) {return new Promise(function (t, n) {e.result && e.result.accessToken ? (_this3.setAccessToken(e.result.accessToken), t(_this3.accessToken)) : n(new i({ code: "AUTH_FAILED", message: "获取accessToken失败" }));});});} }, { key: "authorize", value: function authorize() {this.getAccessToken();} }, { key: "callFunction", value: function callFunction(e) {var t = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e.name, functionArgs: e.data || {} }) };return this.request(this.setupRequest(t));} }, { key: "getOSSUploadOptionsFromPath", value: function getOSSUploadOptionsFromPath(e) {var t = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFileToOSS", value: function uploadFileToOSS(_ref) {var _this4 = this;var e = _ref.url,t = _ref.formData,n = _ref.name,r = _ref.filePath,o = _ref.fileType,s = _ref.onUploadProgress;return new Promise(function (a, c) {var u = _this4.adapter.uploadFile({ url: e, formData: t, name: n, filePath: r, fileType: o, header: { "X-OSS-server-side-encrpytion": "AES256" }, success: function success(e) {e && e.statusCode < 400 ? a(e) : c(new i({ code: "UPLOAD_FAILED", message: "文件上传失败" }));}, fail: function fail(e) {c(e);} });"function" == typeof s && u && "function" == typeof u.onProgressUpdate && u.onProgressUpdate(function (e) {s({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });});});} }, { key: "reportOSSUpload", value: function reportOSSUpload(e) {var t = { method: "serverless.file.resource.report", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFile", value: function uploadFile(_ref2) {var _this5 = this;var e = _ref2.filePath,t = _ref2.cloudPath,_ref2$fileType = _ref2.fileType,n = _ref2$fileType === void 0 ? "image" : _ref2$fileType,r = _ref2.onUploadProgress,o = _ref2.config;if (!t) throw new i({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });var s = o && o.envType || this.config.envType;var a, c;return this.getOSSUploadOptionsFromPath({ env: s, filename: t }).then(function (t) {var o = t.result;a = o.id, c = "https://" + o.cdnDomain + "/" + o.ossPath;var s = { url: "https://" + o.host, formData: { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: o.accessKeyId, Signature: o.signature, host: o.host, id: a, key: o.ossPath, policy: o.policy, success_action_status: 200 }, fileName: "file", name: "file", filePath: e, fileType: n };return _this5.uploadFileToOSS(Object.assign({}, s, { onUploadProgress: r }));}).then(function () {return _this5.reportOSSUpload({ id: a });}).then(function (t) {return new Promise(function (n, r) {t.success ? n({ success: !0, filePath: e, fileID: c }) : r(new i({ code: "UPLOAD_FAILED", message: "文件上传失败" }));});});} }, { key: "deleteFile", value: function deleteFile(_ref3) {var e = _ref3.fileList;var t = { method: "serverless.file.resource.delete", params: JSON.stringify({ id: e[0] }) };return this.request(this.setupRequest(t));} }, { key: "hasAccessToken", get: function get() {return !!this.accessToken;} }]);return y;}();var g = { init: function init(e) {var t = new y(e);["deleteFile"].forEach(function (e) {t[e] = s(t[e]).bind(t);});var n = { signInAnonymously: function signInAnonymously() {return t.authorize();}, getLoginState: function getLoginState() {return Promise.resolve(!1);} };return t.auth = function () {return n;}, t;} };var v,_,m = n(function (e, t) {Object.defineProperty(t, "__esModule", { value: !0 }), t.getQuery = function (e, t) {if ("undefined" == typeof window) return !1;var n = t || window.location.search,r = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),o = n.substr(n.indexOf("?") + 1).match(r);return null != o ? o[2] : "";}, t.getHash = function (e) {var t = window.location.hash.match(new RegExp("[#?&/]" + e + "=([^&#]*)"));return t ? t[1] : "";}, t.removeParam = function (e, t) {var n = t.split("?")[0],r = [],o = -1 !== t.indexOf("?") ? t.split("?")[1] : "";if ("" !== o) {for (var s = (r = o.split("&")).length - 1; s >= 0; s -= 1) {r[s].split("=")[0] === e && r.splice(s, 1);}n = n + "?" + r.join("&");}return n;}, t.createPromiseCallback = function () {var e;if (!Promise) {(e = function e() {}).promise = {};var t = function t() {throw new Error('Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.');};return Object.defineProperty(e.promise, "then", { get: t }), Object.defineProperty(e.promise, "catch", { get: t }), e;}var n = new Promise(function (t, n) {e = function e(_e, r) {return _e ? n(_e) : t(r);};});return e.promise = n, e;}, t.getWeixinCode = function () {return t.getQuery("code") || t.getHash("code");}, t.getMiniAppCode = function () {return new Promise(function (e, t) {wx.login({ success: function success(t) {e(t.code);}, fail: function fail(e) {t(e);} });});}, t.isArray = function (e) {return "[object Array]" === Object.prototype.toString.call(e);}, t.isString = function (e) {return "string" == typeof e;}, t.isUndefined = function (e) {return void 0 === e;}, t.isInstanceOf = function (e, t) {return e instanceof t;}, t.isFormData = function (e) {return "[object FormData]" === Object.prototype.toString.call(e);}, t.genSeqId = function () {return Math.random().toString(16).slice(2);}, t.getArgNames = function (e) {var t = e.toString();return t.slice(t.indexOf("(") + 1, t.indexOf(")")).match(/([^\s,]+)/g);}, t.formatUrl = function (e, t, n) {void 0 === n && (n = {});var r = /\?/.test(t),o = "";for (var s in n) {"" === o ? !r && (t += "?") : o += "&", o += s + "=" + encodeURIComponent(n[s]);}return /^http(s)?\:\/\//.test(t += o) ? t : "" + e + t;};}),b = "dist/index.js",w = "./dist/index.d.ts",T = { build: "npm run tsc && webpack", tsc: "tsc -p tsconfig.json", "tsc:w": "tsc -p tsconfig.json -w", test: "jest --verbose false -i", e2e: 'NODE_ENV=e2e webpack && jest --config="./jest.e2e.config.js"  --verbose false -i "e2e"', start: "webpack-dev-server --hot --open", eslint: 'eslint "./**/*.js" "./**/*.ts"', "eslint-fix": 'eslint --fix "./**/*.js" "./**/*.ts"', test_web: "npm run tsc && webpack-dev-server --devtool eval-source-map --progress --colors --hot --inline --content-base ./dist --host jimmytest-088bef.tcb.qcloud.la --port 80 --disableHostCheck true --mode development --config webpack.test.js" },S = { type: "git", url: "https://github.com/TencentCloudBase/tcb-js-sdk" },E = ["tcb", "js-sdk"],k = { "@cloudbase/adapter-interface": "^0.2.0", "@cloudbase/adapter-wx_mp": "^0.2.1", "@cloudbase/database": "^0.9.8" },O = { "@babel/core": "^7.6.2", "@babel/plugin-proposal-class-properties": "^7.5.5", "@babel/plugin-proposal-object-rest-spread": "^7.6.2", "@babel/plugin-transform-runtime": "^7.6.2", "@babel/preset-env": "^7.6.2", "@babel/preset-typescript": "^7.6.0", "@babel/runtime": "^7.6.2", "@types/jest": "^23.1.4", "@types/node": "^10.14.4", "@types/superagent": "^4.1.4", axios: "^0.19.0", "babel-eslint": "^10.0.1", "babel-loader": "^8.0.6", "babel-polyfill": "^6.26.0", eslint: "^5.16.0", "eslint-config-alloy": "^1.4.2", "eslint-config-prettier": "^4.1.0", "eslint-plugin-prettier": "^3.0.1", "eslint-plugin-typescript": "^1.0.0-rc.3", express: "^4.17.1", husky: "^3.1.0", jest: "^24.7.1", "jest-puppeteer": "^4.3.0", "lint-staged": "^9.5.0", "power-assert": "^1.6.1", puppeteer: "^1.20.0", "serve-static": "^1.14.1", "ts-jest": "^23.10.4", "ts-loader": "^6.2.1", typescript: "^3.4.3", "typescript-eslint-parser": "^22.0.0", webpack: "^4.41.3", "webpack-bundle-analyzer": "^3.4.1", "webpack-cli": "^3.3.0", "webpack-dev-server": "^3.3.1", "webpack-merge": "^4.2.2", "webpack-visualizer-plugin": "^0.1.11" },A = { hooks: { "pre-commit": "lint-staged" } },P = { name: "tcb-js-sdk", version: "1.3.5", description: "js sdk for tcb", main: b, types: w, scripts: T, repository: S, keywords: E, author: "jimmyjzhang", license: "ISC", dependencies: k, devDependencies: O, husky: A, "lint-staged": { "*.{js,ts}": ["eslint --fix", "git add"] } },I = (v = Object.freeze({ __proto__: null, name: "tcb-js-sdk", version: "1.3.5", description: "js sdk for tcb", main: b, types: w, scripts: T, repository: S, keywords: E, author: "jimmyjzhang", license: "ISC", dependencies: k, devDependencies: O, husky: A, default: P })) && v.default || v,N = n(function (t, n) {var r = e && e.__importStar || function (e) {if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);}return t.default = e, t;};Object.defineProperty(n, "__esModule", { value: !0 });var o = r(I);n.SDK_VERISON = o.version, n.ACCESS_TOKEN = "access_token", n.ACCESS_TOKEN_Expire = "access_token_expire", n.REFRESH_TOKEN = "refresh_token", n.ANONYMOUS_UUID = "anonymous_uuid", n.LOGIN_TYPE_KEY = "login_type", n.protocol = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:", n.BASE_URL =  false ? undefined : "//tcb-api.tencentcloudapi.com/web";});!function (e) {e.local = "local", e.none = "none", e.session = "session";}(_ || (_ = {}));var x = function x() {},R = function R() {};var C = Object.freeze({ __proto__: null, get StorageType() {return _;}, AbstractSDKRequest: x, AbstractStorage: R, formatUrl: function formatUrl(e, t, n) {void 0 === n && (n = {});var r = /\?/.test(t),o = "";for (var s in n) {"" === o ? !r && (t += "?") : o += "&", o += s + "=" + encodeURIComponent(n[s]);}return /^http(s)?\:\/\//.test(t += o) ? t : "" + e + t;} }),q = n(function (t, n) {var _r,o = e && e.__extends || (_r = function r(e, t) {return (_r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {e.__proto__ = t;} || function (e, t) {for (var n in t) {t.hasOwnProperty(n) && (e[n] = t[n]);}})(e, t);}, function (e, t) {function n() {this.constructor = e;}_r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());}),s = e && e.__assign || function () {return (s = Object.assign || function (e) {for (var t, n = 1, r = arguments.length; n < r; n++) {for (var o in t = arguments[n]) {Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);}}return e;}).apply(this, arguments);},i = e && e.__awaiter || function (e, t, n, r) {return new (n || (n = Promise))(function (o, s) {function i(e) {try {c(r.next(e));} catch (e) {s(e);}}function a(e) {try {c(r.throw(e));} catch (e) {s(e);}}function c(e) {var t;e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {e(t);})).then(i, a);}c((r = r.apply(e, t || [])).next());});},a = e && e.__generator || function (e, t) {var n,r,o,s,i = { label: 0, sent: function sent() {if (1 & o[0]) throw o[1];return o[1];}, trys: [], ops: [] };return s = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {return this;}), s;function a(s) {return function (a) {return function (s) {if (n) throw new TypeError("Generator is already executing.");for (; i;) {try {if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {case 0:case 1:o = s;break;case 4:return i.label++, { value: s[1], done: !1 };case 5:i.label++, r = s[1], s = [0];continue;case 7:s = i.ops.pop(), i.trys.pop();continue;default:if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {i = 0;continue;}if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {i.label = s[1];break;}if (6 === s[0] && i.label < o[1]) {i.label = o[1], o = s;break;}if (o && i.label < o[2]) {i.label = o[2], i.ops.push(s);break;}o[2] && i.ops.pop(), i.trys.pop();continue;}s = t.call(e, i);} catch (e) {s = [6, e], r = 0;} finally {n = o = 0;}}if (5 & s[0]) throw s[1];return { value: s[0] ? s[1] : void 0, done: !0 };}([s, a]);};}};Object.defineProperty(n, "__esModule", { value: !0 });var c = function (e) {function t() {return null !== e && e.apply(this, arguments) || this;}return o(t, e), t.prototype.get = function (e) {return this._request(s(s({}, e), { method: "get" }));}, t.prototype.post = function (e) {return this._request(s(s({}, e), { method: "post" }));}, t.prototype.upload = function (e) {var t = e.data,n = e.file,r = e.name,o = new FormData();for (var i in t) {o.append(i, t[i]);}return o.append("key", r), o.append("file", n), this._request(s(s({}, e), { data: o, method: "post" }));}, t.prototype.download = function (e) {return i(this, void 0, void 0, function () {var t, n;return a(this, function (r) {return t = decodeURIComponent(new URL(e.url).pathname.split("/").pop() || ""), (n = document.createElement("a")).href = e.url, n.setAttribute("download", t), n.setAttribute("target", "_blank"), document.body.appendChild(n), n.click(), [2, new Promise(function (t) {t({ statusCode: 200, tempFilePath: e.url });})];});});}, t.prototype._request = function (e) {var t = String(e.method).toLowerCase() || "get";return new Promise(function (n) {var r = e.url,o = e.headers,s = void 0 === o ? {} : o,i = e.data,a = e.responseType,c = m.formatUrl(N.protocol, r, "get" === t ? i : {}),u = new XMLHttpRequest();for (var l in u.open(t, c), a && (u.responseType = a), s) {u.setRequestHeader(l, s[l]);}u.onreadystatechange = function () {if (4 === u.readyState) {var e = { statusCode: u.status };try {e.data = JSON.parse(u.responseText);} catch (e) {}n(e);}}, u.send("post" === t && m.isFormData(i) ? i : JSON.stringify(i || {}));});}, t;}(C.AbstractSDKRequest);n.WebRequest = c, n.genAdapter = function () {return { root: window, reqClass: c, wsClass: WebSocket, localStorage: localStorage, sessionStorage: sessionStorage };};}),U = n(function (t, n) {var r = e && e.__importStar || function (e) {if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);}return t.default = e, t;};Object.defineProperty(n, "__esModule", { value: !0 });var o,s = r(q);!function (e) {e.WEB = "web", e.WX_MP = "wx_mp";}(o = n.RUNTIME || (n.RUNTIME = {})), n.useAdapters = function (e) {for (var t = 0, n = m.isArray(e) ? e : [e]; t < n.length; t++) {var r = n[t],o = r.isMatch,s = r.genAdapter,i = r.runtime;if (o()) return { adapter: s(), runtime: i };}}, n.useDefaultAdapter = function () {return { adapter: s.genAdapter(), runtime: o.WEB };}, n.Adapter = { adapter: null, runtime: void 0 };}),j = n(function (t, n) {var _r2,o = e && e.__extends || (_r2 = function r(e, t) {return (_r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {e.__proto__ = t;} || function (e, t) {for (var n in t) {t.hasOwnProperty(n) && (e[n] = t[n]);}})(e, t);}, function (e, t) {function n() {this.constructor = e;}_r2(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());});Object.defineProperty(n, "__esModule", { value: !0 });var s = function () {function e(e) {switch (U.Adapter.adapter.primaryStorage || e) {case "local":this.storageClass = U.Adapter.adapter.localStorage || new i();break;case "none":this.storageClass = new i();break;default:this.storageClass = U.Adapter.adapter.sessionStorage || new i();}}return e.prototype.setStore = function (e, t, n) {try {if (!this.storageClass) return;} catch (e) {return;}var r,o = {};o.version = n || "localCachev1", o.content = t, r = JSON.stringify(o);try {this.storageClass.setItem(e, r);} catch (e) {return;}}, e.prototype.getStore = function (e, t) {try {if (!this.storageClass) return;} catch (e) {return "";}t = t || "localCachev1";var n = this.storageClass.getItem(e);return n && n.indexOf(t) >= 0 ? JSON.parse(n).content : "";}, e.prototype.removeStore = function (e) {this.storageClass.removeItem(e);}, e;}();n.Cache = s;var i = function (e) {function t() {var t = e.call(this) || this;return U.Adapter.adapter.root.tcbObject || (U.Adapter.adapter.root.tcbObject = {}), t;}return o(t, e), t.prototype.setItem = function (e, t) {U.Adapter.adapter.root.tcbObject[e] = t;}, t.prototype.getItem = function (e) {return U.Adapter.adapter.root.tcbObject[e];}, t.prototype.removeItem = function (e) {delete U.Adapter.adapter.root.tcbObject[e];}, t.prototype.clear = function () {delete U.Adapter.adapter.root.tcbObject;}, t;}(C.AbstractStorage);}),D = n(function (t, n) {var _r3,o = e && e.__extends || (_r3 = function r(e, t) {return (_r3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {e.__proto__ = t;} || function (e, t) {for (var n in t) {t.hasOwnProperty(n) && (e[n] = t[n]);}})(e, t);}, function (e, t) {function n() {this.constructor = e;}_r3(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());}),s = e && e.__spreadArrays || function () {for (var e = 0, t = 0, n = arguments.length; t < n; t++) {e += arguments[t].length;}var r = Array(e),o = 0;for (t = 0; t < n; t++) {for (var s = arguments[t], i = 0, a = s.length; i < a; i++, o++) {r[o] = s[i];}}return r;};Object.defineProperty(n, "__esModule", { value: !0 });var i = function i(e, t) {this.data = t || null, this.name = e;};n.IEvent = i;var a = function (e) {function t(t, n) {var r = e.call(this, "error", { error: t, data: n }) || this;return r.error = t, r;}return o(t, e), t;}(i);n.IErrorEvent = a;var c = function () {function e() {this._listeners = {};}return e.prototype.on = function (e, t) {return function (e, t, n) {n[e] = n[e] || [], n[e].push(t);}(e, t, this._listeners), this;}, e.prototype.off = function (e, t) {return function (e, t, n) {if (n && n[e]) {var r = n[e].indexOf(t);-1 !== r && n[e].splice(r, 1);}}(e, t, this._listeners), this;}, e.prototype.fire = function (e, t) {if (m.isInstanceOf(e, a)) return console.error(e.error), this;var n = m.isString(e) ? new i(e, t || {}) : e,r = n.name;if (this._listens(r)) {n.target = this;for (var o = 0, c = this._listeners[r] ? s(this._listeners[r]) : []; o < c.length; o++) {c[o].call(this, n);}}return this;}, e.prototype._listens = function (e) {return this._listeners[e] && this._listeners[e].length > 0;}, e;}();n.IEventEmitter = c;var u = new c();n.addEventListener = function (e, t) {u.on(e, t);}, n.activateEvent = function (e, t) {void 0 === t && (t = {}), u.fire(e, t);}, n.removeEventListener = function (e, t) {u.off(e, t);}, n.EVENTS = { LOGIN_STATE_CHANGED: "loginStateChanged", LOGIN_STATE_EXPIRE: "loginStateExpire", LOGIN_TYPE_CHANGE: "loginTypeChanged", ANONYMOUS_CONVERTED: "anonymousConverted", REFRESH_ACCESS_TOKEN: "refreshAccessToken" };}),L = n(function (t, n) {var r = e && e.__assign || function () {return (r = Object.assign || function (e) {for (var t, n = 1, r = arguments.length; n < r; n++) {for (var o in t = arguments[n]) {Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);}}return e;}).apply(this, arguments);},o = e && e.__awaiter || function (e, t, n, r) {return new (n || (n = Promise))(function (o, s) {function i(e) {try {c(r.next(e));} catch (e) {s(e);}}function a(e) {try {c(r.throw(e));} catch (e) {s(e);}}function c(e) {var t;e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {e(t);})).then(i, a);}c((r = r.apply(e, t || [])).next());});},s = e && e.__generator || function (e, t) {var n,r,o,s,i = { label: 0, sent: function sent() {if (1 & o[0]) throw o[1];return o[1];}, trys: [], ops: [] };return s = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {return this;}), s;function a(s) {return function (a) {return function (s) {if (n) throw new TypeError("Generator is already executing.");for (; i;) {try {if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {case 0:case 1:o = s;break;case 4:return i.label++, { value: s[1], done: !1 };case 5:i.label++, r = s[1], s = [0];continue;case 7:s = i.ops.pop(), i.trys.pop();continue;default:if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {i = 0;continue;}if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {i.label = s[1];break;}if (6 === s[0] && i.label < o[1]) {i.label = o[1], o = s;break;}if (o && i.label < o[2]) {i.label = o[2], i.ops.push(s);break;}o[2] && i.ops.pop(), i.trys.pop();continue;}s = t.call(e, i);} catch (e) {s = [6, e], r = 0;} finally {n = o = 0;}}if (5 & s[0]) throw s[1];return { value: s[0] ? s[1] : void 0, done: !0 };}([s, a]);};}};Object.defineProperty(n, "__esModule", { value: !0 });var i = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously"],a = { "X-SDK-Version": N.SDK_VERISON };function c(e, t, n) {var o = e[t];e[t] = function (t) {var s = {},i = {};n.forEach(function (n) {var r = n.call(e, t),o = r.data,a = r.headers;Object.assign(s, o), Object.assign(i, a);});var a = t.data;return a && function () {if (m.isFormData(a)) for (var e in s) {a.append(e, s[e]);} else t.data = r(r({}, a), s);}(), t.headers = r(r({}, t.headers || {}), i), o.call(e, t);};}function u() {var e = m.genSeqId();return { data: { seqId: e }, headers: r(r({}, a), { "x-seqid": e }) };}var l = function () {function e(e) {void 0 === e && (e = {}), this.config = e, this.cache = new j.Cache(e.persistence), this.accessTokenKey = N.ACCESS_TOKEN + "_" + e.env, this.accessTokenExpireKey = N.ACCESS_TOKEN_Expire + "_" + e.env, this.refreshTokenKey = N.REFRESH_TOKEN + "_" + e.env, this.anonymousUuidKey = N.ANONYMOUS_UUID + "_" + e.env, this.loginTypeKey = N.LOGIN_TYPE_KEY + "_" + e.env, this._reqClass = new U.Adapter.adapter.reqClass(), c(this._reqClass, "post", [u]), c(this._reqClass, "upload", [u]), c(this._reqClass, "download", [u]);}return e.prototype.post = function (e) {return o(this, void 0, void 0, function () {return s(this, function (t) {switch (t.label) {case 0:return [4, this._reqClass.post(e)];case 1:return [2, t.sent()];}});});}, e.prototype.upload = function (e) {return o(this, void 0, void 0, function () {return s(this, function (t) {switch (t.label) {case 0:return [4, this._reqClass.upload(e)];case 1:return [2, t.sent()];}});});}, e.prototype.download = function (e) {return o(this, void 0, void 0, function () {return s(this, function (t) {switch (t.label) {case 0:return [4, this._reqClass.download(e)];case 1:return [2, t.sent()];}});});}, e.prototype.refreshAccessToken = function () {return o(this, void 0, void 0, function () {var e, t, n;return s(this, function (r) {switch (r.label) {case 0:this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken()), r.label = 1;case 1:return r.trys.push([1, 3,, 4]), [4, this._refreshAccessTokenPromise];case 2:return e = r.sent(), [3, 4];case 3:return n = r.sent(), t = n, [3, 4];case 4:if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t) throw t;return [2, e];}});});}, e.prototype._refreshAccessToken = function () {return o(this, void 0, void 0, function () {var e, t, n, r;return s(this, function (o) {switch (o.label) {case 0:if (this.cache.removeStore(this.accessTokenKey), this.cache.removeStore(this.accessTokenExpireKey), !(e = this.cache.getStore(this.refreshTokenKey))) throw new Error("[tcb-js-sdk] 未登录CloudBase");return t = { refresh_token: e }, this.cache.getStore(this.loginTypeKey) === M.LOGINTYPE.ANONYMOUS && (t.anonymous_uuid = this.cache.getStore(this.anonymousUuidKey)), [4, this.request("auth.getJwt", t)];case 1:if ((n = o.sent()).data.code) throw "SIGN_PARAM_INVALID" !== (r = n.data.code) && "REFRESH_TOKEN_EXPIRED" !== r && "INVALID_REFRESH_TOKEN" !== r || (D.activateEvent(D.EVENTS.LOGIN_STATE_EXPIRE), this.cache.removeStore(this.refreshTokenKey)), new Error("[tcb-js-sdk] 刷新access token失败：" + n.data.code);return n.data.access_token ? (D.activateEvent(D.EVENTS.REFRESH_ACCESS_TOKEN), this.cache.setStore(this.accessTokenKey, n.data.access_token), this.cache.setStore(this.accessTokenExpireKey, n.data.access_token_expire + Date.now()), D.activateEvent(D.EVENTS.LOGIN_TYPE_CHANGE, n.data.login_type), [2, { accessToken: n.data.access_token, accessTokenExpire: n.data.access_token_expire }]) : (n.data.refresh_token && (this.cache.removeStore(this.refreshTokenKey), this.cache.setStore(this.refreshTokenKey, n.data.refresh_token), this._refreshAccessToken()), [2]);}});});}, e.prototype.getAccessToken = function () {return o(this, void 0, void 0, function () {var e, t, n, r;return s(this, function (o) {switch (o.label) {case 0:return e = this.cache.getStore(this.accessTokenKey), t = this.cache.getStore(this.accessTokenExpireKey), n = !0, (r = this._shouldRefreshAccessTokenHook) ? [4, this._shouldRefreshAccessTokenHook(e, t)] : [3, 2];case 1:r = !o.sent(), o.label = 2;case 2:return r && (n = !1), (!e || !t || t < Date.now()) && n ? [2, this.refreshAccessToken()] : [2, { accessToken: e, accessTokenExpire: t }];}});});}, e.prototype.request = function (e, t, n) {return o(this, void 0, void 0, function () {var o, a, c, u, l, h, f, p, d, y, g, v;return s(this, function (s) {switch (s.label) {case 0:return o = "application/x-www-form-urlencoded", a = r({ action: e, env: this.config.env, dataVersion: "2019-08-16" }, t), -1 !== i.indexOf(e) ? [3, 2] : (c = a, [4, this.getAccessToken()]);case 1:c.access_token = s.sent().accessToken, s.label = 2;case 2:if ("storage.uploadFile" === e) {for (l in u = new FormData()) {u.hasOwnProperty(l) && void 0 !== u[l] && u.append(l, a[l]);}o = "multipart/form-data";} else o = "application/json;charset=UTF-8", u = a;return h = { headers: { "content-type": o } }, n && n.onUploadProgress && (h.onUploadProgress = n.onUploadProgress), f = t.parse, p = t.query, d = t.search, y = { env: this.config.env }, f && (y.parse = !0), p && (y = r(r({}, p), y)), g = m.formatUrl(N.protocol, N.BASE_URL, y), d && (g += d), [4, this.post(r({ url: g, data: u }, h))];case 3:if (v = s.sent(), 200 !== Number(v.status) && 200 !== Number(v.statusCode) || !v.data) throw new Error("network request error");return [2, v];}});});}, e.prototype.send = function (e, t) {return void 0 === t && (t = {}), o(this, void 0, void 0, function () {var n, r;return s(this, function (o) {switch (o.label) {case 0:return [4, this.request(e, t, { onUploadProgress: t.onUploadProgress })];case 1:return n = o.sent(), clearTimeout(void 0), "ACCESS_TOKEN_EXPIRED" !== n.data.code || -1 !== i.indexOf(e) ? [3, 4] : [4, this.refreshAccessToken()];case 2:return o.sent(), [4, this.request(e, t, { onUploadProgress: t.onUploadProgress })];case 3:if ((r = o.sent()).data.code) throw new Error("[" + r.data.code + "] " + r.data.message);return [2, r.data];case 4:if (n.data.code) throw new Error("[" + n.data.code + "] " + n.data.message);return [2, n.data];}});});}, e;}();n.Request = l;}),M = n(function (t, n) {var r,o = e && e.__awaiter || function (e, t, n, r) {return new (n || (n = Promise))(function (o, s) {function i(e) {try {c(r.next(e));} catch (e) {s(e);}}function a(e) {try {c(r.throw(e));} catch (e) {s(e);}}function c(e) {var t;e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {e(t);})).then(i, a);}c((r = r.apply(e, t || [])).next());});},s = e && e.__generator || function (e, t) {var n,r,o,s,i = { label: 0, sent: function sent() {if (1 & o[0]) throw o[1];return o[1];}, trys: [], ops: [] };return s = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {return this;}), s;function a(s) {return function (a) {return function (s) {if (n) throw new TypeError("Generator is already executing.");for (; i;) {try {if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {case 0:case 1:o = s;break;case 4:return i.label++, { value: s[1], done: !1 };case 5:i.label++, r = s[1], s = [0];continue;case 7:s = i.ops.pop(), i.trys.pop();continue;default:if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {i = 0;continue;}if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {i.label = s[1];break;}if (6 === s[0] && i.label < o[1]) {i.label = o[1], o = s;break;}if (o && i.label < o[2]) {i.label = o[2], i.ops.push(s);break;}o[2] && i.ops.pop(), i.trys.pop();continue;}s = t.call(e, i);} catch (e) {s = [6, e], r = 0;} finally {n = o = 0;}}if (5 & s[0]) throw s[1];return { value: s[0] ? s[1] : void 0, done: !0 };}([s, a]);};}};Object.defineProperty(n, "__esModule", { value: !0 }), function (e) {e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.CUSTOM = "CUSTOM", e.NULL = "NULL";}(r = n.LOGINTYPE || (n.LOGINTYPE = {}));var i = function () {function e(e) {this._loginType = r.NULL, this.config = e, this.onLoginTypeChanged = this.onLoginTypeChanged.bind(this), D.addEventListener(D.EVENTS.LOGIN_TYPE_CHANGE, this.onLoginTypeChanged);}return e.prototype.init = function () {this.httpRequest = new L.Request(this.config), this.cache = new j.Cache(this.config.persistence), this.accessTokenKey = N.ACCESS_TOKEN + "_" + this.config.env, this.accessTokenExpireKey = N.ACCESS_TOKEN_Expire + "_" + this.config.env, this.refreshTokenKey = N.REFRESH_TOKEN + "_" + this.config.env, this.loginTypeKey = N.LOGIN_TYPE_KEY + "_" + this.config.env;}, e.prototype.onLoginTypeChanged = function (e) {this._loginType = e.data, this.cache.setStore(this.loginTypeKey, this._loginType);}, Object.defineProperty(e.prototype, "loginType", { get: function get() {return this._loginType;}, enumerable: !0, configurable: !0 }), e.prototype.setRefreshToken = function (e) {this.cache.removeStore(this.accessTokenKey), this.cache.removeStore(this.accessTokenExpireKey), this.cache.setStore(this.refreshTokenKey, e);}, e.prototype.getRefreshTokenByWXCode = function (e, t, n) {return o(this, void 0, void 0, function () {var r;return s(this, function (o) {return "auth.getJwt", r = U.Adapter.runtime === U.RUNTIME.WX_MP ? "1" : "0", [2, this.httpRequest.send("auth.getJwt", { appid: e, loginType: t, code: n, hybridMiniapp: r }).then(function (e) {if (e.code) throw new Error("[tcb-js-sdk] 微信登录失败: " + e.code);if (e.refresh_token) return { refreshToken: e.refresh_token, accessToken: e.access_token, accessTokenExpire: e.access_token_expire };throw new Error("[tcb-js-sdk] getJwt未返回refreshToken");})];});});}, e;}();n.default = i;}),K = n(function (t, n) {var _r4,o = e && e.__extends || (_r4 = function r(e, t) {return (_r4 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {e.__proto__ = t;} || function (e, t) {for (var n in t) {t.hasOwnProperty(n) && (e[n] = t[n]);}})(e, t);}, function (e, t) {function n() {this.constructor = e;}_r4(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());}),s = e && e.__awaiter || function (e, t, n, r) {return new (n || (n = Promise))(function (o, s) {function i(e) {try {c(r.next(e));} catch (e) {s(e);}}function a(e) {try {c(r.throw(e));} catch (e) {s(e);}}function c(e) {var t;e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {e(t);})).then(i, a);}c((r = r.apply(e, t || [])).next());});},i = e && e.__generator || function (e, t) {var n,r,o,s,i = { label: 0, sent: function sent() {if (1 & o[0]) throw o[1];return o[1];}, trys: [], ops: [] };return s = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {return this;}), s;function a(s) {return function (a) {return function (s) {if (n) throw new TypeError("Generator is already executing.");for (; i;) {try {if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {case 0:case 1:o = s;break;case 4:return i.label++, { value: s[1], done: !1 };case 5:i.label++, r = s[1], s = [0];continue;case 7:s = i.ops.pop(), i.trys.pop();continue;default:if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {i = 0;continue;}if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {i.label = s[1];break;}if (6 === s[0] && i.label < o[1]) {i.label = o[1], o = s;break;}if (o && i.label < o[2]) {i.label = o[2], i.ops.push(s);break;}o[2] && i.ops.pop(), i.trys.pop();continue;}s = t.call(e, i);} catch (e) {s = [6, e], r = 0;} finally {n = o = 0;}}if (5 & s[0]) throw s[1];return { value: s[0] ? s[1] : void 0, done: !0 };}([s, a]);};}},a = e && e.__importStar || function (e) {if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);}return t.default = e, t;};Object.defineProperty(n, "__esModule", { value: !0 });var c,u,l = a(m),h = a(M);!function (e) {e.snsapi_base = "snsapi_base", e.snsapi_userinfo = "snsapi_userinfo", e.snsapi_login = "snsapi_login";}(c || (c = {})), function (e) {e.redirect = "redirect", e.prompt = "prompt";}(u || (u = {}));var f = {},p = function (e) {function t(t, n, r, o, s) {var i = e.call(this, t) || this;return i.config = t, i.appid = n, i.scope = U.Adapter.runtime === U.RUNTIME.WX_MP ? "snsapi_base" : r, i.state = s || "weixin", i.loginMode = o || "redirect", i;}return o(t, e), t.prototype.signIn = function () {return s(this, void 0, void 0, function () {var e, t, n;return i(this, function (r) {switch (r.label) {case 0:f[this.config.env] || (f[this.config.env] = this._signIn()), r.label = 1;case 1:return r.trys.push([1, 3,, 4]), [4, f[this.config.env]];case 2:return e = r.sent(), [3, 4];case 3:return n = r.sent(), t = n, [3, 4];case 4:if (f[this.config.env] = null, t) throw t;return [2, e];}});});}, t.prototype._signIn = function () {return s(this, void 0, void 0, function () {var e, t, n, r, o, s;return i(this, function (i) {switch (i.label) {case 0:if (e = this.cache.getStore(this.accessTokenKey), t = this.cache.getStore(this.accessTokenExpireKey), e) {if (t && t > Date.now()) return [2, { credential: { accessToken: e, refreshToken: this.cache.getStore(this.refreshTokenKey) } }];this.cache.removeStore(this.accessTokenKey), this.cache.removeStore(this.accessTokenExpireKey);}if (!1 === Object.values(c).includes(c[this.scope])) throw new Error("错误的scope类型");return U.Adapter.runtime !== U.RUNTIME.WX_MP ? [3, 2] : [4, l.getMiniAppCode()];case 1:return n = i.sent(), [3, 4];case 2:return [4, l.getWeixinCode()];case 3:if (!(n = i.sent())) return [2, this.redirect()];i.label = 4;case 4:return r = function (e) {switch (e) {case c.snsapi_login:return "WECHAT-OPEN";default:return "WECHAT-PUBLIC";}}(this.scope), [4, this.getRefreshTokenByWXCode(this.appid, r, n)];case 5:return o = i.sent(), s = o.refreshToken, this.cache.setStore(this.refreshTokenKey, s), o.accessToken && this.cache.setStore(this.accessTokenKey, o.accessToken), o.accessTokenExpire && this.cache.setStore(this.accessTokenExpireKey, o.accessTokenExpire + Date.now()), D.activateEvent(D.EVENTS.LOGIN_STATE_CHANGED), D.activateEvent(D.EVENTS.LOGIN_TYPE_CHANGE, h.LOGINTYPE.WECHAT), [2, { credential: { refreshToken: s } }];}});});}, t.prototype.redirect = function () {var e = l.removeParam("code", location.href);e = l.removeParam("state", e), e = encodeURIComponent(e);var t = "//open.weixin.qq.com/connect/oauth2/authorize";"snsapi_login" === this.scope && (t = "//open.weixin.qq.com/connect/qrconnect"), "redirect" === u[this.loginMode] && (location.href = t + "?appid=" + this.appid + "&redirect_uri=" + e + "&response_type=code&scope=" + this.scope + "&state=" + this.state + "#wechat_redirect");}, t;}(h.default);n.default = p;}),F = n(function (t, n) {var _r5,o = e && e.__extends || (_r5 = function r(e, t) {return (_r5 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {e.__proto__ = t;} || function (e, t) {for (var n in t) {t.hasOwnProperty(n) && (e[n] = t[n]);}})(e, t);}, function (e, t) {function n() {this.constructor = e;}_r5(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());}),s = e && e.__assign || function () {return (s = Object.assign || function (e) {for (var t, n = 1, r = arguments.length; n < r; n++) {for (var o in t = arguments[n]) {Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);}}return e;}).apply(this, arguments);},i = e && e.__awaiter || function (e, t, n, r) {return new (n || (n = Promise))(function (o, s) {function i(e) {try {c(r.next(e));} catch (e) {s(e);}}function a(e) {try {c(r.throw(e));} catch (e) {s(e);}}function c(e) {var t;e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {e(t);})).then(i, a);}c((r = r.apply(e, t || [])).next());});},a = e && e.__generator || function (e, t) {var n,r,o,s,i = { label: 0, sent: function sent() {if (1 & o[0]) throw o[1];return o[1];}, trys: [], ops: [] };return s = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {return this;}), s;function a(s) {return function (a) {return function (s) {if (n) throw new TypeError("Generator is already executing.");for (; i;) {try {if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {case 0:case 1:o = s;break;case 4:return i.label++, { value: s[1], done: !1 };case 5:i.label++, r = s[1], s = [0];continue;case 7:s = i.ops.pop(), i.trys.pop();continue;default:if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {i = 0;continue;}if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {i.label = s[1];break;}if (6 === s[0] && i.label < o[1]) {i.label = o[1], o = s;break;}if (o && i.label < o[2]) {i.label = o[2], i.ops.push(s);break;}o[2] && i.ops.pop(), i.trys.pop();continue;}s = t.call(e, i);} catch (e) {s = [6, e], r = 0;} finally {n = o = 0;}}if (5 & s[0]) throw s[1];return { value: s[0] ? s[1] : void 0, done: !0 };}([s, a]);};}},c = e && e.__importStar || function (e) {if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);}return t.default = e, t;};Object.defineProperty(n, "__esModule", { value: !0 });var u = c(M),l = function (e) {function t(t) {var n = e.call(this, s(s({}, t), { persistence: "local" })) || this;return n._anonymousUuidKey = N.ANONYMOUS_UUID + "_" + n.config.env, n._loginTypeKey = N.LOGIN_TYPE_KEY + "_" + n.config.env, n;}return o(t, e), t.prototype.init = function () {e.prototype.init.call(this);}, t.prototype.signIn = function () {return i(this, void 0, void 0, function () {var e, t, n;return a(this, function (r) {switch (r.label) {case 0:return e = this.cache.getStore(this._anonymousUuidKey) || void 0, t = this.cache.getStore(this.refreshTokenKey) || void 0, [4, this.httpRequest.send("auth.signInAnonymously", { anonymous_uuid: e, refresh_token: t })];case 1:return (n = r.sent()).uuid && n.refresh_token ? (this._setAnonymousUUID(n.uuid), this.setRefreshToken(n.refresh_token), [4, this.httpRequest.refreshAccessToken()]) : [3, 3];case 2:return r.sent(), D.activateEvent(D.EVENTS.LOGIN_STATE_CHANGED), D.activateEvent(D.EVENTS.LOGIN_TYPE_CHANGE, u.LOGINTYPE.ANONYMOUS), [2, { credential: { refreshToken: n.refresh_token } }];case 3:throw new Error("[tcb-js-sdk] 匿名登录失败");}});});}, t.prototype.linkAndRetrieveDataWithTicket = function (e) {return i(this, void 0, void 0, function () {var t, n, r;return a(this, function (o) {switch (o.label) {case 0:return t = this.cache.getStore(this._anonymousUuidKey), n = this.cache.getStore(this.refreshTokenKey), [4, this.httpRequest.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: t, refresh_token: n, ticket: e })];case 1:return (r = o.sent()).refresh_token ? (this._clearAnonymousUUID(), this.setRefreshToken(r.refresh_token), [4, this.httpRequest.refreshAccessToken()]) : [3, 3];case 2:return o.sent(), D.activateEvent(D.EVENTS.ANONYMOUS_CONVERTED, { refresh_token: r.refresh_token }), D.activateEvent(D.EVENTS.LOGIN_TYPE_CHANGE, u.LOGINTYPE.CUSTOM), [2, { credential: { refreshToken: r.refresh_token } }];case 3:throw new Error("[tcb-js-sdk] 匿名转化失败");}});});}, t.prototype.getAllStore = function () {var e = {};return e[this.refreshTokenKey] = this.cache.getStore(this.refreshTokenKey) || "", e[this._loginTypeKey] = this.cache.getStore(this._loginTypeKey) || "", e[this.accessTokenKey] = this.cache.getStore(this.accessTokenKey) || "", e[this.accessTokenExpireKey] = this.cache.getStore(this.accessTokenExpireKey) || "", e;}, t.prototype._setAnonymousUUID = function (e) {this.cache.removeStore(this._anonymousUuidKey), this.cache.setStore(this._anonymousUuidKey, e), this.cache.setStore(this._loginTypeKey, u.LOGINTYPE.ANONYMOUS);}, t.prototype._clearAnonymousUUID = function () {this.cache.removeStore(this._anonymousUuidKey);}, t;}(u.default);n.AnonymousAuthProvider = l;}),G = n(function (t, n) {var _r6,o = e && e.__extends || (_r6 = function r(e, t) {return (_r6 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {e.__proto__ = t;} || function (e, t) {for (var n in t) {t.hasOwnProperty(n) && (e[n] = t[n]);}})(e, t);}, function (e, t) {function n() {this.constructor = e;}_r6(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());}),s = e && e.__assign || function () {return (s = Object.assign || function (e) {for (var t, n = 1, r = arguments.length; n < r; n++) {for (var o in t = arguments[n]) {Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);}}return e;}).apply(this, arguments);},i = e && e.__awaiter || function (e, t, n, r) {return new (n || (n = Promise))(function (o, s) {function i(e) {try {c(r.next(e));} catch (e) {s(e);}}function a(e) {try {c(r.throw(e));} catch (e) {s(e);}}function c(e) {var t;e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {e(t);})).then(i, a);}c((r = r.apply(e, t || [])).next());});},a = e && e.__generator || function (e, t) {var n,r,o,s,i = { label: 0, sent: function sent() {if (1 & o[0]) throw o[1];return o[1];}, trys: [], ops: [] };return s = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {return this;}), s;function a(s) {return function (a) {return function (s) {if (n) throw new TypeError("Generator is already executing.");for (; i;) {try {if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {case 0:case 1:o = s;break;case 4:return i.label++, { value: s[1], done: !1 };case 5:i.label++, r = s[1], s = [0];continue;case 7:s = i.ops.pop(), i.trys.pop();continue;default:if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {i = 0;continue;}if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {i.label = s[1];break;}if (6 === s[0] && i.label < o[1]) {i.label = o[1], o = s;break;}if (o && i.label < o[2]) {i.label = o[2], i.ops.push(s);break;}o[2] && i.ops.pop(), i.trys.pop();continue;}s = t.call(e, i);} catch (e) {s = [6, e], r = 0;} finally {n = o = 0;}}if (5 & s[0]) throw s[1];return { value: s[0] ? s[1] : void 0, done: !0 };}([s, a]);};}},c = e && e.__importDefault || function (e) {return e && e.__esModule ? e : { default: e };},u = e && e.__importStar || function (e) {if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);}return t.default = e, t;};Object.defineProperty(n, "__esModule", { value: !0 });var l = c(K),h = u(M),f = function (e) {function t(t) {var n = e.call(this, t) || this;return n.config = t, n;}return o(t, e), t.prototype.init = function () {e.prototype.init.call(this), this.customAuthProvider = new h.default(this.config), this.customAuthProvider.init();}, t.prototype.weixinAuthProvider = function (e) {var t = e.appid,n = e.scope,r = e.loginMode,o = e.state,s = new l.default(this.config, t, n, r, o);return s.init(), s;}, t.prototype.signInAnonymously = function () {return i(this, void 0, void 0, function () {var e = this;return a(this, function (t) {switch (t.label) {case 0:return this._anonymousAuthProvider || (this._anonymousAuthProvider = new F.AnonymousAuthProvider(this.config), this._anonymousAuthProvider.init()), D.addEventListener(D.EVENTS.LOGIN_TYPE_CHANGE, function (t) {if (t && t.data === h.LOGINTYPE.ANONYMOUS) {var n = e._anonymousAuthProvider.getAllStore();for (var r in n) {n[r] && e.httpRequest.cache.setStore(r, n[r]);}}}), [4, this._anonymousAuthProvider.signIn()];case 1:return [2, t.sent()];}});});}, t.prototype.linkAndRetrieveDataWithTicket = function (e) {return i(this, void 0, void 0, function () {var t = this;return a(this, function (n) {switch (n.label) {case 0:return this._anonymousAuthProvider || (this._anonymousAuthProvider = new F.AnonymousAuthProvider(this.config), this._anonymousAuthProvider.init()), D.addEventListener(D.EVENTS.ANONYMOUS_CONVERTED, function (e) {var n = e.data.refresh_token;n && t.httpRequest.cache.setStore(t.refreshTokenKey, n);}), [4, this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e)];case 1:return [2, n.sent()];}});});}, t.prototype.signOut = function () {return i(this, void 0, void 0, function () {var e, t, n, r, o, s, i;return a(this, function (a) {switch (a.label) {case 0:if (this.loginType === h.LOGINTYPE.ANONYMOUS) throw new Error("[tcb-js-sdk] 匿名用户不支持登出操作");return e = this.httpRequest, t = e.cache, n = e.refreshTokenKey, r = e.accessTokenKey, o = e.accessTokenExpireKey, "auth.logout", (s = t.getStore(n)) ? [4, this.httpRequest.send("auth.logout", { refresh_token: s })] : [2];case 1:return i = a.sent(), t.removeStore(n), t.removeStore(r), t.removeStore(o), D.activateEvent(D.EVENTS.LOGIN_STATE_CHANGED), D.activateEvent(D.EVENTS.LOGIN_TYPE_CHANGE, h.LOGINTYPE.NULL), [2, i];}});});}, t.prototype.getAccessToken = function () {return i(this, void 0, void 0, function () {var e;return a(this, function (t) {switch (t.label) {case 0:return e = {}, [4, this.httpRequest.getAccessToken()];case 1:return [2, (e.accessToken = t.sent().accessToken, e.env = this.config.env, e)];}});});}, t.prototype.onLoginStateExpire = function (e) {D.addEventListener("loginStateExpire", e);}, t.prototype.getLoginState = function () {return i(this, void 0, void 0, function () {var e, t, n, r, o;return a(this, function (s) {switch (s.label) {case 0:if (e = this.httpRequest, t = e.cache, n = e.refreshTokenKey, r = e.accessTokenKey, !(o = t.getStore(n))) return [3, 5];s.label = 1;case 1:return s.trys.push([1, 3,, 4]), [4, this.httpRequest.refreshAccessToken()];case 2:return s.sent(), [3, 4];case 3:return s.sent(), [2, null];case 4:return [2, { isAnonymous: this.loginType === h.LOGINTYPE.ANONYMOUS, credential: { refreshToken: o, accessToken: t.getStore(r) } }];case 5:return [2, null];}});});}, t.prototype.signInWithTicket = function (e) {return i(this, void 0, void 0, function () {var t, n, r, o;return a(this, function (s) {switch (s.label) {case 0:if ("string" != typeof e) throw new Error("ticket must be a string");return t = this.httpRequest, n = t.cache, r = t.refreshTokenKey, [4, this.httpRequest.send("auth.signInWithTicket", { ticket: e, refresh_token: n.getStore(r) || "" })];case 1:return (o = s.sent()).refresh_token ? (this.customAuthProvider.setRefreshToken(o.refresh_token), [4, this.httpRequest.refreshAccessToken()]) : [3, 3];case 2:return s.sent(), D.activateEvent(D.EVENTS.LOGIN_STATE_CHANGED), D.activateEvent(D.EVENTS.LOGIN_TYPE_CHANGE, h.LOGINTYPE.CUSTOM), [2, { credential: { refreshToken: o.refresh_token } }];case 3:throw new Error("[tcb-js-sdk] 自定义登录失败");}});});}, t.prototype.shouldRefreshAccessToken = function (e) {this.httpRequest._shouldRefreshAccessTokenHook = e.bind(this);}, t.prototype.getUserInfo = function () {return this.httpRequest.send("auth.getUserInfo", {}).then(function (e) {return e.code ? e : s(s({}, e.data), { requestId: e.seqId });});}, t;}(h.default);n.default = f;}),H = n(function (t, n) {var r = e && e.__awaiter || function (e, t, n, r) {return new (n || (n = Promise))(function (o, s) {function i(e) {try {c(r.next(e));} catch (e) {s(e);}}function a(e) {try {c(r.throw(e));} catch (e) {s(e);}}function c(e) {var t;e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {e(t);})).then(i, a);}c((r = r.apply(e, t || [])).next());});},o = e && e.__generator || function (e, t) {var n,r,o,s,i = { label: 0, sent: function sent() {if (1 & o[0]) throw o[1];return o[1];}, trys: [], ops: [] };return s = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {return this;}), s;function a(s) {return function (a) {return function (s) {if (n) throw new TypeError("Generator is already executing.");for (; i;) {try {if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {case 0:case 1:o = s;break;case 4:return i.label++, { value: s[1], done: !1 };case 5:i.label++, r = s[1], s = [0];continue;case 7:s = i.ops.pop(), i.trys.pop();continue;default:if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {i = 0;continue;}if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {i.label = s[1];break;}if (6 === s[0] && i.label < o[1]) {i.label = o[1], o = s;break;}if (o && i.label < o[2]) {i.label = o[2], i.ops.push(s);break;}o[2] && i.ops.pop(), i.trys.pop();continue;}s = t.call(e, i);} catch (e) {s = [6, e], r = 0;} finally {n = o = 0;}}if (5 & s[0]) throw s[1];return { value: s[0] ? s[1] : void 0, done: !0 };}([s, a]);};}};Object.defineProperty(n, "__esModule", { value: !0 }), n.uploadFile = function (e, t) {t = t || m.createPromiseCallback();var n = new L.Request(this.config),r = e.cloudPath,o = e.filePath,s = e.onUploadProgress,i = e.fileType || "image";return n.send("storage.getUploadMetadata", { path: r }).then(function (e) {var a = e.data,c = a.url,u = a.authorization,l = a.token,h = a.fileId,f = a.cosFileId,p = e.requestId,d = { key: r, signature: u, "x-cos-meta-fileid": f, success_action_status: "201", "x-cos-security-token": l };n.upload({ url: c, data: d, file: o, name: r, fileType: i, onUploadProgress: s }).then(function (e) {201 === e.statusCode ? t(null, { fileID: h, requestId: p }) : t(new Error("STORAGE_REQUEST_FAIL: " + e.data));}).catch(function (e) {t(e);});}).catch(function (e) {t(e);}), t.promise;}, n.deleteFile = function (e, t) {var n = e.fileList;if (t = t || m.createPromiseCallback(), !n || !Array.isArray(n)) return { code: "INVALID_PARAM", message: "fileList必须是非空的数组" };for (var r = 0, o = n; r < o.length; r++) {var s = o[r];if (!s || "string" != typeof s) return { code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" };}var i = { fileid_list: n };return new L.Request(this.config).send("storage.batchDeleteFile", i).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.delete_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;}, n.getTempFileURL = function (e, t) {var n = e.fileList;t = t || m.createPromiseCallback(), n && Array.isArray(n) || t(null, { code: "INVALID_PARAM", message: "fileList必须是非空的数组" });for (var r = [], o = 0, s = n; o < s.length; o++) {var i = s[o];"object" == typeof i ? (i.hasOwnProperty("fileID") && i.hasOwnProperty("maxAge") || t(null, { code: "INVALID_PARAM", message: "fileList的元素必须是包含fileID和maxAge的对象" }), r.push({ fileid: i.fileID, max_age: i.maxAge })) : "string" == typeof i ? r.push({ fileid: i }) : t(null, { code: "INVALID_PARAM", message: "fileList的元素必须是字符串" });}var a = { file_list: r };return new L.Request(this.config).send("storage.batchGetDownloadUrl", a).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.download_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;}, n.downloadFile = function (e, t) {var s = e.fileID;return r(this, void 0, void 0, function () {var e, r, i, a, c;return o(this, function (o) {switch (o.label) {case 0:return [4, n.getTempFileURL.call(this, { fileList: [{ fileID: s, maxAge: 600 }] })];case 1:return e = o.sent(), "SUCCESS" !== (r = e.fileList[0]).code ? [2, t ? t(r) : new Promise(function (e) {e(r);})] : (i = r.download_url, i = encodeURI(i), a = new L.Request(this.config), t ? [4, a.download({ url: i })] : [3, 3]);case 2:return c = o.sent(), t(c), [3, 4];case 3:return [2, a.download({ url: i })];case 4:return [2];}});});};}),Y = n(function (e, t) {Object.defineProperty(t, "__esModule", { value: !0 }), t.callFunction = function (e, t) {var n,r = e.name,o = e.data,s = e.query,i = e.parse,a = e.search,c = t || m.createPromiseCallback();try {n = o ? JSON.stringify(o) : "";} catch (e) {return Promise.reject(e);}if (!r) return Promise.reject(new Error("函数名不能为空"));var u = { query: s, parse: i, search: a, function_name: r, request_data: n };return new L.Request(this.config).send("functions.invokeFunction", u).then(function (e) {if (e.code) c(null, e);else {var t = e.data.response_data;if (i) c(null, { result: t, requestId: e.requestId });else try {t = JSON.parse(e.data.response_data), c(null, { result: t, requestId: e.requestId });} catch (e) {c(new Error("response data must be json"));}}return c.promise;}).catch(function (e) {c(e);}), c.promise;};}),V = t(n(function (t) {var n = e && e.__assign || function () {return (n = Object.assign || function (e) {for (var t, n = 1, r = arguments.length; n < r; n++) {for (var o in t = arguments[n]) {Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);}}return e;}).apply(this, arguments);},r = e && e.__importDefault || function (e) {return e && e.__esModule ? e : { default: e };},o = e && e.__importStar || function (e) {if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);}return t.default = e, t;},s = r(G),i = o(H),a = o(Y),c = { timeout: 15e3 },u = new (function () {function e(e) {var t = this;this.config = e || this.config, this.authObj = void 0, D.addEventListener(D.EVENTS.LOGIN_TYPE_CHANGE, function (e) {e.data === M.LOGINTYPE.ANONYMOUS && (t.config.persistence = "local");});}return e.prototype.init = function (t) {return this.config = n(n({}, c), t), U.Adapter.adapter || this._useDefaultAdapter(), new e(this.config);}, e.prototype.auth = function (e) {var t = (void 0 === e ? {} : e).persistence;return this.authObj || (this.config = n(n({}, this.config), { persistence: t || U.Adapter.adapter.primaryStorage || "session" }), this.authObj = new s.default(this.config), this.authObj.init()), this.authObj;}, e.prototype.on = function (e, t) {return D.addEventListener.apply(this, [e, t]);}, e.prototype.off = function (e, t) {return D.removeEventListener.apply(this, [e, t]);}, e.prototype.callFunction = function (e, t) {return a.callFunction.apply(this, [e, t]);}, e.prototype.deleteFile = function (e, t) {return i.deleteFile.apply(this, [e, t]);}, e.prototype.getTempFileURL = function (e, t) {return i.getTempFileURL.apply(this, [e, t]);}, e.prototype.downloadFile = function (e, t) {return i.downloadFile.apply(this, [e, t]);}, e.prototype.uploadFile = function (e, t) {return i.uploadFile.apply(this, [e, t]);}, e.prototype.useAdapters = function (e) {var t = U.useAdapters(e) || {},n = t.adapter,r = t.runtime;n && (U.Adapter.adapter = n), r && (U.Adapter.runtime = r);}, e.prototype._useDefaultAdapter = function () {var e = U.useDefaultAdapter(),t = e.adapter,n = e.runtime;U.Adapter.adapter = t, U.Adapter.runtime = n;}, e;}())();try {window.tcb = u;} catch (e) {}t.exports = u;}));function B(e, t, n) {void 0 === n && (n = {});var r = /\?/.test(t),o = "";for (var s in n) {"" === o ? !r && (t += "?") : o += "&", o += s + "=" + encodeURIComponent(n[s]);}return /^http(s)?:\/\//.test(t += o) ? t : "" + e + t;}var $ = /*#__PURE__*/function () {function $() {_classCallCheck(this, $);}_createClass($, [{ key: "post", value: function post(e) {var t = e.url,n = e.data,r = e.headers;return new Promise(function (e, o) {d.request({ url: B("https:", t), data: n, method: "POST", header: r, success: function success(t) {e(t);}, fail: function fail(e) {o(e);} });});} }, { key: "upload", value: function upload(e) {return new Promise(function (t, n) {var r = e.url,o = e.file,s = e.data,i = e.headers,a = e.fileType,c = d.uploadFile({ url: B("https:", r), name: "file", formData: Object.assign({}, s), filePath: o, fileType: a, header: i, success: function success(e) {var n = { statusCode: e.statusCode, data: e.data || {} };200 === e.statusCode && s.success_action_status && (n.statusCode = parseInt(s.success_action_status, 10)), t(n);}, fail: function fail(e) { false && false, n(new Error(e.errMsg || "uploadFile:fail"));} });"function" == typeof e.onUploadProgress && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (t) {e.onUploadProgress({ loaded: t.totalBytesSent, total: t.totalBytesExpectedToSend });});});} }]);return $;}();var W = { setItem: function setItem(e, t) {d.setStorageSync(e, t);}, getItem: function getItem(e) {return d.getStorageSync(e);}, removeItem: function removeItem(e) {d.removeStorageSync(e);}, clear: function clear() {d.clearStorageSync();} };var z = { genAdapter: function genAdapter() {return { root: {}, reqClass: $, localStorage: W, primaryStorage: "local" };}, isMatch: function isMatch() {return !0;}, runtime: "uni_app" };V.useAdapters(z);var J = V,X = J.init;J.init = function (e) {e.env = e.spaceId;var t = X.call(this, e);t.config.provider = "tencent", t.config.spaceId = e.spaceId;var n = t.auth;t.auth = function (e) {var t = n.call(this, e);return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach(function (e) {t[e] = s(t[e]).bind(t);}), t;}, t.customAuth = t.auth;return ["deleteFile", "getTempFileURL", "downloadFile"].forEach(function (e) {t[e] = s(t[e]).bind(t);}), t;};var Q, Z;function ee(e) {Q || (Q = { PLATFORM: "app-plus", OS: u, APPID: a.appid, CLIENT_SDK_VERSION: "1.0.0" }, Z = { ak: a.appid, p: "android" === u ? "a" : "i", ut: f(), uuid: h() });var t = JSON.parse(JSON.stringify(e.data || {})),n = e.name,r = this.config.spaceId,o = { tencent: "t", aliyun: "a" }[this.config.provider],s = Object.assign({}, Z, { fn: n, sid: r, pvd: o });if (Object.assign(t, { clientInfo: Q, uniCloudClientInfo: encodeURIComponent(JSON.stringify(s)) }), !t.uniIdToken) {var _e2 = d.getStorageSync("uni_id_token") || d.getStorageSync("uniIdToken");_e2 && (t.uniIdToken = _e2);}return e.data = t, e;}var te = Symbol("CLIENT_DB_INTERNAL");function ne(e, t) {return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = te, new Proxy(e, { get: function get(e, n, r) {return function (e, t) {return Object.prototype.hasOwnProperty.call(e, t);}(e, n) || e[n] || "string" != typeof n ? e[n] : t.get(e, n, r);} });}var re = /*#__PURE__*/function (_Error2) {_inherits(re, _Error2);var _super2 = _createSuper(re);function re(e, t) {var _this6;_classCallCheck(this, re);_this6 = _super2.call(this, e), _this6.code = t;return _this6;}return re;}( /*#__PURE__*/_wrapNativeSuper(Error));function oe(e) {switch (t = e, Object.prototype.toString.call(t).slice(8, -1).toLowerCase()) {case "array":return e.map(function (e) {return oe(e);});case "object":return e._internalType === te || Object.keys(e).forEach(function (t) {e[t] = oe(e[t]);}), e;case "regexp":return { $regexp: { source: e.source, flags: e.flags } };case "date":return { $date: e.toISOString() };default:return e;}var t;}var se;var ie = new ( /*#__PURE__*/function () {function _class() {_classCallCheck(this, _class);}_createClass(_class, [{ key: "init", value: function init(e) {var t = {};var n = !1 !== e.debugFunction && "development" === "development" && ( false || "app-plus" === "app-plus");switch (e.provider) {case "tencent":t = J.init(Object.assign(e, { useDebugFunction: n }));break;case "aliyun":t = g.init(Object.assign(e, { useDebugFunction: n }));break;default:throw new Error("未提供正确的provider参数");}t.isReady = !1;var r = t.auth();return t.initSignIn = r.getLoginState().then(function (e) {return e ? Promise.resolve() : r.signInAnonymously();}).then(function () {return new Promise(function (e) { false ? (undefined) : setTimeout(function () {u = uni.getSystemInfoSync().platform, c = uni.getStorageSync("__DC_CLOUD_UUID") || l(32), e();}, 0);});}).then(function () {t.isReady = !0;}), function (e) {var t = e.callFunction;e.callFunction = function (e) {var _this7 = this;var n;return n = this.isReady ? Promise.resolve() : this.initSignIn, n.then(function () {var n = ee.call(_this7, e),r = { aliyun: "aliyun", tencent: "tcb" }[_this7.config.provider];return new Promise(function (o, s) {t.call(_this7, n).then(function (t) {if (_this7.config.useDebugFunction && t && t.requestId) {var _n = JSON.stringify({ spaceId: _this7.config.spaceId, functionName: e.name, requestId: t.requestId });console.log("[".concat(r, "-request]").concat(_n, "[/").concat(r, "-request]"));}o(t);}).catch(function (t) {if (_this7.config.useDebugFunction && t && t.requestId) {var _n2 = JSON.stringify({ spaceId: _this7.config.spaceId, functionName: e.name, requestId: t.requestId });console.log("[".concat(r, "-request]").concat(_n2, "[/").concat(r, "-request]"));}t && t.message && (t.message = "[".concat(e.name, "]: ").concat(t.message)), s(t);});});});};var n = e.callFunction;e.callFunction = function (e) {return s(n).call(this, e);};}(t), function (e) {var t = e.uploadFile;e.uploadFile = function (e) {var _this8 = this;var n;return n = this.isReady ? Promise.resolve() : this.initSignIn, n.then(function () {return t.call(_this8, e);});};var n = e.uploadFile;e.uploadFile = function (e) {return s(n).call(this, e);};}(t), function (e) {e.database = function () {if (se) return se;var t = {};var n = /*#__PURE__*/function () {function n(e, t, _n3) {_classCallCheck(this, n);this.content = e, this.prevStage = t, this.actionName = _n3;}_createClass(n, [{ key: "toJSON", value: function toJSON() {var e = this;var t = [e.content];for (; e.prevStage;) {e = e.prevStage, t.push(e.content);}return { $db: t.reverse().map(function (e) {return { $method: e.$method, $param: e.$param };}) };} }, { key: "get", value: function get() {return this._send("get", Array.from(arguments));} }, { key: "add", value: function add() {return this._send("add", Array.from(arguments));} }, { key: "remove", value: function remove() {return this._send("remove", Array.from(arguments));} }, { key: "update", value: function update() {return this._send("update", Array.from(arguments));} }, { key: "end", value: function end() {return this._send("end", Array.from(arguments));} }, { key: "set", value: function set() {throw new Error("客户端禁止使用set方法");} }, { key: "_send", value: function _send(n, r) {var o = this.toJSON();return o.$db.push({ $method: n, $param: r }), e.callFunction({ name: "DCloud-clientDB", data: { action: this.actionName, command: o } }).then(function (e) {var _e$result = e.result,n = _e$result.code,r = _e$result.message,o = _e$result.token,s = _e$result.tokenExpired;return n ? Promise.reject(new re(r, n)) : (o && s && t.refreshToken.forEach(function (e) {e({ token: o, tokenExpired: s });}), Promise.resolve(e));}).catch(function (e) {return Promise.reject(new re(e.message, e.code || "SYSTEM_ERROR"));});} }, { key: "useAggregate", get: function get() {var e = this,t = !1;for (; e.prevStage;) {e = e.prevStage;var _n4 = e.content.$method;if ("aggregate" === _n4 || "pipeline" === _n4) {t = !0;break;}}return t;} }, { key: "count", get: function get() {if (!this.useAggregate) return function () {return this._send("count", Array.from(arguments));};var e = this;return function () {return s({ $method: "count", $param: oe(Array.from(arguments)) }, e, e.actionName);};} }]);return n;}();var r = ["db.Geo", "db.command", "command.aggregate"];function o(e, t) {return r.indexOf("".concat(e, ".").concat(t)) > -1;}function s(e, t, r) {return ne(new n(e, t, r), { get: function get(e, t) {var n = "db";return e && e.content && (n = e.content.$method), o(n, t) ? s({ $method: t }, e, r) : function () {return s({ $method: t, $param: oe(Array.from(arguments)) }, e, r);};} });}function i(_ref4) {var e = _ref4.path,t = _ref4.method;return /*#__PURE__*/function () {function _class2() {_classCallCheck(this, _class2);this.param = Array.from(arguments);}_createClass(_class2, [{ key: "toJSON", value: function toJSON() {return { $newDb: [].concat(_toConsumableArray(e.map(function (e) {return { $method: e };})), [{ $method: t, $param: this.param }]) };} }]);return _class2;}();}var a = { auth: { on: function on(e, n) {t[e] = t[e] || [], t[e].indexOf(n) > -1 || t[e].push(n);}, off: function off(e, n) {t[e] = t[e] || [];var r = t[e].indexOf(n);-1 !== r && t[e].splice(r, 1);} }, env: ne({}, { get: function get(e, t) {return { $env: t };} }), action: function action(e) {return ne({}, { get: function get(t, n) {return o("db", n) ? s({ $method: n }, null, e) : function () {return s({ $method: n, $param: oe(Array.from(arguments)) }, null, e);};} });}, Geo: ne({}, { get: function get(e, t) {return i({ path: ["Geo"], method: t });} }), get serverDate() {return i({ path: [], method: "serverDate" });}, get RegExp() {return i({ path: [], method: "RegExp" });} };return se = ne(a, { get: function get(e, t) {return o("db", t) ? s({ $method: t }) : function () {return s({ $method: t, $param: oe(Array.from(arguments)) });};} }), se;};}(t), t.init = this.init, t;} }]);return _class;}())();try {var _e3 = {};1 === [].length && (_e3 = [][0]), ie = ie.init(_e3);} catch (e) {["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database"].forEach(function (e) {ie[e] = function () {var e = [].length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : "应用未关联服务空间，请在cloudfunctions目录右键关联服务空间";return console.error(e), Promise.reject(new i({ code: "SYS_ERR", message: e }));};});}var ae = ie;var _default = ae;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 8), __webpack_require__(/*! @dcloudio/uni-mp-weixin/dist/mp.js */ 37)["default"]))

/***/ }),
/* 37 */
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/mp.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.Behavior = Behavior;exports.Component = Component;exports.Page = Page;exports.nextTick = exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 38));var _PROP_DEFAULT_VALUES;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}

function parseData(data, vueComponentOptions) {
  if (!data) {
    return;
  }
  vueComponentOptions.mpOptions.data = data;
}

function parseComponents(vueComponentOptions) {
  vueComponentOptions.components = global.__wxVueOptions.components;
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var SOURCE_KEY = '__data__';

var COMPONENT_LIFECYCLE = {
  created: 'onServiceCreated',
  attached: 'onServiceAttached',
  ready: 'mounted',
  moved: 'moved',
  detached: 'destroyed' };


var COMPONENT_LIFECYCLE_KEYS = Object.keys(COMPONENT_LIFECYCLE);

var PAGE_LIFETIMES = {
  show: 'onPageShow',
  hide: 'onPageHide',
  resize: 'onPageResize' };


var PAGE_LIFETIMES_KEYS = Object.keys(PAGE_LIFETIMES);

var PAGE_LIFECYCLE = [
'onLoad',
'onShow',
'onReady',
'onHide',
'onUnload',
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function parsePageMethods(mpComponentOptions, vueComponentOptions) {
  var methods = Object.create(null);
  Object.keys(mpComponentOptions).forEach(function (key) {
    var value = mpComponentOptions[key];
    if (isFn(value) && PAGE_LIFECYCLE.indexOf(key) === -1) {
      methods[key] = value;
    }
  });
  vueComponentOptions.methods = methods;
}

function parsePageLifecycle(mpComponentOptions, vueComponentOptions) {
  Object.keys(mpComponentOptions).forEach(function (key) {
    if (PAGE_LIFECYCLE.indexOf(key) !== -1) {
      vueComponentOptions[key] = mpComponentOptions[key];
    }
  });
}

function parsePage(mpComponentOptions) {
  var vueComponentOptions = {
    mixins: [],
    mpOptions: {} };


  parseComponents(vueComponentOptions);

  parseData(mpComponentOptions.data, vueComponentOptions);

  parsePageMethods(mpComponentOptions, vueComponentOptions);
  parsePageLifecycle(mpComponentOptions, vueComponentOptions);

  return vueComponentOptions;
}

function parseProperties(properties, vueComponentOptions) {
  if (!properties) {
    return;
  }
  vueComponentOptions.mpOptions.properties = properties;
}

function parseOptions(options, vueComponentOptions) {
  if (!options) {
    return;
  }
  vueComponentOptions.mpOptions.options = options;
}

function parseMethods(methods, vueComponentOptions) {
  if (!methods) {
    return;
  }
  if (methods.$emit) {
    console.warn('Method "$emit" conflicts with an existing Vue instance method');
    delete methods.$emit;
  }
  vueComponentOptions.methods = methods;
}

function parseLifecycle(mpComponentOptions, vueComponentOptions) {
  COMPONENT_LIFECYCLE_KEYS.forEach(function (name) {
    if (hasOwn(mpComponentOptions, name)) {
      (vueComponentOptions[COMPONENT_LIFECYCLE[name]] || (vueComponentOptions[COMPONENT_LIFECYCLE[name]] = [])).
      push(mpComponentOptions[name]);
    }
  });
}

var mpBehaviors = {
  'wx://form-field': {},
  'wx://component-export': {} };


function callDefinitionFilter(mpComponentOptions) {var

  behaviors =

  mpComponentOptions.behaviors,definitionFilter = mpComponentOptions.definitionFilter;

  var behaviorDefinitionFilters = [];

  if (Array.isArray(behaviors)) {
    behaviors.forEach(function (behavior) {
      behavior = typeof behavior === 'string' ? mpBehaviors[behavior] : behavior;
      if (behavior.definitionFilter) {
        behaviorDefinitionFilters.push(behavior.definitionFilter);
        behavior.definitionFilter.call(null, mpComponentOptions, []);
      }
    });
  }

  if (isFn(definitionFilter)) {
    return function (defFields) {
      definitionFilter(defFields, behaviorDefinitionFilters);
    };
  }
}

function parseDefinitionFilter(mpComponentOptions, vueComponentOptions) {
  callDefinitionFilter(mpComponentOptions);
}

function parseBehavior(behavior) {var

  data =



  behavior.data,methods = behavior.methods,behaviors = behavior.behaviors,properties = behavior.properties;

  var vueComponentOptions = {
    watch: {},
    mpOptions: {
      mpObservers: [] } };



  parseData(data, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);

  parseLifecycle(behavior, vueComponentOptions);
  parseDefinitionFilter(behavior);

  return vueComponentOptions;
}

var BEHAVIORS = {
  'wx://form-field': {
    beforeCreate: function beforeCreate() {
      var mpOptions = this.$options.mpOptions;
      if (!mpOptions.properties) {
        mpOptions.properties = Object.create(null);
      }

      var props = mpOptions.properties;
      // TODO form submit,reset
      if (!hasOwn(props, 'name')) {
        props.name = {
          type: String };

      }
      if (!hasOwn(props, 'value')) {
        props.value = {
          type: String // 默认类型调整为 String,否则默认值为 null,导致一些自定义 input 显示不正确
        };
      }
    } } };



function parseBehaviors(behaviors, vueComponentOptions) {
  if (!behaviors) {
    return;
  }
  behaviors.forEach(function (behavior) {
    if (typeof behavior === 'string') {
      BEHAVIORS[behavior] && vueComponentOptions.mixins.push(BEHAVIORS[behavior]);
    } else {
      vueComponentOptions.mixins.push(parseBehavior(behavior));
    }
  });
}

function parseSinglePath(path) {
  return path.split('.');
}

function parseMultiPaths(paths) {
  return paths.split(',').map(function (path) {return parseSinglePath(path);});
}

function parseObservers(observers, vueComponentOptions) {
  if (!observers) {
    return;
  }var


  mpObservers =
  vueComponentOptions.mpOptions.mpObservers;

  Object.keys(observers).forEach(function (path) {
    mpObservers.push({
      paths: parseMultiPaths(path),
      observer: observers[path] });

  });
}

function relative(from, to) {
  if (to.indexOf('/') === 0) {
    from = '';
  }
  var fromArr = from.split('/');
  var toArr = to.split('/');
  fromArr.pop();
  while (toArr.length) {
    var part = toArr.shift();
    if (part !== '' && part !== '.') {
      if (part !== '..') {
        fromArr.push(part);
      } else {
        fromArr.pop();
      }
    }
  }
  return fromArr.join('/');
}

function parseRelations(relations, vueComponentOptions) {
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    var relation = relations[name];
    relation.name = name;
    relation.target = relation.target ? String(relation.target) : relative(global.__wxRoute, name);
  });
  vueComponentOptions.mpOptions.relations = relations;
}

function parseExternalClasses(externalClasses, vueComponentOptions) {
  if (!externalClasses) {
    return;
  }
  if (!Array.isArray(externalClasses)) {
    externalClasses = [externalClasses];
  }
  vueComponentOptions.mpOptions.externalClasses = externalClasses;
  if (!vueComponentOptions.mpOptions.properties) {
    vueComponentOptions.mpOptions.properties = Object.create(null);
  }
  externalClasses.forEach(function (externalClass) {
    vueComponentOptions.mpOptions.properties[camelize(externalClass)] = {
      type: String,
      value: '' };

  });
}

function parseLifetimes(lifetimes, vueComponentOptions) {
  if (!lifetimes) {
    return;
  }
  parseLifecycle(lifetimes, vueComponentOptions);
}

function parsePageLifetimes(pageLifetimes, vueComponentOptions) {
  if (!pageLifetimes) {
    return;
  }
  PAGE_LIFETIMES_KEYS.forEach(function (key) {
    var lifetimeFn = pageLifetimes[key];
    isFn(lifetimeFn) && (vueComponentOptions[PAGE_LIFETIMES[key]] = lifetimeFn);
  });
}

function parseComponent(mpComponentOptions) {var

  data =









  mpComponentOptions.data,options = mpComponentOptions.options,methods = mpComponentOptions.methods,behaviors = mpComponentOptions.behaviors,lifetimes = mpComponentOptions.lifetimes,observers = mpComponentOptions.observers,relations = mpComponentOptions.relations,properties = mpComponentOptions.properties,pageLifetimes = mpComponentOptions.pageLifetimes,externalClasses = mpComponentOptions.externalClasses;

  var vueComponentOptions = {
    mixins: [],
    props: {},
    watch: {},
    mpOptions: {
      mpObservers: [] } };



  parseComponents(vueComponentOptions);

  parseData(data, vueComponentOptions);
  parseOptions(options, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseLifetimes(lifetimes, vueComponentOptions);
  parseObservers(observers, vueComponentOptions);
  parseRelations(relations, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);
  parsePageLifetimes(pageLifetimes, vueComponentOptions);
  parseExternalClasses(externalClasses, vueComponentOptions);

  parseLifecycle(mpComponentOptions, vueComponentOptions);
  parseDefinitionFilter(mpComponentOptions);

  return vueComponentOptions;
}

function initRelationHandlers(type, handler, target, ctx) {
  if (!handler) {
    return;
  }
  var name = "_$".concat(type, "Handlers");
  (ctx[name] || (ctx[name] = [])).push(function () {
    handler.call(ctx, target);
  });
}

function initLinkedHandlers(relation, target, ctx) {
  var type = 'linked';
  var name = relation.name;
  var relationNodes = ctx._$relationNodes || (ctx._$relationNodes = Object.create(null));
  (relationNodes[name] || (relationNodes[name] = [])).push(target);
  initRelationHandlers(type, relation[type], target, ctx);
}

function initUnlinkedHandlers(relation, target, ctx) {
  var type = 'unlinked';
  initRelationHandlers(type, relation[type], target, ctx);
}

function findParentRelation(parentVm, target, type) {
  var relations = parentVm &&
  parentVm.$options.mpOptions &&
  parentVm.$options.mpOptions.relations;

  if (!relations) {
    return [];
  }
  var name = Object.keys(relations).find(function (name) {
    var relation = relations[name];
    return relation.target === target && relation.type === type;
  });
  if (!name) {
    return [];
  }
  return [relations[name], parentVm];
}

function initParentRelation(vm, childRelation, match) {var _match =
  match(vm, vm.$options.mpOptions.path),_match2 = _slicedToArray(_match, 2),parentRelation = _match2[0],parentVm = _match2[1];
  if (!parentRelation) {
    return;
  }

  initLinkedHandlers(parentRelation, vm, parentVm);
  initLinkedHandlers(childRelation, parentVm, vm);

  initUnlinkedHandlers(parentRelation, vm, parentVm);
  initUnlinkedHandlers(childRelation, parentVm, vm);
}

function initRelation(relation, vm) {
  var type = relation.type;
  if (type === 'parent') {
    initParentRelation(vm, relation, function matchParent(vm, target) {
      return findParentRelation(vm.$parent, target, 'child');
    });
  } else if (type === 'ancestor') {
    initParentRelation(vm, relation, function matchAncestor(vm, target) {
      var $parent = vm.$parent;
      while ($parent) {
        var ret = findParentRelation($parent, target, 'descendant');
        if (ret.length) {
          return ret;
        }
        $parent = $parent.$parent;
      }
      return [];
    });
  }
}

function initRelations(vm) {var _ref =


  vm.$options.mpOptions || {},relations = _ref.relations;
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    initRelation(relations[name], vm);
  });
}

function handleRelations(vm, type) {
  // TODO 需要移除 relationNodes
  var handlers = vm["_$".concat(type, "Handlers")];
  if (!handlers) {
    return;
  }
  handlers.forEach(function (handler) {return handler();});
}

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop };


function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function setDataByExprPath(exprPath, value, data) {
  var keys = exprPath.replace(/\[(\d+?)\]/g, '.$1').split('.');
  keys.reduce(function (obj, key, idx) {
    if (idx === keys.length - 1) {
      obj[key] = value;
    } else {
      if (typeof obj[key] === 'undefined') {
        obj[key] = {};
      }
      return obj[key];
    }
  }, data);
  return keys.length === 1;
}

function setData(data, callback) {var _this = this;
  if (!isPlainObject(data)) {
    return;
  }
  Object.keys(data).forEach(function (key) {
    if (setDataByExprPath(key, data[key], _this.data)) {
      !hasOwn(_this, key) && proxy(_this, SOURCE_KEY, key);
    }
  });
  this.$forceUpdate();
  isFn(callback) && this.$nextTick(callback);
}

/**
   * https://github.com/swan-team/swan-js/blob/61e2a63f7aa576b5daafbe77fdfa7c65b977060c/src/utils/index.js
   */

var _toString$1 = Object.prototype.toString;
/**
                                              * 深度assign的函数
                                              * @param {Object} targetObject 要被拷贝的目标对象
                                              * @param {Object} originObject 拷贝的源对象
                                              * @return {Object} merge后的对象
                                              */
var deepAssign = function deepAssign() {var targetObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var originObject = arguments.length > 1 ? arguments[1] : undefined;
  var originType = _toString$1.call(originObject);
  if (originType === '[object Array]') {
    targetObject = originObject.slice(0);
    return targetObject;
  } else if (originType === '[object Object]') {
    for (var key in originObject) {
      targetObject[key] = deepAssign(targetObject[key], originObject[key]);
    }
    return targetObject;
  } else if (originType === '[object Date]') {
    return new Date(originObject.getTime());
  } else if (originType === '[object RegExp]') {
    var target = String(originObject);
    var lastIndex = target.lastIndexOf('/');
    return new RegExp(target.slice(1, lastIndex), target.slice(lastIndex + 1));
  }
  return originObject;
};

/**
    * 深度拷贝逻辑，不同于lodash等库，但是与微信一致
    * @param {*} [originObj] 原对象
    * @return {Object|Array} 拷贝结果
    */
var deepClone = function deepClone(originObj) {
  return deepAssign(_toString$1.call(originObj) === '[object Array]' ? [] : {}, originObj);
};

var PROP_DEFAULT_VALUES = (_PROP_DEFAULT_VALUES = {}, _defineProperty(_PROP_DEFAULT_VALUES,
String, ''), _defineProperty(_PROP_DEFAULT_VALUES,
Number, 0), _defineProperty(_PROP_DEFAULT_VALUES,
Boolean, false), _defineProperty(_PROP_DEFAULT_VALUES,
Object, null), _defineProperty(_PROP_DEFAULT_VALUES,
Array, []), _defineProperty(_PROP_DEFAULT_VALUES,
null, null), _PROP_DEFAULT_VALUES);


function getDefaultVal(propType) {
  return PROP_DEFAULT_VALUES[propType];
}

function getPropertyVal(options) {
  if (isPlainObject(options)) {
    if (hasOwn(options, 'value')) {
      return options.value;
    }
    return getDefaultVal(options.type);
  }
  return getDefaultVal(options);
}

function getType(propOptions) {
  return isPlainObject(propOptions) ? propOptions.type : propOptions;
}

function validateProp(key, propsOptions, propsData, vm) {
  var value = propsData[key];
  if (value !== undefined) {
    var propOptions = propsOptions[key];
    var type = getType(propOptions);
    value = formatVal(value, type);
    var observer = propOptions && propOptions.observer;
    if (observer) {
      // 初始化时,异步触发 observer,否则 observer 中无法访问 methods 或其他
      setTimeout(function () {
        observe(observer, vm, value);
      }, 4);
    }
    return value;
  }
  return getPropertyVal(propsOptions[key]);
}

function formatVal(val, type) {
  if (type === Boolean) {
    return !!val;
  } else if (type === String) {
    return String(val);
  }
  return val;
}

function observe(observer, vm, newVal, oldVal) {
  try {
    if (typeof observer === 'function') {
      observer.call(vm, newVal, oldVal);
    } else if (typeof observer === 'string' &&
    typeof vm[observer] === 'function')
    {
      vm[observer](newVal, oldVal);
    }
  } catch (err) {
    console.error("execute observer ".concat(observer, " callback fail! err: ").concat(err));
  }
}

function initProperties(vm, instanceData) {
  var properties = vm.$options.mpOptions.properties;
  if (!properties) {
    return;
  }

  var propsData = deepClone(vm.$options.propsData) || {};var _loop = function _loop(

  key) {
    var observer = isPlainObject(properties[key]) ? properties[key].observer : false;
    var value = validateProp(key, properties, propsData, vm);
    Object.defineProperty(instanceData, key, {
      enumerable: true,
      configurable: true,
      get: function get() {
        return value;
      },
      set: function set(newVal) {
        var oldVal = value;
        /* eslint-disable no-self-compare */
        if (newVal === value || newVal !== newVal && value !== value) {
          return;
        }
        // TODO 临时方案,clone array
        value = Array.isArray(newVal) ? newVal.slice(0) : newVal;
        if (observer) {
          observe(observer, vm, newVal, oldVal);
        }
        // 触发渲染
        vm.$forceUpdate();
      } });};for (var key in properties) {_loop(key);

  }
}

function updateProperties(vm) {
  var properties = vm.$options.mpOptions && vm.$options.mpOptions.properties;
  var propsData = vm.$options.propsData;
  if (propsData && properties) {
    Object.keys(properties).forEach(function (key) {
      if (hasOwn(propsData, key)) {
        vm[key] = formatVal(propsData[key], getType(properties[key]));
      }
    });
  }
}

function initState(vm) {
  var instanceData = JSON.parse(JSON.stringify(vm.$options.mpOptions.data || {}));

  vm[SOURCE_KEY] = instanceData;

  var propertyDefinition = {
    get: function get() {
      return vm[SOURCE_KEY];
    },
    set: function set(value) {
      vm[SOURCE_KEY] = value;
    } };


  Object.defineProperties(vm, {
    data: propertyDefinition,
    properties: propertyDefinition });


  vm.setData = setData;

  initProperties(vm, instanceData);

  Object.keys(instanceData).forEach(function (key) {
    proxy(vm, SOURCE_KEY, key);
  });
}

function initMethods(vm) {
  var oldEmit = vm.$emit;
  vm.triggerEvent = function (eventName, detail, options) {
    var target = {
      dataset: vm.$el.dataset };


    var event = {
      target: target,
      currentTarget: target,
      detail: detail,
      preventDefault: noop,
      stopPropagation: noop };


    oldEmit.call(vm, eventName, event);
  };
  // 主要是Vant 自己封装了 $emit,放到 methods 中会触发 Vue 的警告,索性,框架直接重写该方法
  vm.$emit = function () {
    vm.triggerEvent.apply(vm, arguments);
  };
  vm.getRelationNodes = function (relationKey) {
    // 需要过滤已被销毁的vm
    /* eslint-disable  no-mixed-operators */
    return (vm._$relationNodes && vm._$relationNodes[relationKey] || []).filter(function (vm) {return !vm._isDestroyed;});
  };

  vm._$updateProperties = updateProperties;
}

function handleObservers(vm) {
  var watch = vm.$options.watch;
  if (!watch) {
    return;
  }
  Object.keys(watch).forEach(function (name) {
    var observer = watch[name];
    if (observer.mounted) {
      var val = vm[name];
      var handler = observer.handler;
      if (typeof handler === 'string') {
        handler = vm[handler];
      }
      handler && handler.call(vm, val, val);
    }
  });
}

var polyfill = {
  beforeCreate: function beforeCreate() {
    // 取消 development 时的 Proxy,避免小程序组件模板中使用尚未定义的属性告警
    this._renderProxy = this;

    this._$self = this;
    this._$noop = noop;
  },
  created: function created() {// properties 中可能会访问 methods,故需要在 created 中初始化
    initState(this);
    initMethods(this);
    initRelations(this);
  },
  mounted: function mounted() {
    handleObservers(this);
  },
  destroyed: function destroyed() {
    handleRelations(this, 'unlinked');
  } };


global.__wxRoute = '';
global.__wxComponents = Object.create(null);
global.__wxVueOptions = Object.create(null);

function Page(options) {
  var pageOptions = parsePage(options);
  pageOptions.mixins.unshift(polyfill);
  pageOptions.mpOptions.path = global.__wxRoute;
  global.__wxComponents[global.__wxRoute] = pageOptions;
}

function initRelationsHandler(vueComponentOptions) {
  // linked 需要在当前组件 attached 之后再执行
  if (!vueComponentOptions.onServiceAttached) {
    vueComponentOptions.onServiceAttached = [];
  }
  vueComponentOptions.onServiceAttached.push(function onServiceAttached() {
    handleRelations(this, 'linked');
  });
}

function Component(options) {
  var componentOptions = parseComponent(options);
  componentOptions.mixins.unshift(polyfill);
  componentOptions.mpOptions.path = global.__wxRoute;
  initRelationsHandler(componentOptions);
  global.__wxComponents[global.__wxRoute] = componentOptions;
}

function Behavior(options) {
  return options;
}

var nextTick = _vue.default.nextTick;exports.nextTick = nextTick;

var index = uni.__$wx__;var _default =

index;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 8)))

/***/ }),
/* 38 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 39 */
/*!********************************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/pages.json?{"type":"stat"} ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "appid": "__UNI__3D203DF" };exports.default = _default;

/***/ }),
/* 40 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 41 */
/*!***********************************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/pages/pwd/pwd.vue?mpType=page ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pwd_vue_vue_type_template_id_2a363c5c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pwd.vue?vue&type=template&id=2a363c5c&mpType=page */ 42);\n/* harmony import */ var _pwd_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pwd.vue?vue&type=script&lang=js&mpType=page */ 44);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _pwd_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _pwd_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _pwd_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _pwd_vue_vue_type_template_id_2a363c5c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _pwd_vue_vue_type_template_id_2a363c5c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _pwd_vue_vue_type_template_id_2a363c5c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/pwd/pwd.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkg7QUFDM0g7QUFDa0U7QUFDTDs7O0FBRzdEO0FBQ21LO0FBQ25LLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSx5RkFBTTtBQUNSLEVBQUUsa0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3B3ZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmEzNjNjNWMmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3B3ZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vcHdkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL3B3ZC9wd2QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///41\n");

/***/ }),
/* 42 */
/*!*****************************************************************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/pages/pwd/pwd.vue?vue&type=template&id=2a363c5c&mpType=page ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pwd_vue_vue_type_template_id_2a363c5c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./pwd.vue?vue&type=template&id=2a363c5c&mpType=page */ 43);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pwd_vue_vue_type_template_id_2a363c5c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pwd_vue_vue_type_template_id_2a363c5c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pwd_vue_vue_type_template_id_2a363c5c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pwd_vue_vue_type_template_id_2a363c5c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 43 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/application/HbuilderXAPP/hgApp/pages/pwd/pwd.vue?vue&type=template&id=2a363c5c&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "input-group"), attrs: { _i: 1 } },
        [
          _c(
            "view",
            { staticClass: _vm._$s(2, "sc", "input-row"), attrs: { _i: 2 } },
            [
              _c("text", {
                staticClass: _vm._$s(3, "sc", "title"),
                attrs: { _i: 3 }
              }),
              _c("m-input", {
                attrs: {
                  type: "password",
                  focus: true,
                  clearable: true,
                  placeholder: "请输入原密码",
                  _i: 4
                },
                model: {
                  value: _vm._$s(4, "v-model", _vm.password),
                  callback: function($$v) {
                    _vm.password = $$v
                  },
                  expression: "password"
                }
              })
            ],
            1
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(5, "sc", "input-group"), attrs: { _i: 5 } },
        [
          _c(
            "view",
            { staticClass: _vm._$s(6, "sc", "input-row"), attrs: { _i: 6 } },
            [
              _c("text", {
                staticClass: _vm._$s(7, "sc", "title"),
                attrs: { _i: 7 }
              }),
              _c("m-input", {
                attrs: {
                  type: "password",
                  focus: true,
                  clearable: true,
                  placeholder: "请输入新密码",
                  _i: 8
                },
                model: {
                  value: _vm._$s(8, "v-model", _vm.newPassword1),
                  callback: function($$v) {
                    _vm.newPassword1 = $$v
                  },
                  expression: "newPassword1"
                }
              })
            ],
            1
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(9, "sc", "input-group"), attrs: { _i: 9 } },
        [
          _c(
            "view",
            { staticClass: _vm._$s(10, "sc", "input-row"), attrs: { _i: 10 } },
            [
              _c("text", {
                staticClass: _vm._$s(11, "sc", "title"),
                attrs: { _i: 11 }
              }),
              _c("m-input", {
                attrs: {
                  type: "password",
                  focus: true,
                  clearable: true,
                  placeholder: "请确认密码",
                  _i: 12
                },
                model: {
                  value: _vm._$s(12, "v-model", _vm.newPassword2),
                  callback: function($$v) {
                    _vm.newPassword2 = $$v
                  },
                  expression: "newPassword2"
                }
              })
            ],
            1
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(13, "sc", "btn-row"), attrs: { _i: 13 } },
        [
          _c("button", {
            staticClass: _vm._$s(14, "sc", "primary"),
            attrs: { _i: 14 },
            on: { click: _vm.onSetPassword }
          })
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 44 */
/*!***********************************************************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/pages/pwd/pwd.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pwd_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./pwd.vue?vue&type=script&lang=js&mpType=page */ 45);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pwd_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pwd_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pwd_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pwd_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pwd_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBpQixDQUFnQixva0JBQUcsRUFBQyIsImZpbGUiOiI0NC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3B3ZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcHdkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///44\n");

/***/ }),
/* 45 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/application/HbuilderXAPP/hgApp/pages/pwd/pwd.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _mInput = _interopRequireDefault(__webpack_require__(/*! ../../components/m-input.vue */ 9));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { components: { mInput: _mInput.default }, data: function data() {return {};}, methods: { onSetPassword: function onSetPassword() {} } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvcHdkL3B3ZC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCQSxpRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBRUEsRUFDQSxjQUNBLHVCQURBLEVBREEsRUFJQSxJQUpBLGtCQUlBLENBQ0EsVUFDQSxDQU5BLEVBT0EsV0FDQSxhQURBLDJCQUNBLEVBREEsRUFQQSxFIiwiZmlsZSI6IjQ1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiY29udGVudFwiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImlucHV0LXJvd1wiPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGl0bGVcIj7ljp/lr4bnoIHvvJo8L3RleHQ+XHJcblx0XHRcdFx0PG0taW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgZm9jdXMgY2xlYXJhYmxlIHYtbW9kZWw9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl5Y6f5a+G56CBXCI+PC9tLWlucHV0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiaW5wdXQtcm93XCI+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aXRsZVwiPuaWsOWvhuegge+8mjwvdGV4dD5cclxuXHRcdFx0XHQ8bS1pbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBmb2N1cyBjbGVhcmFibGUgdi1tb2RlbD1cIm5ld1Bhc3N3b3JkMVwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl5paw5a+G56CBXCI+PC9tLWlucHV0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiaW5wdXQtcm93XCI+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aXRsZVwiPuehruiupOWvhuegge+8mjwvdGV4dD5cclxuXHRcdFx0XHQ8bS1pbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBmb2N1cyBjbGVhcmFibGUgdi1tb2RlbD1cIm5ld1Bhc3N3b3JkMlwiIHBsYWNlaG9sZGVyPVwi6K+356Gu6K6k5a+G56CBXCI+PC9tLWlucHV0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0PHZpZXcgY2xhc3M9XCJidG4tcm93XCI+XHJcblx0XHRcdDxidXR0b24gdHlwZT1cInByaW1hcnlcIiBjbGFzcz1cInByaW1hcnlcIiBAdGFwPVwib25TZXRQYXNzd29yZFwiPuaPkOS6pDwvYnV0dG9uPlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IG1JbnB1dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL20taW5wdXQudnVlJztcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHRtSW5wdXRcclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge31cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdG9uU2V0UGFzc3dvcmQoKSB7fSxcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///45\n");

/***/ }),
/* 46 */
/*!*************************************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/pages/user/user.vue?mpType=page ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user_vue_vue_type_template_id_5bac9036_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.vue?vue&type=template&id=5bac9036&mpType=page */ 47);\n/* harmony import */ var _user_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.vue?vue&type=script&lang=js&mpType=page */ 49);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _user_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _user_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _user_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _user_vue_vue_type_template_id_5bac9036_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _user_vue_vue_type_template_id_5bac9036_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _user_vue_vue_type_template_id_5bac9036_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/user/user.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEg7QUFDNUg7QUFDbUU7QUFDTDs7O0FBRzlEO0FBQ21LO0FBQ25LLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSwwRkFBTTtBQUNSLEVBQUUsbUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNDYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VzZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTViYWM5MDM2Jm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91c2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi91c2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL3VzZXIvdXNlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///46\n");

/***/ }),
/* 47 */
/*!*******************************************************************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/pages/user/user.vue?vue&type=template&id=5bac9036&mpType=page ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_template_id_5bac9036_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./user.vue?vue&type=template&id=5bac9036&mpType=page */ 48);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_template_id_5bac9036_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_template_id_5bac9036_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_template_id_5bac9036_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_template_id_5bac9036_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 48 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/application/HbuilderXAPP/hgApp/pages/user/user.vue?vue&type=template&id=5bac9036&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c("view", { staticClass: _vm._$s(1, "sc", "center"), attrs: { _i: 1 } }, [
      _c(
        "view",
        {
          staticClass: _vm._$s(2, "sc", "logo"),
          attrs: {
            "hover-class": _vm._$s(
              2,
              "a-hover-class",
              !_vm.hasLogin ? "logo-hover" : ""
            ),
            _i: 2
          },
          on: { click: _vm.bindLogin }
        },
        [
          _c("image", {
            staticClass: _vm._$s(3, "sc", "logo-img"),
            attrs: { src: _vm._$s(3, "a-src", _vm.avatarUrl), _i: 3 }
          }),
          _c(
            "view",
            { staticClass: _vm._$s(4, "sc", "logo-title"), attrs: { _i: 4 } },
            [
              _c(
                "text",
                { staticClass: _vm._$s(5, "sc", "uer-name"), attrs: { _i: 5 } },
                [
                  _vm._v(
                    _vm._$s(
                      5,
                      "t0-0",
                      _vm._s(_vm.hasLogin ? _vm.userName : "您未登录")
                    )
                  )
                ]
              ),
              _vm._$s(6, "i", !_vm.hasLogin)
                ? _c("text", {
                    staticClass: _vm._$s(6, "sc", "go-login navigat-arrow"),
                    attrs: { _i: 6 }
                  })
                : _vm._e()
            ]
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(7, "sc", "center-list"), attrs: { _i: 7 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(8, "sc", "center-list-item border-bottom"),
              attrs: { _i: 8 }
            },
            [
              _c("text", {
                staticClass: _vm._$s(9, "sc", "list-icon"),
                attrs: { _i: 9 }
              }),
              _c("text", {
                staticClass: _vm._$s(10, "sc", "list-text"),
                attrs: { _i: 10 }
              }),
              _c("text", {
                staticClass: _vm._$s(11, "sc", "navigat-arrow"),
                attrs: { _i: 11 }
              })
            ]
          ),
          _vm._$s(12, "i", _vm.hasLogin)
            ? _c(
                "view",
                {
                  staticClass: _vm._$s(
                    12,
                    "sc",
                    "center-list-item border-bottom"
                  ),
                  attrs: { _i: 12 },
                  on: { click: _vm.toInvite }
                },
                [
                  _c("text", {
                    staticClass: _vm._$s(13, "sc", "list-icon"),
                    attrs: { _i: 13 }
                  }),
                  _c("text", {
                    staticClass: _vm._$s(14, "sc", "list-text"),
                    attrs: { _i: 14 }
                  }),
                  _c("text", {
                    staticClass: _vm._$s(15, "sc", "navigat-arrow"),
                    attrs: { _i: 15 }
                  })
                ]
              )
            : _vm._e(),
          _c(
            "view",
            {
              staticClass: _vm._$s(16, "sc", "center-list-item"),
              attrs: { _i: 16 }
            },
            [
              _c("text", {
                staticClass: _vm._$s(17, "sc", "list-icon"),
                attrs: { _i: 17 }
              }),
              _c("text", {
                staticClass: _vm._$s(18, "sc", "list-text"),
                attrs: { _i: 18 }
              }),
              _c("text", {
                staticClass: _vm._$s(19, "sc", "navigat-arrow"),
                attrs: { _i: 19 }
              })
            ]
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(20, "sc", "center-list"), attrs: { _i: 20 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(21, "sc", "center-list-item border-bottom"),
              attrs: { _i: 21 }
            },
            [
              _c("text", {
                staticClass: _vm._$s(22, "sc", "list-icon"),
                attrs: { _i: 22 }
              }),
              _c("text", {
                staticClass: _vm._$s(23, "sc", "list-text"),
                attrs: { _i: 23 }
              }),
              _c("text", {
                staticClass: _vm._$s(24, "sc", "navigat-arrow"),
                attrs: { _i: 24 }
              })
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(25, "sc", "center-list-item"),
              attrs: { _i: 25 }
            },
            [
              _c("text", {
                staticClass: _vm._$s(26, "sc", "list-icon"),
                attrs: { _i: 26 }
              }),
              _c("text", {
                staticClass: _vm._$s(27, "sc", "list-text"),
                attrs: { _i: 27 }
              }),
              _c("text", {
                staticClass: _vm._$s(28, "sc", "navigat-arrow"),
                attrs: { _i: 28 }
              })
            ]
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(29, "sc", "center-list"), attrs: { _i: 29 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(30, "sc", "center-list-item"),
              attrs: { _i: 30 }
            },
            [
              _c("text", {
                staticClass: _vm._$s(31, "sc", "list-icon"),
                attrs: { _i: 31 }
              }),
              _c("text", {
                staticClass: _vm._$s(32, "sc", "list-text"),
                attrs: { _i: 32 }
              }),
              _c("text", {
                staticClass: _vm._$s(33, "sc", "navigat-arrow"),
                attrs: { _i: 33 }
              })
            ]
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(34, "sc", "btn-row"), attrs: { _i: 34 } },
        [
          _vm._$s(35, "i", _vm.hasLogin)
            ? _c("button", {
                staticClass: _vm._$s(35, "sc", "primary"),
                attrs: { _i: 35 },
                on: { click: _vm.bindLogout }
              })
            : _vm._e()
        ]
      )
    ])
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 49 */
/*!*************************************************************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/pages/user/user.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./user.vue?vue&type=script&lang=js&mpType=page */ 50);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJpQixDQUFnQixxa0JBQUcsRUFBQyIsImZpbGUiOiI0OS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VzZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VzZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///49\n");

/***/ }),
/* 50 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/application/HbuilderXAPP/hgApp/pages/user/user.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uniCloud, __f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _vuex = __webpack_require__(/*! vuex */ 7);function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =\n\n\n\n\n{\n  data: function data() {\n    return {\n      avatarUrl: \"../../static/img/logo.png\",\n      inviteUrl: '' };\n\n  },\n  computed: _objectSpread({},\n  (0, _vuex.mapState)(['hasLogin', 'forcedLogin', 'userName'])),\n\n\n  methods: _objectSpread(_objectSpread({},\n  (0, _vuex.mapMutations)(['logout'])), {}, {\n    bindLogin: function bindLogin() {\n      if (!this.hasLogin) {\n        uni.navigateTo({\n          url: '../login/login' });\n\n      }\n    },\n    bindLogout: function bindLogout() {var _this = this;\n      var loginType = uni.getStorageSync('login_type');\n      if (loginType === 'local') {\n        this.logout();\n        if (this.forcedLogin) {\n          uni.reLaunch({\n            url: '../login/login' });\n\n        }\n        return;\n      }\n\n      uniCloud.callFunction({\n        name: 'user-center',\n        data: {\n          action: 'logout' },\n\n        success: function success(e) {\n\n          __f__(\"log\", 'logout success', e, \" at pages/user/user.vue:101\");\n\n          if (e.result.code == 0) {\n            _this.logout();\n            uni.removeStorageSync('uniIdToken');\n            uni.removeStorageSync('username');\n            /**\n                                                * 如果需要强制登录跳转回登录页面\n                                                */\n            _this.inviteUrl = '';\n            if (_this.forcedLogin) {\n              uni.reLaunch({\n                url: '../login/login' });\n\n            }\n          } else {\n            uni.showModal({\n              content: e.result.msg,\n              showCancel: false });\n\n            __f__(\"log\", '登出失败', e, \" at pages/user/user.vue:121\");\n          }\n\n        },\n        fail: function fail(e) {\n          uni.showModal({\n            content: JSON.stringify(e),\n            showCancel: false });\n\n        } });\n\n    },\n    toInvite: function toInvite() {\n      uni.navigateTo({\n        url: '/pages/invite/invite' });\n\n    } }) };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 36)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 40)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdXNlci91c2VyLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdEQSwrQzs7Ozs7QUFLQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLDRDQURBO0FBRUEsbUJBRkE7O0FBSUEsR0FOQTtBQU9BO0FBQ0EsOERBREEsQ0FQQTs7O0FBV0E7QUFDQSxxQ0FEQTtBQUVBLGFBRkEsdUJBRUE7QUFDQTtBQUNBO0FBQ0EsK0JBREE7O0FBR0E7QUFDQSxLQVJBO0FBU0EsY0FUQSx3QkFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FEQTs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFEQTtBQUVBO0FBQ0EsMEJBREEsRUFGQTs7QUFLQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxxQ0FEQTs7QUFHQTtBQUNBLFdBYkEsTUFhQTtBQUNBO0FBQ0EsbUNBREE7QUFFQSwrQkFGQTs7QUFJQTtBQUNBOztBQUVBLFNBOUJBO0FBK0JBLFlBL0JBLGdCQStCQSxDQS9CQSxFQStCQTtBQUNBO0FBQ0Esc0NBREE7QUFFQSw2QkFGQTs7QUFJQSxTQXBDQTs7QUFzQ0EsS0EzREE7QUE0REEsWUE1REEsc0JBNERBO0FBQ0E7QUFDQSxtQ0FEQTs7QUFHQSxLQWhFQSxHQVhBLEUiLCJmaWxlIjoiNTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwiY2VudGVyXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibG9nb1wiIEBjbGljaz1cImJpbmRMb2dpblwiIDpob3Zlci1jbGFzcz1cIiFoYXNMb2dpbiA/ICdsb2dvLWhvdmVyJyA6ICcnXCI+XHJcblx0XHRcdFx0PGltYWdlIGNsYXNzPVwibG9nby1pbWdcIiA6c3JjPVwiYXZhdGFyVXJsXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImxvZ28tdGl0bGVcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidWVyLW5hbWVcIj5Iae+8jHt7aGFzTG9naW4gPyB1c2VyTmFtZSA6ICfmgqjmnKrnmbvlvZUnfX08L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImdvLWxvZ2luIG5hdmlnYXQtYXJyb3dcIiB2LWlmPVwiIWhhc0xvZ2luXCI+JiN4ZTY1ZTs8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY2VudGVyLWxpc3RcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNlbnRlci1saXN0LWl0ZW0gYm9yZGVyLWJvdHRvbVwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJsaXN0LWljb25cIj4mI3hlNjBmOzwvdGV4dD5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibGlzdC10ZXh0XCI+5biQ5Y+3566h55CGPC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJuYXZpZ2F0LWFycm93XCI+JiN4ZTY1ZTs8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8IS0tICNpZmRlZiBBUFAtUExVUyAtLT5cclxuXHRcdFx0XHQ8dmlldyB2LWlmPVwiaGFzTG9naW5cIiBjbGFzcz1cImNlbnRlci1saXN0LWl0ZW0gYm9yZGVyLWJvdHRvbVwiIEBjbGljaz1cInRvSW52aXRlXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImxpc3QtaWNvblwiPiYjeGU2NWY7PC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJsaXN0LXRleHRcIj7pgoDor7flpb3lj4s8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm5hdmlnYXQtYXJyb3dcIj4mI3hlNjVlOzwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwhLS0gI2VuZGlmIC0tPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2VudGVyLWxpc3QtaXRlbVwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJsaXN0LWljb25cIj4mI3hlNjM5OzwvdGV4dD5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibGlzdC10ZXh0XCI+5paw5raI5oGv6YCa55+lPC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJuYXZpZ2F0LWFycm93XCI+JiN4ZTY1ZTs8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY2VudGVyLWxpc3RcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNlbnRlci1saXN0LWl0ZW0gYm9yZGVyLWJvdHRvbVwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJsaXN0LWljb25cIj4mI3hlNjBiOzwvdGV4dD5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibGlzdC10ZXh0XCI+5biu5Yqp5LiO5Y+N6aaIPC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJuYXZpZ2F0LWFycm93XCI+JiN4ZTY1ZTs8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2VudGVyLWxpc3QtaXRlbVwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJsaXN0LWljb25cIj4mI3hlNjVmOzwvdGV4dD5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibGlzdC10ZXh0XCI+5pyN5Yqh5p2h5qy+5Y+K6ZqQ56eBPC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJuYXZpZ2F0LWFycm93XCI+JiN4ZTY1ZTs8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY2VudGVyLWxpc3RcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNlbnRlci1saXN0LWl0ZW1cIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibGlzdC1pY29uXCI+JiN4ZTYxNDs8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImxpc3QtdGV4dFwiPuWFs+S6juW6lOeUqDwvdGV4dD5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibmF2aWdhdC1hcnJvd1wiPiYjeGU2NWU7PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJ0bi1yb3dcIj5cclxuXHRcdFx0XHQ8YnV0dG9uIHYtaWY9XCJoYXNMb2dpblwiIGNsYXNzPVwicHJpbWFyeVwiIHR5cGU9XCJwcmltYXJ5XCIgQHRhcD1cImJpbmRMb2dvdXRcIj7pgIDlh7rnmbvlvZU8L2J1dHRvbj5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHtcclxuXHRcdG1hcFN0YXRlLFxyXG5cdFx0bWFwTXV0YXRpb25zXHJcblx0fSBmcm9tICd2dWV4J1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGF2YXRhclVybDogXCIuLi8uLi9zdGF0aWMvaW1nL2xvZ28ucG5nXCIsXHJcblx0XHRcdFx0aW52aXRlVXJsOiAnJ1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0Li4ubWFwU3RhdGUoWydoYXNMb2dpbicsICdmb3JjZWRMb2dpbicsICd1c2VyTmFtZSddKVxyXG5cdFx0fSxcclxuXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdC4uLm1hcE11dGF0aW9ucyhbJ2xvZ291dCddKSxcclxuXHRcdFx0YmluZExvZ2luKCkge1xuXHRcdFx0XHRpZiAoIXRoaXMuaGFzTG9naW4pIHtcblx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdHVybDogJy4uL2xvZ2luL2xvZ2luJyxcclxuXHRcdFx0XHRcdH0pO1x0XHRcdFx0XHRcclxuXHRcdFx0XHR9IFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRiaW5kTG9nb3V0KCkge1xyXG5cdFx0XHRcdGNvbnN0IGxvZ2luVHlwZSA9IHVuaS5nZXRTdG9yYWdlU3luYygnbG9naW5fdHlwZScpXHJcblx0XHRcdFx0aWYgKGxvZ2luVHlwZSA9PT0gJ2xvY2FsJykge1xyXG5cdFx0XHRcdFx0dGhpcy5sb2dvdXQoKTtcclxuXHRcdFx0XHRcdGlmICh0aGlzLmZvcmNlZExvZ2luKSB7XHJcblx0XHRcdFx0XHRcdHVuaS5yZUxhdW5jaCh7XHJcblx0XHRcdFx0XHRcdFx0dXJsOiAnLi4vbG9naW4vbG9naW4nLFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dW5pQ2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuXHRcdFx0XHRcdG5hbWU6ICd1c2VyLWNlbnRlcicsXHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdGFjdGlvbjogJ2xvZ291dCdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRzdWNjZXNzOiAoZSkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ2xvZ291dCBzdWNjZXNzJywgZSk7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoZS5yZXN1bHQuY29kZSA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5sb2dvdXQoKTtcclxuXHRcdFx0XHRcdFx0XHR1bmkucmVtb3ZlU3RvcmFnZVN5bmMoJ3VuaUlkVG9rZW4nKVxyXG5cdFx0XHRcdFx0XHRcdHVuaS5yZW1vdmVTdG9yYWdlU3luYygndXNlcm5hbWUnKVxyXG5cdFx0XHRcdFx0XHRcdC8qKlxyXG5cdFx0XHRcdFx0XHRcdCAqIOWmguaenOmcgOimgeW8uuWItueZu+W9lei3s+i9rOWbnueZu+W9lemhtemdolxyXG5cdFx0XHRcdFx0XHRcdCAqL1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuaW52aXRlVXJsID0gJydcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5mb3JjZWRMb2dpbikge1xyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLnJlTGF1bmNoKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dXJsOiAnLi4vbG9naW4vbG9naW4nLFxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogZS5yZXN1bHQubXNnLFxyXG5cdFx0XHRcdFx0XHRcdFx0c2hvd0NhbmNlbDogZmFsc2VcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfnmbvlh7rlpLHotKUnLCBlKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRmYWlsKGUpIHtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0Y29udGVudDogSlNPTi5zdHJpbmdpZnkoZSksXHJcblx0XHRcdFx0XHRcdFx0c2hvd0NhbmNlbDogZmFsc2VcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b0ludml0ZSgpIHtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvaW52aXRlL2ludml0ZSdcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHRAZm9udC1mYWNlIHtcclxuXHRcdGZvbnQtZmFtaWx5OiB0ZXh0aWNvbnM7XHJcblx0XHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdFx0Zm9udC1zdHlsZTogbm9ybWFsO1xyXG5cdFx0c3JjOiB1cmwoJ2h0dHBzOi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfOTg0MjEwXzVjczEzbmRncXNuLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuXHR9XHJcblxyXG5cdHBhZ2UsXHJcblx0dmlldyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdH1cclxuXHJcblx0cGFnZSB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG5cdH1cclxuXHJcblx0YnV0dG9uIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHJcblx0LmNlbnRlciB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdH1cclxuXHJcblx0LmxvZ28ge1xyXG5cdFx0d2lkdGg6IDc1MHJweDtcclxuXHRcdGhlaWdodDogMjQwcnB4O1xyXG5cdFx0cGFkZGluZzogMjBycHg7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzBmYWVmZjtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmxvZ28taG92ZXIge1xyXG5cdFx0b3BhY2l0eTogMC44O1xyXG5cdH1cclxuXHJcblx0LmxvZ28taW1nIHtcclxuXHRcdHdpZHRoOiAxMjBycHg7XHJcblx0XHRoZWlnaHQ6IDEyMHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE1MHJweDtcclxuXHR9XHJcblxyXG5cdC5sb2dvLXRpdGxlIHtcclxuXHRcdGhlaWdodDogMTUwcnB4O1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LnVlci1uYW1lIHtcclxuXHRcdGhlaWdodDogNjBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogNjBycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcblxyXG5cdC5nby1sb2dpbi5uYXZpZ2F0LWFycm93IHtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHJcblx0LmxvZ2luLXRpdGxlIHtcclxuXHRcdGhlaWdodDogMTUwcnB4O1xyXG5cdFx0YWxpZ24taXRlbXM6IHNlbGYtc3RhcnQ7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRtYXJnaW4tbGVmdDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQuY2VudGVyLWxpc3Qge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xyXG5cdFx0d2lkdGg6IDc1MHJweDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0fVxyXG5cclxuXHQuY2VudGVyLWxpc3QtaXRlbSB7XHJcblx0XHRoZWlnaHQ6IDkwcnB4O1xyXG5cdFx0d2lkdGg6IDc1MHJweDtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0cGFkZGluZzogMHJweCAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5ib3JkZXItYm90dG9tIHtcclxuXHRcdGJvcmRlci1ib3R0b20td2lkdGg6IDFycHg7XHJcblx0XHRib3JkZXItY29sb3I6ICNjOGM3Y2M7XHJcblx0XHRib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuXHR9XHJcblxyXG5cdC5saXN0LWljb24ge1xyXG5cdFx0d2lkdGg6IDQwcnB4O1xyXG5cdFx0aGVpZ2h0OiA5MHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA5MHJweDtcclxuXHRcdGNvbG9yOiAjMGZhZWZmO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Zm9udC1mYW1pbHk6IHRleHRpY29ucztcclxuXHRcdG1hcmdpbi1yaWdodDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQubGlzdC10ZXh0IHtcclxuXHRcdGhlaWdodDogOTBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogOTBycHg7XHJcblx0XHRjb2xvcjogIzU1NTtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdH1cclxuXHJcblx0Lm5hdmlnYXQtYXJyb3cge1xyXG5cdFx0aGVpZ2h0OiA5MHJweDtcclxuXHRcdHdpZHRoOiA0MHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA5MHJweDtcclxuXHRcdGNvbG9yOiAjNTU1O1xyXG5cdFx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0XHRmb250LWZhbWlseTogdGV4dGljb25zO1xyXG5cdH1cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///50\n");

/***/ }),
/* 51 */
/*!*****************************************************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/pages/product-code/product-code.vue?mpType=page ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _product_code_vue_vue_type_template_id_68bbd394_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-code.vue?vue&type=template&id=68bbd394&mpType=page */ 52);\n/* harmony import */ var _product_code_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-code.vue?vue&type=script&lang=js&mpType=page */ 54);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _product_code_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _product_code_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _product_code_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _product_code_vue_vue_type_template_id_68bbd394_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _product_code_vue_vue_type_template_id_68bbd394_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _product_code_vue_vue_type_template_id_68bbd394_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/product-code/product-code.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0k7QUFDcEk7QUFDMkU7QUFDTDs7O0FBR3RFO0FBQ21LO0FBQ25LLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLDZGQUFNO0FBQ1IsRUFBRSxrR0FBTTtBQUNSLEVBQUUsMkdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3Byb2R1Y3QtY29kZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjhiYmQzOTQmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3Byb2R1Y3QtY29kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vcHJvZHVjdC1jb2RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL3Byb2R1Y3QtY29kZS9wcm9kdWN0LWNvZGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///51\n");

/***/ }),
/* 52 */
/*!***********************************************************************************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/pages/product-code/product-code.vue?vue&type=template&id=68bbd394&mpType=page ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_product_code_vue_vue_type_template_id_68bbd394_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./product-code.vue?vue&type=template&id=68bbd394&mpType=page */ 53);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_product_code_vue_vue_type_template_id_68bbd394_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_product_code_vue_vue_type_template_id_68bbd394_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_product_code_vue_vue_type_template_id_68bbd394_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_product_code_vue_vue_type_template_id_68bbd394_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 53 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/application/HbuilderXAPP/hgApp/pages/product-code/product-code.vue?vue&type=template&id=68bbd394&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  tkiQrcode: __webpack_require__(/*! @/components/tki-qrcode/tki-qrcode.vue */ 23).default
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "qrimg"), attrs: { _i: 0 } },
    [
      _c("tki-qrcode", {
        ref: "qrcode",
        attrs: {
          cid: _vm.cid,
          val: _vm.val,
          unit: _vm.unit,
          size: _vm.size,
          onval: _vm.onval,
          loadMake: _vm.loadMake,
          showLoading: _vm.showLoading,
          loadingText: _vm.loadingText,
          lv: _vm.lv,
          _i: 1
        },
        on: { result: _vm.qrR }
      }),
      _c(
        "view",
        { staticClass: _vm._$s(2, "sc", "btn-content"), attrs: { _i: 2 } },
        [_c("button", { attrs: { _i: 3 }, on: { click: _vm.onCancle } })]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(4, "sc", "btn-content"), attrs: { _i: 4 } },
        [_c("button", { attrs: { _i: 5 }, on: { click: _vm.onClose } })]
      )
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 54 */
/*!*****************************************************************************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/pages/product-code/product-code.vue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_product_code_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./product-code.vue?vue&type=script&lang=js&mpType=page */ 55);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_product_code_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_product_code_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_product_code_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_product_code_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_product_code_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1qQixDQUFnQiw2a0JBQUcsRUFBQyIsImZpbGUiOiI1NC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Byb2R1Y3QtY29kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcHJvZHVjdC1jb2RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///54\n");

/***/ }),
/* 55 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/application/HbuilderXAPP/hgApp/pages/product-code/product-code.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _vuex = __webpack_require__(/*! vuex */ 7);\n\n\n\nvar _tkiQrcode = _interopRequireDefault(__webpack_require__(/*! @/components/tki-qrcode/tki-qrcode.vue */ 23));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =\n{\n  data: function data() {\n    return {\n      cid: \"21\",\n      size: 300,\n      val: \"www.baidu.com\",\n      onval: true,\n      loadMake: true,\n      showLoading: true,\n      lv: 0,\n      loadingText: \"二维码生成中\",\n      unit: \"px\" };\n\n  },\n  components: {\n    tkiQrcode: _tkiQrcode.default },\n\n  onLoad: function onLoad(data) {\n    if (data.codeData) {\n      this.val = data.codeData;\n    }\n  },\n  methods: _objectSpread(_objectSpread({},\n  (0, _vuex.mapMutations)(['logout'])), {}, {\n    qrR: function qrR(res) {\n    },\n    onCancle: function onCancle() {\n      uni.navigateBack();\n    },\n    onClose: function onClose() {\n      this.logout();\n      uni.redirectTo({\n        url: \"../login/login\" });\n\n    } }) };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvcHJvZHVjdC1jb2RlL3Byb2R1Y3QtY29kZS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBOzs7O0FBSUEsK0c7QUFDQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLGVBREE7QUFFQSxlQUZBO0FBR0EsMEJBSEE7QUFJQSxpQkFKQTtBQUtBLG9CQUxBO0FBTUEsdUJBTkE7QUFPQSxXQVBBO0FBUUEsMkJBUkE7QUFTQSxnQkFUQTs7QUFXQSxHQWJBO0FBY0E7QUFDQSxpQ0FEQSxFQWRBOztBQWlCQSxRQWpCQSxrQkFpQkEsSUFqQkEsRUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQXJCQTtBQXNCQTtBQUNBLHFDQURBO0FBRUEsT0FGQSxlQUVBLEdBRkEsRUFFQTtBQUNBLEtBSEE7QUFJQSxZQUpBLHNCQUlBO0FBQ0E7QUFDQSxLQU5BO0FBT0EsV0FQQSxxQkFPQTtBQUNBO0FBQ0E7QUFDQSw2QkFEQTs7QUFHQSxLQVpBLEdBdEJBLEUiLCJmaWxlIjoiNTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDx2aWV3IGNsYXNzPVwicXJpbWdcIj5cclxuXHQgICAgPHRraS1xcmNvZGVcclxuXHQgICAgcmVmPVwicXJjb2RlXCJcclxuXHQgICAgOmNpZD1cImNpZFwiXHJcblx0ICAgIDp2YWw9XCJ2YWxcIlxyXG5cdFx0OnVuaXQ9XCJ1bml0XCJcclxuXHQgICAgOnNpemU9XCJzaXplXCJcclxuXHQgICAgOm9udmFsPVwib252YWxcIlxyXG5cdCAgICA6bG9hZE1ha2U9XCJsb2FkTWFrZVwiXHJcblx0ICAgIDpzaG93TG9hZGluZz1cInNob3dMb2FkaW5nXCJcclxuXHQgICAgOmxvYWRpbmdUZXh0PVwibG9hZGluZ1RleHRcIlxyXG5cdFx0Omx2PVwibHZcIlxyXG5cdCAgICBAcmVzdWx0PVwicXJSXCIgLz5cclxuXHRcdDx2aWV3IGNsYXNzPVwiYnRuLWNvbnRlbnRcIj5cclxuXHRcdFx0PGJ1dHRvbiB0eXBlPVwiZGVmYXVsdFwiIEB0YXA9XCJvbkNhbmNsZVwiPui/lOWbnuS4u+mhtTwvYnV0dG9uPlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJidG4tY29udGVudFwiPlxyXG5cdFx0XHQ8YnV0dG9uIHR5cGU9XCJkZWZhdWx0XCIgQHRhcD1cIm9uQ2xvc2VcIj7pgIDlh7rns7vnu588L2J1dHRvbj5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxyXG5cdGltcG9ydCB7XHJcblx0XHRtYXBTdGF0ZSxcclxuXHRcdG1hcE11dGF0aW9uc1xyXG5cdH0gZnJvbSAndnVleCdcclxuXHRpbXBvcnQgdGtpUXJjb2RlIGZyb20gXCJAL2NvbXBvbmVudHMvdGtpLXFyY29kZS90a2ktcXJjb2RlLnZ1ZVwiXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRjaWQ6XCIyMVwiLFxyXG5cdFx0XHRcdHNpemU6MzAwLFxyXG5cdFx0XHRcdHZhbDpcInd3dy5iYWlkdS5jb21cIixcclxuXHRcdFx0XHRvbnZhbDp0cnVlLFxyXG5cdFx0XHRcdGxvYWRNYWtlOnRydWUsXHJcblx0XHRcdFx0c2hvd0xvYWRpbmc6dHJ1ZSxcclxuXHRcdFx0XHRsdjowLFxyXG5cdFx0XHRcdGxvYWRpbmdUZXh0Olwi5LqM57u056CB55Sf5oiQ5LitXCIsXHJcblx0XHRcdFx0dW5pdDpcInB4XCIsXG5cdFx0XHR9O1xuXHRcdH0sXHJcblx0XHRjb21wb25lbnRzOntcclxuXHRcdFx0dGtpUXJjb2RlXHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkKGRhdGEpIHtcclxuXHRcdFx0aWYoZGF0YS5jb2RlRGF0YSl7XHJcblx0XHRcdFx0dGhpcy52YWwgPSBkYXRhLmNvZGVEYXRhO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczp7XHJcblx0XHRcdC4uLm1hcE11dGF0aW9ucyhbJ2xvZ291dCddKSxcclxuXHRcdFx0cXJSKHJlcyl7XHJcblx0XHRcdH0sXHJcblx0XHRcdG9uQ2FuY2xlKCl7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjaygpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRvbkNsb3NlKCl7XHJcblx0XHRcdFx0dGhpcy5sb2dvdXQoKTtcclxuXHRcdFx0XHR1bmkucmVkaXJlY3RUbyh7XHJcblx0XHRcdFx0XHR1cmw6XCIuLi9sb2dpbi9sb2dpblwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5cclxuLnFyaW1ne1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRwYWRkaW5nLXRvcDoxMCUgO1xyXG5cdC5idG4tY29udGVudHtcclxuXHRcdGJ1dHRvbntcclxuXHRcdFx0bWFyZ2luLXRvcDogMjBweDtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwN0FGRjtcclxuXHRcdFx0Y29sb3I6ICNmZmZmZmY7XHJcblx0XHR9XHJcblx0fVxyXG59XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///55\n");

/***/ }),
/* 56 */
/*!*******************************************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/pages/setHttp/setHttp.vue?mpType=page ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _setHttp_vue_vue_type_template_id_c942b728_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setHttp.vue?vue&type=template&id=c942b728&scoped=true&mpType=page */ 57);\n/* harmony import */ var _setHttp_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setHttp.vue?vue&type=script&lang=js&mpType=page */ 59);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _setHttp_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _setHttp_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _setHttp_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _setHttp_vue_vue_type_template_id_c942b728_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _setHttp_vue_vue_type_template_id_c942b728_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"c942b728\",\n  null,\n  false,\n  _setHttp_vue_vue_type_template_id_c942b728_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/setHttp/setHttp.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkk7QUFDM0k7QUFDc0U7QUFDTDs7O0FBR2pFO0FBQ21LO0FBQ25LLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHdGQUFNO0FBQ1IsRUFBRSx5R0FBTTtBQUNSLEVBQUUsa0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3NldEh0dHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWM5NDJiNzI4JnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zZXRIdHRwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9zZXRIdHRwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYzk0MmI3MjhcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvc2V0SHR0cC9zZXRIdHRwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///56\n");

/***/ }),
/* 57 */
/*!*************************************************************************************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/pages/setHttp/setHttp.vue?vue&type=template&id=c942b728&scoped=true&mpType=page ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setHttp_vue_vue_type_template_id_c942b728_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./setHttp.vue?vue&type=template&id=c942b728&scoped=true&mpType=page */ 58);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setHttp_vue_vue_type_template_id_c942b728_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setHttp_vue_vue_type_template_id_c942b728_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setHttp_vue_vue_type_template_id_c942b728_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setHttp_vue_vue_type_template_id_c942b728_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 58 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/application/HbuilderXAPP/hgApp/pages/setHttp/setHttp.vue?vue&type=template&id=c942b728&scoped=true&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "set-http content"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "uni-list"), attrs: { _i: 1 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(2, "sc", "uni-list-cell"),
              attrs: { _i: 2 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(3, "sc", "uni-list-cell-left"),
                  attrs: { _i: 3 }
                },
                [_c("text")]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(5, "sc", "uni-list-cell-db"),
                  attrs: { _i: 5 }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.ip,
                        expression: "ip"
                      }
                    ],
                    attrs: { _i: 6 },
                    domProps: { value: _vm._$s(6, "v-model", _vm.ip) },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.ip = $event.target.value
                      }
                    }
                  })
                ]
              )
            ]
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(7, "sc", "uni-list"), attrs: { _i: 7 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(8, "sc", "uni-list-cell"),
              attrs: { _i: 8 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(9, "sc", "uni-list-cell-left"),
                  attrs: { _i: 9 }
                },
                [_c("text")]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(11, "sc", "uni-list-cell-db"),
                  attrs: { _i: 11 }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.port,
                        expression: "port"
                      }
                    ],
                    attrs: { _i: 12 },
                    domProps: { value: _vm._$s(12, "v-model", _vm.port) },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.port = $event.target.value
                      }
                    }
                  })
                ]
              )
            ]
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(13, "sc", "uni-list"), attrs: { _i: 13 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(14, "sc", "uni-list-cell"),
              attrs: { _i: 14 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(15, "sc", "uni-list-cell-left btn-box"),
                  attrs: { _i: 15 }
                },
                [
                  _c("button", {
                    attrs: { _i: 16 },
                    on: { click: _vm.onSaveIP }
                  })
                ]
              )
            ]
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 59 */
/*!*******************************************************************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/pages/setHttp/setHttp.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setHttp_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./setHttp.vue?vue&type=script&lang=js&mpType=page */ 60);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setHttp_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setHttp_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setHttp_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setHttp_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setHttp_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThpQixDQUFnQix3a0JBQUcsRUFBQyIsImZpbGUiOiI1OS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NldEh0dHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NldEh0dHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///59\n");

/***/ }),
/* 60 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/application/HbuilderXAPP/hgApp/pages/setHttp/setHttp.vue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _vuex = __webpack_require__(/*! vuex */ 7);function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =\n{\n  data: function data() {\n    return {\n      ip: \"\",\n      port: \"\" };\n\n  },\n  mounted: function mounted() {\n    this.onLoading();\n\n    var ip = 'http://www.baidu.com';\n    var str = ip.match(/^http:\\/\\/(\\S*)/)[1];\n    __f__(\"log\", str, \" at pages/setHttp/setHttp.vue:47\");\n\n  },\n  methods: _objectSpread(_objectSpread({},\n  (0, _vuex.mapMutations)(['logout'])), {}, {\n    setIP: function setIP(ip) {\n      if (/^http/g.test(ip)) {\n        return ip;\n      } else {\n        return \"http://\" + ip;\n      }\n    },\n    getIP: function getIP(ip) {\n\n      if (/^https/g.test(ip)) {\n        return ip.match(/^https:\\/\\/(\\S*)/)[1];\n      }\n      return ip.match(/^http:\\/\\/(\\S*)/)[1];\n\n    },\n    onLoading: function onLoading() {var _this = this;\n      uni.getStorage({\n        key: \"ip\",\n        success: function success(res) {\n          _this.ip = _this.getIP(res.data);\n        } });\n\n      uni.getStorage({\n        key: \"port\",\n        success: function success(res) {\n          _this.port = res.data;\n        } });\n\n    },\n    onSaveIP: function onSaveIP() {var _this2 = this;\n      uni.showToast({\n        duration: 1500,\n        title: \"开始保存\",\n        success: function success() {\n          uni.setStorage({\n            key: 'port',\n            data: _this2.port });\n\n          if (_this2.ip) {\n            uni.setStorage({\n              key: 'ip',\n              data: _this2.setIP(_this2.ip),\n              success: function success() {\n                uni.showToast({\n                  icon: \"success\",\n                  title: \"保存配置成功\",\n                  success: function success() {\n                    _this2.ip = \"\";\n                    _this2.port = \"\";\n                    _this2.logout();\n                    uni.redirectTo({\n                      url: \"../login/login?message=\" + Math.ceil(Math.random() * 100) });\n\n                  } });\n\n              },\n              fail: function fail(res) {\n                uni.showToast({\n                  icon: \"none\",\n                  title: res.data });\n\n              } });\n\n          }\n        } });\n\n\n\n\n    } }) };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 40)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvc2V0SHR0cC9zZXRIdHRwLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0EsK0M7QUFDQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLFlBREE7QUFFQSxjQUZBOztBQUlBLEdBTkE7QUFPQSxTQVBBLHFCQU9BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEdBZEE7QUFlQTtBQUNBLHFDQURBO0FBRUEsU0FGQSxpQkFFQSxFQUZBLEVBRUE7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLEtBUkE7QUFTQSxTQVRBLGlCQVNBLEVBVEEsRUFTQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQWhCQTtBQWlCQSxhQWpCQSx1QkFpQkE7QUFDQTtBQUNBLGlCQURBO0FBRUE7QUFDQTtBQUNBLFNBSkE7O0FBTUE7QUFDQSxtQkFEQTtBQUVBO0FBQ0E7QUFDQSxTQUpBOztBQU1BLEtBOUJBO0FBK0JBLFlBL0JBLHNCQStCQTtBQUNBO0FBQ0Esc0JBREE7QUFFQSxxQkFGQTtBQUdBO0FBQ0E7QUFDQSx1QkFEQTtBQUVBLDZCQUZBOztBQUlBO0FBQ0E7QUFDQSx1QkFEQTtBQUVBLDJDQUZBO0FBR0E7QUFDQTtBQUNBLGlDQURBO0FBRUEsaUNBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUZBREE7O0FBR0EsbUJBVkE7O0FBWUEsZUFoQkE7QUFpQkE7QUFDQTtBQUNBLDhCQURBO0FBRUEsaUNBRkE7O0FBSUEsZUF0QkE7O0FBd0JBO0FBQ0EsU0FsQ0E7Ozs7O0FBdUNBLEtBdkVBLEdBZkEsRSIsImZpbGUiOiI2MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PHZpZXcgY2xhc3M9XCJzZXQtaHR0cCBjb250ZW50XCI+XG5cdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1saXN0LWNlbGxcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1saXN0LWNlbGwtbGVmdFwiPlxyXG5cdFx0XHRcdFx0PHRleHQ+6YWN572uSVA6PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1saXN0LWNlbGwtZGJcIj5cclxuXHRcdFx0XHRcdDxpbnB1dCBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeWfn+WQjeaIlmlw5Zyw5Z2AXCIgIHR5cGU9XCJ0ZXh0XCIgZm9jdXM9XCJ0cnVlXCIgdi1tb2RlbD1cImlwXCIgIC8+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cInVuaS1saXN0XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3QtY2VsbFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3QtY2VsbC1sZWZ0XCI+XHJcblx0XHRcdFx0XHQ8dGV4dD7nq6/lj6Plj7c6PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1saXN0LWNlbGwtZGJcIj5cclxuXHRcdFx0XHRcdDxpbnB1dCBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeerr+WPo+WPt1wiIHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cInBvcnRcIiAgLz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3RcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdC1jZWxsXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdC1jZWxsLWxlZnQgYnRuLWJveFwiPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBAdGFwPVwib25TYXZlSVBcIiB0eXBlPVwiZGVmYXVsdFwiPuS/neWtmOmFjee9rjwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxyXG5cdGltcG9ydCB7bWFwTXV0YXRpb25zfSBmcm9tICd2dWV4Jztcblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRpcDpcIlwiLFxyXG5cdFx0XHRcdHBvcnQ6XCJcIlxuXHRcdFx0fVxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHR0aGlzLm9uTG9hZGluZygpO1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IGlwID0gJ2h0dHA6Ly93d3cuYmFpZHUuY29tJztcclxuXHRcdFx0bGV0IHN0cj1pcC5tYXRjaCgvXmh0dHA6XFwvXFwvKFxcUyopLylbMV07XHJcblx0XHRcdGNvbnNvbGUubG9nKHN0cilcclxuXHJcblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Li4ubWFwTXV0YXRpb25zKFsnbG9nb3V0J10pLFxyXG5cdFx0XHRzZXRJUChpcCl7XHJcblx0XHRcdFx0aWYoL15odHRwL2cudGVzdChpcCkpe1xyXG5cdFx0XHRcdFx0cmV0dXJuIGlwO1xyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0cmV0dXJuIFwiaHR0cDovL1wiK2lwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0SVAoaXApe1xyXG5cdFx0XHRcdFxyXG5cdFx0XHQgIGlmKC9eaHR0cHMvZy50ZXN0KGlwKSl7XHJcblx0XHRcdFx0ICByZXR1cm4gaXAubWF0Y2goL15odHRwczpcXC9cXC8oXFxTKikvKVsxXTtcclxuXHRcdFx0ICB9XHRcclxuXHRcdFx0ICByZXR1cm4gaXAubWF0Y2goL15odHRwOlxcL1xcLyhcXFMqKS8pWzFdO1xyXG5cdFx0XHQgIFxyXG5cdFx0XHR9LFxuXHRcdFx0b25Mb2FkaW5nKCl7XHJcblx0XHRcdFx0dW5pLmdldFN0b3JhZ2Uoe1xyXG5cdFx0XHRcdFx0a2V5OlwiaXBcIixcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6KHJlcyk9PntcclxuXHRcdFx0XHRcdFx0dGhpcy5pcD10aGlzLmdldElQKHJlcy5kYXRhKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR1bmkuZ2V0U3RvcmFnZSh7XHJcblx0XHRcdFx0XHRrZXk6XCJwb3J0XCIsXHJcblx0XHRcdFx0XHRzdWNjZXNzOihyZXMpPT57XHJcblx0XHRcdFx0XHRcdHRoaXMucG9ydD1yZXMuZGF0YTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0b25TYXZlSVAoKXtcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdGR1cmF0aW9uOjE1MDAsXHJcblx0XHRcdFx0XHR0aXRsZTpcIuW8gOWni+S/neWtmFwiLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlKHtcclxuXHRcdFx0XHRcdFx0XHQgICAga2V5OiAncG9ydCcsXHJcblx0XHRcdFx0XHRcdFx0ICAgIGRhdGE6IHRoaXMucG9ydCxcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0aWYodGhpcy5pcCl7XHJcblx0XHRcdFx0XHRcdFx0dW5pLnNldFN0b3JhZ2Uoe1xyXG5cdFx0XHRcdFx0XHRcdCAgICBrZXk6ICdpcCcsXHJcblx0XHRcdFx0XHRcdFx0ICAgIGRhdGE6IHRoaXMuc2V0SVAodGhpcy5pcCksXHJcblx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOigpPT57XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb246XCJzdWNjZXNzXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6XCLkv53lrZjphY3nva7miJDlip9cIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmlwPVwiXCI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnBvcnQ9XCJcIjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMubG9nb3V0KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkucmVkaXJlY3RUbyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVybDpcIi4uL2xvZ2luL2xvZ2luP21lc3NhZ2U9XCIrTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqMTAwKSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHQgICAgZmFpbDoocmVzKT0+e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uOlwibm9uZVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOnJlcy5kYXRhXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFxyXG5cclxuXHRcdFx0fSxcblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcblxyXG4uc2V0LWh0dHB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cbi51bmktbGlzdCB7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdHdpZHRoOiA5NiU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblx0XHRcdC51bmktbGlzdC1jZWxsIHtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRcdFx0XHRwYWRkaW5nOiAxMnB4IDZweDtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHJcblx0XHRcdFx0LnVuaS1saXN0LWNlbGwtbGVmdCB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0d2lkdGg6IDg2cHg7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5idG4tYm94e1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRidXR0b257XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDdBRkY7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjZmZmZmZmO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnVuaS1saXN0LWNlbGwtZGIge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGZsZXg6IDE7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogNXB4O1xyXG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRwaWNrZXJ7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiA4MCU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQudW5pLWlucHV0e1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyOjFweCBzb2xpZCAjZTVlNWU1IDtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiA0cHggNHB4O1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDE4cHg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpbnB1dHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDgwJTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5pbnB1dC10ZXh0e1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogNjAlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LmlucHV0LXRleHQtMntcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDcwJTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRleHR7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA1cHg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQudW5pLWNhbWVyYXtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogI2ZmZmZmZjtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogNnB4O1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogNXB4O1xyXG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdC5idG4tY29udGVudHtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0LmJ0bntcclxuXHRcdFx0XHRcdHdpZHRoOiAzNiU7XHJcblx0XHRcdFx0XHRtYXJnaW46IDAgNSU7XHJcblx0XHRcdFx0XHRidXR0b257XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMxOEI1NjY7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjZmZmZmZmO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aW5wdXQge1xyXG5cdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0XHRcdHBhZGRpbmc6IDRweCA0cHg7XHJcblx0XHR9XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///60\n");

/***/ }),
/* 61 */
/*!*************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/App.vue ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 62);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDNko7QUFDN0osZ0JBQWdCLDZLQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjYxLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///61\n");

/***/ }),
/* 62 */
/*!**************************************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 63);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVnQixDQUFnQix5akJBQUcsRUFBQyIsImZpbGUiOiI2Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///62\n");

/***/ }),
/* 63 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/application/HbuilderXAPP/hgApp/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\nvar _vuex = __webpack_require__(/*! vuex */ 7);function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =\n\n\n\n\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 1, \" at App.vue:9\");\n    var uniIdToken = uni.getStorageSync('uniIdToken');\n    if (uniIdToken) {\n      this.login(uni.getStorageSync('username'));\n    }\n\n    uni.getStorage({\n      key: \"ip\",\n      success: function success(res) {\n\n      },\n      fail: function fail(res) {\n        uni.navigateTo({\n          url: \"pages/setHttp/setHttp\" });\n\n      } });\n\n\n\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:30\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:33\");\n  },\n\n  methods: _objectSpread({},\n  (0, _vuex.mapMutations)(['login'])) };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 40)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsInVuaUlkVG9rZW4iLCJ1bmkiLCJnZXRTdG9yYWdlU3luYyIsImxvZ2luIiwiZ2V0U3RvcmFnZSIsImtleSIsInN1Y2Nlc3MiLCJyZXMiLCJmYWlsIiwibmF2aWdhdGVUbyIsInVybCIsIm9uU2hvdyIsIm9uSGlkZSIsIm1ldGhvZHMiXSwibWFwcGluZ3MiOiI7QUFDQSwrQzs7Ozs7QUFLZTtBQUNkQSxVQUFRLEVBQUUsb0JBQVc7QUFDcEIsaUJBQVksQ0FBWjtBQUNBLFFBQUlDLFVBQVUsR0FBR0MsR0FBRyxDQUFDQyxjQUFKLENBQW1CLFlBQW5CLENBQWpCO0FBQ0EsUUFBSUYsVUFBSixFQUFnQjtBQUNmLFdBQUtHLEtBQUwsQ0FBV0YsR0FBRyxDQUFDQyxjQUFKLENBQW1CLFVBQW5CLENBQVg7QUFDQTs7QUFFREQsT0FBRyxDQUFDRyxVQUFKLENBQWU7QUFDZEMsU0FBRyxFQUFDLElBRFU7QUFFZEMsYUFBTyxFQUFDLGlCQUFDQyxHQUFELEVBQU87O0FBRWQsT0FKYTtBQUtkQyxVQUFJLEVBQUMsY0FBQ0QsR0FBRCxFQUFPO0FBQ1hOLFdBQUcsQ0FBQ1EsVUFBSixDQUFlO0FBQ2RDLGFBQUcsRUFBQyx1QkFEVSxFQUFmOztBQUdBLE9BVGEsRUFBZjs7OztBQWFBLEdBckJhO0FBc0JkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBeEJhO0FBeUJkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBM0JhOztBQTZCZEMsU0FBTztBQUNILDBCQUFhLENBQUMsT0FBRCxDQUFiLENBREcsQ0E3Qk8sRSIsImZpbGUiOiI2My5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtcblx0bWFwU3RhdGUsXG5cdG1hcE11dGF0aW9uc1xufSBmcm9tICd2dWV4J1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG9uTGF1bmNoOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygxKTtcblx0XHRsZXQgdW5pSWRUb2tlbiA9IHVuaS5nZXRTdG9yYWdlU3luYygndW5pSWRUb2tlbicpXG5cdFx0aWYgKHVuaUlkVG9rZW4pIHtcblx0XHRcdHRoaXMubG9naW4odW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VybmFtZScpKVxuXHRcdH1cblx0XHRcblx0XHR1bmkuZ2V0U3RvcmFnZSh7XG5cdFx0XHRrZXk6XCJpcFwiLFxuXHRcdFx0c3VjY2VzczoocmVzKT0+e1xuXHRcdFx0XHRcblx0XHRcdH0sXG5cdFx0XHRmYWlsOihyZXMpPT57XG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0XHR1cmw6XCJwYWdlcy9zZXRIdHRwL3NldEh0dHBcIlxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0XG5cdFx0XG5cdH0sXG5cdG9uU2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBTaG93Jyk7XG5cdH0sXG5cdG9uSGlkZTogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBIaWRlJyk7XG5cdH0sXG5cdFxuXHRtZXRob2RzOiB7XG5cdFx0Li4ubWFwTXV0YXRpb25zKFsnbG9naW4nXSksXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///63\n");

/***/ }),
/* 64 */
/*!********************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/store/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 38));\nvar _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 7));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\n_vue.default.use(_vuex.default);\n\nvar store = new _vuex.default.Store({\n  state: {\n    hasLogin: false,\n    userName: \"\" },\n\n  mutations: {\n    login: function login(state, userName) {\n      state.userName = userName || '新用户';\n      state.hasLogin = true;\n    },\n    logout: function logout(state) {\n      state.userName = \"\";\n      state.hasLogin = false;\n    } } });var _default =\n\n\n\nstore;exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvaW5kZXguanMiXSwibmFtZXMiOlsiVnVlIiwidXNlIiwiVnVleCIsInN0b3JlIiwiU3RvcmUiLCJzdGF0ZSIsImhhc0xvZ2luIiwidXNlck5hbWUiLCJtdXRhdGlvbnMiLCJsb2dpbiIsImxvZ291dCJdLCJtYXBwaW5ncyI6InVGQUFBO0FBQ0EsdUU7O0FBRUFBLGFBQUlDLEdBQUosQ0FBUUMsYUFBUjs7QUFFQSxJQUFNQyxLQUFLLEdBQUcsSUFBSUQsY0FBS0UsS0FBVCxDQUFlO0FBQzVCQyxPQUFLLEVBQUU7QUFDTkMsWUFBUSxFQUFFLEtBREo7QUFFTkMsWUFBUSxFQUFFLEVBRkosRUFEcUI7O0FBSzVCQyxXQUFTLEVBQUU7QUFDVkMsU0FEVSxpQkFDSkosS0FESSxFQUNHRSxRQURILEVBQ2E7QUFDdEJGLFdBQUssQ0FBQ0UsUUFBTixHQUFpQkEsUUFBUSxJQUFJLEtBQTdCO0FBQ0FGLFdBQUssQ0FBQ0MsUUFBTixHQUFpQixJQUFqQjtBQUNBLEtBSlM7QUFLVkksVUFMVSxrQkFLSEwsS0FMRyxFQUtJO0FBQ2JBLFdBQUssQ0FBQ0UsUUFBTixHQUFpQixFQUFqQjtBQUNBRixXQUFLLENBQUNDLFFBQU4sR0FBaUIsS0FBakI7QUFDQSxLQVJTLEVBTGlCLEVBQWYsQ0FBZCxDOzs7O0FBaUJlSCxLIiwiZmlsZSI6IjY0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnXHJcblxyXG5WdWUudXNlKFZ1ZXgpXHJcblxyXG5jb25zdCBzdG9yZSA9IG5ldyBWdWV4LlN0b3JlKHtcclxuXHRzdGF0ZToge1xyXG5cdFx0aGFzTG9naW46IGZhbHNlLFxyXG5cdFx0dXNlck5hbWU6IFwiXCJcclxuXHR9LFxyXG5cdG11dGF0aW9uczoge1xyXG5cdFx0bG9naW4oc3RhdGUsIHVzZXJOYW1lKSB7XHJcblx0XHRcdHN0YXRlLnVzZXJOYW1lID0gdXNlck5hbWUgfHwgJ+aWsOeUqOaItyc7XHJcblx0XHRcdHN0YXRlLmhhc0xvZ2luID0gdHJ1ZTtcclxuXHRcdH0sXHJcblx0XHRsb2dvdXQoc3RhdGUpIHtcclxuXHRcdFx0c3RhdGUudXNlck5hbWUgPSBcIlwiO1xyXG5cdFx0XHRzdGF0ZS5oYXNMb2dpbiA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///64\n");

/***/ }),
/* 65 */
/*!***********************************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/common/vmeitime-http/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = exports.uploadFile = exports.getEmployList = exports.getSave = exports.getMaterialList = exports.getScBbatchList = exports.queryPlanNum = exports.onlogin = void 0;var _interface = _interopRequireDefault(__webpack_require__(/*! ./interface */ 66));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\n/**\r\n                                                                                                                                                                                                                                                                                                                                                                                                                               * 将业务所有接口统一起来便于维护\r\n                                                                                                                                                                                                                                                                                                                                                                                                                               * 如果项目很大可以将 url 独立成文件，接口分成不同的模块\r\n                                                                                                                                                                                                                                                                                                                                                                                                                               * \r\n                                                                                                                                                                                                                                                                                                                                                                                                                               */\n\n// http.config.baseUrl = \"http://f36f167110.zicp.vip/lzy\";\n\n\nvar onlogin = function onlogin(ip, account, password) {\n  return _interface.default.request({\n    url: \"\".concat(ip, \"/security/admin/enterpriseLoginForApp\"),\n    method: \"POST\",\n    data: {\n      account: account,\n      captcha: \"\",\n      enterpriseCode: \"221553450\",\n      language: \"zh\",\n      password: password } });\n\n\n};exports.onlogin = onlogin;\n\nvar checkLogin = function checkLogin() {\n  _interface.default.interceptor.response = function (response) {\n    if (response.data.code == 10104) {\n      uni.showToast({\n        icon: \"none\",\n        title: response.data.message,\n        success: function success() {\n          uni.reLaunch({\n            url: \"../../pages/login/login\" });\n\n        } });\n\n\n    }\n    return response;\n  };\n};\n\nvar queryPlanNum = function queryPlanNum(ip) {\n  checkLogin();\n  return _interface.default.request({\n    url: \"\".concat(ip, \"/sc/scplanQR/queryListForScPlan\"),\n    method: \"POST\",\n    data: {\n      scPlanNo: \"\" } });\n\n\n};exports.queryPlanNum = queryPlanNum;\n\nvar getScBbatchList = function getScBbatchList(ip, num) {\n  checkLogin();\n  return _interface.default.request({\n    url: \"\".concat(ip, \"/sc/scplanQR/queryScBatchFByScPlanNo\"),\n    method: \"POST\",\n    data: {\n      scPlanNo: num } });\n\n\n};exports.getScBbatchList = getScBbatchList;\n\nvar getMaterialList = function getMaterialList(ip, num) {\n  checkLogin();\n  return _interface.default.request({\n    url: \"\".concat(ip, \"/sc/scplanQR/queryMaterialByBatchF\"),\n    method: \"POST\",\n    data: {\n      scBbatchF: num } });\n\n\n};exports.getMaterialList = getMaterialList;\n\nvar getSave = function getSave(ip, data) {\n  checkLogin();\n  return _interface.default.request({\n    url: \"\".concat(ip, \"/sc/scplanQR/add\"),\n    method: \"POST\",\n    data: data });\n\n};exports.getSave = getSave;\n\nvar getEmployList = function getEmployList(ip) {\n  checkLogin();\n  return _interface.default.request({\n    url: \"\".concat(ip, \"/sc/scplanQR/queryEmployList\"),\n    method: \"POST\" });\n\n};exports.getEmployList = getEmployList;\n\nvar uploadFile = function uploadFile(ip, file) {\n  checkLogin();\n  return new Promise(function (reject) {\n    uni.uploadFile({\n      url: \"\".concat(ip, \"/sc/scplanQR/uploadFile\"), // 后端api接口\n      filePath: file, // uni.chooseImage函数调用后获取的本地文件路劲\n      name: 'file', //后端通过'file'获取上传的文件对象(字段)\n      header: {\n        \"Content-Type\": \"multipart/form-data\" },\n\n      success: function success(res) {\n        res.data = JSON.parse(res.data);\n        reject(res);\n      } });\n\n  });\n};\n\n\n// 默认全部导出  import api from '@/common/vmeitime-http/'\nexports.uploadFile = uploadFile;var _default = {\n  onlogin: onlogin,\n  queryPlanNum: queryPlanNum,\n  getScBbatchList: getScBbatchList,\n  getMaterialList: getMaterialList,\n  uploadFile: uploadFile,\n  getEmployList: getEmployList,\n  getSave: getSave };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL3ZtZWl0aW1lLWh0dHAvaW5kZXguanMiXSwibmFtZXMiOlsib25sb2dpbiIsImlwIiwiYWNjb3VudCIsInBhc3N3b3JkIiwiaHR0cCIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwiY2FwdGNoYSIsImVudGVycHJpc2VDb2RlIiwibGFuZ3VhZ2UiLCJjaGVja0xvZ2luIiwiaW50ZXJjZXB0b3IiLCJyZXNwb25zZSIsImNvZGUiLCJ1bmkiLCJzaG93VG9hc3QiLCJpY29uIiwidGl0bGUiLCJtZXNzYWdlIiwic3VjY2VzcyIsInJlTGF1bmNoIiwicXVlcnlQbGFuTnVtIiwic2NQbGFuTm8iLCJnZXRTY0JiYXRjaExpc3QiLCJudW0iLCJnZXRNYXRlcmlhbExpc3QiLCJzY0JiYXRjaEYiLCJnZXRTYXZlIiwiZ2V0RW1wbG95TGlzdCIsInVwbG9hZEZpbGUiLCJmaWxlIiwiUHJvbWlzZSIsInJlamVjdCIsImZpbGVQYXRoIiwibmFtZSIsImhlYWRlciIsInJlcyIsIkpTT04iLCJwYXJzZSJdLCJtYXBwaW5ncyI6Im1QQUFBLG9GOztBQUVBOzs7Ozs7QUFNQTs7O0FBR08sSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsRUFBRCxFQUFLQyxPQUFMLEVBQWNDLFFBQWQsRUFBMkI7QUFDakQsU0FBT0MsbUJBQUtDLE9BQUwsQ0FBYTtBQUNuQkMsT0FBRyxZQUFLTCxFQUFMLDBDQURnQjtBQUVuQk0sVUFBTSxFQUFFLE1BRlc7QUFHbkJDLFFBQUksRUFBRTtBQUNMTixhQUFPLEVBQUVBLE9BREo7QUFFTE8sYUFBTyxFQUFFLEVBRko7QUFHTEMsb0JBQWMsRUFBRSxXQUhYO0FBSUxDLGNBQVEsRUFBRSxJQUpMO0FBS0xSLGNBQVEsRUFBRUEsUUFMTCxFQUhhLEVBQWIsQ0FBUDs7O0FBV0EsQ0FaTSxDOztBQWNQLElBQU1TLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDeEJSLHFCQUFLUyxXQUFMLENBQWlC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Qk07OztBQW1CUDsrQ0FDZTtBQUNkdEMsU0FBTyxFQUFQQSxPQURjO0FBRWR1QixjQUFZLEVBQVpBLFlBRmM7QUFHZEUsaUJBQWUsRUFBZkEsZUFIYztBQUlkRSxpQkFBZSxFQUFmQSxlQUpjO0FBS2RJLFlBQVUsRUFBVkEsVUFMYztBQU1kRCxlQUFhLEVBQWJBLGFBTmM7QUFPZEQsU0FBTyxFQUFQQSxPQVBjLEUiLCJmaWxlIjoiNjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaHR0cCBmcm9tICcuL2ludGVyZmFjZSdcclxuXHJcbi8qKlxyXG4gKiDlsIbkuJrliqHmiYDmnInmjqXlj6Pnu5/kuIDotbfmnaXkvr/kuo7nu7TmiqRcclxuICog5aaC5p6c6aG555uu5b6I5aSn5Y+v5Lul5bCGIHVybCDni6znq4vmiJDmlofku7bvvIzmjqXlj6PliIbmiJDkuI3lkIznmoTmqKHlnZdcclxuICogXHJcbiAqL1xyXG5cclxuLy8gaHR0cC5jb25maWcuYmFzZVVybCA9IFwiaHR0cDovL2YzNmYxNjcxMTAuemljcC52aXAvbHp5XCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IG9ubG9naW4gPSAoaXAsIGFjY291bnQsIHBhc3N3b3JkKSA9PiB7XHJcblx0cmV0dXJuIGh0dHAucmVxdWVzdCh7XHJcblx0XHR1cmw6IGAke2lwfS9zZWN1cml0eS9hZG1pbi9lbnRlcnByaXNlTG9naW5Gb3JBcHBgLFxyXG5cdFx0bWV0aG9kOiBcIlBPU1RcIixcclxuXHRcdGRhdGE6IHtcclxuXHRcdFx0YWNjb3VudDogYWNjb3VudCxcclxuXHRcdFx0Y2FwdGNoYTogXCJcIixcclxuXHRcdFx0ZW50ZXJwcmlzZUNvZGU6IFwiMjIxNTUzNDUwXCIsXHJcblx0XHRcdGxhbmd1YWdlOiBcInpoXCIsXHJcblx0XHRcdHBhc3N3b3JkOiBwYXNzd29yZCxcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG5jb25zdCBjaGVja0xvZ2luID0gKCkgPT4ge1xyXG5cdGh0dHAuaW50ZXJjZXB0b3IucmVzcG9uc2UgPSAocmVzcG9uc2UpID0+IHtcclxuXHRcdGlmIChyZXNwb25zZS5kYXRhLmNvZGUgPT0gMTAxMDQpIHtcclxuXHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0aWNvbjpcIm5vbmVcIixcclxuXHRcdFx0XHR0aXRsZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxyXG5cdFx0XHRcdHN1Y2Nlc3M6ICgpID0+IHtcclxuXHRcdFx0XHRcdHVuaS5yZUxhdW5jaCh7XHJcblx0XHRcdFx0XHRcdHVybDogXCIuLi8uLi9wYWdlcy9sb2dpbi9sb2dpblwiXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzcG9uc2U7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHF1ZXJ5UGxhbk51bSA9IChpcCkgPT4ge1xyXG5cdGNoZWNrTG9naW4oKTtcclxuXHRyZXR1cm4gaHR0cC5yZXF1ZXN0KHtcclxuXHRcdHVybDogYCR7aXB9L3NjL3NjcGxhblFSL3F1ZXJ5TGlzdEZvclNjUGxhbmAsXHJcblx0XHRtZXRob2Q6IFwiUE9TVFwiLFxyXG5cdFx0ZGF0YToge1xyXG5cdFx0XHRzY1BsYW5ObzogXCJcIlxyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTY0JiYXRjaExpc3QgPSAoaXAsIG51bSkgPT4ge1xyXG5cdGNoZWNrTG9naW4oKTtcclxuXHRyZXR1cm4gaHR0cC5yZXF1ZXN0KHtcclxuXHRcdHVybDogYCR7aXB9L3NjL3NjcGxhblFSL3F1ZXJ5U2NCYXRjaEZCeVNjUGxhbk5vYCxcclxuXHRcdG1ldGhvZDogXCJQT1NUXCIsXHJcblx0XHRkYXRhOiB7XHJcblx0XHRcdHNjUGxhbk5vOiBudW1cclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TWF0ZXJpYWxMaXN0ID0gKGlwLCBudW0pID0+IHtcclxuXHRjaGVja0xvZ2luKCk7XHJcblx0cmV0dXJuIGh0dHAucmVxdWVzdCh7XHJcblx0XHR1cmw6IGAke2lwfS9zYy9zY3BsYW5RUi9xdWVyeU1hdGVyaWFsQnlCYXRjaEZgLFxyXG5cdFx0bWV0aG9kOiBcIlBPU1RcIixcclxuXHRcdGRhdGE6IHtcclxuXHRcdFx0c2NCYmF0Y2hGOiBudW1cclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2F2ZSA9IChpcCwgZGF0YSkgPT4ge1xyXG5cdGNoZWNrTG9naW4oKTtcclxuXHRyZXR1cm4gaHR0cC5yZXF1ZXN0KHtcclxuXHRcdHVybDogYCR7aXB9L3NjL3NjcGxhblFSL2FkZGAsXHJcblx0XHRtZXRob2Q6IFwiUE9TVFwiLFxyXG5cdFx0ZGF0YTpkYXRhXHJcblx0fSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEVtcGxveUxpc3QgPSAoaXApID0+IHtcclxuXHRjaGVja0xvZ2luKCk7XHJcblx0cmV0dXJuIGh0dHAucmVxdWVzdCh7XHJcblx0XHR1cmw6IGAke2lwfS9zYy9zY3BsYW5RUi9xdWVyeUVtcGxveUxpc3RgLFxyXG5cdFx0bWV0aG9kOiBcIlBPU1RcIlxyXG5cdH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1cGxvYWRGaWxlID0gKGlwLCBmaWxlKSA9PiB7XHJcblx0Y2hlY2tMb2dpbigpO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZWplY3QpPT57XHJcblx0XHR1bmkudXBsb2FkRmlsZSh7XHJcblx0XHRcdHVybDogYCR7aXB9L3NjL3NjcGxhblFSL3VwbG9hZEZpbGVgLCAvLyDlkI7nq69hcGnmjqXlj6NcclxuXHRcdFx0ZmlsZVBhdGg6ZmlsZSwgLy8gdW5pLmNob29zZUltYWdl5Ye95pWw6LCD55So5ZCO6I635Y+W55qE5pys5Zyw5paH5Lu26Lev5YqyXHJcblx0XHRcdG5hbWU6ICdmaWxlJywgLy/lkI7nq6/pgJrov4cnZmlsZSfojrflj5bkuIrkvKDnmoTmlofku7blr7nosaEo5a2X5q61KVxyXG5cdFx0XHRoZWFkZXI6IHtcclxuXHRcdFx0XHRcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0XHRcdHJlcy5kYXRhPSBKU09OLnBhcnNlKHJlcy5kYXRhKTtcdFxyXG5cdFx0XHRcdHJlamVjdChyZXMpXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0pXHJcbn1cclxuXHJcblxyXG4vLyDpu5jorqTlhajpg6jlr7zlh7ogIGltcG9ydCBhcGkgZnJvbSAnQC9jb21tb24vdm1laXRpbWUtaHR0cC8nXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRvbmxvZ2luLFxyXG5cdHF1ZXJ5UGxhbk51bSxcclxuXHRnZXRTY0JiYXRjaExpc3QsXHJcblx0Z2V0TWF0ZXJpYWxMaXN0LFxyXG5cdHVwbG9hZEZpbGUsXHJcblx0Z2V0RW1wbG95TGlzdCxcclxuXHRnZXRTYXZlXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///65\n");

/***/ }),
/* 66 */
/*!***************************************************************************!*\
  !*** D:/application/HbuilderXAPP/hgApp/common/vmeitime-http/interface.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; /**\r\n                                                                                                      * 通用uni-app网络请求\r\n                                                                                                      * 基于 Promise 对象实现更简单的 request 使用方式，支持请求和响应拦截\r\n                                                                                                      */\n\n/*\r\n                                                                                                         // 开放的接口\r\n                                                                                                         import http from './interface'\r\n                                                                                                         \r\n                                                                                                         http.config.baseUrl = \"http://localhost:8080/api/\"\r\n                                                                                                         \r\n                                                                                                         http.request(url:'user/list',method:'GET').then((res)=>{\r\n                                                                                                         \tconsole.log(JSON.stringify(res))\r\n                                                                                                         })\r\n                                                                                                         http.get('user/list').then((res)=>{\r\n                                                                                                         \tconsole.log(JSON.stringify(res))\r\n                                                                                                         })\r\n                                                                                                         http.get('user/list', {status: 1}).then((res)=>{\r\n                                                                                                         \tconsole.log(JSON.stringify(res))\r\n                                                                                                         })\r\n                                                                                                         http.post('user', {id:1, status: 1}).then((res)=>{\r\n                                                                                                         \tconsole.log(JSON.stringify(res))\r\n                                                                                                         })\r\n                                                                                                         http.put('user/1', {status: 2}).then((res)=>{\r\n                                                                                                         \tconsole.log(JSON.stringify(res))\r\n                                                                                                         })\r\n                                                                                                         http.delete('user/1').then((res)=>{\r\n                                                                                                         \tconsole.log(JSON.stringify(res))\r\n                                                                                                         }) \r\n                                                                                                         \r\n                                                                                                         */var _default =\n{\n  config: {\n    baseUrl: \"\",\n    header: {\n      'Content-Type': 'application/json;charset=UTF-8' },\n\n    data: {},\n    method: \"GET\",\n    dataType: \"json\", /* 如设为json，会对返回的数据做一次 JSON.parse */\n    responseType: \"text\",\n    success: function success() {},\n    fail: function fail() {},\n    complete: function complete() {} },\n\n  interceptor: {\n    request: null,\n    response: null },\n\n  request: function request(options) {var _this = this;\n    if (!options) {\n      options = {};\n    }\n    options.baseUrl = options.baseUrl || this.config.baseUrl;\n    options.dataType = options.dataType || this.config.dataType;\n    options.url = options.baseUrl + options.url;\n    options.data = options.data || {};\n    options.method = options.method || this.config.method;\n    //TODO 加密数据\n\n    //TODO 数据签名\n    /* \r\n    _token = {'token': getStorage(STOREKEY_LOGIN).token || 'undefined'},\r\n    _sign = {'sign': sign(JSON.stringify(options.data))}\r\n    options.header = Object.assign({}, options.header, _token,_sign) \r\n    */\n\n    return new Promise(function (resolve, reject) {\n      var _config = null;\n\n      options.complete = function (response) {\n        var statusCode = response.statusCode;\n        response.config = _config;\n        if (true) {\n          if (statusCode === 200) {\n            __f__(\"log\", \"【\" + _config.requestId + \"】 结果：\" + JSON.stringify(response.data), \" at common/vmeitime-http/interface.js:76\");\n          }\n        }\n        if (_this.interceptor.response) {\n          var newResponse = _this.interceptor.response(response);\n          if (newResponse) {\n            response = newResponse;\n          }\n        }\n        // 统一的响应日志记录\n        _reslog(response);\n        if (statusCode === 200) {//成功\n          resolve(response);\n        } else {\n          reject(response);\n        }\n      };\n\n      _config = Object.assign({}, _this.config, options);\n      _config.requestId = new Date().getTime();\n\n      if (_this.interceptor.request) {\n        _this.interceptor.request(_config);\n      }\n\n      // 统一的请求日志记录\n      _reqlog(_config);\n\n      if (true) {\n        __f__(\"log\", \"【\" + _config.requestId + \"】 地址：\" + _config.url, \" at common/vmeitime-http/interface.js:105\");\n        if (_config.data) {\n          __f__(\"log\", \"【\" + _config.requestId + \"】 参数：\" + JSON.stringify(_config.data), \" at common/vmeitime-http/interface.js:107\");\n        }\n      }\n\n      uni.request(_config);\n    });\n  },\n  get: function get(url, data, options) {\n    if (!options) {\n      options = {};\n    }\n    options.url = url;\n    options.data = data;\n    options.method = 'GET';\n    return this.request(options);\n  },\n  post: function post(url, data, options) {\n    if (!options) {\n      options = {};\n    }\n    options.url = url;\n    options.data = data;\n    options.method = 'POST';\n    return this.request(options);\n  },\n  put: function put(url, data, options) {\n    if (!options) {\n      options = {};\n    }\n    options.url = url;\n    options.data = data;\n    options.method = 'PUT';\n    return this.request(options);\n  },\n  delete: function _delete(url, data, options) {\n    if (!options) {\n      options = {};\n    }\n    options.url = url;\n    options.data = data;\n    options.method = 'DELETE';\n    return this.request(options);\n  } };\n\n\n\n/**\r\n        * 请求接口日志记录\r\n        */exports.default = _default;\nfunction _reqlog(req) {\n  if (true) {\n    __f__(\"log\", \"【\" + req.requestId + \"】 地址：\" + req.url, \" at common/vmeitime-http/interface.js:158\");\n    if (req.data) {\n      __f__(\"log\", \"【\" + req.requestId + \"】 请求参数：\" + JSON.stringify(req.data), \" at common/vmeitime-http/interface.js:160\");\n    }\n  }\n  //TODO 调接口异步写入日志数据库\n}\n\n/**\r\n   * 响应接口日志记录\r\n   */\nfunction _reslog(res) {\n  var _statusCode = res.statusCode;\n  if (true) {\n    __f__(\"log\", \"【\" + res.config.requestId + \"】 地址：\" + res.config.url, \" at common/vmeitime-http/interface.js:172\");\n    if (res.config.data) {\n      __f__(\"log\", \"【\" + res.config.requestId + \"】 请求参数：\" + JSON.stringify(res.config.data), \" at common/vmeitime-http/interface.js:174\");\n    }\n    __f__(\"log\", \"【\" + res.config.requestId + \"】 响应结果：\" + JSON.stringify(res), \" at common/vmeitime-http/interface.js:176\");\n  }\n  //TODO 除了接口服务错误外，其他日志调接口异步写入日志数据库\n  switch (_statusCode) {\n    case 200:\n      break;\n    case 401:\n      break;\n    case 404:\n      break;\n    default:\n      break;}\n\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 40)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL3ZtZWl0aW1lLWh0dHAvaW50ZXJmYWNlLmpzIl0sIm5hbWVzIjpbImNvbmZpZyIsImJhc2VVcmwiLCJoZWFkZXIiLCJkYXRhIiwibWV0aG9kIiwiZGF0YVR5cGUiLCJyZXNwb25zZVR5cGUiLCJzdWNjZXNzIiwiZmFpbCIsImNvbXBsZXRlIiwiaW50ZXJjZXB0b3IiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJvcHRpb25zIiwidXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJfY29uZmlnIiwic3RhdHVzQ29kZSIsInByb2Nlc3MiLCJyZXF1ZXN0SWQiLCJKU09OIiwic3RyaW5naWZ5IiwibmV3UmVzcG9uc2UiLCJfcmVzbG9nIiwiT2JqZWN0IiwiYXNzaWduIiwiRGF0ZSIsImdldFRpbWUiLCJfcmVxbG9nIiwidW5pIiwiZ2V0IiwicG9zdCIsInB1dCIsImRlbGV0ZSIsInJlcSIsInJlcyIsIl9zdGF0dXNDb2RlIl0sIm1hcHBpbmdzIjoicUlBQUE7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJlO0FBQ2RBLFFBQU0sRUFBRTtBQUNQQyxXQUFPLEVBQUUsRUFERjtBQUVQQyxVQUFNLEVBQUU7QUFDUCxzQkFBZSxnQ0FEUixFQUZEOztBQUtQQyxRQUFJLEVBQUUsRUFMQztBQU1QQyxVQUFNLEVBQUUsS0FORDtBQU9QQyxZQUFRLEVBQUUsTUFQSCxFQU9ZO0FBQ25CQyxnQkFBWSxFQUFFLE1BUlA7QUFTUEMsV0FUTyxxQkFTRyxDQUFFLENBVEw7QUFVUEMsUUFWTyxrQkFVQSxDQUFFLENBVkY7QUFXUEMsWUFYTyxzQkFXSSxDQUFFLENBWE4sRUFETTs7QUFjZEMsYUFBVyxFQUFFO0FBQ1pDLFdBQU8sRUFBRSxJQURHO0FBRVpDLFlBQVEsRUFBRSxJQUZFLEVBZEM7O0FBa0JkRCxTQWxCYyxtQkFrQk5FLE9BbEJNLEVBa0JHO0FBQ2hCLFFBQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ2JBLGFBQU8s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LCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog6YCa55SodW5pLWFwcOe9kee7nOivt+axglxyXG4gKiDln7rkuo4gUHJvbWlzZSDlr7nosaHlrp7njrDmm7TnroDljZXnmoQgcmVxdWVzdCDkvb/nlKjmlrnlvI/vvIzmlK/mjIHor7fmsYLlkozlk43lupTmi6bmiKpcclxuICovXHJcblxyXG4vKlxyXG4vLyDlvIDmlL7nmoTmjqXlj6NcclxuaW1wb3J0IGh0dHAgZnJvbSAnLi9pbnRlcmZhY2UnXHJcblxyXG5odHRwLmNvbmZpZy5iYXNlVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL1wiXHJcblxyXG5odHRwLnJlcXVlc3QodXJsOid1c2VyL2xpc3QnLG1ldGhvZDonR0VUJykudGhlbigocmVzKT0+e1xyXG5cdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlcykpXHJcbn0pXHJcbmh0dHAuZ2V0KCd1c2VyL2xpc3QnKS50aGVuKChyZXMpPT57XHJcblx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzKSlcclxufSlcclxuaHR0cC5nZXQoJ3VzZXIvbGlzdCcsIHtzdGF0dXM6IDF9KS50aGVuKChyZXMpPT57XHJcblx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzKSlcclxufSlcclxuaHR0cC5wb3N0KCd1c2VyJywge2lkOjEsIHN0YXR1czogMX0pLnRoZW4oKHJlcyk9PntcclxuXHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXMpKVxyXG59KVxyXG5odHRwLnB1dCgndXNlci8xJywge3N0YXR1czogMn0pLnRoZW4oKHJlcyk9PntcclxuXHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXMpKVxyXG59KVxyXG5odHRwLmRlbGV0ZSgndXNlci8xJykudGhlbigocmVzKT0+e1xyXG5cdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlcykpXHJcbn0pIFxyXG5cclxuKi9cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGNvbmZpZzoge1xyXG5cdFx0YmFzZVVybDogXCJcIixcclxuXHRcdGhlYWRlcjoge1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04JyxcclxuXHRcdH0sICBcclxuXHRcdGRhdGE6IHt9LFxyXG5cdFx0bWV0aG9kOiBcIkdFVFwiLFxyXG5cdFx0ZGF0YVR5cGU6IFwianNvblwiLCAgLyog5aaC6K6+5Li6anNvbu+8jOS8muWvuei/lOWbnueahOaVsOaNruWBmuS4gOasoSBKU09OLnBhcnNlICovXHJcblx0XHRyZXNwb25zZVR5cGU6IFwidGV4dFwiLFxyXG5cdFx0c3VjY2VzcygpIHt9LFxyXG5cdFx0ZmFpbCgpIHt9LFxyXG5cdFx0Y29tcGxldGUoKSB7fVxyXG5cdH0sXHJcblx0aW50ZXJjZXB0b3I6IHtcclxuXHRcdHJlcXVlc3Q6IG51bGwsXHJcblx0XHRyZXNwb25zZTogbnVsbFxyXG5cdH0sXHJcblx0cmVxdWVzdChvcHRpb25zKSB7XHJcblx0XHRpZiAoIW9wdGlvbnMpIHtcclxuXHRcdFx0b3B0aW9ucyA9IHt9XHJcblx0XHR9XHJcblx0XHRvcHRpb25zLmJhc2VVcmwgPSBvcHRpb25zLmJhc2VVcmwgfHwgdGhpcy5jb25maWcuYmFzZVVybFxyXG5cdFx0b3B0aW9ucy5kYXRhVHlwZSA9IG9wdGlvbnMuZGF0YVR5cGUgfHwgdGhpcy5jb25maWcuZGF0YVR5cGVcclxuXHRcdG9wdGlvbnMudXJsID0gb3B0aW9ucy5iYXNlVXJsICsgb3B0aW9ucy51cmxcclxuXHRcdG9wdGlvbnMuZGF0YSA9IG9wdGlvbnMuZGF0YSB8fCB7fVxyXG5cdFx0b3B0aW9ucy5tZXRob2QgPSBvcHRpb25zLm1ldGhvZCB8fCB0aGlzLmNvbmZpZy5tZXRob2RcclxuXHRcdC8vVE9ETyDliqDlr4bmlbDmja5cclxuXHRcdFxyXG5cdFx0Ly9UT0RPIOaVsOaNruetvuWQjVxyXG5cdFx0LyogXHJcblx0XHRfdG9rZW4gPSB7J3Rva2VuJzogZ2V0U3RvcmFnZShTVE9SRUtFWV9MT0dJTikudG9rZW4gfHwgJ3VuZGVmaW5lZCd9LFxyXG5cdFx0X3NpZ24gPSB7J3NpZ24nOiBzaWduKEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuZGF0YSkpfVxyXG5cdFx0b3B0aW9ucy5oZWFkZXIgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLmhlYWRlciwgX3Rva2VuLF9zaWduKSBcclxuXHRcdCovXHJcblx0ICAgXHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRsZXQgX2NvbmZpZyA9IG51bGxcclxuXHRcdFx0XHJcblx0XHRcdG9wdGlvbnMuY29tcGxldGUgPSAocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRsZXQgc3RhdHVzQ29kZSA9IHJlc3BvbnNlLnN0YXR1c0NvZGVcclxuXHRcdFx0XHRyZXNwb25zZS5jb25maWcgPSBfY29uZmlnXHJcblx0XHRcdFx0aWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcblx0XHRcdFx0XHRpZiAoc3RhdHVzQ29kZSA9PT0gMjAwKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi44CQXCIgKyBfY29uZmlnLnJlcXVlc3RJZCArIFwi44CRIOe7k+aenO+8mlwiICsgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YSkpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh0aGlzLmludGVyY2VwdG9yLnJlc3BvbnNlKSB7XHJcblx0XHRcdFx0XHRsZXQgbmV3UmVzcG9uc2UgPSB0aGlzLmludGVyY2VwdG9yLnJlc3BvbnNlKHJlc3BvbnNlKVxyXG5cdFx0XHRcdFx0aWYgKG5ld1Jlc3BvbnNlKSB7XHJcblx0XHRcdFx0XHRcdHJlc3BvbnNlID0gbmV3UmVzcG9uc2VcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8g57uf5LiA55qE5ZON5bqU5pel5b+X6K6w5b2VXHJcblx0XHRcdFx0X3Jlc2xvZyhyZXNwb25zZSlcclxuXHRcdFx0XHRpZiAoc3RhdHVzQ29kZSA9PT0gMjAwKSB7IC8v5oiQ5YqfXHJcblx0XHRcdFx0XHRyZXNvbHZlKHJlc3BvbnNlKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmVqZWN0KHJlc3BvbnNlKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0X2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29uZmlnLCBvcHRpb25zKVxyXG5cdFx0XHRfY29uZmlnLnJlcXVlc3RJZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXHJcblxyXG5cdFx0XHRpZiAodGhpcy5pbnRlcmNlcHRvci5yZXF1ZXN0KSB7XHJcblx0XHRcdFx0dGhpcy5pbnRlcmNlcHRvci5yZXF1ZXN0KF9jb25maWcpXHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdC8vIOe7n+S4gOeahOivt+axguaXpeW/l+iusOW9lVxyXG5cdFx0XHRfcmVxbG9nKF9jb25maWcpXHJcblxyXG5cdFx0XHRpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIuOAkFwiICsgX2NvbmZpZy5yZXF1ZXN0SWQgKyBcIuOAkSDlnLDlnYDvvJpcIiArIF9jb25maWcudXJsKVxyXG5cdFx0XHRcdGlmIChfY29uZmlnLmRhdGEpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi44CQXCIgKyBfY29uZmlnLnJlcXVlc3RJZCArIFwi44CRIOWPguaVsO+8mlwiICsgSlNPTi5zdHJpbmdpZnkoX2NvbmZpZy5kYXRhKSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHVuaS5yZXF1ZXN0KF9jb25maWcpO1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHRnZXQodXJsLCBkYXRhLCBvcHRpb25zKSB7XHJcblx0XHRpZiAoIW9wdGlvbnMpIHtcclxuXHRcdFx0b3B0aW9ucyA9IHt9XHJcblx0XHR9XHJcblx0XHRvcHRpb25zLnVybCA9IHVybFxyXG5cdFx0b3B0aW9ucy5kYXRhID0gZGF0YVxyXG5cdFx0b3B0aW9ucy5tZXRob2QgPSAnR0VUJyAgXHJcblx0XHRyZXR1cm4gdGhpcy5yZXF1ZXN0KG9wdGlvbnMpXHJcblx0fSxcclxuXHRwb3N0KHVybCwgZGF0YSwgb3B0aW9ucykge1xyXG5cdFx0aWYgKCFvcHRpb25zKSB7XHJcblx0XHRcdG9wdGlvbnMgPSB7fVxyXG5cdFx0fVxyXG5cdFx0b3B0aW9ucy51cmwgPSB1cmxcclxuXHRcdG9wdGlvbnMuZGF0YSA9IGRhdGFcclxuXHRcdG9wdGlvbnMubWV0aG9kID0gJ1BPU1QnXHJcblx0XHRyZXR1cm4gdGhpcy5yZXF1ZXN0KG9wdGlvbnMpXHJcblx0fSxcclxuXHRwdXQodXJsLCBkYXRhLCBvcHRpb25zKSB7XHJcblx0XHRpZiAoIW9wdGlvbnMpIHtcclxuXHRcdFx0b3B0aW9ucyA9IHt9XHJcblx0XHR9XHJcblx0XHRvcHRpb25zLnVybCA9IHVybFxyXG5cdFx0b3B0aW9ucy5kYXRhID0gZGF0YVxyXG5cdFx0b3B0aW9ucy5tZXRob2QgPSAnUFVUJ1xyXG5cdFx0cmV0dXJuIHRoaXMucmVxdWVzdChvcHRpb25zKVxyXG5cdH0sXHJcblx0ZGVsZXRlKHVybCwgZGF0YSwgb3B0aW9ucykge1xyXG5cdFx0aWYgKCFvcHRpb25zKSB7XHJcblx0XHRcdG9wdGlvbnMgPSB7fVxyXG5cdFx0fVxyXG5cdFx0b3B0aW9ucy51cmwgPSB1cmxcclxuXHRcdG9wdGlvbnMuZGF0YSA9IGRhdGFcclxuXHRcdG9wdGlvbnMubWV0aG9kID0gJ0RFTEVURSdcclxuXHRcdHJldHVybiB0aGlzLnJlcXVlc3Qob3B0aW9ucylcclxuXHR9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICog6K+35rGC5o6l5Y+j5pel5b+X6K6w5b2VXHJcbiAqL1xyXG5mdW5jdGlvbiBfcmVxbG9nKHJlcSkge1xyXG5cdGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG5cdFx0Y29uc29sZS5sb2coXCLjgJBcIiArIHJlcS5yZXF1ZXN0SWQgKyBcIuOAkSDlnLDlnYDvvJpcIiArIHJlcS51cmwpXHJcblx0XHRpZiAocmVxLmRhdGEpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCLjgJBcIiArIHJlcS5yZXF1ZXN0SWQgKyBcIuOAkSDor7fmsYLlj4LmlbDvvJpcIiArIEpTT04uc3RyaW5naWZ5KHJlcS5kYXRhKSlcclxuXHRcdH1cclxuXHR9XHJcblx0Ly9UT0RPIOiwg+aOpeWPo+W8guatpeWGmeWFpeaXpeW/l+aVsOaNruW6k1xyXG59XHJcblxyXG4vKipcclxuICog5ZON5bqU5o6l5Y+j5pel5b+X6K6w5b2VXHJcbiAqL1xyXG5mdW5jdGlvbiBfcmVzbG9nKHJlcykge1xyXG5cdGxldCBfc3RhdHVzQ29kZSA9IHJlcy5zdGF0dXNDb2RlO1xyXG5cdGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG5cdFx0Y29uc29sZS5sb2coXCLjgJBcIiArIHJlcy5jb25maWcucmVxdWVzdElkICsgXCLjgJEg5Zyw5Z2A77yaXCIgKyByZXMuY29uZmlnLnVybClcclxuXHRcdGlmIChyZXMuY29uZmlnLmRhdGEpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCLjgJBcIiArIHJlcy5jb25maWcucmVxdWVzdElkICsgXCLjgJEg6K+35rGC5Y+C5pWw77yaXCIgKyBKU09OLnN0cmluZ2lmeShyZXMuY29uZmlnLmRhdGEpKVxyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5sb2coXCLjgJBcIiArIHJlcy5jb25maWcucmVxdWVzdElkICsgXCLjgJEg5ZON5bqU57uT5p6c77yaXCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKVxyXG5cdH1cclxuXHQvL1RPRE8g6Zmk5LqG5o6l5Y+j5pyN5Yqh6ZSZ6K+v5aSW77yM5YW25LuW5pel5b+X6LCD5o6l5Y+j5byC5q2l5YaZ5YWl5pel5b+X5pWw5o2u5bqTXHJcblx0c3dpdGNoKF9zdGF0dXNDb2RlKXtcclxuXHRcdGNhc2UgMjAwOlxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgNDAxOlxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgNDA0OlxyXG5cdFx0XHRicmVhaztcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///66\n");

/***/ })
],[[0,"app-config"]]]);