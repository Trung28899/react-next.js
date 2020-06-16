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

VER 2: Navigate to different pages
----------------------------------------------------------------
Code in 3rd Commit

- See src/pages/index.js

VER 3: Components, Styling and handling (404) errors
----------------------------------------------------------------
Code in 4th Commit

- Components in Next.js: 
Step 1: Go to components/User.js, see the component here
Step 2: Go to pages/auth/index.js, see how to implement component here
Step 3: localhost:3000 > hit any button > will see the /auth page

- Styling in Next.js
Step 1: see components/User.js to see how to style

- Handling (404) error: 
Step 1: create file _error.js, see pages/_error.js
Step 2: go to browser, type localhost:3000/random to see the output
Step 3: dive deeper, see the link down below
https://nextjs.org/docs/advanced-features/custom-error-page#customizing-the-error-page

IMPORTANT TO NOTICE: next.js take any page under "pages" folder and will display the 
default _error.js under "pages" when any non-existence link is entered