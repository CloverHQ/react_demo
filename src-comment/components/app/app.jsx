import React, {Component} from 'react'
import CommentAdd from "../comment-add/comment-add";
import CommentList from "../comment-list/comment-list";


export default class App extends Component {

    state = {
        comments: [
            {username: 'tony', content: 'java'},
            {username: 'mike', content: 'js'}
        ]
    }

    deleteComment = (index) => {
        const {comments} = this.state;
        comments.splice(index, 1)
        this.setState(comments)
    }


    addComments = (comment) => {
        const {comments} = this.state;
        comments.unshift(comment)
        // 修改状态
        this.setState({comments})
    }

    render() {
        const {comments} = this.state;
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd addComments={this.addComments}/>
                    <CommentList comments={comments} deleteComment={this.deleteComment}/>
                </div>
            </div>
        )
    }
}