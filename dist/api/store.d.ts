/**
 * 本地数据存储
 * @param key 属性
 * @param item  值
 */
declare function setStorage(key: string, item: string): void;
/**
 * 获取数据
 * @param key 属性
 *
 */
declare function getStorage(key: string): string;
declare const _default: {
    setStorage: typeof setStorage;
    getStorage: typeof getStorage;
};
export default _default;
