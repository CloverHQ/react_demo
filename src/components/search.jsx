import React, {Component} from 'react'

import Proptypes from 'prop-types'

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
        flushName(searchName)
    }

    static Proptypes = () => {
        flushName : Proptypes.func.isRequire
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