import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <div
            className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"
            //className="card-container"
        >
            <img
                // src={`https://robohash.org/${id}?200x200`}
                src={`https://robohash.org/${id}?set=set2&size=200x200`}
                alt={`robot ${name}`}
            />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;

//Class
// import { Component } from 'react';
// const Card extends Component {
//      const {name, email, id} = this.props.robot;
//      render() {
//          return (
//              <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
//                  <img
//                      src={`https://robohash.org/${id}?200x200`}
//                      //src={`https://robohash.org/${id}?set=set2&size=200x200`}
//                      alt={`robot ${name}`}
//                  />
//                  <div>
//                      <h2>{name}</h2>
//                      <p>{email}</p>
//                  </div>
//              </div>
//          )
//      }
// }
// export default Card;