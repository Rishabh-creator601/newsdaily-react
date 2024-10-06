import React from 'react'

function About() {
    return (
        <div className='container my-3'>

            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="Notice1">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What is this App About ?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#Notice1">
                        <div className="accordion-body">
                            <strong>News Daily </strong> is About fetching news from newsapi.org and displaying news categoryWise
                        </div>
                    </div>
                </div>
            
                <div className="accordion-item">
                    <h2 className="accordion-header" id="Notice1">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What is the teaching of the app for the developer and some history ?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#Notice1">
                        <div className="accordion-body">
                            This app was previously built in Class Components but due to lack of undersatnding and fucntionality this is now addressed to function based component . It displays the news that is its Main Teaching 
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
