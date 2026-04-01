/** @license Apache-2.0 */

'use strict';

/**
* Compute the sum of a one-dimensional single-precision floating-point ndarray, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.
*
* @module @stdlib/blas-ext-base-ndarray-snansumkbn
*
* @example
* var Float32Array = require( '@stdlib/array-float32' );
* var ndarray = require( '@stdlib/ndarray-base-ctor' );
* var snansumkbn = require( '@stdlib/blas-ext-base-ndarray-snansumkbn' );
*
* var xbuf = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
* var x = new ndarray( 'float32', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
*
* var v = snansumkbn( [ x ] );
* // returns 1.0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
