# MyStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

 ## Functionality overview:

the example website is a E-commerce website called My-Store use a API requests, localstorage to save the data.

## General functionality:

Get method from data.json file to get all products

Observable behavioral design pattern 

Add to card using localstorag 

Remove from card 

Reactive form and input validation

@input and @output decerator

## The general page breakdown looks like this:

- Home page (URL: /# )
   List of products

- Product details page (URL:/product/id)
   selected product details (title,price,description)

- Card page(URL:/card)
   All products that added to card can add quantity or remove the product
   Form input take user information 

- confirmation page (URL:/confirmation)
   Success order if the validation is true
   Show basic user info
