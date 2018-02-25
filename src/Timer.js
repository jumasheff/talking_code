import React, { Component } from 'react'

class Timer extends Component {
  constructor(props){
    super(props);
    this.state = {
      timer: null,
      counter: 0.0,
    }
  }

  componentDidMount() {
      let timer = setInterval(this.tick, 100)
      this.setState({timer})
  }

  componentWillUnmount() {
      this.clearInterval(this.state.timer)
  }

  tick = () => {
      this.setState({
        counter: this.state.counter + 0.1
      })
  }

  render() {
    return (
      <div>
        {React.cloneElement(this.props.children, {
            counter: this.state.counter
        })}
      </div>
    )
  }
}

export default Timer
