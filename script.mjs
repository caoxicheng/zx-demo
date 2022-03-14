#!/usr/bin/env zx

import {echo} from 'zx/experimental'

let branch = await $`git branch --show-current`

echo`Current branch is ${branch}.`
