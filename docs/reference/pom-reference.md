---
title: pom.yaml Reference
tags: main
sidebar_position: 5
---

Here is a complete list of property name and their meaning in `pom.yaml`. The absolute minimal properties are those that represnets [Maven coordinate](https://maven.apache.org/pom.html#Maven_Coordinates). That is, `group`, `artifactId` and `version`. However, individual `pom.yaml` does not needed to have all three, as long as the merged result of multiple files have all these information. If the merged result missed `artifactId`, the project name will be used as default.

| Name           | Meaning                                                      |
| -------------- | ------------------------------------------------------------ |
| `variant`        | Optional variant name for the POM fragment. See [POM variant](pom#variant) section of this guide. |
| `group`        | The group of coordinate of component. Must presents in merged result. |
| `artifactId`   | The artifact Id of coordinate of component. If it is not specified, the default is the project name. |
| `version`      | The version of coordinate of component. Must presents in merged result. |
| `packaging`    | The format of the artifact. Can be, but not limited to, `jar`, `aar`, `war` |
| [`licenses`](#licenses)     | A collection of licenses                                     |
| [`developers`](#developers)  | A collection of developers                                   |
| [`contributors`](#contributors) | A collection of contributors                                 |
| [`organization`](#organization) | The organization that the component belong to.               |
| [`web`](#web)          | The web site for the component.                              |
| [`scm`](#scm)          | The version control system for the component.                |
| [`plugin`](#plugin)       | Definition of Gradle plugin publishing                       |

## `licenses` <a href="#licenses"/>

```yaml
licenses:
- name: Apache-2.0
  dist: repo
```

The `url` field will be filled automatically by the plugin with value `http://www.apache.org/licenses/LICENSE-2.0.txt`.

Predefined license types included:

- `Apache-2.0`
- `BSD-3-Clause`
- `MIT`
- `GPLv3`
- `LGPLv3`

| Name      | Meaning                            |
| --------- | ---------------------------------- |
| `name`    | Name of license.                   |
| `url`     | URL to the full text of license.   |
| `dist`    | `repo` or `manual`                 |
| `comment` | Additional comment to the license. |

See [this](https://maven.apache.org/pom.html#licenses) for full description of the block.

## `developers` <a href="#developers"/>

`developers` block may specify multiple developers participated in developing the component.

| Name           | Meaning                                                      |
| -------------- | ------------------------------------------------------------ |
| `id`           | ID of the developer. It is an arbitrary ID that help organizing people in an organization. |
| `name`         | Name of the person.                                          |
| `email`        | Email address of the person.                                 |
| `Organization` | The organization that the person belong to.                  |
| `timeZOne`     | The time zone that the person is in.                         |
| `url`          | URL of informaticon about the person.                        |

## `contributors` <a href="#contributors"/>

A collection of person that contributed to the project. The format is identicial with `developers` block.

## `organization` <a href="#organization"/>

| Name   | Meaning                                         |
| ------ | ----------------------------------------------- |
| `name` | Name of the organization.                       |
| `url`  | URL to further information of the organization. |

## `scm` <a href="#scm"/>

| Name                  | Meaning                                                      |
| --------------------- | ------------------------------------------------------------ |
| `url`                 | URL to the source code control system. If `repoType` and `repoName` is given. This field is automatically filled as `https://{repoType}/{repoName}` |
| `connection`          | The string to identify the project in source code control system. The format depends on the repoType. It is usually a URL to the source code repository. Normally access to the repository pointed by this value is readonly. |
| `developerConnection` | Similar to `connection`, but specify the repository that requires write access. |
| `repoType`            | Usually the domain name of the service, like `github.com`, `gitlab.com` |
| `repoName`            | Usually the path after `repoType` which represents the user account and repository name of the source code control system. For example, `hkhc/jarbird`. |
| `issueType`           | The type of issue management system. It could be the same as `repoType` for case like `github.com`. |
| `issueUrl`            | URL to the issue management system for this component.       |
| `tag`                 | Further information about the component in the source code management system. |

## `web` <a href="#web"/>

| Name          | Meaning                               |
| ------------- | ------------------------------------- |
| `url`         | URL to the website of this component. |
| `description` | Description of the web site.          |

## `plugin` <a href="#plugin"/>

`plugin` block is only needs to publish Gradle plugin.

| Name                  | Meaning                                                      |
| --------------------- | ------------------------------------------------------------ |
| `id`                  | Plugin ID used to declare the use of plugin.                 |
| `displayName`         | The name of plugin to be shown in Gradle Plugin Portal.      |
| `description`         | Description of the pligin.                                   |
| `implementationClass` | The fully qualified class name                               |
| `tags`                | Multiple values of tag string to be sent to Gradle Plugin Portal. |


