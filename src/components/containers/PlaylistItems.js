import React from 'react'
import PlaylistItem from '../PlaylistItem'
import StyledPlaylistItems from '../styles/StyledPlaylistitems'
import withLink from '../hoc/withLink'

//Link付きでラップする
const PlaylistItemWithLink = withLink(PlaylistItem)

//PlaylistItemの一覧
const PlaylistItems = ({videos, active}) => (
    <StyledPlaylistItems>
        {videos.map(video => 
            <PlaylistItemWithLink
                key={video.id} 
                video={video} 
                active={video.id === active.id ? true : false} 
                played={video.played}
            />
        )}
    </StyledPlaylistItems>
)

export default PlaylistItems