import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/containers/App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

//オフラインでもアプリを動かせるようにしたり、ロードを高速化するためにはregister()を呼び出す。
serviceWorker.unregister()