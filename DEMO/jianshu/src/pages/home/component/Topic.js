import React,{Component} from 'react'
import { connect } from 'react-redux'
import {
  TopicWrapper,
  TopicItem,
} from '../style'
class Topic extends Component {
  render(){
    const {list} = this.props
    return (
      <TopicWrapper>
        {list.map(item=>{
          return (
            <TopicItem key={item.get('id')}>
              <img className='topic-pic' alt=""
              src={item.get('imgUrl')}/>
              {item.get('title')}
            </TopicItem>
          )
        })}
      </TopicWrapper>
    )
  }
}
const mapState = (state) => ({
 list: state.get('home').get('topicList')
})//因为我们只需要拿到，数据并不要修改，所以不需要第二个参数
export default connect(mapState,null)(Topic)