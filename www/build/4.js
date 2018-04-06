webpackJsonp([4],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePageModule", function() { return CreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreatePageModule = /** @class */ (function () {
    function CreatePageModule() {
    }
    CreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create__["a" /* CreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create__["a" /* CreatePage */]),
            ],
        })
    ], CreatePageModule);
    return CreatePageModule;
}());

//# sourceMappingURL=create.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreatePage = /** @class */ (function () {
    function CreatePage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.user = {};
    }
    CreatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreatePage');
    };
    CreatePage.prototype.presentModal = function (elem) {
        var lien = elem + 'Page';
        var modal = this.modalCtrl.create(lien);
        modal.present();
    };
    CreatePage.prototype.catch = function (e) {
        console.error(e);
    };
    CreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create',template:/*ion-inline-start:"E:\CloudStation\transfert\LASTWeModels\src\pages\create\create.html"*/'<!--\n  Generated template for the CreatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Create An Account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <div style="margin-top:15px;background-color:#3B5998; color:white; " class="button">Register with Facebook</div>\n    \n    <div class="ormail">or by E-mail</div>\n\n    <form (ngSubmit)="create()" #registerForm="ngForm">\n\n    <div class="inputDiv">\n      <ion-icon ios="ios-mail-open-outline" md="ios-mail-open-outline"></ion-icon>\n      <input class="inputTA" type="text" name="email" [(ngModel)]="user.email" placeholder="E-Mail" required>\n    </div>\n\n    <div class="inputDiv">\n        <ion-icon ios="ios-contact-outline" md="ios-contact-outline"></ion-icon>\n        <input class="inputTA" type="password" name="password" [(ngModel)]="user.password" placeholder="Password" required>\n      </div>\n\n      <div class="inputDiv">\n        <ion-icon ios="ios-person-outline" md="ios-person-outline"></ion-icon>\n        <input class="inputTA" type="text" name="first_name" [(ngModel)]="user.first_name" placeholder="First Name" required>\n      </div>\n\n      <div class="inputDiv">\n        <ion-icon ios="ios-person-outline" md="ios-person-outline"></ion-icon>\n        <input class="inputTA" type="text" name="last_name" [(ngModel)]="user.last_name" placeholder="Last Name" required>\n      </div>\n  \n      <div class="inputDiv">\n    <div class="inputTA">\n      <ion-icon ios="ios-person-outline" md="ios-person-outline"></ion-icon>\n      <ion-select interface="action-sheet" [(ngModel)]="user.gender" name="gender" placeholder="Gender" required>\n        <ion-option value="f">Female</ion-option>\n        <ion-option value="m">Male</ion-option>\n      </ion-select>\n    </div>\n  </div>\n\n    <div class="inputDiv" ion-button (click)="picker.open()">\n        <ion-icon name="calendar"></ion-icon>\n      <ion-datetime class="inputTA" #picker pickerFormat="DD MMMM YYYY" [min]="datePickerMin" name="birthday0" placeholder="Gender" [(ngModel)]="datePicker"></ion-datetime>\n    </div>\n\n    <button style="margin-top:20px;background-color:white;width:50%; color:black; " class="button" type="submit" [disabled]="!registerForm.form.valid" >Register</button>\n    </form>\n\n    <div class="conditions">By Register here, you accept our <span style="text-decoration: underline;" (tap)="presentModal(\'Application\')">Application Process & Rules</span> and <span style="text-decoration: underline;" (tap)="presentModal(\'Application\')">our Privacy Policy</span></div>\n\n\n</ion-content>\n\n<ion-card *ngIf="userData">\n  <ion-card-header>{{ userData.username }}</ion-card-header>\n  <img [src]="userData.picture" />\n  <ion-card-content>\n    <p>Email: {{ userData.email }}</p>\n    <p>First Name: {{ userData.first_name }}</p>\n    <p>First Name: {{ userData.gender }}</p>\n  </ion-card-content>\n</ion-card>\n'/*ion-inline-end:"E:\CloudStation\transfert\LASTWeModels\src\pages\create\create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], CreatePage);
    return CreatePage;
}());

//# sourceMappingURL=create.js.map

/***/ })

});
//# sourceMappingURL=4.js.map