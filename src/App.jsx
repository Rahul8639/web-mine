import React from 'react'
import Header from './Components/Header'
import Home from './Pages/Home'
import './index.css'
import Loader from './Components/Loader'
import CustomScrollbar from './Components/CustomScrollbar'
import DynamicTitle from './Components/DynamicTitle'

const App = () => {
  return (
    <>
      <DynamicTitle />
      <Loader />
      <CustomScrollbar />
      <Header />
      <Home />
    </>
  )
}

export default App