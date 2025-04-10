import * as zt from "three";
import { REVISION as lS, TrianglesDrawMode as uS, TriangleFanDrawMode as ly, TriangleStripDrawMode as XE, Mesh as _h, IcosahedronGeometry as iS, ShaderMaterial as yy, DoubleSide as VE, Vector3 as Ma, MOUSE as Af, TOUCH as Ef, Spherical as wA, Quaternion as Eh, OrthographicCamera as bm, Vector2 as Yl, PerspectiveCamera as vh, Ray as sS, Plane as cS, Loader as Ay, LoaderUtils as Dm, FileLoader as Ac, MeshPhysicalMaterial as Li, Color as go, SpotLight as oS, PointLight as rS, DirectionalLight as fS, Matrix4 as Sh, InstancedMesh as dS, InstancedBufferAttribute as mS, Object3D as ZE, TextureLoader as pS, ImageBitmapLoader as hS, BufferAttribute as _m, InterleavedBuffer as vS, InterleavedBufferAttribute as yS, LinearMipmapLinearFilter as qE, NearestMipmapLinearFilter as AS, LinearMipmapNearestFilter as ES, NearestMipmapNearestFilter as SS, LinearFilter as Tu, NearestFilter as BS, RepeatWrapping as uy, MirroredRepeatWrapping as gS, ClampToEdgeWrapping as Es, PointsMaterial as CS, Material as Uv, LineBasicMaterial as TS, MeshStandardMaterial as FE, MeshBasicMaterial as Cf, PropertyBinding as RS, BufferGeometry as IE, SkinnedMesh as MS, LineSegments as bS, Line as DS, LineLoop as _S, Points as HS, Group as Nv, MathUtils as OS, Skeleton as US, AnimationClip as NS, Bone as GS, InterpolateDiscrete as zS, InterpolateLinear as wE, Texture as vc, VectorKeyframeTrack as PA, NumberKeyframeTrack as WA, QuaternionKeyframeTrack as kA, FrontSide as xS, Interpolant as LS, Box3 as JS, Sphere as KS, DataTextureLoader as PE, HalfFloatType as Ru, FloatType as Ss, DataUtils as Tf, RGBAFormat as Nm, RedFormat as jS, Scene as WE, PlaneGeometry as kE, WebGLRenderTarget as $E, UVMapping as Bh, WebGLRenderer as QS, DataTexture as YS, LinearSRGBColorSpace as iy, IntType as XS, ShortType as VS, ByteType as ZS, UnsignedIntType as qS, UnsignedByteType as sy, LoadingManager as FS, LinearMipMapLinearFilter as $A, SRGBColorSpace as IS, NoBlending as wS, CubeReflectionMapping as PS, EquirectangularReflectionMapping as WS, CubeTextureLoader as kS, WebGLCubeRenderTarget as $S } from "three";
import { LinearMipMapLinearFilter as nC, RepeatWrapping as lC, SRGBColorSpace as uC, TextureLoader as iC } from "three";
import * as Qe from "react";
import Ec, { useState as e1, useRef as eE, useEffect as Hm, useMemo as t1, useLayoutEffect as a1 } from "react";
function e0(d) {
  return d && d.__esModule && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
}
var ah = { exports: {} }, vs = {};
/**
 * @license React
 * react-reconciler-constants.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tE;
function n1() {
  return tE || (tE = 1, vs.ConcurrentRoot = 1, vs.ContinuousEventPriority = 8, vs.DefaultEventPriority = 32, vs.DiscreteEventPriority = 2, vs.IdleEventPriority = 268435456, vs.LegacyRoot = 0, vs.NoEventPriority = 0), vs;
}
var ys = {};
/**
 * @license React
 * react-reconciler-constants.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aE;
function l1() {
  return aE || (aE = 1, process.env.NODE_ENV !== "production" && (ys.ConcurrentRoot = 1, ys.ContinuousEventPriority = 8, ys.DefaultEventPriority = 32, ys.DiscreteEventPriority = 2, ys.IdleEventPriority = 268435456, ys.LegacyRoot = 0, ys.NoEventPriority = 0)), ys;
}
var nE;
function u1() {
  return nE || (nE = 1, process.env.NODE_ENV === "production" ? ah.exports = n1() : ah.exports = l1()), ah.exports;
}
var yh = u1(), nh = { exports: {} }, Gv = {}, lh = { exports: {} }, zv = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lE;
function i1() {
  if (lE) return zv;
  lE = 1;
  var d = Ec;
  function u(T, M) {
    return T === M && (T !== 0 || 1 / T === 1 / M) || T !== T && M !== M;
  }
  var r = typeof Object.is == "function" ? Object.is : u, f = d.useState, p = d.useEffect, v = d.useLayoutEffect, A = d.useDebugValue;
  function B(T, M) {
    var O = M(), U = f({ inst: { value: O, getSnapshot: M } }), V = U[0].inst, P = U[1];
    return v(
      function() {
        V.value = O, V.getSnapshot = M, E(V) && P({ inst: V });
      },
      [T, O, M]
    ), p(
      function() {
        return E(V) && P({ inst: V }), T(function() {
          E(V) && P({ inst: V });
        });
      },
      [T]
    ), A(O), O;
  }
  function E(T) {
    var M = T.getSnapshot;
    T = T.value;
    try {
      var O = M();
      return !r(T, O);
    } catch {
      return !0;
    }
  }
  function C(T, M) {
    return M();
  }
  var R = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? C : B;
  return zv.useSyncExternalStore = d.useSyncExternalStore !== void 0 ? d.useSyncExternalStore : R, zv;
}
var xv = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uE;
function s1() {
  return uE || (uE = 1, process.env.NODE_ENV !== "production" && function() {
    function d(O, U) {
      return O === U && (O !== 0 || 1 / O === 1 / U) || O !== O && U !== U;
    }
    function u(O, U) {
      R || p.startTransition === void 0 || (R = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var V = U();
      if (!T) {
        var P = U();
        v(V, P) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), T = !0);
      }
      P = A({
        inst: { value: V, getSnapshot: U }
      });
      var G = P[0].inst, N = P[1];
      return E(
        function() {
          G.value = V, G.getSnapshot = U, r(G) && N({ inst: G });
        },
        [O, V, U]
      ), B(
        function() {
          return r(G) && N({ inst: G }), O(function() {
            r(G) && N({ inst: G });
          });
        },
        [O]
      ), C(V), V;
    }
    function r(O) {
      var U = O.getSnapshot;
      O = O.value;
      try {
        var V = U();
        return !v(O, V);
      } catch {
        return !0;
      }
    }
    function f(O, U) {
      return U();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var p = Ec, v = typeof Object.is == "function" ? Object.is : d, A = p.useState, B = p.useEffect, E = p.useLayoutEffect, C = p.useDebugValue, R = !1, T = !1, M = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? f : u;
    xv.useSyncExternalStore = p.useSyncExternalStore !== void 0 ? p.useSyncExternalStore : M, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), xv;
}
var iE;
function t0() {
  return iE || (iE = 1, process.env.NODE_ENV === "production" ? lh.exports = i1() : lh.exports = s1()), lh.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sE;
function c1() {
  if (sE) return Gv;
  sE = 1;
  var d = Ec, u = t0();
  function r(C, R) {
    return C === R && (C !== 0 || 1 / C === 1 / R) || C !== C && R !== R;
  }
  var f = typeof Object.is == "function" ? Object.is : r, p = u.useSyncExternalStore, v = d.useRef, A = d.useEffect, B = d.useMemo, E = d.useDebugValue;
  return Gv.useSyncExternalStoreWithSelector = function(C, R, T, M, O) {
    var U = v(null);
    if (U.current === null) {
      var V = { hasValue: !1, value: null };
      U.current = V;
    } else V = U.current;
    U = B(
      function() {
        function G(W) {
          if (!N) {
            if (N = !0, $ = W, W = M(W), O !== void 0 && V.hasValue) {
              var Ce = V.value;
              if (O(Ce, W))
                return Z = Ce;
            }
            return Z = W;
          }
          if (Ce = Z, f($, W)) return Ce;
          var ne = M(W);
          return O !== void 0 && O(Ce, ne) ? ($ = W, Ce) : ($ = W, Z = ne);
        }
        var N = !1, $, Z, ce = T === void 0 ? null : T;
        return [
          function() {
            return G(R());
          },
          ce === null ? void 0 : function() {
            return G(ce());
          }
        ];
      },
      [R, T, M, O]
    );
    var P = p(C, U[0], U[1]);
    return A(
      function() {
        V.hasValue = !0, V.value = P;
      },
      [P]
    ), E(P), P;
  }, Gv;
}
var Lv = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cE;
function o1() {
  return cE || (cE = 1, process.env.NODE_ENV !== "production" && function() {
    function d(C, R) {
      return C === R && (C !== 0 || 1 / C === 1 / R) || C !== C && R !== R;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var u = Ec, r = t0(), f = typeof Object.is == "function" ? Object.is : d, p = r.useSyncExternalStore, v = u.useRef, A = u.useEffect, B = u.useMemo, E = u.useDebugValue;
    Lv.useSyncExternalStoreWithSelector = function(C, R, T, M, O) {
      var U = v(null);
      if (U.current === null) {
        var V = { hasValue: !1, value: null };
        U.current = V;
      } else V = U.current;
      U = B(
        function() {
          function G(W) {
            if (!N) {
              if (N = !0, $ = W, W = M(W), O !== void 0 && V.hasValue) {
                var Ce = V.value;
                if (O(Ce, W))
                  return Z = Ce;
              }
              return Z = W;
            }
            if (Ce = Z, f($, W))
              return Ce;
            var ne = M(W);
            return O !== void 0 && O(Ce, ne) ? ($ = W, Ce) : ($ = W, Z = ne);
          }
          var N = !1, $, Z, ce = T === void 0 ? null : T;
          return [
            function() {
              return G(R());
            },
            ce === null ? void 0 : function() {
              return G(ce());
            }
          ];
        },
        [R, T, M, O]
      );
      var P = p(C, U[0], U[1]);
      return A(
        function() {
          V.hasValue = !0, V.value = P;
        },
        [P]
      ), E(P), P;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Lv;
}
var oE;
function r1() {
  return oE || (oE = 1, process.env.NODE_ENV === "production" ? nh.exports = c1() : nh.exports = o1()), nh.exports;
}
var f1 = r1();
const d1 = /* @__PURE__ */ e0(f1), rE = (d) => {
  let u;
  const r = /* @__PURE__ */ new Set(), f = (C, R) => {
    const T = typeof C == "function" ? C(u) : C;
    if (!Object.is(T, u)) {
      const M = u;
      u = R ?? (typeof T != "object" || T === null) ? T : Object.assign({}, u, T), r.forEach((O) => O(u, M));
    }
  }, p = () => u, B = { setState: f, getState: p, getInitialState: () => E, subscribe: (C) => (r.add(C), () => r.delete(C)) }, E = u = d(f, p, B);
  return B;
}, m1 = (d) => d ? rE(d) : rE, { useSyncExternalStoreWithSelector: p1 } = d1, h1 = (d) => d;
function v1(d, u = h1, r) {
  const f = p1(
    d.subscribe,
    d.getState,
    d.getInitialState,
    u,
    r
  );
  return Ec.useDebugValue(f), f;
}
const fE = (d, u) => {
  const r = m1(d), f = (p, v = u) => v1(r, p, v);
  return Object.assign(f, r), f;
}, a0 = (d, u) => d ? fE(d, u) : fE;
var uh = { exports: {} }, Jv = { exports: {} }, ih = { exports: {} }, Kv = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dE;
function y1() {
  return dE || (dE = 1, function(d) {
    function u(D, Q) {
      var X = D.length;
      D.push(Q);
      e: for (; 0 < X; ) {
        var re = X - 1 >>> 1, x = D[re];
        if (0 < p(x, Q))
          D[re] = Q, D[X] = x, X = re;
        else break e;
      }
    }
    function r(D) {
      return D.length === 0 ? null : D[0];
    }
    function f(D) {
      if (D.length === 0) return null;
      var Q = D[0], X = D.pop();
      if (X !== Q) {
        D[0] = X;
        e: for (var re = 0, x = D.length, me = x >>> 1; re < me; ) {
          var de = 2 * (re + 1) - 1, Ke = D[de], Ne = de + 1, Ie = D[Ne];
          if (0 > p(Ke, X))
            Ne < x && 0 > p(Ie, Ke) ? (D[re] = Ie, D[Ne] = X, re = Ne) : (D[re] = Ke, D[de] = X, re = de);
          else if (Ne < x && 0 > p(Ie, X))
            D[re] = Ie, D[Ne] = X, re = Ne;
          else break e;
        }
      }
      return Q;
    }
    function p(D, Q) {
      var X = D.sortIndex - Q.sortIndex;
      return X !== 0 ? X : D.id - Q.id;
    }
    if (d.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var v = performance;
      d.unstable_now = function() {
        return v.now();
      };
    } else {
      var A = Date, B = A.now();
      d.unstable_now = function() {
        return A.now() - B;
      };
    }
    var E = [], C = [], R = 1, T = null, M = 3, O = !1, U = !1, V = !1, P = typeof setTimeout == "function" ? setTimeout : null, G = typeof clearTimeout == "function" ? clearTimeout : null, N = typeof setImmediate < "u" ? setImmediate : null;
    function $(D) {
      for (var Q = r(C); Q !== null; ) {
        if (Q.callback === null) f(C);
        else if (Q.startTime <= D)
          f(C), Q.sortIndex = Q.expirationTime, u(E, Q);
        else break;
        Q = r(C);
      }
    }
    function Z(D) {
      if (V = !1, $(D), !U)
        if (r(E) !== null)
          U = !0, Te();
        else {
          var Q = r(C);
          Q !== null && Ve(Z, Q.startTime - D);
        }
    }
    var ce = !1, W = -1, Ce = 5, ne = -1;
    function se() {
      return !(d.unstable_now() - ne < Ce);
    }
    function fe() {
      if (ce) {
        var D = d.unstable_now();
        ne = D;
        var Q = !0;
        try {
          e: {
            U = !1, V && (V = !1, G(W), W = -1), O = !0;
            var X = M;
            try {
              t: {
                for ($(D), T = r(E); T !== null && !(T.expirationTime > D && se()); ) {
                  var re = T.callback;
                  if (typeof re == "function") {
                    T.callback = null, M = T.priorityLevel;
                    var x = re(
                      T.expirationTime <= D
                    );
                    if (D = d.unstable_now(), typeof x == "function") {
                      T.callback = x, $(D), Q = !0;
                      break t;
                    }
                    T === r(E) && f(E), $(D);
                  } else f(E);
                  T = r(E);
                }
                if (T !== null) Q = !0;
                else {
                  var me = r(C);
                  me !== null && Ve(
                    Z,
                    me.startTime - D
                  ), Q = !1;
                }
              }
              break e;
            } finally {
              T = null, M = X, O = !1;
            }
            Q = void 0;
          }
        } finally {
          Q ? He() : ce = !1;
        }
      }
    }
    var He;
    if (typeof N == "function")
      He = function() {
        N(fe);
      };
    else if (typeof MessageChannel < "u") {
      var Xe = new MessageChannel(), ee = Xe.port2;
      Xe.port1.onmessage = fe, He = function() {
        ee.postMessage(null);
      };
    } else
      He = function() {
        P(fe, 0);
      };
    function Te() {
      ce || (ce = !0, He());
    }
    function Ve(D, Q) {
      W = P(function() {
        D(d.unstable_now());
      }, Q);
    }
    d.unstable_IdlePriority = 5, d.unstable_ImmediatePriority = 1, d.unstable_LowPriority = 4, d.unstable_NormalPriority = 3, d.unstable_Profiling = null, d.unstable_UserBlockingPriority = 2, d.unstable_cancelCallback = function(D) {
      D.callback = null;
    }, d.unstable_continueExecution = function() {
      U || O || (U = !0, Te());
    }, d.unstable_forceFrameRate = function(D) {
      0 > D || 125 < D ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Ce = 0 < D ? Math.floor(1e3 / D) : 5;
    }, d.unstable_getCurrentPriorityLevel = function() {
      return M;
    }, d.unstable_getFirstCallbackNode = function() {
      return r(E);
    }, d.unstable_next = function(D) {
      switch (M) {
        case 1:
        case 2:
        case 3:
          var Q = 3;
          break;
        default:
          Q = M;
      }
      var X = M;
      M = Q;
      try {
        return D();
      } finally {
        M = X;
      }
    }, d.unstable_pauseExecution = function() {
    }, d.unstable_requestPaint = function() {
    }, d.unstable_runWithPriority = function(D, Q) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var X = M;
      M = D;
      try {
        return Q();
      } finally {
        M = X;
      }
    }, d.unstable_scheduleCallback = function(D, Q, X) {
      var re = d.unstable_now();
      switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? re + X : re) : X = re, D) {
        case 1:
          var x = -1;
          break;
        case 2:
          x = 250;
          break;
        case 5:
          x = 1073741823;
          break;
        case 4:
          x = 1e4;
          break;
        default:
          x = 5e3;
      }
      return x = X + x, D = {
        id: R++,
        callback: Q,
        priorityLevel: D,
        startTime: X,
        expirationTime: x,
        sortIndex: -1
      }, X > re ? (D.sortIndex = X, u(C, D), r(E) === null && D === r(C) && (V ? (G(W), W = -1) : V = !0, Ve(Z, X - re))) : (D.sortIndex = x, u(E, D), U || O || (U = !0, Te())), D;
    }, d.unstable_shouldYield = se, d.unstable_wrapCallback = function(D) {
      var Q = M;
      return function() {
        var X = M;
        M = Q;
        try {
          return D.apply(this, arguments);
        } finally {
          M = X;
        }
      };
    };
  }(Kv)), Kv;
}
var jv = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mE;
function A1() {
  return mE || (mE = 1, function(d) {
    process.env.NODE_ENV !== "production" && function() {
      function u() {
        if (se) {
          var D = d.unstable_now();
          Xe = D;
          var Q = !0;
          try {
            e: {
              Z = !1, ce && (ce = !1, Ce(fe), fe = -1), $ = !0;
              var X = N;
              try {
                t: {
                  for (A(D), G = f(U); G !== null && !(G.expirationTime > D && E()); ) {
                    var re = G.callback;
                    if (typeof re == "function") {
                      G.callback = null, N = G.priorityLevel;
                      var x = re(
                        G.expirationTime <= D
                      );
                      if (D = d.unstable_now(), typeof x == "function") {
                        G.callback = x, A(D), Q = !0;
                        break t;
                      }
                      G === f(U) && p(U), A(D);
                    } else p(U);
                    G = f(U);
                  }
                  if (G !== null) Q = !0;
                  else {
                    var me = f(V);
                    me !== null && R(
                      B,
                      me.startTime - D
                    ), Q = !1;
                  }
                }
                break e;
              } finally {
                G = null, N = X, $ = !1;
              }
              Q = void 0;
            }
          } finally {
            Q ? ee() : se = !1;
          }
        }
      }
      function r(D, Q) {
        var X = D.length;
        D.push(Q);
        e: for (; 0 < X; ) {
          var re = X - 1 >>> 1, x = D[re];
          if (0 < v(x, Q))
            D[re] = Q, D[X] = x, X = re;
          else break e;
        }
      }
      function f(D) {
        return D.length === 0 ? null : D[0];
      }
      function p(D) {
        if (D.length === 0) return null;
        var Q = D[0], X = D.pop();
        if (X !== Q) {
          D[0] = X;
          e: for (var re = 0, x = D.length, me = x >>> 1; re < me; ) {
            var de = 2 * (re + 1) - 1, Ke = D[de], Ne = de + 1, Ie = D[Ne];
            if (0 > v(Ke, X))
              Ne < x && 0 > v(Ie, Ke) ? (D[re] = Ie, D[Ne] = X, re = Ne) : (D[re] = Ke, D[de] = X, re = de);
            else if (Ne < x && 0 > v(Ie, X))
              D[re] = Ie, D[Ne] = X, re = Ne;
            else break e;
          }
        }
        return Q;
      }
      function v(D, Q) {
        var X = D.sortIndex - Q.sortIndex;
        return X !== 0 ? X : D.id - Q.id;
      }
      function A(D) {
        for (var Q = f(V); Q !== null; ) {
          if (Q.callback === null) p(V);
          else if (Q.startTime <= D)
            p(V), Q.sortIndex = Q.expirationTime, r(U, Q);
          else break;
          Q = f(V);
        }
      }
      function B(D) {
        if (ce = !1, A(D), !Z)
          if (f(U) !== null)
            Z = !0, C();
          else {
            var Q = f(V);
            Q !== null && R(
              B,
              Q.startTime - D
            );
          }
      }
      function E() {
        return !(d.unstable_now() - Xe < He);
      }
      function C() {
        se || (se = !0, ee());
      }
      function R(D, Q) {
        fe = W(function() {
          D(d.unstable_now());
        }, Q);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), d.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var T = performance;
        d.unstable_now = function() {
          return T.now();
        };
      } else {
        var M = Date, O = M.now();
        d.unstable_now = function() {
          return M.now() - O;
        };
      }
      var U = [], V = [], P = 1, G = null, N = 3, $ = !1, Z = !1, ce = !1, W = typeof setTimeout == "function" ? setTimeout : null, Ce = typeof clearTimeout == "function" ? clearTimeout : null, ne = typeof setImmediate < "u" ? setImmediate : null, se = !1, fe = -1, He = 5, Xe = -1;
      if (typeof ne == "function")
        var ee = function() {
          ne(u);
        };
      else if (typeof MessageChannel < "u") {
        var Te = new MessageChannel(), Ve = Te.port2;
        Te.port1.onmessage = u, ee = function() {
          Ve.postMessage(null);
        };
      } else
        ee = function() {
          W(u, 0);
        };
      d.unstable_IdlePriority = 5, d.unstable_ImmediatePriority = 1, d.unstable_LowPriority = 4, d.unstable_NormalPriority = 3, d.unstable_Profiling = null, d.unstable_UserBlockingPriority = 2, d.unstable_cancelCallback = function(D) {
        D.callback = null;
      }, d.unstable_continueExecution = function() {
        Z || $ || (Z = !0, C());
      }, d.unstable_forceFrameRate = function(D) {
        0 > D || 125 < D ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : He = 0 < D ? Math.floor(1e3 / D) : 5;
      }, d.unstable_getCurrentPriorityLevel = function() {
        return N;
      }, d.unstable_getFirstCallbackNode = function() {
        return f(U);
      }, d.unstable_next = function(D) {
        switch (N) {
          case 1:
          case 2:
          case 3:
            var Q = 3;
            break;
          default:
            Q = N;
        }
        var X = N;
        N = Q;
        try {
          return D();
        } finally {
          N = X;
        }
      }, d.unstable_pauseExecution = function() {
      }, d.unstable_requestPaint = function() {
      }, d.unstable_runWithPriority = function(D, Q) {
        switch (D) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            D = 3;
        }
        var X = N;
        N = D;
        try {
          return Q();
        } finally {
          N = X;
        }
      }, d.unstable_scheduleCallback = function(D, Q, X) {
        var re = d.unstable_now();
        switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? re + X : re) : X = re, D) {
          case 1:
            var x = -1;
            break;
          case 2:
            x = 250;
            break;
          case 5:
            x = 1073741823;
            break;
          case 4:
            x = 1e4;
            break;
          default:
            x = 5e3;
        }
        return x = X + x, D = {
          id: P++,
          callback: Q,
          priorityLevel: D,
          startTime: X,
          expirationTime: x,
          sortIndex: -1
        }, X > re ? (D.sortIndex = X, r(V, D), f(U) === null && D === f(V) && (ce ? (Ce(fe), fe = -1) : ce = !0, R(B, X - re))) : (D.sortIndex = x, r(U, D), Z || $ || (Z = !0, C())), D;
      }, d.unstable_shouldYield = E, d.unstable_wrapCallback = function(D) {
        var Q = N;
        return function() {
          var X = N;
          N = Q;
          try {
            return D.apply(this, arguments);
          } finally {
            N = X;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(jv)), jv;
}
var pE;
function n0() {
  return pE || (pE = 1, process.env.NODE_ENV === "production" ? ih.exports = y1() : ih.exports = A1()), ih.exports;
}
/**
 * @license React
 * react-reconciler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hE;
function E1() {
  return hE || (hE = 1, function(d) {
    d.exports = function(u) {
      function r(a, n, i, o) {
        return new qm(a, n, i, o);
      }
      function f() {
      }
      function p(a) {
        var n = "https://react.dev/errors/" + a;
        if (1 < arguments.length) {
          n += "?args[]=" + encodeURIComponent(arguments[1]);
          for (var i = 2; i < arguments.length; i++)
            n += "&args[]=" + encodeURIComponent(arguments[i]);
        }
        return "Minified React error #" + a + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      function v(a) {
        return a === null || typeof a != "object" ? null : (a = md && a[md] || a["@@iterator"], typeof a == "function" ? a : null);
      }
      function A(a) {
        if (a == null) return null;
        if (typeof a == "function")
          return a.$$typeof === Uh ? null : a.displayName || a.name || null;
        if (typeof a == "string") return a;
        switch (a) {
          case Ii:
            return "Fragment";
          case js:
            return "Portal";
          case vr:
            return "Profiler";
          case cd:
            return "StrictMode";
          case Ar:
            return "Suspense";
          case fd:
            return "SuspenseList";
        }
        if (typeof a == "object")
          switch (a.$$typeof) {
            case Ul:
              return (a.displayName || "Context") + ".Provider";
            case yr:
              return (a._context.displayName || "Context") + ".Consumer";
            case rd:
              var n = a.render;
              return a = a.displayName, a || (a = n.displayName || n.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
            case Er:
              return n = a.displayName || null, n !== null ? n : A(a.type) || "Memo";
            case Ku:
              n = a._payload, a = a._init;
              try {
                return A(a(n));
              } catch {
              }
          }
        return null;
      }
      function B(a) {
        if (pd === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            pd = n && n[1] || "", An = -1 < i.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < i.stack.indexOf("@") ? "@unknown:0:0" : "";
          }
        return `
` + pd + a + An;
      }
      function E(a, n) {
        if (!a || Sr) return "";
        Sr = !0;
        var i = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          var o = {
            DetermineComponentFrameRoot: function() {
              try {
                if (n) {
                  var Le = function() {
                    throw Error();
                  };
                  if (Object.defineProperty(Le.prototype, "props", {
                    set: function() {
                      throw Error();
                    }
                  }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                      Reflect.construct(Le, []);
                    } catch (Fe) {
                      var Ge = Fe;
                    }
                    Reflect.construct(a, [], Le);
                  } else {
                    try {
                      Le.call();
                    } catch (Fe) {
                      Ge = Fe;
                    }
                    a.call(Le.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (Fe) {
                    Ge = Fe;
                  }
                  (Le = a()) && typeof Le.catch == "function" && Le.catch(function() {
                  });
                }
              } catch (Fe) {
                if (Fe && Ge && typeof Fe.stack == "string")
                  return [Fe.stack, Ge.stack];
              }
              return [null, null];
            }
          };
          o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
          var h = Object.getOwnPropertyDescriptor(
            o.DetermineComponentFrameRoot,
            "name"
          );
          h && h.configurable && Object.defineProperty(
            o.DetermineComponentFrameRoot,
            "name",
            { value: "DetermineComponentFrameRoot" }
          );
          var y = o.DetermineComponentFrameRoot(), b = y[0], z = y[1];
          if (b && z) {
            var I = b.split(`
`), pe = z.split(`
`);
            for (h = o = 0; o < I.length && !I[o].includes("DetermineComponentFrameRoot"); )
              o++;
            for (; h < pe.length && !pe[h].includes(
              "DetermineComponentFrameRoot"
            ); )
              h++;
            if (o === I.length || h === pe.length)
              for (o = I.length - 1, h = pe.length - 1; 1 <= o && 0 <= h && I[o] !== pe[h]; )
                h--;
            for (; 1 <= o && 0 <= h; o--, h--)
              if (I[o] !== pe[h]) {
                if (o !== 1 || h !== 1)
                  do
                    if (o--, h--, 0 > h || I[o] !== pe[h]) {
                      var _e = `
` + I[o].replace(" at new ", " at ");
                      return a.displayName && _e.includes("<anonymous>") && (_e = _e.replace("<anonymous>", a.displayName)), _e;
                    }
                  while (1 <= o && 0 <= h);
                break;
              }
          }
        } finally {
          Sr = !1, Error.prepareStackTrace = i;
        }
        return (i = a ? a.displayName || a.name : "") ? B(i) : "";
      }
      function C(a) {
        switch (a.tag) {
          case 26:
          case 27:
          case 5:
            return B(a.type);
          case 16:
            return B("Lazy");
          case 13:
            return B("Suspense");
          case 19:
            return B("SuspenseList");
          case 0:
          case 15:
            return a = E(a.type, !1), a;
          case 11:
            return a = E(a.type.render, !1), a;
          case 1:
            return a = E(a.type, !0), a;
          default:
            return "";
        }
      }
      function R(a) {
        try {
          var n = "";
          do
            n += C(a), a = a.return;
          while (a);
          return n;
        } catch (i) {
          return `
Error generating stack: ` + i.message + `
` + i.stack;
        }
      }
      function T(a) {
        var n = a, i = a;
        if (a.alternate) for (; n.return; ) n = n.return;
        else {
          a = n;
          do
            n = a, (n.flags & 4098) !== 0 && (i = n.return), a = n.return;
          while (a);
        }
        return n.tag === 3 ? i : null;
      }
      function M(a) {
        if (T(a) !== a)
          throw Error(p(188));
      }
      function O(a) {
        var n = a.alternate;
        if (!n) {
          if (n = T(a), n === null) throw Error(p(188));
          return n !== a ? null : a;
        }
        for (var i = a, o = n; ; ) {
          var h = i.return;
          if (h === null) break;
          var y = h.alternate;
          if (y === null) {
            if (o = h.return, o !== null) {
              i = o;
              continue;
            }
            break;
          }
          if (h.child === y.child) {
            for (y = h.child; y; ) {
              if (y === i) return M(h), a;
              if (y === o) return M(h), n;
              y = y.sibling;
            }
            throw Error(p(188));
          }
          if (i.return !== o.return) i = h, o = y;
          else {
            for (var b = !1, z = h.child; z; ) {
              if (z === i) {
                b = !0, i = h, o = y;
                break;
              }
              if (z === o) {
                b = !0, o = h, i = y;
                break;
              }
              z = z.sibling;
            }
            if (!b) {
              for (z = y.child; z; ) {
                if (z === i) {
                  b = !0, i = y, o = h;
                  break;
                }
                if (z === o) {
                  b = !0, o = y, i = h;
                  break;
                }
                z = z.sibling;
              }
              if (!b) throw Error(p(189));
            }
          }
          if (i.alternate !== o) throw Error(p(190));
        }
        if (i.tag !== 3) throw Error(p(188));
        return i.stateNode.current === i ? a : n;
      }
      function U(a) {
        var n = a.tag;
        if (n === 5 || n === 26 || n === 27 || n === 6) return a;
        for (a = a.child; a !== null; ) {
          if (n = U(a), n !== null) return n;
          a = a.sibling;
        }
        return null;
      }
      function V(a) {
        var n = a.tag;
        if (n === 5 || n === 26 || n === 27 || n === 6) return a;
        for (a = a.child; a !== null; ) {
          if (a.tag !== 4 && (n = V(a), n !== null))
            return n;
          a = a.sibling;
        }
        return null;
      }
      function P(a) {
        return { current: a };
      }
      function G(a) {
        0 > uu || (a.current = Gl[uu], Gl[uu] = null, uu--);
      }
      function N(a, n) {
        uu++, Gl[uu] = a.current, a.current = n;
      }
      function $(a) {
        return a >>>= 0, a === 0 ? 32 : 31 - (Ur(a) / Wn | 0) | 0;
      }
      function Z(a) {
        var n = a & 42;
        if (n !== 0) return n;
        switch (a & -a) {
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
            return 64;
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
            return a & 4194176;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            return a & 62914560;
          case 67108864:
            return 67108864;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 0;
          default:
            return a;
        }
      }
      function ce(a, n) {
        var i = a.pendingLanes;
        if (i === 0) return 0;
        var o = 0, h = a.suspendedLanes, y = a.pingedLanes, b = a.warmLanes;
        a = a.finishedLanes !== 0;
        var z = i & 134217727;
        return z !== 0 ? (i = z & ~h, i !== 0 ? o = Z(i) : (y &= z, y !== 0 ? o = Z(y) : a || (b = z & ~b, b !== 0 && (o = Z(b))))) : (z = i & ~h, z !== 0 ? o = Z(z) : y !== 0 ? o = Z(y) : a || (b = i & ~b, b !== 0 && (o = Z(b)))), o === 0 ? 0 : n !== 0 && n !== o && (n & h) === 0 && (h = o & -o, b = n & -n, h >= b || h === 32 && (b & 4194176) !== 0) ? n : o;
      }
      function W(a, n) {
        return (a.pendingLanes & ~(a.suspendedLanes & ~a.pingedLanes) & n) === 0;
      }
      function Ce(a, n) {
        switch (a) {
          case 1:
          case 2:
          case 4:
          case 8:
            return n + 250;
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
            return n + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            return -1;
          case 67108864:
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function ne() {
        var a = Zc;
        return Zc <<= 1, (Zc & 4194176) === 0 && (Zc = 128), a;
      }
      function se() {
        var a = Nr;
        return Nr <<= 1, (Nr & 62914560) === 0 && (Nr = 4194304), a;
      }
      function fe(a) {
        for (var n = [], i = 0; 31 > i; i++) n.push(a);
        return n;
      }
      function He(a, n) {
        a.pendingLanes |= n, n !== 268435456 && (a.suspendedLanes = 0, a.pingedLanes = 0, a.warmLanes = 0);
      }
      function Xe(a, n, i, o, h, y) {
        var b = a.pendingLanes;
        a.pendingLanes = i, a.suspendedLanes = 0, a.pingedLanes = 0, a.warmLanes = 0, a.expiredLanes &= i, a.entangledLanes &= i, a.errorRecoveryDisabledLanes &= i, a.shellSuspendCounter = 0;
        var z = a.entanglements, I = a.expirationTimes, pe = a.hiddenUpdates;
        for (i = b & ~i; 0 < i; ) {
          var _e = 31 - Sn(i), Le = 1 << _e;
          z[_e] = 0, I[_e] = -1;
          var Ge = pe[_e];
          if (Ge !== null)
            for (pe[_e] = null, _e = 0; _e < Ge.length; _e++) {
              var Fe = Ge[_e];
              Fe !== null && (Fe.lane &= -536870913);
            }
          i &= ~Le;
        }
        o !== 0 && ee(a, o, 0), y !== 0 && h === 0 && a.tag !== 0 && (a.suspendedLanes |= y & ~(b & ~n));
      }
      function ee(a, n, i) {
        a.pendingLanes |= n, a.suspendedLanes &= ~n;
        var o = 31 - Sn(n);
        a.entangledLanes |= n, a.entanglements[o] = a.entanglements[o] | 1073741824 | i & 4194218;
      }
      function Te(a, n) {
        var i = a.entangledLanes |= n;
        for (a = a.entanglements; i; ) {
          var o = 31 - Sn(i), h = 1 << o;
          h & n | a[o] & n && (a[o] |= n), i &= ~h;
        }
      }
      function Ve(a) {
        return a &= -a, 2 < a ? 8 < a ? (a & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
      }
      function D(a) {
        if (Ln && typeof Ln.onCommitFiberRoot == "function")
          try {
            Ln.onCommitFiberRoot(
              es,
              a,
              void 0,
              (a.current.flags & 128) === 128
            );
          } catch {
          }
      }
      function Q(a) {
        if (typeof Bp == "function" && gp(a), Ln && typeof Ln.setStrictMode == "function")
          try {
            Ln.setStrictMode(es, a);
          } catch {
          }
      }
      function X(a, n) {
        return a === n && (a !== 0 || 1 / a === 1 / n) || a !== a && n !== n;
      }
      function re(a, n) {
        if (typeof a == "object" && a !== null) {
          var i = zr.get(a);
          return i !== void 0 ? i : (n = {
            value: a,
            source: n,
            stack: R(n)
          }, zr.set(a, n), n);
        }
        return {
          value: a,
          source: n,
          stack: R(n)
        };
      }
      function x(a, n) {
        Ia[wa++] = xr, Ia[wa++] = La, La = a, xr = n;
      }
      function me(a, n, i) {
        yl[kn++] = qu, yl[kn++] = Fu, yl[kn++] = Al, Al = a;
        var o = qu;
        a = Fu;
        var h = 32 - Sn(o) - 1;
        o &= ~(1 << h), i += 1;
        var y = 32 - Sn(n) + h;
        if (30 < y) {
          var b = h - h % 5;
          y = (o & (1 << b) - 1).toString(32), o >>= b, h -= b, qu = 1 << 32 - Sn(n) + h | i << h | o, Fu = y + a;
        } else
          qu = 1 << y | i << h | o, Fu = a;
      }
      function de(a) {
        a.return !== null && (x(a, 1), me(a, 1, 0));
      }
      function Ke(a) {
        for (; a === La; )
          La = Ia[--wa], Ia[wa] = null, xr = Ia[--wa], Ia[wa] = null;
        for (; a === Al; )
          Al = yl[--kn], yl[kn] = null, Fu = yl[--kn], yl[kn] = null, qu = yl[--kn], yl[kn] = null;
      }
      function Ne(a, n) {
        N(Ti, n), N(Ic, a), N(Pa, null), a = Ys(n), G(Pa), N(Pa, a);
      }
      function Ie() {
        G(Pa), G(Ic), G(Ti);
      }
      function tt(a) {
        a.memoizedState !== null && N(qs, a);
        var n = Pa.current, i = wm(n, a.type);
        n !== i && (N(Ic, a), N(Pa, i));
      }
      function $t(a) {
        Ic.current === a && (G(Pa), G(Ic)), qs.current === a && (G(qs), lu ? Vu._currentValue = Pi : Vu._currentValue2 = Pi);
      }
      function vt(a) {
        var n = Error(p(418, ""));
        throw Rl(re(n, a)), wc;
      }
      function bn(a, n) {
        if (!En) throw Error(p(175));
        Od(
          a.stateNode,
          a.type,
          a.memoizedProps,
          n,
          a
        ) || vt(a);
      }
      function Tl(a) {
        for (on = a.return; on; )
          switch (on.tag) {
            case 3:
            case 27:
              iu = !0;
              return;
            case 5:
            case 13:
              iu = !1;
              return;
            default:
              on = on.return;
          }
      }
      function Dn(a) {
        if (!En || a !== on) return !1;
        if (!Ct) return Tl(a), Ct = !0, !1;
        var n = !1;
        if (ra ? a.tag !== 3 && a.tag !== 27 && (a.tag !== 5 || br(a.type) && !Qu(a.type, a.memoizedProps)) && (n = !0) : a.tag !== 3 && (a.tag !== 5 || br(a.type) && !Qu(a.type, a.memoizedProps)) && (n = !0), n && Da && vt(a), Tl(a), a.tag === 13) {
          if (!En) throw Error(p(316));
          if (a = a.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(p(317));
          Da = Ud(a);
        } else
          Da = on ? fp(a.stateNode) : null;
        return !0;
      }
      function _n() {
        En && (Da = on = null, Ct = !1);
      }
      function Rl(a) {
        zl === null ? zl = [a] : zl.push(a);
      }
      function Ml() {
        for (var a = va, n = su = va = 0; n < a; ) {
          var i = Ea[n];
          Ea[n++] = null;
          var o = Ea[n];
          Ea[n++] = null;
          var h = Ea[n];
          Ea[n++] = null;
          var y = Ea[n];
          if (Ea[n++] = null, o !== null && h !== null) {
            var b = o.pending;
            b === null ? h.next = h : (h.next = b.next, b.next = h), o.pending = h;
          }
          y !== 0 && li(i, h, y);
        }
      }
      function Vl(a, n, i, o) {
        Ea[va++] = a, Ea[va++] = n, Ea[va++] = i, Ea[va++] = o, su |= o, a.lanes |= o, a = a.alternate, a !== null && (a.lanes |= o);
      }
      function ni(a, n, i, o) {
        return Vl(a, n, i, o), Mu(a);
      }
      function Hn(a, n) {
        return Vl(a, null, null, n), Mu(a);
      }
      function li(a, n, i) {
        a.lanes |= i;
        var o = a.alternate;
        o !== null && (o.lanes |= i);
        for (var h = !1, y = a.return; y !== null; )
          y.childLanes |= i, o = y.alternate, o !== null && (o.childLanes |= i), y.tag === 22 && (a = y.stateNode, a === null || a._visibility & 1 || (h = !0)), a = y, y = y.return;
        h && n !== null && a.tag === 3 && (y = a.stateNode, h = 31 - Sn(i), y = y.hiddenUpdates, a = y[h], a === null ? y[h] = [n] : a.push(n), n.lane = i | 536870912);
      }
      function Mu(a) {
        if (50 < lo)
          throw lo = 0, nc = null, Error(p(185));
        for (var n = a.return; n !== null; )
          a = n, n = a.return;
        return a.tag === 3 ? a.stateNode : null;
      }
      function On(a) {
        a !== ts && a.next === null && (ts === null ? gn = ts = a : ts = ts.next = a), Wa = !0, jd || (jd = !0, Ts(Cs));
      }
      function gt(a, n) {
        if (!Iu && Wa) {
          Iu = !0;
          do
            for (var i = !1, o = gn; o !== null; ) {
              if (a !== 0) {
                var h = o.pendingLanes;
                if (h === 0) var y = 0;
                else {
                  var b = o.suspendedLanes, z = o.pingedLanes;
                  y = (1 << 31 - Sn(42 | a) + 1) - 1, y &= h & ~(b & ~z), y = y & 201326677 ? y & 201326677 | 1 : y ? y | 2 : 0;
                }
                y !== 0 && (i = !0, Qn(o, y));
              } else
                y = At, y = ce(
                  o,
                  o === qt ? y : 0
                ), (y & 3) === 0 || W(o, y) || (i = !0, Qn(o, y));
              o = o.next;
            }
          while (i);
          Iu = !1;
        }
      }
      function Cs() {
        Wa = jd = !1;
        var a = 0;
        Fs !== 0 && (Wm() && (a = Fs), Fs = 0);
        for (var n = vl(), i = null, o = gn; o !== null; ) {
          var h = o.next, y = Zl(o, n);
          y === 0 ? (o.next = null, i === null ? gn = h : i.next = h, h === null && (ts = i)) : (i = o, (a !== 0 || (y & 3) !== 0) && (Wa = !0)), o = h;
        }
        gt(a);
      }
      function Zl(a, n) {
        for (var i = a.suspendedLanes, o = a.pingedLanes, h = a.expirationTimes, y = a.pendingLanes & -62914561; 0 < y; ) {
          var b = 31 - Sn(y), z = 1 << b, I = h[b];
          I === -1 ? ((z & i) === 0 || (z & o) !== 0) && (h[b] = Ce(z, n)) : I <= n && (a.expiredLanes |= z), y &= ~z;
        }
        if (n = qt, i = At, i = ce(
          a,
          a === n ? i : 0
        ), o = a.callbackNode, i === 0 || a === n && Qt === 2 || a.cancelPendingCommit !== null)
          return o !== null && o !== null && Jd(o), a.callbackNode = null, a.callbackPriority = 0;
        if ((i & 3) === 0 || W(a, i)) {
          if (n = i & -i, n === a.callbackPriority) return n;
          switch (o !== null && Jd(o), Ve(i)) {
            case 2:
            case 8:
              i = Ep;
              break;
            case 32:
              i = Gr;
              break;
            case 268435456:
              i = Sp;
              break;
            default:
              i = Gr;
          }
          return o = Un.bind(null, a), i = qc(i, o), a.callbackPriority = n, a.callbackNode = i, n;
        }
        return o !== null && o !== null && Jd(o), a.callbackPriority = 2, a.callbackNode = null, 2;
      }
      function Un(a, n) {
        var i = a.callbackNode;
        if (au() && a.callbackNode !== i)
          return null;
        var o = At;
        return o = ce(
          a,
          a === qt ? o : 0
        ), o === 0 ? null : (sr(a, o, n), Zl(a, vl()), a.callbackNode != null && a.callbackNode === i ? Un.bind(null, a) : null);
      }
      function Qn(a, n) {
        if (au()) return null;
        sr(a, n, !0);
      }
      function Ts(a) {
        zh ? Zu(function() {
          (jt & 6) !== 0 ? qc(Kd, a) : a();
        }) : qc(Kd, a);
      }
      function bu() {
        return Fs === 0 && (Fs = ne()), Fs;
      }
      function il(a, n) {
        if (Pc === null) {
          var i = Pc = [];
          Qd = 0, Is = bu(), as = {
            status: "pending",
            value: void 0,
            then: function(o) {
              i.push(o);
            }
          };
        }
        return Qd++, n.then(Du, Du), n;
      }
      function Du() {
        if (--Qd === 0 && Pc !== null) {
          as !== null && (as.status = "fulfilled");
          var a = Pc;
          Pc = null, Is = 0, as = null;
          for (var n = 0; n < a.length; n++) (0, a[n])();
        }
      }
      function Ya(a, n) {
        var i = [], o = {
          status: "pending",
          value: null,
          reason: null,
          then: function(h) {
            i.push(h);
          }
        };
        return a.then(
          function() {
            o.status = "fulfilled", o.value = n;
            for (var h = 0; h < i.length; h++) (0, i[h])(n);
          },
          function(h) {
            for (o.status = "rejected", o.reason = h, h = 0; h < i.length; h++)
              (0, i[h])(void 0);
          }
        ), o;
      }
      function Nn(a) {
        a.updateQueue = {
          baseState: a.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null, lanes: 0, hiddenCallbacks: null },
          callbacks: null
        };
      }
      function ui(a, n) {
        a = a.updateQueue, n.updateQueue === a && (n.updateQueue = {
          baseState: a.baseState,
          firstBaseUpdate: a.firstBaseUpdate,
          lastBaseUpdate: a.lastBaseUpdate,
          shared: a.shared,
          callbacks: null
        });
      }
      function Oa(a) {
        return { lane: a, tag: 0, payload: null, callback: null, next: null };
      }
      function Jt(a, n, i) {
        var o = a.updateQueue;
        if (o === null) return null;
        if (o = o.shared, (jt & 2) !== 0) {
          var h = o.pending;
          return h === null ? n.next = n : (n.next = h.next, h.next = n), o.pending = n, n = Mu(a), li(a, null, i), n;
        }
        return Vl(a, o, n, i), Mu(a);
      }
      function Ua(a, n, i) {
        if (n = n.updateQueue, n !== null && (n = n.shared, (i & 4194176) !== 0)) {
          var o = n.lanes;
          o &= a.pendingLanes, i |= o, n.lanes = i, Te(a, i);
        }
      }
      function Y(a, n) {
        var i = a.updateQueue, o = a.alternate;
        if (o !== null && (o = o.updateQueue, i === o)) {
          var h = null, y = null;
          if (i = i.firstBaseUpdate, i !== null) {
            do {
              var b = {
                lane: i.lane,
                tag: i.tag,
                payload: i.payload,
                callback: null,
                next: null
              };
              y === null ? h = y = b : y = y.next = b, i = i.next;
            } while (i !== null);
            y === null ? h = y = n : y = y.next = n;
          } else h = y = n;
          i = {
            baseState: o.baseState,
            firstBaseUpdate: h,
            lastBaseUpdate: y,
            shared: o.shared,
            callbacks: o.callbacks
          }, a.updateQueue = i;
          return;
        }
        a = i.lastBaseUpdate, a === null ? i.firstBaseUpdate = n : a.next = n, i.lastBaseUpdate = n;
      }
      function Ae() {
        if (Lr) {
          var a = as;
          if (a !== null) throw a;
        }
      }
      function ze(a, n, i, o) {
        Lr = !1;
        var h = a.updateQueue;
        Ri = !1;
        var y = h.firstBaseUpdate, b = h.lastBaseUpdate, z = h.shared.pending;
        if (z !== null) {
          h.shared.pending = null;
          var I = z, pe = I.next;
          I.next = null, b === null ? y = pe : b.next = pe, b = I;
          var _e = a.alternate;
          _e !== null && (_e = _e.updateQueue, z = _e.lastBaseUpdate, z !== b && (z === null ? _e.firstBaseUpdate = pe : z.next = pe, _e.lastBaseUpdate = I));
        }
        if (y !== null) {
          var Le = h.baseState;
          b = 0, _e = pe = I = null, z = y;
          do {
            var Ge = z.lane & -536870913, Fe = Ge !== z.lane;
            if (Fe ? (At & Ge) === Ge : (o & Ge) === Ge) {
              Ge !== 0 && Ge === Is && (Lr = !0), _e !== null && (_e = _e.next = {
                lane: 0,
                tag: z.tag,
                payload: z.payload,
                callback: null,
                next: null
              });
              e: {
                var Oe = a, Kn = z;
                Ge = n;
                var $a = i;
                switch (Kn.tag) {
                  case 1:
                    if (Oe = Kn.payload, typeof Oe == "function") {
                      Le = Oe.call(
                        $a,
                        Le,
                        Ge
                      );
                      break e;
                    }
                    Le = Oe;
                    break e;
                  case 3:
                    Oe.flags = Oe.flags & -65537 | 128;
                  case 0:
                    if (Oe = Kn.payload, Ge = typeof Oe == "function" ? Oe.call($a, Le, Ge) : Oe, Ge == null) break e;
                    Le = Ju({}, Le, Ge);
                    break e;
                  case 2:
                    Ri = !0;
                }
              }
              Ge = z.callback, Ge !== null && (a.flags |= 64, Fe && (a.flags |= 8192), Fe = h.callbacks, Fe === null ? h.callbacks = [Ge] : Fe.push(Ge));
            } else
              Fe = {
                lane: Ge,
                tag: z.tag,
                payload: z.payload,
                callback: z.callback,
                next: null
              }, _e === null ? (pe = _e = Fe, I = Le) : _e = _e.next = Fe, b |= Ge;
            if (z = z.next, z === null) {
              if (z = h.shared.pending, z === null)
                break;
              Fe = z, z = Fe.next, Fe.next = null, h.lastBaseUpdate = Fe, h.shared.pending = null;
            }
          } while (!0);
          _e === null && (I = Le), h.baseState = I, h.firstBaseUpdate = pe, h.lastBaseUpdate = _e, y === null && (h.shared.lanes = 0), _i |= b, a.lanes = b, a.memoizedState = Le;
        }
      }
      function et(a, n) {
        if (typeof a != "function")
          throw Error(p(191, a));
        a.call(n);
      }
      function be(a, n) {
        var i = a.callbacks;
        if (i !== null)
          for (a.callbacks = null, a = 0; a < i.length; a++)
            et(i[a], n);
      }
      function aa(a, n) {
        if (Bn(a, n)) return !0;
        if (typeof a != "object" || a === null || typeof n != "object" || n === null)
          return !1;
        var i = Object.keys(a), o = Object.keys(n);
        if (i.length !== o.length) return !1;
        for (o = 0; o < i.length; o++) {
          var h = i[o];
          if (!Ih.call(n, h) || !Bn(a[h], n[h]))
            return !1;
        }
        return !0;
      }
      function Gn(a) {
        return a = a.status, a === "fulfilled" || a === "rejected";
      }
      function ba() {
      }
      function sl(a, n, i) {
        switch (i = a[i], i === void 0 ? a.push(n) : i !== n && (n.then(ba, ba), n = i), n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw a = n.reason, a === cu ? Error(p(483)) : a;
          default:
            if (typeof n.status == "string") n.then(ba, ba);
            else {
              if (a = qt, a !== null && 100 < a.shellSuspendCounter)
                throw Error(p(482));
              a = n, a.status = "pending", a.then(
                function(o) {
                  if (n.status === "pending") {
                    var h = n;
                    h.status = "fulfilled", h.value = o;
                  }
                },
                function(o) {
                  if (n.status === "pending") {
                    var h = n;
                    h.status = "rejected", h.reason = o;
                  }
                }
              );
            }
            switch (n.status) {
              case "fulfilled":
                return n.value;
              case "rejected":
                throw a = n.reason, a === cu ? Error(p(483)) : a;
            }
            throw ws = n, cu;
        }
      }
      function ya() {
        if (ws === null) throw Error(p(459));
        var a = ws;
        return ws = null, a;
      }
      function Xa(a) {
        var n = Wc;
        return Wc += 1, Ps === null && (Ps = []), sl(Ps, a, n);
      }
      function Va(a, n) {
        n = n.props.ref, a.ref = n !== void 0 ? n : null;
      }
      function pn(a, n) {
        throw n.$$typeof === In ? Error(p(525)) : (a = Object.prototype.toString.call(n), Error(
          p(
            31,
            a === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : a
          )
        ));
      }
      function cl(a) {
        var n = a._init;
        return n(a._payload);
      }
      function Yn(a) {
        function n(w, F) {
          if (a) {
            var te = w.deletions;
            te === null ? (w.deletions = [F], w.flags |= 16) : te.push(F);
          }
        }
        function i(w, F) {
          if (!a) return null;
          for (; F !== null; )
            n(w, F), F = F.sibling;
          return null;
        }
        function o(w) {
          for (var F = /* @__PURE__ */ new Map(); w !== null; )
            w.key !== null ? F.set(w.key, w) : F.set(w.index, w), w = w.sibling;
          return F;
        }
        function h(w, F) {
          return w = ml(w, F), w.index = 0, w.sibling = null, w;
        }
        function y(w, F, te) {
          return w.index = te, a ? (te = w.alternate, te !== null ? (te = te.index, te < F ? (w.flags |= 33554434, F) : te) : (w.flags |= 33554434, F)) : (w.flags |= 1048576, F);
        }
        function b(w) {
          return a && w.alternate === null && (w.flags |= 33554434), w;
        }
        function z(w, F, te, ge) {
          return F === null || F.tag !== 6 ? (F = pl(te, w.mode, ge), F.return = w, F) : (F = h(F, te), F.return = w, F);
        }
        function I(w, F, te, ge) {
          var Ze = te.type;
          return Ze === Ii ? _e(
            w,
            F,
            te.props.children,
            ge,
            te.key
          ) : F !== null && (F.elementType === Ze || typeof Ze == "object" && Ze !== null && Ze.$$typeof === Ku && cl(Ze) === F.type) ? (F = h(F, te.props), Va(F, te), F.return = w, F) : (F = mr(
            te.type,
            te.key,
            te.props,
            null,
            w.mode,
            ge
          ), Va(F, te), F.return = w, F);
        }
        function pe(w, F, te, ge) {
          return F === null || F.tag !== 4 || F.stateNode.containerInfo !== te.containerInfo || F.stateNode.implementation !== te.implementation ? (F = pr(te, w.mode, ge), F.return = w, F) : (F = h(F, te.children || []), F.return = w, F);
        }
        function _e(w, F, te, ge, Ze) {
          return F === null || F.tag !== 7 ? (F = qi(
            te,
            w.mode,
            ge,
            Ze
          ), F.return = w, F) : (F = h(F, te), F.return = w, F);
        }
        function Le(w, F, te) {
          if (typeof F == "string" && F !== "" || typeof F == "number" || typeof F == "bigint")
            return F = pl(
              "" + F,
              w.mode,
              te
            ), F.return = w, F;
          if (typeof F == "object" && F !== null) {
            switch (F.$$typeof) {
              case Qc:
                return te = mr(
                  F.type,
                  F.key,
                  F.props,
                  null,
                  w.mode,
                  te
                ), Va(te, F), te.return = w, te;
              case js:
                return F = pr(
                  F,
                  w.mode,
                  te
                ), F.return = w, F;
              case Ku:
                var ge = F._init;
                return F = ge(F._payload), Le(w, F, te);
            }
            if (sn(F) || v(F))
              return F = qi(
                F,
                w.mode,
                te,
                null
              ), F.return = w, F;
            if (typeof F.then == "function")
              return Le(w, Xa(F), te);
            if (F.$$typeof === Ul)
              return Le(
                w,
                Hc(w, F),
                te
              );
            pn(w, F);
          }
          return null;
        }
        function Ge(w, F, te, ge) {
          var Ze = F !== null ? F.key : null;
          if (typeof te == "string" && te !== "" || typeof te == "number" || typeof te == "bigint")
            return Ze !== null ? null : z(w, F, "" + te, ge);
          if (typeof te == "object" && te !== null) {
            switch (te.$$typeof) {
              case Qc:
                return te.key === Ze ? I(w, F, te, ge) : null;
              case js:
                return te.key === Ze ? pe(w, F, te, ge) : null;
              case Ku:
                return Ze = te._init, te = Ze(te._payload), Ge(w, F, te, ge);
            }
            if (sn(te) || v(te))
              return Ze !== null ? null : _e(w, F, te, ge, null);
            if (typeof te.then == "function")
              return Ge(
                w,
                F,
                Xa(te),
                ge
              );
            if (te.$$typeof === Ul)
              return Ge(
                w,
                F,
                Hc(w, te),
                ge
              );
            pn(w, te);
          }
          return null;
        }
        function Fe(w, F, te, ge, Ze) {
          if (typeof ge == "string" && ge !== "" || typeof ge == "number" || typeof ge == "bigint")
            return w = w.get(te) || null, z(F, w, "" + ge, Ze);
          if (typeof ge == "object" && ge !== null) {
            switch (ge.$$typeof) {
              case Qc:
                return w = w.get(
                  ge.key === null ? te : ge.key
                ) || null, I(F, w, ge, Ze);
              case js:
                return w = w.get(
                  ge.key === null ? te : ge.key
                ) || null, pe(F, w, ge, Ze);
              case Ku:
                var Yt = ge._init;
                return ge = Yt(ge._payload), Fe(
                  w,
                  F,
                  te,
                  ge,
                  Ze
                );
            }
            if (sn(ge) || v(ge))
              return w = w.get(te) || null, _e(F, w, ge, Ze, null);
            if (typeof ge.then == "function")
              return Fe(
                w,
                F,
                te,
                Xa(ge),
                Ze
              );
            if (ge.$$typeof === Ul)
              return Fe(
                w,
                F,
                te,
                Hc(F, ge),
                Ze
              );
            pn(F, ge);
          }
          return null;
        }
        function Oe(w, F, te, ge) {
          for (var Ze = null, Yt = null, qe = F, it = F = 0, ea = null; qe !== null && it < te.length; it++) {
            qe.index > it ? (ea = qe, qe = null) : ea = qe.sibling;
            var ot = Ge(
              w,
              qe,
              te[it],
              ge
            );
            if (ot === null) {
              qe === null && (qe = ea);
              break;
            }
            a && qe && ot.alternate === null && n(w, qe), F = y(ot, F, it), Yt === null ? Ze = ot : Yt.sibling = ot, Yt = ot, qe = ea;
          }
          if (it === te.length)
            return i(w, qe), Ct && x(w, it), Ze;
          if (qe === null) {
            for (; it < te.length; it++)
              qe = Le(w, te[it], ge), qe !== null && (F = y(
                qe,
                F,
                it
              ), Yt === null ? Ze = qe : Yt.sibling = qe, Yt = qe);
            return Ct && x(w, it), Ze;
          }
          for (qe = o(qe); it < te.length; it++)
            ea = Fe(
              qe,
              w,
              it,
              te[it],
              ge
            ), ea !== null && (a && ea.alternate !== null && qe.delete(
              ea.key === null ? it : ea.key
            ), F = y(
              ea,
              F,
              it
            ), Yt === null ? Ze = ea : Yt.sibling = ea, Yt = ea);
          return a && qe.forEach(function(fn) {
            return n(w, fn);
          }), Ct && x(w, it), Ze;
        }
        function Kn(w, F, te, ge) {
          if (te == null) throw Error(p(151));
          for (var Ze = null, Yt = null, qe = F, it = F = 0, ea = null, ot = te.next(); qe !== null && !ot.done; it++, ot = te.next()) {
            qe.index > it ? (ea = qe, qe = null) : ea = qe.sibling;
            var fn = Ge(w, qe, ot.value, ge);
            if (fn === null) {
              qe === null && (qe = ea);
              break;
            }
            a && qe && fn.alternate === null && n(w, qe), F = y(fn, F, it), Yt === null ? Ze = fn : Yt.sibling = fn, Yt = fn, qe = ea;
          }
          if (ot.done)
            return i(w, qe), Ct && x(w, it), Ze;
          if (qe === null) {
            for (; !ot.done; it++, ot = te.next())
              ot = Le(w, ot.value, ge), ot !== null && (F = y(
                ot,
                F,
                it
              ), Yt === null ? Ze = ot : Yt.sibling = ot, Yt = ot);
            return Ct && x(w, it), Ze;
          }
          for (qe = o(qe); !ot.done; it++, ot = te.next())
            ot = Fe(
              qe,
              w,
              it,
              ot.value,
              ge
            ), ot !== null && (a && ot.alternate !== null && qe.delete(ot.key === null ? it : ot.key), F = y(ot, F, it), Yt === null ? Ze = ot : Yt.sibling = ot, Yt = ot);
          return a && qe.forEach(function(Hi) {
            return n(w, Hi);
          }), Ct && x(w, it), Ze;
        }
        function $a(w, F, te, ge) {
          if (typeof te == "object" && te !== null && te.type === Ii && te.key === null && (te = te.props.children), typeof te == "object" && te !== null) {
            switch (te.$$typeof) {
              case Qc:
                e: {
                  for (var Ze = te.key; F !== null; ) {
                    if (F.key === Ze) {
                      if (Ze = te.type, Ze === Ii) {
                        if (F.tag === 7) {
                          i(
                            w,
                            F.sibling
                          ), ge = h(
                            F,
                            te.props.children
                          ), ge.return = w, w = ge;
                          break e;
                        }
                      } else if (F.elementType === Ze || typeof Ze == "object" && Ze !== null && Ze.$$typeof === Ku && cl(Ze) === F.type) {
                        i(
                          w,
                          F.sibling
                        ), ge = h(F, te.props), Va(ge, te), ge.return = w, w = ge;
                        break e;
                      }
                      i(w, F);
                      break;
                    } else n(w, F);
                    F = F.sibling;
                  }
                  te.type === Ii ? (ge = qi(
                    te.props.children,
                    w.mode,
                    ge,
                    te.key
                  ), ge.return = w, w = ge) : (ge = mr(
                    te.type,
                    te.key,
                    te.props,
                    null,
                    w.mode,
                    ge
                  ), Va(ge, te), ge.return = w, w = ge);
                }
                return b(w);
              case js:
                e: {
                  for (Ze = te.key; F !== null; ) {
                    if (F.key === Ze)
                      if (F.tag === 4 && F.stateNode.containerInfo === te.containerInfo && F.stateNode.implementation === te.implementation) {
                        i(
                          w,
                          F.sibling
                        ), ge = h(
                          F,
                          te.children || []
                        ), ge.return = w, w = ge;
                        break e;
                      } else {
                        i(w, F);
                        break;
                      }
                    else n(w, F);
                    F = F.sibling;
                  }
                  ge = pr(te, w.mode, ge), ge.return = w, w = ge;
                }
                return b(w);
              case Ku:
                return Ze = te._init, te = Ze(te._payload), $a(
                  w,
                  F,
                  te,
                  ge
                );
            }
            if (sn(te))
              return Oe(
                w,
                F,
                te,
                ge
              );
            if (v(te)) {
              if (Ze = v(te), typeof Ze != "function")
                throw Error(p(150));
              return te = Ze.call(te), Kn(
                w,
                F,
                te,
                ge
              );
            }
            if (typeof te.then == "function")
              return $a(
                w,
                F,
                Xa(te),
                ge
              );
            if (te.$$typeof === Ul)
              return $a(
                w,
                F,
                Hc(w, te),
                ge
              );
            pn(w, te);
          }
          return typeof te == "string" && te !== "" || typeof te == "number" || typeof te == "bigint" ? (te = "" + te, F !== null && F.tag === 6 ? (i(w, F.sibling), ge = h(F, te), ge.return = w, w = ge) : (i(w, F), ge = pl(te, w.mode, ge), ge.return = w, w = ge), b(w)) : i(w, F);
        }
        return function(w, F, te, ge) {
          try {
            Wc = 0;
            var Ze = $a(
              w,
              F,
              te,
              ge
            );
            return Ps = null, Ze;
          } catch (qe) {
            if (qe === cu) throw qe;
            var Yt = r(29, qe, null, w.mode);
            return Yt.lanes = ge, Yt.return = w, Yt;
          } finally {
          }
        };
      }
      function _u(a, n) {
        a = mu, N(Kr, a), N(Ws, n), mu = a | n.baseLanes;
      }
      function Ji() {
        N(Kr, mu), N(Ws, Ws.current);
      }
      function ii() {
        mu = Kr.current, G(Ws), G(Kr);
      }
      function ql(a) {
        var n = a.alternate;
        N(_a, _a.current & 1), N(rn, a), ou === null && (n === null || Ws.current !== null || n.memoizedState !== null) && (ou = a);
      }
      function Hu(a) {
        if (a.tag === 22) {
          if (N(_a, _a.current), N(rn, a), ou === null) {
            var n = a.alternate;
            n !== null && n.memoizedState !== null && (ou = a);
          }
        } else an();
      }
      function an() {
        N(_a, _a.current), N(rn, rn.current);
      }
      function $e(a) {
        G(rn), ou === a && (ou = null), G(_a);
      }
      function Xn(a) {
        for (var n = a; n !== null; ) {
          if (n.tag === 13) {
            var i = n.memoizedState;
            if (i !== null && (i = i.dehydrated, i === null || Xc(i) || Rr(i)))
              return n;
          } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
            if ((n.flags & 128) !== 0) return n;
          } else if (n.child !== null) {
            n.child.return = n, n = n.child;
            continue;
          }
          if (n === a) break;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === a) return null;
            n = n.return;
          }
          n.sibling.return = n.return, n = n.sibling;
        }
        return null;
      }
      function It() {
        throw Error(p(321));
      }
      function g(a, n) {
        if (n === null) return !1;
        for (var i = 0; i < n.length && i < a.length; i++)
          if (!Bn(a[i], n[i])) return !1;
        return !0;
      }
      function H(a, n, i, o, h, y) {
        return Mi = y, ft = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, ke.H = a === null || a.memoizedState === null ? ls : bi, ns = !1, y = i(o, h), ns = !1, ks && (y = k(
          n,
          i,
          o,
          h
        )), L(a), y;
      }
      function L(a) {
        ke.H = ru;
        var n = Kt !== null && Kt.next !== null;
        if (Mi = 0, Sa = Kt = ft = null, jr = !1, kc = 0, $s = null, n) throw Error(p(300));
        a === null || Ja || (a = a.dependencies, a !== null && Ko(a) && (Ja = !0));
      }
      function k(a, n, i, o) {
        ft = a;
        var h = 0;
        do {
          if (ks && ($s = null), kc = 0, ks = !1, 25 <= h) throw Error(p(301));
          if (h += 1, Sa = Kt = null, a.updateQueue != null) {
            var y = a.updateQueue;
            y.lastEffect = null, y.events = null, y.stores = null, y.memoCache != null && (y.memoCache.index = 0);
          }
          ke.H = us, y = n(i, o);
        } while (ks);
        return y;
      }
      function oe() {
        var a = ke.H, n = a.useState()[0];
        return n = typeof n.then == "function" ? Ee(n) : n, a = a.useState()[0], (Kt !== null ? Kt.memoizedState : null) !== a && (ft.flags |= 1024), n;
      }
      function ie() {
        var a = Qr !== 0;
        return Qr = 0, a;
      }
      function Me(a, n, i) {
        n.updateQueue = a.updateQueue, n.flags &= -2053, a.lanes &= ~i;
      }
      function ye(a) {
        if (jr) {
          for (a = a.memoizedState; a !== null; ) {
            var n = a.queue;
            n !== null && (n.pending = null), a = a.next;
          }
          jr = !1;
        }
        Mi = 0, Sa = Kt = ft = null, ks = !1, kc = Qr = 0, $s = null;
      }
      function Se() {
        var a = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
        };
        return Sa === null ? ft.memoizedState = Sa = a : Sa = Sa.next = a, Sa;
      }
      function ve() {
        if (Kt === null) {
          var a = ft.alternate;
          a = a !== null ? a.memoizedState : null;
        } else a = Kt.next;
        var n = Sa === null ? ft.memoizedState : Sa.next;
        if (n !== null)
          Sa = n, Kt = a;
        else {
          if (a === null)
            throw ft.alternate === null ? Error(p(467)) : Error(p(310));
          Kt = a, a = {
            memoizedState: Kt.memoizedState,
            baseState: Kt.baseState,
            baseQueue: Kt.baseQueue,
            queue: Kt.queue,
            next: null
          }, Sa === null ? ft.memoizedState = Sa = a : Sa = Sa.next = a;
        }
        return Sa;
      }
      function Ee(a) {
        var n = kc;
        return kc += 1, $s === null && ($s = []), a = sl($s, a, n), n = ft, (Sa === null ? n.memoizedState : Sa.next) === null && (n = n.alternate, ke.H = n === null || n.memoizedState === null ? ls : bi), a;
      }
      function De(a) {
        if (a !== null && typeof a == "object") {
          if (typeof a.then == "function") return Ee(a);
          if (a.$$typeof === Ul) return Za(a);
        }
        throw Error(p(438, String(a)));
      }
      function Nt(a) {
        var n = null, i = ft.updateQueue;
        if (i !== null && (n = i.memoCache), n == null) {
          var o = ft.alternate;
          o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (n = {
            data: o.data.map(function(h) {
              return h.slice();
            }),
            index: 0
          })));
        }
        if (n == null && (n = { data: [], index: 0 }), i === null && (i = Yd(), ft.updateQueue = i), i.memoCache = n, i = n.data[n.index], i === void 0)
          for (i = n.data[n.index] = Array(a), o = 0; o < a; o++)
            i[o] = dd;
        return n.index++, i;
      }
      function xe(a, n) {
        return typeof n == "function" ? n(a) : n;
      }
      function Ye(a) {
        var n = ve();
        return we(n, Kt, a);
      }
      function we(a, n, i) {
        var o = a.queue;
        if (o === null) throw Error(p(311));
        o.lastRenderedReducer = i;
        var h = a.baseQueue, y = o.pending;
        if (y !== null) {
          if (h !== null) {
            var b = h.next;
            h.next = y.next, y.next = b;
          }
          n.baseQueue = h = y, o.pending = null;
        }
        if (y = a.baseState, h === null) a.memoizedState = y;
        else {
          n = h.next;
          var z = b = null, I = null, pe = n, _e = !1;
          do {
            var Le = pe.lane & -536870913;
            if (Le !== pe.lane ? (At & Le) === Le : (Mi & Le) === Le) {
              var Ge = pe.revertLane;
              if (Ge === 0)
                I !== null && (I = I.next = {
                  lane: 0,
                  revertLane: 0,
                  action: pe.action,
                  hasEagerState: pe.hasEagerState,
                  eagerState: pe.eagerState,
                  next: null
                }), Le === Is && (_e = !0);
              else if ((Mi & Ge) === Ge) {
                pe = pe.next, Ge === Is && (_e = !0);
                continue;
              } else
                Le = {
                  lane: 0,
                  revertLane: pe.revertLane,
                  action: pe.action,
                  hasEagerState: pe.hasEagerState,
                  eagerState: pe.eagerState,
                  next: null
                }, I === null ? (z = I = Le, b = y) : I = I.next = Le, ft.lanes |= Ge, _i |= Ge;
              Le = pe.action, ns && i(y, Le), y = pe.hasEagerState ? pe.eagerState : i(y, Le);
            } else
              Ge = {
                lane: Le,
                revertLane: pe.revertLane,
                action: pe.action,
                hasEagerState: pe.hasEagerState,
                eagerState: pe.eagerState,
                next: null
              }, I === null ? (z = I = Ge, b = y) : I = I.next = Ge, ft.lanes |= Le, _i |= Le;
            pe = pe.next;
          } while (pe !== null && pe !== n);
          if (I === null ? b = y : I.next = z, !Bn(y, a.memoizedState) && (Ja = !0, _e && (i = as, i !== null)))
            throw i;
          a.memoizedState = y, a.baseState = b, a.baseQueue = I, o.lastRenderedState = y;
        }
        return h === null && (o.lanes = 0), [a.memoizedState, o.dispatch];
      }
      function at(a) {
        var n = ve(), i = n.queue;
        if (i === null) throw Error(p(311));
        i.lastRenderedReducer = a;
        var o = i.dispatch, h = i.pending, y = n.memoizedState;
        if (h !== null) {
          i.pending = null;
          var b = h = h.next;
          do
            y = a(y, b.action), b = b.next;
          while (b !== h);
          Bn(y, n.memoizedState) || (Ja = !0), n.memoizedState = y, n.baseQueue === null && (n.baseState = y), i.lastRenderedState = y;
        }
        return [y, o];
      }
      function Mt(a, n, i) {
        var o = ft, h = ve(), y = Ct;
        if (y) {
          if (i === void 0)
            throw Error(p(407));
          i = i();
        } else i = n();
        var b = !Bn(
          (Kt || h).memoizedState,
          i
        );
        if (b && (h.memoizedState = i, Ja = !0), h = h.queue, To(Vt.bind(null, o, h, a), [
          a
        ]), h.getSnapshot !== n || b || Sa !== null && Sa.memoizedState.tag & 1) {
          if (o.flags |= 2048, Vn(
            9,
            Ht.bind(
              null,
              o,
              h,
              i,
              n
            ),
            { destroy: void 0 },
            null
          ), qt === null) throw Error(p(349));
          y || (Mi & 60) !== 0 || Gt(o, n, i);
        }
        return i;
      }
      function Gt(a, n, i) {
        a.flags |= 16384, a = { getSnapshot: n, value: i }, n = ft.updateQueue, n === null ? (n = Yd(), ft.updateQueue = n, n.stores = [a]) : (i = n.stores, i === null ? n.stores = [a] : i.push(a));
      }
      function Ht(a, n, i, o) {
        n.value = i, n.getSnapshot = o, bt(n) && sa(a);
      }
      function Vt(a, n, i) {
        return i(function() {
          bt(n) && sa(a);
        });
      }
      function bt(a) {
        var n = a.getSnapshot;
        a = a.value;
        try {
          var i = n();
          return !Bn(a, i);
        } catch {
          return !0;
        }
      }
      function sa(a) {
        var n = Hn(a, 2);
        n !== null && qa(n, a, 2);
      }
      function Bt(a) {
        var n = Se();
        if (typeof a == "function") {
          var i = a;
          if (a = i(), ns) {
            Q(!0);
            try {
              i();
            } finally {
              Q(!1);
            }
          }
        }
        return n.memoizedState = n.baseState = a, n.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: xe,
          lastRenderedState: a
        }, n;
      }
      function ca(a, n, i, o) {
        return a.baseState = i, we(
          a,
          Kt,
          typeof o == "function" ? o : xe
        );
      }
      function ol(a, n, i, o, h) {
        if (Hs(a)) throw Error(p(485));
        if (a = n.action, a !== null) {
          var y = {
            payload: h,
            action: a,
            next: null,
            isTransition: !0,
            status: "pending",
            value: null,
            reason: null,
            listeners: [],
            then: function(b) {
              y.listeners.push(b);
            }
          };
          ke.T !== null ? i(!0) : y.isTransition = !1, o(y), i = n.pending, i === null ? (y.next = n.pending = y, Ou(n, y)) : (y.next = i.next, n.pending = i.next = y);
        }
      }
      function Ou(a, n) {
        var i = n.action, o = n.payload, h = a.state;
        if (n.isTransition) {
          var y = ke.T, b = {};
          ke.T = b;
          try {
            var z = i(h, o), I = ke.S;
            I !== null && I(b, z), nn(a, n, z);
          } catch (pe) {
            pa(a, n, pe);
          } finally {
            ke.T = y;
          }
        } else
          try {
            y = i(h, o), nn(a, n, y);
          } catch (pe) {
            pa(a, n, pe);
          }
      }
      function nn(a, n, i) {
        i !== null && typeof i == "object" && typeof i.then == "function" ? i.then(
          function(o) {
            Dt(a, n, o);
          },
          function(o) {
            return pa(a, n, o);
          }
        ) : Dt(a, n, i);
      }
      function Dt(a, n, i) {
        n.status = "fulfilled", n.value = i, xt(n), a.state = i, n = a.pending, n !== null && (i = n.next, i === n ? a.pending = null : (i = i.next, n.next = i, Ou(a, i)));
      }
      function pa(a, n, i) {
        var o = a.pending;
        if (a.pending = null, o !== null) {
          o = o.next;
          do
            n.status = "rejected", n.reason = i, xt(n), n = n.next;
          while (n !== o);
        }
        a.action = null;
      }
      function xt(a) {
        a = a.listeners;
        for (var n = 0; n < a.length; n++) (0, a[n])();
      }
      function _t(a, n) {
        return n;
      }
      function ln(a, n) {
        if (Ct) {
          var i = qt.formState;
          if (i !== null) {
            e: {
              var o = ft;
              if (Ct) {
                if (Da) {
                  var h = Vc(
                    Da,
                    iu
                  );
                  if (h) {
                    Da = fp(h), o = Yh(h);
                    break e;
                  }
                }
                vt(o);
              }
              o = !1;
            }
            o && (n = i[0]);
          }
        }
        i = Se(), i.memoizedState = i.baseState = n, o = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: _t,
          lastRenderedState: n
        }, i.queue = o, i = Nf.bind(
          null,
          ft,
          o
        ), o.dispatch = i, o = Bt(!1);
        var y = Tc.bind(
          null,
          ft,
          !1,
          o.queue
        );
        return o = Se(), h = {
          state: n,
          dispatch: null,
          action: a,
          pending: null
        }, o.queue = h, i = ol.bind(
          null,
          ft,
          h,
          y,
          i
        ), h.dispatch = i, o.memoizedState = a, [n, i, !1];
      }
      function Fl(a) {
        var n = ve();
        return Na(n, Kt, a);
      }
      function Na(a, n, i) {
        n = we(
          a,
          n,
          _t
        )[0], a = Ye(xe)[0], n = typeof n == "object" && n !== null && typeof n.then == "function" ? Ee(n) : n;
        var o = ve(), h = o.queue, y = h.dispatch;
        return i !== o.memoizedState && (ft.flags |= 2048, Vn(
          9,
          rl.bind(null, h, i),
          { destroy: void 0 },
          null
        )), [n, y, a];
      }
      function rl(a, n) {
        a.action = n;
      }
      function Uu(a) {
        var n = ve(), i = Kt;
        if (i !== null)
          return Na(n, i, a);
        ve(), n = n.memoizedState, i = ve();
        var o = i.queue.dispatch;
        return i.memoizedState = a, [n, o, !1];
      }
      function Vn(a, n, i, o) {
        return a = { tag: a, create: n, inst: i, deps: o, next: null }, n = ft.updateQueue, n === null && (n = Yd(), ft.updateQueue = n), i = n.lastEffect, i === null ? n.lastEffect = a.next = a : (o = i.next, i.next = a, a.next = o, n.lastEffect = a), a;
      }
      function Rs() {
        return ve().memoizedState;
      }
      function Ki(a, n, i, o) {
        var h = Se();
        ft.flags |= a, h.memoizedState = Vn(
          1 | n,
          i,
          { destroy: void 0 },
          o === void 0 ? null : o
        );
      }
      function si(a, n, i, o) {
        var h = ve();
        o = o === void 0 ? null : o;
        var y = h.memoizedState.inst;
        Kt !== null && o !== null && g(o, Kt.memoizedState.deps) ? h.memoizedState = Vn(n, i, y, o) : (ft.flags |= a, h.memoizedState = Vn(1 | n, i, y, o));
      }
      function Ms(a, n) {
        Ki(8390656, 8, a, n);
      }
      function To(a, n) {
        si(2048, 8, a, n);
      }
      function Jm(a, n) {
        return si(4, 2, a, n);
      }
      function _f(a, n) {
        return si(4, 4, a, n);
      }
      function Sc(a, n) {
        if (typeof n == "function") {
          a = a();
          var i = n(a);
          return function() {
            typeof i == "function" ? i() : n(null);
          };
        }
        if (n != null)
          return a = a(), n.current = a, function() {
            n.current = null;
          };
      }
      function Hf(a, n, i) {
        i = i != null ? i.concat([a]) : null, si(
          4,
          4,
          Sc.bind(null, n, a),
          i
        );
      }
      function Ro() {
      }
      function Bc(a, n) {
        var i = ve();
        n = n === void 0 ? null : n;
        var o = i.memoizedState;
        return n !== null && g(n, o[1]) ? o[0] : (i.memoizedState = [a, n], a);
      }
      function Of(a, n) {
        var i = ve();
        n = n === void 0 ? null : n;
        var o = i.memoizedState;
        if (n !== null && g(n, o[1]))
          return o[0];
        if (o = a(), ns) {
          Q(!0);
          try {
            a();
          } finally {
            Q(!1);
          }
        }
        return i.memoizedState = [o, n], o;
      }
      function Mo(a, n, i) {
        return i === void 0 || (Mi & 1073741824) !== 0 ? a.memoizedState = n : (a.memoizedState = i, a = If(), ft.lanes |= a, _i |= a, i);
      }
      function Uf(a, n, i, o) {
        return Bn(i, n) ? i : Ws.current !== null ? (a = Mo(a, i, o), Bn(a, n) || (Ja = !0), a) : (Mi & 42) === 0 ? (Ja = !0, a.memoizedState = i) : (a = If(), ft.lanes |= a, _i |= a, n);
      }
      function Ga(a, n, i, o, h) {
        var y = Xu();
        cn(
          y !== 0 && 8 > y ? y : 8
        );
        var b = ke.T, z = {};
        ke.T = z, Tc(a, !1, n, i);
        try {
          var I = h(), pe = ke.S;
          if (pe !== null && pe(z, I), I !== null && typeof I == "object" && typeof I.then == "function") {
            var _e = Ya(
              I,
              o
            );
            _s(
              a,
              n,
              _e,
              yn(a)
            );
          } else
            _s(
              a,
              n,
              o,
              yn(a)
            );
        } catch (Le) {
          _s(
            a,
            n,
            { then: function() {
            }, status: "rejected", reason: Le },
            yn()
          );
        } finally {
          cn(y), ke.T = b;
        }
      }
      function gc(a) {
        var n = a.memoizedState;
        if (n !== null) return n;
        n = {
          memoizedState: Pi,
          baseState: Pi,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: xe,
            lastRenderedState: Pi
          },
          next: null
        };
        var i = {};
        return n.next = {
          memoizedState: i,
          baseState: i,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: xe,
            lastRenderedState: i
          },
          next: null
        }, a.memoizedState = n, a = a.alternate, a !== null && (a.memoizedState = n), n;
      }
      function bs() {
        return Za(Vu);
      }
      function Ds() {
        return ve().memoizedState;
      }
      function Cc() {
        return ve().memoizedState;
      }
      function bo(a) {
        for (var n = a.return; n !== null; ) {
          switch (n.tag) {
            case 24:
            case 3:
              var i = yn();
              a = Oa(i);
              var o = Jt(n, a, i);
              o !== null && (qa(o, n, i), Ua(o, n, i)), n = { cache: Qo() }, a.payload = n;
              return;
          }
          n = n.return;
        }
      }
      function Do(a, n, i) {
        var o = yn();
        i = {
          lane: o,
          revertLane: 0,
          action: i,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, Hs(a) ? Nu(n, i) : (i = ni(a, n, i, o), i !== null && (qa(i, a, o), Gf(i, n, o)));
      }
      function Nf(a, n, i) {
        var o = yn();
        _s(a, n, i, o);
      }
      function _s(a, n, i, o) {
        var h = {
          lane: o,
          revertLane: 0,
          action: i,
          hasEagerState: !1,
          eagerState: null,
          next: null
        };
        if (Hs(a)) Nu(n, h);
        else {
          var y = a.alternate;
          if (a.lanes === 0 && (y === null || y.lanes === 0) && (y = n.lastRenderedReducer, y !== null))
            try {
              var b = n.lastRenderedState, z = y(b, i);
              if (h.hasEagerState = !0, h.eagerState = z, Bn(z, b))
                return Vl(a, n, h, 0), qt === null && Ml(), !1;
            } catch {
            } finally {
            }
          if (i = ni(a, n, h, o), i !== null)
            return qa(i, a, o), Gf(i, n, o), !0;
        }
        return !1;
      }
      function Tc(a, n, i, o) {
        if (o = {
          lane: 2,
          revertLane: bu(),
          action: o,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, Hs(a)) {
          if (n) throw Error(p(479));
        } else
          n = ni(
            a,
            i,
            o,
            2
          ), n !== null && qa(n, a, 2);
      }
      function Hs(a) {
        var n = a.alternate;
        return a === ft || n !== null && n === ft;
      }
      function Nu(a, n) {
        ks = jr = !0;
        var i = a.pending;
        i === null ? n.next = n : (n.next = i.next, i.next = n), a.pending = n;
      }
      function Gf(a, n, i) {
        if ((i & 4194176) !== 0) {
          var o = n.lanes;
          o &= a.pendingLanes, i |= o, n.lanes = i, Te(a, i);
        }
      }
      function Il(a, n, i, o) {
        n = a.memoizedState, i = i(o, n), i = i == null ? n : Ju({}, n, i), a.memoizedState = i, a.lanes === 0 && (a.updateQueue.baseState = i);
      }
      function wl(a, n, i, o, h, y, b) {
        return a = a.stateNode, typeof a.shouldComponentUpdate == "function" ? a.shouldComponentUpdate(o, y, b) : n.prototype && n.prototype.isPureReactComponent ? !aa(i, o) || !aa(h, y) : !0;
      }
      function Rc(a, n, i, o) {
        a = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(i, o), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(i, o), n.state !== a && Xd.enqueueReplaceState(n, n.state, null);
      }
      function nt(a, n) {
        var i = n;
        if ("ref" in n) {
          i = {};
          for (var o in n)
            o !== "ref" && (i[o] = n[o]);
        }
        if (a = a.defaultProps) {
          i === n && (i = Ju({}, i));
          for (var h in a)
            i[h] === void 0 && (i[h] = a[h]);
        }
        return i;
      }
      function Be(a, n) {
        try {
          var i = a.onUncaughtError;
          i(n.value, { componentStack: n.stack });
        } catch (o) {
          setTimeout(function() {
            throw o;
          });
        }
      }
      function ji(a, n, i) {
        try {
          var o = a.onCaughtError;
          o(i.value, {
            componentStack: i.stack,
            errorBoundary: n.tag === 1 ? n.stateNode : null
          });
        } catch (h) {
          setTimeout(function() {
            throw h;
          });
        }
      }
      function Os(a, n, i) {
        return i = Oa(i), i.tag = 3, i.payload = { element: null }, i.callback = function() {
          Be(a, n);
        }, i;
      }
      function oa(a) {
        return a = Oa(a), a.tag = 3, a;
      }
      function _o(a, n, i, o) {
        var h = i.type.getDerivedStateFromError;
        if (typeof h == "function") {
          var y = o.value;
          a.payload = function() {
            return h(y);
          }, a.callback = function() {
            ji(n, i, o);
          };
        }
        var b = i.stateNode;
        b !== null && typeof b.componentDidCatch == "function" && (a.callback = function() {
          ji(n, i, o), typeof h != "function" && (pu === null ? pu = /* @__PURE__ */ new Set([this]) : pu.add(this));
          var z = o.stack;
          this.componentDidCatch(o.value, {
            componentStack: z !== null ? z : ""
          });
        });
      }
      function zf(a, n, i, o, h) {
        if (i.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
          if (n = i.alternate, n !== null && Ns(
            n,
            i,
            h,
            !0
          ), i = rn.current, i !== null) {
            switch (i.tag) {
              case 13:
                return ou === null ? Ol() : i.alternate === null && la === 0 && (la = 3), i.flags &= -257, i.flags |= 65536, i.lanes = h, o === Jr ? i.flags |= 16384 : (n = i.updateQueue, n === null ? i.updateQueue = /* @__PURE__ */ new Set([o]) : n.add(o), dr(a, o, h)), !1;
              case 22:
                return i.flags |= 65536, o === Jr ? i.flags |= 16384 : (n = i.updateQueue, n === null ? (n = {
                  transitions: null,
                  markerInstances: null,
                  retryQueue: /* @__PURE__ */ new Set([o])
                }, i.updateQueue = n) : (i = n.retryQueue, i === null ? n.retryQueue = /* @__PURE__ */ new Set([o]) : i.add(o)), dr(a, o, h)), !1;
            }
            throw Error(p(435, i.tag));
          }
          return dr(a, o, h), Ol(), !1;
        }
        if (Ct)
          return n = rn.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = h, o !== wc && (a = Error(p(422), { cause: o }), Rl(
            re(a, i)
          ))) : (o !== wc && (n = Error(p(423), {
            cause: o
          }), Rl(
            re(n, i)
          )), a = a.current.alternate, a.flags |= 65536, h &= -h, a.lanes |= h, o = re(o, i), h = Os(
            a.stateNode,
            o,
            h
          ), Y(a, h), la !== 4 && (la = 2)), !1;
        var y = Error(p(520), { cause: o });
        if (y = re(y, i), ga === null ? ga = [y] : ga.push(y), la !== 4 && (la = 2), n === null) return !0;
        o = re(o, i), i = n;
        do {
          switch (i.tag) {
            case 3:
              return i.flags |= 65536, a = h & -h, i.lanes |= a, a = Os(i.stateNode, o, a), Y(i, a), !1;
            case 1:
              if (n = i.type, y = i.stateNode, (i.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (pu === null || !pu.has(
                y
              ))))
                return i.flags |= 65536, h &= -h, i.lanes |= h, h = oa(h), _o(
                  h,
                  a,
                  i,
                  o
                ), Y(i, h), !1;
          }
          i = i.return;
        } while (i !== null);
        return !1;
      }
      function za(a, n, i, o) {
        n.child = a === null ? Cp(n, null, i, o) : El(
          n,
          a.child,
          i,
          o
        );
      }
      function Ho(a, n, i, o, h) {
        i = i.render;
        var y = n.ref;
        if ("ref" in o) {
          var b = {};
          for (var z in o)
            z !== "ref" && (b[z] = o[z]);
        } else b = o;
        return oi(n), o = H(
          a,
          n,
          i,
          b,
          y,
          h
        ), z = ie(), a !== null && !Ja ? (Me(a, n, h), Pl(a, n, h)) : (Ct && z && de(n), n.flags |= 1, za(a, n, o, h), n.child);
      }
      function Km(a, n, i, o, h) {
        if (a === null) {
          var y = i.type;
          return typeof y == "function" && !Js(y) && y.defaultProps === void 0 && i.compare === null ? (n.tag = 15, n.type = y, Oo(
            a,
            n,
            y,
            o,
            h
          )) : (a = mr(
            i.type,
            null,
            o,
            n,
            n.mode,
            h
          ), a.ref = n.ref, a.return = n, n.child = a);
        }
        if (y = a.child, !zo(a, h)) {
          var b = y.memoizedProps;
          if (i = i.compare, i = i !== null ? i : aa, i(b, o) && a.ref === n.ref)
            return Pl(
              a,
              n,
              h
            );
        }
        return n.flags |= 1, a = ml(y, o), a.ref = n.ref, a.return = n, n.child = a;
      }
      function Oo(a, n, i, o, h) {
        if (a !== null) {
          var y = a.memoizedProps;
          if (aa(y, o) && a.ref === n.ref)
            if (Ja = !1, n.pendingProps = o = y, zo(a, h))
              (a.flags & 131072) !== 0 && (Ja = !0);
            else
              return n.lanes = a.lanes, Pl(a, n, h);
        }
        return Ot(
          a,
          n,
          i,
          o,
          h
        );
      }
      function Uo(a, n, i) {
        var o = n.pendingProps, h = o.children, y = (n.stateNode._pendingVisibility & 2) !== 0, b = a !== null ? a.memoizedState : null;
        if (xa(a, n), o.mode === "hidden" || y) {
          if ((n.flags & 128) !== 0) {
            if (o = b !== null ? b.baseLanes | i : i, a !== null) {
              for (h = n.child = a.child, y = 0; h !== null; )
                y = y | h.lanes | h.childLanes, h = h.sibling;
              n.childLanes = y & ~o;
            } else n.childLanes = 0, n.child = null;
            return No(
              a,
              n,
              o,
              i
            );
          }
          if ((i & 536870912) !== 0)
            n.memoizedState = { baseLanes: 0, cachePool: null }, a !== null && Xi(
              n,
              b !== null ? b.cachePool : null
            ), b !== null ? _u(n, b) : Ji(), Hu(n);
          else
            return n.lanes = n.childLanes = 536870912, No(
              a,
              n,
              b !== null ? b.baseLanes | i : i,
              i
            );
        } else
          b !== null ? (Xi(n, b.cachePool), _u(n, b), an(), n.memoizedState = null) : (a !== null && Xi(n, null), Ji(), an());
        return za(a, n, h, i), n.child;
      }
      function No(a, n, i, o) {
        var h = ri();
        return h = h === null ? null : {
          parent: lu ? fa._currentValue : fa._currentValue2,
          pool: h
        }, n.memoizedState = {
          baseLanes: i,
          cachePool: h
        }, a !== null && Xi(n, null), Ji(), Hu(n), a !== null && Ns(a, n, o, !0), null;
      }
      function xa(a, n) {
        var i = n.ref;
        if (i === null)
          a !== null && a.ref !== null && (n.flags |= 2097664);
        else {
          if (typeof i != "function" && typeof i != "object")
            throw Error(p(284));
          (a === null || a.ref !== i) && (n.flags |= 2097664);
        }
      }
      function Ot(a, n, i, o, h) {
        return oi(n), i = H(
          a,
          n,
          i,
          o,
          void 0,
          h
        ), o = ie(), a !== null && !Ja ? (Me(a, n, h), Pl(a, n, h)) : (Ct && o && de(n), n.flags |= 1, za(a, n, i, h), n.child);
      }
      function Us(a, n, i, o, h, y) {
        return oi(n), n.updateQueue = null, i = k(
          n,
          o,
          i,
          h
        ), L(a), o = ie(), a !== null && !Ja ? (Me(a, n, y), Pl(a, n, y)) : (Ct && o && de(n), n.flags |= 1, za(a, n, i, y), n.child);
      }
      function Gu(a, n, i, o, h) {
        if (oi(n), n.stateNode === null) {
          var y = Ci, b = i.contextType;
          typeof b == "object" && b !== null && (y = Za(b)), y = new i(o, y), n.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null, y.updater = Xd, n.stateNode = y, y._reactInternals = n, y = n.stateNode, y.props = o, y.state = n.memoizedState, y.refs = {}, Nn(n), b = i.contextType, y.context = typeof b == "object" && b !== null ? Za(b) : Ci, y.state = n.memoizedState, b = i.getDerivedStateFromProps, typeof b == "function" && (Il(
            n,
            i,
            b,
            o
          ), y.state = n.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof y.getSnapshotBeforeUpdate == "function" || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (b = y.state, typeof y.componentWillMount == "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount(), b !== y.state && Xd.enqueueReplaceState(
            y,
            y.state,
            null
          ), ze(n, o, y, h), Ae(), y.state = n.memoizedState), typeof y.componentDidMount == "function" && (n.flags |= 4194308), o = !0;
        } else if (a === null) {
          y = n.stateNode;
          var z = n.memoizedProps, I = nt(i, z);
          y.props = I;
          var pe = y.context, _e = i.contextType;
          b = Ci, typeof _e == "object" && _e !== null && (b = Za(_e));
          var Le = i.getDerivedStateFromProps;
          _e = typeof Le == "function" || typeof y.getSnapshotBeforeUpdate == "function", z = n.pendingProps !== z, _e || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (z || pe !== b) && Rc(
            n,
            y,
            o,
            b
          ), Ri = !1;
          var Ge = n.memoizedState;
          y.state = Ge, ze(n, o, y, h), Ae(), pe = n.memoizedState, z || Ge !== pe || Ri ? (typeof Le == "function" && (Il(
            n,
            i,
            Le,
            o
          ), pe = n.memoizedState), (I = Ri || wl(
            n,
            i,
            I,
            o,
            Ge,
            pe,
            b
          )) ? (_e || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (typeof y.componentWillMount == "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount()), typeof y.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof y.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = o, n.memoizedState = pe), y.props = o, y.state = pe, y.context = b, o = I) : (typeof y.componentDidMount == "function" && (n.flags |= 4194308), o = !1);
        } else {
          y = n.stateNode, ui(a, n), b = n.memoizedProps, _e = nt(i, b), y.props = _e, Le = n.pendingProps, Ge = y.context, pe = i.contextType, I = Ci, typeof pe == "object" && pe !== null && (I = Za(pe)), z = i.getDerivedStateFromProps, (pe = typeof z == "function" || typeof y.getSnapshotBeforeUpdate == "function") || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (b !== Le || Ge !== I) && Rc(
            n,
            y,
            o,
            I
          ), Ri = !1, Ge = n.memoizedState, y.state = Ge, ze(n, o, y, h), Ae();
          var Fe = n.memoizedState;
          b !== Le || Ge !== Fe || Ri || a !== null && a.dependencies !== null && Ko(a.dependencies) ? (typeof z == "function" && (Il(
            n,
            i,
            z,
            o
          ), Fe = n.memoizedState), (_e = Ri || wl(
            n,
            i,
            _e,
            o,
            Ge,
            Fe,
            I
          ) || a !== null && a.dependencies !== null && Ko(a.dependencies)) ? (pe || typeof y.UNSAFE_componentWillUpdate != "function" && typeof y.componentWillUpdate != "function" || (typeof y.componentWillUpdate == "function" && y.componentWillUpdate(o, Fe, I), typeof y.UNSAFE_componentWillUpdate == "function" && y.UNSAFE_componentWillUpdate(
            o,
            Fe,
            I
          )), typeof y.componentDidUpdate == "function" && (n.flags |= 4), typeof y.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof y.componentDidUpdate != "function" || b === a.memoizedProps && Ge === a.memoizedState || (n.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || b === a.memoizedProps && Ge === a.memoizedState || (n.flags |= 1024), n.memoizedProps = o, n.memoizedState = Fe), y.props = o, y.state = Fe, y.context = I, o = _e) : (typeof y.componentDidUpdate != "function" || b === a.memoizedProps && Ge === a.memoizedState || (n.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || b === a.memoizedProps && Ge === a.memoizedState || (n.flags |= 1024), o = !1);
        }
        return y = o, xa(a, n), o = (n.flags & 128) !== 0, y || o ? (y = n.stateNode, i = o && typeof i.getDerivedStateFromError != "function" ? null : y.render(), n.flags |= 1, a !== null && o ? (n.child = El(
          n,
          a.child,
          null,
          h
        ), n.child = El(
          n,
          null,
          i,
          h
        )) : za(a, n, i, h), n.memoizedState = y.state, a = n.child) : a = Pl(
          a,
          n,
          h
        ), a;
      }
      function ci(a, n, i, o) {
        return _n(), n.flags |= 256, za(a, n, i, o), n.child;
      }
      function Zn(a) {
        return { baseLanes: a, cachePool: Lf() };
      }
      function Mc(a, n, i) {
        return a = a !== null ? a.childLanes & ~i : 0, n && (a |= el), a;
      }
      function Qi(a, n, i) {
        var o = n.pendingProps, h = !1, y = (n.flags & 128) !== 0, b;
        if ((b = y) || (b = a !== null && a.memoizedState === null ? !1 : (_a.current & 2) !== 0), b && (h = !0, n.flags &= -129), b = (n.flags & 32) !== 0, n.flags &= -33, a === null) {
          if (Ct) {
            if (h ? ql(n) : an(), Ct) {
              var z = Da, I;
              (I = z) && (z = Xh(
                z,
                iu
              ), z !== null ? (n.memoizedState = {
                dehydrated: z,
                treeContext: Al !== null ? { id: qu, overflow: Fu } : null,
                retryLane: 536870912
              }, I = r(18, null, null, 0), I.stateNode = z, I.return = n, n.child = I, on = n, Da = null, I = !0) : I = !1), I || vt(n);
            }
            if (z = n.memoizedState, z !== null && (z = z.dehydrated, z !== null))
              return Rr(z) ? n.lanes = 16 : n.lanes = 536870912, null;
            $e(n);
          }
          return z = o.children, o = o.fallback, h ? (an(), h = n.mode, z = Yi(
            { mode: "hidden", children: z },
            h
          ), o = qi(
            o,
            h,
            i,
            null
          ), z.return = n, o.return = n, z.sibling = o, n.child = z, h = n.child, h.memoizedState = Zn(i), h.childLanes = Mc(
            a,
            b,
            i
          ), n.memoizedState = Yr, o) : (ql(n), bc(n, z));
        }
        if (I = a.memoizedState, I !== null && (z = I.dehydrated, z !== null)) {
          if (y)
            n.flags & 256 ? (ql(n), n.flags &= -257, n = Dc(
              a,
              n,
              i
            )) : n.memoizedState !== null ? (an(), n.child = a.child, n.flags |= 128, n = null) : (an(), h = o.fallback, z = n.mode, o = Yi(
              { mode: "visible", children: o.children },
              z
            ), h = qi(
              h,
              z,
              i,
              null
            ), h.flags |= 2, o.return = n, h.return = n, o.sibling = h, n.child = o, El(
              n,
              a.child,
              null,
              i
            ), o = n.child, o.memoizedState = Zn(i), o.childLanes = Mc(
              a,
              b,
              i
            ), n.memoizedState = Yr, n = h);
          else if (ql(n), Rr(z))
            b = op(z).digest, o = Error(p(419)), o.stack = "", o.digest = b, Rl({ value: o, source: null, stack: null }), n = Dc(
              a,
              n,
              i
            );
          else if (Ja || Ns(
            a,
            n,
            i,
            !1
          ), b = (i & a.childLanes) !== 0, Ja || b) {
            if (b = qt, b !== null) {
              if (o = i & -i, (o & 42) !== 0) o = 1;
              else
                switch (o) {
                  case 2:
                    o = 1;
                    break;
                  case 8:
                    o = 4;
                    break;
                  case 32:
                    o = 16;
                    break;
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
                    o = 64;
                    break;
                  case 268435456:
                    o = 134217728;
                    break;
                  default:
                    o = 0;
                }
              if (o = (o & (b.suspendedLanes | i)) !== 0 ? 0 : o, o !== 0 && o !== I.retryLane)
                throw I.retryLane = o, Hn(a, o), qa(b, a, o), Zd;
            }
            Xc(z) || Ol(), n = Dc(
              a,
              n,
              i
            );
          } else
            Xc(z) ? (n.flags |= 128, n.child = a.child, n = Zm.bind(
              null,
              a
            ), rp(z, n), n = null) : (a = I.treeContext, En && (Da = dp(z), on = n, Ct = !0, zl = null, iu = !1, a !== null && (yl[kn++] = qu, yl[kn++] = Fu, yl[kn++] = Al, qu = a.id, Fu = a.overflow, Al = n)), n = bc(
              n,
              o.children
            ), n.flags |= 4096);
          return n;
        }
        return h ? (an(), h = o.fallback, z = n.mode, I = a.child, y = I.sibling, o = ml(I, {
          mode: "hidden",
          children: o.children
        }), o.subtreeFlags = I.subtreeFlags & 31457280, y !== null ? h = ml(y, h) : (h = qi(
          h,
          z,
          i,
          null
        ), h.flags |= 2), h.return = n, o.return = n, o.sibling = h, n.child = o, o = h, h = n.child, z = a.child.memoizedState, z === null ? z = Zn(i) : (I = z.cachePool, I !== null ? (y = lu ? fa._currentValue : fa._currentValue2, I = I.parent !== y ? { parent: y, pool: y } : I) : I = Lf(), z = {
          baseLanes: z.baseLanes | i,
          cachePool: I
        }), h.memoizedState = z, h.childLanes = Mc(
          a,
          b,
          i
        ), n.memoizedState = Yr, o) : (ql(n), i = a.child, a = i.sibling, i = ml(i, {
          mode: "visible",
          children: o.children
        }), i.return = n, i.sibling = null, a !== null && (b = n.deletions, b === null ? (n.deletions = [a], n.flags |= 16) : b.push(a)), n.child = i, n.memoizedState = null, i);
      }
      function bc(a, n) {
        return n = Yi(
          { mode: "visible", children: n },
          a.mode
        ), n.return = a, a.child = n;
      }
      function Yi(a, n) {
        return nd(a, n, 0, null);
      }
      function Dc(a, n, i) {
        return El(n, a.child, null, i), a = bc(
          n,
          n.pendingProps.children
        ), a.flags |= 2, n.memoizedState = null, a;
      }
      function _c(a, n, i) {
        a.lanes |= n;
        var o = a.alternate;
        o !== null && (o.lanes |= n), Lo(a.return, n, i);
      }
      function Go(a, n, i, o, h) {
        var y = a.memoizedState;
        y === null ? a.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: i,
          tailMode: h
        } : (y.isBackwards = n, y.rendering = null, y.renderingStartTime = 0, y.last = o, y.tail = i, y.tailMode = h);
      }
      function xf(a, n, i) {
        var o = n.pendingProps, h = o.revealOrder, y = o.tail;
        if (za(a, n, o.children, i), o = _a.current, (o & 2) !== 0)
          o = o & 1 | 2, n.flags |= 128;
        else {
          if (a !== null && (a.flags & 128) !== 0)
            e: for (a = n.child; a !== null; ) {
              if (a.tag === 13)
                a.memoizedState !== null && _c(a, i, n);
              else if (a.tag === 19)
                _c(a, i, n);
              else if (a.child !== null) {
                a.child.return = a, a = a.child;
                continue;
              }
              if (a === n) break e;
              for (; a.sibling === null; ) {
                if (a.return === null || a.return === n)
                  break e;
                a = a.return;
              }
              a.sibling.return = a.return, a = a.sibling;
            }
          o &= 1;
        }
        switch (N(_a, o), h) {
          case "forwards":
            for (i = n.child, h = null; i !== null; )
              a = i.alternate, a !== null && Xn(a) === null && (h = i), i = i.sibling;
            i = h, i === null ? (h = n.child, n.child = null) : (h = i.sibling, i.sibling = null), Go(
              n,
              !1,
              h,
              i,
              y
            );
            break;
          case "backwards":
            for (i = null, h = n.child, n.child = null; h !== null; ) {
              if (a = h.alternate, a !== null && Xn(a) === null) {
                n.child = h;
                break;
              }
              a = h.sibling, h.sibling = i, i = h, h = a;
            }
            Go(
              n,
              !0,
              i,
              null,
              y
            );
            break;
          case "together":
            Go(n, !1, null, null, void 0);
            break;
          default:
            n.memoizedState = null;
        }
        return n.child;
      }
      function Pl(a, n, i) {
        if (a !== null && (n.dependencies = a.dependencies), _i |= n.lanes, (i & n.childLanes) === 0)
          if (a !== null) {
            if (Ns(
              a,
              n,
              i,
              !1
            ), (i & n.childLanes) === 0)
              return null;
          } else return null;
        if (a !== null && n.child !== a.child)
          throw Error(p(153));
        if (n.child !== null) {
          for (a = n.child, i = ml(a, a.pendingProps), n.child = i, i.return = n; a.sibling !== null; )
            a = a.sibling, i = i.sibling = ml(a, a.pendingProps), i.return = n;
          i.sibling = null;
        }
        return n.child;
      }
      function zo(a, n) {
        return (a.lanes & n) !== 0 ? !0 : (a = a.dependencies, !!(a !== null && Ko(a)));
      }
      function jm(a, n, i) {
        switch (n.tag) {
          case 3:
            Ne(
              n,
              n.stateNode.containerInfo
            ), Wl(n, fa, a.memoizedState.cache), _n();
            break;
          case 27:
          case 5:
            tt(n);
            break;
          case 4:
            Ne(
              n,
              n.stateNode.containerInfo
            );
            break;
          case 10:
            Wl(
              n,
              n.type,
              n.memoizedProps.value
            );
            break;
          case 13:
            var o = n.memoizedState;
            if (o !== null)
              return o.dehydrated !== null ? (ql(n), n.flags |= 128, null) : (i & n.child.childLanes) !== 0 ? Qi(
                a,
                n,
                i
              ) : (ql(n), a = Pl(
                a,
                n,
                i
              ), a !== null ? a.sibling : null);
            ql(n);
            break;
          case 19:
            var h = (a.flags & 128) !== 0;
            if (o = (i & n.childLanes) !== 0, o || (Ns(
              a,
              n,
              i,
              !1
            ), o = (i & n.childLanes) !== 0), h) {
              if (o)
                return xf(
                  a,
                  n,
                  i
                );
              n.flags |= 128;
            }
            if (h = n.memoizedState, h !== null && (h.rendering = null, h.tail = null, h.lastEffect = null), N(_a, _a.current), o) break;
            return null;
          case 22:
          case 23:
            return n.lanes = 0, Uo(a, n, i);
          case 24:
            Wl(n, fa, a.memoizedState.cache);
        }
        return Pl(a, n, i);
      }
      function xo(a, n, i) {
        if (a !== null)
          if (a.memoizedProps !== n.pendingProps)
            Ja = !0;
          else {
            if (!zo(a, i) && (n.flags & 128) === 0)
              return Ja = !1, jm(
                a,
                n,
                i
              );
            Ja = (a.flags & 131072) !== 0;
          }
        else
          Ja = !1, Ct && (n.flags & 1048576) !== 0 && me(n, xr, n.index);
        switch (n.lanes = 0, n.tag) {
          case 16:
            e: {
              a = n.pendingProps;
              var o = n.elementType, h = o._init;
              if (o = h(o._payload), n.type = o, typeof o == "function")
                Js(o) ? (a = nt(o, a), n.tag = 1, n = Gu(
                  null,
                  n,
                  o,
                  a,
                  i
                )) : (n.tag = 0, n = Ot(
                  null,
                  n,
                  o,
                  a,
                  i
                ));
              else {
                if (o != null) {
                  if (h = o.$$typeof, h === rd) {
                    n.tag = 11, n = Ho(
                      null,
                      n,
                      o,
                      a,
                      i
                    );
                    break e;
                  } else if (h === Er) {
                    n.tag = 14, n = Km(
                      null,
                      n,
                      o,
                      a,
                      i
                    );
                    break e;
                  }
                }
                throw n = A(o) || o, Error(p(306, n, ""));
              }
            }
            return n;
          case 0:
            return Ot(
              a,
              n,
              n.type,
              n.pendingProps,
              i
            );
          case 1:
            return o = n.type, h = nt(
              o,
              n.pendingProps
            ), Gu(
              a,
              n,
              o,
              h,
              i
            );
          case 3:
            e: {
              if (Ne(
                n,
                n.stateNode.containerInfo
              ), a === null) throw Error(p(387));
              var y = n.pendingProps;
              h = n.memoizedState, o = h.element, ui(a, n), ze(n, y, null, i);
              var b = n.memoizedState;
              if (y = b.cache, Wl(n, fa, y), y !== h.cache && Jo(
                n,
                [fa],
                i,
                !0
              ), Ae(), y = b.element, En && h.isDehydrated)
                if (h = {
                  element: y,
                  isDehydrated: !1,
                  cache: b.cache
                }, n.updateQueue.baseState = h, n.memoizedState = h, n.flags & 256) {
                  n = ci(
                    a,
                    n,
                    y,
                    i
                  );
                  break e;
                } else if (y !== o) {
                  o = re(
                    Error(p(424)),
                    n
                  ), Rl(o), n = ci(
                    a,
                    n,
                    y,
                    i
                  );
                  break e;
                } else
                  for (En && (Da = _d(
                    n.stateNode.containerInfo
                  ), on = n, Ct = !0, zl = null, iu = !0), i = Cp(
                    n,
                    null,
                    y,
                    i
                  ), n.child = i; i; )
                    i.flags = i.flags & -3 | 4096, i = i.sibling;
              else {
                if (_n(), y === o) {
                  n = Pl(
                    a,
                    n,
                    i
                  );
                  break e;
                }
                za(a, n, y, i);
              }
              n = n.child;
            }
            return n;
          case 26:
            if (Pn)
              return xa(a, n), a === null ? (i = zd(
                n.type,
                null,
                n.pendingProps,
                null
              )) ? n.memoizedState = i : Ct || (n.stateNode = qh(
                n.type,
                n.pendingProps,
                Ti.current,
                n
              )) : n.memoizedState = zd(
                n.type,
                a.memoizedProps,
                n.pendingProps,
                a.memoizedState
              ), null;
          case 27:
            if (ra)
              return tt(n), a === null && ra && Ct && (o = n.stateNode = $i(
                n.type,
                n.pendingProps,
                Ti.current,
                Pa.current,
                !1
              ), on = n, iu = !0, Da = Bi(o)), o = n.pendingProps.children, a !== null || Ct ? za(
                a,
                n,
                o,
                i
              ) : n.child = El(
                n,
                null,
                o,
                i
              ), xa(a, n), n.child;
          case 5:
            return a === null && Ct && (Vh(
              n.type,
              n.pendingProps,
              Pa.current
            ), (h = o = Da) && (o = mp(
              o,
              n.type,
              n.pendingProps,
              iu
            ), o !== null ? (n.stateNode = o, on = n, Da = Bi(o), iu = !1, h = !0) : h = !1), h || vt(n)), tt(n), h = n.type, y = n.pendingProps, b = a !== null ? a.memoizedProps : null, o = y.children, Qu(h, y) ? o = null : b !== null && Qu(h, b) && (n.flags |= 32), n.memoizedState !== null && (h = H(
              a,
              n,
              oe,
              null,
              null,
              i
            ), lu ? Vu._currentValue = h : Vu._currentValue2 = h), xa(a, n), za(a, n, o, i), n.child;
          case 6:
            return a === null && Ct && (vp(
              n.pendingProps,
              Pa.current
            ), (a = i = Da) && (i = Hd(
              i,
              n.pendingProps,
              iu
            ), i !== null ? (n.stateNode = i, on = n, Da = null, a = !0) : a = !1), a || vt(n)), null;
          case 13:
            return Qi(a, n, i);
          case 4:
            return Ne(
              n,
              n.stateNode.containerInfo
            ), o = n.pendingProps, a === null ? n.child = El(
              n,
              null,
              o,
              i
            ) : za(
              a,
              n,
              o,
              i
            ), n.child;
          case 11:
            return Ho(
              a,
              n,
              n.type,
              n.pendingProps,
              i
            );
          case 7:
            return za(
              a,
              n,
              n.pendingProps,
              i
            ), n.child;
          case 8:
            return za(
              a,
              n,
              n.pendingProps.children,
              i
            ), n.child;
          case 12:
            return za(
              a,
              n,
              n.pendingProps.children,
              i
            ), n.child;
          case 10:
            return o = n.pendingProps, Wl(
              n,
              n.type,
              o.value
            ), za(
              a,
              n,
              o.children,
              i
            ), n.child;
          case 9:
            return h = n.type._context, o = n.pendingProps.children, oi(n), h = Za(h), o = o(h), n.flags |= 1, za(
              a,
              n,
              o,
              i
            ), n.child;
          case 14:
            return Km(
              a,
              n,
              n.type,
              n.pendingProps,
              i
            );
          case 15:
            return Oo(
              a,
              n,
              n.type,
              n.pendingProps,
              i
            );
          case 19:
            return xf(
              a,
              n,
              i
            );
          case 22:
            return Uo(a, n, i);
          case 24:
            return oi(n), o = Za(fa), a === null ? (h = ri(), h === null && (h = qt, y = Qo(), h.pooledCache = y, y.refCount++, y !== null && (h.pooledCacheLanes |= i), h = y), n.memoizedState = {
              parent: o,
              cache: h
            }, Nn(n), Wl(n, fa, h)) : ((a.lanes & i) !== 0 && (ui(a, n), ze(n, null, null, i), Ae()), h = a.memoizedState, y = n.memoizedState, h.parent !== o ? (h = { parent: o, cache: o }, n.memoizedState = h, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = h), Wl(n, fa, o)) : (o = y.cache, Wl(n, fa, o), o !== h.cache && Jo(
              n,
              [fa],
              i,
              !0
            ))), za(
              a,
              n,
              n.pendingProps.children,
              i
            ), n.child;
          case 29:
            throw n.pendingProps;
        }
        throw Error(p(156, n.tag));
      }
      function Wl(a, n, i) {
        lu ? (N($c, n._currentValue), n._currentValue = i) : (N($c, n._currentValue2), n._currentValue2 = i);
      }
      function bl(a) {
        var n = $c.current;
        lu ? a._currentValue = n : a._currentValue2 = n, G($c);
      }
      function Lo(a, n, i) {
        for (; a !== null; ) {
          var o = a.alternate;
          if ((a.childLanes & n) !== n ? (a.childLanes |= n, o !== null && (o.childLanes |= n)) : o !== null && (o.childLanes & n) !== n && (o.childLanes |= n), a === i) break;
          a = a.return;
        }
      }
      function Jo(a, n, i, o) {
        var h = a.child;
        for (h !== null && (h.return = a); h !== null; ) {
          var y = h.dependencies;
          if (y !== null) {
            var b = h.child;
            y = y.firstContext;
            e: for (; y !== null; ) {
              var z = y;
              y = h;
              for (var I = 0; I < n.length; I++)
                if (z.context === n[I]) {
                  y.lanes |= i, z = y.alternate, z !== null && (z.lanes |= i), Lo(
                    y.return,
                    i,
                    a
                  ), o || (b = null);
                  break e;
                }
              y = z.next;
            }
          } else if (h.tag === 18) {
            if (b = h.return, b === null) throw Error(p(341));
            b.lanes |= i, y = b.alternate, y !== null && (y.lanes |= i), Lo(b, i, a), b = null;
          } else b = h.child;
          if (b !== null) b.return = h;
          else
            for (b = h; b !== null; ) {
              if (b === a) {
                b = null;
                break;
              }
              if (h = b.sibling, h !== null) {
                h.return = b.return, b = h;
                break;
              }
              b = b.return;
            }
          h = b;
        }
      }
      function Ns(a, n, i, o) {
        a = null;
        for (var h = n, y = !1; h !== null; ) {
          if (!y) {
            if ((h.flags & 524288) !== 0) y = !0;
            else if ((h.flags & 262144) !== 0) break;
          }
          if (h.tag === 10) {
            var b = h.alternate;
            if (b === null) throw Error(p(387));
            if (b = b.memoizedProps, b !== null) {
              var z = h.type;
              Bn(h.pendingProps.value, b.value) || (a !== null ? a.push(z) : a = [z]);
            }
          } else if (h === qs.current) {
            if (b = h.alternate, b === null) throw Error(p(387));
            b.memoizedState.memoizedState !== h.memoizedState.memoizedState && (a !== null ? a.push(Vu) : a = [Vu]);
          }
          h = h.return;
        }
        a !== null && Jo(
          n,
          a,
          i,
          o
        ), n.flags |= 262144;
      }
      function Ko(a) {
        for (a = a.firstContext; a !== null; ) {
          var n = a.context;
          if (!Bn(
            lu ? n._currentValue : n._currentValue2,
            a.memoizedValue
          ))
            return !0;
          a = a.next;
        }
        return !1;
      }
      function oi(a) {
        Di = a, xl = null, a = a.dependencies, a !== null && (a.firstContext = null);
      }
      function Za(a) {
        return jo(Di, a);
      }
      function Hc(a, n) {
        return Di === null && oi(a), jo(a, n);
      }
      function jo(a, n) {
        var i = lu ? n._currentValue : n._currentValue2;
        if (n = { context: n, memoizedValue: i, next: null }, xl === null) {
          if (a === null) throw Error(p(308));
          xl = n, a.dependencies = { lanes: 0, firstContext: n }, a.flags |= 524288;
        } else xl = xl.next = n;
        return i;
      }
      function Qo() {
        return {
          controller: new qd(),
          data: /* @__PURE__ */ new Map(),
          refCount: 0
        };
      }
      function Gs(a) {
        a.refCount--, a.refCount === 0 && wh(Ph, function() {
          a.controller.abort();
        });
      }
      function ri() {
        var a = Pu.current;
        return a !== null ? a : qt.pooledCache;
      }
      function Xi(a, n) {
        n === null ? N(Pu, Pu.current) : N(Pu, n.pool);
      }
      function Lf() {
        var a = ri();
        return a === null ? null : {
          parent: lu ? fa._currentValue : fa._currentValue2,
          pool: a
        };
      }
      function qn(a) {
        a.flags |= 4;
      }
      function Oc(a, n) {
        if (a !== null && a.child === n.child) return !1;
        if ((n.flags & 16) !== 0) return !0;
        for (a = n.child; a !== null; ) {
          if ((a.flags & 13878) !== 0 || (a.subtreeFlags & 13878) !== 0)
            return !0;
          a = a.sibling;
        }
        return !1;
      }
      function fi(a, n, i, o) {
        if (Aa)
          for (i = n.child; i !== null; ) {
            if (i.tag === 5 || i.tag === 6)
              nu(a, i.stateNode);
            else if (!(i.tag === 4 || ra && i.tag === 27) && i.child !== null) {
              i.child.return = i, i = i.child;
              continue;
            }
            if (i === n) break;
            for (; i.sibling === null; ) {
              if (i.return === null || i.return === n)
                return;
              i = i.return;
            }
            i.sibling.return = i.return, i = i.sibling;
          }
        else if (Yu)
          for (var h = n.child; h !== null; ) {
            if (h.tag === 5) {
              var y = h.stateNode;
              i && o && (y = sp(
                y,
                h.type,
                h.memoizedProps
              )), nu(a, y);
            } else if (h.tag === 6)
              y = h.stateNode, i && o && (y = cp(
                y,
                h.memoizedProps
              )), nu(a, y);
            else if (h.tag !== 4) {
              if (h.tag === 22 && h.memoizedState !== null)
                y = h.child, y !== null && (y.return = h), fi(a, h, !0, !0);
              else if (h.child !== null) {
                h.child.return = h, h = h.child;
                continue;
              }
            }
            if (h === n) break;
            for (; h.sibling === null; ) {
              if (h.return === null || h.return === n)
                return;
              h = h.return;
            }
            h.sibling.return = h.return, h = h.sibling;
          }
      }
      function Yo(a, n, i, o) {
        if (Yu)
          for (var h = n.child; h !== null; ) {
            if (h.tag === 5) {
              var y = h.stateNode;
              i && o && (y = sp(
                y,
                h.type,
                h.memoizedProps
              )), Tr(a, y);
            } else if (h.tag === 6)
              y = h.stateNode, i && o && (y = cp(
                y,
                h.memoizedProps
              )), Tr(a, y);
            else if (h.tag !== 4) {
              if (h.tag === 22 && h.memoizedState !== null)
                y = h.child, y !== null && (y.return = h), Yo(
                  a,
                  h,
                  !(h.memoizedProps !== null && h.memoizedProps.mode === "manual"),
                  !0
                );
              else if (h.child !== null) {
                h.child.return = h, h = h.child;
                continue;
              }
            }
            if (h === n) break;
            for (; h.sibling === null; ) {
              if (h.return === null || h.return === n) return;
              h = h.return;
            }
            h.sibling.return = h.return, h = h.sibling;
          }
      }
      function di(a, n) {
        if (Yu && Oc(a, n)) {
          a = n.stateNode;
          var i = a.containerInfo, o = Ut();
          Yo(o, n, !1, !1), a.pendingChildren = o, qn(n), Qh(i, o);
        }
      }
      function un(a, n, i, o) {
        if (Aa)
          a.memoizedProps !== o && qn(n);
        else if (Yu) {
          var h = a.stateNode, y = a.memoizedProps;
          if ((a = Oc(a, n)) || y !== o) {
            var b = Pa.current;
            y = ip(
              h,
              i,
              y,
              o,
              !a,
              null
            ), y === h ? n.stateNode = h : (yd(
              y,
              i,
              o,
              b
            ) && qn(n), n.stateNode = y, a ? fi(y, n, !1, !1) : qn(n));
          } else n.stateNode = h;
        }
      }
      function zs(a, n, i) {
        if (Gh(n, i)) {
          if (a.flags |= 16777216, !Bd(n, i))
            if (cr()) a.flags |= 8192;
            else
              throw ws = Jr, wu;
        } else a.flags &= -16777217;
      }
      function Xo(a, n) {
        if (Fa(n)) {
          if (a.flags |= 16777216, !Ap(n))
            if (cr()) a.flags |= 8192;
            else
              throw ws = Jr, wu;
        } else a.flags &= -16777217;
      }
      function Uc(a, n) {
        n !== null && (a.flags |= 4), a.flags & 16384 && (n = a.tag !== 22 ? se() : 536870912, a.lanes |= n, tc |= n);
      }
      function Vi(a, n) {
        if (!Ct)
          switch (a.tailMode) {
            case "hidden":
              n = a.tail;
              for (var i = null; n !== null; )
                n.alternate !== null && (i = n), n = n.sibling;
              i === null ? a.tail = null : i.sibling = null;
              break;
            case "collapsed":
              i = a.tail;
              for (var o = null; i !== null; )
                i.alternate !== null && (o = i), i = i.sibling;
              o === null ? n || a.tail === null ? a.tail = null : a.tail.sibling = null : o.sibling = null;
          }
      }
      function Zt(a) {
        var n = a.alternate !== null && a.alternate.child === a.child, i = 0, o = 0;
        if (n)
          for (var h = a.child; h !== null; )
            i |= h.lanes | h.childLanes, o |= h.subtreeFlags & 31457280, o |= h.flags & 31457280, h.return = a, h = h.sibling;
        else
          for (h = a.child; h !== null; )
            i |= h.lanes | h.childLanes, o |= h.subtreeFlags, o |= h.flags, h.return = a, h = h.sibling;
        return a.subtreeFlags |= o, a.childLanes = i, n;
      }
      function Jf(a, n, i) {
        var o = n.pendingProps;
        switch (Ke(n), n.tag) {
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return Zt(n), null;
          case 1:
            return Zt(n), null;
          case 3:
            return i = n.stateNode, o = null, a !== null && (o = a.memoizedState.cache), n.memoizedState.cache !== o && (n.flags |= 2048), bl(fa), Ie(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (a === null || a.child === null) && (Dn(n) ? qn(n) : a === null || a.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, zl !== null && (zc(zl), zl = null))), di(a, n), Zt(n), null;
          case 26:
            if (Pn) {
              i = n.type;
              var h = n.memoizedState;
              return a === null ? (qn(n), h !== null ? (Zt(n), Xo(
                n,
                h
              )) : (Zt(n), zs(
                n,
                i,
                o
              ))) : h ? h !== a.memoizedState ? (qn(n), Zt(n), Xo(
                n,
                h
              )) : (Zt(n), n.flags &= -16777217) : (Aa ? a.memoizedProps !== o && qn(n) : un(
                a,
                n,
                i,
                o
              ), Zt(n), zs(
                n,
                i,
                o
              )), null;
            }
          case 27:
            if (ra) {
              if ($t(n), i = Ti.current, h = n.type, a !== null && n.stateNode != null)
                Aa ? a.memoizedProps !== o && qn(n) : un(
                  a,
                  n,
                  h,
                  o
                );
              else {
                if (!o) {
                  if (n.stateNode === null)
                    throw Error(p(166));
                  return Zt(n), null;
                }
                a = Pa.current, Dn(n) ? bn(n, a) : (a = $i(
                  h,
                  o,
                  i,
                  a,
                  !0
                ), n.stateNode = a, qn(n));
              }
              return Zt(n), null;
            }
          case 5:
            if ($t(n), i = n.type, a !== null && n.stateNode != null)
              un(a, n, i, o);
            else {
              if (!o) {
                if (n.stateNode === null)
                  throw Error(p(166));
                return Zt(n), null;
              }
              a = Pa.current, Dn(n) ? bn(n, a) : (h = vd(
                i,
                o,
                Ti.current,
                a,
                n
              ), fi(h, n, !1, !1), n.stateNode = h, yd(
                h,
                i,
                o,
                a
              ) && qn(n));
            }
            return Zt(n), zs(
              n,
              n.type,
              n.pendingProps
            ), null;
          case 6:
            if (a && n.stateNode != null)
              i = a.memoizedProps, Aa ? i !== o && qn(n) : Yu && (i !== o ? (n.stateNode = Ad(
                o,
                Ti.current,
                Pa.current,
                n
              ), qn(n)) : n.stateNode = a.stateNode);
            else {
              if (typeof o != "string" && n.stateNode === null)
                throw Error(p(166));
              if (a = Ti.current, i = Pa.current, Dn(n)) {
                if (!En) throw Error(p(176));
                if (a = n.stateNode, i = n.memoizedProps, o = null, h = on, h !== null)
                  switch (h.tag) {
                    case 27:
                    case 5:
                      o = h.memoizedProps;
                  }
                gi(
                  a,
                  i,
                  n,
                  o
                ) || vt(n);
              } else
                n.stateNode = Ad(
                  o,
                  a,
                  i,
                  n
                );
            }
            return Zt(n), null;
          case 13:
            if (o = n.memoizedState, a === null || a.memoizedState !== null && a.memoizedState.dehydrated !== null) {
              if (h = Dn(n), o !== null && o.dehydrated !== null) {
                if (a === null) {
                  if (!h) throw Error(p(318));
                  if (!En) throw Error(p(344));
                  if (h = n.memoizedState, h = h !== null ? h.dehydrated : null, !h) throw Error(p(317));
                  pp(h, n);
                } else
                  _n(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
                Zt(n), h = !1;
              } else
                zl !== null && (zc(zl), zl = null), h = !0;
              if (!h)
                return n.flags & 256 ? ($e(n), n) : ($e(n), null);
            }
            if ($e(n), (n.flags & 128) !== 0)
              return n.lanes = i, n;
            if (i = o !== null, a = a !== null && a.memoizedState !== null, i) {
              o = n.child, h = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (h = o.alternate.memoizedState.cachePool.pool);
              var y = null;
              o.memoizedState !== null && o.memoizedState.cachePool !== null && (y = o.memoizedState.cachePool.pool), y !== h && (o.flags |= 2048);
            }
            return i !== a && i && (n.child.flags |= 8192), Uc(n, n.updateQueue), Zt(n), null;
          case 4:
            return Ie(), di(a, n), a === null && Pm(n.stateNode.containerInfo), Zt(n), null;
          case 10:
            return bl(n.type), Zt(n), null;
          case 19:
            if (G(_a), h = n.memoizedState, h === null)
              return Zt(n), null;
            if (o = (n.flags & 128) !== 0, y = h.rendering, y === null)
              if (o) Vi(h, !1);
              else {
                if (la !== 0 || a !== null && (a.flags & 128) !== 0)
                  for (a = n.child; a !== null; ) {
                    if (y = Xn(a), y !== null) {
                      for (n.flags |= 128, Vi(h, !1), a = y.updateQueue, n.updateQueue = a, Uc(n, a), n.subtreeFlags = 0, a = i, i = n.child; i !== null; )
                        Pt(i, a), i = i.sibling;
                      return N(
                        _a,
                        _a.current & 1 | 2
                      ), n.child;
                    }
                    a = a.sibling;
                  }
                h.tail !== null && vl() > ao && (n.flags |= 128, o = !0, Vi(h, !1), n.lanes = 4194304);
              }
            else {
              if (!o)
                if (a = Xn(y), a !== null) {
                  if (n.flags |= 128, o = !0, a = a.updateQueue, n.updateQueue = a, Uc(n, a), Vi(h, !0), h.tail === null && h.tailMode === "hidden" && !y.alternate && !Ct)
                    return Zt(n), null;
                } else
                  2 * vl() - h.renderingStartTime > ao && i !== 536870912 && (n.flags |= 128, o = !0, Vi(h, !1), n.lanes = 4194304);
              h.isBackwards ? (y.sibling = n.child, n.child = y) : (a = h.last, a !== null ? a.sibling = y : n.child = y, h.last = y);
            }
            return h.tail !== null ? (n = h.tail, h.rendering = n, h.tail = n.sibling, h.renderingStartTime = vl(), n.sibling = null, a = _a.current, N(
              _a,
              o ? a & 1 | 2 : a & 1
            ), n) : (Zt(n), null);
          case 22:
          case 23:
            return $e(n), ii(), o = n.memoizedState !== null, a !== null ? a.memoizedState !== null !== o && (n.flags |= 8192) : o && (n.flags |= 8192), o ? (i & 536870912) !== 0 && (n.flags & 128) === 0 && (Zt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Zt(n), i = n.updateQueue, i !== null && Uc(n, i.retryQueue), i = null, a !== null && a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), o = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (o = n.memoizedState.cachePool.pool), o !== i && (n.flags |= 2048), a !== null && G(Pu), null;
          case 24:
            return i = null, a !== null && (i = a.memoizedState.cache), n.memoizedState.cache !== i && (n.flags |= 2048), bl(fa), Zt(n), null;
          case 25:
            return null;
        }
        throw Error(p(156, n.tag));
      }
      function Vo(a, n) {
        switch (Ke(n), n.tag) {
          case 1:
            return a = n.flags, a & 65536 ? (n.flags = a & -65537 | 128, n) : null;
          case 3:
            return bl(fa), Ie(), a = n.flags, (a & 65536) !== 0 && (a & 128) === 0 ? (n.flags = a & -65537 | 128, n) : null;
          case 26:
          case 27:
          case 5:
            return $t(n), null;
          case 13:
            if ($e(n), a = n.memoizedState, a !== null && a.dehydrated !== null) {
              if (n.alternate === null)
                throw Error(p(340));
              _n();
            }
            return a = n.flags, a & 65536 ? (n.flags = a & -65537 | 128, n) : null;
          case 19:
            return G(_a), null;
          case 4:
            return Ie(), null;
          case 10:
            return bl(n.type), null;
          case 22:
          case 23:
            return $e(n), ii(), a !== null && G(Pu), a = n.flags, a & 65536 ? (n.flags = a & -65537 | 128, n) : null;
          case 24:
            return bl(fa), null;
          case 25:
            return null;
          default:
            return null;
        }
      }
      function Zo(a, n) {
        switch (Ke(n), n.tag) {
          case 3:
            bl(fa), Ie();
            break;
          case 26:
          case 27:
          case 5:
            $t(n);
            break;
          case 4:
            Ie();
            break;
          case 13:
            $e(n);
            break;
          case 19:
            G(_a);
            break;
          case 10:
            bl(n.type);
            break;
          case 22:
          case 23:
            $e(n), ii(), a !== null && G(Pu);
            break;
          case 24:
            bl(fa);
        }
      }
      function mi(a, n) {
        try {
          var i = n.updateQueue, o = i !== null ? i.lastEffect : null;
          if (o !== null) {
            var h = o.next;
            i = h;
            do {
              if ((i.tag & a) === a) {
                o = void 0;
                var y = i.create, b = i.inst;
                o = y(), b.destroy = o;
              }
              i = i.next;
            } while (i !== h);
          }
        } catch (z) {
          st(n, n.return, z);
        }
      }
      function kl(a, n, i) {
        try {
          var o = n.updateQueue, h = o !== null ? o.lastEffect : null;
          if (h !== null) {
            var y = h.next;
            o = y;
            do {
              if ((o.tag & a) === a) {
                var b = o.inst, z = b.destroy;
                if (z !== void 0) {
                  b.destroy = void 0, h = n;
                  var I = i;
                  try {
                    z();
                  } catch (pe) {
                    st(
                      h,
                      I,
                      pe
                    );
                  }
                }
              }
              o = o.next;
            } while (o !== y);
          }
        } catch (pe) {
          st(n, n.return, pe);
        }
      }
      function Kf(a) {
        var n = a.updateQueue;
        if (n !== null) {
          var i = a.stateNode;
          try {
            be(n, i);
          } catch (o) {
            st(a, a.return, o);
          }
        }
      }
      function jf(a, n, i) {
        i.props = nt(
          a.type,
          a.memoizedProps
        ), i.state = a.memoizedState;
        try {
          i.componentWillUnmount();
        } catch (o) {
          st(a, n, o);
        }
      }
      function zu(a, n) {
        try {
          var i = a.ref;
          if (i !== null) {
            var o = a.stateNode;
            switch (a.tag) {
              case 26:
              case 27:
              case 5:
                var h = Qs(o);
                break;
              default:
                h = o;
            }
            typeof i == "function" ? a.refCleanup = i(h) : i.current = h;
          }
        } catch (y) {
          st(a, n, y);
        }
      }
      function zn(a, n) {
        var i = a.ref, o = a.refCleanup;
        if (i !== null)
          if (typeof o == "function")
            try {
              o();
            } catch (h) {
              st(a, n, h);
            } finally {
              a.refCleanup = null, a = a.alternate, a != null && (a.refCleanup = null);
            }
          else if (typeof i == "function")
            try {
              i(null);
            } catch (h) {
              st(a, n, h);
            }
          else i.current = null;
      }
      function Qf(a) {
        var n = a.type, i = a.memoizedProps, o = a.stateNode;
        try {
          Lh(o, n, i, a);
        } catch (h) {
          st(a, a.return, h);
        }
      }
      function Yf(a, n, i) {
        try {
          np(
            a.stateNode,
            a.type,
            i,
            n,
            a
          );
        } catch (o) {
          st(a, a.return, o);
        }
      }
      function qo(a) {
        return a.tag === 5 || a.tag === 3 || (Pn ? a.tag === 26 : !1) || (ra ? a.tag === 27 : !1) || a.tag === 4;
      }
      function Fo(a) {
        e: for (; ; ) {
          for (; a.sibling === null; ) {
            if (a.return === null || qo(a.return)) return null;
            a = a.return;
          }
          for (a.sibling.return = a.return, a = a.sibling; a.tag !== 5 && a.tag !== 6 && (!ra || a.tag !== 27) && a.tag !== 18; ) {
            if (a.flags & 2 || a.child === null || a.tag === 4) continue e;
            a.child.return = a, a = a.child;
          }
          if (!(a.flags & 2)) return a.stateNode;
        }
      }
      function Io(a, n, i) {
        var o = a.tag;
        if (o === 5 || o === 6)
          a = a.stateNode, n ? Jh(i, a, n) : ap(i, a);
        else if (!(o === 4 || ra && o === 27) && (a = a.child, a !== null))
          for (Io(a, n, i), a = a.sibling; a !== null; )
            Io(a, n, i), a = a.sibling;
      }
      function $l(a, n, i) {
        var o = a.tag;
        if (o === 5 || o === 6)
          a = a.stateNode, n ? lp(i, a, n) : Rd(i, a);
        else if (!(o === 4 || ra && o === 27) && (a = a.child, a !== null))
          for ($l(a, n, i), a = a.sibling; a !== null; )
            $l(a, n, i), a = a.sibling;
      }
      function wo(a, n, i) {
        a = a.containerInfo;
        try {
          Dd(a, i);
        } catch (o) {
          st(n, n.return, o);
        }
      }
      function Xf(a, n) {
        for (ju(a.containerInfo), Ka = n; Ka !== null; )
          if (a = Ka, n = a.child, (a.subtreeFlags & 1028) !== 0 && n !== null)
            n.return = a, Ka = n;
          else
            for (; Ka !== null; ) {
              a = Ka;
              var i = a.alternate;
              switch (n = a.flags, a.tag) {
                case 0:
                  break;
                case 11:
                case 15:
                  break;
                case 1:
                  if ((n & 1024) !== 0 && i !== null) {
                    n = void 0;
                    var o = a, h = i.memoizedProps;
                    i = i.memoizedState;
                    var y = o.stateNode;
                    try {
                      var b = nt(
                        o.type,
                        h,
                        o.elementType === o.type
                      );
                      n = y.getSnapshotBeforeUpdate(
                        b,
                        i
                      ), y.__reactInternalSnapshotBeforeUpdate = n;
                    } catch (z) {
                      st(
                        o,
                        o.return,
                        z
                      );
                    }
                  }
                  break;
                case 3:
                  (n & 1024) !== 0 && Aa && Si(a.stateNode.containerInfo);
                  break;
                case 5:
                case 26:
                case 27:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  if ((n & 1024) !== 0)
                    throw Error(p(163));
              }
              if (n = a.sibling, n !== null) {
                n.return = a.return, Ka = n;
                break;
              }
              Ka = a.return;
            }
        return b = bp, bp = !1, b;
      }
      function Qm(a, n, i) {
        var o = i.flags;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            eu(a, i), o & 4 && mi(5, i);
            break;
          case 1:
            if (eu(a, i), o & 4)
              if (a = i.stateNode, n === null)
                try {
                  a.componentDidMount();
                } catch (z) {
                  st(i, i.return, z);
                }
              else {
                var h = nt(
                  i.type,
                  n.memoizedProps
                );
                n = n.memoizedState;
                try {
                  a.componentDidUpdate(
                    h,
                    n,
                    a.__reactInternalSnapshotBeforeUpdate
                  );
                } catch (z) {
                  st(
                    i,
                    i.return,
                    z
                  );
                }
              }
            o & 64 && Kf(i), o & 512 && zu(i, i.return);
            break;
          case 3:
            if (eu(a, i), o & 64 && (o = i.updateQueue, o !== null)) {
              if (a = null, i.child !== null)
                switch (i.child.tag) {
                  case 27:
                  case 5:
                    a = Qs(i.child.stateNode);
                    break;
                  case 1:
                    a = i.child.stateNode;
                }
              try {
                be(o, a);
              } catch (z) {
                st(i, i.return, z);
              }
            }
            break;
          case 26:
            if (Pn) {
              eu(a, i), o & 512 && zu(i, i.return);
              break;
            }
          case 27:
          case 5:
            eu(a, i), n === null && o & 4 && Qf(i), o & 512 && zu(i, i.return);
            break;
          case 12:
            eu(a, i);
            break;
          case 13:
            eu(a, i), o & 4 && Po(a, i);
            break;
          case 22:
            if (h = i.memoizedState !== null || fu, !h) {
              n = n !== null && n.memoizedState !== null || da;
              var y = fu, b = da;
              fu = h, (da = n) && !b ? Dl(
                a,
                i,
                (i.subtreeFlags & 8772) !== 0
              ) : eu(a, i), fu = y, da = b;
            }
            o & 512 && (i.memoizedProps.mode === "manual" ? zu(i, i.return) : zn(i, i.return));
            break;
          default:
            eu(a, i);
        }
      }
      function Ym(a) {
        var n = a.alternate;
        n !== null && (a.alternate = null, Ym(n)), a.child = null, a.deletions = null, a.sibling = null, a.tag === 5 && (n = a.stateNode, n !== null && gr(n)), a.stateNode = null, a.return = null, a.dependencies = null, a.memoizedProps = null, a.memoizedState = null, a.pendingProps = null, a.stateNode = null, a.updateQueue = null;
      }
      function fl(a, n, i) {
        for (i = i.child; i !== null; )
          Zi(
            a,
            n,
            i
          ), i = i.sibling;
      }
      function Zi(a, n, i) {
        if (Ln && typeof Ln.onCommitFiberUnmount == "function")
          try {
            Ln.onCommitFiberUnmount(es, i);
          } catch {
          }
        switch (i.tag) {
          case 26:
            if (Pn) {
              da || zn(i, n), fl(
                a,
                n,
                i
              ), i.memoizedState ? _r(i.memoizedState) : i.stateNode && mt(i.stateNode);
              break;
            }
          case 27:
            if (ra) {
              da || zn(i, n);
              var o = Ba, h = $n;
              Ba = i.stateNode, fl(
                a,
                n,
                i
              ), Fh(i.stateNode), Ba = o, $n = h;
              break;
            }
          case 5:
            da || zn(i, n);
          case 6:
            if (Aa) {
              if (o = Ba, h = $n, Ba = null, fl(
                a,
                n,
                i
              ), Ba = o, $n = h, Ba !== null)
                if ($n)
                  try {
                    Cr(Ba, i.stateNode);
                  } catch (y) {
                    st(
                      i,
                      n,
                      y
                    );
                  }
                else
                  try {
                    Zs(Ba, i.stateNode);
                  } catch (y) {
                    st(
                      i,
                      n,
                      y
                    );
                  }
            } else
              fl(
                a,
                n,
                i
              );
            break;
          case 18:
            Aa && Ba !== null && ($n ? Nd(
              Ba,
              i.stateNode
            ) : hp(Ba, i.stateNode));
            break;
          case 4:
            Aa ? (o = Ba, h = $n, Ba = i.stateNode.containerInfo, $n = !0, fl(
              a,
              n,
              i
            ), Ba = o, $n = h) : (Yu && wo(
              i.stateNode,
              i,
              Ut()
            ), fl(
              a,
              n,
              i
            ));
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            da || kl(2, i, n), da || kl(4, i, n), fl(
              a,
              n,
              i
            );
            break;
          case 1:
            da || (zn(i, n), o = i.stateNode, typeof o.componentWillUnmount == "function" && jf(
              i,
              n,
              o
            )), fl(
              a,
              n,
              i
            );
            break;
          case 21:
            fl(
              a,
              n,
              i
            );
            break;
          case 22:
            da || zn(i, n), da = (o = da) || i.memoizedState !== null, fl(
              a,
              n,
              i
            ), da = o;
            break;
          default:
            fl(
              a,
              n,
              i
            );
        }
      }
      function Po(a, n) {
        if (En && n.memoizedState === null && (a = n.alternate, a !== null && (a = a.memoizedState, a !== null && (a = a.dehydrated, a !== null))))
          try {
            Wi(a);
          } catch (i) {
            st(n, n.return, i);
          }
      }
      function Wo(a) {
        switch (a.tag) {
          case 13:
          case 19:
            var n = a.stateNode;
            return n === null && (n = a.stateNode = new Mp()), n;
          case 22:
            return a = a.stateNode, n = a._retryCache, n === null && (n = a._retryCache = new Mp()), n;
          default:
            throw Error(p(435, a.tag));
        }
      }
      function ko(a, n) {
        var i = Wo(a);
        n.forEach(function(o) {
          var h = td.bind(null, a, o);
          i.has(o) || (i.add(o), o.then(h, h));
        });
      }
      function hn(a, n) {
        var i = n.deletions;
        if (i !== null)
          for (var o = 0; o < i.length; o++) {
            var h = i[o], y = a, b = n;
            if (Aa) {
              var z = b;
              e: for (; z !== null; ) {
                switch (z.tag) {
                  case 27:
                  case 5:
                    Ba = z.stateNode, $n = !1;
                    break e;
                  case 3:
                    Ba = z.stateNode.containerInfo, $n = !0;
                    break e;
                  case 4:
                    Ba = z.stateNode.containerInfo, $n = !0;
                    break e;
                }
                z = z.return;
              }
              if (Ba === null) throw Error(p(160));
              Zi(y, b, h), Ba = null, $n = !1;
            } else Zi(y, b, h);
            y = h.alternate, y !== null && (y.return = null), h.return = null;
          }
        if (n.subtreeFlags & 13878)
          for (n = n.child; n !== null; )
            $o(n, a), n = n.sibling;
      }
      function $o(a, n) {
        var i = a.alternate, o = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            hn(n, a), vn(a), o & 4 && (kl(3, a, a.return), mi(3, a), kl(5, a, a.return));
            break;
          case 1:
            hn(n, a), vn(a), o & 512 && (da || i === null || zn(i, i.return)), o & 64 && fu && (a = a.updateQueue, a !== null && (o = a.callbacks, o !== null && (i = a.shared.hiddenCallbacks, a.shared.hiddenCallbacks = i === null ? o : i.concat(o))));
            break;
          case 26:
            if (Pn) {
              var h = Ll;
              hn(n, a), vn(a), o & 512 && (da || i === null || zn(i, i.return)), o & 4 && (o = i !== null ? i.memoizedState : null, n = a.memoizedState, i === null ? n === null ? a.stateNode === null ? a.stateNode = Zh(
                h,
                a.type,
                a.memoizedProps,
                a
              ) : yp(
                h,
                a.type,
                a.stateNode
              ) : a.stateNode = xd(
                h,
                n,
                a.memoizedProps
              ) : o !== n ? (o === null ? i.stateNode !== null && mt(i.stateNode) : _r(o), n === null ? yp(
                h,
                a.type,
                a.stateNode
              ) : xd(
                h,
                n,
                a.memoizedProps
              )) : n === null && a.stateNode !== null && Yf(
                a,
                a.memoizedProps,
                i.memoizedProps
              ));
              break;
            }
          case 27:
            if (ra && o & 4 && a.alternate === null) {
              h = a.stateNode;
              var y = a.memoizedProps;
              try {
                Hr(h), Ld(
                  a.type,
                  y,
                  h,
                  a
                );
              } catch (_e) {
                st(a, a.return, _e);
              }
            }
          case 5:
            if (hn(n, a), vn(a), o & 512 && (da || i === null || zn(i, i.return)), Aa) {
              if (a.flags & 32) {
                n = a.stateNode;
                try {
                  Md(n);
                } catch (_e) {
                  st(a, a.return, _e);
                }
              }
              o & 4 && a.stateNode != null && (n = a.memoizedProps, Yf(
                a,
                n,
                i !== null ? i.memoizedProps : n
              )), o & 1024 && (Fd = !0);
            }
            break;
          case 6:
            if (hn(n, a), vn(a), o & 4 && Aa) {
              if (a.stateNode === null)
                throw Error(p(162));
              o = a.memoizedProps, i = i !== null ? i.memoizedProps : o, n = a.stateNode;
              try {
                xh(n, i, o);
              } catch (_e) {
                st(a, a.return, _e);
              }
            }
            break;
          case 3:
            if (Pn ? (xn(), h = Ll, Ll = Dr(n.containerInfo), hn(n, a), Ll = h) : hn(n, a), vn(a), o & 4) {
              if (Aa && En && i !== null && i.memoizedState.isDehydrated)
                try {
                  Mr(n.containerInfo);
                } catch (_e) {
                  st(a, a.return, _e);
                }
              if (Yu) {
                o = n.containerInfo, i = n.pendingChildren;
                try {
                  Dd(o, i);
                } catch (_e) {
                  st(a, a.return, _e);
                }
              }
            }
            Fd && (Fd = !1, Vf(a));
            break;
          case 4:
            Pn ? (i = Ll, Ll = Dr(
              a.stateNode.containerInfo
            ), hn(n, a), vn(a), Ll = i) : (hn(n, a), vn(a)), o & 4 && Yu && wo(
              a.stateNode,
              a,
              a.stateNode.pendingChildren
            );
            break;
          case 12:
            hn(n, a), vn(a);
            break;
          case 13:
            hn(n, a), vn(a), a.child.flags & 8192 && a.memoizedState !== null != (i !== null && i.memoizedState !== null) && (Wd = vl()), o & 4 && (o = a.updateQueue, o !== null && (a.updateQueue = null, ko(a, o)));
            break;
          case 22:
            o & 512 && (da || i === null || zn(i, i.return)), h = a.memoizedState !== null;
            var b = i !== null && i.memoizedState !== null, z = fu, I = da;
            if (fu = z || h, da = I || b, hn(n, a), da = I, fu = z, vn(a), n = a.stateNode, n._current = a, n._visibility &= -3, n._visibility |= n._pendingVisibility & 2, o & 8192 && (n._visibility = h ? n._visibility & -2 : n._visibility | 1, h && (n = fu || da, i === null || b || n || dl(a)), Aa && (a.memoizedProps === null || a.memoizedProps.mode !== "manual"))) {
              e: if (i = null, Aa)
                for (n = a; ; ) {
                  if (n.tag === 5 || Pn && n.tag === 26 || ra && n.tag === 27) {
                    if (i === null) {
                      b = i = n;
                      try {
                        y = b.stateNode, h ? bd(y) : jh(
                          b.stateNode,
                          b.memoizedProps
                        );
                      } catch (_e) {
                        st(b, b.return, _e);
                      }
                    }
                  } else if (n.tag === 6) {
                    if (i === null) {
                      b = n;
                      try {
                        var pe = b.stateNode;
                        h ? Kh(pe) : up(pe, b.memoizedProps);
                      } catch (_e) {
                        st(b, b.return, _e);
                      }
                    }
                  } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === a) && n.child !== null) {
                    n.child.return = n, n = n.child;
                    continue;
                  }
                  if (n === a) break e;
                  for (; n.sibling === null; ) {
                    if (n.return === null || n.return === a)
                      break e;
                    i === n && (i = null), n = n.return;
                  }
                  i === n && (i = null), n.sibling.return = n.return, n = n.sibling;
                }
            }
            o & 4 && (o = a.updateQueue, o !== null && (i = o.retryQueue, i !== null && (o.retryQueue = null, ko(a, i))));
            break;
          case 19:
            hn(n, a), vn(a), o & 4 && (o = a.updateQueue, o !== null && (a.updateQueue = null, ko(a, o)));
            break;
          case 21:
            break;
          default:
            hn(n, a), vn(a);
        }
      }
      function vn(a) {
        var n = a.flags;
        if (n & 2) {
          try {
            if (Aa && (!ra || a.tag !== 27)) {
              e: {
                for (var i = a.return; i !== null; ) {
                  if (qo(i)) {
                    var o = i;
                    break e;
                  }
                  i = i.return;
                }
                throw Error(p(160));
              }
              switch (o.tag) {
                case 27:
                  if (ra) {
                    var h = o.stateNode, y = Fo(a);
                    $l(
                      a,
                      y,
                      h
                    );
                    break;
                  }
                case 5:
                  var b = o.stateNode;
                  o.flags & 32 && (Md(b), o.flags &= -33);
                  var z = Fo(a);
                  $l(a, z, b);
                  break;
                case 3:
                case 4:
                  var I = o.stateNode.containerInfo, pe = Fo(a);
                  Io(
                    a,
                    pe,
                    I
                  );
                  break;
                default:
                  throw Error(p(161));
              }
            }
          } catch (_e) {
            st(a, a.return, _e);
          }
          a.flags &= -3;
        }
        n & 4096 && (a.flags &= -4097);
      }
      function Vf(a) {
        if (a.subtreeFlags & 1024)
          for (a = a.child; a !== null; ) {
            var n = a;
            Vf(n), n.tag === 5 && n.flags & 1024 && km(n.stateNode), a = a.sibling;
          }
      }
      function eu(a, n) {
        if (n.subtreeFlags & 8772)
          for (n = n.child; n !== null; )
            Qm(a, n.alternate, n), n = n.sibling;
      }
      function dl(a) {
        for (a = a.child; a !== null; ) {
          var n = a;
          switch (n.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              kl(4, n, n.return), dl(n);
              break;
            case 1:
              zn(n, n.return);
              var i = n.stateNode;
              typeof i.componentWillUnmount == "function" && jf(
                n,
                n.return,
                i
              ), dl(n);
              break;
            case 26:
            case 27:
            case 5:
              zn(n, n.return), dl(n);
              break;
            case 22:
              zn(n, n.return), n.memoizedState === null && dl(n);
              break;
            default:
              dl(n);
          }
          a = a.sibling;
        }
      }
      function Dl(a, n, i) {
        for (i = i && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
          var o = n.alternate, h = a, y = n, b = y.flags;
          switch (y.tag) {
            case 0:
            case 11:
            case 15:
              Dl(
                h,
                y,
                i
              ), mi(4, y);
              break;
            case 1:
              if (Dl(
                h,
                y,
                i
              ), o = y, h = o.stateNode, typeof h.componentDidMount == "function")
                try {
                  h.componentDidMount();
                } catch (pe) {
                  st(o, o.return, pe);
                }
              if (o = y, h = o.updateQueue, h !== null) {
                var z = o.stateNode;
                try {
                  var I = h.shared.hiddenCallbacks;
                  if (I !== null)
                    for (h.shared.hiddenCallbacks = null, h = 0; h < I.length; h++)
                      et(I[h], z);
                } catch (pe) {
                  st(o, o.return, pe);
                }
              }
              i && b & 64 && Kf(y), zu(y, y.return);
              break;
            case 26:
            case 27:
            case 5:
              Dl(
                h,
                y,
                i
              ), i && o === null && b & 4 && Qf(y), zu(y, y.return);
              break;
            case 12:
              Dl(
                h,
                y,
                i
              );
              break;
            case 13:
              Dl(
                h,
                y,
                i
              ), i && b & 4 && Po(h, y);
              break;
            case 22:
              y.memoizedState === null && Dl(
                h,
                y,
                i
              ), zu(y, y.return);
              break;
            default:
              Dl(
                h,
                y,
                i
              );
          }
          n = n.sibling;
        }
      }
      function er(a, n) {
        var i = null;
        a !== null && a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), a = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (a = n.memoizedState.cachePool.pool), a !== i && (a != null && a.refCount++, i != null && Gs(i));
      }
      function Nc(a, n) {
        a = null, n.alternate !== null && (a = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== a && (n.refCount++, a != null && Gs(a));
      }
      function tu(a, n, i, o) {
        if (n.subtreeFlags & 10256)
          for (n = n.child; n !== null; )
            tr(
              a,
              n,
              i,
              o
            ), n = n.sibling;
      }
      function tr(a, n, i, o) {
        var h = n.flags;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            tu(
              a,
              n,
              i,
              o
            ), h & 2048 && mi(9, n);
            break;
          case 3:
            tu(
              a,
              n,
              i,
              o
            ), h & 2048 && (a = null, n.alternate !== null && (a = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== a && (n.refCount++, a != null && Gs(a)));
            break;
          case 12:
            if (h & 2048) {
              tu(
                a,
                n,
                i,
                o
              ), a = n.stateNode;
              try {
                var y = n.memoizedProps, b = y.id, z = y.onPostCommit;
                typeof z == "function" && z(
                  b,
                  n.alternate === null ? "mount" : "update",
                  a.passiveEffectDuration,
                  -0
                );
              } catch (I) {
                st(n, n.return, I);
              }
            } else
              tu(
                a,
                n,
                i,
                o
              );
            break;
          case 23:
            break;
          case 22:
            y = n.stateNode, n.memoizedState !== null ? y._visibility & 4 ? tu(
              a,
              n,
              i,
              o
            ) : ha(
              a,
              n
            ) : y._visibility & 4 ? tu(
              a,
              n,
              i,
              o
            ) : (y._visibility |= 4, xs(
              a,
              n,
              i,
              o,
              (n.subtreeFlags & 10256) !== 0
            )), h & 2048 && er(
              n.alternate,
              n
            );
            break;
          case 24:
            tu(
              a,
              n,
              i,
              o
            ), h & 2048 && Nc(n.alternate, n);
            break;
          default:
            tu(
              a,
              n,
              i,
              o
            );
        }
      }
      function xs(a, n, i, o, h) {
        for (h = h && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
          var y = a, b = n, z = i, I = o, pe = b.flags;
          switch (b.tag) {
            case 0:
            case 11:
            case 15:
              xs(
                y,
                b,
                z,
                I,
                h
              ), mi(8, b);
              break;
            case 23:
              break;
            case 22:
              var _e = b.stateNode;
              b.memoizedState !== null ? _e._visibility & 4 ? xs(
                y,
                b,
                z,
                I,
                h
              ) : ha(
                y,
                b
              ) : (_e._visibility |= 4, xs(
                y,
                b,
                z,
                I,
                h
              )), h && pe & 2048 && er(
                b.alternate,
                b
              );
              break;
            case 24:
              xs(
                y,
                b,
                z,
                I,
                h
              ), h && pe & 2048 && Nc(b.alternate, b);
              break;
            default:
              xs(
                y,
                b,
                z,
                I,
                h
              );
          }
          n = n.sibling;
        }
      }
      function ha(a, n) {
        if (n.subtreeFlags & 10256)
          for (n = n.child; n !== null; ) {
            var i = a, o = n, h = o.flags;
            switch (o.tag) {
              case 22:
                ha(i, o), h & 2048 && er(
                  o.alternate,
                  o
                );
                break;
              case 24:
                ha(i, o), h & 2048 && Nc(
                  o.alternate,
                  o
                );
                break;
              default:
                ha(i, o);
            }
            n = n.sibling;
          }
      }
      function pi(a) {
        if (a.subtreeFlags & is)
          for (a = a.child; a !== null; )
            Zf(a), a = a.sibling;
      }
      function Zf(a) {
        switch (a.tag) {
          case 26:
            pi(a), a.flags & is && (a.memoizedState !== null ? ki(
              Ll,
              a.memoizedState,
              a.memoizedProps
            ) : gd(a.type, a.memoizedProps));
            break;
          case 5:
            pi(a), a.flags & is && gd(a.type, a.memoizedProps);
            break;
          case 3:
          case 4:
            if (Pn) {
              var n = Ll;
              Ll = Dr(
                a.stateNode.containerInfo
              ), pi(a), Ll = n;
            } else pi(a);
            break;
          case 22:
            a.memoizedState === null && (n = a.alternate, n !== null && n.memoizedState !== null ? (n = is, is = 16777216, pi(a), is = n) : pi(a));
            break;
          default:
            pi(a);
        }
      }
      function qf(a) {
        var n = a.alternate;
        if (n !== null && (a = n.child, a !== null)) {
          n.child = null;
          do
            n = a.sibling, a.sibling = null, a = n;
          while (a !== null);
        }
      }
      function Ls(a) {
        var n = a.deletions;
        if ((a.flags & 16) !== 0) {
          if (n !== null)
            for (var i = 0; i < n.length; i++) {
              var o = n[i];
              Ka = o, ar(
                o,
                a
              );
            }
          qf(a);
        }
        if (a.subtreeFlags & 10256)
          for (a = a.child; a !== null; )
            Ff(a), a = a.sibling;
      }
      function Ff(a) {
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            Ls(a), a.flags & 2048 && kl(9, a, a.return);
            break;
          case 3:
            Ls(a);
            break;
          case 12:
            Ls(a);
            break;
          case 22:
            var n = a.stateNode;
            a.memoizedState !== null && n._visibility & 4 && (a.return === null || a.return.tag !== 13) ? (n._visibility &= -5, hi(a)) : Ls(a);
            break;
          default:
            Ls(a);
        }
      }
      function hi(a) {
        var n = a.deletions;
        if ((a.flags & 16) !== 0) {
          if (n !== null)
            for (var i = 0; i < n.length; i++) {
              var o = n[i];
              Ka = o, ar(
                o,
                a
              );
            }
          qf(a);
        }
        for (a = a.child; a !== null; ) {
          switch (n = a, n.tag) {
            case 0:
            case 11:
            case 15:
              kl(8, n, n.return), hi(n);
              break;
            case 22:
              i = n.stateNode, i._visibility & 4 && (i._visibility &= -5, hi(n));
              break;
            default:
              hi(n);
          }
          a = a.sibling;
        }
      }
      function ar(a, n) {
        for (; Ka !== null; ) {
          var i = Ka;
          switch (i.tag) {
            case 0:
            case 11:
            case 15:
              kl(8, i, n);
              break;
            case 23:
            case 22:
              if (i.memoizedState !== null && i.memoizedState.cachePool !== null) {
                var o = i.memoizedState.cachePool.pool;
                o != null && o.refCount++;
              }
              break;
            case 24:
              Gs(i.memoizedState.cache);
          }
          if (o = i.child, o !== null) o.return = i, Ka = o;
          else
            e: for (i = a; Ka !== null; ) {
              o = Ka;
              var h = o.sibling, y = o.return;
              if (Ym(o), o === i) {
                Ka = null;
                break e;
              }
              if (h !== null) {
                h.return = y, Ka = h;
                break e;
              }
              Ka = y;
            }
        }
      }
      function nr(a) {
        var n = Ed(a);
        if (n != null) {
          if (typeof n.memoizedProps["data-testname"] != "string")
            throw Error(p(364));
          return n;
        }
        if (a = Cd(a), a === null) throw Error(p(362));
        return a.stateNode.current;
      }
      function lr(a, n) {
        var i = a.tag;
        switch (n.$$typeof) {
          case Xr:
            if (a.type === n.value) return !0;
            break;
          case Vr:
            e: {
              for (n = n.value, a = [a, 0], i = 0; i < a.length; ) {
                var o = a[i++], h = o.tag, y = a[i++], b = n[y];
                if (h !== 5 && h !== 26 && h !== 27 || !Vs(o)) {
                  for (; b != null && lr(o, b); )
                    y++, b = n[y];
                  if (y === n.length) {
                    n = !0;
                    break e;
                  } else
                    for (o = o.child; o !== null; )
                      a.push(o, y), o = o.sibling;
                }
              }
              n = !1;
            }
            return n;
          case Zr:
            if ((i === 5 || i === 26 || i === 27) && ep(a.stateNode, n.value))
              return !0;
            break;
          case to:
            if ((i === 5 || i === 6 || i === 26 || i === 27) && (a = $m(a), a !== null && 0 <= a.indexOf(n.value)))
              return !0;
            break;
          case eo:
            if ((i === 5 || i === 26 || i === 27) && (a = a.memoizedProps["data-testname"], typeof a == "string" && a.toLowerCase() === n.value.toLowerCase()))
              return !0;
            break;
          default:
            throw Error(p(365));
        }
        return !1;
      }
      function ur(a) {
        switch (a.$$typeof) {
          case Xr:
            return "<" + (A(a.value) || "Unknown") + ">";
          case Vr:
            return ":has(" + (ur(a) || "") + ")";
          case Zr:
            return '[role="' + a.value + '"]';
          case to:
            return '"' + a.value + '"';
          case eo:
            return '[data-testname="' + a.value + '"]';
          default:
            throw Error(p(365));
        }
      }
      function ir(a, n) {
        var i = [];
        a = [a, 0];
        for (var o = 0; o < a.length; ) {
          var h = a[o++], y = h.tag, b = a[o++], z = n[b];
          if (y !== 5 && y !== 26 && y !== 27 || !Vs(h)) {
            for (; z != null && lr(h, z); )
              b++, z = n[b];
            if (b === n.length) i.push(h);
            else
              for (h = h.child; h !== null; )
                a.push(h, b), h = h.sibling;
          }
        }
        return i;
      }
      function Gc(a, n) {
        if (!Ei) throw Error(p(363));
        a = nr(a), a = ir(a, n), n = [], a = Array.from(a);
        for (var i = 0; i < a.length; ) {
          var o = a[i++], h = o.tag;
          if (h === 5 || h === 26 || h === 27)
            Vs(o) || n.push(o.stateNode);
          else
            for (o = o.child; o !== null; )
              a.push(o), o = o.sibling;
        }
        return n;
      }
      function yn() {
        if ((jt & 2) !== 0 && At !== 0)
          return At & -At;
        if (ke.T !== null) {
          var a = Is;
          return a !== 0 ? a : bu();
        }
        return Sd();
      }
      function If() {
        el === 0 && (el = (At & 536870912) === 0 || Ct ? ne() : 536870912);
        var a = rn.current;
        return a !== null && (a.flags |= 32), el;
      }
      function qa(a, n, i) {
        (a === qt && Qt === 2 || a.cancelPendingCommit !== null) && (vi(a, 0), _l(
          a,
          At,
          el,
          !1
        )), He(a, i), ((jt & 2) === 0 || a !== qt) && (a === qt && ((jt & 2) === 0 && (cs |= i), la === 4 && _l(
          a,
          At,
          el,
          !1
        )), On(a));
      }
      function sr(a, n, i) {
        if ((jt & 6) !== 0) throw Error(p(327));
        var o = !i && (n & 60) === 0 && (n & a.expiredLanes) === 0 || W(a, n), h = o ? Jc(a, n) : Lc(a, n, !0), y = o;
        do {
          if (h === 0) {
            ss && !o && _l(a, n, 0, !1);
            break;
          } else if (h === 6)
            _l(
              a,
              n,
              0,
              !du
            );
          else {
            if (i = a.current.alternate, y && !Xm(i)) {
              h = Lc(a, n, !1), y = !1;
              continue;
            }
            if (h === 2) {
              if (y = n, a.errorRecoveryDisabledLanes & y)
                var b = 0;
              else
                b = a.pendingLanes & -536870913, b = b !== 0 ? b : b & 536870912 ? 536870912 : 0;
              if (b !== 0) {
                n = b;
                e: {
                  var z = a;
                  h = ga;
                  var I = En && z.current.memoizedState.isDehydrated;
                  if (I && (vi(z, b).flags |= 256), b = Lc(
                    z,
                    b,
                    !1
                  ), b !== 2) {
                    if (Id && !I) {
                      z.errorRecoveryDisabledLanes |= y, cs |= y, h = 4;
                      break e;
                    }
                    y = Jl, Jl = h, y !== null && zc(y);
                  }
                  h = b;
                }
                if (y = !1, h !== 2) continue;
              }
            }
            if (h === 1) {
              vi(a, 0), _l(a, n, 0, !0);
              break;
            }
            e: {
              switch (o = a, h) {
                case 0:
                case 1:
                  throw Error(p(345));
                case 4:
                  if ((n & 4194176) === n) {
                    _l(
                      o,
                      n,
                      el,
                      !du
                    );
                    break e;
                  }
                  break;
                case 2:
                  Jl = null;
                  break;
                case 3:
                case 5:
                  break;
                default:
                  throw Error(p(329));
              }
              if (o.finishedWork = i, o.finishedLanes = n, (n & 62914560) === n && (y = Wd + 300 - vl(), 10 < y)) {
                if (_l(
                  o,
                  n,
                  el,
                  !du
                ), ce(o, 0) !== 0) break e;
                o.timeoutHandle = Yc(
                  wf.bind(
                    null,
                    o,
                    i,
                    Jl,
                    no,
                    Pd,
                    n,
                    el,
                    cs,
                    tc,
                    du,
                    2,
                    -0,
                    0
                  ),
                  y
                );
                break e;
              }
              wf(
                o,
                i,
                Jl,
                no,
                Pd,
                n,
                el,
                cs,
                tc,
                du,
                0,
                -0,
                0
              );
            }
          }
          break;
        } while (!0);
        On(a);
      }
      function zc(a) {
        Jl === null ? Jl = a : Jl.push.apply(
          Jl,
          a
        );
      }
      function wf(a, n, i, o, h, y, b, z, I, pe, _e, Le, Ge) {
        var Fe = n.subtreeFlags;
        if ((Fe & 8192 || (Fe & 16785408) === 16785408) && (wn(), Zf(n), n = na(), n !== null)) {
          a.cancelPendingCommit = n(
            Ai.bind(
              null,
              a,
              i,
              o,
              h,
              b,
              z,
              I,
              1,
              Le,
              Ge
            )
          ), _l(a, y, b, !pe);
          return;
        }
        Ai(
          a,
          i,
          o,
          h,
          b,
          z,
          I,
          _e,
          Le,
          Ge
        );
      }
      function Xm(a) {
        for (var n = a; ; ) {
          var i = n.tag;
          if ((i === 0 || i === 11 || i === 15) && n.flags & 16384 && (i = n.updateQueue, i !== null && (i = i.stores, i !== null)))
            for (var o = 0; o < i.length; o++) {
              var h = i[o], y = h.getSnapshot;
              h = h.value;
              try {
                if (!Bn(y(), h)) return !1;
              } catch {
                return !1;
              }
            }
          if (i = n.child, n.subtreeFlags & 16384 && i !== null)
            i.return = n, n = i;
          else {
            if (n === a) break;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === a) return !0;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
        }
        return !0;
      }
      function _l(a, n, i, o) {
        n &= ~wd, n &= ~cs, a.suspendedLanes |= n, a.pingedLanes &= ~n, o && (a.warmLanes |= n), o = a.expirationTimes;
        for (var h = n; 0 < h; ) {
          var y = 31 - Sn(h), b = 1 << y;
          o[y] = -1, h &= ~b;
        }
        i !== 0 && ee(a, i, n);
      }
      function Pf() {
        return (jt & 6) === 0 ? (gt(0), !1) : !0;
      }
      function Hl() {
        if (We !== null) {
          if (Qt === 0)
            var a = We.return;
          else
            a = We, xl = Di = null, ye(a), Ps = null, Wc = 0, a = We;
          for (; a !== null; )
            Zo(a.alternate, a), a = a.return;
          We = null;
        }
      }
      function vi(a, n) {
        a.finishedWork = null, a.finishedLanes = 0;
        var i = a.timeoutHandle;
        i !== Br && (a.timeoutHandle = Br, wi(i)), i = a.cancelPendingCommit, i !== null && (a.cancelPendingCommit = null, i()), Hl(), qt = a, We = i = ml(a.current, null), At = n, Qt = 0, Jn = null, du = !1, ss = W(a, n), Id = !1, tc = el = wd = cs = _i = la = 0, Jl = ga = null, Pd = !1, (n & 8) !== 0 && (n |= n & 32);
        var o = a.entangledLanes;
        if (o !== 0)
          for (a = a.entanglements, o &= n; 0 < o; ) {
            var h = 31 - Sn(o), y = 1 << h;
            n |= a[h], o &= ~y;
          }
        return mu = n, Ml(), i;
      }
      function Vm(a, n) {
        ft = null, ke.H = ru, n === cu ? (n = ya(), Qt = 3) : n === wu ? (n = ya(), Qt = 4) : Qt = n === Zd ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, Jn = n, We === null && (la = 1, Be(
          a,
          re(n, a.current)
        ));
      }
      function cr() {
        var a = rn.current;
        return a === null ? !0 : (At & 4194176) === At ? ou === null : (At & 62914560) === At || (At & 536870912) !== 0 ? a === ou : !1;
      }
      function xc() {
        var a = ke.H;
        return ke.H = ru, a === null ? ru : a;
      }
      function xu() {
        var a = ke.A;
        return ke.A = Wh, a;
      }
      function Ol() {
        la = 4, du || (At & 4194176) !== At && rn.current !== null || (ss = !0), (_i & 134217727) === 0 && (cs & 134217727) === 0 || qt === null || _l(
          qt,
          At,
          el,
          !1
        );
      }
      function Lc(a, n, i) {
        var o = jt;
        jt |= 2;
        var h = xc(), y = xu();
        (qt !== a || At !== n) && (no = null, vi(a, n)), n = !1;
        var b = la;
        e: do
          try {
            if (Qt !== 0 && We !== null) {
              var z = We, I = Jn;
              switch (Qt) {
                case 8:
                  Hl(), b = 6;
                  break e;
                case 3:
                case 2:
                case 6:
                  rn.current === null && (n = !0);
                  var pe = Qt;
                  if (Qt = 0, Jn = null, Lu(a, z, I, pe), i && ss) {
                    b = 0;
                    break e;
                  }
                  break;
                default:
                  pe = Qt, Qt = 0, Jn = null, Lu(a, z, I, pe);
              }
            }
            Wf(), b = la;
            break;
          } catch (_e) {
            Vm(a, _e);
          }
        while (!0);
        return n && a.shellSuspendCounter++, xl = Di = null, jt = o, ke.H = h, ke.A = y, We === null && (qt = null, At = 0, Ml()), b;
      }
      function Wf() {
        for (; We !== null; ) yi(We);
      }
      function Jc(a, n) {
        var i = jt;
        jt |= 2;
        var o = xc(), h = xu();
        qt !== a || At !== n ? (no = null, ao = vl() + 500, vi(a, n)) : ss = W(
          a,
          n
        );
        e: do
          try {
            if (Qt !== 0 && We !== null) {
              n = We;
              var y = Jn;
              t: switch (Qt) {
                case 1:
                  Qt = 0, Jn = null, Lu(a, n, y, 1);
                  break;
                case 2:
                  if (Gn(y)) {
                    Qt = 0, Jn = null, wt(n);
                    break;
                  }
                  n = function() {
                    Qt === 2 && qt === a && (Qt = 7), On(a);
                  }, y.then(n, n);
                  break e;
                case 3:
                  Qt = 7;
                  break e;
                case 4:
                  Qt = 5;
                  break e;
                case 7:
                  Gn(y) ? (Qt = 0, Jn = null, wt(n)) : (Qt = 0, Jn = null, Lu(a, n, y, 7));
                  break;
                case 5:
                  var b = null;
                  switch (We.tag) {
                    case 26:
                      b = We.memoizedState;
                    case 5:
                    case 27:
                      var z = We, I = z.type, pe = z.pendingProps;
                      if (b ? Ap(b) : Bd(I, pe)) {
                        Qt = 0, Jn = null;
                        var _e = z.sibling;
                        if (_e !== null) We = _e;
                        else {
                          var Le = z.return;
                          Le !== null ? (We = Le, Kc(Le)) : We = null;
                        }
                        break t;
                      }
                  }
                  Qt = 0, Jn = null, Lu(a, n, y, 5);
                  break;
                case 6:
                  Qt = 0, Jn = null, Lu(a, n, y, 6);
                  break;
                case 8:
                  Hl(), la = 6;
                  break e;
                default:
                  throw Error(p(462));
              }
            }
            or();
            break;
          } catch (Ge) {
            Vm(a, Ge);
          }
        while (!0);
        return xl = Di = null, ke.H = o, ke.A = h, jt = i, We !== null ? 0 : (qt = null, At = 0, Ml(), la);
      }
      function or() {
        for (; We !== null && !le(); )
          yi(We);
      }
      function yi(a) {
        var n = xo(
          a.alternate,
          a,
          mu
        );
        a.memoizedProps = a.pendingProps, n === null ? Kc(a) : We = n;
      }
      function wt(a) {
        var n = a, i = n.alternate;
        switch (n.tag) {
          case 15:
          case 0:
            n = Us(
              i,
              n,
              n.pendingProps,
              n.type,
              void 0,
              At
            );
            break;
          case 11:
            n = Us(
              i,
              n,
              n.pendingProps,
              n.type.render,
              n.ref,
              At
            );
            break;
          case 5:
            ye(n);
          default:
            Zo(i, n), n = We = Pt(n, mu), n = xo(i, n, mu);
        }
        a.memoizedProps = a.pendingProps, n === null ? Kc(a) : We = n;
      }
      function Lu(a, n, i, o) {
        xl = Di = null, ye(n), Ps = null, Wc = 0;
        var h = n.return;
        try {
          if (zf(
            a,
            h,
            n,
            i,
            At
          )) {
            la = 1, Be(
              a,
              re(i, a.current)
            ), We = null;
            return;
          }
        } catch (y) {
          if (h !== null) throw We = h, y;
          la = 1, Be(
            a,
            re(i, a.current)
          ), We = null;
          return;
        }
        n.flags & 32768 ? (Ct || o === 1 ? a = !0 : ss || (At & 536870912) !== 0 ? a = !1 : (du = a = !0, (o === 2 || o === 3 || o === 6) && (o = rn.current, o !== null && o.tag === 13 && (o.flags |= 16384))), rr(n, a)) : Kc(n);
      }
      function Kc(a) {
        var n = a;
        do {
          if ((n.flags & 32768) !== 0) {
            rr(
              n,
              du
            );
            return;
          }
          a = n.return;
          var i = Jf(
            n.alternate,
            n,
            mu
          );
          if (i !== null) {
            We = i;
            return;
          }
          if (n = n.sibling, n !== null) {
            We = n;
            return;
          }
          We = n = a;
        } while (n !== null);
        la === 0 && (la = 5);
      }
      function rr(a, n) {
        do {
          var i = Vo(a.alternate, a);
          if (i !== null) {
            i.flags &= 32767, We = i;
            return;
          }
          if (i = a.return, i !== null && (i.flags |= 32768, i.subtreeFlags = 0, i.deletions = null), !n && (a = a.sibling, a !== null)) {
            We = a;
            return;
          }
          We = a = i;
        } while (a !== null);
        la = 6, We = null;
      }
      function Ai(a, n, i, o, h, y, b, z, I, pe) {
        var _e = ke.T, Le = Xu();
        try {
          cn(2), ke.T = null, jc(
            a,
            n,
            i,
            o,
            Le,
            h,
            y,
            b,
            z,
            I,
            pe
          );
        } finally {
          ke.T = _e, cn(Le);
        }
      }
      function jc(a, n, i, o, h, y, b, z) {
        do
          au();
        while (Cn !== null);
        if ((jt & 6) !== 0) throw Error(p(327));
        var I = a.finishedWork;
        if (o = a.finishedLanes, I === null) return null;
        if (a.finishedWork = null, a.finishedLanes = 0, I === a.current) throw Error(p(177));
        a.callbackNode = null, a.callbackPriority = 0, a.cancelPendingCommit = null;
        var pe = I.lanes | I.childLanes;
        if (pe |= su, Xe(
          a,
          o,
          pe,
          y,
          b,
          z
        ), a === qt && (We = qt = null, At = 0), (I.subtreeFlags & 10256) === 0 && (I.flags & 10256) === 0 || ac || (ac = !0, ka = pe, kd = i, ad(Gr, function() {
          return au(), null;
        })), i = (I.flags & 15990) !== 0, (I.subtreeFlags & 15990) !== 0 || i ? (i = ke.T, ke.T = null, y = Xu(), cn(2), b = jt, jt |= 4, Xf(a, I), $o(I, a), hd(a.containerInfo), a.current = I, Qm(a, I.alternate, I), Fc(), jt = b, cn(y), ke.T = i) : a.current = I, ac ? (ac = !1, Cn = a, Sl = o) : fr(a, pe), pe = a.pendingLanes, pe === 0 && (pu = null), D(I.stateNode), On(a), n !== null)
          for (h = a.onRecoverableError, I = 0; I < n.length; I++)
            pe = n[I], h(pe.value, {
              componentStack: pe.stack
            });
        return (Sl & 3) !== 0 && au(), pe = a.pendingLanes, (o & 4194218) !== 0 && (pe & 42) !== 0 ? a === nc ? lo++ : (lo = 0, nc = a) : lo = 0, gt(0), null;
      }
      function fr(a, n) {
        (a.pooledCacheLanes &= n) === 0 && (n = a.pooledCache, n != null && (a.pooledCache = null, Gs(n)));
      }
      function au() {
        if (Cn !== null) {
          var a = Cn, n = ka;
          ka = 0;
          var i = Ve(Sl), o = 32 > i ? 32 : i;
          i = ke.T;
          var h = Xu();
          try {
            if (cn(o), ke.T = null, Cn === null)
              var y = !1;
            else {
              o = kd, kd = null;
              var b = Cn, z = Sl;
              if (Cn = null, Sl = 0, (jt & 6) !== 0)
                throw Error(p(331));
              var I = jt;
              if (jt |= 4, Ff(b.current), tr(
                b,
                b.current,
                z,
                o
              ), jt = I, gt(0, !1), Ln && typeof Ln.onPostCommitFiberRoot == "function")
                try {
                  Ln.onPostCommitFiberRoot(es, b);
                } catch {
                }
              y = !0;
            }
            return y;
          } finally {
            cn(h), ke.T = i, fr(a, n);
          }
        }
        return !1;
      }
      function kf(a, n, i) {
        n = re(i, n), n = Os(a.stateNode, n, 2), a = Jt(a, n, 2), a !== null && (He(a, 2), On(a));
      }
      function st(a, n, i) {
        if (a.tag === 3)
          kf(a, a, i);
        else
          for (; n !== null; ) {
            if (n.tag === 3) {
              kf(
                n,
                a,
                i
              );
              break;
            } else if (n.tag === 1) {
              var o = n.stateNode;
              if (typeof n.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (pu === null || !pu.has(o))) {
                a = re(i, a), i = oa(2), o = Jt(n, i, 2), o !== null && (_o(
                  i,
                  o,
                  n,
                  a
                ), He(o, 2), On(o));
                break;
              }
            }
            n = n.return;
          }
      }
      function dr(a, n, i) {
        var o = a.pingCache;
        if (o === null) {
          o = a.pingCache = new Dp();
          var h = /* @__PURE__ */ new Set();
          o.set(n, h);
        } else
          h = o.get(n), h === void 0 && (h = /* @__PURE__ */ new Set(), o.set(n, h));
        h.has(i) || (Id = !0, h.add(i), a = $f.bind(null, a, n, i), n.then(a, a));
      }
      function $f(a, n, i) {
        var o = a.pingCache;
        o !== null && o.delete(n), a.pingedLanes |= a.suspendedLanes & i, a.warmLanes &= ~i, qt === a && (At & i) === i && (la === 4 || la === 3 && (At & 62914560) === At && 300 > vl() - Wd ? (jt & 2) === 0 && vi(a, 0) : wd |= i, tc === At && (tc = 0)), On(a);
      }
      function ed(a, n) {
        n === 0 && (n = se()), a = Hn(a, n), a !== null && (He(a, n), On(a));
      }
      function Zm(a) {
        var n = a.memoizedState, i = 0;
        n !== null && (i = n.retryLane), ed(a, i);
      }
      function td(a, n) {
        var i = 0;
        switch (a.tag) {
          case 13:
            var o = a.stateNode, h = a.memoizedState;
            h !== null && (i = h.retryLane);
            break;
          case 19:
            o = a.stateNode;
            break;
          case 22:
            o = a.stateNode._retryCache;
            break;
          default:
            throw Error(p(314));
        }
        o !== null && o.delete(n), ed(a, i);
      }
      function ad(a, n) {
        return qc(a, n);
      }
      function qm(a, n, i, o) {
        this.tag = a, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
      }
      function Js(a) {
        return a = a.prototype, !(!a || !a.isReactComponent);
      }
      function ml(a, n) {
        var i = a.alternate;
        return i === null ? (i = r(
          a.tag,
          n,
          a.key,
          a.mode
        ), i.elementType = a.elementType, i.type = a.type, i.stateNode = a.stateNode, i.alternate = a, a.alternate = i) : (i.pendingProps = n, i.type = a.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = a.flags & 31457280, i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, n = a.dependencies, i.dependencies = n === null ? null : {
          lanes: n.lanes,
          firstContext: n.firstContext
        }, i.sibling = a.sibling, i.index = a.index, i.ref = a.ref, i.refCleanup = a.refCleanup, i;
      }
      function Pt(a, n) {
        a.flags &= 31457282;
        var i = a.alternate;
        return i === null ? (a.childLanes = 0, a.lanes = n, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = i.childLanes, a.lanes = i.lanes, a.child = i.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = i.memoizedProps, a.memoizedState = i.memoizedState, a.updateQueue = i.updateQueue, a.type = i.type, n = i.dependencies, a.dependencies = n === null ? null : {
          lanes: n.lanes,
          firstContext: n.firstContext
        }), a;
      }
      function mr(a, n, i, o, h, y) {
        var b = 0;
        if (o = a, typeof a == "function") Js(a) && (b = 1);
        else if (typeof a == "string")
          b = Pn && ra ? Gd(a, i, Pa.current) ? 26 : Or(a) ? 27 : 5 : Pn ? Gd(
            a,
            i,
            Pa.current
          ) ? 26 : 5 : ra && Or(a) ? 27 : 5;
        else
          e: switch (a) {
            case Ii:
              return qi(
                i.children,
                h,
                y,
                n
              );
            case cd:
              b = 8, h |= 24;
              break;
            case vr:
              return a = r(12, i, n, h | 2), a.elementType = vr, a.lanes = y, a;
            case Ar:
              return a = r(13, i, n, h), a.elementType = Ar, a.lanes = y, a;
            case fd:
              return a = r(19, i, n, h), a.elementType = fd, a.lanes = y, a;
            case hl:
              return nd(i, h, y, n);
            default:
              if (typeof a == "object" && a !== null)
                switch (a.$$typeof) {
                  case od:
                  case Ul:
                    b = 10;
                    break e;
                  case yr:
                    b = 9;
                    break e;
                  case rd:
                    b = 11;
                    break e;
                  case Er:
                    b = 14;
                    break e;
                  case Ku:
                    b = 16, o = null;
                    break e;
                }
              b = 29, i = Error(
                p(
                  130,
                  a === null ? "null" : typeof a,
                  ""
                )
              ), o = null;
          }
        return n = r(b, i, n, h), n.elementType = a, n.type = o, n.lanes = y, n;
      }
      function qi(a, n, i, o) {
        return a = r(7, a, o, n), a.lanes = i, a;
      }
      function nd(a, n, i, o) {
        a = r(22, a, o, n), a.elementType = hl, a.lanes = i;
        var h = {
          _visibility: 1,
          _pendingVisibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
          _current: null,
          detach: function() {
            var y = h._current;
            if (y === null) throw Error(p(456));
            if ((h._pendingVisibility & 2) === 0) {
              var b = Hn(y, 2);
              b !== null && (h._pendingVisibility |= 2, qa(b, y, 2));
            }
          },
          attach: function() {
            var y = h._current;
            if (y === null) throw Error(p(456));
            if ((h._pendingVisibility & 2) !== 0) {
              var b = Hn(y, 2);
              b !== null && (h._pendingVisibility &= -3, qa(b, y, 2));
            }
          }
        };
        return a.stateNode = h, a;
      }
      function pl(a, n, i) {
        return a = r(6, a, null, n), a.lanes = i, a;
      }
      function pr(a, n, i) {
        return n = r(
          4,
          a.children !== null ? a.children : [],
          a.key,
          n
        ), n.lanes = i, n.stateNode = {
          containerInfo: a.containerInfo,
          pendingChildren: null,
          implementation: a.implementation
        }, n;
      }
      function ld(a, n, i, o, h, y, b, z) {
        this.tag = 1, this.containerInfo = a, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Br, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = fe(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = fe(0), this.hiddenUpdates = fe(null), this.identifierPrefix = o, this.onUncaughtError = h, this.onCaughtError = y, this.onRecoverableError = b, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = z, this.incompleteTransitions = /* @__PURE__ */ new Map();
      }
      function Ks(a, n, i, o, h, y, b, z, I, pe, _e, Le) {
        return a = new ld(
          a,
          n,
          i,
          b,
          z,
          I,
          pe,
          Le
        ), n = 1, y === !0 && (n |= 24), y = r(3, null, null, n), a.current = y, y.stateNode = a, n = Qo(), n.refCount++, a.pooledCache = n, n.refCount++, y.memoizedState = {
          element: o,
          isDehydrated: i,
          cache: n
        }, Nn(y), a;
      }
      function Fi(a) {
        return a ? (a = Ci, a) : Ci;
      }
      function ud(a) {
        var n = a._reactInternals;
        if (n === void 0)
          throw typeof a.render == "function" ? Error(p(188)) : (a = Object.keys(a).join(","), Error(p(268, a)));
        return a = O(n), a = a !== null ? U(a) : null, a === null ? null : Qs(a.stateNode);
      }
      function hr(a, n, i, o, h, y) {
        h = Fi(h), o.context === null ? o.context = h : o.pendingContext = h, o = Oa(n), o.payload = { element: i }, y = y === void 0 ? null : y, y !== null && (o.callback = y), i = Jt(a, o, n), i !== null && (qa(i, a, n), Ua(i, a, n));
      }
      function id(a, n) {
        if (a = a.memoizedState, a !== null && a.dehydrated !== null) {
          var i = a.retryLane;
          a.retryLane = i !== 0 && i < n ? i : n;
        }
      }
      function sd(a, n) {
        id(a, n), (a = a.alternate) && id(a, n);
      }
      var pt = {}, Fm = Ec, Fn = n0(), Ju = Object.assign, In = Symbol.for("react.element"), Qc = Symbol.for("react.transitional.element"), js = Symbol.for("react.portal"), Ii = Symbol.for("react.fragment"), cd = Symbol.for("react.strict_mode"), vr = Symbol.for("react.profiler"), od = Symbol.for("react.provider"), yr = Symbol.for("react.consumer"), Ul = Symbol.for("react.context"), rd = Symbol.for("react.forward_ref"), Ar = Symbol.for("react.suspense"), fd = Symbol.for("react.suspense_list"), Er = Symbol.for("react.memo"), Ku = Symbol.for("react.lazy"), hl = Symbol.for("react.offscreen"), dd = Symbol.for("react.memo_cache_sentinel"), md = Symbol.iterator, Uh = Symbol.for("react.client.reference"), ke = Fm.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, pd, An, Sr = !1, sn = Array.isArray, Im = u.rendererVersion, Nh = u.rendererPackageName, Nl = u.extraDevToolsConfig, Qs = u.getPublicInstance, Ys = u.getRootHostContext, wm = u.getChildHostContext, ju = u.prepareForCommit, hd = u.resetAfterCommit, vd = u.createInstance, nu = u.appendInitialChild, yd = u.finalizeInitialChildren, Qu = u.shouldSetTextContent, Ad = u.createTextInstance, Yc = u.scheduleTimeout, wi = u.cancelTimeout, Br = u.noTimeout, lu = u.isPrimaryRenderer;
      u.warnsIfNotActing;
      var Aa = u.supportsMutation, Yu = u.supportsPersistence, En = u.supportsHydration, Ed = u.getInstanceFromNode;
      u.beforeActiveInstanceBlur, u.afterActiveInstanceBlur;
      var Pm = u.preparePortalMount;
      u.prepareScopeUpdate, u.getInstanceFromScope;
      var cn = u.setCurrentUpdatePriority, Xu = u.getCurrentUpdatePriority, Sd = u.resolveUpdatePriority;
      u.resolveEventType, u.resolveEventTimeStamp;
      var Wm = u.shouldAttemptEagerTransition, gr = u.detachDeletedInstance;
      u.requestPostPaintCallback;
      var Gh = u.maySuspendCommit, Bd = u.preloadInstance, wn = u.startSuspendingCommit, gd = u.suspendInstance, na = u.waitForCommitToBeReady, Pi = u.NotPendingTransition, Vu = u.HostTransitionContext, km = u.resetFormInstance;
      u.bindToConsole;
      var zh = u.supportsMicrotasks, Zu = u.scheduleMicrotask, Ei = u.supportsTestSelectors, Cd = u.findFiberRoot, Xs = u.getBoundingRect, $m = u.getTextContent, Vs = u.isHiddenSubtree, ep = u.matchAccessibilityRole, tp = u.setFocusIfFocusable, Td = u.setupIntersectionObserver, Rd = u.appendChild, ap = u.appendChildToContainer, xh = u.commitTextUpdate, Lh = u.commitMount, np = u.commitUpdate, lp = u.insertBefore, Jh = u.insertInContainerBefore, Zs = u.removeChild, Cr = u.removeChildFromContainer, Md = u.resetTextContent, bd = u.hideInstance, Kh = u.hideTextInstance, jh = u.unhideInstance, up = u.unhideTextInstance, Si = u.clearContainer, ip = u.cloneInstance, Ut = u.createContainerChildSet, Tr = u.appendChildToContainerChildSet, Qh = u.finalizeContainerChildren, Dd = u.replaceContainerChildren, sp = u.cloneHiddenInstance, cp = u.cloneHiddenTextInstance, Xc = u.isSuspenseInstancePending, Rr = u.isSuspenseInstanceFallback, op = u.getSuspenseInstanceFallbackErrorDetails, rp = u.registerSuspenseInstanceRetry, Vc = u.canHydrateFormStateMarker, Yh = u.isFormStateMarkerMatching, fp = u.getNextHydratableSibling, Bi = u.getFirstHydratableChild, _d = u.getFirstHydratableChildWithinContainer, dp = u.getFirstHydratableChildWithinSuspenseInstance, mp = u.canHydrateInstance, Hd = u.canHydrateTextInstance, Xh = u.canHydrateSuspenseInstance, Od = u.hydrateInstance, gi = u.hydrateTextInstance, pp = u.hydrateSuspenseInstance, Ud = u.getNextHydratableInstanceAfterSuspenseInstance, Mr = u.commitHydratedContainer, Wi = u.commitHydratedSuspenseInstance, hp = u.clearSuspenseBoundary, Nd = u.clearSuspenseBoundaryFromContainer, br = u.shouldDeleteUnhydratedTailInstances;
      u.diffHydratedPropsForDevWarnings, u.diffHydratedTextForDevWarnings, u.describeHydratableInstanceForDevWarnings;
      var Vh = u.validateHydratableInstance, vp = u.validateHydratableTextInstance, Pn = u.supportsResources, Gd = u.isHostHoistableType, Dr = u.getHoistableRoot, zd = u.getResource, xd = u.acquireResource, _r = u.releaseResource, Zh = u.hydrateHoistable, yp = u.mountHoistable, mt = u.unmountHoistable, qh = u.createHoistableInstance, xn = u.prepareToCommitHoistables, Fa = u.mayResourceSuspendCommit, Ap = u.preloadResource, ki = u.suspendResource, ra = u.supportsSingletons, $i = u.resolveSingletonInstance, Hr = u.clearSingleton, Ld = u.acquireSingletonInstance, Fh = u.releaseSingletonInstance, Or = u.isHostSingletonType, Gl = [], uu = -1, Ci = {}, Sn = Math.clz32 ? Math.clz32 : $, Ur = Math.log, Wn = Math.LN2, Zc = 128, Nr = 4194304, qc = Fn.unstable_scheduleCallback, Jd = Fn.unstable_cancelCallback, le = Fn.unstable_shouldYield, Fc = Fn.unstable_requestPaint, vl = Fn.unstable_now, Kd = Fn.unstable_ImmediatePriority, Ep = Fn.unstable_UserBlockingPriority, Gr = Fn.unstable_NormalPriority, Sp = Fn.unstable_IdlePriority, Bp = Fn.log, gp = Fn.unstable_setDisableYieldValue, es = null, Ln = null, Bn = typeof Object.is == "function" ? Object.is : X, zr = /* @__PURE__ */ new WeakMap(), Ia = [], wa = 0, La = null, xr = 0, yl = [], kn = 0, Al = null, qu = 1, Fu = "", Pa = P(null), Ic = P(null), Ti = P(null), qs = P(null), on = null, Da = null, Ct = !1, zl = null, iu = !1, wc = Error(p(519)), Ea = [], va = 0, su = 0, gn = null, ts = null, jd = !1, Wa = !1, Iu = !1, Fs = 0, Pc = null, Qd = 0, Is = 0, as = null, Ri = !1, Lr = !1, Ih = Object.prototype.hasOwnProperty, cu = Error(p(460)), wu = Error(p(474)), Jr = { then: function() {
      } }, ws = null, Ps = null, Wc = 0, El = Yn(!0), Cp = Yn(!1), Ws = P(null), Kr = P(0), rn = P(null), ou = null, _a = P(0), Mi = 0, ft = null, Kt = null, Sa = null, jr = !1, ks = !1, ns = !1, Qr = 0, kc = 0, $s = null, Tp = 0, Yd = function() {
        return { lastEffect: null, events: null, stores: null, memoCache: null };
      }, ru = {
        readContext: Za,
        use: De,
        useCallback: It,
        useContext: It,
        useEffect: It,
        useImperativeHandle: It,
        useLayoutEffect: It,
        useInsertionEffect: It,
        useMemo: It,
        useReducer: It,
        useRef: It,
        useState: It,
        useDebugValue: It,
        useDeferredValue: It,
        useTransition: It,
        useSyncExternalStore: It,
        useId: It
      };
      ru.useCacheRefresh = It, ru.useMemoCache = It, ru.useHostTransitionStatus = It, ru.useFormState = It, ru.useActionState = It, ru.useOptimistic = It;
      var ls = {
        readContext: Za,
        use: De,
        useCallback: function(a, n) {
          return Se().memoizedState = [
            a,
            n === void 0 ? null : n
          ], a;
        },
        useContext: Za,
        useEffect: Ms,
        useImperativeHandle: function(a, n, i) {
          i = i != null ? i.concat([a]) : null, Ki(
            4194308,
            4,
            Sc.bind(null, n, a),
            i
          );
        },
        useLayoutEffect: function(a, n) {
          return Ki(4194308, 4, a, n);
        },
        useInsertionEffect: function(a, n) {
          Ki(4, 2, a, n);
        },
        useMemo: function(a, n) {
          var i = Se();
          n = n === void 0 ? null : n;
          var o = a();
          if (ns) {
            Q(!0);
            try {
              a();
            } finally {
              Q(!1);
            }
          }
          return i.memoizedState = [o, n], o;
        },
        useReducer: function(a, n, i) {
          var o = Se();
          if (i !== void 0) {
            var h = i(n);
            if (ns) {
              Q(!0);
              try {
                i(n);
              } finally {
                Q(!1);
              }
            }
          } else h = n;
          return o.memoizedState = o.baseState = h, a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: a,
            lastRenderedState: h
          }, o.queue = a, a = a.dispatch = Do.bind(
            null,
            ft,
            a
          ), [o.memoizedState, a];
        },
        useRef: function(a) {
          var n = Se();
          return a = { current: a }, n.memoizedState = a;
        },
        useState: function(a) {
          a = Bt(a);
          var n = a.queue, i = Nf.bind(
            null,
            ft,
            n
          );
          return n.dispatch = i, [a.memoizedState, i];
        },
        useDebugValue: Ro,
        useDeferredValue: function(a, n) {
          var i = Se();
          return Mo(i, a, n);
        },
        useTransition: function() {
          var a = Bt(!1);
          return a = Ga.bind(
            null,
            ft,
            a.queue,
            !0,
            !1
          ), Se().memoizedState = a, [!1, a];
        },
        useSyncExternalStore: function(a, n, i) {
          var o = ft, h = Se();
          if (Ct) {
            if (i === void 0)
              throw Error(p(407));
            i = i();
          } else {
            if (i = n(), qt === null)
              throw Error(p(349));
            (At & 60) !== 0 || Gt(o, n, i);
          }
          h.memoizedState = i;
          var y = { value: i, getSnapshot: n };
          return h.queue = y, Ms(Vt.bind(null, o, y, a), [
            a
          ]), o.flags |= 2048, Vn(
            9,
            Ht.bind(
              null,
              o,
              y,
              i,
              n
            ),
            { destroy: void 0 },
            null
          ), i;
        },
        useId: function() {
          var a = Se(), n = qt.identifierPrefix;
          if (Ct) {
            var i = Fu, o = qu;
            i = (o & ~(1 << 32 - Sn(o) - 1)).toString(32) + i, n = ":" + n + "R" + i, i = Qr++, 0 < i && (n += "H" + i.toString(32)), n += ":";
          } else
            i = Tp++, n = ":" + n + "r" + i.toString(32) + ":";
          return a.memoizedState = n;
        },
        useCacheRefresh: function() {
          return Se().memoizedState = bo.bind(
            null,
            ft
          );
        }
      };
      ls.useMemoCache = Nt, ls.useHostTransitionStatus = bs, ls.useFormState = ln, ls.useActionState = ln, ls.useOptimistic = function(a) {
        var n = Se();
        n.memoizedState = n.baseState = a;
        var i = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return n.queue = i, n = Tc.bind(
          null,
          ft,
          !0,
          i
        ), i.dispatch = n, [a, n];
      };
      var bi = {
        readContext: Za,
        use: De,
        useCallback: Bc,
        useContext: Za,
        useEffect: To,
        useImperativeHandle: Hf,
        useInsertionEffect: Jm,
        useLayoutEffect: _f,
        useMemo: Of,
        useReducer: Ye,
        useRef: Rs,
        useState: function() {
          return Ye(xe);
        },
        useDebugValue: Ro,
        useDeferredValue: function(a, n) {
          var i = ve();
          return Uf(
            i,
            Kt.memoizedState,
            a,
            n
          );
        },
        useTransition: function() {
          var a = Ye(xe)[0], n = ve().memoizedState;
          return [
            typeof a == "boolean" ? a : Ee(a),
            n
          ];
        },
        useSyncExternalStore: Mt,
        useId: Ds
      };
      bi.useCacheRefresh = Cc, bi.useMemoCache = Nt, bi.useHostTransitionStatus = bs, bi.useFormState = Fl, bi.useActionState = Fl, bi.useOptimistic = function(a, n) {
        var i = ve();
        return ca(i, Kt, a, n);
      };
      var us = {
        readContext: Za,
        use: De,
        useCallback: Bc,
        useContext: Za,
        useEffect: To,
        useImperativeHandle: Hf,
        useInsertionEffect: Jm,
        useLayoutEffect: _f,
        useMemo: Of,
        useReducer: at,
        useRef: Rs,
        useState: function() {
          return at(xe);
        },
        useDebugValue: Ro,
        useDeferredValue: function(a, n) {
          var i = ve();
          return Kt === null ? Mo(i, a, n) : Uf(
            i,
            Kt.memoizedState,
            a,
            n
          );
        },
        useTransition: function() {
          var a = at(xe)[0], n = ve().memoizedState;
          return [
            typeof a == "boolean" ? a : Ee(a),
            n
          ];
        },
        useSyncExternalStore: Mt,
        useId: Ds
      };
      us.useCacheRefresh = Cc, us.useMemoCache = Nt, us.useHostTransitionStatus = bs, us.useFormState = Uu, us.useActionState = Uu, us.useOptimistic = function(a, n) {
        var i = ve();
        return Kt !== null ? ca(i, Kt, a, n) : (i.baseState = a, [a, i.queue.dispatch]);
      };
      var Xd = {
        isMounted: function(a) {
          return (a = a._reactInternals) ? T(a) === a : !1;
        },
        enqueueSetState: function(a, n, i) {
          a = a._reactInternals;
          var o = yn(), h = Oa(o);
          h.payload = n, i != null && (h.callback = i), n = Jt(a, h, o), n !== null && (qa(n, a, o), Ua(n, a, o));
        },
        enqueueReplaceState: function(a, n, i) {
          a = a._reactInternals;
          var o = yn(), h = Oa(o);
          h.tag = 1, h.payload = n, i != null && (h.callback = i), n = Jt(a, h, o), n !== null && (qa(n, a, o), Ua(n, a, o));
        },
        enqueueForceUpdate: function(a, n) {
          a = a._reactInternals;
          var i = yn(), o = Oa(i);
          o.tag = 2, n != null && (o.callback = n), n = Jt(a, o, i), n !== null && (qa(n, a, i), Ua(n, a, i));
        }
      }, Vd = typeof reportError == "function" ? reportError : function(a) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var n = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof a == "object" && a !== null && typeof a.message == "string" ? String(a.message) : String(a),
            error: a
          });
          if (!window.dispatchEvent(n)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", a);
          return;
        }
        console.error(a);
      }, Zd = Error(p(461)), Ja = !1, Yr = { dehydrated: null, treeContext: null, retryLane: 0 }, $c = P(null), Di = null, xl = null, qd = typeof AbortController < "u" ? AbortController : function() {
        var a = [], n = this.signal = {
          aborted: !1,
          addEventListener: function(i, o) {
            a.push(o);
          }
        };
        this.abort = function() {
          n.aborted = !0, a.forEach(function(i) {
            return i();
          });
        };
      }, wh = Fn.unstable_scheduleCallback, Ph = Fn.unstable_NormalPriority, fa = {
        $$typeof: Ul,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
      }, Rp = ke.S;
      ke.S = function(a, n) {
        typeof n == "object" && n !== null && typeof n.then == "function" && il(a, n), Rp !== null && Rp(a, n);
      };
      var Pu = P(null), fu = !1, da = !1, Fd = !1, Mp = typeof WeakSet == "function" ? WeakSet : Set, Ka = null, bp = !1, Ba = null, $n = !1, Ll = null, is = 8192, Wh = {
        getCacheForType: function(a) {
          var n = Za(fa), i = n.data.get(a);
          return i === void 0 && (i = a(), n.data.set(a, i)), i;
        }
      }, Xr = 0, Vr = 1, Zr = 2, eo = 3, to = 4;
      if (typeof Symbol == "function" && Symbol.for) {
        var ec = Symbol.for;
        Xr = ec("selector.component"), Vr = ec("selector.has_pseudo_class"), Zr = ec("selector.role"), eo = ec("selector.test_id"), to = ec("selector.text");
      }
      var Dp = typeof WeakMap == "function" ? WeakMap : Map, jt = 0, qt = null, We = null, At = 0, Qt = 0, Jn = null, du = !1, ss = !1, Id = !1, mu = 0, la = 0, _i = 0, cs = 0, wd = 0, el = 0, tc = 0, ga = null, Jl = null, Pd = !1, Wd = 0, ao = 1 / 0, no = null, pu = null, ac = !1, Cn = null, Sl = 0, ka = 0, kd = null, lo = 0, nc = null;
      return pt.attemptContinuousHydration = function(a) {
        if (a.tag === 13) {
          var n = Hn(a, 67108864);
          n !== null && qa(n, a, 67108864), sd(a, 67108864);
        }
      }, pt.attemptHydrationAtCurrentPriority = function(a) {
        if (a.tag === 13) {
          var n = yn(), i = Hn(a, n);
          i !== null && qa(i, a, n), sd(a, n);
        }
      }, pt.attemptSynchronousHydration = function(a) {
        switch (a.tag) {
          case 3:
            if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
              var n = Z(a.pendingLanes);
              if (n !== 0) {
                for (a.pendingLanes |= 2, a.entangledLanes |= 2; n; ) {
                  var i = 1 << 31 - Sn(n);
                  a.entanglements[1] |= i, n &= ~i;
                }
                On(a), (jt & 6) === 0 && (ao = vl() + 500, gt(0));
              }
            }
            break;
          case 13:
            n = Hn(a, 2), n !== null && qa(n, a, 2), Pf(), sd(a, 2);
        }
      }, pt.batchedUpdates = function(a, n) {
        return a(n);
      }, pt.createComponentSelector = function(a) {
        return { $$typeof: Xr, value: a };
      }, pt.createContainer = function(a, n, i, o, h, y, b, z, I, pe) {
        return Ks(
          a,
          n,
          !1,
          null,
          i,
          o,
          y,
          b,
          z,
          I,
          pe,
          null
        );
      }, pt.createHasPseudoClassSelector = function(a) {
        return { $$typeof: Vr, value: a };
      }, pt.createHydrationContainer = function(a, n, i, o, h, y, b, z, I, pe, _e, Le, Ge) {
        return a = Ks(
          i,
          o,
          !0,
          a,
          h,
          y,
          z,
          I,
          pe,
          _e,
          Le,
          Ge
        ), a.context = Fi(null), i = a.current, o = yn(), h = Oa(o), h.callback = n ?? null, Jt(i, h, o), a.current.lanes = o, He(a, o), On(a), a;
      }, pt.createPortal = function(a, n, i) {
        var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
          $$typeof: js,
          key: o == null ? null : "" + o,
          children: a,
          containerInfo: n,
          implementation: i
        };
      }, pt.createRoleSelector = function(a) {
        return { $$typeof: Zr, value: a };
      }, pt.createTestNameSelector = function(a) {
        return { $$typeof: eo, value: a };
      }, pt.createTextSelector = function(a) {
        return { $$typeof: to, value: a };
      }, pt.defaultOnCaughtError = function(a) {
        console.error(a);
      }, pt.defaultOnRecoverableError = function(a) {
        Vd(a);
      }, pt.defaultOnUncaughtError = function(a) {
        Vd(a);
      }, pt.deferredUpdates = function(a) {
        var n = ke.T, i = Xu();
        try {
          return cn(32), ke.T = null, a();
        } finally {
          cn(i), ke.T = n;
        }
      }, pt.discreteUpdates = function(a, n, i, o, h) {
        var y = ke.T, b = Xu();
        try {
          return cn(2), ke.T = null, a(n, i, o, h);
        } finally {
          cn(b), ke.T = y, jt === 0 && (ao = vl() + 500);
        }
      }, pt.findAllNodes = Gc, pt.findBoundingRects = function(a, n) {
        if (!Ei) throw Error(p(363));
        n = Gc(a, n), a = [];
        for (var i = 0; i < n.length; i++)
          a.push(Xs(n[i]));
        for (n = a.length - 1; 0 < n; n--) {
          i = a[n];
          for (var o = i.x, h = o + i.width, y = i.y, b = y + i.height, z = n - 1; 0 <= z; z--)
            if (n !== z) {
              var I = a[z], pe = I.x, _e = pe + I.width, Le = I.y, Ge = Le + I.height;
              if (o >= pe && y >= Le && h <= _e && b <= Ge) {
                a.splice(n, 1);
                break;
              } else if (o !== pe || i.width !== I.width || Ge < y || Le > b) {
                if (!(y !== Le || i.height !== I.height || _e < o || pe > h)) {
                  pe > o && (I.width += pe - o, I.x = o), _e < h && (I.width = h - pe), a.splice(n, 1);
                  break;
                }
              } else {
                Le > y && (I.height += Le - y, I.y = y), Ge < b && (I.height = b - Le), a.splice(n, 1);
                break;
              }
            }
        }
        return a;
      }, pt.findHostInstance = ud, pt.findHostInstanceWithNoPortals = function(a) {
        return a = O(a), a = a !== null ? V(a) : null, a === null ? null : Qs(a.stateNode);
      }, pt.findHostInstanceWithWarning = function(a) {
        return ud(a);
      }, pt.flushPassiveEffects = au, pt.flushSyncFromReconciler = function(a) {
        var n = jt;
        jt |= 1;
        var i = ke.T, o = Xu();
        try {
          if (cn(2), ke.T = null, a)
            return a();
        } finally {
          cn(o), ke.T = i, jt = n, (jt & 6) === 0 && gt(0);
        }
      }, pt.flushSyncWork = Pf, pt.focusWithin = function(a, n) {
        if (!Ei) throw Error(p(363));
        for (a = nr(a), n = ir(a, n), n = Array.from(n), a = 0; a < n.length; ) {
          var i = n[a++], o = i.tag;
          if (!Vs(i)) {
            if ((o === 5 || o === 26 || o === 27) && tp(i.stateNode))
              return !0;
            for (i = i.child; i !== null; )
              n.push(i), i = i.sibling;
          }
        }
        return !1;
      }, pt.getFindAllNodesFailureDescription = function(a, n) {
        if (!Ei) throw Error(p(363));
        var i = 0, o = [];
        a = [nr(a), 0];
        for (var h = 0; h < a.length; ) {
          var y = a[h++], b = y.tag, z = a[h++], I = n[z];
          if ((b !== 5 && b !== 26 && b !== 27 || !Vs(y)) && (lr(y, I) && (o.push(ur(I)), z++, z > i && (i = z)), z < n.length))
            for (y = y.child; y !== null; )
              a.push(y, z), y = y.sibling;
        }
        if (i < n.length) {
          for (a = []; i < n.length; i++)
            a.push(ur(n[i]));
          return `findAllNodes was able to match part of the selector:
  ` + (o.join(" > ") + `

No matching component was found for:
  `) + a.join(" > ");
        }
        return null;
      }, pt.getPublicRootInstance = function(a) {
        if (a = a.current, !a.child) return null;
        switch (a.child.tag) {
          case 27:
          case 5:
            return Qs(a.child.stateNode);
          default:
            return a.child.stateNode;
        }
      }, pt.injectIntoDevTools = function() {
        var a = {
          bundleType: 0,
          version: Im,
          rendererPackageName: Nh,
          currentDispatcherRef: ke,
          findFiberByHostInstance: Ed,
          reconcilerVersion: "19.0.0"
        };
        if (Nl !== null && (a.rendererConfig = Nl), typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") a = !1;
        else {
          var n = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (n.isDisabled || !n.supportsFiber) a = !0;
          else {
            try {
              es = n.inject(a), Ln = n;
            } catch {
            }
            a = !!n.checkDCE;
          }
        }
        return a;
      }, pt.isAlreadyRendering = function() {
        return !1;
      }, pt.observeVisibleRects = function(a, n, i, o) {
        if (!Ei) throw Error(p(363));
        a = Gc(a, n);
        var h = Td(
          a,
          i,
          o
        ).disconnect;
        return {
          disconnect: function() {
            h();
          }
        };
      }, pt.shouldError = function() {
        return null;
      }, pt.shouldSuspend = function() {
        return !1;
      }, pt.startHostTransition = function(a, n, i, o) {
        if (a.tag !== 5) throw Error(p(476));
        var h = gc(a).queue;
        Ga(
          a,
          h,
          n,
          Pi,
          i === null ? f : function() {
            var y = gc(a).next.queue;
            return _s(
              a,
              y,
              {},
              yn()
            ), i(o);
          }
        );
      }, pt.updateContainer = function(a, n, i, o) {
        var h = n.current, y = yn();
        return hr(
          h,
          y,
          a,
          n,
          i,
          o
        ), y;
      }, pt.updateContainerSync = function(a, n, i, o) {
        return n.tag === 0 && au(), hr(
          n.current,
          2,
          a,
          n,
          i,
          o
        ), 2;
      }, pt;
    }, d.exports.default = d.exports, Object.defineProperty(d.exports, "__esModule", { value: !0 });
  }(Jv)), Jv.exports;
}
var Qv = { exports: {} };
/**
 * @license React
 * react-reconciler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vE;
function S1() {
  return vE || (vE = 1, function(d) {
    process.env.NODE_ENV !== "production" && (d.exports = function(u) {
      function r(e, t) {
        for (e = e.memoizedState; e !== null && 0 < t; )
          e = e.next, t--;
        return e;
      }
      function f(e, t, l, s) {
        if (l >= t.length) return s;
        var c = t[l], m = La(e) ? e.slice() : Fa({}, e);
        return m[c] = f(e[c], t, l + 1, s), m;
      }
      function p(e, t, l) {
        if (t.length !== l.length)
          console.warn("copyWithRename() expects paths of the same length");
        else {
          for (var s = 0; s < l.length - 1; s++)
            if (t[s] !== l[s]) {
              console.warn(
                "copyWithRename() expects paths to be the same except for the deepest key"
              );
              return;
            }
          return v(e, t, l, 0);
        }
      }
      function v(e, t, l, s) {
        var c = t[s], m = La(e) ? e.slice() : Fa({}, e);
        return s + 1 === t.length ? (m[l[s]] = m[c], La(m) ? m.splice(c, 1) : delete m[c]) : m[c] = v(
          e[c],
          t,
          l,
          s + 1
        ), m;
      }
      function A(e, t, l) {
        var s = t[l], c = La(e) ? e.slice() : Fa({}, e);
        return l + 1 === t.length ? (La(c) ? c.splice(s, 1) : delete c[s], c) : (c[s] = A(e[s], t, l + 1), c);
      }
      function B() {
        return !1;
      }
      function E() {
        return null;
      }
      function C(e, t, l, s) {
        return new Xh(e, t, l, s);
      }
      function R(e, t) {
        e.context === Sl && (Dr(t, e, null, null), Ei());
      }
      function T(e, t) {
        if (Bu !== null) {
          var l = t.staleFamilies;
          t = t.updatedFamilies, Si(), Hd(
            e.current,
            t,
            l
          ), Ei();
        }
      }
      function M(e) {
        Bu = e;
      }
      function O() {
        console.error(
          "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
        );
      }
      function U() {
        console.error(
          "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
        );
      }
      function V() {
      }
      function P() {
      }
      function G(e) {
        var t = [];
        return e.forEach(function(l) {
          t.push(l);
        }), t.sort().join(", ");
      }
      function N(e) {
        return e === null || typeof e != "object" ? null : (e = qc && e[qc] || e["@@iterator"], typeof e == "function" ? e : null);
      }
      function $(e) {
        if (e == null) return null;
        if (typeof e == "function")
          return e.$$typeof === Jd ? null : e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
          case $i:
            return "Fragment";
          case ra:
            return "Portal";
          case Ld:
            return "Profiler";
          case Hr:
            return "StrictMode";
          case Ci:
            return "Suspense";
          case Sn:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (typeof e.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), e.$$typeof) {
            case Gl:
              return (e.displayName || "Context") + ".Provider";
            case Or:
              return (e._context.displayName || "Context") + ".Consumer";
            case uu:
              var t = e.render;
              return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case Ur:
              return t = e.displayName || null, t !== null ? t : $(e.type) || "Memo";
            case Wn:
              t = e._payload, e = e._init;
              try {
                return $(e(t));
              } catch {
              }
          }
        return null;
      }
      function Z(e) {
        var t = e.type;
        switch (e.tag) {
          case 24:
            return "Cache";
          case 9:
            return (t._context.displayName || "Context") + ".Consumer";
          case 10:
            return (t.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 26:
          case 27:
          case 5:
            return t;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return $(t);
          case 8:
            return t === Hr ? "StrictMode" : "Mode";
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 14:
          case 15:
            if (typeof t == "function")
              return t.displayName || t.name || null;
            if (typeof t == "string") return t;
            break;
          case 29:
            if (t = e._debugInfo, t != null) {
              for (var l = t.length - 1; 0 <= l; l--)
                if (typeof t[l].name == "string") return t[l].name;
            }
            if (e.return !== null)
              return Z(e.return);
        }
        return null;
      }
      function ce() {
      }
      function W() {
        if (Fc === 0) {
          vl = console.log, Kd = console.info, Ep = console.warn, Gr = console.error, Sp = console.group, Bp = console.groupCollapsed, gp = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Fc++;
      }
      function Ce() {
        if (Fc--, Fc === 0) {
          var e = { configurable: !0, enumerable: !0, writable: !0 };
          Object.defineProperties(console, {
            log: Fa({}, e, { value: vl }),
            info: Fa({}, e, { value: Kd }),
            warn: Fa({}, e, { value: Ep }),
            error: Fa({}, e, { value: Gr }),
            group: Fa({}, e, { value: Sp }),
            groupCollapsed: Fa({}, e, { value: Bp }),
            groupEnd: Fa({}, e, { value: gp })
          });
        }
        0 > Fc && console.error(
          "disabledDepth fell below zero. This is a bug in React. Please file an issue."
        );
      }
      function ne(e) {
        if (es === void 0)
          try {
            throw Error();
          } catch (l) {
            var t = l.stack.trim().match(/\n( *(at )?)/);
            es = t && t[1] || "", Ln = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
          }
        return `
` + es + e + Ln;
      }
      function se(e, t) {
        if (!e || Bn) return "";
        var l = zr.get(e);
        if (l !== void 0) return l;
        Bn = !0, l = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
        var s = null;
        s = le.H, le.H = null, W();
        try {
          var c = {
            DetermineComponentFrameRoot: function() {
              try {
                if (t) {
                  var Je = function() {
                    throw Error();
                  };
                  if (Object.defineProperty(Je.prototype, "props", {
                    set: function() {
                      throw Error();
                    }
                  }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                      Reflect.construct(Je, []);
                    } catch (Lt) {
                      var Et = Lt;
                    }
                    Reflect.construct(e, [], Je);
                  } else {
                    try {
                      Je.call();
                    } catch (Lt) {
                      Et = Lt;
                    }
                    e.call(Je.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (Lt) {
                    Et = Lt;
                  }
                  (Je = e()) && typeof Je.catch == "function" && Je.catch(function() {
                  });
                }
              } catch (Lt) {
                if (Lt && Et && typeof Lt.stack == "string")
                  return [Lt.stack, Et.stack];
              }
              return [null, null];
            }
          };
          c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
          var m = Object.getOwnPropertyDescriptor(
            c.DetermineComponentFrameRoot,
            "name"
          );
          m && m.configurable && Object.defineProperty(
            c.DetermineComponentFrameRoot,
            "name",
            { value: "DetermineComponentFrameRoot" }
          );
          var S = c.DetermineComponentFrameRoot(), _ = S[0], j = S[1];
          if (_ && j) {
            var ae = _.split(`
`), Re = j.split(`
`);
            for (S = m = 0; m < ae.length && !ae[m].includes(
              "DetermineComponentFrameRoot"
            ); )
              m++;
            for (; S < Re.length && !Re[S].includes(
              "DetermineComponentFrameRoot"
            ); )
              S++;
            if (m === ae.length || S === Re.length)
              for (m = ae.length - 1, S = Re.length - 1; 1 <= m && 0 <= S && ae[m] !== Re[S]; )
                S--;
            for (; 1 <= m && 0 <= S; m--, S--)
              if (ae[m] !== Re[S]) {
                if (m !== 1 || S !== 1)
                  do
                    if (m--, S--, 0 > S || ae[m] !== Re[S]) {
                      var Ue = `
` + ae[m].replace(
                        " at new ",
                        " at "
                      );
                      return e.displayName && Ue.includes("<anonymous>") && (Ue = Ue.replace("<anonymous>", e.displayName)), typeof e == "function" && zr.set(e, Ue), Ue;
                    }
                  while (1 <= m && 0 <= S);
                break;
              }
          }
        } finally {
          Bn = !1, le.H = s, Ce(), Error.prepareStackTrace = l;
        }
        return ae = (ae = e ? e.displayName || e.name : "") ? ne(ae) : "", typeof e == "function" && zr.set(e, ae), ae;
      }
      function fe(e) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            return ne(e.type);
          case 16:
            return ne("Lazy");
          case 13:
            return ne("Suspense");
          case 19:
            return ne("SuspenseList");
          case 0:
          case 15:
            return e = se(e.type, !1), e;
          case 11:
            return e = se(e.type.render, !1), e;
          case 1:
            return e = se(e.type, !0), e;
          default:
            return "";
        }
      }
      function He(e) {
        try {
          var t = "";
          do {
            t += fe(e);
            var l = e._debugInfo;
            if (l)
              for (var s = l.length - 1; 0 <= s; s--) {
                var c = l[s];
                if (typeof c.name == "string") {
                  var m = t, S = c.env, _ = ne(
                    c.name + (S ? " [" + S + "]" : "")
                  );
                  t = m + _;
                }
              }
            e = e.return;
          } while (e);
          return t;
        } catch (j) {
          return `
Error generating stack: ` + j.message + `
` + j.stack;
        }
      }
      function Xe() {
        return Ia === null ? "" : He(Ia);
      }
      function ee(e, t, l, s, c, m, S) {
        var _ = Ia;
        le.getCurrentStack = e === null ? null : Xe, wa = !1, Ia = e;
        try {
          return t(l, s, c, m, S);
        } finally {
          Ia = _;
        }
        throw Error(
          "runWithFiberInDEV should never be called in production. This is a bug in React."
        );
      }
      function Te(e) {
        var t = e, l = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
          e = t;
          do
            t = e, (t.flags & 4098) !== 0 && (l = t.return), e = t.return;
          while (e);
        }
        return t.tag === 3 ? l : null;
      }
      function Ve(e) {
        if (Te(e) !== e)
          throw Error("Unable to find node on an unmounted component.");
      }
      function D(e) {
        var t = e.alternate;
        if (!t) {
          if (t = Te(e), t === null)
            throw Error("Unable to find node on an unmounted component.");
          return t !== e ? null : e;
        }
        for (var l = e, s = t; ; ) {
          var c = l.return;
          if (c === null) break;
          var m = c.alternate;
          if (m === null) {
            if (s = c.return, s !== null) {
              l = s;
              continue;
            }
            break;
          }
          if (c.child === m.child) {
            for (m = c.child; m; ) {
              if (m === l) return Ve(c), e;
              if (m === s) return Ve(c), t;
              m = m.sibling;
            }
            throw Error("Unable to find node on an unmounted component.");
          }
          if (l.return !== s.return) l = c, s = m;
          else {
            for (var S = !1, _ = c.child; _; ) {
              if (_ === l) {
                S = !0, l = c, s = m;
                break;
              }
              if (_ === s) {
                S = !0, s = c, l = m;
                break;
              }
              _ = _.sibling;
            }
            if (!S) {
              for (_ = m.child; _; ) {
                if (_ === l) {
                  S = !0, l = m, s = c;
                  break;
                }
                if (_ === s) {
                  S = !0, s = m, l = c;
                  break;
                }
                _ = _.sibling;
              }
              if (!S)
                throw Error(
                  "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
                );
            }
          }
          if (l.alternate !== s)
            throw Error(
              "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
            );
        }
        if (l.tag !== 3)
          throw Error("Unable to find node on an unmounted component.");
        return l.stateNode.current === l ? e : t;
      }
      function Q(e) {
        return e = D(e), e !== null ? X(e) : null;
      }
      function X(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e;
        for (e = e.child; e !== null; ) {
          if (t = X(e), t !== null) return t;
          e = e.sibling;
        }
        return null;
      }
      function re(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e;
        for (e = e.child; e !== null; ) {
          if (e.tag !== 4 && (t = re(e), t !== null))
            return t;
          e = e.sibling;
        }
        return null;
      }
      function x(e) {
        return { current: e };
      }
      function me(e, t) {
        0 > Cn ? console.error("Unexpected pop.") : (t !== ac[Cn] && console.error("Unexpected Fiber popped."), e.current = pu[Cn], pu[Cn] = null, ac[Cn] = null, Cn--);
      }
      function de(e, t, l) {
        Cn++, pu[Cn] = e.current, ac[Cn] = l, e.current = t;
      }
      function Ke(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (kd(e) / lo | 0) | 0;
      }
      function Ne(e) {
        if (e & 1) return "SyncHydrationLane";
        if (e & 2) return "Sync";
        if (e & 4) return "InputContinuousHydration";
        if (e & 8) return "InputContinuous";
        if (e & 16) return "DefaultHydration";
        if (e & 32) return "Default";
        if (e & 64) return "TransitionHydration";
        if (e & 4194176) return "Transition";
        if (e & 62914560) return "Retry";
        if (e & 67108864) return "SelectiveHydration";
        if (e & 134217728) return "IdleHydration";
        if (e & 268435456) return "Idle";
        if (e & 536870912) return "Offscreen";
        if (e & 1073741824) return "Deferred";
      }
      function Ie(e) {
        var t = e & 42;
        if (t !== 0) return t;
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
            return 64;
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
            return e & 4194176;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            return e & 62914560;
          case 67108864:
            return 67108864;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 0;
          default:
            return console.error(
              "Should have found matching lanes. This is a bug in React."
            ), e;
        }
      }
      function tt(e, t) {
        var l = e.pendingLanes;
        if (l === 0) return 0;
        var s = 0, c = e.suspendedLanes, m = e.pingedLanes, S = e.warmLanes;
        e = e.finishedLanes !== 0;
        var _ = l & 134217727;
        return _ !== 0 ? (l = _ & ~c, l !== 0 ? s = Ie(l) : (m &= _, m !== 0 ? s = Ie(m) : e || (S = _ & ~S, S !== 0 && (s = Ie(S))))) : (_ = l & ~c, _ !== 0 ? s = Ie(_) : m !== 0 ? s = Ie(m) : e || (S = l & ~S, S !== 0 && (s = Ie(S)))), s === 0 ? 0 : t !== 0 && t !== s && (t & c) === 0 && (c = s & -s, S = t & -t, c >= S || c === 32 && (S & 4194176) !== 0) ? t : s;
      }
      function $t(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
      }
      function vt(e, t) {
        switch (e) {
          case 1:
          case 2:
          case 4:
          case 8:
            return t + 250;
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
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            return -1;
          case 67108864:
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return console.error(
              "Should have found matching lanes. This is a bug in React."
            ), -1;
        }
      }
      function bn() {
        var e = nc;
        return nc <<= 1, (nc & 4194176) === 0 && (nc = 128), e;
      }
      function Tl() {
        var e = a;
        return a <<= 1, (a & 62914560) === 0 && (a = 4194304), e;
      }
      function Dn(e) {
        for (var t = [], l = 0; 31 > l; l++) t.push(e);
        return t;
      }
      function _n(e, t) {
        e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
      }
      function Rl(e, t, l, s, c, m) {
        var S = e.pendingLanes;
        e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
        var _ = e.entanglements, j = e.expirationTimes, ae = e.hiddenUpdates;
        for (l = S & ~l; 0 < l; ) {
          var Re = 31 - ka(l), Ue = 1 << Re;
          _[Re] = 0, j[Re] = -1;
          var Je = ae[Re];
          if (Je !== null)
            for (ae[Re] = null, Re = 0; Re < Je.length; Re++) {
              var Et = Je[Re];
              Et !== null && (Et.lane &= -536870913);
            }
          l &= ~Ue;
        }
        s !== 0 && Ml(e, s, 0), m !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= m & ~(S & ~t));
      }
      function Ml(e, t, l) {
        e.pendingLanes |= t, e.suspendedLanes &= ~t;
        var s = 31 - ka(t);
        e.entangledLanes |= t, e.entanglements[s] = e.entanglements[s] | 1073741824 | l & 4194218;
      }
      function Vl(e, t) {
        var l = e.entangledLanes |= t;
        for (e = e.entanglements; l; ) {
          var s = 31 - ka(l), c = 1 << s;
          c & t | e[s] & t && (e[s] |= t), l &= ~c;
        }
      }
      function ni(e, t, l) {
        if ($a)
          for (e = e.pendingUpdatersLaneMap; 0 < l; ) {
            var s = 31 - ka(l), c = 1 << s;
            e[s].add(t), l &= ~c;
          }
      }
      function Hn(e, t) {
        if ($a)
          for (var l = e.pendingUpdatersLaneMap, s = e.memoizedUpdaters; 0 < t; ) {
            var c = 31 - ka(t);
            e = 1 << c, c = l[c], 0 < c.size && (c.forEach(function(m) {
              var S = m.alternate;
              S !== null && s.has(S) || s.add(m);
            }), c.clear()), t &= ~e;
          }
      }
      function li(e) {
        return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
      }
      function Mu(e) {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
        var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (t.isDisabled) return !0;
        if (!t.supportsFiber)
          return console.error(
            "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
          ), !0;
        try {
          Ge = t.inject(e), Fe = t;
        } catch (l) {
          console.error("React instrumentation encountered an error: %s.", l);
        }
        return !!t.checkDCE;
      }
      function On(e, t) {
        if (Fe && typeof Fe.onCommitFiberRoot == "function")
          try {
            var l = (e.current.flags & 128) === 128;
            switch (t) {
              case 2:
                var s = b;
                break;
              case 8:
                s = z;
                break;
              case 32:
                s = I;
                break;
              case 268435456:
                s = pe;
                break;
              default:
                s = I;
            }
            Fe.onCommitFiberRoot(
              Ge,
              e,
              s,
              l
            );
          } catch (c) {
            Kn || (Kn = !0, console.error(
              "React instrumentation encountered an error: %s",
              c
            ));
          }
      }
      function gt(e) {
        if (typeof _e == "function" && Le(e), Fe && typeof Fe.setStrictMode == "function")
          try {
            Fe.setStrictMode(Ge, e);
          } catch (t) {
            Kn || (Kn = !0, console.error(
              "React instrumentation encountered an error: %s",
              t
            ));
          }
      }
      function Cs(e) {
        Oe = e;
      }
      function Zl() {
        Oe !== null && typeof Oe.markCommitStopped == "function" && Oe.markCommitStopped();
      }
      function Un(e) {
        Oe !== null && typeof Oe.markComponentRenderStarted == "function" && Oe.markComponentRenderStarted(e);
      }
      function Qn() {
        Oe !== null && typeof Oe.markComponentRenderStopped == "function" && Oe.markComponentRenderStopped();
      }
      function Ts(e) {
        Oe !== null && typeof Oe.markRenderStarted == "function" && Oe.markRenderStarted(e);
      }
      function bu() {
        Oe !== null && typeof Oe.markRenderStopped == "function" && Oe.markRenderStopped();
      }
      function il(e, t) {
        Oe !== null && typeof Oe.markStateUpdateScheduled == "function" && Oe.markStateUpdateScheduled(e, t);
      }
      function Du(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
      }
      function Ya(e, t) {
        if (typeof e == "object" && e !== null) {
          var l = F.get(e);
          return l !== void 0 ? l : (t = {
            value: e,
            source: t,
            stack: He(t)
          }, F.set(e, t), t);
        }
        return {
          value: e,
          source: t,
          stack: He(t)
        };
      }
      function Nn(e, t) {
        Ua(), te[ge++] = Yt, te[ge++] = Ze, Ze = e, Yt = t;
      }
      function ui(e, t, l) {
        Ua(), qe[it++] = ot, qe[it++] = fn, qe[it++] = ea, ea = e;
        var s = ot;
        e = fn;
        var c = 32 - ka(s) - 1;
        s &= ~(1 << c), l += 1;
        var m = 32 - ka(t) + c;
        if (30 < m) {
          var S = c - c % 5;
          m = (s & (1 << S) - 1).toString(32), s >>= S, c -= S, ot = 1 << 32 - ka(t) + c | l << c | s, fn = m + e;
        } else
          ot = 1 << m | l << c | s, fn = e;
      }
      function Oa(e) {
        Ua(), e.return !== null && (Nn(e, 1), ui(e, 1, 0));
      }
      function Jt(e) {
        for (; e === Ze; )
          Ze = te[--ge], te[ge] = null, Yt = te[--ge], te[ge] = null;
        for (; e === ea; )
          ea = qe[--it], qe[it] = null, fn = qe[--it], qe[it] = null, ot = qe[--it], qe[it] = null;
      }
      function Ua() {
        Tt || console.error(
          "Expected to be hydrating. This is a bug in React. Please file an issue."
        );
      }
      function Y(e) {
        return e === null && console.error(
          "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
        ), e;
      }
      function Ae(e, t) {
        de(lc, t, e), de($d, e, e), de(Hi, null, e), t = qu(t), me(Hi, e), de(Hi, t, e);
      }
      function ze(e) {
        me(Hi, e), me($d, e), me(lc, e);
      }
      function et() {
        return Y(Hi.current);
      }
      function be(e) {
        e.memoizedState !== null && de(_p, e, e);
        var t = Y(Hi.current), l = Fu(t, e.type);
        t !== l && (de($d, e, e), de(Hi, l, e));
      }
      function aa(e) {
        $d.current === e && (me(Hi, e), me($d, e)), _p.current === e && (me(_p, e), Ea ? wu._currentValue = cu : wu._currentValue2 = cu);
      }
      function Gn(e, t) {
        return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Gn(e.children[0], t) : e;
      }
      function ba(e) {
        return "  " + "  ".repeat(e);
      }
      function sl(e) {
        return "+ " + "  ".repeat(e);
      }
      function ya(e) {
        return "- " + "  ".repeat(e);
      }
      function Xa(e) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            return e.type;
          case 16:
            return "Lazy";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 0:
          case 15:
            return e = e.type, e.displayName || e.name || null;
          case 11:
            return e = e.type.render, e.displayName || e.name || null;
          case 1:
            return e = e.type, e.displayName || e.name || null;
          default:
            return null;
        }
      }
      function Va(e, t) {
        return zy.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
      }
      function pn(e, t, l) {
        var s = 120 - 2 * l;
        if (t === null)
          return sl(l) + Va(e, s) + `
`;
        if (typeof t == "string") {
          for (var c = 0; c < t.length && c < e.length && t.charCodeAt(c) === e.charCodeAt(c); c++) ;
          return c > s - 8 && 10 < c && (e = "..." + e.slice(c - 8), t = "..." + t.slice(c - 8)), sl(l) + Va(e, s) + `
` + ya(l) + Va(t, s) + `
`;
        }
        return ba(l) + Va(e, s) + `
`;
      }
      function cl(e) {
        return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, l) {
          return l;
        });
      }
      function Yn(e, t) {
        switch (typeof e) {
          case "string":
            return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
          case "object":
            if (e === null) return "null";
            if (La(e)) return "[...]";
            if (e.$$typeof === ki)
              return (t = $(e.type)) ? "<" + t + ">" : "<...>";
            var l = cl(e);
            if (l === "Object") {
              l = "", t -= 2;
              for (var s in e)
                if (e.hasOwnProperty(s)) {
                  var c = JSON.stringify(s);
                  if (c !== '"' + s + '"' && (s = c), t -= s.length - 2, c = Yn(
                    e[s],
                    15 > t ? t : 15
                  ), t -= c.length, 0 > t) {
                    l += l === "" ? "..." : ", ...";
                    break;
                  }
                  l += (l === "" ? "" : ",") + s + ":" + c;
                }
              return "{" + l + "}";
            }
            return l;
          case "function":
            return (t = e.displayName || e.name) ? "function " + t : "function";
          default:
            return String(e);
        }
      }
      function _u(e, t) {
        return typeof e != "string" || zy.test(e) ? "{" + Yn(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
      }
      function Ji(e, t, l) {
        var s = 120 - l.length - e.length, c = [], m;
        for (m in t)
          if (t.hasOwnProperty(m) && m !== "children") {
            var S = _u(
              t[m],
              120 - l.length - m.length - 1
            );
            s -= m.length + S.length + 2, c.push(m + "=" + S);
          }
        return c.length === 0 ? l + "<" + e + `>
` : 0 < s ? l + "<" + e + " " + c.join(" ") + `>
` : l + "<" + e + `
` + l + "  " + c.join(`
` + l + "  ") + `
` + l + `>
`;
      }
      function ii(e, t, l) {
        var s = "", c = Fa({}, t), m;
        for (m in e)
          if (e.hasOwnProperty(m)) {
            delete c[m];
            var S = 120 - 2 * l - m.length - 2, _ = Yn(e[m], S);
            t.hasOwnProperty(m) ? (S = Yn(t[m], S), s += sl(l) + m + ": " + _ + `
`, s += ya(l) + m + ": " + S + `
`) : s += sl(l) + m + ": " + _ + `
`;
          }
        for (var j in c)
          c.hasOwnProperty(j) && (e = Yn(
            c[j],
            120 - 2 * l - j.length - 2
          ), s += ya(l) + j + ": " + e + `
`);
        return s;
      }
      function ql(e, t, l, s) {
        var c = "", m = /* @__PURE__ */ new Map();
        for (ae in l)
          l.hasOwnProperty(ae) && m.set(
            ae.toLowerCase(),
            ae
          );
        if (m.size === 1 && m.has("children"))
          c += Ji(
            e,
            t,
            ba(s)
          );
        else {
          for (var S in t)
            if (t.hasOwnProperty(S) && S !== "children") {
              var _ = 120 - 2 * (s + 1) - S.length - 1, j = m.get(S.toLowerCase());
              if (j !== void 0) {
                m.delete(S.toLowerCase());
                var ae = t[S];
                j = l[j];
                var Re = _u(
                  ae,
                  _
                );
                _ = _u(
                  j,
                  _
                ), typeof ae == "object" && ae !== null && typeof j == "object" && j !== null && cl(ae) === "Object" && cl(j) === "Object" && (2 < Object.keys(ae).length || 2 < Object.keys(j).length || -1 < Re.indexOf("...") || -1 < _.indexOf("...")) ? c += ba(s + 1) + S + `={{
` + ii(
                  ae,
                  j,
                  s + 2
                ) + ba(s + 1) + `}}
` : (c += sl(s + 1) + S + "=" + Re + `
`, c += ya(s + 1) + S + "=" + _ + `
`);
              } else
                c += ba(s + 1) + S + "=" + _u(t[S], _) + `
`;
            }
          m.forEach(function(Ue) {
            if (Ue !== "children") {
              var Je = 120 - 2 * (s + 1) - Ue.length - 1;
              c += ya(s + 1) + Ue + "=" + _u(l[Ue], Je) + `
`;
            }
          }), c = c === "" ? ba(s) + "<" + e + `>
` : ba(s) + "<" + e + `
` + c + ba(s) + `>
`;
        }
        return e = l.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (m = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (m = "" + t), c += pn(m, "" + e, s + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (c = e == null ? c + pn("" + t, null, s + 1) : c + pn("" + t, void 0, s + 1)), c;
      }
      function Hu(e, t) {
        var l = Xa(e);
        if (l === null) {
          for (l = "", e = e.child; e; )
            l += Hu(e, t), e = e.sibling;
          return l;
        }
        return ba(t) + "<" + l + `>
`;
      }
      function an(e, t) {
        var l = Gn(e, t);
        if (l !== e && (e.children.length !== 1 || e.children[0] !== l))
          return ba(t) + `...
` + an(l, t + 1);
        l = "";
        var s = e.fiber._debugInfo;
        if (s)
          for (var c = 0; c < s.length; c++) {
            var m = s[c].name;
            typeof m == "string" && (l += ba(t) + "<" + m + `>
`, t++);
          }
        if (s = "", c = e.fiber.pendingProps, e.fiber.tag === 6)
          s = pn(c, e.serverProps, t), t++;
        else if (m = Xa(e.fiber), m !== null)
          if (e.serverProps === void 0) {
            s = t;
            var S = 120 - 2 * s - m.length - 2, _ = "";
            for (ae in c)
              if (c.hasOwnProperty(ae) && ae !== "children") {
                var j = _u(c[ae], 15);
                if (S -= ae.length + j.length + 2, 0 > S) {
                  _ += " ...";
                  break;
                }
                _ += " " + ae + "=" + j;
              }
            s = ba(s) + "<" + m + _ + `>
`, t++;
          } else
            e.serverProps === null ? (s = Ji(
              m,
              c,
              sl(t)
            ), t++) : typeof e.serverProps == "string" ? console.error(
              "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
            ) : (s = ql(
              m,
              c,
              e.serverProps,
              t
            ), t++);
        var ae = "";
        for (c = e.fiber.child, m = 0; c && m < e.children.length; )
          S = e.children[m], S.fiber === c ? (ae += an(S, t), m++) : ae += Hu(c, t), c = c.sibling;
        for (c && 0 < e.children.length && (ae += ba(t) + `...
`), c = e.serverTail, e.serverProps === null && t--, e = 0; e < c.length; e++)
          m = c[e], ae = typeof m == "string" ? ae + (ya(t) + Va(m, 120 - 2 * t) + `
`) : ae + Ji(
            m.type,
            m.props,
            ya(t)
          );
        return l + s + ae;
      }
      function $e(e) {
        try {
          return `

` + an(e, 0);
        } catch {
          return "";
        }
      }
      function Xn(e, t) {
        if (e.return === null) {
          if (hu === null)
            hu = {
              fiber: e,
              children: [],
              serverProps: void 0,
              serverTail: [],
              distanceFromLeaf: t
            };
          else {
            if (hu.fiber !== e)
              throw Error(
                "Saw multiple hydration diff roots in a pass. This is a bug in React."
              );
            hu.distanceFromLeaf > t && (hu.distanceFromLeaf = t);
          }
          return hu;
        }
        var l = Xn(
          e.return,
          t + 1
        ).children;
        return 0 < l.length && l[l.length - 1].fiber === e ? (l = l[l.length - 1], l.distanceFromLeaf > t && (l.distanceFromLeaf = t), l) : (t = {
          fiber: e,
          children: [],
          serverProps: void 0,
          serverTail: [],
          distanceFromLeaf: t
        }, l.push(t), t);
      }
      function It(e, t) {
        os || (e = Xn(e, 0), e.serverProps = null, t !== null && (t = Dp(t), e.serverTail.push(t)));
      }
      function g(e) {
        var t = "", l = hu;
        throw l !== null && (hu = null, t = $e(l)), ie(
          Ya(
            Error(
              `Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + t
            ),
            e
          )
        ), kh;
      }
      function H(e, t) {
        if (!gn)
          throw Error(
            "Expected prepareToHydrateHostInstance() to never be called. This error is likely caused by a bug in React. Please file an issue."
          );
        Ba(
          e.stateNode,
          e.type,
          e.memoizedProps,
          t,
          e
        ) || g(e);
      }
      function L(e) {
        for (tl = e.return; tl; )
          switch (tl.tag) {
            case 3:
            case 27:
              Oi = !0;
              return;
            case 5:
            case 13:
              Oi = !1;
              return;
            default:
              tl = tl.return;
          }
      }
      function k(e) {
        if (!gn || e !== tl) return !1;
        if (!Tt)
          return L(e), Tt = !0, !1;
        var t = !1;
        if (ga ? e.tag !== 3 && e.tag !== 27 && (e.tag !== 5 || eo(e.type) && !Da(e.type, e.memoizedProps)) && (t = !0) : e.tag !== 3 && (e.tag !== 5 || eo(e.type) && !Da(e.type, e.memoizedProps)) && (t = !0), t && Tn) {
          for (t = Tn; t; ) {
            var l = Xn(e, 0), s = Dp(t);
            l.serverTail.push(s), t = s.type === "Suspense" ? is(t) : Pu(t);
          }
          g(e);
        }
        if (L(e), e.tag === 13) {
          if (!gn)
            throw Error(
              "Expected skipPastDehydratedSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue."
            );
          if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
            throw Error(
              "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
            );
          Tn = is(e);
        } else
          Tn = tl ? Pu(e.stateNode) : null;
        return !0;
      }
      function oe() {
        gn && (Tn = tl = null, os = Tt = !1);
      }
      function ie(e) {
        Wu === null ? Wu = [e] : Wu.push(e);
      }
      function Me() {
        var e = hu;
        e !== null && (hu = null, e = $e(e), console.error(
          `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
          "https://react.dev/link/hydration-mismatch",
          e
        ));
      }
      function ye() {
        for (var e = qr, t = $h = qr = 0; t < e; ) {
          var l = vu[t];
          vu[t++] = null;
          var s = vu[t];
          vu[t++] = null;
          var c = vu[t];
          vu[t++] = null;
          var m = vu[t];
          if (vu[t++] = null, s !== null && c !== null) {
            var S = s.pending;
            S === null ? c.next = c : (c.next = S.next, S.next = c), s.pending = c;
          }
          m !== 0 && De(l, c, m);
        }
      }
      function Se(e, t, l, s) {
        vu[qr++] = e, vu[qr++] = t, vu[qr++] = l, vu[qr++] = s, $h |= s, e.lanes |= s, e = e.alternate, e !== null && (e.lanes |= s);
      }
      function ve(e, t, l, s) {
        return Se(e, t, l, s), Nt(e);
      }
      function Ee(e, t) {
        return Se(e, null, null, t), Nt(e);
      }
      function De(e, t, l) {
        e.lanes |= l;
        var s = e.alternate;
        s !== null && (s.lanes |= l);
        for (var c = !1, m = e.return; m !== null; )
          m.childLanes |= l, s = m.alternate, s !== null && (s.childLanes |= l), m.tag === 22 && (e = m.stateNode, e === null || e._visibility & 1 || (c = !0)), e = m, m = m.return;
        c && t !== null && e.tag === 3 && (m = e.stateNode, c = 31 - ka(l), m = m.hiddenUpdates, e = m[c], e === null ? m[c] = [t] : e.push(t), t.lane = l | 536870912);
      }
      function Nt(e) {
        if (Sm > k0)
          throw Ao = Sm = 0, Bm = Hv = null, Error(
            "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
          );
        Ao > $0 && (Ao = 0, Bm = null, console.error(
          "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
        )), e.alternate === null && (e.flags & 4098) !== 0 && rp(e);
        for (var t = e, l = t.return; l !== null; )
          t.alternate === null && (t.flags & 4098) !== 0 && rp(e), t = l, l = t.return;
        return t.tag === 3 ? t.stateNode : null;
      }
      function xe() {
        var e = uo;
        return uo = 0, e;
      }
      function Ye(e) {
        var t = uo;
        return uo = e, t;
      }
      function we(e) {
        var t = uo;
        return uo += e, t;
      }
      function at(e) {
        Bl = Fr(), 0 > e.actualStartTime && (e.actualStartTime = Bl);
      }
      function Mt(e) {
        if (0 <= Bl) {
          var t = Fr() - Bl;
          e.actualDuration += t, e.selfBaseDuration = t, Bl = -1;
        }
      }
      function Gt(e) {
        if (0 <= Bl) {
          var t = Fr() - Bl;
          e.actualDuration += t, Bl = -1;
        }
      }
      function Ht() {
        if (0 <= Bl) {
          var e = Fr() - Bl;
          Bl = -1, uo += e;
        }
      }
      function Vt() {
        Bl = Fr();
      }
      function bt(e) {
        for (var t = e.child; t; )
          e.actualDuration += t.actualDuration, t = t.sibling;
      }
      function sa(e) {
        e !== Ir && e.next === null && (Ir === null ? Np = Ir = e : Ir = Ir.next = e), Gp = !0, le.actQueue !== null ? tv || (tv = !0, pa(ca)) : ev || (ev = !0, pa(ca));
      }
      function Bt(e, t) {
        if (!av && Gp) {
          av = !0;
          do
            for (var l = !1, s = Np; s !== null; ) {
              if (e !== 0) {
                var c = s.pendingLanes;
                if (c === 0) var m = 0;
                else {
                  var S = s.suspendedLanes, _ = s.pingedLanes;
                  m = (1 << 31 - ka(42 | e) + 1) - 1, m &= c & ~(S & ~_), m = m & 201326677 ? m & 201326677 | 1 : m ? m | 2 : 0;
                }
                m !== 0 && (l = !0, nn(s, m));
              } else
                m = yt, m = tt(
                  s,
                  s === Wt ? m : 0
                ), (m & 3) === 0 || $t(s, m) || (l = !0, nn(s, m));
              s = s.next;
            }
          while (l);
          av = !1;
        }
      }
      function ca() {
        Gp = tv = ev = !1;
        var e = 0;
        wr !== 0 && (Pc() && (e = wr), wr = 0);
        for (var t = y(), l = null, s = Np; s !== null; ) {
          var c = s.next, m = ol(s, t);
          m === 0 ? (s.next = null, l === null ? Np = c : l.next = c, c === null && (Ir = l)) : (l = s, (e !== 0 || (m & 3) !== 0) && (Gp = !0)), s = c;
        }
        Bt(e);
      }
      function ol(e, t) {
        for (var l = e.suspendedLanes, s = e.pingedLanes, c = e.expirationTimes, m = e.pendingLanes & -62914561; 0 < m; ) {
          var S = 31 - ka(m), _ = 1 << S, j = c[S];
          j === -1 ? ((_ & l) === 0 || (_ & s) !== 0) && (c[S] = vt(_, t)) : j <= t && (e.expiredLanes |= _), m &= ~_;
        }
        if (t = Wt, l = yt, l = tt(
          e,
          e === t ? l : 0
        ), s = e.callbackNode, l === 0 || e === t && kt === ho || e.cancelPendingCommit !== null)
          return s !== null && Dt(s), e.callbackNode = null, e.callbackPriority = 0;
        if ((l & 3) === 0 || $t(e, l)) {
          if (t = l & -l, t !== e.callbackPriority || le.actQueue !== null && s !== nv)
            Dt(s);
          else return t;
          switch (li(l)) {
            case 2:
            case 8:
              l = z;
              break;
            case 32:
              l = I;
              break;
            case 268435456:
              l = pe;
              break;
            default:
              l = I;
          }
          return s = Ou.bind(null, e), le.actQueue !== null ? (le.actQueue.push(s), l = nv) : l = n(l, s), e.callbackPriority = t, e.callbackNode = l, t;
        }
        return s !== null && Dt(s), e.callbackPriority = 2, e.callbackNode = null, 2;
      }
      function Ou(e, t) {
        Up = Op = !1;
        var l = e.callbackNode;
        if (Si() && e.callbackNode !== l)
          return null;
        var s = yt;
        return s = tt(
          e,
          e === Wt ? s : 0
        ), s === 0 ? null : (Pi(
          e,
          s,
          t
        ), ol(e, y()), e.callbackNode != null && e.callbackNode === l ? Ou.bind(null, e) : null);
      }
      function nn(e, t) {
        if (Si()) return null;
        Op = Up, Up = !1, Pi(e, t, !0);
      }
      function Dt(e) {
        e !== nv && e !== null && i(e);
      }
      function pa(e) {
        le.actQueue !== null && le.actQueue.push(function() {
          return e(), null;
        }), Ps ? Wc(function() {
          (Xt & (jn | Gi)) !== ll ? n(b, e) : e();
        }) : n(b, e);
      }
      function xt() {
        return wr === 0 && (wr = bn()), wr;
      }
      function _t(e, t) {
        if (em === null) {
          var l = em = [];
          lv = 0, io = xt(), Pr = {
            status: "pending",
            value: void 0,
            then: function(s) {
              l.push(s);
            }
          };
        }
        return lv++, t.then(ln, ln), t;
      }
      function ln() {
        if (--lv === 0 && em !== null) {
          Pr !== null && (Pr.status = "fulfilled");
          var e = em;
          em = null, io = 0, Pr = null;
          for (var t = 0; t < e.length; t++) (0, e[t])();
        }
      }
      function Fl(e, t) {
        var l = [], s = {
          status: "pending",
          value: null,
          reason: null,
          then: function(c) {
            l.push(c);
          }
        };
        return e.then(
          function() {
            s.status = "fulfilled", s.value = t;
            for (var c = 0; c < l.length; c++) (0, l[c])(t);
          },
          function(c) {
            for (s.status = "rejected", s.reason = c, c = 0; c < l.length; c++)
              (0, l[c])(void 0);
          }
        ), s;
      }
      function Na(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null, lanes: 0, hiddenCallbacks: null },
          callbacks: null
        };
      }
      function rl(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null
        });
      }
      function Uu(e) {
        return {
          lane: e,
          tag: xy,
          payload: null,
          callback: null,
          next: null
        };
      }
      function Vn(e, t, l) {
        var s = e.updateQueue;
        if (s === null) return null;
        if (s = s.shared, iv === s && !Ky) {
          var c = Z(e);
          console.error(
            `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
            c
          ), Ky = !0;
        }
        return (Xt & jn) !== ll ? (c = s.pending, c === null ? t.next = t : (t.next = c.next, c.next = t), s.pending = t, t = Nt(e), De(e, null, l), t) : (Se(e, s, t, l), Nt(e));
      }
      function Rs(e, t, l) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194176) !== 0)) {
          var s = t.lanes;
          s &= e.pendingLanes, l |= s, t.lanes = l, Vl(e, l);
        }
      }
      function Ki(e, t) {
        var l = e.updateQueue, s = e.alternate;
        if (s !== null && (s = s.updateQueue, l === s)) {
          var c = null, m = null;
          if (l = l.firstBaseUpdate, l !== null) {
            do {
              var S = {
                lane: l.lane,
                tag: l.tag,
                payload: l.payload,
                callback: null,
                next: null
              };
              m === null ? c = m = S : m = m.next = S, l = l.next;
            } while (l !== null);
            m === null ? c = m = t : m = m.next = t;
          } else c = m = t;
          l = {
            baseState: s.baseState,
            firstBaseUpdate: c,
            lastBaseUpdate: m,
            shared: s.shared,
            callbacks: s.callbacks
          }, e.updateQueue = l;
          return;
        }
        e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t;
      }
      function si() {
        if (sv) {
          var e = Pr;
          if (e !== null) throw e;
        }
      }
      function Ms(e, t, l, s) {
        sv = !1;
        var c = e.updateQueue;
        uc = !1, iv = c.shared;
        var m = c.firstBaseUpdate, S = c.lastBaseUpdate, _ = c.shared.pending;
        if (_ !== null) {
          c.shared.pending = null;
          var j = _, ae = j.next;
          j.next = null, S === null ? m = ae : S.next = ae, S = j;
          var Re = e.alternate;
          Re !== null && (Re = Re.updateQueue, _ = Re.lastBaseUpdate, _ !== S && (_ === null ? Re.firstBaseUpdate = ae : _.next = ae, Re.lastBaseUpdate = j));
        }
        if (m !== null) {
          var Ue = c.baseState;
          S = 0, Re = ae = j = null, _ = m;
          do {
            var Je = _.lane & -536870913, Et = Je !== _.lane;
            if (Et ? (yt & Je) === Je : (s & Je) === Je) {
              Je !== 0 && Je === io && (sv = !0), Re !== null && (Re = Re.next = {
                lane: 0,
                tag: _.tag,
                payload: _.payload,
                callback: null,
                next: null
              });
              e: {
                Je = e;
                var Lt = _, vf = t, yf = l;
                switch (Lt.tag) {
                  case Ly:
                    if (Lt = Lt.payload, typeof Lt == "function") {
                      sf = !0;
                      var ti = Lt.call(
                        yf,
                        Ue,
                        vf
                      );
                      if (Je.mode & 8) {
                        gt(!0);
                        try {
                          Lt.call(yf, Ue, vf);
                        } finally {
                          gt(!1);
                        }
                      }
                      sf = !1, Ue = ti;
                      break e;
                    }
                    Ue = Lt;
                    break e;
                  case uv:
                    Je.flags = Je.flags & -65537 | 128;
                  case xy:
                    if (ti = Lt.payload, typeof ti == "function") {
                      if (sf = !0, Lt = ti.call(
                        yf,
                        Ue,
                        vf
                      ), Je.mode & 8) {
                        gt(!0);
                        try {
                          ti.call(yf, Ue, vf);
                        } finally {
                          gt(!1);
                        }
                      }
                      sf = !1;
                    } else Lt = ti;
                    if (Lt == null) break e;
                    Ue = Fa({}, Ue, Lt);
                    break e;
                  case Jy:
                    uc = !0;
                }
              }
              Je = _.callback, Je !== null && (e.flags |= 64, Et && (e.flags |= 8192), Et = c.callbacks, Et === null ? c.callbacks = [Je] : Et.push(Je));
            } else
              Et = {
                lane: Je,
                tag: _.tag,
                payload: _.payload,
                callback: _.callback,
                next: null
              }, Re === null ? (ae = Re = Et, j = Ue) : Re = Re.next = Et, S |= Je;
            if (_ = _.next, _ === null) {
              if (_ = c.shared.pending, _ === null)
                break;
              Et = _, _ = Et.next, Et.next = null, c.lastBaseUpdate = Et, c.shared.pending = null;
            }
          } while (!0);
          Re === null && (j = Ue), c.baseState = j, c.firstBaseUpdate = ae, c.lastBaseUpdate = Re, m === null && (c.shared.lanes = 0), fc |= S, e.lanes = S, e.memoizedState = Ue;
        }
        iv = null;
      }
      function To(e, t) {
        if (typeof e != "function")
          throw Error(
            "Invalid argument passed as callback. Expected a function. Instead received: " + e
          );
        e.call(t);
      }
      function Jm(e, t) {
        var l = e.shared.hiddenCallbacks;
        if (l !== null)
          for (e.shared.hiddenCallbacks = null, e = 0; e < l.length; e++)
            To(l[e], t);
      }
      function _f(e, t) {
        var l = e.callbacks;
        if (l !== null)
          for (e.callbacks = null, e = 0; e < l.length; e++)
            To(l[e], t);
      }
      function Sc(e, t) {
        if (w(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
          return !1;
        var l = Object.keys(e), s = Object.keys(t);
        if (l.length !== s.length) return !1;
        for (s = 0; s < l.length; s++) {
          var c = l[s];
          if (!Q0.call(t, c) || !w(e[c], t[c]))
            return !1;
        }
        return !0;
      }
      function Hf() {
        return { didWarnAboutUncachedPromise: !1, thenables: [] };
      }
      function Ro(e) {
        return e = e.status, e === "fulfilled" || e === "rejected";
      }
      function Bc() {
      }
      function Of(e, t, l) {
        le.actQueue !== null && (le.didUsePromise = !0);
        var s = e.thenables;
        switch (l = s[l], l === void 0 ? s.push(t) : l !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
          "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
        )), t.then(Bc, Bc), t = l), t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Uf(e), e;
          default:
            if (typeof t.status == "string")
              t.then(Bc, Bc);
            else {
              if (e = Wt, e !== null && 100 < e.shellSuspendCounter)
                throw Error(
                  "async/await is not yet supported in Client Components, only Server Components. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
                );
              e = t, e.status = "pending", e.then(
                function(c) {
                  if (t.status === "pending") {
                    var m = t;
                    m.status = "fulfilled", m.value = c;
                  }
                },
                function(c) {
                  if (t.status === "pending") {
                    var m = t;
                    m.status = "rejected", m.reason = c;
                  }
                }
              );
            }
            switch (t.status) {
              case "fulfilled":
                return t.value;
              case "rejected":
                throw e = t.reason, Uf(e), e;
            }
            throw Wr = t, Jp = !0, xp;
        }
      }
      function Mo() {
        if (Wr === null)
          throw Error(
            "Expected a suspended thenable. This is a bug in React. Please file an issue."
          );
        var e = Wr;
        return Wr = null, Jp = !1, e;
      }
      function Uf(e) {
        if (e === xp)
          throw Error(
            "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
          );
      }
      function Ga(e) {
        var t = dt;
        return e != null && (dt = t === null ? e : t.concat(e)), t;
      }
      function gc(e, t, l) {
        for (var s = Object.keys(e.props), c = 0; c < s.length; c++) {
          var m = s[c];
          if (m !== "children" && m !== "key") {
            t === null && (t = Mr(e, l.mode, 0), t._debugInfo = dt, t.return = l), ee(
              t,
              function(S) {
                console.error(
                  "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                  S
                );
              },
              m
            );
            break;
          }
        }
      }
      function bs(e) {
        var t = sm;
        return sm += 1, kr === null && (kr = Hf()), Of(kr, e, t);
      }
      function Ds(e, t) {
        t = t.props.ref, e.ref = t !== void 0 ? t : null;
      }
      function Cc(e, t) {
        throw t.$$typeof === Ap ? Error(
          `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
        ) : (e = Object.prototype.toString.call(t), Error(
          "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
        ));
      }
      function bo(e, t) {
        var l = Z(e) || "Component";
        tA[l] || (tA[l] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
          `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
          t,
          t,
          t
        ) : console.error(
          `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
          t,
          t,
          l,
          t,
          l
        ));
      }
      function Do(e, t) {
        var l = Z(e) || "Component";
        aA[l] || (aA[l] = !0, t = String(t), e.tag === 3 ? console.error(
          `Symbols are not valid as a React child.
  root.render(%s)`,
          t
        ) : console.error(
          `Symbols are not valid as a React child.
  <%s>%s</%s>`,
          l,
          t,
          l
        ));
      }
      function Nf(e) {
        function t(K, J) {
          if (e) {
            var q = K.deletions;
            q === null ? (K.deletions = [J], K.flags |= 16) : q.push(J);
          }
        }
        function l(K, J) {
          if (!e) return null;
          for (; J !== null; )
            t(K, J), J = J.sibling;
          return null;
        }
        function s(K) {
          for (var J = /* @__PURE__ */ new Map(); K !== null; )
            K.key !== null ? J.set(K.key, K) : J.set(K.index, K), K = K.sibling;
          return J;
        }
        function c(K, J) {
          return K = gi(K, J), K.index = 0, K.sibling = null, K;
        }
        function m(K, J, q) {
          return K.index = q, e ? (q = K.alternate, q !== null ? (q = q.index, q < J ? (K.flags |= 33554434, J) : q) : (K.flags |= 33554434, J)) : (K.flags |= 1048576, J);
        }
        function S(K) {
          return e && K.alternate === null && (K.flags |= 33554434), K;
        }
        function _(K, J, q, he) {
          return J === null || J.tag !== 6 ? (J = Nd(
            q,
            K.mode,
            he
          ), J.return = K, J._debugOwner = K, J._debugInfo = dt, J) : (J = c(J, q), J.return = K, J._debugInfo = dt, J);
        }
        function j(K, J, q, he) {
          var je = q.type;
          return je === $i ? (J = Re(
            K,
            J,
            q.props.children,
            he,
            q.key
          ), gc(q, J, K), J) : J !== null && (J.elementType === je || dp(J, q) || typeof je == "object" && je !== null && je.$$typeof === Wn && ic(je) === J.type) ? (J = c(J, q.props), Ds(J, q), J.return = K, J._debugOwner = q._owner, J._debugInfo = dt, J) : (J = Mr(q, K.mode, he), Ds(J, q), J.return = K, J._debugInfo = dt, J);
        }
        function ae(K, J, q, he) {
          return J === null || J.tag !== 4 || J.stateNode.containerInfo !== q.containerInfo || J.stateNode.implementation !== q.implementation ? (J = br(q, K.mode, he), J.return = K, J._debugInfo = dt, J) : (J = c(J, q.children || []), J.return = K, J._debugInfo = dt, J);
        }
        function Re(K, J, q, he, je) {
          return J === null || J.tag !== 7 ? (J = Wi(
            q,
            K.mode,
            he,
            je
          ), J.return = K, J._debugOwner = K, J._debugInfo = dt, J) : (J = c(J, q), J.return = K, J._debugInfo = dt, J);
        }
        function Ue(K, J, q) {
          if (typeof J == "string" && J !== "" || typeof J == "number" || typeof J == "bigint")
            return J = Nd(
              "" + J,
              K.mode,
              q
            ), J.return = K, J._debugOwner = K, J._debugInfo = dt, J;
          if (typeof J == "object" && J !== null) {
            switch (J.$$typeof) {
              case ki:
                return q = Mr(
                  J,
                  K.mode,
                  q
                ), Ds(q, J), q.return = K, K = Ga(J._debugInfo), q._debugInfo = dt, dt = K, q;
              case ra:
                return J = br(
                  J,
                  K.mode,
                  q
                ), J.return = K, J._debugInfo = dt, J;
              case Wn:
                var he = Ga(J._debugInfo);
                return J = ic(J), K = Ue(K, J, q), dt = he, K;
            }
            if (La(J) || N(J))
              return q = Wi(
                J,
                K.mode,
                q,
                null
              ), q.return = K, q._debugOwner = K, K = Ga(J._debugInfo), q._debugInfo = dt, dt = K, q;
            if (typeof J.then == "function")
              return he = Ga(J._debugInfo), K = Ue(
                K,
                bs(J),
                q
              ), dt = he, K;
            if (J.$$typeof === Gl)
              return Ue(
                K,
                Lu(K, J),
                q
              );
            Cc(K, J);
          }
          return typeof J == "function" && bo(K, J), typeof J == "symbol" && Do(K, J), null;
        }
        function Je(K, J, q, he) {
          var je = J !== null ? J.key : null;
          if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint")
            return je !== null ? null : _(K, J, "" + q, he);
          if (typeof q == "object" && q !== null) {
            switch (q.$$typeof) {
              case ki:
                return q.key === je ? (je = Ga(q._debugInfo), K = j(
                  K,
                  J,
                  q,
                  he
                ), dt = je, K) : null;
              case ra:
                return q.key === je ? ae(K, J, q, he) : null;
              case Wn:
                return je = Ga(q._debugInfo), q = ic(q), K = Je(
                  K,
                  J,
                  q,
                  he
                ), dt = je, K;
            }
            if (La(q) || N(q))
              return je !== null ? null : (je = Ga(q._debugInfo), K = Re(
                K,
                J,
                q,
                he,
                null
              ), dt = je, K);
            if (typeof q.then == "function")
              return je = Ga(q._debugInfo), K = Je(
                K,
                J,
                bs(q),
                he
              ), dt = je, K;
            if (q.$$typeof === Gl)
              return Je(
                K,
                J,
                Lu(K, q),
                he
              );
            Cc(K, q);
          }
          return typeof q == "function" && bo(K, q), typeof q == "symbol" && Do(K, q), null;
        }
        function Et(K, J, q, he, je) {
          if (typeof he == "string" && he !== "" || typeof he == "number" || typeof he == "bigint")
            return K = K.get(q) || null, _(J, K, "" + he, je);
          if (typeof he == "object" && he !== null) {
            switch (he.$$typeof) {
              case ki:
                return q = K.get(
                  he.key === null ? q : he.key
                ) || null, K = Ga(he._debugInfo), J = j(
                  J,
                  q,
                  he,
                  je
                ), dt = K, J;
              case ra:
                return K = K.get(
                  he.key === null ? q : he.key
                ) || null, ae(J, K, he, je);
              case Wn:
                var Rt = Ga(he._debugInfo);
                return he = ic(he), J = Et(
                  K,
                  J,
                  q,
                  he,
                  je
                ), dt = Rt, J;
            }
            if (La(he) || N(he))
              return q = K.get(q) || null, K = Ga(he._debugInfo), J = Re(
                J,
                q,
                he,
                je,
                null
              ), dt = K, J;
            if (typeof he.then == "function")
              return Rt = Ga(he._debugInfo), J = Et(
                K,
                J,
                q,
                bs(he),
                je
              ), dt = Rt, J;
            if (he.$$typeof === Gl)
              return Et(
                K,
                J,
                q,
                Lu(J, he),
                je
              );
            Cc(J, he);
          }
          return typeof he == "function" && bo(J, he), typeof he == "symbol" && Do(J, he), null;
        }
        function Lt(K, J, q, he) {
          if (typeof q != "object" || q === null) return he;
          switch (q.$$typeof) {
            case ki:
            case ra:
              P(K, J, q);
              var je = q.key;
              if (typeof je != "string") break;
              if (he === null) {
                he = /* @__PURE__ */ new Set(), he.add(je);
                break;
              }
              if (!he.has(je)) {
                he.add(je);
                break;
              }
              ee(J, function() {
                console.error(
                  "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                  je
                );
              });
              break;
            case Wn:
              q = ic(q), Lt(K, J, q, he);
          }
          return he;
        }
        function vf(K, J, q, he) {
          for (var je = null, Rt = null, ut = null, ct = J, rt = J = 0, ua = null; ct !== null && rt < q.length; rt++) {
            ct.index > rt ? (ua = ct, ct = null) : ua = ct.sibling;
            var Ha = Je(
              K,
              ct,
              q[rt],
              he
            );
            if (Ha === null) {
              ct === null && (ct = ua);
              break;
            }
            je = Lt(
              K,
              Ha,
              q[rt],
              je
            ), e && ct && Ha.alternate === null && t(K, ct), J = m(Ha, J, rt), ut === null ? Rt = Ha : ut.sibling = Ha, ut = Ha, ct = ua;
          }
          if (rt === q.length)
            return l(K, ct), Tt && Nn(K, rt), Rt;
          if (ct === null) {
            for (; rt < q.length; rt++)
              ct = Ue(K, q[rt], he), ct !== null && (je = Lt(
                K,
                ct,
                q[rt],
                je
              ), J = m(
                ct,
                J,
                rt
              ), ut === null ? Rt = ct : ut.sibling = ct, ut = ct);
            return Tt && Nn(K, rt), Rt;
          }
          for (ct = s(ct); rt < q.length; rt++)
            ua = Et(
              ct,
              K,
              rt,
              q[rt],
              he
            ), ua !== null && (je = Lt(
              K,
              ua,
              q[rt],
              je
            ), e && ua.alternate !== null && ct.delete(
              ua.key === null ? rt : ua.key
            ), J = m(
              ua,
              J,
              rt
            ), ut === null ? Rt = ua : ut.sibling = ua, ut = ua);
          return e && ct.forEach(function(hs) {
            return t(K, hs);
          }), Tt && Nn(K, rt), Rt;
        }
        function yf(K, J, q, he) {
          if (q == null)
            throw Error("An iterable object provided no iterator.");
          for (var je = null, Rt = null, ut = J, ct = J = 0, rt = null, ua = null, Ha = q.next(); ut !== null && !Ha.done; ct++, Ha = q.next()) {
            ut.index > ct ? (rt = ut, ut = null) : rt = ut.sibling;
            var hs = Je(K, ut, Ha.value, he);
            if (hs === null) {
              ut === null && (ut = rt);
              break;
            }
            ua = Lt(
              K,
              hs,
              Ha.value,
              ua
            ), e && ut && hs.alternate === null && t(K, ut), J = m(hs, J, ct), Rt === null ? je = hs : Rt.sibling = hs, Rt = hs, ut = rt;
          }
          if (Ha.done)
            return l(K, ut), Tt && Nn(K, ct), je;
          if (ut === null) {
            for (; !Ha.done; ct++, Ha = q.next())
              ut = Ue(K, Ha.value, he), ut !== null && (ua = Lt(
                K,
                ut,
                Ha.value,
                ua
              ), J = m(
                ut,
                J,
                ct
              ), Rt === null ? je = ut : Rt.sibling = ut, Rt = ut);
            return Tt && Nn(K, ct), je;
          }
          for (ut = s(ut); !Ha.done; ct++, Ha = q.next())
            rt = Et(
              ut,
              K,
              ct,
              Ha.value,
              he
            ), rt !== null && (ua = Lt(
              K,
              rt,
              Ha.value,
              ua
            ), e && rt.alternate !== null && ut.delete(
              rt.key === null ? ct : rt.key
            ), J = m(
              rt,
              J,
              ct
            ), Rt === null ? je = rt : Rt.sibling = rt, Rt = rt);
          return e && ut.forEach(function(nS) {
            return t(K, nS);
          }), Tt && Nn(K, ct), je;
        }
        function ti(K, J, q, he) {
          if (typeof q == "object" && q !== null && q.type === $i && q.key === null && (gc(q, null, K), q = q.props.children), typeof q == "object" && q !== null) {
            switch (q.$$typeof) {
              case ki:
                var je = Ga(q._debugInfo);
                e: {
                  for (var Rt = q.key; J !== null; ) {
                    if (J.key === Rt) {
                      if (Rt = q.type, Rt === $i) {
                        if (J.tag === 7) {
                          l(
                            K,
                            J.sibling
                          ), he = c(
                            J,
                            q.props.children
                          ), he.return = K, he._debugOwner = q._owner, he._debugInfo = dt, gc(q, he, K), K = he;
                          break e;
                        }
                      } else if (J.elementType === Rt || dp(
                        J,
                        q
                      ) || typeof Rt == "object" && Rt !== null && Rt.$$typeof === Wn && ic(Rt) === J.type) {
                        l(
                          K,
                          J.sibling
                        ), he = c(J, q.props), Ds(he, q), he.return = K, he._debugOwner = q._owner, he._debugInfo = dt, K = he;
                        break e;
                      }
                      l(K, J);
                      break;
                    } else t(K, J);
                    J = J.sibling;
                  }
                  q.type === $i ? (he = Wi(
                    q.props.children,
                    K.mode,
                    he,
                    q.key
                  ), he.return = K, he._debugOwner = K, he._debugInfo = dt, gc(q, he, K), K = he) : (he = Mr(
                    q,
                    K.mode,
                    he
                  ), Ds(he, q), he.return = K, he._debugInfo = dt, K = he);
                }
                return K = S(K), dt = je, K;
              case ra:
                e: {
                  for (je = q, q = je.key; J !== null; ) {
                    if (J.key === q)
                      if (J.tag === 4 && J.stateNode.containerInfo === je.containerInfo && J.stateNode.implementation === je.implementation) {
                        l(
                          K,
                          J.sibling
                        ), he = c(
                          J,
                          je.children || []
                        ), he.return = K, K = he;
                        break e;
                      } else {
                        l(K, J);
                        break;
                      }
                    else t(K, J);
                    J = J.sibling;
                  }
                  he = br(
                    je,
                    K.mode,
                    he
                  ), he.return = K, K = he;
                }
                return S(K);
              case Wn:
                return je = Ga(q._debugInfo), q = ic(q), K = ti(
                  K,
                  J,
                  q,
                  he
                ), dt = je, K;
            }
            if (La(q))
              return je = Ga(q._debugInfo), K = vf(
                K,
                J,
                q,
                he
              ), dt = je, K;
            if (N(q)) {
              if (je = Ga(q._debugInfo), Rt = N(q), typeof Rt != "function")
                throw Error(
                  "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
                );
              var ut = Rt.call(q);
              return ut === q ? (K.tag !== 0 || Object.prototype.toString.call(K.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(ut) !== "[object Generator]") && ($y || console.error(
                "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
              ), $y = !0) : q.entries !== Rt || fv || (console.error(
                "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
              ), fv = !0), K = yf(
                K,
                J,
                ut,
                he
              ), dt = je, K;
            }
            if (typeof q.then == "function")
              return je = Ga(q._debugInfo), K = ti(
                K,
                J,
                bs(q),
                he
              ), dt = je, K;
            if (q.$$typeof === Gl)
              return ti(
                K,
                J,
                Lu(K, q),
                he
              );
            Cc(K, q);
          }
          return typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint" ? (je = "" + q, J !== null && J.tag === 6 ? (l(
            K,
            J.sibling
          ), he = c(J, je), he.return = K, K = he) : (l(K, J), he = Nd(
            je,
            K.mode,
            he
          ), he.return = K, he._debugOwner = K, he._debugInfo = dt, K = he), S(K)) : (typeof q == "function" && bo(K, q), typeof q == "symbol" && Do(K, q), l(K, J));
        }
        return function(K, J, q, he) {
          var je = dt;
          dt = null;
          try {
            sm = 0;
            var Rt = ti(
              K,
              J,
              q,
              he
            );
            return kr = null, Rt;
          } catch (ua) {
            if (ua === xp) throw ua;
            var ut = C(29, ua, null, K.mode);
            ut.lanes = he, ut.return = K;
            var ct = ut._debugInfo = dt;
            if (ut._debugOwner = K._debugOwner, ct != null) {
              for (var rt = ct.length - 1; 0 <= rt; rt--)
                if (typeof ct[rt].stack == "string") {
                  ut._debugOwner = ct[rt];
                  break;
                }
            }
            return ut;
          } finally {
            dt = je;
          }
        };
      }
      function _s(e, t) {
        var l = zi;
        de(Kp, l, e), de($r, t, e), zi = l | t.baseLanes;
      }
      function Tc(e) {
        de(Kp, zi, e), de(
          $r,
          $r.current,
          e
        );
      }
      function Hs(e) {
        zi = Kp.current, me($r, e), me(Kp, e);
      }
      function Nu(e) {
        var t = e.alternate;
        de(
          en,
          en.current & ef,
          e
        ), de(yu, e, e), Ui === null && (t === null || $r.current !== null || t.memoizedState !== null) && (Ui = e);
      }
      function Gf(e) {
        if (e.tag === 22) {
          if (de(en, en.current, e), de(yu, e, e), Ui === null) {
            var t = e.alternate;
            t !== null && t.memoizedState !== null && (Ui = e);
          }
        } else Il(e);
      }
      function Il(e) {
        de(en, en.current, e), de(
          yu,
          yu.current,
          e
        );
      }
      function wl(e) {
        me(yu, e), Ui === e && (Ui = null), me(en, e);
      }
      function Rc(e) {
        for (var t = e; t !== null; ) {
          if (t.tag === 13) {
            var l = t.memoizedState;
            if (l !== null && (l = l.dehydrated, l === null || xl(l) || qd(l)))
              return t;
          } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if ((t.flags & 128) !== 0) return t;
          } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
        return null;
      }
      function nt() {
        var e = ue;
        Su === null ? Su = [e] : Su.push(e);
      }
      function Be() {
        var e = ue;
        if (Su !== null && (fs++, Su[fs] !== e)) {
          var t = Z(
            lt
          );
          if (!lA.has(t) && (lA.add(t), Su !== null)) {
            for (var l = "", s = 0; s <= fs; s++) {
              var c = Su[s], m = s === fs ? e : c;
              for (c = s + 1 + ". " + c; 30 > c.length; )
                c += " ";
              c += m + `
`, l += c;
            }
            console.error(
              `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
              t,
              l
            );
          }
        }
      }
      function ji(e) {
        e == null || La(e) || console.error(
          "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
          ue,
          typeof e
        );
      }
      function Os() {
        var e = Z(lt);
        iA.has(e) || (iA.add(e), console.error(
          "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
          e
        ));
      }
      function oa() {
        throw Error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        );
      }
      function _o(e, t) {
        if (rm) return !1;
        if (t === null)
          return console.error(
            "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
            ue
          ), !1;
        e.length !== t.length && console.error(
          `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
          ue,
          "[" + t.join(", ") + "]",
          "[" + e.join(", ") + "]"
        );
        for (var l = 0; l < t.length && l < e.length; l++)
          if (!w(e[l], t[l])) return !1;
        return !0;
      }
      function zf(e, t, l, s, c, m) {
        sc = m, lt = t, Su = e !== null ? e._debugHookTypes : null, fs = -1, rm = e !== null && e.type !== t.type, (Object.prototype.toString.call(l) === "[object AsyncFunction]" || Object.prototype.toString.call(l) === "[object AsyncGeneratorFunction]") && (m = Z(
          lt
        ), dv.has(m) || (dv.add(m), console.error(
          "async/await is not yet supported in Client Components, only Server Components. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, le.H = e !== null && e.memoizedState !== null ? oc : Su !== null ? ro : cc, oo = m = (t.mode & 8) !== ta;
        var S = ov(l, s, c);
        if (oo = !1, af && (S = Ho(
          t,
          l,
          s,
          c
        )), m) {
          gt(!0);
          try {
            S = Ho(
              t,
              l,
              s,
              c
            );
          } finally {
            gt(!1);
          }
        }
        return za(e, t), S;
      }
      function za(e, t) {
        t._debugHookTypes = Su, t.dependencies === null ? rs !== null && (t.dependencies = {
          lanes: 0,
          firstContext: null,
          _debugThenableState: rs
        }) : t.dependencies._debugThenableState = rs, le.H = Ni;
        var l = Ft !== null && Ft.next !== null;
        if (sc = 0, Su = ue = ja = Ft = lt = null, fs = -1, e !== null && (e.flags & 31457280) !== (t.flags & 31457280) && console.error(
          "Internal React error: Expected static flag was missing. Please notify the React team."
        ), jp = !1, om = 0, rs = null, l)
          throw Error(
            "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
          );
        e === null || dn || (e = e.dependencies, e !== null && or(e) && (dn = !0)), Jp ? (Jp = !1, e = !0) : e = !1, e && (t = Z(t) || "Unknown", uA.has(t) || dv.has(t) || (uA.add(t), console.error(
          "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
        )));
      }
      function Ho(e, t, l, s) {
        lt = e;
        var c = 0;
        do {
          if (af && (rs = null), om = 0, af = !1, c >= q0)
            throw Error(
              "Too many re-renders. React limits the number of renders to prevent an infinite loop."
            );
          if (c += 1, rm = !1, ja = Ft = null, e.updateQueue != null) {
            var m = e.updateQueue;
            m.lastEffect = null, m.events = null, m.stores = null, m.memoCache != null && (m.memoCache.index = 0);
          }
          fs = -1, le.H = fo, m = ov(t, l, s);
        } while (af);
        return m;
      }
      function Km() {
        var e = le.H, t = e.useState()[0];
        return t = typeof t.then == "function" ? Us(t) : t, e = e.useState()[0], (Ft !== null ? Ft.memoizedState : null) !== e && (lt.flags |= 1024), t;
      }
      function Oo() {
        var e = Qp !== 0;
        return Qp = 0, e;
      }
      function Uo(e, t, l) {
        t.updateQueue = e.updateQueue, t.flags = (t.mode & 16) !== ta ? t.flags & -201328645 : t.flags & -2053, e.lanes &= ~l;
      }
      function No(e) {
        if (jp) {
          for (e = e.memoizedState; e !== null; ) {
            var t = e.queue;
            t !== null && (t.pending = null), e = e.next;
          }
          jp = !1;
        }
        sc = 0, Su = ja = Ft = lt = null, fs = -1, ue = null, af = !1, om = Qp = 0, rs = null;
      }
      function xa() {
        var e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
        };
        return ja === null ? lt.memoizedState = ja = e : ja = ja.next = e, ja;
      }
      function Ot() {
        if (Ft === null) {
          var e = lt.alternate;
          e = e !== null ? e.memoizedState : null;
        } else e = Ft.next;
        var t = ja === null ? lt.memoizedState : ja.next;
        if (t !== null)
          ja = t, Ft = e;
        else {
          if (e === null)
            throw lt.alternate === null ? Error(
              "Update hook called on initial render. This is likely a bug in React. Please file an issue."
            ) : Error("Rendered more hooks than during the previous render.");
          Ft = e, e = {
            memoizedState: Ft.memoizedState,
            baseState: Ft.baseState,
            baseQueue: Ft.baseQueue,
            queue: Ft.queue,
            next: null
          }, ja === null ? lt.memoizedState = ja = e : ja = ja.next = e;
        }
        return ja;
      }
      function Us(e) {
        var t = om;
        return om += 1, rs === null && (rs = Hf()), e = Of(rs, e, t), t = lt, (ja === null ? t.memoizedState : ja.next) === null && (t = t.alternate, le.H = t !== null && t.memoizedState !== null ? oc : cc), e;
      }
      function Gu(e) {
        if (e !== null && typeof e == "object") {
          if (typeof e.then == "function") return Us(e);
          if (e.$$typeof === Gl) return wt(e);
        }
        throw Error("An unsupported type was passed to use(): " + String(e));
      }
      function ci(e) {
        var t = null, l = lt.updateQueue;
        if (l !== null && (t = l.memoCache), t == null) {
          var s = lt.alternate;
          s !== null && (s = s.updateQueue, s !== null && (s = s.memoCache, s != null && (t = {
            data: s.data.map(function(c) {
              return c.slice();
            }),
            index: 0
          })));
        }
        if (t == null && (t = { data: [], index: 0 }), l === null && (l = mv(), lt.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0 || rm)
          for (l = t.data[t.index] = Array(e), s = 0; s < e; s++)
            l[s] = Nr;
        else
          l.length !== e && console.error(
            "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
            l.length,
            e
          );
        return t.index++, l;
      }
      function Zn(e, t) {
        return typeof t == "function" ? t(e) : t;
      }
      function Mc(e, t, l) {
        var s = xa();
        if (l !== void 0) {
          var c = l(t);
          if (oo) {
            gt(!0);
            try {
              l(t);
            } finally {
              gt(!1);
            }
          }
        } else c = t;
        return s.memoizedState = s.baseState = c, e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: c
        }, s.queue = e, e = e.dispatch = Ym.bind(
          null,
          lt,
          e
        ), [s.memoizedState, e];
      }
      function Qi(e) {
        var t = Ot();
        return bc(t, Ft, e);
      }
      function bc(e, t, l) {
        var s = e.queue;
        if (s === null)
          throw Error(
            "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
          );
        s.lastRenderedReducer = l;
        var c = e.baseQueue, m = s.pending;
        if (m !== null) {
          if (c !== null) {
            var S = c.next;
            c.next = m.next, m.next = S;
          }
          t.baseQueue !== c && console.error(
            "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
          ), t.baseQueue = c = m, s.pending = null;
        }
        if (m = e.baseState, c === null) e.memoizedState = m;
        else {
          t = c.next;
          var _ = S = null, j = null, ae = t, Re = !1;
          do {
            var Ue = ae.lane & -536870913;
            if (Ue !== ae.lane ? (yt & Ue) === Ue : (sc & Ue) === Ue) {
              var Je = ae.revertLane;
              if (Je === 0)
                j !== null && (j = j.next = {
                  lane: 0,
                  revertLane: 0,
                  action: ae.action,
                  hasEagerState: ae.hasEagerState,
                  eagerState: ae.eagerState,
                  next: null
                }), Ue === io && (Re = !0);
              else if ((sc & Je) === Je) {
                ae = ae.next, Je === io && (Re = !0);
                continue;
              } else
                Ue = {
                  lane: 0,
                  revertLane: ae.revertLane,
                  action: ae.action,
                  hasEagerState: ae.hasEagerState,
                  eagerState: ae.eagerState,
                  next: null
                }, j === null ? (_ = j = Ue, S = m) : j = j.next = Ue, lt.lanes |= Je, fc |= Je;
              Ue = ae.action, oo && l(m, Ue), m = ae.hasEagerState ? ae.eagerState : l(m, Ue);
            } else
              Je = {
                lane: Ue,
                revertLane: ae.revertLane,
                action: ae.action,
                hasEagerState: ae.hasEagerState,
                eagerState: ae.eagerState,
                next: null
              }, j === null ? (_ = j = Je, S = m) : j = j.next = Je, lt.lanes |= Ue, fc |= Ue;
            ae = ae.next;
          } while (ae !== null && ae !== t);
          if (j === null ? S = m : j.next = _, !w(m, e.memoizedState) && (dn = !0, Re && (l = Pr, l !== null)))
            throw l;
          e.memoizedState = m, e.baseState = S, e.baseQueue = j, s.lastRenderedState = m;
        }
        return c === null && (s.lanes = 0), [e.memoizedState, s.dispatch];
      }
      function Yi(e) {
        var t = Ot(), l = t.queue;
        if (l === null)
          throw Error(
            "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
          );
        l.lastRenderedReducer = e;
        var s = l.dispatch, c = l.pending, m = t.memoizedState;
        if (c !== null) {
          l.pending = null;
          var S = c = c.next;
          do
            m = e(m, S.action), S = S.next;
          while (S !== c);
          w(m, t.memoizedState) || (dn = !0), t.memoizedState = m, t.baseQueue === null && (t.baseState = m), l.lastRenderedState = m;
        }
        return [m, s];
      }
      function Dc(e, t, l) {
        var s = lt, c = xa();
        if (Tt) {
          if (l === void 0)
            throw Error(
              "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
            );
          var m = l();
          tf || m === l() || (console.error(
            "The result of getServerSnapshot should be cached to avoid an infinite loop"
          ), tf = !0);
        } else {
          if (m = t(), tf || (l = t(), w(m, l) || (console.error(
            "The result of getSnapshot should be cached to avoid an infinite loop"
          ), tf = !0)), Wt === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          (yt & 60) !== 0 || Go(s, t, m);
        }
        return c.memoizedState = m, l = { value: m, getSnapshot: t }, c.queue = l, zs(
          Pl.bind(null, s, l, e),
          [e]
        ), s.flags |= 2048, fi(
          Eu | tn,
          xf.bind(
            null,
            s,
            l,
            m,
            t
          ),
          { destroy: void 0 },
          null
        ), m;
      }
      function _c(e, t, l) {
        var s = lt, c = Ot(), m = Tt;
        if (m) {
          if (l === void 0)
            throw Error(
              "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
            );
          l = l();
        } else if (l = t(), !tf) {
          var S = t();
          w(l, S) || (console.error(
            "The result of getSnapshot should be cached to avoid an infinite loop"
          ), tf = !0);
        }
        (S = !w(
          (Ft || c).memoizedState,
          l
        )) && (c.memoizedState = l, dn = !0), c = c.queue;
        var _ = Pl.bind(null, s, c, e);
        if (un(2048, tn, _, [e]), c.getSnapshot !== t || S || ja !== null && ja.memoizedState.tag & Eu) {
          if (s.flags |= 2048, fi(
            Eu | tn,
            xf.bind(
              null,
              s,
              c,
              l,
              t
            ),
            { destroy: void 0 },
            null
          ), Wt === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          m || (sc & 60) !== 0 || Go(s, t, l);
        }
        return l;
      }
      function Go(e, t, l) {
        e.flags |= 16384, e = { getSnapshot: t, value: l }, t = lt.updateQueue, t === null ? (t = mv(), lt.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
      }
      function xf(e, t, l, s) {
        t.value = l, t.getSnapshot = s, zo(t) && jm(e);
      }
      function Pl(e, t, l) {
        return l(function() {
          zo(t) && jm(e);
        });
      }
      function zo(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var l = t();
          return !w(e, l);
        } catch {
          return !0;
        }
      }
      function jm(e) {
        var t = Ee(e, 2);
        t !== null && na(t, e, 2);
      }
      function xo(e) {
        var t = xa();
        if (typeof e == "function") {
          var l = e;
          if (e = l(), oo) {
            gt(!0);
            try {
              l();
            } finally {
              gt(!1);
            }
          }
        }
        return t.memoizedState = t.baseState = e, t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Zn,
          lastRenderedState: e
        }, t;
      }
      function Wl(e) {
        e = xo(e);
        var t = e.queue, l = fl.bind(
          null,
          lt,
          t
        );
        return t.dispatch = l, [e.memoizedState, l];
      }
      function bl(e) {
        var t = xa();
        t.memoizedState = t.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return t.queue = l, t = Po.bind(
          null,
          lt,
          !0,
          l
        ), l.dispatch = t, [e, t];
      }
      function Lo(e, t) {
        var l = Ot();
        return Jo(l, Ft, e, t);
      }
      function Jo(e, t, l, s) {
        return e.baseState = l, bc(
          e,
          Ft,
          typeof s == "function" ? s : Zn
        );
      }
      function Ns(e, t) {
        var l = Ot();
        return Ft !== null ? Jo(l, Ft, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
      }
      function Ko(e, t, l, s, c) {
        if (Wo(e))
          throw Error("Cannot update form state while rendering.");
        if (e = t.action, e !== null) {
          var m = {
            payload: c,
            action: e,
            next: null,
            isTransition: !0,
            status: "pending",
            value: null,
            reason: null,
            listeners: [],
            then: function(S) {
              m.listeners.push(S);
            }
          };
          le.T !== null ? l(!0) : m.isTransition = !1, s(m), l = t.pending, l === null ? (m.next = t.pending = m, oi(t, m)) : (m.next = l.next, t.pending = l.next = m);
        }
      }
      function oi(e, t) {
        var l = t.action, s = t.payload, c = e.state;
        if (t.isTransition) {
          var m = le.T, S = {};
          le.T = S, le.T._updatedFibers = /* @__PURE__ */ new Set();
          try {
            var _ = l(c, s), j = le.S;
            j !== null && j(S, _), Za(e, t, _);
          } catch (ae) {
            jo(e, t, ae);
          } finally {
            le.T = m, m === null && S._updatedFibers && (e = S._updatedFibers.size, S._updatedFibers.clear(), 10 < e && console.warn(
              "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
            ));
          }
        } else
          try {
            S = l(c, s), Za(e, t, S);
          } catch (ae) {
            jo(e, t, ae);
          }
      }
      function Za(e, t, l) {
        l !== null && typeof l == "object" && typeof l.then == "function" ? (l.then(
          function(s) {
            Hc(e, t, s);
          },
          function(s) {
            return jo(e, t, s);
          }
        ), t.isTransition || console.error(
          "An async function was passed to useActionState, but it was dispatched outside of an action context. This is likely not what you intended. Either pass the dispatch function to an `action` prop, or dispatch manually inside `startTransition`"
        )) : Hc(e, t, l);
      }
      function Hc(e, t, l) {
        t.status = "fulfilled", t.value = l, Qo(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, oi(e, l)));
      }
      function jo(e, t, l) {
        var s = e.pending;
        if (e.pending = null, s !== null) {
          s = s.next;
          do
            t.status = "rejected", t.reason = l, Qo(t), t = t.next;
          while (t !== s);
        }
        e.action = null;
      }
      function Qo(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
      function Gs(e, t) {
        return t;
      }
      function ri(e, t) {
        if (Tt) {
          var l = Wt.formState;
          if (l !== null) {
            e: {
              var s = lt;
              if (Tt) {
                if (Tn) {
                  var c = fa(
                    Tn,
                    Oi
                  );
                  if (c) {
                    Tn = Pu(c), s = Rp(c);
                    break e;
                  }
                }
                g(s);
              }
              s = !1;
            }
            s && (t = l[0]);
          }
        }
        l = xa(), l.memoizedState = l.baseState = t, s = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Gs,
          lastRenderedState: t
        }, l.queue = s, l = fl.bind(
          null,
          lt,
          s
        ), s.dispatch = l, s = xo(!1);
        var m = Po.bind(
          null,
          lt,
          !1,
          s.queue
        );
        return s = xa(), c = {
          state: t,
          dispatch: null,
          action: e,
          pending: null
        }, s.queue = c, l = Ko.bind(
          null,
          lt,
          c,
          m,
          l
        ), c.dispatch = l, s.memoizedState = e, [t, l, !1];
      }
      function Xi(e) {
        var t = Ot();
        return Lf(t, Ft, e);
      }
      function Lf(e, t, l) {
        t = bc(
          e,
          t,
          Gs
        )[0], e = Qi(Zn)[0], t = typeof t == "object" && t !== null && typeof t.then == "function" ? Us(t) : t;
        var s = Ot(), c = s.queue, m = c.dispatch;
        return l !== s.memoizedState && (lt.flags |= 2048, fi(
          Eu | tn,
          qn.bind(null, c, l),
          { destroy: void 0 },
          null
        )), [t, m, e];
      }
      function qn(e, t) {
        e.action = t;
      }
      function Oc(e) {
        var t = Ot(), l = Ft;
        if (l !== null)
          return Lf(t, l, e);
        Ot(), t = t.memoizedState, l = Ot();
        var s = l.queue.dispatch;
        return l.memoizedState = e, [t, s, !1];
      }
      function fi(e, t, l, s) {
        return e = { tag: e, create: t, inst: l, deps: s, next: null }, t = lt.updateQueue, t === null && (t = mv(), lt.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (s = l.next, l.next = e, e.next = s, t.lastEffect = e), e;
      }
      function Yo(e) {
        var t = xa();
        return e = { current: e }, t.memoizedState = e;
      }
      function di(e, t, l, s) {
        var c = xa();
        lt.flags |= e, c.memoizedState = fi(
          Eu | t,
          l,
          { destroy: void 0 },
          s === void 0 ? null : s
        );
      }
      function un(e, t, l, s) {
        var c = Ot();
        s = s === void 0 ? null : s;
        var m = c.memoizedState.inst;
        Ft !== null && s !== null && _o(s, Ft.memoizedState.deps) ? c.memoizedState = fi(t, l, m, s) : (lt.flags |= e, c.memoizedState = fi(
          Eu | t,
          l,
          m,
          s
        ));
      }
      function zs(e, t) {
        (lt.mode & 16) !== ta && (lt.mode & 64) === ta ? di(142608384, tn, e, t) : di(8390656, tn, e, t);
      }
      function Xo(e, t) {
        var l = 4194308;
        return (lt.mode & 16) !== ta && (l |= 67108864), di(l, Rn, e, t);
      }
      function Uc(e, t) {
        if (typeof t == "function") {
          e = e();
          var l = t(e);
          return function() {
            typeof l == "function" ? l() : t(null);
          };
        }
        if (t != null)
          return t.hasOwnProperty("current") || console.error(
            "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
            "an object with keys {" + Object.keys(t).join(", ") + "}"
          ), e = e(), t.current = e, function() {
            t.current = null;
          };
      }
      function Vi(e, t, l) {
        typeof t != "function" && console.error(
          "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
          t !== null ? typeof t : "null"
        ), l = l != null ? l.concat([e]) : null;
        var s = 4194308;
        (lt.mode & 16) !== ta && (s |= 67108864), di(
          s,
          Rn,
          Uc.bind(null, t, e),
          l
        );
      }
      function Zt(e, t, l) {
        typeof t != "function" && console.error(
          "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
          t !== null ? typeof t : "null"
        ), l = l != null ? l.concat([e]) : null, un(
          4,
          Rn,
          Uc.bind(null, t, e),
          l
        );
      }
      function Jf(e, t) {
        return xa().memoizedState = [
          e,
          t === void 0 ? null : t
        ], e;
      }
      function Vo(e, t) {
        var l = Ot();
        t = t === void 0 ? null : t;
        var s = l.memoizedState;
        return t !== null && _o(t, s[1]) ? s[0] : (l.memoizedState = [e, t], e);
      }
      function Zo(e, t) {
        var l = xa();
        t = t === void 0 ? null : t;
        var s = e();
        if (oo) {
          gt(!0);
          try {
            e();
          } finally {
            gt(!1);
          }
        }
        return l.memoizedState = [s, t], s;
      }
      function mi(e, t) {
        var l = Ot();
        t = t === void 0 ? null : t;
        var s = l.memoizedState;
        if (t !== null && _o(t, s[1]))
          return s[0];
        if (s = e(), oo) {
          gt(!0);
          try {
            e();
          } finally {
            gt(!1);
          }
        }
        return l.memoizedState = [s, t], s;
      }
      function kl(e, t) {
        var l = xa();
        return zu(l, e, t);
      }
      function Kf(e, t) {
        var l = Ot();
        return zn(
          l,
          Ft.memoizedState,
          e,
          t
        );
      }
      function jf(e, t) {
        var l = Ot();
        return Ft === null ? zu(l, e, t) : zn(
          l,
          Ft.memoizedState,
          e,
          t
        );
      }
      function zu(e, t, l) {
        return l === void 0 || (sc & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = l, e = gd(), lt.lanes |= e, fc |= e, l);
      }
      function zn(e, t, l, s) {
        return w(l, t) ? l : $r.current !== null ? (e = zu(e, l, s), w(e, t) || (dn = !0), e) : (sc & 42) === 0 ? (dn = !0, e.memoizedState = l) : (e = gd(), lt.lanes |= e, fc |= e, t);
      }
      function Qf(e, t, l, s, c) {
        var m = Iu();
        Wa(
          m !== 0 && 8 > m ? m : 8
        );
        var S = le.T, _ = {};
        le.T = _, Po(e, !1, t, l), _._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var j = c(), ae = le.S;
          if (ae !== null && ae(_, j), j !== null && typeof j == "object" && typeof j.then == "function") {
            var Re = Fl(
              j,
              s
            );
            Zi(
              e,
              t,
              Re,
              wn(e)
            );
          } else
            Zi(
              e,
              t,
              s,
              wn(e)
            );
        } catch (Ue) {
          Zi(
            e,
            t,
            { then: function() {
            }, status: "rejected", reason: Ue },
            wn(e)
          );
        } finally {
          Wa(m), le.T = S, S === null && _._updatedFibers && (e = _._updatedFibers.size, _._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      }
      function Yf(e) {
        var t = e.memoizedState;
        if (t !== null) return t;
        t = {
          memoizedState: cu,
          baseState: cu,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Zn,
            lastRenderedState: cu
          },
          next: null
        };
        var l = {};
        return t.next = {
          memoizedState: l,
          baseState: l,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Zn,
            lastRenderedState: l
          },
          next: null
        }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
      }
      function qo() {
        var e = xo(!1);
        return e = Qf.bind(
          null,
          lt,
          e.queue,
          !0,
          !1
        ), xa().memoizedState = e, [!1, e];
      }
      function Fo() {
        var e = Qi(Zn)[0], t = Ot().memoizedState;
        return [
          typeof e == "boolean" ? e : Us(e),
          t
        ];
      }
      function Io() {
        var e = Yi(Zn)[0], t = Ot().memoizedState;
        return [
          typeof e == "boolean" ? e : Us(e),
          t
        ];
      }
      function $l() {
        return wt(wu);
      }
      function wo() {
        var e = xa(), t = Wt.identifierPrefix;
        if (Tt) {
          var l = fn, s = ot;
          l = (s & ~(1 << 32 - ka(s) - 1)).toString(32) + l, t = ":" + t + "R" + l, l = Qp++, 0 < l && (t += "H" + l.toString(32)), t += ":";
        } else
          l = Z0++, t = ":" + t + "r" + l.toString(32) + ":";
        return e.memoizedState = t;
      }
      function Xf() {
        return xa().memoizedState = Qm.bind(
          null,
          lt
        );
      }
      function Qm(e, t) {
        for (var l = e.return; l !== null; ) {
          switch (l.tag) {
            case 24:
            case 3:
              var s = wn(l);
              e = Uu(s);
              var c = Vn(l, e, s);
              c !== null && (na(c, l, s), Rs(c, l, s)), l = rr(), t != null && c !== null && console.error(
                "The seed argument is not enabled outside experimental channels."
              ), e.payload = { cache: l };
              return;
          }
          l = l.return;
        }
      }
      function Ym(e, t, l, s) {
        typeof s == "function" && console.error(
          "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
        ), s = wn(e), l = {
          lane: s,
          revertLane: 0,
          action: l,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, Wo(e) ? ko(t, l) : (l = ve(
          e,
          t,
          l,
          s
        ), l !== null && (na(
          l,
          e,
          s
        ), hn(
          l,
          t,
          s
        ))), il(e, s);
      }
      function fl(e, t, l, s) {
        typeof s == "function" && console.error(
          "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
        ), s = wn(e), Zi(
          e,
          t,
          l,
          s
        ), il(e, s);
      }
      function Zi(e, t, l, s) {
        var c = {
          lane: s,
          revertLane: 0,
          action: l,
          hasEagerState: !1,
          eagerState: null,
          next: null
        };
        if (Wo(e)) ko(t, c);
        else {
          var m = e.alternate;
          if (e.lanes === 0 && (m === null || m.lanes === 0) && (m = t.lastRenderedReducer, m !== null)) {
            var S = le.H;
            le.H = nl;
            try {
              var _ = t.lastRenderedState, j = m(_, l);
              if (c.hasEagerState = !0, c.eagerState = j, w(j, _))
                return Se(e, t, c, 0), Wt === null && ye(), !1;
            } catch {
            } finally {
              le.H = S;
            }
          }
          if (l = ve(e, t, c, s), l !== null)
            return na(l, e, s), hn(l, t, s), !0;
        }
        return !1;
      }
      function Po(e, t, l, s) {
        if (le.T === null && io === 0 && console.error(
          "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
        ), s = {
          lane: 2,
          revertLane: xt(),
          action: s,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, Wo(e)) {
          if (t)
            throw Error("Cannot update optimistic state while rendering.");
          console.error("Cannot call startTransition while rendering.");
        } else
          t = ve(
            e,
            l,
            s,
            2
          ), t !== null && na(t, e, 2);
        il(e, 2);
      }
      function Wo(e) {
        var t = e.alternate;
        return e === lt || t !== null && t === lt;
      }
      function ko(e, t) {
        af = jp = !0;
        var l = e.pending;
        l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
      }
      function hn(e, t, l) {
        if ((l & 4194176) !== 0) {
          var s = t.lanes;
          s &= e.pendingLanes, l |= s, t.lanes = l, Vl(e, l);
        }
      }
      function $o(e) {
        if (e !== null && typeof e != "function") {
          var t = String(e);
          yA.has(t) || (yA.add(t), console.error(
            "Expected the last optional `callback` argument to be a function. Instead received: %s.",
            e
          ));
        }
      }
      function vn(e, t, l, s) {
        var c = e.memoizedState, m = l(s, c);
        if (e.mode & 8) {
          gt(!0);
          try {
            m = l(s, c);
          } finally {
            gt(!1);
          }
        }
        m === void 0 && (t = $(t) || "Component", mA.has(t) || (mA.add(t), console.error(
          "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
          t
        ))), c = m == null ? c : Fa({}, c, m), e.memoizedState = c, e.lanes === 0 && (e.updateQueue.baseState = c);
      }
      function Vf(e, t, l, s, c, m, S) {
        var _ = e.stateNode;
        if (typeof _.shouldComponentUpdate == "function") {
          if (l = _.shouldComponentUpdate(
            s,
            m,
            S
          ), e.mode & 8) {
            gt(!0);
            try {
              l = _.shouldComponentUpdate(
                s,
                m,
                S
              );
            } finally {
              gt(!1);
            }
          }
          return l === void 0 && console.error(
            "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
            $(t) || "Component"
          ), l;
        }
        return t.prototype && t.prototype.isPureReactComponent ? !Sc(l, s) || !Sc(c, m) : !0;
      }
      function eu(e, t, l, s) {
        var c = t.state;
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, s), t.state !== c && (e = Z(e) || "Component", cA.has(e) || (cA.add(e), console.error(
          "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          e
        )), pv.enqueueReplaceState(
          t,
          t.state,
          null
        ));
      }
      function dl(e, t) {
        var l = t;
        if ("ref" in t) {
          l = {};
          for (var s in t)
            s !== "ref" && (l[s] = t[s]);
        }
        if (e = e.defaultProps) {
          l === t && (l = Fa({}, l));
          for (var c in e)
            l[c] === void 0 && (l[c] = e[c]);
        }
        return l;
      }
      function Dl(e, t) {
        try {
          nf = t.source ? Z(t.source) : null, hv = null;
          var l = t.value;
          if (le.actQueue !== null)
            le.thrownErrors.push(l);
          else {
            var s = e.onUncaughtError;
            s(l, { componentStack: t.stack });
          }
        } catch (c) {
          setTimeout(function() {
            throw c;
          });
        }
      }
      function er(e, t, l) {
        try {
          nf = l.source ? Z(l.source) : null, hv = Z(t);
          var s = e.onCaughtError;
          s(l.value, {
            componentStack: l.stack,
            errorBoundary: t.tag === 1 ? t.stateNode : null
          });
        } catch (c) {
          setTimeout(function() {
            throw c;
          });
        }
      }
      function Nc(e, t, l) {
        return l = Uu(l), l.tag = uv, l.payload = { element: null }, l.callback = function() {
          ee(t.source, Dl, e, t);
        }, l;
      }
      function tu(e) {
        return e = Uu(e), e.tag = uv, e;
      }
      function tr(e, t, l, s) {
        var c = l.type.getDerivedStateFromError;
        if (typeof c == "function") {
          var m = s.value;
          e.payload = function() {
            return c(m);
          }, e.callback = function() {
            mp(l), ee(
              s.source,
              er,
              t,
              l,
              s
            );
          };
        }
        var S = l.stateNode;
        S !== null && typeof S.componentDidCatch == "function" && (e.callback = function() {
          mp(l), ee(
            s.source,
            er,
            t,
            l,
            s
          ), typeof c != "function" && (mc === null ? mc = /* @__PURE__ */ new Set([this]) : mc.add(this)), Y0(this, s), typeof c == "function" || (l.lanes & 2) === 0 && console.error(
            "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
            Z(l) || "Unknown"
          );
        });
      }
      function xs(e, t, l, s, c) {
        if (l.flags |= 32768, $a && Vc(e, c), s !== null && typeof s == "object" && typeof s.then == "function") {
          if (t = l.alternate, t !== null && Jc(
            t,
            l,
            c,
            !0
          ), Tt && (os = !0), l = yu.current, l !== null) {
            switch (l.tag) {
              case 13:
                return Ui === null ? Td() : l.alternate === null && Ra === ms && (Ra = Bv), l.flags &= -257, l.flags |= 65536, l.lanes = c, s === Lp ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([s]) : t.add(s), Tr(e, s, c)), !1;
              case 22:
                return l.flags |= 65536, s === Lp ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
                  transitions: null,
                  markerInstances: null,
                  retryQueue: /* @__PURE__ */ new Set([s])
                }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([s]) : l.add(s)), Tr(e, s, c)), !1;
            }
            throw Error(
              "Unexpected Suspense handler tag (" + l.tag + "). This is a bug in React."
            );
          }
          return Tr(e, s, c), Td(), !1;
        }
        if (Tt)
          return os = !0, t = yu.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = c, s !== kh && ie(
            Ya(
              Error(
                "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
                { cause: s }
              ),
              l
            )
          )) : (s !== kh && ie(
            Ya(
              Error(
                "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
                { cause: s }
              ),
              l
            )
          ), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, s = Ya(s, l), c = Nc(
            e.stateNode,
            s,
            c
          ), Ki(e, c), Ra !== po && (Ra = ff)), !1;
        var m = Ya(
          Error(
            "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
            { cause: s }
          ),
          l
        );
        if (vm === null ? vm = [m] : vm.push(m), Ra !== po && (Ra = ff), t === null) return !0;
        s = Ya(s, l), l = t;
        do {
          switch (l.tag) {
            case 3:
              return l.flags |= 65536, e = c & -c, l.lanes |= e, e = Nc(
                l.stateNode,
                s,
                e
              ), Ki(l, e), !1;
            case 1:
              if (t = l.type, m = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (mc === null || !mc.has(m))))
                return l.flags |= 65536, c &= -c, l.lanes |= c, c = tu(c), tr(
                  c,
                  e,
                  l,
                  s
                ), Ki(l, c), !1;
          }
          l = l.return;
        } while (l !== null);
        return !1;
      }
      function ha(e, t, l, s) {
        t.child = e === null ? nA(t, null, l, s) : co(
          t,
          e.child,
          l,
          s
        );
      }
      function pi(e, t, l, s, c) {
        l = l.render;
        var m = t.ref;
        if ("ref" in s) {
          var S = {};
          for (var _ in s)
            _ !== "ref" && (S[_] = s[_]);
        } else S = s;
        return yi(t), Un(t), s = zf(
          e,
          t,
          l,
          S,
          m,
          c
        ), _ = Oo(), Qn(), e !== null && !dn ? (Uo(e, t, c), Hl(e, t, c)) : (Tt && _ && Oa(t), t.flags |= 1, ha(e, t, s, c), t.child);
      }
      function Zf(e, t, l, s, c) {
        if (e === null) {
          var m = l.type;
          return typeof m == "function" && !Od(m) && m.defaultProps === void 0 && l.compare === null ? (l = Bi(m), t.tag = 15, t.type = l, ir(t, m), qf(
            e,
            t,
            l,
            s,
            c
          )) : (e = Ud(
            l.type,
            null,
            s,
            t,
            t.mode,
            c
          ), e.ref = t.ref, e.return = t, t.child = e);
        }
        if (m = e.child, !vi(e, c)) {
          var S = m.memoizedProps;
          if (l = l.compare, l = l !== null ? l : Sc, l(S, s) && e.ref === t.ref)
            return Hl(
              e,
              t,
              c
            );
        }
        return t.flags |= 1, e = gi(m, s), e.ref = t.ref, e.return = t, t.child = e;
      }
      function qf(e, t, l, s, c) {
        if (e !== null) {
          var m = e.memoizedProps;
          if (Sc(m, s) && e.ref === t.ref && t.type === e.type)
            if (dn = !1, t.pendingProps = s = m, vi(e, c))
              (e.flags & 131072) !== 0 && (dn = !0);
            else
              return t.lanes = e.lanes, Hl(e, t, c);
        }
        return ar(
          e,
          t,
          l,
          s,
          c
        );
      }
      function Ls(e, t, l) {
        var s = t.pendingProps, c = s.children, m = (t.stateNode._pendingVisibility & 2) !== 0, S = e !== null ? e.memoizedState : null;
        if (hi(e, t), s.mode === "hidden" || m) {
          if ((t.flags & 128) !== 0) {
            if (s = S !== null ? S.baseLanes | l : l, e !== null) {
              for (c = t.child = e.child, m = 0; c !== null; )
                m = m | c.lanes | c.childLanes, c = c.sibling;
              t.childLanes = m & ~s;
            } else t.childLanes = 0, t.child = null;
            return Ff(
              e,
              t,
              s,
              l
            );
          }
          if ((l & 536870912) !== 0)
            t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && au(
              t,
              S !== null ? S.cachePool : null
            ), S !== null ? _s(t, S) : Tc(t), Gf(t);
          else
            return t.lanes = t.childLanes = 536870912, Ff(
              e,
              t,
              S !== null ? S.baseLanes | l : l,
              l
            );
        } else
          S !== null ? (au(t, S.cachePool), _s(t, S), Il(t), t.memoizedState = null) : (e !== null && au(t, null), Tc(t), Il(t));
        return ha(e, t, c, l), t.child;
      }
      function Ff(e, t, l, s) {
        var c = fr();
        return c = c === null ? null : {
          parent: Ea ? Ca._currentValue : Ca._currentValue2,
          pool: c
        }, t.memoizedState = {
          baseLanes: l,
          cachePool: c
        }, e !== null && au(t, null), Tc(t), Gf(t), e !== null && Jc(e, t, s, !0), null;
      }
      function hi(e, t) {
        var l = t.ref;
        if (l === null)
          e !== null && e.ref !== null && (t.flags |= 2097664);
        else {
          if (typeof l != "function" && typeof l != "object")
            throw Error(
              "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
            );
          (e === null || e.ref !== l) && (t.flags |= 2097664);
        }
      }
      function ar(e, t, l, s, c) {
        if (l.prototype && typeof l.prototype.render == "function") {
          var m = $(l) || "Unknown";
          SA[m] || (console.error(
            "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
            m,
            m
          ), SA[m] = !0);
        }
        return t.mode & 8 && ku.recordLegacyContextWarning(
          t,
          null
        ), e === null && (ir(t, t.type), l.contextTypes && (m = $(l) || "Unknown", gA[m] || (gA[m] = !0, console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
          m
        )))), yi(t), Un(t), l = zf(
          e,
          t,
          l,
          s,
          void 0,
          c
        ), s = Oo(), Qn(), e !== null && !dn ? (Uo(e, t, c), Hl(e, t, c)) : (Tt && s && Oa(t), t.flags |= 1, ha(e, t, l, c), t.child);
      }
      function nr(e, t, l, s, c, m) {
        return yi(t), Un(t), fs = -1, rm = e !== null && e.type !== t.type, t.updateQueue = null, l = Ho(
          t,
          s,
          l,
          c
        ), za(e, t), s = Oo(), Qn(), e !== null && !dn ? (Uo(e, t, m), Hl(e, t, m)) : (Tt && s && Oa(t), t.flags |= 1, ha(e, t, l, m), t.child);
      }
      function lr(e, t, l, s, c) {
        switch (E(t)) {
          case !1:
            var m = t.stateNode, S = new t.type(
              t.memoizedProps,
              m.context
            ).state;
            m.updater.enqueueSetState(m, S, null);
            break;
          case !0:
            t.flags |= 128, t.flags |= 65536, m = Error("Simulated error coming from DevTools");
            var _ = c & -c;
            if (t.lanes |= _, S = Wt, S === null)
              throw Error(
                "Expected a work-in-progress root. This is a bug in React. Please file an issue."
              );
            _ = tu(_), tr(
              _,
              S,
              t,
              Ya(m, t)
            ), Ki(t, _);
        }
        if (yi(t), t.stateNode === null) {
          if (S = Sl, m = l.contextType, "contextType" in l && m !== null && (m === void 0 || m.$$typeof !== Gl) && !vA.has(l) && (vA.add(l), _ = m === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof m != "object" ? " However, it is set to a " + typeof m + "." : m.$$typeof === Or ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(m).join(", ") + "}.", console.error(
            "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
            $(l) || "Component",
            _
          )), typeof m == "object" && m !== null && (S = wt(m)), m = new l(s, S), t.mode & 8) {
            gt(!0);
            try {
              m = new l(s, S);
            } finally {
              gt(!1);
            }
          }
          if (S = t.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, m.updater = pv, t.stateNode = m, m._reactInternals = t, m._reactInternalInstance = sA, typeof l.getDerivedStateFromProps == "function" && S === null && (S = $(l) || "Component", oA.has(S) || (oA.add(S), console.error(
            "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
            S,
            m.state === null ? "null" : "undefined",
            S
          ))), typeof l.getDerivedStateFromProps == "function" || typeof m.getSnapshotBeforeUpdate == "function") {
            var j = _ = S = null;
            if (typeof m.componentWillMount == "function" && m.componentWillMount.__suppressDeprecationWarning !== !0 ? S = "componentWillMount" : typeof m.UNSAFE_componentWillMount == "function" && (S = "UNSAFE_componentWillMount"), typeof m.componentWillReceiveProps == "function" && m.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? _ = "componentWillReceiveProps" : typeof m.UNSAFE_componentWillReceiveProps == "function" && (_ = "UNSAFE_componentWillReceiveProps"), typeof m.componentWillUpdate == "function" && m.componentWillUpdate.__suppressDeprecationWarning !== !0 ? j = "componentWillUpdate" : typeof m.UNSAFE_componentWillUpdate == "function" && (j = "UNSAFE_componentWillUpdate"), S !== null || _ !== null || j !== null) {
              m = $(l) || "Component";
              var ae = typeof l.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
              fA.has(m) || (fA.add(m), console.error(
                `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
                m,
                ae,
                S !== null ? `
  ` + S : "",
                _ !== null ? `
  ` + _ : "",
                j !== null ? `
  ` + j : ""
              ));
            }
          }
          m = t.stateNode, S = $(l) || "Component", m.render || (l.prototype && typeof l.prototype.render == "function" ? console.error(
            "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
            S
          ) : console.error(
            "No `render` method found on the %s instance: you may have forgotten to define `render`.",
            S
          )), !m.getInitialState || m.getInitialState.isReactClassApproved || m.state || console.error(
            "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
            S
          ), m.getDefaultProps && !m.getDefaultProps.isReactClassApproved && console.error(
            "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
            S
          ), m.contextType && console.error(
            "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
            S
          ), l.childContextTypes && !hA.has(l) && (hA.add(l), console.error(
            "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
            S
          )), l.contextTypes && !pA.has(l) && (pA.add(l), console.error(
            "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
            S
          )), typeof m.componentShouldUpdate == "function" && console.error(
            "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
            S
          ), l.prototype && l.prototype.isPureReactComponent && typeof m.shouldComponentUpdate < "u" && console.error(
            "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
            $(l) || "A pure component"
          ), typeof m.componentDidUnmount == "function" && console.error(
            "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
            S
          ), typeof m.componentDidReceiveProps == "function" && console.error(
            "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
            S
          ), typeof m.componentWillRecieveProps == "function" && console.error(
            "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
            S
          ), typeof m.UNSAFE_componentWillRecieveProps == "function" && console.error(
            "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
            S
          ), _ = m.props !== s, m.props !== void 0 && _ && console.error(
            "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
            S
          ), m.defaultProps && console.error(
            "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
            S,
            S
          ), typeof m.getSnapshotBeforeUpdate != "function" || typeof m.componentDidUpdate == "function" || rA.has(l) || (rA.add(l), console.error(
            "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
            $(l)
          )), typeof m.getDerivedStateFromProps == "function" && console.error(
            "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
            S
          ), typeof m.getDerivedStateFromError == "function" && console.error(
            "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
            S
          ), typeof l.getSnapshotBeforeUpdate == "function" && console.error(
            "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
            S
          ), (_ = m.state) && (typeof _ != "object" || La(_)) && console.error("%s.state: must be set to an object or null", S), typeof m.getChildContext == "function" && typeof l.childContextTypes != "object" && console.error(
            "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
            S
          ), m = t.stateNode, m.props = s, m.state = t.memoizedState, m.refs = {}, Na(t), S = l.contextType, m.context = typeof S == "object" && S !== null ? wt(S) : Sl, m.state === s && (S = $(l) || "Component", dA.has(S) || (dA.add(S), console.error(
            "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
            S
          ))), t.mode & 8 && ku.recordLegacyContextWarning(
            t,
            m
          ), ku.recordUnsafeLifecycleWarnings(
            t,
            m
          ), m.state = t.memoizedState, S = l.getDerivedStateFromProps, typeof S == "function" && (vn(
            t,
            l,
            S,
            s
          ), m.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof m.getSnapshotBeforeUpdate == "function" || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (S = m.state, typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount(), S !== m.state && (console.error(
            "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
            Z(t) || "Component"
          ), pv.enqueueReplaceState(
            m,
            m.state,
            null
          )), Ms(t, s, m, c), si(), m.state = t.memoizedState), typeof m.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & 16) !== ta && (t.flags |= 67108864), m = !0;
        } else if (e === null) {
          m = t.stateNode;
          var Re = t.memoizedProps;
          _ = dl(l, Re), m.props = _;
          var Ue = m.context;
          j = l.contextType, S = Sl, typeof j == "object" && j !== null && (S = wt(j)), ae = l.getDerivedStateFromProps, j = typeof ae == "function" || typeof m.getSnapshotBeforeUpdate == "function", Re = t.pendingProps !== Re, j || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (Re || Ue !== S) && eu(
            t,
            m,
            s,
            S
          ), uc = !1;
          var Je = t.memoizedState;
          m.state = Je, Ms(t, s, m, c), si(), Ue = t.memoizedState, Re || Je !== Ue || uc ? (typeof ae == "function" && (vn(
            t,
            l,
            ae,
            s
          ), Ue = t.memoizedState), (_ = uc || Vf(
            t,
            l,
            _,
            s,
            Je,
            Ue,
            S
          )) ? (j || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & 16) !== ta && (t.flags |= 67108864)) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & 16) !== ta && (t.flags |= 67108864), t.memoizedProps = s, t.memoizedState = Ue), m.props = s, m.state = Ue, m.context = S, m = _) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & 16) !== ta && (t.flags |= 67108864), m = !1);
        } else {
          m = t.stateNode, rl(e, t), S = t.memoizedProps, j = dl(l, S), m.props = j, ae = t.pendingProps, Je = m.context, Ue = l.contextType, _ = Sl, typeof Ue == "object" && Ue !== null && (_ = wt(Ue)), Re = l.getDerivedStateFromProps, (Ue = typeof Re == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (S !== ae || Je !== _) && eu(
            t,
            m,
            s,
            _
          ), uc = !1, Je = t.memoizedState, m.state = Je, Ms(t, s, m, c), si();
          var Et = t.memoizedState;
          S !== ae || Je !== Et || uc || e !== null && e.dependencies !== null && or(e.dependencies) ? (typeof Re == "function" && (vn(
            t,
            l,
            Re,
            s
          ), Et = t.memoizedState), (j = uc || Vf(
            t,
            l,
            j,
            s,
            Je,
            Et,
            _
          ) || e !== null && e.dependencies !== null && or(e.dependencies)) ? (Ue || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(s, Et, _), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(
            s,
            Et,
            _
          )), typeof m.componentDidUpdate == "function" && (t.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || S === e.memoizedProps && Je === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || S === e.memoizedProps && Je === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = Et), m.props = s, m.state = Et, m.context = _, m = j) : (typeof m.componentDidUpdate != "function" || S === e.memoizedProps && Je === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || S === e.memoizedProps && Je === e.memoizedState || (t.flags |= 1024), m = !1);
        }
        if (_ = m, hi(e, t), S = (t.flags & 128) !== 0, _ || S) {
          if (_ = t.stateNode, le.getCurrentStack = t === null ? null : Xe, wa = !1, Ia = t, S && typeof l.getDerivedStateFromError != "function")
            l = null, Bl = -1;
          else {
            if (Un(t), l = Xy(_), t.mode & 8) {
              gt(!0);
              try {
                Xy(_);
              } finally {
                gt(!1);
              }
            }
            Qn();
          }
          t.flags |= 1, e !== null && S ? (t.child = co(
            t,
            e.child,
            null,
            c
          ), t.child = co(
            t,
            null,
            l,
            c
          )) : ha(
            e,
            t,
            l,
            c
          ), t.memoizedState = _.state, e = t.child;
        } else
          e = Hl(
            e,
            t,
            c
          );
        return c = t.stateNode, m && c.props !== s && (lf || console.error(
          "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
          Z(t) || "a component"
        ), lf = !0), e;
      }
      function ur(e, t, l, s) {
        return oe(), t.flags |= 256, ha(e, t, l, s), t.child;
      }
      function ir(e, t) {
        t && t.childContextTypes && console.error(
          `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
          t.displayName || t.name || "Component"
        ), typeof t.getDerivedStateFromProps == "function" && (e = $(t) || "Unknown", CA[e] || (console.error(
          "%s: Function components do not support getDerivedStateFromProps.",
          e
        ), CA[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = $(t) || "Unknown", BA[t] || (console.error(
          "%s: Function components do not support contextType.",
          t
        ), BA[t] = !0));
      }
      function Gc(e) {
        return { baseLanes: e, cachePool: kf() };
      }
      function yn(e, t, l) {
        return e = e !== null ? e.childLanes & ~l : 0, t && (e |= Ql), e;
      }
      function If(e, t, l) {
        var s = t.pendingProps;
        B(t) && (t.flags |= 128);
        var c = !1, m = (t.flags & 128) !== 0, S;
        if ((S = m) || (S = e !== null && e.memoizedState === null ? !1 : (en.current & cm) !== 0), S && (c = !0, t.flags &= -129), S = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
          if (Tt) {
            if (c ? Nu(t) : Il(t), Tt) {
              var _ = Tn, j;
              (j = !_) || (j = bp(
                _,
                Oi
              ), j !== null ? (Ua(), t.memoizedState = {
                dehydrated: j,
                treeContext: ea !== null ? { id: ot, overflow: fn } : null,
                retryLane: 536870912
              }, m = C(18, null, null, ta), m.stateNode = j, m.return = t, t.child = m, tl = t, Tn = null, j = !0) : j = !1, j = !j), j && (It(t, _), g(t));
            }
            if (_ = t.memoizedState, _ !== null && (_ = _.dehydrated, _ !== null))
              return qd(_) ? t.lanes = 16 : t.lanes = 536870912, null;
            wl(t);
          }
          return _ = s.children, s = s.fallback, c ? (Il(t), c = t.mode, _ = sr(
            { mode: "hidden", children: _ },
            c
          ), s = Wi(
            s,
            c,
            l,
            null
          ), _.return = t, s.return = t, _.sibling = s, t.child = _, c = t.child, c.memoizedState = Gc(l), c.childLanes = yn(
            e,
            S,
            l
          ), t.memoizedState = yv, s) : (Nu(t), qa(t, _));
        }
        if (j = e.memoizedState, j !== null && (_ = j.dehydrated, _ !== null)) {
          if (m)
            t.flags & 256 ? (Nu(t), t.flags &= -257, t = zc(
              e,
              t,
              l
            )) : t.memoizedState !== null ? (Il(t), t.child = e.child, t.flags |= 128, t = null) : (Il(t), c = s.fallback, _ = t.mode, s = sr(
              { mode: "visible", children: s.children },
              _
            ), c = Wi(
              c,
              _,
              l,
              null
            ), c.flags |= 2, s.return = t, c.return = t, s.sibling = c, t.child = s, co(
              t,
              e.child,
              null,
              l
            ), s = t.child, s.memoizedState = Gc(l), s.childLanes = yn(
              e,
              S,
              l
            ), t.memoizedState = yv, t = c);
          else if (Nu(t), Tt && console.error(
            "We should not be hydrating here. This is a bug in React. Please file a bug."
          ), qd(_))
            _ = wh(_), S = _.digest, c = _.message, s = _.stack, _ = _.componentStack, c = Error(c || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), c.stack = s || "", c.digest = S, S = _ === void 0 ? null : _, s = {
              value: c,
              source: null,
              stack: S
            }, typeof S == "string" && F.set(c, s), ie(s), t = zc(
              e,
              t,
              l
            );
          else if (dn || Jc(
            e,
            t,
            l,
            !1
          ), S = (l & e.childLanes) !== 0, dn || S) {
            if (S = Wt, S !== null) {
              if (s = l & -l, (s & 42) !== 0) s = 1;
              else
                switch (s) {
                  case 2:
                    s = 1;
                    break;
                  case 8:
                    s = 4;
                    break;
                  case 32:
                    s = 16;
                    break;
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
                    s = 64;
                    break;
                  case 268435456:
                    s = 134217728;
                    break;
                  default:
                    s = 0;
                }
              if (s = (s & (S.suspendedLanes | l)) !== 0 ? 0 : s, s !== 0 && s !== j.retryLane)
                throw j.retryLane = s, Ee(e, s), na(S, e, s), EA;
            }
            xl(_) || Td(), t = zc(
              e,
              t,
              l
            );
          } else
            xl(_) ? (t.flags |= 128, t.child = e.child, t = sp.bind(
              null,
              e
            ), Ph(_, t), t = null) : (e = j.treeContext, gn && (Tn = Fd(_), tl = t, Tt = !0, Wu = null, os = !1, hu = null, Oi = !1, e !== null && (Ua(), qe[it++] = ot, qe[it++] = fn, qe[it++] = ea, ot = e.id, fn = e.overflow, ea = t)), t = qa(
              t,
              s.children
            ), t.flags |= 4096);
          return t;
        }
        return c ? (Il(t), c = s.fallback, _ = t.mode, j = e.child, m = j.sibling, s = gi(j, {
          mode: "hidden",
          children: s.children
        }), s.subtreeFlags = j.subtreeFlags & 31457280, m !== null ? c = gi(m, c) : (c = Wi(
          c,
          _,
          l,
          null
        ), c.flags |= 2), c.return = t, s.return = t, s.sibling = c, t.child = s, s = c, c = t.child, _ = e.child.memoizedState, _ === null ? _ = Gc(l) : (j = _.cachePool, j !== null ? (m = Ea ? Ca._currentValue : Ca._currentValue2, j = j.parent !== m ? { parent: m, pool: m } : j) : j = kf(), _ = {
          baseLanes: _.baseLanes | l,
          cachePool: j
        }), c.memoizedState = _, c.childLanes = yn(
          e,
          S,
          l
        ), t.memoizedState = yv, s) : (Nu(t), l = e.child, e = l.sibling, l = gi(l, {
          mode: "visible",
          children: s.children
        }), l.return = t, l.sibling = null, e !== null && (S = t.deletions, S === null ? (t.deletions = [e], t.flags |= 16) : S.push(e)), t.child = l, t.memoizedState = null, l);
      }
      function qa(e, t) {
        return t = sr(
          { mode: "visible", children: t },
          e.mode
        ), t.return = e, e.child = t;
      }
      function sr(e, t) {
        return hp(e, t, 0, null);
      }
      function zc(e, t, l) {
        return co(t, e.child, null, l), e = qa(
          t,
          t.pendingProps.children
        ), e.flags |= 2, t.memoizedState = null, e;
      }
      function wf(e, t, l) {
        e.lanes |= t;
        var s = e.alternate;
        s !== null && (s.lanes |= t), Lc(
          e.return,
          t,
          l
        );
      }
      function Xm(e, t) {
        var l = La(e);
        return e = !l && typeof N(e) == "function", l || e ? (l = l ? "array" : "iterable", console.error(
          "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
          l,
          t,
          l
        ), !1) : !0;
      }
      function _l(e, t, l, s, c) {
        var m = e.memoizedState;
        m === null ? e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: s,
          tail: l,
          tailMode: c
        } : (m.isBackwards = t, m.rendering = null, m.renderingStartTime = 0, m.last = s, m.tail = l, m.tailMode = c);
      }
      function Pf(e, t, l) {
        var s = t.pendingProps, c = s.revealOrder, m = s.tail;
        if (s = s.children, c !== void 0 && c !== "forwards" && c !== "backwards" && c !== "together" && !TA[c])
          if (TA[c] = !0, typeof c == "string")
            switch (c.toLowerCase()) {
              case "together":
              case "forwards":
              case "backwards":
                console.error(
                  '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                  c,
                  c.toLowerCase()
                );
                break;
              case "forward":
              case "backward":
                console.error(
                  '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                  c,
                  c.toLowerCase()
                );
                break;
              default:
                console.error(
                  '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                  c
                );
            }
          else
            console.error(
              '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
              c
            );
        m === void 0 || vv[m] || (m !== "collapsed" && m !== "hidden" ? (vv[m] = !0, console.error(
          '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
          m
        )) : c !== "forwards" && c !== "backwards" && (vv[m] = !0, console.error(
          '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
          m
        )));
        e: if ((c === "forwards" || c === "backwards") && s !== void 0 && s !== null && s !== !1)
          if (La(s)) {
            for (var S = 0; S < s.length; S++)
              if (!Xm(s[S], S)) break e;
          } else if (S = N(s), typeof S == "function") {
            if (S = S.call(s))
              for (var _ = S.next(), j = 0; !_.done; _ = S.next()) {
                if (!Xm(_.value, j)) break e;
                j++;
              }
          } else
            console.error(
              'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
              c
            );
        if (ha(e, t, s, l), s = en.current, (s & cm) !== 0)
          s = s & ef | cm, t.flags |= 128;
        else {
          if (e !== null && (e.flags & 128) !== 0)
            e: for (e = t.child; e !== null; ) {
              if (e.tag === 13)
                e.memoizedState !== null && wf(
                  e,
                  l,
                  t
                );
              else if (e.tag === 19)
                wf(e, l, t);
              else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
              }
              if (e === t) break e;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                  break e;
                e = e.return;
              }
              e.sibling.return = e.return, e = e.sibling;
            }
          s &= ef;
        }
        switch (de(en, s, t), c) {
          case "forwards":
            for (l = t.child, c = null; l !== null; )
              e = l.alternate, e !== null && Rc(e) === null && (c = l), l = l.sibling;
            l = c, l === null ? (c = t.child, t.child = null) : (c = l.sibling, l.sibling = null), _l(
              t,
              !1,
              c,
              l,
              m
            );
            break;
          case "backwards":
            for (l = null, c = t.child, t.child = null; c !== null; ) {
              if (e = c.alternate, e !== null && Rc(e) === null) {
                t.child = c;
                break;
              }
              e = c.sibling, c.sibling = l, l = c, c = e;
            }
            _l(
              t,
              !0,
              l,
              null,
              m
            );
            break;
          case "together":
            _l(t, !1, null, null, void 0);
            break;
          default:
            t.memoizedState = null;
        }
        return t.child;
      }
      function Hl(e, t, l) {
        if (e !== null && (t.dependencies = e.dependencies), Bl = -1, fc |= t.lanes, (l & t.childLanes) === 0)
          if (e !== null) {
            if (Jc(
              e,
              t,
              l,
              !1
            ), (l & t.childLanes) === 0)
              return null;
          } else return null;
        if (e !== null && t.child !== e.child)
          throw Error("Resuming work not yet implemented.");
        if (t.child !== null) {
          for (e = t.child, l = gi(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
            e = e.sibling, l = l.sibling = gi(e, e.pendingProps), l.return = t;
          l.sibling = null;
        }
        return t.child;
      }
      function vi(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && or(e)));
      }
      function Vm(e, t, l) {
        switch (t.tag) {
          case 3:
            Ae(
              t,
              t.stateNode.containerInfo
            ), xu(
              t,
              Ca,
              e.memoizedState.cache
            ), oe();
            break;
          case 27:
          case 5:
            be(t);
            break;
          case 4:
            Ae(
              t,
              t.stateNode.containerInfo
            );
            break;
          case 10:
            xu(
              t,
              t.type,
              t.memoizedProps.value
            );
            break;
          case 12:
            (l & t.childLanes) !== 0 && (t.flags |= 4), t.flags |= 2048;
            var s = t.stateNode;
            s.effectDuration = -0, s.passiveEffectDuration = -0;
            break;
          case 13:
            if (s = t.memoizedState, s !== null)
              return s.dehydrated !== null ? (Nu(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? If(
                e,
                t,
                l
              ) : (Nu(t), e = Hl(
                e,
                t,
                l
              ), e !== null ? e.sibling : null);
            Nu(t);
            break;
          case 19:
            var c = (e.flags & 128) !== 0;
            if (s = (l & t.childLanes) !== 0, s || (Jc(
              e,
              t,
              l,
              !1
            ), s = (l & t.childLanes) !== 0), c) {
              if (s)
                return Pf(
                  e,
                  t,
                  l
                );
              t.flags |= 128;
            }
            if (c = t.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), de(
              en,
              en.current,
              t
            ), s) break;
            return null;
          case 22:
          case 23:
            return t.lanes = 0, Ls(e, t, l);
          case 24:
            xu(
              t,
              Ca,
              e.memoizedState.cache
            );
        }
        return Hl(e, t, l);
      }
      function cr(e, t, l) {
        if (t._debugNeedsRemount && e !== null) {
          l = Ud(
            t.type,
            t.key,
            t.pendingProps,
            t._debugOwner || null,
            t.mode,
            t.lanes
          );
          var s = t.return;
          if (s === null) throw Error("Cannot swap the root fiber.");
          if (e.alternate = null, t.alternate = null, l.index = t.index, l.sibling = t.sibling, l.return = t.return, l.ref = t.ref, l._debugInfo = t._debugInfo, t === s.child)
            s.child = l;
          else {
            var c = s.child;
            if (c === null)
              throw Error("Expected parent to have a child.");
            for (; c.sibling !== t; )
              if (c = c.sibling, c === null)
                throw Error("Expected to find the previous sibling.");
            c.sibling = l;
          }
          return t = s.deletions, t === null ? (s.deletions = [e], s.flags |= 16) : t.push(e), l.flags |= 2, l;
        }
        if (e !== null)
          if (e.memoizedProps !== t.pendingProps || t.type !== e.type)
            dn = !0;
          else {
            if (!vi(e, l) && (t.flags & 128) === 0)
              return dn = !1, Vm(
                e,
                t,
                l
              );
            dn = (e.flags & 131072) !== 0;
          }
        else
          dn = !1, (s = Tt) && (Ua(), s = (t.flags & 1048576) !== 0), s && (s = t.index, Ua(), ui(t, Yt, s));
        switch (t.lanes = 0, t.tag) {
          case 16:
            e: if (s = t.pendingProps, e = ic(t.elementType), t.type = e, typeof e == "function")
              Od(e) ? (s = dl(
                e,
                s
              ), t.tag = 1, t.type = e = Bi(e), t = lr(
                null,
                t,
                e,
                s,
                l
              )) : (t.tag = 0, ir(t, e), t.type = e = Bi(e), t = ar(
                null,
                t,
                e,
                s,
                l
              ));
            else {
              if (e != null) {
                if (c = e.$$typeof, c === uu) {
                  t.tag = 11, t.type = e = _d(e), t = pi(
                    null,
                    t,
                    e,
                    s,
                    l
                  );
                  break e;
                } else if (c === Ur) {
                  t.tag = 14, t = Zf(
                    null,
                    t,
                    e,
                    s,
                    l
                  );
                  break e;
                }
              }
              throw t = "", e !== null && typeof e == "object" && e.$$typeof === Wn && (t = " Did you wrap a component in React.lazy() more than once?"), e = $(e) || e, Error(
                "Element type is invalid. Received a promise that resolves to: " + e + ". Lazy element type must resolve to a class or function." + t
              );
            }
            return t;
          case 0:
            return ar(
              e,
              t,
              t.type,
              t.pendingProps,
              l
            );
          case 1:
            return s = t.type, c = dl(
              s,
              t.pendingProps
            ), lr(
              e,
              t,
              s,
              c,
              l
            );
          case 3:
            e: {
              if (Ae(
                t,
                t.stateNode.containerInfo
              ), e === null)
                throw Error(
                  "Should have a current fiber. This is a bug in React."
                );
              var m = t.pendingProps;
              c = t.memoizedState, s = c.element, rl(e, t), Ms(t, m, null, l);
              var S = t.memoizedState;
              if (m = S.cache, xu(t, Ca, m), m !== c.cache && Wf(
                t,
                [Ca],
                l,
                !0
              ), si(), m = S.element, gn && c.isDehydrated)
                if (c = {
                  element: m,
                  isDehydrated: !1,
                  cache: S.cache
                }, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
                  t = ur(
                    e,
                    t,
                    m,
                    l
                  );
                  break e;
                } else if (m !== s) {
                  s = Ya(
                    Error(
                      "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                    ),
                    t
                  ), ie(s), t = ur(
                    e,
                    t,
                    m,
                    l
                  );
                  break e;
                } else
                  for (gn && (Tn = da(
                    t.stateNode.containerInfo
                  ), tl = t, Tt = !0, Wu = null, os = !1, hu = null, Oi = !0), e = nA(
                    t,
                    null,
                    m,
                    l
                  ), t.child = e; e; )
                    e.flags = e.flags & -3 | 4096, e = e.sibling;
              else {
                if (oe(), m === s) {
                  t = Hl(
                    e,
                    t,
                    l
                  );
                  break e;
                }
                ha(
                  e,
                  t,
                  m,
                  l
                );
              }
              t = t.child;
            }
            return t;
          case 26:
            if (We)
              return hi(e, t), e === null ? (e = Jn(
                t.type,
                null,
                t.pendingProps,
                null
              )) ? t.memoizedState = e : Tt || (t.stateNode = _i(
                t.type,
                t.pendingProps,
                Y(lc.current),
                t
              )) : t.memoizedState = Jn(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              ), null;
          case 27:
            if (ga)
              return be(t), e === null && ga && Tt && (c = Y(
                lc.current
              ), s = et(), c = t.stateNode = Jl(
                t.type,
                t.pendingProps,
                c,
                s,
                !1
              ), os || (s = to(
                c,
                t.type,
                t.pendingProps,
                s
              ), s !== null && (Xn(t, 0).serverProps = s)), tl = t, Oi = !0, Tn = fu(c)), s = t.pendingProps.children, e !== null || Tt ? ha(
                e,
                t,
                s,
                l
              ) : t.child = co(
                t,
                null,
                s,
                l
              ), hi(e, t), t.child;
          case 5:
            return e === null && Tt && (m = et(), s = jt(
              t.type,
              t.pendingProps,
              m
            ), c = Tn, (S = !c) || (S = Mp(
              c,
              t.type,
              t.pendingProps,
              Oi
            ), S !== null ? (t.stateNode = S, os || (m = to(
              S,
              t.type,
              t.pendingProps,
              m
            ), m !== null && (Xn(t, 0).serverProps = m)), tl = t, Tn = fu(S), Oi = !1, m = !0) : m = !1, S = !m), S && (s && It(t, c), g(t))), be(t), c = t.type, m = t.pendingProps, S = e !== null ? e.memoizedProps : null, s = m.children, Da(c, m) ? s = null : S !== null && Da(c, S) && (t.flags |= 32), t.memoizedState !== null && (c = zf(
              e,
              t,
              Km,
              null,
              null,
              l
            ), Ea ? wu._currentValue = c : wu._currentValue2 = c), hi(e, t), ha(
              e,
              t,
              s,
              l
            ), t.child;
          case 6:
            return e === null && Tt && (e = t.pendingProps, l = et(), e = qt(e, l), l = Tn, (s = !l) || (s = Ka(
              l,
              t.pendingProps,
              Oi
            ), s !== null ? (t.stateNode = s, tl = t, Tn = null, s = !0) : s = !1, s = !s), s && (e && It(t, l), g(t))), null;
          case 13:
            return If(e, t, l);
          case 4:
            return Ae(
              t,
              t.stateNode.containerInfo
            ), s = t.pendingProps, e === null ? t.child = co(
              t,
              null,
              s,
              l
            ) : ha(
              e,
              t,
              s,
              l
            ), t.child;
          case 11:
            return pi(
              e,
              t,
              t.type,
              t.pendingProps,
              l
            );
          case 7:
            return ha(
              e,
              t,
              t.pendingProps,
              l
            ), t.child;
          case 8:
            return ha(
              e,
              t,
              t.pendingProps.children,
              l
            ), t.child;
          case 12:
            return t.flags |= 4, t.flags |= 2048, s = t.stateNode, s.effectDuration = -0, s.passiveEffectDuration = -0, ha(
              e,
              t,
              t.pendingProps.children,
              l
            ), t.child;
          case 10:
            return s = t.type, c = t.pendingProps, m = c.value, "value" in c || RA || (RA = !0, console.error(
              "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
            )), xu(t, s, m), ha(
              e,
              t,
              c.children,
              l
            ), t.child;
          case 9:
            return c = t.type._context, s = t.pendingProps.children, typeof s != "function" && console.error(
              "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
            ), yi(t), c = wt(c), Un(t), s = ov(
              s,
              c,
              void 0
            ), Qn(), t.flags |= 1, ha(
              e,
              t,
              s,
              l
            ), t.child;
          case 14:
            return Zf(
              e,
              t,
              t.type,
              t.pendingProps,
              l
            );
          case 15:
            return qf(
              e,
              t,
              t.type,
              t.pendingProps,
              l
            );
          case 19:
            return Pf(
              e,
              t,
              l
            );
          case 22:
            return Ls(e, t, l);
          case 24:
            return yi(t), s = wt(Ca), e === null ? (c = fr(), c === null && (c = Wt, m = rr(), c.pooledCache = m, Ai(m), m !== null && (c.pooledCacheLanes |= l), c = m), t.memoizedState = {
              parent: s,
              cache: c
            }, Na(t), xu(t, Ca, c)) : ((e.lanes & l) !== 0 && (rl(e, t), Ms(t, null, null, l), si()), c = e.memoizedState, m = t.memoizedState, c.parent !== s ? (c = {
              parent: s,
              cache: s
            }, t.memoizedState = c, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = c), xu(t, Ca, s)) : (s = m.cache, xu(t, Ca, s), s !== c.cache && Wf(
              t,
              [Ca],
              l,
              !0
            ))), ha(
              e,
              t,
              t.pendingProps.children,
              l
            ), t.child;
          case 29:
            throw t.pendingProps;
        }
        throw Error(
          "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
        );
      }
      function xc() {
        uf = Vp = null, sf = !1;
      }
      function xu(e, t, l) {
        Ea ? (de(Yp, t._currentValue, e), t._currentValue = l, de(Av, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Xp && console.error(
          "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
        ), t._currentRenderer = Xp) : (de(Yp, t._currentValue2, e), t._currentValue2 = l, de(Ev, t._currentRenderer2, e), t._currentRenderer2 !== void 0 && t._currentRenderer2 !== null && t._currentRenderer2 !== Xp && console.error(
          "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
        ), t._currentRenderer2 = Xp);
      }
      function Ol(e, t) {
        var l = Yp.current;
        Ea ? (e._currentValue = l, l = Av.current, me(Av, t), e._currentRenderer = l) : (e._currentValue2 = l, l = Ev.current, me(Ev, t), e._currentRenderer2 = l), me(Yp, t);
      }
      function Lc(e, t, l) {
        for (; e !== null; ) {
          var s = e.alternate;
          if ((e.childLanes & t) !== t ? (e.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), e === l) break;
          e = e.return;
        }
        e !== l && console.error(
          "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
        );
      }
      function Wf(e, t, l, s) {
        var c = e.child;
        for (c !== null && (c.return = e); c !== null; ) {
          var m = c.dependencies;
          if (m !== null) {
            var S = c.child;
            m = m.firstContext;
            e: for (; m !== null; ) {
              var _ = m;
              m = c;
              for (var j = 0; j < t.length; j++)
                if (_.context === t[j]) {
                  m.lanes |= l, _ = m.alternate, _ !== null && (_.lanes |= l), Lc(
                    m.return,
                    l,
                    e
                  ), s || (S = null);
                  break e;
                }
              m = _.next;
            }
          } else if (c.tag === 18) {
            if (S = c.return, S === null)
              throw Error(
                "We just came from a parent so we must have had a parent. This is a bug in React."
              );
            S.lanes |= l, m = S.alternate, m !== null && (m.lanes |= l), Lc(
              S,
              l,
              e
            ), S = null;
          } else S = c.child;
          if (S !== null) S.return = c;
          else
            for (S = c; S !== null; ) {
              if (S === e) {
                S = null;
                break;
              }
              if (c = S.sibling, c !== null) {
                c.return = S.return, S = c;
                break;
              }
              S = S.return;
            }
          c = S;
        }
      }
      function Jc(e, t, l, s) {
        e = null;
        for (var c = t, m = !1; c !== null; ) {
          if (!m) {
            if ((c.flags & 524288) !== 0) m = !0;
            else if ((c.flags & 262144) !== 0) break;
          }
          if (c.tag === 10) {
            var S = c.alternate;
            if (S === null)
              throw Error("Should have a current fiber. This is a bug in React.");
            if (S = S.memoizedProps, S !== null) {
              var _ = c.type;
              w(c.pendingProps.value, S.value) || (e !== null ? e.push(_) : e = [_]);
            }
          } else if (c === _p.current) {
            if (S = c.alternate, S === null)
              throw Error("Should have a current fiber. This is a bug in React.");
            S.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(wu) : e = [wu]);
          }
          c = c.return;
        }
        e !== null && Wf(
          t,
          e,
          l,
          s
        ), t.flags |= 262144;
      }
      function or(e) {
        for (e = e.firstContext; e !== null; ) {
          var t = e.context;
          if (!w(
            Ea ? t._currentValue : t._currentValue2,
            e.memoizedValue
          ))
            return !0;
          e = e.next;
        }
        return !1;
      }
      function yi(e) {
        Vp = e, uf = null, e = e.dependencies, e !== null && (e.firstContext = null);
      }
      function wt(e) {
        return sf && console.error(
          "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
        ), Kc(Vp, e);
      }
      function Lu(e, t) {
        return Vp === null && yi(e), Kc(e, t);
      }
      function Kc(e, t) {
        var l = Ea ? t._currentValue : t._currentValue2;
        if (t = { context: t, memoizedValue: l, next: null }, uf === null) {
          if (e === null)
            throw Error(
              "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
            );
          uf = t, e.dependencies = {
            lanes: 0,
            firstContext: t,
            _debugThenableState: null
          }, e.flags |= 524288;
        } else uf = uf.next = t;
        return l;
      }
      function rr() {
        return {
          controller: new F0(),
          data: /* @__PURE__ */ new Map(),
          refCount: 0
        };
      }
      function Ai(e) {
        e.controller.signal.aborted && console.warn(
          "A cache instance was retained after it was already freed. This likely indicates a bug in React."
        ), e.refCount++;
      }
      function jc(e) {
        e.refCount--, 0 > e.refCount && console.warn(
          "A cache instance was released after it was already freed. This likely indicates a bug in React."
        ), e.refCount === 0 && I0(w0, function() {
          e.controller.abort();
        });
      }
      function fr() {
        var e = mo.current;
        return e !== null ? e : Wt.pooledCache;
      }
      function au(e, t) {
        t === null ? de(mo, mo.current, e) : de(mo, t.pool, e);
      }
      function kf() {
        var e = fr();
        return e === null ? null : {
          parent: Ea ? Ca._currentValue : Ca._currentValue2,
          pool: e
        };
      }
      function st(e) {
        e.flags |= 4;
      }
      function dr(e, t) {
        if (e !== null && e.child === t.child) return !1;
        if ((t.flags & 16) !== 0) return !0;
        for (e = t.child; e !== null; ) {
          if ((e.flags & 13878) !== 0 || (e.subtreeFlags & 13878) !== 0)
            return !0;
          e = e.sibling;
        }
        return !1;
      }
      function $f(e, t, l, s) {
        if (va)
          for (l = t.child; l !== null; ) {
            if (l.tag === 5 || l.tag === 6)
              qs(e, l.stateNode);
            else if (!(l.tag === 4 || ga && l.tag === 27) && l.child !== null) {
              l.child.return = l, l = l.child;
              continue;
            }
            if (l === t) break;
            for (; l.sibling === null; ) {
              if (l.return === null || l.return === t)
                return;
              l = l.return;
            }
            l.sibling.return = l.return, l = l.sibling;
          }
        else if (su)
          for (var c = t.child; c !== null; ) {
            if (c.tag === 5) {
              var m = c.stateNode;
              l && s && (m = $c(
                m,
                c.type,
                c.memoizedProps
              )), qs(e, m);
            } else if (c.tag === 6)
              m = c.stateNode, l && s && (m = Di(
                m,
                c.memoizedProps
              )), qs(e, m);
            else if (c.tag !== 4) {
              if (c.tag === 22 && c.memoizedState !== null)
                m = c.child, m !== null && (m.return = c), $f(e, c, !0, !0);
              else if (c.child !== null) {
                c.child.return = c, c = c.child;
                continue;
              }
            }
            if (c === t) break;
            for (; c.sibling === null; ) {
              if (c.return === null || c.return === t)
                return;
              c = c.return;
            }
            c.sibling.return = c.return, c = c.sibling;
          }
      }
      function ed(e, t, l, s) {
        if (su)
          for (var c = t.child; c !== null; ) {
            if (c.tag === 5) {
              var m = c.stateNode;
              l && s && (m = $c(
                m,
                c.type,
                c.memoizedProps
              )), Zd(e, m);
            } else if (c.tag === 6)
              m = c.stateNode, l && s && (m = Di(
                m,
                c.memoizedProps
              )), Zd(e, m);
            else if (c.tag !== 4) {
              if (c.tag === 22 && c.memoizedState !== null)
                m = c.child, m !== null && (m.return = c), ed(
                  e,
                  c,
                  !(c.memoizedProps !== null && c.memoizedProps.mode === "manual"),
                  !0
                );
              else if (c.child !== null) {
                c.child.return = c, c = c.child;
                continue;
              }
            }
            if (c === t) break;
            for (; c.sibling === null; ) {
              if (c.return === null || c.return === t) return;
              c = c.return;
            }
            c.sibling.return = c.return, c = c.sibling;
          }
      }
      function Zm(e, t) {
        if (su && dr(e, t)) {
          e = t.stateNode;
          var l = e.containerInfo, s = Vd();
          ed(s, t, !1, !1), e.pendingChildren = s, st(t), Ja(l, s);
        }
      }
      function td(e, t, l, s) {
        if (va)
          e.memoizedProps !== s && st(t);
        else if (su) {
          var c = e.stateNode, m = e.memoizedProps;
          if ((e = dr(e, t)) || m !== s) {
            var S = et();
            m = Xd(
              c,
              l,
              m,
              s,
              !e,
              null
            ), m === c ? t.stateNode = c : (on(
              m,
              l,
              s,
              S
            ) && st(t), t.stateNode = m, e ? $f(m, t, !1, !1) : st(t));
          } else t.stateNode = c;
        }
      }
      function ad(e, t, l) {
        if (Is(t, l)) {
          if (e.flags |= 16777216, !as(t, l))
            if (Vs()) e.flags |= 8192;
            else
              throw Wr = Lp, cv;
        } else e.flags &= -16777217;
      }
      function qm(e, t) {
        if (wd(t)) {
          if (e.flags |= 16777216, !el(t))
            if (Vs()) e.flags |= 8192;
            else
              throw Wr = Lp, cv;
        } else e.flags &= -16777217;
      }
      function Js(e, t) {
        t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Tl() : 536870912, e.lanes |= t, vo |= t);
      }
      function ml(e, t) {
        if (!Tt)
          switch (e.tailMode) {
            case "hidden":
              t = e.tail;
              for (var l = null; t !== null; )
                t.alternate !== null && (l = t), t = t.sibling;
              l === null ? e.tail = null : l.sibling = null;
              break;
            case "collapsed":
              l = e.tail;
              for (var s = null; l !== null; )
                l.alternate !== null && (s = l), l = l.sibling;
              s === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : s.sibling = null;
          }
      }
      function Pt(e) {
        var t = e.alternate !== null && e.alternate.child === e.child, l = 0, s = 0;
        if (t)
          if ((e.mode & 2) !== ta) {
            for (var c = e.selfBaseDuration, m = e.child; m !== null; )
              l |= m.lanes | m.childLanes, s |= m.subtreeFlags & 31457280, s |= m.flags & 31457280, c += m.treeBaseDuration, m = m.sibling;
            e.treeBaseDuration = c;
          } else
            for (c = e.child; c !== null; )
              l |= c.lanes | c.childLanes, s |= c.subtreeFlags & 31457280, s |= c.flags & 31457280, c.return = e, c = c.sibling;
        else if ((e.mode & 2) !== ta) {
          c = e.actualDuration, m = e.selfBaseDuration;
          for (var S = e.child; S !== null; )
            l |= S.lanes | S.childLanes, s |= S.subtreeFlags, s |= S.flags, c += S.actualDuration, m += S.treeBaseDuration, S = S.sibling;
          e.actualDuration = c, e.treeBaseDuration = m;
        } else
          for (c = e.child; c !== null; )
            l |= c.lanes | c.childLanes, s |= c.subtreeFlags, s |= c.flags, c.return = e, c = c.sibling;
        return e.subtreeFlags |= s, e.childLanes = l, t;
      }
      function mr(e, t, l) {
        var s = t.pendingProps;
        switch (Jt(t), t.tag) {
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return Pt(t), null;
          case 1:
            return Pt(t), null;
          case 3:
            return l = t.stateNode, s = null, e !== null && (s = e.memoizedState.cache), t.memoizedState.cache !== s && (t.flags |= 2048), Ol(Ca, t), ze(t), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (k(t) ? (Me(), st(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Wu !== null && (Vu(Wu), Wu = null))), Zm(e, t), Pt(t), null;
          case 26:
            if (We) {
              l = t.type;
              var c = t.memoizedState;
              return e === null ? (st(t), c !== null ? (Pt(t), qm(
                t,
                c
              )) : (Pt(t), ad(
                t,
                l,
                s
              ))) : c ? c !== e.memoizedState ? (st(t), Pt(t), qm(
                t,
                c
              )) : (Pt(t), t.flags &= -16777217) : (va ? e.memoizedProps !== s && st(t) : td(
                e,
                t,
                l,
                s
              ), Pt(t), ad(
                t,
                l,
                s
              )), null;
            }
          case 27:
            if (ga) {
              if (aa(t), l = Y(lc.current), c = t.type, e !== null && t.stateNode != null)
                va ? e.memoizedProps !== s && st(t) : td(
                  e,
                  t,
                  c,
                  s
                );
              else {
                if (!s) {
                  if (t.stateNode === null)
                    throw Error(
                      "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                    );
                  return Pt(t), null;
                }
                e = et(), k(t) ? H(t, e) : (e = Jl(
                  c,
                  s,
                  l,
                  e,
                  !0
                ), t.stateNode = e, st(t));
              }
              return Pt(t), null;
            }
          case 5:
            if (aa(t), l = t.type, e !== null && t.stateNode != null)
              td(e, t, l, s);
            else {
              if (!s) {
                if (t.stateNode === null)
                  throw Error(
                    "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                  );
                return Pt(t), null;
              }
              e = et(), k(t) ? H(t, e) : (c = Y(
                lc.current
              ), c = Ti(
                l,
                s,
                c,
                e,
                t
              ), $f(c, t, !1, !1), t.stateNode = c, on(
                c,
                l,
                s,
                e
              ) && st(t));
            }
            return Pt(t), ad(
              t,
              t.type,
              t.pendingProps
            ), null;
          case 6:
            if (e && t.stateNode != null)
              l = e.memoizedProps, va ? l !== s && st(t) : su && (l !== s ? (e = Y(
                lc.current
              ), l = et(), t.stateNode = Ct(
                s,
                e,
                l,
                t
              ), st(t)) : t.stateNode = e.stateNode);
            else {
              if (typeof s != "string" && t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              if (e = Y(lc.current), l = et(), k(t)) {
                if (!gn)
                  throw Error(
                    "Expected prepareToHydrateHostTextInstance() to never be called. This error is likely caused by a bug in React. Please file an issue."
                  );
                e = t.stateNode, l = t.memoizedProps, c = !os, s = null;
                var m = tl;
                if (m !== null)
                  switch (m.tag) {
                    case 3:
                      c && (c = ec(
                        e,
                        l,
                        s
                      ), c !== null && (Xn(t, 0).serverProps = c));
                      break;
                    case 27:
                    case 5:
                      s = m.memoizedProps, c && (c = ec(
                        e,
                        l,
                        s
                      ), c !== null && (Xn(
                        t,
                        0
                      ).serverProps = c));
                  }
                $n(
                  e,
                  l,
                  t,
                  s
                ) || g(t);
              } else
                t.stateNode = Ct(
                  s,
                  e,
                  l,
                  t
                );
            }
            return Pt(t), null;
          case 13:
            if (s = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
              if (c = k(t), s !== null && s.dehydrated !== null) {
                if (e === null) {
                  if (!c)
                    throw Error(
                      "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                    );
                  if (!gn)
                    throw Error(
                      "Expected prepareToHydrateHostSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue."
                    );
                  if (c = t.memoizedState, c = c !== null ? c.dehydrated : null, !c)
                    throw Error(
                      "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                    );
                  Ll(c, t), Pt(t), (t.mode & 2) !== ta && s !== null && (c = t.child, c !== null && (t.treeBaseDuration -= c.treeBaseDuration));
                } else
                  Me(), oe(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4, Pt(t), (t.mode & 2) !== ta && s !== null && (c = t.child, c !== null && (t.treeBaseDuration -= c.treeBaseDuration));
                c = !1;
              } else
                Wu !== null && (Vu(Wu), Wu = null), c = !0;
              if (!c)
                return t.flags & 256 ? (wl(t), t) : (wl(t), null);
            }
            return wl(t), (t.flags & 128) !== 0 ? (t.lanes = l, (t.mode & 2) !== ta && bt(t), t) : (l = s !== null, e = e !== null && e.memoizedState !== null, l && (s = t.child, c = null, s.alternate !== null && s.alternate.memoizedState !== null && s.alternate.memoizedState.cachePool !== null && (c = s.alternate.memoizedState.cachePool.pool), m = null, s.memoizedState !== null && s.memoizedState.cachePool !== null && (m = s.memoizedState.cachePool.pool), m !== c && (s.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), Js(t, t.updateQueue), Pt(t), (t.mode & 2) !== ta && l && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
          case 4:
            return ze(t), Zm(e, t), e === null && jd(t.stateNode.containerInfo), Pt(t), null;
          case 10:
            return Ol(t.type, t), Pt(t), null;
          case 19:
            if (me(en, t), c = t.memoizedState, c === null)
              return Pt(t), null;
            if (s = (t.flags & 128) !== 0, m = c.rendering, m === null)
              if (s) ml(c, !1);
              else {
                if (Ra !== ms || e !== null && (e.flags & 128) !== 0)
                  for (e = t.child; e !== null; ) {
                    if (m = Rc(e), m !== null) {
                      for (t.flags |= 128, ml(c, !1), e = m.updateQueue, t.updateQueue = e, Js(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                        pp(l, e), l = l.sibling;
                      return de(
                        en,
                        en.current & ef | cm,
                        t
                      ), t.child;
                    }
                    e = e.sibling;
                  }
                c.tail !== null && y() > ym && (t.flags |= 128, s = !0, ml(c, !1), t.lanes = 4194304);
              }
            else {
              if (!s)
                if (e = Rc(m), e !== null) {
                  if (t.flags |= 128, s = !0, e = e.updateQueue, t.updateQueue = e, Js(t, e), ml(c, !0), c.tail === null && c.tailMode === "hidden" && !m.alternate && !Tt)
                    return Pt(t), null;
                } else
                  2 * y() - c.renderingStartTime > ym && l !== 536870912 && (t.flags |= 128, s = !0, ml(c, !1), t.lanes = 4194304);
              c.isBackwards ? (m.sibling = t.child, t.child = m) : (e = c.last, e !== null ? e.sibling = m : t.child = m, c.last = m);
            }
            return c.tail !== null ? (e = c.tail, c.rendering = e, c.tail = e.sibling, c.renderingStartTime = y(), e.sibling = null, l = en.current, l = s ? l & ef | cm : l & ef, de(en, l, t), e) : (Pt(t), null);
          case 22:
          case 23:
            return wl(t), Hs(t), s = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== s && (t.flags |= 8192) : s && (t.flags |= 8192), s ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Pt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Pt(t), l = t.updateQueue, l !== null && Js(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), s = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (s = t.memoizedState.cachePool.pool), s !== l && (t.flags |= 2048), e !== null && me(mo, t), null;
          case 24:
            return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Ol(Ca, t), Pt(t), null;
          case 25:
            return null;
        }
        throw Error(
          "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
        );
      }
      function qi(e, t) {
        switch (Jt(t), t.tag) {
          case 1:
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & 2) !== ta && bt(t), t) : null;
          case 3:
            return Ol(Ca, t), ze(t), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
          case 26:
          case 27:
          case 5:
            return aa(t), null;
          case 13:
            if (wl(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
              if (t.alternate === null)
                throw Error(
                  "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
                );
              oe();
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & 2) !== ta && bt(t), t) : null;
          case 19:
            return me(en, t), null;
          case 4:
            return ze(t), null;
          case 10:
            return Ol(t.type, t), null;
          case 22:
          case 23:
            return wl(t), Hs(t), e !== null && me(mo, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & 2) !== ta && bt(t), t) : null;
          case 24:
            return Ol(Ca, t), null;
          case 25:
            return null;
          default:
            return null;
        }
      }
      function nd(e, t) {
        switch (Jt(t), t.tag) {
          case 3:
            Ol(Ca, t), ze(t);
            break;
          case 26:
          case 27:
          case 5:
            aa(t);
            break;
          case 4:
            ze(t);
            break;
          case 13:
            wl(t);
            break;
          case 19:
            me(en, t);
            break;
          case 10:
            Ol(t.type, t);
            break;
          case 22:
          case 23:
            wl(t), Hs(t), e !== null && me(mo, t);
            break;
          case 24:
            Ol(Ca, t);
        }
      }
      function pl(e) {
        return (e.mode & 2) !== ta;
      }
      function pr(e, t) {
        pl(e) ? (Vt(), Ks(t, e), Ht()) : Ks(t, e);
      }
      function ld(e, t, l) {
        pl(e) ? (Vt(), Fi(
          l,
          e,
          t
        ), Ht()) : Fi(
          l,
          e,
          t
        );
      }
      function Ks(e, t) {
        try {
          var l = t.updateQueue, s = l !== null ? l.lastEffect : null;
          if (s !== null) {
            var c = s.next;
            l = c;
            do {
              if ((l.tag & e) === e && ((e & tn) !== Au ? Oe !== null && typeof Oe.markComponentPassiveEffectMountStarted == "function" && Oe.markComponentPassiveEffectMountStarted(
                t
              ) : (e & Rn) !== Au && Oe !== null && typeof Oe.markComponentLayoutEffectMountStarted == "function" && Oe.markComponentLayoutEffectMountStarted(
                t
              ), s = void 0, (e & al) !== Au && (pf = !0), s = ee(
                t,
                X0,
                l
              ), (e & al) !== Au && (pf = !1), (e & tn) !== Au ? Oe !== null && typeof Oe.markComponentPassiveEffectMountStopped == "function" && Oe.markComponentPassiveEffectMountStopped() : (e & Rn) !== Au && Oe !== null && typeof Oe.markComponentLayoutEffectMountStopped == "function" && Oe.markComponentLayoutEffectMountStopped(), s !== void 0 && typeof s != "function")) {
                var m = void 0;
                m = (l.tag & Rn) !== 0 ? "useLayoutEffect" : (l.tag & al) !== 0 ? "useInsertionEffect" : "useEffect";
                var S = void 0;
                S = s === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof s.then == "function" ? `

It looks like you wrote ` + m + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + m + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + s, ee(
                  t,
                  function(_, j) {
                    console.error(
                      "%s must not return anything besides a function, which is used for clean-up.%s",
                      _,
                      j
                    );
                  },
                  m,
                  S
                );
              }
              l = l.next;
            } while (l !== c);
          }
        } catch (_) {
          Ut(t, t.return, _);
        }
      }
      function Fi(e, t, l) {
        try {
          var s = t.updateQueue, c = s !== null ? s.lastEffect : null;
          if (c !== null) {
            var m = c.next;
            s = m;
            do {
              if ((s.tag & e) === e) {
                var S = s.inst, _ = S.destroy;
                _ !== void 0 && (S.destroy = void 0, (e & tn) !== Au ? Oe !== null && typeof Oe.markComponentPassiveEffectUnmountStarted == "function" && Oe.markComponentPassiveEffectUnmountStarted(
                  t
                ) : (e & Rn) !== Au && Oe !== null && typeof Oe.markComponentLayoutEffectUnmountStarted == "function" && Oe.markComponentLayoutEffectUnmountStarted(
                  t
                ), (e & al) !== Au && (pf = !0), ee(
                  t,
                  V0,
                  t,
                  l,
                  _
                ), (e & al) !== Au && (pf = !1), (e & tn) !== Au ? Oe !== null && typeof Oe.markComponentPassiveEffectUnmountStopped == "function" && Oe.markComponentPassiveEffectUnmountStopped() : (e & Rn) !== Au && Oe !== null && typeof Oe.markComponentLayoutEffectUnmountStopped == "function" && Oe.markComponentLayoutEffectUnmountStopped());
              }
              s = s.next;
            } while (s !== m);
          }
        } catch (j) {
          Ut(t, t.return, j);
        }
      }
      function ud(e, t) {
        pl(e) ? (Vt(), Ks(t, e), Ht()) : Ks(t, e);
      }
      function hr(e, t, l) {
        pl(e) ? (Vt(), Fi(
          l,
          e,
          t
        ), Ht()) : Fi(
          l,
          e,
          t
        );
      }
      function id(e) {
        var t = e.updateQueue;
        if (t !== null) {
          var l = e.stateNode;
          e.type.defaultProps || "ref" in e.memoizedProps || lf || (l.props !== e.memoizedProps && console.error(
            "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
            Z(e) || "instance"
          ), l.state !== e.memoizedState && console.error(
            "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
            Z(e) || "instance"
          ));
          try {
            ee(
              e,
              _f,
              t,
              l
            );
          } catch (s) {
            Ut(e, e.return, s);
          }
        }
      }
      function sd(e, t, l) {
        return e.getSnapshotBeforeUpdate(t, l);
      }
      function pt(e, t) {
        var l = t.memoizedProps, s = t.memoizedState;
        t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || lf || (t.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          Z(e) || "instance"
        ), t.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          Z(e) || "instance"
        ));
        try {
          var c = dl(
            e.type,
            l,
            e.elementType === e.type
          ), m = ee(
            e,
            sd,
            t,
            c,
            s
          );
          l = bA, m !== void 0 || l.has(e.type) || (l.add(e.type), ee(e, function() {
            console.error(
              "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
              Z(e)
            );
          })), t.__reactInternalSnapshotBeforeUpdate = m;
        } catch (S) {
          Ut(e, e.return, S);
        }
      }
      function Fm(e, t, l) {
        l.props = dl(
          e.type,
          e.memoizedProps
        ), l.state = e.memoizedState, pl(e) ? (Vt(), ee(
          e,
          wy,
          e,
          t,
          l
        ), Ht()) : ee(
          e,
          wy,
          e,
          t,
          l
        );
      }
      function Fn(e) {
        var t = e.ref;
        if (t !== null) {
          var l = e.stateNode;
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              l = Al(l);
          }
          if (typeof t == "function")
            if (pl(e))
              try {
                Vt(), e.refCleanup = t(l);
              } finally {
                Ht();
              }
            else e.refCleanup = t(l);
          else
            typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
              "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
              Z(e)
            ), t.current = l;
        }
      }
      function Ju(e, t) {
        try {
          ee(e, Fn, e);
        } catch (l) {
          Ut(e, t, l);
        }
      }
      function In(e, t) {
        var l = e.ref, s = e.refCleanup;
        if (l !== null)
          if (typeof s == "function")
            try {
              if (pl(e))
                try {
                  Vt(), ee(e, s);
                } finally {
                  Ht(e);
                }
              else ee(e, s);
            } catch (c) {
              Ut(e, t, c);
            } finally {
              e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
            }
          else if (typeof l == "function")
            try {
              if (pl(e))
                try {
                  Vt(), ee(e, l, null);
                } finally {
                  Ht(e);
                }
              else ee(e, l, null);
            } catch (c) {
              Ut(e, t, c);
            }
          else l.current = null;
      }
      function Qc(e, t, l, s) {
        var c = e.memoizedProps, m = c.id, S = c.onCommit;
        c = c.onRender, t = t === null ? "mount" : "update", Op && (t = "nested-update"), typeof c == "function" && c(
          m,
          t,
          e.actualDuration,
          e.treeBaseDuration,
          e.actualStartTime,
          l
        ), typeof S == "function" && S(
          e.memoizedProps.id,
          t,
          s,
          l
        );
      }
      function js(e, t, l, s) {
        var c = e.memoizedProps;
        e = c.id, c = c.onPostCommit, t = t === null ? "mount" : "update", Op && (t = "nested-update"), typeof c == "function" && c(
          e,
          t,
          s,
          l
        );
      }
      function Ii(e) {
        var t = e.type, l = e.memoizedProps, s = e.stateNode;
        try {
          ee(
            e,
            jr,
            s,
            t,
            l,
            e
          );
        } catch (c) {
          Ut(e, e.return, c);
        }
      }
      function cd(e, t, l) {
        try {
          ee(
            e,
            ks,
            e.stateNode,
            e.type,
            l,
            t,
            e
          );
        } catch (s) {
          Ut(e, e.return, s);
        }
      }
      function vr(e) {
        return e.tag === 5 || e.tag === 3 || (We ? e.tag === 26 : !1) || (ga ? e.tag === 27 : !1) || e.tag === 4;
      }
      function od(e) {
        e: for (; ; ) {
          for (; e.sibling === null; ) {
            if (e.return === null || vr(e.return)) return null;
            e = e.return;
          }
          for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && (!ga || e.tag !== 27) && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child;
          }
          if (!(e.flags & 2)) return e.stateNode;
        }
      }
      function yr(e, t, l) {
        var s = e.tag;
        if (s === 5 || s === 6)
          e = e.stateNode, t ? Qr(l, e, t) : Kt(l, e);
        else if (!(s === 4 || ga && s === 27) && (e = e.child, e !== null))
          for (yr(e, t, l), e = e.sibling; e !== null; )
            yr(e, t, l), e = e.sibling;
      }
      function Ul(e, t, l) {
        var s = e.tag;
        if (s === 5 || s === 6)
          e = e.stateNode, t ? ns(l, e, t) : ft(l, e);
        else if (!(s === 4 || ga && s === 27) && (e = e.child, e !== null))
          for (Ul(e, t, l), e = e.sibling; e !== null; )
            Ul(e, t, l), e = e.sibling;
      }
      function rd(e) {
        if (va && (!ga || e.tag !== 27)) {
          e: {
            for (var t = e.return; t !== null; ) {
              if (vr(t)) {
                var l = t;
                break e;
              }
              t = t.return;
            }
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          }
          switch (l.tag) {
            case 27:
              if (ga) {
                t = l.stateNode, l = od(e), Ul(e, l, t);
                break;
              }
            case 5:
              t = l.stateNode, l.flags & 32 && (Tp(t), l.flags &= -33), l = od(e), Ul(e, l, t);
              break;
            case 3:
            case 4:
              t = l.stateNode.containerInfo, l = od(e), yr(
                e,
                l,
                t
              );
              break;
            default:
              throw Error(
                "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
              );
          }
        }
      }
      function Ar(e, t, l) {
        e = e.containerInfo;
        try {
          ee(
            t,
            Yr,
            e,
            l
          );
        } catch (s) {
          Ut(t, t.return, s);
        }
      }
      function fd(e, t) {
        for (Pa(e.containerInfo), mn = t; mn !== null; )
          if (e = mn, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
            t.return = e, mn = t;
          else
            for (; mn !== null; ) {
              t = e = mn;
              var l = t.alternate, s = t.flags;
              switch (t.tag) {
                case 0:
                  break;
                case 11:
                case 15:
                  break;
                case 1:
                  (s & 1024) !== 0 && l !== null && pt(t, l);
                  break;
                case 3:
                  (s & 1024) !== 0 && va && us(t.stateNode.containerInfo);
                  break;
                case 5:
                case 26:
                case 27:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  if ((s & 1024) !== 0)
                    throw Error(
                      "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                    );
              }
              if (t = e.sibling, t !== null) {
                t.return = e.return, mn = t;
                break;
              }
              mn = e.return;
            }
        return e = _A, _A = !1, e;
      }
      function Er(e, t, l) {
        var s = l.flags;
        switch (l.tag) {
          case 0:
          case 11:
          case 15:
            Nl(e, l), s & 4 && pr(l, Rn | Eu);
            break;
          case 1:
            if (Nl(e, l), s & 4)
              if (e = l.stateNode, t === null)
                l.type.defaultProps || "ref" in l.memoizedProps || lf || (e.props !== l.memoizedProps && console.error(
                  "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                  Z(l) || "instance"
                ), e.state !== l.memoizedState && console.error(
                  "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                  Z(l) || "instance"
                )), pl(l) ? (Vt(), ee(
                  l,
                  rv,
                  l,
                  e
                ), Ht()) : ee(
                  l,
                  rv,
                  l,
                  e
                );
              else {
                var c = dl(
                  l.type,
                  t.memoizedProps
                );
                t = t.memoizedState, l.type.defaultProps || "ref" in l.memoizedProps || lf || (e.props !== l.memoizedProps && console.error(
                  "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                  Z(l) || "instance"
                ), e.state !== l.memoizedState && console.error(
                  "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                  Z(l) || "instance"
                )), pl(l) ? (Vt(), ee(
                  l,
                  qy,
                  l,
                  e,
                  c,
                  t,
                  e.__reactInternalSnapshotBeforeUpdate
                ), Ht()) : ee(
                  l,
                  qy,
                  l,
                  e,
                  c,
                  t,
                  e.__reactInternalSnapshotBeforeUpdate
                );
              }
            s & 64 && id(l), s & 512 && Ju(l, l.return);
            break;
          case 3:
            if (t = xe(), Nl(e, l), s & 64 && (s = l.updateQueue, s !== null)) {
              if (c = null, l.child !== null)
                switch (l.child.tag) {
                  case 27:
                  case 5:
                    c = Al(l.child.stateNode);
                    break;
                  case 1:
                    c = l.child.stateNode;
                }
              try {
                ee(
                  l,
                  _f,
                  s,
                  c
                );
              } catch (_) {
                Ut(l, l.return, _);
              }
            }
            e.effectDuration += Ye(t);
            break;
          case 26:
            if (We) {
              Nl(e, l), s & 512 && Ju(l, l.return);
              break;
            }
          case 27:
          case 5:
            Nl(e, l), t === null && s & 4 && Ii(l), s & 512 && Ju(l, l.return);
            break;
          case 12:
            if (s & 4) {
              s = xe(), Nl(e, l), e = l.stateNode, e.effectDuration += we(s);
              try {
                ee(
                  l,
                  Qc,
                  l,
                  t,
                  Hp,
                  e.effectDuration
                );
              } catch (_) {
                Ut(l, l.return, _);
              }
            } else Nl(e, l);
            break;
          case 13:
            Nl(e, l), s & 4 && md(e, l);
            break;
          case 22:
            if (c = l.memoizedState !== null || ds, !c) {
              t = t !== null && t.memoizedState !== null || Ta;
              var m = ds, S = Ta;
              ds = c, (Ta = t) && !S ? ju(
                e,
                l,
                (l.subtreeFlags & 8772) !== 0
              ) : Nl(e, l), ds = m, Ta = S;
            }
            s & 512 && (l.memoizedProps.mode === "manual" ? Ju(l, l.return) : In(l, l.return));
            break;
          default:
            Nl(e, l);
        }
      }
      function Ku(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, Ku(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Qd(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
      function hl(e, t, l) {
        for (l = l.child; l !== null; )
          dd(
            e,
            t,
            l
          ), l = l.sibling;
      }
      function dd(e, t, l) {
        if (Fe && typeof Fe.onCommitFiberUnmount == "function")
          try {
            Fe.onCommitFiberUnmount(Ge, l);
          } catch (m) {
            Kn || (Kn = !0, console.error(
              "React instrumentation encountered an error: %s",
              m
            ));
          }
        switch (l.tag) {
          case 26:
            if (We) {
              Ta || In(l, t), hl(
                e,
                t,
                l
              ), l.memoizedState ? ss(l.memoizedState) : l.stateNode && la(l.stateNode);
              break;
            }
          case 27:
            if (ga) {
              Ta || In(l, t);
              var s = Qa, c = Kl;
              Qa = l.stateNode, hl(
                e,
                t,
                l
              ), ao(l.stateNode), Qa = s, Kl = c;
              break;
            }
          case 5:
            Ta || In(l, t);
          case 6:
            if (va) {
              if (s = Qa, c = Kl, Qa = null, hl(
                e,
                t,
                l
              ), Qa = s, Kl = c, Qa !== null)
                if (Kl)
                  try {
                    ee(
                      l,
                      $s,
                      Qa,
                      l.stateNode
                    );
                  } catch (m) {
                    Ut(
                      l,
                      t,
                      m
                    );
                  }
                else
                  try {
                    ee(
                      l,
                      kc,
                      Qa,
                      l.stateNode
                    );
                  } catch (m) {
                    Ut(
                      l,
                      t,
                      m
                    );
                  }
            } else
              hl(
                e,
                t,
                l
              );
            break;
          case 18:
            va && Qa !== null && (Kl ? Zr(
              Qa,
              l.stateNode
            ) : Vr(Qa, l.stateNode));
            break;
          case 4:
            va ? (s = Qa, c = Kl, Qa = l.stateNode.containerInfo, Kl = !0, hl(
              e,
              t,
              l
            ), Qa = s, Kl = c) : (su && Ar(
              l.stateNode,
              l,
              Vd()
            ), hl(
              e,
              t,
              l
            ));
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            Ta || Fi(
              al,
              l,
              t
            ), Ta || ld(
              l,
              t,
              Rn
            ), hl(
              e,
              t,
              l
            );
            break;
          case 1:
            Ta || (In(l, t), s = l.stateNode, typeof s.componentWillUnmount == "function" && Fm(
              l,
              t,
              s
            )), hl(
              e,
              t,
              l
            );
            break;
          case 21:
            hl(
              e,
              t,
              l
            );
            break;
          case 22:
            Ta || In(l, t), Ta = (s = Ta) || l.memoizedState !== null, hl(
              e,
              t,
              l
            ), Ta = s;
            break;
          default:
            hl(
              e,
              t,
              l
            );
        }
      }
      function md(e, t) {
        if (gn && t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
          try {
            ee(
              t,
              Xr,
              e
            );
          } catch (l) {
            Ut(t, t.return, l);
          }
      }
      function Uh(e) {
        switch (e.tag) {
          case 13:
          case 19:
            var t = e.stateNode;
            return t === null && (t = e.stateNode = new DA()), t;
          case 22:
            return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new DA()), t;
          default:
            throw Error(
              "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
            );
        }
      }
      function ke(e, t) {
        var l = Uh(e);
        t.forEach(function(s) {
          var c = cp.bind(null, e, s);
          if (!l.has(s)) {
            if (l.add(s), $a)
              if (cf !== null && of !== null)
                Vc(of, cf);
              else
                throw Error(
                  "Expected finished root and lanes to be set. This is a bug in React."
                );
            s.then(c, c);
          }
        });
      }
      function pd(e, t, l) {
        cf = l, of = e, Sr(t, e), of = cf = null;
      }
      function An(e, t) {
        var l = t.deletions;
        if (l !== null)
          for (var s = 0; s < l.length; s++) {
            var c = e, m = t, S = l[s];
            if (va) {
              var _ = m;
              e: for (; _ !== null; ) {
                switch (_.tag) {
                  case 27:
                  case 5:
                    Qa = _.stateNode, Kl = !1;
                    break e;
                  case 3:
                    Qa = _.stateNode.containerInfo, Kl = !0;
                    break e;
                  case 4:
                    Qa = _.stateNode.containerInfo, Kl = !0;
                    break e;
                }
                _ = _.return;
              }
              if (Qa === null)
                throw Error(
                  "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
                );
              dd(c, m, S), Qa = null, Kl = !1;
            } else dd(c, m, S);
            c = S, m = c.alternate, m !== null && (m.return = null), c.return = null;
          }
        if (t.subtreeFlags & 13878)
          for (t = t.child; t !== null; )
            Sr(t, e), t = t.sibling;
      }
      function Sr(e, t) {
        var l = e.alternate, s = e.flags;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            An(t, e), sn(e), s & 4 && (Fi(
              al | Eu,
              e,
              e.return
            ), Ks(al | Eu, e), ld(
              e,
              e.return,
              Rn | Eu
            ));
            break;
          case 1:
            An(t, e), sn(e), s & 512 && (Ta || l === null || In(l, l.return)), s & 64 && ds && (e = e.updateQueue, e !== null && (s = e.callbacks, s !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? s : l.concat(s))));
            break;
          case 26:
            if (We) {
              var c = $u;
              An(t, e), sn(e), s & 512 && (Ta || l === null || In(l, l.return)), s & 4 && (s = l !== null ? l.memoizedState : null, t = e.memoizedState, l === null ? t === null ? e.stateNode === null ? e.stateNode = Id(
                c,
                e.type,
                e.memoizedProps,
                e
              ) : mu(
                c,
                e.type,
                e.stateNode
              ) : e.stateNode = du(
                c,
                t,
                e.memoizedProps
              ) : s !== t ? (s === null ? l.stateNode !== null && la(l.stateNode) : ss(s), t === null ? mu(
                c,
                e.type,
                e.stateNode
              ) : du(
                c,
                t,
                e.memoizedProps
              )) : t === null && e.stateNode !== null && cd(
                e,
                e.memoizedProps,
                l.memoizedProps
              ));
              break;
            }
          case 27:
            if (ga && s & 4 && e.alternate === null) {
              c = e.stateNode;
              var m = e.memoizedProps;
              try {
                Pd(c), ee(
                  e,
                  Wd,
                  e.type,
                  m,
                  c,
                  e
                );
              } catch (Re) {
                Ut(e, e.return, Re);
              }
            }
          case 5:
            if (An(t, e), sn(e), s & 512 && (Ta || l === null || In(l, l.return)), va) {
              if (e.flags & 32) {
                t = e.stateNode;
                try {
                  ee(e, Tp, t);
                } catch (Re) {
                  Ut(
                    e,
                    e.return,
                    Re
                  );
                }
              }
              s & 4 && e.stateNode != null && (t = e.memoizedProps, cd(
                e,
                t,
                l !== null ? l.memoizedProps : t
              )), s & 1024 && (Sv = !0, e.type !== "form" && console.error(
                "Unexpected host component type. Expected a form. This is a bug in React."
              ));
            }
            break;
          case 6:
            if (An(t, e), sn(e), s & 4 && va) {
              if (e.stateNode === null)
                throw Error(
                  "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
                );
              s = e.memoizedProps, l = l !== null ? l.memoizedProps : s, t = e.stateNode;
              try {
                ee(
                  e,
                  Sa,
                  t,
                  l,
                  s
                );
              } catch (Re) {
                Ut(e, e.return, Re);
              }
            }
            break;
          case 3:
            if (c = xe(), We ? (cs(), m = $u, $u = Qt(t.containerInfo), An(t, e), $u = m) : An(t, e), sn(e), s & 4) {
              if (va && gn && l !== null && l.memoizedState.isDehydrated)
                try {
                  ee(
                    e,
                    Wh,
                    t.containerInfo
                  );
                } catch (Re) {
                  Ut(
                    e,
                    e.return,
                    Re
                  );
                }
              if (su) {
                s = t.containerInfo, l = t.pendingChildren;
                try {
                  ee(
                    e,
                    Yr,
                    s,
                    l
                  );
                } catch (Re) {
                  Ut(
                    e,
                    e.return,
                    Re
                  );
                }
              }
            }
            Sv && (Sv = !1, Im(e)), t.effectDuration += Ye(c);
            break;
          case 4:
            We ? (l = $u, $u = Qt(
              e.stateNode.containerInfo
            ), An(t, e), sn(e), $u = l) : (An(t, e), sn(e)), s & 4 && su && Ar(
              e.stateNode,
              e,
              e.stateNode.pendingChildren
            );
            break;
          case 12:
            s = xe(), An(t, e), sn(e), e.stateNode.effectDuration += we(s);
            break;
          case 13:
            An(t, e), sn(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Mv = y()), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, ke(e, s)));
            break;
          case 22:
            s & 512 && (Ta || l === null || In(l, l.return)), c = e.memoizedState !== null;
            var S = l !== null && l.memoizedState !== null, _ = ds, j = Ta;
            if (ds = _ || c, Ta = j || S, An(t, e), Ta = j, ds = _, sn(e), t = e.stateNode, t._current = e, t._visibility &= -3, t._visibility |= t._pendingVisibility & 2, s & 8192 && (t._visibility = c ? t._visibility & -2 : t._visibility | 1, c && (t = ds || Ta, l === null || S || t || Ys(e)), va && (e.memoizedProps === null || e.memoizedProps.mode !== "manual"))) {
              e: if (l = null, va)
                for (t = e; ; ) {
                  if (t.tag === 5 || We && t.tag === 26 || ga && t.tag === 27) {
                    if (l === null) {
                      S = l = t;
                      try {
                        m = S.stateNode, c ? ee(S, Yd, m) : ee(
                          S,
                          ls,
                          S.stateNode,
                          S.memoizedProps
                        );
                      } catch (Re) {
                        Ut(
                          S,
                          S.return,
                          Re
                        );
                      }
                    }
                  } else if (t.tag === 6) {
                    if (l === null) {
                      S = t;
                      try {
                        var ae = S.stateNode;
                        c ? ee(
                          S,
                          ru,
                          ae
                        ) : ee(
                          S,
                          bi,
                          ae,
                          S.memoizedProps
                        );
                      } catch (Re) {
                        Ut(
                          S,
                          S.return,
                          Re
                        );
                      }
                    }
                  } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                    t.child.return = t, t = t.child;
                    continue;
                  }
                  if (t === e) break e;
                  for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                      break e;
                    l === t && (l = null), t = t.return;
                  }
                  l === t && (l = null), t.sibling.return = t.return, t = t.sibling;
                }
            }
            s & 4 && (s = e.updateQueue, s !== null && (l = s.retryQueue, l !== null && (s.retryQueue = null, ke(e, l))));
            break;
          case 19:
            An(t, e), sn(e), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, ke(e, s)));
            break;
          case 21:
            break;
          default:
            An(t, e), sn(e);
        }
      }
      function sn(e) {
        var t = e.flags;
        if (t & 2) {
          try {
            ee(e, rd, e);
          } catch (l) {
            Ut(e, e.return, l);
          }
          e.flags &= -3;
        }
        t & 4096 && (e.flags &= -4097);
      }
      function Im(e) {
        if (e.subtreeFlags & 1024)
          for (e = e.child; e !== null; ) {
            var t = e;
            Im(t), t.tag === 5 && t.flags & 1024 && Jr(t.stateNode), e = e.sibling;
          }
      }
      function Nh(e, t, l) {
        cf = l, of = t, Er(t, e.alternate, e), of = cf = null;
      }
      function Nl(e, t) {
        if (t.subtreeFlags & 8772)
          for (t = t.child; t !== null; )
            Er(e, t.alternate, t), t = t.sibling;
      }
      function Qs(e) {
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            ld(
              e,
              e.return,
              Rn
            ), Ys(e);
            break;
          case 1:
            In(e, e.return);
            var t = e.stateNode;
            typeof t.componentWillUnmount == "function" && Fm(
              e,
              e.return,
              t
            ), Ys(e);
            break;
          case 26:
          case 27:
          case 5:
            In(e, e.return), Ys(e);
            break;
          case 22:
            In(e, e.return), e.memoizedState === null && Ys(e);
            break;
          default:
            Ys(e);
        }
      }
      function Ys(e) {
        for (e = e.child; e !== null; )
          Qs(e), e = e.sibling;
      }
      function wm(e, t, l, s) {
        var c = l.flags;
        switch (l.tag) {
          case 0:
          case 11:
          case 15:
            ju(
              e,
              l,
              s
            ), pr(l, Rn);
            break;
          case 1:
            if (ju(
              e,
              l,
              s
            ), t = l.stateNode, typeof t.componentDidMount == "function" && ee(
              l,
              rv,
              l,
              t
            ), t = l.updateQueue, t !== null) {
              e = l.stateNode;
              try {
                ee(
                  l,
                  Jm,
                  t,
                  e
                );
              } catch (m) {
                Ut(l, l.return, m);
              }
            }
            s && c & 64 && id(l), Ju(l, l.return);
            break;
          case 26:
          case 27:
          case 5:
            ju(
              e,
              l,
              s
            ), s && t === null && c & 4 && Ii(l), Ju(l, l.return);
            break;
          case 12:
            if (s && c & 4) {
              c = xe(), ju(
                e,
                l,
                s
              ), s = l.stateNode, s.effectDuration += we(c);
              try {
                ee(
                  l,
                  Qc,
                  l,
                  t,
                  Hp,
                  s.effectDuration
                );
              } catch (m) {
                Ut(l, l.return, m);
              }
            } else
              ju(
                e,
                l,
                s
              );
            break;
          case 13:
            ju(
              e,
              l,
              s
            ), s && c & 4 && md(e, l);
            break;
          case 22:
            l.memoizedState === null && ju(
              e,
              l,
              s
            ), Ju(l, l.return);
            break;
          default:
            ju(
              e,
              l,
              s
            );
        }
      }
      function ju(e, t, l) {
        for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
          wm(
            e,
            t.alternate,
            t,
            l
          ), t = t.sibling;
      }
      function hd(e, t) {
        var l = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && Ai(e), l != null && jc(l));
      }
      function vd(e, t) {
        e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (Ai(t), e != null && jc(e));
      }
      function nu(e, t, l, s) {
        if (t.subtreeFlags & 10256)
          for (t = t.child; t !== null; )
            yd(
              e,
              t,
              l,
              s
            ), t = t.sibling;
      }
      function yd(e, t, l, s) {
        var c = t.flags;
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            nu(
              e,
              t,
              l,
              s
            ), c & 2048 && ud(t, tn | Eu);
            break;
          case 3:
            var m = xe();
            nu(
              e,
              t,
              l,
              s
            ), c & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (Ai(t), l != null && jc(l))), e.passiveEffectDuration += Ye(m);
            break;
          case 12:
            if (c & 2048) {
              m = xe(), nu(
                e,
                t,
                l,
                s
              ), e = t.stateNode, e.passiveEffectDuration += we(m);
              try {
                ee(
                  t,
                  js,
                  t,
                  t.alternate,
                  Hp,
                  e.passiveEffectDuration
                );
              } catch (S) {
                Ut(t, t.return, S);
              }
            } else
              nu(
                e,
                t,
                l,
                s
              );
            break;
          case 23:
            break;
          case 22:
            m = t.stateNode, t.memoizedState !== null ? m._visibility & 4 ? nu(
              e,
              t,
              l,
              s
            ) : Yc(
              e,
              t
            ) : m._visibility & 4 ? nu(
              e,
              t,
              l,
              s
            ) : (m._visibility |= 4, Qu(
              e,
              t,
              l,
              s,
              (t.subtreeFlags & 10256) !== 0
            )), c & 2048 && hd(
              t.alternate,
              t
            );
            break;
          case 24:
            nu(
              e,
              t,
              l,
              s
            ), c & 2048 && vd(t.alternate, t);
            break;
          default:
            nu(
              e,
              t,
              l,
              s
            );
        }
      }
      function Qu(e, t, l, s, c) {
        for (c = c && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; )
          Ad(
            e,
            t,
            l,
            s,
            c
          ), t = t.sibling;
      }
      function Ad(e, t, l, s, c) {
        var m = t.flags;
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Qu(
              e,
              t,
              l,
              s,
              c
            ), ud(t, tn);
            break;
          case 23:
            break;
          case 22:
            var S = t.stateNode;
            t.memoizedState !== null ? S._visibility & 4 ? Qu(
              e,
              t,
              l,
              s,
              c
            ) : Yc(
              e,
              t
            ) : (S._visibility |= 4, Qu(
              e,
              t,
              l,
              s,
              c
            )), c && m & 2048 && hd(
              t.alternate,
              t
            );
            break;
          case 24:
            Qu(
              e,
              t,
              l,
              s,
              c
            ), c && m & 2048 && vd(t.alternate, t);
            break;
          default:
            Qu(
              e,
              t,
              l,
              s,
              c
            );
        }
      }
      function Yc(e, t) {
        if (t.subtreeFlags & 10256)
          for (t = t.child; t !== null; ) {
            var l = e, s = t, c = s.flags;
            switch (s.tag) {
              case 22:
                Yc(
                  l,
                  s
                ), c & 2048 && hd(
                  s.alternate,
                  s
                );
                break;
              case 24:
                Yc(
                  l,
                  s
                ), c & 2048 && vd(
                  s.alternate,
                  s
                );
                break;
              default:
                Yc(
                  l,
                  s
                );
            }
            t = t.sibling;
          }
      }
      function wi(e) {
        if (e.subtreeFlags & rf)
          for (e = e.child; e !== null; )
            Br(e), e = e.sibling;
      }
      function Br(e) {
        switch (e.tag) {
          case 26:
            wi(e), e.flags & rf && (e.memoizedState !== null ? tc(
              $u,
              e.memoizedState,
              e.memoizedProps
            ) : Lr(e.type, e.memoizedProps));
            break;
          case 5:
            wi(e), e.flags & rf && Lr(e.type, e.memoizedProps);
            break;
          case 3:
          case 4:
            if (We) {
              var t = $u;
              $u = Qt(
                e.stateNode.containerInfo
              ), wi(e), $u = t;
            } else wi(e);
            break;
          case 22:
            e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = rf, rf = 16777216, wi(e), rf = t) : wi(e));
            break;
          default:
            wi(e);
        }
      }
      function lu(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child, e !== null)) {
          t.child = null;
          do
            t = e.sibling, e.sibling = null, e = t;
          while (e !== null);
        }
      }
      function Aa(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
          if (t !== null)
            for (var l = 0; l < t.length; l++) {
              var s = t[l];
              mn = s, Pm(
                s,
                e
              );
            }
          lu(e);
        }
        if (e.subtreeFlags & 10256)
          for (e = e.child; e !== null; )
            Yu(e), e = e.sibling;
      }
      function Yu(e) {
        switch (e.tag) {
          case 0:
          case 11:
          case 15:
            Aa(e), e.flags & 2048 && hr(
              e,
              e.return,
              tn | Eu
            );
            break;
          case 3:
            var t = xe();
            Aa(e), e.stateNode.passiveEffectDuration += Ye(t);
            break;
          case 12:
            t = xe(), Aa(e), e.stateNode.passiveEffectDuration += we(t);
            break;
          case 22:
            t = e.stateNode, e.memoizedState !== null && t._visibility & 4 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -5, En(e)) : Aa(e);
            break;
          default:
            Aa(e);
        }
      }
      function En(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
          if (t !== null)
            for (var l = 0; l < t.length; l++) {
              var s = t[l];
              mn = s, Pm(
                s,
                e
              );
            }
          lu(e);
        }
        for (e = e.child; e !== null; )
          Ed(e), e = e.sibling;
      }
      function Ed(e) {
        switch (e.tag) {
          case 0:
          case 11:
          case 15:
            hr(
              e,
              e.return,
              tn
            ), En(e);
            break;
          case 22:
            var t = e.stateNode;
            t._visibility & 4 && (t._visibility &= -5, En(e));
            break;
          default:
            En(e);
        }
      }
      function Pm(e, t) {
        for (; mn !== null; ) {
          var l = mn, s = l;
          switch (s.tag) {
            case 0:
            case 11:
            case 15:
              hr(
                s,
                t,
                tn
              );
              break;
            case 23:
            case 22:
              s.memoizedState !== null && s.memoizedState.cachePool !== null && (s = s.memoizedState.cachePool.pool, s != null && Ai(s));
              break;
            case 24:
              jc(s.memoizedState.cache);
          }
          if (s = l.child, s !== null) s.return = l, mn = s;
          else
            e: for (l = e; mn !== null; ) {
              s = mn;
              var c = s.sibling, m = s.return;
              if (Ku(s), s === l) {
                mn = null;
                break e;
              }
              if (c !== null) {
                c.return = m, mn = c;
                break e;
              }
              mn = m;
            }
        }
      }
      function cn(e) {
        var t = ts(e);
        if (t != null) {
          if (typeof t.memoizedProps["data-testname"] != "string")
            throw Error(
              "Invalid host root specified. Should be either a React container or a node with a testname attribute."
            );
          return t;
        }
        if (e = Cp(e), e === null)
          throw Error(
            "Could not find React container within specified host subtree."
          );
        return e.stateNode.current;
      }
      function Xu(e, t) {
        var l = e.tag;
        switch (t.$$typeof) {
          case Zp:
            if (e.type === t.value) return !0;
            break;
          case qp:
            e: {
              for (t = t.value, e = [e, 0], l = 0; l < e.length; ) {
                var s = e[l++], c = s.tag, m = e[l++], S = t[m];
                if (c !== 5 && c !== 26 && c !== 27 || !rn(s)) {
                  for (; S != null && Xu(s, S); )
                    m++, S = t[m];
                  if (m === t.length) {
                    t = !0;
                    break e;
                  } else
                    for (s = s.child; s !== null; )
                      e.push(s, m), s = s.sibling;
                }
              }
              t = !1;
            }
            return t;
          case Fp:
            if ((l === 5 || l === 26 || l === 27) && ou(e.stateNode, t.value))
              return !0;
            break;
          case wp:
            if ((l === 5 || l === 6 || l === 26 || l === 27) && (e = Kr(e), e !== null && 0 <= e.indexOf(t.value)))
              return !0;
            break;
          case Ip:
            if ((l === 5 || l === 26 || l === 27) && (e = e.memoizedProps["data-testname"], typeof e == "string" && e.toLowerCase() === t.value.toLowerCase()))
              return !0;
            break;
          default:
            throw Error("Invalid selector type specified.");
        }
        return !1;
      }
      function Sd(e) {
        switch (e.$$typeof) {
          case Zp:
            return "<" + ($(e.value) || "Unknown") + ">";
          case qp:
            return ":has(" + (Sd(e) || "") + ")";
          case Fp:
            return '[role="' + e.value + '"]';
          case wp:
            return '"' + e.value + '"';
          case Ip:
            return '[data-testname="' + e.value + '"]';
          default:
            throw Error("Invalid selector type specified.");
        }
      }
      function Wm(e, t) {
        var l = [];
        e = [e, 0];
        for (var s = 0; s < e.length; ) {
          var c = e[s++], m = c.tag, S = e[s++], _ = t[S];
          if (m !== 5 && m !== 26 && m !== 27 || !rn(c)) {
            for (; _ != null && Xu(c, _); )
              S++, _ = t[S];
            if (S === t.length) l.push(c);
            else
              for (c = c.child; c !== null; )
                e.push(c, S), c = c.sibling;
          }
        }
        return l;
      }
      function gr(e, t) {
        if (!El)
          throw Error("Test selector API is not supported by this renderer.");
        e = cn(e), e = Wm(e, t), t = [], e = Array.from(e);
        for (var l = 0; l < e.length; ) {
          var s = e[l++], c = s.tag;
          if (c === 5 || c === 26 || c === 27)
            rn(s) || t.push(s.stateNode);
          else
            for (s = s.child; s !== null; )
              e.push(s), s = s.sibling;
        }
        return t;
      }
      function Gh() {
        El && Pp.forEach(function(e) {
          return e();
        });
      }
      function Bd() {
        var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
        return e || le.actQueue === null || console.error(
          "The current testing environment is not configured to support act(...)"
        ), e;
      }
      function wn(e) {
        if ((Xt & jn) !== ll && yt !== 0)
          return yt & -yt;
        var t = le.T;
        return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), e = io, e !== 0 ? e : xt()) : Fs();
      }
      function gd() {
        Ql === 0 && (Ql = (yt & 536870912) === 0 || Tt ? bn() : 536870912);
        var e = yu.current;
        return e !== null && (e.flags |= 32), Ql;
      }
      function na(e, t, l) {
        if (pf && console.error("useInsertionEffect must not schedule updates."), Ov && (eh = !0), (e === Wt && kt === ho || e.cancelPendingCommit !== null) && (Xs(e, 0), Zu(
          e,
          yt,
          Ql,
          !1
        )), _n(e, l), (Xt & jn) !== 0 && e === Wt) {
          if (wa)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                e = ht && Z(ht) || "Unknown", zA.has(e) || (zA.add(e), t = Z(t) || "Unknown", console.error(
                  "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                  t,
                  e,
                  e
                ));
                break;
              case 1:
                GA || (console.error(
                  "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
                ), GA = !0);
            }
        } else
          $a && ni(e, t, l), fp(t), e === Wt && ((Xt & jn) === ll && (dc |= l), Ra === po && Zu(
            e,
            yt,
            Ql,
            !1
          )), sa(e);
      }
      function Pi(e, t, l) {
        if ((Xt & (jn | Gi)) !== ll)
          throw Error("Should not already be working.");
        var s = !l && (t & 60) === 0 && (t & e.expiredLanes) === 0 || $t(e, t), c = s ? xh(e, t) : Rd(e, t, !0), m = s;
        do {
          if (c === ms) {
            mf && !s && Zu(e, t, 0, !1);
            break;
          } else if (c === Wp)
            Zu(
              e,
              t,
              0,
              !ps
            );
          else {
            if (l = e.current.alternate, m && !zh(l)) {
              c = Rd(e, t, !1), m = !1;
              continue;
            }
            if (c === ff) {
              if (m = t, e.errorRecoveryDisabledLanes & m)
                var S = 0;
              else
                S = e.pendingLanes & -536870913, S = S !== 0 ? S : S & 536870912 ? 536870912 : 0;
              if (S !== 0) {
                t = S;
                e: {
                  c = e;
                  var _ = S;
                  S = vm;
                  var j = gn && c.current.memoizedState.isDehydrated;
                  if (j && (Xs(
                    c,
                    _
                  ).flags |= 256), _ = Rd(
                    c,
                    _,
                    !1
                  ), _ !== ff) {
                    if (Tv && !j) {
                      c.errorRecoveryDisabledLanes |= m, dc |= m, c = po;
                      break e;
                    }
                    c = ei, ei = S, c !== null && Vu(c);
                  }
                  c = _;
                }
                if (m = !1, c !== ff) continue;
              }
            }
            if (c === dm) {
              Xs(e, 0), Zu(e, t, 0, !0);
              break;
            }
            e: {
              switch (s = e, c) {
                case ms:
                case dm:
                  throw Error("Root did not complete. This is a bug in React.");
                case po:
                  if ((t & 4194176) === t) {
                    Zu(
                      s,
                      t,
                      Ql,
                      !ps
                    );
                    break e;
                  }
                  break;
                case ff:
                  ei = null;
                  break;
                case Bv:
                case HA:
                  break;
                default:
                  throw Error("Unknown root exit status.");
              }
              if (s.finishedWork = l, s.finishedLanes = t, le.actQueue !== null)
                bd(
                  s,
                  ei,
                  Am,
                  kp,
                  Ql,
                  dc,
                  vo,
                  NA,
                  -0,
                  0
                );
              else {
                if ((t & 62914560) === t && (c = Mv + UA - y(), 10 < c)) {
                  if (Zu(
                    s,
                    t,
                    Ql,
                    !ps
                  ), tt(s, 0) !== 0) break e;
                  s.timeoutHandle = zl(
                    km.bind(
                      null,
                      s,
                      l,
                      ei,
                      Am,
                      kp,
                      t,
                      Ql,
                      dc,
                      vo,
                      ps,
                      tS,
                      -0,
                      0
                    ),
                    c
                  );
                  break e;
                }
                km(
                  s,
                  l,
                  ei,
                  Am,
                  kp,
                  t,
                  Ql,
                  dc,
                  vo,
                  ps,
                  NA,
                  -0,
                  0
                );
              }
            }
          }
          break;
        } while (!0);
        sa(e);
      }
      function Vu(e) {
        ei === null ? ei = e : ei.push.apply(
          ei,
          e
        );
      }
      function km(e, t, l, s, c, m, S, _, j, ae, Re, Ue, Je) {
        var Et = t.subtreeFlags;
        if ((Et & 8192 || (Et & 16785408) === 16785408) && (Ri(), Br(t), t = Ih(), t !== null)) {
          e.cancelPendingCommit = t(
            bd.bind(
              null,
              e,
              l,
              s,
              c,
              S,
              _,
              j,
              eS,
              Ue,
              Je
            )
          ), Zu(
            e,
            m,
            S,
            !ae
          );
          return;
        }
        bd(
          e,
          l,
          s,
          c,
          S,
          _,
          j,
          Re,
          Ue,
          Je
        );
      }
      function zh(e) {
        for (var t = e; ; ) {
          var l = t.tag;
          if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
            for (var s = 0; s < l.length; s++) {
              var c = l[s], m = c.getSnapshot;
              c = c.value;
              try {
                if (!w(m(), c)) return !1;
              } catch {
                return !1;
              }
            }
          if (l = t.child, t.subtreeFlags & 16384 && l !== null)
            l.return = t, t = l;
          else {
            if (t === e) break;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) return !0;
              t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
          }
        }
        return !0;
      }
      function Zu(e, t, l, s) {
        t &= ~Rv, t &= ~dc, e.suspendedLanes |= t, e.pingedLanes &= ~t, s && (e.warmLanes |= t), s = e.expirationTimes;
        for (var c = t; 0 < c; ) {
          var m = 31 - ka(c), S = 1 << m;
          s[m] = -1, c &= ~S;
        }
        l !== 0 && Ml(e, l, t);
      }
      function Ei() {
        return (Xt & (jn | Gi)) === ll ? (Bt(0), !1) : !0;
      }
      function Cd() {
        if (ht !== null) {
          if (kt === Cl)
            var e = ht.return;
          else
            e = ht, xc(), No(e), kr = null, sm = 0, e = ht;
          for (; e !== null; )
            nd(e.alternate, e), e = e.return;
          ht = null;
        }
      }
      function Xs(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var l = e.timeoutHandle;
        l !== wc && (e.timeoutHandle = wc, iu(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), Cd(), Wt = e, ht = l = gi(e.current, null), yt = t, kt = Cl, jl = null, ps = !1, mf = $t(e, t), Tv = !1, Ra = ms, vo = Ql = Rv = dc = fc = 0, ei = vm = null, kp = !1, (t & 8) !== 0 && (t |= t & 32);
        var s = e.entangledLanes;
        if (s !== 0)
          for (e = e.entanglements, s &= t; 0 < s; ) {
            var c = 31 - ka(s), m = 1 << c;
            t |= e[c], s &= ~m;
          }
        return zi = t, ye(), ku.discardPendingWarnings(), l;
      }
      function $m(e, t) {
        lt = null, le.H = Ni, le.getCurrentStack = null, wa = !1, Ia = null, t === xp ? (t = Mo(), kt = pm) : t === cv ? (t = Mo(), kt = OA) : kt = t === EA ? Cv : t !== null && typeof t == "object" && typeof t.then == "function" ? df : mm, jl = t;
        var l = ht;
        if (l === null)
          Ra = dm, Dl(
            e,
            Ya(t, e.current)
          );
        else
          switch (l.mode & 2 && Mt(l), Qn(), kt) {
            case mm:
              Oe !== null && typeof Oe.markComponentErrored == "function" && Oe.markComponentErrored(
                l,
                t,
                yt
              );
              break;
            case ho:
            case pm:
            case df:
            case hm:
              Oe !== null && typeof Oe.markComponentSuspended == "function" && Oe.markComponentSuspended(
                l,
                t,
                yt
              );
          }
      }
      function Vs() {
        var e = yu.current;
        return e === null ? !0 : (yt & 4194176) === yt ? Ui === null : (yt & 62914560) === yt || (yt & 536870912) !== 0 ? e === Ui : !1;
      }
      function ep() {
        var e = le.H;
        return le.H = Ni, e === null ? Ni : e;
      }
      function tp() {
        var e = le.A;
        return le.A = P0, e;
      }
      function Td() {
        Ra = po, ps || (yt & 4194176) !== yt && yu.current !== null || (mf = !0), (fc & 134217727) === 0 && (dc & 134217727) === 0 || Wt === null || Zu(
          Wt,
          yt,
          Ql,
          !1
        );
      }
      function Rd(e, t, l) {
        var s = Xt;
        Xt |= jn;
        var c = ep(), m = tp();
        if (Wt !== e || yt !== t) {
          if ($a) {
            var S = e.memoizedUpdaters;
            0 < S.size && (Vc(e, yt), S.clear()), Hn(e, t);
          }
          Am = null, Xs(e, t);
        }
        Ts(t), t = !1, S = Ra;
        e: do
          try {
            if (kt !== Cl && ht !== null) {
              var _ = ht, j = jl;
              switch (kt) {
                case Cv:
                  Cd(), S = Wp;
                  break e;
                case pm:
                case ho:
                case df:
                  yu.current === null && (t = !0);
                  var ae = kt;
                  if (kt = Cl, jl = null, Zs(e, _, j, ae), l && mf) {
                    S = ms;
                    break e;
                  }
                  break;
                default:
                  ae = kt, kt = Cl, jl = null, Zs(e, _, j, ae);
              }
            }
            ap(), S = Ra;
            break;
          } catch (Re) {
            $m(e, Re);
          }
        while (!0);
        return t && e.shellSuspendCounter++, xc(), Xt = s, le.H = c, le.A = m, bu(), ht === null && (Wt = null, yt = 0, ye()), S;
      }
      function ap() {
        for (; ht !== null; ) np(ht);
      }
      function xh(e, t) {
        var l = Xt;
        Xt |= jn;
        var s = ep(), c = tp();
        if (Wt !== e || yt !== t) {
          if ($a) {
            var m = e.memoizedUpdaters;
            0 < m.size && (Vc(e, yt), m.clear()), Hn(e, t);
          }
          Am = null, ym = y() + bv, Xs(e, t);
        } else
          mf = $t(
            e,
            t
          );
        Ts(t);
        e: do
          try {
            if (kt !== Cl && ht !== null)
              t: switch (t = ht, m = jl, kt) {
                case mm:
                  kt = Cl, jl = null, Zs(
                    e,
                    t,
                    m,
                    mm
                  );
                  break;
                case ho:
                  if (Ro(m)) {
                    kt = Cl, jl = null, lp(t);
                    break;
                  }
                  t = function() {
                    kt === ho && Wt === e && (kt = hm), sa(e);
                  }, m.then(t, t);
                  break e;
                case pm:
                  kt = hm;
                  break e;
                case OA:
                  kt = gv;
                  break e;
                case hm:
                  Ro(m) ? (kt = Cl, jl = null, lp(t)) : (kt = Cl, jl = null, Zs(
                    e,
                    t,
                    m,
                    hm
                  ));
                  break;
                case gv:
                  var S = null;
                  switch (ht.tag) {
                    case 26:
                      S = ht.memoizedState;
                    case 5:
                    case 27:
                      var _ = ht, j = _.type, ae = _.pendingProps;
                      if (S ? el(S) : as(j, ae)) {
                        kt = Cl, jl = null;
                        var Re = _.sibling;
                        if (Re !== null) ht = Re;
                        else {
                          var Ue = _.return;
                          Ue !== null ? (ht = Ue, Cr(Ue)) : ht = null;
                        }
                        break t;
                      }
                      break;
                    default:
                      console.error(
                        "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                      );
                  }
                  kt = Cl, jl = null, Zs(
                    e,
                    t,
                    m,
                    gv
                  );
                  break;
                case df:
                  kt = Cl, jl = null, Zs(
                    e,
                    t,
                    m,
                    df
                  );
                  break;
                case Cv:
                  Cd(), Ra = Wp;
                  break e;
                default:
                  throw Error(
                    "Unexpected SuspendedReason. This is a bug in React."
                  );
              }
            le.actQueue !== null ? ap() : Lh();
            break;
          } catch (Je) {
            $m(e, Je);
          }
        while (!0);
        return xc(), le.H = s, le.A = c, Xt = l, ht !== null ? (Oe !== null && typeof Oe.markRenderYielded == "function" && Oe.markRenderYielded(), ms) : (bu(), Wt = null, yt = 0, ye(), Ra);
      }
      function Lh() {
        for (; ht !== null && !o(); )
          np(ht);
      }
      function np(e) {
        var t = e.alternate;
        (e.mode & 2) !== ta ? (at(e), t = ee(
          e,
          cr,
          t,
          e,
          zi
        ), Mt(e)) : t = ee(
          e,
          cr,
          t,
          e,
          zi
        ), e.memoizedProps = e.pendingProps, t === null ? Cr(e) : ht = t;
      }
      function lp(e) {
        var t = ee(e, Jh, e);
        e.memoizedProps = e.pendingProps, t === null ? Cr(e) : ht = t;
      }
      function Jh(e) {
        var t = e.alternate, l = (e.mode & 2) !== ta;
        switch (l && at(e), e.tag) {
          case 15:
          case 0:
            t = nr(
              t,
              e,
              e.pendingProps,
              e.type,
              void 0,
              yt
            );
            break;
          case 11:
            t = nr(
              t,
              e,
              e.pendingProps,
              e.type.render,
              e.ref,
              yt
            );
            break;
          case 5:
            No(e);
          default:
            nd(t, e), e = ht = pp(e, zi), t = cr(t, e, zi);
        }
        return l && Mt(e), t;
      }
      function Zs(e, t, l, s) {
        xc(), No(t), kr = null, sm = 0;
        var c = t.return;
        try {
          if (xs(
            e,
            c,
            t,
            l,
            yt
          )) {
            Ra = dm, Dl(
              e,
              Ya(l, e.current)
            ), ht = null;
            return;
          }
        } catch (m) {
          if (c !== null) throw ht = c, m;
          Ra = dm, Dl(
            e,
            Ya(l, e.current)
          ), ht = null;
          return;
        }
        t.flags & 32768 ? (Tt || s === mm ? e = !0 : mf || (yt & 536870912) !== 0 ? e = !1 : (ps = e = !0, (s === ho || s === pm || s === df) && (s = yu.current, s !== null && s.tag === 13 && (s.flags |= 16384))), Md(t, e)) : Cr(t);
      }
      function Cr(e) {
        var t = e;
        do {
          if ((t.flags & 32768) !== 0) {
            Md(
              t,
              ps
            );
            return;
          }
          var l = t.alternate;
          if (e = t.return, at(t), l = ee(
            t,
            mr,
            l,
            t,
            zi
          ), (t.mode & 2) !== ta && Gt(t), l !== null) {
            ht = l;
            return;
          }
          if (t = t.sibling, t !== null) {
            ht = t;
            return;
          }
          ht = t = e;
        } while (t !== null);
        Ra === ms && (Ra = HA);
      }
      function Md(e, t) {
        do {
          var l = qi(e.alternate, e);
          if (l !== null) {
            l.flags &= 32767, ht = l;
            return;
          }
          if ((e.mode & 2) !== ta) {
            Gt(e), l = e.actualDuration;
            for (var s = e.child; s !== null; )
              l += s.actualDuration, s = s.sibling;
            e.actualDuration = l;
          }
          if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
            ht = e;
            return;
          }
          ht = e = l;
        } while (e !== null);
        Ra = Wp, ht = null;
      }
      function bd(e, t, l, s, c, m, S, _, j, ae) {
        var Re = le.T, Ue = Iu();
        try {
          Wa(2), le.T = null, Kh(
            e,
            t,
            l,
            s,
            Ue,
            c,
            m,
            S,
            _,
            j,
            ae
          );
        } finally {
          le.T = Re, Wa(Ue);
        }
      }
      function Kh(e, t, l, s, c, m, S, _) {
        do
          Si();
        while (yo !== null);
        if (ku.flushLegacyContextWarning(), ku.flushPendingUnsafeLifecycleWarnings(), (Xt & (jn | Gi)) !== ll)
          throw Error("Should not already be working.");
        var j = e.finishedWork;
        if (s = e.finishedLanes, Oe !== null && typeof Oe.markCommitStarted == "function" && Oe.markCommitStarted(s), j === null) return Zl(), null;
        if (s === 0 && console.error(
          "root.finishedLanes should not be empty during a commit. This is a bug in React."
        ), e.finishedWork = null, e.finishedLanes = 0, j === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        e.callbackNode = null, e.callbackPriority = 0, e.cancelPendingCommit = null;
        var ae = j.lanes | j.childLanes;
        if (ae |= $h, Rl(
          e,
          s,
          ae,
          m,
          S,
          _
        ), e === Wt && (ht = Wt = null, yt = 0), (j.subtreeFlags & 10256) === 0 && (j.flags & 10256) === 0 || $p || ($p = !0, Dv = ae, _v = l, Yh(I, function() {
          return Si(), null;
        })), Hp = Fr(), l = (j.flags & 15990) !== 0, (j.subtreeFlags & 15990) !== 0 || l ? (l = le.T, le.T = null, m = Iu(), Wa(2), S = Xt, Xt |= Gi, fd(e, j), pd(
          e,
          j,
          s
        ), Ic(e.containerInfo), e.current = j, Oe !== null && typeof Oe.markLayoutEffectsStarted == "function" && Oe.markLayoutEffectsStarted(
          s
        ), Nh(j, e, s), Oe !== null && typeof Oe.markLayoutEffectsStopped == "function" && Oe.markLayoutEffectsStopped(), h(), Xt = S, Wa(m), le.T = l) : e.current = j, (l = $p) ? ($p = !1, yo = e, Em = s) : (up(e, ae), Ao = 0, Bm = null), ae = e.pendingLanes, ae === 0 && (mc = null), l || op(e), On(j.stateNode, c), $a && e.memoizedUpdaters.clear(), Gh(), sa(e), t !== null)
          for (c = e.onRecoverableError, j = 0; j < t.length; j++)
            ae = t[j], l = jh(ae.stack), ee(
              ae.source,
              c,
              ae.value,
              l
            );
        return (Em & 3) !== 0 && Si(), ae = e.pendingLanes, (s & 4194218) !== 0 && (ae & 42) !== 0 ? (Up = !0, e === Hv ? Sm++ : (Sm = 0, Hv = e)) : Sm = 0, Bt(0), Zl(), null;
      }
      function jh(e) {
        return e = { componentStack: e }, Object.defineProperty(e, "digest", {
          get: function() {
            console.error(
              'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
            );
          }
        }), e;
      }
      function up(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, jc(t)));
      }
      function Si() {
        if (yo !== null) {
          var e = yo, t = Dv;
          Dv = 0;
          var l = li(Em), s = 32 > l ? 32 : l;
          l = le.T;
          var c = Iu();
          try {
            if (Wa(s), le.T = null, yo === null)
              var m = !1;
            else {
              s = _v, _v = null;
              var S = yo, _ = Em;
              if (yo = null, Em = 0, (Xt & (jn | Gi)) !== ll)
                throw Error(
                  "Cannot flush passive effects while already rendering."
                );
              Ov = !0, eh = !1, Oe !== null && typeof Oe.markPassiveEffectsStarted == "function" && Oe.markPassiveEffectsStarted(_);
              var j = Xt;
              if (Xt |= Gi, Yu(S.current), yd(
                S,
                S.current,
                _,
                s
              ), Oe !== null && typeof Oe.markPassiveEffectsStopped == "function" && Oe.markPassiveEffectsStopped(), op(S), Xt = j, Bt(0, !1), eh ? S === Bm ? Ao++ : (Ao = 0, Bm = S) : Ao = 0, eh = Ov = !1, Fe && typeof Fe.onPostCommitFiberRoot == "function")
                try {
                  Fe.onPostCommitFiberRoot(Ge, S);
                } catch (Re) {
                  Kn || (Kn = !0, console.error(
                    "React instrumentation encountered an error: %s",
                    Re
                  ));
                }
              var ae = S.current.stateNode;
              ae.effectDuration = 0, ae.passiveEffectDuration = 0, m = !0;
            }
            return m;
          } finally {
            Wa(c), le.T = l, up(e, t);
          }
        }
        return !1;
      }
      function ip(e, t, l) {
        t = Ya(l, t), t = Nc(e.stateNode, t, 2), e = Vn(e, t, 2), e !== null && (_n(e, 2), sa(e));
      }
      function Ut(e, t, l) {
        if (pf = !1, e.tag === 3)
          ip(e, e, l);
        else {
          for (; t !== null; ) {
            if (t.tag === 3) {
              ip(
                t,
                e,
                l
              );
              return;
            }
            if (t.tag === 1) {
              var s = t.stateNode;
              if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (mc === null || !mc.has(s))) {
                e = Ya(l, e), l = tu(2), s = Vn(t, l, 2), s !== null && (tr(
                  l,
                  s,
                  t,
                  e
                ), _n(s, 2), sa(s));
                return;
              }
            }
            t = t.return;
          }
          console.error(
            `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
            l
          );
        }
      }
      function Tr(e, t, l) {
        var s = e.pingCache;
        if (s === null) {
          s = e.pingCache = new W0();
          var c = /* @__PURE__ */ new Set();
          s.set(t, c);
        } else
          c = s.get(t), c === void 0 && (c = /* @__PURE__ */ new Set(), s.set(t, c));
        c.has(l) || (Tv = !0, c.add(l), s = Qh.bind(null, e, t, l), $a && Vc(e, l), t.then(s, s));
      }
      function Qh(e, t, l) {
        var s = e.pingCache;
        s !== null && s.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Bd() && le.actQueue === null && console.error(
          `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
        ), Wt === e && (yt & l) === l && (Ra === po || Ra === Bv && (yt & 62914560) === yt && y() - Mv < UA ? (Xt & jn) === ll && Xs(e, 0) : Rv |= l, vo === yt && (vo = 0)), sa(e);
      }
      function Dd(e, t) {
        t === 0 && (t = Tl()), e = Ee(e, t), e !== null && (_n(e, t), sa(e));
      }
      function sp(e) {
        var t = e.memoizedState, l = 0;
        t !== null && (l = t.retryLane), Dd(e, l);
      }
      function cp(e, t) {
        var l = 0;
        switch (e.tag) {
          case 13:
            var s = e.stateNode, c = e.memoizedState;
            c !== null && (l = c.retryLane);
            break;
          case 19:
            s = e.stateNode;
            break;
          case 22:
            s = e.stateNode._retryCache;
            break;
          default:
            throw Error(
              "Pinged unknown suspense boundary type. This is probably a bug in React."
            );
        }
        s !== null && s.delete(t), Dd(e, l);
      }
      function Xc(e, t, l) {
        if ((t.subtreeFlags & 33562624) !== 0)
          for (t = t.child; t !== null; ) {
            var s = e, c = t, m = c.type === Hr;
            m = l || m, c.tag !== 22 ? c.flags & 33554432 ? m && ee(
              c,
              Rr,
              s,
              c,
              (c.mode & 64) === ta
            ) : Xc(
              s,
              c,
              m
            ) : c.memoizedState === null && (m && c.flags & 8192 ? ee(
              c,
              Rr,
              s,
              c
            ) : c.subtreeFlags & 33554432 && ee(
              c,
              Xc,
              s,
              c,
              m
            )), t = t.sibling;
          }
      }
      function Rr(e, t) {
        var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : !0;
        gt(!0);
        try {
          Qs(t), l && Ed(t), wm(e, t.alternate, t, !1), l && Ad(e, t, 0, null, !1);
        } finally {
          gt(!1);
        }
      }
      function op(e) {
        var t = !0;
        e.current.mode & 24 || (t = !1), Xc(
          e,
          e.current,
          t
        );
      }
      function rp(e) {
        if ((Xt & jn) === ll) {
          var t = e.tag;
          if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
            if (t = Z(e) || "ReactComponent", th !== null) {
              if (th.has(t)) return;
              th.add(t);
            } else th = /* @__PURE__ */ new Set([t]);
            ee(e, function() {
              console.error(
                "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
              );
            });
          }
        }
      }
      function Vc(e, t) {
        $a && e.memoizedUpdaters.forEach(function(l) {
          ni(e, l, t);
        });
      }
      function Yh(e, t) {
        var l = le.actQueue;
        return l !== null ? (l.push(t), aS) : n(e, t);
      }
      function fp(e) {
        Bd() && le.actQueue === null && ee(e, function() {
          console.error(
            `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
            Z(e)
          );
        });
      }
      function Bi(e) {
        if (Bu === null) return e;
        var t = Bu(e);
        return t === void 0 ? e : t.current;
      }
      function _d(e) {
        if (Bu === null) return e;
        var t = Bu(e);
        return t === void 0 ? e != null && typeof e.render == "function" && (t = Bi(e.render), e.render !== t) ? (t = { $$typeof: uu, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
      }
      function dp(e, t) {
        if (Bu === null) return !1;
        var l = e.elementType;
        t = t.type;
        var s = !1, c = typeof t == "object" && t !== null ? t.$$typeof : null;
        switch (e.tag) {
          case 1:
            typeof t == "function" && (s = !0);
            break;
          case 0:
            (typeof t == "function" || c === Wn) && (s = !0);
            break;
          case 11:
            (c === uu || c === Wn) && (s = !0);
            break;
          case 14:
          case 15:
            (c === Ur || c === Wn) && (s = !0);
            break;
          default:
            return !1;
        }
        return !!(s && (e = Bu(l), e !== void 0 && e === Bu(t)));
      }
      function mp(e) {
        Bu !== null && typeof WeakSet == "function" && (hf === null && (hf = /* @__PURE__ */ new WeakSet()), hf.add(e));
      }
      function Hd(e, t, l) {
        var s = e.alternate, c = e.child, m = e.sibling, S = e.tag, _ = e.type, j = null;
        switch (S) {
          case 0:
          case 15:
          case 1:
            j = _;
            break;
          case 11:
            j = _.render;
        }
        if (Bu === null)
          throw Error("Expected resolveFamily to be set during hot reload.");
        var ae = !1;
        _ = !1, j !== null && (j = Bu(j), j !== void 0 && (l.has(j) ? _ = !0 : t.has(j) && (S === 1 ? _ = !0 : ae = !0))), hf !== null && (hf.has(e) || s !== null && hf.has(s)) && (_ = !0), _ && (e._debugNeedsRemount = !0), (_ || ae) && (s = Ee(e, 2), s !== null && na(s, e, 2)), c === null || _ || Hd(
          c,
          t,
          l
        ), m !== null && Hd(
          m,
          t,
          l
        );
      }
      function Xh(e, t, l, s) {
        this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, xA || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
      }
      function Od(e) {
        return e = e.prototype, !(!e || !e.isReactComponent);
      }
      function gi(e, t) {
        var l = e.alternate;
        switch (l === null ? (l = C(
          e.tag,
          t,
          e.key,
          e.mode
        ), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l._debugOwner = e._debugOwner, l._debugHookTypes = e._debugHookTypes, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null, l.actualDuration = -0, l.actualStartTime = -1.1), l.flags = e.flags & 31457280, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : {
          lanes: t.lanes,
          firstContext: t.firstContext,
          _debugThenableState: t._debugThenableState
        }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l.selfBaseDuration = e.selfBaseDuration, l.treeBaseDuration = e.treeBaseDuration, l._debugInfo = e._debugInfo, l._debugNeedsRemount = e._debugNeedsRemount, l.tag) {
          case 0:
          case 15:
            l.type = Bi(e.type);
            break;
          case 1:
            l.type = Bi(e.type);
            break;
          case 11:
            l.type = _d(e.type);
        }
        return l;
      }
      function pp(e, t) {
        e.flags &= 31457282;
        var l = e.alternate;
        return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
          lanes: t.lanes,
          firstContext: t.firstContext,
          _debugThenableState: t._debugThenableState
        }, e.selfBaseDuration = l.selfBaseDuration, e.treeBaseDuration = l.treeBaseDuration), e;
      }
      function Ud(e, t, l, s, c, m) {
        var S = 0, _ = e;
        if (typeof e == "function")
          Od(e) && (S = 1), _ = Bi(_);
        else if (typeof e == "string")
          We && ga ? (S = et(), S = At(e, l, S) ? 26 : no(e) ? 27 : 5) : We ? (S = et(), S = At(e, l, S) ? 26 : 5) : S = ga && no(e) ? 27 : 5;
        else
          e: switch (e) {
            case $i:
              return Wi(
                l.children,
                c,
                m,
                t
              );
            case Hr:
              S = 8, c |= 24;
              break;
            case Ld:
              return e = l, s = c, typeof e.id != "string" && console.error(
                'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
                typeof e.id
              ), t = C(12, e, t, s | 2), t.elementType = Ld, t.lanes = m, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
            case Ci:
              return t = C(13, l, t, c), t.elementType = Ci, t.lanes = m, t;
            case Sn:
              return t = C(19, l, t, c), t.elementType = Sn, t.lanes = m, t;
            case Zc:
              return hp(l, c, m, t);
            default:
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case Fh:
                  case Gl:
                    S = 10;
                    break e;
                  case Or:
                    S = 9;
                    break e;
                  case uu:
                    S = 11, _ = _d(_);
                    break e;
                  case Ur:
                    S = 14;
                    break e;
                  case Wn:
                    S = 16, _ = null;
                    break e;
                }
              _ = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (_ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? l = "null" : La(e) ? l = "array" : e !== void 0 && e.$$typeof === ki ? (l = "<" + ($(e.type) || "Unknown") + " />", _ = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, S = s ? typeof s.tag == "number" ? Z(s) : typeof s.name == "string" ? s.name : null : null, S && (_ += `

Check the render method of \`` + S + "`."), S = 29, l = Error(
                "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (l + "." + _)
              ), _ = null;
          }
        return t = C(S, l, t, c), t.elementType = e, t.type = _, t.lanes = m, t._debugOwner = s, t;
      }
      function Mr(e, t, l) {
        return t = Ud(
          e.type,
          e.key,
          e.props,
          e._owner,
          t,
          l
        ), t._debugOwner = e._owner, t;
      }
      function Wi(e, t, l, s) {
        return e = C(7, e, s, t), e.lanes = l, e;
      }
      function hp(e, t, l, s) {
        e = C(22, e, s, t), e.elementType = Zc, e.lanes = l;
        var c = {
          _visibility: 1,
          _pendingVisibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
          _current: null,
          detach: function() {
            var m = c, S = m._current;
            if (S === null)
              throw Error(
                "Calling Offscreen.detach before instance handle has been set."
              );
            if ((m._pendingVisibility & 2) === 0) {
              var _ = Ee(S, 2);
              _ !== null && (m._pendingVisibility |= 2, na(_, S, 2));
            }
          },
          attach: function() {
            var m = c, S = m._current;
            if (S === null)
              throw Error(
                "Calling Offscreen.detach before instance handle has been set."
              );
            if ((m._pendingVisibility & 2) !== 0) {
              var _ = Ee(S, 2);
              _ !== null && (m._pendingVisibility &= -3, na(_, S, 2));
            }
          }
        };
        return e.stateNode = c, e;
      }
      function Nd(e, t, l) {
        return e = C(6, e, null, t), e.lanes = l, e;
      }
      function br(e, t, l) {
        return t = C(
          4,
          e.children !== null ? e.children : [],
          e.key,
          t
        ), t.lanes = l, t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation
        }, t;
      }
      function Vh(e, t, l, s, c, m, S, _) {
        for (this.tag = 1, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = wc, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Dn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Dn(0), this.hiddenUpdates = Dn(null), this.identifierPrefix = s, this.onUncaughtError = c, this.onCaughtError = m, this.onRecoverableError = S, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = _, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
        this._debugRootType = l ? "hydrateRoot()" : "createRoot()";
      }
      function vp(e, t, l, s, c, m, S, _, j, ae, Re, Ue) {
        return e = new Vh(
          e,
          t,
          l,
          S,
          _,
          j,
          ae,
          Ue
        ), t = 1, m === !0 && (t |= 24), $a && (t |= 2), m = C(3, null, null, t), e.current = m, m.stateNode = e, t = rr(), Ai(t), e.pooledCache = t, Ai(t), m.memoizedState = {
          element: s,
          isDehydrated: l,
          cache: t
        }, Na(m), e;
      }
      function Pn(e) {
        return "" + e;
      }
      function Gd(e) {
        return e ? (e = Sl, e) : Sl;
      }
      function Dr(e, t, l, s) {
        return t.tag === 0 && Si(), zd(
          t.current,
          2,
          e,
          t,
          l,
          s
        ), 2;
      }
      function zd(e, t, l, s, c, m) {
        if (Fe && typeof Fe.onScheduleFiberRoot == "function")
          try {
            Fe.onScheduleFiberRoot(Ge, s, l);
          } catch (S) {
            Kn || (Kn = !0, console.error(
              "React instrumentation encountered an error: %s",
              S
            ));
          }
        Oe !== null && typeof Oe.markRenderScheduled == "function" && Oe.markRenderScheduled(t), c = Gd(c), s.context === null ? s.context = c : s.pendingContext = c, wa && Ia !== null && !JA && (JA = !0, console.error(
          `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
          Z(Ia) || "Unknown"
        )), s = Uu(t), s.payload = { element: l }, m = m === void 0 ? null : m, m !== null && (typeof m != "function" && console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          m
        ), s.callback = m), l = Vn(e, s, t), l !== null && (na(l, e, t), Rs(l, e, t));
      }
      function xd(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
          var l = e.retryLane;
          e.retryLane = l !== 0 && l < t ? l : t;
        }
      }
      function _r(e, t) {
        xd(e, t), (e = e.alternate) && xd(e, t);
      }
      function Zh() {
        return Ia;
      }
      function yp() {
        for (var e = /* @__PURE__ */ new Map(), t = 1, l = 0; 31 > l; l++) {
          var s = Ne(t);
          e.set(t, s), t *= 2;
        }
        return e;
      }
      var mt = {}, qh = Ec, xn = n0(), Fa = Object.assign, Ap = Symbol.for("react.element"), ki = Symbol.for("react.transitional.element"), ra = Symbol.for("react.portal"), $i = Symbol.for("react.fragment"), Hr = Symbol.for("react.strict_mode"), Ld = Symbol.for("react.profiler"), Fh = Symbol.for("react.provider"), Or = Symbol.for("react.consumer"), Gl = Symbol.for("react.context"), uu = Symbol.for("react.forward_ref"), Ci = Symbol.for("react.suspense"), Sn = Symbol.for("react.suspense_list"), Ur = Symbol.for("react.memo"), Wn = Symbol.for("react.lazy"), Zc = Symbol.for("react.offscreen"), Nr = Symbol.for("react.memo_cache_sentinel"), qc = Symbol.iterator, Jd = Symbol.for("react.client.reference"), le = qh.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Fc = 0, vl, Kd, Ep, Gr, Sp, Bp, gp;
      ce.__reactDisabledLog = !0;
      var es, Ln, Bn = !1, zr = new (typeof WeakMap == "function" ? WeakMap : Map)(), Ia = null, wa = !1, La = Array.isArray, xr = u.rendererVersion, yl = u.rendererPackageName, kn = u.extraDevToolsConfig, Al = u.getPublicInstance, qu = u.getRootHostContext, Fu = u.getChildHostContext, Pa = u.prepareForCommit, Ic = u.resetAfterCommit, Ti = u.createInstance, qs = u.appendInitialChild, on = u.finalizeInitialChildren, Da = u.shouldSetTextContent, Ct = u.createTextInstance, zl = u.scheduleTimeout, iu = u.cancelTimeout, wc = u.noTimeout, Ea = u.isPrimaryRenderer;
      u.warnsIfNotActing;
      var va = u.supportsMutation, su = u.supportsPersistence, gn = u.supportsHydration, ts = u.getInstanceFromNode;
      u.beforeActiveInstanceBlur, u.afterActiveInstanceBlur;
      var jd = u.preparePortalMount;
      u.prepareScopeUpdate, u.getInstanceFromScope;
      var Wa = u.setCurrentUpdatePriority, Iu = u.getCurrentUpdatePriority, Fs = u.resolveUpdatePriority;
      u.resolveEventType, u.resolveEventTimeStamp;
      var Pc = u.shouldAttemptEagerTransition, Qd = u.detachDeletedInstance;
      u.requestPostPaintCallback;
      var Is = u.maySuspendCommit, as = u.preloadInstance, Ri = u.startSuspendingCommit, Lr = u.suspendInstance, Ih = u.waitForCommitToBeReady, cu = u.NotPendingTransition, wu = u.HostTransitionContext, Jr = u.resetFormInstance, ws = u.bindToConsole, Ps = u.supportsMicrotasks, Wc = u.scheduleMicrotask, El = u.supportsTestSelectors, Cp = u.findFiberRoot, Ws = u.getBoundingRect, Kr = u.getTextContent, rn = u.isHiddenSubtree, ou = u.matchAccessibilityRole, _a = u.setFocusIfFocusable, Mi = u.setupIntersectionObserver, ft = u.appendChild, Kt = u.appendChildToContainer, Sa = u.commitTextUpdate, jr = u.commitMount, ks = u.commitUpdate, ns = u.insertBefore, Qr = u.insertInContainerBefore, kc = u.removeChild, $s = u.removeChildFromContainer, Tp = u.resetTextContent, Yd = u.hideInstance, ru = u.hideTextInstance, ls = u.unhideInstance, bi = u.unhideTextInstance, us = u.clearContainer, Xd = u.cloneInstance, Vd = u.createContainerChildSet, Zd = u.appendChildToContainerChildSet, Ja = u.finalizeContainerChildren, Yr = u.replaceContainerChildren, $c = u.cloneHiddenInstance, Di = u.cloneHiddenTextInstance, xl = u.isSuspenseInstancePending, qd = u.isSuspenseInstanceFallback, wh = u.getSuspenseInstanceFallbackErrorDetails, Ph = u.registerSuspenseInstanceRetry, fa = u.canHydrateFormStateMarker, Rp = u.isFormStateMarkerMatching, Pu = u.getNextHydratableSibling, fu = u.getFirstHydratableChild, da = u.getFirstHydratableChildWithinContainer, Fd = u.getFirstHydratableChildWithinSuspenseInstance, Mp = u.canHydrateInstance, Ka = u.canHydrateTextInstance, bp = u.canHydrateSuspenseInstance, Ba = u.hydrateInstance, $n = u.hydrateTextInstance, Ll = u.hydrateSuspenseInstance, is = u.getNextHydratableInstanceAfterSuspenseInstance, Wh = u.commitHydratedContainer, Xr = u.commitHydratedSuspenseInstance, Vr = u.clearSuspenseBoundary, Zr = u.clearSuspenseBoundaryFromContainer, eo = u.shouldDeleteUnhydratedTailInstances, to = u.diffHydratedPropsForDevWarnings, ec = u.diffHydratedTextForDevWarnings, Dp = u.describeHydratableInstanceForDevWarnings, jt = u.validateHydratableInstance, qt = u.validateHydratableTextInstance, We = u.supportsResources, At = u.isHostHoistableType, Qt = u.getHoistableRoot, Jn = u.getResource, du = u.acquireResource, ss = u.releaseResource, Id = u.hydrateHoistable, mu = u.mountHoistable, la = u.unmountHoistable, _i = u.createHoistableInstance, cs = u.prepareToCommitHoistables, wd = u.mayResourceSuspendCommit, el = u.preloadResource, tc = u.suspendResource, ga = u.supportsSingletons, Jl = u.resolveSingletonInstance, Pd = u.clearSingleton, Wd = u.acquireSingletonInstance, ao = u.releaseSingletonInstance, no = u.isHostSingletonType, pu = [], ac = [], Cn = -1, Sl = {};
      Object.freeze(Sl);
      var ka = Math.clz32 ? Math.clz32 : Ke, kd = Math.log, lo = Math.LN2, nc = 128, a = 4194304, n = xn.unstable_scheduleCallback, i = xn.unstable_cancelCallback, o = xn.unstable_shouldYield, h = xn.unstable_requestPaint, y = xn.unstable_now, b = xn.unstable_ImmediatePriority, z = xn.unstable_UserBlockingPriority, I = xn.unstable_NormalPriority, pe = xn.unstable_IdlePriority, _e = xn.log, Le = xn.unstable_setDisableYieldValue, Ge = null, Fe = null, Oe = null, Kn = !1, $a = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", w = typeof Object.is == "function" ? Object.is : Du, F = /* @__PURE__ */ new WeakMap(), te = [], ge = 0, Ze = null, Yt = 0, qe = [], it = 0, ea = null, ot = 1, fn = "", Hi = x(null), $d = x(null), lc = x(null), _p = x(null), zy = /["'&<>\n\t]|^\s|\s$/, tl = null, Tn = null, Tt = !1, os = !1, hu = null, Wu = null, Oi = !1, kh = Error(
        "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
      ), ta = 0, vu = [], qr = 0, $h = 0, Fr = xn.unstable_now, Hp = -0, Bl = -1.1, uo = -0, Op = !1, Up = !1, Np = null, Ir = null, ev = !1, tv = !1, Gp = !1, av = !1, wr = 0, nv = {}, em = null, lv = 0, io = 0, Pr = null, xy = 0, Ly = 1, Jy = 2, uv = 3, uc = !1, Ky = !1, iv = null, sv = !1, Q0 = Object.prototype.hasOwnProperty, ku = {
        recordUnsafeLifecycleWarnings: function() {
        },
        flushPendingUnsafeLifecycleWarnings: function() {
        },
        recordLegacyContextWarning: function() {
        },
        flushLegacyContextWarning: function() {
        },
        discardPendingWarnings: function() {
        }
      }, tm = [], am = [], nm = [], lm = [], um = [], im = [], so = /* @__PURE__ */ new Set();
      ku.recordUnsafeLifecycleWarnings = function(e, t) {
        so.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && tm.push(e), e.mode & 8 && typeof t.UNSAFE_componentWillMount == "function" && am.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && nm.push(e), e.mode & 8 && typeof t.UNSAFE_componentWillReceiveProps == "function" && lm.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && um.push(e), e.mode & 8 && typeof t.UNSAFE_componentWillUpdate == "function" && im.push(e));
      }, ku.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        0 < tm.length && (tm.forEach(function(_) {
          e.add(
            Z(_) || "Component"
          ), so.add(_.type);
        }), tm = []);
        var t = /* @__PURE__ */ new Set();
        0 < am.length && (am.forEach(function(_) {
          t.add(
            Z(_) || "Component"
          ), so.add(_.type);
        }), am = []);
        var l = /* @__PURE__ */ new Set();
        0 < nm.length && (nm.forEach(function(_) {
          l.add(
            Z(_) || "Component"
          ), so.add(_.type);
        }), nm = []);
        var s = /* @__PURE__ */ new Set();
        0 < lm.length && (lm.forEach(
          function(_) {
            s.add(
              Z(_) || "Component"
            ), so.add(_.type);
          }
        ), lm = []);
        var c = /* @__PURE__ */ new Set();
        0 < um.length && (um.forEach(function(_) {
          c.add(
            Z(_) || "Component"
          ), so.add(_.type);
        }), um = []);
        var m = /* @__PURE__ */ new Set();
        if (0 < im.length && (im.forEach(function(_) {
          m.add(
            Z(_) || "Component"
          ), so.add(_.type);
        }), im = []), 0 < t.size) {
          var S = G(
            t
          );
          console.error(
            `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
            S
          );
        }
        0 < s.size && (S = G(
          s
        ), console.error(
          `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
          S
        )), 0 < m.size && (S = G(
          m
        ), console.error(
          `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
          S
        )), 0 < e.size && (S = G(e), console.warn(
          `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
          S
        )), 0 < l.size && (S = G(
          l
        ), console.warn(
          `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
          S
        )), 0 < c.size && (S = G(c), console.warn(
          `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
          S
        ));
      };
      var zp = /* @__PURE__ */ new Map(), jy = /* @__PURE__ */ new Set();
      ku.recordLegacyContextWarning = function(e, t) {
        for (var l = null, s = e; s !== null; )
          s.mode & 8 && (l = s), s = s.return;
        l === null ? console.error(
          "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
        ) : !jy.has(e.type) && (s = zp.get(l), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (s === void 0 && (s = [], zp.set(l, s)), s.push(e));
      }, ku.flushLegacyContextWarning = function() {
        zp.forEach(function(e) {
          if (e.length !== 0) {
            var t = e[0], l = /* @__PURE__ */ new Set();
            e.forEach(function(c) {
              l.add(Z(c) || "Component"), jy.add(c.type);
            });
            var s = G(l);
            ee(t, function() {
              console.error(
                `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
                s
              );
            });
          }
        });
      }, ku.discardPendingWarnings = function() {
        tm = [], am = [], nm = [], lm = [], um = [], im = [], zp = /* @__PURE__ */ new Map();
      };
      var xp = Error(
        "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`"
      ), cv = Error(
        "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
      ), Lp = {
        then: function() {
          console.error(
            'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
          );
        }
      }, Wr = null, Jp = !1, Qy = {
        "react-stack-bottom-frame": function(e, t, l) {
          var s = wa;
          wa = !0;
          try {
            return e(t, l);
          } finally {
            wa = s;
          }
        }
      }, ov = Qy["react-stack-bottom-frame"].bind(Qy), Yy = {
        "react-stack-bottom-frame": function(e) {
          var t = wa;
          wa = !0;
          try {
            return e.render();
          } finally {
            wa = t;
          }
        }
      }, Xy = Yy["react-stack-bottom-frame"].bind(Yy), Vy = {
        "react-stack-bottom-frame": function(e, t) {
          try {
            t.componentDidMount();
          } catch (l) {
            Ut(e, e.return, l);
          }
        }
      }, rv = Vy["react-stack-bottom-frame"].bind(Vy), Zy = {
        "react-stack-bottom-frame": function(e, t, l, s, c) {
          try {
            t.componentDidUpdate(l, s, c);
          } catch (m) {
            Ut(e, e.return, m);
          }
        }
      }, qy = Zy["react-stack-bottom-frame"].bind(Zy), Fy = {
        "react-stack-bottom-frame": function(e, t) {
          var l = t.stack;
          e.componentDidCatch(t.value, {
            componentStack: l !== null ? l : ""
          });
        }
      }, Y0 = Fy["react-stack-bottom-frame"].bind(Fy), Iy = {
        "react-stack-bottom-frame": function(e, t, l) {
          try {
            l.componentWillUnmount();
          } catch (s) {
            Ut(e, t, s);
          }
        }
      }, wy = Iy["react-stack-bottom-frame"].bind(Iy), Py = {
        "react-stack-bottom-frame": function(e) {
          var t = e.create;
          return e = e.inst, t = t(), e.destroy = t;
        }
      }, X0 = Py["react-stack-bottom-frame"].bind(Py), Wy = {
        "react-stack-bottom-frame": function(e, t, l) {
          try {
            l();
          } catch (s) {
            Ut(e, t, s);
          }
        }
      }, V0 = Wy["react-stack-bottom-frame"].bind(Wy), ky = {
        "react-stack-bottom-frame": function(e) {
          var t = e._init;
          return t(e._payload);
        }
      }, ic = ky["react-stack-bottom-frame"].bind(ky), kr = null, sm = 0, dt = null, fv, $y = fv = !1, eA = {}, tA = {}, aA = {};
      P = function(e, t, l) {
        if (l !== null && typeof l == "object" && l._store && (!l._store.validated && l.key == null || l._store.validated === 2)) {
          if (typeof l._store != "object")
            throw Error(
              "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
            );
          l._store.validated = 1;
          var s = Z(e), c = s || "null";
          if (!eA[c]) {
            eA[c] = !0, l = l._owner, e = e._debugOwner;
            var m = "";
            e && typeof e.tag == "number" && (c = Z(e)) && (m = `

Check the render method of \`` + c + "`."), m || s && (m = `

Check the top-level render call using <` + s + ">.");
            var S = "";
            l != null && e !== l && (s = null, typeof l.tag == "number" ? s = Z(l) : typeof l.name == "string" && (s = l.name), s && (S = " It was passed a child from " + s + ".")), ee(t, function() {
              console.error(
                'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
                m,
                S
              );
            });
          }
        }
      };
      var co = Nf(!0), nA = Nf(!1), $r = x(null), Kp = x(0), yu = x(null), Ui = null, ef = 1, cm = 2, en = x(0), Au = 0, Eu = 1, al = 2, Rn = 4, tn = 8, tf, lA = /* @__PURE__ */ new Set(), uA = /* @__PURE__ */ new Set(), dv = /* @__PURE__ */ new Set(), iA = /* @__PURE__ */ new Set(), sc = 0, lt = null, Ft = null, ja = null, jp = !1, af = !1, oo = !1, Qp = 0, om = 0, rs = null, Z0 = 0, q0 = 25, ue = null, Su = null, fs = -1, rm = !1, mv = function() {
        return { lastEffect: null, events: null, stores: null, memoCache: null };
      }, Ni = {
        readContext: wt,
        use: Gu,
        useCallback: oa,
        useContext: oa,
        useEffect: oa,
        useImperativeHandle: oa,
        useLayoutEffect: oa,
        useInsertionEffect: oa,
        useMemo: oa,
        useReducer: oa,
        useRef: oa,
        useState: oa,
        useDebugValue: oa,
        useDeferredValue: oa,
        useTransition: oa,
        useSyncExternalStore: oa,
        useId: oa
      };
      Ni.useCacheRefresh = oa, Ni.useMemoCache = oa, Ni.useHostTransitionStatus = oa, Ni.useFormState = oa, Ni.useActionState = oa, Ni.useOptimistic = oa;
      var cc = null, ro = null, oc = null, fo = null, gl = null, nl = null, rc = null;
      cc = {
        readContext: function(e) {
          return wt(e);
        },
        use: Gu,
        useCallback: function(e, t) {
          return ue = "useCallback", nt(), ji(t), Jf(e, t);
        },
        useContext: function(e) {
          return ue = "useContext", nt(), wt(e);
        },
        useEffect: function(e, t) {
          return ue = "useEffect", nt(), ji(t), zs(e, t);
        },
        useImperativeHandle: function(e, t, l) {
          return ue = "useImperativeHandle", nt(), ji(l), Vi(e, t, l);
        },
        useInsertionEffect: function(e, t) {
          ue = "useInsertionEffect", nt(), ji(t), di(4, al, e, t);
        },
        useLayoutEffect: function(e, t) {
          return ue = "useLayoutEffect", nt(), ji(t), Xo(e, t);
        },
        useMemo: function(e, t) {
          ue = "useMemo", nt(), ji(t);
          var l = le.H;
          le.H = gl;
          try {
            return Zo(e, t);
          } finally {
            le.H = l;
          }
        },
        useReducer: function(e, t, l) {
          ue = "useReducer", nt();
          var s = le.H;
          le.H = gl;
          try {
            return Mc(e, t, l);
          } finally {
            le.H = s;
          }
        },
        useRef: function(e) {
          return ue = "useRef", nt(), Yo(e);
        },
        useState: function(e) {
          ue = "useState", nt();
          var t = le.H;
          le.H = gl;
          try {
            return Wl(e);
          } finally {
            le.H = t;
          }
        },
        useDebugValue: function() {
          ue = "useDebugValue", nt();
        },
        useDeferredValue: function(e, t) {
          return ue = "useDeferredValue", nt(), kl(e, t);
        },
        useTransition: function() {
          return ue = "useTransition", nt(), qo();
        },
        useSyncExternalStore: function(e, t, l) {
          return ue = "useSyncExternalStore", nt(), Dc(
            e,
            t,
            l
          );
        },
        useId: function() {
          return ue = "useId", nt(), wo();
        },
        useCacheRefresh: function() {
          return ue = "useCacheRefresh", nt(), Xf();
        }
      }, cc.useMemoCache = ci, cc.useHostTransitionStatus = $l, cc.useFormState = function(e, t) {
        return ue = "useFormState", nt(), Os(), ri(e, t);
      }, cc.useActionState = function(e, t) {
        return ue = "useActionState", nt(), ri(e, t);
      }, cc.useOptimistic = function(e) {
        return ue = "useOptimistic", nt(), bl(e);
      }, ro = {
        readContext: function(e) {
          return wt(e);
        },
        use: Gu,
        useCallback: function(e, t) {
          return ue = "useCallback", Be(), Jf(e, t);
        },
        useContext: function(e) {
          return ue = "useContext", Be(), wt(e);
        },
        useEffect: function(e, t) {
          return ue = "useEffect", Be(), zs(e, t);
        },
        useImperativeHandle: function(e, t, l) {
          return ue = "useImperativeHandle", Be(), Vi(e, t, l);
        },
        useInsertionEffect: function(e, t) {
          ue = "useInsertionEffect", Be(), di(4, al, e, t);
        },
        useLayoutEffect: function(e, t) {
          return ue = "useLayoutEffect", Be(), Xo(e, t);
        },
        useMemo: function(e, t) {
          ue = "useMemo", Be();
          var l = le.H;
          le.H = gl;
          try {
            return Zo(e, t);
          } finally {
            le.H = l;
          }
        },
        useReducer: function(e, t, l) {
          ue = "useReducer", Be();
          var s = le.H;
          le.H = gl;
          try {
            return Mc(e, t, l);
          } finally {
            le.H = s;
          }
        },
        useRef: function(e) {
          return ue = "useRef", Be(), Yo(e);
        },
        useState: function(e) {
          ue = "useState", Be();
          var t = le.H;
          le.H = gl;
          try {
            return Wl(e);
          } finally {
            le.H = t;
          }
        },
        useDebugValue: function() {
          ue = "useDebugValue", Be();
        },
        useDeferredValue: function(e, t) {
          return ue = "useDeferredValue", Be(), kl(e, t);
        },
        useTransition: function() {
          return ue = "useTransition", Be(), qo();
        },
        useSyncExternalStore: function(e, t, l) {
          return ue = "useSyncExternalStore", Be(), Dc(
            e,
            t,
            l
          );
        },
        useId: function() {
          return ue = "useId", Be(), wo();
        },
        useCacheRefresh: function() {
          return ue = "useCacheRefresh", Be(), Xf();
        }
      }, ro.useMemoCache = ci, ro.useHostTransitionStatus = $l, ro.useFormState = function(e, t) {
        return ue = "useFormState", Be(), Os(), ri(e, t);
      }, ro.useActionState = function(e, t) {
        return ue = "useActionState", Be(), ri(e, t);
      }, ro.useOptimistic = function(e) {
        return ue = "useOptimistic", Be(), bl(e);
      }, oc = {
        readContext: function(e) {
          return wt(e);
        },
        use: Gu,
        useCallback: function(e, t) {
          return ue = "useCallback", Be(), Vo(e, t);
        },
        useContext: function(e) {
          return ue = "useContext", Be(), wt(e);
        },
        useEffect: function(e, t) {
          ue = "useEffect", Be(), un(2048, tn, e, t);
        },
        useImperativeHandle: function(e, t, l) {
          return ue = "useImperativeHandle", Be(), Zt(e, t, l);
        },
        useInsertionEffect: function(e, t) {
          return ue = "useInsertionEffect", Be(), un(4, al, e, t);
        },
        useLayoutEffect: function(e, t) {
          return ue = "useLayoutEffect", Be(), un(4, Rn, e, t);
        },
        useMemo: function(e, t) {
          ue = "useMemo", Be();
          var l = le.H;
          le.H = nl;
          try {
            return mi(e, t);
          } finally {
            le.H = l;
          }
        },
        useReducer: function(e, t, l) {
          ue = "useReducer", Be();
          var s = le.H;
          le.H = nl;
          try {
            return Qi(e, t, l);
          } finally {
            le.H = s;
          }
        },
        useRef: function() {
          return ue = "useRef", Be(), Ot().memoizedState;
        },
        useState: function() {
          ue = "useState", Be();
          var e = le.H;
          le.H = nl;
          try {
            return Qi(Zn);
          } finally {
            le.H = e;
          }
        },
        useDebugValue: function() {
          ue = "useDebugValue", Be();
        },
        useDeferredValue: function(e, t) {
          return ue = "useDeferredValue", Be(), Kf(e, t);
        },
        useTransition: function() {
          return ue = "useTransition", Be(), Fo();
        },
        useSyncExternalStore: function(e, t, l) {
          return ue = "useSyncExternalStore", Be(), _c(
            e,
            t,
            l
          );
        },
        useId: function() {
          return ue = "useId", Be(), Ot().memoizedState;
        },
        useCacheRefresh: function() {
          return ue = "useCacheRefresh", Be(), Ot().memoizedState;
        }
      }, oc.useMemoCache = ci, oc.useHostTransitionStatus = $l, oc.useFormState = function(e) {
        return ue = "useFormState", Be(), Os(), Xi(e);
      }, oc.useActionState = function(e) {
        return ue = "useActionState", Be(), Xi(e);
      }, oc.useOptimistic = function(e, t) {
        return ue = "useOptimistic", Be(), Lo(e, t);
      }, fo = {
        readContext: function(e) {
          return wt(e);
        },
        use: Gu,
        useCallback: function(e, t) {
          return ue = "useCallback", Be(), Vo(e, t);
        },
        useContext: function(e) {
          return ue = "useContext", Be(), wt(e);
        },
        useEffect: function(e, t) {
          ue = "useEffect", Be(), un(2048, tn, e, t);
        },
        useImperativeHandle: function(e, t, l) {
          return ue = "useImperativeHandle", Be(), Zt(e, t, l);
        },
        useInsertionEffect: function(e, t) {
          return ue = "useInsertionEffect", Be(), un(4, al, e, t);
        },
        useLayoutEffect: function(e, t) {
          return ue = "useLayoutEffect", Be(), un(4, Rn, e, t);
        },
        useMemo: function(e, t) {
          ue = "useMemo", Be();
          var l = le.H;
          le.H = rc;
          try {
            return mi(e, t);
          } finally {
            le.H = l;
          }
        },
        useReducer: function(e, t, l) {
          ue = "useReducer", Be();
          var s = le.H;
          le.H = rc;
          try {
            return Yi(e, t, l);
          } finally {
            le.H = s;
          }
        },
        useRef: function() {
          return ue = "useRef", Be(), Ot().memoizedState;
        },
        useState: function() {
          ue = "useState", Be();
          var e = le.H;
          le.H = rc;
          try {
            return Yi(Zn);
          } finally {
            le.H = e;
          }
        },
        useDebugValue: function() {
          ue = "useDebugValue", Be();
        },
        useDeferredValue: function(e, t) {
          return ue = "useDeferredValue", Be(), jf(e, t);
        },
        useTransition: function() {
          return ue = "useTransition", Be(), Io();
        },
        useSyncExternalStore: function(e, t, l) {
          return ue = "useSyncExternalStore", Be(), _c(
            e,
            t,
            l
          );
        },
        useId: function() {
          return ue = "useId", Be(), Ot().memoizedState;
        },
        useCacheRefresh: function() {
          return ue = "useCacheRefresh", Be(), Ot().memoizedState;
        }
      }, fo.useMemoCache = ci, fo.useHostTransitionStatus = $l, fo.useFormState = function(e) {
        return ue = "useFormState", Be(), Os(), Oc(e);
      }, fo.useActionState = function(e) {
        return ue = "useActionState", Be(), Oc(e);
      }, fo.useOptimistic = function(e, t) {
        return ue = "useOptimistic", Be(), Ns(e, t);
      }, gl = {
        readContext: function(e) {
          return U(), wt(e);
        },
        use: function(e) {
          return O(), Gu(e);
        },
        useCallback: function(e, t) {
          return ue = "useCallback", O(), nt(), Jf(e, t);
        },
        useContext: function(e) {
          return ue = "useContext", O(), nt(), wt(e);
        },
        useEffect: function(e, t) {
          return ue = "useEffect", O(), nt(), zs(e, t);
        },
        useImperativeHandle: function(e, t, l) {
          return ue = "useImperativeHandle", O(), nt(), Vi(e, t, l);
        },
        useInsertionEffect: function(e, t) {
          ue = "useInsertionEffect", O(), nt(), di(4, al, e, t);
        },
        useLayoutEffect: function(e, t) {
          return ue = "useLayoutEffect", O(), nt(), Xo(e, t);
        },
        useMemo: function(e, t) {
          ue = "useMemo", O(), nt();
          var l = le.H;
          le.H = gl;
          try {
            return Zo(e, t);
          } finally {
            le.H = l;
          }
        },
        useReducer: function(e, t, l) {
          ue = "useReducer", O(), nt();
          var s = le.H;
          le.H = gl;
          try {
            return Mc(e, t, l);
          } finally {
            le.H = s;
          }
        },
        useRef: function(e) {
          return ue = "useRef", O(), nt(), Yo(e);
        },
        useState: function(e) {
          ue = "useState", O(), nt();
          var t = le.H;
          le.H = gl;
          try {
            return Wl(e);
          } finally {
            le.H = t;
          }
        },
        useDebugValue: function() {
          ue = "useDebugValue", O(), nt();
        },
        useDeferredValue: function(e, t) {
          return ue = "useDeferredValue", O(), nt(), kl(e, t);
        },
        useTransition: function() {
          return ue = "useTransition", O(), nt(), qo();
        },
        useSyncExternalStore: function(e, t, l) {
          return ue = "useSyncExternalStore", O(), nt(), Dc(
            e,
            t,
            l
          );
        },
        useId: function() {
          return ue = "useId", O(), nt(), wo();
        },
        useCacheRefresh: function() {
          return ue = "useCacheRefresh", nt(), Xf();
        },
        useMemoCache: function(e) {
          return O(), ci(e);
        }
      }, gl.useHostTransitionStatus = $l, gl.useFormState = function(e, t) {
        return ue = "useFormState", O(), nt(), ri(e, t);
      }, gl.useActionState = function(e, t) {
        return ue = "useActionState", O(), nt(), ri(e, t);
      }, gl.useOptimistic = function(e) {
        return ue = "useOptimistic", O(), nt(), bl(e);
      }, nl = {
        readContext: function(e) {
          return U(), wt(e);
        },
        use: function(e) {
          return O(), Gu(e);
        },
        useCallback: function(e, t) {
          return ue = "useCallback", O(), Be(), Vo(e, t);
        },
        useContext: function(e) {
          return ue = "useContext", O(), Be(), wt(e);
        },
        useEffect: function(e, t) {
          ue = "useEffect", O(), Be(), un(2048, tn, e, t);
        },
        useImperativeHandle: function(e, t, l) {
          return ue = "useImperativeHandle", O(), Be(), Zt(e, t, l);
        },
        useInsertionEffect: function(e, t) {
          return ue = "useInsertionEffect", O(), Be(), un(4, al, e, t);
        },
        useLayoutEffect: function(e, t) {
          return ue = "useLayoutEffect", O(), Be(), un(4, Rn, e, t);
        },
        useMemo: function(e, t) {
          ue = "useMemo", O(), Be();
          var l = le.H;
          le.H = nl;
          try {
            return mi(e, t);
          } finally {
            le.H = l;
          }
        },
        useReducer: function(e, t, l) {
          ue = "useReducer", O(), Be();
          var s = le.H;
          le.H = nl;
          try {
            return Qi(e, t, l);
          } finally {
            le.H = s;
          }
        },
        useRef: function() {
          return ue = "useRef", O(), Be(), Ot().memoizedState;
        },
        useState: function() {
          ue = "useState", O(), Be();
          var e = le.H;
          le.H = nl;
          try {
            return Qi(Zn);
          } finally {
            le.H = e;
          }
        },
        useDebugValue: function() {
          ue = "useDebugValue", O(), Be();
        },
        useDeferredValue: function(e, t) {
          return ue = "useDeferredValue", O(), Be(), Kf(e, t);
        },
        useTransition: function() {
          return ue = "useTransition", O(), Be(), Fo();
        },
        useSyncExternalStore: function(e, t, l) {
          return ue = "useSyncExternalStore", O(), Be(), _c(
            e,
            t,
            l
          );
        },
        useId: function() {
          return ue = "useId", O(), Be(), Ot().memoizedState;
        },
        useCacheRefresh: function() {
          return ue = "useCacheRefresh", Be(), Ot().memoizedState;
        },
        useMemoCache: function(e) {
          return O(), ci(e);
        }
      }, nl.useHostTransitionStatus = $l, nl.useFormState = function(e) {
        return ue = "useFormState", O(), Be(), Xi(e);
      }, nl.useActionState = function(e) {
        return ue = "useActionState", O(), Be(), Xi(e);
      }, nl.useOptimistic = function(e, t) {
        return ue = "useOptimistic", O(), Be(), Lo(e, t);
      }, rc = {
        readContext: function(e) {
          return U(), wt(e);
        },
        use: function(e) {
          return O(), Gu(e);
        },
        useCallback: function(e, t) {
          return ue = "useCallback", O(), Be(), Vo(e, t);
        },
        useContext: function(e) {
          return ue = "useContext", O(), Be(), wt(e);
        },
        useEffect: function(e, t) {
          ue = "useEffect", O(), Be(), un(2048, tn, e, t);
        },
        useImperativeHandle: function(e, t, l) {
          return ue = "useImperativeHandle", O(), Be(), Zt(e, t, l);
        },
        useInsertionEffect: function(e, t) {
          return ue = "useInsertionEffect", O(), Be(), un(4, al, e, t);
        },
        useLayoutEffect: function(e, t) {
          return ue = "useLayoutEffect", O(), Be(), un(4, Rn, e, t);
        },
        useMemo: function(e, t) {
          ue = "useMemo", O(), Be();
          var l = le.H;
          le.H = nl;
          try {
            return mi(e, t);
          } finally {
            le.H = l;
          }
        },
        useReducer: function(e, t, l) {
          ue = "useReducer", O(), Be();
          var s = le.H;
          le.H = nl;
          try {
            return Yi(e, t, l);
          } finally {
            le.H = s;
          }
        },
        useRef: function() {
          return ue = "useRef", O(), Be(), Ot().memoizedState;
        },
        useState: function() {
          ue = "useState", O(), Be();
          var e = le.H;
          le.H = nl;
          try {
            return Yi(Zn);
          } finally {
            le.H = e;
          }
        },
        useDebugValue: function() {
          ue = "useDebugValue", O(), Be();
        },
        useDeferredValue: function(e, t) {
          return ue = "useDeferredValue", O(), Be(), jf(e, t);
        },
        useTransition: function() {
          return ue = "useTransition", O(), Be(), Io();
        },
        useSyncExternalStore: function(e, t, l) {
          return ue = "useSyncExternalStore", O(), Be(), _c(
            e,
            t,
            l
          );
        },
        useId: function() {
          return ue = "useId", O(), Be(), Ot().memoizedState;
        },
        useCacheRefresh: function() {
          return ue = "useCacheRefresh", Be(), Ot().memoizedState;
        },
        useMemoCache: function(e) {
          return O(), ci(e);
        }
      }, rc.useHostTransitionStatus = $l, rc.useFormState = function(e) {
        return ue = "useFormState", O(), Be(), Oc(e);
      }, rc.useActionState = function(e) {
        return ue = "useActionState", O(), Be(), Oc(e);
      }, rc.useOptimistic = function(e, t) {
        return ue = "useOptimistic", O(), Be(), Ns(e, t);
      };
      var sA = {}, cA = /* @__PURE__ */ new Set(), oA = /* @__PURE__ */ new Set(), rA = /* @__PURE__ */ new Set(), fA = /* @__PURE__ */ new Set(), dA = /* @__PURE__ */ new Set(), mA = /* @__PURE__ */ new Set(), pA = /* @__PURE__ */ new Set(), hA = /* @__PURE__ */ new Set(), vA = /* @__PURE__ */ new Set(), yA = /* @__PURE__ */ new Set();
      Object.freeze(sA);
      var pv = {
        isMounted: function(e) {
          var t = Ia;
          if (t !== null && wa && t.tag === 1) {
            var l = t.stateNode;
            l._warnedAboutRefsInRender || console.error(
              "%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",
              Z(t) || "A component"
            ), l._warnedAboutRefsInRender = !0;
          }
          return (e = e._reactInternals) ? Te(e) === e : !1;
        },
        enqueueSetState: function(e, t, l) {
          e = e._reactInternals;
          var s = wn(e), c = Uu(s);
          c.payload = t, l != null && ($o(l), c.callback = l), t = Vn(e, c, s), t !== null && (na(t, e, s), Rs(t, e, s)), il(e, s);
        },
        enqueueReplaceState: function(e, t, l) {
          e = e._reactInternals;
          var s = wn(e), c = Uu(s);
          c.tag = Ly, c.payload = t, l != null && ($o(l), c.callback = l), t = Vn(e, c, s), t !== null && (na(t, e, s), Rs(t, e, s)), il(e, s);
        },
        enqueueForceUpdate: function(e, t) {
          e = e._reactInternals;
          var l = wn(e), s = Uu(l);
          s.tag = Jy, t != null && ($o(t), s.callback = t), t = Vn(e, s, l), t !== null && (na(t, e, l), Rs(t, e, l)), Oe !== null && typeof Oe.markForceUpdateScheduled == "function" && Oe.markForceUpdateScheduled(e, l);
        }
      }, AA = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var t = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
            error: e
          });
          if (!window.dispatchEvent(t)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", e);
          return;
        }
        console.error(e);
      }, nf = null, hv = null, EA = Error(
        "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
      ), dn = !1, SA = {}, BA = {}, gA = {}, CA = {}, lf = !1, TA = {}, vv = {}, yv = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
      }, RA = !1, Yp = x(null), Av = x(null), Ev = x(null), Xp = {}, Vp = null, uf = null, sf = !1, F0 = typeof AbortController < "u" ? AbortController : function() {
        var e = [], t = this.signal = {
          aborted: !1,
          addEventListener: function(l, s) {
            e.push(s);
          }
        };
        this.abort = function() {
          t.aborted = !0, e.forEach(function(l) {
            return l();
          });
        };
      }, I0 = xn.unstable_scheduleCallback, w0 = xn.unstable_NormalPriority, Ca = {
        $$typeof: Gl,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
        _currentRenderer: null,
        _currentRenderer2: null
      }, MA = le.S;
      le.S = function(e, t) {
        typeof t == "object" && t !== null && typeof t.then == "function" && _t(e, t), MA !== null && MA(e, t);
      };
      var mo = x(null), bA = null;
      bA = /* @__PURE__ */ new Set();
      var ds = !1, Ta = !1, Sv = !1, DA = typeof WeakSet == "function" ? WeakSet : Set, mn = null, cf = null, of = null, _A = !1, Qa = null, Kl = !1, $u = null, rf = 8192, P0 = {
        getCacheForType: function(e) {
          var t = wt(Ca), l = t.data.get(e);
          return l === void 0 && (l = e(), t.data.set(e, l)), l;
        },
        getOwner: function() {
          return Ia;
        }
      }, Zp = 0, qp = 1, Fp = 2, Ip = 3, wp = 4;
      if (typeof Symbol == "function" && Symbol.for) {
        var fm = Symbol.for;
        Zp = fm("selector.component"), qp = fm("selector.has_pseudo_class"), Fp = fm("selector.role"), Ip = fm("selector.test_id"), wp = fm("selector.text");
      }
      var Pp = [], W0 = typeof WeakMap == "function" ? WeakMap : Map, ll = 0, jn = 2, Gi = 4, ms = 0, dm = 1, ff = 2, Bv = 3, po = 4, HA = 5, Wp = 6, Xt = ll, Wt = null, ht = null, yt = 0, Cl = 0, mm = 1, ho = 2, pm = 3, OA = 4, gv = 5, df = 6, hm = 7, Cv = 8, kt = Cl, jl = null, ps = !1, mf = !1, Tv = !1, zi = 0, Ra = ms, fc = 0, dc = 0, Rv = 0, Ql = 0, vo = 0, vm = null, ei = null, kp = !1, Mv = 0, UA = 300, ym = 1 / 0, bv = 500, Am = null, mc = null, $p = !1, yo = null, Em = 0, Dv = 0, _v = null, k0 = 50, Sm = 0, Hv = null, Ov = !1, eh = !1, $0 = 50, Ao = 0, Bm = null, pf = !1, NA = 0, eS = 1, tS = 2, th = null, GA = !1, zA = /* @__PURE__ */ new Set(), aS = {}, Bu = null, hf = null, xA = !1;
      try {
        var LA = Object.preventExtensions({});
      } catch {
        xA = !0;
      }
      var JA = !1, KA = {}, jA = null, QA = null, YA = null, XA = null, VA = null, ZA = null, qA = null, FA = null, IA = null;
      return jA = function(e, t, l, s) {
        t = r(e, t), t !== null && (l = f(t.memoizedState, l, 0, s), t.memoizedState = l, t.baseState = l, e.memoizedProps = Fa({}, e.memoizedProps), l = Ee(e, 2), l !== null && na(l, e, 2));
      }, QA = function(e, t, l) {
        t = r(e, t), t !== null && (l = A(t.memoizedState, l, 0), t.memoizedState = l, t.baseState = l, e.memoizedProps = Fa({}, e.memoizedProps), l = Ee(e, 2), l !== null && na(l, e, 2));
      }, YA = function(e, t, l, s) {
        t = r(e, t), t !== null && (l = p(t.memoizedState, l, s), t.memoizedState = l, t.baseState = l, e.memoizedProps = Fa({}, e.memoizedProps), l = Ee(e, 2), l !== null && na(l, e, 2));
      }, XA = function(e, t, l) {
        e.pendingProps = f(e.memoizedProps, t, 0, l), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Ee(e, 2), t !== null && na(t, e, 2);
      }, VA = function(e, t) {
        e.pendingProps = A(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Ee(e, 2), t !== null && na(t, e, 2);
      }, ZA = function(e, t, l) {
        e.pendingProps = p(
          e.memoizedProps,
          t,
          l
        ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Ee(e, 2), t !== null && na(t, e, 2);
      }, qA = function(e) {
        var t = Ee(e, 2);
        t !== null && na(t, e, 2);
      }, FA = function(e) {
        E = e;
      }, IA = function(e) {
        B = e;
      }, mt.attemptContinuousHydration = function(e) {
        if (e.tag === 13) {
          var t = Ee(e, 67108864);
          t !== null && na(t, e, 67108864), _r(e, 67108864);
        }
      }, mt.attemptHydrationAtCurrentPriority = function(e) {
        if (e.tag === 13) {
          var t = wn(e), l = Ee(e, t);
          l !== null && na(l, e, t), _r(e, t);
        }
      }, mt.attemptSynchronousHydration = function(e) {
        switch (e.tag) {
          case 3:
            if (e = e.stateNode, e.current.memoizedState.isDehydrated) {
              var t = Ie(e.pendingLanes);
              if (t !== 0) {
                for (e.pendingLanes |= 2, e.entangledLanes |= 2; t; ) {
                  var l = 1 << 31 - ka(t);
                  e.entanglements[1] |= l, t &= ~l;
                }
                sa(e), (Xt & (jn | Gi)) === ll && (ym = y() + bv, Bt(0));
              }
            }
            break;
          case 13:
            t = Ee(e, 2), t !== null && na(t, e, 2), Ei(), _r(e, 2);
        }
      }, mt.batchedUpdates = function(e, t) {
        return e(t);
      }, mt.createComponentSelector = function(e) {
        return { $$typeof: Zp, value: e };
      }, mt.createContainer = function(e, t, l, s, c, m, S, _, j, ae) {
        return vp(
          e,
          t,
          !1,
          null,
          l,
          s,
          m,
          S,
          _,
          j,
          ae,
          null
        );
      }, mt.createHasPseudoClassSelector = function(e) {
        return { $$typeof: qp, value: e };
      }, mt.createHydrationContainer = function(e, t, l, s, c, m, S, _, j, ae, Re, Ue, Je) {
        return e = vp(
          l,
          s,
          !0,
          e,
          c,
          m,
          _,
          j,
          ae,
          Re,
          Ue,
          Je
        ), e.context = Gd(null), l = e.current, s = wn(l), c = Uu(s), c.callback = t ?? null, Vn(l, c, s), e.current.lanes = s, _n(e, s), sa(e), e;
      }, mt.createPortal = function(e, t, l) {
        var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        try {
          Pn(s);
          var c = !1;
        } catch {
          c = !0;
        }
        return c && (console.error(
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          typeof Symbol == "function" && Symbol.toStringTag && s[Symbol.toStringTag] || s.constructor.name || "Object"
        ), Pn(s)), {
          $$typeof: ra,
          key: s == null ? null : "" + s,
          children: e,
          containerInfo: t,
          implementation: l
        };
      }, mt.createRoleSelector = function(e) {
        return { $$typeof: Fp, value: e };
      }, mt.createTestNameSelector = function(e) {
        return { $$typeof: Ip, value: e };
      }, mt.createTextSelector = function(e) {
        return { $$typeof: wp, value: e };
      }, mt.defaultOnCaughtError = function(e, t) {
        var l = nf ? "The above error occurred in the <" + nf + "> component." : "The above error occurred in one of your React components.", s = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((hv || "Anonymous") + "."), c = le.getCurrentStack, m = t.componentStack != null ? t.componentStack : "";
        le.getCurrentStack = function() {
          return m;
        };
        try {
          typeof e == "object" && e !== null && typeof e.environmentName == "string" ? ws(
            "error",
            [
              `%o

%s

%s
`,
              e,
              l,
              s
            ],
            e.environmentName
          )() : console.error(
            `%o

%s

%s
`,
            e,
            l,
            s
          );
        } finally {
          le.getCurrentStack = c;
        }
      }, mt.defaultOnRecoverableError = function(e) {
        AA(e);
      }, mt.defaultOnUncaughtError = function(e, t) {
        AA(e), e = nf ? "An error occurred in the <" + nf + "> component." : "An error occurred in one of your React components.";
        var l = le.getCurrentStack, s = t.componentStack != null ? t.componentStack : "";
        le.getCurrentStack = function() {
          return s;
        };
        try {
          console.warn(
            `%s

%s
`,
            e,
            `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
          );
        } finally {
          le.getCurrentStack = l;
        }
      }, mt.deferredUpdates = function(e) {
        var t = le.T, l = Iu();
        try {
          return Wa(32), le.T = null, e();
        } finally {
          Wa(l), le.T = t;
        }
      }, mt.discreteUpdates = function(e, t, l, s, c) {
        var m = le.T, S = Iu();
        try {
          return Wa(2), le.T = null, e(t, l, s, c);
        } finally {
          Wa(S), le.T = m, Xt === ll && (ym = y() + bv);
        }
      }, mt.findAllNodes = gr, mt.findBoundingRects = function(e, t) {
        if (!El)
          throw Error("Test selector API is not supported by this renderer.");
        t = gr(e, t), e = [];
        for (var l = 0; l < t.length; l++)
          e.push(Ws(t[l]));
        for (t = e.length - 1; 0 < t; t--) {
          l = e[t];
          for (var s = l.x, c = s + l.width, m = l.y, S = m + l.height, _ = t - 1; 0 <= _; _--)
            if (t !== _) {
              var j = e[_], ae = j.x, Re = ae + j.width, Ue = j.y, Je = Ue + j.height;
              if (s >= ae && m >= Ue && c <= Re && S <= Je) {
                e.splice(t, 1);
                break;
              } else if (s !== ae || l.width !== j.width || Je < m || Ue > S) {
                if (!(m !== Ue || l.height !== j.height || Re < s || ae > c)) {
                  ae > s && (j.width += ae - s, j.x = s), Re < c && (j.width = c - ae), e.splice(t, 1);
                  break;
                }
              } else {
                Ue > m && (j.height += Ue - m, j.y = m), Je < S && (j.height = S - Ue), e.splice(t, 1);
                break;
              }
            }
        }
        return e;
      }, mt.findHostInstance = function(e) {
        var t = e._reactInternals;
        if (t === void 0)
          throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
            "Argument appears to not be a ReactComponent. Keys: " + e
          ));
        return e = Q(t), e === null ? null : Al(e.stateNode);
      }, mt.findHostInstanceWithNoPortals = function(e) {
        return e = D(e), e = e !== null ? re(e) : null, e === null ? null : Al(e.stateNode);
      }, mt.findHostInstanceWithWarning = function(e, t) {
        var l = e._reactInternals;
        if (l === void 0)
          throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
            "Argument appears to not be a ReactComponent. Keys: " + e
          ));
        if (e = Q(l), e === null) return null;
        if (e.mode & 8) {
          var s = Z(l) || "Component";
          KA[s] || (KA[s] = !0, ee(e, function() {
            l.mode & 8 ? console.error(
              "%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://react.dev/link/strict-mode-find-node",
              t,
              t,
              s
            ) : console.error(
              "%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://react.dev/link/strict-mode-find-node",
              t,
              t,
              s
            );
          }));
        }
        return Al(e.stateNode);
      }, mt.flushPassiveEffects = Si, mt.flushSyncFromReconciler = function(e) {
        var t = Xt;
        Xt |= 1;
        var l = le.T, s = Iu();
        try {
          if (Wa(2), le.T = null, e)
            return e();
        } finally {
          Wa(s), le.T = l, Xt = t, (Xt & (jn | Gi)) === ll && Bt(0);
        }
      }, mt.flushSyncWork = Ei, mt.focusWithin = function(e, t) {
        if (!El)
          throw Error("Test selector API is not supported by this renderer.");
        for (e = cn(e), t = Wm(e, t), t = Array.from(t), e = 0; e < t.length; ) {
          var l = t[e++], s = l.tag;
          if (!rn(l)) {
            if ((s === 5 || s === 26 || s === 27) && _a(l.stateNode))
              return !0;
            for (l = l.child; l !== null; )
              t.push(l), l = l.sibling;
          }
        }
        return !1;
      }, mt.getFindAllNodesFailureDescription = function(e, t) {
        if (!El)
          throw Error("Test selector API is not supported by this renderer.");
        var l = 0, s = [];
        e = [cn(e), 0];
        for (var c = 0; c < e.length; ) {
          var m = e[c++], S = m.tag, _ = e[c++], j = t[_];
          if ((S !== 5 && S !== 26 && S !== 27 || !rn(m)) && (Xu(m, j) && (s.push(Sd(j)), _++, _ > l && (l = _)), _ < t.length))
            for (m = m.child; m !== null; )
              e.push(m, _), m = m.sibling;
        }
        if (l < t.length) {
          for (e = []; l < t.length; l++)
            e.push(Sd(t[l]));
          return `findAllNodes was able to match part of the selector:
  ` + (s.join(" > ") + `

No matching component was found for:
  `) + e.join(" > ");
        }
        return null;
      }, mt.getPublicRootInstance = function(e) {
        if (e = e.current, !e.child) return null;
        switch (e.child.tag) {
          case 27:
          case 5:
            return Al(e.child.stateNode);
          default:
            return e.child.stateNode;
        }
      }, mt.injectIntoDevTools = function() {
        var e = {
          bundleType: 1,
          version: xr,
          rendererPackageName: yl,
          currentDispatcherRef: le,
          findFiberByHostInstance: ts,
          reconcilerVersion: "19.0.0"
        };
        return kn !== null && (e.rendererConfig = kn), e.overrideHookState = jA, e.overrideHookStateDeletePath = QA, e.overrideHookStateRenamePath = YA, e.overrideProps = XA, e.overridePropsDeletePath = VA, e.overridePropsRenamePath = ZA, e.scheduleUpdate = qA, e.setErrorHandler = FA, e.setSuspenseHandler = IA, e.scheduleRefresh = T, e.scheduleRoot = R, e.setRefreshHandler = M, e.getCurrentFiber = Zh, e.getLaneLabelMap = yp, e.injectProfilingHooks = Cs, Mu(e);
      }, mt.isAlreadyRendering = function() {
        return (Xt & (jn | Gi)) !== ll;
      }, mt.observeVisibleRects = function(e, t, l, s) {
        function c() {
          var ae = gr(e, t);
          m.forEach(function(Re) {
            0 > ae.indexOf(Re) && j(Re);
          }), ae.forEach(function(Re) {
            0 > m.indexOf(Re) && _(Re);
          });
        }
        if (!El)
          throw Error("Test selector API is not supported by this renderer.");
        var m = gr(e, t);
        l = Mi(m, l, s);
        var S = l.disconnect, _ = l.observe, j = l.unobserve;
        return Pp.push(c), {
          disconnect: function() {
            var ae = Pp.indexOf(c);
            0 <= ae && Pp.splice(ae, 1), S();
          }
        };
      }, mt.shouldError = function(e) {
        return E(e);
      }, mt.shouldSuspend = function(e) {
        return B(e);
      }, mt.startHostTransition = function(e, t, l, s) {
        if (e.tag !== 5)
          throw Error(
            "Expected the form instance to be a HostComponent. This is a bug in React."
          );
        var c = Yf(e).queue;
        Qf(
          e,
          c,
          t,
          cu,
          l === null ? V : function() {
            le.T === null && console.error(
              "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
            );
            var m = Yf(e).next.queue;
            return Zi(
              e,
              m,
              {},
              wn(e)
            ), l(s);
          }
        );
      }, mt.updateContainer = function(e, t, l, s) {
        var c = t.current, m = wn(c);
        return zd(
          c,
          m,
          e,
          t,
          l,
          s
        ), m;
      }, mt.updateContainerSync = Dr, mt;
    }, d.exports.default = d.exports, Object.defineProperty(d.exports, "__esModule", { value: !0 }));
  }(Qv)), Qv.exports;
}
var yE;
function B1() {
  return yE || (yE = 1, process.env.NODE_ENV === "production" ? uh.exports = E1() : uh.exports = S1()), uh.exports;
}
var g1 = B1();
const C1 = /* @__PURE__ */ e0(g1);
var sh = { exports: {} }, Yv = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var AE;
function T1() {
  return AE || (AE = 1, function(d) {
    function u(D, Q) {
      var X = D.length;
      D.push(Q);
      e: for (; 0 < X; ) {
        var re = X - 1 >>> 1, x = D[re];
        if (0 < p(x, Q))
          D[re] = Q, D[X] = x, X = re;
        else break e;
      }
    }
    function r(D) {
      return D.length === 0 ? null : D[0];
    }
    function f(D) {
      if (D.length === 0) return null;
      var Q = D[0], X = D.pop();
      if (X !== Q) {
        D[0] = X;
        e: for (var re = 0, x = D.length, me = x >>> 1; re < me; ) {
          var de = 2 * (re + 1) - 1, Ke = D[de], Ne = de + 1, Ie = D[Ne];
          if (0 > p(Ke, X))
            Ne < x && 0 > p(Ie, Ke) ? (D[re] = Ie, D[Ne] = X, re = Ne) : (D[re] = Ke, D[de] = X, re = de);
          else if (Ne < x && 0 > p(Ie, X))
            D[re] = Ie, D[Ne] = X, re = Ne;
          else break e;
        }
      }
      return Q;
    }
    function p(D, Q) {
      var X = D.sortIndex - Q.sortIndex;
      return X !== 0 ? X : D.id - Q.id;
    }
    if (d.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var v = performance;
      d.unstable_now = function() {
        return v.now();
      };
    } else {
      var A = Date, B = A.now();
      d.unstable_now = function() {
        return A.now() - B;
      };
    }
    var E = [], C = [], R = 1, T = null, M = 3, O = !1, U = !1, V = !1, P = typeof setTimeout == "function" ? setTimeout : null, G = typeof clearTimeout == "function" ? clearTimeout : null, N = typeof setImmediate < "u" ? setImmediate : null;
    function $(D) {
      for (var Q = r(C); Q !== null; ) {
        if (Q.callback === null) f(C);
        else if (Q.startTime <= D)
          f(C), Q.sortIndex = Q.expirationTime, u(E, Q);
        else break;
        Q = r(C);
      }
    }
    function Z(D) {
      if (V = !1, $(D), !U)
        if (r(E) !== null)
          U = !0, Te();
        else {
          var Q = r(C);
          Q !== null && Ve(Z, Q.startTime - D);
        }
    }
    var ce = !1, W = -1, Ce = 5, ne = -1;
    function se() {
      return !(d.unstable_now() - ne < Ce);
    }
    function fe() {
      if (ce) {
        var D = d.unstable_now();
        ne = D;
        var Q = !0;
        try {
          e: {
            U = !1, V && (V = !1, G(W), W = -1), O = !0;
            var X = M;
            try {
              t: {
                for ($(D), T = r(E); T !== null && !(T.expirationTime > D && se()); ) {
                  var re = T.callback;
                  if (typeof re == "function") {
                    T.callback = null, M = T.priorityLevel;
                    var x = re(
                      T.expirationTime <= D
                    );
                    if (D = d.unstable_now(), typeof x == "function") {
                      T.callback = x, $(D), Q = !0;
                      break t;
                    }
                    T === r(E) && f(E), $(D);
                  } else f(E);
                  T = r(E);
                }
                if (T !== null) Q = !0;
                else {
                  var me = r(C);
                  me !== null && Ve(
                    Z,
                    me.startTime - D
                  ), Q = !1;
                }
              }
              break e;
            } finally {
              T = null, M = X, O = !1;
            }
            Q = void 0;
          }
        } finally {
          Q ? He() : ce = !1;
        }
      }
    }
    var He;
    if (typeof N == "function")
      He = function() {
        N(fe);
      };
    else if (typeof MessageChannel < "u") {
      var Xe = new MessageChannel(), ee = Xe.port2;
      Xe.port1.onmessage = fe, He = function() {
        ee.postMessage(null);
      };
    } else
      He = function() {
        P(fe, 0);
      };
    function Te() {
      ce || (ce = !0, He());
    }
    function Ve(D, Q) {
      W = P(function() {
        D(d.unstable_now());
      }, Q);
    }
    d.unstable_IdlePriority = 5, d.unstable_ImmediatePriority = 1, d.unstable_LowPriority = 4, d.unstable_NormalPriority = 3, d.unstable_Profiling = null, d.unstable_UserBlockingPriority = 2, d.unstable_cancelCallback = function(D) {
      D.callback = null;
    }, d.unstable_continueExecution = function() {
      U || O || (U = !0, Te());
    }, d.unstable_forceFrameRate = function(D) {
      0 > D || 125 < D ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Ce = 0 < D ? Math.floor(1e3 / D) : 5;
    }, d.unstable_getCurrentPriorityLevel = function() {
      return M;
    }, d.unstable_getFirstCallbackNode = function() {
      return r(E);
    }, d.unstable_next = function(D) {
      switch (M) {
        case 1:
        case 2:
        case 3:
          var Q = 3;
          break;
        default:
          Q = M;
      }
      var X = M;
      M = Q;
      try {
        return D();
      } finally {
        M = X;
      }
    }, d.unstable_pauseExecution = function() {
    }, d.unstable_requestPaint = function() {
    }, d.unstable_runWithPriority = function(D, Q) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var X = M;
      M = D;
      try {
        return Q();
      } finally {
        M = X;
      }
    }, d.unstable_scheduleCallback = function(D, Q, X) {
      var re = d.unstable_now();
      switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? re + X : re) : X = re, D) {
        case 1:
          var x = -1;
          break;
        case 2:
          x = 250;
          break;
        case 5:
          x = 1073741823;
          break;
        case 4:
          x = 1e4;
          break;
        default:
          x = 5e3;
      }
      return x = X + x, D = {
        id: R++,
        callback: Q,
        priorityLevel: D,
        startTime: X,
        expirationTime: x,
        sortIndex: -1
      }, X > re ? (D.sortIndex = X, u(C, D), r(E) === null && D === r(C) && (V ? (G(W), W = -1) : V = !0, Ve(Z, X - re))) : (D.sortIndex = x, u(E, D), U || O || (U = !0, Te())), D;
    }, d.unstable_shouldYield = se, d.unstable_wrapCallback = function(D) {
      var Q = M;
      return function() {
        var X = M;
        M = Q;
        try {
          return D.apply(this, arguments);
        } finally {
          M = X;
        }
      };
    };
  }(Yv)), Yv;
}
var Xv = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var EE;
function R1() {
  return EE || (EE = 1, function(d) {
    process.env.NODE_ENV !== "production" && function() {
      function u() {
        if (se) {
          var D = d.unstable_now();
          Xe = D;
          var Q = !0;
          try {
            e: {
              Z = !1, ce && (ce = !1, Ce(fe), fe = -1), $ = !0;
              var X = N;
              try {
                t: {
                  for (A(D), G = f(U); G !== null && !(G.expirationTime > D && E()); ) {
                    var re = G.callback;
                    if (typeof re == "function") {
                      G.callback = null, N = G.priorityLevel;
                      var x = re(
                        G.expirationTime <= D
                      );
                      if (D = d.unstable_now(), typeof x == "function") {
                        G.callback = x, A(D), Q = !0;
                        break t;
                      }
                      G === f(U) && p(U), A(D);
                    } else p(U);
                    G = f(U);
                  }
                  if (G !== null) Q = !0;
                  else {
                    var me = f(V);
                    me !== null && R(
                      B,
                      me.startTime - D
                    ), Q = !1;
                  }
                }
                break e;
              } finally {
                G = null, N = X, $ = !1;
              }
              Q = void 0;
            }
          } finally {
            Q ? ee() : se = !1;
          }
        }
      }
      function r(D, Q) {
        var X = D.length;
        D.push(Q);
        e: for (; 0 < X; ) {
          var re = X - 1 >>> 1, x = D[re];
          if (0 < v(x, Q))
            D[re] = Q, D[X] = x, X = re;
          else break e;
        }
      }
      function f(D) {
        return D.length === 0 ? null : D[0];
      }
      function p(D) {
        if (D.length === 0) return null;
        var Q = D[0], X = D.pop();
        if (X !== Q) {
          D[0] = X;
          e: for (var re = 0, x = D.length, me = x >>> 1; re < me; ) {
            var de = 2 * (re + 1) - 1, Ke = D[de], Ne = de + 1, Ie = D[Ne];
            if (0 > v(Ke, X))
              Ne < x && 0 > v(Ie, Ke) ? (D[re] = Ie, D[Ne] = X, re = Ne) : (D[re] = Ke, D[de] = X, re = de);
            else if (Ne < x && 0 > v(Ie, X))
              D[re] = Ie, D[Ne] = X, re = Ne;
            else break e;
          }
        }
        return Q;
      }
      function v(D, Q) {
        var X = D.sortIndex - Q.sortIndex;
        return X !== 0 ? X : D.id - Q.id;
      }
      function A(D) {
        for (var Q = f(V); Q !== null; ) {
          if (Q.callback === null) p(V);
          else if (Q.startTime <= D)
            p(V), Q.sortIndex = Q.expirationTime, r(U, Q);
          else break;
          Q = f(V);
        }
      }
      function B(D) {
        if (ce = !1, A(D), !Z)
          if (f(U) !== null)
            Z = !0, C();
          else {
            var Q = f(V);
            Q !== null && R(
              B,
              Q.startTime - D
            );
          }
      }
      function E() {
        return !(d.unstable_now() - Xe < He);
      }
      function C() {
        se || (se = !0, ee());
      }
      function R(D, Q) {
        fe = W(function() {
          D(d.unstable_now());
        }, Q);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), d.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var T = performance;
        d.unstable_now = function() {
          return T.now();
        };
      } else {
        var M = Date, O = M.now();
        d.unstable_now = function() {
          return M.now() - O;
        };
      }
      var U = [], V = [], P = 1, G = null, N = 3, $ = !1, Z = !1, ce = !1, W = typeof setTimeout == "function" ? setTimeout : null, Ce = typeof clearTimeout == "function" ? clearTimeout : null, ne = typeof setImmediate < "u" ? setImmediate : null, se = !1, fe = -1, He = 5, Xe = -1;
      if (typeof ne == "function")
        var ee = function() {
          ne(u);
        };
      else if (typeof MessageChannel < "u") {
        var Te = new MessageChannel(), Ve = Te.port2;
        Te.port1.onmessage = u, ee = function() {
          Ve.postMessage(null);
        };
      } else
        ee = function() {
          W(u, 0);
        };
      d.unstable_IdlePriority = 5, d.unstable_ImmediatePriority = 1, d.unstable_LowPriority = 4, d.unstable_NormalPriority = 3, d.unstable_Profiling = null, d.unstable_UserBlockingPriority = 2, d.unstable_cancelCallback = function(D) {
        D.callback = null;
      }, d.unstable_continueExecution = function() {
        Z || $ || (Z = !0, C());
      }, d.unstable_forceFrameRate = function(D) {
        0 > D || 125 < D ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : He = 0 < D ? Math.floor(1e3 / D) : 5;
      }, d.unstable_getCurrentPriorityLevel = function() {
        return N;
      }, d.unstable_getFirstCallbackNode = function() {
        return f(U);
      }, d.unstable_next = function(D) {
        switch (N) {
          case 1:
          case 2:
          case 3:
            var Q = 3;
            break;
          default:
            Q = N;
        }
        var X = N;
        N = Q;
        try {
          return D();
        } finally {
          N = X;
        }
      }, d.unstable_pauseExecution = function() {
      }, d.unstable_requestPaint = function() {
      }, d.unstable_runWithPriority = function(D, Q) {
        switch (D) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            D = 3;
        }
        var X = N;
        N = D;
        try {
          return Q();
        } finally {
          N = X;
        }
      }, d.unstable_scheduleCallback = function(D, Q, X) {
        var re = d.unstable_now();
        switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? re + X : re) : X = re, D) {
          case 1:
            var x = -1;
            break;
          case 2:
            x = 250;
            break;
          case 5:
            x = 1073741823;
            break;
          case 4:
            x = 1e4;
            break;
          default:
            x = 5e3;
        }
        return x = X + x, D = {
          id: P++,
          callback: Q,
          priorityLevel: D,
          startTime: X,
          expirationTime: x,
          sortIndex: -1
        }, X > re ? (D.sortIndex = X, r(V, D), f(U) === null && D === f(V) && (ce ? (Ce(fe), fe = -1) : ce = !0, R(B, X - re))) : (D.sortIndex = x, r(U, D), Z || $ || (Z = !0, C())), D;
      }, d.unstable_shouldYield = E, d.unstable_wrapCallback = function(D) {
        var Q = N;
        return function() {
          var X = N;
          N = Q;
          try {
            return D.apply(this, arguments);
          } finally {
            N = X;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(Xv)), Xv;
}
var SE;
function M1() {
  return SE || (SE = 1, process.env.NODE_ENV === "production" ? sh.exports = T1() : sh.exports = R1()), sh.exports;
}
var BE = M1();
const b1 = (d) => typeof d == "object" && typeof d.then == "function", So = [];
function l0(d, u, r = (f, p) => f === p) {
  if (d === u) return !0;
  if (!d || !u) return !1;
  const f = d.length;
  if (u.length !== f) return !1;
  for (let p = 0; p < f; p++) if (!r(d[p], u[p])) return !1;
  return !0;
}
function u0(d, u = null, r = !1, f = {}) {
  u === null && (u = [d]);
  for (const v of So)
    if (l0(u, v.keys, v.equal)) {
      if (r) return;
      if (Object.prototype.hasOwnProperty.call(v, "error")) throw v.error;
      if (Object.prototype.hasOwnProperty.call(v, "response"))
        return f.lifespan && f.lifespan > 0 && (v.timeout && clearTimeout(v.timeout), v.timeout = setTimeout(v.remove, f.lifespan)), v.response;
      if (!r) throw v.promise;
    }
  const p = {
    keys: u,
    equal: f.equal,
    remove: () => {
      const v = So.indexOf(p);
      v !== -1 && So.splice(v, 1);
    },
    promise: (
      // Execute the promise
      (b1(d) ? d : d(...u)).then((v) => {
        p.response = v, f.lifespan && f.lifespan > 0 && (p.timeout = setTimeout(p.remove, f.lifespan));
      }).catch((v) => p.error = v)
    )
  };
  if (So.push(p), !r) throw p.promise;
}
const D1 = (d, u, r) => u0(d, u, !1, r), _1 = (d, u, r) => void u0(d, u, !0, r), H1 = (d) => {
  if (d === void 0 || d.length === 0) So.splice(0, So.length);
  else {
    const u = So.find((r) => l0(d, r.keys, r.equal));
    u && u.remove();
  }
};
var ch = { exports: {} }, gm = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gE;
function O1() {
  if (gE) return gm;
  gE = 1;
  var d = Symbol.for("react.transitional.element"), u = Symbol.for("react.fragment");
  function r(f, p, v) {
    var A = null;
    if (v !== void 0 && (A = "" + v), p.key !== void 0 && (A = "" + p.key), "key" in p) {
      v = {};
      for (var B in p)
        B !== "key" && (v[B] = p[B]);
    } else v = p;
    return p = v.ref, {
      $$typeof: d,
      type: f,
      key: A,
      ref: p !== void 0 ? p : null,
      props: v
    };
  }
  return gm.Fragment = u, gm.jsx = r, gm.jsxs = r, gm;
}
var Cm = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var CE;
function U1() {
  return CE || (CE = 1, process.env.NODE_ENV !== "production" && function() {
    function d(x) {
      if (x == null) return null;
      if (typeof x == "function")
        return x.$$typeof === fe ? null : x.displayName || x.name || null;
      if (typeof x == "string") return x;
      switch (x) {
        case V:
          return "Fragment";
        case G:
          return "Profiler";
        case P:
          return "StrictMode";
        case ce:
          return "Suspense";
        case W:
          return "SuspenseList";
        case se:
          return "Activity";
      }
      if (typeof x == "object")
        switch (typeof x.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), x.$$typeof) {
          case U:
            return "Portal";
          case $:
            return (x.displayName || "Context") + ".Provider";
          case N:
            return (x._context.displayName || "Context") + ".Consumer";
          case Z:
            var me = x.render;
            return x = x.displayName, x || (x = me.displayName || me.name || "", x = x !== "" ? "ForwardRef(" + x + ")" : "ForwardRef"), x;
          case Ce:
            return me = x.displayName || null, me !== null ? me : d(x.type) || "Memo";
          case ne:
            me = x._payload, x = x._init;
            try {
              return d(x(me));
            } catch {
            }
        }
      return null;
    }
    function u(x) {
      return "" + x;
    }
    function r(x) {
      try {
        u(x);
        var me = !1;
      } catch {
        me = !0;
      }
      if (me) {
        me = console;
        var de = me.error, Ke = typeof Symbol == "function" && Symbol.toStringTag && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return de.call(
          me,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          Ke
        ), u(x);
      }
    }
    function f(x) {
      if (x === V) return "<>";
      if (typeof x == "object" && x !== null && x.$$typeof === ne)
        return "<...>";
      try {
        var me = d(x);
        return me ? "<" + me + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function p() {
      var x = He.A;
      return x === null ? null : x.getOwner();
    }
    function v() {
      return Error("react-stack-top-frame");
    }
    function A(x) {
      if (Xe.call(x, "key")) {
        var me = Object.getOwnPropertyDescriptor(x, "key").get;
        if (me && me.isReactWarning) return !1;
      }
      return x.key !== void 0;
    }
    function B(x, me) {
      function de() {
        Ve || (Ve = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          me
        ));
      }
      de.isReactWarning = !0, Object.defineProperty(x, "key", {
        get: de,
        configurable: !0
      });
    }
    function E() {
      var x = d(this.type);
      return D[x] || (D[x] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), x = this.props.ref, x !== void 0 ? x : null;
    }
    function C(x, me, de, Ke, Ne, Ie, tt, $t) {
      return de = Ie.ref, x = {
        $$typeof: O,
        type: x,
        key: me,
        props: Ie,
        _owner: Ne
      }, (de !== void 0 ? de : null) !== null ? Object.defineProperty(x, "ref", {
        enumerable: !1,
        get: E
      }) : Object.defineProperty(x, "ref", { enumerable: !1, value: null }), x._store = {}, Object.defineProperty(x._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(x, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(x, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: tt
      }), Object.defineProperty(x, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: $t
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    }
    function R(x, me, de, Ke, Ne, Ie, tt, $t) {
      var vt = me.children;
      if (vt !== void 0)
        if (Ke)
          if (ee(vt)) {
            for (Ke = 0; Ke < vt.length; Ke++)
              T(vt[Ke]);
            Object.freeze && Object.freeze(vt);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else T(vt);
      if (Xe.call(me, "key")) {
        vt = d(x);
        var bn = Object.keys(me).filter(function(Dn) {
          return Dn !== "key";
        });
        Ke = 0 < bn.length ? "{key: someKey, " + bn.join(": ..., ") + ": ...}" : "{key: someKey}", re[vt + Ke] || (bn = 0 < bn.length ? "{" + bn.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          Ke,
          vt,
          bn,
          vt
        ), re[vt + Ke] = !0);
      }
      if (vt = null, de !== void 0 && (r(de), vt = "" + de), A(me) && (r(me.key), vt = "" + me.key), "key" in me) {
        de = {};
        for (var Tl in me)
          Tl !== "key" && (de[Tl] = me[Tl]);
      } else de = me;
      return vt && B(
        de,
        typeof x == "function" ? x.displayName || x.name || "Unknown" : x
      ), C(
        x,
        vt,
        Ie,
        Ne,
        p(),
        de,
        tt,
        $t
      );
    }
    function T(x) {
      typeof x == "object" && x !== null && x.$$typeof === O && x._store && (x._store.validated = 1);
    }
    var M = Ec, O = Symbol.for("react.transitional.element"), U = Symbol.for("react.portal"), V = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), G = Symbol.for("react.profiler"), N = Symbol.for("react.consumer"), $ = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), ce = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), Ce = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), se = Symbol.for("react.activity"), fe = Symbol.for("react.client.reference"), He = M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Xe = Object.prototype.hasOwnProperty, ee = Array.isArray, Te = console.createTask ? console.createTask : function() {
      return null;
    };
    M = {
      "react-stack-bottom-frame": function(x) {
        return x();
      }
    };
    var Ve, D = {}, Q = M["react-stack-bottom-frame"].bind(
      M,
      v
    )(), X = Te(f(v)), re = {};
    Cm.Fragment = V, Cm.jsx = function(x, me, de, Ke, Ne) {
      var Ie = 1e4 > He.recentlyCreatedOwnerStacks++;
      return R(
        x,
        me,
        de,
        !1,
        Ke,
        Ne,
        Ie ? Error("react-stack-top-frame") : Q,
        Ie ? Te(f(x)) : X
      );
    }, Cm.jsxs = function(x, me, de, Ke, Ne) {
      var Ie = 1e4 > He.recentlyCreatedOwnerStacks++;
      return R(
        x,
        me,
        de,
        !0,
        Ke,
        Ne,
        Ie ? Error("react-stack-top-frame") : Q,
        Ie ? Te(f(x)) : X
      );
    };
  }()), Cm;
}
var TE;
function N1() {
  return TE || (TE = 1, process.env.NODE_ENV === "production" ? ch.exports = O1() : ch.exports = U1()), ch.exports;
}
var Mn = N1();
function Ey(d, u, r) {
  if (!d) return;
  if (r(d) === !0) return d;
  let f = u ? d.return : d.child;
  for (; f; ) {
    const p = Ey(f, u, r);
    if (p) return p;
    f = u ? null : f.sibling;
  }
}
function i0(d) {
  try {
    return Object.defineProperties(d, {
      _currentRenderer: {
        get() {
          return null;
        },
        set() {
        }
      },
      _currentRenderer2: {
        get() {
          return null;
        },
        set() {
        }
      }
    });
  } catch {
    return d;
  }
}
const Sy = /* @__PURE__ */ i0(/* @__PURE__ */ Qe.createContext(null));
class s0 extends Qe.Component {
  render() {
    return /* @__PURE__ */ Qe.createElement(Sy.Provider, { value: this._reactInternals }, this.props.children);
  }
}
function c0() {
  const d = Qe.useContext(Sy);
  if (d === null) throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
  const u = Qe.useId();
  return Qe.useMemo(() => {
    for (const r of [d, d == null ? void 0 : d.alternate]) {
      if (!r) continue;
      const f = Ey(r, !1, (p) => {
        let v = p.memoizedState;
        for (; v; ) {
          if (v.memoizedState === u) return !0;
          v = v.next;
        }
      });
      if (f) return f;
    }
  }, [d, u]);
}
const G1 = Symbol.for("react.context"), z1 = (d) => d !== null && typeof d == "object" && "$$typeof" in d && d.$$typeof === G1;
function x1() {
  const d = c0(), [u] = Qe.useState(() => /* @__PURE__ */ new Map());
  u.clear();
  let r = d;
  for (; r; ) {
    const f = r.type;
    z1(f) && f !== Sy && !u.has(f) && u.set(f, Qe.use(i0(f))), r = r.return;
  }
  return u;
}
function L1() {
  const d = x1();
  return Qe.useMemo(
    () => Array.from(d.keys()).reduce(
      (u, r) => (f) => /* @__PURE__ */ Qe.createElement(u, null, /* @__PURE__ */ Qe.createElement(r.Provider, { ...f, value: d.get(r) })),
      (u) => /* @__PURE__ */ Qe.createElement(s0, { ...u })
    ),
    [d]
  );
}
function o0(d) {
  let u = d.root;
  for (; u.getState().previousRoot; ) u = u.getState().previousRoot;
  return u;
}
const r0 = (d) => d && d.isOrthographicCamera, J1 = (d) => d && d.hasOwnProperty("current"), K1 = (d) => d != null && (typeof d == "string" || typeof d == "number" || d.isColor), xm = /* @__PURE__ */ ((d, u) => typeof window < "u" && (((d = window.document) == null ? void 0 : d.createElement) || ((u = window.navigator) == null ? void 0 : u.product) === "ReactNative"))() ? Qe.useLayoutEffect : Qe.useEffect;
function By(d) {
  const u = Qe.useRef(d);
  return xm(() => void (u.current = d), [d]), u;
}
function j1() {
  const d = c0(), u = L1();
  return Qe.useMemo(() => ({
    children: r
  }) => {
    const p = !!Ey(d, !0, (v) => v.type === Qe.StrictMode) ? Qe.StrictMode : Qe.Fragment;
    return /* @__PURE__ */ Mn.jsx(p, {
      children: /* @__PURE__ */ Mn.jsx(u, {
        children: r
      })
    });
  }, [d, u]);
}
function Q1({
  set: d
}) {
  return xm(() => (d(new Promise(() => null)), () => d(!1)), [d]), null;
}
const Y1 = /* @__PURE__ */ ((d) => (d = class extends Qe.Component {
  constructor(...r) {
    super(...r), this.state = {
      error: !1
    };
  }
  componentDidCatch(r) {
    this.props.set(r);
  }
  render() {
    return this.state.error ? null : this.props.children;
  }
}, d.getDerivedStateFromError = () => ({
  error: !0
}), d))();
function f0(d) {
  var u;
  const r = typeof window < "u" ? (u = window.devicePixelRatio) != null ? u : 2 : 1;
  return Array.isArray(d) ? Math.min(Math.max(d[0], r), d[1]) : d;
}
function Sf(d) {
  var u;
  return (u = d.__r3f) == null ? void 0 : u.root.getState();
}
const ma = {
  obj: (d) => d === Object(d) && !ma.arr(d) && typeof d != "function",
  fun: (d) => typeof d == "function",
  str: (d) => typeof d == "string",
  num: (d) => typeof d == "number",
  boo: (d) => typeof d == "boolean",
  und: (d) => d === void 0,
  nul: (d) => d === null,
  arr: (d) => Array.isArray(d),
  equ(d, u, {
    arrays: r = "shallow",
    objects: f = "reference",
    strict: p = !0
  } = {}) {
    if (typeof d != typeof u || !!d != !!u) return !1;
    if (ma.str(d) || ma.num(d) || ma.boo(d)) return d === u;
    const v = ma.obj(d);
    if (v && f === "reference") return d === u;
    const A = ma.arr(d);
    if (A && r === "reference") return d === u;
    if ((A || v) && d === u) return !0;
    let B;
    for (B in d) if (!(B in u)) return !1;
    if (v && r === "shallow" && f === "shallow") {
      for (B in p ? u : d) if (!ma.equ(d[B], u[B], {
        strict: p,
        objects: "reference"
      })) return !1;
    } else
      for (B in p ? u : d) if (d[B] !== u[B]) return !1;
    if (ma.und(B)) {
      if (A && d.length === 0 && u.length === 0 || v && Object.keys(d).length === 0 && Object.keys(u).length === 0) return !0;
      if (d !== u) return !1;
    }
    return !0;
  }
};
function X1(d) {
  const u = {
    nodes: {},
    materials: {},
    meshes: {}
  };
  return d && d.traverse((r) => {
    r.name && (u.nodes[r.name] = r), r.material && !u.materials[r.material.name] && (u.materials[r.material.name] = r.material), r.isMesh && !u.meshes[r.name] && (u.meshes[r.name] = r);
  }), u;
}
function V1(d) {
  d.type !== "Scene" && (d.dispose == null || d.dispose());
  for (const u in d) {
    const r = d[u];
    (r == null ? void 0 : r.type) !== "Scene" && (r == null || r.dispose == null || r.dispose());
  }
}
const d0 = ["children", "key", "ref"];
function Z1(d) {
  const u = {};
  for (const r in d)
    d0.includes(r) || (u[r] = d[r]);
  return u;
}
function gh(d, u, r, f) {
  const p = d;
  let v = p == null ? void 0 : p.__r3f;
  return v || (v = {
    root: u,
    type: r,
    parent: null,
    children: [],
    props: Z1(f),
    object: p,
    eventCount: 0,
    handlers: {},
    isHidden: !1
  }, p && (p.__r3f = v)), v;
}
function Gm(d, u) {
  let r = d[u];
  if (!u.includes("-")) return {
    root: d,
    key: u,
    target: r
  };
  r = d;
  for (const p of u.split("-")) {
    var f;
    u = p, d = r, r = (f = r) == null ? void 0 : f[u];
  }
  return {
    root: d,
    key: u,
    target: r
  };
}
const RE = /-\d+$/;
function Ch(d, u) {
  if (ma.str(u.props.attach)) {
    if (RE.test(u.props.attach)) {
      const p = u.props.attach.replace(RE, ""), {
        root: v,
        key: A
      } = Gm(d.object, p);
      Array.isArray(v[A]) || (v[A] = []);
    }
    const {
      root: r,
      key: f
    } = Gm(d.object, u.props.attach);
    u.previousAttach = r[f], r[f] = u.object;
  } else ma.fun(u.props.attach) && (u.previousAttach = u.props.attach(d.object, u.object));
}
function Th(d, u) {
  if (ma.str(u.props.attach)) {
    const {
      root: r,
      key: f
    } = Gm(d.object, u.props.attach), p = u.previousAttach;
    p === void 0 ? delete r[f] : r[f] = p;
  } else
    u.previousAttach == null || u.previousAttach(d.object, u.object);
  delete u.previousAttach;
}
const cy = [
  ...d0,
  // Instance props
  "args",
  "dispose",
  "attach",
  "object",
  "onUpdate",
  // Behavior flags
  "dispose"
], ME = /* @__PURE__ */ new Map();
function q1(d) {
  let u = ME.get(d.constructor);
  try {
    u || (u = new d.constructor(), ME.set(d.constructor, u));
  } catch {
  }
  return u;
}
function F1(d, u) {
  const r = {};
  for (const f in u)
    if (!cy.includes(f) && !ma.equ(u[f], d.props[f])) {
      r[f] = u[f];
      for (const p in u)
        p.startsWith(`${f}-`) && (r[p] = u[p]);
    }
  for (const f in d.props) {
    if (cy.includes(f) || u.hasOwnProperty(f)) continue;
    const {
      root: p,
      key: v
    } = Gm(d.object, f);
    if (p.constructor && p.constructor.length === 0) {
      const A = q1(p);
      ma.und(A) || (r[v] = A[v]);
    } else
      r[v] = 0;
  }
  return r;
}
const I1 = ["map", "emissiveMap", "sheenColorMap", "specularColorMap", "envMap"], w1 = /^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;
function xi(d, u) {
  var r;
  const f = d.__r3f, p = f && o0(f).getState(), v = f == null ? void 0 : f.eventCount;
  for (const B in u) {
    let E = u[B];
    if (cy.includes(B)) continue;
    if (f && w1.test(B)) {
      typeof E == "function" ? f.handlers[B] = E : delete f.handlers[B], f.eventCount = Object.keys(f.handlers).length;
      continue;
    }
    if (E === void 0) continue;
    let {
      root: C,
      key: R,
      target: T
    } = Gm(d, B);
    if (T instanceof zt.Layers && E instanceof zt.Layers)
      T.mask = E.mask;
    else if (T instanceof zt.Color && K1(E))
      T.set(E);
    else if (T !== null && typeof T == "object" && typeof T.set == "function" && typeof T.copy == "function" && E != null && E.constructor && T.constructor === E.constructor)
      T.copy(E);
    else if (T !== null && typeof T == "object" && typeof T.set == "function" && Array.isArray(E))
      typeof T.fromArray == "function" ? T.fromArray(E) : T.set(...E);
    else if (T !== null && typeof T == "object" && typeof T.set == "function" && typeof E == "number")
      typeof T.setScalar == "function" ? T.setScalar(E) : T.set(E);
    else {
      var A;
      C[R] = E, p && !p.linear && I1.includes(R) && (A = C[R]) != null && A.isTexture && // sRGB textures must be RGBA8 since r137 https://github.com/mrdoob/three.js/pull/23129
      C[R].format === zt.RGBAFormat && C[R].type === zt.UnsignedByteType && (C[R].colorSpace = zt.SRGBColorSpace);
    }
  }
  if (f != null && f.parent && p != null && p.internal && (r = f.object) != null && r.isObject3D && v !== f.eventCount) {
    const B = f.object, E = p.internal.interaction.indexOf(B);
    E > -1 && p.internal.interaction.splice(E, 1), f.eventCount && B.raycast !== null && p.internal.interaction.push(B);
  }
  return f && f.props.attach === void 0 && (f.object.isBufferGeometry ? f.props.attach = "geometry" : f.object.isMaterial && (f.props.attach = "material")), f && Df(f), d;
}
function Df(d) {
  var u;
  if (!d.parent) return;
  d.props.onUpdate == null || d.props.onUpdate(d.object);
  const r = (u = d.root) == null || u.getState == null ? void 0 : u.getState();
  r && r.internal.frames === 0 && r.invalidate();
}
function m0(d, u) {
  d.manual || (r0(d) ? (d.left = u.width / -2, d.right = u.width / 2, d.top = u.height / 2, d.bottom = u.height / -2) : d.aspect = u.width / u.height, d.updateProjectionMatrix());
}
const ul = (d) => d == null ? void 0 : d.isObject3D;
function oh(d) {
  return (d.eventObject || d.object).uuid + "/" + d.index + d.instanceId;
}
function p0(d, u, r, f) {
  const p = r.get(u);
  p && (r.delete(u), r.size === 0 && (d.delete(f), p.target.releasePointerCapture(f)));
}
function P1(d, u) {
  const {
    internal: r
  } = d.getState();
  r.interaction = r.interaction.filter((f) => f !== u), r.initialHits = r.initialHits.filter((f) => f !== u), r.hovered.forEach((f, p) => {
    (f.eventObject === u || f.object === u) && r.hovered.delete(p);
  }), r.capturedMap.forEach((f, p) => {
    p0(r.capturedMap, u, f, p);
  });
}
function W1(d) {
  function u(E) {
    const {
      internal: C
    } = d.getState(), R = E.offsetX - C.initialClick[0], T = E.offsetY - C.initialClick[1];
    return Math.round(Math.sqrt(R * R + T * T));
  }
  function r(E) {
    return E.filter((C) => ["Move", "Over", "Enter", "Out", "Leave"].some((R) => {
      var T;
      return (T = C.__r3f) == null ? void 0 : T.handlers["onPointer" + R];
    }));
  }
  function f(E, C) {
    const R = d.getState(), T = /* @__PURE__ */ new Set(), M = [], O = C ? C(R.internal.interaction) : R.internal.interaction;
    for (let G = 0; G < O.length; G++) {
      const N = Sf(O[G]);
      N && (N.raycaster.camera = void 0);
    }
    R.previousRoot || R.events.compute == null || R.events.compute(E, R);
    function U(G) {
      const N = Sf(G);
      if (!N || !N.events.enabled || N.raycaster.camera === null) return [];
      if (N.raycaster.camera === void 0) {
        var $;
        N.events.compute == null || N.events.compute(E, N, ($ = N.previousRoot) == null ? void 0 : $.getState()), N.raycaster.camera === void 0 && (N.raycaster.camera = null);
      }
      return N.raycaster.camera ? N.raycaster.intersectObject(G, !0) : [];
    }
    let V = O.flatMap(U).sort((G, N) => {
      const $ = Sf(G.object), Z = Sf(N.object);
      return !$ || !Z ? G.distance - N.distance : Z.events.priority - $.events.priority || G.distance - N.distance;
    }).filter((G) => {
      const N = oh(G);
      return T.has(N) ? !1 : (T.add(N), !0);
    });
    R.events.filter && (V = R.events.filter(V, R));
    for (const G of V) {
      let N = G.object;
      for (; N; ) {
        var P;
        (P = N.__r3f) != null && P.eventCount && M.push({
          ...G,
          eventObject: N
        }), N = N.parent;
      }
    }
    if ("pointerId" in E && R.internal.capturedMap.has(E.pointerId))
      for (let G of R.internal.capturedMap.get(E.pointerId).values())
        T.has(oh(G.intersection)) || M.push(G.intersection);
    return M;
  }
  function p(E, C, R, T) {
    if (E.length) {
      const M = {
        stopped: !1
      };
      for (const O of E) {
        let U = Sf(O.object);
        if (U || O.object.traverseAncestors((V) => {
          const P = Sf(V);
          if (P)
            return U = P, !1;
        }), U) {
          const {
            raycaster: V,
            pointer: P,
            camera: G,
            internal: N
          } = U, $ = new zt.Vector3(P.x, P.y, 0).unproject(G), Z = (se) => {
            var fe, He;
            return (fe = (He = N.capturedMap.get(se)) == null ? void 0 : He.has(O.eventObject)) != null ? fe : !1;
          }, ce = (se) => {
            const fe = {
              intersection: O,
              target: C.target
            };
            N.capturedMap.has(se) ? N.capturedMap.get(se).set(O.eventObject, fe) : N.capturedMap.set(se, /* @__PURE__ */ new Map([[O.eventObject, fe]])), C.target.setPointerCapture(se);
          }, W = (se) => {
            const fe = N.capturedMap.get(se);
            fe && p0(N.capturedMap, O.eventObject, fe, se);
          };
          let Ce = {};
          for (let se in C) {
            let fe = C[se];
            typeof fe != "function" && (Ce[se] = fe);
          }
          let ne = {
            ...O,
            ...Ce,
            pointer: P,
            intersections: E,
            stopped: M.stopped,
            delta: R,
            unprojectedPoint: $,
            ray: V.ray,
            camera: G,
            // Hijack stopPropagation, which just sets a flag
            stopPropagation() {
              const se = "pointerId" in C && N.capturedMap.get(C.pointerId);
              if (
                // ...if this pointer hasn't been captured
                (!se || // ... or if the hit object is capturing the pointer
                se.has(O.eventObject)) && (ne.stopped = M.stopped = !0, N.hovered.size && Array.from(N.hovered.values()).find((fe) => fe.eventObject === O.eventObject))
              ) {
                const fe = E.slice(0, E.indexOf(O));
                v([...fe, O]);
              }
            },
            // there should be a distinction between target and currentTarget
            target: {
              hasPointerCapture: Z,
              setPointerCapture: ce,
              releasePointerCapture: W
            },
            currentTarget: {
              hasPointerCapture: Z,
              setPointerCapture: ce,
              releasePointerCapture: W
            },
            nativeEvent: C
          };
          if (T(ne), M.stopped === !0) break;
        }
      }
    }
    return E;
  }
  function v(E) {
    const {
      internal: C
    } = d.getState();
    for (const R of C.hovered.values())
      if (!E.length || !E.find((T) => T.object === R.object && T.index === R.index && T.instanceId === R.instanceId)) {
        const M = R.eventObject.__r3f;
        if (C.hovered.delete(oh(R)), M != null && M.eventCount) {
          const O = M.handlers, U = {
            ...R,
            intersections: E
          };
          O.onPointerOut == null || O.onPointerOut(U), O.onPointerLeave == null || O.onPointerLeave(U);
        }
      }
  }
  function A(E, C) {
    for (let R = 0; R < C.length; R++) {
      const T = C[R].__r3f;
      T == null || T.handlers.onPointerMissed == null || T.handlers.onPointerMissed(E);
    }
  }
  function B(E) {
    switch (E) {
      case "onPointerLeave":
      case "onPointerCancel":
        return () => v([]);
      case "onLostPointerCapture":
        return (C) => {
          const {
            internal: R
          } = d.getState();
          "pointerId" in C && R.capturedMap.has(C.pointerId) && requestAnimationFrame(() => {
            R.capturedMap.has(C.pointerId) && (R.capturedMap.delete(C.pointerId), v([]));
          });
        };
    }
    return function(R) {
      const {
        onPointerMissed: T,
        internal: M
      } = d.getState();
      M.lastEvent.current = R;
      const O = E === "onPointerMove", U = E === "onClick" || E === "onContextMenu" || E === "onDoubleClick", P = f(R, O ? r : void 0), G = U ? u(R) : 0;
      E === "onPointerDown" && (M.initialClick = [R.offsetX, R.offsetY], M.initialHits = P.map(($) => $.eventObject)), U && !P.length && G <= 2 && (A(R, M.interaction), T && T(R)), O && v(P);
      function N($) {
        const Z = $.eventObject, ce = Z.__r3f;
        if (!(ce != null && ce.eventCount)) return;
        const W = ce.handlers;
        if (O) {
          if (W.onPointerOver || W.onPointerEnter || W.onPointerOut || W.onPointerLeave) {
            const Ce = oh($), ne = M.hovered.get(Ce);
            ne ? ne.stopped && $.stopPropagation() : (M.hovered.set(Ce, $), W.onPointerOver == null || W.onPointerOver($), W.onPointerEnter == null || W.onPointerEnter($));
          }
          W.onPointerMove == null || W.onPointerMove($);
        } else {
          const Ce = W[E];
          Ce ? (!U || M.initialHits.includes(Z)) && (A(R, M.interaction.filter((ne) => !M.initialHits.includes(ne))), Ce($)) : U && M.initialHits.includes(Z) && A(R, M.interaction.filter((ne) => !M.initialHits.includes(ne)));
        }
      }
      p(P, R, G, N);
    };
  }
  return {
    handlePointer: B
  };
}
const bE = (d) => !!(d != null && d.render), gy = /* @__PURE__ */ Qe.createContext(null), k1 = (d, u) => {
  const r = a0((B, E) => {
    const C = new zt.Vector3(), R = new zt.Vector3(), T = new zt.Vector3();
    function M(G = E().camera, N = R, $ = E().size) {
      const {
        width: Z,
        height: ce,
        top: W,
        left: Ce
      } = $, ne = Z / ce;
      N.isVector3 ? T.copy(N) : T.set(...N);
      const se = G.getWorldPosition(C).distanceTo(T);
      if (r0(G))
        return {
          width: Z / G.zoom,
          height: ce / G.zoom,
          top: W,
          left: Ce,
          factor: 1,
          distance: se,
          aspect: ne
        };
      {
        const fe = G.fov * Math.PI / 180, He = 2 * Math.tan(fe / 2) * se, Xe = He * (Z / ce);
        return {
          width: Xe,
          height: He,
          top: W,
          left: Ce,
          factor: Z / Xe,
          distance: se,
          aspect: ne
        };
      }
    }
    let O;
    const U = (G) => B((N) => ({
      performance: {
        ...N.performance,
        current: G
      }
    })), V = new zt.Vector2();
    return {
      set: B,
      get: E,
      // Mock objects that have to be configured
      gl: null,
      camera: null,
      raycaster: null,
      events: {
        priority: 1,
        enabled: !0,
        connected: !1
      },
      scene: null,
      xr: null,
      invalidate: (G = 1) => d(E(), G),
      advance: (G, N) => u(G, N, E()),
      legacy: !1,
      linear: !1,
      flat: !1,
      controls: null,
      clock: new zt.Clock(),
      pointer: V,
      mouse: V,
      frameloop: "always",
      onPointerMissed: void 0,
      performance: {
        current: 1,
        min: 0.5,
        max: 1,
        debounce: 200,
        regress: () => {
          const G = E();
          O && clearTimeout(O), G.performance.current !== G.performance.min && U(G.performance.min), O = setTimeout(() => U(E().performance.max), G.performance.debounce);
        }
      },
      size: {
        width: 0,
        height: 0,
        top: 0,
        left: 0
      },
      viewport: {
        initialDpr: 0,
        dpr: 0,
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        aspect: 0,
        distance: 0,
        factor: 0,
        getCurrentViewport: M
      },
      setEvents: (G) => B((N) => ({
        ...N,
        events: {
          ...N.events,
          ...G
        }
      })),
      setSize: (G, N, $ = 0, Z = 0) => {
        const ce = E().camera, W = {
          width: G,
          height: N,
          top: $,
          left: Z
        };
        B((Ce) => ({
          size: W,
          viewport: {
            ...Ce.viewport,
            ...M(ce, R, W)
          }
        }));
      },
      setDpr: (G) => B((N) => {
        const $ = f0(G);
        return {
          viewport: {
            ...N.viewport,
            dpr: $,
            initialDpr: N.viewport.initialDpr || $
          }
        };
      }),
      setFrameloop: (G = "always") => {
        const N = E().clock;
        N.stop(), N.elapsedTime = 0, G !== "never" && (N.start(), N.elapsedTime = 0), B(() => ({
          frameloop: G
        }));
      },
      previousRoot: void 0,
      internal: {
        // Events
        interaction: [],
        hovered: /* @__PURE__ */ new Map(),
        subscribers: [],
        initialClick: [0, 0],
        initialHits: [],
        capturedMap: /* @__PURE__ */ new Map(),
        lastEvent: /* @__PURE__ */ Qe.createRef(),
        // Updates
        active: !1,
        frames: 0,
        priority: 0,
        subscribe: (G, N, $) => {
          const Z = E().internal;
          return Z.priority = Z.priority + (N > 0 ? 1 : 0), Z.subscribers.push({
            ref: G,
            priority: N,
            store: $
          }), Z.subscribers = Z.subscribers.sort((ce, W) => ce.priority - W.priority), () => {
            const ce = E().internal;
            ce != null && ce.subscribers && (ce.priority = ce.priority - (N > 0 ? 1 : 0), ce.subscribers = ce.subscribers.filter((W) => W.ref !== G));
          };
        }
      }
    };
  }), f = r.getState();
  let p = f.size, v = f.viewport.dpr, A = f.camera;
  return r.subscribe(() => {
    const {
      camera: B,
      size: E,
      viewport: C,
      gl: R,
      set: T
    } = r.getState();
    if (E.width !== p.width || E.height !== p.height || C.dpr !== v) {
      p = E, v = C.dpr, m0(B, E), C.dpr > 0 && R.setPixelRatio(C.dpr);
      const M = typeof HTMLCanvasElement < "u" && R.domElement instanceof HTMLCanvasElement;
      R.setSize(E.width, E.height, M);
    }
    B !== A && (A = B, T((M) => ({
      viewport: {
        ...M.viewport,
        ...M.viewport.getCurrentViewport(B)
      }
    })));
  }), r.subscribe((B) => d(B)), r;
};
function Cy() {
  const d = Qe.useContext(gy);
  if (!d) throw new Error("R3F: Hooks can only be used within the Canvas component!");
  return d;
}
function Xl(d = (r) => r, u) {
  return Cy()(d, u);
}
function h0(d, u = 0) {
  const r = Cy(), f = r.getState().internal.subscribe, p = By(d);
  return xm(() => f(p, u, r), [u, f, r]), null;
}
const DE = /* @__PURE__ */ new WeakMap(), $1 = (d) => {
  var u;
  return typeof d == "function" && (d == null || (u = d.prototype) == null ? void 0 : u.constructor) === d;
};
function v0(d, u) {
  return function(r, ...f) {
    let p;
    return $1(r) ? (p = DE.get(r), p || (p = new r(), DE.set(r, p))) : p = r, d && d(p), Promise.all(f.map((v) => new Promise((A, B) => p.load(v, (E) => {
      ul(E == null ? void 0 : E.scene) && Object.assign(E, X1(E.scene)), A(E);
    }, u, (E) => B(new Error(`Could not load ${v}: ${E == null ? void 0 : E.message}`))))));
  };
}
function gs(d, u, r, f) {
  const p = Array.isArray(u) ? u : [u], v = D1(v0(r, f), [d, ...p], {
    equal: ma.equ
  });
  return Array.isArray(u) ? v : v[0];
}
gs.preload = function(d, u, r) {
  const f = Array.isArray(u) ? u : [u];
  return _1(v0(r), [d, ...f]);
};
gs.clear = function(d, u) {
  const r = Array.isArray(u) ? u : [u];
  return H1([d, ...r]);
};
function eB(d) {
  const u = C1(d);
  return u.injectIntoDevTools({
    bundleType: typeof process < "u" && process.env.NODE_ENV !== "production" ? 1 : 0,
    rendererPackageName: "@react-three/fiber",
    version: Qe.version
  }), u;
}
const y0 = 0, bf = {}, tB = /^three(?=[A-Z])/, Hh = (d) => `${d[0].toUpperCase()}${d.slice(1)}`;
let aB = 0;
const nB = (d) => typeof d == "function";
function A0(d) {
  if (nB(d)) {
    const u = `${aB++}`;
    return bf[u] = d, u;
  } else
    Object.assign(bf, d);
}
function E0(d, u) {
  const r = Hh(d), f = bf[r];
  if (d !== "primitive" && !f) throw new Error(`R3F: ${r} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
  if (d === "primitive" && !u.object) throw new Error("R3F: Primitives without 'object' are invalid!");
  if (u.args !== void 0 && !Array.isArray(u.args)) throw new Error("R3F: The args prop must be an array!");
}
function lB(d, u, r) {
  var f;
  return d = Hh(d) in bf ? d : d.replace(tB, ""), E0(d, u), d === "primitive" && (f = u.object) != null && f.__r3f && delete u.object.__r3f, gh(u.object, r, d, u);
}
function uB(d) {
  if (!d.isHidden) {
    var u;
    d.props.attach && (u = d.parent) != null && u.object ? Th(d.parent, d) : ul(d.object) && (d.object.visible = !1), d.isHidden = !0, Df(d);
  }
}
function S0(d) {
  if (d.isHidden) {
    var u;
    d.props.attach && (u = d.parent) != null && u.object ? Ch(d.parent, d) : ul(d.object) && d.props.visible !== !1 && (d.object.visible = !0), d.isHidden = !1, Df(d);
  }
}
function Ty(d, u, r) {
  const f = u.root.getState();
  if (!(!d.parent && d.object !== f.scene)) {
    if (!u.object) {
      var p, v;
      const A = bf[Hh(u.type)];
      u.object = (p = u.props.object) != null ? p : new A(...(v = u.props.args) != null ? v : []), u.object.__r3f = u;
    }
    if (xi(u.object, u.props), u.props.attach)
      Ch(d, u);
    else if (ul(u.object) && ul(d.object)) {
      const A = d.object.children.indexOf(r == null ? void 0 : r.object);
      if (r && A !== -1) {
        const B = d.object.children.indexOf(u.object);
        if (B !== -1) {
          d.object.children.splice(B, 1);
          const E = B < A ? A - 1 : A;
          d.object.children.splice(E, 0, u.object);
        } else
          u.object.parent = d.object, d.object.children.splice(A, 0, u.object), u.object.dispatchEvent({
            type: "added"
          }), d.object.dispatchEvent({
            type: "childadded",
            child: u.object
          });
      } else
        d.object.add(u.object);
    }
    for (const A of u.children) Ty(u, A);
    Df(u);
  }
}
function Vv(d, u) {
  u && (u.parent = d, d.children.push(u), Ty(d, u));
}
function _E(d, u, r) {
  if (!u || !r) return;
  u.parent = d;
  const f = d.children.indexOf(r);
  f !== -1 ? d.children.splice(f, 0, u) : d.children.push(u), Ty(d, u, r);
}
function B0(d) {
  if (typeof d.dispose == "function") {
    const u = () => {
      try {
        d.dispose();
      } catch {
      }
    };
    typeof IS_REACT_ACT_ENVIRONMENT < "u" ? u() : BE.unstable_scheduleCallback(BE.unstable_IdlePriority, u);
  }
}
function oy(d, u, r) {
  if (!u) return;
  u.parent = null;
  const f = d.children.indexOf(u);
  f !== -1 && d.children.splice(f, 1), u.props.attach ? Th(d, u) : ul(u.object) && ul(d.object) && (d.object.remove(u.object), P1(o0(u), u.object));
  const p = u.props.dispose !== null && r !== !1;
  for (let v = u.children.length - 1; v >= 0; v--) {
    const A = u.children[v];
    oy(u, A, p);
  }
  u.children.length = 0, delete u.object.__r3f, p && u.type !== "primitive" && u.object.type !== "Scene" && B0(u.object), r === void 0 && Df(u);
}
function iB(d, u) {
  for (const r of [d, d.alternate])
    if (r !== null)
      if (typeof r.ref == "function") {
        r.refCleanup == null || r.refCleanup();
        const f = r.ref(u);
        typeof f == "function" && (r.refCleanup = f);
      } else r.ref && (r.ref.current = u);
}
const Ah = [];
function sB() {
  for (const [r] of Ah) {
    const f = r.parent;
    if (f) {
      r.props.attach ? Th(f, r) : ul(r.object) && ul(f.object) && f.object.remove(r.object);
      for (const p of r.children)
        p.props.attach ? Th(r, p) : ul(p.object) && ul(r.object) && r.object.remove(p.object);
    }
    r.isHidden && S0(r), r.object.__r3f && delete r.object.__r3f, r.type !== "primitive" && B0(r.object);
  }
  for (const [r, f, p] of Ah) {
    r.props = f;
    const v = r.parent;
    if (v) {
      var d, u;
      const A = bf[Hh(r.type)];
      r.object = (d = r.props.object) != null ? d : new A(...(u = r.props.args) != null ? u : []), r.object.__r3f = r, iB(p, r.object), xi(r.object, r.props), r.props.attach ? Ch(v, r) : ul(r.object) && ul(v.object) && v.object.add(r.object);
      for (const B of r.children)
        B.props.attach ? Ch(r, B) : ul(B.object) && ul(r.object) && r.object.add(B.object);
      Df(r);
    }
  }
  Ah.length = 0;
}
const Zv = () => {
}, HE = {};
let rh = y0;
const cB = 0, oB = 4, Rh = /* @__PURE__ */ eB({
  isPrimaryRenderer: !1,
  warnsIfNotActing: !1,
  supportsMutation: !0,
  supportsPersistence: !1,
  supportsHydration: !1,
  createInstance: lB,
  removeChild: oy,
  appendChild: Vv,
  appendInitialChild: Vv,
  insertBefore: _E,
  appendChildToContainer(d, u) {
    const r = d.getState().scene.__r3f;
    !u || !r || Vv(r, u);
  },
  removeChildFromContainer(d, u) {
    const r = d.getState().scene.__r3f;
    !u || !r || oy(r, u);
  },
  insertInContainerBefore(d, u, r) {
    const f = d.getState().scene.__r3f;
    !u || !r || !f || _E(f, u, r);
  },
  getRootHostContext: () => HE,
  getChildHostContext: () => HE,
  commitUpdate(d, u, r, f, p) {
    var v, A, B;
    E0(u, f);
    let E = !1;
    if ((d.type === "primitive" && r.object !== f.object || ((v = f.args) == null ? void 0 : v.length) !== ((A = r.args) == null ? void 0 : A.length) || (B = f.args) != null && B.some((R, T) => {
      var M;
      return R !== ((M = r.args) == null ? void 0 : M[T]);
    })) && (E = !0), E)
      Ah.push([d, {
        ...f
      }, p]);
    else {
      const R = F1(d, f);
      Object.keys(R).length && (Object.assign(d.props, R), xi(d.object, R));
    }
    (p.sibling === null || (p.flags & oB) === cB) && sB();
  },
  finalizeInitialChildren: () => !1,
  commitMount() {
  },
  getPublicInstance: (d) => d == null ? void 0 : d.object,
  prepareForCommit: () => null,
  preparePortalMount: (d) => gh(d.getState().scene, d, "", {}),
  resetAfterCommit: () => {
  },
  shouldSetTextContent: () => !1,
  clearContainer: () => !1,
  hideInstance: uB,
  unhideInstance: S0,
  createTextInstance: Zv,
  hideTextInstance: Zv,
  unhideTextInstance: Zv,
  scheduleTimeout: typeof setTimeout == "function" ? setTimeout : void 0,
  cancelTimeout: typeof clearTimeout == "function" ? clearTimeout : void 0,
  noTimeout: -1,
  getInstanceFromNode: () => null,
  beforeActiveInstanceBlur() {
  },
  afterActiveInstanceBlur() {
  },
  detachDeletedInstance() {
  },
  prepareScopeUpdate() {
  },
  getInstanceFromScope: () => null,
  shouldAttemptEagerTransition: () => !1,
  trackSchedulerEvent: () => {
  },
  resolveEventType: () => null,
  resolveEventTimeStamp: () => -1.1,
  requestPostPaintCallback() {
  },
  maySuspendCommit: () => !1,
  preloadInstance: () => !0,
  // true indicates already loaded
  startSuspendingCommit() {
  },
  suspendInstance() {
  },
  waitForCommitToBeReady: () => null,
  NotPendingTransition: null,
  HostTransitionContext: /* @__PURE__ */ Qe.createContext(null),
  setCurrentUpdatePriority(d) {
    rh = d;
  },
  getCurrentUpdatePriority() {
    return rh;
  },
  resolveUpdatePriority() {
    var d;
    if (rh !== y0) return rh;
    switch (typeof window < "u" && ((d = window.event) == null ? void 0 : d.type)) {
      case "click":
      case "contextmenu":
      case "dblclick":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
        return yh.DiscreteEventPriority;
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "pointerenter":
      case "pointerleave":
      case "wheel":
        return yh.ContinuousEventPriority;
      default:
        return yh.DefaultEventPriority;
    }
  },
  resetFormInstance() {
  }
}), Co = /* @__PURE__ */ new Map(), Bf = {
  objects: "shallow",
  strict: !1
};
function rB(d, u) {
  if (!u && typeof HTMLCanvasElement < "u" && d instanceof HTMLCanvasElement && d.parentElement) {
    const {
      width: r,
      height: f,
      top: p,
      left: v
    } = d.parentElement.getBoundingClientRect();
    return {
      width: r,
      height: f,
      top: p,
      left: v
    };
  } else if (!u && typeof OffscreenCanvas < "u" && d instanceof OffscreenCanvas)
    return {
      width: d.width,
      height: d.height,
      top: 0,
      left: 0
    };
  return {
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    ...u
  };
}
function fB(d) {
  const u = Co.get(d), r = u == null ? void 0 : u.fiber, f = u == null ? void 0 : u.store;
  u && console.warn("R3F.createRoot should only be called once!");
  const p = typeof reportError == "function" ? (
    // In modern browsers, reportError will dispatch an error event,
    // emulating an uncaught JavaScript error.
    reportError
  ) : (
    // In older browsers and test environments, fallback to console.error.
    console.error
  ), v = f || k1(dy, UE), A = r || Rh.createContainer(
    v,
    // container
    yh.ConcurrentRoot,
    // tag
    null,
    // hydration callbacks
    !1,
    // isStrictMode
    null,
    // concurrentUpdatesByDefaultOverride
    "",
    // identifierPrefix
    p,
    // onUncaughtError
    p,
    // onCaughtError
    p,
    // onRecoverableError
    null
    // transitionCallbacks
  );
  u || Co.set(d, {
    fiber: A,
    store: v
  });
  let B, E, C = !1, R = null;
  return {
    async configure(T = {}) {
      let M;
      R = new Promise((me) => M = me);
      let {
        gl: O,
        size: U,
        scene: V,
        events: P,
        onCreated: G,
        shadows: N = !1,
        linear: $ = !1,
        flat: Z = !1,
        legacy: ce = !1,
        orthographic: W = !1,
        frameloop: Ce = "always",
        dpr: ne = [1, 2],
        performance: se,
        raycaster: fe,
        camera: He,
        onPointerMissed: Xe
      } = T, ee = v.getState(), Te = ee.gl;
      if (!ee.gl) {
        const me = {
          canvas: d,
          powerPreference: "high-performance",
          antialias: !0,
          alpha: !0
        }, de = typeof O == "function" ? await O(me) : O;
        bE(de) ? Te = de : Te = new zt.WebGLRenderer({
          ...me,
          ...O
        }), ee.set({
          gl: Te
        });
      }
      let Ve = ee.raycaster;
      Ve || ee.set({
        raycaster: Ve = new zt.Raycaster()
      });
      const {
        params: D,
        ...Q
      } = fe || {};
      if (ma.equ(Q, Ve, Bf) || xi(Ve, {
        ...Q
      }), ma.equ(D, Ve.params, Bf) || xi(Ve, {
        params: {
          ...Ve.params,
          ...D
        }
      }), !ee.camera || ee.camera === E && !ma.equ(E, He, Bf)) {
        E = He;
        const me = He == null ? void 0 : He.isCamera, de = me ? He : W ? new zt.OrthographicCamera(0, 0, 0, 0, 0.1, 1e3) : new zt.PerspectiveCamera(75, 0, 0.1, 1e3);
        me || (de.position.z = 5, He && (xi(de, He), de.manual || ("aspect" in He || "left" in He || "right" in He || "bottom" in He || "top" in He) && (de.manual = !0, de.updateProjectionMatrix())), !ee.camera && !(He != null && He.rotation) && de.lookAt(0, 0, 0)), ee.set({
          camera: de
        }), Ve.camera = de;
      }
      if (!ee.scene) {
        let me;
        V != null && V.isScene ? (me = V, gh(me, v, "", {})) : (me = new zt.Scene(), gh(me, v, "", {}), V && xi(me, V)), ee.set({
          scene: me
        });
      }
      P && !ee.events.handlers && ee.set({
        events: P(v)
      });
      const X = rB(d, U);
      if (ma.equ(X, ee.size, Bf) || ee.setSize(X.width, X.height, X.top, X.left), ne && ee.viewport.dpr !== f0(ne) && ee.setDpr(ne), ee.frameloop !== Ce && ee.setFrameloop(Ce), ee.onPointerMissed || ee.set({
        onPointerMissed: Xe
      }), se && !ma.equ(se, ee.performance, Bf) && ee.set((me) => ({
        performance: {
          ...me.performance,
          ...se
        }
      })), !ee.xr) {
        var re;
        const me = (Ne, Ie) => {
          const tt = v.getState();
          tt.frameloop !== "never" && UE(Ne, !0, tt, Ie);
        }, de = () => {
          const Ne = v.getState();
          Ne.gl.xr.enabled = Ne.gl.xr.isPresenting, Ne.gl.xr.setAnimationLoop(Ne.gl.xr.isPresenting ? me : null), Ne.gl.xr.isPresenting || dy(Ne);
        }, Ke = {
          connect() {
            const Ne = v.getState().gl;
            Ne.xr.addEventListener("sessionstart", de), Ne.xr.addEventListener("sessionend", de);
          },
          disconnect() {
            const Ne = v.getState().gl;
            Ne.xr.removeEventListener("sessionstart", de), Ne.xr.removeEventListener("sessionend", de);
          }
        };
        typeof ((re = Te.xr) == null ? void 0 : re.addEventListener) == "function" && Ke.connect(), ee.set({
          xr: Ke
        });
      }
      if (Te.shadowMap) {
        const me = Te.shadowMap.enabled, de = Te.shadowMap.type;
        if (Te.shadowMap.enabled = !!N, ma.boo(N))
          Te.shadowMap.type = zt.PCFSoftShadowMap;
        else if (ma.str(N)) {
          var x;
          const Ke = {
            basic: zt.BasicShadowMap,
            percentage: zt.PCFShadowMap,
            soft: zt.PCFSoftShadowMap,
            variance: zt.VSMShadowMap
          };
          Te.shadowMap.type = (x = Ke[N]) != null ? x : zt.PCFSoftShadowMap;
        } else ma.obj(N) && Object.assign(Te.shadowMap, N);
        (me !== Te.shadowMap.enabled || de !== Te.shadowMap.type) && (Te.shadowMap.needsUpdate = !0);
      }
      return zt.ColorManagement.enabled = !ce, C || (Te.outputColorSpace = $ ? zt.LinearSRGBColorSpace : zt.SRGBColorSpace, Te.toneMapping = Z ? zt.NoToneMapping : zt.ACESFilmicToneMapping), ee.legacy !== ce && ee.set(() => ({
        legacy: ce
      })), ee.linear !== $ && ee.set(() => ({
        linear: $
      })), ee.flat !== Z && ee.set(() => ({
        flat: Z
      })), O && !ma.fun(O) && !bE(O) && !ma.equ(O, Te, Bf) && xi(Te, O), B = G, C = !0, M(), this;
    },
    render(T) {
      return !C && !R && this.configure(), R.then(() => {
        Rh.updateContainer(/* @__PURE__ */ Mn.jsx(dB, {
          store: v,
          children: T,
          onCreated: B,
          rootElement: d
        }), A, null, () => {
        });
      }), v;
    },
    unmount() {
      g0(d);
    }
  };
}
function dB({
  store: d,
  children: u,
  onCreated: r,
  rootElement: f
}) {
  return xm(() => {
    const p = d.getState();
    p.set((v) => ({
      internal: {
        ...v.internal,
        active: !0
      }
    })), r && r(p), d.getState().events.connected || p.events.connect == null || p.events.connect(f);
  }, []), /* @__PURE__ */ Mn.jsx(gy.Provider, {
    value: d,
    children: u
  });
}
function g0(d, u) {
  const r = Co.get(d), f = r == null ? void 0 : r.fiber;
  if (f) {
    const p = r == null ? void 0 : r.store.getState();
    p && (p.internal.active = !1), Rh.updateContainer(null, f, null, () => {
      p && setTimeout(() => {
        try {
          var v, A, B, E;
          p.events.disconnect == null || p.events.disconnect(), (v = p.gl) == null || (A = v.renderLists) == null || A.dispose == null || A.dispose(), (B = p.gl) == null || B.forceContextLoss == null || B.forceContextLoss(), (E = p.gl) != null && E.xr && p.xr.disconnect(), V1(p.scene), Co.delete(d);
        } catch {
        }
      }, 500);
    });
  }
}
function mB(d, u, r) {
  return /* @__PURE__ */ Mn.jsx(pB, {
    children: d,
    container: u,
    state: r
  });
}
function pB({
  state: d = {},
  children: u,
  container: r
}) {
  const {
    events: f,
    size: p,
    ...v
  } = d, A = Cy(), [B] = Qe.useState(() => new zt.Raycaster()), [E] = Qe.useState(() => new zt.Vector2()), C = By((T, M) => {
    let O;
    if (M.camera && p) {
      const U = M.camera;
      O = T.viewport.getCurrentViewport(U, new zt.Vector3(), p), U !== T.camera && m0(U, p);
    }
    return {
      // The intersect consists of the previous root state
      ...T,
      ...M,
      // Portals have their own scene, which forms the root, a raycaster and a pointer
      scene: r,
      raycaster: B,
      pointer: E,
      mouse: E,
      // Their previous root is the layer before it
      previousRoot: A,
      // Events, size and viewport can be overridden by the inject layer
      events: {
        ...T.events,
        ...M.events,
        ...f
      },
      size: {
        ...T.size,
        ...p
      },
      viewport: {
        ...T.viewport,
        ...O
      },
      // Layers are allowed to override events
      setEvents: (U) => M.set((V) => ({
        ...V,
        events: {
          ...V.events,
          ...U
        }
      }))
    };
  }), R = Qe.useMemo(() => {
    const T = a0((O, U) => ({
      ...v,
      set: O,
      get: U
    })), M = (O) => T.setState((U) => C.current(O, U));
    return M(A.getState()), A.subscribe(M), T;
  }, [A, r]);
  return (
    // @ts-ignore, reconciler types are not maintained
    /* @__PURE__ */ Mn.jsx(Mn.Fragment, {
      children: Rh.createPortal(/* @__PURE__ */ Mn.jsx(gy.Provider, {
        value: R,
        children: u
      }), R, null)
    })
  );
}
const hB = /* @__PURE__ */ new Set(), vB = /* @__PURE__ */ new Set(), yB = /* @__PURE__ */ new Set();
function qv(d, u) {
  if (d.size)
    for (const {
      callback: r
    } of d.values())
      r(u);
}
function Om(d, u) {
  switch (d) {
    case "before":
      return qv(hB, u);
    case "after":
      return qv(vB, u);
    case "tail":
      return qv(yB, u);
  }
}
let Fv, Iv;
function ry(d, u, r) {
  let f = u.clock.getDelta();
  u.frameloop === "never" && typeof d == "number" && (f = d - u.clock.elapsedTime, u.clock.oldTime = u.clock.elapsedTime, u.clock.elapsedTime = d), Fv = u.internal.subscribers;
  for (let p = 0; p < Fv.length; p++)
    Iv = Fv[p], Iv.ref.current(Iv.store.getState(), f, r);
  return !u.internal.priority && u.gl.render && u.gl.render(u.scene, u.camera), u.internal.frames = Math.max(0, u.internal.frames - 1), u.frameloop === "always" ? 1 : u.internal.frames;
}
let Mh = !1, fy = !1, wv, OE, gf;
function C0(d) {
  OE = requestAnimationFrame(C0), Mh = !0, wv = 0, Om("before", d), fy = !0;
  for (const r of Co.values()) {
    var u;
    gf = r.store.getState(), gf.internal.active && (gf.frameloop === "always" || gf.internal.frames > 0) && !((u = gf.gl.xr) != null && u.isPresenting) && (wv += ry(d, gf));
  }
  if (fy = !1, Om("after", d), wv === 0)
    return Om("tail", d), Mh = !1, cancelAnimationFrame(OE);
}
function dy(d, u = 1) {
  var r;
  if (!d) return Co.forEach((f) => dy(f.store.getState(), u));
  (r = d.gl.xr) != null && r.isPresenting || !d.internal.active || d.frameloop === "never" || (u > 1 ? d.internal.frames = Math.min(60, d.internal.frames + u) : fy ? d.internal.frames = 2 : d.internal.frames = 1, Mh || (Mh = !0, requestAnimationFrame(C0)));
}
function UE(d, u = !0, r, f) {
  if (u && Om("before", d), r) ry(d, r, f);
  else for (const p of Co.values()) ry(d, p.store.getState());
  u && Om("after", d);
}
const Pv = {
  onClick: ["click", !1],
  onContextMenu: ["contextmenu", !1],
  onDoubleClick: ["dblclick", !1],
  onWheel: ["wheel", !0],
  onPointerDown: ["pointerdown", !0],
  onPointerUp: ["pointerup", !0],
  onPointerLeave: ["pointerleave", !0],
  onPointerMove: ["pointermove", !0],
  onPointerCancel: ["pointercancel", !0],
  onLostPointerCapture: ["lostpointercapture", !0]
};
function AB(d) {
  const {
    handlePointer: u
  } = W1(d);
  return {
    priority: 1,
    enabled: !0,
    compute(r, f, p) {
      f.pointer.set(r.offsetX / f.size.width * 2 - 1, -(r.offsetY / f.size.height) * 2 + 1), f.raycaster.setFromCamera(f.pointer, f.camera);
    },
    connected: void 0,
    handlers: Object.keys(Pv).reduce((r, f) => ({
      ...r,
      [f]: u(f)
    }), {}),
    update: () => {
      var r;
      const {
        events: f,
        internal: p
      } = d.getState();
      (r = p.lastEvent) != null && r.current && f.handlers && f.handlers.onPointerMove(p.lastEvent.current);
    },
    connect: (r) => {
      const {
        set: f,
        events: p
      } = d.getState();
      if (p.disconnect == null || p.disconnect(), f((v) => ({
        events: {
          ...v.events,
          connected: r
        }
      })), p.handlers)
        for (const v in p.handlers) {
          const A = p.handlers[v], [B, E] = Pv[v];
          r.addEventListener(B, A, {
            passive: E
          });
        }
    },
    disconnect: () => {
      const {
        set: r,
        events: f
      } = d.getState();
      if (f.connected) {
        if (f.handlers)
          for (const p in f.handlers) {
            const v = f.handlers[p], [A] = Pv[p];
            f.connected.removeEventListener(A, v);
          }
        r((p) => ({
          events: {
            ...p.events,
            connected: void 0
          }
        }));
      }
    }
  };
}
function NE(d, u) {
  let r;
  return (...f) => {
    window.clearTimeout(r), r = window.setTimeout(() => d(...f), u);
  };
}
function EB({ debounce: d, scroll: u, polyfill: r, offsetSize: f } = { debounce: 0, scroll: !1, offsetSize: !1 }) {
  const p = r || (typeof window > "u" ? class {
  } : window.ResizeObserver);
  if (!p) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
  const [v, A] = e1({ left: 0, top: 0, width: 0, height: 0, bottom: 0, right: 0, x: 0, y: 0 }), B = eE({ element: null, scrollContainers: null, resizeObserver: null, lastBounds: v, orientationHandler: null }), E = d ? typeof d == "number" ? d : d.scroll : null, C = d ? typeof d == "number" ? d : d.resize : null, R = eE(!1);
  Hm(() => (R.current = !0, () => void (R.current = !1)));
  const [T, M, O] = t1(() => {
    const G = () => {
      if (!B.current.element) return;
      const { left: N, top: $, width: Z, height: ce, bottom: W, right: Ce, x: ne, y: se } = B.current.element.getBoundingClientRect(), fe = { left: N, top: $, width: Z, height: ce, bottom: W, right: Ce, x: ne, y: se };
      B.current.element instanceof HTMLElement && f && (fe.height = B.current.element.offsetHeight, fe.width = B.current.element.offsetWidth), Object.freeze(fe), R.current && !CB(B.current.lastBounds, fe) && A(B.current.lastBounds = fe);
    };
    return [G, C ? NE(G, C) : G, E ? NE(G, E) : G];
  }, [A, f, E, C]);
  function U() {
    B.current.scrollContainers && (B.current.scrollContainers.forEach((G) => G.removeEventListener("scroll", O, !0)), B.current.scrollContainers = null), B.current.resizeObserver && (B.current.resizeObserver.disconnect(), B.current.resizeObserver = null), B.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", B.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", B.current.orientationHandler));
  }
  function V() {
    B.current.element && (B.current.resizeObserver = new p(O), B.current.resizeObserver.observe(B.current.element), u && B.current.scrollContainers && B.current.scrollContainers.forEach((G) => G.addEventListener("scroll", O, { capture: !0, passive: !0 })), B.current.orientationHandler = () => {
      O();
    }, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", B.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", B.current.orientationHandler));
  }
  const P = (G) => {
    !G || G === B.current.element || (U(), B.current.element = G, B.current.scrollContainers = T0(G), V());
  };
  return BB(O, !!u), SB(M), Hm(() => {
    U(), V();
  }, [u, O, M]), Hm(() => U, []), [P, v, T];
}
function SB(d) {
  Hm(() => {
    const u = d;
    return window.addEventListener("resize", u), () => void window.removeEventListener("resize", u);
  }, [d]);
}
function BB(d, u) {
  Hm(() => {
    if (u) {
      const r = d;
      return window.addEventListener("scroll", r, { capture: !0, passive: !0 }), () => void window.removeEventListener("scroll", r, !0);
    }
  }, [d, u]);
}
function T0(d) {
  const u = [];
  if (!d || d === document.body) return u;
  const { overflow: r, overflowX: f, overflowY: p } = window.getComputedStyle(d);
  return [r, f, p].some((v) => v === "auto" || v === "scroll") && u.push(d), [...u, ...T0(d.parentElement)];
}
const gB = ["x", "y", "top", "bottom", "left", "right", "width", "height"], CB = (d, u) => gB.every((r) => d[r] === u[r]);
function TB({
  ref: d,
  children: u,
  fallback: r,
  resize: f,
  style: p,
  gl: v,
  events: A = AB,
  eventSource: B,
  eventPrefix: E,
  shadows: C,
  linear: R,
  flat: T,
  legacy: M,
  orthographic: O,
  frameloop: U,
  dpr: V,
  performance: P,
  raycaster: G,
  camera: N,
  scene: $,
  onPointerMissed: Z,
  onCreated: ce,
  ...W
}) {
  Qe.useMemo(() => A0(zt), []);
  const Ce = j1(), [ne, se] = EB({
    scroll: !0,
    debounce: {
      scroll: 50,
      resize: 0
    },
    ...f
  }), fe = Qe.useRef(null), He = Qe.useRef(null);
  Qe.useImperativeHandle(d, () => fe.current);
  const Xe = By(Z), [ee, Te] = Qe.useState(!1), [Ve, D] = Qe.useState(!1);
  if (ee) throw ee;
  if (Ve) throw Ve;
  const Q = Qe.useRef(null);
  xm(() => {
    const re = fe.current;
    if (se.width > 0 && se.height > 0 && re) {
      Q.current || (Q.current = fB(re));
      async function x() {
        await Q.current.configure({
          gl: v,
          scene: $,
          events: A,
          shadows: C,
          linear: R,
          flat: T,
          legacy: M,
          orthographic: O,
          frameloop: U,
          dpr: V,
          performance: P,
          raycaster: G,
          camera: N,
          size: se,
          // Pass mutable reference to onPointerMissed so it's free to update
          onPointerMissed: (...me) => Xe.current == null ? void 0 : Xe.current(...me),
          onCreated: (me) => {
            me.events.connect == null || me.events.connect(B ? J1(B) ? B.current : B : He.current), E && me.setEvents({
              compute: (de, Ke) => {
                const Ne = de[E + "X"], Ie = de[E + "Y"];
                Ke.pointer.set(Ne / Ke.size.width * 2 - 1, -(Ie / Ke.size.height) * 2 + 1), Ke.raycaster.setFromCamera(Ke.pointer, Ke.camera);
              }
            }), ce == null || ce(me);
          }
        }), Q.current.render(/* @__PURE__ */ Mn.jsx(Ce, {
          children: /* @__PURE__ */ Mn.jsx(Y1, {
            set: D,
            children: /* @__PURE__ */ Mn.jsx(Qe.Suspense, {
              fallback: /* @__PURE__ */ Mn.jsx(Q1, {
                set: Te
              }),
              children: u ?? null
            })
          })
        }));
      }
      x();
    }
  }), Qe.useEffect(() => {
    const re = fe.current;
    if (re) return () => g0(re);
  }, []);
  const X = B ? "none" : "auto";
  return /* @__PURE__ */ Mn.jsx("div", {
    ref: He,
    style: {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      pointerEvents: X,
      ...p
    },
    ...W,
    children: /* @__PURE__ */ Mn.jsx("div", {
      ref: ne,
      style: {
        width: "100%",
        height: "100%"
      },
      children: /* @__PURE__ */ Mn.jsx("canvas", {
        ref: fe,
        style: {
          display: "block"
        },
        children: r
      })
    })
  });
}
function Wg(d) {
  return /* @__PURE__ */ Mn.jsx(s0, {
    children: /* @__PURE__ */ Mn.jsx(TB, {
      ...d
    })
  });
}
function bh() {
  return bh = Object.assign ? Object.assign.bind() : function(d) {
    for (var u = 1; u < arguments.length; u++) {
      var r = arguments[u];
      for (var f in r) ({}).hasOwnProperty.call(r, f) && (d[f] = r[f]);
    }
    return d;
  }, bh.apply(null, arguments);
}
const Ry = parseInt(lS.replace(/\D+/g, ""));
function GE(d, u) {
  if (u === uS)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), d;
  if (u === ly || u === XE) {
    let r = d.getIndex();
    if (r === null) {
      const A = [], B = d.getAttribute("position");
      if (B !== void 0) {
        for (let E = 0; E < B.count; E++)
          A.push(E);
        d.setIndex(A), r = d.getIndex();
      } else
        return console.error(
          "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
        ), d;
    }
    const f = r.count - 2, p = [];
    if (r)
      if (u === ly)
        for (let A = 1; A <= f; A++)
          p.push(r.getX(0)), p.push(r.getX(A)), p.push(r.getX(A + 1));
      else
        for (let A = 0; A < f; A++)
          A % 2 === 0 ? (p.push(r.getX(A)), p.push(r.getX(A + 1)), p.push(r.getX(A + 2))) : (p.push(r.getX(A + 2)), p.push(r.getX(A + 1)), p.push(r.getX(A)));
    p.length / 3 !== f && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const v = d.clone();
    return v.setIndex(p), v.clearGroups(), v;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", u), d;
}
var Cu = Uint8Array, yc = Uint16Array, my = Uint32Array, R0 = new Cu([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]), M0 = new Cu([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]), RB = new Cu([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), b0 = function(d, u) {
  for (var r = new yc(31), f = 0; f < 31; ++f)
    r[f] = u += 1 << d[f - 1];
  for (var p = new my(r[30]), f = 1; f < 30; ++f)
    for (var v = r[f]; v < r[f + 1]; ++v)
      p[v] = v - r[f] << 5 | f;
  return [r, p];
}, D0 = b0(R0, 2), _0 = D0[0], MB = D0[1];
_0[28] = 258, MB[258] = 28;
var bB = b0(M0, 0), DB = bB[0], py = new yc(32768);
for (var ia = 0; ia < 32768; ++ia) {
  var pc = (ia & 43690) >>> 1 | (ia & 21845) << 1;
  pc = (pc & 52428) >>> 2 | (pc & 13107) << 2, pc = (pc & 61680) >>> 4 | (pc & 3855) << 4, py[ia] = ((pc & 65280) >>> 8 | (pc & 255) << 8) >>> 1;
}
var Um = function(d, u, r) {
  for (var f = d.length, p = 0, v = new yc(u); p < f; ++p)
    ++v[d[p] - 1];
  var A = new yc(u);
  for (p = 0; p < u; ++p)
    A[p] = A[p - 1] + v[p - 1] << 1;
  var B;
  if (r) {
    B = new yc(1 << u);
    var E = 15 - u;
    for (p = 0; p < f; ++p)
      if (d[p])
        for (var C = p << 4 | d[p], R = u - d[p], T = A[d[p] - 1]++ << R, M = T | (1 << R) - 1; T <= M; ++T)
          B[py[T] >>> E] = C;
  } else
    for (B = new yc(f), p = 0; p < f; ++p)
      d[p] && (B[p] = py[A[d[p] - 1]++] >>> 15 - d[p]);
  return B;
}, Lm = new Cu(288);
for (var ia = 0; ia < 144; ++ia)
  Lm[ia] = 8;
for (var ia = 144; ia < 256; ++ia)
  Lm[ia] = 9;
for (var ia = 256; ia < 280; ++ia)
  Lm[ia] = 7;
for (var ia = 280; ia < 288; ++ia)
  Lm[ia] = 8;
var H0 = new Cu(32);
for (var ia = 0; ia < 32; ++ia)
  H0[ia] = 5;
var _B = /* @__PURE__ */ Um(Lm, 9, 1), HB = /* @__PURE__ */ Um(H0, 5, 1), Wv = function(d) {
  for (var u = d[0], r = 1; r < d.length; ++r)
    d[r] > u && (u = d[r]);
  return u;
}, ai = function(d, u, r) {
  var f = u / 8 | 0;
  return (d[f] | d[f + 1] << 8) >> (u & 7) & r;
}, kv = function(d, u) {
  var r = u / 8 | 0;
  return (d[r] | d[r + 1] << 8 | d[r + 2] << 16) >> (u & 7);
}, OB = function(d) {
  return (d / 8 | 0) + (d & 7 && 1);
}, UB = function(d, u, r) {
  (r == null || r > d.length) && (r = d.length);
  var f = new (d instanceof yc ? yc : d instanceof my ? my : Cu)(r - u);
  return f.set(d.subarray(u, r)), f;
}, NB = function(d, u, r) {
  var f = d.length;
  if (!f || r && !r.l && f < 5)
    return u || new Cu(0);
  var p = !u || r, v = !r || r.i;
  r || (r = {}), u || (u = new Cu(f * 3));
  var A = function(tt) {
    var $t = u.length;
    if (tt > $t) {
      var vt = new Cu(Math.max($t * 2, tt));
      vt.set(u), u = vt;
    }
  }, B = r.f || 0, E = r.p || 0, C = r.b || 0, R = r.l, T = r.d, M = r.m, O = r.n, U = f * 8;
  do {
    if (!R) {
      r.f = B = ai(d, E, 1);
      var V = ai(d, E + 1, 3);
      if (E += 3, V)
        if (V == 1)
          R = _B, T = HB, M = 9, O = 5;
        else if (V == 2) {
          var $ = ai(d, E, 31) + 257, Z = ai(d, E + 10, 15) + 4, ce = $ + ai(d, E + 5, 31) + 1;
          E += 14;
          for (var W = new Cu(ce), Ce = new Cu(19), ne = 0; ne < Z; ++ne)
            Ce[RB[ne]] = ai(d, E + ne * 3, 7);
          E += Z * 3;
          for (var se = Wv(Ce), fe = (1 << se) - 1, He = Um(Ce, se, 1), ne = 0; ne < ce; ) {
            var Xe = He[ai(d, E, fe)];
            E += Xe & 15;
            var P = Xe >>> 4;
            if (P < 16)
              W[ne++] = P;
            else {
              var ee = 0, Te = 0;
              for (P == 16 ? (Te = 3 + ai(d, E, 3), E += 2, ee = W[ne - 1]) : P == 17 ? (Te = 3 + ai(d, E, 7), E += 3) : P == 18 && (Te = 11 + ai(d, E, 127), E += 7); Te--; )
                W[ne++] = ee;
            }
          }
          var Ve = W.subarray(0, $), D = W.subarray($);
          M = Wv(Ve), O = Wv(D), R = Um(Ve, M, 1), T = Um(D, O, 1);
        } else
          throw "invalid block type";
      else {
        var P = OB(E) + 4, G = d[P - 4] | d[P - 3] << 8, N = P + G;
        if (N > f) {
          if (v)
            throw "unexpected EOF";
          break;
        }
        p && A(C + G), u.set(d.subarray(P, N), C), r.b = C += G, r.p = E = N * 8;
        continue;
      }
      if (E > U) {
        if (v)
          throw "unexpected EOF";
        break;
      }
    }
    p && A(C + 131072);
    for (var Q = (1 << M) - 1, X = (1 << O) - 1, re = E; ; re = E) {
      var ee = R[kv(d, E) & Q], x = ee >>> 4;
      if (E += ee & 15, E > U) {
        if (v)
          throw "unexpected EOF";
        break;
      }
      if (!ee)
        throw "invalid length/literal";
      if (x < 256)
        u[C++] = x;
      else if (x == 256) {
        re = E, R = null;
        break;
      } else {
        var me = x - 254;
        if (x > 264) {
          var ne = x - 257, de = R0[ne];
          me = ai(d, E, (1 << de) - 1) + _0[ne], E += de;
        }
        var Ke = T[kv(d, E) & X], Ne = Ke >>> 4;
        if (!Ke)
          throw "invalid distance";
        E += Ke & 15;
        var D = DB[Ne];
        if (Ne > 3) {
          var de = M0[Ne];
          D += kv(d, E) & (1 << de) - 1, E += de;
        }
        if (E > U) {
          if (v)
            throw "unexpected EOF";
          break;
        }
        p && A(C + 131072);
        for (var Ie = C + me; C < Ie; C += 4)
          u[C] = u[C - D], u[C + 1] = u[C + 1 - D], u[C + 2] = u[C + 2 - D], u[C + 3] = u[C + 3 - D];
        C = Ie;
      }
    }
    r.l = R, r.p = re, r.b = C, R && (B = 1, r.m = M, r.d = T, r.n = O);
  } while (!B);
  return C == u.length ? u : UB(u, 0, C);
}, GB = /* @__PURE__ */ new Cu(0), zB = function(d) {
  if ((d[0] & 15) != 8 || d[0] >>> 4 > 7 || (d[0] << 8 | d[1]) % 31)
    throw "invalid zlib data";
  if (d[1] & 32)
    throw "invalid zlib data: preset dictionaries not supported";
};
function fh(d, u) {
  return NB((zB(d), d.subarray(2, -4)), u);
}
var xB = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), LB = 0;
try {
  xB.decode(GB, { stream: !0 }), LB = 1;
} catch {
}
const JB = (d) => d && d.isCubeTexture;
class KB extends _h {
  constructor(u, r) {
    var f, p;
    const v = JB(u), B = ((p = v ? (f = u.image[0]) == null ? void 0 : f.width : u.image.width) != null ? p : 1024) / 4, E = Math.floor(Math.log2(B)), C = Math.pow(2, E), R = 3 * Math.max(C, 16 * 7), T = 4 * C, M = [
      v ? "#define ENVMAP_TYPE_CUBE" : "",
      `#define CUBEUV_TEXEL_WIDTH ${1 / R}`,
      `#define CUBEUV_TEXEL_HEIGHT ${1 / T}`,
      `#define CUBEUV_MAX_MIP ${E}.0`
    ], O = (
      /* glsl */
      `
        varying vec3 vWorldPosition;
        void main() 
        {
            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
        `
    ), U = M.join(`
`) + /* glsl */
    `
        #define ENVMAP_TYPE_CUBE_UV
        varying vec3 vWorldPosition;
        uniform float radius;
        uniform float height;
        uniform float angle;
        #ifdef ENVMAP_TYPE_CUBE
            uniform samplerCube map;
        #else
            uniform sampler2D map;
        #endif
        // From: https://www.shadertoy.com/view/4tsBD7
        float diskIntersectWithBackFaceCulling( vec3 ro, vec3 rd, vec3 c, vec3 n, float r ) 
        {
            float d = dot ( rd, n );
            
            if( d > 0.0 ) { return 1e6; }
            
            vec3  o = ro - c;
            float t = - dot( n, o ) / d;
            vec3  q = o + rd * t;
            
            return ( dot( q, q ) < r * r ) ? t : 1e6;
        }
        // From: https://www.iquilezles.org/www/articles/intersectors/intersectors.htm
        float sphereIntersect( vec3 ro, vec3 rd, vec3 ce, float ra ) 
        {
            vec3 oc = ro - ce;
            float b = dot( oc, rd );
            float c = dot( oc, oc ) - ra * ra;
            float h = b * b - c;
            
            if( h < 0.0 ) { return -1.0; }
            
            h = sqrt( h );
            
            return - b + h;
        }
        vec3 project() 
        {
            vec3 p = normalize( vWorldPosition );
            vec3 camPos = cameraPosition;
            camPos.y -= height;
            float intersection = sphereIntersect( camPos, p, vec3( 0.0 ), radius );
            if( intersection > 0.0 ) {
                
                vec3 h = vec3( 0.0, - height, 0.0 );
                float intersection2 = diskIntersectWithBackFaceCulling( camPos, p, h, vec3( 0.0, 1.0, 0.0 ), radius );
                p = ( camPos + min( intersection, intersection2 ) * p ) / radius;
            } else {
                p = vec3( 0.0, 1.0, 0.0 );
            }
            return p;
        }
        #include <common>
        #include <cube_uv_reflection_fragment>
        void main() 
        {
            vec3 projectedWorldPosition = project();
            
            #ifdef ENVMAP_TYPE_CUBE
                vec3 outcolor = textureCube( map, projectedWorldPosition ).rgb;
            #else
                vec3 direction = normalize( projectedWorldPosition );
                vec2 uv = equirectUv( direction );
                vec3 outcolor = texture2D( map, uv ).rgb;
            #endif
            gl_FragColor = vec4( outcolor, 1.0 );
            #include <tonemapping_fragment>
            #include <${Ry >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
        }
        `, V = {
      map: { value: u },
      height: { value: (r == null ? void 0 : r.height) || 15 },
      radius: { value: (r == null ? void 0 : r.radius) || 100 }
    }, P = new iS(1, 16), G = new yy({
      uniforms: V,
      fragmentShader: U,
      vertexShader: O,
      side: VE
    });
    super(P, G);
  }
  set radius(u) {
    this.material.uniforms.radius.value = u;
  }
  get radius() {
    return this.material.uniforms.radius.value;
  }
  set height(u) {
    this.material.uniforms.height.value = u;
  }
  get height() {
    return this.material.uniforms.height.value;
  }
}
var jB = Object.defineProperty, QB = (d, u, r) => u in d ? jB(d, u, { enumerable: !0, configurable: !0, writable: !0, value: r }) : d[u] = r, YB = (d, u, r) => (QB(d, u + "", r), r);
class XB {
  constructor() {
    YB(this, "_listeners");
  }
  /**
   * Adds a listener to an event type.
   * @param type The type of event to listen to.
   * @param listener The function that gets called when the event is fired.
   */
  addEventListener(u, r) {
    this._listeners === void 0 && (this._listeners = {});
    const f = this._listeners;
    f[u] === void 0 && (f[u] = []), f[u].indexOf(r) === -1 && f[u].push(r);
  }
  /**
      * Checks if listener is added to an event type.
      * @param type The type of event to listen to.
      * @param listener The function that gets called when the event is fired.
      */
  hasEventListener(u, r) {
    if (this._listeners === void 0)
      return !1;
    const f = this._listeners;
    return f[u] !== void 0 && f[u].indexOf(r) !== -1;
  }
  /**
      * Removes a listener from an event type.
      * @param type The type of the listener that gets removed.
      * @param listener The listener function that gets removed.
      */
  removeEventListener(u, r) {
    if (this._listeners === void 0)
      return;
    const p = this._listeners[u];
    if (p !== void 0) {
      const v = p.indexOf(r);
      v !== -1 && p.splice(v, 1);
    }
  }
  /**
      * Fire an event type.
      * @param event The event that gets fired.
      */
  dispatchEvent(u) {
    if (this._listeners === void 0)
      return;
    const f = this._listeners[u.type];
    if (f !== void 0) {
      u.target = this;
      const p = f.slice(0);
      for (let v = 0, A = p.length; v < A; v++)
        p[v].call(this, u);
      u.target = null;
    }
  }
}
var VB = Object.defineProperty, ZB = (d, u, r) => u in d ? VB(d, u, { enumerable: !0, configurable: !0, writable: !0, value: r }) : d[u] = r, Pe = (d, u, r) => (ZB(d, typeof u != "symbol" ? u + "" : u, r), r);
const dh = /* @__PURE__ */ new sS(), zE = /* @__PURE__ */ new cS(), qB = Math.cos(70 * (Math.PI / 180)), xE = (d, u) => (d % u + u) % u;
let FB = class extends XB {
  constructor(u, r) {
    super(), Pe(this, "object"), Pe(this, "domElement"), Pe(this, "enabled", !0), Pe(this, "target", new Ma()), Pe(this, "minDistance", 0), Pe(this, "maxDistance", 1 / 0), Pe(this, "minZoom", 0), Pe(this, "maxZoom", 1 / 0), Pe(this, "minPolarAngle", 0), Pe(this, "maxPolarAngle", Math.PI), Pe(this, "minAzimuthAngle", -1 / 0), Pe(this, "maxAzimuthAngle", 1 / 0), Pe(this, "enableDamping", !1), Pe(this, "dampingFactor", 0.05), Pe(this, "enableZoom", !0), Pe(this, "zoomSpeed", 1), Pe(this, "enableRotate", !0), Pe(this, "rotateSpeed", 1), Pe(this, "enablePan", !0), Pe(this, "panSpeed", 1), Pe(this, "screenSpacePanning", !0), Pe(this, "keyPanSpeed", 7), Pe(this, "zoomToCursor", !1), Pe(this, "autoRotate", !1), Pe(this, "autoRotateSpeed", 2), Pe(this, "reverseOrbit", !1), Pe(this, "reverseHorizontalOrbit", !1), Pe(this, "reverseVerticalOrbit", !1), Pe(this, "keys", { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }), Pe(this, "mouseButtons", {
      LEFT: Af.ROTATE,
      MIDDLE: Af.DOLLY,
      RIGHT: Af.PAN
    }), Pe(this, "touches", { ONE: Ef.ROTATE, TWO: Ef.DOLLY_PAN }), Pe(this, "target0"), Pe(this, "position0"), Pe(this, "zoom0"), Pe(this, "_domElementKeyEvents", null), Pe(this, "getPolarAngle"), Pe(this, "getAzimuthalAngle"), Pe(this, "setPolarAngle"), Pe(this, "setAzimuthalAngle"), Pe(this, "getDistance"), Pe(this, "getZoomScale"), Pe(this, "listenToKeyEvents"), Pe(this, "stopListenToKeyEvents"), Pe(this, "saveState"), Pe(this, "reset"), Pe(this, "update"), Pe(this, "connect"), Pe(this, "dispose"), Pe(this, "dollyIn"), Pe(this, "dollyOut"), Pe(this, "getScale"), Pe(this, "setScale"), this.object = u, this.domElement = r, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.getPolarAngle = () => R.phi, this.getAzimuthalAngle = () => R.theta, this.setPolarAngle = (Y) => {
      let Ae = xE(Y, 2 * Math.PI), ze = R.phi;
      ze < 0 && (ze += 2 * Math.PI), Ae < 0 && (Ae += 2 * Math.PI);
      let et = Math.abs(Ae - ze);
      2 * Math.PI - et < et && (Ae < ze ? Ae += 2 * Math.PI : ze += 2 * Math.PI), T.phi = Ae - ze, f.update();
    }, this.setAzimuthalAngle = (Y) => {
      let Ae = xE(Y, 2 * Math.PI), ze = R.theta;
      ze < 0 && (ze += 2 * Math.PI), Ae < 0 && (Ae += 2 * Math.PI);
      let et = Math.abs(Ae - ze);
      2 * Math.PI - et < et && (Ae < ze ? Ae += 2 * Math.PI : ze += 2 * Math.PI), T.theta = Ae - ze, f.update();
    }, this.getDistance = () => f.object.position.distanceTo(f.target), this.listenToKeyEvents = (Y) => {
      Y.addEventListener("keydown", il), this._domElementKeyEvents = Y;
    }, this.stopListenToKeyEvents = () => {
      this._domElementKeyEvents.removeEventListener("keydown", il), this._domElementKeyEvents = null;
    }, this.saveState = () => {
      f.target0.copy(f.target), f.position0.copy(f.object.position), f.zoom0 = f.object.zoom;
    }, this.reset = () => {
      f.target.copy(f.target0), f.object.position.copy(f.position0), f.object.zoom = f.zoom0, f.object.updateProjectionMatrix(), f.dispatchEvent(p), f.update(), E = B.NONE;
    }, this.update = (() => {
      const Y = new Ma(), Ae = new Ma(0, 1, 0), ze = new Eh().setFromUnitVectors(u.up, Ae), et = ze.clone().invert(), be = new Ma(), aa = new Eh(), Gn = 2 * Math.PI;
      return function() {
        const sl = f.object.position;
        ze.setFromUnitVectors(u.up, Ae), et.copy(ze).invert(), Y.copy(sl).sub(f.target), Y.applyQuaternion(ze), R.setFromVector3(Y), f.autoRotate && E === B.NONE && Te(Xe()), f.enableDamping ? (R.theta += T.theta * f.dampingFactor, R.phi += T.phi * f.dampingFactor) : (R.theta += T.theta, R.phi += T.phi);
        let ya = f.minAzimuthAngle, Xa = f.maxAzimuthAngle;
        isFinite(ya) && isFinite(Xa) && (ya < -Math.PI ? ya += Gn : ya > Math.PI && (ya -= Gn), Xa < -Math.PI ? Xa += Gn : Xa > Math.PI && (Xa -= Gn), ya <= Xa ? R.theta = Math.max(ya, Math.min(Xa, R.theta)) : R.theta = R.theta > (ya + Xa) / 2 ? Math.max(ya, R.theta) : Math.min(Xa, R.theta)), R.phi = Math.max(f.minPolarAngle, Math.min(f.maxPolarAngle, R.phi)), R.makeSafe(), f.enableDamping === !0 ? f.target.addScaledVector(O, f.dampingFactor) : f.target.add(O), f.zoomToCursor && se || f.object.isOrthographicCamera ? R.radius = Ke(R.radius) : R.radius = Ke(R.radius * M), Y.setFromSpherical(R), Y.applyQuaternion(et), sl.copy(f.target).add(Y), f.object.matrixAutoUpdate || f.object.updateMatrix(), f.object.lookAt(f.target), f.enableDamping === !0 ? (T.theta *= 1 - f.dampingFactor, T.phi *= 1 - f.dampingFactor, O.multiplyScalar(1 - f.dampingFactor)) : (T.set(0, 0, 0), O.set(0, 0, 0));
        let Va = !1;
        if (f.zoomToCursor && se) {
          let pn = null;
          if (f.object instanceof vh && f.object.isPerspectiveCamera) {
            const cl = Y.length();
            pn = Ke(cl * M);
            const Yn = cl - pn;
            f.object.position.addScaledVector(Ce, Yn), f.object.updateMatrixWorld();
          } else if (f.object.isOrthographicCamera) {
            const cl = new Ma(ne.x, ne.y, 0);
            cl.unproject(f.object), f.object.zoom = Math.max(f.minZoom, Math.min(f.maxZoom, f.object.zoom / M)), f.object.updateProjectionMatrix(), Va = !0;
            const Yn = new Ma(ne.x, ne.y, 0);
            Yn.unproject(f.object), f.object.position.sub(Yn).add(cl), f.object.updateMatrixWorld(), pn = Y.length();
          } else
            console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), f.zoomToCursor = !1;
          pn !== null && (f.screenSpacePanning ? f.target.set(0, 0, -1).transformDirection(f.object.matrix).multiplyScalar(pn).add(f.object.position) : (dh.origin.copy(f.object.position), dh.direction.set(0, 0, -1).transformDirection(f.object.matrix), Math.abs(f.object.up.dot(dh.direction)) < qB ? u.lookAt(f.target) : (zE.setFromNormalAndCoplanarPoint(f.object.up, f.target), dh.intersectPlane(zE, f.target))));
        } else f.object instanceof bm && f.object.isOrthographicCamera && (Va = M !== 1, Va && (f.object.zoom = Math.max(f.minZoom, Math.min(f.maxZoom, f.object.zoom / M)), f.object.updateProjectionMatrix()));
        return M = 1, se = !1, Va || be.distanceToSquared(f.object.position) > C || 8 * (1 - aa.dot(f.object.quaternion)) > C ? (f.dispatchEvent(p), be.copy(f.object.position), aa.copy(f.object.quaternion), Va = !1, !0) : !1;
      };
    })(), this.connect = (Y) => {
      f.domElement = Y, f.domElement.style.touchAction = "none", f.domElement.addEventListener("contextmenu", Nn), f.domElement.addEventListener("pointerdown", Cs), f.domElement.addEventListener("pointercancel", Un), f.domElement.addEventListener("wheel", bu);
    }, this.dispose = () => {
      var Y, Ae, ze, et, be, aa;
      f.domElement && (f.domElement.style.touchAction = "auto"), (Y = f.domElement) == null || Y.removeEventListener("contextmenu", Nn), (Ae = f.domElement) == null || Ae.removeEventListener("pointerdown", Cs), (ze = f.domElement) == null || ze.removeEventListener("pointercancel", Un), (et = f.domElement) == null || et.removeEventListener("wheel", bu), (be = f.domElement) == null || be.ownerDocument.removeEventListener("pointermove", Zl), (aa = f.domElement) == null || aa.ownerDocument.removeEventListener("pointerup", Un), f._domElementKeyEvents !== null && f._domElementKeyEvents.removeEventListener("keydown", il);
    };
    const f = this, p = { type: "change" }, v = { type: "start" }, A = { type: "end" }, B = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let E = B.NONE;
    const C = 1e-6, R = new wA(), T = new wA();
    let M = 1;
    const O = new Ma(), U = new Yl(), V = new Yl(), P = new Yl(), G = new Yl(), N = new Yl(), $ = new Yl(), Z = new Yl(), ce = new Yl(), W = new Yl(), Ce = new Ma(), ne = new Yl();
    let se = !1;
    const fe = [], He = {};
    function Xe() {
      return 2 * Math.PI / 60 / 60 * f.autoRotateSpeed;
    }
    function ee() {
      return Math.pow(0.95, f.zoomSpeed);
    }
    function Te(Y) {
      f.reverseOrbit || f.reverseHorizontalOrbit ? T.theta += Y : T.theta -= Y;
    }
    function Ve(Y) {
      f.reverseOrbit || f.reverseVerticalOrbit ? T.phi += Y : T.phi -= Y;
    }
    const D = (() => {
      const Y = new Ma();
      return function(ze, et) {
        Y.setFromMatrixColumn(et, 0), Y.multiplyScalar(-ze), O.add(Y);
      };
    })(), Q = (() => {
      const Y = new Ma();
      return function(ze, et) {
        f.screenSpacePanning === !0 ? Y.setFromMatrixColumn(et, 1) : (Y.setFromMatrixColumn(et, 0), Y.crossVectors(f.object.up, Y)), Y.multiplyScalar(ze), O.add(Y);
      };
    })(), X = (() => {
      const Y = new Ma();
      return function(ze, et) {
        const be = f.domElement;
        if (be && f.object instanceof vh && f.object.isPerspectiveCamera) {
          const aa = f.object.position;
          Y.copy(aa).sub(f.target);
          let Gn = Y.length();
          Gn *= Math.tan(f.object.fov / 2 * Math.PI / 180), D(2 * ze * Gn / be.clientHeight, f.object.matrix), Q(2 * et * Gn / be.clientHeight, f.object.matrix);
        } else be && f.object instanceof bm && f.object.isOrthographicCamera ? (D(
          ze * (f.object.right - f.object.left) / f.object.zoom / be.clientWidth,
          f.object.matrix
        ), Q(
          et * (f.object.top - f.object.bottom) / f.object.zoom / be.clientHeight,
          f.object.matrix
        )) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), f.enablePan = !1);
      };
    })();
    function re(Y) {
      f.object instanceof vh && f.object.isPerspectiveCamera || f.object instanceof bm && f.object.isOrthographicCamera ? M = Y : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), f.enableZoom = !1);
    }
    function x(Y) {
      re(M / Y);
    }
    function me(Y) {
      re(M * Y);
    }
    function de(Y) {
      if (!f.zoomToCursor || !f.domElement)
        return;
      se = !0;
      const Ae = f.domElement.getBoundingClientRect(), ze = Y.clientX - Ae.left, et = Y.clientY - Ae.top, be = Ae.width, aa = Ae.height;
      ne.x = ze / be * 2 - 1, ne.y = -(et / aa) * 2 + 1, Ce.set(ne.x, ne.y, 1).unproject(f.object).sub(f.object.position).normalize();
    }
    function Ke(Y) {
      return Math.max(f.minDistance, Math.min(f.maxDistance, Y));
    }
    function Ne(Y) {
      U.set(Y.clientX, Y.clientY);
    }
    function Ie(Y) {
      de(Y), Z.set(Y.clientX, Y.clientY);
    }
    function tt(Y) {
      G.set(Y.clientX, Y.clientY);
    }
    function $t(Y) {
      V.set(Y.clientX, Y.clientY), P.subVectors(V, U).multiplyScalar(f.rotateSpeed);
      const Ae = f.domElement;
      Ae && (Te(2 * Math.PI * P.x / Ae.clientHeight), Ve(2 * Math.PI * P.y / Ae.clientHeight)), U.copy(V), f.update();
    }
    function vt(Y) {
      ce.set(Y.clientX, Y.clientY), W.subVectors(ce, Z), W.y > 0 ? x(ee()) : W.y < 0 && me(ee()), Z.copy(ce), f.update();
    }
    function bn(Y) {
      N.set(Y.clientX, Y.clientY), $.subVectors(N, G).multiplyScalar(f.panSpeed), X($.x, $.y), G.copy(N), f.update();
    }
    function Tl(Y) {
      de(Y), Y.deltaY < 0 ? me(ee()) : Y.deltaY > 0 && x(ee()), f.update();
    }
    function Dn(Y) {
      let Ae = !1;
      switch (Y.code) {
        case f.keys.UP:
          X(0, f.keyPanSpeed), Ae = !0;
          break;
        case f.keys.BOTTOM:
          X(0, -f.keyPanSpeed), Ae = !0;
          break;
        case f.keys.LEFT:
          X(f.keyPanSpeed, 0), Ae = !0;
          break;
        case f.keys.RIGHT:
          X(-f.keyPanSpeed, 0), Ae = !0;
          break;
      }
      Ae && (Y.preventDefault(), f.update());
    }
    function _n() {
      if (fe.length == 1)
        U.set(fe[0].pageX, fe[0].pageY);
      else {
        const Y = 0.5 * (fe[0].pageX + fe[1].pageX), Ae = 0.5 * (fe[0].pageY + fe[1].pageY);
        U.set(Y, Ae);
      }
    }
    function Rl() {
      if (fe.length == 1)
        G.set(fe[0].pageX, fe[0].pageY);
      else {
        const Y = 0.5 * (fe[0].pageX + fe[1].pageX), Ae = 0.5 * (fe[0].pageY + fe[1].pageY);
        G.set(Y, Ae);
      }
    }
    function Ml() {
      const Y = fe[0].pageX - fe[1].pageX, Ae = fe[0].pageY - fe[1].pageY, ze = Math.sqrt(Y * Y + Ae * Ae);
      Z.set(0, ze);
    }
    function Vl() {
      f.enableZoom && Ml(), f.enablePan && Rl();
    }
    function ni() {
      f.enableZoom && Ml(), f.enableRotate && _n();
    }
    function Hn(Y) {
      if (fe.length == 1)
        V.set(Y.pageX, Y.pageY);
      else {
        const ze = Ua(Y), et = 0.5 * (Y.pageX + ze.x), be = 0.5 * (Y.pageY + ze.y);
        V.set(et, be);
      }
      P.subVectors(V, U).multiplyScalar(f.rotateSpeed);
      const Ae = f.domElement;
      Ae && (Te(2 * Math.PI * P.x / Ae.clientHeight), Ve(2 * Math.PI * P.y / Ae.clientHeight)), U.copy(V);
    }
    function li(Y) {
      if (fe.length == 1)
        N.set(Y.pageX, Y.pageY);
      else {
        const Ae = Ua(Y), ze = 0.5 * (Y.pageX + Ae.x), et = 0.5 * (Y.pageY + Ae.y);
        N.set(ze, et);
      }
      $.subVectors(N, G).multiplyScalar(f.panSpeed), X($.x, $.y), G.copy(N);
    }
    function Mu(Y) {
      const Ae = Ua(Y), ze = Y.pageX - Ae.x, et = Y.pageY - Ae.y, be = Math.sqrt(ze * ze + et * et);
      ce.set(0, be), W.set(0, Math.pow(ce.y / Z.y, f.zoomSpeed)), x(W.y), Z.copy(ce);
    }
    function On(Y) {
      f.enableZoom && Mu(Y), f.enablePan && li(Y);
    }
    function gt(Y) {
      f.enableZoom && Mu(Y), f.enableRotate && Hn(Y);
    }
    function Cs(Y) {
      var Ae, ze;
      f.enabled !== !1 && (fe.length === 0 && ((Ae = f.domElement) == null || Ae.ownerDocument.addEventListener("pointermove", Zl), (ze = f.domElement) == null || ze.ownerDocument.addEventListener("pointerup", Un)), ui(Y), Y.pointerType === "touch" ? Du(Y) : Qn(Y));
    }
    function Zl(Y) {
      f.enabled !== !1 && (Y.pointerType === "touch" ? Ya(Y) : Ts(Y));
    }
    function Un(Y) {
      var Ae, ze, et;
      Oa(Y), fe.length === 0 && ((Ae = f.domElement) == null || Ae.releasePointerCapture(Y.pointerId), (ze = f.domElement) == null || ze.ownerDocument.removeEventListener("pointermove", Zl), (et = f.domElement) == null || et.ownerDocument.removeEventListener("pointerup", Un)), f.dispatchEvent(A), E = B.NONE;
    }
    function Qn(Y) {
      let Ae;
      switch (Y.button) {
        case 0:
          Ae = f.mouseButtons.LEFT;
          break;
        case 1:
          Ae = f.mouseButtons.MIDDLE;
          break;
        case 2:
          Ae = f.mouseButtons.RIGHT;
          break;
        default:
          Ae = -1;
      }
      switch (Ae) {
        case Af.DOLLY:
          if (f.enableZoom === !1)
            return;
          Ie(Y), E = B.DOLLY;
          break;
        case Af.ROTATE:
          if (Y.ctrlKey || Y.metaKey || Y.shiftKey) {
            if (f.enablePan === !1)
              return;
            tt(Y), E = B.PAN;
          } else {
            if (f.enableRotate === !1)
              return;
            Ne(Y), E = B.ROTATE;
          }
          break;
        case Af.PAN:
          if (Y.ctrlKey || Y.metaKey || Y.shiftKey) {
            if (f.enableRotate === !1)
              return;
            Ne(Y), E = B.ROTATE;
          } else {
            if (f.enablePan === !1)
              return;
            tt(Y), E = B.PAN;
          }
          break;
        default:
          E = B.NONE;
      }
      E !== B.NONE && f.dispatchEvent(v);
    }
    function Ts(Y) {
      if (f.enabled !== !1)
        switch (E) {
          case B.ROTATE:
            if (f.enableRotate === !1)
              return;
            $t(Y);
            break;
          case B.DOLLY:
            if (f.enableZoom === !1)
              return;
            vt(Y);
            break;
          case B.PAN:
            if (f.enablePan === !1)
              return;
            bn(Y);
            break;
        }
    }
    function bu(Y) {
      f.enabled === !1 || f.enableZoom === !1 || E !== B.NONE && E !== B.ROTATE || (Y.preventDefault(), f.dispatchEvent(v), Tl(Y), f.dispatchEvent(A));
    }
    function il(Y) {
      f.enabled === !1 || f.enablePan === !1 || Dn(Y);
    }
    function Du(Y) {
      switch (Jt(Y), fe.length) {
        case 1:
          switch (f.touches.ONE) {
            case Ef.ROTATE:
              if (f.enableRotate === !1)
                return;
              _n(), E = B.TOUCH_ROTATE;
              break;
            case Ef.PAN:
              if (f.enablePan === !1)
                return;
              Rl(), E = B.TOUCH_PAN;
              break;
            default:
              E = B.NONE;
          }
          break;
        case 2:
          switch (f.touches.TWO) {
            case Ef.DOLLY_PAN:
              if (f.enableZoom === !1 && f.enablePan === !1)
                return;
              Vl(), E = B.TOUCH_DOLLY_PAN;
              break;
            case Ef.DOLLY_ROTATE:
              if (f.enableZoom === !1 && f.enableRotate === !1)
                return;
              ni(), E = B.TOUCH_DOLLY_ROTATE;
              break;
            default:
              E = B.NONE;
          }
          break;
        default:
          E = B.NONE;
      }
      E !== B.NONE && f.dispatchEvent(v);
    }
    function Ya(Y) {
      switch (Jt(Y), E) {
        case B.TOUCH_ROTATE:
          if (f.enableRotate === !1)
            return;
          Hn(Y), f.update();
          break;
        case B.TOUCH_PAN:
          if (f.enablePan === !1)
            return;
          li(Y), f.update();
          break;
        case B.TOUCH_DOLLY_PAN:
          if (f.enableZoom === !1 && f.enablePan === !1)
            return;
          On(Y), f.update();
          break;
        case B.TOUCH_DOLLY_ROTATE:
          if (f.enableZoom === !1 && f.enableRotate === !1)
            return;
          gt(Y), f.update();
          break;
        default:
          E = B.NONE;
      }
    }
    function Nn(Y) {
      f.enabled !== !1 && Y.preventDefault();
    }
    function ui(Y) {
      fe.push(Y);
    }
    function Oa(Y) {
      delete He[Y.pointerId];
      for (let Ae = 0; Ae < fe.length; Ae++)
        if (fe[Ae].pointerId == Y.pointerId) {
          fe.splice(Ae, 1);
          return;
        }
    }
    function Jt(Y) {
      let Ae = He[Y.pointerId];
      Ae === void 0 && (Ae = new Yl(), He[Y.pointerId] = Ae), Ae.set(Y.pageX, Y.pageY);
    }
    function Ua(Y) {
      const Ae = Y.pointerId === fe[0].pointerId ? fe[1] : fe[0];
      return He[Ae.pointerId];
    }
    this.dollyIn = (Y = ee()) => {
      me(Y), f.update();
    }, this.dollyOut = (Y = ee()) => {
      x(Y), f.update();
    }, this.getScale = () => M, this.setScale = (Y) => {
      re(Y), f.update();
    }, this.getZoomScale = () => ee(), r !== void 0 && this.connect(r), this.update();
  }
};
function Dh(d) {
  if (typeof TextDecoder < "u")
    return new TextDecoder().decode(d);
  let u = "";
  for (let r = 0, f = d.length; r < f; r++)
    u += String.fromCharCode(d[r]);
  try {
    return decodeURIComponent(escape(u));
  } catch {
    return u;
  }
}
const Bo = "srgb", Bs = "srgb-linear", LE = 3001, IB = 3e3;
class My extends Ay {
  constructor(u) {
    super(u), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(r) {
      return new $B(r);
    }), this.register(function(r) {
      return new eg(r);
    }), this.register(function(r) {
      return new og(r);
    }), this.register(function(r) {
      return new rg(r);
    }), this.register(function(r) {
      return new fg(r);
    }), this.register(function(r) {
      return new ag(r);
    }), this.register(function(r) {
      return new ng(r);
    }), this.register(function(r) {
      return new lg(r);
    }), this.register(function(r) {
      return new ug(r);
    }), this.register(function(r) {
      return new kB(r);
    }), this.register(function(r) {
      return new ig(r);
    }), this.register(function(r) {
      return new tg(r);
    }), this.register(function(r) {
      return new cg(r);
    }), this.register(function(r) {
      return new sg(r);
    }), this.register(function(r) {
      return new PB(r);
    }), this.register(function(r) {
      return new dg(r);
    }), this.register(function(r) {
      return new mg(r);
    });
  }
  load(u, r, f, p) {
    const v = this;
    let A;
    if (this.resourcePath !== "")
      A = this.resourcePath;
    else if (this.path !== "") {
      const C = Dm.extractUrlBase(u);
      A = Dm.resolveURL(C, this.path);
    } else
      A = Dm.extractUrlBase(u);
    this.manager.itemStart(u);
    const B = function(C) {
      p ? p(C) : console.error(C), v.manager.itemError(u), v.manager.itemEnd(u);
    }, E = new Ac(this.manager);
    E.setPath(this.path), E.setResponseType("arraybuffer"), E.setRequestHeader(this.requestHeader), E.setWithCredentials(this.withCredentials), E.load(
      u,
      function(C) {
        try {
          v.parse(
            C,
            A,
            function(R) {
              r(R), v.manager.itemEnd(u);
            },
            B
          );
        } catch (R) {
          B(R);
        }
      },
      f,
      B
    );
  }
  setDRACOLoader(u) {
    return this.dracoLoader = u, this;
  }
  setDDSLoader() {
    throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".');
  }
  setKTX2Loader(u) {
    return this.ktx2Loader = u, this;
  }
  setMeshoptDecoder(u) {
    return this.meshoptDecoder = u, this;
  }
  register(u) {
    return this.pluginCallbacks.indexOf(u) === -1 && this.pluginCallbacks.push(u), this;
  }
  unregister(u) {
    return this.pluginCallbacks.indexOf(u) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(u), 1), this;
  }
  parse(u, r, f, p) {
    let v;
    const A = {}, B = {};
    if (typeof u == "string")
      v = JSON.parse(u);
    else if (u instanceof ArrayBuffer)
      if (Dh(new Uint8Array(u.slice(0, 4))) === O0) {
        try {
          A[St.KHR_BINARY_GLTF] = new pg(u);
        } catch (R) {
          p && p(R);
          return;
        }
        v = JSON.parse(A[St.KHR_BINARY_GLTF].content);
      } else
        v = JSON.parse(Dh(new Uint8Array(u)));
    else
      v = u;
    if (v.asset === void 0 || v.asset.version[0] < 2) {
      p && p(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const E = new bg(v, {
      path: r || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    E.fileLoader.setRequestHeader(this.requestHeader);
    for (let C = 0; C < this.pluginCallbacks.length; C++) {
      const R = this.pluginCallbacks[C](E);
      R.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), B[R.name] = R, A[R.name] = !0;
    }
    if (v.extensionsUsed)
      for (let C = 0; C < v.extensionsUsed.length; ++C) {
        const R = v.extensionsUsed[C], T = v.extensionsRequired || [];
        switch (R) {
          case St.KHR_MATERIALS_UNLIT:
            A[R] = new WB();
            break;
          case St.KHR_DRACO_MESH_COMPRESSION:
            A[R] = new hg(v, this.dracoLoader);
            break;
          case St.KHR_TEXTURE_TRANSFORM:
            A[R] = new vg();
            break;
          case St.KHR_MESH_QUANTIZATION:
            A[R] = new yg();
            break;
          default:
            T.indexOf(R) >= 0 && B[R] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + R + '".');
        }
      }
    E.setExtensions(A), E.setPlugins(B), E.parse(f, p);
  }
  parseAsync(u, r) {
    const f = this;
    return new Promise(function(p, v) {
      f.parse(u, r, p, v);
    });
  }
}
function wB() {
  let d = {};
  return {
    get: function(u) {
      return d[u];
    },
    add: function(u, r) {
      d[u] = r;
    },
    remove: function(u) {
      delete d[u];
    },
    removeAll: function() {
      d = {};
    }
  };
}
const St = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class PB {
  constructor(u) {
    this.parser = u, this.name = St.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const u = this.parser, r = this.parser.json.nodes || [];
    for (let f = 0, p = r.length; f < p; f++) {
      const v = r[f];
      v.extensions && v.extensions[this.name] && v.extensions[this.name].light !== void 0 && u._addNodeRef(this.cache, v.extensions[this.name].light);
    }
  }
  _loadLight(u) {
    const r = this.parser, f = "light:" + u;
    let p = r.cache.get(f);
    if (p)
      return p;
    const v = r.json, E = ((v.extensions && v.extensions[this.name] || {}).lights || [])[u];
    let C;
    const R = new go(16777215);
    E.color !== void 0 && R.setRGB(E.color[0], E.color[1], E.color[2], Bs);
    const T = E.range !== void 0 ? E.range : 0;
    switch (E.type) {
      case "directional":
        C = new fS(R), C.target.position.set(0, 0, -1), C.add(C.target);
        break;
      case "point":
        C = new rS(R), C.distance = T;
        break;
      case "spot":
        C = new oS(R), C.distance = T, E.spot = E.spot || {}, E.spot.innerConeAngle = E.spot.innerConeAngle !== void 0 ? E.spot.innerConeAngle : 0, E.spot.outerConeAngle = E.spot.outerConeAngle !== void 0 ? E.spot.outerConeAngle : Math.PI / 4, C.angle = E.spot.outerConeAngle, C.penumbra = 1 - E.spot.innerConeAngle / E.spot.outerConeAngle, C.target.position.set(0, 0, -1), C.add(C.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + E.type);
    }
    return C.position.set(0, 0, 0), C.decay = 2, As(C, E), E.intensity !== void 0 && (C.intensity = E.intensity), C.name = r.createUniqueName(E.name || "light_" + u), p = Promise.resolve(C), r.cache.add(f, p), p;
  }
  getDependency(u, r) {
    if (u === "light")
      return this._loadLight(r);
  }
  createNodeAttachment(u) {
    const r = this, f = this.parser, v = f.json.nodes[u], B = (v.extensions && v.extensions[this.name] || {}).light;
    return B === void 0 ? null : this._loadLight(B).then(function(E) {
      return f._getNodeRef(r.cache, B, E);
    });
  }
}
class WB {
  constructor() {
    this.name = St.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return Cf;
  }
  extendParams(u, r, f) {
    const p = [];
    u.color = new go(1, 1, 1), u.opacity = 1;
    const v = r.pbrMetallicRoughness;
    if (v) {
      if (Array.isArray(v.baseColorFactor)) {
        const A = v.baseColorFactor;
        u.color.setRGB(A[0], A[1], A[2], Bs), u.opacity = A[3];
      }
      v.baseColorTexture !== void 0 && p.push(f.assignTexture(u, "map", v.baseColorTexture, Bo));
    }
    return Promise.all(p);
  }
}
class kB {
  constructor(u) {
    this.parser = u, this.name = St.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(u, r) {
    const p = this.parser.json.materials[u];
    if (!p.extensions || !p.extensions[this.name])
      return Promise.resolve();
    const v = p.extensions[this.name].emissiveStrength;
    return v !== void 0 && (r.emissiveIntensity = v), Promise.resolve();
  }
}
class $B {
  constructor(u) {
    this.parser = u, this.name = St.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(u) {
    const f = this.parser.json.materials[u];
    return !f.extensions || !f.extensions[this.name] ? null : Li;
  }
  extendMaterialParams(u, r) {
    const f = this.parser, p = f.json.materials[u];
    if (!p.extensions || !p.extensions[this.name])
      return Promise.resolve();
    const v = [], A = p.extensions[this.name];
    if (A.clearcoatFactor !== void 0 && (r.clearcoat = A.clearcoatFactor), A.clearcoatTexture !== void 0 && v.push(f.assignTexture(r, "clearcoatMap", A.clearcoatTexture)), A.clearcoatRoughnessFactor !== void 0 && (r.clearcoatRoughness = A.clearcoatRoughnessFactor), A.clearcoatRoughnessTexture !== void 0 && v.push(f.assignTexture(r, "clearcoatRoughnessMap", A.clearcoatRoughnessTexture)), A.clearcoatNormalTexture !== void 0 && (v.push(f.assignTexture(r, "clearcoatNormalMap", A.clearcoatNormalTexture)), A.clearcoatNormalTexture.scale !== void 0)) {
      const B = A.clearcoatNormalTexture.scale;
      r.clearcoatNormalScale = new Yl(B, B);
    }
    return Promise.all(v);
  }
}
class eg {
  constructor(u) {
    this.parser = u, this.name = St.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(u) {
    const f = this.parser.json.materials[u];
    return !f.extensions || !f.extensions[this.name] ? null : Li;
  }
  extendMaterialParams(u, r) {
    const p = this.parser.json.materials[u];
    if (!p.extensions || !p.extensions[this.name])
      return Promise.resolve();
    const v = p.extensions[this.name];
    return r.dispersion = v.dispersion !== void 0 ? v.dispersion : 0, Promise.resolve();
  }
}
class tg {
  constructor(u) {
    this.parser = u, this.name = St.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(u) {
    const f = this.parser.json.materials[u];
    return !f.extensions || !f.extensions[this.name] ? null : Li;
  }
  extendMaterialParams(u, r) {
    const f = this.parser, p = f.json.materials[u];
    if (!p.extensions || !p.extensions[this.name])
      return Promise.resolve();
    const v = [], A = p.extensions[this.name];
    return A.iridescenceFactor !== void 0 && (r.iridescence = A.iridescenceFactor), A.iridescenceTexture !== void 0 && v.push(f.assignTexture(r, "iridescenceMap", A.iridescenceTexture)), A.iridescenceIor !== void 0 && (r.iridescenceIOR = A.iridescenceIor), r.iridescenceThicknessRange === void 0 && (r.iridescenceThicknessRange = [100, 400]), A.iridescenceThicknessMinimum !== void 0 && (r.iridescenceThicknessRange[0] = A.iridescenceThicknessMinimum), A.iridescenceThicknessMaximum !== void 0 && (r.iridescenceThicknessRange[1] = A.iridescenceThicknessMaximum), A.iridescenceThicknessTexture !== void 0 && v.push(
      f.assignTexture(r, "iridescenceThicknessMap", A.iridescenceThicknessTexture)
    ), Promise.all(v);
  }
}
class ag {
  constructor(u) {
    this.parser = u, this.name = St.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(u) {
    const f = this.parser.json.materials[u];
    return !f.extensions || !f.extensions[this.name] ? null : Li;
  }
  extendMaterialParams(u, r) {
    const f = this.parser, p = f.json.materials[u];
    if (!p.extensions || !p.extensions[this.name])
      return Promise.resolve();
    const v = [];
    r.sheenColor = new go(0, 0, 0), r.sheenRoughness = 0, r.sheen = 1;
    const A = p.extensions[this.name];
    if (A.sheenColorFactor !== void 0) {
      const B = A.sheenColorFactor;
      r.sheenColor.setRGB(B[0], B[1], B[2], Bs);
    }
    return A.sheenRoughnessFactor !== void 0 && (r.sheenRoughness = A.sheenRoughnessFactor), A.sheenColorTexture !== void 0 && v.push(f.assignTexture(r, "sheenColorMap", A.sheenColorTexture, Bo)), A.sheenRoughnessTexture !== void 0 && v.push(f.assignTexture(r, "sheenRoughnessMap", A.sheenRoughnessTexture)), Promise.all(v);
  }
}
class ng {
  constructor(u) {
    this.parser = u, this.name = St.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(u) {
    const f = this.parser.json.materials[u];
    return !f.extensions || !f.extensions[this.name] ? null : Li;
  }
  extendMaterialParams(u, r) {
    const f = this.parser, p = f.json.materials[u];
    if (!p.extensions || !p.extensions[this.name])
      return Promise.resolve();
    const v = [], A = p.extensions[this.name];
    return A.transmissionFactor !== void 0 && (r.transmission = A.transmissionFactor), A.transmissionTexture !== void 0 && v.push(f.assignTexture(r, "transmissionMap", A.transmissionTexture)), Promise.all(v);
  }
}
class lg {
  constructor(u) {
    this.parser = u, this.name = St.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(u) {
    const f = this.parser.json.materials[u];
    return !f.extensions || !f.extensions[this.name] ? null : Li;
  }
  extendMaterialParams(u, r) {
    const f = this.parser, p = f.json.materials[u];
    if (!p.extensions || !p.extensions[this.name])
      return Promise.resolve();
    const v = [], A = p.extensions[this.name];
    r.thickness = A.thicknessFactor !== void 0 ? A.thicknessFactor : 0, A.thicknessTexture !== void 0 && v.push(f.assignTexture(r, "thicknessMap", A.thicknessTexture)), r.attenuationDistance = A.attenuationDistance || 1 / 0;
    const B = A.attenuationColor || [1, 1, 1];
    return r.attenuationColor = new go().setRGB(
      B[0],
      B[1],
      B[2],
      Bs
    ), Promise.all(v);
  }
}
class ug {
  constructor(u) {
    this.parser = u, this.name = St.KHR_MATERIALS_IOR;
  }
  getMaterialType(u) {
    const f = this.parser.json.materials[u];
    return !f.extensions || !f.extensions[this.name] ? null : Li;
  }
  extendMaterialParams(u, r) {
    const p = this.parser.json.materials[u];
    if (!p.extensions || !p.extensions[this.name])
      return Promise.resolve();
    const v = p.extensions[this.name];
    return r.ior = v.ior !== void 0 ? v.ior : 1.5, Promise.resolve();
  }
}
class ig {
  constructor(u) {
    this.parser = u, this.name = St.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(u) {
    const f = this.parser.json.materials[u];
    return !f.extensions || !f.extensions[this.name] ? null : Li;
  }
  extendMaterialParams(u, r) {
    const f = this.parser, p = f.json.materials[u];
    if (!p.extensions || !p.extensions[this.name])
      return Promise.resolve();
    const v = [], A = p.extensions[this.name];
    r.specularIntensity = A.specularFactor !== void 0 ? A.specularFactor : 1, A.specularTexture !== void 0 && v.push(f.assignTexture(r, "specularIntensityMap", A.specularTexture));
    const B = A.specularColorFactor || [1, 1, 1];
    return r.specularColor = new go().setRGB(B[0], B[1], B[2], Bs), A.specularColorTexture !== void 0 && v.push(
      f.assignTexture(r, "specularColorMap", A.specularColorTexture, Bo)
    ), Promise.all(v);
  }
}
class sg {
  constructor(u) {
    this.parser = u, this.name = St.EXT_MATERIALS_BUMP;
  }
  getMaterialType(u) {
    const f = this.parser.json.materials[u];
    return !f.extensions || !f.extensions[this.name] ? null : Li;
  }
  extendMaterialParams(u, r) {
    const f = this.parser, p = f.json.materials[u];
    if (!p.extensions || !p.extensions[this.name])
      return Promise.resolve();
    const v = [], A = p.extensions[this.name];
    return r.bumpScale = A.bumpFactor !== void 0 ? A.bumpFactor : 1, A.bumpTexture !== void 0 && v.push(f.assignTexture(r, "bumpMap", A.bumpTexture)), Promise.all(v);
  }
}
class cg {
  constructor(u) {
    this.parser = u, this.name = St.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(u) {
    const f = this.parser.json.materials[u];
    return !f.extensions || !f.extensions[this.name] ? null : Li;
  }
  extendMaterialParams(u, r) {
    const f = this.parser, p = f.json.materials[u];
    if (!p.extensions || !p.extensions[this.name])
      return Promise.resolve();
    const v = [], A = p.extensions[this.name];
    return A.anisotropyStrength !== void 0 && (r.anisotropy = A.anisotropyStrength), A.anisotropyRotation !== void 0 && (r.anisotropyRotation = A.anisotropyRotation), A.anisotropyTexture !== void 0 && v.push(f.assignTexture(r, "anisotropyMap", A.anisotropyTexture)), Promise.all(v);
  }
}
class og {
  constructor(u) {
    this.parser = u, this.name = St.KHR_TEXTURE_BASISU;
  }
  loadTexture(u) {
    const r = this.parser, f = r.json, p = f.textures[u];
    if (!p.extensions || !p.extensions[this.name])
      return null;
    const v = p.extensions[this.name], A = r.options.ktx2Loader;
    if (!A) {
      if (f.extensionsRequired && f.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return r.loadTextureImage(u, v.source, A);
  }
}
class rg {
  constructor(u) {
    this.parser = u, this.name = St.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(u) {
    const r = this.name, f = this.parser, p = f.json, v = p.textures[u];
    if (!v.extensions || !v.extensions[r])
      return null;
    const A = v.extensions[r], B = p.images[A.source];
    let E = f.textureLoader;
    if (B.uri) {
      const C = f.options.manager.getHandler(B.uri);
      C !== null && (E = C);
    }
    return this.detectSupport().then(function(C) {
      if (C)
        return f.loadTextureImage(u, A.source, E);
      if (p.extensionsRequired && p.extensionsRequired.indexOf(r) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return f.loadTexture(u);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(u) {
      const r = new Image();
      r.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", r.onload = r.onerror = function() {
        u(r.height === 1);
      };
    })), this.isSupported;
  }
}
class fg {
  constructor(u) {
    this.parser = u, this.name = St.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(u) {
    const r = this.name, f = this.parser, p = f.json, v = p.textures[u];
    if (!v.extensions || !v.extensions[r])
      return null;
    const A = v.extensions[r], B = p.images[A.source];
    let E = f.textureLoader;
    if (B.uri) {
      const C = f.options.manager.getHandler(B.uri);
      C !== null && (E = C);
    }
    return this.detectSupport().then(function(C) {
      if (C)
        return f.loadTextureImage(u, A.source, E);
      if (p.extensionsRequired && p.extensionsRequired.indexOf(r) >= 0)
        throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return f.loadTexture(u);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(u) {
      const r = new Image();
      r.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", r.onload = r.onerror = function() {
        u(r.height === 1);
      };
    })), this.isSupported;
  }
}
class dg {
  constructor(u) {
    this.name = St.EXT_MESHOPT_COMPRESSION, this.parser = u;
  }
  loadBufferView(u) {
    const r = this.parser.json, f = r.bufferViews[u];
    if (f.extensions && f.extensions[this.name]) {
      const p = f.extensions[this.name], v = this.parser.getDependency("buffer", p.buffer), A = this.parser.options.meshoptDecoder;
      if (!A || !A.supported) {
        if (r.extensionsRequired && r.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return v.then(function(B) {
        const E = p.byteOffset || 0, C = p.byteLength || 0, R = p.count, T = p.byteStride, M = new Uint8Array(B, E, C);
        return A.decodeGltfBufferAsync ? A.decodeGltfBufferAsync(R, T, M, p.mode, p.filter).then(function(O) {
          return O.buffer;
        }) : A.ready.then(function() {
          const O = new ArrayBuffer(R * T);
          return A.decodeGltfBuffer(
            new Uint8Array(O),
            R,
            T,
            M,
            p.mode,
            p.filter
          ), O;
        });
      });
    } else
      return null;
  }
}
class mg {
  constructor(u) {
    this.name = St.EXT_MESH_GPU_INSTANCING, this.parser = u;
  }
  createNodeMesh(u) {
    const r = this.parser.json, f = r.nodes[u];
    if (!f.extensions || !f.extensions[this.name] || f.mesh === void 0)
      return null;
    const p = r.meshes[f.mesh];
    for (const C of p.primitives)
      if (C.mode !== gu.TRIANGLES && C.mode !== gu.TRIANGLE_STRIP && C.mode !== gu.TRIANGLE_FAN && C.mode !== void 0)
        return null;
    const A = f.extensions[this.name].attributes, B = [], E = {};
    for (const C in A)
      B.push(
        this.parser.getDependency("accessor", A[C]).then((R) => (E[C] = R, E[C]))
      );
    return B.length < 1 ? null : (B.push(this.parser.createNodeMesh(u)), Promise.all(B).then((C) => {
      const R = C.pop(), T = R.isGroup ? R.children : [R], M = C[0].count, O = [];
      for (const U of T) {
        const V = new Sh(), P = new Ma(), G = new Eh(), N = new Ma(1, 1, 1), $ = new dS(U.geometry, U.material, M);
        for (let Z = 0; Z < M; Z++)
          E.TRANSLATION && P.fromBufferAttribute(E.TRANSLATION, Z), E.ROTATION && G.fromBufferAttribute(E.ROTATION, Z), E.SCALE && N.fromBufferAttribute(E.SCALE, Z), $.setMatrixAt(Z, V.compose(P, G, N));
        for (const Z in E)
          if (Z === "_COLOR_0") {
            const ce = E[Z];
            $.instanceColor = new mS(ce.array, ce.itemSize, ce.normalized);
          } else Z !== "TRANSLATION" && Z !== "ROTATION" && Z !== "SCALE" && U.geometry.setAttribute(Z, E[Z]);
        ZE.prototype.copy.call($, U), this.parser.assignFinalMaterial($), O.push($);
      }
      return R.isGroup ? (R.clear(), R.add(...O), R) : O[0];
    }));
  }
}
const O0 = "glTF", Tm = 12, JE = { JSON: 1313821514, BIN: 5130562 };
class pg {
  constructor(u) {
    this.name = St.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const r = new DataView(u, 0, Tm);
    if (this.header = {
      magic: Dh(new Uint8Array(u.slice(0, 4))),
      version: r.getUint32(4, !0),
      length: r.getUint32(8, !0)
    }, this.header.magic !== O0)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const f = this.header.length - Tm, p = new DataView(u, Tm);
    let v = 0;
    for (; v < f; ) {
      const A = p.getUint32(v, !0);
      v += 4;
      const B = p.getUint32(v, !0);
      if (v += 4, B === JE.JSON) {
        const E = new Uint8Array(u, Tm + v, A);
        this.content = Dh(E);
      } else if (B === JE.BIN) {
        const E = Tm + v;
        this.body = u.slice(E, E + A);
      }
      v += A;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class hg {
  constructor(u, r) {
    if (!r)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = St.KHR_DRACO_MESH_COMPRESSION, this.json = u, this.dracoLoader = r, this.dracoLoader.preload();
  }
  decodePrimitive(u, r) {
    const f = this.json, p = this.dracoLoader, v = u.extensions[this.name].bufferView, A = u.extensions[this.name].attributes, B = {}, E = {}, C = {};
    for (const R in A) {
      const T = hy[R] || R.toLowerCase();
      B[T] = A[R];
    }
    for (const R in u.attributes) {
      const T = hy[R] || R.toLowerCase();
      if (A[R] !== void 0) {
        const M = f.accessors[u.attributes[R]], O = Rf[M.componentType];
        C[T] = O.name, E[T] = M.normalized === !0;
      }
    }
    return r.getDependency("bufferView", v).then(function(R) {
      return new Promise(function(T, M) {
        p.decodeDracoFile(
          R,
          function(O) {
            for (const U in O.attributes) {
              const V = O.attributes[U], P = E[U];
              P !== void 0 && (V.normalized = P);
            }
            T(O);
          },
          B,
          C,
          Bs,
          M
        );
      });
    });
  }
}
class vg {
  constructor() {
    this.name = St.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(u, r) {
    return (r.texCoord === void 0 || r.texCoord === u.channel) && r.offset === void 0 && r.rotation === void 0 && r.scale === void 0 || (u = u.clone(), r.texCoord !== void 0 && (u.channel = r.texCoord), r.offset !== void 0 && u.offset.fromArray(r.offset), r.rotation !== void 0 && (u.rotation = r.rotation), r.scale !== void 0 && u.repeat.fromArray(r.scale), u.needsUpdate = !0), u;
  }
}
class yg {
  constructor() {
    this.name = St.KHR_MESH_QUANTIZATION;
  }
}
class U0 extends LS {
  constructor(u, r, f, p) {
    super(u, r, f, p);
  }
  copySampleValue_(u) {
    const r = this.resultBuffer, f = this.sampleValues, p = this.valueSize, v = u * p * 3 + p;
    for (let A = 0; A !== p; A++)
      r[A] = f[v + A];
    return r;
  }
  interpolate_(u, r, f, p) {
    const v = this.resultBuffer, A = this.sampleValues, B = this.valueSize, E = B * 2, C = B * 3, R = p - r, T = (f - r) / R, M = T * T, O = M * T, U = u * C, V = U - C, P = -2 * O + 3 * M, G = O - M, N = 1 - P, $ = G - M + T;
    for (let Z = 0; Z !== B; Z++) {
      const ce = A[V + Z + B], W = A[V + Z + E] * R, Ce = A[U + Z + B], ne = A[U + Z] * R;
      v[Z] = N * ce + $ * W + P * Ce + G * ne;
    }
    return v;
  }
}
const Ag = /* @__PURE__ */ new Eh();
class Eg extends U0 {
  interpolate_(u, r, f, p) {
    const v = super.interpolate_(u, r, f, p);
    return Ag.fromArray(v).normalize().toArray(v), v;
  }
}
const gu = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
}, Rf = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, KE = {
  9728: BS,
  9729: Tu,
  9984: SS,
  9985: ES,
  9986: AS,
  9987: qE
}, jE = {
  33071: Es,
  33648: gS,
  10497: uy
}, $v = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, hy = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  // uv => uv1, 4 uv channels
  // https://github.com/mrdoob/three.js/pull/25943
  // https://github.com/mrdoob/three.js/pull/25788
  ...Ry >= 152 ? {
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv1",
    TEXCOORD_2: "uv2",
    TEXCOORD_3: "uv3"
  } : {
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv2"
  },
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, hc = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, Sg = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: wE,
  STEP: zS
}, ey = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function Bg(d) {
  return d.DefaultMaterial === void 0 && (d.DefaultMaterial = new FE({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: xS
  })), d.DefaultMaterial;
}
function Eo(d, u, r) {
  for (const f in r.extensions)
    d[f] === void 0 && (u.userData.gltfExtensions = u.userData.gltfExtensions || {}, u.userData.gltfExtensions[f] = r.extensions[f]);
}
function As(d, u) {
  u.extras !== void 0 && (typeof u.extras == "object" ? Object.assign(d.userData, u.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + u.extras));
}
function gg(d, u, r) {
  let f = !1, p = !1, v = !1;
  for (let C = 0, R = u.length; C < R; C++) {
    const T = u[C];
    if (T.POSITION !== void 0 && (f = !0), T.NORMAL !== void 0 && (p = !0), T.COLOR_0 !== void 0 && (v = !0), f && p && v)
      break;
  }
  if (!f && !p && !v)
    return Promise.resolve(d);
  const A = [], B = [], E = [];
  for (let C = 0, R = u.length; C < R; C++) {
    const T = u[C];
    if (f) {
      const M = T.POSITION !== void 0 ? r.getDependency("accessor", T.POSITION) : d.attributes.position;
      A.push(M);
    }
    if (p) {
      const M = T.NORMAL !== void 0 ? r.getDependency("accessor", T.NORMAL) : d.attributes.normal;
      B.push(M);
    }
    if (v) {
      const M = T.COLOR_0 !== void 0 ? r.getDependency("accessor", T.COLOR_0) : d.attributes.color;
      E.push(M);
    }
  }
  return Promise.all([
    Promise.all(A),
    Promise.all(B),
    Promise.all(E)
  ]).then(function(C) {
    const R = C[0], T = C[1], M = C[2];
    return f && (d.morphAttributes.position = R), p && (d.morphAttributes.normal = T), v && (d.morphAttributes.color = M), d.morphTargetsRelative = !0, d;
  });
}
function Cg(d, u) {
  if (d.updateMorphTargets(), u.weights !== void 0)
    for (let r = 0, f = u.weights.length; r < f; r++)
      d.morphTargetInfluences[r] = u.weights[r];
  if (u.extras && Array.isArray(u.extras.targetNames)) {
    const r = u.extras.targetNames;
    if (d.morphTargetInfluences.length === r.length) {
      d.morphTargetDictionary = {};
      for (let f = 0, p = r.length; f < p; f++)
        d.morphTargetDictionary[r[f]] = f;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function Tg(d) {
  let u;
  const r = d.extensions && d.extensions[St.KHR_DRACO_MESH_COMPRESSION];
  if (r ? u = "draco:" + r.bufferView + ":" + r.indices + ":" + ty(r.attributes) : u = d.indices + ":" + ty(d.attributes) + ":" + d.mode, d.targets !== void 0)
    for (let f = 0, p = d.targets.length; f < p; f++)
      u += ":" + ty(d.targets[f]);
  return u;
}
function ty(d) {
  let u = "";
  const r = Object.keys(d).sort();
  for (let f = 0, p = r.length; f < p; f++)
    u += r[f] + ":" + d[r[f]] + ";";
  return u;
}
function vy(d) {
  switch (d) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function Rg(d) {
  return d.search(/\.jpe?g($|\?)/i) > 0 || d.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : d.search(/\.webp($|\?)/i) > 0 || d.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const Mg = /* @__PURE__ */ new Sh();
class bg {
  constructor(u = {}, r = {}) {
    this.json = u, this.extensions = {}, this.plugins = {}, this.options = r, this.cache = new wB(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let f = !1, p = !1, v = -1;
    typeof navigator < "u" && typeof navigator.userAgent < "u" && (f = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, p = navigator.userAgent.indexOf("Firefox") > -1, v = p ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || f || p && v < 98 ? this.textureLoader = new pS(this.options.manager) : this.textureLoader = new hS(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Ac(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(u) {
    this.extensions = u;
  }
  setPlugins(u) {
    this.plugins = u;
  }
  parse(u, r) {
    const f = this, p = this.json, v = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(A) {
      return A._markDefs && A._markDefs();
    }), Promise.all(
      this._invokeAll(function(A) {
        return A.beforeRoot && A.beforeRoot();
      })
    ).then(function() {
      return Promise.all([
        f.getDependencies("scene"),
        f.getDependencies("animation"),
        f.getDependencies("camera")
      ]);
    }).then(function(A) {
      const B = {
        scene: A[0][p.scene || 0],
        scenes: A[0],
        animations: A[1],
        cameras: A[2],
        asset: p.asset,
        parser: f,
        userData: {}
      };
      return Eo(v, B, p), As(B, p), Promise.all(
        f._invokeAll(function(E) {
          return E.afterRoot && E.afterRoot(B);
        })
      ).then(function() {
        for (const E of B.scenes)
          E.updateMatrixWorld();
        u(B);
      });
    }).catch(r);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const u = this.json.nodes || [], r = this.json.skins || [], f = this.json.meshes || [];
    for (let p = 0, v = r.length; p < v; p++) {
      const A = r[p].joints;
      for (let B = 0, E = A.length; B < E; B++)
        u[A[B]].isBone = !0;
    }
    for (let p = 0, v = u.length; p < v; p++) {
      const A = u[p];
      A.mesh !== void 0 && (this._addNodeRef(this.meshCache, A.mesh), A.skin !== void 0 && (f[A.mesh].isSkinnedMesh = !0)), A.camera !== void 0 && this._addNodeRef(this.cameraCache, A.camera);
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   */
  _addNodeRef(u, r) {
    r !== void 0 && (u.refs[r] === void 0 && (u.refs[r] = u.uses[r] = 0), u.refs[r]++);
  }
  /** Returns a reference to a shared resource, cloning it if necessary. */
  _getNodeRef(u, r, f) {
    if (u.refs[r] <= 1)
      return f;
    const p = f.clone(), v = (A, B) => {
      const E = this.associations.get(A);
      E != null && this.associations.set(B, E);
      for (const [C, R] of A.children.entries())
        v(R, B.children[C]);
    };
    return v(f, p), p.name += "_instance_" + u.uses[r]++, p;
  }
  _invokeOne(u) {
    const r = Object.values(this.plugins);
    r.push(this);
    for (let f = 0; f < r.length; f++) {
      const p = u(r[f]);
      if (p)
        return p;
    }
    return null;
  }
  _invokeAll(u) {
    const r = Object.values(this.plugins);
    r.unshift(this);
    const f = [];
    for (let p = 0; p < r.length; p++) {
      const v = u(r[p]);
      v && f.push(v);
    }
    return f;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(u, r) {
    const f = u + ":" + r;
    let p = this.cache.get(f);
    if (!p) {
      switch (u) {
        case "scene":
          p = this.loadScene(r);
          break;
        case "node":
          p = this._invokeOne(function(v) {
            return v.loadNode && v.loadNode(r);
          });
          break;
        case "mesh":
          p = this._invokeOne(function(v) {
            return v.loadMesh && v.loadMesh(r);
          });
          break;
        case "accessor":
          p = this.loadAccessor(r);
          break;
        case "bufferView":
          p = this._invokeOne(function(v) {
            return v.loadBufferView && v.loadBufferView(r);
          });
          break;
        case "buffer":
          p = this.loadBuffer(r);
          break;
        case "material":
          p = this._invokeOne(function(v) {
            return v.loadMaterial && v.loadMaterial(r);
          });
          break;
        case "texture":
          p = this._invokeOne(function(v) {
            return v.loadTexture && v.loadTexture(r);
          });
          break;
        case "skin":
          p = this.loadSkin(r);
          break;
        case "animation":
          p = this._invokeOne(function(v) {
            return v.loadAnimation && v.loadAnimation(r);
          });
          break;
        case "camera":
          p = this.loadCamera(r);
          break;
        default:
          if (p = this._invokeOne(function(v) {
            return v != this && v.getDependency && v.getDependency(u, r);
          }), !p)
            throw new Error("Unknown type: " + u);
          break;
      }
      this.cache.add(f, p);
    }
    return p;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(u) {
    let r = this.cache.get(u);
    if (!r) {
      const f = this, p = this.json[u + (u === "mesh" ? "es" : "s")] || [];
      r = Promise.all(
        p.map(function(v, A) {
          return f.getDependency(u, A);
        })
      ), this.cache.add(u, r);
    }
    return r;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(u) {
    const r = this.json.buffers[u], f = this.fileLoader;
    if (r.type && r.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + r.type + " buffer type is not supported.");
    if (r.uri === void 0 && u === 0)
      return Promise.resolve(this.extensions[St.KHR_BINARY_GLTF].body);
    const p = this.options;
    return new Promise(function(v, A) {
      f.load(Dm.resolveURL(r.uri, p.path), v, void 0, function() {
        A(new Error('THREE.GLTFLoader: Failed to load buffer "' + r.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(u) {
    const r = this.json.bufferViews[u];
    return this.getDependency("buffer", r.buffer).then(function(f) {
      const p = r.byteLength || 0, v = r.byteOffset || 0;
      return f.slice(v, v + p);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(u) {
    const r = this, f = this.json, p = this.json.accessors[u];
    if (p.bufferView === void 0 && p.sparse === void 0) {
      const A = $v[p.type], B = Rf[p.componentType], E = p.normalized === !0, C = new B(p.count * A);
      return Promise.resolve(new _m(C, A, E));
    }
    const v = [];
    return p.bufferView !== void 0 ? v.push(this.getDependency("bufferView", p.bufferView)) : v.push(null), p.sparse !== void 0 && (v.push(this.getDependency("bufferView", p.sparse.indices.bufferView)), v.push(this.getDependency("bufferView", p.sparse.values.bufferView))), Promise.all(v).then(function(A) {
      const B = A[0], E = $v[p.type], C = Rf[p.componentType], R = C.BYTES_PER_ELEMENT, T = R * E, M = p.byteOffset || 0, O = p.bufferView !== void 0 ? f.bufferViews[p.bufferView].byteStride : void 0, U = p.normalized === !0;
      let V, P;
      if (O && O !== T) {
        const G = Math.floor(M / O), N = "InterleavedBuffer:" + p.bufferView + ":" + p.componentType + ":" + G + ":" + p.count;
        let $ = r.cache.get(N);
        $ || (V = new C(B, G * O, p.count * O / R), $ = new vS(V, O / R), r.cache.add(N, $)), P = new yS(
          $,
          E,
          M % O / R,
          U
        );
      } else
        B === null ? V = new C(p.count * E) : V = new C(B, M, p.count * E), P = new _m(V, E, U);
      if (p.sparse !== void 0) {
        const G = $v.SCALAR, N = Rf[p.sparse.indices.componentType], $ = p.sparse.indices.byteOffset || 0, Z = p.sparse.values.byteOffset || 0, ce = new N(
          A[1],
          $,
          p.sparse.count * G
        ), W = new C(A[2], Z, p.sparse.count * E);
        B !== null && (P = new _m(
          P.array.slice(),
          P.itemSize,
          P.normalized
        ));
        for (let Ce = 0, ne = ce.length; Ce < ne; Ce++) {
          const se = ce[Ce];
          if (P.setX(se, W[Ce * E]), E >= 2 && P.setY(se, W[Ce * E + 1]), E >= 3 && P.setZ(se, W[Ce * E + 2]), E >= 4 && P.setW(se, W[Ce * E + 3]), E >= 5)
            throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return P;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(u) {
    const r = this.json, f = this.options, v = r.textures[u].source, A = r.images[v];
    let B = this.textureLoader;
    if (A.uri) {
      const E = f.manager.getHandler(A.uri);
      E !== null && (B = E);
    }
    return this.loadTextureImage(u, v, B);
  }
  loadTextureImage(u, r, f) {
    const p = this, v = this.json, A = v.textures[u], B = v.images[r], E = (B.uri || B.bufferView) + ":" + A.sampler;
    if (this.textureCache[E])
      return this.textureCache[E];
    const C = this.loadImageSource(r, f).then(function(R) {
      R.flipY = !1, R.name = A.name || B.name || "", R.name === "" && typeof B.uri == "string" && B.uri.startsWith("data:image/") === !1 && (R.name = B.uri);
      const M = (v.samplers || {})[A.sampler] || {};
      return R.magFilter = KE[M.magFilter] || Tu, R.minFilter = KE[M.minFilter] || qE, R.wrapS = jE[M.wrapS] || uy, R.wrapT = jE[M.wrapT] || uy, p.associations.set(R, { textures: u }), R;
    }).catch(function() {
      return null;
    });
    return this.textureCache[E] = C, C;
  }
  loadImageSource(u, r) {
    const f = this, p = this.json, v = this.options;
    if (this.sourceCache[u] !== void 0)
      return this.sourceCache[u].then((T) => T.clone());
    const A = p.images[u], B = self.URL || self.webkitURL;
    let E = A.uri || "", C = !1;
    if (A.bufferView !== void 0)
      E = f.getDependency("bufferView", A.bufferView).then(function(T) {
        C = !0;
        const M = new Blob([T], { type: A.mimeType });
        return E = B.createObjectURL(M), E;
      });
    else if (A.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + u + " is missing URI and bufferView");
    const R = Promise.resolve(E).then(function(T) {
      return new Promise(function(M, O) {
        let U = M;
        r.isImageBitmapLoader === !0 && (U = function(V) {
          const P = new vc(V);
          P.needsUpdate = !0, M(P);
        }), r.load(Dm.resolveURL(T, v.path), U, void 0, O);
      });
    }).then(function(T) {
      return C === !0 && B.revokeObjectURL(E), As(T, A), T.userData.mimeType = A.mimeType || Rg(A.uri), T;
    }).catch(function(T) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", E), T;
    });
    return this.sourceCache[u] = R, R;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @return {Promise<Texture>}
   */
  assignTexture(u, r, f, p) {
    const v = this;
    return this.getDependency("texture", f.index).then(function(A) {
      if (!A)
        return null;
      if (f.texCoord !== void 0 && f.texCoord > 0 && (A = A.clone(), A.channel = f.texCoord), v.extensions[St.KHR_TEXTURE_TRANSFORM]) {
        const B = f.extensions !== void 0 ? f.extensions[St.KHR_TEXTURE_TRANSFORM] : void 0;
        if (B) {
          const E = v.associations.get(A);
          A = v.extensions[St.KHR_TEXTURE_TRANSFORM].extendTexture(A, B), v.associations.set(A, E);
        }
      }
      return p !== void 0 && (typeof p == "number" && (p = p === LE ? Bo : Bs), "colorSpace" in A ? A.colorSpace = p : A.encoding = p === Bo ? LE : IB), u[r] = A, A;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   * @param  {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(u) {
    const r = u.geometry;
    let f = u.material;
    const p = r.attributes.tangent === void 0, v = r.attributes.color !== void 0, A = r.attributes.normal === void 0;
    if (u.isPoints) {
      const B = "PointsMaterial:" + f.uuid;
      let E = this.cache.get(B);
      E || (E = new CS(), Uv.prototype.copy.call(E, f), E.color.copy(f.color), E.map = f.map, E.sizeAttenuation = !1, this.cache.add(B, E)), f = E;
    } else if (u.isLine) {
      const B = "LineBasicMaterial:" + f.uuid;
      let E = this.cache.get(B);
      E || (E = new TS(), Uv.prototype.copy.call(E, f), E.color.copy(f.color), E.map = f.map, this.cache.add(B, E)), f = E;
    }
    if (p || v || A) {
      let B = "ClonedMaterial:" + f.uuid + ":";
      p && (B += "derivative-tangents:"), v && (B += "vertex-colors:"), A && (B += "flat-shading:");
      let E = this.cache.get(B);
      E || (E = f.clone(), v && (E.vertexColors = !0), A && (E.flatShading = !0), p && (E.normalScale && (E.normalScale.y *= -1), E.clearcoatNormalScale && (E.clearcoatNormalScale.y *= -1)), this.cache.add(B, E), this.associations.set(E, this.associations.get(f))), f = E;
    }
    u.material = f;
  }
  getMaterialType() {
    return FE;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(u) {
    const r = this, f = this.json, p = this.extensions, v = f.materials[u];
    let A;
    const B = {}, E = v.extensions || {}, C = [];
    if (E[St.KHR_MATERIALS_UNLIT]) {
      const T = p[St.KHR_MATERIALS_UNLIT];
      A = T.getMaterialType(), C.push(T.extendParams(B, v, r));
    } else {
      const T = v.pbrMetallicRoughness || {};
      if (B.color = new go(1, 1, 1), B.opacity = 1, Array.isArray(T.baseColorFactor)) {
        const M = T.baseColorFactor;
        B.color.setRGB(M[0], M[1], M[2], Bs), B.opacity = M[3];
      }
      T.baseColorTexture !== void 0 && C.push(r.assignTexture(B, "map", T.baseColorTexture, Bo)), B.metalness = T.metallicFactor !== void 0 ? T.metallicFactor : 1, B.roughness = T.roughnessFactor !== void 0 ? T.roughnessFactor : 1, T.metallicRoughnessTexture !== void 0 && (C.push(r.assignTexture(B, "metalnessMap", T.metallicRoughnessTexture)), C.push(r.assignTexture(B, "roughnessMap", T.metallicRoughnessTexture))), A = this._invokeOne(function(M) {
        return M.getMaterialType && M.getMaterialType(u);
      }), C.push(
        Promise.all(
          this._invokeAll(function(M) {
            return M.extendMaterialParams && M.extendMaterialParams(u, B);
          })
        )
      );
    }
    v.doubleSided === !0 && (B.side = VE);
    const R = v.alphaMode || ey.OPAQUE;
    if (R === ey.BLEND ? (B.transparent = !0, B.depthWrite = !1) : (B.transparent = !1, R === ey.MASK && (B.alphaTest = v.alphaCutoff !== void 0 ? v.alphaCutoff : 0.5)), v.normalTexture !== void 0 && A !== Cf && (C.push(r.assignTexture(B, "normalMap", v.normalTexture)), B.normalScale = new Yl(1, 1), v.normalTexture.scale !== void 0)) {
      const T = v.normalTexture.scale;
      B.normalScale.set(T, T);
    }
    if (v.occlusionTexture !== void 0 && A !== Cf && (C.push(r.assignTexture(B, "aoMap", v.occlusionTexture)), v.occlusionTexture.strength !== void 0 && (B.aoMapIntensity = v.occlusionTexture.strength)), v.emissiveFactor !== void 0 && A !== Cf) {
      const T = v.emissiveFactor;
      B.emissive = new go().setRGB(
        T[0],
        T[1],
        T[2],
        Bs
      );
    }
    return v.emissiveTexture !== void 0 && A !== Cf && C.push(r.assignTexture(B, "emissiveMap", v.emissiveTexture, Bo)), Promise.all(C).then(function() {
      const T = new A(B);
      return v.name && (T.name = v.name), As(T, v), r.associations.set(T, { materials: u }), v.extensions && Eo(p, T, v), T;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(u) {
    const r = RS.sanitizeNodeName(u || "");
    return r in this.nodeNamesUsed ? r + "_" + ++this.nodeNamesUsed[r] : (this.nodeNamesUsed[r] = 0, r);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(u) {
    const r = this, f = this.extensions, p = this.primitiveCache;
    function v(B) {
      return f[St.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(B, r).then(function(E) {
        return QE(E, B, r);
      });
    }
    const A = [];
    for (let B = 0, E = u.length; B < E; B++) {
      const C = u[B], R = Tg(C), T = p[R];
      if (T)
        A.push(T.promise);
      else {
        let M;
        C.extensions && C.extensions[St.KHR_DRACO_MESH_COMPRESSION] ? M = v(C) : M = QE(new IE(), C, r), p[R] = { primitive: C, promise: M }, A.push(M);
      }
    }
    return Promise.all(A);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(u) {
    const r = this, f = this.json, p = this.extensions, v = f.meshes[u], A = v.primitives, B = [];
    for (let E = 0, C = A.length; E < C; E++) {
      const R = A[E].material === void 0 ? Bg(this.cache) : this.getDependency("material", A[E].material);
      B.push(R);
    }
    return B.push(r.loadGeometries(A)), Promise.all(B).then(function(E) {
      const C = E.slice(0, E.length - 1), R = E[E.length - 1], T = [];
      for (let O = 0, U = R.length; O < U; O++) {
        const V = R[O], P = A[O];
        let G;
        const N = C[O];
        if (P.mode === gu.TRIANGLES || P.mode === gu.TRIANGLE_STRIP || P.mode === gu.TRIANGLE_FAN || P.mode === void 0)
          G = v.isSkinnedMesh === !0 ? new MS(V, N) : new _h(V, N), G.isSkinnedMesh === !0 && G.normalizeSkinWeights(), P.mode === gu.TRIANGLE_STRIP ? G.geometry = GE(G.geometry, XE) : P.mode === gu.TRIANGLE_FAN && (G.geometry = GE(G.geometry, ly));
        else if (P.mode === gu.LINES)
          G = new bS(V, N);
        else if (P.mode === gu.LINE_STRIP)
          G = new DS(V, N);
        else if (P.mode === gu.LINE_LOOP)
          G = new _S(V, N);
        else if (P.mode === gu.POINTS)
          G = new HS(V, N);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + P.mode);
        Object.keys(G.geometry.morphAttributes).length > 0 && Cg(G, v), G.name = r.createUniqueName(v.name || "mesh_" + u), As(G, v), P.extensions && Eo(p, G, P), r.assignFinalMaterial(G), T.push(G);
      }
      for (let O = 0, U = T.length; O < U; O++)
        r.associations.set(T[O], {
          meshes: u,
          primitives: O
        });
      if (T.length === 1)
        return v.extensions && Eo(p, T[0], v), T[0];
      const M = new Nv();
      v.extensions && Eo(p, M, v), r.associations.set(M, { meshes: u });
      for (let O = 0, U = T.length; O < U; O++)
        M.add(T[O]);
      return M;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(u) {
    let r;
    const f = this.json.cameras[u], p = f[f.type];
    if (!p) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return f.type === "perspective" ? r = new vh(
      OS.radToDeg(p.yfov),
      p.aspectRatio || 1,
      p.znear || 1,
      p.zfar || 2e6
    ) : f.type === "orthographic" && (r = new bm(-p.xmag, p.xmag, p.ymag, -p.ymag, p.znear, p.zfar)), f.name && (r.name = this.createUniqueName(f.name)), As(r, f), Promise.resolve(r);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(u) {
    const r = this.json.skins[u], f = [];
    for (let p = 0, v = r.joints.length; p < v; p++)
      f.push(this._loadNodeShallow(r.joints[p]));
    return r.inverseBindMatrices !== void 0 ? f.push(this.getDependency("accessor", r.inverseBindMatrices)) : f.push(null), Promise.all(f).then(function(p) {
      const v = p.pop(), A = p, B = [], E = [];
      for (let C = 0, R = A.length; C < R; C++) {
        const T = A[C];
        if (T) {
          B.push(T);
          const M = new Sh();
          v !== null && M.fromArray(v.array, C * 16), E.push(M);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', r.joints[C]);
      }
      return new US(B, E);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(u) {
    const r = this.json, f = this, p = r.animations[u], v = p.name ? p.name : "animation_" + u, A = [], B = [], E = [], C = [], R = [];
    for (let T = 0, M = p.channels.length; T < M; T++) {
      const O = p.channels[T], U = p.samplers[O.sampler], V = O.target, P = V.node, G = p.parameters !== void 0 ? p.parameters[U.input] : U.input, N = p.parameters !== void 0 ? p.parameters[U.output] : U.output;
      V.node !== void 0 && (A.push(this.getDependency("node", P)), B.push(this.getDependency("accessor", G)), E.push(this.getDependency("accessor", N)), C.push(U), R.push(V));
    }
    return Promise.all([
      Promise.all(A),
      Promise.all(B),
      Promise.all(E),
      Promise.all(C),
      Promise.all(R)
    ]).then(function(T) {
      const M = T[0], O = T[1], U = T[2], V = T[3], P = T[4], G = [];
      for (let N = 0, $ = M.length; N < $; N++) {
        const Z = M[N], ce = O[N], W = U[N], Ce = V[N], ne = P[N];
        if (Z === void 0)
          continue;
        Z.updateMatrix && Z.updateMatrix();
        const se = f._createAnimationTracks(Z, ce, W, Ce, ne);
        if (se)
          for (let fe = 0; fe < se.length; fe++)
            G.push(se[fe]);
      }
      return new NS(v, void 0, G);
    });
  }
  createNodeMesh(u) {
    const r = this.json, f = this, p = r.nodes[u];
    return p.mesh === void 0 ? null : f.getDependency("mesh", p.mesh).then(function(v) {
      const A = f._getNodeRef(f.meshCache, p.mesh, v);
      return p.weights !== void 0 && A.traverse(function(B) {
        if (B.isMesh)
          for (let E = 0, C = p.weights.length; E < C; E++)
            B.morphTargetInfluences[E] = p.weights[E];
      }), A;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(u) {
    const r = this.json, f = this, p = r.nodes[u], v = f._loadNodeShallow(u), A = [], B = p.children || [];
    for (let C = 0, R = B.length; C < R; C++)
      A.push(f.getDependency("node", B[C]));
    const E = p.skin === void 0 ? Promise.resolve(null) : f.getDependency("skin", p.skin);
    return Promise.all([v, Promise.all(A), E]).then(function(C) {
      const R = C[0], T = C[1], M = C[2];
      M !== null && R.traverse(function(O) {
        O.isSkinnedMesh && O.bind(M, Mg);
      });
      for (let O = 0, U = T.length; O < U; O++)
        R.add(T[O]);
      return R;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(u) {
    const r = this.json, f = this.extensions, p = this;
    if (this.nodeCache[u] !== void 0)
      return this.nodeCache[u];
    const v = r.nodes[u], A = v.name ? p.createUniqueName(v.name) : "", B = [], E = p._invokeOne(function(C) {
      return C.createNodeMesh && C.createNodeMesh(u);
    });
    return E && B.push(E), v.camera !== void 0 && B.push(
      p.getDependency("camera", v.camera).then(function(C) {
        return p._getNodeRef(p.cameraCache, v.camera, C);
      })
    ), p._invokeAll(function(C) {
      return C.createNodeAttachment && C.createNodeAttachment(u);
    }).forEach(function(C) {
      B.push(C);
    }), this.nodeCache[u] = Promise.all(B).then(function(C) {
      let R;
      if (v.isBone === !0 ? R = new GS() : C.length > 1 ? R = new Nv() : C.length === 1 ? R = C[0] : R = new ZE(), R !== C[0])
        for (let T = 0, M = C.length; T < M; T++)
          R.add(C[T]);
      if (v.name && (R.userData.name = v.name, R.name = A), As(R, v), v.extensions && Eo(f, R, v), v.matrix !== void 0) {
        const T = new Sh();
        T.fromArray(v.matrix), R.applyMatrix4(T);
      } else
        v.translation !== void 0 && R.position.fromArray(v.translation), v.rotation !== void 0 && R.quaternion.fromArray(v.rotation), v.scale !== void 0 && R.scale.fromArray(v.scale);
      return p.associations.has(R) || p.associations.set(R, {}), p.associations.get(R).nodes = u, R;
    }), this.nodeCache[u];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(u) {
    const r = this.extensions, f = this.json.scenes[u], p = this, v = new Nv();
    f.name && (v.name = p.createUniqueName(f.name)), As(v, f), f.extensions && Eo(r, v, f);
    const A = f.nodes || [], B = [];
    for (let E = 0, C = A.length; E < C; E++)
      B.push(p.getDependency("node", A[E]));
    return Promise.all(B).then(function(E) {
      for (let R = 0, T = E.length; R < T; R++)
        v.add(E[R]);
      const C = (R) => {
        const T = /* @__PURE__ */ new Map();
        for (const [M, O] of p.associations)
          (M instanceof Uv || M instanceof vc) && T.set(M, O);
        return R.traverse((M) => {
          const O = p.associations.get(M);
          O != null && T.set(M, O);
        }), T;
      };
      return p.associations = C(v), v;
    });
  }
  _createAnimationTracks(u, r, f, p, v) {
    const A = [], B = u.name ? u.name : u.uuid, E = [];
    hc[v.path] === hc.weights ? u.traverse(function(M) {
      M.morphTargetInfluences && E.push(M.name ? M.name : M.uuid);
    }) : E.push(B);
    let C;
    switch (hc[v.path]) {
      case hc.weights:
        C = WA;
        break;
      case hc.rotation:
        C = kA;
        break;
      case hc.position:
      case hc.scale:
        C = PA;
        break;
      default:
        switch (f.itemSize) {
          case 1:
            C = WA;
            break;
          case 2:
          case 3:
          default:
            C = PA;
            break;
        }
        break;
    }
    const R = p.interpolation !== void 0 ? Sg[p.interpolation] : wE, T = this._getArrayFromAccessor(f);
    for (let M = 0, O = E.length; M < O; M++) {
      const U = new C(
        E[M] + "." + hc[v.path],
        r.array,
        T,
        R
      );
      p.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(U), A.push(U);
    }
    return A;
  }
  _getArrayFromAccessor(u) {
    let r = u.array;
    if (u.normalized) {
      const f = vy(r.constructor), p = new Float32Array(r.length);
      for (let v = 0, A = r.length; v < A; v++)
        p[v] = r[v] * f;
      r = p;
    }
    return r;
  }
  _createCubicSplineTrackInterpolant(u) {
    u.createInterpolant = function(f) {
      const p = this instanceof kA ? Eg : U0;
      return new p(this.times, this.values, this.getValueSize() / 3, f);
    }, u.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function Dg(d, u, r) {
  const f = u.attributes, p = new JS();
  if (f.POSITION !== void 0) {
    const B = r.json.accessors[f.POSITION], E = B.min, C = B.max;
    if (E !== void 0 && C !== void 0) {
      if (p.set(new Ma(E[0], E[1], E[2]), new Ma(C[0], C[1], C[2])), B.normalized) {
        const R = vy(Rf[B.componentType]);
        p.min.multiplyScalar(R), p.max.multiplyScalar(R);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const v = u.targets;
  if (v !== void 0) {
    const B = new Ma(), E = new Ma();
    for (let C = 0, R = v.length; C < R; C++) {
      const T = v[C];
      if (T.POSITION !== void 0) {
        const M = r.json.accessors[T.POSITION], O = M.min, U = M.max;
        if (O !== void 0 && U !== void 0) {
          if (E.setX(Math.max(Math.abs(O[0]), Math.abs(U[0]))), E.setY(Math.max(Math.abs(O[1]), Math.abs(U[1]))), E.setZ(Math.max(Math.abs(O[2]), Math.abs(U[2]))), M.normalized) {
            const V = vy(Rf[M.componentType]);
            E.multiplyScalar(V);
          }
          B.max(E);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    p.expandByVector(B);
  }
  d.boundingBox = p;
  const A = new KS();
  p.getCenter(A.center), A.radius = p.min.distanceTo(p.max) / 2, d.boundingSphere = A;
}
function QE(d, u, r) {
  const f = u.attributes, p = [];
  function v(A, B) {
    return r.getDependency("accessor", A).then(function(E) {
      d.setAttribute(B, E);
    });
  }
  for (const A in f) {
    const B = hy[A] || A.toLowerCase();
    B in d.attributes || p.push(v(f[A], B));
  }
  if (u.indices !== void 0 && !d.index) {
    const A = r.getDependency("accessor", u.indices).then(function(B) {
      d.setIndex(B);
    });
    p.push(A);
  }
  return As(d, u), Dg(d, u, r), Promise.all(p).then(function() {
    return u.targets !== void 0 ? gg(d, u.targets, r) : d;
  });
}
class _g extends PE {
  constructor(u) {
    super(u), this.type = Ru;
  }
  // adapted from http://www.graphics.cornell.edu/~bjw/rgbe.html
  parse(u) {
    const A = function(ne, se) {
      switch (ne) {
        case 1:
          throw new Error("THREE.RGBELoader: Read Error: " + (se || ""));
        case 2:
          throw new Error("THREE.RGBELoader: Write Error: " + (se || ""));
        case 3:
          throw new Error("THREE.RGBELoader: Bad File Format: " + (se || ""));
        default:
        case 4:
          throw new Error("THREE.RGBELoader: Memory Error: " + (se || ""));
      }
    }, R = `
`, T = function(ne, se, fe) {
      se = se || 1024;
      let Xe = ne.pos, ee = -1, Te = 0, Ve = "", D = String.fromCharCode.apply(null, new Uint16Array(ne.subarray(Xe, Xe + 128)));
      for (; 0 > (ee = D.indexOf(R)) && Te < se && Xe < ne.byteLength; )
        Ve += D, Te += D.length, Xe += 128, D += String.fromCharCode.apply(null, new Uint16Array(ne.subarray(Xe, Xe + 128)));
      return -1 < ee ? (ne.pos += Te + ee + 1, Ve + D.slice(0, ee)) : !1;
    }, M = function(ne) {
      const se = /^#\?(\S+)/, fe = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, He = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, Xe = /^\s*FORMAT=(\S+)\s*$/, ee = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, Te = {
        valid: 0,
        string: "",
        comments: "",
        programtype: "RGBE",
        format: "",
        gamma: 1,
        exposure: 1,
        width: 0,
        height: 0
      };
      let Ve, D;
      for ((ne.pos >= ne.byteLength || !(Ve = T(ne))) && A(1, "no header found"), (D = Ve.match(se)) || A(3, "bad initial token"), Te.valid |= 1, Te.programtype = D[1], Te.string += Ve + `
`; Ve = T(ne), Ve !== !1; ) {
        if (Te.string += Ve + `
`, Ve.charAt(0) === "#") {
          Te.comments += Ve + `
`;
          continue;
        }
        if ((D = Ve.match(fe)) && (Te.gamma = parseFloat(D[1])), (D = Ve.match(He)) && (Te.exposure = parseFloat(D[1])), (D = Ve.match(Xe)) && (Te.valid |= 2, Te.format = D[1]), (D = Ve.match(ee)) && (Te.valid |= 4, Te.height = parseInt(D[1], 10), Te.width = parseInt(D[2], 10)), Te.valid & 2 && Te.valid & 4)
          break;
      }
      return Te.valid & 2 || A(3, "missing format specifier"), Te.valid & 4 || A(3, "missing image size specifier"), Te;
    }, O = function(ne, se, fe) {
      const He = se;
      if (
        // run length encoding is not allowed so read flat
        He < 8 || He > 32767 || // this file is not run length encoded
        ne[0] !== 2 || ne[1] !== 2 || ne[2] & 128
      )
        return new Uint8Array(ne);
      He !== (ne[2] << 8 | ne[3]) && A(3, "wrong scanline width");
      const Xe = new Uint8Array(4 * se * fe);
      Xe.length || A(4, "unable to allocate buffer space");
      let ee = 0, Te = 0;
      const Ve = 4 * He, D = new Uint8Array(4), Q = new Uint8Array(Ve);
      let X = fe;
      for (; X > 0 && Te < ne.byteLength; ) {
        Te + 4 > ne.byteLength && A(1), D[0] = ne[Te++], D[1] = ne[Te++], D[2] = ne[Te++], D[3] = ne[Te++], (D[0] != 2 || D[1] != 2 || (D[2] << 8 | D[3]) != He) && A(3, "bad rgbe scanline format");
        let re = 0, x;
        for (; re < Ve && Te < ne.byteLength; ) {
          x = ne[Te++];
          const de = x > 128;
          if (de && (x -= 128), (x === 0 || re + x > Ve) && A(3, "bad scanline data"), de) {
            const Ke = ne[Te++];
            for (let Ne = 0; Ne < x; Ne++)
              Q[re++] = Ke;
          } else
            Q.set(ne.subarray(Te, Te + x), re), re += x, Te += x;
        }
        const me = He;
        for (let de = 0; de < me; de++) {
          let Ke = 0;
          Xe[ee] = Q[de + Ke], Ke += He, Xe[ee + 1] = Q[de + Ke], Ke += He, Xe[ee + 2] = Q[de + Ke], Ke += He, Xe[ee + 3] = Q[de + Ke], ee += 4;
        }
        X--;
      }
      return Xe;
    }, U = function(ne, se, fe, He) {
      const Xe = ne[se + 3], ee = Math.pow(2, Xe - 128) / 255;
      fe[He + 0] = ne[se + 0] * ee, fe[He + 1] = ne[se + 1] * ee, fe[He + 2] = ne[se + 2] * ee, fe[He + 3] = 1;
    }, V = function(ne, se, fe, He) {
      const Xe = ne[se + 3], ee = Math.pow(2, Xe - 128) / 255;
      fe[He + 0] = Tf.toHalfFloat(Math.min(ne[se + 0] * ee, 65504)), fe[He + 1] = Tf.toHalfFloat(Math.min(ne[se + 1] * ee, 65504)), fe[He + 2] = Tf.toHalfFloat(Math.min(ne[se + 2] * ee, 65504)), fe[He + 3] = Tf.toHalfFloat(1);
    }, P = new Uint8Array(u);
    P.pos = 0;
    const G = M(P), N = G.width, $ = G.height, Z = O(P.subarray(P.pos), N, $);
    let ce, W, Ce;
    switch (this.type) {
      case Ss:
        Ce = Z.length / 4;
        const ne = new Float32Array(Ce * 4);
        for (let fe = 0; fe < Ce; fe++)
          U(Z, fe * 4, ne, fe * 4);
        ce = ne, W = Ss;
        break;
      case Ru:
        Ce = Z.length / 4;
        const se = new Uint16Array(Ce * 4);
        for (let fe = 0; fe < Ce; fe++)
          V(Z, fe * 4, se, fe * 4);
        ce = se, W = Ru;
        break;
      default:
        throw new Error("THREE.RGBELoader: Unsupported type: " + this.type);
    }
    return {
      width: N,
      height: $,
      data: ce,
      header: G.string,
      gamma: G.gamma,
      exposure: G.exposure,
      type: W
    };
  }
  setDataType(u) {
    return this.type = u, this;
  }
  load(u, r, f, p) {
    function v(A, B) {
      switch (A.type) {
        case Ss:
        case Ru:
          "colorSpace" in A ? A.colorSpace = "srgb-linear" : A.encoding = 3e3, A.minFilter = Tu, A.magFilter = Tu, A.generateMipmaps = !1, A.flipY = !0;
          break;
      }
      r && r(A, B);
    }
    return super.load(u, v, f, p);
  }
}
const Rm = Ry >= 152;
class Hg extends PE {
  constructor(u) {
    super(u), this.type = Ru;
  }
  parse(u) {
    const se = Math.pow(2.7182818, 2.2);
    function fe(g, H) {
      for (var L = 0, k = 0; k < 65536; ++k)
        (k == 0 || g[k >> 3] & 1 << (k & 7)) && (H[L++] = k);
      for (var oe = L - 1; L < 65536; )
        H[L++] = 0;
      return oe;
    }
    function He(g) {
      for (var H = 0; H < 16384; H++)
        g[H] = {}, g[H].len = 0, g[H].lit = 0, g[H].p = null;
    }
    const Xe = { l: 0, c: 0, lc: 0 };
    function ee(g, H, L, k, oe) {
      for (; L < g; )
        H = H << 8 | Ua(k, oe), L += 8;
      L -= g, Xe.l = H >> L & (1 << g) - 1, Xe.c = H, Xe.lc = L;
    }
    const Te = new Array(59);
    function Ve(g) {
      for (var H = 0; H <= 58; ++H)
        Te[H] = 0;
      for (var H = 0; H < 65537; ++H)
        Te[g[H]] += 1;
      for (var L = 0, H = 58; H > 0; --H) {
        var k = L + Te[H] >> 1;
        Te[H] = L, L = k;
      }
      for (var H = 0; H < 65537; ++H) {
        var oe = g[H];
        oe > 0 && (g[H] = oe | Te[oe]++ << 6);
      }
    }
    function D(g, H, L, k, oe, ie, Me) {
      for (var ye = L, Se = 0, ve = 0; oe <= ie; oe++) {
        if (ye.value - L.value > k)
          return !1;
        ee(6, Se, ve, g, ye);
        var Ee = Xe.l;
        if (Se = Xe.c, ve = Xe.lc, Me[oe] = Ee, Ee == 63) {
          if (ye.value - L.value > k)
            throw "Something wrong with hufUnpackEncTable";
          ee(8, Se, ve, g, ye);
          var De = Xe.l + 6;
          if (Se = Xe.c, ve = Xe.lc, oe + De > ie + 1)
            throw "Something wrong with hufUnpackEncTable";
          for (; De--; )
            Me[oe++] = 0;
          oe--;
        } else if (Ee >= 59) {
          var De = Ee - 59 + 2;
          if (oe + De > ie + 1)
            throw "Something wrong with hufUnpackEncTable";
          for (; De--; )
            Me[oe++] = 0;
          oe--;
        }
      }
      Ve(Me);
    }
    function Q(g) {
      return g & 63;
    }
    function X(g) {
      return g >> 6;
    }
    function re(g, H, L, k) {
      for (; H <= L; H++) {
        var oe = X(g[H]), ie = Q(g[H]);
        if (oe >> ie)
          throw "Invalid table entry";
        if (ie > 14) {
          var Me = k[oe >> ie - 14];
          if (Me.len)
            throw "Invalid table entry";
          if (Me.lit++, Me.p) {
            var ye = Me.p;
            Me.p = new Array(Me.lit);
            for (var Se = 0; Se < Me.lit - 1; ++Se)
              Me.p[Se] = ye[Se];
          } else
            Me.p = new Array(1);
          Me.p[Me.lit - 1] = H;
        } else if (ie)
          for (var ve = 0, Se = 1 << 14 - ie; Se > 0; Se--) {
            var Me = k[(oe << 14 - ie) + ve];
            if (Me.len || Me.p)
              throw "Invalid table entry";
            Me.len = ie, Me.lit = H, ve++;
          }
      }
      return !0;
    }
    const x = { c: 0, lc: 0 };
    function me(g, H, L, k) {
      g = g << 8 | Ua(L, k), H += 8, x.c = g, x.lc = H;
    }
    const de = { c: 0, lc: 0 };
    function Ke(g, H, L, k, oe, ie, Me, ye, Se, ve) {
      if (g == H) {
        k < 8 && (me(L, k, oe, Me), L = x.c, k = x.lc), k -= 8;
        var Ee = L >> k, Ee = new Uint8Array([Ee])[0];
        if (Se.value + Ee > ve)
          return !1;
        for (var De = ye[Se.value - 1]; Ee-- > 0; )
          ye[Se.value++] = De;
      } else if (Se.value < ve)
        ye[Se.value++] = g;
      else
        return !1;
      de.c = L, de.lc = k;
    }
    function Ne(g) {
      return g & 65535;
    }
    function Ie(g) {
      var H = Ne(g);
      return H > 32767 ? H - 65536 : H;
    }
    const tt = { a: 0, b: 0 };
    function $t(g, H) {
      var L = Ie(g), k = Ie(H), oe = k, ie = L + (oe & 1) + (oe >> 1), Me = ie, ye = ie - oe;
      tt.a = Me, tt.b = ye;
    }
    function vt(g, H) {
      var L = Ne(g), k = Ne(H), oe = L - (k >> 1) & 65535, ie = k + oe - 32768 & 65535;
      tt.a = ie, tt.b = oe;
    }
    function bn(g, H, L, k, oe, ie, Me) {
      for (var ye = Me < 16384, Se = L > oe ? oe : L, ve = 1, Ee; ve <= Se; )
        ve <<= 1;
      for (ve >>= 1, Ee = ve, ve >>= 1; ve >= 1; ) {
        for (var De = 0, Nt = De + ie * (oe - Ee), xe = ie * ve, Ye = ie * Ee, we = k * ve, at = k * Ee, Mt, Gt, Ht, Vt; De <= Nt; De += Ye) {
          for (var bt = De, sa = De + k * (L - Ee); bt <= sa; bt += at) {
            var Bt = bt + we, ca = bt + xe, ol = ca + we;
            ye ? ($t(g[bt + H], g[ca + H]), Mt = tt.a, Ht = tt.b, $t(g[Bt + H], g[ol + H]), Gt = tt.a, Vt = tt.b, $t(Mt, Gt), g[bt + H] = tt.a, g[Bt + H] = tt.b, $t(Ht, Vt), g[ca + H] = tt.a, g[ol + H] = tt.b) : (vt(g[bt + H], g[ca + H]), Mt = tt.a, Ht = tt.b, vt(g[Bt + H], g[ol + H]), Gt = tt.a, Vt = tt.b, vt(Mt, Gt), g[bt + H] = tt.a, g[Bt + H] = tt.b, vt(Ht, Vt), g[ca + H] = tt.a, g[ol + H] = tt.b);
          }
          if (L & ve) {
            var ca = bt + xe;
            ye ? $t(g[bt + H], g[ca + H]) : vt(g[bt + H], g[ca + H]), Mt = tt.a, g[ca + H] = tt.b, g[bt + H] = Mt;
          }
        }
        if (oe & ve)
          for (var bt = De, sa = De + k * (L - Ee); bt <= sa; bt += at) {
            var Bt = bt + we;
            ye ? $t(g[bt + H], g[Bt + H]) : vt(g[bt + H], g[Bt + H]), Mt = tt.a, g[Bt + H] = tt.b, g[bt + H] = Mt;
          }
        Ee = ve, ve >>= 1;
      }
      return De;
    }
    function Tl(g, H, L, k, oe, ie, Me, ye, Se, ve) {
      for (var Ee = 0, De = 0, Nt = ye, xe = Math.trunc(oe.value + (ie + 7) / 8); oe.value < xe; )
        for (me(Ee, De, L, oe), Ee = x.c, De = x.lc; De >= 14; ) {
          var Ye = Ee >> De - 14 & 16383, we = H[Ye];
          if (we.len)
            De -= we.len, Ke(we.lit, Me, Ee, De, L, k, oe, Se, ve, Nt), Ee = de.c, De = de.lc;
          else {
            if (!we.p)
              throw "hufDecode issues";
            var at;
            for (at = 0; at < we.lit; at++) {
              for (var Mt = Q(g[we.p[at]]); De < Mt && oe.value < xe; )
                me(Ee, De, L, oe), Ee = x.c, De = x.lc;
              if (De >= Mt && X(g[we.p[at]]) == (Ee >> De - Mt & (1 << Mt) - 1)) {
                De -= Mt, Ke(
                  we.p[at],
                  Me,
                  Ee,
                  De,
                  L,
                  k,
                  oe,
                  Se,
                  ve,
                  Nt
                ), Ee = de.c, De = de.lc;
                break;
              }
            }
            if (at == we.lit)
              throw "hufDecode issues";
          }
        }
      var Gt = 8 - ie & 7;
      for (Ee >>= Gt, De -= Gt; De > 0; ) {
        var we = H[Ee << 14 - De & 16383];
        if (we.len)
          De -= we.len, Ke(we.lit, Me, Ee, De, L, k, oe, Se, ve, Nt), Ee = de.c, De = de.lc;
        else
          throw "hufDecode issues";
      }
      return !0;
    }
    function Dn(g, H, L, k, oe, ie) {
      var Me = { value: 0 }, ye = L.value, Se = Jt(H, L), ve = Jt(H, L);
      L.value += 4;
      var Ee = Jt(H, L);
      if (L.value += 4, Se < 0 || Se >= 65537 || ve < 0 || ve >= 65537)
        throw "Something wrong with HUF_ENCSIZE";
      var De = new Array(65537), Nt = new Array(16384);
      He(Nt);
      var xe = k - (L.value - ye);
      if (D(g, H, L, xe, Se, ve, De), Ee > 8 * (k - (L.value - ye)))
        throw "Something wrong with hufUncompress";
      re(De, Se, ve, Nt), Tl(De, Nt, g, H, L, Ee, ve, ie, oe, Me);
    }
    function _n(g, H, L) {
      for (var k = 0; k < L; ++k)
        H[k] = g[H[k]];
    }
    function Rl(g) {
      for (var H = 1; H < g.length; H++) {
        var L = g[H - 1] + g[H] - 128;
        g[H] = L;
      }
    }
    function Ml(g, H) {
      for (var L = 0, k = Math.floor((g.length + 1) / 2), oe = 0, ie = g.length - 1; !(oe > ie || (H[oe++] = g[L++], oe > ie)); )
        H[oe++] = g[k++];
    }
    function Vl(g) {
      for (var H = g.byteLength, L = new Array(), k = 0, oe = new DataView(g); H > 0; ) {
        var ie = oe.getInt8(k++);
        if (ie < 0) {
          var Me = -ie;
          H -= Me + 1;
          for (var ye = 0; ye < Me; ye++)
            L.push(oe.getUint8(k++));
        } else {
          var Me = ie;
          H -= 2;
          for (var Se = oe.getUint8(k++), ye = 0; ye < Me + 1; ye++)
            L.push(Se);
        }
      }
      return L;
    }
    function ni(g, H, L, k, oe, ie) {
      var Bt = new DataView(ie.buffer), Me = L[g.idx[0]].width, ye = L[g.idx[0]].height, Se = 3, ve = Math.floor(Me / 8), Ee = Math.ceil(Me / 8), De = Math.ceil(ye / 8), Nt = Me - (Ee - 1) * 8, xe = ye - (De - 1) * 8, Ye = { value: 0 }, we = new Array(Se), at = new Array(Se), Mt = new Array(Se), Gt = new Array(Se), Ht = new Array(Se);
      for (let Dt = 0; Dt < Se; ++Dt)
        Ht[Dt] = H[g.idx[Dt]], we[Dt] = Dt < 1 ? 0 : we[Dt - 1] + Ee * De, at[Dt] = new Float32Array(64), Mt[Dt] = new Uint16Array(64), Gt[Dt] = new Uint16Array(Ee * 64);
      for (let Dt = 0; Dt < De; ++Dt) {
        var Vt = 8;
        Dt == De - 1 && (Vt = xe);
        var bt = 8;
        for (let xt = 0; xt < Ee; ++xt) {
          xt == Ee - 1 && (bt = Nt);
          for (let _t = 0; _t < Se; ++_t)
            Mt[_t].fill(0), Mt[_t][0] = oe[we[_t]++], Hn(Ye, k, Mt[_t]), li(Mt[_t], at[_t]), Mu(at[_t]);
          On(at);
          for (let _t = 0; _t < Se; ++_t)
            gt(at[_t], Gt[_t], xt * 64);
        }
        let pa = 0;
        for (let xt = 0; xt < Se; ++xt) {
          const _t = L[g.idx[xt]].type;
          for (let ln = 8 * Dt; ln < 8 * Dt + Vt; ++ln) {
            pa = Ht[xt][ln];
            for (let Fl = 0; Fl < ve; ++Fl) {
              const Na = Fl * 64 + (ln & 7) * 8;
              Bt.setUint16(pa + 0 * 2 * _t, Gt[xt][Na + 0], !0), Bt.setUint16(pa + 1 * 2 * _t, Gt[xt][Na + 1], !0), Bt.setUint16(pa + 2 * 2 * _t, Gt[xt][Na + 2], !0), Bt.setUint16(pa + 3 * 2 * _t, Gt[xt][Na + 3], !0), Bt.setUint16(pa + 4 * 2 * _t, Gt[xt][Na + 4], !0), Bt.setUint16(pa + 5 * 2 * _t, Gt[xt][Na + 5], !0), Bt.setUint16(pa + 6 * 2 * _t, Gt[xt][Na + 6], !0), Bt.setUint16(pa + 7 * 2 * _t, Gt[xt][Na + 7], !0), pa += 8 * 2 * _t;
            }
          }
          if (ve != Ee)
            for (let ln = 8 * Dt; ln < 8 * Dt + Vt; ++ln) {
              const Fl = Ht[xt][ln] + 8 * ve * 2 * _t, Na = ve * 64 + (ln & 7) * 8;
              for (let rl = 0; rl < bt; ++rl)
                Bt.setUint16(Fl + rl * 2 * _t, Gt[xt][Na + rl], !0);
            }
        }
      }
      for (var sa = new Uint16Array(Me), Bt = new DataView(ie.buffer), ca = 0; ca < Se; ++ca) {
        L[g.idx[ca]].decoded = !0;
        var ol = L[g.idx[ca]].type;
        if (L[ca].type == 2)
          for (var Ou = 0; Ou < ye; ++Ou) {
            const Dt = Ht[ca][Ou];
            for (var nn = 0; nn < Me; ++nn)
              sa[nn] = Bt.getUint16(Dt + nn * 2 * ol, !0);
            for (var nn = 0; nn < Me; ++nn)
              Bt.setFloat32(Dt + nn * 2 * ol, be(sa[nn]), !0);
          }
      }
    }
    function Hn(g, H, L) {
      for (var k, oe = 1; oe < 64; )
        k = H[g.value], k == 65280 ? oe = 64 : k >> 8 == 255 ? oe += k & 255 : (L[oe] = k, oe++), g.value++;
    }
    function li(g, H) {
      H[0] = be(g[0]), H[1] = be(g[1]), H[2] = be(g[5]), H[3] = be(g[6]), H[4] = be(g[14]), H[5] = be(g[15]), H[6] = be(g[27]), H[7] = be(g[28]), H[8] = be(g[2]), H[9] = be(g[4]), H[10] = be(g[7]), H[11] = be(g[13]), H[12] = be(g[16]), H[13] = be(g[26]), H[14] = be(g[29]), H[15] = be(g[42]), H[16] = be(g[3]), H[17] = be(g[8]), H[18] = be(g[12]), H[19] = be(g[17]), H[20] = be(g[25]), H[21] = be(g[30]), H[22] = be(g[41]), H[23] = be(g[43]), H[24] = be(g[9]), H[25] = be(g[11]), H[26] = be(g[18]), H[27] = be(g[24]), H[28] = be(g[31]), H[29] = be(g[40]), H[30] = be(g[44]), H[31] = be(g[53]), H[32] = be(g[10]), H[33] = be(g[19]), H[34] = be(g[23]), H[35] = be(g[32]), H[36] = be(g[39]), H[37] = be(g[45]), H[38] = be(g[52]), H[39] = be(g[54]), H[40] = be(g[20]), H[41] = be(g[22]), H[42] = be(g[33]), H[43] = be(g[38]), H[44] = be(g[46]), H[45] = be(g[51]), H[46] = be(g[55]), H[47] = be(g[60]), H[48] = be(g[21]), H[49] = be(g[34]), H[50] = be(g[37]), H[51] = be(g[47]), H[52] = be(g[50]), H[53] = be(g[56]), H[54] = be(g[59]), H[55] = be(g[61]), H[56] = be(g[35]), H[57] = be(g[36]), H[58] = be(g[48]), H[59] = be(g[49]), H[60] = be(g[57]), H[61] = be(g[58]), H[62] = be(g[62]), H[63] = be(g[63]);
    }
    function Mu(g) {
      const H = 0.5 * Math.cos(0.7853975), L = 0.5 * Math.cos(3.14159 / 16), k = 0.5 * Math.cos(3.14159 / 8), oe = 0.5 * Math.cos(3 * 3.14159 / 16), ie = 0.5 * Math.cos(5 * 3.14159 / 16), Me = 0.5 * Math.cos(3 * 3.14159 / 8), ye = 0.5 * Math.cos(7 * 3.14159 / 16);
      for (var Se = new Array(4), ve = new Array(4), Ee = new Array(4), De = new Array(4), Nt = 0; Nt < 8; ++Nt) {
        var xe = Nt * 8;
        Se[0] = k * g[xe + 2], Se[1] = Me * g[xe + 2], Se[2] = k * g[xe + 6], Se[3] = Me * g[xe + 6], ve[0] = L * g[xe + 1] + oe * g[xe + 3] + ie * g[xe + 5] + ye * g[xe + 7], ve[1] = oe * g[xe + 1] - ye * g[xe + 3] - L * g[xe + 5] - ie * g[xe + 7], ve[2] = ie * g[xe + 1] - L * g[xe + 3] + ye * g[xe + 5] + oe * g[xe + 7], ve[3] = ye * g[xe + 1] - ie * g[xe + 3] + oe * g[xe + 5] - L * g[xe + 7], Ee[0] = H * (g[xe + 0] + g[xe + 4]), Ee[3] = H * (g[xe + 0] - g[xe + 4]), Ee[1] = Se[0] + Se[3], Ee[2] = Se[1] - Se[2], De[0] = Ee[0] + Ee[1], De[1] = Ee[3] + Ee[2], De[2] = Ee[3] - Ee[2], De[3] = Ee[0] - Ee[1], g[xe + 0] = De[0] + ve[0], g[xe + 1] = De[1] + ve[1], g[xe + 2] = De[2] + ve[2], g[xe + 3] = De[3] + ve[3], g[xe + 4] = De[3] - ve[3], g[xe + 5] = De[2] - ve[2], g[xe + 6] = De[1] - ve[1], g[xe + 7] = De[0] - ve[0];
      }
      for (var Ye = 0; Ye < 8; ++Ye)
        Se[0] = k * g[16 + Ye], Se[1] = Me * g[16 + Ye], Se[2] = k * g[48 + Ye], Se[3] = Me * g[48 + Ye], ve[0] = L * g[8 + Ye] + oe * g[24 + Ye] + ie * g[40 + Ye] + ye * g[56 + Ye], ve[1] = oe * g[8 + Ye] - ye * g[24 + Ye] - L * g[40 + Ye] - ie * g[56 + Ye], ve[2] = ie * g[8 + Ye] - L * g[24 + Ye] + ye * g[40 + Ye] + oe * g[56 + Ye], ve[3] = ye * g[8 + Ye] - ie * g[24 + Ye] + oe * g[40 + Ye] - L * g[56 + Ye], Ee[0] = H * (g[Ye] + g[32 + Ye]), Ee[3] = H * (g[Ye] - g[32 + Ye]), Ee[1] = Se[0] + Se[3], Ee[2] = Se[1] - Se[2], De[0] = Ee[0] + Ee[1], De[1] = Ee[3] + Ee[2], De[2] = Ee[3] - Ee[2], De[3] = Ee[0] - Ee[1], g[0 + Ye] = De[0] + ve[0], g[8 + Ye] = De[1] + ve[1], g[16 + Ye] = De[2] + ve[2], g[24 + Ye] = De[3] + ve[3], g[32 + Ye] = De[3] - ve[3], g[40 + Ye] = De[2] - ve[2], g[48 + Ye] = De[1] - ve[1], g[56 + Ye] = De[0] - ve[0];
    }
    function On(g) {
      for (var H = 0; H < 64; ++H) {
        var L = g[0][H], k = g[1][H], oe = g[2][H];
        g[0][H] = L + 1.5747 * oe, g[1][H] = L - 0.1873 * k - 0.4682 * oe, g[2][H] = L + 1.8556 * k;
      }
    }
    function gt(g, H, L) {
      for (var k = 0; k < 64; ++k)
        H[L + k] = Tf.toHalfFloat(Cs(g[k]));
    }
    function Cs(g) {
      return g <= 1 ? Math.sign(g) * Math.pow(Math.abs(g), 2.2) : Math.sign(g) * Math.pow(se, Math.abs(g) - 1);
    }
    function Zl(g) {
      return new DataView(g.array.buffer, g.offset.value, g.size);
    }
    function Un(g) {
      var H = g.viewer.buffer.slice(g.offset.value, g.offset.value + g.size), L = new Uint8Array(Vl(H)), k = new Uint8Array(L.length);
      return Rl(L), Ml(L, k), new DataView(k.buffer);
    }
    function Qn(g) {
      var H = g.array.slice(g.offset.value, g.offset.value + g.size), L = fh(H), k = new Uint8Array(L.length);
      return Rl(L), Ml(L, k), new DataView(k.buffer);
    }
    function Ts(g) {
      for (var H = g.viewer, L = { value: g.offset.value }, k = new Uint16Array(g.width * g.scanlineBlockSize * (g.channels * g.type)), oe = new Uint8Array(8192), ie = 0, Me = new Array(g.channels), ye = 0; ye < g.channels; ye++)
        Me[ye] = {}, Me[ye].start = ie, Me[ye].end = Me[ye].start, Me[ye].nx = g.width, Me[ye].ny = g.lines, Me[ye].size = g.type, ie += Me[ye].nx * Me[ye].ny * Me[ye].size;
      var Se = aa(H, L), ve = aa(H, L);
      if (ve >= 8192)
        throw "Something is wrong with PIZ_COMPRESSION BITMAP_SIZE";
      if (Se <= ve)
        for (var ye = 0; ye < ve - Se + 1; ye++)
          oe[ye + Se] = Y(H, L);
      var Ee = new Uint16Array(65536), De = fe(oe, Ee), Nt = Jt(H, L);
      Dn(g.array, H, L, Nt, k, ie);
      for (var ye = 0; ye < g.channels; ++ye)
        for (var xe = Me[ye], Ye = 0; Ye < Me[ye].size; ++Ye)
          bn(k, xe.start + Ye, xe.nx, xe.size, xe.ny, xe.nx * xe.size, De);
      _n(Ee, k, ie);
      for (var we = 0, at = new Uint8Array(k.buffer.byteLength), Mt = 0; Mt < g.lines; Mt++)
        for (var Gt = 0; Gt < g.channels; Gt++) {
          var xe = Me[Gt], Ht = xe.nx * xe.size, Vt = new Uint8Array(k.buffer, xe.end * 2, Ht * 2);
          at.set(Vt, we), we += Ht * 2, xe.end += Ht;
        }
      return new DataView(at.buffer);
    }
    function bu(g) {
      var H = g.array.slice(g.offset.value, g.offset.value + g.size), L = fh(H);
      const k = g.lines * g.channels * g.width, oe = g.type == 1 ? new Uint16Array(k) : new Uint32Array(k);
      let ie = 0, Me = 0;
      const ye = new Array(4);
      for (let Se = 0; Se < g.lines; Se++)
        for (let ve = 0; ve < g.channels; ve++) {
          let Ee = 0;
          switch (g.type) {
            case 1:
              ye[0] = ie, ye[1] = ye[0] + g.width, ie = ye[1] + g.width;
              for (let De = 0; De < g.width; ++De) {
                const Nt = L[ye[0]++] << 8 | L[ye[1]++];
                Ee += Nt, oe[Me] = Ee, Me++;
              }
              break;
            case 2:
              ye[0] = ie, ye[1] = ye[0] + g.width, ye[2] = ye[1] + g.width, ie = ye[2] + g.width;
              for (let De = 0; De < g.width; ++De) {
                const Nt = L[ye[0]++] << 24 | L[ye[1]++] << 16 | L[ye[2]++] << 8;
                Ee += Nt, oe[Me] = Ee, Me++;
              }
              break;
          }
        }
      return new DataView(oe.buffer);
    }
    function il(g) {
      var H = g.viewer, L = { value: g.offset.value }, k = new Uint8Array(g.width * g.lines * (g.channels * g.type * 2)), oe = {
        version: Ae(H, L),
        unknownUncompressedSize: Ae(H, L),
        unknownCompressedSize: Ae(H, L),
        acCompressedSize: Ae(H, L),
        dcCompressedSize: Ae(H, L),
        rleCompressedSize: Ae(H, L),
        rleUncompressedSize: Ae(H, L),
        rleRawSize: Ae(H, L),
        totalAcUncompressedCount: Ae(H, L),
        totalDcUncompressedCount: Ae(H, L),
        acCompression: Ae(H, L)
      };
      if (oe.version < 2)
        throw "EXRLoader.parse: " + an.compression + " version " + oe.version + " is unsupported";
      for (var ie = new Array(), Me = aa(H, L) - 2; Me > 0; ) {
        var ye = Du(H.buffer, L), Se = Y(H, L), ve = Se >> 2 & 3, Ee = (Se >> 4) - 1, De = new Int8Array([Ee])[0], Nt = Y(H, L);
        ie.push({
          name: ye,
          index: De,
          type: Nt,
          compression: ve
        }), Me -= ye.length + 3;
      }
      for (var xe = an.channels, Ye = new Array(g.channels), we = 0; we < g.channels; ++we) {
        var at = Ye[we] = {}, Mt = xe[we];
        at.name = Mt.name, at.compression = 0, at.decoded = !1, at.type = Mt.pixelType, at.pLinear = Mt.pLinear, at.width = g.width, at.height = g.lines;
      }
      for (var Gt = {
        idx: new Array(3)
      }, Ht = 0; Ht < g.channels; ++Ht)
        for (var at = Ye[Ht], we = 0; we < ie.length; ++we) {
          var Vt = ie[we];
          at.name == Vt.name && (at.compression = Vt.compression, Vt.index >= 0 && (Gt.idx[Vt.index] = Ht), at.offset = Ht);
        }
      if (oe.acCompressedSize > 0)
        switch (oe.acCompression) {
          case 0:
            var Bt = new Uint16Array(oe.totalAcUncompressedCount);
            Dn(
              g.array,
              H,
              L,
              oe.acCompressedSize,
              Bt,
              oe.totalAcUncompressedCount
            );
            break;
          case 1:
            var bt = g.array.slice(L.value, L.value + oe.totalAcUncompressedCount), sa = fh(bt), Bt = new Uint16Array(sa.buffer);
            L.value += oe.totalAcUncompressedCount;
            break;
        }
      if (oe.dcCompressedSize > 0) {
        var ca = {
          array: g.array,
          offset: L,
          size: oe.dcCompressedSize
        }, ol = new Uint16Array(Qn(ca).buffer);
        L.value += oe.dcCompressedSize;
      }
      if (oe.rleRawSize > 0) {
        var bt = g.array.slice(L.value, L.value + oe.rleCompressedSize), sa = fh(bt), Ou = Vl(sa.buffer);
        L.value += oe.rleCompressedSize;
      }
      for (var nn = 0, Dt = new Array(Ye.length), we = 0; we < Dt.length; ++we)
        Dt[we] = new Array();
      for (var pa = 0; pa < g.lines; ++pa)
        for (var xt = 0; xt < Ye.length; ++xt)
          Dt[xt].push(nn), nn += Ye[xt].width * g.type * 2;
      ni(Gt, Dt, Ye, Bt, ol, k);
      for (var we = 0; we < Ye.length; ++we) {
        var at = Ye[we];
        if (!at.decoded)
          switch (at.compression) {
            case 2:
              for (var _t = 0, ln = 0, pa = 0; pa < g.lines; ++pa) {
                for (var Fl = Dt[we][_t], Na = 0; Na < at.width; ++Na) {
                  for (var rl = 0; rl < 2 * at.type; ++rl)
                    k[Fl++] = Ou[ln + rl * at.width * at.height];
                  ln++;
                }
                _t++;
              }
              break;
            case 1:
            default:
              throw "EXRLoader.parse: unsupported channel compression";
          }
      }
      return new DataView(k.buffer);
    }
    function Du(g, H) {
      for (var L = new Uint8Array(g), k = 0; L[H.value + k] != 0; )
        k += 1;
      var oe = new TextDecoder().decode(L.slice(H.value, H.value + k));
      return H.value = H.value + k + 1, oe;
    }
    function Ya(g, H, L) {
      var k = new TextDecoder().decode(new Uint8Array(g).slice(H.value, H.value + L));
      return H.value = H.value + L, k;
    }
    function Nn(g, H) {
      var L = Oa(g, H), k = Jt(g, H);
      return [L, k];
    }
    function ui(g, H) {
      var L = Jt(g, H), k = Jt(g, H);
      return [L, k];
    }
    function Oa(g, H) {
      var L = g.getInt32(H.value, !0);
      return H.value = H.value + 4, L;
    }
    function Jt(g, H) {
      var L = g.getUint32(H.value, !0);
      return H.value = H.value + 4, L;
    }
    function Ua(g, H) {
      var L = g[H.value];
      return H.value = H.value + 1, L;
    }
    function Y(g, H) {
      var L = g.getUint8(H.value);
      return H.value = H.value + 1, L;
    }
    const Ae = function(g, H) {
      let L;
      return "getBigInt64" in DataView.prototype ? L = Number(g.getBigInt64(H.value, !0)) : L = g.getUint32(H.value + 4, !0) + Number(g.getUint32(H.value, !0) << 32), H.value += 8, L;
    };
    function ze(g, H) {
      var L = g.getFloat32(H.value, !0);
      return H.value += 4, L;
    }
    function et(g, H) {
      return Tf.toHalfFloat(ze(g, H));
    }
    function be(g) {
      var H = (g & 31744) >> 10, L = g & 1023;
      return (g >> 15 ? -1 : 1) * (H ? H === 31 ? L ? NaN : 1 / 0 : Math.pow(2, H - 15) * (1 + L / 1024) : 6103515625e-14 * (L / 1024));
    }
    function aa(g, H) {
      var L = g.getUint16(H.value, !0);
      return H.value += 2, L;
    }
    function Gn(g, H) {
      return be(aa(g, H));
    }
    function ba(g, H, L, k) {
      for (var oe = L.value, ie = []; L.value < oe + k - 1; ) {
        var Me = Du(H, L), ye = Oa(g, L), Se = Y(g, L);
        L.value += 3;
        var ve = Oa(g, L), Ee = Oa(g, L);
        ie.push({
          name: Me,
          pixelType: ye,
          pLinear: Se,
          xSampling: ve,
          ySampling: Ee
        });
      }
      return L.value += 1, ie;
    }
    function sl(g, H) {
      var L = ze(g, H), k = ze(g, H), oe = ze(g, H), ie = ze(g, H), Me = ze(g, H), ye = ze(g, H), Se = ze(g, H), ve = ze(g, H);
      return {
        redX: L,
        redY: k,
        greenX: oe,
        greenY: ie,
        blueX: Me,
        blueY: ye,
        whiteX: Se,
        whiteY: ve
      };
    }
    function ya(g, H) {
      var L = [
        "NO_COMPRESSION",
        "RLE_COMPRESSION",
        "ZIPS_COMPRESSION",
        "ZIP_COMPRESSION",
        "PIZ_COMPRESSION",
        "PXR24_COMPRESSION",
        "B44_COMPRESSION",
        "B44A_COMPRESSION",
        "DWAA_COMPRESSION",
        "DWAB_COMPRESSION"
      ], k = Y(g, H);
      return L[k];
    }
    function Xa(g, H) {
      var L = Jt(g, H), k = Jt(g, H), oe = Jt(g, H), ie = Jt(g, H);
      return { xMin: L, yMin: k, xMax: oe, yMax: ie };
    }
    function Va(g, H) {
      var L = ["INCREASING_Y"], k = Y(g, H);
      return L[k];
    }
    function pn(g, H) {
      var L = ze(g, H), k = ze(g, H);
      return [L, k];
    }
    function cl(g, H) {
      var L = ze(g, H), k = ze(g, H), oe = ze(g, H);
      return [L, k, oe];
    }
    function Yn(g, H, L, k, oe) {
      if (k === "string" || k === "stringvector" || k === "iccProfile")
        return Ya(H, L, oe);
      if (k === "chlist")
        return ba(g, H, L, oe);
      if (k === "chromaticities")
        return sl(g, L);
      if (k === "compression")
        return ya(g, L);
      if (k === "box2i")
        return Xa(g, L);
      if (k === "lineOrder")
        return Va(g, L);
      if (k === "float")
        return ze(g, L);
      if (k === "v2f")
        return pn(g, L);
      if (k === "v3f")
        return cl(g, L);
      if (k === "int")
        return Oa(g, L);
      if (k === "rational")
        return Nn(g, L);
      if (k === "timecode")
        return ui(g, L);
      if (k === "preview")
        return L.value += oe, "skipped";
      L.value += oe;
    }
    function _u(g, H, L) {
      const k = {};
      if (g.getUint32(0, !0) != 20000630)
        throw "THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.";
      k.version = g.getUint8(4);
      const oe = g.getUint8(5);
      k.spec = {
        singleTile: !!(oe & 2),
        longName: !!(oe & 4),
        deepFormat: !!(oe & 8),
        multiPart: !!(oe & 16)
      }, L.value = 8;
      for (var ie = !0; ie; ) {
        var Me = Du(H, L);
        if (Me == 0)
          ie = !1;
        else {
          var ye = Du(H, L), Se = Jt(g, L), ve = Yn(g, H, L, ye, Se);
          ve === void 0 ? console.warn(`EXRLoader.parse: skipped unknown header attribute type '${ye}'.`) : k[Me] = ve;
        }
      }
      if ((oe & -5) != 0)
        throw console.error("EXRHeader:", k), "THREE.EXRLoader: provided file is currently unsupported.";
      return k;
    }
    function Ji(g, H, L, k, oe) {
      const ie = {
        size: 0,
        viewer: H,
        array: L,
        offset: k,
        width: g.dataWindow.xMax - g.dataWindow.xMin + 1,
        height: g.dataWindow.yMax - g.dataWindow.yMin + 1,
        channels: g.channels.length,
        bytesPerLine: null,
        lines: null,
        inputSize: null,
        type: g.channels[0].pixelType,
        uncompress: null,
        getter: null,
        format: null,
        [Rm ? "colorSpace" : "encoding"]: null
      };
      switch (g.compression) {
        case "NO_COMPRESSION":
          ie.lines = 1, ie.uncompress = Zl;
          break;
        case "RLE_COMPRESSION":
          ie.lines = 1, ie.uncompress = Un;
          break;
        case "ZIPS_COMPRESSION":
          ie.lines = 1, ie.uncompress = Qn;
          break;
        case "ZIP_COMPRESSION":
          ie.lines = 16, ie.uncompress = Qn;
          break;
        case "PIZ_COMPRESSION":
          ie.lines = 32, ie.uncompress = Ts;
          break;
        case "PXR24_COMPRESSION":
          ie.lines = 16, ie.uncompress = bu;
          break;
        case "DWAA_COMPRESSION":
          ie.lines = 32, ie.uncompress = il;
          break;
        case "DWAB_COMPRESSION":
          ie.lines = 256, ie.uncompress = il;
          break;
        default:
          throw "EXRLoader.parse: " + g.compression + " is unsupported";
      }
      if (ie.scanlineBlockSize = ie.lines, ie.type == 1)
        switch (oe) {
          case Ss:
            ie.getter = Gn, ie.inputSize = 2;
            break;
          case Ru:
            ie.getter = aa, ie.inputSize = 2;
            break;
        }
      else if (ie.type == 2)
        switch (oe) {
          case Ss:
            ie.getter = ze, ie.inputSize = 4;
            break;
          case Ru:
            ie.getter = et, ie.inputSize = 4;
        }
      else
        throw "EXRLoader.parse: unsupported pixelType " + ie.type + " for " + g.compression + ".";
      ie.blockCount = (g.dataWindow.yMax + 1) / ie.scanlineBlockSize;
      for (var Me = 0; Me < ie.blockCount; Me++)
        Ae(H, k);
      ie.outputChannels = ie.channels == 3 ? 4 : ie.channels;
      const ye = ie.width * ie.height * ie.outputChannels;
      switch (oe) {
        case Ss:
          ie.byteArray = new Float32Array(ye), ie.channels < ie.outputChannels && ie.byteArray.fill(1, 0, ye);
          break;
        case Ru:
          ie.byteArray = new Uint16Array(ye), ie.channels < ie.outputChannels && ie.byteArray.fill(15360, 0, ye);
          break;
        default:
          console.error("THREE.EXRLoader: unsupported type: ", oe);
          break;
      }
      return ie.bytesPerLine = ie.width * ie.inputSize * ie.channels, ie.outputChannels == 4 ? ie.format = Nm : ie.format = jS, Rm ? ie.colorSpace = "srgb-linear" : ie.encoding = 3e3, ie;
    }
    const ii = new DataView(u), ql = new Uint8Array(u), Hu = { value: 0 }, an = _u(ii, u, Hu), $e = Ji(an, ii, ql, Hu, this.type), Xn = { value: 0 }, It = { R: 0, G: 1, B: 2, A: 3, Y: 0 };
    for (let g = 0; g < $e.height / $e.scanlineBlockSize; g++) {
      const H = Jt(ii, Hu);
      $e.size = Jt(ii, Hu), $e.lines = H + $e.scanlineBlockSize > $e.height ? $e.height - H : $e.scanlineBlockSize;
      const k = $e.size < $e.lines * $e.bytesPerLine ? $e.uncompress($e) : Zl($e);
      Hu.value += $e.size;
      for (let oe = 0; oe < $e.scanlineBlockSize; oe++) {
        const ie = oe + g * $e.scanlineBlockSize;
        if (ie >= $e.height)
          break;
        for (let Me = 0; Me < $e.channels; Me++) {
          const ye = It[an.channels[Me].name];
          for (let Se = 0; Se < $e.width; Se++) {
            Xn.value = (oe * ($e.channels * $e.width) + Me * $e.width + Se) * $e.inputSize;
            const ve = ($e.height - 1 - ie) * ($e.width * $e.outputChannels) + Se * $e.outputChannels + ye;
            $e.byteArray[ve] = $e.getter(k, Xn);
          }
        }
      }
    }
    return {
      header: an,
      width: $e.width,
      height: $e.height,
      data: $e.byteArray,
      format: $e.format,
      [Rm ? "colorSpace" : "encoding"]: $e[Rm ? "colorSpace" : "encoding"],
      type: this.type
    };
  }
  setDataType(u) {
    return this.type = u, this;
  }
  load(u, r, f, p) {
    function v(A, B) {
      Rm ? A.colorSpace = B.colorSpace : A.encoding = B.encoding, A.minFilter = Tu, A.magFilter = Tu, A.generateMipmaps = !1, A.flipY = !1, r && r(A, B);
    }
    return super.load(u, v, f, p);
  }
}
const ay = /* @__PURE__ */ new WeakMap();
class Og extends Ay {
  constructor(u) {
    super(u), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = {
      position: "POSITION",
      normal: "NORMAL",
      color: "COLOR",
      uv: "TEX_COORD"
    }, this.defaultAttributeTypes = {
      position: "Float32Array",
      normal: "Float32Array",
      color: "Float32Array",
      uv: "Float32Array"
    };
  }
  setDecoderPath(u) {
    return this.decoderPath = u, this;
  }
  setDecoderConfig(u) {
    return this.decoderConfig = u, this;
  }
  setWorkerLimit(u) {
    return this.workerLimit = u, this;
  }
  load(u, r, f, p) {
    const v = new Ac(this.manager);
    v.setPath(this.path), v.setResponseType("arraybuffer"), v.setRequestHeader(this.requestHeader), v.setWithCredentials(this.withCredentials), v.load(
      u,
      (A) => {
        const B = {
          attributeIDs: this.defaultAttributeIDs,
          attributeTypes: this.defaultAttributeTypes,
          useUniqueIDs: !1
        };
        this.decodeGeometry(A, B).then(r).catch(p);
      },
      f,
      p
    );
  }
  /** @deprecated Kept for backward-compatibility with previous DRACOLoader versions. */
  decodeDracoFile(u, r, f, p) {
    const v = {
      attributeIDs: f || this.defaultAttributeIDs,
      attributeTypes: p || this.defaultAttributeTypes,
      useUniqueIDs: !!f
    };
    this.decodeGeometry(u, v).then(r);
  }
  decodeGeometry(u, r) {
    for (const E in r.attributeTypes) {
      const C = r.attributeTypes[E];
      C.BYTES_PER_ELEMENT !== void 0 && (r.attributeTypes[E] = C.name);
    }
    const f = JSON.stringify(r);
    if (ay.has(u)) {
      const E = ay.get(u);
      if (E.key === f)
        return E.promise;
      if (u.byteLength === 0)
        throw new Error(
          "THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred."
        );
    }
    let p;
    const v = this.workerNextTaskID++, A = u.byteLength, B = this._getWorker(v, A).then((E) => (p = E, new Promise((C, R) => {
      p._callbacks[v] = { resolve: C, reject: R }, p.postMessage({ type: "decode", id: v, taskConfig: r, buffer: u }, [u]);
    }))).then((E) => this._createGeometry(E.geometry));
    return B.catch(() => !0).then(() => {
      p && v && this._releaseTask(p, v);
    }), ay.set(u, {
      key: f,
      promise: B
    }), B;
  }
  _createGeometry(u) {
    const r = new IE();
    u.index && r.setIndex(new _m(u.index.array, 1));
    for (let f = 0; f < u.attributes.length; f++) {
      const p = u.attributes[f], v = p.name, A = p.array, B = p.itemSize;
      r.setAttribute(v, new _m(A, B));
    }
    return r;
  }
  _loadLibrary(u, r) {
    const f = new Ac(this.manager);
    return f.setPath(this.decoderPath), f.setResponseType(r), f.setWithCredentials(this.withCredentials), new Promise((p, v) => {
      f.load(u, p, void 0, v);
    });
  }
  preload() {
    return this._initDecoder(), this;
  }
  _initDecoder() {
    if (this.decoderPending)
      return this.decoderPending;
    const u = typeof WebAssembly != "object" || this.decoderConfig.type === "js", r = [];
    return u ? r.push(this._loadLibrary("draco_decoder.js", "text")) : (r.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), r.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(r).then((f) => {
      const p = f[0];
      u || (this.decoderConfig.wasmBinary = f[1]);
      const v = Ug.toString(), A = [
        "/* draco decoder */",
        p,
        "",
        "/* worker */",
        v.substring(v.indexOf("{") + 1, v.lastIndexOf("}"))
      ].join(`
`);
      this.workerSourceURL = URL.createObjectURL(new Blob([A]));
    }), this.decoderPending;
  }
  _getWorker(u, r) {
    return this._initDecoder().then(() => {
      if (this.workerPool.length < this.workerLimit) {
        const p = new Worker(this.workerSourceURL);
        p._callbacks = {}, p._taskCosts = {}, p._taskLoad = 0, p.postMessage({ type: "init", decoderConfig: this.decoderConfig }), p.onmessage = function(v) {
          const A = v.data;
          switch (A.type) {
            case "decode":
              p._callbacks[A.id].resolve(A);
              break;
            case "error":
              p._callbacks[A.id].reject(A);
              break;
            default:
              console.error('THREE.DRACOLoader: Unexpected message, "' + A.type + '"');
          }
        }, this.workerPool.push(p);
      } else
        this.workerPool.sort(function(p, v) {
          return p._taskLoad > v._taskLoad ? -1 : 1;
        });
      const f = this.workerPool[this.workerPool.length - 1];
      return f._taskCosts[u] = r, f._taskLoad += r, f;
    });
  }
  _releaseTask(u, r) {
    u._taskLoad -= u._taskCosts[r], delete u._callbacks[r], delete u._taskCosts[r];
  }
  debug() {
    console.log(
      "Task load: ",
      this.workerPool.map((u) => u._taskLoad)
    );
  }
  dispose() {
    for (let u = 0; u < this.workerPool.length; ++u)
      this.workerPool[u].terminate();
    return this.workerPool.length = 0, this;
  }
}
function Ug() {
  let d, u;
  onmessage = function(A) {
    const B = A.data;
    switch (B.type) {
      case "init":
        d = B.decoderConfig, u = new Promise(function(R) {
          d.onModuleLoaded = function(T) {
            R({ draco: T });
          }, DracoDecoderModule(d);
        });
        break;
      case "decode":
        const E = B.buffer, C = B.taskConfig;
        u.then((R) => {
          const T = R.draco, M = new T.Decoder(), O = new T.DecoderBuffer();
          O.Init(new Int8Array(E), E.byteLength);
          try {
            const U = r(T, M, O, C), V = U.attributes.map((P) => P.array.buffer);
            U.index && V.push(U.index.array.buffer), self.postMessage({ type: "decode", id: B.id, geometry: U }, V);
          } catch (U) {
            console.error(U), self.postMessage({ type: "error", id: B.id, error: U.message });
          } finally {
            T.destroy(O), T.destroy(M);
          }
        });
        break;
    }
  };
  function r(A, B, E, C) {
    const R = C.attributeIDs, T = C.attributeTypes;
    let M, O;
    const U = B.GetEncodedGeometryType(E);
    if (U === A.TRIANGULAR_MESH)
      M = new A.Mesh(), O = B.DecodeBufferToMesh(E, M);
    else if (U === A.POINT_CLOUD)
      M = new A.PointCloud(), O = B.DecodeBufferToPointCloud(E, M);
    else
      throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
    if (!O.ok() || M.ptr === 0)
      throw new Error("THREE.DRACOLoader: Decoding failed: " + O.error_msg());
    const V = { index: null, attributes: [] };
    for (const P in R) {
      const G = self[T[P]];
      let N, $;
      if (C.useUniqueIDs)
        $ = R[P], N = B.GetAttributeByUniqueId(M, $);
      else {
        if ($ = B.GetAttributeId(M, A[R[P]]), $ === -1)
          continue;
        N = B.GetAttribute(M, $);
      }
      V.attributes.push(p(A, B, M, P, G, N));
    }
    return U === A.TRIANGULAR_MESH && (V.index = f(A, B, M)), A.destroy(M), V;
  }
  function f(A, B, E) {
    const R = E.num_faces() * 3, T = R * 4, M = A._malloc(T);
    B.GetTrianglesUInt32Array(E, T, M);
    const O = new Uint32Array(A.HEAPF32.buffer, M, R).slice();
    return A._free(M), { array: O, itemSize: 1 };
  }
  function p(A, B, E, C, R, T) {
    const M = T.num_components(), U = E.num_points() * M, V = U * R.BYTES_PER_ELEMENT, P = v(A, R), G = A._malloc(V);
    B.GetAttributeDataArrayForAllPoints(E, T, P, V, G);
    const N = new R(A.HEAPF32.buffer, G, U).slice();
    return A._free(G), {
      name: C,
      array: N,
      itemSize: M
    };
  }
  function v(A, B) {
    switch (B) {
      case Float32Array:
        return A.DT_FLOAT32;
      case Int8Array:
        return A.DT_INT8;
      case Int16Array:
        return A.DT_INT16;
      case Int32Array:
        return A.DT_INT32;
      case Uint8Array:
        return A.DT_UINT8;
      case Uint16Array:
        return A.DT_UINT16;
      case Uint32Array:
        return A.DT_UINT32;
    }
  }
}
let mh;
const ny = () => {
  if (mh)
    return mh;
  const d = "B9h9z9tFBBBF8fL9gBB9gLaaaaaFa9gEaaaB9gFaFa9gEaaaFaEMcBFFFGGGEIIILF9wFFFLEFBFKNFaFCx/IFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBF8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBGy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBEn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBIi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBKI9z9iqlBOc+x8ycGBM/qQFTa8jUUUUBCU/EBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAGTkUUUBRNCUoBAG9uC/wgBZHKCUGAKCUG9JyRVAECFJRICBRcGXEXAcAF9PQFAVAFAclAcAVJAF9JyRMGXGXAG9FQBAMCbJHKC9wZRSAKCIrCEJCGrRQANCUGJRfCBRbAIRTEXGXAOATlAQ9PQBCBRISEMATAQJRIGXAS9FQBCBRtCBREEXGXAOAIlCi9PQBCBRISLMANCU/CBJAEJRKGXGXGXGXGXATAECKrJ2BBAtCKZrCEZfIBFGEBMAKhB83EBAKCNJhB83EBSEMAKAI2BIAI2BBHmCKrHYAYCE6HYy86BBAKCFJAICIJAYJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCGJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCEJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCIJAYAmJHY2BBAI2BFHmCKrHPAPCE6HPy86BBAKCLJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCKJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCOJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCNJAYAmJHY2BBAI2BGHmCKrHPAPCE6HPy86BBAKCVJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCcJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCMJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCSJAYAmJHm2BBAI2BEHICKrHYAYCE6HYy86BBAKCQJAmAYJHm2BBAICIrCEZHYAYCE6HYy86BBAKCfJAmAYJHm2BBAICGrCEZHYAYCE6HYy86BBAKCbJAmAYJHK2BBAICEZHIAICE6HIy86BBAKAIJRISGMAKAI2BNAI2BBHmCIrHYAYCb6HYy86BBAKCFJAICNJAYJHY2BBAmCbZHmAmCb6Hmy86BBAKCGJAYAmJHm2BBAI2BFHYCIrHPAPCb6HPy86BBAKCEJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCIJAmAYJHm2BBAI2BGHYCIrHPAPCb6HPy86BBAKCLJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCKJAmAYJHm2BBAI2BEHYCIrHPAPCb6HPy86BBAKCOJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCNJAmAYJHm2BBAI2BIHYCIrHPAPCb6HPy86BBAKCVJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCcJAmAYJHm2BBAI2BLHYCIrHPAPCb6HPy86BBAKCMJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCSJAmAYJHm2BBAI2BKHYCIrHPAPCb6HPy86BBAKCQJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCfJAmAYJHm2BBAI2BOHICIrHYAYCb6HYy86BBAKCbJAmAYJHK2BBAICbZHIAICb6HIy86BBAKAIJRISFMAKAI8pBB83BBAKCNJAICNJ8pBB83BBAICTJRIMAtCGJRtAECTJHEAS9JQBMMGXAIQBCBRISEMGXAM9FQBANAbJ2BBRtCBRKAfREEXAEANCU/CBJAKJ2BBHTCFrCBATCFZl9zAtJHt86BBAEAGJREAKCFJHKAM9HQBMMAfCFJRfAIRTAbCFJHbAG9HQBMMABAcAG9sJANCUGJAMAG9sTkUUUBpANANCUGJAMCaJAG9sJAGTkUUUBpMAMCBAIyAcJRcAIQBMC9+RKSFMCBC99AOAIlAGCAAGCA9Ly6yRKMALCU/EBJ8kUUUUBAKM+OmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUFT+JUUUBpALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM+lLKFaF99GaG99FaG99GXGXAGCI9HQBAF9FQFEXGXGX9DBBB8/9DBBB+/ABCGJHG1BB+yAB1BBHE+yHI+L+TABCFJHL1BBHK+yHO+L+THN9DBBBB9gHVyAN9DBB/+hANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE86BBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG86BBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG86BBABCIJRBAFCaJHFQBSGMMAF9FQBEXGXGX9DBBB8/9DBBB+/ABCIJHG8uFB+yAB8uFBHE+yHI+L+TABCGJHL8uFBHK+yHO+L+THN9DBBBB9gHVyAN9DB/+g6ANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE87FBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG87FBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG87FBABCNJRBAFCaJHFQBMMM/SEIEaE99EaF99GXAF9FQBCBREABRIEXGXGX9D/zI818/AICKJ8uFBHLCEq+y+VHKAI8uFB+y+UHO9DB/+g6+U9DBBB8/9DBBB+/AO9DBBBB9gy+SHN+L9DBBB9P9d9FQBAN+oRVSFMCUUUU94RVMAICIJ8uFBRcAICGJ8uFBRMABALCFJCEZAEqCFWJAV87FBGXGXAKAM+y+UHN9DB/+g6+U9DBBB8/9DBBB+/AN9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRMSFMCUUUU94RMMABALCGJCEZAEqCFWJAM87FBGXGXAKAc+y+UHK9DB/+g6+U9DBBB8/9DBBB+/AK9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRcSFMCUUUU94RcMABALCaJCEZAEqCFWJAc87FBGXGX9DBBU8/AOAO+U+TANAN+U+TAKAK+U+THO9DBBBBAO9DBBBB9gy+R9DB/+g6+U9DBBB8/+SHO+L9DBBB9P9d9FQBAO+oRcSFMCUUUU94RcMABALCEZAEqCFWJAc87FBAICNJRIAECIJREAFCaJHFQBMMM9JBGXAGCGrAF9sHF9FQBEXABAB8oGBHGCNWCN91+yAGCi91CnWCUUU/8EJ+++U84GBABCIJRBAFCaJHFQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEM/lFFFaGXGXAFABqCEZ9FQBABRESFMGXGXAGCT9PQBABRESFMABREEXAEAF8oGBjGBAECIJAFCIJ8oGBjGBAECNJAFCNJ8oGBjGBAECSJAFCSJ8oGBjGBAECTJREAFCTJRFAGC9wJHGCb9LQBMMAGCI9JQBEXAEAF8oGBjGBAFCIJRFAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF2BB86BBAECFJREAFCFJRFAGCaJHGQBMMABMoFFGaGXGXABCEZ9FQBABRESFMAFCgFZC+BwsN9sRIGXGXAGCT9PQBABRESFMABREEXAEAIjGBAECSJAIjGBAECNJAIjGBAECIJAIjGBAECTJREAGC9wJHGCb9LQBMMAGCI9JQBEXAEAIjGBAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF86BBAECFJREAGCaJHGQBMMABMMMFBCUNMIT9kBB", u = "B9h9z9tFBBBFiI9gBB9gLaaaaaFa9gEaaaB9gFaFaEMcBBFBFFGGGEILF9wFFFLEFBFKNFaFCx/aFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBG8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBIy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBKi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBOn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBNI9z9iqlBVc+N9IcIBTEM9+FLa8jUUUUBCTlRBCBRFEXCBRGCBREEXABCNJAGJAECUaAFAGrCFZHIy86BBAEAIJREAGCFJHGCN9HQBMAFCx+YUUBJAE86BBAFCEWCxkUUBJAB8pEN83EBAFCFJHFCUG9HQBMMk8lLbaE97F9+FaL978jUUUUBCU/KBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAG/8cBBCUoBAG9uC/wgBZHKCUGAKCUG9JyRNAECFJRKCBRVGXEXAVAF9PQFANAFAVlAVANJAF9JyRcGXGXAG9FQBAcCbJHIC9wZHMCE9sRSAMCFWRQAICIrCEJCGrRfCBRbEXAKRTCBRtGXEXGXAOATlAf9PQBCBRKSLMALCU/CBJAtAM9sJRmATAfJRKCBREGXAMCoB9JQBAOAKlC/gB9JQBCBRIEXAmAIJREGXGXGXGXGXATAICKrJ2BBHYCEZfIBFGEBMAECBDtDMIBSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMIBAKCTJRKMGXGXGXGXGXAYCGrCEZfIBFGEBMAECBDtDMITSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMITAKCTJRKMGXGXGXGXGXAYCIrCEZfIBFGEBMAECBDtDMIASEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMIAAKCTJRKMGXGXGXGXGXAYCKrfIBFGEBMAECBDtDMI8wSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCIJAeDeBJAYCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCNJAeDeBJAYCx+YUUBJ2BBJRKSFMAEAKDBBBDMI8wAKCTJRKMAICoBJREAICUFJAM9LQFAERIAOAKlC/fB9LQBMMGXAEAM9PQBAECErRIEXGXAOAKlCi9PQBCBRKSOMAmAEJRYGXGXGXGXGXATAECKrJ2BBAICKZrCEZfIBFGEBMAYCBDtDMIBSEMAYAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAYAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAYAKDBBBDMIBAKCTJRKMAICGJRIAECTJHEAM9JQBMMGXAK9FQBAKRTAtCFJHtCI6QGSFMMCBRKSEMGXAM9FQBALCUGJAbJREALAbJDBGBReCBRYEXAEALCU/CBJAYJHIDBIBHdCFD9tAdCFDbHPD9OD9hD9RHdAIAMJDBIBH8ZCFD9tA8ZAPD9OD9hD9RH8ZDQBTFtGmEYIPLdKeOnHpAIAQJDBIBHyCFD9tAyAPD9OD9hD9RHyAIASJDBIBH8cCFD9tA8cAPD9OD9hD9RH8cDQBTFtGmEYIPLdKeOnH8dDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGEAeD9uHeDyBjGBAEAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeApA8dDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeAdA8ZDQNiV8ZcpMyS8cQ8df8eb8fHdAyA8cDQNiV8ZcpMyS8cQ8df8eb8fH8ZDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeAdA8ZDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJREAYCTJHYAM9JQBMMAbCIJHbAG9JQBMMABAVAG9sJALCUGJAcAG9s/8cBBALALCUGJAcCaJAG9sJAG/8cBBMAcCBAKyAVJRVAKQBMC9+RKSFMCBC99AOAKlAGCAAGCA9Ly6yRKMALCU/KBJ8kUUUUBAKMNBT+BUUUBM+KmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUF/8MBALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM/dLEK97FaF97GXGXAGCI9HQBAF9FQFCBRGEXABABDBBBHECiD+rFCiD+sFD/6FHIAECND+rFCiD+sFD/6FAID/gFAECTD+rFCiD+sFD/6FHLD/gFD/kFD/lFHKCBDtD+2FHOAICUUUU94DtHND9OD9RD/kFHI9DBB/+hDYAIAID/mFAKAKD/mFALAOALAND9OD9RD/kFHIAID/mFD/kFD/kFD/jFD/nFHLD/mF9DBBX9LDYHOD/kFCgFDtD9OAECUUU94DtD9OD9QAIALD/mFAOD/kFCND+rFCU/+EDtD9OD9QAKALD/mFAOD/kFCTD+rFCUU/8ODtD9OD9QDMBBABCTJRBAGCIJHGAF9JQBSGMMAF9FQBCBRGEXABCTJHVAVDBBBHECBDtHOCUU98D8cFCUU98D8cEHND9OABDBBBHKAEDQILKOSQfbPden8c8d8e8fCggFDtD9OD/6FAKAEDQBFGENVcMTtmYi8ZpyHECTD+sFD/6FHID/gFAECTD+rFCTD+sFD/6FHLD/gFD/kFD/lFHE9DB/+g6DYALAEAOD+2FHOALCUUUU94DtHcD9OD9RD/kFHLALD/mFAEAED/mFAIAOAIAcD9OD9RD/kFHEAED/mFD/kFD/kFD/jFD/nFHID/mF9DBBX9LDYHOD/kFCTD+rFALAID/mFAOD/kFCggEDtD9OD9QHLAEAID/mFAOD/kFCaDbCBDnGCBDnECBDnKCBDnOCBDncCBDnMCBDnfCBDnbD9OHEDQNVi8ZcMpySQ8c8dfb8e8fD9QDMBBABAKAND9OALAEDQBFTtGEmYILPdKOenD9QDMBBABCAJRBAGCIJHGAF9JQBMMM/hEIGaF97FaL978jUUUUBCTlREGXAF9FQBCBRIEXAEABDBBBHLABCTJHKDBBBHODQILKOSQfbPden8c8d8e8fHNCTD+sFHVCID+rFDMIBAB9DBBU8/DY9D/zI818/DYAVCEDtD9QD/6FD/nFHVALAODQBFGENVcMTtmYi8ZpyHLCTD+rFCTD+sFD/6FD/mFHOAOD/mFAVALCTD+sFD/6FD/mFHcAcD/mFAVANCTD+rFCTD+sFD/6FD/mFHNAND/mFD/kFD/kFD/lFCBDtD+4FD/jF9DB/+g6DYHVD/mF9DBBX9LDYHLD/kFCggEDtHMD9OAcAVD/mFALD/kFCTD+rFD9QHcANAVD/mFALD/kFCTD+rFAOAVD/mFALD/kFAMD9OD9QHVDQBFTtGEmYILPdKOenHLD8dBAEDBIBDyB+t+J83EBABCNJALD8dFAEDBIBDyF+t+J83EBAKAcAVDQNVi8ZcMpySQ8c8dfb8e8fHVD8dBAEDBIBDyG+t+J83EBABCiJAVD8dFAEDBIBDyE+t+J83EBABCAJRBAICIJHIAF9JQBMMM9jFF97GXAGCGrAF9sHG9FQBCBRFEXABABDBBBHECND+rFCND+sFD/6FAECiD+sFCnD+rFCUUU/8EDtD+uFD/mFDMBBABCTJRBAFCIJHFAG9JQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEMMMFBCUNMIT9tBB", r = new Uint8Array([
    0,
    97,
    115,
    109,
    1,
    0,
    0,
    0,
    1,
    4,
    1,
    96,
    0,
    0,
    3,
    3,
    2,
    0,
    0,
    5,
    3,
    1,
    0,
    1,
    12,
    1,
    0,
    10,
    22,
    2,
    12,
    0,
    65,
    0,
    65,
    0,
    65,
    0,
    252,
    10,
    0,
    0,
    11,
    7,
    0,
    65,
    0,
    253,
    15,
    26,
    11
  ]), f = new Uint8Array([
    32,
    0,
    65,
    253,
    3,
    1,
    2,
    34,
    4,
    106,
    6,
    5,
    11,
    8,
    7,
    20,
    13,
    33,
    12,
    16,
    128,
    9,
    116,
    64,
    19,
    113,
    127,
    15,
    10,
    21,
    22,
    14,
    255,
    66,
    24,
    54,
    136,
    107,
    18,
    23,
    192,
    26,
    114,
    118,
    132,
    17,
    77,
    101,
    130,
    144,
    27,
    87,
    131,
    44,
    45,
    74,
    156,
    154,
    70,
    167
  ]);
  if (typeof WebAssembly != "object")
    return {
      supported: !1
    };
  let p = d;
  WebAssembly.validate(r) && (p = u);
  let v;
  const A = WebAssembly.instantiate(B(p), {}).then((T) => {
    v = T.instance, v.exports.__wasm_call_ctors();
  });
  function B(T) {
    const M = new Uint8Array(T.length);
    for (let U = 0; U < T.length; ++U) {
      const V = T.charCodeAt(U);
      M[U] = V > 96 ? V - 71 : V > 64 ? V - 65 : V > 47 ? V + 4 : V > 46 ? 63 : 62;
    }
    let O = 0;
    for (let U = 0; U < T.length; ++U)
      M[O++] = M[U] < 60 ? f[M[U]] : (M[U] - 60) * 64 + M[++U];
    return M.buffer.slice(0, O);
  }
  function E(T, M, O, U, V, P) {
    const G = v.exports.sbrk, N = O + 3 & -4, $ = G(N * U), Z = G(V.length), ce = new Uint8Array(v.exports.memory.buffer);
    ce.set(V, Z);
    const W = T($, O, U, Z, V.length);
    if (W === 0 && P && P($, N, U), M.set(ce.subarray($, $ + O * U)), G($ - G(0)), W !== 0)
      throw new Error(`Malformed buffer data: ${W}`);
  }
  const C = {
    // legacy index-based enums for glTF
    0: "",
    1: "meshopt_decodeFilterOct",
    2: "meshopt_decodeFilterQuat",
    3: "meshopt_decodeFilterExp",
    // string-based enums for glTF
    NONE: "",
    OCTAHEDRAL: "meshopt_decodeFilterOct",
    QUATERNION: "meshopt_decodeFilterQuat",
    EXPONENTIAL: "meshopt_decodeFilterExp"
  }, R = {
    // legacy index-based enums for glTF
    0: "meshopt_decodeVertexBuffer",
    1: "meshopt_decodeIndexBuffer",
    2: "meshopt_decodeIndexSequence",
    // string-based enums for glTF
    ATTRIBUTES: "meshopt_decodeVertexBuffer",
    TRIANGLES: "meshopt_decodeIndexBuffer",
    INDICES: "meshopt_decodeIndexSequence"
  };
  return mh = {
    ready: A,
    supported: !0,
    decodeVertexBuffer(T, M, O, U, V) {
      E(
        v.exports.meshopt_decodeVertexBuffer,
        T,
        M,
        O,
        U,
        v.exports[C[V]]
      );
    },
    decodeIndexBuffer(T, M, O, U) {
      E(v.exports.meshopt_decodeIndexBuffer, T, M, O, U);
    },
    decodeIndexSequence(T, M, O, U) {
      E(v.exports.meshopt_decodeIndexSequence, T, M, O, U);
    },
    decodeGltfBuffer(T, M, O, U, V, P) {
      E(
        v.exports[R[V]],
        T,
        M,
        O,
        U,
        v.exports[C[P]]
      );
    }
  }, mh;
};
let ph = null, N0 = "https://www.gstatic.com/draco/versioned/decoders/1.5.5/";
function G0(d = !0, u = !0, r) {
  return (f) => {
    r && r(f), d && (ph || (ph = new Og()), ph.setDecoderPath(typeof d == "string" ? d : N0), f.setDRACOLoader(ph)), u && f.setMeshoptDecoder(typeof ny == "function" ? ny() : ny);
  };
}
const by = (d, u, r, f) => gs(My, d, G0(u, r, f));
by.preload = (d, u, r, f) => gs.preload(My, d, G0(u, r, f));
by.clear = (d) => gs.clear(My, d);
by.setDecoderPath = (d) => {
  N0 = d;
};
const $g = /* @__PURE__ */ Qe.forwardRef(({
  makeDefault: d,
  camera: u,
  regress: r,
  domElement: f,
  enableDamping: p = !0,
  keyEvents: v = !1,
  onChange: A,
  onStart: B,
  onEnd: E,
  ...C
}, R) => {
  const T = Xl((W) => W.invalidate), M = Xl((W) => W.camera), O = Xl((W) => W.gl), U = Xl((W) => W.events), V = Xl((W) => W.setEvents), P = Xl((W) => W.set), G = Xl((W) => W.get), N = Xl((W) => W.performance), $ = u || M, Z = f || U.connected || O.domElement, ce = Qe.useMemo(() => new FB($), [$]);
  return h0(() => {
    ce.enabled && ce.update();
  }, -1), Qe.useEffect(() => (v && ce.connect(v === !0 ? Z : v), ce.connect(Z), () => void ce.dispose()), [v, Z, r, ce, T]), Qe.useEffect(() => {
    const W = (se) => {
      T(), r && N.regress(), A && A(se);
    }, Ce = (se) => {
      B && B(se);
    }, ne = (se) => {
      E && E(se);
    };
    return ce.addEventListener("change", W), ce.addEventListener("start", Ce), ce.addEventListener("end", ne), () => {
      ce.removeEventListener("start", Ce), ce.removeEventListener("end", ne), ce.removeEventListener("change", W);
    };
  }, [A, B, E, ce, T, V]), Qe.useEffect(() => {
    if (d) {
      const W = G().controls;
      return P({
        controls: ce
      }), () => P({
        controls: W
      });
    }
  }, [d, ce]), /* @__PURE__ */ Qe.createElement("primitive", bh({
    ref: R,
    object: ce,
    enableDamping: p
  }, C));
}), z0 = (d, u, r) => {
  let f;
  switch (d) {
    case sy:
      f = new Uint8ClampedArray(u * r * 4);
      break;
    case Ru:
      f = new Uint16Array(u * r * 4);
      break;
    case qS:
      f = new Uint32Array(u * r * 4);
      break;
    case ZS:
      f = new Int8Array(u * r * 4);
      break;
    case VS:
      f = new Int16Array(u * r * 4);
      break;
    case XS:
      f = new Int32Array(u * r * 4);
      break;
    case Ss:
      f = new Float32Array(u * r * 4);
      break;
    default:
      throw new Error("Unsupported data type");
  }
  return f;
};
let hh;
const Ng = (d, u, r, f) => {
  if (hh !== void 0)
    return hh;
  const p = new $E(1, 1, f);
  u.setRenderTarget(p);
  const v = new _h(new kE(), new Cf({ color: 16777215 }));
  u.render(v, r), u.setRenderTarget(null);
  const A = z0(d, p.width, p.height);
  return u.readRenderTargetPixels(p, 0, 0, p.width, p.height, A), p.dispose(), v.geometry.dispose(), v.material.dispose(), hh = A[0] !== 0, hh;
};
class Dy {
  /**
   * Constructs a new QuadRenderer
   *
   * @param options Parameters for this QuadRenderer
   */
  constructor(u) {
    var r, f, p, v, A, B, E, C, R, T, M, O, U, V, P, G;
    this._rendererIsDisposable = !1, this._supportsReadPixels = !0, this.render = () => {
      this._renderer.setRenderTarget(this._renderTarget);
      try {
        this._renderer.render(this._scene, this._camera);
      } catch ($) {
        throw this._renderer.setRenderTarget(null), $;
      }
      this._renderer.setRenderTarget(null);
    }, this._width = u.width, this._height = u.height, this._type = u.type, this._colorSpace = u.colorSpace;
    const N = {
      // fixed options
      format: Nm,
      depthBuffer: !1,
      stencilBuffer: !1,
      // user options
      type: this._type,
      // set in class property
      colorSpace: this._colorSpace,
      // set in class property
      anisotropy: ((r = u.renderTargetOptions) === null || r === void 0 ? void 0 : r.anisotropy) !== void 0 ? (f = u.renderTargetOptions) === null || f === void 0 ? void 0 : f.anisotropy : 1,
      generateMipmaps: ((p = u.renderTargetOptions) === null || p === void 0 ? void 0 : p.generateMipmaps) !== void 0 ? (v = u.renderTargetOptions) === null || v === void 0 ? void 0 : v.generateMipmaps : !1,
      magFilter: ((A = u.renderTargetOptions) === null || A === void 0 ? void 0 : A.magFilter) !== void 0 ? (B = u.renderTargetOptions) === null || B === void 0 ? void 0 : B.magFilter : Tu,
      minFilter: ((E = u.renderTargetOptions) === null || E === void 0 ? void 0 : E.minFilter) !== void 0 ? (C = u.renderTargetOptions) === null || C === void 0 ? void 0 : C.minFilter : Tu,
      samples: ((R = u.renderTargetOptions) === null || R === void 0 ? void 0 : R.samples) !== void 0 ? (T = u.renderTargetOptions) === null || T === void 0 ? void 0 : T.samples : void 0,
      wrapS: ((M = u.renderTargetOptions) === null || M === void 0 ? void 0 : M.wrapS) !== void 0 ? (O = u.renderTargetOptions) === null || O === void 0 ? void 0 : O.wrapS : Es,
      wrapT: ((U = u.renderTargetOptions) === null || U === void 0 ? void 0 : U.wrapT) !== void 0 ? (V = u.renderTargetOptions) === null || V === void 0 ? void 0 : V.wrapT : Es
    };
    if (this._material = u.material, u.renderer ? this._renderer = u.renderer : (this._renderer = Dy.instantiateRenderer(), this._rendererIsDisposable = !0), this._scene = new WE(), this._camera = new bm(), this._camera.position.set(0, 0, 10), this._camera.left = -0.5, this._camera.right = 0.5, this._camera.top = 0.5, this._camera.bottom = -0.5, this._camera.updateProjectionMatrix(), !Ng(this._type, this._renderer, this._camera, N)) {
      let $;
      switch (this._type) {
        case Ru:
          $ = this._renderer.extensions.has("EXT_color_buffer_float") ? Ss : void 0;
          break;
      }
      $ !== void 0 ? (console.warn(`This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${Ss}`), this._type = $) : (this._supportsReadPixels = !1, console.warn("This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown"));
    }
    this._quad = new _h(new kE(), this._material), this._quad.geometry.computeBoundingBox(), this._scene.add(this._quad), this._renderTarget = new $E(this.width, this.height, N), this._renderTarget.texture.mapping = ((P = u.renderTargetOptions) === null || P === void 0 ? void 0 : P.mapping) !== void 0 ? (G = u.renderTargetOptions) === null || G === void 0 ? void 0 : G.mapping : Bh;
  }
  /**
   * Instantiates a temporary renderer
   *
   * @returns
   */
  static instantiateRenderer() {
    const u = new QS();
    return u.setSize(128, 128), u;
  }
  /**
   * Obtains a Buffer containing the rendered texture.
   *
   * @throws Error if the browser cannot read pixels from this RenderTarget type.
   * @returns a TypedArray containing RGBA values from this renderer
   */
  toArray() {
    if (!this._supportsReadPixels)
      throw new Error("Can't read pixels in this browser");
    const u = z0(this._type, this._width, this._height);
    return this._renderer.readRenderTargetPixels(this._renderTarget, 0, 0, this._width, this._height, u), u;
  }
  /**
   * Performs a readPixel operation in the renderTarget
   * and returns a DataTexture containing the read data
   *
   * @param options options
   * @returns
   */
  toDataTexture(u) {
    const r = new YS(
      // fixed values
      this.toArray(),
      this.width,
      this.height,
      Nm,
      this._type,
      // user values
      (u == null ? void 0 : u.mapping) || Bh,
      (u == null ? void 0 : u.wrapS) || Es,
      (u == null ? void 0 : u.wrapT) || Es,
      (u == null ? void 0 : u.magFilter) || Tu,
      (u == null ? void 0 : u.minFilter) || Tu,
      (u == null ? void 0 : u.anisotropy) || 1,
      // fixed value
      iy
    );
    return r.generateMipmaps = (u == null ? void 0 : u.generateMipmaps) !== void 0 ? u == null ? void 0 : u.generateMipmaps : !1, r;
  }
  /**
   * If using a disposable renderer, it will dispose it.
   */
  disposeOnDemandRenderer() {
    this._renderer.setRenderTarget(null), this._rendererIsDisposable && (this._renderer.dispose(), this._renderer.forceContextLoss());
  }
  /**
   * Will dispose of **all** assets used by this renderer.
   *
   *
   * @param disposeRenderTarget will dispose of the renderTarget which will not be usable later
   * set this to true if you passed the `renderTarget.texture` to a `PMREMGenerator`
   * or are otherwise done with it.
   *
   * @example
   * ```js
   * const loader = new HDRJPGLoader(renderer)
   * const result = await loader.loadAsync('gainmap.jpeg')
   * const mesh = new Mesh(geometry, new MeshBasicMaterial({ map: result.renderTarget.texture }) )
   * // DO NOT dispose the renderTarget here,
   * // it is used directly in the material
   * result.dispose()
   * ```
   *
   * @example
   * ```js
   * const loader = new HDRJPGLoader(renderer)
   * const pmremGenerator = new PMREMGenerator( renderer );
   * const result = await loader.loadAsync('gainmap.jpeg')
   * const envMap = pmremGenerator.fromEquirectangular(result.renderTarget.texture)
   * const mesh = new Mesh(geometry, new MeshStandardMaterial({ envMap }) )
   * // renderTarget can be disposed here
   * // because it was used to generate a PMREM texture
   * result.dispose(true)
   * ```
   */
  dispose(u) {
    this.disposeOnDemandRenderer(), u && this.renderTarget.dispose(), this.material instanceof yy && Object.values(this.material.uniforms).forEach((r) => {
      r.value instanceof vc && r.value.dispose();
    }), Object.values(this.material).forEach((r) => {
      r instanceof vc && r.dispose();
    }), this.material.dispose(), this._quad.geometry.dispose();
  }
  /**
   * Width of the texture
   */
  get width() {
    return this._width;
  }
  set width(u) {
    this._width = u, this._renderTarget.setSize(this._width, this._height);
  }
  /**
   * Height of the texture
   */
  get height() {
    return this._height;
  }
  set height(u) {
    this._height = u, this._renderTarget.setSize(this._width, this._height);
  }
  /**
   * The renderer used
   */
  get renderer() {
    return this._renderer;
  }
  /**
   * The `WebGLRenderTarget` used.
   */
  get renderTarget() {
    return this._renderTarget;
  }
  set renderTarget(u) {
    this._renderTarget = u, this._width = u.width, this._height = u.height;
  }
  /**
   * The `Material` used.
   */
  get material() {
    return this._material;
  }
  /**
   *
   */
  get type() {
    return this._type;
  }
  get colorSpace() {
    return this._colorSpace;
  }
}
const Gg = (
  /* glsl */
  `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`
), zg = (
  /* glsl */
  `
// min half float value
#define HALF_FLOAT_MIN vec3( -65504, -65504, -65504 )
// max half float value
#define HALF_FLOAT_MAX vec3( 65504, 65504, 65504 )

uniform sampler2D sdr;
uniform sampler2D gainMap;
uniform vec3 gamma;
uniform vec3 offsetHdr;
uniform vec3 offsetSdr;
uniform vec3 gainMapMin;
uniform vec3 gainMapMax;
uniform float weightFactor;

varying vec2 vUv;

void main() {
  vec3 rgb = texture2D( sdr, vUv ).rgb;
  vec3 recovery = texture2D( gainMap, vUv ).rgb;
  vec3 logRecovery = pow( recovery, gamma );
  vec3 logBoost = gainMapMin * ( 1.0 - logRecovery ) + gainMapMax * logRecovery;
  vec3 hdrColor = (rgb + offsetSdr) * exp2( logBoost * weightFactor ) - offsetHdr;
  vec3 clampedHdrColor = max( HALF_FLOAT_MIN, min( HALF_FLOAT_MAX, hdrColor ));
  gl_FragColor = vec4( clampedHdrColor , 1.0 );
}
`
);
class xg extends yy {
  /**
   *
   * @param params
   */
  constructor({ gamma: u, offsetHdr: r, offsetSdr: f, gainMapMin: p, gainMapMax: v, maxDisplayBoost: A, hdrCapacityMin: B, hdrCapacityMax: E, sdr: C, gainMap: R }) {
    super({
      name: "GainMapDecoderMaterial",
      vertexShader: Gg,
      fragmentShader: zg,
      uniforms: {
        sdr: { value: C },
        gainMap: { value: R },
        gamma: { value: new Ma(1 / u[0], 1 / u[1], 1 / u[2]) },
        offsetHdr: { value: new Ma().fromArray(r) },
        offsetSdr: { value: new Ma().fromArray(f) },
        gainMapMin: { value: new Ma().fromArray(p) },
        gainMapMax: { value: new Ma().fromArray(v) },
        weightFactor: {
          value: (Math.log2(A) - B) / (E - B)
        }
      },
      blending: wS,
      depthTest: !1,
      depthWrite: !1
    }), this._maxDisplayBoost = A, this._hdrCapacityMin = B, this._hdrCapacityMax = E, this.needsUpdate = !0, this.uniformsNeedUpdate = !0;
  }
  get sdr() {
    return this.uniforms.sdr.value;
  }
  set sdr(u) {
    this.uniforms.sdr.value = u;
  }
  get gainMap() {
    return this.uniforms.gainMap.value;
  }
  set gainMap(u) {
    this.uniforms.gainMap.value = u;
  }
  /**
   * @see {@link GainMapMetadata.offsetHdr}
   */
  get offsetHdr() {
    return this.uniforms.offsetHdr.value.toArray();
  }
  set offsetHdr(u) {
    this.uniforms.offsetHdr.value.fromArray(u);
  }
  /**
   * @see {@link GainMapMetadata.offsetSdr}
   */
  get offsetSdr() {
    return this.uniforms.offsetSdr.value.toArray();
  }
  set offsetSdr(u) {
    this.uniforms.offsetSdr.value.fromArray(u);
  }
  /**
   * @see {@link GainMapMetadata.gainMapMin}
   */
  get gainMapMin() {
    return this.uniforms.gainMapMin.value.toArray();
  }
  set gainMapMin(u) {
    this.uniforms.gainMapMin.value.fromArray(u);
  }
  /**
   * @see {@link GainMapMetadata.gainMapMax}
   */
  get gainMapMax() {
    return this.uniforms.gainMapMax.value.toArray();
  }
  set gainMapMax(u) {
    this.uniforms.gainMapMax.value.fromArray(u);
  }
  /**
   * @see {@link GainMapMetadata.gamma}
   */
  get gamma() {
    const u = this.uniforms.gamma.value;
    return [1 / u.x, 1 / u.y, 1 / u.z];
  }
  set gamma(u) {
    const r = this.uniforms.gamma.value;
    r.x = 1 / u[0], r.y = 1 / u[1], r.z = 1 / u[2];
  }
  /**
   * @see {@link GainMapMetadata.hdrCapacityMin}
   * @remarks Logarithmic space
   */
  get hdrCapacityMin() {
    return this._hdrCapacityMin;
  }
  set hdrCapacityMin(u) {
    this._hdrCapacityMin = u, this.calculateWeight();
  }
  /**
   * @see {@link GainMapMetadata.hdrCapacityMin}
   * @remarks Logarithmic space
   */
  get hdrCapacityMax() {
    return this._hdrCapacityMax;
  }
  set hdrCapacityMax(u) {
    this._hdrCapacityMax = u, this.calculateWeight();
  }
  /**
   * @see {@link GainmapDecodingParameters.maxDisplayBoost}
   * @remarks Non Logarithmic space
   */
  get maxDisplayBoost() {
    return this._maxDisplayBoost;
  }
  set maxDisplayBoost(u) {
    this._maxDisplayBoost = Math.max(1, Math.min(65504, u)), this.calculateWeight();
  }
  calculateWeight() {
    const u = (Math.log2(this._maxDisplayBoost) - this._hdrCapacityMin) / (this._hdrCapacityMax - this._hdrCapacityMin);
    this.uniforms.weightFactor.value = Math.max(0, Math.min(1, u));
  }
}
class x0 extends Error {
}
class L0 extends Error {
}
const Mm = (d, u, r) => {
  const f = new RegExp(`${u}="([^"]*)"`, "i").exec(d);
  if (f)
    return f[1];
  const p = new RegExp(`<${u}[^>]*>([\\s\\S]*?)</${u}>`, "i").exec(d);
  if (p) {
    const v = p[1].match(/<rdf:li>([^<]*)<\/rdf:li>/g);
    return v && v.length === 3 ? v.map((A) => A.replace(/<\/?rdf:li>/g, "")) : p[1].trim();
  }
  if (r !== void 0)
    return r;
  throw new Error(`Can't find ${u} in gainmap metadata`);
}, Lg = (d) => {
  let u;
  typeof TextDecoder < "u" ? u = new TextDecoder().decode(d) : u = d.toString();
  let r = u.indexOf("<x:xmpmeta");
  for (; r !== -1; ) {
    const f = u.indexOf("x:xmpmeta>", r), p = u.slice(r, f + 10);
    try {
      const v = Mm(p, "hdrgm:GainMapMin", "0"), A = Mm(p, "hdrgm:GainMapMax"), B = Mm(p, "hdrgm:Gamma", "1"), E = Mm(p, "hdrgm:OffsetSDR", "0.015625"), C = Mm(p, "hdrgm:OffsetHDR", "0.015625"), R = /hdrgm:HDRCapacityMin="([^"]*)"/.exec(p), T = R ? R[1] : "0", M = /hdrgm:HDRCapacityMax="([^"]*)"/.exec(p);
      if (!M)
        throw new Error("Incomplete gainmap metadata");
      const O = M[1];
      return {
        gainMapMin: Array.isArray(v) ? v.map((U) => parseFloat(U)) : [parseFloat(v), parseFloat(v), parseFloat(v)],
        gainMapMax: Array.isArray(A) ? A.map((U) => parseFloat(U)) : [parseFloat(A), parseFloat(A), parseFloat(A)],
        gamma: Array.isArray(B) ? B.map((U) => parseFloat(U)) : [parseFloat(B), parseFloat(B), parseFloat(B)],
        offsetSdr: Array.isArray(E) ? E.map((U) => parseFloat(U)) : [parseFloat(E), parseFloat(E), parseFloat(E)],
        offsetHdr: Array.isArray(C) ? C.map((U) => parseFloat(U)) : [parseFloat(C), parseFloat(C), parseFloat(C)],
        hdrCapacityMin: parseFloat(T),
        hdrCapacityMax: parseFloat(O)
      };
    } catch {
    }
    r = u.indexOf("<x:xmpmeta", f);
  }
};
class Jg {
  constructor(u) {
    this.options = {
      debug: u && u.debug !== void 0 ? u.debug : !1,
      extractFII: u && u.extractFII !== void 0 ? u.extractFII : !0,
      extractNonFII: u && u.extractNonFII !== void 0 ? u.extractNonFII : !0
    };
  }
  extract(u) {
    return new Promise((r, f) => {
      const p = this.options.debug, v = new DataView(u.buffer);
      if (v.getUint16(0) !== 65496) {
        f(new Error("Not a valid jpeg"));
        return;
      }
      const A = v.byteLength;
      let B = 2, E = 0, C;
      for (; B < A; ) {
        if (++E > 250) {
          f(new Error(`Found no marker after ${E} loops 😵`));
          return;
        }
        if (v.getUint8(B) !== 255) {
          f(new Error(`Not a valid marker at offset 0x${B.toString(16)}, found: 0x${v.getUint8(B).toString(16)}`));
          return;
        }
        if (C = v.getUint8(B + 1), p && console.log(`Marker: ${C.toString(16)}`), C === 226) {
          p && console.log("Found APP2 marker (0xffe2)");
          const R = B + 4;
          if (v.getUint32(R) === 1297106432) {
            const T = R + 4;
            let M;
            if (v.getUint16(T) === 18761)
              M = !1;
            else if (v.getUint16(T) === 19789)
              M = !0;
            else {
              f(new Error("No valid endianness marker found in TIFF header"));
              return;
            }
            if (v.getUint16(T + 2, !M) !== 42) {
              f(new Error("Not valid TIFF data! (no 0x002A marker)"));
              return;
            }
            const O = v.getUint32(T + 4, !M);
            if (O < 8) {
              f(new Error("Not valid TIFF data! (First offset less than 8)"));
              return;
            }
            const U = T + O, V = v.getUint16(U, !M), P = U + 2;
            let G = 0;
            for (let ce = P; ce < P + 12 * V; ce += 12)
              v.getUint16(ce, !M) === 45057 && (G = v.getUint32(ce + 8, !M));
            const $ = U + 2 + V * 12 + 4, Z = [];
            for (let ce = $; ce < $ + G * 16; ce += 16) {
              const W = {
                MPType: v.getUint32(ce, !M),
                size: v.getUint32(ce + 4, !M),
                // This offset is specified relative to the address of the MP Endian
                // field in the MP Header, unless the image is a First Individual Image,
                // in which case the value of the offset shall be NULL (0x00000000).
                dataOffset: v.getUint32(ce + 8, !M),
                dependantImages: v.getUint32(ce + 12, !M),
                start: -1,
                end: -1,
                isFII: !1
              };
              W.dataOffset ? (W.start = T + W.dataOffset, W.isFII = !1) : (W.start = 0, W.isFII = !0), W.end = W.start + W.size, Z.push(W);
            }
            if (this.options.extractNonFII && Z.length) {
              const ce = new Blob([v]), W = [];
              for (const Ce of Z) {
                if (Ce.isFII && !this.options.extractFII)
                  continue;
                const ne = ce.slice(Ce.start, Ce.end + 1, "image/jpeg");
                W.push(ne);
              }
              r(W);
            }
          }
        }
        B += 2 + v.getUint16(B + 2);
      }
    });
  }
}
const Kg = async (d) => {
  const u = Lg(d);
  if (!u)
    throw new L0("Gain map XMP metadata not found");
  const f = await new Jg({ extractFII: !0, extractNonFII: !0 }).extract(d);
  if (f.length !== 2)
    throw new x0("Gain map recovery image not found");
  return {
    sdr: new Uint8Array(await f[0].arrayBuffer()),
    gainMap: new Uint8Array(await f[1].arrayBuffer()),
    metadata: u
  };
}, YE = (d) => new Promise((u, r) => {
  const f = document.createElement("img");
  f.onload = () => {
    u(f);
  }, f.onerror = (p) => {
    r(p);
  }, f.src = URL.createObjectURL(d);
});
class J0 extends Ay {
  /**
   *
   * @param renderer
   * @param manager
   */
  constructor(u, r) {
    super(r), u && (this._renderer = u), this._internalLoadingManager = new FS();
  }
  /**
   * Specify the renderer to use when rendering the gain map
   *
   * @param renderer
   * @returns
   */
  setRenderer(u) {
    return this._renderer = u, this;
  }
  /**
   * Specify the renderTarget options to use when rendering the gain map
   *
   * @param options
   * @returns
   */
  setRenderTargetOptions(u) {
    return this._renderTargetOptions = u, this;
  }
  /**
   * @private
   * @returns
   */
  prepareQuadRenderer() {
    this._renderer || console.warn("WARNING: An existing WebGL Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.");
    const u = new xg({
      gainMapMax: [1, 1, 1],
      gainMapMin: [0, 0, 0],
      gamma: [1, 1, 1],
      offsetHdr: [1, 1, 1],
      offsetSdr: [1, 1, 1],
      hdrCapacityMax: 1,
      hdrCapacityMin: 0,
      maxDisplayBoost: 1,
      gainMap: new vc(),
      sdr: new vc()
    });
    return new Dy({
      width: 16,
      height: 16,
      type: Ru,
      colorSpace: iy,
      material: u,
      renderer: this._renderer,
      renderTargetOptions: this._renderTargetOptions
    });
  }
  /**
  * @private
  * @param quadRenderer
  * @param metadata
  * @param sdrBuffer
  * @param gainMapBuffer
  */
  async render(u, r, f, p) {
    const v = p ? new Blob([p], { type: "image/jpeg" }) : void 0, A = new Blob([f], { type: "image/jpeg" });
    let B, E, C = !1;
    if (typeof createImageBitmap > "u") {
      const M = await Promise.all([
        v ? YE(v) : Promise.resolve(void 0),
        YE(A)
      ]);
      E = M[0], B = M[1], C = !0;
    } else {
      const M = await Promise.all([
        v ? createImageBitmap(v, { imageOrientation: "flipY" }) : Promise.resolve(void 0),
        createImageBitmap(A, { imageOrientation: "flipY" })
      ]);
      E = M[0], B = M[1];
    }
    const R = new vc(E || new ImageData(2, 2), Bh, Es, Es, Tu, $A, Nm, sy, 1, iy);
    R.flipY = C, R.needsUpdate = !0;
    const T = new vc(B, Bh, Es, Es, Tu, $A, Nm, sy, 1, IS);
    T.flipY = C, T.needsUpdate = !0, u.width = B.width, u.height = B.height, u.material.gainMap = R, u.material.sdr = T, u.material.gainMapMin = r.gainMapMin, u.material.gainMapMax = r.gainMapMax, u.material.offsetHdr = r.offsetHdr, u.material.offsetSdr = r.offsetSdr, u.material.gamma = r.gamma, u.material.hdrCapacityMin = r.hdrCapacityMin, u.material.hdrCapacityMax = r.hdrCapacityMax, u.material.maxDisplayBoost = Math.pow(2, r.hdrCapacityMax), u.material.needsUpdate = !0, u.render();
  }
}
class jg extends J0 {
  /**
   * Loads a gainmap using separate data
   * * sdr image
   * * gain map image
   * * metadata json
   *
   * useful for webp gain maps
   *
   * @param urls An array in the form of [sdr.jpg, gainmap.jpg, metadata.json]
   * @param onLoad Load complete callback, will receive the result
   * @param onProgress Progress callback, will receive a {@link ProgressEvent}
   * @param onError Error callback
   * @returns
   */
  load([u, r, f], p, v, A) {
    const B = this.prepareQuadRenderer();
    let E, C, R;
    const T = async () => {
      if (E && C && R) {
        try {
          await this.render(B, R, E, C);
        } catch (se) {
          this.manager.itemError(u), this.manager.itemError(r), this.manager.itemError(f), typeof A == "function" && A(se), B.disposeOnDemandRenderer();
          return;
        }
        typeof p == "function" && p(B), this.manager.itemEnd(u), this.manager.itemEnd(r), this.manager.itemEnd(f), B.disposeOnDemandRenderer();
      }
    };
    let M = !0, O = 0, U = 0, V = !0, P = 0, G = 0, N = !0, $ = 0, Z = 0;
    const ce = () => {
      if (typeof v == "function") {
        const se = O + P + $, fe = U + G + Z, He = M && V && N;
        v(new ProgressEvent("progress", { lengthComputable: He, loaded: fe, total: se }));
      }
    };
    this.manager.itemStart(u), this.manager.itemStart(r), this.manager.itemStart(f);
    const W = new Ac(this._internalLoadingManager);
    W.setResponseType("arraybuffer"), W.setRequestHeader(this.requestHeader), W.setPath(this.path), W.setWithCredentials(this.withCredentials), W.load(u, async (se) => {
      if (typeof se == "string")
        throw new Error("Invalid sdr buffer");
      E = se, await T();
    }, (se) => {
      M = se.lengthComputable, U = se.loaded, O = se.total, ce();
    }, (se) => {
      this.manager.itemError(u), typeof A == "function" && A(se);
    });
    const Ce = new Ac(this._internalLoadingManager);
    Ce.setResponseType("arraybuffer"), Ce.setRequestHeader(this.requestHeader), Ce.setPath(this.path), Ce.setWithCredentials(this.withCredentials), Ce.load(r, async (se) => {
      if (typeof se == "string")
        throw new Error("Invalid gainmap buffer");
      C = se, await T();
    }, (se) => {
      V = se.lengthComputable, G = se.loaded, P = se.total, ce();
    }, (se) => {
      this.manager.itemError(r), typeof A == "function" && A(se);
    });
    const ne = new Ac(this._internalLoadingManager);
    return ne.setRequestHeader(this.requestHeader), ne.setPath(this.path), ne.setWithCredentials(this.withCredentials), ne.load(f, async (se) => {
      if (typeof se != "string")
        throw new Error("Invalid metadata string");
      R = JSON.parse(se), await T();
    }, (se) => {
      N = se.lengthComputable, Z = se.loaded, $ = se.total, ce();
    }, (se) => {
      this.manager.itemError(f), typeof A == "function" && A(se);
    }), B;
  }
}
class Qg extends J0 {
  /**
   * Loads a JPEG containing gain map metadata
   * Renders a normal SDR image if gainmap data is not found
   *
   * @param url An array in the form of [sdr.jpg, gainmap.jpg, metadata.json]
   * @param onLoad Load complete callback, will receive the result
   * @param onProgress Progress callback, will receive a {@link ProgressEvent}
   * @param onError Error callback
   * @returns
   */
  load(u, r, f, p) {
    const v = this.prepareQuadRenderer(), A = new Ac(this._internalLoadingManager);
    return A.setResponseType("arraybuffer"), A.setRequestHeader(this.requestHeader), A.setPath(this.path), A.setWithCredentials(this.withCredentials), this.manager.itemStart(u), A.load(u, async (B) => {
      if (typeof B == "string")
        throw new Error("Invalid buffer, received [string], was expecting [ArrayBuffer]");
      const E = new Uint8Array(B);
      let C, R, T;
      try {
        const M = await Kg(E);
        C = M.sdr, R = M.gainMap, T = M.metadata;
      } catch (M) {
        if (M instanceof L0 || M instanceof x0)
          console.warn(`Failure to reconstruct an HDR image from ${u}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`), T = {
            gainMapMin: [0, 0, 0],
            gainMapMax: [1, 1, 1],
            gamma: [1, 1, 1],
            hdrCapacityMin: 0,
            hdrCapacityMax: 1,
            offsetHdr: [0, 0, 0],
            offsetSdr: [0, 0, 0]
          }, C = E;
        else
          throw M;
      }
      try {
        await this.render(v, T, C, R);
      } catch (M) {
        this.manager.itemError(u), typeof p == "function" && p(M), v.disposeOnDemandRenderer();
        return;
      }
      typeof r == "function" && r(v), this.manager.itemEnd(u), v.disposeOnDemandRenderer();
    }, f, (B) => {
      this.manager.itemError(u), typeof p == "function" && p(B);
    }), v;
  }
}
const zm = {
  apartment: "lebombo_1k.hdr",
  city: "potsdamer_platz_1k.hdr",
  dawn: "kiara_1_dawn_1k.hdr",
  forest: "forest_slope_1k.hdr",
  lobby: "st_fagans_interior_1k.hdr",
  night: "dikhololo_night_1k.hdr",
  park: "rooitou_park_1k.hdr",
  studio: "studio_small_03_1k.hdr",
  sunset: "venice_sunset_1k.hdr",
  warehouse: "empty_warehouse_01_1k.hdr"
}, K0 = "https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/", Mf = (d) => Array.isArray(d), _y = ["/px.png", "/nx.png", "/py.png", "/ny.png", "/pz.png", "/nz.png"];
function Oh({
  files: d = _y,
  path: u = "",
  preset: r = void 0,
  colorSpace: f = void 0,
  extensions: p
} = {}) {
  r && (Hy(r), d = zm[r], u = K0);
  const v = Mf(d), {
    extension: A,
    isCubemap: B
  } = Oy(d), E = Uy(A);
  if (!E) throw new Error("useEnvironment: Unrecognized file extension: " + d);
  const C = Xl((O) => O.gl);
  a1(() => {
    if (A !== "webp" && A !== "jpg" && A !== "jpeg") return;
    function O() {
      gs.clear(E, v ? [d] : d);
    }
    C.domElement.addEventListener("webglcontextlost", O, {
      once: !0
    });
  }, [d, C.domElement]);
  const R = gs(E, v ? [d] : d, (O) => {
    (A === "webp" || A === "jpg" || A === "jpeg") && O.setRenderer(C), O.setPath == null || O.setPath(u), p && p(O);
  });
  let T = v ? (
    // @ts-ignore
    R[0]
  ) : R;
  if (A === "jpg" || A === "jpeg" || A === "webp") {
    var M;
    T = (M = T.renderTarget) == null ? void 0 : M.texture;
  }
  return T.mapping = B ? PS : WS, T.colorSpace = f ?? (B ? "srgb" : "srgb-linear"), T;
}
const Yg = {
  files: _y,
  path: "",
  preset: void 0,
  extensions: void 0
};
Oh.preload = (d) => {
  const u = {
    ...Yg,
    ...d
  };
  let {
    files: r,
    path: f = ""
  } = u;
  const {
    preset: p,
    extensions: v
  } = u;
  p && (Hy(p), r = zm[p], f = K0);
  const {
    extension: A
  } = Oy(r);
  if (A === "webp" || A === "jpg" || A === "jpeg")
    throw new Error("useEnvironment: Preloading gainmaps is not supported");
  const B = Uy(A);
  if (!B) throw new Error("useEnvironment: Unrecognized file extension: " + r);
  gs.preload(B, Mf(r) ? [r] : r, (E) => {
    E.setPath == null || E.setPath(f), v && v(E);
  });
};
const Xg = {
  files: _y,
  preset: void 0
};
Oh.clear = (d) => {
  const u = {
    ...Xg,
    ...d
  };
  let {
    files: r
  } = u;
  const {
    preset: f
  } = u;
  f && (Hy(f), r = zm[f]);
  const {
    extension: p
  } = Oy(r), v = Uy(p);
  if (!v) throw new Error("useEnvironment: Unrecognized file extension: " + r);
  gs.clear(v, Mf(r) ? [r] : r);
};
function Hy(d) {
  if (!(d in zm)) throw new Error("Preset must be one of: " + Object.keys(zm).join(", "));
}
function Oy(d) {
  var u;
  const r = Mf(d) && d.length === 6, f = Mf(d) && d.length === 3 && d.some((A) => A.endsWith("json")), p = Mf(d) ? d[0] : d;
  return {
    extension: r ? "cube" : f ? "webp" : p.startsWith("data:application/exr") ? "exr" : p.startsWith("data:application/hdr") ? "hdr" : p.startsWith("data:image/jpeg") ? "jpg" : (u = p.split(".").pop()) == null || (u = u.split("?")) == null || (u = u.shift()) == null ? void 0 : u.toLowerCase(),
    isCubemap: r,
    isGainmap: f
  };
}
function Uy(d) {
  return d === "cube" ? kS : d === "hdr" ? _g : d === "exr" ? Hg : d === "jpg" || d === "jpeg" ? Qg : d === "webp" ? jg : null;
}
const Vg = (d) => d.current && d.current.isScene, Zg = (d) => Vg(d) ? d.current : d;
function Ny(d, u, r, f, p = {}) {
  var v, A, B, E;
  p = {
    backgroundBlurriness: 0,
    backgroundIntensity: 1,
    backgroundRotation: [0, 0, 0],
    environmentIntensity: 1,
    environmentRotation: [0, 0, 0],
    ...p
  };
  const C = Zg(u || r), R = C.background, T = C.environment, M = {
    // @ts-ignore
    backgroundBlurriness: C.backgroundBlurriness,
    // @ts-ignore
    backgroundIntensity: C.backgroundIntensity,
    // @ts-ignore
    backgroundRotation: (v = (A = C.backgroundRotation) == null || A.clone == null ? void 0 : A.clone()) !== null && v !== void 0 ? v : [0, 0, 0],
    // @ts-ignore
    environmentIntensity: C.environmentIntensity,
    // @ts-ignore
    environmentRotation: (B = (E = C.environmentRotation) == null || E.clone == null ? void 0 : E.clone()) !== null && B !== void 0 ? B : [0, 0, 0]
  };
  return d !== "only" && (C.environment = f), d && (C.background = f), xi(C, p), () => {
    d !== "only" && (C.environment = T), d && (C.background = R), xi(C, M);
  };
}
function Gy({
  scene: d,
  background: u = !1,
  map: r,
  ...f
}) {
  const p = Xl((v) => v.scene);
  return Qe.useLayoutEffect(() => {
    if (r) return Ny(u, d, p, r, f);
  }), null;
}
function j0({
  background: d = !1,
  scene: u,
  blur: r,
  backgroundBlurriness: f,
  backgroundIntensity: p,
  backgroundRotation: v,
  environmentIntensity: A,
  environmentRotation: B,
  ...E
}) {
  const C = Oh(E), R = Xl((T) => T.scene);
  return Qe.useLayoutEffect(() => Ny(d, u, R, C, {
    backgroundBlurriness: r ?? f,
    backgroundIntensity: p,
    backgroundRotation: v,
    environmentIntensity: A,
    environmentRotation: B
  })), Qe.useEffect(() => () => {
    C.dispose();
  }, [C]), null;
}
function qg({
  children: d,
  near: u = 0.1,
  far: r = 1e3,
  resolution: f = 256,
  frames: p = 1,
  map: v,
  background: A = !1,
  blur: B,
  backgroundBlurriness: E,
  backgroundIntensity: C,
  backgroundRotation: R,
  environmentIntensity: T,
  environmentRotation: M,
  scene: O,
  files: U,
  path: V,
  preset: P = void 0,
  extensions: G
}) {
  const N = Xl((ne) => ne.gl), $ = Xl((ne) => ne.scene), Z = Qe.useRef(null), [ce] = Qe.useState(() => new WE()), W = Qe.useMemo(() => {
    const ne = new $S(f);
    return ne.texture.type = Ru, ne;
  }, [f]);
  Qe.useEffect(() => () => {
    W.dispose();
  }, [W]), Qe.useLayoutEffect(() => {
    if (p === 1) {
      const ne = N.autoClear;
      N.autoClear = !0, Z.current.update(N, ce), N.autoClear = ne;
    }
    return Ny(A, O, $, W.texture, {
      backgroundBlurriness: B ?? E,
      backgroundIntensity: C,
      backgroundRotation: R,
      environmentIntensity: T,
      environmentRotation: M
    });
  }, [d, ce, W.texture, O, $, A, p, N]);
  let Ce = 1;
  return h0(() => {
    if (p === 1 / 0 || Ce < p) {
      const ne = N.autoClear;
      N.autoClear = !0, Z.current.update(N, ce), N.autoClear = ne, Ce++;
    }
  }), /* @__PURE__ */ Qe.createElement(Qe.Fragment, null, mB(/* @__PURE__ */ Qe.createElement(Qe.Fragment, null, d, /* @__PURE__ */ Qe.createElement("cubeCamera", {
    ref: Z,
    args: [u, r, W]
  }), U || P ? /* @__PURE__ */ Qe.createElement(j0, {
    background: !0,
    files: U,
    preset: P,
    path: V,
    extensions: G
  }) : v ? /* @__PURE__ */ Qe.createElement(Gy, {
    background: !0,
    map: v,
    extensions: G
  }) : null), ce));
}
function Fg(d) {
  var u, r, f, p;
  const v = Oh(d), A = d.map || v;
  Qe.useMemo(() => A0({
    GroundProjectedEnvImpl: KB
  }), []), Qe.useEffect(() => () => {
    v.dispose();
  }, [v]);
  const B = Qe.useMemo(() => [A], [A]), E = (u = d.ground) == null ? void 0 : u.height, C = (r = d.ground) == null ? void 0 : r.radius, R = (f = (p = d.ground) == null ? void 0 : p.scale) !== null && f !== void 0 ? f : 1e3;
  return /* @__PURE__ */ Qe.createElement(Qe.Fragment, null, /* @__PURE__ */ Qe.createElement(Gy, bh({}, d, {
    map: A
  })), /* @__PURE__ */ Qe.createElement("groundProjectedEnvImpl", {
    args: B,
    scale: R,
    height: E,
    radius: C
  }));
}
function eC(d) {
  return d.ground ? /* @__PURE__ */ Qe.createElement(Fg, d) : d.map ? /* @__PURE__ */ Qe.createElement(Gy, d) : d.children ? /* @__PURE__ */ Qe.createElement(qg, d) : /* @__PURE__ */ Qe.createElement(j0, d);
}
export {
  Wg as Canvas,
  eC as Environment,
  nC as LinearMipMapLinearFilter,
  $g as OrbitControls,
  lC as RepeatWrapping,
  uC as SRGBColorSpace,
  iC as TextureLoader,
  h0 as useFrame,
  by as useGLTF
};
