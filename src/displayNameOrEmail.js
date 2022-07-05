import React, { useEffect, useState } from 'react';
import './style.css';

export default function DisplayNameOrEmail() {
  const [userData, setUserData] = useState([]);
  const [dispalyData, setDisplayData] = useState([]);
  useEffect(() => {
    let url = 'https://jsonplaceholder.typicode.com/comments?postId=1';
    fetch(url)
      .then((response) => response.json())
      .then((actualData) => setUserData(actualData))
      .catch((error) => console.log(error));
  }, []);

  const dispalyname = () => {
    let nameArr = userData.map((person) => {
      return person.name;
    });
    setDisplayData(nameArr);
  };
  const displayEmail = () => {
    let emailArr = userData.map((person) => {
      return person.email;
    });
    setDisplayData(emailArr);
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={dispalyname}>Name</button>
      <button onClick={displayEmail}>Email</button>
      <div>
        <ul>
          {dispalyData.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}