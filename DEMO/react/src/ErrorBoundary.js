import React,{Component} from 'react' 

 class Error extends Component {
   constructor(props){
     super(props)
     this.state = {
       isError:false
     }
   }
   render(){
    if (!this.state.isError){
      return  <div>暂无此组件</div>
      }
       return this.props.children
   }
 } 
 export default class ErrorBoundary extends Component {
   constructor(props) {
     super(props)

   }
   render(){
     return (
      <Error>
        <div>hhh</div>
      </Error>
     )
   }
 }