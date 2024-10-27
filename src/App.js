import "./App.css";
import Users from "./Users";
import axios from "axios";
import { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://official-joke-api.appspot.com/jokes/random/25")
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      {data.map(({ type,setup, punchline, id }) => {
        return (
          <>
            <Users
              type={type}
             setup={setup}
              punchline={punchline}
              id={id}
            />
          </>
        );
      })}
    </div>
  );
}

export default App;