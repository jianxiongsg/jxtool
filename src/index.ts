import ajax from "./api/ajax";
import env from "./api/env";
import shortNick from "./api/shortNick";
import url from "./api/url";
import visibility from "./api/visibility";


export default {
    ajax:ajax,
    getStatusBarHeight:env.getStatusBarHeight,
    getBottomBarHeight:env.getBottomBarHeight,
    isIos:env.isIos,
    isIPhoneX:env.isIPhoneX,
    shortNick:shortNick,
    getUrlInfo:url.getUrlInfo,
    getHrefParamAll:url.getHrefParamAll,
    getHrefParam:url.getHrefParam,
    getState:visibility.getState,
    watch:visibility.watch
}