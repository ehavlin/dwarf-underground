import React, { Component } from 'react'
import ArticleTitle from './ArticleTitle'
import ArticleBody from './ArticleBody'
import ArticleLinks from './ArticleLinks'
import AuthorInfo from './AuthorInfo'
import './Article.css'

class Article extends Component {
    render() {
        return (
            <div className="large-8 medium-12 columns article">
                <ArticleTitle />
                <AuthorInfo />
                <ArticleBody />
                <ArticleLinks />
            </div>
        )
    }
}

export default Article