import React from 'react';
import SongList from './SongList'
import SongDetail from './SongDetails'

const App = ()=>{
        return(
                <div className="ui container grid">
                <div className="ui row">
                <div className="column six wide">
         <h1>react-redux app</h1>
         <SongList />
         </div>
         <div className="column six wide container"> <SongDetail /></div>
         </div>
        
         </div>
         )
}

export default App