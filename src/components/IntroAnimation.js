import React from 'react'

class IntroAnimation extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    setTimeout(() => {
      this.refs.introAnimationWrapper.style.opacity = '0'
      this.refs.introAnimationWrapper.style.zIndex = '-1'
      this.props.history.push('/portfolio')
    }, 5000)
  }
  render() {
    return (
      <div className="intro-animation-wrapper" ref="introAnimationWrapper">
        <div className="intro-animation">
          <h1 className="intro-animation__text--name">Peter Kim</h1>
          <h1 className="intro-animation__text--title">Frontend Developer</h1>
        </div>
      </div>
    )
  }
}

export default IntroAnimation