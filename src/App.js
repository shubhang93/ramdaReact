import React, {Component} from 'react';
import logo from './logo.svg';
import {compose, map} from 'ramda'
import './App.css';

const List = c => <ul>{c}</ul>

const ListItem = item => <li>{item.name}</li>

const listData = [{name: "Shubhang"}, {name: "Johnson"}, {name: "Bleak"}]

const ListOfNames = compose(List, map(ListItem))(listData)

class App extends Component {
    render() {
        return (
            <div>
                {ListOfNames}
                {/* f(g(x)) ---> f(resultOf g(x)) ---------******------------
                 basically that is how compose works take the result of inner
                 function and pass it as parameter to the outer one
                 ListItem is function which map takes as an arg and passes this to List which takes
                 result of ListItem as an arg--------------**************--------------------------
                 */}
                {/*This is similar to*/}
                <ul>
                    {listData.map(ListItem)}
                </ul>
            </div>
        );
    }
}

export default App;
