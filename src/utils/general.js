/* eslint-disable no-restricted-globals */
// import i18n from 'locales';
import moment from 'moment';

// export const history = createBrowserHistory();

export const isValidDate = d => d instanceof Date && !isNaN(d);

// export const translate = (key, options = {}) => i18n.t(key, options);

export const parseNullOrUndefinedToString = value =>
  value !== null && value !== undefined ? value.toString() : '';

export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const randomID = () => {
  const length = 24;
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const formattedNewDate = () => {
  return moment().format('DD/MM/YYYY');
};

export const formattedDate = date => {
  return moment(date).format('DD/MM/YYYY');
};

export const formattedDateWithTime = date => {
  return moment(date).format('DD/MM/YY hh:mm');
};
