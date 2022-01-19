import React from "react"
import "./Home.css"
import { Button } from "@mui/material"

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome</h1>
      <Button href="/counter">Counter</Button>
      <Button href="/clock">Clock</Button>
      <Button href="/colorgenerator">Random Color generator</Button>
      <Button href="/todolist">Todo List</Button>
    </div>
  )
}

export default Home
