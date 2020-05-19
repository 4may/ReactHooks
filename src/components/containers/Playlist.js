import React from 'react'
import PlaylistHeader from '../PlaylistHeader'
import PlaylistItems from '../containers/PlaylistItems'
import NightMode from '../Nightmode'
//個別のコンポーネント毎にスタイルを設定
import StyledPlaylist from '../styles/StyledPlaylist'

//プレイリストコンポーネント
//３つの要素から構成される
//NightMode, PlaylistHeader, PlaylistItems
const Playlist = ({ videos, active, nightModeCallback, nightMode }) => (
    <StyledPlaylist>
        <NightMode nightModeCallback={nightModeCallback} nightMode={nightMode}/>
        <PlaylistHeader active={active} total={videos.length}/>
        <PlaylistItems videos={videos} active={active}/>
    </StyledPlaylist>
)

export default Playlist