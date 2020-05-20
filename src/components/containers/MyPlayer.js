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
    const savedState = JSON.parse(localStorage.getItem(`${videos.playlistId}`))

    //データの構造
    //{playlistId, wbn_rdx, playlist[{num, title, id, duration, video}, {...}, {...}, ...]}
    const [state, setState] = useState({
        //localStorageにデータが存在する場合は、そのデータを使う。
        videos: savedState ? savedState.videos : videos.playlist,
        activeVideo: savedState ? savedState.activeVideo : videos.playlist[0],
        nightMode : savedState ? savedState.nightMode : true,
        playlistId : savedState ? savedState.playlistId : videos.playlistId,
        autoplay : savedState ? savedState.autoplay : false
    })

    useEffect(() => {
        //localStorageにデータを格納する. keyとしてplaylistIdを使い、valueとして文字列型に変えたstateを使う。
        //localStorageはデータの保存先webstorageの一種。
        //そのほかに、sessionStorageとよばれるDBもある。
        //https://www.granfairs.com/blog/staff/local-storage-01
        localStorage.setItem(`${state.playlistId}`, JSON.stringify({...state}))
    }, [state])

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

    //nightModeのON/OFFを切り替えるためのコールバック関数
    const nightModeCallback = () => {
        //...prevStateは明示的に指定する必要がある。
        setState(prevState => ({...prevState, nightMode: !prevState.nightMode}))
    }

    //次に再生するビデオを取得する
    const endCallback = () => {
        const videoId = match.params.activeVideo
        const currentVideoIndex = state.videos.findIndex(video => video.id === videoId)

        //現在再生しているビデオがプレイリストの最後のビデオである場合、プレイリストの先頭ビデオのインデックスを取得する
        //そうでない場合、現在再生しているビデオの次のビデオのインデックスを取得する
        const nextVideoIndex = currentVideoIndex === state.videos.length - 1 ? 0 : currentVideoIndex + 1

        history.push({
            pathname: `${state.videos[nextVideoIndex].id}`,
            autoplay: false
        })
    }

    //11秒以上再生した動画は、プレイリスト上の名前の左に緑丸がつく
    const progressCallback = (e) => {
        if(e.playedSeconds > 10 && e.playedSeconds < 11){
            const videos = [...state.videos]
            const playedVideo = videos.find(video => video.id === state.activeVideo.id)
            playedVideo.played = true

            setState(prevState => ({...prevState, videos}))
        }
    }

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