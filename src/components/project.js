import React from 'react'
import Image from './image'

const Project = ({title, description, tools, image}) => (
    <div className="project">
        <section className="image">
        <Image></Image>
        </section>
        <section className="text">
            <h1>{title}</h1>
            <p>{description}</p>
            <p>Tools: {tools}</p>
        </section>
        
    </div>
    
)

export default Project