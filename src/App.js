import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import TextExamples from "./components/TextExamples";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
        <TextExamples />
      <Footer />
    </div>
  );
}

export default App;
