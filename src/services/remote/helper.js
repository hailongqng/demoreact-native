const API_VERSION = 'v1';
const API_ROUTE = 'api';
const API_PUBLIC = 'public';
const API_ADMIN = 'admin';

export const buildPrivateRequestUrl = relativePath =>
  `/${API_ROUTE}/${API_VERSION}/${relativePath}`;

export const buildPublicRequestUrl = relativePath =>
  `/${API_PUBLIC}${buildPrivateRequestUrl(relativePath)}`;

export const buildAdminRequestUrl = relativePath =>
  `/${API_ADMIN}${buildPrivateRequestUrl(relativePath)}`;
