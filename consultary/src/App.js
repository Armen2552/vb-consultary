import React from "react";
import Map from "./components/header";
import Main from "./pages/main-page";
import Welcome from "./components/Section-welcome";
import LatestNews from "./components/Section-lates-news";
// import Footer from "./components/footer";
import "./assets/icon/style.css"
import Video from "./components/Video-cover";
// import {Profile} from "./components/Profile";


function App() {
  return (
    <div className="App">
      <Map />
      <Main />
      <Welcome />
      <Video />
      <LatestNews />
      {/*<Footer />*/}
      {/*<Profile />*/}
    </div>
  );
}

export default App;
