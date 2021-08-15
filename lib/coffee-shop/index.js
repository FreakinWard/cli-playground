#!/usr/bin/env node

const program = require('commander');

// import function to list coffeee menu
const menu = require('./menu');

// import function to order a coffee
const order = require('./order');

/*******************************************/

// Print coffee drinks menu
// $ coffee-shop menu
// $ coffee-shop ls
program
.command('menu') // sub-command name
    .alias('m') // alternative sub-command is `m`
    .description('Show coffee menu') // command description

    // function to execute when command is uses
    .action(function () {
        menu();
    });


// Order a coffee
// $ coffee-shop order
// $ coffee-shop o
program
.command('order') // sub-command name
    .alias('o') // alternative sub-command is `o`
    .description('Order a coffee') // command description

    // function to execute when command is uses
    .action(function () {
            order();
    });


// allow commander to parse `process.argv`
program.parse(process.argv);
