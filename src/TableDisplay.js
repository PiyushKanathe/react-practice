import "./TableDisplay.css";

import { useState, useEffect } from "react";
import axios from "axios";


const TableDisply = () => {
  const [list, setListData] = useState([]);
  const [headData, setHeadData] = useState([]);

  useEffect(() => {
    getData("");
  }, []);

  const getData = async () => {
    let { data } = await axios.get("https://gorest.co.in/public/v2/users");
    console.log(data);
    let theadData = data[0];
    setHeadData(Object.keys(theadData));
    setListData(data);
  };
  return (
    <>
      <table className="Table-style">
        <thead>
          <tr>
            {headData.map((hData) => {
              return <th className="tData-style">{hData}</th>;
            })}
          </tr>
        </thead>
        <tbody>
            {
                list.map((lItem) =>{
                  const {id, name, email, gender, status} = lItem
                    return <tr>
                        <td style={{border: '2px black solid'}}>{id}</td>
                        <td style={{border: '2px black solid'}}>{name}</td>
                        <td style={{border: '2px black solid'}}>{email}</td>
                        <td style={{border: '2px black solid'}}>{gender}</td>
                        <td style={{border: '2px black solid'}}>{status}</td>
                    </tr>
                })
            }
        </tbody>
      </table>
    </>
  );
};

export default TableDisply;
