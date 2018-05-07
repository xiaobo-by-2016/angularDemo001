export function setLocalStorage(key: string, value: any) {
    localStorage.setItem(key,JSON.stringify(value))
}
export function getLocalStorage(key: string){
    return JSON.parse(localStorage.getItem(key))
}
export function clearLocalStorage(){
    localStorage.clear();
}