---
title: POM
tags: main
sidebar_position: 4
---

Jarbird plugin basically gets all the detailed information it needs for publishing from our POM file. Instead of the Maven standard POM file, we specify our POM information in our own YAML format. It is more human friendly and easier to reuse data among different publication.

The Jarbird plugin works without the POM file. Like conventional component publishing, the build script and Jarbird plugin can figure minimal information from the project. But it is more flexible and understandable to put POM information in the YAML POM file.

## POM file format

A complete `pom.yaml` look like this.

```yaml title="pom.yaml"
group: myGroup
artifactId: myLib
version: 1.0.0
packaging: jar

licenses:
- name: Apache-2.0
  dist: repo

developers:
- id: name-id
  name: My name
  email: my-email@email.com

scm:
   repoType: github.com
   repoName: path-to-repo
   
# For publishing Gradle plugin only
plugin:
  id: myplugin.id
  displayName: My Gradle plugin
  implementationClass: myGroup.myLib.myPlugin
  tags:
  - publish

```

It shall be a valid [YAML](https://yaml.org/spec/1.2/spec.html) file. It can be validated by online services like [this](http://www.yamllint.com/).

We can omit most of the information above as long as the remote repositories allow. If `pom.yaml` file is totally omitted. The plugin deduces the following information from the project:

- `artifactId` : The project name. It is the directory of the project, but can be overridden in `settings.gradle` or `settings.gradle.kts`.

## POM file location and Merging POM files

A common POM file is named `pom.yaml` or `pom.yml`. It is placed in any of the following places:

- The file specified by Gradle property "pomFile". The property can be specified by `-P`, `--project-prop` option in the Gradle command line.
- sub-project directories.
- root-project directory.
- Gradle home directory. The default is "~/.gradle", but it can be changed by `GRADLE_USER_HOME` environment variable.

POM information in these files will be merged for specific sub-project. The information in the files is overwritten according to the precedence from the above list. That is the content in sub-projects override information in the root project, and so on.

Then we can specify shared information in the root project or even `~/.gradle/pom.yaml`.

For example, let say we have a project with the following `pom.yaml`:

```yaml title="myproject/pom.yaml" {1}
group: myAltGroup
artifactId: myLib
version: 1.0.0
```

And we have `~/.gradle/pom.yaml`

```yaml title="~/.gradle/pom.yaml" {1}
group: myGroup

licenses:
- name: Apache-2.0
  dist: repo
```

Then we have an effective POM for the project:

```yaml title="effective POM" {1}
group: myAltGroup
artifactId: myLib
version: 1.0.0

licenses:
- name: Apache-2.0
  dist: repo
```

Note how the value of `group` is resolved. The value at the project directory overrides the value under `~/.gradle` directory.

When merging POM files with a different set of developers, they are merged together according to their IDs. For example, let say we have a project with the following `pom.yaml`:

```yaml title="myproject/pom.yaml" {5-8}
group: myAltGroup
artifactId: myLib
version: 1.0.0

developers:
- id: dev001
  name: John
  email: john@email

```

And we have `~/.gradle/pom.yaml`

```yaml title="~/.gradle/pom.yaml" {3-6}
group: myGroup

developers:
- id: dev002
  name: Peter
  email: peter@email

```

Then we have an effective POM for the project:

```yaml title="effective POM" {5-11}
group: myGroup
artifactId: myLib
version: 1.0.0

developers:
- id: dev001
  name: John
  email: john@email
- id: dev002
  name: Peter
  email: peter@email
```

Similar behaviour for licenses and contributors.

## POM variant <a href="#variant"/>

Sometimes we may publish multiple components in one project. For example, we may create debug or release version of components in a single Android project. Those multiple components may have slightly different POM details. We can specify these details with the POM variant feature.

In `pom.yaml` we may specify multiple YAML fragments. Each of them is identified by the property `variant`. Fragment without `variant` is considered the default fragment.

For example,

```yaml title="pom.yaml"
---
variant: release
artifactId: myapp
---
variant: debug
artifactId: myapp-qa
---
group: mygroup
version: 1.0.0
packaging: aar
....
```

This file will be interpreted as two effective POM

```yaml title="release POM"
variant: release
artifactId: myapp
group: mygroup
version: 1.0.0
packaging: aar
....
```

```yaml title="debug POM"
variant: debug
artifactId: myapp-qa
group: mygroup
version: 1.0.0
packaging: aar
....
```

If the default fragment presents, the content will be in each of the variants, and the variant-specific part will override the content in the default fragment. Note how `group`, `version`, and `packaging` appear in each of the variants of effective POM.

## Merging multiple POM files with variants

We may even merge multiple POMs with variants. Two `pom.yaml` files can be merged together on a variant by variant basis. This means variants of the same name across different files will be merged together. For example,

```yaml title="~/.gradle/pom.yaml"
---
version: release
developers:
- id: dev001
  name: John
  email: john@email
---
variant: debug
developers:
- id: dev002
  name: Peter
  email: peter@email
---
group: mygroup
....
```

```yaml title="myproject/pom.yaml"
---
variant: release
artifactId: myapp
---
variant: debug
artifactId: myapp-qa
---
version: 1.0.0
packaging: aar
....
```

Then the effective POMs become:

```yaml title="release POM"
group: mygroup
artifactId: myapp
version: 1.0.0
packaging: aar

developers:
- id: dev001
  name: John
  email: john@email
```

```yaml title="debug POM"
group: mygroup
artifactId: myapp
version: 1.0.0
packaging: aar

developers:
- id: dev002
  name: Peter
  email: peter@email
```

## POM Reference

Full reference of `pom.yaml` can be found [here](pom-reference).
