import  React , { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

class AxiosApp extends Component {
    state = {
        posts: [ ]
    }
    getDataHandler = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            this.setState({
                posts: res.data
            })            
        })    
    }    
    render(){
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map( post => {
                return(
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <Link to={'/' + post.id }>
                                <span className="card-title">{ post.title }</span>
                            </Link>
                            <p>{ post.body }</p>
                        </div>    
                    </div>
                )
            })
        ) : (
            ( <div className="center">No Post Yet</div> )      
        )
        return(
            <div onClick={this.getDataHandler}>Axios Test
                <span id="loadRes">{ postList }</span>
            </div>
            
        )
    }
}

export default AxiosApp;