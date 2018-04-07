webpackJsonp([3],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginuserPageModule", function() { return LoginuserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loginuser__ = __webpack_require__(305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginuserPageModule = /** @class */ (function () {
    function LoginuserPageModule() {
    }
    LoginuserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__loginuser__["a" /* LoginuserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__loginuser__["a" /* LoginuserPage */]),
            ],
        })
    ], LoginuserPageModule);
    return LoginuserPageModule;
}());

//# sourceMappingURL=loginuser.module.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginuserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authuser_authuser__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_spinner_dialog__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginuserPage = /** @class */ (function () {
    function LoginuserPage(navCtrl, navParams, auth, facebook, camera, spinnerDialog, alertCtrl, nativeStorage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.facebook = facebook;
        this.camera = camera;
        this.spinnerDialog = spinnerDialog;
        this.alertCtrl = alertCtrl;
        this.nativeStorage = nativeStorage;
        this.registerCredentials = {};
        this.user = {};
        this.status = '';
        this.erreur = '';
    }
    LoginuserPage.prototype.login = function () {
        var _this = this;
        this.spinnerDialog.show();
        this.auth.login(this, this.user.email, this.user.password).subscribe(function (result) {
            _this.answer = result;
            if (_this.answer.status == 'OK') {
                console.log(_this.answer.uid);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                _this.nativeStorage.setItem('uid', _this.answer.uid)
                    .then(function () { return console.log('Stored item!'); }, function (error) { return console.error('Error storing item', error); });
            }
            else {
                _this.spinnerDialog.hide();
                _this.presentAlert(_this.answer.status);
                console.log('NONONO');
            }
        });
    };
    LoginuserPage.prototype.loginWithFB = function () {
        var _this = this;
        this.facebook.login(['email', 'public_profile']).then(function (response) {
            _this.facebook.api('me?fields=id,name,email,first_name,last_name,gender,picture.width(720).height(720).as(picture_large)', []).then(function (profile) {
                _this.userData = { email: profile['email'], first_name: profile['first_name'], last_name: profile['last_name'], gender: profile['gender'], picture: profile['picture_large']['data']['url'], username: profile['name'] };
                console.log(_this.userData);
            });
        });
    };
    LoginuserPage.prototype.GetCamera = function () {
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            var base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    LoginuserPage.prototype.presentAlert = function (elem) {
        var alert = this.alertCtrl.create({
            title: 'Echec de la connexion',
            subTitle: elem,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginuserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginuserPage');
    };
    LoginuserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-loginuser',template:/*ion-inline-start:"E:\CloudStation\transfert\LASTWeModels\src\pages\loginuser\loginuser.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Log In</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <div style="margin-top:15px;background-color:#3B5998; color:white; " class="button" (tap)="loginWithFB()">LogIn with Facebook</div>\n    \n    <div class="ormail">or</div>\n\n    <form (ngSubmit)="login()" #registerForm="ngForm">\n\n    <div class="inputDiv">\n      <ion-icon ios="ios-mail-open-outline" md="ios-mail-open-outline"></ion-icon>\n      <input class="inputTA" type="text" name="test" placeholder="E-Mail" [(ngModel)]="user.email" required>\n    </div>\n\n    <div class="inputDiv">\n        <ion-icon ios="ios-backspace" md="md-backspace"></ion-icon>\n        <input class="inputTA" type="password" name="test" placeholder="Password" [(ngModel)]="user.password" required>\n    </div>\n\n  <!--  <div style="margin-top:20px;background-color:#54e410;width:50%; color:white; " class="button" (tap)="login()">LogIn</div>-->\n  <button style="margin-top:20px;background-color:white;width:50%; color:#222B38; " class="button" type="submit" [disabled]="!registerForm.form.valid">Login</button>\n    </form>\n    \n    <div class="conditions">Password Forgetten ?</div>\n\n</ion-content>\n'/*ion-inline-end:"E:\CloudStation\transfert\LASTWeModels\src\pages\loginuser\loginuser.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_authuser_authuser__["a" /* AuthuserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_authuser_authuser__["a" /* AuthuserProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_spinner_dialog__["a" /* SpinnerDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_spinner_dialog__["a" /* SpinnerDialog */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__["a" /* NativeStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__["a" /* NativeStorage */]) === "function" && _h || Object])
    ], LoginuserPage);
    return LoginuserPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=loginuser.js.map

/***/ })

});
//# sourceMappingURL=3.js.map