webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-todo></app-todo> -->\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__todo_header_todo_header_component__ = __webpack_require__("../../../../../src/app/todo-header/todo-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__todo_detail_todo_detail_component__ = __webpack_require__("../../../../../src/app/todo-detail/todo-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_TodoService__ = __webpack_require__("../../../../../src/app/services/TodoService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__todo_counts_todo_counts_component__ = __webpack_require__("../../../../../src/app/todo-counts/todo-counts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__todo_search_todo_search_component__ = __webpack_require__("../../../../../src/app/todo-search/todo-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__todo_pipe_pipe__ = __webpack_require__("../../../../../src/app/todo-pipe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__spinner_component_spinner_component_component__ = __webpack_require__("../../../../../src/app/spinner-component/spinner-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__todo_category_todo_category_component__ = __webpack_require__("../../../../../src/app/todo-category/todo-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_NotificationService__ = __webpack_require__("../../../../../src/app/services/NotificationService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__popup_popup_component__ = __webpack_require__("../../../../../src/app/popup/popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__auth_guard__ = __webpack_require__("../../../../../src/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__todo_todo_component__ = __webpack_require__("../../../../../src/app/todo/todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_AuthService__ = __webpack_require__("../../../../../src/app/services/AuthService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__menubar_menubar_component__ = __webpack_require__("../../../../../src/app/menubar/menubar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_category_service__ = __webpack_require__("../../../../../src/app/services/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__todo_header_todo_header_component__["a" /* TodoHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__todo_detail_todo_detail_component__["a" /* TodoDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_9__todo_counts_todo_counts_component__["a" /* TodoCountsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__todo_search_todo_search_component__["a" /* TodoSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_11__todo_pipe_pipe__["b" /* CountPipe */],
            __WEBPACK_IMPORTED_MODULE_11__todo_pipe_pipe__["c" /* TodoPipePipe */],
            __WEBPACK_IMPORTED_MODULE_11__todo_pipe_pipe__["a" /* CategoryPipe */],
            __WEBPACK_IMPORTED_MODULE_12__spinner_component_spinner_component_component__["a" /* SpinnerComponent */],
            __WEBPACK_IMPORTED_MODULE_13__todo_category_todo_category_component__["a" /* TodoCategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_15__popup_popup_component__["a" /* PopupComponent */],
            __WEBPACK_IMPORTED_MODULE_16__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_17__not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_26__todo_todo_component__["a" /* TodoComponent */],
            __WEBPACK_IMPORTED_MODULE_28__menubar_menubar_component__["a" /* MenubarComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_24_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_23__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_25_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_18__app_routes__["a" /* routes */]
        ],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_22__angular_common__["a" /* APP_BASE_HREF */], useValue: '/' },
            __WEBPACK_IMPORTED_MODULE_8__services_TodoService__["a" /* TodoService */],
            __WEBPACK_IMPORTED_MODULE_29__services_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_14__services_NotificationService__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_19_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_21__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_20__auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_27__services_AuthService__["a" /* AuthService */]],
        // bootstrap: [AppComponent]
        bootstrap: [__WEBPACK_IMPORTED_MODULE_16__login_login_component__["a" /* LoginComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export appRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_guard__ = __webpack_require__("../../../../../src/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__todo_todo_component__ = __webpack_require__("../../../../../src/app/todo/todo.component.ts");





var appRoutes = [
    //{ path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: 'Todo', component: __WEBPACK_IMPORTED_MODULE_4__todo_todo_component__["a" /* TodoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
    { path: 'Login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " .outer {\r\n    display: table;\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.middle {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n.inner {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 300px; \r\n}\r\n.connect {\r\n  overflow: hidden;\r\n  position: relative;\r\n  display: block;\r\n  width: 100%;\r\n  height: 72px;\r\n  line-height: 72px;\r\n  text-decoration: none;\r\n}\r\n\r\n.connect__icon {\r\n  vertical-align: middle;\r\n  float: left;\r\n  width: 70px;\r\n  text-align: center;\r\n  font-size: 22px;\r\n}\r\n\r\n.connect__context {\r\n  vertical-align: middle;\r\n  text-align: center;\r\n}\r\n\r\n.connect.facebook {\r\n  background: #3b5998;\r\n  color: #FFF;\r\n}\r\n\r\n.connect.facebook a {\r\n  color: #FFF;\r\n}\r\n\r\n.connect.facebook .connect__icon {\r\n  background: #283d68;\r\n}\r\n\r\n.connect.googleplus {\r\n  background: #dd4b39;\r\n  color: #FFF;\r\n}\r\n\r\n.connect.googleplus a {\r\n  color: #FFF;\r\n}\r\n\r\n.connect.googleplus .connect__icon {\r\n  background: #b52f1f;\r\n} \r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"outer\" *ngIf=\"!state\">\n  <div class=\"middle\">\n    <div class=\"inner\">\n\n      <div class=\"logmod__alter\">\n        <div class=\"logmod__alter-container\">\n          <a class=\"connect facebook\">\n            <div class=\"connect__icon\">\n              <i class=\"fa fa-facebook\"></i>\n            </div>\n            <div class=\"connect__context\">\n              <span>Sign in with <strong>Facebook</strong></span>\n            </div>\n          </a>\n          <a class=\"connect googleplus\">\n            <div class=\"connect__icon\">\n              <i class=\"fa fa-google-plus\"></i>\n            </div>\n            <div class=\"connect__context\">\n              <span (click)=\"login()\">Sign in with <strong>Google+</strong></span>\n            </div>\n          </a>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AuthService__ = __webpack_require__("../../../../../src/app/services/AuthService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(af, router, authService) {
        this.af = af;
        this.router = router;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.loginState().subscribe(function (s) {
            _this.userName = s.userName;
            _this.state = s.state;
            _this.imageUrl = s.imageUrl;
            if (s.state) {
                _this.router.navigate(["Todo"]);
            }
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login().subscribe(function (s) {
            _this.router.navigate(["Todo"]);
        });
    };
    LoginComponent.prototype.loginFacebook = function () {
        var _this = this;
        var provider = new __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"].FacebookAuthProvider();
        this.af.auth.signInWithPopup(provider).then(function () {
            _this.router.navigate(["Todo"]);
        });
    };
    LoginComponent.prototype.logout = function () {
        this.af.auth.signOut().then(function () {
            this.router.navigate(["/"]);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_AuthService__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_AuthService__["a" /* AuthService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/menubar/menubar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".padding-10 {\r\n  padding: 10px;\r\n}\r\n\r\n.main {\r\n  background: #337ab7;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n.main a{\r\n    color: white;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menubar/menubar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <span class=\"padding-10\" *ngIf=\"loginSummary.state\">Hi, {{loginSummary.userName}}\n   \n   <span class=\"pull-right padding-10\" >\n     <img  style=\"width:50; height:50px\" src=\"{{loginSummary.imageUrl}}\" alt=\"...\" class=\"img-circle\">\n   </span>\n\n  <div class=\"padding-10\" >\n    <a class=\"pointer\" (click)=\"logout()\">Logout</a>\n  </div>\n  \n</span>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/menubar/menubar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenubarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_AuthService__ = __webpack_require__("../../../../../src/app/services/AuthService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenubarComponent = (function () {
    function MenubarComponent(authService) {
        var _this = this;
        this.authService = authService;
        this.loginSummary = new __WEBPACK_IMPORTED_MODULE_1__services_AuthService__["b" /* LoginSummary */]();
        this.logout = function () {
            _this.authService.logout();
        };
    }
    MenubarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.loginState().subscribe(function (l) {
            _this.loginSummary = l;
        });
    };
    return MenubarComponent;
}());
MenubarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menubar',
        template: __webpack_require__("../../../../../src/app/menubar/menubar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/menubar/menubar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_AuthService__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_AuthService__["a" /* AuthService */]) === "function" && _a || Object])
], MenubarComponent);

var _a;
//# sourceMappingURL=menubar.component.js.map

/***/ }),

/***/ "../../../../../src/app/modals/Todo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Todo; });
/* unused harmony export Category */
var Todo = (function () {
    function Todo(descr, done, show, categoryId) {
        this.descr = descr;
        this.done = done;
        this.show = show;
        this.CategoryId = 1;
        this.Description = descr;
        this.Completed = done;
        this.Show = show;
        this.CategoryId = categoryId;
    }
    return Todo;
}());

var Category = (function () {
    function Category() {
        this.Count = 0;
    }
    return Category;
}());

//# sourceMappingURL=Todo.js.map

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Sorry, not found!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'not-found',
        template: __webpack_require__("../../../../../src/app/not-found/not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/not-found/not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/popup/popup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".white_content {\r\n  display: none;\r\n  position: absolute;\r\n  top: 25%;\r\n  left: 25%;\r\n  width: 320px;\r\n  height: 100px;\r\n  padding: 1px;\r\n  border: 3px solid blue;\r\n  background-color: white;\r\n  z-index: 1002;\r\n  overflow: auto;\r\n  margin: 0px;\r\n  font-size: 12px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/popup/popup.component.html":
/***/ (function(module, exports) {

module.exports = "<span>\n  <a href=\"javascript:void(0)\" \n    onmouseover=\"document.getElementById('light').style.display='block';\" \n    onmouseleave=\"document.getElementById('light').style.display='none';\"\n    >\n      \n  <span class=\"glyphicon glyphicon-list-alt\" title=\"filters currently applied..\" ></span></a>\n\n  <span id=\"light\" class=\"white_content\">\n    <ul >\n      <li *ngFor=\"let popup of popups\">\n          {{popup}}\n      </li>\n    </ul>\n  </span>\n</span>"

/***/ }),

/***/ "../../../../../src/app/popup/popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopupComponent = (function () {
    function PopupComponent() {
    }
    PopupComponent.prototype.ngOnInit = function () {
    };
    return PopupComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], PopupComponent.prototype, "popups", void 0);
PopupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        // tslint:disable-next-line:component-selector
        selector: 'popup',
        template: __webpack_require__("../../../../../src/app/popup/popup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/popup/popup.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PopupComponent);

//# sourceMappingURL=popup.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/AuthService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoginSummary; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AuthService = (function () {
    function AuthService(auth, router) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.guard = function () {
            _this.auth.authState.subscribe(function (res) {
                if (!res || !res.uid) {
                    _this.router.navigate(["Login"]);
                }
            });
        };
        this.login = function () {
            var provider = new __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"].GoogleAuthProvider();
            var result = _this.auth.auth.signInWithPopup(provider);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].fromPromise(result);
        };
        this.loginState = function () {
            /* Example of returning Observable from inside a Subscription!! */
            var login = new LoginSummary();
            var subject = new __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__["Subject"]();
            _this.auth.authState.subscribe(function (res) {
                if (res && res.uid) {
                    login.state = true;
                    login.userName = res.providerData[0].displayName;
                    login.imageUrl = res.providerData[0].photoURL;
                    subject.next(login);
                    subject.complete();
                }
            });
            var result = subject.asObservable();
            return result;
        };
        this.logout = function () {
            _this.auth.auth.signOut().then(function () {
                this.router.navigate(["/"]);
            });
        };
    }
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthService);

var LoginSummary = (function () {
    function LoginSummary() {
    }
    return LoginSummary;
}());

var _a, _b;
//# sourceMappingURL=AuthService.js.map

/***/ }),

/***/ "../../../../../src/app/services/NotificationService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// will be called from the components to anounce changes to their list. This enables sibling communications.
var NotificationService = (function () {
    function NotificationService() {
        // Observable sources
        this.todoAdded = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.todoDeleted = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.todoListChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.categoryListChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.selectedCategoryChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.selectedCountChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.resetFiltersChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        // Observable  streams
        this.todoAddedObservable = this.todoAdded.asObservable();
        this.todoDeletedObservable = this.todoDeleted.asObservable();
        this.todoListChangedObservable = this.todoListChanged.asObservable();
        this.categoriesChangedObservable = this.categoryListChanged.asObservable();
        this.selectedCategoryChangedObservable = this.selectedCategoryChanged.asObservable();
        this.selectedCountChangedObservable = this.selectedCountChanged.asObservable();
        this.resetFiltersObservable = this.resetFiltersChanged.asObservable();
    }
    NotificationService.prototype.notifyTodoAdded = function (todo) {
        this.todoAdded.next(todo);
    };
    NotificationService.prototype.notifyTodoDeleted = function (todo) {
        this.todoDeleted.next(todo);
    };
    NotificationService.prototype.notifyTodoListChanged = function (list) {
        this.todoListChanged.next(list);
    };
    NotificationService.prototype.notifyCategoryListChanged = function (list) {
        this.categoryListChanged.next(list);
    };
    NotificationService.prototype.notifyselectedCategoryChanged = function (id) {
        this.selectedCategoryChanged.next(id);
    };
    NotificationService.prototype.notifyselectedCountChanged = function (filter) {
        this.selectedCountChanged.next(filter);
    };
    NotificationService.prototype.notifyResetFilters = function () {
        this.resetFiltersChanged.next();
    };
    return NotificationService;
}());
NotificationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], NotificationService);

//# sourceMappingURL=NotificationService.js.map

/***/ }),

/***/ "../../../../../src/app/services/TodoService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TodoService = (function () {
    function TodoService(db) {
        var _this = this;
        this.db = db;
        // TODO: do better error handling when a doing CRUD
        this.loadTodos = function () {
            var subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
            var list = _this.todoList.snapshotChanges();
            list.subscribe(function (s) {
                var todos = new Array();
                s.forEach(function (item) {
                    var todo = item.payload.toJSON();
                    todo.Key = item.key;
                    todos.push(todo);
                    subject.next(todos);
                });
            });
            return subject.asObservable();
        };
        this.addTodo = function (todo) {
            var subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
            _this.todoList.push(todo).then(function (result) {
                subject.next(todo);
                subject.complete();
            });
            return subject.asObservable();
        };
        this.deleteTodo = function (key) {
            _this.todoList.remove(key).then(function (result) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(true);
            });
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(false);
        };
        this.updateTodo = function (todo) {
            _this.todoList.update(todo.Key, todo).then(function (result) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(true);
            });
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(false);
        };
        this.todoList = this.db.list("/todos");
    }
    return TodoService;
}());
TodoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], TodoService);

var _a;
//# sourceMappingURL=TodoService.js.map

/***/ }),

/***/ "../../../../../src/app/services/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryService = (function () {
    function CategoryService(db) {
        var _this = this;
        this.db = db;
        this.loadCategories = function () {
            var subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
            _this.categoryList = _this.db.list("/categories");
            var list = _this.categoryList.snapshotChanges();
            list.subscribe(function (s) {
                var categories = new Array();
                s.forEach(function (item) {
                    var cat = item.payload.toJSON();
                    cat.Key = item.key;
                    categories.push(cat);
                    subject.next(categories);
                });
            });
            var result = subject.asObservable();
            return result;
        };
    }
    return CategoryService;
}());
CategoryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], CategoryService);

var _a;
//# sourceMappingURL=category.service.js.map

/***/ }),

/***/ "../../../../../src/app/spinner-component/spinner-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.cssload-loader {\r\n\twidth: 244px;\r\n\theight: 49px;\r\n\tline-height: 49px;\r\n\ttext-align: center;\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n\t\t-o-transform: translate(-50%, -50%);\r\n\t\t-ms-transform: translate(-50%, -50%);\r\n\t\t-webkit-transform: translate(-50%, -50%);\r\n\t\t-moz-transform: translate(-50%, -50%);\r\n\tfont-family: helvetica, arial, sans-serif;\r\n\ttext-transform: uppercase;\r\n\tfont-weight: 900;\r\n\tfont-size:18px;\r\n\tcolor: rgb(20,9,20);\r\n\tletter-spacing: 0.2em;\r\n}\r\n.cssload-loader::before, .cssload-loader::after {\r\n\tcontent: \"\";\r\n\tdisplay: block;\r\n\twidth: 15px;\r\n\theight: 15px;\r\n\tbackground: rgb(26,15,26);\r\n\tposition: absolute;\r\n\tanimation: cssload-load 1.75s infinite alternate ease-in-out;\r\n\t\t-o-animation: cssload-load 1.75s infinite alternate ease-in-out;\r\n\t\t-ms-animation: cssload-load 1.75s infinite alternate ease-in-out;\r\n\t\t-webkit-animation: cssload-load 1.75s infinite alternate ease-in-out;\r\n\t\t-moz-animation: cssload-load 1.75s infinite alternate ease-in-out;\r\n}\r\n.cssload-loader::before {\r\n\ttop: 0;\r\n}\r\n.cssload-loader::after {\r\n\tbottom: 0;\r\n}\r\n\r\n\r\n\r\n@keyframes cssload-load {\r\n\t0% {\r\n\t\tleft: 0;\r\n\t\theight: 29px;\r\n\t\twidth: 15px;\r\n\t}\r\n\t50% {\r\n\t\theight: 8px;\r\n\t\twidth: 39px;\r\n\t}\r\n\t100% {\r\n\t\tleft: 229px;\r\n\t\theight: 29px;\r\n\t\twidth: 15px;\r\n\t}\r\n}\r\n\r\n@-webkit-keyframes cssload-load {\r\n\t0% {\r\n\t\tleft: 0;\r\n\t\theight: 29px;\r\n\t\twidth: 15px;\r\n\t}\r\n\t50% {\r\n\t\theight: 8px;\r\n\t\twidth: 39px;\r\n\t}\r\n\t100% {\r\n\t\tleft: 229px;\r\n\t\theight: 29px;\r\n\t\twidth: 15px;\r\n\t}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/spinner-component/spinner-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cssload-loader\">{{getTextToAnimateOrDefault()}}</div>"

/***/ }),

/***/ "../../../../../src/app/spinner-component/spinner-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerComponent = (function () {
    function SpinnerComponent() {
        var _this = this;
        this.getTextToAnimateOrDefault = function () {
            return _this.textToAnimate ? _this.textToAnimate : 'Processing...';
        };
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    return SpinnerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], SpinnerComponent.prototype, "textToAnimate", void 0);
SpinnerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        // tslint:disable-next-line:component-selector
        selector: 'spinner-component',
        template: __webpack_require__("../../../../../src/app/spinner-component/spinner-component.component.html"),
        styles: [__webpack_require__("../../../../../src/app/spinner-component/spinner-component.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SpinnerComponent);

//# sourceMappingURL=spinner-component.component.js.map

/***/ }),

/***/ "../../../../../src/app/todo-animations/Animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return highlight; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

/* Animation that will be applied adding / deleting todos */
var fade = Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* trigger */])('fade', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* transition */])('void <=> *', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* style */])({ opacity: 0, backgroundColor: 'grey' }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* animate */])(200)
    ])
]);
// TODO: this should only apply to one that is active??
/* Custom animation that will trigger on checking and unchecking the check boxes */
var highlight = Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* trigger */])('highlight', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* state */])('completed', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* style */])({ opacity: 0.5, outline: '1px solid blue' })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* state */])('notcompleted', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* style */])({ opacity: 1 })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* transition */])('completed => notcompleted', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* animate */])('1000ms ease-in'))
]);
//# sourceMappingURL=Animation.js.map

/***/ }),

/***/ "../../../../../src/app/todo-category/todo-category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bold-a{\r\n    color: black; font-weight:bold\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo-category/todo-category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <div class=\"panel-heading\">\n    Categories \n    <a>\n      <span style=\"color: white\" (click)=\"categoryReset();\" class=\"pull-right glyphicon glyphicon-refresh  pointer\">\n        </span>\n    </a>\n  </div>\n  <div class=\"panel-body\">\n    <ul class=\"list-group\">\n      <li \n        class=\"list-group-item d-flex justify-content-between align-items-center  pointer\" \n        *ngFor=\"let category of categories; let i = index\"\n        [ngClass]=\"{'active': selectedIndex == i}\"\n        (click)=\"categorySelected(category.Id, i)\">\n\n          <a class=\"bold-a\">{{category.Description}}</a>\n          <span class=\"badge badge-primary badge-pill\">{{category.Count}}</span>\n      </li>\n     </ul>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/todo-category/todo-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_TodoService__ = __webpack_require__("../../../../../src/app/services/TodoService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_NotificationService__ = __webpack_require__("../../../../../src/app/services/NotificationService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_category_service__ = __webpack_require__("../../../../../src/app/services/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoCategoryComponent = (function () {
    function TodoCategoryComponent(todoService, notificationService, categoryService) {
        this.todoService = todoService;
        this.notificationService = notificationService;
        this.categoryService = categoryService;
    }
    TodoCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryLoadedSubscription = this.categoryService.loadCategories().subscribe(function (c) {
            _this.categories = c;
        });
        this.todoAddedSubscription = this.notificationService.todoAddedObservable.subscribe(function (todo) {
            _this.categories.forEach(function (element) {
                if (element.Id === todo.CategoryId) {
                    element.Count++;
                }
            });
        });
        this.todoDeletedSubscription = this.notificationService.todoDeletedObservable.subscribe(function (todo) {
            _this.categories.forEach(function (element) {
                if (element.Id === todo.CategoryId) {
                    element.Count--;
                }
            });
        });
        // Todo: here should update the count of the the categories
        this.notificationService.todoListChangedObservable.subscribe(function (list) {
            console.log(list);
            var count = 0;
            var getCount = function (id) {
                console.log("To find:", id);
                count = 0;
                list.forEach(function (element) {
                    if (element.CategoryId == id) {
                        console.log("found id:", id);
                        count++;
                    }
                });
                return count;
            };
            for (var _i = 0, _a = _this.categories; _i < _a.length; _i++) {
                var cat = _a[_i];
                cat.Count = getCount(cat.Id);
            }
        });
        this.resetfilterSubscription = this.notificationService.resetFiltersObservable.subscribe(function () {
            _this.selectedIndex = -1;
        });
    };
    TodoCategoryComponent.prototype.categorySelected = function (id, rowIndex) {
        this.notificationService.notifyselectedCategoryChanged(id);
        this.selectedIndex = rowIndex;
    };
    TodoCategoryComponent.prototype.categoryReset = function () {
        this.notificationService.notifyselectedCategoryChanged(0);
        this.selectedIndex = -1;
    };
    TodoCategoryComponent.prototype.ngOnDestroy = function () {
        this.todoAddedSubscription.unsubscribe();
        this.resetfilterSubscription.unsubscribe();
        this.todoDeletedSubscription.unsubscribe();
        this.categoryLoadedSubscription.unsubscribe();
    };
    return TodoCategoryComponent;
}());
TodoCategoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        // tslint:disable-next-line:component-selector
        selector: 'todo-category',
        template: __webpack_require__("../../../../../src/app/todo-category/todo-category.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todo-category/todo-category.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_TodoService__["a" /* TodoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_TodoService__["a" /* TodoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_NotificationService__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_NotificationService__["a" /* NotificationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_category_service__["a" /* CategoryService */]) === "function" && _c || Object])
], TodoCategoryComponent);

var _a, _b, _c;
//# sourceMappingURL=todo-category.component.js.map

/***/ }),

/***/ "../../../../../src/app/todo-counts/todo-counts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".badge{\r\n    border: 1px solid;\r\n}\r\n\r\n.activeBadge{\r\n    background: blue !important;\r\n    color: white;\r\n    font-weight: bold;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo-counts/todo-counts.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <span>\n      Total to do:  \n        <a >\n          <span [ngClass]=\"{activeBadge: selectedBadge==='all'}\"  class=\"badge alert-success pointer\" #all (click)=\"showByCount('all')\">{{totalTodos}}</span>\n        </a>\n    </span>\n    <span >\n        Total completed: \n        <a  >\n            <span [ngClass]=\"{activeBadge: selectedBadge==='done'}\"  class=\"badge alert-primary pointer\" #done (click)=\"showByCount('done')\">{{totalCompleted}}</span>\n        </a>\n    </span>\n    <span>\n        Total not completed: \n        <a >\n            <span [ngClass]=\"{activeBadge: selectedBadge==='notdone'}\" class=\"badge alert-danger pointer\" #notDone (click)=\"showByCount('notdone')\">{{totalNotCompleted}}</span>\n        </a>\n    </span>\n</div>"

/***/ }),

/***/ "../../../../../src/app/todo-counts/todo-counts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoCountsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_TodoService__ = __webpack_require__("../../../../../src/app/services/TodoService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_NotificationService__ = __webpack_require__("../../../../../src/app/services/NotificationService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoCountsComponent = (function () {
    function TodoCountsComponent(todoService, notificationService) {
        var _this = this;
        this.todoService = todoService;
        this.notificationService = notificationService;
        this.todoList = [];
        this.totalTodos = 0;
        this.totalCompleted = 0;
        this.totalNotCompleted = 0;
        notificationService.todoListChangedObservable.subscribe(function (list) {
            _this.todoList = list;
            _this.totalTodos = _this.todoList.length;
            _this.totalCompleted = _this.todoList.filter(function (t) { return t.Completed === true; }).length;
            _this.totalNotCompleted = _this.totalTodos - _this.totalCompleted;
        });
        this.notificationService.resetFiltersObservable.subscribe(function () { return _this.countReset(); });
    }
    TodoCountsComponent.prototype.ngOnInit = function () {
    };
    TodoCountsComponent.prototype.showByCount = function (toShow) {
        this.notificationService.notifyselectedCountChanged(toShow);
        this.selectedBadge = toShow;
    };
    TodoCountsComponent.prototype.countReset = function () {
        this.selectedBadge = '';
    };
    return TodoCountsComponent;
}());
TodoCountsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        // tslint:disable-next-line:component-selector
        selector: 'todo-counts',
        template: __webpack_require__("../../../../../src/app/todo-counts/todo-counts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todo-counts/todo-counts.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_TodoService__["a" /* TodoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_TodoService__["a" /* TodoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_NotificationService__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_NotificationService__["a" /* NotificationService */]) === "function" && _b || Object])
], TodoCountsComponent);

var _a, _b;
//# sourceMappingURL=todo-counts.component.js.map

/***/ }),

/***/ "../../../../../src/app/todo-detail/todo-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo-detail/todo-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <div class=\"panel-heading\">\n    Todo details\n  </div>\n\n  <div class=\"panel-body\">\n\n    <spinner-component textToAnimate=\"Loading...\" *ngIf=\"loading\"></spinner-component>\n\n    <div *ngIf=\"showDetails()\">\n\n      <div>\n        <todo-search placeholder=\"Search for todo...\" (searchChangedEvent)=\"applyFilter($event)\"></todo-search>\n         <popup [popups]=\"getFiltersPopups()\" class=\"pull-right\"></popup>\n      </div>\n\n      <table class=\"table table-inverse\">\n        <thead>\n          <tr>\n            <th style=\"width:70%\">Description</th>\n            <th style=\"width:20%\">Completed?</th>\n            <th style=\"width:10%\"></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr @fade *ngFor=\"let todo of todoList | todoPipe:descriptionFilter | categoryPipe:categoryFilter | countPipe:countFilter;\">\n            <td scope=\"row\">{{todo.Description}}</td>\n            <td>\n              <input name=\"completed\" type=\"checkbox\" [@highlight]=\"completedState\" [(ngModel)]=\"todo.Completed\" (change)=\"todoChanged(todo)\"\n              />\n            </td>\n            <td class=\"pull-right\">\n              <button class=\"btn btn-danger btn-sm\" (click)=\"removeTodo(todo)\">Delete</button>\n            </td>\n            <td hidden>\n              {{todo.Id}}\n            </td>\n          </tr>\n\n        </tbody>\n      </table>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/todo-detail/todo-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_TodoService__ = __webpack_require__("../../../../../src/app/services/TodoService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todo_animations_Animation__ = __webpack_require__("../../../../../src/app/todo-animations/Animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_NotificationService__ = __webpack_require__("../../../../../src/app/services/NotificationService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoDetailComponent = (function () {
    function TodoDetailComponent(todoService, notificationService) {
        var _this = this;
        this.todoService = todoService;
        this.notificationService = notificationService;
        this.todoList = [];
        this.loading = false;
        /** To show the details or not */
        this.showDetails = function () {
            return _this.todoList && _this.todoList.length > 0;
        };
        /** Emitted from the child search component this will be used in the ngFor to filter todos */
        this.applyFilter = function (filter) {
            _this.descriptionFilter = filter;
        };
        /* Subscribing to todo added observable */
        notificationService.todoAddedObservable.subscribe(function (todo) {
            _this.todoList.push(todo);
            /* inform subscribers e.g. todo count component to update their details */
            notificationService.notifyTodoListChanged(_this.todoList);
        });
        // User has changed the cateogy id of the category component, so filter todos
        notificationService.selectedCategoryChangedObservable.subscribe(function (id) {
            _this.resetAllFilters();
            _this.notificationService.notifyResetFilters();
            _this.categoryFilter = id;
        });
        notificationService.selectedCountChangedObservable.subscribe(function (filter) {
            _this.resetAllFilters();
            _this.notificationService.notifyResetFilters();
            _this.countFilter = filter;
        });
    }
    TodoDetailComponent.prototype.resetAllFilters = function () {
        this.countFilter = '';
        this.categoryFilter = 0; // clear filter
        this.descriptionFilter = ''; // clear filter
    };
    TodoDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        /** Load todos form the database */
        this.todoService.loadTodos().subscribe(function (s) {
            _this.todoList = s;
            _this.notificationService.notifyTodoListChanged(_this.todoList);
            _this.loading = false;
        });
    };
    /** removes todo from the list and notifies the subscribers */
    TodoDetailComponent.prototype.removeTodo = function (todo) {
        var _this = this;
        this.todoService.deleteTodo(todo.Key).subscribe(function (deleted) {
            if (deleted === true) {
                _this.todoList.splice(_this.todoList.indexOf(todo), 1);
                _this.notificationService.notifyTodoListChanged(_this.todoList);
                _this.notificationService.notifyTodoDeleted(todo);
            }
        });
    };
    /** Changes completed or not and notifies the subscribers */
    TodoDetailComponent.prototype.todoChanged = function (todo) {
        var _this = this;
        this.todoList.forEach(function (element) {
            if (element.Id === todo.Id) {
                element.Completed = todo.Completed;
                _this.todoService.updateTodo(todo).subscribe(function (s) {
                    // broadcast the message through the shared service observable!
                    _this.notificationService.notifyTodoListChanged(_this.todoList);
                });
            }
        });
        /** Applies custom animation based on checkbox toggling */
        if (todo.Completed) {
            this.completedState = 'completed';
            setTimeout(function (s) {
                return _this.completedState = 'notcompleted';
            }, 1000);
        }
        else {
            this.completedState = 'notcompleted';
        }
    };
    TodoDetailComponent.prototype.getFiltersPopups = function () {
        var array = new Array();
        array.push('Category Filter: ' + this.categoryFilter);
        array.push('Count Filter: ' + this.countFilter);
        array.push('Description Filter: ' + this.descriptionFilter);
        return array;
    };
    return TodoDetailComponent;
}());
TodoDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        // tslint:disable-next-line:component-selector
        selector: 'todo-detail',
        template: __webpack_require__("../../../../../src/app/todo-detail/todo-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todo-detail/todo-detail.component.css")],
        animations: [
            __WEBPACK_IMPORTED_MODULE_2__todo_animations_Animation__["a" /* fade */],
            __WEBPACK_IMPORTED_MODULE_2__todo_animations_Animation__["b" /* highlight */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_TodoService__["a" /* TodoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_TodoService__["a" /* TodoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_NotificationService__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_NotificationService__["a" /* NotificationService */]) === "function" && _b || Object])
], TodoDetailComponent);

var _a, _b;
//# sourceMappingURL=todo-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/todo-header/todo-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo-header/todo-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n  <div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\">\r\n      Todo\r\n    </div>\r\n\r\n    <div class=\"panel-body\">\r\n\r\n      <form name=\"todoForm\" #form=\"ngForm\"  >\r\n\r\n        <div class=\"form-group \">\r\n          <input \r\n            name=\"description\" \r\n            type=\"text\" [(ngModel)]=\"todo.Description\" \r\n            class=\"form-control\" id=\"todoDescription\" \r\n            placeholder=\"New todo\"\r\n            required minlength=\"3\" \r\n            #descriptionFld=\"ngModel\" \r\n            (keyup.enter)=\"addTodo(todo);\">\r\n        </div>\r\n\r\n        <div class=\"form-group \">\r\n            <select \r\n             class=\"form-control\"\r\n              name=\"category\" \r\n              [(ngModel)]=\"todo.CategoryId\" \r\n            >\r\n              <option *ngFor=\"let cat of categories\" [value]=\"cat.Id\">{{ cat.Description }}</option>\r\n            </select>\r\n\r\n        </div>\r\n\r\n          <div class=\"form-group\">           \r\n                <button \r\n                    type=\"button\" \r\n                    (click)=\"addTodo(todo); form.reset();\"\r\n                    class=\"btn btn-primary\"\r\n                    [disabled]=\"form.invalid\"\r\n                >Save</button>\r\n          </div>\r\n\r\n        <div class=\"alert alert-danger\" *ngIf=\"((descriptionFld.dirty || descriptionFld.touched)) && (descriptionFld.invalid)\">\r\n          <div *ngIf=\"descriptionFld.errors.required\">Description is required.</div>\r\n          <div *ngIf=\"descriptionFld.errors.minlength\">Description should be at least 3 characters.</div>\r\n        </div>\r\n\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/todo-header/todo-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modals_Todo__ = __webpack_require__("../../../../../src/app/modals/Todo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_TodoService__ = __webpack_require__("../../../../../src/app/services/TodoService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_NotificationService__ = __webpack_require__("../../../../../src/app/services/NotificationService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_category_service__ = __webpack_require__("../../../../../src/app/services/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TodoHeaderComponent = (function () {
    function TodoHeaderComponent(todoService, notificationService, categoryService) {
        this.todoService = todoService;
        this.notificationService = notificationService;
        this.categoryService = categoryService;
        this.todo = new __WEBPACK_IMPORTED_MODULE_1__modals_Todo__["a" /* Todo */]('', false, false, 1);
        this.categories = new Array();
    }
    TodoHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryLoadSubscription = this.categoryService.loadCategories().subscribe(function (c) { return _this.categories = c; });
    };
    TodoHeaderComponent.prototype.ngOnDestroy = function () {
        this.categoryLoadSubscription.unsubscribe();
    };
    TodoHeaderComponent.prototype.addTodo = function (todo) {
        var _this = this;
        this.todoService.addTodo(new __WEBPACK_IMPORTED_MODULE_1__modals_Todo__["a" /* Todo */](todo.Description, false, true, todo.CategoryId)).subscribe(function (a) {
            console.log(a);
            if (a !== null)
                return;
            _this.notificationService.notifyTodoAdded(a);
            _this.todo.CategoryId = 1;
        });
    };
    return TodoHeaderComponent;
}());
TodoHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        // tslint:disable-next-line:component-selector
        selector: 'todo-header',
        template: __webpack_require__("../../../../../src/app/todo-header/todo-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todo-header/todo-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_TodoService__["a" /* TodoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_TodoService__["a" /* TodoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_NotificationService__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_NotificationService__["a" /* NotificationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_category_service__["a" /* CategoryService */]) === "function" && _c || Object])
], TodoHeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=todo-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/todo-pipe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TodoPipePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CountPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TodoPipePipe = (function () {
    function TodoPipePipe() {
    }
    TodoPipePipe.prototype.transform = function (todos, filter) {
        if (!filter) {
            return todos;
        }
        else {
            console.log(filter);
            return todos.filter(function (item) { return item.Description.indexOf(filter) > -1; });
        }
    };
    return TodoPipePipe;
}());
TodoPipePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'todoPipe'
    })
], TodoPipePipe);

var CategoryPipe = (function () {
    function CategoryPipe() {
    }
    CategoryPipe.prototype.transform = function (todos, filter) {
        if (!filter) {
            return todos;
        }
        else {
            console.log(filter);
            return todos.filter(function (item) { return item.CategoryId == filter; });
        }
    };
    return CategoryPipe;
}());
CategoryPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'categoryPipe'
    })
], CategoryPipe);

var CountPipe = (function () {
    function CountPipe() {
    }
    CountPipe.prototype.transform = function (todos, filter) {
        if (!filter || filter === 'all') {
            return todos;
        }
        else {
            if (filter === 'done') {
                return todos.filter(function (item) { return item.Completed === true; });
            }
            else {
                return todos.filter(function (item) { return item.Completed === false; });
            }
        }
    };
    return CountPipe;
}());
CountPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'countPipe'
    })
], CountPipe);

//# sourceMappingURL=todo-pipe.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/todo-search/todo-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo-search/todo-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group\">\n\n  <input  type=\"text\" \n          class=\"form-control\" \n          name=\"search\" \n          placeholder=\"{{getPlaceholder()}}\" \n          [(ngModel)]=\"searchCriteria\" #input=\"ngModel\"\n          (keyup)=\"search()\"\n          >\n\n  <span class=\"input-group-btn\">\n      <button class=\"btn btn-primary\" type=\"button\" name=\"search\" (click)=\"search()\" >Search</button>\n      <button class=\"btn btn-default\" type=\"button\" name=\"clear\" (click)=\"clear(input)\">Clear</button>\n   </span>\n\n</div>\n\n<br>"

/***/ }),

/***/ "../../../../../src/app/todo-search/todo-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoSearchComponent = (function () {
    function TodoSearchComponent() {
        this.searchChangedEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    TodoSearchComponent.prototype.ngOnInit = function () {
    };
    TodoSearchComponent.prototype.clear = function (input) {
        this.searchCriteria = '';
        this.searchChangedEvent.emit(this.searchCriteria);
    };
    TodoSearchComponent.prototype.search = function () {
        this.searchChangedEvent.emit(this.searchCriteria);
    };
    TodoSearchComponent.prototype.getPlaceholder = function () {
        return this.placeholder ? this.placeholder : 'Search...';
    };
    return TodoSearchComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], TodoSearchComponent.prototype, "searchChangedEvent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], TodoSearchComponent.prototype, "placeholder", void 0);
TodoSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        // tslint:disable-next-line:component-selector
        selector: 'todo-search',
        template: __webpack_require__("../../../../../src/app/todo-search/todo-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todo-search/todo-search.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TodoSearchComponent);

var _a;
//# sourceMappingURL=todo-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/todo/todo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo/todo.component.html":
/***/ (function(module, exports) {

module.exports = " <!-- <div >\n  <Button class=\"btn btn-danger\" (click)=\"logout()\">Logout</Button>\n</div>  -->\n\n<app-menubar></app-menubar>\n\n<br>\n\n\n<div class=\"container-fluid\">\n\n    <div class=\"row\">\n\n        <div class=\"col-xs-12 col-sm-4\">\n\n            <todo-category></todo-category>\n\n        </div>\n\n        <div class=\"col-xs-12 col-sm-8\">\n\n            <todo-header></todo-header>\n\n            <div>\n                <span>\n                    <todo-counts></todo-counts>\n                </span>\n            </div>\n          \n            <br>\n\n            <todo-detail></todo-detail>\n\n        </div>\n\n    </div>\n\n    <br/>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/todo/todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AuthService__ = __webpack_require__("../../../../../src/app/services/AuthService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TodoComponent = (function () {
    function TodoComponent(db, authService, af, router) {
        this.db = db;
        this.authService = authService;
        this.af = af;
        this.router = router;
        authService.guard();
    }
    TodoComponent.prototype.ngOnInit = function () {
    };
    TodoComponent.prototype.logout = function () {
        var _this = this;
        this.af.auth.signOut().then(function () {
            _this.router.navigate(["Login"]);
        });
    };
    return TodoComponent;
}());
TodoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-todo',
        template: __webpack_require__("../../../../../src/app/todo/todo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todo/todo.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_AuthService__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_AuthService__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _d || Object])
], TodoComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=todo.component.js.map

/***/ }),

/***/ "../../../../../src/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].from(this.auth.authState)
            .take(1)
            .map(function (state) { return !!state; })
            .do(function (authenticated) {
            if (!authenticated)
                _this.router.navigate(['Login']);
        });
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDWKsY2ZI2IaLRK7q5P7LUCu7iEn_6HrGY",
        authDomain: "todo-5798c.firebaseapp.com",
        databaseURL: "https://todo-5798c.firebaseio.com",
        projectId: "todo-5798c",
        storageBucket: "todo-5798c.appspot.com",
        messagingSenderId: "730598178183"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map