import React from 'react'
import Video from '../Video'
import Playlist from '../containers/Playlist'

//動画プレイヤー
//Video, Playlistの二つから構成される。
const MyPlayer = props => (
    //単にエラーを解消するだけなら、divよりもReact.Fragmentを使うべき。 React.Fragmentは生成するHTMLには含まれないため、本来不要なタグを増やさなくて済む。
    <React.Fragment>
        <Video />
        <Playlist />
    </React.Fragment>
)

export default MyPlayer