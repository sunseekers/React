import React ,{Component} from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from './style'
import { actionCreators } from './store'
import {actionCreators as actionCreatorsLogin} from '../../pages/login/store'
import { Link } from 'react-router-dom'
class Header extends Component {
  getListArea(){
    const { focused,totalPage,list,page,handleMouseEnter,handleChangePage, mouseIn,handleMouseLeave} = this.props
    const newList = list.toJS()//不可immutable对象变成可以编辑的
    const pageList = []
    if (newList.length) {
      for (let i = (page -1)*10; i< page*10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if (focused ||  mouseIn) {
      return (
        <SearchInfo 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick = {()=>handleChangePage(page,totalPage,this.spinIcon)}>
            <i ref={(icon)=>{this.spinIcon = icon}}
            className = "iconfont spin"
            >&#xe851;</i>
            换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            { pageList }
          </SearchInfoList>
        </SearchInfo>
      )
    }else {
      return null
    }
  }
  render(){
    const { focused ,login,handleInputFocus,handleInputBlur,loginOut } = this.props
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo/>
        </Link>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          {
            login ? 
              <NavItem  onClick = {loginOut} className='right'>退出</NavItem> :
              <Link to='/login'>
                <NavItem className='right'>登陆</NavItem> 
              </Link>
          }
          <NavItem className='right'>
            <i className='iconfont'>&#xe636;</i>
          </NavItem>
          <SearchWrapper>
          <CSSTransition
            in = {focused}
            timeout = {200}
            classNames = 'slide'
          >
            <NavSearch
              onFocus = {handleInputFocus}
              onBlur = {handleInputBlur}
            className = {focused ? 'focused' :''}
            ></NavSearch>
            </CSSTransition>
            <i 
            className = {focused ? 'focused iconfont zoom' :'iconfont zoom'}
            >&#xe614;</i>
            {this.getListArea()}
          </SearchWrapper>
          <Addition>
            <Link to='/write'>
              <Button className='writting'><i className='iconfont'>&#xe615;</i>写文章</Button>
            </Link>
            <Button className='reg'>注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    )
  }
}


const mapStateTpProps = (state) => {//获取数据
  return {
    //不可修改的对象不能通过.来调用，要通过get方法
    focused: state.get('header').get('focused'),
    list: state.getIn(['header','list']),
    page:state.getIn(['header','page']),
    totalPage:state.getIn(['header','totalPage']),
    mouseIn:state.getIn(['header','mouseIn']),
    login: state.getIn(['login','login'])
  }
}
const mapDispathToProps = (dispatch) => {//修改数据
  return {
    handleInputFocus(){
      dispatch(actionCreators.getList())//异步请求
      dispatch(actionCreators.getFocus())
    },
    handleMouseLeave(){
      dispatch(actionCreators.mouseLeave()) 
    },
    loginOut(){
      dispatch(actionCreatorsLogin.loginOut())
    },
    handleChangePage(page,totalPage,spin){
      //console.log(spin)
      let orginAngle = spin.style.transform.replace(/[^\d]/ig,'')
      console.log(orginAngle)
      if (orginAngle) {
        orginAngle = parseInt(orginAngle,10)
      }else {
        orginAngle = 0
      }
        spin.style.transform = 'rotate(' + (orginAngle+360) + 'deg'
      if (page < totalPage) {
        dispatch(actionCreators.getPage(page+1)) 
      }else {
        dispatch(actionCreators.getPage(1)) 
      }
    }
  }
}
//connect()()第一个括号里面的第一个参数是获取数据，
//第二个参数是修改数据。如果我们只用其中一个参数，另一个参数可以用null替换
//第二个参数是导出的组件
export default connect(mapStateTpProps,mapDispathToProps)(Header)