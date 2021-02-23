# Webpack 5 Config

![Webpack plugin icon](/markdown-documents/webpack-icon.png)

This is my webpack 5 **version 1.0.0** config file which is use for my development

**My webpack.config.js** is in the file above feel free to took a look as well as my **package.json**

You call pull from this repo and can clean out the folders and the **html**, **scss** and **js** extentions

## Install

**Requires:**

1. **node.js verison 10 and up** (<https://nodejs.org/en/download/> click on this link to download)
2. **npm** which is including with node.js
3. **git bash** (<https://git-scm.com/downloads> /> click on this link to download)
4. **code eiditor**

## Notice

Make sure the require file directory are install in the PATH folder (<https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/> Here a link for a tutuorial to find PATH)

using the following commands:

1. npm init -y
2. npm install --> to install dev dependencies
3. npm run prod --> for production build
4. npm run dev --> for development build
5. npm run build-dev --> for development build + watching of files
6. npm start --> to start server with hot reload

## Config Disclaimer

There're **three** webpack config js files:

1. webpack.prod.js
2. webpack.dev.js
3. webpack.common.js

The third file is empty because I've decide to run two seperate config files, one for production and another for development.

If you want your setup to have the same config for both 'prod' and 'dev' but still have separte config for 'dev' you can simply use the webpack.common.js file and place the reuseable config there and merge it in the 'prod' and 'dev' configs.

Please check the **Webpack 5** documentation below to see instructions.

(<https://webpack.js.org/guides/production/>
