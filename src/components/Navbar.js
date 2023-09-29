import React from 'react';

// export default class Navbar extends Component {
    // render(){}
function Navbar(){
        return (
            <>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                    <img src="http://cliparts.co/cliparts/6Ty/XKj/6TyXKjqac.jpg" height={50} width={50}  style={{marginRight: '10px'}}alt="Planet earth clip art Free vector for free download (about 53 files)." />
                        <a className="navbar-brand" href="/about">World News</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Home</a></li>
                                <li className="nav-item"><a className='nav-link active' href='/business'>Business</a></li>
                                <li className="nav-item"><a className='nav-link active' href='/entertainment'>Entertainment</a></li>
                                <li className="nav-item"><a className='nav-link active' href='/health'>Health</a></li>
                                <li className="nav-item"><a className='nav-link active' href='/science'>Science</a></li>
                                <li className="nav-item"><a className='nav-link active' href='/sports'>Sports</a></li>
                                <li className="nav-item"><a className='nav-link active' href='/technology'>Technology</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
}

export default Navbar;