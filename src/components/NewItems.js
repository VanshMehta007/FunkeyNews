import React from 'react'

const NewItems = (props) => {
    let { title, description, imageURL, newsURL, author, date, source } = props;
    return (
        <>
            <div className="card">
                <img src={imageURL} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">
                        {description}...
                    </p>
                    <h6 className='card-text'> <span className="badge text-bg-warning">{source}</span></h6>
                    <p className="card-text"><small className="text-body-secondary">By {author} <br />Published Date : {new Date(date).toGMTString()}</small></p>
                    <a href={newsURL} target='_blank' className="btn btn-sm btn-info">
                        Read More
                    </a>
                </div>
            </div>

        </>
    )
}

export default NewItems