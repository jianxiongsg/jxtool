"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let URL_REG = new RegExp('^([a-z0-9-]+\:)?' + //protocol
    '[/]{2}' + //slash x 2
    '(?:([^@/:\?]+)(?::([^@/:]+))?@)?' + //username:password@
    '([^:/?#]+)' + //hostname
    '(?:[:]([0-9]+))?' + //port
    '([/][^?#;]*)?' + //pathname
    '(?:[?]([^#]*))?' + //search
    '([#][^?]*)?$' //hash
, 'i');
let urlParams = {};
let isURL = function (str) {
    return !!str.match(URL_REG);
};
/**
 * 获取url各种信息
 * @param url 需要解析的url
*/
let getUrlInfo = function (url) {
    try {
        url = url || location.href;
        var matches = url.match(URL_REG);
        var info = {
            protocol: '',
            hostname: '',
            port: '',
            host: '',
            pathname: '',
            search: '',
            hash: ''
        };
        info.protocol = matches[1] || (typeof location === 'object' ? location.protocol : '');
        info.hostname = matches[4];
        info.port = matches[5] || '';
        info.host = info.hostname + (info.port ? ':' + info.port : '');
        info.pathname = matches[6] || '/';
        info.search = matches[7] || '';
        info.hash = matches[8] || '';
        return info;
    }
    catch (error) {
        return null;
    }
};
/**
 * 获取url所有参数
 * @param url 需要解析的url
*/
let getHrefParamAll = function (url) {
    try {
        url = url || location.href;
        if (!isURL(url)) {
            console.warn('not url', url);
            return {};
        }
        let search = getUrlInfo(url).search.replace(/^\?/, '');
        if (!search) {
            return {};
        }
        if (urlParams[search]) {
            return urlParams[search];
        }
        let keyValues = search.split("&");
        let result = {};
        for (let i = 0; i < keyValues.length; i++) {
            let items = keyValues[i].split("=");
            let key = items[0];
            let val = items[1];
            result[key] = val;
        }
        urlParams[search] = result;
        return result;
    }
    catch (error) {
        return {};
    }
};
/**
 * 获取url所有参数
 * @param name 参数名
 * @param url 需要解析的url
*/
function getHrefParam(name, url) {
    try {
        url = url || location.href;
        var searchParams = getHrefParamAll(url);
        return searchParams[name] || "";
        // const m = url.match(new RegExp(`${name}=([\\w\\.]+)`, 'i'));
        // if (m && m.length > 0) {
        //     return m[1];
        // }
    }
    catch (error) {
        return "";
    }
}
exports.default = {
    getUrlInfo: getUrlInfo,
    getHrefParamAll: getHrefParamAll,
    getHrefParam: getHrefParam
};
