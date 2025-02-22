import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import ErrorPage from "./pages/ErrorPage"
import Layout from "./components/Layout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<ErrorPage />}/>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
