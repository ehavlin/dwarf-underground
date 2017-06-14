import React, { Component } from 'react'
import './Comment.css'

class Comment extends Component {
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
            <div className="comments hidden">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref={input => this.commentInput = input} />
                    <button className="expanded success button" type="submit">Submit a comment</button>
                </form>
                <ul className="no-bullet">
                    {this.state.comments.map(this.renderComment)}
                </ul>
            </div>
        )
    }
}

export default Comment