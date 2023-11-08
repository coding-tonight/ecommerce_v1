/**
 * 
 * @param {*} str 
 * @returns 
 */

export const base64Encode = (str) => {
    return btoa(encodeURIComponent(str));
}


export const base64Decode = (encodedStr) => {
    return decodeURIComponent(atob(encodedStr));
}
