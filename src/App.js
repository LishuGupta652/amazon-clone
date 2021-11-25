import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Header from "./components/Header/Header";
import Definations from "./components/Definations/Definations";

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const getDictionary = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  // TODO: #1 THIS IS COMMING
  useEffect(() => {
    getDictionary();
  }, [word, category]);
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
        {meanings && (
          <Definations word={word} meanings={meanings} category={category} />
        )}
      </Container>
    </div>
  );
}

export default App;
