/**
 * 对象深拷贝
 * @param obj 拷贝对象
 * @returns 返回拷贝结果
 */
declare function deepCopy(obj: any): {};
/**
 * 将字符串{0}{1}... 替换成对应参数值
 * @param str
 * @param data
 * @returns
 */
declare function formatString(str: string, ...data: any[]): string;
declare const _default: {
    deepCopy: typeof deepCopy;
    formatString: typeof formatString;
};
export default _default;
