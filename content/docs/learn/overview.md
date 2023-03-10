---
sidebar_position: 1
---

import { SimpleCard, SimpleCardProps } from '@site/src/components/SimpleCard';
import styles from '@site/src/pages/index.module.css';

# Overview

Arrow's goal is to bring _idiomatic_ _functional programming_ to Kotlin.
This means that Arrow is inspired by the great work made in other functional
programming communities, yet exposes these ideas and concepts in a way that
do not feel alien to Kotlin programmers.

Arrow is composed of different libraries, each of them improving or extending
one commonly-used library in the Kotlin ecosystem, or a particular Kotlin
language feature.

:::info In a rush?

Our [summary](../summary) is designed to help you find your way in the Arrow
ecosystem.

:::

Each section in the documentation roughly corresponds to one
of the libraries which compose Arrow.

- In our [Quickstart](../quickstart) you can read how to
introduce Arrow in your project.
- No library lives in a vacuum, and Arrow enjoys
[integrations](../integrations/) with many other popular Kotlin libraries.
- We also provide some guidance on [broader design and architecture](../../category/design)
using functional programming concepts.

| Library | Features |
|---------|-|
| `arrow-core` <br /> _Companion to [Kotlin's standard library](https://kotlinlang.org/api/latest/jvm/stdlib/)_ | [Typed errors](../typed-errors/), including `Raise`, `Either`, and `Option` <br /> Non-empty [list](https://arrow-kt.github.io/arrow/arrow-core/arrow.core/-non-empty-list/index.html) and [set](https://arrow-kt.github.io/arrow/arrow-core/arrow.core/-non-empty-set/index.html) |
| `arrow-fx-coroutines` <br /> _Companion to [KotlinX Coroutines](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/)_ | [High-level concurrency](../coroutines/parallel), including `parMap` and `parZip` <br /> [Resource management](../coroutines/resource-safety/) |
| `arrow-fx-resilience` | [Resilience patterns](../resilience/) |
| `arrow-fx-stm` | [Software Transactional Memory](../coroutines/stm/) (STM) |
| `arrow-optics` + `arrow-optics-ksp-plugin` <br /> _Companion to [data](https://kotlinlang.org/docs/data-classes.html) and [sealed](https://kotlinlang.org/docs/sealed-classes.html) classes_ | Utilities for [immutable data](../immutable-data/intro/) |
| `arrow-atomic` <br /> _Multiplatform-ready [references](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.native.concurrent/-atomic-reference/)_ | [Atomic references](../coroutines/concurrency-primitives/#atomic) |

:::note We'd love to hear from you!

We're always looking for ways to improve the libraries and the documentation.
Feel free to [open an issue](https://github.com/arrow-kt/arrow/issues) in our 
repository with any suggestion or feedback you may have. Thanks in advance! 🤩

:::