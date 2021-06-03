---
title: Reference
tags: main
sidebar_label: Introduction
sidebar_position: 1
---

## Introduction

The Jarbird plugin aims to simplify the concepts to publish components, and 
reduce the amount of code to specify the details of publishing, and make 
those informations more reusable.

A common Java library publish with Gradle needs the following parts:

- Building jar file of the library, this is largely automatic when building code
with Gradle `java-library` plugin.

- Create `publishing` and `publication` block which describe the details in 
  [POM](https://maven.apache.org/pom.html) file. We need to do some XML 
  manipulation code in build script.
  
- Create `gradlePlugin` block to describe further details about plugin 
  publishing.
  
To publish component to Maven Central, we further needs

- Build a jar archive of source code.

- Build javadoc and a jar archive of javadoc files.

- Set up signing task to sign the artifacts above.

When we publish components to Artifactory, we need another set of 
configuration which duplicate part of the informatiopn above, in different format.

It is not trivial to share similiar information among sub-projects, some 
copy-and-paste work is needed, and it is error-prone. 

That's where the Jarbird Gradle plugin come to rescue.

