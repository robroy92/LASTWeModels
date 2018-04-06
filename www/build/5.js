webpackJsonp([5],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationPageModule", function() { return ApplicationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__application__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ApplicationPageModule = /** @class */ (function () {
    function ApplicationPageModule() {
    }
    ApplicationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__application__["a" /* ApplicationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__application__["a" /* ApplicationPage */]),
            ],
        })
    ], ApplicationPageModule);
    return ApplicationPageModule;
}());

//# sourceMappingURL=application.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationPage; });
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



var ApplicationPage = /** @class */ (function () {
    function ApplicationPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.title = 'Application Policy';
    }
    ApplicationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ApplicationPage');
    };
    ApplicationPage.prototype.dismiss = function (data) {
        console.log(data);
        this.viewCtrl.dismiss(data);
    };
    ApplicationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-application',template:/*ion-inline-start:"E:\CloudStation\transfert\LASTWeModels\src\pages\application\application.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{title}}\n    </ion-title>\n\n    <ion-buttons left  (tap)="presentModal(\'ProfilePage\')">\n      <button ion-button  icon-only>\n        <img style="position:relative;top:0;transform-origin: translateY(-50%);height:35px;left:5px;border-radius:50px;" src="./assets/imgs/avatar-ts-woody.png">  \n      </button>\n    </ion-buttons>\n\n\n<ion-buttons right (tap)="openPage(\'SettingsPage\', \'options\')">\n  <button ion-button  icon-only color="royal">\n    <ion-icon name="ios-settings-outline"></ion-icon>\n  </button>\n</ion-buttons>\n\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="content">\n    Thank you for your interest in applying to be recruited by top modeling agencies wherever you are and you wish to. Submitting your application is the first step in our review process.\n\n    Below are some guidelines to help ensure your application is completed correctly.\n    \n    1) If you are 13 years of age or younger, we are sorry but you may not apply online with us. You may have your parent or legal guardian contact one of our offices to explore representation with us.\n    \n    2) If you are a minor between the ages of 14 and 18 you are welcome to apply online but we ask that you please do so with your parent’s or legal guardian’s cooperation and consent.\n    \n    3) Please follow the guidelines on the online application and provide all of the requested information. Incomplete applications will not be reviewed.\n    \n    4) The application asks few personal questions designed to help us get to know you better. It is very important you take your time and thoughtfully answer these questions to the best of your ability. Modeling is about more than beauty and these questions are important in helping us understand who you are – your personality, character, and interests.\n    \n    5) The application asks for photos and a short video. Guidance for how these images are to be shot is provided in both the welcome video and in the application. Submissions that do not meet our requirements may be not be reviewed.\n    \n    6) Once your application is submitted, you will receive an email confirming your submission and your position on the wait list. This is the only communication you will receive from us regarding your application.\n    \n    7) WeModels is in high demand and so we are doing all what you can to get you onto the platform as soon as possible. You should make sure to update your profile and your pictures with the latest information, as well as linking your instagram profile. The more we can know about, the easier is it to get off the wait list.\n    \n    8) Once you get off the wait list, if any agency is interested in learning more about you, you will be contacted. Note, you will not hear from the agencies immediately so please be patient while your application is reviewed. Please do not email or call our office to find out the status of your application. We will be in touch with you if we have an interest.\n    \n    9) WeModels considers the safety and wellbeing of any models a top priority. We pride ourselves on our professionalism, transparency, and authenticity and believe it is important to advise models about unscrupulous people who prey on their ambitions.\n    \n    Please be aware there might be certain individuals on the Internet falsely claiming to be representatives (or "scouts") of WeModels.\n    \n    If you are contacted by anyone claiming to be a representative of WeModels, do not respond without first verifying their identity by promptly calling us at one of our offices, or sending us an email and we will be happy to assist.\n    \n    Should someone claiming to be a representative or model manager from any agency contact you, immediately alert your parents or a responsible adult.\n    \n    If the person claims to be from WeModels, please call us. Note: WeModels does not conduct interviews via Skype, we never request photos in the nude or in lingerie, and we never require the payment of money.\n\n</ion-content>\n'/*ion-inline-end:"E:\CloudStation\transfert\LASTWeModels\src\pages\application\application.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], ApplicationPage);
    return ApplicationPage;
}());

//# sourceMappingURL=application.js.map

/***/ })

});
//# sourceMappingURL=5.js.map