# Instructions

## Exercise

### Phase 1 -- Picker

Build a simple web based color picker. The picker should:

1. Take input for RGB values
2. Display the current color

### Phase 2 -- Palettes

Build a form to create a palette of 5 colors.

### Phase 3 -- Persistence

Persist palettes to the database.

1. Add ability to save multiple palettes.
2. Don't worry about palette owners. They're global.
3. Display all the persisted palettes in the UI.
4. Enable deleting of palettes.
5. Enable editing of palettes.

## Details

Feel free to look up syntax while working. Just don't copy any code verbatim. Come up with your own UI.

This codebase contains an Express server and a React app. The scaffold is in place to allow you to focus on the exercise instead of the setup. However, if you're more comfortable with your own tools, feel free to replace any or all of it.

Please take 2 hours to complete the exercise. If you choose to setup the app yourself instead of using the scaffold, take an extra 30min to get everything in place.

There's a lot to do. Don't sweat the details. Just focus on getting through as much as you can. Finishing everything isn't a requirement for success in the exercise. If you do finish early, take your pick of refactoring, styling, or adding features.

## Setup

### In /client, you'll find:

- A [Next.js](https://nextjs.org/) React App
- An example component that makes an AJAX call to the server

### In /server, you'll find:

- An [Express server](https://expressjs.com/) with a sample endpoint hit by the client
- A [Knex](https://knexjs.org/) instance connecting to a SQLite DB

### To start server

- cd server
- npm install
- npm run run-migrations
- npm run start

### To add a database migration

- npm run create-migration -- {{migration_name}}
- npm run run-migrations
- note: you can drop the database and start over by deleting /server/database.sqlite

### To start client

- cd client
- npm install
- npm run start
- open [http://localhost:3000](http://localhost:3000)
