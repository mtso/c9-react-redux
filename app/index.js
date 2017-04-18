import ReactDOM from 'react-dom'
import React from 'react'

const App = (props) => {
  return (
    <div>
      <h1>Hello {props.name}</h1>
    </div>
  )
}

ReactDOM.render(
  <App name='world' />,
  document.getElementsByTagName('body')[0]
)