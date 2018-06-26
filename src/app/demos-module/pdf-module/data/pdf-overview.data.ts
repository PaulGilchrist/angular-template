const indent = 25;
export let PDF_OVERVIEW: any = {
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
	header: function(currentPage: number, pageCount: number) {
		return {
			alignment: 'right',
			fontSize: 8,
			italics: true,
			margin: [0, 20, 20, 0],
			text: 'Angular 2.0 Template',
	};
	},
	footer: function(currentPage: number, pageCount: number) {
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
		'\nThis site was put together to demonstrate code examples for Angular, Typescript, and Bootstrap developed in a Visual Studio 2015 hosted IDE. This combination of tools allows for a browser and device agnostic highly responsive application. Open standard tools such as NPM (node package manager), Gulp (task runner), Jasmine (unit testing), Karma (test runner), and Git (version control) are also leveraged. This project runs equally well using .Net Core or Node for hosting and supports not just Visual Studio 2015, but also Visual Studio Code, Sublime, Atom, and more. Tools like BrowserSync detect code changes, automaticly re-compile, unit testing, and refresh all connected browsers improving development and debugging time efficiency.\n\nAngular 2.0’s powerful client side JavaScript library is the key to this applications architecture. Although developed as a lightweight template or starting point for new projects, examples exist throughout the code demonstrating Angular, Typescript, and Bootstrap capabilities and best practices. Make sure to check out the “Features” section below for a list of Angular 2.0 features demonstrated in this project.\n\nAs Angular, Typescript, Bootstrap, or Visual Studio changes or best practices evolve, this template will be updates to ensure it always remains a good starting point for any new project.\n\n',
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
							'Routers (parent and child)',
							'Services',
							'Custom pipes',
							'Form validation',
							'AJAX calls',
							'Async observables',
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
							'Gulp post build automation',
							'Header scroll awareness',
							'Mock data support',
							'OAuth bearer tokens',
							'RegEx form validation',
							'Responsive sidebar',
							'SVG manipulation via CSS',
							'Table caching, sorting, and search filtering',
							'TypeScript',
							'Unit testing (using Jasmine)'
							]
					}
				],
			]
		}
	]
};
