import ajax from "./api/ajax";
import shortNick from "./api/shortNick";
declare const _default: {
    ajax: typeof ajax;
    getStatusBarHeight: () => number;
    getBottomBarHeight: () => number;
    isIos: () => boolean;
    isIPhoneX: () => boolean;
    shortNick: typeof shortNick;
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
    getHrefParam: (name: string, url?: string) => any;
    getState: () => string;
    watch: (cb: (visibility: any) => void) => void;
};
export default _default;
