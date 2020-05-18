import React from 'react'
import PlaylistHeader from '../PlaylistHeader'
import PlaylistItems from '../containers/PlaylistItems'
import NightMode from '../Nightmode'
//個別のコンポーネント毎にスタイルを設定
import StyledPlaylist from '../styles/StyledPlaylist'

//プレイリストコンポーネント
//３つの要素から構成される
//NightMode, PlaylistHeader, PlaylistItems
const Playlist = props => (
    <StyledPlaylist>
        <NightMode />
        <PlaylistHeader />
        <PlaylistItems />
    </StyledPlaylist>
)

export default Playlist