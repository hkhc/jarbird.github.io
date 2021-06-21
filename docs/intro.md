---
title: Simplify Component Publishing 
tags: main
---
Do you publish your components to Maven Central or other component repositories?
How much time did you spend doing so?

## Components publishing is far too complicated

Publishing libraries to public repositories like Maven, Artifactory are not difficult at all. But it is a nuisance, especially for first-timer. Setting up accounts is a lengthy process. We need to set our build script right so that those repositories accept our submission. By "right", we mean using proper plugins, declaring proper publication, and executing proper Gradle tasks. Once we have set up all those things, it is mostly "just work". So there is a significant fiction to make our components available in repositories rather than copy-and-paste among projects.

_Worst still_, the build script code to publish artefacts to Maven is quite different from the script for the Artifactory repository. We need a double effort if we want to publish to both repositories.

The complete Gradle script to publish components is filled with boilerplate code. It is hard to read, and the project-specific details are buried in the jungle of tasks and configurations.

“Jarbird” Gradle plugin is designed to make these things simple. Simply speaking, this plugin wraps up the boilerplate code to publish components to major public repositories, including Maven Central, Artifactory, Gradle’s plugin repository. It aims to make simple thing simple, so undoubtedly there are things that can be done by hand-coding the publishing code in Gradle build script, but cannot be done by this plugin. However, if things are complicated, they deserve an effort to do it in the good old way.

Let's get start from [Tutorial](tutorials/index)

## What's new

### 0.7.0

- BREAKING CHANGE: Pub declaration will not inherit from the parent project
- BREAKING CHANGE: No more implicit pub declaration. pubs must be declared 
  explicitly
- No root project task to relay to sub-projects, to facilitate component
  publishing from root project.

### 0.6.0

- BREAKING CHANGE: retire Bintray support
- BREAKING CHANGE: multiple Artifactory repository support. Need to specify a repo
  ID just like custom Maven repository.

### 0.5.4

- BREAKING CHANGE: replace `useGpg` by `signWithKeyBox()`
  and `signWithKeyring()`

### 0.5.3

- Fix incorrect plugin JAR coordinate for Gradle Plugin Portal

### 0.5.2

- Generate Maven Central compliant POM for Gradle plugin publishing
- Handle "new" Maven Central account created after Feb 2021

