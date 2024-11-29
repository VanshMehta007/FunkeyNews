import React, { useEffect, useState } from 'react'
import NewItems from './NewItems'
import Loader from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"



const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalArticles, setTotalArticles] = useState(0)
    // document.title = `${capitalizeFirstLetter(props.category)} ~ Funkey News`



    const capitalizeFirstLetter = (val) => {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    }

    const updateNews = async () => {
        props.setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        props.setProgress(30);
        let data = await fetch(url);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles || [])
        setTotalArticles(parsedData.totalResults)
        setLoading(false)
        // setpage(state.page)
        props.setProgress(100);
    }

    useEffect(() => {
        updateNews();
    })

    const handlePrevClick = async () => {
        setPage(page - 1);
        updateNews();
    }

    const handleNextClick = async () => {
        setPage(page + 1);
        updateNews();
    }

    const fetchMoreData = async () => {
        setPage(page + 1);

        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles || []))
        setTotalArticles(parsedData.totalResults)
    };



    return (
        <>
            <div className='container mt-5'>
                <h2 className='customLogo fs-1 text-center'>Funkey News - {props.category} Top Headlines</h2>
                {/* {this.state.loading && <Loader />} */}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalArticles}
                    loader={<Loader />}
                >
                    <div className="container">
                        <div className="row gy-3 gx-4 mb-3 my-3">
                            {articles
                                .filter((element, index, self) =>
                                    index === self.findIndex((el) => el.url === element.url)
                                )
                                .map((element, index) => {
                                    if (element.name !== null && element.urlToImage !== null) {
                                        return (
                                            <div
                                                className="col-12 col-md-6 col-lg-4"
                                                key={`${element.url}-${index}`} // Ensure unique key
                                            >
                                                <NewItems
                                                    title={element.title ? element.title.slice(0, 40) : " "}
                                                    description={element.description ? element.description.slice(0, 80) : " "}
                                                    imageURL={element.urlToImage}
                                                    newsURL={element.url}
                                                    author={!element.author ? "Unknown" : element.author}
                                                    date={element.publishedAt}
                                                    source={element.source.name}
                                                />
                                            </div>
                                        );
                                    }
                                    return null;
                                })}

                        </div>
                    </div>
                </InfiniteScroll>

                {/* <div className="container d-flex justify-content-between pb-5">
                        <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.state.page)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div> */}
            </div>
        </>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: "general"

}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
};

export default News



