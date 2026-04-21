import "@mantine/core/styles.css"
import { createTheme, MantineProvider } from "@mantine/core"
import { BrowserRouter } from "react-router"

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import { App } from "./App.tsx"

const theme = createTheme({
  fontFamily: "Poppins, sans-serif",
})

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider theme={theme}>
        <App />
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>,
)
