"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _inferno = require("inferno");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * MathJax math renderer plugin JSX component.
 * @module view/plugin/katex
 */
var _require = require('inferno'),
    Component = _require.Component;

var _require2 = require('../../util/cache'),
    cacheComponent = _require2.cacheComponent;
/**
 * MathJax math renderer plugin JSX component.
 *
 * @see https://www.mathjax.org/
 * @example
 * <Mathjax jsUrl="/path/to/mathjax.js" />
 */


var Mathjax = /*#__PURE__*/function (_Component) {
  _inherits(Mathjax, _Component);

  var _super = _createSuper(Mathjax);

  function Mathjax() {
    _classCallCheck(this, Mathjax);

    return _super.apply(this, arguments);
  }

  _createClass(Mathjax, [{
    key: "render",
    value: function render() {
      var jsUrl = this.props.jsUrl;
      var js = "MathJax.Hub.Config({\n            'HTML-CSS': {\n                matchFontHeight: false\n            },\n            SVG: {\n                matchFontHeight: false\n            },\n            CommonHTML: {\n                matchFontHeight: false\n            },\n            tex2jax: {\n                inlineMath: [\n                    ['$','$'],\n                    ['\\\\(','\\\\)']\n                ]\n            }\n        });";
      return (0, _inferno.createFragment)([(0, _inferno.createVNode)(1, "script", null, null, 1, {
        "type": "text/x-mathjax-config",
        "dangerouslySetInnerHTML": {
          __html: js
        }
      }), (0, _inferno.createVNode)(1, "script", null, null, 1, {
        "src": jsUrl,
        "defer": true
      })], 4);
    }
  }]);

  return Mathjax;
}(Component);
/**
 * Cacheable Mathjax math renderer plugin JSX component.
 * <p>
 * This class is supposed to be used in combination with the <code>locals</code> hexo filter
 * ({@link module:hexo/filter/locals}).
 *
 * @see module:util/cache.cacheComponent
 * @example
 * <Mathjax.Cacheable
 *     head={true}
 *     helper={{ cdn: function() {...} }} />
 */


Mathjax.Cacheable = cacheComponent(Mathjax, 'plugin.mathjax', function (props) {
  var head = props.head,
      helper = props.helper;

  if (head) {
    return null;
  }

  return {
    jsUrl: helper.cdn('mathjax', '2.7.9', 'unpacked/MathJax.js?config=TeX-MML-AM_CHTML')
  };
});
module.exports = Mathjax;