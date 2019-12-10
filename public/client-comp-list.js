(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client-comp-list"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/list/pagination.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/list/pagination.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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

/**
 * List Contaner
 * @summary Contains all the events emited by search list (pagination, serachbar, filter)
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ChevronLeftIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["ChevronLeftIcon"],
    ChevronRightIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["ChevronRightIcon"]
  },
  props: {
    currentPage: {
      type: Number,
      "default": 0
    },
    lastPage: {
      type: Number,
      "default": 0
    },
    firstPage: {
      type: Number,
      "default": 0
    }
  },
  watch: {
    currentPage: function currentPage(newData, oldData) {
      this.current = newData;
    },
    lastPage: function lastPage(newData, oldData) {
      this.last = newData;
    },
    firstPage: function firstPage(newData, oldData) {
      this.first = newData;
    }
  },
  data: function data() {
    return {
      last: 0,
      current: 0,
      first: 0
    };
  },
  computed: {
    /**
     * Generate Pagination buttons
     * @description algorithms to create button list
     */
    paginateLinks: function paginateLinks() {
      var last = this.last;
      var current = this.current;
      var first = this.first;
      var range = 5;
      var list = []; //The first range of paginations start from 1 and ends with 
      //a specific a range in a successive manner. If the last page numbebr is 
      //equal to the range, then it becomes the new range

      if (last <= range) {
        range = last;
      } //when the current page is below the last number of the given successive range,
      //create an array of the pages with their respective metadata


      if (current < range) {
        for (var count = 1; count <= range; count++) {
          list.push({
            num: count,
            link: "/?page=" + count,
            current: count == current ? true : false
          });
          continue;
        }

        return list;
      } //When the current page is eqaul to the last number of the given successive range 
      //and also equal to the first page number, create a single array with tha page number's
      //metadata. An instance of this condition is when the current page number is 1 and the total page number is 1


      if (current == range && current == first) {
        list.push({
          num: current,
          link: "/?page=" + current,
          current: true
        });
        return list;
      } //When the current page is greater than the last number of the given successive range,
      //create an array that contains the metadata of the first page number, the previous number,
      //the current page number and the next page number. 


      if (current >= range) {
        var newRange = [first, '...', current - 1, current];
        current < last ? newRange.push(current + 1) : newRange;

        for (var _i = 0, _newRange = newRange; _i < _newRange.length; _i++) {
          var item = _newRange[_i];
          list.push({
            num: item,
            link: "/?page=" + item,
            current: item == current ? true : false
          });
        }

        return list;
      }

      return list;
    },
    disablePrevious: function disablePrevious() {
      return this.current == this.first ? true : false;
    },
    disableNext: function disableNext() {
      return this.current == this.last ? true : false;
    }
  },
  methods: {
    changeCurrentPage: function changeCurrentPage(page) {
      if (typeof page == 'number') {
        this.current = page;
        this.$emit('changeCurrentPage', page);
      }
    },
    nextPage: function nextPage() {
      if (this.current <= this.last) {
        this.current++;
        this.$emit('enterNextPage', this.current);
      }

      return;
    },
    previousPage: function previousPage() {
      if (this.current > 1) {
        this.current--;
        this.$emit('enterPreviousPage', this.current);
      }

      return;
    }
  },
  mounted: function mounted() {
    this.current = this.currentPage;
    this.last = this.lastPage;
    this.first = this.firstPage;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/list/pagination.vue?vue&type=template&id=5f9d506c&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/list/pagination.vue?vue&type=template&id=5f9d506c& ***!
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
  return _c("nav", { staticClass: "mg-t-10 mg-b-10" }, [
    _c(
      "ul",
      { staticClass: "pagination pagination-space justify-content-end mg-b-0" },
      [
        _c(
          "li",
          {
            staticClass: "page-item",
            class: { disabled: _vm.disablePrevious }
          },
          [
            _c(
              "a",
              {
                staticClass: "page-link page-link-icon",
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.previousPage($event)
                  }
                }
              },
              [_c("chevron-left-icon")],
              1
            )
          ]
        ),
        _vm._v(" "),
        _vm._l(_vm.paginateLinks, function(link, index) {
          return _c(
            "li",
            {
              key: index,
              staticClass: "page-item",
              class: { active: link.current }
            },
            [
              _c(
                "a",
                {
                  staticClass: "page-link",
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.changeCurrentPage(link.num)
                    }
                  }
                },
                [_vm._v(_vm._s(link.num))]
              )
            ]
          )
        }),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "page-item", class: { disabled: _vm.disableNext } },
          [
            _c(
              "a",
              {
                staticClass: "page-link page-link-icon",
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.nextPage($event)
                  }
                }
              },
              [_c("chevron-right-icon")],
              1
            )
          ]
        )
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/global/list/pagination.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/global/list/pagination.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pagination_vue_vue_type_template_id_5f9d506c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination.vue?vue&type=template&id=5f9d506c& */ "./resources/js/components/global/list/pagination.vue?vue&type=template&id=5f9d506c&");
/* harmony import */ var _pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination.vue?vue&type=script&lang=js& */ "./resources/js/components/global/list/pagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pagination_vue_vue_type_template_id_5f9d506c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pagination_vue_vue_type_template_id_5f9d506c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/global/list/pagination.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/global/list/pagination.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/global/list/pagination.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pagination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/list/pagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/global/list/pagination.vue?vue&type=template&id=5f9d506c&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/global/list/pagination.vue?vue&type=template&id=5f9d506c& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_template_id_5f9d506c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pagination.vue?vue&type=template&id=5f9d506c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/list/pagination.vue?vue&type=template&id=5f9d506c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_template_id_5f9d506c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_template_id_5f9d506c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);