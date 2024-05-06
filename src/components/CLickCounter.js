import React from 'react'
import WithCounter from './WithCounter'

const CLickCounter = (props) => {
    const {count, incrementCount} = props
  return (
    <div>
        <button onClick={incrementCount}>
            Click me
        </button>
        <h1>count is : {count}</h1>
    </div>
  )
}

export default WithCounter(CLickCounter)