import React, { Component } from 'react'
import Article from './Article'
import Ad from './Ad'
import OtherArticle from './OtherArticle'

class Main extends Component {
    render() {
        return (
            <main className="expanded row">
                <Article />
                <Ad />
                <OtherArticle />
            </main>
        )
    }
}

export default Main