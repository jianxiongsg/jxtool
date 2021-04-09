import ajax from "./api/ajax";
import env from "./api/env";
import shortNick from "./api/shortNick";
import url from "./api/url";
import visibility from "./api/visibility";
import lockScroll from "./api/lockScroll";
import store from "./api/store";
import QueueFunc from "./api/queueFunc";
import data from "./api/data";


export default {
    ajax:ajax,
    getStatusBarHeight:env.getStatusBarHeight,
    getBottomBarHeight:env.getBottomBarHeight,
    isIos:env.isIos,
    isIPhoneX:env.isIPhoneX,
    isAndroid:env.isAndroid,
    shortNick:shortNick,
    getUrlInfo:url.getUrlInfo,
    getHrefParamAll:url.getHrefParamAll,
    getHrefParam:url.getHrefParam,
    getState:visibility.getState,
    watch:visibility.watch,
    disableDodyScroll:lockScroll.disableDodyScroll,
    enableBodyScroll:lockScroll.enableBodyScroll,
    clearAllBodyScrollLocks:lockScroll.clearAllBodyScrollLocks,
    lockScroll:lockScroll.lockScroll,
    allowScroll:lockScroll.allowScroll,
    setStorage:store.setStorage,
    getStorage:store.getStorage,
    deepCopy:data.deepCopy,
    formatString:data.formatString,
    QueueFunc:QueueFunc
}

