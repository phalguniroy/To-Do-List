import React from 'react';
import './seasonDisplay.css'

const seasonConfig = {
    summer:{
        text:'lets hit the beach',
        iconName:'sun'

    },
    winter:{
        text:'burr its cold',
        iconName:'snowflake'
    }
}

const getSeason =(lat, month)=>{
    if(month>2 && month<9){
        return lat>0? 'summer':'winter';
    }else{
        return lat>0? 'winter':'summer'
    }
}


const SeasonDisplay = (props)=>{
    const season = getSeason(props.lat, new Date().getMonth())
    // const text = season == 'winter'?'Burr! It is chilly.':'Lets hit beach';
    const {text, iconName} = seasonConfig[season]
    console.log(props)
    return <div className={`season-display ${season}`}>{text} <i className={`${iconName} icon icon-left`}></i><i className={`${iconName} icon icon-right`}></i></div>
}

export default SeasonDisplay