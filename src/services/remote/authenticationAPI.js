import {APIs} from '../../utils';
import {buildPublicRequestUrl} from './helper';

const authenticationAPI = {
  login: info => APIs.post(buildPublicRequestUrl('login'), info),
  logout: info => APIs.post(buildAdminRequestUrl('logout-admin'), info),
};
export default authenticationAPI;
