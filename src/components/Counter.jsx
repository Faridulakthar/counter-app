import React from 'react'

const Counter = ({count, setCount}) => {

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1)
    }

    const styles = {
        color: count < 5 ? '#ee496b' : count > 100 ? '#06d6a0' : 'white'
    }

  return (
      <div className="counter">
          <button className="btn" onClick={decrement}>-</button>
          <div style={styles} className="count">{count}</div>
          <button className="btn" onClick={increment}>+</button>
      </div>
  )
}

export default Counter;