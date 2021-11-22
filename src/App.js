import "./App.css";
import { Header } from "./components/Header.jsx";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer developer="Arman Ali" />
    </div>
  );
}

export default App;
