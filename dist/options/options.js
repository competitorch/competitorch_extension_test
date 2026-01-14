!(function (t) {
	var e = {};
	function n(r) {
		if (e[r]) return e[r].exports;
		var i = (e[r] = { i: r, l: !1, exports: {} });
		return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
	}
	(n.m = t),
		(n.c = e),
		(n.d = function (t, e, r) {
			n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
		}),
		(n.r = function (t) {
			'undefined' != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
				Object.defineProperty(t, '__esModule', { value: !0 });
		}),
		(n.t = function (t, e) {
			if ((1 & e && (t = n(t)), 8 & e)) return t;
			if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
			var r = Object.create(null);
			if (
				(n.r(r),
				Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
				2 & e && 'string' != typeof t)
			)
				for (var i in t)
					n.d(
						r,
						i,
						function (e) {
							return t[e];
						}.bind(null, i)
					);
			return r;
		}),
		(n.n = function (t) {
			var e =
				t && t.__esModule
					? function () {
							return t.default;
					  }
					: function () {
							return t;
					  };
			return n.d(e, 'a', e), e;
		}),
		(n.o = function (t, e) {
			return Object.prototype.hasOwnProperty.call(t, e);
		}),
		(n.p = ''),
		n((n.s = 397));
})([
	function (t, e, n) {
		var r;
		/*!
		 * jQuery JavaScript Library v3.7.1
		 * https://jquery.com/
		 *
		 * Copyright OpenJS Foundation and other contributors
		 * Released under the MIT license
		 * https://jquery.org/license
		 *
		 * Date: 2023-08-28T13:37Z
		 */ !(function (e, n) {
			'use strict';
			'object' == typeof t.exports
				? (t.exports = e.document
						? n(e, !0)
						: function (t) {
								if (!t.document)
									throw new Error('jQuery requires a window with a document');
								return n(t);
						  })
				: n(e);
		})('undefined' != typeof window ? window : this, function (n, i) {
			'use strict';
			var o = [],
				s = Object.getPrototypeOf,
				a = o.slice,
				l = o.flat
					? function (t) {
							return o.flat.call(t);
					  }
					: function (t) {
							return o.concat.apply([], t);
					  },
				c = o.push,
				u = o.indexOf,
				f = {},
				p = f.toString,
				d = f.hasOwnProperty,
				h = d.toString,
				g = h.call(Object),
				m = {},
				v = function (t) {
					return (
						'function' == typeof t &&
						'number' != typeof t.nodeType &&
						'function' != typeof t.item
					);
				},
				y = function (t) {
					return null != t && t === t.window;
				},
				b = n.document,
				x = { type: !0, src: !0, nonce: !0, noModule: !0 };
			function w(t, e, n) {
				var r,
					i,
					o = (n = n || b).createElement('script');
				if (((o.text = t), e))
					for (r in x)
						(i = e[r] || (e.getAttribute && e.getAttribute(r))) && o.setAttribute(r, i);
				n.head.appendChild(o).parentNode.removeChild(o);
			}
			function A(t) {
				return null == t
					? t + ''
					: 'object' == typeof t || 'function' == typeof t
					? f[p.call(t)] || 'object'
					: typeof t;
			}
			var T = /HTML$/i,
				C = function (t, e) {
					return new C.fn.init(t, e);
				};
			function S(t) {
				var e = !!t && 'length' in t && t.length,
					n = A(t);
				return (
					!v(t) &&
					!y(t) &&
					('array' === n || 0 === e || ('number' == typeof e && e > 0 && e - 1 in t))
				);
			}
			function E(t, e) {
				return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
			}
			(C.fn = C.prototype =
				{
					jquery: '3.7.1',
					constructor: C,
					length: 0,
					toArray: function () {
						return a.call(this);
					},
					get: function (t) {
						return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t];
					},
					pushStack: function (t) {
						var e = C.merge(this.constructor(), t);
						return (e.prevObject = this), e;
					},
					each: function (t) {
						return C.each(this, t);
					},
					map: function (t) {
						return this.pushStack(
							C.map(this, function (e, n) {
								return t.call(e, n, e);
							})
						);
					},
					slice: function () {
						return this.pushStack(a.apply(this, arguments));
					},
					first: function () {
						return this.eq(0);
					},
					last: function () {
						return this.eq(-1);
					},
					even: function () {
						return this.pushStack(
							C.grep(this, function (t, e) {
								return (e + 1) % 2;
							})
						);
					},
					odd: function () {
						return this.pushStack(
							C.grep(this, function (t, e) {
								return e % 2;
							})
						);
					},
					eq: function (t) {
						var e = this.length,
							n = +t + (t < 0 ? e : 0);
						return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
					},
					end: function () {
						return this.prevObject || this.constructor();
					},
					push: c,
					sort: o.sort,
					splice: o.splice,
				}),
				(C.extend = C.fn.extend =
					function () {
						var t,
							e,
							n,
							r,
							i,
							o,
							s = arguments[0] || {},
							a = 1,
							l = arguments.length,
							c = !1;
						for (
							'boolean' == typeof s && ((c = s), (s = arguments[a] || {}), a++),
								'object' == typeof s || v(s) || (s = {}),
								a === l && ((s = this), a--);
							a < l;
							a++
						)
							if (null != (t = arguments[a]))
								for (e in t)
									(r = t[e]),
										'__proto__' !== e &&
											s !== r &&
											(c &&
											r &&
											(C.isPlainObject(r) || (i = Array.isArray(r)))
												? ((n = s[e]),
												  (o =
														i && !Array.isArray(n)
															? []
															: i || C.isPlainObject(n)
															? n
															: {}),
												  (i = !1),
												  (s[e] = C.extend(c, o, r)))
												: void 0 !== r && (s[e] = r));
						return s;
					}),
				C.extend({
					expando: 'jQuery' + ('3.7.1' + Math.random()).replace(/\D/g, ''),
					isReady: !0,
					error: function (t) {
						throw new Error(t);
					},
					noop: function () {},
					isPlainObject: function (t) {
						var e, n;
						return (
							!(!t || '[object Object]' !== p.call(t)) &&
							(!(e = s(t)) ||
								('function' ==
									typeof (n = d.call(e, 'constructor') && e.constructor) &&
									h.call(n) === g))
						);
					},
					isEmptyObject: function (t) {
						var e;
						for (e in t) return !1;
						return !0;
					},
					globalEval: function (t, e, n) {
						w(t, { nonce: e && e.nonce }, n);
					},
					each: function (t, e) {
						var n,
							r = 0;
						if (S(t)) for (n = t.length; r < n && !1 !== e.call(t[r], r, t[r]); r++);
						else for (r in t) if (!1 === e.call(t[r], r, t[r])) break;
						return t;
					},
					text: function (t) {
						var e,
							n = '',
							r = 0,
							i = t.nodeType;
						if (!i) for (; (e = t[r++]); ) n += C.text(e);
						return 1 === i || 11 === i
							? t.textContent
							: 9 === i
							? t.documentElement.textContent
							: 3 === i || 4 === i
							? t.nodeValue
							: n;
					},
					makeArray: function (t, e) {
						var n = e || [];
						return (
							null != t &&
								(S(Object(t))
									? C.merge(n, 'string' == typeof t ? [t] : t)
									: c.call(n, t)),
							n
						);
					},
					inArray: function (t, e, n) {
						return null == e ? -1 : u.call(e, t, n);
					},
					isXMLDoc: function (t) {
						var e = t && t.namespaceURI,
							n = t && (t.ownerDocument || t).documentElement;
						return !T.test(e || (n && n.nodeName) || 'HTML');
					},
					merge: function (t, e) {
						for (var n = +e.length, r = 0, i = t.length; r < n; r++) t[i++] = e[r];
						return (t.length = i), t;
					},
					grep: function (t, e, n) {
						for (var r = [], i = 0, o = t.length, s = !n; i < o; i++)
							!e(t[i], i) !== s && r.push(t[i]);
						return r;
					},
					map: function (t, e, n) {
						var r,
							i,
							o = 0,
							s = [];
						if (S(t))
							for (r = t.length; o < r; o++) null != (i = e(t[o], o, n)) && s.push(i);
						else for (o in t) null != (i = e(t[o], o, n)) && s.push(i);
						return l(s);
					},
					guid: 1,
					support: m,
				}),
				'function' == typeof Symbol && (C.fn[Symbol.iterator] = o[Symbol.iterator]),
				C.each(
					'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
						' '
					),
					function (t, e) {
						f['[object ' + e + ']'] = e.toLowerCase();
					}
				);
			var k = o.pop,
				D = o.sort,
				j = o.splice,
				$ = '[\\x20\\t\\r\\n\\f]',
				O = new RegExp('^' + $ + '+|((?:^|[^\\\\])(?:\\\\.)*)' + $ + '+$', 'g');
			C.contains = function (t, e) {
				var n = e && e.parentNode;
				return (
					t === n ||
					!(
						!n ||
						1 !== n.nodeType ||
						!(t.contains
							? t.contains(n)
							: t.compareDocumentPosition && 16 & t.compareDocumentPosition(n))
					)
				);
			};
			var N = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
			function P(t, e) {
				return e
					? '\0' === t
						? '�'
						: t.slice(0, -1) + '\\' + t.charCodeAt(t.length - 1).toString(16) + ' '
					: '\\' + t;
			}
			C.escapeSelector = function (t) {
				return (t + '').replace(N, P);
			};
			var R = b,
				I = c;
			!(function () {
				var t,
					e,
					r,
					i,
					s,
					l,
					c,
					f,
					p,
					h,
					g = I,
					v = C.expando,
					y = 0,
					b = 0,
					x = tt(),
					w = tt(),
					A = tt(),
					T = tt(),
					S = function (t, e) {
						return t === e && (s = !0), 0;
					},
					N =
						'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
					P = '(?:\\\\[\\da-fA-F]{1,6}' + $ + '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
					L =
						'\\[' +
						$ +
						'*(' +
						P +
						')(?:' +
						$ +
						'*([*^$|!~]?=)' +
						$ +
						'*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
						P +
						'))|)' +
						$ +
						'*\\]',
					_ =
						':(' +
						P +
						')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
						L +
						')*)|.*)\\)|)',
					M = new RegExp($ + '+', 'g'),
					H = new RegExp('^' + $ + '*,' + $ + '*'),
					q = new RegExp('^' + $ + '*([>+~]|' + $ + ')' + $ + '*'),
					U = new RegExp($ + '|>'),
					F = new RegExp(_),
					B = new RegExp('^' + P + '$'),
					W = {
						ID: new RegExp('^#(' + P + ')'),
						CLASS: new RegExp('^\\.(' + P + ')'),
						TAG: new RegExp('^(' + P + '|[*])'),
						ATTR: new RegExp('^' + L),
						PSEUDO: new RegExp('^' + _),
						CHILD: new RegExp(
							'^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
								$ +
								'*(even|odd|(([+-]|)(\\d*)n|)' +
								$ +
								'*(?:([+-]|)' +
								$ +
								'*(\\d+)|))' +
								$ +
								'*\\)|)',
							'i'
						),
						bool: new RegExp('^(?:' + N + ')$', 'i'),
						needsContext: new RegExp(
							'^' +
								$ +
								'*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
								$ +
								'*((?:-\\d)?\\d*)' +
								$ +
								'*\\)|)(?=[^-]|$)',
							'i'
						),
					},
					z = /^(?:input|select|textarea|button)$/i,
					V = /^h\d$/i,
					X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
					K = /[+~]/,
					G = new RegExp('\\\\[\\da-fA-F]{1,6}' + $ + '?|\\\\([^\\r\\n\\f])', 'g'),
					Y = function (t, e) {
						var n = '0x' + t.slice(1) - 65536;
						return (
							e ||
							(n < 0
								? String.fromCharCode(n + 65536)
								: String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
						);
					},
					J = function () {
						lt();
					},
					Q = pt(
						function (t) {
							return !0 === t.disabled && E(t, 'fieldset');
						},
						{ dir: 'parentNode', next: 'legend' }
					);
				try {
					g.apply((o = a.call(R.childNodes)), R.childNodes),
						o[R.childNodes.length].nodeType;
				} catch (t) {
					g = {
						apply: function (t, e) {
							I.apply(t, a.call(e));
						},
						call: function (t) {
							I.apply(t, a.call(arguments, 1));
						},
					};
				}
				function Z(t, e, n, r) {
					var i,
						o,
						s,
						a,
						c,
						u,
						d,
						h = e && e.ownerDocument,
						y = e ? e.nodeType : 9;
					if (
						((n = n || []),
						'string' != typeof t || !t || (1 !== y && 9 !== y && 11 !== y))
					)
						return n;
					if (!r && (lt(e), (e = e || l), f)) {
						if (11 !== y && (c = X.exec(t)))
							if ((i = c[1])) {
								if (9 === y) {
									if (!(s = e.getElementById(i))) return n;
									if (s.id === i) return g.call(n, s), n;
								} else if (
									h &&
									(s = h.getElementById(i)) &&
									Z.contains(e, s) &&
									s.id === i
								)
									return g.call(n, s), n;
							} else {
								if (c[2]) return g.apply(n, e.getElementsByTagName(t)), n;
								if ((i = c[3]) && e.getElementsByClassName)
									return g.apply(n, e.getElementsByClassName(i)), n;
							}
						if (!(T[t + ' '] || (p && p.test(t)))) {
							if (((d = t), (h = e), 1 === y && (U.test(t) || q.test(t)))) {
								for (
									((h = (K.test(t) && at(e.parentNode)) || e) == e && m.scope) ||
										((a = e.getAttribute('id'))
											? (a = C.escapeSelector(a))
											: e.setAttribute('id', (a = v))),
										o = (u = ut(t)).length;
									o--;

								)
									u[o] = (a ? '#' + a : ':scope') + ' ' + ft(u[o]);
								d = u.join(',');
							}
							try {
								return g.apply(n, h.querySelectorAll(d)), n;
							} catch (e) {
								T(t, !0);
							} finally {
								a === v && e.removeAttribute('id');
							}
						}
					}
					return yt(t.replace(O, '$1'), e, n, r);
				}
				function tt() {
					var t = [];
					return function n(r, i) {
						return (
							t.push(r + ' ') > e.cacheLength && delete n[t.shift()], (n[r + ' '] = i)
						);
					};
				}
				function et(t) {
					return (t[v] = !0), t;
				}
				function nt(t) {
					var e = l.createElement('fieldset');
					try {
						return !!t(e);
					} catch (t) {
						return !1;
					} finally {
						e.parentNode && e.parentNode.removeChild(e), (e = null);
					}
				}
				function rt(t) {
					return function (e) {
						return E(e, 'input') && e.type === t;
					};
				}
				function it(t) {
					return function (e) {
						return (E(e, 'input') || E(e, 'button')) && e.type === t;
					};
				}
				function ot(t) {
					return function (e) {
						return 'form' in e
							? e.parentNode && !1 === e.disabled
								? 'label' in e
									? 'label' in e.parentNode
										? e.parentNode.disabled === t
										: e.disabled === t
									: e.isDisabled === t || (e.isDisabled !== !t && Q(e) === t)
								: e.disabled === t
							: 'label' in e && e.disabled === t;
					};
				}
				function st(t) {
					return et(function (e) {
						return (
							(e = +e),
							et(function (n, r) {
								for (var i, o = t([], n.length, e), s = o.length; s--; )
									n[(i = o[s])] && (n[i] = !(r[i] = n[i]));
							})
						);
					});
				}
				function at(t) {
					return t && void 0 !== t.getElementsByTagName && t;
				}
				function lt(t) {
					var n,
						r = t ? t.ownerDocument || t : R;
					return r != l && 9 === r.nodeType && r.documentElement
						? ((c = (l = r).documentElement),
						  (f = !C.isXMLDoc(l)),
						  (h = c.matches || c.webkitMatchesSelector || c.msMatchesSelector),
						  c.msMatchesSelector &&
								R != l &&
								(n = l.defaultView) &&
								n.top !== n &&
								n.addEventListener('unload', J),
						  (m.getById = nt(function (t) {
								return (
									(c.appendChild(t).id = C.expando),
									!l.getElementsByName || !l.getElementsByName(C.expando).length
								);
						  })),
						  (m.disconnectedMatch = nt(function (t) {
								return h.call(t, '*');
						  })),
						  (m.scope = nt(function () {
								return l.querySelectorAll(':scope');
						  })),
						  (m.cssHas = nt(function () {
								try {
									return l.querySelector(':has(*,:jqfake)'), !1;
								} catch (t) {
									return !0;
								}
						  })),
						  m.getById
								? ((e.filter.ID = function (t) {
										var e = t.replace(G, Y);
										return function (t) {
											return t.getAttribute('id') === e;
										};
								  }),
								  (e.find.ID = function (t, e) {
										if (void 0 !== e.getElementById && f) {
											var n = e.getElementById(t);
											return n ? [n] : [];
										}
								  }))
								: ((e.filter.ID = function (t) {
										var e = t.replace(G, Y);
										return function (t) {
											var n =
												void 0 !== t.getAttributeNode &&
												t.getAttributeNode('id');
											return n && n.value === e;
										};
								  }),
								  (e.find.ID = function (t, e) {
										if (void 0 !== e.getElementById && f) {
											var n,
												r,
												i,
												o = e.getElementById(t);
											if (o) {
												if ((n = o.getAttributeNode('id')) && n.value === t)
													return [o];
												for (
													i = e.getElementsByName(t), r = 0;
													(o = i[r++]);

												)
													if (
														(n = o.getAttributeNode('id')) &&
														n.value === t
													)
														return [o];
											}
											return [];
										}
								  })),
						  (e.find.TAG = function (t, e) {
								return void 0 !== e.getElementsByTagName
									? e.getElementsByTagName(t)
									: e.querySelectorAll(t);
						  }),
						  (e.find.CLASS = function (t, e) {
								if (void 0 !== e.getElementsByClassName && f)
									return e.getElementsByClassName(t);
						  }),
						  (p = []),
						  nt(function (t) {
								var e;
								(c.appendChild(t).innerHTML =
									"<a id='" +
									v +
									"' href='' disabled='disabled'></a><select id='" +
									v +
									"-\r\\' disabled='disabled'><option selected=''></option></select>"),
									t.querySelectorAll('[selected]').length ||
										p.push('\\[' + $ + '*(?:value|' + N + ')'),
									t.querySelectorAll('[id~=' + v + '-]').length || p.push('~='),
									t.querySelectorAll('a#' + v + '+*').length ||
										p.push('.#.+[+~]'),
									t.querySelectorAll(':checked').length || p.push(':checked'),
									(e = l.createElement('input')).setAttribute('type', 'hidden'),
									t.appendChild(e).setAttribute('name', 'D'),
									(c.appendChild(t).disabled = !0),
									2 !== t.querySelectorAll(':disabled').length &&
										p.push(':enabled', ':disabled'),
									(e = l.createElement('input')).setAttribute('name', ''),
									t.appendChild(e),
									t.querySelectorAll("[name='']").length ||
										p.push('\\[' + $ + '*name' + $ + '*=' + $ + '*(?:\'\'|"")');
						  }),
						  m.cssHas || p.push(':has'),
						  (p = p.length && new RegExp(p.join('|'))),
						  (S = function (t, e) {
								if (t === e) return (s = !0), 0;
								var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
								return (
									n ||
									(1 &
										(n =
											(t.ownerDocument || t) == (e.ownerDocument || e)
												? t.compareDocumentPosition(e)
												: 1) ||
									(!m.sortDetached && e.compareDocumentPosition(t) === n)
										? t === l || (t.ownerDocument == R && Z.contains(R, t))
											? -1
											: e === l || (e.ownerDocument == R && Z.contains(R, e))
											? 1
											: i
											? u.call(i, t) - u.call(i, e)
											: 0
										: 4 & n
										? -1
										: 1)
								);
						  }),
						  l)
						: l;
				}
				for (t in ((Z.matches = function (t, e) {
					return Z(t, null, null, e);
				}),
				(Z.matchesSelector = function (t, e) {
					if ((lt(t), f && !T[e + ' '] && (!p || !p.test(e))))
						try {
							var n = h.call(t, e);
							if (
								n ||
								m.disconnectedMatch ||
								(t.document && 11 !== t.document.nodeType)
							)
								return n;
						} catch (t) {
							T(e, !0);
						}
					return Z(e, l, null, [t]).length > 0;
				}),
				(Z.contains = function (t, e) {
					return (t.ownerDocument || t) != l && lt(t), C.contains(t, e);
				}),
				(Z.attr = function (t, n) {
					(t.ownerDocument || t) != l && lt(t);
					var r = e.attrHandle[n.toLowerCase()],
						i = r && d.call(e.attrHandle, n.toLowerCase()) ? r(t, n, !f) : void 0;
					return void 0 !== i ? i : t.getAttribute(n);
				}),
				(Z.error = function (t) {
					throw new Error('Syntax error, unrecognized expression: ' + t);
				}),
				(C.uniqueSort = function (t) {
					var e,
						n = [],
						r = 0,
						o = 0;
					if (
						((s = !m.sortStable), (i = !m.sortStable && a.call(t, 0)), D.call(t, S), s)
					) {
						for (; (e = t[o++]); ) e === t[o] && (r = n.push(o));
						for (; r--; ) j.call(t, n[r], 1);
					}
					return (i = null), t;
				}),
				(C.fn.uniqueSort = function () {
					return this.pushStack(C.uniqueSort(a.apply(this)));
				}),
				((e = C.expr =
					{
						cacheLength: 50,
						createPseudo: et,
						match: W,
						attrHandle: {},
						find: {},
						relative: {
							'>': { dir: 'parentNode', first: !0 },
							' ': { dir: 'parentNode' },
							'+': { dir: 'previousSibling', first: !0 },
							'~': { dir: 'previousSibling' },
						},
						preFilter: {
							ATTR: function (t) {
								return (
									(t[1] = t[1].replace(G, Y)),
									(t[3] = (t[3] || t[4] || t[5] || '').replace(G, Y)),
									'~=' === t[2] && (t[3] = ' ' + t[3] + ' '),
									t.slice(0, 4)
								);
							},
							CHILD: function (t) {
								return (
									(t[1] = t[1].toLowerCase()),
									'nth' === t[1].slice(0, 3)
										? (t[3] || Z.error(t[0]),
										  (t[4] = +(t[4]
												? t[5] + (t[6] || 1)
												: 2 * ('even' === t[3] || 'odd' === t[3]))),
										  (t[5] = +(t[7] + t[8] || 'odd' === t[3])))
										: t[3] && Z.error(t[0]),
									t
								);
							},
							PSEUDO: function (t) {
								var e,
									n = !t[6] && t[2];
								return W.CHILD.test(t[0])
									? null
									: (t[3]
											? (t[2] = t[4] || t[5] || '')
											: n &&
											  F.test(n) &&
											  (e = ut(n, !0)) &&
											  (e = n.indexOf(')', n.length - e) - n.length) &&
											  ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
									  t.slice(0, 3));
							},
						},
						filter: {
							TAG: function (t) {
								var e = t.replace(G, Y).toLowerCase();
								return '*' === t
									? function () {
											return !0;
									  }
									: function (t) {
											return E(t, e);
									  };
							},
							CLASS: function (t) {
								var e = x[t + ' '];
								return (
									e ||
									((e = new RegExp('(^|' + $ + ')' + t + '(' + $ + '|$)')) &&
										x(t, function (t) {
											return e.test(
												('string' == typeof t.className && t.className) ||
													(void 0 !== t.getAttribute &&
														t.getAttribute('class')) ||
													''
											);
										}))
								);
							},
							ATTR: function (t, e, n) {
								return function (r) {
									var i = Z.attr(r, t);
									return null == i
										? '!=' === e
										: !e ||
												((i += ''),
												'=' === e
													? i === n
													: '!=' === e
													? i !== n
													: '^=' === e
													? n && 0 === i.indexOf(n)
													: '*=' === e
													? n && i.indexOf(n) > -1
													: '$=' === e
													? n && i.slice(-n.length) === n
													: '~=' === e
													? (' ' + i.replace(M, ' ') + ' ').indexOf(n) >
													  -1
													: '|=' === e &&
													  (i === n ||
															i.slice(0, n.length + 1) === n + '-'));
								};
							},
							CHILD: function (t, e, n, r, i) {
								var o = 'nth' !== t.slice(0, 3),
									s = 'last' !== t.slice(-4),
									a = 'of-type' === e;
								return 1 === r && 0 === i
									? function (t) {
											return !!t.parentNode;
									  }
									: function (e, n, l) {
											var c,
												u,
												f,
												p,
												d,
												h = o !== s ? 'nextSibling' : 'previousSibling',
												g = e.parentNode,
												m = a && e.nodeName.toLowerCase(),
												b = !l && !a,
												x = !1;
											if (g) {
												if (o) {
													for (; h; ) {
														for (f = e; (f = f[h]); )
															if (a ? E(f, m) : 1 === f.nodeType)
																return !1;
														d = h = 'only' === t && !d && 'nextSibling';
													}
													return !0;
												}
												if (
													((d = [s ? g.firstChild : g.lastChild]), s && b)
												) {
													for (
														x =
															(p =
																(c =
																	(u = g[v] || (g[v] = {}))[t] ||
																	[])[0] === y && c[1]) && c[2],
															f = p && g.childNodes[p];
														(f =
															(++p && f && f[h]) ||
															(x = p = 0) ||
															d.pop());

													)
														if (1 === f.nodeType && ++x && f === e) {
															u[t] = [y, p, x];
															break;
														}
												} else if (
													(b &&
														(x = p =
															(c =
																(u = e[v] || (e[v] = {}))[t] ||
																[])[0] === y && c[1]),
													!1 === x)
												)
													for (
														;
														(f =
															(++p && f && f[h]) ||
															(x = p = 0) ||
															d.pop()) &&
														(!(a ? E(f, m) : 1 === f.nodeType) ||
															!++x ||
															(b &&
																((u = f[v] || (f[v] = {}))[t] = [
																	y,
																	x,
																]),
															f !== e));

													);
												return (x -= i) === r || (x % r == 0 && x / r >= 0);
											}
									  };
							},
							PSEUDO: function (t, n) {
								var r,
									i =
										e.pseudos[t] ||
										e.setFilters[t.toLowerCase()] ||
										Z.error('unsupported pseudo: ' + t);
								return i[v]
									? i(n)
									: i.length > 1
									? ((r = [t, t, '', n]),
									  e.setFilters.hasOwnProperty(t.toLowerCase())
											? et(function (t, e) {
													for (var r, o = i(t, n), s = o.length; s--; )
														t[(r = u.call(t, o[s]))] = !(e[r] = o[s]);
											  })
											: function (t) {
													return i(t, 0, r);
											  })
									: i;
							},
						},
						pseudos: {
							not: et(function (t) {
								var e = [],
									n = [],
									r = vt(t.replace(O, '$1'));
								return r[v]
									? et(function (t, e, n, i) {
											for (var o, s = r(t, null, i, []), a = t.length; a--; )
												(o = s[a]) && (t[a] = !(e[a] = o));
									  })
									: function (t, i, o) {
											return (
												(e[0] = t),
												r(e, null, o, n),
												(e[0] = null),
												!n.pop()
											);
									  };
							}),
							has: et(function (t) {
								return function (e) {
									return Z(t, e).length > 0;
								};
							}),
							contains: et(function (t) {
								return (
									(t = t.replace(G, Y)),
									function (e) {
										return (e.textContent || C.text(e)).indexOf(t) > -1;
									}
								);
							}),
							lang: et(function (t) {
								return (
									B.test(t || '') || Z.error('unsupported lang: ' + t),
									(t = t.replace(G, Y).toLowerCase()),
									function (e) {
										var n;
										do {
											if (
												(n = f
													? e.lang
													: e.getAttribute('xml:lang') ||
													  e.getAttribute('lang'))
											)
												return (
													(n = n.toLowerCase()) === t ||
													0 === n.indexOf(t + '-')
												);
										} while ((e = e.parentNode) && 1 === e.nodeType);
										return !1;
									}
								);
							}),
							target: function (t) {
								var e = n.location && n.location.hash;
								return e && e.slice(1) === t.id;
							},
							root: function (t) {
								return t === c;
							},
							focus: function (t) {
								return (
									t ===
										(function () {
											try {
												return l.activeElement;
											} catch (t) {}
										})() &&
									l.hasFocus() &&
									!!(t.type || t.href || ~t.tabIndex)
								);
							},
							enabled: ot(!1),
							disabled: ot(!0),
							checked: function (t) {
								return (
									(E(t, 'input') && !!t.checked) ||
									(E(t, 'option') && !!t.selected)
								);
							},
							selected: function (t) {
								return (
									t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
								);
							},
							empty: function (t) {
								for (t = t.firstChild; t; t = t.nextSibling)
									if (t.nodeType < 6) return !1;
								return !0;
							},
							parent: function (t) {
								return !e.pseudos.empty(t);
							},
							header: function (t) {
								return V.test(t.nodeName);
							},
							input: function (t) {
								return z.test(t.nodeName);
							},
							button: function (t) {
								return (E(t, 'input') && 'button' === t.type) || E(t, 'button');
							},
							text: function (t) {
								var e;
								return (
									E(t, 'input') &&
									'text' === t.type &&
									(null == (e = t.getAttribute('type')) ||
										'text' === e.toLowerCase())
								);
							},
							first: st(function () {
								return [0];
							}),
							last: st(function (t, e) {
								return [e - 1];
							}),
							eq: st(function (t, e, n) {
								return [n < 0 ? n + e : n];
							}),
							even: st(function (t, e) {
								for (var n = 0; n < e; n += 2) t.push(n);
								return t;
							}),
							odd: st(function (t, e) {
								for (var n = 1; n < e; n += 2) t.push(n);
								return t;
							}),
							lt: st(function (t, e, n) {
								var r;
								for (r = n < 0 ? n + e : n > e ? e : n; --r >= 0; ) t.push(r);
								return t;
							}),
							gt: st(function (t, e, n) {
								for (var r = n < 0 ? n + e : n; ++r < e; ) t.push(r);
								return t;
							}),
						},
					}).pseudos.nth = e.pseudos.eq),
				{ radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
					e.pseudos[t] = rt(t);
				for (t in { submit: !0, reset: !0 }) e.pseudos[t] = it(t);
				function ct() {}
				function ut(t, n) {
					var r,
						i,
						o,
						s,
						a,
						l,
						c,
						u = w[t + ' '];
					if (u) return n ? 0 : u.slice(0);
					for (a = t, l = [], c = e.preFilter; a; ) {
						for (s in ((r && !(i = H.exec(a))) ||
							(i && (a = a.slice(i[0].length) || a), l.push((o = []))),
						(r = !1),
						(i = q.exec(a)) &&
							((r = i.shift()),
							o.push({ value: r, type: i[0].replace(O, ' ') }),
							(a = a.slice(r.length))),
						e.filter))
							!(i = W[s].exec(a)) ||
								(c[s] && !(i = c[s](i))) ||
								((r = i.shift()),
								o.push({ value: r, type: s, matches: i }),
								(a = a.slice(r.length)));
						if (!r) break;
					}
					return n ? a.length : a ? Z.error(t) : w(t, l).slice(0);
				}
				function ft(t) {
					for (var e = 0, n = t.length, r = ''; e < n; e++) r += t[e].value;
					return r;
				}
				function pt(t, e, n) {
					var r = e.dir,
						i = e.next,
						o = i || r,
						s = n && 'parentNode' === o,
						a = b++;
					return e.first
						? function (e, n, i) {
								for (; (e = e[r]); ) if (1 === e.nodeType || s) return t(e, n, i);
								return !1;
						  }
						: function (e, n, l) {
								var c,
									u,
									f = [y, a];
								if (l) {
									for (; (e = e[r]); )
										if ((1 === e.nodeType || s) && t(e, n, l)) return !0;
								} else
									for (; (e = e[r]); )
										if (1 === e.nodeType || s)
											if (((u = e[v] || (e[v] = {})), i && E(e, i)))
												e = e[r] || e;
											else {
												if ((c = u[o]) && c[0] === y && c[1] === a)
													return (f[2] = c[2]);
												if (((u[o] = f), (f[2] = t(e, n, l)))) return !0;
											}
								return !1;
						  };
				}
				function dt(t) {
					return t.length > 1
						? function (e, n, r) {
								for (var i = t.length; i--; ) if (!t[i](e, n, r)) return !1;
								return !0;
						  }
						: t[0];
				}
				function ht(t, e, n, r, i) {
					for (var o, s = [], a = 0, l = t.length, c = null != e; a < l; a++)
						(o = t[a]) && ((n && !n(o, r, i)) || (s.push(o), c && e.push(a)));
					return s;
				}
				function gt(t, e, n, r, i, o) {
					return (
						r && !r[v] && (r = gt(r)),
						i && !i[v] && (i = gt(i, o)),
						et(function (o, s, a, l) {
							var c,
								f,
								p,
								d,
								h = [],
								m = [],
								v = s.length,
								y =
									o ||
									(function (t, e, n) {
										for (var r = 0, i = e.length; r < i; r++) Z(t, e[r], n);
										return n;
									})(e || '*', a.nodeType ? [a] : a, []),
								b = !t || (!o && e) ? y : ht(y, h, t, a, l);
							if ((n ? n(b, (d = i || (o ? t : v || r) ? [] : s), a, l) : (d = b), r))
								for (c = ht(d, m), r(c, [], a, l), f = c.length; f--; )
									(p = c[f]) && (d[m[f]] = !(b[m[f]] = p));
							if (o) {
								if (i || t) {
									if (i) {
										for (c = [], f = d.length; f--; )
											(p = d[f]) && c.push((b[f] = p));
										i(null, (d = []), c, l);
									}
									for (f = d.length; f--; )
										(p = d[f]) &&
											(c = i ? u.call(o, p) : h[f]) > -1 &&
											(o[c] = !(s[c] = p));
								}
							} else (d = ht(d === s ? d.splice(v, d.length) : d)), i ? i(null, s, d, l) : g.apply(s, d);
						})
					);
				}
				function mt(t) {
					for (
						var n,
							i,
							o,
							s = t.length,
							a = e.relative[t[0].type],
							l = a || e.relative[' '],
							c = a ? 1 : 0,
							f = pt(
								function (t) {
									return t === n;
								},
								l,
								!0
							),
							p = pt(
								function (t) {
									return u.call(n, t) > -1;
								},
								l,
								!0
							),
							d = [
								function (t, e, i) {
									var o =
										(!a && (i || e != r)) ||
										((n = e).nodeType ? f(t, e, i) : p(t, e, i));
									return (n = null), o;
								},
							];
						c < s;
						c++
					)
						if ((i = e.relative[t[c].type])) d = [pt(dt(d), i)];
						else {
							if ((i = e.filter[t[c].type].apply(null, t[c].matches))[v]) {
								for (o = ++c; o < s && !e.relative[t[o].type]; o++);
								return gt(
									c > 1 && dt(d),
									c > 1 &&
										ft(
											t
												.slice(0, c - 1)
												.concat({ value: ' ' === t[c - 2].type ? '*' : '' })
										).replace(O, '$1'),
									i,
									c < o && mt(t.slice(c, o)),
									o < s && mt((t = t.slice(o))),
									o < s && ft(t)
								);
							}
							d.push(i);
						}
					return dt(d);
				}
				function vt(t, n) {
					var i,
						o = [],
						s = [],
						a = A[t + ' '];
					if (!a) {
						for (n || (n = ut(t)), i = n.length; i--; )
							(a = mt(n[i]))[v] ? o.push(a) : s.push(a);
						(a = A(
							t,
							(function (t, n) {
								var i = n.length > 0,
									o = t.length > 0,
									s = function (s, a, c, u, p) {
										var d,
											h,
											m,
											v = 0,
											b = '0',
											x = s && [],
											w = [],
											A = r,
											T = s || (o && e.find.TAG('*', p)),
											S = (y += null == A ? 1 : Math.random() || 0.1),
											E = T.length;
										for (
											p && (r = a == l || a || p);
											b !== E && null != (d = T[b]);
											b++
										) {
											if (o && d) {
												for (
													h = 0,
														a ||
															d.ownerDocument == l ||
															(lt(d), (c = !f));
													(m = t[h++]);

												)
													if (m(d, a || l, c)) {
														g.call(u, d);
														break;
													}
												p && (y = S);
											}
											i && ((d = !m && d) && v--, s && x.push(d));
										}
										if (((v += b), i && b !== v)) {
											for (h = 0; (m = n[h++]); ) m(x, w, a, c);
											if (s) {
												if (v > 0)
													for (; b--; )
														x[b] || w[b] || (w[b] = k.call(u));
												w = ht(w);
											}
											g.apply(u, w),
												p &&
													!s &&
													w.length > 0 &&
													v + n.length > 1 &&
													C.uniqueSort(u);
										}
										return p && ((y = S), (r = A)), x;
									};
								return i ? et(s) : s;
							})(s, o)
						)).selector = t;
					}
					return a;
				}
				function yt(t, n, r, i) {
					var o,
						s,
						a,
						l,
						c,
						u = 'function' == typeof t && t,
						p = !i && ut((t = u.selector || t));
					if (((r = r || []), 1 === p.length)) {
						if (
							(s = p[0] = p[0].slice(0)).length > 2 &&
							'ID' === (a = s[0]).type &&
							9 === n.nodeType &&
							f &&
							e.relative[s[1].type]
						) {
							if (!(n = (e.find.ID(a.matches[0].replace(G, Y), n) || [])[0]))
								return r;
							u && (n = n.parentNode), (t = t.slice(s.shift().value.length));
						}
						for (
							o = W.needsContext.test(t) ? 0 : s.length;
							o-- && ((a = s[o]), !e.relative[(l = a.type)]);

						)
							if (
								(c = e.find[l]) &&
								(i = c(
									a.matches[0].replace(G, Y),
									(K.test(s[0].type) && at(n.parentNode)) || n
								))
							) {
								if ((s.splice(o, 1), !(t = i.length && ft(s))))
									return g.apply(r, i), r;
								break;
							}
					}
					return (
						(u || vt(t, p))(i, n, !f, r, !n || (K.test(t) && at(n.parentNode)) || n), r
					);
				}
				(ct.prototype = e.filters = e.pseudos),
					(e.setFilters = new ct()),
					(m.sortStable = v.split('').sort(S).join('') === v),
					lt(),
					(m.sortDetached = nt(function (t) {
						return 1 & t.compareDocumentPosition(l.createElement('fieldset'));
					})),
					(C.find = Z),
					(C.expr[':'] = C.expr.pseudos),
					(C.unique = C.uniqueSort),
					(Z.compile = vt),
					(Z.select = yt),
					(Z.setDocument = lt),
					(Z.tokenize = ut),
					(Z.escape = C.escapeSelector),
					(Z.getText = C.text),
					(Z.isXML = C.isXMLDoc),
					(Z.selectors = C.expr),
					(Z.support = C.support),
					(Z.uniqueSort = C.uniqueSort);
			})();
			var L = function (t, e, n) {
					for (var r = [], i = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
						if (1 === t.nodeType) {
							if (i && C(t).is(n)) break;
							r.push(t);
						}
					return r;
				},
				_ = function (t, e) {
					for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
					return n;
				},
				M = C.expr.match.needsContext,
				H = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
			function q(t, e, n) {
				return v(e)
					? C.grep(t, function (t, r) {
							return !!e.call(t, r, t) !== n;
					  })
					: e.nodeType
					? C.grep(t, function (t) {
							return (t === e) !== n;
					  })
					: 'string' != typeof e
					? C.grep(t, function (t) {
							return u.call(e, t) > -1 !== n;
					  })
					: C.filter(e, t, n);
			}
			(C.filter = function (t, e, n) {
				var r = e[0];
				return (
					n && (t = ':not(' + t + ')'),
					1 === e.length && 1 === r.nodeType
						? C.find.matchesSelector(r, t)
							? [r]
							: []
						: C.find.matches(
								t,
								C.grep(e, function (t) {
									return 1 === t.nodeType;
								})
						  )
				);
			}),
				C.fn.extend({
					find: function (t) {
						var e,
							n,
							r = this.length,
							i = this;
						if ('string' != typeof t)
							return this.pushStack(
								C(t).filter(function () {
									for (e = 0; e < r; e++) if (C.contains(i[e], this)) return !0;
								})
							);
						for (n = this.pushStack([]), e = 0; e < r; e++) C.find(t, i[e], n);
						return r > 1 ? C.uniqueSort(n) : n;
					},
					filter: function (t) {
						return this.pushStack(q(this, t || [], !1));
					},
					not: function (t) {
						return this.pushStack(q(this, t || [], !0));
					},
					is: function (t) {
						return !!q(this, 'string' == typeof t && M.test(t) ? C(t) : t || [], !1)
							.length;
					},
				});
			var U,
				F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
			((C.fn.init = function (t, e, n) {
				var r, i;
				if (!t) return this;
				if (((n = n || U), 'string' == typeof t)) {
					if (
						!(r =
							'<' === t[0] && '>' === t[t.length - 1] && t.length >= 3
								? [null, t, null]
								: F.exec(t)) ||
						(!r[1] && e)
					)
						return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
					if (r[1]) {
						if (
							((e = e instanceof C ? e[0] : e),
							C.merge(
								this,
								C.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : b, !0)
							),
							H.test(r[1]) && C.isPlainObject(e))
						)
							for (r in e) v(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
						return this;
					}
					return (i = b.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this;
				}
				return t.nodeType
					? ((this[0] = t), (this.length = 1), this)
					: v(t)
					? void 0 !== n.ready
						? n.ready(t)
						: t(C)
					: C.makeArray(t, this);
			}).prototype = C.fn),
				(U = C(b));
			var B = /^(?:parents|prev(?:Until|All))/,
				W = { children: !0, contents: !0, next: !0, prev: !0 };
			function z(t, e) {
				for (; (t = t[e]) && 1 !== t.nodeType; );
				return t;
			}
			C.fn.extend({
				has: function (t) {
					var e = C(t, this),
						n = e.length;
					return this.filter(function () {
						for (var t = 0; t < n; t++) if (C.contains(this, e[t])) return !0;
					});
				},
				closest: function (t, e) {
					var n,
						r = 0,
						i = this.length,
						o = [],
						s = 'string' != typeof t && C(t);
					if (!M.test(t))
						for (; r < i; r++)
							for (n = this[r]; n && n !== e; n = n.parentNode)
								if (
									n.nodeType < 11 &&
									(s
										? s.index(n) > -1
										: 1 === n.nodeType && C.find.matchesSelector(n, t))
								) {
									o.push(n);
									break;
								}
					return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o);
				},
				index: function (t) {
					return t
						? 'string' == typeof t
							? u.call(C(t), this[0])
							: u.call(this, t.jquery ? t[0] : t)
						: this[0] && this[0].parentNode
						? this.first().prevAll().length
						: -1;
				},
				add: function (t, e) {
					return this.pushStack(C.uniqueSort(C.merge(this.get(), C(t, e))));
				},
				addBack: function (t) {
					return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
				},
			}),
				C.each(
					{
						parent: function (t) {
							var e = t.parentNode;
							return e && 11 !== e.nodeType ? e : null;
						},
						parents: function (t) {
							return L(t, 'parentNode');
						},
						parentsUntil: function (t, e, n) {
							return L(t, 'parentNode', n);
						},
						next: function (t) {
							return z(t, 'nextSibling');
						},
						prev: function (t) {
							return z(t, 'previousSibling');
						},
						nextAll: function (t) {
							return L(t, 'nextSibling');
						},
						prevAll: function (t) {
							return L(t, 'previousSibling');
						},
						nextUntil: function (t, e, n) {
							return L(t, 'nextSibling', n);
						},
						prevUntil: function (t, e, n) {
							return L(t, 'previousSibling', n);
						},
						siblings: function (t) {
							return _((t.parentNode || {}).firstChild, t);
						},
						children: function (t) {
							return _(t.firstChild);
						},
						contents: function (t) {
							return null != t.contentDocument && s(t.contentDocument)
								? t.contentDocument
								: (E(t, 'template') && (t = t.content || t),
								  C.merge([], t.childNodes));
						},
					},
					function (t, e) {
						C.fn[t] = function (n, r) {
							var i = C.map(this, e, n);
							return (
								'Until' !== t.slice(-5) && (r = n),
								r && 'string' == typeof r && (i = C.filter(r, i)),
								this.length > 1 &&
									(W[t] || C.uniqueSort(i), B.test(t) && i.reverse()),
								this.pushStack(i)
							);
						};
					}
				);
			var V = /[^\x20\t\r\n\f]+/g;
			function X(t) {
				return t;
			}
			function K(t) {
				throw t;
			}
			function G(t, e, n, r) {
				var i;
				try {
					t && v((i = t.promise))
						? i.call(t).done(e).fail(n)
						: t && v((i = t.then))
						? i.call(t, e, n)
						: e.apply(void 0, [t].slice(r));
				} catch (t) {
					n.apply(void 0, [t]);
				}
			}
			(C.Callbacks = function (t) {
				t =
					'string' == typeof t
						? (function (t) {
								var e = {};
								return (
									C.each(t.match(V) || [], function (t, n) {
										e[n] = !0;
									}),
									e
								);
						  })(t)
						: C.extend({}, t);
				var e,
					n,
					r,
					i,
					o = [],
					s = [],
					a = -1,
					l = function () {
						for (i = i || t.once, r = e = !0; s.length; a = -1)
							for (n = s.shift(); ++a < o.length; )
								!1 === o[a].apply(n[0], n[1]) &&
									t.stopOnFalse &&
									((a = o.length), (n = !1));
						t.memory || (n = !1), (e = !1), i && (o = n ? [] : '');
					},
					c = {
						add: function () {
							return (
								o &&
									(n && !e && ((a = o.length - 1), s.push(n)),
									(function e(n) {
										C.each(n, function (n, r) {
											v(r)
												? (t.unique && c.has(r)) || o.push(r)
												: r && r.length && 'string' !== A(r) && e(r);
										});
									})(arguments),
									n && !e && l()),
								this
							);
						},
						remove: function () {
							return (
								C.each(arguments, function (t, e) {
									for (var n; (n = C.inArray(e, o, n)) > -1; )
										o.splice(n, 1), n <= a && a--;
								}),
								this
							);
						},
						has: function (t) {
							return t ? C.inArray(t, o) > -1 : o.length > 0;
						},
						empty: function () {
							return o && (o = []), this;
						},
						disable: function () {
							return (i = s = []), (o = n = ''), this;
						},
						disabled: function () {
							return !o;
						},
						lock: function () {
							return (i = s = []), n || e || (o = n = ''), this;
						},
						locked: function () {
							return !!i;
						},
						fireWith: function (t, n) {
							return (
								i ||
									((n = [t, (n = n || []).slice ? n.slice() : n]),
									s.push(n),
									e || l()),
								this
							);
						},
						fire: function () {
							return c.fireWith(this, arguments), this;
						},
						fired: function () {
							return !!r;
						},
					};
				return c;
			}),
				C.extend({
					Deferred: function (t) {
						var e = [
								[
									'notify',
									'progress',
									C.Callbacks('memory'),
									C.Callbacks('memory'),
									2,
								],
								[
									'resolve',
									'done',
									C.Callbacks('once memory'),
									C.Callbacks('once memory'),
									0,
									'resolved',
								],
								[
									'reject',
									'fail',
									C.Callbacks('once memory'),
									C.Callbacks('once memory'),
									1,
									'rejected',
								],
							],
							r = 'pending',
							i = {
								state: function () {
									return r;
								},
								always: function () {
									return o.done(arguments).fail(arguments), this;
								},
								catch: function (t) {
									return i.then(null, t);
								},
								pipe: function () {
									var t = arguments;
									return C.Deferred(function (n) {
										C.each(e, function (e, r) {
											var i = v(t[r[4]]) && t[r[4]];
											o[r[1]](function () {
												var t = i && i.apply(this, arguments);
												t && v(t.promise)
													? t
															.promise()
															.progress(n.notify)
															.done(n.resolve)
															.fail(n.reject)
													: n[r[0] + 'With'](this, i ? [t] : arguments);
											});
										}),
											(t = null);
									}).promise();
								},
								then: function (t, r, i) {
									var o = 0;
									function s(t, e, r, i) {
										return function () {
											var a = this,
												l = arguments,
												c = function () {
													var n, c;
													if (!(t < o)) {
														if ((n = r.apply(a, l)) === e.promise())
															throw new TypeError(
																'Thenable self-resolution'
															);
														(c =
															n &&
															('object' == typeof n ||
																'function' == typeof n) &&
															n.then),
															v(c)
																? i
																	? c.call(
																			n,
																			s(o, e, X, i),
																			s(o, e, K, i)
																	  )
																	: (o++,
																	  c.call(
																			n,
																			s(o, e, X, i),
																			s(o, e, K, i),
																			s(o, e, X, e.notifyWith)
																	  ))
																: (r !== X &&
																		((a = void 0), (l = [n])),
																  (i || e.resolveWith)(a, l));
													}
												},
												u = i
													? c
													: function () {
															try {
																c();
															} catch (n) {
																C.Deferred.exceptionHook &&
																	C.Deferred.exceptionHook(
																		n,
																		u.error
																	),
																	t + 1 >= o &&
																		(r !== K &&
																			((a = void 0),
																			(l = [n])),
																		e.rejectWith(a, l));
															}
													  };
											t
												? u()
												: (C.Deferred.getErrorHook
														? (u.error = C.Deferred.getErrorHook())
														: C.Deferred.getStackHook &&
														  (u.error = C.Deferred.getStackHook()),
												  n.setTimeout(u));
										};
									}
									return C.Deferred(function (n) {
										e[0][3].add(s(0, n, v(i) ? i : X, n.notifyWith)),
											e[1][3].add(s(0, n, v(t) ? t : X)),
											e[2][3].add(s(0, n, v(r) ? r : K));
									}).promise();
								},
								promise: function (t) {
									return null != t ? C.extend(t, i) : i;
								},
							},
							o = {};
						return (
							C.each(e, function (t, n) {
								var s = n[2],
									a = n[5];
								(i[n[1]] = s.add),
									a &&
										s.add(
											function () {
												r = a;
											},
											e[3 - t][2].disable,
											e[3 - t][3].disable,
											e[0][2].lock,
											e[0][3].lock
										),
									s.add(n[3].fire),
									(o[n[0]] = function () {
										return (
											o[n[0] + 'With'](this === o ? void 0 : this, arguments),
											this
										);
									}),
									(o[n[0] + 'With'] = s.fireWith);
							}),
							i.promise(o),
							t && t.call(o, o),
							o
						);
					},
					when: function (t) {
						var e = arguments.length,
							n = e,
							r = Array(n),
							i = a.call(arguments),
							o = C.Deferred(),
							s = function (t) {
								return function (n) {
									(r[t] = this),
										(i[t] = arguments.length > 1 ? a.call(arguments) : n),
										--e || o.resolveWith(r, i);
								};
							};
						if (
							e <= 1 &&
							(G(t, o.done(s(n)).resolve, o.reject, !e),
							'pending' === o.state() || v(i[n] && i[n].then))
						)
							return o.then();
						for (; n--; ) G(i[n], s(n), o.reject);
						return o.promise();
					},
				});
			var Y = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
			(C.Deferred.exceptionHook = function (t, e) {
				n.console &&
					n.console.warn &&
					t &&
					Y.test(t.name) &&
					n.console.warn('jQuery.Deferred exception: ' + t.message, t.stack, e);
			}),
				(C.readyException = function (t) {
					n.setTimeout(function () {
						throw t;
					});
				});
			var J = C.Deferred();
			function Q() {
				b.removeEventListener('DOMContentLoaded', Q),
					n.removeEventListener('load', Q),
					C.ready();
			}
			(C.fn.ready = function (t) {
				return (
					J.then(t).catch(function (t) {
						C.readyException(t);
					}),
					this
				);
			}),
				C.extend({
					isReady: !1,
					readyWait: 1,
					ready: function (t) {
						(!0 === t ? --C.readyWait : C.isReady) ||
							((C.isReady = !0),
							(!0 !== t && --C.readyWait > 0) || J.resolveWith(b, [C]));
					},
				}),
				(C.ready.then = J.then),
				'complete' === b.readyState ||
				('loading' !== b.readyState && !b.documentElement.doScroll)
					? n.setTimeout(C.ready)
					: (b.addEventListener('DOMContentLoaded', Q), n.addEventListener('load', Q));
			var Z = function (t, e, n, r, i, o, s) {
					var a = 0,
						l = t.length,
						c = null == n;
					if ('object' === A(n)) for (a in ((i = !0), n)) Z(t, e, a, n[a], !0, o, s);
					else if (
						void 0 !== r &&
						((i = !0),
						v(r) || (s = !0),
						c &&
							(s
								? (e.call(t, r), (e = null))
								: ((c = e),
								  (e = function (t, e, n) {
										return c.call(C(t), n);
								  }))),
						e)
					)
						for (; a < l; a++) e(t[a], n, s ? r : r.call(t[a], a, e(t[a], n)));
					return i ? t : c ? e.call(t) : l ? e(t[0], n) : o;
				},
				tt = /^-ms-/,
				et = /-([a-z])/g;
			function nt(t, e) {
				return e.toUpperCase();
			}
			function rt(t) {
				return t.replace(tt, 'ms-').replace(et, nt);
			}
			var it = function (t) {
				return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
			};
			function ot() {
				this.expando = C.expando + ot.uid++;
			}
			(ot.uid = 1),
				(ot.prototype = {
					cache: function (t) {
						var e = t[this.expando];
						return (
							e ||
								((e = {}),
								it(t) &&
									(t.nodeType
										? (t[this.expando] = e)
										: Object.defineProperty(t, this.expando, {
												value: e,
												configurable: !0,
										  }))),
							e
						);
					},
					set: function (t, e, n) {
						var r,
							i = this.cache(t);
						if ('string' == typeof e) i[rt(e)] = n;
						else for (r in e) i[rt(r)] = e[r];
						return i;
					},
					get: function (t, e) {
						return void 0 === e
							? this.cache(t)
							: t[this.expando] && t[this.expando][rt(e)];
					},
					access: function (t, e, n) {
						return void 0 === e || (e && 'string' == typeof e && void 0 === n)
							? this.get(t, e)
							: (this.set(t, e, n), void 0 !== n ? n : e);
					},
					remove: function (t, e) {
						var n,
							r = t[this.expando];
						if (void 0 !== r) {
							if (void 0 !== e) {
								n = (e = Array.isArray(e)
									? e.map(rt)
									: (e = rt(e)) in r
									? [e]
									: e.match(V) || []).length;
								for (; n--; ) delete r[e[n]];
							}
							(void 0 === e || C.isEmptyObject(r)) &&
								(t.nodeType ? (t[this.expando] = void 0) : delete t[this.expando]);
						}
					},
					hasData: function (t) {
						var e = t[this.expando];
						return void 0 !== e && !C.isEmptyObject(e);
					},
				});
			var st = new ot(),
				at = new ot(),
				lt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
				ct = /[A-Z]/g;
			function ut(t, e, n) {
				var r;
				if (void 0 === n && 1 === t.nodeType)
					if (
						((r = 'data-' + e.replace(ct, '-$&').toLowerCase()),
						'string' == typeof (n = t.getAttribute(r)))
					) {
						try {
							n = (function (t) {
								return (
									'true' === t ||
									('false' !== t &&
										('null' === t
											? null
											: t === +t + ''
											? +t
											: lt.test(t)
											? JSON.parse(t)
											: t))
								);
							})(n);
						} catch (t) {}
						at.set(t, e, n);
					} else n = void 0;
				return n;
			}
			C.extend({
				hasData: function (t) {
					return at.hasData(t) || st.hasData(t);
				},
				data: function (t, e, n) {
					return at.access(t, e, n);
				},
				removeData: function (t, e) {
					at.remove(t, e);
				},
				_data: function (t, e, n) {
					return st.access(t, e, n);
				},
				_removeData: function (t, e) {
					st.remove(t, e);
				},
			}),
				C.fn.extend({
					data: function (t, e) {
						var n,
							r,
							i,
							o = this[0],
							s = o && o.attributes;
						if (void 0 === t) {
							if (
								this.length &&
								((i = at.get(o)), 1 === o.nodeType && !st.get(o, 'hasDataAttrs'))
							) {
								for (n = s.length; n--; )
									s[n] &&
										0 === (r = s[n].name).indexOf('data-') &&
										((r = rt(r.slice(5))), ut(o, r, i[r]));
								st.set(o, 'hasDataAttrs', !0);
							}
							return i;
						}
						return 'object' == typeof t
							? this.each(function () {
									at.set(this, t);
							  })
							: Z(
									this,
									function (e) {
										var n;
										if (o && void 0 === e)
											return void 0 !== (n = at.get(o, t)) ||
												void 0 !== (n = ut(o, t))
												? n
												: void 0;
										this.each(function () {
											at.set(this, t, e);
										});
									},
									null,
									e,
									arguments.length > 1,
									null,
									!0
							  );
					},
					removeData: function (t) {
						return this.each(function () {
							at.remove(this, t);
						});
					},
				}),
				C.extend({
					queue: function (t, e, n) {
						var r;
						if (t)
							return (
								(e = (e || 'fx') + 'queue'),
								(r = st.get(t, e)),
								n &&
									(!r || Array.isArray(n)
										? (r = st.access(t, e, C.makeArray(n)))
										: r.push(n)),
								r || []
							);
					},
					dequeue: function (t, e) {
						e = e || 'fx';
						var n = C.queue(t, e),
							r = n.length,
							i = n.shift(),
							o = C._queueHooks(t, e);
						'inprogress' === i && ((i = n.shift()), r--),
							i &&
								('fx' === e && n.unshift('inprogress'),
								delete o.stop,
								i.call(
									t,
									function () {
										C.dequeue(t, e);
									},
									o
								)),
							!r && o && o.empty.fire();
					},
					_queueHooks: function (t, e) {
						var n = e + 'queueHooks';
						return (
							st.get(t, n) ||
							st.access(t, n, {
								empty: C.Callbacks('once memory').add(function () {
									st.remove(t, [e + 'queue', n]);
								}),
							})
						);
					},
				}),
				C.fn.extend({
					queue: function (t, e) {
						var n = 2;
						return (
							'string' != typeof t && ((e = t), (t = 'fx'), n--),
							arguments.length < n
								? C.queue(this[0], t)
								: void 0 === e
								? this
								: this.each(function () {
										var n = C.queue(this, t, e);
										C._queueHooks(this, t),
											'fx' === t &&
												'inprogress' !== n[0] &&
												C.dequeue(this, t);
								  })
						);
					},
					dequeue: function (t) {
						return this.each(function () {
							C.dequeue(this, t);
						});
					},
					clearQueue: function (t) {
						return this.queue(t || 'fx', []);
					},
					promise: function (t, e) {
						var n,
							r = 1,
							i = C.Deferred(),
							o = this,
							s = this.length,
							a = function () {
								--r || i.resolveWith(o, [o]);
							};
						for ('string' != typeof t && ((e = t), (t = void 0)), t = t || 'fx'; s--; )
							(n = st.get(o[s], t + 'queueHooks')) &&
								n.empty &&
								(r++, n.empty.add(a));
						return a(), i.promise(e);
					},
				});
			var ft = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
				pt = new RegExp('^(?:([+-])=|)(' + ft + ')([a-z%]*)$', 'i'),
				dt = ['Top', 'Right', 'Bottom', 'Left'],
				ht = b.documentElement,
				gt = function (t) {
					return C.contains(t.ownerDocument, t);
				},
				mt = { composed: !0 };
			ht.getRootNode &&
				(gt = function (t) {
					return C.contains(t.ownerDocument, t) || t.getRootNode(mt) === t.ownerDocument;
				});
			var vt = function (t, e) {
				return (
					'none' === (t = e || t).style.display ||
					('' === t.style.display && gt(t) && 'none' === C.css(t, 'display'))
				);
			};
			function yt(t, e, n, r) {
				var i,
					o,
					s = 20,
					a = r
						? function () {
								return r.cur();
						  }
						: function () {
								return C.css(t, e, '');
						  },
					l = a(),
					c = (n && n[3]) || (C.cssNumber[e] ? '' : 'px'),
					u =
						t.nodeType &&
						(C.cssNumber[e] || ('px' !== c && +l)) &&
						pt.exec(C.css(t, e));
				if (u && u[3] !== c) {
					for (l /= 2, c = c || u[3], u = +l || 1; s--; )
						C.style(t, e, u + c),
							(1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0),
							(u /= o);
					(u *= 2), C.style(t, e, u + c), (n = n || []);
				}
				return (
					n &&
						((u = +u || +l || 0),
						(i = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
						r && ((r.unit = c), (r.start = u), (r.end = i))),
					i
				);
			}
			var bt = {};
			function xt(t) {
				var e,
					n = t.ownerDocument,
					r = t.nodeName,
					i = bt[r];
				return (
					i ||
					((e = n.body.appendChild(n.createElement(r))),
					(i = C.css(e, 'display')),
					e.parentNode.removeChild(e),
					'none' === i && (i = 'block'),
					(bt[r] = i),
					i)
				);
			}
			function wt(t, e) {
				for (var n, r, i = [], o = 0, s = t.length; o < s; o++)
					(r = t[o]).style &&
						((n = r.style.display),
						e
							? ('none' === n &&
									((i[o] = st.get(r, 'display') || null),
									i[o] || (r.style.display = '')),
							  '' === r.style.display && vt(r) && (i[o] = xt(r)))
							: 'none' !== n && ((i[o] = 'none'), st.set(r, 'display', n)));
				for (o = 0; o < s; o++) null != i[o] && (t[o].style.display = i[o]);
				return t;
			}
			C.fn.extend({
				show: function () {
					return wt(this, !0);
				},
				hide: function () {
					return wt(this);
				},
				toggle: function (t) {
					return 'boolean' == typeof t
						? t
							? this.show()
							: this.hide()
						: this.each(function () {
								vt(this) ? C(this).show() : C(this).hide();
						  });
				},
			});
			var At,
				Tt,
				Ct = /^(?:checkbox|radio)$/i,
				St = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
				Et = /^$|^module$|\/(?:java|ecma)script/i;
			(At = b.createDocumentFragment().appendChild(b.createElement('div'))),
				(Tt = b.createElement('input')).setAttribute('type', 'radio'),
				Tt.setAttribute('checked', 'checked'),
				Tt.setAttribute('name', 't'),
				At.appendChild(Tt),
				(m.checkClone = At.cloneNode(!0).cloneNode(!0).lastChild.checked),
				(At.innerHTML = '<textarea>x</textarea>'),
				(m.noCloneChecked = !!At.cloneNode(!0).lastChild.defaultValue),
				(At.innerHTML = '<option></option>'),
				(m.option = !!At.lastChild);
			var kt = {
				thead: [1, '<table>', '</table>'],
				col: [2, '<table><colgroup>', '</colgroup></table>'],
				tr: [2, '<table><tbody>', '</tbody></table>'],
				td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
				_default: [0, '', ''],
			};
			function Dt(t, e) {
				var n;
				return (
					(n =
						void 0 !== t.getElementsByTagName
							? t.getElementsByTagName(e || '*')
							: void 0 !== t.querySelectorAll
							? t.querySelectorAll(e || '*')
							: []),
					void 0 === e || (e && E(t, e)) ? C.merge([t], n) : n
				);
			}
			function jt(t, e) {
				for (var n = 0, r = t.length; n < r; n++)
					st.set(t[n], 'globalEval', !e || st.get(e[n], 'globalEval'));
			}
			(kt.tbody = kt.tfoot = kt.colgroup = kt.caption = kt.thead),
				(kt.th = kt.td),
				m.option ||
					(kt.optgroup = kt.option = [1, "<select multiple='multiple'>", '</select>']);
			var $t = /<|&#?\w+;/;
			function Ot(t, e, n, r, i) {
				for (
					var o,
						s,
						a,
						l,
						c,
						u,
						f = e.createDocumentFragment(),
						p = [],
						d = 0,
						h = t.length;
					d < h;
					d++
				)
					if ((o = t[d]) || 0 === o)
						if ('object' === A(o)) C.merge(p, o.nodeType ? [o] : o);
						else if ($t.test(o)) {
							for (
								s = s || f.appendChild(e.createElement('div')),
									a = (St.exec(o) || ['', ''])[1].toLowerCase(),
									l = kt[a] || kt._default,
									s.innerHTML = l[1] + C.htmlPrefilter(o) + l[2],
									u = l[0];
								u--;

							)
								s = s.lastChild;
							C.merge(p, s.childNodes), ((s = f.firstChild).textContent = '');
						} else p.push(e.createTextNode(o));
				for (f.textContent = '', d = 0; (o = p[d++]); )
					if (r && C.inArray(o, r) > -1) i && i.push(o);
					else if (((c = gt(o)), (s = Dt(f.appendChild(o), 'script')), c && jt(s), n))
						for (u = 0; (o = s[u++]); ) Et.test(o.type || '') && n.push(o);
				return f;
			}
			var Nt = /^([^.]*)(?:\.(.+)|)/;
			function Pt() {
				return !0;
			}
			function Rt() {
				return !1;
			}
			function It(t, e, n, r, i, o) {
				var s, a;
				if ('object' == typeof e) {
					for (a in ('string' != typeof n && ((r = r || n), (n = void 0)), e))
						It(t, a, n, r, e[a], o);
					return t;
				}
				if (
					(null == r && null == i
						? ((i = n), (r = n = void 0))
						: null == i &&
						  ('string' == typeof n
								? ((i = r), (r = void 0))
								: ((i = r), (r = n), (n = void 0))),
					!1 === i)
				)
					i = Rt;
				else if (!i) return t;
				return (
					1 === o &&
						((s = i),
						((i = function (t) {
							return C().off(t), s.apply(this, arguments);
						}).guid = s.guid || (s.guid = C.guid++))),
					t.each(function () {
						C.event.add(this, e, i, r, n);
					})
				);
			}
			function Lt(t, e, n) {
				n
					? (st.set(t, e, !1),
					  C.event.add(t, e, {
							namespace: !1,
							handler: function (t) {
								var n,
									r = st.get(this, e);
								if (1 & t.isTrigger && this[e]) {
									if (r)
										(C.event.special[e] || {}).delegateType &&
											t.stopPropagation();
									else if (
										((r = a.call(arguments)),
										st.set(this, e, r),
										this[e](),
										(n = st.get(this, e)),
										st.set(this, e, !1),
										r !== n)
									)
										return t.stopImmediatePropagation(), t.preventDefault(), n;
								} else
									r &&
										(st.set(this, e, C.event.trigger(r[0], r.slice(1), this)),
										t.stopPropagation(),
										(t.isImmediatePropagationStopped = Pt));
							},
					  }))
					: void 0 === st.get(t, e) && C.event.add(t, e, Pt);
			}
			(C.event = {
				global: {},
				add: function (t, e, n, r, i) {
					var o,
						s,
						a,
						l,
						c,
						u,
						f,
						p,
						d,
						h,
						g,
						m = st.get(t);
					if (it(t))
						for (
							n.handler && ((n = (o = n).handler), (i = o.selector)),
								i && C.find.matchesSelector(ht, i),
								n.guid || (n.guid = C.guid++),
								(l = m.events) || (l = m.events = Object.create(null)),
								(s = m.handle) ||
									(s = m.handle =
										function (e) {
											return void 0 !== C && C.event.triggered !== e.type
												? C.event.dispatch.apply(t, arguments)
												: void 0;
										}),
								c = (e = (e || '').match(V) || ['']).length;
							c--;

						)
							(d = g = (a = Nt.exec(e[c]) || [])[1]),
								(h = (a[2] || '').split('.').sort()),
								d &&
									((f = C.event.special[d] || {}),
									(d = (i ? f.delegateType : f.bindType) || d),
									(f = C.event.special[d] || {}),
									(u = C.extend(
										{
											type: d,
											origType: g,
											data: r,
											handler: n,
											guid: n.guid,
											selector: i,
											needsContext: i && C.expr.match.needsContext.test(i),
											namespace: h.join('.'),
										},
										o
									)),
									(p = l[d]) ||
										(((p = l[d] = []).delegateCount = 0),
										(f.setup && !1 !== f.setup.call(t, r, h, s)) ||
											(t.addEventListener && t.addEventListener(d, s))),
									f.add &&
										(f.add.call(t, u),
										u.handler.guid || (u.handler.guid = n.guid)),
									i ? p.splice(p.delegateCount++, 0, u) : p.push(u),
									(C.event.global[d] = !0));
				},
				remove: function (t, e, n, r, i) {
					var o,
						s,
						a,
						l,
						c,
						u,
						f,
						p,
						d,
						h,
						g,
						m = st.hasData(t) && st.get(t);
					if (m && (l = m.events)) {
						for (c = (e = (e || '').match(V) || ['']).length; c--; )
							if (
								((d = g = (a = Nt.exec(e[c]) || [])[1]),
								(h = (a[2] || '').split('.').sort()),
								d)
							) {
								for (
									f = C.event.special[d] || {},
										p = l[(d = (r ? f.delegateType : f.bindType) || d)] || [],
										a =
											a[2] &&
											new RegExp(
												'(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'
											),
										s = o = p.length;
									o--;

								)
									(u = p[o]),
										(!i && g !== u.origType) ||
											(n && n.guid !== u.guid) ||
											(a && !a.test(u.namespace)) ||
											(r &&
												r !== u.selector &&
												('**' !== r || !u.selector)) ||
											(p.splice(o, 1),
											u.selector && p.delegateCount--,
											f.remove && f.remove.call(t, u));
								s &&
									!p.length &&
									((f.teardown && !1 !== f.teardown.call(t, h, m.handle)) ||
										C.removeEvent(t, d, m.handle),
									delete l[d]);
							} else for (d in l) C.event.remove(t, d + e[c], n, r, !0);
						C.isEmptyObject(l) && st.remove(t, 'handle events');
					}
				},
				dispatch: function (t) {
					var e,
						n,
						r,
						i,
						o,
						s,
						a = new Array(arguments.length),
						l = C.event.fix(t),
						c = (st.get(this, 'events') || Object.create(null))[l.type] || [],
						u = C.event.special[l.type] || {};
					for (a[0] = l, e = 1; e < arguments.length; e++) a[e] = arguments[e];
					if (
						((l.delegateTarget = this),
						!u.preDispatch || !1 !== u.preDispatch.call(this, l))
					) {
						for (
							s = C.event.handlers.call(this, l, c), e = 0;
							(i = s[e++]) && !l.isPropagationStopped();

						)
							for (
								l.currentTarget = i.elem, n = 0;
								(o = i.handlers[n++]) && !l.isImmediatePropagationStopped();

							)
								(l.rnamespace &&
									!1 !== o.namespace &&
									!l.rnamespace.test(o.namespace)) ||
									((l.handleObj = o),
									(l.data = o.data),
									void 0 !==
										(r = (
											(C.event.special[o.origType] || {}).handle || o.handler
										).apply(i.elem, a)) &&
										!1 === (l.result = r) &&
										(l.preventDefault(), l.stopPropagation()));
						return u.postDispatch && u.postDispatch.call(this, l), l.result;
					}
				},
				handlers: function (t, e) {
					var n,
						r,
						i,
						o,
						s,
						a = [],
						l = e.delegateCount,
						c = t.target;
					if (l && c.nodeType && !('click' === t.type && t.button >= 1))
						for (; c !== this; c = c.parentNode || this)
							if (1 === c.nodeType && ('click' !== t.type || !0 !== c.disabled)) {
								for (o = [], s = {}, n = 0; n < l; n++)
									void 0 === s[(i = (r = e[n]).selector + ' ')] &&
										(s[i] = r.needsContext
											? C(i, this).index(c) > -1
											: C.find(i, this, null, [c]).length),
										s[i] && o.push(r);
								o.length && a.push({ elem: c, handlers: o });
							}
					return (c = this), l < e.length && a.push({ elem: c, handlers: e.slice(l) }), a;
				},
				addProp: function (t, e) {
					Object.defineProperty(C.Event.prototype, t, {
						enumerable: !0,
						configurable: !0,
						get: v(e)
							? function () {
									if (this.originalEvent) return e(this.originalEvent);
							  }
							: function () {
									if (this.originalEvent) return this.originalEvent[t];
							  },
						set: function (e) {
							Object.defineProperty(this, t, {
								enumerable: !0,
								configurable: !0,
								writable: !0,
								value: e,
							});
						},
					});
				},
				fix: function (t) {
					return t[C.expando] ? t : new C.Event(t);
				},
				special: {
					load: { noBubble: !0 },
					click: {
						setup: function (t) {
							var e = this || t;
							return (
								Ct.test(e.type) && e.click && E(e, 'input') && Lt(e, 'click', !0),
								!1
							);
						},
						trigger: function (t) {
							var e = this || t;
							return (
								Ct.test(e.type) && e.click && E(e, 'input') && Lt(e, 'click'), !0
							);
						},
						_default: function (t) {
							var e = t.target;
							return (
								(Ct.test(e.type) &&
									e.click &&
									E(e, 'input') &&
									st.get(e, 'click')) ||
								E(e, 'a')
							);
						},
					},
					beforeunload: {
						postDispatch: function (t) {
							void 0 !== t.result &&
								t.originalEvent &&
								(t.originalEvent.returnValue = t.result);
						},
					},
				},
			}),
				(C.removeEvent = function (t, e, n) {
					t.removeEventListener && t.removeEventListener(e, n);
				}),
				(C.Event = function (t, e) {
					if (!(this instanceof C.Event)) return new C.Event(t, e);
					t && t.type
						? ((this.originalEvent = t),
						  (this.type = t.type),
						  (this.isDefaultPrevented =
								t.defaultPrevented ||
								(void 0 === t.defaultPrevented && !1 === t.returnValue)
									? Pt
									: Rt),
						  (this.target =
								t.target && 3 === t.target.nodeType
									? t.target.parentNode
									: t.target),
						  (this.currentTarget = t.currentTarget),
						  (this.relatedTarget = t.relatedTarget))
						: (this.type = t),
						e && C.extend(this, e),
						(this.timeStamp = (t && t.timeStamp) || Date.now()),
						(this[C.expando] = !0);
				}),
				(C.Event.prototype = {
					constructor: C.Event,
					isDefaultPrevented: Rt,
					isPropagationStopped: Rt,
					isImmediatePropagationStopped: Rt,
					isSimulated: !1,
					preventDefault: function () {
						var t = this.originalEvent;
						(this.isDefaultPrevented = Pt),
							t && !this.isSimulated && t.preventDefault();
					},
					stopPropagation: function () {
						var t = this.originalEvent;
						(this.isPropagationStopped = Pt),
							t && !this.isSimulated && t.stopPropagation();
					},
					stopImmediatePropagation: function () {
						var t = this.originalEvent;
						(this.isImmediatePropagationStopped = Pt),
							t && !this.isSimulated && t.stopImmediatePropagation(),
							this.stopPropagation();
					},
				}),
				C.each(
					{
						altKey: !0,
						bubbles: !0,
						cancelable: !0,
						changedTouches: !0,
						ctrlKey: !0,
						detail: !0,
						eventPhase: !0,
						metaKey: !0,
						pageX: !0,
						pageY: !0,
						shiftKey: !0,
						view: !0,
						char: !0,
						code: !0,
						charCode: !0,
						key: !0,
						keyCode: !0,
						button: !0,
						buttons: !0,
						clientX: !0,
						clientY: !0,
						offsetX: !0,
						offsetY: !0,
						pointerId: !0,
						pointerType: !0,
						screenX: !0,
						screenY: !0,
						targetTouches: !0,
						toElement: !0,
						touches: !0,
						which: !0,
					},
					C.event.addProp
				),
				C.each({ focus: 'focusin', blur: 'focusout' }, function (t, e) {
					function n(t) {
						if (b.documentMode) {
							var n = st.get(this, 'handle'),
								r = C.event.fix(t);
							(r.type = 'focusin' === t.type ? 'focus' : 'blur'),
								(r.isSimulated = !0),
								n(t),
								r.target === r.currentTarget && n(r);
						} else C.event.simulate(e, t.target, C.event.fix(t));
					}
					(C.event.special[t] = {
						setup: function () {
							var r;
							if ((Lt(this, t, !0), !b.documentMode)) return !1;
							(r = st.get(this, e)) || this.addEventListener(e, n),
								st.set(this, e, (r || 0) + 1);
						},
						trigger: function () {
							return Lt(this, t), !0;
						},
						teardown: function () {
							var t;
							if (!b.documentMode) return !1;
							(t = st.get(this, e) - 1)
								? st.set(this, e, t)
								: (this.removeEventListener(e, n), st.remove(this, e));
						},
						_default: function (e) {
							return st.get(e.target, t);
						},
						delegateType: e,
					}),
						(C.event.special[e] = {
							setup: function () {
								var r = this.ownerDocument || this.document || this,
									i = b.documentMode ? this : r,
									o = st.get(i, e);
								o ||
									(b.documentMode
										? this.addEventListener(e, n)
										: r.addEventListener(t, n, !0)),
									st.set(i, e, (o || 0) + 1);
							},
							teardown: function () {
								var r = this.ownerDocument || this.document || this,
									i = b.documentMode ? this : r,
									o = st.get(i, e) - 1;
								o
									? st.set(i, e, o)
									: (b.documentMode
											? this.removeEventListener(e, n)
											: r.removeEventListener(t, n, !0),
									  st.remove(i, e));
							},
						});
				}),
				C.each(
					{
						mouseenter: 'mouseover',
						mouseleave: 'mouseout',
						pointerenter: 'pointerover',
						pointerleave: 'pointerout',
					},
					function (t, e) {
						C.event.special[t] = {
							delegateType: e,
							bindType: e,
							handle: function (t) {
								var n,
									r = this,
									i = t.relatedTarget,
									o = t.handleObj;
								return (
									(i && (i === r || C.contains(r, i))) ||
										((t.type = o.origType),
										(n = o.handler.apply(this, arguments)),
										(t.type = e)),
									n
								);
							},
						};
					}
				),
				C.fn.extend({
					on: function (t, e, n, r) {
						return It(this, t, e, n, r);
					},
					one: function (t, e, n, r) {
						return It(this, t, e, n, r, 1);
					},
					off: function (t, e, n) {
						var r, i;
						if (t && t.preventDefault && t.handleObj)
							return (
								(r = t.handleObj),
								C(t.delegateTarget).off(
									r.namespace ? r.origType + '.' + r.namespace : r.origType,
									r.selector,
									r.handler
								),
								this
							);
						if ('object' == typeof t) {
							for (i in t) this.off(i, e, t[i]);
							return this;
						}
						return (
							(!1 !== e && 'function' != typeof e) || ((n = e), (e = void 0)),
							!1 === n && (n = Rt),
							this.each(function () {
								C.event.remove(this, t, n, e);
							})
						);
					},
				});
			var _t = /<script|<style|<link/i,
				Mt = /checked\s*(?:[^=]|=\s*.checked.)/i,
				Ht = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
			function qt(t, e) {
				return (
					(E(t, 'table') &&
						E(11 !== e.nodeType ? e : e.firstChild, 'tr') &&
						C(t).children('tbody')[0]) ||
					t
				);
			}
			function Ut(t) {
				return (t.type = (null !== t.getAttribute('type')) + '/' + t.type), t;
			}
			function Ft(t) {
				return (
					'true/' === (t.type || '').slice(0, 5)
						? (t.type = t.type.slice(5))
						: t.removeAttribute('type'),
					t
				);
			}
			function Bt(t, e) {
				var n, r, i, o, s, a;
				if (1 === e.nodeType) {
					if (st.hasData(t) && (a = st.get(t).events))
						for (i in (st.remove(e, 'handle events'), a))
							for (n = 0, r = a[i].length; n < r; n++) C.event.add(e, i, a[i][n]);
					at.hasData(t) && ((o = at.access(t)), (s = C.extend({}, o)), at.set(e, s));
				}
			}
			function Wt(t, e) {
				var n = e.nodeName.toLowerCase();
				'input' === n && Ct.test(t.type)
					? (e.checked = t.checked)
					: ('input' !== n && 'textarea' !== n) || (e.defaultValue = t.defaultValue);
			}
			function zt(t, e, n, r) {
				e = l(e);
				var i,
					o,
					s,
					a,
					c,
					u,
					f = 0,
					p = t.length,
					d = p - 1,
					h = e[0],
					g = v(h);
				if (g || (p > 1 && 'string' == typeof h && !m.checkClone && Mt.test(h)))
					return t.each(function (i) {
						var o = t.eq(i);
						g && (e[0] = h.call(this, i, o.html())), zt(o, e, n, r);
					});
				if (
					p &&
					((o = (i = Ot(e, t[0].ownerDocument, !1, t, r)).firstChild),
					1 === i.childNodes.length && (i = o),
					o || r)
				) {
					for (a = (s = C.map(Dt(i, 'script'), Ut)).length; f < p; f++)
						(c = i),
							f !== d && ((c = C.clone(c, !0, !0)), a && C.merge(s, Dt(c, 'script'))),
							n.call(t[f], c, f);
					if (a)
						for (u = s[s.length - 1].ownerDocument, C.map(s, Ft), f = 0; f < a; f++)
							(c = s[f]),
								Et.test(c.type || '') &&
									!st.access(c, 'globalEval') &&
									C.contains(u, c) &&
									(c.src && 'module' !== (c.type || '').toLowerCase()
										? C._evalUrl &&
										  !c.noModule &&
										  C._evalUrl(
												c.src,
												{ nonce: c.nonce || c.getAttribute('nonce') },
												u
										  )
										: w(c.textContent.replace(Ht, ''), c, u));
				}
				return t;
			}
			function Vt(t, e, n) {
				for (var r, i = e ? C.filter(e, t) : t, o = 0; null != (r = i[o]); o++)
					n || 1 !== r.nodeType || C.cleanData(Dt(r)),
						r.parentNode &&
							(n && gt(r) && jt(Dt(r, 'script')), r.parentNode.removeChild(r));
				return t;
			}
			C.extend({
				htmlPrefilter: function (t) {
					return t;
				},
				clone: function (t, e, n) {
					var r,
						i,
						o,
						s,
						a = t.cloneNode(!0),
						l = gt(t);
					if (
						!(
							m.noCloneChecked ||
							(1 !== t.nodeType && 11 !== t.nodeType) ||
							C.isXMLDoc(t)
						)
					)
						for (s = Dt(a), r = 0, i = (o = Dt(t)).length; r < i; r++) Wt(o[r], s[r]);
					if (e)
						if (n)
							for (o = o || Dt(t), s = s || Dt(a), r = 0, i = o.length; r < i; r++)
								Bt(o[r], s[r]);
						else Bt(t, a);
					return (s = Dt(a, 'script')).length > 0 && jt(s, !l && Dt(t, 'script')), a;
				},
				cleanData: function (t) {
					for (var e, n, r, i = C.event.special, o = 0; void 0 !== (n = t[o]); o++)
						if (it(n)) {
							if ((e = n[st.expando])) {
								if (e.events)
									for (r in e.events)
										i[r] ? C.event.remove(n, r) : C.removeEvent(n, r, e.handle);
								n[st.expando] = void 0;
							}
							n[at.expando] && (n[at.expando] = void 0);
						}
				},
			}),
				C.fn.extend({
					detach: function (t) {
						return Vt(this, t, !0);
					},
					remove: function (t) {
						return Vt(this, t);
					},
					text: function (t) {
						return Z(
							this,
							function (t) {
								return void 0 === t
									? C.text(this)
									: this.empty().each(function () {
											(1 !== this.nodeType &&
												11 !== this.nodeType &&
												9 !== this.nodeType) ||
												(this.textContent = t);
									  });
							},
							null,
							t,
							arguments.length
						);
					},
					append: function () {
						return zt(this, arguments, function (t) {
							(1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) ||
								qt(this, t).appendChild(t);
						});
					},
					prepend: function () {
						return zt(this, arguments, function (t) {
							if (
								1 === this.nodeType ||
								11 === this.nodeType ||
								9 === this.nodeType
							) {
								var e = qt(this, t);
								e.insertBefore(t, e.firstChild);
							}
						});
					},
					before: function () {
						return zt(this, arguments, function (t) {
							this.parentNode && this.parentNode.insertBefore(t, this);
						});
					},
					after: function () {
						return zt(this, arguments, function (t) {
							this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
						});
					},
					empty: function () {
						for (var t, e = 0; null != (t = this[e]); e++)
							1 === t.nodeType && (C.cleanData(Dt(t, !1)), (t.textContent = ''));
						return this;
					},
					clone: function (t, e) {
						return (
							(t = null != t && t),
							(e = null == e ? t : e),
							this.map(function () {
								return C.clone(this, t, e);
							})
						);
					},
					html: function (t) {
						return Z(
							this,
							function (t) {
								var e = this[0] || {},
									n = 0,
									r = this.length;
								if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
								if (
									'string' == typeof t &&
									!_t.test(t) &&
									!kt[(St.exec(t) || ['', ''])[1].toLowerCase()]
								) {
									t = C.htmlPrefilter(t);
									try {
										for (; n < r; n++)
											1 === (e = this[n] || {}).nodeType &&
												(C.cleanData(Dt(e, !1)), (e.innerHTML = t));
										e = 0;
									} catch (t) {}
								}
								e && this.empty().append(t);
							},
							null,
							t,
							arguments.length
						);
					},
					replaceWith: function () {
						var t = [];
						return zt(
							this,
							arguments,
							function (e) {
								var n = this.parentNode;
								C.inArray(this, t) < 0 &&
									(C.cleanData(Dt(this)), n && n.replaceChild(e, this));
							},
							t
						);
					},
				}),
				C.each(
					{
						appendTo: 'append',
						prependTo: 'prepend',
						insertBefore: 'before',
						insertAfter: 'after',
						replaceAll: 'replaceWith',
					},
					function (t, e) {
						C.fn[t] = function (t) {
							for (var n, r = [], i = C(t), o = i.length - 1, s = 0; s <= o; s++)
								(n = s === o ? this : this.clone(!0)),
									C(i[s])[e](n),
									c.apply(r, n.get());
							return this.pushStack(r);
						};
					}
				);
			var Xt = new RegExp('^(' + ft + ')(?!px)[a-z%]+$', 'i'),
				Kt = /^--/,
				Gt = function (t) {
					var e = t.ownerDocument.defaultView;
					return (e && e.opener) || (e = n), e.getComputedStyle(t);
				},
				Yt = function (t, e, n) {
					var r,
						i,
						o = {};
					for (i in e) (o[i] = t.style[i]), (t.style[i] = e[i]);
					for (i in ((r = n.call(t)), e)) t.style[i] = o[i];
					return r;
				},
				Jt = new RegExp(dt.join('|'), 'i');
			function Qt(t, e, n) {
				var r,
					i,
					o,
					s,
					a = Kt.test(e),
					l = t.style;
				return (
					(n = n || Gt(t)) &&
						((s = n.getPropertyValue(e) || n[e]),
						a && s && (s = s.replace(O, '$1') || void 0),
						'' !== s || gt(t) || (s = C.style(t, e)),
						!m.pixelBoxStyles() &&
							Xt.test(s) &&
							Jt.test(e) &&
							((r = l.width),
							(i = l.minWidth),
							(o = l.maxWidth),
							(l.minWidth = l.maxWidth = l.width = s),
							(s = n.width),
							(l.width = r),
							(l.minWidth = i),
							(l.maxWidth = o))),
					void 0 !== s ? s + '' : s
				);
			}
			function Zt(t, e) {
				return {
					get: function () {
						if (!t()) return (this.get = e).apply(this, arguments);
						delete this.get;
					},
				};
			}
			!(function () {
				function t() {
					if (u) {
						(c.style.cssText =
							'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
							(u.style.cssText =
								'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
							ht.appendChild(c).appendChild(u);
						var t = n.getComputedStyle(u);
						(r = '1%' !== t.top),
							(l = 12 === e(t.marginLeft)),
							(u.style.right = '60%'),
							(s = 36 === e(t.right)),
							(i = 36 === e(t.width)),
							(u.style.position = 'absolute'),
							(o = 12 === e(u.offsetWidth / 3)),
							ht.removeChild(c),
							(u = null);
					}
				}
				function e(t) {
					return Math.round(parseFloat(t));
				}
				var r,
					i,
					o,
					s,
					a,
					l,
					c = b.createElement('div'),
					u = b.createElement('div');
				u.style &&
					((u.style.backgroundClip = 'content-box'),
					(u.cloneNode(!0).style.backgroundClip = ''),
					(m.clearCloneStyle = 'content-box' === u.style.backgroundClip),
					C.extend(m, {
						boxSizingReliable: function () {
							return t(), i;
						},
						pixelBoxStyles: function () {
							return t(), s;
						},
						pixelPosition: function () {
							return t(), r;
						},
						reliableMarginLeft: function () {
							return t(), l;
						},
						scrollboxSize: function () {
							return t(), o;
						},
						reliableTrDimensions: function () {
							var t, e, r, i;
							return (
								null == a &&
									((t = b.createElement('table')),
									(e = b.createElement('tr')),
									(r = b.createElement('div')),
									(t.style.cssText =
										'position:absolute;left:-11111px;border-collapse:separate'),
									(e.style.cssText = 'box-sizing:content-box;border:1px solid'),
									(e.style.height = '1px'),
									(r.style.height = '9px'),
									(r.style.display = 'block'),
									ht.appendChild(t).appendChild(e).appendChild(r),
									(i = n.getComputedStyle(e)),
									(a =
										parseInt(i.height, 10) +
											parseInt(i.borderTopWidth, 10) +
											parseInt(i.borderBottomWidth, 10) ===
										e.offsetHeight),
									ht.removeChild(t)),
								a
							);
						},
					}));
			})();
			var te = ['Webkit', 'Moz', 'ms'],
				ee = b.createElement('div').style,
				ne = {};
			function re(t) {
				var e = C.cssProps[t] || ne[t];
				return (
					e ||
					(t in ee
						? t
						: (ne[t] =
								(function (t) {
									for (
										var e = t[0].toUpperCase() + t.slice(1), n = te.length;
										n--;

									)
										if ((t = te[n] + e) in ee) return t;
								})(t) || t))
				);
			}
			var ie = /^(none|table(?!-c[ea]).+)/,
				oe = { position: 'absolute', visibility: 'hidden', display: 'block' },
				se = { letterSpacing: '0', fontWeight: '400' };
			function ae(t, e, n) {
				var r = pt.exec(e);
				return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : e;
			}
			function le(t, e, n, r, i, o) {
				var s = 'width' === e ? 1 : 0,
					a = 0,
					l = 0,
					c = 0;
				if (n === (r ? 'border' : 'content')) return 0;
				for (; s < 4; s += 2)
					'margin' === n && (c += C.css(t, n + dt[s], !0, i)),
						r
							? ('content' === n && (l -= C.css(t, 'padding' + dt[s], !0, i)),
							  'margin' !== n && (l -= C.css(t, 'border' + dt[s] + 'Width', !0, i)))
							: ((l += C.css(t, 'padding' + dt[s], !0, i)),
							  'padding' !== n
									? (l += C.css(t, 'border' + dt[s] + 'Width', !0, i))
									: (a += C.css(t, 'border' + dt[s] + 'Width', !0, i)));
				return (
					!r &&
						o >= 0 &&
						(l +=
							Math.max(
								0,
								Math.ceil(
									t['offset' + e[0].toUpperCase() + e.slice(1)] - o - l - a - 0.5
								)
							) || 0),
					l + c
				);
			}
			function ce(t, e, n) {
				var r = Gt(t),
					i =
						(!m.boxSizingReliable() || n) &&
						'border-box' === C.css(t, 'boxSizing', !1, r),
					o = i,
					s = Qt(t, e, r),
					a = 'offset' + e[0].toUpperCase() + e.slice(1);
				if (Xt.test(s)) {
					if (!n) return s;
					s = 'auto';
				}
				return (
					((!m.boxSizingReliable() && i) ||
						(!m.reliableTrDimensions() && E(t, 'tr')) ||
						'auto' === s ||
						(!parseFloat(s) && 'inline' === C.css(t, 'display', !1, r))) &&
						t.getClientRects().length &&
						((i = 'border-box' === C.css(t, 'boxSizing', !1, r)),
						(o = a in t) && (s = t[a])),
					(s = parseFloat(s) || 0) +
						le(t, e, n || (i ? 'border' : 'content'), o, r, s) +
						'px'
				);
			}
			function ue(t, e, n, r, i) {
				return new ue.prototype.init(t, e, n, r, i);
			}
			C.extend({
				cssHooks: {
					opacity: {
						get: function (t, e) {
							if (e) {
								var n = Qt(t, 'opacity');
								return '' === n ? '1' : n;
							}
						},
					},
				},
				cssNumber: {
					animationIterationCount: !0,
					aspectRatio: !0,
					borderImageSlice: !0,
					columnCount: !0,
					flexGrow: !0,
					flexShrink: !0,
					fontWeight: !0,
					gridArea: !0,
					gridColumn: !0,
					gridColumnEnd: !0,
					gridColumnStart: !0,
					gridRow: !0,
					gridRowEnd: !0,
					gridRowStart: !0,
					lineHeight: !0,
					opacity: !0,
					order: !0,
					orphans: !0,
					scale: !0,
					widows: !0,
					zIndex: !0,
					zoom: !0,
					fillOpacity: !0,
					floodOpacity: !0,
					stopOpacity: !0,
					strokeMiterlimit: !0,
					strokeOpacity: !0,
				},
				cssProps: {},
				style: function (t, e, n, r) {
					if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
						var i,
							o,
							s,
							a = rt(e),
							l = Kt.test(e),
							c = t.style;
						if ((l || (e = re(a)), (s = C.cssHooks[e] || C.cssHooks[a]), void 0 === n))
							return s && 'get' in s && void 0 !== (i = s.get(t, !1, r)) ? i : c[e];
						'string' === (o = typeof n) &&
							(i = pt.exec(n)) &&
							i[1] &&
							((n = yt(t, e, i)), (o = 'number')),
							null != n &&
								n == n &&
								('number' !== o ||
									l ||
									(n += (i && i[3]) || (C.cssNumber[a] ? '' : 'px')),
								m.clearCloneStyle ||
									'' !== n ||
									0 !== e.indexOf('background') ||
									(c[e] = 'inherit'),
								(s && 'set' in s && void 0 === (n = s.set(t, n, r))) ||
									(l ? c.setProperty(e, n) : (c[e] = n)));
					}
				},
				css: function (t, e, n, r) {
					var i,
						o,
						s,
						a = rt(e);
					return (
						Kt.test(e) || (e = re(a)),
						(s = C.cssHooks[e] || C.cssHooks[a]) && 'get' in s && (i = s.get(t, !0, n)),
						void 0 === i && (i = Qt(t, e, r)),
						'normal' === i && e in se && (i = se[e]),
						'' === n || n
							? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
							: i
					);
				},
			}),
				C.each(['height', 'width'], function (t, e) {
					C.cssHooks[e] = {
						get: function (t, n, r) {
							if (n)
								return !ie.test(C.css(t, 'display')) ||
									(t.getClientRects().length && t.getBoundingClientRect().width)
									? ce(t, e, r)
									: Yt(t, oe, function () {
											return ce(t, e, r);
									  });
						},
						set: function (t, n, r) {
							var i,
								o = Gt(t),
								s = !m.scrollboxSize() && 'absolute' === o.position,
								a = (s || r) && 'border-box' === C.css(t, 'boxSizing', !1, o),
								l = r ? le(t, e, r, a, o) : 0;
							return (
								a &&
									s &&
									(l -= Math.ceil(
										t['offset' + e[0].toUpperCase() + e.slice(1)] -
											parseFloat(o[e]) -
											le(t, e, 'border', !1, o) -
											0.5
									)),
								l &&
									(i = pt.exec(n)) &&
									'px' !== (i[3] || 'px') &&
									((t.style[e] = n), (n = C.css(t, e))),
								ae(0, n, l)
							);
						},
					};
				}),
				(C.cssHooks.marginLeft = Zt(m.reliableMarginLeft, function (t, e) {
					if (e)
						return (
							(parseFloat(Qt(t, 'marginLeft')) ||
								t.getBoundingClientRect().left -
									Yt(t, { marginLeft: 0 }, function () {
										return t.getBoundingClientRect().left;
									})) + 'px'
						);
				})),
				C.each({ margin: '', padding: '', border: 'Width' }, function (t, e) {
					(C.cssHooks[t + e] = {
						expand: function (n) {
							for (
								var r = 0, i = {}, o = 'string' == typeof n ? n.split(' ') : [n];
								r < 4;
								r++
							)
								i[t + dt[r] + e] = o[r] || o[r - 2] || o[0];
							return i;
						},
					}),
						'margin' !== t && (C.cssHooks[t + e].set = ae);
				}),
				C.fn.extend({
					css: function (t, e) {
						return Z(
							this,
							function (t, e, n) {
								var r,
									i,
									o = {},
									s = 0;
								if (Array.isArray(e)) {
									for (r = Gt(t), i = e.length; s < i; s++)
										o[e[s]] = C.css(t, e[s], !1, r);
									return o;
								}
								return void 0 !== n ? C.style(t, e, n) : C.css(t, e);
							},
							t,
							e,
							arguments.length > 1
						);
					},
				}),
				(C.Tween = ue),
				(ue.prototype = {
					constructor: ue,
					init: function (t, e, n, r, i, o) {
						(this.elem = t),
							(this.prop = n),
							(this.easing = i || C.easing._default),
							(this.options = e),
							(this.start = this.now = this.cur()),
							(this.end = r),
							(this.unit = o || (C.cssNumber[n] ? '' : 'px'));
					},
					cur: function () {
						var t = ue.propHooks[this.prop];
						return t && t.get ? t.get(this) : ue.propHooks._default.get(this);
					},
					run: function (t) {
						var e,
							n = ue.propHooks[this.prop];
						return (
							this.options.duration
								? (this.pos = e =
										C.easing[this.easing](
											t,
											this.options.duration * t,
											0,
											1,
											this.options.duration
										))
								: (this.pos = e = t),
							(this.now = (this.end - this.start) * e + this.start),
							this.options.step && this.options.step.call(this.elem, this.now, this),
							n && n.set ? n.set(this) : ue.propHooks._default.set(this),
							this
						);
					},
				}),
				(ue.prototype.init.prototype = ue.prototype),
				(ue.propHooks = {
					_default: {
						get: function (t) {
							var e;
							return 1 !== t.elem.nodeType ||
								(null != t.elem[t.prop] && null == t.elem.style[t.prop])
								? t.elem[t.prop]
								: (e = C.css(t.elem, t.prop, '')) && 'auto' !== e
								? e
								: 0;
						},
						set: function (t) {
							C.fx.step[t.prop]
								? C.fx.step[t.prop](t)
								: 1 !== t.elem.nodeType ||
								  (!C.cssHooks[t.prop] && null == t.elem.style[re(t.prop)])
								? (t.elem[t.prop] = t.now)
								: C.style(t.elem, t.prop, t.now + t.unit);
						},
					},
				}),
				(ue.propHooks.scrollTop = ue.propHooks.scrollLeft =
					{
						set: function (t) {
							t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
						},
					}),
				(C.easing = {
					linear: function (t) {
						return t;
					},
					swing: function (t) {
						return 0.5 - Math.cos(t * Math.PI) / 2;
					},
					_default: 'swing',
				}),
				(C.fx = ue.prototype.init),
				(C.fx.step = {});
			var fe,
				pe,
				de = /^(?:toggle|show|hide)$/,
				he = /queueHooks$/;
			function ge() {
				pe &&
					(!1 === b.hidden && n.requestAnimationFrame
						? n.requestAnimationFrame(ge)
						: n.setTimeout(ge, C.fx.interval),
					C.fx.tick());
			}
			function me() {
				return (
					n.setTimeout(function () {
						fe = void 0;
					}),
					(fe = Date.now())
				);
			}
			function ve(t, e) {
				var n,
					r = 0,
					i = { height: t };
				for (e = e ? 1 : 0; r < 4; r += 2 - e)
					i['margin' + (n = dt[r])] = i['padding' + n] = t;
				return e && (i.opacity = i.width = t), i;
			}
			function ye(t, e, n) {
				for (
					var r, i = (be.tweeners[e] || []).concat(be.tweeners['*']), o = 0, s = i.length;
					o < s;
					o++
				)
					if ((r = i[o].call(n, e, t))) return r;
			}
			function be(t, e, n) {
				var r,
					i,
					o = 0,
					s = be.prefilters.length,
					a = C.Deferred().always(function () {
						delete l.elem;
					}),
					l = function () {
						if (i) return !1;
						for (
							var e = fe || me(),
								n = Math.max(0, c.startTime + c.duration - e),
								r = 1 - (n / c.duration || 0),
								o = 0,
								s = c.tweens.length;
							o < s;
							o++
						)
							c.tweens[o].run(r);
						return (
							a.notifyWith(t, [c, r, n]),
							r < 1 && s
								? n
								: (s || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
						);
					},
					c = a.promise({
						elem: t,
						props: C.extend({}, e),
						opts: C.extend(!0, { specialEasing: {}, easing: C.easing._default }, n),
						originalProperties: e,
						originalOptions: n,
						startTime: fe || me(),
						duration: n.duration,
						tweens: [],
						createTween: function (e, n) {
							var r = C.Tween(
								t,
								c.opts,
								e,
								n,
								c.opts.specialEasing[e] || c.opts.easing
							);
							return c.tweens.push(r), r;
						},
						stop: function (e) {
							var n = 0,
								r = e ? c.tweens.length : 0;
							if (i) return this;
							for (i = !0; n < r; n++) c.tweens[n].run(1);
							return (
								e
									? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e]))
									: a.rejectWith(t, [c, e]),
								this
							);
						},
					}),
					u = c.props;
				for (
					!(function (t, e) {
						var n, r, i, o, s;
						for (n in t)
							if (
								((i = e[(r = rt(n))]),
								(o = t[n]),
								Array.isArray(o) && ((i = o[1]), (o = t[n] = o[0])),
								n !== r && ((t[r] = o), delete t[n]),
								(s = C.cssHooks[r]) && ('expand' in s))
							)
								for (n in ((o = s.expand(o)), delete t[r], o))
									(n in t) || ((t[n] = o[n]), (e[n] = i));
							else e[r] = i;
					})(u, c.opts.specialEasing);
					o < s;
					o++
				)
					if ((r = be.prefilters[o].call(c, t, u, c.opts)))
						return (
							v(r.stop) &&
								(C._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)),
							r
						);
				return (
					C.map(u, ye, c),
					v(c.opts.start) && c.opts.start.call(t, c),
					c
						.progress(c.opts.progress)
						.done(c.opts.done, c.opts.complete)
						.fail(c.opts.fail)
						.always(c.opts.always),
					C.fx.timer(C.extend(l, { elem: t, anim: c, queue: c.opts.queue })),
					c
				);
			}
			(C.Animation = C.extend(be, {
				tweeners: {
					'*': [
						function (t, e) {
							var n = this.createTween(t, e);
							return yt(n.elem, t, pt.exec(e), n), n;
						},
					],
				},
				tweener: function (t, e) {
					v(t) ? ((e = t), (t = ['*'])) : (t = t.match(V));
					for (var n, r = 0, i = t.length; r < i; r++)
						(n = t[r]),
							(be.tweeners[n] = be.tweeners[n] || []),
							be.tweeners[n].unshift(e);
				},
				prefilters: [
					function (t, e, n) {
						var r,
							i,
							o,
							s,
							a,
							l,
							c,
							u,
							f = 'width' in e || 'height' in e,
							p = this,
							d = {},
							h = t.style,
							g = t.nodeType && vt(t),
							m = st.get(t, 'fxshow');
						for (r in (n.queue ||
							(null == (s = C._queueHooks(t, 'fx')).unqueued &&
								((s.unqueued = 0),
								(a = s.empty.fire),
								(s.empty.fire = function () {
									s.unqueued || a();
								})),
							s.unqueued++,
							p.always(function () {
								p.always(function () {
									s.unqueued--, C.queue(t, 'fx').length || s.empty.fire();
								});
							})),
						e))
							if (((i = e[r]), de.test(i))) {
								if (
									(delete e[r],
									(o = o || 'toggle' === i),
									i === (g ? 'hide' : 'show'))
								) {
									if ('show' !== i || !m || void 0 === m[r]) continue;
									g = !0;
								}
								d[r] = (m && m[r]) || C.style(t, r);
							}
						if ((l = !C.isEmptyObject(e)) || !C.isEmptyObject(d))
							for (r in (f &&
								1 === t.nodeType &&
								((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
								null == (c = m && m.display) && (c = st.get(t, 'display')),
								'none' === (u = C.css(t, 'display')) &&
									(c
										? (u = c)
										: (wt([t], !0),
										  (c = t.style.display || c),
										  (u = C.css(t, 'display')),
										  wt([t]))),
								('inline' === u || ('inline-block' === u && null != c)) &&
									'none' === C.css(t, 'float') &&
									(l ||
										(p.done(function () {
											h.display = c;
										}),
										null == c &&
											((u = h.display), (c = 'none' === u ? '' : u))),
									(h.display = 'inline-block'))),
							n.overflow &&
								((h.overflow = 'hidden'),
								p.always(function () {
									(h.overflow = n.overflow[0]),
										(h.overflowX = n.overflow[1]),
										(h.overflowY = n.overflow[2]);
								})),
							(l = !1),
							d))
								l ||
									(m
										? 'hidden' in m && (g = m.hidden)
										: (m = st.access(t, 'fxshow', { display: c })),
									o && (m.hidden = !g),
									g && wt([t], !0),
									p.done(function () {
										for (r in (g || wt([t]), st.remove(t, 'fxshow'), d))
											C.style(t, r, d[r]);
									})),
									(l = ye(g ? m[r] : 0, r, p)),
									r in m ||
										((m[r] = l.start), g && ((l.end = l.start), (l.start = 0)));
					},
				],
				prefilter: function (t, e) {
					e ? be.prefilters.unshift(t) : be.prefilters.push(t);
				},
			})),
				(C.speed = function (t, e, n) {
					var r =
						t && 'object' == typeof t
							? C.extend({}, t)
							: {
									complete: n || (!n && e) || (v(t) && t),
									duration: t,
									easing: (n && e) || (e && !v(e) && e),
							  };
					return (
						C.fx.off
							? (r.duration = 0)
							: 'number' != typeof r.duration &&
							  (r.duration in C.fx.speeds
									? (r.duration = C.fx.speeds[r.duration])
									: (r.duration = C.fx.speeds._default)),
						(null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
						(r.old = r.complete),
						(r.complete = function () {
							v(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue);
						}),
						r
					);
				}),
				C.fn.extend({
					fadeTo: function (t, e, n, r) {
						return this.filter(vt)
							.css('opacity', 0)
							.show()
							.end()
							.animate({ opacity: e }, t, n, r);
					},
					animate: function (t, e, n, r) {
						var i = C.isEmptyObject(t),
							o = C.speed(e, n, r),
							s = function () {
								var e = be(this, C.extend({}, t), o);
								(i || st.get(this, 'finish')) && e.stop(!0);
							};
						return (
							(s.finish = s),
							i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
						);
					},
					stop: function (t, e, n) {
						var r = function (t) {
							var e = t.stop;
							delete t.stop, e(n);
						};
						return (
							'string' != typeof t && ((n = e), (e = t), (t = void 0)),
							e && this.queue(t || 'fx', []),
							this.each(function () {
								var e = !0,
									i = null != t && t + 'queueHooks',
									o = C.timers,
									s = st.get(this);
								if (i) s[i] && s[i].stop && r(s[i]);
								else for (i in s) s[i] && s[i].stop && he.test(i) && r(s[i]);
								for (i = o.length; i--; )
									o[i].elem !== this ||
										(null != t && o[i].queue !== t) ||
										(o[i].anim.stop(n), (e = !1), o.splice(i, 1));
								(!e && n) || C.dequeue(this, t);
							})
						);
					},
					finish: function (t) {
						return (
							!1 !== t && (t = t || 'fx'),
							this.each(function () {
								var e,
									n = st.get(this),
									r = n[t + 'queue'],
									i = n[t + 'queueHooks'],
									o = C.timers,
									s = r ? r.length : 0;
								for (
									n.finish = !0,
										C.queue(this, t, []),
										i && i.stop && i.stop.call(this, !0),
										e = o.length;
									e--;

								)
									o[e].elem === this &&
										o[e].queue === t &&
										(o[e].anim.stop(!0), o.splice(e, 1));
								for (e = 0; e < s; e++)
									r[e] && r[e].finish && r[e].finish.call(this);
								delete n.finish;
							})
						);
					},
				}),
				C.each(['toggle', 'show', 'hide'], function (t, e) {
					var n = C.fn[e];
					C.fn[e] = function (t, r, i) {
						return null == t || 'boolean' == typeof t
							? n.apply(this, arguments)
							: this.animate(ve(e, !0), t, r, i);
					};
				}),
				C.each(
					{
						slideDown: ve('show'),
						slideUp: ve('hide'),
						slideToggle: ve('toggle'),
						fadeIn: { opacity: 'show' },
						fadeOut: { opacity: 'hide' },
						fadeToggle: { opacity: 'toggle' },
					},
					function (t, e) {
						C.fn[t] = function (t, n, r) {
							return this.animate(e, t, n, r);
						};
					}
				),
				(C.timers = []),
				(C.fx.tick = function () {
					var t,
						e = 0,
						n = C.timers;
					for (fe = Date.now(); e < n.length; e++)
						(t = n[e])() || n[e] !== t || n.splice(e--, 1);
					n.length || C.fx.stop(), (fe = void 0);
				}),
				(C.fx.timer = function (t) {
					C.timers.push(t), C.fx.start();
				}),
				(C.fx.interval = 13),
				(C.fx.start = function () {
					pe || ((pe = !0), ge());
				}),
				(C.fx.stop = function () {
					pe = null;
				}),
				(C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
				(C.fn.delay = function (t, e) {
					return (
						(t = (C.fx && C.fx.speeds[t]) || t),
						(e = e || 'fx'),
						this.queue(e, function (e, r) {
							var i = n.setTimeout(e, t);
							r.stop = function () {
								n.clearTimeout(i);
							};
						})
					);
				}),
				(function () {
					var t = b.createElement('input'),
						e = b.createElement('select').appendChild(b.createElement('option'));
					(t.type = 'checkbox'),
						(m.checkOn = '' !== t.value),
						(m.optSelected = e.selected),
						((t = b.createElement('input')).value = 't'),
						(t.type = 'radio'),
						(m.radioValue = 't' === t.value);
				})();
			var xe,
				we = C.expr.attrHandle;
			C.fn.extend({
				attr: function (t, e) {
					return Z(this, C.attr, t, e, arguments.length > 1);
				},
				removeAttr: function (t) {
					return this.each(function () {
						C.removeAttr(this, t);
					});
				},
			}),
				C.extend({
					attr: function (t, e, n) {
						var r,
							i,
							o = t.nodeType;
						if (3 !== o && 8 !== o && 2 !== o)
							return void 0 === t.getAttribute
								? C.prop(t, e, n)
								: ((1 === o && C.isXMLDoc(t)) ||
										(i =
											C.attrHooks[e.toLowerCase()] ||
											(C.expr.match.bool.test(e) ? xe : void 0)),
								  void 0 !== n
										? null === n
											? void C.removeAttr(t, e)
											: i && 'set' in i && void 0 !== (r = i.set(t, n, e))
											? r
											: (t.setAttribute(e, n + ''), n)
										: i && 'get' in i && null !== (r = i.get(t, e))
										? r
										: null == (r = C.find.attr(t, e))
										? void 0
										: r);
					},
					attrHooks: {
						type: {
							set: function (t, e) {
								if (!m.radioValue && 'radio' === e && E(t, 'input')) {
									var n = t.value;
									return t.setAttribute('type', e), n && (t.value = n), e;
								}
							},
						},
					},
					removeAttr: function (t, e) {
						var n,
							r = 0,
							i = e && e.match(V);
						if (i && 1 === t.nodeType) for (; (n = i[r++]); ) t.removeAttribute(n);
					},
				}),
				(xe = {
					set: function (t, e, n) {
						return !1 === e ? C.removeAttr(t, n) : t.setAttribute(n, n), n;
					},
				}),
				C.each(C.expr.match.bool.source.match(/\w+/g), function (t, e) {
					var n = we[e] || C.find.attr;
					we[e] = function (t, e, r) {
						var i,
							o,
							s = e.toLowerCase();
						return (
							r ||
								((o = we[s]),
								(we[s] = i),
								(i = null != n(t, e, r) ? s : null),
								(we[s] = o)),
							i
						);
					};
				});
			var Ae = /^(?:input|select|textarea|button)$/i,
				Te = /^(?:a|area)$/i;
			function Ce(t) {
				return (t.match(V) || []).join(' ');
			}
			function Se(t) {
				return (t.getAttribute && t.getAttribute('class')) || '';
			}
			function Ee(t) {
				return Array.isArray(t) ? t : ('string' == typeof t && t.match(V)) || [];
			}
			C.fn.extend({
				prop: function (t, e) {
					return Z(this, C.prop, t, e, arguments.length > 1);
				},
				removeProp: function (t) {
					return this.each(function () {
						delete this[C.propFix[t] || t];
					});
				},
			}),
				C.extend({
					prop: function (t, e, n) {
						var r,
							i,
							o = t.nodeType;
						if (3 !== o && 8 !== o && 2 !== o)
							return (
								(1 === o && C.isXMLDoc(t)) ||
									((e = C.propFix[e] || e), (i = C.propHooks[e])),
								void 0 !== n
									? i && 'set' in i && void 0 !== (r = i.set(t, n, e))
										? r
										: (t[e] = n)
									: i && 'get' in i && null !== (r = i.get(t, e))
									? r
									: t[e]
							);
					},
					propHooks: {
						tabIndex: {
							get: function (t) {
								var e = C.find.attr(t, 'tabindex');
								return e
									? parseInt(e, 10)
									: Ae.test(t.nodeName) || (Te.test(t.nodeName) && t.href)
									? 0
									: -1;
							},
						},
					},
					propFix: { for: 'htmlFor', class: 'className' },
				}),
				m.optSelected ||
					(C.propHooks.selected = {
						get: function (t) {
							var e = t.parentNode;
							return e && e.parentNode && e.parentNode.selectedIndex, null;
						},
						set: function (t) {
							var e = t.parentNode;
							e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
						},
					}),
				C.each(
					[
						'tabIndex',
						'readOnly',
						'maxLength',
						'cellSpacing',
						'cellPadding',
						'rowSpan',
						'colSpan',
						'useMap',
						'frameBorder',
						'contentEditable',
					],
					function () {
						C.propFix[this.toLowerCase()] = this;
					}
				),
				C.fn.extend({
					addClass: function (t) {
						var e, n, r, i, o, s;
						return v(t)
							? this.each(function (e) {
									C(this).addClass(t.call(this, e, Se(this)));
							  })
							: (e = Ee(t)).length
							? this.each(function () {
									if (
										((r = Se(this)),
										(n = 1 === this.nodeType && ' ' + Ce(r) + ' '))
									) {
										for (o = 0; o < e.length; o++)
											(i = e[o]),
												n.indexOf(' ' + i + ' ') < 0 && (n += i + ' ');
										(s = Ce(n)), r !== s && this.setAttribute('class', s);
									}
							  })
							: this;
					},
					removeClass: function (t) {
						var e, n, r, i, o, s;
						return v(t)
							? this.each(function (e) {
									C(this).removeClass(t.call(this, e, Se(this)));
							  })
							: arguments.length
							? (e = Ee(t)).length
								? this.each(function () {
										if (
											((r = Se(this)),
											(n = 1 === this.nodeType && ' ' + Ce(r) + ' '))
										) {
											for (o = 0; o < e.length; o++)
												for (i = e[o]; n.indexOf(' ' + i + ' ') > -1; )
													n = n.replace(' ' + i + ' ', ' ');
											(s = Ce(n)), r !== s && this.setAttribute('class', s);
										}
								  })
								: this
							: this.attr('class', '');
					},
					toggleClass: function (t, e) {
						var n,
							r,
							i,
							o,
							s = typeof t,
							a = 'string' === s || Array.isArray(t);
						return v(t)
							? this.each(function (n) {
									C(this).toggleClass(t.call(this, n, Se(this), e), e);
							  })
							: 'boolean' == typeof e && a
							? e
								? this.addClass(t)
								: this.removeClass(t)
							: ((n = Ee(t)),
							  this.each(function () {
									if (a)
										for (o = C(this), i = 0; i < n.length; i++)
											(r = n[i]),
												o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
									else
										(void 0 !== t && 'boolean' !== s) ||
											((r = Se(this)) && st.set(this, '__className__', r),
											this.setAttribute &&
												this.setAttribute(
													'class',
													r || !1 === t
														? ''
														: st.get(this, '__className__') || ''
												));
							  }));
					},
					hasClass: function (t) {
						var e,
							n,
							r = 0;
						for (e = ' ' + t + ' '; (n = this[r++]); )
							if (1 === n.nodeType && (' ' + Ce(Se(n)) + ' ').indexOf(e) > -1)
								return !0;
						return !1;
					},
				});
			var ke = /\r/g;
			C.fn.extend({
				val: function (t) {
					var e,
						n,
						r,
						i = this[0];
					return arguments.length
						? ((r = v(t)),
						  this.each(function (n) {
								var i;
								1 === this.nodeType &&
									(null == (i = r ? t.call(this, n, C(this).val()) : t)
										? (i = '')
										: 'number' == typeof i
										? (i += '')
										: Array.isArray(i) &&
										  (i = C.map(i, function (t) {
												return null == t ? '' : t + '';
										  })),
									((e =
										C.valHooks[this.type] ||
										C.valHooks[this.nodeName.toLowerCase()]) &&
										'set' in e &&
										void 0 !== e.set(this, i, 'value')) ||
										(this.value = i));
						  }))
						: i
						? (e = C.valHooks[i.type] || C.valHooks[i.nodeName.toLowerCase()]) &&
						  'get' in e &&
						  void 0 !== (n = e.get(i, 'value'))
							? n
							: 'string' == typeof (n = i.value)
							? n.replace(ke, '')
							: null == n
							? ''
							: n
						: void 0;
				},
			}),
				C.extend({
					valHooks: {
						option: {
							get: function (t) {
								var e = C.find.attr(t, 'value');
								return null != e ? e : Ce(C.text(t));
							},
						},
						select: {
							get: function (t) {
								var e,
									n,
									r,
									i = t.options,
									o = t.selectedIndex,
									s = 'select-one' === t.type,
									a = s ? null : [],
									l = s ? o + 1 : i.length;
								for (r = o < 0 ? l : s ? o : 0; r < l; r++)
									if (
										((n = i[r]).selected || r === o) &&
										!n.disabled &&
										(!n.parentNode.disabled || !E(n.parentNode, 'optgroup'))
									) {
										if (((e = C(n).val()), s)) return e;
										a.push(e);
									}
								return a;
							},
							set: function (t, e) {
								for (
									var n, r, i = t.options, o = C.makeArray(e), s = i.length;
									s--;

								)
									((r = i[s]).selected =
										C.inArray(C.valHooks.option.get(r), o) > -1) && (n = !0);
								return n || (t.selectedIndex = -1), o;
							},
						},
					},
				}),
				C.each(['radio', 'checkbox'], function () {
					(C.valHooks[this] = {
						set: function (t, e) {
							if (Array.isArray(e))
								return (t.checked = C.inArray(C(t).val(), e) > -1);
						},
					}),
						m.checkOn ||
							(C.valHooks[this].get = function (t) {
								return null === t.getAttribute('value') ? 'on' : t.value;
							});
				});
			var De = n.location,
				je = { guid: Date.now() },
				$e = /\?/;
			C.parseXML = function (t) {
				var e, r;
				if (!t || 'string' != typeof t) return null;
				try {
					e = new n.DOMParser().parseFromString(t, 'text/xml');
				} catch (t) {}
				return (
					(r = e && e.getElementsByTagName('parsererror')[0]),
					(e && !r) ||
						C.error(
							'Invalid XML: ' +
								(r
									? C.map(r.childNodes, function (t) {
											return t.textContent;
									  }).join('\n')
									: t)
						),
					e
				);
			};
			var Oe = /^(?:focusinfocus|focusoutblur)$/,
				Ne = function (t) {
					t.stopPropagation();
				};
			C.extend(C.event, {
				trigger: function (t, e, r, i) {
					var o,
						s,
						a,
						l,
						c,
						u,
						f,
						p,
						h = [r || b],
						g = d.call(t, 'type') ? t.type : t,
						m = d.call(t, 'namespace') ? t.namespace.split('.') : [];
					if (
						((s = p = a = r = r || b),
						3 !== r.nodeType &&
							8 !== r.nodeType &&
							!Oe.test(g + C.event.triggered) &&
							(g.indexOf('.') > -1 && ((m = g.split('.')), (g = m.shift()), m.sort()),
							(c = g.indexOf(':') < 0 && 'on' + g),
							((t = t[C.expando]
								? t
								: new C.Event(g, 'object' == typeof t && t)).isTrigger = i ? 2 : 3),
							(t.namespace = m.join('.')),
							(t.rnamespace = t.namespace
								? new RegExp('(^|\\.)' + m.join('\\.(?:.*\\.|)') + '(\\.|$)')
								: null),
							(t.result = void 0),
							t.target || (t.target = r),
							(e = null == e ? [t] : C.makeArray(e, [t])),
							(f = C.event.special[g] || {}),
							i || !f.trigger || !1 !== f.trigger.apply(r, e)))
					) {
						if (!i && !f.noBubble && !y(r)) {
							for (
								l = f.delegateType || g, Oe.test(l + g) || (s = s.parentNode);
								s;
								s = s.parentNode
							)
								h.push(s), (a = s);
							a === (r.ownerDocument || b) &&
								h.push(a.defaultView || a.parentWindow || n);
						}
						for (o = 0; (s = h[o++]) && !t.isPropagationStopped(); )
							(p = s),
								(t.type = o > 1 ? l : f.bindType || g),
								(u =
									(st.get(s, 'events') || Object.create(null))[t.type] &&
									st.get(s, 'handle')) && u.apply(s, e),
								(u = c && s[c]) &&
									u.apply &&
									it(s) &&
									((t.result = u.apply(s, e)),
									!1 === t.result && t.preventDefault());
						return (
							(t.type = g),
							i ||
								t.isDefaultPrevented() ||
								(f._default && !1 !== f._default.apply(h.pop(), e)) ||
								!it(r) ||
								(c &&
									v(r[g]) &&
									!y(r) &&
									((a = r[c]) && (r[c] = null),
									(C.event.triggered = g),
									t.isPropagationStopped() && p.addEventListener(g, Ne),
									r[g](),
									t.isPropagationStopped() && p.removeEventListener(g, Ne),
									(C.event.triggered = void 0),
									a && (r[c] = a))),
							t.result
						);
					}
				},
				simulate: function (t, e, n) {
					var r = C.extend(new C.Event(), n, { type: t, isSimulated: !0 });
					C.event.trigger(r, null, e);
				},
			}),
				C.fn.extend({
					trigger: function (t, e) {
						return this.each(function () {
							C.event.trigger(t, e, this);
						});
					},
					triggerHandler: function (t, e) {
						var n = this[0];
						if (n) return C.event.trigger(t, e, n, !0);
					},
				});
			var Pe = /\[\]$/,
				Re = /\r?\n/g,
				Ie = /^(?:submit|button|image|reset|file)$/i,
				Le = /^(?:input|select|textarea|keygen)/i;
			function _e(t, e, n, r) {
				var i;
				if (Array.isArray(e))
					C.each(e, function (e, i) {
						n || Pe.test(t)
							? r(t, i)
							: _e(
									t + '[' + ('object' == typeof i && null != i ? e : '') + ']',
									i,
									n,
									r
							  );
					});
				else if (n || 'object' !== A(e)) r(t, e);
				else for (i in e) _e(t + '[' + i + ']', e[i], n, r);
			}
			(C.param = function (t, e) {
				var n,
					r = [],
					i = function (t, e) {
						var n = v(e) ? e() : e;
						r[r.length] =
							encodeURIComponent(t) + '=' + encodeURIComponent(null == n ? '' : n);
					};
				if (null == t) return '';
				if (Array.isArray(t) || (t.jquery && !C.isPlainObject(t)))
					C.each(t, function () {
						i(this.name, this.value);
					});
				else for (n in t) _e(n, t[n], e, i);
				return r.join('&');
			}),
				C.fn.extend({
					serialize: function () {
						return C.param(this.serializeArray());
					},
					serializeArray: function () {
						return this.map(function () {
							var t = C.prop(this, 'elements');
							return t ? C.makeArray(t) : this;
						})
							.filter(function () {
								var t = this.type;
								return (
									this.name &&
									!C(this).is(':disabled') &&
									Le.test(this.nodeName) &&
									!Ie.test(t) &&
									(this.checked || !Ct.test(t))
								);
							})
							.map(function (t, e) {
								var n = C(this).val();
								return null == n
									? null
									: Array.isArray(n)
									? C.map(n, function (t) {
											return { name: e.name, value: t.replace(Re, '\r\n') };
									  })
									: { name: e.name, value: n.replace(Re, '\r\n') };
							})
							.get();
					},
				});
			var Me = /%20/g,
				He = /#.*$/,
				qe = /([?&])_=[^&]*/,
				Ue = /^(.*?):[ \t]*([^\r\n]*)$/gm,
				Fe = /^(?:GET|HEAD)$/,
				Be = /^\/\//,
				We = {},
				ze = {},
				Ve = '*/'.concat('*'),
				Xe = b.createElement('a');
			function Ke(t) {
				return function (e, n) {
					'string' != typeof e && ((n = e), (e = '*'));
					var r,
						i = 0,
						o = e.toLowerCase().match(V) || [];
					if (v(n))
						for (; (r = o[i++]); )
							'+' === r[0]
								? ((r = r.slice(1) || '*'), (t[r] = t[r] || []).unshift(n))
								: (t[r] = t[r] || []).push(n);
				};
			}
			function Ge(t, e, n, r) {
				var i = {},
					o = t === ze;
				function s(a) {
					var l;
					return (
						(i[a] = !0),
						C.each(t[a] || [], function (t, a) {
							var c = a(e, n, r);
							return 'string' != typeof c || o || i[c]
								? o
									? !(l = c)
									: void 0
								: (e.dataTypes.unshift(c), s(c), !1);
						}),
						l
					);
				}
				return s(e.dataTypes[0]) || (!i['*'] && s('*'));
			}
			function Ye(t, e) {
				var n,
					r,
					i = C.ajaxSettings.flatOptions || {};
				for (n in e) void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]);
				return r && C.extend(!0, t, r), t;
			}
			(Xe.href = De.href),
				C.extend({
					active: 0,
					lastModified: {},
					etag: {},
					ajaxSettings: {
						url: De.href,
						type: 'GET',
						isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
							De.protocol
						),
						global: !0,
						processData: !0,
						async: !0,
						contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
						accepts: {
							'*': Ve,
							text: 'text/plain',
							html: 'text/html',
							xml: 'application/xml, text/xml',
							json: 'application/json, text/javascript',
						},
						contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
						responseFields: {
							xml: 'responseXML',
							text: 'responseText',
							json: 'responseJSON',
						},
						converters: {
							'* text': String,
							'text html': !0,
							'text json': JSON.parse,
							'text xml': C.parseXML,
						},
						flatOptions: { url: !0, context: !0 },
					},
					ajaxSetup: function (t, e) {
						return e ? Ye(Ye(t, C.ajaxSettings), e) : Ye(C.ajaxSettings, t);
					},
					ajaxPrefilter: Ke(We),
					ajaxTransport: Ke(ze),
					ajax: function (t, e) {
						'object' == typeof t && ((e = t), (t = void 0)), (e = e || {});
						var r,
							i,
							o,
							s,
							a,
							l,
							c,
							u,
							f,
							p,
							d = C.ajaxSetup({}, e),
							h = d.context || d,
							g = d.context && (h.nodeType || h.jquery) ? C(h) : C.event,
							m = C.Deferred(),
							v = C.Callbacks('once memory'),
							y = d.statusCode || {},
							x = {},
							w = {},
							A = 'canceled',
							T = {
								readyState: 0,
								getResponseHeader: function (t) {
									var e;
									if (c) {
										if (!s)
											for (s = {}; (e = Ue.exec(o)); )
												s[e[1].toLowerCase() + ' '] = (
													s[e[1].toLowerCase() + ' '] || []
												).concat(e[2]);
										e = s[t.toLowerCase() + ' '];
									}
									return null == e ? null : e.join(', ');
								},
								getAllResponseHeaders: function () {
									return c ? o : null;
								},
								setRequestHeader: function (t, e) {
									return (
										null == c &&
											((t = w[t.toLowerCase()] = w[t.toLowerCase()] || t),
											(x[t] = e)),
										this
									);
								},
								overrideMimeType: function (t) {
									return null == c && (d.mimeType = t), this;
								},
								statusCode: function (t) {
									var e;
									if (t)
										if (c) T.always(t[T.status]);
										else for (e in t) y[e] = [y[e], t[e]];
									return this;
								},
								abort: function (t) {
									var e = t || A;
									return r && r.abort(e), S(0, e), this;
								},
							};
						if (
							(m.promise(T),
							(d.url = ((t || d.url || De.href) + '').replace(
								Be,
								De.protocol + '//'
							)),
							(d.type = e.method || e.type || d.method || d.type),
							(d.dataTypes = (d.dataType || '*').toLowerCase().match(V) || ['']),
							null == d.crossDomain)
						) {
							l = b.createElement('a');
							try {
								(l.href = d.url),
									(l.href = l.href),
									(d.crossDomain =
										Xe.protocol + '//' + Xe.host != l.protocol + '//' + l.host);
							} catch (t) {
								d.crossDomain = !0;
							}
						}
						if (
							(d.data &&
								d.processData &&
								'string' != typeof d.data &&
								(d.data = C.param(d.data, d.traditional)),
							Ge(We, d, e, T),
							c)
						)
							return T;
						for (f in ((u = C.event && d.global) &&
							0 == C.active++ &&
							C.event.trigger('ajaxStart'),
						(d.type = d.type.toUpperCase()),
						(d.hasContent = !Fe.test(d.type)),
						(i = d.url.replace(He, '')),
						d.hasContent
							? d.data &&
							  d.processData &&
							  0 ===
									(d.contentType || '').indexOf(
										'application/x-www-form-urlencoded'
									) &&
							  (d.data = d.data.replace(Me, '+'))
							: ((p = d.url.slice(i.length)),
							  d.data &&
									(d.processData || 'string' == typeof d.data) &&
									((i += ($e.test(i) ? '&' : '?') + d.data), delete d.data),
							  !1 === d.cache &&
									((i = i.replace(qe, '$1')),
									(p = ($e.test(i) ? '&' : '?') + '_=' + je.guid++ + p)),
							  (d.url = i + p)),
						d.ifModified &&
							(C.lastModified[i] &&
								T.setRequestHeader('If-Modified-Since', C.lastModified[i]),
							C.etag[i] && T.setRequestHeader('If-None-Match', C.etag[i])),
						((d.data && d.hasContent && !1 !== d.contentType) || e.contentType) &&
							T.setRequestHeader('Content-Type', d.contentType),
						T.setRequestHeader(
							'Accept',
							d.dataTypes[0] && d.accepts[d.dataTypes[0]]
								? d.accepts[d.dataTypes[0]] +
										('*' !== d.dataTypes[0] ? ', ' + Ve + '; q=0.01' : '')
								: d.accepts['*']
						),
						d.headers))
							T.setRequestHeader(f, d.headers[f]);
						if (d.beforeSend && (!1 === d.beforeSend.call(h, T, d) || c))
							return T.abort();
						if (
							((A = 'abort'),
							v.add(d.complete),
							T.done(d.success),
							T.fail(d.error),
							(r = Ge(ze, d, e, T)))
						) {
							if (((T.readyState = 1), u && g.trigger('ajaxSend', [T, d]), c))
								return T;
							d.async &&
								d.timeout > 0 &&
								(a = n.setTimeout(function () {
									T.abort('timeout');
								}, d.timeout));
							try {
								(c = !1), r.send(x, S);
							} catch (t) {
								if (c) throw t;
								S(-1, t);
							}
						} else S(-1, 'No Transport');
						function S(t, e, s, l) {
							var f,
								p,
								b,
								x,
								w,
								A = e;
							c ||
								((c = !0),
								a && n.clearTimeout(a),
								(r = void 0),
								(o = l || ''),
								(T.readyState = t > 0 ? 4 : 0),
								(f = (t >= 200 && t < 300) || 304 === t),
								s &&
									(x = (function (t, e, n) {
										for (
											var r, i, o, s, a = t.contents, l = t.dataTypes;
											'*' === l[0];

										)
											l.shift(),
												void 0 === r &&
													(r =
														t.mimeType ||
														e.getResponseHeader('Content-Type'));
										if (r)
											for (i in a)
												if (a[i] && a[i].test(r)) {
													l.unshift(i);
													break;
												}
										if (l[0] in n) o = l[0];
										else {
											for (i in n) {
												if (!l[0] || t.converters[i + ' ' + l[0]]) {
													o = i;
													break;
												}
												s || (s = i);
											}
											o = o || s;
										}
										if (o) return o !== l[0] && l.unshift(o), n[o];
									})(d, T, s)),
								!f &&
									C.inArray('script', d.dataTypes) > -1 &&
									C.inArray('json', d.dataTypes) < 0 &&
									(d.converters['text script'] = function () {}),
								(x = (function (t, e, n, r) {
									var i,
										o,
										s,
										a,
										l,
										c = {},
										u = t.dataTypes.slice();
									if (u[1])
										for (s in t.converters)
											c[s.toLowerCase()] = t.converters[s];
									for (o = u.shift(); o; )
										if (
											(t.responseFields[o] && (n[t.responseFields[o]] = e),
											!l &&
												r &&
												t.dataFilter &&
												(e = t.dataFilter(e, t.dataType)),
											(l = o),
											(o = u.shift()))
										)
											if ('*' === o) o = l;
											else if ('*' !== l && l !== o) {
												if (!(s = c[l + ' ' + o] || c['* ' + o]))
													for (i in c)
														if (
															(a = i.split(' '))[1] === o &&
															(s =
																c[l + ' ' + a[0]] || c['* ' + a[0]])
														) {
															!0 === s
																? (s = c[i])
																: !0 !== c[i] &&
																  ((o = a[0]), u.unshift(a[1]));
															break;
														}
												if (!0 !== s)
													if (s && t.throws) e = s(e);
													else
														try {
															e = s(e);
														} catch (t) {
															return {
																state: 'parsererror',
																error: s
																	? t
																	: 'No conversion from ' +
																	  l +
																	  ' to ' +
																	  o,
															};
														}
											}
									return { state: 'success', data: e };
								})(d, x, T, f)),
								f
									? (d.ifModified &&
											((w = T.getResponseHeader('Last-Modified')) &&
												(C.lastModified[i] = w),
											(w = T.getResponseHeader('etag')) && (C.etag[i] = w)),
									  204 === t || 'HEAD' === d.type
											? (A = 'nocontent')
											: 304 === t
											? (A = 'notmodified')
											: ((A = x.state), (p = x.data), (f = !(b = x.error))))
									: ((b = A), (!t && A) || ((A = 'error'), t < 0 && (t = 0))),
								(T.status = t),
								(T.statusText = (e || A) + ''),
								f ? m.resolveWith(h, [p, A, T]) : m.rejectWith(h, [T, A, b]),
								T.statusCode(y),
								(y = void 0),
								u && g.trigger(f ? 'ajaxSuccess' : 'ajaxError', [T, d, f ? p : b]),
								v.fireWith(h, [T, A]),
								u &&
									(g.trigger('ajaxComplete', [T, d]),
									--C.active || C.event.trigger('ajaxStop')));
						}
						return T;
					},
					getJSON: function (t, e, n) {
						return C.get(t, e, n, 'json');
					},
					getScript: function (t, e) {
						return C.get(t, void 0, e, 'script');
					},
				}),
				C.each(['get', 'post'], function (t, e) {
					C[e] = function (t, n, r, i) {
						return (
							v(n) && ((i = i || r), (r = n), (n = void 0)),
							C.ajax(
								C.extend(
									{ url: t, type: e, dataType: i, data: n, success: r },
									C.isPlainObject(t) && t
								)
							)
						);
					};
				}),
				C.ajaxPrefilter(function (t) {
					var e;
					for (e in t.headers)
						'content-type' === e.toLowerCase() && (t.contentType = t.headers[e] || '');
				}),
				(C._evalUrl = function (t, e, n) {
					return C.ajax({
						url: t,
						type: 'GET',
						dataType: 'script',
						cache: !0,
						async: !1,
						global: !1,
						converters: { 'text script': function () {} },
						dataFilter: function (t) {
							C.globalEval(t, e, n);
						},
					});
				}),
				C.fn.extend({
					wrapAll: function (t) {
						var e;
						return (
							this[0] &&
								(v(t) && (t = t.call(this[0])),
								(e = C(t, this[0].ownerDocument).eq(0).clone(!0)),
								this[0].parentNode && e.insertBefore(this[0]),
								e
									.map(function () {
										for (var t = this; t.firstElementChild; )
											t = t.firstElementChild;
										return t;
									})
									.append(this)),
							this
						);
					},
					wrapInner: function (t) {
						return v(t)
							? this.each(function (e) {
									C(this).wrapInner(t.call(this, e));
							  })
							: this.each(function () {
									var e = C(this),
										n = e.contents();
									n.length ? n.wrapAll(t) : e.append(t);
							  });
					},
					wrap: function (t) {
						var e = v(t);
						return this.each(function (n) {
							C(this).wrapAll(e ? t.call(this, n) : t);
						});
					},
					unwrap: function (t) {
						return (
							this.parent(t)
								.not('body')
								.each(function () {
									C(this).replaceWith(this.childNodes);
								}),
							this
						);
					},
				}),
				(C.expr.pseudos.hidden = function (t) {
					return !C.expr.pseudos.visible(t);
				}),
				(C.expr.pseudos.visible = function (t) {
					return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
				}),
				(C.ajaxSettings.xhr = function () {
					try {
						return new n.XMLHttpRequest();
					} catch (t) {}
				});
			var Je = { 0: 200, 1223: 204 },
				Qe = C.ajaxSettings.xhr();
			(m.cors = !!Qe && 'withCredentials' in Qe),
				(m.ajax = Qe = !!Qe),
				C.ajaxTransport(function (t) {
					var e, r;
					if (m.cors || (Qe && !t.crossDomain))
						return {
							send: function (i, o) {
								var s,
									a = t.xhr();
								if (
									(a.open(t.type, t.url, t.async, t.username, t.password),
									t.xhrFields)
								)
									for (s in t.xhrFields) a[s] = t.xhrFields[s];
								for (s in (t.mimeType &&
									a.overrideMimeType &&
									a.overrideMimeType(t.mimeType),
								t.crossDomain ||
									i['X-Requested-With'] ||
									(i['X-Requested-With'] = 'XMLHttpRequest'),
								i))
									a.setRequestHeader(s, i[s]);
								(e = function (t) {
									return function () {
										e &&
											((e =
												r =
												a.onload =
												a.onerror =
												a.onabort =
												a.ontimeout =
												a.onreadystatechange =
													null),
											'abort' === t
												? a.abort()
												: 'error' === t
												? 'number' != typeof a.status
													? o(0, 'error')
													: o(a.status, a.statusText)
												: o(
														Je[a.status] || a.status,
														a.statusText,
														'text' !== (a.responseType || 'text') ||
															'string' != typeof a.responseText
															? { binary: a.response }
															: { text: a.responseText },
														a.getAllResponseHeaders()
												  ));
									};
								}),
									(a.onload = e()),
									(r = a.onerror = a.ontimeout = e('error')),
									void 0 !== a.onabort
										? (a.onabort = r)
										: (a.onreadystatechange = function () {
												4 === a.readyState &&
													n.setTimeout(function () {
														e && r();
													});
										  }),
									(e = e('abort'));
								try {
									a.send((t.hasContent && t.data) || null);
								} catch (t) {
									if (e) throw t;
								}
							},
							abort: function () {
								e && e();
							},
						};
				}),
				C.ajaxPrefilter(function (t) {
					t.crossDomain && (t.contents.script = !1);
				}),
				C.ajaxSetup({
					accepts: {
						script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
					},
					contents: { script: /\b(?:java|ecma)script\b/ },
					converters: {
						'text script': function (t) {
							return C.globalEval(t), t;
						},
					},
				}),
				C.ajaxPrefilter('script', function (t) {
					void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = 'GET');
				}),
				C.ajaxTransport('script', function (t) {
					var e, n;
					if (t.crossDomain || t.scriptAttrs)
						return {
							send: function (r, i) {
								(e = C('<script>')
									.attr(t.scriptAttrs || {})
									.prop({ charset: t.scriptCharset, src: t.url })
									.on(
										'load error',
										(n = function (t) {
											e.remove(),
												(n = null),
												t && i('error' === t.type ? 404 : 200, t.type);
										})
									)),
									b.head.appendChild(e[0]);
							},
							abort: function () {
								n && n();
							},
						};
				});
			var Ze,
				tn = [],
				en = /(=)\?(?=&|$)|\?\?/;
			C.ajaxSetup({
				jsonp: 'callback',
				jsonpCallback: function () {
					var t = tn.pop() || C.expando + '_' + je.guid++;
					return (this[t] = !0), t;
				},
			}),
				C.ajaxPrefilter('json jsonp', function (t, e, r) {
					var i,
						o,
						s,
						a =
							!1 !== t.jsonp &&
							(en.test(t.url)
								? 'url'
								: 'string' == typeof t.data &&
								  0 ===
										(t.contentType || '').indexOf(
											'application/x-www-form-urlencoded'
										) &&
								  en.test(t.data) &&
								  'data');
					if (a || 'jsonp' === t.dataTypes[0])
						return (
							(i = t.jsonpCallback =
								v(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
							a
								? (t[a] = t[a].replace(en, '$1' + i))
								: !1 !== t.jsonp &&
								  (t.url += ($e.test(t.url) ? '&' : '?') + t.jsonp + '=' + i),
							(t.converters['script json'] = function () {
								return s || C.error(i + ' was not called'), s[0];
							}),
							(t.dataTypes[0] = 'json'),
							(o = n[i]),
							(n[i] = function () {
								s = arguments;
							}),
							r.always(function () {
								void 0 === o ? C(n).removeProp(i) : (n[i] = o),
									t[i] && ((t.jsonpCallback = e.jsonpCallback), tn.push(i)),
									s && v(o) && o(s[0]),
									(s = o = void 0);
							}),
							'script'
						);
				}),
				(m.createHTMLDocument =
					(((Ze = b.implementation.createHTMLDocument('').body).innerHTML =
						'<form></form><form></form>'),
					2 === Ze.childNodes.length)),
				(C.parseHTML = function (t, e, n) {
					return 'string' != typeof t
						? []
						: ('boolean' == typeof e && ((n = e), (e = !1)),
						  e ||
								(m.createHTMLDocument
									? (((r = (e =
											b.implementation.createHTMLDocument('')).createElement(
											'base'
									  )).href = b.location.href),
									  e.head.appendChild(r))
									: (e = b)),
						  (o = !n && []),
						  (i = H.exec(t))
								? [e.createElement(i[1])]
								: ((i = Ot([t], e, o)),
								  o && o.length && C(o).remove(),
								  C.merge([], i.childNodes)));
					var r, i, o;
				}),
				(C.fn.load = function (t, e, n) {
					var r,
						i,
						o,
						s = this,
						a = t.indexOf(' ');
					return (
						a > -1 && ((r = Ce(t.slice(a))), (t = t.slice(0, a))),
						v(e) ? ((n = e), (e = void 0)) : e && 'object' == typeof e && (i = 'POST'),
						s.length > 0 &&
							C.ajax({ url: t, type: i || 'GET', dataType: 'html', data: e })
								.done(function (t) {
									(o = arguments),
										s.html(r ? C('<div>').append(C.parseHTML(t)).find(r) : t);
								})
								.always(
									n &&
										function (t, e) {
											s.each(function () {
												n.apply(this, o || [t.responseText, e, t]);
											});
										}
								),
						this
					);
				}),
				(C.expr.pseudos.animated = function (t) {
					return C.grep(C.timers, function (e) {
						return t === e.elem;
					}).length;
				}),
				(C.offset = {
					setOffset: function (t, e, n) {
						var r,
							i,
							o,
							s,
							a,
							l,
							c = C.css(t, 'position'),
							u = C(t),
							f = {};
						'static' === c && (t.style.position = 'relative'),
							(a = u.offset()),
							(o = C.css(t, 'top')),
							(l = C.css(t, 'left')),
							('absolute' === c || 'fixed' === c) && (o + l).indexOf('auto') > -1
								? ((s = (r = u.position()).top), (i = r.left))
								: ((s = parseFloat(o) || 0), (i = parseFloat(l) || 0)),
							v(e) && (e = e.call(t, n, C.extend({}, a))),
							null != e.top && (f.top = e.top - a.top + s),
							null != e.left && (f.left = e.left - a.left + i),
							'using' in e ? e.using.call(t, f) : u.css(f);
					},
				}),
				C.fn.extend({
					offset: function (t) {
						if (arguments.length)
							return void 0 === t
								? this
								: this.each(function (e) {
										C.offset.setOffset(this, t, e);
								  });
						var e,
							n,
							r = this[0];
						return r
							? r.getClientRects().length
								? ((e = r.getBoundingClientRect()),
								  (n = r.ownerDocument.defaultView),
								  { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
								: { top: 0, left: 0 }
							: void 0;
					},
					position: function () {
						if (this[0]) {
							var t,
								e,
								n,
								r = this[0],
								i = { top: 0, left: 0 };
							if ('fixed' === C.css(r, 'position')) e = r.getBoundingClientRect();
							else {
								for (
									e = this.offset(),
										n = r.ownerDocument,
										t = r.offsetParent || n.documentElement;
									t &&
									(t === n.body || t === n.documentElement) &&
									'static' === C.css(t, 'position');

								)
									t = t.parentNode;
								t &&
									t !== r &&
									1 === t.nodeType &&
									(((i = C(t).offset()).top += C.css(t, 'borderTopWidth', !0)),
									(i.left += C.css(t, 'borderLeftWidth', !0)));
							}
							return {
								top: e.top - i.top - C.css(r, 'marginTop', !0),
								left: e.left - i.left - C.css(r, 'marginLeft', !0),
							};
						}
					},
					offsetParent: function () {
						return this.map(function () {
							for (
								var t = this.offsetParent;
								t && 'static' === C.css(t, 'position');

							)
								t = t.offsetParent;
							return t || ht;
						});
					},
				}),
				C.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (t, e) {
					var n = 'pageYOffset' === e;
					C.fn[t] = function (r) {
						return Z(
							this,
							function (t, r, i) {
								var o;
								if (
									(y(t) ? (o = t) : 9 === t.nodeType && (o = t.defaultView),
									void 0 === i)
								)
									return o ? o[e] : t[r];
								o
									? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
									: (t[r] = i);
							},
							t,
							r,
							arguments.length
						);
					};
				}),
				C.each(['top', 'left'], function (t, e) {
					C.cssHooks[e] = Zt(m.pixelPosition, function (t, n) {
						if (n) return (n = Qt(t, e)), Xt.test(n) ? C(t).position()[e] + 'px' : n;
					});
				}),
				C.each({ Height: 'height', Width: 'width' }, function (t, e) {
					C.each({ padding: 'inner' + t, content: e, '': 'outer' + t }, function (n, r) {
						C.fn[r] = function (i, o) {
							var s = arguments.length && (n || 'boolean' != typeof i),
								a = n || (!0 === i || !0 === o ? 'margin' : 'border');
							return Z(
								this,
								function (e, n, i) {
									var o;
									return y(e)
										? 0 === r.indexOf('outer')
											? e['inner' + t]
											: e.document.documentElement['client' + t]
										: 9 === e.nodeType
										? ((o = e.documentElement),
										  Math.max(
												e.body['scroll' + t],
												o['scroll' + t],
												e.body['offset' + t],
												o['offset' + t],
												o['client' + t]
										  ))
										: void 0 === i
										? C.css(e, n, a)
										: C.style(e, n, i, a);
								},
								e,
								s ? i : void 0,
								s
							);
						};
					});
				}),
				C.each(
					[
						'ajaxStart',
						'ajaxStop',
						'ajaxComplete',
						'ajaxError',
						'ajaxSuccess',
						'ajaxSend',
					],
					function (t, e) {
						C.fn[e] = function (t) {
							return this.on(e, t);
						};
					}
				),
				C.fn.extend({
					bind: function (t, e, n) {
						return this.on(t, null, e, n);
					},
					unbind: function (t, e) {
						return this.off(t, null, e);
					},
					delegate: function (t, e, n, r) {
						return this.on(e, t, n, r);
					},
					undelegate: function (t, e, n) {
						return 1 === arguments.length
							? this.off(t, '**')
							: this.off(e, t || '**', n);
					},
					hover: function (t, e) {
						return this.on('mouseenter', t).on('mouseleave', e || t);
					},
				}),
				C.each(
					'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
						' '
					),
					function (t, e) {
						C.fn[e] = function (t, n) {
							return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e);
						};
					}
				);
			var nn = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
			(C.proxy = function (t, e) {
				var n, r, i;
				if (('string' == typeof e && ((n = t[e]), (e = t), (t = n)), v(t)))
					return (
						(r = a.call(arguments, 2)),
						((i = function () {
							return t.apply(e || this, r.concat(a.call(arguments)));
						}).guid = t.guid =
							t.guid || C.guid++),
						i
					);
			}),
				(C.holdReady = function (t) {
					t ? C.readyWait++ : C.ready(!0);
				}),
				(C.isArray = Array.isArray),
				(C.parseJSON = JSON.parse),
				(C.nodeName = E),
				(C.isFunction = v),
				(C.isWindow = y),
				(C.camelCase = rt),
				(C.type = A),
				(C.now = Date.now),
				(C.isNumeric = function (t) {
					var e = C.type(t);
					return ('number' === e || 'string' === e) && !isNaN(t - parseFloat(t));
				}),
				(C.trim = function (t) {
					return null == t ? '' : (t + '').replace(nn, '$1');
				}),
				void 0 ===
					(r = function () {
						return C;
					}.apply(e, [])) || (t.exports = r);
			var rn = n.jQuery,
				on = n.$;
			return (
				(C.noConflict = function (t) {
					return n.$ === C && (n.$ = on), t && n.jQuery === C && (n.jQuery = rn), C;
				}),
				void 0 === i && (n.jQuery = n.$ = C),
				C
			);
		});
	},
	,
	,
	function (t, e) {
		(t.exports = function (t, e) {
			if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
		}),
			(t.exports.__esModule = !0),
			(t.exports.default = t.exports);
	},
	function (t, e, n) {
		var r = n(152);
		function i(t, e) {
			for (var n = 0; n < e.length; n++) {
				var i = e[n];
				(i.enumerable = i.enumerable || !1),
					(i.configurable = !0),
					'value' in i && (i.writable = !0),
					Object.defineProperty(t, r(i.key), i);
			}
		}
		(t.exports = function (t, e, n) {
			return (
				e && i(t.prototype, e),
				n && i(t, n),
				Object.defineProperty(t, 'prototype', { writable: !1 }),
				t
			);
		}),
			(t.exports.__esModule = !0),
			(t.exports.default = t.exports);
	},
	,
	function (t, e, n) {
		'use strict';
		(function (t) {
			n.d(e, 'a', function () {
				return l;
			});
			var r = n(3),
				i = n.n(r),
				o = n(4),
				s = n.n(o),
				a = (n(20), n(14)),
				l = (function () {
					return s()(
						function t() {
							i()(this, t);
						},
						null,
						[
							{
								key: 'translatePage',
								value: function () {
									var t = this;
									['title', 'data-i18n', 'placeholder'].forEach(function (e) {
										return t.translateAttribute(e);
									});
								},
							},
							{
								key: 'translateAttribute',
								value: function () {
									var e = this,
										n =
											arguments.length > 0 && void 0 !== arguments[0]
												? arguments[0]
												: 'data-i18n',
										r = `[${n}]`;
									t(r).each(function (i, o) {
										var s = t(o).attr(n);
										try {
											'[data-i18n]' === r
												? t(o).html(e.getTranslationByKey(s))
												: t(o).attr(n, e.getTranslationByKey(s));
										} catch (e) {
											t(o).attr(n, s);
										}
									});
								},
							},
							{
								key: 'getTranslationByKey',
								value: function (t) {
									return a.i18n.getMessage(t);
								},
							},
						]
					);
				})();
		}).call(this, n(0));
	},
	function (t, e, n) {
		'use strict';
		t.exports = function (t) {
			try {
				return !!t();
			} catch (t) {
				return !0;
			}
		};
	},
	function (t, e, n) {
		'use strict';
		var r = function (t) {
			return t && t.Math === Math && t;
		};
		t.exports =
			r('object' == typeof globalThis && globalThis) ||
			r('object' == typeof window && window) ||
			r('object' == typeof self && self) ||
			r('object' == typeof self && self) ||
			r('object' == typeof this && this) ||
			(function () {
				return this;
			})() ||
			Function('return this')();
	},
	function (t, e, n) {
		'use strict';
		var r = n(76),
			i = Function.prototype,
			o = i.call,
			s = r && i.bind.bind(o, o);
		t.exports = r
			? s
			: function (t) {
					return function () {
						return o.apply(t, arguments);
					};
			  };
	},
	function (t, e, n) {
		'use strict';
		var r = n(8),
			i = n(78).f,
			o = n(45),
			s = n(28),
			a = n(110),
			l = n(139),
			c = n(111);
		t.exports = function (t, e) {
			var n,
				u,
				f,
				p,
				d,
				h = t.target,
				g = t.global,
				m = t.stat;
			if ((n = g ? r : m ? r[h] || a(h, {}) : r[h] && r[h].prototype))
				for (u in e) {
					if (
						((p = e[u]),
						(f = t.dontCallGetSet ? (d = i(n, u)) && d.value : n[u]),
						!c(g ? u : h + (m ? '.' : '#') + u, t.forced) && void 0 !== f)
					) {
						if (typeof p == typeof f) continue;
						l(p, f);
					}
					(t.sham || (f && f.sham)) && o(p, 'sham', !0), s(n, u, p, t);
				}
		};
	},
	,
	,
	,
	function (t, e, n) {
		var r, i, o;
		'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self && self,
			(i = [t]),
			void 0 ===
				(o =
					'function' ==
					typeof (r = function (t) {
						'use strict';
						if (
							!(
								globalThis.chrome &&
								globalThis.chrome.runtime &&
								globalThis.chrome.runtime.id
							)
						)
							throw new Error(
								'This script should only be loaded in a browser extension.'
							);
						if (
							globalThis.browser &&
							globalThis.browser.runtime &&
							globalThis.browser.runtime.id
						)
							t.exports = globalThis.browser;
						else {
							const e = 'The message port closed before a response was received.',
								n = t => {
									const n = {
										alarms: {
											clear: { minArgs: 0, maxArgs: 1 },
											clearAll: { minArgs: 0, maxArgs: 0 },
											get: { minArgs: 0, maxArgs: 1 },
											getAll: { minArgs: 0, maxArgs: 0 },
										},
										bookmarks: {
											create: { minArgs: 1, maxArgs: 1 },
											get: { minArgs: 1, maxArgs: 1 },
											getChildren: { minArgs: 1, maxArgs: 1 },
											getRecent: { minArgs: 1, maxArgs: 1 },
											getSubTree: { minArgs: 1, maxArgs: 1 },
											getTree: { minArgs: 0, maxArgs: 0 },
											move: { minArgs: 2, maxArgs: 2 },
											remove: { minArgs: 1, maxArgs: 1 },
											removeTree: { minArgs: 1, maxArgs: 1 },
											search: { minArgs: 1, maxArgs: 1 },
											update: { minArgs: 2, maxArgs: 2 },
										},
										browserAction: {
											disable: {
												minArgs: 0,
												maxArgs: 1,
												fallbackToNoCallback: !0,
											},
											enable: {
												minArgs: 0,
												maxArgs: 1,
												fallbackToNoCallback: !0,
											},
											getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
											getBadgeText: { minArgs: 1, maxArgs: 1 },
											getPopup: { minArgs: 1, maxArgs: 1 },
											getTitle: { minArgs: 1, maxArgs: 1 },
											openPopup: { minArgs: 0, maxArgs: 0 },
											setBadgeBackgroundColor: {
												minArgs: 1,
												maxArgs: 1,
												fallbackToNoCallback: !0,
											},
											setBadgeText: {
												minArgs: 1,
												maxArgs: 1,
												fallbackToNoCallback: !0,
											},
											setIcon: { minArgs: 1, maxArgs: 1 },
											setPopup: {
												minArgs: 1,
												maxArgs: 1,
												fallbackToNoCallback: !0,
											},
											setTitle: {
												minArgs: 1,
												maxArgs: 1,
												fallbackToNoCallback: !0,
											},
										},
										browsingData: {
											remove: { minArgs: 2, maxArgs: 2 },
											removeCache: { minArgs: 1, maxArgs: 1 },
											removeCookies: { minArgs: 1, maxArgs: 1 },
											removeDownloads: { minArgs: 1, maxArgs: 1 },
											removeFormData: { minArgs: 1, maxArgs: 1 },
											removeHistory: { minArgs: 1, maxArgs: 1 },
											removeLocalStorage: { minArgs: 1, maxArgs: 1 },
											removePasswords: { minArgs: 1, maxArgs: 1 },
											removePluginData: { minArgs: 1, maxArgs: 1 },
											settings: { minArgs: 0, maxArgs: 0 },
										},
										commands: { getAll: { minArgs: 0, maxArgs: 0 } },
										contextMenus: {
											remove: { minArgs: 1, maxArgs: 1 },
											removeAll: { minArgs: 0, maxArgs: 0 },
											update: { minArgs: 2, maxArgs: 2 },
										},
										cookies: {
											get: { minArgs: 1, maxArgs: 1 },
											getAll: { minArgs: 1, maxArgs: 1 },
											getAllCookieStores: { minArgs: 0, maxArgs: 0 },
											remove: { minArgs: 1, maxArgs: 1 },
											set: { minArgs: 1, maxArgs: 1 },
										},
										devtools: {
											inspectedWindow: {
												eval: {
													minArgs: 1,
													maxArgs: 2,
													singleCallbackArg: !1,
												},
											},
											panels: {
												create: {
													minArgs: 3,
													maxArgs: 3,
													singleCallbackArg: !0,
												},
												elements: {
													createSidebarPane: { minArgs: 1, maxArgs: 1 },
												},
											},
										},
										downloads: {
											cancel: { minArgs: 1, maxArgs: 1 },
											download: { minArgs: 1, maxArgs: 1 },
											erase: { minArgs: 1, maxArgs: 1 },
											getFileIcon: { minArgs: 1, maxArgs: 2 },
											open: {
												minArgs: 1,
												maxArgs: 1,
												fallbackToNoCallback: !0,
											},
											pause: { minArgs: 1, maxArgs: 1 },
											removeFile: { minArgs: 1, maxArgs: 1 },
											resume: { minArgs: 1, maxArgs: 1 },
											search: { minArgs: 1, maxArgs: 1 },
											show: {
												minArgs: 1,
												maxArgs: 1,
												fallbackToNoCallback: !0,
											},
										},
										extension: {
											isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 },
											isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 },
										},
										history: {
											addUrl: { minArgs: 1, maxArgs: 1 },
											deleteAll: { minArgs: 0, maxArgs: 0 },
											deleteRange: { minArgs: 1, maxArgs: 1 },
											deleteUrl: { minArgs: 1, maxArgs: 1 },
											getVisits: { minArgs: 1, maxArgs: 1 },
											search: { minArgs: 1, maxArgs: 1 },
										},
										i18n: {
											detectLanguage: { minArgs: 1, maxArgs: 1 },
											getAcceptLanguages: { minArgs: 0, maxArgs: 0 },
										},
										identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } },
										idle: { queryState: { minArgs: 1, maxArgs: 1 } },
										management: {
											get: { minArgs: 1, maxArgs: 1 },
											getAll: { minArgs: 0, maxArgs: 0 },
											getSelf: { minArgs: 0, maxArgs: 0 },
											setEnabled: { minArgs: 2, maxArgs: 2 },
											uninstallSelf: { minArgs: 0, maxArgs: 1 },
										},
										notifications: {
											clear: { minArgs: 1, maxArgs: 1 },
											create: { minArgs: 1, maxArgs: 2 },
											getAll: { minArgs: 0, maxArgs: 0 },
											getPermissionLevel: { minArgs: 0, maxArgs: 0 },
											update: { minArgs: 2, maxArgs: 2 },
										},
										pageAction: {
											getPopup: { minArgs: 1, maxArgs: 1 },
											getTitle: { minArgs: 1, maxArgs: 1 },
											hide: {
												minArgs: 1,
												maxArgs: 1,
												fallbackToNoCallback: !0,
											},
											setIcon: { minArgs: 1, maxArgs: 1 },
											setPopup: {
												minArgs: 1,
												maxArgs: 1,
												fallbackToNoCallback: !0,
											},
											setTitle: {
												minArgs: 1,
												maxArgs: 1,
												fallbackToNoCallback: !0,
											},
											show: {
												minArgs: 1,
												maxArgs: 1,
												fallbackToNoCallback: !0,
											},
										},
										permissions: {
											contains: { minArgs: 1, maxArgs: 1 },
											getAll: { minArgs: 0, maxArgs: 0 },
											remove: { minArgs: 1, maxArgs: 1 },
											request: { minArgs: 1, maxArgs: 1 },
										},
										runtime: {
											getBackgroundPage: { minArgs: 0, maxArgs: 0 },
											getPlatformInfo: { minArgs: 0, maxArgs: 0 },
											openOptionsPage: { minArgs: 0, maxArgs: 0 },
											requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
											sendMessage: { minArgs: 1, maxArgs: 3 },
											sendNativeMessage: { minArgs: 2, maxArgs: 2 },
											setUninstallURL: { minArgs: 1, maxArgs: 1 },
										},
										sessions: {
											getDevices: { minArgs: 0, maxArgs: 1 },
											getRecentlyClosed: { minArgs: 0, maxArgs: 1 },
											restore: { minArgs: 0, maxArgs: 1 },
										},
										storage: {
											local: {
												clear: { minArgs: 0, maxArgs: 0 },
												get: { minArgs: 0, maxArgs: 1 },
												getBytesInUse: { minArgs: 0, maxArgs: 1 },
												remove: { minArgs: 1, maxArgs: 1 },
												set: { minArgs: 1, maxArgs: 1 },
											},
											managed: {
												get: { minArgs: 0, maxArgs: 1 },
												getBytesInUse: { minArgs: 0, maxArgs: 1 },
											},
											sync: {
												clear: { minArgs: 0, maxArgs: 0 },
												get: { minArgs: 0, maxArgs: 1 },
												getBytesInUse: { minArgs: 0, maxArgs: 1 },
												remove: { minArgs: 1, maxArgs: 1 },
												set: { minArgs: 1, maxArgs: 1 },
											},
										},
										tabs: {
											captureVisibleTab: { minArgs: 0, maxArgs: 2 },
											create: { minArgs: 1, maxArgs: 1 },
											detectLanguage: { minArgs: 0, maxArgs: 1 },
											discard: { minArgs: 0, maxArgs: 1 },
											duplicate: { minArgs: 1, maxArgs: 1 },
											executeScript: { minArgs: 1, maxArgs: 2 },
											get: { minArgs: 1, maxArgs: 1 },
											getCurrent: { minArgs: 0, maxArgs: 0 },
											getZoom: { minArgs: 0, maxArgs: 1 },
											getZoomSettings: { minArgs: 0, maxArgs: 1 },
											goBack: { minArgs: 0, maxArgs: 1 },
											goForward: { minArgs: 0, maxArgs: 1 },
											highlight: { minArgs: 1, maxArgs: 1 },
											insertCSS: { minArgs: 1, maxArgs: 2 },
											move: { minArgs: 2, maxArgs: 2 },
											query: { minArgs: 1, maxArgs: 1 },
											reload: { minArgs: 0, maxArgs: 2 },
											remove: { minArgs: 1, maxArgs: 1 },
											removeCSS: { minArgs: 1, maxArgs: 2 },
											sendMessage: { minArgs: 2, maxArgs: 3 },
											setZoom: { minArgs: 1, maxArgs: 2 },
											setZoomSettings: { minArgs: 1, maxArgs: 2 },
											update: { minArgs: 1, maxArgs: 2 },
										},
										topSites: { get: { minArgs: 0, maxArgs: 0 } },
										webNavigation: {
											getAllFrames: { minArgs: 1, maxArgs: 1 },
											getFrame: { minArgs: 1, maxArgs: 1 },
										},
										webRequest: {
											handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 },
										},
										windows: {
											create: { minArgs: 0, maxArgs: 1 },
											get: { minArgs: 1, maxArgs: 2 },
											getAll: { minArgs: 0, maxArgs: 1 },
											getCurrent: { minArgs: 0, maxArgs: 1 },
											getLastFocused: { minArgs: 0, maxArgs: 1 },
											remove: { minArgs: 1, maxArgs: 1 },
											update: { minArgs: 2, maxArgs: 2 },
										},
									};
									if (0 === Object.keys(n).length)
										throw new Error(
											'api-metadata.json has not been included in browser-polyfill'
										);
									class r extends WeakMap {
										constructor(t, e) {
											super(e), (this.createItem = t);
										}
										get(t) {
											return (
												this.has(t) || this.set(t, this.createItem(t)),
												super.get(t)
											);
										}
									}
									const i =
											(e, n) =>
											(...r) => {
												t.runtime.lastError
													? e.reject(
															new Error(t.runtime.lastError.message)
													  )
													: n.singleCallbackArg ||
													  (r.length <= 1 && !1 !== n.singleCallbackArg)
													? e.resolve(r[0])
													: e.resolve(r);
											},
										o = t => (1 == t ? 'argument' : 'arguments'),
										s = (t, e, n) =>
											new Proxy(e, {
												apply: (e, r, i) => n.call(r, t, ...i),
											});
									let a = Function.call.bind(Object.prototype.hasOwnProperty);
									const l = (t, e = {}, n = {}) => {
											let r = Object.create(null),
												c = {
													has: (e, n) => n in t || n in r,
													get(c, u, f) {
														if (u in r) return r[u];
														if (!(u in t)) return;
														let p = t[u];
														if ('function' == typeof p)
															if ('function' == typeof e[u])
																p = s(t, t[u], e[u]);
															else if (a(n, u)) {
																let e = ((t, e) =>
																	function (n, ...r) {
																		if (r.length < e.minArgs)
																			throw new Error(
																				`Expected at least ${
																					e.minArgs
																				} ${o(
																					e.minArgs
																				)} for ${t}(), got ${
																					r.length
																				}`
																			);
																		if (r.length > e.maxArgs)
																			throw new Error(
																				`Expected at most ${
																					e.maxArgs
																				} ${o(
																					e.maxArgs
																				)} for ${t}(), got ${
																					r.length
																				}`
																			);
																		return new Promise(
																			(o, s) => {
																				if (
																					e.fallbackToNoCallback
																				)
																					try {
																						n[t](
																							...r,
																							i(
																								{
																									resolve:
																										o,
																									reject: s,
																								},
																								e
																							)
																						);
																					} catch (i) {
																						console.warn(
																							t +
																								" API method doesn't seem to support the callback parameter, falling back to call it without a callback: ",
																							i
																						),
																							n[t](
																								...r
																							),
																							(e.fallbackToNoCallback =
																								!1),
																							(e.noCallback =
																								!0),
																							o();
																					}
																				else
																					e.noCallback
																						? (n[t](
																								...r
																						  ),
																						  o())
																						: n[t](
																								...r,
																								i(
																									{
																										resolve:
																											o,
																										reject: s,
																									},
																									e
																								)
																						  );
																			}
																		);
																	})(u, n[u]);
																p = s(t, t[u], e);
															} else p = p.bind(t);
														else if (
															'object' == typeof p &&
															null !== p &&
															(a(e, u) || a(n, u))
														)
															p = l(p, e[u], n[u]);
														else {
															if (!a(n, '*'))
																return (
																	Object.defineProperty(r, u, {
																		configurable: !0,
																		enumerable: !0,
																		get: () => t[u],
																		set(e) {
																			t[u] = e;
																		},
																	}),
																	p
																);
															p = l(p, e[u], n['*']);
														}
														return (r[u] = p), p;
													},
													set: (e, n, i, o) => (
														n in r ? (r[n] = i) : (t[n] = i), !0
													),
													defineProperty: (t, e, n) =>
														Reflect.defineProperty(r, e, n),
													deleteProperty: (t, e) =>
														Reflect.deleteProperty(r, e),
												},
												u = Object.create(t);
											return new Proxy(u, c);
										},
										c = t => ({
											addListener(e, n, ...r) {
												e.addListener(t.get(n), ...r);
											},
											hasListener: (e, n) => e.hasListener(t.get(n)),
											removeListener(e, n) {
												e.removeListener(t.get(n));
											},
										}),
										u = new r(t =>
											'function' != typeof t
												? t
												: function (e) {
														const n = l(
															e,
															{},
															{
																getContent: {
																	minArgs: 0,
																	maxArgs: 0,
																},
															}
														);
														t(n);
												  }
										),
										f = new r(t =>
											'function' != typeof t
												? t
												: function (e, n, r) {
														let i,
															o,
															s = !1,
															a = new Promise(t => {
																i = function (e) {
																	(s = !0), t(e);
																};
															});
														try {
															o = t(e, n, i);
														} catch (t) {
															o = Promise.reject(t);
														}
														const l =
															!0 !== o &&
															(c = o) &&
															'object' == typeof c &&
															'function' == typeof c.then;
														var c;
														if (!0 !== o && !l && !s) return !1;
														const u = t => {
															t.then(
																t => {
																	r(t);
																},
																t => {
																	let e;
																	(e =
																		t &&
																		(t instanceof Error ||
																			'string' ==
																				typeof t.message)
																			? t.message
																			: 'An unexpected error occurred'),
																		r({
																			__mozWebExtensionPolyfillReject__:
																				!0,
																			message: e,
																		});
																}
															).catch(t => {
																console.error(
																	'Failed to send onMessage rejected reply',
																	t
																);
															});
														};
														return u(l ? o : a), !0;
												  }
										),
										p = ({ reject: n, resolve: r }, i) => {
											t.runtime.lastError
												? t.runtime.lastError.message === e
													? r()
													: n(new Error(t.runtime.lastError.message))
												: i && i.__mozWebExtensionPolyfillReject__
												? n(new Error(i.message))
												: r(i);
										},
										d = (t, e, n, ...r) => {
											if (r.length < e.minArgs)
												throw new Error(
													`Expected at least ${e.minArgs} ${o(
														e.minArgs
													)} for ${t}(), got ${r.length}`
												);
											if (r.length > e.maxArgs)
												throw new Error(
													`Expected at most ${e.maxArgs} ${o(
														e.maxArgs
													)} for ${t}(), got ${r.length}`
												);
											return new Promise((t, e) => {
												const i = p.bind(null, { resolve: t, reject: e });
												r.push(i), n.sendMessage(...r);
											});
										},
										h = {
											devtools: { network: { onRequestFinished: c(u) } },
											runtime: {
												onMessage: c(f),
												onMessageExternal: c(f),
												sendMessage: d.bind(null, 'sendMessage', {
													minArgs: 1,
													maxArgs: 3,
												}),
											},
											tabs: {
												sendMessage: d.bind(null, 'sendMessage', {
													minArgs: 2,
													maxArgs: 3,
												}),
											},
										},
										g = {
											clear: { minArgs: 1, maxArgs: 1 },
											get: { minArgs: 1, maxArgs: 1 },
											set: { minArgs: 1, maxArgs: 1 },
										};
									return (
										(n.privacy = {
											network: { '*': g },
											services: { '*': g },
											websites: { '*': g },
										}),
										l(t, h, n)
									);
								};
							t.exports = n(chrome);
						}
					})
						? r.apply(e, i)
						: r) || (t.exports = o);
	},
	function (t, e, n) {
		'use strict';
		var r = 'object' == typeof document && document.all;
		t.exports =
			void 0 === r && void 0 !== r
				? function (t) {
						return 'function' == typeof t || t === r;
				  }
				: function (t) {
						return 'function' == typeof t;
				  };
	},
	,
	function (t, e, n) {
		'use strict';
		var r = n(8),
			i = n(70),
			o = n(22),
			s = n(80),
			a = n(71),
			l = n(138),
			c = r.Symbol,
			u = i('wks'),
			f = l ? c.for || c : (c && c.withoutSetter) || s;
		t.exports = function (t) {
			return o(u, t) || (u[t] = a && o(c, t) ? c[t] : f('Symbol.' + t)), u[t];
		};
	},
	function (t, e, n) {
		'use strict';
		var r = n(76),
			i = Function.prototype.call;
		t.exports = r
			? i.bind(i)
			: function () {
					return i.apply(i, arguments);
			  };
	},
	function (t, e, n) {
		'use strict';
		var r = n(7);
		t.exports = !r(function () {
			return (
				7 !==
				Object.defineProperty({}, 1, {
					get: function () {
						return 7;
					},
				})[1]
			);
		});
	},
	function (t, e, n) {
		'use strict';
		var r = n(101),
			i = n(28),
			o = n(188);
		r || i(Object.prototype, 'toString', o, { unsafe: !0 });
	},
	function (t, e, n) {
		'use strict';
		var r = n(15);
		t.exports = function (t) {
			return 'object' == typeof t ? null !== t : r(t);
		};
	},
	function (t, e, n) {
		'use strict';
		var r = n(9),
			i = n(30),
			o = r({}.hasOwnProperty);
		t.exports =
			Object.hasOwn ||
			function (t, e) {
				return o(i(t), e);
			};
	},
	,
	function (t, e, n) {
		'use strict';
		var r = n(21),
			i = String,
			o = TypeError;
		t.exports = function (t) {
			if (r(t)) return t;
			throw new o(i(t) + ' is not an object');
		};
	},
	,
	,
	,
	function (t, e, n) {
		'use strict';
		var r = n(15),
			i = n(31),
			o = n(148),
			s = n(110);
		t.exports = function (t, e, n, a) {
			a || (a = {});
			var l = a.enumerable,
				c = void 0 !== a.name ? a.name : e;
			if ((r(n) && o(n, c, a), a.global)) l ? (t[e] = n) : s(e, n);
			else {
				try {
					a.unsafe ? t[e] && (l = !0) : delete t[e];
				} catch (t) {}
				l
					? (t[e] = n)
					: i.f(t, e, {
							value: n,
							enumerable: !1,
							configurable: !a.nonConfigurable,
							writable: !a.nonWritable,
					  });
			}
			return t;
		};
	},
	function (t, e, n) {
		'use strict';
		var r = n(62);
		t.exports = function (t) {
			return r(t.length);
		};
	},
	function (t, e, n) {
		'use strict';
		var r = n(40),
			i = Object;
		t.exports = function (t) {
			return i(r(t));
		};
	},
	function (t, e, n) {
		'use strict';
		var r = n(19),
			i = n(147),
			o = n(150),
			s = n(24),
			a = n(100),
			l = TypeError,
			c = Object.defineProperty,
			u = Object.getOwnPropertyDescriptor;
		e.f = r
			? o
				? function (t, e, n) {
						if (
							(s(t),
							(e = a(e)),
							s(n),
							'function' == typeof t &&
								'prototype' === e &&
								'value' in n &&
								'writable' in n &&
								!n.writable)
						) {
							var r = u(t, e);
							r &&
								r.writable &&
								((t[e] = n.value),
								(n = {
									configurable:
										'configurable' in n ? n.configurable : r.configurable,
									enumerable: 'enumerable' in n ? n.enumerable : r.enumerable,
									writable: !1,
								}));
						}
						return c(t, e, n);
				  }
				: c
			: function (t, e, n) {
					if ((s(t), (e = a(e)), s(n), i))
						try {
							return c(t, e, n);
						} catch (t) {}
					if ('get' in n || 'set' in n) throw new l('Accessors not supported');
					return 'value' in n && (t[e] = n.value), t;
			  };
	},
	,
	function (t, e, n) {
		'use strict';
		var r = n(8),
			i = n(15),
			o = function (t) {
				return i(t) ? t : void 0;
			};
		t.exports = function (t, e) {
			return arguments.length < 2 ? o(r[t]) : r[t] && r[t][e];
		};
	},
	function (t, e, n) {
		'use strict';
		var r = n(15),
			i = n(59),
			o = TypeError;
		t.exports = function (t) {
			if (r(t)) return t;
			throw new o(i(t) + ' is not a function');
		};
	},
	function (t, e, n) {
		'use strict';
		var r,
			i,
			o,
			s = n(187),
			a = n(8),
			l = n(21),
			c = n(45),
			u = n(22),
			f = n(102),
			p = n(103),
			d = n(87),
			h = a.TypeError,
			g = a.WeakMap;
		if (s || f.state) {
			var m = f.state || (f.state = new g());
			(m.get = m.get),
				(m.has = m.has),
				(m.set = m.set),
				(r = function (t, e) {
					if (m.has(t)) throw new h('Object already initialized');
					return (e.facade = t), m.set(t, e), e;
				}),
				(i = function (t) {
					return m.get(t) || {};
				}),
				(o = function (t) {
					return m.has(t);
				});
		} else {
			var v = p('state');
			(d[v] = !0),
				(r = function (t, e) {
					if (u(t, v)) throw new h('Object already initialized');
					return (e.facade = t), c(t, v, e), e;
				}),
				(i = function (t) {
					return u(t, v) ? t[v] : {};
				}),
				(o = function (t) {
					return u(t, v);
				});
		}
		t.exports = {
			set: r,
			get: i,
			has: o,
			enforce: function (t) {
				return o(t) ? i(t) : r(t, {});
			},
			getterFor: function (t) {
				return function (e) {
					var n;
					if (!l(e) || (n = i(e)).type !== t)
						throw new h('Incompatible receiver, ' + t + ' required');
					return n;
				};
			},
		};
	},
	,
	function (t, e, n) {
		'use strict';
		t.exports = !1;
	},
	,
	,
	function (t, e, n) {
		'use strict';
		var r = n(41),
			i = TypeError;
		t.exports = function (t) {
			if (r(t)) throw new i("Can't call method on " + t);
			return t;
		};
	},
	function (t, e, n) {
		'use strict';
		t.exports = function (t) {
			return null == t;
		};
	},
	function (t, e, n) {
		'use strict';
		var r = n(114),
			i = n(40);
		t.exports = function (t) {
			return r(i(t));
		};
	},
	function (t, e, n) {
		'use strict';
		var r = n(9),
			i = r({}.toString),
			o = r(''.slice);
		t.exports = function (t) {
			return o(i(t), 8, -1);
		};
	},
	,
	function (t, e, n) {
		'use strict';
		var r = n(19),
			i = n(31),
			o = n(63);
		t.exports = r
			? function (t, e, n) {
					return i.f(t, e, o(1, n));
			  }
			: function (t, e, n) {
					return (t[e] = n), t;
			  };
	},
	function (t, e, n) {
		'use strict';
		var r = n(118),
			i = n(34),
			o = n(76),
			s = r(r.bind);
		t.exports = function (t, e) {
			return (
				i(t),
				void 0 === e
					? t
					: o
					? s(t, e)
					: function () {
							return t.apply(e, arguments);
					  }
			);
		};
	},
	,
	function (t, e, n) {
		'use strict';
		n(232), n(241), n(242), n(243), n(244), n(245);
	},
	,
	function (t, e, n) {
		'use strict';
		var r = n(9);
		t.exports = r({}.isPrototypeOf);
	},
	function (t, e, n) {
		'use strict';
		var r = n(101),
			i = n(15),
			o = n(43),
			s = n(17)('toStringTag'),
			a = Object,
			l =
				'Arguments' ===
				o(
					(function () {
						return arguments;
					})()
				);
		t.exports = r
			? o
			: function (t) {
					var e, n, r;
					return void 0 === t
						? 'Undefined'
						: null === t
						? 'Null'
						: 'string' ==
						  typeof (n = (function (t, e) {
								try {
									return t[e];
								} catch (t) {}
						  })((e = a(t)), s))
						? n
						: l
						? o(e)
						: 'Object' === (r = o(e)) && i(e.callee)
						? 'Arguments'
						: r;
			  };
	},
	function (t, e, n) {
		'use strict';
		var r = n(9);
		t.exports = r([].slice);
	},
	,
	function (t, e, n) {
		'use strict';
		var r = n(8).navigator,
			i = r && r.userAgent;
		t.exports = i ? String(i) : '';
	},
	function (t, e, n) {
		'use strict';
		var r = n(233);
		t.exports = function (t) {
			var e = +t;
			return e != e || 0 === e ? 0 : r(e);
		};
	},
	,
	function (t, e, n) {
		'use strict';
		var r = n(31).f,
			i = n(22),
			o = n(17)('toStringTag');
		t.exports = function (t, e, n) {
			t && !n && (t = t.prototype), t && !i(t, o) && r(t, o, { configurable: !0, value: e });
		};
	},
	function (t, e, n) {
		'use strict';
		var r = n(148),
			i = n(31);
		t.exports = function (t, e, n) {
			return (
				n.get && r(n.get, e, { getter: !0 }),
				n.set && r(n.set, e, { setter: !0 }),
				i.f(t, e, n)
			);
		};
	},
	function (t, e, n) {
		'use strict';
		var r = String;
		t.exports = function (t) {
			try {
				return r(t);
			} catch (t) {
				return 'Object';
			}
		};
	},
	,
	function (t, e, n) {
		'use strict';
		var r = n(34),
			i = n(41);
		t.exports = function (t, e) {
			var n = t[e];
			return i(n) ? void 0 : r(n);
		};
	},
	function (t, e, n) {
		'use strict';
		var r = n(55),
			i = Math.min;
		t.exports = function (t) {
			var e = r(t);
			return e > 0 ? i(e, 9007199254740991) : 0;
		};
	},
	function (t, e, n) {
		'use strict';
		t.exports = function (t, e) {
			return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
		};
	},
	,
	,
	,
	,
	,
	,
	function (t, e, n) {
		'use strict';
		var r = n(102);
		t.exports = function (t, e) {
			return r[t] || (r[t] = e || {});
		};
	},
	function (t, e, n) {
		'use strict';
		var r = n(75),
			i = n(7),
			o = n(8).String;
		t.exports =
			!!Object.getOwnPropertySymbols &&
			!i(function () {
				var t = Symbol('symbol detection');
				return !o(t) || !(Object(t) instanceof Symbol) || (!Symbol.sham && r && r < 41);
			});
	},
	function (t, e, n) {
		'use strict';
		var r = n(50),
			i = TypeError;
		t.exports = function (t, e) {
			if (r(e, t)) return t;
			throw new i('Incorrect invocation');
		};
	},
	function (t, e, n) {
		'use strict';
		var r = n(76),
			i = Function.prototype,
			o = i.apply,
			s = i.call;
		t.exports =
			('object' == typeof Reflect && Reflect.apply) ||
			(r
				? s.bind(o)
				: function () {
						return s.apply(o, arguments);
				  });
	},
	,
	function (t, e, n) {
		'use strict';
		var r,
			i,
			o = n(8),
			s = n(54),
			a = o.process,
			l = o.Deno,
			c = (a && a.versions) || (l && l.version),
			u = c && c.v8;
		u && (i = (r = u.split('.'))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
			!i &&
				s &&
				(!(r = s.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
				(r = s.match(/Chrome\/(\d+)/)) &&
				(i = +r[1]),
			(t.exports = i);
	},
	function (t, e, n) {
		'use strict';
		var r = n(7);
		t.exports = !r(function () {
			var t = function () {}.bind();
			return 'function' != typeof t || t.hasOwnProperty('prototype');
		});
	},
	function (t, e, n) {
		'use strict';
		var r = n(8);
		t.exports = r.Promise;
	},
	function (t, e, n) {
		'use strict';
		var r = n(19),
			i = n(18),
			o = n(113),
			s = n(63),
			a = n(42),
			l = n(100),
			c = n(22),
			u = n(147),
			f = Object.getOwnPropertyDescriptor;
		e.f = r
			? f
			: function (t, e) {
					if (((t = a(t)), (e = l(e)), u))
						try {
							return f(t, e);
						} catch (t) {}
					if (c(t, e)) return s(!i(o.f, t, e), t[e]);
			  };
	},
	,
	function (t, e, n) {
		'use strict';
		var r = n(9),
			i = 0,
			o = Math.random(),
			s = r((1).toString);
		t.exports = function (t) {
			return 'Symbol(' + (void 0 === t ? '' : t) + ')_' + s(++i + o, 36);
		};
	},
	function (t, e, n) {
		'use strict';
		var r = n(33),
			i = n(15),
			o = n(50),
			s = n(138),
			a = Object;
		t.exports = s
			? function (t) {
					return 'symbol' == typeof t;
			  }
			: function (t) {
					var e = r('Symbol');
					return i(e) && o(e.prototype, a(t));
			  };
	},
	function (t, e, n) {
		'use strict';
		var r = n(175),
			i = n(140).concat('length', 'prototype');
		e.f =
			Object.getOwnPropertyNames ||
			function (t) {
				return r(t, i);
			};
	},
	function (t, e, n) {
		'use strict';
		var r = n(55),
			i = Math.max,
			o = Math.min;
		t.exports = function (t, e) {
			var n = r(t);
			return n < 0 ? i(n + e, 0) : o(n, e);
		};
	},
	function (t, e, n) {
		'use strict';
		var r = n(234),
			i = n(21),
			o = n(40),
			s = n(235);
		t.exports =
			Object.setPrototypeOf ||
			('__proto__' in {}
				? (function () {
						var t,
							e = !1,
							n = {};
						try {
							(t = r(Object.prototype, '__proto__', 'set'))(n, []),
								(e = n instanceof Array);
						} catch (t) {}
						return function (n, r) {
							return o(n), s(r), i(n) ? (e ? t(n, r) : (n.__proto__ = r), n) : n;
						};
				  })()
				: void 0);
	},
	function (t, e, n) {
		'use strict';
		var r = n(8),
			i = n(77),
			o = n(15),
			s = n(111),
			a = n(112),
			l = n(17),
			c = n(166),
			u = n(37),
			f = n(75),
			p = i && i.prototype,
			d = l('species'),
			h = !1,
			g = o(r.PromiseRejectionEvent),
			m = s('Promise', function () {
				var t = a(i),
					e = t !== String(i);
				if (!e && 66 === f) return !0;
				if (u && (!p.catch || !p.finally)) return !0;
				if (!f || f < 51 || !/native code/.test(t)) {
					var n = new i(function (t) {
							t(1);
						}),
						r = function (t) {
							t(
								function () {},
								function () {}
							);
						};
					if ((((n.constructor = {})[d] = r), !(h = n.then(function () {}) instanceof r)))
						return !0;
				}
				return !(e || ('BROWSER' !== c && 'DENO' !== c) || g);
			});
		t.exports = { CONSTRUCTOR: m, REJECTION_EVENT: g, SUBCLASSING: h };
	},
	function (t, e, n) {
		'use strict';
		var r = n(34),
			i = TypeError,
			o = function (t) {
				var e, n;
				(this.promise = new t(function (t, r) {
					if (void 0 !== e || void 0 !== n) throw new i('Bad Promise constructor');
					(e = t), (n = r);
				})),
					(this.resolve = r(e)),
					(this.reject = r(n));
			};
		t.exports.f = function (t) {
			return new o(t);
		};
	},
	function (t, e, n) {
		'use strict';
		t.exports = {};
	},
	function (t, e, n) {
		'use strict';
		var r = n(19),
			i = n(22),
			o = Function.prototype,
			s = r && Object.getOwnPropertyDescriptor,
			a = i(o, 'name'),
			l = a && 'something' === function () {}.name,
			c = a && (!r || (r && s(o, 'name').configurable));
		t.exports = { EXISTS: a, PROPER: l, CONFIGURABLE: c };
	},
	,
	,
	function (t, e, n) {
		'use strict';
		var r = n(46),
			i = n(18),
			o = n(24),
			s = n(59),
			a = n(143),
			l = n(29),
			c = n(50),
			u = n(119),
			f = n(93),
			p = n(178),
			d = TypeError,
			h = function (t, e) {
				(this.stopped = t), (this.result = e);
			},
			g = h.prototype;
		t.exports = function (t, e, n) {
			var m,
				v,
				y,
				b,
				x,
				w,
				A,
				T = n && n.that,
				C = !(!n || !n.AS_ENTRIES),
				S = !(!n || !n.IS_RECORD),
				E = !(!n || !n.IS_ITERATOR),
				k = !(!n || !n.INTERRUPTED),
				D = r(e, T),
				j = function (t) {
					return m && p(m, 'normal', t), new h(!0, t);
				},
				$ = function (t) {
					return C ? (o(t), k ? D(t[0], t[1], j) : D(t[0], t[1])) : k ? D(t, j) : D(t);
				};
			if (S) m = t.iterator;
			else if (E) m = t;
			else {
				if (!(v = f(t))) throw new d(s(t) + ' is not iterable');
				if (a(v)) {
					for (y = 0, b = l(t); b > y; y++) if ((x = $(t[y])) && c(g, x)) return x;
					return new h(!1);
				}
				m = u(t, v);
			}
			for (w = S ? t.next : m.next; !(A = i(w, m)).done; ) {
				try {
					x = $(A.value);
				} catch (t) {
					p(m, 'throw', t);
				}
				if ('object' == typeof x && x && c(g, x)) return x;
			}
			return new h(!1);
		};
	},
	function (t, e, n) {
		'use strict';
		t.exports = {};
	},
	function (t, e, n) {
		'use strict';
		var r = n(51),
			i = n(61),
			o = n(41),
			s = n(92),
			a = n(17)('iterator');
		t.exports = function (t) {
			if (!o(t)) return i(t, a) || i(t, '@@iterator') || s[r(t)];
		};
	},
	,
	function (t, e, n) {
		'use strict';
		var r = n(42),
			i = n(83),
			o = n(29),
			s = function (t) {
				return function (e, n, s) {
					var a = r(e),
						l = o(a);
					if (0 === l) return !t && -1;
					var c,
						u = i(s, l);
					if (t && n != n) {
						for (; l > u; ) if ((c = a[u++]) != c) return !0;
					} else for (; l > u; u++) if ((t || u in a) && a[u] === n) return t || u || 0;
					return !t && -1;
				};
			};
		t.exports = { includes: s(!0), indexOf: s(!1) };
	},
	function (t, e) {
		function n(e) {
			return (
				(t.exports = n =
					'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
						? function (t) {
								return typeof t;
						  }
						: function (t) {
								return t &&
									'function' == typeof Symbol &&
									t.constructor === Symbol &&
									t !== Symbol.prototype
									? 'symbol'
									: typeof t;
						  }),
				(t.exports.__esModule = !0),
				(t.exports.default = t.exports),
				n(e)
			);
		}
		(t.exports = n), (t.exports.__esModule = !0), (t.exports.default = t.exports);
	},
	,
	,
	function (t, e, n) {
		'use strict';
		var r = n(8),
			i = n(21),
			o = r.document,
			s = i(o) && i(o.createElement);
		t.exports = function (t) {
			return s ? o.createElement(t) : {};
		};
	},
	function (t, e, n) {
		'use strict';
		var r = n(151),
			i = n(81);
		t.exports = function (t) {
			var e = r(t, 'string');
			return i(e) ? e : e + '';
		};
	},
	function (t, e, n) {
		'use strict';
		var r = {};
		(r[n(17)('toStringTag')] = 'z'), (t.exports = '[object z]' === String(r));
	},
	function (t, e, n) {
		'use strict';
		var r = n(37),
			i = n(8),
			o = n(110),
			s = (t.exports = i['__core-js_shared__'] || o('__core-js_shared__', {}));
		(s.versions || (s.versions = [])).push({
			version: '3.38.1',
			mode: r ? 'pure' : 'global',
			copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
			license: 'https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE',
			source: 'https://github.com/zloirock/core-js',
		});
	},
	function (t, e, n) {
		'use strict';
		var r = n(70),
			i = n(80),
			o = r('keys');
		t.exports = function (t) {
			return o[t] || (o[t] = i(t));
		};
	},
	function (t, e, n) {
		'use strict';
		var r = n(166);
		t.exports = 'NODE' === r;
	},
	,
	,
	,
	,
	,
	function (t, e, n) {
		'use strict';
		var r = n(8),
			i = Object.defineProperty;
		t.exports = function (t, e) {
			try {
				i(r, t, { value: e, configurable: !0, writable: !0 });
			} catch (n) {
				r[t] = e;
			}
			return e;
		};
	},
	function (t, e, n) {
		'use strict';
		var r = n(7),
			i = n(15),
			o = /#|\.prototype\./,
			s = function (t, e) {
				var n = l[a(t)];
				return n === u || (n !== c && (i(e) ? r(e) : !!e));
			},
			a = (s.normalize = function (t) {
				return String(t).replace(o, '.').toLowerCase();
			}),
			l = (s.data = {}),
			c = (s.NATIVE = 'N'),
			u = (s.POLYFILL = 'P');
		t.exports = s;
	},
	function (t, e, n) {
		'use strict';
		var r = n(9),
			i = n(15),
			o = n(102),
			s = r(Function.toString);
		i(o.inspectSource) ||
			(o.inspectSource = function (t) {
				return s(t);
			}),
			(t.exports = o.inspectSource);
	},
	function (t, e, n) {
		'use strict';
		var r = {}.propertyIsEnumerable,
			i = Object.getOwnPropertyDescriptor,
			o = i && !r.call({ 1: 2 }, 1);
		e.f = o
			? function (t) {
					var e = i(this, t);
					return !!e && e.enumerable;
			  }
			: r;
	},
	function (t, e, n) {
		'use strict';
		var r = n(9),
			i = n(7),
			o = n(43),
			s = Object,
			a = r(''.split);
		t.exports = i(function () {
			return !s('z').propertyIsEnumerable(0);
		})
			? function (t) {
					return 'String' === o(t) ? a(t, '') : s(t);
			  }
			: s;
	},
	function (t, e, n) {
		'use strict';
		e.f = Object.getOwnPropertySymbols;
	},
	function (t, e, n) {
		'use strict';
		var r = n(33),
			i = n(58),
			o = n(17),
			s = n(19),
			a = o('species');
		t.exports = function (t) {
			var e = r(t);
			s &&
				e &&
				!e[a] &&
				i(e, a, {
					configurable: !0,
					get: function () {
						return this;
					},
				});
		};
	},
	function (t, e, n) {
		'use strict';
		var r = n(9),
			i = n(7),
			o = n(15),
			s = n(51),
			a = n(33),
			l = n(112),
			c = function () {},
			u = a('Reflect', 'construct'),
			f = /^\s*(?:class|function)\b/,
			p = r(f.exec),
			d = !f.test(c),
			h = function (t) {
				if (!o(t)) return !1;
				try {
					return u(c, [], t), !0;
				} catch (t) {
					return !1;
				}
			},
			g = function (t) {
				if (!o(t)) return !1;
				switch (s(t)) {
					case 'AsyncFunction':
					case 'GeneratorFunction':
					case 'AsyncGeneratorFunction':
						return !1;
				}
				try {
					return d || !!p(f, l(t));
				} catch (t) {
					return !0;
				}
			};
		(g.sham = !0),
			(t.exports =
				!u ||
				i(function () {
					var t;
					return (
						h(h.call) ||
						!h(Object) ||
						!h(function () {
							t = !0;
						}) ||
						t
					);
				})
					? g
					: h);
	},
	function (t, e, n) {
		'use strict';
		var r = n(43),
			i = n(9);
		t.exports = function (t) {
			if ('Function' === r(t)) return i(t);
		};
	},
	function (t, e, n) {
		'use strict';
		var r = n(18),
			i = n(34),
			o = n(24),
			s = n(59),
			a = n(93),
			l = TypeError;
		t.exports = function (t, e) {
			var n = arguments.length < 2 ? a(t) : e;
			if (i(n)) return o(r(n, t));
			throw new l(s(t) + ' is not iterable');
		};
	},
	function (t, e, n) {
		'use strict';
		var r = n(17)('iterator'),
			i = !1;
		try {
			var o = 0,
				s = {
					next: function () {
						return { done: !!o++ };
					},
					return: function () {
						i = !0;
					},
				};
			(s[r] = function () {
				return this;
			}),
				Array.from(s, function () {
					throw 2;
				});
		} catch (t) {}
		t.exports = function (t, e) {
			try {
				if (!e && !i) return !1;
			} catch (t) {
				return !1;
			}
			var n = !1;
			try {
				var o = {};
				(o[r] = function () {
					return {
						next: function () {
							return { done: (n = !0) };
						},
					};
				}),
					t(o);
			} catch (t) {}
			return n;
		};
	},
	,
	,
	,
	,
	,
	,
	function (t, e, n) {
		'use strict';
		var r = n(24),
			i = n(141),
			o = n(41),
			s = n(17)('species');
		t.exports = function (t, e) {
			var n,
				a = r(t).constructor;
			return void 0 === a || o((n = r(a)[s])) ? e : i(n);
		};
	},
	function (t, e, n) {
		'use strict';
		t.exports = function (t) {
			try {
				return { error: !1, value: t() };
			} catch (t) {
				return { error: !0, value: t };
			}
		};
	},
	,
	,
	,
	,
	,
	,
	,
	,
	,
	function (t, e, n) {
		'use strict';
		var r = n(71);
		t.exports = r && !Symbol.sham && 'symbol' == typeof Symbol.iterator;
	},
	function (t, e, n) {
		'use strict';
		var r = n(22),
			i = n(174),
			o = n(78),
			s = n(31);
		t.exports = function (t, e, n) {
			for (var a = i(e), l = s.f, c = o.f, u = 0; u < a.length; u++) {
				var f = a[u];
				r(t, f) || (n && r(n, f)) || l(t, f, c(e, f));
			}
		};
	},
	function (t, e, n) {
		'use strict';
		t.exports = [
			'constructor',
			'hasOwnProperty',
			'isPrototypeOf',
			'propertyIsEnumerable',
			'toLocaleString',
			'toString',
			'valueOf',
		];
	},
	function (t, e, n) {
		'use strict';
		var r = n(117),
			i = n(59),
			o = TypeError;
		t.exports = function (t) {
			if (r(t)) return t;
			throw new o(i(t) + ' is not a constructor');
		};
	},
	function (t, e, n) {
		'use strict';
		var r = TypeError;
		t.exports = function (t, e) {
			if (t < e) throw new r('Not enough arguments');
			return t;
		};
	},
	function (t, e, n) {
		'use strict';
		var r = n(17),
			i = n(92),
			o = r('iterator'),
			s = Array.prototype;
		t.exports = function (t) {
			return void 0 !== t && (i.Array === t || s[o] === t);
		};
	},
	,
	,
	,
	function (t, e, n) {
		'use strict';
		var r = n(19),
			i = n(7),
			o = n(99);
		t.exports =
			!r &&
			!i(function () {
				return (
					7 !==
					Object.defineProperty(o('div'), 'a', {
						get: function () {
							return 7;
						},
					}).a
				);
			});
	},
	function (t, e, n) {
		'use strict';
		var r = n(9),
			i = n(7),
			o = n(15),
			s = n(22),
			a = n(19),
			l = n(88).CONFIGURABLE,
			c = n(112),
			u = n(35),
			f = u.enforce,
			p = u.get,
			d = String,
			h = Object.defineProperty,
			g = r(''.slice),
			m = r(''.replace),
			v = r([].join),
			y =
				a &&
				!i(function () {
					return 8 !== h(function () {}, 'length', { value: 8 }).length;
				}),
			b = String(String).split('String'),
			x = (t.exports = function (t, e, n) {
				'Symbol(' === g(d(e), 0, 7) &&
					(e = '[' + m(d(e), /^Symbol\(([^)]*)\).*$/, '$1') + ']'),
					n && n.getter && (e = 'get ' + e),
					n && n.setter && (e = 'set ' + e),
					(!s(t, 'name') || (l && t.name !== e)) &&
						(a ? h(t, 'name', { value: e, configurable: !0 }) : (t.name = e)),
					y &&
						n &&
						s(n, 'arity') &&
						t.length !== n.arity &&
						h(t, 'length', { value: n.arity });
				try {
					n && s(n, 'constructor') && n.constructor
						? a && h(t, 'prototype', { writable: !1 })
						: t.prototype && (t.prototype = void 0);
				} catch (t) {}
				var r = f(t);
				return s(r, 'source') || (r.source = v(b, 'string' == typeof e ? e : '')), t;
			});
		Function.prototype.toString = x(function () {
			return (o(this) && p(this).source) || c(this);
		}, 'toString');
	},
	,
	function (t, e, n) {
		'use strict';
		var r = n(19),
			i = n(7);
		t.exports =
			r &&
			i(function () {
				return (
					42 !==
					Object.defineProperty(function () {}, 'prototype', { value: 42, writable: !1 })
						.prototype
				);
			});
	},
	function (t, e, n) {
		'use strict';
		var r = n(18),
			i = n(21),
			o = n(81),
			s = n(61),
			a = n(186),
			l = n(17),
			c = TypeError,
			u = l('toPrimitive');
		t.exports = function (t, e) {
			if (!i(t) || o(t)) return t;
			var n,
				l = s(t, u);
			if (l) {
				if ((void 0 === e && (e = 'default'), (n = r(l, t, e)), !i(n) || o(n))) return n;
				throw new c("Can't convert object to primitive value");
			}
			return void 0 === e && (e = 'number'), a(t, e);
		};
	},
	function (t, e, n) {
		var r = n(96).default,
			i = n(192);
		(t.exports = function (t) {
			var e = i(t, 'string');
			return 'symbol' == r(e) ? e : e + '';
		}),
			(t.exports.__esModule = !0),
			(t.exports.default = t.exports);
	},
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	function (t, e, n) {
		'use strict';
		var r = n(8),
			i = n(54),
			o = n(43),
			s = function (t) {
				return i.slice(0, t.length) === t;
			};
		t.exports = s('Bun/')
			? 'BUN'
			: s('Cloudflare-Workers')
			? 'CLOUDFLARE'
			: s('Deno/')
			? 'DENO'
			: s('Node.js/')
			? 'NODE'
			: r.Bun && 'string' == typeof Bun.version
			? 'BUN'
			: r.Deno && 'object' == typeof Deno.version
			? 'DENO'
			: 'process' === o(r.process)
			? 'NODE'
			: r.window && r.document
			? 'BROWSER'
			: 'REST';
	},
	function (t, e, n) {
		'use strict';
		var r,
			i,
			o,
			s,
			a = n(8),
			l = n(73),
			c = n(46),
			u = n(15),
			f = n(22),
			p = n(7),
			d = n(176),
			h = n(52),
			g = n(99),
			m = n(142),
			v = n(168),
			y = n(104),
			b = a.setImmediate,
			x = a.clearImmediate,
			w = a.process,
			A = a.Dispatch,
			T = a.Function,
			C = a.MessageChannel,
			S = a.String,
			E = 0,
			k = {};
		p(function () {
			r = a.location;
		});
		var D = function (t) {
				if (f(k, t)) {
					var e = k[t];
					delete k[t], e();
				}
			},
			j = function (t) {
				return function () {
					D(t);
				};
			},
			$ = function (t) {
				D(t.data);
			},
			O = function (t) {
				a.postMessage(S(t), r.protocol + '//' + r.host);
			};
		(b && x) ||
			((b = function (t) {
				m(arguments.length, 1);
				var e = u(t) ? t : T(t),
					n = h(arguments, 1);
				return (
					(k[++E] = function () {
						l(e, void 0, n);
					}),
					i(E),
					E
				);
			}),
			(x = function (t) {
				delete k[t];
			}),
			y
				? (i = function (t) {
						w.nextTick(j(t));
				  })
				: A && A.now
				? (i = function (t) {
						A.now(j(t));
				  })
				: C && !v
				? ((s = (o = new C()).port2), (o.port1.onmessage = $), (i = c(s.postMessage, s)))
				: a.addEventListener &&
				  u(a.postMessage) &&
				  !a.importScripts &&
				  r &&
				  'file:' !== r.protocol &&
				  !p(O)
				? ((i = O), a.addEventListener('message', $, !1))
				: (i =
						'onreadystatechange' in g('script')
							? function (t) {
									d.appendChild(g('script')).onreadystatechange = function () {
										d.removeChild(this), D(t);
									};
							  }
							: function (t) {
									setTimeout(j(t), 0);
							  })),
			(t.exports = { set: b, clear: x });
	},
	function (t, e, n) {
		'use strict';
		var r = n(54);
		t.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(r);
	},
	function (t, e, n) {
		'use strict';
		var r = function () {
			(this.head = null), (this.tail = null);
		};
		(r.prototype = {
			add: function (t) {
				var e = { item: t, next: null },
					n = this.tail;
				n ? (n.next = e) : (this.head = e), (this.tail = e);
			},
			get: function () {
				var t = this.head;
				if (t) return null === (this.head = t.next) && (this.tail = null), t.item;
			},
		}),
			(t.exports = r);
	},
	function (t, e, n) {
		'use strict';
		var r = n(77),
			i = n(120),
			o = n(85).CONSTRUCTOR;
		t.exports =
			o ||
			!i(function (t) {
				r.all(t).then(void 0, function () {});
			});
	},
	,
	,
	,
	function (t, e, n) {
		'use strict';
		var r = n(33),
			i = n(9),
			o = n(82),
			s = n(115),
			a = n(24),
			l = i([].concat);
		t.exports =
			r('Reflect', 'ownKeys') ||
			function (t) {
				var e = o.f(a(t)),
					n = s.f;
				return n ? l(e, n(t)) : e;
			};
	},
	function (t, e, n) {
		'use strict';
		var r = n(9),
			i = n(22),
			o = n(42),
			s = n(95).indexOf,
			a = n(87),
			l = r([].push);
		t.exports = function (t, e) {
			var n,
				r = o(t),
				c = 0,
				u = [];
			for (n in r) !i(a, n) && i(r, n) && l(u, n);
			for (; e.length > c; ) i(r, (n = e[c++])) && (~s(u, n) || l(u, n));
			return u;
		};
	},
	function (t, e, n) {
		'use strict';
		var r = n(33);
		t.exports = r('document', 'documentElement');
	},
	function (t, e, n) {
		'use strict';
		var r = n(8),
			i = n(19),
			o = Object.getOwnPropertyDescriptor;
		t.exports = function (t) {
			if (!i) return r[t];
			var e = o(r, t);
			return e && e.value;
		};
	},
	function (t, e, n) {
		'use strict';
		var r = n(18),
			i = n(24),
			o = n(61);
		t.exports = function (t, e, n) {
			var s, a;
			i(t);
			try {
				if (!(s = o(t, 'return'))) {
					if ('throw' === e) throw n;
					return n;
				}
				s = r(s, t);
			} catch (t) {
				(a = !0), (s = t);
			}
			if ('throw' === e) throw n;
			if (a) throw s;
			return i(s), n;
		};
	},
	,
	,
	,
	,
	,
	,
	,
	function (t, e, n) {
		'use strict';
		var r = n(18),
			i = n(15),
			o = n(21),
			s = TypeError;
		t.exports = function (t, e) {
			var n, a;
			if ('string' === e && i((n = t.toString)) && !o((a = r(n, t)))) return a;
			if (i((n = t.valueOf)) && !o((a = r(n, t)))) return a;
			if ('string' !== e && i((n = t.toString)) && !o((a = r(n, t)))) return a;
			throw new s("Can't convert object to primitive value");
		};
	},
	function (t, e, n) {
		'use strict';
		var r = n(8),
			i = n(15),
			o = r.WeakMap;
		t.exports = i(o) && /native code/.test(String(o));
	},
	function (t, e, n) {
		'use strict';
		var r = n(101),
			i = n(51);
		t.exports = r
			? {}.toString
			: function () {
					return '[object ' + i(this) + ']';
			  };
	},
	function (t, e, n) {
		'use strict';
		var r = n(24),
			i = n(21),
			o = n(86);
		t.exports = function (t, e) {
			if ((r(t), i(e) && e.constructor === t)) return e;
			var n = o.f(t);
			return (0, n.resolve)(e), n.promise;
		};
	},
	,
	,
	function (t, e, n) {
		var r = n(96).default;
		(t.exports = function (t, e) {
			if ('object' != r(t) || !t) return t;
			var n = t[Symbol.toPrimitive];
			if (void 0 !== n) {
				var i = n.call(t, e || 'default');
				if ('object' != r(i)) return i;
				throw new TypeError('@@toPrimitive must return a primitive value.');
			}
			return ('string' === e ? String : Number)(t);
		}),
			(t.exports.__esModule = !0),
			(t.exports.default = t.exports);
	},
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	function (t, e, n) {
		'use strict';
		var r,
			i,
			o,
			s = n(10),
			a = n(37),
			l = n(104),
			c = n(8),
			u = n(18),
			f = n(28),
			p = n(84),
			d = n(57),
			h = n(116),
			g = n(34),
			m = n(15),
			v = n(21),
			y = n(72),
			b = n(127),
			x = n(167).set,
			w = n(237),
			A = n(240),
			T = n(128),
			C = n(169),
			S = n(35),
			E = n(77),
			k = n(85),
			D = n(86),
			j = k.CONSTRUCTOR,
			$ = k.REJECTION_EVENT,
			O = k.SUBCLASSING,
			N = S.getterFor('Promise'),
			P = S.set,
			R = E && E.prototype,
			I = E,
			L = R,
			_ = c.TypeError,
			M = c.document,
			H = c.process,
			q = D.f,
			U = q,
			F = !!(M && M.createEvent && c.dispatchEvent),
			B = function (t) {
				var e;
				return !(!v(t) || !m((e = t.then))) && e;
			},
			W = function (t, e) {
				var n,
					r,
					i,
					o = e.value,
					s = 1 === e.state,
					a = s ? t.ok : t.fail,
					l = t.resolve,
					c = t.reject,
					f = t.domain;
				try {
					a
						? (s || (2 === e.rejection && G(e), (e.rejection = 1)),
						  !0 === a
								? (n = o)
								: (f && f.enter(), (n = a(o)), f && (f.exit(), (i = !0))),
						  n === t.promise
								? c(new _('Promise-chain cycle'))
								: (r = B(n))
								? u(r, n, l, c)
								: l(n))
						: c(o);
				} catch (t) {
					f && !i && f.exit(), c(t);
				}
			},
			z = function (t, e) {
				t.notified ||
					((t.notified = !0),
					w(function () {
						for (var n, r = t.reactions; (n = r.get()); ) W(n, t);
						(t.notified = !1), e && !t.rejection && X(t);
					}));
			},
			V = function (t, e, n) {
				var r, i;
				F
					? (((r = M.createEvent('Event')).promise = e),
					  (r.reason = n),
					  r.initEvent(t, !1, !0),
					  c.dispatchEvent(r))
					: (r = { promise: e, reason: n }),
					!$ && (i = c['on' + t])
						? i(r)
						: 'unhandledrejection' === t && A('Unhandled promise rejection', n);
			},
			X = function (t) {
				u(x, c, function () {
					var e,
						n = t.facade,
						r = t.value;
					if (
						K(t) &&
						((e = T(function () {
							l ? H.emit('unhandledRejection', r, n) : V('unhandledrejection', n, r);
						})),
						(t.rejection = l || K(t) ? 2 : 1),
						e.error)
					)
						throw e.value;
				});
			},
			K = function (t) {
				return 1 !== t.rejection && !t.parent;
			},
			G = function (t) {
				u(x, c, function () {
					var e = t.facade;
					l ? H.emit('rejectionHandled', e) : V('rejectionhandled', e, t.value);
				});
			},
			Y = function (t, e, n) {
				return function (r) {
					t(e, r, n);
				};
			},
			J = function (t, e, n) {
				t.done || ((t.done = !0), n && (t = n), (t.value = e), (t.state = 2), z(t, !0));
			},
			Q = function (t, e, n) {
				if (!t.done) {
					(t.done = !0), n && (t = n);
					try {
						if (t.facade === e) throw new _("Promise can't be resolved itself");
						var r = B(e);
						r
							? w(function () {
									var n = { done: !1 };
									try {
										u(r, e, Y(Q, n, t), Y(J, n, t));
									} catch (e) {
										J(n, e, t);
									}
							  })
							: ((t.value = e), (t.state = 1), z(t, !1));
					} catch (e) {
						J({ done: !1 }, e, t);
					}
				}
			};
		if (
			j &&
			((L = (I = function (t) {
				y(this, L), g(t), u(r, this);
				var e = N(this);
				try {
					t(Y(Q, e), Y(J, e));
				} catch (t) {
					J(e, t);
				}
			}).prototype),
			((r = function (t) {
				P(this, {
					type: 'Promise',
					done: !1,
					notified: !1,
					parent: !1,
					reactions: new C(),
					rejection: !1,
					state: 0,
					value: null,
				});
			}).prototype = f(L, 'then', function (t, e) {
				var n = N(this),
					r = q(b(this, I));
				return (
					(n.parent = !0),
					(r.ok = !m(t) || t),
					(r.fail = m(e) && e),
					(r.domain = l ? H.domain : void 0),
					0 === n.state
						? n.reactions.add(r)
						: w(function () {
								W(r, n);
						  }),
					r.promise
				);
			})),
			(i = function () {
				var t = new r(),
					e = N(t);
				(this.promise = t), (this.resolve = Y(Q, e)), (this.reject = Y(J, e));
			}),
			(D.f = q =
				function (t) {
					return t === I || void 0 === t ? new i(t) : U(t);
				}),
			!a && m(E) && R !== Object.prototype)
		) {
			(o = R.then),
				O ||
					f(
						R,
						'then',
						function (t, e) {
							var n = this;
							return new I(function (t, e) {
								u(o, n, t, e);
							}).then(t, e);
						},
						{ unsafe: !0 }
					);
			try {
				delete R.constructor;
			} catch (t) {}
			p && p(R, L);
		}
		s({ global: !0, constructor: !0, wrap: !0, forced: j }, { Promise: I }),
			d(I, 'Promise', !1, !0),
			h('Promise');
	},
	function (t, e, n) {
		'use strict';
		var r = Math.ceil,
			i = Math.floor;
		t.exports =
			Math.trunc ||
			function (t) {
				var e = +t;
				return (e > 0 ? i : r)(e);
			};
	},
	function (t, e, n) {
		'use strict';
		var r = n(9),
			i = n(34);
		t.exports = function (t, e, n) {
			try {
				return r(i(Object.getOwnPropertyDescriptor(t, e)[n]));
			} catch (t) {}
		};
	},
	function (t, e, n) {
		'use strict';
		var r = n(236),
			i = String,
			o = TypeError;
		t.exports = function (t) {
			if (r(t)) return t;
			throw new o("Can't set " + i(t) + ' as a prototype');
		};
	},
	function (t, e, n) {
		'use strict';
		var r = n(21);
		t.exports = function (t) {
			return r(t) || null === t;
		};
	},
	function (t, e, n) {
		'use strict';
		var r,
			i,
			o,
			s,
			a,
			l = n(8),
			c = n(177),
			u = n(46),
			f = n(167).set,
			p = n(169),
			d = n(168),
			h = n(238),
			g = n(239),
			m = n(104),
			v = l.MutationObserver || l.WebKitMutationObserver,
			y = l.document,
			b = l.process,
			x = l.Promise,
			w = c('queueMicrotask');
		if (!w) {
			var A = new p(),
				T = function () {
					var t, e;
					for (m && (t = b.domain) && t.exit(); (e = A.get()); )
						try {
							e();
						} catch (t) {
							throw (A.head && r(), t);
						}
					t && t.enter();
				};
			d || m || g || !v || !y
				? !h && x && x.resolve
					? (((s = x.resolve(void 0)).constructor = x),
					  (a = u(s.then, s)),
					  (r = function () {
							a(T);
					  }))
					: m
					? (r = function () {
							b.nextTick(T);
					  })
					: ((f = u(f, l)),
					  (r = function () {
							f(T);
					  }))
				: ((i = !0),
				  (o = y.createTextNode('')),
				  new v(T).observe(o, { characterData: !0 }),
				  (r = function () {
						o.data = i = !i;
				  })),
				(w = function (t) {
					A.head || r(), A.add(t);
				});
		}
		t.exports = w;
	},
	function (t, e, n) {
		'use strict';
		var r = n(54);
		t.exports = /ipad|iphone|ipod/i.test(r) && 'undefined' != typeof Pebble;
	},
	function (t, e, n) {
		'use strict';
		var r = n(54);
		t.exports = /web0s(?!.*chrome)/i.test(r);
	},
	function (t, e, n) {
		'use strict';
		t.exports = function (t, e) {
			try {
				1 === arguments.length ? console.error(t) : console.error(t, e);
			} catch (t) {}
		};
	},
	function (t, e, n) {
		'use strict';
		var r = n(10),
			i = n(18),
			o = n(34),
			s = n(86),
			a = n(128),
			l = n(91);
		r(
			{ target: 'Promise', stat: !0, forced: n(170) },
			{
				all: function (t) {
					var e = this,
						n = s.f(e),
						r = n.resolve,
						c = n.reject,
						u = a(function () {
							var n = o(e.resolve),
								s = [],
								a = 0,
								u = 1;
							l(t, function (t) {
								var o = a++,
									l = !1;
								u++,
									i(n, e, t).then(function (t) {
										l || ((l = !0), (s[o] = t), --u || r(s));
									}, c);
							}),
								--u || r(s);
						});
					return u.error && c(u.value), n.promise;
				},
			}
		);
	},
	function (t, e, n) {
		'use strict';
		var r = n(10),
			i = n(37),
			o = n(85).CONSTRUCTOR,
			s = n(77),
			a = n(33),
			l = n(15),
			c = n(28),
			u = s && s.prototype;
		if (
			(r(
				{ target: 'Promise', proto: !0, forced: o, real: !0 },
				{
					catch: function (t) {
						return this.then(void 0, t);
					},
				}
			),
			!i && l(s))
		) {
			var f = a('Promise').prototype.catch;
			u.catch !== f && c(u, 'catch', f, { unsafe: !0 });
		}
	},
	function (t, e, n) {
		'use strict';
		var r = n(10),
			i = n(18),
			o = n(34),
			s = n(86),
			a = n(128),
			l = n(91);
		r(
			{ target: 'Promise', stat: !0, forced: n(170) },
			{
				race: function (t) {
					var e = this,
						n = s.f(e),
						r = n.reject,
						c = a(function () {
							var s = o(e.resolve);
							l(t, function (t) {
								i(s, e, t).then(n.resolve, r);
							});
						});
					return c.error && r(c.value), n.promise;
				},
			}
		);
	},
	function (t, e, n) {
		'use strict';
		var r = n(10),
			i = n(86);
		r(
			{ target: 'Promise', stat: !0, forced: n(85).CONSTRUCTOR },
			{
				reject: function (t) {
					var e = i.f(this);
					return (0, e.reject)(t), e.promise;
				},
			}
		);
	},
	function (t, e, n) {
		'use strict';
		var r = n(10),
			i = n(33),
			o = n(37),
			s = n(77),
			a = n(85).CONSTRUCTOR,
			l = n(189),
			c = i('Promise'),
			u = o && !a;
		r(
			{ target: 'Promise', stat: !0, forced: o || a },
			{
				resolve: function (t) {
					return l(u && this === c ? s : this, t);
				},
			}
		);
	},
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	function (t, e, n) {},
	function (t, e, n) {
		(function (t) {
			/*!
			 * Bootstrap v3.4.1 (https://getbootstrap.com/)
			 * Copyright 2011-2019 Twitter, Inc.
			 * Licensed under the MIT license
			 */
			if (void 0 === t) throw new Error("Bootstrap's JavaScript requires jQuery");
			!(function (t) {
				'use strict';
				var e = t.fn.jquery.split(' ')[0].split('.');
				if ((e[0] < 2 && e[1] < 9) || (1 == e[0] && 9 == e[1] && e[2] < 1) || e[0] > 3)
					throw new Error(
						"Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4"
					);
			})(t),
				(function (t) {
					'use strict';
					(t.fn.emulateTransitionEnd = function (e) {
						var n = !1,
							r = this;
						t(this).one('bsTransitionEnd', function () {
							n = !0;
						});
						return (
							setTimeout(function () {
								n || t(r).trigger(t.support.transition.end);
							}, e),
							this
						);
					}),
						t(function () {
							(t.support.transition = (function () {
								var t = document.createElement('bootstrap'),
									e = {
										WebkitTransition: 'webkitTransitionEnd',
										MozTransition: 'transitionend',
										OTransition: 'oTransitionEnd otransitionend',
										transition: 'transitionend',
									};
								for (var n in e) if (void 0 !== t.style[n]) return { end: e[n] };
								return !1;
							})()),
								t.support.transition &&
									(t.event.special.bsTransitionEnd = {
										bindType: t.support.transition.end,
										delegateType: t.support.transition.end,
										handle: function (e) {
											if (t(e.target).is(this))
												return e.handleObj.handler.apply(this, arguments);
										},
									});
						});
				})(t),
				(function (t) {
					'use strict';
					var e = '[data-dismiss="alert"]',
						n = function (n) {
							t(n).on('click', e, this.close);
						};
					(n.VERSION = '3.4.1'),
						(n.TRANSITION_DURATION = 150),
						(n.prototype.close = function (e) {
							var r = t(this),
								i = r.attr('data-target');
							i || (i = (i = r.attr('href')) && i.replace(/.*(?=#[^\s]*$)/, '')),
								(i = '#' === i ? [] : i);
							var o = t(document).find(i);
							function s() {
								o.detach().trigger('closed.bs.alert').remove();
							}
							e && e.preventDefault(),
								o.length || (o = r.closest('.alert')),
								o.trigger((e = t.Event('close.bs.alert'))),
								e.isDefaultPrevented() ||
									(o.removeClass('in'),
									t.support.transition && o.hasClass('fade')
										? o
												.one('bsTransitionEnd', s)
												.emulateTransitionEnd(n.TRANSITION_DURATION)
										: s());
						});
					var r = t.fn.alert;
					(t.fn.alert = function (e) {
						return this.each(function () {
							var r = t(this),
								i = r.data('bs.alert');
							i || r.data('bs.alert', (i = new n(this))),
								'string' == typeof e && i[e].call(r);
						});
					}),
						(t.fn.alert.Constructor = n),
						(t.fn.alert.noConflict = function () {
							return (t.fn.alert = r), this;
						}),
						t(document).on('click.bs.alert.data-api', e, n.prototype.close);
				})(t),
				(function (t) {
					'use strict';
					var e = function (n, r) {
						(this.$element = t(n)),
							(this.options = t.extend({}, e.DEFAULTS, r)),
							(this.isLoading = !1);
					};
					function n(n) {
						return this.each(function () {
							var r = t(this),
								i = r.data('bs.button'),
								o = 'object' == typeof n && n;
							i || r.data('bs.button', (i = new e(this, o))),
								'toggle' == n ? i.toggle() : n && i.setState(n);
						});
					}
					(e.VERSION = '3.4.1'),
						(e.DEFAULTS = { loadingText: 'loading...' }),
						(e.prototype.setState = function (e) {
							var n = 'disabled',
								r = this.$element,
								i = r.is('input') ? 'val' : 'html',
								o = r.data();
							(e += 'Text'),
								null == o.resetText && r.data('resetText', r[i]()),
								setTimeout(
									t.proxy(function () {
										r[i](null == o[e] ? this.options[e] : o[e]),
											'loadingText' == e
												? ((this.isLoading = !0),
												  r.addClass(n).attr(n, n).prop(n, !0))
												: this.isLoading &&
												  ((this.isLoading = !1),
												  r.removeClass(n).removeAttr(n).prop(n, !1));
									}, this),
									0
								);
						}),
						(e.prototype.toggle = function () {
							var t = !0,
								e = this.$element.closest('[data-toggle="buttons"]');
							if (e.length) {
								var n = this.$element.find('input');
								'radio' == n.prop('type')
									? (n.prop('checked') && (t = !1),
									  e.find('.active').removeClass('active'),
									  this.$element.addClass('active'))
									: 'checkbox' == n.prop('type') &&
									  (n.prop('checked') !== this.$element.hasClass('active') &&
											(t = !1),
									  this.$element.toggleClass('active')),
									n.prop('checked', this.$element.hasClass('active')),
									t && n.trigger('change');
							} else
								this.$element.attr(
									'aria-pressed',
									!this.$element.hasClass('active')
								),
									this.$element.toggleClass('active');
						});
					var r = t.fn.button;
					(t.fn.button = n),
						(t.fn.button.Constructor = e),
						(t.fn.button.noConflict = function () {
							return (t.fn.button = r), this;
						}),
						t(document)
							.on(
								'click.bs.button.data-api',
								'[data-toggle^="button"]',
								function (e) {
									var r = t(e.target).closest('.btn');
									n.call(r, 'toggle'),
										t(e.target).is(
											'input[type="radio"], input[type="checkbox"]'
										) ||
											(e.preventDefault(),
											r.is('input,button')
												? r.trigger('focus')
												: r
														.find('input:visible,button:visible')
														.first()
														.trigger('focus'));
								}
							)
							.on(
								'focus.bs.button.data-api blur.bs.button.data-api',
								'[data-toggle^="button"]',
								function (e) {
									t(e.target)
										.closest('.btn')
										.toggleClass('focus', /^focus(in)?$/.test(e.type));
								}
							);
				})(t),
				(function (t) {
					'use strict';
					var e = function (e, n) {
						(this.$element = t(e)),
							(this.$indicators = this.$element.find('.carousel-indicators')),
							(this.options = n),
							(this.paused = null),
							(this.sliding = null),
							(this.interval = null),
							(this.$active = null),
							(this.$items = null),
							this.options.keyboard &&
								this.$element.on(
									'keydown.bs.carousel',
									t.proxy(this.keydown, this)
								),
							'hover' == this.options.pause &&
								!('ontouchstart' in document.documentElement) &&
								this.$element
									.on('mouseenter.bs.carousel', t.proxy(this.pause, this))
									.on('mouseleave.bs.carousel', t.proxy(this.cycle, this));
					};
					function n(n) {
						return this.each(function () {
							var r = t(this),
								i = r.data('bs.carousel'),
								o = t.extend({}, e.DEFAULTS, r.data(), 'object' == typeof n && n),
								s = 'string' == typeof n ? n : o.slide;
							i || r.data('bs.carousel', (i = new e(this, o))),
								'number' == typeof n
									? i.to(n)
									: s
									? i[s]()
									: o.interval && i.pause().cycle();
						});
					}
					(e.VERSION = '3.4.1'),
						(e.TRANSITION_DURATION = 600),
						(e.DEFAULTS = { interval: 5e3, pause: 'hover', wrap: !0, keyboard: !0 }),
						(e.prototype.keydown = function (t) {
							if (!/input|textarea/i.test(t.target.tagName)) {
								switch (t.which) {
									case 37:
										this.prev();
										break;
									case 39:
										this.next();
										break;
									default:
										return;
								}
								t.preventDefault();
							}
						}),
						(e.prototype.cycle = function (e) {
							return (
								e || (this.paused = !1),
								this.interval && clearInterval(this.interval),
								this.options.interval &&
									!this.paused &&
									(this.interval = setInterval(
										t.proxy(this.next, this),
										this.options.interval
									)),
								this
							);
						}),
						(e.prototype.getItemIndex = function (t) {
							return (
								(this.$items = t.parent().children('.item')),
								this.$items.index(t || this.$active)
							);
						}),
						(e.prototype.getItemForDirection = function (t, e) {
							var n = this.getItemIndex(e);
							if (
								(('prev' == t && 0 === n) ||
									('next' == t && n == this.$items.length - 1)) &&
								!this.options.wrap
							)
								return e;
							var r = (n + ('prev' == t ? -1 : 1)) % this.$items.length;
							return this.$items.eq(r);
						}),
						(e.prototype.to = function (t) {
							var e = this,
								n = this.getItemIndex(
									(this.$active = this.$element.find('.item.active'))
								);
							if (!(t > this.$items.length - 1 || t < 0))
								return this.sliding
									? this.$element.one('slid.bs.carousel', function () {
											e.to(t);
									  })
									: n == t
									? this.pause().cycle()
									: this.slide(t > n ? 'next' : 'prev', this.$items.eq(t));
						}),
						(e.prototype.pause = function (e) {
							return (
								e || (this.paused = !0),
								this.$element.find('.next, .prev').length &&
									t.support.transition &&
									(this.$element.trigger(t.support.transition.end),
									this.cycle(!0)),
								(this.interval = clearInterval(this.interval)),
								this
							);
						}),
						(e.prototype.next = function () {
							if (!this.sliding) return this.slide('next');
						}),
						(e.prototype.prev = function () {
							if (!this.sliding) return this.slide('prev');
						}),
						(e.prototype.slide = function (n, r) {
							var i = this.$element.find('.item.active'),
								o = r || this.getItemForDirection(n, i),
								s = this.interval,
								a = 'next' == n ? 'left' : 'right',
								l = this;
							if (o.hasClass('active')) return (this.sliding = !1);
							var c = o[0],
								u = t.Event('slide.bs.carousel', {
									relatedTarget: c,
									direction: a,
								});
							if ((this.$element.trigger(u), !u.isDefaultPrevented())) {
								if (
									((this.sliding = !0),
									s && this.pause(),
									this.$indicators.length)
								) {
									this.$indicators.find('.active').removeClass('active');
									var f = t(this.$indicators.children()[this.getItemIndex(o)]);
									f && f.addClass('active');
								}
								var p = t.Event('slid.bs.carousel', {
									relatedTarget: c,
									direction: a,
								});
								return (
									t.support.transition && this.$element.hasClass('slide')
										? (o.addClass(n),
										  'object' == typeof o && o.length && o[0].offsetWidth,
										  i.addClass(a),
										  o.addClass(a),
										  i
												.one('bsTransitionEnd', function () {
													o
														.removeClass([n, a].join(' '))
														.addClass('active'),
														i.removeClass(['active', a].join(' ')),
														(l.sliding = !1),
														setTimeout(function () {
															l.$element.trigger(p);
														}, 0);
												})
												.emulateTransitionEnd(e.TRANSITION_DURATION))
										: (i.removeClass('active'),
										  o.addClass('active'),
										  (this.sliding = !1),
										  this.$element.trigger(p)),
									s && this.cycle(),
									this
								);
							}
						});
					var r = t.fn.carousel;
					(t.fn.carousel = n),
						(t.fn.carousel.Constructor = e),
						(t.fn.carousel.noConflict = function () {
							return (t.fn.carousel = r), this;
						});
					var i = function (e) {
						var r = t(this),
							i = r.attr('href');
						i && (i = i.replace(/.*(?=#[^\s]+$)/, ''));
						var o = r.attr('data-target') || i,
							s = t(document).find(o);
						if (s.hasClass('carousel')) {
							var a = t.extend({}, s.data(), r.data()),
								l = r.attr('data-slide-to');
							l && (a.interval = !1),
								n.call(s, a),
								l && s.data('bs.carousel').to(l),
								e.preventDefault();
						}
					};
					t(document)
						.on('click.bs.carousel.data-api', '[data-slide]', i)
						.on('click.bs.carousel.data-api', '[data-slide-to]', i),
						t(window).on('load', function () {
							t('[data-ride="carousel"]').each(function () {
								var e = t(this);
								n.call(e, e.data());
							});
						});
				})(t),
				(function (t) {
					'use strict';
					var e = function (n, r) {
						(this.$element = t(n)),
							(this.options = t.extend({}, e.DEFAULTS, r)),
							(this.$trigger = t(
								'[data-toggle="collapse"][href="#' +
									n.id +
									'"],[data-toggle="collapse"][data-target="#' +
									n.id +
									'"]'
							)),
							(this.transitioning = null),
							this.options.parent
								? (this.$parent = this.getParent())
								: this.addAriaAndCollapsedClass(this.$element, this.$trigger),
							this.options.toggle && this.toggle();
					};
					function n(e) {
						var n,
							r =
								e.attr('data-target') ||
								((n = e.attr('href')) && n.replace(/.*(?=#[^\s]+$)/, ''));
						return t(document).find(r);
					}
					function r(n) {
						return this.each(function () {
							var r = t(this),
								i = r.data('bs.collapse'),
								o = t.extend({}, e.DEFAULTS, r.data(), 'object' == typeof n && n);
							!i && o.toggle && /show|hide/.test(n) && (o.toggle = !1),
								i || r.data('bs.collapse', (i = new e(this, o))),
								'string' == typeof n && i[n]();
						});
					}
					(e.VERSION = '3.4.1'),
						(e.TRANSITION_DURATION = 350),
						(e.DEFAULTS = { toggle: !0 }),
						(e.prototype.dimension = function () {
							return this.$element.hasClass('width') ? 'width' : 'height';
						}),
						(e.prototype.show = function () {
							if (!this.transitioning && !this.$element.hasClass('in')) {
								var n,
									i =
										this.$parent &&
										this.$parent
											.children('.panel')
											.children('.in, .collapsing');
								if (
									!(
										i &&
										i.length &&
										(n = i.data('bs.collapse')) &&
										n.transitioning
									)
								) {
									var o = t.Event('show.bs.collapse');
									if ((this.$element.trigger(o), !o.isDefaultPrevented())) {
										i &&
											i.length &&
											(r.call(i, 'hide'), n || i.data('bs.collapse', null));
										var s = this.dimension();
										this.$element
											.removeClass('collapse')
											.addClass('collapsing')
											[s](0)
											.attr('aria-expanded', !0),
											this.$trigger
												.removeClass('collapsed')
												.attr('aria-expanded', !0),
											(this.transitioning = 1);
										var a = function () {
											this.$element
												.removeClass('collapsing')
												.addClass('collapse in')
												[s](''),
												(this.transitioning = 0),
												this.$element.trigger('shown.bs.collapse');
										};
										if (!t.support.transition) return a.call(this);
										var l = t.camelCase(['scroll', s].join('-'));
										this.$element
											.one('bsTransitionEnd', t.proxy(a, this))
											.emulateTransitionEnd(e.TRANSITION_DURATION)
											[s](this.$element[0][l]);
									}
								}
							}
						}),
						(e.prototype.hide = function () {
							if (!this.transitioning && this.$element.hasClass('in')) {
								var n = t.Event('hide.bs.collapse');
								if ((this.$element.trigger(n), !n.isDefaultPrevented())) {
									var r = this.dimension();
									this.$element[r](this.$element[r]())[0].offsetHeight,
										this.$element
											.addClass('collapsing')
											.removeClass('collapse in')
											.attr('aria-expanded', !1),
										this.$trigger
											.addClass('collapsed')
											.attr('aria-expanded', !1),
										(this.transitioning = 1);
									var i = function () {
										(this.transitioning = 0),
											this.$element
												.removeClass('collapsing')
												.addClass('collapse')
												.trigger('hidden.bs.collapse');
									};
									if (!t.support.transition) return i.call(this);
									this.$element[r](0)
										.one('bsTransitionEnd', t.proxy(i, this))
										.emulateTransitionEnd(e.TRANSITION_DURATION);
								}
							}
						}),
						(e.prototype.toggle = function () {
							this[this.$element.hasClass('in') ? 'hide' : 'show']();
						}),
						(e.prototype.getParent = function () {
							return t(document)
								.find(this.options.parent)
								.find(
									'[data-toggle="collapse"][data-parent="' +
										this.options.parent +
										'"]'
								)
								.each(
									t.proxy(function (e, r) {
										var i = t(r);
										this.addAriaAndCollapsedClass(n(i), i);
									}, this)
								)
								.end();
						}),
						(e.prototype.addAriaAndCollapsedClass = function (t, e) {
							var n = t.hasClass('in');
							t.attr('aria-expanded', n),
								e.toggleClass('collapsed', !n).attr('aria-expanded', n);
						});
					var i = t.fn.collapse;
					(t.fn.collapse = r),
						(t.fn.collapse.Constructor = e),
						(t.fn.collapse.noConflict = function () {
							return (t.fn.collapse = i), this;
						}),
						t(document).on(
							'click.bs.collapse.data-api',
							'[data-toggle="collapse"]',
							function (e) {
								var i = t(this);
								i.attr('data-target') || e.preventDefault();
								var o = n(i),
									s = o.data('bs.collapse') ? 'toggle' : i.data();
								r.call(o, s);
							}
						);
				})(t),
				(function (t) {
					'use strict';
					var e = '[data-toggle="dropdown"]',
						n = function (e) {
							t(e).on('click.bs.dropdown', this.toggle);
						};
					function r(e) {
						var n = e.attr('data-target');
						n ||
							(n =
								(n = e.attr('href')) &&
								/#[A-Za-z]/.test(n) &&
								n.replace(/.*(?=#[^\s]*$)/, ''));
						var r = '#' !== n ? t(document).find(n) : null;
						return r && r.length ? r : e.parent();
					}
					function i(n) {
						(n && 3 === n.which) ||
							(t('.dropdown-backdrop').remove(),
							t(e).each(function () {
								var e = t(this),
									i = r(e),
									o = { relatedTarget: this };
								i.hasClass('open') &&
									((n &&
										'click' == n.type &&
										/input|textarea/i.test(n.target.tagName) &&
										t.contains(i[0], n.target)) ||
										(i.trigger((n = t.Event('hide.bs.dropdown', o))),
										n.isDefaultPrevented() ||
											(e.attr('aria-expanded', 'false'),
											i
												.removeClass('open')
												.trigger(t.Event('hidden.bs.dropdown', o)))));
							}));
					}
					(n.VERSION = '3.4.1'),
						(n.prototype.toggle = function (e) {
							var n = t(this);
							if (!n.is('.disabled, :disabled')) {
								var o = r(n),
									s = o.hasClass('open');
								if ((i(), !s)) {
									'ontouchstart' in document.documentElement &&
										!o.closest('.navbar-nav').length &&
										t(document.createElement('div'))
											.addClass('dropdown-backdrop')
											.insertAfter(t(this))
											.on('click', i);
									var a = { relatedTarget: this };
									if (
										(o.trigger((e = t.Event('show.bs.dropdown', a))),
										e.isDefaultPrevented())
									)
										return;
									n.trigger('focus').attr('aria-expanded', 'true'),
										o
											.toggleClass('open')
											.trigger(t.Event('shown.bs.dropdown', a));
								}
								return !1;
							}
						}),
						(n.prototype.keydown = function (n) {
							if (
								/(38|40|27|32)/.test(n.which) &&
								!/input|textarea/i.test(n.target.tagName)
							) {
								var i = t(this);
								if (
									(n.preventDefault(),
									n.stopPropagation(),
									!i.is('.disabled, :disabled'))
								) {
									var o = r(i),
										s = o.hasClass('open');
									if ((!s && 27 != n.which) || (s && 27 == n.which))
										return (
											27 == n.which && o.find(e).trigger('focus'),
											i.trigger('click')
										);
									var a = o.find('.dropdown-menu li:not(.disabled):visible a');
									if (a.length) {
										var l = a.index(n.target);
										38 == n.which && l > 0 && l--,
											40 == n.which && l < a.length - 1 && l++,
											~l || (l = 0),
											a.eq(l).trigger('focus');
									}
								}
							}
						});
					var o = t.fn.dropdown;
					(t.fn.dropdown = function (e) {
						return this.each(function () {
							var r = t(this),
								i = r.data('bs.dropdown');
							i || r.data('bs.dropdown', (i = new n(this))),
								'string' == typeof e && i[e].call(r);
						});
					}),
						(t.fn.dropdown.Constructor = n),
						(t.fn.dropdown.noConflict = function () {
							return (t.fn.dropdown = o), this;
						}),
						t(document)
							.on('click.bs.dropdown.data-api', i)
							.on('click.bs.dropdown.data-api', '.dropdown form', function (t) {
								t.stopPropagation();
							})
							.on('click.bs.dropdown.data-api', e, n.prototype.toggle)
							.on('keydown.bs.dropdown.data-api', e, n.prototype.keydown)
							.on(
								'keydown.bs.dropdown.data-api',
								'.dropdown-menu',
								n.prototype.keydown
							);
				})(t),
				(function (t) {
					'use strict';
					var e = function (e, n) {
						(this.options = n),
							(this.$body = t(document.body)),
							(this.$element = t(e)),
							(this.$dialog = this.$element.find('.modal-dialog')),
							(this.$backdrop = null),
							(this.isShown = null),
							(this.originalBodyPad = null),
							(this.scrollbarWidth = 0),
							(this.ignoreBackdropClick = !1),
							(this.fixedContent = '.navbar-fixed-top, .navbar-fixed-bottom'),
							this.options.remote &&
								this.$element.find('.modal-content').load(
									this.options.remote,
									t.proxy(function () {
										this.$element.trigger('loaded.bs.modal');
									}, this)
								);
					};
					function n(n, r) {
						return this.each(function () {
							var i = t(this),
								o = i.data('bs.modal'),
								s = t.extend({}, e.DEFAULTS, i.data(), 'object' == typeof n && n);
							o || i.data('bs.modal', (o = new e(this, s))),
								'string' == typeof n ? o[n](r) : s.show && o.show(r);
						});
					}
					(e.VERSION = '3.4.1'),
						(e.TRANSITION_DURATION = 300),
						(e.BACKDROP_TRANSITION_DURATION = 150),
						(e.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
						(e.prototype.toggle = function (t) {
							return this.isShown ? this.hide() : this.show(t);
						}),
						(e.prototype.show = function (n) {
							var r = this,
								i = t.Event('show.bs.modal', { relatedTarget: n });
							this.$element.trigger(i),
								this.isShown ||
									i.isDefaultPrevented() ||
									((this.isShown = !0),
									this.checkScrollbar(),
									this.setScrollbar(),
									this.$body.addClass('modal-open'),
									this.escape(),
									this.resize(),
									this.$element.on(
										'click.dismiss.bs.modal',
										'[data-dismiss="modal"]',
										t.proxy(this.hide, this)
									),
									this.$dialog.on('mousedown.dismiss.bs.modal', function () {
										r.$element.one('mouseup.dismiss.bs.modal', function (e) {
											t(e.target).is(r.$element) &&
												(r.ignoreBackdropClick = !0);
										});
									}),
									this.backdrop(function () {
										var i = t.support.transition && r.$element.hasClass('fade');
										r.$element.parent().length || r.$element.appendTo(r.$body),
											r.$element.show().scrollTop(0),
											r.adjustDialog(),
											i && r.$element[0].offsetWidth,
											r.$element.addClass('in'),
											r.enforceFocus();
										var o = t.Event('shown.bs.modal', { relatedTarget: n });
										i
											? r.$dialog
													.one('bsTransitionEnd', function () {
														r.$element.trigger('focus').trigger(o);
													})
													.emulateTransitionEnd(e.TRANSITION_DURATION)
											: r.$element.trigger('focus').trigger(o);
									}));
						}),
						(e.prototype.hide = function (n) {
							n && n.preventDefault(),
								(n = t.Event('hide.bs.modal')),
								this.$element.trigger(n),
								this.isShown &&
									!n.isDefaultPrevented() &&
									((this.isShown = !1),
									this.escape(),
									this.resize(),
									t(document).off('focusin.bs.modal'),
									this.$element
										.removeClass('in')
										.off('click.dismiss.bs.modal')
										.off('mouseup.dismiss.bs.modal'),
									this.$dialog.off('mousedown.dismiss.bs.modal'),
									t.support.transition && this.$element.hasClass('fade')
										? this.$element
												.one(
													'bsTransitionEnd',
													t.proxy(this.hideModal, this)
												)
												.emulateTransitionEnd(e.TRANSITION_DURATION)
										: this.hideModal());
						}),
						(e.prototype.enforceFocus = function () {
							t(document)
								.off('focusin.bs.modal')
								.on(
									'focusin.bs.modal',
									t.proxy(function (t) {
										document === t.target ||
											this.$element[0] === t.target ||
											this.$element.has(t.target).length ||
											this.$element.trigger('focus');
									}, this)
								);
						}),
						(e.prototype.escape = function () {
							this.isShown && this.options.keyboard
								? this.$element.on(
										'keydown.dismiss.bs.modal',
										t.proxy(function (t) {
											27 == t.which && this.hide();
										}, this)
								  )
								: this.isShown || this.$element.off('keydown.dismiss.bs.modal');
						}),
						(e.prototype.resize = function () {
							this.isShown
								? t(window).on('resize.bs.modal', t.proxy(this.handleUpdate, this))
								: t(window).off('resize.bs.modal');
						}),
						(e.prototype.hideModal = function () {
							var t = this;
							this.$element.hide(),
								this.backdrop(function () {
									t.$body.removeClass('modal-open'),
										t.resetAdjustments(),
										t.resetScrollbar(),
										t.$element.trigger('hidden.bs.modal');
								});
						}),
						(e.prototype.removeBackdrop = function () {
							this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
						}),
						(e.prototype.backdrop = function (n) {
							var r = this,
								i = this.$element.hasClass('fade') ? 'fade' : '';
							if (this.isShown && this.options.backdrop) {
								var o = t.support.transition && i;
								if (
									((this.$backdrop = t(document.createElement('div'))
										.addClass('modal-backdrop ' + i)
										.appendTo(this.$body)),
									this.$element.on(
										'click.dismiss.bs.modal',
										t.proxy(function (t) {
											this.ignoreBackdropClick
												? (this.ignoreBackdropClick = !1)
												: t.target === t.currentTarget &&
												  ('static' == this.options.backdrop
														? this.$element[0].focus()
														: this.hide());
										}, this)
									),
									o && this.$backdrop[0].offsetWidth,
									this.$backdrop.addClass('in'),
									!n)
								)
									return;
								o
									? this.$backdrop
											.one('bsTransitionEnd', n)
											.emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION)
									: n();
							} else if (!this.isShown && this.$backdrop) {
								this.$backdrop.removeClass('in');
								var s = function () {
									r.removeBackdrop(), n && n();
								};
								t.support.transition && this.$element.hasClass('fade')
									? this.$backdrop
											.one('bsTransitionEnd', s)
											.emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION)
									: s();
							} else n && n();
						}),
						(e.prototype.handleUpdate = function () {
							this.adjustDialog();
						}),
						(e.prototype.adjustDialog = function () {
							var t =
								this.$element[0].scrollHeight >
								document.documentElement.clientHeight;
							this.$element.css({
								paddingLeft:
									!this.bodyIsOverflowing && t ? this.scrollbarWidth : '',
								paddingRight:
									this.bodyIsOverflowing && !t ? this.scrollbarWidth : '',
							});
						}),
						(e.prototype.resetAdjustments = function () {
							this.$element.css({ paddingLeft: '', paddingRight: '' });
						}),
						(e.prototype.checkScrollbar = function () {
							var t = window.innerWidth;
							if (!t) {
								var e = document.documentElement.getBoundingClientRect();
								t = e.right - Math.abs(e.left);
							}
							(this.bodyIsOverflowing = document.body.clientWidth < t),
								(this.scrollbarWidth = this.measureScrollbar());
						}),
						(e.prototype.setScrollbar = function () {
							var e = parseInt(this.$body.css('padding-right') || 0, 10);
							this.originalBodyPad = document.body.style.paddingRight || '';
							var n = this.scrollbarWidth;
							this.bodyIsOverflowing &&
								(this.$body.css('padding-right', e + n),
								t(this.fixedContent).each(function (e, r) {
									var i = r.style.paddingRight,
										o = t(r).css('padding-right');
									t(r)
										.data('padding-right', i)
										.css('padding-right', parseFloat(o) + n + 'px');
								}));
						}),
						(e.prototype.resetScrollbar = function () {
							this.$body.css('padding-right', this.originalBodyPad),
								t(this.fixedContent).each(function (e, n) {
									var r = t(n).data('padding-right');
									t(n).removeData('padding-right'),
										(n.style.paddingRight = r || '');
								});
						}),
						(e.prototype.measureScrollbar = function () {
							var t = document.createElement('div');
							(t.className = 'modal-scrollbar-measure'), this.$body.append(t);
							var e = t.offsetWidth - t.clientWidth;
							return this.$body[0].removeChild(t), e;
						});
					var r = t.fn.modal;
					(t.fn.modal = n),
						(t.fn.modal.Constructor = e),
						(t.fn.modal.noConflict = function () {
							return (t.fn.modal = r), this;
						}),
						t(document).on(
							'click.bs.modal.data-api',
							'[data-toggle="modal"]',
							function (e) {
								var r = t(this),
									i = r.attr('href'),
									o =
										r.attr('data-target') ||
										(i && i.replace(/.*(?=#[^\s]+$)/, '')),
									s = t(document).find(o),
									a = s.data('bs.modal')
										? 'toggle'
										: t.extend(
												{ remote: !/#/.test(i) && i },
												s.data(),
												r.data()
										  );
								r.is('a') && e.preventDefault(),
									s.one('show.bs.modal', function (t) {
										t.isDefaultPrevented() ||
											s.one('hidden.bs.modal', function () {
												r.is(':visible') && r.trigger('focus');
											});
									}),
									n.call(s, a, this);
							}
						);
				})(t),
				(function (t) {
					'use strict';
					var e = ['sanitize', 'whiteList', 'sanitizeFn'],
						n = [
							'background',
							'cite',
							'href',
							'itemtype',
							'longdesc',
							'poster',
							'src',
							'xlink:href',
						],
						r = {
							'*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
							a: ['target', 'href', 'title', 'rel'],
							area: [],
							b: [],
							br: [],
							col: [],
							code: [],
							div: [],
							em: [],
							hr: [],
							h1: [],
							h2: [],
							h3: [],
							h4: [],
							h5: [],
							h6: [],
							i: [],
							img: ['src', 'alt', 'title', 'width', 'height'],
							li: [],
							ol: [],
							p: [],
							pre: [],
							s: [],
							small: [],
							span: [],
							sub: [],
							sup: [],
							strong: [],
							u: [],
							ul: [],
						},
						i = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
						o =
							/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
					function s(e, r) {
						var s = e.nodeName.toLowerCase();
						if (-1 !== t.inArray(s, r))
							return (
								-1 === t.inArray(s, n) ||
								Boolean(e.nodeValue.match(i) || e.nodeValue.match(o))
							);
						for (
							var a = t(r).filter(function (t, e) {
									return e instanceof RegExp;
								}),
								l = 0,
								c = a.length;
							l < c;
							l++
						)
							if (s.match(a[l])) return !0;
						return !1;
					}
					function a(e, n, r) {
						if (0 === e.length) return e;
						if (r && 'function' == typeof r) return r(e);
						if (!document.implementation || !document.implementation.createHTMLDocument)
							return e;
						var i = document.implementation.createHTMLDocument('sanitization');
						i.body.innerHTML = e;
						for (
							var o = t.map(n, function (t, e) {
									return e;
								}),
								a = t(i.body).find('*'),
								l = 0,
								c = a.length;
							l < c;
							l++
						) {
							var u = a[l],
								f = u.nodeName.toLowerCase();
							if (-1 !== t.inArray(f, o))
								for (
									var p = t.map(u.attributes, function (t) {
											return t;
										}),
										d = [].concat(n['*'] || [], n[f] || []),
										h = 0,
										g = p.length;
									h < g;
									h++
								)
									s(p[h], d) || u.removeAttribute(p[h].nodeName);
							else u.parentNode.removeChild(u);
						}
						return i.body.innerHTML;
					}
					var l = function (t, e) {
						(this.type = null),
							(this.options = null),
							(this.enabled = null),
							(this.timeout = null),
							(this.hoverState = null),
							(this.$element = null),
							(this.inState = null),
							this.init('tooltip', t, e);
					};
					(l.VERSION = '3.4.1'),
						(l.TRANSITION_DURATION = 150),
						(l.DEFAULTS = {
							animation: !0,
							placement: 'top',
							selector: !1,
							template:
								'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
							trigger: 'hover focus',
							title: '',
							delay: 0,
							html: !1,
							container: !1,
							viewport: { selector: 'body', padding: 0 },
							sanitize: !0,
							sanitizeFn: null,
							whiteList: r,
						}),
						(l.prototype.init = function (e, n, r) {
							if (
								((this.enabled = !0),
								(this.type = e),
								(this.$element = t(n)),
								(this.options = this.getOptions(r)),
								(this.$viewport =
									this.options.viewport &&
									t(document).find(
										t.isFunction(this.options.viewport)
											? this.options.viewport.call(this, this.$element)
											: this.options.viewport.selector ||
													this.options.viewport
									)),
								(this.inState = { click: !1, hover: !1, focus: !1 }),
								this.$element[0] instanceof document.constructor &&
									!this.options.selector)
							)
								throw new Error(
									'`selector` option must be specified when initializing ' +
										this.type +
										' on the window.document object!'
								);
							for (var i = this.options.trigger.split(' '), o = i.length; o--; ) {
								var s = i[o];
								if ('click' == s)
									this.$element.on(
										'click.' + this.type,
										this.options.selector,
										t.proxy(this.toggle, this)
									);
								else if ('manual' != s) {
									var a = 'hover' == s ? 'mouseenter' : 'focusin',
										l = 'hover' == s ? 'mouseleave' : 'focusout';
									this.$element.on(
										a + '.' + this.type,
										this.options.selector,
										t.proxy(this.enter, this)
									),
										this.$element.on(
											l + '.' + this.type,
											this.options.selector,
											t.proxy(this.leave, this)
										);
								}
							}
							this.options.selector
								? (this._options = t.extend({}, this.options, {
										trigger: 'manual',
										selector: '',
								  }))
								: this.fixTitle();
						}),
						(l.prototype.getDefaults = function () {
							return l.DEFAULTS;
						}),
						(l.prototype.getOptions = function (n) {
							var r = this.$element.data();
							for (var i in r)
								r.hasOwnProperty(i) && -1 !== t.inArray(i, e) && delete r[i];
							return (
								(n = t.extend({}, this.getDefaults(), r, n)).delay &&
									'number' == typeof n.delay &&
									(n.delay = { show: n.delay, hide: n.delay }),
								n.sanitize &&
									(n.template = a(n.template, n.whiteList, n.sanitizeFn)),
								n
							);
						}),
						(l.prototype.getDelegateOptions = function () {
							var e = {},
								n = this.getDefaults();
							return (
								this._options &&
									t.each(this._options, function (t, r) {
										n[t] != r && (e[t] = r);
									}),
								e
							);
						}),
						(l.prototype.enter = function (e) {
							var n =
								e instanceof this.constructor
									? e
									: t(e.currentTarget).data('bs.' + this.type);
							if (
								(n ||
									((n = new this.constructor(
										e.currentTarget,
										this.getDelegateOptions()
									)),
									t(e.currentTarget).data('bs.' + this.type, n)),
								e instanceof t.Event &&
									(n.inState['focusin' == e.type ? 'focus' : 'hover'] = !0),
								n.tip().hasClass('in') || 'in' == n.hoverState)
							)
								n.hoverState = 'in';
							else {
								if (
									(clearTimeout(n.timeout),
									(n.hoverState = 'in'),
									!n.options.delay || !n.options.delay.show)
								)
									return n.show();
								n.timeout = setTimeout(function () {
									'in' == n.hoverState && n.show();
								}, n.options.delay.show);
							}
						}),
						(l.prototype.isInStateTrue = function () {
							for (var t in this.inState) if (this.inState[t]) return !0;
							return !1;
						}),
						(l.prototype.leave = function (e) {
							var n =
								e instanceof this.constructor
									? e
									: t(e.currentTarget).data('bs.' + this.type);
							if (
								(n ||
									((n = new this.constructor(
										e.currentTarget,
										this.getDelegateOptions()
									)),
									t(e.currentTarget).data('bs.' + this.type, n)),
								e instanceof t.Event &&
									(n.inState['focusout' == e.type ? 'focus' : 'hover'] = !1),
								!n.isInStateTrue())
							) {
								if (
									(clearTimeout(n.timeout),
									(n.hoverState = 'out'),
									!n.options.delay || !n.options.delay.hide)
								)
									return n.hide();
								n.timeout = setTimeout(function () {
									'out' == n.hoverState && n.hide();
								}, n.options.delay.hide);
							}
						}),
						(l.prototype.show = function () {
							var e = t.Event('show.bs.' + this.type);
							if (this.hasContent() && this.enabled) {
								this.$element.trigger(e);
								var n = t.contains(
									this.$element[0].ownerDocument.documentElement,
									this.$element[0]
								);
								if (e.isDefaultPrevented() || !n) return;
								var r = this,
									i = this.tip(),
									o = this.getUID(this.type);
								this.setContent(),
									i.attr('id', o),
									this.$element.attr('aria-describedby', o),
									this.options.animation && i.addClass('fade');
								var s =
										'function' == typeof this.options.placement
											? this.options.placement.call(
													this,
													i[0],
													this.$element[0]
											  )
											: this.options.placement,
									a = /\s?auto?\s?/i,
									c = a.test(s);
								c && (s = s.replace(a, '') || 'top'),
									i
										.detach()
										.css({ top: 0, left: 0, display: 'block' })
										.addClass(s)
										.data('bs.' + this.type, this),
									this.options.container
										? i.appendTo(t(document).find(this.options.container))
										: i.insertAfter(this.$element),
									this.$element.trigger('inserted.bs.' + this.type);
								var u = this.getPosition(),
									f = i[0].offsetWidth,
									p = i[0].offsetHeight;
								if (c) {
									var d = s,
										h = this.getPosition(this.$viewport);
									(s =
										'bottom' == s && u.bottom + p > h.bottom
											? 'top'
											: 'top' == s && u.top - p < h.top
											? 'bottom'
											: 'right' == s && u.right + f > h.width
											? 'left'
											: 'left' == s && u.left - f < h.left
											? 'right'
											: s),
										i.removeClass(d).addClass(s);
								}
								var g = this.getCalculatedOffset(s, u, f, p);
								this.applyPlacement(g, s);
								var m = function () {
									var t = r.hoverState;
									r.$element.trigger('shown.bs.' + r.type),
										(r.hoverState = null),
										'out' == t && r.leave(r);
								};
								t.support.transition && this.$tip.hasClass('fade')
									? i
											.one('bsTransitionEnd', m)
											.emulateTransitionEnd(l.TRANSITION_DURATION)
									: m();
							}
						}),
						(l.prototype.applyPlacement = function (e, n) {
							var r = this.tip(),
								i = r[0].offsetWidth,
								o = r[0].offsetHeight,
								s = parseInt(r.css('margin-top'), 10),
								a = parseInt(r.css('margin-left'), 10);
							isNaN(s) && (s = 0),
								isNaN(a) && (a = 0),
								(e.top += s),
								(e.left += a),
								t.offset.setOffset(
									r[0],
									t.extend(
										{
											using: function (t) {
												r.css({
													top: Math.round(t.top),
													left: Math.round(t.left),
												});
											},
										},
										e
									),
									0
								),
								r.addClass('in');
							var l = r[0].offsetWidth,
								c = r[0].offsetHeight;
							'top' == n && c != o && (e.top = e.top + o - c);
							var u = this.getViewportAdjustedDelta(n, e, l, c);
							u.left ? (e.left += u.left) : (e.top += u.top);
							var f = /top|bottom/.test(n),
								p = f ? 2 * u.left - i + l : 2 * u.top - o + c,
								d = f ? 'offsetWidth' : 'offsetHeight';
							r.offset(e), this.replaceArrow(p, r[0][d], f);
						}),
						(l.prototype.replaceArrow = function (t, e, n) {
							this.arrow()
								.css(n ? 'left' : 'top', 50 * (1 - t / e) + '%')
								.css(n ? 'top' : 'left', '');
						}),
						(l.prototype.setContent = function () {
							var t = this.tip(),
								e = this.getTitle();
							this.options.html
								? (this.options.sanitize &&
										(e = a(e, this.options.whiteList, this.options.sanitizeFn)),
								  t.find('.tooltip-inner').html(e))
								: t.find('.tooltip-inner').text(e),
								t.removeClass('fade in top bottom left right');
						}),
						(l.prototype.hide = function (e) {
							var n = this,
								r = t(this.$tip),
								i = t.Event('hide.bs.' + this.type);
							function o() {
								'in' != n.hoverState && r.detach(),
									n.$element &&
										n.$element
											.removeAttr('aria-describedby')
											.trigger('hidden.bs.' + n.type),
									e && e();
							}
							if ((this.$element.trigger(i), !i.isDefaultPrevented()))
								return (
									r.removeClass('in'),
									t.support.transition && r.hasClass('fade')
										? r
												.one('bsTransitionEnd', o)
												.emulateTransitionEnd(l.TRANSITION_DURATION)
										: o(),
									(this.hoverState = null),
									this
								);
						}),
						(l.prototype.fixTitle = function () {
							var t = this.$element;
							(t.attr('title') || 'string' != typeof t.attr('data-original-title')) &&
								t
									.attr('data-original-title', t.attr('title') || '')
									.attr('title', '');
						}),
						(l.prototype.hasContent = function () {
							return this.getTitle();
						}),
						(l.prototype.getPosition = function (e) {
							var n = (e = e || this.$element)[0],
								r = 'BODY' == n.tagName,
								i = n.getBoundingClientRect();
							null == i.width &&
								(i = t.extend({}, i, {
									width: i.right - i.left,
									height: i.bottom - i.top,
								}));
							var o = window.SVGElement && n instanceof window.SVGElement,
								s = r ? { top: 0, left: 0 } : o ? null : e.offset(),
								a = {
									scroll: r
										? document.documentElement.scrollTop ||
										  document.body.scrollTop
										: e.scrollTop(),
								},
								l = r
									? { width: t(window).width(), height: t(window).height() }
									: null;
							return t.extend({}, i, a, l, s);
						}),
						(l.prototype.getCalculatedOffset = function (t, e, n, r) {
							return 'bottom' == t
								? { top: e.top + e.height, left: e.left + e.width / 2 - n / 2 }
								: 'top' == t
								? { top: e.top - r, left: e.left + e.width / 2 - n / 2 }
								: 'left' == t
								? { top: e.top + e.height / 2 - r / 2, left: e.left - n }
								: { top: e.top + e.height / 2 - r / 2, left: e.left + e.width };
						}),
						(l.prototype.getViewportAdjustedDelta = function (t, e, n, r) {
							var i = { top: 0, left: 0 };
							if (!this.$viewport) return i;
							var o = (this.options.viewport && this.options.viewport.padding) || 0,
								s = this.getPosition(this.$viewport);
							if (/right|left/.test(t)) {
								var a = e.top - o - s.scroll,
									l = e.top + o - s.scroll + r;
								a < s.top
									? (i.top = s.top - a)
									: l > s.top + s.height && (i.top = s.top + s.height - l);
							} else {
								var c = e.left - o,
									u = e.left + o + n;
								c < s.left
									? (i.left = s.left - c)
									: u > s.right && (i.left = s.left + s.width - u);
							}
							return i;
						}),
						(l.prototype.getTitle = function () {
							var t = this.$element,
								e = this.options;
							return (
								t.attr('data-original-title') ||
								('function' == typeof e.title ? e.title.call(t[0]) : e.title)
							);
						}),
						(l.prototype.getUID = function (t) {
							do {
								t += ~~(1e6 * Math.random());
							} while (document.getElementById(t));
							return t;
						}),
						(l.prototype.tip = function () {
							if (
								!this.$tip &&
								((this.$tip = t(this.options.template)), 1 != this.$tip.length)
							)
								throw new Error(
									this.type +
										' `template` option must consist of exactly 1 top-level element!'
								);
							return this.$tip;
						}),
						(l.prototype.arrow = function () {
							return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'));
						}),
						(l.prototype.enable = function () {
							this.enabled = !0;
						}),
						(l.prototype.disable = function () {
							this.enabled = !1;
						}),
						(l.prototype.toggleEnabled = function () {
							this.enabled = !this.enabled;
						}),
						(l.prototype.toggle = function (e) {
							var n = this;
							e &&
								((n = t(e.currentTarget).data('bs.' + this.type)) ||
									((n = new this.constructor(
										e.currentTarget,
										this.getDelegateOptions()
									)),
									t(e.currentTarget).data('bs.' + this.type, n))),
								e
									? ((n.inState.click = !n.inState.click),
									  n.isInStateTrue() ? n.enter(n) : n.leave(n))
									: n.tip().hasClass('in')
									? n.leave(n)
									: n.enter(n);
						}),
						(l.prototype.destroy = function () {
							var t = this;
							clearTimeout(this.timeout),
								this.hide(function () {
									t.$element.off('.' + t.type).removeData('bs.' + t.type),
										t.$tip && t.$tip.detach(),
										(t.$tip = null),
										(t.$arrow = null),
										(t.$viewport = null),
										(t.$element = null);
								});
						}),
						(l.prototype.sanitizeHtml = function (t) {
							return a(t, this.options.whiteList, this.options.sanitizeFn);
						});
					var c = t.fn.tooltip;
					(t.fn.tooltip = function (e) {
						return this.each(function () {
							var n = t(this),
								r = n.data('bs.tooltip'),
								i = 'object' == typeof e && e;
							(!r && /destroy|hide/.test(e)) ||
								(r || n.data('bs.tooltip', (r = new l(this, i))),
								'string' == typeof e && r[e]());
						});
					}),
						(t.fn.tooltip.Constructor = l),
						(t.fn.tooltip.noConflict = function () {
							return (t.fn.tooltip = c), this;
						});
				})(t),
				(function (t) {
					'use strict';
					var e = function (t, e) {
						this.init('popover', t, e);
					};
					if (!t.fn.tooltip) throw new Error('Popover requires tooltip.js');
					(e.VERSION = '3.4.1'),
						(e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
							placement: 'right',
							trigger: 'click',
							content: '',
							template:
								'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
						})),
						((e.prototype = t.extend(
							{},
							t.fn.tooltip.Constructor.prototype
						)).constructor = e),
						(e.prototype.getDefaults = function () {
							return e.DEFAULTS;
						}),
						(e.prototype.setContent = function () {
							var t = this.tip(),
								e = this.getTitle(),
								n = this.getContent();
							if (this.options.html) {
								var r = typeof n;
								this.options.sanitize &&
									((e = this.sanitizeHtml(e)),
									'string' === r && (n = this.sanitizeHtml(n))),
									t.find('.popover-title').html(e),
									t
										.find('.popover-content')
										.children()
										.detach()
										.end()
										['string' === r ? 'html' : 'append'](n);
							} else
								t.find('.popover-title').text(e),
									t.find('.popover-content').children().detach().end().text(n);
							t.removeClass('fade top bottom left right in'),
								t.find('.popover-title').html() || t.find('.popover-title').hide();
						}),
						(e.prototype.hasContent = function () {
							return this.getTitle() || this.getContent();
						}),
						(e.prototype.getContent = function () {
							var t = this.$element,
								e = this.options;
							return (
								t.attr('data-content') ||
								('function' == typeof e.content ? e.content.call(t[0]) : e.content)
							);
						}),
						(e.prototype.arrow = function () {
							return (this.$arrow = this.$arrow || this.tip().find('.arrow'));
						});
					var n = t.fn.popover;
					(t.fn.popover = function (n) {
						return this.each(function () {
							var r = t(this),
								i = r.data('bs.popover'),
								o = 'object' == typeof n && n;
							(!i && /destroy|hide/.test(n)) ||
								(i || r.data('bs.popover', (i = new e(this, o))),
								'string' == typeof n && i[n]());
						});
					}),
						(t.fn.popover.Constructor = e),
						(t.fn.popover.noConflict = function () {
							return (t.fn.popover = n), this;
						});
				})(t),
				(function (t) {
					'use strict';
					function e(n, r) {
						(this.$body = t(document.body)),
							(this.$scrollElement = t(n).is(document.body) ? t(window) : t(n)),
							(this.options = t.extend({}, e.DEFAULTS, r)),
							(this.selector = (this.options.target || '') + ' .nav li > a'),
							(this.offsets = []),
							(this.targets = []),
							(this.activeTarget = null),
							(this.scrollHeight = 0),
							this.$scrollElement.on(
								'scroll.bs.scrollspy',
								t.proxy(this.process, this)
							),
							this.refresh(),
							this.process();
					}
					function n(n) {
						return this.each(function () {
							var r = t(this),
								i = r.data('bs.scrollspy'),
								o = 'object' == typeof n && n;
							i || r.data('bs.scrollspy', (i = new e(this, o))),
								'string' == typeof n && i[n]();
						});
					}
					(e.VERSION = '3.4.1'),
						(e.DEFAULTS = { offset: 10 }),
						(e.prototype.getScrollHeight = function () {
							return (
								this.$scrollElement[0].scrollHeight ||
								Math.max(
									this.$body[0].scrollHeight,
									document.documentElement.scrollHeight
								)
							);
						}),
						(e.prototype.refresh = function () {
							var e = this,
								n = 'offset',
								r = 0;
							(this.offsets = []),
								(this.targets = []),
								(this.scrollHeight = this.getScrollHeight()),
								t.isWindow(this.$scrollElement[0]) ||
									((n = 'position'), (r = this.$scrollElement.scrollTop())),
								this.$body
									.find(this.selector)
									.map(function () {
										var e = t(this),
											i = e.data('target') || e.attr('href'),
											o = /^#./.test(i) && t(i);
										return (
											(o &&
												o.length &&
												o.is(':visible') && [[o[n]().top + r, i]]) ||
											null
										);
									})
									.sort(function (t, e) {
										return t[0] - e[0];
									})
									.each(function () {
										e.offsets.push(this[0]), e.targets.push(this[1]);
									});
						}),
						(e.prototype.process = function () {
							var t,
								e = this.$scrollElement.scrollTop() + this.options.offset,
								n = this.getScrollHeight(),
								r = this.options.offset + n - this.$scrollElement.height(),
								i = this.offsets,
								o = this.targets,
								s = this.activeTarget;
							if ((this.scrollHeight != n && this.refresh(), e >= r))
								return s != (t = o[o.length - 1]) && this.activate(t);
							if (s && e < i[0]) return (this.activeTarget = null), this.clear();
							for (t = i.length; t--; )
								s != o[t] &&
									e >= i[t] &&
									(void 0 === i[t + 1] || e < i[t + 1]) &&
									this.activate(o[t]);
						}),
						(e.prototype.activate = function (e) {
							(this.activeTarget = e), this.clear();
							var n =
									this.selector +
									'[data-target="' +
									e +
									'"],' +
									this.selector +
									'[href="' +
									e +
									'"]',
								r = t(n).parents('li').addClass('active');
							r.parent('.dropdown-menu').length &&
								(r = r.closest('li.dropdown').addClass('active')),
								r.trigger('activate.bs.scrollspy');
						}),
						(e.prototype.clear = function () {
							t(this.selector)
								.parentsUntil(this.options.target, '.active')
								.removeClass('active');
						});
					var r = t.fn.scrollspy;
					(t.fn.scrollspy = n),
						(t.fn.scrollspy.Constructor = e),
						(t.fn.scrollspy.noConflict = function () {
							return (t.fn.scrollspy = r), this;
						}),
						t(window).on('load.bs.scrollspy.data-api', function () {
							t('[data-spy="scroll"]').each(function () {
								var e = t(this);
								n.call(e, e.data());
							});
						});
				})(t),
				(function (t) {
					'use strict';
					var e = function (e) {
						this.element = t(e);
					};
					function n(n) {
						return this.each(function () {
							var r = t(this),
								i = r.data('bs.tab');
							i || r.data('bs.tab', (i = new e(this))),
								'string' == typeof n && i[n]();
						});
					}
					(e.VERSION = '3.4.1'),
						(e.TRANSITION_DURATION = 150),
						(e.prototype.show = function () {
							var e = this.element,
								n = e.closest('ul:not(.dropdown-menu)'),
								r = e.data('target');
							if (
								(r || (r = (r = e.attr('href')) && r.replace(/.*(?=#[^\s]*$)/, '')),
								!e.parent('li').hasClass('active'))
							) {
								var i = n.find('.active:last a'),
									o = t.Event('hide.bs.tab', { relatedTarget: e[0] }),
									s = t.Event('show.bs.tab', { relatedTarget: i[0] });
								if (
									(i.trigger(o),
									e.trigger(s),
									!s.isDefaultPrevented() && !o.isDefaultPrevented())
								) {
									var a = t(document).find(r);
									this.activate(e.closest('li'), n),
										this.activate(a, a.parent(), function () {
											i.trigger({
												type: 'hidden.bs.tab',
												relatedTarget: e[0],
											}),
												e.trigger({
													type: 'shown.bs.tab',
													relatedTarget: i[0],
												});
										});
								}
							}
						}),
						(e.prototype.activate = function (n, r, i) {
							var o = r.find('> .active'),
								s =
									i &&
									t.support.transition &&
									((o.length && o.hasClass('fade')) ||
										!!r.find('> .fade').length);
							function a() {
								o
									.removeClass('active')
									.find('> .dropdown-menu > .active')
									.removeClass('active')
									.end()
									.find('[data-toggle="tab"]')
									.attr('aria-expanded', !1),
									n
										.addClass('active')
										.find('[data-toggle="tab"]')
										.attr('aria-expanded', !0),
									s
										? (n[0].offsetWidth, n.addClass('in'))
										: n.removeClass('fade'),
									n.parent('.dropdown-menu').length &&
										n
											.closest('li.dropdown')
											.addClass('active')
											.end()
											.find('[data-toggle="tab"]')
											.attr('aria-expanded', !0),
									i && i();
							}
							o.length && s
								? o
										.one('bsTransitionEnd', a)
										.emulateTransitionEnd(e.TRANSITION_DURATION)
								: a(),
								o.removeClass('in');
						});
					var r = t.fn.tab;
					(t.fn.tab = n),
						(t.fn.tab.Constructor = e),
						(t.fn.tab.noConflict = function () {
							return (t.fn.tab = r), this;
						});
					var i = function (e) {
						e.preventDefault(), n.call(t(this), 'show');
					};
					t(document)
						.on('click.bs.tab.data-api', '[data-toggle="tab"]', i)
						.on('click.bs.tab.data-api', '[data-toggle="pill"]', i);
				})(t),
				(function (t) {
					'use strict';
					var e = function (n, r) {
						this.options = t.extend({}, e.DEFAULTS, r);
						var i =
							this.options.target === e.DEFAULTS.target
								? t(this.options.target)
								: t(document).find(this.options.target);
						(this.$target = i
							.on('scroll.bs.affix.data-api', t.proxy(this.checkPosition, this))
							.on(
								'click.bs.affix.data-api',
								t.proxy(this.checkPositionWithEventLoop, this)
							)),
							(this.$element = t(n)),
							(this.affixed = null),
							(this.unpin = null),
							(this.pinnedOffset = null),
							this.checkPosition();
					};
					function n(n) {
						return this.each(function () {
							var r = t(this),
								i = r.data('bs.affix'),
								o = 'object' == typeof n && n;
							i || r.data('bs.affix', (i = new e(this, o))),
								'string' == typeof n && i[n]();
						});
					}
					(e.VERSION = '3.4.1'),
						(e.RESET = 'affix affix-top affix-bottom'),
						(e.DEFAULTS = { offset: 0, target: window }),
						(e.prototype.getState = function (t, e, n, r) {
							var i = this.$target.scrollTop(),
								o = this.$element.offset(),
								s = this.$target.height();
							if (null != n && 'top' == this.affixed) return i < n && 'top';
							if ('bottom' == this.affixed)
								return null != n
									? !(i + this.unpin <= o.top) && 'bottom'
									: !(i + s <= t - r) && 'bottom';
							var a = null == this.affixed,
								l = a ? i : o.top;
							return null != n && i <= n
								? 'top'
								: null != r && l + (a ? s : e) >= t - r && 'bottom';
						}),
						(e.prototype.getPinnedOffset = function () {
							if (this.pinnedOffset) return this.pinnedOffset;
							this.$element.removeClass(e.RESET).addClass('affix');
							var t = this.$target.scrollTop(),
								n = this.$element.offset();
							return (this.pinnedOffset = n.top - t);
						}),
						(e.prototype.checkPositionWithEventLoop = function () {
							setTimeout(t.proxy(this.checkPosition, this), 1);
						}),
						(e.prototype.checkPosition = function () {
							if (this.$element.is(':visible')) {
								var n = this.$element.height(),
									r = this.options.offset,
									i = r.top,
									o = r.bottom,
									s = Math.max(t(document).height(), t(document.body).height());
								'object' != typeof r && (o = i = r),
									'function' == typeof i && (i = r.top(this.$element)),
									'function' == typeof o && (o = r.bottom(this.$element));
								var a = this.getState(s, n, i, o);
								if (this.affixed != a) {
									null != this.unpin && this.$element.css('top', '');
									var l = 'affix' + (a ? '-' + a : ''),
										c = t.Event(l + '.bs.affix');
									if ((this.$element.trigger(c), c.isDefaultPrevented())) return;
									(this.affixed = a),
										(this.unpin =
											'bottom' == a ? this.getPinnedOffset() : null),
										this.$element
											.removeClass(e.RESET)
											.addClass(l)
											.trigger(l.replace('affix', 'affixed') + '.bs.affix');
								}
								'bottom' == a && this.$element.offset({ top: s - n - o });
							}
						});
					var r = t.fn.affix;
					(t.fn.affix = n),
						(t.fn.affix.Constructor = e),
						(t.fn.affix.noConflict = function () {
							return (t.fn.affix = r), this;
						}),
						t(window).on('load', function () {
							t('[data-spy="affix"]').each(function () {
								var e = t(this),
									r = e.data();
								(r.offset = r.offset || {}),
									null != r.offsetBottom && (r.offset.bottom = r.offsetBottom),
									null != r.offsetTop && (r.offset.top = r.offsetTop),
									n.call(e, r);
							});
						});
				})(t);
		}).call(this, n(0));
	},
	,
	,
	,
	function (t, e, n) {
		'use strict';
		n.d(e, 'a', function () {
			return l;
		});
		var r = n(3),
			i = n.n(r),
			o = n(4),
			s = n.n(o),
			a = (n(20), n(48), n(14)),
			l = (function () {
				return s()(
					function t() {
						i()(this, t),
							(this.sitemapDb = '<use loadConfiguration()>'),
							(this.dataDb = '<use loadConfiguration()>'),
							(this.restUrl = '<use loadConfiguration()>'),
							(this.talismanApiUrl = '<use loadConfiguration()>'),
							(this.locale = '<use loadConfiguration()>'),
							(this.credential = '<use loadConfiguration()>'),
							(this.defaults = {
								storageType: 'local',
								sitemapDb: 'scraper-sitemaps',
								dataDb: '',
								restUrl: '',
								talismanApiUrl: '',
								locale: 'en',
								credential: '',
							});
					},
					[
						{
							key: 'loadConfiguration',
							value: function (t) {
								var e = this;
								return new Promise(function (t) {
									a.storage.sync
										.get([
											'sitemapDb',
											'dataDb',
											'storageType',
											'restUrl',
											'talismanApiUrl',
											'locale',
											'credential',
										])
										.then(
											function (e) {
												(this.storageType =
													e.storageType || this.defaults.storageType),
													(this.locale =
														e.locale || this.defaults.locale),
													(this.sitemapDb = this.defaults.sitemapDb),
													(this.dataDb = this.defaults.dataDb),
													(this.restUrl = this.defaults.restUrl),
													(this.talismanApiUrl =
														this.defaults.talismanApiUrl),
													(this.credential = this.defaults.credential),
													'couchdb' === this.storageType
														? ((this.sitemapDb =
																e.sitemapDb ||
																this.defaults.sitemapDb),
														  (this.dataDb =
																e.dataDb || this.defaults.dataDb))
														: 'rest' === this.storageType
														? (this.restUrl =
																e.restUrl || this.defaults.restUrl)
														: 'talisman' === this.storageType &&
														  ((this.talismanApiUrl =
																e.talismanApiUrl ||
																this.defaults.talismanApiUrl),
														  (this.credential =
																e.credential ||
																this.defaults.credential)),
													t();
											}.bind(e)
										);
								});
							},
						},
						{
							key: 'updateConfiguration',
							value: function (t) {
								return a.storage.sync.set(t);
							},
						},
					]
				);
			})();
	},
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	function (t, e, n) {
		'use strict';
		n.r(e);
		var r = n(0),
			i = (n(346), n(347), n(14)),
			o = n(351),
			s = n(6),
			a = new o.a();
		r(function () {
			var t, e, n;
			r('#sitemapDb')
				.popover({
					title: s.a.getTranslationByKey('options_couchdb_db_popup_title'),
					html: !0,
					content:
						s.a.getTranslationByKey('options_couchdb_db_popup_content') +
						' <br /> http://example.com/scraper-sitemaps/',
					placement: 'bottom',
				})
				.blur(function () {
					r(this).popover('hide');
				}),
				r('#dataDb')
					.popover({
						title: s.a.getTranslationByKey('options_couchdb_datadb_popup_title'),
						html: !0,
						content:
							s.a.getTranslationByKey('options_couchdb_datadb_popup_content') +
							' <br />http://example.com/',
						placement: 'bottom',
					})
					.blur(function () {
						r(this).popover('hide');
					}),
				r('#restUrl')
					.popover({
						title: s.a.getTranslationByKey('options_rest_url_popup_title'),
						html: !0,
						content: s.a.getTranslationByKey('options_rest_url_popup_content'),
						placement: 'bottom',
					})
					.blur(function () {
						r(this).popover('hide');
					}),
				r('#talismanApiURL')
					.popover({
						title: s.a.getTranslationByKey('options_talisman_url_popup_title'),
						html: !0,
						content: s.a.getTranslationByKey('options_talisman_url_popup_content'),
						placement: 'bottom',
					})
					.blur(function () {
						r(this).popover('hide');
					}),
				(t = r('.form-group.couchdb')),
				(e = r('.form-group.rest')),
				(n = r('.form-group.talisman')),
				r('select[name=storageType]').change(function () {
					t.hide(), e.hide(), n.hide();
					var i = r(this).val();
					'couchdb' === i
						? t.show()
						: 'rest' === i
						? e.show()
						: 'talisman' === i && n.show();
				}),
				a.loadConfiguration().then(function () {
					r('#storageType').val(a.storageType),
						r('#sitemapDb').val(a.sitemapDb),
						r('#dataDb').val(a.dataDb),
						r('#restUrl').val(a.restUrl),
						r('#talismanApiURL').val(a.talismanApiUrl),
						r('select[name=storageType]').change(),
						'ru' === i.i18n.getUILanguage() &&
							'couchdb' !== a.storageType &&
							r('#storageType [value=couchdb]').hide();
				}),
				r('form#storage_configuration').submit(function () {
					var t = r('#storageType').val(),
						e = {
							storageType: t,
							sitemapDb: '',
							dataDb: '',
							restUrl: '',
							talismanApiUrl: '',
							credential: '',
							timestamp: Date.now(),
						};
					return (
						'couchdb' === t
							? ((e.sitemapDb = r('#sitemapDb').val()),
							  (e.dataDb = r('#dataDb').val()))
							: 'rest' === t
							? (e.restUrl = r('#restUrl').val())
							: 'talisman' === t && (e.talismanApiUrl = r('#talismanApiURL').val()),
						a
							.updateConfiguration(e)
							.then(function () {
								r('.alert')
									.attr('id', 'success')
									.text(s.a.getTranslationByKey('options_successfully_updated'))
									.show(),
									s.a.translatePage();
							})
							.catch(function (t) {
								console.error(t),
									r('.alert')
										.attr('id', 'error')
										.text(s.a.getTranslationByKey('options_error_updating'))
										.show();
							}),
						!1
					);
				}),
				s.a.translatePage();
		});
	},
]);
//# sourceMappingURL=options.js.map
