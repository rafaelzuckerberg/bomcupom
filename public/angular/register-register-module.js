(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/details-benefits/details-benefits.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/details-benefits/details-benefits.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"profile-card\" [ngStyle]=\"{background: 'url(angular/assets/images/backgrounds/register_2.jpg'}\">\n    <!-- <img src=\"angular/assets/user.png\" [alt]=\"fullName\"> -->\n  \n    <h1 class=\"title\">Benefícios </h1>\n  \n    <label>\n      Tenha todos os benefícios de nossos clientes cadastrados.\n    </label>\n\n\n    <ul class=\"a\">\n      <li>Compre em um estabelecimento</li>\n      <li>Receba desconto</li>\n      <li>Ganhe Cupons em nossos estabelecimentos</li>\n      <li>Receba brindes no app</li>\n      <li>Receba</li>\n      <li>Receba</li>\n    </ul>\n  \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register-user/register-user.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register-user/register-user.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"form\">\n    <!-- <p>Use the form below to change your password.</p> -->\n  \n    <div fxLayout=\"row\">\n  \n      <div fxFlex=\"90%\" fxFlex.md=\"60%\" fxFlex.sm=\"50%\" fxFlex.xs=\"100%\" class=\"block-form\">\n  \n        <mat-form-field class=\"full-width\">\n          <input matInput placeholder=\"Nome de usuário\" formControlName=\"name\"\n            autocomplete=\"name\"> \n          <mat-error *ngIf=\"form.controls['name'].hasError('required')\">\n            Campo nome obrigatório\n          </mat-error>\n        </mat-form-field>\n        \n\n        <mat-form-field class=\"full-width\">\n          <input matInput placeholder=\"Email de usuário\" formControlName=\"email\"\n            autocomplete=\"current-password\">\n          <mat-error *ngIf=\"form.controls['email'].hasError('required')\">\n            Campo email obrigatório\n          </mat-error>\n        </mat-form-field>\n  \n\n        <mat-form-field class=\"full-width\">\n          <input matInput placeholder=\"Digite a senha\" formControlName=\"password\" [type]=\"hideNewPassword ? 'password' : 'text'\" autocomplete=\"new-password\">\n          <mat-icon matSuffix (click)=\"hideNewPassword = !hideNewPassword\">\n            {{ hideNewPassword ? 'visibility' : 'visibility_off' }}\n          </mat-icon>  \n          <mat-error *ngIf=\"form.controls['password'].hasError('required')\">\n            Campo senha obrigatório\n          </mat-error>\n        </mat-form-field>\n\n  \n        <mat-form-field class=\"full-width\">\n          <input matInput placeholder=\"Repita a senha\" formControlName=\"password_confirm\" [type]=\"hideNewPassword ? 'password' : 'text'\"\n            autocomplete=\"new-password\">\n          <mat-icon matSuffix (click)=\"hideNewPassword = !hideNewPassword\">\n            {{ hideNewPassword ? 'visibility' : 'visibility_off' }}\n          </mat-icon>  \n          <mat-error *ngIf=\"form.controls['password_confirm'].hasError('required')\">\n            Please confirm your new password\n          </mat-error>\n        </mat-form-field>\n\n\n        <mat-form-field class=\"full-width\">\n          <mat-label>Data de nascimento</mat-label>\n            <input matInput [matDatepicker]=\"picker\" formControlName=\"date_birth\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n\n  \n        <mat-form-field class=\"full-width\">\n          <mat-label>Sexo</mat-label>\n          <mat-select formControlName=\"genre\">            \n            <mat-option value=\"1\">Masculino</mat-option>\n            <mat-option value=\"2\">Feminino</mat-option>\n          </mat-select> \n        </mat-form-field>\n  \n        <button mat-raised-button color=\"primary\" [disabled]=\"form.invalid || disableSubmit\" (click)=\"registerUser()\">Cadastrar</button>\n\n        <a mat-button color=\"primary\" [routerLink]=\"['/auth/login']\">Já sou cliente</a>\n  \n      </div>\n  \n    </div>\n  \n  </form>\n  \n  <!-- <div class=\"password-rules\" fxFlex=\"65%\" fxFlex.sm=\"90%\" fxFlex.xs=\"95%\">\n      Password rules:\n      <mat-list>\n        <mat-list-item>\n          Must be at least 6 characters\n        </mat-list-item>\n  \n        <mat-list-item>\n          Must contain at least one non alphanumeric character\n        </mat-list-item>\n  \n        <mat-list-item>\n          Must contain at least one lowercase ('a'-'z')\n        </mat-list-item>\n  \n        <mat-list-item>\n          Must contain at least one uppercase ('A'-'Z')\n        </mat-list-item>\n      </mat-list>\n    </div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register/register.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register/register.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" fxLayout=\"row\" fxLayoutAlign=\"center none\">\n\n    <div fxFlex=\"95%\">\n  \n      <mat-card>\n        <mat-card-content>\n          <h2>Benefícios BomCupom</h2>\n  \n          <div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\">\n  \n            <div fxFlex=\"65%\" fxFlex.sm=\"95%\" fxFlex.xs=\"95%\">\n              <app-details-benefits></app-details-benefits>\n            </div>\n  \n            <div fxFlex></div>\n  \n            <div fxFlex=\"35%\" fxFlex.sm=\"95%\" fxFlex.xs=\"950%\">\n  \n              <mat-tab-group>\n                <mat-tab label=\"Novo Usuário\">\n                  <app-register-user></app-register-user>\n                </mat-tab>\n              </mat-tab-group>  \n  \n            </div>\n  \n          </div>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  \n  \n  </div>");

/***/ }),

/***/ "./src/app/core/services/register.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/register.service.ts ***!
  \***************************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
        this.url = 'dashboard/customers';
    }
    RegisterService.prototype.addUser = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api + this.url, user);
    };
    RegisterService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/register/details-benefits/details-benefits.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/register/details-benefits/details-benefits.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-card {\r\n    text-align: center;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: auto;\r\n    height: 100%;\r\n    /* background-image: url('angular/assets/images/backgrounds/register_2.jpg'); */\r\n}\r\n\r\nh1 \r\n{\r\n    color: white;\r\n    font-size: 20px;\r\n}\r\n\r\nlabel \r\n{\r\n    color: white;\r\n    font-size: 15px;\r\n}\r\n\r\nul.a \r\n{\r\n    list-style-type: circle;\r\n    color: white;\r\n    font-size: 14px;\r\n    margin-top: 2%;\r\n}\r\n\r\nul.a li \r\n{\r\n    margin-top: 2%;\r\n}\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvZGV0YWlscy1iZW5lZml0cy9kZXRhaWxzLWJlbmVmaXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLCtFQUErRTtBQUNuRjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFHQTs7SUFFSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBOztJQUVJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9kZXRhaWxzLWJlbmVmaXRzL2RldGFpbHMtYmVuZWZpdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWNhcmQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnYW5ndWxhci9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL3JlZ2lzdGVyXzIuanBnJyk7ICovXHJcbn1cclxuXHJcbmgxIFxyXG57XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbmxhYmVsIFxyXG57XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcblxyXG51bC5hIFxyXG57XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcblxyXG51bC5hIGxpIFxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG4gIl19 */");

/***/ }),

/***/ "./src/app/register/details-benefits/details-benefits.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/register/details-benefits/details-benefits.component.ts ***!
  \*************************************************************************/
/*! exports provided: DetailsBenefitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsBenefitsComponent", function() { return DetailsBenefitsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetailsBenefitsComponent = /** @class */ (function () {
    function DetailsBenefitsComponent() {
        this.backgroundImg = 'angular/assets/images/backgrounds/register.jpg';
    }
    DetailsBenefitsComponent.prototype.ngOnInit = function () {
    };
    DetailsBenefitsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details-benefits',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./details-benefits.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/details-benefits/details-benefits.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./details-benefits.component.css */ "./src/app/register/details-benefits/details-benefits.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetailsBenefitsComponent);
    return DetailsBenefitsComponent;
}());



/***/ }),

/***/ "./src/app/register/register-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterRoutingModule", function() { return RegisterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register/register.component.ts");




var routes = [
    {
        path: 'user',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    }
];
var RegisterRoutingModule = /** @class */ (function () {
    function RegisterRoutingModule() {
    }
    RegisterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RegisterRoutingModule);
    return RegisterRoutingModule;
}());



/***/ }),

/***/ "./src/app/register/register-user/register-user.component.css":
/*!********************************************************************!*\
  !*** ./src/app/register/register-user/register-user.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".password-rules .mat-divider {\r\n    position: unset !important;\r\n}\r\n.container{\r\n    padding-top: 20px;\r\n}\r\n.block-form\r\n{\r\n    margin: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXItdXNlci9yZWdpc3Rlci11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUdBOztJQUVJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci11c2VyL3JlZ2lzdGVyLXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXNzd29yZC1ydWxlcyAubWF0LWRpdmlkZXIge1xyXG4gICAgcG9zaXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG5cclxuLmJsb2NrLWZvcm1cclxue1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/register/register-user/register-user.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/register/register-user/register-user.component.ts ***!
  \*******************************************************************/
/*! exports provided: RegisterUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUserComponent", function() { return RegisterUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_services_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../core/services/register.service */ "./src/app/core/services/register.service.ts");
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _core_services_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../core/services/spinner.service */ "./src/app/core/services/spinner.service.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm5/ngx-logger.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");








var RegisterUserComponent = /** @class */ (function () {
    function RegisterUserComponent(authService, service, logger, spinnerService, notificationService) {
        this.authService = authService;
        this.service = service;
        this.logger = logger;
        this.spinnerService = spinnerService;
        this.notificationService = notificationService;
        this.hideCurrentPassword = true;
        this.hideNewPassword = true;
    }
    RegisterUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            password_confirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            date_birth: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            genre: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
        });
        this.form.get('name').valueChanges
            .subscribe(function (val) { _this.name = val; });
        this.form.get('email').valueChanges
            .subscribe(function (val) { _this.email = val; });
        this.form.get('password').valueChanges
            .subscribe(function (val) { _this.password = val; });
        this.form.get('password_confirm').valueChanges
            .subscribe(function (val) { _this.password_confirm = val; });
        this.form.get('date_birth').valueChanges
            .subscribe(function (val) { _this.date_birth = val; });
        this.form.get('genre').valueChanges
            .subscribe(function (val) { _this.genre = val; });
        this.spinnerService.visibility.subscribe(function (value) {
            _this.disableSubmit = value;
        });
    };
    RegisterUserComponent.prototype.registerUser = function () {
        var _this = this;
        if (this.password !== this.password_confirm) {
            this.notificationService.openSnackBar('Senhas não conferem, tente novamente.');
            return;
        }
        // const email = this.authService.getCurrentUser().email;
        var name = 'Cliente teste';
        this.service.addUser(this.form.value)
            .subscribe(function (res) {
            if (res['success']) {
                _this.logger.info("User " + name + " changed password.");
                _this.form.reset();
                _this.notificationService.openSnackBar('Usuário registrado com sucesso!');
            }
        }, function (error) {
            _this.notificationService.openSnackBar(error.error);
        });
        // this.authService.changePassword(email, this.password_confirm, this.password)
        //   .subscribe(
        //     data => {
        //       this.logger.info(`User ${email} changed password.`);
        //       this.form.reset();
        //       this.notificationService.openSnackBar('Your password has been changed.');
        //     },
        //     error => {
        //       this.notificationService.openSnackBar(error.error);
        //     }
        //   );
    };
    RegisterUserComponent.ctorParameters = function () { return [
        { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: _core_services_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"] },
        { type: ngx_logger__WEBPACK_IMPORTED_MODULE_4__["NGXLogger"] },
        { type: _core_services_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"] },
        { type: _core_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"] }
    ]; };
    RegisterUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
            selector: 'app-register-user',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register-user/register-user.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register-user.component.css */ "./src/app/register/register-user/register-user.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _core_services_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"],
            ngx_logger__WEBPACK_IMPORTED_MODULE_4__["NGXLogger"],
            _core_services_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"],
            _core_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]])
    ], RegisterUserComponent);
    return RegisterUserComponent;
}());



/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/register/register-routing.module.ts");
/* harmony import */ var _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register-user/register-user.component */ "./src/app/register/register-user/register-user.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register/register.component.ts");
/* harmony import */ var _details_benefits_details_benefits_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./details-benefits/details-benefits.component */ "./src/app/register/details-benefits/details-benefits.component.ts");









var RegisterModule = /** @class */ (function () {
    function RegisterModule() {
    }
    RegisterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_6__["RegisterUserComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _details_benefits_details_benefits_component__WEBPACK_IMPORTED_MODULE_8__["DetailsBenefitsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], RegisterModule);
    return RegisterModule;
}());



/***/ }),

/***/ "./src/app/register/register/register.component.css":
/*!**********************************************************!*\
  !*** ./src/app/register/register/register.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\nmat-card\r\n{\r\n    margin-top: 3%;\r\n    height: 500px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7O0lBRUksY0FBYztJQUNkLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbm1hdC1jYXJkXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/register/register/register.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/register/register/register.component.ts ***!
  \*********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(titleService) {
        this.titleService = titleService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Meu cadastro');
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-register',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register/register.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/register/register/register.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map