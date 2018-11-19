import React from 'react'
import Layout from '../components/layout'
import Project from '../components/project'

const ProjectsPage = () => (
    <Layout>
        <div className="projects-page">
        <Project 
            title="Twatch"
            description="A Twitch.tv chat bot developed with Node.js that utilizes the Twitch.tv API. Features various chat commands such as followage, uptime, title, and viewers."
            tools="Javascript, Node.js"
            link="https://github.com/yahengsu/Twatch"
        ></Project>
        <Project
            title="JA Sales Helper"
            description="POS interface for electronically tracking sales for students in the JA Company Program. Features data export options (csv) for usage in external applications."
            tools="Java, JavaFX"
            link="https://github.com/yahengsu/JASalesHelper"
        ></Project>
        <Project
            title="Werk It"
            description="Android fitness assistant that allows users to create custom workouts and routines. Features Google Calendar sync and user authentication through Firebase."
            tools="Android, Java, Firebase"
            link="https://github.com/yahengsu/WerkIt"
        ></Project>
        <Project
            title="Alarm++"
            description="Smart Alarm clock developed using C++ and an Onion Omega 2. Features an alarm function and weather retrieval in addition to telling time."
            tools="C++"
            link="https://github.com/RohanK99/AlarmPlusPlus"
        ></Project>
        </div>
    </Layout>
)

export default ProjectsPage