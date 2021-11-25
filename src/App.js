import "./App.css";
import axios from "axios";

function App() {
  const getDictionary = async () => {
    try {
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/test"
      );
    } catch (error) {
      console.log(error);
    }
  };

  return <div className="App"></div>;
}

export default App;
