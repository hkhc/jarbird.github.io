---
title: Declaring plugin
tags: main
sidebar_position: 2
---

## Declaring the plugin

### Common Java/Kotlin projects

In correponding sub-projects:

<!--tabs-->
# build.gradle
```groovy
plugins {
    ... // java or kotlin plugin
    id 'io.hkhc.jarbird' version '{{jarbirdVersion}}'
}
// ...
```
# build.gradle.kts
```kotlin
plugins {
    ... // java or kotlin plugin
    id("io.hkhc.jarbird") version "{{jarbirdVersion}}"
}
// ...
```
<!--/tabs-->

### Android projects

In correponding sub-projects:

<!--tabs-->
# build.gradle
```groovy {4}
plugins {
    id 'com.android.library'
    id 'kotlin-android'
    id 'io.hkhc.jarbird-android' version "{{ jarbirdVersion }}"
}
```
# build.gradle.kts
```kotlin {4}
plugins {
    id("com.android.library")
    id("kotlin-android")
    id("io.hkhc.jarbird-android") version "{{ jarbirdVersion }}"
}
```
<!--/tabs-->

### Root project

For the root project, we use `io.hkhc.jarbird` no matter we have Android sub-projects or not.

`jarbird` plugin declaration is not strictly needed in the root project. It is  helpful for these cases:

- Save us from specifying plugin version in every sub-projects.
- Declare repositories that all sub-projects will use.
