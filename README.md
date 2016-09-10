TypeScript version. For JavaScript version see project Angular2VSTemplateJS

## Angular 2.0, TypeScript, Bootstrap, and Visual Studio 2015

This site was put together to demonstrate code examples for Angular 2.0, Typescript, and Bootstrap developed in a Visual Studio 2015 hosted IDE. This combination of tools allows for a browser and device agnostic highly responsive application. Open standard tools such as NPM (node package manager), Gulp (task runner), Jasmine (unit testing), Karma (test runner), and Git (version control) are also leveraged. This project runs equally well using .Net Core or Node for hosting and supports not just Visual Studio 2015, but also Visual Studio Code, Sublime, Atom, and more. Tools like BrowserSync detect code changes, automatically re-compile, unit testing, and refresh all connected browsers improving development and debugging time efficiency.

Angular 2.0’s powerful client side JavaScript library is the key to this applications architecture. Although developed as a lightweight template or starting point for new projects, examples exist throughout the code demonstrating Angular, Typescript, and Bootstrap capabilities and best practices. Make sure to check out the “Features” section below for a list of Angular 2.0 features demonstrated in this project.

As Angular, Typescript, Bootstrap, or Visual Studio changes or best practices evolve, this template will be updates to ensure it always remains a good starting point for any new project.

### Architecture Diagram
![Architecture Diagram](https://github.com/PaulGilchrist/Angular2VSTemplate/blob/master/src/Angular2Template/wwwroot/img/architecture-diagram.png)

### Module Scope: Page Example
![Architecture Diagram](https://github.com/PaulGilchrist/Angular2VSTemplate/blob/master/src/Angular2Template/wwwroot/img/module-scope.png)

[Learn more about Angular 2.0 development](https://angular.io/)
Learn more about [Typescript](http://www.typescriptlang.org/), [Bootstrap](http://getbootstrap.com/), or [Visual Studio 2015](https://www.visualstudio.com/en-us/visual-studio-homepage-vs.aspx)

### Getting Started
This template is designed to work primarily on Visual Studio 2015 and Visual Studio Code, but has been developed using all cross-platform libraries and can be hosted with either Node or .Net core.  This means code editors such as Atom, Sublime, or even something as simple as NotePad++ could be used.  Even if this template will be hosted using .Net core or another non Node server, NodeJS will still need to be installed to support package management (npm), task workflows (gulp), and their supporting tools.  You can download and install NodeJS from here…

[https://nodejs.org](https://nodejs.org)

After installing node, open a command prompt at the project root folder (src\Angular2Template) and run “npm install”.  This command will read the “package.json” file and download and install all the referenced packages. At this point, the application will run using a mock service for supplying user and address data.  The template also comes with a service that gets its data from a backend API instead of mocking the data.  If you are also implementing the GitHub solution named <a href="https://github.com/PaulGilchrist/ApiTemplate">“ApiTemplate”</a>, you can follow these steps to switch from mock data to API accessed data:

1. From the folder “app/services”, rename “user.service.ts” to “mock-user.service.ts”
2. From the folder “app/services”, rename “api-user.service.ts” to “user.service.ts”
3. Edit “app/data/config.data.ts” variable “apiUrl” to the location you are hosting the API template
4. Rebuild the application (gulp rebuild)

This application also supports OAuth 2.0 implicit flow token for communication with the API.  Authentication is supported but not required for template usage.  Enabling authentication support, requires editing the “authProvider” variable in the same config file as above to your OAuth service provider information.

Once you have the application running, make sure to check out the Help page for further usage details.

#### Angular's Value Proposition
* Better supports stateless server design and its associated horizontal scalability
* Better supports scalability through offloading server processing
* Better supports SQL scalability as changes can remain on the client between pages, and only sent to the server when needing to persist beyond the session
* Built in validation and dirty checking ensure data is not passed back to the server that did not change or that did not meet quality requirements
* Better supports a more rapidly responding and interactive client experience
* Better supports separation of concerns where front-end is for presentation, and backend is for data access
* Extremely readable HTML, and complete separation of model, view and controller functionality
* Allows natural syntax for building a page from components, and even nesting components inside other components
* Built in support for client side unit testing
* Components isolation model lends itself nicely to unit testing
* CSS scoping at the component level and not just the page level
* Best client framework when wanting to extend JavaScript with TypeScript

#### Template Features - Angular
* One way binding {{}}
* Event binding ()
* Target property binding []
* Two way binding [()]
* Structural directives *
* Local template variables #
* Components
* Component Scoped CSS
* Injectors
* Lifecycle Hooks
* Routers
* Services
* Custom Pipes
* Form Validation
* AJAX calls
* Async Observables

#### Template Features - Other
* Animations and Transitions
* Azure/Git continuous deployment (dev\master)
* Bootstrap grids, forms, nav, panels, tables, etc.
* Drag and Drop
* Gulp post build automation
* OAuth bearer tokens
* Node package manager
* Responsive sidebar
* TypeScript

#### Recently Added
* Change detection and auto re-compile, re-test, with browser update
* Header scroll awareness
* Help page discussing all usage details
* Form dirty checking
* Graphs, charts, and dashboards (using D3)
* JavaScript minification
* Mock data support
* Progress bar component
* RegEx validation
* Table caching, sorting, and search filtering
* Unit testing - Jasmine (unit testing) & Karma (test runner)
* Catch leaving page containing changed data, prompting for bulk save

#### To Do List
* PDF Printing
* API conversion to .Net core leveraging direct injection
* API endpoint to receive client errors.  Abstract all logging through client service.
* API feedback endpoint and client side UI
* Document Git process
* Document key files and their purpose (ex: gulpfile.js, karma.conf.js, package.json, tsconfig.json, etc.)
* HTML minification (when supported)
* Minify Angular2 libraries (when supported)
* Modal component
* Service interface definitions to ensure mock data interface matches production interface

#### Azure Hosting Requirements
* Application App Settings (Project=build)
    Required so Azure knows what folder to start node from