import { Button } from "@mantine/core"
import { Header } from "./components/Header"
import { Route, Routes } from "react-router"
import { Catalog } from "./components/Catalog"

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
        <Route path="/collections" element={<p>Collections</p>} />
        <Route path="/about" element={<p>About</p>} />
      </Routes>
    </Header>
  )
}
