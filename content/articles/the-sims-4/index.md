---
title: "The Sims 4 Client Systems Internship"
description: ""
date: "2023-08-18"
banner:
  src: "../../images/TheSims4Thumbnail.png"
  alt: "Sims 4 Preview"
categories:
  - "C++"
  - "Custom Engine"
  - "Perforce"
keywords:
  - "The Sims 4"
  - "Maxis"
  - "Client Systems Engineering"
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
    <span class="detailsName">Technologies:</span>
    <span class="detailsInfo">C++, Visual Studio, Perforce, Jira</span>
  </li>
  <li>
    <span class="detailsName">Duration:</span>
    <span class="detailsInfo">12 weeks</span>
  </li>
  <li>
    <span class="detailsName">Role:</span>
    <span class="detailsInfo">Client Systems Engineering Intern</span>
  </li>
</ul>

<div style="text-align: center">
  <a href="#presentationVideo" class="button">Watch Showcase Video</a>
</div>

## Role & Responsibilities
- Improved player experience by resolving community-reported legacy issues in Create-A-Sim and Build/Buy modes.
- Systematically narrowed the problemspace to isolate bugs in the vast codebase.
- Collaborated with Producers and Designers to identify requirements and create long-term, scalable solutions.

## Description
With the release of The Sims 4 For Rent expansion pack in December, I am finally able to share much of the work I did during my summer internship at Maxis. My changes are live and playable since the base game update on Dec. 5th! For the end of my internship, I created the following video to share my experience as a Software Engineering Intern on The Sims 4 Client Systems team.

This video showcases my experience onboarding onto the team, narrowing down the problem space to hunt bugs in a vast codebase, and highlights my impact on player experience through solving these community-reported issues.

Excerpts from the <u><a href="https://simscommunity.info/2023/12/05/sims-4-update-patch-notes-dec23/#bug-fixes" target="_blank">patch notes</a></u> on Bug Fixes I worked on:
- Basement stairs should now play nicely with terrain when the lot has a raised foundation. (Featured in my video!)
- Adjusted frequency of body hair on randomized Sims to be slightly less excessive.
- Changing foundation height should no longer stop windows from being placed on curved walls.

<iframe src="https://www.youtube.com/embed/RKCwHMC_9d8" id="presentationVideo" title="Maxis - Intern Fair Presentation" width="660" height="440" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
