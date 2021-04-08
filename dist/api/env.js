"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let isIOS = false;
let isIphoneX = false;
let initedipx = false;
let statusBarHeight = 30;
let bottomBarHeight = 0;
function initCheckIpx() {
    initedipx = true;
    isIOS = Boolean(navigator.userAgent.match(/(iphone|ipod|ipad)/i));
    const isAndroid = Boolean(navigator.userAgent.match(/android/i));
    let navBarHeight = 88;
    if (isIOS) {
        isIphoneX =
            window &&
                window.screen &&
                window.screen.width &&
                window.screen.height &&
                ((window.screen.width == 375 && window.screen.height == 812) ||
                    (window.screen.width == 414 && window.screen.height == 896) || (window.screen.width == 390 && window.screen.height == 844) || (window.screen.width == 428 && window.screen.height == 926));
        if (isIphoneX) {
            statusBarHeight = 88;
            bottomBarHeight = 68;
        }
        else if (isIOS) {
            statusBarHeight = 40;
        }
    }
}
/**
 * 获取顶部导航栏高度
 */
function getStatusBarHeight() {
    if (!initedipx) {
        initCheckIpx();
    }
    return statusBarHeight;
}
/**
 * 是否是ios
 */
function isIos() {
    if (!initedipx) {
        initCheckIpx();
    }
    return isIOS;
}
/**
 * 获取底部导航栏高度
 */
function getBottomBarHeight() {
    if (!initedipx) {
        initCheckIpx();
    }
    return bottomBarHeight;
}
/**
 * 是否是iPhoneX
 */
function isIPhoneX() {
    if (!initedipx) {
        initCheckIpx();
    }
    return isIphoneX;
}
exports.default = {
    getStatusBarHeight: getStatusBarHeight,
    getBottomBarHeight: getBottomBarHeight,
    isIos: isIos,
    isIPhoneX: isIPhoneX
};
