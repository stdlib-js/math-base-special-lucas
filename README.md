<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Lucas

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Compute the nth [Lucas number][lucas-number].

<section class="intro">

The [Lucas numbers][lucas-number] are the integer sequence

<!-- <equation class="equation" label="eq:lucas_sequence" align="center" raw="2, 1, 3, 4, 7, 11, 18, 29, 47, 76, 123, 199, 322, \ldots" alt="Lucas sequence"> -->

<div class="equation" align="center" data-raw-text="2, 1, 3, 4, 7, 11, 18, 29, 47, 76, 123, 199, 322, \ldots" data-equation="eq:lucas_sequence">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/special/lucas/docs/img/equation_lucas_sequence.svg" alt="Lucas sequence">
    <br>
</div>

<!-- </equation> -->

The sequence is defined by the recurrence relation

<!-- <equation class="equation" label="eq:lucas_recurrence_relation" align="center" raw="L_n = \begin{cases}2 & \textrm{if}\ n = 0\\1 & \textrm{if}\ n = 1\\L_{n-1} + L_{n-2} & \textrm{if}\ n > 1\end{cases}" alt="Lucas sequence recurrence relation"> -->

<div class="equation" align="center" data-raw-text="L_n = \begin{cases}2 &amp; \textrm{if}\ n = 0\\1 &amp; \textrm{if}\ n = 1\\L_{n-1} + L_{n-2} &amp; \textrm{if}\ n &gt; 1\end{cases}" data-equation="eq:lucas_recurrence_relation">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/special/lucas/docs/img/equation_lucas_recurrence_relation.svg" alt="Lucas sequence recurrence relation">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-lucas
```

</section>

<section class="usage">

## Usage

```javascript
var lucas = require( '@stdlib/math-base-special-lucas' );
```

#### lucas( n )

Computes the nth [Lucas number][lucas-number].

```javascript
var v = lucas( 0 );
// returns 2

v = lucas( 1 );
// returns 1

v = lucas( 2 );
// returns 3

v = lucas( 3 );
// returns 4

v = lucas( 76 );
// returns 7639424778862807
```

If `n > 76`, the function returns `NaN`, as larger [Lucas numbers][lucas-number] cannot be safely represented in [double-precision floating-point format][ieee754].

```javascript
var v = lucas( 77 );
// returns NaN
```

If not provided a nonnegative integer value, the function returns `NaN`.

```javascript
var v = lucas( 3.14 );
// returns NaN

v = lucas( -1 );
// returns NaN
```

If provided `NaN`, the function returns `NaN`.

```javascript
var v = lucas( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var lucas = require( '@stdlib/math-base-special-lucas' );

var v;
var i;

for ( i = 0; i < 77; i++ ) {
    v = lucas( i );
    console.log( v );
}
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-lucas.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-lucas

[test-image]: https://github.com/stdlib-js/math-base-special-lucas/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-special-lucas/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-lucas/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-lucas?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-lucas
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-lucas/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-lucas/main/LICENSE

[lucas-number]: https://en.wikipedia.org/wiki/Lucas_number

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
