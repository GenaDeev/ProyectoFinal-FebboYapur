import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, CategoryPage, ItemDetailContainer, NotFound } from './routes';

export default function App() {
  const itemsInCart = 1;
  return (
    <>
      <BrowserRouter>
        <NavBar itemsInCart={itemsInCart} />
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path="/" element={<Home />} /> {/* Home contiene ItemListContainer */}
          <Route path="/category/:slug" element={<CategoryPage />} /> {/* CategoryPage contiene ItemListContainer */}
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}