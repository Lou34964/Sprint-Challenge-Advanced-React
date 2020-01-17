import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAPI = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:5000/api/players')
      .then(res => {
          //console.log(res);
          setData(res.data);
      })
      .catch(error => console.log(error));
  }, [])



  return [data];
}