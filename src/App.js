import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Text from "./components/Text";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
        <Text element={'div'}>
            Тестовый текст блок
        </Text>
      <Footer />
    </div>
  );
}

export default App;
