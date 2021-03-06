# Car webdesign mockup
<small>UI/ UX design for a car company that sells electric cars.</small>
Live version [here](https://car-mockup.wouterdb.nl/).
[![Netlify Status](https://api.netlify.com/api/v1/badges/e91bc45d-6c0e-4f13-81ca-6762d5264d04/deploy-status)](https://app.netlify.com/sites/car-website-mockup/deploys)

### Designer

Designed and built by [Wouter de Bruijn](https://wouterdb.nl).

The mockup was built in react using create-react app, and styled with scss.
It was not pre-designed, meaning I just designed and styled it as I went building it with react.
I used scss because I had a lot of nested styles which I like to organize using Sass with scss.

I used font awesome icons in the mockup because they had everything I needed and integrated seamlessly in the already existing project.
I accessed the icons via the [@fortawesome/react-fontawesome](https://www.npmjs.com/package/@fortawesome/react-fontawesome) package on npm.

For the deployment of the website I used Netlify for a fast and static cdn so my mockup is accessable everywhere. 

### Info

You can see a live version [here](https://car-mockup.wouterdb.nl/).
All the placeholder images and statistics come from from the official Tesla presskit.

#### Running

To build and host the mockup locally simply run (based on preference):

```sh
npm install
npm start
```

or 

```sh
yarn install
yarn start
```

in a shell. 

#### Building
to then build the app for production run (once again based on preference):

```sh
npm run build
```

or 

```sh
yarn build
```

in a shell.


### Legal

```
Please note I am not affiliated with Tesla in any way, shape or form.
This is purely a personal UI/ UX project built by Wouter the Bruijn.
All assets were retrieved from the Tesla presskit
```