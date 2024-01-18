import {
  RouterProvider,
} from "react-router-dom";
import './App.css';
import routers from './configuration/routers'

function App() {
  
  return (
    <div className="App">
       <RouterProvider router={routers} />
    </div>
  );
}

export default App;
