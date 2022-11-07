import React from 'react'
import Products from './Products';
const Home = (props) => {
  return (
    <>
    <Products showalert={props.showalert}/>
    </>
  )
}

export default Home
