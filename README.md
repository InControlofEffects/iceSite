# In Control of Effects Main Site

This repository contains all of the source code for [www.incontrolofeffects.com](https://www.incontrolofeffects.com).

## Development

The static site is built using [react](https://reactjs.org) and bundled using [Webpack](https://webpack.js.org). To get started locally, make sure that you have [node](https://nodejs.org/) and [yarn](https://yarnpkg.com) installed on your machine. Then, clone this repository and work from the `dev` branch.

```bash
git clone https://github.com/InControlofEffects/iceSite
git checkout dev
```

Install the dependencies.

```bash
yarn install
```

Start the development server. The site will be active at [http://localhost:8000](http://localhost:8000).

```bash
yarn start
```

Make the required changes or implement new features. When you are ready, build the website and start the *production* server. The site will be available at [http://localhost:9000](http://localhost:9000).

```bash
yarn build
yarn start
```

Increment the version number accordingly and push to the `dev` branch.

```bash
yarn version  # update using the appropriate schema

git add .
git commit -m "my cool commit message"
git push origin dev
```
