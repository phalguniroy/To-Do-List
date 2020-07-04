import React from 'react';
import faker from 'faker'





console.log(faker)

const ComponentDetail =(props)=>{
    console.log(props)
    return (
        <div className="ui link cards">
        <div className="card">
          <div className="image">
            <img src={faker.image.avatar()} alt="raj" />
          </div>
          <div className="content">
            <div className="header">mr {props.author}</div>
            <div className="meta">
              <a href="/#">Friends</a>
            </div>
            <div className="description">
             living in {faker.address.city()}.
            </div>
          </div>
          <div className="extra content">
            <span className="right floated">
              Joined in 2013
            </span>
            <span>
              <i className="user icon"></i>
              75 Friends
            </span>
          </div>
        </div>
        
      </div>
    )
}

export default ComponentDetail;