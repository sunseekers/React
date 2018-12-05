import React,{Component} from 'react'
import {createPortal} from 'react-dom';
import './index.css';
class Modal extends Component {//这里是一个插槽组件
  constructor(props){
    super(props)
    this.el = document.createElement('div');
  }
  componentDidMount(){
  document.getElementById('model-root').appendChild(this.el);
  }
  componentWillUnmount(){
    document.getElementById('model-root').removeChild(this.el);
  }
  render(){
    return createPortal(//渲染一个插槽，第一个参数是要渲染的子元素，第二个是要挂载的父元素
      <div>
        <h1>hello sunseekers 我在底下</h1>
        <p>在这里可以写一写公共的方法，如果有特例就写在children里面</p>
        {this.props.children}
      </div>
    ,this.el)
  }
}

export default class Portal extends Component{
  constructor(props){
    super(props)
    this.state = {showModal: false};
  }
  handleShow = ()=> {
    this.setState(()=>({showModal: true}));
  }
  handleHide = ()=> {
    this.setState(()=>({showModal: false}));
  }
  render(){
    const modal = this.state.showModal ? (
      <Modal>
        <div className="modal">
        我里面包含了一些特例，每一个引用插槽的朋友可以根据需求自定义
          <div> 
            With a portal, we can render content into a different part of the DOM, as if it were any other React child.
          </div>
          <button onClick={this.handleHide}>Hide modal</button>
        </div>
      </Modal>
    ) : null; 
    return (
      <div className="app">
        This div has overflow: hidden.
        <button onClick={this.handleShow}>Show modal</button>
        {modal}
      </div>
    )
  }
}