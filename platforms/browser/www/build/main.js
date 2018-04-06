webpackJsonp([11],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactmethodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_savevalue_savevalue__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactmethodPage = /** @class */ (function () {
    // height: number = 0;
    // parametres : object [];
    // user_height: number;
    function ContactmethodPage(navCtrl, navParams, savevalue) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.savevalue = savevalue;
        this.title = 'Contact Method';
        this.ContactMail = true;
        this.ContactPhone = true;
        this.Contactinternalmail = true;
    }
    ContactmethodPage.prototype.ionViewDidEnter = function () {
        //  this.savevalue.getsettings(this, ['user_height', 'user_waist', 'user_chest']);
    };
    ContactmethodPage.prototype.ionViewDidLoad = function () {
    };
    ContactmethodPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contactmethod',template:/*ion-inline-start:"E:\CloudStation\transfert\LASTWeModels\src\pages\contactmethod\contactmethod.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{title}}\n    </ion-title>\n\n    <ion-buttons left  (tap)="presentModal(\'ProfilePage\')">\n      <button ion-button  icon-only>\n        <img style="position:relative;top:0;transform-origin: translateY(-50%);height:35px;left:5px;border-radius:50px;" src="./assets/imgs/avatar-ts-woody.png">  \n      </button>\n    </ion-buttons>\n\n\n<ion-buttons right (tap)="openPage(\'SettingsPage\', \'options\')">\n  <button ion-button  icon-only color="royal">\n    <ion-icon name="ios-settings-outline"></ion-icon>\n  </button>\n</ion-buttons>\n\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n{{user_height}}\n\n    <ion-list>\n\n        <ion-item>\n          <ion-label>E-Mail</ion-label>\n          <ion-toggle [(ngModel)]="ContactMail" ></ion-toggle>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label>Phone</ion-label>\n          <ion-toggle [(ngModel)]="ContactPhone" ></ion-toggle>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label>Internal Mail</ion-label>\n          <ion-toggle [(ngModel)]="Contactinternalmail" disabled="true"></ion-toggle>\n        </ion-item>\n      \n      </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"E:\CloudStation\transfert\LASTWeModels\src\pages\contactmethod\contactmethod.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_savevalue_savevalue__["a" /* SavevalueProvider */]])
    ], ContactmethodPage);
    return ContactmethodPage;
}());

//# sourceMappingURL=contactmethod.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_image_picker__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { Img } from 'ionic-angular/components/img/img-interface';

var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, nativePageTransitions, modalCtrl, camera, nativeStorage, imagePicker) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativePageTransitions = nativePageTransitions;
        this.modalCtrl = modalCtrl;
        this.camera = camera;
        this.nativeStorage = nativeStorage;
        this.imagePicker = imagePicker;
        this.title = 'Pictures';
        this.photos = [];
        this.pictures = 'portrait';
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
        // this.GetPicture()
    };
    LoginPage.prototype.openPage = function (page) {
        var options = {
            direction: 'left',
            duration: 500,
            slowdownfactor: 3,
            slidePixels: 20,
            iosdelay: 100,
            androiddelay: 150,
            fixedPixelsTop: 0,
            fixedPixelsBottom: 60
        };
        this.nativePageTransitions.slide(options);
        this.navCtrl.push(page);
    };
    LoginPage.prototype.presentModal = function (elem) {
        //var lien = elem+'Page';
        var modal = this.modalCtrl.create(elem);
        modal.present();
    };
    LoginPage.prototype.GetCamera2 = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.photos.push(_this.base64Image);
            _this.photos.reverse();
            // this.nativeStorage.setItem('picture', base64Image)
        }, function (err) {
        });
    };
    LoginPage.prototype.GetPics = function () {
        var options = {
            maximumImagesCount: 5
        };
        this.imagePicker.getPictures(options).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                console.log('Image URI: ' + results[i]);
            }
        }, function (err) { });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\CloudStation\transfert\LASTWeModels\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{title}}\n    </ion-title>\n\n    <ion-buttons left  (tap)="presentModal(\'ProfilePage\')">\n      <button ion-button  icon-only>\n        <img style="position:relative;top:0;transform-origin: translateY(-50%);height:35px;left:5px;border-radius:50px;" src="./assets/imgs/avatar-ts-woody.png">  \n      </button>\n    </ion-buttons>\n\n\n<ion-buttons right (tap)="openPage(\'SettingsPage\', \'options\')">\n  <button ion-button  icon-only color="royal">\n    <ion-icon name="ios-settings-outline"></ion-icon>\n  </button>\n</ion-buttons>\n\n\n  </ion-navbar>\n</ion-header>\n\n \n<ion-content padding>\n\n    <ion-segment [(ngModel)]="pictures" color="primary">\n\n        <ion-segment-button value="portrait">\n        Portrait\n        </ion-segment-button>\n        \n        <ion-segment-button value="rapproche">\n          Rapproche\n        </ion-segment-button>\n    \n        <ion-segment-button value="eloigne">\n          Eloigne\n        </ion-segment-button>\n    \n      </ion-segment>\n\n      <div [ngSwitch]="pictures" >\n\n        <ion-list *ngSwitchCase="\'portrait\'" style="height:100%">\n       \n              <div class="sample" *ngFor="let photo of photos">\n                <img  [src]="photo" *ngIf="photo"/>\n                \n              </div>\n\n              <div class="sample">\n              <img  src="./assets/imgs/rapproche.jpg" />\n            </div>\n\n             <div style="margin-top:15px;background-color:#222B38; color:white; " class="button" (tap)="GetCamera2()">Camera</div>\n       \n        </ion-list>\n      \n        <ion-list *ngSwitchCase="\'rapproche\'">\n       \n            <div class="sample">\n              <img  src="./assets/imgs/rapproche.jpg" />\n            </div>\n    \n           <div style="margin-top:15px;background-color:#222B38; color:white; " class="button" (tap)="GetPics()">Camera</div>\n      \n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'eloigne\'">\n          <div class="sample">\n            <img  src="./assets/imgs/enpied.jpg" />\n          </div>\n  \n         <div style="margin-top:15px;background-color:#222B38; color:white; " class="button" (tap)="GetCamera2()">Camera</div>\n        \n        </ion-list>\n      </div>\n\n  </ion-content>\n \n'/*ion-inline-end:"E:\CloudStation\transfert\LASTWeModels\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_image_picker__["a" /* ImagePicker */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { ContactPage } from '../contact/contact';



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */];
        this.tabsHideOnSubPages = true;
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\CloudStation\transfert\LASTWeModels\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab2Root" tabTitle="Upcoming Events" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab1Root" tabTitle="Measurements" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Pictures" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Settings" tabIcon="ios-settings-outline"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"E:\CloudStation\transfert\LASTWeModels\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkingareaPage; });
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


/**
 * Generated class for the WorkingareaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WorkingareaPage = /** @class */ (function () {
    function WorkingareaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WorkingareaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WorkingareaPage');
    };
    WorkingareaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-workingarea',template:/*ion-inline-start:"E:\CloudStation\transfert\LASTWeModels\src\pages\workingarea\workingarea.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>workingarea</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n    <ion-list radio-group [(ngModel)]="autoManufacturers" multiple="true">\n\n      \n        <ion-item>\n          <ion-label>Cord</ion-label>\n          <ion-radio value="cord"></ion-radio>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label>Duesenberg</ion-label>\n          <ion-radio value="duesenberg"></ion-radio>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label>Hudson</ion-label>\n          <ion-radio value="hudson"></ion-radio>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label>Packard</ion-label>\n          <ion-radio value="packard"></ion-radio>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label>Studebaker</ion-label>\n          <ion-radio value="studebaker"></ion-radio>\n        </ion-item>\n      \n      </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"E:\CloudStation\transfert\LASTWeModels\src\pages\workingarea\workingarea.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], WorkingareaPage);
    return WorkingareaPage;
}());

//# sourceMappingURL=workingarea.js.map

/***/ }),

/***/ 123:
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
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/application/application.module": [
		292,
		5
	],
	"../pages/contactmethod/contactmethod.module": [
		293,
		10
	],
	"../pages/create/create.module": [
		294,
		4
	],
	"../pages/login/login.module": [
		296,
		9
	],
	"../pages/loginuser/loginuser.module": [
		297,
		3
	],
	"../pages/profile/profile.module": [
		295,
		2
	],
	"../pages/root/root.module": [
		298,
		8
	],
	"../pages/setmeasure/setmeasure.module": [
		299,
		1
	],
	"../pages/settings/settings.module": [
		301,
		7
	],
	"../pages/tutorial/tutorial.module": [
		302,
		0
	],
	"../pages/workingarea/workingarea.module": [
		300,
		6
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_eventapi_eventapi__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';



var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams, 
        // private facebook: Facebook, 
        nativePageTransitions, eventapiProvider, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativePageTransitions = nativePageTransitions;
        this.eventapiProvider = eventapiProvider;
        this.modalCtrl = modalCtrl;
        this.title = 'Upcoming Events';
        this.eventapiProvider.getArticles()
            .then(function (newsFetched) {
            _this.news = newsFetched;
            console.log(_this.news);
        });
    }
    AboutPage.prototype.ionViewWillEnter = function () {
        this.updatenews();
    };
    AboutPage.prototype.openPage = function (page, elem) {
        console.log(elem);
        var options = {
            direction: 'left',
            duration: 500,
            slowdownfactor: 3,
            slidePixels: 20,
            iosdelay: 100,
            androiddelay: 150,
            fixedPixelsTop: 0,
            fixedPixelsBottom: 60
        };
        var options2 = {
            direction: 'up',
            duration: 500,
            slowdownfactor: 3,
            slidePixels: 20,
            iosdelay: 100,
            androiddelay: 150,
            fixedPixelsTop: 0,
            fixedPixelsBottom: 60
        };
        this.nativePageTransitions.slide(elem);
        this.navCtrl.push(page);
    };
    AboutPage.prototype.presentModal = function (elem) {
        var lien = elem;
        var modal = this.modalCtrl.create(lien);
        modal.present();
    };
    AboutPage.prototype.updatenews = function () {
        var _this = this;
        this.eventapiProvider.getArticles()
            .then(function (newsFetched) {
            _this.news = newsFetched;
            console.log(_this.news);
        });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"E:\CloudStation\transfert\LASTWeModels\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{title}}\n    </ion-title>\n\n    <ion-buttons left  (tap)="presentModal(\'ProfilePage\')">\n      <button ion-button  icon-only>\n        <img style="position:relative;top:0;transform-origin: translateY(-50%);height:35px;left:5px;border-radius:50px;" src="./assets/imgs/avatar-ts-woody.png">  \n      </button>\n    </ion-buttons>\n\n\n<ion-buttons right (tap)="openPage(\'SettingsPage\', \'options\')">\n  <button ion-button  icon-only color="royal">\n    <ion-icon name="ios-settings-outline"></ion-icon>\n  </button>\n</ion-buttons>\n\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="event">\n\n\n  <div class="event-card" *ngFor="let x of news">\n    <div class="event-card-header">\n        <img class="image-header" [src]="x.urlToImage"/>\n        <div class="date-header">26 Mars 2013</div>\n    </div>\n    \n    <div class="content-event">\n      <div class="content-event-titre">{{x.title}}</div>\n      {{x.description}}\n    </div>\n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"E:\CloudStation\transfert\LASTWeModels\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_3__providers_eventapi_eventapi__["a" /* EventapiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventapiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventapiProvider = /** @class */ (function () {
    function EventapiProvider(http) {
        this.http = http;
        console.log('Hello EventapiProvider Provider');
    }
    EventapiProvider.prototype.getArticles = function () {
        var url = 'http://bmyscouter.co/db/events.php';
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response; })
            .catch(function (error) { return console.log('erreur' + error); });
    };
    EventapiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], EventapiProvider);
    return EventapiProvider;
}());

//# sourceMappingURL=eventapi.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_savevalue_savevalue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_page_transitions__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, modalCtrl, viewCtrl, http, getval, nativePageTransitions, loadingCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.getval = getval;
        this.nativePageTransitions = nativePageTransitions;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.show = false;
        this.title = 'Measurements';
        this.instruction = 'Fill Your Measurements';
    } // End Constructor
    HomePage.prototype.ionViewWillEnter = function () {
        this.show = false;
        this.getval.getbody(this);
    };
    HomePage.prototype.ionViewWillLeave = function () {
    };
    HomePage.prototype.presentModal = function (elem, elem1, elem2, elem3, elem4) {
        console.log(elem1, elem2, elem3, elem4);
        var lien = elem + 'Page';
        var modal = this.modalCtrl.create(elem, { part: elem1, valeur: elem2, url: elem3, name: elem4 });
        modal.present();
    };
    HomePage.prototype.openPage = function (page) {
        var options = {
            direction: 'left',
            duration: 500,
            slowdownfactor: 3,
            slidePixels: 20,
            iosdelay: 100,
            androiddelay: 150,
            fixedPixelsTop: 0,
            fixedPixelsBottom: 60
        };
        this.nativePageTransitions.slide(options);
        this.navCtrl.push(page);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\CloudStation\transfert\LASTWeModels\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{title}}\n    </ion-title>\n\n    <ion-buttons left  (tap)="presentModal(\'ProfilePage\')">\n      <button ion-button  icon-only>\n        <img style="position:relative;top:0;transform-origin: translateY(-50%);height:35px;left:5px;border-radius:50px;" src="./assets/imgs/avatar-ts-woody.png">  \n      </button>\n    </ion-buttons>\n\n\n<ion-buttons right (tap)="openPage(\'SettingsPage\', \'options\')">\n  <button ion-button  icon-only color="royal">\n    <ion-icon name="ios-settings-outline"></ion-icon>\n  </button>\n</ion-buttons>\n\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <ion-toolbar>\n        <ion-title>{{instruction}}</ion-title>\n      </ion-toolbar>\n\n<!--{{test}}-->\n\n     <ion-list  *ngIf="show">\n        <ion-item  *ngFor="let x of values" (tap)="presentModal(\'SetmeasurePage\', x.part, x.value, x.url, x.name)">\n          <ion-thumbnail item-start>\n           <img src="./assets/imgs/{{x.url}}.jpg"/>\n          </ion-thumbnail>\n          <h2>{{x.name}}</h2>\n          <p>{{x.value}}</p>\n          <div class="link-arrow"><ion-icon name="ios-arrow-forward-outline"></ion-icon></div>\n        </ion-item>\n\n      </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"E:\CloudStation\transfert\LASTWeModels\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__providers_savevalue_savevalue__["a" /* SavevalueProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], HomePage);
    return HomePage;
}()); // End Class

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthuserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var User = /** @class */ (function () {
    function User(email, password) {
        this.email = '';
        this.password = '';
    }
    return User;
}());

var AuthuserProvider = /** @class */ (function () {
    function AuthuserProvider(http) {
        this.http = http;
        this.url = 'http://bmyscouter.co/db/mobile/login.php';
    }
    AuthuserProvider.prototype.login = function (page, Username, Password) {
        console.log('credentials', Username, Password);
        return this.http.post(this.url, { username: Username, password: Password })
            .map(function (response) {
            return response;
        });
    };
    ;
    AuthuserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthuserProvider);
    return AuthuserProvider;
}());

//# sourceMappingURL=authuser.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contactmethod_contactmethod__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__workingarea_workingarea__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_savevalue_savevalue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__root_root__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, savevalue, nativePageTransitions, alertCtrl, nativeStorage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.savevalue = savevalue;
        this.nativePageTransitions = nativePageTransitions;
        this.alertCtrl = alertCtrl;
        this.nativeStorage = nativeStorage;
        this.user_first = '';
        this.user_last = '';
        this.myDate = '';
        this.myPhone = '';
        this.myMail = '';
        this.myUnity = '';
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    }
    SettingsPage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
        this.savevalue.getsettings(this, ['user_first', 'user_last', 'user_phone', 'user_email', 'user_unity', 'user_birthday']);
    };
    SettingsPage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    SettingsPage.prototype.openPage = function (page) {
        this.nativePageTransitions.slide(this.options);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__contactmethod_contactmethod__["a" /* ContactmethodPage */]);
    };
    SettingsPage.prototype.openPage1 = function (page) {
        this.nativePageTransitions.slide(this.options);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__workingarea_workingarea__["a" /* WorkingareaPage */]);
    };
    SettingsPage.prototype.openPage2 = function () {
        var options2 = {
            direction: 'flip',
            duration: 500,
            slowdownfactor: 3,
            slidePixels: 20,
            iosdelay: 100,
            androiddelay: 150,
            fixedPixelsTop: 0,
            fixedPixelsBottom: 60
        };
        this.nativePageTransitions.slide(options2);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__root_root__["a" /* RootPage */]);
    };
    SettingsPage.prototype.updatevalue = function (elem, elem1) {
        this.savevalue.savebody(elem, elem1);
    };
    SettingsPage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Disconnect',
            message: 'Do you want to confirm ?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.nativeStorage.remove('uid');
                        _this.openPage2();
                        console.log('Buy clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    SettingsPage.prototype.goDisconnect = function () {
        this.presentConfirm();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"E:\CloudStation\transfert\LASTWeModels\src\pages\settings\settings.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n    <ion-toolbar>\n        <ion-title>{{user_first}} {{user_last}}</ion-title>\n      </ion-toolbar>\n      <ion-list>\n        <ion-list-header>Profile</ion-list-header>\n  \n\n        <ion-item>\n            <ion-icon name="ios-calendar-outline" item-start></ion-icon>\n          <ion-label>Unity</ion-label>\n          <ion-select [(ngModel)]="myUnity" interface="action-sheet" (ionChange)="updatevalue(myUnity,\'user_unity\')">\n            <ion-option value="cm">FR</ion-option>\n            <ion-option value="uk">UK</ion-option>\n          </ion-select>\n        </ion-item>\n\n  <ion-item>\n      <ion-icon name="ios-calendar-outline" item-start></ion-icon>\n    <ion-label>Birth Date</ion-label>\n    <ion-datetime displayFormat="DD MMM YYYY" min="2016" max="2020-10-31" [(ngModel)]="myDate" (ionChange)="updatevalue(myDate,\'user_birthday\')"></ion-datetime>\n  </ion-item>\n\n\n  <ion-item>\n      <ion-icon name="ios-call-outline" item-start></ion-icon>\n    <ion-label color="black">Phone Number</ion-label>\n    <ion-input [(ngModel)]="myPhone" type="tel" (focusout)="updatevalue(myPhone,\'user_phone\')" placeholder="Please Enter your Phone Number"></ion-input>\n  </ion-item>\n\n  <ion-item>\n      <ion-icon name="ios-mail-outline" item-start></ion-icon>\n    <ion-label color="black">Email</ion-label>\n    <ion-input type="email" [(ngModel)]="myMail"  placeholder="Please Enter your Mail"></ion-input>\n  </ion-item>\n\n  <ion-item>\n      <ion-icon name="ios-flag-outline" item-start></ion-icon>\n    <ion-label>Nationality</ion-label>\n    <ion-select [(ngModel)]="nationality">\n      <ion-option selected value="f">French</ion-option>\n      <ion-option value="m">English</ion-option>\n    </ion-select>\n  </ion-item>\n</ion-list>\n\n<ion-list>\n  <ion-list-header>Profile</ion-list-header>\n\n  <button ion-item (tap)="openPage()">\n    <ion-icon name="paw" item-start></ion-icon>\n    Contact Method\n  </button>\n\n  <button ion-item (tap)="openPage1()">\n      <ion-icon name="paw" item-start></ion-icon>\n      Working Area\n  </button>\n  </ion-list>\n\n  <div style="background-color: #222B38; color: white;" class="button" (tap)="goDisconnect()">Disconnect</div>\n <!-- <div style="background-color: blue; color: white;" class="button" (tap)="goDisconnect()">Delete My Account</div>-->\n  \n</ion-content>\n'/*ion-inline-end:"E:\CloudStation\transfert\LASTWeModels\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_savevalue_savevalue__["a" /* SavevalueProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contactmethod_contactmethod__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_workingarea_workingarea__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_root_root__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_native_page_transitions__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_spinner_dialog__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_native_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_facebook__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_savevalue_savevalue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_eventapi_eventapi__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_authuser_authuser__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_image_picker__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Page







// Native






//FB





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contactmethod_contactmethod__["a" /* ContactmethodPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_workingarea_workingarea__["a" /* WorkingareaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_root_root__["a" /* RootPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/application/application.module#ApplicationPageModule', name: 'ApplicationPage', segment: 'application', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contactmethod/contactmethod.module#ContactmethodPageModule', name: 'ContactmethodPage', segment: 'contactmethod', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create/create.module#CreatePageModule', name: 'CreatePage', segment: 'create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/loginuser/loginuser.module#LoginuserPageModule', name: 'LoginuserPage', segment: 'loginuser', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/root/root.module#RootPageModule', name: 'RootPage', segment: 'root', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setmeasure/setmeasure.module#SetmeasurePageModule', name: 'SetmeasurePage', segment: 'setmeasure', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workingarea/workingarea.module#WorkingareaPageModule', name: 'WorkingareaPage', segment: 'workingarea', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_root_root__["a" /* RootPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_workingarea_workingarea__["a" /* WorkingareaPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_spinner_dialog__["a" /* SpinnerDialog */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_savevalue_savevalue__["a" /* SavevalueProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_eventapi_eventapi__["a" /* EventapiProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_authuser_authuser__["a" /* AuthuserProvider */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_native_storage__["a" /* NativeStorage */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_root_root__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    // A change have been here : rootPage:any = TabsPage;
    function MyApp(platform, statusBar, splashScreen, nativeStorage) {
        this.nativeStorage = nativeStorage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_root_root__["a" /* RootPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            console.log('test');
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\CloudStation\transfert\LASTWeModels\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\CloudStation\transfert\LASTWeModels\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavevalueProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_spinner_dialog__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SavevalueProvider = /** @class */ (function () {
    function SavevalueProvider(http, spinnerDialog) {
        this.http = http;
        this.spinnerDialog = spinnerDialog;
    }
    SavevalueProvider.prototype.savebody = function (elem, elem1) {
        var donnee = { value: elem, part: elem1 };
        var url = 'http://bmyscouter.co/db/mobile/test2.php';
        console.log(donnee);
        this.http
            .post(url, donnee, { responseType: 'text' })
            .subscribe(function (val) {
            console.log("POST call successful value returned in body", val);
        }, function (response) {
            console.log("POST call in error", response);
        }, function () {
            console.log("The POST observable is now completed.");
        });
    };
    SavevalueProvider.prototype.getbody = function (page) {
        var _this = this;
        this.spinnerDialog.show();
        this.http.get('http://bmyscouter.co/db/mobile/test.php').subscribe(function (data) {
            page.values = data;
            _this.spinnerDialog.hide();
            console.log(page.values);
            page.show = true;
        }, function (err) {
            if (err.error instanceof Error) {
                _this.spinnerDialog.hide();
                console.log('An error occurred:', err.error.message);
            }
            else {
                _this.spinnerDialog.hide();
                console.log("Backend returned code " + err.status + ", body was: " + err.error);
            }
        });
    };
    SavevalueProvider.prototype.getval = function (page, elem) {
        var i;
        var length = elem.length;
        var donnee = elem;
        var user_height;
        var url = 'http://bmyscouter.co/db/mobile/test3.php';
        this.http
            .post(url, donnee)
            .subscribe(function (val) {
            page.values = val;
            //page.user_height = 13;
        }, function (response) {
            console.log("POST call in error", response);
        }, function () {
            console.log("The POST observable is now completed.");
        });
    };
    SavevalueProvider.prototype.getsettings = function (page, elem) {
        var length = elem.length;
        var donnee = elem;
        var url = 'http://bmyscouter.co/db/mobile/test3.php';
        this.http
            .post(url, donnee)
            .subscribe(function (val) {
            page.values = val;
            console.log(page.values);
            page.user_first = val[0].user_first;
            page.user_last = val[1].user_last;
            page.myPhone = val[2].user_phone;
            page.myMail = val[3].user_email;
            page.myUnity = val[4].user_unity;
            page.myDate = val[5].user_birthday;
        }, function (response) {
            console.log("POST call in error", response);
        }, function () {
            console.log("The POST observable is now completed.");
        });
    };
    SavevalueProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_spinner_dialog__["a" /* SpinnerDialog */]])
    ], SavevalueProvider);
    return SavevalueProvider;
}());

//# sourceMappingURL=savevalue.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { SplashScreen } from '@ionic-native/splash-screen';


var RootPage = /** @class */ (function () {
    function RootPage(navCtrl, navParams, nativePageTransitions, 
        //  private splashScreen: SplashScreen,
        platform, nativeStorage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativePageTransitions = nativePageTransitions;
        this.platform = platform;
        this.nativeStorage = nativeStorage;
    }
    RootPage.prototype.ionViewWillEnter = function () {
        this.GetStorage();
        if (this.tabBarElement = document.querySelector('.tabbar.show-tabbar')) {
            this.tabBarElement.style.display = 'none';
        }
        else { }
    };
    RootPage.prototype.ionViewDidLoad = function () {
        // this.splashScreen.show();
        // this.platform.ready().then(() => {
        //  this.splashScreen.hide();
        // });
    };
    RootPage.prototype.ionViewWillLeave = function () {
        //  this.tabBarElement.style.display = 'flex';
    };
    RootPage.prototype.openPage = function (page, elem) {
        console.log(elem);
        var options = {
            direction: 'left',
            duration: 500,
            slowdownfactor: 3,
            slidePixels: 20,
            iosdelay: 100,
            androiddelay: 150,
            fixedPixelsTop: 0,
            fixedPixelsBottom: 60
        };
        this.nativePageTransitions.slide(elem);
        this.navCtrl.push(page);
    };
    RootPage.prototype.GetStorage = function () {
        var _this = this;
        this.nativeStorage.getItem('uid')
            .then(function (data) {
            console.log('data', data);
            if (data) {
                console.log('logé');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
            }
            else {
                console.log('pas logé');
            }
        }, function (error) { return console.error('error', error); });
    };
    RootPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-root',template:/*ion-inline-start:"E:\CloudStation\transfert\LASTWeModels\src\pages\root\root.html"*/'>\n\n<ion-content  class="root"  >\n    <div class="logo-ctn" ion-fixed>\n        <img class="logo" src="./assets/imgs/logoo.png" />\n      </div>\n\n<ion-grid>\n    \n        <ion-slides autoplay="4000" pager loop>\n            <ion-slide >   \n                <h4>Welcome</h4>\n                <p>Get the carreer you deserve</p>\n            </ion-slide>\n            <ion-slide>\n                <h4>Escape</h4>\n                <p>Let us take care of you for the weekend</p>\n            </ion-slide>\n            <ion-slide>\n                <h4>Luxury</h4>\n                <p>Let us take care of you for the weekend</p>\n            </ion-slide>\n        </ion-slides>\n    \n</ion-grid>\n      \n\n</ion-content>\n\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <div style="background-color: #222B38; color: white; margin-top: 10px" class="button" (tap)="openPage(\'CreatePage\', \'options\')">CREATE AN ACCOUNT</div>\n    </ion-row>\n    <ion-row>\n      <div class="already" center>Already Registred ?</div>\n    </ion-row>\n    <ion-row>\n      <div style="background-color: white; color: black; margin-bottom: 10px" class="button" (tap)="openPage(\'LoginuserPage\', \'options\')">LOG IN</div>\n    </ion-row>\n</ion-grid>\n\n\n</ion-footer>'/*ion-inline-end:"E:\CloudStation\transfert\LASTWeModels\src\pages\root\root.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], RootPage);
    return RootPage;
}());

//# sourceMappingURL=root.js.map

/***/ })

},[214]);
//# sourceMappingURL=main.js.map