import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropType from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

// export default class News extends Component{

function News(props){

    const [articles, setArticles] = useState([]);
    const [loading, setLoader] = useState(true);
    const [page, setpage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    // constructor(){  //we r not in a class based compnent anymore
    //     super();
    //     state = {
    //         articles: [],
    //         loading: true,
    //         page: 1,
    //         totalResults: 0
    //     }
    // }

    async function updateNews()
    {
        props.setProgress(10);
        setLoader(true);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
        let data = await fetch(url);
        props.setProgress(30);

        let parsedData = await data.json();
        props.setProgress(70);

        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoader(false);

        // setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false});
        props.setProgress(100);
    }

    useEffect(()=>{
        updateNews();
    }, []//jiske change hone pr useEffect ka change run ho 
    )

    // async function componentDidMount(){
        
    // }

    // const handlePrevClick = async ()=>{
    //     setpage(page-1);
    //     // setState(state.page-1);
    //     updateNews();
    // }

    // const handleNextClick = async ()=>{
    //     setpage(page+1);
    //     updateNews();
    // }

    function makeItCapital(){
        const word = props.category;

        const firstLetter = word.charAt(0);

        const firstLetterCap = firstLetter.toUpperCase();

        const remainingLetters = word.slice(1);

        const capitalizedWord = firstLetterCap + remainingLetters;

        return capitalizedWord;
    }

    const fetchMoreData = async() => {
        setpage(page+1);

        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
        let data = await fetch(url);

        let parsedData = await data.json();


        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoader(false);

        // setState({articles: state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults, progress: state.progress+15});
      };

    // render(){

        let subsImg = "https://images.hindustantimes.com/img/2021/10/27/550x309/Breaking-News-Live-Blog-pic_1627257432413_1635334855723.jpg";

        // eslint-disable-next-line no-lone-blocks
        {document.title = makeItCapital() + " World News"}
        
        return(
            <>
            <div className="container">
                <div className="row">
                        <h1 style={{textAlign: "center", padding: "15px", marginTop: "90px"}}>Top {makeItCapital()} News Headlines</h1>
                </div>
            </div>
            
            {/* {state.loading&&<Spinner/>} */}

            <div className="container">
                <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length <= totalResults}
                loader={<Spinner/>}>
                    <div className="row">
                    {/*!state.loading&&*/articles.map((element)=>{
                        return(
                            <div className="col-md-4">
                                <NewsItem title={element.title} desc={element.description?element.description:"..."} 
                                imageUrl={element.urlToImage?element.urlToImage:subsImg} newsUrl={element.url} time={element.publishedAt} 
                                author={element.source.name}/>
                            </div>
                        );
                    })}
                    </div>
                </InfiniteScroll>
            </div>
            {/* <div className="container d-flex justify-content-between my-3">
                <button disabled={state.page<2} type="button" className="btn btn-primary" onClick={handlePrevClick}> &larr; Previous</button>
                <button disabled={state.page + 1 > Math.ceil(state.totalResults/6)} type="button" className="btn btn-primary" 
                onClick={handleNextClick}>Next &rarr;</button>
            </div> */}
            </>
        ); 
    // }    render closing bracket
}

News.propTypes = {
    country: PropType.string,
    category: PropType.string
};

News.defaultProps = {
    category: "general",
    pageSize: 6
};

export default News;