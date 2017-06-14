import React, { Component } from 'react'
import Comment from './Comment'
import './ArticleLinks.css'

class ArticleLinks extends Component {
    constructor() {
        super()
        this.state = {
            displayComponent: false,
        }
    }

    handleClick(event) {
        event.preventDefault()
        if (this.state.displayComponent) {
            this.setState({displayComponent: false})
        }
        else {
            this.setState({displayComponent: true})
        }
    }

    render() {
        return (
            <div className="article-links">
                <a onClick={this.handleClick.bind(this)} className="article-link" href="#">
                    <i className="fa fa-comments-o"></i>
                    <span className="article-link-text">Comments</span>
                </a>
                <a className="article-link" href="#">
                    <i className="fa fa-share"></i>
                    <span className="article-link-text">Share Post</span>
                </a>
                {this.state.displayComponent ? <Comment /> : console.log('Dragons are scary')}
            </div>
        )
    }
}

export default ArticleLinks