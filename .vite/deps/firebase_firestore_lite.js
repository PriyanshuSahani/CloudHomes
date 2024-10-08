import {
  Component,
  FirebaseError,
  LogLevel,
  Logger,
  SDK_VERSION,
  _getProvider,
  _registerComponent,
  _removeServiceInstance,
  createMockUserToken,
  deepEqual,
  getApp,
  getDefaultEmulatorHostnameAndPort,
  getModularInstance,
  registerVersion
} from "./chunk-UG3I2WU7.js";
import "./chunk-5WRI5ZAA.js";

// node_modules/@firebase/firestore/dist/lite/index.browser.esm2017.js
var User = class {
  constructor(t) {
    this.uid = t;
  }
  isAuthenticated() {
    return null != this.uid;
  }
  /**
   * Returns a key representing this user, suitable for inclusion in a
   * dictionary.
   */
  toKey() {
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
  }
  isEqual(t) {
    return t.uid === this.uid;
  }
};
User.UNAUTHENTICATED = new User(null), // TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
User.GOOGLE_CREDENTIALS = new User("google-credentials-uid"), User.FIRST_PARTY = new User("first-party-uid"), User.MOCK_USER = new User("mock-user");
var d = "10.13.1";
var f = new Logger("@firebase/firestore");
function setLogLevel(t) {
  f.setLogLevel(t);
}
function __PRIVATE_logDebug(t, ...e) {
  if (f.logLevel <= LogLevel.DEBUG) {
    const r = e.map(__PRIVATE_argToString);
    f.debug(`Firestore (${d}): ${t}`, ...r);
  }
}
function __PRIVATE_logError(t, ...e) {
  if (f.logLevel <= LogLevel.ERROR) {
    const r = e.map(__PRIVATE_argToString);
    f.error(`Firestore (${d}): ${t}`, ...r);
  }
}
function __PRIVATE_logWarn(t, ...e) {
  if (f.logLevel <= LogLevel.WARN) {
    const r = e.map(__PRIVATE_argToString);
    f.warn(`Firestore (${d}): ${t}`, ...r);
  }
}
function __PRIVATE_argToString(t) {
  if ("string" == typeof t) return t;
  try {
    return function __PRIVATE_formatJSON(t2) {
      return JSON.stringify(t2);
    }(t);
  } catch (e) {
    return t;
  }
}
function fail(t = "Unexpected state") {
  const e = `FIRESTORE (${d}) INTERNAL ASSERTION FAILED: ` + t;
  throw __PRIVATE_logError(e), new Error(e);
}
function __PRIVATE_hardAssert(t, e) {
  t || fail();
}
function __PRIVATE_debugCast(t, e) {
  return t;
}
var E = "ok";
var m = "cancelled";
var A = "unknown";
var T = "invalid-argument";
var R = "deadline-exceeded";
var P = "not-found";
var V = "already-exists";
var I = "permission-denied";
var p = "unauthenticated";
var y = "resource-exhausted";
var w = "failed-precondition";
var g = "aborted";
var F = "out-of-range";
var v = "unimplemented";
var D = "internal";
var b = "unavailable";
var C = "data-loss";
var FirestoreError = class extends FirebaseError {
  /** @hideconstructor */
  constructor(t, e) {
    super(t, e), this.code = t, this.message = e, // HACK: We write a toString property directly because Error is not a real
    // class and so inheritance does not work correctly. We could alternatively
    // do the same "back-door inheritance" trick that FirebaseError does.
    this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
  }
};
var __PRIVATE_Deferred = class {
  constructor() {
    this.promise = new Promise((t, e) => {
      this.resolve = t, this.reject = e;
    });
  }
};
var __PRIVATE_OAuthToken = class {
  constructor(t, e) {
    this.user = e, this.type = "OAuth", this.headers = /* @__PURE__ */ new Map(), this.headers.set("Authorization", `Bearer ${t}`);
  }
};
var __PRIVATE_EmptyAuthCredentialsProvider = class {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {
  }
  start(t, e) {
    t.enqueueRetryable(() => e(User.UNAUTHENTICATED));
  }
  shutdown() {
  }
};
var __PRIVATE_EmulatorAuthCredentialsProvider = class {
  constructor(t) {
    this.token = t, /**
     * Stores the listener registered with setChangeListener()
     * This isn't actually necessary since the UID never changes, but we use this
     * to verify the listen contract is adhered to in tests.
     */
    this.changeListener = null;
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  invalidateToken() {
  }
  start(t, e) {
    this.changeListener = e, // Fire with initial user.
    t.enqueueRetryable(() => e(this.token.user));
  }
  shutdown() {
    this.changeListener = null;
  }
};
var __PRIVATE_LiteAuthCredentialsProvider = class {
  constructor(t) {
    this.auth = null, t.onInit((t2) => {
      this.auth = t2;
    });
  }
  getToken() {
    return this.auth ? this.auth.getToken().then((t) => t ? (__PRIVATE_hardAssert("string" == typeof t.accessToken), new __PRIVATE_OAuthToken(t.accessToken, new User(this.auth.getUid()))) : null) : Promise.resolve(null);
  }
  invalidateToken() {
  }
  start(t, e) {
  }
  shutdown() {
  }
};
var __PRIVATE_FirstPartyToken = class {
  constructor(t, e, r) {
    this.t = t, this.i = e, this.o = r, this.type = "FirstParty", this.user = User.FIRST_PARTY, this.u = /* @__PURE__ */ new Map();
  }
  /**
   * Gets an authorization token, using a provided factory function, or return
   * null.
   */
  l() {
    return this.o ? this.o() : null;
  }
  get headers() {
    this.u.set("X-Goog-AuthUser", this.t);
    const t = this.l();
    return t && this.u.set("Authorization", t), this.i && this.u.set("X-Goog-Iam-Authorization-Token", this.i), this.u;
  }
};
var __PRIVATE_FirstPartyAuthCredentialsProvider = class {
  constructor(t, e, r) {
    this.t = t, this.i = e, this.o = r;
  }
  getToken() {
    return Promise.resolve(new __PRIVATE_FirstPartyToken(this.t, this.i, this.o));
  }
  start(t, e) {
    t.enqueueRetryable(() => e(User.FIRST_PARTY));
  }
  shutdown() {
  }
  invalidateToken() {
  }
};
var AppCheckToken = class {
  constructor(t) {
    this.value = t, this.type = "AppCheck", this.headers = /* @__PURE__ */ new Map(), t && t.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
  }
};
var __PRIVATE_LiteAppCheckTokenProvider = class {
  constructor(t) {
    this.h = t, this.appCheck = null, t.onInit((t2) => {
      this.appCheck = t2;
    });
  }
  getToken() {
    return this.appCheck ? this.appCheck.getToken().then((t) => t ? (__PRIVATE_hardAssert("string" == typeof t.token), new AppCheckToken(t.token)) : null) : Promise.resolve(null);
  }
  invalidateToken() {
  }
  start(t, e) {
  }
  shutdown() {
  }
};
var DatabaseInfo = class {
  /**
   * Constructs a DatabaseInfo using the provided host, databaseId and
   * persistenceKey.
   *
   * @param databaseId - The database to use.
   * @param appId - The Firebase App Id.
   * @param persistenceKey - A unique identifier for this Firestore's local
   * storage (used in conjunction with the databaseId).
   * @param host - The Firestore backend host to connect to.
   * @param ssl - Whether to use SSL when connecting.
   * @param forceLongPolling - Whether to use the forceLongPolling option
   * when using WebChannel as the network transport.
   * @param autoDetectLongPolling - Whether to use the detectBufferingProxy
   * option when using WebChannel as the network transport.
   * @param longPollingOptions Options that configure long-polling.
   * @param useFetchStreams Whether to use the Fetch API instead of
   * XMLHTTPRequest
   */
  constructor(t, e, r, n, i, s, o, a, u) {
    this.databaseId = t, this.appId = e, this.persistenceKey = r, this.host = n, this.ssl = i, this.forceLongPolling = s, this.autoDetectLongPolling = o, this.longPollingOptions = a, this.useFetchStreams = u;
  }
};
var DatabaseId = class _DatabaseId {
  constructor(t, e) {
    this.projectId = t, this.database = e || "(default)";
  }
  static empty() {
    return new _DatabaseId("", "");
  }
  get isDefaultDatabase() {
    return "(default)" === this.database;
  }
  isEqual(t) {
    return t instanceof _DatabaseId && t.projectId === this.projectId && t.database === this.database;
  }
};
var BasePath = class _BasePath {
  constructor(t, e, r) {
    void 0 === e ? e = 0 : e > t.length && fail(), void 0 === r ? r = t.length - e : r > t.length - e && fail(), this.segments = t, this.offset = e, this.len = r;
  }
  get length() {
    return this.len;
  }
  isEqual(t) {
    return 0 === _BasePath.comparator(this, t);
  }
  child(t) {
    const e = this.segments.slice(this.offset, this.limit());
    return t instanceof _BasePath ? t.forEach((t2) => {
      e.push(t2);
    }) : e.push(t), this.construct(e);
  }
  /** The index of one past the last segment of the path. */
  limit() {
    return this.offset + this.length;
  }
  popFirst(t) {
    return t = void 0 === t ? 1 : t, this.construct(this.segments, this.offset + t, this.length - t);
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(t) {
    return this.segments[this.offset + t];
  }
  isEmpty() {
    return 0 === this.length;
  }
  isPrefixOf(t) {
    if (t.length < this.length) return false;
    for (let e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return false;
    return true;
  }
  isImmediateParentOf(t) {
    if (this.length + 1 !== t.length) return false;
    for (let e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return false;
    return true;
  }
  forEach(t) {
    for (let e = this.offset, r = this.limit(); e < r; e++) t(this.segments[e]);
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  static comparator(t, e) {
    const r = Math.min(t.length, e.length);
    for (let n = 0; n < r; n++) {
      const r2 = t.get(n), i = e.get(n);
      if (r2 < i) return -1;
      if (r2 > i) return 1;
    }
    return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
  }
};
var ResourcePath = class _ResourcePath extends BasePath {
  construct(t, e, r) {
    return new _ResourcePath(t, e, r);
  }
  canonicalString() {
    return this.toArray().join("/");
  }
  toString() {
    return this.canonicalString();
  }
  /**
   * Returns a string representation of this path
   * where each path segment has been encoded with
   * `encodeURIComponent`.
   */
  toUriEncodedString() {
    return this.toArray().map(encodeURIComponent).join("/");
  }
  /**
   * Creates a resource path from the given slash-delimited string. If multiple
   * arguments are provided, all components are combined. Leading and trailing
   * slashes from all components are ignored.
   */
  static fromString(...t) {
    const e = [];
    for (const r of t) {
      if (r.indexOf("//") >= 0) throw new FirestoreError(T, `Invalid segment (${r}). Paths must not contain // in them.`);
      e.push(...r.split("/").filter((t2) => t2.length > 0));
    }
    return new _ResourcePath(e);
  }
  static emptyPath() {
    return new _ResourcePath([]);
  }
};
var S = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
var FieldPath$1 = class _FieldPath$1 extends BasePath {
  construct(t, e, r) {
    return new _FieldPath$1(t, e, r);
  }
  /**
   * Returns true if the string could be used as a segment in a field path
   * without escaping.
   */
  static isValidIdentifier(t) {
    return S.test(t);
  }
  canonicalString() {
    return this.toArray().map((t) => (t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), _FieldPath$1.isValidIdentifier(t) || (t = "`" + t + "`"), t)).join(".");
  }
  toString() {
    return this.canonicalString();
  }
  /**
   * Returns true if this field references the key of a document.
   */
  isKeyField() {
    return 1 === this.length && "__name__" === this.get(0);
  }
  /**
   * The field designating the key of a document.
   */
  static keyField() {
    return new _FieldPath$1(["__name__"]);
  }
  /**
   * Parses a field string from the given server-formatted string.
   *
   * - Splitting the empty string is not allowed (for now at least).
   * - Empty segments within the string (e.g. if there are two consecutive
   *   separators) are not allowed.
   *
   * TODO(b/37244157): we should make this more strict. Right now, it allows
   * non-identifier path components, even if they aren't escaped.
   */
  static fromServerFormat(t) {
    const e = [];
    let r = "", n = 0;
    const __PRIVATE_addCurrentSegment = () => {
      if (0 === r.length) throw new FirestoreError(T, `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
      e.push(r), r = "";
    };
    let i = false;
    for (; n < t.length; ) {
      const e2 = t[n];
      if ("\\" === e2) {
        if (n + 1 === t.length) throw new FirestoreError(T, "Path has trailing escape character: " + t);
        const e3 = t[n + 1];
        if ("\\" !== e3 && "." !== e3 && "`" !== e3) throw new FirestoreError(T, "Path has invalid escape sequence: " + t);
        r += e3, n += 2;
      } else "`" === e2 ? (i = !i, n++) : "." !== e2 || i ? (r += e2, n++) : (__PRIVATE_addCurrentSegment(), n++);
    }
    if (__PRIVATE_addCurrentSegment(), i) throw new FirestoreError(T, "Unterminated ` in path: " + t);
    return new _FieldPath$1(e);
  }
  static emptyPath() {
    return new _FieldPath$1([]);
  }
};
var DocumentKey = class _DocumentKey {
  constructor(t) {
    this.path = t;
  }
  static fromPath(t) {
    return new _DocumentKey(ResourcePath.fromString(t));
  }
  static fromName(t) {
    return new _DocumentKey(ResourcePath.fromString(t).popFirst(5));
  }
  static empty() {
    return new _DocumentKey(ResourcePath.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  /** Returns true if the document is in the specified collectionId. */
  hasCollectionId(t) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
  }
  /** Returns the collection group (i.e. the name of the parent collection) for this key. */
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  /** Returns the fully qualified path to the parent collection. */
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(t) {
    return null !== t && 0 === ResourcePath.comparator(this.path, t.path);
  }
  toString() {
    return this.path.toString();
  }
  static comparator(t, e) {
    return ResourcePath.comparator(t.path, e.path);
  }
  static isDocumentKey(t) {
    return t.length % 2 == 0;
  }
  /**
   * Creates and returns a new document key with the given segments.
   *
   * @param segments - The segments of the path to the document
   * @returns A new instance of DocumentKey
   */
  static fromSegments(t) {
    return new _DocumentKey(new ResourcePath(t.slice()));
  }
};
function __PRIVATE_validateNonEmptyArgument(t, e, r) {
  if (!r) throw new FirestoreError(T, `Function ${t}() cannot be called with an empty ${e}.`);
}
function __PRIVATE_validateDocumentPath(t) {
  if (!DocumentKey.isDocumentKey(t)) throw new FirestoreError(T, `Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`);
}
function __PRIVATE_validateCollectionPath(t) {
  if (DocumentKey.isDocumentKey(t)) throw new FirestoreError(T, `Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`);
}
function __PRIVATE_valueDescription(t) {
  if (void 0 === t) return "undefined";
  if (null === t) return "null";
  if ("string" == typeof t) return t.length > 20 && (t = `${t.substring(0, 20)}...`), JSON.stringify(t);
  if ("number" == typeof t || "boolean" == typeof t) return "" + t;
  if ("object" == typeof t) {
    if (t instanceof Array) return "an array";
    {
      const e = (
        /** try to get the constructor name for an object. */
        function __PRIVATE_tryGetCustomObjectType(t2) {
          if (t2.constructor) return t2.constructor.name;
          return null;
        }(t)
      );
      return e ? `a custom ${e} object` : "an object";
    }
  }
  return "function" == typeof t ? "a function" : fail();
}
function __PRIVATE_cast(t, e) {
  if ("_delegate" in t && // Unwrap Compat types
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (t = t._delegate), !(t instanceof e)) {
    if (e.name === t.constructor.name) throw new FirestoreError(T, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
    {
      const r = __PRIVATE_valueDescription(t);
      throw new FirestoreError(T, `Expected type '${e.name}', but it was: ${r}`);
    }
  }
  return t;
}
function __PRIVATE_validatePositiveNumber(t, e) {
  if (e <= 0) throw new FirestoreError(T, `Function ${t}() requires a positive number, but it was: ${e}.`);
}
function __PRIVATE_cloneLongPollingOptions(t) {
  const e = {};
  return void 0 !== t.timeoutSeconds && (e.timeoutSeconds = t.timeoutSeconds), e;
}
var N = null;
function __PRIVATE_generateUniqueDebugId() {
  return null === N ? N = function __PRIVATE_generateInitialUniqueDebugId() {
    return 268435456 + Math.round(2147483648 * Math.random());
  }() : N++, "0x" + N.toString(16);
}
function __PRIVATE_isNullOrUndefined(t) {
  return null == t;
}
function __PRIVATE_isNegativeZero(t) {
  return 0 === t && 1 / t == -1 / 0;
}
var O = {
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery",
  RunAggregationQuery: "runAggregationQuery"
};
var q;
var B;
function __PRIVATE_mapCodeFromHttpStatus(t) {
  if (void 0 === t) return __PRIVATE_logError("RPC_ERROR", "HTTP error has no status"), A;
  switch (t) {
    case 200:
      return E;
    case 400:
      return w;
    case 401:
      return p;
    case 403:
      return I;
    case 404:
      return P;
    case 409:
      return g;
    case 416:
      return F;
    case 429:
      return y;
    case 499:
      return m;
    case 500:
      return A;
    case 501:
      return v;
    case 503:
      return b;
    case 504:
      return R;
    default:
      return t >= 200 && t < 300 ? E : t >= 400 && t < 500 ? w : t >= 500 && t < 600 ? D : A;
  }
}
(B = q || (q = {}))[B.OK = 0] = "OK", B[B.CANCELLED = 1] = "CANCELLED", B[B.UNKNOWN = 2] = "UNKNOWN", B[B.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", B[B.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", B[B.NOT_FOUND = 5] = "NOT_FOUND", B[B.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", B[B.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", B[B.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", B[B.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", B[B.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", B[B.ABORTED = 10] = "ABORTED", B[B.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", B[B.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", B[B.INTERNAL = 13] = "INTERNAL", B[B.UNAVAILABLE = 14] = "UNAVAILABLE", B[B.DATA_LOSS = 15] = "DATA_LOSS";
var __PRIVATE_FetchConnection = class extends /**
 * Base class for all Rest-based connections to the backend (WebChannel and
 * HTTP).
 */
class __PRIVATE_RestConnection {
  constructor(t) {
    this.databaseInfo = t, this.databaseId = t.databaseId;
    const e = t.ssl ? "https" : "http", r = encodeURIComponent(this.databaseId.projectId), n = encodeURIComponent(this.databaseId.database);
    this.m = e + "://" + t.host, this.A = `projects/${r}/databases/${n}`, this.T = "(default)" === this.databaseId.database ? `project_id=${r}` : `project_id=${r}&database_id=${n}`;
  }
  get R() {
    return false;
  }
  P(t, e, r, n, i) {
    const s = __PRIVATE_generateUniqueDebugId(), o = this.V(t, e.toUriEncodedString());
    __PRIVATE_logDebug("RestConnection", `Sending RPC '${t}' ${s}:`, o, r);
    const a = {
      "google-cloud-resource-prefix": this.A,
      "x-goog-request-params": this.T
    };
    return this.I(a, n, i), this.p(t, o, a, r).then((e2) => (__PRIVATE_logDebug("RestConnection", `Received RPC '${t}' ${s}: `, e2), e2), (e2) => {
      throw __PRIVATE_logWarn("RestConnection", `RPC '${t}' ${s} failed with error: `, e2, "url: ", o, "request:", r), e2;
    });
  }
  g(t, e, r, n, i, s) {
    return this.P(t, e, r, n, i);
  }
  /**
   * Modifies the headers for a request, adding any authorization token if
   * present and any additional headers for the request.
   */
  I(t, e, r) {
    t["X-Goog-Api-Client"] = // SDK_VERSION is updated to different value at runtime depending on the entry point,
    // so we need to get its value when we need it in a function.
    function __PRIVATE_getGoogApiClientValue() {
      return "gl-js/ fire/" + d;
    }(), // Content-Type: text/plain will avoid preflight requests which might
    // mess with CORS and redirects by proxies. If we add custom headers
    // we will need to change this code to potentially use the $httpOverwrite
    // parameter supported by ESF to avoid triggering preflight requests.
    t["Content-Type"] = "text/plain", this.databaseInfo.appId && (t["X-Firebase-GMPID"] = this.databaseInfo.appId), e && e.headers.forEach((e2, r2) => t[r2] = e2), r && r.headers.forEach((e2, r2) => t[r2] = e2);
  }
  V(t, e) {
    const r = O[t];
    return `${this.m}/v1/${e}:${r}`;
  }
  /**
   * Closes and cleans up any resources associated with the connection. This
   * implementation is a no-op because there are no resources associated
   * with the RestConnection that need to be cleaned up.
   */
  terminate() {
  }
} {
  /**
   * @param databaseInfo - The connection info.
   * @param fetchImpl - `fetch` or a Polyfill that implements the fetch API.
   */
  constructor(t, e) {
    super(t), this.F = e;
  }
  v(t, e) {
    throw new Error("Not supported by FetchConnection");
  }
  async p(t, e, r, n) {
    var i;
    const s = JSON.stringify(n);
    let o;
    try {
      o = await this.F(e, {
        method: "POST",
        headers: r,
        body: s
      });
    } catch (t2) {
      const e2 = t2;
      throw new FirestoreError(__PRIVATE_mapCodeFromHttpStatus(e2.status), "Request failed with error: " + e2.statusText);
    }
    if (!o.ok) {
      let t2 = await o.json();
      Array.isArray(t2) && (t2 = t2[0]);
      const e2 = null === (i = null == t2 ? void 0 : t2.error) || void 0 === i ? void 0 : i.message;
      throw new FirestoreError(__PRIVATE_mapCodeFromHttpStatus(o.status), `Request failed with error: ${null != e2 ? e2 : o.statusText}`);
    }
    return o.json();
  }
};
var __PRIVATE_AggregateImpl = class {
  constructor(t, e, r) {
    this.alias = t, this.aggregateType = e, this.fieldPath = r;
  }
};
function __PRIVATE_randomBytes(t) {
  const e = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "undefined" != typeof self && (self.crypto || self.msCrypto)
  ), r = new Uint8Array(t);
  if (e && "function" == typeof e.getRandomValues) e.getRandomValues(r);
  else
    for (let e2 = 0; e2 < t; e2++) r[e2] = Math.floor(256 * Math.random());
  return r;
}
var __PRIVATE_AutoId = class {
  static newId() {
    const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length;
    let r = "";
    for (; r.length < 20; ) {
      const n = __PRIVATE_randomBytes(40);
      for (let i = 0; i < n.length; ++i)
        r.length < 20 && n[i] < e && (r += t.charAt(n[i] % t.length));
    }
    return r;
  }
};
function __PRIVATE_primitiveComparator(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function __PRIVATE_arrayEquals(t, e, r) {
  return t.length === e.length && t.every((t2, n) => r(t2, e[n]));
}
function __PRIVATE_objectSize(t) {
  let e = 0;
  for (const r in t) Object.prototype.hasOwnProperty.call(t, r) && e++;
  return e;
}
function forEach(t, e) {
  for (const r in t) Object.prototype.hasOwnProperty.call(t, r) && e(r, t[r]);
}
var __PRIVATE_Base64DecodeError = class extends Error {
  constructor() {
    super(...arguments), this.name = "Base64DecodeError";
  }
};
var ByteString = class _ByteString {
  constructor(t) {
    this.binaryString = t;
  }
  static fromBase64String(t) {
    const e = function __PRIVATE_decodeBase64(t2) {
      try {
        return atob(t2);
      } catch (t3) {
        throw "undefined" != typeof DOMException && t3 instanceof DOMException ? new __PRIVATE_Base64DecodeError("Invalid base64 string: " + t3) : t3;
      }
    }(t);
    return new _ByteString(e);
  }
  static fromUint8Array(t) {
    const e = (
      /**
      * Helper function to convert an Uint8array to a binary string.
      */
      function __PRIVATE_binaryStringFromUint8Array(t2) {
        let e2 = "";
        for (let r = 0; r < t2.length; ++r) e2 += String.fromCharCode(t2[r]);
        return e2;
      }(t)
    );
    return new _ByteString(e);
  }
  [Symbol.iterator]() {
    let t = 0;
    return {
      next: () => t < this.binaryString.length ? {
        value: this.binaryString.charCodeAt(t++),
        done: false
      } : {
        value: void 0,
        done: true
      }
    };
  }
  toBase64() {
    return function __PRIVATE_encodeBase64(t) {
      return btoa(t);
    }(this.binaryString);
  }
  toUint8Array() {
    return function __PRIVATE_uint8ArrayFromBinaryString(t) {
      const e = new Uint8Array(t.length);
      for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
      return e;
    }(this.binaryString);
  }
  approximateByteSize() {
    return 2 * this.binaryString.length;
  }
  compareTo(t) {
    return __PRIVATE_primitiveComparator(this.binaryString, t.binaryString);
  }
  isEqual(t) {
    return this.binaryString === t.binaryString;
  }
};
ByteString.EMPTY_BYTE_STRING = new ByteString("");
var $ = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function __PRIVATE_normalizeTimestamp(t) {
  if (__PRIVATE_hardAssert(!!t), "string" == typeof t) {
    let e = 0;
    const r = $.exec(t);
    if (__PRIVATE_hardAssert(!!r), r[1]) {
      let t2 = r[1];
      t2 = (t2 + "000000000").substr(0, 9), e = Number(t2);
    }
    const n = new Date(t);
    return {
      seconds: Math.floor(n.getTime() / 1e3),
      nanos: e
    };
  }
  return {
    seconds: __PRIVATE_normalizeNumber(t.seconds),
    nanos: __PRIVATE_normalizeNumber(t.nanos)
  };
}
function __PRIVATE_normalizeNumber(t) {
  return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
}
function __PRIVATE_normalizeByteString(t) {
  return "string" == typeof t ? ByteString.fromBase64String(t) : ByteString.fromUint8Array(t);
}
var Timestamp = class _Timestamp {
  /**
   * Creates a new timestamp.
   *
   * @param seconds - The number of seconds of UTC time since Unix epoch
   *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
   *     9999-12-31T23:59:59Z inclusive.
   * @param nanoseconds - The non-negative fractions of a second at nanosecond
   *     resolution. Negative second values with fractions must still have
   *     non-negative nanoseconds values that count forward in time. Must be
   *     from 0 to 999,999,999 inclusive.
   */
  constructor(t, e) {
    if (this.seconds = t, this.nanoseconds = e, e < 0) throw new FirestoreError(T, "Timestamp nanoseconds out of range: " + e);
    if (e >= 1e9) throw new FirestoreError(T, "Timestamp nanoseconds out of range: " + e);
    if (t < -62135596800) throw new FirestoreError(T, "Timestamp seconds out of range: " + t);
    if (t >= 253402300800) throw new FirestoreError(T, "Timestamp seconds out of range: " + t);
  }
  /**
   * Creates a new timestamp with the current date, with millisecond precision.
   *
   * @returns a new timestamp representing the current date.
   */
  static now() {
    return _Timestamp.fromMillis(Date.now());
  }
  /**
   * Creates a new timestamp from the given date.
   *
   * @param date - The date to initialize the `Timestamp` from.
   * @returns A new `Timestamp` representing the same point in time as the given
   *     date.
   */
  static fromDate(t) {
    return _Timestamp.fromMillis(t.getTime());
  }
  /**
   * Creates a new timestamp from the given number of milliseconds.
   *
   * @param milliseconds - Number of milliseconds since Unix epoch
   *     1970-01-01T00:00:00Z.
   * @returns A new `Timestamp` representing the same point in time as the given
   *     number of milliseconds.
   */
  static fromMillis(t) {
    const e = Math.floor(t / 1e3), r = Math.floor(1e6 * (t - 1e3 * e));
    return new _Timestamp(e, r);
  }
  /**
   * Converts a `Timestamp` to a JavaScript `Date` object. This conversion
   * causes a loss of precision since `Date` objects only support millisecond
   * precision.
   *
   * @returns JavaScript `Date` object representing the same point in time as
   *     this `Timestamp`, with millisecond precision.
   */
  toDate() {
    return new Date(this.toMillis());
  }
  /**
   * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
   * epoch). This operation causes a loss of precision.
   *
   * @returns The point in time corresponding to this timestamp, represented as
   *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
   */
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }
  _compareTo(t) {
    return this.seconds === t.seconds ? __PRIVATE_primitiveComparator(this.nanoseconds, t.nanoseconds) : __PRIVATE_primitiveComparator(this.seconds, t.seconds);
  }
  /**
   * Returns true if this `Timestamp` is equal to the provided one.
   *
   * @param other - The `Timestamp` to compare against.
   * @returns true if this `Timestamp` is equal to the provided one.
   */
  isEqual(t) {
    return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
  }
  /** Returns a textual representation of this `Timestamp`. */
  toString() {
    return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
  }
  /** Returns a JSON-serializable representation of this `Timestamp`. */
  toJSON() {
    return {
      seconds: this.seconds,
      nanoseconds: this.nanoseconds
    };
  }
  /**
   * Converts this object to a primitive string, which allows `Timestamp` objects
   * to be compared using the `>`, `<=`, `>=` and `>` operators.
   */
  valueOf() {
    const t = this.seconds - -62135596800;
    return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
  }
};
function __PRIVATE_isServerTimestamp(t) {
  var e, r;
  return "server_timestamp" === (null === (r = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === r ? void 0 : r.stringValue);
}
function __PRIVATE_getPreviousValue(t) {
  const e = t.mapValue.fields.__previous_value__;
  return __PRIVATE_isServerTimestamp(e) ? __PRIVATE_getPreviousValue(e) : e;
}
function __PRIVATE_getLocalWriteTime(t) {
  const e = __PRIVATE_normalizeTimestamp(t.mapValue.fields.__local_write_time__.timestampValue);
  return new Timestamp(e.seconds, e.nanos);
}
var Q = {
  fields: {
    __type__: {
      stringValue: "__max__"
    }
  }
};
function __PRIVATE_typeOrder(t) {
  return "nullValue" in t ? 0 : "booleanValue" in t ? 1 : "integerValue" in t || "doubleValue" in t ? 2 : "timestampValue" in t ? 3 : "stringValue" in t ? 5 : "bytesValue" in t ? 6 : "referenceValue" in t ? 7 : "geoPointValue" in t ? 8 : "arrayValue" in t ? 9 : "mapValue" in t ? __PRIVATE_isServerTimestamp(t) ? 4 : (
    /** Returns true if the Value represents the canonical {@link #MAX_VALUE} . */
    function __PRIVATE_isMaxValue(t2) {
      return "__max__" === (((t2.mapValue || {}).fields || {}).__type__ || {}).stringValue;
    }(t) ? 9007199254740991 : (
      /** Returns true if `value` is a VetorValue. */
      function __PRIVATE_isVectorValue(t2) {
        var e, r;
        return "__vector__" === (null === (r = ((null === (e = null == t2 ? void 0 : t2.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === r ? void 0 : r.stringValue);
      }(t) ? 10 : 11
    )
  ) : fail();
}
function __PRIVATE_valueEquals(t, e) {
  if (t === e) return true;
  const r = __PRIVATE_typeOrder(t);
  if (r !== __PRIVATE_typeOrder(e)) return false;
  switch (r) {
    case 0:
    case 9007199254740991:
      return true;
    case 1:
      return t.booleanValue === e.booleanValue;
    case 4:
      return __PRIVATE_getLocalWriteTime(t).isEqual(__PRIVATE_getLocalWriteTime(e));
    case 3:
      return function __PRIVATE_timestampEquals(t2, e2) {
        if ("string" == typeof t2.timestampValue && "string" == typeof e2.timestampValue && t2.timestampValue.length === e2.timestampValue.length)
          return t2.timestampValue === e2.timestampValue;
        const r2 = __PRIVATE_normalizeTimestamp(t2.timestampValue), n = __PRIVATE_normalizeTimestamp(e2.timestampValue);
        return r2.seconds === n.seconds && r2.nanos === n.nanos;
      }(t, e);
    case 5:
      return t.stringValue === e.stringValue;
    case 6:
      return function __PRIVATE_blobEquals(t2, e2) {
        return __PRIVATE_normalizeByteString(t2.bytesValue).isEqual(__PRIVATE_normalizeByteString(e2.bytesValue));
      }(t, e);
    case 7:
      return t.referenceValue === e.referenceValue;
    case 8:
      return function __PRIVATE_geoPointEquals(t2, e2) {
        return __PRIVATE_normalizeNumber(t2.geoPointValue.latitude) === __PRIVATE_normalizeNumber(e2.geoPointValue.latitude) && __PRIVATE_normalizeNumber(t2.geoPointValue.longitude) === __PRIVATE_normalizeNumber(e2.geoPointValue.longitude);
      }(t, e);
    case 2:
      return function __PRIVATE_numberEquals(t2, e2) {
        if ("integerValue" in t2 && "integerValue" in e2) return __PRIVATE_normalizeNumber(t2.integerValue) === __PRIVATE_normalizeNumber(e2.integerValue);
        if ("doubleValue" in t2 && "doubleValue" in e2) {
          const r2 = __PRIVATE_normalizeNumber(t2.doubleValue), n = __PRIVATE_normalizeNumber(e2.doubleValue);
          return r2 === n ? __PRIVATE_isNegativeZero(r2) === __PRIVATE_isNegativeZero(n) : isNaN(r2) && isNaN(n);
        }
        return false;
      }(t, e);
    case 9:
      return __PRIVATE_arrayEquals(t.arrayValue.values || [], e.arrayValue.values || [], __PRIVATE_valueEquals);
    case 10:
    case 11:
      return function __PRIVATE_objectEquals(t2, e2) {
        const r2 = t2.mapValue.fields || {}, n = e2.mapValue.fields || {};
        if (__PRIVATE_objectSize(r2) !== __PRIVATE_objectSize(n)) return false;
        for (const t3 in r2) if (r2.hasOwnProperty(t3) && (void 0 === n[t3] || !__PRIVATE_valueEquals(r2[t3], n[t3]))) return false;
        return true;
      }(t, e);
    default:
      return fail();
  }
}
function __PRIVATE_arrayValueContains(t, e) {
  return void 0 !== (t.values || []).find((t2) => __PRIVATE_valueEquals(t2, e));
}
function __PRIVATE_valueCompare(t, e) {
  if (t === e) return 0;
  const r = __PRIVATE_typeOrder(t), n = __PRIVATE_typeOrder(e);
  if (r !== n) return __PRIVATE_primitiveComparator(r, n);
  switch (r) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return __PRIVATE_primitiveComparator(t.booleanValue, e.booleanValue);
    case 2:
      return function __PRIVATE_compareNumbers(t2, e2) {
        const r2 = __PRIVATE_normalizeNumber(t2.integerValue || t2.doubleValue), n2 = __PRIVATE_normalizeNumber(e2.integerValue || e2.doubleValue);
        return r2 < n2 ? -1 : r2 > n2 ? 1 : r2 === n2 ? 0 : (
          // one or both are NaN.
          isNaN(r2) ? isNaN(n2) ? 0 : -1 : 1
        );
      }(t, e);
    case 3:
      return __PRIVATE_compareTimestamps(t.timestampValue, e.timestampValue);
    case 4:
      return __PRIVATE_compareTimestamps(__PRIVATE_getLocalWriteTime(t), __PRIVATE_getLocalWriteTime(e));
    case 5:
      return __PRIVATE_primitiveComparator(t.stringValue, e.stringValue);
    case 6:
      return function __PRIVATE_compareBlobs(t2, e2) {
        const r2 = __PRIVATE_normalizeByteString(t2), n2 = __PRIVATE_normalizeByteString(e2);
        return r2.compareTo(n2);
      }(t.bytesValue, e.bytesValue);
    case 7:
      return function __PRIVATE_compareReferences(t2, e2) {
        const r2 = t2.split("/"), n2 = e2.split("/");
        for (let t3 = 0; t3 < r2.length && t3 < n2.length; t3++) {
          const e3 = __PRIVATE_primitiveComparator(r2[t3], n2[t3]);
          if (0 !== e3) return e3;
        }
        return __PRIVATE_primitiveComparator(r2.length, n2.length);
      }(t.referenceValue, e.referenceValue);
    case 8:
      return function __PRIVATE_compareGeoPoints(t2, e2) {
        const r2 = __PRIVATE_primitiveComparator(__PRIVATE_normalizeNumber(t2.latitude), __PRIVATE_normalizeNumber(e2.latitude));
        if (0 !== r2) return r2;
        return __PRIVATE_primitiveComparator(__PRIVATE_normalizeNumber(t2.longitude), __PRIVATE_normalizeNumber(e2.longitude));
      }(t.geoPointValue, e.geoPointValue);
    case 9:
      return __PRIVATE_compareArrays(t.arrayValue, e.arrayValue);
    case 10:
      return function __PRIVATE_compareVectors(t2, e2) {
        var r2, n2, i, s;
        const o = t2.fields || {}, a = e2.fields || {}, u = null === (r2 = o.value) || void 0 === r2 ? void 0 : r2.arrayValue, _ = null === (n2 = a.value) || void 0 === n2 ? void 0 : n2.arrayValue, c = __PRIVATE_primitiveComparator((null === (i = null == u ? void 0 : u.values) || void 0 === i ? void 0 : i.length) || 0, (null === (s = null == _ ? void 0 : _.values) || void 0 === s ? void 0 : s.length) || 0);
        if (0 !== c) return c;
        return __PRIVATE_compareArrays(u, _);
      }(t.mapValue, e.mapValue);
    case 11:
      return function __PRIVATE_compareMaps(t2, e2) {
        if (t2 === Q && e2 === Q) return 0;
        if (t2 === Q) return 1;
        if (e2 === Q) return -1;
        const r2 = t2.fields || {}, n2 = Object.keys(r2), i = e2.fields || {}, s = Object.keys(i);
        n2.sort(), s.sort();
        for (let t3 = 0; t3 < n2.length && t3 < s.length; ++t3) {
          const e3 = __PRIVATE_primitiveComparator(n2[t3], s[t3]);
          if (0 !== e3) return e3;
          const o = __PRIVATE_valueCompare(r2[n2[t3]], i[s[t3]]);
          if (0 !== o) return o;
        }
        return __PRIVATE_primitiveComparator(n2.length, s.length);
      }(t.mapValue, e.mapValue);
    default:
      throw fail();
  }
}
function __PRIVATE_compareTimestamps(t, e) {
  if ("string" == typeof t && "string" == typeof e && t.length === e.length) return __PRIVATE_primitiveComparator(t, e);
  const r = __PRIVATE_normalizeTimestamp(t), n = __PRIVATE_normalizeTimestamp(e), i = __PRIVATE_primitiveComparator(r.seconds, n.seconds);
  return 0 !== i ? i : __PRIVATE_primitiveComparator(r.nanos, n.nanos);
}
function __PRIVATE_compareArrays(t, e) {
  const r = t.values || [], n = e.values || [];
  for (let t2 = 0; t2 < r.length && t2 < n.length; ++t2) {
    const e2 = __PRIVATE_valueCompare(r[t2], n[t2]);
    if (e2) return e2;
  }
  return __PRIVATE_primitiveComparator(r.length, n.length);
}
function __PRIVATE_refValue(t, e) {
  return {
    referenceValue: `projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`
  };
}
function isArray(t) {
  return !!t && "arrayValue" in t;
}
function __PRIVATE_isNullValue(t) {
  return !!t && "nullValue" in t;
}
function __PRIVATE_isNanValue(t) {
  return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}
function __PRIVATE_isMapValue(t) {
  return !!t && "mapValue" in t;
}
function __PRIVATE_deepClone(t) {
  if (t.geoPointValue) return {
    geoPointValue: Object.assign({}, t.geoPointValue)
  };
  if (t.timestampValue && "object" == typeof t.timestampValue) return {
    timestampValue: Object.assign({}, t.timestampValue)
  };
  if (t.mapValue) {
    const e = {
      mapValue: {
        fields: {}
      }
    };
    return forEach(t.mapValue.fields, (t2, r) => e.mapValue.fields[t2] = __PRIVATE_deepClone(r)), e;
  }
  if (t.arrayValue) {
    const e = {
      arrayValue: {
        values: []
      }
    };
    for (let r = 0; r < (t.arrayValue.values || []).length; ++r) e.arrayValue.values[r] = __PRIVATE_deepClone(t.arrayValue.values[r]);
    return e;
  }
  return Object.assign({}, t);
}
var Bound = class {
  constructor(t, e) {
    this.position = t, this.inclusive = e;
  }
};
function __PRIVATE_boundEquals(t, e) {
  if (null === t) return null === e;
  if (null === e) return false;
  if (t.inclusive !== e.inclusive || t.position.length !== e.position.length) return false;
  for (let r = 0; r < t.position.length; r++) {
    if (!__PRIVATE_valueEquals(t.position[r], e.position[r])) return false;
  }
  return true;
}
var Filter = class {
};
var FieldFilter = class _FieldFilter extends Filter {
  constructor(t, e, r) {
    super(), this.field = t, this.op = e, this.value = r;
  }
  /**
   * Creates a filter based on the provided arguments.
   */
  static create(t, e, r) {
    return t.isKeyField() ? "in" === e || "not-in" === e ? this.createKeyFieldInFilter(t, e, r) : new __PRIVATE_KeyFieldFilter(t, e, r) : "array-contains" === e ? new __PRIVATE_ArrayContainsFilter(t, r) : "in" === e ? new __PRIVATE_InFilter(t, r) : "not-in" === e ? new __PRIVATE_NotInFilter(t, r) : "array-contains-any" === e ? new __PRIVATE_ArrayContainsAnyFilter(t, r) : new _FieldFilter(t, e, r);
  }
  static createKeyFieldInFilter(t, e, r) {
    return "in" === e ? new __PRIVATE_KeyFieldInFilter(t, r) : new __PRIVATE_KeyFieldNotInFilter(t, r);
  }
  matches(t) {
    const e = t.data.field(this.field);
    return "!=" === this.op ? null !== e && this.matchesComparison(__PRIVATE_valueCompare(e, this.value)) : null !== e && __PRIVATE_typeOrder(this.value) === __PRIVATE_typeOrder(e) && this.matchesComparison(__PRIVATE_valueCompare(e, this.value));
  }
  matchesComparison(t) {
    switch (this.op) {
      case "<":
        return t < 0;
      case "<=":
        return t <= 0;
      case "==":
        return 0 === t;
      case "!=":
        return 0 !== t;
      case ">":
        return t > 0;
      case ">=":
        return t >= 0;
      default:
        return fail();
    }
  }
  isInequality() {
    return [
      "<",
      "<=",
      ">",
      ">=",
      "!=",
      "not-in"
      /* Operator.NOT_IN */
    ].indexOf(this.op) >= 0;
  }
  getFlattenedFilters() {
    return [this];
  }
  getFilters() {
    return [this];
  }
};
var CompositeFilter = class _CompositeFilter extends Filter {
  constructor(t, e) {
    super(), this.filters = t, this.op = e, this.D = null;
  }
  /**
   * Creates a filter based on the provided arguments.
   */
  static create(t, e) {
    return new _CompositeFilter(t, e);
  }
  matches(t) {
    return function __PRIVATE_compositeFilterIsConjunction(t2) {
      return "and" === t2.op;
    }(this) ? void 0 === this.filters.find((e) => !e.matches(t)) : void 0 !== this.filters.find((e) => e.matches(t));
  }
  getFlattenedFilters() {
    return null !== this.D || (this.D = this.filters.reduce((t, e) => t.concat(e.getFlattenedFilters()), [])), this.D;
  }
  // Returns a mutable copy of `this.filters`
  getFilters() {
    return Object.assign([], this.filters);
  }
};
function __PRIVATE_filterEquals(t, e) {
  return t instanceof FieldFilter ? function __PRIVATE_fieldFilterEquals(t2, e2) {
    return e2 instanceof FieldFilter && t2.op === e2.op && t2.field.isEqual(e2.field) && __PRIVATE_valueEquals(t2.value, e2.value);
  }(t, e) : t instanceof CompositeFilter ? function __PRIVATE_compositeFilterEquals(t2, e2) {
    if (e2 instanceof CompositeFilter && t2.op === e2.op && t2.filters.length === e2.filters.length) {
      return t2.filters.reduce((t3, r, n) => t3 && __PRIVATE_filterEquals(r, e2.filters[n]), true);
    }
    return false;
  }(t, e) : void fail();
}
var __PRIVATE_KeyFieldFilter = class extends FieldFilter {
  constructor(t, e, r) {
    super(t, e, r), this.key = DocumentKey.fromName(r.referenceValue);
  }
  matches(t) {
    const e = DocumentKey.comparator(t.key, this.key);
    return this.matchesComparison(e);
  }
};
var __PRIVATE_KeyFieldInFilter = class extends FieldFilter {
  constructor(t, e) {
    super(t, "in", e), this.keys = __PRIVATE_extractDocumentKeysFromArrayValue("in", e);
  }
  matches(t) {
    return this.keys.some((e) => e.isEqual(t.key));
  }
};
var __PRIVATE_KeyFieldNotInFilter = class extends FieldFilter {
  constructor(t, e) {
    super(t, "not-in", e), this.keys = __PRIVATE_extractDocumentKeysFromArrayValue("not-in", e);
  }
  matches(t) {
    return !this.keys.some((e) => e.isEqual(t.key));
  }
};
function __PRIVATE_extractDocumentKeysFromArrayValue(t, e) {
  var r;
  return ((null === (r = e.arrayValue) || void 0 === r ? void 0 : r.values) || []).map((t2) => DocumentKey.fromName(t2.referenceValue));
}
var __PRIVATE_ArrayContainsFilter = class extends FieldFilter {
  constructor(t, e) {
    super(t, "array-contains", e);
  }
  matches(t) {
    const e = t.data.field(this.field);
    return isArray(e) && __PRIVATE_arrayValueContains(e.arrayValue, this.value);
  }
};
var __PRIVATE_InFilter = class extends FieldFilter {
  constructor(t, e) {
    super(t, "in", e);
  }
  matches(t) {
    const e = t.data.field(this.field);
    return null !== e && __PRIVATE_arrayValueContains(this.value.arrayValue, e);
  }
};
var __PRIVATE_NotInFilter = class extends FieldFilter {
  constructor(t, e) {
    super(t, "not-in", e);
  }
  matches(t) {
    if (__PRIVATE_arrayValueContains(this.value.arrayValue, {
      nullValue: "NULL_VALUE"
    })) return false;
    const e = t.data.field(this.field);
    return null !== e && !__PRIVATE_arrayValueContains(this.value.arrayValue, e);
  }
};
var __PRIVATE_ArrayContainsAnyFilter = class extends FieldFilter {
  constructor(t, e) {
    super(t, "array-contains-any", e);
  }
  matches(t) {
    const e = t.data.field(this.field);
    return !(!isArray(e) || !e.arrayValue.values) && e.arrayValue.values.some((t2) => __PRIVATE_arrayValueContains(this.value.arrayValue, t2));
  }
};
var OrderBy = class {
  constructor(t, e = "asc") {
    this.field = t, this.dir = e;
  }
};
function __PRIVATE_orderByEquals(t, e) {
  return t.dir === e.dir && t.field.isEqual(e.field);
}
var SnapshotVersion = class _SnapshotVersion {
  constructor(t) {
    this.timestamp = t;
  }
  static fromTimestamp(t) {
    return new _SnapshotVersion(t);
  }
  static min() {
    return new _SnapshotVersion(new Timestamp(0, 0));
  }
  static max() {
    return new _SnapshotVersion(new Timestamp(253402300799, 999999999));
  }
  compareTo(t) {
    return this.timestamp._compareTo(t.timestamp);
  }
  isEqual(t) {
    return this.timestamp.isEqual(t.timestamp);
  }
  /** Returns a number representation of the version for use in spec tests. */
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }
  toString() {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }
  toTimestamp() {
    return this.timestamp;
  }
};
var SortedMap = class _SortedMap {
  constructor(t, e) {
    this.comparator = t, this.root = e || LLRBNode.EMPTY;
  }
  // Returns a copy of the map, with the specified key/value added or replaced.
  insert(t, e) {
    return new _SortedMap(this.comparator, this.root.insert(t, e, this.comparator).copy(null, null, LLRBNode.BLACK, null, null));
  }
  // Returns a copy of the map, with the specified key removed.
  remove(t) {
    return new _SortedMap(this.comparator, this.root.remove(t, this.comparator).copy(null, null, LLRBNode.BLACK, null, null));
  }
  // Returns the value of the node with the given key, or null.
  get(t) {
    let e = this.root;
    for (; !e.isEmpty(); ) {
      const r = this.comparator(t, e.key);
      if (0 === r) return e.value;
      r < 0 ? e = e.left : r > 0 && (e = e.right);
    }
    return null;
  }
  // Returns the index of the element in this sorted map, or -1 if it doesn't
  // exist.
  indexOf(t) {
    let e = 0, r = this.root;
    for (; !r.isEmpty(); ) {
      const n = this.comparator(t, r.key);
      if (0 === n) return e + r.left.size;
      n < 0 ? r = r.left : (
        // Count all nodes left of the node plus the node itself
        (e += r.left.size + 1, r = r.right)
      );
    }
    return -1;
  }
  isEmpty() {
    return this.root.isEmpty();
  }
  // Returns the total number of nodes in the map.
  get size() {
    return this.root.size;
  }
  // Returns the minimum key in the map.
  minKey() {
    return this.root.minKey();
  }
  // Returns the maximum key in the map.
  maxKey() {
    return this.root.maxKey();
  }
  // Traverses the map in key order and calls the specified action function
  // for each key/value pair. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  inorderTraversal(t) {
    return this.root.inorderTraversal(t);
  }
  forEach(t) {
    this.inorderTraversal((e, r) => (t(e, r), false));
  }
  toString() {
    const t = [];
    return this.inorderTraversal((e, r) => (t.push(`${e}:${r}`), false)), `{${t.join(", ")}}`;
  }
  // Traverses the map in reverse key order and calls the specified action
  // function for each key/value pair. If action returns true, traversal is
  // aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  reverseTraversal(t) {
    return this.root.reverseTraversal(t);
  }
  // Returns an iterator over the SortedMap.
  getIterator() {
    return new SortedMapIterator(this.root, null, this.comparator, false);
  }
  getIteratorFrom(t) {
    return new SortedMapIterator(this.root, t, this.comparator, false);
  }
  getReverseIterator() {
    return new SortedMapIterator(this.root, null, this.comparator, true);
  }
  getReverseIteratorFrom(t) {
    return new SortedMapIterator(this.root, t, this.comparator, true);
  }
};
var SortedMapIterator = class {
  constructor(t, e, r, n) {
    this.isReverse = n, this.nodeStack = [];
    let i = 1;
    for (; !t.isEmpty(); ) if (i = e ? r(t.key, e) : 1, // flip the comparison if we're going in reverse
    e && n && (i *= -1), i < 0)
      t = this.isReverse ? t.left : t.right;
    else {
      if (0 === i) {
        this.nodeStack.push(t);
        break;
      }
      this.nodeStack.push(t), t = this.isReverse ? t.right : t.left;
    }
  }
  getNext() {
    let t = this.nodeStack.pop();
    const e = {
      key: t.key,
      value: t.value
    };
    if (this.isReverse) for (t = t.left; !t.isEmpty(); ) this.nodeStack.push(t), t = t.right;
    else for (t = t.right; !t.isEmpty(); ) this.nodeStack.push(t), t = t.left;
    return e;
  }
  hasNext() {
    return this.nodeStack.length > 0;
  }
  peek() {
    if (0 === this.nodeStack.length) return null;
    const t = this.nodeStack[this.nodeStack.length - 1];
    return {
      key: t.key,
      value: t.value
    };
  }
};
var LLRBNode = class _LLRBNode {
  constructor(t, e, r, n, i) {
    this.key = t, this.value = e, this.color = null != r ? r : _LLRBNode.RED, this.left = null != n ? n : _LLRBNode.EMPTY, this.right = null != i ? i : _LLRBNode.EMPTY, this.size = this.left.size + 1 + this.right.size;
  }
  // Returns a copy of the current node, optionally replacing pieces of it.
  copy(t, e, r, n, i) {
    return new _LLRBNode(null != t ? t : this.key, null != e ? e : this.value, null != r ? r : this.color, null != n ? n : this.left, null != i ? i : this.right);
  }
  isEmpty() {
    return false;
  }
  // Traverses the tree in key order and calls the specified action function
  // for each node. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  inorderTraversal(t) {
    return this.left.inorderTraversal(t) || t(this.key, this.value) || this.right.inorderTraversal(t);
  }
  // Traverses the tree in reverse key order and calls the specified action
  // function for each node. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  reverseTraversal(t) {
    return this.right.reverseTraversal(t) || t(this.key, this.value) || this.left.reverseTraversal(t);
  }
  // Returns the minimum node in the tree.
  min() {
    return this.left.isEmpty() ? this : this.left.min();
  }
  // Returns the maximum key in the tree.
  minKey() {
    return this.min().key;
  }
  // Returns the maximum key in the tree.
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  // Returns new tree, with the key/value added.
  insert(t, e, r) {
    let n = this;
    const i = r(t, n.key);
    return n = i < 0 ? n.copy(null, null, null, n.left.insert(t, e, r), null) : 0 === i ? n.copy(null, e, null, null, null) : n.copy(null, null, null, null, n.right.insert(t, e, r)), n.fixUp();
  }
  removeMin() {
    if (this.left.isEmpty()) return _LLRBNode.EMPTY;
    let t = this;
    return t.left.isRed() || t.left.left.isRed() || (t = t.moveRedLeft()), t = t.copy(null, null, null, t.left.removeMin(), null), t.fixUp();
  }
  // Returns new tree, with the specified item removed.
  remove(t, e) {
    let r, n = this;
    if (e(t, n.key) < 0) n.left.isEmpty() || n.left.isRed() || n.left.left.isRed() || (n = n.moveRedLeft()), n = n.copy(null, null, null, n.left.remove(t, e), null);
    else {
      if (n.left.isRed() && (n = n.rotateRight()), n.right.isEmpty() || n.right.isRed() || n.right.left.isRed() || (n = n.moveRedRight()), 0 === e(t, n.key)) {
        if (n.right.isEmpty()) return _LLRBNode.EMPTY;
        r = n.right.min(), n = n.copy(r.key, r.value, null, null, n.right.removeMin());
      }
      n = n.copy(null, null, null, null, n.right.remove(t, e));
    }
    return n.fixUp();
  }
  isRed() {
    return this.color;
  }
  // Returns new tree after performing any needed rotations.
  fixUp() {
    let t = this;
    return t.right.isRed() && !t.left.isRed() && (t = t.rotateLeft()), t.left.isRed() && t.left.left.isRed() && (t = t.rotateRight()), t.left.isRed() && t.right.isRed() && (t = t.colorFlip()), t;
  }
  moveRedLeft() {
    let t = this.colorFlip();
    return t.right.left.isRed() && (t = t.copy(null, null, null, null, t.right.rotateRight()), t = t.rotateLeft(), t = t.colorFlip()), t;
  }
  moveRedRight() {
    let t = this.colorFlip();
    return t.left.left.isRed() && (t = t.rotateRight(), t = t.colorFlip()), t;
  }
  rotateLeft() {
    const t = this.copy(null, null, _LLRBNode.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, t, null);
  }
  rotateRight() {
    const t = this.copy(null, null, _LLRBNode.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, t);
  }
  colorFlip() {
    const t = this.left.copy(null, null, !this.left.color, null, null), e = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, t, e);
  }
  // For testing.
  checkMaxDepth() {
    const t = this.check();
    return Math.pow(2, t) <= this.size + 1;
  }
  // In a balanced RB tree, the black-depth (number of black nodes) from root to
  // leaves is equal on both sides.  This function verifies that or asserts.
  check() {
    if (this.isRed() && this.left.isRed()) throw fail();
    if (this.right.isRed()) throw fail();
    const t = this.left.check();
    if (t !== this.right.check()) throw fail();
    return t + (this.isRed() ? 0 : 1);
  }
};
LLRBNode.EMPTY = null, LLRBNode.RED = true, LLRBNode.BLACK = false;
LLRBNode.EMPTY = new // Represents an empty node (a leaf node in the Red-Black Tree).
class LLRBEmptyNode {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw fail();
  }
  get value() {
    throw fail();
  }
  get color() {
    throw fail();
  }
  get left() {
    throw fail();
  }
  get right() {
    throw fail();
  }
  // Returns a copy of the current node.
  copy(t, e, r, n, i) {
    return this;
  }
  // Returns a copy of the tree, with the specified key/value added.
  insert(t, e, r) {
    return new LLRBNode(t, e);
  }
  // Returns a copy of the tree, with the specified key removed.
  remove(t, e) {
    return this;
  }
  isEmpty() {
    return true;
  }
  inorderTraversal(t) {
    return false;
  }
  reverseTraversal(t) {
    return false;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return false;
  }
  // For testing.
  checkMaxDepth() {
    return true;
  }
  check() {
    return 0;
  }
}();
var SortedSet = class _SortedSet {
  constructor(t) {
    this.comparator = t, this.data = new SortedMap(this.comparator);
  }
  has(t) {
    return null !== this.data.get(t);
  }
  first() {
    return this.data.minKey();
  }
  last() {
    return this.data.maxKey();
  }
  get size() {
    return this.data.size;
  }
  indexOf(t) {
    return this.data.indexOf(t);
  }
  /** Iterates elements in order defined by "comparator" */
  forEach(t) {
    this.data.inorderTraversal((e, r) => (t(e), false));
  }
  /** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */
  forEachInRange(t, e) {
    const r = this.data.getIteratorFrom(t[0]);
    for (; r.hasNext(); ) {
      const n = r.getNext();
      if (this.comparator(n.key, t[1]) >= 0) return;
      e(n.key);
    }
  }
  /**
   * Iterates over `elem`s such that: start &lt;= elem until false is returned.
   */
  forEachWhile(t, e) {
    let r;
    for (r = void 0 !== e ? this.data.getIteratorFrom(e) : this.data.getIterator(); r.hasNext(); ) {
      if (!t(r.getNext().key)) return;
    }
  }
  /** Finds the least element greater than or equal to `elem`. */
  firstAfterOrEqual(t) {
    const e = this.data.getIteratorFrom(t);
    return e.hasNext() ? e.getNext().key : null;
  }
  getIterator() {
    return new SortedSetIterator(this.data.getIterator());
  }
  getIteratorFrom(t) {
    return new SortedSetIterator(this.data.getIteratorFrom(t));
  }
  /** Inserts or updates an element */
  add(t) {
    return this.copy(this.data.remove(t).insert(t, true));
  }
  /** Deletes an element */
  delete(t) {
    return this.has(t) ? this.copy(this.data.remove(t)) : this;
  }
  isEmpty() {
    return this.data.isEmpty();
  }
  unionWith(t) {
    let e = this;
    return e.size < t.size && (e = t, t = this), t.forEach((t2) => {
      e = e.add(t2);
    }), e;
  }
  isEqual(t) {
    if (!(t instanceof _SortedSet)) return false;
    if (this.size !== t.size) return false;
    const e = this.data.getIterator(), r = t.data.getIterator();
    for (; e.hasNext(); ) {
      const t2 = e.getNext().key, n = r.getNext().key;
      if (0 !== this.comparator(t2, n)) return false;
    }
    return true;
  }
  toArray() {
    const t = [];
    return this.forEach((e) => {
      t.push(e);
    }), t;
  }
  toString() {
    const t = [];
    return this.forEach((e) => t.push(e)), "SortedSet(" + t.toString() + ")";
  }
  copy(t) {
    const e = new _SortedSet(this.comparator);
    return e.data = t, e;
  }
};
var SortedSetIterator = class {
  constructor(t) {
    this.iter = t;
  }
  getNext() {
    return this.iter.getNext().key;
  }
  hasNext() {
    return this.iter.hasNext();
  }
};
var FieldMask = class _FieldMask {
  constructor(t) {
    this.fields = t, // TODO(dimond): validation of FieldMask
    // Sort the field mask to support `FieldMask.isEqual()` and assert below.
    t.sort(FieldPath$1.comparator);
  }
  static empty() {
    return new _FieldMask([]);
  }
  /**
   * Returns a new FieldMask object that is the result of adding all the given
   * fields paths to this field mask.
   */
  unionWith(t) {
    let e = new SortedSet(FieldPath$1.comparator);
    for (const t2 of this.fields) e = e.add(t2);
    for (const r of t) e = e.add(r);
    return new _FieldMask(e.toArray());
  }
  /**
   * Verifies that `fieldPath` is included by at least one field in this field
   * mask.
   *
   * This is an O(n) operation, where `n` is the size of the field mask.
   */
  covers(t) {
    for (const e of this.fields) if (e.isPrefixOf(t)) return true;
    return false;
  }
  isEqual(t) {
    return __PRIVATE_arrayEquals(this.fields, t.fields, (t2, e) => t2.isEqual(e));
  }
};
var ObjectValue = class _ObjectValue {
  constructor(t) {
    this.value = t;
  }
  static empty() {
    return new _ObjectValue({
      mapValue: {}
    });
  }
  /**
   * Returns the value at the given path or null.
   *
   * @param path - the path to search
   * @returns The value at the path or null if the path is not set.
   */
  field(t) {
    if (t.isEmpty()) return this.value;
    {
      let e = this.value;
      for (let r = 0; r < t.length - 1; ++r) if (e = (e.mapValue.fields || {})[t.get(r)], !__PRIVATE_isMapValue(e)) return null;
      return e = (e.mapValue.fields || {})[t.lastSegment()], e || null;
    }
  }
  /**
   * Sets the field to the provided value.
   *
   * @param path - The field path to set.
   * @param value - The value to set.
   */
  set(t, e) {
    this.getFieldsMap(t.popLast())[t.lastSegment()] = __PRIVATE_deepClone(e);
  }
  /**
   * Sets the provided fields to the provided values.
   *
   * @param data - A map of fields to values (or null for deletes).
   */
  setAll(t) {
    let e = FieldPath$1.emptyPath(), r = {}, n = [];
    t.forEach((t2, i2) => {
      if (!e.isImmediateParentOf(i2)) {
        const t3 = this.getFieldsMap(e);
        this.applyChanges(t3, r, n), r = {}, n = [], e = i2.popLast();
      }
      t2 ? r[i2.lastSegment()] = __PRIVATE_deepClone(t2) : n.push(i2.lastSegment());
    });
    const i = this.getFieldsMap(e);
    this.applyChanges(i, r, n);
  }
  /**
   * Removes the field at the specified path. If there is no field at the
   * specified path, nothing is changed.
   *
   * @param path - The field path to remove.
   */
  delete(t) {
    const e = this.field(t.popLast());
    __PRIVATE_isMapValue(e) && e.mapValue.fields && delete e.mapValue.fields[t.lastSegment()];
  }
  isEqual(t) {
    return __PRIVATE_valueEquals(this.value, t.value);
  }
  /**
   * Returns the map that contains the leaf element of `path`. If the parent
   * entry does not yet exist, or if it is not a map, a new map will be created.
   */
  getFieldsMap(t) {
    let e = this.value;
    e.mapValue.fields || (e.mapValue = {
      fields: {}
    });
    for (let r = 0; r < t.length; ++r) {
      let n = e.mapValue.fields[t.get(r)];
      __PRIVATE_isMapValue(n) && n.mapValue.fields || (n = {
        mapValue: {
          fields: {}
        }
      }, e.mapValue.fields[t.get(r)] = n), e = n;
    }
    return e.mapValue.fields;
  }
  /**
   * Modifies `fieldsMap` by adding, replacing or deleting the specified
   * entries.
   */
  applyChanges(t, e, r) {
    forEach(e, (e2, r2) => t[e2] = r2);
    for (const e2 of r) delete t[e2];
  }
  clone() {
    return new _ObjectValue(__PRIVATE_deepClone(this.value));
  }
};
var MutableDocument = class _MutableDocument {
  constructor(t, e, r, n, i, s, o) {
    this.key = t, this.documentType = e, this.version = r, this.readTime = n, this.createTime = i, this.data = s, this.documentState = o;
  }
  /**
   * Creates a document with no known version or data, but which can serve as
   * base document for mutations.
   */
  static newInvalidDocument(t) {
    return new _MutableDocument(
      t,
      0,
      /* version */
      SnapshotVersion.min(),
      /* readTime */
      SnapshotVersion.min(),
      /* createTime */
      SnapshotVersion.min(),
      ObjectValue.empty(),
      0
      /* DocumentState.SYNCED */
    );
  }
  /**
   * Creates a new document that is known to exist with the given data at the
   * given version.
   */
  static newFoundDocument(t, e, r, n) {
    return new _MutableDocument(
      t,
      1,
      /* version */
      e,
      /* readTime */
      SnapshotVersion.min(),
      /* createTime */
      r,
      n,
      0
      /* DocumentState.SYNCED */
    );
  }
  /** Creates a new document that is known to not exist at the given version. */
  static newNoDocument(t, e) {
    return new _MutableDocument(
      t,
      2,
      /* version */
      e,
      /* readTime */
      SnapshotVersion.min(),
      /* createTime */
      SnapshotVersion.min(),
      ObjectValue.empty(),
      0
      /* DocumentState.SYNCED */
    );
  }
  /**
   * Creates a new document that is known to exist at the given version but
   * whose data is not known (e.g. a document that was updated without a known
   * base document).
   */
  static newUnknownDocument(t, e) {
    return new _MutableDocument(
      t,
      3,
      /* version */
      e,
      /* readTime */
      SnapshotVersion.min(),
      /* createTime */
      SnapshotVersion.min(),
      ObjectValue.empty(),
      2
      /* DocumentState.HAS_COMMITTED_MUTATIONS */
    );
  }
  /**
   * Changes the document type to indicate that it exists and that its version
   * and data are known.
   */
  convertToFoundDocument(t, e) {
    return !this.createTime.isEqual(SnapshotVersion.min()) || 2 !== this.documentType && 0 !== this.documentType || (this.createTime = t), this.version = t, this.documentType = 1, this.data = e, this.documentState = 0, this;
  }
  /**
   * Changes the document type to indicate that it doesn't exist at the given
   * version.
   */
  convertToNoDocument(t) {
    return this.version = t, this.documentType = 2, this.data = ObjectValue.empty(), this.documentState = 0, this;
  }
  /**
   * Changes the document type to indicate that it exists at a given version but
   * that its data is not known (e.g. a document that was updated without a known
   * base document).
   */
  convertToUnknownDocument(t) {
    return this.version = t, this.documentType = 3, this.data = ObjectValue.empty(), this.documentState = 2, this;
  }
  setHasCommittedMutations() {
    return this.documentState = 2, this;
  }
  setHasLocalMutations() {
    return this.documentState = 1, this.version = SnapshotVersion.min(), this;
  }
  setReadTime(t) {
    return this.readTime = t, this;
  }
  get hasLocalMutations() {
    return 1 === this.documentState;
  }
  get hasCommittedMutations() {
    return 2 === this.documentState;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return 0 !== this.documentType;
  }
  isFoundDocument() {
    return 1 === this.documentType;
  }
  isNoDocument() {
    return 2 === this.documentType;
  }
  isUnknownDocument() {
    return 3 === this.documentType;
  }
  isEqual(t) {
    return t instanceof _MutableDocument && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.documentType === t.documentType && this.documentState === t.documentState && this.data.isEqual(t.data);
  }
  mutableCopy() {
    return new _MutableDocument(this.key, this.documentType, this.version, this.readTime, this.createTime, this.data.clone(), this.documentState);
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
  }
};
var __PRIVATE_TargetImpl = class {
  constructor(t, e = null, r = [], n = [], i = null, s = null, o = null) {
    this.path = t, this.collectionGroup = e, this.orderBy = r, this.filters = n, this.limit = i, this.startAt = s, this.endAt = o, this.C = null;
  }
};
function __PRIVATE_newTarget(t, e = null, r = [], n = [], i = null, s = null, o = null) {
  return new __PRIVATE_TargetImpl(t, e, r, n, i, s, o);
}
var __PRIVATE_QueryImpl = class {
  /**
   * Initializes a Query with a path and optional additional query constraints.
   * Path must currently be empty if this is a collection group query.
   */
  constructor(t, e = null, r = [], n = [], i = null, s = "F", o = null, a = null) {
    this.path = t, this.collectionGroup = e, this.explicitOrderBy = r, this.filters = n, this.limit = i, this.limitType = s, this.startAt = o, this.endAt = a, this.S = null, // The corresponding `Target` of this `Query` instance, for use with
    // non-aggregate queries.
    this.N = null, // The corresponding `Target` of this `Query` instance, for use with
    // aggregate queries. Unlike targets for non-aggregate queries,
    // aggregate query targets do not contain normalized order-bys, they only
    // contain explicit order-bys.
    this.O = null, this.startAt, this.endAt;
  }
};
function __PRIVATE_isCollectionGroupQuery(t) {
  return null !== t.collectionGroup;
}
function __PRIVATE_queryNormalizedOrderBy(t) {
  const e = __PRIVATE_debugCast(t);
  if (null === e.S) {
    e.S = [];
    const t2 = /* @__PURE__ */ new Set();
    for (const r2 of e.explicitOrderBy) e.S.push(r2), t2.add(r2.field.canonicalString());
    const r = e.explicitOrderBy.length > 0 ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir : "asc", n = (
      // Returns the sorted set of inequality filter fields used in this query.
      function __PRIVATE_getInequalityFilterFields(t3) {
        let e2 = new SortedSet(FieldPath$1.comparator);
        return t3.filters.forEach((t4) => {
          t4.getFlattenedFilters().forEach((t5) => {
            t5.isInequality() && (e2 = e2.add(t5.field));
          });
        }), e2;
      }(e)
    );
    n.forEach((n2) => {
      t2.has(n2.canonicalString()) || n2.isKeyField() || e.S.push(new OrderBy(n2, r));
    }), // Add the document key field to the last if it is not explicitly ordered.
    t2.has(FieldPath$1.keyField().canonicalString()) || e.S.push(new OrderBy(FieldPath$1.keyField(), r));
  }
  return e.S;
}
function __PRIVATE_queryToTarget(t) {
  const e = __PRIVATE_debugCast(t);
  return e.N || (e.N = __PRIVATE__queryToTarget(e, __PRIVATE_queryNormalizedOrderBy(t))), e.N;
}
function __PRIVATE__queryToTarget(t, e) {
  if ("F" === t.limitType) return __PRIVATE_newTarget(t.path, t.collectionGroup, e, t.filters, t.limit, t.startAt, t.endAt);
  {
    e = e.map((t2) => {
      const e2 = "desc" === t2.dir ? "asc" : "desc";
      return new OrderBy(t2.field, e2);
    });
    const r = t.endAt ? new Bound(t.endAt.position, t.endAt.inclusive) : null, n = t.startAt ? new Bound(t.startAt.position, t.startAt.inclusive) : null;
    return __PRIVATE_newTarget(t.path, t.collectionGroup, e, t.filters, t.limit, r, n);
  }
}
function __PRIVATE_queryWithAddedFilter(t, e) {
  const r = t.filters.concat([e]);
  return new __PRIVATE_QueryImpl(t.path, t.collectionGroup, t.explicitOrderBy.slice(), r, t.limit, t.limitType, t.startAt, t.endAt);
}
function __PRIVATE_queryEquals(t, e) {
  return function __PRIVATE_targetEquals(t2, e2) {
    if (t2.limit !== e2.limit) return false;
    if (t2.orderBy.length !== e2.orderBy.length) return false;
    for (let r = 0; r < t2.orderBy.length; r++) if (!__PRIVATE_orderByEquals(t2.orderBy[r], e2.orderBy[r])) return false;
    if (t2.filters.length !== e2.filters.length) return false;
    for (let r = 0; r < t2.filters.length; r++) if (!__PRIVATE_filterEquals(t2.filters[r], e2.filters[r])) return false;
    return t2.collectionGroup === e2.collectionGroup && !!t2.path.isEqual(e2.path) && !!__PRIVATE_boundEquals(t2.startAt, e2.startAt) && __PRIVATE_boundEquals(t2.endAt, e2.endAt);
  }(__PRIVATE_queryToTarget(t), __PRIVATE_queryToTarget(e)) && t.limitType === e.limitType;
}
function __PRIVATE_toDouble(t, e) {
  if (t.useProto3Json) {
    if (isNaN(e)) return {
      doubleValue: "NaN"
    };
    if (e === 1 / 0) return {
      doubleValue: "Infinity"
    };
    if (e === -1 / 0) return {
      doubleValue: "-Infinity"
    };
  }
  return {
    doubleValue: __PRIVATE_isNegativeZero(e) ? "-0" : e
  };
}
function toNumber(t, e) {
  return function isSafeInteger(t2) {
    return "number" == typeof t2 && Number.isInteger(t2) && !__PRIVATE_isNegativeZero(t2) && t2 <= Number.MAX_SAFE_INTEGER && t2 >= Number.MIN_SAFE_INTEGER;
  }(e) ? function __PRIVATE_toInteger(t2) {
    return {
      integerValue: "" + t2
    };
  }(e) : __PRIVATE_toDouble(t, e);
}
var TransformOperation = class {
  constructor() {
    this._ = void 0;
  }
};
var __PRIVATE_ServerTimestampTransform = class extends TransformOperation {
};
var __PRIVATE_ArrayUnionTransformOperation = class extends TransformOperation {
  constructor(t) {
    super(), this.elements = t;
  }
};
var __PRIVATE_ArrayRemoveTransformOperation = class extends TransformOperation {
  constructor(t) {
    super(), this.elements = t;
  }
};
var __PRIVATE_NumericIncrementTransformOperation = class extends TransformOperation {
  constructor(t, e) {
    super(), this.serializer = t, this.q = e;
  }
};
var FieldTransform = class {
  constructor(t, e) {
    this.field = t, this.transform = e;
  }
};
var Precondition = class _Precondition {
  constructor(t, e) {
    this.updateTime = t, this.exists = e;
  }
  /** Creates a new empty Precondition. */
  static none() {
    return new _Precondition();
  }
  /** Creates a new Precondition with an exists flag. */
  static exists(t) {
    return new _Precondition(void 0, t);
  }
  /** Creates a new Precondition based on a version a document exists at. */
  static updateTime(t) {
    return new _Precondition(t);
  }
  /** Returns whether this Precondition is empty. */
  get isNone() {
    return void 0 === this.updateTime && void 0 === this.exists;
  }
  isEqual(t) {
    return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
  }
};
var Mutation = class {
};
var __PRIVATE_SetMutation = class extends Mutation {
  constructor(t, e, r, n = []) {
    super(), this.key = t, this.value = e, this.precondition = r, this.fieldTransforms = n, this.type = 0;
  }
  getFieldMask() {
    return null;
  }
};
var __PRIVATE_PatchMutation = class extends Mutation {
  constructor(t, e, r, n, i = []) {
    super(), this.key = t, this.data = e, this.fieldMask = r, this.precondition = n, this.fieldTransforms = i, this.type = 1;
  }
  getFieldMask() {
    return this.fieldMask;
  }
};
var __PRIVATE_DeleteMutation = class extends Mutation {
  constructor(t, e) {
    super(), this.key = t, this.precondition = e, this.type = 2, this.fieldTransforms = [];
  }
  getFieldMask() {
    return null;
  }
};
var __PRIVATE_VerifyMutation = class extends Mutation {
  constructor(t, e) {
    super(), this.key = t, this.precondition = e, this.type = 3, this.fieldTransforms = [];
  }
  getFieldMask() {
    return null;
  }
};
var L = /* @__PURE__ */ (() => {
  const t = {
    asc: "ASCENDING",
    desc: "DESCENDING"
  };
  return t;
})();
var M = /* @__PURE__ */ (() => {
  const t = {
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "!=": "NOT_EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "not-in": "NOT_IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY"
  };
  return t;
})();
var x = /* @__PURE__ */ (() => {
  const t = {
    and: "AND",
    or: "OR"
  };
  return t;
})();
var JsonProtoSerializer = class {
  constructor(t, e) {
    this.databaseId = t, this.useProto3Json = e;
  }
};
function toTimestamp(t, e) {
  if (t.useProto3Json) {
    return `${new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + e.nanoseconds).slice(-9)}Z`;
  }
  return {
    seconds: "" + e.seconds,
    nanos: e.nanoseconds
  };
}
function __PRIVATE_toBytes(t, e) {
  return t.useProto3Json ? e.toBase64() : e.toUint8Array();
}
function __PRIVATE_toVersion(t, e) {
  return toTimestamp(t, e.toTimestamp());
}
function __PRIVATE_fromVersion(t) {
  return __PRIVATE_hardAssert(!!t), SnapshotVersion.fromTimestamp(function fromTimestamp(t2) {
    const e = __PRIVATE_normalizeTimestamp(t2);
    return new Timestamp(e.seconds, e.nanos);
  }(t));
}
function __PRIVATE_toResourceName(t, e) {
  return __PRIVATE_toResourcePath(t, e).canonicalString();
}
function __PRIVATE_toResourcePath(t, e) {
  const r = function __PRIVATE_fullyQualifiedPrefixPath(t2) {
    return new ResourcePath(["projects", t2.projectId, "databases", t2.database]);
  }(t).child("documents");
  return void 0 === e ? r : r.child(e);
}
function __PRIVATE_toName(t, e) {
  return __PRIVATE_toResourceName(t.databaseId, e.path);
}
function fromName(t, e) {
  const r = function __PRIVATE_fromResourceName(t2) {
    const e2 = ResourcePath.fromString(t2);
    return __PRIVATE_hardAssert(__PRIVATE_isValidResourceName(e2)), e2;
  }(e);
  if (r.get(1) !== t.databaseId.projectId) throw new FirestoreError(T, "Tried to deserialize key from different project: " + r.get(1) + " vs " + t.databaseId.projectId);
  if (r.get(3) !== t.databaseId.database) throw new FirestoreError(T, "Tried to deserialize key from different database: " + r.get(3) + " vs " + t.databaseId.database);
  return new DocumentKey(function __PRIVATE_extractLocalPathFromResourceName(t2) {
    return __PRIVATE_hardAssert(t2.length > 4 && "documents" === t2.get(4)), t2.popFirst(5);
  }(r));
}
function __PRIVATE_toMutationDocument(t, e, r) {
  return {
    name: __PRIVATE_toName(t, e),
    fields: r.value.mapValue.fields
  };
}
function __PRIVATE_fromBatchGetDocumentsResponse(t, e) {
  return "found" in e ? function __PRIVATE_fromFound(t2, e2) {
    __PRIVATE_hardAssert(!!e2.found), e2.found.name, e2.found.updateTime;
    const r = fromName(t2, e2.found.name), n = __PRIVATE_fromVersion(e2.found.updateTime), i = e2.found.createTime ? __PRIVATE_fromVersion(e2.found.createTime) : SnapshotVersion.min(), s = new ObjectValue({
      mapValue: {
        fields: e2.found.fields
      }
    });
    return MutableDocument.newFoundDocument(r, n, i, s);
  }(t, e) : "missing" in e ? function __PRIVATE_fromMissing(t2, e2) {
    __PRIVATE_hardAssert(!!e2.missing), __PRIVATE_hardAssert(!!e2.readTime);
    const r = fromName(t2, e2.missing), n = __PRIVATE_fromVersion(e2.readTime);
    return MutableDocument.newNoDocument(r, n);
  }(t, e) : fail();
}
function toMutation(t, e) {
  let r;
  if (e instanceof __PRIVATE_SetMutation) r = {
    update: __PRIVATE_toMutationDocument(t, e.key, e.value)
  };
  else if (e instanceof __PRIVATE_DeleteMutation) r = {
    delete: __PRIVATE_toName(t, e.key)
  };
  else if (e instanceof __PRIVATE_PatchMutation) r = {
    update: __PRIVATE_toMutationDocument(t, e.key, e.data),
    updateMask: __PRIVATE_toDocumentMask(e.fieldMask)
  };
  else {
    if (!(e instanceof __PRIVATE_VerifyMutation)) return fail();
    r = {
      verify: __PRIVATE_toName(t, e.key)
    };
  }
  return e.fieldTransforms.length > 0 && (r.updateTransforms = e.fieldTransforms.map((t2) => function __PRIVATE_toFieldTransform(t3, e2) {
    const r2 = e2.transform;
    if (r2 instanceof __PRIVATE_ServerTimestampTransform) return {
      fieldPath: e2.field.canonicalString(),
      setToServerValue: "REQUEST_TIME"
    };
    if (r2 instanceof __PRIVATE_ArrayUnionTransformOperation) return {
      fieldPath: e2.field.canonicalString(),
      appendMissingElements: {
        values: r2.elements
      }
    };
    if (r2 instanceof __PRIVATE_ArrayRemoveTransformOperation) return {
      fieldPath: e2.field.canonicalString(),
      removeAllFromArray: {
        values: r2.elements
      }
    };
    if (r2 instanceof __PRIVATE_NumericIncrementTransformOperation) return {
      fieldPath: e2.field.canonicalString(),
      increment: r2.q
    };
    throw fail();
  }(0, t2))), e.precondition.isNone || (r.currentDocument = function __PRIVATE_toPrecondition(t2, e2) {
    return void 0 !== e2.updateTime ? {
      updateTime: __PRIVATE_toVersion(t2, e2.updateTime)
    } : void 0 !== e2.exists ? {
      exists: e2.exists
    } : fail();
  }(t, e.precondition)), r;
}
function __PRIVATE_toQueryTarget(t, e) {
  const r = {
    structuredQuery: {}
  }, n = e.path;
  let i;
  null !== e.collectionGroup ? (i = n, r.structuredQuery.from = [{
    collectionId: e.collectionGroup,
    allDescendants: true
  }]) : (i = n.popLast(), r.structuredQuery.from = [{
    collectionId: n.lastSegment()
  }]), r.parent = function __PRIVATE_toQueryPath(t2, e2) {
    return __PRIVATE_toResourceName(t2.databaseId, e2);
  }(t, i);
  const s = function __PRIVATE_toFilters(t2) {
    if (0 === t2.length) return;
    return __PRIVATE_toFilter(CompositeFilter.create(
      t2,
      "and"
      /* CompositeOperator.AND */
    ));
  }(e.filters);
  s && (r.structuredQuery.where = s);
  const o = function __PRIVATE_toOrder(t2) {
    if (0 === t2.length) return;
    return t2.map((t3) => (
      // visible for testing
      function __PRIVATE_toPropertyOrder(t4) {
        return {
          field: __PRIVATE_toFieldPathReference(t4.field),
          direction: __PRIVATE_toDirection(t4.dir)
        };
      }(t3)
    ));
  }(e.orderBy);
  o && (r.structuredQuery.orderBy = o);
  const a = function __PRIVATE_toInt32Proto(t2, e2) {
    return t2.useProto3Json || __PRIVATE_isNullOrUndefined(e2) ? e2 : {
      value: e2
    };
  }(t, e.limit);
  return null !== a && (r.structuredQuery.limit = a), e.startAt && (r.structuredQuery.startAt = function __PRIVATE_toStartAtCursor(t2) {
    return {
      before: t2.inclusive,
      values: t2.position
    };
  }(e.startAt)), e.endAt && (r.structuredQuery.endAt = function __PRIVATE_toEndAtCursor(t2) {
    return {
      before: !t2.inclusive,
      values: t2.position
    };
  }(e.endAt)), {
    B: r,
    parent: i
  };
}
function __PRIVATE_toDirection(t) {
  return L[t];
}
function __PRIVATE_toOperatorName(t) {
  return M[t];
}
function __PRIVATE_toCompositeOperatorName(t) {
  return x[t];
}
function __PRIVATE_toFieldPathReference(t) {
  return {
    fieldPath: t.canonicalString()
  };
}
function __PRIVATE_toFilter(t) {
  return t instanceof FieldFilter ? function __PRIVATE_toUnaryOrFieldFilter(t2) {
    if ("==" === t2.op) {
      if (__PRIVATE_isNanValue(t2.value)) return {
        unaryFilter: {
          field: __PRIVATE_toFieldPathReference(t2.field),
          op: "IS_NAN"
        }
      };
      if (__PRIVATE_isNullValue(t2.value)) return {
        unaryFilter: {
          field: __PRIVATE_toFieldPathReference(t2.field),
          op: "IS_NULL"
        }
      };
    } else if ("!=" === t2.op) {
      if (__PRIVATE_isNanValue(t2.value)) return {
        unaryFilter: {
          field: __PRIVATE_toFieldPathReference(t2.field),
          op: "IS_NOT_NAN"
        }
      };
      if (__PRIVATE_isNullValue(t2.value)) return {
        unaryFilter: {
          field: __PRIVATE_toFieldPathReference(t2.field),
          op: "IS_NOT_NULL"
        }
      };
    }
    return {
      fieldFilter: {
        field: __PRIVATE_toFieldPathReference(t2.field),
        op: __PRIVATE_toOperatorName(t2.op),
        value: t2.value
      }
    };
  }(t) : t instanceof CompositeFilter ? function __PRIVATE_toCompositeFilter(t2) {
    const e = t2.getFilters().map((t3) => __PRIVATE_toFilter(t3));
    if (1 === e.length) return e[0];
    return {
      compositeFilter: {
        op: __PRIVATE_toCompositeOperatorName(t2.op),
        filters: e
      }
    };
  }(t) : fail();
}
function __PRIVATE_toDocumentMask(t) {
  const e = [];
  return t.fields.forEach((t2) => e.push(t2.canonicalString())), {
    fieldPaths: e
  };
}
function __PRIVATE_isValidResourceName(t) {
  return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
}
function __PRIVATE_newSerializer(t) {
  return new JsonProtoSerializer(
    t,
    /* useProto3Json= */
    true
  );
}
var __PRIVATE_ExponentialBackoff = class {
  constructor(t, e, r = 1e3, n = 1.5, i = 6e4) {
    this.$ = t, this.timerId = e, this.L = r, this.M = n, this.k = i, this.U = 0, this.j = null, /** The last backoff attempt, as epoch milliseconds. */
    this.W = Date.now(), this.reset();
  }
  /**
   * Resets the backoff delay.
   *
   * The very next backoffAndWait() will have no delay. If it is called again
   * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
   * subsequent ones will increase according to the backoffFactor.
   */
  reset() {
    this.U = 0;
  }
  /**
   * Resets the backoff delay to the maximum delay (e.g. for use after a
   * RESOURCE_EXHAUSTED error).
   */
  K() {
    this.U = this.k;
  }
  /**
   * Returns a promise that resolves after currentDelayMs, and increases the
   * delay for any subsequent attempts. If there was a pending backoff operation
   * already, it will be canceled.
   */
  G(t) {
    this.cancel();
    const e = Math.floor(this.U + this.H()), r = Math.max(0, Date.now() - this.W), n = Math.max(0, e - r);
    n > 0 && __PRIVATE_logDebug("ExponentialBackoff", `Backing off for ${n} ms (base delay: ${this.U} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`), this.j = this.$.enqueueAfterDelay(this.timerId, n, () => (this.W = Date.now(), t())), // Apply backoff factor to determine next delay and ensure it is within
    // bounds.
    this.U *= this.M, this.U < this.L && (this.U = this.L), this.U > this.k && (this.U = this.k);
  }
  J() {
    null !== this.j && (this.j.skipDelay(), this.j = null);
  }
  cancel() {
    null !== this.j && (this.j.cancel(), this.j = null);
  }
  /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */
  H() {
    return (Math.random() - 0.5) * this.U;
  }
};
var __PRIVATE_DatastoreImpl = class extends class Datastore {
} {
  constructor(t, e, r, n) {
    super(), this.authCredentials = t, this.appCheckCredentials = e, this.connection = r, this.serializer = n, this.Y = false;
  }
  Z() {
    if (this.Y) throw new FirestoreError(w, "The client has already been terminated.");
  }
  /** Invokes the provided RPC with auth and AppCheck tokens. */
  P(t, e, r, n) {
    return this.Z(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([i, s]) => this.connection.P(t, __PRIVATE_toResourcePath(e, r), n, i, s)).catch((t2) => {
      throw "FirebaseError" === t2.name ? (t2.code === p && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), t2) : new FirestoreError(A, t2.toString());
    });
  }
  /** Invokes the provided RPC with streamed results with auth and AppCheck tokens. */
  g(t, e, r, n, i) {
    return this.Z(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([s, o]) => this.connection.g(t, __PRIVATE_toResourcePath(e, r), n, s, o, i)).catch((t2) => {
      throw "FirebaseError" === t2.name ? (t2.code === p && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), t2) : new FirestoreError(A, t2.toString());
    });
  }
  terminate() {
    this.Y = true, this.connection.terminate();
  }
};
async function __PRIVATE_invokeCommitRpc(t, e) {
  const r = __PRIVATE_debugCast(t), n = {
    writes: e.map((t2) => toMutation(r.serializer, t2))
  };
  await r.P("Commit", r.serializer.databaseId, ResourcePath.emptyPath(), n);
}
async function __PRIVATE_invokeBatchGetDocumentsRpc(t, e) {
  const r = __PRIVATE_debugCast(t), n = {
    documents: e.map((t2) => __PRIVATE_toName(r.serializer, t2))
  }, i = await r.g("BatchGetDocuments", r.serializer.databaseId, ResourcePath.emptyPath(), n, e.length), s = /* @__PURE__ */ new Map();
  i.forEach((t2) => {
    const e2 = __PRIVATE_fromBatchGetDocumentsResponse(r.serializer, t2);
    s.set(e2.key.toString(), e2);
  });
  const o = [];
  return e.forEach((t2) => {
    const e2 = s.get(t2.toString());
    __PRIVATE_hardAssert(!!e2), o.push(e2);
  }), o;
}
async function __PRIVATE_invokeRunQueryRpc(t, e) {
  const r = __PRIVATE_debugCast(t), { B: n, parent: i } = __PRIVATE_toQueryTarget(r.serializer, __PRIVATE_queryToTarget(e));
  return (await r.g("RunQuery", r.serializer.databaseId, i, {
    structuredQuery: n.structuredQuery
  })).filter((t2) => !!t2.document).map((t2) => function __PRIVATE_fromDocument(t3, e2, r2) {
    const n2 = fromName(t3, e2.name), i2 = __PRIVATE_fromVersion(e2.updateTime), s = e2.createTime ? __PRIVATE_fromVersion(e2.createTime) : SnapshotVersion.min(), o = new ObjectValue({
      mapValue: {
        fields: e2.fields
      }
    }), a = MutableDocument.newFoundDocument(n2, i2, s, o);
    return r2 && a.setHasCommittedMutations(), r2 ? a.setHasCommittedMutations() : a;
  }(r.serializer, t2.document, void 0));
}
async function __PRIVATE_invokeRunAggregationQueryRpc(t, e, r) {
  var n;
  const i = __PRIVATE_debugCast(t), { request: s, X: o, parent: a } = function __PRIVATE_toRunAggregationQueryRequest(t2, e2, r2, n2) {
    const { B: i2, parent: s2 } = __PRIVATE_toQueryTarget(t2, e2), o2 = {}, a2 = [];
    let u2 = 0;
    return r2.forEach((t3) => {
      const e3 = n2 ? t3.alias : "aggregate_" + u2++;
      o2[e3] = t3.alias, "count" === t3.aggregateType ? a2.push({
        alias: e3,
        count: {}
      }) : "avg" === t3.aggregateType ? a2.push({
        alias: e3,
        avg: {
          field: __PRIVATE_toFieldPathReference(t3.fieldPath)
        }
      }) : "sum" === t3.aggregateType && a2.push({
        alias: e3,
        sum: {
          field: __PRIVATE_toFieldPathReference(t3.fieldPath)
        }
      });
    }), {
      request: {
        structuredAggregationQuery: {
          aggregations: a2,
          structuredQuery: i2.structuredQuery
        },
        parent: i2.parent
      },
      X: o2,
      parent: s2
    };
  }(i.serializer, function __PRIVATE_queryToAggregateTarget(t2) {
    const e2 = __PRIVATE_debugCast(t2);
    return e2.O || // Do not include implicit order-bys for aggregate queries.
    (e2.O = __PRIVATE__queryToTarget(e2, t2.explicitOrderBy)), e2.O;
  }(e), r);
  i.connection.R || delete s.parent;
  const u = (await i.g(
    "RunAggregationQuery",
    i.serializer.databaseId,
    a,
    s,
    /*expectedResponseCount=*/
    1
  )).filter((t2) => !!t2.result);
  __PRIVATE_hardAssert(1 === u.length);
  const _ = null === (n = u[0].result) || void 0 === n ? void 0 : n.aggregateFields;
  return Object.keys(_).reduce((t2, e2) => (t2[o[e2]] = _[e2], t2), {});
}
var k = /* @__PURE__ */ new Map();
function __PRIVATE_getDatastore(t) {
  if (t._terminated) throw new FirestoreError(w, "The client has already been terminated.");
  if (!k.has(t)) {
    __PRIVATE_logDebug("ComponentProvider", "Initializing Datastore");
    const e = function __PRIVATE_newConnection(t2) {
      return new __PRIVATE_FetchConnection(t2, fetch.bind(null));
    }(function __PRIVATE_makeDatabaseInfo(t2, e2, r2, n2) {
      return new DatabaseInfo(t2, e2, r2, n2.host, n2.ssl, n2.experimentalForceLongPolling, n2.experimentalAutoDetectLongPolling, __PRIVATE_cloneLongPollingOptions(n2.experimentalLongPollingOptions), n2.useFetchStreams);
    }(t._databaseId, t.app.options.appId || "", t._persistenceKey, t._freezeSettings())), r = __PRIVATE_newSerializer(t._databaseId), n = function __PRIVATE_newDatastore(t2, e2, r2, n2) {
      return new __PRIVATE_DatastoreImpl(t2, e2, r2, n2);
    }(t._authCredentials, t._appCheckCredentials, e, r);
    k.set(t, n);
  }
  return k.get(t);
}
var FirestoreSettingsImpl = class {
  constructor(t) {
    var e, r;
    if (void 0 === t.host) {
      if (void 0 !== t.ssl) throw new FirestoreError(T, "Can't provide ssl option if host option is not set");
      this.host = "firestore.googleapis.com", this.ssl = true;
    } else this.host = t.host, this.ssl = null === (e = t.ssl) || void 0 === e || e;
    if (this.credentials = t.credentials, this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties, this.localCache = t.localCache, void 0 === t.cacheSizeBytes) this.cacheSizeBytes = 41943040;
    else {
      if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576) throw new FirestoreError(T, "cacheSizeBytes must be at least 1048576");
      this.cacheSizeBytes = t.cacheSizeBytes;
    }
    !function __PRIVATE_validateIsNotUsedTogether(t2, e2, r2, n) {
      if (true === e2 && true === n) throw new FirestoreError(T, `${t2} and ${r2} cannot be used together.`);
    }("experimentalForceLongPolling", t.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t.experimentalAutoDetectLongPolling), this.experimentalForceLongPolling = !!t.experimentalForceLongPolling, this.experimentalForceLongPolling ? this.experimentalAutoDetectLongPolling = false : void 0 === t.experimentalAutoDetectLongPolling ? this.experimentalAutoDetectLongPolling = true : (
      // For backwards compatibility, coerce the value to boolean even though
      // the TypeScript compiler has narrowed the type to boolean already.
      // noinspection PointlessBooleanExpressionJS
      this.experimentalAutoDetectLongPolling = !!t.experimentalAutoDetectLongPolling
    ), this.experimentalLongPollingOptions = __PRIVATE_cloneLongPollingOptions(null !== (r = t.experimentalLongPollingOptions) && void 0 !== r ? r : {}), function __PRIVATE_validateLongPollingOptions(t2) {
      if (void 0 !== t2.timeoutSeconds) {
        if (isNaN(t2.timeoutSeconds)) throw new FirestoreError(T, `invalid long polling timeout: ${t2.timeoutSeconds} (must not be NaN)`);
        if (t2.timeoutSeconds < 5) throw new FirestoreError(T, `invalid long polling timeout: ${t2.timeoutSeconds} (minimum allowed value is 5)`);
        if (t2.timeoutSeconds > 30) throw new FirestoreError(T, `invalid long polling timeout: ${t2.timeoutSeconds} (maximum allowed value is 30)`);
      }
    }(this.experimentalLongPollingOptions), this.useFetchStreams = !!t.useFetchStreams;
  }
  isEqual(t) {
    return this.host === t.host && this.ssl === t.ssl && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.experimentalForceLongPolling === t.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t.experimentalAutoDetectLongPolling && function __PRIVATE_longPollingOptionsEqual(t2, e) {
      return t2.timeoutSeconds === e.timeoutSeconds;
    }(this.experimentalLongPollingOptions, t.experimentalLongPollingOptions) && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties && this.useFetchStreams === t.useFetchStreams;
  }
};
var Firestore = class {
  /** @hideconstructor */
  constructor(t, e, r, n) {
    this._authCredentials = t, this._appCheckCredentials = e, this._databaseId = r, this._app = n, /**
     * Whether it's a Firestore or Firestore Lite instance.
     */
    this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new FirestoreSettingsImpl({}), this._settingsFrozen = false;
  }
  /**
   * The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
   * instance.
   */
  get app() {
    if (!this._app) throw new FirestoreError(w, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return void 0 !== this._terminateTask;
  }
  _setSettings(t) {
    if (this._settingsFrozen) throw new FirestoreError(w, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
    this._settings = new FirestoreSettingsImpl(t), void 0 !== t.credentials && (this._authCredentials = function __PRIVATE_makeAuthCredentialsProvider(t2) {
      if (!t2) return new __PRIVATE_EmptyAuthCredentialsProvider();
      switch (t2.type) {
        case "firstParty":
          return new __PRIVATE_FirstPartyAuthCredentialsProvider(t2.sessionIndex || "0", t2.iamToken || null, t2.authTokenFactory || null);
        case "provider":
          return t2.client;
        default:
          throw new FirestoreError(T, "makeAuthCredentialsProvider failed due to invalid credential type");
      }
    }(t.credentials));
  }
  _getSettings() {
    return this._settings;
  }
  _freezeSettings() {
    return this._settingsFrozen = true, this._settings;
  }
  _delete() {
    return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask;
  }
  /** Returns a JSON-serializable representation of this `Firestore` instance. */
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings
    };
  }
  /**
   * Terminates all components used by this client. Subclasses can override
   * this method to clean up their own dependencies, but must also call this
   * method.
   *
   * Only ever called once.
   */
  _terminate() {
    return function __PRIVATE_removeComponents(t) {
      const e = k.get(t);
      e && (__PRIVATE_logDebug("ComponentProvider", "Removing Datastore"), k.delete(t), e.terminate());
    }(this), Promise.resolve();
  }
};
function initializeFirestore(t, e, r) {
  r || (r = "(default)");
  const n = _getProvider(t, "firestore/lite");
  if (n.isInitialized(r)) throw new FirestoreError(w, "Firestore can only be initialized once per app.");
  return n.initialize({
    options: e,
    instanceIdentifier: r
  });
}
function getFirestore(e, r) {
  const n = "object" == typeof e ? e : getApp(), i = "string" == typeof e ? e : r || "(default)", s = _getProvider(n, "firestore/lite").getImmediate({
    identifier: i
  });
  if (!s._initialized) {
    const t = getDefaultEmulatorHostnameAndPort("firestore");
    t && connectFirestoreEmulator(s, ...t);
  }
  return s;
}
function connectFirestoreEmulator(t, e, r, n = {}) {
  var i;
  const s = (t = __PRIVATE_cast(t, Firestore))._getSettings(), o = `${e}:${r}`;
  if ("firestore.googleapis.com" !== s.host && s.host !== o && __PRIVATE_logWarn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."), t._setSettings(Object.assign(Object.assign({}, s), {
    host: o,
    ssl: false
  })), n.mockUserToken) {
    let e2, r2;
    if ("string" == typeof n.mockUserToken) e2 = n.mockUserToken, r2 = User.MOCK_USER;
    else {
      e2 = createMockUserToken(n.mockUserToken, null === (i = t._app) || void 0 === i ? void 0 : i.options.projectId);
      const s2 = n.mockUserToken.sub || n.mockUserToken.user_id;
      if (!s2) throw new FirestoreError(T, "mockUserToken must contain 'sub' or 'user_id' field!");
      r2 = new User(s2);
    }
    t._authCredentials = new __PRIVATE_EmulatorAuthCredentialsProvider(new __PRIVATE_OAuthToken(e2, r2));
  }
}
function terminate(t) {
  return t = __PRIVATE_cast(t, Firestore), _removeServiceInstance(t.app, "firestore/lite"), t._delete();
}
var AggregateField = class {
  /**
   * Create a new AggregateField<T>
   * @param aggregateType Specifies the type of aggregation operation to perform.
   * @param _internalFieldPath Optionally specifies the field that is aggregated.
   * @internal
   */
  constructor(t = "count", e) {
    this._internalFieldPath = e, /** A type string to uniquely identify instances of this class. */
    this.type = "AggregateField", this.aggregateType = t;
  }
};
var AggregateQuerySnapshot = class {
  /** @hideconstructor */
  constructor(t, e, r) {
    this._userDataWriter = e, this._data = r, /** A type string to uniquely identify instances of this class. */
    this.type = "AggregateQuerySnapshot", this.query = t;
  }
  /**
   * Returns the results of the aggregations performed over the underlying
   * query.
   *
   * The keys of the returned object will be the same as those of the
   * `AggregateSpec` object specified to the aggregation method, and the values
   * will be the corresponding aggregation result.
   *
   * @returns The results of the aggregations performed over the underlying
   * query.
   */
  data() {
    return this._userDataWriter.convertObjectMap(this._data);
  }
};
var Query = class _Query {
  // This is the lite version of the Query class in the main SDK.
  /** @hideconstructor protected */
  constructor(t, e, r) {
    this.converter = e, this._query = r, /** The type of this Firestore reference. */
    this.type = "query", this.firestore = t;
  }
  withConverter(t) {
    return new _Query(this.firestore, t, this._query);
  }
};
var DocumentReference = class _DocumentReference {
  /** @hideconstructor */
  constructor(t, e, r) {
    this.converter = e, this._key = r, /** The type of this Firestore reference. */
    this.type = "document", this.firestore = t;
  }
  get _path() {
    return this._key.path;
  }
  /**
   * The document's identifier within its collection.
   */
  get id() {
    return this._key.path.lastSegment();
  }
  /**
   * A string representing the path of the referenced document (relative
   * to the root of the database).
   */
  get path() {
    return this._key.path.canonicalString();
  }
  /**
   * The collection this `DocumentReference` belongs to.
   */
  get parent() {
    return new CollectionReference(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(t) {
    return new _DocumentReference(this.firestore, t, this._key);
  }
};
var CollectionReference = class _CollectionReference extends Query {
  /** @hideconstructor */
  constructor(t, e, r) {
    super(t, e, function __PRIVATE_newQueryForPath(t2) {
      return new __PRIVATE_QueryImpl(t2);
    }(r)), this._path = r, /** The type of this Firestore reference. */
    this.type = "collection";
  }
  /** The collection's identifier. */
  get id() {
    return this._query.path.lastSegment();
  }
  /**
   * A string representing the path of the referenced collection (relative
   * to the root of the database).
   */
  get path() {
    return this._query.path.canonicalString();
  }
  /**
   * A reference to the containing `DocumentReference` if this is a
   * subcollection. If this isn't a subcollection, the reference is null.
   */
  get parent() {
    const t = this._path.popLast();
    return t.isEmpty() ? null : new DocumentReference(
      this.firestore,
      /* converter= */
      null,
      new DocumentKey(t)
    );
  }
  withConverter(t) {
    return new _CollectionReference(this.firestore, t, this._path);
  }
};
function collection(t, e, ...r) {
  if (t = getModularInstance(t), __PRIVATE_validateNonEmptyArgument("collection", "path", e), t instanceof Firestore) {
    const n = ResourcePath.fromString(e, ...r);
    return __PRIVATE_validateCollectionPath(n), new CollectionReference(
      t,
      /* converter= */
      null,
      n
    );
  }
  {
    if (!(t instanceof DocumentReference || t instanceof CollectionReference)) throw new FirestoreError(T, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    const n = t._path.child(ResourcePath.fromString(e, ...r));
    return __PRIVATE_validateCollectionPath(n), new CollectionReference(
      t.firestore,
      /* converter= */
      null,
      n
    );
  }
}
function collectionGroup(t, e) {
  if (t = __PRIVATE_cast(t, Firestore), __PRIVATE_validateNonEmptyArgument("collectionGroup", "collection id", e), e.indexOf("/") >= 0) throw new FirestoreError(T, `Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);
  return new Query(
    t,
    /* converter= */
    null,
    function __PRIVATE_newQueryForCollectionGroup(t2) {
      return new __PRIVATE_QueryImpl(ResourcePath.emptyPath(), t2);
    }(e)
  );
}
function doc(t, e, ...r) {
  if (t = getModularInstance(t), // We allow omission of 'pathString' but explicitly prohibit passing in both
  // 'undefined' and 'null'.
  1 === arguments.length && (e = __PRIVATE_AutoId.newId()), __PRIVATE_validateNonEmptyArgument("doc", "path", e), t instanceof Firestore) {
    const n = ResourcePath.fromString(e, ...r);
    return __PRIVATE_validateDocumentPath(n), new DocumentReference(
      t,
      /* converter= */
      null,
      new DocumentKey(n)
    );
  }
  {
    if (!(t instanceof DocumentReference || t instanceof CollectionReference)) throw new FirestoreError(T, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    const n = t._path.child(ResourcePath.fromString(e, ...r));
    return __PRIVATE_validateDocumentPath(n), new DocumentReference(t.firestore, t instanceof CollectionReference ? t.converter : null, new DocumentKey(n));
  }
}
function refEqual(t, e) {
  return t = getModularInstance(t), e = getModularInstance(e), (t instanceof DocumentReference || t instanceof CollectionReference) && (e instanceof DocumentReference || e instanceof CollectionReference) && (t.firestore === e.firestore && t.path === e.path && t.converter === e.converter);
}
function queryEqual(t, e) {
  return t = getModularInstance(t), e = getModularInstance(e), t instanceof Query && e instanceof Query && (t.firestore === e.firestore && __PRIVATE_queryEquals(t._query, e._query) && t.converter === e.converter);
}
var Bytes = class _Bytes {
  /** @hideconstructor */
  constructor(t) {
    this._byteString = t;
  }
  /**
   * Creates a new `Bytes` object from the given Base64 string, converting it to
   * bytes.
   *
   * @param base64 - The Base64 string used to create the `Bytes` object.
   */
  static fromBase64String(t) {
    try {
      return new _Bytes(ByteString.fromBase64String(t));
    } catch (t2) {
      throw new FirestoreError(T, "Failed to construct data from Base64 string: " + t2);
    }
  }
  /**
   * Creates a new `Bytes` object from the given Uint8Array.
   *
   * @param array - The Uint8Array used to create the `Bytes` object.
   */
  static fromUint8Array(t) {
    return new _Bytes(ByteString.fromUint8Array(t));
  }
  /**
   * Returns the underlying bytes as a Base64-encoded string.
   *
   * @returns The Base64-encoded string created from the `Bytes` object.
   */
  toBase64() {
    return this._byteString.toBase64();
  }
  /**
   * Returns the underlying bytes in a new `Uint8Array`.
   *
   * @returns The Uint8Array created from the `Bytes` object.
   */
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  /**
   * Returns a string representation of the `Bytes` object.
   *
   * @returns A string representation of the `Bytes` object.
   */
  toString() {
    return "Bytes(base64: " + this.toBase64() + ")";
  }
  /**
   * Returns true if this `Bytes` object is equal to the provided one.
   *
   * @param other - The `Bytes` object to compare against.
   * @returns true if this `Bytes` object is equal to the provided one.
   */
  isEqual(t) {
    return this._byteString.isEqual(t._byteString);
  }
};
var FieldPath = class {
  /**
   * Creates a `FieldPath` from the provided field names. If more than one field
   * name is provided, the path will point to a nested field in a document.
   *
   * @param fieldNames - A list of field names.
   */
  constructor(...t) {
    for (let e = 0; e < t.length; ++e) if (0 === t[e].length) throw new FirestoreError(T, "Invalid field name at argument $(i + 1). Field names must not be empty.");
    this._internalPath = new FieldPath$1(t);
  }
  /**
   * Returns true if this `FieldPath` is equal to the provided one.
   *
   * @param other - The `FieldPath` to compare against.
   * @returns true if this `FieldPath` is equal to the provided one.
   */
  isEqual(t) {
    return this._internalPath.isEqual(t._internalPath);
  }
};
function documentId() {
  return new FieldPath("__name__");
}
var FieldValue = class {
  /**
   * @param _methodName - The public API endpoint that returns this class.
   * @hideconstructor
   */
  constructor(t) {
    this._methodName = t;
  }
};
var GeoPoint = class {
  /**
   * Creates a new immutable `GeoPoint` object with the provided latitude and
   * longitude values.
   * @param latitude - The latitude as number between -90 and 90.
   * @param longitude - The longitude as number between -180 and 180.
   */
  constructor(t, e) {
    if (!isFinite(t) || t < -90 || t > 90) throw new FirestoreError(T, "Latitude must be a number between -90 and 90, but was: " + t);
    if (!isFinite(e) || e < -180 || e > 180) throw new FirestoreError(T, "Longitude must be a number between -180 and 180, but was: " + e);
    this._lat = t, this._long = e;
  }
  /**
   * The latitude of this `GeoPoint` instance.
   */
  get latitude() {
    return this._lat;
  }
  /**
   * The longitude of this `GeoPoint` instance.
   */
  get longitude() {
    return this._long;
  }
  /**
   * Returns true if this `GeoPoint` is equal to the provided one.
   *
   * @param other - The `GeoPoint` to compare against.
   * @returns true if this `GeoPoint` is equal to the provided one.
   */
  isEqual(t) {
    return this._lat === t._lat && this._long === t._long;
  }
  /** Returns a JSON-serializable representation of this GeoPoint. */
  toJSON() {
    return {
      latitude: this._lat,
      longitude: this._long
    };
  }
  /**
   * Actually private to JS consumers of our API, so this function is prefixed
   * with an underscore.
   */
  _compareTo(t) {
    return __PRIVATE_primitiveComparator(this._lat, t._lat) || __PRIVATE_primitiveComparator(this._long, t._long);
  }
};
var VectorValue = class {
  /**
   * @private
   * @internal
   */
  constructor(t) {
    this._values = (t || []).map((t2) => t2);
  }
  /**
   * Returns a copy of the raw number array form of the vector.
   */
  toArray() {
    return this._values.map((t) => t);
  }
  /**
   * Returns `true` if the two VectorValue has the same raw number arrays, returns `false` otherwise.
   */
  isEqual(t) {
    return function __PRIVATE_isPrimitiveArrayEqual(t2, e) {
      if (t2.length !== e.length) return false;
      for (let r = 0; r < t2.length; ++r) if (t2[r] !== e[r]) return false;
      return true;
    }(this._values, t._values);
  }
};
var U = /^__.*__$/;
var ParsedSetData = class {
  constructor(t, e, r) {
    this.data = t, this.fieldMask = e, this.fieldTransforms = r;
  }
  toMutation(t, e) {
    return null !== this.fieldMask ? new __PRIVATE_PatchMutation(t, this.data, this.fieldMask, e, this.fieldTransforms) : new __PRIVATE_SetMutation(t, this.data, e, this.fieldTransforms);
  }
};
var ParsedUpdateData = class {
  constructor(t, e, r) {
    this.data = t, this.fieldMask = e, this.fieldTransforms = r;
  }
  toMutation(t, e) {
    return new __PRIVATE_PatchMutation(t, this.data, this.fieldMask, e, this.fieldTransforms);
  }
};
function __PRIVATE_isWrite(t) {
  switch (t) {
    case 0:
    case 2:
    case 1:
      return true;
    case 3:
    case 4:
      return false;
    default:
      throw fail();
  }
}
var __PRIVATE_ParseContextImpl = class ___PRIVATE_ParseContextImpl {
  /**
   * Initializes a ParseContext with the given source and path.
   *
   * @param settings - The settings for the parser.
   * @param databaseId - The database ID of the Firestore instance.
   * @param serializer - The serializer to use to generate the Value proto.
   * @param ignoreUndefinedProperties - Whether to ignore undefined properties
   * rather than throw.
   * @param fieldTransforms - A mutable list of field transforms encountered
   * while parsing the data.
   * @param fieldMask - A mutable list of field paths encountered while parsing
   * the data.
   *
   * TODO(b/34871131): We don't support array paths right now, so path can be
   * null to indicate the context represents any location within an array (in
   * which case certain features will not work and errors will be somewhat
   * compromised).
   */
  constructor(t, e, r, n, i, s) {
    this.settings = t, this.databaseId = e, this.serializer = r, this.ignoreUndefinedProperties = n, // Minor hack: If fieldTransforms is undefined, we assume this is an
    // external call and we need to validate the entire path.
    void 0 === i && this.tt(), this.fieldTransforms = i || [], this.fieldMask = s || [];
  }
  get path() {
    return this.settings.path;
  }
  get et() {
    return this.settings.et;
  }
  /** Returns a new context with the specified settings overwritten. */
  rt(t) {
    return new ___PRIVATE_ParseContextImpl(Object.assign(Object.assign({}, this.settings), t), this.databaseId, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask);
  }
  nt(t) {
    var e;
    const r = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), n = this.rt({
      path: r,
      it: false
    });
    return n.st(t), n;
  }
  ot(t) {
    var e;
    const r = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), n = this.rt({
      path: r,
      it: false
    });
    return n.tt(), n;
  }
  ut(t) {
    return this.rt({
      path: void 0,
      it: true
    });
  }
  _t(t) {
    return __PRIVATE_createError(t, this.settings.methodName, this.settings.ct || false, this.path, this.settings.lt);
  }
  /** Returns 'true' if 'fieldPath' was traversed when creating this context. */
  contains(t) {
    return void 0 !== this.fieldMask.find((e) => t.isPrefixOf(e)) || void 0 !== this.fieldTransforms.find((e) => t.isPrefixOf(e.field));
  }
  tt() {
    if (this.path) for (let t = 0; t < this.path.length; t++) this.st(this.path.get(t));
  }
  st(t) {
    if (0 === t.length) throw this._t("Document fields must not be empty");
    if (__PRIVATE_isWrite(this.et) && U.test(t)) throw this._t('Document fields cannot begin and end with "__"');
  }
};
var __PRIVATE_UserDataReader = class {
  constructor(t, e, r) {
    this.databaseId = t, this.ignoreUndefinedProperties = e, this.serializer = r || __PRIVATE_newSerializer(t);
  }
  /** Creates a new top-level parse context. */
  ht(t, e, r, n = false) {
    return new __PRIVATE_ParseContextImpl({
      et: t,
      methodName: e,
      lt: r,
      path: FieldPath$1.emptyPath(),
      it: false,
      ct: n
    }, this.databaseId, this.serializer, this.ignoreUndefinedProperties);
  }
};
function __PRIVATE_newUserDataReader(t) {
  const e = t._freezeSettings(), r = __PRIVATE_newSerializer(t._databaseId);
  return new __PRIVATE_UserDataReader(t._databaseId, !!e.ignoreUndefinedProperties, r);
}
function __PRIVATE_parseSetData(t, e, r, n, i, s = {}) {
  const o = t.ht(s.merge || s.mergeFields ? 2 : 0, e, r, i);
  __PRIVATE_validatePlainObject("Data must be an object, but it was:", o, n);
  const a = __PRIVATE_parseObject(n, o);
  let u, _;
  if (s.merge) u = new FieldMask(o.fieldMask), _ = o.fieldTransforms;
  else if (s.mergeFields) {
    const t2 = [];
    for (const n2 of s.mergeFields) {
      const i2 = __PRIVATE_fieldPathFromArgument$1(e, n2, r);
      if (!o.contains(i2)) throw new FirestoreError(T, `Field '${i2}' is specified in your field mask but missing from your input data.`);
      __PRIVATE_fieldMaskContains(t2, i2) || t2.push(i2);
    }
    u = new FieldMask(t2), _ = o.fieldTransforms.filter((t3) => u.covers(t3.field));
  } else u = null, _ = o.fieldTransforms;
  return new ParsedSetData(new ObjectValue(a), u, _);
}
var __PRIVATE_DeleteFieldValueImpl = class ___PRIVATE_DeleteFieldValueImpl extends FieldValue {
  _toFieldTransform(t) {
    if (2 !== t.et) throw 1 === t.et ? t._t(`${this._methodName}() can only appear at the top level of your update data`) : t._t(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);
    return t.fieldMask.push(t.path), null;
  }
  isEqual(t) {
    return t instanceof ___PRIVATE_DeleteFieldValueImpl;
  }
};
function __PRIVATE_createSentinelChildContext(t, e, r) {
  return new __PRIVATE_ParseContextImpl({
    et: 3,
    lt: e.settings.lt,
    methodName: t._methodName,
    it: r
  }, e.databaseId, e.serializer, e.ignoreUndefinedProperties);
}
var __PRIVATE_ServerTimestampFieldValueImpl = class ___PRIVATE_ServerTimestampFieldValueImpl extends FieldValue {
  _toFieldTransform(t) {
    return new FieldTransform(t.path, new __PRIVATE_ServerTimestampTransform());
  }
  isEqual(t) {
    return t instanceof ___PRIVATE_ServerTimestampFieldValueImpl;
  }
};
var __PRIVATE_ArrayUnionFieldValueImpl = class ___PRIVATE_ArrayUnionFieldValueImpl extends FieldValue {
  constructor(t, e) {
    super(t), this.dt = e;
  }
  _toFieldTransform(t) {
    const e = __PRIVATE_createSentinelChildContext(
      this,
      t,
      /*array=*/
      true
    ), r = this.dt.map((t2) => __PRIVATE_parseData(t2, e)), n = new __PRIVATE_ArrayUnionTransformOperation(r);
    return new FieldTransform(t.path, n);
  }
  isEqual(t) {
    return t instanceof ___PRIVATE_ArrayUnionFieldValueImpl && deepEqual(this.dt, t.dt);
  }
};
var __PRIVATE_ArrayRemoveFieldValueImpl = class ___PRIVATE_ArrayRemoveFieldValueImpl extends FieldValue {
  constructor(t, e) {
    super(t), this.dt = e;
  }
  _toFieldTransform(t) {
    const e = __PRIVATE_createSentinelChildContext(
      this,
      t,
      /*array=*/
      true
    ), r = this.dt.map((t2) => __PRIVATE_parseData(t2, e)), n = new __PRIVATE_ArrayRemoveTransformOperation(r);
    return new FieldTransform(t.path, n);
  }
  isEqual(t) {
    return t instanceof ___PRIVATE_ArrayRemoveFieldValueImpl && deepEqual(this.dt, t.dt);
  }
};
var __PRIVATE_NumericIncrementFieldValueImpl = class ___PRIVATE_NumericIncrementFieldValueImpl extends FieldValue {
  constructor(t, e) {
    super(t), this.ft = e;
  }
  _toFieldTransform(t) {
    const e = new __PRIVATE_NumericIncrementTransformOperation(t.serializer, toNumber(t.serializer, this.ft));
    return new FieldTransform(t.path, e);
  }
  isEqual(t) {
    return t instanceof ___PRIVATE_NumericIncrementFieldValueImpl && this.ft === t.ft;
  }
};
function __PRIVATE_parseUpdateData(t, e, r, n) {
  const i = t.ht(1, e, r);
  __PRIVATE_validatePlainObject("Data must be an object, but it was:", i, n);
  const s = [], o = ObjectValue.empty();
  forEach(n, (t2, n2) => {
    const a2 = __PRIVATE_fieldPathFromDotSeparatedString(e, t2, r);
    n2 = getModularInstance(n2);
    const u = i.ot(a2);
    if (n2 instanceof __PRIVATE_DeleteFieldValueImpl)
      s.push(a2);
    else {
      const t3 = __PRIVATE_parseData(n2, u);
      null != t3 && (s.push(a2), o.set(a2, t3));
    }
  });
  const a = new FieldMask(s);
  return new ParsedUpdateData(o, a, i.fieldTransforms);
}
function __PRIVATE_parseUpdateVarargs(t, e, r, n, i, s) {
  const o = t.ht(1, e, r), a = [__PRIVATE_fieldPathFromArgument$1(e, n, r)], u = [i];
  if (s.length % 2 != 0) throw new FirestoreError(T, `Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);
  for (let t2 = 0; t2 < s.length; t2 += 2) a.push(__PRIVATE_fieldPathFromArgument$1(e, s[t2])), u.push(s[t2 + 1]);
  const _ = [], c = ObjectValue.empty();
  for (let t2 = a.length - 1; t2 >= 0; --t2) if (!__PRIVATE_fieldMaskContains(_, a[t2])) {
    const e2 = a[t2];
    let r2 = u[t2];
    r2 = getModularInstance(r2);
    const n2 = o.ot(e2);
    if (r2 instanceof __PRIVATE_DeleteFieldValueImpl)
      _.push(e2);
    else {
      const t3 = __PRIVATE_parseData(r2, n2);
      null != t3 && (_.push(e2), c.set(e2, t3));
    }
  }
  const h = new FieldMask(_);
  return new ParsedUpdateData(c, h, o.fieldTransforms);
}
function __PRIVATE_parseQueryValue(t, e, r, n = false) {
  return __PRIVATE_parseData(r, t.ht(n ? 4 : 3, e));
}
function __PRIVATE_parseData(t, e) {
  if (__PRIVATE_looksLikeJsonObject(
    // Unwrap the API type from the Compat SDK. This will return the API type
    // from firestore-exp.
    t = getModularInstance(t)
  )) return __PRIVATE_validatePlainObject("Unsupported field value:", e, t), __PRIVATE_parseObject(t, e);
  if (t instanceof FieldValue)
    return function __PRIVATE_parseSentinelFieldValue(t2, e2) {
      if (!__PRIVATE_isWrite(e2.et)) throw e2._t(`${t2._methodName}() can only be used with update() and set()`);
      if (!e2.path) throw e2._t(`${t2._methodName}() is not currently supported inside arrays`);
      const r = t2._toFieldTransform(e2);
      r && e2.fieldTransforms.push(r);
    }(t, e), null;
  if (void 0 === t && e.ignoreUndefinedProperties)
    return null;
  if (
    // If context.path is null we are inside an array and we don't support
    // field mask paths more granular than the top-level array.
    e.path && e.fieldMask.push(e.path), t instanceof Array
  ) {
    if (e.settings.it && 4 !== e.et) throw e._t("Nested arrays are not supported");
    return function __PRIVATE_parseArray(t2, e2) {
      const r = [];
      let n = 0;
      for (const i of t2) {
        let t3 = __PRIVATE_parseData(i, e2.ut(n));
        null == t3 && // Just include nulls in the array for fields being replaced with a
        // sentinel.
        (t3 = {
          nullValue: "NULL_VALUE"
        }), r.push(t3), n++;
      }
      return {
        arrayValue: {
          values: r
        }
      };
    }(t, e);
  }
  return function __PRIVATE_parseScalarValue(t2, e2) {
    if (null === (t2 = getModularInstance(t2))) return {
      nullValue: "NULL_VALUE"
    };
    if ("number" == typeof t2) return toNumber(e2.serializer, t2);
    if ("boolean" == typeof t2) return {
      booleanValue: t2
    };
    if ("string" == typeof t2) return {
      stringValue: t2
    };
    if (t2 instanceof Date) {
      const r = Timestamp.fromDate(t2);
      return {
        timestampValue: toTimestamp(e2.serializer, r)
      };
    }
    if (t2 instanceof Timestamp) {
      const r = new Timestamp(t2.seconds, 1e3 * Math.floor(t2.nanoseconds / 1e3));
      return {
        timestampValue: toTimestamp(e2.serializer, r)
      };
    }
    if (t2 instanceof GeoPoint) return {
      geoPointValue: {
        latitude: t2.latitude,
        longitude: t2.longitude
      }
    };
    if (t2 instanceof Bytes) return {
      bytesValue: __PRIVATE_toBytes(e2.serializer, t2._byteString)
    };
    if (t2 instanceof DocumentReference) {
      const r = e2.databaseId, n = t2.firestore._databaseId;
      if (!n.isEqual(r)) throw e2._t(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${r.projectId}/${r.database}`);
      return {
        referenceValue: __PRIVATE_toResourceName(t2.firestore._databaseId || e2.databaseId, t2._key.path)
      };
    }
    if (t2 instanceof VectorValue)
      return function __PRIVATE_parseVectorValue(t3, e3) {
        return {
          mapValue: {
            fields: {
              __type__: {
                stringValue: "__vector__"
              },
              value: {
                arrayValue: {
                  values: t3.toArray().map((t4) => {
                    if ("number" != typeof t4) throw e3._t("VectorValues must only contain numeric values.");
                    return __PRIVATE_toDouble(e3.serializer, t4);
                  })
                }
              }
            }
          }
        };
      }(t2, e2);
    throw e2._t(`Unsupported field value: ${__PRIVATE_valueDescription(t2)}`);
  }(t, e);
}
function __PRIVATE_parseObject(t, e) {
  const r = {};
  return !function isEmpty(t2) {
    for (const e2 in t2) if (Object.prototype.hasOwnProperty.call(t2, e2)) return false;
    return true;
  }(t) ? forEach(t, (t2, n) => {
    const i = __PRIVATE_parseData(n, e.nt(t2));
    null != i && (r[t2] = i);
  }) : (
    // If we encounter an empty object, we explicitly add it to the update
    // mask to ensure that the server creates a map entry.
    e.path && e.path.length > 0 && e.fieldMask.push(e.path)
  ), {
    mapValue: {
      fields: r
    }
  };
}
function __PRIVATE_looksLikeJsonObject(t) {
  return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof Timestamp || t instanceof GeoPoint || t instanceof Bytes || t instanceof DocumentReference || t instanceof FieldValue || t instanceof VectorValue);
}
function __PRIVATE_validatePlainObject(t, e, r) {
  if (!__PRIVATE_looksLikeJsonObject(r) || !function __PRIVATE_isPlainObject(t2) {
    return "object" == typeof t2 && null !== t2 && (Object.getPrototypeOf(t2) === Object.prototype || null === Object.getPrototypeOf(t2));
  }(r)) {
    const n = __PRIVATE_valueDescription(r);
    throw "an object" === n ? e._t(t + " a custom object") : e._t(t + " " + n);
  }
}
function __PRIVATE_fieldPathFromArgument$1(t, e, r) {
  if (
    // If required, replace the FieldPath Compat class with the firestore-exp
    // FieldPath.
    (e = getModularInstance(e)) instanceof FieldPath
  ) return e._internalPath;
  if ("string" == typeof e) return __PRIVATE_fieldPathFromDotSeparatedString(t, e);
  throw __PRIVATE_createError(
    "Field path arguments must be of type string or ",
    t,
    /* hasConverter= */
    false,
    /* path= */
    void 0,
    r
  );
}
var j = new RegExp("[~\\*/\\[\\]]");
function __PRIVATE_fieldPathFromDotSeparatedString(t, e, r) {
  if (e.search(j) >= 0) throw __PRIVATE_createError(
    `Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,
    t,
    /* hasConverter= */
    false,
    /* path= */
    void 0,
    r
  );
  try {
    return new FieldPath(...e.split("."))._internalPath;
  } catch (n) {
    throw __PRIVATE_createError(
      `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      t,
      /* hasConverter= */
      false,
      /* path= */
      void 0,
      r
    );
  }
}
function __PRIVATE_createError(t, e, r, n, i) {
  const s = n && !n.isEmpty(), o = void 0 !== i;
  let a = `Function ${e}() called with invalid data`;
  r && (a += " (via `toFirestore()`)"), a += ". ";
  let u = "";
  return (s || o) && (u += " (found", s && (u += ` in field ${n}`), o && (u += ` in document ${i}`), u += ")"), new FirestoreError(T, a + t + u);
}
function __PRIVATE_fieldMaskContains(t, e) {
  return t.some((t2) => t2.isEqual(e));
}
var DocumentSnapshot = class {
  // Note: This class is stripped down version of the DocumentSnapshot in
  // the legacy SDK. The changes are:
  // - No support for SnapshotMetadata.
  // - No support for SnapshotOptions.
  /** @hideconstructor protected */
  constructor(t, e, r, n, i) {
    this._firestore = t, this._userDataWriter = e, this._key = r, this._document = n, this._converter = i;
  }
  /** Property of the `DocumentSnapshot` that provides the document's ID. */
  get id() {
    return this._key.path.lastSegment();
  }
  /**
   * The `DocumentReference` for the document included in the `DocumentSnapshot`.
   */
  get ref() {
    return new DocumentReference(this._firestore, this._converter, this._key);
  }
  /**
   * Signals whether or not the document at the snapshot's location exists.
   *
   * @returns true if the document exists.
   */
  exists() {
    return null !== this._document;
  }
  /**
   * Retrieves all fields in the document as an `Object`. Returns `undefined` if
   * the document doesn't exist.
   *
   * @returns An `Object` containing all fields in the document or `undefined`
   * if the document doesn't exist.
   */
  data() {
    if (this._document) {
      if (this._converter) {
        const t = new QueryDocumentSnapshot(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          /* converter= */
          null
        );
        return this._converter.fromFirestore(t);
      }
      return this._userDataWriter.convertValue(this._document.data.value);
    }
  }
  /**
   * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
   * document or field doesn't exist.
   *
   * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
   * field.
   * @returns The data at the specified field location or undefined if no such
   * field exists in the document.
   */
  // We are using `any` here to avoid an explicit cast by our users.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get(t) {
    if (this._document) {
      const e = this._document.data.field(__PRIVATE_fieldPathFromArgument("DocumentSnapshot.get", t));
      if (null !== e) return this._userDataWriter.convertValue(e);
    }
  }
};
var QueryDocumentSnapshot = class extends DocumentSnapshot {
  /**
   * Retrieves all fields in the document as an `Object`.
   *
   * @override
   * @returns An `Object` containing all fields in the document.
   */
  data() {
    return super.data();
  }
};
var QuerySnapshot = class {
  /** @hideconstructor */
  constructor(t, e) {
    this._docs = e, this.query = t;
  }
  /** An array of all the documents in the `QuerySnapshot`. */
  get docs() {
    return [...this._docs];
  }
  /** The number of documents in the `QuerySnapshot`. */
  get size() {
    return this.docs.length;
  }
  /** True if there are no documents in the `QuerySnapshot`. */
  get empty() {
    return 0 === this.docs.length;
  }
  /**
   * Enumerates all of the documents in the `QuerySnapshot`.
   *
   * @param callback - A callback to be called with a `QueryDocumentSnapshot` for
   * each document in the snapshot.
   * @param thisArg - The `this` binding for the callback.
   */
  forEach(t, e) {
    this._docs.forEach(t, e);
  }
};
function snapshotEqual(t, e) {
  return t = getModularInstance(t), e = getModularInstance(e), t instanceof DocumentSnapshot && e instanceof DocumentSnapshot ? t._firestore === e._firestore && t._key.isEqual(e._key) && (null === t._document ? null === e._document : t._document.isEqual(e._document)) && t._converter === e._converter : t instanceof QuerySnapshot && e instanceof QuerySnapshot && (queryEqual(t.query, e.query) && __PRIVATE_arrayEquals(t.docs, e.docs, snapshotEqual));
}
function __PRIVATE_fieldPathFromArgument(t, e) {
  return "string" == typeof e ? __PRIVATE_fieldPathFromDotSeparatedString(t, e) : e instanceof FieldPath ? e._internalPath : e._delegate._internalPath;
}
var AppliableConstraint = class {
};
var QueryConstraint = class extends AppliableConstraint {
};
function query(t, e, ...r) {
  let n = [];
  e instanceof AppliableConstraint && n.push(e), n = n.concat(r), function __PRIVATE_validateQueryConstraintArray(t2) {
    const e2 = t2.filter((t3) => t3 instanceof QueryCompositeFilterConstraint).length, r2 = t2.filter((t3) => t3 instanceof QueryFieldFilterConstraint).length;
    if (e2 > 1 || e2 > 0 && r2 > 0) throw new FirestoreError(T, "InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.");
  }(n);
  for (const e2 of n) t = e2._apply(t);
  return t;
}
var QueryFieldFilterConstraint = class _QueryFieldFilterConstraint extends QueryConstraint {
  /**
   * @internal
   */
  constructor(t, e, r) {
    super(), this._field = t, this._op = e, this._value = r, /** The type of this query constraint */
    this.type = "where";
  }
  static _create(t, e, r) {
    return new _QueryFieldFilterConstraint(t, e, r);
  }
  _apply(t) {
    const e = this._parse(t);
    return __PRIVATE_validateNewFieldFilter(t._query, e), new Query(t.firestore, t.converter, __PRIVATE_queryWithAddedFilter(t._query, e));
  }
  _parse(t) {
    const e = __PRIVATE_newUserDataReader(t.firestore), r = function __PRIVATE_newQueryFilter(t2, e2, r2, n, i, s, o) {
      let a;
      if (i.isKeyField()) {
        if ("array-contains" === s || "array-contains-any" === s) throw new FirestoreError(T, `Invalid Query. You can't perform '${s}' queries on documentId().`);
        if ("in" === s || "not-in" === s) {
          __PRIVATE_validateDisjunctiveFilterElements(o, s);
          const e3 = [];
          for (const r3 of o) e3.push(__PRIVATE_parseDocumentIdValue(n, t2, r3));
          a = {
            arrayValue: {
              values: e3
            }
          };
        } else a = __PRIVATE_parseDocumentIdValue(n, t2, o);
      } else "in" !== s && "not-in" !== s && "array-contains-any" !== s || __PRIVATE_validateDisjunctiveFilterElements(o, s), a = __PRIVATE_parseQueryValue(
        r2,
        e2,
        o,
        /* allowArrays= */
        "in" === s || "not-in" === s
      );
      return FieldFilter.create(i, s, a);
    }(t._query, "where", e, t.firestore._databaseId, this._field, this._op, this._value);
    return r;
  }
};
function where(t, e, r) {
  const n = e, i = __PRIVATE_fieldPathFromArgument("where", t);
  return QueryFieldFilterConstraint._create(i, n, r);
}
var QueryCompositeFilterConstraint = class _QueryCompositeFilterConstraint extends AppliableConstraint {
  /**
   * @internal
   */
  constructor(t, e) {
    super(), this.type = t, this._queryConstraints = e;
  }
  static _create(t, e) {
    return new _QueryCompositeFilterConstraint(t, e);
  }
  _parse(t) {
    const e = this._queryConstraints.map((e2) => e2._parse(t)).filter((t2) => t2.getFilters().length > 0);
    return 1 === e.length ? e[0] : CompositeFilter.create(e, this._getOperator());
  }
  _apply(t) {
    const e = this._parse(t);
    return 0 === e.getFilters().length ? t : (function __PRIVATE_validateNewFilter(t2, e2) {
      let r = t2;
      const n = e2.getFlattenedFilters();
      for (const t3 of n) __PRIVATE_validateNewFieldFilter(r, t3), r = __PRIVATE_queryWithAddedFilter(r, t3);
    }(t._query, e), new Query(t.firestore, t.converter, __PRIVATE_queryWithAddedFilter(t._query, e)));
  }
  _getQueryConstraints() {
    return this._queryConstraints;
  }
  _getOperator() {
    return "and" === this.type ? "and" : "or";
  }
};
function or(...t) {
  return t.forEach((t2) => __PRIVATE_validateQueryFilterConstraint("or", t2)), QueryCompositeFilterConstraint._create("or", t);
}
function and(...t) {
  return t.forEach((t2) => __PRIVATE_validateQueryFilterConstraint("and", t2)), QueryCompositeFilterConstraint._create("and", t);
}
var QueryOrderByConstraint = class _QueryOrderByConstraint extends QueryConstraint {
  /**
   * @internal
   */
  constructor(t, e) {
    super(), this._field = t, this._direction = e, /** The type of this query constraint */
    this.type = "orderBy";
  }
  static _create(t, e) {
    return new _QueryOrderByConstraint(t, e);
  }
  _apply(t) {
    const e = function __PRIVATE_newQueryOrderBy(t2, e2, r) {
      if (null !== t2.startAt) throw new FirestoreError(T, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
      if (null !== t2.endAt) throw new FirestoreError(T, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
      return new OrderBy(e2, r);
    }(t._query, this._field, this._direction);
    return new Query(t.firestore, t.converter, function __PRIVATE_queryWithAddedOrderBy(t2, e2) {
      const r = t2.explicitOrderBy.concat([e2]);
      return new __PRIVATE_QueryImpl(t2.path, t2.collectionGroup, r, t2.filters.slice(), t2.limit, t2.limitType, t2.startAt, t2.endAt);
    }(t._query, e));
  }
};
function orderBy(t, e = "asc") {
  const r = e, n = __PRIVATE_fieldPathFromArgument("orderBy", t);
  return QueryOrderByConstraint._create(n, r);
}
var QueryLimitConstraint = class _QueryLimitConstraint extends QueryConstraint {
  /**
   * @internal
   */
  constructor(t, e, r) {
    super(), this.type = t, this._limit = e, this._limitType = r;
  }
  static _create(t, e, r) {
    return new _QueryLimitConstraint(t, e, r);
  }
  _apply(t) {
    return new Query(t.firestore, t.converter, function __PRIVATE_queryWithLimit(t2, e, r) {
      return new __PRIVATE_QueryImpl(t2.path, t2.collectionGroup, t2.explicitOrderBy.slice(), t2.filters.slice(), e, r, t2.startAt, t2.endAt);
    }(t._query, this._limit, this._limitType));
  }
};
function limit(t) {
  return __PRIVATE_validatePositiveNumber("limit", t), QueryLimitConstraint._create(
    "limit",
    t,
    "F"
    /* LimitType.First */
  );
}
function limitToLast(t) {
  return __PRIVATE_validatePositiveNumber("limitToLast", t), QueryLimitConstraint._create(
    "limitToLast",
    t,
    "L"
    /* LimitType.Last */
  );
}
var QueryStartAtConstraint = class _QueryStartAtConstraint extends QueryConstraint {
  /**
   * @internal
   */
  constructor(t, e, r) {
    super(), this.type = t, this._docOrFields = e, this._inclusive = r;
  }
  static _create(t, e, r) {
    return new _QueryStartAtConstraint(t, e, r);
  }
  _apply(t) {
    const e = __PRIVATE_newQueryBoundFromDocOrFields(t, this.type, this._docOrFields, this._inclusive);
    return new Query(t.firestore, t.converter, function __PRIVATE_queryWithStartAt(t2, e2) {
      return new __PRIVATE_QueryImpl(t2.path, t2.collectionGroup, t2.explicitOrderBy.slice(), t2.filters.slice(), t2.limit, t2.limitType, e2, t2.endAt);
    }(t._query, e));
  }
};
function startAt(...t) {
  return QueryStartAtConstraint._create(
    "startAt",
    t,
    /*inclusive=*/
    true
  );
}
function startAfter(...t) {
  return QueryStartAtConstraint._create(
    "startAfter",
    t,
    /*inclusive=*/
    false
  );
}
var QueryEndAtConstraint = class _QueryEndAtConstraint extends QueryConstraint {
  /**
   * @internal
   */
  constructor(t, e, r) {
    super(), this.type = t, this._docOrFields = e, this._inclusive = r;
  }
  static _create(t, e, r) {
    return new _QueryEndAtConstraint(t, e, r);
  }
  _apply(t) {
    const e = __PRIVATE_newQueryBoundFromDocOrFields(t, this.type, this._docOrFields, this._inclusive);
    return new Query(t.firestore, t.converter, function __PRIVATE_queryWithEndAt(t2, e2) {
      return new __PRIVATE_QueryImpl(t2.path, t2.collectionGroup, t2.explicitOrderBy.slice(), t2.filters.slice(), t2.limit, t2.limitType, t2.startAt, e2);
    }(t._query, e));
  }
};
function endBefore(...t) {
  return QueryEndAtConstraint._create(
    "endBefore",
    t,
    /*inclusive=*/
    false
  );
}
function endAt(...t) {
  return QueryEndAtConstraint._create(
    "endAt",
    t,
    /*inclusive=*/
    true
  );
}
function __PRIVATE_newQueryBoundFromDocOrFields(t, e, r, n) {
  if (r[0] = getModularInstance(r[0]), r[0] instanceof DocumentSnapshot) return function __PRIVATE_newQueryBoundFromDocument(t2, e2, r2, n2, i) {
    if (!n2) throw new FirestoreError(P, `Can't use a DocumentSnapshot that doesn't exist for ${r2}().`);
    const s = [];
    for (const r3 of __PRIVATE_queryNormalizedOrderBy(t2)) if (r3.field.isKeyField()) s.push(__PRIVATE_refValue(e2, n2.key));
    else {
      const t3 = n2.data.field(r3.field);
      if (__PRIVATE_isServerTimestamp(t3)) throw new FirestoreError(T, 'Invalid query. You are trying to start or end a query using a document for which the field "' + r3.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
      if (null === t3) {
        const t4 = r3.field.canonicalString();
        throw new FirestoreError(T, `Invalid query. You are trying to start or end a query using a document for which the field '${t4}' (used as the orderBy) does not exist.`);
      }
      s.push(t3);
    }
    return new Bound(s, i);
  }(t._query, t.firestore._databaseId, e, r[0]._document, n);
  {
    const i = __PRIVATE_newUserDataReader(t.firestore);
    return function __PRIVATE_newQueryBoundFromFields(t2, e2, r2, n2, i2, s) {
      const o = t2.explicitOrderBy;
      if (i2.length > o.length) throw new FirestoreError(T, `Too many arguments provided to ${n2}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);
      const a = [];
      for (let s2 = 0; s2 < i2.length; s2++) {
        const u = i2[s2];
        if (o[s2].field.isKeyField()) {
          if ("string" != typeof u) throw new FirestoreError(T, `Invalid query. Expected a string for document ID in ${n2}(), but got a ${typeof u}`);
          if (!__PRIVATE_isCollectionGroupQuery(t2) && -1 !== u.indexOf("/")) throw new FirestoreError(T, `Invalid query. When querying a collection and ordering by documentId(), the value passed to ${n2}() must be a plain document ID, but '${u}' contains a slash.`);
          const r3 = t2.path.child(ResourcePath.fromString(u));
          if (!DocumentKey.isDocumentKey(r3)) throw new FirestoreError(T, `Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${n2}() must result in a valid document path, but '${r3}' is not because it contains an odd number of segments.`);
          const i3 = new DocumentKey(r3);
          a.push(__PRIVATE_refValue(e2, i3));
        } else {
          const t3 = __PRIVATE_parseQueryValue(r2, n2, u);
          a.push(t3);
        }
      }
      return new Bound(a, s);
    }(t._query, t.firestore._databaseId, i, e, r, n);
  }
}
function __PRIVATE_parseDocumentIdValue(t, e, r) {
  if ("string" == typeof (r = getModularInstance(r))) {
    if ("" === r) throw new FirestoreError(T, "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");
    if (!__PRIVATE_isCollectionGroupQuery(e) && -1 !== r.indexOf("/")) throw new FirestoreError(T, `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${r}' contains a '/' character.`);
    const n = e.path.child(ResourcePath.fromString(r));
    if (!DocumentKey.isDocumentKey(n)) throw new FirestoreError(T, `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);
    return __PRIVATE_refValue(t, new DocumentKey(n));
  }
  if (r instanceof DocumentReference) return __PRIVATE_refValue(t, r._key);
  throw new FirestoreError(T, `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${__PRIVATE_valueDescription(r)}.`);
}
function __PRIVATE_validateDisjunctiveFilterElements(t, e) {
  if (!Array.isArray(t) || 0 === t.length) throw new FirestoreError(T, `Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);
}
function __PRIVATE_validateNewFieldFilter(t, e) {
  const r = function __PRIVATE_findOpInsideFilters(t2, e2) {
    for (const r2 of t2) for (const t3 of r2.getFlattenedFilters()) if (e2.indexOf(t3.op) >= 0) return t3.op;
    return null;
  }(t.filters, function __PRIVATE_conflictingOps(t2) {
    switch (t2) {
      case "!=":
        return [
          "!=",
          "not-in"
          /* Operator.NOT_IN */
        ];
      case "array-contains-any":
      case "in":
        return [
          "not-in"
          /* Operator.NOT_IN */
        ];
      case "not-in":
        return [
          "array-contains-any",
          "in",
          "not-in",
          "!="
          /* Operator.NOT_EQUAL */
        ];
      default:
        return [];
    }
  }(e.op));
  if (null !== r)
    throw r === e.op ? new FirestoreError(T, `Invalid query. You cannot use more than one '${e.op.toString()}' filter.`) : new FirestoreError(T, `Invalid query. You cannot use '${e.op.toString()}' filters with '${r.toString()}' filters.`);
}
function __PRIVATE_validateQueryFilterConstraint(t, e) {
  if (!(e instanceof QueryFieldFilterConstraint || e instanceof QueryCompositeFilterConstraint)) throw new FirestoreError(T, `Function ${t}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`);
}
function __PRIVATE_applyFirestoreDataConverter(t, e, r) {
  let n;
  return n = t ? r && (r.merge || r.mergeFields) ? t.toFirestore(e, r) : t.toFirestore(e) : e, n;
}
var __PRIVATE_LiteUserDataWriter = class extends class AbstractUserDataWriter {
  convertValue(t, e = "none") {
    switch (__PRIVATE_typeOrder(t)) {
      case 0:
        return null;
      case 1:
        return t.booleanValue;
      case 2:
        return __PRIVATE_normalizeNumber(t.integerValue || t.doubleValue);
      case 3:
        return this.convertTimestamp(t.timestampValue);
      case 4:
        return this.convertServerTimestamp(t, e);
      case 5:
        return t.stringValue;
      case 6:
        return this.convertBytes(__PRIVATE_normalizeByteString(t.bytesValue));
      case 7:
        return this.convertReference(t.referenceValue);
      case 8:
        return this.convertGeoPoint(t.geoPointValue);
      case 9:
        return this.convertArray(t.arrayValue, e);
      case 11:
        return this.convertObject(t.mapValue, e);
      case 10:
        return this.convertVectorValue(t.mapValue);
      default:
        throw fail();
    }
  }
  convertObject(t, e) {
    return this.convertObjectMap(t.fields, e);
  }
  /**
   * @internal
   */
  convertObjectMap(t, e = "none") {
    const r = {};
    return forEach(t, (t2, n) => {
      r[t2] = this.convertValue(n, e);
    }), r;
  }
  /**
   * @internal
   */
  convertVectorValue(t) {
    var e, r, n;
    const i = null === (n = null === (r = null === (e = t.fields) || void 0 === e ? void 0 : e.value.arrayValue) || void 0 === r ? void 0 : r.values) || void 0 === n ? void 0 : n.map((t2) => __PRIVATE_normalizeNumber(t2.doubleValue));
    return new VectorValue(i);
  }
  convertGeoPoint(t) {
    return new GeoPoint(__PRIVATE_normalizeNumber(t.latitude), __PRIVATE_normalizeNumber(t.longitude));
  }
  convertArray(t, e) {
    return (t.values || []).map((t2) => this.convertValue(t2, e));
  }
  convertServerTimestamp(t, e) {
    switch (e) {
      case "previous":
        const r = __PRIVATE_getPreviousValue(t);
        return null == r ? null : this.convertValue(r, e);
      case "estimate":
        return this.convertTimestamp(__PRIVATE_getLocalWriteTime(t));
      default:
        return null;
    }
  }
  convertTimestamp(t) {
    const e = __PRIVATE_normalizeTimestamp(t);
    return new Timestamp(e.seconds, e.nanos);
  }
  convertDocumentKey(t, e) {
    const r = ResourcePath.fromString(t);
    __PRIVATE_hardAssert(__PRIVATE_isValidResourceName(r));
    const n = new DatabaseId(r.get(1), r.get(3)), i = new DocumentKey(r.popFirst(5));
    return n.isEqual(e) || // TODO(b/64130202): Somehow support foreign references.
    __PRIVATE_logError(`Document ${i} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`), i;
  }
} {
  constructor(t) {
    super(), this.firestore = t;
  }
  convertBytes(t) {
    return new Bytes(t);
  }
  convertReference(t) {
    const e = this.convertDocumentKey(t, this.firestore._databaseId);
    return new DocumentReference(
      this.firestore,
      /* converter= */
      null,
      e
    );
  }
};
function getDoc(t) {
  const e = __PRIVATE_getDatastore((t = __PRIVATE_cast(t, DocumentReference)).firestore), r = new __PRIVATE_LiteUserDataWriter(t.firestore);
  return __PRIVATE_invokeBatchGetDocumentsRpc(e, [t._key]).then((e2) => {
    __PRIVATE_hardAssert(1 === e2.length);
    const n = e2[0];
    return new DocumentSnapshot(t.firestore, r, t._key, n.isFoundDocument() ? n : null, t.converter);
  });
}
function getDocs(t) {
  (function __PRIVATE_validateHasExplicitOrderByForLimitToLast(t2) {
    if ("L" === t2.limitType && 0 === t2.explicitOrderBy.length) throw new FirestoreError(v, "limitToLast() queries require specifying at least one orderBy() clause");
  })((t = __PRIVATE_cast(t, Query))._query);
  const e = __PRIVATE_getDatastore(t.firestore), r = new __PRIVATE_LiteUserDataWriter(t.firestore);
  return __PRIVATE_invokeRunQueryRpc(e, t._query).then((e2) => {
    const n = e2.map((e3) => new QueryDocumentSnapshot(t.firestore, r, e3.key, e3, t.converter));
    return "L" === t._query.limitType && // Limit to last queries reverse the orderBy constraint that was
    // specified by the user. As such, we need to reverse the order of the
    // results to return the documents in the expected order.
    n.reverse(), new QuerySnapshot(t, n);
  });
}
function setDoc(t, e, r) {
  const n = __PRIVATE_applyFirestoreDataConverter((t = __PRIVATE_cast(t, DocumentReference)).converter, e, r), i = __PRIVATE_parseSetData(__PRIVATE_newUserDataReader(t.firestore), "setDoc", t._key, n, null !== t.converter, r);
  return __PRIVATE_invokeCommitRpc(__PRIVATE_getDatastore(t.firestore), [i.toMutation(t._key, Precondition.none())]);
}
function updateDoc(t, e, r, ...n) {
  const i = __PRIVATE_newUserDataReader((t = __PRIVATE_cast(t, DocumentReference)).firestore);
  let s;
  s = "string" == typeof (e = getModularInstance(e)) || e instanceof FieldPath ? __PRIVATE_parseUpdateVarargs(i, "updateDoc", t._key, e, r, n) : __PRIVATE_parseUpdateData(i, "updateDoc", t._key, e);
  return __PRIVATE_invokeCommitRpc(__PRIVATE_getDatastore(t.firestore), [s.toMutation(t._key, Precondition.exists(true))]);
}
function deleteDoc(t) {
  return __PRIVATE_invokeCommitRpc(__PRIVATE_getDatastore((t = __PRIVATE_cast(t, DocumentReference)).firestore), [new __PRIVATE_DeleteMutation(t._key, Precondition.none())]);
}
function addDoc(t, e) {
  const r = doc(t = __PRIVATE_cast(t, CollectionReference)), n = __PRIVATE_applyFirestoreDataConverter(t.converter, e), i = __PRIVATE_parseSetData(__PRIVATE_newUserDataReader(t.firestore), "addDoc", r._key, n, null !== r.converter, {});
  return __PRIVATE_invokeCommitRpc(__PRIVATE_getDatastore(t.firestore), [i.toMutation(r._key, Precondition.exists(false))]).then(() => r);
}
function getCount(t) {
  return getAggregate(t, {
    count: count()
  });
}
function getAggregate(t, e) {
  const r = __PRIVATE_cast(t.firestore, Firestore), n = __PRIVATE_getDatastore(r), i = function __PRIVATE_mapToArray(t2, e2) {
    const r2 = [];
    for (const n2 in t2) Object.prototype.hasOwnProperty.call(t2, n2) && r2.push(e2(t2[n2], n2, t2));
    return r2;
  }(e, (t2, e2) => new __PRIVATE_AggregateImpl(e2, t2.aggregateType, t2._internalFieldPath));
  return __PRIVATE_invokeRunAggregationQueryRpc(n, t._query, i).then((e2) => function __PRIVATE_convertToAggregateQuerySnapshot(t2, e3, r2) {
    const n2 = new __PRIVATE_LiteUserDataWriter(t2);
    return new AggregateQuerySnapshot(e3, n2, r2);
  }(r, t, e2));
}
function sum(t) {
  return new AggregateField("sum", __PRIVATE_fieldPathFromArgument$1("sum", t));
}
function average(t) {
  return new AggregateField("avg", __PRIVATE_fieldPathFromArgument$1("average", t));
}
function count() {
  return new AggregateField("count");
}
function aggregateFieldEqual(t, e) {
  var r, n;
  return t instanceof AggregateField && e instanceof AggregateField && t.aggregateType === e.aggregateType && (null === (r = t._internalFieldPath) || void 0 === r ? void 0 : r.canonicalString()) === (null === (n = e._internalFieldPath) || void 0 === n ? void 0 : n.canonicalString());
}
function aggregateQuerySnapshotEqual(t, e) {
  return queryEqual(t.query, e.query) && deepEqual(t.data(), e.data());
}
function deleteField() {
  return new __PRIVATE_DeleteFieldValueImpl("deleteField");
}
function serverTimestamp() {
  return new __PRIVATE_ServerTimestampFieldValueImpl("serverTimestamp");
}
function arrayUnion(...t) {
  return new __PRIVATE_ArrayUnionFieldValueImpl("arrayUnion", t);
}
function arrayRemove(...t) {
  return new __PRIVATE_ArrayRemoveFieldValueImpl("arrayRemove", t);
}
function increment(t) {
  return new __PRIVATE_NumericIncrementFieldValueImpl("increment", t);
}
function vector(t) {
  return new VectorValue(t);
}
var WriteBatch = class {
  /** @hideconstructor */
  constructor(t, e) {
    this._firestore = t, this._commitHandler = e, this._mutations = [], this._committed = false, this._dataReader = __PRIVATE_newUserDataReader(t);
  }
  set(t, e, r) {
    this._verifyNotCommitted();
    const n = __PRIVATE_validateReference(t, this._firestore), i = __PRIVATE_applyFirestoreDataConverter(n.converter, e, r), s = __PRIVATE_parseSetData(this._dataReader, "WriteBatch.set", n._key, i, null !== n.converter, r);
    return this._mutations.push(s.toMutation(n._key, Precondition.none())), this;
  }
  update(t, e, r, ...n) {
    this._verifyNotCommitted();
    const i = __PRIVATE_validateReference(t, this._firestore);
    let s;
    return s = "string" == typeof (e = getModularInstance(e)) || e instanceof FieldPath ? __PRIVATE_parseUpdateVarargs(this._dataReader, "WriteBatch.update", i._key, e, r, n) : __PRIVATE_parseUpdateData(this._dataReader, "WriteBatch.update", i._key, e), this._mutations.push(s.toMutation(i._key, Precondition.exists(true))), this;
  }
  /**
   * Deletes the document referred to by the provided {@link DocumentReference}.
   *
   * @param documentRef - A reference to the document to be deleted.
   * @returns This `WriteBatch` instance. Used for chaining method calls.
   */
  delete(t) {
    this._verifyNotCommitted();
    const e = __PRIVATE_validateReference(t, this._firestore);
    return this._mutations = this._mutations.concat(new __PRIVATE_DeleteMutation(e._key, Precondition.none())), this;
  }
  /**
   * Commits all of the writes in this write batch as a single atomic unit.
   *
   * The result of these writes will only be reflected in document reads that
   * occur after the returned promise resolves. If the client is offline, the
   * write fails. If you would like to see local modifications or buffer writes
   * until the client is online, use the full Firestore SDK.
   *
   * @returns A `Promise` resolved once all of the writes in the batch have been
   * successfully written to the backend as an atomic unit (note that it won't
   * resolve while you're offline).
   */
  commit() {
    return this._verifyNotCommitted(), this._committed = true, this._mutations.length > 0 ? this._commitHandler(this._mutations) : Promise.resolve();
  }
  _verifyNotCommitted() {
    if (this._committed) throw new FirestoreError(w, "A write batch can no longer be used after commit() has been called.");
  }
};
function __PRIVATE_validateReference(t, e) {
  if ((t = getModularInstance(t)).firestore !== e) throw new FirestoreError(T, "Provided document reference is from a different Firestore instance.");
  return t;
}
function writeBatch(t) {
  const e = __PRIVATE_getDatastore(t = __PRIVATE_cast(t, Firestore));
  return new WriteBatch(t, (t2) => __PRIVATE_invokeCommitRpc(e, t2));
}
var Transaction$1 = class {
  constructor(t) {
    this.datastore = t, // The version of each document that was read during this transaction.
    this.readVersions = /* @__PURE__ */ new Map(), this.mutations = [], this.committed = false, /**
     * A deferred usage error that occurred previously in this transaction that
     * will cause the transaction to fail once it actually commits.
     */
    this.lastTransactionError = null, /**
     * Set of documents that have been written in the transaction.
     *
     * When there's more than one write to the same key in a transaction, any
     * writes after the first are handled differently.
     */
    this.writtenDocs = /* @__PURE__ */ new Set();
  }
  async lookup(t) {
    if (this.ensureCommitNotCalled(), this.mutations.length > 0) throw this.lastTransactionError = new FirestoreError(T, "Firestore transactions require all reads to be executed before all writes."), this.lastTransactionError;
    const e = await __PRIVATE_invokeBatchGetDocumentsRpc(this.datastore, t);
    return e.forEach((t2) => this.recordVersion(t2)), e;
  }
  set(t, e) {
    this.write(e.toMutation(t, this.precondition(t))), this.writtenDocs.add(t.toString());
  }
  update(t, e) {
    try {
      this.write(e.toMutation(t, this.preconditionForUpdate(t)));
    } catch (t2) {
      this.lastTransactionError = t2;
    }
    this.writtenDocs.add(t.toString());
  }
  delete(t) {
    this.write(new __PRIVATE_DeleteMutation(t, this.precondition(t))), this.writtenDocs.add(t.toString());
  }
  async commit() {
    if (this.ensureCommitNotCalled(), this.lastTransactionError) throw this.lastTransactionError;
    const t = this.readVersions;
    this.mutations.forEach((e) => {
      t.delete(e.key.toString());
    }), // For each document that was read but not written to, we want to perform
    // a `verify` operation.
    t.forEach((t2, e) => {
      const r = DocumentKey.fromPath(e);
      this.mutations.push(new __PRIVATE_VerifyMutation(r, this.precondition(r)));
    }), await __PRIVATE_invokeCommitRpc(this.datastore, this.mutations), this.committed = true;
  }
  recordVersion(t) {
    let e;
    if (t.isFoundDocument()) e = t.version;
    else {
      if (!t.isNoDocument()) throw fail();
      e = SnapshotVersion.min();
    }
    const r = this.readVersions.get(t.key.toString());
    if (r) {
      if (!e.isEqual(r))
        throw new FirestoreError(g, "Document version changed between two reads.");
    } else this.readVersions.set(t.key.toString(), e);
  }
  /**
   * Returns the version of this document when it was read in this transaction,
   * as a precondition, or no precondition if it was not read.
   */
  precondition(t) {
    const e = this.readVersions.get(t.toString());
    return !this.writtenDocs.has(t.toString()) && e ? e.isEqual(SnapshotVersion.min()) ? Precondition.exists(false) : Precondition.updateTime(e) : Precondition.none();
  }
  /**
   * Returns the precondition for a document if the operation is an update.
   */
  preconditionForUpdate(t) {
    const e = this.readVersions.get(t.toString());
    if (!this.writtenDocs.has(t.toString()) && e) {
      if (e.isEqual(SnapshotVersion.min()))
        throw new FirestoreError(T, "Can't update a document that doesn't exist.");
      return Precondition.updateTime(e);
    }
    return Precondition.exists(true);
  }
  write(t) {
    this.ensureCommitNotCalled(), this.mutations.push(t);
  }
  ensureCommitNotCalled() {
  }
};
var z = {
  maxAttempts: 5
};
var __PRIVATE_TransactionRunner = class {
  constructor(t, e, r, n, i) {
    this.asyncQueue = t, this.datastore = e, this.options = r, this.updateFunction = n, this.deferred = i, this.Et = r.maxAttempts, this.At = new __PRIVATE_ExponentialBackoff(
      this.asyncQueue,
      "transaction_retry"
      /* TimerId.TransactionRetry */
    );
  }
  /** Runs the transaction and sets the result on deferred. */
  Tt() {
    this.Et -= 1, this.Rt();
  }
  Rt() {
    this.At.G(async () => {
      const t = new Transaction$1(this.datastore), e = this.Pt(t);
      e && e.then((e2) => {
        this.asyncQueue.enqueueAndForget(() => t.commit().then(() => {
          this.deferred.resolve(e2);
        }).catch((t2) => {
          this.Vt(t2);
        }));
      }).catch((t2) => {
        this.Vt(t2);
      });
    });
  }
  Pt(t) {
    try {
      const e = this.updateFunction(t);
      return !__PRIVATE_isNullOrUndefined(e) && e.catch && e.then ? e : (this.deferred.reject(Error("Transaction callback must return a Promise")), null);
    } catch (t2) {
      return this.deferred.reject(t2), null;
    }
  }
  Vt(t) {
    this.Et > 0 && this.It(t) ? (this.Et -= 1, this.asyncQueue.enqueueAndForget(() => (this.Rt(), Promise.resolve()))) : this.deferred.reject(t);
  }
  It(t) {
    if ("FirebaseError" === t.name) {
      const e = t.code;
      return "aborted" === e || "failed-precondition" === e || "already-exists" === e || !/**
      * Determines whether an error code represents a permanent error when received
      * in response to a non-write operation.
      *
      * See isPermanentWriteError for classifying write errors.
      */
      function __PRIVATE_isPermanentError(t2) {
        switch (t2) {
          default:
            return fail();
          case m:
          case A:
          case R:
          case y:
          case D:
          case b:
          case p:
            return false;
          case T:
          case P:
          case V:
          case I:
          case w:
          case g:
          case F:
          case v:
          case C:
            return true;
        }
      }(e);
    }
    return false;
  }
};
function getDocument() {
  return "undefined" != typeof document ? document : null;
}
var DelayedOperation = class _DelayedOperation {
  constructor(t, e, r, n, i) {
    this.asyncQueue = t, this.timerId = e, this.targetTimeMs = r, this.op = n, this.removalCallback = i, this.deferred = new __PRIVATE_Deferred(), this.then = this.deferred.promise.then.bind(this.deferred.promise), // It's normal for the deferred promise to be canceled (due to cancellation)
    // and so we attach a dummy catch callback to avoid
    // 'UnhandledPromiseRejectionWarning' log spam.
    this.deferred.promise.catch((t2) => {
    });
  }
  get promise() {
    return this.deferred.promise;
  }
  /**
   * Creates and returns a DelayedOperation that has been scheduled to be
   * executed on the provided asyncQueue after the provided delayMs.
   *
   * @param asyncQueue - The queue to schedule the operation on.
   * @param id - A Timer ID identifying the type of operation this is.
   * @param delayMs - The delay (ms) before the operation should be scheduled.
   * @param op - The operation to run.
   * @param removalCallback - A callback to be called synchronously once the
   *   operation is executed or canceled, notifying the AsyncQueue to remove it
   *   from its delayedOperations list.
   *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
   *   the DelayedOperation class public.
   */
  static createAndSchedule(t, e, r, n, i) {
    const s = Date.now() + r, o = new _DelayedOperation(t, e, s, n, i);
    return o.start(r), o;
  }
  /**
   * Starts the timer. This is called immediately after construction by
   * createAndSchedule().
   */
  start(t) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), t);
  }
  /**
   * Queues the operation to run immediately (if it hasn't already been run or
   * canceled).
   */
  skipDelay() {
    return this.handleDelayElapsed();
  }
  /**
   * Cancels the operation if it hasn't already been executed or canceled. The
   * promise will be rejected.
   *
   * As long as the operation has not yet been run, calling cancel() provides a
   * guarantee that the operation will not be run.
   */
  cancel(t) {
    null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new FirestoreError(m, "Operation cancelled" + (t ? ": " + t : ""))));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() => null !== this.timerHandle ? (this.clearTimeout(), this.op().then((t) => this.deferred.resolve(t))) : Promise.resolve());
  }
  clearTimeout() {
    null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null);
  }
};
var __PRIVATE_AsyncQueueImpl = class {
  constructor() {
    this.yt = Promise.resolve(), // A list of retryable operations. Retryable operations are run in order and
    // retried with backoff.
    this.wt = [], // Is this AsyncQueue being shut down? Once it is set to true, it will not
    // be changed again.
    this.gt = false, // Operations scheduled to be queued in the future. Operations are
    // automatically removed after they are run or canceled.
    this.Ft = [], // visible for testing
    this.vt = null, // Flag set while there's an outstanding AsyncQueue operation, used for
    // assertion sanity-checks.
    this.Dt = false, // Enabled during shutdown on Safari to prevent future access to IndexedDB.
    this.bt = false, // List of TimerIds to fast-forward delays for.
    this.Ct = [], // Backoff timer used to schedule retries for retryable operations
    this.At = new __PRIVATE_ExponentialBackoff(
      this,
      "async_queue_retry"
      /* TimerId.AsyncQueueRetry */
    ), // Visibility handler that triggers an immediate retry of all retryable
    // operations. Meant to speed up recovery when we regain file system access
    // after page comes into foreground.
    this.St = () => {
      const t2 = getDocument();
      t2 && __PRIVATE_logDebug("AsyncQueue", "Visibility state changed to " + t2.visibilityState), this.At.J();
    };
    const t = getDocument();
    t && "function" == typeof t.addEventListener && t.addEventListener("visibilitychange", this.St);
  }
  get isShuttingDown() {
    return this.gt;
  }
  /**
   * Adds a new operation to the queue without waiting for it to complete (i.e.
   * we ignore the Promise result).
   */
  enqueueAndForget(t) {
    this.enqueue(t);
  }
  enqueueAndForgetEvenWhileRestricted(t) {
    this.Nt(), // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.Ot(t);
  }
  enterRestrictedMode(t) {
    if (!this.gt) {
      this.gt = true, this.bt = t || false;
      const e = getDocument();
      e && "function" == typeof e.removeEventListener && e.removeEventListener("visibilitychange", this.St);
    }
  }
  enqueue(t) {
    if (this.Nt(), this.gt)
      return new Promise(() => {
      });
    const e = new __PRIVATE_Deferred();
    return this.Ot(() => this.gt && this.bt ? Promise.resolve() : (t().then(e.resolve, e.reject), e.promise)).then(() => e.promise);
  }
  enqueueRetryable(t) {
    this.enqueueAndForget(() => (this.wt.push(t), this.qt()));
  }
  /**
   * Runs the next operation from the retryable queue. If the operation fails,
   * reschedules with backoff.
   */
  async qt() {
    if (0 !== this.wt.length) {
      try {
        await this.wt[0](), this.wt.shift(), this.At.reset();
      } catch (t) {
        if (!/**
        * @license
        * Copyright 2017 Google LLC
        *
        * Licensed under the Apache License, Version 2.0 (the "License");
        * you may not use this file except in compliance with the License.
        * You may obtain a copy of the License at
        *
        *   http://www.apache.org/licenses/LICENSE-2.0
        *
        * Unless required by applicable law or agreed to in writing, software
        * distributed under the License is distributed on an "AS IS" BASIS,
        * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        * See the License for the specific language governing permissions and
        * limitations under the License.
        */
        /** Verifies whether `e` is an IndexedDbTransactionError. */
        function __PRIVATE_isIndexedDbTransactionError(t2) {
          return "IndexedDbTransactionError" === t2.name;
        }(t)) throw t;
        __PRIVATE_logDebug("AsyncQueue", "Operation failed with retryable error: " + t);
      }
      this.wt.length > 0 && // If there are additional operations, we re-schedule `retryNextOp()`.
      // This is necessary to run retryable operations that failed during
      // their initial attempt since we don't know whether they are already
      // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
      // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
      // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
      // call scheduled here.
      // Since `backoffAndRun()` cancels an existing backoff and schedules a
      // new backoff on every call, there is only ever a single additional
      // operation in the queue.
      this.At.G(() => this.qt());
    }
  }
  Ot(t) {
    const e = this.yt.then(() => (this.Dt = true, t().catch((t2) => {
      this.vt = t2, this.Dt = false;
      const e2 = (
        /**
        * Chrome includes Error.message in Error.stack. Other browsers do not.
        * This returns expected output of message + stack when available.
        * @param error - Error or FirestoreError
        */
        function __PRIVATE_getMessageOrStack(t3) {
          let e3 = t3.message || "";
          t3.stack && (e3 = t3.stack.includes(t3.message) ? t3.stack : t3.message + "\n" + t3.stack);
          return e3;
        }(t2)
      );
      throw __PRIVATE_logError("INTERNAL UNHANDLED ERROR: ", e2), t2;
    }).then((t2) => (this.Dt = false, t2))));
    return this.yt = e, e;
  }
  enqueueAfterDelay(t, e, r) {
    this.Nt(), // Fast-forward delays for timerIds that have been overridden.
    this.Ct.indexOf(t) > -1 && (e = 0);
    const n = DelayedOperation.createAndSchedule(this, t, e, r, (t2) => this.Bt(t2));
    return this.Ft.push(n), n;
  }
  Nt() {
    this.vt && fail();
  }
  verifyOperationInProgress() {
  }
  /**
   * Waits until all currently queued tasks are finished executing. Delayed
   * operations are not run.
   */
  async $t() {
    let t;
    do {
      t = this.yt, await t;
    } while (t !== this.yt);
  }
  /**
   * For Tests: Determine if a delayed operation with a particular TimerId
   * exists.
   */
  Qt(t) {
    for (const e of this.Ft) if (e.timerId === t) return true;
    return false;
  }
  /**
   * For Tests: Runs some or all delayed operations early.
   *
   * @param lastTimerId - Delayed operations up to and including this TimerId
   * will be drained. Pass TimerId.All to run all delayed operations.
   * @returns a Promise that resolves once all operations have been run.
   */
  Lt(t) {
    return this.$t().then(() => {
      this.Ft.sort((t2, e) => t2.targetTimeMs - e.targetTimeMs);
      for (const e of this.Ft) if (e.skipDelay(), "all" !== t && e.timerId === t) break;
      return this.$t();
    });
  }
  /**
   * For Tests: Skip all subsequent delays for a timer id.
   */
  Mt(t) {
    this.Ct.push(t);
  }
  /** Called once a DelayedOperation is run or canceled. */
  Bt(t) {
    const e = this.Ft.indexOf(t);
    this.Ft.splice(e, 1);
  }
};
var Transaction = class {
  /** @hideconstructor */
  constructor(t, e) {
    this._firestore = t, this._transaction = e, this._dataReader = __PRIVATE_newUserDataReader(t);
  }
  /**
   * Reads the document referenced by the provided {@link DocumentReference}.
   *
   * @param documentRef - A reference to the document to be read.
   * @returns A `DocumentSnapshot` with the read data.
   */
  get(t) {
    const e = __PRIVATE_validateReference(t, this._firestore), r = new __PRIVATE_LiteUserDataWriter(this._firestore);
    return this._transaction.lookup([e._key]).then((t2) => {
      if (!t2 || 1 !== t2.length) return fail();
      const n = t2[0];
      if (n.isFoundDocument()) return new DocumentSnapshot(this._firestore, r, n.key, n, e.converter);
      if (n.isNoDocument()) return new DocumentSnapshot(this._firestore, r, e._key, null, e.converter);
      throw fail();
    });
  }
  set(t, e, r) {
    const n = __PRIVATE_validateReference(t, this._firestore), i = __PRIVATE_applyFirestoreDataConverter(n.converter, e, r), s = __PRIVATE_parseSetData(this._dataReader, "Transaction.set", n._key, i, null !== n.converter, r);
    return this._transaction.set(n._key, s), this;
  }
  update(t, e, r, ...n) {
    const i = __PRIVATE_validateReference(t, this._firestore);
    let s;
    return s = "string" == typeof (e = getModularInstance(e)) || e instanceof FieldPath ? __PRIVATE_parseUpdateVarargs(this._dataReader, "Transaction.update", i._key, e, r, n) : __PRIVATE_parseUpdateData(this._dataReader, "Transaction.update", i._key, e), this._transaction.update(i._key, s), this;
  }
  /**
   * Deletes the document referred to by the provided {@link DocumentReference}.
   *
   * @param documentRef - A reference to the document to be deleted.
   * @returns This `Transaction` instance. Used for chaining method calls.
   */
  delete(t) {
    const e = __PRIVATE_validateReference(t, this._firestore);
    return this._transaction.delete(e._key), this;
  }
};
function runTransaction(t, e, r) {
  const n = __PRIVATE_getDatastore(t = __PRIVATE_cast(t, Firestore)), i = Object.assign(Object.assign({}, z), r);
  !function __PRIVATE_validateTransactionOptions(t2) {
    if (t2.maxAttempts < 1) throw new FirestoreError(T, "Max attempts must be at least 1");
  }(i);
  const s = new __PRIVATE_Deferred();
  return new __PRIVATE_TransactionRunner(function __PRIVATE_newAsyncQueue() {
    return new __PRIVATE_AsyncQueueImpl();
  }(), n, i, (r2) => e(new Transaction(t, r2)), s).Tt(), s.promise;
}
!function __PRIVATE_registerFirestore() {
  !function __PRIVATE_setSDKVersion(t) {
    d = t;
  }(`${SDK_VERSION}_lite`), _registerComponent(new Component("firestore/lite", (t, { instanceIdentifier: e, options: r }) => {
    const n = t.getProvider("app").getImmediate(), i = new Firestore(new __PRIVATE_LiteAuthCredentialsProvider(t.getProvider("auth-internal")), new __PRIVATE_LiteAppCheckTokenProvider(t.getProvider("app-check-internal")), function __PRIVATE_databaseIdFromApp(t2, e2) {
      if (!Object.prototype.hasOwnProperty.apply(t2.options, ["projectId"])) throw new FirestoreError(T, '"projectId" not provided in firebase.initializeApp.');
      return new DatabaseId(t2.options.projectId, e2);
    }(n, e), n);
    return r && i._setSettings(r), i;
  }, "PUBLIC").setMultipleInstances(true)), // RUNTIME_ENV and BUILD_TARGET are replaced by real values during the compilation
  registerVersion("firestore-lite", "4.7.1", ""), registerVersion("firestore-lite", "4.7.1", "esm2017");
}();
export {
  AggregateField,
  AggregateQuerySnapshot,
  Bytes,
  CollectionReference,
  DocumentReference,
  DocumentSnapshot,
  FieldPath,
  FieldValue,
  Firestore,
  FirestoreError,
  GeoPoint,
  Query,
  QueryCompositeFilterConstraint,
  QueryConstraint,
  QueryDocumentSnapshot,
  QueryEndAtConstraint,
  QueryFieldFilterConstraint,
  QueryLimitConstraint,
  QueryOrderByConstraint,
  QuerySnapshot,
  QueryStartAtConstraint,
  Timestamp,
  Transaction,
  VectorValue,
  WriteBatch,
  addDoc,
  aggregateFieldEqual,
  aggregateQuerySnapshotEqual,
  and,
  arrayRemove,
  arrayUnion,
  average,
  collection,
  collectionGroup,
  connectFirestoreEmulator,
  count,
  deleteDoc,
  deleteField,
  doc,
  documentId,
  endAt,
  endBefore,
  getAggregate,
  getCount,
  getDoc,
  getDocs,
  getFirestore,
  increment,
  initializeFirestore,
  limit,
  limitToLast,
  or,
  orderBy,
  query,
  queryEqual,
  refEqual,
  runTransaction,
  serverTimestamp,
  setDoc,
  setLogLevel,
  snapshotEqual,
  startAfter,
  startAt,
  sum,
  terminate,
  updateDoc,
  vector,
  where,
  writeBatch
};
/*! Bundled license information:

@firebase/firestore/dist/lite/index.browser.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
//# sourceMappingURL=firebase_firestore_lite.js.map
