import React from 'react'
import StyledPlaylistItem from './styles/StyledPlaylistItem'

//プレイリストの各構成要素
//active:再生中の動画
//played:視聴済みの動画(プレイリスト中の表示に緑色の丸をつける)
const PlaylistItem = ({video, active, played}) => (
    //styled componentsの強みはここ。
    //reactオブジェクトの状態に応じて、実行するCSSを使い分けることができる。
    <StyledPlaylistItem active={active} played={played}>
        <div className="my-player__video-nr">{video.num}</div>
        <div className="my-player__video-name">{video.title}</div>
        <div className="my-player__video-time">{video.duration}</div>
    </StyledPlaylistItem>
)

export default PlaylistItem