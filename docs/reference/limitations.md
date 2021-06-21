---
title: Limtations
tags: main
sidebar_label: Limitations
sidebar_position: 8
---

There are some special limitations to specific types of repositories.

## Artifactory

- In one project or sub-project, we can have one artifactory server setting only.

## Gradle Plugin Portal

- When publishing multiple Gradle plugins within one projects, some POM information will be obtained from the POM of the first `pub` in the project.
  
