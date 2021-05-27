/* eslint-disable no-console */
import axios from 'axios';
import {APIPATH} from './constants';
import {store} from '../../index';

const getErrorMessage = error =>
  error &&
  error.response &&
  error.response.data &&
  error.response.data.attached_err_string
    ? error.response.data.attached_err_string
    : error.message.toString();

class API {
  constructor() {
    this.customAxios = axios.create({
      baseURL: APIPATH.serverHost,
      timeout: 60000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.customAxios.interceptors.request.use(request => {
      const authorization = this._getAuthorization();
      if (authorization) {
        request.headers.Authorization = `Bearer ${authorization}`;
      }
      console.log(
        '%c%s',
        'color: blue; background: black; font-size: 12px;',
        'HTTP Request',
        request,
      );

      return request;
    });

    this.customAxios.interceptors.response.use(
      response => {
        console.log(
          '%c%s',
          'color: green; background: black; font-size: 12px;',
          'HTTP Response',
          response,
        );

        return Promise.resolve(response.data);
      },
      error => {
        console.log(
          '%c%s',
          'color: red; background: black; font-size: 12px;',
          'HTTP Response',
          error,
        );
        const errorMessage = getErrorMessage(error);
        return Promise.reject(error);
      },
    );
    this._isAlreadyFetchingAccessToken = false;
    this._subscribers = [];
  }

  donwloadFile = false;

  _getAuthorization = () => {
    if (store) {
      const state = store.getState();
      console.log('state', state);
      if (state && state.login && state.login.auth) {
        const {accessToken} = state.login.auth;
        if (accessToken) {
          return accessToken;
        }
      }
    }
    return null;
  };

  _isTokenExpiredError = errorResponse => {
    return errorResponse;
  };

  _resetTokenAndReattemptRequest = async error => {
    try {
      const {response: errorResponse} = error;
      const resetToken = 'thisIsTheToken';
      if (!resetToken) {
        // We can't refresh, throw the error anyway
        return Promise.reject(error);
      }
      /* Proceed to the token refresh procedure
      We create a new Promise that will retry the request,
      clone all the request configuration from the failed
      request in the error object. */
      const retryOriginalRequest = new Promise(resolve => {
        /* We need to add the request retry to the queue
      since there another request that already attempt to
      refresh the token */
        this._addSubscriber(accessToken => {
          errorResponse.config.headers.Authorization = `Bearer ${accessToken}`;
          resolve(axios(errorResponse.config));
        });
      });
      if (!this._isAlreadyFetchingAccessToken) {
        this._isAlreadyFetchingAccessToken = true;
        const response = await axios({
          method: 'post',
          url: `<YOUR TOKEN REFREH ENDPOINT>`,
          data: {
            token: resetToken, // Just an example, your case may vary
          },
        });
        if (!response.data) {
          return Promise.reject(error);
        }
        const newToken = response.data.token;
        // TokenUtils.saveRefreshToken(newToken);
        this._isAlreadyFetchingAccessToken = false;
        this._onAccessTokenFetched(newToken);
      }
      return retryOriginalRequest;
    } catch (err) {
      return Promise.reject(err);
    }
  };

  _onAccessTokenFetched = accessToken => {
    // When the refresh is successful, we start retrying the requests one by one and empty the queue
    this._subscribers.forEach(callback => callback(accessToken));
    this._subscribers = [];
  };

  _addSubscriber = callback => {
    this._subscribers.push(callback);
  };

  /**
   * Public methods
   */
  get = (url, configs) => {
    return this.customAxios.get(url, configs);
  };

  post = (url, data, configs) => {
    return this.customAxios.post(url, data, configs);
  };

  put = (url, data, configs) => {
    return this.customAxios.put(url, data, configs);
  };

  delete = (url, configs) => {
    return this.customAxios.delete(url, configs);
  };

  withoutAuth = () =>
    axios.create({
      baseURL: APIPATH.serverHost,
      timeout: 60000,
      headers: {
        'Content-Type': 'application/json',
        // 'Cache-Control': 'no-cache'
        // 'Access-Control-Allow-Origin': 'true'
      },
      // withCredentials: true
    });
}

export default new API();
