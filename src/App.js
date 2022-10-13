
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Delivery from "./Pages/Delivery";


function App() {

 

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Delivery />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
