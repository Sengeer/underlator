/*! For license information please see main.0053bcf5.js.LICENSE.txt */
(() => {
  'use strict';
  var e = {
      730: (e, t, n) => {
        var r = n(43),
          a = n(853);
        function l(e) {
          for (
            var t =
                'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += '&args[]=' + encodeURIComponent(arguments[n]);
          return (
            'Minified React error #' +
            e +
            '; visit ' +
            t +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
          );
        }
        var o = new Set(),
          i = {};
        function u(e, t) {
          s(e, t), s(e + 'Capture', t);
        }
        function s(e, t) {
          for (i[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
        }
        var c = !(
            'undefined' === typeof window ||
            'undefined' === typeof window.document ||
            'undefined' === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, a, l, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = l),
            (this.removeEmptyString = o);
        }
        var v = {};
        'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
          .split(' ')
          .forEach(function (e) {
            v[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ['acceptCharset', 'accept-charset'],
            ['className', 'class'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv'],
          ].forEach(function (e) {
            var t = e[0];
            v[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
            function (e) {
              v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            'autoReverse',
            'externalResourcesRequired',
            'focusable',
            'preserveAlpha',
          ].forEach(function (e) {
            v[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
            .split(' ')
            .forEach(function (e) {
              v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
            v[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ['capture', 'download'].forEach(function (e) {
            v[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ['cols', 'rows', 'size', 'span'].forEach(function (e) {
            v[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ['rowSpan', 'start'].forEach(function (e) {
            v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = v.hasOwnProperty(t) ? v[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ('o' !== t[0] && 'O' !== t[0]) ||
              ('n' !== t[1] && 'N' !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                'undefined' === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case 'function':
                    case 'symbol':
                      return !0;
                    case 'boolean':
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : 'data-' !== (e = e.toLowerCase().slice(0, 5)) &&
                            'aria-' !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
              : a.mustUseProperty
                ? (e[a.propertyName] = null === n ? 3 !== a.type && '' : n)
                : ((t = a.attributeName),
                  (r = a.attributeNamespace),
                  null === n
                    ? e.removeAttribute(t)
                    : ((n =
                        3 === (a = a.type) || (4 === a && !0 === n)
                          ? ''
                          : '' + n),
                      r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
          .split(' ')
          .forEach(function (e) {
            var t = e.replace(g, y);
            v[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
            .split(' ')
            .forEach(function (e) {
              var t = e.replace(g, y);
              v[t] = new m(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
            }),
          ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
            var t = e.replace(g, y);
            v[t] = new m(
              t,
              1,
              !1,
              e,
              'http://www.w3.org/XML/1998/namespace',
              !1,
              !1
            );
          }),
          ['tabIndex', 'crossOrigin'].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (v.xlinkHref = new m(
            'xlinkHref',
            1,
            !1,
            'xlink:href',
            'http://www.w3.org/1999/xlink',
            !0,
            !1
          )),
          ['src', 'href', 'action', 'formAction'].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for('react.element'),
          S = Symbol.for('react.portal'),
          _ = Symbol.for('react.fragment'),
          x = Symbol.for('react.strict_mode'),
          E = Symbol.for('react.profiler'),
          C = Symbol.for('react.provider'),
          L = Symbol.for('react.context'),
          P = Symbol.for('react.forward_ref'),
          z = Symbol.for('react.suspense'),
          N = Symbol.for('react.suspense_list'),
          T = Symbol.for('react.memo'),
          R = Symbol.for('react.lazy');
        Symbol.for('react.scope'), Symbol.for('react.debug_trace_mode');
        var M = Symbol.for('react.offscreen');
        Symbol.for('react.legacy_hidden'),
          Symbol.for('react.cache'),
          Symbol.for('react.tracing_marker');
        var O = Symbol.iterator;
        function F(e) {
          return null === e || 'object' !== typeof e
            ? null
            : 'function' === typeof (e = (O && e[O]) || e['@@iterator'])
              ? e
              : null;
        }
        var D,
          I = Object.assign;
        function A(e) {
          if (void 0 === D)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              D = (t && t[1]) || '';
            }
          return '\n' + D + e;
        }
        var j = !1;
        function U(e, t) {
          if (!e || j) return '';
          j = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                'object' === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (s) {
                  var r = s;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (s) {
                  r = s;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (s) {
                r = s;
              }
              e();
            }
          } catch (s) {
            if (s && r && 'string' === typeof s.stack) {
              for (
                var a = s.stack.split('\n'),
                  l = r.stack.split('\n'),
                  o = a.length - 1,
                  i = l.length - 1;
                1 <= o && 0 <= i && a[o] !== l[i];

              )
                i--;
              for (; 1 <= o && 0 <= i; o--, i--)
                if (a[o] !== l[i]) {
                  if (1 !== o || 1 !== i)
                    do {
                      if ((o--, 0 > --i || a[o] !== l[i])) {
                        var u = '\n' + a[o].replace(' at new ', ' at ');
                        return (
                          e.displayName &&
                            u.includes('<anonymous>') &&
                            (u = u.replace('<anonymous>', e.displayName)),
                          u
                        );
                      }
                    } while (1 <= o && 0 <= i);
                  break;
                }
            }
          } finally {
            (j = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : '') ? A(e) : '';
        }
        function B(e) {
          switch (e.tag) {
            case 5:
              return A(e.type);
            case 16:
              return A('Lazy');
            case 13:
              return A('Suspense');
            case 19:
              return A('SuspenseList');
            case 0:
            case 2:
            case 15:
              return (e = U(e.type, !1));
            case 11:
              return (e = U(e.type.render, !1));
            case 1:
              return (e = U(e.type, !0));
            default:
              return '';
          }
        }
        function $(e) {
          if (null == e) return null;
          if ('function' === typeof e) return e.displayName || e.name || null;
          if ('string' === typeof e) return e;
          switch (e) {
            case _:
              return 'Fragment';
            case S:
              return 'Portal';
            case E:
              return 'Profiler';
            case x:
              return 'StrictMode';
            case z:
              return 'Suspense';
            case N:
              return 'SuspenseList';
          }
          if ('object' === typeof e)
            switch (e.$$typeof) {
              case L:
                return (e.displayName || 'Context') + '.Consumer';
              case C:
                return (e._context.displayName || 'Context') + '.Provider';
              case P:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      '' !== (e = t.displayName || t.name || '')
                        ? 'ForwardRef(' + e + ')'
                        : 'ForwardRef'),
                  e
                );
              case T:
                return null !== (t = e.displayName || null)
                  ? t
                  : $(e.type) || 'Memo';
              case R:
                (t = e._payload), (e = e._init);
                try {
                  return $(e(t));
                } catch (n) {}
            }
          return null;
        }
        function H(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return 'Cache';
            case 9:
              return (t.displayName || 'Context') + '.Consumer';
            case 10:
              return (t._context.displayName || 'Context') + '.Provider';
            case 18:
              return 'DehydratedFragment';
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ''),
                t.displayName ||
                  ('' !== e ? 'ForwardRef(' + e + ')' : 'ForwardRef')
              );
            case 7:
              return 'Fragment';
            case 5:
              return t;
            case 4:
              return 'Portal';
            case 3:
              return 'Root';
            case 6:
              return 'Text';
            case 16:
              return $(t);
            case 8:
              return t === x ? 'StrictMode' : 'Mode';
            case 22:
              return 'Offscreen';
            case 12:
              return 'Profiler';
            case 21:
              return 'Scope';
            case 13:
              return 'Suspense';
            case 19:
              return 'SuspenseList';
            case 25:
              return 'TracingMarker';
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ('function' === typeof t)
                return t.displayName || t.name || null;
              if ('string' === typeof t) return t;
          }
          return null;
        }
        function V(e) {
          switch (typeof e) {
            case 'boolean':
            case 'number':
            case 'string':
            case 'undefined':
            case 'object':
              return e;
            default:
              return '';
          }
        }
        function W(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            'input' === e.toLowerCase() &&
            ('checkbox' === t || 'radio' === t)
          );
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = W(e) ? 'checked' : 'value',
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = '' + e[t];
              if (
                !e.hasOwnProperty(t) &&
                'undefined' !== typeof n &&
                'function' === typeof n.get &&
                'function' === typeof n.set
              ) {
                var a = n.get,
                  l = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = '' + e), l.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = '' + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function K(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = '';
          return (
            e && (r = W(e) ? (e.checked ? 'true' : 'false') : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function q(e) {
          if (
            'undefined' ===
            typeof (e =
              e || ('undefined' !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Y(e, t) {
          var n = t.checked;
          return I({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function G(e, t) {
          var n = null == t.defaultValue ? '' : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = V(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                'checkbox' === t.type || 'radio' === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function X(e, t) {
          null != (t = t.checked) && b(e, 'checked', t, !1);
        }
        function J(e, t) {
          X(e, t);
          var n = V(t.value),
            r = t.type;
          if (null != n)
            'number' === r
              ? ((0 === n && '' === e.value) || e.value != n) &&
                (e.value = '' + n)
              : e.value !== '' + n && (e.value = '' + n);
          else if ('submit' === r || 'reset' === r)
            return void e.removeAttribute('value');
          t.hasOwnProperty('value')
            ? ee(e, t.type, n)
            : t.hasOwnProperty('defaultValue') &&
              ee(e, t.type, V(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
            var r = t.type;
            if (
              !(
                ('submit' !== r && 'reset' !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = '' + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          '' !== (n = e.name) && (e.name = ''),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            '' !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ('number' === t && q(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = '' + e._wrapperState.initialValue)
              : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t['$' + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = '' + V(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(l(91));
          return I({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: '' + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(l(92));
              if (te(n)) {
                if (1 < n.length) throw Error(l(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ''), (n = t);
          }
          e._wrapperState = { initialValue: V(n) };
        }
        function le(e, t) {
          var n = V(t.value),
            r = V(t.defaultValue);
          null != n &&
            ((n = '' + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = '' + r);
        }
        function oe(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            '' !== t &&
            null !== t &&
            (e.value = t);
        }
        function ie(e) {
          switch (e) {
            case 'svg':
              return 'http://www.w3.org/2000/svg';
            case 'math':
              return 'http://www.w3.org/1998/Math/MathML';
            default:
              return 'http://www.w3.org/1999/xhtml';
          }
        }
        function ue(e, t) {
          return null == e || 'http://www.w3.org/1999/xhtml' === e
            ? ie(t)
            : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
              ? 'http://www.w3.org/1999/xhtml'
              : e;
        }
        var se,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                'http://www.w3.org/2000/svg' !== e.namespaceURI ||
                'innerHTML' in e
              )
                e.innerHTML = t;
              else {
                for (
                  (se = se || document.createElement('div')).innerHTML =
                    '<svg>' + t.valueOf().toString() + '</svg>',
                    t = se.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            'undefined' !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ['Webkit', 'ms', 'Moz', 'O'];
        function me(e, t, n) {
          return null == t || 'boolean' === typeof t || '' === t
            ? ''
            : n ||
                'number' !== typeof t ||
                0 === t ||
                (pe.hasOwnProperty(e) && pe[e])
              ? ('' + t).trim()
              : t + 'px';
        }
        function ve(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf('--'),
                a = me(n, t[n], r);
              'float' === n && (n = 'cssFloat'),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ge = I(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              ge[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(l(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(l(60));
              if (
                'object' !== typeof t.dangerouslySetInnerHTML ||
                !('__html' in t.dangerouslySetInnerHTML)
              )
                throw Error(l(61));
            }
            if (null != t.style && 'object' !== typeof t.style)
              throw Error(l(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf('-')) return 'string' === typeof t.is;
          switch (e) {
            case 'annotation-xml':
            case 'color-profile':
            case 'font-face':
            case 'font-face-src':
            case 'font-face-uri':
            case 'font-face-format':
            case 'font-face-name':
            case 'missing-glyph':
              return !1;
            default:
              return !0;
          }
        }
        var ke = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Se = null,
          _e = null,
          xe = null;
        function Ee(e) {
          if ((e = ba(e))) {
            if ('function' !== typeof Se) throw Error(l(280));
            var t = e.stateNode;
            t && ((t = wa(t)), Se(e.stateNode, e.type, t));
          }
        }
        function Ce(e) {
          _e ? (xe ? xe.push(e) : (xe = [e])) : (_e = e);
        }
        function Le() {
          if (_e) {
            var e = _e,
              t = xe;
            if (((xe = _e = null), Ee(e), t))
              for (e = 0; e < t.length; e++) Ee(t[e]);
          }
        }
        function Pe(e, t) {
          return e(t);
        }
        function ze() {}
        var Ne = !1;
        function Te(e, t, n) {
          if (Ne) return e(t, n);
          Ne = !0;
          try {
            return Pe(e, t, n);
          } finally {
            (Ne = !1), (null !== _e || null !== xe) && (ze(), Le());
          }
        }
        function Re(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = wa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
            case 'onMouseEnter':
              (r = !r.disabled) ||
                (r = !(
                  'button' === (e = e.type) ||
                  'input' === e ||
                  'select' === e ||
                  'textarea' === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && 'function' !== typeof n) throw Error(l(231, t, typeof n));
          return n;
        }
        var Me = !1;
        if (c)
          try {
            var Oe = {};
            Object.defineProperty(Oe, 'passive', {
              get: function () {
                Me = !0;
              },
            }),
              window.addEventListener('test', Oe, Oe),
              window.removeEventListener('test', Oe, Oe);
          } catch (ce) {
            Me = !1;
          }
        function Fe(e, t, n, r, a, l, o, i, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, s);
          } catch (c) {
            this.onError(c);
          }
        }
        var De = !1,
          Ie = null,
          Ae = !1,
          je = null,
          Ue = {
            onError: function (e) {
              (De = !0), (Ie = e);
            },
          };
        function Be(e, t, n, r, a, l, o, i, u) {
          (De = !1), (Ie = null), Fe.apply(Ue, arguments);
        }
        function $e(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function He(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ve(e) {
          if ($e(e) !== e) throw Error(l(188));
        }
        function We(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = $e(e))) throw Error(l(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var o = a.alternate;
                if (null === o) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === o.child) {
                  for (o = a.child; o; ) {
                    if (o === n) return Ve(a), e;
                    if (o === r) return Ve(a), t;
                    o = o.sibling;
                  }
                  throw Error(l(188));
                }
                if (n.return !== r.return) (n = a), (r = o);
                else {
                  for (var i = !1, u = a.child; u; ) {
                    if (u === n) {
                      (i = !0), (n = a), (r = o);
                      break;
                    }
                    if (u === r) {
                      (i = !0), (r = a), (n = o);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!i) {
                    for (u = o.child; u; ) {
                      if (u === n) {
                        (i = !0), (n = o), (r = a);
                        break;
                      }
                      if (u === r) {
                        (i = !0), (r = o), (n = a);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!i) throw Error(l(189));
                  }
                }
                if (n.alternate !== r) throw Error(l(190));
              }
              if (3 !== n.tag) throw Error(l(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Qe(e)
            : null;
        }
        function Qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ke = a.unstable_scheduleCallback,
          qe = a.unstable_cancelCallback,
          Ye = a.unstable_shouldYield,
          Ge = a.unstable_requestPaint,
          Xe = a.unstable_now,
          Je = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          lt = null;
        var ot = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((it(e) / ut) | 0)) | 0;
              },
          it = Math.log,
          ut = Math.LN2;
        var st = 64,
          ct = 4194304;
        function ft(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            l = e.pingedLanes,
            o = 268435455 & n;
          if (0 !== o) {
            var i = o & ~a;
            0 !== i ? (r = ft(i)) : 0 !== (l &= o) && (r = ft(l));
          } else 0 !== (o = n & ~a) ? (r = ft(o)) : 0 !== l && (r = ft(l));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (l = t & -t) || (16 === a && 0 !== (4194240 & l)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - ot(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
              ? 1073741824
              : 0;
        }
        function mt() {
          var e = st;
          return 0 === (4194240 & (st <<= 1)) && (st = 64), e;
        }
        function vt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function gt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - ot(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - ot(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function kt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var wt,
          St,
          _t,
          xt,
          Et,
          Ct = !1,
          Lt = [],
          Pt = null,
          zt = null,
          Nt = null,
          Tt = new Map(),
          Rt = new Map(),
          Mt = [],
          Ot =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
              ' '
            );
        function Ft(e, t) {
          switch (e) {
            case 'focusin':
            case 'focusout':
              Pt = null;
              break;
            case 'dragenter':
            case 'dragleave':
              zt = null;
              break;
            case 'mouseover':
            case 'mouseout':
              Nt = null;
              break;
            case 'pointerover':
            case 'pointerout':
              Tt.delete(t.pointerId);
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
              Rt.delete(t.pointerId);
          }
        }
        function Dt(e, t, n, r, a, l) {
          return null === e || e.nativeEvent !== l
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: l,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && St(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function It(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = $e(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = He(n)))
                  return (
                    (e.blockedOn = t),
                    void Et(e.priority, function () {
                      _t(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function At(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && St(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (ke = r), n.target.dispatchEvent(r), (ke = null), t.shift();
          }
          return !0;
        }
        function jt(e, t, n) {
          At(e) && n.delete(t);
        }
        function Ut() {
          (Ct = !1),
            null !== Pt && At(Pt) && (Pt = null),
            null !== zt && At(zt) && (zt = null),
            null !== Nt && At(Nt) && (Nt = null),
            Tt.forEach(jt),
            Rt.forEach(jt);
        }
        function Bt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Ct ||
              ((Ct = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Ut)));
        }
        function $t(e) {
          function t(t) {
            return Bt(t, e);
          }
          if (0 < Lt.length) {
            Bt(Lt[0], e);
            for (var n = 1; n < Lt.length; n++) {
              var r = Lt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Pt && Bt(Pt, e),
              null !== zt && Bt(zt, e),
              null !== Nt && Bt(Nt, e),
              Tt.forEach(t),
              Rt.forEach(t),
              n = 0;
            n < Mt.length;
            n++
          )
            (r = Mt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Mt.length && null === (n = Mt[0]).blockedOn; )
            It(n), null === n.blockedOn && Mt.shift();
        }
        var Ht = k.ReactCurrentBatchConfig,
          Vt = !0;
        function Wt(e, t, n, r) {
          var a = bt,
            l = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 1), Kt(e, t, n, r);
          } finally {
            (bt = a), (Ht.transition = l);
          }
        }
        function Qt(e, t, n, r) {
          var a = bt,
            l = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 4), Kt(e, t, n, r);
          } finally {
            (bt = a), (Ht.transition = l);
          }
        }
        function Kt(e, t, n, r) {
          if (Vt) {
            var a = Yt(e, t, n, r);
            if (null === a) Vr(e, t, r, qt, n), Ft(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case 'focusin':
                    return (Pt = Dt(Pt, e, t, n, r, a)), !0;
                  case 'dragenter':
                    return (zt = Dt(zt, e, t, n, r, a)), !0;
                  case 'mouseover':
                    return (Nt = Dt(Nt, e, t, n, r, a)), !0;
                  case 'pointerover':
                    var l = a.pointerId;
                    return Tt.set(l, Dt(Tt.get(l) || null, e, t, n, r, a)), !0;
                  case 'gotpointercapture':
                    return (
                      (l = a.pointerId),
                      Rt.set(l, Dt(Rt.get(l) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Ft(e, r), 4 & t && -1 < Ot.indexOf(e))) {
              for (; null !== a; ) {
                var l = ba(a);
                if (
                  (null !== l && wt(l),
                  null === (l = Yt(e, t, n, r)) && Vr(e, t, r, qt, n),
                  l === a)
                )
                  break;
                a = l;
              }
              null !== a && r.stopPropagation();
            } else Vr(e, t, r, null, n);
          }
        }
        var qt = null;
        function Yt(e, t, n, r) {
          if (((qt = null), null !== (e = ya((e = we(r))))))
            if (null === (t = $e(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = He(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (qt = e), null;
        }
        function Gt(e) {
          switch (e) {
            case 'cancel':
            case 'click':
            case 'close':
            case 'contextmenu':
            case 'copy':
            case 'cut':
            case 'auxclick':
            case 'dblclick':
            case 'dragend':
            case 'dragstart':
            case 'drop':
            case 'focusin':
            case 'focusout':
            case 'input':
            case 'invalid':
            case 'keydown':
            case 'keypress':
            case 'keyup':
            case 'mousedown':
            case 'mouseup':
            case 'paste':
            case 'pause':
            case 'play':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointerup':
            case 'ratechange':
            case 'reset':
            case 'resize':
            case 'seeked':
            case 'submit':
            case 'touchcancel':
            case 'touchend':
            case 'touchstart':
            case 'volumechange':
            case 'change':
            case 'selectionchange':
            case 'textInput':
            case 'compositionstart':
            case 'compositionend':
            case 'compositionupdate':
            case 'beforeblur':
            case 'afterblur':
            case 'beforeinput':
            case 'blur':
            case 'fullscreenchange':
            case 'focus':
            case 'hashchange':
            case 'popstate':
            case 'select':
            case 'selectstart':
              return 1;
            case 'drag':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'mousemove':
            case 'mouseout':
            case 'mouseover':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'scroll':
            case 'toggle':
            case 'touchmove':
            case 'wheel':
            case 'mouseenter':
            case 'mouseleave':
            case 'pointerenter':
            case 'pointerleave':
              return 4;
            case 'message':
              switch (Je()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xt = null,
          Jt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Jt,
            r = n.length,
            a = 'value' in Xt ? Xt.value : Xt.textContent,
            l = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === a[l - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            'charCode' in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, l) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = l),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            I(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : 'unknown' !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : 'unknown' !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var ln,
          on,
          un,
          sn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(sn),
          fn = I({}, sn, { view: 0, detail: 0 }),
          dn = an(fn),
          pn = I({}, fn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: En,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return 'movementX' in e
                ? e.movementX
                : (e !== un &&
                    (un && 'mousemove' === e.type
                      ? ((ln = e.screenX - un.screenX),
                        (on = e.screenY - un.screenY))
                      : (on = ln = 0),
                    (un = e)),
                  ln);
            },
            movementY: function (e) {
              return 'movementY' in e ? e.movementY : on;
            },
          }),
          hn = an(pn),
          mn = an(I({}, pn, { dataTransfer: 0 })),
          vn = an(I({}, fn, { relatedTarget: 0 })),
          gn = an(
            I({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = I({}, sn, {
            clipboardData: function (e) {
              return 'clipboardData' in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          kn = an(I({}, sn, { data: 0 })),
          wn = {
            Esc: 'Escape',
            Spacebar: ' ',
            Left: 'ArrowLeft',
            Up: 'ArrowUp',
            Right: 'ArrowRight',
            Down: 'ArrowDown',
            Del: 'Delete',
            Win: 'OS',
            Menu: 'ContextMenu',
            Apps: 'ContextMenu',
            Scroll: 'ScrollLock',
            MozPrintableKey: 'Unidentified',
          },
          Sn = {
            8: 'Backspace',
            9: 'Tab',
            12: 'Clear',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            45: 'Insert',
            46: 'Delete',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NumLock',
            145: 'ScrollLock',
            224: 'Meta',
          },
          _n = {
            Alt: 'altKey',
            Control: 'ctrlKey',
            Meta: 'metaKey',
            Shift: 'shiftKey',
          };
        function xn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = _n[e]) && !!t[e];
        }
        function En() {
          return xn;
        }
        var Cn = I({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key;
                if ('Unidentified' !== t) return t;
              }
              return 'keypress' === e.type
                ? 13 === (e = tn(e))
                  ? 'Enter'
                  : String.fromCharCode(e)
                : 'keydown' === e.type || 'keyup' === e.type
                  ? Sn[e.keyCode] || 'Unidentified'
                  : '';
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: En,
            charCode: function (e) {
              return 'keypress' === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return 'keypress' === e.type
                ? tn(e)
                : 'keydown' === e.type || 'keyup' === e.type
                  ? e.keyCode
                  : 0;
            },
          }),
          Ln = an(Cn),
          Pn = an(
            I({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          zn = an(
            I({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: En,
            })
          ),
          Nn = an(
            I({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Tn = I({}, pn, {
            deltaX: function (e) {
              return 'deltaX' in e
                ? e.deltaX
                : 'wheelDeltaX' in e
                  ? -e.wheelDeltaX
                  : 0;
            },
            deltaY: function (e) {
              return 'deltaY' in e
                ? e.deltaY
                : 'wheelDeltaY' in e
                  ? -e.wheelDeltaY
                  : 'wheelDelta' in e
                    ? -e.wheelDelta
                    : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Rn = an(Tn),
          Mn = [9, 13, 27, 32],
          On = c && 'CompositionEvent' in window,
          Fn = null;
        c && 'documentMode' in document && (Fn = document.documentMode);
        var Dn = c && 'TextEvent' in window && !Fn,
          In = c && (!On || (Fn && 8 < Fn && 11 >= Fn)),
          An = String.fromCharCode(32),
          jn = !1;
        function Un(e, t) {
          switch (e) {
            case 'keyup':
              return -1 !== Mn.indexOf(t.keyCode);
            case 'keydown':
              return 229 !== t.keyCode;
            case 'keypress':
            case 'mousedown':
            case 'focusout':
              return !0;
            default:
              return !1;
          }
        }
        function Bn(e) {
          return 'object' === typeof (e = e.detail) && 'data' in e
            ? e.data
            : null;
        }
        var $n = !1;
        var Hn = {
          color: !0,
          date: !0,
          datetime: !0,
          'datetime-local': !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Vn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return 'input' === t ? !!Hn[e.type] : 'textarea' === t;
        }
        function Wn(e, t, n, r) {
          Ce(r),
            0 < (t = Qr(t, 'onChange')).length &&
              ((n = new cn('onChange', 'change', null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Qn = null,
          Kn = null;
        function qn(e) {
          Ar(e, 0);
        }
        function Yn(e) {
          if (K(ka(e))) return e;
        }
        function Gn(e, t) {
          if ('change' === e) return t;
        }
        var Xn = !1;
        if (c) {
          var Jn;
          if (c) {
            var Zn = 'oninput' in document;
            if (!Zn) {
              var er = document.createElement('div');
              er.setAttribute('oninput', 'return;'),
                (Zn = 'function' === typeof er.oninput);
            }
            Jn = Zn;
          } else Jn = !1;
          Xn = Jn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Qn && (Qn.detachEvent('onpropertychange', nr), (Kn = Qn = null));
        }
        function nr(e) {
          if ('value' === e.propertyName && Yn(Kn)) {
            var t = [];
            Wn(t, Kn, e, we(e)), Te(qn, t);
          }
        }
        function rr(e, t, n) {
          'focusin' === e
            ? (tr(), (Kn = n), (Qn = t).attachEvent('onpropertychange', nr))
            : 'focusout' === e && tr();
        }
        function ar(e) {
          if ('selectionchange' === e || 'keyup' === e || 'keydown' === e)
            return Yn(Kn);
        }
        function lr(e, t) {
          if ('click' === e) return Yn(t);
        }
        function or(e, t) {
          if ('input' === e || 'change' === e) return Yn(t);
        }
        var ir =
          'function' === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function ur(e, t) {
          if (ir(e, t)) return !0;
          if (
            'object' !== typeof e ||
            null === e ||
            'object' !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!f.call(t, a) || !ir(e[a], t[a])) return !1;
          }
          return !0;
        }
        function sr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = sr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = sr(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : 'contains' in e
                    ? e.contains(t)
                    : !!e.compareDocumentPosition &&
                      !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = 'string' === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = q((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (('input' === t &&
              ('text' === e.type ||
                'search' === e.type ||
                'tel' === e.type ||
                'url' === e.type ||
                'password' === e.type)) ||
              'textarea' === t ||
              'true' === e.contentEditable)
          );
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                'selectionStart' in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  l = Math.min(r.start, a);
                (r = void 0 === r.end ? l : Math.min(r.end, a)),
                  !e.extend && l > r && ((a = r), (r = l), (l = a)),
                  (a = cr(n, l));
                var o = cr(n, r);
                a &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  l > r
                    ? (e.addRange(t), e.extend(o.node, o.offset))
                    : (t.setEnd(o.node, o.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              'function' === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && 'documentMode' in document && 11 >= document.documentMode,
          vr = null,
          gr = null,
          yr = null,
          br = !1;
        function kr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
                ? n
                : n.ownerDocument;
          br ||
            null == vr ||
            vr !== q(r) ||
            ('selectionStart' in (r = vr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && ur(yr, r)) ||
              ((yr = r),
              0 < (r = Qr(gr, 'onSelect')).length &&
                ((t = new cn('onSelect', 'select', null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = vr))));
        }
        function wr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n['Webkit' + e] = 'webkit' + t),
            (n['Moz' + e] = 'moz' + t),
            n
          );
        }
        var Sr = {
            animationend: wr('Animation', 'AnimationEnd'),
            animationiteration: wr('Animation', 'AnimationIteration'),
            animationstart: wr('Animation', 'AnimationStart'),
            transitionend: wr('Transition', 'TransitionEnd'),
          },
          _r = {},
          xr = {};
        function Er(e) {
          if (_r[e]) return _r[e];
          if (!Sr[e]) return e;
          var t,
            n = Sr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in xr) return (_r[e] = n[t]);
          return e;
        }
        c &&
          ((xr = document.createElement('div').style),
          'AnimationEvent' in window ||
            (delete Sr.animationend.animation,
            delete Sr.animationiteration.animation,
            delete Sr.animationstart.animation),
          'TransitionEvent' in window || delete Sr.transitionend.transition);
        var Cr = Er('animationend'),
          Lr = Er('animationiteration'),
          Pr = Er('animationstart'),
          zr = Er('transitionend'),
          Nr = new Map(),
          Tr =
            'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
              ' '
            );
        function Rr(e, t) {
          Nr.set(e, t), u(t, [e]);
        }
        for (var Mr = 0; Mr < Tr.length; Mr++) {
          var Or = Tr[Mr];
          Rr(Or.toLowerCase(), 'on' + (Or[0].toUpperCase() + Or.slice(1)));
        }
        Rr(Cr, 'onAnimationEnd'),
          Rr(Lr, 'onAnimationIteration'),
          Rr(Pr, 'onAnimationStart'),
          Rr('dblclick', 'onDoubleClick'),
          Rr('focusin', 'onFocus'),
          Rr('focusout', 'onBlur'),
          Rr(zr, 'onTransitionEnd'),
          s('onMouseEnter', ['mouseout', 'mouseover']),
          s('onMouseLeave', ['mouseout', 'mouseover']),
          s('onPointerEnter', ['pointerout', 'pointerover']),
          s('onPointerLeave', ['pointerout', 'pointerover']),
          u(
            'onChange',
            'change click focusin focusout input keydown keyup selectionchange'.split(
              ' '
            )
          ),
          u(
            'onSelect',
            'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
              ' '
            )
          ),
          u('onBeforeInput', [
            'compositionend',
            'keypress',
            'textInput',
            'paste',
          ]),
          u(
            'onCompositionEnd',
            'compositionend focusout keydown keypress keyup mousedown'.split(
              ' '
            )
          ),
          u(
            'onCompositionStart',
            'compositionstart focusout keydown keypress keyup mousedown'.split(
              ' '
            )
          ),
          u(
            'onCompositionUpdate',
            'compositionupdate focusout keydown keypress keyup mousedown'.split(
              ' '
            )
          );
        var Fr =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
              ' '
            ),
          Dr = new Set(
            'cancel close invalid load scroll toggle'.split(' ').concat(Fr)
          );
        function Ir(e, t, n) {
          var r = e.type || 'unknown-event';
          (e.currentTarget = n),
            (function (e, t, n, r, a, o, i, u, s) {
              if ((Be.apply(this, arguments), De)) {
                if (!De) throw Error(l(198));
                var c = Ie;
                (De = !1), (Ie = null), Ae || ((Ae = !0), (je = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Ar(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var l = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var i = r[o],
                    u = i.instance,
                    s = i.currentTarget;
                  if (((i = i.listener), u !== l && a.isPropagationStopped()))
                    break e;
                  Ir(a, i, s), (l = u);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((u = (i = r[o]).instance),
                    (s = i.currentTarget),
                    (i = i.listener),
                    u !== l && a.isPropagationStopped())
                  )
                    break e;
                  Ir(a, i, s), (l = u);
                }
            }
          }
          if (Ae) throw ((e = je), (Ae = !1), (je = null), e);
        }
        function jr(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + '__bubble';
          n.has(r) || (Hr(t, e, 2, !1), n.add(r));
        }
        function Ur(e, t, n) {
          var r = 0;
          t && (r |= 4), Hr(n, e, r, t);
        }
        var Br = '_reactListening' + Math.random().toString(36).slice(2);
        function $r(e) {
          if (!e[Br]) {
            (e[Br] = !0),
              o.forEach(function (t) {
                'selectionchange' !== t &&
                  (Dr.has(t) || Ur(t, !1, e), Ur(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Br] || ((t[Br] = !0), Ur('selectionchange', !1, t));
          }
        }
        function Hr(e, t, n, r) {
          switch (Gt(t)) {
            case 1:
              var a = Wt;
              break;
            case 4:
              a = Qt;
              break;
            default:
              a = Kt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Me ||
              ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
                ? e.addEventListener(t, n, { passive: a })
                : e.addEventListener(t, n, !1);
        }
        function Vr(e, t, n, r, a) {
          var l = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var i = r.stateNode.containerInfo;
                if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var u = o.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = o.stateNode.containerInfo) === a ||
                        (8 === u.nodeType && u.parentNode === a))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== i; ) {
                  if (null === (o = ya(i))) return;
                  if (5 === (u = o.tag) || 6 === u) {
                    r = l = o;
                    continue e;
                  }
                  i = i.parentNode;
                }
              }
              r = r.return;
            }
          Te(function () {
            var r = l,
              a = we(n),
              o = [];
            e: {
              var i = Nr.get(e);
              if (void 0 !== i) {
                var u = cn,
                  s = e;
                switch (e) {
                  case 'keypress':
                    if (0 === tn(n)) break e;
                  case 'keydown':
                  case 'keyup':
                    u = Ln;
                    break;
                  case 'focusin':
                    (s = 'focus'), (u = vn);
                    break;
                  case 'focusout':
                    (s = 'blur'), (u = vn);
                    break;
                  case 'beforeblur':
                  case 'afterblur':
                    u = vn;
                    break;
                  case 'click':
                    if (2 === n.button) break e;
                  case 'auxclick':
                  case 'dblclick':
                  case 'mousedown':
                  case 'mousemove':
                  case 'mouseup':
                  case 'mouseout':
                  case 'mouseover':
                  case 'contextmenu':
                    u = hn;
                    break;
                  case 'drag':
                  case 'dragend':
                  case 'dragenter':
                  case 'dragexit':
                  case 'dragleave':
                  case 'dragover':
                  case 'dragstart':
                  case 'drop':
                    u = mn;
                    break;
                  case 'touchcancel':
                  case 'touchend':
                  case 'touchmove':
                  case 'touchstart':
                    u = zn;
                    break;
                  case Cr:
                  case Lr:
                  case Pr:
                    u = gn;
                    break;
                  case zr:
                    u = Nn;
                    break;
                  case 'scroll':
                    u = dn;
                    break;
                  case 'wheel':
                    u = Rn;
                    break;
                  case 'copy':
                  case 'cut':
                  case 'paste':
                    u = bn;
                    break;
                  case 'gotpointercapture':
                  case 'lostpointercapture':
                  case 'pointercancel':
                  case 'pointerdown':
                  case 'pointermove':
                  case 'pointerout':
                  case 'pointerover':
                  case 'pointerup':
                    u = Pn;
                }
                var c = 0 !== (4 & t),
                  f = !c && 'scroll' === e,
                  d = c ? (null !== i ? i + 'Capture' : null) : i;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== d &&
                        null != (m = Re(h, d)) &&
                        c.push(Wr(h, m, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((i = new u(i, s, null, n, a)),
                  o.push({ event: i, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = 'mouseout' === e || 'pointerout' === e),
                (!(i = 'mouseover' === e || 'pointerover' === e) ||
                  n === ke ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!ya(s) && !s[ha])) &&
                  (u || i) &&
                  ((i =
                    a.window === a
                      ? a
                      : (i = a.ownerDocument)
                        ? i.defaultView || i.parentWindow
                        : window),
                  u
                    ? ((u = r),
                      null !==
                        (s = (s = n.relatedTarget || n.toElement)
                          ? ya(s)
                          : null) &&
                        (s !== (f = $e(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((u = null), (s = r)),
                  u !== s))
              ) {
                if (
                  ((c = hn),
                  (m = 'onMouseLeave'),
                  (d = 'onMouseEnter'),
                  (h = 'mouse'),
                  ('pointerout' !== e && 'pointerover' !== e) ||
                    ((c = Pn),
                    (m = 'onPointerLeave'),
                    (d = 'onPointerEnter'),
                    (h = 'pointer')),
                  (f = null == u ? i : ka(u)),
                  (p = null == s ? i : ka(s)),
                  ((i = new c(m, h + 'leave', u, n, a)).target = f),
                  (i.relatedTarget = p),
                  (m = null),
                  ya(a) === r &&
                    (((c = new c(d, h + 'enter', s, n, a)).target = p),
                    (c.relatedTarget = f),
                    (m = c)),
                  (f = m),
                  u && s)
                )
                  e: {
                    for (d = s, h = 0, p = c = u; p; p = Kr(p)) h++;
                    for (p = 0, m = d; m; m = Kr(m)) p++;
                    for (; 0 < h - p; ) (c = Kr(c)), h--;
                    for (; 0 < p - h; ) (d = Kr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = Kr(c)), (d = Kr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && qr(o, i, u, c, !1),
                  null !== s && null !== f && qr(o, f, s, c, !0);
              }
              if (
                'select' ===
                  (u =
                    (i = r ? ka(r) : window).nodeName &&
                    i.nodeName.toLowerCase()) ||
                ('input' === u && 'file' === i.type)
              )
                var v = Gn;
              else if (Vn(i))
                if (Xn) v = or;
                else {
                  v = ar;
                  var g = rr;
                }
              else
                (u = i.nodeName) &&
                  'input' === u.toLowerCase() &&
                  ('checkbox' === i.type || 'radio' === i.type) &&
                  (v = lr);
              switch (
                (v && (v = v(e, r))
                  ? Wn(o, v, n, a)
                  : (g && g(e, i, r),
                    'focusout' === e &&
                      (g = i._wrapperState) &&
                      g.controlled &&
                      'number' === i.type &&
                      ee(i, 'number', i.value)),
                (g = r ? ka(r) : window),
                e)
              ) {
                case 'focusin':
                  (Vn(g) || 'true' === g.contentEditable) &&
                    ((vr = g), (gr = r), (yr = null));
                  break;
                case 'focusout':
                  yr = gr = vr = null;
                  break;
                case 'mousedown':
                  br = !0;
                  break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                  (br = !1), kr(o, n, a);
                  break;
                case 'selectionchange':
                  if (mr) break;
                case 'keydown':
                case 'keyup':
                  kr(o, n, a);
              }
              var y;
              if (On)
                e: {
                  switch (e) {
                    case 'compositionstart':
                      var b = 'onCompositionStart';
                      break e;
                    case 'compositionend':
                      b = 'onCompositionEnd';
                      break e;
                    case 'compositionupdate':
                      b = 'onCompositionUpdate';
                      break e;
                  }
                  b = void 0;
                }
              else
                $n
                  ? Un(e, n) && (b = 'onCompositionEnd')
                  : 'keydown' === e &&
                    229 === n.keyCode &&
                    (b = 'onCompositionStart');
              b &&
                (In &&
                  'ko' !== n.locale &&
                  ($n || 'onCompositionStart' !== b
                    ? 'onCompositionEnd' === b && $n && (y = en())
                    : ((Jt = 'value' in (Xt = a) ? Xt.value : Xt.textContent),
                      ($n = !0))),
                0 < (g = Qr(r, b)).length &&
                  ((b = new kn(b, e, null, n, a)),
                  o.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = Bn(n)) && (b.data = y))),
                (y = Dn
                  ? (function (e, t) {
                      switch (e) {
                        case 'compositionend':
                          return Bn(t);
                        case 'keypress':
                          return 32 !== t.which ? null : ((jn = !0), An);
                        case 'textInput':
                          return (e = t.data) === An && jn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if ($n)
                        return 'compositionend' === e || (!On && Un(e, t))
                          ? ((e = en()), (Zt = Jt = Xt = null), ($n = !1), e)
                          : null;
                      switch (e) {
                        case 'paste':
                        default:
                          return null;
                        case 'keypress':
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case 'compositionend':
                          return In && 'ko' !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Qr(r, 'onBeforeInput')).length &&
                  ((a = new kn('onBeforeInput', 'beforeinput', null, n, a)),
                  o.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Ar(o, t);
          });
        }
        function Wr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Qr(e, t) {
          for (var n = t + 'Capture', r = []; null !== e; ) {
            var a = e,
              l = a.stateNode;
            5 === a.tag &&
              null !== l &&
              ((a = l),
              null != (l = Re(e, n)) && r.unshift(Wr(e, l, a)),
              null != (l = Re(e, t)) && r.push(Wr(e, l, a))),
              (e = e.return);
          }
          return r;
        }
        function Kr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function qr(e, t, n, r, a) {
          for (var l = t._reactName, o = []; null !== n && n !== r; ) {
            var i = n,
              u = i.alternate,
              s = i.stateNode;
            if (null !== u && u === r) break;
            5 === i.tag &&
              null !== s &&
              ((i = s),
              a
                ? null != (u = Re(n, l)) && o.unshift(Wr(n, u, i))
                : a || (null != (u = Re(n, l)) && o.push(Wr(n, u, i)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var Yr = /\r\n?/g,
          Gr = /\u0000|\uFFFD/g;
        function Xr(e) {
          return ('string' === typeof e ? e : '' + e)
            .replace(Yr, '\n')
            .replace(Gr, '');
        }
        function Jr(e, t, n) {
          if (((t = Xr(t)), Xr(e) !== t && n)) throw Error(l(425));
        }
        function Zr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            'textarea' === e ||
            'noscript' === e ||
            'string' === typeof t.children ||
            'number' === typeof t.children ||
            ('object' === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = 'function' === typeof setTimeout ? setTimeout : void 0,
          aa = 'function' === typeof clearTimeout ? clearTimeout : void 0,
          la = 'function' === typeof Promise ? Promise : void 0,
          oa =
            'function' === typeof queueMicrotask
              ? queueMicrotask
              : 'undefined' !== typeof la
                ? function (e) {
                    return la.resolve(null).then(e).catch(ia);
                  }
                : ra;
        function ia(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function ua(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ('/$' === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void $t(t);
                r--;
              } else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
            n = a;
          } while (n);
          $t(t);
        }
        function sa(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ('$' === (t = e.data) || '$!' === t || '$?' === t) break;
              if ('/$' === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ('$' === n || '$!' === n || '$?' === n) {
                if (0 === t) return e;
                t--;
              } else '/$' === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fa = Math.random().toString(36).slice(2),
          da = '__reactFiber$' + fa,
          pa = '__reactProps$' + fa,
          ha = '__reactContainer$' + fa,
          ma = '__reactEvents$' + fa,
          va = '__reactListeners$' + fa,
          ga = '__reactHandles$' + fa;
        function ya(e) {
          var t = e[da];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[da])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[da])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[da] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function ka(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(l(33));
        }
        function wa(e) {
          return e[pa] || null;
        }
        var Sa = [],
          _a = -1;
        function xa(e) {
          return { current: e };
        }
        function Ea(e) {
          0 > _a || ((e.current = Sa[_a]), (Sa[_a] = null), _a--);
        }
        function Ca(e, t) {
          _a++, (Sa[_a] = e.current), (e.current = t);
        }
        var La = {},
          Pa = xa(La),
          za = xa(!1),
          Na = La;
        function Ta(e, t) {
          var n = e.type.contextTypes;
          if (!n) return La;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            l = {};
          for (a in n) l[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            l
          );
        }
        function Ra(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Ma() {
          Ea(za), Ea(Pa);
        }
        function Oa(e, t, n) {
          if (Pa.current !== La) throw Error(l(168));
          Ca(Pa, t), Ca(za, n);
        }
        function Fa(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), 'function' !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(l(108, H(e) || 'Unknown', a));
          return I({}, n, r);
        }
        function Da(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              La),
            (Na = Pa.current),
            Ca(Pa, e),
            Ca(za, za.current),
            !0
          );
        }
        function Ia(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(l(169));
          n
            ? ((e = Fa(e, t, Na)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ea(za),
              Ea(Pa),
              Ca(Pa, e))
            : Ea(za),
            Ca(za, n);
        }
        var Aa = null,
          ja = !1,
          Ua = !1;
        function Ba(e) {
          null === Aa ? (Aa = [e]) : Aa.push(e);
        }
        function $a() {
          if (!Ua && null !== Aa) {
            Ua = !0;
            var e = 0,
              t = bt;
            try {
              var n = Aa;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Aa = null), (ja = !1);
            } catch (a) {
              throw (null !== Aa && (Aa = Aa.slice(e + 1)), Ke(Ze, $a), a);
            } finally {
              (bt = t), (Ua = !1);
            }
          }
          return null;
        }
        var Ha = [],
          Va = 0,
          Wa = null,
          Qa = 0,
          Ka = [],
          qa = 0,
          Ya = null,
          Ga = 1,
          Xa = '';
        function Ja(e, t) {
          (Ha[Va++] = Qa), (Ha[Va++] = Wa), (Wa = e), (Qa = t);
        }
        function Za(e, t, n) {
          (Ka[qa++] = Ga), (Ka[qa++] = Xa), (Ka[qa++] = Ya), (Ya = e);
          var r = Ga;
          e = Xa;
          var a = 32 - ot(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var l = 32 - ot(t) + a;
          if (30 < l) {
            var o = a - (a % 5);
            (l = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (a -= o),
              (Ga = (1 << (32 - ot(t) + a)) | (n << a) | r),
              (Xa = l + e);
          } else (Ga = (1 << l) | (n << a) | r), (Xa = e);
        }
        function el(e) {
          null !== e.return && (Ja(e, 1), Za(e, 1, 0));
        }
        function tl(e) {
          for (; e === Wa; )
            (Wa = Ha[--Va]), (Ha[Va] = null), (Qa = Ha[--Va]), (Ha[Va] = null);
          for (; e === Ya; )
            (Ya = Ka[--qa]),
              (Ka[qa] = null),
              (Xa = Ka[--qa]),
              (Ka[qa] = null),
              (Ga = Ka[--qa]),
              (Ka[qa] = null);
        }
        var nl = null,
          rl = null,
          al = !1,
          ll = null;
        function ol(e, t) {
          var n = Ts(5, null, null, 0);
          (n.elementType = 'DELETED'),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function il(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (nl = e), (rl = sa(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (nl = e), (rl = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ya ? { id: Ga, overflow: Xa } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Ts(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (nl = e),
                (rl = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function ul(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function sl(e) {
          if (al) {
            var t = rl;
            if (t) {
              var n = t;
              if (!il(e, t)) {
                if (ul(e)) throw Error(l(418));
                t = sa(n.nextSibling);
                var r = nl;
                t && il(e, t)
                  ? ol(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e));
              }
            } else {
              if (ul(e)) throw Error(l(418));
              (e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e);
            }
          }
        }
        function cl(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          nl = e;
        }
        function fl(e) {
          if (e !== nl) return !1;
          if (!al) return cl(e), (al = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                'head' !== (t = e.type) &&
                'body' !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = rl))
          ) {
            if (ul(e)) throw (dl(), Error(l(418)));
            for (; t; ) ol(e, t), (t = sa(t.nextSibling));
          }
          if ((cl(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(l(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ('/$' === n) {
                    if (0 === t) {
                      rl = sa(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
                }
                e = e.nextSibling;
              }
              rl = null;
            }
          } else rl = nl ? sa(e.stateNode.nextSibling) : null;
          return !0;
        }
        function dl() {
          for (var e = rl; e; ) e = sa(e.nextSibling);
        }
        function pl() {
          (rl = nl = null), (al = !1);
        }
        function hl(e) {
          null === ll ? (ll = [e]) : ll.push(e);
        }
        var ml = k.ReactCurrentBatchConfig;
        function vl(e, t, n) {
          if (
            null !== (e = n.ref) &&
            'function' !== typeof e &&
            'object' !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(l(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(l(147, e));
              var a = r,
                o = '' + e;
              return null !== t &&
                null !== t.ref &&
                'function' === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ('string' !== typeof e) throw Error(l(284));
            if (!n._owner) throw Error(l(290, e));
          }
          return e;
        }
        function gl(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              l(
                31,
                '[object Object]' === e
                  ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                  : e
              )
            ))
          );
        }
        function yl(e) {
          return (0, e._init)(e._payload);
        }
        function bl(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Ms(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function i(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Is(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            var l = n.type;
            return l === _
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                  (t.elementType === l ||
                    ('object' === typeof l &&
                      null !== l &&
                      l.$$typeof === R &&
                      yl(l) === t.type))
                ? (((r = a(t, n.props)).ref = vl(e, t, n)), (r.return = e), r)
                : (((r = Os(n.type, n.key, n.props, null, e.mode, r)).ref = vl(
                    e,
                    t,
                    n
                  )),
                  (r.return = e),
                  r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = As(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, l) {
            return null === t || 7 !== t.tag
              ? (((t = Fs(n, e.mode, r, l)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (('string' === typeof t && '' !== t) || 'number' === typeof t)
              return ((t = Is('' + t, e.mode, n)).return = e), t;
            if ('object' === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = Os(t.type, t.key, t.props, null, e.mode, n)).ref = vl(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case S:
                  return ((t = As(t, e.mode, n)).return = e), t;
                case R:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || F(t))
                return ((t = Fs(t, e.mode, n, null)).return = e), t;
              gl(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (('string' === typeof n && '' !== n) || 'number' === typeof n)
              return null !== a ? null : u(e, t, '' + n, r);
            if ('object' === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === a ? s(e, t, n, r) : null;
                case S:
                  return n.key === a ? c(e, t, n, r) : null;
                case R:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || F(n)) return null !== a ? null : f(e, t, n, r, null);
              gl(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (('string' === typeof r && '' !== r) || 'number' === typeof r)
              return u(t, (e = e.get(n) || null), '' + r, a);
            if ('object' === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case S:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case R:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || F(r))
                return f(t, (e = e.get(n) || null), r, a, null);
              gl(t, r);
            }
            return null;
          }
          function m(a, l, i, u) {
            for (
              var s = null, c = null, f = l, m = (l = 0), v = null;
              null !== f && m < i.length;
              m++
            ) {
              f.index > m ? ((v = f), (f = null)) : (v = f.sibling);
              var g = p(a, f, i[m], u);
              if (null === g) {
                null === f && (f = v);
                break;
              }
              e && f && null === g.alternate && t(a, f),
                (l = o(g, l, m)),
                null === c ? (s = g) : (c.sibling = g),
                (c = g),
                (f = v);
            }
            if (m === i.length) return n(a, f), al && Ja(a, m), s;
            if (null === f) {
              for (; m < i.length; m++)
                null !== (f = d(a, i[m], u)) &&
                  ((l = o(f, l, m)),
                  null === c ? (s = f) : (c.sibling = f),
                  (c = f));
              return al && Ja(a, m), s;
            }
            for (f = r(a, f); m < i.length; m++)
              null !== (v = h(f, a, m, i[m], u)) &&
                (e &&
                  null !== v.alternate &&
                  f.delete(null === v.key ? m : v.key),
                (l = o(v, l, m)),
                null === c ? (s = v) : (c.sibling = v),
                (c = v));
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e);
                }),
              al && Ja(a, m),
              s
            );
          }
          function v(a, i, u, s) {
            var c = F(u);
            if ('function' !== typeof c) throw Error(l(150));
            if (null == (u = c.call(u))) throw Error(l(151));
            for (
              var f = (c = null), m = i, v = (i = 0), g = null, y = u.next();
              null !== m && !y.done;
              v++, y = u.next()
            ) {
              m.index > v ? ((g = m), (m = null)) : (g = m.sibling);
              var b = p(a, m, y.value, s);
              if (null === b) {
                null === m && (m = g);
                break;
              }
              e && m && null === b.alternate && t(a, m),
                (i = o(b, i, v)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (m = g);
            }
            if (y.done) return n(a, m), al && Ja(a, v), c;
            if (null === m) {
              for (; !y.done; v++, y = u.next())
                null !== (y = d(a, y.value, s)) &&
                  ((i = o(y, i, v)),
                  null === f ? (c = y) : (f.sibling = y),
                  (f = y));
              return al && Ja(a, v), c;
            }
            for (m = r(a, m); !y.done; v++, y = u.next())
              null !== (y = h(m, a, v, y.value, s)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? v : y.key),
                (i = o(y, i, v)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              al && Ja(a, v),
              c
            );
          }
          return function e(r, l, o, u) {
            if (
              ('object' === typeof o &&
                null !== o &&
                o.type === _ &&
                null === o.key &&
                (o = o.props.children),
              'object' === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case w:
                  e: {
                    for (var s = o.key, c = l; null !== c; ) {
                      if (c.key === s) {
                        if ((s = o.type) === _) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((l = a(c, o.props.children)).return = r),
                              (r = l);
                            break e;
                          }
                        } else if (
                          c.elementType === s ||
                          ('object' === typeof s &&
                            null !== s &&
                            s.$$typeof === R &&
                            yl(s) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((l = a(c, o.props)).ref = vl(r, c, o)),
                            (l.return = r),
                            (r = l);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    o.type === _
                      ? (((l = Fs(o.props.children, r.mode, u, o.key)).return =
                          r),
                        (r = l))
                      : (((u = Os(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          u
                        )).ref = vl(r, l, o)),
                        (u.return = r),
                        (r = u));
                  }
                  return i(r);
                case S:
                  e: {
                    for (c = o.key; null !== l; ) {
                      if (l.key === c) {
                        if (
                          4 === l.tag &&
                          l.stateNode.containerInfo === o.containerInfo &&
                          l.stateNode.implementation === o.implementation
                        ) {
                          n(r, l.sibling),
                            ((l = a(l, o.children || [])).return = r),
                            (r = l);
                          break e;
                        }
                        n(r, l);
                        break;
                      }
                      t(r, l), (l = l.sibling);
                    }
                    ((l = As(o, r.mode, u)).return = r), (r = l);
                  }
                  return i(r);
                case R:
                  return e(r, l, (c = o._init)(o._payload), u);
              }
              if (te(o)) return m(r, l, o, u);
              if (F(o)) return v(r, l, o, u);
              gl(r, o);
            }
            return ('string' === typeof o && '' !== o) || 'number' === typeof o
              ? ((o = '' + o),
                null !== l && 6 === l.tag
                  ? (n(r, l.sibling), ((l = a(l, o)).return = r), (r = l))
                  : (n(r, l), ((l = Is(o, r.mode, u)).return = r), (r = l)),
                i(r))
              : n(r, l);
          };
        }
        var kl = bl(!0),
          wl = bl(!1),
          Sl = xa(null),
          _l = null,
          xl = null,
          El = null;
        function Cl() {
          El = xl = _l = null;
        }
        function Ll(e) {
          var t = Sl.current;
          Ea(Sl), (e._currentValue = t);
        }
        function Pl(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function zl(e, t) {
          (_l = e),
            (El = xl = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (bi = !0), (e.firstContext = null));
        }
        function Nl(e) {
          var t = e._currentValue;
          if (El !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === xl)
            ) {
              if (null === _l) throw Error(l(308));
              (xl = e), (_l.dependencies = { lanes: 0, firstContext: e });
            } else xl = xl.next = e;
          return t;
        }
        var Tl = null;
        function Rl(e) {
          null === Tl ? (Tl = [e]) : Tl.push(e);
        }
        function Ml(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Rl(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Ol(e, r)
          );
        }
        function Ol(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Fl = !1;
        function Dl(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Il(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Al(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function jl(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Pu))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Ol(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Rl(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Ol(e, n)
          );
        }
        function Ul(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Bl(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              l = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === l ? (a = l = o) : (l = l.next = o), (n = n.next);
              } while (null !== n);
              null === l ? (a = l = t) : (l = l.next = t);
            } else a = l = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: l,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function $l(e, t, n, r) {
          var a = e.updateQueue;
          Fl = !1;
          var l = a.firstBaseUpdate,
            o = a.lastBaseUpdate,
            i = a.shared.pending;
          if (null !== i) {
            a.shared.pending = null;
            var u = i,
              s = u.next;
            (u.next = null), null === o ? (l = s) : (o.next = s), (o = u);
            var c = e.alternate;
            null !== c &&
              (i = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === i ? (c.firstBaseUpdate = s) : (i.next = s),
              (c.lastBaseUpdate = u));
          }
          if (null !== l) {
            var f = a.baseState;
            for (o = 0, c = s = u = null, i = l; ; ) {
              var d = i.lane,
                p = i.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = i;
                  switch (((d = t), (p = n), m.tag)) {
                    case 1:
                      if ('function' === typeof (h = m.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            'function' === typeof (h = m.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = I({}, f, d);
                      break e;
                    case 2:
                      Fl = !0;
                  }
                }
                null !== i.callback &&
                  0 !== i.lane &&
                  ((e.flags |= 64),
                  null === (d = a.effects) ? (a.effects = [i]) : d.push(i));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === c ? ((s = c = p), (u = f)) : (c = c.next = p),
                  (o |= d);
              if (null === (i = i.next)) {
                if (null === (i = a.shared.pending)) break;
                (i = (d = i).next),
                  (d.next = null),
                  (a.lastBaseUpdate = d),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (u = f),
              (a.baseState = u),
              (a.firstBaseUpdate = s),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (o |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === l && (a.shared.lanes = 0);
            (Du |= o), (e.lanes = o), (e.memoizedState = f);
          }
        }
        function Hl(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), 'function' !== typeof a))
                  throw Error(l(191, a));
                a.call(r);
              }
            }
        }
        var Vl = {},
          Wl = xa(Vl),
          Ql = xa(Vl),
          Kl = xa(Vl);
        function ql(e) {
          if (e === Vl) throw Error(l(174));
          return e;
        }
        function Yl(e, t) {
          switch ((Ca(Kl, t), Ca(Ql, e), Ca(Wl, Vl), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ue(null, '');
              break;
            default:
              t = ue(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ea(Wl), Ca(Wl, t);
        }
        function Gl() {
          Ea(Wl), Ea(Ql), Ea(Kl);
        }
        function Xl(e) {
          ql(Kl.current);
          var t = ql(Wl.current),
            n = ue(t, e.type);
          t !== n && (Ca(Ql, e), Ca(Wl, n));
        }
        function Jl(e) {
          Ql.current === e && (Ea(Wl), Ea(Ql));
        }
        var Zl = xa(0);
        function eo(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  '$?' === n.data ||
                  '$!' === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var to = [];
        function no() {
          for (var e = 0; e < to.length; e++)
            to[e]._workInProgressVersionPrimary = null;
          to.length = 0;
        }
        var ro = k.ReactCurrentDispatcher,
          ao = k.ReactCurrentBatchConfig,
          lo = 0,
          oo = null,
          io = null,
          uo = null,
          so = !1,
          co = !1,
          fo = 0,
          po = 0;
        function ho() {
          throw Error(l(321));
        }
        function mo(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!ir(e[n], t[n])) return !1;
          return !0;
        }
        function vo(e, t, n, r, a, o) {
          if (
            ((lo = o),
            (oo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (ro.current = null === e || null === e.memoizedState ? Zo : ei),
            (e = n(r, a)),
            co)
          ) {
            o = 0;
            do {
              if (((co = !1), (fo = 0), 25 <= o)) throw Error(l(301));
              (o += 1),
                (uo = io = null),
                (t.updateQueue = null),
                (ro.current = ti),
                (e = n(r, a));
            } while (co);
          }
          if (
            ((ro.current = Jo),
            (t = null !== io && null !== io.next),
            (lo = 0),
            (uo = io = oo = null),
            (so = !1),
            t)
          )
            throw Error(l(300));
          return e;
        }
        function go() {
          var e = 0 !== fo;
          return (fo = 0), e;
        }
        function yo() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === uo ? (oo.memoizedState = uo = e) : (uo = uo.next = e), uo
          );
        }
        function bo() {
          if (null === io) {
            var e = oo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = io.next;
          var t = null === uo ? oo.memoizedState : uo.next;
          if (null !== t) (uo = t), (io = e);
          else {
            if (null === e) throw Error(l(310));
            (e = {
              memoizedState: (io = e).memoizedState,
              baseState: io.baseState,
              baseQueue: io.baseQueue,
              queue: io.queue,
              next: null,
            }),
              null === uo ? (oo.memoizedState = uo = e) : (uo = uo.next = e);
          }
          return uo;
        }
        function ko(e, t) {
          return 'function' === typeof t ? t(e) : t;
        }
        function wo(e) {
          var t = bo(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = io,
            a = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== a) {
              var i = a.next;
              (a.next = o.next), (o.next = i);
            }
            (r.baseQueue = a = o), (n.pending = null);
          }
          if (null !== a) {
            (o = a.next), (r = r.baseState);
            var u = (i = null),
              s = null,
              c = o;
            do {
              var f = c.lane;
              if ((lo & f) === f)
                null !== s &&
                  (s = s.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === s ? ((u = s = d), (i = r)) : (s = s.next = d),
                  (oo.lanes |= f),
                  (Du |= f);
              }
              c = c.next;
            } while (null !== c && c !== o);
            null === s ? (i = r) : (s.next = u),
              ir(r, t.memoizedState) || (bi = !0),
              (t.memoizedState = r),
              (t.baseState = i),
              (t.baseQueue = s),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (o = a.lane), (oo.lanes |= o), (Du |= o), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function So(e) {
          var t = bo(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            o = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var i = (a = a.next);
            do {
              (o = e(o, i.action)), (i = i.next);
            } while (i !== a);
            ir(o, t.memoizedState) || (bi = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function _o() {}
        function xo(e, t) {
          var n = oo,
            r = bo(),
            a = t(),
            o = !ir(r.memoizedState, a);
          if (
            (o && ((r.memoizedState = a), (bi = !0)),
            (r = r.queue),
            Do(Lo.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              o ||
              (null !== uo && 1 & uo.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              To(9, Co.bind(null, n, r, a, t), void 0, null),
              null === zu)
            )
              throw Error(l(349));
            0 !== (30 & lo) || Eo(n, t, a);
          }
          return a;
        }
        function Eo(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = oo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (oo.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
                ? (t.stores = [e])
                : n.push(e);
        }
        function Co(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Po(t) && zo(e);
        }
        function Lo(e, t, n) {
          return n(function () {
            Po(t) && zo(e);
          });
        }
        function Po(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !ir(e, n);
          } catch (r) {
            return !0;
          }
        }
        function zo(e) {
          var t = Ol(e, 1);
          null !== t && ns(t, e, 1, -1);
        }
        function No(e) {
          var t = yo();
          return (
            'function' === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: ko,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = qo.bind(null, oo, e)),
            [t.memoizedState, e]
          );
        }
        function To(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = oo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (oo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
                ? (t.lastEffect = e.next = e)
                : ((r = n.next),
                  (n.next = e),
                  (e.next = r),
                  (t.lastEffect = e)),
            e
          );
        }
        function Ro() {
          return bo().memoizedState;
        }
        function Mo(e, t, n, r) {
          var a = yo();
          (oo.flags |= e),
            (a.memoizedState = To(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Oo(e, t, n, r) {
          var a = bo();
          r = void 0 === r ? null : r;
          var l = void 0;
          if (null !== io) {
            var o = io.memoizedState;
            if (((l = o.destroy), null !== r && mo(r, o.deps)))
              return void (a.memoizedState = To(t, n, l, r));
          }
          (oo.flags |= e), (a.memoizedState = To(1 | t, n, l, r));
        }
        function Fo(e, t) {
          return Mo(8390656, 8, e, t);
        }
        function Do(e, t) {
          return Oo(2048, 8, e, t);
        }
        function Io(e, t) {
          return Oo(4, 2, e, t);
        }
        function Ao(e, t) {
          return Oo(4, 4, e, t);
        }
        function jo(e, t) {
          return 'function' === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
              ? ((e = e()),
                (t.current = e),
                function () {
                  t.current = null;
                })
              : void 0;
        }
        function Uo(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Oo(4, 4, jo.bind(null, t, e), n)
          );
        }
        function Bo() {}
        function $o(e, t) {
          var n = bo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && mo(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Ho(e, t) {
          var n = bo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && mo(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Vo(e, t, n) {
          return 0 === (21 & lo)
            ? (e.baseState && ((e.baseState = !1), (bi = !0)),
              (e.memoizedState = n))
            : (ir(n, t) ||
                ((n = mt()), (oo.lanes |= n), (Du |= n), (e.baseState = !0)),
              t);
        }
        function Wo(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = ao.transition;
          ao.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (ao.transition = r);
          }
        }
        function Qo() {
          return bo().memoizedState;
        }
        function Ko(e, t, n) {
          var r = ts(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            Yo(e))
          )
            Go(t, n);
          else if (null !== (n = Ml(e, t, n, r))) {
            ns(n, e, r, es()), Xo(n, t, r);
          }
        }
        function qo(e, t, n) {
          var r = ts(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (Yo(e)) Go(t, a);
          else {
            var l = e.alternate;
            if (
              0 === e.lanes &&
              (null === l || 0 === l.lanes) &&
              null !== (l = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  i = l(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = i), ir(i, o))) {
                  var u = t.interleaved;
                  return (
                    null === u
                      ? ((a.next = a), Rl(t))
                      : ((a.next = u.next), (u.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (s) {}
            null !== (n = Ml(e, t, a, r)) &&
              (ns(n, e, r, (a = es())), Xo(n, t, r));
          }
        }
        function Yo(e) {
          var t = e.alternate;
          return e === oo || (null !== t && t === oo);
        }
        function Go(e, t) {
          co = so = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function Xo(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var Jo = {
            readContext: Nl,
            useCallback: ho,
            useContext: ho,
            useEffect: ho,
            useImperativeHandle: ho,
            useInsertionEffect: ho,
            useLayoutEffect: ho,
            useMemo: ho,
            useReducer: ho,
            useRef: ho,
            useState: ho,
            useDebugValue: ho,
            useDeferredValue: ho,
            useTransition: ho,
            useMutableSource: ho,
            useSyncExternalStore: ho,
            useId: ho,
            unstable_isNewReconciler: !1,
          },
          Zo = {
            readContext: Nl,
            useCallback: function (e, t) {
              return (yo().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Nl,
            useEffect: Fo,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Mo(4194308, 4, jo.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Mo(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Mo(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = yo();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = yo();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = Ko.bind(null, oo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (yo().memoizedState = e);
            },
            useState: No,
            useDebugValue: Bo,
            useDeferredValue: function (e) {
              return (yo().memoizedState = e);
            },
            useTransition: function () {
              var e = No(!1),
                t = e[0];
              return (
                (e = Wo.bind(null, e[1])), (yo().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = oo,
                a = yo();
              if (al) {
                if (void 0 === n) throw Error(l(407));
                n = n();
              } else {
                if (((n = t()), null === zu)) throw Error(l(349));
                0 !== (30 & lo) || Eo(r, t, n);
              }
              a.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (a.queue = o),
                Fo(Lo.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                To(9, Co.bind(null, r, o, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = yo(),
                t = zu.identifierPrefix;
              if (al) {
                var n = Xa;
                (t =
                  ':' +
                  t +
                  'R' +
                  (n = (Ga & ~(1 << (32 - ot(Ga) - 1))).toString(32) + n)),
                  0 < (n = fo++) && (t += 'H' + n.toString(32)),
                  (t += ':');
              } else t = ':' + t + 'r' + (n = po++).toString(32) + ':';
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ei = {
            readContext: Nl,
            useCallback: $o,
            useContext: Nl,
            useEffect: Do,
            useImperativeHandle: Uo,
            useInsertionEffect: Io,
            useLayoutEffect: Ao,
            useMemo: Ho,
            useReducer: wo,
            useRef: Ro,
            useState: function () {
              return wo(ko);
            },
            useDebugValue: Bo,
            useDeferredValue: function (e) {
              return Vo(bo(), io.memoizedState, e);
            },
            useTransition: function () {
              return [wo(ko)[0], bo().memoizedState];
            },
            useMutableSource: _o,
            useSyncExternalStore: xo,
            useId: Qo,
            unstable_isNewReconciler: !1,
          },
          ti = {
            readContext: Nl,
            useCallback: $o,
            useContext: Nl,
            useEffect: Do,
            useImperativeHandle: Uo,
            useInsertionEffect: Io,
            useLayoutEffect: Ao,
            useMemo: Ho,
            useReducer: So,
            useRef: Ro,
            useState: function () {
              return So(ko);
            },
            useDebugValue: Bo,
            useDeferredValue: function (e) {
              var t = bo();
              return null === io
                ? (t.memoizedState = e)
                : Vo(t, io.memoizedState, e);
            },
            useTransition: function () {
              return [So(ko)[0], bo().memoizedState];
            },
            useMutableSource: _o,
            useSyncExternalStore: xo,
            useId: Qo,
            unstable_isNewReconciler: !1,
          };
        function ni(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = I({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        function ri(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : I({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var ai = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && $e(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = es(),
              a = ts(e),
              l = Al(r, a);
            (l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = jl(e, l, a)) && (ns(t, e, a, r), Ul(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = es(),
              a = ts(e),
              l = Al(r, a);
            (l.tag = 1),
              (l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = jl(e, l, a)) && (ns(t, e, a, r), Ul(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = es(),
              r = ts(e),
              a = Al(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = jl(e, a, r)) && (ns(t, e, r, n), Ul(t, e, r));
          },
        };
        function li(e, t, n, r, a, l, o) {
          return 'function' === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, l, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !ur(n, r) ||
                !ur(a, l);
        }
        function oi(e, t, n) {
          var r = !1,
            a = La,
            l = t.contextType;
          return (
            'object' === typeof l && null !== l
              ? (l = Nl(l))
              : ((a = Ra(t) ? Na : Pa.current),
                (l = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Ta(e, a)
                  : La)),
            (t = new t(n, l)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = ai),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            t
          );
        }
        function ii(e, t, n, r) {
          (e = t.state),
            'function' === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            'function' === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && ai.enqueueReplaceState(t, t.state, null);
        }
        function ui(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = {}), Dl(e);
          var l = t.contextType;
          'object' === typeof l && null !== l
            ? (a.context = Nl(l))
            : ((l = Ra(t) ? Na : Pa.current), (a.context = Ta(e, l))),
            (a.state = e.memoizedState),
            'function' === typeof (l = t.getDerivedStateFromProps) &&
              (ri(e, t, l, n), (a.state = e.memoizedState)),
            'function' === typeof t.getDerivedStateFromProps ||
              'function' === typeof a.getSnapshotBeforeUpdate ||
              ('function' !== typeof a.UNSAFE_componentWillMount &&
                'function' !== typeof a.componentWillMount) ||
              ((t = a.state),
              'function' === typeof a.componentWillMount &&
                a.componentWillMount(),
              'function' === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && ai.enqueueReplaceState(a, a.state, null),
              $l(e, n, a, r),
              (a.state = e.memoizedState)),
            'function' === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function si(e, t) {
          try {
            var n = '',
              r = t;
            do {
              (n += B(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (l) {
            a = '\nError generating stack: ' + l.message + '\n' + l.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function ci(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fi(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var di = 'function' === typeof WeakMap ? WeakMap : Map;
        function pi(e, t, n) {
          ((n = Al(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Vu || ((Vu = !0), (Wu = r)), fi(0, t);
            }),
            n
          );
        }
        function hi(e, t, n) {
          (n = Al(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ('function' === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                fi(0, t);
              });
          }
          var l = e.stateNode;
          return (
            null !== l &&
              'function' === typeof l.componentDidCatch &&
              (n.callback = function () {
                fi(0, t),
                  'function' !== typeof r &&
                    (null === Qu ? (Qu = new Set([this])) : Qu.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : '',
                });
              }),
            n
          );
        }
        function mi(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new di();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Es.bind(null, e, t, n)), t.then(e, e));
        }
        function vi(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function gi(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Al(-1, 1)).tag = 2), jl(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var yi = k.ReactCurrentOwner,
          bi = !1;
        function ki(e, t, n, r) {
          t.child = null === e ? wl(t, null, n, r) : kl(t, e.child, n, r);
        }
        function wi(e, t, n, r, a) {
          n = n.render;
          var l = t.ref;
          return (
            zl(t, a),
            (r = vo(e, t, n, r, l, a)),
            (n = go()),
            null === e || bi
              ? (al && n && el(t), (t.flags |= 1), ki(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Vi(e, t, a))
          );
        }
        function Si(e, t, n, r, a) {
          if (null === e) {
            var l = n.type;
            return 'function' !== typeof l ||
              Rs(l) ||
              void 0 !== l.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Os(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = l), _i(e, t, l, r, a));
          }
          if (((l = e.child), 0 === (e.lanes & a))) {
            var o = l.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : ur)(o, r) &&
              e.ref === t.ref
            )
              return Vi(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Ms(l, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function _i(e, t, n, r, a) {
          if (null !== e) {
            var l = e.memoizedProps;
            if (ur(l, r) && e.ref === t.ref) {
              if (((bi = !1), (t.pendingProps = r = l), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Vi(e, t, a);
              0 !== (131072 & e.flags) && (bi = !0);
            }
          }
          return Ci(e, t, n, r, a);
        }
        function xi(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            l = null !== e ? e.memoizedState : null;
          if ('hidden' === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ca(Mu, Ru),
                (Ru |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== l ? l.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ca(Mu, Ru),
                  (Ru |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== l ? l.baseLanes : n),
                Ca(Mu, Ru),
                (Ru |= r);
            }
          else
            null !== l
              ? ((r = l.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ca(Mu, Ru),
              (Ru |= r);
          return ki(e, t, a, n), t.child;
        }
        function Ei(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ci(e, t, n, r, a) {
          var l = Ra(n) ? Na : Pa.current;
          return (
            (l = Ta(t, l)),
            zl(t, a),
            (n = vo(e, t, n, r, l, a)),
            (r = go()),
            null === e || bi
              ? (al && r && el(t), (t.flags |= 1), ki(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Vi(e, t, a))
          );
        }
        function Li(e, t, n, r, a) {
          if (Ra(n)) {
            var l = !0;
            Da(t);
          } else l = !1;
          if ((zl(t, a), null === t.stateNode))
            Hi(e, t), oi(t, n, r), ui(t, n, r, a), (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              i = t.memoizedProps;
            o.props = i;
            var u = o.context,
              s = n.contextType;
            'object' === typeof s && null !== s
              ? (s = Nl(s))
              : (s = Ta(t, (s = Ra(n) ? Na : Pa.current)));
            var c = n.getDerivedStateFromProps,
              f =
                'function' === typeof c ||
                'function' === typeof o.getSnapshotBeforeUpdate;
            f ||
              ('function' !== typeof o.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof o.componentWillReceiveProps) ||
              ((i !== r || u !== s) && ii(t, o, r, s)),
              (Fl = !1);
            var d = t.memoizedState;
            (o.state = d),
              $l(t, r, o, a),
              (u = t.memoizedState),
              i !== r || d !== u || za.current || Fl
                ? ('function' === typeof c &&
                    (ri(t, n, c, r), (u = t.memoizedState)),
                  (i = Fl || li(t, n, i, r, d, u, s))
                    ? (f ||
                        ('function' !== typeof o.UNSAFE_componentWillMount &&
                          'function' !== typeof o.componentWillMount) ||
                        ('function' === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        'function' === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      'function' === typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ('function' === typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (o.props = r),
                  (o.state = u),
                  (o.context = s),
                  (r = i))
                : ('function' === typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (o = t.stateNode),
              Il(e, t),
              (i = t.memoizedProps),
              (s = t.type === t.elementType ? i : ni(t.type, i)),
              (o.props = s),
              (f = t.pendingProps),
              (d = o.context),
              'object' === typeof (u = n.contextType) && null !== u
                ? (u = Nl(u))
                : (u = Ta(t, (u = Ra(n) ? Na : Pa.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              'function' === typeof p ||
              'function' === typeof o.getSnapshotBeforeUpdate) ||
              ('function' !== typeof o.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof o.componentWillReceiveProps) ||
              ((i !== f || d !== u) && ii(t, o, r, u)),
              (Fl = !1),
              (d = t.memoizedState),
              (o.state = d),
              $l(t, r, o, a);
            var h = t.memoizedState;
            i !== f || d !== h || za.current || Fl
              ? ('function' === typeof p &&
                  (ri(t, n, p, r), (h = t.memoizedState)),
                (s = Fl || li(t, n, s, r, d, h, u) || !1)
                  ? (c ||
                      ('function' !== typeof o.UNSAFE_componentWillUpdate &&
                        'function' !== typeof o.componentWillUpdate) ||
                      ('function' === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, h, u),
                      'function' === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, h, u)),
                    'function' === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    'function' === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ('function' !== typeof o.componentDidUpdate ||
                      (i === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    'function' !== typeof o.getSnapshotBeforeUpdate ||
                      (i === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (o.props = r),
                (o.state = h),
                (o.context = u),
                (r = s))
              : ('function' !== typeof o.componentDidUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                'function' !== typeof o.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Pi(e, t, n, r, l, a);
        }
        function Pi(e, t, n, r, a, l) {
          Ei(e, t);
          var o = 0 !== (128 & t.flags);
          if (!r && !o) return a && Ia(t, n, !1), Vi(e, t, l);
          (r = t.stateNode), (yi.current = t);
          var i =
            o && 'function' !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = kl(t, e.child, null, l)),
                (t.child = kl(t, null, i, l)))
              : ki(e, t, i, l),
            (t.memoizedState = r.state),
            a && Ia(t, n, !0),
            t.child
          );
        }
        function zi(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Oa(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Oa(0, t.context, !1),
            Yl(e, t.containerInfo);
        }
        function Ni(e, t, n, r, a) {
          return pl(), hl(a), (t.flags |= 256), ki(e, t, n, r), t.child;
        }
        var Ti,
          Ri,
          Mi,
          Oi,
          Fi = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Di(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Ii(e, t, n) {
          var r,
            a = t.pendingProps,
            o = Zl.current,
            i = !1,
            u = 0 !== (128 & t.flags);
          if (
            ((r = u) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((i = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            Ca(Zl, 1 & o),
            null === e)
          )
            return (
              sl(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : '$!' === e.data
                      ? (t.lanes = 8)
                      : (t.lanes = 1073741824),
                  null)
                : ((u = a.children),
                  (e = a.fallback),
                  i
                    ? ((a = t.mode),
                      (i = t.child),
                      (u = { mode: 'hidden', children: u }),
                      0 === (1 & a) && null !== i
                        ? ((i.childLanes = 0), (i.pendingProps = u))
                        : (i = Ds(u, a, 0, null)),
                      (e = Fs(e, a, n, null)),
                      (i.return = t),
                      (e.return = t),
                      (i.sibling = e),
                      (t.child = i),
                      (t.child.memoizedState = Di(n)),
                      (t.memoizedState = Fi),
                      e)
                    : Ai(t, u))
            );
          if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return (function (e, t, n, r, a, o, i) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), ji(e, t, i, (r = ci(Error(l(422))))))
                  : null !== t.memoizedState
                    ? ((t.child = e.child), (t.flags |= 128), null)
                    : ((o = r.fallback),
                      (a = t.mode),
                      (r = Ds(
                        { mode: 'visible', children: r.children },
                        a,
                        0,
                        null
                      )),
                      ((o = Fs(o, a, i, null)).flags |= 2),
                      (r.return = t),
                      (o.return = t),
                      (r.sibling = o),
                      (t.child = r),
                      0 !== (1 & t.mode) && kl(t, e.child, null, i),
                      (t.child.memoizedState = Di(i)),
                      (t.memoizedState = Fi),
                      o);
              if (0 === (1 & t.mode)) return ji(e, t, i, null);
              if ('$!' === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var u = r.dgst;
                return (
                  (r = u), ji(e, t, i, (r = ci((o = Error(l(419))), r, void 0)))
                );
              }
              if (((u = 0 !== (i & e.childLanes)), bi || u)) {
                if (null !== (r = zu)) {
                  switch (i & -i) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | i)) ? 0 : a) &&
                    a !== o.retryLane &&
                    ((o.retryLane = a), Ol(e, a), ns(r, e, a, -1));
                }
                return ms(), ji(e, t, i, (r = ci(Error(l(421)))));
              }
              return '$?' === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Ls.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = o.treeContext),
                  (rl = sa(a.nextSibling)),
                  (nl = t),
                  (al = !0),
                  (ll = null),
                  null !== e &&
                    ((Ka[qa++] = Ga),
                    (Ka[qa++] = Xa),
                    (Ka[qa++] = Ya),
                    (Ga = e.id),
                    (Xa = e.overflow),
                    (Ya = t)),
                  (t = Ai(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, u, a, r, o, n);
          if (i) {
            (i = a.fallback), (u = t.mode), (r = (o = e.child).sibling);
            var s = { mode: 'hidden', children: a.children };
            return (
              0 === (1 & u) && t.child !== o
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = s),
                  (t.deletions = null))
                : ((a = Ms(o, s)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== r
                ? (i = Ms(r, i))
                : ((i = Fs(i, u, n, null)).flags |= 2),
              (i.return = t),
              (a.return = t),
              (a.sibling = i),
              (t.child = a),
              (a = i),
              (i = t.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? Di(n)
                  : {
                      baseLanes: u.baseLanes | n,
                      cachePool: null,
                      transitions: u.transitions,
                    }),
              (i.memoizedState = u),
              (i.childLanes = e.childLanes & ~n),
              (t.memoizedState = Fi),
              a
            );
          }
          return (
            (e = (i = e.child).sibling),
            (a = Ms(i, { mode: 'visible', children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Ai(e, t) {
          return (
            ((t = Ds(
              { mode: 'visible', children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function ji(e, t, n, r) {
          return (
            null !== r && hl(r),
            kl(t, e.child, null, n),
            ((e = Ai(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Ui(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Pl(e.return, t, n);
        }
        function Bi(e, t, n, r, a) {
          var l = e.memoizedState;
          null === l
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((l.isBackwards = t),
              (l.rendering = null),
              (l.renderingStartTime = 0),
              (l.last = r),
              (l.tail = n),
              (l.tailMode = a));
        }
        function $i(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            l = r.tail;
          if ((ki(e, t, r.children, n), 0 !== (2 & (r = Zl.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ui(e, n, t);
                else if (19 === e.tag) Ui(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ca(Zl, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case 'forwards':
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === eo(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Bi(t, !1, a, n, l);
                break;
              case 'backwards':
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === eo(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Bi(t, !0, n, null, l);
                break;
              case 'together':
                Bi(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Hi(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Vi(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Du |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(l(153));
          if (null !== t.child) {
            for (
              n = Ms((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Ms(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Wi(e, t) {
          if (!al)
            switch (e.tailMode) {
              case 'hidden':
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case 'collapsed':
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Qi(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Ki(e, t, n) {
          var r = t.pendingProps;
          switch ((tl(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Qi(t), null;
            case 1:
            case 17:
              return Ra(t.type) && Ma(), Qi(t), null;
            case 3:
              return (
                (r = t.stateNode),
                Gl(),
                Ea(za),
                Ea(Pa),
                no(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fl(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ll && (os(ll), (ll = null)))),
                Ri(e, t),
                Qi(t),
                null
              );
            case 5:
              Jl(t);
              var a = ql(Kl.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Mi(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166));
                  return Qi(t), null;
                }
                if (((e = ql(Wl.current)), fl(t))) {
                  (r = t.stateNode), (n = t.type);
                  var o = t.memoizedProps;
                  switch (
                    ((r[da] = t), (r[pa] = o), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case 'dialog':
                      jr('cancel', r), jr('close', r);
                      break;
                    case 'iframe':
                    case 'object':
                    case 'embed':
                      jr('load', r);
                      break;
                    case 'video':
                    case 'audio':
                      for (a = 0; a < Fr.length; a++) jr(Fr[a], r);
                      break;
                    case 'source':
                      jr('error', r);
                      break;
                    case 'img':
                    case 'image':
                    case 'link':
                      jr('error', r), jr('load', r);
                      break;
                    case 'details':
                      jr('toggle', r);
                      break;
                    case 'input':
                      G(r, o), jr('invalid', r);
                      break;
                    case 'select':
                      (r._wrapperState = { wasMultiple: !!o.multiple }),
                        jr('invalid', r);
                      break;
                    case 'textarea':
                      ae(r, o), jr('invalid', r);
                  }
                  for (var u in (ye(n, o), (a = null), o))
                    if (o.hasOwnProperty(u)) {
                      var s = o[u];
                      'children' === u
                        ? 'string' === typeof s
                          ? r.textContent !== s &&
                            (!0 !== o.suppressHydrationWarning &&
                              Jr(r.textContent, s, e),
                            (a = ['children', s]))
                          : 'number' === typeof s &&
                            r.textContent !== '' + s &&
                            (!0 !== o.suppressHydrationWarning &&
                              Jr(r.textContent, s, e),
                            (a = ['children', '' + s]))
                        : i.hasOwnProperty(u) &&
                          null != s &&
                          'onScroll' === u &&
                          jr('scroll', r);
                    }
                  switch (n) {
                    case 'input':
                      Q(r), Z(r, o, !0);
                      break;
                    case 'textarea':
                      Q(r), oe(r);
                      break;
                    case 'select':
                    case 'option':
                      break;
                    default:
                      'function' === typeof o.onClick && (r.onclick = Zr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (u = 9 === a.nodeType ? a : a.ownerDocument),
                    'http://www.w3.org/1999/xhtml' === e && (e = ie(n)),
                    'http://www.w3.org/1999/xhtml' === e
                      ? 'script' === n
                        ? (((e = u.createElement('div')).innerHTML =
                            '<script><\/script>'),
                          (e = e.removeChild(e.firstChild)))
                        : 'string' === typeof r.is
                          ? (e = u.createElement(n, { is: r.is }))
                          : ((e = u.createElement(n)),
                            'select' === n &&
                              ((u = e),
                              r.multiple
                                ? (u.multiple = !0)
                                : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[da] = t),
                    (e[pa] = r),
                    Ti(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((u = be(n, r)), n)) {
                      case 'dialog':
                        jr('cancel', e), jr('close', e), (a = r);
                        break;
                      case 'iframe':
                      case 'object':
                      case 'embed':
                        jr('load', e), (a = r);
                        break;
                      case 'video':
                      case 'audio':
                        for (a = 0; a < Fr.length; a++) jr(Fr[a], e);
                        a = r;
                        break;
                      case 'source':
                        jr('error', e), (a = r);
                        break;
                      case 'img':
                      case 'image':
                      case 'link':
                        jr('error', e), jr('load', e), (a = r);
                        break;
                      case 'details':
                        jr('toggle', e), (a = r);
                        break;
                      case 'input':
                        G(e, r), (a = Y(e, r)), jr('invalid', e);
                        break;
                      case 'option':
                      default:
                        a = r;
                        break;
                      case 'select':
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = I({}, r, { value: void 0 })),
                          jr('invalid', e);
                        break;
                      case 'textarea':
                        ae(e, r), (a = re(e, r)), jr('invalid', e);
                    }
                    for (o in (ye(n, a), (s = a)))
                      if (s.hasOwnProperty(o)) {
                        var c = s[o];
                        'style' === o
                          ? ve(e, c)
                          : 'dangerouslySetInnerHTML' === o
                            ? null != (c = c ? c.__html : void 0) && fe(e, c)
                            : 'children' === o
                              ? 'string' === typeof c
                                ? ('textarea' !== n || '' !== c) && de(e, c)
                                : 'number' === typeof c && de(e, '' + c)
                              : 'suppressContentEditableWarning' !== o &&
                                'suppressHydrationWarning' !== o &&
                                'autoFocus' !== o &&
                                (i.hasOwnProperty(o)
                                  ? null != c &&
                                    'onScroll' === o &&
                                    jr('scroll', e)
                                  : null != c && b(e, o, c, u));
                      }
                    switch (n) {
                      case 'input':
                        Q(e), Z(e, r, !1);
                        break;
                      case 'textarea':
                        Q(e), oe(e);
                        break;
                      case 'option':
                        null != r.value &&
                          e.setAttribute('value', '' + V(r.value));
                        break;
                      case 'select':
                        (e.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? ne(e, !!r.multiple, o, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        'function' === typeof a.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case 'button':
                      case 'input':
                      case 'select':
                      case 'textarea':
                        r = !!r.autoFocus;
                        break e;
                      case 'img':
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Qi(t), null;
            case 6:
              if (e && null != t.stateNode) Oi(e, t, e.memoizedProps, r);
              else {
                if ('string' !== typeof r && null === t.stateNode)
                  throw Error(l(166));
                if (((n = ql(Kl.current)), ql(Wl.current), fl(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[da] = t),
                    (o = r.nodeValue !== n) && null !== (e = nl))
                  )
                    switch (e.tag) {
                      case 3:
                        Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  o && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[da] = t),
                    (t.stateNode = r);
              }
              return Qi(t), null;
            case 13:
              if (
                (Ea(Zl),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  al &&
                  null !== rl &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  dl(), pl(), (t.flags |= 98560), (o = !1);
                else if (((o = fl(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(l(318));
                    if (
                      !(o =
                        null !== (o = t.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(l(317));
                    o[da] = t;
                  } else
                    pl(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Qi(t), (o = !1);
                } else null !== ll && (os(ll), (ll = null)), (o = !0);
                if (!o) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & Zl.current)
                        ? 0 === Ou && (Ou = 3)
                        : ms())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Qi(t),
                  null);
            case 4:
              return (
                Gl(),
                Ri(e, t),
                null === e && $r(t.stateNode.containerInfo),
                Qi(t),
                null
              );
            case 10:
              return Ll(t.type._context), Qi(t), null;
            case 19:
              if ((Ea(Zl), null === (o = t.memoizedState))) return Qi(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (u = o.rendering)))
                if (r) Wi(o, !1);
                else {
                  if (0 !== Ou || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = eo(e))) {
                        for (
                          t.flags |= 128,
                            Wi(o, !1),
                            null !== (r = u.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((o = n).flags &= 14680066),
                            null === (u = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = u.childLanes),
                                (o.lanes = u.lanes),
                                (o.child = u.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = u.memoizedProps),
                                (o.memoizedState = u.memoizedState),
                                (o.updateQueue = u.updateQueue),
                                (o.type = u.type),
                                (e = u.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ca(Zl, (1 & Zl.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Xe() > $u &&
                    ((t.flags |= 128),
                    (r = !0),
                    Wi(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = eo(u))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Wi(o, !0),
                      null === o.tail &&
                        'hidden' === o.tailMode &&
                        !u.alternate &&
                        !al)
                    )
                      return Qi(t), null;
                  } else
                    2 * Xe() - o.renderingStartTime > $u &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Wi(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = o.last) ? (n.sibling = u) : (t.child = u),
                    (o.last = u));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (n = Zl.current),
                  Ca(Zl, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Qi(t), null);
            case 22:
            case 23:
              return (
                fs(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Ru) &&
                    (Qi(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Qi(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(l(156, t.tag));
        }
        function qi(e, t) {
          switch ((tl(t), t.tag)) {
            case 1:
              return (
                Ra(t.type) && Ma(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                Gl(),
                Ea(za),
                Ea(Pa),
                no(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return Jl(t), null;
            case 13:
              if (
                (Ea(Zl),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(l(340));
                pl();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ea(Zl), null;
            case 4:
              return Gl(), null;
            case 10:
              return Ll(t.type._context), null;
            case 22:
            case 23:
              return fs(), null;
            default:
              return null;
          }
        }
        (Ti = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ri = function () {}),
          (Mi = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), ql(Wl.current);
              var l,
                o = null;
              switch (n) {
                case 'input':
                  (a = Y(e, a)), (r = Y(e, r)), (o = []);
                  break;
                case 'select':
                  (a = I({}, a, { value: void 0 })),
                    (r = I({}, r, { value: void 0 })),
                    (o = []);
                  break;
                case 'textarea':
                  (a = re(e, a)), (r = re(e, r)), (o = []);
                  break;
                default:
                  'function' !== typeof a.onClick &&
                    'function' === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ('style' === c) {
                    var u = a[c];
                    for (l in u)
                      u.hasOwnProperty(l) && (n || (n = {}), (n[l] = ''));
                  } else
                    'dangerouslySetInnerHTML' !== c &&
                      'children' !== c &&
                      'suppressContentEditableWarning' !== c &&
                      'suppressHydrationWarning' !== c &&
                      'autoFocus' !== c &&
                      (i.hasOwnProperty(c)
                        ? o || (o = [])
                        : (o = o || []).push(c, null));
              for (c in r) {
                var s = r[c];
                if (
                  ((u = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                )
                  if ('style' === c)
                    if (u) {
                      for (l in u)
                        !u.hasOwnProperty(l) ||
                          (s && s.hasOwnProperty(l)) ||
                          (n || (n = {}), (n[l] = ''));
                      for (l in s)
                        s.hasOwnProperty(l) &&
                          u[l] !== s[l] &&
                          (n || (n = {}), (n[l] = s[l]));
                    } else n || (o || (o = []), o.push(c, n)), (n = s);
                  else
                    'dangerouslySetInnerHTML' === c
                      ? ((s = s ? s.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != s && u !== s && (o = o || []).push(c, s))
                      : 'children' === c
                        ? ('string' !== typeof s && 'number' !== typeof s) ||
                          (o = o || []).push(c, '' + s)
                        : 'suppressContentEditableWarning' !== c &&
                          'suppressHydrationWarning' !== c &&
                          (i.hasOwnProperty(c)
                            ? (null != s && 'onScroll' === c && jr('scroll', e),
                              o || u === s || (o = []))
                            : (o = o || []).push(c, s));
              }
              n && (o = o || []).push('style', n);
              var c = o;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Oi = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Yi = !1,
          Gi = !1,
          Xi = 'function' === typeof WeakSet ? WeakSet : Set,
          Ji = null;
        function Zi(e, t) {
          var n = e.ref;
          if (null !== n)
            if ('function' === typeof n)
              try {
                n(null);
              } catch (r) {
                xs(e, t, r);
              }
            else n.current = null;
        }
        function eu(e, t, n) {
          try {
            n();
          } catch (r) {
            xs(e, t, r);
          }
        }
        var tu = !1;
        function nu(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var l = a.destroy;
                (a.destroy = void 0), void 0 !== l && eu(t, n, l);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function ru(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function au(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), 'function' === typeof t ? t(e) : (t.current = e);
          }
        }
        function lu(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), lu(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[da],
              delete t[pa],
              delete t[ma],
              delete t[va],
              delete t[ga]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ou(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function iu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ou(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function uu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (uu(e, t, n), e = e.sibling; null !== e; )
              uu(e, t, n), (e = e.sibling);
        }
        function su(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (su(e, t, n), e = e.sibling; null !== e; )
              su(e, t, n), (e = e.sibling);
        }
        var cu = null,
          fu = !1;
        function du(e, t, n) {
          for (n = n.child; null !== n; ) pu(e, t, n), (n = n.sibling);
        }
        function pu(e, t, n) {
          if (lt && 'function' === typeof lt.onCommitFiberUnmount)
            try {
              lt.onCommitFiberUnmount(at, n);
            } catch (i) {}
          switch (n.tag) {
            case 5:
              Gi || Zi(n, t);
            case 6:
              var r = cu,
                a = fu;
              (cu = null),
                du(e, t, n),
                (fu = a),
                null !== (cu = r) &&
                  (fu
                    ? ((e = cu),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : cu.removeChild(n.stateNode));
              break;
            case 18:
              null !== cu &&
                (fu
                  ? ((e = cu),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? ua(e.parentNode, n)
                      : 1 === e.nodeType && ua(e, n),
                    $t(e))
                  : ua(cu, n.stateNode));
              break;
            case 4:
              (r = cu),
                (a = fu),
                (cu = n.stateNode.containerInfo),
                (fu = !0),
                du(e, t, n),
                (cu = r),
                (fu = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Gi &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var l = a,
                    o = l.destroy;
                  (l = l.tag),
                    void 0 !== o &&
                      (0 !== (2 & l) || 0 !== (4 & l)) &&
                      eu(n, t, o),
                    (a = a.next);
                } while (a !== r);
              }
              du(e, t, n);
              break;
            case 1:
              if (
                !Gi &&
                (Zi(n, t),
                'function' === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (i) {
                  xs(n, t, i);
                }
              du(e, t, n);
              break;
            case 21:
              du(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Gi = (r = Gi) || null !== n.memoizedState),
                  du(e, t, n),
                  (Gi = r))
                : du(e, t, n);
              break;
            default:
              du(e, t, n);
          }
        }
        function hu(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Xi()),
              t.forEach(function (t) {
                var r = Ps.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function mu(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var o = e,
                  i = t,
                  u = i;
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      (cu = u.stateNode), (fu = !1);
                      break e;
                    case 3:
                    case 4:
                      (cu = u.stateNode.containerInfo), (fu = !0);
                      break e;
                  }
                  u = u.return;
                }
                if (null === cu) throw Error(l(160));
                pu(o, i, a), (cu = null), (fu = !1);
                var s = a.alternate;
                null !== s && (s.return = null), (a.return = null);
              } catch (c) {
                xs(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) vu(t, e), (t = t.sibling);
        }
        function vu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((mu(t, e), gu(e), 4 & r)) {
                try {
                  nu(3, e, e.return), ru(3, e);
                } catch (v) {
                  xs(e, e.return, v);
                }
                try {
                  nu(5, e, e.return);
                } catch (v) {
                  xs(e, e.return, v);
                }
              }
              break;
            case 1:
              mu(t, e), gu(e), 512 & r && null !== n && Zi(n, n.return);
              break;
            case 5:
              if (
                (mu(t, e),
                gu(e),
                512 & r && null !== n && Zi(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  de(a, '');
                } catch (v) {
                  xs(e, e.return, v);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var o = e.memoizedProps,
                  i = null !== n ? n.memoizedProps : o,
                  u = e.type,
                  s = e.updateQueue;
                if (((e.updateQueue = null), null !== s))
                  try {
                    'input' === u &&
                      'radio' === o.type &&
                      null != o.name &&
                      X(a, o),
                      be(u, i);
                    var c = be(u, o);
                    for (i = 0; i < s.length; i += 2) {
                      var f = s[i],
                        d = s[i + 1];
                      'style' === f
                        ? ve(a, d)
                        : 'dangerouslySetInnerHTML' === f
                          ? fe(a, d)
                          : 'children' === f
                            ? de(a, d)
                            : b(a, f, d, c);
                    }
                    switch (u) {
                      case 'input':
                        J(a, o);
                        break;
                      case 'textarea':
                        le(a, o);
                        break;
                      case 'select':
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!o.multiple;
                        var h = o.value;
                        null != h
                          ? ne(a, !!o.multiple, h, !1)
                          : p !== !!o.multiple &&
                            (null != o.defaultValue
                              ? ne(a, !!o.multiple, o.defaultValue, !0)
                              : ne(a, !!o.multiple, o.multiple ? [] : '', !1));
                    }
                    a[pa] = o;
                  } catch (v) {
                    xs(e, e.return, v);
                  }
              }
              break;
            case 6:
              if ((mu(t, e), gu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(l(162));
                (a = e.stateNode), (o = e.memoizedProps);
                try {
                  a.nodeValue = o;
                } catch (v) {
                  xs(e, e.return, v);
                }
              }
              break;
            case 3:
              if (
                (mu(t, e),
                gu(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  $t(t.containerInfo);
                } catch (v) {
                  xs(e, e.return, v);
                }
              break;
            case 4:
            default:
              mu(t, e), gu(e);
              break;
            case 13:
              mu(t, e),
                gu(e),
                8192 & (a = e.child).flags &&
                  ((o = null !== a.memoizedState),
                  (a.stateNode.isHidden = o),
                  !o ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Bu = Xe())),
                4 & r && hu(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Gi = (c = Gi) || f), mu(t, e), (Gi = c))
                  : mu(t, e),
                gu(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (Ji = e, f = e.child; null !== f; ) {
                    for (d = Ji = f; null !== Ji; ) {
                      switch (((h = (p = Ji).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          nu(4, p, p.return);
                          break;
                        case 1:
                          Zi(p, p.return);
                          var m = p.stateNode;
                          if ('function' === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (v) {
                              xs(r, n, v);
                            }
                          }
                          break;
                        case 5:
                          Zi(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            wu(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Ji = h)) : wu(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (a = d.stateNode),
                          c
                            ? 'function' === typeof (o = a.style).setProperty
                              ? o.setProperty('display', 'none', 'important')
                              : (o.display = 'none')
                            : ((u = d.stateNode),
                              (i =
                                void 0 !== (s = d.memoizedProps.style) &&
                                null !== s &&
                                s.hasOwnProperty('display')
                                  ? s.display
                                  : null),
                              (u.style.display = me('display', i)));
                      } catch (v) {
                        xs(e, e.return, v);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? '' : d.memoizedProps;
                      } catch (v) {
                        xs(e, e.return, v);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              mu(t, e), gu(e), 4 & r && hu(e);
            case 21:
          }
        }
        function gu(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ou(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(l(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (de(a, ''), (r.flags &= -33)),
                    su(e, iu(e), a);
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  uu(e, iu(e), o);
                  break;
                default:
                  throw Error(l(161));
              }
            } catch (i) {
              xs(e, e.return, i);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function yu(e, t, n) {
          (Ji = e), bu(e, t, n);
        }
        function bu(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Ji; ) {
            var a = Ji,
              l = a.child;
            if (22 === a.tag && r) {
              var o = null !== a.memoizedState || Yi;
              if (!o) {
                var i = a.alternate,
                  u = (null !== i && null !== i.memoizedState) || Gi;
                i = Yi;
                var s = Gi;
                if (((Yi = o), (Gi = u) && !s))
                  for (Ji = a; null !== Ji; )
                    (u = (o = Ji).child),
                      22 === o.tag && null !== o.memoizedState
                        ? Su(a)
                        : null !== u
                          ? ((u.return = o), (Ji = u))
                          : Su(a);
                for (; null !== l; ) (Ji = l), bu(l, t, n), (l = l.sibling);
                (Ji = a), (Yi = i), (Gi = s);
              }
              ku(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== l
                ? ((l.return = a), (Ji = l))
                : ku(e);
          }
        }
        function ku(e) {
          for (; null !== Ji; ) {
            var t = Ji;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gi || ru(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Gi)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : ni(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var o = t.updateQueue;
                      null !== o && Hl(t, o, r);
                      break;
                    case 3:
                      var i = t.updateQueue;
                      if (null !== i) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Hl(t, i, n);
                      }
                      break;
                    case 5:
                      var u = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = u;
                        var s = t.memoizedProps;
                        switch (t.type) {
                          case 'button':
                          case 'input':
                          case 'select':
                          case 'textarea':
                            s.autoFocus && n.focus();
                            break;
                          case 'img':
                            s.src && (n.src = s.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && $t(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(l(163));
                  }
                Gi || (512 & t.flags && au(t));
              } catch (p) {
                xs(t, t.return, p);
              }
            }
            if (t === e) {
              Ji = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Ji = n);
              break;
            }
            Ji = t.return;
          }
        }
        function wu(e) {
          for (; null !== Ji; ) {
            var t = Ji;
            if (t === e) {
              Ji = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Ji = n);
              break;
            }
            Ji = t.return;
          }
        }
        function Su(e) {
          for (; null !== Ji; ) {
            var t = Ji;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    ru(4, t);
                  } catch (u) {
                    xs(t, n, u);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ('function' === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (u) {
                      xs(t, a, u);
                    }
                  }
                  var l = t.return;
                  try {
                    au(t);
                  } catch (u) {
                    xs(t, l, u);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    au(t);
                  } catch (u) {
                    xs(t, o, u);
                  }
              }
            } catch (u) {
              xs(t, t.return, u);
            }
            if (t === e) {
              Ji = null;
              break;
            }
            var i = t.sibling;
            if (null !== i) {
              (i.return = t.return), (Ji = i);
              break;
            }
            Ji = t.return;
          }
        }
        var _u,
          xu = Math.ceil,
          Eu = k.ReactCurrentDispatcher,
          Cu = k.ReactCurrentOwner,
          Lu = k.ReactCurrentBatchConfig,
          Pu = 0,
          zu = null,
          Nu = null,
          Tu = 0,
          Ru = 0,
          Mu = xa(0),
          Ou = 0,
          Fu = null,
          Du = 0,
          Iu = 0,
          Au = 0,
          ju = null,
          Uu = null,
          Bu = 0,
          $u = 1 / 0,
          Hu = null,
          Vu = !1,
          Wu = null,
          Qu = null,
          Ku = !1,
          qu = null,
          Yu = 0,
          Gu = 0,
          Xu = null,
          Ju = -1,
          Zu = 0;
        function es() {
          return 0 !== (6 & Pu) ? Xe() : -1 !== Ju ? Ju : (Ju = Xe());
        }
        function ts(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Pu) && 0 !== Tu
              ? Tu & -Tu
              : null !== ml.transition
                ? (0 === Zu && (Zu = mt()), Zu)
                : 0 !== (e = bt)
                  ? e
                  : (e = void 0 === (e = window.event) ? 16 : Gt(e.type));
        }
        function ns(e, t, n, r) {
          if (50 < Gu) throw ((Gu = 0), (Xu = null), Error(l(185)));
          gt(e, n, r),
            (0 !== (2 & Pu) && e === zu) ||
              (e === zu && (0 === (2 & Pu) && (Iu |= n), 4 === Ou && is(e, Tu)),
              rs(e, r),
              1 === n &&
                0 === Pu &&
                0 === (1 & t.mode) &&
                (($u = Xe() + 500), ja && $a()));
        }
        function rs(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                l = e.pendingLanes;
              0 < l;

            ) {
              var o = 31 - ot(l),
                i = 1 << o,
                u = a[o];
              -1 === u
                ? (0 !== (i & n) && 0 === (i & r)) || (a[o] = pt(i, t))
                : u <= t && (e.expiredLanes |= i),
                (l &= ~i);
            }
          })(e, t);
          var r = dt(e, e === zu ? Tu : 0);
          if (0 === r)
            null !== n && qe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && qe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (ja = !0), Ba(e);
                  })(us.bind(null, e))
                : Ba(us.bind(null, e)),
                oa(function () {
                  0 === (6 & Pu) && $a();
                }),
                (n = null);
            else {
              switch (kt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = zs(n, as.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function as(e, t) {
          if (((Ju = -1), (Zu = 0), 0 !== (6 & Pu))) throw Error(l(327));
          var n = e.callbackNode;
          if (Ss() && e.callbackNode !== n) return null;
          var r = dt(e, e === zu ? Tu : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = vs(e, r);
          else {
            t = r;
            var a = Pu;
            Pu |= 2;
            var o = hs();
            for (
              (zu === e && Tu === t) ||
              ((Hu = null), ($u = Xe() + 500), ds(e, t));
              ;

            )
              try {
                ys();
                break;
              } catch (u) {
                ps(e, u);
              }
            Cl(),
              (Eu.current = o),
              (Pu = a),
              null !== Nu ? (t = 0) : ((zu = null), (Tu = 0), (t = Ou));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = ls(e, a))),
              1 === t)
            )
              throw ((n = Fu), ds(e, 0), is(e, r), rs(e, Xe()), n);
            if (6 === t) is(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              l = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!ir(l(), a)) return !1;
                            } catch (i) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = vs(e, r)) &&
                    0 !== (o = ht(e)) &&
                    ((r = o), (t = ls(e, o))),
                  1 === t))
              )
                throw ((n = Fu), ds(e, 0), is(e, r), rs(e, Xe()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(l(345));
                case 2:
                case 5:
                  ws(e, Uu, Hu);
                  break;
                case 3:
                  if (
                    (is(e, r),
                    (130023424 & r) === r && 10 < (t = Bu + 500 - Xe()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      es(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(ws.bind(null, e, Uu, Hu), t);
                    break;
                  }
                  ws(e, Uu, Hu);
                  break;
                case 4:
                  if ((is(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var i = 31 - ot(r);
                    (o = 1 << i), (i = t[i]) > a && (a = i), (r &= ~o);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Xe() - r)
                          ? 120
                          : 480 > r
                            ? 480
                            : 1080 > r
                              ? 1080
                              : 1920 > r
                                ? 1920
                                : 3e3 > r
                                  ? 3e3
                                  : 4320 > r
                                    ? 4320
                                    : 1960 * xu(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(ws.bind(null, e, Uu, Hu), r);
                    break;
                  }
                  ws(e, Uu, Hu);
                  break;
                default:
                  throw Error(l(329));
              }
            }
          }
          return rs(e, Xe()), e.callbackNode === n ? as.bind(null, e) : null;
        }
        function ls(e, t) {
          var n = ju;
          return (
            e.current.memoizedState.isDehydrated && (ds(e, t).flags |= 256),
            2 !== (e = vs(e, t)) && ((t = Uu), (Uu = n), null !== t && os(t)),
            e
          );
        }
        function os(e) {
          null === Uu ? (Uu = e) : Uu.push.apply(Uu, e);
        }
        function is(e, t) {
          for (
            t &= ~Au,
              t &= ~Iu,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - ot(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function us(e) {
          if (0 !== (6 & Pu)) throw Error(l(327));
          Ss();
          var t = dt(e, 0);
          if (0 === (1 & t)) return rs(e, Xe()), null;
          var n = vs(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = ls(e, r)));
          }
          if (1 === n) throw ((n = Fu), ds(e, 0), is(e, t), rs(e, Xe()), n);
          if (6 === n) throw Error(l(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            ws(e, Uu, Hu),
            rs(e, Xe()),
            null
          );
        }
        function ss(e, t) {
          var n = Pu;
          Pu |= 1;
          try {
            return e(t);
          } finally {
            0 === (Pu = n) && (($u = Xe() + 500), ja && $a());
          }
        }
        function cs(e) {
          null !== qu && 0 === qu.tag && 0 === (6 & Pu) && Ss();
          var t = Pu;
          Pu |= 1;
          var n = Lu.transition,
            r = bt;
          try {
            if (((Lu.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Lu.transition = n), 0 === (6 & (Pu = t)) && $a();
          }
        }
        function fs() {
          (Ru = Mu.current), Ea(Mu);
        }
        function ds(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Nu))
            for (n = Nu.return; null !== n; ) {
              var r = n;
              switch ((tl(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Ma();
                  break;
                case 3:
                  Gl(), Ea(za), Ea(Pa), no();
                  break;
                case 5:
                  Jl(r);
                  break;
                case 4:
                  Gl();
                  break;
                case 13:
                case 19:
                  Ea(Zl);
                  break;
                case 10:
                  Ll(r.type._context);
                  break;
                case 22:
                case 23:
                  fs();
              }
              n = n.return;
            }
          if (
            ((zu = e),
            (Nu = e = Ms(e.current, null)),
            (Tu = Ru = t),
            (Ou = 0),
            (Fu = null),
            (Au = Iu = Du = 0),
            (Uu = ju = null),
            null !== Tl)
          ) {
            for (t = 0; t < Tl.length; t++)
              if (null !== (r = (n = Tl[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  l = n.pending;
                if (null !== l) {
                  var o = l.next;
                  (l.next = a), (r.next = o);
                }
                n.pending = r;
              }
            Tl = null;
          }
          return e;
        }
        function ps(e, t) {
          for (;;) {
            var n = Nu;
            try {
              if ((Cl(), (ro.current = Jo), so)) {
                for (var r = oo.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                so = !1;
              }
              if (
                ((lo = 0),
                (uo = io = oo = null),
                (co = !1),
                (fo = 0),
                (Cu.current = null),
                null === n || null === n.return)
              ) {
                (Ou = 1), (Fu = t), (Nu = null);
                break;
              }
              e: {
                var o = e,
                  i = n.return,
                  u = n,
                  s = t;
                if (
                  ((t = Tu),
                  (u.flags |= 32768),
                  null !== s &&
                    'object' === typeof s &&
                    'function' === typeof s.then)
                ) {
                  var c = s,
                    f = u,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = vi(i);
                  if (null !== h) {
                    (h.flags &= -257),
                      gi(h, i, u, 0, t),
                      1 & h.mode && mi(o, c, t),
                      (s = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var v = new Set();
                      v.add(s), (t.updateQueue = v);
                    } else m.add(s);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    mi(o, c, t), ms();
                    break e;
                  }
                  s = Error(l(426));
                } else if (al && 1 & u.mode) {
                  var g = vi(i);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256),
                      gi(g, i, u, 0, t),
                      hl(si(s, u));
                    break e;
                  }
                }
                (o = s = si(s, u)),
                  4 !== Ou && (Ou = 2),
                  null === ju ? (ju = [o]) : ju.push(o),
                  (o = i);
                do {
                  switch (o.tag) {
                    case 3:
                      (o.flags |= 65536),
                        (t &= -t),
                        (o.lanes |= t),
                        Bl(o, pi(0, s, t));
                      break e;
                    case 1:
                      u = s;
                      var y = o.type,
                        b = o.stateNode;
                      if (
                        0 === (128 & o.flags) &&
                        ('function' === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            'function' === typeof b.componentDidCatch &&
                            (null === Qu || !Qu.has(b))))
                      ) {
                        (o.flags |= 65536),
                          (t &= -t),
                          (o.lanes |= t),
                          Bl(o, hi(o, u, t));
                        break e;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              ks(n);
            } catch (k) {
              (t = k), Nu === n && null !== n && (Nu = n = n.return);
              continue;
            }
            break;
          }
        }
        function hs() {
          var e = Eu.current;
          return (Eu.current = Jo), null === e ? Jo : e;
        }
        function ms() {
          (0 !== Ou && 3 !== Ou && 2 !== Ou) || (Ou = 4),
            null === zu ||
              (0 === (268435455 & Du) && 0 === (268435455 & Iu)) ||
              is(zu, Tu);
        }
        function vs(e, t) {
          var n = Pu;
          Pu |= 2;
          var r = hs();
          for ((zu === e && Tu === t) || ((Hu = null), ds(e, t)); ; )
            try {
              gs();
              break;
            } catch (a) {
              ps(e, a);
            }
          if ((Cl(), (Pu = n), (Eu.current = r), null !== Nu))
            throw Error(l(261));
          return (zu = null), (Tu = 0), Ou;
        }
        function gs() {
          for (; null !== Nu; ) bs(Nu);
        }
        function ys() {
          for (; null !== Nu && !Ye(); ) bs(Nu);
        }
        function bs(e) {
          var t = _u(e.alternate, e, Ru);
          (e.memoizedProps = e.pendingProps),
            null === t ? ks(e) : (Nu = t),
            (Cu.current = null);
        }
        function ks(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Ki(n, t, Ru))) return void (Nu = n);
            } else {
              if (null !== (n = qi(n, t)))
                return (n.flags &= 32767), void (Nu = n);
              if (null === e) return (Ou = 6), void (Nu = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Nu = t);
            Nu = t = e;
          } while (null !== t);
          0 === Ou && (Ou = 5);
        }
        function ws(e, t, n) {
          var r = bt,
            a = Lu.transition;
          try {
            (Lu.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  Ss();
                } while (null !== qu);
                if (0 !== (6 & Pu)) throw Error(l(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(l(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var o = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - ot(n),
                        l = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~l);
                    }
                  })(e, o),
                  e === zu && ((Nu = zu = null), (Tu = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Ku ||
                    ((Ku = !0),
                    zs(tt, function () {
                      return Ss(), null;
                    })),
                  (o = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || o)
                ) {
                  (o = Lu.transition), (Lu.transition = null);
                  var i = bt;
                  bt = 1;
                  var u = Pu;
                  (Pu |= 4),
                    (Cu.current = null),
                    (function (e, t) {
                      if (((ea = Vt), pr((e = dr())))) {
                        if ('selectionStart' in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, o.nodeType;
                              } catch (w) {
                                n = null;
                                break e;
                              }
                              var i = 0,
                                u = -1,
                                s = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== a && 3 !== d.nodeType) ||
                                    (u = i + a),
                                    d !== o ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (s = i + r),
                                    3 === d.nodeType &&
                                      (i += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === a && (u = i),
                                    p === o && ++f === r && (s = i),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === u || -1 === s
                                  ? null
                                  : { start: u, end: s };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Vt = !1,
                          Ji = t;
                        null !== Ji;

                      )
                        if (
                          ((e = (t = Ji).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Ji = e);
                        else
                          for (; null !== Ji; ) {
                            t = Ji;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var v = m.memoizedProps,
                                        g = m.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? v
                                            : ni(t.type, v),
                                          g
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var k = t.stateNode.containerInfo;
                                    1 === k.nodeType
                                      ? (k.textContent = '')
                                      : 9 === k.nodeType &&
                                        k.documentElement &&
                                        k.removeChild(k.documentElement);
                                    break;
                                  default:
                                    throw Error(l(163));
                                }
                            } catch (w) {
                              xs(t, t.return, w);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Ji = e);
                              break;
                            }
                            Ji = t.return;
                          }
                      (m = tu), (tu = !1);
                    })(e, n),
                    vu(n, e),
                    hr(ta),
                    (Vt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    yu(n, e, a),
                    Ge(),
                    (Pu = u),
                    (bt = i),
                    (Lu.transition = o);
                } else e.current = n;
                if (
                  (Ku && ((Ku = !1), (qu = e), (Yu = a)),
                  (o = e.pendingLanes),
                  0 === o && (Qu = null),
                  (function (e) {
                    if (lt && 'function' === typeof lt.onCommitFiberRoot)
                      try {
                        lt.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  rs(e, Xe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Vu) throw ((Vu = !1), (e = Wu), (Wu = null), e);
                0 !== (1 & Yu) && 0 !== e.tag && Ss(),
                  (o = e.pendingLanes),
                  0 !== (1 & o)
                    ? e === Xu
                      ? Gu++
                      : ((Gu = 0), (Xu = e))
                    : (Gu = 0),
                  $a();
              })(e, t, n, r);
          } finally {
            (Lu.transition = a), (bt = r);
          }
          return null;
        }
        function Ss() {
          if (null !== qu) {
            var e = kt(Yu),
              t = Lu.transition,
              n = bt;
            try {
              if (((Lu.transition = null), (bt = 16 > e ? 16 : e), null === qu))
                var r = !1;
              else {
                if (((e = qu), (qu = null), (Yu = 0), 0 !== (6 & Pu)))
                  throw Error(l(331));
                var a = Pu;
                for (Pu |= 4, Ji = e.current; null !== Ji; ) {
                  var o = Ji,
                    i = o.child;
                  if (0 !== (16 & Ji.flags)) {
                    var u = o.deletions;
                    if (null !== u) {
                      for (var s = 0; s < u.length; s++) {
                        var c = u[s];
                        for (Ji = c; null !== Ji; ) {
                          var f = Ji;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              nu(8, f, o);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Ji = d);
                          else
                            for (; null !== Ji; ) {
                              var p = (f = Ji).sibling,
                                h = f.return;
                              if ((lu(f), f === c)) {
                                Ji = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Ji = p);
                                break;
                              }
                              Ji = h;
                            }
                        }
                      }
                      var m = o.alternate;
                      if (null !== m) {
                        var v = m.child;
                        if (null !== v) {
                          m.child = null;
                          do {
                            var g = v.sibling;
                            (v.sibling = null), (v = g);
                          } while (null !== v);
                        }
                      }
                      Ji = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== i)
                    (i.return = o), (Ji = i);
                  else
                    e: for (; null !== Ji; ) {
                      if (0 !== (2048 & (o = Ji).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            nu(9, o, o.return);
                        }
                      var y = o.sibling;
                      if (null !== y) {
                        (y.return = o.return), (Ji = y);
                        break e;
                      }
                      Ji = o.return;
                    }
                }
                var b = e.current;
                for (Ji = b; null !== Ji; ) {
                  var k = (i = Ji).child;
                  if (0 !== (2064 & i.subtreeFlags) && null !== k)
                    (k.return = i), (Ji = k);
                  else
                    e: for (i = b; null !== Ji; ) {
                      if (0 !== (2048 & (u = Ji).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ru(9, u);
                          }
                        } catch (S) {
                          xs(u, u.return, S);
                        }
                      if (u === i) {
                        Ji = null;
                        break e;
                      }
                      var w = u.sibling;
                      if (null !== w) {
                        (w.return = u.return), (Ji = w);
                        break e;
                      }
                      Ji = u.return;
                    }
                }
                if (
                  ((Pu = a),
                  $a(),
                  lt && 'function' === typeof lt.onPostCommitFiberRoot)
                )
                  try {
                    lt.onPostCommitFiberRoot(at, e);
                  } catch (S) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Lu.transition = t);
            }
          }
          return !1;
        }
        function _s(e, t, n) {
          (e = jl(e, (t = pi(0, (t = si(n, t)), 1)), 1)),
            (t = es()),
            null !== e && (gt(e, 1, t), rs(e, t));
        }
        function xs(e, t, n) {
          if (3 === e.tag) _s(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                _s(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  'function' === typeof t.type.getDerivedStateFromError ||
                  ('function' === typeof r.componentDidCatch &&
                    (null === Qu || !Qu.has(r)))
                ) {
                  (t = jl(t, (e = hi(t, (e = si(n, e)), 1)), 1)),
                    (e = es()),
                    null !== t && (gt(t, 1, e), rs(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Es(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = es()),
            (e.pingedLanes |= e.suspendedLanes & n),
            zu === e &&
              (Tu & n) === n &&
              (4 === Ou ||
              (3 === Ou && (130023424 & Tu) === Tu && 500 > Xe() - Bu)
                ? ds(e, 0)
                : (Au |= n)),
            rs(e, t);
        }
        function Cs(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = es();
          null !== (e = Ol(e, t)) && (gt(e, t, n), rs(e, n));
        }
        function Ls(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Cs(e, n);
        }
        function Ps(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(l(314));
          }
          null !== r && r.delete(t), Cs(e, n);
        }
        function zs(e, t) {
          return Ke(e, t);
        }
        function Ns(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Ts(e, t, n, r) {
          return new Ns(e, t, n, r);
        }
        function Rs(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ms(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Ts(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Os(e, t, n, r, a, o) {
          var i = 2;
          if (((r = e), 'function' === typeof e)) Rs(e) && (i = 1);
          else if ('string' === typeof e) i = 5;
          else
            e: switch (e) {
              case _:
                return Fs(n.children, a, o, t);
              case x:
                (i = 8), (a |= 8);
                break;
              case E:
                return (
                  ((e = Ts(12, n, t, 2 | a)).elementType = E), (e.lanes = o), e
                );
              case z:
                return (
                  ((e = Ts(13, n, t, a)).elementType = z), (e.lanes = o), e
                );
              case N:
                return (
                  ((e = Ts(19, n, t, a)).elementType = N), (e.lanes = o), e
                );
              case M:
                return Ds(n, a, o, t);
              default:
                if ('object' === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case C:
                      i = 10;
                      break e;
                    case L:
                      i = 9;
                      break e;
                    case P:
                      i = 11;
                      break e;
                    case T:
                      i = 14;
                      break e;
                    case R:
                      (i = 16), (r = null);
                      break e;
                  }
                throw Error(l(130, null == e ? e : typeof e, ''));
            }
          return (
            ((t = Ts(i, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function Fs(e, t, n, r) {
          return ((e = Ts(7, e, r, t)).lanes = n), e;
        }
        function Ds(e, t, n, r) {
          return (
            ((e = Ts(22, e, r, t)).elementType = M),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Is(e, t, n) {
          return ((e = Ts(6, e, null, t)).lanes = n), e;
        }
        function As(e, t, n) {
          return (
            ((t = Ts(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function js(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = vt(0)),
            (this.expirationTimes = vt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = vt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Us(e, t, n, r, a, l, o, i, u) {
          return (
            (e = new js(e, t, n, i, u)),
            1 === t ? ((t = 1), !0 === l && (t |= 8)) : (t = 0),
            (l = Ts(3, null, null, t)),
            (e.current = l),
            (l.stateNode = e),
            (l.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Dl(l),
            e
          );
        }
        function Bs(e) {
          if (!e) return La;
          e: {
            if ($e((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(l(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ra(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(l(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Ra(n)) return Fa(e, n, t);
          }
          return t;
        }
        function $s(e, t, n, r, a, l, o, i, u) {
          return (
            ((e = Us(n, r, !0, e, 0, l, 0, i, u)).context = Bs(null)),
            (n = e.current),
            ((l = Al((r = es()), (a = ts(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            jl(n, l, a),
            (e.current.lanes = a),
            gt(e, a, r),
            rs(e, r),
            e
          );
        }
        function Hs(e, t, n, r) {
          var a = t.current,
            l = es(),
            o = ts(a);
          return (
            (n = Bs(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Al(l, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = jl(a, t, o)) && (ns(e, a, o, l), Ul(e, a, o)),
            o
          );
        }
        function Vs(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Ws(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Qs(e, t) {
          Ws(e, t), (e = e.alternate) && Ws(e, t);
        }
        _u = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || za.current) bi = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (bi = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        zi(t), pl();
                        break;
                      case 5:
                        Xl(t);
                        break;
                      case 1:
                        Ra(t.type) && Da(t);
                        break;
                      case 4:
                        Yl(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ca(Sl, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ca(Zl, 1 & Zl.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                              ? Ii(e, t, n)
                              : (Ca(Zl, 1 & Zl.current),
                                null !== (e = Vi(e, t, n)) ? e.sibling : null);
                        Ca(Zl, 1 & Zl.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return $i(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ca(Zl, Zl.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), xi(e, t, n);
                    }
                    return Vi(e, t, n);
                  })(e, t, n)
                );
              bi = 0 !== (131072 & e.flags);
            }
          else (bi = !1), al && 0 !== (1048576 & t.flags) && Za(t, Qa, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Hi(e, t), (e = t.pendingProps);
              var a = Ta(t, Pa.current);
              zl(t, n), (a = vo(null, t, r, e, a, n));
              var o = go();
              return (
                (t.flags |= 1),
                'object' === typeof a &&
                null !== a &&
                'function' === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ra(r) ? ((o = !0), Da(t)) : (o = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Dl(t),
                    (a.updater = ai),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    ui(t, r, e, n),
                    (t = Pi(null, t, r, !0, o, n)))
                  : ((t.tag = 0),
                    al && o && el(t),
                    ki(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Hi(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ('function' === typeof e) return Rs(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === P) return 11;
                        if (e === T) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = ni(r, e)),
                  a)
                ) {
                  case 0:
                    t = Ci(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Li(null, t, r, e, n);
                    break e;
                  case 11:
                    t = wi(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Si(null, t, r, ni(r.type, e), n);
                    break e;
                }
                throw Error(l(306, r, ''));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ci(e, t, r, (a = t.elementType === r ? a : ni(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Li(e, t, r, (a = t.elementType === r ? a : ni(r, a)), n)
              );
            case 3:
              e: {
                if ((zi(t), null === e)) throw Error(l(387));
                (r = t.pendingProps),
                  (a = (o = t.memoizedState).element),
                  Il(e, t),
                  $l(t, r, null, n);
                var i = t.memoizedState;
                if (((r = i.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: i.cache,
                      pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                      transitions: i.transitions,
                    }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = Ni(e, t, r, n, (a = si(Error(l(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Ni(e, t, r, n, (a = si(Error(l(424)), t)));
                    break e;
                  }
                  for (
                    rl = sa(t.stateNode.containerInfo.firstChild),
                      nl = t,
                      al = !0,
                      ll = null,
                      n = wl(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((pl(), r === a)) {
                    t = Vi(e, t, n);
                    break e;
                  }
                  ki(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                Xl(t),
                null === e && sl(t),
                (r = t.type),
                (a = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (i = a.children),
                na(r, a)
                  ? (i = null)
                  : null !== o && na(r, o) && (t.flags |= 32),
                Ei(e, t),
                ki(e, t, i, n),
                t.child
              );
            case 6:
              return null === e && sl(t), null;
            case 13:
              return Ii(e, t, n);
            case 4:
              return (
                Yl(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = kl(t, null, r, n)) : ki(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                wi(e, t, r, (a = t.elementType === r ? a : ni(r, a)), n)
              );
            case 7:
              return ki(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return ki(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (o = t.memoizedProps),
                  (i = a.value),
                  Ca(Sl, r._currentValue),
                  (r._currentValue = i),
                  null !== o)
                )
                  if (ir(o.value, i)) {
                    if (o.children === a.children && !za.current) {
                      t = Vi(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (o = t.child) && (o.return = t);
                      null !== o;

                    ) {
                      var u = o.dependencies;
                      if (null !== u) {
                        i = o.child;
                        for (var s = u.firstContext; null !== s; ) {
                          if (s.context === r) {
                            if (1 === o.tag) {
                              (s = Al(-1, n & -n)).tag = 2;
                              var c = o.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (s.next = s)
                                  : ((s.next = f.next), (f.next = s)),
                                  (c.pending = s);
                              }
                            }
                            (o.lanes |= n),
                              null !== (s = o.alternate) && (s.lanes |= n),
                              Pl(o.return, n, t),
                              (u.lanes |= n);
                            break;
                          }
                          s = s.next;
                        }
                      } else if (10 === o.tag)
                        i = o.type === t.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (i = o.return)) throw Error(l(341));
                        (i.lanes |= n),
                          null !== (u = i.alternate) && (u.lanes |= n),
                          Pl(i, n, t),
                          (i = o.sibling);
                      } else i = o.child;
                      if (null !== i) i.return = o;
                      else
                        for (i = o; null !== i; ) {
                          if (i === t) {
                            i = null;
                            break;
                          }
                          if (null !== (o = i.sibling)) {
                            (o.return = i.return), (i = o);
                            break;
                          }
                          i = i.return;
                        }
                      o = i;
                    }
                ki(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                zl(t, n),
                (r = r((a = Nl(a)))),
                (t.flags |= 1),
                ki(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = ni((r = t.type), t.pendingProps)),
                Si(e, t, r, (a = ni(r.type, a)), n)
              );
            case 15:
              return _i(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : ni(r, a)),
                Hi(e, t),
                (t.tag = 1),
                Ra(r) ? ((e = !0), Da(t)) : (e = !1),
                zl(t, n),
                oi(t, r, a),
                ui(t, r, a, n),
                Pi(null, t, r, !0, e, n)
              );
            case 19:
              return $i(e, t, n);
            case 22:
              return xi(e, t, n);
          }
          throw Error(l(156, t.tag));
        };
        var Ks =
          'function' === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function qs(e) {
          this._internalRoot = e;
        }
        function Ys(e) {
          this._internalRoot = e;
        }
        function Gs(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Xs(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                ' react-mount-point-unstable ' !== e.nodeValue))
          );
        }
        function Js() {}
        function Zs(e, t, n, r, a) {
          var l = n._reactRootContainer;
          if (l) {
            var o = l;
            if ('function' === typeof a) {
              var i = a;
              a = function () {
                var e = Vs(o);
                i.call(e);
              };
            }
            Hs(t, o, e, a);
          } else
            o = (function (e, t, n, r, a) {
              if (a) {
                if ('function' === typeof r) {
                  var l = r;
                  r = function () {
                    var e = Vs(o);
                    l.call(e);
                  };
                }
                var o = $s(t, r, e, 0, null, !1, 0, '', Js);
                return (
                  (e._reactRootContainer = o),
                  (e[ha] = o.current),
                  $r(8 === e.nodeType ? e.parentNode : e),
                  cs(),
                  o
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ('function' === typeof r) {
                var i = r;
                r = function () {
                  var e = Vs(u);
                  i.call(e);
                };
              }
              var u = Us(e, 0, !1, null, 0, !1, 0, '', Js);
              return (
                (e._reactRootContainer = u),
                (e[ha] = u.current),
                $r(8 === e.nodeType ? e.parentNode : e),
                cs(function () {
                  Hs(t, u, n, r);
                }),
                u
              );
            })(n, t, e, a, r);
          return Vs(o);
        }
        (Ys.prototype.render = qs.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(l(409));
            Hs(e, t, null, null);
          }),
          (Ys.prototype.unmount = qs.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cs(function () {
                  Hs(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Ys.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = xt();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Mt.length && 0 !== t && t < Mt[n].priority;
                n++
              );
              Mt.splice(n, 0, e), 0 === n && It(e);
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    rs(t, Xe()),
                    0 === (6 & Pu) && (($u = Xe() + 500), $a()));
                }
                break;
              case 13:
                cs(function () {
                  var t = Ol(e, 1);
                  if (null !== t) {
                    var n = es();
                    ns(t, e, 1, n);
                  }
                }),
                  Qs(e, 1);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = Ol(e, 134217728);
              if (null !== t) ns(t, e, 134217728, es());
              Qs(e, 134217728);
            }
          }),
          (_t = function (e) {
            if (13 === e.tag) {
              var t = ts(e),
                n = Ol(e, t);
              if (null !== n) ns(n, e, t, es());
              Qs(e, t);
            }
          }),
          (xt = function () {
            return bt;
          }),
          (Et = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (Se = function (e, t, n) {
            switch (t) {
              case 'input':
                if ((J(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = wa(r);
                      if (!a) throw Error(l(90));
                      K(r), J(r, a);
                    }
                  }
                }
                break;
              case 'textarea':
                le(e, n);
                break;
              case 'select':
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Pe = ss),
          (ze = cs);
        var ec = {
            usingClientEntryPoint: !1,
            Events: [ba, ka, wa, Ce, Le, ss],
          },
          tc = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: '18.3.1',
            rendererPackageName: 'react-dom',
          },
          nc = {
            bundleType: tc.bundleType,
            version: tc.version,
            rendererPackageName: tc.rendererPackageName,
            rendererConfig: tc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: k.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = We(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              tc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
          };
        if ('undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var rc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!rc.isDisabled && rc.supportsFiber)
            try {
              (at = rc.inject(nc)), (lt = rc);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ec),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Gs(t)) throw Error(l(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: S,
                key: null == r ? null : '' + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Gs(e)) throw Error(l(299));
            var n = !1,
              r = '',
              a = Ks;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Us(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              $r(8 === e.nodeType ? e.parentNode : e),
              new qs(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ('function' === typeof e.render) throw Error(l(188));
              throw ((e = Object.keys(e).join(',')), Error(l(268, e)));
            }
            return (e = null === (e = We(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return cs(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Xs(t)) throw Error(l(200));
            return Zs(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Gs(e)) throw Error(l(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              o = '',
              i = Ks;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (i = n.onRecoverableError)),
              (t = $s(t, null, e, 1, null != n ? n : null, a, 0, o, i)),
              (e[ha] = t.current),
              $r(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Ys(t);
          }),
          (t.render = function (e, t, n) {
            if (!Xs(t)) throw Error(l(200));
            return Zs(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Xs(e)) throw Error(l(40));
            return (
              !!e._reactRootContainer &&
              (cs(function () {
                Zs(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = ss),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Xs(n)) throw Error(l(200));
            if (null == e || void 0 === e._reactInternals) throw Error(l(38));
            return Zs(e, t, n, !1, r);
          }),
          (t.version = '18.3.1-next-f1338f8080-20240426');
      },
      391: (e, t, n) => {
        var r = n(950);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      950: (e, t, n) => {
        !(function e() {
          if (
            'undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            'function' === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(730));
      },
      153: (e, t, n) => {
        var r = n(43),
          a = Symbol.for('react.element'),
          l = Symbol.for('react.fragment'),
          o = Object.prototype.hasOwnProperty,
          i =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(e, t, n) {
          var r,
            l = {},
            s = null,
            c = null;
          for (r in (void 0 !== n && (s = '' + n),
          void 0 !== t.key && (s = '' + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            o.call(t, r) && !u.hasOwnProperty(r) && (l[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === l[r] && (l[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: s,
            ref: c,
            props: l,
            _owner: i.current,
          };
        }
        (t.Fragment = l), (t.jsx = s), (t.jsxs = s);
      },
      202: (e, t) => {
        var n = Symbol.for('react.element'),
          r = Symbol.for('react.portal'),
          a = Symbol.for('react.fragment'),
          l = Symbol.for('react.strict_mode'),
          o = Symbol.for('react.profiler'),
          i = Symbol.for('react.provider'),
          u = Symbol.for('react.context'),
          s = Symbol.for('react.forward_ref'),
          c = Symbol.for('react.suspense'),
          f = Symbol.for('react.memo'),
          d = Symbol.for('react.lazy'),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          v = {};
        function g(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ('object' !== typeof e && 'function' !== typeof e && null != e)
              throw Error(
                'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
              );
            this.updater.enqueueSetState(this, e, t, 'setState');
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
          }),
          (y.prototype = g.prototype);
        var k = (b.prototype = new y());
        (k.constructor = b), m(k, g.prototype), (k.isPureReactComponent = !0);
        var w = Array.isArray,
          S = Object.prototype.hasOwnProperty,
          _ = { current: null },
          x = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, r) {
          var a,
            l = {},
            o = null,
            i = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (i = t.ref),
            void 0 !== t.key && (o = '' + t.key),
            t))
              S.call(t, a) && !x.hasOwnProperty(a) && (l[a] = t[a]);
          var u = arguments.length - 2;
          if (1 === u) l.children = r;
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            l.children = s;
          }
          if (e && e.defaultProps)
            for (a in (u = e.defaultProps)) void 0 === l[a] && (l[a] = u[a]);
          return {
            $$typeof: n,
            type: e,
            key: o,
            ref: i,
            props: l,
            _owner: _.current,
          };
        }
        function C(e) {
          return 'object' === typeof e && null !== e && e.$$typeof === n;
        }
        var L = /\/+/g;
        function P(e, t) {
          return 'object' === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { '=': '=0', ':': '=2' };
                return (
                  '$' +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })('' + e.key)
            : t.toString(36);
        }
        function z(e, t, a, l, o) {
          var i = typeof e;
          ('undefined' !== i && 'boolean' !== i) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (i) {
              case 'string':
              case 'number':
                u = !0;
                break;
              case 'object':
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0;
                }
            }
          if (u)
            return (
              (o = o((u = e))),
              (e = '' === l ? '.' + P(u, 0) : l),
              w(o)
                ? ((a = ''),
                  null != e && (a = e.replace(L, '$&/') + '/'),
                  z(o, t, a, '', function (e) {
                    return e;
                  }))
                : null != o &&
                  (C(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      a +
                        (!o.key || (u && u.key === o.key)
                          ? ''
                          : ('' + o.key).replace(L, '$&/') + '/') +
                        e
                    )),
                  t.push(o)),
              1
            );
          if (((u = 0), (l = '' === l ? '.' : l + ':'), w(e)))
            for (var s = 0; s < e.length; s++) {
              var c = l + P((i = e[s]), s);
              u += z(i, t, a, c, o);
            }
          else if (
            ((c = (function (e) {
              return null === e || 'object' !== typeof e
                ? null
                : 'function' === typeof (e = (p && e[p]) || e['@@iterator'])
                  ? e
                  : null;
            })(e)),
            'function' === typeof c)
          )
            for (e = c.call(e), s = 0; !(i = e.next()).done; )
              u += z((i = i.value), t, a, (c = l + P(i, s++)), o);
          else if ('object' === i)
            throw (
              ((t = String(e)),
              Error(
                'Objects are not valid as a React child (found: ' +
                  ('[object Object]' === t
                    ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                    : t) +
                  '). If you meant to render a collection of children, use an array instead.'
              ))
            );
          return u;
        }
        function N(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            z(e, r, '', '', function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function T(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var R = { current: null },
          M = { transition: null },
          O = {
            ReactCurrentDispatcher: R,
            ReactCurrentBatchConfig: M,
            ReactCurrentOwner: _,
          };
        function F() {
          throw Error(
            'act(...) is not supported in production builds of React.'
          );
        }
        (t.Children = {
          map: N,
          forEach: function (e, t, n) {
            N(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              N(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              N(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!C(e))
              throw Error(
                'React.Children.only expected to receive a single React element child.'
              );
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = a),
          (t.Profiler = o),
          (t.PureComponent = b),
          (t.StrictMode = l),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O),
          (t.act = F),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                'React.cloneElement(...): The argument must be a React element, but you passed ' +
                  e +
                  '.'
              );
            var a = m({}, e.props),
              l = e.key,
              o = e.ref,
              i = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (i = _.current)),
                void 0 !== t.key && (l = '' + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (s in t)
                S.call(t, s) &&
                  !x.hasOwnProperty(s) &&
                  (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) a.children = r;
            else if (1 < s) {
              u = Array(s);
              for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
              a.children = u;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: l,
              ref: o,
              props: a,
              _owner: i,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (t.isValidElement = C),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: T,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = M.transition;
            M.transition = {};
            try {
              e();
            } finally {
              M.transition = t;
            }
          }),
          (t.unstable_act = F),
          (t.useCallback = function (e, t) {
            return R.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return R.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return R.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return R.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return R.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return R.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return R.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return R.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return R.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return R.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return R.current.useRef(e);
          }),
          (t.useState = function (e) {
            return R.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return R.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return R.current.useTransition();
          }),
          (t.version = '18.3.1');
      },
      43: (e, t, n) => {
        e.exports = n(202);
      },
      579: (e, t, n) => {
        e.exports = n(153);
      },
      234: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < l(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
              var i = 2 * (r + 1) - 1,
                u = e[i],
                s = i + 1,
                c = e[s];
              if (0 > l(u, n))
                s < a && 0 > l(c, u)
                  ? ((e[r] = c), (e[s] = n), (r = s))
                  : ((e[r] = u), (e[i] = n), (r = i));
              else {
                if (!(s < a && 0 > l(c, n))) break e;
                (e[r] = c), (e[s] = n), (r = s);
              }
            }
          }
          return t;
        }
        function l(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          'object' === typeof performance &&
          'function' === typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var i = Date,
            u = i.now();
          t.unstable_now = function () {
            return i.now() - u;
          };
        }
        var s = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          m = !1,
          v = !1,
          g = 'function' === typeof setTimeout ? setTimeout : null,
          y = 'function' === typeof clearTimeout ? clearTimeout : null,
          b = 'undefined' !== typeof setImmediate ? setImmediate : null;
        function k(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(s, t);
            }
            t = r(c);
          }
        }
        function w(e) {
          if (((v = !1), k(e), !m))
            if (null !== r(s)) (m = !0), M(S);
            else {
              var t = r(c);
              null !== t && O(w, t.startTime - e);
            }
        }
        function S(e, n) {
          (m = !1), v && ((v = !1), y(C), (C = -1)), (h = !0);
          var l = p;
          try {
            for (
              k(n), d = r(s);
              null !== d && (!(d.expirationTime > n) || (e && !z()));

            ) {
              var o = d.callback;
              if ('function' === typeof o) {
                (d.callback = null), (p = d.priorityLevel);
                var i = o(d.expirationTime <= n);
                (n = t.unstable_now()),
                  'function' === typeof i
                    ? (d.callback = i)
                    : d === r(s) && a(s),
                  k(n);
              } else a(s);
              d = r(s);
            }
            if (null !== d) var u = !0;
            else {
              var f = r(c);
              null !== f && O(w, f.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (d = null), (p = l), (h = !1);
          }
        }
        'undefined' !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var _,
          x = !1,
          E = null,
          C = -1,
          L = 5,
          P = -1;
        function z() {
          return !(t.unstable_now() - P < L);
        }
        function N() {
          if (null !== E) {
            var e = t.unstable_now();
            P = e;
            var n = !0;
            try {
              n = E(!0, e);
            } finally {
              n ? _() : ((x = !1), (E = null));
            }
          } else x = !1;
        }
        if ('function' === typeof b)
          _ = function () {
            b(N);
          };
        else if ('undefined' !== typeof MessageChannel) {
          var T = new MessageChannel(),
            R = T.port2;
          (T.port1.onmessage = N),
            (_ = function () {
              R.postMessage(null);
            });
        } else
          _ = function () {
            g(N, 0);
          };
        function M(e) {
          (E = e), x || ((x = !0), _());
        }
        function O(e, n) {
          C = g(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), M(S));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (L = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(s);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, l) {
            var o = t.unstable_now();
            switch (
              ('object' === typeof l && null !== l
                ? (l = 'number' === typeof (l = l.delay) && 0 < l ? o + l : o)
                : (l = o),
              e)
            ) {
              case 1:
                var i = -1;
                break;
              case 2:
                i = 250;
                break;
              case 5:
                i = 1073741823;
                break;
              case 4:
                i = 1e4;
                break;
              default:
                i = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: l,
                expirationTime: (i = l + i),
                sortIndex: -1,
              }),
              l > o
                ? ((e.sortIndex = l),
                  n(c, e),
                  null === r(s) &&
                    e === r(c) &&
                    (v ? (y(C), (C = -1)) : (v = !0), O(w, l - o)))
                : ((e.sortIndex = i), n(s, e), m || h || ((m = !0), M(S))),
              e
            );
          }),
          (t.unstable_shouldYield = z),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      853: (e, t, n) => {
        e.exports = n(234);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var l = (t[r] = { exports: {} });
    return e[r](l, l.exports, n), l.exports;
  }
  (() => {
    var e,
      t = Object.getPrototypeOf
        ? (e) => Object.getPrototypeOf(e)
        : (e) => e.__proto__;
    n.t = function (r, a) {
      if ((1 & a && (r = this(r)), 8 & a)) return r;
      if ('object' === typeof r && r) {
        if (4 & a && r.__esModule) return r;
        if (16 & a && 'function' === typeof r.then) return r;
      }
      var l = Object.create(null);
      n.r(l);
      var o = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var i = 2 & a && r; 'object' == typeof i && !~e.indexOf(i); i = t(i))
        Object.getOwnPropertyNames(i).forEach((e) => (o[e] = () => r[e]));
      return (o.default = () => r), n.d(l, o), l;
    };
  })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    });
  var r,
    a = n(43),
    l = n.t(a, 2),
    o = n(391),
    i = n(950),
    u = n.t(i, 2);
  function s() {
    return (
      (s = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      s.apply(this, arguments)
    );
  }
  !(function (e) {
    (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
  })(r || (r = {}));
  const c = 'popstate';
  function f(e, t) {
    if (!1 === e || null === e || 'undefined' === typeof e) throw new Error(t);
  }
  function d(e, t) {
    if (!e) {
      'undefined' !== typeof console && console.warn(t);
      try {
        throw new Error(t);
      } catch (n) {}
    }
  }
  function p(e, t) {
    return { usr: e.state, key: e.key, idx: t };
  }
  function h(e, t, n, r) {
    return (
      void 0 === n && (n = null),
      s(
        {
          pathname: 'string' === typeof e ? e : e.pathname,
          search: '',
          hash: '',
        },
        'string' === typeof t ? v(t) : t,
        {
          state: n,
          key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
        }
      )
    );
  }
  function m(e) {
    let { pathname: t = '/', search: n = '', hash: r = '' } = e;
    return (
      n && '?' !== n && (t += '?' === n.charAt(0) ? n : '?' + n),
      r && '#' !== r && (t += '#' === r.charAt(0) ? r : '#' + r),
      t
    );
  }
  function v(e) {
    let t = {};
    if (e) {
      let n = e.indexOf('#');
      n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
      let r = e.indexOf('?');
      r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
        e && (t.pathname = e);
    }
    return t;
  }
  function g(e, t, n, a) {
    void 0 === a && (a = {});
    let { window: l = document.defaultView, v5Compat: o = !1 } = a,
      i = l.history,
      u = r.Pop,
      d = null,
      v = g();
    function g() {
      return (i.state || { idx: null }).idx;
    }
    function y() {
      u = r.Pop;
      let e = g(),
        t = null == e ? null : e - v;
      (v = e), d && d({ action: u, location: k.location, delta: t });
    }
    function b(e) {
      let t =
          'null' !== l.location.origin ? l.location.origin : l.location.href,
        n = 'string' === typeof e ? e : m(e);
      return (
        (n = n.replace(/ $/, '%20')),
        f(
          t,
          'No window.location.(origin|href) available to create URL for href: ' +
            n
        ),
        new URL(n, t)
      );
    }
    null == v && ((v = 0), i.replaceState(s({}, i.state, { idx: v }), ''));
    let k = {
      get action() {
        return u;
      },
      get location() {
        return e(l, i);
      },
      listen(e) {
        if (d) throw new Error('A history only accepts one active listener');
        return (
          l.addEventListener(c, y),
          (d = e),
          () => {
            l.removeEventListener(c, y), (d = null);
          }
        );
      },
      createHref: (e) => t(l, e),
      createURL: b,
      encodeLocation(e) {
        let t = b(e);
        return { pathname: t.pathname, search: t.search, hash: t.hash };
      },
      push: function (e, t) {
        u = r.Push;
        let a = h(k.location, e, t);
        n && n(a, e), (v = g() + 1);
        let s = p(a, v),
          c = k.createHref(a);
        try {
          i.pushState(s, '', c);
        } catch (f) {
          if (f instanceof DOMException && 'DataCloneError' === f.name) throw f;
          l.location.assign(c);
        }
        o && d && d({ action: u, location: k.location, delta: 1 });
      },
      replace: function (e, t) {
        u = r.Replace;
        let a = h(k.location, e, t);
        n && n(a, e), (v = g());
        let l = p(a, v),
          s = k.createHref(a);
        i.replaceState(l, '', s),
          o && d && d({ action: u, location: k.location, delta: 0 });
      },
      go: (e) => i.go(e),
    };
    return k;
  }
  var y;
  !(function (e) {
    (e.data = 'data'),
      (e.deferred = 'deferred'),
      (e.redirect = 'redirect'),
      (e.error = 'error');
  })(y || (y = {}));
  new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children']);
  function b(e, t, n) {
    return void 0 === n && (n = '/'), k(e, t, n, !1);
  }
  function k(e, t, n, r) {
    let a = O(('string' === typeof t ? v(t) : t).pathname || '/', n);
    if (null == a) return null;
    let l = w(e);
    !(function (e) {
      e.sort((e, t) =>
        e.score !== t.score
          ? t.score - e.score
          : (function (e, t) {
              let n =
                e.length === t.length &&
                e.slice(0, -1).every((e, n) => e === t[n]);
              return n ? e[e.length - 1] - t[t.length - 1] : 0;
            })(
              e.routesMeta.map((e) => e.childrenIndex),
              t.routesMeta.map((e) => e.childrenIndex)
            )
      );
    })(l);
    let o = null;
    for (let i = 0; null == o && i < l.length; ++i) {
      let e = M(a);
      o = T(l[i], e, r);
    }
    return o;
  }
  function w(e, t, n, r) {
    void 0 === t && (t = []),
      void 0 === n && (n = []),
      void 0 === r && (r = '');
    let a = (e, a, l) => {
      let o = {
        relativePath: void 0 === l ? e.path || '' : l,
        caseSensitive: !0 === e.caseSensitive,
        childrenIndex: a,
        route: e,
      };
      o.relativePath.startsWith('/') &&
        (f(
          o.relativePath.startsWith(r),
          'Absolute route path "' +
            o.relativePath +
            '" nested under path "' +
            r +
            '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
        ),
        (o.relativePath = o.relativePath.slice(r.length)));
      let i = F([r, o.relativePath]),
        u = n.concat(o);
      e.children &&
        e.children.length > 0 &&
        (f(
          !0 !== e.index,
          'Index routes must not have child routes. Please remove all child routes from route path "' +
            i +
            '".'
        ),
        w(e.children, t, u, i)),
        (null != e.path || e.index) &&
          t.push({ path: i, score: N(i, e.index), routesMeta: u });
    };
    return (
      e.forEach((e, t) => {
        var n;
        if ('' !== e.path && null != (n = e.path) && n.includes('?'))
          for (let r of S(e.path)) a(e, t, r);
        else a(e, t);
      }),
      t
    );
  }
  function S(e) {
    let t = e.split('/');
    if (0 === t.length) return [];
    let [n, ...r] = t,
      a = n.endsWith('?'),
      l = n.replace(/\?$/, '');
    if (0 === r.length) return a ? [l, ''] : [l];
    let o = S(r.join('/')),
      i = [];
    return (
      i.push(...o.map((e) => ('' === e ? l : [l, e].join('/')))),
      a && i.push(...o),
      i.map((t) => (e.startsWith('/') && '' === t ? '/' : t))
    );
  }
  const _ = /^:[\w-]+$/,
    x = 3,
    E = 2,
    C = 1,
    L = 10,
    P = -2,
    z = (e) => '*' === e;
  function N(e, t) {
    let n = e.split('/'),
      r = n.length;
    return (
      n.some(z) && (r += P),
      t && (r += E),
      n
        .filter((e) => !z(e))
        .reduce((e, t) => e + (_.test(t) ? x : '' === t ? C : L), r)
    );
  }
  function T(e, t, n) {
    void 0 === n && (n = !1);
    let { routesMeta: r } = e,
      a = {},
      l = '/',
      o = [];
    for (let i = 0; i < r.length; ++i) {
      let e = r[i],
        u = i === r.length - 1,
        s = '/' === l ? t : t.slice(l.length) || '/',
        c = R(
          { path: e.relativePath, caseSensitive: e.caseSensitive, end: u },
          s
        ),
        f = e.route;
      if (
        (!c &&
          u &&
          n &&
          !r[r.length - 1].route.index &&
          (c = R(
            { path: e.relativePath, caseSensitive: e.caseSensitive, end: !1 },
            s
          )),
        !c)
      )
        return null;
      Object.assign(a, c.params),
        o.push({
          params: a,
          pathname: F([l, c.pathname]),
          pathnameBase: D(F([l, c.pathnameBase])),
          route: f,
        }),
        '/' !== c.pathnameBase && (l = F([l, c.pathnameBase]));
    }
    return o;
  }
  function R(e, t) {
    'string' === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = (function (e, t, n) {
        void 0 === t && (t = !1);
        void 0 === n && (n = !0);
        d(
          '*' === e || !e.endsWith('*') || e.endsWith('/*'),
          'Route path "' +
            e +
            '" will be treated as if it were "' +
            e.replace(/\*$/, '/*') +
            '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
            e.replace(/\*$/, '/*') +
            '".'
        );
        let r = [],
          a =
            '^' +
            e
              .replace(/\/*\*?$/, '')
              .replace(/^\/*/, '/')
              .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
              .replace(
                /\/:([\w-]+)(\?)?/g,
                (e, t, n) => (
                  r.push({ paramName: t, isOptional: null != n }),
                  n ? '/?([^\\/]+)?' : '/([^\\/]+)'
                )
              );
        e.endsWith('*')
          ? (r.push({ paramName: '*' }),
            (a += '*' === e || '/*' === e ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
          : n
            ? (a += '\\/*$')
            : '' !== e && '/' !== e && (a += '(?:(?=\\/|$))');
        let l = new RegExp(a, t ? void 0 : 'i');
        return [l, r];
      })(e.path, e.caseSensitive, e.end),
      a = t.match(n);
    if (!a) return null;
    let l = a[0],
      o = l.replace(/(.)\/+$/, '$1'),
      i = a.slice(1);
    return {
      params: r.reduce((e, t, n) => {
        let { paramName: r, isOptional: a } = t;
        if ('*' === r) {
          let e = i[n] || '';
          o = l.slice(0, l.length - e.length).replace(/(.)\/+$/, '$1');
        }
        const u = i[n];
        return (e[r] = a && !u ? void 0 : (u || '').replace(/%2F/g, '/')), e;
      }, {}),
      pathname: l,
      pathnameBase: o,
      pattern: e,
    };
  }
  function M(e) {
    try {
      return e
        .split('/')
        .map((e) => decodeURIComponent(e).replace(/\//g, '%2F'))
        .join('/');
    } catch (t) {
      return (
        d(
          !1,
          'The URL path "' +
            e +
            '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
            t +
            ').'
        ),
        e
      );
    }
  }
  function O(e, t) {
    if ('/' === t) return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith('/') ? t.length - 1 : t.length,
      r = e.charAt(n);
    return r && '/' !== r ? null : e.slice(n) || '/';
  }
  const F = (e) => e.join('/').replace(/\/\/+/g, '/'),
    D = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/');
  Error;
  function I(e) {
    return (
      null != e &&
      'number' === typeof e.status &&
      'string' === typeof e.statusText &&
      'boolean' === typeof e.internal &&
      'data' in e
    );
  }
  const A = ['post', 'put', 'patch', 'delete'],
    j = (new Set(A), ['get', ...A]);
  new Set(j), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
  Symbol('deferred');
  function U() {
    return (
      (U = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      U.apply(this, arguments)
    );
  }
  const B = a.createContext(null);
  const $ = a.createContext(null);
  const H = a.createContext(null);
  const V = a.createContext(null);
  const W = a.createContext({ outlet: null, matches: [], isDataRoute: !1 });
  const Q = a.createContext(null);
  function K() {
    return null != a.useContext(V);
  }
  function q() {
    return K() || f(!1), a.useContext(V).location;
  }
  function Y(e, t, n, l) {
    K() || f(!1);
    let { navigator: o } = a.useContext(H),
      { matches: i } = a.useContext(W),
      u = i[i.length - 1],
      s = u ? u.params : {},
      c = (u && u.pathname, u ? u.pathnameBase : '/');
    u && u.route;
    let d,
      p = q();
    if (t) {
      var h;
      let e = 'string' === typeof t ? v(t) : t;
      '/' === c ||
        (null == (h = e.pathname) ? void 0 : h.startsWith(c)) ||
        f(!1),
        (d = e);
    } else d = p;
    let m = d.pathname || '/',
      g = m;
    if ('/' !== c) {
      let e = c.replace(/^\//, '').split('/');
      g = '/' + m.replace(/^\//, '').split('/').slice(e.length).join('/');
    }
    let y = b(e, { pathname: g });
    let k = ee(
      y &&
        y.map((e) =>
          Object.assign({}, e, {
            params: Object.assign({}, s, e.params),
            pathname: F([
              c,
              o.encodeLocation
                ? o.encodeLocation(e.pathname).pathname
                : e.pathname,
            ]),
            pathnameBase:
              '/' === e.pathnameBase
                ? c
                : F([
                    c,
                    o.encodeLocation
                      ? o.encodeLocation(e.pathnameBase).pathname
                      : e.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      l
    );
    return t && k
      ? a.createElement(
          V.Provider,
          {
            value: {
              location: U(
                {
                  pathname: '/',
                  search: '',
                  hash: '',
                  state: null,
                  key: 'default',
                },
                d
              ),
              navigationType: r.Pop,
            },
          },
          k
        )
      : k;
  }
  function G() {
    let e = (function () {
        var e;
        let t = a.useContext(Q),
          n = ne(te.UseRouteError),
          r = re(te.UseRouteError);
        if (void 0 !== t) return t;
        return null == (e = n.errors) ? void 0 : e[r];
      })(),
      t = I(e)
        ? e.status + ' ' + e.statusText
        : e instanceof Error
          ? e.message
          : JSON.stringify(e),
      n = e instanceof Error ? e.stack : null,
      r = 'rgba(200,200,200, 0.5)',
      l = { padding: '0.5rem', backgroundColor: r };
    return a.createElement(
      a.Fragment,
      null,
      a.createElement('h2', null, 'Unexpected Application Error!'),
      a.createElement('h3', { style: { fontStyle: 'italic' } }, t),
      n ? a.createElement('pre', { style: l }, n) : null,
      null
    );
  }
  const X = a.createElement(G, null);
  class J extends a.Component {
    constructor(e) {
      super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        ('idle' !== t.revalidation && 'idle' === e.revalidation)
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: void 0 !== e.error ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      console.error(
        'React Router caught the following error during render',
        e,
        t
      );
    }
    render() {
      return void 0 !== this.state.error
        ? a.createElement(
            W.Provider,
            { value: this.props.routeContext },
            a.createElement(Q.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  }
  function Z(e) {
    let { routeContext: t, match: n, children: r } = e,
      l = a.useContext(B);
    return (
      l &&
        l.static &&
        l.staticContext &&
        (n.route.errorElement || n.route.ErrorBoundary) &&
        (l.staticContext._deepestRenderedBoundaryId = n.route.id),
      a.createElement(W.Provider, { value: t }, r)
    );
  }
  function ee(e, t, n, r) {
    var l;
    if (
      (void 0 === t && (t = []),
      void 0 === n && (n = null),
      void 0 === r && (r = null),
      null == e)
    ) {
      var o;
      if (!n) return null;
      if (n.errors) e = n.matches;
      else {
        if (
          !(
            null != (o = r) &&
            o.v7_partialHydration &&
            0 === t.length &&
            !n.initialized &&
            n.matches.length > 0
          )
        )
          return null;
        e = n.matches;
      }
    }
    let i = e,
      u = null == (l = n) ? void 0 : l.errors;
    if (null != u) {
      let e = i.findIndex(
        (e) => e.route.id && void 0 !== (null == u ? void 0 : u[e.route.id])
      );
      e >= 0 || f(!1), (i = i.slice(0, Math.min(i.length, e + 1)));
    }
    let s = !1,
      c = -1;
    if (n && r && r.v7_partialHydration)
      for (let a = 0; a < i.length; a++) {
        let e = i[a];
        if (
          ((e.route.HydrateFallback || e.route.hydrateFallbackElement) &&
            (c = a),
          e.route.id)
        ) {
          let { loaderData: t, errors: r } = n,
            a =
              e.route.loader &&
              void 0 === t[e.route.id] &&
              (!r || void 0 === r[e.route.id]);
          if (e.route.lazy || a) {
            (s = !0), (i = c >= 0 ? i.slice(0, c + 1) : [i[0]]);
            break;
          }
        }
      }
    return i.reduceRight((e, r, l) => {
      let o,
        f = !1,
        d = null,
        p = null;
      var h;
      n &&
        ((o = u && r.route.id ? u[r.route.id] : void 0),
        (d = r.route.errorElement || X),
        s &&
          (c < 0 && 0 === l
            ? ((h = 'route-fallback'),
              !1 || ae[h] || (ae[h] = !0),
              (f = !0),
              (p = null))
            : c === l &&
              ((f = !0), (p = r.route.hydrateFallbackElement || null))));
      let m = t.concat(i.slice(0, l + 1)),
        v = () => {
          let t;
          return (
            (t = o
              ? d
              : f
                ? p
                : r.route.Component
                  ? a.createElement(r.route.Component, null)
                  : r.route.element
                    ? r.route.element
                    : e),
            a.createElement(Z, {
              match: r,
              routeContext: { outlet: e, matches: m, isDataRoute: null != n },
              children: t,
            })
          );
        };
      return n && (r.route.ErrorBoundary || r.route.errorElement || 0 === l)
        ? a.createElement(J, {
            location: n.location,
            revalidation: n.revalidation,
            component: d,
            error: o,
            children: v(),
            routeContext: { outlet: null, matches: m, isDataRoute: !0 },
          })
        : v();
    }, null);
  }
  var te = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(te || {});
  function ne(e) {
    let t = a.useContext($);
    return t || f(!1), t;
  }
  function re(e) {
    let t = (function () {
        let e = a.useContext(W);
        return e || f(!1), e;
      })(),
      n = t.matches[t.matches.length - 1];
    return n.route.id || f(!1), n.route.id;
  }
  const ae = {};
  const le = {};
  const oe = (e, t, n) => {
    var r;
    le[
      (r =
        '\u26a0\ufe0f React Router Future Flag Warning: ' +
        t +
        '. You can use the `' +
        e +
        '` future flag to opt-in early. For more information, see ' +
        n +
        '.')
    ] || ((le[r] = !0), console.warn(r));
  };
  function ie(e, t) {
    (null != e && e.v7_startTransition) ||
      oe(
        'v7_startTransition',
        'React Router will begin wrapping state updates in `React.startTransition` in v7',
        'https://reactrouter.com/v6/upgrading/future#v7_starttransition'
      ),
      (null != e && e.v7_relativeSplatPath) ||
        (t && t.v7_relativeSplatPath) ||
        oe(
          'v7_relativeSplatPath',
          'Relative route resolution within Splat routes is changing in v7',
          'https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath'
        ),
      t &&
        (t.v7_fetcherPersist ||
          oe(
            'v7_fetcherPersist',
            'The persistence behavior of fetchers is changing in v7',
            'https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist'
          ),
        t.v7_normalizeFormMethod ||
          oe(
            'v7_normalizeFormMethod',
            'Casing of `formMethod` fields is being normalized to uppercase in v7',
            'https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod'
          ),
        t.v7_partialHydration ||
          oe(
            'v7_partialHydration',
            '`RouterProvider` hydration behavior is changing in v7',
            'https://reactrouter.com/v6/upgrading/future#v7_partialhydration'
          ),
        t.v7_skipActionErrorRevalidation ||
          oe(
            'v7_skipActionErrorRevalidation',
            'The revalidation behavior after 4xx/5xx `action` responses is changing in v7',
            'https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation'
          ));
  }
  l.startTransition;
  function ue(e) {
    f(!1);
  }
  function se(e) {
    let {
      basename: t = '/',
      children: n = null,
      location: l,
      navigationType: o = r.Pop,
      navigator: i,
      static: u = !1,
      future: s,
    } = e;
    K() && f(!1);
    let c = t.replace(/^\/*/, '/'),
      d = a.useMemo(
        () => ({
          basename: c,
          navigator: i,
          static: u,
          future: U({ v7_relativeSplatPath: !1 }, s),
        }),
        [c, s, i, u]
      );
    'string' === typeof l && (l = v(l));
    let {
        pathname: p = '/',
        search: h = '',
        hash: m = '',
        state: g = null,
        key: y = 'default',
      } = l,
      b = a.useMemo(() => {
        let e = O(p, c);
        return null == e
          ? null
          : {
              location: { pathname: e, search: h, hash: m, state: g, key: y },
              navigationType: o,
            };
      }, [c, p, h, m, g, y, o]);
    return null == b
      ? null
      : a.createElement(
          H.Provider,
          { value: d },
          a.createElement(V.Provider, { children: n, value: b })
        );
  }
  function ce(e) {
    let { children: t, location: n } = e;
    return Y(fe(t), n);
  }
  new Promise(() => {});
  a.Component;
  function fe(e, t) {
    void 0 === t && (t = []);
    let n = [];
    return (
      a.Children.forEach(e, (e, r) => {
        if (!a.isValidElement(e)) return;
        let l = [...t, r];
        if (e.type === a.Fragment)
          return void n.push.apply(n, fe(e.props.children, l));
        e.type !== ue && f(!1), e.props.index && e.props.children && f(!1);
        let o = {
          id: e.props.id || l.join('-'),
          caseSensitive: e.props.caseSensitive,
          element: e.props.element,
          Component: e.props.Component,
          index: e.props.index,
          path: e.props.path,
          loader: e.props.loader,
          action: e.props.action,
          errorElement: e.props.errorElement,
          ErrorBoundary: e.props.ErrorBoundary,
          hasErrorBoundary:
            null != e.props.ErrorBoundary || null != e.props.errorElement,
          shouldRevalidate: e.props.shouldRevalidate,
          handle: e.props.handle,
          lazy: e.props.lazy,
        };
        e.props.children && (o.children = fe(e.props.children, l)), n.push(o);
      }),
      n
    );
  }
  new Set([
    'application/x-www-form-urlencoded',
    'multipart/form-data',
    'text/plain',
  ]);
  try {
    window.__reactRouterVersion = '6';
  } catch (ke) {}
  new Map();
  const de = l.startTransition;
  u.flushSync, l.useId;
  function pe(e) {
    let { basename: t, children: n, future: r, window: l } = e,
      o = a.useRef();
    var i;
    null == o.current &&
      (o.current =
        (void 0 === (i = { window: l, v5Compat: !0 }) && (i = {}),
        g(
          function (e, t) {
            let {
              pathname: n = '/',
              search: r = '',
              hash: a = '',
            } = v(e.location.hash.substr(1));
            return (
              n.startsWith('/') || n.startsWith('.') || (n = '/' + n),
              h(
                '',
                { pathname: n, search: r, hash: a },
                (t.state && t.state.usr) || null,
                (t.state && t.state.key) || 'default'
              )
            );
          },
          function (e, t) {
            let n = e.document.querySelector('base'),
              r = '';
            if (n && n.getAttribute('href')) {
              let t = e.location.href,
                n = t.indexOf('#');
              r = -1 === n ? t : t.slice(0, n);
            }
            return r + '#' + ('string' === typeof t ? t : m(t));
          },
          function (e, t) {
            d(
              '/' === e.pathname.charAt(0),
              'relative pathnames are not supported in hash history.push(' +
                JSON.stringify(t) +
                ')'
            );
          },
          i
        )));
    let u = o.current,
      [s, c] = a.useState({ action: u.action, location: u.location }),
      { v7_startTransition: f } = r || {},
      p = a.useCallback(
        (e) => {
          f && de ? de(() => c(e)) : c(e);
        },
        [c, f]
      );
    return (
      a.useLayoutEffect(() => u.listen(p), [u, p]),
      a.useEffect(() => ie(r), [r]),
      a.createElement(se, {
        basename: t,
        children: n,
        location: s.location,
        navigationType: s.action,
        navigator: u,
        future: r,
      })
    );
  }
  'undefined' !== typeof window &&
    'undefined' !== typeof window.document &&
    window.document.createElement;
  var he, me;
  (function (e) {
    (e.UseScrollRestoration = 'useScrollRestoration'),
      (e.UseSubmit = 'useSubmit'),
      (e.UseSubmitFetcher = 'useSubmitFetcher'),
      (e.UseFetcher = 'useFetcher'),
      (e.useViewTransitionState = 'useViewTransitionState');
  })(he || (he = {})),
    (function (e) {
      (e.UseFetcher = 'useFetcher'),
        (e.UseFetchers = 'useFetchers'),
        (e.UseScrollRestoration = 'useScrollRestoration');
    })(me || (me = {}));
  var ve = n(579);
  const ge = {
    'Acehnese (Arabic script)': 'ace_Arab',
    'Acehnese (Latin script)': 'ace_Latn',
    Afrikaans: 'afr_Latn',
    Akan: 'aka_Latn',
    Amharic: 'amh_Ethi',
    Armenian: 'hye_Armn',
    Assamese: 'asm_Beng',
    Asturian: 'ast_Latn',
    Awadhi: 'awa_Deva',
    'Ayacucho Quechua': 'quy_Latn',
    Balinese: 'ban_Latn',
    Bambara: 'bam_Latn',
    'Banjar (Arabic script)': 'bjn_Arab',
    'Banjar (Latin script)': 'bjn_Latn',
    Bashkir: 'bak_Cyrl',
    Basque: 'eus_Latn',
    Belarusian: 'bel_Cyrl',
    Bemba: 'bem_Latn',
    Bengali: 'ben_Beng',
    Bhojpuri: 'bho_Deva',
    Bosnian: 'bos_Latn',
    Buginese: 'bug_Latn',
    Bulgarian: 'bul_Cyrl',
    Burmese: 'mya_Mymr',
    Catalan: 'cat_Latn',
    Cebuano: 'ceb_Latn',
    'Central Atlas Tamazight': 'tzm_Tfng',
    'Central Aymara': 'ayr_Latn',
    'Central Kanuri (Arabic script)': 'knc_Arab',
    'Central Kanuri (Latin script)': 'knc_Latn',
    'Central Kurdish': 'ckb_Arab',
    Chhattisgarhi: 'hne_Deva',
    'Chinese (Simplified)': 'zho_Hans',
    'Chinese (Traditional)': 'zho_Hant',
    Chokwe: 'cjk_Latn',
    'Crimean Tatar': 'crh_Latn',
    Croatian: 'hrv_Latn',
    Czech: 'ces_Latn',
    Danish: 'dan_Latn',
    Dari: 'prs_Arab',
    Dutch: 'nld_Latn',
    Dyula: 'dyu_Latn',
    Dzongkha: 'dzo_Tibt',
    'Eastern Panjabi': 'pan_Guru',
    'Eastern Yiddish': 'ydd_Hebr',
    'Egyptian Arabic': 'arz_Arab',
    English: 'eng_Latn',
    Esperanto: 'epo_Latn',
    Estonian: 'est_Latn',
    Ewe: 'ewe_Latn',
    Faroese: 'fao_Latn',
    Fijian: 'fij_Latn',
    Finnish: 'fin_Latn',
    Fon: 'fon_Latn',
    French: 'fra_Latn',
    Friulian: 'fur_Latn',
    Galician: 'glg_Latn',
    Ganda: 'lug_Latn',
    Georgian: 'kat_Geor',
    German: 'deu_Latn',
    Greek: 'ell_Grek',
    Guarani: 'grn_Latn',
    Gujarati: 'guj_Gujr',
    'Haitian Creole': 'hat_Latn',
    'Halh Mongolian': 'khk_Cyrl',
    Hausa: 'hau_Latn',
    Hebrew: 'heb_Hebr',
    Hindi: 'hin_Deva',
    Hungarian: 'hun_Latn',
    Icelandic: 'isl_Latn',
    Igbo: 'ibo_Latn',
    Ilocano: 'ilo_Latn',
    Indonesian: 'ind_Latn',
    Irish: 'gle_Latn',
    Italian: 'ita_Latn',
    Japanese: 'jpn_Jpan',
    Javanese: 'jav_Latn',
    Jingpho: 'kac_Latn',
    'Kabiy\xe8': 'kbp_Latn',
    Kabuverdianu: 'kea_Latn',
    Kabyle: 'kab_Latn',
    Kamba: 'kam_Latn',
    Kannada: 'kan_Knda',
    'Kashmiri (Arabic script)': 'kas_Arab',
    'Kashmiri (Devanagari script)': 'kas_Deva',
    Kazakh: 'kaz_Cyrl',
    Khmer: 'khm_Khmr',
    Kikongo: 'kon_Latn',
    Kikuyu: 'kik_Latn',
    Kimbundu: 'kmb_Latn',
    Kinyarwanda: 'kin_Latn',
    Korean: 'kor_Hang',
    Kyrgyz: 'kir_Cyrl',
    Lao: 'lao_Laoo',
    Latgalian: 'ltg_Latn',
    Ligurian: 'lij_Latn',
    Limburgish: 'lim_Latn',
    Lingala: 'lin_Latn',
    Lithuanian: 'lit_Latn',
    Lombard: 'lmo_Latn',
    'Luba-Kasai': 'lua_Latn',
    Luo: 'luo_Latn',
    Luxembourgish: 'ltz_Latn',
    Macedonian: 'mkd_Cyrl',
    Magahi: 'mag_Deva',
    Maithili: 'mai_Deva',
    Malayalam: 'mal_Mlym',
    Maltese: 'mlt_Latn',
    Maori: 'mri_Latn',
    Marathi: 'mar_Deva',
    'Meitei (Bengali script)': 'mni_Beng',
    'Mesopotamian Arabic': 'acm_Arab',
    'Minangkabau (Arabic script)': 'min_Arab',
    'Minangkabau (Latin script)': 'min_Latn',
    Mizo: 'lus_Latn',
    'Modern Standard Arabic (Romanized)': 'arb_Latn',
    'Modern Standard Arabic': 'arb_Arab',
    'Moroccan Arabic': 'ary_Arab',
    Mossi: 'mos_Latn',
    'Najdi Arabic': 'ars_Arab',
    Nepali: 'npi_Deva',
    'Nigerian Fulfulde': 'fuv_Latn',
    'North Azerbaijani': 'azj_Latn',
    'North Levantine Arabic': 'apc_Arab',
    'Northern Kurdish': 'kmr_Latn',
    'Northern Sotho': 'nso_Latn',
    'Northern Uzbek': 'uzn_Latn',
    'Norwegian Bokm\xe5l': 'nob_Latn',
    'Norwegian Nynorsk': 'nno_Latn',
    Nuer: 'nus_Latn',
    Nyanja: 'nya_Latn',
    Occitan: 'oci_Latn',
    Odia: 'ory_Orya',
    Pangasinan: 'pag_Latn',
    Papiamento: 'pap_Latn',
    'Plateau Malagasy': 'plt_Latn',
    Polish: 'pol_Latn',
    Portuguese: 'por_Latn',
    Romanian: 'ron_Latn',
    Rundi: 'run_Latn',
    Russian: 'rus_Cyrl',
    Samoan: 'smo_Latn',
    Sango: 'sag_Latn',
    Sanskrit: 'san_Deva',
    Santali: 'sat_Olck',
    Sardinian: 'srd_Latn',
    'Scottish Gaelic': 'gla_Latn',
    Serbian: 'srp_Cyrl',
    Shan: 'shn_Mymr',
    Shona: 'sna_Latn',
    Sicilian: 'scn_Latn',
    Silesian: 'szl_Latn',
    Sindhi: 'snd_Arab',
    Sinhala: 'sin_Sinh',
    Slovak: 'slk_Latn',
    Slovenian: 'slv_Latn',
    Somali: 'som_Latn',
    'South Azerbaijani': 'azb_Arab',
    'South Levantine Arabic': 'ajp_Arab',
    'Southern Pashto': 'pbt_Arab',
    'Southern Sotho': 'sot_Latn',
    'Southwestern Dinka': 'dik_Latn',
    Spanish: 'spa_Latn',
    'Standard Latvian': 'lvs_Latn',
    'Standard Malay': 'zsm_Latn',
    'Standard Tibetan': 'bod_Tibt',
    Sundanese: 'sun_Latn',
    Swahili: 'swh_Latn',
    Swati: 'ssw_Latn',
    Swedish: 'swe_Latn',
    Tagalog: 'tgl_Latn',
    Tajik: 'tgk_Cyrl',
    'Tamasheq (Latin script)': 'taq_Latn',
    'Tamasheq (Tifinagh script)': 'taq_Tfng',
    Tamil: 'tam_Taml',
    Tatar: 'tat_Cyrl',
    'Ta\u2019izzi-Adeni Arabic': 'acq_Arab',
    Telugu: 'tel_Telu',
    Thai: 'tha_Thai',
    Tigrinya: 'tir_Ethi',
    'Tok Pisin': 'tpi_Latn',
    'Tosk Albanian': 'als_Latn',
    Tsonga: 'tso_Latn',
    Tswana: 'tsn_Latn',
    Tumbuka: 'tum_Latn',
    'Tunisian Arabic': 'aeb_Arab',
    Turkish: 'tur_Latn',
    Turkmen: 'tuk_Latn',
    Twi: 'twi_Latn',
    Ukrainian: 'ukr_Cyrl',
    Umbundu: 'umb_Latn',
    Urdu: 'urd_Arab',
    Uyghur: 'uig_Arab',
    Venetian: 'vec_Latn',
    Vietnamese: 'vie_Latn',
    Waray: 'war_Latn',
    Welsh: 'cym_Latn',
    'West Central Oromo': 'gaz_Latn',
    'Western Persian': 'pes_Arab',
    Wolof: 'wol_Latn',
    Xhosa: 'xho_Latn',
    Yoruba: 'yor_Latn',
    'Yue Chinese': 'yue_Hant',
    Zulu: 'zul_Latn',
  };
  function ye(e) {
    let { type: t, onChange: n, defaultLanguage: r } = e;
    return (0, ve.jsxs)('div', {
      className: 'language-selector',
      children: [
        (0, ve.jsxs)('label', { children: [t, ': '] }),
        (0, ve.jsx)('select', {
          onChange: n,
          defaultValue: r,
          children: Object.entries(ge).map((e) => {
            let [t, n] = e;
            return (0, ve.jsx)('option', { value: n, children: t }, t);
          }),
        }),
      ],
    });
  }
  const be = function () {
    const [e, t] = (0, a.useState)('I love walking my dog.'),
      [n, r] = (0, a.useState)('eng_Latn'),
      [l, o] = (0, a.useState)('fra_Latn'),
      [i, u] = (0, a.useState)('');
    return (0, ve.jsx)(pe, {
      children: (0, ve.jsx)(ce, {
        children: (0, ve.jsx)(ue, {
          path: '/',
          element: (0, ve.jsxs)(ve.Fragment, {
            children: [
              (0, ve.jsx)('h1', { children: 'Transformers.js' }),
              (0, ve.jsx)('h2', {
                children: 'ML-powered multilingual translation in React!',
              }),
              (0, ve.jsxs)('div', {
                className: 'container',
                children: [
                  (0, ve.jsxs)('div', {
                    className: 'language-container',
                    children: [
                      (0, ve.jsx)(ye, {
                        type: 'Source',
                        defaultLanguage: 'eng_Latn',
                        onChange: (e) => r(e.target.value),
                      }),
                      (0, ve.jsx)(ye, {
                        type: 'Target',
                        defaultLanguage: 'fra_Latn',
                        onChange: (e) => o(e.target.value),
                      }),
                    ],
                  }),
                  (0, ve.jsxs)('div', {
                    className: 'textbox-container',
                    children: [
                      (0, ve.jsx)('textarea', {
                        value: e,
                        rows: 3,
                        onChange: (e) => t(e.target.value),
                      }),
                      (0, ve.jsx)('textarea', {
                        value: i,
                        rows: 3,
                        readOnly: !0,
                      }),
                    ],
                  }),
                ],
              }),
              (0, ve.jsx)('button', {
                onClick: async () => {
                  const t = await window.electron.run({
                    text: e,
                    src_lang: n,
                    tgt_lang: l,
                  });
                  u(t[0].translation_text);
                },
                children: 'Translate',
              }),
            ],
          }),
        }),
      }),
    });
  };
  o.createRoot(document.getElementById('root')).render(
    (0, ve.jsx)(a.StrictMode, { children: (0, ve.jsx)(be, {}) })
  );
})();
//# sourceMappingURL=main.0053bcf5.js.map
