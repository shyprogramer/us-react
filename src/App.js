import {BrowserRouter, Route, Routes} from "react-router-dom"
import UrlShort from "./UrlShort"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/:code' element={<UrlShort />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
