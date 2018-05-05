import request from 'api/request';

import window from 'window';

// export const sessionInfoReq = request('/session');
// export const userInfoReq = request('/users/id');
export const login = request('/login','POST');
export const check = request('/check');
export const register = request('/register','POST');
export const updatePwd = request('/updatePwd','POST');

export const getCartNum = request('/getCartNum');
export const getOrderNum = request('/getOrderNum');
// export const getOrder = request('/order');
export const getCart = request('/cart');
export const deleteCart = request('/cartDelete');

export const getAddress = request('/getAddress');
export const addAddress = request('/addAddress','POST');
export const deleteAddress = request('/deleteAddress','POST');
export const editAddress = request('/editAddress','POST');
// export const getCookie = key => {
//   return $.cookie(key);
// }

// export const clearCookie = () => {
//   window.token = null;
//   $.removeCookie('token', { domain: '.spiderdt.com', path: '/' });
//   $.removeCookie('token');
// }
