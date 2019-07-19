const indent = 25;
export let PDF_OVERVIEW: any = {
    // tslint:disable-next-line: indent
	defaultStyle: {
        fontSize: 11
    },
    pageSize: 'LETTER',
    pageOrientation: 'portrait',
    pageMargins: [ 40, 60, 40, 60 ],
    styles: {
        h1: {
            bold: false,
            color: '#2E74B5',
            fontSize: 18,
            margin: [0, 12, 0, 2]
        },
        h2: {
            bold: false,
            color: '#2E74B5',
            fontSize: 16,
            margin: [0, 6, 0, 2]
        },
        h3: {
            bold: false,
            color: '#2E74B5',
            fontSize: 14,
            margin: [0, 3, 0, 2]
        },
        tdHeader: {
            fillColor: '#dff0d8',
        },
        txtPrimary: {
            fontSize: 11,
            color: '#2E74B5',
        },

    },
    header(currentPage: number, pageCount: number) {
        return {
            alignment: 'right',
            fontSize: 8,
            italics: true,
            margin: [0, 20, 20, 0],
            text: 'Angular Template',
    };
    },
    footer(currentPage: number, pageCount: number) {
        return {
        alignment: 'right',
            fontSize: 8,
            italics: true,
            marginRight: 20,
            text: currentPage.toString(),
        };
    },
    content: [
        {
            style: 'h1',
            text: 'Angular Template and Training Code Example Site'
        },
        '\nThis template was designed using Angular CLI and Ahead of Time (AoT) compilation.  The application is designed to HTML5 and CSS3 standards and should run on any major modern browser on any device and operating system.  This application runs completely client side allowing it to be hosted from any web hosting service such as Internet Information Service (IIS), NodeJS, Apache, etc.\n\n',
        'Development was done using Visual Studio Code, but could have just as easily used any IDE or editor such as Atom, Sublime, or even something as simple as NotePad++.  The only requirement for development is a system supporting Node package Manager (NPM) packages.  Open standard tools such as NPM (node package manager), Jasmine (unit testing), Karma (test runner), and Git (version control), and Webpack (compile, minify, uglify, bundle) are also leveraged.  This environment detects code changes, automaticly hot swapping changes and refresh all connected browsers improving development and debugging time efficiency.\n\n',
        'Angular’s powerful client side JavaScript library is the key to this applications architecture.  Examples exist throughout this application demonstrating Angular, Typescript, and Bootstrap capabilities and best practices.  Make sure to check out the “Features” section below for a list of Angular features demonstrated in this project.  As Angular, Typescript, Bootstrap, or Visual Studio changes or best practices evolve, this template will be updated to ensure it always remains a good reference for any new project.\n\n',
        {text: 'Angular\'s Value Proposition', style: 'h2'},
        {
            ul: [
                'Better supports stateless server design and its associated horizontal scalability',
                'Better supports scalability through offloading server processing',
                'Better supports SQL scalability as changes can remain on the client between pages, and only sent to the server when needing to persist beyond the session',
                'Built in validation and dirty checking ensure data is not passed back to the server that did not change or that did not meet quality requirements',
                'Better supports a more rapidly responding and interactive client experience',
                'Better supports separation of concerns where front-end is for presentation, and backend is for data access',
                'Extremely readable HTML, and complete separation of model, view and controller functionality',
                'Allows natural syntax for building a page from components, and even nesting components inside other components',
                'Built in support for client side unit testing',
                'Components isolation model lends itself nicely to unit testing',
                'CSS scoping at the component level and not just the page level',
                'Best client framework when wanting to extend JavaScript with TypeScript'
            ]
        },
        '\n',
        {
            columns: [
                [
                    {text: 'Template Features - Angular', style: 'h3'},
                    {
                        ul: [
                            'One way binding {{}}',
                            'Event binding ()',
                            'Target property binding []',
                            'Two way binding [()]',
                            'Structural directives *',
                            'Local template variables #',
                            'Components',
                            'Component scoped CSS',
                            'Injectors',
                            'Lifecycle hooks',
                            'Modules',
                            'Module Lazy Loading',
                            'Routers (parent and child)',
                            'Services',
                            'Custom pipes',
                            'Form validation',
                            'AJAX calls',
                            'Async observables',
                            'Typescript'
                            ]
                    }
                ],
                [
                    {text: 'Template Features - Other', style: 'h3'},
                    {
                        ul: [
                            'Animations and Transitions',
                            'Auto re-compile, re-test, browser refresh on change',
                            'Azure/Git continuous deployment (dev\master)',
                            'Bootstrap grids, forms, nav, panels, tables, etc.',
                            'Drag and Drop',
                            'Graphs, charts, and dashboards (using D3)',
                            'Header scroll awareness',
                            'Mock data support',
                            'OAuth bearer tokens',
                            'PDF Printing',
                            'RegEx form validation',
                            'Responsive sidebar',
                            'SVG manipulation via CSS',
                            'Table caching, sorting, and search filtering',
                            'Webpack compiling, minification, mangling, bundling',
                            'Karma/Jasmine unit testing',
                            'Protractor end to end testing (based on Selineum)',
                            'Help page discussing all usage details',
                            'Form dirty checking'
                            ]
                    }
                ],
            ]
        }
    ]
};
