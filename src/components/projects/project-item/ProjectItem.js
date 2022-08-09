import './ProjectItem.css';

export const ProjectItem = ({ data }) => {

    return (
        <a href={data.link} className="project">
            <div id='info'>
                <h3>{data.name}</h3>
                <div className="project-image-wrapper">
                    <img src={data.image} alt="project" />
                </div>
            </div>
            <div>
                <p>{data.description}</p>
                <div className='show-more'>View source code</div>
            </div>
        </a>
    )
}