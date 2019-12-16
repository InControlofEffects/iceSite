# In Control of Effects React Site

This repository contains all of the react components, content, and builds for the [In Control of Effects](https://www.incontrolofeffects.com) site. This repo will serve as a few purposes like project management, error tracking, and version control. But the primary purpose is for the ease of making updates on the server-side. This readme will provide the necessary information to get started. 

## Branches

There are three branches for this repository.

1. master
2. dev
3. build

Each branch has a purpose which can be found in the following table.

| Branch Name | Purpose |
| :---        | :----   |
| master      | only used for the production ready site (from branch `build`); a pull request should be made to pull changes from `build` into `master`
| dev         | used for all development work only (i.e., `npm run start`)
| build       | this contains the pre-production version of the site. It is only to be used for post `npm run build`


## Getting

Clone this repository to your local machine.

```
git clone https://www.github.com/davidruvolo51/ice-site
```

This project uses [Parcel](https://parceljs.org) as an application wrapper. This will need to be installed first and can be done so with the following command.

```bsh
npm install -g parcel-bundler
```

Double check the docs to make sure the installation instructions haven't changed.

## Development


**Dev Branch**

All development must take place on the `dev` branch. Local testing should be completed on the dev branch as well. The development server can be started by running the `start` script.

```bsh
npm run start
```

After all modifications are complete and tested, build the site using the following command.

```bsh
npm run build
```

** Build Branch **

Pull changes from the public folder located on the dev branch into the public folder on the build branch. 

```bsh
git checkout build
git checkout dev -- public
```

Review test the site locally, and then commit and push to the `build` branch.

```bsh
git add .
git commit -m "my cool message"
git push origin build
```

Headover to the repository on github.com and open a new pull request (i.e.,from `build` into `master`). Make sure changes are reviewed and more testing is completed before the pull request is accepted. 

Once the master is updated, head over to the server and pull changes. Restart the server and view changes in the browser.

```bsh
# on the server, navigate to the location of the site
cd /var/www/ice-site
git pull origin master

# restart
sudo service nginx restart
```


