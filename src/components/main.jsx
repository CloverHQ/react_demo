import React, {Component} from 'react'

import axios from 'axios'
import Proptype from 'prop-types'

export default class Main extends Component {
    state = {
        initView: true,
        loading: false,
        users: null,
        errorMsg: ''

    }

    static Proptype = () => {
        searchName:Proptype.string.isRequire
    }

    componentWillReceiveProps(nextProps) {
        let searchName = nextProps.searchName
        console.log("发送请求：" + searchName)
        const url = `https://api.github.com/search/users?q=${searchName}`
        this.setState({initView: false, loading: true})
        axios.get(url).then((resp) => {
            console.log(resp.data.items)
            this.setState({
                loading: false,
                users: resp.data.items
            })
        }).catch((error) => {
            console.log('error', error.resp.data.message, error.message)
            this.setState({
                loading: false,
                errorMsg: error.message
            })
        })

    }

    render() {
        const {initView, loading, errorMsg, users} = this.state;
        if (initView) {
            return <h2>请输入关键字搜索！</h2>
        } else if (loading) {
            return <h2>正在搜索中！</h2>
        } else if (errorMsg) {
            return <h2>{errorMsg}</h2>
        } else {
            return (
                <div className="row">
                    {
                        users.map((user, index) => (

                            <div className="card" key={index}>
                                <a href={user.html_url} target="_blank">
                                    <img src={user.avatar_url} style={{width: 100}}/>
                                </a>
                                <p className="card-text">{user.login}</p>
                            </div>

                        ))
                    }
                </div>
            )
        }

    }
}