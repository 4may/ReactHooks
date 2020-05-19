import React from 'react'
import StyledNightmode from './styles/StyledNightmode'

//プレイリストの背景の色を切り替えるためのコンポーネント
const NightMode = ({ nightModeCallback, nightMode }) => (
    <StyledNightmode>
        <span>Nightmode: </span>
        <label className="switch">
            <input 
                type="checkbox"
                checked={nightMode}
                onChange={nightModeCallback}
            />
            <span className="slider round"/>
        </label>
    </StyledNightmode>
)

export default NightMode