import './Projects.css'
import { projectsData } from '../../data';
import { ProjectItem } from './project-item/ProjectItem';

function Projects() {

    return (
        <div className="content">
            <h1>My projects</h1>
            <div className='projects-container'>
                {projectsData && projectsData.map(el => <ProjectItem data={el} />)}

                <div className="project">
                    <div id='info'>
                        <h3>React.js Application</h3>
                        <div className="project-image-wrapper">
                            <img src='comming-soon.jpg' alt="comming-soon" />
                        </div>
                        <p>A cool React.js application now in a process of developing.</p>
                    </div>
                    {/* <div className='show-more'>View source code</div> */}
                </div>
            </div>

        </div>
    )
}

export default Projects;