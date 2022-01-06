import React from 'react';
import axios from 'axios';

const useAxios = () => {
  const [error, setError] = React.useState(false);

  const request = React.useCallback(async (url, options) => {
    try {
      const response = await axios(url, options);
      setError(false);
      return response;
    } catch (err) {
      setError(true);
    }
  }, [])

  return { error, request };
}

export default useAxios;
