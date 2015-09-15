templar
=======

> A template for kick-starting a UI Development approach on projects.



## About
This template is meant to be a good starting point when building a web app. It is still a work in progress and needs to be tweaked as well as have updated documentation. Working on it...



## Getting Started


### Installation
Install all global packages.
```shell
npm install -g node-squarespace-server
```


Make sure you have [sass](http://sass-lang.com/install) installed too.
```shell
gem install sass
```


Install the custom [jQuery](https://github.com/jquery/jquery) build.
```shell
npm install -g grunt-cli

git clone git://github.com/jquery/jquery.git

cd jquery && npm run build

grunt custom:-deprecated,-effects,-css,-dimensions,-offset,-wrap,-exports/amd,-event/alias,-core/ready
```


Install all local dependencies.
```shell
npm install
```


Workflow is via npm scripts. So, `npm run [task]`. [This article](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool) is a good read on using npm as a build tool. These are the project tasks.
```shell
# Build scripts
build
build:js
build:css
build:watch
```



## Squarespace


### SQS Template
Clone the template from the remote Squarespace site
```shell
# From project root
git clone https://yoursquarespacesite.com sqs_template
```

You can now copy some default template starting points into your base-template
```shell
# Trash default base-template
# Delete everything other than the .git directory

# Copy the custom base-template over
cp -r .sqs_template/* sqs_template

# Trash the dot template
rm -rf .sqs_template

# Compile app JS/SASS and start project watch
npm run build:watch

# Change directories
cd sqs_template

# Add your new template
git add .

# Commit your new template
git commit -m "Base template reset"

# Push the new template to your squarespace site
git push origin master
```


### SQS Blocks
The `image.block` and `gallery.block` system rendering is overridden. These block partials in conjunction with a `sass` file and a `js` module generate custom image and gallery blocks. The primarily useful gallery block options are supported, including design style, aspect ratio and image per row when using the grid style. The "slider" style is loaded as a draggable belt module by default using [Greensock Draggable](https://greensock.com/draggable). You need a developer license to use the [ThrowPropsPlugin](https://greensock.com/throwpropsplugin). As long as you have that, put your GS source in the root as `greensock-js` and compile a `gs-draggable.js` file into your sqs_template/scripts directory.



## Development


### Hammer Tips
All events are normalized using [Hammer.js](http://hammerjs.github.io) unless they are events that cannot be wrapped in a touch interface, such as mousing or form binding. A handy [ProperJS](https://github.com/ProperJS) wrapper called [Hammered](https://github.com/ProperJS/Hammered) is used for event delegation when adding Hammer listeners. Checkout the [Getting Started](http://hammerjs.github.io/getting-started/) page for usage tips. Also check out [this post](http://tech.gilt.com/2014/09/23/five-things-you-need-to-know-about-hammer-js-2-0/) for insights on how best to utilize the Hammer 2 API if you are shifting from the 1.0 Pub/Sub model.


### jQuery Tips
Checkout [this page](https://learn.jquery.com/performance/) to familiarize yourself with some best practices when working with jQuery and the DOM. Aside from that, these are some other good ones.
- Cache your elements
- Cache elements when a module deems it necessary only
- Use high-level caching for document, html and body
- Use native value over .val()
- Use native innerHTML over .html()
- Never use .each(), rather use native loops
- Query with context, either $( selector, context ) OR $element.find( selector )


### Deployment
Site deployments are handled through git when pushing up to the remote Squarespace template.
