---
title: "MSPJ Engine"
description: "The MSPJ Engine is a top-down 2D RPG game engine with tools for creating and editing tile-based levels. Developers can script their game and custom components in Python. This engine uses SDL2 as its media layer and kiss_sdl for its tooling UI."
date: "2023-04-29"
banner:
  src: "../../images/mspj-engine.png"
  alt: "MSPJ Engine demo game"
categories:
  - "C++"
  - "Custom Engine"
  - "GIT"
keywords:
  - "MSPJ Engine"
  - "2D RPG Engine"
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
    <span class="detailsInfo">PC, Mac (Intel), Linux</span>
  </li>
  <li>
    <span class="detailsName">Libraries:</span>
    <span class="detailsInfo">SDL2, kiss_sdl</span>
  </li>
  <li>
    <span class="detailsName">Production Time:</span>
    <span class="detailsInfo">6 weeks</span>
  </li>
  <li>
    <span class="detailsName">Team Size:</span>
    <span class="detailsInfo">4</span>
  </li>
  <li>
    <span class="detailsName">Role:</span>
    <span class="detailsInfo">Programmer, Build Tools</span>
  </li>
</ul>

<div style="text-align: center">
  <h3 style="color: var(--code-block-fun)">Latest release can be downloaded on our website:</h3>
  <a href="https://phigarcia.github.io/MSPJ-Website/" target="_blank" class="button">View MSPJ Home Page</a>
</div>

## Role & Responsibilities
- Designed data-oriented Entity Component System and Physics Engine.
- Enabled Python scripting for C++-based engine by bundling into a Python library.
- Created a created a cross-platform build system for our game engine, compiled Python library, and demo game.

## Description
The MSPJ Engine is a top-down 2D RPG game engine with tools for creating and editing tile-based levels. This engine aims to make GBA-era RPG game creation accessible and easy. Developers can script their game and custom components in Python. This engine uses SDL2 as its media layer and kiss_sdl for its tooling UI.

<iframe src="https://www.youtube.com/embed/KwtUnPAUiUQ" title="MSPJ Trailer" width="660" height="440" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Meet the Team
- Phi Garcia - Programmer, Artist
- Samik Mathur - Programmer
- Jake Pine - Programmer, Build Tools
- Marvin Chong - Programmer, Tools

<div style="text-align: center">
  <a href="https://phigarcia.github.io/MSPJ-Website/" target="_blank" class="button">View MSPJ Home Page</a>
</div>