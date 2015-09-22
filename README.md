# jstransformer-es6-template [![The MIT License][license-img]][license-url]

[es6-template](https://github.com/tunnckoCore/es6-template) support for [JSTransformers][jstransformers-url]

[![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url] [![npmjs.com][npmjs-img]][npmjs-url]


## Install
```
npm install jstransformer-es6-template --save
```


## Usage
> For more use-cases see the **tests** in [test folder](./test) or see the [JSTransformer API](http://github.com/jstransformers/jstransformer#api) for more details.

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


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/jstransformer-es6-template/issues/new).


## License
[The MIT License][license-url]


[npmjs-url]: https://www.npmjs.com/package/jstransformer-es6-template
[npmjs-img]: https://img.shields.io/npm/v/jstransformer-es6-template.svg

[license-url]: ./LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg

[travis-url]: https://travis-ci.org/tunnckoCore/jstransformer-es6-template
[travis-img]: https://img.shields.io/travis/tunnckoCore/jstransformer-es6-template.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/jstransformer-es6-template
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/jstransformer-es6-template.svg

[david-url]: https://david-dm.org/tunnckoCore/jstransformer-es6-template
[david-img]: https://img.shields.io/david/tunnckoCore/jstransformer-es6-template.svg

[jstransformers-url]: http://github.com/jstransformers
