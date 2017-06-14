
import React, { Component } from 'react';

class CreateOtherArticle extends Component {
    
    renderText(i) {
        this.articleTitle = [
            'Single Orcs in Indianapolis',
            'You won\'t believe what\'s under this mountain',
            'Mine 20% more gold with One Weird Trick',
            'Surprise for Indiana Hobbits born before 1999',
        ]

        return this.articleTitle[i]
    }

    renderAltText(i) {
        this.articleAlt= [
            'orc',
            'mountain',
            'gold',
            'hobbit',
        ]

        return this.articleAlt[i]
    }

    render() {
        return(
            <div className="small-6 medium-3 columns other-article">
                <a href="#">
                    <img src={this.props.article} alt={this.renderAltText(this.props.index)} />
                    <p>{this.renderText(this.props.index)}</p>
                </a>  
            </div>
        )
    }
}

export default CreateOtherArticle