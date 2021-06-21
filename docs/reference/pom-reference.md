---
title: pom.yaml Reference
tags: main
sidebar_position: 5
---

Here is a complete list of property name and their meaning in `pom.yaml`. The absolute minimal properties are those that represent [Maven coordinate](https://maven.apache.org/pom.html#Maven_Coordinates). That is, `group`, `artifactId` and `version`. However, individual `pom.yaml` does not need to have all three, as long as the merged result of multiple files has all this information. If the merged result missed `artifactId`, the project name will be used as default.

| Name           | Meaning                                                      |
| -------------- | ------------------------------------------------------------ |
| [`variant`](pom#variant) | Optional variant name for the POM fragment. See [POM variant](pom#variant) section of this guide. |
| `group`        | The group of the coordinate of the component. Must present in merged result. |
| `artifactId`   | The artefact Id of coordinate of the component. If it is not specified, the default is the project name. |
| `version`      | The version of the coordinate of the component. Must present in merged result. |
| `packaging`    | The format of the artefact. Can be, but not limited to, `jar`, `aar`, `war`. |
| [`licenses`](#licenses)     | A collection of licenses                                     |
| [`developers`](#developers)  | A collection of developers                                   |
| [`contributors`](#contributors) | A collection of contributors                                 |
| [`organization`](#organization) | The organization that the component belongs to.               |
| [`web`](#web)          | The website for the component.                              |
| [`scm`](#scm)          | The version control system for the component.                |
| [`plugin`](#plugin)       | Definition of Gradle plugin publishing                       |

## `licenses` <a href="#licenses"/>

```yaml
licenses:
- name: Apache-2.0
  dist: repo
```

The `url` field will be filled automatically by the plugin with the value `http://www.apache.org/licenses/LICENSE-2.0.txt`.

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

See [this](https://maven.apache.org/pom.html#licenses) for a full description of the block.

## `developers` <a href="#developers"/>

`developers` block may specify multiple developers participated in developing the component.

| Name           | Meaning                                                      |
| -------------- | ------------------------------------------------------------ |
| `id`           | ID of the developer. It is an arbitrary ID that helps to organize people in an organization. |
| `name`         | Name of the person.                                          |
| `email`        | Email address of the person.                                 |
| `organization` | The organization that the person belongs to.                  |
| `timeZone`     | The time zone that the person is in.                         |
| `url`          | URL of information about the person.                        |

## `contributors` <a href="#contributors"/>

A collection of person that contributed to the project. The format is identical to the `developers` block.

## `organization` <a href="#organization"/>

| Name   | Meaning                                         |
| ------ | ----------------------------------------------- |
| `name` | Name of the organization.                       |
| `url`  | URL to further information of the organization. |

## `scm` <a href="#scm"/>

| Name                  | Meaning                                                      |
| --------------------- | ------------------------------------------------------------ |
| `url`                 | URL to the source code control system. If `repoType` and `repoName` is given. This field is automatically filled as `https://{repoType}/{repoName}` |
| `connection`          | The string to identify the project in the source code control system. The format depends on the `repoType`. It is usually a URL to the source code repository. Normally access to the repository pointed by this value is read-only. |
| `developerConnection` | Similar to `connection`, but specify the repository that requires write access. |
| `repoType`            | Usually the domain name of the service, like `github.com`, `gitlab.com` |
| `repoName`            | Usually the path after `repoType` represents the user account and repository name of the source code control system. For example, `hkhc/jarbird`. |
| `issueType`           | The type of issue management system. It could be the same as `repoType` for cases like `github.com`. |
| `issueUrl`            | URL to the issue management system for this component.       |
| `tag`                 | Further information about the component in the source code management system. |

## `web` <a href="#web"/>

| Name          | Meaning                               |
| ------------- | ------------------------------------- |
| `url`         | URL to the website of this component. |
| `description` | Description of the website.          |

## `plugin` <a href="#plugin"/>

`plugin` block is only needed to publish the Gradle plugin.

| Name                  | Meaning                                                      |
| --------------------- | ------------------------------------------------------------ |
| `id`                  | Plugin ID used to declare the use of the plugin.                 |
| `displayName`         | The name of the plugin to be shown in Gradle Plugin Portal.      |
| `description`         | Description of the plugin.                                   |
| `implementationClass` | The fully qualified class name                               |
| `tags`                | Multiple values of tag string to be sent to Gradle Plugin Portal. |


