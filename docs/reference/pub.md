---
title: pub the Publication
tags: main
sidebar_position: 6
---

In terms of Jarbird plugin, "pub" refers to a unit of publication. It 
usually means publishing a JAR artifact together with related items like 
source code archive, javadoc archive, POM file, and their signatures. For 
Gradle plugin publishing, a pub also involves publishing a pseudo component 
that contains the plugin ID. 

A pub also describes the remote reposioties it targets. One pub may be 
published to multiple, heterogenous types of remote repositories.

In build script, we declare a pub in the `jarbird` block:

<!--tabs-->
# build.gradle
```groovy 
jarbird {
    pub {}
}
```
# build.gradle.kts
```kotlin 
jarbird {
    pub {}
}
```
<!--/tabs-->

This tell the Jarbird plugin that we are going to publish the artifacts build 
by this project. It will also set up the tasks for archiving source code, 
generating javadoc and archive it, and signing all of them. It generates
tasks to publish all of these to Maven local repository.

So we can run the plugin task by 

```
./gradlew jbPUblishToMavneLocal
```

or simply 

```
./gradlew jbPublish
```

which publishs everything to everywhere declared.

## Repositories

We can define one or more repositories for each pub. Each of them is in the form of a function call.

| Repository | Meaning |
|:-|:-|
|`mavenLocal()` | Maven local repository. It is included implicitly, so we don't need to specift this explicitly. |
| [`mavenCentral()`](properties-ref#mavencentral) | Maven Central |
| [`mavenRepo(repo)`](properties-ref#custommaven) | Custom Maven repository. `repo` is a string that representation the repository. It is used to match the setting of repository in `gradle.properties` |
| [`gradlePortal()`](properties-ref#gradleportal)| Gradle Plugin Portal |
| [`artifactory()`](properties-ref#artifactory) | Artifactory |

## plugin level setting, project level setting, pub level setting



## signing

## source set specification

## pub with variant

## variant augmented coordinate

## get pub information
