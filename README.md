# Miniframe

Simple and small framework for small/medium projects.

Features:
 * Router
 * Pretty URL and multiple URL params
 * Components


## Installation / Commands

```
npm install // Install NPM dependencies

npm run dev // Starts development server

npm run build // Runs production build
```

## Router

Easy routing

```javascript
const Pages = new Component({
  home: {
    path: 'home.html',
    componentName: 'home-app'
  },
  about: {
    path: 'about.html',
    componentName: 'about-app'
  },
  contact: {
    path: 'contact.html',
    componentName: 'contact-app'
  }
  /* 
  page name: {
    file path: 'file.extention' // Files are inside Pages folder
    component name: 'example-app' // name must have dash (-) to avoid html tags conflict 
  }
  */
});

export const router = new Router(Pages);
```

Html files must be placed at PAGES folder.

Folder which html files are placed can be changed at _RoutePathReplacer.js_.


## Single Page App support

Comes enabled by default

```javascript
// To disable it
new Router(Pages, false);
```

## Additional Information and Deployment

To deploy a project you need to write your host name in _config.json_. You should also change your project inside of the same file.

```json
{
    "host": "http://localhost:8080/",
    "projName": "Template"
}
```

If you're not using Single Page App, you must include a _.htaccess_ file to always redirect to index.html in the root of your project after deploy. 
