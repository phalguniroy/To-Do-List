import React from 'react';
import SeasonDisplay from './SeasonDisplay'

class WeatherApp extends React.Component{

state = {lat:null,
         error: ''    
          };

componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
        position => this.setState({lat: position.coords.latitude}),
        err => this.setState({error: err.message})
    )
}
                    
    
render(){
   
        if(this.state.lat && !this.state.error){
            return  <h1>latitude:{this.state.lat}<SeasonDisplay lat={this.state.lat} /></h1>
        }
        if(!this.state.lat && this.state.error){
            return <h1>error:{this.state.error}</h1>
        }
        return <div>loading</div>
        
    

}

}


export default WeatherApp