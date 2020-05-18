import React from 'react'
import PlaylistHeader from '../PlaylistHeader'
import PlaylistItems from '../containers/PlaylistItems'
import NightMode from '../Nightmode'

//プレイリストコンポーネント
//３つの要素から構成される
//NightMode, PlaylistHeader, PlaylistItems
const Playlist = props => (
    <React.Fragment>
        <NightMode />
        <PlaylistHeader />
        <PlaylistItems />
    </React.Fragment>
)

export default Playlist