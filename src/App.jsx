
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/rootLayout'
import Landing from './pages/landing'
import "./App.css"

const router = createBrowserRouter ([
  {
    path:"/",
    element: <RootLayout/>,
    children:[
      {index: true, element: <Landing/>}],
  }
])

function App() {
 

  return (
   <>
   <RouterProvider router = {router}/>
   </>
  )
}

export default App
