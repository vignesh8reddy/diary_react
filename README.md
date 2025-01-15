index.html
```html
<html>
    <head>
        <title>Hello!</title>
    </head>
    <body>
        <div id="root">
            <h1> Hello React! </h1>
        </div>
    </body>
</html>
```
Achieving same code in javascript:
```html
<body>
    <div id="root">

    </div>

    <script>
        const heading = document.createElement("h1");
        heading.innerHTML="Hello React!";
        const root =  document.getElementById("root");
        root.appendChild(heading);
    </script>
</body>
```
Achieving same code in React:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello!</title>
</head>
<body>
    <div id="root">

    </div>

    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script>
        const heading = React.createElement("h1",{},"Hello React!");
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);
    </script>
</body>
</html>
```

* What is CDN?
<pre>
Content Delivery Network(CDN) is a network of servers that delivers content to users. Both React and ReactDOM are available over CDN.
</pre>

* What is crossorigin attribute of script tag?
<pre>
CORS - Cross Origin Resource Sharing is an HTTP header based mechanism that allows a server to indicate any cross origins (domain, scheme or port) other than it's own from which a browser should permit loading resources.

Cross origin attribute provide support for CORS. If we server React from a CDN, keep crossorigin attribute set. Doing so indicates that the script should be loaded from a different origin.
</pre>

* What is the {} denotes of createElement() in abode code?
<pre>
It is where you specify attributes of the element such as, id="heading". These attributes are called props i.e properties
</pre>

> render(content) method will overwrite whatever present inside the container element with content.

* Achieve the following HTML code in React
```HTML
<div id="root">
    <div id="container">
        <h1>heading1</h1>
        <h1>heading2</h2>
    </div>
</div>
```
* JSX - JavaScript XML (makes life easy)
* Emmet is tool that allows developers to write and expand shortand syntax fpr HTML, XML, and other languages. It is designed to speed up the process of writing and editing code.
* React and ReactDOM are two separate libraries that are often used together in the development of web applications with react.
    * React is a JavaScript lib for building user interfaces.
    * ReactDOM is a library that provides an interface between React and DOM of the browser.
* react.development.js file is intended for use during development and includes additional features and debugging tools that can be helpful when building and testing React Applications. react.production.js file is intended for use in production environments and has been optimized for performance and size. It does not include tools for debugging and testing.
* To make an app production ready, we should,
    1. minify our file (i.e remove out console logs and bundle things up and get optimized version)
    2. need a server to run things.
* In React, to get external functionalities, we use bundlers:
    1. Webpack
    2. Vite
    3. Parcel
    * npx creat-react-app command uses webpack bundler along with babel library behind the scenes.
* Bundlers are packages and we use package managers like npm or yarn to work with them.
> npm init (or) npm init -y [creates a package.json file]
* Installing Parcel using npm
> npm install -D parcel <br/>//-D speficies it is a developer dependency and a production one.
* What does caret(^) and tilde(~) signs signify in package.json file.
    * Packages will automatically gets updated if we use caret sign.
* package-lock.json file will tell you which exact version of the library you are using. [keeps on updating with package versions]
* All dependencies are stored in node_modules directory.
* installing React and ReactDOM packages using npm
> npm i react@18 --save <br/>
> npm i react-dom@18 --save <br/>
without CDN links, you have to import those libraries from node_modules package using import statement.<br/>
add type="module" attribute to the script tag so that js engine would recognize import keyword
* To start and hosting index.html page in the mini server given by the Parcel package use the following command
> npx parcel index.html
* Hot Module Reload (HMR) is a feature of Parcel keeping track of all the changes in the files which your're updating.
    * This is done by File Watcher Algorithm (written in C++). It keeps track of all the files which are changing realtime and tells server to reload.
    * In .parcel-cache folder changes are updated and retreived automatically
    * dist folder keeps the files minified for faster development version of our project and serves it on the server.
* Parcel does image optimization also
* Sometimes we need to test our app on https because something only works on https. Parcel gives us a functionality so that we can just build our app on https on dev machine.
> npx parcel index.html --https
* Babel library makes automatic conversions for incompatible javascript code with older browsers with old js engine versions
* scripts in package.json
```json
"scripts":{
    "start": "parcel index.html",
    "test": "jest"
}
//Now just use npm run start command to run the project
//npm start also does the trick

//Build command
"scripts":{
    "build": "parcel build index.html"
}
//npx = npm run
//so, npm run build or npx buld would work now
```
* Always use key attribute for every child of an element in react or else it would be very inefficient in rendering the elements for DOM.
* React.createElement() is creating an object of html code which is then converted into normal HTML and put on DOM.
    * If you want to build a big HTML structure, then using "createElement()" is not a good solution.
    * So, we use JSX to write a lot of HTML using javascript
    * JSX is not HTML in javascript however JSX has HTML-like syntax
    * Browser cannot understand JSX, Babel understands and converts it into HTML
    * JSX also converted to HTML using createElement() by Babel
    * className in JSX and others different from HTML attributes
* React Components
    * Everything is a Component in React.
    * Two types of React Components:
        1. Functional Component (JS functions returning react elements i.e JSX code)
        2. Class Based Component (Old Fashioned)
```js
const HelloComponent = () => {
    return (<h1 id="hello">
                Hello React!
            </h1>);
}

//A component should start with an Upper case letter.
//It is a good practice to start or end with Component word

const HeaderComponent = () = {
    return (
        <div>
            <h1 id="header">
                Header Component
            </h1>
            <HelloComponent/>//Component Composition
        </div>
    );
}

//You can use {} to embed javascript code into JSX
const name="Vignesh";
const HeroComponent = () = {
    return (
        <h1 id="hero">
            Hi, I'm {name}!
        </h1>
    );
}
//anything inside {} is not simply executed js engine sanitizes it if it is from outside.
```





#################################
* document object
* getElementById()
* innerHTML property
* createElement()
* appendChild()
* addEventListener()
* React Object and methods in it
* ReactDOM object and methods in it


browser has a HTML parser, which parses HTML tags one by one
when the parser enounters the script tag, it stops parsing the script tag and fetches the script from the source i.e src and starts executing the javascript code line by line.
After the script from the source is fully executed then only it resumes parsing the rest of the HTML tags.
So basically this pausing of parsing tags is not good. Because javascript execution is blocking the rendering of the HTML elements

<script aync src=""></script>
    this way of writing script tag makes the parser to fetch the script code parallely (i.e aynchronously) while parsing happening, when it reaches the script tag, by the time script code would have been fetched by the browser, then parsing gets paused and script is executed, then parsing resumes
<script defer src=""></script> 
using defer keyword in the above way, makes the browser to fetch the script from the src while parsing is happening, and executes the script only when entire parsing has been done.



destructuring a javascript object
display attribute properties
list-style-type properties
cursor properties
justify-content properties

