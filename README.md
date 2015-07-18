
# ProjectBase
#The base project for all web based projects I need to make
##First "Clone" the repository to the other repository you are actually building
1. Create a repository through gitbhub web interface for your new project
2. git clone https://github.com/userName/ProjectBase New_Repo
3. cd New_Repo
4. git remote add origin  https://github.com/userName/New_Repo
4. OR git remote set-url origin https://github.com/userName/New_Repo
5. git push origin master
6. git push --all

##Run the command line commands to set everything up


1. npm install
2. jspm install

##Build your project

1. do command gulp run-dev
2. do command gulp run-prod




### Installation

```sh
$ git clone [git-repo-url] dillinger
$ cd dillinger
$ npm i -d
$ mkdir -p public/files/{md,html,pdf}
$ gulp build --prod
$ NODE_ENV=production node app
```

### Plugins

Dillinger is currently extended with the following plugins

* Dropbox
* Github
* Google Drive
* OneDrive

Readmes, how to use them in your own application can be found here:

* plugins/dropbox/README.md
* plugins/github/README.md
* plugins/googledrive/README.md
* plugins/onedrive/README.md

### Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantanously see your updates!

Open your favorite Terminal and run these commands.

First Tab:
```sh
$ node app
```

Second Tab:
```sh
$ gulp watch
```

(optional) Third:
```sh
$ karma start
```

### Todo's

Write Tests
Github saving overhaul
Code Commenting
Night Mode

License
----


