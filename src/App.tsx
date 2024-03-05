import { Container } from "@mui/material";
import {
  RouterProvider,
} from "react-router-dom";
import './styles/App.css';
import routers from './configuration/routers';
import { SnackbarProvider } from "notistack";

function App() {
  
  return (
    <Container className="App">
      <SnackbarProvider maxSnack={3} className="snackSuccess">
       <RouterProvider router={routers} />
       </SnackbarProvider>
    </Container>
  );
}

export default App;
