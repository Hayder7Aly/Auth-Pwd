import { WebAuth } from 'auth0-js';

export const webAuth = new WebAuth({
    clientID: '85IxRz6sEAGTpW6fih1WlagyAc0HMvtz',
    domain: 'https://dev-avep8--8.us.auth0.com',
    redirectUri: 'https://rtpxrn.sse.codesandbox.io/coupon',
    responseType: 'token',
  });