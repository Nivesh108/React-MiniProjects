import React from "react"
import "./Home.css"
import { Button } from "@mui/material"

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome</h1>
      <Button href={`${process.env.PUBLIC_URL}/counter`}>Counter</Button>
      <Button href={`${process.env.PUBLIC_URL}/clock`}>Clock</Button>
      <Button href={`${process.env.PUBLIC_URL}/colorgenerator`}>Random Color generator</Button>
      <Button href={`${process.env.PUBLIC_URL}/todolist`}>Todo List</Button>
    </div>
  )
}

export default Home
