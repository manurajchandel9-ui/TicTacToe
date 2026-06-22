import Icon from "../Icons/icon";
import './card.css'

function card({setIcon, index, onPlay,gameEnd}){
    let icon = <Icon/>
    if(setIcon=="X") icon = <Icon name="cross"/>
    else if(setIcon=="O") icon = <Icon name="circle"/>
    return(
        <div className="card" onClick={()=>{!gameEnd && setIcon=="" && onPlay(index)}}>
            {icon}
        </div>
    )
}
export default card;