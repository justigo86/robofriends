import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    // robots is used as a PROP in this situation
    // const cardArray = robots.map((user, index) => {
    //     return <Card key={robots[index].id} name={robots[index].name} email={robots[index].email} id={robots[index].id} />
    // })       instead of assigning the array to a variable, can return it within the return statement
    return (
        <div
            //className='card-list'
        >
            {
                robots.map((robot, index) => {
                    return <Card
                        key={robots[index].id}
                        name={robots[index].name}
                        email={robots[index].email}
                        id={robots[index].id}
                        robot={robot}/>
                })
            }
        </div>
    );
}

export default CardList;

//Class
//import { Component } from 'react';
//class CardList extends Component {
    //const { robots } = this.props;
    //render() {
        //return (
            //<div>
                //{robots.map((robot) => {
                    //<Card key={robots[index].id} name={robots[index].name} email={robots[index].email} id={robots[index].id} />
                //})}
            //</div>
        //)
    //}
//}
//export default CardList