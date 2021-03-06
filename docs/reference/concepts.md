---
title: Core Concepts
tags: main
sidebar_position: 3
---

The plugin works around three concepts:

| Concepts | Meaning |
|:-|:-|
| [POM](pom) | The detailed information contains in a publication. |
| [pub](pub) | It refers to a publication, which consists of a collection of artefacts. It is a unit of publication for a component. It is possible to publish multiple components in one (sub-)project.|
| repository | It refers to a destination of publishing. It could be the Maven Central repository or internal Maven repositories. One pub can be targeted to multiple repositories. Each of them may need some setting in `gradle.properties` to specify the server URL, credentials, etc.|

Jarbird plugin creates a number of tasks for publishing. They are prefixed
with `jb`.

We will cover POM first.

