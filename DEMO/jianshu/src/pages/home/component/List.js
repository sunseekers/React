import React,{Component} from 'react'
import {connect} from 'react-redux'
import {actionCreators} from '../store'
import { ListItem,ListInfo,LoadMore } from '../style'
import { Link } from 'react-router-dom'
class List extends Component {
  render(){
    const { list,getMoreList,articlePage } = this.props
    return (
      <div>
        {
          list.map(item=>{
            return (
              <Link key={item.get('id')} to={'/detail/'+item.get('id')}>
                <ListItem >
                  <img alt='' className='pic' src={item.get('imgUrl')}/>
                  <ListInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                  </ListInfo>  
                </ListItem>
              </Link>
            )
          })
        }
        {/* 点击按钮的时候会触发异步的操作 */}
        <LoadMore onClick = {()=>getMoreList(articlePage)}>更多文章</LoadMore>
      </div>
    )
  }
}
const mapState = (state)=>({
  list:state.getIn(['home','articleList']),
  articlePage:state.getIn(['home','articlePage'])
})
const mapDispatch = (dispatch)=>({
  getMoreList(page){
    dispatch(actionCreators.getMoreList(page))
  }
})
export default connect(mapState,mapDispatch)(List) 