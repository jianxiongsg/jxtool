"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 昵称长度限制
 * @param str 昵称
 * @param len 最大长度
*/
function shortNick(str, len, insert = "...", isCenter = false) {
    if (str != null && str != undefined) {
        const reg = /[\u4e00-\u9fa5]/g;
        const _chineseCharNum = ~~(str.match(reg) && str.match(reg).length);
        const realLength = _chineseCharNum + Math.ceil((str.length - _chineseCharNum) / 2);
        if (realLength <= len) {
            return str;
        }
        if (isCenter) {
            return str.substring(0, 1) + insert + str.substring(str.length - 1, str.length);
        }
        return str.substring(0, len - 1) + insert;
    }
    return str;
}
exports.default = shortNick;
