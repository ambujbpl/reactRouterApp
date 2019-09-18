import  React , { Component } from "react";
import axios from 'axios';

class AxiosApp extends Component {
    state = {
        posts: [ ]
    }
    getDataHandler = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            // var htmlBody = '';
            console.log("res axios : ",res);
            // res.data.forEach(d => {
            //     htmlBody += d.title + '\n' 
            // });
            // this.setState({
            //     "data":htmlBody
            // })
            // document.getElementById('loadRes').html(htmlBody);
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

export default AxiosApp;