/**
 * 获取url所有参数
 * @param name 参数名
 * @param url 需要解析的url
*/
declare function getHrefParam(name: string, url?: string): any;
declare const _default: {
    getUrlInfo: (url: string) => {
        protocol: string;
        hostname: string;
        port: string;
        host: string;
        pathname: string;
        search: string;
        hash: string;
    };
    getHrefParamAll: (url: string) => any;
    getHrefParam: typeof getHrefParam;
};
export default _default;
