# law-and-trump
Material Design-themed React app of violations of law by Trump.

Demo at: https://sterlingvix.github.io/law-and-trump/

# Contributing

Thanks!!! You probably want the reference document, here: http://globaljusticecenter.net/documents/TrumpAndInternationalLaw.pdf

### Process

Please work on issues in the **Issues** tab. If you notice new work that should be done, please open an issue and include Completion Criteria.

While working on an issue please *work on a non-master branch* (you can just name it after the issue number) *and* update the issue on the **Projects** board.

When finished, please *make a pull request to master* and put the issue in the *Under Review* column of the **Projects** board.

### Setting up the app

This app is developed with Create React App -- instructions at https://github.com/facebookincubator/create-react-app.

To install, just clone the repo and run `npm install`.

Run the app with `npm start`.

Build the optimized / deployable app with `npm run build`.

Preview the deployable build by first installing `serve` globally: `npm install -g serve@^5.1.5`.

Then serve the built app with `npm run preview`.

Code style is ES2016+ with React. If you're not used to it, no worries, you'll pick it up fast. Ask me if you have any questions. :)

### Publishing the app

First, install `gh-pages` globally: `npm install -g gh-pages`.

Then run `npm run deploy`. That's it!
