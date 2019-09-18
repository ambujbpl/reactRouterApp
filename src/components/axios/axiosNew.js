import  React , { Component } from "react";
import axios from 'axios';

class AxiosAppNew extends Component {
    state = {
        posts: [ ]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log("res axios : ",res);
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
                            <span className="card-title">{ post.title }</span>
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

export default AxiosAppNew;