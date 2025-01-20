
import './App.css'
const { createBrowserRouter, RouterProvider } = ReactRouterDOM;
import AppLayout from './layout/app-layout'

const router = createBrowserRouter([
  {
    Element: <AppLayout/>
  }
])


function App() {

  return (
    <div> Gipher</div>
  )
}

export default App
