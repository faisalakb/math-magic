import React, { useState, useEffect } from 'react';
import Headers from './Headers';

const DisplayInp = () => {
  const category = 'success';
  const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, {
          method: 'GET',
          headers: {
            'X-Api-Key': 'EYG4+nl/iDHtmk7LkA/Wgw==6Ayxwjh0eGnR3a8N',
            'Content-Type': 'application/json',
          },
        });

        if (!res.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await res.json();
        setData(jsonData[0].quote);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return (
      <p>
        Error:
        {error.message}
      </p>
    );
  }

  return (
    <>
      <Headers />
      <div>
        <h1>Quote</h1>
        <ul>
          <li>{data}</li>
        </ul>
      </div>
    </>
  );
};

export default DisplayInp;
