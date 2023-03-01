import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Banner from "./Banner";
import BasicExample from "./Card";
import ContactUs from "./Contact";
import Postbox from "./Postbox";


//is the home pages

function App() {
  return (
    <>
      <Banner />
      <BasicExample />
      <Postbox />
      <ContactUs />
    </>
  );
}

export default App;
