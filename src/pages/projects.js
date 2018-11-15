import React from 'react'
import Layout from '../components/layout'
import Project from '../components/project'

const ProjectsPage = () => (
    <Layout>
        <h1 style={{fontWeight: 500, textAlign: "center"}}>Projects</h1>
        <Project 
            title="Twatch"
            description="Community based ridesharing app."
            tools="Android, Java, Firebase"
        ></Project>
        <Project
            title="JA Sales Helper"
            description="Community based ridesharing app."
            tools="Android, Java, Firebase"
        ></Project>
        <Project
            title="vidstory"
            description="Community based ridesharing app."
            tools="Android, Java, Firebase"
        ></Project>
        <Project
            title="Alarm++"
            description="Community based ridesharing app."
            tools="Android, Java, Firebase"
        ></Project>
    </Layout>
)

export default ProjectsPage