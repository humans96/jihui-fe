import $ from 'jQuery';
import window from 'window';

const domain = window.location.hostname === 'dashboard.spiderdt.com' ? '.spiderdt.com' : window.location.hostname;

export const getCookie = key => {
  return $.cookie(key);
}

export const setToken = token => {
  $.cookie('token', token, { domain, expires: 7, path: '/' });
  window.token = token;
}

export const clearCookie = () => {
  $.removeCookie('token', { domain, path: '/' });
  $.removeCookie('token');
  window.token = null;
}
