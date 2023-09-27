import { useState, useEffect } from "react";
import SocialCard from "../SocialCard";

function FetchData() {
  
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://randomuser.me/api/?results=10");
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }
      
      setUsers(userData.results);
    })();
  }, []);

 

  return (
    <div className="App">
     
      <div className="cards-container">

      {users.map((user, index) => (
        <SocialCard key={index} userData={user} />
        ))}
      </div>
    </div>
  );
}

export default FetchData ;