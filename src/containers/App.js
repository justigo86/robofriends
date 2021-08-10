// import React from 'react';
import React, {Component} from 'react';
import CardList from '../components/CardList'
// import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';

// const App = () => {
//     return (
//         <div className='tc '>
//             <h1>RoboFriends</h1>
//             <SearchBox />
//             <CardList robots={robots}/>
//         </div>
//     )
// }

class App extends Component {       //App component created
    constructor() {
        super()
        this.state = {              //has two states - created to be changed/updated
            robots : [],        //these states will be used as props in functions
            searchfield : ''        //to update information in App and on-screen via render()
        }
        // robots and searchfield are both STATEs in this scenario - can be changed
    }

    updateWhileSearch = (event) => {            //component created to update display based on the user search (dynamically)
        this.setState({searchfield : event.target.value})   //sets the state based on the value entered into the searchfield by the user
        // const filteredRobots = this.state.robots.filter(robots => {
        //     return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        // })       - moved down to render to use variable
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')     //fetch data with API (website provides user accounts to test with page)
            .then(response => response.json())        //get users from site, then convert information to json
            .then(users => this.setState({ robots: users }))            //then use users to update the state of robots to users
    }

    render() {
        const { robots, searchfield } = this.state      //by destructuring, do not have to type this.state before each variable
        const filteredRobots = robots.filter(robot => { //new array created to update state of array robots - based on (filtered) user input
            return robot.name.toLowerCase().includes(searchfield.toLowerCase()) //match robot name based on values entered(included) into searchfield
        })
        // if (robots.length === 0) {       //if the request is taking time to fetch data, will inform user page is loading data until completed
        // if (!robots.length) {            //changed to ternary statement below
        //     return <h1>Loading...</h1>
        // } else {
        //     return (
        //         <div className='tc'>
        //             <h1 className='f1'>RoboFriends</h1>
        //             <SearchBox updateSelection={this.updateWhileSearch} />
        //             {/* <CardList robots={this.state.robots}/> */}
        //             <Scroll>
        //                 <CardList robots={filteredRobots}/>
        //             </Scroll>
        //         </div>
        //     )
        // }
        return !robots.length ? 
            <h1>Loading...</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox updateSelection={this.updateWhileSearch} />
                    {/* <CardList robots={this.state.robots}/> */}
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
    }
}

export default App;