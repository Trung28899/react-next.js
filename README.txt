1. Tools used: 
$ npm init
$ npm install --save next react react-dom

2. Core concepts: 
- Server side rendering: See "Server Side Rendering.jpg"

+, usually, the client side get the website, 
render the 1st page and return it to the server
> issue: web crawler might not able to read the 1st 
rendered page properly > affect search engine optimazation

+, With Server side rendering, the 1st page is rendered in the 
server. The server will return the 1st page and app bundle to 
the client side. The web crawler will read the 1st page properly
since the 1st page doesn't need to wait until the client side 
is open for rendering content

+, Nextjs is a React framework for server side rendering

3. Guide to using code: 

VER 1: Setting up next.js
----------------------------------------------------------------
Code in 2nd Commit

- create new empty file, open vs code at that file

Step 1: go to this website to see set up steps: 
https://nextjs.org/docs/getting-started

Step 2: 
$ npm init
$ npm install --save next react react-dom
- Setting up manual set up as the documentations

Step 3: 
$ npm run dev
> go to your browser localhost:3000
or localhost:3000/auth