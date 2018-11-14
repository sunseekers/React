import react,{Components} from react
class NameForm extends Components {
  constructor (props) {
    super(props)
    this.state = {
      value:'',
      text:'',
      select:[]
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleChangeT = this.handleChangeT.bind(this)
    this.handleChangeS = this.handleChangeS.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e){
    this.setState(()=>({
      value:e.target.value
    }))
  }
  handleChangeT(e){
    this.setState(()=>({
      text:e.target.value
    }))
  }
  handleChangeS(e){
    this.setState(()=>({
      select:e.target.value
    }))
  }
  handleSubmit(e){
    e.preventDefault()
  }
  render(){
    return (
      <form onSubmit = {this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
          <label>
            Essay:
            <textarea value={this.state.value} onChange={this.handleChangeT}/>
          </label>
          <label>
            Pick you favorite flavor
            <select multiple={true} value = {this.state.select} onChange = {this.handleChangeS}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <input type='submit' value="Submit"/>
      </form>
    )
  }
}