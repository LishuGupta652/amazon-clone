import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const getDictionary = async () => {
    try {
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/test"
      );
      console.log(data);
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDictionary();
  }, []);
  return (
    <div className="App">
      <Container></Container>
    </div>
  );
}

export default App;
