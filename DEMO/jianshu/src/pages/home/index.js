import React,{Component} from 'react'
import { connect } from 'react-redux'
import Topic from './component/Topic'
import Recommend from './component/Recommend'
import Writer from './component/Writer'
import List from './component/List'
import { actionCreators} from './store'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'
class Home extends Component {
  render(){
    return (
      <HomeWrapper>
        <HomeLeft>
        <img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
        <Topic/>
        <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
        {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> :null}
      </HomeWrapper>
    )
  }
  handleScrollTop(){
    window.scrollTo(0,0)
  }
//获取后端接口的数据
  componentDidMount(){
    this.props.changeHomeData()
    this.bindEvents()
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.changeScrollTop) 
  }
  bindEvents(){
    window.addEventListener('scroll',this.props.changeScrollTop)
  }
}
const mapState = (state)=>({
  showScroll:state.getIn(['home','showScroll'])
})
const mapDispatch = (dispatch)=>({
  changeHomeData(){
    dispatch(actionCreators.getHomeInfo())
  },
  changeScrollTop(){
    if (document.documentElement.scrollTop > 400) {
      dispatch(actionCreators.toggleTopShow(true))
    }else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})
export default connect(mapState,mapDispatch)(Home)