# Mathem Assignment

Tech stack which consists of:

- [Angular](https://angular.io)
- [Nx](https://nx.dev)
- [NgRx](https://ngrx.io)

## Quickstart

- Clone the repo
- Run `npm install`
- Run `npm run start`
- Go to `localhost:4200`


## Structre

### Mathem App

Application under `apps/mathem` is a thin application.

### Libs

**Shell**

Shell is the app-specific feature library `shell` for main application. It contains all imports and routes information of the app.

**Feature Shell**

`feature-shell` is shell library for delivery feature of the app.

**Feature Delivery**

Container component library `feature-delivery` for selecting delivery date using presentational component libraries.

**Data access**

`data-access` is data layer of application using NgRx store for state management.

**UI**

UI has presentational components `feature-date` and `feature-time`

**Shared**

_Root_ contains styles, assets and envirmental configuratio of the application

_Types_ Application level interfaces

_UI_ Application level UI component libraries
