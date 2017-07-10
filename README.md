# ngParticleSystem

A simulation of Particle System developed using **Angular 4**.

## Getting Started

Clone the repository (or download the zip in case you're not aware of Git cloning) in your local drive and you'll get a copy of 'particle-system' folder in your drive.

## Prerequisites

Angular CLI for running the project. [Click here to learn more about Angular CLI] (https://cli.angular.io/)


### Installing

* Run npm-install to install the dependencies
* Once done run *'ng serve'* and you can access the application using http://localhost:4200/

## About Particle System

Particle System is the name I have given to my simulation that provides an interactive data visualization that is governed by the laws of physics. The particles in my example depict employees in a department (can be expanded to organization level as well), that float around within the confinement of its environment, the size of the particle is determined by the designation of the employees. The color of the particle denotes their geographical location. Once a particle is clicked it stops moving and a panel (info-panel) opens that displays data about the particle such as the Name, Designation, their skillset and their level of experience (Beginner, Intermediate or Advanced). The info-panel also has a button called **"Show Supervisor"** that when clicked initiates a pulse on the particle that is the Supervisor of the clicked particle (the particle pulsates 8 times and stops).

The component architecture is highly decoupled and all the configuration like the size of the particle, color of the particle etc. is fed by an external config file.

### Future Release

I will replace the info-panel with a modal window instead, however I will not overwrite this version, instead I would create a new repository for the future release.

## Authors

* **Subroto Mukherjee** - [Subzw0rld](https://github.com/subzw0rld),
[Linkedin](https://www.linkedin.com/in/subrotomukherjee/)


## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/subzw0rld/ngParticleSystem/blob/master/LICENSE) file for details
