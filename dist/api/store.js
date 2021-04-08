"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 本地数据存储
 * @param key 属性
 * @param item  值
 */
function setStorage(key, item) {
    try {
        window.localStorage.setItem(key, item);
    }
    catch (error) {
    }
}
/**
 * 获取数据
 * @param key 属性
 *
 */
function getStorage(key) {
    try {
        return window.localStorage && window.localStorage.getItem(key);
    }
    catch (error) {
        return "";
    }
}
exports.default = {
    setStorage: setStorage,
    getStorage: getStorage
};
