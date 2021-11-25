import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Header from "./components/Header/Header";

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const getDictionary = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      console.log(data.data);
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  // TODO: #1 THIS IS COMMING
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
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
      </Container>
    </div>
  );
}

export default App;
