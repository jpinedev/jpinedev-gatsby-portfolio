---
title: "A Knight to Remember"
description: "An inept knight arrives at the dragon's lair only to realize they could not possibly defeat the dragon. Scramble to retrace your steps and escape before you run out of supplies, and the dungeon claims your life. Choose how you react to the encounters the dungeon throws at you."
date: "2020-02-18"
banner:
  src: "../../images/AKnightToRemember.png"
  alt: "A Knight to Remember title screen"
categories:
  - "Unity"
  - "C#"
  - "GIT"
keywords:
  - "Satirical"
  - "Dungeon Crawler"
  - "Rogue-like"
  - "Player Choice"
  - "Procedural Generation"
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
    <span class="detailsInfo">4 months</span>
  </li>
  <li>
    <span class="detailsName">Team Size:</span>
    <span class="detailsInfo">5</span>
  </li>
  <li>
    <span class="detailsName">Role:</span>
    <span class="detailsInfo">Gameplay Programmer, Artist, Animator</span>
  </li>
</ul>

<div style="text-align: center">
  <h3 style="color: var(--code-block-fun)">
    Project for Foundations of Game Design</h3>
</div>

## Role & Responsibilities
- Implemented player interactions with the game world (movement, encounters, fog of war, etc.)
- Collaborated to develop procedural world generation
- Overhauled and unified game's art style for a cute, goofy look
- Animated every encounter and the character's avaliable reactions

## Description
An inept knight arrives at the dragon's lair only to realize they could not possibly defeat the dragon. Scramble to retrace your steps and escape before you run out of supplies, and the dungeon claims your life. Choose how you react to the encounters the dungeon throws at you.

<iframe src="https://drive.google.com/file/d/1wORcbyC2CGY9en5VeO9tFc18NqK6IQzU/preview" width="660" height="440" frameborder="0" allow="accelerometer; autoplay; gyroscope; picture-in-picture" allowfullscreen></iframe>

A Knight to Remember was designed and developed as a project in a Foundations of Game Design class. Zachery Maizes and I returned to the game a year later to polish it up. I completely remade all of the assets in the game with a cohesive art style. I made each character and enemy modular to allow for creating animations for every event and choice in the game. Zachery imported the assets and animations and replaced all the old ones.

## Meet the Team
- Zachery Maizes - Lead Programmer, Writer
- Jake Pine - Programmer, Artist, Animator
- Zach Colucci - Programmer, Designer
- Colin Yang - Artist, Designer
- James McManus - Artist