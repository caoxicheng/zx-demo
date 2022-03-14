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
console.log('current data:');
await $`date`;

console.log('program ended, press any key to continue');
await keypress();
process.exit(0);
