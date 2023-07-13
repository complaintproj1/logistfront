(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+Kwz":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/cards/card-line-chart/card-line-chart.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: CardLineChartComponent */

    /***/
    function Kwz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardLineChartComponent", function () {
        return CardLineChartComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_card_line_chart_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./card-line-chart.component.html */
      "lLla");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! chart.js */
      "MO+k");
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);

      var CardLineChartComponent = /*#__PURE__*/function () {
        function CardLineChartComponent() {
          _classCallCheck(this, CardLineChartComponent);
        }

        _createClass(CardLineChartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var config = {
              type: "line",
              data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                  label: new Date().getFullYear(),
                  backgroundColor: "#4c51bf",
                  borderColor: "#4c51bf",
                  data: [65, 78, 66, 44, 56, 67, 75],
                  fill: false
                }, {
                  label: new Date().getFullYear() - 1,
                  fill: false,
                  backgroundColor: "#fff",
                  borderColor: "#fff",
                  data: [40, 68, 86, 74, 56, 60, 87]
                }]
              },
              options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                  display: false,
                  text: "Sales Charts",
                  fontColor: "white"
                },
                legend: {
                  labels: {
                    fontColor: "white"
                  },
                  align: "end",
                  position: "bottom"
                },
                tooltips: {
                  mode: "index",
                  intersect: false
                },
                hover: {
                  mode: "nearest",
                  intersect: true
                },
                scales: {
                  xAxes: [{
                    ticks: {
                      fontColor: "rgba(255,255,255,.7)"
                    },
                    display: true,
                    scaleLabel: {
                      display: false,
                      labelString: "Month",
                      fontColor: "white"
                    },
                    gridLines: {
                      display: false,
                      borderDash: [2],
                      borderDashOffset: [2],
                      color: "rgba(33, 37, 41, 0.3)",
                      zeroLineColor: "rgba(0, 0, 0, 0)",
                      zeroLineBorderDash: [2],
                      zeroLineBorderDashOffset: [2]
                    }
                  }],
                  yAxes: [{
                    ticks: {
                      fontColor: "rgba(255,255,255,.7)"
                    },
                    display: true,
                    scaleLabel: {
                      display: false,
                      labelString: "Value",
                      fontColor: "white"
                    },
                    gridLines: {
                      borderDash: [3],
                      borderDashOffset: [3],
                      drawBorder: false,
                      color: "rgba(255, 255, 255, 0.15)",
                      zeroLineColor: "rgba(33, 37, 41, 0)",
                      zeroLineBorderDash: [2],
                      zeroLineBorderDashOffset: [2]
                    }
                  }]
                }
              }
            };
            var ctx = document.getElementById("line-chart");
            ctx = ctx.getContext("2d");
            new chart_js__WEBPACK_IMPORTED_MODULE_3___default.a(ctx, config);
          }
        }]);

        return CardLineChartComponent;
      }();

      CardLineChartComponent.ctorParameters = function () {
        return [];
      };

      CardLineChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-line-chart",
        template: _raw_loader_card_line_chart_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], CardLineChartComponent);
      /***/
    },

    /***/
    "+pgL":
    /*!************************************************************!*\
      !*** ./src/app/views/landing/courier/courier.component.ts ***!
      \************************************************************/

    /*! exports provided: CourierComponent */

    /***/
    function pgL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourierComponent", function () {
        return CourierComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_courier_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./courier.component.html */
      "LnYT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CourierComponent = /*#__PURE__*/function () {
        function CourierComponent() {
          _classCallCheck(this, CourierComponent);
        }

        _createClass(CourierComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CourierComponent;
      }();

      CourierComponent.ctorParameters = function () {
        return [];
      };

      CourierComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-courier',
        template: _raw_loader_courier_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], CourierComponent);
      /***/
    },

    /***/
    "/GnJ":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-bar-chart/card-bar-chart.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function GnJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div\n  class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\"\n>\n  <div class=\"rounded-t mb-0 px-4 py-3 bg-transparent\">\n    <div class=\"flex flex-wrap items-center\">\n      <div class=\"relative w-full max-w-full flex-grow flex-1\">\n        <h6 class=\"uppercase text-blueGray-400 mb-1 text-xs font-semibold\">\n          Performance\n        </h6>\n        <h2 class=\"text-blueGray-700 text-xl font-semibold\">Total orders</h2>\n      </div>\n    </div>\n  </div>\n  <div class=\"p-4 flex-auto\">\n    <!-- Chart -->\n    <div class=\"relative\" style=\"height: 350px\">\n      <canvas id=\"bar-chart\"></canvas>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "/kjZ":
    /*!*****************************************************!*\
      !*** ./src/app/views/auth/login/login.component.ts ***!
      \*****************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function kjZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "LUN3");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(router, http) {
          _classCallCheck(this, LoginComponent);

          this.router = router;
          this.http = http;
          this.name = "";
          this.address = "";
          this.phone = 0;
        }

        _createClass(LoginComponent, [{
          key: "register",
          value: function register() {
            var _this = this;

            var bodyData = {
              "name": this.name,
              "email": this.address,
              "password": this.phone
            };
            this.http.post("https://logistwork.onrender.com/user/create", bodyData, {
              responseType: 'text'
            }).subscribe(function (resultData) {
              console.log(resultData);
              alert("Registered Successfully");
              _this.name = '';
              _this.address = '';
              _this.phone = 0;

              _this.router.navigate(['/profile']);
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], LoginComponent);
      /***/
    },

    /***/
    "/ztn":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin/admin.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function ztn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div>\n  <app-sidebar></app-sidebar>\n  <div class=\"relative md:ml-64 bg-blueGray-100\">\n    <app-admin-navbar></app-admin-navbar>\n    <app-header-stats></app-header-stats>\n    <div class=\"px-4 md:px-10 mx-auto w-full -m-24\">\n      <router-outlet></router-outlet>\n      <app-footer-admin></app-footer-admin>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\SUSAKGJYO INTERN\notus-angular-main\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0slC":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/dropdowns/user-dropdown/user-dropdown.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: UserDropdownComponent */

    /***/
    function slC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDropdownComponent", function () {
        return UserDropdownComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-dropdown.component.html */
      "H3xT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _popperjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @popperjs/core */
      "EjV/");

      var UserDropdownComponent = /*#__PURE__*/function () {
        function UserDropdownComponent() {
          _classCallCheck(this, UserDropdownComponent);

          this.dropdownPopoverShow = false;
        }

        _createClass(UserDropdownComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_3__["createPopper"])(this.btnDropdownRef.nativeElement, this.popoverDropdownRef.nativeElement, {
              placement: "bottom-start"
            });
          }
        }, {
          key: "toggleDropdown",
          value: function toggleDropdown(event) {
            event.preventDefault();

            if (this.dropdownPopoverShow) {
              this.dropdownPopoverShow = false;
            } else {
              this.dropdownPopoverShow = true;
            }
          }
        }]);

        return UserDropdownComponent;
      }();

      UserDropdownComponent.propDecorators = {
        btnDropdownRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["btnDropdownRef", {
            "static": false
          }]
        }],
        popoverDropdownRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["popoverDropdownRef", {
            "static": false
          }]
        }]
      };
      UserDropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-user-dropdown",
        template: _raw_loader_user_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], UserDropdownComponent);
      /***/
    },

    /***/
    "165v":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/maps/maps.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"flex flex-wrap\">\n  <div class=\"w-full px-4\">\n    <div\n      class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\"\n    >\n      <app-map-example></app-map-example>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "1DoU":
    /*!***************************************************************!*\
      !*** ./src/app/components/footers/footer/footer.component.ts ***!
      \***************************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function DoU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./footer.component.html */
      "CzbP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);

          this.date = new Date().getFullYear();
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ctorParameters = function () {
        return [];
      };

      FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-footer",
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], FooterComponent);
      /***/
    },

    /***/
    "3IhM":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/cards/card-page-visits/card-page-visits.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: CardPageVisitsComponent */

    /***/
    function IhM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardPageVisitsComponent", function () {
        return CardPageVisitsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_card_page_visits_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./card-page-visits.component.html */
      "L/HX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CardPageVisitsComponent = /*#__PURE__*/function () {
        function CardPageVisitsComponent() {
          _classCallCheck(this, CardPageVisitsComponent);
        }

        _createClass(CardPageVisitsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CardPageVisitsComponent;
      }();

      CardPageVisitsComponent.ctorParameters = function () {
        return [];
      };

      CardPageVisitsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-page-visits",
        template: _raw_loader_card_page_visits_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], CardPageVisitsComponent);
      /***/
    },

    /***/
    "4b2p":
    /*!***************************************************************************!*\
      !*** ./src/app/components/navbars/index-navbar/index-navbar.component.ts ***!
      \***************************************************************************/

    /*! exports provided: IndexNavbarComponent */

    /***/
    function b2p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndexNavbarComponent", function () {
        return IndexNavbarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_index_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./index-navbar.component.html */
      "RORk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var IndexNavbarComponent = /*#__PURE__*/function () {
        function IndexNavbarComponent() {
          _classCallCheck(this, IndexNavbarComponent);

          this.navbarOpen = false;
        }

        _createClass(IndexNavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "setNavbarOpen",
          value: function setNavbarOpen() {
            this.navbarOpen = !this.navbarOpen;
          }
        }]);

        return IndexNavbarComponent;
      }();

      IndexNavbarComponent.ctorParameters = function () {
        return [];
      };

      IndexNavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-index-navbar",
        template: _raw_loader_index_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], IndexNavbarComponent);
      /***/
    },

    /***/
    "5vqZ":
    /*!**************************************************************!*\
      !*** ./src/app/views/landing/flipbike/flipbike.component.ts ***!
      \**************************************************************/

    /*! exports provided: FlipbikeComponent */

    /***/
    function vqZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlipbikeComponent", function () {
        return FlipbikeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_flipbike_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./flipbike.component.html */
      "x0DV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FlipbikeComponent = /*#__PURE__*/function () {
        function FlipbikeComponent() {
          _classCallCheck(this, FlipbikeComponent);
        }

        _createClass(FlipbikeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FlipbikeComponent;
      }();

      FlipbikeComponent.ctorParameters = function () {
        return [];
      };

      FlipbikeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-flipbike',
        template: _raw_loader_flipbike_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], FlipbikeComponent);
      /***/
    },

    /***/
    "8GP7":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/profile/profile.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function GP7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-auth-navbar></app-auth-navbar>\n<main class=\"profile-page\">\n  <section class=\"relative block h-500-px\">\n    <div\n      class=\"absolute top-0 w-full h-full bg-center bg-cover\"\n      style=\"\n        background-image: url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80');\n      \"\n    >\n      <span\n        id=\"blackOverlay\"\n        class=\"w-full h-full absolute opacity-50 bg-black\"\n      ></span>\n    </div>\n    \n    <div\n      class=\"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px\"\n      style=\"transform: translateZ(0)\"\n    >\n      <svg\n        class=\"absolute bottom-0 overflow-hidden\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        preserveAspectRatio=\"none\"\n        version=\"1.1\"\n        viewBox=\"0 0 2560 100\"\n        x=\"0\"\n        y=\"0\"\n      >\n        <polygon\n          class=\"text-blueGray-200 fill-current\"\n          points=\"2560 0 2560 100 0 100\"\n        ></polygon>\n      </svg>\n    </div>\n  </section>\n\n  \n  <section class=\"relative py-16 bg-blueGray-200\">\n    <div class=\"container mx-auto px-4\">\n      <div\n        class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64\"\n      >\n        <div class=\"px-6\">\n          <div class=\"flex flex-wrap justify-center\">\n            <div class=\"w-full lg:w-3/12 px-4 lg:order-2 flex justify-center\">\n              <div class=\"relative\">\n                <img\n                  alt=\"...\"\n                  src=\"assets/img/team-2-800x800.jpg\"\n                  class=\"shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px\"\n                />\n              </div>\n            </div>\n            <div\n              class=\"w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center\"\n            >\n              <div class=\"py-6 px-3 mt-32 sm:mt-0\">\n                <button\n                  class=\"bg-red-600 active:bg-red-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150\"\n                  type=\"button\"\n                >\n                  Connect\n                </button>\n              </div>\n            </div>\n            <div class=\"w-full lg:w-4/12 px-4 lg:order-1\">\n              <div class=\"flex justify-center py-4 lg:pt-4 pt-8\">\n                <div class=\"mr-4 p-3 text-center\">\n                  <span\n                    class=\"text-xl font-bold block uppercase tracking-wide text-blueGray-600\"\n                  >\n                    22\n                  </span>\n                  <span class=\"text-sm text-blueGray-400\">Friends</span>\n                </div>\n                <div class=\"mr-4 p-3 text-center\">\n                  <span\n                    class=\"text-xl font-bold block uppercase tracking-wide text-blueGray-600\"\n                  >\n                    10\n                  </span>\n                  <span class=\"text-sm text-blueGray-400\">Photos</span>\n                </div>\n                <div class=\"lg:mr-4 p-3 text-center\">\n                  <span\n                    class=\"text-xl font-bold block uppercase tracking-wide text-blueGray-600\"\n                  >\n                    89\n                  </span>\n                  <span class=\"text-sm text-blueGray-400\">Comments</span>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"text-center mt-12\">\n            <h3\n              class=\"text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2\"\n            >\n              Jenna Stones\n            </h3>\n            <div\n              class=\"text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase\"\n            >\n              <i\n                class=\"fas fa-map-marker-alt mr-2 text-lg text-blueGray-400\"\n              ></i>\n              Los Angeles, California\n            </div>\n            <div class=\"flex flex-wrap mt-4\">\n              <div class=\"w-full xl:w-8/12 mb-12 xl:mb-0 px-4\">\n                <app-card-page-visits></app-card-page-visits>\n              </div>\n              </div>\n              <div class=\"w-full xl:w-4/12 px-4\">\n                <app-card-social-traffic></app-card-social-traffic>\n              </div>\n              <div style=\" position: relative; \n              top: -350px; left: 400px; border:  1px solid white; width:fit-content;padding:50px;box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); border-radius: 10%; height: 300px; \">\n               <form >\n                <div class=\"form-group\">\n                  <div class=\"rounded-t mb-0 px-4 py-3 border-0\">\n                    <div class=\"flex flex-wrap items-center\">\n                      <div class=\"relative w-full px-4 max-w-full flex-grow flex-1\">\n                        <h3 class=\"font-semibold text-base text-blueGray-700\" style=\"text-align: center; font-size: 23px;\">Trck Consignment</h3>\n                      </div>\n                    </div>\n                  </div>\n                 \n                  \n                  <label>Reference id</label>\n                  <input type=\"text\" [(ngModel)]=\"name\" [ngModelOptions]=\"{standalone: true}\"  class=\"form-control\" id=\"name\" placeholder=\"Enter Name\" style=\"width: 400px;\">\n             \n                </div>\n              \n              <button type=\"submit\" class=\"btn btn-primary mt-4\" (click)=\"register()\" >Submit</button>\n          </form>\n          </div>                 \n            <div class=\"mb-2 text-blueGray-600 mt-10\">\n              <i class=\"fas fa-briefcase mr-2 text-lg text-blueGray-400\"></i>\n              Solution Manager - Creative Tim Officer\n            </div>\n            <div class=\"mb-2 text-blueGray-600\">\n              <i class=\"fas fa-university mr-2 text-lg text-blueGray-400\"></i>\n              University of Computer Science\n            </div>\n          </div>\n          <div class=\"mt-10 py-10 border-t border-blueGray-200 text-center\">\n            <div class=\"flex flex-wrap justify-center\">\n              <div class=\"w-full lg:w-9/12 px-4\">\n                <p class=\"mb-4 text-lg leading-relaxed text-blueGray-700\">\n                  An artist of considerable range, Jenna the name taken by\n                  Melbourne-raised, Brooklyn-based Nick Murphy writes, performs\n                  and records all of his own music, giving it a warm, intimate\n                  feel with a solid groove structure. An artist of considerable\n                  range.\n                </p>\n                <a href=\"javascript:void(0)\" class=\"font-normal text-red-600\">\n                  Show more\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</main>\n<app-footer></app-footer>\n";
      /***/
    },

    /***/
    "90Li":
    /*!************************************************************!*\
      !*** ./src/app/views/admin/settings/settings.component.ts ***!
      \************************************************************/

    /*! exports provided: SettingsComponent */

    /***/
    function Li(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
        return SettingsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_settings_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./settings.component.html */
      "YV8C");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SettingsComponent = /*#__PURE__*/function () {
        function SettingsComponent() {
          _classCallCheck(this, SettingsComponent);
        }

        _createClass(SettingsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SettingsComponent;
      }();

      SettingsComponent.ctorParameters = function () {
        return [];
      };

      SettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-settings",
        template: _raw_loader_settings_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], SettingsComponent);
      /***/
    },

    /***/
    "95+T":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/landing/flipfour/flipfour.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<style>\n   \n\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-section-title__ryt2g {\n    margin: 0;\n    font-weight: 600;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    color: #2d2f34;\n}\n.VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-wrapper__ZntQf .VehicleDetails_best-for__8_39F .VehicleDetails_best-for-title__R14mh {\n    margin: 0 0 0 0.8rem;\n    font-weight: 400;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    color: #2d2f34;\n    text-align: left;\n    width: 100%;\n}\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_modal-title__3rSMj {\n    font-weight: 600;\n    font-size: 2.4rem;\n    line-height: 3.2rem;\n    margin: 0;\n    color: #2d2f34;\n}\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_form-container__deD6R {\n    background: #eef2ff;\n    box-sizing: border-box;\n    width: 42.8rem;\n    position: relative;\n    padding: 4.4rem 4rem 4rem;\n}\n\n    .columnflip:first-child {\n      background-color: #eef;\n    }\n\n    .columnflip:last-child {\n      background-color: #fee;\n    }\n .Footer_footer-container__HntbH {\n    background-color: #000;\n    color: #fff\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC {\n    max-width: 150rem;\n    margin: auto;\n    padding: 4.8rem 0\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC {\n        padding:3.2rem 1.6rem\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 {\n    display: grid;\n    grid-template-columns: repeat(5,1fr);\n    padding: 0 3.6rem 4.8rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 {\n        grid-template-columns:1fr 1fr;\n        padding: 0 0 2.4rem\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_mobile-download__ynS_q {\n    display: none\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_company-info__dJXMm {\n    font-size: 2rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_company-info__dJXMm {\n        display:none\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_company-info__dJXMm .Footer_logo__GVpEx {\n    cursor: pointer\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_company-info__dJXMm .Footer_motto__vpt_I {\n    padding-top: 2.4rem;\n    width: 14rem\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_companies-links__0yil4,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_services-links__95wtA,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_support-links__v9_TZ {\n    display: flex;\n    flex-direction: column\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_companies-links__0yil4 .Footer_title__g0XIB,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_services-links__95wtA .Footer_title__g0XIB,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_support-links__v9_TZ .Footer_title__g0XIB {\n    font-weight: 600;\n    font-size: 1.8rem;\n    line-height: 140%\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_companies-links__0yil4 .Footer_list__r_RMm,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_services-links__95wtA .Footer_list__r_RMm,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_support-links__v9_TZ .Footer_list__r_RMm {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    padding-top: 1.2rem\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_companies-links__0yil4 .Footer_list__r_RMm .Footer_list-item__QPP6R,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_services-links__95wtA .Footer_list__r_RMm .Footer_list-item__QPP6R,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_support-links__v9_TZ .Footer_list__r_RMm .Footer_list-item__QPP6R {\n    font-size: 1.4rem;\n    margin-bottom: .8rem;\n    cursor: pointer;\n    display: block\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_support-links__v9_TZ {\n        display:none\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_download__6e9Km {\n    display: flex;\n    flex-direction: column;\n    gap: 1.6rem;\n    width: 18rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_download__6e9Km {\n        order:-1;\n        display: flex;\n        flex-direction: row;\n        grid-column: 1/span 2;\n        padding-bottom: 2.4rem;\n        width: 100%;\n        gap: 0\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_download-android__whnja,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_download-iOS__3ecym {\n    cursor: pointer\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_download-android__whnja,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_download-iOS__3ecym {\n        flex:1 1;\n        margin-right: 2rem\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv {\n    padding: 0 3.6rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv {\n        padding:0\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_cities-truck-links__2giuy {\n    display: flex;\n    flex-direction: column;\n    padding-bottom: 2.4rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_cities-truck-links__2giuy {\n        padding-bottom:2.4rem\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_cities-truck-links__2giuy .Footer_title__g0XIB {\n    font-weight: 600;\n    font-size: 1.8rem;\n    line-height: 140%\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_cities-truck-links__2giuy .Footer_list__r_RMm {\n    display: grid;\n    grid-template-columns: repeat(5,1fr);\n    grid-row-gap: 1.2rem;\n    padding-top: 1.2rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_cities-truck-links__2giuy .Footer_list__r_RMm {\n        grid-template-columns:repeat(3,1fr)\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_cities-truck-links__2giuy .Footer_list__r_RMm .Footer_list-item__QPP6R {\n    font-size: 1.4rem;\n    position: relative;\n    cursor: pointer\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_support-links__v9_TZ {\n    display: none\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_support-links__v9_TZ {\n        display:block;\n        padding-top: 1.2rem\n    }\n\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_support-links__v9_TZ .Footer_title__g0XIB {\n        display: none\n    }\n\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_support-links__v9_TZ .Footer_list__r_RMm {\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr;\n        align-items: center;\n        width: 100%\n    }\n\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_support-links__v9_TZ .Footer_list__r_RMm .Footer_list-item__QPP6R {\n        color: #bdbdbd;\n        font-size: 1.2rem;\n        padding: .6rem 0\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 2.4rem 3.6rem 0\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 {\n        flex-direction:column;\n        padding: 0;\n        align-items: flex-start\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ {\n        padding:2rem 0\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_fb__tr_T0,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_insta__R9wDV,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_linkedIn__DQwks,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_twitter__2Zp_k,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_yt__GUvsn {\n    content: \"\";\n    background-image: url(https://d10wquj595no85.cloudfront.net/_next/static/media/social_media.62807da0.svg);\n    width: 3.2rem;\n    margin: 0 1.2rem 0 0;\n    height: 3.2rem;\n    background-position: 0;\n    background-size: auto 3.2rem;\n    background-repeat: no-repeat\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_insta__R9wDV {\n    background-position: 0\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_fb__tr_T0 {\n    background-position-x: -4rem\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_linkedIn__DQwks {\n    background-position-x: -8rem\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_twitter__2Zp_k {\n    background-position-x: -12rem\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_yt__GUvsn {\n    background-position-x: -16rem\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_copyright-wrapper__xjE5_ {\n    font-size: 1.4rem;\n    color: #bdbdbd\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_copyright-wrapper__xjE5_ .Footer_copyright__HmTp2 {\n    display: flex;\n    align-items: center\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_copyright-wrapper__xjE5_ .Footer_copyright__HmTp2 {\n        flex-direction:column;\n        align-items: flex-start;\n        font-size: 1.2rem\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_copyright-wrapper__xjE5_ .Footer_copyright__HmTp2 .Footer_info__EWbD8:before {\n    content: \"©\"\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_copyright-wrapper__xjE5_ .Footer_copyright__HmTp2 .Footer_info__EWbD8 {\n        margin-bottom:1rem\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_copyright-wrapper__xjE5_ .Footer_copyright__HmTp2 .Footer_vertical-seperator__imgpZ {\n    background: #bdbdbd;\n    margin: 0 1rem;\n    width: 1px;\n    height: 1.4rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_copyright-wrapper__xjE5_ .Footer_copyright__HmTp2 .Footer_vertical-seperator__imgpZ {\n        display:none\n    }\n}\n\n.MobileMenu_mobile-menu-wrapper__lOrcy {\n    width: 75vw;\n    height: 100vh\n}\n\n.MobileMenu_mobile-menu-wrapper__lOrcy .MobileMenu_mobile-menu-container__dy7Jk {\n    height: 100%;\n    background: #040a1a;\n    z-index: 30\n}\n\n.MobileMenu_mobile-menu-wrapper__lOrcy .MobileMenu_mobile-menu-container__dy7Jk .MobileMenu_close-button__OZs7O {\n    height: -moz-fit-content;\n    height: fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-top: 2rem;\n    padding-right: 3rem;\n    margin-left: auto\n}\n\n.MobileMenu_mobile-menu-wrapper__lOrcy .MobileMenu_mobile-menu-container__dy7Jk .MobileMenu_links-container__b15EE {\n    margin-top: 2.1rem\n}\n\n.MobileMenu_mobile-menu-wrapper__lOrcy .MobileMenu_mobile-menu-container__dy7Jk .MobileMenu_links-container__b15EE .MobileMenu_primary-links__d3xTK,.MobileMenu_mobile-menu-wrapper__lOrcy .MobileMenu_mobile-menu-container__dy7Jk .MobileMenu_links-container__b15EE .MobileMenu_secondary-links__PNWn_ {\n    display: flex;\n    flex-direction: column-reverse\n}\n\n.MobileMenu_mobile-menu-wrapper__lOrcy .MobileMenu_mobile-menu-container__dy7Jk .MobileMenu_links-container__b15EE .MobileMenu_primary-links__d3xTK .MobileMenu_primary-link__Z_tPu,.MobileMenu_mobile-menu-wrapper__lOrcy .MobileMenu_mobile-menu-container__dy7Jk .MobileMenu_links-container__b15EE .MobileMenu_secondary-links__PNWn_ .MobileMenu_secondary-link__wtSWQ {\n    color: #fff;\n    font-weight: 600;\n    font-size: 2rem;\n    line-height: 1.6rem;\n    margin: 2rem 0;\n    text-align: center\n}\n\n.DownloadApp_wrapper__wzCu1 {\n    display: none\n}\n\n@media only screen and (max-width: 1023px) {\n    .DownloadApp_wrapper__wzCu1 {\n        display:unset\n    }\n}\n\n.DownloadApp_wrapper__wzCu1.DownloadApp_hidden__6Wl45 {\n    display: none\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ {\n    display: flex;\n    align-items: center;\n    padding: 1.2rem 1.6rem;\n    background: #f0f3ff\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ .DownloadApp_logo__lxwE0 {\n    display: flex;\n    align-items: center;\n    justify-content: center\n}\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_form-container__deD6R {\n    background: #eef2ff;\n    box-sizing: border-box;\n    width: 42.8rem;\n    position: relative;\n    padding: 4.4rem 4rem 4rem;\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ .DownloadApp_title-subtitle__Fx0R_ {\n    margin-left: 1.2rem\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ .DownloadApp_title-subtitle__Fx0R_ .DownloadApp_title__XuVs_ {\n    font-weight: 600;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    color: #333\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ .DownloadApp_title-subtitle__Fx0R_ .DownloadApp_sub-title__r0fL0 {\n    font-weight: 600;\n    font-size: 12px;\n    line-height: 16px;\n    color: #828282\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ .DownloadApp_download-button__ibtva {\n    margin-left: auto;\n    background-color: #2962ff;\n    padding: .8rem 1.2rem;\n    border-radius: 2.2rem;\n    font-family: inherit;\n    border: none;\n    font-weight: 600;\n    font-size: 1.2rem;\n    line-height: 1.6rem\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ .DownloadApp_download-button__ibtva a {\n    text-decoration: none;\n    color: #fff\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ .DownloadApp_hide-button__mS1s3 {\n    background: none;\n    border: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: .4rem;\n    margin-left: .8rem\n}\n\n.Header_sticky-wrapper__nEs1S {\n    position: sticky;\n    top: 0;\n    width: 100%;\n    z-index: 110\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb {\n    background-color: #040a1a;\n    height: 6.4rem;\n    display: flex;\n    align-items: center\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ {\n    max-width: 150rem;\n    width: 100%;\n    margin-inline:auto;display: flex;\n    align-items: center;\n    justify-content: space-between\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_logo__edXik {\n    display: flex;\n    align-items: center;\n    margin-left: 12rem\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_logo__edXik :hover {\n    cursor: pointer\n}\n\n@media only screen and (max-width: 1023px) {\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_logo__edXik {\n        margin-left:2rem\n    }\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_primary-links-container__0Kzs8 {\n    display: flex;\n    align-items: center;\n    gap: 2.4rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_primary-links-container__0Kzs8 {\n        display:none\n    }\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_primary-links-container__0Kzs8 .Header_primary-link__HgwZ_ {\n    text-decoration: none;\n    color: #fff;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    font-weight: 600;\n    cursor: pointer\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_secondary-links-container__8lyaA {\n    display: flex;\n    align-items: center;\n    margin-right: 12rem;\n    gap: 2.4rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_secondary-links-container__8lyaA {\n        display:none\n    }\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_secondary-links-container__8lyaA .Header_secondary-link__boqSW {\n    text-decoration: none;\n    color: #fff;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    font-weight: 600;\n    cursor: pointer\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_menu-icon__5AGW5 {\n    display: none\n}\n\n@media only screen and (max-width: 1023px) {\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_menu-icon__5AGW5 {\n        display:flex;\n        align-items: center;\n        justify-content: center;\n        margin: 1.6rem\n    }\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_mobile-menu__Ap7DR {\n    display: none\n}\n\n@media only screen and (max-width: 1023px) {\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_mobile-menu__Ap7DR {\n        display:unset;\n        z-index: 110\n    }\n\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_mobile-menu-overlay__x7Tjm {\n        position: fixed;\n        display: block;\n        inset: 0;\n        background-color: rgba(0,0,0,.54)\n    }\n\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_mobile-menu-component__B9xBH {\n        position: fixed;\n        top: 0;\n        right: -75vw;\n        transition: right .1s ease-in-out\n    }\n\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_mobile-menu-component__B9xBH.Header_active__8kMBu {\n        right: 0\n    }\n}\n\n.Explore_explore-container__Xt_dL {\n    box-sizing: border-box;\n    width: 100%;\n    border: .05rem solid #2962ff;\n    border-radius: .8rem;\n    background: #fff;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1.5rem 1.6rem;\n    cursor: pointer\n}\n\n@media only screen and (max-width: 559px) {\n    .Explore_explore-container__Xt_dL {\n        padding:.9rem 1.6rem;\n        background: #eef2ff\n    }\n}\n\n.Explore_explore-container__Xt_dL .Explore_explore-text__cJKgd {\n    font-weight: 600;\n    font-size: 1.2rem;\n    line-height: 1.6rem;\n    color: #2962ff\n}\n\n.Explore_explore-container__Xt_dL .Explore_arrow__XaZgn {\n    display: flex;\n    align-items: center;\n    justify-content: center\n}\n\n.FormInput_container__eKd_P {\n    position: relative\n}\n\n.FormInput_container__eKd_P .FormInput_input-container__Tfl2q {\n    border: .0754808rem solid #ddd;\n    border-radius: .603846rem;\n    background-color: #fff;\n    box-sizing: border-box;\n    padding: 1.2rem 0\n}\n\n@media only screen and (max-width: 559px) {\n    .FormInput_container__eKd_P .FormInput_input-container__Tfl2q {\n        padding:.9rem 0\n    }\n}\n\n.FormInput_container__eKd_P .FormInput_input-container__Tfl2q .FormInput_label-required__A28E4,.FormInput_container__eKd_P .FormInput_input-container__Tfl2q .FormInput_label__rD1_n {\n    font-weight: 600;\n    font-size: 1.2rem;\n    line-height: 1.6rem;\n    color: #333;\n    padding-left: 1.9rem\n}\n\n.FormInput_container__eKd_P .FormInput_input-container__Tfl2q .FormInput_label-required__A28E4.FormInput_error__VpKzj,.FormInput_container__eKd_P .FormInput_input-container__Tfl2q .FormInput_label__rD1_n.FormInput_error__VpKzj {\n    color: #eb5757\n}\n\n@media only screen and (max-width: 559px) {\n    .FormInput_container__eKd_P .FormInput_input-container__Tfl2q .FormInput_label-required__A28E4,.FormInput_container__eKd_P .FormInput_input-container__Tfl2q .FormInput_label__rD1_n {\n        font-size:1rem;\n        line-height: 1.2rem;\n        padding-left: 1.4rem\n    }\n}\n\n.FormInput_container__eKd_P .FormInput_input-container__Tfl2q .FormInput_label-required__A28E4:after {\n    content: \"*\";\n    color: #eb5757;\n    padding-left: .2rem\n}\n\n.FormInput_container__eKd_P .FormInput_error-container__VaXZ9 {\n    position: absolute;\n    font-weight: 600;\n    font-size: 1rem;\n    line-height: 1.6rem;\n    color: #eb5757\n}\n\n.FormInput_submit__icI8k {\n    width: 100%;\n    border-radius: .8rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1.6rem;\n    box-sizing: border-box;\n    border: none\n}\n\n.FormInput_submit-enabled__qOriP {\n    background-color: #2962ff;\n    cursor: pointer\n}\n\n.FormInput_submit-disabled__FNs7m {\n    background-color: rgba(51,51,51,.24)\n}\n\n.FormInput_submit-disabled__FNs7m .FormInput_submit-text__LL1rf,.FormInput_submit-enabled__qOriP .FormInput_submit-text__LL1rf {\n    font-weight: 600;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: #fff;\n    font-family: Titillium Web,sans-serif\n}\n\n.FormInput_submit-disabled__FNs7m .FormInput_submit-arrow-icon__Zz3tC,.FormInput_submit-enabled__qOriP .FormInput_submit-arrow-icon__Zz3tC {\n    display: flex;\n    align-items: center;\n    justify-content: center\n}\n\n.CategorySelector_category-selector-container__AkuP2 {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    justify-content: center;\n    gap: 1.5rem;\n    margin-top: 1rem\n}\n\n@media only screen and (max-width: 559px) {\n    .CategorySelector_category-selector-container__AkuP2 {\n        margin-top:0\n    }\n}\n\n.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1.7rem 3.8rem;\n    box-sizing: border-box;\n    border: .1rem solid rgba(51,51,51,.16);\n    border-radius: .8rem;\n    background: #fff;\n    width: 100%;\n    cursor: pointer\n}\n\n@media only screen and (max-width: 559px) {\n    .CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 {\n        padding:.8rem 1.3rem\n    }\n}\n\n.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14:active,.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14:hover {\n    border-color: #2962ff;\n    transition: border-color .2s ease-in\n}\n\n.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14:active .CategorySelector_arrow-icon-svg__a0c_p,.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14:hover .CategorySelector_arrow-icon-svg__a0c_p {\n    fill: #2962ff;\n    transition: fill .2s ease-in,fill-opacity .2s ease-in;\n    fill-opacity: 1\n}\n\n.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 .CategorySelector_category-image-text__pVzl5 {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    margin-right: 4.6rem\n}\n\n@media only screen and (max-width: 559px) {\n    .CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 .CategorySelector_category-image-text__pVzl5 {\n        margin-right:2rem\n    }\n}\n\n.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 .CategorySelector_category-image-text__pVzl5 .CategorySelector_category-image__zlCOz {\n    display: flex;\n    align-items: center;\n    margin-right: 4.6rem;\n    height: 6rem\n}\n\n@media only screen and (max-width: 559px) {\n    .CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 .CategorySelector_category-image-text__pVzl5 .CategorySelector_category-image__zlCOz {\n        margin-right:-.2rem;\n        transform-origin: center left;\n        scale: 1;\n        height: 5.5rem\n    }\n}\n\n.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 .CategorySelector_category-image-text__pVzl5 .CategorySelector_category-text__cRRzz {\n    font-weight: 600;\n    font-size: 1.8rem;\n    line-height: 2.4rem;\n    color: #333;\n    margin-left: 0\n}\n\n@media only screen and (max-width: 559px) {\n    .CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 .CategorySelector_category-image-text__pVzl5 .CategorySelector_category-text__cRRzz {\n        font-size:1.5rem;\n        line-height: 1.8rem;\n        margin-left: 1rem\n    }\n}\n\n.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 .CategorySelector_arrow-icon__tOM2g {\n    display: flex;\n    align-items: center;\n    transform: rotate(-90deg)\n}\n\n.CategorySelector_change-category-container__Gd9aY {\n    width: 100%;\n    background-color: rgba(47,139,255,.12);\n    border-radius: .8rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1.2rem 1.6rem;\n    box-sizing: border-box\n}\n\n.CategorySelector_change-category-container__Gd9aY .CategorySelector_current-category-text__VzQeO {\n    font-weight: 600;\n    font-size: 1.5rem;\n    line-height: 2.4rem;\n    color: #333\n}\n\n.CategorySelector_change-category-container__Gd9aY .CategorySelector_change-button__a4G8g {\n    all: unset;\n    font-weight: 600;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    color: #2962ff;\n    cursor: pointer\n}\n\n.FareEstimateForms_component-wrapper__pYvyq {\n    height: 100%;\n    display: flex;\n    flex-direction: column\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_change-category__lkhUb {\n    margin-bottom: 1.6rem\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm {\n    display: flex;\n    flex-direction: column;\n    gap: 1.6rem;\n    height: 100%;\n    position: relative\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm input {\n    font-family: inherit;\n    display: block;\n    border: none;\n    outline: none;\n    line-height: 2.4rem;\n    font-size: 1.6rem;\n    text-overflow: ellipsis;\n    width: 100%;\n    background-color: #fff;\n    box-sizing: border-box\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm input::-moz-placeholder {\n    color: rgba(51,51,51,.24);\n    font-family: inherit\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm input:-ms-input-placeholder {\n    color: rgba(51,51,51,.24);\n    font-family: inherit\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm input::placeholder {\n    color: rgba(51,51,51,.24);\n    font-family: inherit\n}\n\n@media only screen and (max-width: 559px) {\n    .FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm input {\n        font-size:1.2rem;\n        line-height: 1.8rem\n    }\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_date-input-wrapper__DTV__,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_drop-input__r3Zzs,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_mobile-input__fOlJd,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_name-input__t8wkI,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_pickup-input__sSniG {\n    padding-inline:1.9rem}\n\n@media only screen and (max-width: 559px) {\n    .FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_date-input-wrapper__DTV__,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_drop-input__r3Zzs,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_mobile-input__fOlJd,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_name-input__t8wkI,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_pickup-input__sSniG {\n        padding-inline:1.4rem\n    }\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_drop-input__r3Zzs.FareEstimateForms_disabled__nZQF8,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_pickup-input__sSniG.FareEstimateForms_disabled__nZQF8 {\n    pointer-events: none\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_drop-input__r3Zzs+div .FareEstimateForms_dropdown-item__Jw9PJ,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_pickup-input__sSniG+div .FareEstimateForms_dropdown-item__Jw9PJ {\n    padding: .9rem 1.9rem;\n    cursor: pointer;\n    font-size: 1.1rem;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    border-bottom: .05rem solid #d3d3d3\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_drop-input__r3Zzs+div .FareEstimateForms_dropdown-item__Jw9PJ:hover,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_pickup-input__sSniG+div .FareEstimateForms_dropdown-item__Jw9PJ:hover {\n    cursor: pointer;\n    background-color: #f3f3f3\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_date-input-wrapper__DTV__ .FareEstimateForms_date-picker__6g5bG {\n    width: 100%\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_date-input-wrapper__DTV__ .FareEstimateForms_date-picker__6g5bG div[class~=MuiInput-underline]:after,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_date-input-wrapper__DTV__ .FareEstimateForms_date-picker__6g5bG div[class~=MuiInput-underline]:before {\n    all: unset\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_date-input-wrapper__DTV__ .FareEstimateForms_date-picker__6g5bG input[class~=MuiInputBase-input] {\n    padding: 0;\n    height: unset\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_submit-container__gnwhh {\n    margin-top: auto\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_form-error-container__j3UdG {\n    position: absolute;\n    bottom: 0;\n    transform: translateY(100%);\n    font-weight: 600;\n    font-size: 1rem;\n    line-height: 1.6rem;\n    color: #eb5757\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ {\n    width: -moz-fit-content;\n    width: fit-content;\n    height: 71.9rem;\n    display: flex;\n    position: relative;\n    overflow: hidden;\n    border-radius: .8rem\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ {\n        width:100%;\n        height: -moz-fit-content;\n        height: fit-content;\n        flex-direction: column;\n        padding: 2.4rem 2.4rem 3.4rem;\n        box-sizing: border-box;\n        background: #f3f3f3;\n        border-radius: .8rem .8rem 0 0\n    }\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z {\n    padding: 5.6rem;\n    background-color: #fff;\n    width: 19.2rem\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z {\n        padding:0;\n        width: -moz-fit-content;\n        width: fit-content;\n        background-color: unset;\n        margin-bottom: 1.5rem\n    }\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_title__qq3il {\n    padding: 0;\n    font-weight: 600;\n    font-size: 4.8rem;\n    line-height: 6.4rem;\n    color: #333;\n    margin: 0 0 2.4rem;\n    display: block\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_title__qq3il {\n        display:none;\n        font-size: 1.8rem;\n        line-height: 2.8rem;\n        margin-bottom: 0\n    }\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_sub-title__w8hD_ {\n    margin: 0;\n    padding: 0;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: rgba(51,51,51,.64);\n    display: block\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_sub-title__w8hD_ {\n        display:none;\n        font-size: 1.4rem;\n        line-height: 2rem\n    }\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_title-mobile__WDoQ2 {\n    padding: 0;\n    font-weight: 600;\n    font-size: 4.8rem;\n    line-height: 6.4rem;\n    color: #333;\n    margin: 0 0 2.4rem;\n    display: none\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_title-mobile__WDoQ2 {\n        display:block;\n        font-size: 1.8rem;\n        line-height: 2.8rem;\n        margin-bottom: 0\n    }\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_sub-title-mobile__884Z6 {\n    margin: 0;\n    padding: 0;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: rgba(51,51,51,.64);\n    display: none\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_sub-title-mobile__884Z6 {\n        display:block;\n        font-size: 1.4rem;\n        line-height: 2rem\n    }\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_form-container__HPjJJ {\n    background: #eef2ff;\n    box-sizing: border-box;\n    width: 49.6rem;\n    position: relative;\n    padding: 6.4rem 4rem 4rem\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_form-container__HPjJJ {\n        background:unset;\n        width: 100%;\n        padding: 0\n    }\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_close-modal-button__l7xB0 {\n    all: unset;\n    cursor: pointer;\n    margin: 2.4rem;\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: flex\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_close-modal-button__l7xB0 {\n        margin:2.2rem 2.4rem\n    }\n}\n\n.LoadingSpinner_loading-wrapper__sfQEW {\n    width: 100%\n}\n\n.LoadingSpinner_loading-wrapper__sfQEW .LoadingSpinner_loading-ellipsis__eXNtX {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n    left: 50%;\n    transform: translateX(-50%)\n}\n\n.LoadingSpinner_loading-wrapper__sfQEW .LoadingSpinner_loading-ellipsis__eXNtX div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: rgba(51,51,51,.64);\n    animation-timing-function: cubic-bezier(0,1,1,0)\n}\n\n.LoadingSpinner_loading-wrapper__sfQEW .LoadingSpinner_loading-ellipsis__eXNtX div:first-child {\n    left: 8px;\n    animation: LoadingSpinner_loading-ellipsis1__Foglf .6s infinite\n}\n\n.LoadingSpinner_loading-wrapper__sfQEW .LoadingSpinner_loading-ellipsis__eXNtX div:nth-child(2) {\n    left: 8px;\n    animation: LoadingSpinner_loading-ellipsis2__AoWKS .6s infinite\n}\n\n.LoadingSpinner_loading-wrapper__sfQEW .LoadingSpinner_loading-ellipsis__eXNtX div:nth-child(3) {\n    left: 32px;\n    animation: LoadingSpinner_loading-ellipsis2__AoWKS .6s infinite\n}\n\n.LoadingSpinner_loading-wrapper__sfQEW .LoadingSpinner_loading-ellipsis__eXNtX div:nth-child(4) {\n    left: 56px;\n    animation: LoadingSpinner_loading-ellipsis3__tjQfc .6s infinite\n}\n\n@keyframes LoadingSpinner_loading-ellipsis1__Foglf {\n    0% {\n        transform: scale(0)\n    }\n\n    to {\n        transform: scale(1)\n    }\n}\n\n@keyframes LoadingSpinner_loading-ellipsis3__tjQfc {\n    0% {\n        transform: scale(1)\n    }\n\n    to {\n        transform: scale(0)\n    }\n}\n\n@keyframes LoadingSpinner_loading-ellipsis2__AoWKS {\n    0% {\n        transform: translate(0)\n    }\n\n    to {\n        transform: translate(24px)\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t {\n    padding: 1rem 0 0;\n    border: unset\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t {\n        padding:.8rem 0 0\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t {\n        border-top:1px solid #f2f2f2;\n        padding: 2rem\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN {\n    width: 100%;\n    margin: 1rem 0 0\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_error-box__VGUa0 div[class~=Mui-error] div[class~=MuiOutlinedInput-notchedOutline] {\n    border-color: #f44336\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_name__160io label {\n    font-size: 1.1rem;\n    transform: translate(1.4rem,1.6rem) scale(1)\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_name__160io label {\n        font-size:.9rem;\n        transform: translate(1.4rem,1.3rem) scale(1)\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_name__160io label {\n        font-size:1.1rem;\n        transform: translate(1.4rem,1.6rem) scale(1)\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_name__160io label[data-shrink=true] {\n    transform: translate(1.4rem,-.3rem) scale(.75)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_name__160io label[class~=Mui-error] {\n    color: rgba(0,0,0,.54)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_name__160io fieldset[class~=MuiOutlinedInput-notchedOutline] {\n    border-color: rgba(0,0,0,.23)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_mobile__B414b label {\n    font-size: 1.1rem;\n    background-color: #fff;\n    padding-right: .6rem;\n    transform: translate(1.4rem,1.6rem) scale(1)\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_mobile__B414b label {\n        font-size:.9rem;\n        transform: translate(1.4rem,1.3rem) scale(1)\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_mobile__B414b label {\n        font-size:1.1rem;\n        transform: translate(1.4rem,1.6rem) scale(1)\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_mobile__B414b label[data-shrink=true] {\n    transform: translate(1.4rem,-.3rem) scale(.75)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_mobile__B414b label[class~=Mui-error] {\n    color: rgba(0,0,0,.54)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_mobile__B414b fieldset[class~=MuiOutlinedInput-notchedOutline] {\n    border-color: rgba(0,0,0,.23)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_mobile__B414b div[class~=text-input-adornment] {\n    display: flex;\n    align-items: center;\n    font-family: Titillium Web;\n    width: 5rem\n}\n\n@media only screen and (min-width: 560px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_city__Wv8ug {\n        width:50%\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_city__Wv8ug label {\n    padding: .3rem .5rem;\n    background-color: #fff;\n    font-size: 1.1rem;\n    transform: translate(1.4rem,1.6rem) scale(1)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_city__Wv8ug label[data-shrink=true] {\n    transform: translate(1.4rem,-.6rem) scale(.75)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_city__Wv8ug div[class~=MuiOutlinedInput-root] {\n    border-radius: 2px;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_city__Wv8ug div[class~=MuiOutlinedInput-root] {\n        height:3.8rem\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_city__Wv8ug div[class~=MuiOutlinedInput-root] {\n        height:4.4rem\n    }\n}\n\n@media only screen and (min-width: 560px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT {\n        margin-left:.6rem;\n        width: 48%\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT label {\n    padding: .3rem .5rem;\n    background-color: #fff;\n    font-size: 1.1rem;\n    transform: translate(1.4rem,1.4rem) scale(1)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT label[data-shrink=true] {\n    transform: translate(1.4rem,-.6rem) scale(.75)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT div[class~=MuiOutlinedInput-root] {\n    border-radius: 2px;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT div[class~=MuiOutlinedInput-root] {\n        height:3.8rem\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT div[class~=MuiOutlinedInput-root] {\n        height:4.4rem\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_info-source__rqLc3 label {\n    padding: .3rem .5rem;\n    background-color: #fff;\n    font-size: 1.1rem;\n    transform: translate(1.4rem,1.4rem) scale(1)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_info-source__rqLc3 label[data-shrink=true] {\n    transform: translate(1.4rem,-.6rem) scale(.75)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_info-source__rqLc3 div[class~=MuiOutlinedInput-root] {\n    border-radius: 2px;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_info-source__rqLc3 div[class~=MuiOutlinedInput-root] {\n        height:3.8rem\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_info-source__rqLc3 div[class~=MuiOutlinedInput-root] {\n        height:4.4rem\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN .PartnersForm_form-input-text__KXgf2 {\n    background: #fff;\n    border-radius: 2px;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN .PartnersForm_form-input-text__KXgf2 {\n        height:3.8rem\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN .PartnersForm_form-input-text__KXgf2 {\n        height:4.4rem\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN div[class~=form-input-select] {\n    width: 100%;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN div[class~=form-input-select] {\n        height:3.8rem\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN div[class~=form-input-select] {\n        height:4.4rem\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t div[class~=form-input] {\n    width: 100%;\n    margin: 0\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t div[class~=input-error-container] {\n    height: 1.5rem;\n    font-size: 1.2rem;\n    font-family: inherit;\n    min-height: 1.2rem;\n    margin-top: .2em;\n    margin-bottom: .2em;\n    font-style: normal;\n    font-weight: 400\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t div[class~=input-error-container] {\n        height:1rem;\n        min-height: 1rem;\n        font-size: 1rem\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t div[class~=input-error-container] {\n        min-height:1.8rem;\n        font-size: 1.2rem;\n        margin: .2rem 0\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t div[class~=input-error-container] div[class~=error] {\n    color: #eb5757;\n    display: flex;\n    align-items: center\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_same-row-fields__BiimE {\n    display: flex\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_same-row-fields__BiimE {\n        flex-direction:column\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t div[class~=form-input-text] {\n    background: #fff;\n    border-radius: 2px;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t div[class~=form-input-text] {\n        height:3.8rem\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t div[class~=form-input-text] {\n        height:4.4rem\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-button__51aip {\n    border: none;\n    border-radius: 2px;\n    background-color: #2962ff!important;\n    color: #fff!important;\n    width: 100%;\n    height: auto;\n    font-size: 1.6rem!important;\n    font-family: inherit;\n    line-height: 100%;\n    padding: 1.6rem 0!important;\n    font-weight: 700;\n    box-shadow: 0 0 2px 0 rgba(0,0,0,.5);\n    margin-top: .8rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-button__51aip {\n        font-size:1.4rem!important;\n        padding: 1.4rem 0!important\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-button__51aip.PartnersForm_request-btn__TmlCY {\n    cursor: pointer\n}\n\n@media only screen and (min-width: 560px) {\n    .PartnersForm_click-handler__7RMSD {\n        margin-left:.6rem;\n        width: 48%\n    }\n\n    .PartnersForm_click-handler__7RMSD .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT {\n        margin-left: 0;\n        width: 100%\n    }\n}\n\n.PartnersForm_click-handler__7RMSD .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT label {\n    padding: .3rem .5rem;\n    background-color: #fff;\n    font-size: 1.1rem;\n    transform: translate(1.4rem,1.4rem) scale(1)\n}\n\n.PartnersForm_click-handler__7RMSD .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT label[data-shrink=true] {\n    transform: translate(1.4rem,-.6rem) scale(.75)\n}\n\n.PartnersForm_click-handler__7RMSD .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT div[class~=MuiOutlinedInput-root] {\n    border-radius: 2px;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_click-handler__7RMSD .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT div[class~=MuiOutlinedInput-root] {\n        height:3.8rem\n    }\n}\n\n.FareEstimateModal_overlay__Un1KE {\n    background-color: rgba(0,0,0,.38);\n    position: fixed;\n    inset: 0;\n    display: flex;\n    overflow: auto\n}\n\n.FareEstimateModal_overlay__Un1KE .FareEstimateModal_modal-container__B7RS9 {\n    padding: 0;\n    margin: auto;\n    width: -moz-fit-content;\n    width: fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    outline: none\n}\n\n@media only screen and (max-width: 559px) {\n    .FareEstimateModal_overlay__Un1KE .FareEstimateModal_modal-container__B7RS9 {\n        width:100%;\n        position: absolute;\n        bottom: 0\n    }\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb {\n    text-align: center;\n    padding: 0;\n    height: -webkit-fill-available;\n    justify-content: space-evenly\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersFormAck_modal-container-ack__DjSZb {\n        padding:2.8rem\n    }\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb.PartnersFormAck_flex-col-align-center__oDp_9 {\n    display: flex;\n    flex-direction: column;\n    align-items: center\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb.PartnersFormAck_flex-col-align-center__oDp_9 .PartnersFormAck_ack__XsSR4 {\n    padding: 2rem\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb.PartnersFormAck_flex-col-align-center__oDp_9 .PartnersFormAck_ack__XsSR4.PartnersFormAck_msg__nEI8N {\n    font-size: 2.4rem\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb.PartnersFormAck_flex-col-align-center__oDp_9 .PartnersFormAck_ack__XsSR4.PartnersFormAck_name__LzZBX {\n    font-size: 2.2rem;\n    font-weight: 700;\n    color: #212121\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb.PartnersFormAck_flex-col-align-center__oDp_9 .PartnersFormAck_ack__XsSR4.PartnersFormAck_desc__x1ojP {\n    font-size: 2rem\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb.PartnersFormAck_flex-col-align-center__oDp_9 .PartnersFormAck_bold-txt-btn__WSzRz {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 2px;\n    box-shadow: 0 0 2px 0 rgba(0,0,0,.5);\n    font-weight: 700;\n    text-decoration: none;\n    cursor: pointer\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb.PartnersFormAck_flex-col-align-center__oDp_9 .PartnersFormAck_bold-txt-btn__WSzRz.PartnersFormAck_request-button__s4gq0 {\n    width: 50%;\n    min-width: 20rem;\n    background: #fff;\n    color: #2962ff;\n    border: 1px solid #2962ff;\n    text-transform: uppercase;\n    font-size: 1.6rem;\n    padding: 1rem;\n    margin: 3rem 0\n}\n\n.VehicleCapacity_vehicle-capacity-container__X1gyj {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    background-color: #ebf4ff;\n    border-radius: .6rem;\n    padding: .2rem .4rem\n}\n\n@media only screen and (max-width: 767px) {\n    .VehicleCapacity_vehicle-capacity-container__X1gyj {\n        border-radius:.4rem\n    }\n}\n\n.VehicleCapacity_vehicle-capacity-container__X1gyj .VehicleCapacity_vehicle-capacity-image-wrapper__TTxaY {\n    margin: auto 0;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center\n}\n\n.VehicleCapacity_vehicle-capacity-container__X1gyj .VehicleCapacity_vehicle-capacity__asClv {\n    font-weight: 600;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: #333;\n    margin: 0 0 0 .3rem\n}\n\n@media only screen and (max-width: 767px) {\n    .VehicleCapacity_vehicle-capacity-container__X1gyj .VehicleCapacity_vehicle-capacity__asClv {\n        font-size:1.4rem;\n        line-height: 2rem;\n        margin: 0 0 0 .1rem\n    }\n}\n\n.AttachVehicleModal_attach-vehicle-modal__XIuW_ {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%,-50%);\n    width: 90%;\n    min-width: 30rem;\n    max-width: 360px;\n    background-color: #fff;\n    box-shadow: 0 24px 38px 0 rgba(0,0,0,.08);\n    border-radius: 2px\n}\n\n.AttachVehicleModal_attach-vehicle-modal__XIuW_:focus {\n    outline: none\n}\n\n.AttachVehicleModal_attach-vehicle-modal__XIuW_ .AttachVehicleModal_modal-container__qv1tQ {\n    position: relative;\n    min-height: 30rem\n}\n\n.AttachVehicleModal_attach-vehicle-modal__XIuW_ .AttachVehicleModal_modal-container__qv1tQ .AttachVehicleModal_attach-form-container__1jRzZ {\n    background-color: #fff\n}\n\n.AttachVehicleModal_attach-vehicle-modal__XIuW_ .AttachVehicleModal_modal-container__qv1tQ .AttachVehicleModal_modal-titlebar__XV_7o {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 16px\n}\n\n.AttachVehicleModal_attach-vehicle-modal__XIuW_ .AttachVehicleModal_modal-container__qv1tQ .AttachVehicleModal_modal-titlebar__XV_7o .AttachVehicleModal_title__sx_6H {\n    font-size: 1.6rem;\n    line-height: 140%\n}\n\n.AttachVehicleModal_attach-vehicle-modal__XIuW_ .AttachVehicleModal_modal-container__qv1tQ .AttachVehicleModal_ack-close-btn__3BxgE {\n    position: absolute;\n    right: 2rem;\n    top: 2rem\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    box-shadow: 0 24px 38px 0 rgba(0,0,0,.08);\n    z-index: 110\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2:focus {\n    outline: none\n}\n\n@media only screen and (min-width: 560px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 {\n        width:auto;\n        top: 55%;\n        bottom: auto;\n        left: 50%;\n        transform: translate(-50%,-55%)\n    }\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc {\n    position: relative;\n    padding: 1.7rem 1rem .5rem;\n    width: 81rem;\n    border-radius: .8rem;\n    background-color: #fff\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc {\n        width:100%;\n        height: 64rem;\n        overflow-y: scroll;\n        padding: 2.4rem;\n        box-sizing: border-box;\n        border-radius: .8rem .8rem 0 0\n    }\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL {\n    margin-inline:auto;margin-bottom: .5rem;\n    text-align: center\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL {\n        position:relative;\n        width: 100%;\n        margin-bottom: 1.6rem;\n        text-align: start\n    }\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL .CitySelectorModal_close-button__9OQAO {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: .5rem;\n    margin-right: 3.7rem;\n    margin-top: 2.9rem;\n    cursor: pointer\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL .CitySelectorModal_close-button__9OQAO {\n        margin:0\n    }\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL .CitySelectorModal_title__tHhus {\n    font-size: 4rem;\n    line-height: 5.6rem;\n    font-weight: 600\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL .CitySelectorModal_title__tHhus {\n        font-size:2rem;\n        line-height: 2.8rem\n    }\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL .CitySelectorModal_sub-title__iGMuh {\n    font-size: 2rem;\n    line-height: 2.8rem;\n    font-weight: 400;\n    color: rgba(51,51,51,.64)\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL .CitySelectorModal_sub-title__iGMuh {\n        font-size:1.4rem;\n        line-height: 2rem\n    }\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container__0xaxG {\n    margin: 1.2rem;\n    padding: 1rem;\n    cursor: pointer;\n    transition: .3s\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container-selected__bthle {\n    border: .2rem solid #006ef5;\n    border-radius: .6rem\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container__0xaxG {\n        margin:0;\n        padding: .6rem .2rem;\n        margin-block:.8rem}\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container__0xaxG .CitySelectorModal_city-image__EiBDS {\n    margin-inline:auto;width: 8rem;\n    height: 8rem;\n    border-radius: .8rem;\n    overflow: hidden;\n    margin-bottom: .8rem\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container__0xaxG .CitySelectorModal_city-image__EiBDS {\n        width:5.6rem;\n        height: 5.6rem;\n        margin-bottom: .4rem\n    }\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container__0xaxG .CitySelectorModal_city-title__CVXw1 {\n    text-align: center;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    font-weight: 600\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container__0xaxG .CitySelectorModal_city-title__CVXw1 {\n        width:7.2rem;\n        font-size: 1.4rem;\n        line-height: 2rem;\n        margin-inline:auto}\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container__0xaxG:hover {\n    transform: scale(1.05)\n}\n\n.VehicleDetails_title-container__KoZSb {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-items: flex-start;\n    padding: 5.6rem;\n    background-color: #fff;\n    width: 36rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb {\n        padding:0;\n        width: 100%;\n        background-color: unset;\n        margin-bottom: .8rem\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq {\n        display:flex;\n        flex-direction: row;\n        justify-content: flex-start;\n        margin-bottom: 2rem\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-image__jxN3a {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-weight-desktop__Owqfe {\n    margin-top: 2rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-weight-desktop__Owqfe {\n        display:none\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd {\n    margin-top: .5rem;\n    margin-bottom: 2rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd {\n        display:flex;\n        flex-direction: column;\n        justify-content: center;\n        margin: 0 0 0 2rem\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd .VehicleDetails_vehicle-name__TwMXA {\n    font-weight: 600;\n    font-size: 2.4rem;\n    line-height: 3.2rem;\n    color: #2d2f34;\n    margin: 0;\n    text-align: center\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd .VehicleDetails_vehicle-name__TwMXA {\n        text-align:left;\n        font-size: 1.4rem;\n        line-height: 2rem\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd .VehicleDetails_vehicle-fare__Tt8Cl p {\n    font-weight: 400;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: #2d2f34;\n    margin: .1rem 0 0;\n    text-align: center\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd .VehicleDetails_vehicle-fare__Tt8Cl p {\n        text-align:left;\n        font-size: 1.2rem;\n        line-height: 1.6rem;\n        margin: .4rem 0 0\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd .VehicleDetails_vehicle-weight-mobile__rA9ML {\n    display: none;\n    margin-top: 2rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd .VehicleDetails_vehicle-weight-mobile__rA9ML {\n        display:block;\n        margin-top: .8rem;\n        width: -moz-fit-content;\n        width: fit-content\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_divider__4Ch7T {\n    width: 100%;\n    border-bottom: .1rem solid rgba(78,82,91,.12)\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS {\n    margin-top: 1.8rem;\n    width: 100%\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-section-title__ryt2g {\n    margin: 0;\n    font-weight: 600;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    color: #2d2f34\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-wrapper__ZntQf {\n    margin-top: .8rem;\n    display: grid;\n    grid-template-columns: repeat(1,1fr);\n    width: 100%;\n    align-items: center\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-wrapper__ZntQf {\n        grid-template-columns:repeat(2,1fr)\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-wrapper__ZntQf .VehicleDetails_best-for__8_39F {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 1.2rem\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-wrapper__ZntQf .VehicleDetails_best-for__8_39F .VehicleDetails_best-for-image__ZsSkM {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-wrapper__ZntQf .VehicleDetails_best-for__8_39F .VehicleDetails_best-for-title__R14mh {\n    margin: 0 0 0 .8rem;\n    font-weight: 400;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    color: #2d2f34;\n    text-align: left;\n    width: 100%\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_divider-mobile__9GSbM {\n    display: none\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_divider-mobile__9GSbM {\n        display:block;\n        width: 100%;\n        border-bottom: .1rem solid rgba(78,82,91,.12)\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_title-mobile__0_qDh {\n    display: none\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_title-mobile__0_qDh {\n        display:block;\n        text-align: left;\n        width: 100%;\n        margin: 2rem 0 0\n    }\n}\n\n@media only screen and (max-width: 1023px) {\n    .VehicleFareEstimateInput_container__ve1CJ {\n        width:100%\n    }\n}\n\n.VehicleFareEstimateInput_container__ve1CJ .VehicleFareEstimateInput_input-container__c_LeO {\n    background-color: #fff;\n    padding: 1.2rem 0;\n    width: 18rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .VehicleFareEstimateInput_container__ve1CJ .VehicleFareEstimateInput_input-container__c_LeO {\n        padding:.9rem 0;\n        width: 100%;\n        border: .07rem solid #ddd;\n        border-radius: .6rem\n    }\n}\n\n.VehicleFareEstimateInput_container__ve1CJ .VehicleFareEstimateInput_input-container__c_LeO .VehicleFareEstimateInput_label-required__7c_BR,.VehicleFareEstimateInput_container__ve1CJ .VehicleFareEstimateInput_input-container__c_LeO .VehicleFareEstimateInput_label__nM4lw {\n    font-weight: 600;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    color: #2d2f34;\n    padding-left: 2rem\n}\n\n.VehicleFareEstimateInput_container__ve1CJ .VehicleFareEstimateInput_input-container__c_LeO .VehicleFareEstimateInput_label-required__7c_BR:after {\n    content: \"*\";\n    color: #eb5757;\n    padding-left: .2rem\n}\n\n.VehicleFareEstimateInput_container__ve1CJ .VehicleFareEstimateInput_error-container__wkck8 {\n    position: absolute;\n    font-weight: 600;\n    font-size: 1rem;\n    line-height: 1.6rem;\n    color: #eb5757;\n    margin: 0 2rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .VehicleFareEstimateInput_container__ve1CJ .VehicleFareEstimateInput_error-container__wkck8 {\n        margin:0\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 {\n    width: -moz-fit-content;\n    width: fit-content;\n    height: 60rem;\n    display: flex;\n    position: relative;\n    overflow: hidden;\n    border-radius: .8rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 {\n        width:100%;\n        height: -moz-fit-content;\n        height: fit-content;\n        flex-direction: column;\n        padding: 2.4rem;\n        box-sizing: border-box;\n        background: #fcfcfc;\n        border-radius: .8rem .8rem 0 0;\n        overflow-y: auto\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x {\n    padding: 5.6rem;\n    background-color: #fff;\n    width: 22.4rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x {\n        padding:0;\n        width: -moz-fit-content;\n        width: fit-content;\n        background-color: unset;\n        margin-bottom: 1.5rem\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_title__6Mx3f {\n    padding: 0;\n    font-weight: 600;\n    font-size: 4.8rem;\n    line-height: 6.4rem;\n    color: #333;\n    margin: 0 0 2.4rem;\n    display: block\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_title__6Mx3f {\n        display:none;\n        font-size: 1.8rem;\n        line-height: 2.8rem;\n        margin-bottom: 0\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_sub-title__0_BHK {\n    margin: 0;\n    padding: 0;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: rgba(51,51,51,.64);\n    display: block\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_sub-title__0_BHK {\n        display:none;\n        font-size: 1.4rem;\n        line-height: 2rem\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_title-mobile__fnDsZ {\n    padding: 0;\n    font-weight: 600;\n    font-size: 4.8rem;\n    line-height: 6.4rem;\n    color: #333;\n    margin: 0 0 2.4rem;\n    display: none\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_title-mobile__fnDsZ {\n        display:block;\n        font-size: 1.8rem;\n        line-height: 2.8rem;\n        margin-bottom: 0\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_sub-title-mobile__Pfdz7 {\n    margin: 0;\n    padding: 0;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: rgba(51,51,51,.64);\n    display: none\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_sub-title-mobile__Pfdz7 {\n        display:block;\n        font-size: 1.4rem;\n        line-height: 2rem\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_form-container__deD6R {\n    background: #eef2ff;\n    box-sizing: border-box;\n    width: 42.8rem;\n    position: relative;\n    padding: 4.4rem 4rem 4rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_form-container__deD6R {\n        background:unset;\n        width: 100%;\n        padding: 0\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_close-modal-button__kTebR {\n    all: unset;\n    cursor: pointer;\n    margin: 2.4rem;\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: flex\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_close-modal-button__kTebR {\n        margin-top:2.5rem;\n        margin-right: 1.9rem\n    }\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd {\n    padding: 3.2rem 2.4rem;\n    border-top: .025rem solid rgba(78,82,91,.36);\n    border-radius: 0 .8rem .8rem .8rem;\n    filter: drop-shadow(0 .4rem 1.6rem rgba(0,0,0,.08));\n    background-color: #fff;\n    width: -moz-fit-content;\n    width: fit-content\n}\n\n@media only screen and (max-width: 1023px) {\n    .VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd {\n        filter:none;\n        background-color: transparent;\n        background-color: initial;\n        padding: 0;\n        width: auto\n    }\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_modal-title__Bp6M3 {\n    display: none\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center\n}\n\n@media only screen and (max-width: 1023px) {\n    .VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj {\n        display:flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        gap: 1.8rem\n    }\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj .VehicleFareEstimateForm_divider__lp0JR {\n    display: block;\n    border: none;\n    border-left: .1rem solid #ddd;\n    height: 5.6rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj .VehicleFareEstimateForm_divider__lp0JR {\n        display:none\n    }\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj input {\n    border: none;\n    outline: none;\n    font-family: inherit;\n    line-height: 1.8rem;\n    font-size: 1.2rem;\n    font-weight: 400;\n    text-overflow: ellipsis;\n    width: 80%;\n    background-color: #fff;\n    margin: .2rem 1.9rem;\n    padding: 0\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj input::-moz-placeholder {\n    color: rgba(51,51,51,.412);\n    font-family: inherit\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj input:-ms-input-placeholder {\n    color: rgba(51,51,51,.412);\n    font-family: inherit\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj input::placeholder {\n    color: rgba(51,51,51,.412);\n    font-family: inherit\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj .VehicleFareEstimateForm_submit-button-wrapper__6w1k2 .VehicleFareEstimateForm_submit-container__nsP72 {\n    width: 22rem;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj .VehicleFareEstimateForm_submit-button-wrapper__6w1k2 .VehicleFareEstimateForm_submit-container__nsP72 {\n        width:100%;\n        height: 5.6rem\n    }\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj .VehicleFareEstimateForm_submit-button-wrapper__6w1k2 .VehicleFareEstimateForm_submit-button-error__fluro {\n    position: absolute;\n    bottom: 1.5rem;\n    color: #eb5757;\n    font-weight: 600;\n    font-size: 1rem;\n    line-height: 1.6rem\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form-loader__2imIz {\n    width: 94.3rem;\n    height: 6.6rem\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_drop-input__f7RVx+div .VehicleFareEstimateForm_dropdown-item__SWVlc,.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_pickup-input__zZvaq+div .VehicleFareEstimateForm_dropdown-item__SWVlc {\n    padding: .9rem 1.9rem;\n    cursor: pointer;\n    font-size: 1.1rem;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    border-bottom: .05rem solid #d3d3d3\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_drop-input__f7RVx+div .VehicleFareEstimateForm_dropdown-item__SWVlc:hover,.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_pickup-input__zZvaq+div .VehicleFareEstimateForm_dropdown-item__SWVlc:hover {\n    cursor: pointer;\n    background-color: #f3f3f3\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk {\n    padding: 0;\n    margin: 0 auto;\n    height: -moz-max-content;\n    height: max-content\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk {\n        padding:0\n    }\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_modal-title__3rSMj {\n    font-weight: 600;\n    font-size: 2.4rem;\n    line-height: 3.2rem;\n    margin: 0;\n    color: #2d2f34\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_modal-title__3rSMj {\n        display:none\n    }\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 1.6rem;\n    margin-top: 1.2rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz {\n        margin-top:0;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        gap: 1.8rem\n    }\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz .VehicleFareEstimateFormModal_divider__MhYty {\n    display: none\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz input {\n    border: none;\n    outline: none;\n    font-family: inherit;\n    line-height: 2.4rem;\n    font-size: 1.6rem;\n    font-weight: 400;\n    text-overflow: ellipsis;\n    width: 90%;\n    background-color: #fff;\n    margin: .2rem 1.9rem 0;\n    padding: 0\n}\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_form-container__deD6R {\n    background: #eef2ff;\n    box-sizing: border-box;\n    width: 42.8rem;\n    position: relative;\n    padding: 4.4rem 4rem 4rem;\n}\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz input {\n        font-size:1.2rem;\n        line-height: 1.8rem;\n        margin: .2rem 1.4rem 0\n    }\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz input::-moz-placeholder {\n    color: rgba(51,51,51,.412);\n    font-family: inherit\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz input:-ms-input-placeholder {\n    color: rgba(51,51,51,.412);\n    font-family: inherit\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz input::placeholder {\n    color: rgba(51,51,51,.412);\n    font-family: inherit\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz .VehicleFareEstimateFormModal_submit-button-wrapper__wXj81 {\n    position: relative;\n    top: 9rem;\n    width: 100%\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz .VehicleFareEstimateFormModal_submit-button-wrapper__wXj81 {\n        position:static;\n        width: 100%\n    }\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz .VehicleFareEstimateFormModal_submit-button-wrapper__wXj81 .VehicleFareEstimateFormModal_submit-container__qL_IG {\n    height: 5.6rem\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz .VehicleFareEstimateFormModal_submit-button-wrapper__wXj81 .VehicleFareEstimateFormModal_submit-button-error__e9IDo {\n    position: absolute;\n    bottom: -1.7rem;\n    color: #eb5757;\n    font-weight: 600;\n    font-size: 1rem;\n    line-height: 1.6rem\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_drop-input__BjYO5+div .VehicleFareEstimateFormModal_dropdown-item__dxA4c,.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_pickup-input__NRKfU+div .VehicleFareEstimateFormModal_dropdown-item__dxA4c {\n    padding: .9rem 1.9rem;\n    cursor: pointer;\n    font-size: 1.1rem;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    border-bottom: .05rem solid #d3d3d3;\n    width: 100%\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_drop-input__BjYO5+div .VehicleFareEstimateFormModal_dropdown-item__dxA4c:hover,.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_pickup-input__NRKfU+div .VehicleFareEstimateFormModal_dropdown-item__dxA4c:hover {\n    cursor: pointer;\n    background-color: #f3f3f3\n}\n\n.VehicleFareEstimateInputModal_container__OQtPn {\n    width: 100%\n}\n\n.VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_input-container__qWzOQ {\n    background-color: #fff;\n    padding: .975rem 0;\n    border: .1rem solid #ddd;\n    border-radius: .8rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_input-container__qWzOQ {\n        padding:.9rem 0;\n        width: 100%;\n        border: .07rem solid #ddd;\n        border-radius: .6rem\n    }\n}\n\n.VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_input-container__qWzOQ .VehicleFareEstimateInputModal_label-required__lAQ8d,.VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_input-container__qWzOQ .VehicleFareEstimateInputModal_label__MyfNR {\n    font-weight: 600;\n    font-size: 1.2rem;\n    line-height: 1.6rem;\n    color: #2d2f34;\n    padding-left: 2rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_input-container__qWzOQ .VehicleFareEstimateInputModal_label-required__lAQ8d,.VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_input-container__qWzOQ .VehicleFareEstimateInputModal_label__MyfNR {\n        font-size:1rem;\n        line-height: 1.2rem;\n        padding-left: 1.4rem\n    }\n}\n\n.VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_input-container__qWzOQ .VehicleFareEstimateInputModal_label-required__lAQ8d:after {\n    content: \"*\";\n    color: #eb5757;\n    padding-left: .2rem\n}\n\n.VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_error-container__ATPh2 {\n    position: absolute;\n    font-weight: 600;\n    font-size: 1rem;\n    line-height: 1.6rem;\n    color: #eb5757;\n    margin: 0\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_error-container__ATPh2 {\n        margin:0\n    }\n}\n\n  </style>\n<div class=\"ReactModal__Content ReactModal__Content--after-open FareEstimateModal_modal-container__B7RS9\" tabindex=\"-1\" role=\"dialog\" aria-modal=\"true\"><div class=\"VehicleModalLayout_estimate-layout-container__opyh2\"><section class=\"VehicleDetails_title-container__KoZSb\"><div class=\"VehicleDetails_vehicle__5XxLq\"><div class=\"VehicleDetails_vehicle-image__jxN3a\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27226%27%20height=%27140%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"Tata 407\" srcset=\"https://d3apkeya39jz4k.cloudfront.net/tata_407_6bd888bb79.svg 1x, https://d3apkeya39jz4k.cloudfront.net/tata_407_6bd888bb79.svg 2x\" src=\"https://d3apkeya39jz4k.cloudfront.net/tata_407_6bd888bb79.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></div><div class=\"VehicleDetails_vehicle-weight-desktop__Owqfe\"><div class=\"VehicleCapacity_vehicle-capacity-container__X1gyj\"><div class=\"VehicleCapacity_vehicle-capacity-image-wrapper__TTxaY\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2716%27%20height=%2716%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"Vehicle Capacity Icon\" srcset=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/fare-estimate-result/weight.svg 1x, https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/fare-estimate-result/weight.svg 2x\" src=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/fare-estimate-result/weight.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></div><p class=\"VehicleCapacity_vehicle-capacity__asClv\">2500kg</p></div></div><div class=\"VehicleDetails_vehicle-text__5sEtd\"><h3 class=\"VehicleDetails_vehicle-name__TwMXA\">Tata 407</h3><div class=\"VehicleDetails_vehicle-fare__Tt8Cl\"><p>Starting from <strong>₹591</strong></p></div><div class=\"VehicleDetails_vehicle-weight-mobile__rA9ML\"><div class=\"VehicleCapacity_vehicle-capacity-container__X1gyj\"><div class=\"VehicleCapacity_vehicle-capacity-image-wrapper__TTxaY\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2716%27%20height=%2716%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"Vehicle Capacity Icon\" srcset=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/fare-estimate-result/weight.svg 1x, https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/fare-estimate-result/weight.svg 2x\" src=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/fare-estimate-result/weight.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></div><p class=\"VehicleCapacity_vehicle-capacity__asClv\">2500kg</p></div></div></div></div><div class=\"VehicleDetails_divider__4Ch7T\"></div><div class=\"VehicleDetails_best-for-section-wrapper__bm_LS\"><h3 class=\"VehicleDetails_best-for-section-title__ryt2g\">Best for sending:</h3><div class=\"VehicleDetails_best-for-wrapper__ZntQf\"><div class=\"VehicleDetails_best-for__8_39F\"><div class=\"VehicleDetails_best-for-image__ZsSkM\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"Fruits and Vegetables\" srcset=\"https://d3apkeya39jz4k.cloudfront.net/nutrition_a9abb67b41.svg 1x, https://d3apkeya39jz4k.cloudfront.net/nutrition_a9abb67b41.svg 2x\" src=\"https://d3apkeya39jz4k.cloudfront.net/nutrition_a9abb67b41.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></div><p class=\"VehicleDetails_best-for-title__R14mh\">Fruits and Vegetables</p></div><div class=\"VehicleDetails_best-for__8_39F\"><div class=\"VehicleDetails_best-for-image__ZsSkM\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"Chemicals\" srcset=\"https://d3apkeya39jz4k.cloudfront.net/science_e408f394d6.svg 1x, https://d3apkeya39jz4k.cloudfront.net/science_e408f394d6.svg 2x\" src=\"https://d3apkeya39jz4k.cloudfront.net/science_e408f394d6.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></div><p class=\"VehicleDetails_best-for-title__R14mh\">Chemicals</p></div><div class=\"VehicleDetails_best-for__8_39F\"><div class=\"VehicleDetails_best-for-image__ZsSkM\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"FMGC Food Products\" srcset=\"https://d3apkeya39jz4k.cloudfront.net/liquor_11515f1904.svg 1x, https://d3apkeya39jz4k.cloudfront.net/liquor_11515f1904.svg 2x\" src=\"https://d3apkeya39jz4k.cloudfront.net/liquor_11515f1904.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></div><p class=\"VehicleDetails_best-for-title__R14mh\">FMGC Food Products</p></div></div></div><div class=\"VehicleDetails_divider-mobile__9GSbM\"></div><h2 class=\"VehicleDetails_title-mobile__0_qDh\">Your Quick Quote</h2></section><section class=\"VehicleModalLayout_form-container__deD6R\"><div class=\"VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk\"><h2 class=\"VehicleFareEstimateFormModal_modal-title__3rSMj\">Get an Estimate</h2><form class=\"VehicleFareEstimateFormModal_fare-estimate-form__MTntz\"><div class=\"VehicleFareEstimateInputModal_container__OQtPn\"><div class=\"VehicleFareEstimateInputModal_input-container__qWzOQ\"><label class=\"VehicleFareEstimateInputModal_label-required__lAQ8d \n            \" for=\"Pickup Location\">Pickup Location</label><div style=\"display: block; position: relative;\"><input placeholder=\"enter pick up location\" id=\"custom-autocomplete-pickup-address-0.7419362712174786\" class=\"VehicleFareEstimateFormModal_pickup-input__NRKfU \" role=\"combobox\" aria-autocomplete=\"list\" aria-expanded=\"false\" autocomplete=\"off\" value=\"\" onfocus=\"this.setAttribute('autocomplete', 'chrome-off' );\"></div></div></div><div class=\"VehicleFareEstimateFormModal_divider__MhYty\"></div><div class=\"VehicleFareEstimateInputModal_container__OQtPn\"><div class=\"VehicleFareEstimateInputModal_input-container__qWzOQ\"><label class=\"VehicleFareEstimateInputModal_label-required__lAQ8d \n            \" for=\"Drop Location\">Drop Location</label><div style=\"display: block; position: relative;\"><input placeholder=\"enter drop location\" id=\"custom-autocomplete-pickup-address-0.9842969907542141\" class=\"VehicleFareEstimateFormModal_drop-input__BjYO5 \" role=\"combobox\" aria-autocomplete=\"list\" aria-expanded=\"false\" autocomplete=\"off\" value=\"\" onfocus=\"this.setAttribute('autocomplete', 'chrome-off' );\"></div></div></div><div class=\"VehicleFareEstimateFormModal_divider__MhYty\"></div><div class=\"VehicleFareEstimateInputModal_container__OQtPn\"><div class=\"VehicleFareEstimateInputModal_input-container__qWzOQ\"><label class=\"VehicleFareEstimateInputModal_label-required__lAQ8d \n            \" for=\"Phone Number\">Phone Number</label><input placeholder=\"enter your phone number\" type=\"tel\" value=\"\"></div></div><div class=\"VehicleFareEstimateFormModal_divider__MhYty\"></div><div class=\"VehicleFareEstimateInputModal_container__OQtPn\"><div class=\"VehicleFareEstimateInputModal_input-container__qWzOQ\"><label class=\"VehicleFareEstimateInputModal_label__MyfNR \n            \" for=\"Name\">Name</label><input placeholder=\"enter your name\" type=\"text\" value=\"\"></div></div><div class=\"VehicleFareEstimateFormModal_submit-button-wrapper__wXj81\"><button class=\"FormInput_submit__icI8k FormInput_submit-enabled__qOriP VehicleFareEstimateFormModal_submit-container__qL_IG\"><div class=\"FormInput_submit-text__LL1rf\">Get an Estimate</div><div class=\"FormInput_submit-arrow-icon__Zz3tC\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2716%27%20height=%2716%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"Right Arrow Icon\" srcset=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/common/submit_arrow_16.svg 1x, https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/common/submit_arrow_16.svg 2x\" src=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/common/submit_arrow_16.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></div></button></div></form></div></section><button class=\"VehicleModalLayout_close-modal-button__kTebR\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2724%27%20height=%2724%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"close\" srcset=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/common/cross_24.svg 1x, https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/common/cross_24.svg 2x\" src=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/common/cross_24.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></button></div></div>";
      /***/
    },

    /***/
    "AN84":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/landing/landing.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function AN84(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-auth-navbar></app-auth-navbar>\n<main>\n  <div class=\"relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75\">\n    <div class=\"absolute top-0 w-full h-full bg-center bg-cover\" style=\"background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80');\">\n      <span id=\"blackOverlay\" class=\"w-full h-full absolute opacity-75 bg-black\"></span>\n    </div>\n    <div class=\"container relative mx-auto\">\n      <div class=\"items-center flex flex-wrap\">\n        <div class=\"w-full lg:w-6/12 px-4 ml-auto mr-auto text-center\">\n          <div class=\"pr-12\">\n            <h1 class=\"text-white font-semibold text-5xl\">\n              Web Development Portal\n            </h1>\n            <p class=\"mt-4 text-lg text-blueGray-200\">\n              This is a simple example of a Landing Page you can build using\n              Notus Angular. It features multiple CSS components based on the\n              Tailwind CSS design system.\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px\" style=\"transform: translateZ(0)\">\n      <svg class=\"absolute bottom-0 overflow-hidden\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\" version=\"1.1\" viewBox=\"0 0 2560 100\" x=\"0\" y=\"0\">\n        <polygon class=\"text-blueGray-200 fill-current\" points=\"2560 0 2560 100 0 100\"></polygon>\n      </svg>\n    </div>\n  </div>\n\n  <section class=\"pb-20 bg-blueGray-200 -mt-24\">\n    <div class=\"container mx-auto px-4\">\n      <div class=\"flex flex-wrap\">\n        <div class=\"lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center\">\n          <div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg\">\n            <div class=\"px-4 py-5 flex-auto\">\n              <div class=\"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400\">\n                <i class=\"fas fa-award\"></i>\n              </div>\n              <h6 class=\"text-xl font-semibold\">\n                <a (click)=\"scrollToBookingSection()\" class=\"text-black\" style=\"cursor: pointer;\">Shared Load / Part Load booking</a>\n              </h6>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"w-full md:w-4/12 px-4 text-center\">\n          <div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg\">\n            <div class=\"px-4 py-5 flex-auto\">\n              <div class=\"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400\">\n                <i class=\"fas fa-retweet\"></i>\n              </div>\n              <h6 class=\"text-xl font-semibold\">\n                <a (click)=\"scrollToBookSection()\" class=\"text-black\" style=\"cursor: pointer; text-align: center;\">Lorry Load / Full Load Booking</a>\n              </h6>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"pt-6 w-full md:w-4/12 px-4 text-center\">\n          <div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg\">\n            <div class=\"px-4 py-5 flex-auto\">\n              <div class=\"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400\">\n                <i class=\"fas fa-fingerprint\"></i>\n              </div>\n              <h6 class=\"text-xl font-semibold\">\n                <a (click)=\"scrollToLookSection()\" class=\"text-black\" style=\"cursor: pointer ;\">Packers Movers</a>\n              </h6>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"flex flex-wrap items-center mt-32\" id=\"bookingSection\">\n        <div class=\"w-full md:w-5/12 px-4 mr-auto ml-auto\">\n          <h3 style=\"font-size: 40px; text-align: left; padding: 20px;\">Shared Load / Part Load Booking</h3>\n          <div class=\"cont\">\n            <div class=\"curvy-box\">\n              <label class=\"lbl\" for=\"length\">Length:</label>\n              <input class=\"inp\" type=\"number\" id=\"length\" [value]=\"length\" (input)=\"length = $event.target.valueAsNumber\" /><br>\n              <label style=\" margin-right: 10px; font-size: 18px; color: #333;\" for=\"breadth\">Breadth:</label>\n              <input class=\"inp\" type=\"number\" id=\"breadth\" [value]=\"breadth\" (input)=\"breadth = $event.target.valueAsNumber\" /><br>\n              <label style=\" margin-right: 10px; font-size: 18px; color: #333;\" for=\"height\">Height:</label>\n              <input class=\"inp\" type=\"number\" id=\"height\" [value]=\"height\" (input)=\"height = $event.target.valueAsNumber\" /><br>\n              <label style=\" margin-right: 10px; font-size: 18px; color: #333;\" for=\"multiplier\">Select Multiplier:</label>\n              <select class=\"inp\" id=\"multiplier\" [value]=\"multiplier\" (input)=\"multiplier = $event.target.valueAsNumber\">\n                <option value=\"6\">6</option>\n                <option value=\"8\">8</option>\n                <option value=\"10\">10</option>\n              </select><br>\n              <button (click)=\"calculateEstimate()\">Calculate Estimate</button>\n              <p style=\"padding: 12px;\" id=\"estimateResult\">Rs.{{ estimateResult }}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      \n  <div class=\"btu\">\n    <input type=\"radio\" name=\"position\" checked />\n    <input type=\"radio\" name=\"position\" />\n    <input type=\"radio\" name=\"position\" />\n    <input type=\"radio\" name=\"position\" />\n    <input type=\"radio\" name=\"position\" />\n           \n    <div id=\"carousel\">\n      <div class=\"item\">\n        \n        <img src= \"..//..//../assets/img/ace.jpg\" width=\"300px\" height=\"200px\">\n      <h1 style=\"text-align: center; font-size: 26px; padding: 30px; font-family:serif\"><b>TATA ACE</b></h1>\n      <h3 style=\"text-align: center; color: grey;\">( Max Load 850 Kgs )</h3>\n      </div>\n      <div class=\"item\">\n        <img src= \"..//..//../assets/img/eicher.jpg\" width=\"300px\" height=\"200px\">\n        <h1 style=\"text-align: center; font-size: 26px; padding: 2; font-family:serif\">EICHER 19</h1><br>\n        <h3 style=\"text-align: center; color: grey;\">( Max Load 7 Ton )</h3>\n      </div>\n      <div class=\"item\">\n        <img src= \"..//..//../assets/img/taurus.jpg\" width=\"300px\" height=\"200px\">\n        <h1 style=\"text-align: center; font-size: 26px; padding: 2px; font-family:serif\">TATA TAURUS 21T\n        </h1><br>\n        <h3 style=\"text-align: center; color: grey;\">( Max Load 21 Ton )</h3>\n       \n      </div>\n      <div class=\"item\">\n        <img src= \"..//..//../assets/img/container.jpg\" width=\"300px\" height=\"200px\">\n        <h1 style=\"text-align: center; font-size: 26px; padding: 2px; font-family:serif\">CONTAINER 32 FT SXL\n        </h1><br>\n        <h3 style=\"text-align: center; color: grey;\">( Max Load 7 Ton )</h3>\n      </div>\n      \n      <div class=\"item\">\n        <img src= \"..//..//../assets/img/40ft.jpg\" width=\"300px\" height=\"200px\">\n        <h1 style=\"text-align: center; font-size: 26px; padding: 2px; font-family:serif\">40 FEET OPEN-TRAILOR\n        </h1><br>\n        <h3 style=\"text-align: center; color: grey;\">( Max Load 32 Ton )</h3>\n       \n      </div>\n  \n    </div>\n       </div>\n\n      </div>\n    </section>\n  \n  \n  <section class=\"relative py-20\">\n    <div\n      class=\"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20\"\n      style=\"transform: translateZ(0)\"\n    >\n      <svg\n        class=\"absolute bottom-0 overflow-hidden\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        preserveAspectRatio=\"none\"\n        version=\"1.1\"\n        viewBox=\"0 0 2560 100\"\n        x=\"0\"\n        y=\"0\"\n      >\n        <polygon\n          class=\"text-white fill-current\"\n          points=\"2560 0 2560 100 0 100\"\n        ></polygon>\n      </svg>\n    </div>\n  \n    <div class=\"container mx-auto px-4\">\n      <div class=\"items-center flex flex-wrap\">\n        <div class=\"carousel\">\n          <div class=\"carousel-slide\">\n            \n          </div>\n        </div>\n        <div class=\"w-full md:w-5/12 ml-auto mr-auto px-4\" id=\"booking\">\n          <div class=\"md:pr-12\">\n           \n            <h3 class=\"text-3xl font-semibold\">Rate Chart</h3><br>\n           \n            <app-rate-chart></app-rate-chart>\n\n            <ul class=\"list-none mt-6\">\n              <li class=\"py-2\">\n \n              </li>\n              <li class=\"py-2\">\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"header relative pt- items-center flex h-screen max-h-2-px\" id=\"look\">\n    \n  <div class=\"justify-center text-center flex flex-wrap mt-2\">\n    <div class=\"w-full md:w-2/2 px-2 md:px-4\">\n      <h2 class=\"font-semibold text-4xl\">Packers Movers</h2>\n     \n    </div>\n  </div>\n</section>\n\n<section class=\"block relative z-1 bg-blueGray-600\" >\n  <div class=\"container mx-auto\">\n    <div class=\"justify-center flex flex-wrap\">\n      <div class=\"w-full lg:w-12/12 px-4 -mt-24\">\n        <div class=\"flex flex-wrap\">\n          <div class=\"card-container\">\n            <div class=\"card\" style=\"border-radius: 50%;\">\n              <div class=\"front\" style=\"border-radius: 50%;\">\n                <a [routerLink]=\"['/flip']\">\n                  <div\n                    class=\"hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150\"\n                  >\n                    <img\n                      alt=\"...\"\n                      class=\"align-middle border-none max-w-full h-auto rounded-lg\"\n                      src=\"assets/img/box1bhk.png\"\n                    />\n                  </div>\n                </a>\n                <!-- Content for the front of the card -->\n                \n              </div>\n              <div class=\"back\" style=\"border-radius: 50%;\">\n                <a [routerLink]=\"['/flip']\">\n                  <div\n                    class=\"hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150\"\n                  >\n                    <img\n                      alt=\"...\"\n                      class=\"align-middle border-none max-w-full h-auto rounded-lg\"\n                      src=\"\thttps://d3apkeya39jz4k.cloudfront.net/tata_ace_2deb9441fd.svg\"\n                    />\n                    <h1 style=\"background-color: rgb(253, 253, 253); padding: 10px;\">Starting From <strong> Rs. 14364</strong></h1><br>\n                    <h1 style=\"background-color: rgb(253, 253, 253);  color: black;text-align: center; font-size: 16px; padding-bottom: 10px;\">Read More</h1>\n                \n                  </div>  \n                </a> \n              </div>\n            </div>\n          </div>\n          <div class=\"card-container\">\n            <div class=\"card\" style=\"border-radius: 50%;\">\n              <div class=\"front\" style=\"border-radius: 50%;\">\n                <a [routerLink]=\"['/fliptwo']\">\n                  <div\n                    class=\"hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150\"\n                  >\n                    <img\n                      alt=\"...\"\n                      class=\"align-middle border-none max-w-full h-auto rounded-lg\"\n                      src=\"assets/img/2bhk.png\"\n                    />\n                  </div>\n                </a>\n                <!-- Content for the front of the card -->\n                \n              </div>\n              <div class=\"back\" style=\"border-radius: 50%;\">\n                <a [routerLink]=\"['/fliptwo']\">\n                  <div\n                    class=\"hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150\"\n                  >\n                    <img\n                      alt=\"...\"\n                      class=\"align-middle border-none max-w-full h-auto rounded-lg\"\n                      src=\"\thttps://d3apkeya39jz4k.cloudfront.net/tata_ace_2deb9441fd.svg\"\n                    />\n                    <h1 style=\"background-color: rgb(253, 253, 253); padding: 10px;\">Starting From <strong> Rs. 14364</strong></h1><br>\n                    <h1 style=\"background-color: rgb(253, 253, 253);  color: black;text-align: center; font-size: 16px; padding-bottom: 10px;\">Read More</h1>\n                \n                  </div>  \n                </a> \n              </div>\n            </div>\n          </div>\n          <div class=\"card-container\">\n            <div class=\"card\" style=\"border-radius: 50%;\">\n              <div class=\"front\" style=\"border-radius: 50%;\">\n                <a [routerLink]=\"['/flipthree']\">\n                  <div\n                    class=\"hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150\"\n                  >\n                    <img\n                      alt=\"...\"\n                      class=\"align-middle border-none max-w-full h-auto rounded-lg\"\n                      src=\"assets/img/3bhk.png\"\n                    />\n                  </div>\n                </a>\n                <!-- Content for the front of the card -->\n                \n              </div>\n              <div class=\"back\" style=\"border-radius: 50%;\">\n                <a [routerLink]=\"['/flipthree']\">\n                  <div\n                    class=\"hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150\"\n                  >\n                    <img\n                      alt=\"...\"\n                      class=\"align-middle border-none max-w-full h-auto rounded-lg\"\n                      src=\"\thttps://d3apkeya39jz4k.cloudfront.net/tata_ace_2deb9441fd.svg\"\n                    />\n                    <h1 style=\"background-color: rgb(253, 253, 253); padding: 10px;\">Starting From <strong> Rs. 14364</strong></h1><br>\n                    <h1 style=\"background-color: rgb(253, 253, 253);  color: black;text-align: center; font-size: 16px; padding-bottom: 10px;\">Read More</h1>\n                \n                  </div>  \n                </a> \n              </div>\n            </div>\n          </div>\n          <div class=\"card-container\">\n            <div class=\"card\" style=\"border-radius: 50%;\">\n              <div class=\"front\" style=\"border-radius: 50%;\">\n                <a [routerLink]=\"['/flipfour']\">\n                  <div\n                    class=\"hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150\"\n                  >\n                    <img\n                      alt=\"...\"\n                      class=\"align-middle border-none max-w-full h-auto rounded-lg\"\n                      src=\"assets/img/4bhk.png\"\n                    />\n                  </div>\n                </a>\n                <!-- Content for the front of the card -->\n                \n              </div>\n              <div class=\"back\" style=\"border-radius: 50%;\">\n                <a [routerLink]=\"['/flipfour']\">\n                  <div\n                    class=\"hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150\"\n                  >\n                    <img\n                      alt=\"...\"\n                      class=\"align-middle border-none max-w-full h-auto rounded-lg\"\n                      src=\"\thttps://d3apkeya39jz4k.cloudfront.net/tata_ace_2deb9441fd.svg\"\n                    />\n                    <h1 style=\"background-color: rgb(253, 253, 253); padding: 10px;\">Starting From <strong> Rs. 14364</strong></h1><br>\n                    <h1 style=\"background-color: rgb(253, 253, 253);  color: black;text-align: center; font-size: 16px; padding-bottom: 10px;\">Read More</h1>\n                \n                  </div>  \n                </a> \n              </div>\n            </div>\n          </div>\n          </div>\n          </div>\n                  \n       \n    </div>\n  </div>\n</section>\n\n\n\n  <section class=\"pb-20 relative block bg-blueGray-800\">\n    <div\n      class=\"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20\"\n      style=\"transform: translateZ(0)\"\n    >\n      <svg\n        class=\"absolute bottom-0 overflow-hidden\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        preserveAspectRatio=\"none\"\n        version=\"1.1\"\n        viewBox=\"0 0 2560 100\"\n        x=\"0\"\n        y=\"0\"\n      >\n        <polygon\n          class=\"text-blueGray-800 fill-current\"\n          points=\"2560 0 2560 100 0 100\"\n        ></polygon>\n      </svg>\n    </div>\n\n    <div class=\"container mx-auto px-4 lg:pt-24 lg:pb-64\">\n      <div class=\"flex flex-wrap text-center justify-center\">\n        <div class=\"w-full lg:w-6/12 px-4\">\n          <h2 class=\"text-4xl font-semibold text-white\">Other services in Bangalore</h2>\n         \n        </div>\n      </div>\n      <div class=\"flex flex-wrap mt-12 justify-center\">\n        <div class=\"w-full lg:w-3/12 px-4 text-center\">\n          <div\n            class=\"text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center\"\n          ><i class=\"fa fa-motorcycle text-xl\"></i>       </div>\n          <h6 class=\"text-xl mt-5 font-semibold text-white\">\n           Two Whellers\n          </h6>\n          <p class=\"mt-2 mb-4 text-blueGray-400\">\n            <a [routerLink]=\"['/bike']\">Read More </a>\n          \n          </p>\n        </div>\n        <div class=\"w-full lg:w-3/12 px-4 text-center\">\n          <div\n            class=\"text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center\"\n          >\n          <i class='fas fa-box-open text-xl'></i>\n          </div>\n          <h5 class=\"text-xl mt-5 font-semibold text-white\">\n            Packers and Movers\n          </h5>\n          <p class=\"mt-2 mb-4 text-blueGray-400\">\n          \n            <a [routerLink]=\"['/Landing']\">Read More </a>\n          \n          </p>\n        </div>\n        <div class=\"w-full lg:w-3/12 px-4 text-center\">\n          <div\n            class=\"text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center\"\n          >\n            <i class=\"fas fa-lightbulb text-xl\"></i>\n          </div>\n          <h5 class=\"text-xl mt-5 font-semibold text-white\">Courier Service\n            </h5>\n          <p class=\"mt-2 mb-4 text-blueGray-400\">\n          \n            <a [routerLink]=\"['/courier']\">Read More </a>\n          \n          </p>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"relative block py-24 lg:pt-0 bg-blueGray-800\">\n    <div class=\"container mx-auto px-4\">\n      <div class=\"flex flex-wrap justify-center lg:-mt-64 -mt-48\">\n        <div class=\"w-full lg:w-6/12 px-4\">\n          <div\n            class=\"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200\"\n          >\n            <div class=\"flex-auto p-5 lg:p-10\">\n              <h4 class=\"text-2xl font-semibold\">Want to work with us?</h4>\n              <p class=\"leading-relaxed mt-1 mb-4 text-blueGray-500\">\n                Complete this form and we will get back to you in 24 hours.\n              </p>\n              <div class=\"relative w-full mb-3 mt-8\">\n                <label\n                  class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\n                  htmlFor=\"full-name\"\n                >\n                  Full Name\n                </label>\n                <input\n                  type=\"text\"\n                  class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\n                  placeholder=\"Full Name\"\n                />\n              </div>\n\n              <div class=\"relative w-full mb-3\">\n                <label\n                  class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\n                  htmlFor=\"email\"\n                >\n                  Email\n                </label>\n                <input\n                  type=\"email\"\n                  class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\n                  placeholder=\"Email\"\n                />\n              </div>\n\n              <div class=\"relative w-full mb-3\">\n                <label\n                  class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\n                  htmlFor=\"message\"\n                >\n                  Message\n                </label>\n                <textarea\n                  rows=\"4\"\n                  cols=\"80\"\n                  class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full\"\n                  placeholder=\"Type a message...\"\n                ></textarea>\n              </div>\n              <div class=\"text-center mt-6\">\n                <button\n                  class=\"bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n                  type=\"button\"\n                >\n                  Send Message\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  \n</main>\n<app-footer></app-footer>\n";
      /***/
    },

    /***/
    "CL0b":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/landing/flip/flip.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function CL0b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "  <style>\n   \n\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-section-title__ryt2g {\n    margin: 0;\n    font-weight: 600;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    color: #2d2f34;\n}\n.VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-wrapper__ZntQf .VehicleDetails_best-for__8_39F .VehicleDetails_best-for-title__R14mh {\n    margin: 0 0 0 0.8rem;\n    font-weight: 400;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    color: #2d2f34;\n    text-align: left;\n    width: 100%;\n}\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_modal-title__3rSMj {\n    font-weight: 600;\n    font-size: 2.4rem;\n    line-height: 3.2rem;\n    margin: 0;\n    color: #2d2f34;\n}\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_form-container__deD6R {\n    background: #eef2ff;\n    box-sizing: border-box;\n    width: 42.8rem;\n    position: relative;\n    padding: 4.4rem 4rem 4rem;\n}\n\n    .columnflip:first-child {\n      background-color: #eef;\n    }\n\n    .columnflip:last-child {\n      background-color: #fee;\n    }\n .Footer_footer-container__HntbH {\n    background-color: #000;\n    color: #fff\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC {\n    max-width: 150rem;\n    margin: auto;\n    padding: 4.8rem 0\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC {\n        padding:3.2rem 1.6rem\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 {\n    display: grid;\n    grid-template-columns: repeat(5,1fr);\n    padding: 0 3.6rem 4.8rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 {\n        grid-template-columns:1fr 1fr;\n        padding: 0 0 2.4rem\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_mobile-download__ynS_q {\n    display: none\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_company-info__dJXMm {\n    font-size: 2rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_company-info__dJXMm {\n        display:none\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_company-info__dJXMm .Footer_logo__GVpEx {\n    cursor: pointer\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_company-info__dJXMm .Footer_motto__vpt_I {\n    padding-top: 2.4rem;\n    width: 14rem\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_companies-links__0yil4,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_services-links__95wtA,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_support-links__v9_TZ {\n    display: flex;\n    flex-direction: column\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_companies-links__0yil4 .Footer_title__g0XIB,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_services-links__95wtA .Footer_title__g0XIB,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_support-links__v9_TZ .Footer_title__g0XIB {\n    font-weight: 600;\n    font-size: 1.8rem;\n    line-height: 140%\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_companies-links__0yil4 .Footer_list__r_RMm,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_services-links__95wtA .Footer_list__r_RMm,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_support-links__v9_TZ .Footer_list__r_RMm {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    padding-top: 1.2rem\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_companies-links__0yil4 .Footer_list__r_RMm .Footer_list-item__QPP6R,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_services-links__95wtA .Footer_list__r_RMm .Footer_list-item__QPP6R,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_support-links__v9_TZ .Footer_list__r_RMm .Footer_list-item__QPP6R {\n    font-size: 1.4rem;\n    margin-bottom: .8rem;\n    cursor: pointer;\n    display: block\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_support-links__v9_TZ {\n        display:none\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_download__6e9Km {\n    display: flex;\n    flex-direction: column;\n    gap: 1.6rem;\n    width: 18rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_download__6e9Km {\n        order:-1;\n        display: flex;\n        flex-direction: row;\n        grid-column: 1/span 2;\n        padding-bottom: 2.4rem;\n        width: 100%;\n        gap: 0\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_download-android__whnja,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_download-iOS__3ecym {\n    cursor: pointer\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_download-android__whnja,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_download-iOS__3ecym {\n        flex:1 1;\n        margin-right: 2rem\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv {\n    padding: 0 3.6rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv {\n        padding:0\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_cities-truck-links__2giuy {\n    display: flex;\n    flex-direction: column;\n    padding-bottom: 2.4rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_cities-truck-links__2giuy {\n        padding-bottom:2.4rem\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_cities-truck-links__2giuy .Footer_title__g0XIB {\n    font-weight: 600;\n    font-size: 1.8rem;\n    line-height: 140%\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_cities-truck-links__2giuy .Footer_list__r_RMm {\n    display: grid;\n    grid-template-columns: repeat(5,1fr);\n    grid-row-gap: 1.2rem;\n    padding-top: 1.2rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_cities-truck-links__2giuy .Footer_list__r_RMm {\n        grid-template-columns:repeat(3,1fr)\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_cities-truck-links__2giuy .Footer_list__r_RMm .Footer_list-item__QPP6R {\n    font-size: 1.4rem;\n    position: relative;\n    cursor: pointer\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_support-links__v9_TZ {\n    display: none\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_support-links__v9_TZ {\n        display:block;\n        padding-top: 1.2rem\n    }\n\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_support-links__v9_TZ .Footer_title__g0XIB {\n        display: none\n    }\n\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_support-links__v9_TZ .Footer_list__r_RMm {\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr;\n        align-items: center;\n        width: 100%\n    }\n\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_support-links__v9_TZ .Footer_list__r_RMm .Footer_list-item__QPP6R {\n        color: #bdbdbd;\n        font-size: 1.2rem;\n        padding: .6rem 0\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 2.4rem 3.6rem 0\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 {\n        flex-direction:column;\n        padding: 0;\n        align-items: flex-start\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ {\n        padding:2rem 0\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_fb__tr_T0,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_insta__R9wDV,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_linkedIn__DQwks,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_twitter__2Zp_k,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_yt__GUvsn {\n    content: \"\";\n    background-image: url(https://d10wquj595no85.cloudfront.net/_next/static/media/social_media.62807da0.svg);\n    width: 3.2rem;\n    margin: 0 1.2rem 0 0;\n    height: 3.2rem;\n    background-position: 0;\n    background-size: auto 3.2rem;\n    background-repeat: no-repeat\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_insta__R9wDV {\n    background-position: 0\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_fb__tr_T0 {\n    background-position-x: -4rem\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_linkedIn__DQwks {\n    background-position-x: -8rem\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_twitter__2Zp_k {\n    background-position-x: -12rem\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_yt__GUvsn {\n    background-position-x: -16rem\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_copyright-wrapper__xjE5_ {\n    font-size: 1.4rem;\n    color: #bdbdbd\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_copyright-wrapper__xjE5_ .Footer_copyright__HmTp2 {\n    display: flex;\n    align-items: center\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_copyright-wrapper__xjE5_ .Footer_copyright__HmTp2 {\n        flex-direction:column;\n        align-items: flex-start;\n        font-size: 1.2rem\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_copyright-wrapper__xjE5_ .Footer_copyright__HmTp2 .Footer_info__EWbD8:before {\n    content: \"©\"\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_copyright-wrapper__xjE5_ .Footer_copyright__HmTp2 .Footer_info__EWbD8 {\n        margin-bottom:1rem\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_copyright-wrapper__xjE5_ .Footer_copyright__HmTp2 .Footer_vertical-seperator__imgpZ {\n    background: #bdbdbd;\n    margin: 0 1rem;\n    width: 1px;\n    height: 1.4rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_copyright-wrapper__xjE5_ .Footer_copyright__HmTp2 .Footer_vertical-seperator__imgpZ {\n        display:none\n    }\n}\n\n.MobileMenu_mobile-menu-wrapper__lOrcy {\n    width: 75vw;\n    height: 100vh\n}\n\n.MobileMenu_mobile-menu-wrapper__lOrcy .MobileMenu_mobile-menu-container__dy7Jk {\n    height: 100%;\n    background: #040a1a;\n    z-index: 30\n}\n\n.MobileMenu_mobile-menu-wrapper__lOrcy .MobileMenu_mobile-menu-container__dy7Jk .MobileMenu_close-button__OZs7O {\n    height: -moz-fit-content;\n    height: fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-top: 2rem;\n    padding-right: 3rem;\n    margin-left: auto\n}\n\n.MobileMenu_mobile-menu-wrapper__lOrcy .MobileMenu_mobile-menu-container__dy7Jk .MobileMenu_links-container__b15EE {\n    margin-top: 2.1rem\n}\n\n.MobileMenu_mobile-menu-wrapper__lOrcy .MobileMenu_mobile-menu-container__dy7Jk .MobileMenu_links-container__b15EE .MobileMenu_primary-links__d3xTK,.MobileMenu_mobile-menu-wrapper__lOrcy .MobileMenu_mobile-menu-container__dy7Jk .MobileMenu_links-container__b15EE .MobileMenu_secondary-links__PNWn_ {\n    display: flex;\n    flex-direction: column-reverse\n}\n\n.MobileMenu_mobile-menu-wrapper__lOrcy .MobileMenu_mobile-menu-container__dy7Jk .MobileMenu_links-container__b15EE .MobileMenu_primary-links__d3xTK .MobileMenu_primary-link__Z_tPu,.MobileMenu_mobile-menu-wrapper__lOrcy .MobileMenu_mobile-menu-container__dy7Jk .MobileMenu_links-container__b15EE .MobileMenu_secondary-links__PNWn_ .MobileMenu_secondary-link__wtSWQ {\n    color: #fff;\n    font-weight: 600;\n    font-size: 2rem;\n    line-height: 1.6rem;\n    margin: 2rem 0;\n    text-align: center\n}\n\n.DownloadApp_wrapper__wzCu1 {\n    display: none\n}\n\n@media only screen and (max-width: 1023px) {\n    .DownloadApp_wrapper__wzCu1 {\n        display:unset\n    }\n}\n\n.DownloadApp_wrapper__wzCu1.DownloadApp_hidden__6Wl45 {\n    display: none\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ {\n    display: flex;\n    align-items: center;\n    padding: 1.2rem 1.6rem;\n    background: #f0f3ff\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ .DownloadApp_logo__lxwE0 {\n    display: flex;\n    align-items: center;\n    justify-content: center\n}\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_form-container__deD6R {\n    background: #eef2ff;\n    box-sizing: border-box;\n    width: 42.8rem;\n    position: relative;\n    padding: 4.4rem 4rem 4rem;\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ .DownloadApp_title-subtitle__Fx0R_ {\n    margin-left: 1.2rem\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ .DownloadApp_title-subtitle__Fx0R_ .DownloadApp_title__XuVs_ {\n    font-weight: 600;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    color: #333\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ .DownloadApp_title-subtitle__Fx0R_ .DownloadApp_sub-title__r0fL0 {\n    font-weight: 600;\n    font-size: 12px;\n    line-height: 16px;\n    color: #828282\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ .DownloadApp_download-button__ibtva {\n    margin-left: auto;\n    background-color: #2962ff;\n    padding: .8rem 1.2rem;\n    border-radius: 2.2rem;\n    font-family: inherit;\n    border: none;\n    font-weight: 600;\n    font-size: 1.2rem;\n    line-height: 1.6rem\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ .DownloadApp_download-button__ibtva a {\n    text-decoration: none;\n    color: #fff\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ .DownloadApp_hide-button__mS1s3 {\n    background: none;\n    border: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: .4rem;\n    margin-left: .8rem\n}\n\n.Header_sticky-wrapper__nEs1S {\n    position: sticky;\n    top: 0;\n    width: 100%;\n    z-index: 110\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb {\n    background-color: #040a1a;\n    height: 6.4rem;\n    display: flex;\n    align-items: center\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ {\n    max-width: 150rem;\n    width: 100%;\n    margin-inline:auto;display: flex;\n    align-items: center;\n    justify-content: space-between\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_logo__edXik {\n    display: flex;\n    align-items: center;\n    margin-left: 12rem\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_logo__edXik :hover {\n    cursor: pointer\n}\n\n@media only screen and (max-width: 1023px) {\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_logo__edXik {\n        margin-left:2rem\n    }\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_primary-links-container__0Kzs8 {\n    display: flex;\n    align-items: center;\n    gap: 2.4rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_primary-links-container__0Kzs8 {\n        display:none\n    }\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_primary-links-container__0Kzs8 .Header_primary-link__HgwZ_ {\n    text-decoration: none;\n    color: #fff;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    font-weight: 600;\n    cursor: pointer\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_secondary-links-container__8lyaA {\n    display: flex;\n    align-items: center;\n    margin-right: 12rem;\n    gap: 2.4rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_secondary-links-container__8lyaA {\n        display:none\n    }\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_secondary-links-container__8lyaA .Header_secondary-link__boqSW {\n    text-decoration: none;\n    color: #fff;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    font-weight: 600;\n    cursor: pointer\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_menu-icon__5AGW5 {\n    display: none\n}\n\n@media only screen and (max-width: 1023px) {\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_menu-icon__5AGW5 {\n        display:flex;\n        align-items: center;\n        justify-content: center;\n        margin: 1.6rem\n    }\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_mobile-menu__Ap7DR {\n    display: none\n}\n\n@media only screen and (max-width: 1023px) {\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_mobile-menu__Ap7DR {\n        display:unset;\n        z-index: 110\n    }\n\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_mobile-menu-overlay__x7Tjm {\n        position: fixed;\n        display: block;\n        inset: 0;\n        background-color: rgba(0,0,0,.54)\n    }\n\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_mobile-menu-component__B9xBH {\n        position: fixed;\n        top: 0;\n        right: -75vw;\n        transition: right .1s ease-in-out\n    }\n\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_mobile-menu-component__B9xBH.Header_active__8kMBu {\n        right: 0\n    }\n}\n\n.Explore_explore-container__Xt_dL {\n    box-sizing: border-box;\n    width: 100%;\n    border: .05rem solid #2962ff;\n    border-radius: .8rem;\n    background: #fff;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1.5rem 1.6rem;\n    cursor: pointer\n}\n\n@media only screen and (max-width: 559px) {\n    .Explore_explore-container__Xt_dL {\n        padding:.9rem 1.6rem;\n        background: #eef2ff\n    }\n}\n\n.Explore_explore-container__Xt_dL .Explore_explore-text__cJKgd {\n    font-weight: 600;\n    font-size: 1.2rem;\n    line-height: 1.6rem;\n    color: #2962ff\n}\n\n.Explore_explore-container__Xt_dL .Explore_arrow__XaZgn {\n    display: flex;\n    align-items: center;\n    justify-content: center\n}\n\n.FormInput_container__eKd_P {\n    position: relative\n}\n\n.FormInput_container__eKd_P .FormInput_input-container__Tfl2q {\n    border: .0754808rem solid #ddd;\n    border-radius: .603846rem;\n    background-color: #fff;\n    box-sizing: border-box;\n    padding: 1.2rem 0\n}\n\n@media only screen and (max-width: 559px) {\n    .FormInput_container__eKd_P .FormInput_input-container__Tfl2q {\n        padding:.9rem 0\n    }\n}\n\n.FormInput_container__eKd_P .FormInput_input-container__Tfl2q .FormInput_label-required__A28E4,.FormInput_container__eKd_P .FormInput_input-container__Tfl2q .FormInput_label__rD1_n {\n    font-weight: 600;\n    font-size: 1.2rem;\n    line-height: 1.6rem;\n    color: #333;\n    padding-left: 1.9rem\n}\n\n.FormInput_container__eKd_P .FormInput_input-container__Tfl2q .FormInput_label-required__A28E4.FormInput_error__VpKzj,.FormInput_container__eKd_P .FormInput_input-container__Tfl2q .FormInput_label__rD1_n.FormInput_error__VpKzj {\n    color: #eb5757\n}\n\n@media only screen and (max-width: 559px) {\n    .FormInput_container__eKd_P .FormInput_input-container__Tfl2q .FormInput_label-required__A28E4,.FormInput_container__eKd_P .FormInput_input-container__Tfl2q .FormInput_label__rD1_n {\n        font-size:1rem;\n        line-height: 1.2rem;\n        padding-left: 1.4rem\n    }\n}\n\n.FormInput_container__eKd_P .FormInput_input-container__Tfl2q .FormInput_label-required__A28E4:after {\n    content: \"*\";\n    color: #eb5757;\n    padding-left: .2rem\n}\n\n.FormInput_container__eKd_P .FormInput_error-container__VaXZ9 {\n    position: absolute;\n    font-weight: 600;\n    font-size: 1rem;\n    line-height: 1.6rem;\n    color: #eb5757\n}\n\n.FormInput_submit__icI8k {\n    width: 100%;\n    border-radius: .8rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1.6rem;\n    box-sizing: border-box;\n    border: none\n}\n\n.FormInput_submit-enabled__qOriP {\n    background-color: #2962ff;\n    cursor: pointer\n}\n\n.FormInput_submit-disabled__FNs7m {\n    background-color: rgba(51,51,51,.24)\n}\n\n.FormInput_submit-disabled__FNs7m .FormInput_submit-text__LL1rf,.FormInput_submit-enabled__qOriP .FormInput_submit-text__LL1rf {\n    font-weight: 600;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: #fff;\n    font-family: Titillium Web,sans-serif\n}\n\n.FormInput_submit-disabled__FNs7m .FormInput_submit-arrow-icon__Zz3tC,.FormInput_submit-enabled__qOriP .FormInput_submit-arrow-icon__Zz3tC {\n    display: flex;\n    align-items: center;\n    justify-content: center\n}\n\n.CategorySelector_category-selector-container__AkuP2 {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    justify-content: center;\n    gap: 1.5rem;\n    margin-top: 1rem\n}\n\n@media only screen and (max-width: 559px) {\n    .CategorySelector_category-selector-container__AkuP2 {\n        margin-top:0\n    }\n}\n\n.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1.7rem 3.8rem;\n    box-sizing: border-box;\n    border: .1rem solid rgba(51,51,51,.16);\n    border-radius: .8rem;\n    background: #fff;\n    width: 100%;\n    cursor: pointer\n}\n\n@media only screen and (max-width: 559px) {\n    .CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 {\n        padding:.8rem 1.3rem\n    }\n}\n\n.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14:active,.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14:hover {\n    border-color: #2962ff;\n    transition: border-color .2s ease-in\n}\n\n.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14:active .CategorySelector_arrow-icon-svg__a0c_p,.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14:hover .CategorySelector_arrow-icon-svg__a0c_p {\n    fill: #2962ff;\n    transition: fill .2s ease-in,fill-opacity .2s ease-in;\n    fill-opacity: 1\n}\n\n.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 .CategorySelector_category-image-text__pVzl5 {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    margin-right: 4.6rem\n}\n\n@media only screen and (max-width: 559px) {\n    .CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 .CategorySelector_category-image-text__pVzl5 {\n        margin-right:2rem\n    }\n}\n\n.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 .CategorySelector_category-image-text__pVzl5 .CategorySelector_category-image__zlCOz {\n    display: flex;\n    align-items: center;\n    margin-right: 4.6rem;\n    height: 6rem\n}\n\n@media only screen and (max-width: 559px) {\n    .CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 .CategorySelector_category-image-text__pVzl5 .CategorySelector_category-image__zlCOz {\n        margin-right:-.2rem;\n        transform-origin: center left;\n        scale: 1;\n        height: 5.5rem\n    }\n}\n\n.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 .CategorySelector_category-image-text__pVzl5 .CategorySelector_category-text__cRRzz {\n    font-weight: 600;\n    font-size: 1.8rem;\n    line-height: 2.4rem;\n    color: #333;\n    margin-left: 0\n}\n\n@media only screen and (max-width: 559px) {\n    .CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 .CategorySelector_category-image-text__pVzl5 .CategorySelector_category-text__cRRzz {\n        font-size:1.5rem;\n        line-height: 1.8rem;\n        margin-left: 1rem\n    }\n}\n\n.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 .CategorySelector_arrow-icon__tOM2g {\n    display: flex;\n    align-items: center;\n    transform: rotate(-90deg)\n}\n\n.CategorySelector_change-category-container__Gd9aY {\n    width: 100%;\n    background-color: rgba(47,139,255,.12);\n    border-radius: .8rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1.2rem 1.6rem;\n    box-sizing: border-box\n}\n\n.CategorySelector_change-category-container__Gd9aY .CategorySelector_current-category-text__VzQeO {\n    font-weight: 600;\n    font-size: 1.5rem;\n    line-height: 2.4rem;\n    color: #333\n}\n\n.CategorySelector_change-category-container__Gd9aY .CategorySelector_change-button__a4G8g {\n    all: unset;\n    font-weight: 600;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    color: #2962ff;\n    cursor: pointer\n}\n\n.FareEstimateForms_component-wrapper__pYvyq {\n    height: 100%;\n    display: flex;\n    flex-direction: column\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_change-category__lkhUb {\n    margin-bottom: 1.6rem\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm {\n    display: flex;\n    flex-direction: column;\n    gap: 1.6rem;\n    height: 100%;\n    position: relative\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm input {\n    font-family: inherit;\n    display: block;\n    border: none;\n    outline: none;\n    line-height: 2.4rem;\n    font-size: 1.6rem;\n    text-overflow: ellipsis;\n    width: 100%;\n    background-color: #fff;\n    box-sizing: border-box\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm input::-moz-placeholder {\n    color: rgba(51,51,51,.24);\n    font-family: inherit\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm input:-ms-input-placeholder {\n    color: rgba(51,51,51,.24);\n    font-family: inherit\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm input::placeholder {\n    color: rgba(51,51,51,.24);\n    font-family: inherit\n}\n\n@media only screen and (max-width: 559px) {\n    .FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm input {\n        font-size:1.2rem;\n        line-height: 1.8rem\n    }\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_date-input-wrapper__DTV__,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_drop-input__r3Zzs,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_mobile-input__fOlJd,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_name-input__t8wkI,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_pickup-input__sSniG {\n    padding-inline:1.9rem}\n\n@media only screen and (max-width: 559px) {\n    .FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_date-input-wrapper__DTV__,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_drop-input__r3Zzs,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_mobile-input__fOlJd,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_name-input__t8wkI,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_pickup-input__sSniG {\n        padding-inline:1.4rem\n    }\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_drop-input__r3Zzs.FareEstimateForms_disabled__nZQF8,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_pickup-input__sSniG.FareEstimateForms_disabled__nZQF8 {\n    pointer-events: none\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_drop-input__r3Zzs+div .FareEstimateForms_dropdown-item__Jw9PJ,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_pickup-input__sSniG+div .FareEstimateForms_dropdown-item__Jw9PJ {\n    padding: .9rem 1.9rem;\n    cursor: pointer;\n    font-size: 1.1rem;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    border-bottom: .05rem solid #d3d3d3\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_drop-input__r3Zzs+div .FareEstimateForms_dropdown-item__Jw9PJ:hover,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_pickup-input__sSniG+div .FareEstimateForms_dropdown-item__Jw9PJ:hover {\n    cursor: pointer;\n    background-color: #f3f3f3\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_date-input-wrapper__DTV__ .FareEstimateForms_date-picker__6g5bG {\n    width: 100%\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_date-input-wrapper__DTV__ .FareEstimateForms_date-picker__6g5bG div[class~=MuiInput-underline]:after,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_date-input-wrapper__DTV__ .FareEstimateForms_date-picker__6g5bG div[class~=MuiInput-underline]:before {\n    all: unset\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_date-input-wrapper__DTV__ .FareEstimateForms_date-picker__6g5bG input[class~=MuiInputBase-input] {\n    padding: 0;\n    height: unset\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_submit-container__gnwhh {\n    margin-top: auto\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_form-error-container__j3UdG {\n    position: absolute;\n    bottom: 0;\n    transform: translateY(100%);\n    font-weight: 600;\n    font-size: 1rem;\n    line-height: 1.6rem;\n    color: #eb5757\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ {\n    width: -moz-fit-content;\n    width: fit-content;\n    height: 71.9rem;\n    display: flex;\n    position: relative;\n    overflow: hidden;\n    border-radius: .8rem\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ {\n        width:100%;\n        height: -moz-fit-content;\n        height: fit-content;\n        flex-direction: column;\n        padding: 2.4rem 2.4rem 3.4rem;\n        box-sizing: border-box;\n        background: #f3f3f3;\n        border-radius: .8rem .8rem 0 0\n    }\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z {\n    padding: 5.6rem;\n    background-color: #fff;\n    width: 19.2rem\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z {\n        padding:0;\n        width: -moz-fit-content;\n        width: fit-content;\n        background-color: unset;\n        margin-bottom: 1.5rem\n    }\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_title__qq3il {\n    padding: 0;\n    font-weight: 600;\n    font-size: 4.8rem;\n    line-height: 6.4rem;\n    color: #333;\n    margin: 0 0 2.4rem;\n    display: block\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_title__qq3il {\n        display:none;\n        font-size: 1.8rem;\n        line-height: 2.8rem;\n        margin-bottom: 0\n    }\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_sub-title__w8hD_ {\n    margin: 0;\n    padding: 0;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: rgba(51,51,51,.64);\n    display: block\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_sub-title__w8hD_ {\n        display:none;\n        font-size: 1.4rem;\n        line-height: 2rem\n    }\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_title-mobile__WDoQ2 {\n    padding: 0;\n    font-weight: 600;\n    font-size: 4.8rem;\n    line-height: 6.4rem;\n    color: #333;\n    margin: 0 0 2.4rem;\n    display: none\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_title-mobile__WDoQ2 {\n        display:block;\n        font-size: 1.8rem;\n        line-height: 2.8rem;\n        margin-bottom: 0\n    }\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_sub-title-mobile__884Z6 {\n    margin: 0;\n    padding: 0;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: rgba(51,51,51,.64);\n    display: none\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_sub-title-mobile__884Z6 {\n        display:block;\n        font-size: 1.4rem;\n        line-height: 2rem\n    }\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_form-container__HPjJJ {\n    background: #eef2ff;\n    box-sizing: border-box;\n    width: 49.6rem;\n    position: relative;\n    padding: 6.4rem 4rem 4rem\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_form-container__HPjJJ {\n        background:unset;\n        width: 100%;\n        padding: 0\n    }\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_close-modal-button__l7xB0 {\n    all: unset;\n    cursor: pointer;\n    margin: 2.4rem;\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: flex\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_close-modal-button__l7xB0 {\n        margin:2.2rem 2.4rem\n    }\n}\n\n.LoadingSpinner_loading-wrapper__sfQEW {\n    width: 100%\n}\n\n.LoadingSpinner_loading-wrapper__sfQEW .LoadingSpinner_loading-ellipsis__eXNtX {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n    left: 50%;\n    transform: translateX(-50%)\n}\n\n.LoadingSpinner_loading-wrapper__sfQEW .LoadingSpinner_loading-ellipsis__eXNtX div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: rgba(51,51,51,.64);\n    animation-timing-function: cubic-bezier(0,1,1,0)\n}\n\n.LoadingSpinner_loading-wrapper__sfQEW .LoadingSpinner_loading-ellipsis__eXNtX div:first-child {\n    left: 8px;\n    animation: LoadingSpinner_loading-ellipsis1__Foglf .6s infinite\n}\n\n.LoadingSpinner_loading-wrapper__sfQEW .LoadingSpinner_loading-ellipsis__eXNtX div:nth-child(2) {\n    left: 8px;\n    animation: LoadingSpinner_loading-ellipsis2__AoWKS .6s infinite\n}\n\n.LoadingSpinner_loading-wrapper__sfQEW .LoadingSpinner_loading-ellipsis__eXNtX div:nth-child(3) {\n    left: 32px;\n    animation: LoadingSpinner_loading-ellipsis2__AoWKS .6s infinite\n}\n\n.LoadingSpinner_loading-wrapper__sfQEW .LoadingSpinner_loading-ellipsis__eXNtX div:nth-child(4) {\n    left: 56px;\n    animation: LoadingSpinner_loading-ellipsis3__tjQfc .6s infinite\n}\n\n@keyframes LoadingSpinner_loading-ellipsis1__Foglf {\n    0% {\n        transform: scale(0)\n    }\n\n    to {\n        transform: scale(1)\n    }\n}\n\n@keyframes LoadingSpinner_loading-ellipsis3__tjQfc {\n    0% {\n        transform: scale(1)\n    }\n\n    to {\n        transform: scale(0)\n    }\n}\n\n@keyframes LoadingSpinner_loading-ellipsis2__AoWKS {\n    0% {\n        transform: translate(0)\n    }\n\n    to {\n        transform: translate(24px)\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t {\n    padding: 1rem 0 0;\n    border: unset\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t {\n        padding:.8rem 0 0\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t {\n        border-top:1px solid #f2f2f2;\n        padding: 2rem\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN {\n    width: 100%;\n    margin: 1rem 0 0\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_error-box__VGUa0 div[class~=Mui-error] div[class~=MuiOutlinedInput-notchedOutline] {\n    border-color: #f44336\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_name__160io label {\n    font-size: 1.1rem;\n    transform: translate(1.4rem,1.6rem) scale(1)\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_name__160io label {\n        font-size:.9rem;\n        transform: translate(1.4rem,1.3rem) scale(1)\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_name__160io label {\n        font-size:1.1rem;\n        transform: translate(1.4rem,1.6rem) scale(1)\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_name__160io label[data-shrink=true] {\n    transform: translate(1.4rem,-.3rem) scale(.75)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_name__160io label[class~=Mui-error] {\n    color: rgba(0,0,0,.54)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_name__160io fieldset[class~=MuiOutlinedInput-notchedOutline] {\n    border-color: rgba(0,0,0,.23)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_mobile__B414b label {\n    font-size: 1.1rem;\n    background-color: #fff;\n    padding-right: .6rem;\n    transform: translate(1.4rem,1.6rem) scale(1)\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_mobile__B414b label {\n        font-size:.9rem;\n        transform: translate(1.4rem,1.3rem) scale(1)\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_mobile__B414b label {\n        font-size:1.1rem;\n        transform: translate(1.4rem,1.6rem) scale(1)\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_mobile__B414b label[data-shrink=true] {\n    transform: translate(1.4rem,-.3rem) scale(.75)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_mobile__B414b label[class~=Mui-error] {\n    color: rgba(0,0,0,.54)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_mobile__B414b fieldset[class~=MuiOutlinedInput-notchedOutline] {\n    border-color: rgba(0,0,0,.23)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_mobile__B414b div[class~=text-input-adornment] {\n    display: flex;\n    align-items: center;\n    font-family: Titillium Web;\n    width: 5rem\n}\n\n@media only screen and (min-width: 560px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_city__Wv8ug {\n        width:50%\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_city__Wv8ug label {\n    padding: .3rem .5rem;\n    background-color: #fff;\n    font-size: 1.1rem;\n    transform: translate(1.4rem,1.6rem) scale(1)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_city__Wv8ug label[data-shrink=true] {\n    transform: translate(1.4rem,-.6rem) scale(.75)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_city__Wv8ug div[class~=MuiOutlinedInput-root] {\n    border-radius: 2px;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_city__Wv8ug div[class~=MuiOutlinedInput-root] {\n        height:3.8rem\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_city__Wv8ug div[class~=MuiOutlinedInput-root] {\n        height:4.4rem\n    }\n}\n\n@media only screen and (min-width: 560px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT {\n        margin-left:.6rem;\n        width: 48%\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT label {\n    padding: .3rem .5rem;\n    background-color: #fff;\n    font-size: 1.1rem;\n    transform: translate(1.4rem,1.4rem) scale(1)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT label[data-shrink=true] {\n    transform: translate(1.4rem,-.6rem) scale(.75)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT div[class~=MuiOutlinedInput-root] {\n    border-radius: 2px;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT div[class~=MuiOutlinedInput-root] {\n        height:3.8rem\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT div[class~=MuiOutlinedInput-root] {\n        height:4.4rem\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_info-source__rqLc3 label {\n    padding: .3rem .5rem;\n    background-color: #fff;\n    font-size: 1.1rem;\n    transform: translate(1.4rem,1.4rem) scale(1)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_info-source__rqLc3 label[data-shrink=true] {\n    transform: translate(1.4rem,-.6rem) scale(.75)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_info-source__rqLc3 div[class~=MuiOutlinedInput-root] {\n    border-radius: 2px;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_info-source__rqLc3 div[class~=MuiOutlinedInput-root] {\n        height:3.8rem\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_info-source__rqLc3 div[class~=MuiOutlinedInput-root] {\n        height:4.4rem\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN .PartnersForm_form-input-text__KXgf2 {\n    background: #fff;\n    border-radius: 2px;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN .PartnersForm_form-input-text__KXgf2 {\n        height:3.8rem\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN .PartnersForm_form-input-text__KXgf2 {\n        height:4.4rem\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN div[class~=form-input-select] {\n    width: 100%;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN div[class~=form-input-select] {\n        height:3.8rem\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN div[class~=form-input-select] {\n        height:4.4rem\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t div[class~=form-input] {\n    width: 100%;\n    margin: 0\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t div[class~=input-error-container] {\n    height: 1.5rem;\n    font-size: 1.2rem;\n    font-family: inherit;\n    min-height: 1.2rem;\n    margin-top: .2em;\n    margin-bottom: .2em;\n    font-style: normal;\n    font-weight: 400\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t div[class~=input-error-container] {\n        height:1rem;\n        min-height: 1rem;\n        font-size: 1rem\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t div[class~=input-error-container] {\n        min-height:1.8rem;\n        font-size: 1.2rem;\n        margin: .2rem 0\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t div[class~=input-error-container] div[class~=error] {\n    color: #eb5757;\n    display: flex;\n    align-items: center\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_same-row-fields__BiimE {\n    display: flex\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_same-row-fields__BiimE {\n        flex-direction:column\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t div[class~=form-input-text] {\n    background: #fff;\n    border-radius: 2px;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t div[class~=form-input-text] {\n        height:3.8rem\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t div[class~=form-input-text] {\n        height:4.4rem\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-button__51aip {\n    border: none;\n    border-radius: 2px;\n    background-color: #2962ff!important;\n    color: #fff!important;\n    width: 100%;\n    height: auto;\n    font-size: 1.6rem!important;\n    font-family: inherit;\n    line-height: 100%;\n    padding: 1.6rem 0!important;\n    font-weight: 700;\n    box-shadow: 0 0 2px 0 rgba(0,0,0,.5);\n    margin-top: .8rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-button__51aip {\n        font-size:1.4rem!important;\n        padding: 1.4rem 0!important\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-button__51aip.PartnersForm_request-btn__TmlCY {\n    cursor: pointer\n}\n\n@media only screen and (min-width: 560px) {\n    .PartnersForm_click-handler__7RMSD {\n        margin-left:.6rem;\n        width: 48%\n    }\n\n    .PartnersForm_click-handler__7RMSD .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT {\n        margin-left: 0;\n        width: 100%\n    }\n}\n\n.PartnersForm_click-handler__7RMSD .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT label {\n    padding: .3rem .5rem;\n    background-color: #fff;\n    font-size: 1.1rem;\n    transform: translate(1.4rem,1.4rem) scale(1)\n}\n\n.PartnersForm_click-handler__7RMSD .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT label[data-shrink=true] {\n    transform: translate(1.4rem,-.6rem) scale(.75)\n}\n\n.PartnersForm_click-handler__7RMSD .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT div[class~=MuiOutlinedInput-root] {\n    border-radius: 2px;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_click-handler__7RMSD .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT div[class~=MuiOutlinedInput-root] {\n        height:3.8rem\n    }\n}\n\n.FareEstimateModal_overlay__Un1KE {\n    background-color: rgba(0,0,0,.38);\n    position: fixed;\n    inset: 0;\n    display: flex;\n    overflow: auto\n}\n\n.FareEstimateModal_overlay__Un1KE .FareEstimateModal_modal-container__B7RS9 {\n    padding: 0;\n    margin: auto;\n    width: -moz-fit-content;\n    width: fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    outline: none\n}\n\n@media only screen and (max-width: 559px) {\n    .FareEstimateModal_overlay__Un1KE .FareEstimateModal_modal-container__B7RS9 {\n        width:100%;\n        position: absolute;\n        bottom: 0\n    }\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb {\n    text-align: center;\n    padding: 0;\n    height: -webkit-fill-available;\n    justify-content: space-evenly\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersFormAck_modal-container-ack__DjSZb {\n        padding:2.8rem\n    }\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb.PartnersFormAck_flex-col-align-center__oDp_9 {\n    display: flex;\n    flex-direction: column;\n    align-items: center\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb.PartnersFormAck_flex-col-align-center__oDp_9 .PartnersFormAck_ack__XsSR4 {\n    padding: 2rem\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb.PartnersFormAck_flex-col-align-center__oDp_9 .PartnersFormAck_ack__XsSR4.PartnersFormAck_msg__nEI8N {\n    font-size: 2.4rem\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb.PartnersFormAck_flex-col-align-center__oDp_9 .PartnersFormAck_ack__XsSR4.PartnersFormAck_name__LzZBX {\n    font-size: 2.2rem;\n    font-weight: 700;\n    color: #212121\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb.PartnersFormAck_flex-col-align-center__oDp_9 .PartnersFormAck_ack__XsSR4.PartnersFormAck_desc__x1ojP {\n    font-size: 2rem\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb.PartnersFormAck_flex-col-align-center__oDp_9 .PartnersFormAck_bold-txt-btn__WSzRz {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 2px;\n    box-shadow: 0 0 2px 0 rgba(0,0,0,.5);\n    font-weight: 700;\n    text-decoration: none;\n    cursor: pointer\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb.PartnersFormAck_flex-col-align-center__oDp_9 .PartnersFormAck_bold-txt-btn__WSzRz.PartnersFormAck_request-button__s4gq0 {\n    width: 50%;\n    min-width: 20rem;\n    background: #fff;\n    color: #2962ff;\n    border: 1px solid #2962ff;\n    text-transform: uppercase;\n    font-size: 1.6rem;\n    padding: 1rem;\n    margin: 3rem 0\n}\n\n.VehicleCapacity_vehicle-capacity-container__X1gyj {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    background-color: #ebf4ff;\n    border-radius: .6rem;\n    padding: .2rem .4rem\n}\n\n@media only screen and (max-width: 767px) {\n    .VehicleCapacity_vehicle-capacity-container__X1gyj {\n        border-radius:.4rem\n    }\n}\n\n.VehicleCapacity_vehicle-capacity-container__X1gyj .VehicleCapacity_vehicle-capacity-image-wrapper__TTxaY {\n    margin: auto 0;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center\n}\n\n.VehicleCapacity_vehicle-capacity-container__X1gyj .VehicleCapacity_vehicle-capacity__asClv {\n    font-weight: 600;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: #333;\n    margin: 0 0 0 .3rem\n}\n\n@media only screen and (max-width: 767px) {\n    .VehicleCapacity_vehicle-capacity-container__X1gyj .VehicleCapacity_vehicle-capacity__asClv {\n        font-size:1.4rem;\n        line-height: 2rem;\n        margin: 0 0 0 .1rem\n    }\n}\n\n.AttachVehicleModal_attach-vehicle-modal__XIuW_ {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%,-50%);\n    width: 90%;\n    min-width: 30rem;\n    max-width: 360px;\n    background-color: #fff;\n    box-shadow: 0 24px 38px 0 rgba(0,0,0,.08);\n    border-radius: 2px\n}\n\n.AttachVehicleModal_attach-vehicle-modal__XIuW_:focus {\n    outline: none\n}\n\n.AttachVehicleModal_attach-vehicle-modal__XIuW_ .AttachVehicleModal_modal-container__qv1tQ {\n    position: relative;\n    min-height: 30rem\n}\n\n.AttachVehicleModal_attach-vehicle-modal__XIuW_ .AttachVehicleModal_modal-container__qv1tQ .AttachVehicleModal_attach-form-container__1jRzZ {\n    background-color: #fff\n}\n\n.AttachVehicleModal_attach-vehicle-modal__XIuW_ .AttachVehicleModal_modal-container__qv1tQ .AttachVehicleModal_modal-titlebar__XV_7o {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 16px\n}\n\n.AttachVehicleModal_attach-vehicle-modal__XIuW_ .AttachVehicleModal_modal-container__qv1tQ .AttachVehicleModal_modal-titlebar__XV_7o .AttachVehicleModal_title__sx_6H {\n    font-size: 1.6rem;\n    line-height: 140%\n}\n\n.AttachVehicleModal_attach-vehicle-modal__XIuW_ .AttachVehicleModal_modal-container__qv1tQ .AttachVehicleModal_ack-close-btn__3BxgE {\n    position: absolute;\n    right: 2rem;\n    top: 2rem\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    box-shadow: 0 24px 38px 0 rgba(0,0,0,.08);\n    z-index: 110\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2:focus {\n    outline: none\n}\n\n@media only screen and (min-width: 560px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 {\n        width:auto;\n        top: 55%;\n        bottom: auto;\n        left: 50%;\n        transform: translate(-50%,-55%)\n    }\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc {\n    position: relative;\n    padding: 1.7rem 1rem .5rem;\n    width: 81rem;\n    border-radius: .8rem;\n    background-color: #fff\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc {\n        width:100%;\n        height: 64rem;\n        overflow-y: scroll;\n        padding: 2.4rem;\n        box-sizing: border-box;\n        border-radius: .8rem .8rem 0 0\n    }\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL {\n    margin-inline:auto;margin-bottom: .5rem;\n    text-align: center\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL {\n        position:relative;\n        width: 100%;\n        margin-bottom: 1.6rem;\n        text-align: start\n    }\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL .CitySelectorModal_close-button__9OQAO {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: .5rem;\n    margin-right: 3.7rem;\n    margin-top: 2.9rem;\n    cursor: pointer\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL .CitySelectorModal_close-button__9OQAO {\n        margin:0\n    }\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL .CitySelectorModal_title__tHhus {\n    font-size: 4rem;\n    line-height: 5.6rem;\n    font-weight: 600\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL .CitySelectorModal_title__tHhus {\n        font-size:2rem;\n        line-height: 2.8rem\n    }\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL .CitySelectorModal_sub-title__iGMuh {\n    font-size: 2rem;\n    line-height: 2.8rem;\n    font-weight: 400;\n    color: rgba(51,51,51,.64)\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL .CitySelectorModal_sub-title__iGMuh {\n        font-size:1.4rem;\n        line-height: 2rem\n    }\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container__0xaxG {\n    margin: 1.2rem;\n    padding: 1rem;\n    cursor: pointer;\n    transition: .3s\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container-selected__bthle {\n    border: .2rem solid #006ef5;\n    border-radius: .6rem\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container__0xaxG {\n        margin:0;\n        padding: .6rem .2rem;\n        margin-block:.8rem}\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container__0xaxG .CitySelectorModal_city-image__EiBDS {\n    margin-inline:auto;width: 8rem;\n    height: 8rem;\n    border-radius: .8rem;\n    overflow: hidden;\n    margin-bottom: .8rem\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container__0xaxG .CitySelectorModal_city-image__EiBDS {\n        width:5.6rem;\n        height: 5.6rem;\n        margin-bottom: .4rem\n    }\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container__0xaxG .CitySelectorModal_city-title__CVXw1 {\n    text-align: center;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    font-weight: 600\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container__0xaxG .CitySelectorModal_city-title__CVXw1 {\n        width:7.2rem;\n        font-size: 1.4rem;\n        line-height: 2rem;\n        margin-inline:auto}\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container__0xaxG:hover {\n    transform: scale(1.05)\n}\n\n.VehicleDetails_title-container__KoZSb {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-items: flex-start;\n    padding: 5.6rem;\n    background-color: #fff;\n    width: 36rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb {\n        padding:0;\n        width: 100%;\n        background-color: unset;\n        margin-bottom: .8rem\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq {\n        display:flex;\n        flex-direction: row;\n        justify-content: flex-start;\n        margin-bottom: 2rem\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-image__jxN3a {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-weight-desktop__Owqfe {\n    margin-top: 2rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-weight-desktop__Owqfe {\n        display:none\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd {\n    margin-top: .5rem;\n    margin-bottom: 2rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd {\n        display:flex;\n        flex-direction: column;\n        justify-content: center;\n        margin: 0 0 0 2rem\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd .VehicleDetails_vehicle-name__TwMXA {\n    font-weight: 600;\n    font-size: 2.4rem;\n    line-height: 3.2rem;\n    color: #2d2f34;\n    margin: 0;\n    text-align: center\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd .VehicleDetails_vehicle-name__TwMXA {\n        text-align:left;\n        font-size: 1.4rem;\n        line-height: 2rem\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd .VehicleDetails_vehicle-fare__Tt8Cl p {\n    font-weight: 400;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: #2d2f34;\n    margin: .1rem 0 0;\n    text-align: center\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd .VehicleDetails_vehicle-fare__Tt8Cl p {\n        text-align:left;\n        font-size: 1.2rem;\n        line-height: 1.6rem;\n        margin: .4rem 0 0\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd .VehicleDetails_vehicle-weight-mobile__rA9ML {\n    display: none;\n    margin-top: 2rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd .VehicleDetails_vehicle-weight-mobile__rA9ML {\n        display:block;\n        margin-top: .8rem;\n        width: -moz-fit-content;\n        width: fit-content\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_divider__4Ch7T {\n    width: 100%;\n    border-bottom: .1rem solid rgba(78,82,91,.12)\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS {\n    margin-top: 1.8rem;\n    width: 100%\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-section-title__ryt2g {\n    margin: 0;\n    font-weight: 600;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    color: #2d2f34\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-wrapper__ZntQf {\n    margin-top: .8rem;\n    display: grid;\n    grid-template-columns: repeat(1,1fr);\n    width: 100%;\n    align-items: center\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-wrapper__ZntQf {\n        grid-template-columns:repeat(2,1fr)\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-wrapper__ZntQf .VehicleDetails_best-for__8_39F {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 1.2rem\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-wrapper__ZntQf .VehicleDetails_best-for__8_39F .VehicleDetails_best-for-image__ZsSkM {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-wrapper__ZntQf .VehicleDetails_best-for__8_39F .VehicleDetails_best-for-title__R14mh {\n    margin: 0 0 0 .8rem;\n    font-weight: 400;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    color: #2d2f34;\n    text-align: left;\n    width: 100%\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_divider-mobile__9GSbM {\n    display: none\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_divider-mobile__9GSbM {\n        display:block;\n        width: 100%;\n        border-bottom: .1rem solid rgba(78,82,91,.12)\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_title-mobile__0_qDh {\n    display: none\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_title-mobile__0_qDh {\n        display:block;\n        text-align: left;\n        width: 100%;\n        margin: 2rem 0 0\n    }\n}\n\n@media only screen and (max-width: 1023px) {\n    .VehicleFareEstimateInput_container__ve1CJ {\n        width:100%\n    }\n}\n\n.VehicleFareEstimateInput_container__ve1CJ .VehicleFareEstimateInput_input-container__c_LeO {\n    background-color: #fff;\n    padding: 1.2rem 0;\n    width: 18rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .VehicleFareEstimateInput_container__ve1CJ .VehicleFareEstimateInput_input-container__c_LeO {\n        padding:.9rem 0;\n        width: 100%;\n        border: .07rem solid #ddd;\n        border-radius: .6rem\n    }\n}\n\n.VehicleFareEstimateInput_container__ve1CJ .VehicleFareEstimateInput_input-container__c_LeO .VehicleFareEstimateInput_label-required__7c_BR,.VehicleFareEstimateInput_container__ve1CJ .VehicleFareEstimateInput_input-container__c_LeO .VehicleFareEstimateInput_label__nM4lw {\n    font-weight: 600;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    color: #2d2f34;\n    padding-left: 2rem\n}\n\n.VehicleFareEstimateInput_container__ve1CJ .VehicleFareEstimateInput_input-container__c_LeO .VehicleFareEstimateInput_label-required__7c_BR:after {\n    content: \"*\";\n    color: #eb5757;\n    padding-left: .2rem\n}\n\n.VehicleFareEstimateInput_container__ve1CJ .VehicleFareEstimateInput_error-container__wkck8 {\n    position: absolute;\n    font-weight: 600;\n    font-size: 1rem;\n    line-height: 1.6rem;\n    color: #eb5757;\n    margin: 0 2rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .VehicleFareEstimateInput_container__ve1CJ .VehicleFareEstimateInput_error-container__wkck8 {\n        margin:0\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 {\n    width: -moz-fit-content;\n    width: fit-content;\n    height: 60rem;\n    display: flex;\n    position: relative;\n    overflow: hidden;\n    border-radius: .8rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 {\n        width:100%;\n        height: -moz-fit-content;\n        height: fit-content;\n        flex-direction: column;\n        padding: 2.4rem;\n        box-sizing: border-box;\n        background: #fcfcfc;\n        border-radius: .8rem .8rem 0 0;\n        overflow-y: auto\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x {\n    padding: 5.6rem;\n    background-color: #fff;\n    width: 22.4rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x {\n        padding:0;\n        width: -moz-fit-content;\n        width: fit-content;\n        background-color: unset;\n        margin-bottom: 1.5rem\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_title__6Mx3f {\n    padding: 0;\n    font-weight: 600;\n    font-size: 4.8rem;\n    line-height: 6.4rem;\n    color: #333;\n    margin: 0 0 2.4rem;\n    display: block\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_title__6Mx3f {\n        display:none;\n        font-size: 1.8rem;\n        line-height: 2.8rem;\n        margin-bottom: 0\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_sub-title__0_BHK {\n    margin: 0;\n    padding: 0;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: rgba(51,51,51,.64);\n    display: block\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_sub-title__0_BHK {\n        display:none;\n        font-size: 1.4rem;\n        line-height: 2rem\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_title-mobile__fnDsZ {\n    padding: 0;\n    font-weight: 600;\n    font-size: 4.8rem;\n    line-height: 6.4rem;\n    color: #333;\n    margin: 0 0 2.4rem;\n    display: none\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_title-mobile__fnDsZ {\n        display:block;\n        font-size: 1.8rem;\n        line-height: 2.8rem;\n        margin-bottom: 0\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_sub-title-mobile__Pfdz7 {\n    margin: 0;\n    padding: 0;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: rgba(51,51,51,.64);\n    display: none\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_sub-title-mobile__Pfdz7 {\n        display:block;\n        font-size: 1.4rem;\n        line-height: 2rem\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_form-container__deD6R {\n    background: #eef2ff;\n    box-sizing: border-box;\n    width: 42.8rem;\n    position: relative;\n    padding: 4.4rem 4rem 4rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_form-container__deD6R {\n        background:unset;\n        width: 100%;\n        padding: 0\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_close-modal-button__kTebR {\n    all: unset;\n    cursor: pointer;\n    margin: 2.4rem;\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: flex\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_close-modal-button__kTebR {\n        margin-top:2.5rem;\n        margin-right: 1.9rem\n    }\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd {\n    padding: 3.2rem 2.4rem;\n    border-top: .025rem solid rgba(78,82,91,.36);\n    border-radius: 0 .8rem .8rem .8rem;\n    filter: drop-shadow(0 .4rem 1.6rem rgba(0,0,0,.08));\n    background-color: #fff;\n    width: -moz-fit-content;\n    width: fit-content\n}\n\n@media only screen and (max-width: 1023px) {\n    .VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd {\n        filter:none;\n        background-color: transparent;\n        background-color: initial;\n        padding: 0;\n        width: auto\n    }\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_modal-title__Bp6M3 {\n    display: none\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center\n}\n\n@media only screen and (max-width: 1023px) {\n    .VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj {\n        display:flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        gap: 1.8rem\n    }\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj .VehicleFareEstimateForm_divider__lp0JR {\n    display: block;\n    border: none;\n    border-left: .1rem solid #ddd;\n    height: 5.6rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj .VehicleFareEstimateForm_divider__lp0JR {\n        display:none\n    }\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj input {\n    border: none;\n    outline: none;\n    font-family: inherit;\n    line-height: 1.8rem;\n    font-size: 1.2rem;\n    font-weight: 400;\n    text-overflow: ellipsis;\n    width: 80%;\n    background-color: #fff;\n    margin: .2rem 1.9rem;\n    padding: 0\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj input::-moz-placeholder {\n    color: rgba(51,51,51,.412);\n    font-family: inherit\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj input:-ms-input-placeholder {\n    color: rgba(51,51,51,.412);\n    font-family: inherit\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj input::placeholder {\n    color: rgba(51,51,51,.412);\n    font-family: inherit\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj .VehicleFareEstimateForm_submit-button-wrapper__6w1k2 .VehicleFareEstimateForm_submit-container__nsP72 {\n    width: 22rem;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj .VehicleFareEstimateForm_submit-button-wrapper__6w1k2 .VehicleFareEstimateForm_submit-container__nsP72 {\n        width:100%;\n        height: 5.6rem\n    }\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj .VehicleFareEstimateForm_submit-button-wrapper__6w1k2 .VehicleFareEstimateForm_submit-button-error__fluro {\n    position: absolute;\n    bottom: 1.5rem;\n    color: #eb5757;\n    font-weight: 600;\n    font-size: 1rem;\n    line-height: 1.6rem\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form-loader__2imIz {\n    width: 94.3rem;\n    height: 6.6rem\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_drop-input__f7RVx+div .VehicleFareEstimateForm_dropdown-item__SWVlc,.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_pickup-input__zZvaq+div .VehicleFareEstimateForm_dropdown-item__SWVlc {\n    padding: .9rem 1.9rem;\n    cursor: pointer;\n    font-size: 1.1rem;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    border-bottom: .05rem solid #d3d3d3\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_drop-input__f7RVx+div .VehicleFareEstimateForm_dropdown-item__SWVlc:hover,.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_pickup-input__zZvaq+div .VehicleFareEstimateForm_dropdown-item__SWVlc:hover {\n    cursor: pointer;\n    background-color: #f3f3f3\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk {\n    padding: 0;\n    margin: 0 auto;\n    height: -moz-max-content;\n    height: max-content\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk {\n        padding:0\n    }\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_modal-title__3rSMj {\n    font-weight: 600;\n    font-size: 2.4rem;\n    line-height: 3.2rem;\n    margin: 0;\n    color: #2d2f34\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_modal-title__3rSMj {\n        display:none\n    }\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 1.6rem;\n    margin-top: 1.2rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz {\n        margin-top:0;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        gap: 1.8rem\n    }\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz .VehicleFareEstimateFormModal_divider__MhYty {\n    display: none\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz input {\n    border: none;\n    outline: none;\n    font-family: inherit;\n    line-height: 2.4rem;\n    font-size: 1.6rem;\n    font-weight: 400;\n    text-overflow: ellipsis;\n    width: 90%;\n    background-color: #fff;\n    margin: .2rem 1.9rem 0;\n    padding: 0\n}\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_form-container__deD6R {\n    background: #eef2ff;\n    box-sizing: border-box;\n    width: 42.8rem;\n    position: relative;\n    padding: 4.4rem 4rem 4rem;\n}\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz input {\n        font-size:1.2rem;\n        line-height: 1.8rem;\n        margin: .2rem 1.4rem 0\n    }\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz input::-moz-placeholder {\n    color: rgba(51,51,51,.412);\n    font-family: inherit\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz input:-ms-input-placeholder {\n    color: rgba(51,51,51,.412);\n    font-family: inherit\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz input::placeholder {\n    color: rgba(51,51,51,.412);\n    font-family: inherit\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz .VehicleFareEstimateFormModal_submit-button-wrapper__wXj81 {\n    position: relative;\n    top: 9rem;\n    width: 100%\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz .VehicleFareEstimateFormModal_submit-button-wrapper__wXj81 {\n        position:static;\n        width: 100%\n    }\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz .VehicleFareEstimateFormModal_submit-button-wrapper__wXj81 .VehicleFareEstimateFormModal_submit-container__qL_IG {\n    height: 5.6rem\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz .VehicleFareEstimateFormModal_submit-button-wrapper__wXj81 .VehicleFareEstimateFormModal_submit-button-error__e9IDo {\n    position: absolute;\n    bottom: -1.7rem;\n    color: #eb5757;\n    font-weight: 600;\n    font-size: 1rem;\n    line-height: 1.6rem\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_drop-input__BjYO5+div .VehicleFareEstimateFormModal_dropdown-item__dxA4c,.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_pickup-input__NRKfU+div .VehicleFareEstimateFormModal_dropdown-item__dxA4c {\n    padding: .9rem 1.9rem;\n    cursor: pointer;\n    font-size: 1.1rem;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    border-bottom: .05rem solid #d3d3d3;\n    width: 100%\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_drop-input__BjYO5+div .VehicleFareEstimateFormModal_dropdown-item__dxA4c:hover,.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_pickup-input__NRKfU+div .VehicleFareEstimateFormModal_dropdown-item__dxA4c:hover {\n    cursor: pointer;\n    background-color: #f3f3f3\n}\n\n.VehicleFareEstimateInputModal_container__OQtPn {\n    width: 100%\n}\n\n.VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_input-container__qWzOQ {\n    background-color: #fff;\n    padding: .975rem 0;\n    border: .1rem solid #ddd;\n    border-radius: .8rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_input-container__qWzOQ {\n        padding:.9rem 0;\n        width: 100%;\n        border: .07rem solid #ddd;\n        border-radius: .6rem\n    }\n}\n\n.VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_input-container__qWzOQ .VehicleFareEstimateInputModal_label-required__lAQ8d,.VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_input-container__qWzOQ .VehicleFareEstimateInputModal_label__MyfNR {\n    font-weight: 600;\n    font-size: 1.2rem;\n    line-height: 1.6rem;\n    color: #2d2f34;\n    padding-left: 2rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_input-container__qWzOQ .VehicleFareEstimateInputModal_label-required__lAQ8d,.VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_input-container__qWzOQ .VehicleFareEstimateInputModal_label__MyfNR {\n        font-size:1rem;\n        line-height: 1.2rem;\n        padding-left: 1.4rem\n    }\n}\n\n.VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_input-container__qWzOQ .VehicleFareEstimateInputModal_label-required__lAQ8d:after {\n    content: \"*\";\n    color: #eb5757;\n    padding-left: .2rem\n}\n\n.VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_error-container__ATPh2 {\n    position: absolute;\n    font-weight: 600;\n    font-size: 1rem;\n    line-height: 1.6rem;\n    color: #eb5757;\n    margin: 0\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_error-container__ATPh2 {\n        margin:0\n    }\n}\n\n  </style>\n\n <div class=\"VehicleModalLayout_estimate-layout-container__opyh2\"><section class=\"VehicleDetails_title-container__KoZSb\"><div class=\"VehicleDetails_vehicle__5XxLq\"><div class=\"VehicleDetails_vehicle-image__jxN3a\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27226%27%20height=%27140%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"Tata Ace\" srcset=\"https://d3apkeya39jz4k.cloudfront.net/tata_ace_2deb9441fd.svg 1x, https://d3apkeya39jz4k.cloudfront.net/tata_ace_2deb9441fd.svg 2x\" src=\"https://d3apkeya39jz4k.cloudfront.net/tata_ace_2deb9441fd.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></div><div class=\"VehicleDetails_vehicle-weight-desktop__Owqfe\"><div class=\"VehicleCapacity_vehicle-capacity-container__X1gyj\"><div class=\"VehicleCapacity_vehicle-capacity-image-wrapper__TTxaY\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2716%27%20height=%2716%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"Vehicle Capacity Icon\" srcset=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/fare-estimate-result/weight.svg 1x, https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/fare-estimate-result/weight.svg 2x\" src=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/fare-estimate-result/weight.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></div><p class=\"VehicleCapacity_vehicle-capacity__asClv\">750kg</p></div></div><div class=\"VehicleDetails_vehicle-text__5sEtd\"><h3 class=\"VehicleDetails_vehicle-name__TwMXA\">Tata Ace</h3><div class=\"VehicleDetails_vehicle-fare__Tt8Cl\"><p>Starting from <strong>₹230</strong></p></div><div class=\"VehicleDetails_vehicle-weight-mobile__rA9ML\"><div class=\"VehicleCapacity_vehicle-capacity-container__X1gyj\"><div class=\"VehicleCapacity_vehicle-capacity-image-wrapper__TTxaY\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2716%27%20height=%2716%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"Vehicle Capacity Icon\" srcset=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/fare-estimate-result/weight.svg 1x, https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/fare-estimate-result/weight.svg 2x\" src=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/fare-estimate-result/weight.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></div><p class=\"VehicleCapacity_vehicle-capacity__asClv\">750kg</p></div></div></div></div><div class=\"VehicleDetails_divider__4Ch7T\"></div><div class=\"VehicleDetails_best-for-section-wrapper__bm_LS\"><h3 class=\"VehicleDetails_best-for-section-title__ryt2g\">Best for sending:</h3><div class=\"VehicleDetails_best-for-wrapper__ZntQf\"><div class=\"VehicleDetails_best-for__8_39F\"><div class=\"VehicleDetails_best-for-image__ZsSkM\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"Fruits and Vegetables\" srcset=\"https://d3apkeya39jz4k.cloudfront.net/liquor_11515f1904.svg 1x, https://d3apkeya39jz4k.cloudfront.net/liquor_11515f1904.svg 2x\" src=\"https://d3apkeya39jz4k.cloudfront.net/liquor_11515f1904.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></div><p class=\"VehicleDetails_best-for-title__R14mh\">Fruits and Vegetables</p></div><div class=\"VehicleDetails_best-for__8_39F\"><div class=\"VehicleDetails_best-for-image__ZsSkM\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"Chemicals\" srcset=\"https://d3apkeya39jz4k.cloudfront.net/science_e408f394d6.svg 1x, https://d3apkeya39jz4k.cloudfront.net/science_e408f394d6.svg 2x\" src=\"https://d3apkeya39jz4k.cloudfront.net/science_e408f394d6.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></div><p class=\"VehicleDetails_best-for-title__R14mh\">Chemicals</p></div><div class=\"VehicleDetails_best-for__8_39F\"><div class=\"VehicleDetails_best-for-image__ZsSkM\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"FMGC Food Products\" srcset=\"https://d3apkeya39jz4k.cloudfront.net/liquor_11515f1904.svg 1x, https://d3apkeya39jz4k.cloudfront.net/liquor_11515f1904.svg 2x\" src=\"https://d3apkeya39jz4k.cloudfront.net/liquor_11515f1904.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></div><p class=\"VehicleDetails_best-for-title__R14mh\">FMGC Food Products</p></div></div></div><div class=\"VehicleDetails_divider-mobile__9GSbM\"></div><h2 class=\"VehicleDetails_title-mobile__0_qDh\">Your Quick Quote</h2></section><section class=\"VehicleModalLayout_form-container__deD6R\"><div class=\"VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk\"><h2 class=\"VehicleFareEstimateFormModal_modal-title__3rSMj\">Get an Estimate</h2><form class=\"VehicleFareEstimateFormModal_fare-estimate-form__MTntz\"><div class=\"VehicleFareEstimateInputModal_container__OQtPn\"><div class=\"VehicleFareEstimateInputModal_input-container__qWzOQ\"><label class=\"VehicleFareEstimateInputModal_label-required__lAQ8d \n            \" for=\"Pickup Location\">Pickup Location</label><div style=\"display: block; position: relative;\"><input placeholder=\"enter pick up location\" id=\"custom-autocomplete-pickup-address-0.8037524639757163\" class=\"VehicleFareEstimateFormModal_pickup-input__NRKfU \" role=\"combobox\" aria-autocomplete=\"list\" aria-expanded=\"false\" autocomplete=\"off\" value=\"\" onfocus=\"this.setAttribute('autocomplete', 'chrome-off' );\"></div></div></div><div class=\"VehicleFareEstimateFormModal_divider__MhYty\"></div><div class=\"VehicleFareEstimateInputModal_container__OQtPn\"><div class=\"VehicleFareEstimateInputModal_input-container__qWzOQ\"><label class=\"VehicleFareEstimateInputModal_label-required__lAQ8d \n            \" for=\"Drop Location\">Drop Location</label><div style=\"display: block; position: relative;\"><input placeholder=\"enter drop location\" id=\"custom-autocomplete-pickup-address-0.633350466237725\" class=\"VehicleFareEstimateFormModal_drop-input__BjYO5 \" role=\"combobox\" aria-autocomplete=\"list\" aria-expanded=\"false\" autocomplete=\"off\" value=\"\" onfocus=\"this.setAttribute('autocomplete', 'chrome-off' );\"></div></div></div><div class=\"VehicleFareEstimateFormModal_divider__MhYty\"></div><div class=\"VehicleFareEstimateInputModal_container__OQtPn\"><div class=\"VehicleFareEstimateInputModal_input-container__qWzOQ\"><label class=\"VehicleFareEstimateInputModal_label-required__lAQ8d \n            \" for=\"Phone Number\">Phone Number</label><input placeholder=\"enter your phone number\" type=\"tel\" value=\"\"></div></div><div class=\"VehicleFareEstimateFormModal_divider__MhYty\"></div><div class=\"VehicleFareEstimateInputModal_container__OQtPn\"><div class=\"VehicleFareEstimateInputModal_input-container__qWzOQ\"><label class=\"VehicleFareEstimateInputModal_label__MyfNR \n            \" for=\"Name\">Name</label><input placeholder=\"enter your name\" type=\"text\" value=\"\"></div></div><div class=\"VehicleFareEstimateFormModal_submit-button-wrapper__wXj81\"><button class=\"FormInput_submit__icI8k FormInput_submit-enabled__qOriP VehicleFareEstimateFormModal_submit-container__qL_IG\"><div class=\"FormInput_submit-text__LL1rf\">Get an Estimate</div><div class=\"FormInput_submit-arrow-icon__Zz3tC\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2716%27%20height=%2716%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"Right Arrow Icon\" srcset=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/common/submit_arrow_16.svg 1x, https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/common/submit_arrow_16.svg 2x\" src=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/common/submit_arrow_16.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></div></button></div></form></div></section><button class=\"VehicleModalLayout_close-modal-button__kTebR\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2724%27%20height=%2724%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"close\" srcset=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/common/cross_24.svg 1x, https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/common/cross_24.svg 2x\" src=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/common/cross_24.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></button></div>\n\n            \n           ";
      /***/
    },

    /***/
    "CzbP":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footers/footer/footer.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CzbP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<footer class=\"relative bg-blueGray-200 pt-8 pb-6\">\n  <div\n    class=\"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20\"\n    style=\"transform: translateZ(0)\"\n  >\n    <svg\n      class=\"absolute bottom-0 overflow-hidden\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      preserveAspectRatio=\"none\"\n      version=\"1.1\"\n      viewBox=\"0 0 2560 100\"\n      x=\"0\"\n      y=\"0\"\n    >\n      <polygon\n        class=\"text-blueGray-200 fill-current\"\n        points=\"2560 0 2560 100 0 100\"\n      ></polygon>\n    </svg>\n  </div>\n  <div class=\"container mx-auto px-4\">\n    <div class=\"flex flex-wrap text-center lg:text-left\">\n      <div class=\"w-full lg:w-6/12 px-4\">\n        <h4 class=\"text-3xl font-semibold\">Let's keep in touch!</h4>\n        <h5 class=\"text-lg mt-0 mb-2 text-blueGray-600\">\n          Find us on any of these platforms, we respond 1-2 business days.\n        </h5>\n        <div class=\"mt-6 lg:mb-0 mb-6\">\n          <button\n            class=\"bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2\"\n            type=\"button\"\n          >\n            <i class=\"fab fa-twitter\"></i>\n          </button>\n          <button\n            class=\"bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2\"\n            type=\"button\"\n          >\n            <i class=\"fab fa-facebook-square\"></i>\n          </button>\n          <button\n            class=\"bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2\"\n            type=\"button\"\n          >\n            <i class=\"fab fa-dribbble\"></i>\n          </button>\n          <button\n            class=\"bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2\"\n            type=\"button\"\n          >\n            <i class=\"fab fa-github\"></i>\n          </button>\n        </div>\n      </div>\n      <div class=\"w-full lg:w-6/12 px-4\">\n        <div class=\"flex flex-wrap items-top mb-6\">\n          <div class=\"w-full lg:w-4/12 px-4 ml-auto\">\n            <span\n              class=\"block uppercase text-blueGray-500 text-sm font-semibold mb-2\"\n            >\n              Useful Links\n            </span>\n            <ul class=\"list-unstyled\">\n              <li>\n                <a\n                  class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\"\n                  href=\"https://www.creative-tim.com/presentation?ref=na-footer\"\n                >\n                  About Us\n                </a>\n              </li>\n              <li>\n                <a\n                  class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\"\n                  href=\"https://blog.creative-tim.com?ref=na-footer\"\n                >\n                  Blog\n                </a>\n              </li>\n              <li>\n                <a\n                  class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\"\n                  href=\"https://www.github.com/creativetimofficial?ref=na-footer\"\n                >\n                  Github\n                </a>\n              </li>\n              <li>\n                <a\n                  class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\"\n                  href=\"https://www.creative-tim.com/bootstrap-themes/free?ref=na-footer\"\n                >\n                  Free Products\n                </a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"w-full lg:w-4/12 px-4\">\n            <span\n              class=\"block uppercase text-blueGray-500 text-sm font-semibold mb-2\"\n            >\n              Other Resources\n            </span>\n            <ul class=\"list-unstyled\">\n              <li>\n                <a\n                  class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\"\n                  href=\"https://github.com/creativetimofficial/notus-angular/blob/main/LICENSE.md?ref=creativetim\"\n                >\n                  MIT License\n                </a>\n              </li>\n              <li>\n                <a\n                  class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\"\n                  href=\"https://creative-tim.com/terms?ref=na-footer\"\n                >\n                  Terms & Conditions\n                </a>\n              </li>\n              <li>\n                <a\n                  class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\"\n                  href=\"https://creative-tim.com/privacy?ref=na-footer\"\n                >\n                  Privacy Policy\n                </a>\n              </li>\n              <li>\n                <a\n                  class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\"\n                  href=\"https://creative-tim.com/contact-us?ref=na-footer\"\n                >\n                  Contact Us\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <hr class=\"my-6 border-blueGray-300\" />\n    <div class=\"flex flex-wrap items-center md:justify-between justify-center\">\n      <div class=\"w-full md:w-4/12 px-4 mx-auto text-center\">\n        <div class=\"text-sm text-blueGray-500 font-semibold py-1\">\n          Copyright © {{ date }} Notus Angular by\n          <a\n            href=\"https://www.creative-tim.com?ref=na-footer\"\n            class=\"text-blueGray-500 hover:text-blueGray-800\"\n          >\n            Creative Tim\n          </a>\n          .\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n";
      /***/
    },

    /***/
    "DLfO":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footers/footer-small/footer-small.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DLfO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<footer\n  class=\"pb-6\"\n  [ngClass]=\"absolute ? 'absolute w-full bottom-0 bg-blueGray-800' : 'relative'\"\n>\n  <div class=\"container mx-auto px-4\">\n    <hr class=\"mb-6 border-b-1 border-blueGray-600\" />\n    <div class=\"flex flex-wrap items-center md:justify-between justify-center\">\n      <div class=\"w-full md:w-4/12 px-4\">\n        <div\n          class=\"text-sm text-white font-semibold py-1 text-center md:text-left\"\n        >\n          Copyright © {{ date }}\n          <a\n            href=\"https://www.creative-tim.com?ref=na-footer-small\"\n            class=\"text-white hover:text-blueGray-300 text-sm font-semibold py-1\"\n          >\n            Creative Tim\n          </a>\n        </div>\n      </div>\n      <div class=\"w-full md:w-8/12 px-4\">\n        <ul class=\"flex flex-wrap list-none md:justify-end justify-center\">\n          <li>\n            <a\n              href=\"https://www.creative-tim.com?ref=na-footer-small\"\n              class=\"text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3\"\n            >\n              Creative Tim\n            </a>\n          </li>\n          <li>\n            <a\n              href=\"https://www.creative-tim.com/presentation?ref=na-footer-small\"\n              class=\"text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3\"\n            >\n              About Us\n            </a>\n          </li>\n          <li>\n            <a\n              href=\"http://blog.creative-tim.com?ref=na-footer-small\"\n              class=\"text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3\"\n            >\n              Blog\n            </a>\n          </li>\n          <li>\n            <a\n              href=\"https://github.com/creativetimofficial/notus-angular/blob/main/LICENSE.md?ref=creativetim\"\n              class=\"text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3\"\n            >\n              MIT License\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n";
      /***/
    },

    /***/
    "EbUq":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footers/footer-admin/footer-admin.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EbUq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<footer class=\"block py-4\">\n  <div class=\"container mx-auto px-4\">\n    <hr class=\"mb-4 border-b-1 border-blueGray-200\" />\n    <div class=\"flex flex-wrap items-center md:justify-between justify-center\">\n      <div class=\"w-full md:w-4/12 px-4\">\n        <div\n          class=\"text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left\"\n        >\n          Copyright © {{ date }}\n          <a\n            href=\"https://www.creative-tim.com?ref=na-footer-admin\"\n            class=\"text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1\"\n          >\n            Creative Tim\n          </a>\n        </div>\n      </div>\n      <div class=\"w-full md:w-8/12 px-4\">\n        <ul class=\"flex flex-wrap list-none md:justify-end justify-center\">\n          <li>\n            <a\n              href=\"https://www.creative-tim.com?ref=na-footer-admin\"\n              class=\"text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3\"\n            >\n              Creative Tim\n            </a>\n          </li>\n          <li>\n            <a\n              href=\"https://www.creative-tim.com/presentation?ref=na-footer-admin\"\n              class=\"text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3\"\n            >\n              About Us\n            </a>\n          </li>\n          <li>\n            <a\n              href=\"http://blog.creative-tim.com?ref=na-footer-admin\"\n              class=\"text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3\"\n            >\n              Blog\n            </a>\n          </li>\n          <li>\n            <a\n              href=\"https://github.com/creativetimofficial/notus-angular/blob/main/LICENSE.md?ref=creativetim\"\n              class=\"text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3\"\n            >\n              MIT License\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n";
      /***/
    },

    /***/
    "H3xT":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/user-dropdown/user-dropdown.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function H3xT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<a\n  class=\"text-blueGray-500 block\"\n  href=\"#pablo\"\n  (click)=\"toggleDropdown($event)\"\n  #btnDropdownRef\n>\n  <div class=\"items-center flex\">\n    <span\n      class=\"w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full\"\n    >\n      <img\n        alt=\"...\"\n        class=\"w-full rounded-full align-middle border-none shadow-lg\"\n        src=\"assets/img/team-1-800x800.jpg\"\n      />\n    </span>\n  </div>\n</a>\n<div class=\"min-w-48 z-50\" #popoverDropdownRef>\n  <div\n    class=\"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48\"\n    [ngClass]=\"dropdownPopoverShow ? 'block' : 'hidden'\"\n  >\n    <a\n      href=\"#pablo\"\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n    >\n      Action\n    </a>\n    <a\n      href=\"#pablo\"\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n    >\n      Another action\n    </a>\n    <a\n      href=\"#pablo\"\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n    >\n      Something else here\n    </a>\n    <div class=\"h-0 my-2 border border-solid border-blueGray-100\"></div>\n    <a\n      href=\"#pablo\"\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n    >\n      Seprated link\n    </a>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "HEly":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-stats/card-stats.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HEly(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div\n  class=\"relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg\"\n>\n  <div class=\"flex-auto p-4\">\n    <div class=\"flex flex-wrap\">\n      <div class=\"relative w-full pr-4 max-w-full flex-grow flex-1\">\n        <h5 class=\"text-blueGray-400 uppercase font-bold text-xs\">\n          {{ statSubtitle }}\n        </h5>\n        <span class=\"font-semibold text-xl text-blueGray-700\">\n          {{ statTitle }}\n        </span>\n      </div>\n      <div class=\"relative w-auto pl-4 flex-initial\">\n        <div\n          class=\"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full\"\n          [ngClass]=\"[statIconColor]\"\n        >\n          <i [ngClass]=\"statIconName\"></i>\n        </div>\n      </div>\n    </div>\n    <p class=\"text-sm text-blueGray-400 mt-4\">\n      <span class=\"mr-2\" [ngClass]=\"statPercentColor\">\n        <i\n          [ngClass]=\"\n            statArrow === 'up' ? 'fas fa-arrow-up' : 'fas fa-arrow-down'\n          \"\n        ></i>\n        {{ statPercent }}%\n      </span>\n      <span class=\"whitespace-nowrap\">{{ statDescripiron }}</span>\n    </p>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "IfgA":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/landing/bike/bike.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function IfgA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-auth-navbar></app-auth-navbar>\n\n<style>\n    .VehicleSectionHeading_section-header-wrapper__2Kvi_ .VehicleSectionHeading_section-header__qqdXl {\n    margin: 0 1rem;\n    font-size: 2.4rem;\n    line-height: 3.2rem;\n    font-weight: 600;\n    text-align: center;\n\n}\n.pb-200 {\n    border-radius: 10px;\n    padding-bottom: 100px;\n    margin: 1rem;\n    padding-bottom: 5rem;\n}\n.VehicleSectionHeading_section-header-wrapper__2Kvi_ .VehicleSectionHeading_section-header__qqdXl {\n    margin: 0 1rem;\n    font-size: 2.4rem;\n    line-height: 3.2rem;\n    font-weight: 600;\n    text-align: center;\n}\n.VehicleCapacity_vehicle-capacity-container__X1gyj {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    background-color: #ebf4ff;\n    border-radius: 0.6rem;\n    padding: 0.2rem 0.4rem;\n}\n\n.TwoWheelersFeaturesSection_features-wrappers__bhyII .TwoWheelersFeaturesSection_features__BJfU5 {\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    max-width: 100rem;\n    margin: 1.6rem auto 0;\n    grid-column-gap: 4rem;\n    -moz-column-gap: 4rem;\n    column-gap: 4rem;\n    grid-row-gap: 2rem;\n    row-gap: 2rem;\n}\n.TwoWheelersFeature_feature__MdEsK .TwoWheelersFeature_feature-text__gDcHo {\n    font-weight: 600;\n    color: #2d2f34;\n    font-size: 2rem;\n    line-height: 2.8rem;\n    margin: 0;\n}\n.TwoWheelersFeaturesSection_features-wrappers__bhyII .TwoWheelersFeaturesSection_features__BJfU5 {\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    max-width: 100rem;\n    margin: 1.6rem auto 0;\n    grid-column-gap: 4rem;\n    -moz-column-gap: 4rem;\n    column-gap: 4rem;\n    grid-row-gap: 2rem;\n    row-gap: 2rem;\n}\n.TwoWheelersFeature_feature__MdEsK {\n    margin: 2rem 0 0;\n}\n.VehicleCapacity_vehicle-capacity-container__X1gyj .VehicleCapacity_vehicle-capacity__asClv {\n    font-weight: 600;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: #333;\n    margin: 0 0 0 0.3rem;\n}\n.TwoWheelersDetailsCard_details-card-container__VtJum .TwoWheelersDetailsCard_details-card-content__yo3el .TwoWheelersDetailsCard_details-card-fare__f_EMZ p {\n    font-weight: 400;\n    font-size: 2rem;\n    line-height: 2.8rem;\n    color: #2d2f34;\n    margin: 0.6rem 0 0;\n}\n.TwoWheelersDetailsCard_details-card-container__VtJum .TwoWheelersDetailsCard_details-card-content__yo3el .TwoWheelersDetailsCard_details-card-fare-details__ytvpg p {\n    font-weight: 400;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: #2d2f34;\n    margin: 0.4rem 0 0;\n}\n.TwoWheelersDetailsCard_details-card-container__VtJum .TwoWheelersDetailsCard_details-card-content__yo3el .TwoWheelersDetailsCard_details-card-know-more-container__YZsbl .TwoWheelersDetailsCard_details-card-know-more__OBUge {\n    margin: 0;\n    font-weight: 600;\n    font-size: 2rem;\n    line-height: 2.8rem;\n    color: #0a57ff;\n}\n.TwoWheelersDetailsCard_details-card-container__VtJum .TwoWheelersDetailsCard_details-card-content__yo3el .TwoWheelersDetailsCard_details-card-know-more-container__YZsbl .TwoWheelersDetailsCard_details-card-know-more__OBUge {\n    margin: 0;\n    font-weight: 600;\n    font-size: 2rem;\n    line-height: 2.8rem;\n    color: #0a57ff;\n}\n.TwoWheelersDetailsCard_details-card-container__VtJum .TwoWheelersDetailsCard_details-card-content__yo3el {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n}\n.TwoWheelersDetailsCard_details-card-container__VtJum .TwoWheelersDetailsCard_details-card-content__yo3el .TwoWheelersDetailsCard_details-card-heading__ALGFy {\n    font-weight: 600;\n    font-size: 2.4rem;\n    line-height: 3.2rem;\n    text-align: left;\n    color: #2d2f34;\n    margin: 0;\n}\n.TwoWheelersDetailsCard_details-card-container__VtJum {\n    background-color: #fff;\n    display: grid;\n    grid-template-columns: 1fr 1.4fr;\n    padding: 4rem 2rem;\n    border-radius: 0.8rem;\n    border: 1px solid rgba(78,82,91,.12);\n}\n\n</style>\n\n<div class=\"relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75\">\n\n    <div class=\"absolute top-0 w-full h-full bg-center bg-cover\" style=\"background-image: url('https://d3apkeya39jz4k.cloudfront.net/Bangalore_21a3e744ea.webp');\">\n      <span id=\"blackOverlay\" class=\"w-full h-full absolute opacity-75 bg-black\"></span>\n\n    </div>\n    <div class=\"container relative mx-auto\">\n      <div class=\"items-center flex flex-wrap\">\n        <div class=\"w-full lg:w-6/12 px-4 ml-auto mr-auto text-center\">\n          <div class=\"pr-12\">\n          \n            <h1 class=\"text-white font-semibold text-5xl\">\n                Quick Package Delivery Services\n            </h1>\n            <p class=\"mt-4 text-lg text-blueGray-200\">\n                Book Porter bikes for all your package delivery services. Download the app for reliable and safe deliveries of your packages in the city.\n            </p>\n\n        </div>\n        </div>\n      </div>\n    </div>\n    \n    <div class=\"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px\" style=\"transform: translateZ(0)\">\n      <svg class=\"absolute bottom-0 overflow-hidden\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\" version=\"1.1\" viewBox=\"0 0 2560 100\" x=\"0\" y=\"0\">\n        <polygon class=\"text-blueGray-200 fill-current\" points=\"2560 0 2560 100 0 100\"></polygon>\n     \n    </svg>\n    \n</div>\n\n    \n  </div>\n<div class=\"TwoWheelersDetails_details-container__Vcp1M\" id=\"vehicle-fleet\"><div class=\"VehicleSectionHeading_section-header-wrapper__2Kvi_\"><h2 class=\"VehicleSectionHeading_section-header__qqdXl\">Two Wheelers from Porter</h2></div><div class=\"TwoWheelersDetails_details-desktop__J_K1Y\"><div class=\"TwoWheelersDetailsCard_details-card-container__VtJum\"><div class=\"TwoWheelersDetailsCard_details-card-image__VPLc_\"><span style=\"box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%\"><span style=\"box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%\"><img style=\"display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0\" alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27237%27%20height=%27237%27/%3e\"/></span><img alt=\"Two-wheelers\" src=\"https://d3apkeya39jz4k.cloudfront.net/2_wheeler_5624a12e03.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%\"/><noscript><img alt=\"Two-wheelers\" srcSet=\"https://d3apkeya39jz4k.cloudfront.net/2_wheeler_5624a12e03.svg 1x, https://d3apkeya39jz4k.cloudfront.net/2_wheeler_5624a12e03.svg 2x\" src=\"https://d3apkeya39jz4k.cloudfront.net/2_wheeler_5624a12e03.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%\" loading=\"lazy\"/></noscript></span></div><div class=\"TwoWheelersDetailsCard_details-card-content__yo3el\"><h2 class=\"TwoWheelersDetailsCard_details-card-heading__ALGFy\">2 Wheeler</h2><div class=\"TwoWheelersDetailsCard_details-card-capacity__Fh6TM\"><div class=\"VehicleCapacity_vehicle-capacity-container__X1gyj\"><div class=\"VehicleCapacity_vehicle-capacity-image-wrapper__TTxaY\"><span style=\"box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%\"><span style=\"box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%\"><img style=\"display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0\" alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2712%27%20height=%2712%27/%3e\"/></span><img alt=\"Vehicle Capacity Icon\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%\"/><noscript><img alt=\"Vehicle Capacity Icon\" srcSet=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/fare-estimate-result/weight.svg 1x, https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/fare-estimate-result/weight.svg 2x\" src=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/fare-estimate-result/weight.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%\" loading=\"lazy\"/></noscript></span></div><p class=\"VehicleCapacity_vehicle-capacity__asClv\">20 kg</p></div></div><div class=\"TwoWheelersDetailsCard_details-card-fare__f_EMZ\"><p>Starting from <strong>₹48</strong></p></div><div class=\"TwoWheelersDetailsCard_details-card-fare-details__ytvpg\"><p>Base fare is inclusive of 1.0 km distance &amp; 25 minutes of order time. Pricing may vary basis locality. Please note, road tax, parking fee, etc, will be applicable over and above ride fare.</p></div><div class=\"TwoWheelersDetailsCard_details-card-know-more-container__YZsbl\"><a href=\"flipbike\" class=\"TwoWheelersDetailsCard_details-card-know-more__OBUge\">Know more</a></div></div></div></div><div class=\"TwoWheelersDetails_details-mobile__XHRY_\"><div class=\"VehicleInventoryCard_inventory-card-container__s4XUK\"><div class=\"VehicleInventoryCard_inventory-card-image__AboP9\"><span style=\"box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%\"><span style=\"box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%\"><img style=\"display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0\" alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27113%27%20height=%2770%27/%3e\"/></span><img alt=\"Two-wheelers\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%\"/><noscript><img alt=\"Two-wheelers\" srcSet=\"https://d3apkeya39jz4k.cloudfront.net/2_wheeler_5624a12e03.svg 1x, https://d3apkeya39jz4k.cloudfront.net/2_wheeler_5624a12e03.svg 2x\" src=\"https://d3apkeya39jz4k.cloudfront.net/2_wheeler_5624a12e03.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%\" loading=\"lazy\"/></noscript></span></div><div class=\"VehicleInventoryCard_weight-container-desktop__ADfNO\"><div class=\"VehicleCapacity_vehicle-capacity-container__X1gyj\"><div class=\"VehicleCapacity_vehicle-capacity-image-wrapper__TTxaY\"><span style=\"box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%\"><span style=\"box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%\"><img style=\"display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0\" alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2712%27%20height=%2712%27/%3e\"/>\n    <div class=\"TwoWheelersFeaturesSection_features-wrappers__bhyII\"><div class=\"VehicleSectionHeading_section-header-wrapper__2Kvi_\"><h2 class=\"VehicleSectionHeading_section-header__qqdXl\">Why Choose Porter Pickup &amp; Delivery Services?</h2></div><div class=\"TwoWheelersFeaturesSection_features__BJfU5\"><div class=\"TwoWheelersFeature_feature__MdEsK\"><h3 class=\"TwoWheelersFeature_feature-text__gDcHo\">Door-to-door Services</h3><p class=\"TwoWheelersFeature_feature-subtext__LXlge\">Enjoy on-demand pickup &amp; delivery services at your doorstep</p></div><div class=\"TwoWheelersFeature_feature__MdEsK\"><h3 class=\"TwoWheelersFeature_feature-text__gDcHo\">Get Instant Deliveries</h3><p class=\"TwoWheelersFeature_feature-subtext__LXlge\">Get your documents, laptops, lunch boxes, forgotten keys or other small packages picked up and delivered instantly</p></div><div class=\"TwoWheelersFeature_feature__MdEsK\"><h3 class=\"TwoWheelersFeature_feature-text__gDcHo\">Get Anything Delivered</h3><p class=\"TwoWheelersFeature_feature-subtext__LXlge\">Be it a pen or multiple documents, send anything up to 20 kg anywhere across the city</p></div><div class=\"TwoWheelersFeature_feature__MdEsK\"><h3 class=\"TwoWheelersFeature_feature-text__gDcHo\">Reliable Same-day Delivery</h3><p class=\"TwoWheelersFeature_feature-subtext__LXlge\">Book two-wheeler delivery services online and get same-day delivery</p></div></div></div><div class=\"TwoWheelers_section-none__cMbj2\"></div><div class=\"VehicleAreasServed_area-we-serve__S9sHU\" style=\"max-width:100rem\"><div class=\"VehicleSectionHeading_section-header-wrapper__2Kvi_\"></div><div class=\"VehicleAreasServed_areas-container___YPtm\"></div>\n\n    \n  <section class=\"pb-200 relative block bg-blueGray-800\">\n    <div\n      class=\"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20\"\n      style=\"transform: translateZ(0)\"\n    >\n      <svg\n        class=\"absolute bottom-0 overflow-hidden\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        preserveAspectRatio=\"none\"\n        version=\"1.1\"\n        viewBox=\"0 0 2560 100\"\n        x=\"0\"\n        y=\"0\"\n      \n      >\n      \n      </svg>\n    </div>\n\n    <div class=\"container mx-auto px-4 lg:pt-24 lg:pb-64\" >\n      <div class=\"flex flex-wrap text-center justify-center\">\n        <div class=\"w-full lg:w-6/12 px-4\">\n          <h2 class=\"text-4xl font-semibold text-white\">Other services in Bangalore</h2>\n         \n        </div>\n      </div>\n      <div class=\"flex flex-wrap mt-12 justify-center\">\n        <div class=\"w-full lg:w-3/12 px-4 text-center\">\n          <div\n            class=\"text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center\"\n          ><i class=\"fa fa-motorcycle text-xl\"></i>       </div>\n          <h6 class=\"text-xl mt-5 font-semibold text-white\">\n           Trucks\n          </h6>\n          <p class=\"mt-2 mb-4 text-blueGray-400\">\n            <a [routerLink]=\"['/landing']\">Read More</a>\n          \n          </p>\n        </div>\n        <div class=\"w-full lg:w-3/12 px-4 text-center\">\n          <div\n            class=\"text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center\"\n          >\n          <i class='fas fa-box-open text-xl'></i>\n          </div>\n          <h5 class=\"text-xl mt-5 font-semibold text-white\">\n            Packers and Movers\n          </h5>\n          <p class=\"mt-2 mb-4 text-blueGray-400\">\n            <a [routerLink]=\"['/landing']\">Read More</a>\n          </p>\n        </div>\n        <div class=\"w-full lg:w-3/12 px-4 text-center\">\n          <div\n            class=\"text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center\"\n          >\n            <i class=\"fas fa-lightbulb text-xl\"></i>\n          </div>\n          <h5 class=\"text-xl mt-5 font-semibold text-white\">Courier Service\n            </h5>\n          <p class=\"mt-2 mb-4 text-blueGray-400\">\n            <a [routerLink]=\"['/courier']\">Read More</a>\n          </p>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"relative block py-24 lg:pt-0 bg-blueGray-800\">\n    <div class=\"container mx-auto px-4\">\n      <div class=\"flex flex-wrap justify-center lg:-mt-64 -mt-48\">\n        <div class=\"w-full lg:w-6/12 px-4\">\n          <div\n            class=\"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200\"\n          >\n            <div class=\"flex-auto p-5 lg:p-10\">\n              <h4 class=\"text-2xl font-semibold\">Want to work with us?</h4>\n              <p class=\"leading-relaxed mt-1 mb-4 text-blueGray-500\">\n                Complete this form and we will get back to you in 24 hours.\n              </p>\n              <div class=\"relative w-full mb-3 mt-8\">\n                <label\n                  class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\n                  htmlFor=\"full-name\"\n                >\n                  Full Name\n                </label>\n                <input\n                  type=\"text\"\n                  class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\n                  placeholder=\"Full Name\"\n                />\n              </div>\n\n              <div class=\"relative w-full mb-3\">\n                <label\n                  class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\n                  htmlFor=\"email\"\n                >\n                  Email\n                </label>\n                <input\n                  type=\"email\"\n                  class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\n                  placeholder=\"Email\"\n                />\n              </div>\n\n              <div class=\"relative w-full mb-3\">\n                <label\n                  class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\n                  htmlFor=\"message\"\n                >\n                  Message\n                </label>\n                <textarea\n                  rows=\"4\"\n                  cols=\"80\"\n                  class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full\"\n                  placeholder=\"Type a message...\"\n                ></textarea>\n              </div>\n              <div class=\"text-center mt-6\">\n                <button\n                  class=\"bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n                  type=\"button\"\n                >\n                  Send Message\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  \n\n<app-footer></app-footer>\n\n\n    ";
      /***/
    },

    /***/
    "J87Q":
    /*!*********************************************************************!*\
      !*** ./src/app/components/cards/card-stats/card-stats.component.ts ***!
      \*********************************************************************/

    /*! exports provided: CardStatsComponent */

    /***/
    function J87Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardStatsComponent", function () {
        return CardStatsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_card_stats_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./card-stats.component.html */
      "HEly");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CardStatsComponent = /*#__PURE__*/function () {
        function CardStatsComponent() {
          _classCallCheck(this, CardStatsComponent);

          this._statSubtitle = "Traffic";
          this._statTitle = "350,897";
          this._statArrow = "up";
          this._statPercent = "3.48";
          this._statPercentColor = "text-emerald-500";
          this._statDescripiron = "Since last month";
          this._statIconName = "far fa-chart-bar";
          this._statIconColor = "bg-red-500";
        }

        _createClass(CardStatsComponent, [{
          key: "statSubtitle",
          get: function get() {
            return this._statSubtitle;
          },
          set: function set(statSubtitle) {
            this._statSubtitle = statSubtitle === undefined ? "Traffic" : statSubtitle;
          }
        }, {
          key: "statTitle",
          get: function get() {
            return this._statTitle;
          },
          set: function set(statTitle) {
            this._statTitle = statTitle === undefined ? "350,897" : statTitle;
          } // The value must match one of up or down

        }, {
          key: "statArrow",
          get: function get() {
            return this._statArrow;
          },
          set: function set(statArrow) {
            this._statArrow = statArrow !== "down" && statArrow !== "up" ? "up" : statArrow;
          }
        }, {
          key: "statPercent",
          get: function get() {
            return this._statPercent;
          },
          set: function set(statPercent) {
            this._statPercent = statPercent === undefined ? "3.48" : statPercent;
          } // can be any of the text color utilities
          // from tailwindcss

        }, {
          key: "statPercentColor",
          get: function get() {
            return this._statPercentColor;
          },
          set: function set(statPercentColor) {
            this._statPercentColor = statPercentColor === undefined ? "text-emerald-500" : statPercentColor;
          }
        }, {
          key: "statDescripiron",
          get: function get() {
            return this._statDescripiron;
          },
          set: function set(statDescripiron) {
            this._statDescripiron = statDescripiron === undefined ? "Since last month" : statDescripiron;
          }
        }, {
          key: "statIconName",
          get: function get() {
            return this._statIconName;
          },
          set: function set(statIconName) {
            this._statIconName = statIconName === undefined ? "far fa-chart-bar" : statIconName;
          } // can be any of the background color utilities
          // from tailwindcss

        }, {
          key: "statIconColor",
          get: function get() {
            return this._statIconColor;
          },
          set: function set(statIconColor) {
            this._statIconColor = statIconColor === undefined ? "bg-red-500" : statIconColor;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CardStatsComponent;
      }();

      CardStatsComponent.ctorParameters = function () {
        return [];
      };

      CardStatsComponent.propDecorators = {
        statSubtitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        statTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        statArrow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        statPercent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        statPercentColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        statDescripiron: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        statIconName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        statIconColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      CardStatsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-stats",
        template: _raw_loader_card_stats_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], CardStatsComponent);
      /***/
    },

    /***/
    "J8Ne":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/dropdowns/index-dropdown/index-dropdown.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: IndexDropdownComponent */

    /***/
    function J8Ne(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndexDropdownComponent", function () {
        return IndexDropdownComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_index_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./index-dropdown.component.html */
      "e8es");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _popperjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @popperjs/core */
      "EjV/");

      var IndexDropdownComponent = /*#__PURE__*/function () {
        function IndexDropdownComponent() {
          _classCallCheck(this, IndexDropdownComponent);

          this.dropdownPopoverShow = false;
        }

        _createClass(IndexDropdownComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleDropdown",
          value: function toggleDropdown(event) {
            event.preventDefault();

            if (this.dropdownPopoverShow) {
              this.dropdownPopoverShow = false;
            } else {
              this.dropdownPopoverShow = true;
              this.createPoppper();
            }
          }
        }, {
          key: "createPoppper",
          value: function createPoppper() {
            Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_3__["createPopper"])(this.btnDropdownRef.nativeElement, this.popoverDropdownRef.nativeElement, {
              placement: "bottom-start"
            });
          }
        }]);

        return IndexDropdownComponent;
      }();

      IndexDropdownComponent.propDecorators = {
        btnDropdownRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["btnDropdownRef", {
            "static": false
          }]
        }],
        popoverDropdownRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["popoverDropdownRef", {
            "static": false
          }]
        }]
      };
      IndexDropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-index-dropdown",
        template: _raw_loader_index_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], IndexDropdownComponent);
      /***/
    },

    /***/
    "JdSc":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/landing/fliptwo/fliptwo.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JdSc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<style>\n   \n\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-section-title__ryt2g {\n    margin: 0;\n    font-weight: 600;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    color: #2d2f34;\n}\n.VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-wrapper__ZntQf .VehicleDetails_best-for__8_39F .VehicleDetails_best-for-title__R14mh {\n    margin: 0 0 0 0.8rem;\n    font-weight: 400;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    color: #2d2f34;\n    text-align: left;\n    width: 100%;\n}\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_modal-title__3rSMj {\n    font-weight: 600;\n    font-size: 2.4rem;\n    line-height: 3.2rem;\n    margin: 0;\n    color: #2d2f34;\n}\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_form-container__deD6R {\n    background: #eef2ff;\n    box-sizing: border-box;\n    width: 42.8rem;\n    position: relative;\n    padding: 4.4rem 4rem 4rem;\n}\n\n    .columnflip:first-child {\n      background-color: #eef;\n    }\n\n    .columnflip:last-child {\n      background-color: #fee;\n    }\n .Footer_footer-container__HntbH {\n    background-color: #000;\n    color: #fff\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC {\n    max-width: 150rem;\n    margin: auto;\n    padding: 4.8rem 0\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC {\n        padding:3.2rem 1.6rem\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 {\n    display: grid;\n    grid-template-columns: repeat(5,1fr);\n    padding: 0 3.6rem 4.8rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 {\n        grid-template-columns:1fr 1fr;\n        padding: 0 0 2.4rem\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_mobile-download__ynS_q {\n    display: none\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_company-info__dJXMm {\n    font-size: 2rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_company-info__dJXMm {\n        display:none\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_company-info__dJXMm .Footer_logo__GVpEx {\n    cursor: pointer\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_company-info__dJXMm .Footer_motto__vpt_I {\n    padding-top: 2.4rem;\n    width: 14rem\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_companies-links__0yil4,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_services-links__95wtA,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_support-links__v9_TZ {\n    display: flex;\n    flex-direction: column\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_companies-links__0yil4 .Footer_title__g0XIB,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_services-links__95wtA .Footer_title__g0XIB,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_support-links__v9_TZ .Footer_title__g0XIB {\n    font-weight: 600;\n    font-size: 1.8rem;\n    line-height: 140%\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_companies-links__0yil4 .Footer_list__r_RMm,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_services-links__95wtA .Footer_list__r_RMm,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_support-links__v9_TZ .Footer_list__r_RMm {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    padding-top: 1.2rem\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_companies-links__0yil4 .Footer_list__r_RMm .Footer_list-item__QPP6R,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_services-links__95wtA .Footer_list__r_RMm .Footer_list-item__QPP6R,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_support-links__v9_TZ .Footer_list__r_RMm .Footer_list-item__QPP6R {\n    font-size: 1.4rem;\n    margin-bottom: .8rem;\n    cursor: pointer;\n    display: block\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_support-links__v9_TZ {\n        display:none\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_download__6e9Km {\n    display: flex;\n    flex-direction: column;\n    gap: 1.6rem;\n    width: 18rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_download__6e9Km {\n        order:-1;\n        display: flex;\n        flex-direction: row;\n        grid-column: 1/span 2;\n        padding-bottom: 2.4rem;\n        width: 100%;\n        gap: 0\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_download-android__whnja,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_download-iOS__3ecym {\n    cursor: pointer\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_download-android__whnja,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_download-iOS__3ecym {\n        flex:1 1;\n        margin-right: 2rem\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv {\n    padding: 0 3.6rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv {\n        padding:0\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_cities-truck-links__2giuy {\n    display: flex;\n    flex-direction: column;\n    padding-bottom: 2.4rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_cities-truck-links__2giuy {\n        padding-bottom:2.4rem\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_cities-truck-links__2giuy .Footer_title__g0XIB {\n    font-weight: 600;\n    font-size: 1.8rem;\n    line-height: 140%\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_cities-truck-links__2giuy .Footer_list__r_RMm {\n    display: grid;\n    grid-template-columns: repeat(5,1fr);\n    grid-row-gap: 1.2rem;\n    padding-top: 1.2rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_cities-truck-links__2giuy .Footer_list__r_RMm {\n        grid-template-columns:repeat(3,1fr)\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_cities-truck-links__2giuy .Footer_list__r_RMm .Footer_list-item__QPP6R {\n    font-size: 1.4rem;\n    position: relative;\n    cursor: pointer\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_support-links__v9_TZ {\n    display: none\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_support-links__v9_TZ {\n        display:block;\n        padding-top: 1.2rem\n    }\n\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_support-links__v9_TZ .Footer_title__g0XIB {\n        display: none\n    }\n\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_support-links__v9_TZ .Footer_list__r_RMm {\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr;\n        align-items: center;\n        width: 100%\n    }\n\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_support-links__v9_TZ .Footer_list__r_RMm .Footer_list-item__QPP6R {\n        color: #bdbdbd;\n        font-size: 1.2rem;\n        padding: .6rem 0\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 2.4rem 3.6rem 0\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 {\n        flex-direction:column;\n        padding: 0;\n        align-items: flex-start\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ {\n        padding:2rem 0\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_fb__tr_T0,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_insta__R9wDV,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_linkedIn__DQwks,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_twitter__2Zp_k,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_yt__GUvsn {\n    content: \"\";\n    background-image: url(https://d10wquj595no85.cloudfront.net/_next/static/media/social_media.62807da0.svg);\n    width: 3.2rem;\n    margin: 0 1.2rem 0 0;\n    height: 3.2rem;\n    background-position: 0;\n    background-size: auto 3.2rem;\n    background-repeat: no-repeat\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_insta__R9wDV {\n    background-position: 0\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_fb__tr_T0 {\n    background-position-x: -4rem\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_linkedIn__DQwks {\n    background-position-x: -8rem\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_twitter__2Zp_k {\n    background-position-x: -12rem\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_yt__GUvsn {\n    background-position-x: -16rem\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_copyright-wrapper__xjE5_ {\n    font-size: 1.4rem;\n    color: #bdbdbd\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_copyright-wrapper__xjE5_ .Footer_copyright__HmTp2 {\n    display: flex;\n    align-items: center\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_copyright-wrapper__xjE5_ .Footer_copyright__HmTp2 {\n        flex-direction:column;\n        align-items: flex-start;\n        font-size: 1.2rem\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_copyright-wrapper__xjE5_ .Footer_copyright__HmTp2 .Footer_info__EWbD8:before {\n    content: \"©\"\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_copyright-wrapper__xjE5_ .Footer_copyright__HmTp2 .Footer_info__EWbD8 {\n        margin-bottom:1rem\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_copyright-wrapper__xjE5_ .Footer_copyright__HmTp2 .Footer_vertical-seperator__imgpZ {\n    background: #bdbdbd;\n    margin: 0 1rem;\n    width: 1px;\n    height: 1.4rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_copyright-wrapper__xjE5_ .Footer_copyright__HmTp2 .Footer_vertical-seperator__imgpZ {\n        display:none\n    }\n}\n\n.MobileMenu_mobile-menu-wrapper__lOrcy {\n    width: 75vw;\n    height: 100vh\n}\n\n.MobileMenu_mobile-menu-wrapper__lOrcy .MobileMenu_mobile-menu-container__dy7Jk {\n    height: 100%;\n    background: #040a1a;\n    z-index: 30\n}\n\n.MobileMenu_mobile-menu-wrapper__lOrcy .MobileMenu_mobile-menu-container__dy7Jk .MobileMenu_close-button__OZs7O {\n    height: -moz-fit-content;\n    height: fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-top: 2rem;\n    padding-right: 3rem;\n    margin-left: auto\n}\n\n.MobileMenu_mobile-menu-wrapper__lOrcy .MobileMenu_mobile-menu-container__dy7Jk .MobileMenu_links-container__b15EE {\n    margin-top: 2.1rem\n}\n\n.MobileMenu_mobile-menu-wrapper__lOrcy .MobileMenu_mobile-menu-container__dy7Jk .MobileMenu_links-container__b15EE .MobileMenu_primary-links__d3xTK,.MobileMenu_mobile-menu-wrapper__lOrcy .MobileMenu_mobile-menu-container__dy7Jk .MobileMenu_links-container__b15EE .MobileMenu_secondary-links__PNWn_ {\n    display: flex;\n    flex-direction: column-reverse\n}\n\n.MobileMenu_mobile-menu-wrapper__lOrcy .MobileMenu_mobile-menu-container__dy7Jk .MobileMenu_links-container__b15EE .MobileMenu_primary-links__d3xTK .MobileMenu_primary-link__Z_tPu,.MobileMenu_mobile-menu-wrapper__lOrcy .MobileMenu_mobile-menu-container__dy7Jk .MobileMenu_links-container__b15EE .MobileMenu_secondary-links__PNWn_ .MobileMenu_secondary-link__wtSWQ {\n    color: #fff;\n    font-weight: 600;\n    font-size: 2rem;\n    line-height: 1.6rem;\n    margin: 2rem 0;\n    text-align: center\n}\n\n.DownloadApp_wrapper__wzCu1 {\n    display: none\n}\n\n@media only screen and (max-width: 1023px) {\n    .DownloadApp_wrapper__wzCu1 {\n        display:unset\n    }\n}\n\n.DownloadApp_wrapper__wzCu1.DownloadApp_hidden__6Wl45 {\n    display: none\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ {\n    display: flex;\n    align-items: center;\n    padding: 1.2rem 1.6rem;\n    background: #f0f3ff\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ .DownloadApp_logo__lxwE0 {\n    display: flex;\n    align-items: center;\n    justify-content: center\n}\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_form-container__deD6R {\n    background: #eef2ff;\n    box-sizing: border-box;\n    width: 42.8rem;\n    position: relative;\n    padding: 4.4rem 4rem 4rem;\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ .DownloadApp_title-subtitle__Fx0R_ {\n    margin-left: 1.2rem\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ .DownloadApp_title-subtitle__Fx0R_ .DownloadApp_title__XuVs_ {\n    font-weight: 600;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    color: #333\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ .DownloadApp_title-subtitle__Fx0R_ .DownloadApp_sub-title__r0fL0 {\n    font-weight: 600;\n    font-size: 12px;\n    line-height: 16px;\n    color: #828282\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ .DownloadApp_download-button__ibtva {\n    margin-left: auto;\n    background-color: #2962ff;\n    padding: .8rem 1.2rem;\n    border-radius: 2.2rem;\n    font-family: inherit;\n    border: none;\n    font-weight: 600;\n    font-size: 1.2rem;\n    line-height: 1.6rem\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ .DownloadApp_download-button__ibtva a {\n    text-decoration: none;\n    color: #fff\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ .DownloadApp_hide-button__mS1s3 {\n    background: none;\n    border: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: .4rem;\n    margin-left: .8rem\n}\n\n.Header_sticky-wrapper__nEs1S {\n    position: sticky;\n    top: 0;\n    width: 100%;\n    z-index: 110\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb {\n    background-color: #040a1a;\n    height: 6.4rem;\n    display: flex;\n    align-items: center\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ {\n    max-width: 150rem;\n    width: 100%;\n    margin-inline:auto;display: flex;\n    align-items: center;\n    justify-content: space-between\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_logo__edXik {\n    display: flex;\n    align-items: center;\n    margin-left: 12rem\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_logo__edXik :hover {\n    cursor: pointer\n}\n\n@media only screen and (max-width: 1023px) {\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_logo__edXik {\n        margin-left:2rem\n    }\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_primary-links-container__0Kzs8 {\n    display: flex;\n    align-items: center;\n    gap: 2.4rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_primary-links-container__0Kzs8 {\n        display:none\n    }\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_primary-links-container__0Kzs8 .Header_primary-link__HgwZ_ {\n    text-decoration: none;\n    color: #fff;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    font-weight: 600;\n    cursor: pointer\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_secondary-links-container__8lyaA {\n    display: flex;\n    align-items: center;\n    margin-right: 12rem;\n    gap: 2.4rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_secondary-links-container__8lyaA {\n        display:none\n    }\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_secondary-links-container__8lyaA .Header_secondary-link__boqSW {\n    text-decoration: none;\n    color: #fff;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    font-weight: 600;\n    cursor: pointer\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_menu-icon__5AGW5 {\n    display: none\n}\n\n@media only screen and (max-width: 1023px) {\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_menu-icon__5AGW5 {\n        display:flex;\n        align-items: center;\n        justify-content: center;\n        margin: 1.6rem\n    }\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_mobile-menu__Ap7DR {\n    display: none\n}\n\n@media only screen and (max-width: 1023px) {\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_mobile-menu__Ap7DR {\n        display:unset;\n        z-index: 110\n    }\n\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_mobile-menu-overlay__x7Tjm {\n        position: fixed;\n        display: block;\n        inset: 0;\n        background-color: rgba(0,0,0,.54)\n    }\n\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_mobile-menu-component__B9xBH {\n        position: fixed;\n        top: 0;\n        right: -75vw;\n        transition: right .1s ease-in-out\n    }\n\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_mobile-menu-component__B9xBH.Header_active__8kMBu {\n        right: 0\n    }\n}\n\n.Explore_explore-container__Xt_dL {\n    box-sizing: border-box;\n    width: 100%;\n    border: .05rem solid #2962ff;\n    border-radius: .8rem;\n    background: #fff;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1.5rem 1.6rem;\n    cursor: pointer\n}\n\n@media only screen and (max-width: 559px) {\n    .Explore_explore-container__Xt_dL {\n        padding:.9rem 1.6rem;\n        background: #eef2ff\n    }\n}\n\n.Explore_explore-container__Xt_dL .Explore_explore-text__cJKgd {\n    font-weight: 600;\n    font-size: 1.2rem;\n    line-height: 1.6rem;\n    color: #2962ff\n}\n\n.Explore_explore-container__Xt_dL .Explore_arrow__XaZgn {\n    display: flex;\n    align-items: center;\n    justify-content: center\n}\n\n.FormInput_container__eKd_P {\n    position: relative\n}\n\n.FormInput_container__eKd_P .FormInput_input-container__Tfl2q {\n    border: .0754808rem solid #ddd;\n    border-radius: .603846rem;\n    background-color: #fff;\n    box-sizing: border-box;\n    padding: 1.2rem 0\n}\n\n@media only screen and (max-width: 559px) {\n    .FormInput_container__eKd_P .FormInput_input-container__Tfl2q {\n        padding:.9rem 0\n    }\n}\n\n.FormInput_container__eKd_P .FormInput_input-container__Tfl2q .FormInput_label-required__A28E4,.FormInput_container__eKd_P .FormInput_input-container__Tfl2q .FormInput_label__rD1_n {\n    font-weight: 600;\n    font-size: 1.2rem;\n    line-height: 1.6rem;\n    color: #333;\n    padding-left: 1.9rem\n}\n\n.FormInput_container__eKd_P .FormInput_input-container__Tfl2q .FormInput_label-required__A28E4.FormInput_error__VpKzj,.FormInput_container__eKd_P .FormInput_input-container__Tfl2q .FormInput_label__rD1_n.FormInput_error__VpKzj {\n    color: #eb5757\n}\n\n@media only screen and (max-width: 559px) {\n    .FormInput_container__eKd_P .FormInput_input-container__Tfl2q .FormInput_label-required__A28E4,.FormInput_container__eKd_P .FormInput_input-container__Tfl2q .FormInput_label__rD1_n {\n        font-size:1rem;\n        line-height: 1.2rem;\n        padding-left: 1.4rem\n    }\n}\n\n.FormInput_container__eKd_P .FormInput_input-container__Tfl2q .FormInput_label-required__A28E4:after {\n    content: \"*\";\n    color: #eb5757;\n    padding-left: .2rem\n}\n\n.FormInput_container__eKd_P .FormInput_error-container__VaXZ9 {\n    position: absolute;\n    font-weight: 600;\n    font-size: 1rem;\n    line-height: 1.6rem;\n    color: #eb5757\n}\n\n.FormInput_submit__icI8k {\n    width: 100%;\n    border-radius: .8rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1.6rem;\n    box-sizing: border-box;\n    border: none\n}\n\n.FormInput_submit-enabled__qOriP {\n    background-color: #2962ff;\n    cursor: pointer\n}\n\n.FormInput_submit-disabled__FNs7m {\n    background-color: rgba(51,51,51,.24)\n}\n\n.FormInput_submit-disabled__FNs7m .FormInput_submit-text__LL1rf,.FormInput_submit-enabled__qOriP .FormInput_submit-text__LL1rf {\n    font-weight: 600;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: #fff;\n    font-family: Titillium Web,sans-serif\n}\n\n.FormInput_submit-disabled__FNs7m .FormInput_submit-arrow-icon__Zz3tC,.FormInput_submit-enabled__qOriP .FormInput_submit-arrow-icon__Zz3tC {\n    display: flex;\n    align-items: center;\n    justify-content: center\n}\n\n.CategorySelector_category-selector-container__AkuP2 {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    justify-content: center;\n    gap: 1.5rem;\n    margin-top: 1rem\n}\n\n@media only screen and (max-width: 559px) {\n    .CategorySelector_category-selector-container__AkuP2 {\n        margin-top:0\n    }\n}\n\n.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1.7rem 3.8rem;\n    box-sizing: border-box;\n    border: .1rem solid rgba(51,51,51,.16);\n    border-radius: .8rem;\n    background: #fff;\n    width: 100%;\n    cursor: pointer\n}\n\n@media only screen and (max-width: 559px) {\n    .CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 {\n        padding:.8rem 1.3rem\n    }\n}\n\n.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14:active,.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14:hover {\n    border-color: #2962ff;\n    transition: border-color .2s ease-in\n}\n\n.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14:active .CategorySelector_arrow-icon-svg__a0c_p,.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14:hover .CategorySelector_arrow-icon-svg__a0c_p {\n    fill: #2962ff;\n    transition: fill .2s ease-in,fill-opacity .2s ease-in;\n    fill-opacity: 1\n}\n\n.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 .CategorySelector_category-image-text__pVzl5 {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    margin-right: 4.6rem\n}\n\n@media only screen and (max-width: 559px) {\n    .CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 .CategorySelector_category-image-text__pVzl5 {\n        margin-right:2rem\n    }\n}\n\n.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 .CategorySelector_category-image-text__pVzl5 .CategorySelector_category-image__zlCOz {\n    display: flex;\n    align-items: center;\n    margin-right: 4.6rem;\n    height: 6rem\n}\n\n@media only screen and (max-width: 559px) {\n    .CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 .CategorySelector_category-image-text__pVzl5 .CategorySelector_category-image__zlCOz {\n        margin-right:-.2rem;\n        transform-origin: center left;\n        scale: 1;\n        height: 5.5rem\n    }\n}\n\n.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 .CategorySelector_category-image-text__pVzl5 .CategorySelector_category-text__cRRzz {\n    font-weight: 600;\n    font-size: 1.8rem;\n    line-height: 2.4rem;\n    color: #333;\n    margin-left: 0\n}\n\n@media only screen and (max-width: 559px) {\n    .CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 .CategorySelector_category-image-text__pVzl5 .CategorySelector_category-text__cRRzz {\n        font-size:1.5rem;\n        line-height: 1.8rem;\n        margin-left: 1rem\n    }\n}\n\n.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 .CategorySelector_arrow-icon__tOM2g {\n    display: flex;\n    align-items: center;\n    transform: rotate(-90deg)\n}\n\n.CategorySelector_change-category-container__Gd9aY {\n    width: 100%;\n    background-color: rgba(47,139,255,.12);\n    border-radius: .8rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1.2rem 1.6rem;\n    box-sizing: border-box\n}\n\n.CategorySelector_change-category-container__Gd9aY .CategorySelector_current-category-text__VzQeO {\n    font-weight: 600;\n    font-size: 1.5rem;\n    line-height: 2.4rem;\n    color: #333\n}\n\n.CategorySelector_change-category-container__Gd9aY .CategorySelector_change-button__a4G8g {\n    all: unset;\n    font-weight: 600;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    color: #2962ff;\n    cursor: pointer\n}\n\n.FareEstimateForms_component-wrapper__pYvyq {\n    height: 100%;\n    display: flex;\n    flex-direction: column\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_change-category__lkhUb {\n    margin-bottom: 1.6rem\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm {\n    display: flex;\n    flex-direction: column;\n    gap: 1.6rem;\n    height: 100%;\n    position: relative\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm input {\n    font-family: inherit;\n    display: block;\n    border: none;\n    outline: none;\n    line-height: 2.4rem;\n    font-size: 1.6rem;\n    text-overflow: ellipsis;\n    width: 100%;\n    background-color: #fff;\n    box-sizing: border-box\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm input::-moz-placeholder {\n    color: rgba(51,51,51,.24);\n    font-family: inherit\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm input:-ms-input-placeholder {\n    color: rgba(51,51,51,.24);\n    font-family: inherit\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm input::placeholder {\n    color: rgba(51,51,51,.24);\n    font-family: inherit\n}\n\n@media only screen and (max-width: 559px) {\n    .FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm input {\n        font-size:1.2rem;\n        line-height: 1.8rem\n    }\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_date-input-wrapper__DTV__,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_drop-input__r3Zzs,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_mobile-input__fOlJd,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_name-input__t8wkI,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_pickup-input__sSniG {\n    padding-inline:1.9rem}\n\n@media only screen and (max-width: 559px) {\n    .FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_date-input-wrapper__DTV__,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_drop-input__r3Zzs,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_mobile-input__fOlJd,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_name-input__t8wkI,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_pickup-input__sSniG {\n        padding-inline:1.4rem\n    }\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_drop-input__r3Zzs.FareEstimateForms_disabled__nZQF8,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_pickup-input__sSniG.FareEstimateForms_disabled__nZQF8 {\n    pointer-events: none\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_drop-input__r3Zzs+div .FareEstimateForms_dropdown-item__Jw9PJ,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_pickup-input__sSniG+div .FareEstimateForms_dropdown-item__Jw9PJ {\n    padding: .9rem 1.9rem;\n    cursor: pointer;\n    font-size: 1.1rem;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    border-bottom: .05rem solid #d3d3d3\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_drop-input__r3Zzs+div .FareEstimateForms_dropdown-item__Jw9PJ:hover,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_pickup-input__sSniG+div .FareEstimateForms_dropdown-item__Jw9PJ:hover {\n    cursor: pointer;\n    background-color: #f3f3f3\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_date-input-wrapper__DTV__ .FareEstimateForms_date-picker__6g5bG {\n    width: 100%\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_date-input-wrapper__DTV__ .FareEstimateForms_date-picker__6g5bG div[class~=MuiInput-underline]:after,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_date-input-wrapper__DTV__ .FareEstimateForms_date-picker__6g5bG div[class~=MuiInput-underline]:before {\n    all: unset\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_date-input-wrapper__DTV__ .FareEstimateForms_date-picker__6g5bG input[class~=MuiInputBase-input] {\n    padding: 0;\n    height: unset\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_submit-container__gnwhh {\n    margin-top: auto\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_form-error-container__j3UdG {\n    position: absolute;\n    bottom: 0;\n    transform: translateY(100%);\n    font-weight: 600;\n    font-size: 1rem;\n    line-height: 1.6rem;\n    color: #eb5757\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ {\n    width: -moz-fit-content;\n    width: fit-content;\n    height: 71.9rem;\n    display: flex;\n    position: relative;\n    overflow: hidden;\n    border-radius: .8rem\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ {\n        width:100%;\n        height: -moz-fit-content;\n        height: fit-content;\n        flex-direction: column;\n        padding: 2.4rem 2.4rem 3.4rem;\n        box-sizing: border-box;\n        background: #f3f3f3;\n        border-radius: .8rem .8rem 0 0\n    }\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z {\n    padding: 5.6rem;\n    background-color: #fff;\n    width: 19.2rem\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z {\n        padding:0;\n        width: -moz-fit-content;\n        width: fit-content;\n        background-color: unset;\n        margin-bottom: 1.5rem\n    }\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_title__qq3il {\n    padding: 0;\n    font-weight: 600;\n    font-size: 4.8rem;\n    line-height: 6.4rem;\n    color: #333;\n    margin: 0 0 2.4rem;\n    display: block\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_title__qq3il {\n        display:none;\n        font-size: 1.8rem;\n        line-height: 2.8rem;\n        margin-bottom: 0\n    }\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_sub-title__w8hD_ {\n    margin: 0;\n    padding: 0;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: rgba(51,51,51,.64);\n    display: block\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_sub-title__w8hD_ {\n        display:none;\n        font-size: 1.4rem;\n        line-height: 2rem\n    }\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_title-mobile__WDoQ2 {\n    padding: 0;\n    font-weight: 600;\n    font-size: 4.8rem;\n    line-height: 6.4rem;\n    color: #333;\n    margin: 0 0 2.4rem;\n    display: none\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_title-mobile__WDoQ2 {\n        display:block;\n        font-size: 1.8rem;\n        line-height: 2.8rem;\n        margin-bottom: 0\n    }\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_sub-title-mobile__884Z6 {\n    margin: 0;\n    padding: 0;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: rgba(51,51,51,.64);\n    display: none\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_sub-title-mobile__884Z6 {\n        display:block;\n        font-size: 1.4rem;\n        line-height: 2rem\n    }\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_form-container__HPjJJ {\n    background: #eef2ff;\n    box-sizing: border-box;\n    width: 49.6rem;\n    position: relative;\n    padding: 6.4rem 4rem 4rem\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_form-container__HPjJJ {\n        background:unset;\n        width: 100%;\n        padding: 0\n    }\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_close-modal-button__l7xB0 {\n    all: unset;\n    cursor: pointer;\n    margin: 2.4rem;\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: flex\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_close-modal-button__l7xB0 {\n        margin:2.2rem 2.4rem\n    }\n}\n\n.LoadingSpinner_loading-wrapper__sfQEW {\n    width: 100%\n}\n\n.LoadingSpinner_loading-wrapper__sfQEW .LoadingSpinner_loading-ellipsis__eXNtX {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n    left: 50%;\n    transform: translateX(-50%)\n}\n\n.LoadingSpinner_loading-wrapper__sfQEW .LoadingSpinner_loading-ellipsis__eXNtX div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: rgba(51,51,51,.64);\n    animation-timing-function: cubic-bezier(0,1,1,0)\n}\n\n.LoadingSpinner_loading-wrapper__sfQEW .LoadingSpinner_loading-ellipsis__eXNtX div:first-child {\n    left: 8px;\n    animation: LoadingSpinner_loading-ellipsis1__Foglf .6s infinite\n}\n\n.LoadingSpinner_loading-wrapper__sfQEW .LoadingSpinner_loading-ellipsis__eXNtX div:nth-child(2) {\n    left: 8px;\n    animation: LoadingSpinner_loading-ellipsis2__AoWKS .6s infinite\n}\n\n.LoadingSpinner_loading-wrapper__sfQEW .LoadingSpinner_loading-ellipsis__eXNtX div:nth-child(3) {\n    left: 32px;\n    animation: LoadingSpinner_loading-ellipsis2__AoWKS .6s infinite\n}\n\n.LoadingSpinner_loading-wrapper__sfQEW .LoadingSpinner_loading-ellipsis__eXNtX div:nth-child(4) {\n    left: 56px;\n    animation: LoadingSpinner_loading-ellipsis3__tjQfc .6s infinite\n}\n\n@keyframes LoadingSpinner_loading-ellipsis1__Foglf {\n    0% {\n        transform: scale(0)\n    }\n\n    to {\n        transform: scale(1)\n    }\n}\n\n@keyframes LoadingSpinner_loading-ellipsis3__tjQfc {\n    0% {\n        transform: scale(1)\n    }\n\n    to {\n        transform: scale(0)\n    }\n}\n\n@keyframes LoadingSpinner_loading-ellipsis2__AoWKS {\n    0% {\n        transform: translate(0)\n    }\n\n    to {\n        transform: translate(24px)\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t {\n    padding: 1rem 0 0;\n    border: unset\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t {\n        padding:.8rem 0 0\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t {\n        border-top:1px solid #f2f2f2;\n        padding: 2rem\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN {\n    width: 100%;\n    margin: 1rem 0 0\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_error-box__VGUa0 div[class~=Mui-error] div[class~=MuiOutlinedInput-notchedOutline] {\n    border-color: #f44336\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_name__160io label {\n    font-size: 1.1rem;\n    transform: translate(1.4rem,1.6rem) scale(1)\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_name__160io label {\n        font-size:.9rem;\n        transform: translate(1.4rem,1.3rem) scale(1)\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_name__160io label {\n        font-size:1.1rem;\n        transform: translate(1.4rem,1.6rem) scale(1)\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_name__160io label[data-shrink=true] {\n    transform: translate(1.4rem,-.3rem) scale(.75)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_name__160io label[class~=Mui-error] {\n    color: rgba(0,0,0,.54)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_name__160io fieldset[class~=MuiOutlinedInput-notchedOutline] {\n    border-color: rgba(0,0,0,.23)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_mobile__B414b label {\n    font-size: 1.1rem;\n    background-color: #fff;\n    padding-right: .6rem;\n    transform: translate(1.4rem,1.6rem) scale(1)\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_mobile__B414b label {\n        font-size:.9rem;\n        transform: translate(1.4rem,1.3rem) scale(1)\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_mobile__B414b label {\n        font-size:1.1rem;\n        transform: translate(1.4rem,1.6rem) scale(1)\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_mobile__B414b label[data-shrink=true] {\n    transform: translate(1.4rem,-.3rem) scale(.75)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_mobile__B414b label[class~=Mui-error] {\n    color: rgba(0,0,0,.54)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_mobile__B414b fieldset[class~=MuiOutlinedInput-notchedOutline] {\n    border-color: rgba(0,0,0,.23)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_mobile__B414b div[class~=text-input-adornment] {\n    display: flex;\n    align-items: center;\n    font-family: Titillium Web;\n    width: 5rem\n}\n\n@media only screen and (min-width: 560px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_city__Wv8ug {\n        width:50%\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_city__Wv8ug label {\n    padding: .3rem .5rem;\n    background-color: #fff;\n    font-size: 1.1rem;\n    transform: translate(1.4rem,1.6rem) scale(1)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_city__Wv8ug label[data-shrink=true] {\n    transform: translate(1.4rem,-.6rem) scale(.75)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_city__Wv8ug div[class~=MuiOutlinedInput-root] {\n    border-radius: 2px;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_city__Wv8ug div[class~=MuiOutlinedInput-root] {\n        height:3.8rem\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_city__Wv8ug div[class~=MuiOutlinedInput-root] {\n        height:4.4rem\n    }\n}\n\n@media only screen and (min-width: 560px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT {\n        margin-left:.6rem;\n        width: 48%\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT label {\n    padding: .3rem .5rem;\n    background-color: #fff;\n    font-size: 1.1rem;\n    transform: translate(1.4rem,1.4rem) scale(1)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT label[data-shrink=true] {\n    transform: translate(1.4rem,-.6rem) scale(.75)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT div[class~=MuiOutlinedInput-root] {\n    border-radius: 2px;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT div[class~=MuiOutlinedInput-root] {\n        height:3.8rem\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT div[class~=MuiOutlinedInput-root] {\n        height:4.4rem\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_info-source__rqLc3 label {\n    padding: .3rem .5rem;\n    background-color: #fff;\n    font-size: 1.1rem;\n    transform: translate(1.4rem,1.4rem) scale(1)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_info-source__rqLc3 label[data-shrink=true] {\n    transform: translate(1.4rem,-.6rem) scale(.75)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_info-source__rqLc3 div[class~=MuiOutlinedInput-root] {\n    border-radius: 2px;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_info-source__rqLc3 div[class~=MuiOutlinedInput-root] {\n        height:3.8rem\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_info-source__rqLc3 div[class~=MuiOutlinedInput-root] {\n        height:4.4rem\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN .PartnersForm_form-input-text__KXgf2 {\n    background: #fff;\n    border-radius: 2px;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN .PartnersForm_form-input-text__KXgf2 {\n        height:3.8rem\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN .PartnersForm_form-input-text__KXgf2 {\n        height:4.4rem\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN div[class~=form-input-select] {\n    width: 100%;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN div[class~=form-input-select] {\n        height:3.8rem\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN div[class~=form-input-select] {\n        height:4.4rem\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t div[class~=form-input] {\n    width: 100%;\n    margin: 0\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t div[class~=input-error-container] {\n    height: 1.5rem;\n    font-size: 1.2rem;\n    font-family: inherit;\n    min-height: 1.2rem;\n    margin-top: .2em;\n    margin-bottom: .2em;\n    font-style: normal;\n    font-weight: 400\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t div[class~=input-error-container] {\n        height:1rem;\n        min-height: 1rem;\n        font-size: 1rem\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t div[class~=input-error-container] {\n        min-height:1.8rem;\n        font-size: 1.2rem;\n        margin: .2rem 0\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t div[class~=input-error-container] div[class~=error] {\n    color: #eb5757;\n    display: flex;\n    align-items: center\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_same-row-fields__BiimE {\n    display: flex\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_same-row-fields__BiimE {\n        flex-direction:column\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t div[class~=form-input-text] {\n    background: #fff;\n    border-radius: 2px;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t div[class~=form-input-text] {\n        height:3.8rem\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t div[class~=form-input-text] {\n        height:4.4rem\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-button__51aip {\n    border: none;\n    border-radius: 2px;\n    background-color: #2962ff!important;\n    color: #fff!important;\n    width: 100%;\n    height: auto;\n    font-size: 1.6rem!important;\n    font-family: inherit;\n    line-height: 100%;\n    padding: 1.6rem 0!important;\n    font-weight: 700;\n    box-shadow: 0 0 2px 0 rgba(0,0,0,.5);\n    margin-top: .8rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-button__51aip {\n        font-size:1.4rem!important;\n        padding: 1.4rem 0!important\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-button__51aip.PartnersForm_request-btn__TmlCY {\n    cursor: pointer\n}\n\n@media only screen and (min-width: 560px) {\n    .PartnersForm_click-handler__7RMSD {\n        margin-left:.6rem;\n        width: 48%\n    }\n\n    .PartnersForm_click-handler__7RMSD .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT {\n        margin-left: 0;\n        width: 100%\n    }\n}\n\n.PartnersForm_click-handler__7RMSD .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT label {\n    padding: .3rem .5rem;\n    background-color: #fff;\n    font-size: 1.1rem;\n    transform: translate(1.4rem,1.4rem) scale(1)\n}\n\n.PartnersForm_click-handler__7RMSD .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT label[data-shrink=true] {\n    transform: translate(1.4rem,-.6rem) scale(.75)\n}\n\n.PartnersForm_click-handler__7RMSD .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT div[class~=MuiOutlinedInput-root] {\n    border-radius: 2px;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_click-handler__7RMSD .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT div[class~=MuiOutlinedInput-root] {\n        height:3.8rem\n    }\n}\n\n.FareEstimateModal_overlay__Un1KE {\n    background-color: rgba(0,0,0,.38);\n    position: fixed;\n    inset: 0;\n    display: flex;\n    overflow: auto\n}\n\n.FareEstimateModal_overlay__Un1KE .FareEstimateModal_modal-container__B7RS9 {\n    padding: 0;\n    margin: auto;\n    width: -moz-fit-content;\n    width: fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    outline: none\n}\n\n@media only screen and (max-width: 559px) {\n    .FareEstimateModal_overlay__Un1KE .FareEstimateModal_modal-container__B7RS9 {\n        width:100%;\n        position: absolute;\n        bottom: 0\n    }\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb {\n    text-align: center;\n    padding: 0;\n    height: -webkit-fill-available;\n    justify-content: space-evenly\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersFormAck_modal-container-ack__DjSZb {\n        padding:2.8rem\n    }\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb.PartnersFormAck_flex-col-align-center__oDp_9 {\n    display: flex;\n    flex-direction: column;\n    align-items: center\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb.PartnersFormAck_flex-col-align-center__oDp_9 .PartnersFormAck_ack__XsSR4 {\n    padding: 2rem\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb.PartnersFormAck_flex-col-align-center__oDp_9 .PartnersFormAck_ack__XsSR4.PartnersFormAck_msg__nEI8N {\n    font-size: 2.4rem\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb.PartnersFormAck_flex-col-align-center__oDp_9 .PartnersFormAck_ack__XsSR4.PartnersFormAck_name__LzZBX {\n    font-size: 2.2rem;\n    font-weight: 700;\n    color: #212121\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb.PartnersFormAck_flex-col-align-center__oDp_9 .PartnersFormAck_ack__XsSR4.PartnersFormAck_desc__x1ojP {\n    font-size: 2rem\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb.PartnersFormAck_flex-col-align-center__oDp_9 .PartnersFormAck_bold-txt-btn__WSzRz {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 2px;\n    box-shadow: 0 0 2px 0 rgba(0,0,0,.5);\n    font-weight: 700;\n    text-decoration: none;\n    cursor: pointer\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb.PartnersFormAck_flex-col-align-center__oDp_9 .PartnersFormAck_bold-txt-btn__WSzRz.PartnersFormAck_request-button__s4gq0 {\n    width: 50%;\n    min-width: 20rem;\n    background: #fff;\n    color: #2962ff;\n    border: 1px solid #2962ff;\n    text-transform: uppercase;\n    font-size: 1.6rem;\n    padding: 1rem;\n    margin: 3rem 0\n}\n\n.VehicleCapacity_vehicle-capacity-container__X1gyj {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    background-color: #ebf4ff;\n    border-radius: .6rem;\n    padding: .2rem .4rem\n}\n\n@media only screen and (max-width: 767px) {\n    .VehicleCapacity_vehicle-capacity-container__X1gyj {\n        border-radius:.4rem\n    }\n}\n\n.VehicleCapacity_vehicle-capacity-container__X1gyj .VehicleCapacity_vehicle-capacity-image-wrapper__TTxaY {\n    margin: auto 0;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center\n}\n\n.VehicleCapacity_vehicle-capacity-container__X1gyj .VehicleCapacity_vehicle-capacity__asClv {\n    font-weight: 600;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: #333;\n    margin: 0 0 0 .3rem\n}\n\n@media only screen and (max-width: 767px) {\n    .VehicleCapacity_vehicle-capacity-container__X1gyj .VehicleCapacity_vehicle-capacity__asClv {\n        font-size:1.4rem;\n        line-height: 2rem;\n        margin: 0 0 0 .1rem\n    }\n}\n\n.AttachVehicleModal_attach-vehicle-modal__XIuW_ {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%,-50%);\n    width: 90%;\n    min-width: 30rem;\n    max-width: 360px;\n    background-color: #fff;\n    box-shadow: 0 24px 38px 0 rgba(0,0,0,.08);\n    border-radius: 2px\n}\n\n.AttachVehicleModal_attach-vehicle-modal__XIuW_:focus {\n    outline: none\n}\n\n.AttachVehicleModal_attach-vehicle-modal__XIuW_ .AttachVehicleModal_modal-container__qv1tQ {\n    position: relative;\n    min-height: 30rem\n}\n\n.AttachVehicleModal_attach-vehicle-modal__XIuW_ .AttachVehicleModal_modal-container__qv1tQ .AttachVehicleModal_attach-form-container__1jRzZ {\n    background-color: #fff\n}\n\n.AttachVehicleModal_attach-vehicle-modal__XIuW_ .AttachVehicleModal_modal-container__qv1tQ .AttachVehicleModal_modal-titlebar__XV_7o {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 16px\n}\n\n.AttachVehicleModal_attach-vehicle-modal__XIuW_ .AttachVehicleModal_modal-container__qv1tQ .AttachVehicleModal_modal-titlebar__XV_7o .AttachVehicleModal_title__sx_6H {\n    font-size: 1.6rem;\n    line-height: 140%\n}\n\n.AttachVehicleModal_attach-vehicle-modal__XIuW_ .AttachVehicleModal_modal-container__qv1tQ .AttachVehicleModal_ack-close-btn__3BxgE {\n    position: absolute;\n    right: 2rem;\n    top: 2rem\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    box-shadow: 0 24px 38px 0 rgba(0,0,0,.08);\n    z-index: 110\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2:focus {\n    outline: none\n}\n\n@media only screen and (min-width: 560px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 {\n        width:auto;\n        top: 55%;\n        bottom: auto;\n        left: 50%;\n        transform: translate(-50%,-55%)\n    }\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc {\n    position: relative;\n    padding: 1.7rem 1rem .5rem;\n    width: 81rem;\n    border-radius: .8rem;\n    background-color: #fff\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc {\n        width:100%;\n        height: 64rem;\n        overflow-y: scroll;\n        padding: 2.4rem;\n        box-sizing: border-box;\n        border-radius: .8rem .8rem 0 0\n    }\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL {\n    margin-inline:auto;margin-bottom: .5rem;\n    text-align: center\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL {\n        position:relative;\n        width: 100%;\n        margin-bottom: 1.6rem;\n        text-align: start\n    }\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL .CitySelectorModal_close-button__9OQAO {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: .5rem;\n    margin-right: 3.7rem;\n    margin-top: 2.9rem;\n    cursor: pointer\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL .CitySelectorModal_close-button__9OQAO {\n        margin:0\n    }\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL .CitySelectorModal_title__tHhus {\n    font-size: 4rem;\n    line-height: 5.6rem;\n    font-weight: 600\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL .CitySelectorModal_title__tHhus {\n        font-size:2rem;\n        line-height: 2.8rem\n    }\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL .CitySelectorModal_sub-title__iGMuh {\n    font-size: 2rem;\n    line-height: 2.8rem;\n    font-weight: 400;\n    color: rgba(51,51,51,.64)\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL .CitySelectorModal_sub-title__iGMuh {\n        font-size:1.4rem;\n        line-height: 2rem\n    }\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container__0xaxG {\n    margin: 1.2rem;\n    padding: 1rem;\n    cursor: pointer;\n    transition: .3s\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container-selected__bthle {\n    border: .2rem solid #006ef5;\n    border-radius: .6rem\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container__0xaxG {\n        margin:0;\n        padding: .6rem .2rem;\n        margin-block:.8rem}\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container__0xaxG .CitySelectorModal_city-image__EiBDS {\n    margin-inline:auto;width: 8rem;\n    height: 8rem;\n    border-radius: .8rem;\n    overflow: hidden;\n    margin-bottom: .8rem\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container__0xaxG .CitySelectorModal_city-image__EiBDS {\n        width:5.6rem;\n        height: 5.6rem;\n        margin-bottom: .4rem\n    }\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container__0xaxG .CitySelectorModal_city-title__CVXw1 {\n    text-align: center;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    font-weight: 600\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container__0xaxG .CitySelectorModal_city-title__CVXw1 {\n        width:7.2rem;\n        font-size: 1.4rem;\n        line-height: 2rem;\n        margin-inline:auto}\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container__0xaxG:hover {\n    transform: scale(1.05)\n}\n\n.VehicleDetails_title-container__KoZSb {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-items: flex-start;\n    padding: 5.6rem;\n    background-color: #fff;\n    width: 36rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb {\n        padding:0;\n        width: 100%;\n        background-color: unset;\n        margin-bottom: .8rem\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq {\n        display:flex;\n        flex-direction: row;\n        justify-content: flex-start;\n        margin-bottom: 2rem\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-image__jxN3a {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-weight-desktop__Owqfe {\n    margin-top: 2rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-weight-desktop__Owqfe {\n        display:none\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd {\n    margin-top: .5rem;\n    margin-bottom: 2rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd {\n        display:flex;\n        flex-direction: column;\n        justify-content: center;\n        margin: 0 0 0 2rem\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd .VehicleDetails_vehicle-name__TwMXA {\n    font-weight: 600;\n    font-size: 2.4rem;\n    line-height: 3.2rem;\n    color: #2d2f34;\n    margin: 0;\n    text-align: center\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd .VehicleDetails_vehicle-name__TwMXA {\n        text-align:left;\n        font-size: 1.4rem;\n        line-height: 2rem\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd .VehicleDetails_vehicle-fare__Tt8Cl p {\n    font-weight: 400;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: #2d2f34;\n    margin: .1rem 0 0;\n    text-align: center\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd .VehicleDetails_vehicle-fare__Tt8Cl p {\n        text-align:left;\n        font-size: 1.2rem;\n        line-height: 1.6rem;\n        margin: .4rem 0 0\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd .VehicleDetails_vehicle-weight-mobile__rA9ML {\n    display: none;\n    margin-top: 2rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd .VehicleDetails_vehicle-weight-mobile__rA9ML {\n        display:block;\n        margin-top: .8rem;\n        width: -moz-fit-content;\n        width: fit-content\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_divider__4Ch7T {\n    width: 100%;\n    border-bottom: .1rem solid rgba(78,82,91,.12)\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS {\n    margin-top: 1.8rem;\n    width: 100%\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-section-title__ryt2g {\n    margin: 0;\n    font-weight: 600;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    color: #2d2f34\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-wrapper__ZntQf {\n    margin-top: .8rem;\n    display: grid;\n    grid-template-columns: repeat(1,1fr);\n    width: 100%;\n    align-items: center\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-wrapper__ZntQf {\n        grid-template-columns:repeat(2,1fr)\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-wrapper__ZntQf .VehicleDetails_best-for__8_39F {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 1.2rem\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-wrapper__ZntQf .VehicleDetails_best-for__8_39F .VehicleDetails_best-for-image__ZsSkM {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-wrapper__ZntQf .VehicleDetails_best-for__8_39F .VehicleDetails_best-for-title__R14mh {\n    margin: 0 0 0 .8rem;\n    font-weight: 400;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    color: #2d2f34;\n    text-align: left;\n    width: 100%\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_divider-mobile__9GSbM {\n    display: none\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_divider-mobile__9GSbM {\n        display:block;\n        width: 100%;\n        border-bottom: .1rem solid rgba(78,82,91,.12)\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_title-mobile__0_qDh {\n    display: none\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_title-mobile__0_qDh {\n        display:block;\n        text-align: left;\n        width: 100%;\n        margin: 2rem 0 0\n    }\n}\n\n@media only screen and (max-width: 1023px) {\n    .VehicleFareEstimateInput_container__ve1CJ {\n        width:100%\n    }\n}\n\n.VehicleFareEstimateInput_container__ve1CJ .VehicleFareEstimateInput_input-container__c_LeO {\n    background-color: #fff;\n    padding: 1.2rem 0;\n    width: 18rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .VehicleFareEstimateInput_container__ve1CJ .VehicleFareEstimateInput_input-container__c_LeO {\n        padding:.9rem 0;\n        width: 100%;\n        border: .07rem solid #ddd;\n        border-radius: .6rem\n    }\n}\n\n.VehicleFareEstimateInput_container__ve1CJ .VehicleFareEstimateInput_input-container__c_LeO .VehicleFareEstimateInput_label-required__7c_BR,.VehicleFareEstimateInput_container__ve1CJ .VehicleFareEstimateInput_input-container__c_LeO .VehicleFareEstimateInput_label__nM4lw {\n    font-weight: 600;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    color: #2d2f34;\n    padding-left: 2rem\n}\n\n.VehicleFareEstimateInput_container__ve1CJ .VehicleFareEstimateInput_input-container__c_LeO .VehicleFareEstimateInput_label-required__7c_BR:after {\n    content: \"*\";\n    color: #eb5757;\n    padding-left: .2rem\n}\n\n.VehicleFareEstimateInput_container__ve1CJ .VehicleFareEstimateInput_error-container__wkck8 {\n    position: absolute;\n    font-weight: 600;\n    font-size: 1rem;\n    line-height: 1.6rem;\n    color: #eb5757;\n    margin: 0 2rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .VehicleFareEstimateInput_container__ve1CJ .VehicleFareEstimateInput_error-container__wkck8 {\n        margin:0\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 {\n    width: -moz-fit-content;\n    width: fit-content;\n    height: 60rem;\n    display: flex;\n    position: relative;\n    overflow: hidden;\n    border-radius: .8rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 {\n        width:100%;\n        height: -moz-fit-content;\n        height: fit-content;\n        flex-direction: column;\n        padding: 2.4rem;\n        box-sizing: border-box;\n        background: #fcfcfc;\n        border-radius: .8rem .8rem 0 0;\n        overflow-y: auto\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x {\n    padding: 5.6rem;\n    background-color: #fff;\n    width: 22.4rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x {\n        padding:0;\n        width: -moz-fit-content;\n        width: fit-content;\n        background-color: unset;\n        margin-bottom: 1.5rem\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_title__6Mx3f {\n    padding: 0;\n    font-weight: 600;\n    font-size: 4.8rem;\n    line-height: 6.4rem;\n    color: #333;\n    margin: 0 0 2.4rem;\n    display: block\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_title__6Mx3f {\n        display:none;\n        font-size: 1.8rem;\n        line-height: 2.8rem;\n        margin-bottom: 0\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_sub-title__0_BHK {\n    margin: 0;\n    padding: 0;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: rgba(51,51,51,.64);\n    display: block\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_sub-title__0_BHK {\n        display:none;\n        font-size: 1.4rem;\n        line-height: 2rem\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_title-mobile__fnDsZ {\n    padding: 0;\n    font-weight: 600;\n    font-size: 4.8rem;\n    line-height: 6.4rem;\n    color: #333;\n    margin: 0 0 2.4rem;\n    display: none\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_title-mobile__fnDsZ {\n        display:block;\n        font-size: 1.8rem;\n        line-height: 2.8rem;\n        margin-bottom: 0\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_sub-title-mobile__Pfdz7 {\n    margin: 0;\n    padding: 0;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: rgba(51,51,51,.64);\n    display: none\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_sub-title-mobile__Pfdz7 {\n        display:block;\n        font-size: 1.4rem;\n        line-height: 2rem\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_form-container__deD6R {\n    background: #eef2ff;\n    box-sizing: border-box;\n    width: 42.8rem;\n    position: relative;\n    padding: 4.4rem 4rem 4rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_form-container__deD6R {\n        background:unset;\n        width: 100%;\n        padding: 0\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_close-modal-button__kTebR {\n    all: unset;\n    cursor: pointer;\n    margin: 2.4rem;\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: flex\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_close-modal-button__kTebR {\n        margin-top:2.5rem;\n        margin-right: 1.9rem\n    }\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd {\n    padding: 3.2rem 2.4rem;\n    border-top: .025rem solid rgba(78,82,91,.36);\n    border-radius: 0 .8rem .8rem .8rem;\n    filter: drop-shadow(0 .4rem 1.6rem rgba(0,0,0,.08));\n    background-color: #fff;\n    width: -moz-fit-content;\n    width: fit-content\n}\n\n@media only screen and (max-width: 1023px) {\n    .VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd {\n        filter:none;\n        background-color: transparent;\n        background-color: initial;\n        padding: 0;\n        width: auto\n    }\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_modal-title__Bp6M3 {\n    display: none\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center\n}\n\n@media only screen and (max-width: 1023px) {\n    .VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj {\n        display:flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        gap: 1.8rem\n    }\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj .VehicleFareEstimateForm_divider__lp0JR {\n    display: block;\n    border: none;\n    border-left: .1rem solid #ddd;\n    height: 5.6rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj .VehicleFareEstimateForm_divider__lp0JR {\n        display:none\n    }\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj input {\n    border: none;\n    outline: none;\n    font-family: inherit;\n    line-height: 1.8rem;\n    font-size: 1.2rem;\n    font-weight: 400;\n    text-overflow: ellipsis;\n    width: 80%;\n    background-color: #fff;\n    margin: .2rem 1.9rem;\n    padding: 0\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj input::-moz-placeholder {\n    color: rgba(51,51,51,.412);\n    font-family: inherit\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj input:-ms-input-placeholder {\n    color: rgba(51,51,51,.412);\n    font-family: inherit\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj input::placeholder {\n    color: rgba(51,51,51,.412);\n    font-family: inherit\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj .VehicleFareEstimateForm_submit-button-wrapper__6w1k2 .VehicleFareEstimateForm_submit-container__nsP72 {\n    width: 22rem;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj .VehicleFareEstimateForm_submit-button-wrapper__6w1k2 .VehicleFareEstimateForm_submit-container__nsP72 {\n        width:100%;\n        height: 5.6rem\n    }\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj .VehicleFareEstimateForm_submit-button-wrapper__6w1k2 .VehicleFareEstimateForm_submit-button-error__fluro {\n    position: absolute;\n    bottom: 1.5rem;\n    color: #eb5757;\n    font-weight: 600;\n    font-size: 1rem;\n    line-height: 1.6rem\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form-loader__2imIz {\n    width: 94.3rem;\n    height: 6.6rem\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_drop-input__f7RVx+div .VehicleFareEstimateForm_dropdown-item__SWVlc,.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_pickup-input__zZvaq+div .VehicleFareEstimateForm_dropdown-item__SWVlc {\n    padding: .9rem 1.9rem;\n    cursor: pointer;\n    font-size: 1.1rem;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    border-bottom: .05rem solid #d3d3d3\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_drop-input__f7RVx+div .VehicleFareEstimateForm_dropdown-item__SWVlc:hover,.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_pickup-input__zZvaq+div .VehicleFareEstimateForm_dropdown-item__SWVlc:hover {\n    cursor: pointer;\n    background-color: #f3f3f3\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk {\n    padding: 0;\n    margin: 0 auto;\n    height: -moz-max-content;\n    height: max-content\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk {\n        padding:0\n    }\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_modal-title__3rSMj {\n    font-weight: 600;\n    font-size: 2.4rem;\n    line-height: 3.2rem;\n    margin: 0;\n    color: #2d2f34\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_modal-title__3rSMj {\n        display:none\n    }\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 1.6rem;\n    margin-top: 1.2rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz {\n        margin-top:0;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        gap: 1.8rem\n    }\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz .VehicleFareEstimateFormModal_divider__MhYty {\n    display: none\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz input {\n    border: none;\n    outline: none;\n    font-family: inherit;\n    line-height: 2.4rem;\n    font-size: 1.6rem;\n    font-weight: 400;\n    text-overflow: ellipsis;\n    width: 90%;\n    background-color: #fff;\n    margin: .2rem 1.9rem 0;\n    padding: 0\n}\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_form-container__deD6R {\n    background: #eef2ff;\n    box-sizing: border-box;\n    width: 42.8rem;\n    position: relative;\n    padding: 4.4rem 4rem 4rem;\n}\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz input {\n        font-size:1.2rem;\n        line-height: 1.8rem;\n        margin: .2rem 1.4rem 0\n    }\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz input::-moz-placeholder {\n    color: rgba(51,51,51,.412);\n    font-family: inherit\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz input:-ms-input-placeholder {\n    color: rgba(51,51,51,.412);\n    font-family: inherit\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz input::placeholder {\n    color: rgba(51,51,51,.412);\n    font-family: inherit\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz .VehicleFareEstimateFormModal_submit-button-wrapper__wXj81 {\n    position: relative;\n    top: 9rem;\n    width: 100%\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz .VehicleFareEstimateFormModal_submit-button-wrapper__wXj81 {\n        position:static;\n        width: 100%\n    }\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz .VehicleFareEstimateFormModal_submit-button-wrapper__wXj81 .VehicleFareEstimateFormModal_submit-container__qL_IG {\n    height: 5.6rem\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz .VehicleFareEstimateFormModal_submit-button-wrapper__wXj81 .VehicleFareEstimateFormModal_submit-button-error__e9IDo {\n    position: absolute;\n    bottom: -1.7rem;\n    color: #eb5757;\n    font-weight: 600;\n    font-size: 1rem;\n    line-height: 1.6rem\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_drop-input__BjYO5+div .VehicleFareEstimateFormModal_dropdown-item__dxA4c,.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_pickup-input__NRKfU+div .VehicleFareEstimateFormModal_dropdown-item__dxA4c {\n    padding: .9rem 1.9rem;\n    cursor: pointer;\n    font-size: 1.1rem;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    border-bottom: .05rem solid #d3d3d3;\n    width: 100%\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_drop-input__BjYO5+div .VehicleFareEstimateFormModal_dropdown-item__dxA4c:hover,.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_pickup-input__NRKfU+div .VehicleFareEstimateFormModal_dropdown-item__dxA4c:hover {\n    cursor: pointer;\n    background-color: #f3f3f3\n}\n\n.VehicleFareEstimateInputModal_container__OQtPn {\n    width: 100%\n}\n\n.VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_input-container__qWzOQ {\n    background-color: #fff;\n    padding: .975rem 0;\n    border: .1rem solid #ddd;\n    border-radius: .8rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_input-container__qWzOQ {\n        padding:.9rem 0;\n        width: 100%;\n        border: .07rem solid #ddd;\n        border-radius: .6rem\n    }\n}\n\n.VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_input-container__qWzOQ .VehicleFareEstimateInputModal_label-required__lAQ8d,.VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_input-container__qWzOQ .VehicleFareEstimateInputModal_label__MyfNR {\n    font-weight: 600;\n    font-size: 1.2rem;\n    line-height: 1.6rem;\n    color: #2d2f34;\n    padding-left: 2rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_input-container__qWzOQ .VehicleFareEstimateInputModal_label-required__lAQ8d,.VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_input-container__qWzOQ .VehicleFareEstimateInputModal_label__MyfNR {\n        font-size:1rem;\n        line-height: 1.2rem;\n        padding-left: 1.4rem\n    }\n}\n\n.VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_input-container__qWzOQ .VehicleFareEstimateInputModal_label-required__lAQ8d:after {\n    content: \"*\";\n    color: #eb5757;\n    padding-left: .2rem\n}\n\n.VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_error-container__ATPh2 {\n    position: absolute;\n    font-weight: 600;\n    font-size: 1rem;\n    line-height: 1.6rem;\n    color: #eb5757;\n    margin: 0\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_error-container__ATPh2 {\n        margin:0\n    }\n}\n\n  </style>\n\n <div class=\"VehicleModalLayout_estimate-layout-container__opyh2\"><section class=\"VehicleDetails_title-container__KoZSb\"><div class=\"VehicleDetails_vehicle__5XxLq\"><div class=\"VehicleDetails_vehicle-image__jxN3a\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27226%27%20height=%27140%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"Tata Ace\" srcset=\"https://d3apkeya39jz4k.cloudfront.net/tata_ace_2deb9441fd.svg 1x, https://d3apkeya39jz4k.cloudfront.net/tata_ace_2deb9441fd.svg 2x\" src=\"https://d3apkeya39jz4k.cloudfront.net/tata_ace_2deb9441fd.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></div><div class=\"VehicleDetails_vehicle-weight-desktop__Owqfe\"><div class=\"VehicleCapacity_vehicle-capacity-container__X1gyj\"><div class=\"VehicleCapacity_vehicle-capacity-image-wrapper__TTxaY\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2716%27%20height=%2716%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"Vehicle Capacity Icon\" srcset=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/fare-estimate-result/weight.svg 1x, https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/fare-estimate-result/weight.svg 2x\" src=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/fare-estimate-result/weight.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></div><p class=\"VehicleCapacity_vehicle-capacity__asClv\">750kg</p></div></div><div class=\"VehicleDetails_vehicle-text__5sEtd\"><h3 class=\"VehicleDetails_vehicle-name__TwMXA\">Ace (Helper)</h3><div class=\"VehicleDetails_vehicle-fare__Tt8Cl\"><p>Starting from <strong>₹230</strong></p></div><div class=\"VehicleDetails_vehicle-weight-mobile__rA9ML\"><div class=\"VehicleCapacity_vehicle-capacity-container__X1gyj\"><div class=\"VehicleCapacity_vehicle-capacity-image-wrapper__TTxaY\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2716%27%20height=%2716%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"Vehicle Capacity Icon\" srcset=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/fare-estimate-result/weight.svg 1x, https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/fare-estimate-result/weight.svg 2x\" src=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/fare-estimate-result/weight.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></div><p class=\"VehicleCapacity_vehicle-capacity__asClv\">750kg</p></div></div></div></div><div class=\"VehicleDetails_divider__4Ch7T\"></div><div class=\"VehicleDetails_best-for-section-wrapper__bm_LS\"><h3 class=\"VehicleDetails_best-for-section-title__ryt2g\">Best for sending:</h3><div class=\"VehicleDetails_best-for-wrapper__ZntQf\"><div class=\"VehicleDetails_best-for__8_39F\"><div class=\"VehicleDetails_best-for-image__ZsSkM\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"Fruits and Vegetables\" srcset=\"https://d3apkeya39jz4k.cloudfront.net/liquor_11515f1904.svg 1x, https://d3apkeya39jz4k.cloudfront.net/liquor_11515f1904.svg 2x\" src=\"https://d3apkeya39jz4k.cloudfront.net/liquor_11515f1904.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></div><p class=\"VehicleDetails_best-for-title__R14mh\">Fruits and Vegetables</p></div><div class=\"VehicleDetails_best-for__8_39F\"><div class=\"VehicleDetails_best-for-image__ZsSkM\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"Chemicals\" srcset=\"https://d3apkeya39jz4k.cloudfront.net/science_e408f394d6.svg 1x, https://d3apkeya39jz4k.cloudfront.net/science_e408f394d6.svg 2x\" src=\"https://d3apkeya39jz4k.cloudfront.net/science_e408f394d6.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></div><p class=\"VehicleDetails_best-for-title__R14mh\">Chemicals</p></div><div class=\"VehicleDetails_best-for__8_39F\"><div class=\"VehicleDetails_best-for-image__ZsSkM\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"FMGC Food Products\" srcset=\"https://d3apkeya39jz4k.cloudfront.net/liquor_11515f1904.svg 1x, https://d3apkeya39jz4k.cloudfront.net/liquor_11515f1904.svg 2x\" src=\"https://d3apkeya39jz4k.cloudfront.net/liquor_11515f1904.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></div><p class=\"VehicleDetails_best-for-title__R14mh\">FMGC Food Products</p></div></div></div><div class=\"VehicleDetails_divider-mobile__9GSbM\"></div><h2 class=\"VehicleDetails_title-mobile__0_qDh\">Your Quick Quote</h2></section><section class=\"VehicleModalLayout_form-container__deD6R\"><div class=\"VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk\"><h2 class=\"VehicleFareEstimateFormModal_modal-title__3rSMj\">Get an Estimate</h2><form class=\"VehicleFareEstimateFormModal_fare-estimate-form__MTntz\"><div class=\"VehicleFareEstimateInputModal_container__OQtPn\"><div class=\"VehicleFareEstimateInputModal_input-container__qWzOQ\"><label class=\"VehicleFareEstimateInputModal_label-required__lAQ8d \n            \" for=\"Pickup Location\">Pickup Location</label><div style=\"display: block; position: relative;\"><input placeholder=\"enter pick up location\" id=\"custom-autocomplete-pickup-address-0.8037524639757163\" class=\"VehicleFareEstimateFormModal_pickup-input__NRKfU \" role=\"combobox\" aria-autocomplete=\"list\" aria-expanded=\"false\" autocomplete=\"off\" value=\"\" onfocus=\"this.setAttribute('autocomplete', 'chrome-off' );\"></div></div></div><div class=\"VehicleFareEstimateFormModal_divider__MhYty\"></div><div class=\"VehicleFareEstimateInputModal_container__OQtPn\"><div class=\"VehicleFareEstimateInputModal_input-container__qWzOQ\"><label class=\"VehicleFareEstimateInputModal_label-required__lAQ8d \n            \" for=\"Drop Location\">Drop Location</label><div style=\"display: block; position: relative;\"><input placeholder=\"enter drop location\" id=\"custom-autocomplete-pickup-address-0.633350466237725\" class=\"VehicleFareEstimateFormModal_drop-input__BjYO5 \" role=\"combobox\" aria-autocomplete=\"list\" aria-expanded=\"false\" autocomplete=\"off\" value=\"\" onfocus=\"this.setAttribute('autocomplete', 'chrome-off' );\"></div></div></div><div class=\"VehicleFareEstimateFormModal_divider__MhYty\"></div><div class=\"VehicleFareEstimateInputModal_container__OQtPn\"><div class=\"VehicleFareEstimateInputModal_input-container__qWzOQ\"><label class=\"VehicleFareEstimateInputModal_label-required__lAQ8d \n            \" for=\"Phone Number\">Phone Number</label><input placeholder=\"enter your phone number\" type=\"tel\" value=\"\"></div></div><div class=\"VehicleFareEstimateFormModal_divider__MhYty\"></div><div class=\"VehicleFareEstimateInputModal_container__OQtPn\"><div class=\"VehicleFareEstimateInputModal_input-container__qWzOQ\"><label class=\"VehicleFareEstimateInputModal_label__MyfNR \n            \" for=\"Name\">Name</label><input placeholder=\"enter your name\" type=\"text\" value=\"\"></div></div><div class=\"VehicleFareEstimateFormModal_submit-button-wrapper__wXj81\"><button class=\"FormInput_submit__icI8k FormInput_submit-enabled__qOriP VehicleFareEstimateFormModal_submit-container__qL_IG\"><div class=\"FormInput_submit-text__LL1rf\">Get an Estimate</div><div class=\"FormInput_submit-arrow-icon__Zz3tC\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2716%27%20height=%2716%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"Right Arrow Icon\" srcset=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/common/submit_arrow_16.svg 1x, https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/common/submit_arrow_16.svg 2x\" src=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/common/submit_arrow_16.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></div></button></div></form></div></section><button class=\"VehicleModalLayout_close-modal-button__kTebR\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2724%27%20height=%2724%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"close\" srcset=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/common/cross_24.svg 1x, https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/common/cross_24.svg 2x\" src=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/common/cross_24.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></button></div>";
      /***/
    },

    /***/
    "K8fT":
    /*!*****************************************************!*\
      !*** ./src/app/views/profile/profile.component.css ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function K8fT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "KKA+":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KKA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav\n  class=\"md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6\"\n>\n  <div\n    class=\"md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto\"\n  >\n    <!-- Toggler -->\n    <button\n      class=\"cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent\"\n      type=\"button\"\n      (click)=\"toggleCollapseShow('bg-white m-2 py-3 px-6')\"\n    >\n      <i class=\"fas fa-bars\"></i>\n    </button>\n    <!-- Brand -->\n    <a\n      [routerLink]=\"['/la']\"\n      class=\"md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0\"\n    >\n      <span class=\"block \"> Logist </span>\n\n    </a>\n    <!-- User -->\n    <ul class=\"md:hidden items-center flex flex-wrap list-none\">\n      <li class=\"inline-block relative\">\n        <app-notification-dropdown class=\"block\"></app-notification-dropdown>\n      </li>\n      <li class=\"inline-block relative\">\n        <app-user-dropdown class=\"block\"></app-user-dropdown>\n      </li>\n    </ul>\n    <!-- Collapse -->\n    <div\n      class=\"md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded\"\n      [ngClass]=\"collapseShow\"\n    >\n      <!-- Collapse header -->\n      <div\n        class=\"md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200\"\n      >\n        <div class=\"flex flex-wrap\">\n          <div class=\"w-6/12\">\n            <a\n              [routerLink]=\"['/']\"\n              class=\"md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0\"\n            >\n              Notus Angular\n            </a>\n          </div>\n          <div class=\"w-6/12 flex justify-end\">\n            <button\n              type=\"button\"\n              class=\"cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent\"\n              (click)=\"toggleCollapseShow('hidden')\"\n            >\n              <i class=\"fas fa-times\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <!-- Form -->\n      <form class=\"mt-6 mb-4 md:hidden\">\n        <div class=\"mb-3 pt-0\">\n          <input\n            type=\"text\"\n            placeholder=\"Search\"\n            class=\"border-0 px-3 py-2 h-12 border border-solid border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal\"\n          />\n        </div>\n      </form>\n\n      <!-- Divider -->\n      <hr class=\"my-4 md:min-w-full\" />\n      <!-- Heading -->\n      <h6\n        class=\"md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline\"\n      >\n        Admin Layout Pages\n      </h6>\n      <!-- Navigation -->\n\n      <ul class=\"md:flex-col md:min-w-full flex flex-col list-none\">\n        <li class=\"items-center\">\n          <a\n            [routerLink]=\"['/admin/dashboard']\"\n            class=\"text-xs uppercase py-3 font-bold block\"\n            routerLinkActive\n            #adminDashboard=\"routerLinkActive\"\n            [ngClass]=\"\n              adminDashboard.isActive\n                ? 'text-red-600 hover:text-red-700'\n                : 'text-blueGray-700 hover:text-blueGray-500'\n            \"\n          >\n            <i\n              class=\"fas fa-tv mr-2 text-sm\"\n              [ngClass]=\"\n                adminDashboard.isActive ? 'opacity-75' : 'text-blueGray-300'\n              \"\n            ></i>\n            Dashboard\n          </a>\n        </li>\n\n        <li class=\"items-center\">\n          <a\n            [routerLink]=\"['/admin/settings']\"\n            class=\"text-xs uppercase py-3 font-bold block\"\n            routerLinkActive\n            #adminSettings=\"routerLinkActive\"\n            [ngClass]=\"\n              adminSettings.isActive\n                ? 'text-red-600 hover:text-red-700'\n                : 'text-blueGray-700 hover:text-blueGray-500'\n            \"\n          >\n            <i\n              class=\"fas fa-tools mr-2 text-sm\"\n              [ngClass]=\"\n                adminSettings.isActive ? 'opacity-75' : 'text-blueGray-300'\n              \"\n            ></i>\n            Settings\n          </a>\n        </li>\n\n        <li class=\"items-center\">\n          <a\n            [routerLink]=\"['/admin/tables']\"\n            class=\"text-xs uppercase py-3 font-bold block\"\n            routerLinkActive\n            #adminTables=\"routerLinkActive\"\n            [ngClass]=\"\n              adminTables.isActive\n                ? 'text-red-600 hover:text-red-700'\n                : 'text-blueGray-700 hover:text-blueGray-500'\n            \"\n          >\n            <i\n              class=\"fas fa-table mr-2 text-sm\"\n              [ngClass]=\"\n                adminTables.isActive ? 'opacity-75' : 'text-blueGray-300'\n              \"\n            ></i>\n            Tables\n          </a>\n        </li>\n\n        <li class=\"items-center\">\n          <a\n            [routerLink]=\"['/admin/maps']\"\n            class=\"text-xs uppercase py-3 font-bold block\"\n            routerLinkActive\n            #adminMaps=\"routerLinkActive\"\n            [ngClass]=\"\n              adminMaps.isActive\n                ? 'text-red-600 hover:text-red-700'\n                : 'text-blueGray-700 hover:text-blueGray-500'\n            \"\n          >\n            <i\n              class=\"fas fa-map-marked mr-2 text-sm\"\n              [ngClass]=\"\n                adminMaps.isActive ? 'opacity-75' : 'text-blueGray-300'\n              \"\n            ></i>\n            Maps\n          </a>\n        </li>\n      </ul>\n\n      <!-- Divider -->\n      <hr class=\"my-4 md:min-w-full\" />\n      <!-- Heading -->\n      <h6\n        class=\"md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline\"\n      >\n        Auth Layout Pages\n      </h6>\n      <!-- Navigation -->\n\n      <ul class=\"md:flex-col md:min-w-full flex flex-col list-none md:mb-4\">\n        <li class=\"items-center\">\n          <a\n            [routerLink]=\"['/auth/login']\"\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block\"\n          >\n            <i class=\"fas fa-fingerprint text-blueGray-300 mr-2 text-sm\"></i>\n            Login\n          </a>\n        </li>\n\n        <li class=\"items-center\">\n          <a\n            [routerLink]=\"['/auth/register']\"\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block\"\n          >\n            <i class=\"fas fa-clipboard-list text-blueGray-300 mr-2 text-sm\"></i>\n            Register\n          </a>\n        </li>\n      </ul>\n\n      <!-- Divider -->\n      <hr class=\"my-4 md:min-w-full\" />\n      <!-- Heading -->\n      <h6\n        class=\"md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline\"\n      >\n        No Layout Pages\n      </h6>\n      <!-- Navigation -->\n\n      <ul class=\"md:flex-col md:min-w-full flex flex-col list-none md:mb-4\">\n        <li class=\"items-center\">\n          <a\n            [routerLink]=\"['/landing']\"\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block\"\n          >\n            <i class=\"fas fa-newspaper text-blueGray-300 mr-2 text-sm\"></i>\n            Landing Page\n          </a>\n        </li>\n\n        <li class=\"items-center\">\n          <a\n            [routerLink]=\"['/profile']\"\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block\"\n          >\n            <i class=\"fas fa-user-circle text-blueGray-300 mr-2 text-sm\"></i>\n            Profile Page\n          </a>\n        </li>\n      </ul>\n\n      <!-- Divider -->\n      <hr class=\"my-4 md:min-w-full\" />\n      <!-- Heading -->\n      <h6\n        class=\"md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline\"\n      >\n        Documentation\n      </h6>\n      <!-- Navigation -->\n      <ul class=\"md:flex-col md:min-w-full flex flex-col list-none md:mb-4\">\n        <li class=\"inline-flex\">\n          <a\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/colors/notus\"\n            target=\"_blank\"\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold\"\n          >\n            <i class=\"fas fa-paint-brush mr-2 text-blueGray-300 text-base\"></i>\n            Styles\n          </a>\n        </li>\n\n      </ul>\n    </div>\n  </div>\n</nav>\n";
      /***/
    },

    /***/
    "KxJz":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/dashboard/dashboard.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KxJz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"flex flex-wrap\">\n  <div class=\"w-full xl:w-8/12 mb-12 xl:mb-0 px-4\">\n    <app-card-line-chart></app-card-line-chart>\n  </div>\n  <div class=\"w-full xl:w-4/12 px-4\">\n    <app-card-bar-chart></app-card-bar-chart>\n  </div>\n</div>\n<div class=\"flex flex-wrap mt-4\">\n  <div class=\"w-full xl:w-8/12 mb-12 xl:mb-0 px-4\">\n    <app-card-page-visits></app-card-page-visits>\n  </div>\n  <div class=\"w-full xl:w-4/12 px-4\">\n    <app-card-social-traffic></app-card-social-traffic>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "L/HX":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-page-visits/card-page-visits.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LHX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div\n  class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\"\n>\n  <div class=\"rounded-t mb-0 px-4 py-3 border-0\">\n    <div class=\"flex flex-wrap items-center\">\n      <div class=\"relative w-full px-4 max-w-full flex-grow flex-1\">\n        <h3 class=\"font-semibold text-base text-blueGray-700\" style=\"text-align: center;\">Transaction History</h3>\n      </div>\n      <div class=\"relative w-full px-4 max-w-full flex-grow flex-1 text-right\">\n        <button\n          class=\"bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          type=\"button\"\n        >\n          See all\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"block w-full overflow-x-auto\">\n    <!-- Projects table -->\n    <table class=\"items-center w-full bg-transparent border-collapse\">\n      <thead>\n        <tr>\n          <th\n            class=\"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\n          >\n           Date\n          </th>\n          <th\n            class=\"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\n          >\n           Type \n          </th>\n          <th\n            class=\"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\n          >\n            Amount\n          </th>\n          <th\n            class=\"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\n          >\n            Refernce id\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\n          >\n            /argon/\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            4,569\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            340\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <i class=\"fas fa-arrow-up text-emerald-500 mr-4\"></i>\n            46,53%\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\n          >\n            /argon/index.html\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            3,985\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            319\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <i class=\"fas fa-arrow-down text-orange-500 mr-4\"></i>\n            46,53%\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\n          >\n            /argon/charts.html\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            3,513\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            294\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <i class=\"fas fa-arrow-down text-orange-500 mr-4\"></i>\n            36,49%\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\n          >\n            /argon/tables.html\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            2,050\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            147\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <i class=\"fas fa-arrow-up text-emerald-500 mr-4\"></i>\n            50,87%\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\n          >\n            /argon/profile.html\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            1,795\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            190\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <i class=\"fas fa-arrow-down text-red-500 mr-4\"></i>\n            46,53%\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "LN9C":
    /*!***********************************************************!*\
      !*** ./src/app/views/auth/register/register.component.ts ***!
      \***********************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function LN9C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register.component.html */
      "O/dV");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(http) {
          _classCallCheck(this, RegisterComponent);

          this.http = http;
          this.name = "";
          this.address = "";
          this.phone = 0;
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "register",
          value: function register() {
            var _this2 = this;

            var bodyData = {
              "name": this.name,
              "address": this.address,
              "phone": this.phone
            };
            this.http.post("http://localhost:8086/user/create", bodyData, {
              responseType: 'text'
            }).subscribe(function (resultData) {
              console.log(resultData);
              alert("Registered Successfully");
              _this2.name = '';
              _this2.address = '';
              _this2.phone = 0;
            });
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-register",
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], RegisterComponent);
      /***/
    },

    /***/
    "LUN3":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth/login/login.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function LUN3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container mx-auto px-4 h-full\">\n  <div class=\"flex content-center items-center justify-center h-full\">\n    <div class=\"w-full lg:w-6/12 px-4\">\n      <div\n        class=\"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0\"\n      >\n        <div class=\"rounded-t mb-0 px-6 py-6\">\n          <div class=\"text-center mb-3\">\n            <h6 class=\"text-blueGray-500 text-sm font-bold\">Sign up with</h6>\n          </div>\n          <div class=\"btn-wrapper text-center\">\n            <button\n              class=\"bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150\"\n              type=\"button\"\n            >\n              <img alt=\"...\" class=\"w-5 mr-1\" src=\"assets/img/github.svg\" />\n              Github\n            </button>\n            <button\n              class=\"bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150\"\n              type=\"button\"\n            >\n              <img alt=\"...\" class=\"w-5 mr-1\" src=\"assets/img/google.svg\" />\n              Google\n            </button>\n          </div>\n          <hr class=\"mt-6 border-b-1 border-blueGray-300\" />\n        </div>\n        <div class=\"flex-auto px-4 lg:px-10 py-10 pt-0\">\n          <div class=\"text-blueGray-400 text-center mb-3 font-bold\">\n            <small>Or sign up with credentials</small>\n          </div>\n          <form >\n            <div class=\"form-group\">\n              <label>Name</label>\n              <input type=\"text\" [(ngModel)]=\"name\" [ngModelOptions]=\"{standalone: true}\"  class=\"form-control\" id=\"name\" placeholder=\"Enter Name\">\n         \n            </div>\n            <div class=\"form-group\">\n              <label>Email Address</label>\n              <input type=\"text\" [(ngModel)]=\"address\" [ngModelOptions]=\"{standalone: true}\"  class=\"form-control\" id=\"address\" placeholder=\"Enter address\">\n        \n            </div>\n            <div class=\"form-group\">\n              <label>Password</label>\n              <input type=\"text\" [(ngModel)]=\"phone\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"phone\" placeholder=\"Enter Mobile\">\n        \n            </div>\n          \n          <button type=\"submit\" class=\"btn btn-primary mt-4\" (click)=\"register()\" >Submit</button>\n            <div class=\"text-center mt-6\">\n              <button\n                class=\"bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150\"\n                type=\"button\"\n              >\n                Create Account\n              </button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "LnYT":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/landing/courier/courier.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LnYT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<style>\nmain{\n    padding: auto;\n    margin: auto;\n    margin-left:40px;\n}\n.courier-container-desktop .courier-benefits-section-desktop .benefits-container .header-section .heading {\n    position: relative;\n    font-size: 2.6rem;\n    line-height: 2.4rem;\n    font-weight: 600;\n}\n.courier-container-desktop .courier-benefits-section-desktop .benefits-container .benefits-content .benefits-list-conatiner .benefit-description .image-wrapper img {\n    width: 15rem;\n    aspect-ratio: 1/1;\n}\nimg {\n    overflow-clip-margin: content-box;\n    overflow: clip;\n}\n.courier-container-desktop .courier-benefits-section-desktop .benefits-container .benefits-content .benefits-list-conatiner .benefit-description .benefit-content {\n    width: 85%;\n    max-width: 87ch;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n.courier-container-desktop .courier-benefits-section-desktop .benefits-container .benefits-content .benefits-list-conatiner .benefit-description .benefit-content .title {\n    margin: 0;\n    font-weight: 600;\n    font-size: 2rem;\n    line-height: 2.8rem;\n    margin-bottom: 1rem;\n}\nh2 {\n    display: block;\n    font-size: 1.5em;\n    margin-block-start: 0.83em;\n    margin-block-end: 0.83em;\n    margin-inline-start: 0px;\n    margin-inline-end: 0px;\n    font-weight: bold;\n}\n.courier-container-desktop .courier-benefits-section-desktop .benefits-container .header-section {\n    display: flex;\n    flex-direction: column;\n    gap: 4rem;\n}\n.courier-container-desktop {\n    padding-top: 8rem;\n    margin: auto;\n    max-width: 1500px;\n    background-color: #fff;\n    box-shadow: 5px 0 5px -5px rgba(0,0,0,.5), -5px 0 5px -5px rgba(0,0,0,.5);\n    position: relative;\n}\n\n.courier-container-desktop .courier-benefits-section-desktop .benefits-container .header-section .heading-description {\n  \n    \n    font-size: 1.6rem;\n    line-height: 2.4rem;\n}\n</style>\n\n<app-auth-navbar></app-auth-navbar>\n<main>\n  <div class=\"relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75\">\n    <div class=\"absolute top-0 w-full h-full bg-center bg-cover\" style=\"background-image: url('https://img.freepik.com/premium-psd/3d-illustration-delivery-service-courier-checking-package-list-paper-note_69464-2254.jpg');\">\n      <span id=\"blackOverlay\" class=\"w-full h-full absolute opacity-75 bg-black\"></span>\n    </div>\n    <div class=\"container relative mx-auto\">\n      <div class=\"items-center flex flex-wrap\">\n        <div class=\"w-full lg:w-6/12 px-4 ml-auto mr-auto text-center\">\n          <div class=\"pr-12\">\n            <h1 class=\"text-white font-semibold text-5xl\">\n              Reshaping Online Courier Services in India\n\n            </h1>\n            <p class=\"mt-4 text-lg text-blueGray-200\">\n              This is a simple example of a Landing Page you can build using\n              Notus Angular. It features multiple CSS components based on the\n              Tailwind CSS design system.\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px\" style=\"transform: translateZ(0)\">\n        <svg class=\"absolute bottom-0 overflow-hidden\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\" version=\"1.1\" viewBox=\"0 0 2560 100\" x=\"0\" y=\"0\">\n          <polygon class=\"text-blueGray-200 fill-current\" points=\"2560 0 2560 100 0 100\"></polygon>\n        </svg>\n      </div>\n    </div>\n\n    \n    <div class=\"flex flex-wrap items-center mt-32\" id=\"bookingSection\">\n        <div class=\"w-full md:w-5/12 px-4 mr-auto ml-auto\">\n          <h3 style=\"font-size: 40px; text-align: left; padding: 20px;\">Courier Service</h3>\n          <div class=\"cont\">\n            <div class=\"curvy-box\">\n              <label class=\"lbl\" for=\"length\">Pickup Pincode:</label>\n              <input class=\"inp\" type=\"text\" id=\"length\" /><br>\n              <label style=\" margin-right: 10px; font-size: 18px; color: #333;\" for=\"breadth\">Drop Pincode:</label>\n              <input class=\"inp\" type=\"text\" id=\"breadth\" /><br>\n              <label style=\" margin-right: 10px; font-size: 18px; color: #333;\" for=\"height\">Mobile number:</label>\n              <input class=\"inp\" type=\"number\" id=\"height\"  /><br>\n              <button type=\"submit\">Get Estimate</button>\n              \n            </div>\n          </div>\n        </div>\n      </div>\n\n        </main>\n        <app-footer></app-footer>";
      /***/
    },

    /***/
    "O/dV":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth/register/register.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ODV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container mx-auto px-4 h-full\">\n  <div class=\"flex content-center items-center justify-center h-full\">\n    <div class=\"w-full lg:w-6/12 px-4\">\n      <div\n        class=\"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0\"\n      >\n        <div class=\"rounded-t mb-0 px-6 py-6\">\n          <div class=\"text-center mb-3\">\n            <h6 class=\"text-blueGray-500 text-sm font-bold\">Sign up with</h6>\n          </div>\n          <div class=\"btn-wrapper text-center\">\n            <button\n              class=\"bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150\"\n              type=\"button\"\n            >\n              <img alt=\"...\" class=\"w-5 mr-1\" src=\"assets/img/github.svg\" />\n              Github\n            </button>\n            <button\n              class=\"bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150\"\n              type=\"button\"\n            >\n              <img alt=\"...\" class=\"w-5 mr-1\" src=\"assets/img/google.svg\" />\n              Google\n            </button>\n          </div>\n          <hr class=\"mt-6 border-b-1 border-blueGray-300\" />\n        </div>\n        <div class=\"flex-auto px-4 lg:px-10 py-10 pt-0\">\n          <div class=\"text-blueGray-400 text-center mb-3 font-bold\">\n            <small>Or sign up with credentials</small>\n          </div>\n          <form (ngSubmit)=\"registerUser()\">\n            <div class=\"form-group\">\n              <label>Name</label>\n              <input type=\"text\" [(ngModel)]=\"name\" [ngModelOptions]=\"{standalone: true}\"  class=\"form-control\" id=\"name\" placeholder=\"Enter Name\">\n         \n            </div>\n            <div class=\"form-group\">\n              <label>address</label>\n              <input type=\"text\" [(ngModel)]=\"address\" [ngModelOptions]=\"{standalone: true}\"  class=\"form-control\" id=\"address\" placeholder=\"Enter address\">\n        \n            </div>\n            <div class=\"form-group\">\n              <label>Phone</label>\n              <input type=\"text\" [(ngModel)]=\"phone\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"phone\" placeholder=\"Enter Mobile\">\n        \n            </div>\n          \n          <button type=\"submit\" class=\"btn btn-primary mt-4\" (click)=\"register()\" >Submit</button>\n            <div class=\"text-center mt-6\">\n              <button\n                class=\"bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150\"\n                type=\"button\"\n              >\n                Create Account\n              </button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "Pibi":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbars/admin-navbar/admin-navbar.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Pibi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Navbar -->\n<nav\n  class=\"absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4\"\n>\n  <div\n    class=\"w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4\"\n  >\n    <!-- Brand -->\n    <a\n      class=\"text-white text-sm uppercase hidden lg:inline-block font-semibold\"\n      href=\"#pablo\"\n      >Dashboard</a\n    >\n    <!-- Form -->\n    <form\n      class=\"md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3\"\n    >\n      <div class=\"relative flex w-full flex-wrap items-stretch\">\n        <span\n          class=\"z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3\"\n          ><i class=\"fas fa-search\"></i\n        ></span>\n        <input\n          type=\"text\"\n          placeholder=\"Search here...\"\n          class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10\"\n        />\n      </div>\n    </form>\n    <!-- User -->\n    <ul class=\"flex-col md:flex-row list-none items-center hidden md:flex\">\n      <app-user-dropdown class=\"block\"></app-user-dropdown>\n    </ul>\n  </div>\n</nav>\n";
      /***/
    },

    /***/
    "R+tk":
    /*!**************************************************!*\
      !*** ./src/app/layouts/admin/admin.component.ts ***!
      \**************************************************/

    /*! exports provided: AdminComponent */

    /***/
    function RTk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
        return AdminComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_admin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./admin.component.html */
      "/ztn");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AdminComponent = /*#__PURE__*/function () {
        function AdminComponent() {
          _classCallCheck(this, AdminComponent);
        }

        _createClass(AdminComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdminComponent;
      }();

      AdminComponent.ctorParameters = function () {
        return [];
      };

      AdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-admin",
        template: _raw_loader_admin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AdminComponent);
      /***/
    },

    /***/
    "RLAj":
    /*!***************************************************************************!*\
      !*** ./src/app/components/headers/header-stats/header-stats.component.ts ***!
      \***************************************************************************/

    /*! exports provided: HeaderStatsComponent */

    /***/
    function RLAj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderStatsComponent", function () {
        return HeaderStatsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_header_stats_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./header-stats.component.html */
      "UhXh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HeaderStatsComponent = /*#__PURE__*/function () {
        function HeaderStatsComponent() {
          _classCallCheck(this, HeaderStatsComponent);
        }

        _createClass(HeaderStatsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderStatsComponent;
      }();

      HeaderStatsComponent.ctorParameters = function () {
        return [];
      };

      HeaderStatsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-header-stats",
        template: _raw_loader_header_stats_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], HeaderStatsComponent);
      /***/
    },

    /***/
    "RMzx":
    /*!****************************************************!*\
      !*** ./src/app/views/landing/landing.component.ts ***!
      \****************************************************/

    /*! exports provided: LandingComponent */

    /***/
    function RMzx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
        return LandingComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./landing.component.html */
      "AN84");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LandingComponent = /*#__PURE__*/function () {
        function LandingComponent(elementRef) {
          _classCallCheck(this, LandingComponent);

          this.elementRef = elementRef;
        }

        _createClass(LandingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "calculateEstimate",
          value: function calculateEstimate() {
            var lengthInput = document.getElementById('length');
            var breadthInput = document.getElementById('breadth');
            var heightInput = document.getElementById('height');
            var multiplierInput = document.getElementById('multiplier');
            var lengthValue = lengthInput.valueAsNumber;
            var breadthValue = breadthInput.valueAsNumber;
            var heightValue = heightInput.valueAsNumber;
            var multiplierValue = Number(multiplierInput.value);

            if (this.isValidInput(lengthValue, breadthValue, heightValue)) {
              var volume = lengthValue * breadthValue * heightValue / 1728;
              var weight = Math.max(volume, this.calculateMeasuredWeight());
              var finalWeight = weight * multiplierValue;
              this.estimateResult = isNaN(finalWeight) ? 0 : finalWeight;
            } else {
              this.estimateResult = NaN;
            }
          }
        }, {
          key: "calculateMeasuredWeight",
          value: function calculateMeasuredWeight() {
            // Logic to calculate the measured weight
            // Implement your own logic or use a predefined formula
            // For example, you can prompt the user to enter the measured weight or calculate it based on other factors
            return 0; // Replace with your actual calculated weight
          }
        }, {
          key: "isValidInput",
          value: function isValidInput(length, breadth, height) {
            return typeof length === 'number' && typeof breadth === 'number' && typeof height === 'number' && !isNaN(length) && !isNaN(breadth) && !isNaN(height); // Add your validation logic here if needed

            return true;
          }
        }, {
          key: "scrollToBookingSection",
          value: function scrollToBookingSection() {
            var bookingSection = this.elementRef.nativeElement.querySelector('#bookingSection');

            if (bookingSection) {
              bookingSection.scrollIntoView({
                behavior: 'smooth'
              });
            }
          }
        }, {
          key: "scrollToBookSection",
          value: function scrollToBookSection() {
            var bookingSection = this.elementRef.nativeElement.querySelector('#booking');

            if (bookingSection) {
              bookingSection.scrollIntoView({
                behavior: 'smooth'
              });
            }
          }
        }, {
          key: "scrollToLookSection",
          value: function scrollToLookSection() {
            var bookingSection = this.elementRef.nativeElement.querySelector('#look');

            if (bookingSection) {
              bookingSection.scrollIntoView({
                behavior: 'smooth'
              });
            }
          }
        }]);

        return LandingComponent;
      }();

      LandingComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }];
      };

      LandingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-landing',
        template: _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], LandingComponent);
      /***/
    },

    /***/
    "RORk":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbars/index-navbar/index-navbar.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RORk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav\n  class=\"top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow\"\n>\n  <div\n    class=\"container px-4 mx-auto flex flex-wrap items-center justify-between\"\n  >\n    <div\n      class=\"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start\"\n    >\n      <a\n        [routerLink]=\"['/']\"\n        class=\"text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase\"\n        href=\"#pablo\"\n      >\n        Notus Angular\n      </a>\n      <button\n        class=\"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none\"\n        type=\"button\"\n        (click)=\"setNavbarOpen()\"\n      >\n        <i class=\"fas fa-bars\"></i>\n      </button>\n    </div>\n    <div\n      class=\"lg:flex flex-grow items-center\"\n      [ngClass]=\"{ hidden: !navbarOpen, block: navbarOpen }\"\n      id=\"example-navbar-warning\"\n    >\n      <ul class=\"flex flex-col lg:flex-row list-none mr-auto\">\n        <li class=\"flex items-center\">\n          <a\n            class=\"hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold\"\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus?ref=na-index-navbar\"\n          >\n            <i\n              class=\"text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2\"\n            ></i>\n            Docs\n          </a>\n        </li>\n      </ul>\n      <ul class=\"flex flex-col lg:flex-row list-none lg:ml-auto\">\n        <li class=\"flex items-center\">\n          <app-index-dropdown class=\"block\"></app-index-dropdown>\n        </li>\n        <li class=\"flex items-center\">\n          <a\n            class=\"hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold\"\n            href=\"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-angular%2F\"\n            target=\"_blank\"\n          >\n            <i class=\"text-blueGray-400 fab fa-facebook text-lg leading-lg\"></i>\n            <span class=\"lg:hidden inline-block ml-2\">Share</span>\n          </a>\n        </li>\n\n        <li class=\"flex items-center\">\n          <a\n            class=\"hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold\"\n            href=\"https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-angular%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20Angular%20UI%20Kit%20and%20Admin.%20Let%20Notus%20Angular%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.\"\n            target=\"_blank\"\n          >\n            <i class=\"text-blueGray-400 fab fa-twitter text-lg leading-lg\"></i>\n            <span class=\"lg:hidden inline-block ml-2\">Tweet</span>\n          </a>\n        </li>\n\n        <li class=\"flex items-center\">\n          <a\n            class=\"hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold\"\n            href=\"https://github.com/creativetimofficial/notus-angular?ref=na-index-navbar\"\n            target=\"_blank\"\n          >\n            <i class=\"text-blueGray-400 fab fa-github text-lg leading-lg\"></i>\n            <span class=\"lg:hidden inline-block ml-2\">Star</span>\n          </a>\n        </li>\n\n        <li class=\"flex items-center\">\n          <button\n            class=\"bg-red-600 text-white active:bg-red-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150\"\n            type=\"button\"\n          >\n            <i class=\"fas fa-arrow-alt-circle-down\"></i> Download\n          </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n";
      /***/
    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "SQpN":
    /*!****************************************************************!*\
      !*** ./src/app/views/landing/flipthree/flipthree.component.ts ***!
      \****************************************************************/

    /*! exports provided: FlipthreeComponent */

    /***/
    function SQpN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlipthreeComponent", function () {
        return FlipthreeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_flipthree_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./flipthree.component.html */
      "dYWj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FlipthreeComponent = /*#__PURE__*/function () {
        function FlipthreeComponent() {
          _classCallCheck(this, FlipthreeComponent);
        }

        _createClass(FlipthreeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FlipthreeComponent;
      }();

      FlipthreeComponent.ctorParameters = function () {
        return [];
      };

      FlipthreeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-flipthree',
        template: _raw_loader_flipthree_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], FlipthreeComponent);
      /***/
    },

    /***/
    "Skd6":
    /*!***********************************************************************************************!*\
      !*** ./src/app/components/dropdowns/notification-dropdown/notification-dropdown.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: NotificationDropdownComponent */

    /***/
    function Skd6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationDropdownComponent", function () {
        return NotificationDropdownComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_notification_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./notification-dropdown.component.html */
      "XqAX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _popperjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @popperjs/core */
      "EjV/");

      var NotificationDropdownComponent = /*#__PURE__*/function () {
        function NotificationDropdownComponent() {
          _classCallCheck(this, NotificationDropdownComponent);

          this.dropdownPopoverShow = false;
        }

        _createClass(NotificationDropdownComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_3__["createPopper"])(this.btnDropdownRef.nativeElement, this.popoverDropdownRef.nativeElement, {
              placement: "bottom-start"
            });
          }
        }, {
          key: "toggleDropdown",
          value: function toggleDropdown(event) {
            event.preventDefault();

            if (this.dropdownPopoverShow) {
              this.dropdownPopoverShow = false;
            } else {
              this.dropdownPopoverShow = true;
            }
          }
        }]);

        return NotificationDropdownComponent;
      }();

      NotificationDropdownComponent.propDecorators = {
        btnDropdownRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["btnDropdownRef", {
            "static": false
          }]
        }],
        popoverDropdownRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["popoverDropdownRef", {
            "static": false
          }]
        }]
      };
      NotificationDropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-notification-dropdown",
        template: _raw_loader_notification_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], NotificationDropdownComponent);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = "angular-dashboard-page";
      });

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-root",
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AppComponent);
      /***/
    },

    /***/
    "TmC4":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/cards/card-bar-chart/card-bar-chart.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: CardBarChartComponent */

    /***/
    function TmC4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardBarChartComponent", function () {
        return CardBarChartComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_card_bar_chart_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./card-bar-chart.component.html */
      "/GnJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! chart.js */
      "MO+k");
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);

      var CardBarChartComponent = /*#__PURE__*/function () {
        function CardBarChartComponent() {
          _classCallCheck(this, CardBarChartComponent);
        }

        _createClass(CardBarChartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var config = {
              type: "bar",
              data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                  label: new Date().getFullYear(),
                  backgroundColor: "#ed64a6",
                  borderColor: "#ed64a6",
                  data: [30, 78, 56, 34, 100, 45, 13],
                  fill: false,
                  barThickness: 8
                }, {
                  label: new Date().getFullYear() - 1,
                  fill: false,
                  backgroundColor: "#4c51bf",
                  borderColor: "#4c51bf",
                  data: [27, 68, 86, 74, 10, 4, 87],
                  barThickness: 8
                }]
              },
              options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                  display: false,
                  text: "Orders Chart"
                },
                tooltips: {
                  mode: "index",
                  intersect: false
                },
                hover: {
                  mode: "nearest",
                  intersect: true
                },
                legend: {
                  labels: {
                    fontColor: "rgba(0,0,0,.4)"
                  },
                  align: "end",
                  position: "bottom"
                },
                scales: {
                  xAxes: [{
                    display: false,
                    scaleLabel: {
                      display: true,
                      labelString: "Month"
                    },
                    gridLines: {
                      borderDash: [2],
                      borderDashOffset: [2],
                      color: "rgba(33, 37, 41, 0.3)",
                      zeroLineColor: "rgba(33, 37, 41, 0.3)",
                      zeroLineBorderDash: [2],
                      zeroLineBorderDashOffset: [2]
                    }
                  }],
                  yAxes: [{
                    display: true,
                    scaleLabel: {
                      display: false,
                      labelString: "Value"
                    },
                    gridLines: {
                      borderDash: [2],
                      drawBorder: false,
                      borderDashOffset: [2],
                      color: "rgba(33, 37, 41, 0.2)",
                      zeroLineColor: "rgba(33, 37, 41, 0.15)",
                      zeroLineBorderDash: [2],
                      zeroLineBorderDashOffset: [2]
                    }
                  }]
                }
              }
            };
            var ctx = document.getElementById("bar-chart");
            ctx = ctx.getContext("2d");
            new chart_js__WEBPACK_IMPORTED_MODULE_3___default.a(ctx, config);
          }
        }]);

        return CardBarChartComponent;
      }();

      CardBarChartComponent.ctorParameters = function () {
        return [];
      };

      CardBarChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-bar-chart",
        template: _raw_loader_card_bar_chart_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], CardBarChartComponent);
      /***/
    },

    /***/
    "UIMn":
    /*!***************************************************************************!*\
      !*** ./src/app/components/footers/footer-admin/footer-admin.component.ts ***!
      \***************************************************************************/

    /*! exports provided: FooterAdminComponent */

    /***/
    function UIMn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterAdminComponent", function () {
        return FooterAdminComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_footer_admin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./footer-admin.component.html */
      "EbUq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterAdminComponent = /*#__PURE__*/function () {
        function FooterAdminComponent() {
          _classCallCheck(this, FooterAdminComponent);

          this.date = new Date().getFullYear();
        }

        _createClass(FooterAdminComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterAdminComponent;
      }();

      FooterAdminComponent.ctorParameters = function () {
        return [];
      };

      FooterAdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-footer-admin",
        template: _raw_loader_footer_admin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], FooterAdminComponent);
      /***/
    },

    /***/
    "UY35":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/dropdowns/table-dropdown/table-dropdown.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: TableDropdownComponent */

    /***/
    function UY35(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableDropdownComponent", function () {
        return TableDropdownComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_table_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./table-dropdown.component.html */
      "rOy2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _popperjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @popperjs/core */
      "EjV/");

      var TableDropdownComponent = /*#__PURE__*/function () {
        function TableDropdownComponent() {
          _classCallCheck(this, TableDropdownComponent);

          this.dropdownPopoverShow = false;
        }

        _createClass(TableDropdownComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_3__["createPopper"])(this.btnDropdownRef.nativeElement, this.popoverDropdownRef.nativeElement, {
              placement: "bottom-start"
            });
          }
        }, {
          key: "toggleDropdown",
          value: function toggleDropdown(event) {
            event.preventDefault();

            if (this.dropdownPopoverShow) {
              this.dropdownPopoverShow = false;
            } else {
              this.dropdownPopoverShow = true;
            }
          }
        }]);

        return TableDropdownComponent;
      }();

      TableDropdownComponent.propDecorators = {
        btnDropdownRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["btnDropdownRef", {
            "static": false
          }]
        }],
        popoverDropdownRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["popoverDropdownRef", {
            "static": false
          }]
        }]
      };
      TableDropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-table-dropdown",
        template: _raw_loader_table_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], TableDropdownComponent);
      /***/
    },

    /***/
    "UhXh":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/headers/header-stats/header-stats.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UhXh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Header -->\n<div class=\"relative bg-red-600 md:pt-32 pb-32 pt-12\">\n  <div class=\"px-4 md:px-10 mx-auto w-full\">\n    <div>\n      <!-- Card stats -->\n      <div class=\"flex flex-wrap\">\n        <div class=\"w-full lg:w-6/12 xl:w-3/12 px-4\">\n          <app-card-stats\n            statSubtitle=\"TRAFFIC\"\n            statTitle=\"350,897\"\n            statArrow=\"up\"\n            statPercent=\"3.48\"\n            statPercentColor=\"text-emerald-500\"\n            statDescripiron=\"Since last month\"\n            statIconName=\"far fa-chart-bar\"\n            statIconColor=\"bg-red-500\"\n          ></app-card-stats>\n        </div>\n        <div class=\"w-full lg:w-6/12 xl:w-3/12 px-4\">\n          <app-card-stats\n            statSubtitle=\"NEW USERS\"\n            statTitle=\"2,356\"\n            statArrow=\"down\"\n            statPercent=\"3.48\"\n            statPercentColor=\"text-red-500\"\n            statDescripiron=\"Since last week\"\n            statIconName=\"fas fa-chart-pie\"\n            statIconColor=\"bg-orange-500\"\n          ></app-card-stats>\n        </div>\n        <div class=\"w-full lg:w-6/12 xl:w-3/12 px-4\">\n          <app-card-stats\n            statSubtitle=\"SALES\"\n            statTitle=\"924\"\n            statArrow=\"down\"\n            statPercent=\"1.10\"\n            statPercentColor=\"text-orange-500\"\n            statDescripiron=\"Since yesterday\"\n            statIconName=\"fas fa-users\"\n            statIconColor=\"bg-pink-500\"\n          ></app-card-stats>\n        </div>\n        <div class=\"w-full lg:w-6/12 xl:w-3/12 px-4\">\n          <app-card-stats\n            statSubtitle=\"PERFORMANCE\"\n            statTitle=\"49,65%\"\n            statArrow=\"up\"\n            statPercent=\"12\"\n            statPercentColor=\"text-emerald-500\"\n            statDescripiron=\"Since last month\"\n            statIconName=\"fas fa-percent\"\n            statIconColor=\"bg-emerald-500\"\n          ></app-card-stats>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "VTaN":
    /*!********************************************************!*\
      !*** ./src/app/views/admin/tables/tables.component.ts ***!
      \********************************************************/

    /*! exports provided: TablesComponent */

    /***/
    function VTaN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesComponent", function () {
        return TablesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tables_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tables.component.html */
      "a9TL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TablesComponent = /*#__PURE__*/function () {
        function TablesComponent() {
          _classCallCheck(this, TablesComponent);
        }

        _createClass(TablesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TablesComponent;
      }();

      TablesComponent.ctorParameters = function () {
        return [];
      };

      TablesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-tables",
        template: _raw_loader_tables_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], TablesComponent);
      /***/
    },

    /***/
    "Vbwu":
    /*!************************************************!*\
      !*** ./src/app/layouts/auth/auth.component.ts ***!
      \************************************************/

    /*! exports provided: AuthComponent */

    /***/
    function Vbwu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
        return AuthComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_auth_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./auth.component.html */
      "dnvD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthComponent = /*#__PURE__*/function () {
        function AuthComponent() {
          _classCallCheck(this, AuthComponent);
        }

        _createClass(AuthComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AuthComponent;
      }();

      AuthComponent.ctorParameters = function () {
        return [];
      };

      AuthComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-auth",
        template: _raw_loader_auth_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AuthComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
      /***/
    },

    /***/
    "XST9":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth/rate-chart/rate-chart.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XST9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<table class=\"rate-chart-table\">\n    <thead>\n      <tr>\n        <th>Vehicle Type</th>\n        <th>SIZE (FT)</th>\n        <th>HOUSE HOLD CAPACITY</th>\n        <th>MAX WEIGHT</th>\n        <!-- Add more range columns as needed -->\n      </tr>\n    </thead>\n    <tbody>\n      <tr style=\"height:15.0pt;\">\n      <td class=\"excel2\">TATA ACE</td>\n      <td class=\"excel2\">7 L x 4.8 W x 4.8 H</td>\n      <td class=\"excel2\">1 BHK</td>\n      <td class=\"excel2\">Max Load 850 Kgs</td>\n    </tr>\n    <tr style=\"height:15.0pt;\">\n      <td class=\"excel2\">ASHOK LEYLAND DOST</td>\n      <td class=\"excel2\">7 L x 4.8 W x 4.8 H</td>\n      <td class=\"excel2\">1 BHK</td>\n      <td class=\"excel2\">Max Load 1 Ton</td>\n    </tr>\n    <tr style=\"height:15.0pt;\">\n      <td class=\"excel2\">MAHINDRA BOLERO PICK UP</td>\n      <td class=\"excel2\">8 L x 4.8 W x 4.8 H</td>\n      <td class=\"excel2\">1 BHK</td>\n      <td class=\"excel2\">Max Load 1.5 Ton</td>\n    </tr>\n    <tr style=\"height:15.0pt;\">\n      <td class=\"excel2\">TATA 407</td>\n      <td class=\"excel2\">9 L x 5.5 W x 5 H</td>\n      <td class=\"excel2\">1.5 BHK</td>\n      <td class=\"excel2\">Max Load 2.5 Ton</td>\n    </tr>\n    <tr style=\"height:15.0pt;\">\n      <td class=\"excel2\">EICHER 14 FEET</td>\n      <td class=\"excel2\">14 L x 6 W x 6.5 H</td>\n      <td class=\"excel2\">2 BHK</td>\n      <td class=\"excel2\">Max Load 4 Ton</td>\n    </tr>\n    <tr style=\"height:15.0pt;\">\n      <td class=\"excel2\">EICHER 17 FEET</td>\n      <td class=\"excel2\">17 L x 6 W x 7 H</td>\n      <td class=\"excel2\">2.5 BHK</td>\n      <td class=\"excel2\">Max Load 5 Ton</td>\n    </tr>\n    <tr style=\"height:15.0pt;\">\n      <td class=\"excel2\">EICHER 19 FEET</td>\n      <td class=\"excel2\">19 L x 7 W x 7 H</td>\n      <td class=\"excel2\">2.5 BHK</td>\n      <td class=\"excel2\">Max Load 7/8/9 Ton</td>\n    </tr>\n \n     <tr style=\"height:15.0pt;\">\n      <td class=\"excel2\">TATA 22 FEET</td>\n      <td class=\"excel2\">22 L x 7.5 W x 7 H</td>\n      <td class=\"excel2\">3 BHK</td>\n       <td class=\"excel2\">Max Load 10 Ton</td>\n     </tr>\n    <tr style=\"height:15.0pt;\">\n      <td class=\"excel2\" >TATA TRUCK (6 TYRE)</td>\n      <td class=\"excel2\">17.5 L x 7 W x 6 H</td>\n      <td class=\"excel2\" ></td>\n      <td class=\"excel2\">Max Load 9 Ton</td>\n    </tr>\n    <tr style=\"height:15.0pt;\">\n      <td class=\"excel2\">TAURUS 16 T (10 TYRE)</td>\n      <td class=\"excel2\">21 L x 7.2 W x 7 H</td>\n      <td class=\"excel2\"></td>\n      <td class=\"excel2\">Max Load 16 Ton</td>\n    </tr>\n    <tr style=\"height:15.0pt;\">\n      <td class=\"excel2\">TAURUS 21 T (12 TYRE)</td>\n      <td class=\"excel2\"> 24 L x 7.3 W x 7 H</td>\n      <td class=\"excel2\"></td>\n      <td class=\"excel2\">Max Load 21 Ton</td>\n    </tr>\n    <tr style=\"height:15.0pt;\">\n      <td class=\"excel2\">TAURUS 25 T (14 TYRE)</td>\n      <td class=\"excel2\"> 28 L x 7.8 W x 7 H</td>\n      <td class=\"excel2\"></td>\n      <td class=\"excel2\">Max Load 25 Ton</td>\n    </tr>     \n   \n<!-- Add more rows for other vehicle types as needed -->\n    </tbody>\n  </table>\n  ";
      /***/
    },

    /***/
    "Xodl":
    /*!***************************************************************************!*\
      !*** ./src/app/components/navbars/admin-navbar/admin-navbar.component.ts ***!
      \***************************************************************************/

    /*! exports provided: AdminNavbarComponent */

    /***/
    function Xodl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminNavbarComponent", function () {
        return AdminNavbarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_admin_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./admin-navbar.component.html */
      "Pibi");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AdminNavbarComponent = /*#__PURE__*/function () {
        function AdminNavbarComponent() {
          _classCallCheck(this, AdminNavbarComponent);
        }

        _createClass(AdminNavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdminNavbarComponent;
      }();

      AdminNavbarComponent.ctorParameters = function () {
        return [];
      };

      AdminNavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-admin-navbar",
        template: _raw_loader_admin_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AdminNavbarComponent);
      /***/
    },

    /***/
    "XqAX":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/notification-dropdown/notification-dropdown.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XqAX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<a\n  class=\"text-blueGray-500 block py-1 px-3\"\n  href=\"#pablo\"\n  (click)=\"toggleDropdown($event)\"\n  #btnDropdownRef\n>\n  <i class=\"fas fa-bell\"></i>\n</a>\n<div class=\"min-w-48 z-50\" #popoverDropdownRef>\n  <div\n    class=\"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48\"\n    [ngClass]=\"dropdownPopoverShow ? 'block' : 'hidden'\"\n  >\n    <a\n      href=\"#pablo\"\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n    >\n      Action\n    </a>\n    <a\n      href=\"#pablo\"\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n    >\n      Another action\n    </a>\n    <a\n      href=\"#pablo\"\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n    >\n      Something else here\n    </a>\n    <div class=\"h-0 my-2 border border-solid border-blueGray-100\"></div>\n    <a\n      href=\"#pablo\"\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n    >\n      Seprated link\n    </a>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "YV8C":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/settings/settings.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YV8C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"flex flex-wrap\">\n  <div class=\"w-full lg:w-8/12 px-4\">\n    <app-card-settings></app-card-settings>\n  </div>\n  <div class=\"w-full lg:w-4/12 px-4\">\n    <app-card-profile></app-card-profile>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "YpXG":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-social-traffic/card-social-traffic.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YpXG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div\n  class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\"\n>\n  <div class=\"rounded-t mb-0 px-4 py-3 border-0\">\n    <div class=\"flex flex-wrap items-center\">\n      <div class=\"relative w-full px-4 max-w-full flex-grow flex-1\">\n        <h3 class=\"font-semibold text-base text-blueGray-700\">\n          book\n        </h3>\n      </div>\n      <div class=\"relative w-full px-4 max-w-full flex-grow flex-1 text-right\">\n        <button\n          class=\"bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          type=\"button\"\n        >\n          See all\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"block w-full overflow-x-auto\">\n    <!-- Projects table -->\n    <table class=\"items-center w-full bg-transparent border-collapse\">\n      <thead class=\"thead-light\">\n        <tr>\n          <th\n            class=\"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\n          >\n            Referral\n          </th>\n          <th\n            class=\"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\n          >\n            Visitors\n          </th>\n          <th\n            class=\"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px\"\n          ></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\n          >\n            Facebook\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            1,480\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <div class=\"flex items-center\">\n              <span class=\"mr-2\">60%</span>\n              <div class=\"relative w-full\">\n                <div\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-red-200\"\n                >\n                  <div\n                    style=\"width: 60%\"\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\n          >\n            Facebook\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            5,480\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <div class=\"flex items-center\">\n              <span class=\"mr-2\">70%</span>\n              <div class=\"relative w-full\">\n                <div\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-emerald-200\"\n                >\n                  <div\n                    style=\"width: 70%\"\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\n          >\n            Google\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            4,807\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <div class=\"flex items-center\">\n              <span class=\"mr-2\">80%</span>\n              <div class=\"relative w-full\">\n                <div\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-purple-200\"\n                >\n                  <div\n                    style=\"width: 80%\"\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\n          >\n            Instagram\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            3,678\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <div class=\"flex items-center\">\n              <span class=\"mr-2\">75%</span>\n              <div class=\"relative w-full\">\n                <div\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-lightBlue-200\"\n                >\n                  <div\n                    style=\"width: 75%\"\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-lightBlue-500\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\n          >\n            twitter\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            2,645\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <div class=\"flex items-center\">\n              <span class=\"mr-2\">30%</span>\n              <div class=\"relative w-full\">\n                <div\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-orange-200\"\n                >\n                  <div\n                    style=\"width: 30%\"\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./layouts/admin/admin.component */
      "R+tk");
      /* harmony import */


      var _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./layouts/auth/auth.component */
      "Vbwu");
      /* harmony import */


      var _views_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./views/admin/dashboard/dashboard.component */
      "zmeh");
      /* harmony import */


      var _views_admin_maps_maps_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./views/admin/maps/maps.component */
      "rKqC");
      /* harmony import */


      var _views_admin_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./views/admin/settings/settings.component */
      "90Li");
      /* harmony import */


      var _views_admin_tables_tables_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./views/admin/tables/tables.component */
      "VTaN");
      /* harmony import */


      var _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./views/auth/login/login.component */
      "/kjZ");
      /* harmony import */


      var _views_auth_register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./views/auth/register/register.component */
      "LN9C");
      /* harmony import */


      var _views_landing_landing_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./views/landing/landing.component */
      "RMzx");
      /* harmony import */


      var _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./views/profile/profile.component */
      "wF9P");
      /* harmony import */


      var _components_navbars_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./components/navbars/admin-navbar/admin-navbar.component */
      "Xodl");
      /* harmony import */


      var _components_navbars_auth_navbar_auth_navbar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./components/navbars/auth-navbar/auth-navbar.component */
      "zslb");
      /* harmony import */


      var _components_cards_card_bar_chart_card_bar_chart_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./components/cards/card-bar-chart/card-bar-chart.component */
      "TmC4");
      /* harmony import */


      var _components_cards_card_line_chart_card_line_chart_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./components/cards/card-line-chart/card-line-chart.component */
      "+Kwz");
      /* harmony import */


      var _components_cards_card_page_visits_card_page_visits_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./components/cards/card-page-visits/card-page-visits.component */
      "3IhM");
      /* harmony import */


      var _components_cards_card_profile_card_profile_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./components/cards/card-profile/card-profile.component */
      "diaN");
      /* harmony import */


      var _components_cards_card_settings_card_settings_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./components/cards/card-settings/card-settings.component */
      "vwLF");
      /* harmony import */


      var _components_cards_card_social_traffic_card_social_traffic_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./components/cards/card-social-traffic/card-social-traffic.component */
      "xud4");
      /* harmony import */


      var _components_cards_card_stats_card_stats_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./components/cards/card-stats/card-stats.component */
      "J87Q");
      /* harmony import */


      var _components_cards_card_table_card_table_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./components/cards/card-table/card-table.component */
      "uhhN");
      /* harmony import */


      var _components_footers_footer_admin_footer_admin_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./components/footers/footer-admin/footer-admin.component */
      "UIMn");
      /* harmony import */


      var _components_footers_footer_footer_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./components/footers/footer/footer.component */
      "1DoU");
      /* harmony import */


      var _components_footers_footer_small_footer_small_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./components/footers/footer-small/footer-small.component */
      "xlab");
      /* harmony import */


      var _components_headers_header_stats_header_stats_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./components/headers/header-stats/header-stats.component */
      "RLAj");
      /* harmony import */


      var _components_navbars_index_navbar_index_navbar_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./components/navbars/index-navbar/index-navbar.component */
      "4b2p");
      /* harmony import */


      var _components_maps_map_example_map_example_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./components/maps/map-example/map-example.component */
      "u/sr");
      /* harmony import */


      var _components_dropdowns_index_dropdown_index_dropdown_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./components/dropdowns/index-dropdown/index-dropdown.component */
      "J8Ne");
      /* harmony import */


      var _components_dropdowns_table_dropdown_table_dropdown_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./components/dropdowns/table-dropdown/table-dropdown.component */
      "UY35");
      /* harmony import */


      var _components_dropdowns_pages_dropdown_pages_dropdown_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./components/dropdowns/pages-dropdown/pages-dropdown.component */
      "wcq5");
      /* harmony import */


      var _components_dropdowns_notification_dropdown_notification_dropdown_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./components/dropdowns/notification-dropdown/notification-dropdown.component */
      "Skd6");
      /* harmony import */


      var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./components/sidebar/sidebar.component */
      "zBoC");
      /* harmony import */


      var _components_dropdowns_user_dropdown_user_dropdown_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./components/dropdowns/user-dropdown/user-dropdown.component */
      "0slC");
      /* harmony import */


      var _views_auth_rate_chart_rate_chart_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./views/auth/rate-chart/rate-chart.component */
      "a+q/");
      /* harmony import */


      var _views_landing_flip_flip_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ./views/landing/flip/flip.component */
      "eEaf");
      /* harmony import */


      var _views_landing_fliptwo_fliptwo_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ./views/landing/fliptwo/fliptwo.component */
      "g4op");
      /* harmony import */


      var _views_landing_flipthree_flipthree_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ./views/landing/flipthree/flipthree.component */
      "SQpN");
      /* harmony import */


      var _views_landing_flipfour_flipfour_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ./views/landing/flipfour/flipfour.component */
      "yCe9");
      /* harmony import */


      var _views_landing_bike_bike_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ./views/landing/bike/bike.component */
      "xbcH");
      /* harmony import */


      var _views_landing_flipbike_flipbike_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ./views/landing/flipbike/flipbike.component */
      "5vqZ");
      /* harmony import */


      var _views_landing_courier_courier_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! ./views/landing/courier/courier.component */
      "+pgL"); // layouts
      // admin views
      // auth views
      // no layouts views
      // components for views and layouts


      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _views_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"], _components_cards_card_bar_chart_card_bar_chart_component__WEBPACK_IMPORTED_MODULE_20__["CardBarChartComponent"], _components_cards_card_line_chart_card_line_chart_component__WEBPACK_IMPORTED_MODULE_21__["CardLineChartComponent"], _components_dropdowns_index_dropdown_index_dropdown_component__WEBPACK_IMPORTED_MODULE_34__["IndexDropdownComponent"], _components_dropdowns_pages_dropdown_pages_dropdown_component__WEBPACK_IMPORTED_MODULE_36__["PagesDropdownComponent"], _components_dropdowns_table_dropdown_table_dropdown_component__WEBPACK_IMPORTED_MODULE_35__["TableDropdownComponent"], _components_dropdowns_notification_dropdown_notification_dropdown_component__WEBPACK_IMPORTED_MODULE_37__["NotificationDropdownComponent"], _components_dropdowns_user_dropdown_user_dropdown_component__WEBPACK_IMPORTED_MODULE_39__["UserDropdownComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_38__["SidebarComponent"], _components_footers_footer_footer_component__WEBPACK_IMPORTED_MODULE_29__["FooterComponent"], _components_footers_footer_small_footer_small_component__WEBPACK_IMPORTED_MODULE_30__["FooterSmallComponent"], _components_footers_footer_admin_footer_admin_component__WEBPACK_IMPORTED_MODULE_28__["FooterAdminComponent"], _components_cards_card_page_visits_card_page_visits_component__WEBPACK_IMPORTED_MODULE_22__["CardPageVisitsComponent"], _components_cards_card_profile_card_profile_component__WEBPACK_IMPORTED_MODULE_23__["CardProfileComponent"], _components_cards_card_settings_card_settings_component__WEBPACK_IMPORTED_MODULE_24__["CardSettingsComponent"], _components_cards_card_social_traffic_card_social_traffic_component__WEBPACK_IMPORTED_MODULE_25__["CardSocialTrafficComponent"], _components_cards_card_stats_card_stats_component__WEBPACK_IMPORTED_MODULE_26__["CardStatsComponent"], _components_cards_card_table_card_table_component__WEBPACK_IMPORTED_MODULE_27__["CardTableComponent"], _components_headers_header_stats_header_stats_component__WEBPACK_IMPORTED_MODULE_31__["HeaderStatsComponent"], _components_maps_map_example_map_example_component__WEBPACK_IMPORTED_MODULE_33__["MapExampleComponent"], _components_navbars_auth_navbar_auth_navbar_component__WEBPACK_IMPORTED_MODULE_19__["AuthNavbarComponent"], _components_navbars_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_18__["AdminNavbarComponent"], _components_navbars_index_navbar_index_navbar_component__WEBPACK_IMPORTED_MODULE_32__["IndexNavbarComponent"], _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"], _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_9__["AuthComponent"], _views_admin_maps_maps_component__WEBPACK_IMPORTED_MODULE_11__["MapsComponent"], _views_admin_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"], _views_admin_tables_tables_component__WEBPACK_IMPORTED_MODULE_13__["TablesComponent"], _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], _views_auth_register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"], _views_landing_landing_component__WEBPACK_IMPORTED_MODULE_16__["LandingComponent"], _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_17__["ProfileComponent"], _views_auth_rate_chart_rate_chart_component__WEBPACK_IMPORTED_MODULE_40__["RateChartComponent"], _views_landing_flip_flip_component__WEBPACK_IMPORTED_MODULE_41__["FlipComponent"], _views_landing_fliptwo_fliptwo_component__WEBPACK_IMPORTED_MODULE_42__["FliptwoComponent"], _views_landing_flipthree_flipthree_component__WEBPACK_IMPORTED_MODULE_43__["FlipthreeComponent"], _views_landing_flipfour_flipfour_component__WEBPACK_IMPORTED_MODULE_44__["FlipfourComponent"], _views_landing_bike_bike_component__WEBPACK_IMPORTED_MODULE_45__["BikeComponent"], _views_landing_flipbike_flipbike_component__WEBPACK_IMPORTED_MODULE_46__["FlipbikeComponent"], _views_landing_courier_courier_component__WEBPACK_IMPORTED_MODULE_47__["CourierComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "a+q/":
    /*!***************************************************************!*\
      !*** ./src/app/views/auth/rate-chart/rate-chart.component.ts ***!
      \***************************************************************/

    /*! exports provided: RateChartComponent */

    /***/
    function aQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RateChartComponent", function () {
        return RateChartComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_rate_chart_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./rate-chart.component.html */
      "XST9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RateChartComponent = /*#__PURE__*/function () {
        function RateChartComponent() {
          _classCallCheck(this, RateChartComponent);
        }

        _createClass(RateChartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RateChartComponent;
      }();

      RateChartComponent.ctorParameters = function () {
        return [];
      };

      RateChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-rate-chart',
        template: _raw_loader_rate_chart_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], RateChartComponent);
      /***/
    },

    /***/
    "a9TL":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/tables/tables.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function a9TL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"flex flex-wrap mt-4\">\n  <div class=\"w-full mb-12 px-4\">\n    <app-card-table></app-card-table>\n  </div>\n  <div class=\"w-full mb-12 px-4\">\n    <app-card-table color=\"dark\"></app-card-table>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "c9Li":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-profile/card-profile.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function c9Li(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div\n  class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16\"\n>\n  <div class=\"px-6\">\n    <div class=\"flex flex-wrap justify-center\">\n      <div class=\"w-full px-4 flex justify-center\">\n        <div class=\"relative\">\n          <img\n            alt=\"...\"\n            src=\"assets/img/team-2-800x800.jpg\"\n            class=\"shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px\"\n          />\n        </div>\n      </div>\n      <div class=\"w-full px-4 text-center mt-20\">\n        <div class=\"flex justify-center py-4 lg:pt-4 pt-8\">\n          <div class=\"mr-4 p-3 text-center\">\n            <span\n              class=\"text-xl font-bold block uppercase tracking-wide text-blueGray-600\"\n            >\n              22\n            </span>\n            <span class=\"text-sm text-blueGray-400\">Friends</span>\n          </div>\n          <div class=\"mr-4 p-3 text-center\">\n            <span\n              class=\"text-xl font-bold block uppercase tracking-wide text-blueGray-600\"\n            >\n              10\n            </span>\n            <span class=\"text-sm text-blueGray-400\">Photos</span>\n          </div>\n          <div class=\"lg:mr-4 p-3 text-center\">\n            <span\n              class=\"text-xl font-bold block uppercase tracking-wide text-blueGray-600\"\n            >\n              89\n            </span>\n            <span class=\"text-sm text-blueGray-400\">Comments</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"text-center mt-12\">\n      <h3\n        class=\"text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2\"\n      >\n        Jenna Stones\n      </h3>\n      <div\n        class=\"text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase\"\n      >\n        <i class=\"fas fa-map-marker-alt mr-2 text-lg text-blueGray-400\"></i>\n        Los Angeles, California\n      </div>\n      <div class=\"mb-2 text-blueGray-600 mt-10\">\n        <i class=\"fas fa-briefcase mr-2 text-lg text-blueGray-400\"></i>\n        Solution Manager - Creative Tim Officer\n      </div>\n      <div class=\"mb-2 text-blueGray-600\">\n        <i class=\"fas fa-university mr-2 text-lg text-blueGray-400\"></i>\n        University of Computer Science\n      </div>\n    </div>\n    <div class=\"mt-10 py-10 border-t border-blueGray-200 text-center\">\n      <div class=\"flex flex-wrap justify-center\">\n        <div class=\"w-full lg:w-9/12 px-4\">\n          <p class=\"mb-4 text-lg leading-relaxed text-blueGray-700\">\n            An artist of considerable range, Jenna the name taken by\n            Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and\n            records all of his own music, giving it a warm, intimate feel with a\n            solid groove structure. An artist of considerable range.\n          </p>\n          <a href=\"javascript:void(0);\" class=\"font-normal text-red-600\">\n            Show more\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "dYWj":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/landing/flipthree/flipthree.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dYWj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<style>\n   \n\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-section-title__ryt2g {\n    margin: 0;\n    font-weight: 600;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    color: #2d2f34;\n}\n.VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-wrapper__ZntQf .VehicleDetails_best-for__8_39F .VehicleDetails_best-for-title__R14mh {\n    margin: 0 0 0 0.8rem;\n    font-weight: 400;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    color: #2d2f34;\n    text-align: left;\n    width: 100%;\n}\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_modal-title__3rSMj {\n    font-weight: 600;\n    font-size: 2.4rem;\n    line-height: 3.2rem;\n    margin: 0;\n    color: #2d2f34;\n}\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_form-container__deD6R {\n    background: #eef2ff;\n    box-sizing: border-box;\n    width: 42.8rem;\n    position: relative;\n    padding: 4.4rem 4rem 4rem;\n}\n\n    .columnflip:first-child {\n      background-color: #eef;\n    }\n\n    .columnflip:last-child {\n      background-color: #fee;\n    }\n .Footer_footer-container__HntbH {\n    background-color: #000;\n    color: #fff\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC {\n    max-width: 150rem;\n    margin: auto;\n    padding: 4.8rem 0\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC {\n        padding:3.2rem 1.6rem\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 {\n    display: grid;\n    grid-template-columns: repeat(5,1fr);\n    padding: 0 3.6rem 4.8rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 {\n        grid-template-columns:1fr 1fr;\n        padding: 0 0 2.4rem\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_mobile-download__ynS_q {\n    display: none\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_company-info__dJXMm {\n    font-size: 2rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_company-info__dJXMm {\n        display:none\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_company-info__dJXMm .Footer_logo__GVpEx {\n    cursor: pointer\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_company-info__dJXMm .Footer_motto__vpt_I {\n    padding-top: 2.4rem;\n    width: 14rem\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_companies-links__0yil4,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_services-links__95wtA,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_support-links__v9_TZ {\n    display: flex;\n    flex-direction: column\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_companies-links__0yil4 .Footer_title__g0XIB,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_services-links__95wtA .Footer_title__g0XIB,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_support-links__v9_TZ .Footer_title__g0XIB {\n    font-weight: 600;\n    font-size: 1.8rem;\n    line-height: 140%\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_companies-links__0yil4 .Footer_list__r_RMm,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_services-links__95wtA .Footer_list__r_RMm,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_support-links__v9_TZ .Footer_list__r_RMm {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    padding-top: 1.2rem\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_companies-links__0yil4 .Footer_list__r_RMm .Footer_list-item__QPP6R,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_services-links__95wtA .Footer_list__r_RMm .Footer_list-item__QPP6R,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_support-links__v9_TZ .Footer_list__r_RMm .Footer_list-item__QPP6R {\n    font-size: 1.4rem;\n    margin-bottom: .8rem;\n    cursor: pointer;\n    display: block\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_support-links__v9_TZ {\n        display:none\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_download__6e9Km {\n    display: flex;\n    flex-direction: column;\n    gap: 1.6rem;\n    width: 18rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_download__6e9Km {\n        order:-1;\n        display: flex;\n        flex-direction: row;\n        grid-column: 1/span 2;\n        padding-bottom: 2.4rem;\n        width: 100%;\n        gap: 0\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_download-android__whnja,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_download-iOS__3ecym {\n    cursor: pointer\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_download-android__whnja,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_download-iOS__3ecym {\n        flex:1 1;\n        margin-right: 2rem\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv {\n    padding: 0 3.6rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv {\n        padding:0\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_cities-truck-links__2giuy {\n    display: flex;\n    flex-direction: column;\n    padding-bottom: 2.4rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_cities-truck-links__2giuy {\n        padding-bottom:2.4rem\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_cities-truck-links__2giuy .Footer_title__g0XIB {\n    font-weight: 600;\n    font-size: 1.8rem;\n    line-height: 140%\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_cities-truck-links__2giuy .Footer_list__r_RMm {\n    display: grid;\n    grid-template-columns: repeat(5,1fr);\n    grid-row-gap: 1.2rem;\n    padding-top: 1.2rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_cities-truck-links__2giuy .Footer_list__r_RMm {\n        grid-template-columns:repeat(3,1fr)\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_cities-truck-links__2giuy .Footer_list__r_RMm .Footer_list-item__QPP6R {\n    font-size: 1.4rem;\n    position: relative;\n    cursor: pointer\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_support-links__v9_TZ {\n    display: none\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_support-links__v9_TZ {\n        display:block;\n        padding-top: 1.2rem\n    }\n\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_support-links__v9_TZ .Footer_title__g0XIB {\n        display: none\n    }\n\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_support-links__v9_TZ .Footer_list__r_RMm {\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr;\n        align-items: center;\n        width: 100%\n    }\n\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_support-links__v9_TZ .Footer_list__r_RMm .Footer_list-item__QPP6R {\n        color: #bdbdbd;\n        font-size: 1.2rem;\n        padding: .6rem 0\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 2.4rem 3.6rem 0\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 {\n        flex-direction:column;\n        padding: 0;\n        align-items: flex-start\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ {\n        padding:2rem 0\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_fb__tr_T0,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_insta__R9wDV,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_linkedIn__DQwks,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_twitter__2Zp_k,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_yt__GUvsn {\n    content: \"\";\n    background-image: url(https://d10wquj595no85.cloudfront.net/_next/static/media/social_media.62807da0.svg);\n    width: 3.2rem;\n    margin: 0 1.2rem 0 0;\n    height: 3.2rem;\n    background-position: 0;\n    background-size: auto 3.2rem;\n    background-repeat: no-repeat\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_insta__R9wDV {\n    background-position: 0\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_fb__tr_T0 {\n    background-position-x: -4rem\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_linkedIn__DQwks {\n    background-position-x: -8rem\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_twitter__2Zp_k {\n    background-position-x: -12rem\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_yt__GUvsn {\n    background-position-x: -16rem\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_copyright-wrapper__xjE5_ {\n    font-size: 1.4rem;\n    color: #bdbdbd\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_copyright-wrapper__xjE5_ .Footer_copyright__HmTp2 {\n    display: flex;\n    align-items: center\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_copyright-wrapper__xjE5_ .Footer_copyright__HmTp2 {\n        flex-direction:column;\n        align-items: flex-start;\n        font-size: 1.2rem\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_copyright-wrapper__xjE5_ .Footer_copyright__HmTp2 .Footer_info__EWbD8:before {\n    content: \"©\"\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_copyright-wrapper__xjE5_ .Footer_copyright__HmTp2 .Footer_info__EWbD8 {\n        margin-bottom:1rem\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_copyright-wrapper__xjE5_ .Footer_copyright__HmTp2 .Footer_vertical-seperator__imgpZ {\n    background: #bdbdbd;\n    margin: 0 1rem;\n    width: 1px;\n    height: 1.4rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_copyright-wrapper__xjE5_ .Footer_copyright__HmTp2 .Footer_vertical-seperator__imgpZ {\n        display:none\n    }\n}\n\n.MobileMenu_mobile-menu-wrapper__lOrcy {\n    width: 75vw;\n    height: 100vh\n}\n\n.MobileMenu_mobile-menu-wrapper__lOrcy .MobileMenu_mobile-menu-container__dy7Jk {\n    height: 100%;\n    background: #040a1a;\n    z-index: 30\n}\n\n.MobileMenu_mobile-menu-wrapper__lOrcy .MobileMenu_mobile-menu-container__dy7Jk .MobileMenu_close-button__OZs7O {\n    height: -moz-fit-content;\n    height: fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-top: 2rem;\n    padding-right: 3rem;\n    margin-left: auto\n}\n\n.MobileMenu_mobile-menu-wrapper__lOrcy .MobileMenu_mobile-menu-container__dy7Jk .MobileMenu_links-container__b15EE {\n    margin-top: 2.1rem\n}\n\n.MobileMenu_mobile-menu-wrapper__lOrcy .MobileMenu_mobile-menu-container__dy7Jk .MobileMenu_links-container__b15EE .MobileMenu_primary-links__d3xTK,.MobileMenu_mobile-menu-wrapper__lOrcy .MobileMenu_mobile-menu-container__dy7Jk .MobileMenu_links-container__b15EE .MobileMenu_secondary-links__PNWn_ {\n    display: flex;\n    flex-direction: column-reverse\n}\n\n.MobileMenu_mobile-menu-wrapper__lOrcy .MobileMenu_mobile-menu-container__dy7Jk .MobileMenu_links-container__b15EE .MobileMenu_primary-links__d3xTK .MobileMenu_primary-link__Z_tPu,.MobileMenu_mobile-menu-wrapper__lOrcy .MobileMenu_mobile-menu-container__dy7Jk .MobileMenu_links-container__b15EE .MobileMenu_secondary-links__PNWn_ .MobileMenu_secondary-link__wtSWQ {\n    color: #fff;\n    font-weight: 600;\n    font-size: 2rem;\n    line-height: 1.6rem;\n    margin: 2rem 0;\n    text-align: center\n}\n\n.DownloadApp_wrapper__wzCu1 {\n    display: none\n}\n\n@media only screen and (max-width: 1023px) {\n    .DownloadApp_wrapper__wzCu1 {\n        display:unset\n    }\n}\n\n.DownloadApp_wrapper__wzCu1.DownloadApp_hidden__6Wl45 {\n    display: none\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ {\n    display: flex;\n    align-items: center;\n    padding: 1.2rem 1.6rem;\n    background: #f0f3ff\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ .DownloadApp_logo__lxwE0 {\n    display: flex;\n    align-items: center;\n    justify-content: center\n}\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_form-container__deD6R {\n    background: #eef2ff;\n    box-sizing: border-box;\n    width: 42.8rem;\n    position: relative;\n    padding: 4.4rem 4rem 4rem;\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ .DownloadApp_title-subtitle__Fx0R_ {\n    margin-left: 1.2rem\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ .DownloadApp_title-subtitle__Fx0R_ .DownloadApp_title__XuVs_ {\n    font-weight: 600;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    color: #333\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ .DownloadApp_title-subtitle__Fx0R_ .DownloadApp_sub-title__r0fL0 {\n    font-weight: 600;\n    font-size: 12px;\n    line-height: 16px;\n    color: #828282\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ .DownloadApp_download-button__ibtva {\n    margin-left: auto;\n    background-color: #2962ff;\n    padding: .8rem 1.2rem;\n    border-radius: 2.2rem;\n    font-family: inherit;\n    border: none;\n    font-weight: 600;\n    font-size: 1.2rem;\n    line-height: 1.6rem\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ .DownloadApp_download-button__ibtva a {\n    text-decoration: none;\n    color: #fff\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ .DownloadApp_hide-button__mS1s3 {\n    background: none;\n    border: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: .4rem;\n    margin-left: .8rem\n}\n\n.Header_sticky-wrapper__nEs1S {\n    position: sticky;\n    top: 0;\n    width: 100%;\n    z-index: 110\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb {\n    background-color: #040a1a;\n    height: 6.4rem;\n    display: flex;\n    align-items: center\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ {\n    max-width: 150rem;\n    width: 100%;\n    margin-inline:auto;display: flex;\n    align-items: center;\n    justify-content: space-between\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_logo__edXik {\n    display: flex;\n    align-items: center;\n    margin-left: 12rem\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_logo__edXik :hover {\n    cursor: pointer\n}\n\n@media only screen and (max-width: 1023px) {\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_logo__edXik {\n        margin-left:2rem\n    }\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_primary-links-container__0Kzs8 {\n    display: flex;\n    align-items: center;\n    gap: 2.4rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_primary-links-container__0Kzs8 {\n        display:none\n    }\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_primary-links-container__0Kzs8 .Header_primary-link__HgwZ_ {\n    text-decoration: none;\n    color: #fff;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    font-weight: 600;\n    cursor: pointer\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_secondary-links-container__8lyaA {\n    display: flex;\n    align-items: center;\n    margin-right: 12rem;\n    gap: 2.4rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_secondary-links-container__8lyaA {\n        display:none\n    }\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_secondary-links-container__8lyaA .Header_secondary-link__boqSW {\n    text-decoration: none;\n    color: #fff;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    font-weight: 600;\n    cursor: pointer\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_menu-icon__5AGW5 {\n    display: none\n}\n\n@media only screen and (max-width: 1023px) {\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_menu-icon__5AGW5 {\n        display:flex;\n        align-items: center;\n        justify-content: center;\n        margin: 1.6rem\n    }\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_mobile-menu__Ap7DR {\n    display: none\n}\n\n@media only screen and (max-width: 1023px) {\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_mobile-menu__Ap7DR {\n        display:unset;\n        z-index: 110\n    }\n\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_mobile-menu-overlay__x7Tjm {\n        position: fixed;\n        display: block;\n        inset: 0;\n        background-color: rgba(0,0,0,.54)\n    }\n\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_mobile-menu-component__B9xBH {\n        position: fixed;\n        top: 0;\n        right: -75vw;\n        transition: right .1s ease-in-out\n    }\n\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_mobile-menu-component__B9xBH.Header_active__8kMBu {\n        right: 0\n    }\n}\n\n.Explore_explore-container__Xt_dL {\n    box-sizing: border-box;\n    width: 100%;\n    border: .05rem solid #2962ff;\n    border-radius: .8rem;\n    background: #fff;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1.5rem 1.6rem;\n    cursor: pointer\n}\n\n@media only screen and (max-width: 559px) {\n    .Explore_explore-container__Xt_dL {\n        padding:.9rem 1.6rem;\n        background: #eef2ff\n    }\n}\n\n.Explore_explore-container__Xt_dL .Explore_explore-text__cJKgd {\n    font-weight: 600;\n    font-size: 1.2rem;\n    line-height: 1.6rem;\n    color: #2962ff\n}\n\n.Explore_explore-container__Xt_dL .Explore_arrow__XaZgn {\n    display: flex;\n    align-items: center;\n    justify-content: center\n}\n\n.FormInput_container__eKd_P {\n    position: relative\n}\n\n.FormInput_container__eKd_P .FormInput_input-container__Tfl2q {\n    border: .0754808rem solid #ddd;\n    border-radius: .603846rem;\n    background-color: #fff;\n    box-sizing: border-box;\n    padding: 1.2rem 0\n}\n\n@media only screen and (max-width: 559px) {\n    .FormInput_container__eKd_P .FormInput_input-container__Tfl2q {\n        padding:.9rem 0\n    }\n}\n\n.FormInput_container__eKd_P .FormInput_input-container__Tfl2q .FormInput_label-required__A28E4,.FormInput_container__eKd_P .FormInput_input-container__Tfl2q .FormInput_label__rD1_n {\n    font-weight: 600;\n    font-size: 1.2rem;\n    line-height: 1.6rem;\n    color: #333;\n    padding-left: 1.9rem\n}\n\n.FormInput_container__eKd_P .FormInput_input-container__Tfl2q .FormInput_label-required__A28E4.FormInput_error__VpKzj,.FormInput_container__eKd_P .FormInput_input-container__Tfl2q .FormInput_label__rD1_n.FormInput_error__VpKzj {\n    color: #eb5757\n}\n\n@media only screen and (max-width: 559px) {\n    .FormInput_container__eKd_P .FormInput_input-container__Tfl2q .FormInput_label-required__A28E4,.FormInput_container__eKd_P .FormInput_input-container__Tfl2q .FormInput_label__rD1_n {\n        font-size:1rem;\n        line-height: 1.2rem;\n        padding-left: 1.4rem\n    }\n}\n\n.FormInput_container__eKd_P .FormInput_input-container__Tfl2q .FormInput_label-required__A28E4:after {\n    content: \"*\";\n    color: #eb5757;\n    padding-left: .2rem\n}\n\n.FormInput_container__eKd_P .FormInput_error-container__VaXZ9 {\n    position: absolute;\n    font-weight: 600;\n    font-size: 1rem;\n    line-height: 1.6rem;\n    color: #eb5757\n}\n\n.FormInput_submit__icI8k {\n    width: 100%;\n    border-radius: .8rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1.6rem;\n    box-sizing: border-box;\n    border: none\n}\n\n.FormInput_submit-enabled__qOriP {\n    background-color: #2962ff;\n    cursor: pointer\n}\n\n.FormInput_submit-disabled__FNs7m {\n    background-color: rgba(51,51,51,.24)\n}\n\n.FormInput_submit-disabled__FNs7m .FormInput_submit-text__LL1rf,.FormInput_submit-enabled__qOriP .FormInput_submit-text__LL1rf {\n    font-weight: 600;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: #fff;\n    font-family: Titillium Web,sans-serif\n}\n\n.FormInput_submit-disabled__FNs7m .FormInput_submit-arrow-icon__Zz3tC,.FormInput_submit-enabled__qOriP .FormInput_submit-arrow-icon__Zz3tC {\n    display: flex;\n    align-items: center;\n    justify-content: center\n}\n\n.CategorySelector_category-selector-container__AkuP2 {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    justify-content: center;\n    gap: 1.5rem;\n    margin-top: 1rem\n}\n\n@media only screen and (max-width: 559px) {\n    .CategorySelector_category-selector-container__AkuP2 {\n        margin-top:0\n    }\n}\n\n.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1.7rem 3.8rem;\n    box-sizing: border-box;\n    border: .1rem solid rgba(51,51,51,.16);\n    border-radius: .8rem;\n    background: #fff;\n    width: 100%;\n    cursor: pointer\n}\n\n@media only screen and (max-width: 559px) {\n    .CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 {\n        padding:.8rem 1.3rem\n    }\n}\n\n.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14:active,.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14:hover {\n    border-color: #2962ff;\n    transition: border-color .2s ease-in\n}\n\n.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14:active .CategorySelector_arrow-icon-svg__a0c_p,.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14:hover .CategorySelector_arrow-icon-svg__a0c_p {\n    fill: #2962ff;\n    transition: fill .2s ease-in,fill-opacity .2s ease-in;\n    fill-opacity: 1\n}\n\n.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 .CategorySelector_category-image-text__pVzl5 {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    margin-right: 4.6rem\n}\n\n@media only screen and (max-width: 559px) {\n    .CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 .CategorySelector_category-image-text__pVzl5 {\n        margin-right:2rem\n    }\n}\n\n.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 .CategorySelector_category-image-text__pVzl5 .CategorySelector_category-image__zlCOz {\n    display: flex;\n    align-items: center;\n    margin-right: 4.6rem;\n    height: 6rem\n}\n\n@media only screen and (max-width: 559px) {\n    .CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 .CategorySelector_category-image-text__pVzl5 .CategorySelector_category-image__zlCOz {\n        margin-right:-.2rem;\n        transform-origin: center left;\n        scale: 1;\n        height: 5.5rem\n    }\n}\n\n.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 .CategorySelector_category-image-text__pVzl5 .CategorySelector_category-text__cRRzz {\n    font-weight: 600;\n    font-size: 1.8rem;\n    line-height: 2.4rem;\n    color: #333;\n    margin-left: 0\n}\n\n@media only screen and (max-width: 559px) {\n    .CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 .CategorySelector_category-image-text__pVzl5 .CategorySelector_category-text__cRRzz {\n        font-size:1.5rem;\n        line-height: 1.8rem;\n        margin-left: 1rem\n    }\n}\n\n.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 .CategorySelector_arrow-icon__tOM2g {\n    display: flex;\n    align-items: center;\n    transform: rotate(-90deg)\n}\n\n.CategorySelector_change-category-container__Gd9aY {\n    width: 100%;\n    background-color: rgba(47,139,255,.12);\n    border-radius: .8rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1.2rem 1.6rem;\n    box-sizing: border-box\n}\n\n.CategorySelector_change-category-container__Gd9aY .CategorySelector_current-category-text__VzQeO {\n    font-weight: 600;\n    font-size: 1.5rem;\n    line-height: 2.4rem;\n    color: #333\n}\n\n.CategorySelector_change-category-container__Gd9aY .CategorySelector_change-button__a4G8g {\n    all: unset;\n    font-weight: 600;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    color: #2962ff;\n    cursor: pointer\n}\n\n.FareEstimateForms_component-wrapper__pYvyq {\n    height: 100%;\n    display: flex;\n    flex-direction: column\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_change-category__lkhUb {\n    margin-bottom: 1.6rem\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm {\n    display: flex;\n    flex-direction: column;\n    gap: 1.6rem;\n    height: 100%;\n    position: relative\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm input {\n    font-family: inherit;\n    display: block;\n    border: none;\n    outline: none;\n    line-height: 2.4rem;\n    font-size: 1.6rem;\n    text-overflow: ellipsis;\n    width: 100%;\n    background-color: #fff;\n    box-sizing: border-box\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm input::-moz-placeholder {\n    color: rgba(51,51,51,.24);\n    font-family: inherit\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm input:-ms-input-placeholder {\n    color: rgba(51,51,51,.24);\n    font-family: inherit\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm input::placeholder {\n    color: rgba(51,51,51,.24);\n    font-family: inherit\n}\n\n@media only screen and (max-width: 559px) {\n    .FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm input {\n        font-size:1.2rem;\n        line-height: 1.8rem\n    }\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_date-input-wrapper__DTV__,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_drop-input__r3Zzs,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_mobile-input__fOlJd,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_name-input__t8wkI,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_pickup-input__sSniG {\n    padding-inline:1.9rem}\n\n@media only screen and (max-width: 559px) {\n    .FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_date-input-wrapper__DTV__,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_drop-input__r3Zzs,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_mobile-input__fOlJd,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_name-input__t8wkI,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_pickup-input__sSniG {\n        padding-inline:1.4rem\n    }\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_drop-input__r3Zzs.FareEstimateForms_disabled__nZQF8,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_pickup-input__sSniG.FareEstimateForms_disabled__nZQF8 {\n    pointer-events: none\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_drop-input__r3Zzs+div .FareEstimateForms_dropdown-item__Jw9PJ,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_pickup-input__sSniG+div .FareEstimateForms_dropdown-item__Jw9PJ {\n    padding: .9rem 1.9rem;\n    cursor: pointer;\n    font-size: 1.1rem;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    border-bottom: .05rem solid #d3d3d3\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_drop-input__r3Zzs+div .FareEstimateForms_dropdown-item__Jw9PJ:hover,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_pickup-input__sSniG+div .FareEstimateForms_dropdown-item__Jw9PJ:hover {\n    cursor: pointer;\n    background-color: #f3f3f3\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_date-input-wrapper__DTV__ .FareEstimateForms_date-picker__6g5bG {\n    width: 100%\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_date-input-wrapper__DTV__ .FareEstimateForms_date-picker__6g5bG div[class~=MuiInput-underline]:after,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_date-input-wrapper__DTV__ .FareEstimateForms_date-picker__6g5bG div[class~=MuiInput-underline]:before {\n    all: unset\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_date-input-wrapper__DTV__ .FareEstimateForms_date-picker__6g5bG input[class~=MuiInputBase-input] {\n    padding: 0;\n    height: unset\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_submit-container__gnwhh {\n    margin-top: auto\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_form-error-container__j3UdG {\n    position: absolute;\n    bottom: 0;\n    transform: translateY(100%);\n    font-weight: 600;\n    font-size: 1rem;\n    line-height: 1.6rem;\n    color: #eb5757\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ {\n    width: -moz-fit-content;\n    width: fit-content;\n    height: 71.9rem;\n    display: flex;\n    position: relative;\n    overflow: hidden;\n    border-radius: .8rem\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ {\n        width:100%;\n        height: -moz-fit-content;\n        height: fit-content;\n        flex-direction: column;\n        padding: 2.4rem 2.4rem 3.4rem;\n        box-sizing: border-box;\n        background: #f3f3f3;\n        border-radius: .8rem .8rem 0 0\n    }\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z {\n    padding: 5.6rem;\n    background-color: #fff;\n    width: 19.2rem\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z {\n        padding:0;\n        width: -moz-fit-content;\n        width: fit-content;\n        background-color: unset;\n        margin-bottom: 1.5rem\n    }\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_title__qq3il {\n    padding: 0;\n    font-weight: 600;\n    font-size: 4.8rem;\n    line-height: 6.4rem;\n    color: #333;\n    margin: 0 0 2.4rem;\n    display: block\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_title__qq3il {\n        display:none;\n        font-size: 1.8rem;\n        line-height: 2.8rem;\n        margin-bottom: 0\n    }\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_sub-title__w8hD_ {\n    margin: 0;\n    padding: 0;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: rgba(51,51,51,.64);\n    display: block\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_sub-title__w8hD_ {\n        display:none;\n        font-size: 1.4rem;\n        line-height: 2rem\n    }\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_title-mobile__WDoQ2 {\n    padding: 0;\n    font-weight: 600;\n    font-size: 4.8rem;\n    line-height: 6.4rem;\n    color: #333;\n    margin: 0 0 2.4rem;\n    display: none\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_title-mobile__WDoQ2 {\n        display:block;\n        font-size: 1.8rem;\n        line-height: 2.8rem;\n        margin-bottom: 0\n    }\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_sub-title-mobile__884Z6 {\n    margin: 0;\n    padding: 0;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: rgba(51,51,51,.64);\n    display: none\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_sub-title-mobile__884Z6 {\n        display:block;\n        font-size: 1.4rem;\n        line-height: 2rem\n    }\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_form-container__HPjJJ {\n    background: #eef2ff;\n    box-sizing: border-box;\n    width: 49.6rem;\n    position: relative;\n    padding: 6.4rem 4rem 4rem\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_form-container__HPjJJ {\n        background:unset;\n        width: 100%;\n        padding: 0\n    }\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_close-modal-button__l7xB0 {\n    all: unset;\n    cursor: pointer;\n    margin: 2.4rem;\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: flex\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_close-modal-button__l7xB0 {\n        margin:2.2rem 2.4rem\n    }\n}\n\n.LoadingSpinner_loading-wrapper__sfQEW {\n    width: 100%\n}\n\n.LoadingSpinner_loading-wrapper__sfQEW .LoadingSpinner_loading-ellipsis__eXNtX {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n    left: 50%;\n    transform: translateX(-50%)\n}\n\n.LoadingSpinner_loading-wrapper__sfQEW .LoadingSpinner_loading-ellipsis__eXNtX div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: rgba(51,51,51,.64);\n    animation-timing-function: cubic-bezier(0,1,1,0)\n}\n\n.LoadingSpinner_loading-wrapper__sfQEW .LoadingSpinner_loading-ellipsis__eXNtX div:first-child {\n    left: 8px;\n    animation: LoadingSpinner_loading-ellipsis1__Foglf .6s infinite\n}\n\n.LoadingSpinner_loading-wrapper__sfQEW .LoadingSpinner_loading-ellipsis__eXNtX div:nth-child(2) {\n    left: 8px;\n    animation: LoadingSpinner_loading-ellipsis2__AoWKS .6s infinite\n}\n\n.LoadingSpinner_loading-wrapper__sfQEW .LoadingSpinner_loading-ellipsis__eXNtX div:nth-child(3) {\n    left: 32px;\n    animation: LoadingSpinner_loading-ellipsis2__AoWKS .6s infinite\n}\n\n.LoadingSpinner_loading-wrapper__sfQEW .LoadingSpinner_loading-ellipsis__eXNtX div:nth-child(4) {\n    left: 56px;\n    animation: LoadingSpinner_loading-ellipsis3__tjQfc .6s infinite\n}\n\n@keyframes LoadingSpinner_loading-ellipsis1__Foglf {\n    0% {\n        transform: scale(0)\n    }\n\n    to {\n        transform: scale(1)\n    }\n}\n\n@keyframes LoadingSpinner_loading-ellipsis3__tjQfc {\n    0% {\n        transform: scale(1)\n    }\n\n    to {\n        transform: scale(0)\n    }\n}\n\n@keyframes LoadingSpinner_loading-ellipsis2__AoWKS {\n    0% {\n        transform: translate(0)\n    }\n\n    to {\n        transform: translate(24px)\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t {\n    padding: 1rem 0 0;\n    border: unset\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t {\n        padding:.8rem 0 0\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t {\n        border-top:1px solid #f2f2f2;\n        padding: 2rem\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN {\n    width: 100%;\n    margin: 1rem 0 0\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_error-box__VGUa0 div[class~=Mui-error] div[class~=MuiOutlinedInput-notchedOutline] {\n    border-color: #f44336\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_name__160io label {\n    font-size: 1.1rem;\n    transform: translate(1.4rem,1.6rem) scale(1)\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_name__160io label {\n        font-size:.9rem;\n        transform: translate(1.4rem,1.3rem) scale(1)\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_name__160io label {\n        font-size:1.1rem;\n        transform: translate(1.4rem,1.6rem) scale(1)\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_name__160io label[data-shrink=true] {\n    transform: translate(1.4rem,-.3rem) scale(.75)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_name__160io label[class~=Mui-error] {\n    color: rgba(0,0,0,.54)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_name__160io fieldset[class~=MuiOutlinedInput-notchedOutline] {\n    border-color: rgba(0,0,0,.23)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_mobile__B414b label {\n    font-size: 1.1rem;\n    background-color: #fff;\n    padding-right: .6rem;\n    transform: translate(1.4rem,1.6rem) scale(1)\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_mobile__B414b label {\n        font-size:.9rem;\n        transform: translate(1.4rem,1.3rem) scale(1)\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_mobile__B414b label {\n        font-size:1.1rem;\n        transform: translate(1.4rem,1.6rem) scale(1)\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_mobile__B414b label[data-shrink=true] {\n    transform: translate(1.4rem,-.3rem) scale(.75)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_mobile__B414b label[class~=Mui-error] {\n    color: rgba(0,0,0,.54)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_mobile__B414b fieldset[class~=MuiOutlinedInput-notchedOutline] {\n    border-color: rgba(0,0,0,.23)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_mobile__B414b div[class~=text-input-adornment] {\n    display: flex;\n    align-items: center;\n    font-family: Titillium Web;\n    width: 5rem\n}\n\n@media only screen and (min-width: 560px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_city__Wv8ug {\n        width:50%\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_city__Wv8ug label {\n    padding: .3rem .5rem;\n    background-color: #fff;\n    font-size: 1.1rem;\n    transform: translate(1.4rem,1.6rem) scale(1)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_city__Wv8ug label[data-shrink=true] {\n    transform: translate(1.4rem,-.6rem) scale(.75)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_city__Wv8ug div[class~=MuiOutlinedInput-root] {\n    border-radius: 2px;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_city__Wv8ug div[class~=MuiOutlinedInput-root] {\n        height:3.8rem\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_city__Wv8ug div[class~=MuiOutlinedInput-root] {\n        height:4.4rem\n    }\n}\n\n@media only screen and (min-width: 560px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT {\n        margin-left:.6rem;\n        width: 48%\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT label {\n    padding: .3rem .5rem;\n    background-color: #fff;\n    font-size: 1.1rem;\n    transform: translate(1.4rem,1.4rem) scale(1)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT label[data-shrink=true] {\n    transform: translate(1.4rem,-.6rem) scale(.75)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT div[class~=MuiOutlinedInput-root] {\n    border-radius: 2px;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT div[class~=MuiOutlinedInput-root] {\n        height:3.8rem\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT div[class~=MuiOutlinedInput-root] {\n        height:4.4rem\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_info-source__rqLc3 label {\n    padding: .3rem .5rem;\n    background-color: #fff;\n    font-size: 1.1rem;\n    transform: translate(1.4rem,1.4rem) scale(1)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_info-source__rqLc3 label[data-shrink=true] {\n    transform: translate(1.4rem,-.6rem) scale(.75)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_info-source__rqLc3 div[class~=MuiOutlinedInput-root] {\n    border-radius: 2px;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_info-source__rqLc3 div[class~=MuiOutlinedInput-root] {\n        height:3.8rem\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_info-source__rqLc3 div[class~=MuiOutlinedInput-root] {\n        height:4.4rem\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN .PartnersForm_form-input-text__KXgf2 {\n    background: #fff;\n    border-radius: 2px;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN .PartnersForm_form-input-text__KXgf2 {\n        height:3.8rem\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN .PartnersForm_form-input-text__KXgf2 {\n        height:4.4rem\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN div[class~=form-input-select] {\n    width: 100%;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN div[class~=form-input-select] {\n        height:3.8rem\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN div[class~=form-input-select] {\n        height:4.4rem\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t div[class~=form-input] {\n    width: 100%;\n    margin: 0\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t div[class~=input-error-container] {\n    height: 1.5rem;\n    font-size: 1.2rem;\n    font-family: inherit;\n    min-height: 1.2rem;\n    margin-top: .2em;\n    margin-bottom: .2em;\n    font-style: normal;\n    font-weight: 400\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t div[class~=input-error-container] {\n        height:1rem;\n        min-height: 1rem;\n        font-size: 1rem\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t div[class~=input-error-container] {\n        min-height:1.8rem;\n        font-size: 1.2rem;\n        margin: .2rem 0\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t div[class~=input-error-container] div[class~=error] {\n    color: #eb5757;\n    display: flex;\n    align-items: center\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_same-row-fields__BiimE {\n    display: flex\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_same-row-fields__BiimE {\n        flex-direction:column\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t div[class~=form-input-text] {\n    background: #fff;\n    border-radius: 2px;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t div[class~=form-input-text] {\n        height:3.8rem\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t div[class~=form-input-text] {\n        height:4.4rem\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-button__51aip {\n    border: none;\n    border-radius: 2px;\n    background-color: #2962ff!important;\n    color: #fff!important;\n    width: 100%;\n    height: auto;\n    font-size: 1.6rem!important;\n    font-family: inherit;\n    line-height: 100%;\n    padding: 1.6rem 0!important;\n    font-weight: 700;\n    box-shadow: 0 0 2px 0 rgba(0,0,0,.5);\n    margin-top: .8rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-button__51aip {\n        font-size:1.4rem!important;\n        padding: 1.4rem 0!important\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-button__51aip.PartnersForm_request-btn__TmlCY {\n    cursor: pointer\n}\n\n@media only screen and (min-width: 560px) {\n    .PartnersForm_click-handler__7RMSD {\n        margin-left:.6rem;\n        width: 48%\n    }\n\n    .PartnersForm_click-handler__7RMSD .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT {\n        margin-left: 0;\n        width: 100%\n    }\n}\n\n.PartnersForm_click-handler__7RMSD .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT label {\n    padding: .3rem .5rem;\n    background-color: #fff;\n    font-size: 1.1rem;\n    transform: translate(1.4rem,1.4rem) scale(1)\n}\n\n.PartnersForm_click-handler__7RMSD .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT label[data-shrink=true] {\n    transform: translate(1.4rem,-.6rem) scale(.75)\n}\n\n.PartnersForm_click-handler__7RMSD .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT div[class~=MuiOutlinedInput-root] {\n    border-radius: 2px;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_click-handler__7RMSD .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT div[class~=MuiOutlinedInput-root] {\n        height:3.8rem\n    }\n}\n\n.FareEstimateModal_overlay__Un1KE {\n    background-color: rgba(0,0,0,.38);\n    position: fixed;\n    inset: 0;\n    display: flex;\n    overflow: auto\n}\n\n.FareEstimateModal_overlay__Un1KE .FareEstimateModal_modal-container__B7RS9 {\n    padding: 0;\n    margin: auto;\n    width: -moz-fit-content;\n    width: fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    outline: none\n}\n\n@media only screen and (max-width: 559px) {\n    .FareEstimateModal_overlay__Un1KE .FareEstimateModal_modal-container__B7RS9 {\n        width:100%;\n        position: absolute;\n        bottom: 0\n    }\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb {\n    text-align: center;\n    padding: 0;\n    height: -webkit-fill-available;\n    justify-content: space-evenly\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersFormAck_modal-container-ack__DjSZb {\n        padding:2.8rem\n    }\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb.PartnersFormAck_flex-col-align-center__oDp_9 {\n    display: flex;\n    flex-direction: column;\n    align-items: center\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb.PartnersFormAck_flex-col-align-center__oDp_9 .PartnersFormAck_ack__XsSR4 {\n    padding: 2rem\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb.PartnersFormAck_flex-col-align-center__oDp_9 .PartnersFormAck_ack__XsSR4.PartnersFormAck_msg__nEI8N {\n    font-size: 2.4rem\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb.PartnersFormAck_flex-col-align-center__oDp_9 .PartnersFormAck_ack__XsSR4.PartnersFormAck_name__LzZBX {\n    font-size: 2.2rem;\n    font-weight: 700;\n    color: #212121\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb.PartnersFormAck_flex-col-align-center__oDp_9 .PartnersFormAck_ack__XsSR4.PartnersFormAck_desc__x1ojP {\n    font-size: 2rem\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb.PartnersFormAck_flex-col-align-center__oDp_9 .PartnersFormAck_bold-txt-btn__WSzRz {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 2px;\n    box-shadow: 0 0 2px 0 rgba(0,0,0,.5);\n    font-weight: 700;\n    text-decoration: none;\n    cursor: pointer\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb.PartnersFormAck_flex-col-align-center__oDp_9 .PartnersFormAck_bold-txt-btn__WSzRz.PartnersFormAck_request-button__s4gq0 {\n    width: 50%;\n    min-width: 20rem;\n    background: #fff;\n    color: #2962ff;\n    border: 1px solid #2962ff;\n    text-transform: uppercase;\n    font-size: 1.6rem;\n    padding: 1rem;\n    margin: 3rem 0\n}\n\n.VehicleCapacity_vehicle-capacity-container__X1gyj {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    background-color: #ebf4ff;\n    border-radius: .6rem;\n    padding: .2rem .4rem\n}\n\n@media only screen and (max-width: 767px) {\n    .VehicleCapacity_vehicle-capacity-container__X1gyj {\n        border-radius:.4rem\n    }\n}\n\n.VehicleCapacity_vehicle-capacity-container__X1gyj .VehicleCapacity_vehicle-capacity-image-wrapper__TTxaY {\n    margin: auto 0;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center\n}\n\n.VehicleCapacity_vehicle-capacity-container__X1gyj .VehicleCapacity_vehicle-capacity__asClv {\n    font-weight: 600;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: #333;\n    margin: 0 0 0 .3rem\n}\n\n@media only screen and (max-width: 767px) {\n    .VehicleCapacity_vehicle-capacity-container__X1gyj .VehicleCapacity_vehicle-capacity__asClv {\n        font-size:1.4rem;\n        line-height: 2rem;\n        margin: 0 0 0 .1rem\n    }\n}\n\n.AttachVehicleModal_attach-vehicle-modal__XIuW_ {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%,-50%);\n    width: 90%;\n    min-width: 30rem;\n    max-width: 360px;\n    background-color: #fff;\n    box-shadow: 0 24px 38px 0 rgba(0,0,0,.08);\n    border-radius: 2px\n}\n\n.AttachVehicleModal_attach-vehicle-modal__XIuW_:focus {\n    outline: none\n}\n\n.AttachVehicleModal_attach-vehicle-modal__XIuW_ .AttachVehicleModal_modal-container__qv1tQ {\n    position: relative;\n    min-height: 30rem\n}\n\n.AttachVehicleModal_attach-vehicle-modal__XIuW_ .AttachVehicleModal_modal-container__qv1tQ .AttachVehicleModal_attach-form-container__1jRzZ {\n    background-color: #fff\n}\n\n.AttachVehicleModal_attach-vehicle-modal__XIuW_ .AttachVehicleModal_modal-container__qv1tQ .AttachVehicleModal_modal-titlebar__XV_7o {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 16px\n}\n\n.AttachVehicleModal_attach-vehicle-modal__XIuW_ .AttachVehicleModal_modal-container__qv1tQ .AttachVehicleModal_modal-titlebar__XV_7o .AttachVehicleModal_title__sx_6H {\n    font-size: 1.6rem;\n    line-height: 140%\n}\n\n.AttachVehicleModal_attach-vehicle-modal__XIuW_ .AttachVehicleModal_modal-container__qv1tQ .AttachVehicleModal_ack-close-btn__3BxgE {\n    position: absolute;\n    right: 2rem;\n    top: 2rem\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    box-shadow: 0 24px 38px 0 rgba(0,0,0,.08);\n    z-index: 110\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2:focus {\n    outline: none\n}\n\n@media only screen and (min-width: 560px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 {\n        width:auto;\n        top: 55%;\n        bottom: auto;\n        left: 50%;\n        transform: translate(-50%,-55%)\n    }\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc {\n    position: relative;\n    padding: 1.7rem 1rem .5rem;\n    width: 81rem;\n    border-radius: .8rem;\n    background-color: #fff\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc {\n        width:100%;\n        height: 64rem;\n        overflow-y: scroll;\n        padding: 2.4rem;\n        box-sizing: border-box;\n        border-radius: .8rem .8rem 0 0\n    }\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL {\n    margin-inline:auto;margin-bottom: .5rem;\n    text-align: center\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL {\n        position:relative;\n        width: 100%;\n        margin-bottom: 1.6rem;\n        text-align: start\n    }\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL .CitySelectorModal_close-button__9OQAO {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: .5rem;\n    margin-right: 3.7rem;\n    margin-top: 2.9rem;\n    cursor: pointer\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL .CitySelectorModal_close-button__9OQAO {\n        margin:0\n    }\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL .CitySelectorModal_title__tHhus {\n    font-size: 4rem;\n    line-height: 5.6rem;\n    font-weight: 600\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL .CitySelectorModal_title__tHhus {\n        font-size:2rem;\n        line-height: 2.8rem\n    }\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL .CitySelectorModal_sub-title__iGMuh {\n    font-size: 2rem;\n    line-height: 2.8rem;\n    font-weight: 400;\n    color: rgba(51,51,51,.64)\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL .CitySelectorModal_sub-title__iGMuh {\n        font-size:1.4rem;\n        line-height: 2rem\n    }\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container__0xaxG {\n    margin: 1.2rem;\n    padding: 1rem;\n    cursor: pointer;\n    transition: .3s\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container-selected__bthle {\n    border: .2rem solid #006ef5;\n    border-radius: .6rem\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container__0xaxG {\n        margin:0;\n        padding: .6rem .2rem;\n        margin-block:.8rem}\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container__0xaxG .CitySelectorModal_city-image__EiBDS {\n    margin-inline:auto;width: 8rem;\n    height: 8rem;\n    border-radius: .8rem;\n    overflow: hidden;\n    margin-bottom: .8rem\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container__0xaxG .CitySelectorModal_city-image__EiBDS {\n        width:5.6rem;\n        height: 5.6rem;\n        margin-bottom: .4rem\n    }\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container__0xaxG .CitySelectorModal_city-title__CVXw1 {\n    text-align: center;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    font-weight: 600\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container__0xaxG .CitySelectorModal_city-title__CVXw1 {\n        width:7.2rem;\n        font-size: 1.4rem;\n        line-height: 2rem;\n        margin-inline:auto}\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container__0xaxG:hover {\n    transform: scale(1.05)\n}\n\n.VehicleDetails_title-container__KoZSb {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-items: flex-start;\n    padding: 5.6rem;\n    background-color: #fff;\n    width: 36rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb {\n        padding:0;\n        width: 100%;\n        background-color: unset;\n        margin-bottom: .8rem\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq {\n        display:flex;\n        flex-direction: row;\n        justify-content: flex-start;\n        margin-bottom: 2rem\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-image__jxN3a {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-weight-desktop__Owqfe {\n    margin-top: 2rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-weight-desktop__Owqfe {\n        display:none\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd {\n    margin-top: .5rem;\n    margin-bottom: 2rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd {\n        display:flex;\n        flex-direction: column;\n        justify-content: center;\n        margin: 0 0 0 2rem\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd .VehicleDetails_vehicle-name__TwMXA {\n    font-weight: 600;\n    font-size: 2.4rem;\n    line-height: 3.2rem;\n    color: #2d2f34;\n    margin: 0;\n    text-align: center\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd .VehicleDetails_vehicle-name__TwMXA {\n        text-align:left;\n        font-size: 1.4rem;\n        line-height: 2rem\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd .VehicleDetails_vehicle-fare__Tt8Cl p {\n    font-weight: 400;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: #2d2f34;\n    margin: .1rem 0 0;\n    text-align: center\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd .VehicleDetails_vehicle-fare__Tt8Cl p {\n        text-align:left;\n        font-size: 1.2rem;\n        line-height: 1.6rem;\n        margin: .4rem 0 0\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd .VehicleDetails_vehicle-weight-mobile__rA9ML {\n    display: none;\n    margin-top: 2rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd .VehicleDetails_vehicle-weight-mobile__rA9ML {\n        display:block;\n        margin-top: .8rem;\n        width: -moz-fit-content;\n        width: fit-content\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_divider__4Ch7T {\n    width: 100%;\n    border-bottom: .1rem solid rgba(78,82,91,.12)\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS {\n    margin-top: 1.8rem;\n    width: 100%\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-section-title__ryt2g {\n    margin: 0;\n    font-weight: 600;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    color: #2d2f34\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-wrapper__ZntQf {\n    margin-top: .8rem;\n    display: grid;\n    grid-template-columns: repeat(1,1fr);\n    width: 100%;\n    align-items: center\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-wrapper__ZntQf {\n        grid-template-columns:repeat(2,1fr)\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-wrapper__ZntQf .VehicleDetails_best-for__8_39F {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 1.2rem\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-wrapper__ZntQf .VehicleDetails_best-for__8_39F .VehicleDetails_best-for-image__ZsSkM {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-wrapper__ZntQf .VehicleDetails_best-for__8_39F .VehicleDetails_best-for-title__R14mh {\n    margin: 0 0 0 .8rem;\n    font-weight: 400;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    color: #2d2f34;\n    text-align: left;\n    width: 100%\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_divider-mobile__9GSbM {\n    display: none\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_divider-mobile__9GSbM {\n        display:block;\n        width: 100%;\n        border-bottom: .1rem solid rgba(78,82,91,.12)\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_title-mobile__0_qDh {\n    display: none\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_title-mobile__0_qDh {\n        display:block;\n        text-align: left;\n        width: 100%;\n        margin: 2rem 0 0\n    }\n}\n\n@media only screen and (max-width: 1023px) {\n    .VehicleFareEstimateInput_container__ve1CJ {\n        width:100%\n    }\n}\n\n.VehicleFareEstimateInput_container__ve1CJ .VehicleFareEstimateInput_input-container__c_LeO {\n    background-color: #fff;\n    padding: 1.2rem 0;\n    width: 18rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .VehicleFareEstimateInput_container__ve1CJ .VehicleFareEstimateInput_input-container__c_LeO {\n        padding:.9rem 0;\n        width: 100%;\n        border: .07rem solid #ddd;\n        border-radius: .6rem\n    }\n}\n\n.VehicleFareEstimateInput_container__ve1CJ .VehicleFareEstimateInput_input-container__c_LeO .VehicleFareEstimateInput_label-required__7c_BR,.VehicleFareEstimateInput_container__ve1CJ .VehicleFareEstimateInput_input-container__c_LeO .VehicleFareEstimateInput_label__nM4lw {\n    font-weight: 600;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    color: #2d2f34;\n    padding-left: 2rem\n}\n\n.VehicleFareEstimateInput_container__ve1CJ .VehicleFareEstimateInput_input-container__c_LeO .VehicleFareEstimateInput_label-required__7c_BR:after {\n    content: \"*\";\n    color: #eb5757;\n    padding-left: .2rem\n}\n\n.VehicleFareEstimateInput_container__ve1CJ .VehicleFareEstimateInput_error-container__wkck8 {\n    position: absolute;\n    font-weight: 600;\n    font-size: 1rem;\n    line-height: 1.6rem;\n    color: #eb5757;\n    margin: 0 2rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .VehicleFareEstimateInput_container__ve1CJ .VehicleFareEstimateInput_error-container__wkck8 {\n        margin:0\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 {\n    width: -moz-fit-content;\n    width: fit-content;\n    height: 60rem;\n    display: flex;\n    position: relative;\n    overflow: hidden;\n    border-radius: .8rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 {\n        width:100%;\n        height: -moz-fit-content;\n        height: fit-content;\n        flex-direction: column;\n        padding: 2.4rem;\n        box-sizing: border-box;\n        background: #fcfcfc;\n        border-radius: .8rem .8rem 0 0;\n        overflow-y: auto\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x {\n    padding: 5.6rem;\n    background-color: #fff;\n    width: 22.4rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x {\n        padding:0;\n        width: -moz-fit-content;\n        width: fit-content;\n        background-color: unset;\n        margin-bottom: 1.5rem\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_title__6Mx3f {\n    padding: 0;\n    font-weight: 600;\n    font-size: 4.8rem;\n    line-height: 6.4rem;\n    color: #333;\n    margin: 0 0 2.4rem;\n    display: block\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_title__6Mx3f {\n        display:none;\n        font-size: 1.8rem;\n        line-height: 2.8rem;\n        margin-bottom: 0\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_sub-title__0_BHK {\n    margin: 0;\n    padding: 0;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: rgba(51,51,51,.64);\n    display: block\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_sub-title__0_BHK {\n        display:none;\n        font-size: 1.4rem;\n        line-height: 2rem\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_title-mobile__fnDsZ {\n    padding: 0;\n    font-weight: 600;\n    font-size: 4.8rem;\n    line-height: 6.4rem;\n    color: #333;\n    margin: 0 0 2.4rem;\n    display: none\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_title-mobile__fnDsZ {\n        display:block;\n        font-size: 1.8rem;\n        line-height: 2.8rem;\n        margin-bottom: 0\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_sub-title-mobile__Pfdz7 {\n    margin: 0;\n    padding: 0;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: rgba(51,51,51,.64);\n    display: none\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_sub-title-mobile__Pfdz7 {\n        display:block;\n        font-size: 1.4rem;\n        line-height: 2rem\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_form-container__deD6R {\n    background: #eef2ff;\n    box-sizing: border-box;\n    width: 42.8rem;\n    position: relative;\n    padding: 4.4rem 4rem 4rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_form-container__deD6R {\n        background:unset;\n        width: 100%;\n        padding: 0\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_close-modal-button__kTebR {\n    all: unset;\n    cursor: pointer;\n    margin: 2.4rem;\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: flex\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_close-modal-button__kTebR {\n        margin-top:2.5rem;\n        margin-right: 1.9rem\n    }\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd {\n    padding: 3.2rem 2.4rem;\n    border-top: .025rem solid rgba(78,82,91,.36);\n    border-radius: 0 .8rem .8rem .8rem;\n    filter: drop-shadow(0 .4rem 1.6rem rgba(0,0,0,.08));\n    background-color: #fff;\n    width: -moz-fit-content;\n    width: fit-content\n}\n\n@media only screen and (max-width: 1023px) {\n    .VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd {\n        filter:none;\n        background-color: transparent;\n        background-color: initial;\n        padding: 0;\n        width: auto\n    }\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_modal-title__Bp6M3 {\n    display: none\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center\n}\n\n@media only screen and (max-width: 1023px) {\n    .VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj {\n        display:flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        gap: 1.8rem\n    }\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj .VehicleFareEstimateForm_divider__lp0JR {\n    display: block;\n    border: none;\n    border-left: .1rem solid #ddd;\n    height: 5.6rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj .VehicleFareEstimateForm_divider__lp0JR {\n        display:none\n    }\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj input {\n    border: none;\n    outline: none;\n    font-family: inherit;\n    line-height: 1.8rem;\n    font-size: 1.2rem;\n    font-weight: 400;\n    text-overflow: ellipsis;\n    width: 80%;\n    background-color: #fff;\n    margin: .2rem 1.9rem;\n    padding: 0\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj input::-moz-placeholder {\n    color: rgba(51,51,51,.412);\n    font-family: inherit\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj input:-ms-input-placeholder {\n    color: rgba(51,51,51,.412);\n    font-family: inherit\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj input::placeholder {\n    color: rgba(51,51,51,.412);\n    font-family: inherit\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj .VehicleFareEstimateForm_submit-button-wrapper__6w1k2 .VehicleFareEstimateForm_submit-container__nsP72 {\n    width: 22rem;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj .VehicleFareEstimateForm_submit-button-wrapper__6w1k2 .VehicleFareEstimateForm_submit-container__nsP72 {\n        width:100%;\n        height: 5.6rem\n    }\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj .VehicleFareEstimateForm_submit-button-wrapper__6w1k2 .VehicleFareEstimateForm_submit-button-error__fluro {\n    position: absolute;\n    bottom: 1.5rem;\n    color: #eb5757;\n    font-weight: 600;\n    font-size: 1rem;\n    line-height: 1.6rem\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form-loader__2imIz {\n    width: 94.3rem;\n    height: 6.6rem\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_drop-input__f7RVx+div .VehicleFareEstimateForm_dropdown-item__SWVlc,.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_pickup-input__zZvaq+div .VehicleFareEstimateForm_dropdown-item__SWVlc {\n    padding: .9rem 1.9rem;\n    cursor: pointer;\n    font-size: 1.1rem;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    border-bottom: .05rem solid #d3d3d3\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_drop-input__f7RVx+div .VehicleFareEstimateForm_dropdown-item__SWVlc:hover,.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_pickup-input__zZvaq+div .VehicleFareEstimateForm_dropdown-item__SWVlc:hover {\n    cursor: pointer;\n    background-color: #f3f3f3\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk {\n    padding: 0;\n    margin: 0 auto;\n    height: -moz-max-content;\n    height: max-content\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk {\n        padding:0\n    }\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_modal-title__3rSMj {\n    font-weight: 600;\n    font-size: 2.4rem;\n    line-height: 3.2rem;\n    margin: 0;\n    color: #2d2f34\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_modal-title__3rSMj {\n        display:none\n    }\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 1.6rem;\n    margin-top: 1.2rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz {\n        margin-top:0;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        gap: 1.8rem\n    }\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz .VehicleFareEstimateFormModal_divider__MhYty {\n    display: none\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz input {\n    border: none;\n    outline: none;\n    font-family: inherit;\n    line-height: 2.4rem;\n    font-size: 1.6rem;\n    font-weight: 400;\n    text-overflow: ellipsis;\n    width: 90%;\n    background-color: #fff;\n    margin: .2rem 1.9rem 0;\n    padding: 0\n}\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_form-container__deD6R {\n    background: #eef2ff;\n    box-sizing: border-box;\n    width: 42.8rem;\n    position: relative;\n    padding: 4.4rem 4rem 4rem;\n}\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz input {\n        font-size:1.2rem;\n        line-height: 1.8rem;\n        margin: .2rem 1.4rem 0\n    }\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz input::-moz-placeholder {\n    color: rgba(51,51,51,.412);\n    font-family: inherit\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz input:-ms-input-placeholder {\n    color: rgba(51,51,51,.412);\n    font-family: inherit\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz input::placeholder {\n    color: rgba(51,51,51,.412);\n    font-family: inherit\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz .VehicleFareEstimateFormModal_submit-button-wrapper__wXj81 {\n    position: relative;\n    top: 9rem;\n    width: 100%\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz .VehicleFareEstimateFormModal_submit-button-wrapper__wXj81 {\n        position:static;\n        width: 100%\n    }\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz .VehicleFareEstimateFormModal_submit-button-wrapper__wXj81 .VehicleFareEstimateFormModal_submit-container__qL_IG {\n    height: 5.6rem\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz .VehicleFareEstimateFormModal_submit-button-wrapper__wXj81 .VehicleFareEstimateFormModal_submit-button-error__e9IDo {\n    position: absolute;\n    bottom: -1.7rem;\n    color: #eb5757;\n    font-weight: 600;\n    font-size: 1rem;\n    line-height: 1.6rem\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_drop-input__BjYO5+div .VehicleFareEstimateFormModal_dropdown-item__dxA4c,.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_pickup-input__NRKfU+div .VehicleFareEstimateFormModal_dropdown-item__dxA4c {\n    padding: .9rem 1.9rem;\n    cursor: pointer;\n    font-size: 1.1rem;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    border-bottom: .05rem solid #d3d3d3;\n    width: 100%\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_drop-input__BjYO5+div .VehicleFareEstimateFormModal_dropdown-item__dxA4c:hover,.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_pickup-input__NRKfU+div .VehicleFareEstimateFormModal_dropdown-item__dxA4c:hover {\n    cursor: pointer;\n    background-color: #f3f3f3\n}\n\n.VehicleFareEstimateInputModal_container__OQtPn {\n    width: 100%\n}\n\n.VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_input-container__qWzOQ {\n    background-color: #fff;\n    padding: .975rem 0;\n    border: .1rem solid #ddd;\n    border-radius: .8rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_input-container__qWzOQ {\n        padding:.9rem 0;\n        width: 100%;\n        border: .07rem solid #ddd;\n        border-radius: .6rem\n    }\n}\n\n.VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_input-container__qWzOQ .VehicleFareEstimateInputModal_label-required__lAQ8d,.VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_input-container__qWzOQ .VehicleFareEstimateInputModal_label__MyfNR {\n    font-weight: 600;\n    font-size: 1.2rem;\n    line-height: 1.6rem;\n    color: #2d2f34;\n    padding-left: 2rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_input-container__qWzOQ .VehicleFareEstimateInputModal_label-required__lAQ8d,.VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_input-container__qWzOQ .VehicleFareEstimateInputModal_label__MyfNR {\n        font-size:1rem;\n        line-height: 1.2rem;\n        padding-left: 1.4rem\n    }\n}\n\n.VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_input-container__qWzOQ .VehicleFareEstimateInputModal_label-required__lAQ8d:after {\n    content: \"*\";\n    color: #eb5757;\n    padding-left: .2rem\n}\n\n.VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_error-container__ATPh2 {\n    position: absolute;\n    font-weight: 600;\n    font-size: 1rem;\n    line-height: 1.6rem;\n    color: #eb5757;\n    margin: 0\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_error-container__ATPh2 {\n        margin:0\n    }\n}\n\n  </style>\n\n <div class=\"VehicleModalLayout_estimate-layout-container__opyh2\"><section class=\"VehicleDetails_title-container__KoZSb\"><div class=\"VehicleDetails_vehicle__5XxLq\"><div class=\"VehicleDetails_vehicle-image__jxN3a\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27226%27%20height=%27140%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"Tata Ace\" srcset=\"https://d3apkeya39jz4k.cloudfront.net/tata_ace_2deb9441fd.svg 1x, https://d3apkeya39jz4k.cloudfront.net/tata_ace_2deb9441fd.svg 2x\" src=\"https://d3apkeya39jz4k.cloudfront.net/tata_ace_2deb9441fd.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></div><div class=\"VehicleDetails_vehicle-weight-desktop__Owqfe\"><div class=\"VehicleCapacity_vehicle-capacity-container__X1gyj\"><div class=\"VehicleCapacity_vehicle-capacity-image-wrapper__TTxaY\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2716%27%20height=%2716%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"Vehicle Capacity Icon\" srcset=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/fare-estimate-result/weight.svg 1x, https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/fare-estimate-result/weight.svg 2x\" src=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/fare-estimate-result/weight.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></div><p class=\"VehicleCapacity_vehicle-capacity__asClv\">500 kg</p></div></div><div class=\"VehicleDetails_vehicle-text__5sEtd\"><h3 class=\"VehicleDetails_vehicle-name__TwMXA\">Three-Wheeler\n</h3><div class=\"VehicleDetails_vehicle-fare__Tt8Cl\"><p>Starting from <strong>₹205</strong></p></div><div class=\"VehicleDetails_vehicle-weight-mobile__rA9ML\"><div class=\"VehicleCapacity_vehicle-capacity-container__X1gyj\"><div class=\"VehicleCapacity_vehicle-capacity-image-wrapper__TTxaY\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2716%27%20height=%2716%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"Vehicle Capacity Icon\" srcset=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/fare-estimate-result/weight.svg 1x, https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/fare-estimate-result/weight.svg 2x\" src=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/fare-estimate-result/weight.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></div><p class=\"VehicleCapacity_vehicle-capacity__asClv\">750kg</p></div></div></div></div><div class=\"VehicleDetails_divider__4Ch7T\"></div><div class=\"VehicleDetails_best-for-section-wrapper__bm_LS\"><h3 class=\"VehicleDetails_best-for-section-title__ryt2g\">Best for sending:</h3><div class=\"VehicleDetails_best-for-wrapper__ZntQf\"><div class=\"VehicleDetails_best-for__8_39F\"><div class=\"VehicleDetails_best-for-image__ZsSkM\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"Fruits and Vegetables\" srcset=\"https://d3apkeya39jz4k.cloudfront.net/liquor_11515f1904.svg 1x, https://d3apkeya39jz4k.cloudfront.net/liquor_11515f1904.svg 2x\" src=\"https://d3apkeya39jz4k.cloudfront.net/liquor_11515f1904.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></div><p class=\"VehicleDetails_best-for-title__R14mh\">FMGC Food Products</p></div><div class=\"VehicleDetails_best-for__8_39F\"><div class=\"VehicleDetails_best-for-image__ZsSkM\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"Chemicals\" srcset=\"https://d3apkeya39jz4k.cloudfront.net/science_e408f394d6.svg 1x, https://d3apkeya39jz4k.cloudfront.net/science_e408f394d6.svg 2x\" src=\"https://d3apkeya39jz4k.cloudfront.net/science_e408f394d6.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></div><p class=\"VehicleDetails_best-for-title__R14mh\">Chemicals</p></div><div class=\"VehicleDetails_best-for__8_39F\"><div class=\"VehicleDetails_best-for-image__ZsSkM\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"Fruits &amp; Vegetables\" srcset=\"https://d3apkeya39jz4k.cloudfront.net/nutrition_a9abb67b41.svg 1x, https://d3apkeya39jz4k.cloudfront.net/nutrition_a9abb67b41.svg 2x\" src=\"https://d3apkeya39jz4k.cloudfront.net/nutrition_a9abb67b41.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></div><p class=\"VehicleDetails_best-for-title__R14mh\">Fruits & Vegetables\n\n</p></div></div></div><div class=\"VehicleDetails_divider-mobile__9GSbM\"></div><h2 class=\"VehicleDetails_title-mobile__0_qDh\">Your Quick Quote</h2></section><section class=\"VehicleModalLayout_form-container__deD6R\"><div class=\"VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk\"><h2 class=\"VehicleFareEstimateFormModal_modal-title__3rSMj\">Get an Estimate</h2><form class=\"VehicleFareEstimateFormModal_fare-estimate-form__MTntz\"><div class=\"VehicleFareEstimateInputModal_container__OQtPn\"><div class=\"VehicleFareEstimateInputModal_input-container__qWzOQ\"><label class=\"VehicleFareEstimateInputModal_label-required__lAQ8d \n            \" for=\"Pickup Location\">Pickup Location</label><div style=\"display: block; position: relative;\"><input placeholder=\"enter pick up location\" id=\"custom-autocomplete-pickup-address-0.8037524639757163\" class=\"VehicleFareEstimateFormModal_pickup-input__NRKfU \" role=\"combobox\" aria-autocomplete=\"list\" aria-expanded=\"false\" autocomplete=\"off\" value=\"\" onfocus=\"this.setAttribute('autocomplete', 'chrome-off' );\"></div></div></div><div class=\"VehicleFareEstimateFormModal_divider__MhYty\"></div><div class=\"VehicleFareEstimateInputModal_container__OQtPn\"><div class=\"VehicleFareEstimateInputModal_input-container__qWzOQ\"><label class=\"VehicleFareEstimateInputModal_label-required__lAQ8d \n            \" for=\"Drop Location\">Drop Location</label><div style=\"display: block; position: relative;\"><input placeholder=\"enter drop location\" id=\"custom-autocomplete-pickup-address-0.633350466237725\" class=\"VehicleFareEstimateFormModal_drop-input__BjYO5 \" role=\"combobox\" aria-autocomplete=\"list\" aria-expanded=\"false\" autocomplete=\"off\" value=\"\" onfocus=\"this.setAttribute('autocomplete', 'chrome-off' );\"></div></div></div><div class=\"VehicleFareEstimateFormModal_divider__MhYty\"></div><div class=\"VehicleFareEstimateInputModal_container__OQtPn\"><div class=\"VehicleFareEstimateInputModal_input-container__qWzOQ\"><label class=\"VehicleFareEstimateInputModal_label-required__lAQ8d \n            \" for=\"Phone Number\">Phone Number</label><input placeholder=\"enter your phone number\" type=\"tel\" value=\"\"></div></div><div class=\"VehicleFareEstimateFormModal_divider__MhYty\"></div><div class=\"VehicleFareEstimateInputModal_container__OQtPn\"><div class=\"VehicleFareEstimateInputModal_input-container__qWzOQ\"><label class=\"VehicleFareEstimateInputModal_label__MyfNR \n            \" for=\"Name\">Name</label><input placeholder=\"enter your name\" type=\"text\" value=\"\"></div></div><div class=\"VehicleFareEstimateFormModal_submit-button-wrapper__wXj81\"><button class=\"FormInput_submit__icI8k FormInput_submit-enabled__qOriP VehicleFareEstimateFormModal_submit-container__qL_IG\"><div class=\"FormInput_submit-text__LL1rf\">Get an Estimate</div><div class=\"FormInput_submit-arrow-icon__Zz3tC\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2716%27%20height=%2716%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"Right Arrow Icon\" srcset=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/common/submit_arrow_16.svg 1x, https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/common/submit_arrow_16.svg 2x\" src=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/common/submit_arrow_16.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></div></button></div></form></div></section><button class=\"VehicleModalLayout_close-modal-button__kTebR\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2724%27%20height=%2724%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"close\" srcset=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/common/cross_24.svg 1x, https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/common/cross_24.svg 2x\" src=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/common/cross_24.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></button></div>";
      /***/
    },

    /***/
    "diaN":
    /*!*************************************************************************!*\
      !*** ./src/app/components/cards/card-profile/card-profile.component.ts ***!
      \*************************************************************************/

    /*! exports provided: CardProfileComponent */

    /***/
    function diaN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardProfileComponent", function () {
        return CardProfileComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_card_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./card-profile.component.html */
      "c9Li");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CardProfileComponent = /*#__PURE__*/function () {
        function CardProfileComponent() {
          _classCallCheck(this, CardProfileComponent);
        }

        _createClass(CardProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CardProfileComponent;
      }();

      CardProfileComponent.ctorParameters = function () {
        return [];
      };

      CardProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-profile",
        template: _raw_loader_card_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], CardProfileComponent);
      /***/
    },

    /***/
    "dnvD":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth/auth.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function dnvD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div>\n  <app-auth-navbar></app-auth-navbar>\n  <main>\n    <section class=\"relative w-full h-full py-40 min-h-screen\">\n      <div\n        class=\"absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full\"\n        style=\"background-image: url('assets/img/register_bg_2.png')\"\n      ></div>\n      <router-outlet></router-outlet>\n      <app-footer-small [absolute]=\"true\"></app-footer-small>\n    </section>\n  </main>\n</div>\n";
      /***/
    },

    /***/
    "e8es":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/index-dropdown/index-dropdown.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function e8es(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<a\n  class=\"hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold\"\n  href=\"#pablo\"\n  (click)=\"toggleDropdown($event)\"\n  #btnDropdownRef\n>\n  Demo Pages\n</a>\n<div\n  class=\"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48\"\n  [ngClass]=\"dropdownPopoverShow ? 'block' : 'hidden'\"\n  #popoverDropdownRef\n>\n  <span\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400\"\n  >\n    Admin Layout\n  </span>\n  <a\n    [routerLink]=\"['/admin/dashboard']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Dashboard\n  </a>\n  <a\n    [routerLink]=\"['/admin/settings']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Settings\n  </a>\n  <a\n    [routerLink]=\"['/admin/tables']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Tables\n  </a>\n  <a\n    [routerLink]=\"['/admin/maps']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Maps\n  </a>\n  <div class=\"h-0 mx-4 my-2 border border-solid border-blueGray-100\"></div>\n  <span\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400\"\n  >\n    Auth Layout\n  </span>\n  <a\n    [routerLink]=\"['/auth/login']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Login\n  </a>\n  <a\n    [routerLink]=\"['/auth/register']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Register\n  </a>\n  <div class=\"h-0 mx-4 my-2 border border-solid border-blueGray-100\"></div>\n  <span\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400\"\n  >\n    No Layout\n  </span>\n  <a\n    [routerLink]=\"['/landing']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Landing\n  </a>\n  <a\n    [routerLink]=\"['/profile']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Profile\n  </a>\n</div>\n";
      /***/
    },

    /***/
    "e8ip":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbars/auth-navbar/auth-navbar.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function e8ip(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav\n  class=\"top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg\"\n>\n  <div\n    class=\"container px-4 mx-auto flex flex-wrap items-center justify-between\"\n  >\n    <div\n      class=\"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start\"\n    >\n      <a\n        [routerLink]=\"['/Landing']\"\n        class=\"text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase\"\n      >\n        Logist\n      </a>\n      <button\n        class=\"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none\"\n        type=\"button\"\n        (click)=\"setNavbarOpen()\"\n      >\n        <i class=\"text-white fas fa-bars\"></i>\n      </button>\n    </div>\n    <div\n      class=\"lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none\"\n      [ngClass]=\"{ hidden: !navbarOpen, 'block rounded shadow-lg': navbarOpen }\"\n      id=\"example-navbar-warning\"\n    >\n      <ul class=\"flex flex-col lg:flex-row list-none lg:ml-auto\">\n        <li class=\"flex items-center\">\n          <app-pages-dropdown class=\"block\"></app-pages-dropdown>\n        </li>\n        <li class=\"flex items-center\">\n          <a\n            class=\"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"\n            href=\"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-angular%2F\"\n            target=\"_blank\"\n          >\n            <i\n              class=\"lg:text-blueGray-200 text-blueGray-400 fab fa-facebook text-lg leading-lg\"\n            ></i>\n            <span class=\"lg:hidden inline-block ml-2\">Share</span>\n          </a>\n        </li>\n\n        <li class=\"flex items-center\">\n          <a\n            class=\"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"\n            href=\"https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-angular%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20Angular%20UI%20Kit%20and%20Admin.%20Let%20Notus%20Angular%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.\"\n            target=\"_blank\"\n          >\n            <i\n              class=\"lg:text-blueGray-200 text-blueGray-400 fab fa-twitter text-lg leading-lg\"\n            ></i>\n            <span class=\"lg:hidden inline-block ml-2\">Tweet</span>\n          </a>\n        </li>\n\n        <li class=\"flex items-center\">\n          <a\n            class=\"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"\n            href=\"https://github.com/creativetimofficial/notus-angular?ref=na-auth-navbar\"\n            target=\"_blank\"\n          >\n            <i\n              class=\"lg:text-blueGray-200 text-blueGray-400 fab fa-github text-lg leading-lg\"\n            ></i>\n            <span class=\"lg:hidden inline-block ml-2\">Star</span>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n";
      /***/
    },

    /***/
    "eEaf":
    /*!******************************************************!*\
      !*** ./src/app/views/landing/flip/flip.component.ts ***!
      \******************************************************/

    /*! exports provided: FlipComponent */

    /***/
    function eEaf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlipComponent", function () {
        return FlipComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_flip_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./flip.component.html */
      "CL0b");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FlipComponent = /*#__PURE__*/function () {
        function FlipComponent() {
          _classCallCheck(this, FlipComponent);
        }

        _createClass(FlipComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FlipComponent;
      }();

      FlipComponent.ctorParameters = function () {
        return [];
      };

      FlipComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-flip',
        template: _raw_loader_flip_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], FlipComponent);
      /***/
    },

    /***/
    "eix7":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-settings/card-settings.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function eix7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div\n  class=\"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0\"\n>\n  <div class=\"rounded-t bg-white mb-0 px-6 py-6\">\n    <div class=\"text-center flex justify-between\">\n      <h6 class=\"text-blueGray-700 text-xl font-bold\">My account</h6>\n      <button\n        class=\"bg-red-600 text-white active:bg-red-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150\"\n        type=\"button\"\n      >\n        Settings\n      </button>\n    </div>\n  </div>\n  <div class=\"flex-auto px-4 lg:px-10 py-10 pt-0\">\n    <form>\n      <h6 class=\"text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase\">\n        User Information\n      </h6>\n      <div class=\"flex flex-wrap\">\n        <div class=\"w-full lg:w-6/12 px-4\">\n          <div class=\"relative w-full mb-3\">\n            <label\n              class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\n              htmlFor=\"grid-password\"\n            >\n              Username\n            </label>\n            <input\n              type=\"text\"\n              class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\n              value=\"lucky.jesse\"\n            />\n          </div>\n        </div>\n        <div class=\"w-full lg:w-6/12 px-4\">\n          <div class=\"relative w-full mb-3\">\n            <label\n              class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\n              htmlFor=\"grid-password\"\n            >\n              Email address\n            </label>\n            <input\n              type=\"email\"\n              class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\n              value=\"jesse@example.com\"\n            />\n          </div>\n        </div>\n        <div class=\"w-full lg:w-6/12 px-4\">\n          <div class=\"relative w-full mb-3\">\n            <label\n              class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\n              htmlFor=\"grid-password\"\n            >\n              First Name\n            </label>\n            <input\n              type=\"text\"\n              class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\n              value=\"Lucky\"\n            />\n          </div>\n        </div>\n        <div class=\"w-full lg:w-6/12 px-4\">\n          <div class=\"relative w-full mb-3\">\n            <label\n              class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\n              htmlFor=\"grid-password\"\n            >\n              Last Name\n            </label>\n            <input\n              type=\"text\"\n              class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\n              value=\"Jesse\"\n            />\n          </div>\n        </div>\n      </div>\n\n      <hr class=\"mt-6 border-b-1 border-blueGray-300\" />\n\n      <h6 class=\"text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase\">\n        Contact Information\n      </h6>\n      <div class=\"flex flex-wrap\">\n        <div class=\"w-full lg:w-12/12 px-4\">\n          <div class=\"relative w-full mb-3\">\n            <label\n              class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\n              htmlFor=\"grid-password\"\n            >\n              Address\n            </label>\n            <input\n              type=\"text\"\n              class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\n              value=\"Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09\"\n            />\n          </div>\n        </div>\n        <div class=\"w-full lg:w-4/12 px-4\">\n          <div class=\"relative w-full mb-3\">\n            <label\n              class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\n              htmlFor=\"grid-password\"\n            >\n              City\n            </label>\n            <input\n              type=\"email\"\n              class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\n              value=\"New York\"\n            />\n          </div>\n        </div>\n        <div class=\"w-full lg:w-4/12 px-4\">\n          <div class=\"relative w-full mb-3\">\n            <label\n              class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\n              htmlFor=\"grid-password\"\n            >\n              Country\n            </label>\n            <input\n              type=\"text\"\n              class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\n              value=\"United States\"\n            />\n          </div>\n        </div>\n        <div class=\"w-full lg:w-4/12 px-4\">\n          <div class=\"relative w-full mb-3\">\n            <label\n              class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\n              htmlFor=\"grid-password\"\n            >\n              Postal Code\n            </label>\n            <input\n              type=\"text\"\n              class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\n              value=\"Postal Code\"\n            />\n          </div>\n        </div>\n      </div>\n\n      <hr class=\"mt-6 border-b-1 border-blueGray-300\" />\n\n      <h6 class=\"text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase\">\n        About Me\n      </h6>\n      <div class=\"flex flex-wrap\">\n        <div class=\"w-full lg:w-12/12 px-4\">\n          <div class=\"relative w-full mb-3\">\n            <label\n              class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\n              htmlFor=\"grid-password\"\n            >\n              About me\n            </label>\n            <textarea\n              type=\"text\"\n              class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\n              rows=\"4\"\n            >\n                  A beautiful UI Kit and Admin for Angular & Tailwind CSS. It is Free\n                  and Open Source.\n                </textarea\n            >\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "g4op":
    /*!************************************************************!*\
      !*** ./src/app/views/landing/fliptwo/fliptwo.component.ts ***!
      \************************************************************/

    /*! exports provided: FliptwoComponent */

    /***/
    function g4op(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FliptwoComponent", function () {
        return FliptwoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_fliptwo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./fliptwo.component.html */
      "JdSc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FliptwoComponent = /*#__PURE__*/function () {
        function FliptwoComponent() {
          _classCallCheck(this, FliptwoComponent);
        }

        _createClass(FliptwoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FliptwoComponent;
      }();

      FliptwoComponent.ctorParameters = function () {
        return [];
      };

      FliptwoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-fliptwo',
        template: _raw_loader_fliptwo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], FliptwoComponent);
      /***/
    },

    /***/
    "lLla":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-line-chart/card-line-chart.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lLla(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div\n  class=\"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700\"\n>\n  <div class=\"rounded-t mb-0 px-4 py-3 bg-transparent\">\n    <div class=\"flex flex-wrap items-center\">\n      <div class=\"relative w-full max-w-full flex-grow flex-1\">\n        <h6 class=\"uppercase text-blueGray-100 mb-1 text-xs font-semibold\">\n          Overview\n        </h6>\n        <h2 class=\"text-white text-xl font-semibold\">Sales value</h2>\n      </div>\n    </div>\n  </div>\n  <div class=\"p-4 flex-auto\">\n    <!-- Chart -->\n    <div class=\"relative\" style=\"height: 350px\">\n      <canvas id=\"line-chart\"></canvas>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "owMO":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/pages-dropdown/pages-dropdown.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function owMO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<a\n  class=\"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"\n  href=\"#pablo\"\n  (click)=\"toggleDropdown($event)\"\n  #btnDropdownRef\n>\n  EXPLORE\n</a>\n<div\n  class=\"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48\"\n  [ngClass]=\"dropdownPopoverShow ? 'block' : 'hidden'\"\n  #popoverDropdownRef\n>\n  <span\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400\"\n  >\n    Admin Layout\n  </span>\n  <a\n    [routerLink]=\"['/admin/dashboard']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Dashboard\n  </a>\n  <a\n    [routerLink]=\"['/admin/settings']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Settings\n  </a>\n  <a\n    [routerLink]=\"['/admin/tables']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Tables\n  </a>\n  <a\n    [routerLink]=\"['/admin/maps']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Maps\n  </a>\n  <div class=\"h-0 mx-4 my-2 border border-solid border-blueGray-100\"></div>\n  <span\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400\"\n  >\n    Auth Layout\n  </span>\n  <a\n    [routerLink]=\"['/auth/login']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Login\n  </a>\n  <a\n    [routerLink]=\"['/auth/register']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Register\n  </a>\n  <div class=\"h-0 mx-4 my-2 border border-solid border-blueGray-100\"></div>\n  <span\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400\"\n  >\n    No Layout\n  </span>\n  <a\n    [routerLink]=\"['/landing']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Landing\n  </a>\n  <a\n    [routerLink]=\"['/profile']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Profile\n  </a>\n</div>\n";
      /***/
    },

    /***/
    "rKqC":
    /*!****************************************************!*\
      !*** ./src/app/views/admin/maps/maps.component.ts ***!
      \****************************************************/

    /*! exports provided: MapsComponent */

    /***/
    function rKqC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapsComponent", function () {
        return MapsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_maps_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./maps.component.html */
      "165v");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MapsComponent = /*#__PURE__*/function () {
        function MapsComponent() {
          _classCallCheck(this, MapsComponent);
        }

        _createClass(MapsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MapsComponent;
      }();

      MapsComponent.ctorParameters = function () {
        return [];
      };

      MapsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-maps",
        template: _raw_loader_maps_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], MapsComponent);
      /***/
    },

    /***/
    "rOy2":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/table-dropdown/table-dropdown.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rOy2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<a\n  class=\"text-blueGray-500 block py-1 px-3\"\n  href=\"#pablo\"\n  (click)=\"toggleDropdown($event)\"\n  #btnDropdownRef\n>\n  <i class=\"fas fa-ellipsis-v\"></i>\n</a>\n<div class=\"min-w-48 z-50\" #popoverDropdownRef>\n  <div\n    class=\"bg-white text-base float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48\"\n    [ngClass]=\"dropdownPopoverShow ? 'block' : 'hidden'\"\n  >\n    <a\n      href=\"#pablo\"\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n    >\n      Action\n    </a>\n    <a\n      href=\"#pablo\"\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n    >\n      Another action\n    </a>\n    <a\n      href=\"#pablo\"\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n    >\n      Something else here\n    </a>\n    <div class=\"h-0 my-2 border border-solid border-blueGray-100\"></div>\n    <a\n      href=\"#pablo\"\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n    >\n      Seprated link\n    </a>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "u/sr":
    /*!**********************************************************************!*\
      !*** ./src/app/components/maps/map-example/map-example.component.ts ***!
      \**********************************************************************/

    /*! exports provided: MapExampleComponent */

    /***/
    function uSr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapExampleComponent", function () {
        return MapExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_map_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./map-example.component.html */
      "xkbx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MapExampleComponent = /*#__PURE__*/function () {
        function MapExampleComponent() {
          _classCallCheck(this, MapExampleComponent);
        }

        _createClass(MapExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var map = document.getElementById("map-canvas");
            var lat = map.getAttribute("data-lat");
            var lng = map.getAttribute("data-lng");
            var myLatlng = new google.maps.LatLng(lat, lng);
            var mapOptions = {
              zoom: 12,
              scrollwheel: false,
              center: myLatlng,
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              styles: [{
                featureType: "administrative",
                elementType: "labels.text.fill",
                stylers: [{
                  color: "#444444"
                }]
              }, {
                featureType: "landscape",
                elementType: "all",
                stylers: [{
                  color: "#f2f2f2"
                }]
              }, {
                featureType: "poi",
                elementType: "all",
                stylers: [{
                  visibility: "off"
                }]
              }, {
                featureType: "road",
                elementType: "all",
                stylers: [{
                  saturation: -100
                }, {
                  lightness: 45
                }]
              }, {
                featureType: "road.highway",
                elementType: "all",
                stylers: [{
                  visibility: "simplified"
                }]
              }, {
                featureType: "road.arterial",
                elementType: "labels.icon",
                stylers: [{
                  visibility: "off"
                }]
              }, {
                featureType: "transit",
                elementType: "all",
                stylers: [{
                  visibility: "off"
                }]
              }, {
                featureType: "water",
                elementType: "all",
                stylers: [{
                  color: "#feb2b2"
                }, {
                  visibility: "on"
                }]
              }]
            };
            map = new google.maps.Map(map, mapOptions);
            var marker = new google.maps.Marker({
              position: myLatlng,
              map: map,
              animation: google.maps.Animation.DROP,
              title: "Hello World!"
            });
            var contentString = '<div class="info-window-content"><h2>Notus Angular</h2>' + "<p>A beautiful UI Kit and Admin for Tailwind CSS. It is Free and Open Source.</p></div>";
            var infowindow = new google.maps.InfoWindow({
              content: contentString
            });
            google.maps.event.addListener(marker, "click", function () {
              infowindow.open(map, marker);
            });
          }
        }]);

        return MapExampleComponent;
      }();

      MapExampleComponent.ctorParameters = function () {
        return [];
      };

      MapExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-map-example",
        template: _raw_loader_map_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], MapExampleComponent);
      /***/
    },

    /***/
    "uhhN":
    /*!*********************************************************************!*\
      !*** ./src/app/components/cards/card-table/card-table.component.ts ***!
      \*********************************************************************/

    /*! exports provided: CardTableComponent */

    /***/
    function uhhN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardTableComponent", function () {
        return CardTableComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_card_table_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./card-table.component.html */
      "wMhV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CardTableComponent = /*#__PURE__*/function () {
        function CardTableComponent() {
          _classCallCheck(this, CardTableComponent);

          this._color = "light";
        }

        _createClass(CardTableComponent, [{
          key: "color",
          get: function get() {
            return this._color;
          },
          set: function set(color) {
            this._color = color !== "light" && color !== "dark" ? "light" : color;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CardTableComponent;
      }();

      CardTableComponent.ctorParameters = function () {
        return [];
      };

      CardTableComponent.propDecorators = {
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      CardTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-table",
        template: _raw_loader_card_table_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], CardTableComponent);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./layouts/admin/admin.component */
      "R+tk");
      /* harmony import */


      var _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./layouts/auth/auth.component */
      "Vbwu");
      /* harmony import */


      var _views_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./views/admin/dashboard/dashboard.component */
      "zmeh");
      /* harmony import */


      var _views_admin_maps_maps_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./views/admin/maps/maps.component */
      "rKqC");
      /* harmony import */


      var _views_admin_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./views/admin/settings/settings.component */
      "90Li");
      /* harmony import */


      var _views_admin_tables_tables_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./views/admin/tables/tables.component */
      "VTaN");
      /* harmony import */


      var _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./views/auth/login/login.component */
      "/kjZ");
      /* harmony import */


      var _views_auth_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./views/auth/register/register.component */
      "LN9C");
      /* harmony import */


      var _views_landing_landing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./views/landing/landing.component */
      "RMzx");
      /* harmony import */


      var _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./views/profile/profile.component */
      "wF9P");
      /* harmony import */


      var _views_landing_flip_flip_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./views/landing/flip/flip.component */
      "eEaf");
      /* harmony import */


      var _views_landing_fliptwo_fliptwo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./views/landing/fliptwo/fliptwo.component */
      "g4op");
      /* harmony import */


      var _views_landing_flipthree_flipthree_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./views/landing/flipthree/flipthree.component */
      "SQpN");
      /* harmony import */


      var _views_landing_flipfour_flipfour_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./views/landing/flipfour/flipfour.component */
      "yCe9");
      /* harmony import */


      var _views_landing_bike_bike_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./views/landing/bike/bike.component */
      "xbcH");
      /* harmony import */


      var _views_landing_flipbike_flipbike_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./views/landing/flipbike/flipbike.component */
      "5vqZ");
      /* harmony import */


      var _views_landing_courier_courier_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./views/landing/courier/courier.component */
      "+pgL"); // layouts
      // admin views
      // auth views
      // no layouts views


      var routes = [// admin views
      {
        path: "admin",
        component: _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        children: [{
          path: "dashboard",
          component: _views_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]
        }, {
          path: "settings",
          component: _views_admin_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__["SettingsComponent"]
        }, {
          path: "tables",
          component: _views_admin_tables_tables_component__WEBPACK_IMPORTED_MODULE_8__["TablesComponent"]
        }, {
          path: "maps",
          component: _views_admin_maps_maps_component__WEBPACK_IMPORTED_MODULE_6__["MapsComponent"]
        }, {
          path: "",
          redirectTo: "dashboard",
          pathMatch: "full"
        }]
      }, // auth views
      {
        path: "auth",
        component: _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"],
        children: [{
          path: "login",
          component: _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
        }, {
          path: "register",
          component: _views_auth_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"]
        }, {
          path: "",
          redirectTo: "login",
          pathMatch: "full"
        }]
      }, // no layout views
      {
        path: "profile",
        component: _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"]
      }, {
        path: "flip",
        component: _views_landing_flip_flip_component__WEBPACK_IMPORTED_MODULE_13__["FlipComponent"]
      }, {
        path: "fliptwo",
        component: _views_landing_fliptwo_fliptwo_component__WEBPACK_IMPORTED_MODULE_14__["FliptwoComponent"]
      }, {
        path: "flipthree",
        component: _views_landing_flipthree_flipthree_component__WEBPACK_IMPORTED_MODULE_15__["FlipthreeComponent"]
      }, {
        path: "flipfour",
        component: _views_landing_flipfour_flipfour_component__WEBPACK_IMPORTED_MODULE_16__["FlipfourComponent"]
      }, {
        path: "bike",
        component: _views_landing_bike_bike_component__WEBPACK_IMPORTED_MODULE_17__["BikeComponent"]
      }, {
        path: "flipbike",
        component: _views_landing_flipbike_flipbike_component__WEBPACK_IMPORTED_MODULE_18__["FlipbikeComponent"]
      }, {
        path: "courier",
        component: _views_landing_courier_courier_component__WEBPACK_IMPORTED_MODULE_19__["CourierComponent"]
      }, {
        path: "landing",
        component: _views_landing_landing_component__WEBPACK_IMPORTED_MODULE_11__["LandingComponent"]
      }, {
        path: "",
        component: _views_landing_landing_component__WEBPACK_IMPORTED_MODULE_11__["LandingComponent"]
      }, {
        path: "**",
        redirectTo: "",
        pathMatch: "full"
      }, {
        path: "flip",
        component: _views_landing_flip_flip_component__WEBPACK_IMPORTED_MODULE_13__["FlipComponent"]
      }];

      var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "vwLF":
    /*!***************************************************************************!*\
      !*** ./src/app/components/cards/card-settings/card-settings.component.ts ***!
      \***************************************************************************/

    /*! exports provided: CardSettingsComponent */

    /***/
    function vwLF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardSettingsComponent", function () {
        return CardSettingsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_card_settings_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./card-settings.component.html */
      "eix7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CardSettingsComponent = /*#__PURE__*/function () {
        function CardSettingsComponent() {
          _classCallCheck(this, CardSettingsComponent);
        }

        _createClass(CardSettingsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CardSettingsComponent;
      }();

      CardSettingsComponent.ctorParameters = function () {
        return [];
      };

      CardSettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-settings",
        template: _raw_loader_card_settings_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], CardSettingsComponent);
      /***/
    },

    /***/
    "wF9P":
    /*!****************************************************!*\
      !*** ./src/app/views/profile/profile.component.ts ***!
      \****************************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function wF9P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./profile.component.html */
      "8GP7");
      /* harmony import */


      var _profile_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile.component.css */
      "K8fT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent() {
          _classCallCheck(this, ProfileComponent);
        }

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.ctorParameters = function () {
        return [];
      };

      ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-profile",
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProfileComponent);
      /***/
    },

    /***/
    "wMhV":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-table/card-table.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wMhV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div\n  class=\"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded\"\n  [ngClass]=\"color === 'light' ? 'bg-white' : 'bg-red-900 text-white'\"\n>\n  <div class=\"rounded-t mb-0 px-4 py-3 border-0\">\n    <div class=\"flex flex-wrap items-center\">\n      <div class=\"relative w-full px-4 max-w-full flex-grow flex-1\">\n        <h3\n          class=\"font-semibold text-lg\"\n          [ngClass]=\"color === 'light' ? 'text-blueGray-700' : 'text-white'\"\n        >\n          Card Tables\n        </h3>\n      </div>\n    </div>\n  </div>\n  <div class=\"block w-full overflow-x-auto\">\n    <!-- Projects table -->\n    <table class=\"items-center w-full bg-transparent border-collapse\">\n      <thead>\n        <tr>\n          <th\n            class=\"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\n            [ngClass]=\"\n              color === 'light'\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\n                : 'bg-red-800 text-red-300 border-red-700'\n            \"\n          >\n            Project\n          </th>\n          <th\n            class=\"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\n            [ngClass]=\"\n              color === 'light'\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\n                : 'bg-red-800 text-red-300 border-red-700'\n            \"\n          >\n            Budget\n          </th>\n          <th\n            class=\"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\n            [ngClass]=\"\n              color === 'light'\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\n                : 'bg-red-800 text-red-300 border-red-700'\n            \"\n          >\n            Status\n          </th>\n          <th\n            class=\"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\n            [ngClass]=\"\n              color === 'light'\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\n                : 'bg-red-800 text-red-300 border-red-700'\n            \"\n          >\n            Users\n          </th>\n          <th\n            class=\"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\n            [ngClass]=\"\n              color === 'light'\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\n                : 'bg-red-800 text-red-300 border-red-700'\n            \"\n          >\n            Completion\n          </th>\n          <th\n            class=\"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\n            [ngClass]=\"\n              color === 'light'\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\n                : 'bg-red-800 text-red-300 border-red-700'\n            \"\n          ></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center\"\n          >\n            <img\n              src=\"assets/img/bootstrap.jpg\"\n              class=\"h-12 w-12 bg-white rounded-full border\"\n              alt=\"...\"\n            />\n            <span\n              class=\"ml-3 font-bold\"\n              [ngClass]=\"color === 'light' ? 'text-blueGray-600' : 'text-white'\"\n            >\n              Argon Design System\n            </span>\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            $2,500 USD\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <i class=\"fas fa-circle text-orange-500 mr-2\"></i> pending\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <div class=\"flex\">\n              <img\n                src=\"assets/img/team-1-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow\"\n              />\n              <img\n                src=\"assets/img/team-2-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\n              />\n              <img\n                src=\"assets/img/team-3-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\n              />\n              <img\n                src=\"assets/img/team-4-470x470.png\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\n              />\n            </div>\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <div class=\"flex items-center\">\n              <span class=\"mr-2\">60%</span>\n              <div class=\"relative w-full\">\n                <div\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-red-200\"\n                >\n                  <div\n                    style=\"width: 60%\"\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right\"\n          >\n            <app-table-dropdown></app-table-dropdown>\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center\"\n          >\n            <img\n              src=\"assets/img/angular.jpg\"\n              class=\"h-12 w-12 bg-white rounded-full border\"\n              alt=\"...\"\n            />\n            <span\n              class=\"ml-3 font-bold\"\n              [ngClass]=\"color === 'light' ? 'text-blueGray-600' : 'text-white'\"\n            >\n              Angular Now UI Kit PRO\n            </span>\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            $1,800 USD\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <i class=\"fas fa-circle text-emerald-500 mr-2\"></i>\n            completed\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <div class=\"flex\">\n              <img\n                src=\"assets/img/team-1-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow\"\n              />\n              <img\n                src=\"assets/img/team-2-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\n              />\n              <img\n                src=\"assets/img/team-3-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\n              />\n              <img\n                src=\"assets/img/team-4-470x470.png\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\n              />\n            </div>\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <div class=\"flex items-center\">\n              <span class=\"mr-2\">100%</span>\n              <div class=\"relative w-full\">\n                <div\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-emerald-200\"\n                >\n                  <div\n                    style=\"width: 100%\"\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right\"\n          >\n            <app-table-dropdown></app-table-dropdown>\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center\"\n          >\n            <img\n              src=\"assets/img/sketch.jpg\"\n              class=\"h-12 w-12 bg-white rounded-full border\"\n              alt=\"...\"\n            />\n            <span\n              class=\"ml-3 font-bold\"\n              [ngClass]=\"color === 'light' ? 'text-blueGray-600' : 'text-white'\"\n            >\n              Black Dashboard Sketch\n            </span>\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            $3,150 USD\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <i class=\"fas fa-circle text-red-500 mr-2\"></i> delayed\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <div class=\"flex\">\n              <img\n                src=\"assets/img/team-1-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow\"\n              />\n              <img\n                src=\"assets/img/team-2-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\n              />\n              <img\n                src=\"assets/img/team-3-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\n              />\n              <img\n                src=\"assets/img/team-4-470x470.png\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\n              />\n            </div>\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <div class=\"flex items-center\">\n              <span class=\"mr-2\">73%</span>\n              <div class=\"relative w-full\">\n                <div\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-red-200\"\n                >\n                  <div\n                    style=\"width: 73%\"\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right\"\n          >\n            <app-table-dropdown></app-table-dropdown>\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center\"\n          >\n            <img\n              src=\"assets/img/react.jpg\"\n              class=\"h-12 w-12 bg-white rounded-full border\"\n              alt=\"...\"\n            />\n            <span\n              class=\"ml-3 font-bold\"\n              [ngClass]=\"color === 'light' ? 'text-blueGray-600' : 'text-white'\"\n            >\n              React Material Dashboard\n            </span>\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            $4,400 USD\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <i class=\"fas fa-circle text-teal-500 mr-2\"></i> on schedule\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <div class=\"flex\">\n              <img\n                src=\"assets/img/team-1-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow\"\n              />\n              <img\n                src=\"assets/img/team-2-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\n              />\n              <img\n                src=\"assets/img/team-3-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\n              />\n              <img\n                src=\"assets/img/team-4-470x470.png\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\n              />\n            </div>\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <div class=\"flex items-center\">\n              <span class=\"mr-2\">90%</span>\n              <div class=\"relative w-full\">\n                <div\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-teal-200\"\n                >\n                  <div\n                    style=\"width: 90%\"\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right\"\n          >\n            <app-table-dropdown></app-table-dropdown>\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center\"\n          >\n            <img\n              src=\"assets/img/vue.jpg\"\n              class=\"h-12 w-12 bg-white rounded-full border\"\n              alt=\"...\"\n            />\n            <span\n              class=\"ml-3 font-bold\"\n              [ngClass]=\"color === 'light' ? 'text-blueGray-600' : 'text-white'\"\n            >\n              React Material Dashboard\n            </span>\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            $2,200 USD\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <i class=\"fas fa-circle text-emerald-500 mr-2\"></i>\n            completed\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <div class=\"flex\">\n              <img\n                src=\"assets/img/team-1-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow\"\n              />\n              <img\n                src=\"assets/img/team-2-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\n              />\n              <img\n                src=\"assets/img/team-3-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\n              />\n              <img\n                src=\"assets/img/team-4-470x470.png\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\n              />\n            </div>\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <div class=\"flex items-center\">\n              <span class=\"mr-2\">100%</span>\n              <div class=\"relative w-full\">\n                <div\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-emerald-200\"\n                >\n                  <div\n                    style=\"width: 100%\"\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right\"\n          >\n            <app-table-dropdown></app-table-dropdown>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "wcq5":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/dropdowns/pages-dropdown/pages-dropdown.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: PagesDropdownComponent */

    /***/
    function wcq5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagesDropdownComponent", function () {
        return PagesDropdownComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pages_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pages-dropdown.component.html */
      "owMO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _popperjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @popperjs/core */
      "EjV/");

      var PagesDropdownComponent = /*#__PURE__*/function () {
        function PagesDropdownComponent() {
          _classCallCheck(this, PagesDropdownComponent);

          this.dropdownPopoverShow = false;
        }

        _createClass(PagesDropdownComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleDropdown",
          value: function toggleDropdown(event) {
            event.preventDefault();

            if (this.dropdownPopoverShow) {
              this.dropdownPopoverShow = false;
            } else {
              this.dropdownPopoverShow = true;
              this.createPoppper();
            }
          }
        }, {
          key: "createPoppper",
          value: function createPoppper() {
            Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_3__["createPopper"])(this.btnDropdownRef.nativeElement, this.popoverDropdownRef.nativeElement, {
              placement: "bottom-start"
            });
          }
        }]);

        return PagesDropdownComponent;
      }();

      PagesDropdownComponent.propDecorators = {
        btnDropdownRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["btnDropdownRef", {
            "static": false
          }]
        }],
        popoverDropdownRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["popoverDropdownRef", {
            "static": false
          }]
        }]
      };
      PagesDropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-pages-dropdown",
        template: _raw_loader_pages_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], PagesDropdownComponent);
      /***/
    },

    /***/
    "x0DV":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/landing/flipbike/flipbike.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function x0DV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<style>\n   \n\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-section-title__ryt2g {\n    margin: 0;\n    font-weight: 600;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    color: #2d2f34;\n}\n.VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-wrapper__ZntQf .VehicleDetails_best-for__8_39F .VehicleDetails_best-for-title__R14mh {\n    margin: 0 0 0 0.8rem;\n    font-weight: 400;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    color: #2d2f34;\n    text-align: left;\n    width: 100%;\n}\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_modal-title__3rSMj {\n    font-weight: 600;\n    font-size: 2.4rem;\n    line-height: 3.2rem;\n    margin: 0;\n    color: #2d2f34;\n}\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_form-container__deD6R {\n    background: #eef2ff;\n    box-sizing: border-box;\n    width: 42.8rem;\n    position: relative;\n    padding: 4.4rem 4rem 4rem;\n}\n\n    .columnflip:first-child {\n      background-color: #eef;\n    }\n\n    .columnflip:last-child {\n      background-color: #fee;\n    }\n .Footer_footer-container__HntbH {\n    background-color: #000;\n    color: #fff\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC {\n    max-width: 150rem;\n    margin: auto;\n    padding: 4.8rem 0\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC {\n        padding:3.2rem 1.6rem\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 {\n    display: grid;\n    grid-template-columns: repeat(5,1fr);\n    padding: 0 3.6rem 4.8rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 {\n        grid-template-columns:1fr 1fr;\n        padding: 0 0 2.4rem\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_mobile-download__ynS_q {\n    display: none\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_company-info__dJXMm {\n    font-size: 2rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_company-info__dJXMm {\n        display:none\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_company-info__dJXMm .Footer_logo__GVpEx {\n    cursor: pointer\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_company-info__dJXMm .Footer_motto__vpt_I {\n    padding-top: 2.4rem;\n    width: 14rem\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_companies-links__0yil4,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_services-links__95wtA,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_support-links__v9_TZ {\n    display: flex;\n    flex-direction: column\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_companies-links__0yil4 .Footer_title__g0XIB,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_services-links__95wtA .Footer_title__g0XIB,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_support-links__v9_TZ .Footer_title__g0XIB {\n    font-weight: 600;\n    font-size: 1.8rem;\n    line-height: 140%\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_companies-links__0yil4 .Footer_list__r_RMm,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_services-links__95wtA .Footer_list__r_RMm,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_support-links__v9_TZ .Footer_list__r_RMm {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    padding-top: 1.2rem\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_companies-links__0yil4 .Footer_list__r_RMm .Footer_list-item__QPP6R,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_services-links__95wtA .Footer_list__r_RMm .Footer_list-item__QPP6R,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_support-links__v9_TZ .Footer_list__r_RMm .Footer_list-item__QPP6R {\n    font-size: 1.4rem;\n    margin-bottom: .8rem;\n    cursor: pointer;\n    display: block\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_support-links__v9_TZ {\n        display:none\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_download__6e9Km {\n    display: flex;\n    flex-direction: column;\n    gap: 1.6rem;\n    width: 18rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_download__6e9Km {\n        order:-1;\n        display: flex;\n        flex-direction: row;\n        grid-column: 1/span 2;\n        padding-bottom: 2.4rem;\n        width: 100%;\n        gap: 0\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_download-android__whnja,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_download-iOS__3ecym {\n    cursor: pointer\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_download-android__whnja,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-primary__uJHj6 .Footer_download-iOS__3ecym {\n        flex:1 1;\n        margin-right: 2rem\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv {\n    padding: 0 3.6rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv {\n        padding:0\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_cities-truck-links__2giuy {\n    display: flex;\n    flex-direction: column;\n    padding-bottom: 2.4rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_cities-truck-links__2giuy {\n        padding-bottom:2.4rem\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_cities-truck-links__2giuy .Footer_title__g0XIB {\n    font-weight: 600;\n    font-size: 1.8rem;\n    line-height: 140%\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_cities-truck-links__2giuy .Footer_list__r_RMm {\n    display: grid;\n    grid-template-columns: repeat(5,1fr);\n    grid-row-gap: 1.2rem;\n    padding-top: 1.2rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_cities-truck-links__2giuy .Footer_list__r_RMm {\n        grid-template-columns:repeat(3,1fr)\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_cities-truck-links__2giuy .Footer_list__r_RMm .Footer_list-item__QPP6R {\n    font-size: 1.4rem;\n    position: relative;\n    cursor: pointer\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_support-links__v9_TZ {\n    display: none\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_support-links__v9_TZ {\n        display:block;\n        padding-top: 1.2rem\n    }\n\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_support-links__v9_TZ .Footer_title__g0XIB {\n        display: none\n    }\n\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_support-links__v9_TZ .Footer_list__r_RMm {\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr;\n        align-items: center;\n        width: 100%\n    }\n\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-secondary__7ijkv .Footer_support-links__v9_TZ .Footer_list__r_RMm .Footer_list-item__QPP6R {\n        color: #bdbdbd;\n        font-size: 1.2rem;\n        padding: .6rem 0\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 2.4rem 3.6rem 0\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 {\n        flex-direction:column;\n        padding: 0;\n        align-items: flex-start\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ {\n        padding:2rem 0\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_fb__tr_T0,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_insta__R9wDV,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_linkedIn__DQwks,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_twitter__2Zp_k,.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_yt__GUvsn {\n    content: \"\";\n    background-image: url(https://d10wquj595no85.cloudfront.net/_next/static/media/social_media.62807da0.svg);\n    width: 3.2rem;\n    margin: 0 1.2rem 0 0;\n    height: 3.2rem;\n    background-position: 0;\n    background-size: auto 3.2rem;\n    background-repeat: no-repeat\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_insta__R9wDV {\n    background-position: 0\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_fb__tr_T0 {\n    background-position-x: -4rem\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_linkedIn__DQwks {\n    background-position-x: -8rem\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_twitter__2Zp_k {\n    background-position-x: -12rem\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_social-media___oCmQ .Footer_yt__GUvsn {\n    background-position-x: -16rem\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_copyright-wrapper__xjE5_ {\n    font-size: 1.4rem;\n    color: #bdbdbd\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_copyright-wrapper__xjE5_ .Footer_copyright__HmTp2 {\n    display: flex;\n    align-items: center\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_copyright-wrapper__xjE5_ .Footer_copyright__HmTp2 {\n        flex-direction:column;\n        align-items: flex-start;\n        font-size: 1.2rem\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_copyright-wrapper__xjE5_ .Footer_copyright__HmTp2 .Footer_info__EWbD8:before {\n    content: \"©\"\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_copyright-wrapper__xjE5_ .Footer_copyright__HmTp2 .Footer_info__EWbD8 {\n        margin-bottom:1rem\n    }\n}\n\n.Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_copyright-wrapper__xjE5_ .Footer_copyright__HmTp2 .Footer_vertical-seperator__imgpZ {\n    background: #bdbdbd;\n    margin: 0 1rem;\n    width: 1px;\n    height: 1.4rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Footer_footer-container__HntbH .Footer_footer-content-wrapper__xRwwC .Footer_footer-tertiary__BPH_8 .Footer_copyright-wrapper__xjE5_ .Footer_copyright__HmTp2 .Footer_vertical-seperator__imgpZ {\n        display:none\n    }\n}\n\n.MobileMenu_mobile-menu-wrapper__lOrcy {\n    width: 75vw;\n    height: 100vh\n}\n\n.MobileMenu_mobile-menu-wrapper__lOrcy .MobileMenu_mobile-menu-container__dy7Jk {\n    height: 100%;\n    background: #040a1a;\n    z-index: 30\n}\n\n.MobileMenu_mobile-menu-wrapper__lOrcy .MobileMenu_mobile-menu-container__dy7Jk .MobileMenu_close-button__OZs7O {\n    height: -moz-fit-content;\n    height: fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-top: 2rem;\n    padding-right: 3rem;\n    margin-left: auto\n}\n\n.MobileMenu_mobile-menu-wrapper__lOrcy .MobileMenu_mobile-menu-container__dy7Jk .MobileMenu_links-container__b15EE {\n    margin-top: 2.1rem\n}\n\n.MobileMenu_mobile-menu-wrapper__lOrcy .MobileMenu_mobile-menu-container__dy7Jk .MobileMenu_links-container__b15EE .MobileMenu_primary-links__d3xTK,.MobileMenu_mobile-menu-wrapper__lOrcy .MobileMenu_mobile-menu-container__dy7Jk .MobileMenu_links-container__b15EE .MobileMenu_secondary-links__PNWn_ {\n    display: flex;\n    flex-direction: column-reverse\n}\n\n.MobileMenu_mobile-menu-wrapper__lOrcy .MobileMenu_mobile-menu-container__dy7Jk .MobileMenu_links-container__b15EE .MobileMenu_primary-links__d3xTK .MobileMenu_primary-link__Z_tPu,.MobileMenu_mobile-menu-wrapper__lOrcy .MobileMenu_mobile-menu-container__dy7Jk .MobileMenu_links-container__b15EE .MobileMenu_secondary-links__PNWn_ .MobileMenu_secondary-link__wtSWQ {\n    color: #fff;\n    font-weight: 600;\n    font-size: 2rem;\n    line-height: 1.6rem;\n    margin: 2rem 0;\n    text-align: center\n}\n\n.DownloadApp_wrapper__wzCu1 {\n    display: none\n}\n\n@media only screen and (max-width: 1023px) {\n    .DownloadApp_wrapper__wzCu1 {\n        display:unset\n    }\n}\n\n.DownloadApp_wrapper__wzCu1.DownloadApp_hidden__6Wl45 {\n    display: none\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ {\n    display: flex;\n    align-items: center;\n    padding: 1.2rem 1.6rem;\n    background: #f0f3ff\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ .DownloadApp_logo__lxwE0 {\n    display: flex;\n    align-items: center;\n    justify-content: center\n}\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_form-container__deD6R {\n    background: #eef2ff;\n    box-sizing: border-box;\n    width: 42.8rem;\n    position: relative;\n    padding: 4.4rem 4rem 4rem;\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ .DownloadApp_title-subtitle__Fx0R_ {\n    margin-left: 1.2rem\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ .DownloadApp_title-subtitle__Fx0R_ .DownloadApp_title__XuVs_ {\n    font-weight: 600;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    color: #333\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ .DownloadApp_title-subtitle__Fx0R_ .DownloadApp_sub-title__r0fL0 {\n    font-weight: 600;\n    font-size: 12px;\n    line-height: 16px;\n    color: #828282\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ .DownloadApp_download-button__ibtva {\n    margin-left: auto;\n    background-color: #2962ff;\n    padding: .8rem 1.2rem;\n    border-radius: 2.2rem;\n    font-family: inherit;\n    border: none;\n    font-weight: 600;\n    font-size: 1.2rem;\n    line-height: 1.6rem\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ .DownloadApp_download-button__ibtva a {\n    text-decoration: none;\n    color: #fff\n}\n\n.DownloadApp_wrapper__wzCu1 .DownloadApp_container__QTcDQ .DownloadApp_hide-button__mS1s3 {\n    background: none;\n    border: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: .4rem;\n    margin-left: .8rem\n}\n\n.Header_sticky-wrapper__nEs1S {\n    position: sticky;\n    top: 0;\n    width: 100%;\n    z-index: 110\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb {\n    background-color: #040a1a;\n    height: 6.4rem;\n    display: flex;\n    align-items: center\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ {\n    max-width: 150rem;\n    width: 100%;\n    margin-inline:auto;display: flex;\n    align-items: center;\n    justify-content: space-between\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_logo__edXik {\n    display: flex;\n    align-items: center;\n    margin-left: 12rem\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_logo__edXik :hover {\n    cursor: pointer\n}\n\n@media only screen and (max-width: 1023px) {\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_logo__edXik {\n        margin-left:2rem\n    }\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_primary-links-container__0Kzs8 {\n    display: flex;\n    align-items: center;\n    gap: 2.4rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_primary-links-container__0Kzs8 {\n        display:none\n    }\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_primary-links-container__0Kzs8 .Header_primary-link__HgwZ_ {\n    text-decoration: none;\n    color: #fff;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    font-weight: 600;\n    cursor: pointer\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_secondary-links-container__8lyaA {\n    display: flex;\n    align-items: center;\n    margin-right: 12rem;\n    gap: 2.4rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_secondary-links-container__8lyaA {\n        display:none\n    }\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_header-container__LS7u_ .Header_secondary-links-container__8lyaA .Header_secondary-link__boqSW {\n    text-decoration: none;\n    color: #fff;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    font-weight: 600;\n    cursor: pointer\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_menu-icon__5AGW5 {\n    display: none\n}\n\n@media only screen and (max-width: 1023px) {\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_menu-icon__5AGW5 {\n        display:flex;\n        align-items: center;\n        justify-content: center;\n        margin: 1.6rem\n    }\n}\n\n.Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_mobile-menu__Ap7DR {\n    display: none\n}\n\n@media only screen and (max-width: 1023px) {\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_mobile-menu__Ap7DR {\n        display:unset;\n        z-index: 110\n    }\n\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_mobile-menu-overlay__x7Tjm {\n        position: fixed;\n        display: block;\n        inset: 0;\n        background-color: rgba(0,0,0,.54)\n    }\n\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_mobile-menu-component__B9xBH {\n        position: fixed;\n        top: 0;\n        right: -75vw;\n        transition: right .1s ease-in-out\n    }\n\n    .Header_sticky-wrapper__nEs1S .Header_header-wrapper__uJrbb .Header_mobile-menu-component__B9xBH.Header_active__8kMBu {\n        right: 0\n    }\n}\n\n.Explore_explore-container__Xt_dL {\n    box-sizing: border-box;\n    width: 100%;\n    border: .05rem solid #2962ff;\n    border-radius: .8rem;\n    background: #fff;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1.5rem 1.6rem;\n    cursor: pointer\n}\n\n@media only screen and (max-width: 559px) {\n    .Explore_explore-container__Xt_dL {\n        padding:.9rem 1.6rem;\n        background: #eef2ff\n    }\n}\n\n.Explore_explore-container__Xt_dL .Explore_explore-text__cJKgd {\n    font-weight: 600;\n    font-size: 1.2rem;\n    line-height: 1.6rem;\n    color: #2962ff\n}\n\n.Explore_explore-container__Xt_dL .Explore_arrow__XaZgn {\n    display: flex;\n    align-items: center;\n    justify-content: center\n}\n\n.FormInput_container__eKd_P {\n    position: relative\n}\n\n.FormInput_container__eKd_P .FormInput_input-container__Tfl2q {\n    border: .0754808rem solid #ddd;\n    border-radius: .603846rem;\n    background-color: #fff;\n    box-sizing: border-box;\n    padding: 1.2rem 0\n}\n\n@media only screen and (max-width: 559px) {\n    .FormInput_container__eKd_P .FormInput_input-container__Tfl2q {\n        padding:.9rem 0\n    }\n}\n\n.FormInput_container__eKd_P .FormInput_input-container__Tfl2q .FormInput_label-required__A28E4,.FormInput_container__eKd_P .FormInput_input-container__Tfl2q .FormInput_label__rD1_n {\n    font-weight: 600;\n    font-size: 1.2rem;\n    line-height: 1.6rem;\n    color: #333;\n    padding-left: 1.9rem\n}\n\n.FormInput_container__eKd_P .FormInput_input-container__Tfl2q .FormInput_label-required__A28E4.FormInput_error__VpKzj,.FormInput_container__eKd_P .FormInput_input-container__Tfl2q .FormInput_label__rD1_n.FormInput_error__VpKzj {\n    color: #eb5757\n}\n\n@media only screen and (max-width: 559px) {\n    .FormInput_container__eKd_P .FormInput_input-container__Tfl2q .FormInput_label-required__A28E4,.FormInput_container__eKd_P .FormInput_input-container__Tfl2q .FormInput_label__rD1_n {\n        font-size:1rem;\n        line-height: 1.2rem;\n        padding-left: 1.4rem\n    }\n}\n\n.FormInput_container__eKd_P .FormInput_input-container__Tfl2q .FormInput_label-required__A28E4:after {\n    content: \"*\";\n    color: #eb5757;\n    padding-left: .2rem\n}\n\n.FormInput_container__eKd_P .FormInput_error-container__VaXZ9 {\n    position: absolute;\n    font-weight: 600;\n    font-size: 1rem;\n    line-height: 1.6rem;\n    color: #eb5757\n}\n\n.FormInput_submit__icI8k {\n    width: 100%;\n    border-radius: .8rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1.6rem;\n    box-sizing: border-box;\n    border: none\n}\n\n.FormInput_submit-enabled__qOriP {\n    background-color: #2962ff;\n    cursor: pointer\n}\n\n.FormInput_submit-disabled__FNs7m {\n    background-color: rgba(51,51,51,.24)\n}\n\n.FormInput_submit-disabled__FNs7m .FormInput_submit-text__LL1rf,.FormInput_submit-enabled__qOriP .FormInput_submit-text__LL1rf {\n    font-weight: 600;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: #fff;\n    font-family: Titillium Web,sans-serif\n}\n\n.FormInput_submit-disabled__FNs7m .FormInput_submit-arrow-icon__Zz3tC,.FormInput_submit-enabled__qOriP .FormInput_submit-arrow-icon__Zz3tC {\n    display: flex;\n    align-items: center;\n    justify-content: center\n}\n\n.CategorySelector_category-selector-container__AkuP2 {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    justify-content: center;\n    gap: 1.5rem;\n    margin-top: 1rem\n}\n\n@media only screen and (max-width: 559px) {\n    .CategorySelector_category-selector-container__AkuP2 {\n        margin-top:0\n    }\n}\n\n.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1.7rem 3.8rem;\n    box-sizing: border-box;\n    border: .1rem solid rgba(51,51,51,.16);\n    border-radius: .8rem;\n    background: #fff;\n    width: 100%;\n    cursor: pointer\n}\n\n@media only screen and (max-width: 559px) {\n    .CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 {\n        padding:.8rem 1.3rem\n    }\n}\n\n.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14:active,.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14:hover {\n    border-color: #2962ff;\n    transition: border-color .2s ease-in\n}\n\n.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14:active .CategorySelector_arrow-icon-svg__a0c_p,.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14:hover .CategorySelector_arrow-icon-svg__a0c_p {\n    fill: #2962ff;\n    transition: fill .2s ease-in,fill-opacity .2s ease-in;\n    fill-opacity: 1\n}\n\n.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 .CategorySelector_category-image-text__pVzl5 {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    margin-right: 4.6rem\n}\n\n@media only screen and (max-width: 559px) {\n    .CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 .CategorySelector_category-image-text__pVzl5 {\n        margin-right:2rem\n    }\n}\n\n.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 .CategorySelector_category-image-text__pVzl5 .CategorySelector_category-image__zlCOz {\n    display: flex;\n    align-items: center;\n    margin-right: 4.6rem;\n    height: 6rem\n}\n\n@media only screen and (max-width: 559px) {\n    .CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 .CategorySelector_category-image-text__pVzl5 .CategorySelector_category-image__zlCOz {\n        margin-right:-.2rem;\n        transform-origin: center left;\n        scale: 1;\n        height: 5.5rem\n    }\n}\n\n.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 .CategorySelector_category-image-text__pVzl5 .CategorySelector_category-text__cRRzz {\n    font-weight: 600;\n    font-size: 1.8rem;\n    line-height: 2.4rem;\n    color: #333;\n    margin-left: 0\n}\n\n@media only screen and (max-width: 559px) {\n    .CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 .CategorySelector_category-image-text__pVzl5 .CategorySelector_category-text__cRRzz {\n        font-size:1.5rem;\n        line-height: 1.8rem;\n        margin-left: 1rem\n    }\n}\n\n.CategorySelector_category-selector-container__AkuP2 .CategorySelector_category-select-container___vN14 .CategorySelector_arrow-icon__tOM2g {\n    display: flex;\n    align-items: center;\n    transform: rotate(-90deg)\n}\n\n.CategorySelector_change-category-container__Gd9aY {\n    width: 100%;\n    background-color: rgba(47,139,255,.12);\n    border-radius: .8rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1.2rem 1.6rem;\n    box-sizing: border-box\n}\n\n.CategorySelector_change-category-container__Gd9aY .CategorySelector_current-category-text__VzQeO {\n    font-weight: 600;\n    font-size: 1.5rem;\n    line-height: 2.4rem;\n    color: #333\n}\n\n.CategorySelector_change-category-container__Gd9aY .CategorySelector_change-button__a4G8g {\n    all: unset;\n    font-weight: 600;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    color: #2962ff;\n    cursor: pointer\n}\n\n.FareEstimateForms_component-wrapper__pYvyq {\n    height: 100%;\n    display: flex;\n    flex-direction: column\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_change-category__lkhUb {\n    margin-bottom: 1.6rem\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm {\n    display: flex;\n    flex-direction: column;\n    gap: 1.6rem;\n    height: 100%;\n    position: relative\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm input {\n    font-family: inherit;\n    display: block;\n    border: none;\n    outline: none;\n    line-height: 2.4rem;\n    font-size: 1.6rem;\n    text-overflow: ellipsis;\n    width: 100%;\n    background-color: #fff;\n    box-sizing: border-box\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm input::-moz-placeholder {\n    color: rgba(51,51,51,.24);\n    font-family: inherit\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm input:-ms-input-placeholder {\n    color: rgba(51,51,51,.24);\n    font-family: inherit\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm input::placeholder {\n    color: rgba(51,51,51,.24);\n    font-family: inherit\n}\n\n@media only screen and (max-width: 559px) {\n    .FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm input {\n        font-size:1.2rem;\n        line-height: 1.8rem\n    }\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_date-input-wrapper__DTV__,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_drop-input__r3Zzs,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_mobile-input__fOlJd,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_name-input__t8wkI,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_pickup-input__sSniG {\n    padding-inline:1.9rem}\n\n@media only screen and (max-width: 559px) {\n    .FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_date-input-wrapper__DTV__,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_drop-input__r3Zzs,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_mobile-input__fOlJd,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_name-input__t8wkI,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_pickup-input__sSniG {\n        padding-inline:1.4rem\n    }\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_drop-input__r3Zzs.FareEstimateForms_disabled__nZQF8,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_pickup-input__sSniG.FareEstimateForms_disabled__nZQF8 {\n    pointer-events: none\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_drop-input__r3Zzs+div .FareEstimateForms_dropdown-item__Jw9PJ,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_pickup-input__sSniG+div .FareEstimateForms_dropdown-item__Jw9PJ {\n    padding: .9rem 1.9rem;\n    cursor: pointer;\n    font-size: 1.1rem;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    border-bottom: .05rem solid #d3d3d3\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_drop-input__r3Zzs+div .FareEstimateForms_dropdown-item__Jw9PJ:hover,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_pickup-input__sSniG+div .FareEstimateForms_dropdown-item__Jw9PJ:hover {\n    cursor: pointer;\n    background-color: #f3f3f3\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_date-input-wrapper__DTV__ .FareEstimateForms_date-picker__6g5bG {\n    width: 100%\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_date-input-wrapper__DTV__ .FareEstimateForms_date-picker__6g5bG div[class~=MuiInput-underline]:after,.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_date-input-wrapper__DTV__ .FareEstimateForms_date-picker__6g5bG div[class~=MuiInput-underline]:before {\n    all: unset\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_date-input-wrapper__DTV__ .FareEstimateForms_date-picker__6g5bG input[class~=MuiInputBase-input] {\n    padding: 0;\n    height: unset\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_submit-container__gnwhh {\n    margin-top: auto\n}\n\n.FareEstimateForms_component-wrapper__pYvyq .FareEstimateForms_form-container__05MRm .FareEstimateForms_form-error-container__j3UdG {\n    position: absolute;\n    bottom: 0;\n    transform: translateY(100%);\n    font-weight: 600;\n    font-size: 1rem;\n    line-height: 1.6rem;\n    color: #eb5757\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ {\n    width: -moz-fit-content;\n    width: fit-content;\n    height: 71.9rem;\n    display: flex;\n    position: relative;\n    overflow: hidden;\n    border-radius: .8rem\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ {\n        width:100%;\n        height: -moz-fit-content;\n        height: fit-content;\n        flex-direction: column;\n        padding: 2.4rem 2.4rem 3.4rem;\n        box-sizing: border-box;\n        background: #f3f3f3;\n        border-radius: .8rem .8rem 0 0\n    }\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z {\n    padding: 5.6rem;\n    background-color: #fff;\n    width: 19.2rem\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z {\n        padding:0;\n        width: -moz-fit-content;\n        width: fit-content;\n        background-color: unset;\n        margin-bottom: 1.5rem\n    }\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_title__qq3il {\n    padding: 0;\n    font-weight: 600;\n    font-size: 4.8rem;\n    line-height: 6.4rem;\n    color: #333;\n    margin: 0 0 2.4rem;\n    display: block\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_title__qq3il {\n        display:none;\n        font-size: 1.8rem;\n        line-height: 2.8rem;\n        margin-bottom: 0\n    }\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_sub-title__w8hD_ {\n    margin: 0;\n    padding: 0;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: rgba(51,51,51,.64);\n    display: block\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_sub-title__w8hD_ {\n        display:none;\n        font-size: 1.4rem;\n        line-height: 2rem\n    }\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_title-mobile__WDoQ2 {\n    padding: 0;\n    font-weight: 600;\n    font-size: 4.8rem;\n    line-height: 6.4rem;\n    color: #333;\n    margin: 0 0 2.4rem;\n    display: none\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_title-mobile__WDoQ2 {\n        display:block;\n        font-size: 1.8rem;\n        line-height: 2.8rem;\n        margin-bottom: 0\n    }\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_sub-title-mobile__884Z6 {\n    margin: 0;\n    padding: 0;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: rgba(51,51,51,.64);\n    display: none\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_title-container__0h_2z .EstimateLayout_sub-title-mobile__884Z6 {\n        display:block;\n        font-size: 1.4rem;\n        line-height: 2rem\n    }\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_form-container__HPjJJ {\n    background: #eef2ff;\n    box-sizing: border-box;\n    width: 49.6rem;\n    position: relative;\n    padding: 6.4rem 4rem 4rem\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_form-container__HPjJJ {\n        background:unset;\n        width: 100%;\n        padding: 0\n    }\n}\n\n.EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_close-modal-button__l7xB0 {\n    all: unset;\n    cursor: pointer;\n    margin: 2.4rem;\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: flex\n}\n\n@media only screen and (max-width: 559px) {\n    .EstimateLayout_estimate-layout-container__3l4AJ .EstimateLayout_close-modal-button__l7xB0 {\n        margin:2.2rem 2.4rem\n    }\n}\n\n.LoadingSpinner_loading-wrapper__sfQEW {\n    width: 100%\n}\n\n.LoadingSpinner_loading-wrapper__sfQEW .LoadingSpinner_loading-ellipsis__eXNtX {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n    left: 50%;\n    transform: translateX(-50%)\n}\n\n.LoadingSpinner_loading-wrapper__sfQEW .LoadingSpinner_loading-ellipsis__eXNtX div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: rgba(51,51,51,.64);\n    animation-timing-function: cubic-bezier(0,1,1,0)\n}\n\n.LoadingSpinner_loading-wrapper__sfQEW .LoadingSpinner_loading-ellipsis__eXNtX div:first-child {\n    left: 8px;\n    animation: LoadingSpinner_loading-ellipsis1__Foglf .6s infinite\n}\n\n.LoadingSpinner_loading-wrapper__sfQEW .LoadingSpinner_loading-ellipsis__eXNtX div:nth-child(2) {\n    left: 8px;\n    animation: LoadingSpinner_loading-ellipsis2__AoWKS .6s infinite\n}\n\n.LoadingSpinner_loading-wrapper__sfQEW .LoadingSpinner_loading-ellipsis__eXNtX div:nth-child(3) {\n    left: 32px;\n    animation: LoadingSpinner_loading-ellipsis2__AoWKS .6s infinite\n}\n\n.LoadingSpinner_loading-wrapper__sfQEW .LoadingSpinner_loading-ellipsis__eXNtX div:nth-child(4) {\n    left: 56px;\n    animation: LoadingSpinner_loading-ellipsis3__tjQfc .6s infinite\n}\n\n@keyframes LoadingSpinner_loading-ellipsis1__Foglf {\n    0% {\n        transform: scale(0)\n    }\n\n    to {\n        transform: scale(1)\n    }\n}\n\n@keyframes LoadingSpinner_loading-ellipsis3__tjQfc {\n    0% {\n        transform: scale(1)\n    }\n\n    to {\n        transform: scale(0)\n    }\n}\n\n@keyframes LoadingSpinner_loading-ellipsis2__AoWKS {\n    0% {\n        transform: translate(0)\n    }\n\n    to {\n        transform: translate(24px)\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t {\n    padding: 1rem 0 0;\n    border: unset\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t {\n        padding:.8rem 0 0\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t {\n        border-top:1px solid #f2f2f2;\n        padding: 2rem\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN {\n    width: 100%;\n    margin: 1rem 0 0\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_error-box__VGUa0 div[class~=Mui-error] div[class~=MuiOutlinedInput-notchedOutline] {\n    border-color: #f44336\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_name__160io label {\n    font-size: 1.1rem;\n    transform: translate(1.4rem,1.6rem) scale(1)\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_name__160io label {\n        font-size:.9rem;\n        transform: translate(1.4rem,1.3rem) scale(1)\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_name__160io label {\n        font-size:1.1rem;\n        transform: translate(1.4rem,1.6rem) scale(1)\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_name__160io label[data-shrink=true] {\n    transform: translate(1.4rem,-.3rem) scale(.75)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_name__160io label[class~=Mui-error] {\n    color: rgba(0,0,0,.54)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_name__160io fieldset[class~=MuiOutlinedInput-notchedOutline] {\n    border-color: rgba(0,0,0,.23)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_mobile__B414b label {\n    font-size: 1.1rem;\n    background-color: #fff;\n    padding-right: .6rem;\n    transform: translate(1.4rem,1.6rem) scale(1)\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_mobile__B414b label {\n        font-size:.9rem;\n        transform: translate(1.4rem,1.3rem) scale(1)\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_mobile__B414b label {\n        font-size:1.1rem;\n        transform: translate(1.4rem,1.6rem) scale(1)\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_mobile__B414b label[data-shrink=true] {\n    transform: translate(1.4rem,-.3rem) scale(.75)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_mobile__B414b label[class~=Mui-error] {\n    color: rgba(0,0,0,.54)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_mobile__B414b fieldset[class~=MuiOutlinedInput-notchedOutline] {\n    border-color: rgba(0,0,0,.23)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_mobile__B414b div[class~=text-input-adornment] {\n    display: flex;\n    align-items: center;\n    font-family: Titillium Web;\n    width: 5rem\n}\n\n@media only screen and (min-width: 560px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_city__Wv8ug {\n        width:50%\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_city__Wv8ug label {\n    padding: .3rem .5rem;\n    background-color: #fff;\n    font-size: 1.1rem;\n    transform: translate(1.4rem,1.6rem) scale(1)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_city__Wv8ug label[data-shrink=true] {\n    transform: translate(1.4rem,-.6rem) scale(.75)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_city__Wv8ug div[class~=MuiOutlinedInput-root] {\n    border-radius: 2px;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_city__Wv8ug div[class~=MuiOutlinedInput-root] {\n        height:3.8rem\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_city__Wv8ug div[class~=MuiOutlinedInput-root] {\n        height:4.4rem\n    }\n}\n\n@media only screen and (min-width: 560px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT {\n        margin-left:.6rem;\n        width: 48%\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT label {\n    padding: .3rem .5rem;\n    background-color: #fff;\n    font-size: 1.1rem;\n    transform: translate(1.4rem,1.4rem) scale(1)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT label[data-shrink=true] {\n    transform: translate(1.4rem,-.6rem) scale(.75)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT div[class~=MuiOutlinedInput-root] {\n    border-radius: 2px;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT div[class~=MuiOutlinedInput-root] {\n        height:3.8rem\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT div[class~=MuiOutlinedInput-root] {\n        height:4.4rem\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_info-source__rqLc3 label {\n    padding: .3rem .5rem;\n    background-color: #fff;\n    font-size: 1.1rem;\n    transform: translate(1.4rem,1.4rem) scale(1)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_info-source__rqLc3 label[data-shrink=true] {\n    transform: translate(1.4rem,-.6rem) scale(.75)\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_info-source__rqLc3 div[class~=MuiOutlinedInput-root] {\n    border-radius: 2px;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_info-source__rqLc3 div[class~=MuiOutlinedInput-root] {\n        height:3.8rem\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN.PartnersForm_info-source__rqLc3 div[class~=MuiOutlinedInput-root] {\n        height:4.4rem\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN .PartnersForm_form-input-text__KXgf2 {\n    background: #fff;\n    border-radius: 2px;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN .PartnersForm_form-input-text__KXgf2 {\n        height:3.8rem\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN .PartnersForm_form-input-text__KXgf2 {\n        height:4.4rem\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN div[class~=form-input-select] {\n    width: 100%;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN div[class~=form-input-select] {\n        height:3.8rem\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-input__mvnHN div[class~=form-input-select] {\n        height:4.4rem\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t div[class~=form-input] {\n    width: 100%;\n    margin: 0\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t div[class~=input-error-container] {\n    height: 1.5rem;\n    font-size: 1.2rem;\n    font-family: inherit;\n    min-height: 1.2rem;\n    margin-top: .2em;\n    margin-bottom: .2em;\n    font-style: normal;\n    font-weight: 400\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t div[class~=input-error-container] {\n        height:1rem;\n        min-height: 1rem;\n        font-size: 1rem\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t div[class~=input-error-container] {\n        min-height:1.8rem;\n        font-size: 1.2rem;\n        margin: .2rem 0\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t div[class~=input-error-container] div[class~=error] {\n    color: #eb5757;\n    display: flex;\n    align-items: center\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_same-row-fields__BiimE {\n    display: flex\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_same-row-fields__BiimE {\n        flex-direction:column\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t div[class~=form-input-text] {\n    background: #fff;\n    border-radius: 2px;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t div[class~=form-input-text] {\n        height:3.8rem\n    }\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersForm_attach-vehicle-form__AIc3t div[class~=form-input-text] {\n        height:4.4rem\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-button__51aip {\n    border: none;\n    border-radius: 2px;\n    background-color: #2962ff!important;\n    color: #fff!important;\n    width: 100%;\n    height: auto;\n    font-size: 1.6rem!important;\n    font-family: inherit;\n    line-height: 100%;\n    padding: 1.6rem 0!important;\n    font-weight: 700;\n    box-shadow: 0 0 2px 0 rgba(0,0,0,.5);\n    margin-top: .8rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-button__51aip {\n        font-size:1.4rem!important;\n        padding: 1.4rem 0!important\n    }\n}\n\n.PartnersForm_attach-vehicle-form__AIc3t .PartnersForm_modal-form-button__51aip.PartnersForm_request-btn__TmlCY {\n    cursor: pointer\n}\n\n@media only screen and (min-width: 560px) {\n    .PartnersForm_click-handler__7RMSD {\n        margin-left:.6rem;\n        width: 48%\n    }\n\n    .PartnersForm_click-handler__7RMSD .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT {\n        margin-left: 0;\n        width: 100%\n    }\n}\n\n.PartnersForm_click-handler__7RMSD .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT label {\n    padding: .3rem .5rem;\n    background-color: #fff;\n    font-size: 1.1rem;\n    transform: translate(1.4rem,1.4rem) scale(1)\n}\n\n.PartnersForm_click-handler__7RMSD .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT label[data-shrink=true] {\n    transform: translate(1.4rem,-.6rem) scale(.75)\n}\n\n.PartnersForm_click-handler__7RMSD .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT div[class~=MuiOutlinedInput-root] {\n    border-radius: 2px;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 867px) {\n    .PartnersForm_click-handler__7RMSD .PartnersForm_modal-form-input__mvnHN.PartnersForm_vehicle__EfvMT div[class~=MuiOutlinedInput-root] {\n        height:3.8rem\n    }\n}\n\n.FareEstimateModal_overlay__Un1KE {\n    background-color: rgba(0,0,0,.38);\n    position: fixed;\n    inset: 0;\n    display: flex;\n    overflow: auto\n}\n\n.FareEstimateModal_overlay__Un1KE .FareEstimateModal_modal-container__B7RS9 {\n    padding: 0;\n    margin: auto;\n    width: -moz-fit-content;\n    width: fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    outline: none\n}\n\n@media only screen and (max-width: 559px) {\n    .FareEstimateModal_overlay__Un1KE .FareEstimateModal_modal-container__B7RS9 {\n        width:100%;\n        position: absolute;\n        bottom: 0\n    }\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb {\n    text-align: center;\n    padding: 0;\n    height: -webkit-fill-available;\n    justify-content: space-evenly\n}\n\n@media only screen and (max-width: 559px) {\n    .PartnersFormAck_modal-container-ack__DjSZb {\n        padding:2.8rem\n    }\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb.PartnersFormAck_flex-col-align-center__oDp_9 {\n    display: flex;\n    flex-direction: column;\n    align-items: center\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb.PartnersFormAck_flex-col-align-center__oDp_9 .PartnersFormAck_ack__XsSR4 {\n    padding: 2rem\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb.PartnersFormAck_flex-col-align-center__oDp_9 .PartnersFormAck_ack__XsSR4.PartnersFormAck_msg__nEI8N {\n    font-size: 2.4rem\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb.PartnersFormAck_flex-col-align-center__oDp_9 .PartnersFormAck_ack__XsSR4.PartnersFormAck_name__LzZBX {\n    font-size: 2.2rem;\n    font-weight: 700;\n    color: #212121\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb.PartnersFormAck_flex-col-align-center__oDp_9 .PartnersFormAck_ack__XsSR4.PartnersFormAck_desc__x1ojP {\n    font-size: 2rem\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb.PartnersFormAck_flex-col-align-center__oDp_9 .PartnersFormAck_bold-txt-btn__WSzRz {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 2px;\n    box-shadow: 0 0 2px 0 rgba(0,0,0,.5);\n    font-weight: 700;\n    text-decoration: none;\n    cursor: pointer\n}\n\n.PartnersFormAck_modal-container-ack__DjSZb.PartnersFormAck_flex-col-align-center__oDp_9 .PartnersFormAck_bold-txt-btn__WSzRz.PartnersFormAck_request-button__s4gq0 {\n    width: 50%;\n    min-width: 20rem;\n    background: #fff;\n    color: #2962ff;\n    border: 1px solid #2962ff;\n    text-transform: uppercase;\n    font-size: 1.6rem;\n    padding: 1rem;\n    margin: 3rem 0\n}\n\n.VehicleCapacity_vehicle-capacity-container__X1gyj {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    background-color: #ebf4ff;\n    border-radius: .6rem;\n    padding: .2rem .4rem\n}\n\n@media only screen and (max-width: 767px) {\n    .VehicleCapacity_vehicle-capacity-container__X1gyj {\n        border-radius:.4rem\n    }\n}\n\n.VehicleCapacity_vehicle-capacity-container__X1gyj .VehicleCapacity_vehicle-capacity-image-wrapper__TTxaY {\n    margin: auto 0;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center\n}\n\n.VehicleCapacity_vehicle-capacity-container__X1gyj .VehicleCapacity_vehicle-capacity__asClv {\n    font-weight: 600;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: #333;\n    margin: 0 0 0 .3rem\n}\n\n@media only screen and (max-width: 767px) {\n    .VehicleCapacity_vehicle-capacity-container__X1gyj .VehicleCapacity_vehicle-capacity__asClv {\n        font-size:1.4rem;\n        line-height: 2rem;\n        margin: 0 0 0 .1rem\n    }\n}\n\n.AttachVehicleModal_attach-vehicle-modal__XIuW_ {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%,-50%);\n    width: 90%;\n    min-width: 30rem;\n    max-width: 360px;\n    background-color: #fff;\n    box-shadow: 0 24px 38px 0 rgba(0,0,0,.08);\n    border-radius: 2px\n}\n\n.AttachVehicleModal_attach-vehicle-modal__XIuW_:focus {\n    outline: none\n}\n\n.AttachVehicleModal_attach-vehicle-modal__XIuW_ .AttachVehicleModal_modal-container__qv1tQ {\n    position: relative;\n    min-height: 30rem\n}\n\n.AttachVehicleModal_attach-vehicle-modal__XIuW_ .AttachVehicleModal_modal-container__qv1tQ .AttachVehicleModal_attach-form-container__1jRzZ {\n    background-color: #fff\n}\n\n.AttachVehicleModal_attach-vehicle-modal__XIuW_ .AttachVehicleModal_modal-container__qv1tQ .AttachVehicleModal_modal-titlebar__XV_7o {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 16px\n}\n\n.AttachVehicleModal_attach-vehicle-modal__XIuW_ .AttachVehicleModal_modal-container__qv1tQ .AttachVehicleModal_modal-titlebar__XV_7o .AttachVehicleModal_title__sx_6H {\n    font-size: 1.6rem;\n    line-height: 140%\n}\n\n.AttachVehicleModal_attach-vehicle-modal__XIuW_ .AttachVehicleModal_modal-container__qv1tQ .AttachVehicleModal_ack-close-btn__3BxgE {\n    position: absolute;\n    right: 2rem;\n    top: 2rem\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    box-shadow: 0 24px 38px 0 rgba(0,0,0,.08);\n    z-index: 110\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2:focus {\n    outline: none\n}\n\n@media only screen and (min-width: 560px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 {\n        width:auto;\n        top: 55%;\n        bottom: auto;\n        left: 50%;\n        transform: translate(-50%,-55%)\n    }\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc {\n    position: relative;\n    padding: 1.7rem 1rem .5rem;\n    width: 81rem;\n    border-radius: .8rem;\n    background-color: #fff\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc {\n        width:100%;\n        height: 64rem;\n        overflow-y: scroll;\n        padding: 2.4rem;\n        box-sizing: border-box;\n        border-radius: .8rem .8rem 0 0\n    }\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL {\n    margin-inline:auto;margin-bottom: .5rem;\n    text-align: center\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL {\n        position:relative;\n        width: 100%;\n        margin-bottom: 1.6rem;\n        text-align: start\n    }\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL .CitySelectorModal_close-button__9OQAO {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: .5rem;\n    margin-right: 3.7rem;\n    margin-top: 2.9rem;\n    cursor: pointer\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL .CitySelectorModal_close-button__9OQAO {\n        margin:0\n    }\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL .CitySelectorModal_title__tHhus {\n    font-size: 4rem;\n    line-height: 5.6rem;\n    font-weight: 600\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL .CitySelectorModal_title__tHhus {\n        font-size:2rem;\n        line-height: 2.8rem\n    }\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL .CitySelectorModal_sub-title__iGMuh {\n    font-size: 2rem;\n    line-height: 2.8rem;\n    font-weight: 400;\n    color: rgba(51,51,51,.64)\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_header-container__wNnhL .CitySelectorModal_sub-title__iGMuh {\n        font-size:1.4rem;\n        line-height: 2rem\n    }\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container__0xaxG {\n    margin: 1.2rem;\n    padding: 1rem;\n    cursor: pointer;\n    transition: .3s\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container-selected__bthle {\n    border: .2rem solid #006ef5;\n    border-radius: .6rem\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container__0xaxG {\n        margin:0;\n        padding: .6rem .2rem;\n        margin-block:.8rem}\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container__0xaxG .CitySelectorModal_city-image__EiBDS {\n    margin-inline:auto;width: 8rem;\n    height: 8rem;\n    border-radius: .8rem;\n    overflow: hidden;\n    margin-bottom: .8rem\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container__0xaxG .CitySelectorModal_city-image__EiBDS {\n        width:5.6rem;\n        height: 5.6rem;\n        margin-bottom: .4rem\n    }\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container__0xaxG .CitySelectorModal_city-title__CVXw1 {\n    text-align: center;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    font-weight: 600\n}\n\n@media only screen and (max-width: 559px) {\n    .CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container__0xaxG .CitySelectorModal_city-title__CVXw1 {\n        width:7.2rem;\n        font-size: 1.4rem;\n        line-height: 2rem;\n        margin-inline:auto}\n}\n\n.CitySelectorModal_city-picker-modal__CYR_2 .CitySelectorModal_container__QQUkc .CitySelectorModal_cities-list-container__vJBuF .CitySelectorModal_city-container__0xaxG:hover {\n    transform: scale(1.05)\n}\n\n.VehicleDetails_title-container__KoZSb {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-items: flex-start;\n    padding: 5.6rem;\n    background-color: #fff;\n    width: 36rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb {\n        padding:0;\n        width: 100%;\n        background-color: unset;\n        margin-bottom: .8rem\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq {\n        display:flex;\n        flex-direction: row;\n        justify-content: flex-start;\n        margin-bottom: 2rem\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-image__jxN3a {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-weight-desktop__Owqfe {\n    margin-top: 2rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-weight-desktop__Owqfe {\n        display:none\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd {\n    margin-top: .5rem;\n    margin-bottom: 2rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd {\n        display:flex;\n        flex-direction: column;\n        justify-content: center;\n        margin: 0 0 0 2rem\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd .VehicleDetails_vehicle-name__TwMXA {\n    font-weight: 600;\n    font-size: 2.4rem;\n    line-height: 3.2rem;\n    color: #2d2f34;\n    margin: 0;\n    text-align: center\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd .VehicleDetails_vehicle-name__TwMXA {\n        text-align:left;\n        font-size: 1.4rem;\n        line-height: 2rem\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd .VehicleDetails_vehicle-fare__Tt8Cl p {\n    font-weight: 400;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: #2d2f34;\n    margin: .1rem 0 0;\n    text-align: center\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd .VehicleDetails_vehicle-fare__Tt8Cl p {\n        text-align:left;\n        font-size: 1.2rem;\n        line-height: 1.6rem;\n        margin: .4rem 0 0\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd .VehicleDetails_vehicle-weight-mobile__rA9ML {\n    display: none;\n    margin-top: 2rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_vehicle__5XxLq .VehicleDetails_vehicle-text__5sEtd .VehicleDetails_vehicle-weight-mobile__rA9ML {\n        display:block;\n        margin-top: .8rem;\n        width: -moz-fit-content;\n        width: fit-content\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_divider__4Ch7T {\n    width: 100%;\n    border-bottom: .1rem solid rgba(78,82,91,.12)\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS {\n    margin-top: 1.8rem;\n    width: 100%\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-section-title__ryt2g {\n    margin: 0;\n    font-weight: 600;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    color: #2d2f34\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-wrapper__ZntQf {\n    margin-top: .8rem;\n    display: grid;\n    grid-template-columns: repeat(1,1fr);\n    width: 100%;\n    align-items: center\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-wrapper__ZntQf {\n        grid-template-columns:repeat(2,1fr)\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-wrapper__ZntQf .VehicleDetails_best-for__8_39F {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 1.2rem\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-wrapper__ZntQf .VehicleDetails_best-for__8_39F .VehicleDetails_best-for-image__ZsSkM {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_best-for-section-wrapper__bm_LS .VehicleDetails_best-for-wrapper__ZntQf .VehicleDetails_best-for__8_39F .VehicleDetails_best-for-title__R14mh {\n    margin: 0 0 0 .8rem;\n    font-weight: 400;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    color: #2d2f34;\n    text-align: left;\n    width: 100%\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_divider-mobile__9GSbM {\n    display: none\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_divider-mobile__9GSbM {\n        display:block;\n        width: 100%;\n        border-bottom: .1rem solid rgba(78,82,91,.12)\n    }\n}\n\n.VehicleDetails_title-container__KoZSb .VehicleDetails_title-mobile__0_qDh {\n    display: none\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleDetails_title-container__KoZSb .VehicleDetails_title-mobile__0_qDh {\n        display:block;\n        text-align: left;\n        width: 100%;\n        margin: 2rem 0 0\n    }\n}\n\n@media only screen and (max-width: 1023px) {\n    .VehicleFareEstimateInput_container__ve1CJ {\n        width:100%\n    }\n}\n\n.VehicleFareEstimateInput_container__ve1CJ .VehicleFareEstimateInput_input-container__c_LeO {\n    background-color: #fff;\n    padding: 1.2rem 0;\n    width: 18rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .VehicleFareEstimateInput_container__ve1CJ .VehicleFareEstimateInput_input-container__c_LeO {\n        padding:.9rem 0;\n        width: 100%;\n        border: .07rem solid #ddd;\n        border-radius: .6rem\n    }\n}\n\n.VehicleFareEstimateInput_container__ve1CJ .VehicleFareEstimateInput_input-container__c_LeO .VehicleFareEstimateInput_label-required__7c_BR,.VehicleFareEstimateInput_container__ve1CJ .VehicleFareEstimateInput_input-container__c_LeO .VehicleFareEstimateInput_label__nM4lw {\n    font-weight: 600;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    color: #2d2f34;\n    padding-left: 2rem\n}\n\n.VehicleFareEstimateInput_container__ve1CJ .VehicleFareEstimateInput_input-container__c_LeO .VehicleFareEstimateInput_label-required__7c_BR:after {\n    content: \"*\";\n    color: #eb5757;\n    padding-left: .2rem\n}\n\n.VehicleFareEstimateInput_container__ve1CJ .VehicleFareEstimateInput_error-container__wkck8 {\n    position: absolute;\n    font-weight: 600;\n    font-size: 1rem;\n    line-height: 1.6rem;\n    color: #eb5757;\n    margin: 0 2rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .VehicleFareEstimateInput_container__ve1CJ .VehicleFareEstimateInput_error-container__wkck8 {\n        margin:0\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 {\n    width: -moz-fit-content;\n    width: fit-content;\n    height: 60rem;\n    display: flex;\n    position: relative;\n    overflow: hidden;\n    border-radius: .8rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 {\n        width:100%;\n        height: -moz-fit-content;\n        height: fit-content;\n        flex-direction: column;\n        padding: 2.4rem;\n        box-sizing: border-box;\n        background: #fcfcfc;\n        border-radius: .8rem .8rem 0 0;\n        overflow-y: auto\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x {\n    padding: 5.6rem;\n    background-color: #fff;\n    width: 22.4rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x {\n        padding:0;\n        width: -moz-fit-content;\n        width: fit-content;\n        background-color: unset;\n        margin-bottom: 1.5rem\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_title__6Mx3f {\n    padding: 0;\n    font-weight: 600;\n    font-size: 4.8rem;\n    line-height: 6.4rem;\n    color: #333;\n    margin: 0 0 2.4rem;\n    display: block\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_title__6Mx3f {\n        display:none;\n        font-size: 1.8rem;\n        line-height: 2.8rem;\n        margin-bottom: 0\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_sub-title__0_BHK {\n    margin: 0;\n    padding: 0;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: rgba(51,51,51,.64);\n    display: block\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_sub-title__0_BHK {\n        display:none;\n        font-size: 1.4rem;\n        line-height: 2rem\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_title-mobile__fnDsZ {\n    padding: 0;\n    font-weight: 600;\n    font-size: 4.8rem;\n    line-height: 6.4rem;\n    color: #333;\n    margin: 0 0 2.4rem;\n    display: none\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_title-mobile__fnDsZ {\n        display:block;\n        font-size: 1.8rem;\n        line-height: 2.8rem;\n        margin-bottom: 0\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_sub-title-mobile__Pfdz7 {\n    margin: 0;\n    padding: 0;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    color: rgba(51,51,51,.64);\n    display: none\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_title-container__WIa4x .VehicleModalLayout_sub-title-mobile__Pfdz7 {\n        display:block;\n        font-size: 1.4rem;\n        line-height: 2rem\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_form-container__deD6R {\n    background: #eef2ff;\n    box-sizing: border-box;\n    width: 42.8rem;\n    position: relative;\n    padding: 4.4rem 4rem 4rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_form-container__deD6R {\n        background:unset;\n        width: 100%;\n        padding: 0\n    }\n}\n\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_close-modal-button__kTebR {\n    all: unset;\n    cursor: pointer;\n    margin: 2.4rem;\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: flex\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_close-modal-button__kTebR {\n        margin-top:2.5rem;\n        margin-right: 1.9rem\n    }\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd {\n    padding: 3.2rem 2.4rem;\n    border-top: .025rem solid rgba(78,82,91,.36);\n    border-radius: 0 .8rem .8rem .8rem;\n    filter: drop-shadow(0 .4rem 1.6rem rgba(0,0,0,.08));\n    background-color: #fff;\n    width: -moz-fit-content;\n    width: fit-content\n}\n\n@media only screen and (max-width: 1023px) {\n    .VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd {\n        filter:none;\n        background-color: transparent;\n        background-color: initial;\n        padding: 0;\n        width: auto\n    }\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_modal-title__Bp6M3 {\n    display: none\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center\n}\n\n@media only screen and (max-width: 1023px) {\n    .VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj {\n        display:flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        gap: 1.8rem\n    }\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj .VehicleFareEstimateForm_divider__lp0JR {\n    display: block;\n    border: none;\n    border-left: .1rem solid #ddd;\n    height: 5.6rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj .VehicleFareEstimateForm_divider__lp0JR {\n        display:none\n    }\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj input {\n    border: none;\n    outline: none;\n    font-family: inherit;\n    line-height: 1.8rem;\n    font-size: 1.2rem;\n    font-weight: 400;\n    text-overflow: ellipsis;\n    width: 80%;\n    background-color: #fff;\n    margin: .2rem 1.9rem;\n    padding: 0\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj input::-moz-placeholder {\n    color: rgba(51,51,51,.412);\n    font-family: inherit\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj input:-ms-input-placeholder {\n    color: rgba(51,51,51,.412);\n    font-family: inherit\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj input::placeholder {\n    color: rgba(51,51,51,.412);\n    font-family: inherit\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj .VehicleFareEstimateForm_submit-button-wrapper__6w1k2 .VehicleFareEstimateForm_submit-container__nsP72 {\n    width: 22rem;\n    height: 4.4rem\n}\n\n@media only screen and (max-width: 1023px) {\n    .VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj .VehicleFareEstimateForm_submit-button-wrapper__6w1k2 .VehicleFareEstimateForm_submit-container__nsP72 {\n        width:100%;\n        height: 5.6rem\n    }\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form__kCwDj .VehicleFareEstimateForm_submit-button-wrapper__6w1k2 .VehicleFareEstimateForm_submit-button-error__fluro {\n    position: absolute;\n    bottom: 1.5rem;\n    color: #eb5757;\n    font-weight: 600;\n    font-size: 1rem;\n    line-height: 1.6rem\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_fare-estimate-form-loader__2imIz {\n    width: 94.3rem;\n    height: 6.6rem\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_drop-input__f7RVx+div .VehicleFareEstimateForm_dropdown-item__SWVlc,.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_pickup-input__zZvaq+div .VehicleFareEstimateForm_dropdown-item__SWVlc {\n    padding: .9rem 1.9rem;\n    cursor: pointer;\n    font-size: 1.1rem;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    border-bottom: .05rem solid #d3d3d3\n}\n\n.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_drop-input__f7RVx+div .VehicleFareEstimateForm_dropdown-item__SWVlc:hover,.VehicleFareEstimateForm_vehicle-fare-estimate-container__2IZXd .VehicleFareEstimateForm_pickup-input__zZvaq+div .VehicleFareEstimateForm_dropdown-item__SWVlc:hover {\n    cursor: pointer;\n    background-color: #f3f3f3\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk {\n    padding: 0;\n    margin: 0 auto;\n    height: -moz-max-content;\n    height: max-content\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk {\n        padding:0\n    }\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_modal-title__3rSMj {\n    font-weight: 600;\n    font-size: 2.4rem;\n    line-height: 3.2rem;\n    margin: 0;\n    color: #2d2f34\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_modal-title__3rSMj {\n        display:none\n    }\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 1.6rem;\n    margin-top: 1.2rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz {\n        margin-top:0;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        gap: 1.8rem\n    }\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz .VehicleFareEstimateFormModal_divider__MhYty {\n    display: none\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz input {\n    border: none;\n    outline: none;\n    font-family: inherit;\n    line-height: 2.4rem;\n    font-size: 1.6rem;\n    font-weight: 400;\n    text-overflow: ellipsis;\n    width: 90%;\n    background-color: #fff;\n    margin: .2rem 1.9rem 0;\n    padding: 0\n}\n.VehicleModalLayout_estimate-layout-container__opyh2 .VehicleModalLayout_form-container__deD6R {\n    background: #eef2ff;\n    box-sizing: border-box;\n    width: 42.8rem;\n    position: relative;\n    padding: 4.4rem 4rem 4rem;\n}\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz input {\n        font-size:1.2rem;\n        line-height: 1.8rem;\n        margin: .2rem 1.4rem 0\n    }\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz input::-moz-placeholder {\n    color: rgba(51,51,51,.412);\n    font-family: inherit\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz input:-ms-input-placeholder {\n    color: rgba(51,51,51,.412);\n    font-family: inherit\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz input::placeholder {\n    color: rgba(51,51,51,.412);\n    font-family: inherit\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz .VehicleFareEstimateFormModal_submit-button-wrapper__wXj81 {\n    position: relative;\n    top: 9rem;\n    width: 100%\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz .VehicleFareEstimateFormModal_submit-button-wrapper__wXj81 {\n        position:static;\n        width: 100%\n    }\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz .VehicleFareEstimateFormModal_submit-button-wrapper__wXj81 .VehicleFareEstimateFormModal_submit-container__qL_IG {\n    height: 5.6rem\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_fare-estimate-form__MTntz .VehicleFareEstimateFormModal_submit-button-wrapper__wXj81 .VehicleFareEstimateFormModal_submit-button-error__e9IDo {\n    position: absolute;\n    bottom: -1.7rem;\n    color: #eb5757;\n    font-weight: 600;\n    font-size: 1rem;\n    line-height: 1.6rem\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_drop-input__BjYO5+div .VehicleFareEstimateFormModal_dropdown-item__dxA4c,.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_pickup-input__NRKfU+div .VehicleFareEstimateFormModal_dropdown-item__dxA4c {\n    padding: .9rem 1.9rem;\n    cursor: pointer;\n    font-size: 1.1rem;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    border-bottom: .05rem solid #d3d3d3;\n    width: 100%\n}\n\n.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_drop-input__BjYO5+div .VehicleFareEstimateFormModal_dropdown-item__dxA4c:hover,.VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk .VehicleFareEstimateFormModal_pickup-input__NRKfU+div .VehicleFareEstimateFormModal_dropdown-item__dxA4c:hover {\n    cursor: pointer;\n    background-color: #f3f3f3\n}\n\n.VehicleFareEstimateInputModal_container__OQtPn {\n    width: 100%\n}\n\n.VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_input-container__qWzOQ {\n    background-color: #fff;\n    padding: .975rem 0;\n    border: .1rem solid #ddd;\n    border-radius: .8rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_input-container__qWzOQ {\n        padding:.9rem 0;\n        width: 100%;\n        border: .07rem solid #ddd;\n        border-radius: .6rem\n    }\n}\n\n.VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_input-container__qWzOQ .VehicleFareEstimateInputModal_label-required__lAQ8d,.VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_input-container__qWzOQ .VehicleFareEstimateInputModal_label__MyfNR {\n    font-weight: 600;\n    font-size: 1.2rem;\n    line-height: 1.6rem;\n    color: #2d2f34;\n    padding-left: 2rem\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_input-container__qWzOQ .VehicleFareEstimateInputModal_label-required__lAQ8d,.VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_input-container__qWzOQ .VehicleFareEstimateInputModal_label__MyfNR {\n        font-size:1rem;\n        line-height: 1.2rem;\n        padding-left: 1.4rem\n    }\n}\n\n.VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_input-container__qWzOQ .VehicleFareEstimateInputModal_label-required__lAQ8d:after {\n    content: \"*\";\n    color: #eb5757;\n    padding-left: .2rem\n}\n\n.VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_error-container__ATPh2 {\n    position: absolute;\n    font-weight: 600;\n    font-size: 1rem;\n    line-height: 1.6rem;\n    color: #eb5757;\n    margin: 0\n}\n\n@media only screen and (max-width: 559px) {\n    .VehicleFareEstimateInputModal_container__OQtPn .VehicleFareEstimateInputModal_error-container__ATPh2 {\n        margin:0\n    }\n}\n\n  </style>\n<div class=\"ReactModal__Content ReactModal__Content--after-open FareEstimateModal_modal-container__B7RS9\" tabindex=\"-1\" role=\"dialog\" aria-modal=\"true\"><div class=\"VehicleModalLayout_estimate-layout-container__opyh2\"><section class=\"VehicleDetails_title-container__KoZSb\"><div class=\"VehicleDetails_vehicle__5XxLq\"><div class=\"VehicleDetails_vehicle-image__jxN3a\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27226%27%20height=%27140%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"Two-wheelers\" srcset=\"https://d3apkeya39jz4k.cloudfront.net/2_wheeler_5624a12e03.svg 1x, https://d3apkeya39jz4k.cloudfront.net/2_wheeler_5624a12e03.svg 2x\" src=\"https://d3apkeya39jz4k.cloudfront.net/2_wheeler_5624a12e03.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></div><div class=\"VehicleDetails_vehicle-weight-desktop__Owqfe\"><div class=\"VehicleCapacity_vehicle-capacity-container__X1gyj\"><div class=\"VehicleCapacity_vehicle-capacity-image-wrapper__TTxaY\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2716%27%20height=%2716%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"Vehicle Capacity Icon\" srcset=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/fare-estimate-result/weight.svg 1x, https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/fare-estimate-result/weight.svg 2x\" src=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/fare-estimate-result/weight.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></div><p class=\"VehicleCapacity_vehicle-capacity__asClv\">20 kg</p></div></div><div class=\"VehicleDetails_vehicle-text__5sEtd\"><h3 class=\"VehicleDetails_vehicle-name__TwMXA\">2 Wheeler</h3><div class=\"VehicleDetails_vehicle-fare__Tt8Cl\"><p>Starting from <strong>₹48</strong></p></div><div class=\"VehicleDetails_vehicle-weight-mobile__rA9ML\"><div class=\"VehicleCapacity_vehicle-capacity-container__X1gyj\"><div class=\"VehicleCapacity_vehicle-capacity-image-wrapper__TTxaY\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2716%27%20height=%2716%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"Vehicle Capacity Icon\" srcset=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/fare-estimate-result/weight.svg 1x, https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/fare-estimate-result/weight.svg 2x\" src=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/fare-estimate-result/weight.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></div><p class=\"VehicleCapacity_vehicle-capacity__asClv\">20 kg</p></div></div></div></div><div class=\"VehicleDetails_divider-mobile__9GSbM\"></div><h2 class=\"VehicleDetails_title-mobile__0_qDh\">Your Quick Quote</h2></section><section class=\"VehicleModalLayout_form-container__deD6R\"><div class=\"VehicleFareEstimateFormModal_vehicle-fare-estimate-container__Af4Yk\"><h2 class=\"VehicleFareEstimateFormModal_modal-title__3rSMj\">Get an Estimate</h2><form class=\"VehicleFareEstimateFormModal_fare-estimate-form__MTntz\"><div class=\"VehicleFareEstimateInputModal_container__OQtPn\"><div class=\"VehicleFareEstimateInputModal_input-container__qWzOQ\"><label class=\"VehicleFareEstimateInputModal_label-required__lAQ8d \n            \" for=\"Pickup Location\">Pickup Location</label><div style=\"display: block; position: relative;\"><input placeholder=\"enter pick up location\" id=\"custom-autocomplete-pickup-address-0.7059403965606885\" class=\"VehicleFareEstimateFormModal_pickup-input__NRKfU \" role=\"combobox\" aria-autocomplete=\"list\" aria-expanded=\"false\" autocomplete=\"off\" value=\"\" onfocus=\"this.setAttribute('autocomplete', 'chrome-off' );\"></div></div></div><div class=\"VehicleFareEstimateFormModal_divider__MhYty\"></div><div class=\"VehicleFareEstimateInputModal_container__OQtPn\"><div class=\"VehicleFareEstimateInputModal_input-container__qWzOQ\"><label class=\"VehicleFareEstimateInputModal_label-required__lAQ8d \n            \" for=\"Drop Location\">Drop Location</label><div style=\"display: block; position: relative;\"><input placeholder=\"enter drop location\" id=\"custom-autocomplete-pickup-address-0.5964186545641659\" class=\"VehicleFareEstimateFormModal_drop-input__BjYO5 \" role=\"combobox\" aria-autocomplete=\"list\" aria-expanded=\"false\" autocomplete=\"off\" value=\"\" onfocus=\"this.setAttribute('autocomplete', 'chrome-off' );\"></div></div></div><div class=\"VehicleFareEstimateFormModal_divider__MhYty\"></div><div class=\"VehicleFareEstimateInputModal_container__OQtPn\"><div class=\"VehicleFareEstimateInputModal_input-container__qWzOQ\"><label class=\"VehicleFareEstimateInputModal_label-required__lAQ8d \n            \" for=\"Phone Number\">Phone Number</label><input placeholder=\"enter your phone number\" type=\"tel\" value=\"\"></div></div><div class=\"VehicleFareEstimateFormModal_divider__MhYty\"></div><div class=\"VehicleFareEstimateInputModal_container__OQtPn\"><div class=\"VehicleFareEstimateInputModal_input-container__qWzOQ\"><label class=\"VehicleFareEstimateInputModal_label__MyfNR \n            \" for=\"Name\">Name</label><input placeholder=\"enter your name\" type=\"text\" value=\"\"></div></div><div class=\"VehicleFareEstimateFormModal_submit-button-wrapper__wXj81\"><button class=\"FormInput_submit__icI8k FormInput_submit-enabled__qOriP VehicleFareEstimateFormModal_submit-container__qL_IG\"><div class=\"FormInput_submit-text__LL1rf\">Get an Estimate</div><div class=\"FormInput_submit-arrow-icon__Zz3tC\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2716%27%20height=%2716%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"Right Arrow Icon\" srcset=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/common/submit_arrow_16.svg 1x, https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/common/submit_arrow_16.svg 2x\" src=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/common/submit_arrow_16.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></div></button></div></form></div></section><button class=\"VehicleModalLayout_close-modal-button__kTebR\"><span style=\"box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;\"><span style=\"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;\"><img alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2724%27%20height=%2724%27/%3e\" style=\"display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;\"></span><img alt=\"close\" srcset=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/common/cross_24.svg 1x, https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/common/cross_24.svg 2x\" src=\"https://d10wquj595no85.cloudfront.net/ssr-fe-website-prod/images/common/cross_24.svg\" decoding=\"async\" data-nimg=\"intrinsic\" style=\"position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;\"></span></button></div></div>";
      /***/
    },

    /***/
    "xbcH":
    /*!******************************************************!*\
      !*** ./src/app/views/landing/bike/bike.component.ts ***!
      \******************************************************/

    /*! exports provided: BikeComponent */

    /***/
    function xbcH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BikeComponent", function () {
        return BikeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_bike_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./bike.component.html */
      "IfgA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BikeComponent = /*#__PURE__*/function () {
        function BikeComponent() {
          _classCallCheck(this, BikeComponent);
        }

        _createClass(BikeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BikeComponent;
      }();

      BikeComponent.ctorParameters = function () {
        return [];
      };

      BikeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-bike',
        template: _raw_loader_bike_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], BikeComponent);
      /***/
    },

    /***/
    "xkbx":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/maps/map-example/map-example.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xkbx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div\n  id=\"map-canvas\"\n  class=\"relative w-full rounded h-600-px\"\n  data-lat=\"40.748817\"\n  data-lng=\"-73.985428\"\n></div>\n";
      /***/
    },

    /***/
    "xlab":
    /*!***************************************************************************!*\
      !*** ./src/app/components/footers/footer-small/footer-small.component.ts ***!
      \***************************************************************************/

    /*! exports provided: FooterSmallComponent */

    /***/
    function xlab(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterSmallComponent", function () {
        return FooterSmallComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_footer_small_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./footer-small.component.html */
      "DLfO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterSmallComponent = /*#__PURE__*/function () {
        function FooterSmallComponent() {
          _classCallCheck(this, FooterSmallComponent);

          this.date = new Date().getFullYear();
          this._absolute = false;
        }

        _createClass(FooterSmallComponent, [{
          key: "absolute",
          get: function get() {
            return this._absolute;
          },
          set: function set(absolute) {
            this._absolute = absolute === undefined ? false : absolute;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterSmallComponent;
      }();

      FooterSmallComponent.ctorParameters = function () {
        return [];
      };

      FooterSmallComponent.propDecorators = {
        absolute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      FooterSmallComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-footer-small",
        template: _raw_loader_footer_small_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], FooterSmallComponent);
      /***/
    },

    /***/
    "xud4":
    /*!***************************************************************************************!*\
      !*** ./src/app/components/cards/card-social-traffic/card-social-traffic.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: CardSocialTrafficComponent */

    /***/
    function xud4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardSocialTrafficComponent", function () {
        return CardSocialTrafficComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_card_social_traffic_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./card-social-traffic.component.html */
      "YpXG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CardSocialTrafficComponent = /*#__PURE__*/function () {
        function CardSocialTrafficComponent() {
          _classCallCheck(this, CardSocialTrafficComponent);
        }

        _createClass(CardSocialTrafficComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CardSocialTrafficComponent;
      }();

      CardSocialTrafficComponent.ctorParameters = function () {
        return [];
      };

      CardSocialTrafficComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-social-traffic",
        template: _raw_loader_card_social_traffic_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], CardSocialTrafficComponent);
      /***/
    },

    /***/
    "yCe9":
    /*!**************************************************************!*\
      !*** ./src/app/views/landing/flipfour/flipfour.component.ts ***!
      \**************************************************************/

    /*! exports provided: FlipfourComponent */

    /***/
    function yCe9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlipfourComponent", function () {
        return FlipfourComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_flipfour_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./flipfour.component.html */
      "95+T");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FlipfourComponent = /*#__PURE__*/function () {
        function FlipfourComponent() {
          _classCallCheck(this, FlipfourComponent);
        }

        _createClass(FlipfourComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FlipfourComponent;
      }();

      FlipfourComponent.ctorParameters = function () {
        return [];
      };

      FlipfourComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-flipfour',
        template: _raw_loader_flipfour_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], FlipfourComponent);
      /***/
    },

    /***/
    "zBoC":
    /*!*********************************************************!*\
      !*** ./src/app/components/sidebar/sidebar.component.ts ***!
      \*********************************************************/

    /*! exports provided: SidebarComponent */

    /***/
    function zBoC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "KKA+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent() {
          _classCallCheck(this, SidebarComponent);

          this.collapseShow = "hidden";
        }

        _createClass(SidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleCollapseShow",
          value: function toggleCollapseShow(classes) {
            this.collapseShow = classes;
          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent.ctorParameters = function () {
        return [];
      };

      SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-sidebar",
        template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], SidebarComponent);
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4"); // Enable production mode


      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])(); // Bootstrap the application

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zmeh":
    /*!**************************************************************!*\
      !*** ./src/app/views/admin/dashboard/dashboard.component.ts ***!
      \**************************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function zmeh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "KxJz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent() {
          _classCallCheck(this, DashboardComponent);
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ctorParameters = function () {
        return [];
      };

      DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-dashboard",
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], DashboardComponent);
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    },

    /***/
    "zslb":
    /*!*************************************************************************!*\
      !*** ./src/app/components/navbars/auth-navbar/auth-navbar.component.ts ***!
      \*************************************************************************/

    /*! exports provided: AuthNavbarComponent */

    /***/
    function zslb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthNavbarComponent", function () {
        return AuthNavbarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_auth_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./auth-navbar.component.html */
      "e8ip");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthNavbarComponent = /*#__PURE__*/function () {
        function AuthNavbarComponent() {
          _classCallCheck(this, AuthNavbarComponent);

          this.navbarOpen = false;
        }

        _createClass(AuthNavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "setNavbarOpen",
          value: function setNavbarOpen() {
            this.navbarOpen = !this.navbarOpen;
          }
        }]);

        return AuthNavbarComponent;
      }();

      AuthNavbarComponent.ctorParameters = function () {
        return [];
      };

      AuthNavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-auth-navbar",
        template: _raw_loader_auth_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AuthNavbarComponent);
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map