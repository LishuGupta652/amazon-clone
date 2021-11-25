import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import Header from "./components/Header/Header";
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
    <div
      className="App"
      style={{ height: "100vh", backgroundColor: "#282c34", color: "white" }}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header />
      </Container>
    </div>
  );
}

export default App;
