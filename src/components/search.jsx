import React, {Component} from 'react'

import Pubsub from 'pubsub-js'

export default class Search extends Component {

    state = {
        searchName: ''
    }


    handleChange = (event) => {
        const searchName = event.target.value
        this.setState({searchName})
    }

    handleClick = () => {
        const {flushName} = this.props
        const {searchName} = this.state
        Pubsub.publish('sendName',searchName.trim())
    }



    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" value={this.state.searchName}
                           onChange={this.handleChange}/>
                    <button onClick={this.handleClick}>Search</button>
                </div>
            </section>
        )
    }
}