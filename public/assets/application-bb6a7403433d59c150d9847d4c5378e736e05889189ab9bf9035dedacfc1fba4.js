/*!
 * jQuery JavaScript Library v1.12.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:17Z
 */


(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//"use strict";
var deletedIds = [];

var document = window.document;

var slice = deletedIds.slice;

var concat = deletedIds.concat;

var push = deletedIds.push;

var indexOf = deletedIds.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	version = "1.12.4",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1, IE<9
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: deletedIds.sort,
	splice: deletedIds.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var src, copyIsArray, copy, name, options, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray || function( obj ) {
		return jQuery.type( obj ) === "array";
	},

	isWindow: function( obj ) {
		/* jshint eqeqeq: false */
		return obj != null && obj == obj.window;
	},

	isNumeric: function( obj ) {

		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		var realStringObj = obj && obj.toString();
		return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	isPlainObject: function( obj ) {
		var key;

		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if ( !obj || jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		try {

			// Not own constructor property must be Object
			if ( obj.constructor &&
				!hasOwn.call( obj, "constructor" ) &&
				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
				return false;
			}
		} catch ( e ) {

			// IE8,9 Will throw exceptions on certain host objects #9897
			return false;
		}

		// Support: IE<9
		// Handle iteration over inherited properties before own properties.
		if ( !support.ownFirst ) {
			for ( key in obj ) {
				return hasOwn.call( obj, key );
			}
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		for ( key in obj ) {}

		return key === undefined || hasOwn.call( obj, key );
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function( data ) {
		if ( data && jQuery.trim( data ) ) {

			// We use execScript on Internet Explorer
			// We use an anonymous function so that context is window
			// rather than jQuery in Firefox
			( window.execScript || function( data ) {
				window[ "eval" ].call( window, data ); // jscs:ignore requireDotNotation
			} )( data );
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1, IE<9
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		var len;

		if ( arr ) {
			if ( indexOf ) {
				return indexOf.call( arr, elem, i );
			}

			len = arr.length;
			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

			for ( ; i < len; i++ ) {

				// Skip accessing in sparse arrays
				if ( i in arr && arr[ i ] === elem ) {
					return i;
				}
			}
		}

		return -1;
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		while ( j < len ) {
			first[ i++ ] = second[ j++ ];
		}

		// Support: IE<9
		// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
		if ( len !== len ) {
			while ( second[ j ] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var args, proxy, tmp;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: function() {
		return +( new Date() );
	},

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

// JSHint would error on this code due to the Symbol not being defined in ES5.
// Defining this global in .jshintrc would create a danger of using the global
// unguarded in another place, it seems safer to just disable JSHint for these
// three lines.
/* jshint ignore: start */
if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = deletedIds[ Symbol.iterator ];
}
/* jshint ignore: end */

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, nidselect, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
					while ( i-- ) {
						groups[i] = nidselect + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( (parent = document.defaultView) && parent.top !== parent ) {
		// Support: IE 11
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( document.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				return m ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( (oldCache = uniqueCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		} );

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( jQuery.inArray( elem, qualifier ) > -1 ) !== not;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i,
			ret = [],
			self = this,
			len = self.length;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// init accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector.charAt( 0 ) === "<" &&
				selector.charAt( selector.length - 1 ) === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {

						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[ 2 ] ) {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[ 0 ] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof root.ready !== "undefined" ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var i,
			targets = jQuery( target, this ),
			len = targets.length;

		return this.filter( function() {
			for ( i = 0; i < len; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

				// Always skip document fragments
				if ( cur.nodeType < 11 && ( pos ?
					pos.index( cur ) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector( cur, selectors ) ) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return jQuery.inArray( this[ 0 ], jQuery( elem ) );
		}

		// Locate the position of the desired element
		return jQuery.inArray(

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem, this );
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	do {
		cur = cur[ dir ];
	} while ( cur && cur.nodeType !== 1 );

	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var ret = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				ret = jQuery.uniqueSort( ret );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				ret = ret.reverse();
			}
		}

		return this.pushStack( ret );
	};
} );
var rnotwhite = ( /\S+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = true;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this === promise ? newDefer.promise() : this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add( function() {

					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 ||
				( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred.
			// If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );

					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.progress( updateFunc( i, progressContexts, progressValues ) )
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject );
				} else {
					--remaining;
				}
			}
		}

		// if we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
} );


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {

	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
} );

/**
 * Clean-up method for dom ready events
 */
function detach() {
	if ( document.addEventListener ) {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );

	} else {
		document.detachEvent( "onreadystatechange", completed );
		window.detachEvent( "onload", completed );
	}
}

/**
 * The ready event handler and self cleanup method
 */
function completed() {

	// readyState === "complete" is good enough for us to call the dom ready in oldIE
	if ( document.addEventListener ||
		window.event.type === "load" ||
		document.readyState === "complete" ) {

		detach();
		jQuery.ready();
	}
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called
		// after the browser event has already occurred.
		// Support: IE6-10
		// Older IE sometimes signals "interactive" too soon
		if ( document.readyState === "complete" ||
			( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

			// Handle it asynchronously to allow scripts the opportunity to delay ready
			window.setTimeout( jQuery.ready );

		// Standards-based browsers support DOMContentLoaded
		} else if ( document.addEventListener ) {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed );

		// If IE event model is used
		} else {

			// Ensure firing before onload, maybe late but safe also for iframes
			document.attachEvent( "onreadystatechange", completed );

			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", completed );

			// If IE and not a frame
			// continually check to see if the document is ready
			var top = false;

			try {
				top = window.frameElement == null && document.documentElement;
			} catch ( e ) {}

			if ( top && top.doScroll ) {
				( function doScrollCheck() {
					if ( !jQuery.isReady ) {

						try {

							// Use the trick by Diego Perini
							// http://javascript.nwbox.com/IEContentLoaded/
							top.doScroll( "left" );
						} catch ( e ) {
							return window.setTimeout( doScrollCheck, 50 );
						}

						// detach all dom ready events
						detach();

						// and execute any waiting functions
						jQuery.ready();
					}
				} )();
			}
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Support: IE<9
// Iteration over object's inherited properties before its own
var i;
for ( i in jQuery( support ) ) {
	break;
}
support.ownFirst = i === "0";

// Note: most support tests are defined in their respective modules.
// false until the test is run
support.inlineBlockNeedsLayout = false;

// Execute ASAP in case we need to set body.style.zoom
jQuery( function() {

	// Minified: var a,b,c,d
	var val, div, body, container;

	body = document.getElementsByTagName( "body" )[ 0 ];
	if ( !body || !body.style ) {

		// Return for frameset docs that don't have a body
		return;
	}

	// Setup
	div = document.createElement( "div" );
	container = document.createElement( "div" );
	container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
	body.appendChild( container ).appendChild( div );

	if ( typeof div.style.zoom !== "undefined" ) {

		// Support: IE<8
		// Check if natively block-level elements act like inline-block
		// elements when setting their display to 'inline' and giving
		// them layout
		div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";

		support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
		if ( val ) {

			// Prevent IE 6 from affecting layout for positioned elements #11048
			// Prevent IE from shrinking the body in IE 7 mode #12869
			// Support: IE<8
			body.style.zoom = 1;
		}
	}

	body.removeChild( container );
} );


( function() {
	var div = document.createElement( "div" );

	// Support: IE<9
	support.deleteExpando = true;
	try {
		delete div.test;
	} catch ( e ) {
		support.deleteExpando = false;
	}

	// Null elements to avoid leaks in IE.
	div = null;
} )();
var acceptData = function( elem ) {
	var noData = jQuery.noData[ ( elem.nodeName + " " ).toLowerCase() ],
		nodeType = +elem.nodeType || 1;

	// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
	return nodeType !== 1 && nodeType !== 9 ?
		false :

		// Nodes accept data unless otherwise specified; rejection can be conditional
		!noData || noData !== true && elem.getAttribute( "classid" ) === noData;
};




var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {

		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :

					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			jQuery.data( elem, key, data );

		} else {
			data = undefined;
		}
	}

	return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
	var name;
	for ( name in obj ) {

		// if the public data object is empty, the private is still empty
		if ( name === "data" && jQuery.isEmptyObject( obj[ name ] ) ) {
			continue;
		}
		if ( name !== "toJSON" ) {
			return false;
		}
	}

	return true;
}

function internalData( elem, name, data, pvt /* Internal Use Only */ ) {
	if ( !acceptData( elem ) ) {
		return;
	}

	var ret, thisCache,
		internalKey = jQuery.expando,

		// We have to handle DOM nodes and JS objects differently because IE6-7
		// can't GC object references properly across the DOM-JS boundary
		isNode = elem.nodeType,

		// Only DOM nodes need the global jQuery cache; JS object data is
		// attached directly to the object so GC can occur automatically
		cache = isNode ? jQuery.cache : elem,

		// Only defining an ID for JS objects if its cache already exists allows
		// the code to shortcut on the same path as a DOM node with no cache
		id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

	// Avoid doing any more work than we need to when trying to get data on an
	// object that has no data at all
	if ( ( !id || !cache[ id ] || ( !pvt && !cache[ id ].data ) ) &&
		data === undefined && typeof name === "string" ) {
		return;
	}

	if ( !id ) {

		// Only DOM nodes need a new unique ID for each element since their data
		// ends up in the global cache
		if ( isNode ) {
			id = elem[ internalKey ] = deletedIds.pop() || jQuery.guid++;
		} else {
			id = internalKey;
		}
	}

	if ( !cache[ id ] ) {

		// Avoid exposing jQuery metadata on plain JS objects when the object
		// is serialized using JSON.stringify
		cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
	}

	// An object can be passed to jQuery.data instead of a key/value pair; this gets
	// shallow copied over onto the existing cache
	if ( typeof name === "object" || typeof name === "function" ) {
		if ( pvt ) {
			cache[ id ] = jQuery.extend( cache[ id ], name );
		} else {
			cache[ id ].data = jQuery.extend( cache[ id ].data, name );
		}
	}

	thisCache = cache[ id ];

	// jQuery data() is stored in a separate object inside the object's internal data
	// cache in order to avoid key collisions between internal data and user-defined
	// data.
	if ( !pvt ) {
		if ( !thisCache.data ) {
			thisCache.data = {};
		}

		thisCache = thisCache.data;
	}

	if ( data !== undefined ) {
		thisCache[ jQuery.camelCase( name ) ] = data;
	}

	// Check for both converted-to-camel and non-converted data property names
	// If a data property was specified
	if ( typeof name === "string" ) {

		// First Try to find as-is property data
		ret = thisCache[ name ];

		// Test for null|undefined property data
		if ( ret == null ) {

			// Try to find the camelCased property
			ret = thisCache[ jQuery.camelCase( name ) ];
		}
	} else {
		ret = thisCache;
	}

	return ret;
}

function internalRemoveData( elem, name, pvt ) {
	if ( !acceptData( elem ) ) {
		return;
	}

	var thisCache, i,
		isNode = elem.nodeType,

		// See jQuery.data for more information
		cache = isNode ? jQuery.cache : elem,
		id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

	// If there is already no cache entry for this object, there is no
	// purpose in continuing
	if ( !cache[ id ] ) {
		return;
	}

	if ( name ) {

		thisCache = pvt ? cache[ id ] : cache[ id ].data;

		if ( thisCache ) {

			// Support array or space separated string names for data keys
			if ( !jQuery.isArray( name ) ) {

				// try the string as a key before any manipulation
				if ( name in thisCache ) {
					name = [ name ];
				} else {

					// split the camel cased version by spaces unless a key with the spaces exists
					name = jQuery.camelCase( name );
					if ( name in thisCache ) {
						name = [ name ];
					} else {
						name = name.split( " " );
					}
				}
			} else {

				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = name.concat( jQuery.map( name, jQuery.camelCase ) );
			}

			i = name.length;
			while ( i-- ) {
				delete thisCache[ name[ i ] ];
			}

			// If there is no data left in the cache, we want to continue
			// and let the cache object itself get destroyed
			if ( pvt ? !isEmptyDataObject( thisCache ) : !jQuery.isEmptyObject( thisCache ) ) {
				return;
			}
		}
	}

	// See jQuery.data for more information
	if ( !pvt ) {
		delete cache[ id ].data;

		// Don't destroy the parent cache unless the internal data object
		// had been the only thing left in it
		if ( !isEmptyDataObject( cache[ id ] ) ) {
			return;
		}
	}

	// Destroy the cache
	if ( isNode ) {
		jQuery.cleanData( [ elem ], true );

	// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
	/* jshint eqeqeq: false */
	} else if ( support.deleteExpando || cache != cache.window ) {
		/* jshint eqeqeq: true */
		delete cache[ id ];

	// When all else fails, undefined
	} else {
		cache[ id ] = undefined;
	}
}

jQuery.extend( {
	cache: {},

	// The following elements (space-suffixed to avoid Object.prototype collisions)
	// throw uncatchable exceptions if you attempt to set expando properties
	noData: {
		"applet ": true,
		"embed ": true,

		// ...but Flash objects (which have this classid) *can* handle expandos
		"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
	},

	hasData: function( elem ) {
		elem = elem.nodeType ? jQuery.cache[ elem[ jQuery.expando ] ] : elem[ jQuery.expando ];
		return !!elem && !isEmptyDataObject( elem );
	},

	data: function( elem, name, data ) {
		return internalData( elem, name, data );
	},

	removeData: function( elem, name ) {
		return internalRemoveData( elem, name );
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return internalData( elem, name, data, true );
	},

	_removeData: function( elem, name ) {
		return internalRemoveData( elem, name, true );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Special expections of .data basically thwart jQuery.access,
		// so implement the relevant behavior ourselves

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = jQuery.data( elem );

				if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					jQuery._data( elem, "parsedAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				jQuery.data( this, key );
			} );
		}

		return arguments.length > 1 ?

			// Sets one value
			this.each( function() {
				jQuery.data( this, key, value );
			} ) :

			// Gets one value
			// Try to fetch any internally stored data first
			elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : undefined;
	},

	removeData: function( key ) {
		return this.each( function() {
			jQuery.removeData( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = jQuery._data( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = jQuery._data( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// not intended for public consumption - generates a queueHooks object,
	// or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return jQuery._data( elem, key ) || jQuery._data( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				jQuery._removeData( elem, type + "queue" );
				jQuery._removeData( elem, key );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = jQuery._data( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );


( function() {
	var shrinkWrapBlocksVal;

	support.shrinkWrapBlocks = function() {
		if ( shrinkWrapBlocksVal != null ) {
			return shrinkWrapBlocksVal;
		}

		// Will be changed later if needed.
		shrinkWrapBlocksVal = false;

		// Minified: var b,c,d
		var div, body, container;

		body = document.getElementsByTagName( "body" )[ 0 ];
		if ( !body || !body.style ) {

			// Test fired too early or in an unsupported environment, exit.
			return;
		}

		// Setup
		div = document.createElement( "div" );
		container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );

		// Support: IE6
		// Check if elements with layout shrink-wrap their children
		if ( typeof div.style.zoom !== "undefined" ) {

			// Reset CSS: box-sizing; display; margin; border
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;" +
				"padding:1px;width:1px;zoom:1";
			div.appendChild( document.createElement( "div" ) ).style.width = "5px";
			shrinkWrapBlocksVal = div.offsetWidth !== 3;
		}

		body.removeChild( container );

		return shrinkWrapBlocksVal;
	};

} )();
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {

		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" ||
			!jQuery.contains( elem.ownerDocument, elem );
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() { return tween.cur(); } :
			function() { return jQuery.css( elem, prop, "" ); },
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		length = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < length; i++ ) {
				fn(
					elems[ i ],
					key,
					raw ? value : value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			length ? fn( elems[ 0 ], key ) : emptyGet;
};
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([\w:-]+)/ );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );

var rleadingWhitespace = ( /^\s+/ );

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|" +
		"details|dialog|figcaption|figure|footer|header|hgroup|main|" +
		"mark|meter|nav|output|picture|progress|section|summary|template|time|video";



function createSafeFragment( document ) {
	var list = nodeNames.split( "|" ),
		safeFrag = document.createDocumentFragment();

	if ( safeFrag.createElement ) {
		while ( list.length ) {
			safeFrag.createElement(
				list.pop()
			);
		}
	}
	return safeFrag;
}


( function() {
	var div = document.createElement( "div" ),
		fragment = document.createDocumentFragment(),
		input = document.createElement( "input" );

	// Setup
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

	// IE strips leading whitespace when .innerHTML is used
	support.leadingWhitespace = div.firstChild.nodeType === 3;

	// Make sure that tbody elements aren't automatically inserted
	// IE will insert them into empty tables
	support.tbody = !div.getElementsByTagName( "tbody" ).length;

	// Make sure that link elements get serialized correctly by innerHTML
	// This requires a wrapper element in IE
	support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;

	// Makes sure cloning an html5 element does not cause problems
	// Where outerHTML is undefined, this still works
	support.html5Clone =
		document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	input.type = "checkbox";
	input.checked = true;
	fragment.appendChild( input );
	support.appendChecked = input.checked;

	// Make sure textarea (and checkbox) defaultValue is properly cloned
	// Support: IE6-IE11+
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// #11217 - WebKit loses check when the name is after the checked attribute
	fragment.appendChild( div );

	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input = document.createElement( "input" );
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
	// old WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<9
	// Cloned elements keep attachEvent handlers, we use addEventListener on IE9+
	support.noCloneEvent = !!div.addEventListener;

	// Support: IE<9
	// Since attributes and properties are the same in IE,
	// cleanData must set properties to undefined rather than use removeAttribute
	div[ jQuery.expando ] = 1;
	support.attributes = !div.getAttribute( jQuery.expando );
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {
	option: [ 1, "<select multiple='multiple'>", "</select>" ],
	legend: [ 1, "<fieldset>", "</fieldset>" ],
	area: [ 1, "<map>", "</map>" ],

	// Support: IE8
	param: [ 1, "<object>", "</object>" ],
	thead: [ 1, "<table>", "</table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
	// unless wrapped in a div with non-breaking characters in front of it.
	_default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
};

// Support: IE8-IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {
	var elems, elem,
		i = 0,
		found = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== "undefined" ?
				context.querySelectorAll( tag || "*" ) :
				undefined;

	if ( !found ) {
		for ( found = [], elems = context.childNodes || context;
			( elem = elems[ i ] ) != null;
			i++
		) {
			if ( !tag || jQuery.nodeName( elem, tag ) ) {
				found.push( elem );
			} else {
				jQuery.merge( found, getAll( elem, tag ) );
			}
		}
	}

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], found ) :
		found;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var elem,
		i = 0;
	for ( ; ( elem = elems[ i ] ) != null; i++ ) {
		jQuery._data(
			elem,
			"globalEval",
			!refElements || jQuery._data( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/,
	rtbody = /<tbody/i;

function fixDefaultChecked( elem ) {
	if ( rcheckableType.test( elem.type ) ) {
		elem.defaultChecked = elem.checked;
	}
}

function buildFragment( elems, context, scripts, selection, ignored ) {
	var j, elem, contains,
		tmp, tag, tbody, wrap,
		l = elems.length,

		// Ensure a safe fragment
		safe = createSafeFragment( context ),

		nodes = [],
		i = 0;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || safe.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;

				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Manually add leading whitespace removed by IE
				if ( !support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
					nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[ 0 ] ) );
				}

				// Remove IE's autoinserted <tbody> from table fragments
				if ( !support.tbody ) {

					// String was a <table>, *may* have spurious <tbody>
					elem = tag === "table" && !rtbody.test( elem ) ?
						tmp.firstChild :

						// String was a bare <thead> or <tfoot>
						wrap[ 1 ] === "<table>" && !rtbody.test( elem ) ?
							tmp :
							0;

					j = elem && elem.childNodes.length;
					while ( j-- ) {
						if ( jQuery.nodeName( ( tbody = elem.childNodes[ j ] ), "tbody" ) &&
							!tbody.childNodes.length ) {

							elem.removeChild( tbody );
						}
					}
				}

				jQuery.merge( nodes, tmp.childNodes );

				// Fix #12392 for WebKit and IE > 9
				tmp.textContent = "";

				// Fix #12392 for oldIE
				while ( tmp.firstChild ) {
					tmp.removeChild( tmp.firstChild );
				}

				// Remember the top-level container for proper cleanup
				tmp = safe.lastChild;
			}
		}
	}

	// Fix #11356: Clear elements from fragment
	if ( tmp ) {
		safe.removeChild( tmp );
	}

	// Reset defaultChecked for any radios and checkboxes
	// about to be appended to the DOM in IE 6/7 (#8060)
	if ( !support.appendChecked ) {
		jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
	}

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}

			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( safe.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	tmp = null;

	return safe;
}


( function() {
	var i, eventName,
		div = document.createElement( "div" );

	// Support: IE<9 (lack submit/change bubble), Firefox (lack focus(in | out) events)
	for ( i in { submit: true, change: true, focusin: true } ) {
		eventName = "on" + i;

		if ( !( support[ i ] = eventName in window ) ) {

			// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
			div.setAttribute( eventName, "t" );
			support[ i ] = div.attributes[ eventName ].expando === false;
		}
	}

	// Null elements to avoid leaks in IE.
	div = null;
} )();


var rformElems = /^(?:input|select|textarea)$/i,
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE9
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {
		var tmp, events, t, handleObjIn,
			special, eventHandle, handleObj,
			handlers, type, namespaces, origType,
			elemData = jQuery._data( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" &&
					( !e || jQuery.event.triggered !== e.type ) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};

			// Add elem as a property of the handle fn to prevent a memory leak
			// with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener/attachEvent if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					// Bind the global event handler to the element
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );

					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {
		var j, handleObj, tmp,
			origCount, t, events,
			special, handlers, type,
			namespaces, origType,
			elemData = jQuery.hasData( elem ) && jQuery._data( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;

			// removeData also checks for emptiness and clears the expando if empty
			// so use it instead of delete
			jQuery._removeData( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {
		var handle, ontype, cur,
			bubbleType, special, tmp, i,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] &&
				jQuery._data( cur, "handle" );

			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if (
				( !special._default ||
				 special._default.apply( eventPath.pop(), data ) === false
				) && acceptData( elem )
			) {

				// Call a native DOM method on the target with the same name name as the event.
				// Can't use an .isFunction() check here because IE6/7 fails that test.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					try {
						elem[ type ]();
					} catch ( e ) {

						// IE<9 dies on focus/blur to hidden element (#1486,#12518)
						// only reproducible on winXP IE8 native, not IE9 in IE8 mode
					}
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Support (at least): Chrome, IE9
		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		//
		// Support: Firefox<=42+
		// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
		if ( delegateCount && cur.nodeType &&
			( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

			/* jshint eqeqeq: false */
			for ( ; cur != this; cur = cur.parentNode || this ) {
				/* jshint eqeqeq: true */

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push( { elem: cur, handlers: matches } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: IE<9
		// Fix target property (#1925)
		if ( !event.target ) {
			event.target = originalEvent.srcElement || document;
		}

		// Support: Safari 6-8+
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		// Support: IE<9
		// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
		event.metaKey = !!event.metaKey;

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
		"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split( " " ),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: ( "button buttons clientX clientY fromElement offsetX offsetY " +
			"pageX pageY screenX screenY toElement" ).split( " " ),
		filter: function( event, original ) {
			var body, eventDoc, doc,
				button = original.button,
				fromElement = original.fromElement;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX +
					( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
					( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY +
					( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
					( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add relatedTarget, if necessary
			if ( !event.relatedTarget && fromElement ) {
				event.relatedTarget = fromElement === event.target ?
					original.toElement :
					fromElement;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					try {
						this.focus();
						return false;
					} catch ( e ) {

						// Support: IE<9
						// If we error on focus to hidden element (#1486, #12518),
						// let .trigger() run the handlers
					}
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	// Piggyback on a donor event to simulate a different one
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true

				// Previously, `originalEvent: {}` was set here, so stopPropagation call
				// would not be triggered on donor event, since in our own
				// jQuery.event.stopPropagation function we had a check for existence of
				// originalEvent.stopPropagation method, so, consequently it would be a noop.
				//
				// Guard for simulated events was moved to jQuery.event.stopPropagation function
				// since `originalEvent` should point to the original event for the
				// constancy with other events and for more focused logic
			}
		);

		jQuery.event.trigger( e, null, elem );

		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = document.removeEventListener ?
	function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	} :
	function( elem, type, handle ) {
		var name = "on" + type;

		if ( elem.detachEvent ) {

			// #8545, #7054, preventing memory leaks for custom events in IE6-8
			// detachEvent needed property on element, by name of that event,
			// to properly expose it to GC
			if ( typeof elem[ name ] === "undefined" ) {
				elem[ name ] = null;
			}

			elem.detachEvent( name, handle );
		}
	};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: IE < 9, Android < 4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;
		if ( !e ) {
			return;
		}

		// If preventDefault exists, run it on the original event
		if ( e.preventDefault ) {
			e.preventDefault();

		// Support: IE
		// Otherwise set the returnValue property of the original event to false
		} else {
			e.returnValue = false;
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( !e || this.isSimulated ) {
			return;
		}

		// If stopPropagation exists, run it on the original event
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}

		// Support: IE
		// Set the cancelBubble property of the original event to true
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://code.google.com/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

// IE submit delegation
if ( !support.submit ) {

	jQuery.event.special.submit = {
		setup: function() {

			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Lazy-add a submit handler when a descendant form may potentially be submitted
			jQuery.event.add( this, "click._submit keypress._submit", function( e ) {

				// Node name check avoids a VML-related crash in IE (#9807)
				var elem = e.target,
					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ?

						// Support: IE <=8
						// We use jQuery.prop instead of elem.form
						// to allow fixing the IE8 delegated submit issue (gh-2332)
						// by 3rd party polyfills/workarounds.
						jQuery.prop( elem, "form" ) :
						undefined;

				if ( form && !jQuery._data( form, "submit" ) ) {
					jQuery.event.add( form, "submit._submit", function( event ) {
						event._submitBubble = true;
					} );
					jQuery._data( form, "submit", true );
				}
			} );

			// return undefined since we don't need an event listener
		},

		postDispatch: function( event ) {

			// If form was submitted by the user, bubble the event up the tree
			if ( event._submitBubble ) {
				delete event._submitBubble;
				if ( this.parentNode && !event.isTrigger ) {
					jQuery.event.simulate( "submit", this.parentNode, event );
				}
			}
		},

		teardown: function() {

			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
			jQuery.event.remove( this, "._submit" );
		}
	};
}

// IE change delegation and checkbox/radio fix
if ( !support.change ) {

	jQuery.event.special.change = {

		setup: function() {

			if ( rformElems.test( this.nodeName ) ) {

				// IE doesn't fire change on a check/radio until blur; trigger it on click
				// after a propertychange. Eat the blur-change in special.change.handle.
				// This still fires onchange a second time for check/radio after blur.
				if ( this.type === "checkbox" || this.type === "radio" ) {
					jQuery.event.add( this, "propertychange._change", function( event ) {
						if ( event.originalEvent.propertyName === "checked" ) {
							this._justChanged = true;
						}
					} );
					jQuery.event.add( this, "click._change", function( event ) {
						if ( this._justChanged && !event.isTrigger ) {
							this._justChanged = false;
						}

						// Allow triggered, simulated change events (#11500)
						jQuery.event.simulate( "change", this, event );
					} );
				}
				return false;
			}

			// Delegated event; lazy-add a change handler on descendant inputs
			jQuery.event.add( this, "beforeactivate._change", function( e ) {
				var elem = e.target;

				if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "change" ) ) {
					jQuery.event.add( elem, "change._change", function( event ) {
						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
							jQuery.event.simulate( "change", this.parentNode, event );
						}
					} );
					jQuery._data( elem, "change", true );
				}
			} );
		},

		handle: function( event ) {
			var elem = event.target;

			// Swallow native change events from checkbox/radio, we already triggered them above
			if ( this !== elem || event.isSimulated || event.isTrigger ||
				( elem.type !== "radio" && elem.type !== "checkbox" ) ) {

				return event.handleObj.handler.apply( this, arguments );
			}
		},

		teardown: function() {
			jQuery.event.remove( this, "._change" );

			return !rformElems.test( this.nodeName );
		}
	};
}

// Support: Firefox
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome, Safari
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				jQuery._data( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					jQuery._removeData( doc, fix );
				} else {
					jQuery._data( doc, fix, attaches );
				}
			}
		};
	} );
}

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	},

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


var rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
	rnoshimcache = new RegExp( "<(?:" + nodeNames + ")[\\s/>]", "i" ),
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

	// Support: IE 10-11, Edge 10240+
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	safeFragment = createSafeFragment( document ),
	fragmentDiv = safeFragment.appendChild( document.createElement( "div" ) );

// Support: IE<8
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName( "tbody" )[ 0 ] ||
			elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( jQuery.find.attr( elem, "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );
	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}
	return elem;
}

function cloneCopyEvent( src, dest ) {
	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
		return;
	}

	var type, i, l,
		oldData = jQuery._data( src ),
		curData = jQuery._data( dest, oldData ),
		events = oldData.events;

	if ( events ) {
		delete curData.handle;
		curData.events = {};

		for ( type in events ) {
			for ( i = 0, l = events[ type ].length; i < l; i++ ) {
				jQuery.event.add( dest, type, events[ type ][ i ] );
			}
		}
	}

	// make the cloned public data object a copy from the original
	if ( curData.data ) {
		curData.data = jQuery.extend( {}, curData.data );
	}
}

function fixCloneNodeIssues( src, dest ) {
	var nodeName, e, data;

	// We do not need to do anything for non-Elements
	if ( dest.nodeType !== 1 ) {
		return;
	}

	nodeName = dest.nodeName.toLowerCase();

	// IE6-8 copies events bound via attachEvent when using cloneNode.
	if ( !support.noCloneEvent && dest[ jQuery.expando ] ) {
		data = jQuery._data( dest );

		for ( e in data.events ) {
			jQuery.removeEvent( dest, e, data.handle );
		}

		// Event data gets referenced instead of copied if the expando gets copied too
		dest.removeAttribute( jQuery.expando );
	}

	// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
	if ( nodeName === "script" && dest.text !== src.text ) {
		disableScript( dest ).text = src.text;
		restoreScript( dest );

	// IE6-10 improperly clones children of object elements using classid.
	// IE10 throws NoModificationAllowedError if parent is null, #12132.
	} else if ( nodeName === "object" ) {
		if ( dest.parentNode ) {
			dest.outerHTML = src.outerHTML;
		}

		// This path appears unavoidable for IE9. When cloning an object
		// element in IE9, the outerHTML strategy above is not sufficient.
		// If the src has innerHTML and the destination does not,
		// copy the src.innerHTML into the dest.innerHTML. #10324
		if ( support.html5Clone && ( src.innerHTML && !jQuery.trim( dest.innerHTML ) ) ) {
			dest.innerHTML = src.innerHTML;
		}

	} else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {

		// IE6-8 fails to persist the checked state of a cloned checkbox
		// or radio button. Worse, IE6-7 fail to give the cloned element
		// a checked appearance if the defaultChecked value isn't also set

		dest.defaultChecked = dest.checked = src.checked;

		// IE6-7 get confused and end up setting the value of a cloned
		// checkbox/radio button to an empty string instead of "on"
		if ( dest.value !== src.value ) {
			dest.value = src.value;
		}

	// IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	} else if ( nodeName === "option" ) {
		dest.defaultSelected = dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var first, node, hasScripts,
		scripts, doc, fragment,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android<4.1, PhantomJS<2
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!jQuery._data( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							jQuery.globalEval(
								( node.text || node.textContent || node.innerHTML || "" )
									.replace( rcleanScript, "" )
							);
						}
					}
				}
			}

			// Fix #11809: Avoid leaking memory
			fragment = first = null;
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		elems = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = elems[ i ] ) != null; i++ ) {

		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var destElements, node, clone, i, srcElements,
			inPage = jQuery.contains( elem.ownerDocument, elem );

		if ( support.html5Clone || jQuery.isXMLDoc( elem ) ||
			!rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {

			clone = elem.cloneNode( true );

		// IE<=8 does not properly clone detached, unknown element nodes
		} else {
			fragmentDiv.innerHTML = elem.outerHTML;
			fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
		}

		if ( ( !support.noCloneEvent || !support.noCloneChecked ) &&
				( elem.nodeType === 1 || elem.nodeType === 11 ) && !jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			// Fix all IE cloning issues
			for ( i = 0; ( node = srcElements[ i ] ) != null; ++i ) {

				// Ensure that the destination node is not null; Fixes #9587
				if ( destElements[ i ] ) {
					fixCloneNodeIssues( node, destElements[ i ] );
				}
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0; ( node = srcElements[ i ] ) != null; i++ ) {
					cloneCopyEvent( node, destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		destElements = srcElements = node = null;

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems, /* internal */ forceAcceptData ) {
		var elem, type, id, data,
			i = 0,
			internalKey = jQuery.expando,
			cache = jQuery.cache,
			attributes = support.attributes,
			special = jQuery.event.special;

		for ( ; ( elem = elems[ i ] ) != null; i++ ) {
			if ( forceAcceptData || acceptData( elem ) ) {

				id = elem[ internalKey ];
				data = id && cache[ id ];

				if ( data ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Remove cache only if it was not already removed by jQuery.event.remove
					if ( cache[ id ] ) {

						delete cache[ id ];

						// Support: IE<9
						// IE does not allow us to delete expando properties from nodes
						// IE creates expando attributes along with the property
						// IE does not have a removeAttribute function on Document nodes
						if ( !attributes && typeof elem.removeAttribute !== "undefined" ) {
							elem.removeAttribute( internalKey );

						// Webkit & Blink performance suffers when deleting properties
						// from DOM nodes, so set to undefined instead
						// https://code.google.com/p/chromium/issues/detail?id=378607
						} else {
							elem[ internalKey ] = undefined;
						}

						deletedIds.push( id );
					}
				}
			}
		}
	}
} );

jQuery.fn.extend( {

	// Keep domManip exposed until 3.0 (gh-2225)
	domManip: domManip,

	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().append(
					( this[ 0 ] && this[ 0 ].ownerDocument || document ).createTextNode( value )
				);
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {

			// Remove element nodes and prevent memory leaks
			if ( elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem, false ) );
			}

			// Remove any remaining nodes
			while ( elem.firstChild ) {
				elem.removeChild( elem.firstChild );
			}

			// If this is a select, ensure that it displays empty (#12336)
			// Support: IE<9
			if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
				elem.options.length = 0;
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined ) {
				return elem.nodeType === 1 ?
					elem.innerHTML.replace( rinlinejQuery, "" ) :
					undefined;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				( support.htmlSerialize || !rnoshimcache.test( value )  ) &&
				( support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {

						// Remove element nodes and prevent memory leaks
						elem = this[ i ] || {};
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			i = 0,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );


var iframe,
	elemdisplay = {

		// Support: Firefox
		// We have to pre-define these values for FF (#10227)
		HTML: "block",
		BODY: "block"
	};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */

// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		display = jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
				.appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = ( iframe[ 0 ].contentWindow || iframe[ 0 ].contentDocument ).document;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var documentElement = document.documentElement;



( function() {
	var pixelPositionVal, pixelMarginRightVal, boxSizingReliableVal,
		reliableHiddenOffsetsVal, reliableMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	div.style.cssText = "float:left;opacity:.5";

	// Support: IE<9
	// Make sure that element opacity exists (as opposed to filter)
	support.opacity = div.style.opacity === "0.5";

	// Verify style float existence
	// (IE uses styleFloat instead of cssFloat)
	support.cssFloat = !!div.style.cssFloat;

	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container = document.createElement( "div" );
	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	div.innerHTML = "";
	container.appendChild( div );

	// Support: Firefox<29, Android 2.3
	// Vendor-prefix box-sizing
	support.boxSizing = div.style.boxSizing === "" || div.style.MozBoxSizing === "" ||
		div.style.WebkitBoxSizing === "";

	jQuery.extend( support, {
		reliableHiddenOffsets: function() {
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableHiddenOffsetsVal;
		},

		boxSizingReliable: function() {

			// We're checking for pixelPositionVal here instead of boxSizingReliableVal
			// since that compresses better and they're computed together anyway.
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return boxSizingReliableVal;
		},

		pixelMarginRight: function() {

			// Support: Android 4.0-4.3
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return pixelMarginRightVal;
		},

		pixelPosition: function() {
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return pixelPositionVal;
		},

		reliableMarginRight: function() {

			// Support: Android 2.3
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableMarginRightVal;
		},

		reliableMarginLeft: function() {

			// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableMarginLeftVal;
		}
	} );

	function computeStyleTests() {
		var contents, divStyle,
			documentElement = document.documentElement;

		// Setup
		documentElement.appendChild( container );

		div.style.cssText =

			// Support: Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";

		// Support: IE<9
		// Assume reasonable values in the absence of getComputedStyle
		pixelPositionVal = boxSizingReliableVal = reliableMarginLeftVal = false;
		pixelMarginRightVal = reliableMarginRightVal = true;

		// Check for getComputedStyle so that this code is not run in IE<9.
		if ( window.getComputedStyle ) {
			divStyle = window.getComputedStyle( div );
			pixelPositionVal = ( divStyle || {} ).top !== "1%";
			reliableMarginLeftVal = ( divStyle || {} ).marginLeft === "2px";
			boxSizingReliableVal = ( divStyle || { width: "4px" } ).width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = ( divStyle || { marginRight: "4px" } ).marginRight === "4px";

			// Support: Android 2.3 only
			// Div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container (#3333)
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			contents = div.appendChild( document.createElement( "div" ) );

			// Reset CSS: box-sizing; display; margin; border; padding
			contents.style.cssText = div.style.cssText =

				// Support: Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
			contents.style.marginRight = contents.style.width = "0";
			div.style.width = "1px";

			reliableMarginRightVal =
				!parseFloat( ( window.getComputedStyle( contents ) || {} ).marginRight );

			div.removeChild( contents );
		}

		// Support: IE6-8
		// First check that getClientRects works as expected
		// Check if table cells still have offsetWidth/Height when they are set
		// to display:none and there are still other visible table cells in a
		// table row; if so, offsetWidth/Height are not reliable for use when
		// determining if an element has been hidden directly using
		// display:none (it is still safe to use offsets if a parent element is
		// hidden; don safety goggles and see bug #4512 for more information).
		div.style.display = "none";
		reliableHiddenOffsetsVal = div.getClientRects().length === 0;
		if ( reliableHiddenOffsetsVal ) {
			div.style.display = "";
			div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
			div.childNodes[ 0 ].style.borderCollapse = "separate";
			contents = div.getElementsByTagName( "td" );
			contents[ 0 ].style.cssText = "margin:0;border:0;padding:0;display:none";
			reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
			if ( reliableHiddenOffsetsVal ) {
				contents[ 0 ].style.display = "";
				contents[ 1 ].style.display = "none";
				reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
			}
		}

		// Teardown
		documentElement.removeChild( container );
	}

} )();


var getStyles, curCSS,
	rposition = /^(top|right|bottom|left)$/;

if ( window.getComputedStyle ) {
	getStyles = function( elem ) {

		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

	curCSS = function( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// getPropertyValue is only needed for .css('filter') in IE9, see #12537
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		if ( computed ) {

			// A tribute to the "awesome hack by Dean Edwards"
			// Chrome < 17 and Safari 5.0 uses "computed value"
			// instead of "used value" for margin-right
			// Safari 5.1.7 (at least) returns percentage for a larger set of values,
			// but width seems to be reliably pixels
			// this is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "";
	};
} else if ( documentElement.currentStyle ) {
	getStyles = function( elem ) {
		return elem.currentStyle;
	};

	curCSS = function( elem, name, computed ) {
		var left, rs, rsLeft, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed[ name ] : undefined;

		// Avoid setting ret to empty string here
		// so we don't default to auto
		if ( ret == null && style && style[ name ] ) {
			ret = style[ name ];
		}

		// From the awesome hack by Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// If we're not dealing with a regular pixel number
		// but a number that has a weird ending, we need to convert it to pixels
		// but not position css attributes, as those are
		// proportional to the parent element instead
		// and we can't measure the parent instead because it
		// might trigger a "stacking dolls" problem
		if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

			// Remember the original values
			left = style.left;
			rs = elem.runtimeStyle;
			rsLeft = rs && rs.left;

			// Put in the new values to get a computed value out
			if ( rsLeft ) {
				rs.left = elem.currentStyle.left;
			}
			style.left = name === "fontSize" ? "1em" : ret;
			ret = style.pixelLeft + "px";

			// Revert the changed values
			style.left = left;
			if ( rsLeft ) {
				rs.left = rsLeft;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "" || "auto";
	};
}




function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

		ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity\s*=\s*([^)]*)/i,

	// swappable if display is none or starts with table except
	// "table", "table-cell", or "table-caption"
	// see here for display values:
	// https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;


// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// check for vendor prefixed names
	var capName = name.charAt( 0 ).toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = jQuery._data( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {

			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] =
					jQuery._data( elem, "olddisplay", defaultDisplay( elem.nodeName ) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display && display !== "none" || !hidden ) {
				jQuery._data(
					elem,
					"olddisplay",
					hidden ? display : jQuery.css( elem, "display" )
				);
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?

		// If we already have the right measurement, avoid augmentation
		4 :

		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {

		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// at this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = support.boxSizing &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {

		// normalize float css property
		"float": support.cssFloat ? "cssFloat" : "styleFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set. See: #7116
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
			// but it would mean to define eight
			// (for every problematic property) identical functions
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				// Support: IE
				// Swallow errors from 'invalid' CSS values (#5509)
				try {
					style[ name ] = value;
				} catch ( e ) {}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var num, val, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
					elem.offsetWidth === 0 ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					support.boxSizing &&
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
} );

if ( !support.opacity ) {
	jQuery.cssHooks.opacity = {
		get: function( elem, computed ) {

			// IE uses filters for opacity
			return ropacity.test( ( computed && elem.currentStyle ?
				elem.currentStyle.filter :
				elem.style.filter ) || "" ) ?
					( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
					computed ? "1" : "";
		},

		set: function( elem, value ) {
			var style = elem.style,
				currentStyle = elem.currentStyle,
				opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
				filter = currentStyle && currentStyle.filter || style.filter || "";

			// IE has trouble with opacity if it does not have layout
			// Force it by setting the zoom level
			style.zoom = 1;

			// if setting opacity to 1, and no other filters exist -
			// attempt to remove filter attribute #6652
			// if value === "", then remove inline opacity #12685
			if ( ( value >= 1 || value === "" ) &&
					jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
					style.removeAttribute ) {

				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
				// if "filter:" is present at all, clearType is disabled, we want to avoid this
				// style.removeAttribute is IE Only, but so apparently is this code path...
				style.removeAttribute( "filter" );

				// if there is no filter style applied in a css rule
				// or unset inline opacity, we are done
				if ( value === "" || currentStyle && !currentStyle.filter ) {
					return;
				}
			}

			// otherwise, set new filter values
			style.filter = ralpha.test( filter ) ?
				filter.replace( ralpha, opacity ) :
				filter + " " + opacity;
		}
	};
}

jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return (
				parseFloat( curCSS( elem, "marginLeft" ) ) ||

				// Support: IE<=11+
				// Running getBoundingClientRect on a disconnected node in IE throws an error
				// Support: IE8 only
				// getClientRects() errors on disconnected elems
				( jQuery.contains( elem.ownerDocument, elem ) ?
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} ) :
					0
				)
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9
// Panic based approach to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		attrs = { height: type },
		i = 0;

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// we're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = jQuery._data( elem, "fxshow" );

	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE does not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			jQuery._data( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {

			// inline-level elements accept inline-block;
			// block-level elements need to be inline with layout
			if ( !support.inlineBlockNeedsLayout || defaultDisplay( elem.nodeName ) === "inline" ) {
				style.display = "inline-block";
			} else {
				style.zoom = 1;
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		if ( !support.shrinkWrapBlocks() ) {
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show
				// and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = jQuery._data( elem, "fxshow", {} );
		}

		// store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done( function() {
				jQuery( elem ).hide();
			} );
		}
		anim.done( function() {
			var prop;
			jQuery._removeData( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		} );
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnotwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ?
			jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || jQuery._data( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = jQuery._data( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = jQuery._data( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// enable finishing flag on private data
			data.finish = true;

			// empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		timers = jQuery.timers,
		i = 0;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	window.clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var a,
		input = document.createElement( "input" ),
		div = document.createElement( "div" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	// Setup
	div = document.createElement( "div" );
	div.setAttribute( "className", "t" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	a = div.getElementsByTagName( "a" )[ 0 ];

	// Support: Windows Web Apps (WWA)
	// `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "checkbox" );
	div.appendChild( input );

	a = div.getElementsByTagName( "a" )[ 0 ];

	// First batch of tests.
	a.style.cssText = "top:1px";

	// Test setAttribute on camelCase class.
	// If it works, we need attrFixes when doing get/setAttribute (ie6/7)
	support.getSetAttribute = div.className !== "t";

	// Get the style information from getAttribute
	// (IE uses .cssText instead)
	support.style = /top/.test( a.getAttribute( "style" ) );

	// Make sure that URLs aren't manipulated
	// (IE normalizes it by default)
	support.hrefNormalized = a.getAttribute( "href" ) === "/a";

	// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
	support.checkOn = !!input.value;

	// Make sure that a selected-by-default option has a working selected property.
	// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
	support.optSelected = opt.selected;

	// Tests for enctype support on a form (#6743)
	support.enctype = !!document.createElement( "form" ).enctype;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE8 only
	// Check if we can trust getAttribute("value")
	input = document.createElement( "input" );
	input.setAttribute( "value", "" );
	support.input = input.getAttribute( "value" ) === "";

	// Check if an input maintains its value after becoming a radio
	input.value = "t";
	input.setAttribute( "type", "radio" );
	support.radioValue = input.value === "t";
} )();


var rreturn = /\r/g,
	rspaces = /[\x20\t\r\n\f]+/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if (
					hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?

					// handle most common string cases
					ret.replace( rreturn, "" ) :

					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// oldIE doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ?
								!option.disabled :
								option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1 ) {

						// Support: IE6
						// When new option element is added to select box we need to
						// force reflow of newly added node in order to workaround delay
						// of initialization properties
						try {
							option.selected = optionSet = true;

						} catch ( _ ) {

							// Will be executed only in IE6
							option.scrollHeight;
						}

					} else {
						option.selected = false;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}

				return options;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle,
	ruseDefault = /^(?:checked|selected)$/i,
	getSetAttribute = support.getSetAttribute,
	getSetInput = support.input;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {

					// Setting the type on a radio button after the value resets the value in IE8-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {

					// Set corresponding property to false
					if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
						elem[ propName ] = false;

					// Support: IE<9
					// Also clear defaultChecked/defaultSelected (if appropriate)
					} else {
						elem[ jQuery.camelCase( "default-" + name ) ] =
							elem[ propName ] = false;
					}

				// See #9699 for explanation of this approach (setting first, then removal)
				} else {
					jQuery.attr( elem, name, "" );
				}

				elem.removeAttribute( getSetAttribute ? name : propName );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {

			// IE<8 needs the *property* name
			elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

		} else {

			// Support: IE<9
			// Use defaultChecked and defaultSelected for oldIE
			elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} else {
		attrHandle[ name ] = function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem[ jQuery.camelCase( "default-" + name ) ] ?
					name.toLowerCase() :
					null;
			}
		};
	}
} );

// fix oldIE attroperties
if ( !getSetInput || !getSetAttribute ) {
	jQuery.attrHooks.value = {
		set: function( elem, value, name ) {
			if ( jQuery.nodeName( elem, "input" ) ) {

				// Does not return so that setAttribute is also used
				elem.defaultValue = value;
			} else {

				// Use nodeHook if defined (#1954); otherwise setAttribute is fine
				return nodeHook && nodeHook.set( elem, value, name );
			}
		}
	};
}

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = {
		set: function( elem, value, name ) {

			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) {
				elem.setAttributeNode(
					( ret = elem.ownerDocument.createAttribute( name ) )
				);
			}

			ret.value = value += "";

			// Break association with cloned elements by also using setAttribute (#9646)
			if ( name === "value" || value === elem.getAttribute( name ) ) {
				return value;
			}
		}
	};

	// Some attributes are constructed with empty-string values when not defined
	attrHandle.id = attrHandle.name = attrHandle.coords =
		function( elem, name, isXML ) {
			var ret;
			if ( !isXML ) {
				return ( ret = elem.getAttributeNode( name ) ) && ret.value !== "" ?
					ret.value :
					null;
			}
		};

	// Fixing value retrieval on a button requires this module
	jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret = elem.getAttributeNode( name );
			if ( ret && ret.specified ) {
				return ret.value;
			}
		},
		set: nodeHook.set
	};

	// Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = {
		set: function( elem, value, name ) {
			nodeHook.set( elem, value === "" ? false : value, name );
		}
	};

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each( [ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		};
	} );
}

if ( !support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {

			// Return undefined in the case of empty string
			// Note: IE uppercases css property names, but if we were to .toLowerCase()
			// .cssText, that would destroy case sensitivity in URL's, like in "background"
			return elem.style.cssText || undefined;
		},
		set: function( elem, value ) {
			return ( elem.style.cssText = value + "" );
		}
	};
}




var rfocusable = /^(?:input|select|textarea|button|object)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each( function() {

			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch ( e ) {}
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) && elem.href ?
							0 :
							-1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !support.hrefNormalized ) {

	// href/src property should get the full normalized URL (#10299/#12915)
	jQuery.each( [ "href", "src" ], function( i, name ) {
		jQuery.propHooks[ name ] = {
			get: function( elem ) {
				return elem.getAttribute( name, 4 );
			}
		};
	} );
}

// Support: Safari, IE9+
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;

			if ( parent ) {
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		},
		set: function( elem ) {
			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );

// IE6/7 call enctype encoding
if ( !support.enctype ) {
	jQuery.propFix.enctype = "encoding";
}




var rclass = /[\t\r\n\f]/g;

function getClass( elem ) {
	return jQuery.attr( elem, "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						jQuery.attr( elem, "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						jQuery.attr( elem, "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnotwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// store className if set
					jQuery._data( this, "__className__", className );
				}

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				jQuery.attr( this, "class",
					className || value === false ?
					"" :
					jQuery._data( this, "__className__" ) || ""
				);
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + getClass( elem ) + " " ).replace( rclass, " " )
					.indexOf( className ) > -1
			) {
				return true;
			}
		}

		return false;
	}
} );




// Return jQuery for attributes-only inclusion


jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );


var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

jQuery.parseJSON = function( data ) {

	// Attempt to parse using the native JSON parser first
	if ( window.JSON && window.JSON.parse ) {

		// Support: Android 2.3
		// Workaround failure to string-cast null input
		return window.JSON.parse( data + "" );
	}

	var requireNonComma,
		depth = null,
		str = jQuery.trim( data + "" );

	// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
	// after removing valid tokens
	return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {

		// Force termination if we see a misplaced comma
		if ( requireNonComma && comma ) {
			depth = 0;
		}

		// Perform no more replacements after returning to outermost depth
		if ( depth === 0 ) {
			return token;
		}

		// Commas must not follow "[", "{", or ","
		requireNonComma = open || comma;

		// Determine new depth
		// array/object open ("[" or "{"): depth += true - false (increment)
		// array/object close ("]" or "}"): depth += false - true (decrement)
		// other cases ("," or primitive): depth += true - true (numeric cast)
		depth += !close - !open;

		// Remove this token
		return "";
	} ) ) ?
		( Function( "return " + str ) )() :
		jQuery.error( "Invalid JSON: " + data );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	try {
		if ( window.DOMParser ) { // Standard
			tmp = new window.DOMParser();
			xml = tmp.parseFromString( data, "text/xml" );
		} else { // IE
			xml = new window.ActiveXObject( "Microsoft.XMLDOM" );
			xml.async = "false";
			xml.loadXML( data );
		}
	} catch ( e ) {
		xml = undefined;
	}
	if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,

	// IE leaves an \r character at EOL
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Document location
	ajaxLocation = location.href,

	// Segment location into parts
	ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType.charAt( 0 ) === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var deep, key,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {
	var firstDataType, ct, finalDataType, type,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) { // jscs:ignore requireDotNotation
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var

			// Cross-domain detection vars
			parts,

			// Loop variable
			i,

			// URL without anti-cache param
			cacheURL,

			// Response headers as string
			responseHeadersString,

			// timeout handle
			timeoutTimer,

			// To know if global events are to be dispatched
			fireGlobals,

			transport,

			// Response headers
			responseHeaders,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// The jqXHR state
			state = 0,

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {

								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" )
			.replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );

				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapAll( html.call( this, i ) );
			} );
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			var wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function() {
		return this.parent().each( function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		} ).end();
	}
} );


function getDisplay( elem ) {
	return elem.style && elem.style.display || jQuery.css( elem, "display" );
}

function filterHidden( elem ) {

	// Disconnected elements are considered hidden
	if ( !jQuery.contains( elem.ownerDocument || document, elem ) ) {
		return true;
	}
	while ( elem && elem.nodeType === 1 ) {
		if ( getDisplay( elem ) === "none" || elem.type === "hidden" ) {
			return true;
		}
		elem = elem.parentNode;
	}
	return false;
}

jQuery.expr.filters.hidden = function( elem ) {

	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return support.reliableHiddenOffsets() ?
		( elem.offsetWidth <= 0 && elem.offsetHeight <= 0 &&
			!elem.getClientRects().length ) :
			filterHidden( elem );
};

jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {

			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is(":disabled") so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} ) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?

	// Support: IE6-IE8
	function() {

		// XHR cannot access local files, always use ActiveX for that case
		if ( this.isLocal ) {
			return createActiveXHR();
		}

		// Support: IE 9-11
		// IE seems to error on cross-domain PATCH requests when ActiveX XHR
		// is used. In IE 9+ always use the native XHR.
		// Note: this condition won't catch Edge as it doesn't define
		// document.documentMode but it also doesn't support ActiveX so it won't
		// reach this code.
		if ( document.documentMode > 8 ) {
			return createStandardXHR();
		}

		// Support: IE<9
		// oldIE XHR does not support non-RFC2616 methods (#13240)
		// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
		// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
		// Although this check for six methods instead of eight
		// since IE also does not support "trace" and "connect"
		return /^(get|post|head|put|delete|options)$/i.test( this.type ) &&
			createStandardXHR() || createActiveXHR();
	} :

	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

var xhrId = 0,
	xhrCallbacks = {},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE<10
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
if ( window.attachEvent ) {
	window.attachEvent( "onunload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]( undefined, true );
		}
	} );
}

// Determine support properties
support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
xhrSupported = support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr
if ( xhrSupported ) {

	jQuery.ajaxTransport( function( options ) {

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !options.crossDomain || support.cors ) {

			var callback;

			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr(),
						id = ++xhrId;

					// Open the socket
					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {

						// Support: IE<9
						// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
						// request header to a null-value.
						//
						// To keep consistent with other XHR implementations, cast the value
						// to string and ignore `undefined`.
						if ( headers[ i ] !== undefined ) {
							xhr.setRequestHeader( i, headers[ i ] + "" );
						}
					}

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( options.hasContent && options.data ) || null );

					// Listener
					callback = function( _, isAbort ) {
						var status, statusText, responses;

						// Was never called and is aborted or complete
						if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

							// Clean up
							delete xhrCallbacks[ id ];
							callback = undefined;
							xhr.onreadystatechange = jQuery.noop;

							// Abort manually if needed
							if ( isAbort ) {
								if ( xhr.readyState !== 4 ) {
									xhr.abort();
								}
							} else {
								responses = {};
								status = xhr.status;

								// Support: IE<10
								// Accessing binary-data responseText throws an exception
								// (#11426)
								if ( typeof xhr.responseText === "string" ) {
									responses.text = xhr.responseText;
								}

								// Firefox throws an exception when accessing
								// statusText for faulty cross-domain requests
								try {
									statusText = xhr.statusText;
								} catch ( e ) {

									// We normalize with Webkit giving an empty statusText
									statusText = "";
								}

								// Filter status for non standard behaviors

								// If the request is local and we have data: assume a success
								// (success with no data won't get notified, that's the best we
								// can do given current implementations)
								if ( !status && options.isLocal && !options.crossDomain ) {
									status = responses.text ? 200 : 404;

								// IE - #1450: sometimes returns 1223 when it should be 204
								} else if ( status === 1223 ) {
									status = 204;
								}
							}
						}

						// Call complete if needed
						if ( responses ) {
							complete( status, statusText, responses, xhr.getAllResponseHeaders() );
						}
					};

					// Do send the request
					// `xhr.send` may raise an exception, but it will be
					// handled in jQuery.ajax (so no try/catch here)
					if ( !options.async ) {

						// If we're in sync mode we fire the callback
						callback();
					} else if ( xhr.readyState === 4 ) {

						// (IE6 & IE7) if it's in cache and has been
						// retrieved directly we need to fire the callback
						window.setTimeout( callback );
					} else {

						// Register the callback, but delay it in case `xhr.send` throws
						// Add to the list of active xhr callbacks
						xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
					}
				},

				abort: function() {
					if ( callback ) {
						callback( undefined, true );
					}
				}
			};
		}
	} );
}

// Functions to create xhrs
function createStandardXHR() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
}

function createActiveXHR() {
	try {
		return new window.ActiveXObject( "Microsoft.XMLHTTP" );
	} catch ( e ) {}
}




// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
		s.global = false;
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {

		var script,
			head = document.head || jQuery( "head" )[ 0 ] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement( "script" );

				script.async = true;

				if ( s.scriptCharset ) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( script.parentNode ) {
							script.parentNode.removeChild( script );
						}

						// Dereference the script
						script = null;

						// Callback if not abort
						if ( !isAbort ) {
							callback( 200, "success" );
						}
					}
				};

				// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
				// Use native DOM manipulation to avoid our domManip AJAX trickery
				head.insertBefore( script, head.firstChild );
			},

			abort: function() {
				if ( script ) {
					script.onload( undefined, true );
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// data: string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = jQuery.trim( url.slice( off, url.length ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};





/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			jQuery.inArray( "auto", [ curCSSTop, curCSSLeft ] ) > -1;

		// need to be able to calculate position if either top or left
		// is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win,
			box = { top: 0, left: 0 },
			elem = this[ 0 ],
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// If we don't have gBCR, just use 0,0 rather than error
		// BlackBerry 5, iOS 3 (original iPhone)
		if ( typeof elem.getBoundingClientRect !== "undefined" ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
			left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			parentOffset = { top: 0, left: 0 },
			elem = this[ 0 ];

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// we assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();
		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		// note: when an element has margin: auto the offsetLeft and marginLeft
		// are the same in Safari causing offset.left to incorrectly be 0
		return {
			top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = /Y/.test( prop );

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? ( prop in win ) ? win[ prop ] :
					win.document.documentElement[ method ] :
					elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : jQuery( win ).scrollLeft(),
					top ? val : jQuery( win ).scrollTop()
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
} );

// Support: Safari<7-8+, Chrome<37-44+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// if curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
	function( defaultExtra, funcName ) {

		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					// unfortunately, this causes bug #3838 in IE6/8 only,
					// but there is currently no good, small way to fix it.
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}



var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}

return jQuery;
}));
/*
Unobtrusive JavaScript
https://github.com/rails/rails/blob/master/actionview/app/assets/javascripts
Released under the MIT license
 */
;

(function() {
  var context = this;

  (function() {
    (function() {
      this.Rails = {
        linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',
        buttonClickSelector: {
          selector: 'button[data-remote]:not([form]), button[data-confirm]:not([form])',
          exclude: 'form button'
        },
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
        formSubmitSelector: 'form',
        formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',
        formDisableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
        formEnableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
        fileInputSelector: 'input[name][type=file]:not([disabled])',
        linkDisableSelector: 'a[data-disable-with], a[data-disable]',
        buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]'
      };

    }).call(this);
  }).call(context);

  var Rails = context.Rails;

  (function() {
    (function() {
      var nonce;

      nonce = null;

      Rails.loadCSPNonce = function() {
        var ref;
        return nonce = (ref = document.querySelector("meta[name=csp-nonce]")) != null ? ref.content : void 0;
      };

      Rails.cspNonce = function() {
        return nonce != null ? nonce : Rails.loadCSPNonce();
      };

    }).call(this);
    (function() {
      var expando, m;

      m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;

      Rails.matches = function(element, selector) {
        if (selector.exclude != null) {
          return m.call(element, selector.selector) && !m.call(element, selector.exclude);
        } else {
          return m.call(element, selector);
        }
      };

      expando = '_ujsData';

      Rails.getData = function(element, key) {
        var ref;
        return (ref = element[expando]) != null ? ref[key] : void 0;
      };

      Rails.setData = function(element, key, value) {
        if (element[expando] == null) {
          element[expando] = {};
        }
        return element[expando][key] = value;
      };

      Rails.$ = function(selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
      };

    }).call(this);
    (function() {
      var $, csrfParam, csrfToken;

      $ = Rails.$;

      csrfToken = Rails.csrfToken = function() {
        var meta;
        meta = document.querySelector('meta[name=csrf-token]');
        return meta && meta.content;
      };

      csrfParam = Rails.csrfParam = function() {
        var meta;
        meta = document.querySelector('meta[name=csrf-param]');
        return meta && meta.content;
      };

      Rails.CSRFProtection = function(xhr) {
        var token;
        token = csrfToken();
        if (token != null) {
          return xhr.setRequestHeader('X-CSRF-Token', token);
        }
      };

      Rails.refreshCSRFTokens = function() {
        var param, token;
        token = csrfToken();
        param = csrfParam();
        if ((token != null) && (param != null)) {
          return $('form input[name="' + param + '"]').forEach(function(input) {
            return input.value = token;
          });
        }
      };

    }).call(this);
    (function() {
      var CustomEvent, fire, matches, preventDefault;

      matches = Rails.matches;

      CustomEvent = window.CustomEvent;

      if (typeof CustomEvent !== 'function') {
        CustomEvent = function(event, params) {
          var evt;
          evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        };
        CustomEvent.prototype = window.Event.prototype;
        preventDefault = CustomEvent.prototype.preventDefault;
        CustomEvent.prototype.preventDefault = function() {
          var result;
          result = preventDefault.call(this);
          if (this.cancelable && !this.defaultPrevented) {
            Object.defineProperty(this, 'defaultPrevented', {
              get: function() {
                return true;
              }
            });
          }
          return result;
        };
      }

      fire = Rails.fire = function(obj, name, data) {
        var event;
        event = new CustomEvent(name, {
          bubbles: true,
          cancelable: true,
          detail: data
        });
        obj.dispatchEvent(event);
        return !event.defaultPrevented;
      };

      Rails.stopEverything = function(e) {
        fire(e.target, 'ujs:everythingStopped');
        e.preventDefault();
        e.stopPropagation();
        return e.stopImmediatePropagation();
      };

      Rails.delegate = function(element, selector, eventType, handler) {
        return element.addEventListener(eventType, function(e) {
          var target;
          target = e.target;
          while (!(!(target instanceof Element) || matches(target, selector))) {
            target = target.parentNode;
          }
          if (target instanceof Element && handler.call(target, e) === false) {
            e.preventDefault();
            return e.stopPropagation();
          }
        });
      };

    }).call(this);
    (function() {
      var AcceptHeaders, CSRFProtection, createXHR, cspNonce, fire, prepareOptions, processResponse;

      cspNonce = Rails.cspNonce, CSRFProtection = Rails.CSRFProtection, fire = Rails.fire;

      AcceptHeaders = {
        '*': '*/*',
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      };

      Rails.ajax = function(options) {
        var xhr;
        options = prepareOptions(options);
        xhr = createXHR(options, function() {
          var ref, response;
          response = processResponse((ref = xhr.response) != null ? ref : xhr.responseText, xhr.getResponseHeader('Content-Type'));
          if (Math.floor(xhr.status / 100) === 2) {
            if (typeof options.success === "function") {
              options.success(response, xhr.statusText, xhr);
            }
          } else {
            if (typeof options.error === "function") {
              options.error(response, xhr.statusText, xhr);
            }
          }
          return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : void 0;
        });
        if ((options.beforeSend != null) && !options.beforeSend(xhr, options)) {
          return false;
        }
        if (xhr.readyState === XMLHttpRequest.OPENED) {
          return xhr.send(options.data);
        }
      };

      prepareOptions = function(options) {
        options.url = options.url || location.href;
        options.type = options.type.toUpperCase();
        if (options.type === 'GET' && options.data) {
          if (options.url.indexOf('?') < 0) {
            options.url += '?' + options.data;
          } else {
            options.url += '&' + options.data;
          }
        }
        if (AcceptHeaders[options.dataType] == null) {
          options.dataType = '*';
        }
        options.accept = AcceptHeaders[options.dataType];
        if (options.dataType !== '*') {
          options.accept += ', */*; q=0.01';
        }
        return options;
      };

      createXHR = function(options, done) {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open(options.type, options.url, true);
        xhr.setRequestHeader('Accept', options.accept);
        if (typeof options.data === 'string') {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        }
        if (!options.crossDomain) {
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
          CSRFProtection(xhr);
        }
        xhr.withCredentials = !!options.withCredentials;
        xhr.onreadystatechange = function() {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            return done(xhr);
          }
        };
        return xhr;
      };

      processResponse = function(response, type) {
        var parser, script;
        if (typeof response === 'string' && typeof type === 'string') {
          if (type.match(/\bjson\b/)) {
            try {
              response = JSON.parse(response);
            } catch (error) {}
          } else if (type.match(/\b(?:java|ecma)script\b/)) {
            script = document.createElement('script');
            script.setAttribute('nonce', cspNonce());
            script.text = response;
            document.head.appendChild(script).parentNode.removeChild(script);
          } else if (type.match(/\b(xml|html|svg)\b/)) {
            parser = new DOMParser();
            type = type.replace(/;.+/, '');
            try {
              response = parser.parseFromString(response, type);
            } catch (error) {}
          }
        }
        return response;
      };

      Rails.href = function(element) {
        return element.href;
      };

      Rails.isCrossDomain = function(url) {
        var e, originAnchor, urlAnchor;
        originAnchor = document.createElement('a');
        originAnchor.href = location.href;
        urlAnchor = document.createElement('a');
        try {
          urlAnchor.href = url;
          return !(((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host) || (originAnchor.protocol + '//' + originAnchor.host === urlAnchor.protocol + '//' + urlAnchor.host));
        } catch (error) {
          e = error;
          return true;
        }
      };

    }).call(this);
    (function() {
      var matches, toArray;

      matches = Rails.matches;

      toArray = function(e) {
        return Array.prototype.slice.call(e);
      };

      Rails.serializeElement = function(element, additionalParam) {
        var inputs, params;
        inputs = [element];
        if (matches(element, 'form')) {
          inputs = toArray(element.elements);
        }
        params = [];
        inputs.forEach(function(input) {
          if (!input.name || input.disabled) {
            return;
          }
          if (matches(input, 'select')) {
            return toArray(input.options).forEach(function(option) {
              if (option.selected) {
                return params.push({
                  name: input.name,
                  value: option.value
                });
              }
            });
          } else if (input.checked || ['radio', 'checkbox', 'submit'].indexOf(input.type) === -1) {
            return params.push({
              name: input.name,
              value: input.value
            });
          }
        });
        if (additionalParam) {
          params.push(additionalParam);
        }
        return params.map(function(param) {
          if (param.name != null) {
            return (encodeURIComponent(param.name)) + "=" + (encodeURIComponent(param.value));
          } else {
            return param;
          }
        }).join('&');
      };

      Rails.formElements = function(form, selector) {
        if (matches(form, 'form')) {
          return toArray(form.elements).filter(function(el) {
            return matches(el, selector);
          });
        } else {
          return toArray(form.querySelectorAll(selector));
        }
      };

    }).call(this);
    (function() {
      var allowAction, fire, stopEverything;

      fire = Rails.fire, stopEverything = Rails.stopEverything;

      Rails.handleConfirm = function(e) {
        if (!allowAction(this)) {
          return stopEverything(e);
        }
      };

      allowAction = function(element) {
        var answer, callback, message;
        message = element.getAttribute('data-confirm');
        if (!message) {
          return true;
        }
        answer = false;
        if (fire(element, 'confirm')) {
          try {
            answer = confirm(message);
          } catch (error) {}
          callback = fire(element, 'confirm:complete', [answer]);
        }
        return answer && callback;
      };

    }).call(this);
    (function() {
      var disableFormElement, disableFormElements, disableLinkElement, enableFormElement, enableFormElements, enableLinkElement, formElements, getData, matches, setData, stopEverything;

      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, stopEverything = Rails.stopEverything, formElements = Rails.formElements;

      Rails.handleDisabledElement = function(e) {
        var element;
        element = this;
        if (element.disabled) {
          return stopEverything(e);
        }
      };

      Rails.enableElement = function(e) {
        var element;
        element = e instanceof Event ? e.target : e;
        if (matches(element, Rails.linkDisableSelector)) {
          return enableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formEnableSelector)) {
          return enableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return enableFormElements(element);
        }
      };

      Rails.disableElement = function(e) {
        var element;
        element = e instanceof Event ? e.target : e;
        if (matches(element, Rails.linkDisableSelector)) {
          return disableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formDisableSelector)) {
          return disableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return disableFormElements(element);
        }
      };

      disableLinkElement = function(element) {
        var replacement;
        replacement = element.getAttribute('data-disable-with');
        if (replacement != null) {
          setData(element, 'ujs:enable-with', element.innerHTML);
          element.innerHTML = replacement;
        }
        element.addEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', true);
      };

      enableLinkElement = function(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');
        if (originalText != null) {
          element.innerHTML = originalText;
          setData(element, 'ujs:enable-with', null);
        }
        element.removeEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', null);
      };

      disableFormElements = function(form) {
        return formElements(form, Rails.formDisableSelector).forEach(disableFormElement);
      };

      disableFormElement = function(element) {
        var replacement;
        replacement = element.getAttribute('data-disable-with');
        if (replacement != null) {
          if (matches(element, 'button')) {
            setData(element, 'ujs:enable-with', element.innerHTML);
            element.innerHTML = replacement;
          } else {
            setData(element, 'ujs:enable-with', element.value);
            element.value = replacement;
          }
        }
        element.disabled = true;
        return setData(element, 'ujs:disabled', true);
      };

      enableFormElements = function(form) {
        return formElements(form, Rails.formEnableSelector).forEach(enableFormElement);
      };

      enableFormElement = function(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');
        if (originalText != null) {
          if (matches(element, 'button')) {
            element.innerHTML = originalText;
          } else {
            element.value = originalText;
          }
          setData(element, 'ujs:enable-with', null);
        }
        element.disabled = false;
        return setData(element, 'ujs:disabled', null);
      };

    }).call(this);
    (function() {
      var stopEverything;

      stopEverything = Rails.stopEverything;

      Rails.handleMethod = function(e) {
        var csrfParam, csrfToken, form, formContent, href, link, method;
        link = this;
        method = link.getAttribute('data-method');
        if (!method) {
          return;
        }
        href = Rails.href(link);
        csrfToken = Rails.csrfToken();
        csrfParam = Rails.csrfParam();
        form = document.createElement('form');
        formContent = "<input name='_method' value='" + method + "' type='hidden' />";
        if ((csrfParam != null) && (csrfToken != null) && !Rails.isCrossDomain(href)) {
          formContent += "<input name='" + csrfParam + "' value='" + csrfToken + "' type='hidden' />";
        }
        formContent += '<input type="submit" />';
        form.method = 'post';
        form.action = href;
        form.target = link.target;
        form.innerHTML = formContent;
        form.style.display = 'none';
        document.body.appendChild(form);
        form.querySelector('[type="submit"]').click();
        return stopEverything(e);
      };

    }).call(this);
    (function() {
      var ajax, fire, getData, isCrossDomain, isRemote, matches, serializeElement, setData, stopEverything,
        slice = [].slice;

      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, fire = Rails.fire, stopEverything = Rails.stopEverything, ajax = Rails.ajax, isCrossDomain = Rails.isCrossDomain, serializeElement = Rails.serializeElement;

      isRemote = function(element) {
        var value;
        value = element.getAttribute('data-remote');
        return (value != null) && value !== 'false';
      };

      Rails.handleRemote = function(e) {
        var button, data, dataType, element, method, url, withCredentials;
        element = this;
        if (!isRemote(element)) {
          return true;
        }
        if (!fire(element, 'ajax:before')) {
          fire(element, 'ajax:stopped');
          return false;
        }
        withCredentials = element.getAttribute('data-with-credentials');
        dataType = element.getAttribute('data-type') || 'script';
        if (matches(element, Rails.formSubmitSelector)) {
          button = getData(element, 'ujs:submit-button');
          method = getData(element, 'ujs:submit-button-formmethod') || element.method;
          url = getData(element, 'ujs:submit-button-formaction') || element.getAttribute('action') || location.href;
          if (method.toUpperCase() === 'GET') {
            url = url.replace(/\?.*$/, '');
          }
          if (element.enctype === 'multipart/form-data') {
            data = new FormData(element);
            if (button != null) {
              data.append(button.name, button.value);
            }
          } else {
            data = serializeElement(element, button);
          }
          setData(element, 'ujs:submit-button', null);
          setData(element, 'ujs:submit-button-formmethod', null);
          setData(element, 'ujs:submit-button-formaction', null);
        } else if (matches(element, Rails.buttonClickSelector) || matches(element, Rails.inputChangeSelector)) {
          method = element.getAttribute('data-method');
          url = element.getAttribute('data-url');
          data = serializeElement(element, element.getAttribute('data-params'));
        } else {
          method = element.getAttribute('data-method');
          url = Rails.href(element);
          data = element.getAttribute('data-params');
        }
        ajax({
          type: method || 'GET',
          url: url,
          data: data,
          dataType: dataType,
          beforeSend: function(xhr, options) {
            if (fire(element, 'ajax:beforeSend', [xhr, options])) {
              return fire(element, 'ajax:send', [xhr]);
            } else {
              fire(element, 'ajax:stopped');
              return false;
            }
          },
          success: function() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:success', args);
          },
          error: function() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:error', args);
          },
          complete: function() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:complete', args);
          },
          crossDomain: isCrossDomain(url),
          withCredentials: (withCredentials != null) && withCredentials !== 'false'
        });
        return stopEverything(e);
      };

      Rails.formSubmitButtonClick = function(e) {
        var button, form;
        button = this;
        form = button.form;
        if (!form) {
          return;
        }
        if (button.name) {
          setData(form, 'ujs:submit-button', {
            name: button.name,
            value: button.value
          });
        }
        setData(form, 'ujs:formnovalidate-button', button.formNoValidate);
        setData(form, 'ujs:submit-button-formaction', button.getAttribute('formaction'));
        return setData(form, 'ujs:submit-button-formmethod', button.getAttribute('formmethod'));
      };

      Rails.preventInsignificantClick = function(e) {
        var data, insignificantMetaClick, link, metaClick, method, nonPrimaryMouseClick;
        link = this;
        method = (link.getAttribute('data-method') || 'GET').toUpperCase();
        data = link.getAttribute('data-params');
        metaClick = e.metaKey || e.ctrlKey;
        insignificantMetaClick = metaClick && method === 'GET' && !data;
        nonPrimaryMouseClick = (e.button != null) && e.button !== 0;
        if (nonPrimaryMouseClick || insignificantMetaClick) {
          return e.stopImmediatePropagation();
        }
      };

    }).call(this);
    (function() {
      var $, CSRFProtection, delegate, disableElement, enableElement, fire, formSubmitButtonClick, getData, handleConfirm, handleDisabledElement, handleMethod, handleRemote, loadCSPNonce, preventInsignificantClick, refreshCSRFTokens;

      fire = Rails.fire, delegate = Rails.delegate, getData = Rails.getData, $ = Rails.$, refreshCSRFTokens = Rails.refreshCSRFTokens, CSRFProtection = Rails.CSRFProtection, loadCSPNonce = Rails.loadCSPNonce, enableElement = Rails.enableElement, disableElement = Rails.disableElement, handleDisabledElement = Rails.handleDisabledElement, handleConfirm = Rails.handleConfirm, preventInsignificantClick = Rails.preventInsignificantClick, handleRemote = Rails.handleRemote, formSubmitButtonClick = Rails.formSubmitButtonClick, handleMethod = Rails.handleMethod;

      if ((typeof jQuery !== "undefined" && jQuery !== null) && (jQuery.ajax != null)) {
        if (jQuery.rails) {
          throw new Error('If you load both jquery_ujs and rails-ujs, use rails-ujs only.');
        }
        jQuery.rails = Rails;
        jQuery.ajaxPrefilter(function(options, originalOptions, xhr) {
          if (!options.crossDomain) {
            return CSRFProtection(xhr);
          }
        });
      }

      Rails.start = function() {
        if (window._rails_loaded) {
          throw new Error('rails-ujs has already been loaded!');
        }
        window.addEventListener('pageshow', function() {
          $(Rails.formEnableSelector).forEach(function(el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
          return $(Rails.linkDisableSelector).forEach(function(el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
        });
        delegate(document, Rails.linkDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.linkDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.linkClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.linkClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.linkClickSelector, 'click', handleConfirm);
        delegate(document, Rails.linkClickSelector, 'click', disableElement);
        delegate(document, Rails.linkClickSelector, 'click', handleRemote);
        delegate(document, Rails.linkClickSelector, 'click', handleMethod);
        delegate(document, Rails.buttonClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.buttonClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleConfirm);
        delegate(document, Rails.buttonClickSelector, 'click', disableElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleRemote);
        delegate(document, Rails.inputChangeSelector, 'change', handleDisabledElement);
        delegate(document, Rails.inputChangeSelector, 'change', handleConfirm);
        delegate(document, Rails.inputChangeSelector, 'change', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', handleDisabledElement);
        delegate(document, Rails.formSubmitSelector, 'submit', handleConfirm);
        delegate(document, Rails.formSubmitSelector, 'submit', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', function(e) {
          return setTimeout((function() {
            return disableElement(e);
          }), 13);
        });
        delegate(document, Rails.formSubmitSelector, 'ajax:send', disableElement);
        delegate(document, Rails.formSubmitSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.formInputClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.formInputClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.formInputClickSelector, 'click', handleConfirm);
        delegate(document, Rails.formInputClickSelector, 'click', formSubmitButtonClick);
        document.addEventListener('DOMContentLoaded', refreshCSRFTokens);
        document.addEventListener('DOMContentLoaded', loadCSPNonce);
        return window._rails_loaded = true;
      };

      if (window.Rails === Rails && fire(document, 'rails:attachBindings')) {
        Rails.start();
      }

    }).call(this);
  }).call(this);

  if (typeof module === "object" && module.exports) {
    module.exports = Rails;
  } else if (typeof define === "function" && define.amd) {
    define(Rails);
  }
}).call(this);
(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define([ "exports" ], factory) : factory(global.ActiveStorage = {});
})(this, function(exports) {
  "use strict";
  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }
  var sparkMd5 = createCommonjsModule(function(module, exports) {
    (function(factory) {
      {
        module.exports = factory();
      }
    })(function(undefined) {
      var hex_chr = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f" ];
      function md5cycle(x, k) {
        var a = x[0], b = x[1], c = x[2], d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      }
      function md5blk(s) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }
        return md5blks;
      }
      function md5blk_array(a) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }
        return md5blks;
      }
      function md51(s) {
        var n = s.length, state = [ 1732584193, -271733879, -1732584194, 271733878 ], i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk(s.substring(i - 64, i)));
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
          md5cycle(state, tail);
          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }
      function md51_array(a) {
        var n = a.length, state = [ 1732584193, -271733879, -1732584194, 271733878 ], i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }
        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= a[i] << (i % 4 << 3);
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
          md5cycle(state, tail);
          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }
      function rhex(n) {
        var s = "", j;
        for (j = 0; j < 4; j += 1) {
          s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        }
        return s;
      }
      function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
          x[i] = rhex(x[i]);
        }
        return x.join("");
      }
      if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") ;
      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function() {
          function clamp(val, length) {
            val = val | 0 || 0;
            if (val < 0) {
              return Math.max(val + length, 0);
            }
            return Math.min(val, length);
          }
          ArrayBuffer.prototype.slice = function(from, to) {
            var length = this.byteLength, begin = clamp(from, length), end = length, num, target, targetArray, sourceArray;
            if (to !== undefined) {
              end = clamp(to, length);
            }
            if (begin > end) {
              return new ArrayBuffer(0);
            }
            num = end - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
          };
        })();
      }
      function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
          str = unescape(encodeURIComponent(str));
        }
        return str;
      }
      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length, buff = new ArrayBuffer(length), arr = new Uint8Array(buff), i;
        for (i = 0; i < length; i += 1) {
          arr[i] = str.charCodeAt(i);
        }
        return returnUInt8Array ? arr : buff;
      }
      function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
      }
      function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
      }
      function hexToBinaryString(hex) {
        var bytes = [], length = hex.length, x;
        for (x = 0; x < length - 1; x += 2) {
          bytes.push(parseInt(hex.substr(x, 2), 16));
        }
        return String.fromCharCode.apply(String, bytes);
      }
      function SparkMD5() {
        this.reset();
      }
      SparkMD5.prototype.append = function(str) {
        this.appendBinary(toUtf8(str));
        return this;
      };
      SparkMD5.prototype.appendBinary = function(contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length, i;
        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }
        this._buff = this._buff.substring(i - 64);
        return this;
      };
      SparkMD5.prototype.end = function(raw) {
        var buff = this._buff, length = buff.length, i, tail = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], ret;
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        }
        this._finish(tail, length);
        ret = hex(this._hash);
        if (raw) {
          ret = hexToBinaryString(ret);
        }
        this.reset();
        return ret;
      };
      SparkMD5.prototype.reset = function() {
        this._buff = "";
        this._length = 0;
        this._hash = [ 1732584193, -271733879, -1732584194, 271733878 ];
        return this;
      };
      SparkMD5.prototype.getState = function() {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash
        };
      };
      SparkMD5.prototype.setState = function(state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };
      SparkMD5.prototype.destroy = function() {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };
      SparkMD5.prototype._finish = function(tail, length) {
        var i = length, tmp, lo, hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
          md5cycle(this._hash, tail);
          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }
        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
      };
      SparkMD5.hash = function(str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw);
      };
      SparkMD5.hashBinary = function(content, raw) {
        var hash = md51(content), ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };
      SparkMD5.ArrayBuffer = function() {
        this.reset();
      };
      SparkMD5.ArrayBuffer.prototype.append = function(arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true), length = buff.length, i;
        this._length += arr.byteLength;
        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }
        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
      };
      SparkMD5.ArrayBuffer.prototype.end = function(raw) {
        var buff = this._buff, length = buff.length, tail = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], i, ret;
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff[i] << (i % 4 << 3);
        }
        this._finish(tail, length);
        ret = hex(this._hash);
        if (raw) {
          ret = hexToBinaryString(ret);
        }
        this.reset();
        return ret;
      };
      SparkMD5.ArrayBuffer.prototype.reset = function() {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [ 1732584193, -271733879, -1732584194, 271733878 ];
        return this;
      };
      SparkMD5.ArrayBuffer.prototype.getState = function() {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };
      SparkMD5.ArrayBuffer.prototype.setState = function(state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
      };
      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;
      SparkMD5.ArrayBuffer.hash = function(arr, raw) {
        var hash = md51_array(new Uint8Array(arr)), ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };
      return SparkMD5;
    });
  });
  var classCallCheck = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  var createClass = function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  var fileSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;
  var FileChecksum = function() {
    createClass(FileChecksum, null, [ {
      key: "create",
      value: function create(file, callback) {
        var instance = new FileChecksum(file);
        instance.create(callback);
      }
    } ]);
    function FileChecksum(file) {
      classCallCheck(this, FileChecksum);
      this.file = file;
      this.chunkSize = 2097152;
      this.chunkCount = Math.ceil(this.file.size / this.chunkSize);
      this.chunkIndex = 0;
    }
    createClass(FileChecksum, [ {
      key: "create",
      value: function create(callback) {
        var _this = this;
        this.callback = callback;
        this.md5Buffer = new sparkMd5.ArrayBuffer();
        this.fileReader = new FileReader();
        this.fileReader.addEventListener("load", function(event) {
          return _this.fileReaderDidLoad(event);
        });
        this.fileReader.addEventListener("error", function(event) {
          return _this.fileReaderDidError(event);
        });
        this.readNextChunk();
      }
    }, {
      key: "fileReaderDidLoad",
      value: function fileReaderDidLoad(event) {
        this.md5Buffer.append(event.target.result);
        if (!this.readNextChunk()) {
          var binaryDigest = this.md5Buffer.end(true);
          var base64digest = btoa(binaryDigest);
          this.callback(null, base64digest);
        }
      }
    }, {
      key: "fileReaderDidError",
      value: function fileReaderDidError(event) {
        this.callback("Error reading " + this.file.name);
      }
    }, {
      key: "readNextChunk",
      value: function readNextChunk() {
        if (this.chunkIndex < this.chunkCount || this.chunkIndex == 0 && this.chunkCount == 0) {
          var start = this.chunkIndex * this.chunkSize;
          var end = Math.min(start + this.chunkSize, this.file.size);
          var bytes = fileSlice.call(this.file, start, end);
          this.fileReader.readAsArrayBuffer(bytes);
          this.chunkIndex++;
          return true;
        } else {
          return false;
        }
      }
    } ]);
    return FileChecksum;
  }();
  function getMetaValue(name) {
    var element = findElement(document.head, 'meta[name="' + name + '"]');
    if (element) {
      return element.getAttribute("content");
    }
  }
  function findElements(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }
    var elements = root.querySelectorAll(selector);
    return toArray$1(elements);
  }
  function findElement(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }
    return root.querySelector(selector);
  }
  function dispatchEvent(element, type) {
    var eventInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var disabled = element.disabled;
    var bubbles = eventInit.bubbles, cancelable = eventInit.cancelable, detail = eventInit.detail;
    var event = document.createEvent("Event");
    event.initEvent(type, bubbles || true, cancelable || true);
    event.detail = detail || {};
    try {
      element.disabled = false;
      element.dispatchEvent(event);
    } finally {
      element.disabled = disabled;
    }
    return event;
  }
  function toArray$1(value) {
    if (Array.isArray(value)) {
      return value;
    } else if (Array.from) {
      return Array.from(value);
    } else {
      return [].slice.call(value);
    }
  }
  var BlobRecord = function() {
    function BlobRecord(file, checksum, url) {
      var _this = this;
      classCallCheck(this, BlobRecord);
      this.file = file;
      this.attributes = {
        filename: file.name,
        content_type: file.type,
        byte_size: file.size,
        checksum: checksum
      };
      this.xhr = new XMLHttpRequest();
      this.xhr.open("POST", url, true);
      this.xhr.responseType = "json";
      this.xhr.setRequestHeader("Content-Type", "application/json");
      this.xhr.setRequestHeader("Accept", "application/json");
      this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      this.xhr.setRequestHeader("X-CSRF-Token", getMetaValue("csrf-token"));
      this.xhr.addEventListener("load", function(event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function(event) {
        return _this.requestDidError(event);
      });
    }
    createClass(BlobRecord, [ {
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(JSON.stringify({
          blob: this.attributes
        }));
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        if (this.status >= 200 && this.status < 300) {
          var response = this.response;
          var direct_upload = response.direct_upload;
          delete response.direct_upload;
          this.attributes = response;
          this.directUploadData = direct_upload;
          this.callback(null, this.toJSON());
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var result = {};
        for (var key in this.attributes) {
          result[key] = this.attributes[key];
        }
        return result;
      }
    }, {
      key: "status",
      get: function get$$1() {
        return this.xhr.status;
      }
    }, {
      key: "response",
      get: function get$$1() {
        var _xhr = this.xhr, responseType = _xhr.responseType, response = _xhr.response;
        if (responseType == "json") {
          return response;
        } else {
          return JSON.parse(response);
        }
      }
    } ]);
    return BlobRecord;
  }();
  var BlobUpload = function() {
    function BlobUpload(blob) {
      var _this = this;
      classCallCheck(this, BlobUpload);
      this.blob = blob;
      this.file = blob.file;
      var _blob$directUploadDat = blob.directUploadData, url = _blob$directUploadDat.url, headers = _blob$directUploadDat.headers;
      this.xhr = new XMLHttpRequest();
      this.xhr.open("PUT", url, true);
      this.xhr.responseType = "text";
      for (var key in headers) {
        this.xhr.setRequestHeader(key, headers[key]);
      }
      this.xhr.addEventListener("load", function(event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function(event) {
        return _this.requestDidError(event);
      });
    }
    createClass(BlobUpload, [ {
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(this.file.slice());
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        var _xhr = this.xhr, status = _xhr.status, response = _xhr.response;
        if (status >= 200 && status < 300) {
          this.callback(null, response);
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status);
      }
    } ]);
    return BlobUpload;
  }();
  var id = 0;
  var DirectUpload = function() {
    function DirectUpload(file, url, delegate) {
      classCallCheck(this, DirectUpload);
      this.id = ++id;
      this.file = file;
      this.url = url;
      this.delegate = delegate;
    }
    createClass(DirectUpload, [ {
      key: "create",
      value: function create(callback) {
        var _this = this;
        FileChecksum.create(this.file, function(error, checksum) {
          if (error) {
            callback(error);
            return;
          }
          var blob = new BlobRecord(_this.file, checksum, _this.url);
          notify(_this.delegate, "directUploadWillCreateBlobWithXHR", blob.xhr);
          blob.create(function(error) {
            if (error) {
              callback(error);
            } else {
              var upload = new BlobUpload(blob);
              notify(_this.delegate, "directUploadWillStoreFileWithXHR", upload.xhr);
              upload.create(function(error) {
                if (error) {
                  callback(error);
                } else {
                  callback(null, blob.toJSON());
                }
              });
            }
          });
        });
      }
    } ]);
    return DirectUpload;
  }();
  function notify(object, methodName) {
    if (object && typeof object[methodName] == "function") {
      for (var _len = arguments.length, messages = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        messages[_key - 2] = arguments[_key];
      }
      return object[methodName].apply(object, messages);
    }
  }
  var DirectUploadController = function() {
    function DirectUploadController(input, file) {
      classCallCheck(this, DirectUploadController);
      this.input = input;
      this.file = file;
      this.directUpload = new DirectUpload(this.file, this.url, this);
      this.dispatch("initialize");
    }
    createClass(DirectUploadController, [ {
      key: "start",
      value: function start(callback) {
        var _this = this;
        var hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = this.input.name;
        this.input.insertAdjacentElement("beforebegin", hiddenInput);
        this.dispatch("start");
        this.directUpload.create(function(error, attributes) {
          if (error) {
            hiddenInput.parentNode.removeChild(hiddenInput);
            _this.dispatchError(error);
          } else {
            hiddenInput.value = attributes.signed_id;
          }
          _this.dispatch("end");
          callback(error);
        });
      }
    }, {
      key: "uploadRequestDidProgress",
      value: function uploadRequestDidProgress(event) {
        var progress = event.loaded / event.total * 100;
        if (progress) {
          this.dispatch("progress", {
            progress: progress
          });
        }
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        detail.file = this.file;
        detail.id = this.directUpload.id;
        return dispatchEvent(this.input, "direct-upload:" + name, {
          detail: detail
        });
      }
    }, {
      key: "dispatchError",
      value: function dispatchError(error) {
        var event = this.dispatch("error", {
          error: error
        });
        if (!event.defaultPrevented) {
          alert(error);
        }
      }
    }, {
      key: "directUploadWillCreateBlobWithXHR",
      value: function directUploadWillCreateBlobWithXHR(xhr) {
        this.dispatch("before-blob-request", {
          xhr: xhr
        });
      }
    }, {
      key: "directUploadWillStoreFileWithXHR",
      value: function directUploadWillStoreFileWithXHR(xhr) {
        var _this2 = this;
        this.dispatch("before-storage-request", {
          xhr: xhr
        });
        xhr.upload.addEventListener("progress", function(event) {
          return _this2.uploadRequestDidProgress(event);
        });
      }
    }, {
      key: "url",
      get: function get$$1() {
        return this.input.getAttribute("data-direct-upload-url");
      }
    } ]);
    return DirectUploadController;
  }();
  var inputSelector = "input[type=file][data-direct-upload-url]:not([disabled])";
  var DirectUploadsController = function() {
    function DirectUploadsController(form) {
      classCallCheck(this, DirectUploadsController);
      this.form = form;
      this.inputs = findElements(form, inputSelector).filter(function(input) {
        return input.files.length;
      });
    }
    createClass(DirectUploadsController, [ {
      key: "start",
      value: function start(callback) {
        var _this = this;
        var controllers = this.createDirectUploadControllers();
        var startNextController = function startNextController() {
          var controller = controllers.shift();
          if (controller) {
            controller.start(function(error) {
              if (error) {
                callback(error);
                _this.dispatch("end");
              } else {
                startNextController();
              }
            });
          } else {
            callback();
            _this.dispatch("end");
          }
        };
        this.dispatch("start");
        startNextController();
      }
    }, {
      key: "createDirectUploadControllers",
      value: function createDirectUploadControllers() {
        var controllers = [];
        this.inputs.forEach(function(input) {
          toArray$1(input.files).forEach(function(file) {
            var controller = new DirectUploadController(input, file);
            controllers.push(controller);
          });
        });
        return controllers;
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return dispatchEvent(this.form, "direct-uploads:" + name, {
          detail: detail
        });
      }
    } ]);
    return DirectUploadsController;
  }();
  var processingAttribute = "data-direct-uploads-processing";
  var submitButtonsByForm = new WeakMap();
  var started = false;
  function start() {
    if (!started) {
      started = true;
      document.addEventListener("click", didClick, true);
      document.addEventListener("submit", didSubmitForm);
      document.addEventListener("ajax:before", didSubmitRemoteElement);
    }
  }
  function didClick(event) {
    var target = event.target;
    if ((target.tagName == "INPUT" || target.tagName == "BUTTON") && target.type == "submit" && target.form) {
      submitButtonsByForm.set(target.form, target);
    }
  }
  function didSubmitForm(event) {
    handleFormSubmissionEvent(event);
  }
  function didSubmitRemoteElement(event) {
    if (event.target.tagName == "FORM") {
      handleFormSubmissionEvent(event);
    }
  }
  function handleFormSubmissionEvent(event) {
    var form = event.target;
    if (form.hasAttribute(processingAttribute)) {
      event.preventDefault();
      return;
    }
    var controller = new DirectUploadsController(form);
    var inputs = controller.inputs;
    if (inputs.length) {
      event.preventDefault();
      form.setAttribute(processingAttribute, "");
      inputs.forEach(disable);
      controller.start(function(error) {
        form.removeAttribute(processingAttribute);
        if (error) {
          inputs.forEach(enable);
        } else {
          submitForm(form);
        }
      });
    }
  }
  function submitForm(form) {
    var button = submitButtonsByForm.get(form) || findElement(form, "input[type=submit], button[type=submit]");
    if (button) {
      var _button = button, disabled = _button.disabled;
      button.disabled = false;
      button.focus();
      button.click();
      button.disabled = disabled;
    } else {
      button = document.createElement("input");
      button.type = "submit";
      button.style.display = "none";
      form.appendChild(button);
      button.click();
      form.removeChild(button);
    }
    submitButtonsByForm.delete(form);
  }
  function disable(input) {
    input.disabled = true;
  }
  function enable(input) {
    input.disabled = false;
  }
  function autostart() {
    if (window.ActiveStorage) {
      start();
    }
  }
  setTimeout(autostart, 1);
  exports.start = start;
  exports.DirectUpload = DirectUpload;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});
/*
Turbolinks 5.2.0
Copyright © 2018 Basecamp, LLC
 */

(function(){var t=this;(function(){(function(){this.Turbolinks={supported:function(){return null!=window.history.pushState&&null!=window.requestAnimationFrame&&null!=window.addEventListener}(),visit:function(t,r){return e.controller.visit(t,r)},clearCache:function(){return e.controller.clearCache()},setProgressBarDelay:function(t){return e.controller.setProgressBarDelay(t)}}}).call(this)}).call(t);var e=t.Turbolinks;(function(){(function(){var t,r,n,o=[].slice;e.copyObject=function(t){var e,r,n;r={};for(e in t)n=t[e],r[e]=n;return r},e.closest=function(e,r){return t.call(e,r)},t=function(){var t,e;return t=document.documentElement,null!=(e=t.closest)?e:function(t){var e;for(e=this;e;){if(e.nodeType===Node.ELEMENT_NODE&&r.call(e,t))return e;e=e.parentNode}}}(),e.defer=function(t){return setTimeout(t,1)},e.throttle=function(t){var e;return e=null,function(){var r;return r=1<=arguments.length?o.call(arguments,0):[],null!=e?e:e=requestAnimationFrame(function(n){return function(){return e=null,t.apply(n,r)}}(this))}},e.dispatch=function(t,e){var r,o,i,s,a,u;return a=null!=e?e:{},u=a.target,r=a.cancelable,o=a.data,i=document.createEvent("Events"),i.initEvent(t,!0,r===!0),i.data=null!=o?o:{},i.cancelable&&!n&&(s=i.preventDefault,i.preventDefault=function(){return this.defaultPrevented||Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}}),s.call(this)}),(null!=u?u:document).dispatchEvent(i),i},n=function(){var t;return t=document.createEvent("Events"),t.initEvent("test",!0,!0),t.preventDefault(),t.defaultPrevented}(),e.match=function(t,e){return r.call(t,e)},r=function(){var t,e,r,n;return t=document.documentElement,null!=(e=null!=(r=null!=(n=t.matchesSelector)?n:t.webkitMatchesSelector)?r:t.msMatchesSelector)?e:t.mozMatchesSelector}(),e.uuid=function(){var t,e,r;for(r="",t=e=1;36>=e;t=++e)r+=9===t||14===t||19===t||24===t?"-":15===t?"4":20===t?(Math.floor(4*Math.random())+8).toString(16):Math.floor(15*Math.random()).toString(16);return r}}).call(this),function(){e.Location=function(){function t(t){var e,r;null==t&&(t=""),r=document.createElement("a"),r.href=t.toString(),this.absoluteURL=r.href,e=r.hash.length,2>e?this.requestURL=this.absoluteURL:(this.requestURL=this.absoluteURL.slice(0,-e),this.anchor=r.hash.slice(1))}var e,r,n,o;return t.wrap=function(t){return t instanceof this?t:new this(t)},t.prototype.getOrigin=function(){return this.absoluteURL.split("/",3).join("/")},t.prototype.getPath=function(){var t,e;return null!=(t=null!=(e=this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/))?e[1]:void 0)?t:"/"},t.prototype.getPathComponents=function(){return this.getPath().split("/").slice(1)},t.prototype.getLastPathComponent=function(){return this.getPathComponents().slice(-1)[0]},t.prototype.getExtension=function(){var t,e;return null!=(t=null!=(e=this.getLastPathComponent().match(/\.[^.]*$/))?e[0]:void 0)?t:""},t.prototype.isHTML=function(){return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/)},t.prototype.isPrefixedBy=function(t){var e;return e=r(t),this.isEqualTo(t)||o(this.absoluteURL,e)},t.prototype.isEqualTo=function(t){return this.absoluteURL===(null!=t?t.absoluteURL:void 0)},t.prototype.toCacheKey=function(){return this.requestURL},t.prototype.toJSON=function(){return this.absoluteURL},t.prototype.toString=function(){return this.absoluteURL},t.prototype.valueOf=function(){return this.absoluteURL},r=function(t){return e(t.getOrigin()+t.getPath())},e=function(t){return n(t,"/")?t:t+"/"},o=function(t,e){return t.slice(0,e.length)===e},n=function(t,e){return t.slice(-e.length)===e},t}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.HttpRequest=function(){function r(r,n,o){this.delegate=r,this.requestCanceled=t(this.requestCanceled,this),this.requestTimedOut=t(this.requestTimedOut,this),this.requestFailed=t(this.requestFailed,this),this.requestLoaded=t(this.requestLoaded,this),this.requestProgressed=t(this.requestProgressed,this),this.url=e.Location.wrap(n).requestURL,this.referrer=e.Location.wrap(o).absoluteURL,this.createXHR()}return r.NETWORK_FAILURE=0,r.TIMEOUT_FAILURE=-1,r.timeout=60,r.prototype.send=function(){var t;return this.xhr&&!this.sent?(this.notifyApplicationBeforeRequestStart(),this.setProgress(0),this.xhr.send(),this.sent=!0,"function"==typeof(t=this.delegate).requestStarted?t.requestStarted():void 0):void 0},r.prototype.cancel=function(){return this.xhr&&this.sent?this.xhr.abort():void 0},r.prototype.requestProgressed=function(t){return t.lengthComputable?this.setProgress(t.loaded/t.total):void 0},r.prototype.requestLoaded=function(){return this.endRequest(function(t){return function(){var e;return 200<=(e=t.xhr.status)&&300>e?t.delegate.requestCompletedWithResponse(t.xhr.responseText,t.xhr.getResponseHeader("Turbolinks-Location")):(t.failed=!0,t.delegate.requestFailedWithStatusCode(t.xhr.status,t.xhr.responseText))}}(this))},r.prototype.requestFailed=function(){return this.endRequest(function(t){return function(){return t.failed=!0,t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE)}}(this))},r.prototype.requestTimedOut=function(){return this.endRequest(function(t){return function(){return t.failed=!0,t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE)}}(this))},r.prototype.requestCanceled=function(){return this.endRequest()},r.prototype.notifyApplicationBeforeRequestStart=function(){return e.dispatch("turbolinks:request-start",{data:{url:this.url,xhr:this.xhr}})},r.prototype.notifyApplicationAfterRequestEnd=function(){return e.dispatch("turbolinks:request-end",{data:{url:this.url,xhr:this.xhr}})},r.prototype.createXHR=function(){return this.xhr=new XMLHttpRequest,this.xhr.open("GET",this.url,!0),this.xhr.timeout=1e3*this.constructor.timeout,this.xhr.setRequestHeader("Accept","text/html, application/xhtml+xml"),this.xhr.setRequestHeader("Turbolinks-Referrer",this.referrer),this.xhr.onprogress=this.requestProgressed,this.xhr.onload=this.requestLoaded,this.xhr.onerror=this.requestFailed,this.xhr.ontimeout=this.requestTimedOut,this.xhr.onabort=this.requestCanceled},r.prototype.endRequest=function(t){return this.xhr?(this.notifyApplicationAfterRequestEnd(),null!=t&&t.call(this),this.destroy()):void 0},r.prototype.setProgress=function(t){var e;return this.progress=t,"function"==typeof(e=this.delegate).requestProgressed?e.requestProgressed(this.progress):void 0},r.prototype.destroy=function(){var t;return this.setProgress(1),"function"==typeof(t=this.delegate).requestFinished&&t.requestFinished(),this.delegate=null,this.xhr=null},r}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.ProgressBar=function(){function e(){this.trickle=t(this.trickle,this),this.stylesheetElement=this.createStylesheetElement(),this.progressElement=this.createProgressElement()}var r;return r=300,e.defaultCSS=".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width "+r+"ms ease-out, opacity "+r/2+"ms "+r/2+"ms ease-in;\n  transform: translate3d(0, 0, 0);\n}",e.prototype.show=function(){return this.visible?void 0:(this.visible=!0,this.installStylesheetElement(),this.installProgressElement(),this.startTrickling())},e.prototype.hide=function(){return this.visible&&!this.hiding?(this.hiding=!0,this.fadeProgressElement(function(t){return function(){return t.uninstallProgressElement(),t.stopTrickling(),t.visible=!1,t.hiding=!1}}(this))):void 0},e.prototype.setValue=function(t){return this.value=t,this.refresh()},e.prototype.installStylesheetElement=function(){return document.head.insertBefore(this.stylesheetElement,document.head.firstChild)},e.prototype.installProgressElement=function(){return this.progressElement.style.width=0,this.progressElement.style.opacity=1,document.documentElement.insertBefore(this.progressElement,document.body),this.refresh()},e.prototype.fadeProgressElement=function(t){return this.progressElement.style.opacity=0,setTimeout(t,1.5*r)},e.prototype.uninstallProgressElement=function(){return this.progressElement.parentNode?document.documentElement.removeChild(this.progressElement):void 0},e.prototype.startTrickling=function(){return null!=this.trickleInterval?this.trickleInterval:this.trickleInterval=setInterval(this.trickle,r)},e.prototype.stopTrickling=function(){return clearInterval(this.trickleInterval),this.trickleInterval=null},e.prototype.trickle=function(){return this.setValue(this.value+Math.random()/100)},e.prototype.refresh=function(){return requestAnimationFrame(function(t){return function(){return t.progressElement.style.width=10+90*t.value+"%"}}(this))},e.prototype.createStylesheetElement=function(){var t;return t=document.createElement("style"),t.type="text/css",t.textContent=this.constructor.defaultCSS,t},e.prototype.createProgressElement=function(){var t;return t=document.createElement("div"),t.className="turbolinks-progress-bar",t},e}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.BrowserAdapter=function(){function r(r){this.controller=r,this.showProgressBar=t(this.showProgressBar,this),this.progressBar=new e.ProgressBar}var n,o,i;return i=e.HttpRequest,n=i.NETWORK_FAILURE,o=i.TIMEOUT_FAILURE,r.prototype.visitProposedToLocationWithAction=function(t,e){return this.controller.startVisitToLocationWithAction(t,e)},r.prototype.visitStarted=function(t){return t.issueRequest(),t.changeHistory(),t.loadCachedSnapshot()},r.prototype.visitRequestStarted=function(t){return this.progressBar.setValue(0),t.hasCachedSnapshot()||"restore"!==t.action?this.showProgressBarAfterDelay():this.showProgressBar()},r.prototype.visitRequestProgressed=function(t){return this.progressBar.setValue(t.progress)},r.prototype.visitRequestCompleted=function(t){return t.loadResponse()},r.prototype.visitRequestFailedWithStatusCode=function(t,e){switch(e){case n:case o:return this.reload();default:return t.loadResponse()}},r.prototype.visitRequestFinished=function(t){return this.hideProgressBar()},r.prototype.visitCompleted=function(t){return t.followRedirect()},r.prototype.pageInvalidated=function(){return this.reload()},r.prototype.showProgressBarAfterDelay=function(){return this.progressBarTimeout=setTimeout(this.showProgressBar,this.controller.progressBarDelay)},r.prototype.showProgressBar=function(){return this.progressBar.show()},r.prototype.hideProgressBar=function(){return this.progressBar.hide(),clearTimeout(this.progressBarTimeout)},r.prototype.reload=function(){return window.location.reload()},r}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.History=function(){function r(e){this.delegate=e,this.onPageLoad=t(this.onPageLoad,this),this.onPopState=t(this.onPopState,this)}return r.prototype.start=function(){return this.started?void 0:(addEventListener("popstate",this.onPopState,!1),addEventListener("load",this.onPageLoad,!1),this.started=!0)},r.prototype.stop=function(){return this.started?(removeEventListener("popstate",this.onPopState,!1),removeEventListener("load",this.onPageLoad,!1),this.started=!1):void 0},r.prototype.push=function(t,r){return t=e.Location.wrap(t),this.update("push",t,r)},r.prototype.replace=function(t,r){return t=e.Location.wrap(t),this.update("replace",t,r)},r.prototype.onPopState=function(t){var r,n,o,i;return this.shouldHandlePopState()&&(i=null!=(n=t.state)?n.turbolinks:void 0)?(r=e.Location.wrap(window.location),o=i.restorationIdentifier,this.delegate.historyPoppedToLocationWithRestorationIdentifier(r,o)):void 0},r.prototype.onPageLoad=function(t){return e.defer(function(t){return function(){return t.pageLoaded=!0}}(this))},r.prototype.shouldHandlePopState=function(){return this.pageIsLoaded()},r.prototype.pageIsLoaded=function(){return this.pageLoaded||"complete"===document.readyState},r.prototype.update=function(t,e,r){var n;return n={turbolinks:{restorationIdentifier:r}},history[t+"State"](n,null,e)},r}()}.call(this),function(){e.HeadDetails=function(){function t(t){var e,r,n,s,a,u;for(this.elements={},n=0,a=t.length;a>n;n++)u=t[n],u.nodeType===Node.ELEMENT_NODE&&(s=u.outerHTML,r=null!=(e=this.elements)[s]?e[s]:e[s]={type:i(u),tracked:o(u),elements:[]},r.elements.push(u))}var e,r,n,o,i;return t.fromHeadElement=function(t){var e;return new this(null!=(e=null!=t?t.childNodes:void 0)?e:[])},t.prototype.hasElementWithKey=function(t){return t in this.elements},t.prototype.getTrackedElementSignature=function(){var t,e;return function(){var r,n;r=this.elements,n=[];for(t in r)e=r[t].tracked,e&&n.push(t);return n}.call(this).join("")},t.prototype.getScriptElementsNotInDetails=function(t){return this.getElementsMatchingTypeNotInDetails("script",t)},t.prototype.getStylesheetElementsNotInDetails=function(t){return this.getElementsMatchingTypeNotInDetails("stylesheet",t)},t.prototype.getElementsMatchingTypeNotInDetails=function(t,e){var r,n,o,i,s,a;o=this.elements,s=[];for(n in o)i=o[n],a=i.type,r=i.elements,a!==t||e.hasElementWithKey(n)||s.push(r[0]);return s},t.prototype.getProvisionalElements=function(){var t,e,r,n,o,i,s;r=[],n=this.elements;for(e in n)o=n[e],s=o.type,i=o.tracked,t=o.elements,null!=s||i?t.length>1&&r.push.apply(r,t.slice(1)):r.push.apply(r,t);return r},t.prototype.getMetaValue=function(t){var e;return null!=(e=this.findMetaElementByName(t))?e.getAttribute("content"):void 0},t.prototype.findMetaElementByName=function(t){var r,n,o,i;r=void 0,i=this.elements;for(o in i)n=i[o].elements,e(n[0],t)&&(r=n[0]);return r},i=function(t){return r(t)?"script":n(t)?"stylesheet":void 0},o=function(t){return"reload"===t.getAttribute("data-turbolinks-track")},r=function(t){var e;return e=t.tagName.toLowerCase(),"script"===e},n=function(t){var e;return e=t.tagName.toLowerCase(),"style"===e||"link"===e&&"stylesheet"===t.getAttribute("rel")},e=function(t,e){var r;return r=t.tagName.toLowerCase(),"meta"===r&&t.getAttribute("name")===e},t}()}.call(this),function(){e.Snapshot=function(){function t(t,e){this.headDetails=t,this.bodyElement=e}return t.wrap=function(t){return t instanceof this?t:"string"==typeof t?this.fromHTMLString(t):this.fromHTMLElement(t)},t.fromHTMLString=function(t){var e;return e=document.createElement("html"),e.innerHTML=t,this.fromHTMLElement(e)},t.fromHTMLElement=function(t){var r,n,o,i;return o=t.querySelector("head"),r=null!=(i=t.querySelector("body"))?i:document.createElement("body"),n=e.HeadDetails.fromHeadElement(o),new this(n,r)},t.prototype.clone=function(){return new this.constructor(this.headDetails,this.bodyElement.cloneNode(!0))},t.prototype.getRootLocation=function(){var t,r;return r=null!=(t=this.getSetting("root"))?t:"/",new e.Location(r)},t.prototype.getCacheControlValue=function(){return this.getSetting("cache-control")},t.prototype.getElementForAnchor=function(t){try{return this.bodyElement.querySelector("[id='"+t+"'], a[name='"+t+"']")}catch(e){}},t.prototype.getPermanentElements=function(){return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]")},t.prototype.getPermanentElementById=function(t){return this.bodyElement.querySelector("#"+t+"[data-turbolinks-permanent]")},t.prototype.getPermanentElementsPresentInSnapshot=function(t){var e,r,n,o,i;for(o=this.getPermanentElements(),i=[],r=0,n=o.length;n>r;r++)e=o[r],t.getPermanentElementById(e.id)&&i.push(e);return i},t.prototype.findFirstAutofocusableElement=function(){return this.bodyElement.querySelector("[autofocus]")},t.prototype.hasAnchor=function(t){return null!=this.getElementForAnchor(t)},t.prototype.isPreviewable=function(){return"no-preview"!==this.getCacheControlValue()},t.prototype.isCacheable=function(){return"no-cache"!==this.getCacheControlValue()},t.prototype.isVisitable=function(){return"reload"!==this.getSetting("visit-control")},t.prototype.getSetting=function(t){return this.headDetails.getMetaValue("turbolinks-"+t)},t}()}.call(this),function(){var t=[].slice;e.Renderer=function(){function e(){}var r;return e.render=function(){var e,r,n,o;return n=arguments[0],r=arguments[1],e=3<=arguments.length?t.call(arguments,2):[],o=function(t,e,r){r.prototype=t.prototype;var n=new r,o=t.apply(n,e);return Object(o)===o?o:n}(this,e,function(){}),o.delegate=n,o.render(r),o},e.prototype.renderView=function(t){return this.delegate.viewWillRender(this.newBody),t(),this.delegate.viewRendered(this.newBody)},e.prototype.invalidateView=function(){return this.delegate.viewInvalidated()},e.prototype.createScriptElement=function(t){var e;return"false"===t.getAttribute("data-turbolinks-eval")?t:(e=document.createElement("script"),e.textContent=t.textContent,e.async=!1,r(e,t),e)},r=function(t,e){var r,n,o,i,s,a,u;for(i=e.attributes,a=[],r=0,n=i.length;n>r;r++)s=i[r],o=s.name,u=s.value,a.push(t.setAttribute(o,u));return a},e}()}.call(this),function(){var t,r,n=function(t,e){function r(){this.constructor=t}for(var n in e)o.call(e,n)&&(t[n]=e[n]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},o={}.hasOwnProperty;e.SnapshotRenderer=function(e){function o(t,e,r){this.currentSnapshot=t,this.newSnapshot=e,this.isPreview=r,this.currentHeadDetails=this.currentSnapshot.headDetails,this.newHeadDetails=this.newSnapshot.headDetails,this.currentBody=this.currentSnapshot.bodyElement,this.newBody=this.newSnapshot.bodyElement}return n(o,e),o.prototype.render=function(t){return this.shouldRender()?(this.mergeHead(),this.renderView(function(e){return function(){return e.replaceBody(),e.isPreview||e.focusFirstAutofocusableElement(),t()}}(this))):this.invalidateView()},o.prototype.mergeHead=function(){return this.copyNewHeadStylesheetElements(),this.copyNewHeadScriptElements(),this.removeCurrentHeadProvisionalElements(),this.copyNewHeadProvisionalElements()},o.prototype.replaceBody=function(){var t;return t=this.relocateCurrentBodyPermanentElements(),this.activateNewBodyScriptElements(),this.assignNewBody(),this.replacePlaceholderElementsWithClonedPermanentElements(t)},o.prototype.shouldRender=function(){return this.newSnapshot.isVisitable()&&this.trackedElementsAreIdentical()},o.prototype.trackedElementsAreIdentical=function(){return this.currentHeadDetails.getTrackedElementSignature()===this.newHeadDetails.getTrackedElementSignature()},o.prototype.copyNewHeadStylesheetElements=function(){var t,e,r,n,o;for(n=this.getNewHeadStylesheetElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.appendChild(t));return o},o.prototype.copyNewHeadScriptElements=function(){var t,e,r,n,o;for(n=this.getNewHeadScriptElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.appendChild(this.createScriptElement(t)));return o},o.prototype.removeCurrentHeadProvisionalElements=function(){var t,e,r,n,o;for(n=this.getCurrentHeadProvisionalElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.removeChild(t));return o},o.prototype.copyNewHeadProvisionalElements=function(){var t,e,r,n,o;for(n=this.getNewHeadProvisionalElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.appendChild(t));return o},o.prototype.relocateCurrentBodyPermanentElements=function(){var e,n,o,i,s,a,u;for(a=this.getCurrentBodyPermanentElements(),u=[],e=0,n=a.length;n>e;e++)i=a[e],s=t(i),o=this.newSnapshot.getPermanentElementById(i.id),r(i,s.element),r(o,i),u.push(s);return u},o.prototype.replacePlaceholderElementsWithClonedPermanentElements=function(t){var e,n,o,i,s,a,u;for(u=[],o=0,i=t.length;i>o;o++)a=t[o],n=a.element,s=a.permanentElement,e=s.cloneNode(!0),u.push(r(n,e));return u},o.prototype.activateNewBodyScriptElements=function(){var t,e,n,o,i,s;for(i=this.getNewBodyScriptElements(),s=[],e=0,o=i.length;o>e;e++)n=i[e],t=this.createScriptElement(n),s.push(r(n,t));return s},o.prototype.assignNewBody=function(){return document.body=this.newBody},o.prototype.focusFirstAutofocusableElement=function(){var t;return null!=(t=this.newSnapshot.findFirstAutofocusableElement())?t.focus():void 0},o.prototype.getNewHeadStylesheetElements=function(){return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails)},o.prototype.getNewHeadScriptElements=function(){return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails)},o.prototype.getCurrentHeadProvisionalElements=function(){return this.currentHeadDetails.getProvisionalElements()},o.prototype.getNewHeadProvisionalElements=function(){return this.newHeadDetails.getProvisionalElements()},o.prototype.getCurrentBodyPermanentElements=function(){return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot)},o.prototype.getNewBodyScriptElements=function(){return this.newBody.querySelectorAll("script")},o}(e.Renderer),t=function(t){var e;return e=document.createElement("meta"),e.setAttribute("name","turbolinks-permanent-placeholder"),e.setAttribute("content",t.id),{element:e,permanentElement:t}},r=function(t,e){var r;return(r=t.parentNode)?r.replaceChild(e,t):void 0}}.call(this),function(){var t=function(t,e){function n(){this.constructor=t}for(var o in e)r.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},r={}.hasOwnProperty;e.ErrorRenderer=function(e){function r(t){var e;e=document.createElement("html"),e.innerHTML=t,this.newHead=e.querySelector("head"),this.newBody=e.querySelector("body")}return t(r,e),r.prototype.render=function(t){return this.renderView(function(e){return function(){return e.replaceHeadAndBody(),e.activateBodyScriptElements(),t()}}(this))},r.prototype.replaceHeadAndBody=function(){var t,e;return e=document.head,t=document.body,e.parentNode.replaceChild(this.newHead,e),t.parentNode.replaceChild(this.newBody,t)},r.prototype.activateBodyScriptElements=function(){var t,e,r,n,o,i;for(n=this.getScriptElements(),i=[],e=0,r=n.length;r>e;e++)o=n[e],t=this.createScriptElement(o),i.push(o.parentNode.replaceChild(t,o));return i},r.prototype.getScriptElements=function(){return document.documentElement.querySelectorAll("script")},r}(e.Renderer)}.call(this),function(){e.View=function(){function t(t){this.delegate=t,this.htmlElement=document.documentElement}return t.prototype.getRootLocation=function(){return this.getSnapshot().getRootLocation()},t.prototype.getElementForAnchor=function(t){return this.getSnapshot().getElementForAnchor(t)},t.prototype.getSnapshot=function(){return e.Snapshot.fromHTMLElement(this.htmlElement)},t.prototype.render=function(t,e){var r,n,o;return o=t.snapshot,r=t.error,n=t.isPreview,this.markAsPreview(n),null!=o?this.renderSnapshot(o,n,e):this.renderError(r,e)},t.prototype.markAsPreview=function(t){return t?this.htmlElement.setAttribute("data-turbolinks-preview",""):this.htmlElement.removeAttribute("data-turbolinks-preview")},t.prototype.renderSnapshot=function(t,r,n){return e.SnapshotRenderer.render(this.delegate,n,this.getSnapshot(),e.Snapshot.wrap(t),r)},t.prototype.renderError=function(t,r){return e.ErrorRenderer.render(this.delegate,r,t)},t}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.ScrollManager=function(){function r(r){this.delegate=r,this.onScroll=t(this.onScroll,this),this.onScroll=e.throttle(this.onScroll)}return r.prototype.start=function(){return this.started?void 0:(addEventListener("scroll",this.onScroll,!1),this.onScroll(),this.started=!0)},r.prototype.stop=function(){return this.started?(removeEventListener("scroll",this.onScroll,!1),this.started=!1):void 0},r.prototype.scrollToElement=function(t){return t.scrollIntoView()},r.prototype.scrollToPosition=function(t){var e,r;return e=t.x,r=t.y,window.scrollTo(e,r)},r.prototype.onScroll=function(t){return this.updatePosition({x:window.pageXOffset,y:window.pageYOffset})},r.prototype.updatePosition=function(t){var e;return this.position=t,null!=(e=this.delegate)?e.scrollPositionChanged(this.position):void 0},r}()}.call(this),function(){e.SnapshotCache=function(){function t(t){this.size=t,this.keys=[],this.snapshots={}}var r;return t.prototype.has=function(t){var e;return e=r(t),e in this.snapshots},t.prototype.get=function(t){var e;if(this.has(t))return e=this.read(t),this.touch(t),e},t.prototype.put=function(t,e){return this.write(t,e),this.touch(t),e},t.prototype.read=function(t){var e;return e=r(t),this.snapshots[e]},t.prototype.write=function(t,e){var n;return n=r(t),this.snapshots[n]=e},t.prototype.touch=function(t){var e,n;return n=r(t),e=this.keys.indexOf(n),e>-1&&this.keys.splice(e,1),this.keys.unshift(n),this.trim()},t.prototype.trim=function(){var t,e,r,n,o;for(n=this.keys.splice(this.size),o=[],t=0,r=n.length;r>t;t++)e=n[t],o.push(delete this.snapshots[e]);return o},r=function(t){return e.Location.wrap(t).toCacheKey()},t}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.Visit=function(){function r(r,n,o){this.controller=r,this.action=o,this.performScroll=t(this.performScroll,this),this.identifier=e.uuid(),this.location=e.Location.wrap(n),this.adapter=this.controller.adapter,this.state="initialized",this.timingMetrics={}}var n;return r.prototype.start=function(){return"initialized"===this.state?(this.recordTimingMetric("visitStart"),this.state="started",this.adapter.visitStarted(this)):void 0},r.prototype.cancel=function(){var t;return"started"===this.state?(null!=(t=this.request)&&t.cancel(),this.cancelRender(),this.state="canceled"):void 0},r.prototype.complete=function(){var t;return"started"===this.state?(this.recordTimingMetric("visitEnd"),this.state="completed","function"==typeof(t=this.adapter).visitCompleted&&t.visitCompleted(this),this.controller.visitCompleted(this)):void 0},r.prototype.fail=function(){var t;return"started"===this.state?(this.state="failed","function"==typeof(t=this.adapter).visitFailed?t.visitFailed(this):void 0):void 0},r.prototype.changeHistory=function(){var t,e;return this.historyChanged?void 0:(t=this.location.isEqualTo(this.referrer)?"replace":this.action,e=n(t),this.controller[e](this.location,this.restorationIdentifier),this.historyChanged=!0)},r.prototype.issueRequest=function(){return this.shouldIssueRequest()&&null==this.request?(this.progress=0,this.request=new e.HttpRequest(this,this.location,this.referrer),this.request.send()):void 0},r.prototype.getCachedSnapshot=function(){var t;return!(t=this.controller.getCachedSnapshotForLocation(this.location))||null!=this.location.anchor&&!t.hasAnchor(this.location.anchor)||"restore"!==this.action&&!t.isPreviewable()?void 0:t},r.prototype.hasCachedSnapshot=function(){return null!=this.getCachedSnapshot()},r.prototype.loadCachedSnapshot=function(){var t,e;return(e=this.getCachedSnapshot())?(t=this.shouldIssueRequest(),this.render(function(){var r;return this.cacheSnapshot(),this.controller.render({snapshot:e,isPreview:t},this.performScroll),"function"==typeof(r=this.adapter).visitRendered&&r.visitRendered(this),t?void 0:this.complete()})):void 0},r.prototype.loadResponse=function(){return null!=this.response?this.render(function(){var t,e;return this.cacheSnapshot(),this.request.failed?(this.controller.render({error:this.response},this.performScroll),"function"==typeof(t=this.adapter).visitRendered&&t.visitRendered(this),this.fail()):(this.controller.render({snapshot:this.response},this.performScroll),"function"==typeof(e=this.adapter).visitRendered&&e.visitRendered(this),this.complete())}):void 0},r.prototype.followRedirect=function(){return this.redirectedToLocation&&!this.followedRedirect?(this.location=this.redirectedToLocation,this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation,this.restorationIdentifier),this.followedRedirect=!0):void 0},r.prototype.requestStarted=function(){var t;return this.recordTimingMetric("requestStart"),"function"==typeof(t=this.adapter).visitRequestStarted?t.visitRequestStarted(this):void 0},r.prototype.requestProgressed=function(t){var e;return this.progress=t,"function"==typeof(e=this.adapter).visitRequestProgressed?e.visitRequestProgressed(this):void 0},r.prototype.requestCompletedWithResponse=function(t,r){return this.response=t,null!=r&&(this.redirectedToLocation=e.Location.wrap(r)),this.adapter.visitRequestCompleted(this)},r.prototype.requestFailedWithStatusCode=function(t,e){return this.response=e,this.adapter.visitRequestFailedWithStatusCode(this,t)},r.prototype.requestFinished=function(){var t;return this.recordTimingMetric("requestEnd"),"function"==typeof(t=this.adapter).visitRequestFinished?t.visitRequestFinished(this):void 0},r.prototype.performScroll=function(){return this.scrolled?void 0:("restore"===this.action?this.scrollToRestoredPosition()||this.scrollToTop():this.scrollToAnchor()||this.scrollToTop(),this.scrolled=!0)},r.prototype.scrollToRestoredPosition=function(){var t,e;return t=null!=(e=this.restorationData)?e.scrollPosition:void 0,null!=t?(this.controller.scrollToPosition(t),!0):void 0},r.prototype.scrollToAnchor=function(){return null!=this.location.anchor?(this.controller.scrollToAnchor(this.location.anchor),!0):void 0},r.prototype.scrollToTop=function(){return this.controller.scrollToPosition({x:0,y:0})},r.prototype.recordTimingMetric=function(t){var e;return null!=(e=this.timingMetrics)[t]?e[t]:e[t]=(new Date).getTime()},r.prototype.getTimingMetrics=function(){return e.copyObject(this.timingMetrics)},n=function(t){switch(t){case"replace":return"replaceHistoryWithLocationAndRestorationIdentifier";case"advance":case"restore":return"pushHistoryWithLocationAndRestorationIdentifier"}},r.prototype.shouldIssueRequest=function(){return"restore"===this.action?!this.hasCachedSnapshot():!0},r.prototype.cacheSnapshot=function(){return this.snapshotCached?void 0:(this.controller.cacheSnapshot(),this.snapshotCached=!0)},r.prototype.render=function(t){return this.cancelRender(),this.frame=requestAnimationFrame(function(e){return function(){return e.frame=null,t.call(e)}}(this))},r.prototype.cancelRender=function(){return this.frame?cancelAnimationFrame(this.frame):void 0},r}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.Controller=function(){function r(){this.clickBubbled=t(this.clickBubbled,this),this.clickCaptured=t(this.clickCaptured,this),this.pageLoaded=t(this.pageLoaded,this),this.history=new e.History(this),this.view=new e.View(this),this.scrollManager=new e.ScrollManager(this),this.restorationData={},this.clearCache(),this.setProgressBarDelay(500)}return r.prototype.start=function(){return e.supported&&!this.started?(addEventListener("click",this.clickCaptured,!0),addEventListener("DOMContentLoaded",this.pageLoaded,!1),this.scrollManager.start(),this.startHistory(),this.started=!0,this.enabled=!0):void 0},r.prototype.disable=function(){return this.enabled=!1},r.prototype.stop=function(){return this.started?(removeEventListener("click",this.clickCaptured,!0),removeEventListener("DOMContentLoaded",this.pageLoaded,!1),this.scrollManager.stop(),this.stopHistory(),this.started=!1):void 0},r.prototype.clearCache=function(){return this.cache=new e.SnapshotCache(10)},r.prototype.visit=function(t,r){var n,o;return null==r&&(r={}),t=e.Location.wrap(t),this.applicationAllowsVisitingLocation(t)?this.locationIsVisitable(t)?(n=null!=(o=r.action)?o:"advance",this.adapter.visitProposedToLocationWithAction(t,n)):window.location=t:void 0},r.prototype.startVisitToLocationWithAction=function(t,r,n){var o;return e.supported?(o=this.getRestorationDataForIdentifier(n),this.startVisit(t,r,{restorationData:o})):window.location=t},r.prototype.setProgressBarDelay=function(t){return this.progressBarDelay=t},r.prototype.startHistory=function(){return this.location=e.Location.wrap(window.location),this.restorationIdentifier=e.uuid(),this.history.start(),this.history.replace(this.location,this.restorationIdentifier)},r.prototype.stopHistory=function(){return this.history.stop()},r.prototype.pushHistoryWithLocationAndRestorationIdentifier=function(t,r){return this.restorationIdentifier=r,this.location=e.Location.wrap(t),this.history.push(this.location,this.restorationIdentifier)},r.prototype.replaceHistoryWithLocationAndRestorationIdentifier=function(t,r){return this.restorationIdentifier=r,this.location=e.Location.wrap(t),this.history.replace(this.location,this.restorationIdentifier)},r.prototype.historyPoppedToLocationWithRestorationIdentifier=function(t,r){var n;return this.restorationIdentifier=r,this.enabled?(n=this.getRestorationDataForIdentifier(this.restorationIdentifier),this.startVisit(t,"restore",{restorationIdentifier:this.restorationIdentifier,restorationData:n,historyChanged:!0}),this.location=e.Location.wrap(t)):this.adapter.pageInvalidated()},r.prototype.getCachedSnapshotForLocation=function(t){var e;return null!=(e=this.cache.get(t))?e.clone():void 0},r.prototype.shouldCacheSnapshot=function(){return this.view.getSnapshot().isCacheable();
},r.prototype.cacheSnapshot=function(){var t,r;return this.shouldCacheSnapshot()?(this.notifyApplicationBeforeCachingSnapshot(),r=this.view.getSnapshot(),t=this.lastRenderedLocation,e.defer(function(e){return function(){return e.cache.put(t,r.clone())}}(this))):void 0},r.prototype.scrollToAnchor=function(t){var e;return(e=this.view.getElementForAnchor(t))?this.scrollToElement(e):this.scrollToPosition({x:0,y:0})},r.prototype.scrollToElement=function(t){return this.scrollManager.scrollToElement(t)},r.prototype.scrollToPosition=function(t){return this.scrollManager.scrollToPosition(t)},r.prototype.scrollPositionChanged=function(t){var e;return e=this.getCurrentRestorationData(),e.scrollPosition=t},r.prototype.render=function(t,e){return this.view.render(t,e)},r.prototype.viewInvalidated=function(){return this.adapter.pageInvalidated()},r.prototype.viewWillRender=function(t){return this.notifyApplicationBeforeRender(t)},r.prototype.viewRendered=function(){return this.lastRenderedLocation=this.currentVisit.location,this.notifyApplicationAfterRender()},r.prototype.pageLoaded=function(){return this.lastRenderedLocation=this.location,this.notifyApplicationAfterPageLoad()},r.prototype.clickCaptured=function(){return removeEventListener("click",this.clickBubbled,!1),addEventListener("click",this.clickBubbled,!1)},r.prototype.clickBubbled=function(t){var e,r,n;return this.enabled&&this.clickEventIsSignificant(t)&&(r=this.getVisitableLinkForNode(t.target))&&(n=this.getVisitableLocationForLink(r))&&this.applicationAllowsFollowingLinkToLocation(r,n)?(t.preventDefault(),e=this.getActionForLink(r),this.visit(n,{action:e})):void 0},r.prototype.applicationAllowsFollowingLinkToLocation=function(t,e){var r;return r=this.notifyApplicationAfterClickingLinkToLocation(t,e),!r.defaultPrevented},r.prototype.applicationAllowsVisitingLocation=function(t){var e;return e=this.notifyApplicationBeforeVisitingLocation(t),!e.defaultPrevented},r.prototype.notifyApplicationAfterClickingLinkToLocation=function(t,r){return e.dispatch("turbolinks:click",{target:t,data:{url:r.absoluteURL},cancelable:!0})},r.prototype.notifyApplicationBeforeVisitingLocation=function(t){return e.dispatch("turbolinks:before-visit",{data:{url:t.absoluteURL},cancelable:!0})},r.prototype.notifyApplicationAfterVisitingLocation=function(t){return e.dispatch("turbolinks:visit",{data:{url:t.absoluteURL}})},r.prototype.notifyApplicationBeforeCachingSnapshot=function(){return e.dispatch("turbolinks:before-cache")},r.prototype.notifyApplicationBeforeRender=function(t){return e.dispatch("turbolinks:before-render",{data:{newBody:t}})},r.prototype.notifyApplicationAfterRender=function(){return e.dispatch("turbolinks:render")},r.prototype.notifyApplicationAfterPageLoad=function(t){return null==t&&(t={}),e.dispatch("turbolinks:load",{data:{url:this.location.absoluteURL,timing:t}})},r.prototype.startVisit=function(t,e,r){var n;return null!=(n=this.currentVisit)&&n.cancel(),this.currentVisit=this.createVisit(t,e,r),this.currentVisit.start(),this.notifyApplicationAfterVisitingLocation(t)},r.prototype.createVisit=function(t,r,n){var o,i,s,a,u;return i=null!=n?n:{},a=i.restorationIdentifier,s=i.restorationData,o=i.historyChanged,u=new e.Visit(this,t,r),u.restorationIdentifier=null!=a?a:e.uuid(),u.restorationData=e.copyObject(s),u.historyChanged=o,u.referrer=this.location,u},r.prototype.visitCompleted=function(t){return this.notifyApplicationAfterPageLoad(t.getTimingMetrics())},r.prototype.clickEventIsSignificant=function(t){return!(t.defaultPrevented||t.target.isContentEditable||t.which>1||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey)},r.prototype.getVisitableLinkForNode=function(t){return this.nodeIsVisitable(t)?e.closest(t,"a[href]:not([target]):not([download])"):void 0},r.prototype.getVisitableLocationForLink=function(t){var r;return r=new e.Location(t.getAttribute("href")),this.locationIsVisitable(r)?r:void 0},r.prototype.getActionForLink=function(t){var e;return null!=(e=t.getAttribute("data-turbolinks-action"))?e:"advance"},r.prototype.nodeIsVisitable=function(t){var r;return(r=e.closest(t,"[data-turbolinks]"))?"false"!==r.getAttribute("data-turbolinks"):!0},r.prototype.locationIsVisitable=function(t){return t.isPrefixedBy(this.view.getRootLocation())&&t.isHTML()},r.prototype.getCurrentRestorationData=function(){return this.getRestorationDataForIdentifier(this.restorationIdentifier)},r.prototype.getRestorationDataForIdentifier=function(t){var e;return null!=(e=this.restorationData)[t]?e[t]:e[t]={}},r}()}.call(this),function(){!function(){var t,e;if((t=e=document.currentScript)&&!e.hasAttribute("data-turbolinks-suppress-warning"))for(;t=t.parentNode;)if(t===document.body)return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s",e.outerHTML)}()}.call(this),function(){var t,r,n;e.start=function(){return r()?(null==e.controller&&(e.controller=t()),e.controller.start()):void 0},r=function(){return null==window.Turbolinks&&(window.Turbolinks=e),n()},t=function(){var t;return t=new e.Controller,t.adapter=new e.BrowserAdapter(t),t},n=function(){return window.Turbolinks===e},n()&&e.start()}.call(this)}).call(this),"object"==typeof module&&module.exports?module.exports=e:"function"==typeof define&&define.amd&&define(e)}).call(this);
!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=19)}([function(e,n,t){"use strict";e.exports=t(9)},function(e,n,t){"use strict";!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE){0;try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}}(),e.exports=t(10)},function(e,n,t){"use strict";e.exports=t(16)},function(e,n,t){"use strict";var r=t(2),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function l(e){return r.isMemo(e)?u:a[e.$$typeof]||i}a[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[r.Memo]=u;var c=Object.defineProperty,f=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(n,t,r){if("string"!=typeof t){if(h){var i=p(t);i&&i!==h&&e(n,i,r)}var u=f(t);s&&(u=u.concat(s(t)));for(var a=l(n),v=l(t),m=0;m<u.length;++m){var g=u[m];if(!(o[g]||r&&r[g]||v&&v[g]||a&&a[g])){var y=d(t,g);try{c(n,g,y)}catch(e){}}}}return n}},function(e,n,t){"use strict";(function(e,r){var i,o=t(7);i="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r;var u=Object(o.a)(i);n.a=u}).call(this,t(6),t(17)(e))},function(e,n,t){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function u(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,n){for(var t,a,l=u(e),c=1;c<arguments.length;c++){for(var f in t=Object(arguments[c]))i.call(t,f)&&(l[f]=t[f]);if(r){a=r(t);for(var s=0;s<a.length;s++)o.call(t,a[s])&&(l[a[s]]=t[a[s]])}}return l}},function(e,n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(e){"object"==typeof window&&(t=window)}e.exports=t},function(e,n,t){"use strict";function r(e){var n,t=e.Symbol;return"function"==typeof t?t.observable?n=t.observable:(n=t("observable"),t.observable=n):n="@@observable",n}t.d(n,"a",(function(){return r}))},function(e,n,t){(function(e,r){var i;
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function(){var o="Expected a function",u="__lodash_placeholder__",a=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],l="[object Arguments]",c="[object Array]",f="[object Boolean]",s="[object Date]",d="[object Error]",p="[object Function]",h="[object GeneratorFunction]",v="[object Map]",m="[object Number]",g="[object Object]",y="[object RegExp]",b="[object Set]",_="[object String]",w="[object Symbol]",x="[object WeakMap]",k="[object ArrayBuffer]",E="[object DataView]",T="[object Float32Array]",S="[object Float64Array]",C="[object Int8Array]",P="[object Int16Array]",O="[object Int32Array]",N="[object Uint8Array]",z="[object Uint16Array]",R="[object Uint32Array]",I=/\b__p \+= '';/g,j=/\b(__p \+=) '' \+/g,M=/(__e\(.*?\)|\b__t\)) \+\n'';/g,A=/&(?:amp|lt|gt|quot|#39);/g,L=/[&<>"']/g,F=RegExp(A.source),D=RegExp(L.source),U=/<%-([\s\S]+?)%>/g,$=/<%([\s\S]+?)%>/g,W=/<%=([\s\S]+?)%>/g,B=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,V=/^\w*$/,Q=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,H=/[\\^$.*+?()[\]{}|]/g,K=RegExp(H.source),q=/^\s+|\s+$/g,Y=/^\s+/,G=/\s+$/,X=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Z=/\{\n\/\* \[wrapped with (.+)\] \*/,J=/,? & /,ee=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,ne=/\\(\\)?/g,te=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,re=/\w*$/,ie=/^[-+]0x[0-9a-f]+$/i,oe=/^0b[01]+$/i,ue=/^\[object .+?Constructor\]$/,ae=/^0o[0-7]+$/i,le=/^(?:0|[1-9]\d*)$/,ce=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,fe=/($^)/,se=/['\n\r\u2028\u2029\\]/g,de="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",pe="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",he="[\\ud800-\\udfff]",ve="["+pe+"]",me="["+de+"]",ge="\\d+",ye="[\\u2700-\\u27bf]",be="[a-z\\xdf-\\xf6\\xf8-\\xff]",_e="[^\\ud800-\\udfff"+pe+ge+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",we="\\ud83c[\\udffb-\\udfff]",xe="[^\\ud800-\\udfff]",ke="(?:\\ud83c[\\udde6-\\uddff]){2}",Ee="[\\ud800-\\udbff][\\udc00-\\udfff]",Te="[A-Z\\xc0-\\xd6\\xd8-\\xde]",Se="(?:"+be+"|"+_e+")",Ce="(?:"+Te+"|"+_e+")",Pe="(?:"+me+"|"+we+")"+"?",Oe="[\\ufe0e\\ufe0f]?"+Pe+("(?:\\u200d(?:"+[xe,ke,Ee].join("|")+")[\\ufe0e\\ufe0f]?"+Pe+")*"),Ne="(?:"+[ye,ke,Ee].join("|")+")"+Oe,ze="(?:"+[xe+me+"?",me,ke,Ee,he].join("|")+")",Re=RegExp("['’]","g"),Ie=RegExp(me,"g"),je=RegExp(we+"(?="+we+")|"+ze+Oe,"g"),Me=RegExp([Te+"?"+be+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[ve,Te,"$"].join("|")+")",Ce+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[ve,Te+Se,"$"].join("|")+")",Te+"?"+Se+"+(?:['’](?:d|ll|m|re|s|t|ve))?",Te+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ge,Ne].join("|"),"g"),Ae=RegExp("[\\u200d\\ud800-\\udfff"+de+"\\ufe0e\\ufe0f]"),Le=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Fe=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],De=-1,Ue={};Ue[T]=Ue[S]=Ue[C]=Ue[P]=Ue[O]=Ue[N]=Ue["[object Uint8ClampedArray]"]=Ue[z]=Ue[R]=!0,Ue[l]=Ue[c]=Ue[k]=Ue[f]=Ue[E]=Ue[s]=Ue[d]=Ue[p]=Ue[v]=Ue[m]=Ue[g]=Ue[y]=Ue[b]=Ue[_]=Ue[x]=!1;var $e={};$e[l]=$e[c]=$e[k]=$e[E]=$e[f]=$e[s]=$e[T]=$e[S]=$e[C]=$e[P]=$e[O]=$e[v]=$e[m]=$e[g]=$e[y]=$e[b]=$e[_]=$e[w]=$e[N]=$e["[object Uint8ClampedArray]"]=$e[z]=$e[R]=!0,$e[d]=$e[p]=$e[x]=!1;var We={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Be=parseFloat,Ve=parseInt,Qe="object"==typeof e&&e&&e.Object===Object&&e,He="object"==typeof self&&self&&self.Object===Object&&self,Ke=Qe||He||Function("return this")(),qe=n&&!n.nodeType&&n,Ye=qe&&"object"==typeof r&&r&&!r.nodeType&&r,Ge=Ye&&Ye.exports===qe,Xe=Ge&&Qe.process,Ze=function(){try{var e=Ye&&Ye.require&&Ye.require("util").types;return e||Xe&&Xe.binding&&Xe.binding("util")}catch(e){}}(),Je=Ze&&Ze.isArrayBuffer,en=Ze&&Ze.isDate,nn=Ze&&Ze.isMap,tn=Ze&&Ze.isRegExp,rn=Ze&&Ze.isSet,on=Ze&&Ze.isTypedArray;function un(e,n,t){switch(t.length){case 0:return e.call(n);case 1:return e.call(n,t[0]);case 2:return e.call(n,t[0],t[1]);case 3:return e.call(n,t[0],t[1],t[2])}return e.apply(n,t)}function an(e,n,t,r){for(var i=-1,o=null==e?0:e.length;++i<o;){var u=e[i];n(r,u,t(u),e)}return r}function ln(e,n){for(var t=-1,r=null==e?0:e.length;++t<r&&!1!==n(e[t],t,e););return e}function cn(e,n){for(var t=null==e?0:e.length;t--&&!1!==n(e[t],t,e););return e}function fn(e,n){for(var t=-1,r=null==e?0:e.length;++t<r;)if(!n(e[t],t,e))return!1;return!0}function sn(e,n){for(var t=-1,r=null==e?0:e.length,i=0,o=[];++t<r;){var u=e[t];n(u,t,e)&&(o[i++]=u)}return o}function dn(e,n){return!!(null==e?0:e.length)&&xn(e,n,0)>-1}function pn(e,n,t){for(var r=-1,i=null==e?0:e.length;++r<i;)if(t(n,e[r]))return!0;return!1}function hn(e,n){for(var t=-1,r=null==e?0:e.length,i=Array(r);++t<r;)i[t]=n(e[t],t,e);return i}function vn(e,n){for(var t=-1,r=n.length,i=e.length;++t<r;)e[i+t]=n[t];return e}function mn(e,n,t,r){var i=-1,o=null==e?0:e.length;for(r&&o&&(t=e[++i]);++i<o;)t=n(t,e[i],i,e);return t}function gn(e,n,t,r){var i=null==e?0:e.length;for(r&&i&&(t=e[--i]);i--;)t=n(t,e[i],i,e);return t}function yn(e,n){for(var t=-1,r=null==e?0:e.length;++t<r;)if(n(e[t],t,e))return!0;return!1}var bn=Sn("length");function _n(e,n,t){var r;return t(e,(function(e,t,i){if(n(e,t,i))return r=t,!1})),r}function wn(e,n,t,r){for(var i=e.length,o=t+(r?1:-1);r?o--:++o<i;)if(n(e[o],o,e))return o;return-1}function xn(e,n,t){return n==n?function(e,n,t){var r=t-1,i=e.length;for(;++r<i;)if(e[r]===n)return r;return-1}(e,n,t):wn(e,En,t)}function kn(e,n,t,r){for(var i=t-1,o=e.length;++i<o;)if(r(e[i],n))return i;return-1}function En(e){return e!=e}function Tn(e,n){var t=null==e?0:e.length;return t?On(e,n)/t:NaN}function Sn(e){return function(n){return null==n?void 0:n[e]}}function Cn(e){return function(n){return null==e?void 0:e[n]}}function Pn(e,n,t,r,i){return i(e,(function(e,i,o){t=r?(r=!1,e):n(t,e,i,o)})),t}function On(e,n){for(var t,r=-1,i=e.length;++r<i;){var o=n(e[r]);void 0!==o&&(t=void 0===t?o:t+o)}return t}function Nn(e,n){for(var t=-1,r=Array(e);++t<e;)r[t]=n(t);return r}function zn(e){return function(n){return e(n)}}function Rn(e,n){return hn(n,(function(n){return e[n]}))}function In(e,n){return e.has(n)}function jn(e,n){for(var t=-1,r=e.length;++t<r&&xn(n,e[t],0)>-1;);return t}function Mn(e,n){for(var t=e.length;t--&&xn(n,e[t],0)>-1;);return t}function An(e,n){for(var t=e.length,r=0;t--;)e[t]===n&&++r;return r}var Ln=Cn({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),Fn=Cn({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function Dn(e){return"\\"+We[e]}function Un(e){return Ae.test(e)}function $n(e){var n=-1,t=Array(e.size);return e.forEach((function(e,r){t[++n]=[r,e]})),t}function Wn(e,n){return function(t){return e(n(t))}}function Bn(e,n){for(var t=-1,r=e.length,i=0,o=[];++t<r;){var a=e[t];a!==n&&a!==u||(e[t]=u,o[i++]=t)}return o}function Vn(e){var n=-1,t=Array(e.size);return e.forEach((function(e){t[++n]=e})),t}function Qn(e){var n=-1,t=Array(e.size);return e.forEach((function(e){t[++n]=[e,e]})),t}function Hn(e){return Un(e)?function(e){var n=je.lastIndex=0;for(;je.test(e);)++n;return n}(e):bn(e)}function Kn(e){return Un(e)?function(e){return e.match(je)||[]}(e):function(e){return e.split("")}(e)}var qn=Cn({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var Yn=function e(n){var t,r=(n=null==n?Ke:Yn.defaults(Ke.Object(),n,Yn.pick(Ke,Fe))).Array,i=n.Date,de=n.Error,pe=n.Function,he=n.Math,ve=n.Object,me=n.RegExp,ge=n.String,ye=n.TypeError,be=r.prototype,_e=pe.prototype,we=ve.prototype,xe=n["__core-js_shared__"],ke=_e.toString,Ee=we.hasOwnProperty,Te=0,Se=(t=/[^.]+$/.exec(xe&&xe.keys&&xe.keys.IE_PROTO||""))?"Symbol(src)_1."+t:"",Ce=we.toString,Pe=ke.call(ve),Oe=Ke._,Ne=me("^"+ke.call(Ee).replace(H,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ze=Ge?n.Buffer:void 0,je=n.Symbol,Ae=n.Uint8Array,We=ze?ze.allocUnsafe:void 0,Qe=Wn(ve.getPrototypeOf,ve),He=ve.create,qe=we.propertyIsEnumerable,Ye=be.splice,Xe=je?je.isConcatSpreadable:void 0,Ze=je?je.iterator:void 0,bn=je?je.toStringTag:void 0,Cn=function(){try{var e=Ji(ve,"defineProperty");return e({},"",{}),e}catch(e){}}(),Gn=n.clearTimeout!==Ke.clearTimeout&&n.clearTimeout,Xn=i&&i.now!==Ke.Date.now&&i.now,Zn=n.setTimeout!==Ke.setTimeout&&n.setTimeout,Jn=he.ceil,et=he.floor,nt=ve.getOwnPropertySymbols,tt=ze?ze.isBuffer:void 0,rt=n.isFinite,it=be.join,ot=Wn(ve.keys,ve),ut=he.max,at=he.min,lt=i.now,ct=n.parseInt,ft=he.random,st=be.reverse,dt=Ji(n,"DataView"),pt=Ji(n,"Map"),ht=Ji(n,"Promise"),vt=Ji(n,"Set"),mt=Ji(n,"WeakMap"),gt=Ji(ve,"create"),yt=mt&&new mt,bt={},_t=Co(dt),wt=Co(pt),xt=Co(ht),kt=Co(vt),Et=Co(mt),Tt=je?je.prototype:void 0,St=Tt?Tt.valueOf:void 0,Ct=Tt?Tt.toString:void 0;function Pt(e){if(Vu(e)&&!Iu(e)&&!(e instanceof Rt)){if(e instanceof zt)return e;if(Ee.call(e,"__wrapped__"))return Po(e)}return new zt(e)}var Ot=function(){function e(){}return function(n){if(!Bu(n))return{};if(He)return He(n);e.prototype=n;var t=new e;return e.prototype=void 0,t}}();function Nt(){}function zt(e,n){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=void 0}function Rt(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}function It(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}function jt(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}function Mt(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}function At(e){var n=-1,t=null==e?0:e.length;for(this.__data__=new Mt;++n<t;)this.add(e[n])}function Lt(e){var n=this.__data__=new jt(e);this.size=n.size}function Ft(e,n){var t=Iu(e),r=!t&&Ru(e),i=!t&&!r&&Lu(e),o=!t&&!r&&!i&&Zu(e),u=t||r||i||o,a=u?Nn(e.length,ge):[],l=a.length;for(var c in e)!n&&!Ee.call(e,c)||u&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||uo(c,l))||a.push(c);return a}function Dt(e){var n=e.length;return n?e[Ar(0,n-1)]:void 0}function Ut(e,n){return Eo(gi(e),Yt(n,0,e.length))}function $t(e){return Eo(gi(e))}function Wt(e,n,t){(void 0!==t&&!Ou(e[n],t)||void 0===t&&!(n in e))&&Kt(e,n,t)}function Bt(e,n,t){var r=e[n];Ee.call(e,n)&&Ou(r,t)&&(void 0!==t||n in e)||Kt(e,n,t)}function Vt(e,n){for(var t=e.length;t--;)if(Ou(e[t][0],n))return t;return-1}function Qt(e,n,t,r){return er(e,(function(e,i,o){n(r,e,t(e),o)})),r}function Ht(e,n){return e&&yi(n,_a(n),e)}function Kt(e,n,t){"__proto__"==n&&Cn?Cn(e,n,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[n]=t}function qt(e,n){for(var t=-1,i=n.length,o=r(i),u=null==e;++t<i;)o[t]=u?void 0:va(e,n[t]);return o}function Yt(e,n,t){return e==e&&(void 0!==t&&(e=e<=t?e:t),void 0!==n&&(e=e>=n?e:n)),e}function Gt(e,n,t,r,i,o){var u,a=1&n,c=2&n,d=4&n;if(t&&(u=i?t(e,r,i,o):t(e)),void 0!==u)return u;if(!Bu(e))return e;var x=Iu(e);if(x){if(u=function(e){var n=e.length,t=new e.constructor(n);n&&"string"==typeof e[0]&&Ee.call(e,"index")&&(t.index=e.index,t.input=e.input);return t}(e),!a)return gi(e,u)}else{var I=to(e),j=I==p||I==h;if(Lu(e))return si(e,a);if(I==g||I==l||j&&!i){if(u=c||j?{}:io(e),!a)return c?function(e,n){return yi(e,no(e),n)}(e,function(e,n){return e&&yi(n,wa(n),e)}(u,e)):function(e,n){return yi(e,eo(e),n)}(e,Ht(u,e))}else{if(!$e[I])return i?e:{};u=function(e,n,t){var r=e.constructor;switch(n){case k:return di(e);case f:case s:return new r(+e);case E:return function(e,n){var t=n?di(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}(e,t);case T:case S:case C:case P:case O:case N:case"[object Uint8ClampedArray]":case z:case R:return pi(e,t);case v:return new r;case m:case _:return new r(e);case y:return function(e){var n=new e.constructor(e.source,re.exec(e));return n.lastIndex=e.lastIndex,n}(e);case b:return new r;case w:return i=e,St?ve(St.call(i)):{}}var i}(e,I,a)}}o||(o=new Lt);var M=o.get(e);if(M)return M;o.set(e,u),Yu(e)?e.forEach((function(r){u.add(Gt(r,n,t,r,e,o))})):Qu(e)&&e.forEach((function(r,i){u.set(i,Gt(r,n,t,i,e,o))}));var A=x?void 0:(d?c?Hi:Qi:c?wa:_a)(e);return ln(A||e,(function(r,i){A&&(r=e[i=r]),Bt(u,i,Gt(r,n,t,i,e,o))})),u}function Xt(e,n,t){var r=t.length;if(null==e)return!r;for(e=ve(e);r--;){var i=t[r],o=n[i],u=e[i];if(void 0===u&&!(i in e)||!o(u))return!1}return!0}function Zt(e,n,t){if("function"!=typeof e)throw new ye(o);return _o((function(){e.apply(void 0,t)}),n)}function Jt(e,n,t,r){var i=-1,o=dn,u=!0,a=e.length,l=[],c=n.length;if(!a)return l;t&&(n=hn(n,zn(t))),r?(o=pn,u=!1):n.length>=200&&(o=In,u=!1,n=new At(n));e:for(;++i<a;){var f=e[i],s=null==t?f:t(f);if(f=r||0!==f?f:0,u&&s==s){for(var d=c;d--;)if(n[d]===s)continue e;l.push(f)}else o(n,s,r)||l.push(f)}return l}Pt.templateSettings={escape:U,evaluate:$,interpolate:W,variable:"",imports:{_:Pt}},Pt.prototype=Nt.prototype,Pt.prototype.constructor=Pt,zt.prototype=Ot(Nt.prototype),zt.prototype.constructor=zt,Rt.prototype=Ot(Nt.prototype),Rt.prototype.constructor=Rt,It.prototype.clear=function(){this.__data__=gt?gt(null):{},this.size=0},It.prototype.delete=function(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n},It.prototype.get=function(e){var n=this.__data__;if(gt){var t=n[e];return"__lodash_hash_undefined__"===t?void 0:t}return Ee.call(n,e)?n[e]:void 0},It.prototype.has=function(e){var n=this.__data__;return gt?void 0!==n[e]:Ee.call(n,e)},It.prototype.set=function(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=gt&&void 0===n?"__lodash_hash_undefined__":n,this},jt.prototype.clear=function(){this.__data__=[],this.size=0},jt.prototype.delete=function(e){var n=this.__data__,t=Vt(n,e);return!(t<0)&&(t==n.length-1?n.pop():Ye.call(n,t,1),--this.size,!0)},jt.prototype.get=function(e){var n=this.__data__,t=Vt(n,e);return t<0?void 0:n[t][1]},jt.prototype.has=function(e){return Vt(this.__data__,e)>-1},jt.prototype.set=function(e,n){var t=this.__data__,r=Vt(t,e);return r<0?(++this.size,t.push([e,n])):t[r][1]=n,this},Mt.prototype.clear=function(){this.size=0,this.__data__={hash:new It,map:new(pt||jt),string:new It}},Mt.prototype.delete=function(e){var n=Xi(this,e).delete(e);return this.size-=n?1:0,n},Mt.prototype.get=function(e){return Xi(this,e).get(e)},Mt.prototype.has=function(e){return Xi(this,e).has(e)},Mt.prototype.set=function(e,n){var t=Xi(this,e),r=t.size;return t.set(e,n),this.size+=t.size==r?0:1,this},At.prototype.add=At.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},At.prototype.has=function(e){return this.__data__.has(e)},Lt.prototype.clear=function(){this.__data__=new jt,this.size=0},Lt.prototype.delete=function(e){var n=this.__data__,t=n.delete(e);return this.size=n.size,t},Lt.prototype.get=function(e){return this.__data__.get(e)},Lt.prototype.has=function(e){return this.__data__.has(e)},Lt.prototype.set=function(e,n){var t=this.__data__;if(t instanceof jt){var r=t.__data__;if(!pt||r.length<199)return r.push([e,n]),this.size=++t.size,this;t=this.__data__=new Mt(r)}return t.set(e,n),this.size=t.size,this};var er=wi(lr),nr=wi(cr,!0);function tr(e,n){var t=!0;return er(e,(function(e,r,i){return t=!!n(e,r,i)})),t}function rr(e,n,t){for(var r=-1,i=e.length;++r<i;){var o=e[r],u=n(o);if(null!=u&&(void 0===a?u==u&&!Xu(u):t(u,a)))var a=u,l=o}return l}function ir(e,n){var t=[];return er(e,(function(e,r,i){n(e,r,i)&&t.push(e)})),t}function or(e,n,t,r,i){var o=-1,u=e.length;for(t||(t=oo),i||(i=[]);++o<u;){var a=e[o];n>0&&t(a)?n>1?or(a,n-1,t,r,i):vn(i,a):r||(i[i.length]=a)}return i}var ur=xi(),ar=xi(!0);function lr(e,n){return e&&ur(e,n,_a)}function cr(e,n){return e&&ar(e,n,_a)}function fr(e,n){return sn(n,(function(n){return Uu(e[n])}))}function sr(e,n){for(var t=0,r=(n=ai(n,e)).length;null!=e&&t<r;)e=e[So(n[t++])];return t&&t==r?e:void 0}function dr(e,n,t){var r=n(e);return Iu(e)?r:vn(r,t(e))}function pr(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":bn&&bn in ve(e)?function(e){var n=Ee.call(e,bn),t=e[bn];try{e[bn]=void 0;var r=!0}catch(e){}var i=Ce.call(e);r&&(n?e[bn]=t:delete e[bn]);return i}(e):function(e){return Ce.call(e)}(e)}function hr(e,n){return e>n}function vr(e,n){return null!=e&&Ee.call(e,n)}function mr(e,n){return null!=e&&n in ve(e)}function gr(e,n,t){for(var i=t?pn:dn,o=e[0].length,u=e.length,a=u,l=r(u),c=1/0,f=[];a--;){var s=e[a];a&&n&&(s=hn(s,zn(n))),c=at(s.length,c),l[a]=!t&&(n||o>=120&&s.length>=120)?new At(a&&s):void 0}s=e[0];var d=-1,p=l[0];e:for(;++d<o&&f.length<c;){var h=s[d],v=n?n(h):h;if(h=t||0!==h?h:0,!(p?In(p,v):i(f,v,t))){for(a=u;--a;){var m=l[a];if(!(m?In(m,v):i(e[a],v,t)))continue e}p&&p.push(v),f.push(h)}}return f}function yr(e,n,t){var r=null==(e=mo(e,n=ai(n,e)))?e:e[So(Do(n))];return null==r?void 0:un(r,e,t)}function br(e){return Vu(e)&&pr(e)==l}function _r(e,n,t,r,i){return e===n||(null==e||null==n||!Vu(e)&&!Vu(n)?e!=e&&n!=n:function(e,n,t,r,i,o){var u=Iu(e),a=Iu(n),p=u?c:to(e),h=a?c:to(n),x=(p=p==l?g:p)==g,T=(h=h==l?g:h)==g,S=p==h;if(S&&Lu(e)){if(!Lu(n))return!1;u=!0,x=!1}if(S&&!x)return o||(o=new Lt),u||Zu(e)?Bi(e,n,t,r,i,o):function(e,n,t,r,i,o,u){switch(t){case E:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case k:return!(e.byteLength!=n.byteLength||!o(new Ae(e),new Ae(n)));case f:case s:case m:return Ou(+e,+n);case d:return e.name==n.name&&e.message==n.message;case y:case _:return e==n+"";case v:var a=$n;case b:var l=1&r;if(a||(a=Vn),e.size!=n.size&&!l)return!1;var c=u.get(e);if(c)return c==n;r|=2,u.set(e,n);var p=Bi(a(e),a(n),r,i,o,u);return u.delete(e),p;case w:if(St)return St.call(e)==St.call(n)}return!1}(e,n,p,t,r,i,o);if(!(1&t)){var C=x&&Ee.call(e,"__wrapped__"),P=T&&Ee.call(n,"__wrapped__");if(C||P){var O=C?e.value():e,N=P?n.value():n;return o||(o=new Lt),i(O,N,t,r,o)}}if(!S)return!1;return o||(o=new Lt),function(e,n,t,r,i,o){var u=1&t,a=Qi(e),l=a.length,c=Qi(n).length;if(l!=c&&!u)return!1;var f=l;for(;f--;){var s=a[f];if(!(u?s in n:Ee.call(n,s)))return!1}var d=o.get(e),p=o.get(n);if(d&&p)return d==n&&p==e;var h=!0;o.set(e,n),o.set(n,e);var v=u;for(;++f<l;){s=a[f];var m=e[s],g=n[s];if(r)var y=u?r(g,m,s,n,e,o):r(m,g,s,e,n,o);if(!(void 0===y?m===g||i(m,g,t,r,o):y)){h=!1;break}v||(v="constructor"==s)}if(h&&!v){var b=e.constructor,_=n.constructor;b==_||!("constructor"in e)||!("constructor"in n)||"function"==typeof b&&b instanceof b&&"function"==typeof _&&_ instanceof _||(h=!1)}return o.delete(e),o.delete(n),h}(e,n,t,r,i,o)}(e,n,t,r,_r,i))}function wr(e,n,t,r){var i=t.length,o=i,u=!r;if(null==e)return!o;for(e=ve(e);i--;){var a=t[i];if(u&&a[2]?a[1]!==e[a[0]]:!(a[0]in e))return!1}for(;++i<o;){var l=(a=t[i])[0],c=e[l],f=a[1];if(u&&a[2]){if(void 0===c&&!(l in e))return!1}else{var s=new Lt;if(r)var d=r(c,f,l,e,n,s);if(!(void 0===d?_r(f,c,3,r,s):d))return!1}}return!0}function xr(e){return!(!Bu(e)||(n=e,Se&&Se in n))&&(Uu(e)?Ne:ue).test(Co(e));var n}function kr(e){return"function"==typeof e?e:null==e?Ha:"object"==typeof e?Iu(e)?Or(e[0],e[1]):Pr(e):nl(e)}function Er(e){if(!so(e))return ot(e);var n=[];for(var t in ve(e))Ee.call(e,t)&&"constructor"!=t&&n.push(t);return n}function Tr(e){if(!Bu(e))return function(e){var n=[];if(null!=e)for(var t in ve(e))n.push(t);return n}(e);var n=so(e),t=[];for(var r in e)("constructor"!=r||!n&&Ee.call(e,r))&&t.push(r);return t}function Sr(e,n){return e<n}function Cr(e,n){var t=-1,i=Mu(e)?r(e.length):[];return er(e,(function(e,r,o){i[++t]=n(e,r,o)})),i}function Pr(e){var n=Zi(e);return 1==n.length&&n[0][2]?ho(n[0][0],n[0][1]):function(t){return t===e||wr(t,e,n)}}function Or(e,n){return lo(e)&&po(n)?ho(So(e),n):function(t){var r=va(t,e);return void 0===r&&r===n?ma(t,e):_r(n,r,3)}}function Nr(e,n,t,r,i){e!==n&&ur(n,(function(o,u){if(i||(i=new Lt),Bu(o))!function(e,n,t,r,i,o,u){var a=yo(e,t),l=yo(n,t),c=u.get(l);if(c)return void Wt(e,t,c);var f=o?o(a,l,t+"",e,n,u):void 0,s=void 0===f;if(s){var d=Iu(l),p=!d&&Lu(l),h=!d&&!p&&Zu(l);f=l,d||p||h?Iu(a)?f=a:Au(a)?f=gi(a):p?(s=!1,f=si(l,!0)):h?(s=!1,f=pi(l,!0)):f=[]:Ku(l)||Ru(l)?(f=a,Ru(a)?f=ua(a):Bu(a)&&!Uu(a)||(f=io(l))):s=!1}s&&(u.set(l,f),i(f,l,r,o,u),u.delete(l));Wt(e,t,f)}(e,n,u,t,Nr,r,i);else{var a=r?r(yo(e,u),o,u+"",e,n,i):void 0;void 0===a&&(a=o),Wt(e,u,a)}}),wa)}function zr(e,n){var t=e.length;if(t)return uo(n+=n<0?t:0,t)?e[n]:void 0}function Rr(e,n,t){n=n.length?hn(n,(function(e){return Iu(e)?function(n){return sr(n,1===e.length?e[0]:e)}:e})):[Ha];var r=-1;return n=hn(n,zn(Gi())),function(e,n){var t=e.length;for(e.sort(n);t--;)e[t]=e[t].value;return e}(Cr(e,(function(e,t,i){return{criteria:hn(n,(function(n){return n(e)})),index:++r,value:e}})),(function(e,n){return function(e,n,t){var r=-1,i=e.criteria,o=n.criteria,u=i.length,a=t.length;for(;++r<u;){var l=hi(i[r],o[r]);if(l){if(r>=a)return l;var c=t[r];return l*("desc"==c?-1:1)}}return e.index-n.index}(e,n,t)}))}function Ir(e,n,t){for(var r=-1,i=n.length,o={};++r<i;){var u=n[r],a=sr(e,u);t(a,u)&&$r(o,ai(u,e),a)}return o}function jr(e,n,t,r){var i=r?kn:xn,o=-1,u=n.length,a=e;for(e===n&&(n=gi(n)),t&&(a=hn(e,zn(t)));++o<u;)for(var l=0,c=n[o],f=t?t(c):c;(l=i(a,f,l,r))>-1;)a!==e&&Ye.call(a,l,1),Ye.call(e,l,1);return e}function Mr(e,n){for(var t=e?n.length:0,r=t-1;t--;){var i=n[t];if(t==r||i!==o){var o=i;uo(i)?Ye.call(e,i,1):Jr(e,i)}}return e}function Ar(e,n){return e+et(ft()*(n-e+1))}function Lr(e,n){var t="";if(!e||n<1||n>9007199254740991)return t;do{n%2&&(t+=e),(n=et(n/2))&&(e+=e)}while(n);return t}function Fr(e,n){return wo(vo(e,n,Ha),e+"")}function Dr(e){return Dt(Oa(e))}function Ur(e,n){var t=Oa(e);return Eo(t,Yt(n,0,t.length))}function $r(e,n,t,r){if(!Bu(e))return e;for(var i=-1,o=(n=ai(n,e)).length,u=o-1,a=e;null!=a&&++i<o;){var l=So(n[i]),c=t;if("__proto__"===l||"constructor"===l||"prototype"===l)return e;if(i!=u){var f=a[l];void 0===(c=r?r(f,l,a):void 0)&&(c=Bu(f)?f:uo(n[i+1])?[]:{})}Bt(a,l,c),a=a[l]}return e}var Wr=yt?function(e,n){return yt.set(e,n),e}:Ha,Br=Cn?function(e,n){return Cn(e,"toString",{configurable:!0,enumerable:!1,value:Ba(n),writable:!0})}:Ha;function Vr(e){return Eo(Oa(e))}function Qr(e,n,t){var i=-1,o=e.length;n<0&&(n=-n>o?0:o+n),(t=t>o?o:t)<0&&(t+=o),o=n>t?0:t-n>>>0,n>>>=0;for(var u=r(o);++i<o;)u[i]=e[i+n];return u}function Hr(e,n){var t;return er(e,(function(e,r,i){return!(t=n(e,r,i))})),!!t}function Kr(e,n,t){var r=0,i=null==e?r:e.length;if("number"==typeof n&&n==n&&i<=2147483647){for(;r<i;){var o=r+i>>>1,u=e[o];null!==u&&!Xu(u)&&(t?u<=n:u<n)?r=o+1:i=o}return i}return qr(e,n,Ha,t)}function qr(e,n,t,r){var i=0,o=null==e?0:e.length;if(0===o)return 0;for(var u=(n=t(n))!=n,a=null===n,l=Xu(n),c=void 0===n;i<o;){var f=et((i+o)/2),s=t(e[f]),d=void 0!==s,p=null===s,h=s==s,v=Xu(s);if(u)var m=r||h;else m=c?h&&(r||d):a?h&&d&&(r||!p):l?h&&d&&!p&&(r||!v):!p&&!v&&(r?s<=n:s<n);m?i=f+1:o=f}return at(o,4294967294)}function Yr(e,n){for(var t=-1,r=e.length,i=0,o=[];++t<r;){var u=e[t],a=n?n(u):u;if(!t||!Ou(a,l)){var l=a;o[i++]=0===u?0:u}}return o}function Gr(e){return"number"==typeof e?e:Xu(e)?NaN:+e}function Xr(e){if("string"==typeof e)return e;if(Iu(e))return hn(e,Xr)+"";if(Xu(e))return Ct?Ct.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n}function Zr(e,n,t){var r=-1,i=dn,o=e.length,u=!0,a=[],l=a;if(t)u=!1,i=pn;else if(o>=200){var c=n?null:Li(e);if(c)return Vn(c);u=!1,i=In,l=new At}else l=n?[]:a;e:for(;++r<o;){var f=e[r],s=n?n(f):f;if(f=t||0!==f?f:0,u&&s==s){for(var d=l.length;d--;)if(l[d]===s)continue e;n&&l.push(s),a.push(f)}else i(l,s,t)||(l!==a&&l.push(s),a.push(f))}return a}function Jr(e,n){return null==(e=mo(e,n=ai(n,e)))||delete e[So(Do(n))]}function ei(e,n,t,r){return $r(e,n,t(sr(e,n)),r)}function ni(e,n,t,r){for(var i=e.length,o=r?i:-1;(r?o--:++o<i)&&n(e[o],o,e););return t?Qr(e,r?0:o,r?o+1:i):Qr(e,r?o+1:0,r?i:o)}function ti(e,n){var t=e;return t instanceof Rt&&(t=t.value()),mn(n,(function(e,n){return n.func.apply(n.thisArg,vn([e],n.args))}),t)}function ri(e,n,t){var i=e.length;if(i<2)return i?Zr(e[0]):[];for(var o=-1,u=r(i);++o<i;)for(var a=e[o],l=-1;++l<i;)l!=o&&(u[o]=Jt(u[o]||a,e[l],n,t));return Zr(or(u,1),n,t)}function ii(e,n,t){for(var r=-1,i=e.length,o=n.length,u={};++r<i;){var a=r<o?n[r]:void 0;t(u,e[r],a)}return u}function oi(e){return Au(e)?e:[]}function ui(e){return"function"==typeof e?e:Ha}function ai(e,n){return Iu(e)?e:lo(e,n)?[e]:To(aa(e))}var li=Fr;function ci(e,n,t){var r=e.length;return t=void 0===t?r:t,!n&&t>=r?e:Qr(e,n,t)}var fi=Gn||function(e){return Ke.clearTimeout(e)};function si(e,n){if(n)return e.slice();var t=e.length,r=We?We(t):new e.constructor(t);return e.copy(r),r}function di(e){var n=new e.constructor(e.byteLength);return new Ae(n).set(new Ae(e)),n}function pi(e,n){var t=n?di(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}function hi(e,n){if(e!==n){var t=void 0!==e,r=null===e,i=e==e,o=Xu(e),u=void 0!==n,a=null===n,l=n==n,c=Xu(n);if(!a&&!c&&!o&&e>n||o&&u&&l&&!a&&!c||r&&u&&l||!t&&l||!i)return 1;if(!r&&!o&&!c&&e<n||c&&t&&i&&!r&&!o||a&&t&&i||!u&&i||!l)return-1}return 0}function vi(e,n,t,i){for(var o=-1,u=e.length,a=t.length,l=-1,c=n.length,f=ut(u-a,0),s=r(c+f),d=!i;++l<c;)s[l]=n[l];for(;++o<a;)(d||o<u)&&(s[t[o]]=e[o]);for(;f--;)s[l++]=e[o++];return s}function mi(e,n,t,i){for(var o=-1,u=e.length,a=-1,l=t.length,c=-1,f=n.length,s=ut(u-l,0),d=r(s+f),p=!i;++o<s;)d[o]=e[o];for(var h=o;++c<f;)d[h+c]=n[c];for(;++a<l;)(p||o<u)&&(d[h+t[a]]=e[o++]);return d}function gi(e,n){var t=-1,i=e.length;for(n||(n=r(i));++t<i;)n[t]=e[t];return n}function yi(e,n,t,r){var i=!t;t||(t={});for(var o=-1,u=n.length;++o<u;){var a=n[o],l=r?r(t[a],e[a],a,t,e):void 0;void 0===l&&(l=e[a]),i?Kt(t,a,l):Bt(t,a,l)}return t}function bi(e,n){return function(t,r){var i=Iu(t)?an:Qt,o=n?n():{};return i(t,e,Gi(r,2),o)}}function _i(e){return Fr((function(n,t){var r=-1,i=t.length,o=i>1?t[i-1]:void 0,u=i>2?t[2]:void 0;for(o=e.length>3&&"function"==typeof o?(i--,o):void 0,u&&ao(t[0],t[1],u)&&(o=i<3?void 0:o,i=1),n=ve(n);++r<i;){var a=t[r];a&&e(n,a,r,o)}return n}))}function wi(e,n){return function(t,r){if(null==t)return t;if(!Mu(t))return e(t,r);for(var i=t.length,o=n?i:-1,u=ve(t);(n?o--:++o<i)&&!1!==r(u[o],o,u););return t}}function xi(e){return function(n,t,r){for(var i=-1,o=ve(n),u=r(n),a=u.length;a--;){var l=u[e?a:++i];if(!1===t(o[l],l,o))break}return n}}function ki(e){return function(n){var t=Un(n=aa(n))?Kn(n):void 0,r=t?t[0]:n.charAt(0),i=t?ci(t,1).join(""):n.slice(1);return r[e]()+i}}function Ei(e){return function(n){return mn(Ua(Ra(n).replace(Re,"")),e,"")}}function Ti(e){return function(){var n=arguments;switch(n.length){case 0:return new e;case 1:return new e(n[0]);case 2:return new e(n[0],n[1]);case 3:return new e(n[0],n[1],n[2]);case 4:return new e(n[0],n[1],n[2],n[3]);case 5:return new e(n[0],n[1],n[2],n[3],n[4]);case 6:return new e(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new e(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var t=Ot(e.prototype),r=e.apply(t,n);return Bu(r)?r:t}}function Si(e){return function(n,t,r){var i=ve(n);if(!Mu(n)){var o=Gi(t,3);n=_a(n),t=function(e){return o(i[e],e,i)}}var u=e(n,t,r);return u>-1?i[o?n[u]:u]:void 0}}function Ci(e){return Vi((function(n){var t=n.length,r=t,i=zt.prototype.thru;for(e&&n.reverse();r--;){var u=n[r];if("function"!=typeof u)throw new ye(o);if(i&&!a&&"wrapper"==qi(u))var a=new zt([],!0)}for(r=a?r:t;++r<t;){var l=qi(u=n[r]),c="wrapper"==l?Ki(u):void 0;a=c&&co(c[0])&&424==c[1]&&!c[4].length&&1==c[9]?a[qi(c[0])].apply(a,c[3]):1==u.length&&co(u)?a[l]():a.thru(u)}return function(){var e=arguments,r=e[0];if(a&&1==e.length&&Iu(r))return a.plant(r).value();for(var i=0,o=t?n[i].apply(this,e):r;++i<t;)o=n[i].call(this,o);return o}}))}function Pi(e,n,t,i,o,u,a,l,c,f){var s=128&n,d=1&n,p=2&n,h=24&n,v=512&n,m=p?void 0:Ti(e);return function g(){for(var y=arguments.length,b=r(y),_=y;_--;)b[_]=arguments[_];if(h)var w=Yi(g),x=An(b,w);if(i&&(b=vi(b,i,o,h)),u&&(b=mi(b,u,a,h)),y-=x,h&&y<f){var k=Bn(b,w);return Mi(e,n,Pi,g.placeholder,t,b,k,l,c,f-y)}var E=d?t:this,T=p?E[e]:e;return y=b.length,l?b=go(b,l):v&&y>1&&b.reverse(),s&&c<y&&(b.length=c),this&&this!==Ke&&this instanceof g&&(T=m||Ti(T)),T.apply(E,b)}}function Oi(e,n){return function(t,r){return function(e,n,t,r){return lr(e,(function(e,i,o){n(r,t(e),i,o)})),r}(t,e,n(r),{})}}function Ni(e,n){return function(t,r){var i;if(void 0===t&&void 0===r)return n;if(void 0!==t&&(i=t),void 0!==r){if(void 0===i)return r;"string"==typeof t||"string"==typeof r?(t=Xr(t),r=Xr(r)):(t=Gr(t),r=Gr(r)),i=e(t,r)}return i}}function zi(e){return Vi((function(n){return n=hn(n,zn(Gi())),Fr((function(t){var r=this;return e(n,(function(e){return un(e,r,t)}))}))}))}function Ri(e,n){var t=(n=void 0===n?" ":Xr(n)).length;if(t<2)return t?Lr(n,e):n;var r=Lr(n,Jn(e/Hn(n)));return Un(n)?ci(Kn(r),0,e).join(""):r.slice(0,e)}function Ii(e){return function(n,t,i){return i&&"number"!=typeof i&&ao(n,t,i)&&(t=i=void 0),n=ta(n),void 0===t?(t=n,n=0):t=ta(t),function(e,n,t,i){for(var o=-1,u=ut(Jn((n-e)/(t||1)),0),a=r(u);u--;)a[i?u:++o]=e,e+=t;return a}(n,t,i=void 0===i?n<t?1:-1:ta(i),e)}}function ji(e){return function(n,t){return"string"==typeof n&&"string"==typeof t||(n=oa(n),t=oa(t)),e(n,t)}}function Mi(e,n,t,r,i,o,u,a,l,c){var f=8&n;n|=f?32:64,4&(n&=~(f?64:32))||(n&=-4);var s=[e,n,i,f?o:void 0,f?u:void 0,f?void 0:o,f?void 0:u,a,l,c],d=t.apply(void 0,s);return co(e)&&bo(d,s),d.placeholder=r,xo(d,e,n)}function Ai(e){var n=he[e];return function(e,t){if(e=oa(e),(t=null==t?0:at(ra(t),292))&&rt(e)){var r=(aa(e)+"e").split("e");return+((r=(aa(n(r[0]+"e"+(+r[1]+t)))+"e").split("e"))[0]+"e"+(+r[1]-t))}return n(e)}}var Li=vt&&1/Vn(new vt([,-0]))[1]==1/0?function(e){return new vt(e)}:Xa;function Fi(e){return function(n){var t=to(n);return t==v?$n(n):t==b?Qn(n):function(e,n){return hn(n,(function(n){return[n,e[n]]}))}(n,e(n))}}function Di(e,n,t,i,a,l,c,f){var s=2&n;if(!s&&"function"!=typeof e)throw new ye(o);var d=i?i.length:0;if(d||(n&=-97,i=a=void 0),c=void 0===c?c:ut(ra(c),0),f=void 0===f?f:ra(f),d-=a?a.length:0,64&n){var p=i,h=a;i=a=void 0}var v=s?void 0:Ki(e),m=[e,n,t,i,a,p,h,l,c,f];if(v&&function(e,n){var t=e[1],r=n[1],i=t|r,o=i<131,a=128==r&&8==t||128==r&&256==t&&e[7].length<=n[8]||384==r&&n[7].length<=n[8]&&8==t;if(!o&&!a)return e;1&r&&(e[2]=n[2],i|=1&t?0:4);var l=n[3];if(l){var c=e[3];e[3]=c?vi(c,l,n[4]):l,e[4]=c?Bn(e[3],u):n[4]}(l=n[5])&&(c=e[5],e[5]=c?mi(c,l,n[6]):l,e[6]=c?Bn(e[5],u):n[6]);(l=n[7])&&(e[7]=l);128&r&&(e[8]=null==e[8]?n[8]:at(e[8],n[8]));null==e[9]&&(e[9]=n[9]);e[0]=n[0],e[1]=i}(m,v),e=m[0],n=m[1],t=m[2],i=m[3],a=m[4],!(f=m[9]=void 0===m[9]?s?0:e.length:ut(m[9]-d,0))&&24&n&&(n&=-25),n&&1!=n)g=8==n||16==n?function(e,n,t){var i=Ti(e);return function o(){for(var u=arguments.length,a=r(u),l=u,c=Yi(o);l--;)a[l]=arguments[l];var f=u<3&&a[0]!==c&&a[u-1]!==c?[]:Bn(a,c);if((u-=f.length)<t)return Mi(e,n,Pi,o.placeholder,void 0,a,f,void 0,void 0,t-u);var s=this&&this!==Ke&&this instanceof o?i:e;return un(s,this,a)}}(e,n,f):32!=n&&33!=n||a.length?Pi.apply(void 0,m):function(e,n,t,i){var o=1&n,u=Ti(e);return function n(){for(var a=-1,l=arguments.length,c=-1,f=i.length,s=r(f+l),d=this&&this!==Ke&&this instanceof n?u:e;++c<f;)s[c]=i[c];for(;l--;)s[c++]=arguments[++a];return un(d,o?t:this,s)}}(e,n,t,i);else var g=function(e,n,t){var r=1&n,i=Ti(e);return function n(){var o=this&&this!==Ke&&this instanceof n?i:e;return o.apply(r?t:this,arguments)}}(e,n,t);return xo((v?Wr:bo)(g,m),e,n)}function Ui(e,n,t,r){return void 0===e||Ou(e,we[t])&&!Ee.call(r,t)?n:e}function $i(e,n,t,r,i,o){return Bu(e)&&Bu(n)&&(o.set(n,e),Nr(e,n,void 0,$i,o),o.delete(n)),e}function Wi(e){return Ku(e)?void 0:e}function Bi(e,n,t,r,i,o){var u=1&t,a=e.length,l=n.length;if(a!=l&&!(u&&l>a))return!1;var c=o.get(e),f=o.get(n);if(c&&f)return c==n&&f==e;var s=-1,d=!0,p=2&t?new At:void 0;for(o.set(e,n),o.set(n,e);++s<a;){var h=e[s],v=n[s];if(r)var m=u?r(v,h,s,n,e,o):r(h,v,s,e,n,o);if(void 0!==m){if(m)continue;d=!1;break}if(p){if(!yn(n,(function(e,n){if(!In(p,n)&&(h===e||i(h,e,t,r,o)))return p.push(n)}))){d=!1;break}}else if(h!==v&&!i(h,v,t,r,o)){d=!1;break}}return o.delete(e),o.delete(n),d}function Vi(e){return wo(vo(e,void 0,jo),e+"")}function Qi(e){return dr(e,_a,eo)}function Hi(e){return dr(e,wa,no)}var Ki=yt?function(e){return yt.get(e)}:Xa;function qi(e){for(var n=e.name+"",t=bt[n],r=Ee.call(bt,n)?t.length:0;r--;){var i=t[r],o=i.func;if(null==o||o==e)return i.name}return n}function Yi(e){return(Ee.call(Pt,"placeholder")?Pt:e).placeholder}function Gi(){var e=Pt.iteratee||Ka;return e=e===Ka?kr:e,arguments.length?e(arguments[0],arguments[1]):e}function Xi(e,n){var t,r,i=e.__data__;return("string"==(r=typeof(t=n))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t)?i["string"==typeof n?"string":"hash"]:i.map}function Zi(e){for(var n=_a(e),t=n.length;t--;){var r=n[t],i=e[r];n[t]=[r,i,po(i)]}return n}function Ji(e,n){var t=function(e,n){return null==e?void 0:e[n]}(e,n);return xr(t)?t:void 0}var eo=nt?function(e){return null==e?[]:(e=ve(e),sn(nt(e),(function(n){return qe.call(e,n)})))}:il,no=nt?function(e){for(var n=[];e;)vn(n,eo(e)),e=Qe(e);return n}:il,to=pr;function ro(e,n,t){for(var r=-1,i=(n=ai(n,e)).length,o=!1;++r<i;){var u=So(n[r]);if(!(o=null!=e&&t(e,u)))break;e=e[u]}return o||++r!=i?o:!!(i=null==e?0:e.length)&&Wu(i)&&uo(u,i)&&(Iu(e)||Ru(e))}function io(e){return"function"!=typeof e.constructor||so(e)?{}:Ot(Qe(e))}function oo(e){return Iu(e)||Ru(e)||!!(Xe&&e&&e[Xe])}function uo(e,n){var t=typeof e;return!!(n=null==n?9007199254740991:n)&&("number"==t||"symbol"!=t&&le.test(e))&&e>-1&&e%1==0&&e<n}function ao(e,n,t){if(!Bu(t))return!1;var r=typeof n;return!!("number"==r?Mu(t)&&uo(n,t.length):"string"==r&&n in t)&&Ou(t[n],e)}function lo(e,n){if(Iu(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!Xu(e))||(V.test(e)||!B.test(e)||null!=n&&e in ve(n))}function co(e){var n=qi(e),t=Pt[n];if("function"!=typeof t||!(n in Rt.prototype))return!1;if(e===t)return!0;var r=Ki(t);return!!r&&e===r[0]}(dt&&to(new dt(new ArrayBuffer(1)))!=E||pt&&to(new pt)!=v||ht&&"[object Promise]"!=to(ht.resolve())||vt&&to(new vt)!=b||mt&&to(new mt)!=x)&&(to=function(e){var n=pr(e),t=n==g?e.constructor:void 0,r=t?Co(t):"";if(r)switch(r){case _t:return E;case wt:return v;case xt:return"[object Promise]";case kt:return b;case Et:return x}return n});var fo=xe?Uu:ol;function so(e){var n=e&&e.constructor;return e===("function"==typeof n&&n.prototype||we)}function po(e){return e==e&&!Bu(e)}function ho(e,n){return function(t){return null!=t&&(t[e]===n&&(void 0!==n||e in ve(t)))}}function vo(e,n,t){return n=ut(void 0===n?e.length-1:n,0),function(){for(var i=arguments,o=-1,u=ut(i.length-n,0),a=r(u);++o<u;)a[o]=i[n+o];o=-1;for(var l=r(n+1);++o<n;)l[o]=i[o];return l[n]=t(a),un(e,this,l)}}function mo(e,n){return n.length<2?e:sr(e,Qr(n,0,-1))}function go(e,n){for(var t=e.length,r=at(n.length,t),i=gi(e);r--;){var o=n[r];e[r]=uo(o,t)?i[o]:void 0}return e}function yo(e,n){if(("constructor"!==n||"function"!=typeof e[n])&&"__proto__"!=n)return e[n]}var bo=ko(Wr),_o=Zn||function(e,n){return Ke.setTimeout(e,n)},wo=ko(Br);function xo(e,n,t){var r=n+"";return wo(e,function(e,n){var t=n.length;if(!t)return e;var r=t-1;return n[r]=(t>1?"& ":"")+n[r],n=n.join(t>2?", ":" "),e.replace(X,"{\n/* [wrapped with "+n+"] */\n")}(r,function(e,n){return ln(a,(function(t){var r="_."+t[0];n&t[1]&&!dn(e,r)&&e.push(r)})),e.sort()}(function(e){var n=e.match(Z);return n?n[1].split(J):[]}(r),t)))}function ko(e){var n=0,t=0;return function(){var r=lt(),i=16-(r-t);if(t=r,i>0){if(++n>=800)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}function Eo(e,n){var t=-1,r=e.length,i=r-1;for(n=void 0===n?r:n;++t<n;){var o=Ar(t,i),u=e[o];e[o]=e[t],e[t]=u}return e.length=n,e}var To=function(e){var n=ku(e,(function(e){return 500===t.size&&t.clear(),e})),t=n.cache;return n}((function(e){var n=[];return 46===e.charCodeAt(0)&&n.push(""),e.replace(Q,(function(e,t,r,i){n.push(r?i.replace(ne,"$1"):t||e)})),n}));function So(e){if("string"==typeof e||Xu(e))return e;var n=e+"";return"0"==n&&1/e==-1/0?"-0":n}function Co(e){if(null!=e){try{return ke.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Po(e){if(e instanceof Rt)return e.clone();var n=new zt(e.__wrapped__,e.__chain__);return n.__actions__=gi(e.__actions__),n.__index__=e.__index__,n.__values__=e.__values__,n}var Oo=Fr((function(e,n){return Au(e)?Jt(e,or(n,1,Au,!0)):[]})),No=Fr((function(e,n){var t=Do(n);return Au(t)&&(t=void 0),Au(e)?Jt(e,or(n,1,Au,!0),Gi(t,2)):[]})),zo=Fr((function(e,n){var t=Do(n);return Au(t)&&(t=void 0),Au(e)?Jt(e,or(n,1,Au,!0),void 0,t):[]}));function Ro(e,n,t){var r=null==e?0:e.length;if(!r)return-1;var i=null==t?0:ra(t);return i<0&&(i=ut(r+i,0)),wn(e,Gi(n,3),i)}function Io(e,n,t){var r=null==e?0:e.length;if(!r)return-1;var i=r-1;return void 0!==t&&(i=ra(t),i=t<0?ut(r+i,0):at(i,r-1)),wn(e,Gi(n,3),i,!0)}function jo(e){return(null==e?0:e.length)?or(e,1):[]}function Mo(e){return e&&e.length?e[0]:void 0}var Ao=Fr((function(e){var n=hn(e,oi);return n.length&&n[0]===e[0]?gr(n):[]})),Lo=Fr((function(e){var n=Do(e),t=hn(e,oi);return n===Do(t)?n=void 0:t.pop(),t.length&&t[0]===e[0]?gr(t,Gi(n,2)):[]})),Fo=Fr((function(e){var n=Do(e),t=hn(e,oi);return(n="function"==typeof n?n:void 0)&&t.pop(),t.length&&t[0]===e[0]?gr(t,void 0,n):[]}));function Do(e){var n=null==e?0:e.length;return n?e[n-1]:void 0}var Uo=Fr($o);function $o(e,n){return e&&e.length&&n&&n.length?jr(e,n):e}var Wo=Vi((function(e,n){var t=null==e?0:e.length,r=qt(e,n);return Mr(e,hn(n,(function(e){return uo(e,t)?+e:e})).sort(hi)),r}));function Bo(e){return null==e?e:st.call(e)}var Vo=Fr((function(e){return Zr(or(e,1,Au,!0))})),Qo=Fr((function(e){var n=Do(e);return Au(n)&&(n=void 0),Zr(or(e,1,Au,!0),Gi(n,2))})),Ho=Fr((function(e){var n=Do(e);return n="function"==typeof n?n:void 0,Zr(or(e,1,Au,!0),void 0,n)}));function Ko(e){if(!e||!e.length)return[];var n=0;return e=sn(e,(function(e){if(Au(e))return n=ut(e.length,n),!0})),Nn(n,(function(n){return hn(e,Sn(n))}))}function qo(e,n){if(!e||!e.length)return[];var t=Ko(e);return null==n?t:hn(t,(function(e){return un(n,void 0,e)}))}var Yo=Fr((function(e,n){return Au(e)?Jt(e,n):[]})),Go=Fr((function(e){return ri(sn(e,Au))})),Xo=Fr((function(e){var n=Do(e);return Au(n)&&(n=void 0),ri(sn(e,Au),Gi(n,2))})),Zo=Fr((function(e){var n=Do(e);return n="function"==typeof n?n:void 0,ri(sn(e,Au),void 0,n)})),Jo=Fr(Ko);var eu=Fr((function(e){var n=e.length,t=n>1?e[n-1]:void 0;return t="function"==typeof t?(e.pop(),t):void 0,qo(e,t)}));function nu(e){var n=Pt(e);return n.__chain__=!0,n}function tu(e,n){return n(e)}var ru=Vi((function(e){var n=e.length,t=n?e[0]:0,r=this.__wrapped__,i=function(n){return qt(n,e)};return!(n>1||this.__actions__.length)&&r instanceof Rt&&uo(t)?((r=r.slice(t,+t+(n?1:0))).__actions__.push({func:tu,args:[i],thisArg:void 0}),new zt(r,this.__chain__).thru((function(e){return n&&!e.length&&e.push(void 0),e}))):this.thru(i)}));var iu=bi((function(e,n,t){Ee.call(e,t)?++e[t]:Kt(e,t,1)}));var ou=Si(Ro),uu=Si(Io);function au(e,n){return(Iu(e)?ln:er)(e,Gi(n,3))}function lu(e,n){return(Iu(e)?cn:nr)(e,Gi(n,3))}var cu=bi((function(e,n,t){Ee.call(e,t)?e[t].push(n):Kt(e,t,[n])}));var fu=Fr((function(e,n,t){var i=-1,o="function"==typeof n,u=Mu(e)?r(e.length):[];return er(e,(function(e){u[++i]=o?un(n,e,t):yr(e,n,t)})),u})),su=bi((function(e,n,t){Kt(e,t,n)}));function du(e,n){return(Iu(e)?hn:Cr)(e,Gi(n,3))}var pu=bi((function(e,n,t){e[t?0:1].push(n)}),(function(){return[[],[]]}));var hu=Fr((function(e,n){if(null==e)return[];var t=n.length;return t>1&&ao(e,n[0],n[1])?n=[]:t>2&&ao(n[0],n[1],n[2])&&(n=[n[0]]),Rr(e,or(n,1),[])})),vu=Xn||function(){return Ke.Date.now()};function mu(e,n,t){return n=t?void 0:n,Di(e,128,void 0,void 0,void 0,void 0,n=e&&null==n?e.length:n)}function gu(e,n){var t;if("function"!=typeof n)throw new ye(o);return e=ra(e),function(){return--e>0&&(t=n.apply(this,arguments)),e<=1&&(n=void 0),t}}var yu=Fr((function(e,n,t){var r=1;if(t.length){var i=Bn(t,Yi(yu));r|=32}return Di(e,r,n,t,i)})),bu=Fr((function(e,n,t){var r=3;if(t.length){var i=Bn(t,Yi(bu));r|=32}return Di(n,r,e,t,i)}));function _u(e,n,t){var r,i,u,a,l,c,f=0,s=!1,d=!1,p=!0;if("function"!=typeof e)throw new ye(o);function h(n){var t=r,o=i;return r=i=void 0,f=n,a=e.apply(o,t)}function v(e){return f=e,l=_o(g,n),s?h(e):a}function m(e){var t=e-c;return void 0===c||t>=n||t<0||d&&e-f>=u}function g(){var e=vu();if(m(e))return y(e);l=_o(g,function(e){var t=n-(e-c);return d?at(t,u-(e-f)):t}(e))}function y(e){return l=void 0,p&&r?h(e):(r=i=void 0,a)}function b(){var e=vu(),t=m(e);if(r=arguments,i=this,c=e,t){if(void 0===l)return v(c);if(d)return fi(l),l=_o(g,n),h(c)}return void 0===l&&(l=_o(g,n)),a}return n=oa(n)||0,Bu(t)&&(s=!!t.leading,u=(d="maxWait"in t)?ut(oa(t.maxWait)||0,n):u,p="trailing"in t?!!t.trailing:p),b.cancel=function(){void 0!==l&&fi(l),f=0,r=c=i=l=void 0},b.flush=function(){return void 0===l?a:y(vu())},b}var wu=Fr((function(e,n){return Zt(e,1,n)})),xu=Fr((function(e,n,t){return Zt(e,oa(n)||0,t)}));function ku(e,n){if("function"!=typeof e||null!=n&&"function"!=typeof n)throw new ye(o);var t=function(){var r=arguments,i=n?n.apply(this,r):r[0],o=t.cache;if(o.has(i))return o.get(i);var u=e.apply(this,r);return t.cache=o.set(i,u)||o,u};return t.cache=new(ku.Cache||Mt),t}function Eu(e){if("function"!=typeof e)throw new ye(o);return function(){var n=arguments;switch(n.length){case 0:return!e.call(this);case 1:return!e.call(this,n[0]);case 2:return!e.call(this,n[0],n[1]);case 3:return!e.call(this,n[0],n[1],n[2])}return!e.apply(this,n)}}ku.Cache=Mt;var Tu=li((function(e,n){var t=(n=1==n.length&&Iu(n[0])?hn(n[0],zn(Gi())):hn(or(n,1),zn(Gi()))).length;return Fr((function(r){for(var i=-1,o=at(r.length,t);++i<o;)r[i]=n[i].call(this,r[i]);return un(e,this,r)}))})),Su=Fr((function(e,n){return Di(e,32,void 0,n,Bn(n,Yi(Su)))})),Cu=Fr((function(e,n){return Di(e,64,void 0,n,Bn(n,Yi(Cu)))})),Pu=Vi((function(e,n){return Di(e,256,void 0,void 0,void 0,n)}));function Ou(e,n){return e===n||e!=e&&n!=n}var Nu=ji(hr),zu=ji((function(e,n){return e>=n})),Ru=br(function(){return arguments}())?br:function(e){return Vu(e)&&Ee.call(e,"callee")&&!qe.call(e,"callee")},Iu=r.isArray,ju=Je?zn(Je):function(e){return Vu(e)&&pr(e)==k};function Mu(e){return null!=e&&Wu(e.length)&&!Uu(e)}function Au(e){return Vu(e)&&Mu(e)}var Lu=tt||ol,Fu=en?zn(en):function(e){return Vu(e)&&pr(e)==s};function Du(e){if(!Vu(e))return!1;var n=pr(e);return n==d||"[object DOMException]"==n||"string"==typeof e.message&&"string"==typeof e.name&&!Ku(e)}function Uu(e){if(!Bu(e))return!1;var n=pr(e);return n==p||n==h||"[object AsyncFunction]"==n||"[object Proxy]"==n}function $u(e){return"number"==typeof e&&e==ra(e)}function Wu(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}function Bu(e){var n=typeof e;return null!=e&&("object"==n||"function"==n)}function Vu(e){return null!=e&&"object"==typeof e}var Qu=nn?zn(nn):function(e){return Vu(e)&&to(e)==v};function Hu(e){return"number"==typeof e||Vu(e)&&pr(e)==m}function Ku(e){if(!Vu(e)||pr(e)!=g)return!1;var n=Qe(e);if(null===n)return!0;var t=Ee.call(n,"constructor")&&n.constructor;return"function"==typeof t&&t instanceof t&&ke.call(t)==Pe}var qu=tn?zn(tn):function(e){return Vu(e)&&pr(e)==y};var Yu=rn?zn(rn):function(e){return Vu(e)&&to(e)==b};function Gu(e){return"string"==typeof e||!Iu(e)&&Vu(e)&&pr(e)==_}function Xu(e){return"symbol"==typeof e||Vu(e)&&pr(e)==w}var Zu=on?zn(on):function(e){return Vu(e)&&Wu(e.length)&&!!Ue[pr(e)]};var Ju=ji(Sr),ea=ji((function(e,n){return e<=n}));function na(e){if(!e)return[];if(Mu(e))return Gu(e)?Kn(e):gi(e);if(Ze&&e[Ze])return function(e){for(var n,t=[];!(n=e.next()).done;)t.push(n.value);return t}(e[Ze]());var n=to(e);return(n==v?$n:n==b?Vn:Oa)(e)}function ta(e){return e?(e=oa(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function ra(e){var n=ta(e),t=n%1;return n==n?t?n-t:n:0}function ia(e){return e?Yt(ra(e),0,4294967295):0}function oa(e){if("number"==typeof e)return e;if(Xu(e))return NaN;if(Bu(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=Bu(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(q,"");var t=oe.test(e);return t||ae.test(e)?Ve(e.slice(2),t?2:8):ie.test(e)?NaN:+e}function ua(e){return yi(e,wa(e))}function aa(e){return null==e?"":Xr(e)}var la=_i((function(e,n){if(so(n)||Mu(n))yi(n,_a(n),e);else for(var t in n)Ee.call(n,t)&&Bt(e,t,n[t])})),ca=_i((function(e,n){yi(n,wa(n),e)})),fa=_i((function(e,n,t,r){yi(n,wa(n),e,r)})),sa=_i((function(e,n,t,r){yi(n,_a(n),e,r)})),da=Vi(qt);var pa=Fr((function(e,n){e=ve(e);var t=-1,r=n.length,i=r>2?n[2]:void 0;for(i&&ao(n[0],n[1],i)&&(r=1);++t<r;)for(var o=n[t],u=wa(o),a=-1,l=u.length;++a<l;){var c=u[a],f=e[c];(void 0===f||Ou(f,we[c])&&!Ee.call(e,c))&&(e[c]=o[c])}return e})),ha=Fr((function(e){return e.push(void 0,$i),un(ka,void 0,e)}));function va(e,n,t){var r=null==e?void 0:sr(e,n);return void 0===r?t:r}function ma(e,n){return null!=e&&ro(e,n,mr)}var ga=Oi((function(e,n,t){null!=n&&"function"!=typeof n.toString&&(n=Ce.call(n)),e[n]=t}),Ba(Ha)),ya=Oi((function(e,n,t){null!=n&&"function"!=typeof n.toString&&(n=Ce.call(n)),Ee.call(e,n)?e[n].push(t):e[n]=[t]}),Gi),ba=Fr(yr);function _a(e){return Mu(e)?Ft(e):Er(e)}function wa(e){return Mu(e)?Ft(e,!0):Tr(e)}var xa=_i((function(e,n,t){Nr(e,n,t)})),ka=_i((function(e,n,t,r){Nr(e,n,t,r)})),Ea=Vi((function(e,n){var t={};if(null==e)return t;var r=!1;n=hn(n,(function(n){return n=ai(n,e),r||(r=n.length>1),n})),yi(e,Hi(e),t),r&&(t=Gt(t,7,Wi));for(var i=n.length;i--;)Jr(t,n[i]);return t}));var Ta=Vi((function(e,n){return null==e?{}:function(e,n){return Ir(e,n,(function(n,t){return ma(e,t)}))}(e,n)}));function Sa(e,n){if(null==e)return{};var t=hn(Hi(e),(function(e){return[e]}));return n=Gi(n),Ir(e,t,(function(e,t){return n(e,t[0])}))}var Ca=Fi(_a),Pa=Fi(wa);function Oa(e){return null==e?[]:Rn(e,_a(e))}var Na=Ei((function(e,n,t){return n=n.toLowerCase(),e+(t?za(n):n)}));function za(e){return Da(aa(e).toLowerCase())}function Ra(e){return(e=aa(e))&&e.replace(ce,Ln).replace(Ie,"")}var Ia=Ei((function(e,n,t){return e+(t?"-":"")+n.toLowerCase()})),ja=Ei((function(e,n,t){return e+(t?" ":"")+n.toLowerCase()})),Ma=ki("toLowerCase");var Aa=Ei((function(e,n,t){return e+(t?"_":"")+n.toLowerCase()}));var La=Ei((function(e,n,t){return e+(t?" ":"")+Da(n)}));var Fa=Ei((function(e,n,t){return e+(t?" ":"")+n.toUpperCase()})),Da=ki("toUpperCase");function Ua(e,n,t){return e=aa(e),void 0===(n=t?void 0:n)?function(e){return Le.test(e)}(e)?function(e){return e.match(Me)||[]}(e):function(e){return e.match(ee)||[]}(e):e.match(n)||[]}var $a=Fr((function(e,n){try{return un(e,void 0,n)}catch(e){return Du(e)?e:new de(e)}})),Wa=Vi((function(e,n){return ln(n,(function(n){n=So(n),Kt(e,n,yu(e[n],e))})),e}));function Ba(e){return function(){return e}}var Va=Ci(),Qa=Ci(!0);function Ha(e){return e}function Ka(e){return kr("function"==typeof e?e:Gt(e,1))}var qa=Fr((function(e,n){return function(t){return yr(t,e,n)}})),Ya=Fr((function(e,n){return function(t){return yr(e,t,n)}}));function Ga(e,n,t){var r=_a(n),i=fr(n,r);null!=t||Bu(n)&&(i.length||!r.length)||(t=n,n=e,e=this,i=fr(n,_a(n)));var o=!(Bu(t)&&"chain"in t&&!t.chain),u=Uu(e);return ln(i,(function(t){var r=n[t];e[t]=r,u&&(e.prototype[t]=function(){var n=this.__chain__;if(o||n){var t=e(this.__wrapped__),i=t.__actions__=gi(this.__actions__);return i.push({func:r,args:arguments,thisArg:e}),t.__chain__=n,t}return r.apply(e,vn([this.value()],arguments))})})),e}function Xa(){}var Za=zi(hn),Ja=zi(fn),el=zi(yn);function nl(e){return lo(e)?Sn(So(e)):function(e){return function(n){return sr(n,e)}}(e)}var tl=Ii(),rl=Ii(!0);function il(){return[]}function ol(){return!1}var ul=Ni((function(e,n){return e+n}),0),al=Ai("ceil"),ll=Ni((function(e,n){return e/n}),1),cl=Ai("floor");var fl,sl=Ni((function(e,n){return e*n}),1),dl=Ai("round"),pl=Ni((function(e,n){return e-n}),0);return Pt.after=function(e,n){if("function"!=typeof n)throw new ye(o);return e=ra(e),function(){if(--e<1)return n.apply(this,arguments)}},Pt.ary=mu,Pt.assign=la,Pt.assignIn=ca,Pt.assignInWith=fa,Pt.assignWith=sa,Pt.at=da,Pt.before=gu,Pt.bind=yu,Pt.bindAll=Wa,Pt.bindKey=bu,Pt.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Iu(e)?e:[e]},Pt.chain=nu,Pt.chunk=function(e,n,t){n=(t?ao(e,n,t):void 0===n)?1:ut(ra(n),0);var i=null==e?0:e.length;if(!i||n<1)return[];for(var o=0,u=0,a=r(Jn(i/n));o<i;)a[u++]=Qr(e,o,o+=n);return a},Pt.compact=function(e){for(var n=-1,t=null==e?0:e.length,r=0,i=[];++n<t;){var o=e[n];o&&(i[r++]=o)}return i},Pt.concat=function(){var e=arguments.length;if(!e)return[];for(var n=r(e-1),t=arguments[0],i=e;i--;)n[i-1]=arguments[i];return vn(Iu(t)?gi(t):[t],or(n,1))},Pt.cond=function(e){var n=null==e?0:e.length,t=Gi();return e=n?hn(e,(function(e){if("function"!=typeof e[1])throw new ye(o);return[t(e[0]),e[1]]})):[],Fr((function(t){for(var r=-1;++r<n;){var i=e[r];if(un(i[0],this,t))return un(i[1],this,t)}}))},Pt.conforms=function(e){return function(e){var n=_a(e);return function(t){return Xt(t,e,n)}}(Gt(e,1))},Pt.constant=Ba,Pt.countBy=iu,Pt.create=function(e,n){var t=Ot(e);return null==n?t:Ht(t,n)},Pt.curry=function e(n,t,r){var i=Di(n,8,void 0,void 0,void 0,void 0,void 0,t=r?void 0:t);return i.placeholder=e.placeholder,i},Pt.curryRight=function e(n,t,r){var i=Di(n,16,void 0,void 0,void 0,void 0,void 0,t=r?void 0:t);return i.placeholder=e.placeholder,i},Pt.debounce=_u,Pt.defaults=pa,Pt.defaultsDeep=ha,Pt.defer=wu,Pt.delay=xu,Pt.difference=Oo,Pt.differenceBy=No,Pt.differenceWith=zo,Pt.drop=function(e,n,t){var r=null==e?0:e.length;return r?Qr(e,(n=t||void 0===n?1:ra(n))<0?0:n,r):[]},Pt.dropRight=function(e,n,t){var r=null==e?0:e.length;return r?Qr(e,0,(n=r-(n=t||void 0===n?1:ra(n)))<0?0:n):[]},Pt.dropRightWhile=function(e,n){return e&&e.length?ni(e,Gi(n,3),!0,!0):[]},Pt.dropWhile=function(e,n){return e&&e.length?ni(e,Gi(n,3),!0):[]},Pt.fill=function(e,n,t,r){var i=null==e?0:e.length;return i?(t&&"number"!=typeof t&&ao(e,n,t)&&(t=0,r=i),function(e,n,t,r){var i=e.length;for((t=ra(t))<0&&(t=-t>i?0:i+t),(r=void 0===r||r>i?i:ra(r))<0&&(r+=i),r=t>r?0:ia(r);t<r;)e[t++]=n;return e}(e,n,t,r)):[]},Pt.filter=function(e,n){return(Iu(e)?sn:ir)(e,Gi(n,3))},Pt.flatMap=function(e,n){return or(du(e,n),1)},Pt.flatMapDeep=function(e,n){return or(du(e,n),1/0)},Pt.flatMapDepth=function(e,n,t){return t=void 0===t?1:ra(t),or(du(e,n),t)},Pt.flatten=jo,Pt.flattenDeep=function(e){return(null==e?0:e.length)?or(e,1/0):[]},Pt.flattenDepth=function(e,n){return(null==e?0:e.length)?or(e,n=void 0===n?1:ra(n)):[]},Pt.flip=function(e){return Di(e,512)},Pt.flow=Va,Pt.flowRight=Qa,Pt.fromPairs=function(e){for(var n=-1,t=null==e?0:e.length,r={};++n<t;){var i=e[n];r[i[0]]=i[1]}return r},Pt.functions=function(e){return null==e?[]:fr(e,_a(e))},Pt.functionsIn=function(e){return null==e?[]:fr(e,wa(e))},Pt.groupBy=cu,Pt.initial=function(e){return(null==e?0:e.length)?Qr(e,0,-1):[]},Pt.intersection=Ao,Pt.intersectionBy=Lo,Pt.intersectionWith=Fo,Pt.invert=ga,Pt.invertBy=ya,Pt.invokeMap=fu,Pt.iteratee=Ka,Pt.keyBy=su,Pt.keys=_a,Pt.keysIn=wa,Pt.map=du,Pt.mapKeys=function(e,n){var t={};return n=Gi(n,3),lr(e,(function(e,r,i){Kt(t,n(e,r,i),e)})),t},Pt.mapValues=function(e,n){var t={};return n=Gi(n,3),lr(e,(function(e,r,i){Kt(t,r,n(e,r,i))})),t},Pt.matches=function(e){return Pr(Gt(e,1))},Pt.matchesProperty=function(e,n){return Or(e,Gt(n,1))},Pt.memoize=ku,Pt.merge=xa,Pt.mergeWith=ka,Pt.method=qa,Pt.methodOf=Ya,Pt.mixin=Ga,Pt.negate=Eu,Pt.nthArg=function(e){return e=ra(e),Fr((function(n){return zr(n,e)}))},Pt.omit=Ea,Pt.omitBy=function(e,n){return Sa(e,Eu(Gi(n)))},Pt.once=function(e){return gu(2,e)},Pt.orderBy=function(e,n,t,r){return null==e?[]:(Iu(n)||(n=null==n?[]:[n]),Iu(t=r?void 0:t)||(t=null==t?[]:[t]),Rr(e,n,t))},Pt.over=Za,Pt.overArgs=Tu,Pt.overEvery=Ja,Pt.overSome=el,Pt.partial=Su,Pt.partialRight=Cu,Pt.partition=pu,Pt.pick=Ta,Pt.pickBy=Sa,Pt.property=nl,Pt.propertyOf=function(e){return function(n){return null==e?void 0:sr(e,n)}},Pt.pull=Uo,Pt.pullAll=$o,Pt.pullAllBy=function(e,n,t){return e&&e.length&&n&&n.length?jr(e,n,Gi(t,2)):e},Pt.pullAllWith=function(e,n,t){return e&&e.length&&n&&n.length?jr(e,n,void 0,t):e},Pt.pullAt=Wo,Pt.range=tl,Pt.rangeRight=rl,Pt.rearg=Pu,Pt.reject=function(e,n){return(Iu(e)?sn:ir)(e,Eu(Gi(n,3)))},Pt.remove=function(e,n){var t=[];if(!e||!e.length)return t;var r=-1,i=[],o=e.length;for(n=Gi(n,3);++r<o;){var u=e[r];n(u,r,e)&&(t.push(u),i.push(r))}return Mr(e,i),t},Pt.rest=function(e,n){if("function"!=typeof e)throw new ye(o);return Fr(e,n=void 0===n?n:ra(n))},Pt.reverse=Bo,Pt.sampleSize=function(e,n,t){return n=(t?ao(e,n,t):void 0===n)?1:ra(n),(Iu(e)?Ut:Ur)(e,n)},Pt.set=function(e,n,t){return null==e?e:$r(e,n,t)},Pt.setWith=function(e,n,t,r){return r="function"==typeof r?r:void 0,null==e?e:$r(e,n,t,r)},Pt.shuffle=function(e){return(Iu(e)?$t:Vr)(e)},Pt.slice=function(e,n,t){var r=null==e?0:e.length;return r?(t&&"number"!=typeof t&&ao(e,n,t)?(n=0,t=r):(n=null==n?0:ra(n),t=void 0===t?r:ra(t)),Qr(e,n,t)):[]},Pt.sortBy=hu,Pt.sortedUniq=function(e){return e&&e.length?Yr(e):[]},Pt.sortedUniqBy=function(e,n){return e&&e.length?Yr(e,Gi(n,2)):[]},Pt.split=function(e,n,t){return t&&"number"!=typeof t&&ao(e,n,t)&&(n=t=void 0),(t=void 0===t?4294967295:t>>>0)?(e=aa(e))&&("string"==typeof n||null!=n&&!qu(n))&&!(n=Xr(n))&&Un(e)?ci(Kn(e),0,t):e.split(n,t):[]},Pt.spread=function(e,n){if("function"!=typeof e)throw new ye(o);return n=null==n?0:ut(ra(n),0),Fr((function(t){var r=t[n],i=ci(t,0,n);return r&&vn(i,r),un(e,this,i)}))},Pt.tail=function(e){var n=null==e?0:e.length;return n?Qr(e,1,n):[]},Pt.take=function(e,n,t){return e&&e.length?Qr(e,0,(n=t||void 0===n?1:ra(n))<0?0:n):[]},Pt.takeRight=function(e,n,t){var r=null==e?0:e.length;return r?Qr(e,(n=r-(n=t||void 0===n?1:ra(n)))<0?0:n,r):[]},Pt.takeRightWhile=function(e,n){return e&&e.length?ni(e,Gi(n,3),!1,!0):[]},Pt.takeWhile=function(e,n){return e&&e.length?ni(e,Gi(n,3)):[]},Pt.tap=function(e,n){return n(e),e},Pt.throttle=function(e,n,t){var r=!0,i=!0;if("function"!=typeof e)throw new ye(o);return Bu(t)&&(r="leading"in t?!!t.leading:r,i="trailing"in t?!!t.trailing:i),_u(e,n,{leading:r,maxWait:n,trailing:i})},Pt.thru=tu,Pt.toArray=na,Pt.toPairs=Ca,Pt.toPairsIn=Pa,Pt.toPath=function(e){return Iu(e)?hn(e,So):Xu(e)?[e]:gi(To(aa(e)))},Pt.toPlainObject=ua,Pt.transform=function(e,n,t){var r=Iu(e),i=r||Lu(e)||Zu(e);if(n=Gi(n,4),null==t){var o=e&&e.constructor;t=i?r?new o:[]:Bu(e)&&Uu(o)?Ot(Qe(e)):{}}return(i?ln:lr)(e,(function(e,r,i){return n(t,e,r,i)})),t},Pt.unary=function(e){return mu(e,1)},Pt.union=Vo,Pt.unionBy=Qo,Pt.unionWith=Ho,Pt.uniq=function(e){return e&&e.length?Zr(e):[]},Pt.uniqBy=function(e,n){return e&&e.length?Zr(e,Gi(n,2)):[]},Pt.uniqWith=function(e,n){return n="function"==typeof n?n:void 0,e&&e.length?Zr(e,void 0,n):[]},Pt.unset=function(e,n){return null==e||Jr(e,n)},Pt.unzip=Ko,Pt.unzipWith=qo,Pt.update=function(e,n,t){return null==e?e:ei(e,n,ui(t))},Pt.updateWith=function(e,n,t,r){return r="function"==typeof r?r:void 0,null==e?e:ei(e,n,ui(t),r)},Pt.values=Oa,Pt.valuesIn=function(e){return null==e?[]:Rn(e,wa(e))},Pt.without=Yo,Pt.words=Ua,Pt.wrap=function(e,n){return Su(ui(n),e)},Pt.xor=Go,Pt.xorBy=Xo,Pt.xorWith=Zo,Pt.zip=Jo,Pt.zipObject=function(e,n){return ii(e||[],n||[],Bt)},Pt.zipObjectDeep=function(e,n){return ii(e||[],n||[],$r)},Pt.zipWith=eu,Pt.entries=Ca,Pt.entriesIn=Pa,Pt.extend=ca,Pt.extendWith=fa,Ga(Pt,Pt),Pt.add=ul,Pt.attempt=$a,Pt.camelCase=Na,Pt.capitalize=za,Pt.ceil=al,Pt.clamp=function(e,n,t){return void 0===t&&(t=n,n=void 0),void 0!==t&&(t=(t=oa(t))==t?t:0),void 0!==n&&(n=(n=oa(n))==n?n:0),Yt(oa(e),n,t)},Pt.clone=function(e){return Gt(e,4)},Pt.cloneDeep=function(e){return Gt(e,5)},Pt.cloneDeepWith=function(e,n){return Gt(e,5,n="function"==typeof n?n:void 0)},Pt.cloneWith=function(e,n){return Gt(e,4,n="function"==typeof n?n:void 0)},Pt.conformsTo=function(e,n){return null==n||Xt(e,n,_a(n))},Pt.deburr=Ra,Pt.defaultTo=function(e,n){return null==e||e!=e?n:e},Pt.divide=ll,Pt.endsWith=function(e,n,t){e=aa(e),n=Xr(n);var r=e.length,i=t=void 0===t?r:Yt(ra(t),0,r);return(t-=n.length)>=0&&e.slice(t,i)==n},Pt.eq=Ou,Pt.escape=function(e){return(e=aa(e))&&D.test(e)?e.replace(L,Fn):e},Pt.escapeRegExp=function(e){return(e=aa(e))&&K.test(e)?e.replace(H,"\\$&"):e},Pt.every=function(e,n,t){var r=Iu(e)?fn:tr;return t&&ao(e,n,t)&&(n=void 0),r(e,Gi(n,3))},Pt.find=ou,Pt.findIndex=Ro,Pt.findKey=function(e,n){return _n(e,Gi(n,3),lr)},Pt.findLast=uu,Pt.findLastIndex=Io,Pt.findLastKey=function(e,n){return _n(e,Gi(n,3),cr)},Pt.floor=cl,Pt.forEach=au,Pt.forEachRight=lu,Pt.forIn=function(e,n){return null==e?e:ur(e,Gi(n,3),wa)},Pt.forInRight=function(e,n){return null==e?e:ar(e,Gi(n,3),wa)},Pt.forOwn=function(e,n){return e&&lr(e,Gi(n,3))},Pt.forOwnRight=function(e,n){return e&&cr(e,Gi(n,3))},Pt.get=va,Pt.gt=Nu,Pt.gte=zu,Pt.has=function(e,n){return null!=e&&ro(e,n,vr)},Pt.hasIn=ma,Pt.head=Mo,Pt.identity=Ha,Pt.includes=function(e,n,t,r){e=Mu(e)?e:Oa(e),t=t&&!r?ra(t):0;var i=e.length;return t<0&&(t=ut(i+t,0)),Gu(e)?t<=i&&e.indexOf(n,t)>-1:!!i&&xn(e,n,t)>-1},Pt.indexOf=function(e,n,t){var r=null==e?0:e.length;if(!r)return-1;var i=null==t?0:ra(t);return i<0&&(i=ut(r+i,0)),xn(e,n,i)},Pt.inRange=function(e,n,t){return n=ta(n),void 0===t?(t=n,n=0):t=ta(t),function(e,n,t){return e>=at(n,t)&&e<ut(n,t)}(e=oa(e),n,t)},Pt.invoke=ba,Pt.isArguments=Ru,Pt.isArray=Iu,Pt.isArrayBuffer=ju,Pt.isArrayLike=Mu,Pt.isArrayLikeObject=Au,Pt.isBoolean=function(e){return!0===e||!1===e||Vu(e)&&pr(e)==f},Pt.isBuffer=Lu,Pt.isDate=Fu,Pt.isElement=function(e){return Vu(e)&&1===e.nodeType&&!Ku(e)},Pt.isEmpty=function(e){if(null==e)return!0;if(Mu(e)&&(Iu(e)||"string"==typeof e||"function"==typeof e.splice||Lu(e)||Zu(e)||Ru(e)))return!e.length;var n=to(e);if(n==v||n==b)return!e.size;if(so(e))return!Er(e).length;for(var t in e)if(Ee.call(e,t))return!1;return!0},Pt.isEqual=function(e,n){return _r(e,n)},Pt.isEqualWith=function(e,n,t){var r=(t="function"==typeof t?t:void 0)?t(e,n):void 0;return void 0===r?_r(e,n,void 0,t):!!r},Pt.isError=Du,Pt.isFinite=function(e){return"number"==typeof e&&rt(e)},Pt.isFunction=Uu,Pt.isInteger=$u,Pt.isLength=Wu,Pt.isMap=Qu,Pt.isMatch=function(e,n){return e===n||wr(e,n,Zi(n))},Pt.isMatchWith=function(e,n,t){return t="function"==typeof t?t:void 0,wr(e,n,Zi(n),t)},Pt.isNaN=function(e){return Hu(e)&&e!=+e},Pt.isNative=function(e){if(fo(e))throw new de("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return xr(e)},Pt.isNil=function(e){return null==e},Pt.isNull=function(e){return null===e},Pt.isNumber=Hu,Pt.isObject=Bu,Pt.isObjectLike=Vu,Pt.isPlainObject=Ku,Pt.isRegExp=qu,Pt.isSafeInteger=function(e){return $u(e)&&e>=-9007199254740991&&e<=9007199254740991},Pt.isSet=Yu,Pt.isString=Gu,Pt.isSymbol=Xu,Pt.isTypedArray=Zu,Pt.isUndefined=function(e){return void 0===e},Pt.isWeakMap=function(e){return Vu(e)&&to(e)==x},Pt.isWeakSet=function(e){return Vu(e)&&"[object WeakSet]"==pr(e)},Pt.join=function(e,n){return null==e?"":it.call(e,n)},Pt.kebabCase=Ia,Pt.last=Do,Pt.lastIndexOf=function(e,n,t){var r=null==e?0:e.length;if(!r)return-1;var i=r;return void 0!==t&&(i=(i=ra(t))<0?ut(r+i,0):at(i,r-1)),n==n?function(e,n,t){for(var r=t+1;r--;)if(e[r]===n)return r;return r}(e,n,i):wn(e,En,i,!0)},Pt.lowerCase=ja,Pt.lowerFirst=Ma,Pt.lt=Ju,Pt.lte=ea,Pt.max=function(e){return e&&e.length?rr(e,Ha,hr):void 0},Pt.maxBy=function(e,n){return e&&e.length?rr(e,Gi(n,2),hr):void 0},Pt.mean=function(e){return Tn(e,Ha)},Pt.meanBy=function(e,n){return Tn(e,Gi(n,2))},Pt.min=function(e){return e&&e.length?rr(e,Ha,Sr):void 0},Pt.minBy=function(e,n){return e&&e.length?rr(e,Gi(n,2),Sr):void 0},Pt.stubArray=il,Pt.stubFalse=ol,Pt.stubObject=function(){return{}},Pt.stubString=function(){return""},Pt.stubTrue=function(){return!0},Pt.multiply=sl,Pt.nth=function(e,n){return e&&e.length?zr(e,ra(n)):void 0},Pt.noConflict=function(){return Ke._===this&&(Ke._=Oe),this},Pt.noop=Xa,Pt.now=vu,Pt.pad=function(e,n,t){e=aa(e);var r=(n=ra(n))?Hn(e):0;if(!n||r>=n)return e;var i=(n-r)/2;return Ri(et(i),t)+e+Ri(Jn(i),t)},Pt.padEnd=function(e,n,t){e=aa(e);var r=(n=ra(n))?Hn(e):0;return n&&r<n?e+Ri(n-r,t):e},Pt.padStart=function(e,n,t){e=aa(e);var r=(n=ra(n))?Hn(e):0;return n&&r<n?Ri(n-r,t)+e:e},Pt.parseInt=function(e,n,t){return t||null==n?n=0:n&&(n=+n),ct(aa(e).replace(Y,""),n||0)},Pt.random=function(e,n,t){if(t&&"boolean"!=typeof t&&ao(e,n,t)&&(n=t=void 0),void 0===t&&("boolean"==typeof n?(t=n,n=void 0):"boolean"==typeof e&&(t=e,e=void 0)),void 0===e&&void 0===n?(e=0,n=1):(e=ta(e),void 0===n?(n=e,e=0):n=ta(n)),e>n){var r=e;e=n,n=r}if(t||e%1||n%1){var i=ft();return at(e+i*(n-e+Be("1e-"+((i+"").length-1))),n)}return Ar(e,n)},Pt.reduce=function(e,n,t){var r=Iu(e)?mn:Pn,i=arguments.length<3;return r(e,Gi(n,4),t,i,er)},Pt.reduceRight=function(e,n,t){var r=Iu(e)?gn:Pn,i=arguments.length<3;return r(e,Gi(n,4),t,i,nr)},Pt.repeat=function(e,n,t){return n=(t?ao(e,n,t):void 0===n)?1:ra(n),Lr(aa(e),n)},Pt.replace=function(){var e=arguments,n=aa(e[0]);return e.length<3?n:n.replace(e[1],e[2])},Pt.result=function(e,n,t){var r=-1,i=(n=ai(n,e)).length;for(i||(i=1,e=void 0);++r<i;){var o=null==e?void 0:e[So(n[r])];void 0===o&&(r=i,o=t),e=Uu(o)?o.call(e):o}return e},Pt.round=dl,Pt.runInContext=e,Pt.sample=function(e){return(Iu(e)?Dt:Dr)(e)},Pt.size=function(e){if(null==e)return 0;if(Mu(e))return Gu(e)?Hn(e):e.length;var n=to(e);return n==v||n==b?e.size:Er(e).length},Pt.snakeCase=Aa,Pt.some=function(e,n,t){var r=Iu(e)?yn:Hr;return t&&ao(e,n,t)&&(n=void 0),r(e,Gi(n,3))},Pt.sortedIndex=function(e,n){return Kr(e,n)},Pt.sortedIndexBy=function(e,n,t){return qr(e,n,Gi(t,2))},Pt.sortedIndexOf=function(e,n){var t=null==e?0:e.length;if(t){var r=Kr(e,n);if(r<t&&Ou(e[r],n))return r}return-1},Pt.sortedLastIndex=function(e,n){return Kr(e,n,!0)},Pt.sortedLastIndexBy=function(e,n,t){return qr(e,n,Gi(t,2),!0)},Pt.sortedLastIndexOf=function(e,n){if(null==e?0:e.length){var t=Kr(e,n,!0)-1;if(Ou(e[t],n))return t}return-1},Pt.startCase=La,Pt.startsWith=function(e,n,t){return e=aa(e),t=null==t?0:Yt(ra(t),0,e.length),n=Xr(n),e.slice(t,t+n.length)==n},Pt.subtract=pl,Pt.sum=function(e){return e&&e.length?On(e,Ha):0},Pt.sumBy=function(e,n){return e&&e.length?On(e,Gi(n,2)):0},Pt.template=function(e,n,t){var r=Pt.templateSettings;t&&ao(e,n,t)&&(n=void 0),e=aa(e),n=fa({},n,r,Ui);var i,o,u=fa({},n.imports,r.imports,Ui),a=_a(u),l=Rn(u,a),c=0,f=n.interpolate||fe,s="__p += '",d=me((n.escape||fe).source+"|"+f.source+"|"+(f===W?te:fe).source+"|"+(n.evaluate||fe).source+"|$","g"),p="//# sourceURL="+(Ee.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++De+"]")+"\n";e.replace(d,(function(n,t,r,u,a,l){return r||(r=u),s+=e.slice(c,l).replace(se,Dn),t&&(i=!0,s+="' +\n__e("+t+") +\n'"),a&&(o=!0,s+="';\n"+a+";\n__p += '"),r&&(s+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),c=l+n.length,n})),s+="';\n";var h=Ee.call(n,"variable")&&n.variable;h||(s="with (obj) {\n"+s+"\n}\n"),s=(o?s.replace(I,""):s).replace(j,"$1").replace(M,"$1;"),s="function("+(h||"obj")+") {\n"+(h?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(i?", __e = _.escape":"")+(o?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+s+"return __p\n}";var v=$a((function(){return pe(a,p+"return "+s).apply(void 0,l)}));if(v.source=s,Du(v))throw v;return v},Pt.times=function(e,n){if((e=ra(e))<1||e>9007199254740991)return[];var t=4294967295,r=at(e,4294967295);e-=4294967295;for(var i=Nn(r,n=Gi(n));++t<e;)n(t);return i},Pt.toFinite=ta,Pt.toInteger=ra,Pt.toLength=ia,Pt.toLower=function(e){return aa(e).toLowerCase()},Pt.toNumber=oa,Pt.toSafeInteger=function(e){return e?Yt(ra(e),-9007199254740991,9007199254740991):0===e?e:0},Pt.toString=aa,Pt.toUpper=function(e){return aa(e).toUpperCase()},Pt.trim=function(e,n,t){if((e=aa(e))&&(t||void 0===n))return e.replace(q,"");if(!e||!(n=Xr(n)))return e;var r=Kn(e),i=Kn(n);return ci(r,jn(r,i),Mn(r,i)+1).join("")},Pt.trimEnd=function(e,n,t){if((e=aa(e))&&(t||void 0===n))return e.replace(G,"");if(!e||!(n=Xr(n)))return e;var r=Kn(e);return ci(r,0,Mn(r,Kn(n))+1).join("")},Pt.trimStart=function(e,n,t){if((e=aa(e))&&(t||void 0===n))return e.replace(Y,"");if(!e||!(n=Xr(n)))return e;var r=Kn(e);return ci(r,jn(r,Kn(n))).join("")},Pt.truncate=function(e,n){var t=30,r="...";if(Bu(n)){var i="separator"in n?n.separator:i;t="length"in n?ra(n.length):t,r="omission"in n?Xr(n.omission):r}var o=(e=aa(e)).length;if(Un(e)){var u=Kn(e);o=u.length}if(t>=o)return e;var a=t-Hn(r);if(a<1)return r;var l=u?ci(u,0,a).join(""):e.slice(0,a);if(void 0===i)return l+r;if(u&&(a+=l.length-a),qu(i)){if(e.slice(a).search(i)){var c,f=l;for(i.global||(i=me(i.source,aa(re.exec(i))+"g")),i.lastIndex=0;c=i.exec(f);)var s=c.index;l=l.slice(0,void 0===s?a:s)}}else if(e.indexOf(Xr(i),a)!=a){var d=l.lastIndexOf(i);d>-1&&(l=l.slice(0,d))}return l+r},Pt.unescape=function(e){return(e=aa(e))&&F.test(e)?e.replace(A,qn):e},Pt.uniqueId=function(e){var n=++Te;return aa(e)+n},Pt.upperCase=Fa,Pt.upperFirst=Da,Pt.each=au,Pt.eachRight=lu,Pt.first=Mo,Ga(Pt,(fl={},lr(Pt,(function(e,n){Ee.call(Pt.prototype,n)||(fl[n]=e)})),fl),{chain:!1}),Pt.VERSION="4.17.19",ln(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Pt[e].placeholder=Pt})),ln(["drop","take"],(function(e,n){Rt.prototype[e]=function(t){t=void 0===t?1:ut(ra(t),0);var r=this.__filtered__&&!n?new Rt(this):this.clone();return r.__filtered__?r.__takeCount__=at(t,r.__takeCount__):r.__views__.push({size:at(t,4294967295),type:e+(r.__dir__<0?"Right":"")}),r},Rt.prototype[e+"Right"]=function(n){return this.reverse()[e](n).reverse()}})),ln(["filter","map","takeWhile"],(function(e,n){var t=n+1,r=1==t||3==t;Rt.prototype[e]=function(e){var n=this.clone();return n.__iteratees__.push({iteratee:Gi(e,3),type:t}),n.__filtered__=n.__filtered__||r,n}})),ln(["head","last"],(function(e,n){var t="take"+(n?"Right":"");Rt.prototype[e]=function(){return this[t](1).value()[0]}})),ln(["initial","tail"],(function(e,n){var t="drop"+(n?"":"Right");Rt.prototype[e]=function(){return this.__filtered__?new Rt(this):this[t](1)}})),Rt.prototype.compact=function(){return this.filter(Ha)},Rt.prototype.find=function(e){return this.filter(e).head()},Rt.prototype.findLast=function(e){return this.reverse().find(e)},Rt.prototype.invokeMap=Fr((function(e,n){return"function"==typeof e?new Rt(this):this.map((function(t){return yr(t,e,n)}))})),Rt.prototype.reject=function(e){return this.filter(Eu(Gi(e)))},Rt.prototype.slice=function(e,n){e=ra(e);var t=this;return t.__filtered__&&(e>0||n<0)?new Rt(t):(e<0?t=t.takeRight(-e):e&&(t=t.drop(e)),void 0!==n&&(t=(n=ra(n))<0?t.dropRight(-n):t.take(n-e)),t)},Rt.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Rt.prototype.toArray=function(){return this.take(4294967295)},lr(Rt.prototype,(function(e,n){var t=/^(?:filter|find|map|reject)|While$/.test(n),r=/^(?:head|last)$/.test(n),i=Pt[r?"take"+("last"==n?"Right":""):n],o=r||/^find/.test(n);i&&(Pt.prototype[n]=function(){var n=this.__wrapped__,u=r?[1]:arguments,a=n instanceof Rt,l=u[0],c=a||Iu(n),f=function(e){var n=i.apply(Pt,vn([e],u));return r&&s?n[0]:n};c&&t&&"function"==typeof l&&1!=l.length&&(a=c=!1);var s=this.__chain__,d=!!this.__actions__.length,p=o&&!s,h=a&&!d;if(!o&&c){n=h?n:new Rt(this);var v=e.apply(n,u);return v.__actions__.push({func:tu,args:[f],thisArg:void 0}),new zt(v,s)}return p&&h?e.apply(this,u):(v=this.thru(f),p?r?v.value()[0]:v.value():v)})})),ln(["pop","push","shift","sort","splice","unshift"],(function(e){var n=be[e],t=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",r=/^(?:pop|shift)$/.test(e);Pt.prototype[e]=function(){var e=arguments;if(r&&!this.__chain__){var i=this.value();return n.apply(Iu(i)?i:[],e)}return this[t]((function(t){return n.apply(Iu(t)?t:[],e)}))}})),lr(Rt.prototype,(function(e,n){var t=Pt[n];if(t){var r=t.name+"";Ee.call(bt,r)||(bt[r]=[]),bt[r].push({name:n,func:t})}})),bt[Pi(void 0,2).name]=[{name:"wrapper",func:void 0}],Rt.prototype.clone=function(){var e=new Rt(this.__wrapped__);return e.__actions__=gi(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=gi(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=gi(this.__views__),e},Rt.prototype.reverse=function(){if(this.__filtered__){var e=new Rt(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Rt.prototype.value=function(){var e=this.__wrapped__.value(),n=this.__dir__,t=Iu(e),r=n<0,i=t?e.length:0,o=function(e,n,t){var r=-1,i=t.length;for(;++r<i;){var o=t[r],u=o.size;switch(o.type){case"drop":e+=u;break;case"dropRight":n-=u;break;case"take":n=at(n,e+u);break;case"takeRight":e=ut(e,n-u)}}return{start:e,end:n}}(0,i,this.__views__),u=o.start,a=o.end,l=a-u,c=r?a:u-1,f=this.__iteratees__,s=f.length,d=0,p=at(l,this.__takeCount__);if(!t||!r&&i==l&&p==l)return ti(e,this.__actions__);var h=[];e:for(;l--&&d<p;){for(var v=-1,m=e[c+=n];++v<s;){var g=f[v],y=g.iteratee,b=g.type,_=y(m);if(2==b)m=_;else if(!_){if(1==b)continue e;break e}}h[d++]=m}return h},Pt.prototype.at=ru,Pt.prototype.chain=function(){return nu(this)},Pt.prototype.commit=function(){return new zt(this.value(),this.__chain__)},Pt.prototype.next=function(){void 0===this.__values__&&(this.__values__=na(this.value()));var e=this.__index__>=this.__values__.length;return{done:e,value:e?void 0:this.__values__[this.__index__++]}},Pt.prototype.plant=function(e){for(var n,t=this;t instanceof Nt;){var r=Po(t);r.__index__=0,r.__values__=void 0,n?i.__wrapped__=r:n=r;var i=r;t=t.__wrapped__}return i.__wrapped__=e,n},Pt.prototype.reverse=function(){var e=this.__wrapped__;if(e instanceof Rt){var n=e;return this.__actions__.length&&(n=new Rt(this)),(n=n.reverse()).__actions__.push({func:tu,args:[Bo],thisArg:void 0}),new zt(n,this.__chain__)}return this.thru(Bo)},Pt.prototype.toJSON=Pt.prototype.valueOf=Pt.prototype.value=function(){return ti(this.__wrapped__,this.__actions__)},Pt.prototype.first=Pt.prototype.head,Ze&&(Pt.prototype[Ze]=function(){return this}),Pt}();Ke._=Yn,void 0===(i=function(){return Yn}.call(n,t,n,r))||(r.exports=i)}).call(this)}).call(this,t(6),t(18)(e))},function(e,n,t){"use strict";
/** @license React v16.13.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=t(5),i="function"==typeof Symbol&&Symbol.for,o=i?Symbol.for("react.element"):60103,u=i?Symbol.for("react.portal"):60106,a=i?Symbol.for("react.fragment"):60107,l=i?Symbol.for("react.strict_mode"):60108,c=i?Symbol.for("react.profiler"):60114,f=i?Symbol.for("react.provider"):60109,s=i?Symbol.for("react.context"):60110,d=i?Symbol.for("react.forward_ref"):60112,p=i?Symbol.for("react.suspense"):60113,h=i?Symbol.for("react.memo"):60115,v=i?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function _(e,n,t){this.props=e,this.context=n,this.refs=b,this.updater=t||y}function w(){}function x(e,n,t){this.props=e,this.context=n,this.refs=b,this.updater=t||y}_.prototype.isReactComponent={},_.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,n,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=_.prototype;var k=x.prototype=new w;k.constructor=x,r(k,_.prototype),k.isPureReactComponent=!0;var E={current:null},T=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function C(e,n,t){var r,i={},u=null,a=null;if(null!=n)for(r in void 0!==n.ref&&(a=n.ref),void 0!==n.key&&(u=""+n.key),n)T.call(n,r)&&!S.hasOwnProperty(r)&&(i[r]=n[r]);var l=arguments.length-2;if(1===l)i.children=t;else if(1<l){for(var c=Array(l),f=0;f<l;f++)c[f]=arguments[f+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===i[r]&&(i[r]=l[r]);return{$$typeof:o,type:e,key:u,ref:a,props:i,_owner:E.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g,N=[];function z(e,n,t,r){if(N.length){var i=N.pop();return i.result=e,i.keyPrefix=n,i.func=t,i.context=r,i.count=0,i}return{result:e,keyPrefix:n,func:t,context:r,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>N.length&&N.push(e)}function I(e,n,t){return null==e?0:function e(n,t,r,i){var a=typeof n;"undefined"!==a&&"boolean"!==a||(n=null);var l=!1;if(null===n)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(n.$$typeof){case o:case u:l=!0}}if(l)return r(i,n,""===t?"."+j(n,0):t),1;if(l=0,t=""===t?".":t+":",Array.isArray(n))for(var c=0;c<n.length;c++){var f=t+j(a=n[c],c);l+=e(a,f,r,i)}else if(null===n||"object"!=typeof n?f=null:f="function"==typeof(f=m&&n[m]||n["@@iterator"])?f:null,"function"==typeof f)for(n=f.call(n),c=0;!(a=n.next()).done;)l+=e(a=a.value,f=t+j(a,c++),r,i);else if("object"===a)throw r=""+n,Error(g(31,"[object Object]"===r?"object with keys {"+Object.keys(n).join(", ")+"}":r,""));return l}(e,"",n,t)}function j(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return n[e]}))}(e.key):n.toString(36)}function M(e,n){e.func.call(e.context,n,e.count++)}function A(e,n,t){var r=e.result,i=e.keyPrefix;e=e.func.call(e.context,n,e.count++),Array.isArray(e)?L(e,r,t,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,n){return{$$typeof:o,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(e,i+(!e.key||n&&n.key===e.key?"":(""+e.key).replace(O,"$&/")+"/")+t)),r.push(e))}function L(e,n,t,r,i){var o="";null!=t&&(o=(""+t).replace(O,"$&/")+"/"),I(e,A,n=z(n,o,r,i)),R(n)}var F={current:null};function D(){var e=F.current;if(null===e)throw Error(g(321));return e}var U={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:E,IsSomeRendererActing:{current:!1},assign:r};n.Children={map:function(e,n,t){if(null==e)return e;var r=[];return L(e,r,null,n,t),r},forEach:function(e,n,t){if(null==e)return e;I(e,M,n=z(null,null,n,t)),R(n)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var n=[];return L(e,n,null,(function(e){return e})),n},only:function(e){if(!P(e))throw Error(g(143));return e}},n.Component=_,n.Fragment=a,n.Profiler=c,n.PureComponent=x,n.StrictMode=l,n.Suspense=p,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,n.cloneElement=function(e,n,t){if(null==e)throw Error(g(267,e));var i=r({},e.props),u=e.key,a=e.ref,l=e._owner;if(null!=n){if(void 0!==n.ref&&(a=n.ref,l=E.current),void 0!==n.key&&(u=""+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(f in n)T.call(n,f)&&!S.hasOwnProperty(f)&&(i[f]=void 0===n[f]&&void 0!==c?c[f]:n[f])}var f=arguments.length-2;if(1===f)i.children=t;else if(1<f){c=Array(f);for(var s=0;s<f;s++)c[s]=arguments[s+2];i.children=c}return{$$typeof:o,type:e.type,key:u,ref:a,props:i,_owner:l}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:s,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},n.createElement=C,n.createFactory=function(e){var n=C.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:d,render:e}},n.isValidElement=P,n.lazy=function(e){return{$$typeof:v,_ctor:e,_status:-1,_result:null}},n.memo=function(e,n){return{$$typeof:h,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return D().useCallback(e,n)},n.useContext=function(e,n){return D().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return D().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return D().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return D().useLayoutEffect(e,n)},n.useMemo=function(e,n){return D().useMemo(e,n)},n.useReducer=function(e,n,t){return D().useReducer(e,n,t)},n.useRef=function(e){return D().useRef(e)},n.useState=function(e){return D().useState(e)},n.version="16.13.1"},function(e,n,t){"use strict";
/** @license React v16.13.1
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=t(0),i=t(5),o=t(11);function u(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!r)throw Error(u(227));function a(e,n,t,r,i,o,u,a,l){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(e){this.onError(e)}}var l=!1,c=null,f=!1,s=null,d={onError:function(e){l=!0,c=e}};function p(e,n,t,r,i,o,u,f,s){l=!1,c=null,a.apply(d,arguments)}var h=null,v=null,m=null;function g(e,n,t){var r=e.type||"unknown-event";e.currentTarget=m(t),function(e,n,t,r,i,o,a,d,h){if(p.apply(this,arguments),l){if(!l)throw Error(u(198));var v=c;l=!1,c=null,f||(f=!0,s=v)}}(r,n,void 0,e),e.currentTarget=null}var y=null,b={};function _(){if(y)for(var e in b){var n=b[e],t=y.indexOf(e);if(!(-1<t))throw Error(u(96,e));if(!x[t]){if(!n.extractEvents)throw Error(u(97,e));for(var r in x[t]=n,t=n.eventTypes){var i=void 0,o=t[r],a=n,l=r;if(k.hasOwnProperty(l))throw Error(u(99,l));k[l]=o;var c=o.phasedRegistrationNames;if(c){for(i in c)c.hasOwnProperty(i)&&w(c[i],a,l);i=!0}else o.registrationName?(w(o.registrationName,a,l),i=!0):i=!1;if(!i)throw Error(u(98,r,e))}}}}function w(e,n,t){if(E[e])throw Error(u(100,e));E[e]=n,T[e]=n.eventTypes[t].dependencies}var x=[],k={},E={},T={};function S(e){var n,t=!1;for(n in e)if(e.hasOwnProperty(n)){var r=e[n];if(!b.hasOwnProperty(n)||b[n]!==r){if(b[n])throw Error(u(102,n));b[n]=r,t=!0}}t&&_()}var C=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),P=null,O=null,N=null;function z(e){if(e=v(e)){if("function"!=typeof P)throw Error(u(280));var n=e.stateNode;n&&(n=h(n),P(e.stateNode,e.type,n))}}function R(e){O?N?N.push(e):N=[e]:O=e}function I(){if(O){var e=O,n=N;if(N=O=null,z(e),n)for(e=0;e<n.length;e++)z(n[e])}}function j(e,n){return e(n)}function M(e,n,t,r,i){return e(n,t,r,i)}function A(){}var L=j,F=!1,D=!1;function U(){null===O&&null===N||(A(),I())}function $(e,n,t){if(D)return e(n,t);D=!0;try{return L(e,n,t)}finally{D=!1,U()}}var W=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,B=Object.prototype.hasOwnProperty,V={},Q={};function H(e,n,t,r,i,o){this.acceptsBooleans=2===n||3===n||4===n,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o}var K={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){K[e]=new H(e,0,!1,e,null,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var n=e[0];K[n]=new H(n,1,!1,e[1],null,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){K[e]=new H(e,2,!1,e.toLowerCase(),null,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){K[e]=new H(e,2,!1,e,null,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){K[e]=new H(e,3,!1,e.toLowerCase(),null,!1)})),["checked","multiple","muted","selected"].forEach((function(e){K[e]=new H(e,3,!0,e,null,!1)})),["capture","download"].forEach((function(e){K[e]=new H(e,4,!1,e,null,!1)})),["cols","rows","size","span"].forEach((function(e){K[e]=new H(e,6,!1,e,null,!1)})),["rowSpan","start"].forEach((function(e){K[e]=new H(e,5,!1,e.toLowerCase(),null,!1)}));var q=/[\-:]([a-z])/g;function Y(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var n=e.replace(q,Y);K[n]=new H(n,1,!1,e,null,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var n=e.replace(q,Y);K[n]=new H(n,1,!1,e,"http://www.w3.org/1999/xlink",!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var n=e.replace(q,Y);K[n]=new H(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1)})),["tabIndex","crossOrigin"].forEach((function(e){K[e]=new H(e,1,!1,e.toLowerCase(),null,!1)})),K.xlinkHref=new H("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0),["src","href","action","formAction"].forEach((function(e){K[e]=new H(e,1,!1,e.toLowerCase(),null,!0)}));var G=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function X(e,n,t,r){var i=K.hasOwnProperty(n)?K[n]:null;(null!==i?0===i.type:!r&&(2<n.length&&("o"===n[0]||"O"===n[0])&&("n"===n[1]||"N"===n[1])))||(function(e,n,t,r){if(null==n||function(e,n,t,r){if(null!==t&&0===t.type)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==t?!t.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,n,t,r))return!0;if(r)return!1;if(null!==t)switch(t.type){case 3:return!n;case 4:return!1===n;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}(n,t,i,r)&&(t=null),r||null===i?function(e){return!!B.call(Q,e)||!B.call(V,e)&&(W.test(e)?Q[e]=!0:(V[e]=!0,!1))}(n)&&(null===t?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=null===t?3!==i.type&&"":t:(n=i.attributeName,r=i.attributeNamespace,null===t?e.removeAttribute(n):(t=3===(i=i.type)||4===i&&!0===t?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}G.hasOwnProperty("ReactCurrentDispatcher")||(G.ReactCurrentDispatcher={current:null}),G.hasOwnProperty("ReactCurrentBatchConfig")||(G.ReactCurrentBatchConfig={suspense:null});var Z=/^(.*)[\\\/]/,J="function"==typeof Symbol&&Symbol.for,ee=J?Symbol.for("react.element"):60103,ne=J?Symbol.for("react.portal"):60106,te=J?Symbol.for("react.fragment"):60107,re=J?Symbol.for("react.strict_mode"):60108,ie=J?Symbol.for("react.profiler"):60114,oe=J?Symbol.for("react.provider"):60109,ue=J?Symbol.for("react.context"):60110,ae=J?Symbol.for("react.concurrent_mode"):60111,le=J?Symbol.for("react.forward_ref"):60112,ce=J?Symbol.for("react.suspense"):60113,fe=J?Symbol.for("react.suspense_list"):60120,se=J?Symbol.for("react.memo"):60115,de=J?Symbol.for("react.lazy"):60116,pe=J?Symbol.for("react.block"):60121,he="function"==typeof Symbol&&Symbol.iterator;function ve(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=he&&e[he]||e["@@iterator"])?e:null}function me(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case te:return"Fragment";case ne:return"Portal";case ie:return"Profiler";case re:return"StrictMode";case ce:return"Suspense";case fe:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case ue:return"Context.Consumer";case oe:return"Context.Provider";case le:var n=e.render;return n=n.displayName||n.name||"",e.displayName||(""!==n?"ForwardRef("+n+")":"ForwardRef");case se:return me(e.type);case pe:return me(e.render);case de:if(e=1===e._status?e._result:null)return me(e)}return null}function ge(e){var n="";do{e:switch(e.tag){case 3:case 4:case 6:case 7:case 10:case 9:var t="";break e;default:var r=e._debugOwner,i=e._debugSource,o=me(e.type);t=null,r&&(t=me(r.type)),r=o,o="",i?o=" (at "+i.fileName.replace(Z,"")+":"+i.lineNumber+")":t&&(o=" (created by "+t+")"),t="\n    in "+(r||"Unknown")+o}n+=t,e=e.return}while(e);return n}function ye(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function be(e){var n=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===n||"radio"===n)}function _e(e){e._valueTracker||(e._valueTracker=function(e){var n=be(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&void 0!==t&&"function"==typeof t.get&&"function"==typeof t.set){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}(e))}function we(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=be(e)?e.checked?"true":"false":e.value),(e=r)!==t&&(n.setValue(e),!0)}function xe(e,n){var t=n.checked;return i({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=t?t:e._wrapperState.initialChecked})}function ke(e,n){var t=null==n.defaultValue?"":n.defaultValue,r=null!=n.checked?n.checked:n.defaultChecked;t=ye(null!=n.value?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:"checkbox"===n.type||"radio"===n.type?null!=n.checked:null!=n.value}}function Ee(e,n){null!=(n=n.checked)&&X(e,"checked",n,!1)}function Te(e,n){Ee(e,n);var t=ye(n.value),r=n.type;if(null!=t)"number"===r?(0===t&&""===e.value||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");n.hasOwnProperty("value")?Ce(e,n.type,t):n.hasOwnProperty("defaultValue")&&Ce(e,n.type,ye(n.defaultValue)),null==n.checked&&null!=n.defaultChecked&&(e.defaultChecked=!!n.defaultChecked)}function Se(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!("submit"!==r&&"reset"!==r||void 0!==n.value&&null!==n.value))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}""!==(t=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==t&&(e.name=t)}function Ce(e,n,t){"number"===n&&e.ownerDocument.activeElement===e||(null==t?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}function Pe(e,n){return e=i({children:void 0},n),(n=function(e){var n="";return r.Children.forEach(e,(function(e){null!=e&&(n+=e)})),n}(n.children))&&(e.children=n),e}function Oe(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+ye(t),n=null,i=0;i<e.length;i++){if(e[i].value===t)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==n||e[i].disabled||(n=e[i])}null!==n&&(n.selected=!0)}}function Ne(e,n){if(null!=n.dangerouslySetInnerHTML)throw Error(u(91));return i({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ze(e,n){var t=n.value;if(null==t){if(t=n.children,n=n.defaultValue,null!=t){if(null!=n)throw Error(u(92));if(Array.isArray(t)){if(!(1>=t.length))throw Error(u(93));t=t[0]}n=t}null==n&&(n=""),t=n}e._wrapperState={initialValue:ye(t)}}function Re(e,n){var t=ye(n.value),r=ye(n.defaultValue);null!=t&&((t=""+t)!==e.value&&(e.value=t),null==n.defaultValue&&e.defaultValue!==t&&(e.defaultValue=t)),null!=r&&(e.defaultValue=""+r)}function Ie(e){var n=e.textContent;n===e._wrapperState.initialValue&&""!==n&&null!==n&&(e.value=n)}var je="http://www.w3.org/1999/xhtml",Me="http://www.w3.org/2000/svg";function Ae(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Le(e,n){return null==e||"http://www.w3.org/1999/xhtml"===e?Ae(n):"http://www.w3.org/2000/svg"===e&&"foreignObject"===n?"http://www.w3.org/1999/xhtml":e}var Fe,De=function(e){return"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction((function(){return e(n,t)}))}:e}((function(e,n){if(e.namespaceURI!==Me||"innerHTML"in e)e.innerHTML=n;else{for((Fe=Fe||document.createElement("div")).innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Fe.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}}));function Ue(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&3===t.nodeType)return void(t.nodeValue=n)}e.textContent=n}function $e(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var We={animationend:$e("Animation","AnimationEnd"),animationiteration:$e("Animation","AnimationIteration"),animationstart:$e("Animation","AnimationStart"),transitionend:$e("Transition","TransitionEnd")},Be={},Ve={};function Qe(e){if(Be[e])return Be[e];if(!We[e])return e;var n,t=We[e];for(n in t)if(t.hasOwnProperty(n)&&n in Ve)return Be[e]=t[n];return e}C&&(Ve=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);var He=Qe("animationend"),Ke=Qe("animationiteration"),qe=Qe("animationstart"),Ye=Qe("transitionend"),Ge="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xe=new("function"==typeof WeakMap?WeakMap:Map);function Ze(e){var n=Xe.get(e);return void 0===n&&(n=new Map,Xe.set(e,n)),n}function Je(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do{0!=(1026&(n=e).effectTag)&&(t=n.return),e=n.return}while(e)}return 3===n.tag?t:null}function en(e){if(13===e.tag){var n=e.memoizedState;if(null===n&&(null!==(e=e.alternate)&&(n=e.memoizedState)),null!==n)return n.dehydrated}return null}function nn(e){if(Je(e)!==e)throw Error(u(188))}function tn(e){if(!(e=function(e){var n=e.alternate;if(!n){if(null===(n=Je(e)))throw Error(u(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(null===i)break;var o=i.alternate;if(null===o){if(null!==(r=i.return)){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return nn(i),e;if(o===r)return nn(i),n;o=o.sibling}throw Error(u(188))}if(t.return!==r.return)t=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===t){a=!0,t=i,r=o;break}if(l===r){a=!0,r=i,t=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===t){a=!0,t=o,r=i;break}if(l===r){a=!0,r=o,t=i;break}l=l.sibling}if(!a)throw Error(u(189))}}if(t.alternate!==r)throw Error(u(190))}if(3!==t.tag)throw Error(u(188));return t.stateNode.current===t?e:n}(e)))return null;for(var n=e;;){if(5===n.tag||6===n.tag)return n;if(n.child)n.child.return=n,n=n.child;else{if(n===e)break;for(;!n.sibling;){if(!n.return||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}}return null}function rn(e,n){if(null==n)throw Error(u(30));return null==e?n:Array.isArray(e)?Array.isArray(n)?(e.push.apply(e,n),e):(e.push(n),e):Array.isArray(n)?[e].concat(n):[e,n]}function on(e,n,t){Array.isArray(e)?e.forEach(n,t):e&&n.call(t,e)}var un=null;function an(e){if(e){var n=e._dispatchListeners,t=e._dispatchInstances;if(Array.isArray(n))for(var r=0;r<n.length&&!e.isPropagationStopped();r++)g(e,n[r],t[r]);else n&&g(e,n,t);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}function ln(e){if(null!==e&&(un=rn(un,e)),e=un,un=null,e){if(on(e,an),un)throw Error(u(95));if(f)throw e=s,f=!1,s=null,e}}function cn(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}function fn(e){if(!C)return!1;var n=(e="on"+e)in document;return n||((n=document.createElement("div")).setAttribute(e,"return;"),n="function"==typeof n[e]),n}var sn=[];function dn(e){e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>sn.length&&sn.push(e)}function pn(e,n,t,r){if(sn.length){var i=sn.pop();return i.topLevelType=e,i.eventSystemFlags=r,i.nativeEvent=n,i.targetInst=t,i}return{topLevelType:e,eventSystemFlags:r,nativeEvent:n,targetInst:t,ancestors:[]}}function hn(e){var n=e.targetInst,t=n;do{if(!t){e.ancestors.push(t);break}var r=t;if(3===r.tag)r=r.stateNode.containerInfo;else{for(;r.return;)r=r.return;r=3!==r.tag?null:r.stateNode.containerInfo}if(!r)break;5!==(n=t.tag)&&6!==n||e.ancestors.push(t),t=Ct(r)}while(t);for(t=0;t<e.ancestors.length;t++){n=e.ancestors[t];var i=cn(e.nativeEvent);r=e.topLevelType;var o=e.nativeEvent,u=e.eventSystemFlags;0===t&&(u|=64);for(var a=null,l=0;l<x.length;l++){var c=x[l];c&&(c=c.extractEvents(r,n,o,i,u))&&(a=rn(a,c))}ln(a)}}function vn(e,n,t){if(!t.has(e)){switch(e){case"scroll":Yn(n,"scroll",!0);break;case"focus":case"blur":Yn(n,"focus",!0),Yn(n,"blur",!0),t.set("blur",null),t.set("focus",null);break;case"cancel":case"close":fn(e)&&Yn(n,e,!0);break;case"invalid":case"submit":case"reset":break;default:-1===Ge.indexOf(e)&&qn(e,n)}t.set(e,null)}}var mn,gn,yn,bn=!1,_n=[],wn=null,xn=null,kn=null,En=new Map,Tn=new Map,Sn=[],Cn="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),Pn="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");function On(e,n,t,r,i){return{blockedOn:e,topLevelType:n,eventSystemFlags:32|t,nativeEvent:i,container:r}}function Nn(e,n){switch(e){case"focus":case"blur":wn=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":En.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tn.delete(n.pointerId)}}function zn(e,n,t,r,i,o){return null===e||e.nativeEvent!==o?(e=On(n,t,r,i,o),null!==n&&(null!==(n=Pt(n))&&gn(n)),e):(e.eventSystemFlags|=r,e)}function Rn(e){var n=Ct(e.target);if(null!==n){var t=Je(n);if(null!==t)if(13===(n=t.tag)){if(null!==(n=en(t)))return e.blockedOn=n,void o.unstable_runWithPriority(e.priority,(function(){yn(t)}))}else if(3===n&&t.stateNode.hydrate)return void(e.blockedOn=3===t.tag?t.stateNode.containerInfo:null)}e.blockedOn=null}function In(e){if(null!==e.blockedOn)return!1;var n=Jn(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);if(null!==n){var t=Pt(n);return null!==t&&gn(t),e.blockedOn=n,!1}return!0}function jn(e,n,t){In(e)&&t.delete(n)}function Mn(){for(bn=!1;0<_n.length;){var e=_n[0];if(null!==e.blockedOn){null!==(e=Pt(e.blockedOn))&&mn(e);break}var n=Jn(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);null!==n?e.blockedOn=n:_n.shift()}null!==wn&&In(wn)&&(wn=null),null!==xn&&In(xn)&&(xn=null),null!==kn&&In(kn)&&(kn=null),En.forEach(jn),Tn.forEach(jn)}function An(e,n){e.blockedOn===n&&(e.blockedOn=null,bn||(bn=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Mn)))}function Ln(e){function n(n){return An(n,e)}if(0<_n.length){An(_n[0],e);for(var t=1;t<_n.length;t++){var r=_n[t];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==wn&&An(wn,e),null!==xn&&An(xn,e),null!==kn&&An(kn,e),En.forEach(n),Tn.forEach(n),t=0;t<Sn.length;t++)(r=Sn[t]).blockedOn===e&&(r.blockedOn=null);for(;0<Sn.length&&null===(t=Sn[0]).blockedOn;)Rn(t),null===t.blockedOn&&Sn.shift()}var Fn={},Dn=new Map,Un=new Map,$n=["abort","abort",He,"animationEnd",Ke,"animationIteration",qe,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Ye,"transitionEnd","waiting","waiting"];function Wn(e,n){for(var t=0;t<e.length;t+=2){var r=e[t],i=e[t+1],o="on"+(i[0].toUpperCase()+i.slice(1));o={phasedRegistrationNames:{bubbled:o,captured:o+"Capture"},dependencies:[r],eventPriority:n},Un.set(r,n),Dn.set(r,o),Fn[i]=o}}Wn("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),Wn("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),Wn($n,2);for(var Bn="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Vn=0;Vn<Bn.length;Vn++)Un.set(Bn[Vn],0);var Qn=o.unstable_UserBlockingPriority,Hn=o.unstable_runWithPriority,Kn=!0;function qn(e,n){Yn(n,e,!1)}function Yn(e,n,t){var r=Un.get(n);switch(void 0===r?2:r){case 0:r=Gn.bind(null,n,1,e);break;case 1:r=Xn.bind(null,n,1,e);break;default:r=Zn.bind(null,n,1,e)}t?e.addEventListener(n,r,!0):e.addEventListener(n,r,!1)}function Gn(e,n,t,r){F||A();var i=Zn,o=F;F=!0;try{M(i,e,n,t,r)}finally{(F=o)||U()}}function Xn(e,n,t,r){Hn(Qn,Zn.bind(null,e,n,t,r))}function Zn(e,n,t,r){if(Kn)if(0<_n.length&&-1<Cn.indexOf(e))e=On(null,e,n,t,r),_n.push(e);else{var i=Jn(e,n,t,r);if(null===i)Nn(e,r);else if(-1<Cn.indexOf(e))e=On(i,e,n,t,r),_n.push(e);else if(!function(e,n,t,r,i){switch(n){case"focus":return wn=zn(wn,e,n,t,r,i),!0;case"dragenter":return xn=zn(xn,e,n,t,r,i),!0;case"mouseover":return kn=zn(kn,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return En.set(o,zn(En.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Tn.set(o,zn(Tn.get(o)||null,e,n,t,r,i)),!0}return!1}(i,e,n,t,r)){Nn(e,r),e=pn(e,r,null,n);try{$(hn,e)}finally{dn(e)}}}}function Jn(e,n,t,r){if(null!==(t=Ct(t=cn(r)))){var i=Je(t);if(null===i)t=null;else{var o=i.tag;if(13===o){if(null!==(t=en(i)))return t;t=null}else if(3===o){if(i.stateNode.hydrate)return 3===i.tag?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}e=pn(e,r,t,n);try{$(hn,e)}finally{dn(e)}return null}var et={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nt=["Webkit","ms","Moz","O"];function tt(e,n,t){return null==n||"boolean"==typeof n||""===n?"":t||"number"!=typeof n||0===n||et.hasOwnProperty(e)&&et[e]?(""+n).trim():n+"px"}function rt(e,n){for(var t in e=e.style,n)if(n.hasOwnProperty(t)){var r=0===t.indexOf("--"),i=tt(t,n[t],r);"float"===t&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}Object.keys(et).forEach((function(e){nt.forEach((function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),et[n]=et[e]}))}));var it=i({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ot(e,n){if(n){if(it[e]&&(null!=n.children||null!=n.dangerouslySetInnerHTML))throw Error(u(137,e,""));if(null!=n.dangerouslySetInnerHTML){if(null!=n.children)throw Error(u(60));if("object"!=typeof n.dangerouslySetInnerHTML||!("__html"in n.dangerouslySetInnerHTML))throw Error(u(61))}if(null!=n.style&&"object"!=typeof n.style)throw Error(u(62,""))}}function ut(e,n){if(-1===e.indexOf("-"))return"string"==typeof n.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var at=je;function lt(e,n){var t=Ze(e=9===e.nodeType||11===e.nodeType?e:e.ownerDocument);n=T[n];for(var r=0;r<n.length;r++)vn(n[r],e,t)}function ct(){}function ft(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(n){return e.body}}function st(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dt(e,n){var t,r=st(e);for(e=0;r;){if(3===r.nodeType){if(t=e+r.textContent.length,e<=n&&t>=n)return{node:r,offset:n-e};e=t}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=st(r)}}function pt(){for(var e=window,n=ft();n instanceof e.HTMLIFrameElement;){try{var t="string"==typeof n.contentWindow.location.href}catch(e){t=!1}if(!t)break;n=ft((e=n.contentWindow).document)}return n}function ht(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&("input"===n&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===n||"true"===e.contentEditable)}var vt=null,mt=null;function gt(e,n){switch(e){case"button":case"input":case"select":case"textarea":return!!n.autoFocus}return!1}function yt(e,n){return"textarea"===e||"option"===e||"noscript"===e||"string"==typeof n.children||"number"==typeof n.children||"object"==typeof n.dangerouslySetInnerHTML&&null!==n.dangerouslySetInnerHTML&&null!=n.dangerouslySetInnerHTML.__html}var bt="function"==typeof setTimeout?setTimeout:void 0,_t="function"==typeof clearTimeout?clearTimeout:void 0;function wt(e){for(;null!=e;e=e.nextSibling){var n=e.nodeType;if(1===n||3===n)break}return e}function xt(e){e=e.previousSibling;for(var n=0;e;){if(8===e.nodeType){var t=e.data;if("$"===t||"$!"===t||"$?"===t){if(0===n)return e;n--}else"/$"===t&&n++}e=e.previousSibling}return null}var kt=Math.random().toString(36).slice(2),Et="__reactInternalInstance$"+kt,Tt="__reactEventHandlers$"+kt,St="__reactContainere$"+kt;function Ct(e){var n=e[Et];if(n)return n;for(var t=e.parentNode;t;){if(n=t[St]||t[Et]){if(t=n.alternate,null!==n.child||null!==t&&null!==t.child)for(e=xt(e);null!==e;){if(t=e[Et])return t;e=xt(e)}return n}t=(e=t).parentNode}return null}function Pt(e){return!(e=e[Et]||e[St])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function Ot(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(u(33))}function Nt(e){return e[Tt]||null}function zt(e){do{e=e.return}while(e&&5!==e.tag);return e||null}function Rt(e,n){var t=e.stateNode;if(!t)return null;var r=h(t);if(!r)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(t&&"function"!=typeof t)throw Error(u(231,n,typeof t));return t}function It(e,n,t){(n=Rt(e,t.dispatchConfig.phasedRegistrationNames[n]))&&(t._dispatchListeners=rn(t._dispatchListeners,n),t._dispatchInstances=rn(t._dispatchInstances,e))}function jt(e){if(e&&e.dispatchConfig.phasedRegistrationNames){for(var n=e._targetInst,t=[];n;)t.push(n),n=zt(n);for(n=t.length;0<n--;)It(t[n],"captured",e);for(n=0;n<t.length;n++)It(t[n],"bubbled",e)}}function Mt(e,n,t){e&&t&&t.dispatchConfig.registrationName&&(n=Rt(e,t.dispatchConfig.registrationName))&&(t._dispatchListeners=rn(t._dispatchListeners,n),t._dispatchInstances=rn(t._dispatchInstances,e))}function At(e){e&&e.dispatchConfig.registrationName&&Mt(e._targetInst,null,e)}function Lt(e){on(e,jt)}var Ft=null,Dt=null,Ut=null;function $t(){if(Ut)return Ut;var e,n,t=Dt,r=t.length,i="value"in Ft?Ft.value:Ft.textContent,o=i.length;for(e=0;e<r&&t[e]===i[e];e++);var u=r-e;for(n=1;n<=u&&t[r-n]===i[o-n];n++);return Ut=i.slice(e,1<n?1-n:void 0)}function Wt(){return!0}function Bt(){return!1}function Vt(e,n,t,r){for(var i in this.dispatchConfig=e,this._targetInst=n,this.nativeEvent=t,e=this.constructor.Interface)e.hasOwnProperty(i)&&((n=e[i])?this[i]=n(t):"target"===i?this.target=r:this[i]=t[i]);return this.isDefaultPrevented=(null!=t.defaultPrevented?t.defaultPrevented:!1===t.returnValue)?Wt:Bt,this.isPropagationStopped=Bt,this}function Qt(e,n,t,r){if(this.eventPool.length){var i=this.eventPool.pop();return this.call(i,e,n,t,r),i}return new this(e,n,t,r)}function Ht(e){if(!(e instanceof this))throw Error(u(279));e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}function Kt(e){e.eventPool=[],e.getPooled=Qt,e.release=Ht}i(Vt.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Wt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Wt)},persist:function(){this.isPersistent=Wt},isPersistent:Bt,destructor:function(){var e,n=this.constructor.Interface;for(e in n)this[e]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Bt,this._dispatchInstances=this._dispatchListeners=null}}),Vt.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Vt.extend=function(e){function n(){}function t(){return r.apply(this,arguments)}var r=this;n.prototype=r.prototype;var o=new n;return i(o,t.prototype),t.prototype=o,t.prototype.constructor=t,t.Interface=i({},r.Interface,e),t.extend=r.extend,Kt(t),t},Kt(Vt);var qt=Vt.extend({data:null}),Yt=Vt.extend({data:null}),Gt=[9,13,27,32],Xt=C&&"CompositionEvent"in window,Zt=null;C&&"documentMode"in document&&(Zt=document.documentMode);var Jt=C&&"TextEvent"in window&&!Zt,er=C&&(!Xt||Zt&&8<Zt&&11>=Zt),nr=String.fromCharCode(32),tr={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},rr=!1;function ir(e,n){switch(e){case"keyup":return-1!==Gt.indexOf(n.keyCode);case"keydown":return 229!==n.keyCode;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}function or(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var ur=!1;var ar={eventTypes:tr,extractEvents:function(e,n,t,r){var i;if(Xt)e:{switch(e){case"compositionstart":var o=tr.compositionStart;break e;case"compositionend":o=tr.compositionEnd;break e;case"compositionupdate":o=tr.compositionUpdate;break e}o=void 0}else ur?ir(e,t)&&(o=tr.compositionEnd):"keydown"===e&&229===t.keyCode&&(o=tr.compositionStart);return o?(er&&"ko"!==t.locale&&(ur||o!==tr.compositionStart?o===tr.compositionEnd&&ur&&(i=$t()):(Dt="value"in(Ft=r)?Ft.value:Ft.textContent,ur=!0)),o=qt.getPooled(o,n,t,r),i?o.data=i:null!==(i=or(t))&&(o.data=i),Lt(o),i=o):i=null,(e=Jt?function(e,n){switch(e){case"compositionend":return or(n);case"keypress":return 32!==n.which?null:(rr=!0,nr);case"textInput":return(e=n.data)===nr&&rr?null:e;default:return null}}(e,t):function(e,n){if(ur)return"compositionend"===e||!Xt&&ir(e,n)?(e=$t(),Ut=Dt=Ft=null,ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return er&&"ko"!==n.locale?null:n.data;default:return null}}(e,t))?((n=Yt.getPooled(tr.beforeInput,n,t,r)).data=e,Lt(n)):n=null,null===i?n:null===n?i:[i,n]}},lr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cr(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===n?!!lr[e.type]:"textarea"===n}var fr={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function sr(e,n,t){return(e=Vt.getPooled(fr.change,e,n,t)).type="change",R(t),Lt(e),e}var dr=null,pr=null;function hr(e){ln(e)}function vr(e){if(we(Ot(e)))return e}function mr(e,n){if("change"===e)return n}var gr=!1;function yr(){dr&&(dr.detachEvent("onpropertychange",br),pr=dr=null)}function br(e){if("value"===e.propertyName&&vr(pr))if(e=sr(pr,e,cn(e)),F)ln(e);else{F=!0;try{j(hr,e)}finally{F=!1,U()}}}function _r(e,n,t){"focus"===e?(yr(),pr=t,(dr=n).attachEvent("onpropertychange",br)):"blur"===e&&yr()}function wr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return vr(pr)}function xr(e,n){if("click"===e)return vr(n)}function kr(e,n){if("input"===e||"change"===e)return vr(n)}C&&(gr=fn("input")&&(!document.documentMode||9<document.documentMode));var Er={eventTypes:fr,_isInputEventSupported:gr,extractEvents:function(e,n,t,r){var i=n?Ot(n):window,o=i.nodeName&&i.nodeName.toLowerCase();if("select"===o||"input"===o&&"file"===i.type)var u=mr;else if(cr(i))if(gr)u=kr;else{u=wr;var a=_r}else(o=i.nodeName)&&"input"===o.toLowerCase()&&("checkbox"===i.type||"radio"===i.type)&&(u=xr);if(u&&(u=u(e,n)))return sr(u,t,r);a&&a(e,i,n),"blur"===e&&(e=i._wrapperState)&&e.controlled&&"number"===i.type&&Ce(i,"number",i.value)}},Tr=Vt.extend({view:null,detail:null}),Sr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cr(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):!!(e=Sr[e])&&!!n[e]}function Pr(){return Cr}var Or=0,Nr=0,zr=!1,Rr=!1,Ir=Tr.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Pr,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},movementX:function(e){if("movementX"in e)return e.movementX;var n=Or;return Or=e.screenX,zr?"mousemove"===e.type?e.screenX-n:0:(zr=!0,0)},movementY:function(e){if("movementY"in e)return e.movementY;var n=Nr;return Nr=e.screenY,Rr?"mousemove"===e.type?e.screenY-n:0:(Rr=!0,0)}}),jr=Ir.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Mr={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},Ar={eventTypes:Mr,extractEvents:function(e,n,t,r,i){var o="mouseover"===e||"pointerover"===e,u="mouseout"===e||"pointerout"===e;if(o&&0==(32&i)&&(t.relatedTarget||t.fromElement)||!u&&!o)return null;(o=r.window===r?r:(o=r.ownerDocument)?o.defaultView||o.parentWindow:window,u)?(u=n,null!==(n=(n=t.relatedTarget||t.toElement)?Ct(n):null)&&(n!==Je(n)||5!==n.tag&&6!==n.tag)&&(n=null)):u=null;if(u===n)return null;if("mouseout"===e||"mouseover"===e)var a=Ir,l=Mr.mouseLeave,c=Mr.mouseEnter,f="mouse";else"pointerout"!==e&&"pointerover"!==e||(a=jr,l=Mr.pointerLeave,c=Mr.pointerEnter,f="pointer");if(e=null==u?o:Ot(u),o=null==n?o:Ot(n),(l=a.getPooled(l,u,t,r)).type=f+"leave",l.target=e,l.relatedTarget=o,(t=a.getPooled(c,n,t,r)).type=f+"enter",t.target=o,t.relatedTarget=e,f=n,(r=u)&&f)e:{for(c=f,u=0,e=a=r;e;e=zt(e))u++;for(e=0,n=c;n;n=zt(n))e++;for(;0<u-e;)a=zt(a),u--;for(;0<e-u;)c=zt(c),e--;for(;u--;){if(a===c||a===c.alternate)break e;a=zt(a),c=zt(c)}a=null}else a=null;for(c=a,a=[];r&&r!==c&&(null===(u=r.alternate)||u!==c);)a.push(r),r=zt(r);for(r=[];f&&f!==c&&(null===(u=f.alternate)||u!==c);)r.push(f),f=zt(f);for(f=0;f<a.length;f++)Mt(a[f],"bubbled",l);for(f=r.length;0<f--;)Mt(r[f],"captured",t);return 0==(64&i)?[l]:[l,t]}};var Lr="function"==typeof Object.is?Object.is:function(e,n){return e===n&&(0!==e||1/e==1/n)||e!=e&&n!=n},Fr=Object.prototype.hasOwnProperty;function Dr(e,n){if(Lr(e,n))return!0;if("object"!=typeof e||null===e||"object"!=typeof n||null===n)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++)if(!Fr.call(n,t[r])||!Lr(e[t[r]],n[t[r]]))return!1;return!0}var Ur=C&&"documentMode"in document&&11>=document.documentMode,$r={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Wr=null,Br=null,Vr=null,Qr=!1;function Hr(e,n){var t=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;return Qr||null==Wr||Wr!==ft(t)?null:("selectionStart"in(t=Wr)&&ht(t)?t={start:t.selectionStart,end:t.selectionEnd}:t={anchorNode:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset},Vr&&Dr(Vr,t)?null:(Vr=t,(e=Vt.getPooled($r.select,Br,e,n)).type="select",e.target=Wr,Lt(e),e))}var Kr={eventTypes:$r,extractEvents:function(e,n,t,r,i,o){if(!(o=!(i=o||(r.window===r?r.document:9===r.nodeType?r:r.ownerDocument)))){e:{i=Ze(i),o=T.onSelect;for(var u=0;u<o.length;u++)if(!i.has(o[u])){i=!1;break e}i=!0}o=!i}if(o)return null;switch(i=n?Ot(n):window,e){case"focus":(cr(i)||"true"===i.contentEditable)&&(Wr=i,Br=n,Vr=null);break;case"blur":Vr=Br=Wr=null;break;case"mousedown":Qr=!0;break;case"contextmenu":case"mouseup":case"dragend":return Qr=!1,Hr(t,r);case"selectionchange":if(Ur)break;case"keydown":case"keyup":return Hr(t,r)}return null}},qr=Vt.extend({animationName:null,elapsedTime:null,pseudoElement:null}),Yr=Vt.extend({clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gr=Tr.extend({relatedTarget:null});function Xr(e){var n=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===n&&(e=13):e=n,10===e&&(e=13),32<=e||13===e?e:0}var Zr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ei=Tr.extend({key:function(e){if(e.key){var n=Zr[e.key]||e.key;if("Unidentified"!==n)return n}return"keypress"===e.type?13===(e=Xr(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Jr[e.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Pr,charCode:function(e){return"keypress"===e.type?Xr(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Xr(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),ni=Ir.extend({dataTransfer:null}),ti=Tr.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Pr}),ri=Vt.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),ii=Ir.extend({deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null}),oi={eventTypes:Fn,extractEvents:function(e,n,t,r){var i=Dn.get(e);if(!i)return null;switch(e){case"keypress":if(0===Xr(t))return null;case"keydown":case"keyup":e=ei;break;case"blur":case"focus":e=Gr;break;case"click":if(2===t.button)return null;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":e=Ir;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":e=ni;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":e=ti;break;case He:case Ke:case qe:e=qr;break;case Ye:e=ri;break;case"scroll":e=Tr;break;case"wheel":e=ii;break;case"copy":case"cut":case"paste":e=Yr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":e=jr;break;default:e=Vt}return Lt(n=e.getPooled(i,n,t,r)),n}};if(y)throw Error(u(101));y=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),_(),h=Nt,v=Pt,m=Ot,S({SimpleEventPlugin:oi,EnterLeaveEventPlugin:Ar,ChangeEventPlugin:Er,SelectEventPlugin:Kr,BeforeInputEventPlugin:ar});var ui=[],ai=-1;function li(e){0>ai||(e.current=ui[ai],ui[ai]=null,ai--)}function ci(e,n){ai++,ui[ai]=e.current,e.current=n}var fi={},si={current:fi},di={current:!1},pi=fi;function hi(e,n){var t=e.type.contextTypes;if(!t)return fi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i,o={};for(i in t)o[i]=n[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function vi(e){return null!=(e=e.childContextTypes)}function mi(){li(di),li(si)}function gi(e,n,t){if(si.current!==fi)throw Error(u(168));ci(si,n),ci(di,t)}function yi(e,n,t){var r=e.stateNode;if(e=n.childContextTypes,"function"!=typeof r.getChildContext)return t;for(var o in r=r.getChildContext())if(!(o in e))throw Error(u(108,me(n)||"Unknown",o));return i({},t,{},r)}function bi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fi,pi=si.current,ci(si,e),ci(di,di.current),!0}function _i(e,n,t){var r=e.stateNode;if(!r)throw Error(u(169));t?(e=yi(e,n,pi),r.__reactInternalMemoizedMergedChildContext=e,li(di),li(si),ci(si,e)):li(di),ci(di,t)}var wi=o.unstable_runWithPriority,xi=o.unstable_scheduleCallback,ki=o.unstable_cancelCallback,Ei=o.unstable_requestPaint,Ti=o.unstable_now,Si=o.unstable_getCurrentPriorityLevel,Ci=o.unstable_ImmediatePriority,Pi=o.unstable_UserBlockingPriority,Oi=o.unstable_NormalPriority,Ni=o.unstable_LowPriority,zi=o.unstable_IdlePriority,Ri={},Ii=o.unstable_shouldYield,ji=void 0!==Ei?Ei:function(){},Mi=null,Ai=null,Li=!1,Fi=Ti(),Di=1e4>Fi?Ti:function(){return Ti()-Fi};function Ui(){switch(Si()){case Ci:return 99;case Pi:return 98;case Oi:return 97;case Ni:return 96;case zi:return 95;default:throw Error(u(332))}}function $i(e){switch(e){case 99:return Ci;case 98:return Pi;case 97:return Oi;case 96:return Ni;case 95:return zi;default:throw Error(u(332))}}function Wi(e,n){return e=$i(e),wi(e,n)}function Bi(e,n,t){return e=$i(e),xi(e,n,t)}function Vi(e){return null===Mi?(Mi=[e],Ai=xi(Ci,Hi)):Mi.push(e),Ri}function Qi(){if(null!==Ai){var e=Ai;Ai=null,ki(e)}Hi()}function Hi(){if(!Li&&null!==Mi){Li=!0;var e=0;try{var n=Mi;Wi(99,(function(){for(;e<n.length;e++){var t=n[e];do{t=t(!0)}while(null!==t)}})),Mi=null}catch(n){throw null!==Mi&&(Mi=Mi.slice(e+1)),xi(Ci,Qi),n}finally{Li=!1}}}function Ki(e,n,t){return 1073741821-(1+((1073741821-e+n/10)/(t/=10)|0))*t}function qi(e,n){if(e&&e.defaultProps)for(var t in n=i({},n),e=e.defaultProps)void 0===n[t]&&(n[t]=e[t]);return n}var Yi={current:null},Gi=null,Xi=null,Zi=null;function Ji(){Zi=Xi=Gi=null}function eo(e){var n=Yi.current;li(Yi),e.type._context._currentValue=n}function no(e,n){for(;null!==e;){var t=e.alternate;if(e.childExpirationTime<n)e.childExpirationTime=n,null!==t&&t.childExpirationTime<n&&(t.childExpirationTime=n);else{if(!(null!==t&&t.childExpirationTime<n))break;t.childExpirationTime=n}e=e.return}}function to(e,n){Gi=e,Zi=Xi=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(e.expirationTime>=n&&(Nu=!0),e.firstContext=null)}function ro(e,n){if(Zi!==e&&!1!==n&&0!==n)if("number"==typeof n&&1073741823!==n||(Zi=e,n=1073741823),n={context:e,observedBits:n,next:null},null===Xi){if(null===Gi)throw Error(u(308));Xi=n,Gi.dependencies={expirationTime:0,firstContext:n,responders:null}}else Xi=Xi.next=n;return e._currentValue}var io=!1;function oo(e){e.updateQueue={baseState:e.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}function uo(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,baseQueue:e.baseQueue,shared:e.shared,effects:e.effects})}function ao(e,n){return(e={expirationTime:e,suspenseConfig:n,tag:0,payload:null,callback:null,next:null}).next=e}function lo(e,n){if(null!==(e=e.updateQueue)){var t=(e=e.shared).pending;null===t?n.next=n:(n.next=t.next,t.next=n),e.pending=n}}function co(e,n){var t=e.alternate;null!==t&&uo(t,e),null===(t=(e=e.updateQueue).baseQueue)?(e.baseQueue=n.next=n,n.next=n):(n.next=t.next,t.next=n)}function fo(e,n,t,r){var o=e.updateQueue;io=!1;var u=o.baseQueue,a=o.shared.pending;if(null!==a){if(null!==u){var l=u.next;u.next=a.next,a.next=l}u=a,o.shared.pending=null,null!==(l=e.alternate)&&(null!==(l=l.updateQueue)&&(l.baseQueue=a))}if(null!==u){l=u.next;var c=o.baseState,f=0,s=null,d=null,p=null;if(null!==l)for(var h=l;;){if((a=h.expirationTime)<r){var v={expirationTime:h.expirationTime,suspenseConfig:h.suspenseConfig,tag:h.tag,payload:h.payload,callback:h.callback,next:null};null===p?(d=p=v,s=c):p=p.next=v,a>f&&(f=a)}else{null!==p&&(p=p.next={expirationTime:1073741823,suspenseConfig:h.suspenseConfig,tag:h.tag,payload:h.payload,callback:h.callback,next:null}),ol(a,h.suspenseConfig);e:{var m=e,g=h;switch(a=n,v=t,g.tag){case 1:if("function"==typeof(m=g.payload)){c=m.call(v,c,a);break e}c=m;break e;case 3:m.effectTag=-4097&m.effectTag|64;case 0:if(null==(a="function"==typeof(m=g.payload)?m.call(v,c,a):m))break e;c=i({},c,a);break e;case 2:io=!0}}null!==h.callback&&(e.effectTag|=32,null===(a=o.effects)?o.effects=[h]:a.push(h))}if(null===(h=h.next)||h===l){if(null===(a=o.shared.pending))break;h=u.next=a.next,a.next=l,o.baseQueue=u=a,o.shared.pending=null}}null===p?s=c:p.next=d,o.baseState=s,o.baseQueue=p,ul(f),e.expirationTime=f,e.memoizedState=c}}function so(e,n,t){if(e=n.effects,n.effects=null,null!==e)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(null!==i){if(r.callback=null,r=i,i=t,"function"!=typeof r)throw Error(u(191,r));r.call(i)}}}var po=G.ReactCurrentBatchConfig,ho=(new r.Component).refs;function vo(e,n,t,r){t=null==(t=t(r,n=e.memoizedState))?n:i({},n,t),e.memoizedState=t,0===e.expirationTime&&(e.updateQueue.baseState=t)}var mo={isMounted:function(e){return!!(e=e._reactInternalFiber)&&Je(e)===e},enqueueSetState:function(e,n,t){e=e._reactInternalFiber;var r=Ha(),i=po.suspense;(i=ao(r=Ka(r,e,i),i)).payload=n,null!=t&&(i.callback=t),lo(e,i),qa(e,r)},enqueueReplaceState:function(e,n,t){e=e._reactInternalFiber;var r=Ha(),i=po.suspense;(i=ao(r=Ka(r,e,i),i)).tag=1,i.payload=n,null!=t&&(i.callback=t),lo(e,i),qa(e,r)},enqueueForceUpdate:function(e,n){e=e._reactInternalFiber;var t=Ha(),r=po.suspense;(r=ao(t=Ka(t,e,r),r)).tag=2,null!=n&&(r.callback=n),lo(e,r),qa(e,t)}};function go(e,n,t,r,i,o,u){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,u):!n.prototype||!n.prototype.isPureReactComponent||(!Dr(t,r)||!Dr(i,o))}function yo(e,n,t){var r=!1,i=fi,o=n.contextType;return"object"==typeof o&&null!==o?o=ro(o):(i=vi(n)?pi:si.current,o=(r=null!=(r=n.contextTypes))?hi(e,i):fi),n=new n(t,o),e.memoizedState=null!==n.state&&void 0!==n.state?n.state:null,n.updater=mo,e.stateNode=n,n._reactInternalFiber=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function bo(e,n,t,r){e=n.state,"function"==typeof n.componentWillReceiveProps&&n.componentWillReceiveProps(t,r),"function"==typeof n.UNSAFE_componentWillReceiveProps&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&mo.enqueueReplaceState(n,n.state,null)}function _o(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs=ho,oo(e);var o=n.contextType;"object"==typeof o&&null!==o?i.context=ro(o):(o=vi(n)?pi:si.current,i.context=hi(e,o)),fo(e,t,i,r),i.state=e.memoizedState,"function"==typeof(o=n.getDerivedStateFromProps)&&(vo(e,n,o,t),i.state=e.memoizedState),"function"==typeof n.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(n=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),n!==i.state&&mo.enqueueReplaceState(i,i.state,null),fo(e,t,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.effectTag|=4)}var wo=Array.isArray;function xo(e,n,t){if(null!==(e=t.ref)&&"function"!=typeof e&&"object"!=typeof e){if(t._owner){if(t=t._owner){if(1!==t.tag)throw Error(u(309));var r=t.stateNode}if(!r)throw Error(u(147,e));var i=""+e;return null!==n&&null!==n.ref&&"function"==typeof n.ref&&n.ref._stringRef===i?n.ref:((n=function(e){var n=r.refs;n===ho&&(n=r.refs={}),null===e?delete n[i]:n[i]=e})._stringRef=i,n)}if("string"!=typeof e)throw Error(u(284));if(!t._owner)throw Error(u(290,e))}return e}function ko(e,n){if("textarea"!==e.type)throw Error(u(31,"[object Object]"===Object.prototype.toString.call(n)?"object with keys {"+Object.keys(n).join(", ")+"}":n,""))}function Eo(e){function n(n,t){if(e){var r=n.lastEffect;null!==r?(r.nextEffect=t,n.lastEffect=t):n.firstEffect=n.lastEffect=t,t.nextEffect=null,t.effectTag=8}}function t(t,r){if(!e)return null;for(;null!==r;)n(t,r),r=r.sibling;return null}function r(e,n){for(e=new Map;null!==n;)null!==n.key?e.set(n.key,n):e.set(n.index,n),n=n.sibling;return e}function i(e,n){return(e=Sl(e,n)).index=0,e.sibling=null,e}function o(n,t,r){return n.index=r,e?null!==(r=n.alternate)?(r=r.index)<t?(n.effectTag=2,t):r:(n.effectTag=2,t):t}function a(n){return e&&null===n.alternate&&(n.effectTag=2),n}function l(e,n,t,r){return null===n||6!==n.tag?((n=Ol(t,e.mode,r)).return=e,n):((n=i(n,t)).return=e,n)}function c(e,n,t,r){return null!==n&&n.elementType===t.type?((r=i(n,t.props)).ref=xo(e,n,t),r.return=e,r):((r=Cl(t.type,t.key,t.props,null,e.mode,r)).ref=xo(e,n,t),r.return=e,r)}function f(e,n,t,r){return null===n||4!==n.tag||n.stateNode.containerInfo!==t.containerInfo||n.stateNode.implementation!==t.implementation?((n=Nl(t,e.mode,r)).return=e,n):((n=i(n,t.children||[])).return=e,n)}function s(e,n,t,r,o){return null===n||7!==n.tag?((n=Pl(t,e.mode,r,o)).return=e,n):((n=i(n,t)).return=e,n)}function d(e,n,t){if("string"==typeof n||"number"==typeof n)return(n=Ol(""+n,e.mode,t)).return=e,n;if("object"==typeof n&&null!==n){switch(n.$$typeof){case ee:return(t=Cl(n.type,n.key,n.props,null,e.mode,t)).ref=xo(e,null,n),t.return=e,t;case ne:return(n=Nl(n,e.mode,t)).return=e,n}if(wo(n)||ve(n))return(n=Pl(n,e.mode,t,null)).return=e,n;ko(e,n)}return null}function p(e,n,t,r){var i=null!==n?n.key:null;if("string"==typeof t||"number"==typeof t)return null!==i?null:l(e,n,""+t,r);if("object"==typeof t&&null!==t){switch(t.$$typeof){case ee:return t.key===i?t.type===te?s(e,n,t.props.children,r,i):c(e,n,t,r):null;case ne:return t.key===i?f(e,n,t,r):null}if(wo(t)||ve(t))return null!==i?null:s(e,n,t,r,null);ko(e,t)}return null}function h(e,n,t,r,i){if("string"==typeof r||"number"==typeof r)return l(n,e=e.get(t)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case ee:return e=e.get(null===r.key?t:r.key)||null,r.type===te?s(n,e,r.props.children,i,r.key):c(n,e,r,i);case ne:return f(n,e=e.get(null===r.key?t:r.key)||null,r,i)}if(wo(r)||ve(r))return s(n,e=e.get(t)||null,r,i,null);ko(n,r)}return null}function v(i,u,a,l){for(var c=null,f=null,s=u,v=u=0,m=null;null!==s&&v<a.length;v++){s.index>v?(m=s,s=null):m=s.sibling;var g=p(i,s,a[v],l);if(null===g){null===s&&(s=m);break}e&&s&&null===g.alternate&&n(i,s),u=o(g,u,v),null===f?c=g:f.sibling=g,f=g,s=m}if(v===a.length)return t(i,s),c;if(null===s){for(;v<a.length;v++)null!==(s=d(i,a[v],l))&&(u=o(s,u,v),null===f?c=s:f.sibling=s,f=s);return c}for(s=r(i,s);v<a.length;v++)null!==(m=h(s,i,v,a[v],l))&&(e&&null!==m.alternate&&s.delete(null===m.key?v:m.key),u=o(m,u,v),null===f?c=m:f.sibling=m,f=m);return e&&s.forEach((function(e){return n(i,e)})),c}function m(i,a,l,c){var f=ve(l);if("function"!=typeof f)throw Error(u(150));if(null==(l=f.call(l)))throw Error(u(151));for(var s=f=null,v=a,m=a=0,g=null,y=l.next();null!==v&&!y.done;m++,y=l.next()){v.index>m?(g=v,v=null):g=v.sibling;var b=p(i,v,y.value,c);if(null===b){null===v&&(v=g);break}e&&v&&null===b.alternate&&n(i,v),a=o(b,a,m),null===s?f=b:s.sibling=b,s=b,v=g}if(y.done)return t(i,v),f;if(null===v){for(;!y.done;m++,y=l.next())null!==(y=d(i,y.value,c))&&(a=o(y,a,m),null===s?f=y:s.sibling=y,s=y);return f}for(v=r(i,v);!y.done;m++,y=l.next())null!==(y=h(v,i,m,y.value,c))&&(e&&null!==y.alternate&&v.delete(null===y.key?m:y.key),a=o(y,a,m),null===s?f=y:s.sibling=y,s=y);return e&&v.forEach((function(e){return n(i,e)})),f}return function(e,r,o,l){var c="object"==typeof o&&null!==o&&o.type===te&&null===o.key;c&&(o=o.props.children);var f="object"==typeof o&&null!==o;if(f)switch(o.$$typeof){case ee:e:{for(f=o.key,c=r;null!==c;){if(c.key===f){switch(c.tag){case 7:if(o.type===te){t(e,c.sibling),(r=i(c,o.props.children)).return=e,e=r;break e}break;default:if(c.elementType===o.type){t(e,c.sibling),(r=i(c,o.props)).ref=xo(e,c,o),r.return=e,e=r;break e}}t(e,c);break}n(e,c),c=c.sibling}o.type===te?((r=Pl(o.props.children,e.mode,l,o.key)).return=e,e=r):((l=Cl(o.type,o.key,o.props,null,e.mode,l)).ref=xo(e,r,o),l.return=e,e=l)}return a(e);case ne:e:{for(c=o.key;null!==r;){if(r.key===c){if(4===r.tag&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){t(e,r.sibling),(r=i(r,o.children||[])).return=e,e=r;break e}t(e,r);break}n(e,r),r=r.sibling}(r=Nl(o,e.mode,l)).return=e,e=r}return a(e)}if("string"==typeof o||"number"==typeof o)return o=""+o,null!==r&&6===r.tag?(t(e,r.sibling),(r=i(r,o)).return=e,e=r):(t(e,r),(r=Ol(o,e.mode,l)).return=e,e=r),a(e);if(wo(o))return v(e,r,o,l);if(ve(o))return m(e,r,o,l);if(f&&ko(e,o),void 0===o&&!c)switch(e.tag){case 1:case 0:throw e=e.type,Error(u(152,e.displayName||e.name||"Component"))}return t(e,r)}}var To=Eo(!0),So=Eo(!1),Co={},Po={current:Co},Oo={current:Co},No={current:Co};function zo(e){if(e===Co)throw Error(u(174));return e}function Ro(e,n){switch(ci(No,n),ci(Oo,e),ci(Po,Co),e=n.nodeType){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Le(null,"");break;default:n=Le(n=(e=8===e?n.parentNode:n).namespaceURI||null,e=e.tagName)}li(Po),ci(Po,n)}function Io(){li(Po),li(Oo),li(No)}function jo(e){zo(No.current);var n=zo(Po.current),t=Le(n,e.type);n!==t&&(ci(Oo,e),ci(Po,t))}function Mo(e){Oo.current===e&&(li(Po),li(Oo))}var Ao={current:0};function Lo(e){for(var n=e;null!==n;){if(13===n.tag){var t=n.memoizedState;if(null!==t&&(null===(t=t.dehydrated)||"$?"===t.data||"$!"===t.data))return n}else if(19===n.tag&&void 0!==n.memoizedProps.revealOrder){if(0!=(64&n.effectTag))return n}else if(null!==n.child){n.child.return=n,n=n.child;continue}if(n===e)break;for(;null===n.sibling;){if(null===n.return||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Fo(e,n){return{responder:e,props:n}}var Do=G.ReactCurrentDispatcher,Uo=G.ReactCurrentBatchConfig,$o=0,Wo=null,Bo=null,Vo=null,Qo=!1;function Ho(){throw Error(u(321))}function Ko(e,n){if(null===n)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Lr(e[t],n[t]))return!1;return!0}function qo(e,n,t,r,i,o){if($o=o,Wo=n,n.memoizedState=null,n.updateQueue=null,n.expirationTime=0,Do.current=null===e||null===e.memoizedState?gu:yu,e=t(r,i),n.expirationTime===$o){o=0;do{if(n.expirationTime=0,!(25>o))throw Error(u(301));o+=1,Vo=Bo=null,n.updateQueue=null,Do.current=bu,e=t(r,i)}while(n.expirationTime===$o)}if(Do.current=mu,n=null!==Bo&&null!==Bo.next,$o=0,Vo=Bo=Wo=null,Qo=!1,n)throw Error(u(300));return e}function Yo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Vo?Wo.memoizedState=Vo=e:Vo=Vo.next=e,Vo}function Go(){if(null===Bo){var e=Wo.alternate;e=null!==e?e.memoizedState:null}else e=Bo.next;var n=null===Vo?Wo.memoizedState:Vo.next;if(null!==n)Vo=n,Bo=e;else{if(null===e)throw Error(u(310));e={memoizedState:(Bo=e).memoizedState,baseState:Bo.baseState,baseQueue:Bo.baseQueue,queue:Bo.queue,next:null},null===Vo?Wo.memoizedState=Vo=e:Vo=Vo.next=e}return Vo}function Xo(e,n){return"function"==typeof n?n(e):n}function Zo(e){var n=Go(),t=n.queue;if(null===t)throw Error(u(311));t.lastRenderedReducer=e;var r=Bo,i=r.baseQueue,o=t.pending;if(null!==o){if(null!==i){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,t.pending=null}if(null!==i){i=i.next,r=r.baseState;var l=a=o=null,c=i;do{var f=c.expirationTime;if(f<$o){var s={expirationTime:c.expirationTime,suspenseConfig:c.suspenseConfig,action:c.action,eagerReducer:c.eagerReducer,eagerState:c.eagerState,next:null};null===l?(a=l=s,o=r):l=l.next=s,f>Wo.expirationTime&&(Wo.expirationTime=f,ul(f))}else null!==l&&(l=l.next={expirationTime:1073741823,suspenseConfig:c.suspenseConfig,action:c.action,eagerReducer:c.eagerReducer,eagerState:c.eagerState,next:null}),ol(f,c.suspenseConfig),r=c.eagerReducer===e?c.eagerState:e(r,c.action);c=c.next}while(null!==c&&c!==i);null===l?o=r:l.next=a,Lr(r,n.memoizedState)||(Nu=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=l,t.lastRenderedState=r}return[n.memoizedState,t.dispatch]}function Jo(e){var n=Go(),t=n.queue;if(null===t)throw Error(u(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(null!==i){t.pending=null;var a=i=i.next;do{o=e(o,a.action),a=a.next}while(a!==i);Lr(o,n.memoizedState)||(Nu=!0),n.memoizedState=o,null===n.baseQueue&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function eu(e){var n=Yo();return"function"==typeof e&&(e=e()),n.memoizedState=n.baseState=e,e=(e=n.queue={pending:null,dispatch:null,lastRenderedReducer:Xo,lastRenderedState:e}).dispatch=vu.bind(null,Wo,e),[n.memoizedState,e]}function nu(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},null===(n=Wo.updateQueue)?(n={lastEffect:null},Wo.updateQueue=n,n.lastEffect=e.next=e):null===(t=n.lastEffect)?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e),e}function tu(){return Go().memoizedState}function ru(e,n,t,r){var i=Yo();Wo.effectTag|=e,i.memoizedState=nu(1|n,t,void 0,void 0===r?null:r)}function iu(e,n,t,r){var i=Go();r=void 0===r?null:r;var o=void 0;if(null!==Bo){var u=Bo.memoizedState;if(o=u.destroy,null!==r&&Ko(r,u.deps))return void nu(n,t,o,r)}Wo.effectTag|=e,i.memoizedState=nu(1|n,t,o,r)}function ou(e,n){return ru(516,4,e,n)}function uu(e,n){return iu(516,4,e,n)}function au(e,n){return iu(4,2,e,n)}function lu(e,n){return"function"==typeof n?(e=e(),n(e),function(){n(null)}):null!=n?(e=e(),n.current=e,function(){n.current=null}):void 0}function cu(e,n,t){return t=null!=t?t.concat([e]):null,iu(4,2,lu.bind(null,n,e),t)}function fu(){}function su(e,n){return Yo().memoizedState=[e,void 0===n?null:n],e}function du(e,n){var t=Go();n=void 0===n?null:n;var r=t.memoizedState;return null!==r&&null!==n&&Ko(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function pu(e,n){var t=Go();n=void 0===n?null:n;var r=t.memoizedState;return null!==r&&null!==n&&Ko(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function hu(e,n,t){var r=Ui();Wi(98>r?98:r,(function(){e(!0)})),Wi(97<r?97:r,(function(){var r=Uo.suspense;Uo.suspense=void 0===n?null:n;try{e(!1),t()}finally{Uo.suspense=r}}))}function vu(e,n,t){var r=Ha(),i=po.suspense;i={expirationTime:r=Ka(r,e,i),suspenseConfig:i,action:t,eagerReducer:null,eagerState:null,next:null};var o=n.pending;if(null===o?i.next=i:(i.next=o.next,o.next=i),n.pending=i,o=e.alternate,e===Wo||null!==o&&o===Wo)Qo=!0,i.expirationTime=$o,Wo.expirationTime=$o;else{if(0===e.expirationTime&&(null===o||0===o.expirationTime)&&null!==(o=n.lastRenderedReducer))try{var u=n.lastRenderedState,a=o(u,t);if(i.eagerReducer=o,i.eagerState=a,Lr(a,u))return}catch(e){}qa(e,r)}}var mu={readContext:ro,useCallback:Ho,useContext:Ho,useEffect:Ho,useImperativeHandle:Ho,useLayoutEffect:Ho,useMemo:Ho,useReducer:Ho,useRef:Ho,useState:Ho,useDebugValue:Ho,useResponder:Ho,useDeferredValue:Ho,useTransition:Ho},gu={readContext:ro,useCallback:su,useContext:ro,useEffect:ou,useImperativeHandle:function(e,n,t){return t=null!=t?t.concat([e]):null,ru(4,2,lu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return ru(4,2,e,n)},useMemo:function(e,n){var t=Yo();return n=void 0===n?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Yo();return n=void 0!==t?t(n):n,r.memoizedState=r.baseState=n,e=(e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:n}).dispatch=vu.bind(null,Wo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Yo().memoizedState=e},useState:eu,useDebugValue:fu,useResponder:Fo,useDeferredValue:function(e,n){var t=eu(e),r=t[0],i=t[1];return ou((function(){var t=Uo.suspense;Uo.suspense=void 0===n?null:n;try{i(e)}finally{Uo.suspense=t}}),[e,n]),r},useTransition:function(e){var n=eu(!1),t=n[0];return n=n[1],[su(hu.bind(null,n,e),[n,e]),t]}},yu={readContext:ro,useCallback:du,useContext:ro,useEffect:uu,useImperativeHandle:cu,useLayoutEffect:au,useMemo:pu,useReducer:Zo,useRef:tu,useState:function(){return Zo(Xo)},useDebugValue:fu,useResponder:Fo,useDeferredValue:function(e,n){var t=Zo(Xo),r=t[0],i=t[1];return uu((function(){var t=Uo.suspense;Uo.suspense=void 0===n?null:n;try{i(e)}finally{Uo.suspense=t}}),[e,n]),r},useTransition:function(e){var n=Zo(Xo),t=n[0];return n=n[1],[du(hu.bind(null,n,e),[n,e]),t]}},bu={readContext:ro,useCallback:du,useContext:ro,useEffect:uu,useImperativeHandle:cu,useLayoutEffect:au,useMemo:pu,useReducer:Jo,useRef:tu,useState:function(){return Jo(Xo)},useDebugValue:fu,useResponder:Fo,useDeferredValue:function(e,n){var t=Jo(Xo),r=t[0],i=t[1];return uu((function(){var t=Uo.suspense;Uo.suspense=void 0===n?null:n;try{i(e)}finally{Uo.suspense=t}}),[e,n]),r},useTransition:function(e){var n=Jo(Xo),t=n[0];return n=n[1],[du(hu.bind(null,n,e),[n,e]),t]}},_u=null,wu=null,xu=!1;function ku(e,n){var t=El(5,null,null,0);t.elementType="DELETED",t.type="DELETED",t.stateNode=n,t.return=e,t.effectTag=8,null!==e.lastEffect?(e.lastEffect.nextEffect=t,e.lastEffect=t):e.firstEffect=e.lastEffect=t}function Eu(e,n){switch(e.tag){case 5:var t=e.type;return null!==(n=1!==n.nodeType||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n)&&(e.stateNode=n,!0);case 6:return null!==(n=""===e.pendingProps||3!==n.nodeType?null:n)&&(e.stateNode=n,!0);case 13:default:return!1}}function Tu(e){if(xu){var n=wu;if(n){var t=n;if(!Eu(e,n)){if(!(n=wt(t.nextSibling))||!Eu(e,n))return e.effectTag=-1025&e.effectTag|2,xu=!1,void(_u=e);ku(_u,t)}_u=e,wu=wt(n.firstChild)}else e.effectTag=-1025&e.effectTag|2,xu=!1,_u=e}}function Su(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;_u=e}function Cu(e){if(e!==_u)return!1;if(!xu)return Su(e),xu=!0,!1;var n=e.type;if(5!==e.tag||"head"!==n&&"body"!==n&&!yt(n,e.memoizedProps))for(n=wu;n;)ku(e,n),n=wt(n.nextSibling);if(Su(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(u(317));e:{for(e=e.nextSibling,n=0;e;){if(8===e.nodeType){var t=e.data;if("/$"===t){if(0===n){wu=wt(e.nextSibling);break e}n--}else"$"!==t&&"$!"!==t&&"$?"!==t||n++}e=e.nextSibling}wu=null}}else wu=_u?wt(e.stateNode.nextSibling):null;return!0}function Pu(){wu=_u=null,xu=!1}var Ou=G.ReactCurrentOwner,Nu=!1;function zu(e,n,t,r){n.child=null===e?So(n,null,t,r):To(n,e.child,t,r)}function Ru(e,n,t,r,i){t=t.render;var o=n.ref;return to(n,i),r=qo(e,n,t,r,o,i),null===e||Nu?(n.effectTag|=1,zu(e,n,r,i),n.child):(n.updateQueue=e.updateQueue,n.effectTag&=-517,e.expirationTime<=i&&(e.expirationTime=0),qu(e,n,i))}function Iu(e,n,t,r,i,o){if(null===e){var u=t.type;return"function"!=typeof u||Tl(u)||void 0!==u.defaultProps||null!==t.compare||void 0!==t.defaultProps?((e=Cl(t.type,null,r,null,n.mode,o)).ref=n.ref,e.return=n,n.child=e):(n.tag=15,n.type=u,ju(e,n,u,r,i,o))}return u=e.child,i<o&&(i=u.memoizedProps,(t=null!==(t=t.compare)?t:Dr)(i,r)&&e.ref===n.ref)?qu(e,n,o):(n.effectTag|=1,(e=Sl(u,r)).ref=n.ref,e.return=n,n.child=e)}function ju(e,n,t,r,i,o){return null!==e&&Dr(e.memoizedProps,r)&&e.ref===n.ref&&(Nu=!1,i<o)?(n.expirationTime=e.expirationTime,qu(e,n,o)):Au(e,n,t,r,o)}function Mu(e,n){var t=n.ref;(null===e&&null!==t||null!==e&&e.ref!==t)&&(n.effectTag|=128)}function Au(e,n,t,r,i){var o=vi(t)?pi:si.current;return o=hi(n,o),to(n,i),t=qo(e,n,t,r,o,i),null===e||Nu?(n.effectTag|=1,zu(e,n,t,i),n.child):(n.updateQueue=e.updateQueue,n.effectTag&=-517,e.expirationTime<=i&&(e.expirationTime=0),qu(e,n,i))}function Lu(e,n,t,r,i){if(vi(t)){var o=!0;bi(n)}else o=!1;if(to(n,i),null===n.stateNode)null!==e&&(e.alternate=null,n.alternate=null,n.effectTag|=2),yo(n,t,r),_o(n,t,r,i),r=!0;else if(null===e){var u=n.stateNode,a=n.memoizedProps;u.props=a;var l=u.context,c=t.contextType;"object"==typeof c&&null!==c?c=ro(c):c=hi(n,c=vi(t)?pi:si.current);var f=t.getDerivedStateFromProps,s="function"==typeof f||"function"==typeof u.getSnapshotBeforeUpdate;s||"function"!=typeof u.UNSAFE_componentWillReceiveProps&&"function"!=typeof u.componentWillReceiveProps||(a!==r||l!==c)&&bo(n,u,r,c),io=!1;var d=n.memoizedState;u.state=d,fo(n,r,u,i),l=n.memoizedState,a!==r||d!==l||di.current||io?("function"==typeof f&&(vo(n,t,f,r),l=n.memoizedState),(a=io||go(n,t,a,r,d,l,c))?(s||"function"!=typeof u.UNSAFE_componentWillMount&&"function"!=typeof u.componentWillMount||("function"==typeof u.componentWillMount&&u.componentWillMount(),"function"==typeof u.UNSAFE_componentWillMount&&u.UNSAFE_componentWillMount()),"function"==typeof u.componentDidMount&&(n.effectTag|=4)):("function"==typeof u.componentDidMount&&(n.effectTag|=4),n.memoizedProps=r,n.memoizedState=l),u.props=r,u.state=l,u.context=c,r=a):("function"==typeof u.componentDidMount&&(n.effectTag|=4),r=!1)}else u=n.stateNode,uo(e,n),a=n.memoizedProps,u.props=n.type===n.elementType?a:qi(n.type,a),l=u.context,"object"==typeof(c=t.contextType)&&null!==c?c=ro(c):c=hi(n,c=vi(t)?pi:si.current),(s="function"==typeof(f=t.getDerivedStateFromProps)||"function"==typeof u.getSnapshotBeforeUpdate)||"function"!=typeof u.UNSAFE_componentWillReceiveProps&&"function"!=typeof u.componentWillReceiveProps||(a!==r||l!==c)&&bo(n,u,r,c),io=!1,l=n.memoizedState,u.state=l,fo(n,r,u,i),d=n.memoizedState,a!==r||l!==d||di.current||io?("function"==typeof f&&(vo(n,t,f,r),d=n.memoizedState),(f=io||go(n,t,a,r,l,d,c))?(s||"function"!=typeof u.UNSAFE_componentWillUpdate&&"function"!=typeof u.componentWillUpdate||("function"==typeof u.componentWillUpdate&&u.componentWillUpdate(r,d,c),"function"==typeof u.UNSAFE_componentWillUpdate&&u.UNSAFE_componentWillUpdate(r,d,c)),"function"==typeof u.componentDidUpdate&&(n.effectTag|=4),"function"==typeof u.getSnapshotBeforeUpdate&&(n.effectTag|=256)):("function"!=typeof u.componentDidUpdate||a===e.memoizedProps&&l===e.memoizedState||(n.effectTag|=4),"function"!=typeof u.getSnapshotBeforeUpdate||a===e.memoizedProps&&l===e.memoizedState||(n.effectTag|=256),n.memoizedProps=r,n.memoizedState=d),u.props=r,u.state=d,u.context=c,r=f):("function"!=typeof u.componentDidUpdate||a===e.memoizedProps&&l===e.memoizedState||(n.effectTag|=4),"function"!=typeof u.getSnapshotBeforeUpdate||a===e.memoizedProps&&l===e.memoizedState||(n.effectTag|=256),r=!1);return Fu(e,n,t,r,o,i)}function Fu(e,n,t,r,i,o){Mu(e,n);var u=0!=(64&n.effectTag);if(!r&&!u)return i&&_i(n,t,!1),qu(e,n,o);r=n.stateNode,Ou.current=n;var a=u&&"function"!=typeof t.getDerivedStateFromError?null:r.render();return n.effectTag|=1,null!==e&&u?(n.child=To(n,e.child,null,o),n.child=To(n,null,a,o)):zu(e,n,a,o),n.memoizedState=r.state,i&&_i(n,t,!0),n.child}function Du(e){var n=e.stateNode;n.pendingContext?gi(0,n.pendingContext,n.pendingContext!==n.context):n.context&&gi(0,n.context,!1),Ro(e,n.containerInfo)}var Uu,$u,Wu,Bu={dehydrated:null,retryTime:0};function Vu(e,n,t){var r,i=n.mode,o=n.pendingProps,u=Ao.current,a=!1;if((r=0!=(64&n.effectTag))||(r=0!=(2&u)&&(null===e||null!==e.memoizedState)),r?(a=!0,n.effectTag&=-65):null!==e&&null===e.memoizedState||void 0===o.fallback||!0===o.unstable_avoidThisFallback||(u|=1),ci(Ao,1&u),null===e){if(void 0!==o.fallback&&Tu(n),a){if(a=o.fallback,(o=Pl(null,i,0,null)).return=n,0==(2&n.mode))for(e=null!==n.memoizedState?n.child.child:n.child,o.child=e;null!==e;)e.return=o,e=e.sibling;return(t=Pl(a,i,t,null)).return=n,o.sibling=t,n.memoizedState=Bu,n.child=o,t}return i=o.children,n.memoizedState=null,n.child=So(n,null,i,t)}if(null!==e.memoizedState){if(i=(e=e.child).sibling,a){if(o=o.fallback,(t=Sl(e,e.pendingProps)).return=n,0==(2&n.mode)&&(a=null!==n.memoizedState?n.child.child:n.child)!==e.child)for(t.child=a;null!==a;)a.return=t,a=a.sibling;return(i=Sl(i,o)).return=n,t.sibling=i,t.childExpirationTime=0,n.memoizedState=Bu,n.child=t,i}return t=To(n,e.child,o.children,t),n.memoizedState=null,n.child=t}if(e=e.child,a){if(a=o.fallback,(o=Pl(null,i,0,null)).return=n,o.child=e,null!==e&&(e.return=o),0==(2&n.mode))for(e=null!==n.memoizedState?n.child.child:n.child,o.child=e;null!==e;)e.return=o,e=e.sibling;return(t=Pl(a,i,t,null)).return=n,o.sibling=t,t.effectTag|=2,o.childExpirationTime=0,n.memoizedState=Bu,n.child=o,t}return n.memoizedState=null,n.child=To(n,e,o.children,t)}function Qu(e,n){e.expirationTime<n&&(e.expirationTime=n);var t=e.alternate;null!==t&&t.expirationTime<n&&(t.expirationTime=n),no(e.return,n)}function Hu(e,n,t,r,i,o){var u=e.memoizedState;null===u?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailExpiration:0,tailMode:i,lastEffect:o}:(u.isBackwards=n,u.rendering=null,u.renderingStartTime=0,u.last=r,u.tail=t,u.tailExpiration=0,u.tailMode=i,u.lastEffect=o)}function Ku(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(zu(e,n,r.children,t),0!=(2&(r=Ao.current)))r=1&r|2,n.effectTag|=64;else{if(null!==e&&0!=(64&e.effectTag))e:for(e=n.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Qu(e,t);else if(19===e.tag)Qu(e,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;null===e.sibling;){if(null===e.return||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ci(Ao,r),0==(2&n.mode))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;null!==t;)null!==(e=t.alternate)&&null===Lo(e)&&(i=t),t=t.sibling;null===(t=i)?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Hu(n,!1,i,t,o,n.lastEffect);break;case"backwards":for(t=null,i=n.child,n.child=null;null!==i;){if(null!==(e=i.alternate)&&null===Lo(e)){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Hu(n,!0,t,null,o,n.lastEffect);break;case"together":Hu(n,!1,null,null,void 0,n.lastEffect);break;default:n.memoizedState=null}return n.child}function qu(e,n,t){null!==e&&(n.dependencies=e.dependencies);var r=n.expirationTime;if(0!==r&&ul(r),n.childExpirationTime<t)return null;if(null!==e&&n.child!==e.child)throw Error(u(153));if(null!==n.child){for(t=Sl(e=n.child,e.pendingProps),n.child=t,t.return=n;null!==e.sibling;)e=e.sibling,(t=t.sibling=Sl(e,e.pendingProps)).return=n;t.sibling=null}return n.child}function Yu(e,n){switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;null!==n;)null!==n.alternate&&(t=n),n=n.sibling;null===t?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;null!==t;)null!==t.alternate&&(r=t),t=t.sibling;null===r?n||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Gu(e,n,t){var r=n.pendingProps;switch(n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return vi(n.type)&&mi(),null;case 3:return Io(),li(di),li(si),(t=n.stateNode).pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),null!==e&&null!==e.child||!Cu(n)||(n.effectTag|=4),null;case 5:Mo(n),t=zo(No.current);var o=n.type;if(null!==e&&null!=n.stateNode)$u(e,n,o,r,t),e.ref!==n.ref&&(n.effectTag|=128);else{if(!r){if(null===n.stateNode)throw Error(u(166));return null}if(e=zo(Po.current),Cu(n)){r=n.stateNode,o=n.type;var a=n.memoizedProps;switch(r[Et]=n,r[Tt]=a,o){case"iframe":case"object":case"embed":qn("load",r);break;case"video":case"audio":for(e=0;e<Ge.length;e++)qn(Ge[e],r);break;case"source":qn("error",r);break;case"img":case"image":case"link":qn("error",r),qn("load",r);break;case"form":qn("reset",r),qn("submit",r);break;case"details":qn("toggle",r);break;case"input":ke(r,a),qn("invalid",r),lt(t,"onChange");break;case"select":r._wrapperState={wasMultiple:!!a.multiple},qn("invalid",r),lt(t,"onChange");break;case"textarea":ze(r,a),qn("invalid",r),lt(t,"onChange")}for(var l in ot(o,a),e=null,a)if(a.hasOwnProperty(l)){var c=a[l];"children"===l?"string"==typeof c?r.textContent!==c&&(e=["children",c]):"number"==typeof c&&r.textContent!==""+c&&(e=["children",""+c]):E.hasOwnProperty(l)&&null!=c&&lt(t,l)}switch(o){case"input":_e(r),Se(r,a,!0);break;case"textarea":_e(r),Ie(r);break;case"select":case"option":break;default:"function"==typeof a.onClick&&(r.onclick=ct)}t=e,n.updateQueue=t,null!==t&&(n.effectTag|=4)}else{switch(l=9===t.nodeType?t:t.ownerDocument,e===at&&(e=Ae(o)),e===at?"script"===o?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=l.createElement(o,{is:r.is}):(e=l.createElement(o),"select"===o&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,o),e[Et]=n,e[Tt]=r,Uu(e,n),n.stateNode=e,l=ut(o,r),o){case"iframe":case"object":case"embed":qn("load",e),c=r;break;case"video":case"audio":for(c=0;c<Ge.length;c++)qn(Ge[c],e);c=r;break;case"source":qn("error",e),c=r;break;case"img":case"image":case"link":qn("error",e),qn("load",e),c=r;break;case"form":qn("reset",e),qn("submit",e),c=r;break;case"details":qn("toggle",e),c=r;break;case"input":ke(e,r),c=xe(e,r),qn("invalid",e),lt(t,"onChange");break;case"option":c=Pe(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},c=i({},r,{value:void 0}),qn("invalid",e),lt(t,"onChange");break;case"textarea":ze(e,r),c=Ne(e,r),qn("invalid",e),lt(t,"onChange");break;default:c=r}ot(o,c);var f=c;for(a in f)if(f.hasOwnProperty(a)){var s=f[a];"style"===a?rt(e,s):"dangerouslySetInnerHTML"===a?null!=(s=s?s.__html:void 0)&&De(e,s):"children"===a?"string"==typeof s?("textarea"!==o||""!==s)&&Ue(e,s):"number"==typeof s&&Ue(e,""+s):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(E.hasOwnProperty(a)?null!=s&&lt(t,a):null!=s&&X(e,a,s,l))}switch(o){case"input":_e(e),Se(e,r,!1);break;case"textarea":_e(e),Ie(e);break;case"option":null!=r.value&&e.setAttribute("value",""+ye(r.value));break;case"select":e.multiple=!!r.multiple,null!=(t=r.value)?Oe(e,!!r.multiple,t,!1):null!=r.defaultValue&&Oe(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof c.onClick&&(e.onclick=ct)}gt(o,r)&&(n.effectTag|=4)}null!==n.ref&&(n.effectTag|=128)}return null;case 6:if(e&&null!=n.stateNode)Wu(0,n,e.memoizedProps,r);else{if("string"!=typeof r&&null===n.stateNode)throw Error(u(166));t=zo(No.current),zo(Po.current),Cu(n)?(t=n.stateNode,r=n.memoizedProps,t[Et]=n,t.nodeValue!==r&&(n.effectTag|=4)):((t=(9===t.nodeType?t:t.ownerDocument).createTextNode(r))[Et]=n,n.stateNode=t)}return null;case 13:return li(Ao),r=n.memoizedState,0!=(64&n.effectTag)?(n.expirationTime=t,n):(t=null!==r,r=!1,null===e?void 0!==n.memoizedProps.fallback&&Cu(n):(r=null!==(o=e.memoizedState),t||null===o||null!==(o=e.child.sibling)&&(null!==(a=n.firstEffect)?(n.firstEffect=o,o.nextEffect=a):(n.firstEffect=n.lastEffect=o,o.nextEffect=null),o.effectTag=8)),t&&!r&&0!=(2&n.mode)&&(null===e&&!0!==n.memoizedProps.unstable_avoidThisFallback||0!=(1&Ao.current)?Ca===_a&&(Ca=wa):(Ca!==_a&&Ca!==wa||(Ca=xa),0!==Ra&&null!==Ea&&(Il(Ea,Sa),jl(Ea,Ra)))),(t||r)&&(n.effectTag|=4),null);case 4:return Io(),null;case 10:return eo(n),null;case 17:return vi(n.type)&&mi(),null;case 19:if(li(Ao),null===(r=n.memoizedState))return null;if(o=0!=(64&n.effectTag),null===(a=r.rendering)){if(o)Yu(r,!1);else if(Ca!==_a||null!==e&&0!=(64&e.effectTag))for(a=n.child;null!==a;){if(null!==(e=Lo(a))){for(n.effectTag|=64,Yu(r,!1),null!==(o=e.updateQueue)&&(n.updateQueue=o,n.effectTag|=4),null===r.lastEffect&&(n.firstEffect=null),n.lastEffect=r.lastEffect,r=n.child;null!==r;)a=t,(o=r).effectTag&=2,o.nextEffect=null,o.firstEffect=null,o.lastEffect=null,null===(e=o.alternate)?(o.childExpirationTime=0,o.expirationTime=a,o.child=null,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null):(o.childExpirationTime=e.childExpirationTime,o.expirationTime=e.expirationTime,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,a=e.dependencies,o.dependencies=null===a?null:{expirationTime:a.expirationTime,firstContext:a.firstContext,responders:a.responders}),r=r.sibling;return ci(Ao,1&Ao.current|2),n.child}a=a.sibling}}else{if(!o)if(null!==(e=Lo(a))){if(n.effectTag|=64,o=!0,null!==(t=e.updateQueue)&&(n.updateQueue=t,n.effectTag|=4),Yu(r,!0),null===r.tail&&"hidden"===r.tailMode&&!a.alternate)return null!==(n=n.lastEffect=r.lastEffect)&&(n.nextEffect=null),null}else 2*Di()-r.renderingStartTime>r.tailExpiration&&1<t&&(n.effectTag|=64,o=!0,Yu(r,!1),n.expirationTime=n.childExpirationTime=t-1);r.isBackwards?(a.sibling=n.child,n.child=a):(null!==(t=r.last)?t.sibling=a:n.child=a,r.last=a)}return null!==r.tail?(0===r.tailExpiration&&(r.tailExpiration=Di()+500),t=r.tail,r.rendering=t,r.tail=t.sibling,r.lastEffect=n.lastEffect,r.renderingStartTime=Di(),t.sibling=null,n=Ao.current,ci(Ao,o?1&n|2:1&n),t):null}throw Error(u(156,n.tag))}function Xu(e){switch(e.tag){case 1:vi(e.type)&&mi();var n=e.effectTag;return 4096&n?(e.effectTag=-4097&n|64,e):null;case 3:if(Io(),li(di),li(si),0!=(64&(n=e.effectTag)))throw Error(u(285));return e.effectTag=-4097&n|64,e;case 5:return Mo(e),null;case 13:return li(Ao),4096&(n=e.effectTag)?(e.effectTag=-4097&n|64,e):null;case 19:return li(Ao),null;case 4:return Io(),null;case 10:return eo(e),null;default:return null}}function Zu(e,n){return{value:e,source:n,stack:ge(n)}}Uu=function(e,n){for(var t=n.child;null!==t;){if(5===t.tag||6===t.tag)e.appendChild(t.stateNode);else if(4!==t.tag&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===n)break;for(;null===t.sibling;){if(null===t.return||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},$u=function(e,n,t,r,o){var u=e.memoizedProps;if(u!==r){var a,l,c=n.stateNode;switch(zo(Po.current),e=null,t){case"input":u=xe(c,u),r=xe(c,r),e=[];break;case"option":u=Pe(c,u),r=Pe(c,r),e=[];break;case"select":u=i({},u,{value:void 0}),r=i({},r,{value:void 0}),e=[];break;case"textarea":u=Ne(c,u),r=Ne(c,r),e=[];break;default:"function"!=typeof u.onClick&&"function"==typeof r.onClick&&(c.onclick=ct)}for(a in ot(t,r),t=null,u)if(!r.hasOwnProperty(a)&&u.hasOwnProperty(a)&&null!=u[a])if("style"===a)for(l in c=u[a])c.hasOwnProperty(l)&&(t||(t={}),t[l]="");else"dangerouslySetInnerHTML"!==a&&"children"!==a&&"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(E.hasOwnProperty(a)?e||(e=[]):(e=e||[]).push(a,null));for(a in r){var f=r[a];if(c=null!=u?u[a]:void 0,r.hasOwnProperty(a)&&f!==c&&(null!=f||null!=c))if("style"===a)if(c){for(l in c)!c.hasOwnProperty(l)||f&&f.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in f)f.hasOwnProperty(l)&&c[l]!==f[l]&&(t||(t={}),t[l]=f[l])}else t||(e||(e=[]),e.push(a,t)),t=f;else"dangerouslySetInnerHTML"===a?(f=f?f.__html:void 0,c=c?c.__html:void 0,null!=f&&c!==f&&(e=e||[]).push(a,f)):"children"===a?c===f||"string"!=typeof f&&"number"!=typeof f||(e=e||[]).push(a,""+f):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&(E.hasOwnProperty(a)?(null!=f&&lt(o,a),e||c===f||(e=[])):(e=e||[]).push(a,f))}t&&(e=e||[]).push("style",t),o=e,(n.updateQueue=o)&&(n.effectTag|=4)}},Wu=function(e,n,t,r){t!==r&&(n.effectTag|=4)};var Ju="function"==typeof WeakSet?WeakSet:Set;function ea(e,n){var t=n.source,r=n.stack;null===r&&null!==t&&(r=ge(t)),null!==t&&me(t.type),n=n.value,null!==e&&1===e.tag&&me(e.type);try{console.error(n)}catch(e){setTimeout((function(){throw e}))}}function na(e){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(n){yl(e,n)}else n.current=null}function ta(e,n){switch(n.tag){case 0:case 11:case 15:case 22:return;case 1:if(256&n.effectTag&&null!==e){var t=e.memoizedProps,r=e.memoizedState;n=(e=n.stateNode).getSnapshotBeforeUpdate(n.elementType===n.type?t:qi(n.type,t),r),e.__reactInternalSnapshotBeforeUpdate=n}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(u(163))}function ra(e,n){if(null!==(n=null!==(n=n.updateQueue)?n.lastEffect:null)){var t=n=n.next;do{if((t.tag&e)===e){var r=t.destroy;t.destroy=void 0,void 0!==r&&r()}t=t.next}while(t!==n)}}function ia(e,n){if(null!==(n=null!==(n=n.updateQueue)?n.lastEffect:null)){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function oa(e,n,t){switch(t.tag){case 0:case 11:case 15:case 22:return void ia(3,t);case 1:if(e=t.stateNode,4&t.effectTag)if(null===n)e.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:qi(t.type,n.memoizedProps);e.componentDidUpdate(r,n.memoizedState,e.__reactInternalSnapshotBeforeUpdate)}return void(null!==(n=t.updateQueue)&&so(t,n,e));case 3:if(null!==(n=t.updateQueue)){if(e=null,null!==t.child)switch(t.child.tag){case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}so(t,n,e)}return;case 5:return e=t.stateNode,void(null===n&&4&t.effectTag&&gt(t.type,t.memoizedProps)&&e.focus());case 6:case 4:case 12:return;case 13:return void(null===t.memoizedState&&(t=t.alternate,null!==t&&(t=t.memoizedState,null!==t&&(t=t.dehydrated,null!==t&&Ln(t)))));case 19:case 17:case 20:case 21:return}throw Error(u(163))}function ua(e,n,t){switch("function"==typeof xl&&xl(n),n.tag){case 0:case 11:case 14:case 15:case 22:if(null!==(e=n.updateQueue)&&null!==(e=e.lastEffect)){var r=e.next;Wi(97<t?97:t,(function(){var e=r;do{var t=e.destroy;if(void 0!==t){var i=n;try{t()}catch(e){yl(i,e)}}e=e.next}while(e!==r)}))}break;case 1:na(n),"function"==typeof(t=n.stateNode).componentWillUnmount&&function(e,n){try{n.props=e.memoizedProps,n.state=e.memoizedState,n.componentWillUnmount()}catch(n){yl(e,n)}}(n,t);break;case 5:na(n);break;case 4:fa(e,n,t)}}function aa(e){var n=e.alternate;e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.alternate=null,e.firstEffect=null,e.lastEffect=null,e.pendingProps=null,e.memoizedProps=null,e.stateNode=null,null!==n&&aa(n)}function la(e){return 5===e.tag||3===e.tag||4===e.tag}function ca(e){e:{for(var n=e.return;null!==n;){if(la(n)){var t=n;break e}n=n.return}throw Error(u(160))}switch(n=t.stateNode,t.tag){case 5:var r=!1;break;case 3:case 4:n=n.containerInfo,r=!0;break;default:throw Error(u(161))}16&t.effectTag&&(Ue(n,""),t.effectTag&=-17);e:n:for(t=e;;){for(;null===t.sibling;){if(null===t.return||la(t.return)){t=null;break e}t=t.return}for(t.sibling.return=t.return,t=t.sibling;5!==t.tag&&6!==t.tag&&18!==t.tag;){if(2&t.effectTag)continue n;if(null===t.child||4===t.tag)continue n;t.child.return=t,t=t.child}if(!(2&t.effectTag)){t=t.stateNode;break e}}r?function e(n,t,r){var i=n.tag,o=5===i||6===i;if(o)n=o?n.stateNode:n.stateNode.instance,t?8===r.nodeType?r.parentNode.insertBefore(n,t):r.insertBefore(n,t):(8===r.nodeType?(t=r.parentNode).insertBefore(n,r):(t=r).appendChild(n),null!==(r=r._reactRootContainer)&&void 0!==r||null!==t.onclick||(t.onclick=ct));else if(4!==i&&null!==(n=n.child))for(e(n,t,r),n=n.sibling;null!==n;)e(n,t,r),n=n.sibling}(e,t,n):function e(n,t,r){var i=n.tag,o=5===i||6===i;if(o)n=o?n.stateNode:n.stateNode.instance,t?r.insertBefore(n,t):r.appendChild(n);else if(4!==i&&null!==(n=n.child))for(e(n,t,r),n=n.sibling;null!==n;)e(n,t,r),n=n.sibling}(e,t,n)}function fa(e,n,t){for(var r,i,o=n,a=!1;;){if(!a){a=o.return;e:for(;;){if(null===a)throw Error(u(160));switch(r=a.stateNode,a.tag){case 5:i=!1;break e;case 3:case 4:r=r.containerInfo,i=!0;break e}a=a.return}a=!0}if(5===o.tag||6===o.tag){e:for(var l=e,c=o,f=t,s=c;;)if(ua(l,s,f),null!==s.child&&4!==s.tag)s.child.return=s,s=s.child;else{if(s===c)break e;for(;null===s.sibling;){if(null===s.return||s.return===c)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}i?(l=r,c=o.stateNode,8===l.nodeType?l.parentNode.removeChild(c):l.removeChild(c)):r.removeChild(o.stateNode)}else if(4===o.tag){if(null!==o.child){r=o.stateNode.containerInfo,i=!0,o.child.return=o,o=o.child;continue}}else if(ua(e,o,t),null!==o.child){o.child.return=o,o=o.child;continue}if(o===n)break;for(;null===o.sibling;){if(null===o.return||o.return===n)return;4===(o=o.return).tag&&(a=!1)}o.sibling.return=o.return,o=o.sibling}}function sa(e,n){switch(n.tag){case 0:case 11:case 14:case 15:case 22:return void ra(3,n);case 1:return;case 5:var t=n.stateNode;if(null!=t){var r=n.memoizedProps,i=null!==e?e.memoizedProps:r;e=n.type;var o=n.updateQueue;if(n.updateQueue=null,null!==o){for(t[Tt]=r,"input"===e&&"radio"===r.type&&null!=r.name&&Ee(t,r),ut(e,i),n=ut(e,r),i=0;i<o.length;i+=2){var a=o[i],l=o[i+1];"style"===a?rt(t,l):"dangerouslySetInnerHTML"===a?De(t,l):"children"===a?Ue(t,l):X(t,a,l,n)}switch(e){case"input":Te(t,r);break;case"textarea":Re(t,r);break;case"select":n=t._wrapperState.wasMultiple,t._wrapperState.wasMultiple=!!r.multiple,null!=(e=r.value)?Oe(t,!!r.multiple,e,!1):n!==!!r.multiple&&(null!=r.defaultValue?Oe(t,!!r.multiple,r.defaultValue,!0):Oe(t,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(null===n.stateNode)throw Error(u(162));return void(n.stateNode.nodeValue=n.memoizedProps);case 3:return void((n=n.stateNode).hydrate&&(n.hydrate=!1,Ln(n.containerInfo)));case 12:return;case 13:if(t=n,null===n.memoizedState?r=!1:(r=!0,t=n.child,ja=Di()),null!==t)e:for(e=t;;){if(5===e.tag)o=e.stateNode,r?"function"==typeof(o=o.style).setProperty?o.setProperty("display","none","important"):o.display="none":(o=e.stateNode,i=null!=(i=e.memoizedProps.style)&&i.hasOwnProperty("display")?i.display:null,o.style.display=tt("display",i));else if(6===e.tag)e.stateNode.nodeValue=r?"":e.memoizedProps;else{if(13===e.tag&&null!==e.memoizedState&&null===e.memoizedState.dehydrated){(o=e.child.sibling).return=e,e=o;continue}if(null!==e.child){e.child.return=e,e=e.child;continue}}if(e===t)break;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}return void da(n);case 19:return void da(n);case 17:return}throw Error(u(163))}function da(e){var n=e.updateQueue;if(null!==n){e.updateQueue=null;var t=e.stateNode;null===t&&(t=e.stateNode=new Ju),n.forEach((function(n){var r=_l.bind(null,e,n);t.has(n)||(t.add(n),n.then(r,r))}))}}var pa="function"==typeof WeakMap?WeakMap:Map;function ha(e,n,t){(t=ao(t,null)).tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Aa||(Aa=!0,La=r),ea(e,n)},t}function va(e,n,t){(t=ao(t,null)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=n.value;t.payload=function(){return ea(e,n),r(i)}}var o=e.stateNode;return null!==o&&"function"==typeof o.componentDidCatch&&(t.callback=function(){"function"!=typeof r&&(null===Fa?Fa=new Set([this]):Fa.add(this),ea(e,n));var t=n.stack;this.componentDidCatch(n.value,{componentStack:null!==t?t:""})}),t}var ma,ga=Math.ceil,ya=G.ReactCurrentDispatcher,ba=G.ReactCurrentOwner,_a=0,wa=3,xa=4,ka=0,Ea=null,Ta=null,Sa=0,Ca=_a,Pa=null,Oa=1073741823,Na=1073741823,za=null,Ra=0,Ia=!1,ja=0,Ma=null,Aa=!1,La=null,Fa=null,Da=!1,Ua=null,$a=90,Wa=null,Ba=0,Va=null,Qa=0;function Ha(){return 0!=(48&ka)?1073741821-(Di()/10|0):0!==Qa?Qa:Qa=1073741821-(Di()/10|0)}function Ka(e,n,t){if(0==(2&(n=n.mode)))return 1073741823;var r=Ui();if(0==(4&n))return 99===r?1073741823:1073741822;if(0!=(16&ka))return Sa;if(null!==t)e=Ki(e,0|t.timeoutMs||5e3,250);else switch(r){case 99:e=1073741823;break;case 98:e=Ki(e,150,100);break;case 97:case 96:e=Ki(e,5e3,250);break;case 95:e=2;break;default:throw Error(u(326))}return null!==Ea&&e===Sa&&--e,e}function qa(e,n){if(50<Ba)throw Ba=0,Va=null,Error(u(185));if(null!==(e=Ya(e,n))){var t=Ui();1073741823===n?0!=(8&ka)&&0==(48&ka)?Ja(e):(Xa(e),0===ka&&Qi()):Xa(e),0==(4&ka)||98!==t&&99!==t||(null===Wa?Wa=new Map([[e,n]]):(void 0===(t=Wa.get(e))||t>n)&&Wa.set(e,n))}}function Ya(e,n){e.expirationTime<n&&(e.expirationTime=n);var t=e.alternate;null!==t&&t.expirationTime<n&&(t.expirationTime=n);var r=e.return,i=null;if(null===r&&3===e.tag)i=e.stateNode;else for(;null!==r;){if(t=r.alternate,r.childExpirationTime<n&&(r.childExpirationTime=n),null!==t&&t.childExpirationTime<n&&(t.childExpirationTime=n),null===r.return&&3===r.tag){i=r.stateNode;break}r=r.return}return null!==i&&(Ea===i&&(ul(n),Ca===xa&&Il(i,Sa)),jl(i,n)),i}function Ga(e){var n=e.lastExpiredTime;if(0!==n)return n;if(!Rl(e,n=e.firstPendingTime))return n;var t=e.lastPingedTime;return 2>=(e=t>(e=e.nextKnownPendingLevel)?t:e)&&n!==e?0:e}function Xa(e){if(0!==e.lastExpiredTime)e.callbackExpirationTime=1073741823,e.callbackPriority=99,e.callbackNode=Vi(Ja.bind(null,e));else{var n=Ga(e),t=e.callbackNode;if(0===n)null!==t&&(e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90);else{var r=Ha();if(1073741823===n?r=99:1===n||2===n?r=95:r=0>=(r=10*(1073741821-n)-10*(1073741821-r))?99:250>=r?98:5250>=r?97:95,null!==t){var i=e.callbackPriority;if(e.callbackExpirationTime===n&&i>=r)return;t!==Ri&&ki(t)}e.callbackExpirationTime=n,e.callbackPriority=r,n=1073741823===n?Vi(Ja.bind(null,e)):Bi(r,Za.bind(null,e),{timeout:10*(1073741821-n)-Di()}),e.callbackNode=n}}}function Za(e,n){if(Qa=0,n)return Ml(e,n=Ha()),Xa(e),null;var t=Ga(e);if(0!==t){if(n=e.callbackNode,0!=(48&ka))throw Error(u(327));if(vl(),e===Ea&&t===Sa||tl(e,t),null!==Ta){var r=ka;ka|=16;for(var i=il();;)try{ll();break}catch(n){rl(e,n)}if(Ji(),ka=r,ya.current=i,1===Ca)throw n=Pa,tl(e,t),Il(e,t),Xa(e),n;if(null===Ta)switch(i=e.finishedWork=e.current.alternate,e.finishedExpirationTime=t,r=Ca,Ea=null,r){case _a:case 1:throw Error(u(345));case 2:Ml(e,2<t?2:t);break;case wa:if(Il(e,t),t===(r=e.lastSuspendedTime)&&(e.nextKnownPendingLevel=sl(i)),1073741823===Oa&&10<(i=ja+500-Di())){if(Ia){var o=e.lastPingedTime;if(0===o||o>=t){e.lastPingedTime=t,tl(e,t);break}}if(0!==(o=Ga(e))&&o!==t)break;if(0!==r&&r!==t){e.lastPingedTime=r;break}e.timeoutHandle=bt(dl.bind(null,e),i);break}dl(e);break;case xa:if(Il(e,t),t===(r=e.lastSuspendedTime)&&(e.nextKnownPendingLevel=sl(i)),Ia&&(0===(i=e.lastPingedTime)||i>=t)){e.lastPingedTime=t,tl(e,t);break}if(0!==(i=Ga(e))&&i!==t)break;if(0!==r&&r!==t){e.lastPingedTime=r;break}if(1073741823!==Na?r=10*(1073741821-Na)-Di():1073741823===Oa?r=0:(r=10*(1073741821-Oa)-5e3,0>(r=(i=Di())-r)&&(r=0),(t=10*(1073741821-t)-i)<(r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ga(r/1960))-r)&&(r=t)),10<r){e.timeoutHandle=bt(dl.bind(null,e),r);break}dl(e);break;case 5:if(1073741823!==Oa&&null!==za){o=Oa;var a=za;if(0>=(r=0|a.busyMinDurationMs)?r=0:(i=0|a.busyDelayMs,r=(o=Di()-(10*(1073741821-o)-(0|a.timeoutMs||5e3)))<=i?0:i+r-o),10<r){Il(e,t),e.timeoutHandle=bt(dl.bind(null,e),r);break}}dl(e);break;default:throw Error(u(329))}if(Xa(e),e.callbackNode===n)return Za.bind(null,e)}}return null}function Ja(e){var n=e.lastExpiredTime;if(n=0!==n?n:1073741823,0!=(48&ka))throw Error(u(327));if(vl(),e===Ea&&n===Sa||tl(e,n),null!==Ta){var t=ka;ka|=16;for(var r=il();;)try{al();break}catch(n){rl(e,n)}if(Ji(),ka=t,ya.current=r,1===Ca)throw t=Pa,tl(e,n),Il(e,n),Xa(e),t;if(null!==Ta)throw Error(u(261));e.finishedWork=e.current.alternate,e.finishedExpirationTime=n,Ea=null,dl(e),Xa(e)}return null}function el(e,n){var t=ka;ka|=1;try{return e(n)}finally{0===(ka=t)&&Qi()}}function nl(e,n){var t=ka;ka&=-2,ka|=8;try{return e(n)}finally{0===(ka=t)&&Qi()}}function tl(e,n){e.finishedWork=null,e.finishedExpirationTime=0;var t=e.timeoutHandle;if(-1!==t&&(e.timeoutHandle=-1,_t(t)),null!==Ta)for(t=Ta.return;null!==t;){var r=t;switch(r.tag){case 1:null!=(r=r.type.childContextTypes)&&mi();break;case 3:Io(),li(di),li(si);break;case 5:Mo(r);break;case 4:Io();break;case 13:case 19:li(Ao);break;case 10:eo(r)}t=t.return}Ea=e,Ta=Sl(e.current,null),Sa=n,Ca=_a,Pa=null,Na=Oa=1073741823,za=null,Ra=0,Ia=!1}function rl(e,n){for(;;){try{if(Ji(),Do.current=mu,Qo)for(var t=Wo.memoizedState;null!==t;){var r=t.queue;null!==r&&(r.pending=null),t=t.next}if($o=0,Vo=Bo=Wo=null,Qo=!1,null===Ta||null===Ta.return)return Ca=1,Pa=n,Ta=null;e:{var i=e,o=Ta.return,u=Ta,a=n;if(n=Sa,u.effectTag|=2048,u.firstEffect=u.lastEffect=null,null!==a&&"object"==typeof a&&"function"==typeof a.then){var l=a;if(0==(2&u.mode)){var c=u.alternate;c?(u.updateQueue=c.updateQueue,u.memoizedState=c.memoizedState,u.expirationTime=c.expirationTime):(u.updateQueue=null,u.memoizedState=null)}var f=0!=(1&Ao.current),s=o;do{var d;if(d=13===s.tag){var p=s.memoizedState;if(null!==p)d=null!==p.dehydrated;else{var h=s.memoizedProps;d=void 0!==h.fallback&&(!0!==h.unstable_avoidThisFallback||!f)}}if(d){var v=s.updateQueue;if(null===v){var m=new Set;m.add(l),s.updateQueue=m}else v.add(l);if(0==(2&s.mode)){if(s.effectTag|=64,u.effectTag&=-2981,1===u.tag)if(null===u.alternate)u.tag=17;else{var g=ao(1073741823,null);g.tag=2,lo(u,g)}u.expirationTime=1073741823;break e}a=void 0,u=n;var y=i.pingCache;if(null===y?(y=i.pingCache=new pa,a=new Set,y.set(l,a)):void 0===(a=y.get(l))&&(a=new Set,y.set(l,a)),!a.has(u)){a.add(u);var b=bl.bind(null,i,l,u);l.then(b,b)}s.effectTag|=4096,s.expirationTime=n;break e}s=s.return}while(null!==s);a=Error((me(u.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+ge(u))}5!==Ca&&(Ca=2),a=Zu(a,u),s=o;do{switch(s.tag){case 3:l=a,s.effectTag|=4096,s.expirationTime=n,co(s,ha(s,l,n));break e;case 1:l=a;var _=s.type,w=s.stateNode;if(0==(64&s.effectTag)&&("function"==typeof _.getDerivedStateFromError||null!==w&&"function"==typeof w.componentDidCatch&&(null===Fa||!Fa.has(w)))){s.effectTag|=4096,s.expirationTime=n,co(s,va(s,l,n));break e}}s=s.return}while(null!==s)}Ta=fl(Ta)}catch(e){n=e;continue}break}}function il(){var e=ya.current;return ya.current=mu,null===e?mu:e}function ol(e,n){e<Oa&&2<e&&(Oa=e),null!==n&&e<Na&&2<e&&(Na=e,za=n)}function ul(e){e>Ra&&(Ra=e)}function al(){for(;null!==Ta;)Ta=cl(Ta)}function ll(){for(;null!==Ta&&!Ii();)Ta=cl(Ta)}function cl(e){var n=ma(e.alternate,e,Sa);return e.memoizedProps=e.pendingProps,null===n&&(n=fl(e)),ba.current=null,n}function fl(e){Ta=e;do{var n=Ta.alternate;if(e=Ta.return,0==(2048&Ta.effectTag)){if(n=Gu(n,Ta,Sa),1===Sa||1!==Ta.childExpirationTime){for(var t=0,r=Ta.child;null!==r;){var i=r.expirationTime,o=r.childExpirationTime;i>t&&(t=i),o>t&&(t=o),r=r.sibling}Ta.childExpirationTime=t}if(null!==n)return n;null!==e&&0==(2048&e.effectTag)&&(null===e.firstEffect&&(e.firstEffect=Ta.firstEffect),null!==Ta.lastEffect&&(null!==e.lastEffect&&(e.lastEffect.nextEffect=Ta.firstEffect),e.lastEffect=Ta.lastEffect),1<Ta.effectTag&&(null!==e.lastEffect?e.lastEffect.nextEffect=Ta:e.firstEffect=Ta,e.lastEffect=Ta))}else{if(null!==(n=Xu(Ta)))return n.effectTag&=2047,n;null!==e&&(e.firstEffect=e.lastEffect=null,e.effectTag|=2048)}if(null!==(n=Ta.sibling))return n;Ta=e}while(null!==Ta);return Ca===_a&&(Ca=5),null}function sl(e){var n=e.expirationTime;return n>(e=e.childExpirationTime)?n:e}function dl(e){var n=Ui();return Wi(99,pl.bind(null,e,n)),null}function pl(e,n){do{vl()}while(null!==Ua);if(0!=(48&ka))throw Error(u(327));var t=e.finishedWork,r=e.finishedExpirationTime;if(null===t)return null;if(e.finishedWork=null,e.finishedExpirationTime=0,t===e.current)throw Error(u(177));e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90,e.nextKnownPendingLevel=0;var i=sl(t);if(e.firstPendingTime=i,r<=e.lastSuspendedTime?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:r<=e.firstSuspendedTime&&(e.firstSuspendedTime=r-1),r<=e.lastPingedTime&&(e.lastPingedTime=0),r<=e.lastExpiredTime&&(e.lastExpiredTime=0),e===Ea&&(Ta=Ea=null,Sa=0),1<t.effectTag?null!==t.lastEffect?(t.lastEffect.nextEffect=t,i=t.firstEffect):i=t:i=t.firstEffect,null!==i){var o=ka;ka|=32,ba.current=null,vt=Kn;var a=pt();if(ht(a)){if("selectionStart"in a)var l={start:a.selectionStart,end:a.selectionEnd};else e:{var c=(l=(l=a.ownerDocument)&&l.defaultView||window).getSelection&&l.getSelection();if(c&&0!==c.rangeCount){l=c.anchorNode;var f=c.anchorOffset,s=c.focusNode;c=c.focusOffset;try{l.nodeType,s.nodeType}catch(e){l=null;break e}var d=0,p=-1,h=-1,v=0,m=0,g=a,y=null;n:for(;;){for(var b;g!==l||0!==f&&3!==g.nodeType||(p=d+f),g!==s||0!==c&&3!==g.nodeType||(h=d+c),3===g.nodeType&&(d+=g.nodeValue.length),null!==(b=g.firstChild);)y=g,g=b;for(;;){if(g===a)break n;if(y===l&&++v===f&&(p=d),y===s&&++m===c&&(h=d),null!==(b=g.nextSibling))break;y=(g=y).parentNode}g=b}l=-1===p||-1===h?null:{start:p,end:h}}else l=null}l=l||{start:0,end:0}}else l=null;mt={activeElementDetached:null,focusedElem:a,selectionRange:l},Kn=!1,Ma=i;do{try{hl()}catch(e){if(null===Ma)throw Error(u(330));yl(Ma,e),Ma=Ma.nextEffect}}while(null!==Ma);Ma=i;do{try{for(a=e,l=n;null!==Ma;){var _=Ma.effectTag;if(16&_&&Ue(Ma.stateNode,""),128&_){var w=Ma.alternate;if(null!==w){var x=w.ref;null!==x&&("function"==typeof x?x(null):x.current=null)}}switch(1038&_){case 2:ca(Ma),Ma.effectTag&=-3;break;case 6:ca(Ma),Ma.effectTag&=-3,sa(Ma.alternate,Ma);break;case 1024:Ma.effectTag&=-1025;break;case 1028:Ma.effectTag&=-1025,sa(Ma.alternate,Ma);break;case 4:sa(Ma.alternate,Ma);break;case 8:fa(a,f=Ma,l),aa(f)}Ma=Ma.nextEffect}}catch(e){if(null===Ma)throw Error(u(330));yl(Ma,e),Ma=Ma.nextEffect}}while(null!==Ma);if(x=mt,w=pt(),_=x.focusedElem,l=x.selectionRange,w!==_&&_&&_.ownerDocument&&function e(n,t){return!(!n||!t)&&(n===t||(!n||3!==n.nodeType)&&(t&&3===t.nodeType?e(n,t.parentNode):"contains"in n?n.contains(t):!!n.compareDocumentPosition&&!!(16&n.compareDocumentPosition(t))))}(_.ownerDocument.documentElement,_)){null!==l&&ht(_)&&(w=l.start,void 0===(x=l.end)&&(x=w),"selectionStart"in _?(_.selectionStart=w,_.selectionEnd=Math.min(x,_.value.length)):(x=(w=_.ownerDocument||document)&&w.defaultView||window).getSelection&&(x=x.getSelection(),f=_.textContent.length,a=Math.min(l.start,f),l=void 0===l.end?a:Math.min(l.end,f),!x.extend&&a>l&&(f=l,l=a,a=f),f=dt(_,a),s=dt(_,l),f&&s&&(1!==x.rangeCount||x.anchorNode!==f.node||x.anchorOffset!==f.offset||x.focusNode!==s.node||x.focusOffset!==s.offset)&&((w=w.createRange()).setStart(f.node,f.offset),x.removeAllRanges(),a>l?(x.addRange(w),x.extend(s.node,s.offset)):(w.setEnd(s.node,s.offset),x.addRange(w))))),w=[];for(x=_;x=x.parentNode;)1===x.nodeType&&w.push({element:x,left:x.scrollLeft,top:x.scrollTop});for("function"==typeof _.focus&&_.focus(),_=0;_<w.length;_++)(x=w[_]).element.scrollLeft=x.left,x.element.scrollTop=x.top}Kn=!!vt,mt=vt=null,e.current=t,Ma=i;do{try{for(_=e;null!==Ma;){var k=Ma.effectTag;if(36&k&&oa(_,Ma.alternate,Ma),128&k){w=void 0;var E=Ma.ref;if(null!==E){var T=Ma.stateNode;switch(Ma.tag){case 5:w=T;break;default:w=T}"function"==typeof E?E(w):E.current=w}}Ma=Ma.nextEffect}}catch(e){if(null===Ma)throw Error(u(330));yl(Ma,e),Ma=Ma.nextEffect}}while(null!==Ma);Ma=null,ji(),ka=o}else e.current=t;if(Da)Da=!1,Ua=e,$a=n;else for(Ma=i;null!==Ma;)n=Ma.nextEffect,Ma.nextEffect=null,Ma=n;if(0===(n=e.firstPendingTime)&&(Fa=null),1073741823===n?e===Va?Ba++:(Ba=0,Va=e):Ba=0,"function"==typeof wl&&wl(t.stateNode,r),Xa(e),Aa)throw Aa=!1,e=La,La=null,e;return 0!=(8&ka)||Qi(),null}function hl(){for(;null!==Ma;){var e=Ma.effectTag;0!=(256&e)&&ta(Ma.alternate,Ma),0==(512&e)||Da||(Da=!0,Bi(97,(function(){return vl(),null}))),Ma=Ma.nextEffect}}function vl(){if(90!==$a){var e=97<$a?97:$a;return $a=90,Wi(e,ml)}}function ml(){if(null===Ua)return!1;var e=Ua;if(Ua=null,0!=(48&ka))throw Error(u(331));var n=ka;for(ka|=32,e=e.current.firstEffect;null!==e;){try{var t=e;if(0!=(512&t.effectTag))switch(t.tag){case 0:case 11:case 15:case 22:ra(5,t),ia(5,t)}}catch(n){if(null===e)throw Error(u(330));yl(e,n)}t=e.nextEffect,e.nextEffect=null,e=t}return ka=n,Qi(),!0}function gl(e,n,t){lo(e,n=ha(e,n=Zu(t,n),1073741823)),null!==(e=Ya(e,1073741823))&&Xa(e)}function yl(e,n){if(3===e.tag)gl(e,e,n);else for(var t=e.return;null!==t;){if(3===t.tag){gl(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Fa||!Fa.has(r))){lo(t,e=va(t,e=Zu(n,e),1073741823)),null!==(t=Ya(t,1073741823))&&Xa(t);break}}t=t.return}}function bl(e,n,t){var r=e.pingCache;null!==r&&r.delete(n),Ea===e&&Sa===t?Ca===xa||Ca===wa&&1073741823===Oa&&Di()-ja<500?tl(e,Sa):Ia=!0:Rl(e,t)&&(0!==(n=e.lastPingedTime)&&n<t||(e.lastPingedTime=t,Xa(e)))}function _l(e,n){var t=e.stateNode;null!==t&&t.delete(n),0===(n=0)&&(n=Ka(n=Ha(),e,null)),null!==(e=Ya(e,n))&&Xa(e)}ma=function(e,n,t){var r=n.expirationTime;if(null!==e){var i=n.pendingProps;if(e.memoizedProps!==i||di.current)Nu=!0;else{if(r<t){switch(Nu=!1,n.tag){case 3:Du(n),Pu();break;case 5:if(jo(n),4&n.mode&&1!==t&&i.hidden)return n.expirationTime=n.childExpirationTime=1,null;break;case 1:vi(n.type)&&bi(n);break;case 4:Ro(n,n.stateNode.containerInfo);break;case 10:r=n.memoizedProps.value,i=n.type._context,ci(Yi,i._currentValue),i._currentValue=r;break;case 13:if(null!==n.memoizedState)return 0!==(r=n.child.childExpirationTime)&&r>=t?Vu(e,n,t):(ci(Ao,1&Ao.current),null!==(n=qu(e,n,t))?n.sibling:null);ci(Ao,1&Ao.current);break;case 19:if(r=n.childExpirationTime>=t,0!=(64&e.effectTag)){if(r)return Ku(e,n,t);n.effectTag|=64}if(null!==(i=n.memoizedState)&&(i.rendering=null,i.tail=null),ci(Ao,Ao.current),!r)return null}return qu(e,n,t)}Nu=!1}}else Nu=!1;switch(n.expirationTime=0,n.tag){case 2:if(r=n.type,null!==e&&(e.alternate=null,n.alternate=null,n.effectTag|=2),e=n.pendingProps,i=hi(n,si.current),to(n,t),i=qo(null,n,r,e,i,t),n.effectTag|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof){if(n.tag=1,n.memoizedState=null,n.updateQueue=null,vi(r)){var o=!0;bi(n)}else o=!1;n.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,oo(n);var a=r.getDerivedStateFromProps;"function"==typeof a&&vo(n,r,a,e),i.updater=mo,n.stateNode=i,i._reactInternalFiber=n,_o(n,r,e,t),n=Fu(null,n,r,!0,o,t)}else n.tag=0,zu(null,n,i,t),n=n.child;return n;case 16:e:{if(i=n.elementType,null!==e&&(e.alternate=null,n.alternate=null,n.effectTag|=2),e=n.pendingProps,function(e){if(-1===e._status){e._status=0;var n=e._ctor;n=n(),e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}}(i),1!==i._status)throw i._result;switch(i=i._result,n.type=i,o=n.tag=function(e){if("function"==typeof e)return Tl(e)?1:0;if(null!=e){if((e=e.$$typeof)===le)return 11;if(e===se)return 14}return 2}(i),e=qi(i,e),o){case 0:n=Au(null,n,i,e,t);break e;case 1:n=Lu(null,n,i,e,t);break e;case 11:n=Ru(null,n,i,e,t);break e;case 14:n=Iu(null,n,i,qi(i.type,e),r,t);break e}throw Error(u(306,i,""))}return n;case 0:return r=n.type,i=n.pendingProps,Au(e,n,r,i=n.elementType===r?i:qi(r,i),t);case 1:return r=n.type,i=n.pendingProps,Lu(e,n,r,i=n.elementType===r?i:qi(r,i),t);case 3:if(Du(n),r=n.updateQueue,null===e||null===r)throw Error(u(282));if(r=n.pendingProps,i=null!==(i=n.memoizedState)?i.element:null,uo(e,n),fo(n,r,null,t),(r=n.memoizedState.element)===i)Pu(),n=qu(e,n,t);else{if((i=n.stateNode.hydrate)&&(wu=wt(n.stateNode.containerInfo.firstChild),_u=n,i=xu=!0),i)for(t=So(n,null,r,t),n.child=t;t;)t.effectTag=-3&t.effectTag|1024,t=t.sibling;else zu(e,n,r,t),Pu();n=n.child}return n;case 5:return jo(n),null===e&&Tu(n),r=n.type,i=n.pendingProps,o=null!==e?e.memoizedProps:null,a=i.children,yt(r,i)?a=null:null!==o&&yt(r,o)&&(n.effectTag|=16),Mu(e,n),4&n.mode&&1!==t&&i.hidden?(n.expirationTime=n.childExpirationTime=1,n=null):(zu(e,n,a,t),n=n.child),n;case 6:return null===e&&Tu(n),null;case 13:return Vu(e,n,t);case 4:return Ro(n,n.stateNode.containerInfo),r=n.pendingProps,null===e?n.child=To(n,null,r,t):zu(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,Ru(e,n,r,i=n.elementType===r?i:qi(r,i),t);case 7:return zu(e,n,n.pendingProps,t),n.child;case 8:case 12:return zu(e,n,n.pendingProps.children,t),n.child;case 10:e:{r=n.type._context,i=n.pendingProps,a=n.memoizedProps,o=i.value;var l=n.type._context;if(ci(Yi,l._currentValue),l._currentValue=o,null!==a)if(l=a.value,0===(o=Lr(l,o)?0:0|("function"==typeof r._calculateChangedBits?r._calculateChangedBits(l,o):1073741823))){if(a.children===i.children&&!di.current){n=qu(e,n,t);break e}}else for(null!==(l=n.child)&&(l.return=n);null!==l;){var c=l.dependencies;if(null!==c){a=l.child;for(var f=c.firstContext;null!==f;){if(f.context===r&&0!=(f.observedBits&o)){1===l.tag&&((f=ao(t,null)).tag=2,lo(l,f)),l.expirationTime<t&&(l.expirationTime=t),null!==(f=l.alternate)&&f.expirationTime<t&&(f.expirationTime=t),no(l.return,t),c.expirationTime<t&&(c.expirationTime=t);break}f=f.next}}else a=10===l.tag&&l.type===n.type?null:l.child;if(null!==a)a.return=l;else for(a=l;null!==a;){if(a===n){a=null;break}if(null!==(l=a.sibling)){l.return=a.return,a=l;break}a=a.return}l=a}zu(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=(o=n.pendingProps).children,to(n,t),r=r(i=ro(i,o.unstable_observedBits)),n.effectTag|=1,zu(e,n,r,t),n.child;case 14:return o=qi(i=n.type,n.pendingProps),Iu(e,n,i,o=qi(i.type,o),r,t);case 15:return ju(e,n,n.type,n.pendingProps,r,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:qi(r,i),null!==e&&(e.alternate=null,n.alternate=null,n.effectTag|=2),n.tag=1,vi(r)?(e=!0,bi(n)):e=!1,to(n,t),yo(n,r,i),_o(n,r,i,t),Fu(null,n,r,!0,e,t);case 19:return Ku(e,n,t)}throw Error(u(156,n.tag))};var wl=null,xl=null;function kl(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}function El(e,n,t,r){return new kl(e,n,t,r)}function Tl(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Sl(e,n){var t=e.alternate;return null===t?((t=El(e.tag,n,e.key,e.mode)).elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.effectTag=0,t.nextEffect=null,t.firstEffect=null,t.lastEffect=null),t.childExpirationTime=e.childExpirationTime,t.expirationTime=e.expirationTime,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=null===n?null:{expirationTime:n.expirationTime,firstContext:n.firstContext,responders:n.responders},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Cl(e,n,t,r,i,o){var a=2;if(r=e,"function"==typeof e)Tl(e)&&(a=1);else if("string"==typeof e)a=5;else e:switch(e){case te:return Pl(t.children,i,o,n);case ae:a=8,i|=7;break;case re:a=8,i|=1;break;case ie:return(e=El(12,t,n,8|i)).elementType=ie,e.type=ie,e.expirationTime=o,e;case ce:return(e=El(13,t,n,i)).type=ce,e.elementType=ce,e.expirationTime=o,e;case fe:return(e=El(19,t,n,i)).elementType=fe,e.expirationTime=o,e;default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case oe:a=10;break e;case ue:a=9;break e;case le:a=11;break e;case se:a=14;break e;case de:a=16,r=null;break e;case pe:a=22;break e}throw Error(u(130,null==e?e:typeof e,""))}return(n=El(a,t,n,i)).elementType=e,n.type=r,n.expirationTime=o,n}function Pl(e,n,t,r){return(e=El(7,e,r,n)).expirationTime=t,e}function Ol(e,n,t){return(e=El(6,e,null,n)).expirationTime=t,e}function Nl(e,n,t){return(n=El(4,null!==e.children?e.children:[],e.key,n)).expirationTime=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function zl(e,n,t){this.tag=n,this.current=null,this.containerInfo=e,this.pingCache=this.pendingChildren=null,this.finishedExpirationTime=0,this.finishedWork=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=t,this.callbackNode=null,this.callbackPriority=90,this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}function Rl(e,n){var t=e.firstSuspendedTime;return e=e.lastSuspendedTime,0!==t&&t>=n&&e<=n}function Il(e,n){var t=e.firstSuspendedTime,r=e.lastSuspendedTime;t<n&&(e.firstSuspendedTime=n),(r>n||0===t)&&(e.lastSuspendedTime=n),n<=e.lastPingedTime&&(e.lastPingedTime=0),n<=e.lastExpiredTime&&(e.lastExpiredTime=0)}function jl(e,n){n>e.firstPendingTime&&(e.firstPendingTime=n);var t=e.firstSuspendedTime;0!==t&&(n>=t?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:n>=e.lastSuspendedTime&&(e.lastSuspendedTime=n+1),n>e.nextKnownPendingLevel&&(e.nextKnownPendingLevel=n))}function Ml(e,n){var t=e.lastExpiredTime;(0===t||t>n)&&(e.lastExpiredTime=n)}function Al(e,n,t,r){var i=n.current,o=Ha(),a=po.suspense;o=Ka(o,i,a);e:if(t){n:{if(Je(t=t._reactInternalFiber)!==t||1!==t.tag)throw Error(u(170));var l=t;do{switch(l.tag){case 3:l=l.stateNode.context;break n;case 1:if(vi(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break n}}l=l.return}while(null!==l);throw Error(u(171))}if(1===t.tag){var c=t.type;if(vi(c)){t=yi(t,c,l);break e}}t=l}else t=fi;return null===n.context?n.context=t:n.pendingContext=t,(n=ao(o,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(n.callback=r),lo(i,n),qa(i,o),o}function Ll(e){if(!(e=e.current).child)return null;switch(e.child.tag){case 5:default:return e.child.stateNode}}function Fl(e,n){null!==(e=e.memoizedState)&&null!==e.dehydrated&&e.retryTime<n&&(e.retryTime=n)}function Dl(e,n){Fl(e,n),(e=e.alternate)&&Fl(e,n)}function Ul(e,n,t){var r=new zl(e,n,t=null!=t&&!0===t.hydrate),i=El(3,null,null,2===n?7:1===n?3:0);r.current=i,i.stateNode=r,oo(i),e[St]=r.current,t&&0!==n&&function(e,n){var t=Ze(n);Cn.forEach((function(e){vn(e,n,t)})),Pn.forEach((function(e){vn(e,n,t)}))}(0,9===e.nodeType?e:e.ownerDocument),this._internalRoot=r}function $l(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Wl(e,n,t,r,i){var o=t._reactRootContainer;if(o){var u=o._internalRoot;if("function"==typeof i){var a=i;i=function(){var e=Ll(u);a.call(e)}}Al(n,u,e,i)}else{if(o=t._reactRootContainer=function(e,n){if(n||(n=!(!(n=e?9===e.nodeType?e.documentElement:e.firstChild:null)||1!==n.nodeType||!n.hasAttribute("data-reactroot"))),!n)for(var t;t=e.lastChild;)e.removeChild(t);return new Ul(e,0,n?{hydrate:!0}:void 0)}(t,r),u=o._internalRoot,"function"==typeof i){var l=i;i=function(){var e=Ll(u);l.call(e)}}nl((function(){Al(n,u,e,i)}))}return Ll(u)}function Bl(e,n,t){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ne,key:null==r?null:""+r,children:e,containerInfo:n,implementation:t}}function Vl(e,n){var t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!$l(n))throw Error(u(200));return Bl(e,n,null,t)}Ul.prototype.render=function(e){Al(e,this._internalRoot,null,null)},Ul.prototype.unmount=function(){var e=this._internalRoot,n=e.containerInfo;Al(null,e,null,(function(){n[St]=null}))},mn=function(e){if(13===e.tag){var n=Ki(Ha(),150,100);qa(e,n),Dl(e,n)}},gn=function(e){13===e.tag&&(qa(e,3),Dl(e,3))},yn=function(e){if(13===e.tag){var n=Ha();qa(e,n=Ka(n,e,null)),Dl(e,n)}},P=function(e,n,t){switch(n){case"input":if(Te(e,t),n=t.name,"radio"===t.type&&null!=n){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Nt(r);if(!i)throw Error(u(90));we(r),Te(r,i)}}}break;case"textarea":Re(e,t);break;case"select":null!=(n=t.value)&&Oe(e,!!t.multiple,n,!1)}},j=el,M=function(e,n,t,r,i){var o=ka;ka|=4;try{return Wi(98,e.bind(null,n,t,r,i))}finally{0===(ka=o)&&Qi()}},A=function(){0==(49&ka)&&(function(){if(null!==Wa){var e=Wa;Wa=null,e.forEach((function(e,n){Ml(n,e),Xa(n)})),Qi()}}(),vl())},L=function(e,n){var t=ka;ka|=2;try{return e(n)}finally{0===(ka=t)&&Qi()}};var Ql,Hl,Kl={Events:[Pt,Ot,Nt,S,k,Lt,function(e){on(e,At)},R,I,Zn,ln,vl,{current:!1}]};Hl=(Ql={findFiberByHostInstance:Ct,bundleType:0,version:"16.13.1",rendererPackageName:"react-dom"}).findFiberByHostInstance,function(e){if("undefined"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var n=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(n.isDisabled||!n.supportsFiber)return!0;try{var t=n.inject(e);wl=function(e){try{n.onCommitFiberRoot(t,e,void 0,64==(64&e.current.effectTag))}catch(e){}},xl=function(e){try{n.onCommitFiberUnmount(t,e)}catch(e){}}}catch(e){}}(i({},Ql,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:G.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=tn(e))?null:e.stateNode},findFiberByHostInstance:function(e){return Hl?Hl(e):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null})),n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kl,n.createPortal=Vl,n.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var n=e._reactInternalFiber;if(void 0===n){if("function"==typeof e.render)throw Error(u(188));throw Error(u(268,Object.keys(e)))}return e=null===(e=tn(n))?null:e.stateNode},n.flushSync=function(e,n){if(0!=(48&ka))throw Error(u(187));var t=ka;ka|=1;try{return Wi(99,e.bind(null,n))}finally{ka=t,Qi()}},n.hydrate=function(e,n,t){if(!$l(n))throw Error(u(200));return Wl(null,e,n,!0,t)},n.render=function(e,n,t){if(!$l(n))throw Error(u(200));return Wl(null,e,n,!1,t)},n.unmountComponentAtNode=function(e){if(!$l(e))throw Error(u(40));return!!e._reactRootContainer&&(nl((function(){Wl(null,null,e,!1,(function(){e._reactRootContainer=null,e[St]=null}))})),!0)},n.unstable_batchedUpdates=el,n.unstable_createPortal=function(e,n){return Vl(e,n,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)},n.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!$l(t))throw Error(u(200));if(null==e||void 0===e._reactInternalFiber)throw Error(u(38));return Wl(e,n,t,!1,r)},n.version="16.13.1"},function(e,n,t){"use strict";e.exports=t(12)},function(e,n,t){"use strict";
/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r,i,o,u,a;if("undefined"==typeof window||"function"!=typeof MessageChannel){var l=null,c=null,f=function(){if(null!==l)try{var e=n.unstable_now();l(!0,e),l=null}catch(e){throw setTimeout(f,0),e}},s=Date.now();n.unstable_now=function(){return Date.now()-s},r=function(e){null!==l?setTimeout(r,0,e):(l=e,setTimeout(f,0))},i=function(e,n){c=setTimeout(e,n)},o=function(){clearTimeout(c)},u=function(){return!1},a=n.unstable_forceFrameRate=function(){}}else{var d=window.performance,p=window.Date,h=window.setTimeout,v=window.clearTimeout;if("undefined"!=typeof console){var m=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof m&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"==typeof d&&"function"==typeof d.now)n.unstable_now=function(){return d.now()};else{var g=p.now();n.unstable_now=function(){return p.now()-g}}var y=!1,b=null,_=-1,w=5,x=0;u=function(){return n.unstable_now()>=x},a=function(){},n.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):w=0<e?Math.floor(1e3/e):5};var k=new MessageChannel,E=k.port2;k.port1.onmessage=function(){if(null!==b){var e=n.unstable_now();x=e+w;try{b(!0,e)?E.postMessage(null):(y=!1,b=null)}catch(e){throw E.postMessage(null),e}}else y=!1},r=function(e){b=e,y||(y=!0,E.postMessage(null))},i=function(e,t){_=h((function(){e(n.unstable_now())}),t)},o=function(){v(_),_=-1}}function T(e,n){var t=e.length;e.push(n);e:for(;;){var r=t-1>>>1,i=e[r];if(!(void 0!==i&&0<P(i,n)))break e;e[r]=n,e[t]=i,t=r}}function S(e){return void 0===(e=e[0])?null:e}function C(e){var n=e[0];if(void 0!==n){var t=e.pop();if(t!==n){e[0]=t;e:for(var r=0,i=e.length;r<i;){var o=2*(r+1)-1,u=e[o],a=o+1,l=e[a];if(void 0!==u&&0>P(u,t))void 0!==l&&0>P(l,u)?(e[r]=l,e[a]=t,r=a):(e[r]=u,e[o]=t,r=o);else{if(!(void 0!==l&&0>P(l,t)))break e;e[r]=l,e[a]=t,r=a}}}return n}return null}function P(e,n){var t=e.sortIndex-n.sortIndex;return 0!==t?t:e.id-n.id}var O=[],N=[],z=1,R=null,I=3,j=!1,M=!1,A=!1;function L(e){for(var n=S(N);null!==n;){if(null===n.callback)C(N);else{if(!(n.startTime<=e))break;C(N),n.sortIndex=n.expirationTime,T(O,n)}n=S(N)}}function F(e){if(A=!1,L(e),!M)if(null!==S(O))M=!0,r(D);else{var n=S(N);null!==n&&i(F,n.startTime-e)}}function D(e,t){M=!1,A&&(A=!1,o()),j=!0;var r=I;try{for(L(t),R=S(O);null!==R&&(!(R.expirationTime>t)||e&&!u());){var a=R.callback;if(null!==a){R.callback=null,I=R.priorityLevel;var l=a(R.expirationTime<=t);t=n.unstable_now(),"function"==typeof l?R.callback=l:R===S(O)&&C(O),L(t)}else C(O);R=S(O)}if(null!==R)var c=!0;else{var f=S(N);null!==f&&i(F,f.startTime-t),c=!1}return c}finally{R=null,I=r,j=!1}}function U(e){switch(e){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var $=a;n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(e){e.callback=null},n.unstable_continueExecution=function(){M||j||(M=!0,r(D))},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return S(O)},n.unstable_next=function(e){switch(I){case 1:case 2:case 3:var n=3;break;default:n=I}var t=I;I=n;try{return e()}finally{I=t}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=$,n.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var t=I;I=e;try{return n()}finally{I=t}},n.unstable_scheduleCallback=function(e,t,u){var a=n.unstable_now();if("object"==typeof u&&null!==u){var l=u.delay;l="number"==typeof l&&0<l?a+l:a,u="number"==typeof u.timeout?u.timeout:U(e)}else u=U(e),l=a;return e={id:z++,callback:t,priorityLevel:e,startTime:l,expirationTime:u=l+u,sortIndex:-1},l>a?(e.sortIndex=l,T(N,e),null===S(O)&&e===S(N)&&(A?o():A=!0,i(F,l-a))):(e.sortIndex=u,T(O,e),M||j||(M=!0,r(D))),e},n.unstable_shouldYield=function(){var e=n.unstable_now();L(e);var t=S(O);return t!==R&&null!==R&&null!==t&&null!==t.callback&&t.startTime<=e&&t.expirationTime<R.expirationTime||u()},n.unstable_wrapCallback=function(e){var n=I;return function(){var t=I;I=n;try{return e.apply(this,arguments)}finally{I=t}}}},function(e,n,t){e.exports=t(14)()},function(e,n,t){"use strict";var r=t(15);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,n,t,i,o,u){if(u!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function n(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:o,resetWarningCache:i};return t.PropTypes=t,t}},function(e,n,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,n,t){"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,i=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,u=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,l=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,s=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,h=r?Symbol.for("react.suspense"):60113,v=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116,y=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,_=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var n=e.$$typeof;switch(n){case i:switch(e=e.type){case s:case d:case u:case l:case a:case h:return e;default:switch(e=e&&e.$$typeof){case f:case p:case g:case m:case c:return e;default:return n}}case o:return n}}}function k(e){return x(e)===d}n.AsyncMode=s,n.ConcurrentMode=d,n.ContextConsumer=f,n.ContextProvider=c,n.Element=i,n.ForwardRef=p,n.Fragment=u,n.Lazy=g,n.Memo=m,n.Portal=o,n.Profiler=l,n.StrictMode=a,n.Suspense=h,n.isAsyncMode=function(e){return k(e)||x(e)===s},n.isConcurrentMode=k,n.isContextConsumer=function(e){return x(e)===f},n.isContextProvider=function(e){return x(e)===c},n.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===i},n.isForwardRef=function(e){return x(e)===p},n.isFragment=function(e){return x(e)===u},n.isLazy=function(e){return x(e)===g},n.isMemo=function(e){return x(e)===m},n.isPortal=function(e){return x(e)===o},n.isProfiler=function(e){return x(e)===l},n.isStrictMode=function(e){return x(e)===a},n.isSuspense=function(e){return x(e)===h},n.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===u||e===d||e===l||e===a||e===h||e===v||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===c||e.$$typeof===f||e.$$typeof===p||e.$$typeof===b||e.$$typeof===_||e.$$typeof===w||e.$$typeof===y)},n.typeOf=x},function(e,n){e.exports=function(e){if(!e.webpackPolyfill){var n=Object.create(e);n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),Object.defineProperty(n,"exports",{enumerable:!0}),n.webpackPolyfill=1}return n}},function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,n,t){"use strict";t.r(n);var r=t(0),i=t.n(r),o=t(1),u=t.n(o);t(13);t(3),t(2),"undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect;t(4);var a=function(){return Math.random().toString(36).substring(7).split("").join(".")},l={INIT:"@@redux/INIT"+a(),REPLACE:"@@redux/REPLACE"+a(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+a()}};function c(e,n){var t=n&&n.type;return"Given "+(t&&'action "'+String(t)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function f(e){for(var n=Object.keys(e),t={},r=0;r<n.length;r++){var i=n[r];0,"function"==typeof e[i]&&(t[i]=e[i])}var o,u=Object.keys(t);try{!function(e){Object.keys(e).forEach((function(n){var t=e[n];if(void 0===t(void 0,{type:l.INIT}))throw new Error('Reducer "'+n+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===t(void 0,{type:l.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+n+"\" returned undefined when probed with a random type. Don't try to handle "+l.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(t)}catch(e){o=e}return function(e,n){if(void 0===e&&(e={}),o)throw o;for(var r=!1,i={},a=0;a<u.length;a++){var l=u[a],f=t[l],s=e[l],d=f(s,n);if(void 0===d){var p=c(l,n);throw new Error(p)}i[l]=d,r=r||d!==s}return(r=r||u.length!==Object.keys(e).length)?i:e}}var s;s=o.unstable_batchedUpdates;var d=function(){return i.a.createElement("div",null,i.a.createElement("header",null,i.a.createElement("h1",null,"It's working")))},p=function(){return i.a.createElement(d,null)},h=Object.freeze({id:null}),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,n=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),n.type){case"RECEIVE_CURRENT_USER":return{id:n.currentUser.id};case"LOGOUT_CURRENT_USER":return h;default:return e}},m=t(8),g=t.n(m);function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var b=f({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),n.type){case"RECEIVE_CURRENT_USER":return g()({},e,y({},n.currentUser.id,n.currentUser));default:return e}}});f({entities:b,session:v});document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("root");u.a.render(i.a.createElement(p,null),e)}))}]);
//# sourceMappingURL=bundle.js.map
;
(function() {
  var context = this;

  (function() {
    (function() {
      var slice = [].slice;

      this.ActionCable = {
        INTERNAL: {
          "message_types": {
            "welcome": "welcome",
            "ping": "ping",
            "confirmation": "confirm_subscription",
            "rejection": "reject_subscription"
          },
          "default_mount_path": "/cable",
          "protocols": ["actioncable-v1-json", "actioncable-unsupported"]
        },
        WebSocket: window.WebSocket,
        logger: window.console,
        createConsumer: function(url) {
          var ref;
          if (url == null) {
            url = (ref = this.getConfig("url")) != null ? ref : this.INTERNAL.default_mount_path;
          }
          return new ActionCable.Consumer(this.createWebSocketURL(url));
        },
        getConfig: function(name) {
          var element;
          element = document.head.querySelector("meta[name='action-cable-" + name + "']");
          return element != null ? element.getAttribute("content") : void 0;
        },
        createWebSocketURL: function(url) {
          var a;
          if (url && !/^wss?:/i.test(url)) {
            a = document.createElement("a");
            a.href = url;
            a.href = a.href;
            a.protocol = a.protocol.replace("http", "ws");
            return a.href;
          } else {
            return url;
          }
        },
        startDebugging: function() {
          return this.debugging = true;
        },
        stopDebugging: function() {
          return this.debugging = null;
        },
        log: function() {
          var messages, ref;
          messages = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          if (this.debugging) {
            messages.push(Date.now());
            return (ref = this.logger).log.apply(ref, ["[ActionCable]"].concat(slice.call(messages)));
          }
        }
      };

    }).call(this);
  }).call(context);

  var ActionCable = context.ActionCable;

  (function() {
    (function() {
      var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

      ActionCable.ConnectionMonitor = (function() {
        var clamp, now, secondsSince;

        ConnectionMonitor.pollInterval = {
          min: 3,
          max: 30
        };

        ConnectionMonitor.staleThreshold = 6;

        function ConnectionMonitor(connection) {
          this.connection = connection;
          this.visibilityDidChange = bind(this.visibilityDidChange, this);
          this.reconnectAttempts = 0;
        }

        ConnectionMonitor.prototype.start = function() {
          if (!this.isRunning()) {
            this.startedAt = now();
            delete this.stoppedAt;
            this.startPolling();
            document.addEventListener("visibilitychange", this.visibilityDidChange);
            return ActionCable.log("ConnectionMonitor started. pollInterval = " + (this.getPollInterval()) + " ms");
          }
        };

        ConnectionMonitor.prototype.stop = function() {
          if (this.isRunning()) {
            this.stoppedAt = now();
            this.stopPolling();
            document.removeEventListener("visibilitychange", this.visibilityDidChange);
            return ActionCable.log("ConnectionMonitor stopped");
          }
        };

        ConnectionMonitor.prototype.isRunning = function() {
          return (this.startedAt != null) && (this.stoppedAt == null);
        };

        ConnectionMonitor.prototype.recordPing = function() {
          return this.pingedAt = now();
        };

        ConnectionMonitor.prototype.recordConnect = function() {
          this.reconnectAttempts = 0;
          this.recordPing();
          delete this.disconnectedAt;
          return ActionCable.log("ConnectionMonitor recorded connect");
        };

        ConnectionMonitor.prototype.recordDisconnect = function() {
          this.disconnectedAt = now();
          return ActionCable.log("ConnectionMonitor recorded disconnect");
        };

        ConnectionMonitor.prototype.startPolling = function() {
          this.stopPolling();
          return this.poll();
        };

        ConnectionMonitor.prototype.stopPolling = function() {
          return clearTimeout(this.pollTimeout);
        };

        ConnectionMonitor.prototype.poll = function() {
          return this.pollTimeout = setTimeout((function(_this) {
            return function() {
              _this.reconnectIfStale();
              return _this.poll();
            };
          })(this), this.getPollInterval());
        };

        ConnectionMonitor.prototype.getPollInterval = function() {
          var interval, max, min, ref;
          ref = this.constructor.pollInterval, min = ref.min, max = ref.max;
          interval = 5 * Math.log(this.reconnectAttempts + 1);
          return Math.round(clamp(interval, min, max) * 1000);
        };

        ConnectionMonitor.prototype.reconnectIfStale = function() {
          if (this.connectionIsStale()) {
            ActionCable.log("ConnectionMonitor detected stale connection. reconnectAttempts = " + this.reconnectAttempts + ", pollInterval = " + (this.getPollInterval()) + " ms, time disconnected = " + (secondsSince(this.disconnectedAt)) + " s, stale threshold = " + this.constructor.staleThreshold + " s");
            this.reconnectAttempts++;
            if (this.disconnectedRecently()) {
              return ActionCable.log("ConnectionMonitor skipping reopening recent disconnect");
            } else {
              ActionCable.log("ConnectionMonitor reopening");
              return this.connection.reopen();
            }
          }
        };

        ConnectionMonitor.prototype.connectionIsStale = function() {
          var ref;
          return secondsSince((ref = this.pingedAt) != null ? ref : this.startedAt) > this.constructor.staleThreshold;
        };

        ConnectionMonitor.prototype.disconnectedRecently = function() {
          return this.disconnectedAt && secondsSince(this.disconnectedAt) < this.constructor.staleThreshold;
        };

        ConnectionMonitor.prototype.visibilityDidChange = function() {
          if (document.visibilityState === "visible") {
            return setTimeout((function(_this) {
              return function() {
                if (_this.connectionIsStale() || !_this.connection.isOpen()) {
                  ActionCable.log("ConnectionMonitor reopening stale connection on visibilitychange. visbilityState = " + document.visibilityState);
                  return _this.connection.reopen();
                }
              };
            })(this), 200);
          }
        };

        now = function() {
          return new Date().getTime();
        };

        secondsSince = function(time) {
          return (now() - time) / 1000;
        };

        clamp = function(number, min, max) {
          return Math.max(min, Math.min(max, number));
        };

        return ConnectionMonitor;

      })();

    }).call(this);
    (function() {
      var i, message_types, protocols, ref, supportedProtocols, unsupportedProtocol,
        slice = [].slice,
        bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
        indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

      ref = ActionCable.INTERNAL, message_types = ref.message_types, protocols = ref.protocols;

      supportedProtocols = 2 <= protocols.length ? slice.call(protocols, 0, i = protocols.length - 1) : (i = 0, []), unsupportedProtocol = protocols[i++];

      ActionCable.Connection = (function() {
        Connection.reopenDelay = 500;

        function Connection(consumer) {
          this.consumer = consumer;
          this.open = bind(this.open, this);
          this.subscriptions = this.consumer.subscriptions;
          this.monitor = new ActionCable.ConnectionMonitor(this);
          this.disconnected = true;
        }

        Connection.prototype.send = function(data) {
          if (this.isOpen()) {
            this.webSocket.send(JSON.stringify(data));
            return true;
          } else {
            return false;
          }
        };

        Connection.prototype.open = function() {
          if (this.isActive()) {
            ActionCable.log("Attempted to open WebSocket, but existing socket is " + (this.getState()));
            return false;
          } else {
            ActionCable.log("Opening WebSocket, current state is " + (this.getState()) + ", subprotocols: " + protocols);
            if (this.webSocket != null) {
              this.uninstallEventHandlers();
            }
            this.webSocket = new ActionCable.WebSocket(this.consumer.url, protocols);
            this.installEventHandlers();
            this.monitor.start();
            return true;
          }
        };

        Connection.prototype.close = function(arg) {
          var allowReconnect, ref1;
          allowReconnect = (arg != null ? arg : {
            allowReconnect: true
          }).allowReconnect;
          if (!allowReconnect) {
            this.monitor.stop();
          }
          if (this.isActive()) {
            return (ref1 = this.webSocket) != null ? ref1.close() : void 0;
          }
        };

        Connection.prototype.reopen = function() {
          var error;
          ActionCable.log("Reopening WebSocket, current state is " + (this.getState()));
          if (this.isActive()) {
            try {
              return this.close();
            } catch (error1) {
              error = error1;
              return ActionCable.log("Failed to reopen WebSocket", error);
            } finally {
              ActionCable.log("Reopening WebSocket in " + this.constructor.reopenDelay + "ms");
              setTimeout(this.open, this.constructor.reopenDelay);
            }
          } else {
            return this.open();
          }
        };

        Connection.prototype.getProtocol = function() {
          var ref1;
          return (ref1 = this.webSocket) != null ? ref1.protocol : void 0;
        };

        Connection.prototype.isOpen = function() {
          return this.isState("open");
        };

        Connection.prototype.isActive = function() {
          return this.isState("open", "connecting");
        };

        Connection.prototype.isProtocolSupported = function() {
          var ref1;
          return ref1 = this.getProtocol(), indexOf.call(supportedProtocols, ref1) >= 0;
        };

        Connection.prototype.isState = function() {
          var ref1, states;
          states = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          return ref1 = this.getState(), indexOf.call(states, ref1) >= 0;
        };

        Connection.prototype.getState = function() {
          var ref1, state, value;
          for (state in WebSocket) {
            value = WebSocket[state];
            if (value === ((ref1 = this.webSocket) != null ? ref1.readyState : void 0)) {
              return state.toLowerCase();
            }
          }
          return null;
        };

        Connection.prototype.installEventHandlers = function() {
          var eventName, handler;
          for (eventName in this.events) {
            handler = this.events[eventName].bind(this);
            this.webSocket["on" + eventName] = handler;
          }
        };

        Connection.prototype.uninstallEventHandlers = function() {
          var eventName;
          for (eventName in this.events) {
            this.webSocket["on" + eventName] = function() {};
          }
        };

        Connection.prototype.events = {
          message: function(event) {
            var identifier, message, ref1, type;
            if (!this.isProtocolSupported()) {
              return;
            }
            ref1 = JSON.parse(event.data), identifier = ref1.identifier, message = ref1.message, type = ref1.type;
            switch (type) {
              case message_types.welcome:
                this.monitor.recordConnect();
                return this.subscriptions.reload();
              case message_types.ping:
                return this.monitor.recordPing();
              case message_types.confirmation:
                return this.subscriptions.notify(identifier, "connected");
              case message_types.rejection:
                return this.subscriptions.reject(identifier);
              default:
                return this.subscriptions.notify(identifier, "received", message);
            }
          },
          open: function() {
            ActionCable.log("WebSocket onopen event, using '" + (this.getProtocol()) + "' subprotocol");
            this.disconnected = false;
            if (!this.isProtocolSupported()) {
              ActionCable.log("Protocol is unsupported. Stopping monitor and disconnecting.");
              return this.close({
                allowReconnect: false
              });
            }
          },
          close: function(event) {
            ActionCable.log("WebSocket onclose event");
            if (this.disconnected) {
              return;
            }
            this.disconnected = true;
            this.monitor.recordDisconnect();
            return this.subscriptions.notifyAll("disconnected", {
              willAttemptReconnect: this.monitor.isRunning()
            });
          },
          error: function() {
            return ActionCable.log("WebSocket onerror event");
          }
        };

        return Connection;

      })();

    }).call(this);
    (function() {
      var slice = [].slice;

      ActionCable.Subscriptions = (function() {
        function Subscriptions(consumer) {
          this.consumer = consumer;
          this.subscriptions = [];
        }

        Subscriptions.prototype.create = function(channelName, mixin) {
          var channel, params, subscription;
          channel = channelName;
          params = typeof channel === "object" ? channel : {
            channel: channel
          };
          subscription = new ActionCable.Subscription(this.consumer, params, mixin);
          return this.add(subscription);
        };

        Subscriptions.prototype.add = function(subscription) {
          this.subscriptions.push(subscription);
          this.consumer.ensureActiveConnection();
          this.notify(subscription, "initialized");
          this.sendCommand(subscription, "subscribe");
          return subscription;
        };

        Subscriptions.prototype.remove = function(subscription) {
          this.forget(subscription);
          if (!this.findAll(subscription.identifier).length) {
            this.sendCommand(subscription, "unsubscribe");
          }
          return subscription;
        };

        Subscriptions.prototype.reject = function(identifier) {
          var i, len, ref, results, subscription;
          ref = this.findAll(identifier);
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            subscription = ref[i];
            this.forget(subscription);
            this.notify(subscription, "rejected");
            results.push(subscription);
          }
          return results;
        };

        Subscriptions.prototype.forget = function(subscription) {
          var s;
          this.subscriptions = (function() {
            var i, len, ref, results;
            ref = this.subscriptions;
            results = [];
            for (i = 0, len = ref.length; i < len; i++) {
              s = ref[i];
              if (s !== subscription) {
                results.push(s);
              }
            }
            return results;
          }).call(this);
          return subscription;
        };

        Subscriptions.prototype.findAll = function(identifier) {
          var i, len, ref, results, s;
          ref = this.subscriptions;
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            s = ref[i];
            if (s.identifier === identifier) {
              results.push(s);
            }
          }
          return results;
        };

        Subscriptions.prototype.reload = function() {
          var i, len, ref, results, subscription;
          ref = this.subscriptions;
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            subscription = ref[i];
            results.push(this.sendCommand(subscription, "subscribe"));
          }
          return results;
        };

        Subscriptions.prototype.notifyAll = function() {
          var args, callbackName, i, len, ref, results, subscription;
          callbackName = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
          ref = this.subscriptions;
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            subscription = ref[i];
            results.push(this.notify.apply(this, [subscription, callbackName].concat(slice.call(args))));
          }
          return results;
        };

        Subscriptions.prototype.notify = function() {
          var args, callbackName, i, len, results, subscription, subscriptions;
          subscription = arguments[0], callbackName = arguments[1], args = 3 <= arguments.length ? slice.call(arguments, 2) : [];
          if (typeof subscription === "string") {
            subscriptions = this.findAll(subscription);
          } else {
            subscriptions = [subscription];
          }
          results = [];
          for (i = 0, len = subscriptions.length; i < len; i++) {
            subscription = subscriptions[i];
            results.push(typeof subscription[callbackName] === "function" ? subscription[callbackName].apply(subscription, args) : void 0);
          }
          return results;
        };

        Subscriptions.prototype.sendCommand = function(subscription, command) {
          var identifier;
          identifier = subscription.identifier;
          return this.consumer.send({
            command: command,
            identifier: identifier
          });
        };

        return Subscriptions;

      })();

    }).call(this);
    (function() {
      ActionCable.Subscription = (function() {
        var extend;

        function Subscription(consumer, params, mixin) {
          this.consumer = consumer;
          if (params == null) {
            params = {};
          }
          this.identifier = JSON.stringify(params);
          extend(this, mixin);
        }

        Subscription.prototype.perform = function(action, data) {
          if (data == null) {
            data = {};
          }
          data.action = action;
          return this.send(data);
        };

        Subscription.prototype.send = function(data) {
          return this.consumer.send({
            command: "message",
            identifier: this.identifier,
            data: JSON.stringify(data)
          });
        };

        Subscription.prototype.unsubscribe = function() {
          return this.consumer.subscriptions.remove(this);
        };

        extend = function(object, properties) {
          var key, value;
          if (properties != null) {
            for (key in properties) {
              value = properties[key];
              object[key] = value;
            }
          }
          return object;
        };

        return Subscription;

      })();

    }).call(this);
    (function() {
      ActionCable.Consumer = (function() {
        function Consumer(url) {
          this.url = url;
          this.subscriptions = new ActionCable.Subscriptions(this);
          this.connection = new ActionCable.Connection(this);
        }

        Consumer.prototype.send = function(data) {
          return this.connection.send(data);
        };

        Consumer.prototype.connect = function() {
          return this.connection.open();
        };

        Consumer.prototype.disconnect = function() {
          return this.connection.close({
            allowReconnect: false
          });
        };

        Consumer.prototype.ensureActiveConnection = function() {
          if (!this.connection.isActive()) {
            return this.connection.open();
          }
        };

        return Consumer;

      })();

    }).call(this);
  }).call(this);

  if (typeof module === "object" && module.exports) {
    module.exports = ActionCable;
  } else if (typeof define === "function" && define.amd) {
    define(ActionCable);
  }
}).call(this);
// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `rails generate channel` command.
//




(function() {
  this.App || (this.App = {});

  App.cable = ActionCable.createConsumer();

}).call(this);
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//





;
