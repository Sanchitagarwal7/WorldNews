import React from 'react'


// export default class NewsItem extends Component{
//     // render(){
function NewsItem(props){
        let {title, desc, imageUrl, newsUrl, time, author} = props;

        return(
            <>
                <div className="card" style={{marginBottom: "15px"}}>
                    <img src={imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                            <footer className="blockquote-footer my-3">
                                <cite>
                                    by {author} on {new Date(time).toLocaleString("en-US", {timeZone: 'Asia/Kolkata'})}
                                </cite>
                            </footer>
                        <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </>
        );
    // }
}

export default NewsItem;