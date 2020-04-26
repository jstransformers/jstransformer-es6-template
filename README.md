# jstransformer-es6-template

[es6-template](https://github.com/tunnckoCore/es6-template) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-es6-template/master.svg)](https://travis-ci.org/jstransformers/jstransformer-es6-template)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-es6-template/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-es6-template)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-es6-template/master.svg)](http://david-dm.org/jstransformers/jstransformer-es6-template)

[![NPM version](https://img.shields.io/npm/v/jstransformer-es6-template.svg)](https://www.npmjs.org/package/jstransformer-es6-template)

## Installation

```
npm install jstransformer-es6-template
```

## API

```js
var es6template = require('jstransformer')(require('jstransformer-es6-template'));

var locals = {
  place: 'world',
  user: {
    name: 'Charlike'
  }
};

es6template.render('Hello ${place} and ${user.name}!', locals).body
//=> 'Hello world and Charlike!'
```

## License

MIT
