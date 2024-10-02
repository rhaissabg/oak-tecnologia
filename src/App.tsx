import { BrowserRouter, Route, Routes } from "react-router-dom"
import RegisterProducts from "./pages/RegisterProducts"
import ProductsList from "./pages/ProductsList"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterProducts />} />
        <Route path="/products" element={<ProductsList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App