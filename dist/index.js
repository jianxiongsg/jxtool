"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ajax_1 = __importDefault(require("./api/ajax"));
const env_1 = __importDefault(require("./api/env"));
const shortNick_1 = __importDefault(require("./api/shortNick"));
const url_1 = __importDefault(require("./api/url"));
const visibility_1 = __importDefault(require("./api/visibility"));
const lockScroll_1 = __importDefault(require("./api/lockScroll"));
const store_1 = __importDefault(require("./api/store"));
const queueFunc_1 = __importDefault(require("./api/queueFunc"));
const data_1 = __importDefault(require("./api/data"));
exports.default = {
    ajax: ajax_1.default,
    getStatusBarHeight: env_1.default.getStatusBarHeight,
    getBottomBarHeight: env_1.default.getBottomBarHeight,
    isIos: env_1.default.isIos,
    isIPhoneX: env_1.default.isIPhoneX,
    isAndroid: env_1.default.isAndroid,
    shortNick: shortNick_1.default,
    getUrlInfo: url_1.default.getUrlInfo,
    getHrefParamAll: url_1.default.getHrefParamAll,
    getHrefParam: url_1.default.getHrefParam,
    getState: visibility_1.default.getState,
    watch: visibility_1.default.watch,
    disableDodyScroll: lockScroll_1.default.disableDodyScroll,
    enableBodyScroll: lockScroll_1.default.enableBodyScroll,
    clearAllBodyScrollLocks: lockScroll_1.default.clearAllBodyScrollLocks,
    lockScroll: lockScroll_1.default.lockScroll,
    allowScroll: lockScroll_1.default.allowScroll,
    setStorage: store_1.default.setStorage,
    getStorage: store_1.default.getStorage,
    deepCopy: data_1.default.deepCopy,
    formatString: data_1.default.formatString,
    QueueFunc: queueFunc_1.default
};
