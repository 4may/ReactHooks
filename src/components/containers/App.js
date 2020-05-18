import React from 'react'
import MyPlayer from './MyPlayer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//スタイルをコンポーネントとして追加する
import GlobalStyle from '../styles/GlobalStyle'

const App = () => (
    <BrowserRouter>
    <>
        <Switch>
            {/*rootの指定*/}
            <Route exact path="/" component={MyPlayer} />
            {/*videoごとにパスを区切る*/}
            <Route exact path="/:activeVideo" component={MyPlayer} />
        </Switch>
        {/*スタイルをコンポーネントとして追加する*/}
        <GlobalStyle />    
    </>
    </BrowserRouter>
)

export default App