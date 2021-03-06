import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import img from './../../pokeball.png';
import { connect } from 'react-redux'

class AxiosApp extends Component {
  render(){
    const { posts } = this.props
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={img} alt="A Pokeball" />
            <div className="card-content">
              <Link to={'/redux/' + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container home postList">
          <h4 className="center">Redux Data Load</h4>
          {postList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(AxiosApp)