import React, {
    Component
} from 'react'

import Main from "./main";
import Search from "./search"

export default class App extends Component {

    state = {
        searchName: ''
    }

    flushName = (searchName) => this.setState({
        searchName
    })


    render() {

        return (
            <div className="container">
                <Search flushName={this.flushName}/>
                <Main searchName={this.state.searchName}/>
            </div>
        )
    }
}