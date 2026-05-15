import { Button } from "@mantine/core"
import { Header } from "./components/Header"
import { Route, Routes } from "react-router"
import { Catalog } from "./components/catalog/Catalog"
import { ProductDetail } from "./components/catalog/ProductDetail"
import { Cart } from "./components/Cart"
import { Sign } from "./components/sign/Sign"
import { User } from "./components/User"

export function App() {
  return (
    <Header>
      <Routes>
        <Route
          index
          element={
            <div className="flex flex-col justify-center items-center py-10">
              <p className="text-3xl">clamarket</p>
              <Button>Button</Button>
            </div>
          }
        />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:productId" element={<ProductDetail />} />
        <Route path="/collections" element={<p>Collections</p>} />
        <Route path="/about" element={<p>About</p>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sign-in" element={<Sign />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Header>
  )
}
