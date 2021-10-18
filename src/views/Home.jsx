import React from 'react'
import Navbar from "../components/Navbar"
import Header from '../components/Header'
import { motion } from 'framer-motion'
const Home = () => {
  return (
    
    <motion.div intial = {{opacity : 0}} animate = {{opacity : 1}} exit ={{opacity : 0}} >
      <title>Avengers V Justice League</title> 
      <Navbar icon="red" background="red"/>
      <Header/>
    </motion.div>
  )
}

export default Home