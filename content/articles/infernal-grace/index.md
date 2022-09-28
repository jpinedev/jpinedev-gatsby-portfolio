---
title: "Infernal Grace"
description: "The armies of Heaven and Hell are going to war threatening to destroy Earth in the process. You play simultaneously as two soul-bound heroes, an Angel and a Devil, who have agreed to work together to save Earth. Fight off the armies of both realms at the same time in this difficult, timing-based combat game."
date: "2022-01-30"
banner:
  src: "../../images/InfernalGrace.png"
  alt: "Infernal Grace title screen"
categories:
  - "Unity"
  - "C#"
keywords:
  - "Infernal Grace"
  - "Global Game Jam 2022"
  - "Duality"
  - "Mobile"
---

<style>
  .detailsName {
    text-align: left;
    font-weight: 600;
  }
  .detailsInfo {
    text-align: right;
    font-weight: 200;
    color: var(--subtext-color);
  }
  .button {
    border-radius: var(--border-radius);
    border: 0.125rem solid var(--primary-color);
    background: var(--background-color);
    padding: 0.5rem 1.5rem;
    transition: 25ms ease-out;
    color: var(--primary-color);
    margin-bottom: .5rem;
  }
  .button:hover {
    background: var(--primary-color);
    color: var(--background-color);
  }
  .storePages {
    display: flex; flex-direction: row; justify-content: space-around;
  }
  .storePages > a { margin-top: .75rem }
  .massdigiLogo { width: 400px; height: 250px; object-fit: cover; margin: auto; }
  @media (max-width: 666px) {
    .storePages { flex-direction: column; align-items: center }
  }
</style>

<ul style="font-size: 1.5rem; list-style: none">
  <li>
    <span class="detailsName">Platform:</span>
    <span class="detailsInfo">PC</span>
  </li>
  <li>
    <span class="detailsName">Engine:</span>
    <span class="detailsInfo">Unity</span>
  </li>
  <li>
    <span class="detailsName">Production Time:</span>
    <span class="detailsInfo">48 hours</span>
  </li>
  <li>
    <span class="detailsName">Team Size:</span>
    <span class="detailsInfo">7</span>
  </li>
  <li>
    <span class="detailsName">Role:</span>
    <span class="detailsInfo">Programmer, Designer</span>
  </li>
</ul>

<div style="text-align: center">
  <h3 style="color: var(--code-block-fun)">
    Submitted to 2022 Global Game Jam Boston</h3>
  <a href="https://globalgamejam.org/2022/games/infernal-grace-0" target="_blank" class="button">View Jam Submission</a>
</div>

## Role & Responsibilities
- Designed and implemented Enemy AI with a FSM
- Created Enemy spawning system that reads a level's spawning instructions from its JSON file
- Created an external tool for designers to easily construct their own spawning instructions JSON
- Implemented an autosave system to keep progress after beating a level
- Worked with the Composer to implement a dynamic soundtrack that responds to player's actions
- Assembled the components from each team member into a unified project and built the game

## Description
The armies of Heaven and Hell are going to war threatening to destroy Earth in the process. You play simultaneously as two soul-bound heroes, an Angel and a Devil, who have agreed to work together to save Earth. Fight off the armies of both realms at the same time in this difficult, timing-based combat game.

<iframe src="https://drive.google.com/file/d/1jvAim07x8338zR-FwgMmBBhWl9IrvfCb/preview" width="660" height="440" frameborder="0" allow="accelerometer; autoplay; gyroscope; picture-in-picture" allowfullscreen></iframe>

For the 2022 Global Game Jam Boston, hosted by Northeastern University's Game Development Club, I worked on a team of seven developers to create a game around the theme of "Duality" in 48 hours. Together, we developed a game around the duality of heaven and hell and the necessary balance between the two. 

## Meet the Team
- Jonny Glassman - Producer, Designer, Writer
- Abhinav Reddy Chitty - Artist, Animator, Designer
- Shripad Agashe - Programmer, Designer
- Jake Pine - Programmer, Tools, Designer
- Dylan Ever - Composer, Sound Designer, Concept Artist, Writer, Designer
- Siddharth Singhai - Programmer, Designer
- Costas Frost - Artist, Animator

Submission for the 2022 Global Game Jam: Boston

![Global Game Jam logo](../../images/ggjLogo.jpeg)

<div style="text-align: center">
  <a href="https://globalgamejam.org/2022/games/infernal-grace-0" target="_blank" class="button">View Jam Submission</a>
</div>