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