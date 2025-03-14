import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  CategoryPage,
  ItemDetailContainer,
  NotFound,
  CartPage,
  CheckoutPage,
} from "./routes";
import { NavBar, Footer } from "./components";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />{" "}
            <Route path="/category/:slug" element={<CategoryPage />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}
