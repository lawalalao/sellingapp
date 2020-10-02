(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/default/default.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/default/default.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-pane\">\r\n  <h1 class=\"text-center\">Appli front-end - Passez au Full-Stack</h1>\r\n  <div class=\"part-grid\">\r\n    <div class=\"part\" (click)=\"onNavigate('part-one')\">\r\n      <h1>Parties 1+2</h1>\r\n    </div>\r\n    <div class=\"part\" (click)=\"onNavigate('part-three')\">\r\n      <h1>Partie 3</h1>\r\n    </div>\r\n    <div class=\"part\" (click)=\"onNavigate('part-four')\">\r\n      <h1>Partie 4</h1>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n  <h1 class=\"header-title\">\r\n    VendreMesObjets\r\n  </h1>\r\n  <ul class=\"header-navigation\">\r\n    <li class=\"header-navigation-item\" *ngIf=\"part === 1 || (part >= 3 && isAuth)\">\r\n      <a class=\"header-link\" routerLink=\"/{{ partString }}/all-stuff\" routerLinkActive=\"active\">OBJETS A VENDRE</a>\r\n    </li>\r\n    <li class=\"header-navigation-item\" *ngIf=\"part === 1 || (part >= 3 && isAuth)\">\r\n      <a class=\"header-link\" routerLink=\"/{{ partString }}/new-thing\" routerLinkActive=\"active\">VENDRE UN OBJET</a>\r\n    </li>\r\n    <li class=\"header-navigation-item\" *ngIf=\"(part >= 3 && isAuth)\">\r\n      <a class=\"header-link\" style=\"cursor: pointer\" (click)=\"onLogout()\">DECONNEXION</a>\r\n    </li>\r\n    <li class=\"header-navigation-item\" *ngIf=\"(part >= 3 && !isAuth)\">\r\n      <a class=\"header-link\" routerLink=\"/{{ partString }}/auth/login\" routerLinkActive=\"active\">CONNEXION</a>\r\n    </li>\r\n    <li class=\"header-navigation-item\" *ngIf=\"(part >= 3 && !isAuth)\">\r\n      <a class=\"header-link\" routerLink=\"/{{ partString }}/auth/signup\" routerLinkActive=\"active\">INSCRIPTION</a>\r\n    </li>\r\n  </ul>\r\n  <ul class=\"header-navigation nav-end\">\r\n    <li class=\"header-navigation-item font-italic\">\r\n      <a class=\"header-link\" style=\"cursor:pointer\" (click)=\"onBackToParts()\">RETOUR A L'INDEX</a>\r\n    </li>\r\n  </ul>\r\n</header>\r\n<div class=\"hero-image\" *ngIf=\"mode === 'list'\">\r\n  <h2 class=\"hero-text\">\r\n    LE MEILLEUR ENDROIT POUR VENDRE VOS OBJETS\r\n  </h2>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/part-four/modify-thing-with-upload/modify-thing-with-upload.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/part-four/modify-thing-with-upload/modify-thing-with-upload.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-spinner *ngIf=\"loading\"></mat-spinner>\r\n<div *ngIf=\"!loading\" class=\"col-sm-6 offset-sm-3 mt-2\">\r\n  <form [formGroup]=\"thingForm\">\r\n    <div class=\"form-group\">\r\n      <label for=\"title\">Titre</label>\r\n      <input type=\"text\" placeholder=\"Que vendez-vous ?\" id=\"title\" formControlName=\"title\" class=\"form-control\">\r\n    </div>\r\n    <button class=\"btn btn-success\" type=\"button\" (click)=\"filePicker.click()\">Ajouter image</button>\r\n    <input type=\"file\" #filePicker (change)=\"onImagePick($event)\">\r\n    <div class=\"image-preview\" *ngIf=\"imagePreview\">\r\n      <img [src]=\"imagePreview\" alt=\"\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"price\">Prix (en €)</label>\r\n      <input type=\"number\" id=\"price\" class=\"form-control\" formControlName=\"price\" min=\"0\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"description\">Description</label>\r\n      <textarea name=\"description\"\r\n                id=\"description\"\r\n                cols=\"30\" rows=\"7\"\r\n                class=\"form-control\"\r\n                formControlName=\"description\"\r\n                placeholder=\"Décrivez votre objet (type, qualité, etc.)\"></textarea>\r\n    </div>\r\n    <button class=\"btn btn-primary\" (click)=\"onSubmit()\" [disabled]=\"thingForm.invalid\">Valider</button>\r\n    <p class=\"alert-danger\" *ngIf=\"errorMessage\">{{ errorMessage }}</p>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/part-four/new-thing-with-upload/new-thing-with-upload.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/part-four/new-thing-with-upload/new-thing-with-upload.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-spinner *ngIf=\"loading\"></mat-spinner>\r\n<div *ngIf=\"!loading\" class=\"col-sm-6 offset-sm-3 mt-2\">\r\n  <form [formGroup]=\"thingForm\">\r\n    <div class=\"form-group\">\r\n      <label for=\"title\">Titre</label>\r\n      <input type=\"text\" placeholder=\"Que vendez-vous ?\" id=\"title\" formControlName=\"title\" class=\"form-control\">\r\n    </div>\r\n    <button class=\"btn btn-success\" type=\"button\" (click)=\"filePicker.click()\">Ajouter image</button>\r\n    <input type=\"file\" #filePicker (change)=\"onImagePick($event)\">\r\n    <div class=\"image-preview\" *ngIf=\"imagePreview\">\r\n      <img [src]=\"imagePreview\" alt=\"\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"price\">Prix (in €)</label>\r\n      <input type=\"number\" id=\"price\" class=\"form-control\" formControlName=\"price\" min=\"0\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"description\">Description</label>\r\n      <textarea name=\"description\"\r\n                id=\"description\"\r\n                cols=\"30\" rows=\"7\"\r\n                class=\"form-control\"\r\n                formControlName=\"description\"\r\n                placeholder=\"Décrivez votre objet (type, qualité, etc.)\"></textarea>\r\n    </div>\r\n    <button class=\"btn btn-primary\" (click)=\"onSubmit()\" [disabled]=\"thingForm.invalid\">Valider</button>\r\n    <p class=\"alert-danger\" *ngIf=\"errorMessage\">{{ errorMessage }}</p>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/part-four/part-four.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/part-four/part-four.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/part-one/modify-thing/modify-thing.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/part-one/modify-thing/modify-thing.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-spinner *ngIf=\"loading\"></mat-spinner>\r\n<div *ngIf=\"!loading\" class=\"col-sm-6 offset-sm-3 mt-2\">\r\n  <form [formGroup]=\"thingForm\">\r\n    <div class=\"form-group\">\r\n      <label for=\"title\">Titre</label>\r\n      <input type=\"text\" placeholder=\"Que vendez-vous ?\" id=\"title\" formControlName=\"title\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"price\">Prix (en €)</label>\r\n      <input type=\"number\" id=\"price\" class=\"form-control\" formControlName=\"price\" min=\"0\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"description\">Description</label>\r\n      <textarea name=\"description\"\r\n                id=\"description\"\r\n                cols=\"30\" rows=\"7\"\r\n                class=\"form-control\"\r\n                formControlName=\"description\"\r\n                placeholder=\"Décrivez votre objet (type, qualité, etc.)\"></textarea>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"imageUrl\">URL de l'image</label>\r\n      <input type=\"text\" placeholder=\"http://...\" id=\"imageUrl\" formControlName=\"imageUrl\" class=\"form-control\">\r\n    </div>\r\n    <button class=\"btn btn-success\" (click)=\"onSubmit()\" [disabled]=\"thingForm.invalid\">Valider</button>\r\n    <p class=\"alert-danger\" *ngIf=\"errorMessage\">{{ errorMessage }}</p>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/part-one/new-thing/new-thing.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/part-one/new-thing/new-thing.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-spinner *ngIf=\"loading\"></mat-spinner>\r\n<div *ngIf=\"!loading\" class=\"col-sm-6 offset-sm-3 mt-2\">\r\n  <form [formGroup]=\"thingForm\">\r\n    <div class=\"form-group\">\r\n      <label for=\"title\">Titre</label>\r\n      <input type=\"text\" placeholder=\"Que vendez-vous ?\" id=\"title\" formControlName=\"title\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"price\">Prix (en €)</label>\r\n      <input type=\"number\" id=\"price\" class=\"form-control\" formControlName=\"price\" min=\"0\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"description\">Description</label>\r\n      <textarea name=\"description\"\r\n                id=\"description\"\r\n                cols=\"30\" rows=\"7\"\r\n                class=\"form-control\"\r\n                formControlName=\"description\"\r\n                placeholder=\"Décrivez votre objet (type, qualité, etc.)\"></textarea>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"imageUrl\">URL de l'image</label>\r\n      <input type=\"text\" placeholder=\"http://...\" id=\"imageUrl\" formControlName=\"imageUrl\" class=\"form-control\">\r\n    </div>\r\n    <button class=\"btn btn-primary\" (click)=\"onSubmit()\" [disabled]=\"thingForm.invalid\">Valider</button>\r\n    <p class=\"alert-danger\" *ngIf=\"errorMessage\">{{ errorMessage }}</p>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/part-one/part-one.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/part-one/part-one.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/part-one/single-thing/single-thing.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/part-one/single-thing/single-thing.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-spinner *ngIf=\"loading\"></mat-spinner>\r\n<div *ngIf=\"!loading\">\r\n  <button class=\"btn btn-link\" (click)=\"onGoBack()\"><< Retour</button>\r\n  <div class=\"single-thing-pane\">\r\n    <img [src]=\"thing?.imageUrl\" alt=\"\">\r\n    <div class=\"single-thing-info\">\r\n      <h1>{{ thing?.title }}</h1>\r\n      <h2 class=\"single-thing-price\">{{ thing?.price / 100 | currency:'EUR' }}</h2>\r\n      <p>{{ thing?.description }}</p>\r\n      <button class=\"btn btn-success m-1\" (click)=\"onModify()\" [disabled]=\"part >= 3 && userId !== thing?.userId\">Modifier</button>\r\n      <button class=\"btn btn-danger m-1\" (click)=\"onDelete()\" [disabled]=\"part >= 3 && userId !== thing?.userId\">Supprimer</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/part-one/stuff-list/stuff-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/part-one/stuff-list/stuff-list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-spinner *ngIf=\"loading\"></mat-spinner>\r\n<p class=\"text-center\" *ngIf=\"stuff.length <= 0 && !loading\">Rien à vendre !</p>\r\n<div class=\"stuff-grid\" *ngIf=\"stuff.length >= 0\">\r\n  <div class=\"thing-pane\"\r\n       *ngFor=\"let thing of stuff\"\r\n       [ngClass]=\"{'open': thing._id === chosenId}\"\r\n       [ngStyle]=\"{'background-image': 'url(' + thing.imageUrl + ')'}\"\r\n       (click)=\"onProductClicked(thing._id)\">\r\n    <div class=\"thing-info\">\r\n      <h3>\r\n        {{ thing.title }}\r\n      </h3>\r\n      <h5>{{ thing.price / 100 | currency:'EUR' }}</h5>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/part-three/auth/login/login.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/part-three/auth/login/login.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-spinner *ngIf=\"loading\"></mat-spinner>\r\n<div class=\"col-sm-8 offset-sm-2 mt-2\" *ngIf=\"!loading\">\r\n  <form [formGroup]=\"loginForm\">\r\n    <div class=\"form-group\">\r\n      <label for=\"email\">Adresse mail</label>\r\n      <input type=\"email\" id=\"email\" formControlName=\"email\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"password\">Mot de passe</label>\r\n      <input type=\"password\" id=\"password\" formControlName=\"password\" class=\"form-control\">\r\n    </div>\r\n    <button class=\"btn btn-success\" (click)=\"onLogin()\" [disabled]=\"loginForm.invalid\">Connexion</button>\r\n  </form>\r\n  <p>{{ errorMessage }}</p>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/part-three/auth/signup/signup.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/part-three/auth/signup/signup.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-spinner *ngIf=\"loading\"></mat-spinner>\r\n<div class=\"col-sm-8 offset-sm-2 mt-2\" *ngIf=\"!loading\">\r\n  <form [formGroup]=\"signupForm\">\r\n    <div class=\"form-group\">\r\n      <label for=\"email\">Adresse mail</label>\r\n      <input type=\"email\" id=\"email\" formControlName=\"email\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"password\">Mot de passe</label>\r\n      <input type=\"password\" id=\"password\" formControlName=\"password\" class=\"form-control\">\r\n    </div>\r\n    <button class=\"btn btn-success\" (click)=\"onSignup()\" [disabled]=\"signupForm.invalid\">Inscription</button>\r\n  </form>\r\n  <p>{{ errorMessage }}</p>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/part-three/part-three.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/part-three/part-three.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _part_one_part_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./part-one/part-one.component */ "./src/app/part-one/part-one.component.ts");
/* harmony import */ var _part_three_part_three_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./part-three/part-three.component */ "./src/app/part-three/part-three.component.ts");
/* harmony import */ var _part_four_part_four_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./part-four/part-four.component */ "./src/app/part-four/part-four.component.ts");
/* harmony import */ var _default_default_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./default/default.component */ "./src/app/default/default.component.ts");
/* harmony import */ var _part_one_stuff_list_stuff_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./part-one/stuff-list/stuff-list.component */ "./src/app/part-one/stuff-list/stuff-list.component.ts");
/* harmony import */ var _part_one_new_thing_new_thing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./part-one/new-thing/new-thing.component */ "./src/app/part-one/new-thing/new-thing.component.ts");
/* harmony import */ var _part_one_single_thing_single_thing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./part-one/single-thing/single-thing.component */ "./src/app/part-one/single-thing/single-thing.component.ts");
/* harmony import */ var _part_one_modify_thing_modify_thing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./part-one/modify-thing/modify-thing.component */ "./src/app/part-one/modify-thing/modify-thing.component.ts");
/* harmony import */ var _part_three_auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./part-three/auth/login/login.component */ "./src/app/part-three/auth/login/login.component.ts");
/* harmony import */ var _part_three_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./part-three/auth/signup/signup.component */ "./src/app/part-three/auth/signup/signup.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _part_four_new_thing_with_upload_new_thing_with_upload_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./part-four/new-thing-with-upload/new-thing-with-upload.component */ "./src/app/part-four/new-thing-with-upload/new-thing-with-upload.component.ts");
/* harmony import */ var _part_four_modify_thing_with_upload_modify_thing_with_upload_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./part-four/modify-thing-with-upload/modify-thing-with-upload.component */ "./src/app/part-four/modify-thing-with-upload/modify-thing-with-upload.component.ts");
















const routes = [
    { path: 'part-one', component: _part_one_part_one_component__WEBPACK_IMPORTED_MODULE_3__["PartOneComponent"],
        children: [
            { path: 'new-thing', component: _part_one_new_thing_new_thing_component__WEBPACK_IMPORTED_MODULE_8__["NewThingComponent"] },
            { path: 'all-stuff', component: _part_one_stuff_list_stuff_list_component__WEBPACK_IMPORTED_MODULE_7__["StuffListComponent"] },
            { path: 'thing/:id', component: _part_one_single_thing_single_thing_component__WEBPACK_IMPORTED_MODULE_9__["SingleThingComponent"] },
            { path: 'modify-thing/:id', component: _part_one_modify_thing_modify_thing_component__WEBPACK_IMPORTED_MODULE_10__["ModifyThingComponent"] },
            { path: '', pathMatch: 'full', redirectTo: 'all-stuff' },
            { path: '**', redirectTo: 'all-stuff' }
        ]
    },
    { path: 'part-three', component: _part_three_part_three_component__WEBPACK_IMPORTED_MODULE_4__["PartThreeComponent"],
        children: [
            { path: 'new-thing', component: _part_one_new_thing_new_thing_component__WEBPACK_IMPORTED_MODULE_8__["NewThingComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
            { path: 'all-stuff', component: _part_one_stuff_list_stuff_list_component__WEBPACK_IMPORTED_MODULE_7__["StuffListComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
            { path: 'thing/:id', component: _part_one_single_thing_single_thing_component__WEBPACK_IMPORTED_MODULE_9__["SingleThingComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
            { path: 'modify-thing/:id', component: _part_one_modify_thing_modify_thing_component__WEBPACK_IMPORTED_MODULE_10__["ModifyThingComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
            { path: 'auth/login', component: _part_three_auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
            { path: 'auth/signup', component: _part_three_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"] },
            { path: '', pathMatch: 'full', redirectTo: 'auth/login' },
            { path: '**', redirectTo: 'all-stuff' }
        ]
    },
    { path: 'part-four', component: _part_four_part_four_component__WEBPACK_IMPORTED_MODULE_5__["PartFourComponent"],
        children: [
            { path: 'new-thing', component: _part_four_new_thing_with_upload_new_thing_with_upload_component__WEBPACK_IMPORTED_MODULE_14__["NewThingWithUploadComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
            { path: 'all-stuff', component: _part_one_stuff_list_stuff_list_component__WEBPACK_IMPORTED_MODULE_7__["StuffListComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
            { path: 'thing/:id', component: _part_one_single_thing_single_thing_component__WEBPACK_IMPORTED_MODULE_9__["SingleThingComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
            { path: 'modify-thing/:id', component: _part_four_modify_thing_with_upload_modify_thing_with_upload_component__WEBPACK_IMPORTED_MODULE_15__["ModifyThingWithUploadComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
            { path: 'auth/login', component: _part_three_auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
            { path: 'auth/signup', component: _part_three_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"] },
            { path: '', pathMatch: 'full', redirectTo: 'auth/login' },
            { path: '**', redirectTo: 'all-stuff' }
        ]
    },
    { path: 'default', component: _default_default_component__WEBPACK_IMPORTED_MODULE_6__["DefaultComponent"] },
    { path: '', pathMatch: 'full', component: _default_default_component__WEBPACK_IMPORTED_MODULE_6__["DefaultComponent"] },
    { path: '**', redirectTo: '' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
        providers: [
            _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]
        ]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _part_one_part_one_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./part-one/part-one.component */ "./src/app/part-one/part-one.component.ts");
/* harmony import */ var _part_three_part_three_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./part-three/part-three.component */ "./src/app/part-three/part-three.component.ts");
/* harmony import */ var _part_four_part_four_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./part-four/part-four.component */ "./src/app/part-four/part-four.component.ts");
/* harmony import */ var _default_default_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./default/default.component */ "./src/app/default/default.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _part_one_stuff_list_stuff_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./part-one/stuff-list/stuff-list.component */ "./src/app/part-one/stuff-list/stuff-list.component.ts");
/* harmony import */ var _part_one_new_thing_new_thing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./part-one/new-thing/new-thing.component */ "./src/app/part-one/new-thing/new-thing.component.ts");
/* harmony import */ var _part_one_single_thing_single_thing_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./part-one/single-thing/single-thing.component */ "./src/app/part-one/single-thing/single-thing.component.ts");
/* harmony import */ var _part_one_modify_thing_modify_thing_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./part-one/modify-thing/modify-thing.component */ "./src/app/part-one/modify-thing/modify-thing.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _part_three_auth_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./part-three/auth/login/login.component */ "./src/app/part-three/auth/login/login.component.ts");
/* harmony import */ var _part_three_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./part-three/auth/signup/signup.component */ "./src/app/part-three/auth/signup/signup.component.ts");
/* harmony import */ var _part_four_new_thing_with_upload_new_thing_with_upload_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./part-four/new-thing-with-upload/new-thing-with-upload.component */ "./src/app/part-four/new-thing-with-upload/new-thing-with-upload.component.ts");
/* harmony import */ var _part_four_modify_thing_with_upload_modify_thing_with_upload_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./part-four/modify-thing-with-upload/modify-thing-with-upload.component */ "./src/app/part-four/modify-thing-with-upload/modify-thing-with-upload.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./interceptors/auth-interceptor */ "./src/app/interceptors/auth-interceptor.ts");























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _part_one_part_one_component__WEBPACK_IMPORTED_MODULE_4__["PartOneComponent"],
            _part_three_part_three_component__WEBPACK_IMPORTED_MODULE_5__["PartThreeComponent"],
            _part_four_part_four_component__WEBPACK_IMPORTED_MODULE_6__["PartFourComponent"],
            _default_default_component__WEBPACK_IMPORTED_MODULE_7__["DefaultComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
            _part_one_stuff_list_stuff_list_component__WEBPACK_IMPORTED_MODULE_11__["StuffListComponent"],
            _part_one_new_thing_new_thing_component__WEBPACK_IMPORTED_MODULE_12__["NewThingComponent"],
            _part_one_single_thing_single_thing_component__WEBPACK_IMPORTED_MODULE_13__["SingleThingComponent"],
            _part_one_modify_thing_modify_thing_component__WEBPACK_IMPORTED_MODULE_14__["ModifyThingComponent"],
            _part_three_auth_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
            _part_three_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__["SignupComponent"],
            _part_four_new_thing_with_upload_new_thing_with_upload_component__WEBPACK_IMPORTED_MODULE_19__["NewThingWithUploadComponent"],
            _part_four_modify_thing_with_upload_modify_thing_with_upload_component__WEBPACK_IMPORTED_MODULE_20__["ModifyThingWithUploadComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"]
        ],
        providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HTTP_INTERCEPTORS"], useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_22__["AuthInterceptor"], multi: true }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/default/default.component.scss":
/*!************************************************!*\
  !*** ./src/app/default/default.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-pane {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.main-pane h1 {\n  color: #333333;\n}\n.part-grid {\n  display: flex;\n  justify-content: center;\n}\n.part {\n  transition: all 0.3s ease-in-out;\n  position: relative;\n  height: 200px;\n  width: 200px;\n  margin: 5px;\n  background: #333333;\n  cursor: pointer;\n}\n.part:hover {\n  transform: scale(1.05);\n}\n.part h1 {\n  color: white;\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  text-align: center;\n  transform: translateY(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVmYXVsdC9DOlxcVXNlcnNcXE5JVFRcXERlc2t0b3BcXFByb2plY3RzXFxGdWxsLXN0YWNrXFxmcm9udGVuZC9zcmNcXGFwcFxcZGVmYXVsdFxcZGVmYXVsdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGVmYXVsdC9kZWZhdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDQ0Y7QURBRTtFQUNFLGNBQUE7QUNFSjtBREVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDQ0Y7QURFQTtFQUNFLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNDRjtBREFFO0VBQ0Usc0JBQUE7QUNFSjtBREFFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9kZWZhdWx0L2RlZmF1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1wYW5lIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGgxIHtcclxuICAgIGNvbG9yOiAjMzMzMzMzXHJcbiAgfVxyXG59XHJcblxyXG4ucGFydC1ncmlkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucGFydCB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGJhY2tncm91bmQ6ICMzMzMzMzM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICB9XHJcbiAgaDEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbn1cclxuIiwiLm1haW4tcGFuZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4ubWFpbi1wYW5lIGgxIHtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbi5wYXJ0LWdyaWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnBhcnQge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogNXB4O1xuICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGFydDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG4ucGFydCBoMSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/default/default.component.ts":
/*!**********************************************!*\
  !*** ./src/app/default/default.component.ts ***!
  \**********************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let DefaultComponent = class DefaultComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onNavigate(endpoint) {
        this.router.navigate([endpoint]);
    }
};
DefaultComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DefaultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-default',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./default.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/default/default.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./default.component.scss */ "./src/app/default/default.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], DefaultComponent);



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("header {\n  display: flex;\n  align-items: center;\n  background-color: #333333;\n  color: white;\n  padding: 0.2rem 2%;\n}\n\nul {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  margin: 0 0 0 5%;\n  padding: 0;\n}\n\nli {\n  display: inline-block;\n  margin: 0 14px;\n}\n\na {\n  color: white;\n  font-weight: 600;\n}\n\na:hover {\n  text-decoration: none;\n}\n\n.active {\n  background-color: #6eb5ff;\n  color: white;\n  padding: 0.3rem 0.5rem;\n}\n\n.hero-image {\n  position: relative;\n  width: 100%;\n  height: 320px;\n  background-size: cover;\n  background: url('38521354191_0f9b6016bc_b.jpg') no-repeat 0 80%;\n  background-size: cover;\n}\n\n.hero-text {\n  color: #a1c9ff;\n  font-weight: 800;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 40%;\n  text-align: center;\n  -webkit-filter: drop-shadow(2px 2px 3px black);\n          filter: drop-shadow(2px 2px 3px black);\n  font-size: 3rem;\n}\n\n.nav-end {\n  flex-direction: row-reverse;\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcTklUVFxcRGVza3RvcFxcUHJvamVjdHNcXEZ1bGwtc3RhY2tcXGZyb250ZW5kL3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURBRTtFQUNFLHFCQUFBO0FDRUo7O0FERUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsK0RBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAuMnJlbSAyJTtcclxufVxyXG5cclxudWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMCAwIDAgNSU7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxubGkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDAgMTRweDtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgJjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmViNWZmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xyXG59XHJcblxyXG4uaGVyby1pbWFnZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzIwcHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy8zODUyMTM1NDE5MV8wZjliNjAxNmJjX2IuanBnJykgbm8tcmVwZWF0IDAgODAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5oZXJvLXRleHQge1xyXG4gIGNvbG9yOiAjYTFjOWZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB3aWR0aDogNDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAycHggM3B4IGJsYWNrKTtcclxuICBmb250LXNpemU6IDNyZW07XHJcbn1cclxuXHJcbi5uYXYtZW5kIHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcbiIsImhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC4ycmVtIDIlO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAwIDAgNSU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMTRweDtcbn1cblxuYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmViNWZmO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW07XG59XG5cbi5oZXJvLWltYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMjBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzLzM4NTIxMzU0MTkxXzBmOWI2MDE2YmNfYi5qcGdcIikgbm8tcmVwZWF0IDAgODAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uaGVyby10ZXh0IHtcbiAgY29sb3I6ICNhMWM5ZmY7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiA0MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggMnB4IDNweCBibGFjayk7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLm5hdi1lbmQge1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGZsZXgtZ3JvdzogMTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let HeaderComponent = class HeaderComponent {
    constructor(state, auth, router) {
        this.state = state;
        this.auth = auth;
        this.router = router;
    }
    ngOnInit() {
        this.modeSub = this.state.mode$.subscribe((mode) => {
            this.mode = mode;
        });
        this.partSub = this.state.part$.subscribe((part) => {
            this.part = part;
            switch (part) {
                case 1:
                    this.partString = 'part-one';
                    break;
                case 3:
                    this.partString = 'part-three';
                    break;
                case 4:
                    this.partString = 'part-four';
                    break;
                default:
                    break;
            }
        });
        this.isAuthSub = this.auth.isAuth$.subscribe((auth) => {
            this.isAuth = auth;
        });
    }
    onLogout() {
        this.auth.logout();
        this.router.navigate(['/' + this.partString + '/auth/login']);
    }
    onBackToParts() {
        this.router.navigate(['/default']);
    }
    ngOnDestroy() {
        this.modeSub.unsubscribe();
        this.partSub.unsubscribe();
        this.isAuthSub.unsubscribe();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], HeaderComponent);



/***/ }),

/***/ "./src/app/interceptors/auth-interceptor.ts":
/*!**************************************************!*\
  !*** ./src/app/interceptors/auth-interceptor.ts ***!
  \**************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



let AuthInterceptor = class AuthInterceptor {
    constructor(auth) {
        this.auth = auth;
    }
    intercept(req, next) {
        const authToken = this.auth.token;
        const newRequest = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + authToken)
        });
        return next.handle(newRequest);
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], AuthInterceptor);



/***/ }),

/***/ "./src/app/models/Thing.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/Thing.model.ts ***!
  \***************************************/
/*! exports provided: Thing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Thing", function() { return Thing; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Thing {
}


/***/ }),

/***/ "./src/app/part-four/mime-type.validator.ts":
/*!**************************************************!*\
  !*** ./src/app/part-four/mime-type.validator.ts ***!
  \**************************************************/
/*! exports provided: mimeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimeType", function() { return mimeType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");


const mimeType = (control) => {
    if ((typeof control.value) === 'string') {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    }
    const file = control.value;
    const fileReader = new FileReader();
    const frObs = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create((observer) => {
        fileReader.addEventListener('loadend', () => {
            const arr = new Uint8Array(fileReader.result).subarray(0, 4);
            let header = '';
            let isValid = false;
            for (let i = 0; i < arr.length; i++) {
                header += arr[i].toString(16);
            }
            switch (header) {
                case '89504e47':
                    isValid = true;
                    break;
                case 'ffd8ffe0':
                case 'ffd8ffe1':
                case 'ffd8ffe2':
                case 'ffd8ffe3':
                case 'ffd8ffe8':
                    isValid = true;
                    break;
                default:
                    isValid = false; // Or you can use the blob.type as fallback
                    break;
            }
            if (isValid) {
                observer.next(null);
            }
            else {
                observer.next({ invalidMimeType: true });
            }
            observer.complete();
        });
        fileReader.readAsArrayBuffer(file);
    });
    return frObs;
};


/***/ }),

/***/ "./src/app/part-four/modify-thing-with-upload/modify-thing-with-upload.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/part-four/modify-thing-with-upload/modify-thing-with-upload.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input[type=file] {\n  visibility: hidden;\n}\n\n.image-preview img {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydC1mb3VyL21vZGlmeS10aGluZy13aXRoLXVwbG9hZC9DOlxcVXNlcnNcXE5JVFRcXERlc2t0b3BcXFByb2plY3RzXFxGdWxsLXN0YWNrXFxmcm9udGVuZC9zcmNcXGFwcFxccGFydC1mb3VyXFxtb2RpZnktdGhpbmctd2l0aC11cGxvYWRcXG1vZGlmeS10aGluZy13aXRoLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFydC1mb3VyL21vZGlmeS10aGluZy13aXRoLXVwbG9hZC9tb2RpZnktdGhpbmctd2l0aC11cGxvYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVFO0VBQ0UsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFydC1mb3VyL21vZGlmeS10aGluZy13aXRoLXVwbG9hZC9tb2RpZnktdGhpbmctd2l0aC11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbi5pbWFnZS1wcmV2aWV3IHtcclxuICBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iLCJpbnB1dFt0eXBlPWZpbGVdIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uaW1hZ2UtcHJldmlldyBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/part-four/modify-thing-with-upload/modify-thing-with-upload.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/part-four/modify-thing-with-upload/modify-thing-with-upload.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ModifyThingWithUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyThingWithUploadComponent", function() { return ModifyThingWithUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _services_stuff_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/stuff.service */ "./src/app/services/stuff.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _mime_type_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mime-type.validator */ "./src/app/part-four/mime-type.validator.ts");
/* harmony import */ var _models_Thing_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/Thing.model */ "./src/app/models/Thing.model.ts");









let ModifyThingWithUploadComponent = class ModifyThingWithUploadComponent {
    constructor(state, formBuilder, stuffService, route, router, auth) {
        this.state = state;
        this.formBuilder = formBuilder;
        this.stuffService = stuffService;
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.loading = false;
    }
    ngOnInit() {
        this.loading = true;
        this.state.mode$.next('form');
        this.userId = this.auth.userId;
        this.route.params.subscribe((params) => {
            this.stuffService.getThingById(params.id).then((thing) => {
                this.thing = thing;
                this.thingForm = this.formBuilder.group({
                    title: [thing.title, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    description: [thing.description, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    price: [thing.price / 100, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    image: [thing.imageUrl, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _mime_type_validator__WEBPACK_IMPORTED_MODULE_7__["mimeType"]]
                });
                this.imagePreview = thing.imageUrl;
                this.loading = false;
            });
        });
    }
    onSubmit() {
        this.loading = true;
        const thing = new _models_Thing_model__WEBPACK_IMPORTED_MODULE_8__["Thing"]();
        thing._id = this.thing._id;
        thing.title = this.thingForm.get('title').value;
        thing.description = this.thingForm.get('description').value;
        thing.price = this.thingForm.get('price').value * 100;
        thing.imageUrl = '';
        thing.userId = this.userId;
        this.stuffService.modifyThingWithFile(this.thing._id, thing, this.thingForm.get('image').value).then(() => {
            this.thingForm.reset();
            this.loading = false;
            this.router.navigate(['/part-four/all-stuff']);
        }, (error) => {
            this.loading = false;
            this.errorMessage = error.message;
        });
    }
    onImagePick(event) {
        const file = event.target.files[0];
        console.log(file);
        this.thingForm.get('image').patchValue(file);
        this.thingForm.get('image').updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
            if (this.thingForm.get('image').valid) {
                this.imagePreview = reader.result;
            }
            else {
                this.imagePreview = null;
            }
        };
        reader.readAsDataURL(file);
    }
};
ModifyThingWithUploadComponent.ctorParameters = () => [
    { type: _services_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_stuff_service__WEBPACK_IMPORTED_MODULE_4__["StuffService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
ModifyThingWithUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modify-thing-with-upload',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modify-thing-with-upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/part-four/modify-thing-with-upload/modify-thing-with-upload.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modify-thing-with-upload.component.scss */ "./src/app/part-four/modify-thing-with-upload/modify-thing-with-upload.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_stuff_service__WEBPACK_IMPORTED_MODULE_4__["StuffService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
], ModifyThingWithUploadComponent);



/***/ }),

/***/ "./src/app/part-four/new-thing-with-upload/new-thing-with-upload.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/part-four/new-thing-with-upload/new-thing-with-upload.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input[type=file] {\n  visibility: hidden;\n}\n\n.image-preview img {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydC1mb3VyL25ldy10aGluZy13aXRoLXVwbG9hZC9DOlxcVXNlcnNcXE5JVFRcXERlc2t0b3BcXFByb2plY3RzXFxGdWxsLXN0YWNrXFxmcm9udGVuZC9zcmNcXGFwcFxccGFydC1mb3VyXFxuZXctdGhpbmctd2l0aC11cGxvYWRcXG5ldy10aGluZy13aXRoLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFydC1mb3VyL25ldy10aGluZy13aXRoLXVwbG9hZC9uZXctdGhpbmctd2l0aC11cGxvYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVFO0VBQ0UsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFydC1mb3VyL25ldy10aGluZy13aXRoLXVwbG9hZC9uZXctdGhpbmctd2l0aC11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbi5pbWFnZS1wcmV2aWV3IHtcclxuICBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iLCJpbnB1dFt0eXBlPWZpbGVdIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uaW1hZ2UtcHJldmlldyBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/part-four/new-thing-with-upload/new-thing-with-upload.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/part-four/new-thing-with-upload/new-thing-with-upload.component.ts ***!
  \************************************************************************************/
/*! exports provided: NewThingWithUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewThingWithUploadComponent", function() { return NewThingWithUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _services_stuff_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/stuff.service */ "./src/app/services/stuff.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _models_Thing_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/Thing.model */ "./src/app/models/Thing.model.ts");
/* harmony import */ var _mime_type_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../mime-type.validator */ "./src/app/part-four/mime-type.validator.ts");









let NewThingWithUploadComponent = class NewThingWithUploadComponent {
    constructor(state, formBuilder, stuffService, router, auth) {
        this.state = state;
        this.formBuilder = formBuilder;
        this.stuffService = stuffService;
        this.router = router;
        this.auth = auth;
        this.loading = false;
    }
    ngOnInit() {
        this.state.mode$.next('form');
        this.thingForm = this.formBuilder.group({
            title: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            image: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _mime_type_validator__WEBPACK_IMPORTED_MODULE_8__["mimeType"]]
        });
        this.userId = this.auth.userId;
    }
    onSubmit() {
        this.loading = true;
        const thing = new _models_Thing_model__WEBPACK_IMPORTED_MODULE_7__["Thing"]();
        thing.title = this.thingForm.get('title').value;
        thing.description = this.thingForm.get('description').value;
        thing.price = this.thingForm.get('price').value * 100;
        thing.imageUrl = '';
        thing.userId = this.userId;
        this.stuffService.createNewThingWithFile(thing, this.thingForm.get('image').value).then(() => {
            this.thingForm.reset();
            this.loading = false;
            this.router.navigate(['/part-four/all-stuff']);
        }, (error) => {
            this.loading = false;
            this.errorMessage = error.message;
        });
    }
    onImagePick(event) {
        const file = event.target.files[0];
        this.thingForm.get('image').patchValue(file);
        this.thingForm.get('image').updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
            if (this.thingForm.get('image').valid) {
                this.imagePreview = reader.result;
            }
            else {
                this.imagePreview = null;
            }
        };
        reader.readAsDataURL(file);
    }
};
NewThingWithUploadComponent.ctorParameters = () => [
    { type: _services_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_stuff_service__WEBPACK_IMPORTED_MODULE_4__["StuffService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
NewThingWithUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-thing-with-upload',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-thing-with-upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/part-four/new-thing-with-upload/new-thing-with-upload.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-thing-with-upload.component.scss */ "./src/app/part-four/new-thing-with-upload/new-thing-with-upload.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_stuff_service__WEBPACK_IMPORTED_MODULE_4__["StuffService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
], NewThingWithUploadComponent);



/***/ }),

/***/ "./src/app/part-four/part-four.component.scss":
/*!****************************************************!*\
  !*** ./src/app/part-four/part-four.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnQtZm91ci9wYXJ0LWZvdXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/part-four/part-four.component.ts":
/*!**************************************************!*\
  !*** ./src/app/part-four/part-four.component.ts ***!
  \**************************************************/
/*! exports provided: PartFourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartFourComponent", function() { return PartFourComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let PartFourComponent = class PartFourComponent {
    constructor(state, auth) {
        this.state = state;
        this.auth = auth;
    }
    ngOnInit() {
        this.auth.isAuth$.next(false);
        this.auth.userId = '';
        this.auth.token = '';
        this.state.part$.next(4);
        this.state.part = 4;
    }
    ngOnDestroy() {
    }
};
PartFourComponent.ctorParameters = () => [
    { type: _services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
PartFourComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-part-four',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./part-four.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/part-four/part-four.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./part-four.component.scss */ "./src/app/part-four/part-four.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], PartFourComponent);



/***/ }),

/***/ "./src/app/part-one/modify-thing/modify-thing.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/part-one/modify-thing/modify-thing.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnQtb25lL21vZGlmeS10aGluZy9tb2RpZnktdGhpbmcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/part-one/modify-thing/modify-thing.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/part-one/modify-thing/modify-thing.component.ts ***!
  \*****************************************************************/
/*! exports provided: ModifyThingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyThingComponent", function() { return ModifyThingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _services_stuff_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/stuff.service */ "./src/app/services/stuff.service.ts");
/* harmony import */ var _models_Thing_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/Thing.model */ "./src/app/models/Thing.model.ts");







let ModifyThingComponent = class ModifyThingComponent {
    constructor(formBuilder, route, router, state, stuffService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.state = state;
        this.stuffService = stuffService;
        this.loading = false;
    }
    ngOnInit() {
        this.loading = true;
        this.thingForm = this.formBuilder.group({
            title: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            imageUrl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.partSub = this.state.part$.subscribe((part) => {
            this.part = part;
        });
        this.state.mode$.next('form');
        this.route.params.subscribe((params) => {
            this.stuffService.getThingById(params.id).then((thing) => {
                this.thing = thing;
                this.thingForm.get('title').setValue(this.thing.title);
                this.thingForm.get('description').setValue(this.thing.description);
                this.thingForm.get('price').setValue(this.thing.price / 100);
                this.thingForm.get('imageUrl').setValue(this.thing.imageUrl);
                this.loading = false;
            });
        });
    }
    onSubmit() {
        this.loading = true;
        const thing = new _models_Thing_model__WEBPACK_IMPORTED_MODULE_6__["Thing"]();
        thing.title = this.thingForm.get('title').value;
        thing.description = this.thingForm.get('description').value;
        thing.price = this.thingForm.get('price').value * 100;
        thing.imageUrl = this.thingForm.get('imageUrl').value;
        thing._id = new Date().getTime().toString();
        thing.userId = this.thing.userId;
        this.stuffService.modifyThing(this.thing._id, thing).then(() => {
            this.thingForm.reset();
            this.loading = false;
            switch (this.part) {
                case 1:
                case 2:
                    this.router.navigate(['/part-one/all-stuff']);
                    break;
                case 3:
                    this.router.navigate(['/part-three/all-stuff']);
                    break;
                case 4:
                    this.router.navigate(['/part-four/all-stuff']);
                    break;
            }
        }, (error) => {
            this.loading = false;
            this.errorMessage = error.message;
        });
    }
};
ModifyThingComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"] },
    { type: _services_stuff_service__WEBPACK_IMPORTED_MODULE_5__["StuffService"] }
];
ModifyThingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modify-thing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modify-thing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/part-one/modify-thing/modify-thing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modify-thing.component.scss */ "./src/app/part-one/modify-thing/modify-thing.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"],
        _services_stuff_service__WEBPACK_IMPORTED_MODULE_5__["StuffService"]])
], ModifyThingComponent);



/***/ }),

/***/ "./src/app/part-one/new-thing/new-thing.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/part-one/new-thing/new-thing.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnQtb25lL25ldy10aGluZy9uZXctdGhpbmcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/part-one/new-thing/new-thing.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/part-one/new-thing/new-thing.component.ts ***!
  \***********************************************************/
/*! exports provided: NewThingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewThingComponent", function() { return NewThingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _models_Thing_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/Thing.model */ "./src/app/models/Thing.model.ts");
/* harmony import */ var _services_stuff_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/stuff.service */ "./src/app/services/stuff.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");








let NewThingComponent = class NewThingComponent {
    constructor(state, formBuilder, stuffService, router, auth) {
        this.state = state;
        this.formBuilder = formBuilder;
        this.stuffService = stuffService;
        this.router = router;
        this.auth = auth;
        this.loading = false;
    }
    ngOnInit() {
        this.state.mode$.next('form');
        this.thingForm = this.formBuilder.group({
            title: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            price: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            imageUrl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.partSub = this.state.part$.subscribe((part) => {
            this.part = part;
        });
        this.userId = this.part >= 3 ? this.auth.userId : 'userID40282382';
    }
    onSubmit() {
        this.loading = true;
        const thing = new _models_Thing_model__WEBPACK_IMPORTED_MODULE_4__["Thing"]();
        thing.title = this.thingForm.get('title').value;
        thing.description = this.thingForm.get('description').value;
        thing.price = this.thingForm.get('price').value * 100;
        thing.imageUrl = this.thingForm.get('imageUrl').value;
        thing._id = new Date().getTime().toString();
        thing.userId = this.userId;
        this.stuffService.createNewThing(thing).then(() => {
            this.thingForm.reset();
            this.loading = false;
            switch (this.part) {
                case 1:
                case 2:
                    this.router.navigate(['/part-one/all-stuff']);
                    break;
                case 3:
                    this.router.navigate(['/part-three/all-stuff']);
                    break;
                case 4:
                    this.router.navigate(['/part-four/all-stuff']);
                    break;
            }
        }).catch((error) => {
            this.loading = false;
            this.errorMessage = error.message;
        });
    }
    ngOnDestroy() {
        this.partSub.unsubscribe();
    }
};
NewThingComponent.ctorParameters = () => [
    { type: _services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_stuff_service__WEBPACK_IMPORTED_MODULE_5__["StuffService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
];
NewThingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-thing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-thing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/part-one/new-thing/new-thing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-thing.component.scss */ "./src/app/part-one/new-thing/new-thing.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _services_stuff_service__WEBPACK_IMPORTED_MODULE_5__["StuffService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
], NewThingComponent);



/***/ }),

/***/ "./src/app/part-one/part-one.component.scss":
/*!**************************************************!*\
  !*** ./src/app/part-one/part-one.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnQtb25lL3BhcnQtb25lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/part-one/part-one.component.ts":
/*!************************************************!*\
  !*** ./src/app/part-one/part-one.component.ts ***!
  \************************************************/
/*! exports provided: PartOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartOneComponent", function() { return PartOneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/state.service */ "./src/app/services/state.service.ts");



let PartOneComponent = class PartOneComponent {
    constructor(state) {
        this.state = state;
    }
    ngOnInit() {
        this.state.part$.next(1);
        this.state.part = 1;
    }
};
PartOneComponent.ctorParameters = () => [
    { type: _services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"] }
];
PartOneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-part-one',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./part-one.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/part-one/part-one.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./part-one.component.scss */ "./src/app/part-one/part-one.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]])
], PartOneComponent);



/***/ }),

/***/ "./src/app/part-one/single-thing/single-thing.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/part-one/single-thing/single-thing.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".single-thing-pane {\n  position: relative;\n  width: 60%;\n  margin: auto;\n}\n\nimg {\n  position: relative;\n  width: 100%;\n}\n\n.single-thing-info {\n  width: 100%;\n}\n\n.single-thing-price {\n  color: #6eb5ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydC1vbmUvc2luZ2xlLXRoaW5nL0M6XFxVc2Vyc1xcTklUVFxcRGVza3RvcFxcUHJvamVjdHNcXEZ1bGwtc3RhY2tcXGZyb250ZW5kL3NyY1xcYXBwXFxwYXJ0LW9uZVxcc2luZ2xlLXRoaW5nXFxzaW5nbGUtdGhpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhcnQtb25lL3NpbmdsZS10aGluZy9zaW5nbGUtdGhpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhcnQtb25lL3NpbmdsZS10aGluZy9zaW5nbGUtdGhpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2luZ2xlLXRoaW5nLXBhbmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNjAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuaW1nIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zaW5nbGUtdGhpbmctaW5mbyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zaW5nbGUtdGhpbmctcHJpY2Uge1xyXG4gIGNvbG9yOiAjNmViNWZmO1xyXG59XHJcbiIsIi5zaW5nbGUtdGhpbmctcGFuZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5pbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2luZ2xlLXRoaW5nLWluZm8ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNpbmdsZS10aGluZy1wcmljZSB7XG4gIGNvbG9yOiAjNmViNWZmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/part-one/single-thing/single-thing.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/part-one/single-thing/single-thing.component.ts ***!
  \*****************************************************************/
/*! exports provided: SingleThingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleThingComponent", function() { return SingleThingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_stuff_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/stuff.service */ "./src/app/services/stuff.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");






let SingleThingComponent = class SingleThingComponent {
    constructor(state, router, route, stuffService, auth) {
        this.state = state;
        this.router = router;
        this.route = route;
        this.stuffService = stuffService;
        this.auth = auth;
    }
    ngOnInit() {
        this.loading = true;
        this.state.mode$.next('single-thing');
        this.userId = this.auth.userId ? this.auth.userId : 'userID40282382';
        this.route.params.subscribe((params) => {
            this.stuffService.getThingById(params.id).then((thing) => {
                this.loading = false;
                this.thing = thing;
            });
        });
        this.partSub = this.state.part$.subscribe((part) => {
            this.part = part;
            if (part >= 3) {
                this.userId = this.auth.userId;
            }
        });
    }
    onGoBack() {
        if (this.part === 1) {
            this.router.navigate(['/part-one/all-stuff']);
        }
        else if (this.part === 3) {
            this.router.navigate(['/part-three/all-stuff']);
        }
        else if (this.part === 4) {
            this.router.navigate(['/part-four/all-stuff']);
        }
    }
    onModify() {
        switch (this.part) {
            case 1:
            case 2:
                this.router.navigate(['/part-one/modify-thing/' + this.thing._id]);
                break;
            case 3:
                this.router.navigate(['/part-three/modify-thing/' + this.thing._id]);
                break;
            case 4:
                this.router.navigate(['/part-four/modify-thing/' + this.thing._id]);
                break;
        }
    }
    onDelete() {
        this.loading = true;
        this.stuffService.deleteThing(this.thing._id).then(() => {
            this.loading = false;
            switch (this.part) {
                case 1:
                case 2:
                    this.router.navigate(['/part-one/all-stuff']);
                    break;
                case 3:
                    this.router.navigate(['/part-three/all-stuff']);
                    break;
                case 4:
                    this.router.navigate(['/part-four/all-stuff']);
                    break;
            }
        });
    }
    ngOnDestroy() {
        this.partSub.unsubscribe();
    }
};
SingleThingComponent.ctorParameters = () => [
    { type: _services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_stuff_service__WEBPACK_IMPORTED_MODULE_4__["StuffService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
SingleThingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-single-thing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./single-thing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/part-one/single-thing/single-thing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./single-thing.component.scss */ "./src/app/part-one/single-thing/single-thing.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_stuff_service__WEBPACK_IMPORTED_MODULE_4__["StuffService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
], SingleThingComponent);



/***/ }),

/***/ "./src/app/part-one/stuff-list/stuff-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/part-one/stuff-list/stuff-list.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".stuff-grid {\n  width: 80%;\n  margin: auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.thing-pane {\n  transition: transform 0.3s ease-in-out;\n  position: relative;\n  width: 270px;\n  height: 270px;\n  margin: 5px;\n  background-size: cover;\n  background-position: center;\n  box-shadow: 1px 1px 3px #333333;\n  cursor: pointer;\n}\n\n.thing-pane:hover {\n  transform: scale(1.03);\n}\n\n.thing-info {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  height: 50%;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: white;\n  padding: 10px;\n}\n\n.thing-info h3 {\n  font-weight: 800;\n}\n\n.thing-info h5 {\n  color: #6eb5ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydC1vbmUvc3R1ZmYtbGlzdC9DOlxcVXNlcnNcXE5JVFRcXERlc2t0b3BcXFByb2plY3RzXFxGdWxsLXN0YWNrXFxmcm9udGVuZC9zcmNcXGFwcFxccGFydC1vbmVcXHN0dWZmLWxpc3RcXHN0dWZmLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhcnQtb25lL3N0dWZmLWxpc3Qvc3R1ZmYtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0Usc0NBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURBRTtFQUNFLHNCQUFBO0FDRUo7O0FERUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNDRjs7QURBRTtFQUNFLGdCQUFBO0FDRUo7O0FEQUU7RUFDRSxjQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYXJ0LW9uZS9zdHVmZi1saXN0L3N0dWZmLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3R1ZmYtZ3JpZCB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aGluZy1wYW5lIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDI3MHB4O1xyXG4gIGhlaWdodDogMjcwcHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzMzMzMzMztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xyXG4gIH1cclxufVxyXG5cclxuLnRoaW5nLWluZm8ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGgzIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgfVxyXG4gIGg1IHtcclxuICAgIGNvbG9yOiAjNmViNWZmO1xyXG4gIH1cclxufVxyXG4iLCIuc3R1ZmYtZ3JpZCB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRoaW5nLXBhbmUge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjcwcHg7XG4gIGhlaWdodDogMjcwcHg7XG4gIG1hcmdpbjogNXB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICMzMzMzMzM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50aGluZy1wYW5lOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbn1cblxuLnRoaW5nLWluZm8ge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbn1cbi50aGluZy1pbmZvIGgzIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbi50aGluZy1pbmZvIGg1IHtcbiAgY29sb3I6ICM2ZWI1ZmY7XG59Il19 */");

/***/ }),

/***/ "./src/app/part-one/stuff-list/stuff-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/part-one/stuff-list/stuff-list.component.ts ***!
  \*************************************************************/
/*! exports provided: StuffListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StuffListComponent", function() { return StuffListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _services_stuff_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/stuff.service */ "./src/app/services/stuff.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let StuffListComponent = class StuffListComponent {
    constructor(state, stuffService, router) {
        this.state = state;
        this.stuffService = stuffService;
        this.router = router;
        this.stuff = [];
    }
    ngOnInit() {
        this.loading = true;
        this.state.mode$.next('list');
        this.stuffSub = this.stuffService.stuff$.subscribe((stuff) => {
            this.stuff = stuff;
            this.loading = false;
        });
        this.partSub = this.state.part$.subscribe((part) => {
            this.part = part;
        });
        this.stuffService.getStuff();
    }
    onProductClicked(id) {
        if (this.part === 1) {
            this.router.navigate(['/part-one/thing/' + id]);
        }
        else if (this.part === 3) {
            this.router.navigate(['/part-three/thing/' + id]);
        }
        else if (this.part === 4) {
            this.router.navigate(['/part-four/thing/' + id]);
        }
    }
    ngOnDestroy() {
        this.stuffSub.unsubscribe();
        this.partSub.unsubscribe();
    }
};
StuffListComponent.ctorParameters = () => [
    { type: _services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"] },
    { type: _services_stuff_service__WEBPACK_IMPORTED_MODULE_3__["StuffService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
StuffListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stuff-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stuff-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/part-one/stuff-list/stuff-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stuff-list.component.scss */ "./src/app/part-one/stuff-list/stuff-list.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"],
        _services_stuff_service__WEBPACK_IMPORTED_MODULE_3__["StuffService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], StuffListComponent);



/***/ }),

/***/ "./src/app/part-three/auth/login/login.component.scss":
/*!************************************************************!*\
  !*** ./src/app/part-three/auth/login/login.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnQtdGhyZWUvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/part-three/auth/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/part-three/auth/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/state.service */ "./src/app/services/state.service.ts");






let LoginComponent = class LoginComponent {
    constructor(formBuilder, router, auth, state) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.auth = auth;
        this.state = state;
        this.loading = false;
    }
    ngOnInit() {
        this.state.mode$.next('form');
        this.loginForm = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    onLogin() {
        this.loading = true;
        const email = this.loginForm.get('email').value;
        const password = this.loginForm.get('password').value;
        this.auth.login(email, password).then(() => {
            this.loading = false;
            if (this.state.part === 3) {
                this.router.navigate(['/part-three/all-stuff']);
            }
            else if (this.state.part === 4) {
                this.router.navigate(['/part-four/all-stuff']);
            }
        }).catch((error) => {
            this.loading = false;
            this.errorMessage = error.message;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _services_state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/part-three/auth/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/part-three/auth/login/login.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _services_state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/part-three/auth/signup/signup.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/part-three/auth/signup/signup.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnQtdGhyZWUvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/part-three/auth/signup/signup.component.ts":
/*!************************************************************!*\
  !*** ./src/app/part-three/auth/signup/signup.component.ts ***!
  \************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/state.service */ "./src/app/services/state.service.ts");






let SignupComponent = class SignupComponent {
    constructor(formBuilder, router, auth, state) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.auth = auth;
        this.state = state;
        this.loading = false;
    }
    ngOnInit() {
        this.state.mode$.next('form');
        this.signupForm = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    onSignup() {
        this.loading = true;
        const email = this.signupForm.get('email').value;
        const password = this.signupForm.get('password').value;
        this.auth.createNewUser(email, password).then(() => {
            this.loading = false;
            if (this.state.part === 3) {
                this.router.navigate(['/part-three/all-stuff']);
            }
            else if (this.state.part === 4) {
                this.router.navigate(['/part-four/all-stuff']);
            }
        }).catch((error) => {
            this.loading = false;
            this.errorMessage = error.message;
        });
    }
};
SignupComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _services_state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/part-three/auth/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.scss */ "./src/app/part-three/auth/signup/signup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _services_state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"]])
], SignupComponent);



/***/ }),

/***/ "./src/app/part-three/part-three.component.scss":
/*!******************************************************!*\
  !*** ./src/app/part-three/part-three.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnQtdGhyZWUvcGFydC10aHJlZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/part-three/part-three.component.ts":
/*!****************************************************!*\
  !*** ./src/app/part-three/part-three.component.ts ***!
  \****************************************************/
/*! exports provided: PartThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartThreeComponent", function() { return PartThreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let PartThreeComponent = class PartThreeComponent {
    constructor(state, auth) {
        this.state = state;
        this.auth = auth;
    }
    ngOnInit() {
        this.auth.isAuth$.next(false);
        this.auth.userId = '';
        this.auth.token = '';
        this.state.part$.next(3);
        this.state.part = 3;
    }
    ngOnDestroy() {
    }
};
PartThreeComponent.ctorParameters = () => [
    { type: _services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
PartThreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-part-three',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./part-three.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/part-three/part-three.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./part-three.component.scss */ "./src/app/part-three/part-three.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], PartThreeComponent);



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state.service */ "./src/app/services/state.service.ts");






let AuthGuard = class AuthGuard {
    constructor(auth, state, router) {
        this.auth = auth;
        this.state = state;
        this.router = router;
    }
    canActivate(route, state) {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create((observer) => {
            this.auth.isAuth$.subscribe((auth) => {
                if (!auth) {
                    this.state.part$.subscribe((part) => {
                        if (part === 3) {
                            this.router.navigate(['/part-three/auth/login']);
                        }
                        else if (part === 4) {
                            this.router.navigate(['/part-four/auth/login']);
                        }
                    });
                }
                observer.next(true);
            });
        });
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let AuthService = class AuthService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.isAuth$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
    }
    createNewUser(email, password) {
        return new Promise((resolve, reject) => {
            this.http.post('http://localhost:3000/api/auth/signup', { email: email, password: password })
                .subscribe(() => {
                this.login(email, password).then(() => {
                    resolve();
                }).catch((error) => {
                    reject(error);
                });
            }, (error) => {
                reject(error);
            });
        });
    }
    login(email, password) {
        return new Promise((resolve, reject) => {
            this.http.post('http://localhost:3000/api/auth/login', { email: email, password: password })
                .subscribe((authData) => {
                this.token = authData.token;
                this.userId = authData.userId;
                this.isAuth$.next(true);
                resolve();
            }, (error) => {
                reject(error);
            });
        });
    }
    logout() {
        this.isAuth$.next(false);
        this.userId = null;
        this.token = null;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
], AuthService);



/***/ }),

/***/ "./src/app/services/state.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/state.service.ts ***!
  \*******************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let StateService = class StateService {
    constructor() {
        this.part$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.part = 0;
        this.mode$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
    }
};
StateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], StateService);



/***/ }),

/***/ "./src/app/services/stuff.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/stuff.service.ts ***!
  \*******************************************/
/*! exports provided: StuffService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StuffService", function() { return StuffService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let StuffService = class StuffService {
    constructor(http) {
        this.http = http;
        this.stuff = [
            {
                _id: '324sdfmoih3',
                title: 'Mon objet',
                description: 'A propos de mon objet',
                imageUrl: 'https://c.pxhere.com/photos/30/d6/photographer_camera_lens_slr_photography_hands-1079029.jpg!d',
                price: 4900,
                userId: 'will'
            },
            {
                _id: '324sdfmoih4',
                title: 'Un autre objet',
                description: 'A propos de mon autre objet',
                imageUrl: 'https://www.publicdomainpictures.net/pictures/10000/velka/1536-1249273362hbHb.jpg',
                price: 2600,
                userId: 'will'
            },
        ];
        this.stuff$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    getStuff() {
        this.http.get('http://localhost:3000/api/stuff').subscribe((stuff) => {
            if (stuff) {
                this.stuff = stuff;
                this.emitStuff();
            }
        }, (error) => {
            console.log(error);
        });
    }
    emitStuff() {
        this.stuff$.next(this.stuff);
    }
    getThingById(id) {
        return new Promise((resolve, reject) => {
            this.http.get('http://localhost:3000/api/stuff/' + id).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }
    createNewThing(thing) {
        return new Promise((resolve, reject) => {
            this.http.post('http://localhost:3000/api/stuff', thing).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }
    createNewThingWithFile(thing, image) {
        return new Promise((resolve, reject) => {
            const thingData = new FormData();
            thingData.append('thing', JSON.stringify(thing));
            thingData.append('image', image, thing.title);
            this.http.post('http://localhost:3000/api/stuff', thingData).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }
    modifyThing(id, thing) {
        return new Promise((resolve, reject) => {
            this.http.put('http://localhost:3000/api/stuff/' + id, thing).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }
    modifyThingWithFile(id, thing, image) {
        return new Promise((resolve, reject) => {
            let thingData;
            if (typeof image === 'string') {
                thing.imageUrl = image;
                thingData = thing;
            }
            else {
                thingData = new FormData();
                thingData.append('thing', JSON.stringify(thing));
                thingData.append('image', image, thing.title);
            }
            this.http.put('http://localhost:3000/api/stuff/' + id, thingData).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }
    deleteThing(id) {
        return new Promise((resolve, reject) => {
            this.http.delete('http://localhost:3000/api/stuff/' + id).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }
};
StuffService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
StuffService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], StuffService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\NITT\Desktop\Projects\Full-stack\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map