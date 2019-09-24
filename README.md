# In Control of Effects React Site

This repository contains all of the react components, content, and builds for the [In Control of Effects](https://www.incontrolofeffects.com) site. This repo will serve as a few purposes like project management, error tracking, and version control. But the primary purpose is for the ease of making updates on the server-side. This readme will provide the necessary information to get started. 

## Branches

There are three branches for this repository.

1. Master
2. Dev
3. Build

Each branch has a purpose which can be found in the following table.

| Branch Name | Purpose |
| :---        | :----   |
| Master      | only used for the production ready site (from branch `build`); a pull request should be made to pull changes from `build` into `master`
| Dev         | used for all development work only (i.e., `npm run start`)
| Build       | this contains the pre-production version of the site. It is only to be used for post `npm run build`


## Development

Clone this repository to your local machine.

```
git clone https://www.github.com/davidruvolo51/ice-site
```

This project uses [Parcel](https://parceljs.org) as an application wrapper. This will need to be installed first and can be done so with the following command.

```bsh
npm install -g parcel-bundler
```

Double check the docs to make sure the installation instructions haven't changed.

All development must take place on the `dev` branch. Local testing should be completed on the dev branch as well. Afterwards, build the site using -

```bsh
npm run build
```

Pull changes into the build branch. Review the site locally once more, and then commit and push to the `build` branch.

```bsh
git add .
git commit -m "my cool message"
git push origin build
```

Headover to the repository on github.com and open a new pull request (i.e.,from `build` into `master`). Make sure changes are reviewed and more testing is completed before the pull request is accepted. 

Once the master is updated, head over to the server and pull changes. Restart the server and view changes in the browser.
