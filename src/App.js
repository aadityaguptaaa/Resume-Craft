import { useEffect } from "react";
import { ResumeProvider } from "./Context";
import "./App.css";
import Header from "./components/Layouts/Header";
import Navbar from "./components/Layouts/Navbar";
import Footer from "./components/Layouts/Footer";
import Main from "./components/Main";
import WebFont from "webfontloader";

// React Router v5
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./pages/Contact"; // new contact page

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Pacifico", "Poppins"],
      },
    });
  }, []);

  return (
    <ResumeProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </ResumeProvider>
  );
}

export default App;
