import React from 'react'
import StyledPlaylistHeader from "./styles/StyledPlaylistHeader"
import StyledJourney from "./styles/StyledJourney"

//プレイリストのヘッダー
//active.title:再生中の動画のタイトル
//active.num:再生中の動画の番号
//total:動画の総数
const PlaylistHeader = ({active, total}) => (
    <StyledPlaylistHeader>
        <p>{active.title}</p>
        <StyledJourney>
            {active.num} / {total}
        </StyledJourney>
    </StyledPlaylistHeader>
)

export default PlaylistHeader