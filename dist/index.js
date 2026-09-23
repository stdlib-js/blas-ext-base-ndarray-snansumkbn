/** @license Apache-2.0 */

'use strict';

/**
* Compute the sum of a one-dimensional single-precision floating-point ndarray, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.
*
* @module @stdlib/blas-ext-base-ndarray-snansumkbn
*
* @example
* var Float32Vector = require( '@stdlib/ndarray-vector-float32' );
* var snansumkbn = require( '@stdlib/blas-ext-base-ndarray-snansumkbn' );
*
* var x = new Float32Vector( [ 1.0, -2.0, NaN, 2.0 ] );
*
* var v = snansumkbn( [ x ] );
* // returns 1.0
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils-try-require/dist' );
var isError = require( '@stdlib/assert-is-error/dist' );
var main = require( './main.js' );


// MAIN //

var snansumkbn;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	snansumkbn = main;
} else {
	snansumkbn = tmp;
}


// EXPORTS //

module.exports = snansumkbn;
