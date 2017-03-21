# rails-interview — a sample Ruby on Rails app for potential hires

## Getting Started

### Prerequisites

1. Ensure you have version `2.3` or higher of `ruby` installed on your machine.
1. Ensure you have `bundler` installed (`gem install bundler`)
1. Ensure you have `git` installed on your machine
1. Ensure you have NodeJS and Bower to install front end dependencies

### Start the Application

1. `cd` into the directory
1. Run `bundle install` to install gems
1. Run `bower install` to install front end dependencies
1. Run `bin\rails server`
1. Browse to [http://localhost:3000](http://localhost:3000/students)

## Solving the Problem - JavaScript / SPA

- [x] AngularJS Used

### Tasks

- [x] Allow `/students` to return JSON using headers. (Don't use `/students.json`)
- [x] Add a nested collection route named `:js` to the `:students` resource
- [x] Create a corresponding `js` method in the `StudentsController`
- [x] Return a view from `/students/js` that will load a single-page application version of `/students` and fulfill the constraints listed above.
- [x] SPA should only load everything below the `h1` header with front-end views
- [x] The JavaScript code should trigger the rendering of the rest of the page.

- SPA should have all functionality of `/students` with:
  - [x] Sorting by clicking on table headers
  - [x] Filtering by name with a text input just above the table

- SPA should only make JSON AJAX calls to `/students`
  - [x] Must use Promises (native, jQuery, $q, etc) for AJAX requests
  - [x] Must implement successful case when API responds properly
  - [x] Must implement unsuccessful case when API fails to respond

- [x] Did you make it this far?  Good! We want to make sure you're paying attention.
Make a `POST` route for `/foo` point to any controller and action.
Inside that route, if a parameter named `valid` is present with the string `true`,
you should return only the text `BAR` with a `202` status code.
If the parameter is not present in the `POST` body or it is not the string
`true`, raise an exception.
