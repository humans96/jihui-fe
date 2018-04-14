import request from 'api/request';

import window from 'window';

// export const sessionInfoReq = request('/session');
// export const userInfoReq = request('/users/id');
export const login = request('/login','POST');
export const check = request('/check');
export const register = request('/register','POST');
// export const getCookie = key => {
//   return $.cookie(key);
// }

// export const clearCookie = () => {
//   window.token = null;
//   $.removeCookie('token', { domain: '.spiderdt.com', path: '/' });
//   $.removeCookie('token');
// }
