import React from "react";
import Header from "./components/header";
import Main from "./pages/main-page";
import Welcome from "./components/Section-welcome";
import VideoCover from "./components/Video-cover";
import LatestNews from "./components/Section-lates-news";
import Footer from "./components/footer";
import "./assets/icon/style.css"


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Welcome />
      <VideoCover />
      <LatestNews />
      <Footer />
    </div>
  );
}

export default App;
