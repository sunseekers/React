import React,{Component} from 'react'
import PropTypes from 'prop-types'
export default class HashRouter extends Component{
  static childContextTypes = {
    location:PropTypes.object,
    history:PropTypes.object
  }
  constructor(props){
    super(props)
    this.state={}
  }
  getChildContext(){
    return {
      location:{pathname:window.location.hash.slice(1)||'/'},
      history:{
        push(path){
          window.location.hash=path
        }
      }
    }
  }
  componentDidMount(){
    window.location.hash = window.location.hash||'/'
    let render =()=>{
      console.log(12)
      this.setState({})
    }
    window.addEventListener('hashchange',render)
  }
  render(){
    console.log({pathname:window.location.hash.slice(1)||'/'})
    return this.props.children
  }
}