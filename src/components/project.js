import React from 'react'

const Project = ({title, description, tools, link}) => (
    <div className="project">
        <div className="text">
            <a href={link} rel="noopener noreferrer" target="_blank"> <h2>{title}</h2> </a>
            <h5>{tools}</h5>
            <p>{description}</p>
            
        </div>
    </div>
)

export default Project