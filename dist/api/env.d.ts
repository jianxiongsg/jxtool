/**
 * 获取顶部导航栏高度
 */
declare function getStatusBarHeight(): number;
/**
 * 是否是ios
 */
declare function isIos(): boolean;
/**
 * 获取底部导航栏高度
 */
declare function getBottomBarHeight(): number;
/**
 * 是否是iPhoneX
 */
declare function isIPhoneX(): boolean;
declare const _default: {
    getStatusBarHeight: typeof getStatusBarHeight;
    getBottomBarHeight: typeof getBottomBarHeight;
    isIos: typeof isIos;
    isIPhoneX: typeof isIPhoneX;
};
export default _default;
