(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <br><br><br>\n  <nav class=\"navbar fixed-top navbar-expand-lg navbar-light intro mat-elevation-z8\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"assets/images/logo.jpg\" alt=\"Logo\" style=\"width:40px; border-radius: 50%;\">\n      </a>\n      <a class=\"navbar-brand text-white\" href=\"#\"><b>{{title}}</b></a>\n      <button class=\"navbar-toggler\" style=\"background-color: rgb(255, 255, 255, 0.4); color: wheat\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav ml-auto text-white\">\n          <li class=\"nav-item active\">\n            <a class=\"nav-link text-white\" href=\"#home\"> Home <span class=\"sr-only\">(current)</span>\n              <mat-icon matSuffix>home</mat-icon>\n            </a>\n          </li>\n          <li class=\"nav-item active\">\n            <a class=\"nav-link text-white\" href=\"#events\"> Events <span class=\"sr-only\">(current)</span>\n              <mat-icon matSuffix>events</mat-icon>\n            </a>\n          </li>\n          <li class=\"nav-item active\">\n            <a class=\"nav-link text-white\" href=\"#quotes\"> Quotes <span class=\"sr-only\">(current)</span>\n              <mat-icon matSuffix>library_books</mat-icon>\n            </a>\n          </li>\n          <li class=\"nav-item active\">\n            <a class=\"nav-link text-white\" href=\"#connect\"> Connect <span class=\"sr-only\">(current)</span>\n              <mat-icon matSuffix>call</mat-icon>\n            </a>\n          </li>\n          <li class=\"nav-item active\">\n            <a class=\"nav-link text-white\" href=\"#team\"> Team <span class=\"sr-only\">(current)</span>\n              <mat-icon matSuffix>group</mat-icon>\n            </a>\n          </li>\n        </ul>\n        <!-- <form class=\"form-inline my-2 my-lg-0\">\n          <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n          <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n        </form> -->\n      </div>\n    </div>\n  </nav>\n\n  <div id=\"home\" class=\"intro-2 py-5\">\n    <div class=\"full-bg-img\">\n      <mat-card mat-elevation-z8 class=\"mx-5 py-5\" style=\"background-color: rgb(255, 255, 255, 0.4)\">\n        <div class=\"container text-center text-dark wow fadeInUp py-5\">\n          <h1>\n            <p class=\"py-5 text-center\">\n              <b>Welcome To <br> New Buds School!!!</b>\n            </p>\n          </h1>\n          <h4>\n            <p class=\"display-5\">\n              Lets learn together\n            </p>\n          </h4>\n        </div>\n      </mat-card>\n    </div>\n  </div>\n\n</header>\n\n<footer style=\" width: 100%; height: fit-content;\" class=\"intro\">\n\n  <div id=\"events\" class=\"py-5 text-center\">\n    <br><br>\n    <div class=\"col-md-12 img-b mx-auto\">\n      <mat-card-title class=\"text-warning\">\n        <br><br>\n        <h3>Events</h3>\n      </mat-card-title>\n    </div>\n    <br>\n    <div class=\"container\">\n      <app-events></app-events>\n    </div>\n  </div>\n\n  <div id=\"quotes\" class=\"py-5 text-center\">\n    <div class=\"col-md-12 img-b mx-auto\">\n      <mat-card-title class=\"text-warning\">\n        <br><br>\n        <h3>Famous Quotes</h3>\n      </mat-card-title>\n    </div>\n    <br>\n    <div class=\"container\">\n      <app-quotes></app-quotes>\n    </div>\n  </div>\n\n  <div id=\"connect\" class=\"py-5 text-center\">\n    <div class=\"col-md-12 img-b mx-auto\">\n      <mat-card-title class=\"text-warning\">\n        <br><br>\n        <h3>Connect With Us</h3>\n      </mat-card-title>\n    </div>\n    <br>\n    <div class=\"container\">\n      <app-contact></app-contact>\n    </div>\n  </div>\n\n  <div id=\"team\" class=\"py-5 text-center\">\n    <div class=\"col-md-12 img-b mx-auto\">\n      <mat-card-title class=\"text-warning\">\n        <br><br>\n        <h3>Our Team</h3>\n      </mat-card-title>\n    </div>\n    <br>\n    <div class=\"container\">\n      <app-team></app-team>\n    </div>\n  </div>\n\n  <br>\n  <div class=\"container-fluid intro text-white py-5\">\n    <p class=\"row mx-auto\">\n      <img class=\"\" src=\"assets/images/logo.jpg\" alt=\"\" style=\"width: 30px; height: 40px; border-radius: 50%;\">\n      <b class=\"col-md-11 my-auto\">\n        <h5>\n          New Buds School\n        </h5>\n        <h6>\n          Lets Learn Together...\n        </h6>\n      </b>\n    </p>\n    <div class=\"text-center\">\n      <b class=\"my-auto\">\n        <h6>\n          <button mat-raised-button class=\"bg-warning\" disabled>\n            <img src=\"assets/images/gmail.png\" alt=\"\" width=\"20px\" height=\"20px\">\n            <b class=\"text-white\"> Mail us at: newbudsschoolofficial@gmail.com</b>\n          </button>\n        </h6>\n      </b>\n      <button mat-raised-button class=\"bg-warning\">\n        <img src=\"assets/images/fb.png\" alt=\"\" width=\"20px\" height=\"20px\">\n      </button>\n      <button mat-raised-button class=\"bg-warning\">\n        <img src=\"assets/images/linkedin.png\" alt=\"\" width=\"20px\" height=\"20px\">\n      </button>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'New Buds School';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_quotes_quotes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/quotes/quotes.component */ "./src/app/components/quotes/quotes.component.ts");
/* harmony import */ var _components_events_events_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/events/events.component */ "./src/app/components/events/events.component.ts");
/* harmony import */ var _modules_material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/material/material.module */ "./src/app/modules/material/material.module.ts");
/* harmony import */ var _components_quotes_quotes_card_quotes_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/quotes/quotes-card/quotes-card.component */ "./src/app/components/quotes/quotes-card/quotes-card.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/team/team.component */ "./src/app/components/team/team.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_quotes_quotes_component__WEBPACK_IMPORTED_MODULE_5__["QuotesComponent"],
                _components_events_events_component__WEBPACK_IMPORTED_MODULE_6__["EventsComponent"],
                _components_quotes_quotes_card_quotes_card_component__WEBPACK_IMPORTED_MODULE_8__["QuotesCardComponent"],
                _components_team_team_component__WEBPACK_IMPORTED_MODULE_9__["TeamComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _modules_material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-8\">\n  <mat-card class=\"bg-warning\">\n    <mat-card-title>\n        Enter Your Details...\n    </mat-card-title>\n    <hr>\n    <mat-card-content class=\"py-4\" style=\"background-color: rgb(255, 255, 255, 0.4)\">\n      <form #formN=\"ngForm\" id=\"formN\" (ngSubmit)=\"onSubmit(formN)\">\n        <p>\n          <mat-form-field appearance=\"outline\" class=\"col-md-12\">\n            <mat-label>Name</mat-label>\n            <input matInput #name=\"ngModel\" name=\"name\" [class.is-invalid]=\"name.invalid && name.touched\" [(ngModel)]=\"contact.name\" required>\n            <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n            <small [class.d-none]=\" name.valid || name.untouched\" class=\"text-danger\">Name is required</small>\n          </mat-form-field>\n        </p>\n        <p>\n          <mat-form-field appearance=\"outline\" class=\"col-md-12\">\n            <mat-label>Contact Number</mat-label>\n            <input matInput #phone=\"ngModel\" name=\"phone\" type=\"number\" pattern=\"^\\d{10}$\" [class.is-invalid]=\"phone.invalid && phone.touched\" [(ngModel)]=\"contact.phone\" required>\n            <mat-icon matSuffix>call</mat-icon>\n            <!-- <small [class.d-none]=\" phone.valid || phone.untouched\" class=\"text-danger\">Phone Number is required (must be 10 digits)</small> -->\n            <div *ngIf=\"phone.errors && (phone.invalid && phone.touched)\">\n                <small *ngIf=\" phone.errors.required\" class=\"text-danger\">Phone Number is required</small>\n                <small *ngIf=\" phone.errors.pattern\" class=\"text-danger\">Phone Number must be of 10 digits</small>\n            </div>\n          </mat-form-field>\n        </p>\n        <p>\n          <mat-form-field appearance=\"outline\" class=\"col-md-12\">\n            <mat-label>Email</mat-label>\n            <input matInput  #email=\"ngModel\" name=\"email\" email [class.is-invalid]=\"email.invalid && email.touched\" type=\"text\" [(ngModel)]=\"contact.email\" required>\n            <mat-icon matSuffix>contact_mail</mat-icon>\n            <small [class.d-none]=\"email.valid || email.untouched\" class=\"text-danger\">Email is required (Ex. abc@gmail.com)</small>\n          </mat-form-field>\n        </p>\n        <button [disabled]=\"formN.form.invalid\" mat-raised-button type=\"submit\" class=\"btn btn-default bg-danger\">\n          <mat-label>Submit</mat-label>\n          <mat-icon matSuffix>launch</mat-icon>\n        </button>\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_modalClass_Contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modalClass/Contact */ "./src/app/modalClass/Contact.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var ContactComponent = /** @class */ (function () {
    function ContactComponent(snackBar) {
        this.snackBar = snackBar;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.contact = new src_app_modalClass_Contact__WEBPACK_IMPORTED_MODULE_2__["Contact"]();
    };
    ContactComponent.prototype.onSubmit = function (formN) {
        this.openSnackBar("Thank you for your involvement....", this.contact.name);
        this.contact = new src_app_modalClass_Contact__WEBPACK_IMPORTED_MODULE_2__["Contact"]();
        formN.resetForm();
    };
    ContactComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/events/events.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/events/events.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXZlbnRzL2V2ZW50cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/events/events.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/events/events.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container row text-center mx-auto\">\r\n    <div class=\"col-md-4\">\r\n        <mat-card class=\"bg-warning\">\r\n            <mat-card-title>\r\n                {{events[0].title}}\r\n            </mat-card-title>\r\n            <div class=\"mt-4 mx-3\">\r\n                <img mat-card-image src={{events[0].imagePath}} width=\"100%\" height='relative'>\r\n            </div>\r\n            <mat-card-content>\r\n                {{events[0].date}}\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <mat-card class=\"bg-warning\">\r\n            <mat-card-title>\r\n                {{events[1].title}}\r\n            </mat-card-title>\r\n            <div class=\"mt-4 mx-3\">\r\n                <img mat-card-image src={{events[1].imagePath}} width=\"100%\" height='relative'>\r\n            </div>\r\n            <mat-card-content>\r\n                {{events[1].date}}\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <mat-card class=\"bg-warning\">\r\n            <mat-card-title>\r\n                {{events[2].title}}\r\n            </mat-card-title>\r\n            <div class=\"mt-4 mx-3\">\r\n                <img mat-card-image src={{events[2].imagePath}} width=\"100%\" height='relative'>\r\n            </div>\r\n            <mat-card-content>\r\n                {{events[2].date}}\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/events/events.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/events/events.component.ts ***!
  \*******************************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EventsComponent = /** @class */ (function () {
    function EventsComponent() {
        // events =  new Array();
        this.events = [
            {
                id: 1,
                title: "Mother's Day",
                imagePath: "assets/images/mother.jpg",
                date: "12th May'019"
            },
            {
                id: 2,
                title: "Republic Day",
                imagePath: "assets/images/republic.jpg",
                date: "26th January'019"
            },
            {
                id: 3,
                title: "School Picnic",
                imagePath: "assets/images/picnic.jpg",
                date: "12th January'019"
            }
        ];
    }
    EventsComponent.prototype.ngOnInit = function () {
    };
    EventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-events',
            template: __webpack_require__(/*! ./events.component.html */ "./src/app/components/events/events.component.html"),
            styles: [__webpack_require__(/*! ./events.component.css */ "./src/app/components/events/events.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/components/quotes/quotes-card/quotes-card.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/quotes/quotes-card/quotes-card.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card mat-elevation-z8 class=\"example-card my-3 bg-warning\" style=\"height:fit-content\">\n    <div class=\"container-fluid\">\n      <div class=\"row text-center\">\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-2 my-auto mx-5\">\n          <img mat-card-image src={{quote.imagePath}} width=\"100%\" height='relative'>\n        </div>\n        <div class=\"col-md-8\">\n          <mat-card-content>\n  \n            <div class=\"row\">\n              <img src=\"assets/images/seedha.png\" alt=\"\" width=\"80px\" height=\"60px\">\n            </div>\n  \n            <div class=\"row px-5 ml-5\">\n              <p> <b>\n                  <h5> {{ quote.quote }} </h5>\n                </b> </p>\n            </div>\n  \n            <div class=\"row\" style=\"float: right;\">\n              <img src=\"assets/images/ulta.png\" width=\"80px\" height=\"60px\">\n            </div>\n  \n          </mat-card-content>\n          <mat-card-header style=\"float: right;\">\n            <mat-card-title><b>- {{ quote.speaker }}</b></mat-card-title>\n          </mat-card-header>\n        </div>\n      </div>\n    </div>\n  </mat-card>"

/***/ }),

/***/ "./src/app/components/quotes/quotes-card/quotes-card.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/quotes/quotes-card/quotes-card.component.ts ***!
  \************************************************************************/
/*! exports provided: QuotesCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesCardComponent", function() { return QuotesCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuotesCardComponent = /** @class */ (function () {
    function QuotesCardComponent() {
    }
    QuotesCardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], QuotesCardComponent.prototype, "quote", void 0);
    QuotesCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quotes-card',
            template: __webpack_require__(/*! ./quotes-card.component.html */ "./src/app/components/quotes/quotes-card/quotes-card.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuotesCardComponent);
    return QuotesCardComponent;
}());



/***/ }),

/***/ "./src/app/components/quotes/quotes.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/quotes/quotes.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcXVvdGVzL3F1b3Rlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/quotes/quotes.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/quotes/quotes.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n  \n  <div class=\"carousel-inner\">\n\n    <div class=\"carousel-item active\">\n      <app-quotes-card [quote]=\"quotes[0]\"></app-quotes-card>\n    </div>\n    \n    <div class=\"carousel-item \">\n      <app-quotes-card [quote]=\"quotes[1]\"></app-quotes-card>\n    </div>\n    \n    <div class=\"carousel-item \">\n      <app-quotes-card [quote]=\"quotes[2]\"></app-quotes-card>\n    </div>\n\n    <div class=\"carousel-item \">\n      <app-quotes-card [quote]=\"quotes[3]\"></app-quotes-card>\n    </div>\n\n  </div>\n  \n  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  \n  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n\n</div>"

/***/ }),

/***/ "./src/app/components/quotes/quotes.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/quotes/quotes.component.ts ***!
  \*******************************************************/
/*! exports provided: QuotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesComponent", function() { return QuotesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuotesComponent = /** @class */ (function () {
    function QuotesComponent() {
        // quotes =  new Array();
        this.quotes = [
            {
                id: 1,
                speaker: "Mother Teresa",
                imagePath: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE1ODA0OTcxODAxNTQ0MjA1/mother-teresa-9504160-1-402.jpg",
                quote: "The biggest problem in the world today is not poverty or disease but the lack of love and charity and the feeling of being unwanted."
            },
            {
                id: 2,
                speaker: "Swami Vivekananda",
                imagePath: "https://www.sbs.com.au/yourlanguage/sites/sbs.com.au.yourlanguage/files/podcast_images/swami-vivekananda-ili-96-img-1.jpg",
                quote: "We are what our thoughts have made us; so take care about what you think. Words are secondary. Thoughts live; they travel far."
            },
            {
                id: 3,
                speaker: "Dr.A.P.J.Abdul Kalam",
                imagePath: "https://d2yhzr6tx8qnba.cloudfront.net/images/db/2/1a/56b349d43f1a2.jpeg",
                quote: "To succeed in your mission, you must have single-minded devotion to your goal."
            },
            {
                id: 4,
                speaker: "Gautam Buddha",
                imagePath: "http://dontgiveupworld.com/wp-content/uploads/2011/04/wallpaper-gautam-buddha.jpg",
                quote: "All that we are is the result of what we have thought. The mind is everything, what we think we become."
            }
        ];
    }
    QuotesComponent.prototype.ngOnInit = function () {
    };
    QuotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quotes',
            template: __webpack_require__(/*! ./quotes.component.html */ "./src/app/components/quotes/quotes.component.html"),
            styles: [__webpack_require__(/*! ./quotes.component.css */ "./src/app/components/quotes/quotes.component.css")]
        })
    ], QuotesComponent);
    return QuotesComponent;
}());



/***/ }),

/***/ "./src/app/components/team/team.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/team/team.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVhbS90ZWFtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/team/team.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/team/team.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container row text-center mx-auto\">\n  <div class=\"col-md-4 mx-auto\">\n    <mat-card class=\"bg-warning\">\n      <mat-card-title>\n        <u>\n          Our Founder-Chairperson\n        </u>\n      </mat-card-title>\n      <div class=\"mt-4 mx-5\">\n        <img mat-card-image src=\"assets/images/mu.jpeg\" width=\"80px\" height=\"200px\"\n          style=\"border-radius: 50%\">\n      </div>\n      <mat-card-content>\n        <b>\n          Mrs. Geeta Yadav\n        </b>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <div class=\"col-md-4 mx-auto\">\n    <mat-card class=\"bg-warning\">\n      <mat-card-title>\n        <u>\n          Our Co-founder\n        </u>\n      </mat-card-title>\n      <div class=\"mt-4 mx-5\">\n        <img mat-card-image src=\"assets/images/p.jpeg\" width=\"80px\" height=\"200px\"\n          style=\"border-radius: 50%\">\n      </div>\n      <mat-card-content>\n        <b>\n          Mr. Raj Kumar Yadav\n        </b>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/team/team.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/team/team.component.ts ***!
  \***************************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/components/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.css */ "./src/app/components/team/team.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/modalClass/Contact.ts":
/*!***************************************!*\
  !*** ./src/app/modalClass/Contact.ts ***!
  \***************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
var Contact = /** @class */ (function () {
    function Contact() {
    }
    return Contact;
}());



/***/ }),

/***/ "./src/app/modules/material/material.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/material/material.module.ts ***!
  \*****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");










var MaterialComponents = [
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [MaterialComponents],
            exports: [MaterialComponents]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Angular Projects\NewBudsSchool\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
