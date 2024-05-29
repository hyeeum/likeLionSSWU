import axios from 'axios';
import { useState, useEffect } from 'react';

const URL = "/api/food/img";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setError(null);
      setLoading(true);

      const response = await axios.get(URL, {
        params: {
          serviceKey: process.env.REACT_APP_API_KEY
        }
      });

      setData(response.data.body);  // JSON 데이터의 body 부분을 상태에 설정
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data.length) return <div>No data available</div>;

  return (
    <div className="App">
      {data.map((item, index) => (
        <div key={index}>
          <h1>음식점명: {item.RSTR_NM}</h1>
          <p>지역명: {item.AREA_NM}</p>
          <p><img src={item.FOOD_IMG_URL} alt={item.RSTR_NM} /></p>
        </div>
      ))}
    </div>
  );
}

export default App;
