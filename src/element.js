let utils = require('./utils.js')
class Element {
  //标签名 属性对象 子元素数组
  constructor(tagName,attrs,children) {
    this.tagName = tagName
    this.attrs = attrs
    this.children = children||[]
  }
  //把一个虚拟的DOM节点渲染成一个真实的DOM节点
  render(){
    //创建一个真实的DOM节点
    let element = document.createElement(this.tagName)
    //给此真实的DOM元素节点增加属性
    for(let attr in this.attrs) {
      utils.setAttr(element,attr,this.attrs[attr])
    }
    //先序深度遍历
    this .children.forEach(child=>{
      //如果子节点是一个元素的话，就调用他的render方法创建一个真实的DOM，如果是一个字符串得话，就创建一个文本节点
      let childElement = (child instanceof Element) ? child.render():document.createTextNode(child)
      element.appendChild(childElement)
    })
    return element
  }
}