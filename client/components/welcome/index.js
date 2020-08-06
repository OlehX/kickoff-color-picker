import { useState, useEffect } from "react";
import axios from "axios";

import { SERVER_URL } from "../../constants";
import "./styles.scss";

// this is just an example
// feel free to use class based components and whatever paradigms you're most comfortable with
const Welcome = () => {
  const [greeting, setGreeting] = useState(null);

  useEffect(() => {
    const fetchGreeting = async () => {
      const { status, data } = await axios.get(`${SERVER_URL}/greeting`);

      if (status === 200) {
        setGreeting(data.body);
      } else {
        throw new Error("Error connecting to server");
      }
    };

    fetchGreeting();
  }, [setGreeting, axios]);

  return (
    <h1 className="welcome">{greeting || "Loading..."}</h1>
  );
};

export default Welcome;
