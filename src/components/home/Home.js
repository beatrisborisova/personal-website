import './Home.css'

function Home() {
    return (
        <div className="home-title">
            <h1>“I'm not a great programmer; <br /> I'm just a good programmer with great habits.” <br /> </h1>
            <div id='author'>- Kent Beck</div>
            <div>
                <span className='custom-icon'>&lt;</span>
                <span className='custom-icon'>/</span>
                <span className='custom-icon'>&gt;</span>
            </div>
        </div>
    )
}

export default Home;