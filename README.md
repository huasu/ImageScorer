# ImageScorer

This Flask app:
- runs a server that serves images loaded by globbing command line parameters
- serves a web page that is a single page app to display the images
  - the page will be an Angular app
  - it will take typed scores and send it back through a web service
- There must be a recording mechanism for the scores
  - This may begin as appending a CSV file 
  - This should eventually migrate to a database
- Services
  - Send a list of available file names
  - Send individual files
  - get scores and records them

The first version should be a simple Flask app that serves an Angular app.