import React, { Component } from 'react'

class ArticleLinks extends Component {
    constructor() {
        super()
        this.state = {
            comments: [],
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        const comments = [...this.state.comments]
        comments.push(this.commentInput.value)
        this.setState({ comments })
        event.currentTarget.reset()
    }

    renderComment(comment, i) {
        return <li key={i}>{comment}</li>
    }

    render() {
        return (
            <div className="article-links">
                <a className="article-link" href="#">
                    <i className="fa fa-comments-o"></i>
                    <span className="article-link-text">Comments</span>
                </a>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref={input => this.commentInput = input} />
                    <button className="expanded success button" type="submit">Submit a comment</button>
                </form>
                <ul className="no-bullet">
                    {this.state.comments.map(this.renderComment)}
                </ul>
                <a className="article-link" href="#">
                    <i className="fa fa-share"></i>
                    <span className="article-link-text">Share Post</span>
                </a>
            </div>
        )
    }
}

export default ArticleLinks