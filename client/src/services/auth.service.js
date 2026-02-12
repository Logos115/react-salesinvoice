import axios from 'axios';

export const login = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .post('/user/login', data)
      .then((response) => {
        // handle success
        const data = response?.data;
        if (!data || !data.token) return reject(new Error('Invalid login response'));
        const { token, type } = data;
        const isAdmin = type === 'admin' ? true : false;
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        dispatch({ type: 'auth/loginSuccess', payload: { token, isAdmin } });
        resolve();
      })
      .catch(function (error) {
        // handle error
        reject(error);
      })
      .then(function () {
        // always executed
      });
  });
};

export const logout = () => (dispatch) => {
  delete axios.defaults.headers.common['Authorization'];
  dispatch({ type: 'auth/logout' });
};
