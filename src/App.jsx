import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import Auth from './Auth/Auth';

function App() {
  return <Auth><RouterProvider router={router}></RouterProvider></Auth>;
}

export default App
