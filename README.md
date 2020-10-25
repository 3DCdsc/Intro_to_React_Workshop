# Intro to web-development with React Workshop
The workshop is a one off workshop that aims to introduce Web Development and the ReactJS framework which will include segments of javascript and CSS flexbox refreshers/lesson.

# Pre-requisite
Basic knowledge on (Be it on python or what not) :
- Dictionary / Objects
- List / Arrays
- Functions
- Loops

# Set-up
- ## NodeJS 
  - https://nodejs.org/en/  (Windows and MacOS alike)
  - For homebrew users (macOS)
    - Brew install node
  - To check if it is installed properly
    - Open your terminal (macOS) or command prompt (windows)
    - Run: npm --version or node --version
    - npm version 6.14.8 or node version 14.12.0 respectively. (Any later version will work fine as well)
- ## Create-React-App
  - I will go through the set up process at the start too but please try downloading it on your own first.
  - Steps are as follows:
    1. Open your terminal (macOS) or command prompt (windows)
    2. cd to your desktop or any folder you prefer by using " cd ./desktop "
       - Run the following command:
        - npx create-react-app 3dc-react-workshop    (This will take awhile)
          - This will create a templated react app under the name of "3dc-react-workshop" in your desktop folder.
- ## Code Editor
  - Any code editor will work fine.
    - Demo will be using visual studio code
    - https://code.visualstudio.com/download

# Lecture Notes
## Table of contents
1. [How the web works](#how-web-works)
    1. [Overview of how data is transfered](#how-web-works/data-transfer)
    2. [Resolving Domain Names](#how-web-works/resolving-domain-names)
    3. [API Endpoint](#how-web-works/api)
2. [Javascript vs Python refresher](#python-vs-javascript)
    1. [Variables](#python-vs-javascript/variables)
    2. [Lists / Arrays](#python-vs-javascript/list-array)
    3. [Object / Dictionary](#python-vs-javascript/object-dic)
    4. [Functions](#python-vs-javascript/functions)
    5. [Loops](#python-vs-javascript/loops)
3. [HTML & CSS](#HTML-CSS)
4. [React](#react)
    1. [Components](#react/compoents)
    2. [State](#react/state)
5. [CSS Flexbox](#flexbox)
6. [Breakdown of Demo](#demo)
    1. [Cleaning up create-react-app](#demo/cleanup)
    2. [Breaking down structure of html](#demo/structure)
    3. [Setting up State](#demo/state)
    4. [Event Handlers](#demo/event-handler)
    5. [Seperating Components](#demo/seperate-component)
6. [Exploration](#explore)

<a name="how-web-works"></a>
## How the Web Works

<a name="how-web-works/data-transfer"></a>
### Overview of how data is transfered
<img src="./readmeAssets/howWebWork1.png" width="400"/>
The web works by sending out Hypertext Transfer Protocol (HTTP) Requests and getting Responses in return.
<br/><br/>
You can view this as your web browser sending out an envelope as a HTTP request to a server asking for data in return. The server then sends out another envelope with the requested data as a HTTP response.

<a name="how-web-works/resolving-domain-names"></a>
### Resolving Domain Names
<img src="./readmeAssets/resolveDNS.png" width="400"/>
Whenever you type in a website link, it is also called a Domain Name.
A domain name has no information on which server it should get the webpage from.
Therefore, we have a Domain Name System server that caches (temporary stores) which domain name links to which Internet Protocol (IP) Address. An IP Address acts like your house address but for servers.  
<br/><br/>
So in summary, when you type in a domain name, your browser sends out a HTTP Request to a DNS Server to get the IP Address of the server that contains the webpage. With the correct IP Address, your browser then sends another HTTP Request to that server for the webpage.

<a name="how-web-works/api"></a>
### Application Programming Interface (API) Endpoint
<img src="./readmeAssets/api.png" width="400"/>
After recieving the files needed to load the webpage, the web application frequently also communicates with a database to load dynamic data. In order to do this, the webpage send out HTTP Requests to an Application Programming Interface (API) Endpoint. An API Endpoint acts like a vending machine where you exchange a HTTP Request for data as a HTTP Response.
<br/><br/>
The server whose API endpoint is on, will recieve a HTTP Request and depending on the requests, the server can access a database to find data then return a HTTP response with the requested data back to the server.
<br/><br/>
For example, we load the SUTD webpage and it wants to show an updated number of students currently enrolled. After loading the webpage, in order to keep the number up to date, the web application can send out a HTTP Request to SUTD's server. Once SUTD's server get a HTTP Request, it then communicates with a database to get the lastest number of enrolled students. The server then wraps the data in a HTTP Response and sends it back to the web browser.





<a name="python-vs-javascript"></a>
## Javascript vs Python refresher

<a name="python-vs-javascript/variables"></a>
### Defining Variables
Defining a variable is similiar to how variable works in mathematics.
<br/>
For illustration purposes, we will be assigning the string value "SUTD" to a variable named "school"
```python
# PYTHON
school = "SUTD" #creates a variable named school and assign a string "SUTD" to it
```
```js
// JAVASCRIPT
const school = "SUTD" //creates a constant variable named school
let school = "SUTD" //creates a variable named school and assign a string "SUTD" to it
```
Notice that javascript has 2 ways to define a variable. 
<br/>
`const` creates a constant variable which means the value you assign to it will not change.
<br/>
`let` creates a variable in which its value will be changing down the line.

<a name="python-vs-javascript/list-array"></a>
### Lists / Arrays
Defining a list or array in python vs javascript
<br/>
For illustration purposes, we will be creating an array named thisIsAnArray and assign an empty array to it.
```python
# PYTHON
thisIsAnArray = [] #creates a variable named thisIsAnArray and assigns an empty array to it
```
```js
// JAVASCRIPT
const thisIsAnArray = [] //creates a constant variable named thisIsAnArray and assigns an empty array to it
let thisIsAnArray = [] //creates a variable named thisIsAnArray and assigns an empty array to it
```

<a name="python-vs-javascript/object-dic"></a>
### Object / Dictionary
Defining a list or array in python vs javascript
<br/>
For illustration purposes, we will be creating an object named thisIsAnObject and assign a key value pair.
```python
# PYTHON
thisIsAnArray = {
  key: "value"
} #creates a variable named thisIsAnArray and assigns an object to it.
```
```js
// JAVASCRIPT
const thisIsAnArray = {
  key: "value"
} //creates a constant variable named thisIsAnArray and assigns an object to it.
let thisIsAnArray = {
  key: "value"
} //creates a variable named thisIsAnArray and assigns an object to it.
```

<a name="python-vs-javascript/functions"></a>
### Functions
Defining a function in python vs javascript
<br/>
For illustration purposes, we will be creating an function named thisIsAFunction and make the function take in 1 paramater named paramOne return hello world.
```python
# PYTHON
def thisIsAFunction ( paramOne ):
  return( "hello world" )
```
```js
// JAVASCRIPT : There are 2 types of functions. Function expressions and function declarations.

/*
----Function Expression----
Function is loaded when the line is reached
*/

// The below function is called a Arrow Function (I guess because of the => )
const thisIsAFunction = ( paramOne ) => {
  return( "hello world" )
}
const thisIsAFunction = ( paramOne ) => "hello world"
// Notice how this version of the Arrow Function, doesn't have the curly braces {}
// Without the curly braces, the function automatically return whatever after that. In this case, the function automatically returns "hello world"
const thisIsAFunction = function( paramOne ){
  return("hello world)
}


/* 
----Function Declaration----
Function Declaration are hoisted to the top of the code.
Meaning the funtion is loaded before anything else
*/

function thisIsAFunction( paramOne ){
  return( "hello world" )
}
```
```js
// To demostrate the differences
// Take note that console.log acts just like python print function.
console.log( helloWorldFunction() )  // This will have an error
const helloWorldFunction = () => "hello world"

console.log( helloWorldFunction() )  // This will work
function helloWorldFunction( ){
  return( "hello world" )
}
```

<a name="python-vs-javascript/loops"></a>
### Loops
Creating a loop to reiterate over an array in python vs javascript
<br/>
For illustration purposes, we will reiterate over an array named oneToTen which contains digits 1 to 10.
```python
oneToTen = [ 1,2,3,4,5,6,7,8,9,10 ]

for eachElement in oneToTen:
  print(eachElement)
# prints 1 2 3 4 ...
```
```js
const oneToTen = [ 1,2,3,4,5,6,7,8,9,10 ]

oneToTen.forEach( eachElement => console.log(eachElement) )
// prints 1 2 3 4 ...

// Another method to reiterate over an array is
oneToTen.map( (eachElement, eachIndex)=> console.log(eachElement, eachIndex) )
// .map gives access to each element's index
```

<a name="HTML-CSS"></a>
## Hyper Text Markup Language & Cascading Style Sheets
Hyper Text Markup Language (HTML), thelanguage of the document that the browser reads for content to display.
<br/>
Cascading Style Sheets (CSS), the language used by the browser to decide the visual look of the content.
<br/><br/>
HTML and CSS work hand in hand to display and beautify a webpage respectively.

### HTML
HTML can be thought of as containers. HTML start and end off with tags enclosed in arrow brackets.
<br/>
<img src="./readmeAssets/html.png" width="500"/>
<br/>
For example, we want to replicate the image above, we would then split each individual component into a container.
<br/>
In HTML code, it will look like
```html
  <div>
    <input/>
    <button> Save <button/>
    <div> list 1 </div>
    <div> list 2 </div>
    <div> list 3 </div>
  </div>
```
Take note that each html tag has an opening and a closing tag. Eg
```html
<div></div>
```
A self closing tag can also be used. Eg
```html
<input/>
```
Each tag has its own attributes too. Eg
```html
<button onClick="whenButtonClickRunThisFunction()" />.
``` 
This button has an event handler function name "whenButtonClickRunThisFunction" that runs everytime the button is clicked.

### CSS
CSS can be thought of as a bunch of properties you want each HTML container to have.
```html
  <div class="redBoxClass" >
    This is a Red Box
  </div>
```
First we assign a class to the HTML tag.
```css
.redBoxClass{
  background-color: red
}
```
CSS then assigns a property to the following class.

<a name="react"></a>
## React
<a name="react/components"></a>
### Components
The react library are made out of components. Just like how HTML is made up of multiple containters, react uses the same container concept but calls it components insetad.
<img src="./readmeAssets/reactComponent.png" width="400"/>
A React Component is a Javascript Function that takes in an object called `props` and return `JSX`.
<br/>
You can view props as properties being pass into a component, just like how you pass parameters into a function.
<br/>
You can view JSX as HTML but used as an extension of Javascript.
<br/>
An example of a component
<br/>
```js
// We first create a function that takes in props as a parameter and return JSX.
const thisIsAComponent = ( props ) => {
  return(
    <div> 
      This is like HTML but it is actually JSX.
    </div>
  )
}
// If we want to write javascript when we are in JSX, we need to write it in curly braces
const thisIsAComponent = ( props ) => {
  return(
    <div> 
      This is like HTML but it is actually JSX.
      { 
        console.log(" If you want to add Javascript code in JSX, you need to wrap it in curly braces {} ")
      }
    </div>
  )
}
```

<a name="react/state"></a>
### State
A state is like a temporary storage on your browser. It can be viewed like a temporary database.
<br>/<br/>
React uses a function called `useState` to intialize a state. `useState` is one of the many functions called react hooks.
<br/>
useState function takes in the initial state of the state. It returns an array containing the current state and a function to update the state.
For example, we want inialize a state that initially have a value of `"Hello World".`
```js
const [ currentValueOfState , functionToUpdateState ] = useState( "Hello World" )
// As shown, passing "Hello World" to useState assigns "Hello World" to currentValueOfState.
// In which to update currentValueOfState, we need to use functionToUpdateState.
```
To illustrate what is happening
```js
const [ currentValueOfState , functionToUpdateState ] = useState( "Hello World" )

console.log( currentValueOfState ) // this will print "Hello World"

functionToUpdateState("SUTD")

console.log( currentValueOfState ) // this will print "SUTD"
```


<a name="flexbox"></a>
## CSS Flexbox
CSS Flexbox are useful bunch of CSS properties that allow webpages to be responsive. Meaning, if the browser changes width or height, the content will adapt accordingly.
<br/><br/>
[link to css flexbox documentation!](https://www.css-tricks.com/snippets/css/a-guide-to-flexbox/)