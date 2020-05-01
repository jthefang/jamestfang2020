import React, { Component } from 'react';
import ProjectCard from './ProjectCard';

import pacifism from '../images/projects/pacifism.gif';
import maze from '../images/projects/maze.gif';
import game24 from '../images/projects/24.gif';
import robocar from '../images/projects/robocar.jpg';

const projects = [
  {
    title: "Pacifism",
    bullets: [
      "Control a weaponless spaceship and survive as long as possible against waves of drones",
      "Created using Unity and C#"
    ],
    links: [
      { text: "Play", href: "http://www.jamestfang.com/Pacifism" },
      { text: "Code", href: "https://github.com/jthefang/Pacfisim2D/tree/master/Assets/Scripts" },
    ],
    src: pacifism,
  },
  {
    title: "Maze Game",
    bullets: [
      "Navigate through a procedurally generated maze, but memorize as much as you can before the lights go off",
      "Created using Unity and C#"
    ],
    links: [
      { text: "Play", href: "http://jamestfang.com/Maze/" },
      { text: "Code", href: "https://github.com/jthefang/Games/tree/master/Maze/Assets/Scripts" },
    ],
    src: maze,
  },
  {
    title: "24",
    bullets: [
      "Use exactly 4 given card values and any math operations (e.g. +, -, *, /, e, log, ^, sqrt, etc.), and try to make 24"
    ],
    links: [
      { text: "Play", href: "http://www.jamestfang.com/24/" }
    ],
    src: game24,
  },
  {
    title: "Mini Wall-E",
    bullets: [
      "Moves left, right and forward (slow or fast) based off distinct vocal commands",
      "Developed in C using a Texas Instruments Launchpad, transistors, filters and PCA classification"
    ],
    links: [
      { text: "Video", href: "https://www.youtube.com/watch?v=28asFi9SFIs" }
    ],
    src: robocar,
  },
]

export default class Projects extends Component {
  render() {
    const projectCards = projects.map((project, index) => <ProjectCard key={index} card={project} />)

    return (
      <div className="container-fluid my-5 px-md-4">
        <div className="row justify-content-center">
          {projectCards}
        </div>
      </div>
    )
  }
}
