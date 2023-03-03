import "./App.css";
import "../components/Buttons.css";
import "./webkit-styles.css";
import Header from "../features/header/Header";
import Footer from "../features/footer/Footer";
// import LogoBar from "../features/logo-bar/LogoBar";

function App() {
  return (
    <div>
      <Header />

      {/* <LogoBar /> */}
      <Footer />
    </div>
  );
}

export default App;
