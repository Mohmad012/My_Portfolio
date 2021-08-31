(this["webpackJsonpportfolio"] = this["webpackJsonpportfolio"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/index.scss":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/styles/index.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#home {\n  width: 100%;\n  height: 100vh;\n  background: url(\"https://files.fm/thumb_show.php?i=bcn3wuuat&view\") center center;\n  background-size: cover;\n}\n@media (min-width: 1024px) {\n  #home {\n    background-attachment: fixed;\n  }\n}\n#home::before {\n  content: \"\";\n  background: rgba(5, 13, 24, 0.3);\n  position: absolute;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n}\n#home .home-container {\n  position: relative;\n  z-index: 2;\n  min-width: 300px;\n  padding: 0 20px;\n}\n@media (max-width: 320px) {\n  #home .home-container {\n    max-width: 320px;\n  }\n}\n#home .home-container h1 {\n  margin: 0 0 10px 0;\n  font-size: 64px;\n  font-weight: 700;\n  line-height: 56px;\n  color: #fff;\n}\n@media (max-width: 768px) {\n  #home .home-container h1 {\n    font-size: 33px;\n    line-height: 36px;\n  }\n}\n#home .home-container p {\n  color: #fff;\n  margin-bottom: 50px;\n  font-size: 26px;\n  font-family: \"Poppins\", sans-serif;\n}\n#home .home-container p span {\n  color: #fff;\n  padding-bottom: 4px;\n  letter-spacing: 1px;\n  border-bottom: 3px solid #149ddd;\n}\n\n.about {\n  background-color: #f5f8fd;\n}\n@media (min-width: 1200px) {\n  .about {\n    width: calc(100% - 300px);\n    float: right;\n    clear: left;\n  }\n}\n.about p, .about span {\n  color: #6c757d;\n}\n.about strong {\n  color: #545b62;\n}\n.about .content h3 {\n  font-weight: 700;\n  font-size: 26px;\n  color: #173b6c;\n}\n.about .content ul {\n  list-style: none;\n  padding: 0;\n}\n\n#portfolio {\n  background-color: #f5f8fd;\n  min-height: 100vh;\n}\n@media (min-width: 1200px) {\n  #portfolio {\n    width: calc(100% - 300px);\n    float: right;\n    clear: left;\n  }\n}\n\n.portfolio #portfolio-flters {\n  padding: 0;\n  margin: 0 auto 35px auto;\n  list-style: none;\n  text-align: center;\n  background: #fff;\n  border-radius: 50px;\n  padding: 2px 15px;\n}\n.portfolio #portfolio-flters li {\n  cursor: pointer;\n  display: inline-block;\n  padding: 10px 15px 8px 15px;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1;\n  text-transform: uppercase;\n  color: #272829;\n  margin-bottom: 5px;\n  transition: all 0.3s ease-in-out;\n}\n.portfolio #portfolio-flters li:hover, .portfolio #portfolio-flters li.filter-active {\n  color: #149ddd;\n}\n.portfolio .portfolio-item {\n  margin-bottom: 30px;\n}\n.portfolio .portfolio-item .portfolio-wrap {\n  transition: 0.3s;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n  width: 100%;\n  height: 300px;\n  box-shadow: #212529ad 0px 5px 8px;\n}\n.portfolio .portfolio-item .portfolio-wrap img {\n  width: 100%;\n  height: 100%;\n}\n.portfolio .portfolio-item .portfolio-wrap .name_project {\n  position: absolute;\n  left: 10px;\n  top: 10px;\n  color: #173b6c;\n  transition: all ease-in-out 0.3s;\n  z-index: 2;\n  opacity: 0;\n}\n.portfolio .portfolio-item .portfolio-wrap:hover .name_project {\n  opacity: 1;\n}\n.portfolio .portfolio-item .portfolio-wrap::before {\n  content: \"\";\n  background: rgba(255, 255, 255, 0.5);\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  transition: all ease-in-out 0.3s;\n  z-index: 2;\n  opacity: 0;\n}\n.portfolio .portfolio-item .portfolio-wrap:hover::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 1;\n}\n.portfolio .portfolio-item .portfolio-wrap:hover .portfolio-links {\n  opacity: 1;\n  bottom: 0;\n}\n.portfolio .portfolio-item .portfolio-wrap .portfolio-links {\n  opacity: 1;\n  left: 0;\n  right: 0;\n  bottom: -60px;\n  z-index: 3;\n  position: absolute;\n  transition: all ease-in-out 0.3s;\n  display: flex;\n  justify-content: center;\n}\n.portfolio .portfolio-item .portfolio-wrap .portfolio-links a {\n  color: #fff;\n  font-size: 28px;\n  text-align: center;\n  background: rgba(20, 157, 221, 0.75);\n  transition: 0.3s;\n  width: 50%;\n}\n.portfolio .portfolio-item .portfolio-wrap .portfolio-links a:hover {\n  background: rgba(20, 157, 221, 0.95);\n}\n.portfolio .portfolio-item .portfolio-wrap .portfolio-links a + a {\n  border-left: 1px solid #37b3ed;\n}\n\n.skills {\n  background-color: #fff;\n  min-height: 100vh;\n}\n@media (min-width: 1200px) {\n  .skills {\n    width: calc(100% - 300px);\n    float: right;\n    clear: left;\n  }\n}\n\n.progress-bar {\n  background-color: transparent !important;\n  width: 100% !important;\n}\n.progress-bar h3 {\n  color: #173b6c;\n}\n\n.progress-bar-circ-container {\n  margin: 0 auto;\n}\n\n.contact {\n  padding-bottom: 130px;\n  background: #f5f8fd;\n  min-height: 100vh;\n}\n@media (min-width: 1200px) {\n  .contact {\n    width: calc(100% - 300px);\n    float: right;\n    clear: left;\n  }\n}\n.contact .info {\n  padding: 30px;\n  background: #fff;\n  width: 100%;\n  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);\n}\n.contact .info svg {\n  font-size: 20px;\n  color: #149ddd;\n  float: left;\n  width: 44px;\n  height: 44px;\n  padding: 12px;\n  background: #dff3fc;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50px;\n  transition: all 0.3s ease-in-out;\n}\n.contact .info h4 {\n  padding: 0 0 0 60px;\n  font-size: 22px;\n  font-weight: 600;\n  margin-bottom: 5px;\n  color: #149ddd;\n}\n.contact .info p {\n  padding: 0 0 10px 60px;\n  margin-bottom: 20px;\n  font-size: 14px;\n  color: #173b6c;\n}\n.contact .info .address:hover svg {\n  background: #149ddd;\n  color: #fff;\n}\n.contact .info .email:hover svg {\n  background: #149ddd;\n  color: #fff;\n}\n.contact .info .email p {\n  padding: 5px 0 10px 16px;\n}\n.contact .info .phone:hover svg {\n  background: #149ddd;\n  color: #fff;\n}\n.contact .email-form {\n  width: 100%;\n  padding-top: 30px;\n  background: #fff;\n  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);\n}\n.contact .email-form label {\n  color: #6c757d;\n}\n.contact .email-form input, .contact .email-form textarea {\n  border-radius: 0;\n  box-shadow: none;\n  font-size: 14px;\n}\n.contact .email-form input {\n  height: 44px;\n}\n.contact .email-form textarea {\n  padding: 10px 12px;\n}\n.contact .email-form button[type=submit] {\n  outline: none !important;\n  border: none;\n}\n@media (max-width: 992px) {\n  .contact .email-form .btn_snd {\n    margin-bottom: 38px;\n  }\n}\n.contact .success-snd {\n  width: 70%;\n  margin: 0 auto;\n  text-align: center;\n  background-color: #343a40;\n  z-index: -1;\n  position: fixed;\n  top: 50%;\n  left: -100%;\n  padding: 20px;\n  margin: 0 auto;\n  border-radius: 10px;\n  transition: all 0.5s;\n}\n.contact .success-snd.show {\n  left: 15%;\n  z-index: 1;\n}\n.contact .success-snd.hide {\n  left: 200%;\n  z-index: -1;\n}\n.contact .success-snd h3 {\n  font-size: calc(.8em + 0.8vw);\n  color: #28a74f;\n  font-weight: bold;\n}\n\nsection {\n  padding: 60px 0;\n  overflow: hidden;\n}\n\n.section-bg {\n  background-color: #f5f8fd;\n}\n\n.section-title {\n  padding-bottom: 30px;\n}\n.section-title h2 {\n  font-size: 32px;\n  font-weight: bold;\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  position: relative;\n  color: #173b6c;\n}\n.section-title h2::after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  width: 50px;\n  height: 3px;\n  background: #149ddd;\n  bottom: 0;\n  left: 0;\n}\n.section-title p {\n  margin-bottom: 0;\n  color: #999;\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  height: 100vh;\n  background-color: #040b14;\n}\n\n.wrapper {\n  width: 200px;\n  height: 60px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.wrapper span {\n  position: absolute;\n  top: 75px;\n  font-family: \"Lato\";\n  font-size: 20px;\n  letter-spacing: 12px;\n  color: #fff;\n  left: 15%;\n}\n.wrapper .circle {\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  border-radius: 50%;\n  background-color: #fff;\n  left: 15%;\n  -webkit-transform-origin: 50%;\n          transform-origin: 50%;\n  -webkit-animation: circle 0.5s alternate infinite ease;\n          animation: circle 0.5s alternate infinite ease;\n}\n.wrapper .circle:nth-child(2) {\n  left: 45%;\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n}\n.wrapper .circle:nth-child(3) {\n  left: auto;\n  right: 15%;\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n}\n.wrapper .shadow {\n  width: 20px;\n  height: 4px;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  top: 62px;\n  -webkit-transform-origin: 50%;\n          transform-origin: 50%;\n  z-index: -1;\n  left: 15%;\n  -webkit-filter: blur(1px);\n          filter: blur(1px);\n  -webkit-animation: shadow 0.5s alternate infinite ease;\n          animation: shadow 0.5s alternate infinite ease;\n}\n.wrapper .shadow:nth-child(4) {\n  left: 45%;\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n}\n.wrapper .shadow:nth-child(5) {\n  left: auto;\n  right: 15%;\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n}\n\n@-webkit-keyframes circle {\n  0% {\n    top: 60px;\n    height: 5px;\n    border-radius: 50px 50px 25px 25px;\n    -webkit-transform: scaleX(1.7);\n            transform: scaleX(1.7);\n  }\n  40% {\n    height: 20px;\n    border-radius: 50%;\n    -webkit-transform: scaleX(1);\n            transform: scaleX(1);\n  }\n  100% {\n    top: 0%;\n  }\n}\n\n@keyframes circle {\n  0% {\n    top: 60px;\n    height: 5px;\n    border-radius: 50px 50px 25px 25px;\n    -webkit-transform: scaleX(1.7);\n            transform: scaleX(1.7);\n  }\n  40% {\n    height: 20px;\n    border-radius: 50%;\n    -webkit-transform: scaleX(1);\n            transform: scaleX(1);\n  }\n  100% {\n    top: 0%;\n  }\n}\n@-webkit-keyframes shadow {\n  0% {\n    -webkit-transform: scaleX(1.5);\n            transform: scaleX(1.5);\n  }\n  40% {\n    -webkit-transform: scaleX(1);\n            transform: scaleX(1);\n    opacity: 0.7;\n  }\n  100% {\n    -webkit-transform: scaleX(0.2);\n            transform: scaleX(0.2);\n    opacity: 0.4;\n  }\n}\n@keyframes shadow {\n  0% {\n    -webkit-transform: scaleX(1.5);\n            transform: scaleX(1.5);\n  }\n  40% {\n    -webkit-transform: scaleX(1);\n            transform: scaleX(1);\n    opacity: 0.7;\n  }\n  100% {\n    -webkit-transform: scaleX(0.2);\n            transform: scaleX(0.2);\n    opacity: 0.4;\n  }\n}\n.scrollToTop {\n  width: 40px;\n  height: 40px;\n  position: fixed;\n  right: 15px;\n  top: 90vh;\n  z-index: 9998;\n  border: 0;\n  background: #149ddd;\n  font-size: 24px;\n  transition: all 0.4s;\n  outline: none !important;\n  line-height: 1;\n  cursor: pointer;\n  text-align: center;\n  border-radius: 50%;\n}\n.scrollToTop.show {\n  opacity: 1;\n}\n.scrollToTop.hide {\n  opacity: 0;\n}\n.scrollToTop svg {\n  color: #fff;\n}\n\n.header {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 300px;\n  transition: all ease-in-out 0.5s;\n  z-index: 9997;\n  transition: all 0.5s;\n  padding: 0 15px;\n  background: #040b14;\n  overflow-y: auto;\n}\n@media (max-width: 1199px) {\n  .header {\n    left: -300px;\n  }\n}\n.header.show {\n  left: 0;\n}\n.header.hide {\n  left: -300px;\n}\n.header .profile img {\n  margin: 15px auto;\n  display: block;\n  width: 120px;\n  border: 8px solid #2c2f3f;\n}\n.header .profile h1 {\n  font-size: 24px;\n  margin: 0;\n  padding: 0;\n  font-weight: 600;\n  text-align-last: center;\n  font-family: \"Poppins\", sans-serif;\n}\n.header .profile h1 a {\n  color: #fff;\n  text-decoration: none;\n}\n.header .profile h1 a:hover {\n  color: #fff;\n  text-decoration: none;\n}\n.header .profile .social-links a {\n  font-size: 18px;\n  display: inline-block;\n  background: #212431;\n  color: #fff;\n  line-height: 1;\n  padding: 8px 0;\n  margin-right: 4px;\n  border-radius: 50%;\n  text-align: center;\n  width: 36px;\n  height: 36px;\n  transition: 0.3s;\n}\n.header .profile .social-links a:hover {\n  background: #149ddd;\n  color: #fff;\n  text-decoration: none;\n}\n.header .nav-menu {\n  padding-top: 30px;\n}\n.header .nav-menu > * {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.header .nav-menu > ul > li {\n  position: relative;\n  white-space: nowrap;\n}\n.header .nav-menu > ul > li:hover > a {\n  text-decoration: none;\n  color: #fff;\n}\n.header .nav-menu a {\n  display: flex;\n  align-items: center;\n  color: #a8a9b4;\n  padding: 12px 15px;\n  margin-bottom: 8px;\n  transition: 0.3s;\n  font-size: 15px;\n}\n.header .nav-menu a:hover, .header .nav-menu a.active {\n  text-decoration: none;\n  color: #fff;\n}\n.header .nav-menu a:hover svg, .header .nav-menu a.active svg {\n  color: #149ddd;\n}\n.header .nav-menu a svg {\n  font-size: 20px;\n  color: #6f7180;\n  transition: 0.3s;\n}\n.header .nav-menu a .ico_page {\n  width: 100%;\n  display: inline-block;\n  padding-left: 10px;\n}\n\n#footer {\n  padding: 15px;\n  color: #f4f6fd;\n  font-size: 14px;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 300px;\n  z-index: 9999;\n  background-color: #040b14;\n}\n@media (max-width: 1199px) {\n  #footer {\n    position: static;\n    width: auto;\n    padding-right: 20px 15px;\n  }\n}\n#footer .copyright {\n  text-align: center;\n}\n\n.mobile-nav-toggle {\n  position: fixed;\n  right: 15px;\n  top: 15px;\n  z-index: 9998;\n  border: 0;\n  background: none;\n  font-size: 24px;\n  transition: all 0.4s;\n  outline: none !important;\n  line-height: 1;\n  cursor: pointer;\n  text-align: right;\n}\n.mobile-nav-toggle svg {\n  color: #149ddd;\n}\n\n::-webkit-scrollbar {\n  width: 0.5em;\n  height: 0.5em;\n}\n\n::-webkit-scrollbar-thumb {\n  background: #149ddd;\n}\n\n::-webkit-scrollbar-track {\n  background: #062f42;\n}\n\nbody {\n  scrollbar-face-color: #149ddd;\n  scrollbar-track-color: #062f42;\n}\n\n::selection {\n  background-color: #040b14;\n  color: #fff;\n}", "",{"version":3,"sources":["webpack://src/styles/_Home.scss","webpack://src/styles/index.scss","webpack://src/styles/_About.scss","webpack://src/styles/_mixins.scss","webpack://src/styles/_Portfolio.scss","webpack://src/styles/_Skills.scss","webpack://src/styles/_Contact.scss","webpack://src/styles/_Global.scss"],"names":[],"mappings":"AAEA;EACE,WAAA;EACA,aAAA;EAEE,iFAAA;EAGF,sBAAA;ACJF;ADME;EACE;IACE,4BAAA;ECJJ;AACF;ADOE;EACE,WAAA;EACA,gCAAA;EACA,kBAAA;EACA,SAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,UAAA;ACLJ;ADQE;EACE,kBAAA;EACA,UAAA;EACA,gBAAA;EACA,eAAA;ACNJ;ADQI;EACE;IACE,gBAAA;ECNN;AACF;ADSI;EACE,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,WAAA;ACPN;ADSM;EACE;IACE,eAAA;IACA,iBAAA;ECPR;AACF;ADYI;EACE,WAAA;EACA,mBAAA;EACA,eAAA;EACA,kCAAA;ACVN;ADYM;EACE,WAAA;EACA,mBAAA;EACA,mBAAA;EACA,gCAAA;ACVR;;ACrDA;EACE,yBAAA;ADwDF;AE5BE;ED1BI;ICgBJ,yBAAA;IACA,YAAA;IACA,WAAA;EF0CA;AACF;ACrDE;EACE,cAAA;ADuDJ;ACpDE;EACE,cAAA;ADsDJ;AClDK;EACG,gBAAA;EACA,eAAA;EACA,cAAA;ADoDR;ACjDK;EACG,gBAAA;EACA,UAAA;ADmDR;;AGrEA;EACE,yBAAA;EDcA,iBAAA;AF2DF;AEvDE;ECdI;IDIJ,yBAAA;IACA,YAAA;IACA,WAAA;EFqEA;AACF;;AGpEE;EACE,UAAA;EACA,wBAAA;EACA,gBAAA;EACA,kBA3BE;EA4BF,gBAAA;EACA,mBAAA;EACA,iBAAA;AHuEJ;AGpEI;EACE,eAAA;EACA,qBAAA;EACA,2BAAA;EACA,eAAA;EACA,gBAAA;EACA,cAAA;EACA,yBAAA;EACA,cAAA;EACA,kBAAA;EACA,gCAAA;AHsEN;AGpEM;EACE,cAAA;AHsER;AGhEG;EACC,mBAAA;AHkEJ;AGhEI;EACE,gBAAA;EACA,kBAAA;EACA,gBAAA;EACA,UAAA;EACA,WAAA;EACA,aAAA;EACA,iCAAA;AHkEN;AGhEM;EACE,WAAA;EACA,YAAA;AHkER;AG/DM;EACE,kBAvEH;EAwEG,UAAA;EACA,SAAA;EACA,cAAA;EACA,gCAAA;EACA,UAAA;EACA,UAAA;AHiER;AG7DQ;EACE,UAAA;AH+DV;AG3DM;EACE,WAAA;EACA,oCAAA;EACA,kBAzFH;EAIH,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EAoFM,gCAAA;EACA,UAAA;EACA,UAAA;AHgER;AG7DM;EA5FJ,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EA2FM,UAAA;AHkER;AG9DQ;EACE,UAAA;EACA,SAAA;AHgEV;AG3DM;EACE,UAAA;EACA,OAAA;EACA,QAAA;EACA,aAAA;EACA,UAAA;EACA,kBAnHH;EAoHG,gCAAA;EACA,aAAA;EACA,uBArHF;AHkLN;AG3DQ;EACE,WAAA;EACA,eAAA;EACA,kBA1HJ;EA2HI,oCAAA;EACA,gBAAA;EACA,UAAA;AH6DV;AG3DU;EACE,oCAAA;AH6DZ;AG1DU;EACE,8BAAA;AH4DZ;;AIjMA;EACI,sBAAA;EFyBF,iBAAA;AF4KF;AExKE;EEzBI;IFeJ,yBAAA;IACA,YAAA;IACA,WAAA;EFsLA;AACF;;AIlMA;EACC,wCAAA;EACA,sBAAA;AJqMD;AIpMI;EACI,cAAA;AJsMR;;AIjMA;EACC,cAAA;AJoMD;;AKxNA;EACE,qBAAA;EACA,mBAAA;EHuBA,iBAAA;AFqMF;AEjME;EGxBI;IHcJ,yBAAA;IACA,YAAA;IACA,WAAA;EF+MA;AACF;AK3NE;EACE,aAAA;EACA,gBAAA;EACA,WAAA;EACA,0CAAA;AL6NJ;AK3NI;EACE,eAAA;EACA,cAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBAAA;EACA,gCAAA;AL6NN;AK1NI;EACE,mBAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,cAAA;AL4NN;AKzNI;EACE,sBAAA;EACA,mBAAA;EACA,eAAA;EACA,cAAA;AL2NN;AKpNQ;EACI,mBAAA;EACA,WAAA;ALsNZ;AK/MQ;EACI,mBAAA;EACA,WAAA;ALiNZ;AK9MM;EACE,wBAAA;ALgNR;AK1MQ;EACI,mBAAA;EACA,WAAA;AL4MZ;AKtME;EACE,WAAA;EACA,iBAAA;EACA,gBAAA;EACA,0CAAA;ALwMJ;AKtMI;EACE,cAAA;ALwMN;AKrMI;EACE,gBAAA;EACA,gBAAA;EACA,eAAA;ALuMN;AKpMI;EACE,YAAA;ALsMN;AKnMI;EACE,kBAAA;ALqMN;AKlMI;EACE,wBAAA;EACA,YAAA;ALoMN;AKjMI;EAEE;IACE,mBAAA;ELkMN;AACF;AK7LE;EACI,UAAA;EACA,cAAA;EACA,kBAAA;EACA,yBAAA;EACA,WAAA;EACA,eAAA;EACA,QAAA;EACA,WAAA;EACA,aAAA;EACA,cAAA;EACA,mBAAA;EACA,oBAAA;AL+LN;AK9LM;EACE,SAAA;EACA,UAAA;ALgMR;AK7LM;EACE,UAAA;EACA,WAAA;AL+LR;AK5LI;EACE,6BAAA;EACA,cAAA;EACA,iBAAA;AL8LN;;AM9UA;EACE,eAAA;EACA,gBAAA;ANiVF;;AM9UA;EACE,yBAAA;ANiVF;;AM9UA;EACE,oBAAA;ANiVF;AM/UE;EACE,eAAA;EACA,iBAAA;EACA,mBAAA;EACA,oBAAA;EACA,kBAAA;EACA,cAAA;ANiVJ;AM/UI;EACE,WAAA;EACA,kBAAA;EACA,cAAA;EACA,WAAA;EACA,WAAA;EACA,mBAAA;EACA,SAAA;EACA,OAAA;ANiVN;AM7UE;EACE,gBAAA;EACA,WAAA;AN+UJ;;AMzUA;EACI,UAAA;EACA,SAAA;EACA,WAAA;EACA,aAAA;EACA,yBAAA;AN4UJ;;AM1UA;EACI,YAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,wCAAA;UAAA,gCAAA;AN6UJ;AM3UI;EACI,kBAAA;EACA,SAAA;EACA,mBAAA;EACA,eAAA;EACA,oBAAA;EACA,WAAA;EACA,SAAA;AN6UR;AM1UI;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;EACA,sBAAA;EACA,SAAA;EACA,6BAAA;UAAA,qBAAA;EACA,sDAAA;UAAA,8CAAA;AN4UR;AM1UQ;EACI,SAAA;EACA,6BAAA;UAAA,qBAAA;AN4UZ;AM1UQ;EACI,UAAA;EACA,UAAA;EACA,6BAAA;UAAA,qBAAA;AN4UZ;AMxUI;EACI,WAAA;EACA,WAAA;EACA,kBAAA;EACA,oCAAA;EACA,kBAAA;EACA,SAAA;EACA,6BAAA;UAAA,qBAAA;EACA,WAAA;EACA,SAAA;EACA,yBAAA;UAAA,iBAAA;EACA,sDAAA;UAAA,8CAAA;AN0UR;AMxUQ;EACI,SAAA;EACA,6BAAA;UAAA,qBAAA;AN0UZ;AMxUQ;EACI,UAAA;EACA,UAAA;EACA,6BAAA;UAAA,qBAAA;AN0UZ;;AMpUA;EACI;IACI,SAAA;IACA,WAAA;IACA,kCAAA;IACA,8BAAA;YAAA,sBAAA;ENuUN;EMrUE;IACI,YAAA;IACA,kBAAA;IACA,4BAAA;YAAA,oBAAA;ENuUN;EMrUE;IACI,OAAA;ENuUN;AACF;;AMrVA;EACI;IACI,SAAA;IACA,WAAA;IACA,kCAAA;IACA,8BAAA;YAAA,sBAAA;ENuUN;EMrUE;IACI,YAAA;IACA,kBAAA;IACA,4BAAA;YAAA,oBAAA;ENuUN;EMrUE;IACI,OAAA;ENuUN;AACF;AMpUA;EACI;IACI,8BAAA;YAAA,sBAAA;ENsUN;EMpUE;IACI,4BAAA;YAAA,oBAAA;IACA,YAAA;ENsUN;EMpUE;IACI,8BAAA;YAAA,sBAAA;IACA,YAAA;ENsUN;AACF;AMjVA;EACI;IACI,8BAAA;YAAA,sBAAA;ENsUN;EMpUE;IACI,4BAAA;YAAA,oBAAA;IACA,YAAA;ENsUN;EMpUE;IACI,8BAAA;YAAA,sBAAA;IACA,YAAA;ENsUN;AACF;AM9TA;EACE,WAAA;EACA,YAAA;EACA,eAAA;EACA,WAAA;EACA,SAAA;EACA,aAAA;EACA,SAAA;EACA,mBAAA;EACA,eAAA;EACA,oBAAA;EACA,wBAAA;EACA,cAAA;EACA,eAAA;EACA,kBAAA;EACA,kBAAA;ANgUF;AM9TE;EACE,UAAA;ANgUJ;AM7TE;EACE,UAAA;AN+TJ;AM5TE;EACE,WAAA;AN8TJ;;AMtTA;EACE,eAAA;EACA,MAAA;EACA,SAAA;EACA,YAAA;EACA,gCAAA;EACA,aAAA;EACA,oBAAA;EACA,eAAA;EACA,mBAAA;EACA,gBAAA;ANyTF;AMvTE;EACE;IACE,YAAA;ENyTJ;AACF;AMtTE;EACE,OAAA;ANwTJ;AMrTE;EACE,YAAA;ANuTJ;AMnTI;EACE,iBAAA;EACA,cAAA;EACA,YAAA;EACA,yBAAA;ANqTN;AMlTI;EACE,eAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EAEA,uBAAA;EACA,kCAAA;ANoTN;AMnTM;EACE,WAAA;EACA,qBAAA;ANqTR;AMpTQ;EACE,WAAA;EACA,qBAAA;ANsTV;AMhTM;EACI,eAAA;EACA,qBAAA;EACA,mBAAA;EACA,WAAA;EACA,cAAA;EACA,cAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;ANkTV;AMjTQ;EACE,mBAAA;EACA,WAAA;EACA,qBAAA;ANmTV;AM3SE;EACE,iBAAA;AN6SJ;AM3SI;EACE,SAAA;EACA,UAAA;EACA,gBAAA;AN6SN;AMzSM;EACE,kBAAA;EACA,mBAAA;AN2SR;AMxSU;EACE,qBAAA;EACA,WAAA;AN0SZ;AMpSI;EACE,aAAA;EACA,mBAAA;EACA,cAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;ANsSN;AMrSM;EACE,qBAAA;EACA,WAAA;ANuSR;AMtSQ;EACE,cAAA;ANwSV;AMrSM;EACE,eAAA;EACA,cAAA;EACA,gBAAA;ANuSR;AMrSM;EACE,WAAA;EACA,qBAAA;EACA,kBAAA;ANuSR;;AM5RA;EACE,aAAA;EACA,cAAA;EACA,eAAA;EACA,eAAA;EACA,OAAA;EACA,SAAA;EACA,YAAA;EACA,aAAA;EACA,yBAAA;AN+RF;AM7RE;EACE;IACE,gBAAA;IACA,WAAA;IACA,wBAAA;EN+RJ;AACF;AM5RE;EACE,kBAAA;AN8RJ;;AMvRA;EACE,eAAA;EACA,WAAA;EACA,SAAA;EACA,aAAA;EACA,SAAA;EACA,gBAAA;EACA,eAAA;EACA,oBAAA;EACA,wBAAA;EACA,cAAA;EACA,eAAA;EACA,iBAAA;AN0RF;AMxRE;EACE,cAAA;AN0RJ;;AEjoBE;EACI,YI4WqB;EJ3WrB,aI2WqB;ANyR3B;;AEjoBE;EACI,mBIuW2B;AN6RjC;;AEjoBE;EACI,mBAXyD;AF+oB/D;;AEhoBE;EACE,6BI8V6B;EJ7V7B,8BAjB2D;AFopB/D;;AA9oBA;EACE,yBAAA;EACA,WAAA;AAipBF","sourcesContent":["// Home Section\n\n#home {\n  width: 100%;\n  height: 100vh;\n  @if \"https://files.fm/thumb_show.php?i=bcn3wuuat&view\" {\n    background: url(\"https://files.fm/thumb_show.php?i=bcn3wuuat&view\") center center;  \n  }\n  \n  background-size: cover;\n\n  @media (min-width: 1024px) {\n    &{\n      background-attachment: fixed;\n    }\n  }\n\n  &::before{\n    content: \"\";\n    background: rgba(5, 13, 24, 0.3);\n    position: absolute;\n    bottom: 0;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;    \n  }\n\n  .home-container {\n    position: relative;\n    z-index: 2;\n    min-width: 300px;\n    padding: 0 20px;\n\n    @media (max-width: 320px) {\n      &{\n        max-width: 320px;\n      }\n    }\n\n    h1 {\n      margin: 0 0 10px 0;\n      font-size: 64px;\n      font-weight: 700;\n      line-height: 56px;\n      color: #fff;\n\n      @media (max-width: 768px) {\n        &{\n          font-size: 33px;\n          line-height: 36px;\n        }\n      }\n\n    }\n\n    p {\n      color: #fff;\n      margin-bottom: 50px;\n      font-size: 26px;\n      font-family: \"Poppins\", sans-serif;\n\n      span {\n        color: #fff;\n        padding-bottom: 4px;\n        letter-spacing: 1px;\n        border-bottom: 3px solid #149ddd;\n      }\n\n    }\n  }\n}\n","@use \"Home\";\n@use \"About\";\n@use \"Portfolio\";\n@use \"Skills\";\n@use \"Contact\";\n@use \"Global\";\n::selection {\n  background-color: #040b14;\n  color: #fff;\n}","@use \"mixins\";\n\n// About\n.about{\n  background-color: #f5f8fd;\n  @include mixins.minMedium{    \n      &{\n          @include mixins.sizePageInSmall;\n      }\n  }\n  // @media (min-width: 1200px) {\n\n  // }\n\n  p,span{\n    color:#6c757d;\n  }\n  \n  strong{\n    color: #545b62;\n  }\n\n  .content{\n     h3 {\n        font-weight: 700;\n        font-size: 26px;\n        color: #173b6c;\n      }\n\n     ul {\n        list-style: none;\n        padding: 0;\n      }\n\n  }\n}\n\n","@mixin scrollbars($size, $foreground-color, $background-color: mix($foreground-color, black, 30%)) {\n  ::-webkit-scrollbar {\n      width:  $size;\n      height: $size;\n  }\n\n  ::-webkit-scrollbar-thumb {\n      background: $foreground-color;\n  }\n\n  ::-webkit-scrollbar-track {\n      background: $background-color;\n  }\n\n  // For Internet Explorer\n  body {\n    scrollbar-face-color: $foreground-color;\n    scrollbar-track-color: $background-color;\n  }\n}\n\n@mixin sizePageInSmall {\n  width: calc(100% - 300px);\n  float: right;\n  clear: left;\n}\n\n@mixin minHeight {\n  min-height: 100vh;\n}\n\n@mixin minMedium {\n  @media (min-width: 1200px) {\n    @content;\n  }\n}","@use \"mixins\";\n\n$Abs:absolute;\n$Cent:center;\n\n@mixin positionAll {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n// Portfolio\n#portfolio{\n  background-color: #f5f8fd;\n  @include mixins.minHeight;\n\n  @include mixins.minMedium{    \n      &{\n          @include mixins.sizePageInSmall;\n      }\n  }\n}\n\n.portfolio{\n\n  #portfolio-flters {\n    padding: 0;\n    margin: 0 auto 35px auto;\n    list-style: none;\n    text-align: $Cent;\n    background: #fff;\n    border-radius: 50px;\n    padding: 2px 15px;\n\n\n    li {\n      cursor: pointer;\n      display: inline-block;\n      padding: 10px 15px 8px 15px;\n      font-size: 14px;\n      font-weight: 600;\n      line-height: 1;\n      text-transform: uppercase;\n      color: #272829;\n      margin-bottom: 5px;\n      transition: all 0.3s ease-in-out;\n\n      &:hover,&.filter-active{\n        color: #149ddd;\n      }\n    }\n\n  }\n\n   .portfolio-item {\n    margin-bottom: 30px;\n\n    .portfolio-wrap {\n      transition: 0.3s;\n      position: relative;\n      overflow: hidden;\n      z-index: 1;\n      width: 100%;\n      height: 300px;\n      box-shadow: #212529ad 0px 5px 8px;\n\n      img{\n        width: 100%;\n        height: 100%;\n      }\n\n      .name_project{\n        position: $Abs;\n        left: 10px;\n        top: 10px;\n        color:#173b6c;\n        transition: all ease-in-out 0.3s;\n        z-index: 2;\n        opacity: 0;\n      }\n\n      &:hover{\n        .name_project{\n          opacity: 1;\n        }\n      }\n\n      &::before {\n        content: \"\";\n        background: rgba(255, 255, 255, 0.5);\n        position: $Abs;\n        @include positionAll;\n        transition: all ease-in-out 0.3s;\n        z-index: 2;\n        opacity: 0;\n      }\n\n      &:hover::before {\n        @include positionAll;\n        opacity: 1;\n      }\n\n      &:hover{\n        .portfolio-links {\n          opacity: 1;\n          bottom: 0;\n        }\n      }\n\n\n      .portfolio-links {\n        opacity: 1;\n        left: 0;\n        right: 0;\n        bottom: -60px;\n        z-index: 3;\n        position: $Abs;\n        transition: all ease-in-out 0.3s;\n        display: flex;\n        justify-content: $Cent;\n\n        a{\n          color: #fff;\n          font-size: 28px;\n          text-align: $Cent;\n          background: rgba(20, 157, 221, 0.75);\n          transition: 0.3s;\n          width: 50%;\n\n          &:hover {\n            background: rgba(20, 157, 221, 0.95);\n          }\n\n          & + a {\n            border-left: 1px solid #37b3ed;\n          }\n\n        }\n      }\n\n    }\n  }\n}","@use \"mixins\";\n\n.skills{\n    background-color: #fff;\n    @include mixins.minHeight;\n\n    @include mixins.minMedium{    \n      &{\n          @include mixins.sizePageInSmall;\n      }\n    }\n}\n\n.progress-bar{\n\tbackground-color: transparent !important;\n\twidth: 100% !important;\n    h3{\n        color: #173b6c;\n    }\n\n}\n\n.progress-bar-circ-container{\n\tmargin: 0 auto;\n}","@use \"mixins\";\n\n// Contact\n.contact {\n  padding-bottom: 130px;\n  background: #f5f8fd;\n  @include mixins.minHeight;\n  @include mixins.minMedium{    \n      &{\n          @include mixins.sizePageInSmall;\n      }\n  }\n\n  .info {\n    padding: 30px;\n    background: #fff;\n    width: 100%;\n    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);\n\n    svg {\n      font-size: 20px;\n      color: #149ddd;\n      float: left;\n      width: 44px;\n      height: 44px;\n      padding: 12px;\n      background: #dff3fc;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      border-radius: 50px;\n      transition: all 0.3s ease-in-out;\n    }\n\n    h4{\n      padding: 0 0 0 60px;\n      font-size: 22px;\n      font-weight: 600;\n      margin-bottom: 5px;\n      color: #149ddd;\n    }\n\n    p{\n      padding: 0 0 10px 60px;\n      margin-bottom: 20px;\n      font-size: 14px;\n      color: #173b6c;\n\n\n    }\n\n    .address{\n      &:hover{\n        svg{\n            background: #149ddd;\n            color: #fff;\n        }\n      }\n    }\n\n    .email{\n      &:hover{\n        svg{\n            background: #149ddd;\n            color: #fff;\n        }\n      }\n      p{\n        padding: 5px 0 10px 16px;\n      }\n    }\n\n    .phone{\n      &:hover{\n        svg{\n            background: #149ddd;\n            color: #fff;\n        }\n      }\n    }\n  }\n\n  .email-form{\n    width: 100%;\n    padding-top: 30px;\n    background: #fff;\n    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);\n\n    label{\n      color: #6c757d;\n    }\n\n    input,textarea{\n      border-radius: 0;\n      box-shadow: none;\n      font-size: 14px;\n    }\n\n    input{\n      height: 44px;\n    }\n\n    textarea{\n      padding: 10px 12px;\n    }\n\n    button[type=\"submit\"]{\n      outline: none !important;\n      border:none;\n    }\n\n    @media(max-width: 992px){\n\n      .btn_snd{\n        margin-bottom: 38px;\n      }\n\n    }\n  }\n\n  .success-snd{\n      width: 70%;\n      margin: 0 auto;\n      text-align: center;\n      background-color: #343a40;\n      z-index: -1;\n      position: fixed;\n      top: 50%;\n      left: -100%;\n      padding: 20px;\n      margin: 0 auto;\n      border-radius: 10px;\n      transition: all .5s;\n      &.show{\n        left: 15%;\n        z-index: 1;\n      }\n\n      &.hide{\n        left: 200%;\n        z-index: -1;\n      }\n\n    h3{\n      font-size: calc(.8em + 0.8vw);\n      color: #28a74f;\n      font-weight: bold;\n    }\n  }\n\n}","@use \"mixins\";\n\nsection {\n  padding: 60px 0;\n  overflow: hidden;\n}\n\n.section-bg {\n  background-color:#f5f8fd;\n}\n\n.section-title {\n  padding-bottom: 30px;\n\n  h2{\n    font-size: 32px;\n    font-weight: bold;\n    margin-bottom: 20px;\n    padding-bottom: 20px;\n    position: relative;\n    color: #173b6c;\n\n    &::after {\n      content: '';\n      position: absolute;\n      display: block;\n      width: 50px;\n      height: 3px;\n      background: #149ddd;\n      bottom: 0;\n      left: 0;\n    }\n  }\n\n  p {\n    margin-bottom: 0;\n    color: #999;\n  }\n}\n\n////////////////////////////////////////////////////////////////\n// Start Spinner Loading\nbody{\n    padding:0;\n    margin:0;\n    width:100%;\n    height:100vh;\n    background-color: #040b14;\n}\n.wrapper{\n    width:200px;\n    height:60px;\n    position: absolute;\n    left:50%;\n    top:50%;\n    transform: translate(-50%, -50%);\n\n    span{\n        position: absolute;\n        top:75px;\n        font-family: 'Lato';\n        font-size: 20px;\n        letter-spacing: 12px;\n        color: #fff;\n        left:15%;\n    }    \n\n    .circle{\n        width:20px;\n        height:20px;\n        position: absolute;\n        border-radius: 50%;\n        background-color: #fff;\n        left:15%;\n        transform-origin: 50%;\n        animation: circle .5s alternate infinite ease;\n\n        &:nth-child(2){\n            left:45%;\n            animation-delay: .2s;\n        }\n        &:nth-child(3){\n            left:auto;\n            right:15%;\n            animation-delay: .3s;\n        }\n    }\n\n    .shadow{\n        width:20px;\n        height:4px;\n        border-radius: 50%;\n        background-color: rgba(0,0,0,.5);\n        position: absolute;\n        top:62px;\n        transform-origin: 50%;\n        z-index: -1;\n        left:15%;\n        filter: blur(1px);\n        animation: shadow .5s alternate infinite ease;\n\n        &:nth-child(4){\n            left: 45%;\n            animation-delay: .2s\n        }\n        &:nth-child(5){\n            left:auto;\n            right:15%;\n            animation-delay: .3s;\n        }\n    }\n}\n\n\n@keyframes circle{\n    0%{\n        top:60px;\n        height:5px;\n        border-radius: 50px 50px 25px 25px;\n        transform: scaleX(1.7);\n    }\n    40%{\n        height:20px;\n        border-radius: 50%;\n        transform: scaleX(1);\n    }\n    100%{\n        top:0%;\n    }\n}\n\n@keyframes shadow{\n    0%{\n        transform: scaleX(1.5);\n    }\n    40%{\n        transform: scaleX(1);\n        opacity: .7;\n    }\n    100%{\n        transform: scaleX(.2);\n        opacity: .4;\n    }\n}\n\n// End Spinner Loading\n////////////////////////////////////////////////////////////////\n\n////////////////////////////////////////////////////////////////\n// scrollToTop Button\n.scrollToTop {\n  width: 40px;\n  height: 40px;\n  position: fixed;\n  right: 15px;\n  top: 90vh;\n  z-index: 9998;\n  border: 0;\n  background:  #149ddd;\n  font-size: 24px;\n  transition: all 0.4s;\n  outline: none !important;\n  line-height: 1;\n  cursor: pointer;\n  text-align: center;\n  border-radius: 50%;\n\n  &.show{\n    opacity: 1;\n  }\n\n  &.hide{\n    opacity: 0;\n  }\n\n  svg {\n    color: #fff;\n  }\n}\n////////////////////////////////////////////////////////////////\n\n\n////////////////////////////////////////////////////////////////\n// Header\n.header {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 300px;\n  transition: all ease-in-out 0.5s;\n  z-index: 9997;\n  transition: all 0.5s;\n  padding: 0 15px;\n  background: #040b14;\n  overflow-y: auto;\n\n  @media (max-width: 1199px) {\n    &{\n      left: -300px;\n    }\n  }\n\n  &.show{\n    left: 0;\n  }\n\n  &.hide{\n    left: -300px;\n  }\n  ///////////////////////////////////////////////\n  .profile{\n    img {\n      margin: 15px auto;\n      display: block;\n      width: 120px;\n      border: 8px solid #2c2f3f;\n    }\n\n    h1 {\n      font-size: 24px;\n      margin: 0;\n      padding: 0;\n      font-weight: 600;\n      -moz-text-align-last: center;\n      text-align-last: center;\n      font-family: \"Poppins\", sans-serif;\n      a{\n        color: #fff;\n        text-decoration: none;\n        &:hover{\n          color: #fff;\n          text-decoration: none;\n        }\n      }\n    }\n\n    .social-links{\n      a{\n          font-size: 18px;\n          display: inline-block;\n          background: #212431;\n          color: #fff;\n          line-height: 1;\n          padding: 8px 0;\n          margin-right: 4px;\n          border-radius: 50%;\n          text-align: center;\n          width: 36px;\n          height: 36px;\n          transition: 0.3s;\n        &:hover{\n          background: #149ddd;\n          color: #fff;\n          text-decoration: none;\n        }\n      }\n    }\n  }\n  ///////////////////////////////////////////////\n\n  ///////////////////////////////////////////////\n  .nav-menu {\n    padding-top: 30px;\n\n    & > *{\n      margin: 0;\n      padding: 0;\n      list-style: none;\n    }\n\n    & > ul{\n      & > li{\n        position: relative;\n        white-space: nowrap;\n\n        &:hover{\n          & > a{\n            text-decoration: none;\n            color: #fff;\n          }\n        }\n      }\n    }\n\n    a{\n      display: flex;\n      align-items: center;\n      color: #a8a9b4;\n      padding: 12px 15px;\n      margin-bottom: 8px;\n      transition: 0.3s;\n      font-size: 15px;\n      &:hover,&.active,{\n        text-decoration: none;\n        color: #fff;\n        svg{\n          color: #149ddd;\n        }\n      }\n      svg{\n        font-size: 20px;\n        color: #6f7180;\n        transition: .3s; \n      }\n      .ico_page{\n        width: 100%;\n        display: inline-block;\n        padding-left: 10px;\n      }\n\n    }\n  }\n  ///////////////////////////////////////////////\n}\n////////////////////////////////////////////////////////////////\n\n////////////////////////////////////////////////////////////////\n// footer\n#footer {\n  padding: 15px;\n  color: #f4f6fd;\n  font-size: 14px;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 300px;\n  z-index: 9999;\n  background-color: #040b14;\n\n  @media (max-width: 1199px) {\n    &{\n      position: static;\n      width: auto;\n      padding-right: 20px 15px;\n    }\n  }\n\n  .copyright {\n    text-align: center;\n  }\n}\n////////////////////////////////////////////////////////////////\n\n////////////////////////////////////////////////////////////////\n// Nav Toggle\n.mobile-nav-toggle {\n  position: fixed;\n  right: 15px;\n  top: 15px;\n  z-index: 9998;\n  border: 0;\n  background: none;\n  font-size: 24px;\n  transition: all 0.4s;\n  outline: none !important;\n  line-height: 1;\n  cursor: pointer;\n  text-align: right;\n\n  svg{\n    color: #149ddd;  \n  }\n}\n////////////////////////////////////////////////////////////////\n\n// Color For Scroll\n@include mixins.scrollbars(.5em, #149ddd);"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/About/About.js":
/*!***************************************!*\
  !*** ./src/components/About/About.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ */ "./src/components/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/home/m/Documents/My_Portfolio/src/components/About/About.js",
    _this = undefined,
    _s = __webpack_require__.$Refresh$.signature();




function ColTag(_ref) {
  var textstrong1 = _ref.textstrong1,
      textstrong2 = _ref.textstrong2,
      textstrong3 = _ref.textstrong3,
      textspan4 = _ref.textspan4,
      textspan5 = _ref.textspan5,
      textspan6 = _ref.textspan6;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "col-lg-6",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          children: [" ", textstrong1]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 12
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: [" ", textspan4]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 43
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 8
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          children: [" ", textstrong2]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 12
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: [" ", textspan5]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 43
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 8
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          children: [" ", textstrong3]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 12
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: [" ", textspan6]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 43
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 8
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 6
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 4
  }, this);
}

_c = ColTag;

function Head3(_ref2) {
  var title = _ref2.title;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
    children: title
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 4
  }, this);
}

_c2 = Head3;

function PText(_ref3) {
  var text = _ref3.text;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
    children: text
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 4
  }, this);
}

_c3 = PText;

var About = function About() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    document.title = 'About';
  }, []);
  var myImg = "https://files.fm/thumb_show.php?i=yeu3e748s&view";
  var myInfo = "\tI'm a Creative Frontend Developer with <strong> 3+ years </strong> hands of experience in building <strong>responsive websites. </strong>\n\t\t\t\t\tcontributing to all phases of <strong> SDLC </strong> from conception to maintenance by acting as analyst, architect to\n\t\t\t\t\t<strong> finished of 10+ projects </strong> and you can check links for it in projects section at the bottom. Cross-\n\t\t\t\t\tfunctional <strong> Scrum agile member. </strong> Passionate about <strong> clean code </strong> and <strong> get things done. </strong> Maintains up to\n\t\t\t\t\tdate awareness of technological trends and technological advances.\n\t\t\t\t";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_2__["SuspenseCustom"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_2__["MainContent"], {
      ID: "about",
      NameClassSection: "about",
      textP: myInfo,
      textH: "About",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-lg-4",
          "data-aos": "fade-right",
          children: myImg && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: myImg,
            className: "img-fluid rounded",
            alt: "My Img"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-lg-8 pt-4 pt-lg-0 content",
          "data-aos": "fade-left",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "Frontend Developer & Software Engineer."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ColTag, {
              textstrong1: "Birthday:",
              textstrong2: "Phone:",
              textstrong3: "City:",
              textspan4: "14/07/1997",
              textspan5: "+201223072359",
              textspan6: "Cairo , Egypt"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 16
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ColTag, {
              textstrong1: "Email:",
              textstrong2: "Freelance:",
              textstrong3: "Full Time Job:",
              textspan4: "mohmadgamal1000@gmail.com",
              textspan5: "Available",
              textspan6: "Available"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 16
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-lg-6",
              "data-aos": "fade-up-right",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Head3, {
                title: "Language"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 22
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PText, {
                  text: "Arabic"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 22
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PText, {
                  text: "English"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 24
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 22
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 18
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-lg-6 mb-4",
              "data-aos": "fade-up-left",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Head3, {
                title: "Education"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 22
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PText, {
                  text: "Bachelor of Science, Al-Azhar University"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PText, {
                  text: "2016 - 2020"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 23
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 22
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 18
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-lg-6",
              "data-aos": "fade-up",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Head3, {
                title: "Military service"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 22
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Not Required"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 24
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 22
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 18
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 6
  }, _this);
};

_s(About, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c4 = About;
/* harmony default export */ __webpack_exports__["default"] = (About);

var _c, _c2, _c3, _c4;

__webpack_require__.$Refresh$.register(_c, "ColTag");
__webpack_require__.$Refresh$.register(_c2, "Head3");
__webpack_require__.$Refresh$.register(_c3, "PText");
__webpack_require__.$Refresh$.register(_c4, "About");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/App/App.js":
/*!***********************************!*\
  !*** ./src/components/App/App.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle.min */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ */ "./src/components/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/home/m/Documents/My_Portfolio/src/components/App/App.js",
    _this = undefined,
    _s = __webpack_require__.$Refresh$.signature();










var App = function App() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    aos__WEBPACK_IMPORTED_MODULE_3___default.a.init({
      duration: 2000,
      easing: "ease-in-out-back",
      once: true
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "App",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_8__["Header"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/",
        exact: true,
        component: ___WEBPACK_IMPORTED_MODULE_8__["Home"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/about",
        component: ___WEBPACK_IMPORTED_MODULE_8__["About"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/portfolio",
        component: ___WEBPACK_IMPORTED_MODULE_8__["Portfolio"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/skills",
        component: ___WEBPACK_IMPORTED_MODULE_8__["Skills"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/contact",
        component: ___WEBPACK_IMPORTED_MODULE_8__["Contact"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 6
  }, _this);
};

_s(App, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Contact/Contact.js":
/*!*******************************************!*\
  !*** ./src/components/Contact/Contact.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _home_m_Documents_My_Portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ */ "./src/components/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);




var _jsxFileName = "/home/m/Documents/My_Portfolio/src/components/Contact/Contact.js",
    _this = undefined,
    _s = __webpack_require__.$Refresh$.signature();









function DIVInfo(_ref) {
  var ClassName = _ref.ClassName,
      IcoName = _ref.IcoName,
      textH4 = _ref.textH4,
      textP = _ref.textP,
      SecClass = _ref.SecClass;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: ClassName,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: IcoName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h4", {
      children: textH4
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), SecClass ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      className: "text-truncate",
      children: textP
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 19
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      children: textP
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 62
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

_c = DIVInfo;

function DIVFormGroup(_ref2) {
  var ClassDiv = _ref2.ClassDiv,
      text = _ref2.text,
      nameInput = _ref2.nameInput,
      nameVal = _ref2.nameVal,
      funHandel = _ref2.funHandel,
      typeInput = _ref2.typeInput;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: ClassDiv,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
      htmlFor: nameInput,
      children: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
      type: typeInput,
      name: nameInput,
      className: "form-control",
      id: nameInput,
      value: nameVal,
      onChange: funHandel,
      required: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "validate"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

_c2 = DIVFormGroup;

var Contact = function Contact() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState2 = Object(_home_m_Documents_My_Portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      mainName = _useState2[0],
      setMainName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState4 = Object(_home_m_Documents_My_Portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      email = _useState4[0],
      setEmail = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState6 = Object(_home_m_Documents_My_Portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      mainSubject = _useState6[0],
      setMainSubject = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState8 = Object(_home_m_Documents_My_Portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      msg = _useState8[0],
      setMsg = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState10 = Object(_home_m_Documents_My_Portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState9, 2),
      reject = _useState10[0],
      setReject = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState12 = Object(_home_m_Documents_My_Portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState11, 2),
      successSnd = _useState12[0],
      setSuccessSnd = _useState12[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    document.title = 'Contact';
  }, []);

  var handelMainName = function handelMainName(e) {
    setMainName(e.target.value);
  };

  var handelEmail = function handelEmail(e) {
    setEmail(e.target.value);
  };

  var handelSubject = function handelSubject(e) {
    setMainSubject(e.target.value);
  };

  var handelMsg = function handelMsg(e) {
    setMsg(e.target.value);
  };

  var clearFeilds = function clearFeilds() {
    setMainName("");
    setEmail("");
    setMainSubject("");
    setMsg("");
  };

  var sendEmail = function sendEmail(e) {
    e.preventDefault();

    if (!reject) {
      emailjs_com__WEBPACK_IMPORTED_MODULE_3__["default"].sendForm('service_tz0l27s', 'template_5p4fv0a', e.target, 'user_98Zb9q5gn95pgq2PmRTRT').then(function (result) {
        console.log(result.text);
        setSuccessSnd(true);
        clearFeilds();
        handelSuccessSnd();
        setReject(null);
      }, function (error) {
        console.log(error.text);
      });
    }
  };

  var handelCheckMsg = function handelCheckMsg() {
    msg.length < 5 ? setReject(true) : setReject(false);
  };

  var handelSuccessSnd = function handelSuccessSnd() {
    setTimeout(function () {
      setSuccessSnd(false);
    }, 3000);
  };

  var urlMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.60389530721!2d31.188423461724398!3d30.059618470484782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sbg!4v1628906740233!5m2!1sen!2sbg";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["SuspenseCustom"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["MainContent"], {
      ID: "contact",
      NameClassSection: "contact",
      textP: "I Will See Your Message On My Email...",
      textH: "Contact",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "col-lg-5 d-flex align-items-stretch",
          "data-aos": "fade-up-right",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "info",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(DIVInfo, {
              ClassName: "address",
              IcoName: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faMapMarker"],
              textH4: "Location:",
              textP: "Cairo,Egypt"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(DIVInfo, {
              ClassName: "email",
              IcoName: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPaperPlane"],
              textH4: "Email:",
              textP: "mohmadgamal1000@gmail.com",
              SecClass: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(DIVInfo, {
              ClassName: "phone",
              IcoName: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPhone"],
              textH4: "Call:",
              textP: "+201223072359"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("iframe", {
              src: urlMap,
              title: "This is my location",
              style: {
                border: 0,
                width: '100%',
                height: '290px'
              },
              loading: "lazy"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch",
          "data-aos": "fade-up-left",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
            onSubmit: sendEmail,
            className: "email-form",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "container",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "form-row",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(DIVFormGroup, {
                  ClassDiv: "form-group pb-1 col-md-6",
                  text: "Your Name",
                  nameInput: "name",
                  nameVal: mainName,
                  funHandel: handelMainName,
                  typeInput: "text"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(DIVFormGroup, {
                  ClassDiv: "form-group pb-1 col-md-6",
                  text: "Your Email",
                  nameInput: "email",
                  nameVal: email,
                  funHandel: handelEmail,
                  typeInput: "email"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(DIVFormGroup, {
                ClassDiv: "form-group pb-1",
                text: "Subject",
                nameInput: "Subject",
                nameVal: mainSubject,
                funHandel: handelSubject,
                typeInput: "text"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "form-group pb-1",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
                  htmlFor: "message",
                  children: "Message"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("textarea", {
                  className: "form-control ".concat(reject ? "is-invalid" : reject == null ? "" : "is-valid"),
                  name: "message",
                  id: "message",
                  rows: "10",
                  "data-rule": "required",
                  value: msg,
                  onBlur: handelCheckMsg,
                  onChange: handelMsg,
                  "data-msg": "Please write something for us",
                  required: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 21
                }, _this), reject && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "invalid-feedback",
                  children: reject && "Sorry Message Should Be More Than 5 Character!!"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 135,
                  columnNumber: 27
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "text-center btn_snd mt-5",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
                  className: "btn btn-primary",
                  type: "submit",
                  children: "Send Message"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 61
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "success-snd ".concat(successSnd ? "show" : !successSnd ? "hide" : " ", " "),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
              children: "Your message was successfully sent!!!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 5
  }, _this);
};

_s(Contact, "0FlOIbF2FsQHMvtrpZ8ITS4zuhU=");

_c3 = Contact;
/* harmony default export */ __webpack_exports__["default"] = (Contact);

var _c, _c2, _c3;

__webpack_require__.$Refresh$.register(_c, "DIVInfo");
__webpack_require__.$Refresh$.register(_c2, "DIVFormGroup");
__webpack_require__.$Refresh$.register(_c3, "Contact");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _home_m_Documents_My_Portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ */ "./src/components/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);




var _jsxFileName = "/home/m/Documents/My_Portfolio/src/components/Header/Header.js",
    _this = undefined,
    _s = __webpack_require__.$Refresh$.signature();


 // import MyImg from 'https://fv2-2.failiem.lv/thumb_show.php?i=trf6kpxe9&view';






function LinkTag(_ref) {
  var URL = _ref.URL,
      ClassLink = _ref.ClassLink,
      IcoName = _ref.IcoName;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
    href: URL,
    target: "_blank",
    rel: "noreferrer",
    className: ClassLink,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: IcoName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 74
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

_c = LinkTag;

var Header = function Header() {
  _s();

  var myElement = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      _useState2 = Object(_home_m_Documents_My_Portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      addSideBar = _useState2[0],
      setAddSideBar = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = Object(_home_m_Documents_My_Portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      isVisible = _useState4[0],
      setIsVisible = _useState4[1]; // Show button when page is scorlled upto given distance


  var toggleVisibility = function toggleVisibility() {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }; // Set the top cordinate to 0
  // make scrolling smooth


  var scrollToTop = function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  var HideSide = function HideSide() {
    setTimeout(function () {
      return setAddSideBar(!addSideBar);
    }, 500);
  };

  var infoP = [{
    id: 1,
    pageName: "Home",
    icoName: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faHouseUser"],
    pathPage: "/"
  }, {
    id: 2,
    pageName: "About",
    icoName: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faInfoCircle"],
    pathPage: "/about"
  }, {
    id: 3,
    pageName: "Portfolio",
    icoName: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faGlobeEurope"],
    pathPage: "/portfolio"
  }, {
    id: 4,
    pageName: "Skills",
    icoName: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faSuitcase"],
    pathPage: "/skills"
  }, {
    id: 5,
    pageName: "Contact",
    icoName: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faPaperPlane"],
    pathPage: "/contact"
  }];
  var myImg = 'https://fv2-2.failiem.lv/thumb_show.php?i=trf6kpxe9&view';
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_7__["SuspenseCustom"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("header", {
      className: "header ".concat(myElement.current === undefined ? "show" : addSideBar ? "show" : " "),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "d-flex flex-column",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "profile",
          children: [myImg && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
            src: myImg,
            alt: "MyImg",
            className: "img-fluid rounded-circle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 23
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
            className: "text-light",
            children: "Mohmad Gamal"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "social-links mt-3 text-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(LinkTag, {
              URL: "https://github.com/Mohmad012",
              ClassLink: "github",
              IcoName: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faGithub"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(LinkTag, {
              URL: "https://www.facebook.com/mohmad.ail.5/",
              ClassLink: "facebook",
              IcoName: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFacebookF"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(LinkTag, {
              URL: "https://www.linkedin.com/in/mohmad-gamal-196943168/",
              ClassLink: "linkedin",
              IcoName: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faLinkedinIn"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("nav", {
          className: "nav-menu",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
            children: infoP.map(function (item) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
                  onClick: HideSide,
                  exact: true,
                  activeClassName: "active",
                  to: item.pathPage,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                    icon: item.icoName
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                    className: "ico_page",
                    children: item.pageName
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 19
                }, _this)
              }, item.id, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("footer", {
            id: "footer",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "container",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "copyright",
                children: ["\xA9 Copyright ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                  children: ["Designed by ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("strong", {
                    children: " Mohmad Gamal "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 54
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 36
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          ref: myElement,
          onClick: function onClick() {
            return setAddSideBar(!addSideBar);
          },
          type: "button",
          className: "mobile-nav-toggle d-xl-none",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
            icon: addSideBar ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTimes"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faBars"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 132
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          onClick: scrollToTop,
          type: "button",
          className: "scrollToTop ".concat(isVisible ? "show" : "hide"),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faChevronUp"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 112
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, _this);
};

_s(Header, "aJxRfWyPcOKlWEcS+x05Ld3nM/Q=");

_c2 = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "LinkTag");
__webpack_require__.$Refresh$.register(_c2, "Header");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/HomePage/Home.js":
/*!*****************************************!*\
  !*** ./src/components/HomePage/Home.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ */ "./src/components/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/home/m/Documents/My_Portfolio/src/components/HomePage/Home.js",
    _this = undefined,
    _s = __webpack_require__.$Refresh$.signature();




var Typed = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_2__["default"])(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.t.bind(null, /*! react-typed */ "./node_modules/react-typed/dist/react-typed.js", 7));
}); // const myCV_URL = "https://media-exp1.licdn.com/dms/document/C4D2DAQEdgdFyMBucWQ/profile-treasury-document-pdf-analyzed/0/1629988189208?e=1630231200&v=beta&t=p4mf9NrWd-xODXeDnarAQn82JXeynhPDJACkY_HzVzc"

_c2 = Typed;

var Home = function Home() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    document.title = 'Home';
  }, []);
  var myImg = "https://fv2-3.failiem.lv/thumb_show.php?i=bcn3wuuat&view&download_checksum=4416ddf622599221c431491d419244e446c41d0c&download_timestamp=1630392303";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_3__["SuspenseCustom"], {
    children: myImg && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      id: "home",
      className: "d-flex flex-column justify-content-center align-items-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "home-container  text-warp",
        "data-aos": "fade-in",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Mohmad Gamal"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["I'm ", '  ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Typed, {
            className: "typed",
            strings: ['Frontend Developer', 'MERN Stack', 'ReactJS Developer', 'Freelancer', 'Cross-functional'],
            typeSpeed: 30,
            backSpeed: 30,
            backDelay: 800,
            loop: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://media-exp1.licdn.com/dms/document/C4D2DAQFYc41OdW5W3Q/profile-treasury-document-pdf-analyzed/0/1630171127300?e=1630479600&v=beta&t=7zfRGBbZn7u8C5SQeBuSsg-FWKEdKFDXIxSn0Qw0d0k",
          target: "_blank",
          rel: "noreferrer",
          className: "btn btn-dark",
          children: "Donwload CV"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 7
  }, _this);
};

_s(Home, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c3 = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c, _c2, _c3;

__webpack_require__.$Refresh$.register(_c, "Typed$loadable");
__webpack_require__.$Refresh$.register(_c2, "Typed");
__webpack_require__.$Refresh$.register(_c3, "Home");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Portfolio/Portfolio.js":
/*!***********************************************!*\
  !*** ./src/components/Portfolio/Portfolio.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery_bridget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery-bridget */ "./node_modules/jquery-bridget/jquery-bridget.js");
/* harmony import */ var jquery_bridget__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery_bridget__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isotope-layout */ "./node_modules/isotope-layout/js/isotope.js");
/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isotope_layout__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isotope_cells_by_row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isotope-cells-by-row */ "./node_modules/isotope-cells-by-row/cells-by-row.js");
/* harmony import */ var isotope_cells_by_row__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isotope_cells_by_row__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data.js */ "./src/components/Portfolio/data.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ */ "./src/components/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);




var _jsxFileName = "/home/m/Documents/My_Portfolio/src/components/Portfolio/Portfolio.js",
    _this = undefined,
    _s = __webpack_require__.$Refresh$.signature();









function ListTag(_ref) {
  var text = _ref.text,
      filterMode = _ref.filterMode,
      NameClass = _ref.NameClass;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      "data-filter": filterMode,
      className: NameClass,
      children: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_c = ListTag;

function LinkTag(_ref2) {
  var URL = _ref2.URL,
      NameURL = _ref2.NameURL;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      target: "_blnck",
      href: URL,
      children: NameURL
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_c2 = LinkTag;

var Portfolio = function Portfolio() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    document.title = 'Portfolio';
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    jquery_bridget__WEBPACK_IMPORTED_MODULE_3___default()('isotope', isotope_layout__WEBPACK_IMPORTED_MODULE_4___default.a, jquery__WEBPACK_IMPORTED_MODULE_2___default.a);
    var portfolioIsotope = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#portfolio-flters li').on('click', function () {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#portfolio-flters li").removeClass('filter-active');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).addClass('filter-active');
      portfolioIsotope.isotope({
        filter: jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).data('filter')
      });
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_7__["SuspenseCustom"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_7__["MainContent"], {
      ID: "portfolio",
      NameClassSection: "portfolio section-bg",
      textP: "Check out some of my projects...",
      textH: "Portfolio",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        "data-aos": "fade-up",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-lg-12 d-flex justify-content-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            id: "portfolio-flters",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ListTag, {
              text: "All",
              filterMode: "*",
              NameClass: "filter-active"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 19
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ListTag, {
              text: "App",
              filterMode: ".filter-app",
              NameClass: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 19
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ListTag, {
              text: "Card",
              filterMode: ".filter-card",
              NameClass: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 19
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ListTag, {
              text: "Web",
              filterMode: ".filter-web",
              NameClass: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 19
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 15
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row portfolio-container",
        "data-aos": "fade-up",
        "data-aos-delay": "10",
        children: _data_js__WEBPACK_IMPORTED_MODULE_6__["default"] && _data_js__WEBPACK_IMPORTED_MODULE_6__["default"].map(function (item, i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-4 col-md-6 portfolio-item ".concat(item.filterMode),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "portfolio-wrap",
              children: [item.img && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: item.img,
                className: "img-fluid rounded",
                alt: item.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 34
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "name_project font-weight-bold",
                children: item.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 21
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "portfolio-links",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(LinkTag, {
                  URL: item.linkLive,
                  NameURL: "Live"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 23
                }, _this), item.frontBack && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(LinkTag, {
                    URL: item.frontGithub,
                    NameURL: "Front"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 78,
                    columnNumber: 27
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(LinkTag, {
                    URL: item.backGithub,
                    NameURL: "Back"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 79,
                    columnNumber: 27
                  }, _this)]
                }, void 0, true), !item.frontBack && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(LinkTag, {
                    URL: item.linkGithub,
                    NameURL: "Github"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 27
                  }, _this)
                }, void 0, false)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 19
            }, _this)
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 7
  }, _this);
};

_s(Portfolio, "3ubReDTFssvu4DHeldAg55cW/CI=");

_c3 = Portfolio;
/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

var _c, _c2, _c3;

__webpack_require__.$Refresh$.register(_c, "ListTag");
__webpack_require__.$Refresh$.register(_c2, "LinkTag");
__webpack_require__.$Refresh$.register(_c3, "Portfolio");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Portfolio/data.js":
/*!******************************************!*\
  !*** ./src/components/Portfolio/data.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

// import ChatNow from "../../images/imgProjects/chatNow.png"
// import amazon from "../../images/imgProjects/amazon.jpg"
// import tiktok from "../../images/imgProjects/tiktok.png"
// import tinder from "../../images/imgProjects/tinder.png"
// import shopStore from "../../images/imgProjects/store.png"
// import TV from "../../images/imgProjects/logoFlix.png"
// import Todo from "../../images/imgProjects/todo.png"
// import Bookmark from "../../images/imgProjects/illustration-features-tab-2.svg"
// import Car from "../../images/imgProjects/car.jpg"
// import Composition from "../../images/imgProjects/developer.jpg"
// import Special from "../../images/imgProjects/landing2.jpg"
// import Elite from "../../images/imgProjects/slide1.jpg"
// import Prototypes from "../../images/imgProjects/landing7.png"
// import Home from "../../images/imgProjects/home.jpg"
// import Tech from "../../images/imgProjects/tec.jpg"
const ChatNow = "https://fv2-2.failiem.lv/thumb_show.php?i=dhkpg2ppp&view",
      amazon = "https://fv2-1.failiem.lv/thumb_show.php?i=2nhj675pb&view",
      tiktok = "https://fv2-2.failiem.lv/thumb_show.php?i=9fevv5y3q&view",
      tinder = "https://fv2-1.failiem.lv/thumb_show.php?i=ra5t5knfw&view",
      shopStore = "https://fv2-2.failiem.lv/thumb_show.php?i=bh8f9rzgn&view",
      TV = "https://fv2-3.failiem.lv/thumb_show.php?i=fpezv36df&view",
      Todo = "https://fv2-3.failiem.lv/thumb_show.php?i=rd2fcawsc&view",
      Bookmark = "https://fv2-2.failiem.lv/thumb_show.php?i=6dmgshqfq&view",
      Car = "https://fv2-1.failiem.lv/thumb_show.php?i=mtfy6fxec&view",
      Composition = "https://fv2-2.failiem.lv/thumb_show.php?i=v52xj3cvg&view",
      Special = "https://fv2-1.failiem.lv/thumb_show.php?i=vhyfmjy5b&view",
      Elite = "https://fv2-2.failiem.lv/thumb_show.php?i=759exk9kb&view",
      Prototypes = "https://fv2-2.failiem.lv/thumb_show.php?i=s88dstvnm&view",
      Home = "https://fv2-1.failiem.lv/thumb_show.php?i=kt43be4vz&view",
      Tech = "https://fv2-3.failiem.lv/thumb_show.php?i=y374tmju8&view",
      ChatNowLive = "https://mohmad012.github.io/ChatNow/",
      amazonLive = "https://amazon-app-self.vercel.app/",
      tiktokLive = "https://tiktok-f8fc2.web.app/",
      tinderLive = "https://mohmad012.github.io/Tinder_frontend/",
      shopStoreLive = "https://store-shop-phi.vercel.app/",
      TVLive = "https://mohmad012.github.io/TV_Search_Flix/",
      TodoLive = "https://mohmad012.github.io/TodoList/",
      BookmarkLive = "./Projects/Bookmark/index.html",
      CarLive = "https://mohmad012.github.io/car-site/",
      CompositionLive = "https://mohmad012.github.io/Sass_Pugjs_Project/",
      SpecialLive = "https://mohmad012.github.io/web_pure_Javascript/",
      EliteLive = "https://mohmad012.github.io/Bootstrap4/",
      PrototypesLive = "https://mohmad012.github.io/bootstrap3-2/",
      HomeLive = "https://mohmad012.github.io/Real-Estate-Site/",
      TechLive = "https://mohmad012.github.io/bootstrap3-1/",
      ChatNowFront = "https://github.com/Mohmad012/ChatNow",
      tiktokFront = "https://github.com/Mohmad012/TikTok_frontend",
      tinderFront = "https://github.com/Mohmad012/Tinder_frontend",
      ChatNowBack = "https://github.com/Mohmad012/ChatNow_Backend",
      tiktokBack = "https://github.com/Mohmad012/TikTok_backend",
      tinderBack = "https://github.com/Mohmad012/Tinder_backend",
      amazonGithub = "https://github.com/Mohmad012/Amazon_App",
      shopStoreGithub = "https://github.com/Mohmad012/Store_Shop",
      TVGithub = "https://github.com/Mohmad012/TV_Search_Flix",
      TodoGithub = "https://github.com/Mohmad012/TodoList",
      BookmarkGithub = "https://github.com/Mohmad012/Portfolio/tree/main/Projects/Bookmark",
      CarGithub = "https://github.com/Mohmad012/car-site",
      CompositionGithub = "https://github.com/Mohmad012/Sass_Pugjs_Project",
      SpecialGithub = "https://github.com/Mohmad012/web_pure_Javascript",
      EliteGithub = "https://github.com/Mohmad012/Bootstrap4",
      PrototypesGithub = "https://github.com/Mohmad012/bootstrap3-2",
      HomeGithub = "https://github.com/Mohmad012/Real-Estate-Site",
      TechGithub = "https://github.com/Mohmad012/bootstrap3-1",
      ChatNowName = "Chat App",
      amazonName = "Amazon App",
      tiktokName = "TikTok App",
      tinderName = "Tinder App",
      shopStoreName = "Shop Store",
      TVName = "TV Search Flims",
      TodoName = "Todo List",
      BookmarkName = "Bookmark Site",
      CarName = "Car Site",
      CompositionName = "Composition Site",
      SpecialName = "Special Design",
      EliteName = "Elite Corp Site",
      PrototypesName = "Prototypes Site",
      HomeName = "Home Design Site",
      TechName = "Tech Site";
const allData = [{
  img: ChatNow,
  filterMode: 'filter-app',
  linkLive: ChatNowLive,
  frontGithub: ChatNowFront,
  backGithub: ChatNowBack,
  name: ChatNowName,
  frontBack: true
}, {
  img: amazon,
  filterMode: 'filter-web',
  linkLive: amazonLive,
  linkGithub: amazonGithub,
  name: amazonName,
  frontBack: false
}, {
  img: tiktok,
  filterMode: 'filter-app',
  linkLive: tiktokLive,
  frontGithub: tiktokFront,
  backGithub: tiktokBack,
  name: tiktokName,
  frontBack: true
}, {
  img: tinder,
  filterMode: 'filter-app',
  linkLive: tinderLive,
  frontGithub: tinderFront,
  backGithub: tinderBack,
  name: tinderName,
  frontBack: true
}, {
  img: shopStore,
  filterMode: 'filter-app',
  linkLive: shopStoreLive,
  linkGithub: shopStoreGithub,
  name: shopStoreName,
  frontBack: false
}, {
  img: TV,
  filterMode: 'filter-web',
  linkLive: TVLive,
  linkGithub: TVGithub,
  name: TVName,
  frontBack: false
}, {
  img: Todo,
  filterMode: 'filter-app',
  linkLive: TodoLive,
  linkGithub: TodoGithub,
  name: TodoName,
  frontBack: false
}, {
  img: Bookmark,
  filterMode: 'filter-card',
  linkLive: BookmarkLive,
  linkGithub: BookmarkGithub,
  name: BookmarkName,
  frontBack: false
}, {
  img: Car,
  filterMode: 'filter-web',
  linkLive: CarLive,
  linkGithub: CarGithub,
  name: CarName,
  frontBack: false
}, {
  img: Composition,
  filterMode: 'filter-card',
  linkLive: CompositionLive,
  linkGithub: CompositionGithub,
  name: CompositionName,
  frontBack: false
}, {
  img: Special,
  filterMode: 'filter-card',
  linkLive: SpecialLive,
  linkGithub: SpecialGithub,
  name: SpecialName,
  frontBack: false
}, {
  img: Elite,
  filterMode: 'filter-card',
  linkLive: EliteLive,
  linkGithub: EliteGithub,
  name: EliteName,
  frontBack: false
}, {
  img: Prototypes,
  filterMode: 'filter-card',
  linkLive: PrototypesLive,
  linkGithub: PrototypesGithub,
  name: PrototypesName,
  frontBack: false
}, {
  img: Home,
  filterMode: 'filter-web',
  linkLive: HomeLive,
  linkGithub: HomeGithub,
  name: HomeName,
  frontBack: false
}, {
  img: Tech,
  filterMode: 'filter-web',
  linkLive: TechLive,
  linkGithub: TechGithub,
  name: TechName,
  frontBack: false
}];
/* harmony default export */ __webpack_exports__["default"] = (allData);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Skills/Skills.js":
/*!*****************************************!*\
  !*** ./src/components/Skills/Skills.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.js */ "./src/components/Skills/data.js");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ */ "./src/components/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/home/m/Documents/My_Portfolio/src/components/Skills/Skills.js",
    _this = undefined,
    _s = __webpack_require__.$Refresh$.signature();





var ProgressBar = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_3__["lazy"])(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-animated-progress-bar */ "./node_modules/react-animated-progress-bar/dist/index.js", 7));
});
_c2 = ProgressBar;

var Skills = function Skills() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    document.title = 'Skills';
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["SuspenseCustom"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["MainContent"], {
      ID: "skills",
      NameClassSection: "skills section-bg",
      textP: "Check out some of my skills...",
      textH: "Skills",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row skills-content",
        children: _data_js__WEBPACK_IMPORTED_MODULE_2__["default"] && _data_js__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "progress-bar col-lg-4 col-md-6",
            "data-aos": "fade-up",
            "data-aos-delay": "100",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: item.skill
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 19
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProgressBar, {
              width: "400px" // height="10px"
              ,
              fontColor: "white",
              trackWidth: "10",
              percentage: item.perc,
              trackPathColor: "#173b6c",
              trackBorderColor: "#fff",
              hollowBackgroundColor: "#173b6c",
              defColor: {
                fair: 'orangered',
                good: 'yellow',
                excellent: '#149ddd',
                poor: 'red'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 19
            }, _this)]
          }, item.id, true, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 7
  }, _this);
};

_s(Skills, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c3 = Skills;
/* harmony default export */ __webpack_exports__["default"] = (Skills);

var _c, _c2, _c3;

__webpack_require__.$Refresh$.register(_c, "ProgressBar$lazy");
__webpack_require__.$Refresh$.register(_c2, "ProgressBar");
__webpack_require__.$Refresh$.register(_c3, "Skills");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Skills/data.js":
/*!***************************************!*\
  !*** ./src/components/Skills/data.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var allSkills = [{
  id: 1,
  perc: "100",
  skill: "HTML"
}, {
  id: 2,
  perc: "97",
  skill: "HTML5"
}, {
  id: 3,
  perc: "97",
  skill: "CSS"
}, {
  id: 4,
  perc: "95",
  skill: "CSS3"
}, {
  id: 5,
  perc: "90",
  skill: "Pug JS"
}, {
  id: 6,
  perc: "97",
  skill: "SCSS"
}, {
  id: 7,
  perc: "95",
  skill: "Bootstrap"
}, {
  id: 8,
  perc: "90",
  skill: "Tailwind CSS"
}, {
  id: 9,
  perc: "95",
  skill: "Javascript"
}, {
  id: 11,
  perc: "97",
  skill: "Git"
}, {
  id: 12,
  perc: "90",
  skill: "Gulp JS"
}, {
  id: 13,
  perc: "95",
  skill: "Material UI"
}, {
  id: 14,
  perc: "90",
  skill: "AJAX"
}, {
  id: 15,
  perc: "95",
  skill: "React JS"
}, {
  id: 16,
  perc: "90",
  skill: "Redux"
}, {
  id: 17,
  perc: "95",
  skill: "Next JS"
}, {
  id: 18,
  perc: "80",
  skill: "Webpack"
}, {
  id: 19,
  perc: "80",
  skill: "Express JS"
}, {
  id: 20,
  perc: "80",
  skill: "Node JS"
}, {
  id: 21,
  perc: "80",
  skill: "Mongodb"
}, {
  id: 22,
  perc: "90",
  skill: "PostgreSQL"
}];
/* harmony default export */ __webpack_exports__["default"] = (allSkills);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/SuspenseCustom.js":
/*!******************************************!*\
  !*** ./src/components/SuspenseCustom.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/home/m/Documents/My_Portfolio/src/components/SuspenseCustom.js",
    _this = undefined;



function Square(_ref) {
  var ClassName = _ref.ClassName;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: ClassName
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 4
  }, this);
}

_c = Square;

var SuspenseCustom = function SuspenseCustom(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
    fallback: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "wrapper",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Square, {
        ClassName: "circle"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Square, {
        ClassName: "circle"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Square, {
        ClassName: "circle"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Square, {
        ClassName: "shadow"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Square, {
        ClassName: "shadow"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Square, {
        ClassName: "shadow"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "Loading"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 14
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 10
    }, _this),
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, _this);
};

_c2 = SuspenseCustom;
/* harmony default export */ __webpack_exports__["default"] = (SuspenseCustom);

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "Square");
__webpack_require__.$Refresh$.register(_c2, "SuspenseCustom");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: Home, Header, About, Portfolio, Skills, Contact, SuspenseCustom, MainContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _HomePage_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage/Home */ "./src/components/HomePage/Home.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return _HomePage_Home__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header/Header */ "./src/components/Header/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _About_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About/About */ "./src/components/About/About.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "About", function() { return _About_About__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Portfolio_Portfolio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Portfolio/Portfolio */ "./src/components/Portfolio/Portfolio.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Portfolio", function() { return _Portfolio_Portfolio__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Skills_Skills__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Skills/Skills */ "./src/components/Skills/Skills.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Skills", function() { return _Skills_Skills__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Contact_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Contact/Contact */ "./src/components/Contact/Contact.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return _Contact_Contact__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _SuspenseCustom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SuspenseCustom */ "./src/components/SuspenseCustom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SuspenseCustom", function() { return _SuspenseCustom__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _mainContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mainContent */ "./src/components/mainContent/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainContent", function() { return _mainContent__WEBPACK_IMPORTED_MODULE_7__["default"]; });

__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);











const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/mainContent/index.js":
/*!*********************************************!*\
  !*** ./src/components/mainContent/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/home/m/Documents/My_Portfolio/src/components/mainContent/index.js",
    _this = undefined;

var MainContent = function MainContent(_ref) {
  var ID = _ref.ID,
      NameClassSection = _ref.NameClassSection,
      textP = _ref.textP,
      textH = _ref.textH,
      children = _ref.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    id: ID,
    className: NameClassSection,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "section-title",
        "data-aos": "fade-down",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: textH
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "font-italic",
          children: textP
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 10
      }, _this), children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 8
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 6
  }, _this);
};

_c = MainContent;
/* harmony default export */ __webpack_exports__["default"] = (MainContent);

var _c;

__webpack_require__.$Refresh$.register(_c, "MainContent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_App_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/App/App */ "./src/components/App/App.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/m/Documents/My_Portfolio/src/index.js";



 // basename="/My_Portfolio"

react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_App_App__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined), document.getElementById('root'));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/index.scss",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/index.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/m/Documents/My_Portfolio/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /home/m/Documents/My_Portfolio/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /home/m/Documents/My_Portfolio/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/m/Documents/My_Portfolio/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map