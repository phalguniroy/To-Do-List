import React from 'react';
import {connect} from 'react-redux';

const SongDetail = song =>{
    console.log(song)
    if(!song.song){
        return <div class="ui warning message">
        <h4 className="ui red header">Select a song</h4></div>
    }
    return <div>
    <div className="ui cards">
  <div className="card">
    <div className="content">
      <i className="music icon right floated  ui "></i>
      <div className="header">
       {song.song.title}
      </div>
      <div className="meta">
        Year:{song.song.time}
      </div>
      <div className="description">
        {song.song.description}
      </div>
    </div>
    
  </div>
  </div>
  </div>
}

const mapStateToProps = (state) => {
    return {song: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail)