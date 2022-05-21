import axios from "axios";
import { useEffect, useState } from "react";

const DisplayComp = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let dataTemp = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1/comments"
    ); 
    console.log(dataTemp)
    setData(dataTemp.data);
  };

  return(
      <>
      <ul>
          {data && data.map((item) => {
              return (
                  <>
                    <li>{item.postId}</li>
                    <li>{item.id}</li>
                    <li>{item.name}</li>
                    <li>{item.email}</li>
                    <li>{item.body}</li>
                  </>
              )
          })}
      </ul>
      </>
  )
};

export default DisplayComp;
