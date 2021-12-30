"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"],{

/***/ 32710:
/*!**************************************************!*\
  !*** ./src/app/addclient/addclient.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddclientComponent": () => (/* binding */ AddclientComponent)
/* harmony export */ });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ 4095);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet.markercluster */ 79619);
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet_markercluster__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 20784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 95641);
/* harmony import */ var _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../alert-dialog/alert-dialog.component */ 39060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _online_offline_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../online-offline-service.service */ 21244);
/* harmony import */ var _clients_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../clients.service */ 23640);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _indexdb_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../indexdb.service */ 22253);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _settings_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../settings/settings.service */ 82588);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ 93776);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @zxing/ngx-scanner */ 76750);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 73981);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 21036);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 34357);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 58359);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-webcam */ 60330);























function AddclientComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Position Fixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} }
function AddclientComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Fixing Position...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AddclientComponent_div_18_div_8_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const code_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](code_r9.value);
} }
function AddclientComponent_div_18_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddclientComponent_div_18_div_8_span_1_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const code_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", code_r9.nbr == 1);
} }
function AddclientComponent_div_18_div_15_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const code_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](code_r12.value);
} }
function AddclientComponent_div_18_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddclientComponent_div_18_div_15_span_1_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const code_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", code_r12.nbr == 2);
} }
function AddclientComponent_div_18_div_22_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const code_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](code_r15.value);
} }
function AddclientComponent_div_18_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddclientComponent_div_18_div_22_span_1_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const code_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", code_r15.nbr == 3);
} }
function AddclientComponent_div_18_div_23_section_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddclientComponent_div_18_div_23_section_4_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r19.toggleShow(ctx_r19.code.nbr, ctx_r19.qrResultString); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Result ", ctx_r18.code.nbr, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r18.qrResultString);
} }
function AddclientComponent_div_18_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Scanning...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "zxing-scanner", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("scanSuccess", function AddclientComponent_div_18_div_23_Template_zxing_scanner_scanSuccess_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r21.onCodeResult($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, AddclientComponent_div_18_div_23_section_4_Template, 8, 2, "section", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r8.qrResultString);
} }
function AddclientComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Code Centrale Danoune : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddclientComponent_div_18_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r23.toggleShow(1, ctx_r23.qrResultString); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Scan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, AddclientComponent_div_18_div_8_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Code Coca Cola : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddclientComponent_div_18_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r25.toggleShow(2, ctx_r25.qrResultString); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Scan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, AddclientComponent_div_18_div_15_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Code FGD : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddclientComponent_div_18_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r26.toggleShow(3, ctx_r26.qrResultString); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Scan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, AddclientComponent_div_18_div_22_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, AddclientComponent_div_18_div_23_Template, 5, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddclientComponent_div_18_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r24); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r27.CheckCodes(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Check codes");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r3.test);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.ListCodes);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r3.test);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.ListCodes);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r3.test);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.ListCodes);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.isShown && !ctx_r3.scan);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r3.test);
} }
function AddclientComponent_div_19_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "UUID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Numero_Serie:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Type_card:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Technologies:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r33.clientInfos.nfc.UUID);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r33.clientInfos.nfc.Numero_Serie);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r33.clientInfos.nfc.Type_card);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r33.clientInfos.nfc.Technologies);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r33.UUID_nfc, " ");
} }
function AddclientComponent_div_19_div_2_div_13_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const code_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](code_r38.value);
} }
function AddclientComponent_div_19_div_2_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddclientComponent_div_19_div_2_div_13_span_1_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const code_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", code_r38.nbr == 4);
} }
function AddclientComponent_div_19_div_2_div_14_section_2_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Result: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddclientComponent_div_19_div_2_div_14_section_2_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4); return ctx_r42.toggleShow(ctx_r42.code.nbr, ctx_r42.qrResultString); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r41.qrResultString);
} }
function AddclientComponent_div_19_div_2_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "zxing-scanner", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("scanSuccess", function AddclientComponent_div_19_div_2_div_14_Template_zxing_scanner_scanSuccess_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r44.onCodeResult($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AddclientComponent_div_19_div_2_div_14_section_2_Template, 8, 1, "section", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r35.qrResultString);
} }
function AddclientComponent_div_19_div_2_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "webcam", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("imageCapture", function AddclientComponent_div_19_div_2_div_21_Template_webcam_imageCapture_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r46.handleNFCImage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddclientComponent_div_19_div_2_div_21_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r47); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r48.triggerSnapshot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Click Here");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddclientComponent_div_19_div_2_div_21_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r47); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r49.toggleNFCWebcam(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Close Camera");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("height", 200)("width", 500)("trigger", ctx_r36.triggerObservable);
} }
function AddclientComponent_div_19_div_2_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("height", 200)("width", 200)("src", ctx_r37.webcamNFCImage.imageAsDataUrl, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
} }
function AddclientComponent_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "NFC card puce : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddclientComponent_div_19_div_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r50.Read(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Read");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, AddclientComponent_div_19_div_2_div_6_Template, 18, 5, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Qr Code : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddclientComponent_div_19_div_2_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); ctx_r52.toggleShow(4, ctx_r52.qrResultString); return ctx_r52.scan = !ctx_r52.scan; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Scan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, AddclientComponent_div_19_div_2_div_13_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, AddclientComponent_div_19_div_2_div_14_Template, 3, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "NFC photo : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddclientComponent_div_19_div_2_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r53.displayNFCam(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "camera_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, AddclientComponent_div_19_div_2_div_21_Template, 7, 3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, AddclientComponent_div_19_div_2_div_22_Template, 3, 3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r28.clientInfos.nfc.UUID != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r28.ListCodes);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r28.isShown && ctx_r28.scan);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r28.showNFCWebcam);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r28.webcamNFCImage);
} }
function AddclientComponent_div_19_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-select", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AddclientComponent_div_19_div_13_Template_mat_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r54.detailType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Alimentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Superette");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Aattar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Fruits sec");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Boundif");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Parfumerie");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "mat-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Kioske");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r29.detailType);
} }
function AddclientComponent_div_19_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AddclientComponent_div_19_div_27_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r56.codeSMS = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddclientComponent_div_19_div_27_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r57); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r58.VerifySMS(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r30.codeSMS);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r30.status, " ");
} }
function AddclientComponent_div_19_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "webcam", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("imageCapture", function AddclientComponent_div_19_div_34_Template_webcam_imageCapture_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r59.handlePDVImage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddclientComponent_div_19_div_34_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r60); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r61.triggerSnapshot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Click Here");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddclientComponent_div_19_div_34_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r60); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r62.togglePDVWebcam(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Close Camera");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("height", 200)("width", 500)("trigger", ctx_r31.triggerObservable);
} }
function AddclientComponent_div_19_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("height", 200)("width", 200)("src", ctx_r32.webcamPDVImage.imageAsDataUrl, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
} }
function AddclientComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AddclientComponent_div_19_div_2_Template, 23, 5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AddclientComponent_div_19_Template_mat_select_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r63.TypeDPV = $event; })("valueChange", function AddclientComponent_div_19_Template_mat_select_valueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r64); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r65.selected = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Gros");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Demi Gros");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, AddclientComponent_div_19_div_13_Template, 17, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "First & Last Name*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AddclientComponent_div_19_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r64); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r66.NomPrenom = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Phone number*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AddclientComponent_div_19_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r64); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r67.PhoneNumber = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddclientComponent_div_19_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r64); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); ctx_r68.Verify("code"); return ctx_r68.showVerifCodeInput = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Verify");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, AddclientComponent_div_19_div_27_Template, 6, 2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "mat-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "PV photo : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddclientComponent_div_19_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r64); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r69.displayPDVcam(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "camera_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, AddclientComponent_div_19_div_34_Template, 7, 3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, AddclientComponent_div_19_div_35_Template, 3, 3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddclientComponent_div_19_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r64); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r70.Send(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.loggedUser.role == "Auditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r4.TypeDPV)("value", ctx_r4.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.selected == "Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r4.NomPrenom);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r4.PhoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r4.disbale_sms);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r4.display, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.showVerifCodeInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.showPDVWebcam);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.webcamPDVImage);
} }
const _c0 = function (a0) { return { "left": a0 }; };
const incr = 1;
class AddclientComponent {
    constructor(onlineOfflineService, clientService, _router, aroute, index, dialog, _setting) {
        // if(!this.onlineOfflineService.isOnline){
        //   var message = "You went offline !";
        //   var btn = "Continue"
        //   this.openAlertDialog(message,btn)
        // }else{
        //   var message = "You'r back online :)!";
        //   var btn = "OK"
        //   this.openAlertDialog(message,btn)
        // }
        this.onlineOfflineService = onlineOfflineService;
        this.clientService = clientService;
        this._router = _router;
        this.aroute = aroute;
        this.index = index;
        this.dialog = dialog;
        this._setting = _setting;
        this.mySector = "test";
        this.progress = 0;
        this.selected = null;
        this.user = JSON.parse(localStorage.getItem("user"));
        //from hajar
        this.ListCodes = [];
        this.code = { nbr: null, value: null };
        this.isShown = false;
        this.nfcShown = false;
        this.hide = false; // hidden by default
        this.test = false;
        this.lat = 33.2607691;
        this.lon = -7.6222771;
        this.icone = leaflet__WEBPACK_IMPORTED_MODULE_0__.icon({
            iconUrl: "assets/green.png",
            iconSize: [12, 12],
        });
        this.percentage = 0;
        this.Status = true;
        this.show = false;
        this.list = [];
        this.geojsonFeature = {
            type: 'Feature',
            properties: {
                name: 'Mohamed',
                amenity: 'Baseball Stadium'
            },
            geometry: {
                type: 'Point',
                coordinates: [-7.6222771, 33.2608691]
            }
        };
        // fadma's variables
        this.showVerifCodeInput = false;
        this.showNFCWebcam = false;
        this.showPDVWebcam = false;
        this.webcamNFCImage = null;
        this.webcamPDVImage = null;
        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.scan = false;
        this.nfcObject = { Numero_Serie: null, Technologies: null, Type_card: null, UUID: null, NFCPhoto: null };
        this.clientInfos = { UUid: null, codes: [], codeNFC: null, NFCPhoto: null, TypeDPV: null, sector: null, nfc: this.nfcObject,
            NomPrenom: null, detailType: null, userId: null, userRole: null, PhoneNumber: null, PVPhoto: null, Status: "red", created_at: null, updated_at: null
        };
        // map
        this.icon = leaflet__WEBPACK_IMPORTED_MODULE_0__.icon({
            iconUrl: "assets/green.png",
            iconSize: [12, 12],
        });
        this.location_icon = leaflet__WEBPACK_IMPORTED_MODULE_0__.icon({
            iconUrl: "assets/location.png",
            iconSize: [30, 30]
        });
        this.markersCluster = new leaflet__WEBPACK_IMPORTED_MODULE_0__.MarkerClusterGroup();
        this.acc = 1222000;
        ///******************* SMS vars (hafsa) *********************//////////
        this.disbale_sms = false;
        this.verification_code = null;
        this.timeLeft = 5;
        /////////////////////////*******************///////////////////////////////////////
        this.version = 6;
    }
    showcheck() {
        this.Status = true;
        this.hide = !this.hide;
    }
    // ngOnInit(): void {
    //   setInterval(() => this.manageProgress(), 150 )
    //   this.initMap()
    // }
    // ngAfterViewInit(): void {
    //   setInterval(() => this.manageProgress(), 150 )
    //   this.initMap()
    // }
    // private initMap(): void {
    //   this.map = L.map('map2', {
    //     center: [this.lat, this.lon],
    //     zoom: 15,
    //     zoomControl: false
    //   });
    //   const zoomOptions = {
    //     zoomInText: '+',
    //     zoomOutText: '-',
    //   };
    //   // const zoom = L.control.zoom(zoomOptions);
    //   const tiles = L.tileLayer('https://map.novatis.tech/hot/{z}/{x}/{y}.png', {
    //     maxZoom: 30,
    //     minZoom: 0
    //   });
    //   // const lc = L.control.locate(locationControl)
    //   // lc.addTo(this.map);
    //   // zoom.addTo(this.map);
    //   tiles.addTo(this.map);
    //   this.map.addLayer(this.markersCluster);
    //   this.map.addControl(L.control.zoom({ position: 'bottomleft' }))
    // }
    //  AlertOffOn(){
    //    if (!this.onlineOfflineService.isOnline){
    //     let popup = this.popupService.showPopupOverlay("Saved successfully");
    //     setTimeout(() => {
    //       popup.hide();
    //     }, 2500);
    //    }else{
    //     let popup = this.popupService.showPopupOverlay("Saved successfully");
    //     setTimeout(() => {
    //       popup.hide();
    //     }, 2500);
    //    }
    //  }
    manageProgress() {
        if (this.progress === 100) {
            this.progress = 0;
        }
        else {
            this.progress = this.progress + incr;
        }
    }
    clearResult() {
        this.qrResultString = null;
    }
    toggleShow(nbr, resultString) {
        console.log(nbr);
        console.log(resultString);
        console.log(this.ListCodes);
        this.isShown = !this.isShown;
        if (nbr === 1) {
            this.code = { nbr: nbr, value: resultString };
            this.upsert(this.ListCodes, this.code);
            this.qrResultString = null;
        }
        if (nbr === 2) {
            this.code = { nbr: nbr, value: resultString };
            this.upsert(this.ListCodes, this.code);
            this.qrResultString = null;
        }
        if (nbr === 3) {
            this.code = { nbr: nbr, value: resultString };
            this.upsert(this.ListCodes, this.code);
            this.qrResultString = null;
        }
        if (nbr === 4) {
            this.code = { nbr: nbr, value: resultString };
            this.upsert(this.ListCodes, this.code);
            this.qrResultString = null;
        }
        //this.code={nbr:nbr,value: resultString}
        //this.upsert(this.ListCodes,this.code)
    }
    upsert(array, item) {
        const i = array.findIndex(_item => _item.nbr === item.nbr);
        if (i > -1)
            array[i] = item; // (2)
        else
            array.push(item);
    }
    onCodeResult(resultString) {
        this.qrResultString = resultString;
    }
    ngAfterViewInit() {
        // setInterval(() => this.manageProgress(), 150)
        this.loggedUser = JSON.parse(localStorage.getItem("user"));
        this.initMap();
        this._setting.getTimeSMS().subscribe(res => this.timeLeft = res.details.time);
        this.aroute.paramMap.subscribe(params => {
            this.mySector = params.get('sector');
            console.log("mysector" + this.mySector);
            this.clientInfos.sector = this.mySector;
        });
        // this.getLocation()
        // this.getLo();
    }
    initMap() {
        this.Status = true;
        this.testTimer();
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_0__.map('map2', {
            center: [this.lat, this.lon],
            zoom: 14,
            zoomControl: true
        });
        const tiles = leaflet__WEBPACK_IMPORTED_MODULE_0__.tileLayer('https://map.novatis.tech/hot/{z}/{x}/{y}.png', {
            maxZoom: 30,
            minZoom: 0
        });
        tiles.addTo(this.map);
        var location_icon = leaflet__WEBPACK_IMPORTED_MODULE_0__.icon({
            iconUrl: "assets/location.png",
            iconSize: [30, 30]
        });
        var marker = leaflet__WEBPACK_IMPORTED_MODULE_0__.marker([this.lat, this.lon], { icon: location_icon });
        this.inter = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.interval)(1000).subscribe(x => {
            if (navigator.geolocation) {
                if (this.percentage == 100) {
                    this.inter.unsubscribe();
                    this.clientInfos["lat"] = this.latclt;
                    this.clientInfos["lon"] = this.lonclt;
                    // console.log(this.clientInfos)
                }
                var options = {
                    enableHighAccuracy: false,
                    timeout: 5000,
                    maximumAge: 2000
                };
                // console.log(this.percentage)
                var geoId = navigator.geolocation.watchPosition((position) => {
                    if (position) {
                        // console.log("Latitude: " + position.coords.latitude +
                        // " // Longitude: " + position.coords.longitude);
                        var newlat = position.coords.latitude;
                        var newLon = position.coords.longitude;
                        // if (position.coords.accuracy > 10) {
                        //   console.log("The GPS accuracy isn't good enough");
                        // }
                        if (newlat != this.lat || newLon != this.lat) {
                            //console.log("nmi rah tbdl")
                            // this.percentage=0
                            this.lat = newlat;
                            this.lon = newLon;
                            this.list.push(position);
                            // console.log(this.list)
                            // console.log("Accuracy:"+position.coords.accuracy)
                            if (position.coords.accuracy < this.acc) {
                                console.log("********** Accuracy:" + position.coords.accuracy);
                                this.acc = position.coords.accuracy;
                                this.lat = position.coords.latitude;
                                this.lon = position.coords.longitude;
                                this.latclt = position.coords.latitude;
                                this.lonclt = position.coords.longitude;
                            }
                            // console.log(this.lat)
                            // console.log(this.lon)
                            this.map.removeLayer(marker);
                            this.show = false;
                            this.Status = true;
                            marker = new leaflet__WEBPACK_IMPORTED_MODULE_0__.marker([this.lat, this.lon], { icon: location_icon }).addTo(this.map);
                        }
                        console.log(this.lat);
                        console.log(this.lon);
                        this.map.removeLayer(marker);
                        this.show = false;
                        this.Status = true;
                        marker = new leaflet__WEBPACK_IMPORTED_MODULE_0__.marker([this.lat, this.lon], { icon: location_icon }).addTo(this.map);
                    }
                }, (error) => console.log(error), options);
                // console.log('Clear watch called');
                // window.navigator.geolocation.clearWatch(geoId);
            }
            else {
                alert("Geolocation is not supported by this browser.");
            }
        });
    }
    getLo() {
        // var marker = L.geoJSON(this.geojsonFeature, {
        //   pointToLayer: (point, latlon) => {
        //     return L.marker(latlon, { icon: this.icone })
        //   }
        // });
        // marker.addTo(this.map)
        this.circle = leaflet__WEBPACK_IMPORTED_MODULE_0__.circle([this.lat, this.lon], 20).addTo(this.map);
        leaflet__WEBPACK_IMPORTED_MODULE_0__.Circle.include({
            contains: function (latLng) {
                return this.getLatLng().distanceTo(latLng) < this.getRadius();
            }
        });
        this.map.fitBounds(this.circle.getBounds());
    }
    testTimer() {
        this.percentage = 0;
        (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.interval)(300).subscribe(x => {
            if (this.percentage < 100) {
                this.percentage += 4;
            }
        });
    }
    addNewComponent() {
        this.show = true;
        this.Status = false;
    }
    CheckCodes() {
        this.nfcShown = !this.nfcShown;
        this.test = true;
        console.log(this.ListCodes);
        this.clientInfos.codes = this.ListCodes;
    }
    Read() {
        console.log("read");
        //this.clientInfos.codeNFC=12345
        this.clientService.getNFC().subscribe(res => {
            this.clientInfos.nfc.Numero_Serie = res.Numero_Serie;
            this.UUID_nfc = res.UUID;
            this.clientInfos.nfc.Technologies = res.Technologies;
            this.clientInfos.nfc.Type_card = res.Type_card;
            this.clientInfos.nfc.UUID = res.UUID;
        });
    }
    getCoordinates() {
    }
    ///send sms (Nano)
    SendSMS(phone) {
        this.clientService.getSMS(phone).subscribe(res => {
            console.log(res);
            this.verification_code = res.code;
        });
    }
    ;
    Verify(code) {
        this.disbale_sms = true;
        this.clientInfos.PhoneNumber = this.PhoneNumber;
        this.timer(this.timeLeft);
        this.SendSMS(this.PhoneNumber);
    }
    VerifySMS() {
        if (this.verification_code === this.codeSMS) {
            this.status = "the code is correct";
        }
        else {
            this.status = "the code is incorrect";
        }
    }
    timer(minute) {
        // let minute = 1;
        let seconds = minute * 60;
        let textSec = "0";
        let statSec = 60;
        const prefix = minute < 10 ? "0" : "";
        const timer = setInterval(() => {
            seconds--;
            if (statSec != 0)
                statSec--;
            else
                statSec = 59;
            if (statSec < 10) {
                textSec = "0" + statSec;
            }
            else
                textSec = statSec;
            this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;
            if (seconds == 0) {
                console.log("finished");
                clearInterval(timer);
                this.verification_code = null;
                this.disbale_sms = false;
            }
        }, 1000);
    }
    Send() {
        // this.clientInfos.UUid=UUID.UUID();
        this.clientInfos.PhoneNumber = this.PhoneNumber;
        this.clientInfos.NomPrenom = this.NomPrenom;
        this.clientInfos.TypeDPV = this.TypeDPV;
        this.clientInfos.detailType = this.detailType;
        this.clientInfos.userId = this.user._id;
        this.clientInfos.userRole = this.user.role;
        /*if(this.clientInfos.codeNFC===null){
          this.clientInfos["Status"]="red"
        }
        else{
          this.clientInfos["Status"]="green"
        }*/
        this.clientInfos.created_at = Date.now();
        this.clientInfos.updated_at = Date.now();
        this.clientInfos.Status = "red_white";
        console.log(this.clientInfos);
        if (!this.onlineOfflineService.isOnline) {
            this.clientService.addTodo(this.clientInfos);
            this._router.navigate(['map']);
        }
        else {
            /* this.clientService.SendClient(this.clientInfos).subscribe(res =>{
               console.log("response from the API "+res)*/
            /*this.clientInfos={UUid:null,nfc:null,codes:[],codeNFC:null, NFCPhoto:null, TypeDPV:null,sector:null,
               NomPrenom:null, PhoneNumber:null, detailType:null,userId:null, userRole:null, PVPhoto:null,Status:"red",created_at:null,updated_at:null}
             */
            this.clientService.SendClient(this.clientInfos).subscribe(res => { console.log("res"); });
            console.log("resss-----");
            //console.log(res)
            console.log("res----");
            this.index.ClearData();
            var db;
            var transaction;
            var request = window.indexedDB.open("off", this.version);
            request.onerror = function (event) {
                console.log("Why didn't you allow my web app to use IndexedDB?!");
            };
            request.onsuccess = (event) => {
                db = event.target.result;
                console.log("$$$$$$$$$$$ success Add client$$$$$$$$$$$$$$$$$$ *******************************");
                var allclient = [];
                this.clientService.getAllClient().subscribe(res => {
                    console.log(" \n get all element");
                    res.forEach(element => {
                        console.log("----------------------------------------------------------------");
                        console.log(res);
                        var geo = { _id: element._id, Valeur: JSON.stringify(element.geometry) };
                        allclient.push(geo);
                        transaction = db.transaction(['data'], 'readwrite');
                        var objectStore = transaction.objectStore("data");
                        var request = objectStore.add(geo);
                        request.onsuccess = (event) => {
                            console.log("****************** done Adding to Database \n Add Client \n *******************");
                            this._router.navigate(['map']);
                            //.then(() => {
                            //window.location.reload();
                            // });
                        };
                    });
                });
            };
            /* this.clientInfos = {
               UUid:null,codes: [], codeNFC: null, NFCPhoto: null, TypeDPV: null, sector: null,
               NomPrenom: null, PhoneNumber: null, detailType: null, userId: null, userRole: null, PVPhoto: null, Status: "red", created_at:null,updated_at:null
             }*/
        }
    }
    ///////////////////////
    // fadma's code
    toggleNFCWebcam() {
        this.showNFCWebcam = !this.showNFCWebcam;
    }
    displayNFCam() {
        this.showNFCWebcam = !this.showNFCWebcam;
    }
    triggerSnapshot() {
        this.trigger.next();
    }
    // handleImage(webcamImage): void {
    //   console.info('Saved webcam image', webcamImage);
    //   this.webcamImage = webcamImage;
    //   if(this.camera1) {this.clientInfos.NFCPhoto= webcamImage}
    //   if(this.camera2) {this.clientInfos.PVPhoto = webcamImage}
    //   console.log(this.webcamNFCImage.imageAsDataUrl);
    // }
    get triggerObservable() {
        return this.trigger.asObservable();
    }
    handleNFCImage(webcamNFCImage) {
        console.info('received webcam image', webcamNFCImage);
        this.webcamNFCImage = webcamNFCImage;
        this.clientInfos.nfc.NFCPhoto = webcamNFCImage.imageAsDataUrl;
        console.log(this.clientInfos);
    }
    togglePDVWebcam() {
        this.showPDVWebcam = !this.showPDVWebcam;
    }
    displayPDVcam() {
        this.showPDVWebcam = !this.showPDVWebcam;
    }
    handlePDVImage(webcamPDVImage) {
        console.info('received webcam image', webcamPDVImage);
        this.webcamPDVImage = webcamPDVImage;
        this.clientInfos.PVPhoto = webcamPDVImage.imageAsDataUrl;
    }
    openAlertDialog(msg, btn) {
        const dialogRef = this.dialog.open(_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_2__.AlertDialogComponent, {
            data: {
                message: msg,
                buttonText: {
                    ok: btn,
                }
            }
        });
    }
}
AddclientComponent.ɵfac = function AddclientComponent_Factory(t) { return new (t || AddclientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_online_offline_service_service__WEBPACK_IMPORTED_MODULE_3__.OnlineOfflineServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_clients_service__WEBPACK_IMPORTED_MODULE_4__.ClientsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_indexdb_service__WEBPACK_IMPORTED_MODULE_5__.IndexdbService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_settings_settings_service__WEBPACK_IMPORTED_MODULE_6__.SettingsService)); };
AddclientComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AddclientComponent, selectors: [["app-addclient"]], decls: 20, vars: 12, consts: [[1, "content-body"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], ["ng-app", "", "ng-controller", "ApplicationController", 1, "progress-cantainer"], ["mode", "determinate", 3, "value"], [2, "position", "absolute", "top", "0em", 3, "ngStyle"], [1, "map-container"], ["id", "map2"], ["mat-button", "", 1, "btn-yellow", 3, "disabled", "click"], ["class", "container", "id", "checkcodes", 4, "ngIf"], ["class", "container", "id", "nfc", 4, "ngIf"], ["id", "checkcodes", 1, "container"], [1, "checkcodes-fields"], [1, "scan-field"], [1, "input-label"], ["mat-button", "", 1, "btn-green", 3, "disabled", "click"], ["class", "qr-container", 4, "ngFor", "ngForOf"], ["id", "divshow", "class", "Scan-container", 4, "ngIf"], [1, "qr-container"], [4, "ngIf"], ["id", "divshow", 1, "Scan-container"], ["Class", "small-video", 3, "scanSuccess"], ["class", "results", 4, "ngIf"], [1, "results"], ["mat-button", "", 1, "btn-green", 3, "click"], ["id", "nfc", 1, "container"], [1, "inputs-container"], ["class", "nfc", 4, "ngIf"], [1, "pdv"], [1, "field"], ["placeholder", "PDV Type*", "panelClass", "selectPanel2", 3, "ngModel", "value", "ngModelChange", "valueChange"], ["value", "Detail"], ["value", "Gros"], ["value", "Demi Gros"], ["class", "field", 4, "ngIf"], ["matInput", "", "placeholder", "Typing...", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "+212", 3, "ngModel", "ngModelChange"], ["class", "Scan-container", 4, "ngIf"], ["mat-button", "", 1, "btn-yellow", 3, "click"], [1, "nfc"], ["class", "nfc-div", 4, "ngIf"], [1, "nfc-div"], [1, "Scan-container"], [3, "height", "width", "trigger", "imageCapture"], [1, "reas-nfc"], [1, "snapshot"], [2, "border-radius", "8px", 3, "height", "width", "src"], ["placeholder", "PDV Detail Type*", "panelClass", "selectPanel2", 3, "ngModel", "ngModelChange"], ["value", "Alimentation"], ["value", "Superette"], ["value", "Aattar"], ["value", "Fruits sec"], ["value", "Boundif"], ["value", "Parfumerie"], ["value", "Kioske"], ["matInput", "", "placeholder", "code SMS", "name", "codeSMS", 3, "ngModel", "ngModelChange"], [3, "click"], [3, "height", "width", "src"]], template: function AddclientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddclientComponent_ng_container_1_Template, 3, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AddclientComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "mat-progress-bar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddclientComponent_Template_button_click_16_listener() { return ctx.showcheck(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, AddclientComponent_div_18_Template, 26, 8, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, AddclientComponent_div_19_Template, 38, 11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.percentage == 100)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("pos collect\u00E9s: ", ctx.list.length, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Accuracy: ", ctx.acc, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.percentage);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](10, _c0, ctx.percentage + "%"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx.percentage, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.percentage != 100 || !ctx.Status);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.nfcShown);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__.MatProgressBar, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgStyle, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_15__.ZXingScannerComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, ngx_webcam__WEBPACK_IMPORTED_MODULE_22__.WebcamComponent], styles: ["@media (min-width: 1200px){\r\n\r\n\r\n.progress-cantainer{\r\n    position: relative; \r\n    width: 500px;\r\n    margin: auto;\r\n}\r\n\r\n.progress-cantainer span{\r\n    position: absolute; \r\n    top: 0em; \r\n    font-size: 12px; \r\n    margin: auto;\r\n}\r\n\r\n.mat-progress-bar-fill::after {\r\n    background-color: #27AE61;\r\n}\r\n\r\n.mat-progress-bar-buffer {\r\n    background: #fff;\r\n}\r\n\r\n\r\n.mat-select-arrow {\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 5px solid transparent;\r\n    border-right: 5px solid transparent;\r\n    border-top: 5px solid;\r\n    margin: 0 4px;\r\n    color: #27AE61;\r\n  }\r\n\r\n.mat-progress-bar {\r\n    height: 1em !important;\r\n    margin-bottom: 20px;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n    border-radius: 20px;\r\n}\r\n.content-body{\r\n    background-color: #F6F6F6;\r\n    padding: 20px;\r\n    text-align: center;\r\n    margin: auto;\r\n}\r\n\r\n.content-body p{\r\n    margin-bottom: 10px;\r\n    color: #646262;\r\n}\r\n\r\n.container{\r\n    display: flex;\r\n    padding: 20px;\r\n    margin: 20px;\r\n    flex-flow: column wrap ;\r\n    background-color: #fff;\r\n    justify-content: flex-start ;\r\n    align-items: center;\r\n    grid-gap: 10px 20px;\r\n    gap: 10px 20px; \r\n    border-radius: 20px;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\r\n}\r\n.container button{\r\n    align-self: flex-end;\r\n}\r\n\r\n.checkcodes-fields{\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    align-items: center;\r\n    grid-gap: 20px;\r\n    gap: 20px;\r\n}\r\n\r\n.scan-field{\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    align-items: center;\r\n    grid-gap: 10px;\r\n    gap: 10px;\r\n}\r\n.scan-field label{\r\n    color: #646262;\r\n}\r\n.Scan-container{\r\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\r\n}\r\n\r\n.inputs-container{\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    grid-gap: 60px;\r\n    gap: 60px;\r\n    align-items: flex-start;\r\n}\r\n.nfc{\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    grid-gap: 20px;\r\n    gap: 20px;\r\n}\r\n.pdv{\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    justify-content: flex-start;\r\n    align-items: flex-start;\r\n    grid-gap: 20px;\r\n    gap: 20px;\r\n}\r\n.field{\r\n    display: flex;\r\n    flex-flow: row;\r\n    grid-gap: 10px;\r\n    gap: 10px;\r\n    align-items: center;\r\n}\r\n.mat-form-field-ripple {\r\n    background-color: #27AE61 !important;\r\n}\r\n\r\n.scan-field div{\r\n    display: flex; \r\n    flex-flow: row; \r\n    grid-gap: 10px; \r\n    gap: 10px; \r\n    align-items: center; \r\n    justify-content: flex-start;\r\n}\r\n\r\n.qr-container{\r\n    background-color: #fff;\r\n    left: 0;\r\n    text-align: left;\r\n    padding-right: 3px;\r\n    padding-left: 3px;\r\n    border-radius: 4px;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    height: 20px;\r\n    font-size: 10px;\r\n}\r\n\r\n.field mat-label{\r\n    color: #646262;\r\n}\r\n\r\n.field .mat-form-field input{\r\n    font-size: 12px;\r\n    color: #313030;\r\n}\r\n.field .mat-form-field .mat-select{\r\n    font-size: 12px;\r\n    color: #313030;\r\n}\r\n\r\n  mat-form-field.mat-focused span.mat-form-field-label-wrapper label {\r\n    color:#27AE61 !important;\r\n  }\r\n\r\n.custom-select{\r\n  border-radius: 12px;\r\n  width:170px;\r\n  height: 30px;\r\n  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\r\n  border: #fff;\r\n}\r\n\r\n.map-container{ \r\n\r\n    width: 700px;\r\n    height: 400px;\r\n    /* margin: 20px ; */\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\r\n    /* display: flex;\r\n    justify-content: center; */\r\n    margin: auto;  \r\n    border-radius: 10px;\r\n     \r\n}\r\n.mat-select:focus:not(.mat-select-disabled).mat-primary .mat-select-arrow {\r\n    color: #63961C;\r\n}\r\n \r\n\r\n#map2 {\r\n    height: 100%;\r\n    border-radius: 10px;\r\n}\r\n\r\n\r\n.small-video{\r\n    max-height: 700px;\r\n    width: 300px;\r\n    -o-object-fit: contain;\r\n       object-fit: contain;\r\n}\r\n\r\n.results{\r\n  background-color:#fff;\r\n}\r\n\r\n.action-button{\r\n  background-color: #27AE61;\r\n  border-radius: 12px;\r\n  border: 1px solid rgba(27, 31, 35, .15);\r\n  box-sizing: border-box;\r\n  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\r\n  color: #fff;\r\n  font-size: 14px;\r\n  line-height: 20px;\r\n  position: relative;\r\n  text-align: center;\r\n  width:100px;\r\n  height: 30px;\r\n}\r\n.action-buttonShot{\r\n  background-color: #27AE61;\r\n  border-radius: 12px;\r\n  border: 1px solid rgba(27, 31, 35, .15);\r\n  box-sizing: border-box;\r\n  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\r\n  color: #fff;\r\n  font-size: 14px;\r\n  line-height: 20px;\r\n  position: relative;\r\n  text-align: center;\r\n  padding: 5px;\r\n}\r\n\r\n\r\n\r\n.btn-yellow{\r\n    margin-top: 8px;\r\n    background-color: #FACF37;\r\n    color: #fff;\r\n    font-size: 13px;\r\n    line-height: 30px;\r\n    /* width: 100px !important; */\r\n    border-radius: 40px;\r\n    text-align: center !important;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n}\r\n\r\n.btn-yellow:disabled{\r\n    background-color: #C2BEBE;\r\n    color: #313030;\r\n}\r\n\r\n.btn-green{\r\n    background-color: #27AE61;\r\n    color: #fff;\r\n    margin: auto;\r\n    font-size: 13px;\r\n    line-height: 30px;\r\n    width: 130px !important;\r\n    border-radius: 20px;\r\n    text-align: center !important;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n}\r\n\r\n.btn-green:disabled{\r\n    background-color: #C2BEBE;\r\n    color: #313030;\r\n}\r\n\r\n.scan-field div{\r\n    display: flex; \r\n    flex-flow: row; \r\n    grid-gap: 10px; \r\n    gap: 10px; \r\n    align-items: center; \r\n    justify-content: flex-start;\r\n} \r\n.qr-container{\r\n    background-color: #fff;\r\n    left: 0;\r\n    text-align: left;\r\n    padding-right: 3px;\r\n    padding-left: 3px;\r\n    border-radius: 4px;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    height: 20px;\r\n    font-size: 12px;\r\n}\r\n\r\n/* .NFC-container{\r\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\r\n    display: flex;\r\n    padding: 40px;\r\n    margin: 20px;\r\n    flex-flow: row wrap ;\r\n    justify-content: flex-start ;\r\n    align-items: center;\r\n    gap: 10px 20px; \r\n    background-color: #fff;\r\n    border-radius: 20px;\r\n} */\r\n}\r\n\r\n@media (min-width: 900px) and (max-width: 1200px){\r\n    \r\n    .progress-cantainer{\r\n        position: relative; \r\n        width: 500px;\r\n        margin: auto;\r\n    }\r\n    \r\n    .progress-cantainer span{\r\n        position: absolute; \r\n        top: 0em; \r\n        font-size: 12px; \r\n        margin: auto;\r\n    }\r\n    \r\n    .mat-progress-bar-fill::after {\r\n        background-color: #27AE61;\r\n    }\r\n    \r\n    .mat-progress-bar-buffer {\r\n        background: #fff;\r\n    }\r\n    \r\n    \r\n    .mat-select-arrow {\r\n        width: 0;\r\n        height: 0;\r\n        border-left: 5px solid transparent;\r\n        border-right: 5px solid transparent;\r\n        border-top: 5px solid;\r\n        margin: 0 4px;\r\n        color: #27AE61;\r\n      }\r\n    \r\n    .mat-progress-bar {\r\n        height: 1em !important;\r\n        margin-bottom: 20px;\r\n        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n        border-radius: 20px;\r\n    }\r\n    .content-body{\r\n        background-color: #F6F6F6;\r\n        padding: 20px;\r\n        text-align: center;\r\n        margin: auto;\r\n    }\r\n    \r\n    .content-body p{\r\n        margin-bottom: 10px;\r\n        color: #646262;\r\n    }\r\n    \r\n    .container{\r\n        display: flex;\r\n        padding: 20px;\r\n        margin: 20px;\r\n        flex-flow: column wrap ;\r\n        background-color: #fff;\r\n        justify-content: flex-start ;\r\n        align-items: center;\r\n        grid-gap: 10px 20px;\r\n        gap: 10px 20px; \r\n        border-radius: 20px;\r\n        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\r\n    }\r\n    .container button{\r\n        align-self: flex-end;\r\n    }\r\n    \r\n    .checkcodes-fields{\r\n        display: flex;\r\n        flex-flow: row wrap;\r\n        align-items: center;\r\n        grid-gap: 20px;\r\n        gap: 20px;\r\n    }\r\n    \r\n    .scan-field{\r\n        display: flex;\r\n        flex-flow: row wrap;\r\n        align-items: center;\r\n        grid-gap: 10px;\r\n        gap: 10px;\r\n    }\r\n    .scan-field label{\r\n        color: #646262;\r\n    }\r\n    .Scan-container{\r\n      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\r\n    }\r\n    \r\n    .scan-field div{\r\n        display: flex; \r\n        flex-flow: row; \r\n        grid-gap: 10px; \r\n        gap: 10px; \r\n        align-items: center; \r\n        justify-content: flex-start;\r\n    }\r\n    \r\n    .qr-container{\r\n        background-color: #fff;\r\n        left: 0;\r\n        text-align: left;\r\n        padding-right: 3px;\r\n        padding-left: 3px;\r\n        border-radius: 4px;\r\n        width: -webkit-fit-content;\r\n        width: -moz-fit-content;\r\n        width: fit-content;\r\n        height: 20px;\r\n        font-size: 10px;\r\n    }\r\n    .inputs-container{\r\n        display: flex;\r\n        flex-flow: row wrap;\r\n        grid-gap: 60px;\r\n        gap: 60px;\r\n        align-items: flex-start;\r\n    }\r\n    .nfc{\r\n        display: flex;\r\n        flex-flow: column wrap;\r\n        grid-gap: 20px;\r\n        gap: 20px;\r\n    }\r\n    .pdv{\r\n        display: flex;\r\n        flex-flow: column wrap;\r\n        justify-content: flex-start;\r\n        align-items: flex-start;\r\n        grid-gap: 20px;\r\n        gap: 20px;\r\n    }\r\n    .field{\r\n        display: flex;\r\n        flex-flow: row;\r\n        grid-gap: 10px;\r\n        gap: 10px;\r\n        align-items: center;\r\n    }\r\n    .mat-form-field-ripple {\r\n        background-color: #27AE61 !important;\r\n    }\r\n    \r\n    \r\n    \r\n    .field mat-label{\r\n        color: #646262;\r\n    }\r\n    \r\n    .field .mat-form-field input{\r\n        font-size: 12px;\r\n        color: #313030;\r\n    }\r\n    .field .mat-form-field .mat-select{\r\n        font-size: 12px;\r\n        color: #313030;\r\n    }\r\n    \r\n      mat-form-field.mat-focused span.mat-form-field-label-wrapper label {\r\n        color:#27AE61 !important;\r\n      }\r\n    \r\n    .custom-select{\r\n      border-radius: 12px;\r\n      width:170px;\r\n      height: 30px;\r\n      box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\r\n      border: #fff;\r\n    }\r\n    \r\n    .map-container{ \r\n    \r\n        width: 700px;\r\n        height: 400px;\r\n        /* margin: 20px ; */\r\n        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\r\n        /* display: flex;\r\n        justify-content: center; */\r\n        margin: auto;  \r\n        border-radius: 10px;\r\n         \r\n    }\r\n    .mat-select:focus:not(.mat-select-disabled).mat-primary .mat-select-arrow {\r\n        color: #63961C;\r\n    }\r\n     \r\n    \r\n    #map2 {\r\n        height: 100%;\r\n        border-radius: 10px;\r\n    }\r\n    \r\n    \r\n    .small-video{\r\n        max-height: 700px;\r\n        width: 300px;\r\n        -o-object-fit: contain;\r\n           object-fit: contain;\r\n    }\r\n    \r\n    .results{\r\n      background-color:#fff;\r\n    }\r\n    \r\n    .action-button{\r\n      background-color: #27AE61;\r\n      border-radius: 12px;\r\n      border: 1px solid rgba(27, 31, 35, .15);\r\n      box-sizing: border-box;\r\n      box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\r\n      color: #fff;\r\n      font-size: 14px;\r\n      line-height: 20px;\r\n      position: relative;\r\n      text-align: center;\r\n      width:100px;\r\n      height: 30px;\r\n    }\r\n    .action-buttonShot{\r\n      background-color: #27AE61;\r\n      border-radius: 12px;\r\n      border: 1px solid rgba(27, 31, 35, .15);\r\n      box-sizing: border-box;\r\n      box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\r\n      color: #fff;\r\n      font-size: 14px;\r\n      line-height: 20px;\r\n      position: relative;\r\n      text-align: center;\r\n      padding: 5px;\r\n    }\r\n    \r\n    \r\n    \r\n    .btn-yellow{\r\n        margin-top: 8px;\r\n        background-color: #FACF37;\r\n        color: #fff;\r\n        font-size: 13px;\r\n        line-height: 30px;\r\n        /* width: 100px !important; */\r\n        border-radius: 40px;\r\n        text-align: center !important;\r\n        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n    }\r\n    .btn-green{\r\n        background-color: #27AE61;\r\n        color: #fff;\r\n        margin: auto;\r\n        font-size: 13px;\r\n        line-height: 30px;\r\n        width: 100px !important;\r\n        border-radius: 20px;\r\n        text-align: center !important;\r\n        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n    }\r\n\r\n    .btn-green:disabled{\r\n        background-color: #C2BEBE;\r\n        color: #313030;\r\n    }\r\n    .btn-yellow:disabled{\r\n        background-color: #C2BEBE;\r\n        color: #313030;\r\n    }\r\n\r\n    .scan-field div{\r\n        display: flex; \r\n        flex-flow: row; \r\n        grid-gap: 10px; \r\n        gap: 10px; \r\n        align-items: center; \r\n        justify-content: flex-start;\r\n    } \r\n    .qr-container{\r\n        background-color: #fff;\r\n        left: 0;\r\n        text-align: left;\r\n        padding-right: 3px;\r\n        padding-left: 3px;\r\n        border-radius: 4px;\r\n        width: -webkit-fit-content;\r\n        width: -moz-fit-content;\r\n        width: fit-content;\r\n        height: 20px;\r\n        font-size: 10px;\r\n    }\r\n\r\n    \r\n}\r\n\r\n@media (min-width: 600px) and (max-width: 900px){\r\n    \r\n    .progress-cantainer{\r\n        position: relative; \r\n        width: 500px;\r\n        margin: auto;\r\n    }\r\n    \r\n    .progress-cantainer span{\r\n        position: absolute; \r\n        top: 0em; \r\n        font-size: 12px; \r\n        margin: auto;\r\n    }\r\n    \r\n    .mat-progress-bar-fill::after {\r\n        background-color: #27AE61;\r\n    }\r\n    \r\n    .mat-progress-bar-buffer {\r\n        background: #fff;\r\n    }\r\n    \r\n    \r\n    .mat-select-arrow {\r\n        width: 0;\r\n        height: 0;\r\n        border-left: 5px solid transparent;\r\n        border-right: 5px solid transparent;\r\n        border-top: 5px solid;\r\n        margin: 0 4px;\r\n        color: #27AE61;\r\n      }\r\n    \r\n    .mat-progress-bar {\r\n        height: 1em !important;\r\n        margin-bottom: 20px;\r\n        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n        border-radius: 20px;\r\n    }\r\n    .content-body{\r\n        background-color: #F6F6F6;\r\n        padding: 20px;\r\n        text-align: center;\r\n        margin: auto;\r\n    }\r\n    \r\n    .content-body p{\r\n        margin-bottom: 10px;\r\n        color: #646262;\r\n    }\r\n    \r\n    .container{\r\n        display: flex;\r\n        padding: 30px;\r\n        margin: 20px;\r\n        flex-flow: column wrap ;\r\n        background-color: #fff;\r\n        justify-content: flex-start ;\r\n        align-items: flex-start;\r\n        grid-gap: 10px 20px;\r\n        gap: 10px 20px; \r\n        border-radius: 20px;\r\n        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\r\n    }\r\n    .container button{\r\n        align-self: flex-end;\r\n    }\r\n    \r\n    .checkcodes-fields{\r\n        display: flex;\r\n        flex-flow: column wrap;\r\n        align-items: flex-start;\r\n        align-content: flex-start;\r\n        grid-gap: 20px;\r\n        gap: 20px;\r\n    }\r\n    \r\n    .scan-field{\r\n        display: flex;\r\n        flex-flow: row wrap;\r\n        align-items: center;\r\n        grid-gap: 10px;\r\n        gap: 10px;\r\n    }\r\n    .scan-field label{\r\n        color: #646262;\r\n    }\r\n    \r\n    .scan-field div{\r\n        display: flex; \r\n        flex-flow: row; \r\n        grid-gap: 10px; \r\n        gap: 10px; \r\n        align-items: center; \r\n        justify-content: flex-start;\r\n    }\r\n    \r\n    .qr-container{\r\n        background-color: #fff;\r\n        left: 0;\r\n        text-align: left;\r\n        padding-right: 3px;\r\n        padding-left: 3px;\r\n        border-radius: 4px;\r\n        width: -webkit-fit-content;\r\n        width: -moz-fit-content;\r\n        width: fit-content;\r\n        height: 20px;\r\n        font-size: 10px;\r\n    }\r\n    \r\n    .inputs-container{\r\n        display: flex;\r\n        flex-flow: column wrap;\r\n        grid-gap: 10px;\r\n        gap: 10px;\r\n        align-items: flex-start;\r\n    }\r\n    .nfc{\r\n        display: flex;\r\n        flex-flow: column wrap;\r\n        grid-gap: 20px;\r\n        gap: 20px;\r\n    }\r\n    .pdv{\r\n        display: flex;\r\n        flex-flow: column wrap;\r\n        justify-content: flex-start;\r\n        align-items: flex-start;\r\n        grid-gap: 20px;\r\n        gap: 20px;\r\n    }\r\n    .field{\r\n        display: flex;\r\n        flex-flow: row;\r\n        grid-gap: 10px;\r\n        gap: 10px;\r\n        align-items: center;\r\n    }\r\n    .mat-form-field-ripple {\r\n        background-color: #27AE61 !important;\r\n    }\r\n    \r\n    \r\n    \r\n    .field mat-label{\r\n        color: #646262;\r\n    }\r\n    \r\n    .field .mat-form-field input{\r\n        font-size: 12px;\r\n        color: #313030;\r\n    }\r\n    .field .mat-form-field .mat-select{\r\n        font-size: 12px;\r\n        color: #313030;\r\n    }\r\n    \r\n      mat-form-field.mat-focused span.mat-form-field-label-wrapper label {\r\n        color:#27AE61 !important;\r\n      }\r\n    \r\n    .custom-select{\r\n      border-radius: 12px;\r\n      width:170px;\r\n      height: 30px;\r\n      box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\r\n      border: #fff;\r\n    }\r\n    \r\n    .map-container{ \r\n    \r\n        width: 500px;\r\n        height: 200px;\r\n        /* margin: 20px ; */\r\n        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\r\n        /* display: flex;\r\n        justify-content: center; */\r\n        margin: auto;  \r\n        border-radius: 10px;\r\n         \r\n    }\r\n    .mat-select:focus:not(.mat-select-disabled).mat-primary .mat-select-arrow {\r\n        color: #63961C;\r\n    }\r\n     \r\n    \r\n    #map2 {\r\n        height: 100%;\r\n        border-radius: 10px;\r\n    }\r\n    \r\n    \r\n    .small-video{\r\n        max-height: 700px;\r\n        width: 300px;\r\n        -o-object-fit: contain;\r\n           object-fit: contain;\r\n    }\r\n    \r\n    .results{\r\n      background-color:#fff;\r\n    }\r\n    \r\n    .action-button{\r\n      background-color: #27AE61;\r\n      border-radius: 12px;\r\n      border: 1px solid rgba(27, 31, 35, .15);\r\n      box-sizing: border-box;\r\n      box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\r\n      color: #fff;\r\n      font-size: 14px;\r\n      line-height: 20px;\r\n      position: relative;\r\n      text-align: center;\r\n      width:100px;\r\n      height: 30px;\r\n    }\r\n    .action-buttonShot{\r\n      background-color: #27AE61;\r\n      border-radius: 12px;\r\n      border: 1px solid rgba(27, 31, 35, .15);\r\n      box-sizing: border-box;\r\n      box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\r\n      color: #fff;\r\n      font-size: 14px;\r\n      line-height: 20px;\r\n      position: relative;\r\n      text-align: center;\r\n      padding: 5px;\r\n    }\r\n    \r\n    \r\n    \r\n    .btn-yellow{\r\n        margin-top: 8px;\r\n        background-color: #FACF37;\r\n        color: #fff;\r\n        font-size: 13px;\r\n        line-height: 30px;\r\n        /* width: 100px !important; */\r\n        border-radius: 40px;\r\n        text-align: center !important;\r\n        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n    }\r\n    .btn-green{\r\n        background-color: #27AE61;\r\n        color: #fff;\r\n        margin: auto;\r\n        font-size: 13px;\r\n        line-height: 30px;\r\n        width: 100px !important;\r\n        border-radius: 20px;\r\n        text-align: center !important;\r\n        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n    }\r\n\r\n    .btn-green:disabled{\r\n        background-color: #C2BEBE;\r\n        color: #313030;\r\n    }\r\n    .btn-yellow:disabled{\r\n        background-color: #C2BEBE;\r\n        color: #313030;\r\n    }\r\n\r\n    .scan-field div{\r\n        display: flex; \r\n        flex-flow: row; \r\n        grid-gap: 10px; \r\n        gap: 10px; \r\n        align-items: center; \r\n        justify-content: flex-start;\r\n    } \r\n    .qr-container{\r\n        background-color: #fff;\r\n        left: 0;\r\n        text-align: left;\r\n        padding-right: 3px;\r\n        padding-left: 3px;\r\n        border-radius: 4px;\r\n        width: -webkit-fit-content;\r\n        width: -moz-fit-content;\r\n        width: fit-content;\r\n        height: 20px;\r\n        font-size: 10px;\r\n    }\r\n    \r\n}\r\n\r\n@media (min-width: 350px) and (max-width: 599px){\r\n    \r\n    .progress-cantainer{\r\n        position: relative; \r\n        width: 300px;\r\n        margin: auto;\r\n    }\r\n    \r\n    .progress-cantainer span{\r\n        position: absolute; \r\n        top: 0em; \r\n        font-size: 10px; \r\n        margin: auto;\r\n    }\r\n    \r\n    .mat-progress-bar-fill::after {\r\n        background-color: #27AE61;\r\n    }\r\n    \r\n    .mat-progress-bar-buffer {\r\n        background: #fff;\r\n    }\r\n    \r\n    \r\n    .mat-select-arrow {\r\n        width: 0;\r\n        height: 0;\r\n        border-left: 5px solid transparent;\r\n        border-right: 5px solid transparent;\r\n        border-top: 5px solid;\r\n        margin: 0 4px;\r\n        color: #27AE61;\r\n      }\r\n    \r\n    .mat-progress-bar {\r\n        height: 0.5em !important;\r\n        margin-bottom: 20px;\r\n        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n        border-radius: 20px;\r\n    }\r\n    .content-body{\r\n        background-color: #F6F6F6;\r\n        padding: 6px;\r\n        text-align: center;\r\n        margin: auto;\r\n    }\r\n    \r\n    .content-body p{\r\n        margin-bottom: 10px;\r\n        color: #646262;\r\n        font-size: 12px;\r\n    }\r\n    \r\n    .container{\r\n        display: flex;\r\n        padding: 15px;\r\n        margin: 8px;\r\n        flex-flow: column wrap ;\r\n        background-color: #fff;\r\n        justify-content: flex-start ;\r\n        align-items: flex-start;\r\n        grid-gap: 10px 20px;\r\n        gap: 10px 20px; \r\n        border-radius: 15px;\r\n        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\r\n    }\r\n    .container button{\r\n        align-self: flex-end;\r\n    }\r\n    \r\n    .checkcodes-fields{\r\n        display: flex;\r\n        flex-flow: column wrap;\r\n        align-items: flex-start;\r\n        justify-content: flex-start;\r\n        grid-gap: 20px;\r\n        gap: 20px;\r\n    }\r\n    \r\n    .scan-field{\r\n        display: flex;\r\n        flex-flow: column wrap;\r\n        justify-content: flex-start;\r\n        align-content: flex-start;\r\n        grid-gap: 4px;\r\n        gap: 4px;\r\n    }\r\n    .scan-field label{\r\n        color: #646262;\r\n        align-self: flex-start;\r\n    }\r\n    .input-label{\r\n        font-size: 13px;\r\n    }\r\n    .scan-field div{\r\n        display: flex; \r\n        flex-flow: row; \r\n        grid-gap: 10px; \r\n        gap: 10px; \r\n        align-items: center; \r\n        justify-content: flex-start;\r\n    }\r\n    \r\n    .qr-container{\r\n        background-color: #fff;\r\n        left: 0;\r\n        text-align: left;\r\n        padding-right: 3px;\r\n        padding-left: 3px;\r\n        border-radius: 4px;\r\n        width: -webkit-fit-content;\r\n        width: -moz-fit-content;\r\n        width: fit-content;\r\n        height: 20px;\r\n        font-size: 10px;\r\n    }\r\n    \r\n    .inputs-container{\r\n        display: flex;\r\n        flex-flow: column wrap;\r\n        grid-gap: 10px;\r\n        gap: 10px;\r\n        align-items: flex-start;\r\n    }\r\n    .nfc{\r\n        display: flex;\r\n        flex-flow: column wrap;\r\n        grid-gap: 20px;\r\n        gap: 20px;\r\n    }\r\n    .pdv{\r\n        display: flex;\r\n        flex-flow: column wrap;\r\n        justify-content: flex-start;\r\n        align-items: flex-start;\r\n        grid-gap: 20px;\r\n        gap: 20px;\r\n    }\r\n    .field{\r\n        display: flex;\r\n        flex-flow: row;\r\n        grid-gap: 10px;\r\n        gap: 10px;\r\n        align-items: center;\r\n    }\r\n\r\n    .field button{\r\n        align-self: center;\r\n    }\r\n\r\n    .mat-form-field-ripple {\r\n        background-color: #27AE61 !important;\r\n    }\r\n    \r\n    .field mat-label{\r\n        color: #646262;\r\n    }\r\n    \r\n    .field .mat-form-field input{\r\n        font-size: 12px;\r\n        color: #313030;\r\n    }\r\n\r\n    .field .mat-form-field .mat-select{\r\n        font-size: 12px;\r\n        color: #313030;\r\n    }\r\n    \r\n    mat-form-field.mat-focused span.mat-form-field-label-wrapper label {\r\n    color:#27AE61 !important;\r\n    }\r\n    \r\n    .custom-select{\r\n      border-radius: 12px;\r\n      width:170px;\r\n      height: 30px;\r\n      box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\r\n      border: #fff;\r\n    }\r\n    \r\n    .map-container{ \r\n    \r\n        width: 300px;\r\n        height: 100px;\r\n        /* margin: 20px ; */\r\n        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\r\n        /* display: flex;\r\n        justify-content: center; */\r\n        margin: auto;  \r\n        border-radius: 6px;\r\n         \r\n    }\r\n    .mat-select:focus:not(.mat-select-disabled).mat-primary .mat-select-arrow {\r\n        color: #63961C;\r\n    }\r\n     \r\n    \r\n    #map2 {\r\n        height: 100%;\r\n        border-radius: 6px;\r\n    }\r\n    \r\n    \r\n    .small-video{\r\n        max-height: 600px;\r\n        width: 300px;\r\n        -o-object-fit: contain;\r\n           object-fit: contain;\r\n        border-radius: 10px;\r\n    }\r\n    \r\n    .results{\r\n      background-color:bor#DADADA;\r\n    }\r\n    \r\n    .action-button{\r\n      background-color: #27AE61;\r\n      border-radius: 12px;\r\n      border: 1px solid rgba(27, 31, 35, .15);\r\n      box-sizing: border-box;\r\n      box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\r\n      color: #fff;\r\n      font-size: 14px;\r\n      line-height: 20px;\r\n      position: relative;\r\n      text-align: center;\r\n      width:100px;\r\n      height: 30px;\r\n    }\r\n    .action-buttonShot{\r\n      background-color: #27AE61;\r\n      border-radius: 12px;\r\n      border: 1px solid rgba(27, 31, 35, .15);\r\n      box-sizing: border-box;\r\n      box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\r\n      color: #fff;\r\n      font-size: 14px;\r\n      line-height: 20px;\r\n      position: relative;\r\n      text-align: center;\r\n      padding: 5px;\r\n    }\r\n    \r\n    \r\n    \r\n    .btn-yellow{\r\n        margin-top: 8px;\r\n        background-color: #FACF37;\r\n        color: #fff;\r\n        font-size: 11px;\r\n        line-height: 20px;\r\n        /* width: 100px !important; */\r\n        border-radius: 40px;\r\n        text-align: center !important;\r\n        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n    }\r\n    .btn-yellow:disabled{\r\n        background-color: #C2BEBE;\r\n        color: #313030;\r\n    }\r\n\r\n    .btn-green{\r\n        background-color: #27AE61;\r\n        color: #fff;\r\n        font-size: 11px;\r\n        line-height: 20px;\r\n        width: 100px !important;\r\n        border-radius: 20px;\r\n        align-self: flex-start;\r\n        text-align: center !important;\r\n        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n    }\r\n    .btn-green:disabled{\r\n        background-color: #C2BEBE;\r\n        color: #313030;\r\n    }\r\n\r\n    \r\n    \r\n}\r\n\r\n@media (min-width: 200px) and (max-width: 350px){\r\n    \r\n    .progress-cantainer{\r\n        position: relative; \r\n        width: 200px;\r\n        margin: auto;\r\n    }\r\n    \r\n    .progress-cantainer span{\r\n        position: absolute; \r\n        top: 0em; \r\n        font-size: 10px; \r\n        margin: auto;\r\n    }\r\n    \r\n    .mat-progress-bar-fill::after {\r\n        background-color: #27AE61;\r\n    }\r\n    \r\n    .mat-progress-bar-buffer {\r\n        background: #fff;\r\n    }\r\n    \r\n    \r\n    .mat-select-arrow {\r\n        width: 0;\r\n        height: 0;\r\n        border-left: 5px solid transparent;\r\n        border-right: 5px solid transparent;\r\n        border-top: 5px solid;\r\n        margin: 0 4px;\r\n        color: #27AE61;\r\n      }\r\n    \r\n    .mat-progress-bar {\r\n        height: 0.5em !important;\r\n        margin-bottom: 20px;\r\n        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n        border-radius: 20px;\r\n    }\r\n    .content-body{\r\n        background-color: #F6F6F6;\r\n        padding: 8px;\r\n        text-align: center;\r\n        margin: auto;\r\n    }\r\n    \r\n    .content-body p{\r\n        margin-bottom: 10px;\r\n        color: #646262;\r\n        font-size: 12px;\r\n    }\r\n    \r\n    .container{\r\n        display: flex;\r\n        padding: 10px;\r\n        margin: 8px;\r\n        flex-flow: column wrap ;\r\n        background-color: #fff;\r\n        justify-content: flex-start ;\r\n        align-items: flex-start;\r\n        grid-gap: 10px 20px;\r\n        gap: 10px 20px; \r\n        border-radius: 8px;\r\n        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\r\n    }\r\n    .container button{\r\n        align-self: flex-end;\r\n    }\r\n    \r\n    .checkcodes-fields{\r\n        display: flex;\r\n        flex-flow: column wrap;\r\n        align-items: flex-start;\r\n        justify-content: flex-start;\r\n        grid-gap: 20px;\r\n        gap: 20px;\r\n    }\r\n    \r\n    .scan-field{\r\n        display: flex;\r\n        flex-flow: column wrap;\r\n        justify-content: flex-start;\r\n        align-content: flex-start;\r\n        align-items: flex-start;\r\n        grid-gap: 4px;\r\n        gap: 4px;\r\n    }\r\n    .scan-field label{\r\n        color: #646262;\r\n        align-self: flex-start;\r\n    }\r\n    .input-label{\r\n        font-size: 13px;\r\n    }\r\n    .scan-field button{\r\n        align-self: flex-start;\r\n    }\r\n    \r\n    \r\n    .inputs-container{\r\n        display: flex;\r\n        flex-flow: column wrap;\r\n        grid-gap: 10px;\r\n        gap: 10px;\r\n        align-items: flex-start;\r\n    }\r\n    .nfc{\r\n        display: flex;\r\n        flex-flow: column wrap;\r\n        grid-gap: 20px;\r\n        gap: 20px;\r\n    }\r\n    .pdv{\r\n        display: flex;\r\n        flex-flow: column wrap;\r\n        justify-content: flex-start;\r\n        align-items: flex-start;\r\n        grid-gap: 20px;\r\n        gap: 20px;\r\n    }\r\n    .field{\r\n        display: flex;\r\n        flex-flow: row;\r\n        grid-gap: 10px;\r\n        gap: 10px;\r\n        align-items: center;\r\n    }\r\n    .mat-form-field-ripple {\r\n        background-color: #27AE61 !important;\r\n    }\r\n    \r\n    .scan-field div{\r\n        display: flex; \r\n        flex-flow: row; \r\n        grid-gap: 10px; \r\n        gap: 10px; \r\n        align-items: center; \r\n        justify-content: flex-start;\r\n    } \r\n    .qr-container{\r\n        background-color: #fff;\r\n        left: 0;\r\n        text-align: left;\r\n        padding-right: 3px;\r\n        padding-left: 3px;\r\n        border-radius: 4px;\r\n        width: -webkit-fit-content;\r\n        width: -moz-fit-content;\r\n        width: fit-content;\r\n        height: 20px;\r\n        font-size: 10px;\r\n    }\r\n    \r\n    .field mat-label{\r\n        color: #646262;\r\n    }\r\n    \r\n    .field .mat-form-field{\r\n        width: 150px;\r\n    }\r\n    .field .mat-form-field input{\r\n        font-size: 12px;\r\n        color: #313030;\r\n    }\r\n\r\n    .field .mat-form-field .mat-select{\r\n        font-size: 10px;\r\n        color: #313030;\r\n    }\r\n    \r\n      mat-form-field.mat-focused span.mat-form-field-label-wrapper label {\r\n        color:#27AE61 !important;\r\n      }\r\n    \r\n    .custom-select{\r\n      border-radius: 12px;\r\n      width:170px;\r\n      height: 30px;\r\n      box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\r\n      border: #fff;\r\n    }\r\n    \r\n    .map-container{ \r\n    \r\n        width: 250px;\r\n        height: 100px;\r\n        /* margin: 20px ; */\r\n        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\r\n        /* display: flex;\r\n        justify-content: center; */\r\n        margin: auto;  \r\n        border-radius: 3px;\r\n         \r\n    }\r\n    .mat-select:focus:not(.mat-select-disabled).mat-primary .mat-select-arrow {\r\n        color: #63961C;\r\n    }\r\n     \r\n    \r\n    #map2 {\r\n        height: 100%;\r\n        border-radius: 3px;\r\n    }\r\n    \r\n    \r\n    .small-video{\r\n        max-height: 600px;\r\n        width: 200px;\r\n        -o-object-fit: contain;\r\n           object-fit: contain;\r\n    }\r\n    \r\n    .results{\r\n      background-color:#fff;\r\n    }\r\n    \r\n    .action-button{\r\n      background-color: #27AE61;\r\n      border-radius: 12px;\r\n      border: 1px solid rgba(27, 31, 35, .15);\r\n      box-sizing: border-box;\r\n      box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\r\n      color: #fff;\r\n      font-size: 14px;\r\n      line-height: 20px;\r\n      position: relative;\r\n      text-align: center;\r\n      width:100px;\r\n      height: 30px;\r\n    }\r\n\r\n    .action-buttonShot{\r\n      background-color: #27AE61;\r\n      border-radius: 12px;\r\n      border: 1px solid rgba(27, 31, 35, .15);\r\n      box-sizing: border-box;\r\n      box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\r\n      color: #fff;\r\n      font-size: 14px;\r\n      line-height: 20px;\r\n      position: relative;\r\n      text-align: center;\r\n      padding: 5px;\r\n    }\r\n    \r\n    \r\n    \r\n    .btn-yellow{\r\n        margin-top: 8px;\r\n        background-color: #FACF37;\r\n        color: #fff;\r\n        font-size: 11px;\r\n        line-height: 20px;\r\n        /* width: 100px !important; */\r\n        border-radius: 40px;\r\n        text-align: center !important;\r\n        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n    }\r\n    .btn-yellow:disabled{\r\n        background-color: #C2BEBE;\r\n        color: #313030;\r\n    }\r\n\r\n    .btn-green{\r\n        background-color: #27AE61;\r\n        color: #fff;\r\n        font-size: 11px;\r\n        line-height: 20px;\r\n        width: 100px !important;\r\n        border-radius: 20px;\r\n        align-self: flex-start;\r\n        text-align: center !important;\r\n        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n    }\r\n    .btn-green:disabled{\r\n        background-color: #C2BEBE;\r\n        color: #313030;\r\n    }\r\n\r\n    .field button{\r\n        align-self: center;\r\n    }\r\n\r\n    .Scan-container{\r\n        width: 200px;\r\n        height: 200px;\r\n        border-radius: 8px;\r\n        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\r\n    }\r\n    .camera{\r\n        width: 200px;\r\n        border-radius: 8px;\r\n    }\r\n    \r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZGNsaWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUdBO0lBQ0ksUUFBUTtJQUNSLFNBQVM7SUFDVCxrQ0FBa0M7SUFDbEMsbUNBQW1DO0lBQ25DLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsY0FBYztFQUNoQjs7QUFFRjtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIscUZBQXFGO0lBQ3JGLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLG1CQUFjO0lBQWQsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixtRkFBbUY7QUFDdkY7QUFDQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGNBQVM7SUFBVCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixjQUFTO0lBQVQsU0FBUztBQUNiO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7RUFDRSxpREFBaUQ7QUFDbkQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGNBQVM7SUFBVCxTQUFTO0lBQ1QsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lB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QUFxQjtJQUN2Qjs7SUFFQTtNQUNFLHlCQUF5QjtNQUN6QixtQkFBbUI7TUFDbkIsdUNBQXVDO01BQ3ZDLHNCQUFzQjtNQUN0Qix3Q0FBd0M7TUFDeEMsV0FBVztNQUNYLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsWUFBWTtJQUNkOztJQUVBO01BQ0UseUJBQXlCO01BQ3pCLG1CQUFtQjtNQUNuQix1Q0FBdUM7TUFDdkMsc0JBQXNCO01BQ3RCLHdDQUF3QztNQUN4QyxXQUFXO01BQ1gsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLFlBQVk7SUFDZDs7OztJQUlBO1FBQ0ksZUFBZTtRQUNmLHlCQUF5QjtRQUN6QixXQUFXO1FBQ1gsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQiw2QkFBNkI7UUFDN0IsbUJBQW1CO1FBQ25CLDZCQUE2QjtRQUM3QixxRkFBcUY7SUFDekY7SUFDQTtRQUNJLHlCQUF5QjtRQUN6QixjQUFjO0lBQ2xCOztJQUVBO1FBQ0kseUJBQXlCO1FBQ3pCLFdBQVc7UUFDWCxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLDZCQUE2QjtRQUM3QixxRkFBcUY7SUFDekY7SUFDQTtRQUNJLHlCQUF5QjtRQUN6QixjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsbUZBQW1GO0lBQ3ZGO0lBQ0E7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCOztBQUVKIiwiZmlsZSI6ImFkZGNsaWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCl7XHJcblxyXG5cclxuLnByb2dyZXNzLWNhbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1jYW50YWluZXIgc3BhbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICB0b3A6IDBlbTsgXHJcbiAgICBmb250LXNpemU6IDEycHg7IFxyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdBRTYxO1xyXG59XHJcblxyXG4ubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuXHJcbi5tYXQtc2VsZWN0LWFycm93IHtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkO1xyXG4gICAgbWFyZ2luOiAwIDRweDtcclxuICAgIGNvbG9yOiAjMjdBRTYxO1xyXG4gIH1cclxuXHJcbi5tYXQtcHJvZ3Jlc3MtYmFyIHtcclxuICAgIGhlaWdodDogMWVtICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCA0cHggLTFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuLmNvbnRlbnQtYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkY2RjY7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uY29udGVudC1ib2R5IHB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgY29sb3I6ICM2NDYyNjI7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXAgO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMHB4IDIwcHg7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggMXB4IDNweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDFweCAycHggMHB4O1xyXG59XHJcbi5jb250YWluZXIgYnV0dG9ue1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5jaGVja2NvZGVzLWZpZWxkc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMjBweDtcclxufVxyXG5cclxuLnNjYW4tZmllbGR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEwcHg7XHJcbn1cclxuLnNjYW4tZmllbGQgbGFiZWx7XHJcbiAgICBjb2xvcjogIzY0NjI2MjtcclxufVxyXG4uU2Nhbi1jb250YWluZXJ7XHJcbiAgYm94LXNoYWRvdzogcmdiYSg5OSwgOTksIDk5LCAwLjIpIDBweCAycHggOHB4IDBweDtcclxufVxyXG5cclxuLmlucHV0cy1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgIGdhcDogNjBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcbi5uZmN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgIGdhcDogMjBweDtcclxufVxyXG4ucGR2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGdhcDogMjBweDtcclxufVxyXG4uZmllbGR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3c7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3QUU2MSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2Nhbi1maWVsZCBkaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGZsZXgtZmxvdzogcm93OyBcclxuICAgIGdhcDogMTBweDsgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLnFyLWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4uZmllbGQgbWF0LWxhYmVse1xyXG4gICAgY29sb3I6ICM2NDYyNjI7XHJcbn1cclxuXHJcbi5maWVsZCAubWF0LWZvcm0tZmllbGQgaW5wdXR7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzMxMzAzMDtcclxufVxyXG4uZmllbGQgLm1hdC1mb3JtLWZpZWxkIC5tYXQtc2VsZWN0e1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICMzMTMwMzA7XHJcbn1cclxuXHJcbiAgbWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgc3Bhbi5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIGxhYmVsIHtcclxuICAgIGNvbG9yOiMyN0FFNjEgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4uY3VzdG9tLXNlbGVjdHtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHdpZHRoOjE3MHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3gtc2hhZG93OiByZ2JhKDI3LCAzMSwgMzUsIC4xKSAwIDFweCAwO1xyXG4gIGJvcmRlcjogI2ZmZjtcclxufVxyXG5cclxuLm1hcC1jb250YWluZXJ7IFxyXG5cclxuICAgIHdpZHRoOiA3MDBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAvKiBtYXJnaW46IDIwcHggOyAqL1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAxcHggM3B4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMXB4IDJweCAwcHg7XHJcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAgICBtYXJnaW46IGF1dG87ICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgXHJcbn1cclxuLm1hdC1zZWxlY3Q6Zm9jdXM6bm90KC5tYXQtc2VsZWN0LWRpc2FibGVkKS5tYXQtcHJpbWFyeSAubWF0LXNlbGVjdC1hcnJvdyB7XHJcbiAgICBjb2xvcjogIzYzOTYxQztcclxufVxyXG4gXHJcblxyXG4jbWFwMiB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLnNtYWxsLXZpZGVve1xyXG4gICAgbWF4LWhlaWdodDogNzAwcHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG59XHJcblxyXG4ucmVzdWx0c3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcbn1cclxuXHJcbi5hY3Rpb24tYnV0dG9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyN0FFNjE7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LCAzMSwgMzUsIC4xNSk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2hhZG93OiByZ2JhKDI3LCAzMSwgMzUsIC4xKSAwIDFweCAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOjEwMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG4uYWN0aW9uLWJ1dHRvblNob3R7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3QUU2MTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgLjE1KTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMjcsIDMxLCAzNSwgLjEpIDAgMXB4IDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5idG4teWVsbG93e1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBQ0YzNztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAvKiB3aWR0aDogMTAwcHggIWltcG9ydGFudDsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDZweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggNHB4IC0xcHg7XHJcbn1cclxuXHJcbi5idG4teWVsbG93OmRpc2FibGVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0MyQkVCRTtcclxuICAgIGNvbG9yOiAjMzEzMDMwO1xyXG59XHJcblxyXG4uYnRuLWdyZWVue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3QUU2MTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMTMwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDZweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggNHB4IC0xcHg7XHJcbn1cclxuXHJcbi5idG4tZ3JlZW46ZGlzYWJsZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzJCRUJFO1xyXG4gICAgY29sb3I6ICMzMTMwMzA7XHJcbn1cclxuXHJcbi5zY2FuLWZpZWxkIGRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgZmxleC1mbG93OiByb3c7IFxyXG4gICAgZ2FwOiAxMHB4OyBcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59IFxyXG4ucXItY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi8qIC5ORkMtY29udGFpbmVye1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSg5OSwgOTksIDk5LCAwLjIpIDBweCAycHggOHB4IDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgZmxleC1mbG93OiByb3cgd3JhcCA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTBweCAyMHB4OyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59ICovXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCl7XHJcbiAgICBcclxuICAgIC5wcm9ncmVzcy1jYW50YWluZXJ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBcclxuICAgICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvZ3Jlc3MtY2FudGFpbmVyIHNwYW57XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgICAgICB0b3A6IDBlbTsgXHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4OyBcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdBRTYxO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLm1hdC1zZWxlY3QtYXJyb3cge1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZDtcclxuICAgICAgICBtYXJnaW46IDAgNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMjdBRTYxO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyIHtcclxuICAgICAgICBoZWlnaHQ6IDFlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCA0cHggLTFweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQtYm9keXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkY2O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbnRlbnQtYm9keSBwe1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICM2NDYyNjI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwIDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCA7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDEwcHggMjBweDsgXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDFweCAzcHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAxcHggMnB4IDBweDtcclxuICAgIH1cclxuICAgIC5jb250YWluZXIgYnV0dG9ue1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2hlY2tjb2Rlcy1maWVsZHN7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2Nhbi1maWVsZHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuc2Nhbi1maWVsZCBsYWJlbHtcclxuICAgICAgICBjb2xvcjogIzY0NjI2MjtcclxuICAgIH1cclxuICAgIC5TY2FuLWNvbnRhaW5lcntcclxuICAgICAgYm94LXNoYWRvdzogcmdiYSg5OSwgOTksIDk5LCAwLjIpIDBweCAycHggOHB4IDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNjYW4tZmllbGQgZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgICAgIGZsZXgtZmxvdzogcm93OyBcclxuICAgICAgICBnYXA6IDEwcHg7IFxyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnFyLWNvbnRhaW5lcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmlucHV0cy1jb250YWluZXJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAgICAgIGdhcDogNjBweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIH1cclxuICAgIC5uZmN7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgICAgIGdhcDogMjBweDtcclxuICAgIH1cclxuICAgIC5wZHZ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuZmllbGR7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyN0FFNjEgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIC5maWVsZCBtYXQtbGFiZWx7XHJcbiAgICAgICAgY29sb3I6ICM2NDYyNjI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5maWVsZCAubWF0LWZvcm0tZmllbGQgaW5wdXR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjMzEzMDMwO1xyXG4gICAgfVxyXG4gICAgLmZpZWxkIC5tYXQtZm9ybS1maWVsZCAubWF0LXNlbGVjdHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICMzMTMwMzA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICAgbWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgc3Bhbi5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIGxhYmVsIHtcclxuICAgICAgICBjb2xvcjojMjdBRTYxICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgLmN1c3RvbS1zZWxlY3R7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgIHdpZHRoOjE3MHB4O1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IHJnYmEoMjcsIDMxLCAzNSwgLjEpIDAgMXB4IDA7XHJcbiAgICAgIGJvcmRlcjogI2ZmZjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1hcC1jb250YWluZXJ7IFxyXG4gICAgXHJcbiAgICAgICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgLyogbWFyZ2luOiAyMHB4IDsgKi9cclxuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDFweCAzcHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAxcHggMnB4IDBweDtcclxuICAgICAgICAvKiBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xyXG4gICAgICAgIG1hcmdpbjogYXV0bzsgIFxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgLm1hdC1zZWxlY3Q6Zm9jdXM6bm90KC5tYXQtc2VsZWN0LWRpc2FibGVkKS5tYXQtcHJpbWFyeSAubWF0LXNlbGVjdC1hcnJvdyB7XHJcbiAgICAgICAgY29sb3I6ICM2Mzk2MUM7XHJcbiAgICB9XHJcbiAgICAgXHJcbiAgICBcclxuICAgICNtYXAyIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAuc21hbGwtdmlkZW97XHJcbiAgICAgICAgbWF4LWhlaWdodDogNzAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5yZXN1bHRze1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hY3Rpb24tYnV0dG9ue1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdBRTYxO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LCAzMSwgMzUsIC4xNSk7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGJveC1zaGFkb3c6IHJnYmEoMjcsIDMxLCAzNSwgLjEpIDAgMXB4IDA7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6MTAwcHg7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgIH1cclxuICAgIC5hY3Rpb24tYnV0dG9uU2hvdHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3QUU2MTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAuMTUpO1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBib3gtc2hhZG93OiByZ2JhKDI3LCAzMSwgMzUsIC4xKSAwIDFweCAwO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIC5idG4teWVsbG93e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFDRjM3O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAvKiB3aWR0aDogMTAwcHggIWltcG9ydGFudDsgKi9cclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDZweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggNHB4IC0xcHg7XHJcbiAgICB9XHJcbiAgICAuYnRuLWdyZWVue1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyN0FFNjE7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDZweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggNHB4IC0xcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1ncmVlbjpkaXNhYmxlZHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzJCRUJFO1xyXG4gICAgICAgIGNvbG9yOiAjMzEzMDMwO1xyXG4gICAgfVxyXG4gICAgLmJ0bi15ZWxsb3c6ZGlzYWJsZWR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0MyQkVCRTtcclxuICAgICAgICBjb2xvcjogIzMxMzAzMDtcclxuICAgIH1cclxuXHJcbiAgICAuc2Nhbi1maWVsZCBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDsgXHJcbiAgICAgICAgZmxleC1mbG93OiByb3c7IFxyXG4gICAgICAgIGdhcDogMTBweDsgXHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgfSBcclxuICAgIC5xci1jb250YWluZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTAwcHgpe1xyXG4gICAgXHJcbiAgICAucHJvZ3Jlc3MtY2FudGFpbmVye1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnByb2dyZXNzLWNhbnRhaW5lciBzcGFue1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICAgICAgdG9wOiAwZW07IFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDsgXHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3QUU2MTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC5tYXQtc2VsZWN0LWFycm93IHtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItdG9wOiA1cHggc29saWQ7XHJcbiAgICAgICAgbWFyZ2luOiAwIDRweDtcclxuICAgICAgICBjb2xvcjogIzI3QUU2MTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAubWF0LXByb2dyZXNzLWJhciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxZW0gIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDZweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggNHB4IC0xcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIH1cclxuICAgIC5jb250ZW50LWJvZHl7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjZGNjtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb250ZW50LWJvZHkgcHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNjQ2MjYyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcCA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGdhcDogMTBweCAyMHB4OyBcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggMXB4IDNweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDFweCAycHggMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lciBidXR0b257XHJcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jaGVja2NvZGVzLWZpZWxkc3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zY2FuLWZpZWxke1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGdhcDogMTBweDtcclxuICAgIH1cclxuICAgIC5zY2FuLWZpZWxkIGxhYmVse1xyXG4gICAgICAgIGNvbG9yOiAjNjQ2MjYyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2Nhbi1maWVsZCBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDsgXHJcbiAgICAgICAgZmxleC1mbG93OiByb3c7IFxyXG4gICAgICAgIGdhcDogMTBweDsgXHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucXItY29udGFpbmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pbnB1dHMtY29udGFpbmVye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICB9XHJcbiAgICAubmZje1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAucGR2e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgZ2FwOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmZpZWxke1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3c7XHJcbiAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdBRTYxICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICAuZmllbGQgbWF0LWxhYmVse1xyXG4gICAgICAgIGNvbG9yOiAjNjQ2MjYyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZmllbGQgLm1hdC1mb3JtLWZpZWxkIGlucHV0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzMxMzAzMDtcclxuICAgIH1cclxuICAgIC5maWVsZCAubWF0LWZvcm0tZmllbGQgLm1hdC1zZWxlY3R7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjMzEzMDMwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgIG1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIHNwYW4ubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciBsYWJlbCB7XHJcbiAgICAgICAgY29sb3I6IzI3QUU2MSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgIC5jdXN0b20tc2VsZWN0e1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICB3aWR0aDoxNzBweDtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBib3gtc2hhZG93OiByZ2JhKDI3LCAzMSwgMzUsIC4xKSAwIDFweCAwO1xyXG4gICAgICBib3JkZXI6ICNmZmY7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tYXAtY29udGFpbmVyeyBcclxuICAgIFxyXG4gICAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIC8qIG1hcmdpbjogMjBweCA7ICovXHJcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAxcHggM3B4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMXB4IDJweCAwcHg7XHJcbiAgICAgICAgLyogZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuICAgICAgICBtYXJnaW46IGF1dG87ICBcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICBcclxuICAgIH1cclxuICAgIC5tYXQtc2VsZWN0OmZvY3VzOm5vdCgubWF0LXNlbGVjdC1kaXNhYmxlZCkubWF0LXByaW1hcnkgLm1hdC1zZWxlY3QtYXJyb3cge1xyXG4gICAgICAgIGNvbG9yOiAjNjM5NjFDO1xyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgXHJcbiAgICAjbWFwMiB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLnNtYWxsLXZpZGVve1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDcwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucmVzdWx0c3tcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYWN0aW9uLWJ1dHRvbntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3QUU2MTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAuMTUpO1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBib3gtc2hhZG93OiByZ2JhKDI3LCAzMSwgMzUsIC4xKSAwIDFweCAwO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuYWN0aW9uLWJ1dHRvblNob3R7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyN0FFNjE7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgLjE1KTtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgYm94LXNoYWRvdzogcmdiYSgyNywgMzEsIDM1LCAuMSkgMCAxcHggMDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICAuYnRuLXllbGxvd3tcclxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBQ0YzNztcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgLyogd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7ICovXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMnB4IDRweCAtMXB4O1xyXG4gICAgfVxyXG4gICAgLmJ0bi1ncmVlbntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdBRTYxO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMnB4IDRweCAtMXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tZ3JlZW46ZGlzYWJsZWR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0MyQkVCRTtcclxuICAgICAgICBjb2xvcjogIzMxMzAzMDtcclxuICAgIH1cclxuICAgIC5idG4teWVsbG93OmRpc2FibGVke1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDMkJFQkU7XHJcbiAgICAgICAgY29sb3I6ICMzMTMwMzA7XHJcbiAgICB9XHJcblxyXG4gICAgLnNjYW4tZmllbGQgZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgICAgIGZsZXgtZmxvdzogcm93OyBcclxuICAgICAgICBnYXA6IDEwcHg7IFxyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIH0gXHJcbiAgICAucXItY29udGFpbmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDM1MHB4KSBhbmQgKG1heC13aWR0aDogNTk5cHgpe1xyXG4gICAgXHJcbiAgICAucHJvZ3Jlc3MtY2FudGFpbmVye1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnByb2dyZXNzLWNhbnRhaW5lciBzcGFue1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICAgICAgdG9wOiAwZW07IFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDsgXHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3QUU2MTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC5tYXQtc2VsZWN0LWFycm93IHtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItdG9wOiA1cHggc29saWQ7XHJcbiAgICAgICAgbWFyZ2luOiAwIDRweDtcclxuICAgICAgICBjb2xvcjogIzI3QUU2MTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAubWF0LXByb2dyZXNzLWJhciB7XHJcbiAgICAgICAgaGVpZ2h0OiAwLjVlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCA0cHggLTFweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQtYm9keXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkY2O1xyXG4gICAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29udGVudC1ib2R5IHB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBjb2xvcjogIzY0NjI2MjtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbjogOHB4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXAgO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0IDtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBnYXA6IDEwcHggMjBweDsgXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDFweCAzcHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAxcHggMnB4IDBweDtcclxuICAgIH1cclxuICAgIC5jb250YWluZXIgYnV0dG9ue1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2hlY2tjb2Rlcy1maWVsZHN7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zY2FuLWZpZWxke1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBnYXA6IDRweDtcclxuICAgIH1cclxuICAgIC5zY2FuLWZpZWxkIGxhYmVse1xyXG4gICAgICAgIGNvbG9yOiAjNjQ2MjYyO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICB9XHJcbiAgICAuaW5wdXQtbGFiZWx7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG4gICAgLnNjYW4tZmllbGQgZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgICAgIGZsZXgtZmxvdzogcm93OyBcclxuICAgICAgICBnYXA6IDEwcHg7IFxyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnFyLWNvbnRhaW5lcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW5wdXRzLWNvbnRhaW5lcntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgfVxyXG4gICAgLm5mY3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICAgICAgZ2FwOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLnBkdntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGdhcDogMjBweDtcclxuICAgIH1cclxuICAgIC5maWVsZHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICAgIGdhcDogMTBweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5maWVsZCBidXR0b257XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyN0FFNjEgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZpZWxkIG1hdC1sYWJlbHtcclxuICAgICAgICBjb2xvcjogIzY0NjI2MjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZpZWxkIC5tYXQtZm9ybS1maWVsZCBpbnB1dHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICMzMTMwMzA7XHJcbiAgICB9XHJcblxyXG4gICAgLmZpZWxkIC5tYXQtZm9ybS1maWVsZCAubWF0LXNlbGVjdHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICMzMTMwMzA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIHNwYW4ubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciBsYWJlbCB7XHJcbiAgICBjb2xvcjojMjdBRTYxICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jdXN0b20tc2VsZWN0e1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICB3aWR0aDoxNzBweDtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBib3gtc2hhZG93OiByZ2JhKDI3LCAzMSwgMzUsIC4xKSAwIDFweCAwO1xyXG4gICAgICBib3JkZXI6ICNmZmY7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tYXAtY29udGFpbmVyeyBcclxuICAgIFxyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIC8qIG1hcmdpbjogMjBweCA7ICovXHJcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAxcHggM3B4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMXB4IDJweCAwcHg7XHJcbiAgICAgICAgLyogZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuICAgICAgICBtYXJnaW46IGF1dG87ICBcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgLm1hdC1zZWxlY3Q6Zm9jdXM6bm90KC5tYXQtc2VsZWN0LWRpc2FibGVkKS5tYXQtcHJpbWFyeSAubWF0LXNlbGVjdC1hcnJvdyB7XHJcbiAgICAgICAgY29sb3I6ICM2Mzk2MUM7XHJcbiAgICB9XHJcbiAgICAgXHJcbiAgICBcclxuICAgICNtYXAyIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC5zbWFsbC12aWRlb3tcclxuICAgICAgICBtYXgtaGVpZ2h0OiA2MDBweDtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucmVzdWx0c3tcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjpib3IjREFEQURBO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYWN0aW9uLWJ1dHRvbntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3QUU2MTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAuMTUpO1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBib3gtc2hhZG93OiByZ2JhKDI3LCAzMSwgMzUsIC4xKSAwIDFweCAwO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuYWN0aW9uLWJ1dHRvblNob3R7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyN0FFNjE7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgLjE1KTtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgYm94LXNoYWRvdzogcmdiYSgyNywgMzEsIDM1LCAuMSkgMCAxcHggMDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICAuYnRuLXllbGxvd3tcclxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBQ0YzNztcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgLyogd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7ICovXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMnB4IDRweCAtMXB4O1xyXG4gICAgfVxyXG4gICAgLmJ0bi15ZWxsb3c6ZGlzYWJsZWR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0MyQkVCRTtcclxuICAgICAgICBjb2xvcjogIzMxMzAzMDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWdyZWVue1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyN0FFNjE7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMnB4IDRweCAtMXB4O1xyXG4gICAgfVxyXG4gICAgLmJ0bi1ncmVlbjpkaXNhYmxlZHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzJCRUJFO1xyXG4gICAgICAgIGNvbG9yOiAjMzEzMDMwO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAyMDBweCkgYW5kIChtYXgtd2lkdGg6IDM1MHB4KXtcclxuICAgIFxyXG4gICAgLnByb2dyZXNzLWNhbnRhaW5lcntcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcm9ncmVzcy1jYW50YWluZXIgc3BhbntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgICAgIHRvcDogMGVtOyBcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7IFxyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyN0FFNjE7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAubWF0LXNlbGVjdC1hcnJvdyB7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkO1xyXG4gICAgICAgIG1hcmdpbjogMCA0cHg7XHJcbiAgICAgICAgY29sb3I6ICMyN0FFNjE7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgLm1hdC1wcm9ncmVzcy1iYXIge1xyXG4gICAgICAgIGhlaWdodDogMC41ZW0gIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDZweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggNHB4IC0xcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIH1cclxuICAgIC5jb250ZW50LWJvZHl7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjZGNjtcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbnRlbnQtYm9keSBwe1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICM2NDYyNjI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBtYXJnaW46IDhweDtcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwIDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCA7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgZ2FwOiAxMHB4IDIwcHg7IFxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDFweCAzcHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAxcHggMnB4IDBweDtcclxuICAgIH1cclxuICAgIC5jb250YWluZXIgYnV0dG9ue1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2hlY2tjb2Rlcy1maWVsZHN7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zY2FuLWZpZWxke1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBnYXA6IDRweDtcclxuICAgIH1cclxuICAgIC5zY2FuLWZpZWxkIGxhYmVse1xyXG4gICAgICAgIGNvbG9yOiAjNjQ2MjYyO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICB9XHJcbiAgICAuaW5wdXQtbGFiZWx7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG4gICAgLnNjYW4tZmllbGQgYnV0dG9ue1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLmlucHV0cy1jb250YWluZXJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgICAgIGdhcDogMTBweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIH1cclxuICAgIC5uZmN7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgICAgIGdhcDogMjBweDtcclxuICAgIH1cclxuICAgIC5wZHZ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuZmllbGR7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyN0FFNjEgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNjYW4tZmllbGQgZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgICAgIGZsZXgtZmxvdzogcm93OyBcclxuICAgICAgICBnYXA6IDEwcHg7IFxyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIH0gXHJcbiAgICAucXItY29udGFpbmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5maWVsZCBtYXQtbGFiZWx7XHJcbiAgICAgICAgY29sb3I6ICM2NDYyNjI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5maWVsZCAubWF0LWZvcm0tZmllbGR7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgfVxyXG4gICAgLmZpZWxkIC5tYXQtZm9ybS1maWVsZCBpbnB1dHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICMzMTMwMzA7XHJcbiAgICB9XHJcblxyXG4gICAgLmZpZWxkIC5tYXQtZm9ybS1maWVsZCAubWF0LXNlbGVjdHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICMzMTMwMzA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICAgbWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgc3Bhbi5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIGxhYmVsIHtcclxuICAgICAgICBjb2xvcjojMjdBRTYxICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgLmN1c3RvbS1zZWxlY3R7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgIHdpZHRoOjE3MHB4O1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IHJnYmEoMjcsIDMxLCAzNSwgLjEpIDAgMXB4IDA7XHJcbiAgICAgIGJvcmRlcjogI2ZmZjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1hcC1jb250YWluZXJ7IFxyXG4gICAgXHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgLyogbWFyZ2luOiAyMHB4IDsgKi9cclxuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDFweCAzcHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAxcHggMnB4IDBweDtcclxuICAgICAgICAvKiBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xyXG4gICAgICAgIG1hcmdpbjogYXV0bzsgIFxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgXHJcbiAgICB9XHJcbiAgICAubWF0LXNlbGVjdDpmb2N1czpub3QoLm1hdC1zZWxlY3QtZGlzYWJsZWQpLm1hdC1wcmltYXJ5IC5tYXQtc2VsZWN0LWFycm93IHtcclxuICAgICAgICBjb2xvcjogIzYzOTYxQztcclxuICAgIH1cclxuICAgICBcclxuICAgIFxyXG4gICAgI21hcDIge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLnNtYWxsLXZpZGVve1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucmVzdWx0c3tcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYWN0aW9uLWJ1dHRvbntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3QUU2MTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAuMTUpO1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBib3gtc2hhZG93OiByZ2JhKDI3LCAzMSwgMzUsIC4xKSAwIDFweCAwO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGlvbi1idXR0b25TaG90e1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdBRTYxO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LCAzMSwgMzUsIC4xNSk7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGJveC1zaGFkb3c6IHJnYmEoMjcsIDMxLCAzNSwgLjEpIDAgMXB4IDA7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgLmJ0bi15ZWxsb3d7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUNGMzc7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIC8qIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50OyAqL1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCA0cHggLTFweDtcclxuICAgIH1cclxuICAgIC5idG4teWVsbG93OmRpc2FibGVke1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDMkJFQkU7XHJcbiAgICAgICAgY29sb3I6ICMzMTMwMzA7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1ncmVlbntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdBRTYxO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCA0cHggLTFweDtcclxuICAgIH1cclxuICAgIC5idG4tZ3JlZW46ZGlzYWJsZWR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0MyQkVCRTtcclxuICAgICAgICBjb2xvcjogIzMxMzAzMDtcclxuICAgIH1cclxuXHJcbiAgICAuZmllbGQgYnV0dG9ue1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuU2Nhbi1jb250YWluZXJ7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggMXB4IDNweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDFweCAycHggMHB4O1xyXG4gICAgfVxyXG4gICAgLmNhbWVyYXtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbiJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ 39060:
/*!********************************************************!*\
  !*** ./src/app/alert-dialog/alert-dialog.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertDialogComponent": () => (/* binding */ AlertDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 47752);




class AlertDialogComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.message = "Are you sure?";
        this.confirmButtonText = "Yes";
        this.cancelButtonText = "Cancel";
        if (data) {
            this.message = data.message || this.message;
            if (data.buttonText) {
                this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
            }
        }
    }
    ngOnInit() {
    }
    onConfirmClick() {
        this.dialogRef.close(true);
    }
}
AlertDialogComponent.ɵfac = function AlertDialogComponent_Factory(t) { return new (t || AlertDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef)); };
AlertDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertDialogComponent, selectors: [["app-alert-dialog"]], decls: 6, vars: 2, consts: [["align", "center"], ["mat-raised-button", "", "tabindex", "1", 2, "background-color", "#27AE61", "color", "white", 3, "click"]], template: function AlertDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-actions", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertDialogComponent_Template_button_click_4_listener() { return ctx.onConfirmClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.confirmButtonText);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGVydC1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 68438:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _sidebar_menu_sidebar_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar-menu/sidebar-menu.component */ 83955);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 41124);
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map/map.component */ 28030);
/* harmony import */ var _clients_clients_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clients/clients.component */ 15706);
/* harmony import */ var _routes_routes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/routes.component */ 2942);
/* harmony import */ var _planning_planning_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./planning/planning.component */ 33423);
/* harmony import */ var _auth_gaurd_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-gaurd.service */ 74652);
/* harmony import */ var _addclient_addclient_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addclient/addclient.component */ 32710);
/* harmony import */ var _update_client_update_client_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update-client/update-client.component */ 81271);
/* harmony import */ var _offline_offline_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./offline/offline.component */ 48611);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings/settings.component */ 77654);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);














const routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
    },
    {
        path: 'menu',
        component: _sidebar_menu_sidebar_menu_component__WEBPACK_IMPORTED_MODULE_0__.SidebarMenuComponent,
        canActivate: [_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_6__.AuthGaurdService]
    },
    {
        path: 'map', component: _map_map_component__WEBPACK_IMPORTED_MODULE_2__.MapComponent,
        canActivate: [_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_6__.AuthGaurdService]
    },
    {
        path: 'clients', component: _clients_clients_component__WEBPACK_IMPORTED_MODULE_3__.ClientsComponent,
        canActivate: [_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_6__.AuthGaurdService]
    },
    {
        path: 'routes', component: _routes_routes_component__WEBPACK_IMPORTED_MODULE_4__.RoutesComponent,
        canActivate: [_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_6__.AuthGaurdService]
    },
    {
        path: 'planning', component: _planning_planning_component__WEBPACK_IMPORTED_MODULE_5__.PlanningComponent,
        canActivate: [_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_6__.AuthGaurdService]
    },
    {
        path: 'addclient/:sector', component: _addclient_addclient_component__WEBPACK_IMPORTED_MODULE_7__.AddclientComponent,
        canActivate: [_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_6__.AuthGaurdService]
    },
    {
        path: 'addclient', component: _addclient_addclient_component__WEBPACK_IMPORTED_MODULE_7__.AddclientComponent,
        canActivate: [_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_6__.AuthGaurdService]
    },
    {
        path: 'updateclient', component: _update_client_update_client_component__WEBPACK_IMPORTED_MODULE_8__.UpdateClientComponent,
        canActivate: [_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_6__.AuthGaurdService]
    },
    {
        path: 'offline', component: _offline_offline_component__WEBPACK_IMPORTED_MODULE_9__.OfflineComponent,
    },
    {
        path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_10__.SettingsComponent,
        canActivate: [_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_6__.AuthGaurdService]
    }
    // {
    //   path: 'upper', component: UpperMenuComponent
    // }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule] }); })();


/***/ }),

/***/ 36104:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ 90806);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _sidebar_menu_sidebar_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar-menu/sidebar-menu.component */ 83955);





function AppComponent_app_sidebar_menu_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-sidebar-menu");
} }
class AppComponent {
    constructor(_auth) {
        this._auth = _auth;
        this.title = 'frontend';
    }
    getLogged() {
        return this._auth.loggedIn();
    }
    getusername() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 1, consts: [[1, "app-view"], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_app_sidebar_menu_1_Template, 1, 0, "app-sidebar-menu", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.getLogged());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _sidebar_menu_sidebar_menu_component__WEBPACK_IMPORTED_MODULE_1__.SidebarMenuComponent], styles: [".app-view[_ngcontent-%COMP%] {\r\n    height: 100vh;\r\n    max-height: 100vh;\r\n    width: 100vw;\r\n    max-width: 100vw;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC12aWV3IHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG1heC13aWR0aDogMTAwdnc7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 92014:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 36104);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ 52650);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 68438);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/toolbar */ 47727);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sidenav */ 51986);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/card */ 78662);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/input */ 58359);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/select */ 21036);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ 41124);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/grid-list */ 95409);
/* harmony import */ var _sidebar_menu_sidebar_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar-menu/sidebar-menu.component */ 83955);
/* harmony import */ var _client_info_client_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client-info/client-info.component */ 8755);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/divider */ 75152);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ 4021);
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map/map.component */ 28030);
/* harmony import */ var _clients_clients_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clients/clients.component */ 15706);
/* harmony import */ var _routes_routes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/routes.component */ 2942);
/* harmony import */ var _planning_planning_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./planning/planning.component */ 33423);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authentication.service */ 90806);
/* harmony import */ var _auth_gaurd_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth-gaurd.service */ 74652);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/menu */ 69872);
/* harmony import */ var _addclient_addclient_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./addclient/addclient.component */ 32710);
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @zxing/ngx-scanner */ 76750);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/progress-bar */ 93776);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/table */ 43037);
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/cdk/tree */ 74634);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/form-field */ 73981);
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ngx-webcam */ 60330);
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./token-interceptor.service */ 22685);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _update_client_update_client_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./update-client/update-client.component */ 81271);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/service-worker */ 17202);
/* harmony import */ var _offline_offline_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./offline/offline.component */ 48611);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./settings/settings.component */ 77654);
/* harmony import */ var _full_image_full_image_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./full-image/full-image.component */ 25305);
/* harmony import */ var _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./alert-dialog/alert-dialog.component */ 39060);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 14001);















































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ providers: [
        _authentication_service__WEBPACK_IMPORTED_MODULE_9__.AuthenticationService,
        _auth_gaurd_service__WEBPACK_IMPORTED_MODULE_10__.AuthGaurdService,
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HTTP_INTERCEPTORS,
            useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_12__.TokenInterceptorService,
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__.MatToolbarModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__.MatSidenavModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButtonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_25__.MatListModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__.MatDividerModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_27__.MatCardModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_28__.MatInputModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__.MatIconModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_31__.RouterModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__.MatMenuModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_33__.MatGridListModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule,
            _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_34__.ZXingScannerModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__.MatFormFieldModule,
            ngx_webcam__WEBPACK_IMPORTED_MODULE_36__.WebcamModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_37__.MatProgressBarModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_38__.MatSelectModule,
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_39__.CdkTableModule,
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_40__.CdkTreeModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__.MatFormFieldModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_41__.MatDialogModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_42__.CommonModule,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_43__.ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: true,
                // Register the ServiceWorker as soon as the app is stable
                // or after 30 seconds (whichever comes first).
                // registrationStrategy: 'registerWhenStable:30000'
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _sidebar_menu_sidebar_menu_component__WEBPACK_IMPORTED_MODULE_3__.SidebarMenuComponent,
        _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
        _map_map_component__WEBPACK_IMPORTED_MODULE_5__.MapComponent,
        _clients_clients_component__WEBPACK_IMPORTED_MODULE_6__.ClientsComponent,
        _routes_routes_component__WEBPACK_IMPORTED_MODULE_7__.RoutesComponent,
        _planning_planning_component__WEBPACK_IMPORTED_MODULE_8__.PlanningComponent,
        _addclient_addclient_component__WEBPACK_IMPORTED_MODULE_11__.AddclientComponent,
        _client_info_client_info_component__WEBPACK_IMPORTED_MODULE_4__.ClientInfoComponent,
        _update_client_update_client_component__WEBPACK_IMPORTED_MODULE_13__.UpdateClientComponent,
        _offline_offline_component__WEBPACK_IMPORTED_MODULE_14__.OfflineComponent,
        _settings_settings_component__WEBPACK_IMPORTED_MODULE_15__.SettingsComponent,
        _full_image_full_image_component__WEBPACK_IMPORTED_MODULE_16__.FullImageComponent,
        _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_17__.AlertDialogComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__.MatToolbarModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__.MatSidenavModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButtonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__.MatListModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__.MatDividerModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_27__.MatCardModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_28__.MatInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__.MatIconModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_31__.RouterModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__.MatMenuModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_33__.MatGridListModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule,
        _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_34__.ZXingScannerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__.MatFormFieldModule,
        ngx_webcam__WEBPACK_IMPORTED_MODULE_36__.WebcamModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_37__.MatProgressBarModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_38__.MatSelectModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_39__.CdkTableModule,
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_40__.CdkTreeModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__.MatFormFieldModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_41__.MatDialogModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_42__.CommonModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_43__.ServiceWorkerModule] }); })();


/***/ }),

/***/ 74652:
/*!***************************************!*\
  !*** ./src/app/auth-gaurd.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGaurdService": () => (/* binding */ AuthGaurdService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ 90806);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);



class AuthGaurdService {
    constructor(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    canActivate() {
        if (this._authService.loggedIn()) {
            console.log('true');
            return true;
        }
        else {
            console.log('false');
            this._router.navigate(['/login']).then(() => {
                window.location.reload();
            });
            return false;
        }
    }
}
AuthGaurdService.ɵfac = function AuthGaurdService_Factory(t) { return new (t || AuthGaurdService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AuthGaurdService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGaurdService, factory: AuthGaurdService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 90806:
/*!*******************************************!*\
  !*** ./src/app/authentication.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _indexdb_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexdb.service */ 22253);




class AuthenticationService {
    constructor(http, _router, _index) {
        this.http = http;
        this._router = _router;
        this._index = _index;
        this._UsersUrl = "https://stalker-lite.herokuapp.com/api1/login";
        this.version = 6; ///version of the database
    }
    getUserLogin(data) {
        return this.http.post(this._UsersUrl, data);
    }
    getToken() {
        return localStorage.getItem('token');
    }
    loggedIn() {
        return !!localStorage.getItem('token');
    }
    //////////************** Logout **************/////////////////
    logoutUser() {
        localStorage.removeItem('token');
        //this._index.ClearData()
        //this._index.ClearDataSector()
        this.ClearData();
    }
    ClearData() {
        var request = window.indexedDB.open("off", this.version);
        request.onerror = function (event) {
            console.log("Why didn't you allow my web app to use IndexedDB?!");
        };
        request.onsuccess = (event) => {
            this.db = event.target.result;
            console.log("success inside Clear");
            console.log(this.db);
            var transaction = this.db.transaction(['data'], 'readwrite');
            var objectStore = transaction.objectStore("data");
            var objectStoreRequest = objectStore.clear();
            objectStoreRequest.onsuccess = (event) => {
                console.log("Data Cleared");
                this.ClearDataSector();
            };
        };
    }
    ClearDataSector() {
        var request = window.indexedDB.open("off", this.version);
        request.onerror = function (event) {
            console.log("Why didn't you allow my web app to use IndexedDB?!");
        };
        request.onsuccess = (event) => {
            this.db = event.target.result;
            console.log("success Sector inside Clear");
            console.log(this.db);
            var transaction = this.db.transaction(['sector'], 'readwrite');
            var objectStore = transaction.objectStore("sector");
            var objectStoreRequest = objectStore.clear();
            objectStoreRequest.onsuccess = (event) => {
                console.log("Data Sector Cleared");
                this._router.navigate(['login']).then(() => {
                    window.location.reload();
                });
            };
        };
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_indexdb_service__WEBPACK_IMPORTED_MODULE_0__.IndexdbService)); };
AuthenticationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8755:
/*!******************************************************!*\
  !*** ./src/app/client-info/client-info.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientInfoComponent": () => (/* binding */ ClientInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _full_image_full_image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../full-image/full-image.component */ 25305);
/* harmony import */ var _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../alert-dialog/alert-dialog.component */ 39060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _clients_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clients.service */ 23640);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 47752);









function ClientInfoComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Client Validated");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ClientInfoComponent_div_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Client Not validated");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ClientInfoComponent_div_0_div_55_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClientInfoComponent_div_0_div_55_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r6.validate(ctx_r6.data.idGeo, "green"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Valid");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClientInfoComponent_div_0_div_55_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r8.validate(ctx_r8.data.idGeo, "black"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Refus");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ClientInfoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ClientInfoComponent_div_0_div_2_Template, 3, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ClientInfoComponent_div_0_ng_template_3_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-dialog-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Seller");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClientInfoComponent_div_0_Template_img_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.openImage(ctx_r9.clientOfSeller.PVP); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Sector:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Phone Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Type PDV:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Auditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClientInfoComponent_div_0_Template_img_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.openImage(ctx_r11.clientOfAuditor.PVP); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Sector:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Phone Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Type PDV:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, ClientInfoComponent_div_0_div_55_Template, 5, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Validated Client");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "section", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClientInfoComponent_div_0_Template_img_click_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.openImage(ctx_r12.data.properties.PVP); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Sector:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "Phone Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "Type PDV:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClientInfoComponent_div_0_Template_img_click_82_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13.openImage(ctx_r13.data.properties.NFCP); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "NFC UUID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, "NFC code Qr:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "mat-dialog-actions", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "Update Client");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "Delete Client");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "Navigate to the client");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.data.idGeo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.data.properties.status == "green")("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r0.clientOfSeller.PVP, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.clientOfSeller.Code_Secteur_OS);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.clientOfSeller.NomPrenom);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.clientOfSeller.PhoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.clientOfSeller.TypeDPV, ", ", ctx_r0.clientOfSeller.detailType, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r0.clientOfAuditor.PVP, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.clientOfAuditor.Code_Secteur_OS);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.clientOfAuditor.NomPrenom);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.clientOfAuditor.PhoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.clientOfAuditor.TypeDPV, ", ", ctx_r0.clientOfAuditor.detailType, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.data.properties.status != "green");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r0.data.properties.PVP, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.data.properties.Code_Secteur_OS);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.data.properties.NomPrenom);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.data.properties.PhoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.data.properties.TypeDPV, ", ", ctx_r0.data.properties.detailType, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r0.data.properties.NFCP, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.data.properties.nfc.UUID);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.data.properties.codeQR);
} }
function ClientInfoComponent_div_1_p_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "null");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ClientInfoComponent_div_1_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r16.data.properties.nfc.codeNFC);
} }
function ClientInfoComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-dialog-content", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Client Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "section", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClientInfoComponent_div_1_Template_img_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r17.openImage(ctx_r17.data.properties.NFCP); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Sector:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Phone Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Type PDV:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClientInfoComponent_div_1_Template_img_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r19.openImage(ctx_r19.data.properties.NFCP); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Code NFC:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, ClientInfoComponent_div_1_p_31_Template, 2, 0, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, ClientInfoComponent_div_1_ng_template_32_Template, 1, 1, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "UUID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "mat-dialog-actions", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClientInfoComponent_div_1_Template_button_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r20.onUpdateClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Update Client");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Delete Client");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](33);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r1.data.properties.PVP, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.data.properties.Code_Secteur_OS);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.data.properties.NomPrenom);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.data.properties.PhoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r1.data.properties.TypeDPV, ", ", ctx_r1.data.properties.detailType, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r1.data.properties.NFCP, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.data.properties.nfc.codeNFC)("ngIfElse", _r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.data.properties.nfc.UUID);
} }
class ClientInfoComponent {
    constructor(data, clientService, dialogRef, dialogRef2, dialog, _router) {
        this.data = data;
        this.clientService = clientService;
        this.dialogRef = dialogRef;
        this.dialogRef2 = dialogRef2;
        this.dialog = dialog;
        this._router = _router;
    }
    ngOnInit() {
        console.log("############################ Wa client");
        console.log(this.data);
        this.loggedUser = JSON.parse(localStorage.getItem("user"));
        if (this.loggedUser.role == 'Admin' || this.loggedUser.role == 'Back Office') {
            this.clientService.getClientBySeller(this.data.geometry.coordinates[1], this.data.geometry.coordinates[0]).subscribe(res => {
                this.clientOfSeller = res;
                console.log("!!!!!!!!!!!!!!!! Seller !!!!!!!!!!!!!!");
                console.log(res);
                this.clientService.getClientByAuditor(this.data.geometry.coordinates[1], this.data.geometry.coordinates[0]).subscribe(res => {
                    this.clientOfAuditor = res;
                    console.log("!!!!!!!!!!!!!!!! Auditor !!!!!!!!!!!!!!");
                    console.log(res);
                });
            });
        }
        else {
            console.log("############################ Wa client");
            console.log(this.data);
        }
    }
    openImage(url) {
        this.dialogRef2 = this.dialog.open(_full_image_full_image_component__WEBPACK_IMPORTED_MODULE_0__.FullImageComponent, { data: url });
    }
    onUpdateClick() {
        this.clientService.setCurrentClientInfo(this.data);
        this.dialogRef.close();
        this._router.navigate(['/updateclient']);
    }
    validate(id, status) {
        console.log("######## id:" + id);
        this.clientService.validateAuditorInfo({ 'id': id, 'status': status }).subscribe(res => console.log(res));
        if (status == 'green') {
            var message = "Client Validated, synchronize to see the result.";
            var btn = "OK";
            this.openAlertDialog(message, btn);
        }
        else {
            var message = "Client Refused, synchronize to see the status changed.";
            var btn = "OK";
            this.openAlertDialog(message, btn);
        }
        this.dialogRef.close();
        //this._router.navigate(['/map'])
    }
    openAlertDialog(msg, btn) {
        const dialogRef = this.dialog.open(_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_1__.AlertDialogComponent, {
            data: {
                message: msg,
                buttonText: {
                    ok: btn,
                }
            }
        });
    }
}
ClientInfoComponent.ɵfac = function ClientInfoComponent_Factory(t) { return new (t || ClientInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_clients_service__WEBPACK_IMPORTED_MODULE_2__.ClientsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
ClientInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ClientInfoComponent, selectors: [["app-client-info"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [4, "ngIf", "ngIfElse"], ["refused", ""], [1, "dialog-container"], [1, "aud-sell-container"], [1, "sell-container"], [1, "pdv-info-container"], [1, "pdv-img"], ["alt", "", 3, "src", "click"], [1, "pdv-info"], [1, "pdv-action-btns"], [1, "aud-container"], ["class", "pdv-action-btns", 4, "ngIf"], [1, "validPDV-container"], [1, "valid-pdv-container"], ["align", "center", 1, "action-btns"], ["mat-raised-button", "", "color", "primary", 1, "btn-green"], ["mat-raised-button", "", "color", "primary", 1, "btn-red"], ["mat-raised-button", "", "color", "primary", 1, "btn-orange"], [2, "color", "green"], [2, "color", "red"], ["mat-button", "", 1, "btn-valid", 3, "click"], ["mat-button", "", 1, "btn-refus", 3, "click"], [1, "dialog-content"], ["fxLayout", "column", "fxLayoutAlign", "center"], ["nfc", ""], ["mat-raised-button", "", "color", "primary", 1, "btn-green", 3, "click"]], template: function ClientInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ClientInfoComponent_div_0_Template, 99, 25, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ClientInfoComponent_div_1_Template, 43, 10, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loggedUser.role == "Back Office" || ctx.loggedUser.role == "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loggedUser.role == "Seller" || ctx.loggedUser.role == "Auditor");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton], styles: [".dialog-container[_ngcontent-%COMP%]{\r\n    width: 900px;\r\n    display: flex;\r\n    flex-flow: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.dialog-content[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-flow: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.dialog-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    color: rgb(39, 38, 38);\r\n}\r\n.aud-sell-container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    display: flex;\r\n    flex-flow: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.aud-container[_ngcontent-%COMP%]{\r\n    width: 400px;\r\n    margin: 10px;\r\n    display: flex;\r\n    flex-flow: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    grid-gap: 20px;\r\n    gap: 20px;\r\n    padding: 10px;\r\n    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;\r\n    border-radius: 10px;\r\n}\r\n.aud-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    background-color: #e7a1a1;\r\n    border-radius: 2px;\r\n    font-size: 15px;\r\n    color: #fff;\r\n    padding-left: 4px;\r\n    padding-right: 4px;\r\n}\r\n.sell-container[_ngcontent-%COMP%]{\r\n    width: 400px;\r\n    margin: 10px;\r\n    display: flex;\r\n    flex-flow: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    grid-gap: 20px;\r\n    gap: 20px;\r\n    padding: 10px;\r\n    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;\r\n    border-radius: 10px;\r\n}\r\n.sell-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    background-color: #e7a1a1;\r\n    border-radius: 2px;\r\n    font-size: 15px;\r\n    color: #fff;\r\n    padding-left: 4px;\r\n    padding-right: 4px;\r\n}\r\n.pdv-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100px;\r\n    height: 150px;\r\n    border-radius: 2px;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;\r\n    cursor: pointer;\r\n}\r\n.pdv-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin: 2px;\r\n    font-size: 10px;\r\n}\r\n.pdv-action-btns[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-flow: row;\r\n    justify-content: flex-start;\r\n    align-items: flex-start;\r\n    grid-gap: 20px;\r\n    gap: 20px;\r\n}\r\n.pdv-action-btns[_ngcontent-%COMP%]   .btn-valid[_ngcontent-%COMP%]{\r\n    justify-self: flex-start;\r\n    font-size: 13px;\r\n    color: #ffff;\r\n    background-color: #27AE61;\r\n    border-radius: 10px;\r\n    width: 100px;\r\n    line-height: 25px;\r\n}\r\n.pdv-action-btns[_ngcontent-%COMP%]   .btn-refus[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n    color: #ffff;\r\n    background-color: #AE5827;\r\n    border-radius: 10px;\r\n    width: 100px;\r\n    line-height: 25px;\r\n}\r\n.validPDV-container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin: 10px 30px 10px 40px;\r\n    display: flex;\r\n    flex-flow: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    grid-gap: 20px;\r\n    gap: 20px;\r\n    padding: 10px;\r\n    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;\r\n    border-radius: 10px;\r\n}\r\n.validPDV-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    background-color: #e7a1a1;\r\n    border-radius: 2px;\r\n    font-size: 15px;\r\n    color: #fff;\r\n    padding-left: 4px;\r\n    padding-right: 4px;\r\n}\r\n.valid-pdv-container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    display: flex;\r\n    flex-flow: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    grid-gap: 6%;\r\n    gap: 6%;\r\n}\r\n.pdv-info-container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-flow: row;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    grid-gap: 4%;\r\n    gap: 4%;\r\n}\r\n.nfc-card[_ngcontent-%COMP%]{\r\n    width: 200px;\r\n    height: 200px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 8px;\r\n    background-color: #DADADA;\r\n}\r\n.action-btns[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-flow: row;\r\n    align-items: center;\r\n    grid-gap: 10%;\r\n    gap: 10%;\r\n}\r\n.btn-green[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n    color: #ffff;\r\n    background-color: #27AE61;\r\n    border-radius: 8px;\r\n    width: 150px;\r\n    line-height: 35px;\r\n}\r\n.btn-red[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n    color: #ffff;\r\n    background-color: #AE5827;\r\n    border-radius: 8px;\r\n    width: 150px;\r\n    line-height: 35px;\r\n}\r\n.btn-orange[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n    color: #fff;\r\n    background-color: #FACF37;\r\n    border-radius: 8px;\r\n    width: 200px;\r\n    line-height: 35px;\r\n}\r\n.pdv-info[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n    font-style: bold; \r\n    color: green; \r\n    float: left;\r\n    font-size: 13px;\r\n    margin-right: 6px;\r\n}\r\n.pdv-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n}\r\n.pdv-info[_ngcontent-%COMP%]{\r\n    width: 300px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGNBQVM7SUFBVCxTQUFTO0lBQ1QsYUFBYTtJQUNiLDBGQUEwRjtJQUMxRixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixjQUFTO0lBQVQsU0FBUztJQUNULGFBQWE7SUFDYiwwRkFBMEY7SUFDMUYsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsOENBQThDO0lBQzlDLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsY0FBUztJQUFULFNBQVM7QUFDYjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksV0FBVztJQUNYLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsY0FBUztJQUFULFNBQVM7SUFDVCxhQUFhO0lBQ2IsMEZBQTBGO0lBQzFGLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsY0FBYztJQUNkLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBTztJQUFQLE9BQU87QUFDWDtBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLFlBQU87SUFBUCxPQUFPO0FBQ1g7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsYUFBUTtJQUFSLFFBQVE7QUFDWjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJjbGllbnQtaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogOTAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmRpYWxvZy1jb250ZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5kaWFsb2ctY29udGVudCBoMntcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHJnYigzOSwgMzgsIDM4KTtcclxufVxyXG4uYXVkLXNlbGwtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmF1ZC1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSg2NywgNzEsIDg1LCAwLjI3KSAwcHggMHB4IDAuMjVlbSwgcmdiYSg5MCwgMTI1LCAxODgsIDAuMDUpIDBweCAwLjI1ZW0gMWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uYXVkLWNvbnRhaW5lciBzcGFue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3YTFhMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbn1cclxuLnNlbGwtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoNjcsIDcxLCA4NSwgMC4yNykgMHB4IDBweCAwLjI1ZW0sIHJnYmEoOTAsIDEyNSwgMTg4LCAwLjA1KSAwcHggMC4yNWVtIDFlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5zZWxsLWNvbnRhaW5lciBzcGFue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3YTFhMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbn1cclxuXHJcbi5wZHYtaW1nIGltZ3tcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDFweCAycHggMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5wZHYtaW5mbyBwe1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuLnBkdi1hY3Rpb24tYnRuc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZ2FwOiAyMHB4O1xyXG59XHJcbi5wZHYtYWN0aW9uLWJ0bnMgLmJ0bi12YWxpZHtcclxuICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjZmZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyN0FFNjE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbn1cclxuLnBkdi1hY3Rpb24tYnRucyAuYnRuLXJlZnVze1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICNmZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0FFNTgyNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxufVxyXG5cclxuLnZhbGlkUERWLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAxMHB4IDMwcHggMTBweCA0MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoNjcsIDcxLCA4NSwgMC4yNykgMHB4IDBweCAwLjI1ZW0sIHJnYmEoOTAsIDEyNSwgMTg4LCAwLjA1KSAwcHggMC4yNWVtIDFlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLnZhbGlkUERWLWNvbnRhaW5lciBzcGFue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3YTFhMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbn1cclxuXHJcbi52YWxpZC1wZHYtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDYlO1xyXG59XHJcblxyXG4ucGR2LWluZm8tY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGdhcDogNCU7XHJcbn1cclxuXHJcbi5uZmMtY2FyZHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RBREFEQTtcclxufVxyXG5cclxuLmFjdGlvbi1idG5ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTAlO1xyXG59XHJcbi5idG4tZ3JlZW57XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogI2ZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdBRTYxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbn1cclxuLmJ0bi1yZWR7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogI2ZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUU1ODI3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbn1cclxuLmJ0bi1vcmFuZ2V7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUNGMzc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzVweDtcclxufVxyXG4ucGR2LWluZm8gbGFiZWx7XHJcbiAgICBmb250LXN0eWxlOiBib2xkOyBcclxuICAgIGNvbG9yOiBncmVlbjsgXHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG59XHJcblxyXG4ucGR2LWluZm8gcHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLnBkdi1pbmZve1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 23640:
/*!************************************!*\
  !*** ./src/app/clients.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientsService": () => (/* binding */ ClientsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var dexie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dexie */ 98729);
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-uuid */ 27368);
/* harmony import */ var _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert-dialog/alert-dialog.component */ 39060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _online_offline_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./online-offline-service.service */ 21244);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 46298);









class ClientsService {
    constructor(onlineOffline, http, _router, dialog) {
        this.onlineOffline = onlineOffline;
        this.http = http;
        this._router = _router;
        this.dialog = dialog;
        this.uri = "https://stalker-lite.herokuapp.com";
        this._clientUrl = this.uri + "/api1/clients";
        this._secteurUrl = this.uri + "/api1/secteurs";
        this._addclient = this.uri + "/api1/AddClient";
        this._getclient = this.uri + "/api1/addedClients";
        this._updateclient = this.uri + "/api1/updateClient";
        this.getClientBySell = this.uri + "/api1/getClientBySeller";
        this._validate = this.uri + "/api1/validate";
        ////////////////////remplacer par uri après le port
        this._getClientByID = "https://stalker-lite.herokuapp.com/api1/GetClient";
        this.registerToEvents(onlineOffline);
        this.createDatabase();
        // this.request = window.indexedDB.open("MyTestDatabase", 1)
        // this.request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
        //   console.log("Why didn't you allow my web app to use IndexedDB?!");
        // };
    }
    getNFC() {
        var url = "http://localhost:7000/nfc";
        return this.http.post(url, "0633691574");
    }
    getSMS(phone) {
        var url = "http://localhost:7000/sms";
        return this.http.post(url, phone);
    }
    SendClient(client) {
        return this.http.post(this._addclient, client);
    }
    getAllClient() {
        return this.http.get(this._clientUrl);
    }
    createDatabase() {
        this.db = new dexie__WEBPACK_IMPORTED_MODULE_0__["default"]('MyTestDatabase');
        this.db.version(1).stores({
            client: 'UUid'
        });
    }
    addTodo(client) {
        client["UUid"] = angular2_uuid__WEBPACK_IMPORTED_MODULE_1__.UUID.UUID();
        if (!this.onlineOffline.isOnline) {
            this.addToIndexedDb(client);
        }
        else {
            //post request to mongodb
            this.SendClient(client).subscribe(res => {
                console.log(res);
                console.log("data sent");
            });
        }
    }
    getClientBySeller(lat, long) {
        var url = "http://localhost:3000/api1/getClientBySeller/" + lat + "/" + long + "";
        console.log(url);
        return this.http.get(url);
    }
    getClientByAuditor(lat, long) {
        var url = "http://localhost:3000/api1/getClientByAuditor/" + lat + "/" + long + "";
        console.log(url);
        return this.http.get(url);
    }
    // used for update functionality
    setCurrentClientInfo(client) {
        this.currentClient = client;
        console.log('***************************' + this.currentClient.NomPrenom);
    }
    addToIndexedDb(clientt) {
        this.db.client
            .add(clientt)
            .then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const allItems = yield this.db["client"].toArray();
            console.log('saved in DB, DB is now', allItems);
            var message = "Data saved successfuly";
            var btn = "Continue";
            this.openAlertDialog(message, btn);
        }))
            .catch(e => {
            alert('Error: ' + (e.stack || e));
        });
    }
    sendItemsFromIndexedDb() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log("sending items");
            // const allItems: any[] = await this.db["client"].toArray();
            var db;
            var transaction;
            var upgradeDb;
            var request = window.indexedDB.open("MyTestDatabase", 10);
            // upgradeDb.createObjectStore('client');
            request.onerror = function (event) {
                console.log("Why didn't you allow my web app to use IndexedDB?!");
            };
            request.onsuccess = (event) => {
                db = event.target.result;
                console.log("success");
                console.log(db);
                transaction = db.transaction(['client'], 'readwrite');
                var objectStore = transaction.objectStore("client");
                var objectStoreRequest = objectStore.getAll();
                objectStoreRequest.onsuccess = event => {
                    var all = event.target.result;
                    // console.log("------------------------")
                    console.log(all);
                    // console.log("------------------------")
                    all.forEach(element => {
                        // console.log("---")
                        console.log(element);
                        this.SendClient(element).subscribe(res => {
                            console.log(res);
                        });
                        console.log("data sent succusfuly");
                    });
                };
                this.db.client.clear();
                // objectStoreRequest.onerror=event=>{
                //   console.log(event)
                // }
            };
        });
    }
    openAlertDialog(msg, btn) {
        const dialogRef = this.dialog.open(_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_2__.AlertDialogComponent, {
            data: {
                message: msg,
                buttonText: {
                    ok: btn,
                }
            }
        });
    }
    registerToEvents(onlineOffline) {
        onlineOffline.connectionChanged.subscribe(online => {
            console.log(online);
            if (online) {
                console.log('went online');
                console.log('sending all stored items');
                var message = "went online, sending all stored items";
                var btn = "Ok";
                this.openAlertDialog(message, btn);
                this.sendItemsFromIndexedDb();
                // this.getdata()
            }
            else {
                console.log('went offline, storing in indexdb');
                var message = "went offline, storing in indexdb";
                var btn = "Ok";
                this.openAlertDialog(message, btn);
            }
        });
    }
    getAllSecteurs() {
        return this.http.get(this._secteurUrl);
    }
    getClient() {
        return this.http.get(this._getclient);
    }
    getClientInfo() {
        return this.currentClient;
    }
    getShow() {
        var list = [];
        var transaction;
        var request = window.indexedDB.open("MyTestDatabase", 10);
        request.onerror = function (event) {
            console.log("Why didn't you allow my web app to use IndexedDB?!");
        };
        request.onsuccess = (event) => {
            this.db = event.target.result;
            console.log("success");
            console.log(this.db);
            transaction = this.db.transaction(['client'], 'readwrite');
            var objectStore = transaction.objectStore("client");
            var objectStoreRequest = objectStore.getAll();
            objectStoreRequest.onsuccess = function (event) {
                var all = event.target.result;
                all.forEach(element => {
                    console.log("---");
                    var elm = element.UUid;
                    console.log(elm);
                    list.push(elm);
                    console.log(list);
                });
            };
        };
        return list;
    }
    updateClient(client) {
        return this.http.post(this._updateclient, client);
    }
    validateAuditorInfo(info) {
        console.log("#############################");
        console.log(info);
        return this.http.post(this._validate, info);
    }
    //////////////////
    getClientByID(id) {
        console.log('id' + id);
        return this.http.get(this._getClientByID + '/' + id);
    }
}
ClientsService.ɵfac = function ClientsService_Factory(t) { return new (t || ClientsService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_online_offline_service_service__WEBPACK_IMPORTED_MODULE_3__.OnlineOfflineServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog)); };
ClientsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ClientsService, factory: ClientsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 15706:
/*!**********************************************!*\
  !*** ./src/app/clients/clients.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientsComponent": () => (/* binding */ ClientsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 78662);




class ClientsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ClientsComponent.ɵfac = function ClientsComponent_Factory(t) { return new (t || ClientsComponent)(); };
ClientsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientsComponent, selectors: [["app-clients"]], decls: 15, vars: 0, consts: [[1, "clients_container"], ["mat-button", ""], [1, "clients-list"], ["mat-card-image", "", "src", "assets/images/blank.jpg", "alt", ""], [1, "card-content"]], template: function ClientsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "filter_list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Filter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "PDV type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sector");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardContent], styles: [".clients_container[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    align-items: center;\r\n    padding: 8px;\r\n    background-color: #F6F6F6;\r\n}\r\n.clients_container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    margin: 8px;\r\n    border-radius: 10px;\r\n    color: #646161;\r\n    border: 1px solid #959191;\r\n    width: 140px;\r\n}\r\n.clients_container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{\r\n    color: #27AE61;\r\n}\r\n.clients-list[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    flex-flow: row wrap;\r\n    \r\n}\r\n.clients-list[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{\r\n    width: 200px;\r\n    height: auto;  \r\n}\r\n.clients-list[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    padding: 8px;\r\n    box-sizing: border-box;\r\n    margin-bottom: 0;\r\n    border-radius: 10px !important;\r\n}\r\n.card-content[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\np[_ngcontent-%COMP%]{\r\n    margin-bottom: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsOEJBQThCO0FBQ2xDO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJjbGllbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xpZW50c19jb250YWluZXJ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkY2O1xyXG59XHJcbi5jbGllbnRzX2NvbnRhaW5lciBidXR0b257XHJcbiAgICBtYXJnaW46IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogIzY0NjE2MTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5NTkxOTE7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbn1cclxuLmNsaWVudHNfY29udGFpbmVyIGJ1dHRvbiBtYXQtaWNvbntcclxuICAgIGNvbG9yOiAjMjdBRTYxO1xyXG59XHJcblxyXG4uY2xpZW50cy1saXN0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICBcclxufVxyXG4uY2xpZW50cy1saXN0IG1hdC1jYXJke1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvOyAgXHJcbn1cclxuLmNsaWVudHMtbGlzdCBtYXQtY2FyZCBpbWd7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQtY29udGVudHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5we1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 25305:
/*!****************************************************!*\
  !*** ./src/app/full-image/full-image.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullImageComponent": () => (/* binding */ FullImageComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);


class FullImageComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
        this.imageURL = this.data;
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~ Image" + this.imageURL);
    }
}
FullImageComponent.ɵfac = function FullImageComponent_Factory(t) { return new (t || FullImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
FullImageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FullImageComponent, selectors: [["app-full-image"]], decls: 1, vars: 1, consts: [["alt", "", 3, "src"]], template: function FullImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imageURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdWxsLWltYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 22253:
/*!************************************!*\
  !*** ./src/app/indexdb.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexdbService": () => (/* binding */ IndexdbService)
/* harmony export */ });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ 4095);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet.markercluster */ 79619);
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet_markercluster__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _clients_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clients.service */ 23640);




class IndexdbService {
    constructor(client) {
        this.client = client;
        this.version = 6;
    }
    createDatabase() {
        var request = window.indexedDB.open("off", this.version);
        request.onerror = function (event) {
            console.log("Why didn't you allow my web app to use IndexedDB?!");
        };
        request.onupgradeneeded = (event) => {
            console.log(event.target);
            this.db = request.result;
            console.log("upgrade");
            var objectStore = this.db.createObjectStore("data", { keyPath: '_id' });
            console.log("create Sector ");
            var objectt = this.db.createObjectStore("sector", { keyPath: '_id' });
            console.log(objectt);
        };
        request.onsuccess = (event) => {
            this.db = event.target.result;
            console.log(this.db);
        };
    }
    AddItem() {
        var costumer = { '_id': 123, Valeur: "hafsa" };
        console.log(costumer);
        //const trans= this.db.transaction(['data'], 'readwrite');
        //objectStore.add(costumer)
        //console.log(objectStore)
        var allclient = [];
        this.client.getAllClient().subscribe(res => {
            res.forEach(element => {
                var geo = { _id: element._id, Valeur: JSON.stringify(element.geometry) };
                //console.log(geo)
                allclient.push(geo);
                this.transaction = this.db.transaction(['data'], 'readwrite');
                var objectStore = this.transaction.objectStore("data");
                var request = objectStore.add(geo);
                request.onsuccess = function (event) {
                    console.log("done Synchronize");
                };
            });
            //console.log(allclient)
        });
    }
    ClearData() {
        var request = window.indexedDB.open("off", this.version);
        request.onerror = function (event) {
            console.log("Why didn't you allow my web app to use IndexedDB?!");
        };
        request.onsuccess = (event) => {
            this.db = event.target.result;
            console.log("success inside Clear");
            console.log(this.db);
            this.transaction = this.db.transaction(['data'], 'readwrite');
            var objectStore = this.transaction.objectStore("data");
            var objectStoreRequest = objectStore.clear();
            objectStoreRequest.onsuccess = function (event) {
                console.log("Data Cleared");
            };
        };
    }
    ClearDataSector() {
        var request = window.indexedDB.open("off", this.version);
        request.onerror = function (event) {
            console.log("Why didn't you allow my web app to use IndexedDB?!");
        };
        request.onsuccess = (event) => {
            this.db = event.target.result;
            console.log("success Sector inside Clear");
            console.log(this.db);
            this.transaction = this.db.transaction(['sector'], 'readwrite');
            var objectStore = this.transaction.objectStore("sector");
            var objectStoreRequest = objectStore.clear();
            objectStoreRequest.onsuccess = function (event) {
                console.log("Data Sector Cleared");
            };
        };
    }
    /// ***** Not Used 
    getDataClient(map, markercluster, icon) {
        var request = window.indexedDB.open("off", this.version);
        request.onerror = function (event) {
            console.log("Why didn't you allow my web app to use IndexedDB?!");
        };
        request.onsuccess = (event) => {
            this.db = event.target.result;
            console.log("success");
            console.log(this.db);
            this.transaction = this.db.transaction(['data'], 'readwrite');
            var objectStore = this.transaction.objectStore("data");
            var objectStoreRequest = objectStore.getAll();
            objectStoreRequest.onsuccess = function (event) {
                var all = event.target.result;
                all.forEach(element => {
                    console.log("---");
                    var elm = JSON.parse(element.Valeur);
                    // console.log(elm)
                    var Point = { _id: element._id, geometry: elm };
                    var geojsonPoint = Point.geometry.geometry;
                    var marker = leaflet__WEBPACK_IMPORTED_MODULE_0__.geoJSON(geojsonPoint, {
                        pointToLayer: (point, latlon) => {
                            return leaflet__WEBPACK_IMPORTED_MODULE_0__.marker(latlon, { icon: icon });
                            //return L.circle([latlon.lat,latlon.lng], {color:"green",radius:20}).addTo(this.map);
                        }
                    });
                    markercluster.addLayer(marker);
                    map.addLayer(markercluster);
                });
            };
        };
    }
}
IndexdbService.ɵfac = function IndexdbService_Factory(t) { return new (t || IndexdbService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_clients_service__WEBPACK_IMPORTED_MODULE_2__.ClientsService)); };
IndexdbService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: IndexdbService, factory: IndexdbService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 41124:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../authentication.service */ 90806);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _clients_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clients.service */ 23640);
/* harmony import */ var _indexdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../indexdb.service */ 22253);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 78662);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 73981);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 58359);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 58852);













function LoginComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(fb, _auth, _router, client, index) {
        this.fb = fb;
        this._auth = _auth;
        this._router = _router;
        this.client = client;
        this.index = index;
        this.hide = false;
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)]]
        });
        this.version = 6;
    }
    ngOnInit() {
        this.index.createDatabase();
    }
    onLogin() {
        if (!this.loginForm.valid) {
            return;
        }
        else {
            var email = this.loginForm.value.email;
            var password = this.loginForm.value.password;
            console.log(email, password);
            var user = {
                'email': email,
                'password': password
            };
            this._auth.getUserLogin(user).subscribe(res => this.Response(res), err => console.log(err));
        }
    }
    // Store Token and delegate to Home page
    Response(res) {
        console.log(res);
        localStorage.setItem('token', res.Data.token);
        localStorage.setItem("user", JSON.stringify(res.Data.user));
        console.log(this._auth.getToken());
        localStorage.setItem("name", res.Data.user.name);
        //this.index.AddItem();
        ///******* GET DATA  ******/
        this.PutDataClient();
    }
    PutDataClient() {
        var db;
        var transaction;
        var request = window.indexedDB.open("off", this.version);
        request.onerror = function (event) {
            console.log("Why didn't you allow my web app to use IndexedDB?!");
        };
        request.onsuccess = (event) => {
            db = event.target.result;
            console.log("success Login");
            var allclient = [];
            this.client.getAllClient().subscribe(res => {
                res.forEach(element => {
                    var geo = { _id: element._id, Valeur: JSON.stringify(element.geometry) };
                    allclient.push(geo);
                    transaction = db.transaction(['data'], 'readwrite');
                    var objectStore = transaction.objectStore("data");
                    var request = objectStore.add(geo);
                    request.onsuccess = function (event) {
                        console.log("done Adding login");
                    };
                });
                this.PutDataSector();
            });
        };
    }
    PutDataSector() {
        var db;
        var transaction;
        var request = window.indexedDB.open("off", this.version);
        request.onerror = function (event) {
            console.log("Why didn't you allow my web app to use IndexedDB?!");
        };
        request.onsuccess = (event) => {
            db = event.target.result;
            console.log("success Sector Login");
            this.client.getAllSecteurs().subscribe(res => {
                res.forEach(element => {
                    transaction = db.transaction(['sector'], 'readwrite');
                    var objectStore = transaction.objectStore("sector");
                    var geo = { _id: element._id, Valeur: JSON.stringify(element.geometry) };
                    console.log("$sector login$");
                    console.log(geo);
                    var request = objectStore.add(geo);
                    request.onsuccess = function (event) {
                        console.log("done Adding Sector login");
                    };
                });
                this._router.navigate(['/map']).then(() => {
                    //window.location.reload();
                });
                //console.log(allclient)
            });
        };
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_clients_service__WEBPACK_IMPORTED_MODULE_1__.ClientsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_indexdb_service__WEBPACK_IMPORTED_MODULE_2__.IndexdbService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 27, vars: 7, consts: [[1, "container"], [1, "header"], ["name", "loginForm", 3, "formGroup"], [1, "emailInput"], ["appearance", "outline", 1, "full-width"], ["formControlName", "email", "matInput", "", "placeholder", "Enter email address", "required", ""], [4, "ngIf"], ["routerLink", "/auth/forgot-password", 1, "aLink"], ["formControlName", "password", "matInput", "", "required", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-flat-button", "", "color", "primary", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, LoginComponent_mat_error_12_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_21_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, LoginComponent_mat_error_24_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_25_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loginForm.controls["email"].valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", "Hide Password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.hide ? "visibility_off" : "visibility", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loginForm.controls["password"].valid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError], styles: ["@media (min-width: 1200px){\r\n\r\n  .container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-flow: column;\r\n    height: 100%;\r\n    width: 100%;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: #AFE3C6;\r\n  }\r\n\r\n  mat-card[_ngcontent-%COMP%] {\r\n    max-width: 500px;\r\n    text-align: center;\r\n    max-height: 600px;\r\n   margin-left: auto;\r\n   margin-right: auto;\r\n   vertical-align: center;\r\n  }\r\n  \r\n  .header[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    color: #27AE61;\r\n    size: 12;\r\n    font-weight: bold;\r\n    font-size: 150%;\r\n  \r\n  }\r\n  .full-width[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n  }\r\n  \r\n  .button-row[_ngcontent-%COMP%] {\r\n    padding-top: 5px;\r\n  }\r\n  \r\n  .button-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    margin-right: 8px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .forget-password[_ngcontent-%COMP%]{\r\n    padding-left: 0px;\r\n    color: #27AE61;\r\n  }\r\n  \r\n  \r\n  .emailInput[_ngcontent-%COMP%]{\r\n    padding-top: 10px;\r\n  \r\n  }\r\n  \r\n \r\n  \r\n  .aLink[_ngcontent-%COMP%]{\r\n    float: right;\r\n    padding-right: 60px;\r\n    text-decoration: none;\r\n    color: #27AE61;\r\n  }\r\n\r\n  .mat-flat-button[_ngcontent-%COMP%]{\r\n      background-color: #27AE61;\r\n  }\r\n\r\n    .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\r\n    color: #27AE61 !important;\r\n  }\r\n  \r\n  \r\n}\r\n\r\n@media (min-width: 900px) and (max-width: 1200px){\r\n\r\n  .container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-flow: column;\r\n    height: 100%;\r\n    width: 100%;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: #AFE3C6;\r\n  }\r\n  \r\n  mat-card[_ngcontent-%COMP%] {\r\n    max-width: 500px;\r\n    text-align: center;\r\n    max-height: 600px;\r\n   margin-left: auto;\r\n   margin-right: auto;\r\n   vertical-align: center;\r\n  }\r\n  \r\n  .header[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    color: #27AE61;\r\n    size: 12;\r\n    font-weight: bold;\r\n    font-size: 150%;\r\n  \r\n  }\r\n  .full-width[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n  }\r\n  \r\n  .button-row[_ngcontent-%COMP%] {\r\n    padding-top: 5px;\r\n  }\r\n  \r\n  .button-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    margin-right: 8px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .forget-password[_ngcontent-%COMP%]{\r\n    padding-left: 0px;\r\n    color: #27AE61;\r\n  }\r\n  \r\n  \r\n  .emailInput[_ngcontent-%COMP%]{\r\n    padding-top: 10px;\r\n  \r\n  }\r\n  \r\n \r\n  \r\n  .aLink[_ngcontent-%COMP%]{\r\n    float: right;\r\n    padding-right: 60px;\r\n    text-decoration: none;\r\n    color: #27AE61;\r\n  }\r\n\r\n  .mat-flat-button[_ngcontent-%COMP%]{\r\n      background-color: #27AE61;\r\n  }\r\n\r\n    .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\r\n    color: #27AE61 !important;\r\n  }\r\n  \r\n  \r\n}\r\n\r\n@media (min-width: 599px) and (max-width: 900px){\r\n\r\n  .container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-flow: column;\r\n    height: 100%;\r\n    width: 100%;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: #AFE3C6;\r\n  }\r\n  \r\n  mat-card[_ngcontent-%COMP%] {\r\n    max-width: 500px;\r\n    text-align: center;\r\n    max-height: 600px;\r\n   margin-left: auto;\r\n   margin-right: auto;\r\n   vertical-align: center;\r\n  }\r\n  \r\n  .header[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    color: #27AE61;\r\n    size: 12;\r\n    font-weight: bold;\r\n    font-size: 150%;\r\n  \r\n  }\r\n  .full-width[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n  }\r\n  \r\n  .button-row[_ngcontent-%COMP%] {\r\n    padding-top: 5px;\r\n  }\r\n  \r\n  .button-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    margin-right: 8px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .forget-password[_ngcontent-%COMP%]{\r\n    padding-left: 0px;\r\n    color: #27AE61;\r\n  }\r\n  \r\n  \r\n  .emailInput[_ngcontent-%COMP%]{\r\n    padding-top: 10px;\r\n  \r\n  }\r\n  \r\n \r\n  \r\n  .aLink[_ngcontent-%COMP%]{\r\n    float: right;\r\n    padding-right: 60px;\r\n    text-decoration: none;\r\n    color: #27AE61;\r\n  }\r\n\r\n  .mat-flat-button[_ngcontent-%COMP%]{\r\n      background-color: #27AE61;\r\n  }\r\n\r\n    .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\r\n    color: #27AE61 !important;\r\n  }\r\n  \r\n  \r\n}\r\n\r\n@media (min-width: 350px) and (max-width: 599px){\r\n\r\n  .container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-flow: column;\r\n    height: 100%;\r\n    width: 100%;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: #AFE3C6;\r\n  }\r\n  \r\n  mat-card[_ngcontent-%COMP%] {\r\n    max-width: 300px;\r\n    text-align: center;\r\n    max-height: 500px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n   vertical-align: center;\r\n  }\r\n  \r\n  .header[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    color: #27AE61;\r\n    size: 12;\r\n    font-weight: bold;\r\n    font-size: 150%;\r\n  \r\n  }\r\n  .full-width[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n  }\r\n  \r\n  .button-row[_ngcontent-%COMP%] {\r\n    padding-top: 5px;\r\n  }\r\n  \r\n  .button-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    margin-right: 8px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .forget-password[_ngcontent-%COMP%]{\r\n    padding-left: 0px;\r\n    color: #27AE61;\r\n  }\r\n  \r\n  \r\n  .emailInput[_ngcontent-%COMP%]{\r\n    padding-top: 10px;\r\n  \r\n  }\r\n  \r\n \r\n  \r\n  .aLink[_ngcontent-%COMP%]{\r\n    float: right;\r\n    padding-right: 60px;\r\n    text-decoration: none;\r\n    color: #27AE61;\r\n  }\r\n\r\n  .mat-flat-button[_ngcontent-%COMP%]{\r\n      background-color: #27AE61;\r\n  }\r\n\r\n    .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\r\n    color: #27AE61 !important;\r\n  }\r\n  \r\n  \r\n}\r\n\r\n@media (min-width: 200px) and (max-width: 350px){\r\n\r\n  .container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-flow: column;\r\n    height: 100%;\r\n    width: 100%;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: #AFE3C6;\r\n  }\r\n  \r\n  mat-card[_ngcontent-%COMP%] {\r\n    max-width: 250px;\r\n    text-align: center;\r\n    max-height: 250px;\r\n   margin-left: auto;\r\n   margin-right: auto;\r\n   vertical-align: center;\r\n  }\r\n\r\n  \r\n  .header[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    color: #27AE61;\r\n    size: 12;\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n  \r\n  }\r\n  .full-width[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n  }\r\n    .mat-form-field-flex > .mat-form-field-infix { padding: 0.4em 0px !important;}\r\n    .mat-form-field-label-wrapper { top: -1.5em; }\r\n\r\n    .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\r\n      transform: translateY(-1.1em) scale(.75);\r\n      width: 133.33333%;\r\n  }\r\n  .button-row[_ngcontent-%COMP%] {\r\n    padding-top: 5px;\r\n  }\r\n  \r\n  .button-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    margin-right: 8px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .forget-password[_ngcontent-%COMP%]{\r\n    padding-left: 0px;\r\n    color: #27AE61;\r\n  }\r\n  \r\n  \r\n  .emailInput[_ngcontent-%COMP%]{\r\n    padding-top: 10px;\r\n  \r\n  }\r\n  \r\n \r\n  \r\n  .aLink[_ngcontent-%COMP%]{\r\n    float: right;\r\n    text-decoration: none;\r\n    color: #27AE61;\r\n    font-size: 12px;\r\n  }\r\n\r\n  .mat-flat-button[_ngcontent-%COMP%]{\r\n      background-color: #27AE61;\r\n  }\r\n\r\n    .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\r\n    color: #27AE61 !important;\r\n  }\r\n\r\n\r\n  \r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtHQUNsQixpQkFBaUI7R0FDakIsa0JBQWtCO0dBQ2xCLHNCQUFzQjtFQUN2Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixlQUFlOztFQUVqQjtFQUNBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCOzs7RUFHQTtJQUNFLGlCQUFpQjs7RUFFbkI7Ozs7RUFJQTtJQUNFLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGNBQWM7RUFDaEI7O0VBRUE7TUFDSSx5QkFBeUI7RUFDN0I7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7OztBQUdGOztBQUVBOztFQUVFO0lBQ0UsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7R0FDbEIsaUJBQWlCO0dBQ2pCLGtCQUFrQjtHQUNsQixzQkFBc0I7RUFDdkI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsZUFBZTs7RUFFakI7RUFDQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGlCQUFp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LHlCQUF5QjtFQUMzQjs7Ozs7QUFLRiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCl7XHJcblxyXG4gIC5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBRkUzQzY7XHJcbiAgfVxyXG5cclxuICBtYXQtY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWF4LWhlaWdodDogNjAwcHg7XHJcbiAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzI3QUU2MTtcclxuICAgIHNpemU6IDEyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbiAgXHJcbiAgfVxyXG4gIC5mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b24tcm93IHtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b24tcm93IGEge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JnZXQtcGFzc3dvcmR7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIGNvbG9yOiAjMjdBRTYxO1xyXG4gIH1cclxuICBcclxuICBcclxuICAuZW1haWxJbnB1dHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIFxyXG4gIH1cclxuICBcclxuIFxyXG4gIFxyXG4gIC5hTGlua3tcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzI3QUU2MTtcclxuICB9XHJcblxyXG4gIC5tYXQtZmxhdC1idXR0b257XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyN0FFNjE7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XHJcbiAgICBjb2xvcjogIzI3QUU2MSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KXtcclxuXHJcbiAgLmNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0FGRTNDNjtcclxuICB9XHJcbiAgXHJcbiAgbWF0LWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG4gICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMyN0FFNjE7XHJcbiAgICBzaXplOiAxMjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNTAlO1xyXG4gIFxyXG4gIH1cclxuICAuZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uLXJvdyB7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uLXJvdyBhIHtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuZm9yZ2V0LXBhc3N3b3Jke1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBjb2xvcjogIzI3QUU2MTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmVtYWlsSW5wdXR7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBcclxuICB9XHJcbiAgXHJcbiBcclxuICBcclxuICAuYUxpbmt7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICMyN0FFNjE7XHJcbiAgfVxyXG5cclxuICAubWF0LWZsYXQtYnV0dG9ue1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdBRTYxO1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xyXG4gICAgY29sb3I6ICMyN0FFNjEgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1OTlweCkgYW5kIChtYXgtd2lkdGg6IDkwMHB4KXtcclxuXHJcbiAgLmNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0FGRTNDNjtcclxuICB9XHJcbiAgXHJcbiAgbWF0LWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG4gICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMyN0FFNjE7XHJcbiAgICBzaXplOiAxMjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNTAlO1xyXG4gIFxyXG4gIH1cclxuICAuZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uLXJvdyB7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uLXJvdyBhIHtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuZm9yZ2V0LXBhc3N3b3Jke1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBjb2xvcjogIzI3QUU2MTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmVtYWlsSW5wdXR7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBcclxuICB9XHJcbiAgXHJcbiBcclxuICBcclxuICAuYUxpbmt7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICMyN0FFNjE7XHJcbiAgfVxyXG5cclxuICAubWF0LWZsYXQtYnV0dG9ue1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdBRTYxO1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xyXG4gICAgY29sb3I6ICMyN0FFNjEgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAzNTBweCkgYW5kIChtYXgtd2lkdGg6IDU5OXB4KXtcclxuXHJcbiAgLmNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0FGRTNDNjtcclxuICB9XHJcbiAgXHJcbiAgbWF0LWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzI3QUU2MTtcclxuICAgIHNpemU6IDEyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbiAgXHJcbiAgfVxyXG4gIC5mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b24tcm93IHtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b24tcm93IGEge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JnZXQtcGFzc3dvcmR7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIGNvbG9yOiAjMjdBRTYxO1xyXG4gIH1cclxuICBcclxuICBcclxuICAuZW1haWxJbnB1dHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIFxyXG4gIH1cclxuICBcclxuIFxyXG4gIFxyXG4gIC5hTGlua3tcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzI3QUU2MTtcclxuICB9XHJcblxyXG4gIC5tYXQtZmxhdC1idXR0b257XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyN0FFNjE7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XHJcbiAgICBjb2xvcjogIzI3QUU2MSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDIwMHB4KSBhbmQgKG1heC13aWR0aDogMzUwcHgpe1xyXG5cclxuICAuY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUZFM0M2O1xyXG4gIH1cclxuICBcclxuICBtYXQtY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWF4LWhlaWdodDogMjUwcHg7XHJcbiAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBcclxuICAuaGVhZGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMyN0FFNjE7XHJcbiAgICBzaXplOiAxMjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIFxyXG4gIH1cclxuICAuZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXggPiAubWF0LWZvcm0tZmllbGQtaW5maXggeyBwYWRkaW5nOiAwLjRlbSAwcHggIWltcG9ydGFudDt9XHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHsgdG9wOiAtMS41ZW07IH1cclxuXHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMWVtKSBzY2FsZSguNzUpO1xyXG4gICAgICB3aWR0aDogMTMzLjMzMzMzJTtcclxuICB9XHJcbiAgLmJ1dHRvbi1yb3cge1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbi1yb3cgYSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmZvcmdldC1wYXNzd29yZHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgY29sb3I6ICMyN0FFNjE7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5lbWFpbElucHV0e1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gXHJcbiAgXHJcbiAgLmFMaW5re1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICMyN0FFNjE7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICAubWF0LWZsYXQtYnV0dG9ue1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdBRTYxO1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xyXG4gICAgY29sb3I6ICMyN0FFNjEgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG5cclxuICBcclxuICBcclxufVxyXG5cclxuXHJcblxyXG4gICJdfQ== */"] });


/***/ }),

/***/ 28030:
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapComponent": () => (/* binding */ MapComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ 4095);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet.markercluster */ 79619);
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet_markercluster__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client_info_client_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client-info/client-info.component */ 8755);
/* harmony import */ var _turf_turf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @turf/turf */ 46154);
/* harmony import */ var _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../alert-dialog/alert-dialog.component */ 39060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _clients_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../clients.service */ 23640);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _indexdb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../indexdb.service */ 22253);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 21036);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 34357);
















const _c0 = function (a1) { return ["/addclient", a1]; };
class MapComponent {
    /// ****** constructor *****/
    constructor(_serviceClient, _router, zone, index, dialog) {
        this._serviceClient = _serviceClient;
        this._router = _router;
        this.zone = zone;
        this.index = index;
        this.dialog = dialog;
        this.content = null;
        this.mySector = 'hello';
        this.icon = leaflet__WEBPACK_IMPORTED_MODULE_0__.icon({
            iconUrl: 'assets/green.png',
            iconSize: [12, 12],
        });
        this.location_icon = leaflet__WEBPACK_IMPORTED_MODULE_0__.icon({
            iconUrl: 'assets/location.png',
            iconSize: [30, 30]
        });
        this.clientwithNFC_icon = leaflet__WEBPACK_IMPORTED_MODULE_0__.icon({
            iconUrl: 'assets/blue.png',
            iconSize: [15, 15]
        });
        this.clientwithoutNFC_icon = leaflet__WEBPACK_IMPORTED_MODULE_0__.icon({
            iconUrl: 'assets/red.png',
            iconSize: [15, 15]
        });
        this.markersCluster = new leaflet__WEBPACK_IMPORTED_MODULE_0__.MarkerClusterGroup();
        this.markerClusterSector = new leaflet__WEBPACK_IMPORTED_MODULE_0__.MarkerClusterGroup();
        this.lat = 33.61041004;
        this.lon = -7.527008504;
        this.statusAddClient = false;
        this.AllSecteurs = [];
        this.version = 6;
        this.index.createDatabase();
    }
    initMap() {
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_0__.map('map', {
            center: [this.lat, this.lon],
            zoom: 10,
            zoomControl: false
        });
        const zoomOptions = {
            zoomInText: '+',
            zoomOutText: '-',
        };
        // const zoom = L.control.zoom(zoomOptions);
        const tiles = leaflet__WEBPACK_IMPORTED_MODULE_0__.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 30,
            minZoom: 0
        });
        // const locationControl = {
        //   position: 'bottomleft',
        //   strings: {
        //       title: "Show me where I am, yo!"
        //   }}
        // const lc = L.control.locate(locationControl)
        // lc.addTo(this.map);
        // zoom.addTo(this.map);
        tiles.addTo(this.map);
        // this.getClients()
        this.getDataClient();
        // this.getAllSecteurs()
        this.getDataSector();
        this.map.addLayer(this.markersCluster);
        this.map.addControl(leaflet__WEBPACK_IMPORTED_MODULE_0__.control.zoom({ position: 'bottomleft' }));
    }
    //////////////
    Search(IDGeomerty) {
        console.log(IDGeomerty);
        // tslint:disable-next-line:no-shadowed-variable
        this._serviceClient.getClientByID(IDGeomerty).subscribe(res => {
            if (IDGeomerty != null) {
                this.map.setView(new leaflet__WEBPACK_IMPORTED_MODULE_0__.LatLng(res["geometry"].geometry.coordinates[1], res["geometry"].geometry.coordinates[0]), 30, { animation: true }).addTo(this.map);
            }
        }, (error) => { console.log(error); });
    }
    //////////////////////
    ngAfterViewInit() {
        this.getLocation();
        this.initMap();
        // this.getClient()
    }
    getLocation() {
        // interval(1000).subscribe(x => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                if (position) {
                    console.log('Latitude: ' + position.coords.latitude +
                        ' Longitude: ' + position.coords.longitude);
                    this.lat = position.coords.latitude;
                    this.lon = position.coords.longitude;
                    console.log(this.lat);
                    console.log(this.lon);
                    this.map.setView(new leaflet__WEBPACK_IMPORTED_MODULE_0__.LatLng(this.lat, this.lon), 11, { animation: true });
                    this.myMarker = leaflet__WEBPACK_IMPORTED_MODULE_0__.marker([this.lat, this.lon], { icon: this.location_icon });
                    // this.myMarker.bindPopup("my")
                    this.myMarker.addTo(this.map);
                }
            }, (error) => console.log(error));
        }
        else {
            alert('Geolocation is not supported by this browser.');
        }
        // });
    }
    locate() {
        this.map.flyTo(new leaflet__WEBPACK_IMPORTED_MODULE_0__.LatLng(this.lat, this.lon), 13);
        this.Insid();
    }
    getClient() {
        const client = this._serviceClient.getClient().subscribe(res => {
            console.log('*********** ');
            console.log(res);
            res.forEach(element => {
                console.log(element.lat, element.lon);
                if (element.status === 'red') {
                    const popupOptions = {
                        maxWidth: 800,
                        className: 'popup'
                    };
                    leaflet__WEBPACK_IMPORTED_MODULE_0__.marker([element.lat, element.lon], { icon: this.clientwithoutNFC_icon }).addTo(this.map).on('click', () => {
                        this.content = element;
                        this.zone.run(() => this.openDialog(element));
                    });
                }
                if (element.status === 'green') {
                    leaflet__WEBPACK_IMPORTED_MODULE_0__.marker([element.lat, element.lon], { icon: this.clientwithNFC_icon }).addTo(this.map);
                }
            });
        });
        console.log(client);
    }
    // open dialog with client info
    openDialog(content) {
        // console.log(content)
        this.dialogRef = this.dialog.open(_client_info_client_info_component__WEBPACK_IMPORTED_MODULE_2__.ClientInfoComponent, { data: content });
    }
    /////////////// *************get data  of clients and sectors **********************///////////////
    getClients() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const arr = [];
            this._serviceClient.getAllClient().subscribe(res => {
                res.forEach(element => {
                    var _a;
                    // console.log("@@@@@@@@@@@@@@@@@@@")
                    // console.log(element.geometry)
                    const geojsonPoint = element.geometry.geometry;
                    const marker = leaflet__WEBPACK_IMPORTED_MODULE_0__.geoJSON(geojsonPoint, {
                        pointToLayer: (point, latlon) => {
                            return leaflet__WEBPACK_IMPORTED_MODULE_0__.marker(latlon, { icon: this.icon });
                            // return L.circle([latlon.lat,latlon.lng], {color:"green",radius:20}).addTo(this.map);
                        }
                    });
                    this.markersCluster.addLayer(marker);
                    if (((_a = element.geometry.properties) === null || _a === void 0 ? void 0 : _a.nfc) != undefined) {
                        marker.on('click', () => {
                            this.content = element.geometry;
                            this.zone.run(() => this.openDialog(element.geometry));
                        });
                    }
                    else {
                        marker.bindPopup('<h1> <b>Client Information</b></h1><p><b>Name:</b> ' + String(element.geometry.properties.Nom_Client) + '</p><p><b>Sector Name: </b>' + String(element.geometry.properties.Nom_du_Secteur) + '</p>');
                    }
                    marker.addTo(this.map);
                });
            });
            // console.log(await arr)
            return yield arr;
        });
    }
    getAllSecteurs() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this._serviceClient.getAllSecteurs().subscribe(res => {
                // console.log(res)
                res.forEach(element => {
                    const marker = leaflet__WEBPACK_IMPORTED_MODULE_0__.geoJSON(element.geometry, { style: { color: 'red' } });
                    marker.bindPopup(String(element.geometry.properties.codeRegion));
                    marker.addTo(this.map);
                    this.AllSecteurs.push({ coor: element.geometry.geometry.coordinates, sector: element.geometry.properties.idSecteur });
                });
            });
            // console.log(await arr)
            // return await arr;
        });
    }
    // $$$ from IndexDB $$$////
    getDataClient() {
        let db;
        let transaction;
        const request = window.indexedDB.open('off', this.version);
        request.onerror = function (event) {
            console.log('Why didn\'t you allow my web app to use IndexedDB?!');
        };
        request.onsuccess = (event) => {
            db = event.target.result;
            console.log('success');
            console.log(db);
            transaction = db.transaction(['data'], 'readwrite');
            const objectStore = transaction.objectStore('data');
            const objectStoreRequest = objectStore.getAll();
            objectStoreRequest.onsuccess = event => {
                const all = event.target.result;
                all.forEach(element => {
                    var _a;
                    console.log('---');
                    const elm = JSON.parse(element.Valeur);
                    const Point = { _id: element._id, geometry: elm };
                    console.log(Point);
                    const geojsonPoint = Point.geometry;
                    // console.log(geojsonPoint)
                    const marker = leaflet__WEBPACK_IMPORTED_MODULE_0__.geoJSON(geojsonPoint, {
                        pointToLayer: (point, latlon) => {
                            // console.log("***")
                            console.log(point);
                            return leaflet__WEBPACK_IMPORTED_MODULE_0__.marker(latlon, { icon: this.getIcon(Point.geometry.properties.status) });
                            // return L.circle([latlon.lat,latlon.lng], {color:"green",radius:20}).addTo(this.map);
                        }
                    });
                    this.markersCluster.addLayer(marker);
                    if (((_a = Point.geometry.properties) === null || _a === void 0 ? void 0 : _a.nfc) != undefined) {
                        Point.geometry.idGeo = Point._id;
                        marker.on('click', () => {
                            this.content = Point.geometry;
                            this.zone.run(() => this.openDialog(Point.geometry));
                        });
                    }
                    else {
                        marker.bindPopup('<h1> <b>Client Information</b></h1><p><b>Name:</b> ' + String(Point.geometry.properties.Nom_Client) + '</p><p><b>Sector Name: </b>' + String(Point.geometry.properties.Nom_du_Secteur) + '</p>');
                    }
                    marker.addTo(this.map);
                });
            };
        };
    }
    /// list of icons
    getIcon(statuss) {
        const green = leaflet__WEBPACK_IMPORTED_MODULE_0__.icon({ iconUrl: 'assets/green.png', iconSize: [12, 12] });
        const black = leaflet__WEBPACK_IMPORTED_MODULE_0__.icon({ iconUrl: 'assets/black.png', iconSize: [12, 12] });
        const pink = leaflet__WEBPACK_IMPORTED_MODULE_0__.icon({ iconUrl: 'assets/pink.png', iconSize: [12, 12] });
        const red_white = leaflet__WEBPACK_IMPORTED_MODULE_0__.icon({ iconUrl: 'assets/r_white.png', iconSize: [12, 12] });
        const red = leaflet__WEBPACK_IMPORTED_MODULE_0__.icon({ iconUrl: 'assets/red.png', iconSize: [12, 12] });
        const purple = leaflet__WEBPACK_IMPORTED_MODULE_0__.icon({ iconUrl: 'assets/purple.png', iconSize: [12, 12] });
        switch (statuss) {
            case 'green':
                return green;
                break;
            case 'black':
                return black;
                break;
            case 'red_white':
                return red_white;
                break;
            case 'purple':
                return purple;
                break;
            case 'pink':
                return pink;
                break;
            case 'red':
                return red;
                break;
            // code block
        }
    }
    getDataSector() {
        let db;
        let transaction;
        const request = window.indexedDB.open('off', this.version);
        request.onerror = function (event) {
            console.log('Why didn\'t you allow my web app to use IndexedDB?!');
        };
        request.onsuccess = (event) => {
            db = event.target.result;
            console.log('success');
            console.log(db);
            transaction = db.transaction(['sector'], 'readwrite');
            const objectStore = transaction.objectStore('sector');
            const objectStoreRequest = objectStore.getAll();
            objectStoreRequest.onsuccess = event => {
                const all = event.target.result;
                all.forEach(element => {
                    console.log('---');
                    const elm = JSON.parse(element.Valeur);
                    const Point = { _id: element._id, geometry: elm };
                    const marker = leaflet__WEBPACK_IMPORTED_MODULE_0__.geoJSON(Point.geometry, { style: { color: 'red' } });
                    marker.bindPopup(String(Point.geometry.properties.codeRegion));
                    marker.addTo(this.map);
                    this.markerClusterSector.addLayer(marker);
                    this.AllSecteurs.push({ coor: Point.geometry.geometry.coordinates, sector: Point.geometry.properties.idSecteur });
                });
            };
        };
    }
    PutData() {
        let db;
        let transaction;
        const request = window.indexedDB.open('off', this.version);
        request.onerror = function (event) {
            console.log('Why didn\'t you allow my web app to use IndexedDB?!');
        };
        request.onsuccess = (event) => {
            db = event.target.result;
            console.log('success Sync');
            const allclient = [];
            this._serviceClient.getAllClient().subscribe(res => {
                res.forEach(element => {
                    const geo = { _id: element._id, Valeur: JSON.stringify(element.geometry) };
                    allclient.push(geo);
                    transaction = db.transaction(['data'], 'readwrite');
                    const objectStore = transaction.objectStore('data');
                    const request = objectStore.add(geo);
                    request.onsuccess = function (event) {
                        console.log('done Adding');
                    };
                });
                ///// sycn done popup
                this.openAlertDialog();
                this.getDataClient();
                // console.log(allclient)
            });
        };
    }
    PutDataSector() {
        let db;
        let transaction;
        const request = window.indexedDB.open('off', this.version);
        request.onerror = function (event) {
            console.log('Why didn\'t you allow my web app to use IndexedDB?!');
        };
        request.onsuccess = (event) => {
            db = event.target.result;
            console.log('success Login');
            const allclient = [];
            this._serviceClient.getAllSecteurs().subscribe(res => {
                res.forEach(element => {
                    console.log('***sector***');
                    console.log(element);
                    const geo = { _id: element._id, Valeur: JSON.stringify(element.geometry) };
                    allclient.push(geo);
                    transaction = db.transaction(['sector'], 'readwrite');
                    const objectStore = transaction.objectStore('sector');
                    const request = objectStore.add(geo);
                    request.onsuccess = function (event) {
                        console.log('done Adding Sector login');
                    };
                });
                this.getDataSector();
                // console.log(allclient)
            });
        };
    }
    ////////////////// ******************************************/////////////////////////
    sync() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            /* this._router.navigate(['']).then(() => {
               window.location.reload();
           });*/
            this.markersCluster.clearLayers();
            this.index.ClearData();
            // this.index.ClearDataSector()
            this.PutData();
            // this.PutDataSector()
            console.log('whya');
            // this.index.getDataClient(this.map, this.markersCluster, this.icon)
        });
    }
    isMarkerInsidePolygon(marker, poly) {
        const polyPoints = poly.getLatLngs();
        const x = marker.getLatLng().lat, y = marker.getLatLng().lng;
        let inside = false;
        for (let i = 0, j = polyPoints.length - 1; i < polyPoints.length; j = i++) {
            const xi = polyPoints[i].lat, yi = polyPoints[i].lng;
            const xj = polyPoints[j].lat, yj = polyPoints[j].lng;
            const intersect = ((yi > y) != (yj > y))
                && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
            if (intersect) {
                inside = !inside;
            }
        }
        return inside;
    }
    Insid() {
        this.statusAddClient = false;
        this.AllSecteurs.forEach(elem => {
            // console.log(this.myMarker)
            // console.log(this.myMarker._latlng)
            const lat = this.myMarker._latlng.lat;
            const lon = this.myMarker._latlng.lng;
            const test = _turf_turf__WEBPACK_IMPORTED_MODULE_3__.point([lon, lat]);
            const poly = _turf_turf__WEBPACK_IMPORTED_MODULE_3__.polygon(elem.coor[0]);
            console.log(poly);
            // console.log(test)
            // this.isMarkerInsidePolygon(this.myMarker,elem)
            if (_turf_turf__WEBPACK_IMPORTED_MODULE_3__.booleanPointInPolygon(test, poly)) {
                this.statusAddClient = true;
                this.mySector = elem.sector;
                console.log(this.mySector);
            }
            else {
                console.log('not in ');
            }
        });
    }
    openAlertDialog() {
        const dialogRef = this.dialog.open(_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_4__.AlertDialogComponent, {
            data: {
                message: 'Synchronization is Done',
                buttonText: {
                    ok: 'Ok',
                }
            }
        });
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_clients_service__WEBPACK_IMPORTED_MODULE_5__.ClientsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_indexdb_service__WEBPACK_IMPORTED_MODULE_6__.IndexdbService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog)); };
MapComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], decls: 35, vars: 5, consts: [[1, "map-frame"], ["id", "map"], [1, "buttons-wrapper"], [1, "my-location-container"], ["mat-icon-button", "", "aria-label", "small button", 3, "click"], ["mat-button", "", 1, "btn-primary", 3, "disabled", "routerLink"], ["mat-button", "", 1, "btn-warning", 3, "click"], [1, "map-top-elements"], [1, "element-container"], [1, "search-input"], ["type", "text", "name", "search", "autocomplete", "off", 3, "ngModel", "ngModelChange"], [3, "click"], [1, "select-input"], ["panelClass", "selectPanel", "placeholder", "PDV Type"], ["value", ""], ["panelClass", "selectPanel", "placeholder", "Done"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MapComponent_Template_button_click_4_listener() { return ctx.locate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "my_location");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Add PDV");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MapComponent_Template_button_click_9_listener() { return ctx.sync(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Synchronize");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function MapComponent_Template_input_ngModelChange_16_listener($event) { return ctx.IDGeomerty = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MapComponent_Template_button_click_17_listener() { return ctx.Search(ctx.IDGeomerty); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Audit");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Audit Retail");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "Other stuff");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "mat-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "Not Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx.statusAddClient)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c0, ctx.mySector));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.IDGeomerty);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption], styles: ["#map[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\r\n  \r\n\r\n.map-frame[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  \r\n  height: 100%;\r\n}\r\n  \r\n\r\n.buttons-wrapper[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: flex-end;\r\n  margin-right: 20px;\r\n  right: 0;\r\n  flex-flow: column wrap;\r\n  position: absolute;\r\n  bottom: 20px;\r\n  z-index: 9999;\r\n}\r\n  \r\n\r\n\r\n  \r\n\r\n@media (min-width: 200px) and (max-width: 350px) {\r\n\r\n  .map-top-elements[_ngcontent-%COMP%]{\r\n\r\n    display: flex;\r\n    margin-left: 10px;\r\n    justify-content: flex-start;\r\n    align-items: flex-start;\r\n    left: 0;\r\n    grid-gap: 8px;\r\n    gap: 8px;\r\n    flex-flow: column wrap;\r\n    position: absolute;\r\n    top: 4px;\r\n    z-index: 9999;\r\n  }\r\n\r\n  .element-container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    align-content: flex-start;\r\n  }\r\n\r\n  .search-input[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    padding-left: 10px;\r\n    margin-left: 0px;\r\n    border: none;\r\n    width: 160px;\r\n    height: 20px;\r\n    background-color: #fff;\r\n    border-radius: 20px;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n  }\r\n  .search-input[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{\r\n    color: #27AE61;\r\n    font-size: 20px;\r\n    height: 20px;\r\n  }\r\n  .search-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 120px;\r\n    border: none;\r\n    outline: none;\r\n    color: #3b3a3a;\r\n    font-size: 10px;\r\n  }\r\n  .search-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{\r\n    outline: none;\r\n    color: #3b3a3a;\r\n    font-size: 10px;\r\n  }\r\n  .element-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    margin: 8px;\r\n    height: 20px;\r\n    width: 60px;\r\n    background-color: #27AE61;\r\n    color: #fff;\r\n    font-size: 10px;\r\n    border-radius: 40px;\r\n    text-align: center !important;\r\n    outline: none;\r\n    border: none;\r\n    cursor: pointer;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n  }\r\n  .select-input[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    align-content: center;\r\n    padding-right: 10px;\r\n    margin-left: 0px;\r\n    border: none;\r\n    width: 140px;\r\n    height: 20px;\r\n    background-color: #fff;\r\n    border-radius: 20px;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n  }\r\n  \r\n    .mat-select-arrow {\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 3px solid transparent;\r\n    border-right: 3px solid transparent;\r\n    border-top: 3px solid;\r\n    margin: 0 4px;\r\n    color: #27AE61;\r\n  }\r\n  \r\n    .mat-select{\r\n    margin-left: 10px;\r\n    width: 100px;\r\n    color: #3b3a3a;\r\n    font-size: 10px;\r\n  }\r\n  \r\n  .select-input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{\r\n    outline: none;\r\n    margin: 8px;\r\n    color: #3b3a3a;\r\n    font-size: 10px;\r\n  }\r\n  \r\n  .my-location-container[_ngcontent-%COMP%]{\r\n    width: 40px;\r\n    background-color: #fff;\r\n    border-radius: 10px;\r\n    margin-bottom: 10px;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n  }\r\n  .my-location-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n  }\r\n  .btn-primary[_ngcontent-%COMP%]{\r\n    margin-top: 8px;\r\n    background-color: #27AE61;\r\n    color: #fff;\r\n    font-size: 10px;\r\n    line-height: 20px;\r\n    width: 90px !important;\r\n    border-radius: 40px;\r\n    text-align: center !important;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n  }\r\n  .btn-warning[_ngcontent-%COMP%]{\r\n    margin-top: 8px;\r\n    background-color: #FACF37;\r\n    color: #fff;\r\n    font-size: 10px;\r\n    line-height: 20px;\r\n    width: 90px !important;\r\n    border-radius: 40px;\r\n    text-align: center !important;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n  }\r\n}\r\n  \r\n\r\n@media (min-width: 350px) and (max-width: 599px){\r\n  .map-top-elements[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    margin-left: 10px;\r\n    justify-content: flex-start;\r\n    align-items: flex-start;\r\n    grid-row-gap: 8px;\r\n    row-gap: 8px;\r\n    left: 0;\r\n    flex-flow: column wrap;\r\n    position: absolute;\r\n    top: 10px;\r\n    z-index: 9999;\r\n  }\r\n\r\n  .element-container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    align-content: flex-start;\r\n  }\r\n\r\n  .element-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    margin: 8px;\r\n    height: 30px;\r\n    width: 80px;\r\n    background-color: #27AE61;\r\n    color: #fff;\r\n    font-size: 12px;\r\n    border-radius: 40px;\r\n    text-align: center !important;\r\n    outline: none;\r\n    border: none;\r\n    cursor: pointer;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n  }\r\n  .select-input[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    align-content: center;\r\n    padding-right: 10px;\r\n    margin-left: 0px;\r\n    border: none;\r\n    width: 200px;\r\n    height: 30px;\r\n    background-color: #fff;\r\n    border-radius: 20px;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n  }\r\n  .select-input[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{\r\n    color: #27AE61;\r\n  }\r\n  \r\n    .mat-select-arrow {\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 5px solid transparent;\r\n    border-right: 5px solid transparent;\r\n    border-top: 5px solid;\r\n    margin: 0 4px;\r\n    color: #27AE61;\r\n  }\r\n  \r\n    .mat-select{\r\n    margin-left: 20px;\r\n    width: 100px;\r\n    color: #3b3a3a;\r\n    font-size: 12px;\r\n  }\r\n  \r\n  .select-input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{\r\n    outline: none;\r\n    margin: 8px;\r\n    color: #3b3a3a;\r\n    font-size: 12px;\r\n  }\r\n  .search-input[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    padding-left: 10px;\r\n    margin-left: 0px;\r\n    border: none;\r\n    width: 200px;\r\n    height: 30px;\r\n    background-color: #fff;\r\n    border-radius: 20px;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n  }\r\n  .search-input[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{\r\n    color: #27AE61;\r\n  }\r\n  .search-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 160px;\r\n    border: none;\r\n    outline: none;\r\n    color: #3b3a3a;\r\n    font-size: 12px;\r\n  }\r\n  .search-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{\r\n    outline: none;\r\n    color: #3b3a3a;\r\n    font-size: 12px;\r\n  }\r\n  .my-location-container[_ngcontent-%COMP%]{\r\n    width: 40px;\r\n    background-color: #fff;\r\n    border-radius: 10px;\r\n    margin-bottom: 10px;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n  }\r\n  .btn-primary[_ngcontent-%COMP%]{\r\n    margin-top: 8px;\r\n    background-color: #27AE61;\r\n    color: #fff;\r\n    font-size: 10px;\r\n    width: 100px !important;\r\n    border-radius: 40px;\r\n    text-align: center !important;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n  }\r\n  .btn-warning[_ngcontent-%COMP%]{\r\n    margin-top: 8px;\r\n    background-color: #FACF37;\r\n    color: #fff;\r\n    font-size: 10px;\r\n    width: 100px !important;\r\n    border-radius: 40px;\r\n    text-align: center !important;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n  }\r\n}\r\n  \r\n\r\n\r\n  \r\n\r\n@media (min-width: 600px) and (max-width: 900px){\r\n  .map-top-elements[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    margin-left: 10px;\r\n    justify-content: flex-start;\r\n    align-items: flex-start;\r\n    grid-row-gap: 8px;\r\n    row-gap: 8px;\r\n    left: 0;\r\n    flex-flow: column wrap;\r\n    position: absolute;\r\n    top: 10px;\r\n    z-index: 9999;\r\n  }\r\n\r\n  .element-container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    align-content: flex-start;\r\n  }\r\n\r\n  .element-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    margin: 8px;\r\n    height: 30px;\r\n    width: 80px;\r\n    background-color: #27AE61;\r\n    color: #fff;\r\n    font-size: 12px;\r\n    border-radius: 40px;\r\n    text-align: center !important;\r\n    outline: none;\r\n    border: none;\r\n    cursor: pointer;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n  }\r\n  .select-input[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    align-content: center;\r\n    padding-right: 10px;\r\n    margin-left: 0px;\r\n    border: none;\r\n    width: 200px;\r\n    height: 30px;\r\n    background-color: #fff;\r\n    border-radius: 20px;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n  }\r\n  .select-input[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{\r\n    color: #27AE61;\r\n  }\r\n  \r\n    .mat-select-arrow {\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 5px solid transparent;\r\n    border-right: 5px solid transparent;\r\n    border-top: 5px solid;\r\n    margin: 0 4px;\r\n    color: #27AE61;\r\n  }\r\n  \r\n    .mat-select{\r\n    margin-left: 20px;\r\n    width: 100px;\r\n    color: #3b3a3a;\r\n    font-size: 12px;\r\n  }\r\n  \r\n  .select-input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{\r\n    outline: none;\r\n    margin: 8px;\r\n    color: #3b3a3a;\r\n    font-size: 12px;\r\n  }\r\n  .search-input[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    padding-left: 10px;\r\n    margin-left: 0px;\r\n    border: none;\r\n    width: 200px;\r\n    height: 30px;\r\n    background-color: #fff;\r\n    border-radius: 20px;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n  }\r\n  .search-input[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{\r\n    color: #27AE61;\r\n  }\r\n  .search-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 160px;\r\n    border: none;\r\n    outline: none;\r\n    color: #3b3a3a;\r\n    font-size: 12px;\r\n  }\r\n  .search-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{\r\n    outline: none;\r\n    color: #3b3a3a;\r\n    font-size: 12px;\r\n  }\r\n  .my-location-container[_ngcontent-%COMP%]{\r\n    width: 40px;\r\n    background-color: #fff;\r\n    border-radius: 10px;\r\n    margin-bottom: 10px;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n  }\r\n  .btn-primary[_ngcontent-%COMP%]{\r\n    margin-top: 8px;\r\n    background-color: #27AE61;\r\n    color: #fff;\r\n    font-size: 10px;\r\n    width: 100px !important;\r\n    border-radius: 40px;\r\n    text-align: center !important;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n  }\r\n  .btn-warning[_ngcontent-%COMP%]{\r\n    margin-top: 8px;\r\n    background-color: #FACF37;\r\n    color: #fff;\r\n    font-size: 10px;\r\n    width: 100px !important;\r\n    border-radius: 40px;\r\n    text-align: center !important;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n  }\r\n}\r\n  \r\n\r\n\r\n  \r\n\r\n@media (min-width: 900px) and (max-width: 1200px){\r\n\r\n  .map-top-elements[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    margin-left: 10px;\r\n    justify-content: flex-start;\r\n    align-items: flex-start;\r\n    grid-gap: 10px;\r\n    gap: 10px;\r\n    left: 0;\r\n    flex-flow: row wrap;\r\n    position: absolute;\r\n    top: 10px;\r\n    z-index: 9999;\r\n  }\r\n\r\n  .element-container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-end;\r\n    align-content: flex-start;\r\n  }\r\n\r\n  .element-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    margin-top: 8px;\r\n    height: 20px;\r\n    width: 80px;\r\n    background-color: #27AE61;\r\n    color: #fff;\r\n    font-size: 12px;\r\n    border-radius: 40px;\r\n    text-align: center !important;\r\n    outline: none;\r\n    border: none;\r\n    cursor: pointer;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n  }\r\n  .select-input[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    align-content: center;\r\n    padding-right: 10px;\r\n    margin-left: 0px;\r\n    border: none;\r\n    width: 200px;\r\n    height: 30px;\r\n    background-color: #fff;\r\n    border-radius: 20px;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n  }\r\n  .select-input[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{\r\n    color: #27AE61;\r\n  }\r\n  \r\n    .mat-select-arrow {\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 5px solid transparent;\r\n    border-right: 5px solid transparent;\r\n    border-top: 5px solid;\r\n    margin: 0 4px;\r\n    color: #27AE61;\r\n  }\r\n  \r\n    .mat-select{\r\n    margin-left: 20px;\r\n    width: 100px;\r\n    color: #3b3a3a;\r\n    font-size: 12px;\r\n  }\r\n  \r\n  .select-input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{\r\n    outline: none;\r\n    margin: 8px;\r\n    color: #3b3a3a;\r\n    font-size: 12px;\r\n  }\r\n  .search-input[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    padding-left: 10px;\r\n    margin-left: 0px;\r\n    border: none;\r\n    width: 200px;\r\n    height: 30px;\r\n    background-color: #fff;\r\n    border-radius: 20px;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n  }\r\n  .search-input[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{\r\n    color: #27AE61;\r\n  }\r\n  .search-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 160px;\r\n    border: none;\r\n    outline: none;\r\n    color: #3b3a3a;\r\n    font-size: 12px;\r\n  }\r\n  .search-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{\r\n    outline: none;\r\n    color: #3b3a3a;\r\n    font-size: 12px;\r\n  }\r\n  .my-location-container[_ngcontent-%COMP%]{\r\n    width: 40px;\r\n    background-color: #fff;\r\n    border-radius: 10px;\r\n    margin-bottom: 10px;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n  }\r\n  .btn-primary[_ngcontent-%COMP%]{\r\n    margin-top: 8px;\r\n    background-color: #27AE61;\r\n    color: #fff;\r\n    font-size: 10px;\r\n    width: 100px !important;\r\n    border-radius: 40px;\r\n    text-align: center !important;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n  }\r\n  .btn-warning[_ngcontent-%COMP%]{\r\n    margin-top: 8px;\r\n    background-color: #FACF37;\r\n    color: #fff;\r\n    font-size: 10px;\r\n    width: 100px !important;\r\n    border-radius: 40px;\r\n    text-align: center !important;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n  }\r\n}\r\n  \r\n\r\n\r\n  \r\n\r\n@media (min-width: 1200px){\r\n\r\n  .map-top-elements[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    margin-left: 10px;\r\n    justify-content: flex-start;\r\n    align-items: flex-start;\r\n    grid-gap: 10px;\r\n    gap: 10px;\r\n    left: 0;\r\n    flex-flow: row wrap;\r\n    position: absolute;\r\n    top: 15px;\r\n    z-index: 9999;\r\n  }\r\n\r\n  .element-container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-end;\r\n    align-content: flex-start;\r\n  }\r\n\r\n  .element-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    margin-top: 8px;\r\n    height: 20px;\r\n    width: 80px;\r\n    background-color: #27AE61;\r\n    color: #fff;\r\n    font-size: 12px;\r\n    border-radius: 40px;\r\n    text-align: center !important;\r\n    outline: none;\r\n    border: none;\r\n    cursor: pointer;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n  }\r\n  .select-input[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    align-content: center;\r\n    padding-right: 10px;\r\n    margin-left: 0px;\r\n    border: none;\r\n    width: 200px;\r\n    height: 30px;\r\n    background-color: #fff;\r\n    border-radius: 20px;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n  }\r\n  .select-input[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{\r\n    color: #27AE61;\r\n  }\r\n  \r\n    .mat-select-arrow {\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 5px solid transparent;\r\n    border-right: 5px solid transparent;\r\n    border-top: 5px solid;\r\n    margin: 0 4px;\r\n    color: #27AE61;\r\n  }\r\n  \r\n    .mat-select{\r\n    margin-left: 20px;\r\n    width: 100px;\r\n    color: #3b3a3a;\r\n    font-size: 12px;\r\n  }\r\n  \r\n  .select-input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{\r\n    outline: none;\r\n    margin: 8px;\r\n    color: #3b3a3a;\r\n    font-size: 12px;\r\n  }\r\n  .search-input[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    padding-left: 10px;\r\n    margin-left: 0px;\r\n    border: none;\r\n    width: 200px;\r\n    height: 30px;\r\n    background-color: #fff;\r\n    border-radius: 20px;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n  }\r\n  .search-input[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{\r\n    color: #27AE61;\r\n  }\r\n  .search-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 160px;\r\n    border: none;\r\n    outline: none;\r\n    color: #3b3a3a;\r\n    font-size: 12px;\r\n  }\r\n  .search-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{\r\n    outline: none;\r\n    color: #3b3a3a;\r\n    font-size: 12px;\r\n  }\r\n  .my-location-container[_ngcontent-%COMP%]{\r\n    width: 40px;\r\n    background-color: #fff;\r\n    border-radius: 10px;\r\n    margin-bottom: 10px;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n  }\r\n  .btn-primary[_ngcontent-%COMP%]{\r\n    margin-top: 8px;\r\n    background-color: #27AE61;\r\n    color: #fff;\r\n    font-size: 12px;\r\n    width: 130px !important;\r\n    border-radius: 40px;\r\n    text-align: center !important;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n  }\r\n  .btn-warning[_ngcontent-%COMP%]{\r\n    margin-top: 8px;\r\n    background-color: #FACF37;\r\n    color: #fff;\r\n    font-size: 12px;\r\n    width: 130px !important;\r\n    border-radius: 40px;\r\n    text-align: center !important;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,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QUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixxRkFBcUY7RUFDdkY7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsY0FBYztJQUNkLGVBQWU7RUFDakI7RUFDQTtJQUNFLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixxRkFBcUY7RUFDdkY7RUFDQTtJQUNFLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixxRkFBcUY7RUFDdkY7RUFDQTtJQUNFLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixxRkFBcUY7RUFDdkY7QUFDRiIsImZpbGUiOiJtYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5tYXAtY29udGFpbmVyIHtcclxuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0MHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIG1hcmdpbjogMHB4OyBcclxufSAqL1xyXG4gIFxyXG5cclxuI21hcCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubWFwLWZyYW1lIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5idXR0b25zLXdyYXBwZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMjBweDtcclxuICB6LWluZGV4OiA5OTk5O1xyXG59XHJcblxyXG5cclxuLyogUGhvbmUgT25seSAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAzNTBweCkge1xyXG5cclxuICAubWFwLXRvcC1lbGVtZW50c3tcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBnYXA6IDhweDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDRweDtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgfVxyXG5cclxuICAuZWxlbWVudC1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1pbnB1dHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDZweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggNHB4IC0xcHg7XHJcbiAgfVxyXG4gIC5zZWFyY2gtaW5wdXQgbWF0LWljb257XHJcbiAgICBjb2xvcjogIzI3QUU2MTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICB9XHJcbiAgLnNlYXJjaC1pbnB1dCBpbnB1dHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogIzNiM2EzYTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbiAgLnNlYXJjaC1pbnB1dCBpbnB1dDpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogIzNiM2EzYTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbiAgLmVsZW1lbnQtY29udGFpbmVyIGJ1dHRvbntcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdBRTYxO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCA0cHggLTFweDtcclxuICB9XHJcbiAgLnNlbGVjdC1pbnB1dHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCA0cHggLTFweDtcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5tYXQtc2VsZWN0LWFycm93IHtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkO1xyXG4gICAgbWFyZ2luOiAwIDRweDtcclxuICAgIGNvbG9yOiAjMjdBRTYxO1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLm1hdC1zZWxlY3R7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGNvbG9yOiAjM2IzYTNhO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuc2VsZWN0LWlucHV0IHNlbGVjdCBvcHRpb257XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbiAgICBjb2xvcjogIzNiM2EzYTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm15LWxvY2F0aW9uLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCA0cHggLTFweDtcclxuICB9XHJcbiAgLm15LWxvY2F0aW9uLWNvbnRhaW5lciBidXR0b257XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIC5idG4tcHJpbWFyeXtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyN0FFNjE7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDkwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDZweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggNHB4IC0xcHg7XHJcbiAgfVxyXG4gIC5idG4td2FybmluZ3tcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUNGMzc7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDkwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDZweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggNHB4IC0xcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAzNTBweCkgYW5kIChtYXgtd2lkdGg6IDU5OXB4KXtcclxuICAubWFwLXRvcC1lbGVtZW50c3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgcm93LWdhcDogOHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG4gIH1cclxuXHJcbiAgLmVsZW1lbnQtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcblxyXG4gIC5lbGVtZW50LWNvbnRhaW5lciBidXR0b257XHJcbiAgICBtYXJnaW46IDhweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3QUU2MTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDZweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggNHB4IC0xcHg7XHJcbiAgfVxyXG4gIC5zZWxlY3QtaW5wdXR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDZweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggNHB4IC0xcHg7XHJcbiAgfVxyXG4gIC5zZWxlY3QtaW5wdXQgbWF0LWljb257XHJcbiAgICBjb2xvcjogIzI3QUU2MTtcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5tYXQtc2VsZWN0LWFycm93IHtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkO1xyXG4gICAgbWFyZ2luOiAwIDRweDtcclxuICAgIGNvbG9yOiAjMjdBRTYxO1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLm1hdC1zZWxlY3R7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGNvbG9yOiAjM2IzYTNhO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICBcclxuICAuc2VsZWN0LWlucHV0IHNlbGVjdCBvcHRpb257XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbiAgICBjb2xvcjogIzNiM2EzYTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLnNlYXJjaC1pbnB1dHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDZweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggNHB4IC0xcHg7XHJcbiAgfVxyXG4gIC5zZWFyY2gtaW5wdXQgbWF0LWljb257XHJcbiAgICBjb2xvcjogIzI3QUU2MTtcclxuICB9XHJcbiAgLnNlYXJjaC1pbnB1dCBpbnB1dHtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogIzNiM2EzYTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLnNlYXJjaC1pbnB1dCBpbnB1dDpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogIzNiM2EzYTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLm15LWxvY2F0aW9uLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCA0cHggLTFweDtcclxuICB9XHJcbiAgLmJ0bi1wcmltYXJ5e1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3QUU2MTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMnB4IDRweCAtMXB4O1xyXG4gIH1cclxuICAuYnRuLXdhcm5pbmd7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFDRjM3O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDZweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggNHB4IC0xcHg7XHJcbiAgfVxyXG59XHJcbi8qIGZvciB0YWJsZXQgcG9ydGFpdCAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5MDBweCl7XHJcbiAgLm1hcC10b3AtZWxlbWVudHN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIHJvdy1nYXA6IDhweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICB9XHJcblxyXG4gIC5lbGVtZW50LWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG5cclxuICAuZWxlbWVudC1jb250YWluZXIgYnV0dG9ue1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyN0FFNjE7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMnB4IDRweCAtMXB4O1xyXG4gIH1cclxuICAuc2VsZWN0LWlucHV0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMnB4IDRweCAtMXB4O1xyXG4gIH1cclxuICAuc2VsZWN0LWlucHV0IG1hdC1pY29ue1xyXG4gICAgY29sb3I6ICMyN0FFNjE7XHJcbiAgfVxyXG4gIFxyXG4gIDo6bmctZGVlcCAubWF0LXNlbGVjdC1hcnJvdyB7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZDtcclxuICAgIG1hcmdpbjogMCA0cHg7XHJcbiAgICBjb2xvcjogIzI3QUU2MTtcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5tYXQtc2VsZWN0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBjb2xvcjogIzNiM2EzYTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgLnNlbGVjdC1pbnB1dCBzZWxlY3Qgb3B0aW9ue1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gICAgY29sb3I6ICMzYjNhM2E7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIC5zZWFyY2gtaW5wdXR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMnB4IDRweCAtMXB4O1xyXG4gIH1cclxuICAuc2VhcmNoLWlucHV0IG1hdC1pY29ue1xyXG4gICAgY29sb3I6ICMyN0FFNjE7XHJcbiAgfVxyXG4gIC5zZWFyY2gtaW5wdXQgaW5wdXR7XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY29sb3I6ICMzYjNhM2E7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIC5zZWFyY2gtaW5wdXQgaW5wdXQ6Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY29sb3I6ICMzYjNhM2E7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIC5teS1sb2NhdGlvbi1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDZweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggNHB4IC0xcHg7XHJcbiAgfVxyXG4gIC5idG4tcHJpbWFyeXtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyN0FFNjE7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCA0cHggLTFweDtcclxuICB9XHJcbiAgLmJ0bi13YXJuaW5ne1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBQ0YzNztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMnB4IDRweCAtMXB4O1xyXG4gIH1cclxufVxyXG4vKiBmb3IgdGFibGV0IGxhbmRzY2FwZSovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCl7XHJcblxyXG4gIC5tYXAtdG9wLWVsZW1lbnRze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgfVxyXG5cclxuICAuZWxlbWVudC1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG5cclxuICAuZWxlbWVudC1jb250YWluZXIgYnV0dG9ue1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdBRTYxO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCA0cHggLTFweDtcclxuICB9XHJcbiAgLnNlbGVjdC1pbnB1dHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCA0cHggLTFweDtcclxuICB9XHJcbiAgLnNlbGVjdC1pbnB1dCBtYXQtaWNvbntcclxuICAgIGNvbG9yOiAjMjdBRTYxO1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLm1hdC1zZWxlY3QtYXJyb3cge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQ7XHJcbiAgICBtYXJnaW46IDAgNHB4O1xyXG4gICAgY29sb3I6ICMyN0FFNjE7XHJcbiAgfVxyXG4gIFxyXG4gIDo6bmctZGVlcCAubWF0LXNlbGVjdHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgY29sb3I6ICMzYjNhM2E7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWxlY3QtaW5wdXQgc2VsZWN0IG9wdGlvbntcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDhweDtcclxuICAgIGNvbG9yOiAjM2IzYTNhO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAuc2VhcmNoLWlucHV0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCA0cHggLTFweDtcclxuICB9XHJcbiAgLnNlYXJjaC1pbnB1dCBtYXQtaWNvbntcclxuICAgIGNvbG9yOiAjMjdBRTYxO1xyXG4gIH1cclxuICAuc2VhcmNoLWlucHV0IGlucHV0e1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiAjM2IzYTNhO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAuc2VhcmNoLWlucHV0IGlucHV0OmZvY3Vze1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiAjM2IzYTNhO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAubXktbG9jYXRpb24tY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMnB4IDRweCAtMXB4O1xyXG4gIH1cclxuICAuYnRuLXByaW1hcnl7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdBRTYxO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDZweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggNHB4IC0xcHg7XHJcbiAgfVxyXG4gIC5idG4td2FybmluZ3tcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUNGMzc7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCA0cHggLTFweDtcclxuICB9XHJcbn1cclxuXHJcbi8qIGZvciBkZXNrdG9wKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCl7XHJcblxyXG4gIC5tYXAtdG9wLWVsZW1lbnRze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTVweDtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgfVxyXG5cclxuICAuZWxlbWVudC1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG5cclxuICAuZWxlbWVudC1jb250YWluZXIgYnV0dG9ue1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdBRTYxO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCA0cHggLTFweDtcclxuICB9XHJcbiAgLnNlbGVjdC1pbnB1dHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCA0cHggLTFweDtcclxuICB9XHJcbiAgLnNlbGVjdC1pbnB1dCBtYXQtaWNvbntcclxuICAgIGNvbG9yOiAjMjdBRTYxO1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLm1hdC1zZWxlY3QtYXJyb3cge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQ7XHJcbiAgICBtYXJnaW46IDAgNHB4O1xyXG4gICAgY29sb3I6ICMyN0FFNjE7XHJcbiAgfVxyXG4gIFxyXG4gIDo6bmctZGVlcCAubWF0LXNlbGVjdHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgY29sb3I6ICMzYjNhM2E7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWxlY3QtaW5wdXQgc2VsZWN0IG9wdGlvbntcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDhweDtcclxuICAgIGNvbG9yOiAjM2IzYTNhO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAuc2VhcmNoLWlucHV0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCA0cHggLTFweDtcclxuICB9XHJcbiAgLnNlYXJjaC1pbnB1dCBtYXQtaWNvbntcclxuICAgIGNvbG9yOiAjMjdBRTYxO1xyXG4gIH1cclxuICAuc2VhcmNoLWlucHV0IGlucHV0e1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiAjM2IzYTNhO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAuc2VhcmNoLWlucHV0IGlucHV0OmZvY3Vze1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiAjM2IzYTNhO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAubXktbG9jYXRpb24tY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMnB4IDRweCAtMXB4O1xyXG4gIH1cclxuICAuYnRuLXByaW1hcnl7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdBRTYxO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB3aWR0aDogMTMwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDZweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggNHB4IC0xcHg7XHJcbiAgfVxyXG4gIC5idG4td2FybmluZ3tcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUNGMzc7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHdpZHRoOiAxMzBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCA0cHggLTFweDtcclxuICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 48611:
/*!**********************************************!*\
  !*** ./src/app/offline/offline.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfflineComponent": () => (/* binding */ OfflineComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../alert-dialog/alert-dialog.component */ 39060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _online_offline_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../online-offline-service.service */ 21244);
/* harmony import */ var _clients_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clients.service */ 23640);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 47752);







function OfflineComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OfflineComponent_div_2_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.send(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const uuid_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](uuid_r1);
} }
class OfflineComponent {
    constructor(onlineOfflineService, clientService, dialog) {
        this.onlineOfflineService = onlineOfflineService;
        this.clientService = clientService;
        this.dialog = dialog;
        this.id = [];
        this.getid();
    }
    getid() {
        this.id = this.clientService.getShow();
        console.log(this.id);
    }
    send() {
        if (this.onlineOfflineService.isOnline) {
            this.clientService.sendItemsFromIndexedDb();
            var message = "data sent successfuly";
            var btn = "Continue";
            this.openAlertDialog(message, btn);
        }
        else {
            var message = "You are still offline !";
            var btn = "Continue";
            this.openAlertDialog(message, btn);
        }
    }
    openAlertDialog(msg, btn) {
        const dialogRef = this.dialog.open(_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_0__.AlertDialogComponent, {
            data: {
                message: msg,
                buttonText: {
                    ok: btn,
                }
            }
        });
    }
    sendItemsFromIndexedDb() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log("sending items");
            // const allItems: any[] = await this.db["client"].toArray();
            var db;
            var transaction;
            var upgradeDb;
            var request = window.indexedDB.open("MyTestDatabase", 10);
            // upgradeDb.createObjectStore('client');
            request.onerror = function (event) {
                console.log("Why didn't you allow my web app to use IndexedDB?!");
            };
            request.onsuccess = (event) => {
                db = event.target.result;
                console.log("success");
                console.log(db);
                transaction = db.transaction(['client'], 'readwrite');
                var objectStore = transaction.objectStore("client");
                var objectStoreRequest = objectStore.getAll();
                objectStoreRequest.onsuccess = event => {
                    var all = event.target.result;
                    // console.log("------------------------")
                    console.log(all);
                    // console.log("------------------------")
                    all.forEach(element => {
                        // console.log("---")
                        console.log(element);
                        this.clientService.SendClient(element).subscribe(res => {
                            console.log(res);
                        });
                        console.log("data sent succusfuly");
                    });
                };
                db.client.clear();
                // objectStoreRequest.onerror=event=>{
                //   console.log(event)
                // }
            };
        });
    }
    ngOnInit() {
    }
}
OfflineComponent.ɵfac = function OfflineComponent_Factory(t) { return new (t || OfflineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_online_offline_service_service__WEBPACK_IMPORTED_MODULE_1__.OnlineOfflineServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_clients_service__WEBPACK_IMPORTED_MODULE_2__.ClientsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog)); };
OfflineComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: OfflineComponent, selectors: [["app-offline"]], decls: 3, vars: 1, consts: [[1, "containe-ids"], [1, "sync"], [4, "ngFor", "ngForFor"], ["mat-button", "", 1, "btn-green", 3, "click"]], template: function OfflineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, OfflineComponent_div_2_Template, 5, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForFor", ctx.id);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton], styles: [".containe-ids[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    padding: 20px;\r\n    margin: 20px;\r\n    flex-flow: column wrap ;\r\n    background-color: #fff;\r\n    justify-content: flex-start ;\r\n    align-items: center;\r\n    grid-gap: 10px 20px;\r\n    gap: 10px 20px; \r\n    border-radius: 20px;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\r\n}\r\n\r\n.btn-green[_ngcontent-%COMP%]{\r\n    background-color: #27AE61;\r\n    border-radius: 12px;\r\n    border: 1px solid rgba(27, 31, 35, .15);\r\n    box-sizing: border-box;\r\n    box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\r\n    color: #fff;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    position: relative;\r\n    text-align: center;\r\n    width:100px;\r\n    height: 30px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9mZmxpbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsbUJBQWM7SUFBZCxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLG1GQUFtRjtBQUN2Rjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsdUNBQXVDO0lBQ3ZDLHNCQUFzQjtJQUN0Qix3Q0FBd0M7SUFDeEMsV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtFQUNkIiwiZmlsZSI6Im9mZmxpbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29udGFpbmUtaWRze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwIDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTBweCAyMHB4OyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDFweCAzcHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAxcHggMnB4IDBweDtcclxufVxyXG5cclxuLmJ0bi1ncmVlbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyN0FFNjE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAuMTUpO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMjcsIDMxLCAzNSwgLjEpIDAgMXB4IDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6MTAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 21244:
/*!***************************************************!*\
  !*** ./src/app/online-offline-service.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnlineOfflineServiceService": () => (/* binding */ OnlineOfflineServiceService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 20784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


class OnlineOfflineServiceService {
    constructor() {
        this.internalConnectionChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        window.addEventListener('online', () => this.updateOnlineStatus());
        window.addEventListener('offline', () => this.updateOnlineStatus());
    }
    get connectionChanged() {
        return this.internalConnectionChanged.asObservable();
    }
    get isOnline() {
        return !!window.navigator.onLine;
    }
    updateOnlineStatus() {
        console.log(window.navigator.onLine);
        this.internalConnectionChanged.next(window.navigator.onLine);
    }
}
OnlineOfflineServiceService.ɵfac = function OnlineOfflineServiceService_Factory(t) { return new (t || OnlineOfflineServiceService)(); };
OnlineOfflineServiceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OnlineOfflineServiceService, factory: OnlineOfflineServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 33423:
/*!************************************************!*\
  !*** ./src/app/planning/planning.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanningComponent": () => (/* binding */ PlanningComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);

class PlanningComponent {
    constructor() { }
    ngOnInit() {
    }
}
PlanningComponent.ɵfac = function PlanningComponent_Factory(t) { return new (t || PlanningComponent)(); };
PlanningComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlanningComponent, selectors: [["app-planning"]], decls: 2, vars: 0, template: function PlanningComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "planning works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFubmluZy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 2942:
/*!********************************************!*\
  !*** ./src/app/routes/routes.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutesComponent": () => (/* binding */ RoutesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);

class RoutesComponent {
    constructor() { }
    ngOnInit() {
    }
}
RoutesComponent.ɵfac = function RoutesComponent_Factory(t) { return new (t || RoutesComponent)(); };
RoutesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoutesComponent, selectors: [["app-routes"]], decls: 2, vars: 0, template: function RoutesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "routes works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb3V0ZXMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 77654:
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.service */ 82588);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 18346);




class SettingsComponent {
    constructor(_setting, _router) {
        this._setting = _setting;
        this._router = _router;
        this.time = 2;
    }
    ngOnInit() {
        this.getSMS();
    }
    send() {
        this._setting.setTimeSMS(this.time).subscribe(res => {
            console.log(res);
            this.Message = res;
            this._router.navigate(['']);
        });
    }
    getSMS() {
        this._setting.getTimeSMS().subscribe(res => {
            if (res != null) {
                this.time = res.details.time;
            }
        });
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_settings_service__WEBPACK_IMPORTED_MODULE_0__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
SettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 6, vars: 2, consts: [["name", "time", "type", "number", "min", "1", "max", "10", 3, "ngModel", "ngModelChange"], [3, "click"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\ntime of validity of SMS : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_2_listener($event) { return ctx.time = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_3_listener() { return ctx.send(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "set time");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.time);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n", ctx.Message, "\n");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 82588:
/*!**********************************************!*\
  !*** ./src/app/settings/settings.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsService": () => (/* binding */ SettingsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);


class SettingsService {
    constructor(http) {
        this.http = http;
        this.uri = "localhost:3000";
        this._setting = "http://" + this.uri + "/api1/settings";
    }
    setTimeSMS(time) {
        return this.http.post(this._setting, { 'time': time });
    }
    getTimeSMS() {
        return this.http.get(this._setting);
    }
}
SettingsService.ɵfac = function SettingsService_Factory(t) { return new (t || SettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
SettingsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SettingsService, factory: SettingsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 83955:
/*!********************************************************!*\
  !*** ./src/app/sidebar-menu/sidebar-menu.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarMenuComponent": () => (/* binding */ SidebarMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../authentication.service */ 90806);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ 51986);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ 4021);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 47727);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ 69872);










function SidebarMenuComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SidebarMenuComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SidebarMenuComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Clients");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SidebarMenuComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Routes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SidebarMenuComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Planning");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SidebarMenuComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Synchronisation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SidebarMenuComponent_mat_list_item_34_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SidebarMenuComponent_mat_list_item_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SidebarMenuComponent_mat_list_item_34_div_4_Template, 3, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.sidenavWidth > 6);
} }
class SidebarMenuComponent {
    constructor(_authService) {
        this._authService = _authService;
        this.sidenavWidth = 15;
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem("user"));
        console.log(this.user);
        this.myname = this.user.name;
    }
    getLogged() {
        return this._authService.loggedIn();
    }
}
SidebarMenuComponent.ɵfac = function SidebarMenuComponent_Factory(t) { return new (t || SidebarMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService)); };
SidebarMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidebarMenuComponent, selectors: [["app-sidebar-menu"]], decls: 57, vars: 10, consts: [["fullscreen", ""], ["mode", "side", "opened", "false", 1, "example-sidenav", 3, "click"], ["sidenav", ""], ["routerLink", "map"], ["mat-list-icon", ""], ["fxFlex", "10"], ["class", "sidenav-item", 4, "ngIf"], ["routerLink", "map", "routerLinkActive", "active"], ["routerLink", "clients", "routerLinkActive", "active"], ["routerLink", "routes", "routerLinkActive", "active"], ["routerLink", "planning", "routerLinkActive", "active"], ["routerLink", "offline", "routerLinkActive", "active"], ["routerLink", "settings", "routerLinkActive", "active", 4, "ngIf"], [1, "example-sidenav-content"], ["fxLayout", "", "fxLayoutGap", "16px", 1, "tool"], ["mat-icon-button", ""], [1, "sidebar-toggle", 3, "click"], ["fxFlex", "100%", 1, "flexExpand"], [2, "font-size", "12px", "color", "#444242"], ["mat-icon-button", "", 3, "matMenuTriggerFor", "click"], ["menuTrigger", "matMenuTrigger"], [2, "color", "#323030"], [3, "overlapTrigger"], ["logout", "matMenu"], [3, "mouseleave"], ["mat-menu-item", "", 3, "click"], [1, "body"], [1, "sidenav-item"], ["src", "/assets/images/stalker.png", "alt", "", 1, "logo"], ["routerLink", "settings", "routerLinkActive", "active"]], template: function SidebarMenuComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarMenuComponent_Template_mat_sidenav_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-list-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SidebarMenuComponent_div_8_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-list-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "location_on");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SidebarMenuComponent_div_13_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-list-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "store");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, SidebarMenuComponent_div_18_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-list-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "route");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, SidebarMenuComponent_div_23_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "edit_calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, SidebarMenuComponent_div_28_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-list-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, SidebarMenuComponent_div_33_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, SidebarMenuComponent_mat_list_item_34_Template, 5, 1, "mat-list-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-toolbar", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarMenuComponent_Template_mat_icon_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarMenuComponent_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](44); return _r8.openMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "keyboard_arrow_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "mat-menu", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseleave", function SidebarMenuComponent_Template_span_mouseleave_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](44); return _r8.closeMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarMenuComponent_Template_button_click_50_listener() { return ctx._authService.logoutUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sidenavWidth > 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sidenavWidth > 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sidenavWidth > 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sidenavWidth > 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sidenavWidth > 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sidenavWidth > 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.role == "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.myname);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("overlapTrigger", false);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__.MatSidenav, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListItem, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListIconCssMatStyler, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuItem, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet], styles: [".example-sidenav-content[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    \r\n}\r\n\r\n.tool[_ngcontent-%COMP%]{\r\n    \r\n    position: sticky;\r\n    position: -webkit-sticky; \r\n    top: 0; \r\n    z-index: 1000; \r\n    width: 100%;\r\n    background-color: rgb(246, 250, 247);\r\n    height: 6%;\r\n    margin: 0;\r\n    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;\r\n}\r\n\r\n.body[_ngcontent-%COMP%]{\r\n    \r\n    \r\n    position: absolute;\r\n    top: 40px;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    margin: 0px;\r\n    \r\n}\r\n\r\n.flexExpand[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n}\r\n\r\n.example-sidenav[_ngcontent-%COMP%] {\r\n\tbackground-color: #27AE61;\r\n    border-radius: 0px 30px 30px 0px;\r\n}\r\n\r\n.active[_ngcontent-%COMP%] {\r\n\tbackground-color: rgba(9, 30, 66, 0.25);\r\n}\r\n\r\n.sidebar-toggle[_ngcontent-%COMP%]{\r\n    color: #27AE61;\r\n}\r\n\r\n.sidenav-item[_ngcontent-%COMP%] {\r\n\tcolor: white;\r\n\tfont-size: 16px;\r\n}\r\n\r\n.sidenav-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    margin-left: 9px;\r\n}\r\n\r\nmat-icon[_ngcontent-%COMP%] {\r\n\tcolor: white;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]{\r\n    width: 90px;\r\n    height: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXItbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVzs7QUFFZjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsd0JBQXdCLEVBQUUseUJBQXlCO0lBQ25ELE1BQU0sRUFBRSx5Q0FBeUM7SUFDakQsYUFBYSxFQUFFLCtEQUErRDtJQUM5RSxXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLFVBQVU7SUFDVixTQUFTO0lBQ1QsMkZBQTJGO0FBQy9GOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWDtrQkFDYztBQUNsQjs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBQ0E7Q0FDQyx5QkFBeUI7SUFDdEIsZ0NBQWdDO0FBQ3BDOztBQUNBO0NBQ0MsdUNBQXVDO0FBQ3hDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtDQUNDLFlBQVk7Q0FDWixlQUFlO0FBQ2hCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUtBO0NBQ0MsWUFBWTtBQUNiOztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoic2lkZWJhci1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBcclxufVxyXG5cclxuLnRvb2x7XHJcbiAgICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAvKiBGb3IgbWFjT1MvaU9TIFNhZmFyaSAqL1xyXG4gICAgdG9wOiAwOyAvKiBTZXRzIHRoZSBzdGlja3kgdG9vbGJhciB0byBiZSBvbiB0b3AgKi9cclxuICAgIHotaW5kZXg6IDEwMDA7IC8qIEVuc3VyZSB0aGF0IHlvdXIgYXBwJ3MgY29udGVudCBkb2Vzbid0IG92ZXJsYXAgdGhlIHRvb2xiYXIgKi9cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NiwgMjUwLCAyNDcpO1xyXG4gICAgaGVpZ2h0OiA2JTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMTQsIDMwLCAzNywgMC4xMikgMHB4IDJweCA0cHggMHB4LCByZ2JhKDE0LCAzMCwgMzcsIDAuMzIpIDBweCAycHggMTZweCAwcHg7XHJcbn1cclxuXHJcbi5ib2R5e1xyXG4gICAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xyXG4gICAgLyogei1pbmRleDotMTsgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgLyogd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTsgKi9cclxufVxyXG4uZmxleEV4cGFuZCB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG4uZXhhbXBsZS1zaWRlbmF2IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjdBRTYxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDMwcHggMzBweCAwcHg7XHJcbn1cclxuLmFjdGl2ZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSg5LCAzMCwgNjYsIDAuMjUpO1xyXG59XHJcblxyXG4uc2lkZWJhci10b2dnbGV7XHJcbiAgICBjb2xvcjogIzI3QUU2MTtcclxufVxyXG4uc2lkZW5hdi1pdGVtIHtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5zaWRlbmF2LWl0ZW0gc3BhbntcclxuICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbm1hdC1pY29uIHtcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuLmxvZ297XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 22685:
/*!**********************************************!*\
  !*** ./src/app/token-interceptor.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenInterceptorService": () => (/* binding */ TokenInterceptorService)
/* harmony export */ });
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ 90806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


class TokenInterceptorService {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(req, next) {
        let authService = this.injector.get(_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService);
        let tokenizedReq = req.clone({
            headers: req.headers.set('Authorization', 'bearer ' + authService.getToken())
        });
        return next.handle(tokenizedReq);
    }
}
TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) { return new (t || TokenInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector)); };
TokenInterceptorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TokenInterceptorService, factory: TokenInterceptorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 81271:
/*!**********************************************************!*\
  !*** ./src/app/update-client/update-client.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateClientComponent": () => (/* binding */ UpdateClientComponent)
/* harmony export */ });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ 4095);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet.markercluster */ 79619);
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet_markercluster__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 20784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 95641);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _clients_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clients.service */ 23640);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ 93776);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 73981);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 21036);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 34357);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 58359);
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @zxing/ngx-scanner */ 76750);
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-webcam */ 60330);


















function UpdateClientComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Position Fixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function UpdateClientComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Fixing Position...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UpdateClientComponent_div_28_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const code_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](code_r32.value);
} }
function UpdateClientComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UpdateClientComponent_div_28_span_1_Template, 2, 1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const code_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", code_r32.nbr == 1);
} }
function UpdateClientComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Not scanned");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UpdateClientComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r6.clientInfo.properties.codeDANON);
} }
function UpdateClientComponent_div_38_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r36.clientInfo.properties.codeCOLA);
} }
function UpdateClientComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UpdateClientComponent_div_38_span_1_Template, 2, 1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const code_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", code_r35.nbr == 2);
} }
function UpdateClientComponent_span_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Not scanned");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UpdateClientComponent_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r10.clientInfo.properties.codeCOLA);
} }
function UpdateClientComponent_div_48_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r38.clientInfo.properties.codeFGD);
} }
function UpdateClientComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UpdateClientComponent_div_48_span_1_Template, 2, 1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const code_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", code_r37.nbr == 3);
} }
function UpdateClientComponent_span_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Not scanned");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UpdateClientComponent_ng_template_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r14.clientInfo.properties.codeFGD);
} }
function UpdateClientComponent_div_52_section_4_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateClientComponent_div_52_section_4_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r40.toggleShow(ctx_r40.code.nbr, ctx_r40.qrResultString); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Result ", ctx_r39.code.nbr, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r39.qrResultString);
} }
function UpdateClientComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Scanning...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "zxing-scanner", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("scanSuccess", function UpdateClientComponent_div_52_Template_zxing_scanner_scanSuccess_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r42.onCodeResult($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, UpdateClientComponent_div_52_section_4_Template, 8, 2, "section", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r15.qrResultString);
} }
function UpdateClientComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "UUID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Numero_Serie:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Type_card:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Technologies:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r16.clientInfo.properties.nfc.UUID);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r16.clientInfo.properties.nfc.Numero_Serie);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r16.clientInfo.properties.nfc.Type_card);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r16.clientInfo.properties.nfc.Technologies);
} }
function UpdateClientComponent_div_70_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const code_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](code_r44.value);
} }
function UpdateClientComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UpdateClientComponent_div_70_span_1_Template, 2, 1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const code_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", code_r44.nbr == 4);
} }
function UpdateClientComponent_span_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Not scanned");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UpdateClientComponent_ng_template_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r20.clientInfo.properties.codeQR);
} }
function UpdateClientComponent_div_74_section_2_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Result: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateClientComponent_div_74_section_2_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r48.toggleShow(ctx_r48.code.nbr, ctx_r48.qrResultString); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r47.qrResultString);
} }
function UpdateClientComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "zxing-scanner", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("scanSuccess", function UpdateClientComponent_div_74_Template_zxing_scanner_scanSuccess_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r50.onCodeResult($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, UpdateClientComponent_div_74_section_2_Template, 8, 1, "section", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r21.qrResultString);
} }
function UpdateClientComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "webcam", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("imageCapture", function UpdateClientComponent_div_81_Template_webcam_imageCapture_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r52.handleNFCImage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateClientComponent_div_81_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r53); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r54.triggerSnapshot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Click Here");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateClientComponent_div_81_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r53); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r55.toggleNFCWebcam(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Close Camera");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("height", 200)("width", 500)("trigger", ctx_r22.triggerObservable);
} }
function UpdateClientComponent_img_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 49);
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("height", 200)("width", 200)("src", ctx_r23.webcamNFCImage.imageAsDataUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function UpdateClientComponent_ng_template_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 49);
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r25.clientInfo.properties.NFCP, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("height", 200)("width", 200);
} }
function UpdateClientComponent_div_97_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-select", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function UpdateClientComponent_div_97_Template_mat_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r56.clientInfo.properties.detailType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Alimentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Superette");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Aattar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Fruits sec");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Boundif");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Parfumerie");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Kioske");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r26.clientInfo.properties.detailType);
} }
function UpdateClientComponent_div_110_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function UpdateClientComponent_div_110_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r58.codeSMS = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateClientComponent_div_110_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r59); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r60.VerifySMS(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r27.codeSMS);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r27.status, " ");
} }
function UpdateClientComponent_div_117_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "webcam", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("imageCapture", function UpdateClientComponent_div_117_Template_webcam_imageCapture_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r61.handlePDVImage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateClientComponent_div_117_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r62); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r63.triggerSnapshot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Click Here");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateClientComponent_div_117_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r62); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r64.togglePDVWebcam(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Close Camera");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("height", 200)("width", 500)("trigger", ctx_r28.triggerObservable);
} }
function UpdateClientComponent_img_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 49);
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("height", 200)("width", 200)("src", ctx_r29.webcamPDVImage.imageAsDataUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function UpdateClientComponent_ng_template_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 49);
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r31.clientInfo.properties.PVP, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("height", 200)("width", 200);
} }
const _c0 = function (a0) { return { "left": a0 }; };
const incr = 1;
class UpdateClientComponent {
    constructor(clientService, _router) {
        this.clientService = clientService;
        this._router = _router;
        this.progress = 0;
        this.selected = null;
        this.user = JSON.parse(localStorage.getItem("user"));
        //from hajar
        this.ListCodes = [];
        this.code = { nbr: null, value: null };
        this.isShown = false;
        this.nfcShown = false;
        this.hide = false; // hidden by default
        this.test = false;
        this.lat = 33.2607691;
        this.lon = -7.6222771;
        this.icone = leaflet__WEBPACK_IMPORTED_MODULE_0__.icon({
            iconUrl: "assets/green.png",
            iconSize: [12, 12],
        });
        this.percentage = 0;
        this.Status = true;
        this.show = false;
        this.list = [];
        this.geojsonFeature = {
            type: 'Feature',
            properties: {
                name: 'Mohamed',
                amenity: 'Baseball Stadium'
            },
            geometry: {
                type: 'Point',
                coordinates: [-7.6222771, 33.2608691]
            }
        };
        // for update functionality
        // fadma's variables
        this.showVerifCodeInput = false;
        this.showNFCWebcam = false;
        this.showPDVWebcam = false;
        this.webcamNFCImage = null;
        this.webcamPDVImage = null;
        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.scan = false;
        this.nfcObject = { Numero_Serie: null, Technologies: null, Type_card: null, UUID: null, NFCPhoto: null };
        this.clientInfos = { codes: [], codeNFC: null, NFCPhoto: null, TypeDPV: null, nfc: this.nfcObject,
            NomPrenom: null, detailType: null, userId: null, userRole: null, PhoneNumber: null, PVPhoto: null, Status: "red" };
        // map
        this.icon = leaflet__WEBPACK_IMPORTED_MODULE_0__.icon({
            iconUrl: "assets/green.png",
            iconSize: [12, 12],
        });
        this.location_icon = leaflet__WEBPACK_IMPORTED_MODULE_0__.icon({
            iconUrl: "assets/location.png",
            iconSize: [30, 30]
        });
        this.markersCluster = new leaflet__WEBPACK_IMPORTED_MODULE_0__.MarkerClusterGroup();
        this.acc = 1222000;
        this.verification_code = 123456;
        this.clientInfo = clientService.getClientInfo();
        console.log('@@@@@@@@@@@@@@@@' + this.clientInfo.NomPrenom);
    }
    showcheck() {
        this.Status = true;
        this.hide = !this.hide;
    }
    // ngOnInit(): void {
    //   setInterval(() => this.manageProgress(), 150 )
    //   this.initMap()
    // }
    // ngAfterViewInit(): void {
    //   setInterval(() => this.manageProgress(), 150 )
    //   this.initMap()
    // }
    // private initMap(): void {
    //   this.map = L.map('map2', {
    //     center: [this.lat, this.lon],
    //     zoom: 15,
    //     zoomControl: false
    //   });
    //   const zoomOptions = {
    //     zoomInText: '+',
    //     zoomOutText: '-',
    //   };
    //   // const zoom = L.control.zoom(zoomOptions);
    //   const tiles = L.tileLayer('https://map.novatis.tech/hot/{z}/{x}/{y}.png', {
    //     maxZoom: 30,
    //     minZoom: 0
    //   });
    //   // const lc = L.control.locate(locationControl)
    //   // lc.addTo(this.map);
    //   // zoom.addTo(this.map);
    //   tiles.addTo(this.map);
    //   this.map.addLayer(this.markersCluster);
    //   this.map.addControl(L.control.zoom({ position: 'bottomleft' }))
    // }
    manageProgress() {
        if (this.progress === 100) {
            this.progress = 0;
        }
        else {
            this.progress = this.progress + incr;
        }
    }
    clearResult() {
        this.qrResultString = null;
    }
    toggleShow(nbr, resultString) {
        console.log(nbr);
        console.log(resultString);
        console.log(this.ListCodes);
        this.isShown = !this.isShown;
        if (nbr === 1) {
            this.code = { nbr: nbr, value: resultString };
            this.upsert(this.ListCodes, this.code);
            this.qrResultString = null;
        }
        if (nbr === 2) {
            this.code = { nbr: nbr, value: resultString };
            this.upsert(this.ListCodes, this.code);
            this.qrResultString = null;
        }
        if (nbr === 3) {
            this.code = { nbr: nbr, value: resultString };
            this.upsert(this.ListCodes, this.code);
            this.qrResultString = null;
        }
        if (nbr === 4) {
            this.code = { nbr: nbr, value: resultString };
            this.upsert(this.ListCodes, this.code);
            this.qrResultString = null;
        }
        //this.code={nbr:nbr,value: resultString}
        //this.upsert(this.ListCodes,this.code)
    }
    upsert(array, item) {
        const i = array.findIndex(_item => _item.nbr === item.nbr);
        if (i > -1)
            array[i] = item; // (2)
        else
            array.push(item);
    }
    onCodeResult(resultString) {
        this.qrResultString = resultString;
    }
    ngAfterViewInit() {
        // setInterval(() => this.manageProgress(), 150)
        this.initMap();
        // this.getLocation()
        // this.getLo();
        this.clientInfo = this.clientService.getClientInfo();
        // console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')
        // console.log(this.clientInfo)
    }
    initMap() {
        this.Status = true;
        this.testTimer();
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_0__.map('map2', {
            center: [this.lat, this.lon],
            zoom: 14,
            zoomControl: true
        });
        const tiles = leaflet__WEBPACK_IMPORTED_MODULE_0__.tileLayer('https://map.novatis.tech/hot/{z}/{x}/{y}.png', {
            maxZoom: 30,
            minZoom: 0
        });
        tiles.addTo(this.map);
        var location_icon = leaflet__WEBPACK_IMPORTED_MODULE_0__.icon({
            iconUrl: "assets/location.png",
            iconSize: [30, 30]
        });
        var marker = leaflet__WEBPACK_IMPORTED_MODULE_0__.marker([this.lat, this.lon], { icon: location_icon });
        this.inter = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.interval)(1000).subscribe(x => {
            if (navigator.geolocation) {
                if (this.percentage == 100) {
                    this.inter.unsubscribe();
                    this.clientInfos["lat"] = this.latclt;
                    this.clientInfos["lon"] = this.lonclt;
                    //console.log(this.clientInfos)
                }
                var options = {
                    enableHighAccuracy: false,
                    timeout: 5000,
                    maximumAge: 2000
                };
                //console.log(this.percentage)
                var geoId = navigator.geolocation.watchPosition((position) => {
                    if (position) {
                        //console.log("Latitude: " + position.coords.latitude +
                        // " // Longitude: " + position.coords.longitude);
                        var newlat = position.coords.latitude;
                        var newLon = position.coords.longitude;
                        // if (position.coords.accuracy > 10) {
                        //   console.log("The GPS accuracy isn't good enough");
                        // }
                        if (newlat != this.lat || newLon != this.lat) {
                            //console.log("nmi rah tbdl")
                            // this.percentage=0
                            this.lat = newlat;
                            this.lon = newLon;
                            this.list.push(position);
                            //console.log(this.list)
                            //console.log("Accuracy:"+position.coords.accuracy)
                            if (position.coords.accuracy < this.acc) {
                                //console.log("********** Accuracy:"+position.coords.accuracy)
                                this.acc = position.coords.accuracy;
                                this.lat = position.coords.latitude;
                                this.lon = position.coords.longitude;
                                this.latclt = position.coords.latitude;
                                this.lonclt = position.coords.longitude;
                            }
                            //console.log(this.lat)
                            //console.log(this.lon)
                            this.map.removeLayer(marker);
                            this.show = false;
                            this.Status = true;
                            marker = new leaflet__WEBPACK_IMPORTED_MODULE_0__.marker([this.lat, this.lon], { icon: location_icon }).addTo(this.map);
                        }
                    }
                }, (error) => console.log(error), options);
                // console.log('Clear watch called');
                // window.navigator.geolocation.clearWatch(geoId);
            }
            else {
                alert("Geolocation is not supported by this browser.");
            }
        });
    }
    getLo() {
        // var marker = L.geoJSON(this.geojsonFeature, {
        //   pointToLayer: (point, latlon) => {
        //     return L.marker(latlon, { icon: this.icone })
        //   }
        // });
        // marker.addTo(this.map)
        this.circle = leaflet__WEBPACK_IMPORTED_MODULE_0__.circle([this.lat, this.lon], 20).addTo(this.map);
        leaflet__WEBPACK_IMPORTED_MODULE_0__.Circle.include({
            contains: function (latLng) {
                return this.getLatLng().distanceTo(latLng) < this.getRadius();
            }
        });
        this.map.fitBounds(this.circle.getBounds());
    }
    testTimer() {
        this.percentage = 0;
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.interval)(300).subscribe(x => {
            if (this.percentage < 100) {
                this.percentage += 4;
            }
        });
    }
    addNewComponent() {
        this.show = true;
        this.Status = false;
    }
    CheckCodes() {
        this.nfcShown = !this.nfcShown;
        this.test = true;
        console.log(this.ListCodes);
        this.clientInfos.codes = this.ListCodes;
    }
    Read() {
        console.log("read");
        this.clientService.getNFC().subscribe(res => {
            console.log(res);
            this.clientInfo.properties.nfc = res;
            console.log(this.clientInfo);
            /*this.clientInfo.nfc.Numero_Serie=res.Numero_Serie;
            this.clientInfo.nfc.Technologies=res.Technologies
            this.clientInfo.nfc.Type_card=res.Type_card
            this.clientInfo.nfc.UUID=res.UUID;*/
        });
    }
    getCoordinates() {
    }
    SendSMS(phone) {
        this.clientService.getSMS(phone).subscribe(res => {
            console.log(res);
            this.verification_code = res.code;
        });
    }
    Verify(code) {
        this.clientInfos.PhoneNumber = this.PhoneNumber;
        this.SendSMS(this.PhoneNumber);
    }
    VerifySMS() {
        if (this.verification_code === this.codeSMS) {
            this.status = "the code is correct";
        }
        else {
            this.status = "the code is incorrect";
        }
    }
    Update() {
        // this.clientInfos.PhoneNumber=this.PhoneNumber
        // this.clientInfos.NomPrenom=this.NomPrenom
        // this.clientInfos.TypeDPV=this.TypeDPV;
        // this.clientInfos.detailType = this.detailType;
        // this.clientInfos.userId = this.user._id;
        // this.clientInfos.userRole = this.user.role;
        // if(this.clientInfos.codeNFC===null){
        //   this.clientInfos["Status"]="red"
        // }
        // else{
        //   this.clientInfos["Status"]="green"
        // }
        // ***************** scanned codes ************* //
        if (this.ListCodes.length != 0) {
            this.ListCodes.forEach(element => {
                if (element.nbr == 1) {
                    this.clientInfo.properties.codeDANON = element.value;
                }
                else if (element.nbr == 2) {
                    this.clientInfo.properties.codeCOLA = element.value;
                }
                else if (element.nbr == 3) {
                    this.clientInfo.properties.codeFGD = element.value;
                }
                else if (element.nbr == 4) {
                    this.clientInfo.properties.codeQR = element.value;
                }
            });
            console.log();
            // this.clientInfo.properties.=this.ListCodes
        }
        if (this.clientInfos.NFCPhoto) {
            this.clientInfo.properties.nfc.NFCPhoto = this.clientInfos.NFCPhoto;
            this.clientInfo.properties.NFCP = null;
        }
        if (this.clientInfos.PVPhoto) {
            this.clientInfo.properties.PVPhoto = this.clientInfos.PVPhoto;
            this.clientInfo.properties.PVP = null;
        }
        // add user ids
        this.clientInfo.properties.updatedBy = this.user._id;
        this.clientInfo.properties.userRole = this.user.role;
        this.clientInfo.properties.updated_at = Date.now();
        console.log('########## Updated Client ##########');
        console.log(this.clientInfo);
        if (this.clientInfo.properties.codeQR === null) {
            this.clientInfo.properties.status = "pink";
        }
        else {
            this.clientInfo.properties.status = "purple";
        }
        this.clientService.updateClient(this.clientInfo).subscribe(res => console.log(res));
        this._router.navigate(['map']);
        // this.clientInfos={codes:[],codeNFC:null, NFCPhoto:null, TypeDPV:null,
        //  NomPrenom:null, PhoneNumber:null, detailType:null,userId:null, userRole:null, PVPhoto:null,Status:"red"}
    }
    ///////////////////////
    // fadma's code
    toggleNFCWebcam() {
        this.showNFCWebcam = !this.showNFCWebcam;
    }
    displayNFCam() {
        this.showNFCWebcam = !this.showNFCWebcam;
    }
    triggerSnapshot() {
        this.trigger.next();
    }
    // handleImage(webcamImage): void {
    //   console.info('Saved webcam image', webcamImage);
    //   this.webcamImage = webcamImage;
    //   if(this.camera1) {this.clientInfos.NFCPhoto= webcamImage}
    //   if(this.camera2) {this.clientInfos.PVPhoto = webcamImage}
    //   console.log(this.webcamNFCImage.imageAsDataUrl);
    // }
    get triggerObservable() {
        return this.trigger.asObservable();
    }
    handleNFCImage(webcamNFCImage) {
        console.info('received webcam image', webcamNFCImage);
        this.webcamNFCImage = webcamNFCImage;
        this.clientInfos.NFCPhoto = webcamNFCImage.imageAsDataUrl;
    }
    togglePDVWebcam() {
        this.showPDVWebcam = !this.showPDVWebcam;
    }
    displayPDVcam() {
        this.showPDVWebcam = !this.showPDVWebcam;
    }
    handlePDVImage(webcamPDVImage) {
        console.info('received webcam image', webcamPDVImage);
        this.webcamPDVImage = webcamPDVImage;
        this.clientInfos.PVPhoto = webcamPDVImage.imageAsDataUrl;
    }
}
UpdateClientComponent.ɵfac = function UpdateClientComponent_Factory(t) { return new (t || UpdateClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_clients_service__WEBPACK_IMPORTED_MODULE_2__.ClientsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
UpdateClientComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UpdateClientComponent, selectors: [["app-update-client"]], decls: 125, vars: 40, consts: [[1, "content-body"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], ["ng-app", "", "ng-controller", "ApplicationController", 1, "progress-cantainer"], ["mode", "determinate", 3, "value"], [2, "position", "absolute", "top", "0em", 3, "ngStyle"], [1, "map-container"], ["id", "map2"], ["mat-button", "", 1, "btn-yellow", 3, "disabled", "click"], ["id", "checkcodes", 1, "container"], [1, "checkcodes-fields"], [1, "scan-field"], [1, "input-label"], ["mat-button", "", 1, "btn-green", 3, "disabled", "click"], ["class", "qr-container", 4, "ngFor", "ngForOf"], ["style", "color: red;", 4, "ngIf", "ngIfElse"], ["scanned", ""], ["id", "divshow", "class", "Scan-container", 4, "ngIf"], ["id", "nfc", 1, "container"], [1, "inputs-container"], [1, "nfc"], ["mat-button", "", 1, "btn-green", 3, "click"], ["class", "nfc-div", 4, "ngIf"], ["class", "Scan-container", 4, "ngIf"], [1, "Scan-container"], [1, "snapshot"], ["style", "border-radius: 8px;", 3, "height", "width", "src", 4, "ngIf", "ngIfElse"], ["nfcphoto", ""], [1, "pdv"], [1, "field"], ["placeholder", "PDV Type*", "panelClass", "selectPanel2", 3, "ngModel", "ngModelChange"], ["value", "Detail"], ["value", "Gros"], ["value", "Demi Gros"], ["class", "field", 4, "ngIf"], ["matInput", "", "placeholder", "Typing...", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "+212", 3, "ngModel", "ngModelChange"], ["pdvphoto", ""], ["mat-button", "", 1, "btn-yellow", 3, "click"], [1, "qr-container"], [4, "ngIf"], [2, "color", "red"], ["id", "divshow", 1, "Scan-container"], ["Class", "small-video", 3, "scanSuccess"], ["class", "results", 4, "ngIf"], [1, "results"], [1, "nfc-div"], [3, "height", "width", "trigger", "imageCapture"], [1, "reas-nfc"], [2, "border-radius", "8px", 3, "height", "width", "src"], ["placeholder", "PDV Detail Type*", "panelClass", "selectPanel2", 3, "ngModel", "ngModelChange"], ["value", "Alimentation"], ["value", "Superette"], ["value", "Aattar"], ["value", "Fruits sec"], ["value", "Boundif"], ["value", "Parfumerie"], ["value", "Kioske"], ["matInput", "", "placeholder", "code SMS", "name", "codeSMS", 3, "ngModel", "ngModelChange"], [3, "click"]], template: function UpdateClientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Update Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, UpdateClientComponent_ng_container_3_Template, 3, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, UpdateClientComponent_ng_template_4_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "mat-progress-bar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateClientComponent_Template_button_click_18_listener() { return ctx.showcheck(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Code Centrale Danoune : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateClientComponent_Template_button_click_26_listener() { return ctx.toggleShow(1, ctx.qrResultString); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Scan");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, UpdateClientComponent_div_28_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, UpdateClientComponent_span_29_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, UpdateClientComponent_ng_template_30_Template, 1, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Code Coca Cola : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateClientComponent_Template_button_click_36_listener() { return ctx.toggleShow(2, ctx.qrResultString); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Scan");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, UpdateClientComponent_div_38_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, UpdateClientComponent_span_39_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, UpdateClientComponent_ng_template_40_Template, 1, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Code FGD : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateClientComponent_Template_button_click_46_listener() { return ctx.toggleShow(3, ctx.qrResultString); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Scan");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, UpdateClientComponent_div_48_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, UpdateClientComponent_span_49_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, UpdateClientComponent_ng_template_50_Template, 1, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, UpdateClientComponent_div_52_Template, 5, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateClientComponent_Template_button_click_53_listener() { return ctx.CheckCodes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Check codes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "NFC card puce : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateClientComponent_Template_button_click_61_listener() { return ctx.Read(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Read");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](63, UpdateClientComponent_div_63_Template, 17, 4, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Qr Code : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateClientComponent_Template_button_click_68_listener() { ctx.toggleShow(4, ctx.qrResultString); return ctx.scan = !ctx.scan; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Scan");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](70, UpdateClientComponent_div_70_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](71, UpdateClientComponent_span_71_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](72, UpdateClientComponent_ng_template_72_Template, 1, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](74, UpdateClientComponent_div_74_Template, 3, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "NFC photo : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateClientComponent_Template_button_click_78_listener() { return ctx.displayNFCam(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "camera_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](81, UpdateClientComponent_div_81_Template, 7, 3, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](84, UpdateClientComponent_img_84_Template, 1, 3, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](85, UpdateClientComponent_ng_template_85_Template, 1, 3, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "mat-select", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function UpdateClientComponent_Template_mat_select_ngModelChange_90_listener($event) { return ctx.clientInfo.properties.TypeDPV = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "mat-option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "mat-option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "Gros");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "mat-option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "Demi Gros");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](97, UpdateClientComponent_div_97_Template, 17, 1, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "First & Last Name*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function UpdateClientComponent_Template_input_ngModelChange_102_listener($event) { return ctx.clientInfo.properties.NomPrenom = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "Phone number*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function UpdateClientComponent_Template_input_ngModelChange_107_listener($event) { return ctx.clientInfo.properties.PhoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateClientComponent_Template_button_click_108_listener() { ctx.Verify("code"); return ctx.showVerifCodeInput = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109, "Verify");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](110, UpdateClientComponent_div_110_Template, 6, 2, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "mat-label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, "PV photo : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateClientComponent_Template_button_click_114_listener() { return ctx.displayPDVcam(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "camera_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](117, UpdateClientComponent_div_117_Template, 7, 3, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](120, UpdateClientComponent_img_120_Template, 1, 3, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](121, UpdateClientComponent_ng_template_121_Template, 1, 3, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateClientComponent_Template_button_click_123_listener() { return ctx.Update(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](31);
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](86);
        const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.percentage == 100)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("pos collect\u00E9s: ", ctx.list.length, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Accuracy: ", ctx.acc, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.percentage);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](38, _c0, ctx.percentage + "%"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.percentage, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.percentage != 100 || !ctx.Status);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.test);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.ListCodes);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.clientInfo.properties.codeDANON == null)("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.test);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.ListCodes);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.clientInfo.properties.codeCOLA == null)("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.test);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.ListCodes);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.clientInfo.properties.codeFGD == null)("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isShown && !ctx.scan);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.test);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.clientInfo.properties.nfc.UUID != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.ListCodes);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.clientInfo.properties.codeQR == null)("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isShown && ctx.scan);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showNFCWebcam);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.webcamNFCImage)("ngIfElse", _r24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.clientInfo.properties.TypeDPV);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.clientInfo.TypeDPV == "Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.clientInfo.properties.NomPrenom);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.clientInfo.properties.PhoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showVerifCodeInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showPDVWebcam);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.webcamPDVImage)("ngIfElse", _r30);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__.MatProgressBar, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_16__.ZXingScannerComponent, ngx_webcam__WEBPACK_IMPORTED_MODULE_17__.WebcamComponent], styles: ["@media (min-width: 1200px){\r\n\r\n\r\n    .nfc-div[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        flex-flow: row;\r\n        justify-content: flex-start;\r\n        align-items: flex-start;\r\n    }\r\n\r\n    .nfc-div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n        font-weight: bold;\r\n    }\r\n    .progress-cantainer[_ngcontent-%COMP%]{\r\n        position: relative; \r\n        width: 500px;\r\n        margin: auto;\r\n    }\r\n    \r\n    .progress-cantainer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n        position: absolute; \r\n        top: 0em; \r\n        font-size: 12px; \r\n        margin: auto;\r\n    }\r\n    \r\n    .mat-progress-bar-fill[_ngcontent-%COMP%]::after {\r\n        background-color: #27AE61;\r\n    }\r\n    \r\n    .mat-progress-bar-buffer[_ngcontent-%COMP%] {\r\n        background: #fff;\r\n    }\r\n    \r\n    \r\n    .mat-select-arrow[_ngcontent-%COMP%] {\r\n        width: 0;\r\n        height: 0;\r\n        border-left: 5px solid transparent;\r\n        border-right: 5px solid transparent;\r\n        border-top: 5px solid;\r\n        margin: 0 4px;\r\n        color: #27AE61;\r\n      }\r\n    \r\n    .mat-progress-bar[_ngcontent-%COMP%] {\r\n        height: 1em !important;\r\n        margin-bottom: 20px;\r\n        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n        border-radius: 20px;\r\n    }\r\n    .content-body[_ngcontent-%COMP%]{\r\n        background-color: #F6F6F6;\r\n        padding: 20px;\r\n        text-align: center;\r\n        margin: auto;\r\n    }\r\n    .content-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n        font-weight: bold;\r\n        color: #27AE61;\r\n    }\r\n    \r\n    .content-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        margin-bottom: 10px;\r\n        color: #646262;\r\n    }\r\n    \r\n    .container[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        padding: 20px;\r\n        margin: 20px;\r\n        flex-flow: column wrap ;\r\n        background-color: #fff;\r\n        justify-content: flex-start ;\r\n        align-items: center;\r\n        grid-gap: 10px 20px;\r\n        gap: 10px 20px; \r\n        border-radius: 20px;\r\n        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\r\n    }\r\n    .container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n        align-self: flex-end;\r\n    }\r\n    \r\n    .checkcodes-fields[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        flex-flow: row wrap;\r\n        align-items: center;\r\n        grid-gap: 20px;\r\n        gap: 20px;\r\n    }\r\n    \r\n    .scan-field[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        flex-flow: row wrap;\r\n        align-items: center;\r\n        grid-gap: 10px;\r\n        gap: 10px;\r\n    }\r\n    .scan-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n        color: #646262;\r\n    }\r\n    .Scan-container[_ngcontent-%COMP%]{\r\n      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\r\n    }\r\n    \r\n    .inputs-container[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        flex-flow: row wrap;\r\n        grid-gap: 60px;\r\n        gap: 60px;\r\n        align-items: flex-start;\r\n    }\r\n    .nfc[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        flex-flow: column wrap;\r\n        grid-gap: 20px;\r\n        gap: 20px;\r\n    }\r\n    .pdv[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        flex-flow: column wrap;\r\n        justify-content: flex-start;\r\n        align-items: flex-start;\r\n        grid-gap: 20px;\r\n        gap: 20px;\r\n    }\r\n    .field[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        flex-flow: row;\r\n        grid-gap: 10px;\r\n        gap: 10px;\r\n        align-items: center;\r\n    }\r\n    .mat-form-field-ripple[_ngcontent-%COMP%] {\r\n        background-color: #27AE61 !important;\r\n    }\r\n    \r\n    .scan-field[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n        display: flex; \r\n        flex-flow: row; \r\n        grid-gap: 10px; \r\n        gap: 10px; \r\n        align-items: center; \r\n        justify-content: flex-start;\r\n    }\r\n    \r\n    .qr-container[_ngcontent-%COMP%]{\r\n        background-color: #fff;\r\n        left: 0;\r\n        text-align: left;\r\n        padding-right: 3px;\r\n        padding-left: 3px;\r\n        border-radius: 4px;\r\n        width: -webkit-fit-content;\r\n        width: -moz-fit-content;\r\n        width: fit-content;\r\n        height: 20px;\r\n        font-size: 10px;\r\n    }\r\n    \r\n    .field[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%]{\r\n        color: #646262;\r\n    }\r\n    \r\n    .field[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n        font-size: 12px;\r\n        color: #313030;\r\n    }\r\n    .field[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]   .mat-select[_ngcontent-%COMP%]{\r\n        font-size: 12px;\r\n        color: #313030;\r\n    }\r\n    \r\n      mat-form-field.mat-focused[_ngcontent-%COMP%]   span.mat-form-field-label-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n        color:#27AE61 !important;\r\n      }\r\n    \r\n    .custom-select[_ngcontent-%COMP%]{\r\n      border-radius: 12px;\r\n      width:170px;\r\n      height: 30px;\r\n      box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\r\n      border: #fff;\r\n    }\r\n    \r\n    .map-container[_ngcontent-%COMP%]{ \r\n    \r\n        width: 700px;\r\n        height: 400px;\r\n        \r\n        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\r\n        \r\n        margin: auto;  \r\n        border-radius: 10px;\r\n         \r\n    }\r\n    .mat-select[_ngcontent-%COMP%]:focus:not(.mat-select-disabled).mat-primary   .mat-select-arrow[_ngcontent-%COMP%] {\r\n        color: #63961C;\r\n    }\r\n     \r\n    \r\n    #map2[_ngcontent-%COMP%] {\r\n        height: 100%;\r\n        border-radius: 10px;\r\n    }\r\n    \r\n    \r\n    .small-video[_ngcontent-%COMP%]{\r\n        max-height: 700px;\r\n        width: 300px;\r\n        -o-object-fit: contain;\r\n           object-fit: contain;\r\n    }\r\n    \r\n    .results[_ngcontent-%COMP%]{\r\n      background-color:#fff;\r\n    }\r\n    \r\n    .action-button[_ngcontent-%COMP%]{\r\n      background-color: #27AE61;\r\n      border-radius: 12px;\r\n      border: 1px solid rgba(27, 31, 35, .15);\r\n      box-sizing: border-box;\r\n      box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\r\n      color: #fff;\r\n      font-size: 14px;\r\n      line-height: 20px;\r\n      position: relative;\r\n      text-align: center;\r\n      width:100px;\r\n      height: 30px;\r\n    }\r\n    .action-buttonShot[_ngcontent-%COMP%]{\r\n      background-color: #27AE61;\r\n      border-radius: 12px;\r\n      border: 1px solid rgba(27, 31, 35, .15);\r\n      box-sizing: border-box;\r\n      box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\r\n      color: #fff;\r\n      font-size: 14px;\r\n      line-height: 20px;\r\n      position: relative;\r\n      text-align: center;\r\n      padding: 5px;\r\n    }\r\n    \r\n    \r\n    \r\n    .btn-yellow[_ngcontent-%COMP%]{\r\n        margin-top: 8px;\r\n        background-color: #FACF37;\r\n        color: #fff;\r\n        font-size: 13px;\r\n        line-height: 30px;\r\n        \r\n        border-radius: 40px;\r\n        text-align: center !important;\r\n        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n    }\r\n    \r\n    .btn-yellow[_ngcontent-%COMP%]:disabled{\r\n        background-color: #C2BEBE;\r\n        color: #313030;\r\n    }\r\n    \r\n    .btn-green[_ngcontent-%COMP%]{\r\n        background-color: #27AE61;\r\n        color: #fff;\r\n        margin: auto;\r\n        font-size: 13px;\r\n        line-height: 30px;\r\n        width: 130px !important;\r\n        border-radius: 20px;\r\n        text-align: center !important;\r\n        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n    }\r\n    \r\n    .btn-green[_ngcontent-%COMP%]:disabled{\r\n        background-color: #C2BEBE;\r\n        color: #313030;\r\n    }\r\n    \r\n    .scan-field[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n        display: flex; \r\n        flex-flow: row; \r\n        grid-gap: 10px; \r\n        gap: 10px; \r\n        align-items: center; \r\n        justify-content: flex-start;\r\n    } \r\n    .qr-container[_ngcontent-%COMP%]{\r\n        background-color: #fff;\r\n        left: 0;\r\n        text-align: left;\r\n        padding-right: 3px;\r\n        padding-left: 3px;\r\n        border-radius: 4px;\r\n        width: -webkit-fit-content;\r\n        width: -moz-fit-content;\r\n        width: fit-content;\r\n        height: 20px;\r\n        font-size: 12px;\r\n    }\r\n    \r\n    \r\n    }\r\n    \r\n    @media (min-width: 900px) and (max-width: 1200px){\r\n        \r\n        .progress-cantainer[_ngcontent-%COMP%]{\r\n            position: relative; \r\n            width: 500px;\r\n            margin: auto;\r\n        }\r\n        \r\n        .progress-cantainer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n            position: absolute; \r\n            top: 0em; \r\n            font-size: 12px; \r\n            margin: auto;\r\n        }\r\n        \r\n        .mat-progress-bar-fill[_ngcontent-%COMP%]::after {\r\n            background-color: #27AE61;\r\n        }\r\n        \r\n        .mat-progress-bar-buffer[_ngcontent-%COMP%] {\r\n            background: #fff;\r\n        }\r\n        \r\n        \r\n        .mat-select-arrow[_ngcontent-%COMP%] {\r\n            width: 0;\r\n            height: 0;\r\n            border-left: 5px solid transparent;\r\n            border-right: 5px solid transparent;\r\n            border-top: 5px solid;\r\n            margin: 0 4px;\r\n            color: #27AE61;\r\n          }\r\n        \r\n        .mat-progress-bar[_ngcontent-%COMP%] {\r\n            height: 1em !important;\r\n            margin-bottom: 20px;\r\n            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n            border-radius: 20px;\r\n        }\r\n        .content-body[_ngcontent-%COMP%]{\r\n            background-color: #F6F6F6;\r\n            padding: 20px;\r\n            text-align: center;\r\n            margin: auto;\r\n        }\r\n        \r\n        .content-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n            margin-bottom: 10px;\r\n            color: #646262;\r\n        }\r\n        \r\n        .container[_ngcontent-%COMP%]{\r\n            display: flex;\r\n            padding: 20px;\r\n            margin: 20px;\r\n            flex-flow: column wrap ;\r\n            background-color: #fff;\r\n            justify-content: flex-start ;\r\n            align-items: center;\r\n            grid-gap: 10px 20px;\r\n            gap: 10px 20px; \r\n            border-radius: 20px;\r\n            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\r\n        }\r\n        .container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n            align-self: flex-end;\r\n        }\r\n        \r\n        .checkcodes-fields[_ngcontent-%COMP%]{\r\n            display: flex;\r\n            flex-flow: row wrap;\r\n            align-items: center;\r\n            grid-gap: 20px;\r\n            gap: 20px;\r\n        }\r\n        \r\n        .scan-field[_ngcontent-%COMP%]{\r\n            display: flex;\r\n            flex-flow: row wrap;\r\n            align-items: center;\r\n            grid-gap: 10px;\r\n            gap: 10px;\r\n        }\r\n        .scan-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n            color: #646262;\r\n        }\r\n        .Scan-container[_ngcontent-%COMP%]{\r\n          box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\r\n        }\r\n        \r\n        .scan-field[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n            display: flex; \r\n            flex-flow: row; \r\n            grid-gap: 10px; \r\n            gap: 10px; \r\n            align-items: center; \r\n            justify-content: flex-start;\r\n        }\r\n        \r\n        .qr-container[_ngcontent-%COMP%]{\r\n            background-color: #fff;\r\n            left: 0;\r\n            text-align: left;\r\n            padding-right: 3px;\r\n            padding-left: 3px;\r\n            border-radius: 4px;\r\n            width: -webkit-fit-content;\r\n            width: -moz-fit-content;\r\n            width: fit-content;\r\n            height: 20px;\r\n            font-size: 10px;\r\n        }\r\n        .inputs-container[_ngcontent-%COMP%]{\r\n            display: flex;\r\n            flex-flow: row wrap;\r\n            grid-gap: 60px;\r\n            gap: 60px;\r\n            align-items: flex-start;\r\n        }\r\n        .nfc[_ngcontent-%COMP%]{\r\n            display: flex;\r\n            flex-flow: column wrap;\r\n            grid-gap: 20px;\r\n            gap: 20px;\r\n        }\r\n        .pdv[_ngcontent-%COMP%]{\r\n            display: flex;\r\n            flex-flow: column wrap;\r\n            justify-content: flex-start;\r\n            align-items: flex-start;\r\n            grid-gap: 20px;\r\n            gap: 20px;\r\n        }\r\n        .field[_ngcontent-%COMP%]{\r\n            display: flex;\r\n            flex-flow: row;\r\n            grid-gap: 10px;\r\n            gap: 10px;\r\n            align-items: center;\r\n        }\r\n        .mat-form-field-ripple[_ngcontent-%COMP%] {\r\n            background-color: #27AE61 !important;\r\n        }\r\n        \r\n        \r\n        \r\n        .field[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%]{\r\n            color: #646262;\r\n        }\r\n        \r\n        .field[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n            font-size: 12px;\r\n            color: #313030;\r\n        }\r\n        .field[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]   .mat-select[_ngcontent-%COMP%]{\r\n            font-size: 12px;\r\n            color: #313030;\r\n        }\r\n        \r\n          mat-form-field.mat-focused[_ngcontent-%COMP%]   span.mat-form-field-label-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n            color:#27AE61 !important;\r\n          }\r\n        \r\n        .custom-select[_ngcontent-%COMP%]{\r\n          border-radius: 12px;\r\n          width:170px;\r\n          height: 30px;\r\n          box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\r\n          border: #fff;\r\n        }\r\n        \r\n        .map-container[_ngcontent-%COMP%]{ \r\n        \r\n            width: 700px;\r\n            height: 400px;\r\n            \r\n            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\r\n            \r\n            margin: auto;  \r\n            border-radius: 10px;\r\n             \r\n        }\r\n        .mat-select[_ngcontent-%COMP%]:focus:not(.mat-select-disabled).mat-primary   .mat-select-arrow[_ngcontent-%COMP%] {\r\n            color: #63961C;\r\n        }\r\n         \r\n        \r\n        #map2[_ngcontent-%COMP%] {\r\n            height: 100%;\r\n            border-radius: 10px;\r\n        }\r\n        \r\n        \r\n        .small-video[_ngcontent-%COMP%]{\r\n            max-height: 700px;\r\n            width: 300px;\r\n            -o-object-fit: contain;\r\n               object-fit: contain;\r\n        }\r\n        \r\n        .results[_ngcontent-%COMP%]{\r\n          background-color:#fff;\r\n        }\r\n        \r\n        .action-button[_ngcontent-%COMP%]{\r\n          background-color: #27AE61;\r\n          border-radius: 12px;\r\n          border: 1px solid rgba(27, 31, 35, .15);\r\n          box-sizing: border-box;\r\n          box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\r\n          color: #fff;\r\n          font-size: 14px;\r\n          line-height: 20px;\r\n          position: relative;\r\n          text-align: center;\r\n          width:100px;\r\n          height: 30px;\r\n        }\r\n        .action-buttonShot[_ngcontent-%COMP%]{\r\n          background-color: #27AE61;\r\n          border-radius: 12px;\r\n          border: 1px solid rgba(27, 31, 35, .15);\r\n          box-sizing: border-box;\r\n          box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\r\n          color: #fff;\r\n          font-size: 14px;\r\n          line-height: 20px;\r\n          position: relative;\r\n          text-align: center;\r\n          padding: 5px;\r\n        }\r\n        \r\n        \r\n        \r\n        .btn-yellow[_ngcontent-%COMP%]{\r\n            margin-top: 8px;\r\n            background-color: #FACF37;\r\n            color: #fff;\r\n            font-size: 13px;\r\n            line-height: 30px;\r\n            \r\n            border-radius: 40px;\r\n            text-align: center !important;\r\n            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n        }\r\n        .btn-green[_ngcontent-%COMP%]{\r\n            background-color: #27AE61;\r\n            color: #fff;\r\n            margin: auto;\r\n            font-size: 13px;\r\n            line-height: 30px;\r\n            width: 100px !important;\r\n            border-radius: 20px;\r\n            text-align: center !important;\r\n            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n        }\r\n    \r\n        .btn-green[_ngcontent-%COMP%]:disabled{\r\n            background-color: #C2BEBE;\r\n            color: #313030;\r\n        }\r\n        .btn-yellow[_ngcontent-%COMP%]:disabled{\r\n            background-color: #C2BEBE;\r\n            color: #313030;\r\n        }\r\n    \r\n        .scan-field[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n            display: flex; \r\n            flex-flow: row; \r\n            grid-gap: 10px; \r\n            gap: 10px; \r\n            align-items: center; \r\n            justify-content: flex-start;\r\n        } \r\n        .qr-container[_ngcontent-%COMP%]{\r\n            background-color: #fff;\r\n            left: 0;\r\n            text-align: left;\r\n            padding-right: 3px;\r\n            padding-left: 3px;\r\n            border-radius: 4px;\r\n            width: -webkit-fit-content;\r\n            width: -moz-fit-content;\r\n            width: fit-content;\r\n            height: 20px;\r\n            font-size: 10px;\r\n        }\r\n    \r\n        \r\n    }\r\n    \r\n    @media (min-width: 600px) and (max-width: 900px){\r\n        \r\n        .progress-cantainer[_ngcontent-%COMP%]{\r\n            position: relative; \r\n            width: 500px;\r\n            margin: auto;\r\n        }\r\n        \r\n        .progress-cantainer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n            position: absolute; \r\n            top: 0em; \r\n            font-size: 12px; \r\n            margin: auto;\r\n        }\r\n        \r\n        .mat-progress-bar-fill[_ngcontent-%COMP%]::after {\r\n            background-color: #27AE61;\r\n        }\r\n        \r\n        .mat-progress-bar-buffer[_ngcontent-%COMP%] {\r\n            background: #fff;\r\n        }\r\n        \r\n        \r\n        .mat-select-arrow[_ngcontent-%COMP%] {\r\n            width: 0;\r\n            height: 0;\r\n            border-left: 5px solid transparent;\r\n            border-right: 5px solid transparent;\r\n            border-top: 5px solid;\r\n            margin: 0 4px;\r\n            color: #27AE61;\r\n          }\r\n        \r\n        .mat-progress-bar[_ngcontent-%COMP%] {\r\n            height: 1em !important;\r\n            margin-bottom: 20px;\r\n            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n            border-radius: 20px;\r\n        }\r\n        .content-body[_ngcontent-%COMP%]{\r\n            background-color: #F6F6F6;\r\n            padding: 20px;\r\n            text-align: center;\r\n            margin: auto;\r\n        }\r\n        \r\n        .content-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n            margin-bottom: 10px;\r\n            color: #646262;\r\n        }\r\n        \r\n        .container[_ngcontent-%COMP%]{\r\n            display: flex;\r\n            padding: 30px;\r\n            margin: 20px;\r\n            flex-flow: column wrap ;\r\n            background-color: #fff;\r\n            justify-content: flex-start ;\r\n            align-items: flex-start;\r\n            grid-gap: 10px 20px;\r\n            gap: 10px 20px; \r\n            border-radius: 20px;\r\n            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\r\n        }\r\n        .container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n            align-self: flex-end;\r\n        }\r\n        \r\n        .checkcodes-fields[_ngcontent-%COMP%]{\r\n            display: flex;\r\n            flex-flow: column wrap;\r\n            align-items: flex-start;\r\n            align-content: flex-start;\r\n            grid-gap: 20px;\r\n            gap: 20px;\r\n        }\r\n        \r\n        .scan-field[_ngcontent-%COMP%]{\r\n            display: flex;\r\n            flex-flow: row wrap;\r\n            align-items: center;\r\n            grid-gap: 10px;\r\n            gap: 10px;\r\n        }\r\n        .scan-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n            color: #646262;\r\n        }\r\n        \r\n        .scan-field[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n            display: flex; \r\n            flex-flow: row; \r\n            grid-gap: 10px; \r\n            gap: 10px; \r\n            align-items: center; \r\n            justify-content: flex-start;\r\n        }\r\n        \r\n        .qr-container[_ngcontent-%COMP%]{\r\n            background-color: #fff;\r\n            left: 0;\r\n            text-align: left;\r\n            padding-right: 3px;\r\n            padding-left: 3px;\r\n            border-radius: 4px;\r\n            width: -webkit-fit-content;\r\n            width: -moz-fit-content;\r\n            width: fit-content;\r\n            height: 20px;\r\n            font-size: 10px;\r\n        }\r\n        \r\n        .inputs-container[_ngcontent-%COMP%]{\r\n            display: flex;\r\n            flex-flow: column wrap;\r\n            grid-gap: 10px;\r\n            gap: 10px;\r\n            align-items: flex-start;\r\n        }\r\n        .nfc[_ngcontent-%COMP%]{\r\n            display: flex;\r\n            flex-flow: column wrap;\r\n            grid-gap: 20px;\r\n            gap: 20px;\r\n        }\r\n        .pdv[_ngcontent-%COMP%]{\r\n            display: flex;\r\n            flex-flow: column wrap;\r\n            justify-content: flex-start;\r\n            align-items: flex-start;\r\n            grid-gap: 20px;\r\n            gap: 20px;\r\n        }\r\n        .field[_ngcontent-%COMP%]{\r\n            display: flex;\r\n            flex-flow: row;\r\n            grid-gap: 10px;\r\n            gap: 10px;\r\n            align-items: center;\r\n        }\r\n        .mat-form-field-ripple[_ngcontent-%COMP%] {\r\n            background-color: #27AE61 !important;\r\n        }\r\n        \r\n        \r\n        \r\n        .field[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%]{\r\n            color: #646262;\r\n        }\r\n        \r\n        .field[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n            font-size: 12px;\r\n            color: #313030;\r\n        }\r\n        .field[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]   .mat-select[_ngcontent-%COMP%]{\r\n            font-size: 12px;\r\n            color: #313030;\r\n        }\r\n        \r\n          mat-form-field.mat-focused[_ngcontent-%COMP%]   span.mat-form-field-label-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n            color:#27AE61 !important;\r\n          }\r\n        \r\n        .custom-select[_ngcontent-%COMP%]{\r\n          border-radius: 12px;\r\n          width:170px;\r\n          height: 30px;\r\n          box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\r\n          border: #fff;\r\n        }\r\n        \r\n        .map-container[_ngcontent-%COMP%]{ \r\n        \r\n            width: 500px;\r\n            height: 200px;\r\n            \r\n            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\r\n            \r\n            margin: auto;  \r\n            border-radius: 10px;\r\n             \r\n        }\r\n        .mat-select[_ngcontent-%COMP%]:focus:not(.mat-select-disabled).mat-primary   .mat-select-arrow[_ngcontent-%COMP%] {\r\n            color: #63961C;\r\n        }\r\n         \r\n        \r\n        #map2[_ngcontent-%COMP%] {\r\n            height: 100%;\r\n            border-radius: 10px;\r\n        }\r\n        \r\n        \r\n        .small-video[_ngcontent-%COMP%]{\r\n            max-height: 700px;\r\n            width: 300px;\r\n            -o-object-fit: contain;\r\n               object-fit: contain;\r\n        }\r\n        \r\n        .results[_ngcontent-%COMP%]{\r\n          background-color:#fff;\r\n        }\r\n        \r\n        .action-button[_ngcontent-%COMP%]{\r\n          background-color: #27AE61;\r\n          border-radius: 12px;\r\n          border: 1px solid rgba(27, 31, 35, .15);\r\n          box-sizing: border-box;\r\n          box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\r\n          color: #fff;\r\n          font-size: 14px;\r\n          line-height: 20px;\r\n          position: relative;\r\n          text-align: center;\r\n          width:100px;\r\n          height: 30px;\r\n        }\r\n        .action-buttonShot[_ngcontent-%COMP%]{\r\n          background-color: #27AE61;\r\n          border-radius: 12px;\r\n          border: 1px solid rgba(27, 31, 35, .15);\r\n          box-sizing: border-box;\r\n          box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\r\n          color: #fff;\r\n          font-size: 14px;\r\n          line-height: 20px;\r\n          position: relative;\r\n          text-align: center;\r\n          padding: 5px;\r\n        }\r\n        \r\n        \r\n        \r\n        .btn-yellow[_ngcontent-%COMP%]{\r\n            margin-top: 8px;\r\n            background-color: #FACF37;\r\n            color: #fff;\r\n            font-size: 13px;\r\n            line-height: 30px;\r\n            \r\n            border-radius: 40px;\r\n            text-align: center !important;\r\n            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n        }\r\n        .btn-green[_ngcontent-%COMP%]{\r\n            background-color: #27AE61;\r\n            color: #fff;\r\n            margin: auto;\r\n            font-size: 13px;\r\n            line-height: 30px;\r\n            width: 100px !important;\r\n            border-radius: 20px;\r\n            text-align: center !important;\r\n            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n        }\r\n    \r\n        .btn-green[_ngcontent-%COMP%]:disabled{\r\n            background-color: #C2BEBE;\r\n            color: #313030;\r\n        }\r\n        .btn-yellow[_ngcontent-%COMP%]:disabled{\r\n            background-color: #C2BEBE;\r\n            color: #313030;\r\n        }\r\n    \r\n        .scan-field[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n            display: flex; \r\n            flex-flow: row; \r\n            grid-gap: 10px; \r\n            gap: 10px; \r\n            align-items: center; \r\n            justify-content: flex-start;\r\n        } \r\n        .qr-container[_ngcontent-%COMP%]{\r\n            background-color: #fff;\r\n            left: 0;\r\n            text-align: left;\r\n            padding-right: 3px;\r\n            padding-left: 3px;\r\n            border-radius: 4px;\r\n            width: -webkit-fit-content;\r\n            width: -moz-fit-content;\r\n            width: fit-content;\r\n            height: 20px;\r\n            font-size: 10px;\r\n        }\r\n        \r\n    }\r\n    \r\n    @media (min-width: 350px) and (max-width: 599px){\r\n        \r\n        .progress-cantainer[_ngcontent-%COMP%]{\r\n            position: relative; \r\n            width: 300px;\r\n            margin: auto;\r\n        }\r\n        \r\n        .progress-cantainer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n            position: absolute; \r\n            top: 0em; \r\n            font-size: 10px; \r\n            margin: auto;\r\n        }\r\n        \r\n        .mat-progress-bar-fill[_ngcontent-%COMP%]::after {\r\n            background-color: #27AE61;\r\n        }\r\n        \r\n        .mat-progress-bar-buffer[_ngcontent-%COMP%] {\r\n            background: #fff;\r\n        }\r\n        \r\n        \r\n        .mat-select-arrow[_ngcontent-%COMP%] {\r\n            width: 0;\r\n            height: 0;\r\n            border-left: 5px solid transparent;\r\n            border-right: 5px solid transparent;\r\n            border-top: 5px solid;\r\n            margin: 0 4px;\r\n            color: #27AE61;\r\n          }\r\n        \r\n        .mat-progress-bar[_ngcontent-%COMP%] {\r\n            height: 0.5em !important;\r\n            margin-bottom: 20px;\r\n            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n            border-radius: 20px;\r\n        }\r\n        .content-body[_ngcontent-%COMP%]{\r\n            background-color: #F6F6F6;\r\n            padding: 6px;\r\n            text-align: center;\r\n            margin: auto;\r\n        }\r\n        \r\n        .content-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n            margin-bottom: 10px;\r\n            color: #646262;\r\n            font-size: 12px;\r\n        }\r\n        \r\n        .container[_ngcontent-%COMP%]{\r\n            display: flex;\r\n            padding: 15px;\r\n            margin: 8px;\r\n            flex-flow: column wrap ;\r\n            background-color: #fff;\r\n            justify-content: flex-start ;\r\n            align-items: flex-start;\r\n            grid-gap: 10px 20px;\r\n            gap: 10px 20px; \r\n            border-radius: 15px;\r\n            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\r\n        }\r\n        .container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n            align-self: flex-end;\r\n        }\r\n        \r\n        .checkcodes-fields[_ngcontent-%COMP%]{\r\n            display: flex;\r\n            flex-flow: column wrap;\r\n            align-items: flex-start;\r\n            justify-content: flex-start;\r\n            grid-gap: 20px;\r\n            gap: 20px;\r\n        }\r\n        \r\n        .scan-field[_ngcontent-%COMP%]{\r\n            display: flex;\r\n            flex-flow: column wrap;\r\n            justify-content: flex-start;\r\n            align-content: flex-start;\r\n            grid-gap: 4px;\r\n            gap: 4px;\r\n        }\r\n        .scan-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n            color: #646262;\r\n            align-self: flex-start;\r\n        }\r\n        .input-label[_ngcontent-%COMP%]{\r\n            font-size: 13px;\r\n        }\r\n        .scan-field[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n            display: flex; \r\n            flex-flow: row; \r\n            grid-gap: 10px; \r\n            gap: 10px; \r\n            align-items: center; \r\n            justify-content: flex-start;\r\n        }\r\n        \r\n        .qr-container[_ngcontent-%COMP%]{\r\n            background-color: #fff;\r\n            left: 0;\r\n            text-align: left;\r\n            padding-right: 3px;\r\n            padding-left: 3px;\r\n            border-radius: 4px;\r\n            width: -webkit-fit-content;\r\n            width: -moz-fit-content;\r\n            width: fit-content;\r\n            height: 20px;\r\n            font-size: 10px;\r\n        }\r\n        \r\n        .inputs-container[_ngcontent-%COMP%]{\r\n            display: flex;\r\n            flex-flow: column wrap;\r\n            grid-gap: 10px;\r\n            gap: 10px;\r\n            align-items: flex-start;\r\n        }\r\n        .nfc[_ngcontent-%COMP%]{\r\n            display: flex;\r\n            flex-flow: column wrap;\r\n            grid-gap: 20px;\r\n            gap: 20px;\r\n        }\r\n        .pdv[_ngcontent-%COMP%]{\r\n            display: flex;\r\n            flex-flow: column wrap;\r\n            justify-content: flex-start;\r\n            align-items: flex-start;\r\n            grid-gap: 20px;\r\n            gap: 20px;\r\n        }\r\n        .field[_ngcontent-%COMP%]{\r\n            display: flex;\r\n            flex-flow: row;\r\n            grid-gap: 10px;\r\n            gap: 10px;\r\n            align-items: center;\r\n        }\r\n    \r\n        .field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n            align-self: center;\r\n        }\r\n    \r\n        .mat-form-field-ripple[_ngcontent-%COMP%] {\r\n            background-color: #27AE61 !important;\r\n        }\r\n        \r\n        .field[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%]{\r\n            color: #646262;\r\n        }\r\n        \r\n        .field[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n            font-size: 12px;\r\n            color: #313030;\r\n        }\r\n    \r\n        .field[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]   .mat-select[_ngcontent-%COMP%]{\r\n            font-size: 12px;\r\n            color: #313030;\r\n        }\r\n        \r\n        mat-form-field.mat-focused[_ngcontent-%COMP%]   span.mat-form-field-label-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n        color:#27AE61 !important;\r\n        }\r\n        \r\n        .custom-select[_ngcontent-%COMP%]{\r\n          border-radius: 12px;\r\n          width:170px;\r\n          height: 30px;\r\n          box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\r\n          border: #fff;\r\n        }\r\n        \r\n        .map-container[_ngcontent-%COMP%]{ \r\n        \r\n            width: 300px;\r\n            height: 100px;\r\n            \r\n            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\r\n            \r\n            margin: auto;  \r\n            border-radius: 6px;\r\n             \r\n        }\r\n        .mat-select[_ngcontent-%COMP%]:focus:not(.mat-select-disabled).mat-primary   .mat-select-arrow[_ngcontent-%COMP%] {\r\n            color: #63961C;\r\n        }\r\n         \r\n        \r\n        #map2[_ngcontent-%COMP%] {\r\n            height: 100%;\r\n            border-radius: 6px;\r\n        }\r\n        \r\n        \r\n        .small-video[_ngcontent-%COMP%]{\r\n            max-height: 600px;\r\n            width: 300px;\r\n            -o-object-fit: contain;\r\n               object-fit: contain;\r\n            border-radius: 10px;\r\n        }\r\n        \r\n        .results[_ngcontent-%COMP%]{\r\n          background-color:bor#DADADA;\r\n        }\r\n        \r\n        .action-button[_ngcontent-%COMP%]{\r\n          background-color: #27AE61;\r\n          border-radius: 12px;\r\n          border: 1px solid rgba(27, 31, 35, .15);\r\n          box-sizing: border-box;\r\n          box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\r\n          color: #fff;\r\n          font-size: 14px;\r\n          line-height: 20px;\r\n          position: relative;\r\n          text-align: center;\r\n          width:100px;\r\n          height: 30px;\r\n        }\r\n        .action-buttonShot[_ngcontent-%COMP%]{\r\n          background-color: #27AE61;\r\n          border-radius: 12px;\r\n          border: 1px solid rgba(27, 31, 35, .15);\r\n          box-sizing: border-box;\r\n          box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\r\n          color: #fff;\r\n          font-size: 14px;\r\n          line-height: 20px;\r\n          position: relative;\r\n          text-align: center;\r\n          padding: 5px;\r\n        }\r\n        \r\n        \r\n        \r\n        .btn-yellow[_ngcontent-%COMP%]{\r\n            margin-top: 8px;\r\n            background-color: #FACF37;\r\n            color: #fff;\r\n            font-size: 11px;\r\n            line-height: 20px;\r\n            \r\n            border-radius: 40px;\r\n            text-align: center !important;\r\n            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n        }\r\n        .btn-yellow[_ngcontent-%COMP%]:disabled{\r\n            background-color: #C2BEBE;\r\n            color: #313030;\r\n        }\r\n    \r\n        .btn-green[_ngcontent-%COMP%]{\r\n            background-color: #27AE61;\r\n            color: #fff;\r\n            font-size: 11px;\r\n            line-height: 20px;\r\n            width: 100px !important;\r\n            border-radius: 20px;\r\n            align-self: flex-start;\r\n            text-align: center !important;\r\n            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n        }\r\n        .btn-green[_ngcontent-%COMP%]:disabled{\r\n            background-color: #C2BEBE;\r\n            color: #313030;\r\n        }\r\n    \r\n        \r\n        \r\n    }\r\n    \r\n    @media (min-width: 200px) and (max-width: 350px){\r\n        \r\n        .progress-cantainer[_ngcontent-%COMP%]{\r\n            position: relative; \r\n            width: 200px;\r\n            margin: auto;\r\n        }\r\n        \r\n        .progress-cantainer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n            position: absolute; \r\n            top: 0em; \r\n            font-size: 10px; \r\n            margin: auto;\r\n        }\r\n        \r\n        .mat-progress-bar-fill[_ngcontent-%COMP%]::after {\r\n            background-color: #27AE61;\r\n        }\r\n        \r\n        .mat-progress-bar-buffer[_ngcontent-%COMP%] {\r\n            background: #fff;\r\n        }\r\n        \r\n        \r\n        .mat-select-arrow[_ngcontent-%COMP%] {\r\n            width: 0;\r\n            height: 0;\r\n            border-left: 5px solid transparent;\r\n            border-right: 5px solid transparent;\r\n            border-top: 5px solid;\r\n            margin: 0 4px;\r\n            color: #27AE61;\r\n          }\r\n        \r\n        .mat-progress-bar[_ngcontent-%COMP%] {\r\n            height: 0.5em !important;\r\n            margin-bottom: 20px;\r\n            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n            border-radius: 20px;\r\n        }\r\n        .content-body[_ngcontent-%COMP%]{\r\n            background-color: #F6F6F6;\r\n            padding: 8px;\r\n            text-align: center;\r\n            margin: auto;\r\n        }\r\n        \r\n        .content-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n            margin-bottom: 10px;\r\n            color: #646262;\r\n            font-size: 12px;\r\n        }\r\n        \r\n        .container[_ngcontent-%COMP%]{\r\n            display: flex;\r\n            padding: 10px;\r\n            margin: 8px;\r\n            flex-flow: column wrap ;\r\n            background-color: #fff;\r\n            justify-content: flex-start ;\r\n            align-items: flex-start;\r\n            grid-gap: 10px 20px;\r\n            gap: 10px 20px; \r\n            border-radius: 8px;\r\n            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\r\n        }\r\n        .container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n            align-self: flex-end;\r\n        }\r\n        \r\n        .checkcodes-fields[_ngcontent-%COMP%]{\r\n            display: flex;\r\n            flex-flow: column wrap;\r\n            align-items: flex-start;\r\n            justify-content: flex-start;\r\n            grid-gap: 20px;\r\n            gap: 20px;\r\n        }\r\n        \r\n        .scan-field[_ngcontent-%COMP%]{\r\n            display: flex;\r\n            flex-flow: column wrap;\r\n            justify-content: flex-start;\r\n            align-content: flex-start;\r\n            align-items: flex-start;\r\n            grid-gap: 4px;\r\n            gap: 4px;\r\n        }\r\n        .scan-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n            color: #646262;\r\n            align-self: flex-start;\r\n        }\r\n        .input-label[_ngcontent-%COMP%]{\r\n            font-size: 13px;\r\n        }\r\n        .scan-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n            align-self: flex-start;\r\n        }\r\n        \r\n        \r\n        .inputs-container[_ngcontent-%COMP%]{\r\n            display: flex;\r\n            flex-flow: column wrap;\r\n            grid-gap: 10px;\r\n            gap: 10px;\r\n            align-items: flex-start;\r\n        }\r\n        .nfc[_ngcontent-%COMP%]{\r\n            display: flex;\r\n            flex-flow: column wrap;\r\n            grid-gap: 20px;\r\n            gap: 20px;\r\n        }\r\n        .pdv[_ngcontent-%COMP%]{\r\n            display: flex;\r\n            flex-flow: column wrap;\r\n            justify-content: flex-start;\r\n            align-items: flex-start;\r\n            grid-gap: 20px;\r\n            gap: 20px;\r\n        }\r\n        .field[_ngcontent-%COMP%]{\r\n            display: flex;\r\n            flex-flow: row;\r\n            grid-gap: 10px;\r\n            gap: 10px;\r\n            align-items: center;\r\n        }\r\n        .mat-form-field-ripple[_ngcontent-%COMP%] {\r\n            background-color: #27AE61 !important;\r\n        }\r\n        \r\n        .scan-field[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n            display: flex; \r\n            flex-flow: row; \r\n            grid-gap: 10px; \r\n            gap: 10px; \r\n            align-items: center; \r\n            justify-content: flex-start;\r\n        } \r\n        .qr-container[_ngcontent-%COMP%]{\r\n            background-color: #fff;\r\n            left: 0;\r\n            text-align: left;\r\n            padding-right: 3px;\r\n            padding-left: 3px;\r\n            border-radius: 4px;\r\n            width: -webkit-fit-content;\r\n            width: -moz-fit-content;\r\n            width: fit-content;\r\n            height: 20px;\r\n            font-size: 10px;\r\n        }\r\n        \r\n        .field[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%]{\r\n            color: #646262;\r\n        }\r\n        \r\n        .field[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{\r\n            width: 150px;\r\n        }\r\n        .field[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n            font-size: 12px;\r\n            color: #313030;\r\n        }\r\n    \r\n        .field[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]   .mat-select[_ngcontent-%COMP%]{\r\n            font-size: 10px;\r\n            color: #313030;\r\n        }\r\n        \r\n          mat-form-field.mat-focused[_ngcontent-%COMP%]   span.mat-form-field-label-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n            color:#27AE61 !important;\r\n          }\r\n        \r\n        .custom-select[_ngcontent-%COMP%]{\r\n          border-radius: 12px;\r\n          width:170px;\r\n          height: 30px;\r\n          box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\r\n          border: #fff;\r\n        }\r\n        \r\n        .map-container[_ngcontent-%COMP%]{ \r\n        \r\n            width: 250px;\r\n            height: 100px;\r\n            \r\n            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\r\n            \r\n            margin: auto;  \r\n            border-radius: 3px;\r\n             \r\n        }\r\n        .mat-select[_ngcontent-%COMP%]:focus:not(.mat-select-disabled).mat-primary   .mat-select-arrow[_ngcontent-%COMP%] {\r\n            color: #63961C;\r\n        }\r\n         \r\n        \r\n        #map2[_ngcontent-%COMP%] {\r\n            height: 100%;\r\n            border-radius: 3px;\r\n        }\r\n        \r\n        \r\n        .small-video[_ngcontent-%COMP%]{\r\n            max-height: 600px;\r\n            width: 200px;\r\n            -o-object-fit: contain;\r\n               object-fit: contain;\r\n        }\r\n        \r\n        .results[_ngcontent-%COMP%]{\r\n          background-color:#fff;\r\n        }\r\n        \r\n        .action-button[_ngcontent-%COMP%]{\r\n          background-color: #27AE61;\r\n          border-radius: 12px;\r\n          border: 1px solid rgba(27, 31, 35, .15);\r\n          box-sizing: border-box;\r\n          box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\r\n          color: #fff;\r\n          font-size: 14px;\r\n          line-height: 20px;\r\n          position: relative;\r\n          text-align: center;\r\n          width:100px;\r\n          height: 30px;\r\n        }\r\n    \r\n        .action-buttonShot[_ngcontent-%COMP%]{\r\n          background-color: #27AE61;\r\n          border-radius: 12px;\r\n          border: 1px solid rgba(27, 31, 35, .15);\r\n          box-sizing: border-box;\r\n          box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\r\n          color: #fff;\r\n          font-size: 14px;\r\n          line-height: 20px;\r\n          position: relative;\r\n          text-align: center;\r\n          padding: 5px;\r\n        }\r\n        \r\n        \r\n        \r\n        .btn-yellow[_ngcontent-%COMP%]{\r\n            margin-top: 8px;\r\n            background-color: #FACF37;\r\n            color: #fff;\r\n            font-size: 11px;\r\n            line-height: 20px;\r\n            \r\n            border-radius: 40px;\r\n            text-align: center !important;\r\n            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n        }\r\n        .btn-yellow[_ngcontent-%COMP%]:disabled{\r\n            background-color: #C2BEBE;\r\n            color: #313030;\r\n        }\r\n    \r\n        .btn-green[_ngcontent-%COMP%]{\r\n            background-color: #27AE61;\r\n            color: #fff;\r\n            font-size: 11px;\r\n            line-height: 20px;\r\n            width: 100px !important;\r\n            border-radius: 20px;\r\n            align-self: flex-start;\r\n            text-align: center !important;\r\n            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\r\n        }\r\n        .btn-green[_ngcontent-%COMP%]:disabled{\r\n            background-color: #C2BEBE;\r\n            color: #313030;\r\n        }\r\n    \r\n        .field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n            align-self: center;\r\n        }\r\n    \r\n        .Scan-container[_ngcontent-%COMP%]{\r\n            width: 200px;\r\n            height: 200px;\r\n            border-radius: 8px;\r\n            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\r\n        }\r\n        .camera[_ngcontent-%COMP%]{\r\n            width: 200px;\r\n            border-radius: 8px;\r\n        }\r\n        \r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1jbGllbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0lBR0k7UUFDSSxhQUFhO1FBQ2IsY0FBYztRQUNkLDJCQUEyQjtRQUMzQix1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsZUFBZTtRQUNmLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSx5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7OztJQUdBO1FBQ0ksUUFBUTtRQUNSLFNBQVM7UUFDVCxrQ0FBa0M7UUFDbEMsbUNBQW1DO1FBQ25DLHFCQUFxQjtRQUNyQixhQUFhO1FBQ2IsY0FBYztNQUNoQjs7SUFFRjtRQUNJLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIscUZBQXFGO1FBQ3JGLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0kseUJBQXlCO1FBQ3pCLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsY0FBYztJQUNsQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixhQUFhO1FBQ2IsWUFBWTtRQUNaLHVCQUF1QjtRQUN2QixzQkFBc0I7UUFDdEIsNEJBQTRCO1FBQzVCLG1CQUFtQjtRQUNuQixtQkFBYztRQUFkLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsbUZBQW1GO0lBQ3ZGO0lBQ0E7UUFDSSxvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixjQUFTO1FBQVQsU0FBUztJQUNiOztJQUVBO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsY0FBUztRQUFULFNBQVM7SUFDYjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO01BQ0UsaURBQWlEO0lBQ25EOztJQUVBO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixjQUFTO1FBQVQsU0FBUztRQUNULHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixjQUFTO1FBQVQsU0FBUztJQUNiO0lBQ0E7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLDJCQUEyQjtRQUMzQix1QkFBdUI7UUFDdkIsY0FBUztRQUFULFNBQVM7SUFDYjtJQUNBO1FBQ0ksYUFBYTtRQUNiLGNBQWM7UUFDZCxjQUFTO1FBQVQsU0FBUztRQUNULG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksb0NBQW9DO0lBQ3hDOztJQUVBO1FBQ0ksYUFBYTtRQUNiLGNBQWM7UUFDZCxjQUFTO1FBQVQsU0FBUztRQUNULG1CQUFtQjtRQUNuQiwyQkFBMkI7SUFDL0I7O0lBRUE7UUFDSSxzQkFBc0I7UUFDdEIsT0FBTztRQUNQLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQiwwQkFBa0I7UUFBbEIsdUJBQWtCO1FBQWxCLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsY0FBYztJQUNsQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGNBQWM7SUFDbEI7O01BRUU7UUFDRSx3QkFBd0I7TUFDMUI7O0lBRUY7TUFDRSxtQkFBbUI7TUFDbkIsV0FBVztNQUNYLFlBQVk7TUFDWix3Q0FBd0M7TUFDeEMsWUFBWTtJQUNkOztJQUVBOztRQUVJLFlBQVk7UUFDWixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLG1GQUFtRjtRQUNuRjtrQ0FDMEI7UUFDMUIsWUFBWTtRQUNaLG1CQUFtQjs7SUFFdkI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7OztJQUdBO1FBQ0ksWUFBWTtRQUNaLG1CQUFtQjtJQUN2Qjs7O0lBR0E7UUFDSSxpQkFBaUI7UUFDakIsWUFBWTtRQUNaLHNCQUFtQjtXQUFuQixtQkFBbUI7SUFDdkI7O0lBRUE7TUFDRSxxQkFBcUI7SUFDdkI7O0lBRUE7TUFDRSx5QkFBeUI7TUFDekIsbUJBQW1CO01BQ25CLHVDQUF1QztNQUN2QyxzQkFBc0I7TUFDdEIsd0NBQXdDO01BQ3hDLFdBQVc7TUFDWCxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixrQkFBa0I7TUFDbEIsV0FBVztNQUNYLFlBQVk7SUFDZDtJQUNBO01BQ0UseUJBQXlCO01BQ3pCLG1CQUFtQjtNQUNuQix1Q0FBdUM7TUFDdkMsc0JBQXNCO01BQ3RCLHdDQUF3QztNQUN4QyxXQUFXO01BQ1gsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLFlBQVk7SUFDZDs7OztJQUlBO1FBQ0ksZUFBZTtRQUNmLHlCQUF5QjtRQUN6QixXQUFXO1FBQ1gsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQiw2QkFBNkI7UUFDN0IsbUJBQW1CO1FBQ25CLDZCQUE2QjtRQUM3QixxRkFBcUY7SUFDekY7O0lBRUE7UUFDSSx5QkFBeUI7UUFDekIsY0FBYztJQUNsQjs7SUFFQTtRQUNJLHlCQUF5QjtRQUN6QixXQUFXO1FBQ1gsWUFBWTtRQUNaLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQiw2QkFBNkI7UUFDN0IscUZBQXFGO0lBQ3pGOztJQUVBO1FBQ0kseUJBQXlCO1FBQ3pCLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsY0FBYztRQUNkLGNBQVM7UUFBVCxTQUFTO1FBQ1QsbUJBQW1CO1FBQ25CLDJCQUEyQjtJQUMvQjtJQUNBO1FBQ0ksc0JBQXNCO1FBQ3RCLE9BQU87UUFDUCxnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsMEJBQWtCO1FBQWxCLHVCQUFrQjtRQUFsQixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLGVBQWU7SUFDbkI7O0lBRUE7Ozs7Ozs7Ozs7O09BV0c7SUFDSDs7SUFFQTs7UUFFSTtZQUNJLGtCQUFrQjtZQUNsQixZQUFZO1lBQ1osWUFBWTtRQUNoQjs7UUFFQTtZQUNJLGtCQUFrQjtZQUNsQixRQUFRO1lBQ1IsZUFBZTtZQUNmLFlBQVk7UUFDaEI7O1FBRUE7WUFDSSx5QkFBeUI7UUFDN0I7O1FBRUE7WUFDSSxnQkFBZ0I7UUFDcEI7OztRQUdBO1lBQ0ksUUFBUTtZQUNSLFNBQVM7WUFDVCxrQ0FBa0M7WUFDbEMsbUNBQW1DO1lBQ25DLHFCQUFxQjtZQUNyQixhQUFhO1lBQ2IsY0FBYztVQUNoQjs7UUFFRjtZQUNJLHNCQUFzQjtZQUN0QixtQkFBbUI7WUFDbkIscUZBQXFGO1lBQ3JGLG1CQUFtQjtRQUN2QjtRQUNBO1lBQ0kseUJBQXlCO1lBQ3pCLGFBQWE7WUFDYixrQkFBa0I7WUFDbEIsWUFBWTtRQUNoQjs7UUFFQTtZQUNJLG1CQUFtQjtZQUNuQixjQUFjO1FBQ2xCOztRQUVBO1lBQ0ksYUFBYTtZQUNiLGFBQWE7WUFDYixZQUFZO1lBQ1osdUJBQXVCO1lBQ3ZCLHNCQUFzQjtZQUN0Qiw0QkFBNEI7WUFDNUIsbUJBQW1CO1lBQ25CLG1CQUFjO1lBQWQsY0FBYztZQUNkLG1CQUFtQjtZQUNuQixtRkFBbUY7UUFDdkY7UUFDQTtZQUNJLG9CQUFvQjtRQUN4Qjs7UUFFQTtZQUNJLGFBQWE7WUFDYixtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLGNBQVM7WUFBVCxTQUFTO1FBQ2I7O1FBRUE7WUFDSSxhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLG1CQUFtQjtZQUNuQixjQUFTO1lBQVQsU0FBUztRQUNiO1FBQ0E7WUFDSSxjQUFjO1FBQ2xCO1FBQ0E7VUFDRSxpREFBaUQ7UUFDbkQ7O1FBRUE7WUFDSSxhQUFhO1lBQ2IsY0FBYztZQUNkLGNBQVM7WUFBVCxTQUFTO1lBQ1QsbUJBQW1CO1lBQ25CLDJCQUEyQjtRQUMvQjs7UUFFQTtZQUNJLHNCQUFzQjtZQUN0QixPQUFPO1lBQ1AsZ0JBQWdCO1lBQ2hCLGtCQUFrQjtZQUNsQixpQkFBaUI7WUFDakIsa0JBQWtCO1lBQ2xCLDBCQUFrQjtZQUFsQix1QkFBa0I7WUFBbEIsa0JBQWtCO1lBQ2xCLFlBQVk7WUFDWixlQUFlO1FBQ25CO1FBQ0E7WUFDSSxhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLGNBQVM7WUFBVCxTQUFTO1lBQ1QsdUJBQXVCO1FBQzNCO1FBQ0E7WUFDSSxhQUFhO1lBQ2Isc0JBQXNCO1lBQ3RCLGNBQVM7WUFBVCxTQUFTO1FBQ2I7UUFDQTtZQUNJLGFBQWE7WUFDYixzQkFBc0I7WUFDdEIsMkJBQTJCO1lBQzNCLHVCQUF1QjtZQUN2QixjQUFTO1lBQVQsU0FBUztRQUNiO1FBQ0E7WUFDSSxhQUFhO1lBQ2IsY0FBYztZQUNkLGNBQVM7WUFBVCxTQUFTO1lBQ1QsbUJBQW1CO1FBQ3ZCO1FBQ0E7WUFDSSxvQ0FBb0M7UUFDeEM7Ozs7UUFJQTtZQUNJLGNBQWM7UUFDbEI7O1FBRUE7WUFDSSxlQUFlO1lBQ2YsY0FBYztRQUNsQjtRQUNBO1lBQ0ksZUFBZTtZQUNmLGNBQWM7UUFDbEI7O1VBRUU7WUFDRSx3QkFBd0I7VUFDMUI7O1FBRUY7VUFDRSxtQkFBbUI7VUFDbkIsV0FBVztVQUNYLFlBQVk7VUFDWix3Q0FBd0M7VUFDeEMsWUFBWTtRQUNkOztRQUVBOztZQUVJLFlBQVk7WUFDWixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLG1GQUFtRjtZQUNuRjtzQ0FDMEI7WUFDMUIsWUFBWTtZQUNaLG1CQUFtQjs7UUFFdkI7UUFDQTtZQUNJLGNBQWM7UUFDbEI7OztRQUdBO1lBQ0ksWUFBWTtZQUNaLG1CQUFtQjtRQUN2Qjs7O1FBR0E7WUFDSSxpQkFBaUI7WUFDakIsWUFBWTtZQUNaLHNCQUFtQjtlQUFuQixtQkFBbUI7UUFDdkI7O1FBRUE7VUFDRSxxQkFBcUI7UUFDdkI7O1FBRUE7VUFDRSx5QkFBeUI7VUFDekIsbUJBQW1CO1VBQ25CLHVDQUF1QztVQUN2QyxzQkFBc0I7VUFDdEIsd0NBQXdDO1VBQ3hDLFdBQVc7VUFDWCxlQUFlO1VBQ2YsaUJBQWlCO1VBQ2pCLGtCQUFrQjtVQUNsQixrQkFBa0I7VUFDbEIsV0FBVztVQUNYLFlBQVk7UUFDZDtRQUNBO1VBQ0UseUJBQXlCO1VBQ3pCLG1CQUFtQjtVQUNuQix1Q0FBdUM7VUFDdkMsc0JBQXNCO1VBQ3RCLHdDQUF3QztVQUN4QyxXQUFXO1VBQ1gsZUFBZTtVQUNmLGlCQUFpQjtVQUNqQixrQkFBa0I7VUFDbEIsa0JBQWtCO1VBQ2xCLFlBQVk7UUFDZDs7OztRQUlBO1lBQ0ksZUFBZTtZQUNmLHlCQUF5QjtZQUN6QixXQUFXO1lBQ1gsZUFBZTtZQUNmLGlCQUFpQjtZQUNqQiw2QkFBNkI7WUFDN0IsbUJBQW1CO1lBQ25CLDZCQUE2QjtZQUM3QixxRkFBcUY7UUFDekY7UUFDQTtZQUNJLHlCQUF5QjtZQUN6QixXQUFXO1lBQ1gsWUFBWTtZQUNaLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsdUJBQXVCO1lBQ3ZCLG1CQUFtQjtZQUNuQiw2QkFBNkI7WUFDN0IscUZBQXFGO1FBQ3pGOztRQUVBO1lBQ0kseUJBQXlCO1lBQ3pCLGNBQWM7UUFDbEI7UUFDQTtZQUNJLHlCQUF5QjtZQUN6QixjQUFjO1FBQ2xCOztRQUVBO1lBQ0ksYUFBYTtZQUNiLGNBQWM7WUFDZCxjQUFTO1lBQVQsU0FBUztZQUNULG1CQUFtQjtZQUNuQiwyQkFBMkI7UUFDL0I7UUFDQTtZQUNJLHNCQUFzQjtZQUN0QixPQUFPO1lBQ1AsZ0JBQWdCO1lBQ2hCLGtCQUFrQjtZQUNsQixpQkFBaUI7WUFDakIsa0JBQWtCO1lBQ2xCLDBCQUFrQjtZQUFsQix1QkFBa0I7WUFBbEIsa0JBQWtCO1lBQ2xCLFlBQVk7WUFDWixlQUFlO1FBQ25COzs7SUFHSjs7SUFFQTs7UUFFSTtZQUNJLGtCQUFrQjtZQUNsQixZQUFZO1lBQ1osWUFBWTtRQUNoQjs7UUFFQTtZQUNJLGtCQUFrQjtZQUNsQixRQUFRO1lBQ1IsZUFBZTtZQUNmLFlBQVk7UUFDaEI7O1FBRUE7WUFDSSx5QkFBeUI7UUFDN0I7O1FBRUE7WUFDSSxnQkFBZ0I7UUFDcEI7OztRQUdBO1lBQ0ksUUFBUTtZQUNSLFNBQVM7WUFDVCxrQ0FBa0M7WUFDbEMsbUNBQW1DO1lBQ25DLHFCQUFxQjtZQUNyQixhQUFhO1lBQ2IsY0FBYztVQUNoQjs7UUFFRjtZQUNJLHNCQUFzQjtZQUN0QixtQkFBbUI7WUFDbkIscUZBQXFGO1lBQ3JGLG1CQUFtQjtRQUN2QjtRQUNBO1lBQ0kseUJBQXlCO1lBQ3pCLGFBQWE7WUFDYixrQkFBa0I7WUFDbEIsWUFBWTtRQUNoQjs7UUFFQTtZQUNJLG1CQUFtQjtZQUNuQixjQUFjO1FBQ2xCOztRQUVBO1lBQ0ksYUFBYTtZQUNiLGFBQWE7WUFDYixZQUFZO1lBQ1osdUJBQXVCO1lBQ3ZCLHNCQUFzQjtZQUN0Qiw0QkFBNEI7WUFDNUIsdUJBQXVCO1lBQ3ZCLG1CQUFjO1lBQWQsY0FBYztZQUNkLG1CQUFtQjtZQUNuQixtRkFBbUY7UUFDdkY7UUFDQTtZQUNJLG9CQUFvQjtRQUN4Qjs7UUFFQTtZQUNJLGFBQWE7WUFDYixzQkFBc0I7WUFDdEIsdUJBQXVCO1lBQ3ZCLHlCQUF5QjtZQUN6QixjQUFTO1lBQVQsU0FBUztRQUNiOztRQUVBO1lBQ0ksYUFBYTtZQUNiLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsY0FBUztZQUFULFNBQVM7UUFDYjtRQUNBO1lBQ0ksY0FBYztRQUNsQjs7UUFFQTtZQUNJLGFBQWE7WUFDYixjQUFjO1lBQ2QsY0FBUztZQUFULFNBQVM7WUFDVCxtQkFBbUI7WUFDbkIsMkJBQTJCO1FBQy9COztRQUVBO1lBQ0ksc0JBQXNCO1lBQ3RCLE9BQU87WUFDUCxnQkFBZ0I7WUFDaEIsa0JBQWtCO1lBQ2xCLGlCQUFpQjtZQUNqQixrQkFBa0I7WUFDbEIsMEJBQWtCO1lBQWxCLHVCQUFrQjtZQUFsQixrQkFBa0I7WUFDbEIsWUFBWTtZQUNaLGVBQWU7UUFDbkI7O1FBRUE7WUFDSSxhQUFhO1lBQ2Isc0JBQXNCO1lBQ3RCLGNBQVM7WUFBVCxTQUFTO1lBQ1QsdUJBQXVCO1FBQzNCO1FBQ0E7WUFDSSxhQUFhO1lBQ2Isc0JBQXNCO1lBQ3RCLGNBQVM7WUFBVCxTQUFTO1FBQ2I7UUFDQTtZQUNJLGFBQWE7WUFDYixzQkFBc0I7WUFDdEIsMkJBQTJCO1lBQzNCLHVCQUF1QjtZQUN2QixjQUFTO1lBQVQsU0FBUztRQUNiO1FBQ0E7WUFDSSxhQUFhO1lBQ2IsY0FBYztZQUNkLGNBQVM7WUFBVCxTQUFTO1lBQ1QsbUJBQW1CO1FBQ3ZCO1FBQ0E7WUFDSSxvQ0FBb0M7UUFDeEM7Ozs7UUFJQTtZQUNJLGNBQWM7UUFDbEI7O1FBRUE7WUFDSSxlQUFlO1lBQ2YsY0FBYztRQUNsQjtRQUNBO1lBQ0ksZUFBZTtZQUNmLGNBQWM7UUFDbEI7O1VBRUU7WUFDRSx3QkFBd0I7VUFDMUI7O1FBRUY7VUFDRSxtQkFBbUI7VUFDbkIsV0FBVztVQUNYLFlBQVk7VUFDWix3Q0FBd0M7VUFDeEMsWUFBWTtRQUNkOztRQUVBOztZQUVJLFlBQVk7WUFDWixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLG1GQUFtRjtZQUNuRjtzQ0FDMEI7WUFDMUIsWUFBWTtZQUNaLG1CQUFtQjs7UUFFdkI7UUFDQTtZQUNJLGNBQWM7UUFDbEI7OztRQUdBO1lBQ0ksWUFBWTtZQUNaLG1CQUFtQjtRQUN2Qjs7O1FBR0E7WUFDSSxpQkFBaUI7WUFDakIsWUFBWTtZQUNaLHNCQUFtQjtlQUFuQixtQkFBbUI7UUFDdkI7O1FBRUE7VUFDRSxxQkFBcUI7UUFDdkI7O1FBRUE7VUFDRSx5QkFBeUI7VUFDekIsbUJBQW1CO1VBQ25CLHVDQUF1QztVQUN2QyxzQkFBc0I7VUFDdEIsd0NBQXdDO1VBQ3hDLFdBQVc7VUFDWCxlQUFlO1VBQ2YsaUJBQWlCO1VBQ2pCLGtCQUFrQjtVQUNsQixrQkFBa0I7VUFDbEIsV0FBVztVQUNYLFlBQVk7UUFDZDtRQUNBO1VBQ0UseUJBQXlCO1VBQ3pCLG1CQUFtQjtVQUNuQix1Q0FBdUM7VUFDdkMsc0JBQXNCO1VBQ3RCLHdDQUF3QztVQUN4QyxXQUFXO1VBQ1gsZUFBZTtVQUNmLGlCQUFpQjtVQUNqQixrQkFBa0I7VUFDbEIsa0JBQWtCO1VBQ2xCLFlBQVk7UUFDZDs7OztRQUlBO1lBQ0ksZUFBZTtZQUNmLHlCQUF5QjtZQUN6QixXQUFXO1lBQ1gsZUFBZTtZQUNmLGlCQUFpQjtZQUNqQiw2QkFBNkI7WUFDN0IsbUJBQW1CO1lBQ25CLDZCQUE2QjtZQUM3QixxRkFBcUY7UUFDekY7UUFDQTtZQUNJLHlCQUF5QjtZQUN6QixXQUFXO1lBQ1gsWUFBWTtZQUNaLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsdUJBQXVCO1lBQ3ZCLG1CQUFtQjtZQUNuQiw2QkFBNkI7WUFDN0IscUZBQXFGO1FBQ3pGOztRQUVBO1lBQ0kseUJBQXlCO1lBQ3pCLGNBQWM7UUFDbEI7UUFDQTtZQUNJLHlCQUF5QjtZQUN6QixjQUFjO1FBQ2xCOztRQUVBO1lBQ0ksYUFBYTtZQUNiLGNBQWM7WUFDZCxjQUFTO1lBQVQsU0FBUztZQUNULG1CQUFtQjtZQUNuQiwyQkFBMkI7UUFDL0I7UUFDQTtZQUNJLHNCQUFzQjtZQUN0QixPQUFPO1lBQ1AsZ0JBQWdCO1lBQ2hCLGtCQUFrQjtZQUNsQixpQkFBaUI7WUFDakIsa0JBQWtCO1lBQ2xCLDBCQUFrQjtZQUFsQix1QkFBa0I7WUFBbEIsa0JBQWtCO1lBQ2xCLFlBQVk7WUFDWixlQUFlO1FBQ25COztJQUVKOztJQUVBOztRQUVJO1lBQ0ksa0JBQWtCO1lBQ2xCLFlBQVk7WUFDWixZQUFZO1FBQ2hCOztRQUVBO1lBQ0ksa0JBQWtCO1lBQ2xCLFFBQVE7WUFDUixlQUFlO1lBQ2YsWUFBWTtRQUNoQjs7UUFFQTtZQUNJLHlCQUF5QjtRQUM3Qjs7UUFFQTtZQUNJLGdCQUFnQjtRQUNwQjs7O1FBR0E7WUFDSSxRQUFRO1lBQ1IsU0FBUztZQUNULGtDQUFrQztZQUNsQyxtQ0FBbUM7WUFDbkMscUJBQXFCO1lBQ3JCLGFBQWE7WUFDYixjQUFjO1VBQ2hCOztRQUVGO1lBQ0ksd0JBQXdCO1lBQ3hCLG1CQUFtQjtZQUNuQixxRkFBcUY7WUFDckYsbUJBQW1CO1FBQ3ZCO1FBQ0E7WUFDSSx5QkFBeUI7WUFDekIsWUFBWTtZQUNaLGtCQUFrQjtZQUNsQixZQUFZO1FBQ2hCOztRQUVBO1lBQ0ksbUJBQW1CO1lBQ25CLGNBQWM7WUFDZCxlQUFlO1FBQ25COztRQUVBO1lBQ0ksYUFBYTtZQUNiLGFBQWE7WUFDYixXQUFXO1lBQ1gsdUJBQXVCO1lBQ3ZCLHNCQUFzQjtZQUN0Qiw0QkFBNEI7WUFDNUIsdUJBQXVCO1lBQ3ZCLG1CQUFjO1lBQWQsY0FBYztZQUNkLG1CQUFtQjtZQUNuQixtRkFBbUY7UUFDdkY7UUFDQTtZQUNJLG9CQUFvQjtRQUN4Qjs7UUFFQTtZQUNJLGFBQWE7WUFDYixzQkFBc0I7WUFDdEIsdUJBQXVCO1lBQ3ZCLDJCQUEyQjtZQUMzQixjQUFTO1lBQVQsU0FBUztRQUNiOztRQUVBO1lBQ0ksYUFBYTtZQUNiLHNCQUFzQjtZQUN0QiwyQkFBMkI7WUFDM0IseUJBQXlCO1lBQ3pCLGFBQVE7WUFBUixRQUFRO1FBQ1o7UUFDQTtZQUNJLGNBQWM7WUFDZCxzQkFBc0I7UUFDMUI7UUFDQTtZQUNJLGVBQWU7UUFDbkI7UUFDQTtZQUNJLGFBQWE7WUFDYixjQUFjO1lBQ2QsY0FBUztZQUFULFNBQVM7WUFDVCxtQkFBbUI7WUFDbkIsMkJBQTJCO1FBQy9COztRQUVBO1lBQ0ksc0JBQXNCO1lBQ3RCLE9BQU87WUFDUCxnQkFBZ0I7WUFDaEIsa0JBQWtCO1lBQ2xCLGlCQUFpQjtZQUNqQixrQkFBa0I7WUFDbEIsMEJBQWtCO1lBQWxCLHVCQUFrQjtZQUFsQixrQkFBa0I7WUFDbEIsWUFBWTtZQUNaLGVBQWU7UUFDbkI7O1FBRUE7WUFDSSxhQUFhO1lBQ2Isc0JBQXNCO1lBQ3RCLGNBQVM7WUFBVCxTQUFTO1lBQ1QsdUJBQXVCO1FBQzNCO1FBQ0E7WUFDSSxhQUFhO1lBQ2Isc0JBQXNCO1lBQ3RCLGNBQVM7WUFBVCxTQUFTO1FBQ2I7UUFDQTtZQUNJLGFBQWE7WUFDYixzQkFBc0I7WUFDdEIsMkJBQTJCO1lBQzNCLHVCQUF1QjtZQUN2QixjQUFTO1lBQVQsU0FBUztRQUNiO1FBQ0E7WUFDSSxhQUFhO1lBQ2IsY0FBYztZQUNkLGNBQVM7WUFBVCxTQUFTO1lBQ1QsbUJBQW1CO1FBQ3ZCOztRQUVBO1lBQ0ksa0JBQWtCO1FBQ3RCOztRQUVBO1lBQ0ksb0NBQW9DO1FBQ3hDOztRQUVBO1lBQ0ksY0FBYztRQUNsQjs7UUFFQTtZQUNJLGVBQWU7WUFDZixjQUFjO1FBQ2xCOztRQUVBO1lBQ0ksZUFBZTtZQUNmLGNBQWM7UUFDbEI7O1FBRUE7UUFDQSx3QkFBd0I7UUFDeEI7O1FBRUE7VUFDRSxtQkFBbUI7VUFDbkIsV0FBVztVQUNYLFlBQVk7VUFDWix3Q0FBd0M7VUFDeEMsWUFBWTtRQUNkOztRQUVBOztZQUVJLFlBQVk7WUFDWixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLG1GQUFtRjtZQUNuRjtzQ0FDMEI7WUFDMUIsWUFBWTtZQUNaLGtCQUFrQjs7UUFFdEI7UUFDQTtZQUNJLGNBQWM7UUFDbEI7OztRQUdBO1lBQ0ksWUFBWTtZQUNaLGtCQUFrQjtRQUN0Qjs7O1FBR0E7WUFDSSxpQkFBaUI7WUFDakIsWUFBWTtZQUNaLHNCQUFtQjtlQUFuQixtQkFBbUI7WUFDbkIsbUJBQW1CO1FBQ3ZCOztRQUVBO1VBQ0UsMkJBQTJCO1FBQzdCOztRQUVBO1VBQ0UseUJBQXlCO1VBQ3pCLG1CQUFtQjtVQUNuQix1Q0FBdUM7VUFDdkMsc0JBQXNCO1VBQ3RCLHdDQUF3QztVQUN4QyxXQUFXO1VBQ1gsZUFBZTtVQUNmLGlCQUFpQjtVQUNqQixrQkFBa0I7VUFDbEIsa0JBQWtCO1VBQ2xCLFdBQVc7VUFDWCxZQUFZO1FBQ2Q7UUFDQTtVQUNFLHlCQUF5QjtVQUN6QixtQkFBbUI7VUFDbkIsdUNBQXVDO1VBQ3ZDLHNCQUFzQjtVQUN0Qix3Q0FBd0M7VUFDeEMsV0FBVztVQUNYLGVBQWU7VUFDZixpQkFBaUI7VUFDakIsa0JBQWtCO1VBQ2xCLGtCQUFrQjtVQUNsQixZQUFZO1FBQ2Q7Ozs7UUFJQTtZQUNJLGVBQWU7WUFDZix5QkFBeUI7WUFDekIsV0FBVztZQUNYLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsNkJBQTZCO1lBQzdCLG1CQUFtQjtZQUNuQiw2QkFBNkI7WUFDN0IscUZBQXFGO1FBQ3pGO1FBQ0E7WUFDSSx5QkFBeUI7WUFDekIsY0FBYztRQUNsQjs7UUFFQTtZQUNJLHlCQUF5QjtZQUN6QixXQUFXO1lBQ1gsZUFBZTtZQUNmLGlCQUFpQjtZQUNqQix1QkFBdUI7WUFDdkIsbUJBQW1CO1lBQ25CLHNCQUFzQjtZQUN0Qiw2QkFBNkI7WUFDN0IscUZBQXFGO1FBQ3pGO1FBQ0E7WUFDSSx5QkFBeUI7WUFDekIsY0FBYztRQUNsQjs7OztJQUlKOztJQUVBOztRQUVJO1lBQ0ksa0JBQWtCO1lBQ2xCLFlBQVk7WUFDWixZQUFZO1FBQ2hCOztRQUVBO1lBQ0ksa0JBQWtCO1lBQ2xCLFFBQVE7WUFDUixlQUFlO1lBQ2YsWUFBWTtRQUNoQjs7UUFFQTtZQUNJLHlCQUF5QjtRQUM3Qjs7UUFFQTtZQUNJLGdCQUFnQjtRQUNwQjs7O1FBR0E7WUFDSSxRQUFRO1lBQ1IsU0FBUztZQUNULGtDQUFrQztZQUNsQyxtQ0FBbUM7WUFDbkMscUJBQXFCO1lBQ3JCLGFBQWE7WUFDYixjQUFjO1VBQ2hCOztRQUVGO1lBQ0ksd0JBQXdCO1lBQ3hCLG1CQUFtQjtZQUNuQixxRkFBcUY7WUFDckYsbUJBQW1CO1FBQ3ZCO1FBQ0E7WUFDSSx5QkFBeUI7WUFDekIsWUFBWTtZQUNaLGtCQUFrQjtZQUNsQixZQUFZO1FBQ2hCOztRQUVBO1lBQ0ksbUJBQW1CO1lBQ25CLGNBQWM7WUFDZCxlQUFlO1FBQ25COztRQUVBO1lBQ0ksYUFBYTtZQUNiLGFBQWE7WUFDYixXQUFXO1lBQ1gsdUJBQXVCO1lBQ3ZCLHNCQUFzQjtZQUN0Qiw0QkFBNEI7WUFDNUIsdUJBQXVCO1lBQ3ZCLG1CQUFjO1lBQWQsY0FBYztZQUNkLGtCQUFrQjtZQUNsQixtRkFBbUY7UUFDdkY7UUFDQTtZQUNJLG9CQUFvQjtRQUN4Qjs7UUFFQTtZQUNJLGFBQWE7WUFDYixzQkFBc0I7WUFDdEIsdUJBQXVCO1lBQ3ZCLDJCQUEyQjtZQUMzQixjQUFTO1lBQVQsU0FBUztRQUNiOztRQUVBO1lBQ0ksYUFBYTtZQUNiLHNCQUFzQjtZQUN0QiwyQkFBMkI7WUFDM0IseUJBQXlCO1lBQ3pCLHVCQUF1QjtZQUN2QixhQUFRO1lBQVIsUUFBUTtRQUNaO1FBQ0E7WUFDSSxjQUFjO1lBQ2Qsc0JBQXNCO1FBQzFCO1FBQ0E7WUFDSSxlQUFlO1FBQ25CO1FBQ0E7WUFDSSxzQkFBc0I7UUFDMUI7OztRQUdBO1lBQ0ksYUFBYTtZQUNiLHNCQUFzQjtZQUN0QixjQUFTO1lBQVQsU0FBUztZQUNULHVCQUF1QjtRQUMzQjtRQUNBO1lBQ0ksYUFBYTtZQUNiLHNCQUFzQjtZQUN0QixjQUFTO1lBQVQsU0FBUztRQUNiO1FBQ0E7WUFDSSxhQUFhO1lBQ2Isc0JBQXNCO1lBQ3RCLDJCQUEyQjtZQUMzQix1QkFBdUI7WUFDdkIsY0FBUztZQUFULFNBQVM7UUFDYjtRQUNBO1lBQ0ksYUFBYTtZQUNiLGNBQWM7WUFDZCxjQUFTO1lBQVQsU0FBUztZQUNULG1CQUFtQjtRQUN2QjtRQUNBO1lBQ0ksb0NBQW9DO1FBQ3hDOztRQUVBO1lBQ0ksYUFBYTtZQUNiLGNBQWM7WUFDZCxjQUFTO1lBQVQsU0FBUztZQUNULG1CQUFtQjtZQUNuQiwyQkFBMkI7UUFDL0I7UUFDQTtZQUNJLHNCQUFzQjtZQUN0QixPQUFPO1lBQ1AsZ0JBQWdCO1lBQ2hCLGtCQUFrQjtZQUNsQixpQkFBaUI7WUFDakIsa0JBQWtCO1lBQ2xCLDBCQUFrQjtZQUFsQix1QkFBa0I7WUFBbEIsa0JBQWtCO1lBQ2xCLFlBQVk7WUFDWixlQUFlO1FBQ25COztRQUVBO1lBQ0ksY0FBYztRQUNsQjs7UUFFQTtZQUNJLFlBQVk7UUFDaEI7UUFDQTtZQUNJLGVBQWU7WUFDZixjQUFjO1FBQ2xCOztRQUVBO1lBQ0ksZUFBZTtZQUNmLGNBQWM7UUFDbEI7O1VBRUU7WUFDRSx3QkFBd0I7VUFDMUI7O1FBRUY7VUFDRSxtQkFBbUI7VUFDbkIsV0FBVztVQUNYLFlBQVk7VUFDWix3Q0FBd0M7VUFDeEMsWUFBWTtRQUNkOztRQUVBOztZQUVJLFlBQVk7WUFDWixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLG1GQUFtRjtZQUNuRjtzQ0FDMEI7WUFDMUIsWUFBWTtZQUNaLGtCQUFrQjs7UUFFdEI7UUFDQTtZQUNJLGNBQWM7UUFDbEI7OztRQUdBO1lBQ0ksWUFBWTtZQUNaLGtCQUFrQjtRQUN0Qjs7O1FBR0E7WUFDSSxpQkFBaUI7WUFDakIsWUFBWTtZQUNaLHNCQUFtQjtlQUFuQixtQkFBbUI7UUFDdkI7O1FBRUE7VUFDRSxxQkFBcUI7UUFDdkI7O1FBRUE7VUFDRSx5QkFBeUI7VUFDekIsbUJBQW1CO1VBQ25CLHVDQUF1QztVQUN2QyxzQkFBc0I7VUFDdEIsd0NBQXdDO1VBQ3hDLFdBQVc7VUFDWCxlQUFlO1VBQ2YsaUJBQWlCO1VBQ2pCLGtCQUFrQjtVQUNsQixrQkFBa0I7VUFDbEIsV0FBVztVQUNYLFlBQVk7UUFDZDs7UUFFQTtVQUNFLHlCQUF5QjtVQUN6QixtQkFBbUI7VUFDbkIsdUNBQXVDO1VBQ3ZDLHNCQUFzQjtVQUN0Qix3Q0FBd0M7VUFDeEMsV0FBVztVQUNYLGVBQWU7VUFDZixpQkFBaUI7VUFDakIsa0JBQWtCO1VBQ2xCLGtCQUFrQjtVQUNsQixZQUFZO1FBQ2Q7Ozs7UUFJQTtZQUNJLGVBQWU7WUFDZix5QkFBeUI7WUFDekIsV0FBVztZQUNYLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsNkJBQTZCO1lBQzdCLG1CQUFtQjtZQUNuQiw2QkFBNkI7WUFDN0IscUZBQXFGO1FBQ3pGO1FBQ0E7WUFDSSx5QkFBeUI7WUFDekIsY0FBYztRQUNsQjs7UUFFQTtZQUNJLHlCQUF5QjtZQUN6QixXQUFXO1lBQ1gsZUFBZTtZQUNmLGlCQUFpQjtZQUNqQix1QkFBdUI7WUFDdkIsbUJBQW1CO1lBQ25CLHNCQUFzQjtZQUN0Qiw2QkFBNkI7WUFDN0IscUZBQXFGO1FBQ3pGO1FBQ0E7WUFDSSx5QkFBeUI7WUFDekIsY0FBYztRQUNsQjs7UUFFQTtZQUNJLGtCQUFrQjtRQUN0Qjs7UUFFQTtZQUNJLFlBQVk7WUFDWixhQUFhO1lBQ2Isa0JBQWtCO1lBQ2xCLG1GQUFtRjtRQUN2RjtRQUNBO1lBQ0ksWUFBWTtZQUNaLGtCQUFrQjtRQUN0Qjs7SUFFSiIsImZpbGUiOiJ1cGRhdGUtY2xpZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KXtcclxuXHJcblxyXG4gICAgLm5mYy1kaXZ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm5mYy1kaXYgc3BhbntcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC5wcm9ncmVzcy1jYW50YWluZXJ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBcclxuICAgICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvZ3Jlc3MtY2FudGFpbmVyIHNwYW57XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgICAgICB0b3A6IDBlbTsgXHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4OyBcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdBRTYxO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLm1hdC1zZWxlY3QtYXJyb3cge1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZDtcclxuICAgICAgICBtYXJnaW46IDAgNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMjdBRTYxO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyIHtcclxuICAgICAgICBoZWlnaHQ6IDFlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCA0cHggLTFweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQtYm9keXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkY2O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICAgIC5jb250ZW50LWJvZHkgaDJ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICMyN0FFNjE7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb250ZW50LWJvZHkgcHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNjQ2MjYyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcCA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiAxMHB4IDIwcHg7IFxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAxcHggM3B4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMXB4IDJweCAwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyIGJ1dHRvbntcclxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNoZWNrY29kZXMtZmllbGRze1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGdhcDogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNjYW4tZmllbGR7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnNjYW4tZmllbGQgbGFiZWx7XHJcbiAgICAgICAgY29sb3I6ICM2NDYyNjI7XHJcbiAgICB9XHJcbiAgICAuU2Nhbi1jb250YWluZXJ7XHJcbiAgICAgIGJveC1zaGFkb3c6IHJnYmEoOTksIDk5LCA5OSwgMC4yKSAwcHggMnB4IDhweCAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pbnB1dHMtY29udGFpbmVye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgICAgICBnYXA6IDYwcHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICB9XHJcbiAgICAubmZje1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAucGR2e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgZ2FwOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmZpZWxke1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3c7XHJcbiAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdBRTYxICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zY2FuLWZpZWxkIGRpdntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgICAgICBmbGV4LWZsb3c6IHJvdzsgXHJcbiAgICAgICAgZ2FwOiAxMHB4OyBcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5xci1jb250YWluZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZpZWxkIG1hdC1sYWJlbHtcclxuICAgICAgICBjb2xvcjogIzY0NjI2MjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZpZWxkIC5tYXQtZm9ybS1maWVsZCBpbnB1dHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICMzMTMwMzA7XHJcbiAgICB9XHJcbiAgICAuZmllbGQgLm1hdC1mb3JtLWZpZWxkIC5tYXQtc2VsZWN0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzMxMzAzMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgICBtYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCBzcGFuLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgbGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiMyN0FFNjEgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAuY3VzdG9tLXNlbGVjdHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgd2lkdGg6MTcwcHg7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgYm94LXNoYWRvdzogcmdiYSgyNywgMzEsIDM1LCAuMSkgMCAxcHggMDtcclxuICAgICAgYm9yZGVyOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWFwLWNvbnRhaW5lcnsgXHJcbiAgICBcclxuICAgICAgICB3aWR0aDogNzAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAvKiBtYXJnaW46IDIwcHggOyAqL1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggMXB4IDNweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDFweCAycHggMHB4O1xyXG4gICAgICAgIC8qIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAgICAgICAgbWFyZ2luOiBhdXRvOyAgXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgXHJcbiAgICB9XHJcbiAgICAubWF0LXNlbGVjdDpmb2N1czpub3QoLm1hdC1zZWxlY3QtZGlzYWJsZWQpLm1hdC1wcmltYXJ5IC5tYXQtc2VsZWN0LWFycm93IHtcclxuICAgICAgICBjb2xvcjogIzYzOTYxQztcclxuICAgIH1cclxuICAgICBcclxuICAgIFxyXG4gICAgI21hcDIge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC5zbWFsbC12aWRlb3tcclxuICAgICAgICBtYXgtaGVpZ2h0OiA3MDBweDtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnJlc3VsdHN7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFjdGlvbi1idXR0b257XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyN0FFNjE7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgLjE1KTtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgYm94LXNoYWRvdzogcmdiYSgyNywgMzEsIDM1LCAuMSkgMCAxcHggMDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB3aWR0aDoxMDBweDtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLmFjdGlvbi1idXR0b25TaG90e1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdBRTYxO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LCAzMSwgMzUsIC4xNSk7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGJveC1zaGFkb3c6IHJnYmEoMjcsIDMxLCAzNSwgLjEpIDAgMXB4IDA7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgLmJ0bi15ZWxsb3d7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUNGMzc7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIC8qIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50OyAqL1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCA0cHggLTFweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJ0bi15ZWxsb3c6ZGlzYWJsZWR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0MyQkVCRTtcclxuICAgICAgICBjb2xvcjogIzMxMzAzMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJ0bi1ncmVlbntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdBRTYxO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMnB4IDRweCAtMXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYnRuLWdyZWVuOmRpc2FibGVke1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDMkJFQkU7XHJcbiAgICAgICAgY29sb3I6ICMzMTMwMzA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zY2FuLWZpZWxkIGRpdntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgICAgICBmbGV4LWZsb3c6IHJvdzsgXHJcbiAgICAgICAgZ2FwOiAxMHB4OyBcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB9IFxyXG4gICAgLnFyLWNvbnRhaW5lcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiAuTkZDLWNvbnRhaW5lcntcclxuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDk5LCA5OSwgOTksIDAuMikgMHB4IDJweCA4cHggMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcGFkZGluZzogNDBweDtcclxuICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcCA7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0IDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGdhcDogMTBweCAyMHB4OyBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB9ICovXHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnByb2dyZXNzLWNhbnRhaW5lcntcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBcclxuICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5wcm9ncmVzcy1jYW50YWluZXIgc3BhbntcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgICAgICAgICAgdG9wOiAwZW07IFxyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7IFxyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3QUU2MTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLm1hdC1zZWxlY3QtYXJyb3cge1xyXG4gICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzI3QUU2MTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAubWF0LXByb2dyZXNzLWJhciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMWVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDZweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggNHB4IC0xcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250ZW50LWJvZHl7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkY2RjY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuY29udGVudC1ib2R5IHB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjQ2MjYyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXAgO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBnYXA6IDEwcHggMjBweDsgXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggMXB4IDNweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDFweCAycHggMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFpbmVyIGJ1dHRvbntcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5jaGVja2NvZGVzLWZpZWxkc3tcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZ2FwOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuc2Nhbi1maWVsZHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2Nhbi1maWVsZCBsYWJlbHtcclxuICAgICAgICAgICAgY29sb3I6ICM2NDYyNjI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5TY2FuLWNvbnRhaW5lcntcclxuICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoOTksIDk5LCA5OSwgMC4yKSAwcHggMnB4IDhweCAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5zY2FuLWZpZWxkIGRpdntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDsgXHJcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93OyBcclxuICAgICAgICAgICAgZ2FwOiAxMHB4OyBcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnFyLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW5wdXRzLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgICAgICAgICAgZ2FwOiA2MHB4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5mY3tcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgICAgICAgICAgZ2FwOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGR2e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5maWVsZHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1mbG93OiByb3c7XHJcbiAgICAgICAgICAgIGdhcDogMTBweDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyN0FFNjEgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLmZpZWxkIG1hdC1sYWJlbHtcclxuICAgICAgICAgICAgY29sb3I6ICM2NDYyNjI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5maWVsZCAubWF0LWZvcm0tZmllbGQgaW5wdXR7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgY29sb3I6ICMzMTMwMzA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5maWVsZCAubWF0LWZvcm0tZmllbGQgLm1hdC1zZWxlY3R7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgY29sb3I6ICMzMTMwMzA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgbWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgc3Bhbi5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIGxhYmVsIHtcclxuICAgICAgICAgICAgY29sb3I6IzI3QUU2MSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5jdXN0b20tc2VsZWN0e1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgIHdpZHRoOjE3MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgyNywgMzEsIDM1LCAuMSkgMCAxcHggMDtcclxuICAgICAgICAgIGJvcmRlcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLm1hcC1jb250YWluZXJ7IFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB3aWR0aDogNzAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgIC8qIG1hcmdpbjogMjBweCA7ICovXHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggMXB4IDNweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDFweCAycHggMHB4O1xyXG4gICAgICAgICAgICAvKiBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvOyAgXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdC1zZWxlY3Q6Zm9jdXM6bm90KC5tYXQtc2VsZWN0LWRpc2FibGVkKS5tYXQtcHJpbWFyeSAubWF0LXNlbGVjdC1hcnJvdyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjM5NjFDO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgI21hcDIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC5zbWFsbC12aWRlb3tcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogNzAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnJlc3VsdHN7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5hY3Rpb24tYnV0dG9ue1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3QUU2MTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LCAzMSwgMzUsIC4xNSk7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgyNywgMzEsIDM1LCAuMSkgMCAxcHggMDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB3aWR0aDoxMDBweDtcclxuICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFjdGlvbi1idXR0b25TaG90e1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3QUU2MTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LCAzMSwgMzUsIC4xNSk7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgyNywgMzEsIDM1LCAuMSkgMCAxcHggMDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC5idG4teWVsbG93e1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUNGMzc7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAvKiB3aWR0aDogMTAwcHggIWltcG9ydGFudDsgKi9cclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDZweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggNHB4IC0xcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4tZ3JlZW57XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyN0FFNjE7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCA0cHggLTFweDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAuYnRuLWdyZWVuOmRpc2FibGVke1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzJCRUJFO1xyXG4gICAgICAgICAgICBjb2xvcjogIzMxMzAzMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0bi15ZWxsb3c6ZGlzYWJsZWR7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDMkJFQkU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzEzMDMwO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5zY2FuLWZpZWxkIGRpdntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDsgXHJcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93OyBcclxuICAgICAgICAgICAgZ2FwOiAxMHB4OyBcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICB9IFxyXG4gICAgICAgIC5xci1jb250YWluZXJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTAwcHgpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5wcm9ncmVzcy1jYW50YWluZXJ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcbiAgICAgICAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucHJvZ3Jlc3MtY2FudGFpbmVyIHNwYW57XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICAgICAgICAgIHRvcDogMGVtOyBcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4OyBcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyN0FFNjE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC5tYXQtc2VsZWN0LWFycm93IHtcclxuICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDRweDtcclxuICAgICAgICAgICAgY29sb3I6ICMyN0FFNjE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLm1hdC1wcm9ncmVzcy1iYXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDFlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMnB4IDRweCAtMXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGVudC1ib2R5e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkY2O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmNvbnRlbnQtYm9keSBwe1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzY0NjI2MjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwIDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0IDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGdhcDogMTBweCAyMHB4OyBcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAxcHggM3B4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMXB4IDJweCAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWluZXIgYnV0dG9ue1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmNoZWNrY29kZXMtZmllbGRze1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgZ2FwOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuc2Nhbi1maWVsZHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2Nhbi1maWVsZCBsYWJlbHtcclxuICAgICAgICAgICAgY29sb3I6ICM2NDYyNjI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5zY2FuLWZpZWxkIGRpdntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDsgXHJcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93OyBcclxuICAgICAgICAgICAgZ2FwOiAxMHB4OyBcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnFyLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuaW5wdXRzLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5mY3tcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgICAgICAgICAgZ2FwOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGR2e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5maWVsZHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1mbG93OiByb3c7XHJcbiAgICAgICAgICAgIGdhcDogMTBweDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyN0FFNjEgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLmZpZWxkIG1hdC1sYWJlbHtcclxuICAgICAgICAgICAgY29sb3I6ICM2NDYyNjI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5maWVsZCAubWF0LWZvcm0tZmllbGQgaW5wdXR7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgY29sb3I6ICMzMTMwMzA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5maWVsZCAubWF0LWZvcm0tZmllbGQgLm1hdC1zZWxlY3R7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgY29sb3I6ICMzMTMwMzA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgbWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgc3Bhbi5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIGxhYmVsIHtcclxuICAgICAgICAgICAgY29sb3I6IzI3QUU2MSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5jdXN0b20tc2VsZWN0e1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgIHdpZHRoOjE3MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgyNywgMzEsIDM1LCAuMSkgMCAxcHggMDtcclxuICAgICAgICAgIGJvcmRlcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLm1hcC1jb250YWluZXJ7IFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgIC8qIG1hcmdpbjogMjBweCA7ICovXHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggMXB4IDNweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDFweCAycHggMHB4O1xyXG4gICAgICAgICAgICAvKiBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvOyAgXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdC1zZWxlY3Q6Zm9jdXM6bm90KC5tYXQtc2VsZWN0LWRpc2FibGVkKS5tYXQtcHJpbWFyeSAubWF0LXNlbGVjdC1hcnJvdyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjM5NjFDO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgI21hcDIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC5zbWFsbC12aWRlb3tcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogNzAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnJlc3VsdHN7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5hY3Rpb24tYnV0dG9ue1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3QUU2MTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LCAzMSwgMzUsIC4xNSk7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgyNywgMzEsIDM1LCAuMSkgMCAxcHggMDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB3aWR0aDoxMDBweDtcclxuICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFjdGlvbi1idXR0b25TaG90e1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3QUU2MTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LCAzMSwgMzUsIC4xNSk7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgyNywgMzEsIDM1LCAuMSkgMCAxcHggMDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC5idG4teWVsbG93e1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUNGMzc7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAvKiB3aWR0aDogMTAwcHggIWltcG9ydGFudDsgKi9cclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDZweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggNHB4IC0xcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4tZ3JlZW57XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyN0FFNjE7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCA0cHggLTFweDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAuYnRuLWdyZWVuOmRpc2FibGVke1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzJCRUJFO1xyXG4gICAgICAgICAgICBjb2xvcjogIzMxMzAzMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0bi15ZWxsb3c6ZGlzYWJsZWR7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDMkJFQkU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzEzMDMwO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5zY2FuLWZpZWxkIGRpdntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDsgXHJcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93OyBcclxuICAgICAgICAgICAgZ2FwOiAxMHB4OyBcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICB9IFxyXG4gICAgICAgIC5xci1jb250YWluZXJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAzNTBweCkgYW5kIChtYXgtd2lkdGg6IDU5OXB4KXtcclxuICAgICAgICBcclxuICAgICAgICAucHJvZ3Jlc3MtY2FudGFpbmVye1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxyXG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnByb2dyZXNzLWNhbnRhaW5lciBzcGFue1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgICAgICAgICB0b3A6IDBlbTsgXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDsgXHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdBRTYxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAubWF0LXNlbGVjdC1hcnJvdyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiA1cHggc29saWQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCA0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjdBRTYxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5tYXQtcHJvZ3Jlc3MtYmFyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAwLjVlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMnB4IDRweCAtMXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGVudC1ib2R5e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkY2O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuY29udGVudC1ib2R5IHB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjQ2MjYyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogOHB4O1xyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwIDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0IDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGdhcDogMTBweCAyMHB4OyBcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAxcHggM3B4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMXB4IDJweCAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWluZXIgYnV0dG9ue1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmNoZWNrY29kZXMtZmllbGRze1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5zY2FuLWZpZWxke1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGdhcDogNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2Nhbi1maWVsZCBsYWJlbHtcclxuICAgICAgICAgICAgY29sb3I6ICM2NDYyNjI7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbnB1dC1sYWJlbHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2Nhbi1maWVsZCBkaXZ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdzsgXHJcbiAgICAgICAgICAgIGdhcDogMTBweDsgXHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5xci1jb250YWluZXJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmlucHV0cy1jb250YWluZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICAgICAgICAgIGdhcDogMTBweDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uZmN7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICAgICAgICAgIGdhcDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBkdntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgZ2FwOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmllbGR7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLmZpZWxkIGJ1dHRvbntcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdBRTYxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5maWVsZCBtYXQtbGFiZWx7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjQ2MjYyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuZmllbGQgLm1hdC1mb3JtLWZpZWxkIGlucHV0e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzEzMDMwO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5maWVsZCAubWF0LWZvcm0tZmllbGQgLm1hdC1zZWxlY3R7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgY29sb3I6ICMzMTMwMzA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIG1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIHNwYW4ubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciBsYWJlbCB7XHJcbiAgICAgICAgY29sb3I6IzI3QUU2MSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuY3VzdG9tLXNlbGVjdHtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICB3aWR0aDoxNzBweDtcclxuICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMjcsIDMxLCAzNSwgLjEpIDAgMXB4IDA7XHJcbiAgICAgICAgICBib3JkZXI6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5tYXAtY29udGFpbmVyeyBcclxuICAgICAgICBcclxuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAvKiBtYXJnaW46IDIwcHggOyAqL1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDFweCAzcHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAxcHggMnB4IDBweDtcclxuICAgICAgICAgICAgLyogZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bzsgIFxyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdC1zZWxlY3Q6Zm9jdXM6bm90KC5tYXQtc2VsZWN0LWRpc2FibGVkKS5tYXQtcHJpbWFyeSAubWF0LXNlbGVjdC1hcnJvdyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjM5NjFDO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgI21hcDIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLnNtYWxsLXZpZGVve1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA2MDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucmVzdWx0c3tcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6Ym9yI0RBREFEQTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmFjdGlvbi1idXR0b257XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdBRTYxO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgLjE1KTtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDI3LCAzMSwgMzUsIC4xKSAwIDFweCAwO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWN0aW9uLWJ1dHRvblNob3R7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdBRTYxO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgLjE1KTtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDI3LCAzMSwgMzUsIC4xKSAwIDFweCAwO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLmJ0bi15ZWxsb3d7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBQ0YzNztcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIC8qIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50OyAqL1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCA0cHggLTFweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0bi15ZWxsb3c6ZGlzYWJsZWR7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDMkJFQkU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzEzMDMwO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5idG4tZ3JlZW57XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyN0FFNjE7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDZweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggNHB4IC0xcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4tZ3JlZW46ZGlzYWJsZWR7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDMkJFQkU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzEzMDMwO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAzNTBweCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnByb2dyZXNzLWNhbnRhaW5lcntcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5wcm9ncmVzcy1jYW50YWluZXIgc3BhbntcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgICAgICAgICAgdG9wOiAwZW07IFxyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7IFxyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3QUU2MTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLm1hdC1zZWxlY3QtYXJyb3cge1xyXG4gICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzI3QUU2MTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAubWF0LXByb2dyZXNzLWJhciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMC41ZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCA0cHggLTFweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbnQtYm9keXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjZGNjtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmNvbnRlbnQtYm9keSBwe1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzY0NjI2MjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDhweDtcclxuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcCA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCA7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBnYXA6IDEwcHggMjBweDsgXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAxcHggM3B4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMXB4IDJweCAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWluZXIgYnV0dG9ue1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmNoZWNrY29kZXMtZmllbGRze1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5zY2FuLWZpZWxke1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBnYXA6IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNjYW4tZmllbGQgbGFiZWx7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjQ2MjYyO1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW5wdXQtbGFiZWx7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNjYW4tZmllbGQgYnV0dG9ue1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAuaW5wdXRzLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5mY3tcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgICAgICAgICAgZ2FwOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGR2e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5maWVsZHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1mbG93OiByb3c7XHJcbiAgICAgICAgICAgIGdhcDogMTBweDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyN0FFNjEgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnNjYW4tZmllbGQgZGl2e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgICAgICAgICAgZmxleC1mbG93OiByb3c7IFxyXG4gICAgICAgICAgICBnYXA6IDEwcHg7IFxyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgLnFyLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuZmllbGQgbWF0LWxhYmVse1xyXG4gICAgICAgICAgICBjb2xvcjogIzY0NjI2MjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmZpZWxkIC5tYXQtZm9ybS1maWVsZHtcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmllbGQgLm1hdC1mb3JtLWZpZWxkIGlucHV0e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzEzMDMwO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5maWVsZCAubWF0LWZvcm0tZmllbGQgLm1hdC1zZWxlY3R7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgY29sb3I6ICMzMTMwMzA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgbWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgc3Bhbi5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIGxhYmVsIHtcclxuICAgICAgICAgICAgY29sb3I6IzI3QUU2MSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5jdXN0b20tc2VsZWN0e1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgIHdpZHRoOjE3MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgyNywgMzEsIDM1LCAuMSkgMCAxcHggMDtcclxuICAgICAgICAgIGJvcmRlcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLm1hcC1jb250YWluZXJ7IFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIC8qIG1hcmdpbjogMjBweCA7ICovXHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggMXB4IDNweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDFweCAycHggMHB4O1xyXG4gICAgICAgICAgICAvKiBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvOyAgXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAubWF0LXNlbGVjdDpmb2N1czpub3QoLm1hdC1zZWxlY3QtZGlzYWJsZWQpLm1hdC1wcmltYXJ5IC5tYXQtc2VsZWN0LWFycm93IHtcclxuICAgICAgICAgICAgY29sb3I6ICM2Mzk2MUM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAjbWFwMiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAuc21hbGwtdmlkZW97XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5yZXN1bHRze1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYWN0aW9uLWJ1dHRvbntcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyN0FFNjE7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAuMTUpO1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMjcsIDMxLCAzNSwgLjEpIDAgMXB4IDA7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgd2lkdGg6MTAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLmFjdGlvbi1idXR0b25TaG90e1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3QUU2MTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LCAzMSwgMzUsIC4xNSk7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgyNywgMzEsIDM1LCAuMSkgMCAxcHggMDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC5idG4teWVsbG93e1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUNGMzc7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAvKiB3aWR0aDogMTAwcHggIWltcG9ydGFudDsgKi9cclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDZweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggNHB4IC0xcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4teWVsbG93OmRpc2FibGVke1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzJCRUJFO1xyXG4gICAgICAgICAgICBjb2xvcjogIzMxMzAzMDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAuYnRuLWdyZWVue1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdBRTYxO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMnB4IDRweCAtMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuLWdyZWVuOmRpc2FibGVke1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzJCRUJFO1xyXG4gICAgICAgICAgICBjb2xvcjogIzMxMzAzMDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAuZmllbGQgYnV0dG9ue1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLlNjYW4tY29udGFpbmVye1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAxcHggM3B4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMXB4IDJweCAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYW1lcmF7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgIl19 */"] });


/***/ }),

/***/ 41251:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 3422:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 92014);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 41251);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(3422)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map