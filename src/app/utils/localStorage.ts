export function setLocalStorage(key: string, value: any) {
    localStorage.setItem(key,JSON.stringify(value))
}
export function getLocalStorage(key: string){
    return JSON.parse(localStorage.getItem(key))
}
export function updateByKey(key,objKey,value){
    let jsonObj =getLocalStorage(key);
    jsonObj[objKey] = value;
    setLocalStorage(key,jsonObj);
}
export function clearLocalStorage(){
    localStorage.clear();
}