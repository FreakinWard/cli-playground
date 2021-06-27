cli-playground
===

# Getting Started
1. clone
1. run `npm install`
1. run `npm run setup`


# Scripts
```shell
> coffee-shop 

Usage: coffee-shop [options] [command]

Options:
  -h, --help      display help for command

Commands:
  list|ls         List coffee menu
  order|o         Order a coffee
  help [command]  display help for command

```

```shell
> coffee-shop ls

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
