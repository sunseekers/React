import React,{Component} from 'react'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'//目的是为了获取到store里面的数据，因为路由懒加载，数据要通过这个才能获取到
import { DetailWrapper,Header,Content } from './style'
import { actionCreators } from './store'
class Detail extends Component {
  render(){
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content 
        dangerouslySetInnerHTML={{__html:this.props.content}}/>
      </DetailWrapper>
    )
  }
  componentDidMount(){//获取axios数据，是一个异步请求
    this.props.getDetail(this.props.match.params.id)
  }
}
const mapState = (state)=>({
  title: state.getIn(['detail','title']),
  content: state.getIn(['detail','content'])
})
const mapDispatch = (dispatch)=>({
  getDetail(id){
    dispatch(actionCreators.getDetail(id))
  }
})
export default connect(mapState,mapDispatch)(withRouter(Detail)) 