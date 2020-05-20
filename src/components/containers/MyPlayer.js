import React, { useState, useEffect } from 'react'
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
//propsを分解して受け取ることができる。
const MyPlayer = ({ match, history, location }) => {
    //nameをキーとして、動画情報をロード
    //ここでは、index.html内のbodyで定義している値を使う.
    const videos = JSON.parse(document.querySelector('[name="videos"]').value)

    //データの構造
    //{playlistId, wbn_rdx, playlist[{num, title, id, duration, video}, {...}, {...}, ...]}
    const [state, setState] = useState({
        videos: videos.playlist,
        activeVideo: videos.playlist[0],
        nightMode : true,
        playlistId : videos.playlistId,
        autoplay : false
    })

    useEffect(() => {
        //videoIdはejJlnMPCmNoのようなビデオ固有の識別子
        const videoId = match.params.activeVideo
        if(videoId !== undefined){
            //videoIdと合致するidを持つビデオのインデックスを取得
            const videoIndex = state.videos.findIndex(video => video.id === videoId)
            setState(prev => ({
                ...prev,
                activeVideo: prev.videos[videoIndex],
                autoplay: location.autoplay,
            }))
        } else{
            history.push({
                pathname: `/${state.activeVideo.id}`,
                autoplay: false
            })
        }
    //useEffect内で参照している変数を全て列挙するのきつい・・・
    //https://medium.com/better-programming/understanding-the-useeffect-dependency-array-2913da504c44
    }, [history, location.autoplay, match.params.activeVideo, state.activeVideo.id, state.videos])

    const states = state.videos.map(video => video.id)
    console.log(states)

    const nightModeCallback = () => {}

    const endCallback = () => {}

    const progressCallback = () => {}

    return(
        //単にエラーを解消するだけなら、divよりもReact.Fragmentを使うべき。 React.Fragmentは生成するHTMLには含まれないため、本来不要なタグを増やさなくて済む。
        <ThemeProvider theme={state.nightMode ? themeNight : themeLight}>
            {state.videos !== null ? (
            <StyledMyPlayer>
                <Video 
                    active={state.activeVideo}
                    autoplay={state.autoplay}
                    endCallback={endCallback}
                    progressCallback={progressCallback}
                />
                <Playlist 
                    videos={state.videos}    
                    active={state.activeVideo}
                    nightModeCallback={nightModeCallback}
                    nightMode={state.nightMode}
                />
            </StyledMyPlayer>
            ) : null}
        </ThemeProvider>
    )
}


export default MyPlayer