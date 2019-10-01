import React, { Component } from 'react';
import axios from 'axios';

class PostByID extends Component {
    state = {
        post:null 
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        console.log('id : ',id);
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(res => {
            this.setState({
                post: res.data
            })            
        })
    }
    render() {
        const postDom = this.state.post ? (
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        ) : (
            <div className="center">post is loading.........</div>
        )
        return (
            <div>{ postDom }</div>
        )
    }
}
export default PostByID;