import React, { Component } from 'react'

export default class NewsItem extends Component {

    
    render() {
        let {title,desc,imgurl,author,Newsurl} =  this.props;

         title = title?title.slice(0,45):"No title"
         desc = desc?desc.slice(0, 70) : "There is No description found for this articles. Sorry for Inconvience "
        let IMGURL = imgurl?imgurl:require("../error_img.png");
         author = author?author:'News Daily'
        
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={IMGURL} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{desc}</p>
                            <p className="card-text"> Author :{author}</p>
                            <a href={Newsurl} target="_blank" rel="noreferrer" className="btn btn-primary">Check out more </a>
                        </div>
                </div>
            </div>
        )
    }
}
