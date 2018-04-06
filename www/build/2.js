webpackJsonp([2],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_savevalue_savevalue__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, viewCtrl, get) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.get = get;
        this.id = 1;
        this.user_height = 0;
        this.user_hips = 0;
        this.user_profile = [];
        this.title = "My Profile";
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ProfilePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.get.getProfile().subscribe(function (profile) {
            _this.user_profile = profile;
            console.log(_this.user_profile);
            _this.user_height = _this.user_profile.user_height;
            _this.user_hips = _this.user_profile.user_hips;
            console.log(_this.user_height);
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"E:\CloudStation\transfert\LASTWeModels\src\pages\profile\profile.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      {{title}}\n    </ion-title>\n\n    <ion-buttons start>\n      <button ion-button (tap)="dismiss()">\n        <span ion-text color="primary" showWhen="ios,android">Close</span>\n      </button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class="black">\n\n  <ion-grid class="black full">\n    \n    <ion-row class="row50" class="blue">\n      <ion-col col-5>\n        <div style="text-transform:uppercase;text-align:center;font-size:24px;" class="name">Anika T.</div>\n        <div style="text-transform:uppercase;text-align:center;font-size:18px;color:grey;" class="localisation">Paris, IDF</div>\n        <br>\n        <div style="text-transform:uppercase;text-align:center;font-size:18px;color:grey;white-space:nowrap;" class="localisation">Represented By</div>\n        <div style="text-transform:uppercase;text-align:center;font-size:16px;color:white;" class="localisation">Elite</div>\n\n        <div class=" grey marginlarge center">Available In :</div>\n        <div class=" margin center">Paris</div>\n        <div class=" margin center">New York</div>\n        <div class=" margin center">Milan</div>\n\n      </ion-col>\n\n      <ion-col col-7 class="blue">\n        <img style="width:100%;right:0;" src="./assets/imgs/profile.jpg">\n      </ion-col>\n\n    </ion-row>\n    \n    <ion-row class="row25 blue">\n\n        <ion-col col-5 align-self-start>\n        <div class="left grey margin">General Features:</div>\n        <div class="left margin">Nationality : Dutch</div>\n        <div class="left margin">Hair : Blond</div>\n        <div class="left margin">Eyes : Green</div>\n        </ion-col>\n\n\n\n        <ion-col col-7 align-self-start>\n            <div class="left grey margin">Personality:</div>\n            <div class="left margin">3 Words to describe yourself </div>\n            <div class="left margin grey">bla bla bla bla </div>\n            <div class="left margin">Faborite Movie  </div>\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row style="margin-top:50px;">\n\n      <ion-col col-6>\n        <ion-row class="margin"><div class="grey ">Height:</div> {{user_height}}</ion-row>\n        <ion-row class="margin"><div class="grey ">Hips:</div> {{user_hips}}</ion-row>\n        <ion-row class="margin"><div class="grey ">Waist:</div> 123</ion-row>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-row class="margin"><div class="grey ">Height:</div> 123</ion-row>\n        <ion-row class="margin"><div class="grey ">Chest:</div> 123</ion-row>\n        <ion-row class="margin"><div class="grey ">Waist:</div> 123</ion-row>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"E:\CloudStation\transfert\LASTWeModels\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_savevalue_savevalue__["a" /* SavevalueProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=2.js.map