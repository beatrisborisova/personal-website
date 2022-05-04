import './Projects.css'

function Projects() {

    return (
        <div className="projects-main">
            <h1>My projects</h1>
            <div className='projects-container'>
                <a href="https://github.com/beatrisborisova/Books-Place" className="project">
                    <div id='info'>
                        <h3>Books Place</h3>
                        <div className="project-image-wrapper">
                            <img src='books-place.png' alt="project" />
                        </div>
                        <p>Books Place is an Angular project for books choosing a book by its resume.</p>
                    </div>
                    <div className='show-more'>View source code</div>
                </a>
                <a href="https://github.com/beatrisborisova/simple-battle-game" className="project">
                    <div id='info'>
                        <h3>Simple Battle Game</h3>
                        <div className="project-image-wrapper">
                            <img src='battle-game.png' alt="project" />
                        </div>
                        <p>Simple JavaScript application simulating a battle between two players.</p>
                    </div>
                    <div className='show-more'>View source code</div>
                </a>
                <a href="https://github.com/beatrisborisova/JavaScript---Music-App" className="project">
                    <div id='info'>
                        <h3>Music Player</h3>
                        <div className="project-image-wrapper">
                            <img src='music-player.png' alt="project" />
                        </div>
                        <p>Vanilla Javascript front-end application (SPA) for managing the music. </p>
                    </div>
                    <div className='show-more'>View source code</div>
                </a>
                <div className="project">
                    <div id='info'>
                        <h3>ReactJS Application</h3>
                        <div className="project-image-wrapper">
                            <img src='comming-soon.jpg' alt="comming-soon" />
                        </div>
                        <p>A cool ReactJS application now in a process of developing.</p>
                    </div>
                    {/* <div className='show-more'>View source code</div> */}
                </div>
            </div>

        </div>
    )
}

export default Projects;