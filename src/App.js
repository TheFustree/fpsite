import './styles/common.css';
import Header from "./components/header/Header";
import ResponsiveNavbar from "./components/navbar/ResponsiveNavbar";
import Footer from "./components/footer/Footer";
import './styles/fonts.css';

function App() {
  return (
    <div className="common">
      <Header/>
      <ResponsiveNavbar/>
      <h1>hellofff</h1>
      <Footer/>
    </div>
  );
}

export default App;
