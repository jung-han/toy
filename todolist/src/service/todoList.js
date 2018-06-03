import * as url from '../apiUrl';
import axios from 'axios';

axios.defaults.baseURL = 'http://www.mocky.io';

export function getLatestTodoList() {
  return axios.get(url.GET_LATEST_TODOLIST);
}
