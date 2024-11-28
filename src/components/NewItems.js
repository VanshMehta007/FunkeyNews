import React, { Component } from 'react'

export class NewItems extends Component {
    render() {
        let { title, description, imageURL, newsURL} = this.props;
        return (
            <>
                <div className="card" style={{ width: "auto" }}>
                    <img src={imageURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">
                            {description}...
                        </p>
                        <a href={newsURL} target='_blank' className="btn btn-sm btn-info">
                            Read More
                        </a>
                    </div>
                </div>

            </>
        )
    }
}

export default NewItems