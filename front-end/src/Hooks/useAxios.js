import React from 'react';
import axios from 'axios';

const useAxios = () => {
  const [error, setError] = React.useState(false);

  const request = React.useCallback(async (options) => {
    try {
      const response = await axios(options);
      setError(false);
      return response;
    } catch (err) {
      setError(true);
    }
  }, []);

  return { error, request };
};

export default useAxios;
