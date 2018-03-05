import { clearCookie, getCookie, setToken } from 'store/modules/user/cookies';
import { user } from 'store/mutation-type';
import {
  sessionInfoReq,
  loginReq,
  logoutReq,
  userInfoReq,
  fetchWechatAuthUrl
} from 'api/user';

const initialState = {
  auth: false,
  token: null,
  haveTriedAuth: false,
  wechatAuthUrl: null
};

const unAuth = {
  auth: false,
  token: null,
  haveTriedAuth: true
};

// actions
const actions = {
  [user.checkToken]: async () => {
    const token = getCookie('token');
    if(!token) {
      return unAuth;
    }

    console.log('token from cookie: ', token);
    window.token = token;
    const sessionInfo = await sessionInfoReq(null, `/${token}`, '/info');

    if(200 === sessionInfo.status) { // auth
      console.log('auth successfully with cookie token', sessionInfo);

      const { userId , scopes } = sessionInfo.data;
      return {
        auth: true,
        token,
        userId,
        haveTriedAuth: true
      };
    }else { // unAuth
      console.log('auth unsuccessfully with cookie token');
      clearCookie();
      return unAuth;
    }
  },
  [user.login]: async payload => {
    const userInfo = await loginReq(payload);

    if(200 === userInfo.status) { // login success
      console.log('login Successfully, response: ', userInfo);
      const { token, userId, user_name } = userInfo.data;

      // refresh token in cookie & window
      setToken(token);

      // TODO
      return {
        auth: true,
        token,
        userId,
        username: user_name
      };
    }else {
      return { loginErrCode: userInfo.code };
    }
  },
  [user.logout]: async () => {
    // request to logout
    const result = await logoutReq();

    // clear window & cookie
    clearCookie();
    return {
      auth: false,
      token: null,
      haveTriedAuth: false // flase here, need login page appear
    };
  },
  [user.info]: async id => {
    const userInfo = await userInfoReq();
    console.log('userInfo', userInfo);
    if(200 === userInfo.status){
      return userInfo.data;
    }else {
      return null;
    }
  },
  // [user.active]: async () => {
  //   const active_url = setTimeout(function() {
  //     return getUrl = 'www.awe.saas?msg=nonono&lang=asc&aaczv=14r';
  //   }, 200);
  //   console.log('users', active_url);
  //   return active_url;
  // }
};

export default {
  actions
};