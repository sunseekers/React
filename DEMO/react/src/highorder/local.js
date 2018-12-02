/**
 * 传一个老组件，返回一个新组件
 */
import React,{Component} from 'react'
function local (OldComponent,name,placeholder){
  class NewComponent extends Component {
    constructor(props){
      super(props)
      this.state = {
        data:''
      }
    }
    componentWillMount(){
      this.setState(()=>({data:localStorage.getItem(name)||placeholder}))
    }
    save=(event)=>{
      localStorage.setItem(name,event.target.value)
    }
    render(){
      return <OldComponent data={this.state.data} save={this.save}/>
    }
  }
  return NewComponent
}
export default local