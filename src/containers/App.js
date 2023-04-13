// import React from 'react';
import React, { useEffect, useState } from 'react';
import CardList from '../components/cards/CardList'
import SearchBox from '../components/search/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';

//Hook
const App = () => {
    const [ searchfield, setSearchfield ] = useState('');
    const [ robots, setRobots ] = useState([]);
    const [ filteredRobots, setFilteredRobots ] = useState(robots);

    const updateWhileSearch = (event) => {
        // setSearchfield({ searchfield: event.target.value })
        const searchString = event.target.value.toLowerCase();
        setSearchfield(searchString);
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setRobots(users))
    }, [])

    useEffect(() => {
        const newFilteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield)
        })
        setFilteredRobots(newFilteredRobots);
    }, [robots, searchfield])

    return (
        !robots.length ?
            <h1>Loading...</h1> :
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox updateSelection={updateWhileSearch} placeholder={'search robots'}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
    )
};

export default App;


//Class
// class App extends Component {
//     constructor() {
//         super()
//         this.state = {              //has two states - created to be changed/updated
//             robots: [],        //these states will be used as props in functions
//             searchfield: ''        //to update information in App and on-screen via render()
//         }
//     }

//     updateWhileSearch = (event) => {            //component created to update display based on the user search (dynamically)
//         this.setState({ searchfield: event.target.value })   //sets the state based on the value entered into the searchfield by the user
//         // const filteredRobots = this.state.robots.filter(robots => {
//         //     return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
//         // })       - moved down to render to use variable
//     }

//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/users')   //fetch data with API (website provides user accounts to test with page)
//             .then(response => response.json())    //get users from site, then convert information to json
//             .then(users => this.setState({ robots: users }))  //then use users to update the state of robots to users
//     }

//     render() {
//         const { robots, searchfield } = this.state      //by destructuring, do not have to type this.state before each variable
//         const filteredRobots = robots.filter(robot => { //new array created to update state of array robots - based on (filtered) user input
//             return robot.name.toLowerCase().includes(searchfield.toLowerCase()) //match robot name based on values entered(included) into searchfield
//         })
//         return !robots.length ?
//             <h1>Loading...</h1> :
//             (
//                 <div className='tc'>
//                     <h1 className='f1'>RoboFriends</h1>
//                     <SearchBox updateSelection={this.updateWhileSearch} placeholder={'search robots'}/>
//                     <Scroll>
//                         <ErrorBoundry>
//                             <CardList robots={filteredRobots} />
//                         </ErrorBoundry>
//                     </Scroll>
//                 </div>
//             )
//     }
// }

// export default App;