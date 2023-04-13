import React from 'react';
import './SearchBox.css';

const SearchBox = ({className, updateSelection, placeholder}) => {
    return (
        <div>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                //className={`search-box ${className}`}     //props
                type='search'
                placeholder={placeholder}
                onChange={updateSelection}
            />
        </div>
    )
}

export default SearchBox


//Class
//import { Component } from 'react';
//class SearchBox extends Component {
    //const { searchfield, updateSelection } = this.props;
    //render() {
        //return (
            //<div>
                //<input
                    //className='pa3 ba b--green bg-lightest-blue'
                    //type='search'
                    //placeholder='search robots'
                    //onChange={updateSelection}
                ///>
            //</div>
        //)
    //}
//}
//export default CardList