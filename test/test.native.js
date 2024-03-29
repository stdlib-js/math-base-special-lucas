/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var tryRequire = require( '@stdlib/utils-try-require' );


// FIXTURES //

var LUCAS = require( './../lib/lucas.json' );


// VARIABLES //

var lucas = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( lucas instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof lucas, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided a negative number, the function returns `NaN`', opts, function test( t ) {
	var v;
	var i;

	for ( i = -1; i > -100; i-- ) {
		v = lucas( i );
		t.strictEqual( isnan( v ), true, 'returns NaN when provided ' + i );
	}
	t.end();
});

tape( 'the function returns the nth Lucas number', opts, function test( t ) {
	var v;
	var i;
	for ( i = 0; i < 77; i++ ) {
		v = lucas( i );
		t.strictEqual( v, LUCAS[ i ], 'returns the '+i+'th Lucas number' );
	}
	t.end();
});

tape( 'if provided nonnegative integers less than `76`, the function returns `NaN`', opts, function test( t ) {
	var i;
	var v;
	for ( i = 77; i < 500; i++ ) {
		v = lucas( i );
		t.strictEqual( isnan( v ), true, 'returns NaN when provided ' + i );
	}
	t.end();
});
