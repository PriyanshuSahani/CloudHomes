import {
  __commonJS,
  __toESM
} from "./chunk-5WRI5ZAA.js";

// node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js"(exports, module) {
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module.exports = freeGlobal;
  }
});

// node_modules/lodash/_root.js
var require_root = __commonJS({
  "node_modules/lodash/_root.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});

// node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js"(exports, module) {
    var root = require_root();
    var Symbol2 = root.Symbol;
    module.exports = Symbol2;
  }
});

// node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty2.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module.exports = getRawTag;
  }
});

// node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js"(exports, module) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module.exports = objectToString;
  }
});

// node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
  }
});

// node_modules/lodash/_overArg.js
var require_overArg = __commonJS({
  "node_modules/lodash/_overArg.js"(exports, module) {
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    module.exports = overArg;
  }
});

// node_modules/lodash/_getPrototype.js
var require_getPrototype = __commonJS({
  "node_modules/lodash/_getPrototype.js"(exports, module) {
    var overArg = require_overArg();
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    module.exports = getPrototype;
  }
});

// node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js"(exports, module) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module.exports = isObjectLike;
  }
});

// node_modules/lodash/isPlainObject.js
var require_isPlainObject = __commonJS({
  "node_modules/lodash/isPlainObject.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var getPrototype = require_getPrototype();
    var isObjectLike = require_isObjectLike();
    var objectTag = "[object Object]";
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    var objectCtorString = funcToString.call(Object);
    function isPlainObject2(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty2.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
    module.exports = isPlainObject2;
  }
});

// node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js"(exports, module) {
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module.exports = isObject;
  }
});

// node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/lodash/isFunction.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObject = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction2(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module.exports = isFunction2;
  }
});

// node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "node_modules/lodash/_coreJsData.js"(exports, module) {
    var root = require_root();
    var coreJsData = root["__core-js_shared__"];
    module.exports = coreJsData;
  }
});

// node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "node_modules/lodash/_isMasked.js"(exports, module) {
    var coreJsData = require_coreJsData();
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    module.exports = isMasked;
  }
});

// node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "node_modules/lodash/_toSource.js"(exports, module) {
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    module.exports = toSource;
  }
});

// node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "node_modules/lodash/_baseIsNative.js"(exports, module) {
    var isFunction2 = require_isFunction();
    var isMasked = require_isMasked();
    var isObject = require_isObject();
    var toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction2(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    module.exports = baseIsNative;
  }
});

// node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "node_modules/lodash/_getValue.js"(exports, module) {
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    module.exports = getValue;
  }
});

// node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "node_modules/lodash/_getNative.js"(exports, module) {
    var baseIsNative = require_baseIsNative();
    var getValue = require_getValue();
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    module.exports = getNative;
  }
});

// node_modules/lodash/_defineProperty.js
var require_defineProperty = __commonJS({
  "node_modules/lodash/_defineProperty.js"(exports, module) {
    var getNative = require_getNative();
    var defineProperty = function() {
      try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e) {
      }
    }();
    module.exports = defineProperty;
  }
});

// node_modules/lodash/_baseAssignValue.js
var require_baseAssignValue = __commonJS({
  "node_modules/lodash/_baseAssignValue.js"(exports, module) {
    var defineProperty = require_defineProperty();
    function baseAssignValue(object, key, value) {
      if (key == "__proto__" && defineProperty) {
        defineProperty(object, key, {
          "configurable": true,
          "enumerable": true,
          "value": value,
          "writable": true
        });
      } else {
        object[key] = value;
      }
    }
    module.exports = baseAssignValue;
  }
});

// node_modules/lodash/_createBaseFor.js
var require_createBaseFor = __commonJS({
  "node_modules/lodash/_createBaseFor.js"(exports, module) {
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index2 = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while (length--) {
          var key = props[fromRight ? length : ++index2];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }
    module.exports = createBaseFor;
  }
});

// node_modules/lodash/_baseFor.js
var require_baseFor = __commonJS({
  "node_modules/lodash/_baseFor.js"(exports, module) {
    var createBaseFor = require_createBaseFor();
    var baseFor = createBaseFor();
    module.exports = baseFor;
  }
});

// node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS({
  "node_modules/lodash/_baseTimes.js"(exports, module) {
    function baseTimes(n, iteratee) {
      var index2 = -1, result = Array(n);
      while (++index2 < n) {
        result[index2] = iteratee(index2);
      }
      return result;
    }
    module.exports = baseTimes;
  }
});

// node_modules/lodash/_baseIsArguments.js
var require_baseIsArguments = __commonJS({
  "node_modules/lodash/_baseIsArguments.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    module.exports = baseIsArguments;
  }
});

// node_modules/lodash/isArguments.js
var require_isArguments = __commonJS({
  "node_modules/lodash/isArguments.js"(exports, module) {
    var baseIsArguments = require_baseIsArguments();
    var isObjectLike = require_isObjectLike();
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var isArguments = baseIsArguments(/* @__PURE__ */ function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty2.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    module.exports = isArguments;
  }
});

// node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "node_modules/lodash/isArray.js"(exports, module) {
    var isArray3 = Array.isArray;
    module.exports = isArray3;
  }
});

// node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS({
  "node_modules/lodash/stubFalse.js"(exports, module) {
    function stubFalse() {
      return false;
    }
    module.exports = stubFalse;
  }
});

// node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS({
  "node_modules/lodash/isBuffer.js"(exports, module) {
    var root = require_root();
    var stubFalse = require_stubFalse();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? root.Buffer : void 0;
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse;
    module.exports = isBuffer;
  }
});

// node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "node_modules/lodash/_isIndex.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    module.exports = isIndex;
  }
});

// node_modules/lodash/isLength.js
var require_isLength = __commonJS({
  "node_modules/lodash/isLength.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    module.exports = isLength;
  }
});

// node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS({
  "node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isLength = require_isLength();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    module.exports = baseIsTypedArray;
  }
});

// node_modules/lodash/_baseUnary.js
var require_baseUnary = __commonJS({
  "node_modules/lodash/_baseUnary.js"(exports, module) {
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    module.exports = baseUnary;
  }
});

// node_modules/lodash/_nodeUtil.js
var require_nodeUtil = __commonJS({
  "node_modules/lodash/_nodeUtil.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    module.exports = nodeUtil;
  }
});

// node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS({
  "node_modules/lodash/isTypedArray.js"(exports, module) {
    var baseIsTypedArray = require_baseIsTypedArray();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module.exports = isTypedArray;
  }
});

// node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
    var baseTimes = require_baseTimes();
    var isArguments = require_isArguments();
    var isArray3 = require_isArray();
    var isBuffer = require_isBuffer();
    var isIndex = require_isIndex();
    var isTypedArray = require_isTypedArray();
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray3(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty2.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = arrayLikeKeys;
  }
});

// node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS({
  "node_modules/lodash/_isPrototype.js"(exports, module) {
    var objectProto = Object.prototype;
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    module.exports = isPrototype;
  }
});

// node_modules/lodash/_nativeKeys.js
var require_nativeKeys = __commonJS({
  "node_modules/lodash/_nativeKeys.js"(exports, module) {
    var overArg = require_overArg();
    var nativeKeys = overArg(Object.keys, Object);
    module.exports = nativeKeys;
  }
});

// node_modules/lodash/_baseKeys.js
var require_baseKeys = __commonJS({
  "node_modules/lodash/_baseKeys.js"(exports, module) {
    var isPrototype = require_isPrototype();
    var nativeKeys = require_nativeKeys();
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty2.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = baseKeys;
  }
});

// node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "node_modules/lodash/isArrayLike.js"(exports, module) {
    var isFunction2 = require_isFunction();
    var isLength = require_isLength();
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction2(value);
    }
    module.exports = isArrayLike;
  }
});

// node_modules/lodash/keys.js
var require_keys = __commonJS({
  "node_modules/lodash/keys.js"(exports, module) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeys = require_baseKeys();
    var isArrayLike = require_isArrayLike();
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    module.exports = keys;
  }
});

// node_modules/lodash/_baseForOwn.js
var require_baseForOwn = __commonJS({
  "node_modules/lodash/_baseForOwn.js"(exports, module) {
    var baseFor = require_baseFor();
    var keys = require_keys();
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }
    module.exports = baseForOwn;
  }
});

// node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "node_modules/lodash/_listCacheClear.js"(exports, module) {
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    module.exports = listCacheClear;
  }
});

// node_modules/lodash/eq.js
var require_eq = __commonJS({
  "node_modules/lodash/eq.js"(exports, module) {
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    module.exports = eq;
  }
});

// node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "node_modules/lodash/_assocIndexOf.js"(exports, module) {
    var eq = require_eq();
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    module.exports = assocIndexOf;
  }
});

// node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "node_modules/lodash/_listCacheDelete.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data = this.__data__, index2 = assocIndexOf(data, key);
      if (index2 < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index2 == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index2, 1);
      }
      --this.size;
      return true;
    }
    module.exports = listCacheDelete;
  }
});

// node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "node_modules/lodash/_listCacheGet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data = this.__data__, index2 = assocIndexOf(data, key);
      return index2 < 0 ? void 0 : data[index2][1];
    }
    module.exports = listCacheGet;
  }
});

// node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "node_modules/lodash/_listCacheHas.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    module.exports = listCacheHas;
  }
});

// node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "node_modules/lodash/_listCacheSet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheSet(key, value) {
      var data = this.__data__, index2 = assocIndexOf(data, key);
      if (index2 < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index2][1] = value;
      }
      return this;
    }
    module.exports = listCacheSet;
  }
});

// node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "node_modules/lodash/_ListCache.js"(exports, module) {
    var listCacheClear = require_listCacheClear();
    var listCacheDelete = require_listCacheDelete();
    var listCacheGet = require_listCacheGet();
    var listCacheHas = require_listCacheHas();
    var listCacheSet = require_listCacheSet();
    function ListCache(entries) {
      var index2 = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index2 < length) {
        var entry = entries[index2];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module.exports = ListCache;
  }
});

// node_modules/lodash/_stackClear.js
var require_stackClear = __commonJS({
  "node_modules/lodash/_stackClear.js"(exports, module) {
    var ListCache = require_ListCache();
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    module.exports = stackClear;
  }
});

// node_modules/lodash/_stackDelete.js
var require_stackDelete = __commonJS({
  "node_modules/lodash/_stackDelete.js"(exports, module) {
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    module.exports = stackDelete;
  }
});

// node_modules/lodash/_stackGet.js
var require_stackGet = __commonJS({
  "node_modules/lodash/_stackGet.js"(exports, module) {
    function stackGet(key) {
      return this.__data__.get(key);
    }
    module.exports = stackGet;
  }
});

// node_modules/lodash/_stackHas.js
var require_stackHas = __commonJS({
  "node_modules/lodash/_stackHas.js"(exports, module) {
    function stackHas(key) {
      return this.__data__.has(key);
    }
    module.exports = stackHas;
  }
});

// node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "node_modules/lodash/_Map.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Map = getNative(root, "Map");
    module.exports = Map;
  }
});

// node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "node_modules/lodash/_nativeCreate.js"(exports, module) {
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module.exports = nativeCreate;
  }
});

// node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "node_modules/lodash/_hashClear.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    module.exports = hashClear;
  }
});

// node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "node_modules/lodash/_hashDelete.js"(exports, module) {
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = hashDelete;
  }
});

// node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "node_modules/lodash/_hashGet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty2.call(data, key) ? data[key] : void 0;
    }
    module.exports = hashGet;
  }
});

// node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "node_modules/lodash/_hashHas.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty2.call(data, key);
    }
    module.exports = hashHas;
  }
});

// node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "node_modules/lodash/_hashSet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    module.exports = hashSet;
  }
});

// node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "node_modules/lodash/_Hash.js"(exports, module) {
    var hashClear = require_hashClear();
    var hashDelete = require_hashDelete();
    var hashGet = require_hashGet();
    var hashHas = require_hashHas();
    var hashSet = require_hashSet();
    function Hash(entries) {
      var index2 = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index2 < length) {
        var entry = entries[index2];
        this.set(entry[0], entry[1]);
      }
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module.exports = Hash;
  }
});

// node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "node_modules/lodash/_mapCacheClear.js"(exports, module) {
    var Hash = require_Hash();
    var ListCache = require_ListCache();
    var Map = require_Map();
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map || ListCache)(),
        "string": new Hash()
      };
    }
    module.exports = mapCacheClear;
  }
});

// node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "node_modules/lodash/_isKeyable.js"(exports, module) {
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    module.exports = isKeyable;
  }
});

// node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "node_modules/lodash/_getMapData.js"(exports, module) {
    var isKeyable = require_isKeyable();
    function getMapData(map3, key) {
      var data = map3.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    module.exports = getMapData;
  }
});

// node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "node_modules/lodash/_mapCacheDelete.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = mapCacheDelete;
  }
});

// node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "node_modules/lodash/_mapCacheGet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    module.exports = mapCacheGet;
  }
});

// node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "node_modules/lodash/_mapCacheHas.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    module.exports = mapCacheHas;
  }
});

// node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "node_modules/lodash/_mapCacheSet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    module.exports = mapCacheSet;
  }
});

// node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "node_modules/lodash/_MapCache.js"(exports, module) {
    var mapCacheClear = require_mapCacheClear();
    var mapCacheDelete = require_mapCacheDelete();
    var mapCacheGet = require_mapCacheGet();
    var mapCacheHas = require_mapCacheHas();
    var mapCacheSet = require_mapCacheSet();
    function MapCache(entries) {
      var index2 = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index2 < length) {
        var entry = entries[index2];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module.exports = MapCache;
  }
});

// node_modules/lodash/_stackSet.js
var require_stackSet = __commonJS({
  "node_modules/lodash/_stackSet.js"(exports, module) {
    var ListCache = require_ListCache();
    var Map = require_Map();
    var MapCache = require_MapCache();
    var LARGE_ARRAY_SIZE = 200;
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    module.exports = stackSet;
  }
});

// node_modules/lodash/_Stack.js
var require_Stack = __commonJS({
  "node_modules/lodash/_Stack.js"(exports, module) {
    var ListCache = require_ListCache();
    var stackClear = require_stackClear();
    var stackDelete = require_stackDelete();
    var stackGet = require_stackGet();
    var stackHas = require_stackHas();
    var stackSet = require_stackSet();
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module.exports = Stack;
  }
});

// node_modules/lodash/_setCacheAdd.js
var require_setCacheAdd = __commonJS({
  "node_modules/lodash/_setCacheAdd.js"(exports, module) {
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    module.exports = setCacheAdd;
  }
});

// node_modules/lodash/_setCacheHas.js
var require_setCacheHas = __commonJS({
  "node_modules/lodash/_setCacheHas.js"(exports, module) {
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    module.exports = setCacheHas;
  }
});

// node_modules/lodash/_SetCache.js
var require_SetCache = __commonJS({
  "node_modules/lodash/_SetCache.js"(exports, module) {
    var MapCache = require_MapCache();
    var setCacheAdd = require_setCacheAdd();
    var setCacheHas = require_setCacheHas();
    function SetCache(values2) {
      var index2 = -1, length = values2 == null ? 0 : values2.length;
      this.__data__ = new MapCache();
      while (++index2 < length) {
        this.add(values2[index2]);
      }
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    module.exports = SetCache;
  }
});

// node_modules/lodash/_arraySome.js
var require_arraySome = __commonJS({
  "node_modules/lodash/_arraySome.js"(exports, module) {
    function arraySome(array, predicate) {
      var index2 = -1, length = array == null ? 0 : array.length;
      while (++index2 < length) {
        if (predicate(array[index2], index2, array)) {
          return true;
        }
      }
      return false;
    }
    module.exports = arraySome;
  }
});

// node_modules/lodash/_cacheHas.js
var require_cacheHas = __commonJS({
  "node_modules/lodash/_cacheHas.js"(exports, module) {
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    module.exports = cacheHas;
  }
});

// node_modules/lodash/_equalArrays.js
var require_equalArrays = __commonJS({
  "node_modules/lodash/_equalArrays.js"(exports, module) {
    var SetCache = require_SetCache();
    var arraySome = require_arraySome();
    var cacheHas = require_cacheHas();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var arrStacked = stack.get(array);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
      }
      var index2 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index2 < arrLength) {
        var arrValue = array[index2], othValue = other[index2];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array);
      stack["delete"](other);
      return result;
    }
    module.exports = equalArrays;
  }
});

// node_modules/lodash/_Uint8Array.js
var require_Uint8Array = __commonJS({
  "node_modules/lodash/_Uint8Array.js"(exports, module) {
    var root = require_root();
    var Uint8Array2 = root.Uint8Array;
    module.exports = Uint8Array2;
  }
});

// node_modules/lodash/_mapToArray.js
var require_mapToArray = __commonJS({
  "node_modules/lodash/_mapToArray.js"(exports, module) {
    function mapToArray(map3) {
      var index2 = -1, result = Array(map3.size);
      map3.forEach(function(value, key) {
        result[++index2] = [key, value];
      });
      return result;
    }
    module.exports = mapToArray;
  }
});

// node_modules/lodash/_setToArray.js
var require_setToArray = __commonJS({
  "node_modules/lodash/_setToArray.js"(exports, module) {
    function setToArray(set2) {
      var index2 = -1, result = Array(set2.size);
      set2.forEach(function(value) {
        result[++index2] = value;
      });
      return result;
    }
    module.exports = setToArray;
  }
});

// node_modules/lodash/_equalByTag.js
var require_equalByTag = __commonJS({
  "node_modules/lodash/_equalByTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var Uint8Array2 = require_Uint8Array();
    var eq = require_eq();
    var equalArrays = require_equalArrays();
    var mapToArray = require_mapToArray();
    var setToArray = require_setToArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object);
          return result;
        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    module.exports = equalByTag;
  }
});

// node_modules/lodash/_arrayPush.js
var require_arrayPush = __commonJS({
  "node_modules/lodash/_arrayPush.js"(exports, module) {
    function arrayPush(array, values2) {
      var index2 = -1, length = values2.length, offset = array.length;
      while (++index2 < length) {
        array[offset + index2] = values2[index2];
      }
      return array;
    }
    module.exports = arrayPush;
  }
});

// node_modules/lodash/_baseGetAllKeys.js
var require_baseGetAllKeys = __commonJS({
  "node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var isArray3 = require_isArray();
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray3(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    module.exports = baseGetAllKeys;
  }
});

// node_modules/lodash/_arrayFilter.js
var require_arrayFilter = __commonJS({
  "node_modules/lodash/_arrayFilter.js"(exports, module) {
    function arrayFilter(array, predicate) {
      var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index2 < length) {
        var value = array[index2];
        if (predicate(value, index2, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    module.exports = arrayFilter;
  }
});

// node_modules/lodash/stubArray.js
var require_stubArray = __commonJS({
  "node_modules/lodash/stubArray.js"(exports, module) {
    function stubArray() {
      return [];
    }
    module.exports = stubArray;
  }
});

// node_modules/lodash/_getSymbols.js
var require_getSymbols = __commonJS({
  "node_modules/lodash/_getSymbols.js"(exports, module) {
    var arrayFilter = require_arrayFilter();
    var stubArray = require_stubArray();
    var objectProto = Object.prototype;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    module.exports = getSymbols;
  }
});

// node_modules/lodash/_getAllKeys.js
var require_getAllKeys = __commonJS({
  "node_modules/lodash/_getAllKeys.js"(exports, module) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbols = require_getSymbols();
    var keys = require_keys();
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    module.exports = getAllKeys;
  }
});

// node_modules/lodash/_equalObjects.js
var require_equalObjects = __commonJS({
  "node_modules/lodash/_equalObjects.js"(exports, module) {
    var getAllKeys = require_getAllKeys();
    var COMPARE_PARTIAL_FLAG = 1;
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index2 = objLength;
      while (index2--) {
        var key = objProps[index2];
        if (!(isPartial ? key in other : hasOwnProperty2.call(other, key))) {
          return false;
        }
      }
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index2 < objLength) {
        key = objProps[index2];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    module.exports = equalObjects;
  }
});

// node_modules/lodash/_DataView.js
var require_DataView = __commonJS({
  "node_modules/lodash/_DataView.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var DataView2 = getNative(root, "DataView");
    module.exports = DataView2;
  }
});

// node_modules/lodash/_Promise.js
var require_Promise = __commonJS({
  "node_modules/lodash/_Promise.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Promise2 = getNative(root, "Promise");
    module.exports = Promise2;
  }
});

// node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "node_modules/lodash/_Set.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Set2 = getNative(root, "Set");
    module.exports = Set2;
  }
});

// node_modules/lodash/_WeakMap.js
var require_WeakMap = __commonJS({
  "node_modules/lodash/_WeakMap.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var WeakMap = getNative(root, "WeakMap");
    module.exports = WeakMap;
  }
});

// node_modules/lodash/_getTag.js
var require_getTag = __commonJS({
  "node_modules/lodash/_getTag.js"(exports, module) {
    var DataView2 = require_DataView();
    var Map = require_Map();
    var Promise2 = require_Promise();
    var Set2 = require_Set();
    var WeakMap = require_WeakMap();
    var baseGetTag = require_baseGetTag();
    var toSource = require_toSource();
    var mapTag = "[object Map]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var setTag = "[object Set]";
    var weakMapTag = "[object WeakMap]";
    var dataViewTag = "[object DataView]";
    var dataViewCtorString = toSource(DataView2);
    var mapCtorString = toSource(Map);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set2);
    var weakMapCtorString = toSource(WeakMap);
    var getTag = baseGetTag;
    if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
      getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    module.exports = getTag;
  }
});

// node_modules/lodash/_baseIsEqualDeep.js
var require_baseIsEqualDeep = __commonJS({
  "node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
    var Stack = require_Stack();
    var equalArrays = require_equalArrays();
    var equalByTag = require_equalByTag();
    var equalObjects = require_equalObjects();
    var getTag = require_getTag();
    var isArray3 = require_isArray();
    var isBuffer = require_isBuffer();
    var isTypedArray = require_isTypedArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var objectTag = "[object Object]";
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray3(object), othIsArr = isArray3(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty2.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty2.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }
    module.exports = baseIsEqualDeep;
  }
});

// node_modules/lodash/_baseIsEqual.js
var require_baseIsEqual = __commonJS({
  "node_modules/lodash/_baseIsEqual.js"(exports, module) {
    var baseIsEqualDeep = require_baseIsEqualDeep();
    var isObjectLike = require_isObjectLike();
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    module.exports = baseIsEqual;
  }
});

// node_modules/lodash/_baseIsMatch.js
var require_baseIsMatch = __commonJS({
  "node_modules/lodash/_baseIsMatch.js"(exports, module) {
    var Stack = require_Stack();
    var baseIsEqual = require_baseIsEqual();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseIsMatch(object, source, matchData, customizer) {
      var index2 = matchData.length, length = index2, noCustomizer = !customizer;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index2--) {
        var data = matchData[index2];
        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
          return false;
        }
      }
      while (++index2 < length) {
        data = matchData[index2];
        var key = data[0], objValue = object[key], srcValue = data[1];
        if (noCustomizer && data[2]) {
          if (objValue === void 0 && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack();
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
            return false;
          }
        }
      }
      return true;
    }
    module.exports = baseIsMatch;
  }
});

// node_modules/lodash/_isStrictComparable.js
var require_isStrictComparable = __commonJS({
  "node_modules/lodash/_isStrictComparable.js"(exports, module) {
    var isObject = require_isObject();
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }
    module.exports = isStrictComparable;
  }
});

// node_modules/lodash/_getMatchData.js
var require_getMatchData = __commonJS({
  "node_modules/lodash/_getMatchData.js"(exports, module) {
    var isStrictComparable = require_isStrictComparable();
    var keys = require_keys();
    function getMatchData(object) {
      var result = keys(object), length = result.length;
      while (length--) {
        var key = result[length], value = object[key];
        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }
    module.exports = getMatchData;
  }
});

// node_modules/lodash/_matchesStrictComparable.js
var require_matchesStrictComparable = __commonJS({
  "node_modules/lodash/_matchesStrictComparable.js"(exports, module) {
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
      };
    }
    module.exports = matchesStrictComparable;
  }
});

// node_modules/lodash/_baseMatches.js
var require_baseMatches = __commonJS({
  "node_modules/lodash/_baseMatches.js"(exports, module) {
    var baseIsMatch = require_baseIsMatch();
    var getMatchData = require_getMatchData();
    var matchesStrictComparable = require_matchesStrictComparable();
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }
    module.exports = baseMatches;
  }
});

// node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "node_modules/lodash/isSymbol.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module.exports = isSymbol;
  }
});

// node_modules/lodash/_isKey.js
var require_isKey = __commonJS({
  "node_modules/lodash/_isKey.js"(exports, module) {
    var isArray3 = require_isArray();
    var isSymbol = require_isSymbol();
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp = /^\w*$/;
    function isKey(value, object) {
      if (isArray3(value)) {
        return false;
      }
      var type = typeof value;
      if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }
    module.exports = isKey;
  }
});

// node_modules/lodash/memoize.js
var require_memoize = __commonJS({
  "node_modules/lodash/memoize.js"(exports, module) {
    var MapCache = require_MapCache();
    var FUNC_ERROR_TEXT = "Expected a function";
    function memoize(func, resolver) {
      if (typeof func != "function" || resolver != null && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache)();
      return memoized;
    }
    memoize.Cache = MapCache;
    module.exports = memoize;
  }
});

// node_modules/lodash/_memoizeCapped.js
var require_memoizeCapped = __commonJS({
  "node_modules/lodash/_memoizeCapped.js"(exports, module) {
    var memoize = require_memoize();
    var MAX_MEMOIZE_SIZE = 500;
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });
      var cache = result.cache;
      return result;
    }
    module.exports = memoizeCapped;
  }
});

// node_modules/lodash/_stringToPath.js
var require_stringToPath = __commonJS({
  "node_modules/lodash/_stringToPath.js"(exports, module) {
    var memoizeCapped = require_memoizeCapped();
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46) {
        result.push("");
      }
      string.replace(rePropName, function(match2, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match2);
      });
      return result;
    });
    module.exports = stringToPath;
  }
});

// node_modules/lodash/_arrayMap.js
var require_arrayMap = __commonJS({
  "node_modules/lodash/_arrayMap.js"(exports, module) {
    function arrayMap(array, iteratee) {
      var index2 = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index2 < length) {
        result[index2] = iteratee(array[index2], index2, array);
      }
      return result;
    }
    module.exports = arrayMap;
  }
});

// node_modules/lodash/_baseToString.js
var require_baseToString = __commonJS({
  "node_modules/lodash/_baseToString.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var arrayMap = require_arrayMap();
    var isArray3 = require_isArray();
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isArray3(value)) {
        return arrayMap(value, baseToString) + "";
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = baseToString;
  }
});

// node_modules/lodash/toString.js
var require_toString = __commonJS({
  "node_modules/lodash/toString.js"(exports, module) {
    var baseToString = require_baseToString();
    function toString3(value) {
      return value == null ? "" : baseToString(value);
    }
    module.exports = toString3;
  }
});

// node_modules/lodash/_castPath.js
var require_castPath = __commonJS({
  "node_modules/lodash/_castPath.js"(exports, module) {
    var isArray3 = require_isArray();
    var isKey = require_isKey();
    var stringToPath = require_stringToPath();
    var toString3 = require_toString();
    function castPath(value, object) {
      if (isArray3(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString3(value));
    }
    module.exports = castPath;
  }
});

// node_modules/lodash/_toKey.js
var require_toKey = __commonJS({
  "node_modules/lodash/_toKey.js"(exports, module) {
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value)) {
        return value;
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = toKey;
  }
});

// node_modules/lodash/_baseGet.js
var require_baseGet = __commonJS({
  "node_modules/lodash/_baseGet.js"(exports, module) {
    var castPath = require_castPath();
    var toKey = require_toKey();
    function baseGet(object, path) {
      path = castPath(path, object);
      var index2 = 0, length = path.length;
      while (object != null && index2 < length) {
        object = object[toKey(path[index2++])];
      }
      return index2 && index2 == length ? object : void 0;
    }
    module.exports = baseGet;
  }
});

// node_modules/lodash/get.js
var require_get = __commonJS({
  "node_modules/lodash/get.js"(exports, module) {
    var baseGet = require_baseGet();
    function get3(object, path, defaultValue) {
      var result = object == null ? void 0 : baseGet(object, path);
      return result === void 0 ? defaultValue : result;
    }
    module.exports = get3;
  }
});

// node_modules/lodash/_baseHasIn.js
var require_baseHasIn = __commonJS({
  "node_modules/lodash/_baseHasIn.js"(exports, module) {
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }
    module.exports = baseHasIn;
  }
});

// node_modules/lodash/_hasPath.js
var require_hasPath = __commonJS({
  "node_modules/lodash/_hasPath.js"(exports, module) {
    var castPath = require_castPath();
    var isArguments = require_isArguments();
    var isArray3 = require_isArray();
    var isIndex = require_isIndex();
    var isLength = require_isLength();
    var toKey = require_toKey();
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);
      var index2 = -1, length = path.length, result = false;
      while (++index2 < length) {
        var key = toKey(path[index2]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index2 != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) && (isArray3(object) || isArguments(object));
    }
    module.exports = hasPath;
  }
});

// node_modules/lodash/hasIn.js
var require_hasIn = __commonJS({
  "node_modules/lodash/hasIn.js"(exports, module) {
    var baseHasIn = require_baseHasIn();
    var hasPath = require_hasPath();
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }
    module.exports = hasIn;
  }
});

// node_modules/lodash/_baseMatchesProperty.js
var require_baseMatchesProperty = __commonJS({
  "node_modules/lodash/_baseMatchesProperty.js"(exports, module) {
    var baseIsEqual = require_baseIsEqual();
    var get3 = require_get();
    var hasIn = require_hasIn();
    var isKey = require_isKey();
    var isStrictComparable = require_isStrictComparable();
    var matchesStrictComparable = require_matchesStrictComparable();
    var toKey = require_toKey();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get3(object, path);
        return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }
    module.exports = baseMatchesProperty;
  }
});

// node_modules/lodash/identity.js
var require_identity = __commonJS({
  "node_modules/lodash/identity.js"(exports, module) {
    function identity(value) {
      return value;
    }
    module.exports = identity;
  }
});

// node_modules/lodash/_baseProperty.js
var require_baseProperty = __commonJS({
  "node_modules/lodash/_baseProperty.js"(exports, module) {
    function baseProperty(key) {
      return function(object) {
        return object == null ? void 0 : object[key];
      };
    }
    module.exports = baseProperty;
  }
});

// node_modules/lodash/_basePropertyDeep.js
var require_basePropertyDeep = __commonJS({
  "node_modules/lodash/_basePropertyDeep.js"(exports, module) {
    var baseGet = require_baseGet();
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }
    module.exports = basePropertyDeep;
  }
});

// node_modules/lodash/property.js
var require_property = __commonJS({
  "node_modules/lodash/property.js"(exports, module) {
    var baseProperty = require_baseProperty();
    var basePropertyDeep = require_basePropertyDeep();
    var isKey = require_isKey();
    var toKey = require_toKey();
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }
    module.exports = property;
  }
});

// node_modules/lodash/_baseIteratee.js
var require_baseIteratee = __commonJS({
  "node_modules/lodash/_baseIteratee.js"(exports, module) {
    var baseMatches = require_baseMatches();
    var baseMatchesProperty = require_baseMatchesProperty();
    var identity = require_identity();
    var isArray3 = require_isArray();
    var property = require_property();
    function baseIteratee(value) {
      if (typeof value == "function") {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == "object") {
        return isArray3(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
      }
      return property(value);
    }
    module.exports = baseIteratee;
  }
});

// node_modules/lodash/mapValues.js
var require_mapValues = __commonJS({
  "node_modules/lodash/mapValues.js"(exports, module) {
    var baseAssignValue = require_baseAssignValue();
    var baseForOwn = require_baseForOwn();
    var baseIteratee = require_baseIteratee();
    function mapValues2(object, iteratee) {
      var result = {};
      iteratee = baseIteratee(iteratee, 3);
      baseForOwn(object, function(value, key, object2) {
        baseAssignValue(result, key, iteratee(value, key, object2));
      });
      return result;
    }
    module.exports = mapValues2;
  }
});

// node_modules/lodash/_baseFindIndex.js
var require_baseFindIndex = __commonJS({
  "node_modules/lodash/_baseFindIndex.js"(exports, module) {
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length = array.length, index2 = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index2-- : ++index2 < length) {
        if (predicate(array[index2], index2, array)) {
          return index2;
        }
      }
      return -1;
    }
    module.exports = baseFindIndex;
  }
});

// node_modules/lodash/_baseIsNaN.js
var require_baseIsNaN = __commonJS({
  "node_modules/lodash/_baseIsNaN.js"(exports, module) {
    function baseIsNaN(value) {
      return value !== value;
    }
    module.exports = baseIsNaN;
  }
});

// node_modules/lodash/_strictIndexOf.js
var require_strictIndexOf = __commonJS({
  "node_modules/lodash/_strictIndexOf.js"(exports, module) {
    function strictIndexOf(array, value, fromIndex) {
      var index2 = fromIndex - 1, length = array.length;
      while (++index2 < length) {
        if (array[index2] === value) {
          return index2;
        }
      }
      return -1;
    }
    module.exports = strictIndexOf;
  }
});

// node_modules/lodash/_baseIndexOf.js
var require_baseIndexOf = __commonJS({
  "node_modules/lodash/_baseIndexOf.js"(exports, module) {
    var baseFindIndex = require_baseFindIndex();
    var baseIsNaN = require_baseIsNaN();
    var strictIndexOf = require_strictIndexOf();
    function baseIndexOf(array, value, fromIndex) {
      return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
    }
    module.exports = baseIndexOf;
  }
});

// node_modules/lodash/_arrayIncludes.js
var require_arrayIncludes = __commonJS({
  "node_modules/lodash/_arrayIncludes.js"(exports, module) {
    var baseIndexOf = require_baseIndexOf();
    function arrayIncludes(array, value) {
      var length = array == null ? 0 : array.length;
      return !!length && baseIndexOf(array, value, 0) > -1;
    }
    module.exports = arrayIncludes;
  }
});

// node_modules/lodash/_arrayIncludesWith.js
var require_arrayIncludesWith = __commonJS({
  "node_modules/lodash/_arrayIncludesWith.js"(exports, module) {
    function arrayIncludesWith(array, value, comparator) {
      var index2 = -1, length = array == null ? 0 : array.length;
      while (++index2 < length) {
        if (comparator(value, array[index2])) {
          return true;
        }
      }
      return false;
    }
    module.exports = arrayIncludesWith;
  }
});

// node_modules/lodash/noop.js
var require_noop = __commonJS({
  "node_modules/lodash/noop.js"(exports, module) {
    function noop() {
    }
    module.exports = noop;
  }
});

// node_modules/lodash/_createSet.js
var require_createSet = __commonJS({
  "node_modules/lodash/_createSet.js"(exports, module) {
    var Set2 = require_Set();
    var noop = require_noop();
    var setToArray = require_setToArray();
    var INFINITY = 1 / 0;
    var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values2) {
      return new Set2(values2);
    };
    module.exports = createSet;
  }
});

// node_modules/lodash/_baseUniq.js
var require_baseUniq = __commonJS({
  "node_modules/lodash/_baseUniq.js"(exports, module) {
    var SetCache = require_SetCache();
    var arrayIncludes = require_arrayIncludes();
    var arrayIncludesWith = require_arrayIncludesWith();
    var cacheHas = require_cacheHas();
    var createSet = require_createSet();
    var setToArray = require_setToArray();
    var LARGE_ARRAY_SIZE = 200;
    function baseUniq(array, iteratee, comparator) {
      var index2 = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      } else if (length >= LARGE_ARRAY_SIZE) {
        var set2 = iteratee ? null : createSet(array);
        if (set2) {
          return setToArray(set2);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache();
      } else {
        seen = iteratee ? [] : result;
      }
      outer:
        while (++index2 < length) {
          var value = array[index2], computed = iteratee ? iteratee(value) : value;
          value = comparator || value !== 0 ? value : 0;
          if (isCommon && computed === computed) {
            var seenIndex = seen.length;
            while (seenIndex--) {
              if (seen[seenIndex] === computed) {
                continue outer;
              }
            }
            if (iteratee) {
              seen.push(computed);
            }
            result.push(value);
          } else if (!includes(seen, computed, comparator)) {
            if (seen !== result) {
              seen.push(computed);
            }
            result.push(value);
          }
        }
      return result;
    }
    module.exports = baseUniq;
  }
});

// node_modules/lodash/uniq.js
var require_uniq = __commonJS({
  "node_modules/lodash/uniq.js"(exports, module) {
    var baseUniq = require_baseUniq();
    function uniq2(array) {
      return array && array.length ? baseUniq(array) : [];
    }
    module.exports = uniq2;
  }
});

// node_modules/lodash/_isFlattenable.js
var require_isFlattenable = __commonJS({
  "node_modules/lodash/_isFlattenable.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var isArguments = require_isArguments();
    var isArray3 = require_isArray();
    var spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : void 0;
    function isFlattenable(value) {
      return isArray3(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
    }
    module.exports = isFlattenable;
  }
});

// node_modules/lodash/_baseFlatten.js
var require_baseFlatten = __commonJS({
  "node_modules/lodash/_baseFlatten.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var isFlattenable = require_isFlattenable();
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index2 = -1, length = array.length;
      predicate || (predicate = isFlattenable);
      result || (result = []);
      while (++index2 < length) {
        var value = array[index2];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }
    module.exports = baseFlatten;
  }
});

// node_modules/lodash/flatten.js
var require_flatten = __commonJS({
  "node_modules/lodash/flatten.js"(exports, module) {
    var baseFlatten = require_baseFlatten();
    function flatten2(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, 1) : [];
    }
    module.exports = flatten2;
  }
});

// node_modules/lodash/_baseSlice.js
var require_baseSlice = __commonJS({
  "node_modules/lodash/_baseSlice.js"(exports, module) {
    function baseSlice(array, start, end) {
      var index2 = -1, length = array.length;
      if (start < 0) {
        start = -start > length ? 0 : length + start;
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : end - start >>> 0;
      start >>>= 0;
      var result = Array(length);
      while (++index2 < length) {
        result[index2] = array[index2 + start];
      }
      return result;
    }
    module.exports = baseSlice;
  }
});

// node_modules/lodash/_castSlice.js
var require_castSlice = __commonJS({
  "node_modules/lodash/_castSlice.js"(exports, module) {
    var baseSlice = require_baseSlice();
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === void 0 ? length : end;
      return !start && end >= length ? array : baseSlice(array, start, end);
    }
    module.exports = castSlice;
  }
});

// node_modules/lodash/_hasUnicode.js
var require_hasUnicode = __commonJS({
  "node_modules/lodash/_hasUnicode.js"(exports, module) {
    var rsAstralRange = "\\ud800-\\udfff";
    var rsComboMarksRange = "\\u0300-\\u036f";
    var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
    var rsComboSymbolsRange = "\\u20d0-\\u20ff";
    var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
    var rsVarRange = "\\ufe0e\\ufe0f";
    var rsZWJ = "\\u200d";
    var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
    function hasUnicode(string) {
      return reHasUnicode.test(string);
    }
    module.exports = hasUnicode;
  }
});

// node_modules/lodash/_asciiToArray.js
var require_asciiToArray = __commonJS({
  "node_modules/lodash/_asciiToArray.js"(exports, module) {
    function asciiToArray(string) {
      return string.split("");
    }
    module.exports = asciiToArray;
  }
});

// node_modules/lodash/_unicodeToArray.js
var require_unicodeToArray = __commonJS({
  "node_modules/lodash/_unicodeToArray.js"(exports, module) {
    var rsAstralRange = "\\ud800-\\udfff";
    var rsComboMarksRange = "\\u0300-\\u036f";
    var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
    var rsComboSymbolsRange = "\\u20d0-\\u20ff";
    var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
    var rsVarRange = "\\ufe0e\\ufe0f";
    var rsAstral = "[" + rsAstralRange + "]";
    var rsCombo = "[" + rsComboRange + "]";
    var rsFitz = "\\ud83c[\\udffb-\\udfff]";
    var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
    var rsNonAstral = "[^" + rsAstralRange + "]";
    var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
    var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
    var rsZWJ = "\\u200d";
    var reOptMod = rsModifier + "?";
    var rsOptVar = "[" + rsVarRange + "]?";
    var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
    var rsSeq = rsOptVar + reOptMod + rsOptJoin;
    var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
    var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    function unicodeToArray(string) {
      return string.match(reUnicode) || [];
    }
    module.exports = unicodeToArray;
  }
});

// node_modules/lodash/_stringToArray.js
var require_stringToArray = __commonJS({
  "node_modules/lodash/_stringToArray.js"(exports, module) {
    var asciiToArray = require_asciiToArray();
    var hasUnicode = require_hasUnicode();
    var unicodeToArray = require_unicodeToArray();
    function stringToArray(string) {
      return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    module.exports = stringToArray;
  }
});

// node_modules/lodash/_createCaseFirst.js
var require_createCaseFirst = __commonJS({
  "node_modules/lodash/_createCaseFirst.js"(exports, module) {
    var castSlice = require_castSlice();
    var hasUnicode = require_hasUnicode();
    var stringToArray = require_stringToArray();
    var toString3 = require_toString();
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString3(string);
        var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0;
        var chr = strSymbols ? strSymbols[0] : string.charAt(0);
        var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
        return chr[methodName]() + trailing;
      };
    }
    module.exports = createCaseFirst;
  }
});

// node_modules/lodash/lowerFirst.js
var require_lowerFirst = __commonJS({
  "node_modules/lodash/lowerFirst.js"(exports, module) {
    var createCaseFirst = require_createCaseFirst();
    var lowerFirst2 = createCaseFirst("toLowerCase");
    module.exports = lowerFirst2;
  }
});

// node_modules/lodash/isEqual.js
var require_isEqual = __commonJS({
  "node_modules/lodash/isEqual.js"(exports, module) {
    var baseIsEqual = require_baseIsEqual();
    function isEqual2(value, other) {
      return baseIsEqual(value, other);
    }
    module.exports = isEqual2;
  }
});

// node_modules/lodash/_createBaseEach.js
var require_createBaseEach = __commonJS({
  "node_modules/lodash/_createBaseEach.js"(exports, module) {
    var isArrayLike = require_isArrayLike();
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length, index2 = fromRight ? length : -1, iterable = Object(collection);
        while (fromRight ? index2-- : ++index2 < length) {
          if (iteratee(iterable[index2], index2, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }
    module.exports = createBaseEach;
  }
});

// node_modules/lodash/_baseEach.js
var require_baseEach = __commonJS({
  "node_modules/lodash/_baseEach.js"(exports, module) {
    var baseForOwn = require_baseForOwn();
    var createBaseEach = require_createBaseEach();
    var baseEach = createBaseEach(baseForOwn);
    module.exports = baseEach;
  }
});

// node_modules/lodash/_baseMap.js
var require_baseMap = __commonJS({
  "node_modules/lodash/_baseMap.js"(exports, module) {
    var baseEach = require_baseEach();
    var isArrayLike = require_isArrayLike();
    function baseMap(collection, iteratee) {
      var index2 = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
      baseEach(collection, function(value, key, collection2) {
        result[++index2] = iteratee(value, key, collection2);
      });
      return result;
    }
    module.exports = baseMap;
  }
});

// node_modules/lodash/map.js
var require_map = __commonJS({
  "node_modules/lodash/map.js"(exports, module) {
    var arrayMap = require_arrayMap();
    var baseIteratee = require_baseIteratee();
    var baseMap = require_baseMap();
    var isArray3 = require_isArray();
    function map3(collection, iteratee) {
      var func = isArray3(collection) ? arrayMap : baseMap;
      return func(collection, baseIteratee(iteratee, 3));
    }
    module.exports = map3;
  }
});

// node_modules/lodash/_arrayEach.js
var require_arrayEach = __commonJS({
  "node_modules/lodash/_arrayEach.js"(exports, module) {
    function arrayEach(array, iteratee) {
      var index2 = -1, length = array == null ? 0 : array.length;
      while (++index2 < length) {
        if (iteratee(array[index2], index2, array) === false) {
          break;
        }
      }
      return array;
    }
    module.exports = arrayEach;
  }
});

// node_modules/lodash/_assignValue.js
var require_assignValue = __commonJS({
  "node_modules/lodash/_assignValue.js"(exports, module) {
    var baseAssignValue = require_baseAssignValue();
    var eq = require_eq();
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty2.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    module.exports = assignValue;
  }
});

// node_modules/lodash/_copyObject.js
var require_copyObject = __commonJS({
  "node_modules/lodash/_copyObject.js"(exports, module) {
    var assignValue = require_assignValue();
    var baseAssignValue = require_baseAssignValue();
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});
      var index2 = -1, length = props.length;
      while (++index2 < length) {
        var key = props[index2];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
        if (newValue === void 0) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }
    module.exports = copyObject;
  }
});

// node_modules/lodash/_baseAssign.js
var require_baseAssign = __commonJS({
  "node_modules/lodash/_baseAssign.js"(exports, module) {
    var copyObject = require_copyObject();
    var keys = require_keys();
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }
    module.exports = baseAssign;
  }
});

// node_modules/lodash/_nativeKeysIn.js
var require_nativeKeysIn = __commonJS({
  "node_modules/lodash/_nativeKeysIn.js"(exports, module) {
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = nativeKeysIn;
  }
});

// node_modules/lodash/_baseKeysIn.js
var require_baseKeysIn = __commonJS({
  "node_modules/lodash/_baseKeysIn.js"(exports, module) {
    var isObject = require_isObject();
    var isPrototype = require_isPrototype();
    var nativeKeysIn = require_nativeKeysIn();
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object), result = [];
      for (var key in object) {
        if (!(key == "constructor" && (isProto || !hasOwnProperty2.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = baseKeysIn;
  }
});

// node_modules/lodash/keysIn.js
var require_keysIn = __commonJS({
  "node_modules/lodash/keysIn.js"(exports, module) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeysIn = require_baseKeysIn();
    var isArrayLike = require_isArrayLike();
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }
    module.exports = keysIn;
  }
});

// node_modules/lodash/_baseAssignIn.js
var require_baseAssignIn = __commonJS({
  "node_modules/lodash/_baseAssignIn.js"(exports, module) {
    var copyObject = require_copyObject();
    var keysIn = require_keysIn();
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }
    module.exports = baseAssignIn;
  }
});

// node_modules/lodash/_cloneBuffer.js
var require_cloneBuffer = __commonJS({
  "node_modules/lodash/_cloneBuffer.js"(exports, module) {
    var root = require_root();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? root.Buffer : void 0;
    var allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    module.exports = cloneBuffer;
  }
});

// node_modules/lodash/_copyArray.js
var require_copyArray = __commonJS({
  "node_modules/lodash/_copyArray.js"(exports, module) {
    function copyArray(source, array) {
      var index2 = -1, length = source.length;
      array || (array = Array(length));
      while (++index2 < length) {
        array[index2] = source[index2];
      }
      return array;
    }
    module.exports = copyArray;
  }
});

// node_modules/lodash/_copySymbols.js
var require_copySymbols = __commonJS({
  "node_modules/lodash/_copySymbols.js"(exports, module) {
    var copyObject = require_copyObject();
    var getSymbols = require_getSymbols();
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }
    module.exports = copySymbols;
  }
});

// node_modules/lodash/_getSymbolsIn.js
var require_getSymbolsIn = __commonJS({
  "node_modules/lodash/_getSymbolsIn.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var getPrototype = require_getPrototype();
    var getSymbols = require_getSymbols();
    var stubArray = require_stubArray();
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };
    module.exports = getSymbolsIn;
  }
});

// node_modules/lodash/_copySymbolsIn.js
var require_copySymbolsIn = __commonJS({
  "node_modules/lodash/_copySymbolsIn.js"(exports, module) {
    var copyObject = require_copyObject();
    var getSymbolsIn = require_getSymbolsIn();
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }
    module.exports = copySymbolsIn;
  }
});

// node_modules/lodash/_getAllKeysIn.js
var require_getAllKeysIn = __commonJS({
  "node_modules/lodash/_getAllKeysIn.js"(exports, module) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbolsIn = require_getSymbolsIn();
    var keysIn = require_keysIn();
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }
    module.exports = getAllKeysIn;
  }
});

// node_modules/lodash/_initCloneArray.js
var require_initCloneArray = __commonJS({
  "node_modules/lodash/_initCloneArray.js"(exports, module) {
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    function initCloneArray(array) {
      var length = array.length, result = new array.constructor(length);
      if (length && typeof array[0] == "string" && hasOwnProperty2.call(array, "index")) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }
    module.exports = initCloneArray;
  }
});

// node_modules/lodash/_cloneArrayBuffer.js
var require_cloneArrayBuffer = __commonJS({
  "node_modules/lodash/_cloneArrayBuffer.js"(exports, module) {
    var Uint8Array2 = require_Uint8Array();
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
      return result;
    }
    module.exports = cloneArrayBuffer;
  }
});

// node_modules/lodash/_cloneDataView.js
var require_cloneDataView = __commonJS({
  "node_modules/lodash/_cloneDataView.js"(exports, module) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }
    module.exports = cloneDataView;
  }
});

// node_modules/lodash/_cloneRegExp.js
var require_cloneRegExp = __commonJS({
  "node_modules/lodash/_cloneRegExp.js"(exports, module) {
    var reFlags = /\w*$/;
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }
    module.exports = cloneRegExp;
  }
});

// node_modules/lodash/_cloneSymbol.js
var require_cloneSymbol = __commonJS({
  "node_modules/lodash/_cloneSymbol.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }
    module.exports = cloneSymbol;
  }
});

// node_modules/lodash/_cloneTypedArray.js
var require_cloneTypedArray = __commonJS({
  "node_modules/lodash/_cloneTypedArray.js"(exports, module) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    module.exports = cloneTypedArray;
  }
});

// node_modules/lodash/_initCloneByTag.js
var require_initCloneByTag = __commonJS({
  "node_modules/lodash/_initCloneByTag.js"(exports, module) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    var cloneDataView = require_cloneDataView();
    var cloneRegExp = require_cloneRegExp();
    var cloneSymbol = require_cloneSymbol();
    var cloneTypedArray = require_cloneTypedArray();
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);
        case boolTag:
        case dateTag:
          return new Ctor(+object);
        case dataViewTag:
          return cloneDataView(object, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
          return cloneTypedArray(object, isDeep);
        case mapTag:
          return new Ctor();
        case numberTag:
        case stringTag:
          return new Ctor(object);
        case regexpTag:
          return cloneRegExp(object);
        case setTag:
          return new Ctor();
        case symbolTag:
          return cloneSymbol(object);
      }
    }
    module.exports = initCloneByTag;
  }
});

// node_modules/lodash/_baseCreate.js
var require_baseCreate = __commonJS({
  "node_modules/lodash/_baseCreate.js"(exports, module) {
    var isObject = require_isObject();
    var objectCreate = Object.create;
    var baseCreate = /* @__PURE__ */ function() {
      function object() {
      }
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object();
        object.prototype = void 0;
        return result;
      };
    }();
    module.exports = baseCreate;
  }
});

// node_modules/lodash/_initCloneObject.js
var require_initCloneObject = __commonJS({
  "node_modules/lodash/_initCloneObject.js"(exports, module) {
    var baseCreate = require_baseCreate();
    var getPrototype = require_getPrototype();
    var isPrototype = require_isPrototype();
    function initCloneObject(object) {
      return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }
    module.exports = initCloneObject;
  }
});

// node_modules/lodash/_baseIsMap.js
var require_baseIsMap = __commonJS({
  "node_modules/lodash/_baseIsMap.js"(exports, module) {
    var getTag = require_getTag();
    var isObjectLike = require_isObjectLike();
    var mapTag = "[object Map]";
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }
    module.exports = baseIsMap;
  }
});

// node_modules/lodash/isMap.js
var require_isMap = __commonJS({
  "node_modules/lodash/isMap.js"(exports, module) {
    var baseIsMap = require_baseIsMap();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsMap = nodeUtil && nodeUtil.isMap;
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
    module.exports = isMap;
  }
});

// node_modules/lodash/_baseIsSet.js
var require_baseIsSet = __commonJS({
  "node_modules/lodash/_baseIsSet.js"(exports, module) {
    var getTag = require_getTag();
    var isObjectLike = require_isObjectLike();
    var setTag = "[object Set]";
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }
    module.exports = baseIsSet;
  }
});

// node_modules/lodash/isSet.js
var require_isSet = __commonJS({
  "node_modules/lodash/isSet.js"(exports, module) {
    var baseIsSet = require_baseIsSet();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsSet = nodeUtil && nodeUtil.isSet;
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
    module.exports = isSet;
  }
});

// node_modules/lodash/_baseClone.js
var require_baseClone = __commonJS({
  "node_modules/lodash/_baseClone.js"(exports, module) {
    var Stack = require_Stack();
    var arrayEach = require_arrayEach();
    var assignValue = require_assignValue();
    var baseAssign = require_baseAssign();
    var baseAssignIn = require_baseAssignIn();
    var cloneBuffer = require_cloneBuffer();
    var copyArray = require_copyArray();
    var copySymbols = require_copySymbols();
    var copySymbolsIn = require_copySymbolsIn();
    var getAllKeys = require_getAllKeys();
    var getAllKeysIn = require_getAllKeysIn();
    var getTag = require_getTag();
    var initCloneArray = require_initCloneArray();
    var initCloneByTag = require_initCloneByTag();
    var initCloneObject = require_initCloneObject();
    var isArray3 = require_isArray();
    var isBuffer = require_isBuffer();
    var isMap = require_isMap();
    var isObject = require_isObject();
    var isSet = require_isSet();
    var keys = require_keys();
    var keysIn = require_keysIn();
    var CLONE_DEEP_FLAG = 1;
    var CLONE_FLAT_FLAG = 2;
    var CLONE_SYMBOLS_FLAG = 4;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== void 0) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray3(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value), isFunc2 = tag == funcTag || tag == genTag;
        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || isFunc2 && !object) {
          result = isFlat || isFunc2 ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      stack || (stack = new Stack());
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);
      if (isSet(value)) {
        value.forEach(function(subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
      } else if (isMap(value)) {
        value.forEach(function(subValue, key2) {
          result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
        });
      }
      var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
      var props = isArr ? void 0 : keysFunc(value);
      arrayEach(props || value, function(subValue, key2) {
        if (props) {
          key2 = subValue;
          subValue = value[key2];
        }
        assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
      });
      return result;
    }
    module.exports = baseClone;
  }
});

// node_modules/lodash/cloneDeep.js
var require_cloneDeep = __commonJS({
  "node_modules/lodash/cloneDeep.js"(exports, module) {
    var baseClone = require_baseClone();
    var CLONE_DEEP_FLAG = 1;
    var CLONE_SYMBOLS_FLAG = 4;
    function cloneDeep2(value) {
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }
    module.exports = cloneDeep2;
  }
});

// node_modules/lodash/_apply.js
var require_apply = __commonJS({
  "node_modules/lodash/_apply.js"(exports, module) {
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    module.exports = apply;
  }
});

// node_modules/lodash/last.js
var require_last = __commonJS({
  "node_modules/lodash/last.js"(exports, module) {
    function last(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : void 0;
    }
    module.exports = last;
  }
});

// node_modules/lodash/_parent.js
var require_parent = __commonJS({
  "node_modules/lodash/_parent.js"(exports, module) {
    var baseGet = require_baseGet();
    var baseSlice = require_baseSlice();
    function parent(object, path) {
      return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
    }
    module.exports = parent;
  }
});

// node_modules/lodash/_baseInvoke.js
var require_baseInvoke = __commonJS({
  "node_modules/lodash/_baseInvoke.js"(exports, module) {
    var apply = require_apply();
    var castPath = require_castPath();
    var last = require_last();
    var parent = require_parent();
    var toKey = require_toKey();
    function baseInvoke(object, path, args) {
      path = castPath(path, object);
      object = parent(object, path);
      var func = object == null ? object : object[toKey(last(path))];
      return func == null ? void 0 : apply(func, object, args);
    }
    module.exports = baseInvoke;
  }
});

// node_modules/lodash/_overRest.js
var require_overRest = __commonJS({
  "node_modules/lodash/_overRest.js"(exports, module) {
    var apply = require_apply();
    var nativeMax = Math.max;
    function overRest(func, start, transform) {
      start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
      return function() {
        var args = arguments, index2 = -1, length = nativeMax(args.length - start, 0), array = Array(length);
        while (++index2 < length) {
          array[index2] = args[start + index2];
        }
        index2 = -1;
        var otherArgs = Array(start + 1);
        while (++index2 < start) {
          otherArgs[index2] = args[index2];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }
    module.exports = overRest;
  }
});

// node_modules/lodash/constant.js
var require_constant = __commonJS({
  "node_modules/lodash/constant.js"(exports, module) {
    function constant(value) {
      return function() {
        return value;
      };
    }
    module.exports = constant;
  }
});

// node_modules/lodash/_baseSetToString.js
var require_baseSetToString = __commonJS({
  "node_modules/lodash/_baseSetToString.js"(exports, module) {
    var constant = require_constant();
    var defineProperty = require_defineProperty();
    var identity = require_identity();
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant(string),
        "writable": true
      });
    };
    module.exports = baseSetToString;
  }
});

// node_modules/lodash/_shortOut.js
var require_shortOut = __commonJS({
  "node_modules/lodash/_shortOut.js"(exports, module) {
    var HOT_COUNT = 800;
    var HOT_SPAN = 16;
    var nativeNow = Date.now;
    function shortOut(func) {
      var count = 0, lastCalled = 0;
      return function() {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(void 0, arguments);
      };
    }
    module.exports = shortOut;
  }
});

// node_modules/lodash/_setToString.js
var require_setToString = __commonJS({
  "node_modules/lodash/_setToString.js"(exports, module) {
    var baseSetToString = require_baseSetToString();
    var shortOut = require_shortOut();
    var setToString = shortOut(baseSetToString);
    module.exports = setToString;
  }
});

// node_modules/lodash/_baseRest.js
var require_baseRest = __commonJS({
  "node_modules/lodash/_baseRest.js"(exports, module) {
    var identity = require_identity();
    var overRest = require_overRest();
    var setToString = require_setToString();
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + "");
    }
    module.exports = baseRest;
  }
});

// node_modules/lodash/invokeMap.js
var require_invokeMap = __commonJS({
  "node_modules/lodash/invokeMap.js"(exports, module) {
    var apply = require_apply();
    var baseEach = require_baseEach();
    var baseInvoke = require_baseInvoke();
    var baseRest = require_baseRest();
    var isArrayLike = require_isArrayLike();
    var invokeMap2 = baseRest(function(collection, path, args) {
      var index2 = -1, isFunc2 = typeof path == "function", result = isArrayLike(collection) ? Array(collection.length) : [];
      baseEach(collection, function(value) {
        result[++index2] = isFunc2 ? apply(path, value, args) : baseInvoke(value, path, args);
      });
      return result;
    });
    module.exports = invokeMap2;
  }
});

// node_modules/lodash/compact.js
var require_compact = __commonJS({
  "node_modules/lodash/compact.js"(exports, module) {
    function compact2(array) {
      var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index2 < length) {
        var value = array[index2];
        if (value) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    module.exports = compact2;
  }
});

// node_modules/lodash/_baseHas.js
var require_baseHas = __commonJS({
  "node_modules/lodash/_baseHas.js"(exports, module) {
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    function baseHas(object, key) {
      return object != null && hasOwnProperty2.call(object, key);
    }
    module.exports = baseHas;
  }
});

// node_modules/lodash/has.js
var require_has = __commonJS({
  "node_modules/lodash/has.js"(exports, module) {
    var baseHas = require_baseHas();
    var hasPath = require_hasPath();
    function has3(object, path) {
      return object != null && hasPath(object, path, baseHas);
    }
    module.exports = has3;
  }
});

// node_modules/lodash/_baseValues.js
var require_baseValues = __commonJS({
  "node_modules/lodash/_baseValues.js"(exports, module) {
    var arrayMap = require_arrayMap();
    function baseValues(object, props) {
      return arrayMap(props, function(key) {
        return object[key];
      });
    }
    module.exports = baseValues;
  }
});

// node_modules/lodash/values.js
var require_values = __commonJS({
  "node_modules/lodash/values.js"(exports, module) {
    var baseValues = require_baseValues();
    var keys = require_keys();
    function values2(object) {
      return object == null ? [] : baseValues(object, keys(object));
    }
    module.exports = values2;
  }
});

// node_modules/lodash/isEmpty.js
var require_isEmpty = __commonJS({
  "node_modules/lodash/isEmpty.js"(exports, module) {
    var baseKeys = require_baseKeys();
    var getTag = require_getTag();
    var isArguments = require_isArguments();
    var isArray3 = require_isArray();
    var isArrayLike = require_isArrayLike();
    var isBuffer = require_isBuffer();
    var isPrototype = require_isPrototype();
    var isTypedArray = require_isTypedArray();
    var mapTag = "[object Map]";
    var setTag = "[object Set]";
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    function isEmpty2(value) {
      if (value == null) {
        return true;
      }
      if (isArrayLike(value) && (isArray3(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
        return !value.length;
      }
      var tag = getTag(value);
      if (tag == mapTag || tag == setTag) {
        return !value.size;
      }
      if (isPrototype(value)) {
        return !baseKeys(value).length;
      }
      for (var key in value) {
        if (hasOwnProperty2.call(value, key)) {
          return false;
        }
      }
      return true;
    }
    module.exports = isEmpty2;
  }
});

// node_modules/lodash/uniqBy.js
var require_uniqBy = __commonJS({
  "node_modules/lodash/uniqBy.js"(exports, module) {
    var baseIteratee = require_baseIteratee();
    var baseUniq = require_baseUniq();
    function uniqBy2(array, iteratee) {
      return array && array.length ? baseUniq(array, baseIteratee(iteratee, 2)) : [];
    }
    module.exports = uniqBy2;
  }
});

// node_modules/lodash/_castFunction.js
var require_castFunction = __commonJS({
  "node_modules/lodash/_castFunction.js"(exports, module) {
    var identity = require_identity();
    function castFunction(value) {
      return typeof value == "function" ? value : identity;
    }
    module.exports = castFunction;
  }
});

// node_modules/lodash/forIn.js
var require_forIn = __commonJS({
  "node_modules/lodash/forIn.js"(exports, module) {
    var baseFor = require_baseFor();
    var castFunction = require_castFunction();
    var keysIn = require_keysIn();
    function forIn2(object, iteratee) {
      return object == null ? object : baseFor(object, castFunction(iteratee), keysIn);
    }
    module.exports = forIn2;
  }
});

// node_modules/lodash/_baseSet.js
var require_baseSet = __commonJS({
  "node_modules/lodash/_baseSet.js"(exports, module) {
    var assignValue = require_assignValue();
    var castPath = require_castPath();
    var isIndex = require_isIndex();
    var isObject = require_isObject();
    var toKey = require_toKey();
    function baseSet(object, path, value, customizer) {
      if (!isObject(object)) {
        return object;
      }
      path = castPath(path, object);
      var index2 = -1, length = path.length, lastIndex = length - 1, nested = object;
      while (nested != null && ++index2 < length) {
        var key = toKey(path[index2]), newValue = value;
        if (key === "__proto__" || key === "constructor" || key === "prototype") {
          return object;
        }
        if (index2 != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : void 0;
          if (newValue === void 0) {
            newValue = isObject(objValue) ? objValue : isIndex(path[index2 + 1]) ? [] : {};
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }
    module.exports = baseSet;
  }
});

// node_modules/lodash/_basePickBy.js
var require_basePickBy = __commonJS({
  "node_modules/lodash/_basePickBy.js"(exports, module) {
    var baseGet = require_baseGet();
    var baseSet = require_baseSet();
    var castPath = require_castPath();
    function basePickBy(object, paths, predicate) {
      var index2 = -1, length = paths.length, result = {};
      while (++index2 < length) {
        var path = paths[index2], value = baseGet(object, path);
        if (predicate(value, path)) {
          baseSet(result, castPath(path, object), value);
        }
      }
      return result;
    }
    module.exports = basePickBy;
  }
});

// node_modules/lodash/_basePick.js
var require_basePick = __commonJS({
  "node_modules/lodash/_basePick.js"(exports, module) {
    var basePickBy = require_basePickBy();
    var hasIn = require_hasIn();
    function basePick(object, paths) {
      return basePickBy(object, paths, function(value, path) {
        return hasIn(object, path);
      });
    }
    module.exports = basePick;
  }
});

// node_modules/lodash/_flatRest.js
var require_flatRest = __commonJS({
  "node_modules/lodash/_flatRest.js"(exports, module) {
    var flatten2 = require_flatten();
    var overRest = require_overRest();
    var setToString = require_setToString();
    function flatRest(func) {
      return setToString(overRest(func, void 0, flatten2), func + "");
    }
    module.exports = flatRest;
  }
});

// node_modules/lodash/pick.js
var require_pick = __commonJS({
  "node_modules/lodash/pick.js"(exports, module) {
    var basePick = require_basePick();
    var flatRest = require_flatRest();
    var pick2 = flatRest(function(object, paths) {
      return object == null ? {} : basePick(object, paths);
    });
    module.exports = pick2;
  }
});

// node_modules/lodash/_isIterateeCall.js
var require_isIterateeCall = __commonJS({
  "node_modules/lodash/_isIterateeCall.js"(exports, module) {
    var eq = require_eq();
    var isArrayLike = require_isArrayLike();
    var isIndex = require_isIndex();
    var isObject = require_isObject();
    function isIterateeCall(value, index2, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index2;
      if (type == "number" ? isArrayLike(object) && isIndex(index2, object.length) : type == "string" && index2 in object) {
        return eq(object[index2], value);
      }
      return false;
    }
    module.exports = isIterateeCall;
  }
});

// node_modules/lodash/_createAssigner.js
var require_createAssigner = __commonJS({
  "node_modules/lodash/_createAssigner.js"(exports, module) {
    var baseRest = require_baseRest();
    var isIterateeCall = require_isIterateeCall();
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index2 = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
        customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? void 0 : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index2 < length) {
          var source = sources[index2];
          if (source) {
            assigner(object, source, index2, customizer);
          }
        }
        return object;
      });
    }
    module.exports = createAssigner;
  }
});

// node_modules/lodash/assign.js
var require_assign = __commonJS({
  "node_modules/lodash/assign.js"(exports, module) {
    var assignValue = require_assignValue();
    var copyObject = require_copyObject();
    var createAssigner = require_createAssigner();
    var isArrayLike = require_isArrayLike();
    var isPrototype = require_isPrototype();
    var keys = require_keys();
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    var assign2 = createAssigner(function(object, source) {
      if (isPrototype(source) || isArrayLike(source)) {
        copyObject(source, keys(source), object);
        return;
      }
      for (var key in source) {
        if (hasOwnProperty2.call(source, key)) {
          assignValue(object, key, source[key]);
        }
      }
    });
    module.exports = assign2;
  }
});

// node_modules/lodash/_createFind.js
var require_createFind = __commonJS({
  "node_modules/lodash/_createFind.js"(exports, module) {
    var baseIteratee = require_baseIteratee();
    var isArrayLike = require_isArrayLike();
    var keys = require_keys();
    function createFind(findIndexFunc) {
      return function(collection, predicate, fromIndex) {
        var iterable = Object(collection);
        if (!isArrayLike(collection)) {
          var iteratee = baseIteratee(predicate, 3);
          collection = keys(collection);
          predicate = function(key) {
            return iteratee(iterable[key], key, iterable);
          };
        }
        var index2 = findIndexFunc(collection, predicate, fromIndex);
        return index2 > -1 ? iterable[iteratee ? collection[index2] : index2] : void 0;
      };
    }
    module.exports = createFind;
  }
});

// node_modules/lodash/_trimmedEndIndex.js
var require_trimmedEndIndex = __commonJS({
  "node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
    var reWhitespace = /\s/;
    function trimmedEndIndex(string) {
      var index2 = string.length;
      while (index2-- && reWhitespace.test(string.charAt(index2))) {
      }
      return index2;
    }
    module.exports = trimmedEndIndex;
  }
});

// node_modules/lodash/_baseTrim.js
var require_baseTrim = __commonJS({
  "node_modules/lodash/_baseTrim.js"(exports, module) {
    var trimmedEndIndex = require_trimmedEndIndex();
    var reTrimStart = /^\s+/;
    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    module.exports = baseTrim;
  }
});

// node_modules/lodash/toNumber.js
var require_toNumber = __commonJS({
  "node_modules/lodash/toNumber.js"(exports, module) {
    var baseTrim = require_baseTrim();
    var isObject = require_isObject();
    var isSymbol = require_isSymbol();
    var NAN = 0 / 0;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = toNumber;
  }
});

// node_modules/lodash/toFinite.js
var require_toFinite = __commonJS({
  "node_modules/lodash/toFinite.js"(exports, module) {
    var toNumber = require_toNumber();
    var INFINITY = 1 / 0;
    var MAX_INTEGER = 17976931348623157e292;
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }
    module.exports = toFinite;
  }
});

// node_modules/lodash/toInteger.js
var require_toInteger = __commonJS({
  "node_modules/lodash/toInteger.js"(exports, module) {
    var toFinite = require_toFinite();
    function toInteger(value) {
      var result = toFinite(value), remainder = result % 1;
      return result === result ? remainder ? result - remainder : result : 0;
    }
    module.exports = toInteger;
  }
});

// node_modules/lodash/findIndex.js
var require_findIndex = __commonJS({
  "node_modules/lodash/findIndex.js"(exports, module) {
    var baseFindIndex = require_baseFindIndex();
    var baseIteratee = require_baseIteratee();
    var toInteger = require_toInteger();
    var nativeMax = Math.max;
    function findIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index2 = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index2 < 0) {
        index2 = nativeMax(length + index2, 0);
      }
      return baseFindIndex(array, baseIteratee(predicate, 3), index2);
    }
    module.exports = findIndex;
  }
});

// node_modules/lodash/find.js
var require_find = __commonJS({
  "node_modules/lodash/find.js"(exports, module) {
    var createFind = require_createFind();
    var findIndex = require_findIndex();
    var find2 = createFind(findIndex);
    module.exports = find2;
  }
});

// node_modules/lodash/isInteger.js
var require_isInteger = __commonJS({
  "node_modules/lodash/isInteger.js"(exports, module) {
    var toInteger = require_toInteger();
    function isInteger2(value) {
      return typeof value == "number" && value == toInteger(value);
    }
    module.exports = isInteger2;
  }
});

// node_modules/miragejs/dist/mirage-esm.js
var import_isPlainObject = __toESM(require_isPlainObject());
var import_isFunction = __toESM(require_isFunction());
var import_mapValues = __toESM(require_mapValues());
var import_uniq = __toESM(require_uniq());
var import_flatten = __toESM(require_flatten());

// node_modules/inflected/dist/esm/inflected.js
var toString = Object.prototype.toString;
function isFunc(obj) {
  return toString.call(obj) === "[object Function]";
}
var classCallCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
var createClass = /* @__PURE__ */ function() {
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
function icPart(str) {
  return str.split("").map(function(c) {
    return "(?:" + c.toUpperCase() + "|" + c.toLowerCase() + ")";
  }).join("");
}
function remove(arr, elem) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === elem) {
      Array.prototype.splice.call(arr, i, 1);
    }
  }
}
function hasProp(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
var instances = {};
var Inflector = function() {
  createClass(Inflector2, null, [{
    key: "getInstance",
    value: function getInstance(locale) {
      instances[locale] = instances[locale] || new Inflector2();
      return instances[locale];
    }
  }]);
  function Inflector2() {
    classCallCheck(this, Inflector2);
    this.plurals = [];
    this.singulars = [];
    this.uncountables = [];
    this.humans = [];
    this.acronyms = {};
    this.acronymRegex = /(?=a)b/;
  }
  createClass(Inflector2, [{
    key: "acronym",
    value: function acronym(word) {
      this.acronyms[word.toLowerCase()] = word;
      var values2 = [];
      for (var key in this.acronyms) {
        if (hasProp(this.acronyms, key)) {
          values2.push(this.acronyms[key]);
        }
      }
      this.acronymRegex = new RegExp(values2.join("|"));
    }
  }, {
    key: "plural",
    value: function plural(rule, replacement) {
      if (typeof rule === "string") {
        remove(this.uncountables, rule);
      }
      remove(this.uncountables, replacement);
      this.plurals.unshift([rule, replacement]);
    }
  }, {
    key: "singular",
    value: function singular(rule, replacement) {
      if (typeof rule === "string") {
        remove(this.uncountables, rule);
      }
      remove(this.uncountables, replacement);
      this.singulars.unshift([rule, replacement]);
    }
  }, {
    key: "irregular",
    value: function irregular(singular, plural) {
      remove(this.uncountables, singular);
      remove(this.uncountables, plural);
      var s0 = singular[0];
      var sRest = singular.substr(1);
      var p0 = plural[0];
      var pRest = plural.substr(1);
      if (s0.toUpperCase() === p0.toUpperCase()) {
        this.plural(new RegExp("(" + s0 + ")" + sRest + "$", "i"), "$1" + pRest);
        this.plural(new RegExp("(" + p0 + ")" + pRest + "$", "i"), "$1" + pRest);
        this.singular(new RegExp("(" + s0 + ")" + sRest + "$", "i"), "$1" + sRest);
        this.singular(new RegExp("(" + p0 + ")" + pRest + "$", "i"), "$1" + sRest);
      } else {
        var sRestIC = icPart(sRest);
        var pRestIC = icPart(pRest);
        this.plural(new RegExp(s0.toUpperCase() + sRestIC + "$"), p0.toUpperCase() + pRest);
        this.plural(new RegExp(s0.toLowerCase() + sRestIC + "$"), p0.toLowerCase() + pRest);
        this.plural(new RegExp(p0.toUpperCase() + pRestIC + "$"), p0.toUpperCase() + pRest);
        this.plural(new RegExp(p0.toLowerCase() + pRestIC + "$"), p0.toLowerCase() + pRest);
        this.singular(new RegExp(s0.toUpperCase() + sRestIC + "$"), s0.toUpperCase() + sRest);
        this.singular(new RegExp(s0.toLowerCase() + sRestIC + "$"), s0.toLowerCase() + sRest);
        this.singular(new RegExp(p0.toUpperCase() + pRestIC + "$"), s0.toUpperCase() + sRest);
        this.singular(new RegExp(p0.toLowerCase() + pRestIC + "$"), s0.toLowerCase() + sRest);
      }
    }
  }, {
    key: "uncountable",
    value: function uncountable() {
      for (var _len = arguments.length, words = Array(_len), _key = 0; _key < _len; _key++) {
        words[_key] = arguments[_key];
      }
      this.uncountables = this.uncountables.concat(words);
    }
  }, {
    key: "human",
    value: function human(rule, replacement) {
      this.humans.unshift([rule, replacement]);
    }
  }, {
    key: "clear",
    value: function clear() {
      var scope = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "all";
      if (scope === "all") {
        this.plurals = [];
        this.singulars = [];
        this.uncountables = [];
        this.humans = [];
      } else {
        this[scope] = [];
      }
    }
  }]);
  return Inflector2;
}();
function en(inflector) {
  inflector.plural(/$/, "s");
  inflector.plural(/s$/i, "s");
  inflector.plural(/^(ax|test)is$/i, "$1es");
  inflector.plural(/(octop|vir)us$/i, "$1i");
  inflector.plural(/(octop|vir)i$/i, "$1i");
  inflector.plural(/(alias|status)$/i, "$1es");
  inflector.plural(/(bu)s$/i, "$1ses");
  inflector.plural(/(buffal|tomat)o$/i, "$1oes");
  inflector.plural(/([ti])um$/i, "$1a");
  inflector.plural(/([ti])a$/i, "$1a");
  inflector.plural(/sis$/i, "ses");
  inflector.plural(/(?:([^f])fe|([lr])f)$/i, "$1$2ves");
  inflector.plural(/(hive)$/i, "$1s");
  inflector.plural(/([^aeiouy]|qu)y$/i, "$1ies");
  inflector.plural(/(x|ch|ss|sh)$/i, "$1es");
  inflector.plural(/(matr|vert|ind)(?:ix|ex)$/i, "$1ices");
  inflector.plural(/^(m|l)ouse$/i, "$1ice");
  inflector.plural(/^(m|l)ice$/i, "$1ice");
  inflector.plural(/^(ox)$/i, "$1en");
  inflector.plural(/^(oxen)$/i, "$1");
  inflector.plural(/(quiz)$/i, "$1zes");
  inflector.singular(/s$/i, "");
  inflector.singular(/(ss)$/i, "$1");
  inflector.singular(/(n)ews$/i, "$1ews");
  inflector.singular(/([ti])a$/i, "$1um");
  inflector.singular(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(sis|ses)$/i, "$1sis");
  inflector.singular(/(^analy)(sis|ses)$/i, "$1sis");
  inflector.singular(/([^f])ves$/i, "$1fe");
  inflector.singular(/(hive)s$/i, "$1");
  inflector.singular(/(tive)s$/i, "$1");
  inflector.singular(/([lr])ves$/i, "$1f");
  inflector.singular(/([^aeiouy]|qu)ies$/i, "$1y");
  inflector.singular(/(s)eries$/i, "$1eries");
  inflector.singular(/(m)ovies$/i, "$1ovie");
  inflector.singular(/(x|ch|ss|sh)es$/i, "$1");
  inflector.singular(/^(m|l)ice$/i, "$1ouse");
  inflector.singular(/(bus)(es)?$/i, "$1");
  inflector.singular(/(o)es$/i, "$1");
  inflector.singular(/(shoe)s$/i, "$1");
  inflector.singular(/(cris|test)(is|es)$/i, "$1is");
  inflector.singular(/^(a)x[ie]s$/i, "$1xis");
  inflector.singular(/(octop|vir)(us|i)$/i, "$1us");
  inflector.singular(/(alias|status)(es)?$/i, "$1");
  inflector.singular(/^(ox)en/i, "$1");
  inflector.singular(/(vert|ind)ices$/i, "$1ex");
  inflector.singular(/(matr)ices$/i, "$1ix");
  inflector.singular(/(quiz)zes$/i, "$1");
  inflector.singular(/(database)s$/i, "$1");
  inflector.irregular("person", "people");
  inflector.irregular("man", "men");
  inflector.irregular("child", "children");
  inflector.irregular("sex", "sexes");
  inflector.irregular("move", "moves");
  inflector.irregular("zombie", "zombies");
  inflector.uncountable("equipment", "information", "rice", "money", "species", "series", "fish", "sheep", "jeans", "police");
}
var defaults$1 = {
  en
};
function inflections(locale, fn) {
  if (isFunc(locale)) {
    fn = locale;
    locale = null;
  }
  locale = locale || "en";
  if (fn) {
    fn(Inflector.getInstance(locale));
  } else {
    return Inflector.getInstance(locale);
  }
}
for (locale in defaults$1) {
  inflections(locale, defaults$1[locale]);
}
var locale;
function applyInflections(word, rules2) {
  var result = "" + word, rule, regex2, replacement;
  if (result.length === 0) {
    return result;
  } else {
    var match2 = result.toLowerCase().match(/\b\w+$/);
    if (match2 && inflections().uncountables.indexOf(match2[0]) > -1) {
      return result;
    } else {
      for (var i = 0, ii = rules2.length; i < ii; i++) {
        rule = rules2[i];
        regex2 = rule[0];
        replacement = rule[1];
        if (result.match(regex2)) {
          result = result.replace(regex2, replacement);
          break;
        }
      }
      return result;
    }
  }
}
function pluralize(word) {
  var locale = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en";
  return applyInflections(word, inflections(locale).plurals);
}
function singularize(word) {
  var locale = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en";
  return applyInflections(word, inflections(locale).singulars);
}
function capitalize(str) {
  var result = str === null || str === void 0 ? "" : String(str);
  return result.charAt(0).toUpperCase() + result.slice(1);
}
function camelize(term, uppercaseFirstLetter) {
  if (uppercaseFirstLetter === null || uppercaseFirstLetter === void 0) {
    uppercaseFirstLetter = true;
  }
  var result = "" + term;
  if (uppercaseFirstLetter) {
    result = result.replace(/^[a-z\d]*/, function(a) {
      return inflections().acronyms[a] || capitalize(a);
    });
  } else {
    result = result.replace(new RegExp("^(?:" + inflections().acronymRegex.source + "(?=\\b|[A-Z_])|\\w)"), function(a) {
      return a.toLowerCase();
    });
  }
  result = result.replace(/(?:_|(\/))([a-z\d]*)/gi, function(match2, a, b, idx, string) {
    a || (a = "");
    return "" + a + (inflections().acronyms[b] || capitalize(b));
  });
  return result;
}
function underscore(camelCasedWord) {
  var result = "" + camelCasedWord;
  result = result.replace(new RegExp("(?:([A-Za-z\\d])|^)(" + inflections().acronymRegex.source + ")(?=\\b|[^a-z])", "g"), function(match2, $1, $2) {
    return "" + ($1 || "") + ($1 ? "_" : "") + $2.toLowerCase();
  });
  result = result.replace(/([A-Z\d]+)([A-Z][a-z])/g, "$1_$2");
  result = result.replace(/([a-z\d])([A-Z])/g, "$1_$2");
  result = result.replace(/-/g, "_");
  return result.toLowerCase();
}
function dasherize(underscoredWord) {
  return underscoredWord.replace(/_/g, "-");
}
var DEFAULT_APPROXIMATIONS = {
  "À": "A",
  "Á": "A",
  "Â": "A",
  "Ã": "A",
  "Ä": "A",
  "Å": "A",
  "Æ": "AE",
  "Ç": "C",
  "È": "E",
  "É": "E",
  "Ê": "E",
  "Ë": "E",
  "Ì": "I",
  "Í": "I",
  "Î": "I",
  "Ï": "I",
  "Ð": "D",
  "Ñ": "N",
  "Ò": "O",
  "Ó": "O",
  "Ô": "O",
  "Õ": "O",
  "Ö": "O",
  "×": "x",
  "Ø": "O",
  "Ù": "U",
  "Ú": "U",
  "Û": "U",
  "Ü": "U",
  "Ý": "Y",
  "Þ": "Th",
  "ß": "ss",
  "à": "a",
  "á": "a",
  "â": "a",
  "ã": "a",
  "ä": "a",
  "å": "a",
  "æ": "ae",
  "ç": "c",
  "è": "e",
  "é": "e",
  "ê": "e",
  "ë": "e",
  "ì": "i",
  "í": "i",
  "î": "i",
  "ï": "i",
  "ð": "d",
  "ñ": "n",
  "ò": "o",
  "ó": "o",
  "ô": "o",
  "õ": "o",
  "ö": "o",
  "ø": "o",
  "ù": "u",
  "ú": "u",
  "û": "u",
  "ü": "u",
  "ý": "y",
  "þ": "th",
  "ÿ": "y",
  "Ā": "A",
  "ā": "a",
  "Ă": "A",
  "ă": "a",
  "Ą": "A",
  "ą": "a",
  "Ć": "C",
  "ć": "c",
  "Ĉ": "C",
  "ĉ": "c",
  "Ċ": "C",
  "ċ": "c",
  "Č": "C",
  "č": "c",
  "Ď": "D",
  "ď": "d",
  "Đ": "D",
  "đ": "d",
  "Ē": "E",
  "ē": "e",
  "Ĕ": "E",
  "ĕ": "e",
  "Ė": "E",
  "ė": "e",
  "Ę": "E",
  "ę": "e",
  "Ě": "E",
  "ě": "e",
  "Ĝ": "G",
  "ĝ": "g",
  "Ğ": "G",
  "ğ": "g",
  "Ġ": "G",
  "ġ": "g",
  "Ģ": "G",
  "ģ": "g",
  "Ĥ": "H",
  "ĥ": "h",
  "Ħ": "H",
  "ħ": "h",
  "Ĩ": "I",
  "ĩ": "i",
  "Ī": "I",
  "ī": "i",
  "Ĭ": "I",
  "ĭ": "i",
  "Į": "I",
  "į": "i",
  "İ": "I",
  "ı": "i",
  "Ĳ": "IJ",
  "ĳ": "ij",
  "Ĵ": "J",
  "ĵ": "j",
  "Ķ": "K",
  "ķ": "k",
  "ĸ": "k",
  "Ĺ": "L",
  "ĺ": "l",
  "Ļ": "L",
  "ļ": "l",
  "Ľ": "L",
  "ľ": "l",
  "Ŀ": "L",
  "ŀ": "l",
  "Ł": "L",
  "ł": "l",
  "Ń": "N",
  "ń": "n",
  "Ņ": "N",
  "ņ": "n",
  "Ň": "N",
  "ň": "n",
  "ŉ": "'n",
  "Ŋ": "NG",
  "ŋ": "ng",
  "Ō": "O",
  "ō": "o",
  "Ŏ": "O",
  "ŏ": "o",
  "Ő": "O",
  "ő": "o",
  "Œ": "OE",
  "œ": "oe",
  "Ŕ": "R",
  "ŕ": "r",
  "Ŗ": "R",
  "ŗ": "r",
  "Ř": "R",
  "ř": "r",
  "Ś": "S",
  "ś": "s",
  "Ŝ": "S",
  "ŝ": "s",
  "Ş": "S",
  "ş": "s",
  "Š": "S",
  "š": "s",
  "Ţ": "T",
  "ţ": "t",
  "Ť": "T",
  "ť": "t",
  "Ŧ": "T",
  "ŧ": "t",
  "Ũ": "U",
  "ũ": "u",
  "Ū": "U",
  "ū": "u",
  "Ŭ": "U",
  "ŭ": "u",
  "Ů": "U",
  "ů": "u",
  "Ű": "U",
  "ű": "u",
  "Ų": "U",
  "ų": "u",
  "Ŵ": "W",
  "ŵ": "w",
  "Ŷ": "Y",
  "ŷ": "y",
  "Ÿ": "Y",
  "Ź": "Z",
  "ź": "z",
  "Ż": "Z",
  "ż": "z",
  "Ž": "Z",
  "ž": "z",
  "А": "A",
  "Б": "B",
  "В": "V",
  "Г": "G",
  "Д": "D",
  "Е": "E",
  "Ё": "E",
  "Ж": "ZH",
  "З": "Z",
  "И": "I",
  "Й": "J",
  "К": "K",
  "Л": "L",
  "М": "M",
  "Н": "N",
  "О": "O",
  "П": "P",
  "Р": "R",
  "С": "S",
  "Т": "T",
  "У": "U",
  "Ф": "F",
  "Х": "KH",
  "Ц": "C",
  "Ч": "CH",
  "Ш": "SH",
  "Щ": "SHCH",
  "Ъ": "",
  "Ы": "Y",
  "Ь": "",
  "Э": "E",
  "Ю": "YU",
  "Я": "YA",
  "а": "a",
  "б": "b",
  "в": "v",
  "г": "g",
  "д": "d",
  "е": "e",
  "ё": "e",
  "ж": "zh",
  "з": "z",
  "и": "i",
  "й": "j",
  "к": "k",
  "л": "l",
  "м": "m",
  "н": "n",
  "о": "o",
  "п": "p",
  "р": "r",
  "с": "s",
  "т": "t",
  "у": "u",
  "ф": "f",
  "х": "kh",
  "ц": "c",
  "ч": "ch",
  "ш": "sh",
  "щ": "shch",
  "ъ": "",
  "ы": "y",
  "ь": "",
  "э": "e",
  "ю": "yu",
  "я": "ya"
};
var DEFAULT_REPLACEMENT_CHAR = "?";
var instances$1 = {};
var Transliterator = function() {
  createClass(Transliterator2, null, [{
    key: "getInstance",
    value: function getInstance(locale) {
      instances$1[locale] = instances$1[locale] || new Transliterator2();
      return instances$1[locale];
    }
  }]);
  function Transliterator2() {
    classCallCheck(this, Transliterator2);
    this.approximations = {};
    for (var char in DEFAULT_APPROXIMATIONS) {
      this.approximate(char, DEFAULT_APPROXIMATIONS[char]);
    }
  }
  createClass(Transliterator2, [{
    key: "approximate",
    value: function approximate(char, replacement) {
      this.approximations[char] = replacement;
    }
  }, {
    key: "transliterate",
    value: function transliterate(string, replacement) {
      var _this = this;
      return string.replace(/[^\u0000-\u007f]/g, function(c) {
        return _this.approximations[c] || replacement || DEFAULT_REPLACEMENT_CHAR;
      });
    }
  }]);
  return Transliterator2;
}();

// node_modules/miragejs/dist/mirage-esm.js
var import_lowerFirst = __toESM(require_lowerFirst());
var import_isEqual = __toESM(require_isEqual());
var import_map = __toESM(require_map());
var import_cloneDeep = __toESM(require_cloneDeep());
var import_invokeMap = __toESM(require_invokeMap());
var import_compact = __toESM(require_compact());
var import_has = __toESM(require_has());
var import_values = __toESM(require_values());
var import_isEmpty = __toESM(require_isEmpty());
var import_get = __toESM(require_get());
var import_uniqBy = __toESM(require_uniqBy());
var import_forIn = __toESM(require_forIn());
var import_pick = __toESM(require_pick());
var import_assign = __toESM(require_assign());
var import_find = __toESM(require_find());
var import_isInteger = __toESM(require_isInteger());

// node_modules/@miragejs/pretender-node-polyfill/before.js
if (typeof global !== "undefined" && typeof global.self === "undefined") {
  global.self = {};
  global.__pretenderNodePolyfill = true;
}

// node_modules/route-recognizer/dist/route-recognizer.es.js
var createObject = Object.create;
function createMap() {
  var map3 = createObject(null);
  map3["__"] = void 0;
  delete map3["__"];
  return map3;
}
var Target = function Target2(path, matcher, delegate) {
  this.path = path;
  this.matcher = matcher;
  this.delegate = delegate;
};
Target.prototype.to = function to(target, callback) {
  var delegate = this.delegate;
  if (delegate && delegate.willAddRoute) {
    target = delegate.willAddRoute(this.matcher.target, target);
  }
  this.matcher.add(this.path, target);
  if (callback) {
    if (callback.length === 0) {
      throw new Error("You must have an argument in the function passed to `to`");
    }
    this.matcher.addChild(this.path, target, callback, this.delegate);
  }
};
var Matcher = function Matcher2(target) {
  this.routes = createMap();
  this.children = createMap();
  this.target = target;
};
Matcher.prototype.add = function add(path, target) {
  this.routes[path] = target;
};
Matcher.prototype.addChild = function addChild(path, target, callback, delegate) {
  var matcher = new Matcher(target);
  this.children[path] = matcher;
  var match2 = generateMatch(path, matcher, delegate);
  if (delegate && delegate.contextEntered) {
    delegate.contextEntered(target, match2);
  }
  callback(match2);
};
function generateMatch(startingPath, matcher, delegate) {
  function match2(path, callback) {
    var fullPath = startingPath + path;
    if (callback) {
      callback(generateMatch(fullPath, matcher, delegate));
    } else {
      return new Target(fullPath, matcher, delegate);
    }
  }
  return match2;
}
function addRoute(routeArray, path, handler) {
  var len = 0;
  for (var i = 0; i < routeArray.length; i++) {
    len += routeArray[i].path.length;
  }
  path = path.substr(len);
  var route = { path, handler };
  routeArray.push(route);
}
function eachRoute(baseRoute, matcher, callback, binding) {
  var routes = matcher.routes;
  var paths = Object.keys(routes);
  for (var i = 0; i < paths.length; i++) {
    var path = paths[i];
    var routeArray = baseRoute.slice();
    addRoute(routeArray, path, routes[path]);
    var nested = matcher.children[path];
    if (nested) {
      eachRoute(routeArray, nested, callback, binding);
    } else {
      callback.call(binding, routeArray);
    }
  }
}
var map = function(callback, addRouteCallback) {
  var matcher = new Matcher();
  callback(generateMatch("", matcher, this.delegate));
  eachRoute([], matcher, function(routes) {
    if (addRouteCallback) {
      addRouteCallback(this, routes);
    } else {
      this.add(routes);
    }
  }, this);
};
function normalizePath(path) {
  return path.split("/").map(normalizeSegment).join("/");
}
var SEGMENT_RESERVED_CHARS = /%|\//g;
function normalizeSegment(segment) {
  if (segment.length < 3 || segment.indexOf("%") === -1) {
    return segment;
  }
  return decodeURIComponent(segment).replace(SEGMENT_RESERVED_CHARS, encodeURIComponent);
}
var PATH_SEGMENT_ENCODINGS = /%(?:2(?:4|6|B|C)|3(?:B|D|A)|40)/g;
function encodePathSegment(str) {
  return encodeURIComponent(str).replace(PATH_SEGMENT_ENCODINGS, decodeURIComponent);
}
var escapeRegex = /(\/|\.|\*|\+|\?|\||\(|\)|\[|\]|\{|\}|\\)/g;
var isArray = Array.isArray;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function getParam(params, key) {
  if (typeof params !== "object" || params === null) {
    throw new Error("You must pass an object as the second argument to `generate`.");
  }
  if (!hasOwnProperty.call(params, key)) {
    throw new Error("You must provide param `" + key + "` to `generate`.");
  }
  var value = params[key];
  var str = typeof value === "string" ? value : "" + value;
  if (str.length === 0) {
    throw new Error("You must provide a param `" + key + "`.");
  }
  return str;
}
var eachChar = [];
eachChar[
  0
  /* Static */
] = function(segment, currentState) {
  var state = currentState;
  var value = segment.value;
  for (var i = 0; i < value.length; i++) {
    var ch = value.charCodeAt(i);
    state = state.put(ch, false, false);
  }
  return state;
};
eachChar[
  1
  /* Dynamic */
] = function(_, currentState) {
  return currentState.put(47, true, true);
};
eachChar[
  2
  /* Star */
] = function(_, currentState) {
  return currentState.put(-1, false, true);
};
eachChar[
  4
  /* Epsilon */
] = function(_, currentState) {
  return currentState;
};
var regex = [];
regex[
  0
  /* Static */
] = function(segment) {
  return segment.value.replace(escapeRegex, "\\$1");
};
regex[
  1
  /* Dynamic */
] = function() {
  return "([^/]+)";
};
regex[
  2
  /* Star */
] = function() {
  return "(.+)";
};
regex[
  4
  /* Epsilon */
] = function() {
  return "";
};
var generate = [];
generate[
  0
  /* Static */
] = function(segment) {
  return segment.value;
};
generate[
  1
  /* Dynamic */
] = function(segment, params) {
  var value = getParam(params, segment.value);
  if (RouteRecognizer.ENCODE_AND_DECODE_PATH_SEGMENTS) {
    return encodePathSegment(value);
  } else {
    return value;
  }
};
generate[
  2
  /* Star */
] = function(segment, params) {
  return getParam(params, segment.value);
};
generate[
  4
  /* Epsilon */
] = function() {
  return "";
};
var EmptyObject = Object.freeze({});
var EmptyArray = Object.freeze([]);
function parse(segments, route, types) {
  if (route.length > 0 && route.charCodeAt(0) === 47) {
    route = route.substr(1);
  }
  var parts = route.split("/");
  var names = void 0;
  var shouldDecodes = void 0;
  for (var i = 0; i < parts.length; i++) {
    var part = parts[i];
    var flags = 0;
    var type = 0;
    if (part === "") {
      type = 4;
    } else if (part.charCodeAt(0) === 58) {
      type = 1;
    } else if (part.charCodeAt(0) === 42) {
      type = 2;
    } else {
      type = 0;
    }
    flags = 2 << type;
    if (flags & 12) {
      part = part.slice(1);
      names = names || [];
      names.push(part);
      shouldDecodes = shouldDecodes || [];
      shouldDecodes.push((flags & 4) !== 0);
    }
    if (flags & 14) {
      types[type]++;
    }
    segments.push({
      type,
      value: normalizeSegment(part)
    });
  }
  return {
    names: names || EmptyArray,
    shouldDecodes: shouldDecodes || EmptyArray
  };
}
function isEqualCharSpec(spec, char, negate) {
  return spec.char === char && spec.negate === negate;
}
var State = function State2(states, id, char, negate, repeat) {
  this.states = states;
  this.id = id;
  this.char = char;
  this.negate = negate;
  this.nextStates = repeat ? id : null;
  this.pattern = "";
  this._regex = void 0;
  this.handlers = void 0;
  this.types = void 0;
};
State.prototype.regex = function regex$1() {
  if (!this._regex) {
    this._regex = new RegExp(this.pattern);
  }
  return this._regex;
};
State.prototype.get = function get(char, negate) {
  var this$1 = this;
  var nextStates = this.nextStates;
  if (nextStates === null) {
    return;
  }
  if (isArray(nextStates)) {
    for (var i = 0; i < nextStates.length; i++) {
      var child = this$1.states[nextStates[i]];
      if (isEqualCharSpec(child, char, negate)) {
        return child;
      }
    }
  } else {
    var child$1 = this.states[nextStates];
    if (isEqualCharSpec(child$1, char, negate)) {
      return child$1;
    }
  }
};
State.prototype.put = function put(char, negate, repeat) {
  var state;
  if (state = this.get(char, negate)) {
    return state;
  }
  var states = this.states;
  state = new State(states, states.length, char, negate, repeat);
  states[states.length] = state;
  if (this.nextStates == null) {
    this.nextStates = state.id;
  } else if (isArray(this.nextStates)) {
    this.nextStates.push(state.id);
  } else {
    this.nextStates = [this.nextStates, state.id];
  }
  return state;
};
State.prototype.match = function match(ch) {
  var this$1 = this;
  var nextStates = this.nextStates;
  if (!nextStates) {
    return [];
  }
  var returned = [];
  if (isArray(nextStates)) {
    for (var i = 0; i < nextStates.length; i++) {
      var child = this$1.states[nextStates[i]];
      if (isMatch(child, ch)) {
        returned.push(child);
      }
    }
  } else {
    var child$1 = this.states[nextStates];
    if (isMatch(child$1, ch)) {
      returned.push(child$1);
    }
  }
  return returned;
};
function isMatch(spec, char) {
  return spec.negate ? spec.char !== char && spec.char !== -1 : spec.char === char || spec.char === -1;
}
function sortSolutions(states) {
  return states.sort(function(a, b) {
    var ref = a.types || [0, 0, 0];
    var astatics = ref[0];
    var adynamics = ref[1];
    var astars = ref[2];
    var ref$1 = b.types || [0, 0, 0];
    var bstatics = ref$1[0];
    var bdynamics = ref$1[1];
    var bstars = ref$1[2];
    if (astars !== bstars) {
      return astars - bstars;
    }
    if (astars) {
      if (astatics !== bstatics) {
        return bstatics - astatics;
      }
      if (adynamics !== bdynamics) {
        return bdynamics - adynamics;
      }
    }
    if (adynamics !== bdynamics) {
      return adynamics - bdynamics;
    }
    if (astatics !== bstatics) {
      return bstatics - astatics;
    }
    return 0;
  });
}
function recognizeChar(states, ch) {
  var nextStates = [];
  for (var i = 0, l = states.length; i < l; i++) {
    var state = states[i];
    nextStates = nextStates.concat(state.match(ch));
  }
  return nextStates;
}
var RecognizeResults = function RecognizeResults2(queryParams) {
  this.length = 0;
  this.queryParams = queryParams || {};
};
RecognizeResults.prototype.splice = Array.prototype.splice;
RecognizeResults.prototype.slice = Array.prototype.slice;
RecognizeResults.prototype.push = Array.prototype.push;
function findHandler(state, originalPath, queryParams) {
  var handlers = state.handlers;
  var regex2 = state.regex();
  if (!regex2 || !handlers) {
    throw new Error("state not initialized");
  }
  var captures = originalPath.match(regex2);
  var currentCapture = 1;
  var result = new RecognizeResults(queryParams);
  result.length = handlers.length;
  for (var i = 0; i < handlers.length; i++) {
    var handler = handlers[i];
    var names = handler.names;
    var shouldDecodes = handler.shouldDecodes;
    var params = EmptyObject;
    var isDynamic = false;
    if (names !== EmptyArray && shouldDecodes !== EmptyArray) {
      for (var j = 0; j < names.length; j++) {
        isDynamic = true;
        var name = names[j];
        var capture = captures && captures[currentCapture++];
        if (params === EmptyObject) {
          params = {};
        }
        if (RouteRecognizer.ENCODE_AND_DECODE_PATH_SEGMENTS && shouldDecodes[j]) {
          params[name] = capture && decodeURIComponent(capture);
        } else {
          params[name] = capture;
        }
      }
    }
    result[i] = {
      handler: handler.handler,
      params,
      isDynamic
    };
  }
  return result;
}
function decodeQueryParamPart(part) {
  part = part.replace(/\+/gm, "%20");
  var result;
  try {
    result = decodeURIComponent(part);
  } catch (error) {
    result = "";
  }
  return result;
}
var RouteRecognizer = function RouteRecognizer2() {
  this.names = createMap();
  var states = [];
  var state = new State(states, 0, -1, true, false);
  states[0] = state;
  this.states = states;
  this.rootState = state;
};
RouteRecognizer.prototype.add = function add2(routes, options) {
  var currentState = this.rootState;
  var pattern = "^";
  var types = [0, 0, 0];
  var handlers = new Array(routes.length);
  var allSegments = [];
  var isEmpty2 = true;
  var j = 0;
  for (var i = 0; i < routes.length; i++) {
    var route = routes[i];
    var ref = parse(allSegments, route.path, types);
    var names = ref.names;
    var shouldDecodes = ref.shouldDecodes;
    for (; j < allSegments.length; j++) {
      var segment = allSegments[j];
      if (segment.type === 4) {
        continue;
      }
      isEmpty2 = false;
      currentState = currentState.put(47, false, false);
      pattern += "/";
      currentState = eachChar[segment.type](segment, currentState);
      pattern += regex[segment.type](segment);
    }
    handlers[i] = {
      handler: route.handler,
      names,
      shouldDecodes
    };
  }
  if (isEmpty2) {
    currentState = currentState.put(47, false, false);
    pattern += "/";
  }
  currentState.handlers = handlers;
  currentState.pattern = pattern + "$";
  currentState.types = types;
  var name;
  if (typeof options === "object" && options !== null && options.as) {
    name = options.as;
  }
  if (name) {
    this.names[name] = {
      segments: allSegments,
      handlers
    };
  }
};
RouteRecognizer.prototype.handlersFor = function handlersFor(name) {
  var route = this.names[name];
  if (!route) {
    throw new Error("There is no route named " + name);
  }
  var result = new Array(route.handlers.length);
  for (var i = 0; i < route.handlers.length; i++) {
    var handler = route.handlers[i];
    result[i] = handler;
  }
  return result;
};
RouteRecognizer.prototype.hasRoute = function hasRoute(name) {
  return !!this.names[name];
};
RouteRecognizer.prototype.generate = function generate$1(name, params) {
  var route = this.names[name];
  var output = "";
  if (!route) {
    throw new Error("There is no route named " + name);
  }
  var segments = route.segments;
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment.type === 4) {
      continue;
    }
    output += "/";
    output += generate[segment.type](segment, params);
  }
  if (output.charAt(0) !== "/") {
    output = "/" + output;
  }
  if (params && params.queryParams) {
    output += this.generateQueryString(params.queryParams);
  }
  return output;
};
RouteRecognizer.prototype.generateQueryString = function generateQueryString(params) {
  var pairs = [];
  var keys = Object.keys(params);
  keys.sort();
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = params[key];
    if (value == null) {
      continue;
    }
    var pair = encodeURIComponent(key);
    if (isArray(value)) {
      for (var j = 0; j < value.length; j++) {
        var arrayPair = key + "[]=" + encodeURIComponent(value[j]);
        pairs.push(arrayPair);
      }
    } else {
      pair += "=" + encodeURIComponent(value);
      pairs.push(pair);
    }
  }
  if (pairs.length === 0) {
    return "";
  }
  return "?" + pairs.join("&");
};
RouteRecognizer.prototype.parseQueryString = function parseQueryString(queryString) {
  var pairs = queryString.split("&");
  var queryParams = {};
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split("="), key = decodeQueryParamPart(pair[0]), keyLength = key.length, isArray3 = false, value = void 0;
    if (pair.length === 1) {
      value = "true";
    } else {
      if (keyLength > 2 && key.slice(keyLength - 2) === "[]") {
        isArray3 = true;
        key = key.slice(0, keyLength - 2);
        if (!queryParams[key]) {
          queryParams[key] = [];
        }
      }
      value = pair[1] ? decodeQueryParamPart(pair[1]) : "";
    }
    if (isArray3) {
      queryParams[key].push(value);
    } else {
      queryParams[key] = value;
    }
  }
  return queryParams;
};
RouteRecognizer.prototype.recognize = function recognize(path) {
  var results;
  var states = [this.rootState];
  var queryParams = {};
  var isSlashDropped = false;
  var hashStart = path.indexOf("#");
  if (hashStart !== -1) {
    path = path.substr(0, hashStart);
  }
  var queryStart = path.indexOf("?");
  if (queryStart !== -1) {
    var queryString = path.substr(queryStart + 1, path.length);
    path = path.substr(0, queryStart);
    queryParams = this.parseQueryString(queryString);
  }
  if (path.charAt(0) !== "/") {
    path = "/" + path;
  }
  var originalPath = path;
  if (RouteRecognizer.ENCODE_AND_DECODE_PATH_SEGMENTS) {
    path = normalizePath(path);
  } else {
    path = decodeURI(path);
    originalPath = decodeURI(originalPath);
  }
  var pathLen = path.length;
  if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
    path = path.substr(0, pathLen - 1);
    originalPath = originalPath.substr(0, originalPath.length - 1);
    isSlashDropped = true;
  }
  for (var i = 0; i < path.length; i++) {
    states = recognizeChar(states, path.charCodeAt(i));
    if (!states.length) {
      break;
    }
  }
  var solutions = [];
  for (var i$1 = 0; i$1 < states.length; i$1++) {
    if (states[i$1].handlers) {
      solutions.push(states[i$1]);
    }
  }
  states = sortSolutions(solutions);
  var state = solutions[0];
  if (state && state.handlers) {
    if (isSlashDropped && state.pattern && state.pattern.slice(-5) === "(.+)$") {
      originalPath = originalPath + "/";
    }
    results = findHandler(state, originalPath, queryParams);
  }
  return results;
};
RouteRecognizer.VERSION = "0.3.4";
RouteRecognizer.ENCODE_AND_DECODE_PATH_SEGMENTS = true;
RouteRecognizer.Normalizer = {
  normalizeSegment,
  normalizePath,
  encodePathSegment
};
RouteRecognizer.prototype.map = map;
var route_recognizer_es_default = RouteRecognizer;

// node_modules/fake-xml-http-request/src/fake-xml-http-request.js
var _Event = function Event(type, bubbles, cancelable, target) {
  this.type = type;
  this.bubbles = bubbles;
  this.cancelable = cancelable;
  this.target = target;
};
_Event.prototype = {
  stopPropagation: function() {
  },
  preventDefault: function() {
    this.defaultPrevented = true;
  }
};
var httpStatusCodes = {
  100: "Continue",
  101: "Switching Protocols",
  200: "OK",
  201: "Created",
  202: "Accepted",
  203: "Non-Authoritative Information",
  204: "No Content",
  205: "Reset Content",
  206: "Partial Content",
  300: "Multiple Choice",
  301: "Moved Permanently",
  302: "Found",
  303: "See Other",
  304: "Not Modified",
  305: "Use Proxy",
  307: "Temporary Redirect",
  400: "Bad Request",
  401: "Unauthorized",
  402: "Payment Required",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  406: "Not Acceptable",
  407: "Proxy Authentication Required",
  408: "Request Timeout",
  409: "Conflict",
  410: "Gone",
  411: "Length Required",
  412: "Precondition Failed",
  413: "Request Entity Too Large",
  414: "Request-URI Too Long",
  415: "Unsupported Media Type",
  416: "Requested Range Not Satisfiable",
  417: "Expectation Failed",
  422: "Unprocessable Entity",
  500: "Internal Server Error",
  501: "Not Implemented",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout",
  505: "HTTP Version Not Supported"
};
function parseXML(text) {
  var xmlDoc;
  if (typeof DOMParser != "undefined") {
    var parser = new DOMParser();
    xmlDoc = parser.parseFromString(text, "text/xml");
  } else {
    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    xmlDoc.async = "false";
    xmlDoc.loadXML(text);
  }
  return xmlDoc;
}
var unsafeHeaders = {
  "Accept-Charset": true,
  "Accept-Encoding": true,
  "Connection": true,
  "Content-Length": true,
  "Cookie": true,
  "Cookie2": true,
  "Content-Transfer-Encoding": true,
  "Date": true,
  "Expect": true,
  "Host": true,
  "Keep-Alive": true,
  "Referer": true,
  "TE": true,
  "Trailer": true,
  "Transfer-Encoding": true,
  "Upgrade": true,
  "User-Agent": true,
  "Via": true
};
function _addEventListener(eventName, xhr) {
  xhr.addEventListener(eventName, function(event) {
    var listener = xhr["on" + eventName];
    if (listener && typeof listener == "function") {
      listener.call(event.target, event);
    }
  });
}
function EventedObject() {
  this._eventListeners = {};
  var events = ["loadstart", "progress", "load", "abort", "loadend"];
  for (var i = events.length - 1; i >= 0; i--) {
    _addEventListener(events[i], this);
  }
}
EventedObject.prototype = {
  /*
    Duplicates the behavior of native XMLHttpRequest's addEventListener function
  */
  addEventListener: function addEventListener(event, listener) {
    this._eventListeners[event] = this._eventListeners[event] || [];
    this._eventListeners[event].push(listener);
  },
  /*
    Duplicates the behavior of native XMLHttpRequest's removeEventListener function
  */
  removeEventListener: function removeEventListener(event, listener) {
    var listeners = this._eventListeners[event] || [];
    for (var i = 0, l = listeners.length; i < l; ++i) {
      if (listeners[i] == listener) {
        return listeners.splice(i, 1);
      }
    }
  },
  /*
    Duplicates the behavior of native XMLHttpRequest's dispatchEvent function
  */
  dispatchEvent: function dispatchEvent(event) {
    var type = event.type;
    var listeners = this._eventListeners[type] || [];
    for (var i = 0; i < listeners.length; i++) {
      if (typeof listeners[i] == "function") {
        listeners[i].call(this, event);
      } else {
        listeners[i].handleEvent(event);
      }
    }
    return !!event.defaultPrevented;
  },
  /*
    Triggers an `onprogress` event with the given parameters.
  */
  _progress: function _progress(lengthComputable, loaded, total) {
    var event = new _Event("progress");
    event.target = this;
    event.lengthComputable = lengthComputable;
    event.loaded = loaded;
    event.total = total;
    this.dispatchEvent(event);
  }
};
function FakeXMLHttpRequest() {
  EventedObject.call(this);
  this.readyState = FakeXMLHttpRequest.UNSENT;
  this.requestHeaders = {};
  this.requestBody = null;
  this.status = 0;
  this.statusText = "";
  this.upload = new EventedObject();
  this.onabort = null;
  this.onerror = null;
  this.onload = null;
  this.onloadend = null;
  this.onloadstart = null;
  this.onprogress = null;
  this.onreadystatechange = null;
  this.ontimeout = null;
}
FakeXMLHttpRequest.prototype = new EventedObject();
FakeXMLHttpRequest.UNSENT = 0;
FakeXMLHttpRequest.OPENED = 1;
FakeXMLHttpRequest.HEADERS_RECEIVED = 2;
FakeXMLHttpRequest.LOADING = 3;
FakeXMLHttpRequest.DONE = 4;
var FakeXMLHttpRequestProto = {
  UNSENT: 0,
  OPENED: 1,
  HEADERS_RECEIVED: 2,
  LOADING: 3,
  DONE: 4,
  async: true,
  withCredentials: false,
  /*
    Duplicates the behavior of native XMLHttpRequest's open function
  */
  open: function open(method, url, async, username, password) {
    this.method = method;
    this.url = url;
    this.async = typeof async == "boolean" ? async : true;
    this.username = username;
    this.password = password;
    this.responseText = null;
    this.response = this.responseText;
    this.responseXML = null;
    this.responseURL = url;
    this.requestHeaders = {};
    this.sendFlag = false;
    this._readyStateChange(FakeXMLHttpRequest.OPENED);
  },
  /*
    Duplicates the behavior of native XMLHttpRequest's setRequestHeader function
  */
  setRequestHeader: function setRequestHeader(header, value) {
    verifyState(this);
    if (unsafeHeaders[header] || /^(Sec-|Proxy-)/.test(header)) {
      throw new Error('Refused to set unsafe header "' + header + '"');
    }
    if (this.requestHeaders[header]) {
      this.requestHeaders[header] += "," + value;
    } else {
      this.requestHeaders[header] = value;
    }
  },
  /*
    Duplicates the behavior of native XMLHttpRequest's send function
  */
  send: function send(data) {
    verifyState(this);
    if (!/^(get|head)$/i.test(this.method)) {
      var hasContentTypeHeader = false;
      Object.keys(this.requestHeaders).forEach(function(key) {
        if (key.toLowerCase() === "content-type") {
          hasContentTypeHeader = true;
        }
      });
      if (!hasContentTypeHeader && !(data || "").toString().match("FormData")) {
        this.requestHeaders["Content-Type"] = "text/plain;charset=UTF-8";
      }
      this.requestBody = data;
    }
    this.errorFlag = false;
    this.sendFlag = this.async;
    this._readyStateChange(FakeXMLHttpRequest.OPENED);
    if (typeof this.onSend == "function") {
      this.onSend(this);
    }
    this.dispatchEvent(new _Event("loadstart", false, false, this));
  },
  /*
    Duplicates the behavior of native XMLHttpRequest's abort function
  */
  abort: function abort() {
    this.aborted = true;
    this.responseText = null;
    this.response = this.responseText;
    this.errorFlag = true;
    this.requestHeaders = {};
    this.dispatchEvent(new _Event("abort", false, false, this));
    if (this.readyState > FakeXMLHttpRequest.UNSENT && this.sendFlag) {
      this._readyStateChange(FakeXMLHttpRequest.UNSENT);
      this.sendFlag = false;
    }
    if (typeof this.onerror === "function") {
      this.onerror();
    }
  },
  /*
    Duplicates the behavior of native XMLHttpRequest's getResponseHeader function
  */
  getResponseHeader: function getResponseHeader(header) {
    if (this.readyState < FakeXMLHttpRequest.HEADERS_RECEIVED) {
      return null;
    }
    if (/^Set-Cookie2?$/i.test(header)) {
      return null;
    }
    header = header.toLowerCase();
    for (var h in this.responseHeaders) {
      if (h.toLowerCase() == header) {
        return this.responseHeaders[h];
      }
    }
    return null;
  },
  /*
    Duplicates the behavior of native XMLHttpRequest's getAllResponseHeaders function
  */
  getAllResponseHeaders: function getAllResponseHeaders() {
    if (this.readyState < FakeXMLHttpRequest.HEADERS_RECEIVED) {
      return "";
    }
    var headers = "";
    for (var header in this.responseHeaders) {
      if (this.responseHeaders.hasOwnProperty(header) && !/^Set-Cookie2?$/i.test(header)) {
        headers += header + ": " + this.responseHeaders[header] + "\r\n";
      }
    }
    return headers;
  },
  /*
   Duplicates the behavior of native XMLHttpRequest's overrideMimeType function
   */
  overrideMimeType: function overrideMimeType(mimeType) {
    if (typeof mimeType === "string") {
      this.forceMimeType = mimeType.toLowerCase();
    }
  },
  /*
    Places a FakeXMLHttpRequest object into the passed
    state.
  */
  _readyStateChange: function _readyStateChange(state) {
    this.readyState = state;
    if (typeof this.onreadystatechange == "function") {
      this.onreadystatechange(new _Event("readystatechange"));
    }
    this.dispatchEvent(new _Event("readystatechange"));
    if (this.readyState == FakeXMLHttpRequest.DONE) {
      this.dispatchEvent(new _Event("load", false, false, this));
    }
    if (this.readyState == FakeXMLHttpRequest.UNSENT || this.readyState == FakeXMLHttpRequest.DONE) {
      this.dispatchEvent(new _Event("loadend", false, false, this));
    }
  },
  /*
    Sets the FakeXMLHttpRequest object's response headers and
    places the object into readyState 2
  */
  _setResponseHeaders: function _setResponseHeaders(headers) {
    this.responseHeaders = {};
    for (var header in headers) {
      if (headers.hasOwnProperty(header)) {
        this.responseHeaders[header] = headers[header];
      }
    }
    if (this.forceMimeType) {
      this.responseHeaders["Content-Type"] = this.forceMimeType;
    }
    if (this.async) {
      this._readyStateChange(FakeXMLHttpRequest.HEADERS_RECEIVED);
    } else {
      this.readyState = FakeXMLHttpRequest.HEADERS_RECEIVED;
    }
  },
  /*
    Sets the FakeXMLHttpRequest object's response body and
    if body text is XML, sets responseXML to parsed document
    object
  */
  _setResponseBody: function _setResponseBody(body) {
    verifyRequestSent(this);
    verifyHeadersReceived(this);
    verifyResponseBodyType(body);
    var chunkSize = this.chunkSize || 10;
    var index2 = 0;
    this.responseText = "";
    this.response = this.responseText;
    do {
      if (this.async) {
        this._readyStateChange(FakeXMLHttpRequest.LOADING);
      }
      this.responseText += body.substring(index2, index2 + chunkSize);
      this.response = this.responseText;
      index2 += chunkSize;
    } while (index2 < body.length);
    var type = this.getResponseHeader("Content-Type");
    if (this.responseText && (!type || /(text\/xml)|(application\/xml)|(\+xml)/.test(type))) {
      try {
        this.responseXML = parseXML(this.responseText);
      } catch (e) {
      }
    }
    if (this.async) {
      this._readyStateChange(FakeXMLHttpRequest.DONE);
    } else {
      this.readyState = FakeXMLHttpRequest.DONE;
    }
  },
  /*
      Forces a response on to the FakeXMLHttpRequest object.
  
      This is the public API for faking responses. This function
      takes a number status, headers object, and string body:
  
      ```
      xhr.respond(404, {Content-Type: 'text/plain'}, "Sorry. This object was not found.")
  
      ```
    */
  respond: function respond(status, headers, body) {
    this._setResponseHeaders(headers || {});
    this.status = typeof status == "number" ? status : 200;
    this.statusText = httpStatusCodes[this.status];
    this._setResponseBody(body || "");
  }
};
for (property in FakeXMLHttpRequestProto) {
  FakeXMLHttpRequest.prototype[property] = FakeXMLHttpRequestProto[property];
}
var property;
function verifyState(xhr) {
  if (xhr.readyState !== FakeXMLHttpRequest.OPENED) {
    throw new Error("INVALID_STATE_ERR");
  }
  if (xhr.sendFlag) {
    throw new Error("INVALID_STATE_ERR");
  }
}
function verifyRequestSent(xhr) {
  if (xhr.readyState == FakeXMLHttpRequest.DONE) {
    throw new Error("Request done");
  }
}
function verifyHeadersReceived(xhr) {
  if (xhr.async && xhr.readyState != FakeXMLHttpRequest.HEADERS_RECEIVED) {
    throw new Error("No headers received");
  }
}
function verifyResponseBodyType(body) {
  if (typeof body != "string") {
    var error = new Error("Attempted to respond to fake XMLHttpRequest with " + body + ", which is not a string.");
    error.name = "InvalidBodyException";
    throw error;
  }
}
var fake_xml_http_request_default = FakeXMLHttpRequest;

// node_modules/pretender/dist/pretender.es.js
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var requiresPort = function required(port, protocol) {
  protocol = protocol.split(":")[0];
  port = +port;
  if (!port) return false;
  switch (protocol) {
    case "http":
    case "ws":
      return port !== 80;
    case "https":
    case "wss":
      return port !== 443;
    case "ftp":
      return port !== 21;
    case "gopher":
      return port !== 70;
    case "file":
      return false;
  }
  return port !== 0;
};
var has = Object.prototype.hasOwnProperty;
var undef;
function decode(input) {
  try {
    return decodeURIComponent(input.replace(/\+/g, " "));
  } catch (e) {
    return null;
  }
}
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g, result = {}, part;
  while (part = parser.exec(query)) {
    var key = decode(part[1]), value = decode(part[2]);
    if (key === null || value === null || key in result) continue;
    result[key] = value;
  }
  return result;
}
function querystringify(obj, prefix) {
  prefix = prefix || "";
  var pairs = [], value, key;
  if ("string" !== typeof prefix) prefix = "?";
  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key];
      if (!value && (value === null || value === undef || isNaN(value))) {
        value = "";
      }
      key = encodeURIComponent(key);
      value = encodeURIComponent(value);
      if (key === null || value === null) continue;
      pairs.push(key + "=" + value);
    }
  }
  return pairs.length ? prefix + pairs.join("&") : "";
}
var stringify = querystringify;
var parse2 = querystring;
var querystringify_1 = {
  stringify,
  parse: parse2
};
var slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;
var protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i;
var windowsDriveLetter = /^[a-zA-Z]:/;
var whitespace = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]";
var left = new RegExp("^" + whitespace + "+");
function trimLeft(str) {
  return (str ? str : "").toString().replace(left, "");
}
var rules = [
  ["#", "hash"],
  // Extract from the back.
  ["?", "query"],
  // Extract from the back.
  function sanitize(address, url) {
    return isSpecial(url.protocol) ? address.replace(/\\/g, "/") : address;
  },
  ["/", "pathname"],
  // Extract from the back.
  ["@", "auth", 1],
  // Extract from the front.
  [NaN, "host", void 0, 1, 1],
  // Set left over value.
  [/:(\d+)$/, "port", void 0, 1],
  // RegExp the back.
  [NaN, "hostname", void 0, 1, 1]
  // Set left over.
];
var ignore = { hash: 1, query: 1 };
function lolcation(loc) {
  var globalVar;
  if (typeof window !== "undefined") globalVar = window;
  else if (typeof commonjsGlobal !== "undefined") globalVar = commonjsGlobal;
  else if (typeof self !== "undefined") globalVar = self;
  else globalVar = {};
  var location = globalVar.location || {};
  loc = loc || location;
  var finaldestination = {}, type = typeof loc, key;
  if ("blob:" === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ("string" === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ("object" === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }
    if (finaldestination.slashes === void 0) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }
  return finaldestination;
}
function isSpecial(scheme) {
  return scheme === "file:" || scheme === "ftp:" || scheme === "http:" || scheme === "https:" || scheme === "ws:" || scheme === "wss:";
}
function extractProtocol(address, location) {
  address = trimLeft(address);
  location = location || {};
  var match2 = protocolre.exec(address);
  var protocol = match2[1] ? match2[1].toLowerCase() : "";
  var forwardSlashes = !!match2[2];
  var otherSlashes = !!match2[3];
  var slashesCount = 0;
  var rest;
  if (forwardSlashes) {
    if (otherSlashes) {
      rest = match2[2] + match2[3] + match2[4];
      slashesCount = match2[2].length + match2[3].length;
    } else {
      rest = match2[2] + match2[4];
      slashesCount = match2[2].length;
    }
  } else {
    if (otherSlashes) {
      rest = match2[3] + match2[4];
      slashesCount = match2[3].length;
    } else {
      rest = match2[4];
    }
  }
  if (protocol === "file:") {
    if (slashesCount >= 2) {
      rest = rest.slice(2);
    }
  } else if (isSpecial(protocol)) {
    rest = match2[4];
  } else if (protocol) {
    if (forwardSlashes) {
      rest = rest.slice(2);
    }
  } else if (slashesCount >= 2 && isSpecial(location.protocol)) {
    rest = match2[4];
  }
  return {
    protocol,
    slashes: forwardSlashes || isSpecial(protocol),
    slashesCount,
    rest
  };
}
function resolve(relative, base) {
  if (relative === "") return base;
  var path = (base || "/").split("/").slice(0, -1).concat(relative.split("/")), i = path.length, last = path[i - 1], unshift = false, up = 0;
  while (i--) {
    if (path[i] === ".") {
      path.splice(i, 1);
    } else if (path[i] === "..") {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }
  if (unshift) path.unshift("");
  if (last === "." || last === "..") path.push("");
  return path.join("/");
}
function Url(address, location, parser) {
  address = trimLeft(address);
  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }
  var relative, extracted, parse3, instruction, index2, key, instructions = rules.slice(), type = typeof location, url = this, i = 0;
  if ("object" !== type && "string" !== type) {
    parser = location;
    location = null;
  }
  if (parser && "function" !== typeof parser) parser = querystringify_1.parse;
  location = lolcation(location);
  extracted = extractProtocol(address || "", location);
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || "";
  address = extracted.rest;
  if (extracted.protocol === "file:" && (extracted.slashesCount !== 2 || windowsDriveLetter.test(address)) || !extracted.slashes && (extracted.protocol || extracted.slashesCount < 2 || !isSpecial(url.protocol))) {
    instructions[3] = [/(.*)/, "pathname"];
  }
  for (; i < instructions.length; i++) {
    instruction = instructions[i];
    if (typeof instruction === "function") {
      address = instruction(address, url);
      continue;
    }
    parse3 = instruction[0];
    key = instruction[1];
    if (parse3 !== parse3) {
      url[key] = address;
    } else if ("string" === typeof parse3) {
      if (~(index2 = address.indexOf(parse3))) {
        if ("number" === typeof instruction[2]) {
          url[key] = address.slice(0, index2);
          address = address.slice(index2 + instruction[2]);
        } else {
          url[key] = address.slice(index2);
          address = address.slice(0, index2);
        }
      }
    } else if (index2 = parse3.exec(address)) {
      url[key] = index2[1];
      address = address.slice(0, index2.index);
    }
    url[key] = url[key] || (relative && instruction[3] ? location[key] || "" : "");
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }
  if (parser) url.query = parser(url.query);
  if (relative && location.slashes && url.pathname.charAt(0) !== "/" && (url.pathname !== "" || location.pathname !== "")) {
    url.pathname = resolve(url.pathname, location.pathname);
  }
  if (url.pathname.charAt(0) !== "/" && isSpecial(url.protocol)) {
    url.pathname = "/" + url.pathname;
  }
  if (!requiresPort(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = "";
  }
  url.username = url.password = "";
  if (url.auth) {
    instruction = url.auth.split(":");
    url.username = instruction[0] || "";
    url.password = instruction[1] || "";
  }
  url.origin = url.protocol !== "file:" && isSpecial(url.protocol) && url.host ? url.protocol + "//" + url.host : "null";
  url.href = url.toString();
}
function set(part, value, fn) {
  var url = this;
  switch (part) {
    case "query":
      if ("string" === typeof value && value.length) {
        value = (fn || querystringify_1.parse)(value);
      }
      url[part] = value;
      break;
    case "port":
      url[part] = value;
      if (!requiresPort(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = "";
      } else if (value) {
        url.host = url.hostname + ":" + value;
      }
      break;
    case "hostname":
      url[part] = value;
      if (url.port) value += ":" + url.port;
      url.host = value;
      break;
    case "host":
      url[part] = value;
      if (/:\d+$/.test(value)) {
        value = value.split(":");
        url.port = value.pop();
        url.hostname = value.join(":");
      } else {
        url.hostname = value;
        url.port = "";
      }
      break;
    case "protocol":
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;
    case "pathname":
    case "hash":
      if (value) {
        var char = part === "pathname" ? "/" : "#";
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;
    default:
      url[part] = value;
  }
  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];
    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }
  url.origin = url.protocol !== "file:" && isSpecial(url.protocol) && url.host ? url.protocol + "//" + url.host : "null";
  url.href = url.toString();
  return url;
}
function toString2(stringify2) {
  if (!stringify2 || "function" !== typeof stringify2) stringify2 = querystringify_1.stringify;
  var query, url = this, protocol = url.protocol;
  if (protocol && protocol.charAt(protocol.length - 1) !== ":") protocol += ":";
  var result = protocol + (url.slashes || isSpecial(url.protocol) ? "//" : "");
  if (url.username) {
    result += url.username;
    if (url.password) result += ":" + url.password;
    result += "@";
  }
  result += url.host + url.pathname;
  query = "object" === typeof url.query ? stringify2(url.query) : url.query;
  if (query) result += "?" !== query.charAt(0) ? "?" + query : query;
  if (url.hash) result += url.hash;
  return result;
}
Url.prototype = { set, toString: toString2 };
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.trimLeft = trimLeft;
Url.qs = querystringify_1;
var urlParse = Url;
function parseURL(url) {
  var parsedUrl = new urlParse(url);
  if (!parsedUrl.host) {
    parsedUrl.href = parsedUrl.href;
  }
  var pathname = parsedUrl.pathname;
  if (pathname.charAt(0) !== "/") {
    pathname = "/" + pathname;
  }
  var host = parsedUrl.host;
  if (parsedUrl.port === "80" || parsedUrl.port === "443") {
    host = parsedUrl.hostname;
  }
  return {
    host,
    protocol: parsedUrl.protocol,
    search: parsedUrl.query,
    hash: parsedUrl.hash,
    href: parsedUrl.href,
    pathname,
    fullpath: pathname + (parsedUrl.query || "") + (parsedUrl.hash || "")
  };
}
var Registry = (
  /** @class */
  /* @__PURE__ */ function() {
    function Registry2() {
      this.verbs = {
        GET: new route_recognizer_es_default(),
        PUT: new route_recognizer_es_default(),
        POST: new route_recognizer_es_default(),
        DELETE: new route_recognizer_es_default(),
        PATCH: new route_recognizer_es_default(),
        HEAD: new route_recognizer_es_default(),
        OPTIONS: new route_recognizer_es_default()
      };
    }
    return Registry2;
  }()
);
var Hosts = (
  /** @class */
  function() {
    function Hosts2() {
      this.registries = {};
    }
    Hosts2.prototype.forURL = function(url) {
      var host = parseURL(url).host;
      var registry = this.registries[host];
      if (registry === void 0) {
        registry = this.registries[host] = new Registry(
          /*host*/
        );
      }
      return registry.verbs;
    };
    return Hosts2;
  }()
);
var global$1 = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self || typeof global$1 !== "undefined" && global$1;
var support = {
  searchParams: "URLSearchParams" in global$1,
  iterable: "Symbol" in global$1 && "iterator" in Symbol,
  blob: "FileReader" in global$1 && "Blob" in global$1 && function() {
    try {
      new Blob();
      return true;
    } catch (e) {
      return false;
    }
  }(),
  formData: "FormData" in global$1,
  arrayBuffer: "ArrayBuffer" in global$1
};
function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj);
}
if (support.arrayBuffer) {
  viewClasses = [
    "[object Int8Array]",
    "[object Uint8Array]",
    "[object Uint8ClampedArray]",
    "[object Int16Array]",
    "[object Uint16Array]",
    "[object Int32Array]",
    "[object Uint32Array]",
    "[object Float32Array]",
    "[object Float64Array]"
  ];
  isArrayBufferView = ArrayBuffer.isView || function(obj) {
    return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
  };
}
var viewClasses;
var isArrayBufferView;
function normalizeName(name) {
  if (typeof name !== "string") {
    name = String(name);
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === "") {
    throw new TypeError('Invalid character in header field name: "' + name + '"');
  }
  return name.toLowerCase();
}
function normalizeValue(value) {
  if (typeof value !== "string") {
    value = String(value);
  }
  return value;
}
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift();
      return { done: value === void 0, value };
    }
  };
  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator;
    };
  }
  return iterator;
}
function Headers(headers) {
  this.map = {};
  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value);
    }, this);
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1]);
    }, this);
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name]);
    }, this);
  }
}
Headers.prototype.append = function(name, value) {
  name = normalizeName(name);
  value = normalizeValue(value);
  var oldValue = this.map[name];
  this.map[name] = oldValue ? oldValue + ", " + value : value;
};
Headers.prototype["delete"] = function(name) {
  delete this.map[normalizeName(name)];
};
Headers.prototype.get = function(name) {
  name = normalizeName(name);
  return this.has(name) ? this.map[name] : null;
};
Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name));
};
Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value);
};
Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this);
    }
  }
};
Headers.prototype.keys = function() {
  var items = [];
  this.forEach(function(value, name) {
    items.push(name);
  });
  return iteratorFor(items);
};
Headers.prototype.values = function() {
  var items = [];
  this.forEach(function(value) {
    items.push(value);
  });
  return iteratorFor(items);
};
Headers.prototype.entries = function() {
  var items = [];
  this.forEach(function(value, name) {
    items.push([name, value]);
  });
  return iteratorFor(items);
};
if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
}
function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError("Already read"));
  }
  body.bodyUsed = true;
}
function fileReaderReady(reader) {
  return new Promise(function(resolve2, reject) {
    reader.onload = function() {
      resolve2(reader.result);
    };
    reader.onerror = function() {
      reject(reader.error);
    };
  });
}
function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader();
  var promise = fileReaderReady(reader);
  reader.readAsArrayBuffer(blob);
  return promise;
}
function readBlobAsText(blob) {
  var reader = new FileReader();
  var promise = fileReaderReady(reader);
  reader.readAsText(blob);
  return promise;
}
function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf);
  var chars = new Array(view.length);
  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i]);
  }
  return chars.join("");
}
function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0);
  } else {
    var view = new Uint8Array(buf.byteLength);
    view.set(new Uint8Array(buf));
    return view.buffer;
  }
}
function Body() {
  this.bodyUsed = false;
  this._initBody = function(body) {
    this.bodyUsed = this.bodyUsed;
    this._bodyInit = body;
    if (!body) {
      this._bodyText = "";
    } else if (typeof body === "string") {
      this._bodyText = body;
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body;
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body;
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString();
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer);
      this._bodyInit = new Blob([this._bodyArrayBuffer]);
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body);
    } else {
      this._bodyText = body = Object.prototype.toString.call(body);
    }
    if (!this.headers.get("content-type")) {
      if (typeof body === "string") {
        this.headers.set("content-type", "text/plain;charset=UTF-8");
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set("content-type", this._bodyBlob.type);
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
      }
    }
  };
  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected;
      }
      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob);
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]));
      } else if (this._bodyFormData) {
        throw new Error("could not read FormData body as blob");
      } else {
        return Promise.resolve(new Blob([this._bodyText]));
      }
    };
    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        var isConsumed = consumed(this);
        if (isConsumed) {
          return isConsumed;
        }
        if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
          return Promise.resolve(
            this._bodyArrayBuffer.buffer.slice(
              this._bodyArrayBuffer.byteOffset,
              this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
            )
          );
        } else {
          return Promise.resolve(this._bodyArrayBuffer);
        }
      } else {
        return this.blob().then(readBlobAsArrayBuffer);
      }
    };
  }
  this.text = function() {
    var rejected = consumed(this);
    if (rejected) {
      return rejected;
    }
    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob);
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
    } else if (this._bodyFormData) {
      throw new Error("could not read FormData body as text");
    } else {
      return Promise.resolve(this._bodyText);
    }
  };
  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode$1);
    };
  }
  this.json = function() {
    return this.text().then(JSON.parse);
  };
  return this;
}
var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
function normalizeMethod(method) {
  var upcased = method.toUpperCase();
  return methods.indexOf(upcased) > -1 ? upcased : method;
}
function Request(input, options) {
  if (!(this instanceof Request)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  }
  options = options || {};
  var body = options.body;
  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError("Already read");
    }
    this.url = input.url;
    this.credentials = input.credentials;
    if (!options.headers) {
      this.headers = new Headers(input.headers);
    }
    this.method = input.method;
    this.mode = input.mode;
    this.signal = input.signal;
    if (!body && input._bodyInit != null) {
      body = input._bodyInit;
      input.bodyUsed = true;
    }
  } else {
    this.url = String(input);
  }
  this.credentials = options.credentials || this.credentials || "same-origin";
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers);
  }
  this.method = normalizeMethod(options.method || this.method || "GET");
  this.mode = options.mode || this.mode || null;
  this.signal = options.signal || this.signal;
  this.referrer = null;
  if ((this.method === "GET" || this.method === "HEAD") && body) {
    throw new TypeError("Body not allowed for GET or HEAD requests");
  }
  this._initBody(body);
  if (this.method === "GET" || this.method === "HEAD") {
    if (options.cache === "no-store" || options.cache === "no-cache") {
      var reParamSearch = /([?&])_=[^&]*/;
      if (reParamSearch.test(this.url)) {
        this.url = this.url.replace(reParamSearch, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
      } else {
        var reQueryString = /\?/;
        this.url += (reQueryString.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
      }
    }
  }
}
Request.prototype.clone = function() {
  return new Request(this, { body: this._bodyInit });
};
function decode$1(body) {
  var form = new FormData();
  body.trim().split("&").forEach(function(bytes) {
    if (bytes) {
      var split = bytes.split("=");
      var name = split.shift().replace(/\+/g, " ");
      var value = split.join("=").replace(/\+/g, " ");
      form.append(decodeURIComponent(name), decodeURIComponent(value));
    }
  });
  return form;
}
function parseHeaders(rawHeaders) {
  var headers = new Headers();
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
  preProcessedHeaders.split("\r").map(function(header) {
    return header.indexOf("\n") === 0 ? header.substr(1, header.length) : header;
  }).forEach(function(line) {
    var parts = line.split(":");
    var key = parts.shift().trim();
    if (key) {
      var value = parts.join(":").trim();
      headers.append(key, value);
    }
  });
  return headers;
}
Body.call(Request.prototype);
function Response(bodyInit, options) {
  if (!(this instanceof Response)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  }
  if (!options) {
    options = {};
  }
  this.type = "default";
  this.status = options.status === void 0 ? 200 : options.status;
  this.ok = this.status >= 200 && this.status < 300;
  this.statusText = options.statusText === void 0 ? "" : "" + options.statusText;
  this.headers = new Headers(options.headers);
  this.url = options.url || "";
  this._initBody(bodyInit);
}
Body.call(Response.prototype);
Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  });
};
Response.error = function() {
  var response = new Response(null, { status: 0, statusText: "" });
  response.type = "error";
  return response;
};
var redirectStatuses = [301, 302, 303, 307, 308];
Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError("Invalid status code");
  }
  return new Response(null, { status, headers: { location: url } });
};
var DOMException = global$1.DOMException;
try {
  new DOMException();
} catch (err) {
  DOMException = function(message, name) {
    this.message = message;
    this.name = name;
    var error = Error(message);
    this.stack = error.stack;
  };
  DOMException.prototype = Object.create(Error.prototype);
  DOMException.prototype.constructor = DOMException;
}
function fetch(input, init) {
  return new Promise(function(resolve2, reject) {
    var request = new Request(input, init);
    if (request.signal && request.signal.aborted) {
      return reject(new DOMException("Aborted", "AbortError"));
    }
    var xhr = new XMLHttpRequest();
    function abortXhr() {
      xhr.abort();
    }
    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || "")
      };
      options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
      var body = "response" in xhr ? xhr.response : xhr.responseText;
      setTimeout(function() {
        resolve2(new Response(body, options));
      }, 0);
    };
    xhr.onerror = function() {
      setTimeout(function() {
        reject(new TypeError("Network request failed"));
      }, 0);
    };
    xhr.ontimeout = function() {
      setTimeout(function() {
        reject(new TypeError("Network request failed"));
      }, 0);
    };
    xhr.onabort = function() {
      setTimeout(function() {
        reject(new DOMException("Aborted", "AbortError"));
      }, 0);
    };
    function fixUrl(url) {
      try {
        return url === "" && global$1.location.href ? global$1.location.href : url;
      } catch (e) {
        return url;
      }
    }
    xhr.open(request.method, fixUrl(request.url), true);
    if (request.credentials === "include") {
      xhr.withCredentials = true;
    } else if (request.credentials === "omit") {
      xhr.withCredentials = false;
    }
    if ("responseType" in xhr) {
      if (support.blob) {
        xhr.responseType = "blob";
      } else if (support.arrayBuffer && request.headers.get("Content-Type") && request.headers.get("Content-Type").indexOf("application/octet-stream") !== -1) {
        xhr.responseType = "arraybuffer";
      }
    }
    if (init && typeof init.headers === "object" && !(init.headers instanceof Headers)) {
      Object.getOwnPropertyNames(init.headers).forEach(function(name) {
        xhr.setRequestHeader(name, normalizeValue(init.headers[name]));
      });
    } else {
      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });
    }
    if (request.signal) {
      request.signal.addEventListener("abort", abortXhr);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          request.signal.removeEventListener("abort", abortXhr);
        }
      };
    }
    xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
  });
}
fetch.polyfill = true;
if (!global$1.fetch) {
  global$1.fetch = fetch;
  global$1.Headers = Headers;
  global$1.Request = Request;
  global$1.Response = Response;
}
var FakeFetch = Object.freeze({
  __proto__: null,
  Headers,
  Request,
  Response,
  get DOMException() {
    return DOMException;
  },
  fetch
});
function createPassthrough(fakeXHR, nativeXMLHttpRequest) {
  var evts = ["error", "timeout", "abort", "readystatechange"];
  var uploadEvents = [];
  var lifecycleProps = [
    "readyState",
    "responseText",
    "response",
    "responseXML",
    "responseURL",
    "status",
    "statusText"
  ];
  var xhr = fakeXHR._passthroughRequest = new nativeXMLHttpRequest();
  xhr.open(fakeXHR.method, fakeXHR.url, fakeXHR.async, fakeXHR.username, fakeXHR.password);
  if (fakeXHR.responseType === "arraybuffer") {
    lifecycleProps = ["readyState", "response", "status", "statusText"];
    xhr.responseType = fakeXHR.responseType;
  }
  if ("onload" in xhr) {
    evts.push("load");
  }
  if (fakeXHR.async && fakeXHR.responseType !== "arraybuffer") {
    evts.push("progress");
    uploadEvents.push("progress");
  }
  function copyLifecycleProperties(propertyNames, fromXHR, toXHR) {
    for (var i2 = 0; i2 < propertyNames.length; i2++) {
      var prop = propertyNames[i2];
      if (prop in fromXHR) {
        toXHR[prop] = fromXHR[prop];
      }
    }
  }
  function dispatchEvent2(eventable, eventType, event) {
    eventable.dispatchEvent(event);
    if (eventable["on" + eventType]) {
      eventable["on" + eventType](event);
    }
  }
  function createHandler2(eventType) {
    xhr["on" + eventType] = function(event) {
      copyLifecycleProperties(lifecycleProps, xhr, fakeXHR);
      dispatchEvent2(fakeXHR, eventType, event);
    };
  }
  function createUploadHandler(eventType) {
    if (xhr.upload && fakeXHR.upload && fakeXHR.upload["on" + eventType]) {
      xhr.upload["on" + eventType] = function(event) {
        dispatchEvent2(fakeXHR.upload, eventType, event);
      };
    }
  }
  var i;
  for (i = 0; i < evts.length; i++) {
    createHandler2(evts[i]);
  }
  for (i = 0; i < uploadEvents.length; i++) {
    createUploadHandler(uploadEvents[i]);
  }
  if (fakeXHR.async) {
    xhr.timeout = fakeXHR.timeout;
    xhr.withCredentials = fakeXHR.withCredentials;
  }
  if (!xhr.timeout && xhr.timeout !== 0) {
    xhr.timeout = 0;
  }
  for (var h in fakeXHR.requestHeaders) {
    xhr.setRequestHeader(h, fakeXHR.requestHeaders[h]);
  }
  return xhr;
}
function interceptor(ctx) {
  function FakeRequest() {
    fake_xml_http_request_default.call(this);
  }
  FakeRequest.prototype = Object.create(fake_xml_http_request_default.prototype);
  FakeRequest.prototype.constructor = FakeRequest;
  FakeRequest.prototype.send = function send2() {
    this.sendArguments = arguments;
    if (!ctx.pretender.running) {
      throw new Error("You shut down a Pretender instance while there was a pending request. That request just tried to complete. Check to see if you accidentally shut down a pretender earlier than you intended to");
    }
    fake_xml_http_request_default.prototype.send.apply(this, arguments);
    if (ctx.pretender.checkPassthrough(this)) {
      this.passthrough();
    } else {
      ctx.pretender.handleRequest(this);
    }
  };
  FakeRequest.prototype.passthrough = function passthrough() {
    if (!this.sendArguments) {
      throw new Error("You attempted to passthrough a FakeRequest that was never sent. Call `.send()` on the original request first");
    }
    var xhr = createPassthrough(this, ctx.pretender._nativeXMLHttpRequest);
    xhr.send.apply(xhr, this.sendArguments);
    return xhr;
  };
  FakeRequest.prototype._passthroughCheck = function(method, args) {
    if (this._passthroughRequest) {
      return this._passthroughRequest[method].apply(this._passthroughRequest, args);
    }
    return fake_xml_http_request_default.prototype[method].apply(this, args);
  };
  FakeRequest.prototype.abort = function abort2() {
    return this._passthroughCheck("abort", arguments);
  };
  FakeRequest.prototype.getResponseHeader = function getResponseHeader2() {
    return this._passthroughCheck("getResponseHeader", arguments);
  };
  FakeRequest.prototype.getAllResponseHeaders = function getAllResponseHeaders2() {
    return this._passthroughCheck("getAllResponseHeaders", arguments);
  };
  if (ctx.pretender._nativeXMLHttpRequest.prototype._passthroughCheck) {
    console.warn("You created a second Pretender instance while there was already one running. Running two Pretender servers at once will lead to unexpected results and will be removed entirely in a future major version.Please call .shutdown() on your instances when you no longer need them to respond.");
  }
  return FakeRequest;
}
var NoopArray = (
  /** @class */
  function() {
    function NoopArray2() {
      this.length = 0;
    }
    NoopArray2.prototype.push = function() {
      var _items = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        _items[_i] = arguments[_i];
      }
      return 0;
    };
    return NoopArray2;
  }()
);
function scheduleProgressEvent(request, startTime, totalTime) {
  var totalSize = 0;
  var body = request.requestBody;
  if (body) {
    if (body instanceof FormData) {
      body.forEach(function(value) {
        if (value instanceof File) {
          totalSize += value.size;
        } else {
          totalSize += value.length;
        }
      });
    } else {
      totalSize = body.byteLength || body.size || body.length || 0;
    }
  }
  setTimeout(function() {
    if (!request.aborted && !request.status) {
      var elapsedTime = (/* @__PURE__ */ new Date()).getTime() - startTime.getTime();
      var progressTransmitted = totalTime <= 0 ? 0 : elapsedTime / totalTime * totalSize;
      request.upload._progress(true, progressTransmitted, totalSize);
      request._progress(true, progressTransmitted, totalSize);
      scheduleProgressEvent(request, startTime, totalTime);
    } else if (request.status) {
      request.upload._progress(true, totalSize, totalSize);
      request._progress(true, totalSize, totalSize);
    }
  }, 50);
}
function isArray2(array) {
  return Object.prototype.toString.call(array) === "[object Array]";
}
var PASSTHROUGH = {};
function verbify(verb) {
  return function(path, handler, async) {
    return this.register(verb, path, handler, async);
  };
}
var Pretender = (
  /** @class */
  function() {
    function Pretender2() {
      var _this = this;
      this.hosts = new Hosts();
      this.handlers = [];
      this.get = verbify("GET");
      this.post = verbify("POST");
      this.put = verbify("PUT");
      this.delete = verbify("DELETE");
      this.patch = verbify("PATCH");
      this.head = verbify("HEAD");
      this.options = verbify("OPTIONS");
      this.passthrough = PASSTHROUGH;
      var lastArg = arguments[arguments.length - 1];
      var options = typeof lastArg === "object" ? lastArg : null;
      var shouldNotTrack = options && options.trackRequests === false;
      this.handledRequests = shouldNotTrack ? new NoopArray() : [];
      this.passthroughRequests = shouldNotTrack ? new NoopArray() : [];
      this.unhandledRequests = shouldNotTrack ? new NoopArray() : [];
      this.requestReferences = [];
      this.forcePassthrough = options && options.forcePassthrough === true;
      this.disableUnhandled = options && options.disableUnhandled === true;
      this._nativeXMLHttpRequest = self.XMLHttpRequest;
      this.running = false;
      var ctx = { pretender: this };
      this.ctx = ctx;
      self.XMLHttpRequest = interceptor(ctx);
      this._fetchProps = FakeFetch ? ["fetch", "Headers", "Request", "Response"] : [];
      this._fetchProps.forEach(function(name) {
        _this["_native" + name] = self[name];
        self[name] = FakeFetch[name];
      }, this);
      this.running = true;
      var argLength = options ? arguments.length - 1 : arguments.length;
      for (var i = 0; i < argLength; i++) {
        this.map(arguments[i]);
      }
    }
    Pretender2.prototype.map = function(maps) {
      maps.call(this);
    };
    Pretender2.prototype.register = function(verb, url, handler, async) {
      if (!handler) {
        throw new Error("The function you tried passing to Pretender to handle " + verb + " " + url + " is undefined or missing.");
      }
      var handlerInstance = handler;
      handlerInstance.numberOfCalls = 0;
      handlerInstance.async = async;
      this.handlers.push(handlerInstance);
      var registry = this.hosts.forURL(url)[verb];
      registry.add([
        {
          path: parseURL(url).fullpath,
          handler: handlerInstance
        }
      ]);
      return handlerInstance;
    };
    Pretender2.prototype.checkPassthrough = function(request) {
      var verb = request.method.toUpperCase();
      var path = parseURL(request.url).fullpath;
      var recognized = this.hosts.forURL(request.url)[verb].recognize(path);
      var match2 = recognized && recognized[0];
      if (match2 && match2.handler === PASSTHROUGH || this.forcePassthrough) {
        this.passthroughRequests.push(request);
        this.passthroughRequest(verb, path, request);
        return true;
      }
      return false;
    };
    Pretender2.prototype.handleRequest = function(request) {
      var verb = request.method.toUpperCase();
      var path = request.url;
      var handler = this._handlerFor(verb, path, request);
      if (handler) {
        handler.handler.numberOfCalls++;
        var async_1 = handler.handler.async;
        this.handledRequests.push(request);
        var pretender_1 = this;
        var _handleRequest_1 = function(statusHeadersAndBody) {
          if (!isArray2(statusHeadersAndBody)) {
            var note = "Remember to `return [status, headers, body];` in your route handler.";
            throw new Error("Nothing returned by handler for " + path + ". " + note);
          }
          var status = statusHeadersAndBody[0];
          var headers = pretender_1.prepareHeaders(statusHeadersAndBody[1]);
          var body = pretender_1.prepareBody(statusHeadersAndBody[2], headers);
          pretender_1.handleResponse(request, async_1, function() {
            request.respond(status, headers, body);
            pretender_1.handledRequest(verb, path, request);
          });
        };
        try {
          var result = handler.handler(request);
          if (result && typeof result.then === "function") {
            result.then(function(resolvedResult) {
              _handleRequest_1(resolvedResult);
            });
          } else {
            _handleRequest_1(result);
          }
        } catch (error) {
          this.erroredRequest(verb, path, request, error);
          this.resolve(request);
        }
      } else {
        if (!this.disableUnhandled) {
          this.unhandledRequests.push(request);
          this.unhandledRequest(verb, path, request);
        }
      }
    };
    Pretender2.prototype.handleResponse = function(request, strategy, callback) {
      var delay = typeof strategy === "function" ? strategy() : strategy;
      delay = typeof delay === "boolean" || typeof delay === "number" ? delay : 0;
      if (delay === false) {
        callback();
      } else {
        var pretender_2 = this;
        pretender_2.requestReferences.push({
          request,
          callback
        });
        if (delay !== true) {
          scheduleProgressEvent(request, /* @__PURE__ */ new Date(), delay);
          setTimeout(function() {
            pretender_2.resolve(request);
          }, delay);
        }
      }
    };
    Pretender2.prototype.resolve = function(request) {
      for (var i = 0, len = this.requestReferences.length; i < len; i++) {
        var res = this.requestReferences[i];
        if (res.request === request) {
          res.callback();
          this.requestReferences.splice(i, 1);
          break;
        }
      }
    };
    Pretender2.prototype.requiresManualResolution = function(verb, path) {
      var handler = this._handlerFor(verb.toUpperCase(), path, {});
      if (!handler) {
        return false;
      }
      var async = handler.handler.async;
      return typeof async === "function" ? async() === true : async === true;
    };
    Pretender2.prototype.prepareBody = function(body, _headers) {
      return body;
    };
    Pretender2.prototype.prepareHeaders = function(headers) {
      return headers;
    };
    Pretender2.prototype.handledRequest = function(_verb, _path, _request) {
    };
    Pretender2.prototype.passthroughRequest = function(_verb, _path, _request) {
    };
    Pretender2.prototype.unhandledRequest = function(verb, path, _request) {
      throw new Error("Pretender intercepted " + verb + " " + path + " but no handler was defined for this type of request");
    };
    Pretender2.prototype.erroredRequest = function(verb, path, _request, error) {
      error.message = "Pretender intercepted " + verb + " " + path + " but encountered an error: " + error.message;
      throw error;
    };
    Pretender2.prototype.shutdown = function() {
      var _this = this;
      self.XMLHttpRequest = this._nativeXMLHttpRequest;
      this._fetchProps.forEach(function(name) {
        self[name] = _this["_native" + name];
      }, this);
      this.ctx.pretender = void 0;
      this.running = false;
    };
    Pretender2.prototype._handlerFor = function(verb, url, request) {
      var registry = this.hosts.forURL(url)[verb];
      var matches = registry.recognize(parseURL(url).fullpath);
      var match2 = matches ? matches[0] : null;
      if (match2) {
        request.params = match2.params;
        request.queryParams = matches.queryParams;
      }
      return match2;
    };
    Pretender2.parseURL = parseURL;
    Pretender2.Hosts = Hosts;
    Pretender2.Registry = Registry;
    return Pretender2;
  }()
);
Pretender.parseURL = parseURL;
Pretender.Hosts = Hosts;
Pretender.Registry = Registry;
var pretender_es_default = Pretender;

// node_modules/@miragejs/pretender-node-polyfill/after.js
if (typeof global !== "undefined" && global.__pretenderNodePolyfill) {
  delete global.self;
  delete global.__pretenderNodePolyfill;
}

// node_modules/miragejs/dist/mirage-esm.js
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class2) _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _possibleConstructorReturn(self2, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self2);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function referenceSort(edges) {
  var nodes = (0, import_uniq.default)((0, import_flatten.default)(edges));
  var cursor = nodes.length;
  var sorted = new Array(cursor);
  var visited = {};
  var i = cursor;
  var visit = function visit2(node, i2, predecessors) {
    if (predecessors.indexOf(node) >= 0) {
      throw new Error("Cyclic dependency in properties ".concat(JSON.stringify(predecessors)));
    }
    if (visited[i2]) {
      return;
    } else {
      visited[i2] = true;
    }
    var outgoing = edges.filter(function(edge) {
      return edge && edge[0] === node;
    });
    i2 = outgoing.length;
    if (i2) {
      var preds = predecessors.concat(node);
      do {
        var pair = outgoing[--i2];
        var child = pair[1];
        if (child) {
          visit2(child, nodes.indexOf(child), preds);
        }
      } while (i2);
    }
    sorted[--cursor] = node;
  };
  while (i--) {
    if (!visited[i]) {
      visit(nodes[i], i, []);
    }
  }
  return sorted.reverse();
}
var Factory = function Factory2() {
  this.build = function(sequence) {
    var _this = this;
    var object = {};
    var topLevelAttrs = Object.assign({}, this.attrs);
    delete topLevelAttrs.afterCreate;
    Object.keys(topLevelAttrs).forEach(function(attr) {
      if (Factory2.isTrait.call(_this, attr)) {
        delete topLevelAttrs[attr];
      }
    });
    var keys = sortAttrs(topLevelAttrs, sequence);
    keys.forEach(function(key) {
      var buildAttrs, _buildSingleValue;
      buildAttrs = function buildAttrs2(attrs) {
        return (0, import_mapValues.default)(attrs, _buildSingleValue);
      };
      _buildSingleValue = function buildSingleValue(value2) {
        if (Array.isArray(value2)) {
          return value2.map(_buildSingleValue);
        } else if ((0, import_isPlainObject.default)(value2)) {
          return buildAttrs(value2);
        } else if ((0, import_isFunction.default)(value2)) {
          return value2.call(topLevelAttrs, sequence);
        } else {
          return value2;
        }
      };
      var value = topLevelAttrs[key];
      if ((0, import_isFunction.default)(value)) {
        object[key] = value.call(object, sequence);
      } else {
        object[key] = _buildSingleValue(value);
      }
    });
    return object;
  };
};
Factory.extend = function(attrs) {
  var newAttrs = Object.assign({}, this.attrs, attrs);
  var Subclass = function Subclass2() {
    this.attrs = newAttrs;
    Factory.call(this);
  };
  Subclass.extend = Factory.extend;
  Subclass.extractAfterCreateCallbacks = Factory.extractAfterCreateCallbacks;
  Subclass.isTrait = Factory.isTrait;
  Subclass.attrs = newAttrs;
  return Subclass;
};
Factory.extractAfterCreateCallbacks = function() {
  var _this2 = this;
  var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, traits = _ref.traits;
  var afterCreateCallbacks = [];
  var attrs = this.attrs || {};
  var traitCandidates;
  if (attrs.afterCreate) {
    afterCreateCallbacks.push(attrs.afterCreate);
  }
  if (Array.isArray(traits)) {
    traitCandidates = traits;
  } else {
    traitCandidates = Object.keys(attrs);
  }
  traitCandidates.filter(function(attr) {
    return _this2.isTrait(attr) && attrs[attr].extension.afterCreate;
  }).forEach(function(attr) {
    afterCreateCallbacks.push(attrs[attr].extension.afterCreate);
  });
  return afterCreateCallbacks;
};
Factory.isTrait = function(attrName) {
  var attrs = this.attrs;
  return (0, import_isPlainObject.default)(attrs[attrName]) && attrs[attrName].__isTrait__ === true;
};
function sortAttrs(attrs, sequence) {
  var Temp = function Temp2() {
  };
  var obj = new Temp();
  var refs = [];
  var property;
  Object.keys(attrs).forEach(function(key) {
    var value;
    Object.defineProperty(obj.constructor.prototype, key, {
      get: function get3() {
        refs.push([property, key]);
        return value;
      },
      set: function set2(newValue) {
        value = newValue;
      },
      enumerable: false,
      configurable: true
    });
  });
  Object.keys(attrs).forEach(function(key) {
    var value = attrs[key];
    if (typeof value !== "function") {
      obj[key] = value;
    }
  });
  Object.keys(attrs).forEach(function(key) {
    var value = attrs[key];
    property = key;
    if (typeof value === "function") {
      obj[key] = value.call(obj, sequence);
    }
    refs.push([key]);
  });
  return referenceSort(refs);
}
function isNumber(n) {
  return (+n).toString() === n.toString();
}
var IdentityManager = function() {
  function IdentityManager2() {
    _classCallCheck(this, IdentityManager2);
    this._nextId = 1;
    this._ids = {};
  }
  _createClass(IdentityManager2, [{
    key: "get",
    value: function get3() {
      return this._nextId;
    }
    /**
      Registers `uniqueIdentifier` as used.
       This method should throw is `uniqueIdentifier` has already been taken.
       @method set
      @param {String|Number} uniqueIdentifier
      @public
    */
  }, {
    key: "set",
    value: function set2(uniqueIdentifier) {
      if (this._ids[uniqueIdentifier]) {
        throw new Error("Attempting to use the ID ".concat(uniqueIdentifier, ", but it's already been used"));
      }
      if (isNumber(uniqueIdentifier) && +uniqueIdentifier >= this._nextId) {
        this._nextId = +uniqueIdentifier + 1;
      }
      this._ids[uniqueIdentifier] = true;
    }
    /**
      @method inc
      @hide
      @private
    */
  }, {
    key: "inc",
    value: function inc() {
      var nextValue = this.get() + 1;
      this._nextId = nextValue;
      return nextValue;
    }
    /**
      Returns the next unique identifier.
       @method fetch
      @return {String} Unique identifier
      @public
    */
  }, {
    key: "fetch",
    value: function fetch2() {
      var id = this.get();
      this._ids[id] = true;
      this.inc();
      return id.toString();
    }
    /**
      Resets the identity manager, marking all unique identifiers as available.
       @method reset
      @public
    */
  }, {
    key: "reset",
    value: function reset() {
      this._nextId = 1;
      this._ids = {};
    }
  }]);
  return IdentityManager2;
}();
var association = function association2() {
  var __isAssociation__ = true;
  for (var _len = arguments.length, traitsAndOverrides = new Array(_len), _key = 0; _key < _len; _key++) {
    traitsAndOverrides[_key] = arguments[_key];
  }
  return {
    __isAssociation__,
    traitsAndOverrides
  };
};
var trait = function trait2(extension) {
  var __isTrait__ = true;
  return {
    extension,
    __isTrait__
  };
};
var warn = console.warn;
var Response2 = function() {
  function Response3(code) {
    var headers = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var data = arguments.length > 2 ? arguments[2] : void 0;
    _classCallCheck(this, Response3);
    this.code = code;
    this.headers = headers;
    if (code === 204) {
      if (data !== void 0 && data !== "") {
        warn("Mirage: One of your route handlers is returning a custom\n          204 Response that has data, but this is a violation of the HTTP spec\n          and could lead to unexpected behavior. 204 responses should have no\n          content (an empty string) as their body.");
      } else {
        this.data = "";
      }
    } else if ((data === void 0 || data === "") && !Object.prototype.hasOwnProperty.call(this.headers, "Content-Type")) {
      this.data = {};
    } else {
      this.data = data;
    }
    if (code !== 204 && !Object.prototype.hasOwnProperty.call(this.headers, "Content-Type")) {
      this.headers["Content-Type"] = "application/json";
    }
  }
  _createClass(Response3, [{
    key: "toRackResponse",
    value: function toRackResponse() {
      return [this.code, this.headers, this.data];
    }
  }]);
  return Response3;
}();
var camelizeCache = {};
var dasherizeCache = {};
var underscoreCache = {};
var capitalizeCache = {};
function camelize2(word) {
  if (typeof camelizeCache[word] !== "string") {
    var camelizedWord = camelize(underscore2(word), false);
    var camelized = camelizedWord.split("/").map(import_lowerFirst.default).join("/");
    camelizeCache[word] = camelized;
  }
  return camelizeCache[word];
}
function dasherize2(word) {
  if (typeof dasherizeCache[word] !== "string") {
    var dasherized = dasherize(underscore2(word));
    dasherizeCache[word] = dasherized;
  }
  return dasherizeCache[word];
}
function underscore2(word) {
  if (typeof underscoreCache[word] !== "string") {
    var underscored = underscore(word);
    underscoreCache[word] = underscored;
  }
  return underscoreCache[word];
}
function capitalize2(word) {
  if (typeof capitalizeCache[word] !== "string") {
    var capitalized = capitalize(word);
    capitalizeCache[word] = capitalized;
  }
  return capitalizeCache[word];
}
function isAssociation(object) {
  return (0, import_isPlainObject.default)(object) && object.__isAssociation__ === true;
}
var errorProps = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
function assert(bool, text) {
  if (typeof bool === "string" && !text) {
    throw new MirageError(bool);
  }
  if (!bool) {
    throw new MirageError(text.replace(/^ +/gm, "") || "Assertion failed");
  }
}
function MirageError(message, stack) {
  var tmp = Error(message);
  if (stack) {
    tmp.stack = stack;
  }
  for (var idx = 0; idx < errorProps.length; idx++) {
    var prop = errorProps[idx];
    if (["description", "message", "stack"].indexOf(prop) > -1) {
      this[prop] = "Mirage: ".concat(tmp[prop]);
    } else {
      this[prop] = tmp[prop];
    }
  }
}
MirageError.prototype = Object.create(Error.prototype);
var Association = function() {
  function Association2(modelName, opts) {
    _classCallCheck(this, Association2);
    this.modelName = void 0;
    if (_typeof(modelName) === "object") {
      this.modelName = void 0;
      this.opts = modelName;
    } else {
      this.modelName = modelName ? dasherize2(modelName) : "";
      this.opts = opts || {};
    }
    this.name = "";
    this.ownerModelName = "";
  }
  _createClass(Association2, [{
    key: "setSchema",
    value: function setSchema(schema) {
      this.schema = schema;
    }
    /**
       Returns a Boolean that's true if the association is self-referential, i.e. if a model has an association with itself.
        For example, given
        ```js
       createServer({
         models: {
           user: Model.extend({
             friends: hasMany('user')
           })
         }
       })
       ```
        then
        ```js
       server.schema.associationsFor('user').friends.isReflexive // true
       ```
        @method isReflexive
       @return {Boolean}
       @public
    */
  }, {
    key: "isReflexive",
    value: function isReflexive() {
      var isExplicitReflexive = !!(this.modelName === this.ownerModelName && this.opts.inverse);
      var isImplicitReflexive = !!(this.opts.inverse === void 0 && this.ownerModelName === this.modelName);
      return isExplicitReflexive || isImplicitReflexive;
    }
    /**
       Returns a Boolean that's true if the association is polymorphic:
        For example, given
        ```js
       createServer({
         models: {
           comment: Model.extend({
             commentable: belongsTo({ polymorphic: true })
           })
         }
       })
       ```
        then
        ```js
       server.schema.associationsFor('comment').commentable.isPolymorphic // true
       ```
        Check out [the guides on polymorphic associations](https://miragejs.com/docs/main-concepts/relationships/#polymorphic) to learn more.
        @accessor isPolymorphic
       @type {Boolean}
       @public
    */
  }, {
    key: "isPolymorphic",
    get: function get3() {
      return this.opts.polymorphic;
    }
    /**
      Returns either the string `"hasMany"` or `"belongsTo"`, based on the association type.
    
      @accessor
      @type {String}
      @public
     */
  }, {
    key: "type",
    get: function get3() {
      throw new Error("Subclasses of Association must implement a getter for type");
    }
    /**
      Returns the name used for the association's foreign key.
       ```js
      let server = createServer({
        models: {
          user: Model,
          post: Model.extend({
            fineAuthor: belongsTo("user"),
            comments: hasMany()
          }),
          comment: Model
        }
      });
       let associations = server.associationsFor('post')
       associations.fineAuthor.foreignKey // fineAuthorId
      associations.comments.foreignKey // commentIds
      ```
    
      @accessor
      @type {String}
      @public
     */
  }, {
    key: "foreignKey",
    get: function get3() {
      return this.getForeignKey();
    }
    /**
      @hide
    */
  }, {
    key: "identifier",
    get: function get3() {
      throw new Error("Subclasses of Association must implement a getter for identifier");
    }
  }]);
  return Association2;
}();
var identifierCache$1 = {};
var BelongsTo = function(_Association) {
  _inherits(BelongsTo2, _Association);
  var _super = _createSuper(BelongsTo2);
  function BelongsTo2() {
    _classCallCheck(this, BelongsTo2);
    return _super.apply(this, arguments);
  }
  _createClass(BelongsTo2, [{
    key: "identifier",
    get: function get3() {
      if (typeof identifierCache$1[this.name] !== "string") {
        var identifier = "".concat(camelize2(this.name), "Id");
        identifierCache$1[this.name] = identifier;
      }
      return identifierCache$1[this.name];
    }
  }, {
    key: "type",
    get: function get3() {
      return "belongsTo";
    }
    /**
     * @method getForeignKeyArray
     * @return {Array} Array of camelized name of the model owning the association
     * and foreign key for the association
     * @public
     */
  }, {
    key: "getForeignKeyArray",
    value: function getForeignKeyArray() {
      return [camelize2(this.ownerModelName), this.getForeignKey()];
    }
    /**
     * @method getForeignKey
     * @return {String} Foreign key for the association
     * @public
     */
  }, {
    key: "getForeignKey",
    value: function getForeignKey() {
      if (typeof identifierCache$1[this.name] !== "string") {
        var foreignKey = "".concat(camelize2(this.name), "Id");
        identifierCache$1[this.name] = foreignKey;
      }
      return identifierCache$1[this.name];
    }
    /**
     * Registers belongs-to association defined by given key on given model,
     * defines getters / setters for associated parent and associated parent's id,
     * adds methods for creating unsaved parent record and creating a saved one
     *
     * @method addMethodsToModelClass
     * @param {Function} ModelClass
     * @param {String} key the named key for the association
     * @public
     */
  }, {
    key: "addMethodsToModelClass",
    value: function addMethodsToModelClass(ModelClass, key) {
      var modelPrototype = ModelClass.prototype;
      var association3 = this;
      var foreignKey = this.getForeignKey();
      var associationHash = _defineProperty({}, key, this);
      modelPrototype.belongsToAssociations = Object.assign(modelPrototype.belongsToAssociations, associationHash);
      Object.keys(modelPrototype.belongsToAssociations).forEach(function(key2) {
        var value = modelPrototype.belongsToAssociations[key2];
        modelPrototype.belongsToAssociationFks[value.getForeignKey()] = value;
      });
      this.schema.addDependentAssociation(this, this.modelName);
      modelPrototype.associationKeys.add(key);
      modelPrototype.associationIdKeys.add(foreignKey);
      Object.defineProperty(modelPrototype, foreignKey, {
        /*
          object.parentId
            - returns the associated parent's id
        */
        get: function get3() {
          this._tempAssociations = this._tempAssociations || {};
          var tempParent = this._tempAssociations[key];
          var id;
          if (tempParent === null) {
            id = null;
          } else {
            if (association3.isPolymorphic) {
              if (tempParent) {
                id = {
                  id: tempParent.id,
                  type: tempParent.modelName
                };
              } else {
                id = this.attrs[foreignKey];
              }
            } else {
              if (tempParent) {
                id = tempParent.id;
              } else {
                id = this.attrs[foreignKey];
              }
            }
          }
          return id;
        },
        /*
          object.parentId = (parentId)
            - sets the associated parent via id
        */
        set: function set2(id) {
          var tempParent;
          if (id === null) {
            tempParent = null;
          } else if (id !== void 0) {
            if (association3.isPolymorphic) {
              assert(_typeof(id) === "object", "You're setting an ID on the polymorphic association '".concat(association3.name, "' but you didn't pass in an object. Polymorphic IDs need to be in the form { type, id }."));
              tempParent = association3.schema[association3.schema.toCollectionName(id.type)].find(id.id);
            } else {
              tempParent = association3.schema[association3.schema.toCollectionName(association3.modelName)].find(id);
              assert(tempParent, "Couldn't find ".concat(association3.modelName, " with id = ").concat(id));
            }
          }
          this[key] = tempParent;
        }
      });
      Object.defineProperty(modelPrototype, key, {
        /*
          object.parent
            - returns the associated parent
        */
        get: function get3() {
          this._tempAssociations = this._tempAssociations || {};
          var tempParent = this._tempAssociations[key];
          var foreignKeyId = this[foreignKey];
          var model = null;
          if (tempParent) {
            model = tempParent;
          } else if (foreignKeyId !== null) {
            if (association3.isPolymorphic) {
              model = association3.schema[association3.schema.toCollectionName(foreignKeyId.type)].find(foreignKeyId.id);
            } else {
              model = association3.schema[association3.schema.toCollectionName(association3.modelName)].find(foreignKeyId);
            }
          }
          return model;
        },
        /*
          object.parent = (parentModel)
            - sets the associated parent via model
           I want to jot some notes about hasInverseFor. There used to be an
          association.inverse() check, but adding polymorphic associations
          complicated this. `comment.commentable`, you can't easily check for an
          inverse since `comments: hasMany()` could be on any model.
           Instead of making it very complex and looking for an inverse on the
          association in isoaltion, it was much simpler to ask the model being
          passed in if it had an inverse for the setting model and with its
          association.
        */
        set: function set2(model) {
          this._tempAssociations = this._tempAssociations || {};
          this._tempAssociations[key] = model;
          if (model && model.hasInverseFor(association3)) {
            var inverse = model.inverseFor(association3);
            model.associate(this, inverse);
          }
        }
      });
      modelPrototype["new".concat(capitalize2(key))] = function() {
        var modelName, attrs;
        if (association3.isPolymorphic) {
          modelName = arguments.length <= 0 ? void 0 : arguments[0];
          attrs = arguments.length <= 1 ? void 0 : arguments[1];
        } else {
          modelName = association3.modelName;
          attrs = arguments.length <= 0 ? void 0 : arguments[0];
        }
        var parent = association3.schema[association3.schema.toCollectionName(modelName)]["new"](attrs);
        this[key] = parent;
        return parent;
      };
      modelPrototype["create".concat(capitalize2(key))] = function() {
        var modelName, attrs;
        if (association3.isPolymorphic) {
          modelName = arguments.length <= 0 ? void 0 : arguments[0];
          attrs = arguments.length <= 1 ? void 0 : arguments[1];
        } else {
          modelName = association3.modelName;
          attrs = arguments.length <= 0 ? void 0 : arguments[0];
        }
        var parent = association3.schema[association3.schema.toCollectionName(modelName)].create(attrs);
        this[key] = parent;
        this.save();
        return parent.reload();
      };
    }
    /**
     *
     *
     * @public
     */
  }, {
    key: "disassociateAllDependentsFromTarget",
    value: function disassociateAllDependentsFromTarget(model) {
      var _this = this;
      var owner = this.ownerModelName;
      var fk;
      if (this.isPolymorphic) {
        fk = {
          type: model.modelName,
          id: model.id
        };
      } else {
        fk = model.id;
      }
      var dependents = this.schema[this.schema.toCollectionName(owner)].where(function(potentialOwner) {
        var id = potentialOwner[_this.getForeignKey()];
        if (!id) {
          return false;
        }
        if (_typeof(id) === "object") {
          return id.type === fk.type && id.id === fk.id;
        } else {
          return id === fk;
        }
      });
      dependents.models.forEach(function(dependent) {
        dependent.disassociate(model, _this);
        dependent.save();
      });
    }
  }]);
  return BelongsTo2;
}(Association);
function duplicate(data) {
  if (Array.isArray(data)) {
    return data.map(duplicate);
  } else {
    return Object.assign({}, data);
  }
}
var DbCollection = function() {
  function DbCollection2(name, initialData, IdentityManager2) {
    _classCallCheck(this, DbCollection2);
    this.name = name;
    this._records = [];
    this.identityManager = new IdentityManager2();
    if (initialData) {
      this.insert(initialData);
    }
  }
  _createClass(DbCollection2, [{
    key: "all",
    value: function all() {
      return duplicate(this._records);
    }
    /**
      Inserts `data` into the collection. `data` can be a single object
      or an array of objects. Returns the inserted record.
       ```js
      // Insert a single record
      let link = db.users.insert({ name: 'Link', age: 173 });
       link;  // { id: 1, name: 'Link', age: 173 }
       // Insert an array
      let users = db.users.insert([
        { name: 'Zelda', age: 142 },
        { name: 'Epona', age: 58 },
      ]);
       users;  // [ { id: 2, name: 'Zelda', age: 142 }, { id: 3, name: 'Epona', age: 58 } ]
      ```
       @method insert
      @param data
      @public
     */
  }, {
    key: "insert",
    value: function insert(data) {
      var _this = this;
      if (!Array.isArray(data)) {
        return this._insertRecord(data);
      } else {
        return (0, import_map.default)(data, function(attrs) {
          return _this._insertRecord(attrs);
        });
      }
    }
    /**
      Returns a single record from the `collection` if `ids` is a single
      id, or an array of records if `ids` is an array of ids. Note
      each id can be an int or a string, but integer ids as strings
      (e.g. the string “1”) will be treated as integers.
       ```js
      // Given users = [{id: 1, name: 'Link'}, {id: 2, name: 'Zelda'}]
       db.users.find(1);      // {id: 1, name: 'Link'}
      db.users.find([1, 2]); // [{id: 1, name: 'Link'}, {id: 2, name: 'Zelda'}]
      ```
       @method find
      @param ids
      @public
     */
  }, {
    key: "find",
    value: function find2(ids) {
      if (Array.isArray(ids)) {
        var records = this._findRecords(ids).filter(Boolean).map(duplicate);
        return records;
      } else {
        var record = this._findRecord(ids);
        if (!record) {
          return null;
        }
        return duplicate(record);
      }
    }
    /**
      Returns the first model from `collection` that matches the
      key-value pairs in the `query` object. Note that a string
      comparison is used. `query` is a POJO.
       ```js
      // Given users = [ { id: 1, name: 'Link' }, { id: 2, name: 'Zelda' } ]
      db.users.findBy({ name: 'Link' }); // { id: 1, name: 'Link' }
      ```
       @method find
      @param query
      @public
     */
  }, {
    key: "findBy",
    value: function findBy(query) {
      var record = this._findRecordBy(query);
      if (!record) {
        return null;
      }
      return duplicate(record);
    }
    /**
      Returns an array of models from `collection` that match the
      key-value pairs in the `query` object. Note that a string
      comparison is used. `query` is a POJO.
       ```js
      // Given users = [ { id: 1, name: 'Link' }, { id: 2, name: 'Zelda' } ]
       db.users.where({ name: 'Zelda' }); // [ { id: 2, name: 'Zelda' } ]
      ```
       @method where
      @param query
      @public
     */
  }, {
    key: "where",
    value: function where(query) {
      return this._findRecordsWhere(query).map(duplicate);
    }
    /**
      Finds the first record matching the provided _query_ in
      `collection`, or creates a new record using a merge of the
      `query` and optional `attributesForCreate`.
       Often times you may have a pattern like the following in your API stub:
       ```js
      // Given users = [
      //   { id: 1, name: 'Link' },
      //   { id: 2, name: 'Zelda' }
      // ]
       // Create Link if he doesn't yet exist
      let records = db.users.where({ name: 'Link' });
      let record;
       if (records.length > 0) {
        record = records[0];
      } else {
        record = db.users.insert({ name: 'Link' });
      }
      ```
       You can now replace this with the following:
       ```js
      let record = db.users.firstOrCreate({ name: 'Link' });
      ```
       An extended example using *attributesForCreate*:
       ```js
      let record = db.users.firstOrCreate({ name: 'Link' }, { evil: false });
      ```
       @method firstOrCreate
      @param query
      @param attributesForCreate
      @public
     */
  }, {
    key: "firstOrCreate",
    value: function firstOrCreate(query) {
      var attributesForCreate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var queryResult = this.where(query);
      var _queryResult = _slicedToArray(queryResult, 1), record = _queryResult[0];
      if (record) {
        return record;
      } else {
        var mergedAttributes = Object.assign(attributesForCreate, query);
        var createdRecord = this.insert(mergedAttributes);
        return createdRecord;
      }
    }
    /**
      Updates one or more records in the collection.
       If *attrs* is the only arg present, updates all records in the collection according to the key-value pairs in *attrs*.
       If *target* is present, restricts updates to those that match *target*. If *target* is a number or string, finds a single record whose id is *target* to update. If *target* is a POJO, queries *collection* for records that match the key-value pairs in *target*, and updates their *attrs*.
       Returns the updated record or records.
       ```js
      // Given users = [
      //   {id: 1, name: 'Link'},
      //   {id: 2, name: 'Zelda'}
      // ]
       db.users.update({name: 'Ganon'}); // db.users = [{id: 1, name: 'Ganon'}, {id: 2, name: 'Ganon'}]
      db.users.update(1, {name: 'Young Link'}); // db.users = [{id: 1, name: 'Young Link'}, {id: 2, name: 'Zelda'}]
      db.users.update({name: 'Link'}, {name: 'Epona'}); // db.users = [{id: 1, name: 'Epona'}, {id: 2, name: 'Zelda'}]
      ```
       @method update
      @param target
      @param attrs
      @public
     */
  }, {
    key: "update",
    value: function update(target, attrs) {
      var _this2 = this;
      var records;
      if (typeof attrs === "undefined") {
        attrs = target;
        var changedRecords = [];
        this._records.forEach(function(record2) {
          var oldRecord = Object.assign({}, record2);
          _this2._updateRecord(record2, attrs);
          if (!(0, import_isEqual.default)(oldRecord, record2)) {
            changedRecords.push(record2);
          }
        });
        return changedRecords;
      } else if (typeof target === "number" || typeof target === "string") {
        var id = target;
        var record = this._findRecord(id);
        this._updateRecord(record, attrs);
        return record;
      } else if (Array.isArray(target)) {
        var ids = target;
        records = this._findRecords(ids);
        records.forEach(function(record2) {
          _this2._updateRecord(record2, attrs);
        });
        return records;
      } else if (_typeof(target) === "object") {
        var query = target;
        records = this._findRecordsWhere(query);
        records.forEach(function(record2) {
          _this2._updateRecord(record2, attrs);
        });
        return records;
      }
    }
    /**
      Removes one or more records in *collection*.
       If *target* is undefined, removes all records. If *target* is a number or string, removes a single record using *target* as id. If *target* is a POJO, queries *collection* for records that match the key-value pairs in *target*, and removes them from the collection.
       ```js
      // Given users = [
      //   {id: 1, name: 'Link'},
      //   {id: 2, name: 'Zelda'}
      // ]
       db.users.remove(); // db.users = []
      db.users.remove(1); // db.users = [{id: 2, name: 'Zelda'}]
      db.users.remove({name: 'Zelda'}); // db.users = [{id: 1, name: 'Link'}]
      ```
       @method remove
      @param target
      @public
     */
  }, {
    key: "remove",
    value: function remove2(target) {
      var _this3 = this;
      var records;
      if (typeof target === "undefined") {
        this._records = [];
        this.identityManager.reset();
      } else if (typeof target === "number" || typeof target === "string") {
        var record = this._findRecord(target);
        var index2 = this._records.indexOf(record);
        this._records.splice(index2, 1);
      } else if (Array.isArray(target)) {
        records = this._findRecords(target);
        records.forEach(function(record2) {
          var index3 = _this3._records.indexOf(record2);
          _this3._records.splice(index3, 1);
        });
      } else if (_typeof(target) === "object") {
        records = this._findRecordsWhere(target);
        records.forEach(function(record2) {
          var index3 = _this3._records.indexOf(record2);
          _this3._records.splice(index3, 1);
        });
      }
    }
    /*
      Private methods.
       These return the actual db objects, whereas the public
      API query methods return copies.
    */
    /**
      @method _findRecord
      @param id
      @private
      @hide
     */
  }, {
    key: "_findRecord",
    value: function _findRecord(id) {
      id = id.toString();
      return this._records.find(function(obj) {
        return obj.id === id;
      });
    }
    /**
      @method _findRecordBy
      @param query
      @private
      @hide
     */
  }, {
    key: "_findRecordBy",
    value: function _findRecordBy(query) {
      return this._findRecordsWhere(query)[0];
    }
    /**
      @method _findRecords
      @param ids
      @private
      @hide
     */
  }, {
    key: "_findRecords",
    value: function _findRecords(ids) {
      return ids.map(this._findRecord, this);
    }
    /**
      @method _findRecordsWhere
      @param query
      @private
      @hide
     */
  }, {
    key: "_findRecordsWhere",
    value: function _findRecordsWhere(query) {
      var records = this._records;
      function defaultQueryFunction(record) {
        var keys = Object.keys(query);
        return keys.every(function(key) {
          return String(record[key]) === String(query[key]);
        });
      }
      var queryFunction = _typeof(query) === "object" ? defaultQueryFunction : query;
      return records.filter(queryFunction);
    }
    /**
      @method _insertRecord
      @param data
      @private
      @hide
     */
  }, {
    key: "_insertRecord",
    value: function _insertRecord(data) {
      var attrs = duplicate(data);
      if (attrs && (attrs.id === void 0 || attrs.id === null)) {
        attrs.id = this.identityManager.fetch(attrs);
      } else {
        attrs.id = attrs.id.toString();
        this.identityManager.set(attrs.id);
      }
      this._records.push(attrs);
      return duplicate(attrs);
    }
    /**
      @method _updateRecord
      @param record
      @param attrs
      @private
      @hide
     */
  }, {
    key: "_updateRecord",
    value: function _updateRecord(record, attrs) {
      var targetId = attrs && Object.prototype.hasOwnProperty.call(attrs, "id") ? attrs.id.toString() : null;
      var currentId = record.id;
      if (targetId && currentId !== targetId) {
        throw new Error("Updating the ID of a record is not permitted");
      }
      for (var attr in attrs) {
        if (attr === "id") {
          continue;
        }
        record[attr] = attrs[attr];
      }
    }
  }]);
  return DbCollection2;
}();
var Db = function() {
  function Db2(initialData, identityManagers) {
    _classCallCheck(this, Db2);
    this._collections = [];
    this.registerIdentityManagers(identityManagers);
    if (initialData) {
      this.loadData(initialData);
    }
  }
  _createClass(Db2, [{
    key: "loadData",
    value: function loadData(data) {
      for (var key in data) {
        this.createCollection(key, (0, import_cloneDeep.default)(data[key]));
      }
    }
    /**
     Logs out the contents of the Db.
      ```js
     server.db.dump() // { users: [ name: 'Yehuda', ...
     ```
      @method dump
     @public
     */
  }, {
    key: "dump",
    value: function dump() {
      return this._collections.reduce(function(data, collection) {
        data[collection.name] = collection.all();
        return data;
      }, {});
    }
    /**
      Add an empty collection named _name_ to your database. Typically you won’t need to do this yourself, since collections are automatically created for any models you have defined.
       @method createCollection
      @param name
      @param initialData (optional)
      @public
     */
  }, {
    key: "createCollection",
    value: function createCollection(name, initialData) {
      if (!this[name]) {
        var _IdentityManager = this.identityManagerFor(name);
        var newCollection = new DbCollection(name, initialData, _IdentityManager);
        Object.defineProperty(this, name, {
          get: function get3() {
            var recordsCopy = newCollection.all();
            ["insert", "find", "findBy", "where", "update", "remove", "firstOrCreate"].forEach(function(method) {
              recordsCopy[method] = function() {
                return newCollection[method].apply(newCollection, arguments);
              };
            });
            return recordsCopy;
          }
        });
        Object.defineProperty(this, "_".concat(name), {
          get: function get3() {
            var recordsCopy = [];
            ["insert", "find", "findBy", "where", "update", "remove", "firstOrCreate"].forEach(function(method) {
              recordsCopy[method] = function() {
                return newCollection[method].apply(newCollection, arguments);
              };
            });
            return recordsCopy;
          }
        });
        this._collections.push(newCollection);
      } else if (initialData) {
        this[name].insert(initialData);
      }
      return this;
    }
    /**
      @method createCollections
      @param ...collections
      @public
      @hide
     */
  }, {
    key: "createCollections",
    value: function createCollections() {
      var _this = this;
      for (var _len = arguments.length, collections = new Array(_len), _key = 0; _key < _len; _key++) {
        collections[_key] = arguments[_key];
      }
      collections.forEach(function(c) {
        return _this.createCollection(c);
      });
    }
    /**
      Removes all data from Mirage's database.
       @method emptyData
      @public
     */
  }, {
    key: "emptyData",
    value: function emptyData() {
      this._collections.forEach(function(c) {
        return c.remove();
      });
    }
    /**
      @method identityManagerFor
      @param name
      @public
      @hide
     */
  }, {
    key: "identityManagerFor",
    value: function identityManagerFor(name) {
      return this._identityManagers[this._container.inflector.singularize(name)] || this._identityManagers.application || IdentityManager;
    }
    /**
      @method registerIdentityManagers
      @public
      @hide
     */
  }, {
    key: "registerIdentityManagers",
    value: function registerIdentityManagers(identityManagers) {
      this._identityManagers = identityManagers || {};
    }
  }]);
  return Db2;
}();
var Collection = function() {
  function Collection2(modelName) {
    var models = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    _classCallCheck(this, Collection2);
    assert(modelName && typeof modelName === "string", "You must pass a `modelName` into a Collection");
    this.modelName = modelName;
    this.models = models;
  }
  _createClass(Collection2, [{
    key: "length",
    get: function get3() {
      return this.models.length;
    }
    /**
       Updates each model in the collection, and immediately persists all changes to the db.
        ```js
       let posts = user.blogPosts;
        posts.update('published', true); // the db was updated for all posts
       ```
        @method update
       @param key
       @param val
       @return this
       @public
     */
  }, {
    key: "update",
    value: function update() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      import_invokeMap.default.apply(void 0, [this.models, "update"].concat(args));
      return this;
    }
    /**
       Saves all models in the collection.
        ```js
       let posts = user.blogPosts;
        posts.models[0].published = true;
        posts.save(); // all posts saved to db
       ```
        @method save
       @return this
       @public
     */
  }, {
    key: "save",
    value: function save() {
      (0, import_invokeMap.default)(this.models, "save");
      return this;
    }
    /**
      Reloads each model in the collection.
       ```js
      let posts = author.blogPosts;
       // ...
       posts.reload(); // reloads data for each post from the db
      ```
       @method reload
      @return this
      @public
    */
  }, {
    key: "reload",
    value: function reload() {
      (0, import_invokeMap.default)(this.models, "reload");
      return this;
    }
    /**
      Destroys the db record for all models in the collection.
       ```js
      let posts = user.blogPosts;
       posts.destroy(); // all posts removed from db
      ```
       @method destroy
      @return this
      @public
    */
  }, {
    key: "destroy",
    value: function destroy() {
      (0, import_invokeMap.default)(this.models, "destroy");
      return this;
    }
    /**
      Adds a model to this collection.
       ```js
      posts.length; // 1
       posts.add(newPost);
       posts.length; // 2
      ```
       @method add
      @param {Model} model
      @return this
      @public
    */
  }, {
    key: "add",
    value: function add3(model) {
      this.models.push(model);
      return this;
    }
    /**
      Removes a model from this collection.
       ```js
      posts.length; // 5
       let firstPost = posts.models[0];
      posts.remove(firstPost);
      posts.save();
       posts.length; // 4
      ```
       @method remove
      @param {Model} model
      @return this
      @public
    */
  }, {
    key: "remove",
    value: function remove2(model) {
      var match2 = this.models.find(function(m) {
        return m.toString() === model.toString();
      });
      if (match2) {
        var i = this.models.indexOf(match2);
        this.models.splice(i, 1);
      }
      return this;
    }
    /**
      Checks if the Collection includes the given model.
       ```js
      posts.includes(newPost);
      ```
       Works by checking if the given model name and id exists in the Collection,
      making it a bit more flexible than strict object equality.
       ```js
      let post = server.create('post');
      let programming = server.create('tag', { text: 'Programming' });
       visit(`/posts/${post.id}`);
      click('.tag-selector');
      click('.tag:contains(Programming)');
       post.reload();
      assert.ok(post.tags.includes(programming));
      ```
       @method includes
      @return {Boolean}
      @public
    */
  }, {
    key: "includes",
    value: function includes(model) {
      return this.models.some(function(m) {
        return m.toString() === model.toString();
      });
    }
    /**
      Returns a new Collection with its models filtered according to the provided [callback function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).
       ```js
      let publishedPosts = user.posts.filter(post => post.isPublished);
      ```
      @method filter
      @param {Function} f
      @return {Collection}
      @public
    */
  }, {
    key: "filter",
    value: function filter(f) {
      var filteredModels = this.models.filter(f);
      return new Collection2(this.modelName, filteredModels);
    }
    /**
       Returns a new Collection with its models sorted according to the provided [compare function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Parameters).
        ```js
       let postsByTitleAsc = user.posts.sort((a, b) => a.title > b.title ? 1 : -1 );
       ```
        @method sort
       @param {Function} f
       @return {Collection}
       @public
     */
  }, {
    key: "sort",
    value: function sort(f) {
      var sortedModels = this.models.concat().sort(f);
      return new Collection2(this.modelName, sortedModels);
    }
    /**
      Returns a new Collection with a subset of its models selected from `begin` to `end`.
       ```js
      let firstThreePosts = user.posts.slice(0, 3);
      ```
       @method slice
      @param {Integer} begin
      @param {Integer} end
      @return {Collection}
      @public
    */
  }, {
    key: "slice",
    value: function slice() {
      var _this$models;
      var slicedModels = (_this$models = this.models).slice.apply(_this$models, arguments);
      return new Collection2(this.modelName, slicedModels);
    }
    /**
      Modifies the Collection by merging the models from another collection.
       ```js
      user.posts.mergeCollection(newPosts);
      user.posts.save();
      ```
       @method mergeCollection
      @param {Collection} collection
      @return this
      @public
     */
  }, {
    key: "mergeCollection",
    value: function mergeCollection(collection) {
      this.models = this.models.concat(collection.models);
      return this;
    }
    /**
       Simple string representation of the collection and id.
        ```js
       user.posts.toString(); // collection:post(post:1,post:4)
       ```
        @method toString
       @return {String}
       @public
     */
  }, {
    key: "toString",
    value: function toString3() {
      return "collection:".concat(this.modelName, "(").concat(this.models.map(function(m) {
        return m.id;
      }).join(","), ")");
    }
  }]);
  return Collection2;
}();
var PolymorphicCollection = function() {
  function PolymorphicCollection2() {
    var models = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    _classCallCheck(this, PolymorphicCollection2);
    this.models = models;
  }
  _createClass(PolymorphicCollection2, [{
    key: "length",
    get: function get3() {
      return this.models.length;
    }
    /**
     * Updates each model in the collection (persisting immediately to the db).
     * @method update
     * @param key
     * @param val
     * @return this
     * @public
     */
  }, {
    key: "update",
    value: function update() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      import_invokeMap.default.apply(void 0, [this.models, "update"].concat(args));
      return this;
    }
    /**
     * Destroys the db record for all models in the collection.
     * @method destroy
     * @return this
     * @public
     */
  }, {
    key: "destroy",
    value: function destroy() {
      (0, import_invokeMap.default)(this.models, "destroy");
      return this;
    }
    /**
     * Saves all models in the collection.
     * @method save
     * @return this
     * @public
     */
  }, {
    key: "save",
    value: function save() {
      (0, import_invokeMap.default)(this.models, "save");
      return this;
    }
    /**
     * Reloads each model in the collection.
     * @method reload
     * @return this
     * @public
     */
  }, {
    key: "reload",
    value: function reload() {
      (0, import_invokeMap.default)(this.models, "reload");
      return this;
    }
    /**
     * Adds a model to this collection
     *
     * @method add
     * @return this
     * @public
     */
  }, {
    key: "add",
    value: function add3(model) {
      this.models.push(model);
      return this;
    }
    /**
     * Removes a model to this collection
     *
     * @method remove
     * @return this
     * @public
     */
  }, {
    key: "remove",
    value: function remove2(model) {
      var match2 = this.models.find(function(m) {
        return (0, import_isEqual.default)(m.attrs, model.attrs);
      });
      if (match2) {
        var i = this.models.indexOf(match2);
        this.models.splice(i, 1);
      }
      return this;
    }
    /**
     * Checks if the collection includes the model
     *
     * @method includes
     * @return boolean
     * @public
     */
  }, {
    key: "includes",
    value: function includes(model) {
      return this.models.some(function(m) {
        return (0, import_isEqual.default)(m.attrs, model.attrs);
      });
    }
    /**
     * @method filter
     * @param f
     * @return {Collection}
     * @public
     */
  }, {
    key: "filter",
    value: function filter(f) {
      var filteredModels = this.models.filter(f);
      return new PolymorphicCollection2(filteredModels);
    }
    /**
     * @method sort
     * @param f
     * @return {Collection}
     * @public
     */
  }, {
    key: "sort",
    value: function sort(f) {
      var sortedModels = this.models.concat().sort(f);
      return new PolymorphicCollection2(sortedModels);
    }
    /**
     * @method slice
     * @param {Integer} begin
     * @param {Integer} end
     * @return {Collection}
     * @public
     */
  }, {
    key: "slice",
    value: function slice() {
      var _this$models;
      var slicedModels = (_this$models = this.models).slice.apply(_this$models, arguments);
      return new PolymorphicCollection2(slicedModels);
    }
    /**
     * @method mergeCollection
     * @param collection
     * @return this
     * @public
     */
  }, {
    key: "mergeCollection",
    value: function mergeCollection(collection) {
      this.models = this.models.concat(collection.models);
      return this;
    }
    /**
     * Simple string representation of the collection and id.
     * @method toString
     * @return {String}
     * @public
     */
  }, {
    key: "toString",
    value: function toString3() {
      return "collection:".concat(this.modelName, "(").concat(this.models.map(function(m) {
        return m.id;
      }).join(","), ")");
    }
  }]);
  return PolymorphicCollection2;
}();
var identifierCache = {};
var HasMany = function(_Association) {
  _inherits(HasMany2, _Association);
  var _super = _createSuper(HasMany2);
  function HasMany2() {
    _classCallCheck(this, HasMany2);
    return _super.apply(this, arguments);
  }
  _createClass(HasMany2, [{
    key: "identifier",
    get: function get3() {
      if (typeof identifierCache[this.name] !== "string") {
        var identifier = "".concat(camelize2(this._container.inflector.singularize(this.name)), "Ids");
        identifierCache[this.name] = identifier;
      }
      return identifierCache[this.name];
    }
  }, {
    key: "type",
    get: function get3() {
      return "hasMany";
    }
    /**
     * @method getForeignKeyArray
     * @return {Array} Array of camelized model name of associated objects
     * and foreign key for the object owning the association
     * @public
     */
  }, {
    key: "getForeignKeyArray",
    value: function getForeignKeyArray() {
      return [camelize2(this.ownerModelName), this.getForeignKey()];
    }
    /**
     * @method getForeignKey
     * @return {String} Foreign key for the object owning the association
     * @public
     */
  }, {
    key: "getForeignKey",
    value: function getForeignKey() {
      if (typeof identifierCache[this.name] !== "string") {
        var foreignKey = "".concat(this._container.inflector.singularize(camelize2(this.name)), "Ids");
        identifierCache[this.name] = foreignKey;
      }
      return identifierCache[this.name];
    }
    /**
     * Registers has-many association defined by given key on given model,
     * defines getters / setters for associated records and associated records' ids,
     * adds methods for creating unsaved child records and creating saved ones
     *
     * @method addMethodsToModelClass
     * @param {Function} ModelClass
     * @param {String} key
     * @public
     */
  }, {
    key: "addMethodsToModelClass",
    value: function addMethodsToModelClass(ModelClass, key) {
      var modelPrototype = ModelClass.prototype;
      var association3 = this;
      var foreignKey = this.getForeignKey();
      var associationHash = _defineProperty({}, key, this);
      modelPrototype.hasManyAssociations = Object.assign(modelPrototype.hasManyAssociations, associationHash);
      Object.keys(modelPrototype.hasManyAssociations).forEach(function(key2) {
        var value = modelPrototype.hasManyAssociations[key2];
        modelPrototype.hasManyAssociationFks[value.getForeignKey()] = value;
      });
      this.schema.addDependentAssociation(this, this.modelName);
      modelPrototype.associationKeys.add(key);
      modelPrototype.associationIdKeys.add(foreignKey);
      Object.defineProperty(modelPrototype, foreignKey, {
        /*
          object.childrenIds
            - returns an array of the associated children's ids
        */
        get: function get3() {
          this._tempAssociations = this._tempAssociations || {};
          var tempChildren = this._tempAssociations[key];
          var ids = [];
          if (tempChildren) {
            if (association3.isPolymorphic) {
              ids = tempChildren.models.map(function(model) {
                return {
                  type: model.modelName,
                  id: model.id
                };
              });
            } else {
              ids = tempChildren.models.map(function(model) {
                return model.id;
              });
            }
          } else {
            ids = this.attrs[foreignKey] || [];
          }
          return ids;
        },
        /*
          object.childrenIds = ([childrenIds...])
            - sets the associated children (via id)
        */
        set: function set2(ids) {
          var tempChildren;
          if (ids === null) {
            tempChildren = [];
          } else if (ids !== void 0) {
            assert(Array.isArray(ids), "You must pass an array in when setting ".concat(foreignKey, " on ").concat(this));
            if (association3.isPolymorphic) {
              assert(ids.every(function(el) {
                return _typeof(el) === "object" && _typeof(el.type) !== void 0 && _typeof(el.id) !== void 0;
              }), "You must pass in an array of polymorphic identifiers (objects of shape { type, id }) when setting ".concat(foreignKey, " on ").concat(this));
              var models = ids.map(function(_ref) {
                var type = _ref.type, id = _ref.id;
                return association3.schema[association3.schema.toCollectionName(type)].find(id);
              });
              tempChildren = new PolymorphicCollection(models);
            } else {
              tempChildren = association3.schema[association3.schema.toCollectionName(association3.modelName)].find(ids);
            }
          }
          this[key] = tempChildren;
        }
      });
      Object.defineProperty(modelPrototype, key, {
        /*
          object.children
            - returns an array of associated children
        */
        get: function get3() {
          this._tempAssociations = this._tempAssociations || {};
          var collection = null;
          if (this._tempAssociations[key]) {
            collection = this._tempAssociations[key];
          } else {
            if (association3.isPolymorphic) {
              if (this[foreignKey]) {
                var polymorphicIds = this[foreignKey];
                var models = polymorphicIds.map(function(_ref2) {
                  var type = _ref2.type, id = _ref2.id;
                  return association3.schema[association3.schema.toCollectionName(type)].find(id);
                });
                collection = new PolymorphicCollection(models);
              } else {
                collection = new PolymorphicCollection(association3.modelName);
              }
            } else {
              if (this[foreignKey]) {
                collection = association3.schema[association3.schema.toCollectionName(association3.modelName)].find(this[foreignKey]);
              } else {
                collection = new Collection(association3.modelName);
              }
            }
            this._tempAssociations[key] = collection;
          }
          return collection;
        },
        /*
          object.children = [model1, model2, ...]
            - sets the associated children (via array of models or Collection)
        */
        set: function set2(models) {
          var _this = this;
          if (models instanceof Collection || models instanceof PolymorphicCollection) {
            models = models.models;
          }
          models = models ? (0, import_compact.default)(models) : [];
          this._tempAssociations = this._tempAssociations || {};
          var collection;
          if (association3.isPolymorphic) {
            collection = new PolymorphicCollection(models);
          } else {
            collection = new Collection(association3.modelName, models);
          }
          this._tempAssociations[key] = collection;
          models.forEach(function(model) {
            if (model.hasInverseFor(association3)) {
              var inverse = model.inverseFor(association3);
              model.associate(_this, inverse);
            }
          });
        }
      });
      modelPrototype["new".concat(capitalize2(camelize2(this._container.inflector.singularize(association3.name))))] = function() {
        var modelName, attrs;
        if (association3.isPolymorphic) {
          modelName = arguments.length <= 0 ? void 0 : arguments[0];
          attrs = arguments.length <= 1 ? void 0 : arguments[1];
        } else {
          modelName = association3.modelName;
          attrs = arguments.length <= 0 ? void 0 : arguments[0];
        }
        var child = association3.schema[association3.schema.toCollectionName(modelName)]["new"](attrs);
        var children = this[key].models;
        children.push(child);
        this[key] = children;
        return child;
      };
      modelPrototype["create".concat(capitalize2(camelize2(this._container.inflector.singularize(association3.name))))] = function() {
        var modelName, attrs;
        if (association3.isPolymorphic) {
          modelName = arguments.length <= 0 ? void 0 : arguments[0];
          attrs = arguments.length <= 1 ? void 0 : arguments[1];
        } else {
          modelName = association3.modelName;
          attrs = arguments.length <= 0 ? void 0 : arguments[0];
        }
        var child = association3.schema[association3.schema.toCollectionName(modelName)].create(attrs);
        var children = this[key].models;
        children.push(child);
        this[key] = children;
        this.save();
        return child.reload();
      };
    }
    /**
     *
     *
     * @public
     */
  }, {
    key: "disassociateAllDependentsFromTarget",
    value: function disassociateAllDependentsFromTarget(model) {
      var _this2 = this;
      var owner = this.ownerModelName;
      var fk;
      if (this.isPolymorphic) {
        fk = {
          type: model.modelName,
          id: model.id
        };
      } else {
        fk = model.id;
      }
      var dependents = this.schema[this.schema.toCollectionName(owner)].where(function(potentialOwner) {
        var currentIds = potentialOwner[_this2.getForeignKey()];
        return currentIds && currentIds.find(function(id) {
          if (_typeof(id) === "object") {
            return id.type === fk.type && id.id === fk.id;
          } else {
            return id === fk;
          }
        });
      });
      dependents.models.forEach(function(dependent) {
        dependent.disassociate(model, _this2);
        dependent.save();
      });
    }
  }]);
  return HasMany2;
}(Association);
var pathModelClassCache = {};
var BaseRouteHandler = function() {
  function BaseRouteHandler2() {
    _classCallCheck(this, BaseRouteHandler2);
  }
  _createClass(BaseRouteHandler2, [{
    key: "getModelClassFromPath",
    value: function getModelClassFromPath(fullPath) {
      if (!fullPath) {
        return;
      }
      if (typeof pathModelClassCache[fullPath] !== "string") {
        var path = fullPath.split("/");
        var lastPath;
        for (var i = path.length - 1; i >= 0; i--) {
          var segment = path[i];
          if (segment.length && segment[0] !== ":") {
            lastPath = segment;
            break;
          }
        }
        pathModelClassCache[fullPath] = dasherize2(camelize2(this._container.inflector.singularize(lastPath)));
      }
      return pathModelClassCache[fullPath];
    }
  }, {
    key: "_getIdForRequest",
    value: function _getIdForRequest(request, jsonApiDoc) {
      var id;
      if (request && request.params && request.params.id) {
        id = request.params.id;
      } else if (jsonApiDoc && jsonApiDoc.data && jsonApiDoc.data.id) {
        id = jsonApiDoc.data.id;
      }
      return id;
    }
  }, {
    key: "_getJsonApiDocForRequest",
    value: function _getJsonApiDocForRequest(request, modelName) {
      var body;
      if (request && request.requestBody) {
        body = JSON.parse(request.requestBody);
      }
      return this.serializerOrRegistry.normalize(body, modelName);
    }
  }, {
    key: "_getAttrsForRequest",
    value: function _getAttrsForRequest(request, modelName) {
      var _this = this;
      var json = this._getJsonApiDocForRequest(request, modelName);
      var id = this._getIdForRequest(request, json);
      var attrs = {};
      assert(json.data && (json.data.attributes || json.data.type || json.data.relationships), "You're using a shorthand or #normalizedRequestAttrs, but your serializer's normalize function did not return a valid JSON:API document. Consult the docs for the normalize hook on the Serializer class.");
      if (json.data.attributes) {
        attrs = Object.keys(json.data.attributes).reduce(function(sum, key) {
          sum[camelize2(key)] = json.data.attributes[key];
          return sum;
        }, {});
      }
      if (json.data.relationships) {
        Object.keys(json.data.relationships).forEach(function(relationshipName) {
          var relationship = json.data.relationships[relationshipName];
          var modelClass = _this.schema.modelClassFor(modelName);
          var association3 = modelClass.associationFor(camelize2(relationshipName));
          var valueForRelationship;
          assert(association3, "You're passing the relationship '".concat(relationshipName, "' to the '").concat(modelName, "' model via a ").concat(request.method, " to '").concat(request.url, "', but you did not define the '").concat(relationshipName, "' association on the '").concat(modelName, "' model."));
          if (association3.isPolymorphic) {
            valueForRelationship = relationship.data;
          } else if (association3 instanceof HasMany) {
            valueForRelationship = relationship.data && relationship.data.map(function(rel) {
              return rel.id;
            });
          } else {
            valueForRelationship = relationship.data && relationship.data.id;
          }
          attrs[association3.identifier] = valueForRelationship;
        }, {});
      }
      if (id) {
        attrs.id = id;
      }
      return attrs;
    }
  }, {
    key: "_getAttrsForFormRequest",
    value: function _getAttrsForFormRequest(_ref) {
      var requestBody = _ref.requestBody;
      var attrs;
      var urlEncodedParts = [];
      assert(requestBody && typeof requestBody === "string", "You're using the helper method #normalizedFormData, but the request body is empty or not a valid url encoded string.");
      urlEncodedParts = requestBody.split("&");
      attrs = urlEncodedParts.reduce(function(a, urlEncodedPart) {
        var _urlEncodedPart$split = urlEncodedPart.split("="), _urlEncodedPart$split2 = _slicedToArray(_urlEncodedPart$split, 2), key = _urlEncodedPart$split2[0], value = _urlEncodedPart$split2[1];
        a[key] = decodeURIComponent(value.replace(/\+/g, " "));
        return a;
      }, {});
      return attrs;
    }
  }]);
  return BaseRouteHandler2;
}();
var FunctionRouteHandler = function(_BaseRouteHandler) {
  _inherits(FunctionRouteHandler2, _BaseRouteHandler);
  var _super = _createSuper(FunctionRouteHandler2);
  function FunctionRouteHandler2(schema, serializerOrRegistry, userFunction, path, server) {
    var _this;
    _classCallCheck(this, FunctionRouteHandler2);
    _this = _super.call(this, server);
    _this.schema = schema;
    _this.serializerOrRegistry = serializerOrRegistry;
    _this.userFunction = userFunction;
    _this.path = path;
    return _this;
  }
  _createClass(FunctionRouteHandler2, [{
    key: "handle",
    value: function handle(request) {
      return this.userFunction(this.schema, request);
    }
  }, {
    key: "setRequest",
    value: function setRequest(request) {
      this.request = request;
    }
  }, {
    key: "serialize",
    value: function serialize(response, serializerType) {
      var serializer;
      if (serializerType) {
        serializer = this.serializerOrRegistry.serializerFor(serializerType, {
          explicit: true
        });
      } else {
        serializer = this.serializerOrRegistry;
      }
      return serializer.serialize(response, this.request);
    }
  }, {
    key: "normalizedRequestAttrs",
    value: function normalizedRequestAttrs() {
      var modelName = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
      var path = this.path, request = this.request, requestHeaders = this.request.requestHeaders;
      var attrs;
      var lowerCaseHeaders = {};
      for (var header in requestHeaders) {
        lowerCaseHeaders[header.toLowerCase()] = requestHeaders[header];
      }
      if (/x-www-form-urlencoded/.test(lowerCaseHeaders["content-type"])) {
        attrs = this._getAttrsForFormRequest(request);
      } else {
        if (modelName) {
          assert(dasherize2(modelName) === modelName, "You called normalizedRequestAttrs('".concat(modelName, "'), but normalizedRequestAttrs was intended to be used with the dasherized version of the model type. Please change this to normalizedRequestAttrs('").concat(dasherize2(modelName), "')."));
        } else {
          modelName = this.getModelClassFromPath(path);
        }
        assert(this.schema.hasModelForModelName(modelName), "You're using a shorthand or the #normalizedRequestAttrs helper but the detected model of '".concat(modelName, "' does not exist. You might need to pass in the correct modelName as the first argument to #normalizedRequestAttrs."));
        attrs = this._getAttrsForRequest(request, modelName);
      }
      return attrs;
    }
  }]);
  return FunctionRouteHandler2;
}(BaseRouteHandler);
var ObjectRouteHandler = function() {
  function ObjectRouteHandler2(schema, serializerOrRegistry, object) {
    _classCallCheck(this, ObjectRouteHandler2);
    this.schema = schema;
    this.serializerOrRegistry = serializerOrRegistry;
    this.object = object;
  }
  _createClass(ObjectRouteHandler2, [{
    key: "handle",
    value: function handle() {
      return this.object;
    }
  }]);
  return ObjectRouteHandler2;
}();
var BaseShorthandRouteHandler = function(_BaseRouteHandler) {
  _inherits(BaseShorthandRouteHandler2, _BaseRouteHandler);
  var _super = _createSuper(BaseShorthandRouteHandler2);
  function BaseShorthandRouteHandler2(schema, serializerOrRegistry, shorthand, path) {
    var _this;
    var options = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
    _classCallCheck(this, BaseShorthandRouteHandler2);
    _this = _super.call(this);
    shorthand = shorthand || _this.getModelClassFromPath(path);
    _this.schema = schema;
    _this.serializerOrRegistry = serializerOrRegistry;
    _this.shorthand = shorthand;
    _this.options = options;
    var type = Array.isArray(shorthand) ? "array" : _typeof(shorthand);
    if (type === "string") {
      var modelClass = _this.schema[_this.schema.toCollectionName(shorthand)];
      _this.handle = function(request) {
        return _this.handleStringShorthand(request, modelClass);
      };
    } else if (type === "array") {
      var modelClasses = shorthand.map(function(modelName) {
        return _this.schema[_this.schema.toCollectionName(modelName)];
      });
      _this.handle = function(request) {
        return _this.handleArrayShorthand(request, modelClasses);
      };
    }
    return _this;
  }
  return BaseShorthandRouteHandler2;
}(BaseRouteHandler);
var GetShorthandRouteHandler = function(_BaseShorthandRouteHa) {
  _inherits(GetShorthandRouteHandler2, _BaseShorthandRouteHa);
  var _super = _createSuper(GetShorthandRouteHandler2);
  function GetShorthandRouteHandler2() {
    _classCallCheck(this, GetShorthandRouteHandler2);
    return _super.apply(this, arguments);
  }
  _createClass(GetShorthandRouteHandler2, [{
    key: "handleStringShorthand",
    value: (
      /*
        Retrieve a model/collection from the db.
         Examples:
          this.get('/contacts', 'contact');
          this.get('/contacts/:id', 'contact');
      */
      function handleStringShorthand(request, modelClass) {
        var modelName = this.shorthand;
        var camelizedModelName = camelize2(modelName);
        assert(modelClass, "The route handler for ".concat(request.url, " is trying to access the ").concat(camelizedModelName, " model, but that model doesn't exist."));
        var id = this._getIdForRequest(request);
        if (id) {
          var model = modelClass.find(id);
          if (!model) {
            return new Response2(404);
          } else {
            return model;
          }
        } else if (this.options.coalesce) {
          var ids = this.serializerOrRegistry.getCoalescedIds(request, camelizedModelName);
          if (ids) {
            return modelClass.find(ids);
          }
        }
        return modelClass.all();
      }
    )
    /*
      Retrieve an array of collections from the db.
       Ex: this.get('/home', ['contacts', 'pictures']);
    */
  }, {
    key: "handleArrayShorthand",
    value: function handleArrayShorthand(request, modelClasses) {
      var keys = this.shorthand;
      var id = this._getIdForRequest(request);
      assert(!id || this._container.inflector.singularize(keys[0]) !== keys[0], `It looks like you're using the "Single record with
      related records" version of the array shorthand, in addition to opting
      in to the model layer. This shorthand was made when there was no
      serializer layer. Now that you're using models, please ensure your
      relationships are defined, and create a serializer for the parent
      model, adding the relationships there.`);
      return modelClasses.map(function(modelClass) {
        return modelClass.all();
      });
    }
  }]);
  return GetShorthandRouteHandler2;
}(BaseShorthandRouteHandler);
var PostShorthandRouteHandler = function(_BaseShorthandRouteHa) {
  _inherits(PostShorthandRouteHandler2, _BaseShorthandRouteHa);
  var _super = _createSuper(PostShorthandRouteHandler2);
  function PostShorthandRouteHandler2() {
    _classCallCheck(this, PostShorthandRouteHandler2);
    return _super.apply(this, arguments);
  }
  _createClass(PostShorthandRouteHandler2, [{
    key: "handleStringShorthand",
    value: (
      /*
        Push a new model of type *camelizedModelName* to the db.
         For example, this will push a 'user':
          this.post('/contacts', 'user');
      */
      function handleStringShorthand(request, modelClass) {
        var modelName = this.shorthand;
        var camelizedModelName = camelize2(modelName);
        assert(modelClass, "The route handler for ".concat(request.url, " is trying to access the ").concat(camelizedModelName, " model, but that model doesn't exist."));
        var attrs = this._getAttrsForRequest(request, modelClass.camelizedModelName);
        return modelClass.create(attrs);
      }
    )
  }]);
  return PostShorthandRouteHandler2;
}(BaseShorthandRouteHandler);
var PutShorthandRouteHandler = function(_BaseShorthandRouteHa) {
  _inherits(PutShorthandRouteHandler2, _BaseShorthandRouteHa);
  var _super = _createSuper(PutShorthandRouteHandler2);
  function PutShorthandRouteHandler2() {
    _classCallCheck(this, PutShorthandRouteHandler2);
    return _super.apply(this, arguments);
  }
  _createClass(PutShorthandRouteHandler2, [{
    key: "handleStringShorthand",
    value: (
      /*
        Update an object from the db, specifying the type.
           this.put('/contacts/:id', 'user');
      */
      function handleStringShorthand(request, modelClass) {
        var modelName = this.shorthand;
        var camelizedModelName = camelize2(modelName);
        assert(modelClass, "The route handler for ".concat(request.url, " is trying to access the ").concat(camelizedModelName, " model, but that model doesn't exist."));
        var id = this._getIdForRequest(request);
        var model = modelClass.find(id);
        if (!model) {
          return new Response2(404);
        }
        var attrs = this._getAttrsForRequest(request, modelClass.camelizedModelName);
        return model.update(attrs);
      }
    )
  }]);
  return PutShorthandRouteHandler2;
}(BaseShorthandRouteHandler);
var DeleteShorthandRouteHandler = function(_BaseShorthandRouteHa) {
  _inherits(DeleteShorthandRouteHandler2, _BaseShorthandRouteHa);
  var _super = _createSuper(DeleteShorthandRouteHandler2);
  function DeleteShorthandRouteHandler2() {
    _classCallCheck(this, DeleteShorthandRouteHandler2);
    return _super.apply(this, arguments);
  }
  _createClass(DeleteShorthandRouteHandler2, [{
    key: "handleStringShorthand",
    value: (
      /*
        Remove the model from the db of type *camelizedModelName*.
         This would remove the user with id :id:
          Ex: this.del('/contacts/:id', 'user');
      */
      function handleStringShorthand(request, modelClass) {
        var modelName = this.shorthand;
        var camelizedModelName = camelize2(modelName);
        assert(modelClass, "The route handler for ".concat(request.url, " is trying to access the ").concat(camelizedModelName, " model, but that model doesn't exist."));
        var id = this._getIdForRequest(request);
        var model = modelClass.find(id);
        if (!model) {
          return new Response2(404);
        }
        model.destroy();
      }
    )
    /*
      Remove the model and child related models from the db.
       This would remove the contact with id `:id`, as well
      as this contact's addresses and phone numbers.
        Ex: this.del('/contacts/:id', ['contact', 'addresses', 'numbers');
    */
  }, {
    key: "handleArrayShorthand",
    value: function handleArrayShorthand(request, modelClasses) {
      var _this = this;
      var id = this._getIdForRequest(request);
      var parent = modelClasses[0].find(id);
      var childTypes = modelClasses.slice(1).map(function(modelClass) {
        return _this._container.inflector.pluralize(modelClass.camelizedModelName);
      });
      childTypes.forEach(function(type) {
        return parent[type].destroy();
      });
      parent.destroy();
    }
  }]);
  return DeleteShorthandRouteHandler2;
}(BaseShorthandRouteHandler);
var HeadShorthandRouteHandler = function(_BaseShorthandRouteHa) {
  _inherits(HeadShorthandRouteHandler2, _BaseShorthandRouteHa);
  var _super = _createSuper(HeadShorthandRouteHandler2);
  function HeadShorthandRouteHandler2() {
    _classCallCheck(this, HeadShorthandRouteHandler2);
    return _super.apply(this, arguments);
  }
  _createClass(HeadShorthandRouteHandler2, [{
    key: "handleStringShorthand",
    value: (
      /*
        Retrieve a model/collection from the db.
         Examples:
          this.head('/contacts', 'contact');
          this.head('/contacts/:id', 'contact');
      */
      function handleStringShorthand(request, modelClass) {
        var modelName = this.shorthand;
        var camelizedModelName = camelize2(modelName);
        assert(modelClass, "The route handler for ".concat(request.url, " is trying to access the ").concat(camelizedModelName, " model, but that model doesn't exist."));
        var id = this._getIdForRequest(request);
        if (id) {
          var model = modelClass.find(id);
          if (!model) {
            return new Response2(404);
          } else {
            return new Response2(204);
          }
        } else if (this.options.coalesce && request.queryParams && request.queryParams.ids) {
          var _model = modelClass.find(request.queryParams.ids);
          if (!_model) {
            return new Response2(404);
          } else {
            return new Response2(204);
          }
        } else {
          return new Response2(204);
        }
      }
    )
  }]);
  return HeadShorthandRouteHandler2;
}(BaseShorthandRouteHandler);
var DEFAULT_CODES = {
  get: 200,
  put: 204,
  post: 201,
  "delete": 204
};
function createHandler(_ref) {
  var verb = _ref.verb, schema = _ref.schema, serializerOrRegistry = _ref.serializerOrRegistry, path = _ref.path, rawHandler = _ref.rawHandler, options = _ref.options, middleware = _ref.middleware;
  var handler;
  var args = [schema, serializerOrRegistry, rawHandler, path, options, middleware];
  var type = _typeof(rawHandler);
  if (type === "function") {
    handler = _construct(FunctionRouteHandler, args);
  } else if (type === "object" && rawHandler) {
    handler = _construct(ObjectRouteHandler, args);
  } else if (verb === "get") {
    handler = _construct(GetShorthandRouteHandler, args);
  } else if (verb === "post") {
    handler = _construct(PostShorthandRouteHandler, args);
  } else if (verb === "put" || verb === "patch") {
    handler = _construct(PutShorthandRouteHandler, args);
  } else if (verb === "delete") {
    handler = _construct(DeleteShorthandRouteHandler, args);
  } else if (verb === "head") {
    handler = _construct(HeadShorthandRouteHandler, args);
  }
  return handler;
}
var RouteHandler = function() {
  function RouteHandler2(_ref2) {
    var schema = _ref2.schema, verb = _ref2.verb, rawHandler = _ref2.rawHandler, customizedCode = _ref2.customizedCode, options = _ref2.options, path = _ref2.path, serializerOrRegistry = _ref2.serializerOrRegistry, middleware = _ref2.middleware;
    _classCallCheck(this, RouteHandler2);
    this.verb = verb;
    this.customizedCode = customizedCode;
    this.serializerOrRegistry = serializerOrRegistry;
    this.middleware = middleware || [];
    this.handler = createHandler({
      verb,
      schema,
      path,
      serializerOrRegistry,
      rawHandler,
      options
    });
  }
  _createClass(RouteHandler2, [{
    key: "handle",
    value: function handle(request) {
      var _this = this;
      return this._getMirageResponseForRequest(request, this.middleware).then(function(mirageResponse) {
        return _this.serialize(mirageResponse, request);
      }).then(function(serializedMirageResponse) {
        return serializedMirageResponse.toRackResponse();
      });
    }
  }, {
    key: "_getMirageResponseForRequest",
    value: function _getMirageResponseForRequest(request) {
      var _this2 = this;
      var middleware = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      var result;
      try {
        if (this.handler instanceof FunctionRouteHandler) {
          this.handler.setRequest(request);
        }
        result = this.handleWithMiddleware(request, [].concat(_toConsumableArray(middleware), [function(_, req) {
          return _this2.handler.handle(req);
        }]));
      } catch (e) {
        if (e instanceof MirageError) {
          result = new Response2(500, {}, e);
        } else {
          var message = e.message || e;
          result = new Response2(500, {}, {
            message,
            stack: "Mirage: Your ".concat(request.method, " handler for the url ").concat(request.url, " threw an error:\n\n").concat(e.stack || e)
          });
        }
      }
      return this._toMirageResponse(result);
    }
  }, {
    key: "handleWithMiddleware",
    value: function handleWithMiddleware(request, middleware) {
      var _this3 = this;
      var _middleware = _toArray(middleware), current = _middleware[0], remaining = _middleware.slice(1);
      return current(this.schema, request, function() {
        var req = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : request;
        return _this3.handleWithMiddleware(req, remaining);
      });
    }
  }, {
    key: "_toMirageResponse",
    value: function _toMirageResponse(result) {
      var _this4 = this;
      var mirageResponse;
      return new Promise(function(resolve2, reject) {
        Promise.resolve(result).then(function(response) {
          if (response instanceof Response2) {
            mirageResponse = result;
          } else {
            var code = _this4._getCodeForResponse(response);
            mirageResponse = new Response2(code, {}, response);
          }
          resolve2(mirageResponse);
        })["catch"](reject);
      });
    }
  }, {
    key: "_getCodeForResponse",
    value: function _getCodeForResponse(response) {
      var code;
      if (this.customizedCode) {
        code = this.customizedCode;
      } else {
        code = DEFAULT_CODES[this.verb];
        if (code === 204 && response !== void 0 && response !== "") {
          code = 200;
        }
      }
      return code;
    }
  }, {
    key: "serialize",
    value: function serialize(mirageResponse, request) {
      mirageResponse.data = this.serializerOrRegistry.serialize(mirageResponse.data, request);
      return mirageResponse;
    }
  }]);
  return RouteHandler2;
}();
function extend(protoProps, staticProps) {
  var Child = function(_this) {
    _inherits(Child2, _this);
    var _super = _createSuper(Child2);
    function Child2() {
      var _this2;
      _classCallCheck(this, Child2);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this2 = _super.call.apply(_super, [this].concat(args));
      if (protoProps && (0, import_has.default)(protoProps, "constructor")) {
        var _protoProps$construct;
        (_protoProps$construct = protoProps.constructor).call.apply(_protoProps$construct, [_assertThisInitialized(_this2)].concat(args));
      }
      return _this2;
    }
    return Child2;
  }(this);
  Object.assign(Child, this, staticProps);
  if (protoProps) {
    Object.assign(Child.prototype, protoProps);
  }
  return Child;
}
var Model = function() {
  function Model2(schema, modelName, attrs, fks) {
    var _this = this;
    _classCallCheck(this, Model2);
    assert(schema, "A model requires a schema");
    assert(modelName, "A model requires a modelName");
    this._schema = schema;
    this.modelName = modelName;
    this.fks = fks || [];
    this.attrs = {};
    attrs = attrs || {};
    this.fks.forEach(function(fk) {
      _this.attrs[fk] = attrs[fk] !== void 0 ? attrs[fk] : null;
    });
    Object.keys(attrs).forEach(function(name) {
      var value = attrs[name];
      _this._validateAttr(name, value);
      _this._setupAttr(name, value);
      _this._setupRelationship(name, value);
    });
    return this;
  }
  _createClass(Model2, [{
    key: "save",
    value: function save() {
      var collection = this._schema.toInternalCollectionName(this.modelName);
      if (this.isNew()) {
        this.attrs = this._schema.db[collection].insert(this.attrs);
        this._definePlainAttribute("id");
      } else {
        this._schema.isSaving[this.toString()] = true;
        this._schema.db[collection].update(this.attrs.id, this.attrs);
      }
      this._saveAssociations();
      this._schema.isSaving[this.toString()] = false;
      return this;
    }
    /**
      Updates the record in the db.
       ```js
      let author = authors.find(1);
      let followers = users.find([1, 2]);
      let post = blogPosts.find(1);
      post.update('title', 'Hipster ipsum'); // the db was updated
      post.update({
        title: 'Lorem ipsum',
        created_at: 'before it was cool'
      });
      post.update({ author });
      post.update({ followers });
      ```
       @method update
      @param {String} key
      @param {any} val
      @return this
      @public
     */
  }, {
    key: "update",
    value: function update(key, val) {
      var attrs;
      if (key == null) {
        return this;
      }
      if (_typeof(key) === "object") {
        attrs = key;
      } else {
        (attrs = {})[key] = val;
      }
      Object.keys(attrs).forEach(function(attr) {
        if (!this.associationKeys.has(attr) && !this.associationIdKeys.has(attr)) {
          this._definePlainAttribute(attr);
        }
        this[attr] = attrs[attr];
      }, this);
      this.save();
      return this;
    }
    /**
      Destroys the db record.
       ```js
      let post = blogPosts.find(1);
      post.destroy(); // removed from the db
      ```
       @method destroy
      @public
     */
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.isSaved()) {
        this._disassociateFromDependents();
        var collection = this._schema.toInternalCollectionName(this.modelName);
        this._schema.db[collection].remove(this.attrs.id);
      }
    }
    /**
      Boolean, true if the model has not been persisted yet to the db.
       ```js
      let post = blogPosts.new({title: 'Lorem ipsum'});
      post.isNew(); // true
      post.id;      // null
       post.save();  // true
      post.isNew(); // false
      post.id;      // 1
      ```
       @method isNew
      @return {Boolean}
      @public
     */
  }, {
    key: "isNew",
    value: function isNew() {
      var hasDbRecord = false;
      var hasId = this.attrs.id !== void 0 && this.attrs.id !== null;
      if (hasId) {
        var collectionName = this._schema.toInternalCollectionName(this.modelName);
        var record = this._schema.db[collectionName].find(this.attrs.id);
        if (record) {
          hasDbRecord = true;
        }
      }
      return !hasDbRecord;
    }
    /**
      Boolean, opposite of `isNew`
       @method isSaved
      @return {Boolean}
      @public
     */
  }, {
    key: "isSaved",
    value: function isSaved() {
      return !this.isNew();
    }
    /**
      Reload a model's data from the database.
       ```js
      let post = blogPosts.find(1);
      post.attrs;     // {id: 1, title: 'Lorem ipsum'}
       post.title = 'Hipster ipsum';
      post.title;     // 'Hipster ipsum';
       post.reload();  // true
      post.title;     // 'Lorem ipsum'
      ```
       @method reload
      @return this
      @public
     */
  }, {
    key: "reload",
    value: function reload() {
      if (this.id) {
        var collection = this._schema.toInternalCollectionName(this.modelName);
        var attrs = this._schema.db[collection].find(this.id);
        Object.keys(attrs).filter(function(attr) {
          return attr !== "id";
        }).forEach(function(attr) {
          this.attrs[attr] = attrs[attr];
        }, this);
      }
      this._tempAssociations = {};
      return this;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return _objectSpread2({}, this.attrs);
    }
    /**
      Returns a hash of this model's associations.
       ```js
      let server = createServer({
        models: {
          user: Model,
          post: Model.extend({
            user: belongsTo(),
            comments: hasMany()
          }),
          comment: Model
        },
         seeds(server) {
          let peter = server.create("user", { name: "Peter" });
          server.create("post", { user: peter });
        }
      });
       let post = server.schema.posts.find(1)
      post.associations
       // {
      //   user: BelongsToAssociation,
      //   comments: HasManyAssociation
      // }
      ```
       Check out the docs on the Association class to see what fields are available for each association.
       @method associations
      @type {Object}
      @public
     */
  }, {
    key: "associations",
    get: function get3() {
      return this._schema.associationsFor(this.modelName);
    }
    /**
      Returns the association for the given key
       @method associationFor
      @param key
      @public
      @hide
     */
  }, {
    key: "associationFor",
    value: function associationFor(key) {
      return this.associations[key];
    }
    /**
      Returns this model's inverse association for the given
      model-type-association pair, if it exists.
       Example:
            post: Model.extend({
             comments: hasMany()
           }),
           comments: Model.extend({
             post: belongsTo()
           })
        post.inversefor(commentsPostAssociation) would return the
       `post.comments` association object.
        Originally we had association.inverse() but that became impossible with
       the addition of polymorphic models. Consider the following:
            post: Model.extend({
             comments: hasMany()
           }),
           picture: Model.extend({
             comments: hasMany()
           }),
           comments: Model.extend({
             commentable: belongsTo({ polymorphic: true })
           })
        `commentable.inverse()` is ambiguous - does it return
       `post.comments` or `picture.comments`? Instead we need to ask each model
       if it has an inverse for a given association. post.inverseFor(commentable)
       is no longer ambiguous.
       @method hasInverseFor
      @param {String} modelName The model name of the class we're scanning
      @param {ORM/Association} association
      @return {ORM/Association}
      @public
      @hide
     */
  }, {
    key: "inverseFor",
    value: function inverseFor(association3) {
      return this._explicitInverseFor(association3) || this._implicitInverseFor(association3);
    }
    /**
      Finds the inverse for an association that explicity defines it's inverse
       @private
      @hide
    */
  }, {
    key: "_explicitInverseFor",
    value: function _explicitInverseFor(association3) {
      this._checkForMultipleExplicitInverses(association3);
      var associations = this._schema.associationsFor(this.modelName);
      var inverse = association3.opts.inverse;
      var candidate = inverse ? associations[inverse] : null;
      var matchingPolymorphic = candidate && candidate.isPolymorphic;
      var matchingInverse = candidate && candidate.modelName === association3.ownerModelName;
      var candidateInverse = candidate && candidate.opts.inverse;
      if (candidateInverse && candidate.opts.inverse !== association3.name) {
        assert(false, "You specified an inverse of ".concat(inverse, " for ").concat(association3.name, ", but it does not match ").concat(candidate.modelName, " ").concat(candidate.name, "'s inverse"));
      }
      return matchingPolymorphic || matchingInverse ? candidate : null;
    }
    /**
      Ensures multiple explicit inverses don't exist on the current model
      for the given association.
       TODO: move this to compile-time check
       @private
      @hide
    */
  }, {
    key: "_checkForMultipleExplicitInverses",
    value: function _checkForMultipleExplicitInverses(association3) {
      var associations = this._schema.associationsFor(this.modelName);
      var matchingExplicitInverses = Object.keys(associations).filter(function(key) {
        var candidate = associations[key];
        var modelMatches = association3.ownerModelName === candidate.modelName;
        var inverseKeyMatches = association3.name === candidate.opts.inverse;
        return modelMatches && inverseKeyMatches;
      });
      assert(matchingExplicitInverses.length <= 1, "The ".concat(this.modelName, " model has defined multiple explicit inverse associations for the ").concat(association3.ownerModelName, ".").concat(association3.name, " association."));
    }
    /**
      Finds if there is an inverse for an association that does not
      explicitly define one.
       @private
      @hide
    */
  }, {
    key: "_implicitInverseFor",
    value: function _implicitInverseFor(association3) {
      var _this2 = this;
      var associations = this._schema.associationsFor(this.modelName);
      var modelName = association3.ownerModelName;
      return (0, import_values.default)(associations).filter(function(candidate) {
        return candidate.modelName === modelName;
      }).reduce(function(inverse, candidate) {
        var candidateInverse = candidate.opts.inverse;
        var candidateIsImplicitInverse = candidateInverse === void 0;
        var candidateIsExplicitInverse = candidateInverse === association3.name;
        var candidateMatches = candidateIsImplicitInverse || candidateIsExplicitInverse;
        if (candidateMatches) {
          assert(!inverse, "The ".concat(_this2.modelName, " model has multiple possible inverse associations for the ").concat(association3.ownerModelName, ".").concat(association3.name, " association."));
          inverse = candidate;
        }
        return inverse;
      }, null);
    }
    /**
      Returns whether this model has an inverse association for the given
      model-type-association pair.
       @method hasInverseFor
      @param {String} modelName
      @param {ORM/Association} association
      @return {Boolean}
      @public
      @hide
     */
  }, {
    key: "hasInverseFor",
    value: function hasInverseFor(association3) {
      return !!this.inverseFor(association3);
    }
    /**
      Used to check if models match each other. If models are saved, we check model type
      and id, since they could have other non-persisted properties that are different.
       @public
      @hide
    */
  }, {
    key: "alreadyAssociatedWith",
    value: function alreadyAssociatedWith(model, association3) {
      var associatedModelOrCollection = this[association3.name];
      if (associatedModelOrCollection && model) {
        if (associatedModelOrCollection instanceof Model2) {
          if (associatedModelOrCollection.isSaved() && model.isSaved()) {
            return associatedModelOrCollection.toString() === model.toString();
          } else {
            return associatedModelOrCollection === model;
          }
        } else {
          return associatedModelOrCollection.includes(model);
        }
      }
    }
  }, {
    key: "associate",
    value: function associate(model, association3) {
      if (this.alreadyAssociatedWith(model, association3)) {
        return;
      }
      var name = association3.name;
      if (association3 instanceof HasMany) {
        if (!this[name].includes(model)) {
          this[name].add(model);
        }
      } else {
        this[name] = model;
      }
    }
  }, {
    key: "disassociate",
    value: function disassociate(model, association3) {
      var fk = association3.getForeignKey();
      if (association3 instanceof HasMany) {
        var i;
        if (association3.isPolymorphic) {
          var found = this[fk].find(function(_ref) {
            var type = _ref.type, id = _ref.id;
            return type === model.modelName && id === model.id;
          });
          i = found && this[fk].indexOf(found);
        } else {
          i = this[fk].map(function(key) {
            return key.toString();
          }).indexOf(model.id.toString());
        }
        if (i > -1) {
          this.attrs[fk].splice(i, 1);
        }
      } else {
        this.attrs[fk] = null;
      }
    }
    /**
      @hide
    */
  }, {
    key: "isSaving",
    get: function get3() {
      return this._schema.isSaving[this.toString()];
    }
    // Private
    /**
      model.attrs represents the persistable attributes, i.e. your db
      table fields.
      @method _setupAttr
      @param attr
      @param value
      @private
      @hide
     */
  }, {
    key: "_setupAttr",
    value: function _setupAttr(attr, value) {
      var isAssociation2 = this.associationKeys.has(attr) || this.associationIdKeys.has(attr);
      if (!isAssociation2) {
        this.attrs[attr] = value;
        this._definePlainAttribute(attr);
      }
    }
    /**
      Define getter/setter for a plain attribute
      @method _definePlainAttribute
      @param attr
      @private
      @hide
     */
  }, {
    key: "_definePlainAttribute",
    value: function _definePlainAttribute(attr) {
      var existingProperty = Object.getOwnPropertyDescriptor(this, attr);
      if (existingProperty && existingProperty.get) {
        return;
      }
      if (!Object.prototype.hasOwnProperty.call(this.attrs, attr)) {
        this.attrs[attr] = null;
      }
      Object.defineProperty(this, attr, {
        get: function get3() {
          return this.attrs[attr];
        },
        set: function set2(val) {
          this.attrs[attr] = val;
        }
      });
    }
    /**
      Foreign keys get set on attrs directly (to avoid potential recursion), but
      model references use the setter.
     *
      We validate foreign keys during instantiation.
     *
      @method _setupRelationship
      @param attr
      @param value
      @private
      @hide
     */
  }, {
    key: "_setupRelationship",
    value: function _setupRelationship(attr, value) {
      var isFk = this.associationIdKeys.has(attr) || this.fks.includes(attr);
      var isAssociation2 = this.associationKeys.has(attr);
      if (isFk) {
        if (value !== void 0 && value !== null) {
          this._validateForeignKeyExistsInDatabase(attr, value);
        }
        this.attrs[attr] = value;
      }
      if (isAssociation2) {
        this[attr] = value;
      }
    }
    /**
      @method _validateAttr
      @private
      @hide
     */
  }, {
    key: "_validateAttr",
    value: function _validateAttr(key, value) {
      {
        if (this.associationKeys.has(key)) {
          var association3 = this.associationFor(key);
          var isNull = value === null;
          if (association3 instanceof HasMany) {
            var isCollection = value instanceof Collection || value instanceof PolymorphicCollection;
            var isArrayOfModels = Array.isArray(value) && value.every(function(item) {
              return item instanceof Model2;
            });
            assert(isCollection || isArrayOfModels || isNull, "You're trying to create a ".concat(this.modelName, ' model and you passed in "').concat(value, '" under the ').concat(key, " key, but that key is a HasMany relationship. You must pass in a Collection, PolymorphicCollection, array of Models, or null."));
          } else if (association3 instanceof BelongsTo) {
            assert(value instanceof Model2 || isNull, "You're trying to create a ".concat(this.modelName, ' model and you passed in "').concat(value, '" under the ').concat(key, " key, but that key is a BelongsTo relationship. You must pass in a Model or null."));
          }
        }
      }
      {
        if (this.associationIdKeys.has(key)) {
          if (key.endsWith("Ids")) {
            var isArray3 = Array.isArray(value);
            var _isNull = value === null;
            assert(isArray3 || _isNull, "You're trying to create a ".concat(this.modelName, ' model and you passed in "').concat(value, '" under the ').concat(key, " key, but that key is a foreign key for a HasMany relationship. You must pass in an array of ids or null."));
          }
        }
      }
      {
        var isModelOrCollection = value instanceof Model2 || value instanceof Collection || value instanceof PolymorphicCollection;
        var _isArrayOfModels = Array.isArray(value) && value.length && value.every(function(item) {
          return item instanceof Model2;
        });
        if (isModelOrCollection || _isArrayOfModels) {
          var modelOrCollection = value;
          assert(this.associationKeys.has(key), "You're trying to create a ".concat(this.modelName, " model and you passed in a ").concat(modelOrCollection.toString(), " under the ").concat(key, " key, but you haven't defined that key as an association on your model."));
        }
      }
    }
    /**
      Originally we validated this via association.setId method, but it triggered
      recursion. That method is designed for updating an existing model's ID so
      this method is needed during instantiation.
     *
      @method _validateForeignKeyExistsInDatabase
      @private
      @hide
     */
  }, {
    key: "_validateForeignKeyExistsInDatabase",
    value: function _validateForeignKeyExistsInDatabase(foreignKeyName, foreignKeys) {
      var _this3 = this;
      if (Array.isArray(foreignKeys)) {
        var association3 = this.hasManyAssociationFks[foreignKeyName];
        var found;
        if (association3.isPolymorphic) {
          found = foreignKeys.map(function(_ref2) {
            var type = _ref2.type, id = _ref2.id;
            return _this3._schema.db[_this3._schema.toInternalCollectionName(type)].find(id);
          });
          found = (0, import_compact.default)(found);
        } else {
          found = this._schema.db[this._schema.toInternalCollectionName(association3.modelName)].find(foreignKeys);
        }
        var foreignKeyLabel = association3.isPolymorphic ? foreignKeys.map(function(fk) {
          return "".concat(fk.type, ":").concat(fk.id);
        }).join(",") : foreignKeys;
        assert(found.length === foreignKeys.length, "You're instantiating a ".concat(this.modelName, " that has a ").concat(foreignKeyName, " of ").concat(foreignKeyLabel, ", but some of those records don't exist in the database."));
      } else {
        var _association = this.belongsToAssociationFks[foreignKeyName];
        var _found;
        if (_association.isPolymorphic) {
          _found = this._schema.db[this._schema.toInternalCollectionName(foreignKeys.type)].find(foreignKeys.id);
        } else {
          _found = this._schema.db[this._schema.toInternalCollectionName(_association.modelName)].find(foreignKeys);
        }
        var _foreignKeyLabel = _association.isPolymorphic ? "".concat(foreignKeys.type, ":").concat(foreignKeys.id) : foreignKeys;
        assert(_found, "You're instantiating a ".concat(this.modelName, " that has a ").concat(foreignKeyName, " of ").concat(_foreignKeyLabel, ", but that record doesn't exist in the database."));
      }
    }
    /**
      Update associated children when saving a collection
     *
      @method _saveAssociations
      @private
      @hide
     */
  }, {
    key: "_saveAssociations",
    value: function _saveAssociations() {
      this._saveBelongsToAssociations();
      this._saveHasManyAssociations();
    }
  }, {
    key: "_saveBelongsToAssociations",
    value: function _saveBelongsToAssociations() {
      var _this4 = this;
      (0, import_values.default)(this.belongsToAssociations).forEach(function(association3) {
        _this4._disassociateFromOldInverses(association3);
        _this4._saveNewAssociates(association3);
        _this4._associateWithNewInverses(association3);
      });
    }
  }, {
    key: "_saveHasManyAssociations",
    value: function _saveHasManyAssociations() {
      var _this5 = this;
      (0, import_values.default)(this.hasManyAssociations).forEach(function(association3) {
        _this5._disassociateFromOldInverses(association3);
        _this5._saveNewAssociates(association3);
        _this5._associateWithNewInverses(association3);
      });
    }
  }, {
    key: "_disassociateFromOldInverses",
    value: function _disassociateFromOldInverses(association3) {
      if (association3 instanceof HasMany) {
        this._disassociateFromHasManyInverses(association3);
      } else if (association3 instanceof BelongsTo) {
        this._disassociateFromBelongsToInverse(association3);
      }
    }
    // Disassociate currently persisted models that are no longer associated
  }, {
    key: "_disassociateFromHasManyInverses",
    value: function _disassociateFromHasManyInverses(association3) {
      var _this6 = this;
      var fk = association3.getForeignKey();
      var tempAssociation = this._tempAssociations && this._tempAssociations[association3.name];
      var associateIds = this.attrs[fk];
      if (tempAssociation && associateIds) {
        var models;
        if (association3.isPolymorphic) {
          models = associateIds.map(function(_ref3) {
            var type = _ref3.type, id = _ref3.id;
            return _this6._schema[_this6._schema.toCollectionName(type)].find(id);
          });
        } else {
          models = this._schema[this._schema.toCollectionName(association3.modelName)].find(associateIds || []).models;
        }
        models.filter(function(associate) {
          return (
            // filter out models that are already being saved
            !associate.isSaving && // filter out models that will still be associated
            !tempAssociation.includes(associate) && associate.hasInverseFor(association3)
          );
        }).forEach(function(associate) {
          var inverse = associate.inverseFor(association3);
          associate.disassociate(_this6, inverse);
          associate.save();
        });
      }
    }
    /*
      Disassociate currently persisted models that are no longer associated.
       Example:
         post: Model.extend({
          comments: hasMany()
        }),
         comment: Model.extend({
          post: belongsTo()
        })
       Assume `this` is comment:1. When saving, if comment:1 is no longer
      associated with post:1, we need to remove comment:1 from post:1.comments.
      In this example `association` would be `comment.post`.
    */
  }, {
    key: "_disassociateFromBelongsToInverse",
    value: function _disassociateFromBelongsToInverse(association3) {
      var fk = association3.getForeignKey();
      var tempAssociation = this._tempAssociations && this._tempAssociations[association3.name];
      var associateId = this.attrs[fk];
      if (tempAssociation !== void 0 && associateId) {
        var associate;
        if (association3.isPolymorphic) {
          associate = this._schema[this._schema.toCollectionName(associateId.type)].find(associateId.id);
        } else {
          associate = this._schema[this._schema.toCollectionName(association3.modelName)].find(associateId);
        }
        if (associate.hasInverseFor(association3)) {
          var inverse = associate.inverseFor(association3);
          associate.disassociate(this, inverse);
          associate._updateInDb(associate.attrs);
        }
      }
    }
    // Find all other models that depend on me and update their foreign keys
  }, {
    key: "_disassociateFromDependents",
    value: function _disassociateFromDependents() {
      var _this7 = this;
      this._schema.dependentAssociationsFor(this.modelName).forEach(function(association3) {
        association3.disassociateAllDependentsFromTarget(_this7);
      });
    }
  }, {
    key: "_saveNewAssociates",
    value: function _saveNewAssociates(association3) {
      var fk = association3.getForeignKey();
      var tempAssociate = this._tempAssociations && this._tempAssociations[association3.name];
      if (tempAssociate !== void 0) {
        this.__isSavingNewChildren = true;
        delete this._tempAssociations[association3.name];
        if (tempAssociate instanceof Collection) {
          tempAssociate.models.filter(function(model) {
            return !model.isSaving;
          }).forEach(function(child) {
            child.save();
          });
          this._updateInDb(_defineProperty({}, fk, tempAssociate.models.map(function(child) {
            return child.id;
          })));
        } else if (tempAssociate instanceof PolymorphicCollection) {
          tempAssociate.models.filter(function(model) {
            return !model.isSaving;
          }).forEach(function(child) {
            child.save();
          });
          this._updateInDb(_defineProperty({}, fk, tempAssociate.models.map(function(child) {
            return {
              type: child.modelName,
              id: child.id
            };
          })));
        } else {
          if (tempAssociate === null) {
            this._updateInDb(_defineProperty({}, fk, null));
          } else if (this.equals(tempAssociate)) {
            this._updateInDb(_defineProperty({}, fk, this.id));
          } else if (!tempAssociate.isSaving) {
            tempAssociate.save();
            this._syncTempAssociations(tempAssociate);
            var fkValue;
            if (association3.isPolymorphic) {
              fkValue = {
                id: tempAssociate.id,
                type: tempAssociate.modelName
              };
            } else {
              fkValue = tempAssociate.id;
            }
            this._updateInDb(_defineProperty({}, fk, fkValue));
          }
        }
        this.__isSavingNewChildren = false;
      }
    }
    /*
      Step 3 in saving associations.
       Example:
         // initial state
        post.author = steinbeck;
         // new state
        post.author = twain;
          1. Disassociate from old inverse (remove post from steinbeck.posts)
         2. Save new associates (if twain.isNew, save twain)
      -> 3. Associate with new inverse (add post to twain.posts)
    */
  }, {
    key: "_associateWithNewInverses",
    value: function _associateWithNewInverses(association3) {
      var _this8 = this;
      if (!this.__isSavingNewChildren) {
        var modelOrCollection = this[association3.name];
        if (modelOrCollection instanceof Model2) {
          this._associateModelWithInverse(modelOrCollection, association3);
        } else if (modelOrCollection instanceof Collection || modelOrCollection instanceof PolymorphicCollection) {
          modelOrCollection.models.forEach(function(model) {
            _this8._associateModelWithInverse(model, association3);
          });
        }
        delete this._tempAssociations[association3.name];
      }
    }
  }, {
    key: "_associateModelWithInverse",
    value: function _associateModelWithInverse(model, association3) {
      var _this9 = this;
      if (model.hasInverseFor(association3)) {
        var inverse = model.inverseFor(association3);
        var inverseFk = inverse.getForeignKey();
        var ownerId = this.id;
        if (inverse instanceof BelongsTo) {
          var newId;
          if (inverse.isPolymorphic) {
            newId = {
              type: this.modelName,
              id: ownerId
            };
          } else {
            newId = ownerId;
          }
          this._schema.db[this._schema.toInternalCollectionName(model.modelName)].update(model.id, _defineProperty({}, inverseFk, newId));
        } else {
          var inverseCollection = this._schema.db[this._schema.toInternalCollectionName(model.modelName)];
          var currentIdsForInverse = inverseCollection.find(model.id)[inverse.getForeignKey()] || [];
          var newIdsForInverse = Object.assign([], currentIdsForInverse);
          var _newId, alreadyAssociatedWith;
          if (inverse.isPolymorphic) {
            _newId = {
              type: this.modelName,
              id: ownerId
            };
            alreadyAssociatedWith = newIdsForInverse.some(function(key) {
              return key.type == _this9.modelName && key.id == ownerId;
            });
          } else {
            _newId = ownerId;
            alreadyAssociatedWith = newIdsForInverse.includes(ownerId);
          }
          if (!alreadyAssociatedWith) {
            newIdsForInverse.push(_newId);
          }
          inverseCollection.update(model.id, _defineProperty({}, inverseFk, newIdsForInverse));
        }
      }
    }
    // Used to update data directly, since #save and #update can retrigger saves,
    // which can cause cycles with associations.
  }, {
    key: "_updateInDb",
    value: function _updateInDb(attrs) {
      this.attrs = this._schema.db[this._schema.toInternalCollectionName(this.modelName)].update(this.attrs.id, attrs);
    }
    /*
    Super gnarly: after we save this tempAssociate, we we need to through
    all other tempAssociates for a reference to this same model, and
    update it. Otherwise those other references are stale, which could
    cause a bug when they are subsequently saved.
     This only works for belongsTo right now, should add hasMany logic to it.
     See issue #1613: https://github.com/samselikoff/ember-cli-mirage/pull/1613
    */
  }, {
    key: "_syncTempAssociations",
    value: function _syncTempAssociations(tempAssociate) {
      var _this10 = this;
      Object.keys(this._tempAssociations).forEach(function(key) {
        if (_this10._tempAssociations[key] && _this10._tempAssociations[key].toString() === tempAssociate.toString()) {
          _this10._tempAssociations[key] = tempAssociate;
        }
      });
    }
    /**
      Simple string representation of the model and id.
       ```js
      let post = blogPosts.find(1);
      post.toString(); // "model:blogPost:1"
      ```
       @method toString
      @return {String}
      @public
    */
  }, {
    key: "toString",
    value: function toString3() {
      var idLabel = this.id ? "(".concat(this.id, ")") : "";
      return "model:".concat(this.modelName).concat(idLabel);
    }
    /**
      Checks the equality of this model and the passed-in model
     *
      @method equals
      @return boolean
      @public
      @hide
     */
  }, {
    key: "equals",
    value: function equals(model) {
      return this.toString() === model.toString();
    }
  }]);
  return Model2;
}();
Model.extend = extend;
Model.findBelongsToAssociation = function(associationType) {
  return this.prototype.belongsToAssociations[associationType];
};
var Serializer = function() {
  function Serializer2(registry, type) {
    var _this = this;
    var request = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    _classCallCheck(this, Serializer2);
    this.registry = registry;
    this.type = type;
    this.request = request;
    this.attrs = this.attrs || void 0;
    this.include = this.include || [];
    this.root = this.root || void 0;
    this.embed = this.embed || void 0;
    this._embedFn = (0, import_isFunction.default)(this.embed) ? this.embed : function() {
      return !!_this.embed;
    };
    this.serializeIds = this.serializeIds || void 0;
    this.primaryKey = this.primaryKey || void 0;
  }
  _createClass(Serializer2, [{
    key: "serialize",
    value: function serialize(primaryResource) {
      this.primaryResource = primaryResource;
      return this.buildPayload(primaryResource);
    }
    /**
      This method is used by the POST and PUT shorthands. These shorthands expect a valid JSON:API document as part of the request, so that they know how to create or update the appropriate resouce. The *normalize* method allows you to transform your request body into a JSON:API document, which lets you take advantage of the shorthands when you otherwise may not be able to.
       Note that this method is a noop if you're using JSON:API already, since request payloads sent along with POST and PUT requests will already be in the correct format.
       Take a look at the included `ActiveModelSerializer`'s normalize method for an example.
       @method normalize
      @param json
      @public
     */
  }, {
    key: "normalize",
    value: function normalize2(json) {
      return json;
    }
  }, {
    key: "buildPayload",
    value: function buildPayload(primaryResource, toInclude, didSerialize, json) {
      if (!primaryResource && (0, import_isEmpty.default)(toInclude)) {
        return json;
      } else if (primaryResource) {
        var _this$getHashForPrima = this.getHashForPrimaryResource(primaryResource), _this$getHashForPrima2 = _slicedToArray(_this$getHashForPrima, 2), resourceHash = _this$getHashForPrima2[0], newIncludes = _this$getHashForPrima2[1];
        var newDidSerialize = this.isCollection(primaryResource) ? primaryResource.models : [primaryResource];
        return this.buildPayload(void 0, newIncludes, newDidSerialize, resourceHash);
      } else {
        var nextIncludedResource = toInclude.shift();
        var _this$getHashForInclu = this.getHashForIncludedResource(nextIncludedResource), _this$getHashForInclu2 = _slicedToArray(_this$getHashForInclu, 2), _resourceHash = _this$getHashForInclu2[0], _newIncludes = _this$getHashForInclu2[1];
        var newToInclude = _newIncludes.filter(function(resource) {
          return !didSerialize.map(function(m) {
            return m.toString();
          }).includes(resource.toString());
        }).concat(toInclude);
        var _newDidSerialize = (this.isCollection(nextIncludedResource) ? nextIncludedResource.models : [nextIncludedResource]).concat(didSerialize);
        var newJson = this.mergePayloads(json, _resourceHash);
        return this.buildPayload(void 0, newToInclude, _newDidSerialize, newJson);
      }
    }
  }, {
    key: "getHashForPrimaryResource",
    value: function getHashForPrimaryResource(resource) {
      var _this$getHashForResou = this.getHashForResource(resource), _this$getHashForResou2 = _slicedToArray(_this$getHashForResou, 2), hash = _this$getHashForResou2[0], addToIncludes = _this$getHashForResou2[1];
      var hashWithRoot;
      if (this.root) {
        assert(!(resource instanceof PolymorphicCollection), "The base Serializer class cannot serialize a top-level PolymorphicCollection when root is true, since PolymorphicCollections have no type.");
        var serializer = this.serializerFor(resource.modelName);
        var rootKey = serializer.keyForResource(resource);
        hashWithRoot = _defineProperty({}, rootKey, hash);
      } else {
        hashWithRoot = hash;
      }
      return [hashWithRoot, addToIncludes];
    }
  }, {
    key: "getHashForIncludedResource",
    value: function getHashForIncludedResource(resource) {
      var hashWithRoot, addToIncludes;
      if (resource instanceof PolymorphicCollection) {
        hashWithRoot = {};
        addToIncludes = resource.models;
      } else {
        var serializer = this.serializerFor(resource.modelName);
        var _serializer$getHashFo = serializer.getHashForResource(resource), _serializer$getHashFo2 = _slicedToArray(_serializer$getHashFo, 2), hash = _serializer$getHashFo2[0], newModels = _serializer$getHashFo2[1];
        var rootKey = serializer.keyForRelationship(resource.modelName);
        hashWithRoot = Array.isArray(hash) ? _defineProperty({}, rootKey, hash) : _defineProperty({}, rootKey, [hash]);
        addToIncludes = newModels;
      }
      return [hashWithRoot, addToIncludes];
    }
  }, {
    key: "getHashForResource",
    value: function getHashForResource(resource) {
      var _this2 = this;
      var removeForeignKeys = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var didSerialize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var lookupSerializer = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
      var serializer = this;
      var hash;
      if (lookupSerializer && resource.modelName) {
        serializer = this.serializerFor(resource.modelName);
      }
      if (this.isModel(resource)) {
        hash = serializer._hashForModel(resource, removeForeignKeys, didSerialize);
      } else {
        hash = resource.models.map(function(m) {
          var modelSerializer = serializer;
          if (!modelSerializer) {
            modelSerializer = _this2.serializerFor(m.modelName);
          }
          return modelSerializer._hashForModel(m, removeForeignKeys, didSerialize);
        });
      }
      var addToIncludes = (0, import_uniqBy.default)((0, import_compact.default)((0, import_flatten.default)(serializer.getKeysForIncluded().map(function(key) {
        if (_this2.isCollection(resource)) {
          return resource.models.map(function(m) {
            return m[key];
          });
        } else {
          return resource[key];
        }
      }))), function(m) {
        return m.toString();
      });
      return [hash, addToIncludes];
    }
    /*
      Merges new resource hash into json. If json already has root key,
      pushes value of resourceHash onto that key.
       For example,
           json = {
            post: { id: 1, title: 'Lorem Ipsum', comment_ids: [1, 3] },
            comments: [
              { id: 1, text: 'foo' }
            ]
          };
           resourceHash = {
            comments: [
              { id: 2, text: 'bar' }
            ]
          };
       would yield
           {
            post: { id: 1, title: 'Lorem Ipsum', comment_ids: [1, 3] },
            comments: [
              { id: 1, text: 'foo' },
              { id: 2, text: 'bar' }
            ]
          };
     */
  }, {
    key: "mergePayloads",
    value: function mergePayloads(json, resourceHash) {
      var newJson;
      var _Object$keys = Object.keys(resourceHash), _Object$keys2 = _slicedToArray(_Object$keys, 1), resourceHashKey = _Object$keys2[0];
      if (json[resourceHashKey]) {
        newJson = json;
        newJson[resourceHashKey] = json[resourceHashKey].concat(resourceHash[resourceHashKey]);
      } else {
        newJson = Object.assign(json, resourceHash);
      }
      return newJson;
    }
  }, {
    key: "keyForResource",
    value: function keyForResource(resource) {
      var modelName = resource.modelName;
      return this.isModel(resource) ? this.keyForModel(modelName) : this.keyForCollection(modelName);
    }
    /**
      Used to define a custom key when serializing a primary model of modelName *modelName*. For example, the default Serializer will return something like the following:
       ```
      GET /blogPosts/1
       {
        blogPost: {
          id: 1,
          title: 'Lorem ipsum'
        }
      }
      ```
       If your API uses hyphenated keys, you could overwrite `keyForModel`:
       ```js
      // serializers/application.js
      export default Serializer.extend({
        keyForModel(modelName) {
          return hyphenate(modelName);
        }
      });
      ```
       Now the response will look like
       ```
      {
        'blog-post': {
          id: 1,
          title: 'Lorem ipsum'
        }
      }
      ```
       @method keyForModel
      @param modelName
      @public
     */
  }, {
    key: "keyForModel",
    value: function keyForModel3(modelName) {
      return camelize2(modelName);
    }
    /**
      Used to customize the key when serializing a primary collection. By default this pluralizes the return value of `keyForModel`.
       For example, by default the following request may look like:
       ```
      GET /blogPosts
       {
        blogPosts: [
          {
            id: 1,
            title: 'Lorem ipsum'
          },
          ...
        ]
      }
      ```
       If your API hyphenates keys, you could overwrite `keyForCollection`:
       ```js
      // serializers/application.js
      export default Serializer.extend({
        keyForCollection(modelName) {
          return this._container.inflector.pluralize(dasherize(modelName));
        }
      });
      ```
       Now the response would look like:
       ```
      {
        'blog-posts': [
          {
            id: 1,
            title: 'Lorem ipsum'
          },
          ...
        ]
      }
      ```
       @method keyForCollection
      @param modelName
      @public
     */
  }, {
    key: "keyForCollection",
    value: function keyForCollection(modelName) {
      return this._container.inflector.pluralize(this.keyForModel(modelName));
    }
  }, {
    key: "_hashForModel",
    value: function _hashForModel(model, removeForeignKeys) {
      var _this3 = this;
      var didSerialize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var attrs = this._attrsForModel(model);
      if (removeForeignKeys) {
        model.fks.forEach(function(fk) {
          delete attrs[fk];
        });
      }
      if (this.embed) {
        var newDidSerialize = Object.assign({}, didSerialize);
        newDidSerialize[model.modelName] = newDidSerialize[model.modelName] || {};
        newDidSerialize[model.modelName][model.id] = true;
        this.getKeysForEmbedded().forEach(function(key) {
          var associatedResource = model[key];
          if (associatedResource && !(0, import_get.default)(newDidSerialize, "".concat(associatedResource.modelName, ".").concat(associatedResource.id))) {
            var _this3$getHashForReso = _this3.getHashForResource(associatedResource, true, newDidSerialize, true), _this3$getHashForReso2 = _slicedToArray(_this3$getHashForReso, 1), associatedResourceHash = _this3$getHashForReso2[0];
            var formattedKey = _this3.keyForEmbeddedRelationship(key);
            attrs[formattedKey] = associatedResourceHash;
            if (_this3.isModel(associatedResource)) {
              var fk = "".concat(camelize2(key), "Id");
              delete attrs[fk];
            }
          }
        });
      }
      return this._maybeAddAssociationIds(model, attrs);
    }
    /**
      @method _attrsForModel
      @param model
      @private
      @hide
     */
  }, {
    key: "_attrsForModel",
    value: function _attrsForModel(model) {
      var attrs = {};
      if (this.attrs) {
        attrs = this.attrs.reduce(function(memo, attr) {
          memo[attr] = model[attr];
          return memo;
        }, {});
      } else {
        attrs = Object.assign(attrs, model.attrs);
      }
      model.fks.forEach(function(key) {
        return delete attrs[key];
      });
      return this._formatAttributeKeys(attrs);
    }
    /**
      @method _maybeAddAssociationIds
      @param model
      @param attrs
      @private
      @hide
     */
  }, {
    key: "_maybeAddAssociationIds",
    value: function _maybeAddAssociationIds(model, attrs) {
      var _this4 = this;
      var newHash = Object.assign({}, attrs);
      if (this.serializeIds === "always") {
        _toConsumableArray(model.associationKeys).filter(function(key) {
          return !_this4._embedFn(key);
        }).forEach(function(key) {
          var resource = model[key];
          var association3 = model.associationFor(key);
          if (_this4.isCollection(resource)) {
            var formattedKey = _this4.keyForRelationshipIds(key);
            newHash[formattedKey] = model["".concat(_this4._container.inflector.singularize(key), "Ids")];
          } else if (_this4.isModel(resource) && association3.isPolymorphic) {
            var formattedTypeKey = _this4.keyForPolymorphicForeignKeyType(key);
            var formattedIdKey = _this4.keyForPolymorphicForeignKeyId(key);
            newHash[formattedTypeKey] = model["".concat(key, "Id")].type;
            newHash[formattedIdKey] = model["".concat(key, "Id")].id;
          } else if (resource) {
            var _formattedKey = _this4.keyForForeignKey(key);
            newHash[_formattedKey] = model["".concat(key, "Id")];
          }
        });
      } else if (this.serializeIds === "included") {
        this.getKeysForIncluded().forEach(function(key) {
          var resource = model[key];
          var association3 = model.associationFor(key);
          if (_this4.isCollection(resource)) {
            var formattedKey = _this4.keyForRelationshipIds(key);
            newHash[formattedKey] = model["".concat(_this4._container.inflector.singularize(key), "Ids")];
          } else if (_this4.isModel(resource) && association3.isPolymorphic) {
            var formattedTypeKey = _this4.keyForPolymorphicForeignKeyType(key);
            var formattedIdKey = _this4.keyForPolymorphicForeignKeyId(key);
            newHash[formattedTypeKey] = model["".concat(key, "Id")].type;
            newHash[formattedIdKey] = model["".concat(key, "Id")].id;
          } else if (_this4.isModel(resource)) {
            var _formattedKey2 = _this4.keyForForeignKey(key);
            newHash[_formattedKey2] = model["".concat(key, "Id")];
          }
        });
      }
      return newHash;
    }
    /**
      Used to customize how a model's attribute is formatted in your JSON payload.
       By default, model attributes are camelCase:
       ```
      GET /authors/1
       {
        author: {
          firstName: 'Link',
          lastName: 'The WoodElf'
        }
      }
      ```
       If your API expects snake case, you could write the following:
       ```js
      // serializers/application.js
      export default Serializer.extend({
        keyForAttribute(attr) {
          return underscore(attr);
        }
      });
      ```
       Now the response would look like:
       ```
      {
        author: {
          first_name: 'Link',
          last_name: 'The WoodElf'
        }
      }
      ```
       @method keyForAttribute
      @param attr
      @public
     */
  }, {
    key: "keyForAttribute",
    value: function keyForAttribute3(attr) {
      if (attr === "id") {
        return this.keyForId();
      }
      return attr;
    }
    /**
      Use this hook to format the key for collections related to this model. *modelName* is the named parameter for the relationship.
       For example, if you're serializing an `author` that
      sideloads many `blogPosts`, the default response will look like:
       ```
      {
        author: {...},
        blogPosts: [...]
      }
      ```
       Overwrite `keyForRelationship` to format this key:
       ```js
      // serializers/application.js
      export default Serializer.extend({
        keyForRelationship(modelName) {
          return underscore(modelName);
        }
      });
      ```
       Now the response will look like this:
       ```
      {
        author: {...},
        blog_posts: [...]
      }
      ```
       @method keyForRelationship
      @param modelName
      @public
     */
  }, {
    key: "keyForRelationship",
    value: function keyForRelationship3(modelName) {
      return camelize2(this._container.inflector.pluralize(modelName));
    }
    /**
      Like `keyForRelationship`, but for embedded relationships.
       @method keyForEmbeddedRelationship
      @param attributeName
      @public
     */
  }, {
    key: "keyForEmbeddedRelationship",
    value: function keyForEmbeddedRelationship3(attributeName) {
      return camelize2(attributeName);
    }
    /**
      Use this hook to format the key for the IDS of a `hasMany` relationship
      in this model's JSON representation.
       For example, if you're serializing an `author` that
      sideloads many `blogPosts`, by default your `author` JSON would include a `blogPostIds` key:
       ```
      {
        author: {
          id: 1,
          blogPostIds: [1, 2, 3]
        },
        blogPosts: [...]
      }
      ```
       Overwrite `keyForRelationshipIds` to format this key:
       ```js
      // serializers/application.js
      export default Serializer.extend({
        keyForRelationshipIds(relationship) {
          return underscore(relationship) + '_ids';
        }
      });
      ```
       Now the response will look like:
       ```
      {
        author: {
          id: 1,
          blog_post_ids: [1, 2, 3]
        },
        blogPosts: [...]
      }
      ```
       @method keyForRelationshipIds
      @param modelName
      @public
     */
  }, {
    key: "keyForRelationshipIds",
    value: function keyForRelationshipIds3(relationshipName) {
      return "".concat(this._container.inflector.singularize(camelize2(relationshipName)), "Ids");
    }
    /**
      Like `keyForRelationshipIds`, but for `belongsTo` relationships.
       For example, if you're serializing a `blogPost` that sideloads one `author`,
      your `blogPost` JSON would include a `authorId` key:
       ```
      {
        blogPost: {
          id: 1,
          authorId: 1
        },
        author: ...
      }
      ```
       Overwrite `keyForForeignKey` to format this key:
       ```js
      // serializers/application.js
      export default Serializer.extend({
        keyForForeignKey(relationshipName) {
          return underscore(relationshipName) + '_id';
        }
      });
      ```
       Now the response will look like:
       ```js
      {
        blogPost: {
          id: 1,
          author_id: 1
        },
        author: ...
      }
      ```
       @method keyForForeignKey
      @param relationshipName
      @public
     */
  }, {
    key: "keyForForeignKey",
    value: function keyForForeignKey3(relationshipName) {
      return "".concat(camelize2(relationshipName), "Id");
    }
    /**
      Polymorphic relationships are represented with type-id pairs.
       Given the following model
       ```js
      Model.extend({
        commentable: belongsTo({ polymorphic: true })
      });
      ```
       the default Serializer would produce
       ```js
      {
        comment: {
          id: 1,
          commentableType: 'post',
          commentableId: '1'
        }
      }
      ```
       This hook controls how the `id` field (`commentableId` in the above example)
      is serialized. By default it camelizes the relationship and adds `Id` as a suffix.
       @method keyForPolymorphicForeignKeyId
      @param {String} relationshipName
      @return {String}
      @public
    */
  }, {
    key: "keyForPolymorphicForeignKeyId",
    value: function keyForPolymorphicForeignKeyId2(relationshipName) {
      return "".concat(camelize2(relationshipName), "Id");
    }
    /**
      Polymorphic relationships are represented with type-id pairs.
       Given the following model
       ```js
      Model.extend({
        commentable: belongsTo({ polymorphic: true })
      });
      ```
       the default Serializer would produce
       ```js
      {
        comment: {
          id: 1,
          commentableType: 'post',
          commentableId: '1'
        }
      }
      ```
       This hook controls how the `type` field (`commentableType` in the above example)
      is serialized. By default it camelizes the relationship and adds `Type` as a suffix.
       @method keyForPolymorphicForeignKeyType
      @param {String} relationshipName
      @return {String}
      @public
    */
  }, {
    key: "keyForPolymorphicForeignKeyType",
    value: function keyForPolymorphicForeignKeyType2(relationshipName) {
      return "".concat(camelize2(relationshipName), "Type");
    }
    /**
      @method isModel
      @param object
      @return {Boolean}
      @public
      @hide
     */
  }, {
    key: "isModel",
    value: function isModel(object) {
      return object instanceof Model;
    }
    /**
      @method isCollection
      @param object
      @return {Boolean}
      @public
      @hide
     */
  }, {
    key: "isCollection",
    value: function isCollection(object) {
      return object instanceof Collection || object instanceof PolymorphicCollection;
    }
    /**
      @method isModelOrCollection
      @param object
      @return {Boolean}
      @public
      @hide
     */
  }, {
    key: "isModelOrCollection",
    value: function isModelOrCollection(object) {
      return this.isModel(object) || this.isCollection(object);
    }
    /**
      @method serializerFor
      @param type
      @public
      @hide
     */
  }, {
    key: "serializerFor",
    value: function serializerFor(type) {
      return this.registry.serializerFor(type);
    }
  }, {
    key: "getAssociationKeys",
    value: function getAssociationKeys() {
      return (0, import_isFunction.default)(this.include) ? this.include(this.request, this.primaryResource) : this.include;
    }
  }, {
    key: "getKeysForEmbedded",
    value: function getKeysForEmbedded() {
      var _this5 = this;
      return this.getAssociationKeys().filter(function(k) {
        return _this5._embedFn(k);
      });
    }
  }, {
    key: "getKeysForIncluded",
    value: function getKeysForIncluded() {
      var _this6 = this;
      return this.getAssociationKeys().filter(function(k) {
        return !_this6._embedFn(k);
      });
    }
    /**
      A reference to the schema instance.
       Useful to reference registered schema information, for example in a Serializer's include hook to include all a resource's associations:
       ```js
      Serializer.extend({
        include(request, resource) {
          return Object.keys(this.schema.associationsFor(resource.modelName));
        }
      })
      ```
       @property
      @type {Object}
      @public
    */
  }, {
    key: "schema",
    get: function get3() {
      return this.registry.schema;
    }
    /**
      Used to customize how a model's primary key is formatted in your JSON payload.
       By default, this is 'id'
       ```
      GET /authors/1
       {
        author: {
          id: '1',
          firstName: 'Link',
          lastName: 'The WoodElf'
        }
      }
      ```
       If your API expects a different primary key, you could write the following:
       ```js
      // serializers/application.js
      export default Serializer.extend({
        keyForId() {
          return 'authorId';
        }
      });
      ```
       Now the response would look like:
       ```
      {
        author: {
          authorId: '1',
          firstName: 'Link',
          lastName: 'The WoodElf'
        }
      }
      ```
       See the property `primaryKey` for a shorthand way of doing this on a model serializer
       @method keyForId
      @public
     */
  }, {
    key: "keyForId",
    value: function keyForId() {
      return this.primaryKey;
    }
    /**
      Used to customize how a model's primary key value is formatted in your JSON payload.
       By default, the primary key is a string
       ```
      GET /authors/1
       {
        author: {
          id: '1',
          firstName: 'Link',
          lastName: 'The WoodElf'
        }
      }
      ```
       If your API expects a integers, you could write the following:
       ```js
      // serializers/application.js
      export default Serializer.extend({
        valueForId(value) {
          return parseInt(value);
        }
      });
      ```
       Now the response would look like:
       ```
      {
        author: {
          authorId: 1,
          firstName: 'Link',
          lastName: 'The WoodElf'
        }
      }
      ```
       @method valueForId
      @param value
      @public
     */
  }, {
    key: "valueForId",
    value: function valueForId(value) {
      return value;
    }
    /**
      @method _formatAttributeKeys
      @param attrs
      @private
      @hide
     */
  }, {
    key: "_formatAttributeKeys",
    value: function _formatAttributeKeys(attrs) {
      var formattedAttrs = {};
      for (var key in attrs) {
        var formattedValue = attrs[key];
        if (key === "id") {
          formattedValue = this.valueForId(formattedValue);
        }
        var formattedKey = this.keyForAttribute(key);
        formattedAttrs[formattedKey] = formattedValue;
      }
      return formattedAttrs;
    }
  }, {
    key: "getCoalescedIds",
    value: function getCoalescedIds3() {
    }
  }]);
  return Serializer2;
}();
Serializer.prototype.include = [];
Serializer.prototype.root = true;
Serializer.prototype.embed = false;
Serializer.prototype.primaryKey = "id";
Serializer.prototype.serializeIds = "included";
Serializer.extend = extend;
var JSONAPISerializer = function(_Serializer) {
  _inherits(JSONAPISerializer2, _Serializer);
  var _super = _createSuper(JSONAPISerializer2);
  function JSONAPISerializer2() {
    var _this;
    _classCallCheck(this, JSONAPISerializer2);
    _this = _super.apply(this, arguments);
    _this.alwaysIncludeLinkageData = _this.alwaysIncludeLinkageData || void 0;
    return _this;
  }
  _createClass(JSONAPISerializer2, [{
    key: "keyForModel",
    value: function keyForModel3(modelName) {
      return dasherize2(modelName);
    }
    // Don't think this is used?
  }, {
    key: "keyForCollection",
    value: function keyForCollection(modelName) {
      return dasherize2(modelName);
    }
    /**
      Used to customize the key for an attribute. By default, compound attribute names are dasherized.
       For example, the JSON:API document for a `post` model with a `commentCount` attribute would be:
       ```js
      {
        data: {
          id: 1,
          type: 'posts',
          attributes: {
            'comment-count': 28
          }
        }
      }
      ```
       @method keyForAttribute
      @param {String} attr
      @return {String}
      @public
    */
  }, {
    key: "keyForAttribute",
    value: function keyForAttribute3(attr) {
      return dasherize2(attr);
    }
    /**
      Used to customize the key for a relationships. By default, compound relationship names are dasherized.
       For example, the JSON:API document for an `author` model with a `blogPosts` relationship would be:
       ```js
      {
        data: {
          id: 1,
          type: 'author',
          attributes: {
            ...
          },
          relationships: {
            'blog-posts': {
              ...
            }
          }
        }
      }
      ```
       @method keyForRelationship
      @param {String} key
      @return {String}
      @public
    */
  }, {
    key: "keyForRelationship",
    value: function keyForRelationship3(key) {
      return dasherize2(key);
    }
    /**
      Use this hook to add top-level `links` data to JSON:API resource objects. The argument is the model being serialized.
       ```js
      // serializers/author.js
      import { JSONAPISerializer } from 'miragejs';
       export default JSONAPISerializer.extend({
         links(author) {
          return {
            'posts': {
              related: `/api/authors/${author.id}/posts`
            }
          };
        }
       });
      ```
       @method links
      @param model
    */
  }, {
    key: "links",
    value: function links() {
    }
  }, {
    key: "getHashForPrimaryResource",
    value: function getHashForPrimaryResource(resource) {
      this._createRequestedIncludesGraph(resource);
      var resourceHash = this.getHashForResource(resource);
      var hashWithRoot = {
        data: resourceHash
      };
      var addToIncludes = this.getAddToIncludesForResource(resource);
      return [hashWithRoot, addToIncludes];
    }
  }, {
    key: "getHashForIncludedResource",
    value: function getHashForIncludedResource(resource) {
      var serializer = this.serializerFor(resource.modelName);
      var hash = serializer.getHashForResource(resource);
      var hashWithRoot = {
        included: this.isModel(resource) ? [hash] : hash
      };
      var addToIncludes = [];
      if (!this.hasQueryParamIncludes()) {
        addToIncludes = this.getAddToIncludesForResource(resource);
      }
      return [hashWithRoot, addToIncludes];
    }
  }, {
    key: "getHashForResource",
    value: function getHashForResource(resource) {
      var _this2 = this;
      var hash;
      if (this.isModel(resource)) {
        hash = this.getResourceObjectForModel(resource);
      } else {
        hash = resource.models.map(function(m) {
          return _this2.getResourceObjectForModel(m);
        });
      }
      return hash;
    }
    /*
      Returns a flat unique list of resources that need to be added to includes
    */
  }, {
    key: "getAddToIncludesForResource",
    value: function getAddToIncludesForResource(resource) {
      var relationshipPaths;
      if (this.hasQueryParamIncludes()) {
        relationshipPaths = this.getQueryParamIncludes();
      } else {
        var serializer = this.serializerFor(resource.modelName);
        relationshipPaths = serializer.getKeysForIncluded();
      }
      return this.getAddToIncludesForResourceAndPaths(resource, relationshipPaths);
    }
  }, {
    key: "getAddToIncludesForResourceAndPaths",
    value: function getAddToIncludesForResourceAndPaths(resource, relationshipPaths) {
      var _this3 = this;
      var includes = [];
      relationshipPaths.forEach(function(path) {
        var relationshipNames = path.split(".");
        var newIncludes = _this3.getIncludesForResourceAndPath.apply(_this3, [resource].concat(_toConsumableArray(relationshipNames)));
        includes.push(newIncludes);
      });
      return (0, import_uniqBy.default)((0, import_compact.default)((0, import_flatten.default)(includes)), function(m) {
        return m.toString();
      });
    }
  }, {
    key: "getIncludesForResourceAndPath",
    value: function getIncludesForResourceAndPath(resource) {
      var _this4 = this;
      for (var _len = arguments.length, names = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        names[_key - 1] = arguments[_key];
      }
      var nameForCurrentResource = camelize2(names.shift());
      var includes = [];
      var modelsToAdd = [];
      if (this.isModel(resource)) {
        var relationship = resource[nameForCurrentResource];
        if (this.isModel(relationship)) {
          modelsToAdd = [relationship];
        } else if (this.isCollection(relationship)) {
          modelsToAdd = relationship.models;
        }
      } else {
        resource.models.forEach(function(model) {
          var relationship2 = model[nameForCurrentResource];
          if (_this4.isModel(relationship2)) {
            modelsToAdd.push(relationship2);
          } else if (_this4.isCollection(relationship2)) {
            modelsToAdd = modelsToAdd.concat(relationship2.models);
          }
        });
      }
      includes = includes.concat(modelsToAdd);
      if (names.length) {
        modelsToAdd.forEach(function(model) {
          includes = includes.concat(_this4.getIncludesForResourceAndPath.apply(_this4, [model].concat(names)));
        });
      }
      return includes;
    }
  }, {
    key: "getResourceObjectForModel",
    value: function getResourceObjectForModel(model) {
      var attrs = this._attrsForModel(model, true);
      delete attrs.id;
      var hash = {
        type: this.typeKeyForModel(model),
        id: model.id,
        attributes: attrs
      };
      return this._maybeAddRelationshipsToResourceObjectForModel(hash, model);
    }
  }, {
    key: "_maybeAddRelationshipsToResourceObjectForModel",
    value: function _maybeAddRelationshipsToResourceObjectForModel(hash, model) {
      var _this5 = this;
      var relationships = {};
      model.associationKeys.forEach(function(key) {
        var relationship = model[key];
        var relationshipKey = _this5.keyForRelationship(key);
        var relationshipHash = {};
        if (_this5.hasLinksForRelationship(model, key)) {
          var serializer = _this5.serializerFor(model.modelName);
          var links = serializer.links(model);
          relationshipHash.links = links[key];
        }
        if (_this5.alwaysIncludeLinkageData || _this5.shouldIncludeLinkageData(key, model) || _this5._relationshipIsIncludedForModel(key, model)) {
          var data = null;
          if (_this5.isModel(relationship)) {
            data = {
              type: _this5.typeKeyForModel(relationship),
              id: relationship.id
            };
          } else if (_this5.isCollection(relationship)) {
            data = relationship.models.map(function(model2) {
              return {
                type: _this5.typeKeyForModel(model2),
                id: model2.id
              };
            });
          }
          relationshipHash.data = data;
        }
        if (!(0, import_isEmpty.default)(relationshipHash)) {
          relationships[relationshipKey] = relationshipHash;
        }
      });
      if (!(0, import_isEmpty.default)(relationships)) {
        hash.relationships = relationships;
      }
      return hash;
    }
  }, {
    key: "hasLinksForRelationship",
    value: function hasLinksForRelationship(model, relationshipKey) {
      var serializer = this.serializerFor(model.modelName);
      var links = serializer.links && serializer.links(model);
      return links && links[relationshipKey] != null;
    }
    /*
      This code (and a lot of this serializer) need to be re-worked according to
      the graph logic...
    */
  }, {
    key: "_relationshipIsIncludedForModel",
    value: function _relationshipIsIncludedForModel(relationshipKey, model) {
      if (this.hasQueryParamIncludes()) {
        var graph = this.request._includesGraph;
        var graphKey = this._graphKeyForModel(model);
        var graphResource;
        if (graph.data[graphKey]) {
          graphResource = graph.data[graphKey];
        } else if (graph.included[this._container.inflector.pluralize(model.modelName)]) {
          graphResource = graph.included[this._container.inflector.pluralize(model.modelName)][graphKey];
        }
        return graphResource && graphResource.relationships && Object.prototype.hasOwnProperty.call(graphResource.relationships, dasherize2(relationshipKey));
      } else {
        var relationshipPaths = this.getKeysForIncluded();
        return relationshipPaths.includes(relationshipKey);
      }
    }
    /*
      This is needed for _relationshipIsIncludedForModel - see the note there for
      more background.
       If/when we can refactor this serializer, the logic in this method would
      probably be the basis for the new overall json/graph creation.
    */
  }, {
    key: "_createRequestedIncludesGraph",
    value: function _createRequestedIncludesGraph(primaryResource) {
      var _this6 = this;
      var graph = {
        data: {}
      };
      if (this.isModel(primaryResource)) {
        var primaryResourceKey = this._graphKeyForModel(primaryResource);
        graph.data[primaryResourceKey] = {};
        this._addPrimaryModelToRequestedIncludesGraph(graph, primaryResource);
      } else if (this.isCollection(primaryResource)) {
        primaryResource.models.forEach(function(model) {
          var primaryResourceKey2 = _this6._graphKeyForModel(model);
          graph.data[primaryResourceKey2] = {};
          _this6._addPrimaryModelToRequestedIncludesGraph(graph, model);
        });
      }
      this.request._includesGraph = graph;
    }
  }, {
    key: "_addPrimaryModelToRequestedIncludesGraph",
    value: function _addPrimaryModelToRequestedIncludesGraph(graph, model) {
      var _this7 = this;
      if (this.hasQueryParamIncludes()) {
        var graphKey = this._graphKeyForModel(model);
        this.getQueryParamIncludes().filter(function(item) {
          return !!item.trim();
        }).forEach(function(includesPath) {
          graph.data[graphKey].relationships = graph.data[graphKey].relationships || {};
          var relationshipKeys = includesPath.split(".").map(dasherize2);
          var relationshipKey = relationshipKeys[0];
          var graphRelationshipKey = relationshipKey;
          var normalizedRelationshipKey = camelize2(relationshipKey);
          var hasAssociation = model.associationKeys.has(normalizedRelationshipKey);
          assert(hasAssociation, 'You tried to include "'.concat(relationshipKey, '" with ').concat(model, ' but no association named "').concat(normalizedRelationshipKey, '" is defined on the model.'));
          var relationship = model[normalizedRelationshipKey];
          var relationshipData;
          if (_this7.isModel(relationship)) {
            relationshipData = _this7._graphKeyForModel(relationship);
          } else if (_this7.isCollection(relationship)) {
            relationshipData = relationship.models.map(_this7._graphKeyForModel);
          } else {
            relationshipData = null;
          }
          graph.data[graphKey].relationships[graphRelationshipKey] = relationshipData;
          if (relationship) {
            _this7._addResourceToRequestedIncludesGraph(graph, relationship, relationshipKeys.slice(1));
          }
        });
      }
    }
  }, {
    key: "_addResourceToRequestedIncludesGraph",
    value: function _addResourceToRequestedIncludesGraph(graph, resource, relationshipNames) {
      var _this8 = this;
      graph.included = graph.included || {};
      var models = this.isCollection(resource) ? resource.models : [resource];
      models.forEach(function(model) {
        var collectionName = _this8._container.inflector.pluralize(model.modelName);
        graph.included[collectionName] = graph.included[collectionName] || {};
        _this8._addModelToRequestedIncludesGraph(graph, model, relationshipNames);
      });
    }
  }, {
    key: "_addModelToRequestedIncludesGraph",
    value: function _addModelToRequestedIncludesGraph(graph, model, relationshipNames) {
      var collectionName = this._container.inflector.pluralize(model.modelName);
      var resourceKey = this._graphKeyForModel(model);
      graph.included[collectionName][resourceKey] = graph.included[collectionName][resourceKey] || {};
      if (relationshipNames.length) {
        this._addResourceRelationshipsToRequestedIncludesGraph(graph, collectionName, resourceKey, model, relationshipNames);
      }
    }
    /*
      Lot of the same logic here from _addPrimaryModelToRequestedIncludesGraph, could refactor & share
    */
  }, {
    key: "_addResourceRelationshipsToRequestedIncludesGraph",
    value: function _addResourceRelationshipsToRequestedIncludesGraph(graph, collectionName, resourceKey, model, relationshipNames) {
      graph.included[collectionName][resourceKey].relationships = graph.included[collectionName][resourceKey].relationships || {};
      var relationshipName = relationshipNames[0];
      var relationship = model[camelize2(relationshipName)];
      var relationshipData;
      if (this.isModel(relationship)) {
        relationshipData = this._graphKeyForModel(relationship);
      } else if (this.isCollection(relationship)) {
        relationshipData = relationship.models.map(this._graphKeyForModel);
      }
      graph.included[collectionName][resourceKey].relationships[relationshipName] = relationshipData;
      if (relationship) {
        this._addResourceToRequestedIncludesGraph(graph, relationship, relationshipNames.slice(1));
      }
    }
  }, {
    key: "_graphKeyForModel",
    value: function _graphKeyForModel(model) {
      return "".concat(model.modelName, ":").concat(model.id);
    }
  }, {
    key: "getQueryParamIncludes",
    value: function getQueryParamIncludes() {
      var includes = (0, import_get.default)(this, "request.queryParams.include");
      if (includes && !Array.isArray(includes)) {
        includes = includes.split(",");
      }
      return includes;
    }
  }, {
    key: "hasQueryParamIncludes",
    value: function hasQueryParamIncludes() {
      return !!this.getQueryParamIncludes();
    }
    /**
      Used to customize the `type` field of the document. By default, pluralizes and dasherizes the model's `modelName`.
       For example, the JSON:API document for a `blogPost` model would be:
       ```js
      {
        data: {
          id: 1,
          type: 'blog-posts'
        }
      }
      ```
       @method typeKeyForModel
      @param {Model} model
      @return {String}
      @public
    */
  }, {
    key: "typeKeyForModel",
    value: function typeKeyForModel(model) {
      return dasherize2(this._container.inflector.pluralize(model.modelName));
    }
  }, {
    key: "getCoalescedIds",
    value: function getCoalescedIds3(request) {
      var ids = request.queryParams && request.queryParams["filter[id]"];
      if (typeof ids === "string") {
        return ids.split(",");
      }
      return ids;
    }
    /**
      Allows for per-relationship inclusion of linkage data. Use this when `alwaysIncludeLinkageData` is not granular enough.
       ```js
      export default JSONAPISerializer.extend({
        shouldIncludeLinkageData(relationshipKey, model) {
          if (relationshipKey === 'author' || relationshipKey === 'ghostWriter') {
            return true;
          }
          return false;
        }
      });
      ```
       @method shouldIncludeLinkageData
      @param {String} relationshipKey
      @param {Model} model
      @return {Boolean}
      @public
    */
  }, {
    key: "shouldIncludeLinkageData",
    value: function shouldIncludeLinkageData(relationshipKey, model) {
      return false;
    }
  }]);
  return JSONAPISerializer2;
}(Serializer);
JSONAPISerializer.prototype.alwaysIncludeLinkageData = false;
var SerializerRegistry = function() {
  function SerializerRegistry2(schema) {
    var serializerMap = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _classCallCheck(this, SerializerRegistry2);
    this.schema = schema;
    this._serializerMap = serializerMap;
  }
  _createClass(SerializerRegistry2, [{
    key: "normalize",
    value: function normalize2(payload, modelName) {
      return this.serializerFor(modelName).normalize(payload);
    }
  }, {
    key: "serialize",
    value: function serialize(response, request) {
      var _this = this;
      this.request = request;
      if (this._isModelOrCollection(response)) {
        var serializer = this.serializerFor(response.modelName);
        return serializer.serialize(response, request);
      } else if (Array.isArray(response) && response.some(this._isCollection)) {
        return response.reduce(function(json, collection) {
          var serializer2 = _this.serializerFor(collection.modelName);
          if (serializer2.embed) {
            json[_this._container.inflector.pluralize(collection.modelName)] = serializer2.serialize(collection, request);
          } else {
            json = Object.assign(json, serializer2.serialize(collection, request));
          }
          return json;
        }, {});
      } else {
        return response;
      }
    }
  }, {
    key: "serializerFor",
    value: function serializerFor(type) {
      var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$explicit = _ref.explicit, explicit = _ref$explicit === void 0 ? false : _ref$explicit;
      var SerializerForResponse = type && this._serializerMap && this._serializerMap[camelize2(type)];
      if (explicit) {
        assert(!!SerializerForResponse, "You passed in ".concat(type, " as an explicit serializer type but that serializer doesn't exist."));
      } else {
        SerializerForResponse = SerializerForResponse || this._serializerMap.application || Serializer;
        assert(!SerializerForResponse || SerializerForResponse.prototype.embed || SerializerForResponse.prototype.root || new SerializerForResponse() instanceof JSONAPISerializer, "You cannot have a serializer that sideloads (embed: false) and disables the root (root: false).");
      }
      return new SerializerForResponse(this, type, this.request);
    }
  }, {
    key: "_isModel",
    value: function _isModel(object) {
      return object instanceof Model;
    }
  }, {
    key: "_isCollection",
    value: function _isCollection(object) {
      return object instanceof Collection || object instanceof PolymorphicCollection;
    }
  }, {
    key: "_isModelOrCollection",
    value: function _isModelOrCollection(object) {
      return this._isModel(object) || this._isCollection(object);
    }
  }, {
    key: "registerSerializers",
    value: function registerSerializers(newSerializerMaps) {
      var currentSerializerMap = this._serializerMap || {};
      this._serializerMap = Object.assign(currentSerializerMap, newSerializerMaps);
    }
  }, {
    key: "getCoalescedIds",
    value: function getCoalescedIds3(request, modelName) {
      return this.serializerFor(modelName).getCoalescedIds(request);
    }
  }]);
  return SerializerRegistry2;
}();
var collectionNameCache = {};
var internalCollectionNameCache = {};
var modelNameCache = {};
var Schema = function() {
  function Schema2(db) {
    var modelsMap = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _classCallCheck(this, Schema2);
    assert(db, "A schema requires a db");
    this.db = db;
    this._registry = {};
    this._dependentAssociations = {
      polymorphic: []
    };
    this.registerModels(modelsMap);
    this.isSaving = {};
  }
  _createClass(Schema2, [{
    key: "registerModels",
    value: function registerModels() {
      var _this = this;
      var hash = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      (0, import_forIn.default)(hash, function(model, key) {
        _this.registerModel(key, hash[key]);
      });
    }
    /**
      @method registerModel
      @param type
      @param ModelClass
      @public
      @hide
     */
  }, {
    key: "registerModel",
    value: function registerModel(type, ModelClass) {
      var _this2 = this;
      var camelizedModelName = camelize2(type);
      var modelName = dasherize2(camelizedModelName);
      ModelClass = ModelClass.extend();
      this._registry[camelizedModelName] = this._registry[camelizedModelName] || {
        "class": null,
        foreignKeys: []
      };
      this._registry[camelizedModelName]["class"] = ModelClass;
      ModelClass.prototype._schema = this;
      ModelClass.prototype.modelName = modelName;
      ModelClass.prototype.hasManyAssociations = {};
      ModelClass.prototype.hasManyAssociationFks = {};
      ModelClass.prototype.belongsToAssociations = {};
      ModelClass.prototype.belongsToAssociationFks = {};
      ModelClass.prototype.associationKeys = /* @__PURE__ */ new Set();
      ModelClass.prototype.associationIdKeys = /* @__PURE__ */ new Set();
      ModelClass.prototype.dependentAssociations = [];
      var fksAddedFromThisModel = {};
      for (var associationProperty in ModelClass.prototype) {
        if (ModelClass.prototype[associationProperty] instanceof Association) {
          var association3 = ModelClass.prototype[associationProperty];
          association3.name = associationProperty;
          association3.modelName = association3.modelName || this.toModelName(associationProperty);
          association3.ownerModelName = modelName;
          association3.setSchema(this);
          var _association$getForei = association3.getForeignKeyArray(), _association$getForei2 = _slicedToArray(_association$getForei, 2), fkHolder = _association$getForei2[0], fk = _association$getForei2[1];
          fksAddedFromThisModel[fkHolder] = fksAddedFromThisModel[fkHolder] || [];
          assert(!fksAddedFromThisModel[fkHolder].includes(fk), "Your '".concat(type, "' model definition has multiple possible inverse relationships of type '").concat(fkHolder, "'. Please use explicit inverses."));
          fksAddedFromThisModel[fkHolder].push(fk);
          this._addForeignKeyToRegistry(fkHolder, fk);
          association3.addMethodsToModelClass(ModelClass, associationProperty);
        }
      }
      var collection = this.toCollectionName(modelName);
      if (!this.db[collection]) {
        this.db.createCollection(collection);
      }
      this[collection] = {
        camelizedModelName,
        "new": function _new(attrs) {
          return _this2["new"](camelizedModelName, attrs);
        },
        create: function create(attrs) {
          return _this2.create(camelizedModelName, attrs);
        },
        all: function all(attrs) {
          return _this2.all(camelizedModelName, attrs);
        },
        find: function find2(attrs) {
          return _this2.find(camelizedModelName, attrs);
        },
        findBy: function findBy(attrs) {
          return _this2.findBy(camelizedModelName, attrs);
        },
        findOrCreateBy: function findOrCreateBy(attrs) {
          return _this2.findOrCreateBy(camelizedModelName, attrs);
        },
        where: function where(attrs) {
          return _this2.where(camelizedModelName, attrs);
        },
        none: function none(attrs) {
          return _this2.none(camelizedModelName, attrs);
        },
        first: function first(attrs) {
          return _this2.first(camelizedModelName, attrs);
        }
      };
      return this;
    }
    /**
      @method modelFor
      @param type
      @public
      @hide
     */
  }, {
    key: "modelFor",
    value: function modelFor(type) {
      return this._registry[type];
    }
    /**
      Create a new unsaved model instance with attributes *attrs*.
       ```js
      let post = blogPosts.new({ title: 'Lorem ipsum' });
      post.title;   // Lorem ipsum
      post.id;      // null
      post.isNew(); // true
      ```
       @method new
      @param type
      @param attrs
      @public
     */
  }, {
    key: "new",
    value: function _new(type, attrs) {
      return this._instantiateModel(dasherize2(type), attrs);
    }
    /**
      Create a new model instance with attributes *attrs*, and insert it into the database.
       ```js
      let post = blogPosts.create({title: 'Lorem ipsum'});
      post.title;   // Lorem ipsum
      post.id;      // 1
      post.isNew(); // false
      ```
       @method create
      @param type
      @param attrs
      @public
     */
  }, {
    key: "create",
    value: function create(type, attrs) {
      return this["new"](type, attrs).save();
    }
    /**
      Return all models in the database.
       ```js
      let posts = blogPosts.all();
      // [post:1, post:2, ...]
      ```
       @method all
      @param type
      @public
     */
  }, {
    key: "all",
    value: function all(type) {
      var collection = this.collectionForType(type);
      return this._hydrate(collection, dasherize2(type));
    }
    /**
      Return an empty collection of type `type`.
       @method none
      @param type
      @public
     */
  }, {
    key: "none",
    value: function none(type) {
      return this._hydrate([], dasherize2(type));
    }
    /**
      Return one or many models in the database by id.
       ```js
      let post = blogPosts.find(1);
      let posts = blogPosts.find([1, 3, 4]);
      ```
       @method find
      @param type
      @param ids
      @public
     */
  }, {
    key: "find",
    value: function find2(type, ids) {
      var collection = this.collectionForType(type);
      var records = collection.find(ids);
      if (Array.isArray(ids)) {
        assert(records.length === ids.length, "Couldn't find all ".concat(this._container.inflector.pluralize(type), " with ids: (").concat(ids.join(","), ") (found ").concat(records.length, " results, but was looking for ").concat(ids.length, ")"));
      }
      return this._hydrate(records, dasherize2(type));
    }
    /**
      Returns the first model in the database that matches the key-value pairs in `attrs`. Note that a string comparison is used.
       ```js
      let post = blogPosts.findBy({ published: true });
      let post = blogPosts.findBy({ authorId: 1, published: false });
      let post = blogPosts.findBy({ author: janeSmith, featured: true });
      ```
       This will return `null` if the schema doesn't have any matching record.
       A predicate function can also be used to find a match.
       ```js
      let longPost = blogPosts.findBy((post) => post.body.length > 1000);
      ```
       @method findBy
      @param type
      @param attributesOrPredicate
      @public
     */
  }, {
    key: "findBy",
    value: function findBy(type, query) {
      var collection = this.collectionForType(type);
      var record = collection.findBy(query);
      return this._hydrate(record, dasherize2(type));
    }
    /**
      Returns the first model in the database that matches the key-value pairs in `attrs`, or creates a record with the attributes if one is not found.
       ```js
      // Find the first published blog post, or create a new one.
      let post = blogPosts.findOrCreateBy({ published: true });
      ```
       @method findOrCreateBy
      @param type
      @param attributeName
      @public
     */
  }, {
    key: "findOrCreateBy",
    value: function findOrCreateBy(type, attrs) {
      var collection = this.collectionForType(type);
      var record = collection.findBy(attrs);
      var model;
      if (!record) {
        model = this.create(type, attrs);
      } else {
        model = this._hydrate(record, dasherize2(type));
      }
      return model;
    }
    /**
      Return an ORM/Collection, which represents an array of models from the database matching `query`.
       If `query` is an object, its key-value pairs will be compared against records using string comparison.
       `query` can also be a compare function.
       ```js
      let posts = blogPosts.where({ published: true });
      let posts = blogPosts.where(post => post.published === true);
      ```
       @method where
      @param type
      @param query
      @public
     */
  }, {
    key: "where",
    value: function where(type, query) {
      var collection = this.collectionForType(type);
      var records = collection.where(query);
      return this._hydrate(records, dasherize2(type));
    }
    /**
      Returns the first model in the database.
       ```js
      let post = blogPosts.first();
      ```
       N.B. This will return `null` if the schema doesn't contain any records.
       @method first
      @param type
      @public
     */
  }, {
    key: "first",
    value: function first(type) {
      var collection = this.collectionForType(type);
      var record = collection[0];
      return this._hydrate(record, dasherize2(type));
    }
    /**
      @method modelClassFor
      @param modelName
      @public
      @hide
     */
  }, {
    key: "modelClassFor",
    value: function modelClassFor(modelName) {
      var model = this._registry[camelize2(modelName)];
      assert(model, "Model not registered: ".concat(modelName));
      return model["class"].prototype;
    }
    /*
      This method updates the dependentAssociations registry, which is used to
      keep track of which models depend on a given association. It's used when
      deleting models - their dependents need to be looked up and foreign keys
      updated.
       For example,
           schema = {
            post: Model.extend(),
            comment: Model.extend({
              post: belongsTo()
            })
          };
           comment1.post = post1;
          ...
          post1.destroy()
       Deleting this post should clear out comment1's foreign key.
       Polymorphic associations can have _any_ other model as a dependent, so we
      handle them separately.
    */
  }, {
    key: "addDependentAssociation",
    value: function addDependentAssociation(association3, modelName) {
      if (association3.isPolymorphic) {
        this._dependentAssociations.polymorphic.push(association3);
      } else {
        this._dependentAssociations[modelName] = this._dependentAssociations[modelName] || [];
        this._dependentAssociations[modelName].push(association3);
      }
    }
  }, {
    key: "dependentAssociationsFor",
    value: function dependentAssociationsFor(modelName) {
      var directDependents = this._dependentAssociations[modelName] || [];
      var polymorphicAssociations = this._dependentAssociations.polymorphic || [];
      return directDependents.concat(polymorphicAssociations);
    }
    /**
      Returns an object containing the associations registered for the model of the given _modelName_.
       For example, given this configuration
      
      ```js
      import { createServer, Model, hasMany, belongsTo } from 'miragejs'
       let server = createServer({
        models: {
          user: Model,
          article: Model.extend({
            fineAuthor: belongsTo("user"),
            comments: hasMany()
          }),
          comment: Model
        }
      })
      ```
       each of the following would return empty objects
       ```js
      server.schema.associationsFor('user')
      // {}
      server.schema.associationsFor('comment')
      // {}
      ```
       but the associations for the `article` would return
       ```js
      server.schema.associationsFor('article')
       // {
      //   fineAuthor: BelongsToAssociation,
      //   comments: HasManyAssociation
      // }
      ```
       Check out the docs on the Association class to see what fields are available for each association.
       @method associationsFor
      @param {String} modelName
      @return {Object}
      @public
    */
  }, {
    key: "associationsFor",
    value: function associationsFor(modelName) {
      var modelClass = this.modelClassFor(modelName);
      return Object.assign({}, modelClass.belongsToAssociations, modelClass.hasManyAssociations);
    }
  }, {
    key: "hasModelForModelName",
    value: function hasModelForModelName(modelName) {
      return this.modelFor(camelize2(modelName));
    }
    /*
      Private methods
    */
    /**
      @method collectionForType
      @param type
      @private
      @hide
     */
  }, {
    key: "collectionForType",
    value: function collectionForType(type) {
      var collection = this.toCollectionName(type);
      assert(this.db[collection], "You're trying to find model(s) of type ".concat(type, " but this collection doesn't exist in the database."));
      return this.db[collection];
    }
  }, {
    key: "toCollectionName",
    value: function toCollectionName(type) {
      if (typeof collectionNameCache[type] !== "string") {
        var modelName = dasherize2(type);
        var collectionName = camelize2(this._container.inflector.pluralize(modelName));
        collectionNameCache[type] = collectionName;
      }
      return collectionNameCache[type];
    }
    // This is to get at the underlying Db collection. Poorly named... need to
    // refactor to DbTable or something.
  }, {
    key: "toInternalCollectionName",
    value: function toInternalCollectionName(type) {
      if (typeof internalCollectionNameCache[type] !== "string") {
        var internalCollectionName = "_".concat(this.toCollectionName(type));
        internalCollectionNameCache[type] = internalCollectionName;
      }
      return internalCollectionNameCache[type];
    }
  }, {
    key: "toModelName",
    value: function toModelName(type) {
      if (typeof modelNameCache[type] !== "string") {
        var dasherized = dasherize2(type);
        var modelName = this._container.inflector.singularize(dasherized);
        modelNameCache[type] = modelName;
      }
      return modelNameCache[type];
    }
    /**
      @method _addForeignKeyToRegistry
      @param type
      @param fk
      @private
      @hide
     */
  }, {
    key: "_addForeignKeyToRegistry",
    value: function _addForeignKeyToRegistry(type, fk) {
      this._registry[type] = this._registry[type] || {
        "class": null,
        foreignKeys: []
      };
      var fks = this._registry[type].foreignKeys;
      if (!fks.includes(fk)) {
        fks.push(fk);
      }
    }
    /**
      @method _instantiateModel
      @param modelName
      @param attrs
      @private
      @hide
     */
  }, {
    key: "_instantiateModel",
    value: function _instantiateModel(modelName, attrs) {
      var ModelClass = this._modelFor(modelName);
      var fks = this._foreignKeysFor(modelName);
      return new ModelClass(this, modelName, attrs, fks);
    }
    /**
      @method _modelFor
      @param modelName
      @private
      @hide
     */
  }, {
    key: "_modelFor",
    value: function _modelFor(modelName) {
      return this._registry[camelize2(modelName)]["class"];
    }
    /**
      @method _foreignKeysFor
      @param modelName
      @private
      @hide
     */
  }, {
    key: "_foreignKeysFor",
    value: function _foreignKeysFor(modelName) {
      return this._registry[camelize2(modelName)].foreignKeys;
    }
    /**
      Takes a record and returns a model, or an array of records
      and returns a collection.
     *
      @method _hydrate
      @param records
      @param modelName
      @private
      @hide
     */
  }, {
    key: "_hydrate",
    value: function _hydrate(records, modelName) {
      if (Array.isArray(records)) {
        var models = records.map(function(record) {
          return this._instantiateModel(modelName, record);
        }, this);
        return new Collection(modelName, models);
      } else if (records) {
        return this._instantiateModel(modelName, records);
      } else {
        return null;
      }
    }
  }]);
  return Schema2;
}();
var classes = {
  Db,
  Association,
  RouteHandler,
  BaseRouteHandler,
  Serializer,
  SerializerRegistry,
  Schema
};
var defaultInflector$1 = {
  singularize,
  pluralize
};
var Container = function() {
  function Container2() {
    _classCallCheck(this, Container2);
    this.inflector = defaultInflector$1;
  }
  _createClass(Container2, [{
    key: "register",
    value: function register(key, value) {
      this[key] = value;
    }
  }, {
    key: "create",
    value: function create(className) {
      var Class = classes[className];
      Class.prototype._container = this;
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      return _construct(Class, args);
    }
  }]);
  return Container2;
}();
var defaultContainer = new Container();
Db.prototype._container = defaultContainer;
Association.prototype._container = defaultContainer;
BaseRouteHandler.prototype._container = defaultContainer;
RouteHandler.prototype._container = defaultContainer;
Serializer.prototype._container = defaultContainer;
SerializerRegistry.prototype._container = defaultContainer;
Schema.prototype._container = defaultContainer;
var defaultPassthroughs = [
  "http://localhost:0/chromecheckurl",
  // mobile chrome
  "http://localhost:30820/socket.io",
  // electron
  function(request) {
    return /.+\.hot-update.json$/.test(request.url);
  }
];
var defaultRouteOptions = {
  coalesce: false,
  timing: void 0
};
function isOption(option) {
  if (!option || _typeof(option) !== "object") {
    return false;
  }
  var allOptions = Object.keys(defaultRouteOptions);
  var optionKeys = Object.keys(option);
  for (var i = 0; i < optionKeys.length; i++) {
    var key = optionKeys[i];
    if (allOptions.indexOf(key) > -1) {
      return true;
    }
  }
  return false;
}
function extractRouteArguments(args) {
  var _args$splice = args.splice(-1), _args$splice2 = _slicedToArray(_args$splice, 1), lastArg = _args$splice2[0];
  if (isOption(lastArg)) {
    lastArg = (0, import_assign.default)({}, defaultRouteOptions, lastArg);
  } else {
    args.push(lastArg);
    lastArg = defaultRouteOptions;
  }
  var t = 2 - args.length;
  while (t-- > 0) {
    args.push(void 0);
  }
  args.push(lastArg);
  return args;
}
var PretenderConfig = function() {
  function PretenderConfig2() {
    _classCallCheck(this, PretenderConfig2);
    _defineProperty(this, "urlPrefix", void 0);
    _defineProperty(this, "namespace", void 0);
    _defineProperty(this, "timing", void 0);
    _defineProperty(this, "passthroughChecks", void 0);
    _defineProperty(this, "pretender", void 0);
    _defineProperty(this, "mirageServer", void 0);
    _defineProperty(this, "trackRequests", void 0);
  }
  _createClass(PretenderConfig2, [{
    key: "create",
    value: function create(mirageServer, config) {
      var _this = this;
      this.mirageServer = mirageServer;
      this.pretender = this._create(mirageServer, config);
      mirageServer.pretender = this.pretender;
      this.passthroughChecks = this.passthroughChecks || [];
      this.config(config);
      [["get"], ["post"], ["put"], ["delete", "del"], ["patch"], ["head"], ["options"]].forEach(function(_ref) {
        var _ref2 = _slicedToArray(_ref, 2), verb = _ref2[0], alias = _ref2[1];
        _this[verb] = function(path) {
          var _this$pretender;
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          var _extractRouteArgument = extractRouteArguments(args), _extractRouteArgument2 = _slicedToArray(_extractRouteArgument, 3), rawHandler = _extractRouteArgument2[0], customizedCode = _extractRouteArgument2[1], options = _extractRouteArgument2[2];
          var handler = mirageServer.registerRouteHandler(verb, path, rawHandler, customizedCode, options);
          var fullPath = _this._getFullPath(path);
          var timing = options.timing !== void 0 ? options.timing : function() {
            return _this.timing;
          };
          return (_this$pretender = _this.pretender) === null || _this$pretender === void 0 ? void 0 : _this$pretender[verb](fullPath, handler, timing);
        };
        mirageServer[verb] = _this[verb];
        if (alias) {
          _this[alias] = _this[verb];
          mirageServer[alias] = _this[verb];
        }
      });
    }
  }, {
    key: "config",
    value: function config(_config) {
      var _ref3, _config$timing;
      var useDefaultPassthroughs = typeof _config.useDefaultPassthroughs !== "undefined" ? _config.useDefaultPassthroughs : true;
      if (useDefaultPassthroughs) {
        this._configureDefaultPassthroughs();
      }
      var didOverridePretenderConfig = _config.trackRequests !== void 0 && _config.trackRequests !== this.trackRequests;
      assert(!didOverridePretenderConfig, "You cannot modify Pretender's request tracking once the server is created");
      this.timing = (_ref3 = (_config$timing = _config.timing) !== null && _config$timing !== void 0 ? _config$timing : this.timing) !== null && _ref3 !== void 0 ? _ref3 : 400;
      this.urlPrefix = this.urlPrefix || _config.urlPrefix || "";
      this.namespace = this.namespace || _config.namespace || "";
    }
    /**
     *
     * @private
     * @hide
     */
  }, {
    key: "_configureDefaultPassthroughs",
    value: function _configureDefaultPassthroughs() {
      var _this2 = this;
      defaultPassthroughs.forEach(function(passthroughUrl) {
        _this2.passthrough(passthroughUrl);
      });
    }
    /**
     * Creates a new Pretender instance.
     *
     * @method _create
     * @param {Server} server
     * @return {Object} A new Pretender instance.
     * @public
     */
  }, {
    key: "_create",
    value: function _create(mirageServer, config) {
      if (typeof window !== "undefined") {
        this.trackRequests = config.trackRequests || false;
        return new pretender_es_default(function() {
          this.passthroughRequest = function(verb, path, request) {
            if (mirageServer.shouldLog()) {
              console.log("Mirage: Passthrough request for ".concat(verb.toUpperCase(), " ").concat(request.url));
            }
          };
          this.handledRequest = function(verb, path, request) {
            if (mirageServer.shouldLog()) {
              console.groupCollapsed("Mirage: [".concat(request.status, "] ").concat(verb.toUpperCase(), " ").concat(request.url));
              var requestBody = request.requestBody, responseText = request.responseText;
              var loggedRequest, loggedResponse;
              try {
                loggedRequest = JSON.parse(requestBody);
              } catch (e) {
                loggedRequest = requestBody;
              }
              try {
                loggedResponse = JSON.parse(responseText);
              } catch (e) {
                loggedResponse = responseText;
              }
              console.groupCollapsed("Response");
              console.log(loggedResponse);
              console.groupEnd();
              console.groupCollapsed("Request (data)");
              console.log(loggedRequest);
              console.groupEnd();
              console.groupCollapsed("Request (raw)");
              console.log(request);
              console.groupEnd();
              console.groupEnd();
            }
          };
          var originalCheckPassthrough = this.checkPassthrough;
          this.checkPassthrough = function(request) {
            var shouldPassthrough = mirageServer.passthroughChecks.some(function(passthroughCheck) {
              return passthroughCheck(request);
            });
            if (shouldPassthrough) {
              var url = request.url.includes("?") ? request.url.substr(0, request.url.indexOf("?")) : request.url;
              this[request.method.toLowerCase()](url, this.passthrough);
            }
            return originalCheckPassthrough.apply(this, arguments);
          };
          this.unhandledRequest = function(verb, path) {
            path = decodeURI(path);
            var namespaceError = "";
            if (this.namespace === "") {
              namespaceError = "There is no existing namespace defined. Please define one";
            } else {
              namespaceError = "The existing namespace is ".concat(this.namespace);
            }
            assert("Your app tried to ".concat(verb, " '").concat(path, "', but there was no route defined to handle this request. Define a route for this endpoint in your routes() config. Did you forget to define a namespace? ").concat(namespaceError));
          };
        }, {
          trackRequests: this.trackRequests
        });
      }
    }
    /**
     By default, if your app makes a request that is not defined in your server config, Mirage will throw an error. You can use `passthrough` to whitelist requests, and allow them to pass through your Mirage server to the actual network layer.
      Note: Put all passthrough config at the bottom of your routes, to give your route handlers precedence.
      To ignore paths on your current host (as well as configured `namespace`), use a leading `/`:
      ```js
     this.passthrough('/addresses');
     ```
      You can also pass a list of paths, or call `passthrough` multiple times:
      ```js
     this.passthrough('/addresses', '/contacts');
     this.passthrough('/something');
     this.passthrough('/else');
     ```
      These lines will allow all HTTP verbs to pass through. If you want only certain verbs to pass through, pass an array as the last argument with the specified verbs:
      ```js
     this.passthrough('/addresses', ['post']);
     this.passthrough('/contacts', '/photos', ['get']);
     ```
      You can pass a function to `passthrough` to do a runtime check on whether or not the request should be handled by Mirage. If the function returns `true` Mirage will not handle the request and let it pass through.
      ```js
     this.passthrough(request => {
        return request.queryParams.skipMirage;
      });
     ```
      If you want all requests on the current domain to pass through, simply invoke the method with no arguments:
      ```js
     this.passthrough();
     ```
      Note again that the current namespace (i.e. any `namespace` property defined above this call) will be applied.
      You can also allow other-origin hosts to passthrough. If you use a fully-qualified domain name, the `namespace` property will be ignored. Use two * wildcards to match all requests under a path:
      ```js
     this.passthrough('http://api.foo.bar/**');
     this.passthrough('http://api.twitter.com/v1/cards/**');
     ```
      In versions of Pretender prior to 0.12, `passthrough` only worked with jQuery >= 2.x. As long as you're on Pretender@0.12 or higher, you should be all set.
      @method passthrough
     @param {String} [...paths] Any number of paths to whitelist
     @param {Array} options Unused
     @public
     */
  }, {
    key: "passthrough",
    value: function passthrough() {
      var _this3 = this;
      for (var _len2 = arguments.length, paths = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        paths[_key2] = arguments[_key2];
      }
      if (typeof window !== "undefined") {
        var verbs = ["get", "post", "put", "delete", "patch", "options", "head"];
        var lastArg = paths[paths.length - 1];
        if (paths.length === 0) {
          paths = ["/**", "/"];
        } else if (paths.length > 1 && Array.isArray(lastArg)) {
          verbs = paths.pop();
        }
        paths.forEach(function(path) {
          if (typeof path === "function") {
            _this3.passthroughChecks.push(path);
          } else {
            verbs.forEach(function(verb) {
              var fullPath = _this3._getFullPath(path);
              _this3.pretender[verb](fullPath, _this3.pretender.passthrough);
            });
          }
        });
      }
    }
    /**
     * Builds a full path for Pretender to monitor based on the `path` and
     * configured options (`urlPrefix` and `namespace`).
     *
     * @private
     * @hide
     */
  }, {
    key: "_getFullPath",
    value: function _getFullPath(path) {
      path = path[0] === "/" ? path.slice(1) : path;
      var fullPath = "";
      var urlPrefix = this.urlPrefix ? this.urlPrefix.trim() : "";
      var namespace = "";
      if (this.urlPrefix && this.namespace) {
        if (this.namespace[0] === "/" && this.namespace[this.namespace.length - 1] === "/") {
          namespace = this.namespace.substring(0, this.namespace.length - 1).substring(1);
        }
        if (this.namespace[0] === "/" && this.namespace[this.namespace.length - 1] !== "/") {
          namespace = this.namespace.substring(1);
        }
        if (this.namespace[0] !== "/" && this.namespace[this.namespace.length - 1] === "/") {
          namespace = this.namespace.substring(0, this.namespace.length - 1);
        }
        if (this.namespace[0] !== "/" && this.namespace[this.namespace.length - 1] !== "/") {
          namespace = this.namespace;
        }
      }
      if (this.namespace && !this.urlPrefix) {
        if (this.namespace[0] === "/" && this.namespace[this.namespace.length - 1] === "/") {
          namespace = this.namespace.substring(0, this.namespace.length - 1);
        }
        if (this.namespace[0] === "/" && this.namespace[this.namespace.length - 1] !== "/") {
          namespace = this.namespace;
        }
        if (this.namespace[0] !== "/" && this.namespace[this.namespace.length - 1] === "/") {
          var namespaceSub = this.namespace.substring(0, this.namespace.length - 1);
          namespace = "/".concat(namespaceSub);
        }
        if (this.namespace[0] !== "/" && this.namespace[this.namespace.length - 1] !== "/") {
          namespace = "/".concat(this.namespace);
        }
      }
      if (!this.namespace) {
        namespace = "";
      }
      if (/^https?:\/\//.test(path)) {
        fullPath += path;
      } else {
        if (urlPrefix.length) {
          fullPath += urlPrefix[urlPrefix.length - 1] === "/" ? urlPrefix : "".concat(urlPrefix, "/");
        }
        fullPath += namespace;
        if (fullPath[fullPath.length - 1] !== "/") {
          fullPath += "/";
        }
        fullPath += path;
        if (!/^https?:\/\//.test(fullPath)) {
          fullPath = "/".concat(fullPath);
          fullPath = fullPath.replace(/\/+/g, "/");
        }
      }
      return fullPath;
    }
  }, {
    key: "start",
    value: function start() {
    }
  }, {
    key: "shutdown",
    value: function shutdown() {
      this.pretender.shutdown();
    }
  }]);
  return PretenderConfig2;
}();
var isPluralForModelCache = {};
var defaultInflector = {
  singularize,
  pluralize
};
function createServer(options) {
  return new Server(options);
}
var Server = function() {
  function Server2() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _classCallCheck(this, Server2);
    this._container = new Container();
    this.config(options);
    this.db = this.db || void 0;
    this.schema = this.schema || void 0;
    this.middleware = [];
  }
  _createClass(Server2, [{
    key: "namespace",
    get: function get3() {
      return this.interceptor.namespace;
    },
    set: function set2(value) {
      this.interceptor.namespace = value;
    }
    // todo deprecate following
  }, {
    key: "urlPrefix",
    get: function get3() {
      return this.interceptor.urlPrefix;
    },
    set: function set2(value) {
      this.interceptor.urlPrefix = value;
    }
    // todo deprecate following
  }, {
    key: "timing",
    get: function get3() {
      return this.interceptor.timing;
    },
    set: function set2(value) {
      this.interceptor.timing = value;
    }
    // todo deprecate following
  }, {
    key: "passthroughChecks",
    get: function get3() {
      return this.interceptor.passthroughChecks;
    },
    set: function set2(value) {
      this.interceptor.passthroughChecks = value;
    }
  }, {
    key: "config",
    value: function config() {
      var _this$interceptor$sta, _this$interceptor;
      var _config = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (!_config.interceptor) {
        _config.interceptor = new PretenderConfig();
      }
      if (this.interceptor) {
        this.interceptor.config(_config);
      } else {
        this.interceptor = _config.interceptor;
        this.interceptor.create(this, _config);
      }
      var didOverrideConfig = _config.environment && this.environment && this.environment !== _config.environment;
      assert(!didOverrideConfig, "You cannot modify Mirage's environment once the server is created");
      this.environment = _config.environment || this.environment || "development";
      if (_config.routes) {
        assert(!_config.baseConfig, "The routes option is an alias for the baseConfig option. You can't pass both options into your server definition.");
        _config.baseConfig = _config.routes;
      }
      if (_config.seeds) {
        assert(!_config.scenarios, "The seeds option is an alias for the scenarios.default option. You can't pass both options into your server definition.");
        _config.scenarios = {
          "default": _config.seeds
        };
      }
      this._config = _config;
      this.inflector = _config.inflector || defaultInflector;
      this._container.register("inflector", this.inflector);
      this.logging = _config.logging !== void 0 ? this.logging : void 0;
      this.testConfig = this.testConfig || void 0;
      this.trackRequests = _config.trackRequests;
      if (this.db) {
        this.db.registerIdentityManagers(_config.identityManagers);
      } else {
        this.db = this._container.create("Db", void 0, _config.identityManagers);
      }
      if (this.schema) {
        this.schema.registerModels(_config.models);
        this.serializerOrRegistry.registerSerializers(_config.serializers || {});
      } else {
        this.schema = this._container.create("Schema", this.db, _config.models);
        this.serializerOrRegistry = this._container.create("SerializerRegistry", this.schema, _config.serializers);
      }
      var hasFactories = this._hasModulesOfType(_config, "factories");
      var hasDefaultScenario = _config.scenarios && Object.prototype.hasOwnProperty.call(_config.scenarios, "default");
      if (_config.baseConfig) {
        this.loadConfig(_config.baseConfig);
      }
      if (this.isTest()) {
        this.loadConfig(_config.testConfig);
        if (typeof window !== "undefined") {
          window.server = this;
        }
      }
      if (this.isTest() && hasFactories) {
        this.loadFactories(_config.factories);
      } else if (!this.isTest() && hasDefaultScenario) {
        this.loadFactories(_config.factories);
        _config.scenarios["default"](this);
      } else {
        this.loadFixtures();
      }
      (_this$interceptor$sta = (_this$interceptor = this.interceptor).start) === null || _this$interceptor$sta === void 0 ? void 0 : _this$interceptor$sta.call(_this$interceptor);
    }
    /**
     * Determines if the current environment is the testing environment.
     *
     * @method isTest
     * @return {Boolean} True if the environment is 'test', false otherwise.
     * @public
     * @hide
     */
  }, {
    key: "isTest",
    value: function isTest() {
      return this.environment === "test";
    }
    /**
      Determines if the server should log.
       @method shouldLog
      @return The value of this.logging if defined, or false if in the testing environment,
      true otherwise.
      @public
      @hide
    */
  }, {
    key: "shouldLog",
    value: function shouldLog() {
      return typeof this.logging !== "undefined" ? this.logging : !this.isTest();
    }
    /**
     * Load the configuration given, setting timing to 0 if in the test
     * environment.
     *
     * @method loadConfig
     * @param {Object} config The configuration to load.
     * @public
     * @hide
     */
  }, {
    key: "loadConfig",
    value: function loadConfig(config) {
      config === null || config === void 0 ? void 0 : config.call(this);
      this.timing = this.isTest() ? 0 : this.timing || 0;
    }
    // TODO deprecate this in favor of direct call
  }, {
    key: "passthrough",
    value: function passthrough() {
      var _this$interceptor$pas, _this$interceptor2;
      for (var _len = arguments.length, paths = new Array(_len), _key = 0; _key < _len; _key++) {
        paths[_key] = arguments[_key];
      }
      (_this$interceptor$pas = (_this$interceptor2 = this.interceptor).passthrough) === null || _this$interceptor$pas === void 0 ? void 0 : _this$interceptor$pas.call.apply(_this$interceptor$pas, [_this$interceptor2].concat(paths));
    }
    /**
      By default, `fixtures` will be loaded during testing if you don't have factories defined, and during development if you don't have `seeds` defined. You can use `loadFixtures()` to also load fixture files in either of these environments, in addition to using factories to seed your database.
       `server.loadFixtures()` loads all the files, and `server.loadFixtures(file1, file2...)` loads selective fixture files.
       For example, in a test you may want to start out with all your fixture data loaded:
       ```js
      test('I can view the photos', function() {
        server.loadFixtures();
        server.createList('photo', 10);
         visit('/');
         andThen(() => {
          equal( find('img').length, 10 );
        });
      });
      ```
       or in development, you may want to load a few reference fixture files, and use factories to define the rest of your data:
       ```js
      createServer({
        ...,
        seeds(server) {
          server.loadFixtures('countries', 'states');
           let author = server.create('author');
          server.createList('post', 10, {author_id: author.id});
        }
      })
      ```
       @method loadFixtures
      @param {String} [...args] The name of the fixture to load.
      @public
    */
  }, {
    key: "loadFixtures",
    value: function loadFixtures() {
      var fixtures = this._config.fixtures;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      if (args.length) {
        var camelizedArgs = args.map(camelize2);
        var missingKeys = camelizedArgs.filter(function(key) {
          return !fixtures[key];
        });
        if (missingKeys.length) {
          throw new Error("Fixtures not found: ".concat(missingKeys.join(", ")));
        }
        fixtures = import_pick.default.apply(void 0, [fixtures].concat(_toConsumableArray(camelizedArgs)));
      }
      this.db.loadData(fixtures);
    }
    /*
      Factory methods
    */
    /**
     * Load factories into Mirage's database.
     *
     * @method loadFactories
     * @param {Object} factoryMap
     * @public
     * @hide
     */
  }, {
    key: "loadFactories",
    value: function loadFactories() {
      var _this = this;
      var factoryMap = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var currentFactoryMap = this._factoryMap || {};
      this._factoryMap = (0, import_assign.default)(currentFactoryMap, factoryMap);
      Object.keys(factoryMap).forEach(function(type) {
        var collectionName = _this.schema.toCollectionName(type);
        _this.db.createCollection(collectionName);
      });
    }
    /**
     * Get the factory for a given type.
     *
     * @method factoryFor
     * @param {String} type
     * @private
     * @hide
     */
  }, {
    key: "factoryFor",
    value: function factoryFor(type) {
      var camelizedType = camelize2(type);
      if (this._factoryMap && this._factoryMap[camelizedType]) {
        return this._factoryMap[camelizedType];
      }
    }
  }, {
    key: "build",
    value: function build(type) {
      for (var _len3 = arguments.length, traitsAndOverrides = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        traitsAndOverrides[_key3 - 1] = arguments[_key3];
      }
      var traits = traitsAndOverrides.filter(function(arg) {
        return arg && typeof arg === "string";
      });
      var overrides = (0, import_find.default)(traitsAndOverrides, function(arg) {
        return (0, import_isPlainObject.default)(arg);
      });
      var camelizedType = camelize2(type);
      this.factorySequences = this.factorySequences || {};
      this.factorySequences[camelizedType] = this.factorySequences[camelizedType] + 1 || 0;
      var OriginalFactory = this.factoryFor(type);
      if (OriginalFactory) {
        OriginalFactory = OriginalFactory.extend({});
        var attrs = OriginalFactory.attrs || {};
        this._validateTraits(traits, OriginalFactory, type);
        var mergedExtensions = this._mergeExtensions(attrs, traits, overrides);
        this._mapAssociationsFromAttributes(type, attrs, overrides);
        this._mapAssociationsFromAttributes(type, mergedExtensions);
        var Factory3 = OriginalFactory.extend(mergedExtensions);
        var factory = new Factory3();
        var sequence = this.factorySequences[camelizedType];
        return factory.build(sequence);
      } else {
        return overrides;
      }
    }
  }, {
    key: "buildList",
    value: function buildList(type, amount) {
      assert((0, import_isInteger.default)(amount), "second argument has to be an integer, you passed: ".concat(_typeof(amount)));
      var list = [];
      for (var _len4 = arguments.length, traitsAndOverrides = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        traitsAndOverrides[_key4 - 2] = arguments[_key4];
      }
      var buildArgs = [type].concat(traitsAndOverrides);
      for (var i = 0; i < amount; i++) {
        list.push(this.build.apply(this, buildArgs));
      }
      return list;
    }
    /**
      Generates a single model of type *type*, inserts it into the database (giving it an id), and returns the data that was
      added.
       ```js
      test("I can view a contact's details", function() {
        let contact = server.create('contact');
         visit('/contacts/' + contact.id);
         andThen(() => {
          equal( find('h1').text(), 'The contact is Link');
        });
      });
      ```
       You can override the attributes from the factory definition with a
      hash passed in as the second parameter. For example, if we had this factory
       ```js
      export default Factory.extend({
        name: 'Link'
      });
      ```
       we could override the name like this:
       ```js
      test("I can view the contacts", function() {
        server.create('contact', {name: 'Zelda'});
         visit('/');
         andThen(() => {
          equal( find('p').text(), 'Zelda' );
        });
      });
      ```
       @method create
      @param type the singularized type of the model
      @param traitsAndOverrides
      @public
    */
  }, {
    key: "create",
    value: function create(type) {
      var _this2 = this;
      assert(this._modelOrFactoryExistsForType(type), "You called server.create('".concat(type, "') but no model or factory was found. Make sure you're passing in the singularized version of the model or factory name."));
      for (var _len5 = arguments.length, options = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        options[_key5 - 1] = arguments[_key5];
      }
      var traits = options.filter(function(arg) {
        return arg && typeof arg === "string";
      });
      var overrides = (0, import_find.default)(options, function(arg) {
        return (0, import_isPlainObject.default)(arg);
      });
      var collectionFromCreateList = (0, import_find.default)(options, function(arg) {
        return arg && Array.isArray(arg);
      });
      var attrs = this.build.apply(this, [type].concat(_toConsumableArray(traits), [overrides]));
      var modelOrRecord;
      if (this.schema && this.schema[this.schema.toCollectionName(type)]) {
        var modelClass = this.schema[this.schema.toCollectionName(type)];
        modelOrRecord = modelClass.create(attrs);
      } else {
        var collection, collectionName;
        if (collectionFromCreateList) {
          collection = collectionFromCreateList;
        } else {
          collectionName = this.schema ? this.schema.toInternalCollectionName(type) : "_".concat(this.inflector.pluralize(type));
          collection = this.db[collectionName];
        }
        assert(collection, "You called server.create('".concat(type, "') but no model or factory was found."));
        modelOrRecord = collection.insert(attrs);
      }
      var OriginalFactory = this.factoryFor(type);
      if (OriginalFactory) {
        OriginalFactory.extractAfterCreateCallbacks({
          traits
        }).forEach(function(afterCreate) {
          afterCreate(modelOrRecord, _this2);
        });
      }
      return modelOrRecord;
    }
    /**
      Creates *amount* models of type *type*, optionally overriding the attributes from the factory with *attrs*.
       Returns the array of records that were added to the database.
       Here's an example from a test:
       ```js
      test("I can view the contacts", function() {
        server.createList('contact', 5);
        let youngContacts = server.createList('contact', 5, {age: 15});
         visit('/');
         andThen(function() {
          equal(currentRouteName(), 'index');
          equal( find('p').length, 10 );
        });
      });
      ```
       And one from setting up your development database:
       ```js
      createServer({
        seeds(server) {
          let contact = server.create('contact')
           server.createList('address', 5, { contact })
        }
      })
      ```
       @method createList
      @param type
      @param amount
      @param traitsAndOverrides
      @public
    */
  }, {
    key: "createList",
    value: function createList(type, amount) {
      assert(this._modelOrFactoryExistsForType(type), "You called server.createList('".concat(type, "') but no model or factory was found. Make sure you're passing in the singularized version of the model or factory name."));
      assert((0, import_isInteger.default)(amount), "second argument has to be an integer, you passed: ".concat(_typeof(amount)));
      var list = [];
      var collectionName = this.schema ? this.schema.toInternalCollectionName(type) : "_".concat(this.inflector.pluralize(type));
      var collection = this.db[collectionName];
      for (var _len6 = arguments.length, traitsAndOverrides = new Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
        traitsAndOverrides[_key6 - 2] = arguments[_key6];
      }
      var createArguments = [type].concat(traitsAndOverrides, [collection]);
      for (var i = 0; i < amount; i++) {
        list.push(this.create.apply(this, createArguments));
      }
      return list;
    }
    /**
      Shutdown the server and stop intercepting network requests.
       @method shutdown
      @public
    */
  }, {
    key: "shutdown",
    value: function shutdown() {
      if (typeof window !== "undefined") {
        this.interceptor.shutdown();
      }
      if (typeof window !== "undefined" && this.environment === "test") {
        window.server = void 0;
      }
    }
  }, {
    key: "resource",
    value: function resource(resourceName) {
      var _this3 = this;
      var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, only = _ref.only, except = _ref.except, path = _ref.path;
      resourceName = this.inflector.pluralize(resourceName);
      path = path || "/".concat(resourceName);
      only = only || [];
      except = except || [];
      if (only.length > 0 && except.length > 0) {
        throw "cannot use both :only and :except options";
      }
      var actionsMethodsAndsPathsMappings = {
        index: {
          methods: ["get"],
          path: "".concat(path)
        },
        show: {
          methods: ["get"],
          path: "".concat(path, "/:id")
        },
        create: {
          methods: ["post"],
          path: "".concat(path)
        },
        update: {
          methods: ["put", "patch"],
          path: "".concat(path, "/:id")
        },
        "delete": {
          methods: ["del"],
          path: "".concat(path, "/:id")
        }
      };
      var allActions = Object.keys(actionsMethodsAndsPathsMappings);
      var actions = only.length > 0 && only || except.length > 0 && allActions.filter(function(action) {
        return except.indexOf(action) === -1;
      }) || allActions;
      actions.forEach(function(action) {
        var methodsWithPath = actionsMethodsAndsPathsMappings[action];
        methodsWithPath.methods.forEach(function(method) {
          return path === resourceName ? _this3[method](methodsWithPath.path) : _this3[method](methodsWithPath.path, resourceName);
        });
      });
    }
  }, {
    key: "_serialize",
    value: function _serialize(body) {
      if (typeof body === "string") {
        return body;
      } else {
        return JSON.stringify(body);
      }
    }
  }, {
    key: "registerRouteHandler",
    value: function registerRouteHandler(verb, path, rawHandler, customizedCode, options) {
      var _this4 = this;
      var middleware = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : this.middleware;
      var routeHandler = this._container.create("RouteHandler", {
        schema: this.schema,
        verb,
        rawHandler,
        customizedCode,
        options,
        path,
        serializerOrRegistry: this.serializerOrRegistry,
        middleware
      });
      return function(request) {
        return routeHandler.handle(request).then(function(mirageResponse) {
          var _mirageResponse = _slicedToArray(mirageResponse, 3), code = _mirageResponse[0], headers = _mirageResponse[1], response = _mirageResponse[2];
          return [code, headers, _this4._serialize(response)];
        });
      };
    }
    /**
     *
     * @private
     * @hide
     */
  }, {
    key: "_hasModulesOfType",
    value: function _hasModulesOfType(modules, type) {
      var modulesOfType = modules[type];
      return modulesOfType ? Object.keys(modulesOfType).length > 0 : false;
    }
    /**
     *
     * @private
     * @hide
     */
  }, {
    key: "_typeIsPluralForModel",
    value: function _typeIsPluralForModel(typeOrCollectionName) {
      if (typeof isPluralForModelCache[typeOrCollectionName] !== "boolean") {
        var modelOrFactoryExists = this._modelOrFactoryExistsForTypeOrCollectionName(typeOrCollectionName);
        var isPlural = typeOrCollectionName === this.inflector.pluralize(typeOrCollectionName);
        var isUncountable = this.inflector.singularize(typeOrCollectionName) === this.inflector.pluralize(typeOrCollectionName);
        var isPluralForModel = isPlural && !isUncountable && modelOrFactoryExists;
        isPluralForModelCache[typeOrCollectionName] = isPluralForModel;
      }
      return isPluralForModelCache[typeOrCollectionName];
    }
    /**
     *
     * @private
     * @hide
     */
  }, {
    key: "_modelOrFactoryExistsForType",
    value: function _modelOrFactoryExistsForType(type) {
      var modelExists = this.schema && this.schema.modelFor(camelize2(type));
      var dbCollectionExists = this.db[this.schema.toInternalCollectionName(type)];
      return (modelExists || dbCollectionExists) && !this._typeIsPluralForModel(type);
    }
    /**
     *
     * @private
     * @hide
     */
  }, {
    key: "_modelOrFactoryExistsForTypeOrCollectionName",
    value: function _modelOrFactoryExistsForTypeOrCollectionName(typeOrCollectionName) {
      var modelExists = this.schema && this.schema.modelFor(camelize2(typeOrCollectionName));
      var dbCollectionExists = this.db[this.schema.toInternalCollectionName(typeOrCollectionName)];
      return modelExists || dbCollectionExists;
    }
    /**
     *
     * @private
     * @hide
     */
  }, {
    key: "_validateTraits",
    value: function _validateTraits(traits, factory, type) {
      traits.forEach(function(traitName) {
        if (!factory.isTrait(traitName)) {
          throw new Error("'".concat(traitName, "' trait is not registered in '").concat(type, "' factory"));
        }
      });
    }
    /**
     *
     * @private
     * @hide
     */
  }, {
    key: "_mergeExtensions",
    value: function _mergeExtensions(attrs, traits, overrides) {
      var allExtensions = traits.map(function(traitName) {
        return attrs[traitName].extension;
      });
      allExtensions.push(overrides || {});
      return allExtensions.reduce(function(accum, extension) {
        return (0, import_assign.default)(accum, extension);
      }, {});
    }
    /**
     *
     * @private
     * @hide
     */
  }, {
    key: "_mapAssociationsFromAttributes",
    value: function _mapAssociationsFromAttributes(modelName, attributes) {
      var _this5 = this;
      var overrides = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      Object.keys(attributes || {}).filter(function(attr) {
        return isAssociation(attributes[attr]);
      }).forEach(function(attr) {
        var modelClass = _this5.schema.modelClassFor(modelName);
        var association3 = modelClass.associationFor(attr);
        assert(association3 && association3 instanceof BelongsTo, "You're using the `association` factory helper on the '".concat(attr, "' attribute of your ").concat(modelName, " factory, but that attribute is not a `belongsTo` association."));
        var isSelfReferentialBelongsTo = association3 && association3 instanceof BelongsTo && association3.modelName === modelName;
        assert(!isSelfReferentialBelongsTo, "You're using the association() helper on your ".concat(modelName, " factory for ").concat(attr, ", which is a belongsTo self-referential relationship. You can't do this as it will lead to infinite recursion. You can move the helper inside of a trait and use it selectively."));
        var isPolymorphic = association3 && association3.opts && association3.opts.polymorphic;
        assert(!isPolymorphic, "You're using the association() helper on your ".concat(modelName, " factory for ").concat(attr, ", which is a polymorphic relationship. This is not currently supported."));
        var factoryAssociation = attributes[attr];
        var foreignKey = "".concat(camelize2(attr), "Id");
        if (!overrides[attr]) {
          attributes[foreignKey] = _this5.create.apply(_this5, [association3.modelName].concat(_toConsumableArray(factoryAssociation.traitsAndOverrides))).id;
        }
        delete attributes[attr];
      });
    }
  }]);
  return Server2;
}();
var ActiveModelSerializer = Serializer.extend({
  serializeIds: "always",
  normalizeIds: true,
  keyForModel: function keyForModel(type) {
    return underscore2(type);
  },
  keyForAttribute: function keyForAttribute(attr) {
    attr = Serializer.prototype.keyForAttribute.apply(this, arguments);
    return underscore2(attr);
  },
  keyForRelationship: function keyForRelationship(type) {
    return this._container.inflector.pluralize(underscore2(type));
  },
  keyForEmbeddedRelationship: function keyForEmbeddedRelationship(attributeName) {
    return underscore2(attributeName);
  },
  keyForRelationshipIds: function keyForRelationshipIds(type) {
    return "".concat(underscore2(this._container.inflector.singularize(type)), "_ids");
  },
  keyForForeignKey: function keyForForeignKey(relationshipName) {
    return "".concat(underscore2(relationshipName), "_id");
  },
  keyForPolymorphicForeignKeyId: function keyForPolymorphicForeignKeyId(relationshipName) {
    return "".concat(underscore2(relationshipName), "_id");
  },
  keyForPolymorphicForeignKeyType: function keyForPolymorphicForeignKeyType(relationshipName) {
    return "".concat(underscore2(relationshipName), "_type");
  },
  normalize: function normalize(payload) {
    var _this = this;
    var type = Object.keys(payload)[0];
    var attrs = payload[type];
    var modelName = camelize2(type);
    var modelClass = this.schema.modelClassFor(modelName);
    var belongsToAssociations = modelClass.belongsToAssociations, hasManyAssociations = modelClass.hasManyAssociations;
    var belongsToKeys = Object.keys(belongsToAssociations);
    var hasManyKeys = Object.keys(hasManyAssociations);
    if (this.primaryKey !== "id") {
      attrs.id = attrs[this.primaryKey];
      delete attrs[this.primaryKey];
    }
    var jsonApiPayload = {
      data: {
        type: this._container.inflector.pluralize(type),
        attributes: {}
      }
    };
    if (attrs.id) {
      jsonApiPayload.data.id = attrs.id;
    }
    var relationships = {};
    Object.keys(attrs).forEach(function(key) {
      if (key !== "id") {
        if (_this.normalizeIds) {
          if (belongsToKeys.includes(key)) {
            var association3 = belongsToAssociations[key];
            var associationModel = association3.modelName;
            relationships[dasherize2(key)] = {
              data: {
                type: associationModel,
                id: attrs[key]
              }
            };
          } else if (hasManyKeys.includes(key)) {
            var _association = hasManyAssociations[key];
            var _associationModel = _association.modelName;
            var data = attrs[key].map(function(id) {
              return {
                type: _associationModel,
                id
              };
            });
            relationships[dasherize2(key)] = {
              data
            };
          } else {
            jsonApiPayload.data.attributes[dasherize2(key)] = attrs[key];
          }
        } else {
          jsonApiPayload.data.attributes[dasherize2(key)] = attrs[key];
        }
      }
    });
    if (Object.keys(relationships).length) {
      jsonApiPayload.data.relationships = relationships;
    }
    return jsonApiPayload;
  },
  getCoalescedIds: function getCoalescedIds(request) {
    return request.queryParams && request.queryParams.ids;
  }
});
var restSerializer = ActiveModelSerializer.extend({
  serializeIds: "always",
  keyForModel: function keyForModel2(type) {
    return camelize2(type);
  },
  keyForAttribute: function keyForAttribute2(attr) {
    attr = ActiveModelSerializer.prototype.keyForAttribute.apply(this, arguments);
    return camelize2(attr);
  },
  keyForRelationship: function keyForRelationship2(type) {
    return camelize2(this._container.inflector.pluralize(type));
  },
  keyForEmbeddedRelationship: function keyForEmbeddedRelationship2(attributeName) {
    return camelize2(attributeName);
  },
  keyForRelationshipIds: function keyForRelationshipIds2(type) {
    return camelize2(this._container.inflector.pluralize(type));
  },
  keyForForeignKey: function keyForForeignKey2(relationshipName) {
    return camelize2(this._container.inflector.singularize(relationshipName));
  },
  getCoalescedIds: function getCoalescedIds2(request) {
    return request.queryParams && request.queryParams.ids;
  }
});
function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0;
    var v = c === "x" ? r : r & 3 | 8;
    return v.toString(16);
  });
}
function hasMany() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return _construct(HasMany, args);
}
function belongsTo() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }
  return _construct(BelongsTo, args);
}
var index = {
  Factory,
  Response: Response2,
  hasMany,
  belongsTo
};
export {
  ActiveModelSerializer,
  Collection,
  Factory,
  IdentityManager,
  JSONAPISerializer,
  Model,
  PretenderConfig as PretenderInterceptor,
  Response2 as Response,
  restSerializer as RestSerializer,
  Serializer,
  Server,
  Db as _Db,
  DbCollection as _DbCollection,
  RouteHandler as _RouteHandler,
  SerializerRegistry as _SerializerRegistry,
  assert as _assert,
  Association as _ormAssociationsAssociation,
  BelongsTo as _ormAssociationsBelongsTo,
  HasMany as _ormAssociationsHasMany,
  PolymorphicCollection as _ormPolymorphicCollection,
  Schema as _ormSchema,
  BaseRouteHandler as _routeHandlersBase,
  FunctionRouteHandler as _routeHandlersFunction,
  ObjectRouteHandler as _routeHandlersObject,
  BaseShorthandRouteHandler as _routeHandlersShorthandsBase,
  DeleteShorthandRouteHandler as _routeHandlersShorthandsDelete,
  GetShorthandRouteHandler as _routeHandlersShorthandsGet,
  HeadShorthandRouteHandler as _routeHandlersShorthandsHead,
  PostShorthandRouteHandler as _routeHandlersShorthandsPost,
  PutShorthandRouteHandler as _routeHandlersShorthandsPut,
  extend as _utilsExtend,
  camelize2 as _utilsInflectorCamelize,
  capitalize2 as _utilsInflectorCapitalize,
  dasherize2 as _utilsInflectorDasherize,
  underscore2 as _utilsInflectorUnderscore,
  isAssociation as _utilsIsAssociation,
  referenceSort as _utilsReferenceSort,
  uuid as _utilsUuid,
  association,
  belongsTo,
  createServer,
  index as default,
  hasMany,
  trait
};
/*! Bundled license information:

fake-xml-http-request/src/fake-xml-http-request.js:
  (**
   * Minimal Event interface implementation
   *
   * Original implementation by Sven Fuchs: https://gist.github.com/995028
   * Modifications and tests by Christian Johansen.
   *
   * @author Sven Fuchs (svenfuchs@artweb-design.de)
   * @author Christian Johansen (christian@cjohansen.no)
   * @license BSD
   *
   * Copyright (c) 2011 Sven Fuchs, Christian Johansen
   *)
*/
//# sourceMappingURL=miragejs.js.map
