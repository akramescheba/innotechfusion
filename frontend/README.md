# Innotechfusion

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.14.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests: Configuration de jest

# 1. Desistaller jasmin et karma: 
npm uninstall @type/jasmine-core karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-reporter

# 2 supprimer "test":[] dans le fichier angular.json 

# Configurer 

# 3. Supprimer node_modules
rm -rf node_modules

# 4. Installer 
npm cache clean --force, npm install, npm install -g @angular/cli, npm install @angular/compiler --save, npm install @angular/platform-browser-dynamic --save

# 5. Installer jest
npm install jest @types/jest jest-preset-angular




