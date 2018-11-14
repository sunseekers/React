import react,{Component} from React
class LoginControl extends Component {
  constructor(props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.state = {isLoggedIn:false}
  }
  handleLoginClick(){
    this.setState(()=>({
      isLoggedIn:true
    }))
  }
  handleLogoutClick(){
    this.setState(()=>({
      isLoggedIn:false
    }))
  }
  render(){
    const isLoggedIn = this.state.isLoggedIn
    let button
    // if (isLoggedIn) {
    //   button = <LogoutButton onClick={this.handleLogoutClick}/>
    // }else {
    //   button = <LoginButton onClick={this.handleLoginClick}/>
    // }
    return (
      <div>
        <p>the user is <b>{isLoggedIn ? 'currently':'not'}</b></p>
        {/* {button} */}
        {isLoggedIn ? (
          <LogoutButton onClick = {this.handleLogoutClick}/>
        ):(
          <LoginButton onClick = {this.handleLoginClick}/>
        )

        }
      </div>
    )
  }
}

function NumberList (props) {
  const numbers = props.numbers
  const listItems = numbers.map(number=>{
    <li key={number.toString()}>
    {number}
    </li>
  })
  return (
    <ul>{listItemss}</ul>
  )
}
const numbers = [1,2,3,4,5]
ReactDOM.render(
  <NumberList numbers={numbers}/>,
  document.getElementById('root')
)