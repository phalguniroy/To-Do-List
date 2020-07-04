
import {combineReducers} from 'redux';
const songsReducer=()=>{
    return[
        {title:'Kabhi Khushi Kabhie Gham',time: 2001, description: "Despite opening to mixed reviews at the time, ‘Kabhi Khushi Kabhie Gham’ went on to become one of the highest grossing Bollywood films internationally. The title track is an example of how a song can weave its way through a film, Lata Mangeshkar's distinctive and emotive voice whisks you away on a journey into the complex world of the family. ",duration:'4:05'},
        {title:'teri ore',time: 1905, description: 'romantic song',duration:'4:05'},
        {title:'Kal Ho Naa Ho',time: 1905, description: "An example of a song recurring throughout a film, the flute intro from the title track of ‘Kal Ho Naa Ho’ haunts this massively successful early noughties film. Sonu Nigam’s rich, textured voice dreamily animates exquisite, poetic lyrics by Javed Akhtar (of screen-writing duo Salim-Javed, responsible for ‘Sholay’ and ‘Deewaar’), and soundtracks a love triangle with a terminal-illness twist.",duration:'4:05'},
        {title:'despacito',time: 1905, description: 'romantic song',duration:'4:05'},
        {title:'tu hi meri shab he',time: 1905, description: 'romantic song',duration:'4:05'}
    ]
}

const selectedSongReducer =(selectedSong=null, action)=>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});

