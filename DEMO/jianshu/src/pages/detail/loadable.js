import React from 'react'
import Loadable from 'react-loadable'
const LoadableComponent = Loadable({
  loader:()=>import('./'),//异步加载index文件，在App.js里面引用了
  loading(){
    return <div>真正加载</div>
  }
})
export default ()=><LoadableComponent/>