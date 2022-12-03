import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../containers/Home";
import Checkout from "../containers/Checkout";
import Information from "../containers/Information";
import Payment from "../containers/Payment";
import Success from "../containers/Success";
import NotFound from "../containers/NotFound";
import LayOut from "../components/Layout";
import { AppContextProvider } from "../context/AppContext";

function App() {
  return (
    <AppContextProvider>
      <HashRouter>
        <LayOut>
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/information" element={<Information />} />
          <Route path="/checkout/payment" element={<Payment />} />
          <Route path="/checkout/success" element={<Success/>} />
          <Route path="*" element={<NotFound />} />
          </Routes>
        </LayOut>
      </HashRouter>
    </AppContextProvider>
  );
}

export default App;
