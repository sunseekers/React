import React,{Components,Fragment} from 'react'
class CSS extends Component {
  constructor(props){
    super(props)
    this.state = {
      show:true
    }
  }
  render() {
    return (
      <Fragment>
      <div className={this.state.show ? 'show' :'hide'}>Hello</div>
      <button>toggle</button>
      </Fragment>
    )
  }
}
export default CSS