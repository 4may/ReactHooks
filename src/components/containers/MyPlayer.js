import React from 'react'
import Video from '../Video'
import Playlist from '../containers/Playlist'
import { ThemeProvider } from 'styled-components'
import StyledMyPlayer from '../styles/StyledMyPlayer'

//nightmode ON時のテーマ
const themeNight = {
    bgcolor : "#353535",
    bgcolorItem : "#414141",
    bgcolorItemActive : "#405c63",
    bgcolorPlayed : "#526d4e",
    border : "none",
    borderPlayed : "none",
    color : "#fff"
}

//lightmode ON時のテーマ
const themeLight = {
    bgcolor : "#fff",
    bgcolorItem : "#fff",
    bgcolorItemActive : "#80a7b1",
    bgcolorPlayed : "#7d9979",
    border : "1px solid #353535",
    borderPlayed : "none",
    color : "#353535"
}

//動画プレイヤー
//Video, Playlistの二つから構成される。
const MyPlayer = props => (
    //単にエラーを解消するだけなら、divよりもReact.Fragmentを使うべき。 React.Fragmentは生成するHTMLには含まれないため、本来不要なタグを増やさなくて済む。
    <ThemeProvider theme={state.nightMode ? themeNight : themeLight}>
        <StyledMyPlayer>
            <Video />
            <Playlist />
        </StyledMyPlayer>
    </ThemeProvider>
)

export default MyPlayer