import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import {mode} from "@chakra-ui/theme-tools"
import { ColorModeScript } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import UserPage from './pages/UserPage.jsx'
import PostPage from './pages/PostPage.jsx'

const styles = {
  global:(props)=>({
    body:{
      color:mode("gray.800","whiteAlpha.900")(props),
      bg:mode("gray.100","#101010")(props)
    }
  })
};

const config = {
  initialColorMode:"dark",
  useSystemColorMode :true
}

const colors ={
  gray:{
    light:"#616161",
    dark:"#1e1e1e"
  }
}

const theme = extendTheme({styles, config, colors})

const routes = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/:username",
        element:<UserPage/>
      },
      {
        path:"/:username/posts/:pid",
        element:<PostPage/>
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
    <ChakraProvider theme={theme}>
    <RouterProvider router={routes}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
    </RouterProvider> 
    </ChakraProvider>     
  </React.StrictMode>,
)
