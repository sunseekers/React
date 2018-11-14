function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder' + props.color}>
    {props.children}
    </div> 
  )
}
function WelcomeDialog(){
  return (
    <FancyBorder color='blue'>
      <h1 className = 'Dialog-title'>
      Welcom
      </h1>
      <p className='Dialog-message'>
      Thank you for visiting our spacecraft
      </p>
      </FancyBorder>
  )
}