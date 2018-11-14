import React,{Component} from 'react'
const scaleNames = {
  c:'Celsius',
  f:'Fahrenheit'
}
function toCelsius(fahrenheit) {
  return (fahrenheit-32)*5/9
}
function toFahrenheit(celsius){
  return (celsius*9/5)+32
}
function tryConvert(temperature,convert) {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)){
    return ''
  }
  const output = convert(input)
  const rounded = Math.round(output*1000)/1000
  return rounded.toString()
}
function BoilingVerdict(props){
  if (props.celsius>=100){
    return <p>The water would boil</p>
  }else {
    return <p>The water would not boil</p>
  }
}
class Temperature extends Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  render(){
    const { temperature ,scale } = this.props
    return (
      <fieldset>
        <legend>
          Enter temperature in {scaleNames[scale]}:
        </legend>
        <imput value = {temperature} onChange={this.handleChange}/>
      </fieldset>
    )
  }
}
class Calculator extends Component {
  contructor(props){
    super(props)
    this.handleCChange = this.handleCChange.bine(this)
    this.handleFChange = this.handleFChange.bind(this)
    this.state = {
      temperature:'',
      celsius:''
    }
  }
  handleCChange (){
    this.setState(()=>({
      scale:'c',
      temperature:''
    }))
  }
  handleFChange(){
    this.setState(()=>({
      scale:'f',
      temperature:''
    }))
  }
  render(){
    const {scale,temperature} = this.props
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <Temperature scale = 'c'
        temperature = {celsius}
        onTemperatureChange = {this.handleCChange}/>
        <Temperature scale='f'
        temperature = {fahrenheit}
        onTemperatureChange = {this.handleFChange}/>
        <BoilingVerdict celsius = {parseFloat(celsius)/>}/>
      </div>
    )
  }
}