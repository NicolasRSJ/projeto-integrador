import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Style/Components/NavigationButton.css'

export default class NavigationButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      href: props.href || '/',
      text: props.children || 'NavigationButton',
      func: props.func || null
    }
  }

  render() {

    const { href, text, func } = this.state


    return (
      <Link to={href} className='button' onClick={func} >{text}</Link>
    )
  }
}
