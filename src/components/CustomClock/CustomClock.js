import React, { useEffect, useState } from "react"
import "react-clock/dist/Clock.css"
import Clock from "react-clock"

function CustomClock() {
  const [value, setValue] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="Clock">
      <p>Current time:</p>
      <Clock value={value} />
    </div>
  )
}

export default CustomClock
