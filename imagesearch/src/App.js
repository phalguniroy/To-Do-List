import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from './components/ImageList'
import axios from "axios";
import "./App.css";

export default class App extends Component {
  state={images:[], total:0}

  onSearchSubmit =async term =>{
    console.log(term);
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID QsxhwR--wuyJbnV-ieuODamISd8ueL7tS8IaSky-VRo"
      }
    });
    console.log(response.data.total)
    this.setState({images: response.data.results, total: response.data.total})
  }

  render() {
    console.log("app",this.state.images)
    return (
      <div className="container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <p> {this.state.total} images </p>
        <div className="gallery">
        <ImageList images={this.state.images} />
        </div>
        
        </div>
    );
  }
}
