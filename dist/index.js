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

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
