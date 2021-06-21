---
title: Properties Reference
tags: main
sidebar_position: 7
---

Some setup of properties is needed to make the Jarbird plugin function properly.

Usually, we put them in one of the `gradle.properties` files. It is recommended to put them in `~/.gradle/gradle.proeprties` rather than the project's `gradle.properties` so that sensitive information is not in the project.

Jarbird plugin read these properties with Gradle property mechanism, this means we may put the setting in one of the following ways:

- Command-line option `-P`
```
    ./gradlew -Prepository.mavencentral.username=ABC jbPublish
```

- Java system properties `-D`
```
    ./gradlew -Prepository.mavencentral.username=ABC jbPublish
```  

- Environment variable
```
    export repository.mavencentral.username=ABC
    ./gradlew jbPublish
```

- `gradle.properties` at Gradle home directory (`~/.gradle/garadle.properties`)

- `gradle.properties` at the project root directory

If a property is set in multiple places, the one at the higher place of the table override the lower one.

## Maven Central <a href="#mavencentral"/>

Publish to Maven Central's Sonatype Server.

| Properties | Meaning |
|:-|:-|
| `repository.mavencentral.username` | Username to the Maven Central Sonatype server |
| `repository.mavencentral.password` | Password to the Maven Central Sonatype server |
| `repository.mavencentral.newUser` | True if the account is created after February 2021, false otherwise. Default is true. |

## Custom Maven repository <a href="#custommaven"/>

Publish to custom Maven Server. Replace `[repoId]` with the name of repository defined in `jarbird` configuration block in build script.

| Properties | Meaning |
|:-|:-|
| `repository.maven.[repoId].release` | Publishing URL for released component |
| `repository.maven.[repoId].snapshot` | Publishing URL for snapshot component |
| `repository.maven.[repoId].username` | Username to the Maven server |
| `repository.maven.[repoId].password` | Password to the Maven server |
| `repository.maven.[repoId].description` | Description of the repository to be shown in `gradle tasks`. Optional |
| `repository.maven.[repoId].allowInsecureProtocol` | True if we need to connect to HTTP server rather than HTTPS server. Default is false |

## Custom Artifactory repository <a href="#artifactory"/>

Publish to custom Maven Sonatype Server. Replace `[repoId]` with the name of the repository defined in the `jarbird` configuration block in the build script.

| Properties | Meaning |
|:-|:-|
| `repository.artifactory.[repoId].release` | Publishing URL for released
component |
| `repository.artifactory.[repoId].snapshot` | Publishing URL for snapshot component |
| `repository.artifactory.[repoId].repoKey` | Repository key for particular
repository in Artifactory server |
| `repository.artifactory.[repoId].username` | Username to the Artifactory
server |
| `repository.artifactory.[repoId].password` | Password to the Maven Central Sonatype server |
| `repository.artifactory.[repoId].description` | Description of the repository to be shown in `gradle tasks`. Optional |


## Artifact signing <a href="#artifactsigning"/>

There are two types of GPG key store. The old style is "Keyring".

| Properties | Meaning |
|:-|:-|
| `signing.keyId` | 8-character Key ID |
| `signing.password` | Password to unlock the key ring]
| `signing.secretKeyRingFile` | Full path to the `secring.gpg` file |

The new style is "keybox" file.

| Properties | Meaning |
|:-|:-|
| `signing.gnupg.keyName` | 8-character key name |
| `signing.gnupg.passphrase` | Passphrase to unlock the keystore |

Jarbird plugin determines automatically which type of key to use. We can also use the `signWithKeybox()` of the `pub` block to enforce the use of the new keybox format.

## Gradle Plugin Portal <a href="#gradleportal"/>

| Properties | Meaning |
|:-|:-|
| `gradle.publish.key` | Publish key of the Gradle Plugin Portal account |
| `gradle.publish.secret` | Publish secret of the Gradle Plugin Portal account |
