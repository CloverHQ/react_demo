import React, {component} from 'react'
import logo from '../logo.svg'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <img className='logo' src={logo}/>
                <p className='name'>这是一个React应用</p>
            </div>
        )
    }
}