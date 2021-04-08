/**
 * 本地数据存储
 * @param key 属性
 * @param item  值
 */
function setStorage(key: string, item: string) {
    try {
        window.localStorage.setItem(key, item);
    } catch (error) {
        
    }
    
}
/**
 * 获取数据
 * @param key 属性
 * 
 */
function getStorage(key: string) {
    try {
        return window.localStorage && window.localStorage.getItem(key);
    } catch (error) {
        return ""
    }
    
}


export default{
    setStorage:setStorage,
    getStorage:getStorage
}
