import styled from 'styled-components'

//webkitやmsはvendor prefixと呼ぶ。
//古いバージョンのブラウザでもFlexboxを動作させたい場合は必要となる。
//-webkit-box:Android, Safari向けのprefix
//-ms-box:IE10向けのprefix

//flex-direction: flexboxを並べる方向. rowだと、横並び。columnだと、縦並び。

//レスポンシブデザイン
//@media : メディアクエリ
//screen : スクリーンを持ったデバイス。PCやスマホなど。
//(max-width : 1400px) : メディアクエリを適用する条件
//つまり、以下のメディアクエリは、max-widthが1400px以下のscreennデバイスに対して、実行される。
const StyledMyPlayer = styled.div`
  background : ${props => props.theme.bgcolor};
  border : ${props => props.theme.border};
  max-width : 1800px;
  margin : 0 auto;
  display : -webkit-box;
  display : -ms-flexbox;
  display : flex;
  flex-direction : row;
  max-height : 863px;
  transition : all 0.5s ease

  @media screen and (max-width: 1400px) {
    display : block;
    max-height : 10000px;
  }
`

export default StyledMyPlayer