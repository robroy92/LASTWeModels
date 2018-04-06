webpackJsonp([1],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetmeasurePageModule", function() { return SetmeasurePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setmeasure__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SetmeasurePageModule = /** @class */ (function () {
    function SetmeasurePageModule() {
    }
    SetmeasurePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setmeasure__["a" /* SetmeasurePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__setmeasure__["a" /* SetmeasurePage */]),
            ],
        })
    ], SetmeasurePageModule);
    return SetmeasurePageModule;
}());

//# sourceMappingURL=setmeasure.module.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetmeasurePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_savevalue_savevalue__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SetmeasurePage = /** @class */ (function () {
    function SetmeasurePage(navCtrl, navParams, viewCtrl, http, saveval) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.saveval = saveval;
        this.part = this.navParams.get('part');
        this.valeur = this.navParams.get('valeur');
        this.url = this.navParams.get('url');
        this.title = this.navParams.get('name');
    }
    SetmeasurePage.prototype.ionViewDidLoad = function () {
        console.log('Part', this.part);
        console.log('Value', this.valeur);
        console.log('Url', this.url);
    };
    SetmeasurePage.prototype.dismiss = function (data) {
        //  console.log(data);
        this.viewCtrl.dismiss(data);
    };
    SetmeasurePage.prototype.save = function (elem, elem1) {
        var data = { elem: elem, elem1: elem1 };
        this.saveval.savebody(elem, elem1);
        this.dismiss(data);
    };
    SetmeasurePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setmeasure',template:/*ion-inline-start:"E:\CloudStation\transfert\LASTWeModels\src\pages\setmeasure\setmeasure.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      {{title}}\n    </ion-title>\n\n    <ion-buttons start>\n        <button ion-button (tap)="dismiss()">\n          <span ion-text color="primary" showWhen="ios">Cancel</span>\n          <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n        </button>\n    </ion-buttons>\n      \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <img style="position:relative; margin-top: 15px; width: 80%; height: auto;  left:50%; transform: translateX(-50%) " src="./assets/imgs/{{url}}.jpg"/>\n\n\n      <ion-input [(ngModel)]="ToSave" type="tel" placeholder={{valeur}}></ion-input>\n\n\n  \n\n</ion-content>\n\n<ion-footer>\n<!--  <div ion-button block outline class="btn-save" (tap)="save(ToSave, part)" >SAVE</div>-->\n  <button style="margin-top:5px;background-color:white;width:50%; color:#222B38; " class="button" (tap)="save(ToSave, part)" >Save</button>\n</ion-footer>'/*ion-inline-end:"E:\CloudStation\transfert\LASTWeModels\src\pages\setmeasure\setmeasure.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_savevalue_savevalue__["a" /* SavevalueProvider */]])
    ], SetmeasurePage);
    return SetmeasurePage;
}());

//# sourceMappingURL=setmeasure.js.map

/***/ })

});
//# sourceMappingURL=1.js.map