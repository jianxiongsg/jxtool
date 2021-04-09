"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 对象深拷贝
 * @param obj 拷贝对象
 * @returns 返回拷贝结果
 */
function deepCopy(obj) {
    let _obj = Array.isArray(obj) ? [] : {};
    for (let i in obj) {
        _obj[i] = typeof obj[i] === 'object' ? deepCopy(obj[i]) : obj[i];
    }
    return _obj;
}
/**
 * 将字符串{0}{1}... 替换成对应参数值
 * @param str
 * @param data
 * @returns
 */
function formatString(str, ...data) {
    return str.replace(/\{(\d+)\}/g, function (m, i) {
        return data[i];
    });
}
exports.default = {
    deepCopy: deepCopy,
    formatString: formatString
};
