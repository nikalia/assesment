import axios from 'axios';
 
export default {
  fetch(url, data) {
    if (data == null) {
      data = {};
    }
    return axios
      .get(`${url}`, {
        headers: headers(),
      })
      .catch(error => dispatchError(error));
  },

  post(url, data) {
    console.log('header:', headers());
    return axios
      .post(`${url}`, data, {
        headers: headers(),
      })
      .catch(error => dispatchError(error));
  },

  put(url, data) {
    return axios
      .put(`${url}`, data, { headers: headers() })
      .catch(error => error.response);
  },

  delete(url, data) {
    return axios
      .delete(`${url}`, { headers: headers() })
      .catch(error => dispatchError(error));
  }
}