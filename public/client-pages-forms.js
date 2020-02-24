(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client-pages-forms"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/pages/forms/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/pages/forms/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    FileIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["FileIcon"],
    MailIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["MailIcon"],
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["PlusIcon"],
    ListContainer: function ListContainer() {
      return Promise.all(/*! import() | client-comp-list */[__webpack_require__.e("admin-comp-list"), __webpack_require__.e("client-comp-list")]).then(__webpack_require__.bind(null, /*! ../../../components/global/list/container */ "./resources/js/components/global/list/container.vue"));
    },
    ListItem: function ListItem() {
      return Promise.all(/*! import() | client-comp-list */[__webpack_require__.e("admin-comp-list"), __webpack_require__.e("client-comp-list")]).then(__webpack_require__.bind(null, /*! ../../../components/global/list/list_item */ "./resources/js/components/global/list/list_item.vue"));
    }
  },
  beforeMount: function beforeMount() {
    this.$Progress.start();
  },
  mounted: function mounted() {
    this.$Progress.finish();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/pages/forms/layout.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/pages/forms/layout.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/pages/forms/new_form.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/pages/forms/new_form.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * New form
 * @description New forms are created using their emails and name. After a form is created,
 * a unique UUID is created for that form which is then used to identify that particular form.
 * A confirmation email containing the confirmation is sent to the email of the newly created form
 * The confirmation link is used to activate the form
 * @access This feature only applies to Premium membbers.
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ChevronLeftIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["ChevronLeftIcon"]
  },
  data: function data() {
    return {
      isSuccessfull: false,
      formIsViewable: true
    };
  },
  methods: {
    viewForm: function viewForm() {
      this.isSuccessfull = false;
      this.formIsViewable = true;
    },
    viewSuccessAlert: function viewSuccessAlert() {
      this.isSuccessfull = true;
      this.formIsViewable = false;
    }
  },
  beforeMount: function beforeMount() {
    this.$Progress.start();
  },
  mounted: function mounted() {
    this.$Progress.finish();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/pages/forms/view.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/pages/forms/view.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ChevronLeftIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["ChevronLeftIcon"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/pages/forms/view/messaging.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/pages/forms/view/messaging.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  beforeMount: function beforeMount() {
    this.$Progress.start();
  },
  mounted: function mounted() {
    this.$Progress.finish();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/pages/forms/view/metrics.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/pages/forms/view/metrics.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    MailIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["MailIcon"],
    LayersIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["LayersIcon"],
    ChartCard: function ChartCard() {
      return __webpack_require__.e(/*! import() | client-comp-stats */ "client-comp-stats").then(__webpack_require__.bind(null, /*! ../../../../components/global/stats/chart_card */ "./resources/js/components/global/stats/chart_card.vue"));
    },
    StatCard: function StatCard() {
      return __webpack_require__.e(/*! import() | client-comp-stats */ "client-comp-stats").then(__webpack_require__.bind(null, /*! ../../../../components/global/stats/stat_card__horizontal */ "./resources/js/components/global/stats/stat_card__horizontal.vue"));
    },
    LineChart: function LineChart() {
      return Promise.all(/*! import() | client-comp-charts */[__webpack_require__.e("vendors~client-comp-charts"), __webpack_require__.e("client-comp-charts")]).then(__webpack_require__.bind(null, /*! ../../../../components/global/charts/line */ "./resources/js/components/global/charts/line.vue"));
    }
  },
  data: function data() {
    return {
      dataset: {
        labels: ['2016-12-25', '2016-12-26', '2016-12-27', '2016-12-28', '2016-12-29', '2016-12-30'],
        datasets: [{
          label: '2016-12-25',
          backgroundColor: 'rgba(1,104,250, 0.3)',
          data: [{
            x: '2016-12-25',
            y: 20
          }]
        }, {
          label: '2016-12-26',
          backgroundColor: 'rgba(1,104,250, 0.3)',
          data: [{
            x: '2016-12-26',
            y: 10
          }]
        }, {
          label: '2016-12-27',
          backgroundColor: 'rgba(1,104,250, 0.3)',
          data: [{
            x: '2016-12-27',
            y: 5
          }]
        }, {
          label: '2016-12-28',
          backgroundColor: 'rgba(1,104,250, 0.3)',
          data: [{
            x: '2016-12-28',
            y: 30
          }]
        }, {
          label: '2016-12-29',
          backgroundColor: 'rgba(1,104,250, 0.3)',
          data: [{
            x: '2016-12-29',
            y: 12
          }]
        }, {
          label: '2016-12-30',
          backgroundColor: 'rgba(1,104,250, 0.3)',
          data: [{
            x: '2016-12-30',
            y: 5
          }]
        }, {
          data: [{
            x: '0',
            y: 0
          }]
        }]
      }
    };
  },
  beforeMount: function beforeMount() {
    this.$Progress.start();
  },
  mounted: function mounted() {
    this.$Progress.finish();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/pages/forms/view/setting.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/pages/forms/view/setting.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  beforeMount: function beforeMount() {
    this.$Progress.start();
  },
  mounted: function mounted() {
    this.$Progress.finish();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/pages/forms/view/submissions.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/pages/forms/view/submissions.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    MailIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["MailIcon"],
    CheckIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["CheckIcon"],
    ListContainer: function ListContainer() {
      return Promise.all(/*! import() | client-comp-list */[__webpack_require__.e("admin-comp-list"), __webpack_require__.e("client-comp-list")]).then(__webpack_require__.bind(null, /*! ../../../../components/global/list/container */ "./resources/js/components/global/list/container.vue"));
    },
    ListItem: function ListItem() {
      return Promise.all(/*! import() | client-comp-list */[__webpack_require__.e("admin-comp-list"), __webpack_require__.e("client-comp-list")]).then(__webpack_require__.bind(null, /*! ../../../../components/global/list/list_item */ "./resources/js/components/global/list/list_item.vue"));
    }
  },
  beforeMount: function beforeMount() {
    this.$Progress.start();
  },
  mounted: function mounted() {
    this.$Progress.finish();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/pages/forms/view.vue?vue&type=style&index=0&id=e77dad34&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/pages/forms/view.vue?vue&type=style&index=0&id=e77dad34&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.side-navigation[data-v-e77dad34]{\n}\n.side-navigation ul[data-v-e77dad34]{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    min-width: 100%;\r\n    overflow-x: auto;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    list-style: none;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    margin-bottom: 15px;\n}\n.side-navigation ul li[data-v-e77dad34]{\r\n    display: block;\r\n    margin: 5px 10px;\n}\n.side-navigation ul li[data-v-e77dad34]:first-child{\r\n    margin-left: 0px;\n}\n.side-navigation ul li a[data-v-e77dad34]{\r\n    color: rgb(117, 122, 131);\n}\n.side-navigation ul li a.active[data-v-e77dad34]{\r\n    display: inline-block;\r\n    padding: 5px 10px;\r\n    border-radius: 3px;\r\n    background: rgb(204,225,254);\r\n    color: rgb(1, 104, 248);\n}\n@media(min-width: 768px){\n.side-navigation ul[data-v-e77dad34]{\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n                flex-direction: column;\r\n        overflow-x: hidden;\r\n        -webkit-box-pack: start;\r\n                justify-content: start;\r\n        -webkit-box-align: start;\r\n                align-items: start;\n}\n.side-navigation ul li[data-v-e77dad34]{\r\n        min-width: 50px;\r\n        margin: 5px 0px;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/pages/forms/view.vue?vue&type=style&index=0&id=e77dad34&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/pages/forms/view.vue?vue&type=style&index=0&id=e77dad34&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=style&index=0&id=e77dad34&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/pages/forms/view.vue?vue&type=style&index=0&id=e77dad34&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/pages/forms/index.vue?vue&type=template&id=2c24e0e1&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/pages/forms/index.vue?vue&type=template&id=2c24e0e1& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition-group",
    { attrs: { tag: "div", name: "slide", appear: "" } },
    [
      _c(
        "div",
        {
          key: "header",
          staticClass:
            "d-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30"
        },
        [
          _c("div", [
            _c("nav", { attrs: { "aria-label": "breadcrumb" } }, [
              _c(
                "ol",
                { staticClass: "breadcrumb breadcrumb-style1 mg-b-10" },
                [
                  _c(
                    "li",
                    { staticClass: "breadcrumb-item" },
                    [
                      _c("router-link", { attrs: { to: { path: "/forms" } } }, [
                        _vm._v("Forms")
                      ])
                    ],
                    1
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("h4", { staticClass: "mg-b-0 tx-spacing--1" }, [
              _vm._v("Created Forms")
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            [
              _c(
                "router-link",
                {
                  staticClass:
                    "btn btn-sm pd-x-15 btn-primary btn-uppercase mg-l-5",
                  attrs: { to: { name: "form.new_form" } }
                },
                [
                  _c("plus-icon", { staticClass: "wd-10 mg-r-5" }),
                  _vm._v("\n                Create New Form\n            ")
                ],
                1
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { key: "list" },
        [
          _c(
            "list-container",
            { attrs: { controlIsOpen: true, paginateIsOpen: true } },
            _vm._l(12, function(list, index) {
              return _c(
                "list-item",
                { key: index, attrs: { path: "/forms/view/20" } },
                [
                  _c("div", { staticClass: "wd-80p d-flex" }, [
                    _c("div", { staticClass: "avatar d-sm-block" }, [
                      _c(
                        "span",
                        {
                          staticClass:
                            "avatar-initial rounded-circle op-6 bg-warning"
                        },
                        [_c("file-icon", { staticClass: "wd-16 tx-white" })],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "pd-l-15" }, [
                      _c("h6", [_vm._v("Form 1")]),
                      _vm._v(" "),
                      _c("span", { staticClass: "tx-gray-600" }, [
                        _vm._v("snkeze9@gmail.com")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "wd-30p tx-right" },
                    [
                      _c("mail-icon", { staticClass: "wd-15 tx-gray-600" }),
                      _vm._v(" 14\n                ")
                    ],
                    1
                  )
                ]
              )
            }),
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/pages/forms/layout.vue?vue&type=template&id=42ec192b&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/pages/forms/layout.vue?vue&type=template&id=42ec192b& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_c("router-view")], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/pages/forms/new_form.vue?vue&type=template&id=79be9978&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/pages/forms/new_form.vue?vue&type=template&id=79be9978& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition-group",
    { attrs: { tag: "div", name: "slide", appear: "" } },
    [
      _c(
        "div",
        {
          key: "header",
          staticClass:
            "d-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30"
        },
        [
          _c("div", [
            _c("nav", { attrs: { "aria-label": "breadcrumb" } }, [
              _c(
                "ol",
                { staticClass: "breadcrumb breadcrumb-style1 mg-b-10" },
                [
                  _c(
                    "li",
                    { staticClass: "breadcrumb-item" },
                    [
                      _c(
                        "router-link",
                        { attrs: { to: { name: "form.index" } } },
                        [_vm._v("Forms")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("li", { staticClass: "breadcrumb-item" }, [
                    _c("span", [_vm._v("Create New form")])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "d-flex align-items-center" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: " mg-0 mg-r-10",
                    attrs: { to: { name: "form.index" } }
                  },
                  [_c("chevron-left-icon", { staticClass: "wd-25" })],
                  1
                ),
                _vm._v(" "),
                _c("h4", { staticClass: "mg-b-0 tx-spacing--1" }, [
                  _vm._v("Create New Forms")
                ])
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { key: "form" },
        [
          _c(
            "transition",
            { attrs: { name: "fade", mode: "out-in", tag: "div" } },
            [
              _vm.formIsViewable
                ? _c("div", { staticClass: "mg-t-30" }, [
                    _c(
                      "form",
                      {
                        attrs: { action: "" },
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.viewSuccessAlert($event)
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "form-group row" }, [
                          _c(
                            "label",
                            {
                              staticClass: "col-sm-4 col-form-label",
                              attrs: { for: "form_name" }
                            },
                            [
                              _vm._v("Form Name "),
                              _c("br"),
                              _c("span", { staticClass: "tx-12 tx-gray-400" }, [
                                _vm._v(
                                  " A form name will be created for you if you skip this\n                            field"
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-8" }, [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "email",
                                id: "form_name",
                                placeholder: "Enter form name"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group row" }, [
                          _c(
                            "label",
                            {
                              staticClass: "col-sm-4 col-form-label",
                              attrs: { for: "email" }
                            },
                            [
                              _vm._v("Email "),
                              _c("span", { staticClass: "tx-12 tx-gray-400" }, [
                                _vm._v("(Required)")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-8" }, [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "email",
                                id: "email",
                                placeholder: "Example@gmail.com"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group tx-right" }, [
                          _c(
                            "button",
                            {
                              staticClass:
                                "btn btn-uppercase btn-sm btn-primary",
                              attrs: { type: "submit" }
                            },
                            [_vm._v("Create form")]
                          )
                        ])
                      ]
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.isSuccessfull
                ? _c(
                    "div",
                    {
                      key: "successAlert",
                      staticClass: "mg-t-30 row justify-content-center"
                    },
                    [
                      _c("div", { staticClass: "col-sm-5 col-12" }, [
                        _c(
                          "div",
                          { staticClass: "wd-200 mg-l-auto mg-r-auto mg-b-20" },
                          [
                            _c("img", {
                              staticClass: "wd-100p ht-auto",
                              attrs: {
                                src: "/img/svg/form_success.svg",
                                alt: ""
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "mg-b-20" }, [
                          _c("h3", { staticClass: "tx-center tx-bolder" }, [
                            _vm._v("Awwwesome !!")
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "tx-center" }, [
                            _vm._v(
                              "Your form was successfully created and a confirmation has been sent to your\n                        email.\n                        Please, enter the link in the confirmation mail to activate your form"
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-6" }, [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "btn btn-outline-primary btn-uppercase btn-sm btn-block",
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.viewForm($event)
                                  }
                                }
                              },
                              [_vm._v("Create form")]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-6" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass:
                                    "btn btn-primary btn-uppercase btn-sm btn-block",
                                  attrs: {
                                    to: {
                                      name: "form.view.submission",
                                      params: { id: 20 }
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                            View New Form\n                        "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ])
                      ])
                    ]
                  )
                : _vm._e()
            ]
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/pages/forms/view.vue?vue&type=template&id=e77dad34&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/pages/forms/view.vue?vue&type=template&id=e77dad34&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition-group",
    { staticClass: "row", attrs: { tag: "div", name: "slide", appear: "" } },
    [
      _c(
        "div",
        {
          key: "header",
          staticClass:
            "col-12 d-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30"
        },
        [
          _c("div", [
            _c("nav", { attrs: { "aria-label": "breadcrumb" } }, [
              _c(
                "ol",
                { staticClass: "breadcrumb breadcrumb-style1 mg-b-10" },
                [
                  _c(
                    "li",
                    { staticClass: "breadcrumb-item" },
                    [
                      _c("router-link", { attrs: { to: { path: "/forms" } } }, [
                        _vm._v("Forms")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("li", { staticClass: "breadcrumb-item" }, [
                    _vm._v(
                      "\n                        Form 2173748\n                    "
                    )
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "d-flex align-items-center" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: " mg-0 mg-r-10",
                    attrs: { to: { name: "form.index" } }
                  },
                  [_c("chevron-left-icon", { staticClass: "wd-25" })],
                  1
                ),
                _vm._v(" "),
                _c("h4", { staticClass: "mg-b-0 tx-spacing--1" }, [
                  _vm._v("Form 2173748")
                ])
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { key: "navigation", staticClass: "col-md-3 col-lg-2 col-12" },
        [
          _c("aside", { staticClass: "side-navigation" }, [
            _c(
              "h6",
              {
                staticClass:
                  "tx-gray-400 tx-uppercase tx-12 tx-spacing-2 mg-b-10 d-none d-sm-block"
              },
              [_vm._v("Options")]
            ),
            _vm._v(" "),
            _c("ul", [
              _c(
                "li",
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: {
                          name: "form.view.submission",
                          params: { id: 20 }
                        },
                        "active-class": "active",
                        exact: ""
                      }
                    },
                    [_vm._v("Submissions")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: { name: "form.view.messaging", params: { id: 20 } },
                        "active-class": "active"
                      }
                    },
                    [_vm._v("Messaging")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: { name: "form.view.setting", params: { id: 20 } },
                        "active-class": "active"
                      }
                    },
                    [_vm._v("Settings")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: { name: "form.view.metrics", params: { id: 20 } },
                        "active-class": "active",
                        exact: ""
                      }
                    },
                    [_vm._v("Metrics")]
                  )
                ],
                1
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { key: "body", staticClass: "col-md-9 col-lg-10 col-12" },
        [_c("router-view")],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/pages/forms/view/messaging.vue?vue&type=template&id=35d5991b&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/pages/forms/view/messaging.vue?vue&type=template&id=35d5991b& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition-group",
    { attrs: { tag: "div", name: "zoom", appear: "" } },
    [
      _c("h5", { key: "header", staticClass: "mg-b-20" }, [
        _vm._v("Messaging")
      ]),
      _vm._v(" "),
      _c("form", { key: "body", attrs: { action: "", method: "get" } }, [
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "label",
            {
              staticClass: "col-sm-4 col-form-label",
              attrs: { for: "redirect_link" }
            },
            [
              _vm._v("\n                Redirect link\n                "),
              _c("span", { staticClass: "tx-12 tx-gray-400" }, [
                _vm._v("(Required)")
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "tx-12 tx-gray-400" }, [
                _vm._v(
                  "\n                    Return a resonse email to your client after receiving a submission from him\n                "
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-8" }, [
            _c("input", {
              staticClass: "form-control",
              attrs: {
                type: "text",
                id: "redirect_link",
                placeholder: "http://example.com"
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row justify-content-end" }, [
          _c("div", { staticClass: "col-sm-8 col-12" }, [
            _c("div", { staticClass: "custom-control custom-switch" }, [
              _c("input", {
                staticClass: "custom-control-input",
                attrs: { type: "checkbox", id: "customSwitch1" }
              }),
              _vm._v(" "),
              _c(
                "label",
                {
                  staticClass: "custom-control-label",
                  attrs: { for: "customSwitch1" }
                },
                [
                  _vm._v("Auto-response "),
                  _c("br"),
                  _vm._v(" "),
                  _c("span", { staticClass: "tx-12 tx-gray-400" }, [
                    _vm._v(
                      "Return a resonse email to your client after receiving a submission from him"
                    )
                  ])
                ]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "label",
            {
              staticClass: "col-sm-4 col-form-label",
              attrs: { for: "auto_response_message" }
            },
            [
              _vm._v(
                "\n                Auto-response message\n                "
              ),
              _c("span", { staticClass: "tx-12 tx-gray-400" }, [
                _vm._v("(Required)")
              ]),
              _vm._v(" "),
              _c("br")
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-8" }, [
            _c("textarea", {
              staticClass: "form-control",
              attrs: {
                name: "auto_response_message",
                id: "auto_response_message",
                cols: "30",
                rows: "10"
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group tx-right" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-uppercase btn-sm btn-primary",
              attrs: { type: "submit" }
            },
            [_vm._v("Update Messaging options")]
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/pages/forms/view/metrics.vue?vue&type=template&id=c12301cc&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/pages/forms/view/metrics.vue?vue&type=template&id=c12301cc& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition-group",
    { attrs: { tag: "div", name: "zoom", appear: "" } },
    [
      _c("h5", { key: "header", staticClass: "mg-b-20" }, [_vm._v("Metrics")]),
      _vm._v(" "),
      _c(
        "div",
        { key: "body" },
        [
          _c(
            "stat-card",
            [
              _c(
                "template",
                { slot: "icon" },
                [_c("mail-icon", { staticClass: "wd-16 tx-white" })],
                1
              ),
              _vm._v(" "),
              _c("template", { slot: "card_description" }, [
                _c("h6", [_vm._v("Total Submissions ")]),
                _vm._v(" "),
                _c("span", { staticClass: "tx-gray-600" }, [
                  _vm._v("Total submissions made to this form")
                ])
              ]),
              _vm._v(" "),
              _c("template", { slot: "data" }, [
                _vm._v("\n                3000\n            ")
              ])
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "chart-card",
            [
              _c(
                "template",
                { slot: "icon" },
                [_c("layers-icon", { staticClass: "wd-16 tx-white" })],
                1
              ),
              _vm._v(" "),
              _c("template", { slot: "card-description" }, [
                _c("h6", [_vm._v("Submission Record ")]),
                _vm._v(" "),
                _c("span", { staticClass: "tx-gray-600" }, [
                  _vm._v("Record of unexpired form submissions from "),
                  _c("b", [_vm._v("12/2/2019")]),
                  _vm._v(" to "),
                  _c("b", [_vm._v("13/3/2019")])
                ])
              ]),
              _vm._v(" "),
              _c("template", { slot: "form-input" }, [
                _c("div", { staticClass: "form-group col-6" }, [
                  _c(
                    "label",
                    { staticClass: "form-label", attrs: { for: "From" } },
                    [_vm._v("From")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: { type: "date", id: "from" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group col-6" }, [
                  _c(
                    "label",
                    { staticClass: "form-label", attrs: { for: "To" } },
                    [_vm._v("To")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: { type: "date", id: "To" }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("template", { slot: "numeric_data" }, [
                _c("div", { staticClass: "mg-b-20" }, [
                  _c("span", { staticClass: "tx-40 tx-bold" }, [
                    _vm._v("3000")
                  ]),
                  _c("br"),
                  _c("span", { staticClass: "tx-gray-400" }, [
                    _vm._v("Submissions")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "template",
                { slot: "chart_data" },
                [_c("line-chart", { attrs: { chartData: _vm.dataset } })],
                1
              )
            ],
            2
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/pages/forms/view/setting.vue?vue&type=template&id=02ad83b2&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/pages/forms/view/setting.vue?vue&type=template&id=02ad83b2& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition-group",
    { attrs: { tag: "div", name: "zoom", appear: "" } },
    [
      _c("h5", { key: "header", staticClass: "mg-b-20" }, [_vm._v("Settings")]),
      _vm._v(" "),
      _c("div", { key: "body" }, [
        _c("form", { attrs: { action: "" } }, [
          _c("div", { staticClass: "form-group row" }, [
            _c(
              "label",
              {
                staticClass: "col-sm-4 col-form-label",
                attrs: { for: "form_name" }
              },
              [
                _vm._v("Form Name "),
                _c("span", { staticClass: "tx-12 tx-gray-400" }, [
                  _vm._v("(Required)")
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-8" }, [
              _c("input", {
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  id: "form_name",
                  placeholder: "e.g Contact Form"
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c(
              "label",
              {
                staticClass: "col-sm-4 col-form-label",
                attrs: { for: "email" }
              },
              [
                _vm._v("Email "),
                _c("span", { staticClass: "tx-12 tx-gray-400" }, [
                  _vm._v("(Required)")
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-8" }, [
              _c("input", {
                staticClass: "form-control",
                attrs: {
                  type: "email",
                  id: "email",
                  placeholder: "Example@gmail.com"
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c(
              "label",
              {
                staticClass: "col-sm-4 col-form-label",
                attrs: { for: "domain_name" }
              },
              [
                _vm._v("Domain Name "),
                _c("br"),
                _c("span", { staticClass: "tx-12 tx-gray-400" }, [
                  _vm._v(
                    "\n                            Adding a domain name ensures the form is used only on a particular domain\n                            "
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-8" }, [
              _c("input", {
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  id: "domain_name",
                  placeholder: "http://example.com"
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row justify-content-end" }, [
            _c("div", { staticClass: "col-sm-8 col-12" }, [
              _c("div", { staticClass: "custom-control custom-switch" }, [
                _c("input", {
                  staticClass: "custom-control-input",
                  attrs: { type: "checkbox", id: "customSwitch1" }
                }),
                _vm._v(" "),
                _c(
                  "label",
                  {
                    staticClass: "custom-control-label",
                    attrs: { for: "customSwitch1" }
                  },
                  [
                    _vm._v("Deactivate form "),
                    _c("br"),
                    _vm._v(" "),
                    _c("span", { staticClass: "tx-12 tx-gray-400" }, [
                      _vm._v("Stop this form from recieving submissions")
                    ])
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group tx-right" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-uppercase btn-sm btn-primary",
                attrs: { type: "submit" }
              },
              [_vm._v("Update Form Details")]
            )
          ])
        ]),
        _vm._v(" "),
        _c("hr", { staticClass: "mg-y-25" }),
        _vm._v(" "),
        _c("form", { attrs: { action: "", method: "get" } }, [
          _c("div", [
            _vm._v("\n                    Delete Form "),
            _c("br"),
            _vm._v(" "),
            _c("span", { staticClass: "tx-12 tx-gray-400" }, [
              _vm._v(
                "This action is irreversible. Please be cautious before excuting this \naction"
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "tx-right" }, [
            _c(
              "button",
              { staticClass: "btn btn-outline-danger btn-sm btn-uppercase" },
              [_vm._v("confirm delete")]
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/pages/forms/view/submissions.vue?vue&type=template&id=3cf2a37e&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/pages/forms/view/submissions.vue?vue&type=template&id=3cf2a37e& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition-group",
    { attrs: { tag: "div", name: "zoom", appear: "" } },
    [
      _c("h5", { key: "header" }, [_vm._v("Submission")]),
      _vm._v(" "),
      _c(
        "div",
        { key: "body" },
        [
          _c(
            "list-container",
            { attrs: { controlIsOpen: true, paginateIsOpen: true } },
            _vm._l(12, function(list, index) {
              return _c(
                "list-item",
                { key: index, attrs: { path: "/forms/view/20" } },
                [
                  _c("div", { staticClass: "wd-80p d-flex" }, [
                    _c("div", { staticClass: "avatar d-sm-block" }, [
                      _c(
                        "span",
                        {
                          staticClass:
                            "avatar-initial rounded-circle op-6 bg-success"
                        },
                        [_c("mail-icon", { staticClass: "wd-16 tx-white" })],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "pd-l-15 wd-80p" }, [
                      _c(
                        "h6",
                        {
                          staticStyle: {
                            "white-space": "nowrap",
                            overflow: "hidden",
                            "text-overflow": "ellipsis"
                          }
                        },
                        [
                          _vm._v(
                            "Name : James\n                            Oklahoma, Class: 2084, Email: snkeze@gmail.com "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "tx-gray-600" }, [
                        _vm._v("snkeze9@gmail.com")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "wd-30p tx-right" },
                    [_c("check-icon", { staticClass: "wd-15 tx-gray-600" })],
                    1
                  )
                ]
              )
            }),
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/client/pages/forms/index.vue":
/*!***************************************************!*\
  !*** ./resources/js/client/pages/forms/index.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2c24e0e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2c24e0e1& */ "./resources/js/client/pages/forms/index.vue?vue&type=template&id=2c24e0e1&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/client/pages/forms/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2c24e0e1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2c24e0e1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/pages/forms/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/pages/forms/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/client/pages/forms/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/pages/forms/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/pages/forms/index.vue?vue&type=template&id=2c24e0e1&":
/*!**********************************************************************************!*\
  !*** ./resources/js/client/pages/forms/index.vue?vue&type=template&id=2c24e0e1& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2c24e0e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2c24e0e1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/pages/forms/index.vue?vue&type=template&id=2c24e0e1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2c24e0e1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2c24e0e1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/client/pages/forms/layout.vue":
/*!****************************************************!*\
  !*** ./resources/js/client/pages/forms/layout.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_vue_vue_type_template_id_42ec192b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.vue?vue&type=template&id=42ec192b& */ "./resources/js/client/pages/forms/layout.vue?vue&type=template&id=42ec192b&");
/* harmony import */ var _layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.vue?vue&type=script&lang=js& */ "./resources/js/client/pages/forms/layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _layout_vue_vue_type_template_id_42ec192b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _layout_vue_vue_type_template_id_42ec192b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/pages/forms/layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/pages/forms/layout.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/client/pages/forms/layout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/pages/forms/layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/pages/forms/layout.vue?vue&type=template&id=42ec192b&":
/*!***********************************************************************************!*\
  !*** ./resources/js/client/pages/forms/layout.vue?vue&type=template&id=42ec192b& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_template_id_42ec192b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./layout.vue?vue&type=template&id=42ec192b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/pages/forms/layout.vue?vue&type=template&id=42ec192b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_template_id_42ec192b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_template_id_42ec192b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/client/pages/forms/new_form.vue":
/*!******************************************************!*\
  !*** ./resources/js/client/pages/forms/new_form.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _new_form_vue_vue_type_template_id_79be9978___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new_form.vue?vue&type=template&id=79be9978& */ "./resources/js/client/pages/forms/new_form.vue?vue&type=template&id=79be9978&");
/* harmony import */ var _new_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new_form.vue?vue&type=script&lang=js& */ "./resources/js/client/pages/forms/new_form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _new_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _new_form_vue_vue_type_template_id_79be9978___WEBPACK_IMPORTED_MODULE_0__["render"],
  _new_form_vue_vue_type_template_id_79be9978___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/pages/forms/new_form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/pages/forms/new_form.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/client/pages/forms/new_form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./new_form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/pages/forms/new_form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/pages/forms/new_form.vue?vue&type=template&id=79be9978&":
/*!*************************************************************************************!*\
  !*** ./resources/js/client/pages/forms/new_form.vue?vue&type=template&id=79be9978& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_form_vue_vue_type_template_id_79be9978___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./new_form.vue?vue&type=template&id=79be9978& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/pages/forms/new_form.vue?vue&type=template&id=79be9978&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_form_vue_vue_type_template_id_79be9978___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_form_vue_vue_type_template_id_79be9978___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/client/pages/forms/view.vue":
/*!**************************************************!*\
  !*** ./resources/js/client/pages/forms/view.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_vue_vue_type_template_id_e77dad34_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.vue?vue&type=template&id=e77dad34&scoped=true& */ "./resources/js/client/pages/forms/view.vue?vue&type=template&id=e77dad34&scoped=true&");
/* harmony import */ var _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.vue?vue&type=script&lang=js& */ "./resources/js/client/pages/forms/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _view_vue_vue_type_style_index_0_id_e77dad34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.vue?vue&type=style&index=0&id=e77dad34&scoped=true&lang=css& */ "./resources/js/client/pages/forms/view.vue?vue&type=style&index=0&id=e77dad34&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _view_vue_vue_type_template_id_e77dad34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _view_vue_vue_type_template_id_e77dad34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e77dad34",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/pages/forms/view.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/pages/forms/view.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/client/pages/forms/view.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/pages/forms/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/pages/forms/view.vue?vue&type=style&index=0&id=e77dad34&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/client/pages/forms/view.vue?vue&type=style&index=0&id=e77dad34&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_id_e77dad34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=style&index=0&id=e77dad34&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/pages/forms/view.vue?vue&type=style&index=0&id=e77dad34&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_id_e77dad34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_id_e77dad34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_id_e77dad34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_id_e77dad34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_id_e77dad34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/client/pages/forms/view.vue?vue&type=template&id=e77dad34&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/client/pages/forms/view.vue?vue&type=template&id=e77dad34&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_e77dad34_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=template&id=e77dad34&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/pages/forms/view.vue?vue&type=template&id=e77dad34&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_e77dad34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_e77dad34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/client/pages/forms/view/messaging.vue":
/*!************************************************************!*\
  !*** ./resources/js/client/pages/forms/view/messaging.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _messaging_vue_vue_type_template_id_35d5991b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messaging.vue?vue&type=template&id=35d5991b& */ "./resources/js/client/pages/forms/view/messaging.vue?vue&type=template&id=35d5991b&");
/* harmony import */ var _messaging_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messaging.vue?vue&type=script&lang=js& */ "./resources/js/client/pages/forms/view/messaging.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _messaging_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _messaging_vue_vue_type_template_id_35d5991b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _messaging_vue_vue_type_template_id_35d5991b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/pages/forms/view/messaging.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/pages/forms/view/messaging.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/client/pages/forms/view/messaging.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_messaging_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./messaging.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/pages/forms/view/messaging.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_messaging_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/pages/forms/view/messaging.vue?vue&type=template&id=35d5991b&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/client/pages/forms/view/messaging.vue?vue&type=template&id=35d5991b& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_messaging_vue_vue_type_template_id_35d5991b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./messaging.vue?vue&type=template&id=35d5991b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/pages/forms/view/messaging.vue?vue&type=template&id=35d5991b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_messaging_vue_vue_type_template_id_35d5991b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_messaging_vue_vue_type_template_id_35d5991b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/client/pages/forms/view/metrics.vue":
/*!**********************************************************!*\
  !*** ./resources/js/client/pages/forms/view/metrics.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _metrics_vue_vue_type_template_id_c12301cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metrics.vue?vue&type=template&id=c12301cc& */ "./resources/js/client/pages/forms/view/metrics.vue?vue&type=template&id=c12301cc&");
/* harmony import */ var _metrics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./metrics.vue?vue&type=script&lang=js& */ "./resources/js/client/pages/forms/view/metrics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _metrics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _metrics_vue_vue_type_template_id_c12301cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _metrics_vue_vue_type_template_id_c12301cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/pages/forms/view/metrics.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/pages/forms/view/metrics.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/client/pages/forms/view/metrics.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_metrics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./metrics.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/pages/forms/view/metrics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_metrics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/pages/forms/view/metrics.vue?vue&type=template&id=c12301cc&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/client/pages/forms/view/metrics.vue?vue&type=template&id=c12301cc& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_metrics_vue_vue_type_template_id_c12301cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./metrics.vue?vue&type=template&id=c12301cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/pages/forms/view/metrics.vue?vue&type=template&id=c12301cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_metrics_vue_vue_type_template_id_c12301cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_metrics_vue_vue_type_template_id_c12301cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/client/pages/forms/view/setting.vue":
/*!**********************************************************!*\
  !*** ./resources/js/client/pages/forms/view/setting.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setting_vue_vue_type_template_id_02ad83b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting.vue?vue&type=template&id=02ad83b2& */ "./resources/js/client/pages/forms/view/setting.vue?vue&type=template&id=02ad83b2&");
/* harmony import */ var _setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting.vue?vue&type=script&lang=js& */ "./resources/js/client/pages/forms/view/setting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _setting_vue_vue_type_template_id_02ad83b2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _setting_vue_vue_type_template_id_02ad83b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/pages/forms/view/setting.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/pages/forms/view/setting.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/client/pages/forms/view/setting.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./setting.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/pages/forms/view/setting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/pages/forms/view/setting.vue?vue&type=template&id=02ad83b2&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/client/pages/forms/view/setting.vue?vue&type=template&id=02ad83b2& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_02ad83b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./setting.vue?vue&type=template&id=02ad83b2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/pages/forms/view/setting.vue?vue&type=template&id=02ad83b2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_02ad83b2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_02ad83b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/client/pages/forms/view/submissions.vue":
/*!**************************************************************!*\
  !*** ./resources/js/client/pages/forms/view/submissions.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _submissions_vue_vue_type_template_id_3cf2a37e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submissions.vue?vue&type=template&id=3cf2a37e& */ "./resources/js/client/pages/forms/view/submissions.vue?vue&type=template&id=3cf2a37e&");
/* harmony import */ var _submissions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submissions.vue?vue&type=script&lang=js& */ "./resources/js/client/pages/forms/view/submissions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _submissions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _submissions_vue_vue_type_template_id_3cf2a37e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _submissions_vue_vue_type_template_id_3cf2a37e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/pages/forms/view/submissions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/pages/forms/view/submissions.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/client/pages/forms/view/submissions.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_submissions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./submissions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/pages/forms/view/submissions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_submissions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/pages/forms/view/submissions.vue?vue&type=template&id=3cf2a37e&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/client/pages/forms/view/submissions.vue?vue&type=template&id=3cf2a37e& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_submissions_vue_vue_type_template_id_3cf2a37e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./submissions.vue?vue&type=template&id=3cf2a37e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/pages/forms/view/submissions.vue?vue&type=template&id=3cf2a37e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_submissions_vue_vue_type_template_id_3cf2a37e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_submissions_vue_vue_type_template_id_3cf2a37e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);