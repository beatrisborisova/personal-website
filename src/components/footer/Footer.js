import './Footer.css';

function Footer() {
    return (
        <footer>
            <p className='made-with'>Made with 
                <div className='footer-image-wrapper'>
                    <img src='react.png' alt='react' />
                </div>
            </p>
            <p className='owner'>&copy; Beatris Borisova</p>
        </footer>
    )
}

export default Footer