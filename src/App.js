import './App.css';
// import Feature from "./features/Feature";
// import FrontPage from "./component/reuseables/frontPage";
import {Routes} from "./routes";
import {useRoutes} from "react-router-dom";

function App() {
  return (
      // <Feature/>
      // <FrontPage/>
      useRoutes(Routes)
  );
}

export default App;
