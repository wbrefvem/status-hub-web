# Status Hub web interface

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

# What's Next

Description: Internal website designed for management to keep an updated list of statuses.

## Things to Do

The next few steps, no particular order of priority.

### Functionalities

* Adding New
* Deleting
* Sorting
* View

### Other Tasks

* Routing from status list page to status edit page when pencil clicked
* Require all fields aside from Start/End Time
* Create uniform format of Date and Time
Include "Time Left:" on status list page
	* Time left > 31 days = months
	* 31 days > Time left > 1 day = days
	* Time left < 1 day = hours
	* Beneath status title
	* Change styling based on time left
	* Within 6 hours of end time – different styling
