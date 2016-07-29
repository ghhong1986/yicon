import isonFetch from 'isom-fetch';
import {
  FETCH_ICON_DETAIL,
  EDIT_ICON,
} from '../constants/actionTypes';

const fetch = isonFetch.create({ baseURL: '/api' });

export function getIconDetail(iconId) {
  return {
    type: FETCH_ICON_DETAIL,
    payload: fetch.get(`/icons/${iconId}`),
  };
}

export function editIcon(iconId, param) {
  return {
    type: EDIT_ICON,
    payload: fetch.patch(`/user/icons/${iconId}`, param),
  };
}