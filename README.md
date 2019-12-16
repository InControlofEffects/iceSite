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

```bash
npm install -g parcel-bundler
```

Double check the docs to make sure the installation instructions haven't changed.

## Development


**Dev Branch**

All development must take place on the `dev` branch. Local testing should be completed on the dev branch as well. The development server can be started by running the `start` script.

```bash
npm run start
```

After all modifications are complete and tested, build the site using the following command.

```bash
npm run build
```

** Build Branch **

Pull changes from the public folder located on the dev branch into the public folder on the build branch. 

```bash
git checkout build
git checkout dev -- public
```

Review test the site locally, and then commit and push to the `build` branch.

```bash
git add .
git commit -m "my cool message"
git push origin build
```

Headover to the repository on github.com and open a new pull request (i.e.,from `build` into `master`). Make sure changes are reviewed and more testing is completed before the pull request is accepted. 

Once the master is updated, head over to the server and pull changes. Restart the server and view changes in the browser.

```bash
# on the server, navigate to the location of the site
cd /var/www/ice-site
git pull origin master

# restart
sudo service nginx restart
```

## Server Maintenance

### `nginx`

#### Edit

```bash
sudo nano /etc/nginx/sites-enabled/default
```

#### Restart

```bash
sudo service nginx restart
```

### `shiny-server`

#### Edit

```bash
sudo nano /etc/shiny-server/shiny-server.conf
```

#### Restart

```bash
sudo systemctl restart shiny-server
```

#### View Logs

```bash
sudo cat /var/log/shiny-server.log
```


### R language

base r

```bash
# install xenial
sudo sh -c 'echo "deb http://cran.rstudio.com/bin/linux/ubuntu xenial/" >> /etc/apt/sources.list'

# public keys
gpg --keyserver keyserver.ubuntu.com --recv-key E084DAB9
gpg -a --export E084DAB9 | sudo apt-key add -

# install r
sudo apt-get update
sudo apt-get -y install r-base

```

- rstudio: [https://www.rstudio.com/products/rstudio/download-server/](https://www.rstudio.com/products/rstudio/download-server/)
- shiny server: [https://www.rstudio.com/products/shiny/download-server/](https://www.rstudio.com/products/shiny/download-server/)

### R packages

```bash
# installing packages
sudo su - -c "R -e \"install.packages('mongolite', repos='http://cran.rstudio.com/')\""
sudo su - -c "R -e \"install.packages(c('ggplot2', 'mongolite', 'shinyjs', 'stringi'), repos='http://cran.rstudio.com/')\""
sudo su - -c "R -e \"install.packages('rmarkdown', repos='http://cran.rstudio.com/')\""
```

### Updating server

```sh
sudo apt list --upgradeable
sudo apt-get update
sudo apt-get dist-upgrade
```
When you run `sudo apt-get *`, R cran packages that are shipped with Ubuntu will be updated. Aftwards, follow the steps listed here:

[https://cran.r-project.org/bin/linux/ubuntu/README.html](https://cran.r-project.org/bin/linux/ubuntu/README.html)

Make sure you are located in the `$HOME` directory of the `root` user. Enter `R`

```bash
R
```

And update packages by running the following code.

```R
update.packages("/usr/local/lib/site-library")
```
