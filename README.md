cli-playground
===

# Getting Started
1. clone
1. run `npm install`
1. run `node . -h`


# Scripts
```shell
> coffee-shop 

Usage: coffee-shop [options] [command]

Options:
  -h, --help      display help for command

Commands:
  menu|m          Show coffee menu
  order|o         Order a coffee
  help [command]  display help for command

```

```shell
> coffee-shop m

COFFEE MENU
------------------
Espresso / $5.99
Latte / $4.50
Cappuchino / $3.99
Americano / $2.50
Macchiato / $3.50

```

```shell
> coffee-shop order

? Choose coffee type (Use arrow keys)
> Espresso ($5.99) 
  Latte ($4.50) 
  Cappuchino ($3.99) 
  Americano ($2.50) 
  Macchiato ($3.50) 

```

# References
[Making CLI app with ease using commander.js and Inquirer.js](https://medium.com/jspoint/making-cli-app-with-ease-using-commander-js-and-inquirer-js-f3bbd52977ac)
