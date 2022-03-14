#!/usr/bin/env node
import { $ } from 'zx';

const keypress = async () => {
    process.stdin.setRawMode(true);
    return new Promise((resolve) =>
        process.stdin.once('data', () => {
            process.stdin.setRawMode(false);
            resolve();
        })
    );
};
console.log('当前时间为:');
await $`date`;

// await $`npm install nrm -g`;
// await $`nrm add [you aliases] [you mirror address] `
// await $`nrm use [you aliases]`;

console.log('program ended, press any key to continue');
await keypress();
process.exit(0);
