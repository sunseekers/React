class Element {
  constructor(tagName,key,children) {
    this.tagName = tagName
    this.key = key
    this.children = children
  }
  render(){
    let element = document.createElement(this.tagName)
    element.innerHTML = this.children
    element.setAttribute('key',this.key)
    return element
  }
}
function el(tagName,key,children) {
  return new Element(tagName,key,children)
}
let oldChile = [
  el('li','A','A'),
  el('li','B','B'),
  el('li','C','C'),
  el('li','D','D')
]
let ul = document.createElement('ul')
oldChile.forEach(item=>ul.appendChild(item.render()))
document.body.appendChild(ul)
let newChild = [
  el('li','E','E'),
  el('li','B','B'),
  el('li','C','C'),
  el('li','D','D')
]
let pathes = diff(oldChildren,newChildren)
function diff(oldChildren,newChildren){
  let pathes = []
  let REMOVE = 'remove'
  
  let newKeys = newChildren.map(item=>item.key)
  //第一步，把老数组在新数组中没有的元素移除掉
  let oldIndex = 0
  while(oldIndex < oldChildren.length) {
    let oldKey = oldChildren[oldIndex].key
    if(!newKeys.includes(oldIndex)) {
      remove(oldIndex)
      oldChildren.splice(oldIndex,1)
    }else{
      oldIndex++
    }
  }
oldIndex = 0
let newIndex = 0
//第二步，处理新数组把插入新数组
while(newIndex<newChild.length){
  let oldKey = (oldChildren[oldIndex]||{}).key
  let newKey = (newChildren[newKey]||{}).key
  if (!oldKey){
    insert(newIndex,newKey)
    newIndex++
  }else if(oldKey!=newKey){
    insert(newIndex,newKey)
    newIndex++
  }else{
    oldIndex++
    newIndex++
  }
}
//第三把老数组中多余的删掉
while(oldIndex++ < oldChildren.length) {
  remove(newIndex)
}
function insert(index,key){
  pathches({type:"INSERT",index,key})
}
  function remove(index){
    patches.push({type:'REMOVE',index})
  }
  return patches
}