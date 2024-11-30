import axios from 'axios';

const loginUser = async (formData) => {
  const response = await axios.post('http://localhost:4000/login', formData, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

const signupUser = async (formData) => {
  const response = await axios.post('http://localhost:4000/signup', formData, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

export { loginUser, signupUser };
